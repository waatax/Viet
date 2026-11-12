const KEY = 'viet_listening_study_v1';
const DAY = 86400000;
export function readListeningStudy() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (!data || typeof data !== 'object' || Array.isArray(data)) return {};
    return Object.fromEntries(Object.entries(data).filter(([, v]) => v && typeof v === 'object' && Number.isFinite(v.due) && Number.isInteger(v.level) && v.level >= 0 && v.level <= 3));
  } catch { return {}; }
}
export function recordListeningCheck(records, id, correct, now = Date.now()) {
  const previous = records[id];
  // Early repeat never advances the schedule; errors always return to reinforcement.
  const level = correct ? Math.min(3, (previous?.level || 0) + (!previous || now >= previous.due ? 1 : 0)) : 0;
  const due = correct && previous && now < previous.due ? previous.due : now + (correct ? [1, 1, 3, 7][level] * DAY : 10 * 60000);
  return { ...records, [id]: { level, due, correct, attempts: (previous?.attempts || 0) + 1 } };
}
export function saveListeningStudy(records) {
  try { localStorage.setItem(KEY, JSON.stringify(records)); return true; } catch { return false; }
}
export function makeListeningRound(lesson, random = Math.random) {
  const shuffle = values => {
    const copy = [...values];
    for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
    return copy;
  };
  const questions = lesson.lines.map((line, i) => {
    const options = shuffle(lesson.lines.map(l => l.zh));
    return { id: `${lesson.id}:audio:${i}`, audio: line.viet, prompt: '聽越文，選出正確中文。', options, answer: options.indexOf(line.zh), why: `${line.viet}＝${line.zh}。${line.note}` };
  });
  const options = shuffle(lesson.check.options);
  return [...shuffle(questions), { ...lesson.check, id: `${lesson.id}:concept`, options, answer: options.indexOf(lesson.check.options[lesson.check.answer]) }];
}
