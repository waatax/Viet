import assert from 'node:assert/strict';
import { QUEST_UNITS } from '../src/data/questCurriculumData.js';
import { createDefaultQuestState, createQuestSession, submitSessionAnswer, advanceSession, finalizeSession, getDueMistakes, localDateKey, DAY_MS } from '../src/utils/questEngine.js';

const node = QUEST_UNITS[0].nodes[0];
function complete(state, target = node, mode = 'lesson', questions = null) {
  const session = createQuestSession(target, mode, questions);
  while (!session.isFinished) {
    const q = session.queue[session.currentIndex];
    submitSessionAnswer(session, q.answer);
    advanceSession(session);
  }
  return finalizeSession(state, session);
}

// Real calendar dates: repeated lessons today count once, yesterday extends, a gap resets.
const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
const state = { ...createDefaultQuestState(), streak: 4, lastCompletedDate: localDateKey(yesterday) };
const first = complete(state);
assert.equal(first.newState.streak, 5);
assert.equal(first.newState.dailyXp[localDateKey()], 20);
const second = complete(first.newState);
assert.equal(second.newState.streak, 5);
assert.equal(second.newState.dailyXp[localDateKey()], 40);
assert.equal(complete({ ...state, lastCompletedDate: '2000-01-01' }).newState.streak, 1);
assert.equal(state.nodes[node.id].done, false);

// Correct review schedules intervals; early practice cannot fast-forward mastery.
const q = node.questions[0];
let reviewState = { ...createDefaultQuestState(), mistakesBank: { [q.id]: { q, count: 1 } } };
assert.equal(getDueMistakes(reviewState).length, 1);
reviewState = complete(reviewState, { id: 'review' }, 'review', [q]).newState;
assert.equal(reviewState.mistakesBank[q.id].reviews, 1);
assert.equal(getDueMistakes(reviewState).length, 0);
reviewState = complete(reviewState, { id: 'review' }, 'review', [q]).newState;
assert.equal(reviewState.mistakesBank[q.id].reviews, 1);
reviewState.mistakesBank[q.id].dueAt = Date.now() - DAY_MS;
reviewState = complete(reviewState, { id: 'review' }, 'review', [q]).newState;
assert.equal(reviewState.mistakesBank[q.id].reviews, 2);
assert.ok(reviewState.mistakesBank[q.id].dueAt > Date.now() + DAY_MS * 2);
reviewState.mistakesBank[q.id].dueAt = 0;
reviewState = complete(reviewState, { id: 'review' }, 'review', [q]).newState;
assert.equal(Object.keys(reviewState.mistakesBank).length, 0);
assert.equal(reviewState.nodes.review, undefined);

// A boss gives its crown and 20 gems once; repeat rewards match the displayed balance.
const boss = QUEST_UNITS[0].nodes[3];
const crown = complete(createDefaultQuestState(), boss);
assert.equal(crown.newCrown, true);
assert.equal(crown.newState.gems, 70);
assert.ok(crown.newState.crowns[QUEST_UNITS[0].id]);
const repeatedBoss = complete(crown.newState, boss);
assert.equal(repeatedBoss.newCrown, false);
assert.equal(repeatedBoss.newState.gems - crown.newState.gems, repeatedBoss.gemsGained);

// Shuffle changes presentation only; answers and curriculum remain intact.
const original = JSON.stringify(node);
const random = Math.random;
let shuffled;
try { Math.random = () => 0; shuffled = createQuestSession(node); } finally { Math.random = random; }
assert.notEqual(shuffled.queue[0].options.indexOf(q.answer), 0);
assert.deepEqual([...shuffled.queue[0].options].sort(), [...q.options].sort());
assert.equal(JSON.stringify(node), original);
console.log('PASS: calendar streaks, daily XP, reward balances, spaced review, early-review protection, crowns and shuffled options.');
