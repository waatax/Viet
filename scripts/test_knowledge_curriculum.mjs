import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { knowledgeGuides, curriculumStages, knowledgeMaps, knowledgeVisuals, knowledgeCanDo, listeningChecks, chapterKnowledge } from '../src/data/knowledgeGuides.js';
import { scenarioCategories } from '../src/data/scenarioCategories.js';
import { SYLLABUS_REGISTRY, SYLLABUS_CATEGORIES } from '../src/config/syllabusRegistry.js';
import { situationalScenarios } from '../src/data/situationalScenarios.js';
import { deepAnalysisDossiers } from '../src/data/macroData.js';
import { learningPath } from '../src/data/vietnameseData.js';
import { knowledgeExtensions, transferQuestions, correctionSteps } from '../src/data/knowledgeExtensions.js';

const navigation = readFileSync(new URL('../src/config/navigation.js', import.meta.url), 'utf8');
const moduleIds = [...navigation.match(/MODULE_IDS = \[([\s\S]*?)\]/)[1].matchAll(/'([^']+)'/g)].map(m => m[1]);
assert.deepEqual(Object.keys(knowledgeGuides).sort(), [...moduleIds].sort(), 'Every navigable page needs a guide');
assert.equal(curriculumStages.length, 7);
assert.deepEqual(learningPath.map(s => s.vocabTarget), [150, 400, 1200, 2500, 5000, 8000, 12000], 'Seven-stage word targets must match the curriculum');
assert.deepEqual(learningPath.map(s => s.level), curriculumStages.map(s => s.level), 'Both roadmaps use the same stages');
assert.ok(learningPath[6].modules.includes('hanviet'), 'Literature stage links to the literature lesson');
assert.equal(knowledgeGuides.accent.stage, 1, 'Accent orientation begins in stage 1, with listening extension in stage 4');
for (const [id, g] of Object.entries(knowledgeGuides)) {
  for (const key of ['title', 'goal', 'trap', 'task', 'question', 'explain']) assert.ok(g[key]?.trim(), `${id}: ${key}`);
  assert.ok(g.stage >= 1 && g.stage <= 7);
  assert.equal(g.rows.length, 9, `${id}: nine knowledge points (basic, applied, advanced)`);
  assert.deepEqual(g.tiers, ['basic', 'basic', 'basic', 'applied', 'applied', 'applied', 'advanced', 'advanced', 'advanced'], `${id}: tiers`);
  assert.ok(knowledgeCanDo[id]?.length >= 3, `${id}: can-do goals`);
  assert.ok(knowledgeVisuals[id]?.title && knowledgeVisuals[id]?.note, `${id}: lesson chart with caption and note`);
  const [listenVi, listenOptions, listenAnswer, listenWhy] = listeningChecks[id] || [];
  assert.ok(listenVi?.trim() && listenWhy?.trim() && listenOptions?.length >= 3 && new Set(listenOptions).size === listenOptions.length && listenAnswer >= 0 && listenAnswer < listenOptions.length, `${id}: listening check`);
  for (const chapter of SYLLABUS_REGISTRY.filter(c => c.moduleId === id)) {
    const links = chapterKnowledge(chapter, g);
    assert.ok(links.length && links.every(concept => g.rows.some(r => r[0] === concept)), `${chapter.id}: linked to existing knowledge points`);
  }
  assert.equal(knowledgeExtensions[id].length, 3, `${id}: three module-specific application cases`);
  const [question, options, answer, explanation] = transferQuestions[id];
  assert.ok(question.trim() && explanation.trim(), `${id}: explained transfer question`);
  assert.equal(options.length, new Set(options).size, `${id}: unique transfer options`);
  assert.ok(Number.isInteger(answer) && answer >= 0 && answer < options.length, `${id}: transfer answer`);
  assert.equal(new Set(g.rows.map(r => r[0])).size, g.rows.length, `${id}: unique knowledge points`);
  assert.ok(knowledgeMaps[id]?.[1]?.length >= 4, `${id}: lesson-specific concept diagram`);
  for (const row of g.rows) assert.ok(row.length === 4 && row.every(c => typeof c === 'string' && c.trim()), `${id}: complete teaching row`);
  assert.equal(g.options.length, new Set(g.options).size, `${id}: distinct quiz options`);
  assert.ok(Number.isInteger(g.answer) && g.answer >= 0 && g.answer < g.options.length, `${id}: quiz answer`);
  assert.ok(SYLLABUS_REGISTRY.some(c => c.moduleId === id), `${id}: searchable syllabus entry`);
}
assert.deepEqual(scenarioCategories, Object.fromEntries(situationalScenarios.map(s => [s.id, s.category])), 'scenarioCategories.js is in sync with situationalScenarios');
const ids = new Set();
assert.deepEqual(Object.keys(transferQuestions).sort(), [...moduleIds].sort());
assert.equal(correctionSteps.length, 4);
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
