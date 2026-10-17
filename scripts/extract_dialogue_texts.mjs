/**
 * Extracts every situational-dialogue line (Vietnamese + Chinese) used by the
 * dialogue playback engine, then reports Vietnamese MP3 coverage and writes
 * the Chinese TTS work-list consumed by generate_dialogue_zh_audio.py.
 *
 * Usage: node scripts/extract_dialogue_texts.mjs
 * Output: scripts/dialogue_texts.json
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_PATH = path.join(ROOT, 'scripts', 'dialogue_texts.json');

const entrySource = `
export { audioEngine } from './src/services/audioEngine.js';
export { situationalScenarios } from './src/data/situationalScenarios.js';
export { SITUATIONAL_TOPICS } from './src/data/situationalTopicsData.js';
export { numbersAndCurrency, multiScenarios } from './src/data/vietnameseData.js';
export { FAST_TRACK_DAYS } from './src/components/FastTrackModule.jsx';
export { SCENARIO_EXEGESIS } from './src/data/scenarioExegesisData.js';
`;

// Bundle inside the project (scripts/cache is git-ignored) so bare imports like 'react' resolve
const tmpDir = fs.mkdtempSync(path.join(ROOT, 'scripts', 'cache', 'extract-'));
const bundlePath = path.join(tmpDir, 'bundle.mjs');

await build({
  stdin: { contents: entrySource, resolveDir: ROOT, loader: 'js' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: bundlePath,
  loader: { '.jsx': 'jsx', '.css': 'empty', '.json': 'json' },
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
  logLevel: 'error'
});

const mod = await import(pathToFileURL(bundlePath).href);
const { audioEngine, situationalScenarios, SITUATIONAL_TOPICS, numbersAndCurrency, multiScenarios, FAST_TRACK_DAYS, SCENARIO_EXEGESIS } = mod;

const groups = [];
for (const sc of situationalScenarios) {
  const sections = sc.dialogueSections?.length
    ? sc.dialogueSections
    : [{ id: 'd1', lines: sc.dialogues || sc.dialogue || [] }];
  sections.forEach(sec => groups.push({ source: `scenario:${sc.id}:${sec.id}`, lines: sec.lines || [] }));
  groups.push({ source: `scenario-vocab:${sc.id}`, lines: sc.vocab || sc.vocabulary || [] });
}
for (const ms of (multiScenarios || [])) {
  for (const d of (ms.dialogues || [])) {
    groups.push({ source: `multi:${ms.category}:${d.id}`, lines: d.lines || [] });
  }
}
for (const topic of SITUATIONAL_TOPICS) {
  (topic.dialogues || []).forEach(d => groups.push({ source: `topic:${topic.id}:${d.id}`, lines: d.lines || [] }));
}
for (const day of FAST_TRACK_DAYS) {
  groups.push({ source: `fasttrack:day${day.day}`, lines: day.dialogue || [] });
}
(numbersAndCurrency.bankingDialogues || []).forEach((d, i) => groups.push({ source: `banking:${i}`, lines: d.lines || [] }));
groups.push({ source: 'shopping-phrases', lines: numbersAndCurrency.highFrequencyShopping?.items || [] });
// Exegesis cards only ever speak the Vietnamese (formula examples + colloquial extensions)
for (const [id, ex] of Object.entries(SCENARIO_EXEGESIS || {})) {
  const viOnly = [
    ...(ex.coreFormulas || []).map(f => ({ viet: f.exampleVi })),
    ...(ex.colloquialExtensions || []).map(c => ({ viet: c.vi }))
  ];
  groups.push({ source: `exegesis:${id}`, lines: viOnly });
}

const zhMap = new Map();
const viMissing = [];
let totalLines = 0;

for (const g of groups) {
  for (const line of g.lines) {
    const viet = line.viet || line.vi;
    if (!viet) continue;
    totalLines++;
    const viClean = audioEngine.cleanText(viet);
    if (!audioEngine.resolveManifestFile(viClean, 'north') && !audioEngine.resolveManifestFile(viet, 'north')) {
      // Keyed by the cleaned text the engine looks up, but voiced with a pause between "a / b" alternatives
      const speech = audioEngine.cleanText(viet.replace(/\s*\/\s*/g, ', '));
      viMissing.push({ raw: viet, cleaned: viClean, speech, source: g.source });
    }
    if (line.zh) {
      const zhClean = audioEngine.cleanNativeText(line.zh, 'zh');
      if (zhClean && !zhMap.has(zhClean)) zhMap.set(zhClean, { raw: line.zh, cleaned: zhClean, source: g.source });
    }
  }
}

const output = {
  generatedAt: new Date().toISOString(),
  totalLines,
  zh: [...zhMap.values()],
  viMissing
};
fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log(`Groups: ${groups.length} | Lines: ${totalLines}`);
console.log(`Unique Chinese texts: ${output.zh.length}`);
console.log(`Vietnamese lines missing MP3: ${viMissing.length}`);
viMissing.slice(0, 15).forEach(m => console.log(`  - [${m.source}] ${m.cleaned}`));
console.log(`Wrote ${path.relative(ROOT, OUT_PATH)}`);
