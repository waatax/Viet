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
export { SYMPTOM_POINT_SPEAK_LIST, EMERGENCY_CARDS } from './src/components/EmergencyKitModule.jsx';
export { SCENARIO_EXEGESIS } from './src/data/scenarioExegesisData.js';
export { EXTRA_PLAYBACK_LESSONS } from './src/data/conversationLibrary.js';
export { practicalPhrases } from './src/data/vietnameseData.js';
`;

// Bundle inside the project (scripts/cache is git-ignored) so bare imports like 'react' resolve
fs.mkdirSync(path.join(ROOT, 'scripts', 'cache'), { recursive: true });
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
const { audioEngine, situationalScenarios, SITUATIONAL_TOPICS, numbersAndCurrency, multiScenarios, FAST_TRACK_DAYS, SYMPTOM_POINT_SPEAK_LIST, EMERGENCY_CARDS, SCENARIO_EXEGESIS, EXTRA_PLAYBACK_LESSONS, practicalPhrases } = mod;

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
  if (topic.quickGuide?.survivalTable?.length) {
    groups.push({ source: `topic-survival:${topic.id}`, lines: topic.quickGuide.survivalTable });
  }
}
for (const day of FAST_TRACK_DAYS) {
  groups.push({ source: `fasttrack:day${day.day}`, lines: day.dialogue || [] });
  if (day.phrases?.length) {
    groups.push({ source: `fasttrack-phrases:day${day.day}`, lines: day.phrases });
  }
}
(numbersAndCurrency.bankingDialogues || []).forEach((d, i) => groups.push({ source: `banking:${i}`, lines: d.lines || [] }));
for (const lesson of EXTRA_PLAYBACK_LESSONS) {
  lesson.dialogueSections.forEach(sec => groups.push({ source: `lesson:${lesson.id}:${sec.id}`, lines: sec.lines }));
}
const phraseCategories = new Map();
practicalPhrases.forEach(p => phraseCategories.set(p.category, [...(phraseCategories.get(p.category) || []), p]));
phraseCategories.forEach((lines, category) => groups.push({ source: `phrases:${category}`, lines }));
groups.push({ source: 'shopping-phrases', lines: numbersAndCurrency.highFrequencyShopping?.items || [] });
groups.push({ source: 'emergency-symptoms', lines: SYMPTOM_POINT_SPEAK_LIST || [] });
groups.push({ source: 'emergency-cards', lines: EMERGENCY_CARDS || [] });
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
const audioFailures = [];
const audioFiles = new Set();
let totalLines = 0;

for (const g of groups) {
  for (const line of g.lines) {
    const viet = line.viet || line.vi;
    if (!viet) continue;
    totalLines++;
    const viClean = audioEngine.cleanText(viet);
    for (const accent of ['north', 'south']) {
      const file = audioEngine.resolveManifestFile(viClean, accent) || audioEngine.resolveManifestFile(viet, accent);
      if (file) audioFiles.add(file);
      if (!file || !fs.existsSync(path.join(ROOT, 'public/audio', file)) || fs.statSync(path.join(ROOT, 'public/audio', file)).size < 200) {
        audioFailures.push({ source: g.source, lang: 'vi', accent, text: viet, file });
      }
    }
    if (!audioEngine.resolveManifestFile(viClean, 'north') && !audioEngine.resolveManifestFile(viet, 'north')) {
      // Keyed by the cleaned text the engine looks up, but voiced with a pause between "a / b" alternatives
      const speech = audioEngine.cleanText(viet.replace(/\s*\/\s*/g, ', '));
      viMissing.push({ raw: viet, cleaned: viClean, speech, source: g.source });
    }
    if (line.zh) {
      const zhClean = audioEngine.cleanNativeText(line.zh, 'zh');
      const file = audioEngine.resolveNativeFile(line.zh, 'zh');
      if (file) audioFiles.add(file);
      if (!file || !fs.existsSync(path.join(ROOT, 'public/audio', file)) || fs.statSync(path.join(ROOT, 'public/audio', file)).size < 200) {
        audioFailures.push({ source: g.source, lang: 'zh-TW', text: line.zh, file });
      }
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
let previousText = '';
try {
  previousText = fs.readFileSync(OUT_PATH, 'utf-8');
  const previous = JSON.parse(previousText);
  if (JSON.stringify({ ...previous, generatedAt: null }) === JSON.stringify({ ...output, generatedAt: null })) {
    output.generatedAt = previous.generatedAt;
  }
} catch {}
const outputText = JSON.stringify(output, null, 2);
if (outputText !== previousText) fs.writeFileSync(OUT_PATH, outputText, 'utf-8');
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log(`Groups: ${groups.length} | Lines: ${totalLines}`);
console.log(`Unique Chinese texts: ${output.zh.length}`);
console.log(`Vietnamese lines missing MP3: ${viMissing.length}`);
viMissing.slice(0, 15).forEach(m => console.log(`  - [${m.source}] ${m.cleaned}`));
console.log(`${outputText === previousText ? 'Unchanged' : 'Wrote'} ${path.relative(ROOT, OUT_PATH)}`);
console.log(`Vietnamese (both preferences) + Taiwan Mandarin file failures: ${audioFailures.length}`);
if (audioFailures.length) {
  audioFailures.slice(0, 20).forEach(failure => console.error(JSON.stringify(failure)));
  process.exitCode = 1;
}

// Optional production verification: compare the deployed file headers with the local bank.
if (process.argv.includes('--pages')) {
  const files = [...audioFiles];
  const failures = [];
  let cursor = 0;
  let checked = 0;
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (cursor < files.length) {
      const file = files[cursor++];
      const url = new URL(`audio/${file}`, 'https://waatax.github.io/Viet/');
      try {
        const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(15000) });
        const expected = fs.statSync(path.join(ROOT, 'public/audio', file)).size;
        if (!response.ok || !/audio|octet-stream/i.test(response.headers.get('content-type') || '') || Number(response.headers.get('content-length')) !== expected) {
          failures.push({ file, status: response.status, bytes: response.headers.get('content-length'), expected });
        }
      } catch (error) {
        failures.push({ file, error: error.message });
      }
      checked++;
      if (checked % 200 === 0) console.log(`Pages audio: ${checked}/${files.length}`);
    }
  }));
  console.log(`Pages audio headers: ${checked - failures.length}/${checked} passed`);
  if (failures.length) {
    failures.slice(0, 20).forEach(failure => console.error(JSON.stringify(failure)));
    process.exitCode = 1;
  }
}
