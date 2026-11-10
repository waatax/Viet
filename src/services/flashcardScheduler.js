/**
 * Flashcard scheduling, session building and answer diagnostics (pure functions, no React).
 *
 * Scheduling is SM-2 with three corrections that matter to learners:
 *  - the rating buttons show the interval that will really be scheduled (previewIntervals);
 *  - a forgotten card comes back in the same session (relearning) instead of disappearing for a day;
 *  - Hard / Good / Easy give different first intervals, so "Easy" is not a wasted click.
 * Stored shape stays compatible with the old srsEngine: { easeFactor, interval, repetitions, dueDate }.
 */

export const DAY_MS = 24 * 60 * 60 * 1000;
export const RELEARN_MS = 10 * 60 * 1000;
export const MASTERED_INTERVAL = 14;

export const RATINGS = [
  { id: 'again', q: 0, key: '1', labelZh: '忘了', labelEn: 'Again', tone: 'again' },
  { id: 'hard', q: 3, key: '2', labelZh: '模糊', labelEn: 'Hard', tone: 'hard' },
  { id: 'good', q: 4, key: '3', labelZh: '記得', labelEn: 'Good', tone: 'good' },
  { id: 'easy', q: 5, key: '4', labelZh: '秒答', labelEn: 'Easy', tone: 'easy' }
];

export const RATING_QUALITY = { again: 0, hard: 3, good: 4, easy: 5 };

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));

export const schedule = (card = {}, q, now = Date.now()) => {
  const quality = typeof q === 'string' ? (RATING_QUALITY[q] ?? 4) : q;
  let { easeFactor = 2.5, interval = 0, repetitions = 0, lapses = 0, reviews = 0 } = card || {};
  let dueDate;
  if (quality < 3) {
    if (repetitions > 0) lapses += 1;
    repetitions = 0;
    interval = 0;
    dueDate = now + RELEARN_MS;
  } else {
    if (repetitions === 0) interval = quality === 5 ? 3 : 1;
    else if (repetitions === 1) interval = quality === 3 ? 3 : quality === 4 ? 6 : 8;
    else {
      const factor = quality === 3 ? 1.2 : quality === 5 ? easeFactor * 1.3 : easeFactor;
      interval = Math.max(interval + 1, Math.round(interval * factor));
    }
    repetitions += 1;
    dueDate = now + interval * DAY_MS;
  }
  easeFactor = clamp(easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)), 1.3, 3);
  return { easeFactor: Number(easeFactor.toFixed(3)), interval, repetitions, lapses, reviews: reviews + 1, dueDate, lastReview: now };
};

export const formatInterval = (card, { zh = true } = {}) => {
  if (!card) return '';
  if (card.interval === 0) return zh ? '10 分鐘' : '10 min';
  const d = card.interval;
  if (d < 30) return zh ? `${d} 天` : `${d}d`;
  if (d < 365) return zh ? `${Math.round(d / 30)} 個月` : `${Math.round(d / 30)}mo`;
  return zh ? `${(d / 365).toFixed(1)} 年` : `${(d / 365).toFixed(1)}y`;
};

/** What each rating button would schedule for this card right now. */
export const previewIntervals = (card, now = Date.now(), opts) =>
  Object.fromEntries(RATINGS.map((r) => [r.id, formatInterval(schedule(card, r.q, now), opts)]));

export const cardStage = (card) => {
  if (!card || !card.reviews) return 'new';
  if (card.interval === 0) return 'relearn';
  if (card.interval >= MASTERED_INTERVAL) return 'mastered';
  return 'learning';
};

/**
 * Build today's queue: overdue reviews first (most overdue first), then new words in frequency
 * order. New words are interleaved after every few reviews so a session never feels like a wall.
 */
export const buildSession = ({ deck, srsData = {}, now = Date.now(), newLimit = 10, reviewLimit = 60, onlyIds = null }) => {
  const pool = onlyIds ? deck.filter((c) => onlyIds.includes(c.id)) : deck;
  if (onlyIds) return { queue: pool.map((c) => c.id), due: 0, fresh: pool.length };
  const due = pool
    .filter((c) => srsData[c.id]?.dueDate && srsData[c.id].dueDate <= now)
    .sort((a, b) => srsData[a.id].dueDate - srsData[b.id].dueDate)
    .slice(0, reviewLimit);
  const fresh = pool.filter((c) => !srsData[c.id]).slice(0, newLimit);
  const queue = [];
  let r = 0;
  let n = 0;
  while (r < due.length || n < fresh.length) {
    for (let k = 0; k < 3 && r < due.length; k += 1) queue.push(due[r++].id);
    if (n < fresh.length) queue.push(fresh[n++].id);
  }
  return { queue, due: due.length, fresh: fresh.length };
};

