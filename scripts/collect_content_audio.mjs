// Lists new learner-facing text that has no offline audio yet, in the format
// scripts/generate_dialogue_audio.py accepts:  { zh: [{ raw, cleaned }], viMissing: [{ raw, cleaned }] }
//   node scripts/collect_content_audio.mjs            → writes scripts/cache/content_audio.json
//   node scripts/collect_content_audio.mjs --check    → exit 1 if anything is still missing
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { VOCABULARY } from '../src/data/vocabularyQuality.js';
import * as X from '../src/data/contentExpansion.js';

fs.mkdirSync('scripts/cache', { recursive: true });
const bundle = path.resolve('scripts/cache/content-audio-engine.mjs');
await build({
  entryPoints: ['src/services/audioEngine.js'],
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile: bundle,
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
  logLevel: 'error'
});
const { audioEngine } = await import(pathToFileURL(bundle).href);

const zh = new Map();
const vi = new Map();
const exists = (file) => file && fs.existsSync(path.join('public/audio', file)) && fs.statSync(path.join('public/audio', file)).size > 200;
const addVi = (raw) => {
  if (!raw) return;
  const cleaned = audioEngine.cleanText(raw);
  if (!cleaned || exists(audioEngine.resolveManifestFile(raw, 'north'))) return;
  vi.set(cleaned, { raw: String(raw).normalize('NFC').trim(), cleaned });
};
const addZh = (raw) => {
  if (!raw) return;
  const cleaned = audioEngine.cleanNativeText(raw, 'zh');
  if (!cleaned || exists(audioEngine.resolveNativeFile(raw, 'zh'))) return;
  zh.set(cleaned, { raw, cleaned });
};

// Top 1,000: word, corrected example sentence, and the gloss read aloud by "瀏覽與連播".
for (const w of VOCABULARY.filter((x) => x.verified)) {
  addVi(w.viet);
  addVi(w.example);
  addZh(w.zh.split(' / ').slice(0, 2).join('，'));
}

// Content expansion (every unit).
X.EXTRA_PROVERBS.forEach((p) => addVi(p.audioText));
X.EXTRA_ETIQUETTE_TIPS.forEach((t) => addVi(t.audioText));
Object.values(X.EXTRA_TOPIC_FLASHCARDS).forEach((c) => addVi(c.viet));
X.EXTRA_MACRO_GLOSSARY.forEach((m) => { addVi(m.viet); addVi(m.sample); });
X.EXTRA_FAST_TRACK_PHRASES.forEach((p) => addVi(p.viet));
X.EXTRA_EMERGENCY_CARDS.forEach((c) => addVi(c.viet));
X.EXTRA_MINIMAL_PAIRS.forEach((p) => { addVi(p.audio1); addVi(p.audio2); });
[...X.EXTRA_TRICKY_TONES, ...X.EXTRA_REAL_TONE_WORDS].forEach((w) => addVi(w.word));
X.EXTRA_PRONOUN_ROLES.forEach((r) => addVi(r.exampleVi));
X.EXTRA_PHRASES.forEach((p) => addVi(p.viet));
Object.values(X.EXTRA_SCENARIO_EXEGESIS).forEach((e) => {
  e.coreFormulas.forEach((f) => addVi(f.exampleVi));
  e.colloquialExtensions.forEach((c) => addVi(c.vi));
});
X.EXTRA_CONFUSABLE_PAIRS.forEach((p) => { p.words.forEach((w) => addVi(w.viet)); addVi(p.masterSentence); });
X.EXTRA_GRAMMAR_DRILLS.forEach((d) => { addVi(d.audioText); d.options.forEach((o) => addVi(o.vi)); });
X.EXTRA_HANVIET_ROOTS.forEach((r) => r.compounds.forEach((c) => addVi(c.viet)));
X.EXTRA_SHOPPING_PHRASES.forEach((p) => addVi(p.viet));
X.EXTRA_ACCENT_WORDS.forEach((w) => addVi(w.north));

const out = { zh: [...zh.values()], viMissing: [...vi.values()] };
fs.writeFileSync('scripts/cache/content_audio.json', JSON.stringify(out, null, 1));
console.log(`Missing content audio: ${out.zh.length} Chinese, ${out.viMissing.length} Vietnamese`);
if (process.argv.includes('--check') && (out.zh.length || out.viMissing.length)) process.exitCode = 1;
