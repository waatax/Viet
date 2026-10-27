/**
 * test_quest_engine.mjs
 * Comprehensive unit testing for questEngine:
 * 1. Default state & node unlock chain
 * 2. Answer normalization and evaluation
 * 3. Session lifecycle & mistake retry loop ("重點是 使其學會")
 * 4. Boss hearts depletion & crown award
 */

import {
  createDefaultQuestState,
  getNodeStatus,
  evaluateAnswer,
  createQuestSession,
  submitSessionAnswer,
  advanceSession,
  finalizeSession,
  normalizeText
} from '../src/utils/questEngine.js';
import { QUEST_UNITS } from '../src/data/questCurriculumData.js';

let errors = [];

// Test 1: Node status
const s0 = createDefaultQuestState();
if (getNodeStatus(s0, 'u1-n1') !== 'available') errors.push('u1-n1 should be available by default');
if (getNodeStatus(s0, 'u1-n2') !== 'locked') errors.push('u1-n2 should be locked by default');

s0.nodes['u1-n1'] = { done: true };
if (getNodeStatus(s0, 'u1-n2') !== 'available') errors.push('u1-n2 should become available when u1-n1 is done');

// Test 2: Normalization
if (normalizeText("Xin chào, tôi là Minh!") !== "xin chào tôi là minh") {
  errors.push(`Normalization failed: got "${normalizeText("Xin chào, tôi là Minh!")}"`);
}

// Test 3: Answer evaluation
const sampleChoice = { type: 'choice', answer: 'Xin chào', options: ['Xin chào', 'Tạm biệt'] };
if (!evaluateAnswer(sampleChoice, 'Xin chào')) errors.push('Choice eval failed for exact answer');
if (evaluateAnswer(sampleChoice, 'Tạm biệt')) errors.push('Choice eval false positive');

const sampleBuild = { type: 'build', answer: 'Tôi tên là Minh' };
if (!evaluateAnswer(sampleBuild, ['Tôi', 'tên', 'là', 'Minh'])) errors.push('Build eval failed for token array');
if (!evaluateAnswer(sampleBuild, 'Tôi tên là Minh.')) errors.push('Build eval failed for punctuated string');

const sampleInput = { type: 'input', answer: 'đá', alternatives: ['da'] };
if (!evaluateAnswer(sampleInput, 'đá')) errors.push('Input eval failed for primary answer');
if (!evaluateAnswer(sampleInput, 'da')) errors.push('Input eval failed for alternative');

// Test 4: Mastery Retry Loop ("重點是 使其學會")
const dummyNode = {
  id: 'test-node',
  title: 'Test Lesson',
  kind: 'lesson',
  questions: [
    { id: 'q1', type: 'choice', answer: 'A', options: ['A', 'B'], why: 'Why A', hint: 'Hint A', audioText: 'A' },
    { id: 'q2', type: 'choice', answer: 'B', options: ['A', 'B'], why: 'Why B', hint: 'Hint B', audioText: 'B' }
  ]
};

const session = createQuestSession(dummyNode, 'lesson');
if (session.hearts !== null) errors.push('Lesson session should have unlimited hearts');

// Answer q1 wrong
const res1 = submitSessionAnswer(session, 'B');
if (res1.isCorrect) errors.push('Wrong answer was deemed correct');
if (session.retryQueue.length !== 1) errors.push('Wrong answer was not queued into retryQueue');

// Advance to q2
const adv1 = advanceSession(session);
if (adv1.finished) errors.push('Session should not be finished yet');
if (adv1.nextQuestion.id !== 'q2') errors.push('Should advance to q2');

// Answer q2 right
const res2 = submitSessionAnswer(session, 'B');
if (!res2.isCorrect) errors.push('Correct answer deemed wrong');

// Advance - should now pull q1 from retryQueue!
const adv2 = advanceSession(session);
if (adv2.finished) errors.push('Session should not finish because q1 must be retried for mastery!');
if (!adv2.isRetry) errors.push('adv2 should be marked as isRetry');
if (adv2.nextQuestion.id !== 'q1') errors.push('adv2 should re-serve q1');

// Answer q1 correctly now
const res3 = submitSessionAnswer(session, 'A');
if (!res3.isCorrect) errors.push('Retry answer deemed wrong');

// Advance again - now it should finish!
const adv3 = advanceSession(session);
if (!adv3.finished) errors.push('Session should finish after all retries are mastered');

// Test 5: Finalize Session
const fin = finalizeSession(s0, session);
if (fin.xpGained < 15) errors.push('XP gained should be at least 15');
if (fin.perfect) errors.push('Session had a mistake, should not be perfect');

// Test 6: Boss Hearts
const dummyBossNode = {
  id: 'test-boss',
  title: 'Boss Lesson',
  kind: 'boss',
  questions: [
    { id: 'bq1', type: 'choice', answer: 'A', options: ['A', 'B'], why: 'Why A', hint: 'Hint A', audioText: 'A' }
  ]
};
const bossSession = createQuestSession(dummyBossNode, 'lesson');
if (bossSession.hearts !== 3) errors.push(`Boss session should have 3 hearts, got ${bossSession.hearts}`);
submitSessionAnswer(bossSession, 'B'); // heart 2
advanceSession(bossSession);
submitSessionAnswer(bossSession, 'B'); // heart 1
advanceSession(bossSession);
const bres3 = submitSessionAnswer(bossSession, 'B'); // heart 0 -> outOfHearts!
if (!bres3.outOfHearts || !bossSession.outOfHearts) errors.push('Losing 3 hearts should trigger outOfHearts');

// Regression: rewards must match persisted balances and never mutate the input state.
if (fin.newState.gems !== s0.gems + fin.gemsGained) errors.push('Gem reward differs from saved balance');
if (s0.nodes['test-node']) errors.push('Finalization mutated original node state');
if (fin.accuracy !== 50) errors.push('Accuracy must count first attempts only');
if (finalizeSession(fin.newState, session) !== null) errors.push('Finalization must not pay twice');
if (finalizeSession(s0, bossSession) !== null) errors.push('Failed boss must not grant XP or unlock nodes');

const guarded = createQuestSession(dummyNode);
submitSessionAnswer(guarded, 'B');
if (submitSessionAnswer(guarded, 'B') !== null || guarded.history.length !== 1) errors.push('Duplicate submit was accepted');

const reviewState = { ...fin.newState, mistakesBank: { q1: { q: dummyNode.questions[0], count: 1, reviews: 0 } } };
const review = createQuestSession({ id: 'review', kind: 'lesson' }, 'review', [dummyNode.questions[0]]);
submitSessionAnswer(review, 'A');
advanceSession(review);
const reviewed = finalizeSession(reviewState, review);
if (reviewed.newState.nodes.review) errors.push('Review must not create curriculum nodes');
if (reviewed.newState.mistakesBank.q1.reviews !== 1 || reviewed.newState.mistakesBank.q1.dueAt <= Date.now()) errors.push('Review must schedule the next retrieval');
if (reviewed.xpGained !== 15) errors.push('Perfect review should grant 10 XP plus 5 bonus');
if (reviewed.newState.streak !== fin.newState.streak) errors.push('Same day review must not increase streak');

if (errors.length > 0) {
  console.error(`FAIL: ${errors.length} error(s) in questEngine:`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('PASS: questEngine unit tests passed with flying colors!');
  console.log('  - Mastery retry queue verified: learner cannot finish without successfully correcting mistakes.');
  console.log('  - Boss hearts & depletion verified.');
  console.log('  - State unlocks, answer normalization & XP awards fully verified.');
  process.exit(0);
}
