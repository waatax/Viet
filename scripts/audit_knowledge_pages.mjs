/**
 * Scores every knowledge (teaching) page against the curriculum and the teaching rubric used
 * for the knowledge-page PDCA cycles. Each criterion maps to one corrective-action area:
 *   depth      – ≥9 knowledge points: 3 basic, 3 applied, 3 advanced
 *   canDo      – ≥3 CEFR-style "I can…" goals (English-teaching practice: observable outcomes)
 *   audio      – every Vietnamese example resolves to a voiced MP3 (and its Chinese meaning)
 *   visual     – a concept map with ≥4 nodes plus a lesson-specific chart
 *   syllabus   – every syllabus chapter of the module links to existing knowledge points
 *   assess     – core, transfer and listening questions (≥3 checks)
 *   text       – Vietnamese spelling, Taiwan Traditional Chinese wording, explanation length,
 *                no example reused across modules
 *   stage      – the guide's stage appears in the seven-stage roadmap that lists the module
 *
 * Usage: node scripts/audit_knowledge_pages.mjs [--json]
 * Writes scripts/cache/knowledge_audit.json and exits 1 while any module fails a criterion.
 */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
fs.mkdirSync(path.join(ROOT, 'scripts', 'cache'), { recursive: true });
const tmp = fs.mkdtempSync(path.join(ROOT, 'scripts', 'cache', 'kaudit-'));
const outfile = path.join(tmp, 'bundle.mjs');
await build({
  stdin: {
    contents: `
      export * from './src/data/knowledgeGuides.js';
      export * as ext from './src/data/knowledgeExtensions.js';
      export { SYLLABUS_REGISTRY } from './src/config/syllabusRegistry.js';
      export { situationalScenarios } from './src/data/situationalScenarios.js';
      export { audioEngine } from './src/services/audioEngine.js';`,
    resolveDir: ROOT, loader: 'js'
  },
  bundle: true, format: 'esm', platform: 'node', outfile,
  loader: { '.jsx': 'jsx', '.css': 'empty', '.json': 'json' },
  external: ['react', 'react-dom', 'lucide-react'],
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
  logLevel: 'error'
});
const m = await import(pathToFileURL(outfile).href);
fs.rmSync(tmp, { recursive: true, force: true });

const { knowledgeGuides, curriculumStages, knowledgeMaps, SYLLABUS_REGISTRY, situationalScenarios, audioEngine, ext } = m;
const knowledgeVisuals = m.knowledgeVisuals || {};
const knowledgeCanDo = m.knowledgeCanDo || {};
const listeningChecks = m.listeningChecks || {};
const chapterKnowledge = m.chapterKnowledge || null;
const speakableVi = m.speakableVi || (t => t);

const VI_WORD = /[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ]+/g;
const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];

const hasViAudio = (text) => {
  const spoken = speakableVi(text);
  const clean = audioEngine.cleanText(spoken);
  return Boolean(clean && (audioEngine.resolveManifestFile(clean, 'north') || audioEngine.resolveManifestFile(spoken, 'north')));
};
const hasZhAudio = (text) => Boolean(audioEngine.resolveNativeFile(text, 'zh'));

const guideSource = fs.readFileSync(path.join(ROOT, 'src/components/KnowledgeGuide.jsx'), 'utf8');
const exampleOwners = new Map();
for (const [id, g] of Object.entries(knowledgeGuides)) {
  for (const row of g.rows) {
    const key = row[1].normalize('NFC').toLowerCase().trim();
    exampleOwners.set(key, [...(exampleOwners.get(key) || []), id]);
  }
}

