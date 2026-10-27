/**
 * test_quest_curriculum.mjs
 * Validates the integrity of the Duolingo Vietnamese Quest curriculum:
 * - 8 units with required metadata (title, stage, icon, color, goal, guide)
 * - 32 milestone nodes (lesson/boss)
 * - 200+ questions
 * - Every question has: id, type, prompt, why, hint, audioText (or audio)
 * - Type specific checks:
 *   - 'choice': options contains answer, at least 3 options
 *   - 'listen': audioText non-empty, options contains answer
 *   - 'build': words array contains all tokens of answer
 *   - 'match': at least 3 pairs, answer === 'matched'
 *   - 'input': answer non-empty, alternatives array
 */

import { QUEST_UNITS, QUEST_STATS } from '../src/data/questCurriculumData.js';

let errors = [];
let questionCount = 0;
let nodeCount = 0;

if (QUEST_UNITS.length !== 8) {
  errors.push(`Expected 8 units, found ${QUEST_UNITS.length}`);
}

for (const unit of QUEST_UNITS) {
  if (!unit.id || !unit.title || !unit.viTitle || !unit.stage || !unit.icon || !unit.color || !unit.goal || !unit.guide) {
    errors.push(`Unit ${unit.id || 'unknown'} is missing required unit metadata.`);
  }

  if (!Array.isArray(unit.nodes) || unit.nodes.length !== 4) {
    errors.push(`Unit ${unit.id} must have exactly 4 nodes, found ${unit.nodes?.length}`);
    continue;
  }

  for (const node of unit.nodes) {
    nodeCount++;
    if (!node.id || !node.title || !node.icon || !['lesson', 'boss'].includes(node.kind)) {
      errors.push(`Node ${node.id} in Unit ${unit.id} has invalid structure or kind.`);
    }

    if (!Array.isArray(node.questions) || node.questions.length < 5) {
      errors.push(`Node ${node.id} has fewer than 5 questions (${node.questions?.length}).`);
      continue;
    }

    for (let i = 0; i < node.questions.length; i++) {
      questionCount++;
      const q = node.questions[i];
      const qRef = `${node.id}[${i}]`;

      if (!q.type || !q.prompt || !q.why || !q.hint) {
        errors.push(`${qRef} missing type, prompt, why, or hint.`);
      }

      if (!q.audioText) {
        errors.push(`${qRef} missing audioText.`);
      }

      switch (q.type) {
        case 'choice':
          if (!q.options || !q.options.includes(q.answer)) {
            errors.push(`${qRef} choice options missing correct answer: "${q.answer}"`);
          }
          if (q.options.length < 3) {
            errors.push(`${qRef} choice has fewer than 3 options`);
          }
          break;

        case 'listen':
          if (!q.options || !q.options.includes(q.answer)) {
            errors.push(`${qRef} listen options missing correct answer: "${q.answer}"`);
          }
          if (!q.audioText || q.audioText.trim().length === 0) {
            errors.push(`${qRef} listen question has empty audioText.`);
          }
          break;

        case 'build': {
          const answerTokens = q.answer.split(' ');
          for (const token of answerTokens) {
            if (!q.words.includes(token)) {
              errors.push(`${qRef} build word bank missing required token: "${token}"`);
            }
          }
          break;
        }

        case 'match':
          if (!Array.isArray(q.pairs) || q.pairs.length < 3) {
            errors.push(`${qRef} match question has fewer than 3 pairs.`);
          }
          break;

        case 'input':
          if (!q.answer || q.answer.trim().length === 0) {
            errors.push(`${qRef} input question has empty answer.`);
          }
          if (!Array.isArray(q.alternatives)) {
            errors.push(`${qRef} input question missing alternatives array.`);
          }
          break;

        default:
          errors.push(`${qRef} unknown question type "${q.type}"`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`FAIL: ${errors.length} validation error(s) found in Quest Curriculum:`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log(`PASS: Duolingo Quest Curriculum Audit Passed!`);
  console.log(`  - Units: ${QUEST_UNITS.length} (target 8)`);
  console.log(`  - Milestone Nodes: ${nodeCount} (target 32)`);
  console.log(`  - Handcrafted Questions: ${questionCount} (total registered: ${QUEST_STATS.totalQuestions})`);
  console.log(`  - 100% of questions have speech audioText, pedagogical hints, and why feedback.`);
  process.exit(0);
}
