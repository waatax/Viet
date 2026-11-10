// Guards the corrected Top-1,000 layer and the cleanup applied to the rest of the 10k bank.
import assert from 'node:assert/strict';
import { FREQUENCY_VOCABULARY } from '../src/data/frequencyVocabularyData.js';
import { TOP1K_CURATED, VOCABULARY, VOCAB_TIERS, classifyExample, cleanExampleZh } from '../src/data/vocabularyQuality.js';

const ALLOWED_POS = new Set(['名詞', '動詞', '形容詞', '副詞', '代名詞', '介詞', '連詞', '助詞', '量詞', '數詞', '感嘆詞', '限定詞']);
const lower = (s = '') => s.normalize('NFC').toLowerCase();
const raw1k = FREQUENCY_VOCABULARY.filter((w) => w.tier === 'top1k');

assert.equal(TOP1K_CURATED.size, 1000, 'every Top-1000 rank has a curated row');
const problems = [];
for (const w of raw1k) {
  const row = TOP1K_CURATED.get(w.rank);
  if (!row) { problems.push(`#${w.rank} missing`); continue; }
  if (row.viet !== w.viet) problems.push(`#${w.rank} word mismatch ${row.viet} ≠ ${w.viet}`);
  if (row.skip) continue;
  if (!row.zh || /[|]/.test(row.zh)) problems.push(`#${w.rank} zh`);
  if (!row.en) problems.push(`#${w.rank} en`);
  if (!ALLOWED_POS.has(row.pos)) problems.push(`#${w.rank} pos ${row.pos}`);
  if (row.example) {
    if (!lower(row.example).includes(lower(w.viet))) problems.push(`#${w.rank} example lacks word: ${row.example}`);
    if (!/[.?!…]$/.test(row.example)) problems.push(`#${w.rank} example punctuation`);
    if (!/[。！？]$/.test(row.exampleZh)) problems.push(`#${w.rank} exampleZh punctuation: ${row.exampleZh}`);
  }
}
assert.deepEqual(problems, [], problems.join('\n'));

const refined1k = VOCABULARY.filter((w) => w.tier === 'top1k');
assert.ok(refined1k.length >= 990 && refined1k.length <= 1000, `noise rows hidden (${refined1k.length})`);
assert.ok(refined1k.every((w) => w.verified), 'Top-1000 marked verified');
const sentences = refined1k.filter((w) => w.exampleKind === 'sentence' && classifyExample(w) === 'sentence' && lower(w.example).includes(lower(w.viet)));
assert.equal(sentences.length, refined1k.length, 'every visible Top-1000 card has a full sentence containing the word');
const byWord = Object.fromEntries(refined1k.map((w) => [w.viet, w]));
assert.equal(byWord['đang'].zh, '正在');
assert.ok(byWord['xe'].zh.includes('車'));
assert.ok(byWord['năm'].zh.includes('年'));
assert.equal(byWord['ai'].zh, '誰');
assert.ok(!VOCABULARY.some((w) => ['c', 'm', 'i', 'v', 'b', 'the'].includes(w.viet) && w.tier === 'top1k'), 'letter noise removed');

// Rest of the bank: placeholders and template sentences never reach learners.
const rest = VOCABULARY.filter((w) => w.tier !== 'top1k');
assert.ok(!rest.some((w) => /^(vocabulary|common term)$/i.test(w.en)), 'no placeholder English');
assert.ok(!rest.some((w) => /在工作上非常必需|在這種情境下請注意/.test(w.exampleZh)), 'no template example translations');
assert.ok(!rest.some((w) => /rất cần thiết cho công việc/.test(w.example)), 'no template examples');
assert.equal(cleanExampleZh('公里勝於強權。 天理。'), '公里勝於強權。');
assert.equal(cleanExampleZh('屋子不大, 收拾得倒還乾淨。書。'), '屋子不大，收拾得倒還乾淨。');
assert.equal(cleanExampleZh('啊?你明天到底去不去呀?助。'), '啊？你明天到底去不去呀？');

const tiers = Object.fromEntries(VOCAB_TIERS.map((t) => [t.id, t]));
console.log(`vocab quality ok · Top1k verified ${tiers.top1k.verified}/${tiers.top1k.count} · sentences: ${VOCAB_TIERS.map((t) => `${t.id} ${t.withSentence}`).join(', ')}`);

// Sino-Vietnamese roots: homophone mismatches removed or corrected.
const hv = Object.fromEntries(refined1k.map((w) => [w.viet, w.hanViet]));
assert.equal(hv['anh'], '', 'anh (brother) is not 英');
assert.equal(hv['ai'], '', 'ai (who) is not 哀');
assert.equal(hv['xa'], '', 'xa (far) is not 車');
assert.equal(hv['phòng'], '房');
assert.equal(hv['điện'], '電');
assert.equal(hv['học'], '學', 'true cognates kept');
console.log('han-viet roots ok');
