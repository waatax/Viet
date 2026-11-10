// Regression tests for the flashcard scheduler, session queue, distractors and Vietnamese diagnostics.
import assert from 'node:assert/strict';
import {
  schedule, previewIntervals, buildSession, requeue, deckCounts, cardStage, toneOf, removeTones,
  removeAllMarks, compareVietnamese, pickDistractors, buildOptions, diagnoseConfusion, meaningsOverlap,
  pickMode, DAY_MS, RELEARN_MS
} from '../src/services/flashcardScheduler.js';

const now = Date.UTC(2026, 10, 10, 8);

// Scheduling: honest, differentiated first intervals; forgotten cards return in-session.
const fresh = {};
assert.equal(schedule(fresh, 'again', now).dueDate, now + RELEARN_MS, 'again → 10 minutes');
assert.equal(schedule(fresh, 'hard', now).interval, 1);
assert.equal(schedule(fresh, 'good', now).interval, 1);
assert.equal(schedule(fresh, 'easy', now).interval, 3, 'easy skips ahead');
const second = schedule(schedule(fresh, 'good', now), 'good', now);
assert.equal(second.interval, 6);
const third = schedule(second, 'good', now);
assert.ok(third.interval > 6 && third.interval <= 16, `third interval grows (${third.interval})`);
const lapsed = schedule(third, 'again', now);
assert.equal(lapsed.interval, 0);
assert.equal(lapsed.lapses, 1);
assert.equal(cardStage(lapsed), 'relearn');
assert.equal(cardStage(undefined), 'new');
const preview = previewIntervals(second, now);
assert.deepEqual(Object.keys(preview), ['again', 'hard', 'good', 'easy']);
assert.equal(preview.again, '10 分鐘');
assert.notEqual(preview.hard, preview.easy, 'buttons show different intervals');
// legacy data from the old engine still schedules
assert.equal(schedule({ easeFactor: 2.5, interval: 6, repetitions: 2, dueDate: now }, 4, now).interval, 15);

// Session: due first (most overdue first), new words interleaved, limits respected.
const deck = Array.from({ length: 30 }, (_, i) => ({ id: `w${i}`, rank: i + 1, viet: `từ ${i}`, zh: `詞${i}` }));
const srs = {
  w5: { dueDate: now - 3 * DAY_MS, interval: 3, repetitions: 2, reviews: 2 },
  w6: { dueDate: now - DAY_MS, interval: 3, repetitions: 2, reviews: 2 },
  w7: { dueDate: now + DAY_MS, interval: 20, repetitions: 4, reviews: 4 }
};
const session = buildSession({ deck, srsData: srs, now, newLimit: 5 });
assert.equal(session.due, 2);
assert.equal(session.fresh, 5);
assert.deepEqual(session.queue.slice(0, 3), ['w5', 'w6', 'w0'], 'overdue first, then first new word');
assert.equal(new Set(session.queue).size, session.queue.length, 'no duplicates');
assert.ok(!session.queue.includes('w7'), 'not-yet-due card excluded');
const counts = deckCounts(deck, srs, now);
assert.deepEqual([counts.due, counts.fresh, counts.mastered, counts.learning], [2, 27, 1, 2]);
const rq = requeue(['a', 'b', 'c', 'd', 'e'], 0, 'a', 3);
assert.deepEqual(rq, ['a', 'b', 'c', 'd', 'a', 'e'], 'missed card returns three cards later');
assert.deepEqual(requeue(['a', 'b'], 1, 'b'), ['a', 'b', 'b'], 'requeue at end of short queue');

// Vietnamese helpers
assert.equal(toneOf('việc'), 'nang');
assert.equal(toneOf('làm'), 'huyen');
assert.equal(toneOf('mã'), 'nga');
assert.equal(toneOf('ma'), 'ngang');
assert.equal(removeTones('Việt Nam'), 'Viêt Nam');
assert.equal(removeAllMarks('đường'), 'duong');
assert.equal(compareVietnamese('ma', 'mà').kind, 'tone');
assert.equal(compareVietnamese('ca phe', 'cà phê').kind, 'marks');
assert.ok(compareVietnamese('ca phe', 'cà phê').typedNoMarks);
assert.equal(compareVietnamese('Cà phê!', 'cà phê').kind, 'exact', 'case & punctuation ignored');
const toneDiff = compareVietnamese('làm viêc', 'làm việc');
assert.equal(toneDiff.kind, 'tone');
assert.equal(toneDiff.details[0].targetTone, 'nang');
const vowel = compareVietnamese('tu', 'tư');
assert.equal(vowel.kind, 'marks');
assert.ok(vowel.details.some((d) => d.kind === 'vowel' && d.target === 'ư'));
assert.equal(compareVietnamese('nhà', 'nhá').kind, 'tone');
assert.equal(compareVietnamese('xin chao', 'cảm ơn').kind, 'different');

// Distractors: never a synonym, never the answer; form-mode prefers tone twins.
assert.ok(meaningsOverlap('不 / 沒有', '沒有'));
assert.ok(!meaningsOverlap('買', '賣'));
const pool = [
  { id: 'a', viet: 'mua', zh: '買', pos: '動詞' },
  { id: 'b', viet: 'múa', zh: '跳舞', pos: '動詞' },
  { id: 'c', viet: 'mưa', zh: '雨', pos: '名詞' },
  { id: 'd', viet: 'bán', zh: '賣', pos: '動詞' },
  { id: 'e', viet: 'sắm', zh: '購買 / 買', pos: '動詞' },
  { id: 'f', viet: 'cà phê', zh: '咖啡', pos: '名詞' },
  { id: 'g', viet: 'ăn', zh: '吃', pos: '動詞' }
];
const target = pool[0];
const formD = pickDistractors(target, pool, { kind: 'form' });
assert.equal(formD.length, 3);
assert.ok(!formD.some((d) => d.id === 'e'), 'synonym excluded');
assert.ok(formD.slice(0, 2).every((d) => ['b', 'c'].includes(d.id)), 'tone/vowel twins ranked first');
const opts = buildOptions(target, pool, { kind: 'meaning' });
assert.equal(opts.length, 4);
assert.equal(opts.filter((o) => o.id === 'a').length, 1);
assert.deepEqual(buildOptions(target, pool).map((o) => o.id), buildOptions(target, pool).map((o) => o.id), 'stable order');
assert.equal(diagnoseConfusion(target, pool[1]).kind, 'tone-twin');
assert.equal(diagnoseConfusion(target, pool[2]).kind, 'mark-twin');
assert.equal(diagnoseConfusion(target, pool[3]).kind, 'same-pos');

// Mode progression
assert.equal(pickMode({ rank: 2 }, undefined), 'flip');
assert.ok(['choice', 'listen'].includes(pickMode({ rank: 2 }, { reviews: 1, repetitions: 1, interval: 1 })));
assert.equal(pickMode({ rank: 3 }, { reviews: 3, repetitions: 2, interval: 6 }), 'reverse');
assert.equal(pickMode({ rank: 4 }, { reviews: 4, repetitions: 3, interval: 15 }), 'type');
assert.equal(pickMode({ rank: 4 }, { reviews: 4, repetitions: 3, interval: 15 }, 'auto', { allowTyping: false }), 'reverse');
assert.equal(pickMode({ rank: 4 }, undefined, 'listen'), 'listen');

console.log('flashcard engine tests passed');
