// Verifies the 2026-11 expansion: every learning unit grew by at least 10% against the
// baseline counted at commit 2351f42, new items carry an explanation, and nothing duplicates.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

fs.mkdirSync('scripts/cache', { recursive: true });
const entry = path.resolve('scripts/cache/content-growth-entry.jsx');
fs.writeFileSync(entry, `
export { VIETNAMESE_PROVERBS, VIETNAMESE_ETIQUETTE_TIPS } from '../../src/components/LearningPathModule.jsx';
export { FAST_TRACK_DAYS } from '../../src/components/FastTrackModule.jsx';
export { EMERGENCY_CARDS } from '../../src/components/EmergencyKitModule.jsx';
export { TAIWAN_MINIMAL_PAIRS } from '../../src/components/AlphabetModule.jsx';
export { TRICKY_PAIRS, REAL_WORDS } from '../../src/components/ToneGameModule.jsx';
export { MASTER_PRONOUN_MATRIX } from '../../src/components/PronounModule.jsx';
export { GRAMMAR_DRILLS } from '../../src/components/GrammarModule.jsx';
export { RESEARCH_PANELS } from '../../src/components/ScientificMethodModule.jsx';
export { ALL_SHADOWING_PHRASES } from '../../src/components/ShadowingModule.jsx';
export { QUEST_STATS } from '../../src/data/questCurriculumData.js';
export { SITUATIONAL_TOPICS } from '../../src/data/situationalTopicsData.js';
export { macroVocabularyGlossary } from '../../src/data/macroData.js';
export { businessProficiencyTest, currencyBlitzQuestions } from '../../src/data/businessData.js';
export { practicalPhrases, quizzes, hanVietRoots, numbersAndCurrency, accentDifferences } from '../../src/data/vietnameseData.js';
export { SCENARIO_EXEGESIS } from '../../src/data/scenarioExegesisData.js';
export { CONFUSABLE_PAIRS } from '../../src/data/confusableDeckData.js';
export { VOCABULARY, classifyExample } from '../../src/data/vocabularyQuality.js';
export { FREQUENCY_VOCABULARY } from '../../src/data/frequencyVocabularyData.js';
export * as X from '../../src/data/contentExpansion.js';
`);
const out = path.resolve('scripts/cache/content-growth.mjs');
await build({
  entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', packages: 'external', outfile: out, logLevel: 'error',
  loader: { '.css': 'empty', '.png': 'empty', '.jpg': 'empty', '.svg': 'empty', '.webp': 'empty' },
  define: { 'import.meta.env.BASE_URL': '"/Viet/"', 'import.meta.env.BUILD_REVISION': '"test"' }
});
const m = await import(pathToFileURL(out).href);

const sentencePool = (list) => list.filter((p) => p.viet.split(/\s+/).length >= 3).length;
const rawTop1kSentences = m.FREQUENCY_VOCABULARY.filter((w) => w.tier === 'top1k' && m.classifyExample(w) === 'sentence').length;

