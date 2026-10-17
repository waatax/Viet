import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { knowledgeGuides, curriculumStages } from '../src/data/knowledgeGuides.js';
import { SYLLABUS_REGISTRY, SYLLABUS_CATEGORIES } from '../src/config/syllabusRegistry.js';
import { situationalScenarios } from '../src/data/situationalScenarios.js';
import { deepAnalysisDossiers } from '../src/data/macroData.js';

const navigation = readFileSync(new URL('../src/config/navigation.js', import.meta.url), 'utf8');
const moduleIds = [...navigation.match(/MODULE_IDS = \[([\s\S]*?)\]/)[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
assert.deepEqual(Object.keys(knowledgeGuides).sort(), [...moduleIds].sort(), 'Every navigable page needs a guide');
assert.equal(curriculumStages.length, 7);
for (const [id, g] of Object.entries(knowledgeGuides)) {
  for (const key of ['title', 'goal', 'trap', 'task', 'question', 'explain']) assert.ok(g[key]?.trim(), `${id}: ${key}`);
  assert.ok(g.stage >= 1 && g.stage <= 7);
  assert.ok(g.rows.length >= 3, `${id}: at least three explained concepts`);
  for (const row of g.rows) assert.ok(row.length === 4 && row.every(c => typeof c === 'string' && c.trim()), `${id}: complete teaching row`);
  assert.equal(g.options.length, new Set(g.options).size, `${id}: distinct quiz options`);
  assert.ok(Number.isInteger(g.answer) && g.answer >= 0 && g.answer < g.options.length, `${id}: quiz answer`);
  assert.ok(SYLLABUS_REGISTRY.some(c => c.moduleId === id), `${id}: searchable syllabus entry`);
}
const ids = new Set();
const categories = new Set(SYLLABUS_CATEGORIES.map(c => c.id));
for (const c of SYLLABUS_REGISTRY) {
  assert.ok(!ids.has(c.id), `Duplicate chapter ${c.id}`); ids.add(c.id);
  assert.ok(moduleIds.includes(c.moduleId), `Unknown module ${c.moduleId}`);
  assert.ok(categories.has(c.category), `Unknown category ${c.category}`);
  assert.ok(c.titleZh && c.descZh, `Empty chapter ${c.id}`);
  if (c.moduleId === 'conversation' && c.targetParam?.scenarioId) assert.ok(situationalScenarios.some(s => s.id === c.targetParam.scenarioId), `Broken scenario ${c.id}`);
  if (c.targetParam?.dossierId) assert.ok(deepAnalysisDossiers.some(d => d.id === c.targetParam.dossierId), `Broken dossier ${c.id}`);
}
for (const s of situationalScenarios) assert.ok(SYLLABUS_REGISTRY.some(c => c.moduleId === 'conversation' && c.targetParam?.scenarioId === s.id), `Missing scenario ${s.id}`);
for (const d of deepAnalysisDossiers) assert.ok(SYLLABUS_REGISTRY.some(c => c.targetParam?.dossierId === d.id), `Missing dossier ${d.id}`);
for (const s of curriculumStages) for (const id of s.modules) assert.ok(knowledgeGuides[id], `Invalid stage link ${id}`);
console.log(`PASS: ${moduleIds.length} module guides, ${SYLLABUS_REGISTRY.length} chapters, ${situationalScenarios.length} scenarios, ${deepAnalysisDossiers.length} dossiers and 7 curriculum stages.`);
