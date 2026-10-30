import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { QUEST_UNITS } from '../src/data/questCurriculumData.js';
import { practicalChallenges } from '../src/data/practicalChallenges.js';
import { speechLanguage } from '../src/utils/questLearning.js';
fs.mkdirSync('scripts/cache', { recursive: true });
const bundle = path.resolve('scripts/cache/learning-audio.mjs');
await build({ entryPoints: ['src/services/audioEngine.js'], bundle: true, format: 'esm', platform: 'node', outfile: bundle, define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' }, logLevel: 'error' });
const { audioEngine } = await import(pathToFileURL(bundle).href);
const zh = new Map(), viMissing = new Map();
const add = (raw, lang = speechLanguage(raw)) => {
  const cleaned = lang === 'zh' ? audioEngine.cleanNativeText(raw, 'zh') : audioEngine.cleanText(raw);
  if (!cleaned) return;
  const file = lang === 'zh' ? audioEngine.resolveNativeFile(raw, 'zh') : audioEngine.resolveManifestFile(raw, 'north');
  if (file && fs.existsSync(path.join('public/audio', file)) && fs.statSync(path.join('public/audio', file)).size > 200) return;
  (lang === 'zh' ? zh : viMissing).set(cleaned, { raw, cleaned });
};
for (const unit of QUEST_UNITS) for (const node of unit.nodes) for (const q of node.questions) {
  add(q.prompt); add(q.audioText); add(q.why, 'zh');
  if (q.type !== 'match') add(q.answer);
  else q.pairs.forEach(([vi]) => add(vi));
}
for (const [prompt, options, answer, why, transfer] of Object.values(practicalChallenges)) {
  add(prompt); add(transfer); add(`${options[answer]}。${why}`, 'zh');
}
fs.writeFileSync('scripts/cache/learning_audio.json', JSON.stringify({ zh: [...zh.values()], viMissing: [...viMissing.values()] }));
console.log(`Missing learning audio: ${zh.size} Chinese, ${viMissing.size} Vietnamese`);
if (process.argv.includes('--check') && (zh.size || viMissing.size)) process.exitCode = 1;