const results = {};
for (const [id, g] of Object.entries(knowledgeGuides)) {
  const issues = {};
  const add = (k, msg) => { (issues[k] ||= []).push(msg); };

  if (g.rows.length < 9) add('depth', `${g.rows.length}/9 knowledge points`);
  const tiers = g.tiers || [];
  if (g.rows.length >= 9 && !(tiers.filter(t => t === 'basic').length >= 3 && tiers.filter(t => t === 'applied').length >= 3 && tiers.filter(t => t === 'advanced').length >= 3)) add('depth', 'tiers basic/applied/advanced not 3/3/3');

  if ((knowledgeCanDo[id] || []).length < 3) add('canDo', `${(knowledgeCanDo[id] || []).length}/3 can-do goals`);

  const noVi = g.rows.filter(r => !hasViAudio(r[1])).map(r => r[1]);
  const noZh = g.rows.filter(r => !hasZhAudio(r[2])).map(r => r[2]);
  if (noVi.length) add('audio', `${noVi.length} Vietnamese examples without MP3`);
  if (noZh.length) add('audio', `${noZh.length} Chinese meanings without zh-TW MP3`);
  if (!guideSource.includes('PhraseSetPlayer')) add('audio', 'page has no play controls for examples');

  const nodes = knowledgeMaps[id]?.[1]?.length || 0;
  if (nodes < 4) add('visual', `concept map ${nodes}/4 nodes`);
  if (!knowledgeVisuals[id]) add('visual', 'no lesson-specific chart');

  const chapters = SYLLABUS_REGISTRY.filter(c => c.moduleId === id);
  const concepts = new Set(g.rows.map(r => r[0]));
  if (!chapterKnowledge) {
    add('syllabus', `${chapters.length} chapters not linked to knowledge points`);
  } else {
    const unlinked = chapters.filter(c => {
      const links = chapterKnowledge(c, g) || [];
      return !links.length || links.some(l => !concepts.has(l));
    });
    if (unlinked.length) add('syllabus', `${unlinked.length}/${chapters.length} chapters unlinked or linked to missing points: ${unlinked.slice(0, 3).map(c => c.id).join(', ')}`);
  }

  const checks = 1 + (ext.transferQuestions?.[id] ? 1 : 0) + (listeningChecks[id] ? 1 : 0);
  if (checks < 3) add('assess', `${checks}/3 question types (core, transfer, listening)`);
  const listen = listeningChecks[id];
  if (listen && !hasViAudio(listen[0])) add('assess', 'listening item has no audio');

  for (const [concept, vi, zh, rule] of g.rows) {
    for (const word of vi.match(VI_WORD) || []) {
      if ((word.normalize('NFD').match(/[̣̀́̃̉]/g) || []).length > 1) add('text', `double tone: ${word}`);
    }
    for (const text of [concept, zh, rule]) {
      const simp = text.match(SIMPLIFIED);
      if (simp) add('text', `simplified "${simp[0]}" in ${text.slice(0, 20)}`);
      const term = MAINLAND.find(t => text.includes(t));
      if (term) add('text', `mainland term ${term}`);
    }
    if (rule.length < 18 || rule.length > 110) add('text', `rule length ${rule.length}: ${concept}`);
    const owners = exampleOwners.get(vi.normalize('NFC').toLowerCase().trim());
    if (owners.length > 1) add('text', `example repeated (${owners.join(',')}): ${vi.slice(0, 30)}`);
  }

  const listedIn = curriculumStages.map((s, i) => s.modules.includes(id) ? i + 1 : null).filter(Boolean);
  if (listedIn.length && !listedIn.includes(g.stage)) add('stage', `guide stage ${g.stage} but roadmap lists stages ${listedIn.join(',')}`);

  results[id] = issues;
}

const criteria = ['depth', 'canDo', 'audio', 'visual', 'syllabus', 'assess', 'text', 'stage'];
const modules = Object.keys(results);
const table = criteria.map(c => [c, modules.filter(id => !results[id][c]).length]);
const passed = modules.filter(id => !Object.keys(results[id]).length).length;
const score = table.reduce((s, [, n]) => s + n, 0);
fs.writeFileSync(path.join(ROOT, 'scripts', 'cache', 'knowledge_audit.json'), JSON.stringify({ table, results }, null, 2));

console.log(`Knowledge pages: ${passed}/${modules.length} fully pass | rubric score ${score}/${criteria.length * modules.length}`);
console.log(table.map(([c, n]) => `${c} ${n}/${modules.length}`).join(' · '));
if (process.argv.includes('--json')) console.log(JSON.stringify(results, null, 2));
else for (const id of modules) {
  const keys = Object.keys(results[id]);
  if (keys.length) console.log(`  ${id}: ${keys.map(k => `${k}(${results[id][k][0]})`).join(' ')}`);
}
if (passed < modules.length) process.exitCode = 1;
