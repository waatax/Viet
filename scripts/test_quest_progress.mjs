import assert from 'node:assert/strict';
import { QUEST_UNITS } from '../src/data/questCurriculumData.js';
import { createDefaultQuestState, createQuestSession, submitSessionAnswer, advanceSession, finalizeSession, checkpointSession, getDueMistakes, localDateKey, loadQuestState, saveQuestState, DAY_MS } from '../src/utils/questEngine.js';

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
// Pausing and reloading retain answers/retries without duplicate mistakes or early rewards.
let interrupted = createQuestSession(node);
const firstQ = interrupted.queue[0];
submitSessionAnswer(interrupted, 'incorrect');
let saved = checkpointSession(createDefaultQuestState(), interrupted);
assert.equal(saved.mistakesBank[firstQ.id].count, 1);
assert.equal(saved.totalXp, 0);
assert.equal(saved.nodes[node.id].done, false);
interrupted = JSON.parse(JSON.stringify(saved.savedSession));
assert.equal(submitSessionAnswer(interrupted, firstQ.answer), null);
assert.equal(interrupted.history.at(-1).isCorrect, false);
saved = checkpointSession(saved, interrupted);
assert.equal(saved.mistakesBank[firstQ.id].count, 1);
advanceSession(interrupted);
saved = checkpointSession(saved, interrupted);
interrupted = JSON.parse(JSON.stringify(saved.savedSession));
while (!interrupted.isFinished) {
  submitSessionAnswer(interrupted, interrupted.queue[interrupted.currentIndex].answer);
  saved = checkpointSession(saved, interrupted);
  advanceSession(interrupted);
}
const finished = finalizeSession(saved, interrupted);
assert.equal(finished.newState.savedSession, null);
assert.equal(finished.newState.mistakesBank[firstQ.id].count, 1);
assert.equal(finished.xpGained, 15);

// Failed bosses keep all mistakes but never leave a resumable dead-end or award progress.
const failed = createQuestSession(boss);
let failedState = createDefaultQuestState();
for (let i = 0; i < 3; i++) {
  submitSessionAnswer(failed, 'incorrect');
  failedState = checkpointSession(failedState, failed);
  advanceSession(failed);
}
assert.equal(failed.outOfHearts, true);
assert.equal(failedState.savedSession, null);
assert.equal(Object.values(failedState.mistakesBank).reduce((sum, record) => sum + record.count, 0), 3);
assert.equal(failedState.totalXp, 0);
assert.equal(finalizeSession(failedState, failed), null);

// Real persistence boundary: valid snapshots survive storage; corrupt data recovers safely.
let stored = JSON.stringify(saved);
globalThis.window = {};
globalThis.localStorage = { getItem: () => stored, setItem: (_, value) => { stored = value; } };
assert.equal(loadQuestState().savedSession.currentIndex, saved.savedSession.currentIndex);
stored = JSON.stringify({ savedSession: { queue: [], history: [] } });
assert.equal(loadQuestState().savedSession, null);
stored = '{broken';
assert.equal(loadQuestState().totalXp, 0);
globalThis.localStorage.setItem = () => { throw new Error('Storage denied'); };
assert.equal(saveQuestState(createDefaultQuestState()), false);
delete globalThis.window;
delete globalThis.localStorage;
console.log('PASS: calendar streaks, daily XP, rewards, spaced review, crowns, shuffled options, pause/reload, immediate mistakes and failed-boss recovery.');
