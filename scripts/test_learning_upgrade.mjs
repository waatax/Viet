import assert from 'node:assert/strict';
import { QUEST_UNITS } from '../src/data/questCurriculumData.js';
import { practicalChallenges } from '../src/data/practicalChallenges.js';
import { knowledgeGuides } from '../src/data/knowledgeGuides.js';
import { speechLanguage, readableAnswer, repairAdvice } from '../src/utils/questLearning.js';
import { createDefaultQuestState, createQuestSession, submitSessionAnswer, checkpointSession, advanceSession, loadQuestState, finalizeSession } from '../src/utils/questEngine.js';

const ids = new Set();
for (const unit of QUEST_UNITS) {
  let previous = 0;
  for (const node of unit.nodes) {
    previous += node.questions.length - 1;
    assert.ok(node.questions.length / (node.questions.length - 1) >= 1.1, `${node.id}: at least 10% more exercises`);
    for (const q of node.questions) {
      assert.ok(q.id && !ids.has(q.id), `Unique persisted ID: ${q.id}`); ids.add(q.id);
      assert.ok(q.why && q.audioText && repairAdvice(q, 'wrong'));
    }
  }
  assert.ok((previous + 4) / previous >= 1.1);
}
assert.deepEqual(Object.keys(practicalChallenges).sort(), Object.keys(knowledgeGuides).sort());
for (const [id, [prompt, options, answer, why, transfer]] of Object.entries(practicalChallenges)) {
  assert.ok(prompt && why.length > 20 && transfer.length > 15, id);
  assert.ok(options[answer] && new Set(options).size === options.length, id);
  // Nine concepts + three existing assessments gain a check and an output task.
  assert.ok((knowledgeGuides[id].rows.length + 3 + 2) / (knowledgeGuides[id].rows.length + 3) >= 1.1);
}
const node = QUEST_UNITS[0].nodes[0];
let state = createDefaultQuestState();
const session = createQuestSession(node);
submitSessionAnswer(session, 'wrong'); state = checkpointSession(state, session); advanceSession(session);
submitSessionAnswer(session, 'wrong'); state = checkpointSession(state, session);
assert.equal(Object.keys(state.mistakesBank).length, 2, 'Two different mistakes must never overwrite one another');
const oldQuestion = { ...node.questions[0] }; delete oldQuestion.id;
globalThis.window = {};
globalThis.localStorage = { getItem: () => JSON.stringify({ ...createDefaultQuestState(), mistakesBank: { undefined: { q: oldQuestion, count: 1 } }, savedSession: { ...createQuestSession(node), queue: [oldQuestion], retryQueue: [oldQuestion], history: [{ question: oldQuestion }], currentIndex: 0 } }) };
const migrated = loadQuestState();
assert.ok(migrated.mistakesBank[node.questions[0].id]);
assert.equal(migrated.savedSession.queue[0].id, node.questions[0].id);
assert.equal(migrated.savedSession.history[0].question.id, node.questions[0].id);
delete globalThis.window; delete globalThis.localStorage;
const practice = createQuestSession({ id: 'u8-practice', title: 'Practice', kind: 'lesson' }, 'review', [QUEST_UNITS[7].nodes[0].questions.at(-1)]);
submitSessionAnswer(practice, practice.queue[0].answer); advanceSession(practice);
const result = finalizeSession(createDefaultQuestState(), practice);
assert.equal(practice.isBoss, false);
assert.equal(result.newState.nodes['u8-practice'], undefined, 'Free practice must not unlock the main path');
assert.equal(speechLanguage('請朗讀題目'), 'zh');
assert.equal(speechLanguage('Tôi chưa hiểu.'), 'vi');
assert.equal(readableAnswer({ type: 'match', pairs: [['Xin chào', '你好']] }), 'Xin chào：你好');
assert.match(repairAdvice({ type: 'input', answer: 'bán' }, 'ban'), /聲調/);
console.log('PASS: 32 enriched milestones, 20 practical checks + 20 transfer tasks; distinct mistake IDs, legacy migration, practice isolation and speech routing.');