/** Put a missed card back a few positions later so it is retrieved again before the session ends. */
export const requeue = (queue, index, cardId, gap = 3) => {
  const next = [...queue];
  const at = Math.min(next.length, index + 1 + gap);
  next.splice(at, 0, cardId);
  return next;
};

export const deckCounts = (deck, srsData = {}, now = Date.now()) => {
  const out = { total: deck.length, due: 0, fresh: 0, learning: 0, mastered: 0 };
  deck.forEach((c) => {
    const s = srsData[c.id];
    if (!s) { out.fresh += 1; return; }
    if (s.dueDate && s.dueDate <= now) out.due += 1;
    if (s.interval >= MASTERED_INTERVAL) out.mastered += 1;
    else out.learning += 1;
  });
  return out;
};

/** Cards that become due within the next `days` days — for the session summary forecast. */
export const forecast = (srsData = {}, ids, now = Date.now(), days = 1) => {
  const until = now + days * DAY_MS;
  return ids.filter((id) => srsData[id]?.dueDate && srsData[id].dueDate <= until).length;
};

// ── Vietnamese text helpers ────────────────────────────────────────────────

const TONE_MARKS = { '̀': 'huyen', '́': 'sac', '̃': 'nga', '̉': 'hoi', '̣': 'nang' };
const TONE_RE = /[̣̀́̃̉]/g;

export const TONES = {
  ngang: { id: 'ngang', zh: '平聲', symbol: '—', hint: '高平', color: 'var(--tone-ngang)' },
  huyen: { id: 'huyen', zh: '玄聲', symbol: '↘', hint: '低降', color: 'var(--tone-huyen)' },
  sac: { id: 'sac', zh: '銳聲', symbol: '↗', hint: '高升', color: 'var(--tone-sac)' },
  hoi: { id: 'hoi', zh: '問聲', symbol: '↘↗', hint: '降後揚', color: 'var(--tone-hoi)' },
  nga: { id: 'nga', zh: '跌聲', symbol: '↗~', hint: '喉塞上揚', color: 'var(--tone-nga)' },
  nang: { id: 'nang', zh: '重聲', symbol: '↓•', hint: '短促下沉', color: 'var(--tone-nang)' }
};

export const toneOf = (syllable = '') => {
  const marks = syllable.normalize('NFD').match(TONE_RE);
  return marks ? TONE_MARKS[marks[0]] : 'ngang';
};

export const removeTones = (s = '') => s.normalize('NFD').replace(TONE_RE, '').normalize('NFC');
export const removeAllMarks = (s = '') =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').normalize('NFC');