// Baseline = counts at 2351f42 (before this expansion).
const units = [
  ['path 學習總覽：俗諺＋禮儀', 12, m.VIETNAMESE_PROVERBS.length + m.VIETNAMESE_ETIQUETTE_TIPS.length],
  ['quest 越語闖關：題目', 232, m.QUEST_STATS.totalQuestions],
  ['topics 情境主題：主題字卡', 70, m.SITUATIONAL_TOPICS.reduce((n, t) => n + (t.flashcardDeck || []).length, 0)],
  ['macropol 政經：術語', 22, m.macroVocabularyGlossary.length],
  ['fasttrack 7 天速成：短句', 35, m.FAST_TRACK_DAYS.reduce((n, d) => n + d.phrases.length, 0)],
  ['business 商務：檢定＋匯率題', 11, m.businessProficiencyTest.length + m.currencyBlitzQuestions.length],
  ['emergency 急救：求助卡', 21, m.EMERGENCY_CARDS.length],
  ['alphabet 字母：台灣人易混音', 5, m.TAIWAN_MINIMAL_PAIRS.length],
  ['tonegame 聲調：易混＋實詞', 32, m.TRICKY_PAIRS.length + m.REAL_WORDS.length],
  ['pronoun 稱謂：關係矩陣', 8, m.MASTER_PRONOUN_MATRIX.length],
  ['phrases 實用短句', 805, m.practicalPhrases.length],
  ['conversation 會話：情境研經', 7, Object.keys(m.SCENARIO_EXEGESIS).length],
  ['flashcards 閃卡：易混字組', 27, m.CONFUSABLE_PAIRS.length],
  ['flashcards 閃卡：Top1k 完整例句', rawTop1kSentences, m.VOCABULARY.filter((w) => w.tier === 'top1k' && w.exampleKind === 'sentence').length],
  ['grammar 語法：練習題', 20, m.GRAMMAR_DRILLS.length],
  ['sentence 造句：三詞以上句庫', sentencePool(m.practicalPhrases) - sentencePool(m.X.EXTRA_PHRASES), sentencePool(m.practicalPhrases)],
  ['quiz 測驗：題目', 30, m.quizzes.length],
  ['shadowing 跟讀：句庫', m.ALL_SHADOWING_PHRASES.length - m.X.EXTRA_PHRASES.length, m.ALL_SHADOWING_PHRASES.length],
  ['hanviet 漢越：字根', 67, m.hanVietRoots.length],
  ['shopping 購物：實用句', 12, m.numbersAndCurrency.shoppingPhrases.length],
  ['accent 口音：南北用詞', 24, m.accentDifferences.wordComparisonMatrix.length],
  ['science 科學方法：理論', 14, m.RESEARCH_PANELS.reduce((n, p) => n + p.theories.length, 0)]
];

const rows = units.map(([name, before, after]) => ({ name, before, after, pct: Math.round(((after - before) / before) * 1000) / 10 }));
console.table(rows);
const short = rows.filter((r) => r.after < r.before * 1.1);
assert.deepEqual(short.map((r) => r.name), [], `units below +10%: ${short.map((r) => `${r.name} ${r.pct}%`).join(', ')}`);

// New items are unique and carry an explanation.
const lower = (s) => s.normalize('NFC').toLowerCase().replace(/[.!?…]+$/, '').trim();
const dupPhrases = m.X.EXTRA_PHRASES.filter((p) => m.practicalPhrases.filter((q) => lower(q.viet) === lower(p.viet)).length > 1);
assert.deepEqual(dupPhrases.map((p) => p.viet), [], 'new phrases duplicate existing ones');
assert.ok(m.X.EXTRA_PHRASES.every((p) => p.usageZh && p.zh && p.en), 'every new phrase explains when to use it');
assert.ok(m.X.EXTRA_QUIZZES.every((q) => q.explanationZh && q.optionsZh.length === 4), 'quiz explanations');
assert.ok(m.X.EXTRA_GRAMMAR_DRILLS.every((d) => d.explanationZh && d.options.some((o) => !o.isCorrect && o.mistakeReasonZh)), 'drills explain the wrong option');
assert.ok(m.X.EXTRA_CONFUSABLE_PAIRS.every((p) => p.drill.explanationZh && p.pitfallAlertZh), 'confusables explain the trap');
assert.ok(m.X.EXTRA_QUEST_LISTENING.length === 32 && m.X.EXTRA_QUEST_LISTENING.every(([vi, zh, others, why]) => vi && zh && others.length === 2 && why), 'one explained listening item per quest node');
assert.equal(new Set(m.CONFUSABLE_PAIRS.map((p) => p.id)).size, m.CONFUSABLE_PAIRS.length, 'confusable ids unique');
assert.equal(new Set(m.quizzes.map((q) => q.id)).size, m.quizzes.length, 'quiz ids unique');
assert.equal(new Set(m.GRAMMAR_DRILLS.map((q) => q.id)).size, m.GRAMMAR_DRILLS.length, 'drill ids unique');
const topicIds = m.SITUATIONAL_TOPICS.flatMap((t) => (t.flashcardDeck || []).map((c) => c.id));
assert.equal(new Set(topicIds).size, topicIds.length, 'topic flashcard ids unique');
for (const p of m.X.EXTRA_CONFUSABLE_PAIRS) {
  for (const w of p.words) assert.ok(lower(p.masterSentence).includes(lower(w.viet)), `${p.id}: master sentence uses ${w.viet}`);
}
console.log(`content growth ok · ${rows.length} unit inventories · minimum +${Math.min(...rows.map((r) => r.pct))}%`);