const clean = (s = '') => s.toLowerCase().normalize('NFC').replace(/[.,!?;:…"“”'’()]/g, ' ').replace(/\s+/g, ' ').trim();

export const syllables = (s = '') => clean(s).split(' ').filter(Boolean);

export const editDistance = (a = '', b = '') => {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i += 1) {
    const cur = [i];
    for (let j = 1; j <= n; j += 1) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
};

const VOWEL_FAMILY = [['a', 'ă', 'â'], ['e', 'ê'], ['o', 'ô', 'ơ'], ['u', 'ư'], ['d', 'đ']];
const familyOf = (ch) => VOWEL_FAMILY.find((f) => f.includes(ch));

/** Explain how two Vietnamese strings differ, syllable by syllable, in learner terms. */
export const compareVietnamese = (given = '', target = '') => {
  const g = syllables(given);
  const t = syllables(target);
  const exact = g.join(' ') === t.join(' ');
  const sameLetters = removeAllMarks(g.join(' ')) === removeAllMarks(t.join(' '));
  const sameBase = removeTones(g.join(' ')) === removeTones(t.join(' '));
  const details = [];
  if (sameLetters && g.length === t.length) {
    t.forEach((syl, i) => {
      const gs = g[i];
      if (gs === syl) return;
      const toneG = toneOf(gs);
      const toneT = toneOf(syl);
      if (toneG !== toneT) details.push({ kind: 'tone', index: i, given: gs, target: syl, givenTone: toneG, targetTone: toneT });
      const baseG = removeTones(gs);
      const baseT = removeTones(syl);
      if (baseG !== baseT) {
        [...baseT].forEach((ch, k) => {
          if (baseG[k] && baseG[k] !== ch && familyOf(ch) && familyOf(ch) === familyOf(baseG[k])) {
            details.push({ kind: 'vowel', index: i, given: baseG[k], target: ch, syllable: syl });
          }
        });
      }
    });
  }
  let kind = 'different';
  if (exact) kind = 'exact';
  else if (sameBase) kind = 'tone';
  else if (sameLetters) kind = 'marks';
  else if (editDistance(removeAllMarks(g.join(' ')), removeAllMarks(t.join(' '))) <= 2) kind = 'spelling';
  return { kind, exact, sameLetters, details, typedNoMarks: g.length > 0 && removeAllMarks(g.join(' ')) === g.join(' ') };
};

// ── Distractors & diagnostics ──────────────────────────────────────────────

const glossTokens = (zh = '') => zh.split(/\s*[/／,，;；、]\s*/).map((s) => s.replace(/[（(].*?[）)]/g, '').trim()).filter(Boolean);

export const meaningsOverlap = (a = '', b = '') => {
  const ta = glossTokens(a);
  const tb = glossTokens(b);
  return ta.some((x) => tb.some((y) => x === y || (x.length > 1 && y.length > 1 && (x.includes(y) || y.includes(x)))));
};

const seeded = (seed) => {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
};

const hash = (str = '') => [...str].reduce((h, ch) => (h * 31 + ch.codePointAt(0)) >>> 0, 7);

/**
 * Pick plausible wrong options. `kind` = 'meaning' (options shown in Chinese) or 'form'
 * (options shown in Vietnamese: prefer tone twins and look-alike spellings — the real errors).
 */
export const pickDistractors = (card, pool, { kind = 'meaning', count = 3, salt = 0 } = {}) => {
  const rand = seeded(hash(card.id + ':' + salt));
  const targetBase = removeAllMarks(card.viet.toLowerCase());
  const targetSyl = syllables(card.viet).length;
  const scored = [];
  for (const c of pool) {
    if (c.id === card.id || c.viet.toLowerCase() === card.viet.toLowerCase()) continue;
    if (meaningsOverlap(c.zh, card.zh)) continue;
    let score = rand();
    const base = removeAllMarks(c.viet.toLowerCase());
    if (kind === 'form') {
      if (base === targetBase) score += 6;
      else if (editDistance(base, targetBase) <= 1) score += 4;
      else if (editDistance(base, targetBase) <= 2) score += 2;
      if (syllables(c.viet).length === targetSyl) score += 1.5;
    } else {
      if (c.pos && c.pos === card.pos) score += 2;
      if (c.category && c.category === card.category) score += 1;
      if (base === targetBase) score += 1.5;
    }
    scored.push([score, c]);
  }
  scored.sort((a, b) => b[0] - a[0]);
  const chosen = [];
  for (const [, c] of scored) {
    if (chosen.length >= count) break;
    if (chosen.some((x) => meaningsOverlap(x.zh, c.zh) || x.viet === c.viet)) continue;
    chosen.push(c);
  }
  return chosen;
};

export const buildOptions = (card, pool, opts = {}) => {
  const distractors = pickDistractors(card, pool, opts);
  const rand = seeded(hash(card.id + ':pos:' + (opts.salt || 0)));
  const at = Math.floor(rand() * (distractors.length + 1));
  const options = [...distractors];
  options.splice(at, 0, card);
  return options;
};

/** Why was this option confused with the answer? Returns a learner-facing category. */
export const diagnoseConfusion = (answer, chosen) => {
  if (!chosen || !answer) return { kind: 'unknown' };
  const cmp = compareVietnamese(chosen.viet, answer.viet);
  if (cmp.kind === 'tone') return { kind: 'tone-twin', details: cmp.details };
  if (cmp.kind === 'marks') return { kind: 'mark-twin', details: cmp.details };
  if (cmp.kind === 'spelling') return { kind: 'look-alike' };
  if (answer.pos && answer.pos === chosen.pos) return { kind: 'same-pos', pos: answer.pos };
  return { kind: 'retrieval' };
};

/** Mode for a card in "auto" sessions: expose → recognise → listen → produce (desirable difficulty). */
export const pickMode = (card, srs, preferred = 'auto', { allowTyping = true } = {}) => {
  if (preferred !== 'auto') return preferred;
  const stage = cardStage(srs);
  if (stage === 'new') return 'flip';
  const reps = srs.repetitions || 0;
  const flipper = (card.rank || 0) % 2 === 0;
  if (stage === 'relearn' || reps <= 1) return flipper ? 'choice' : 'listen';
  if (reps === 2) return 'reverse';
  return allowTyping && flipper ? 'type' : 'reverse';
};

export const STUDY_MODES = [
  { id: 'auto', labelZh: '智慧混合', descZh: '新字先認識，熟了再考聽力與拼寫' },
  { id: 'flip', labelZh: '翻卡回想', descZh: '看越文，先在心裡說出意思再翻面' },
  { id: 'choice', labelZh: '看字選義', descZh: '四選一，錯了立刻告訴你混淆原因' },
  { id: 'listen', labelZh: '聽音選義', descZh: '只聽聲音，訓練不看字也聽得懂' },
  { id: 'reverse', labelZh: '看中選越', descZh: '從相似拼字中選對的越文，專練聲調' },
  { id: 'type', labelZh: '聽寫拼字', descZh: '打出越文，逐音節檢查聲調與符號' }
];
