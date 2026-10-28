/**
 * questEngine.js
 * Core state machine and persistence logic for the Duolingo-style Vietnamese Quest system.
 * Handles:
 * - Hearts, Streaks, Crowns, Gems, XP
 * - Interactive answer normalization & evaluation (choice, listen, build, match, input)
 * - Pedagogical error recovery: Active Retry Queue ensuring mastery before session end
 * - Spaced Repetition Mistakes Bank
 */

import { QUEST_UNITS } from '../data/questCurriculumData.js';

export const QUEST_STORAGE_KEY = 'viet_quest_progress_v2';
export const DAY_MS = 86400000;
export const MAX_HEARTS = 3;
export const DAILY_XP_GOAL = 30;
export const localDateKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
export const getDueMistakes = (state, now = Date.now()) => Object.values(state.mistakesBank || {}).filter(record => record.q && (!record.dueAt || record.dueAt <= now));
const shuffle = (items) => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
export const XP_RATES = {
  lesson: 15,
  boss: 30,
  perfectBonus: 5,
  review: 10
};

export const normalizeText = (text) => {
  return String(text ?? '')
    .normalize('NFKC')
    .replace(/[’‘`]/g, "'")
    .replace(/[“”]/g, '"')
    .toLowerCase()
    .replace(/[.,!?;:()\[\]{}…—–\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

export const createDefaultQuestState = () => ({
  nodes: {
    'u1-n1': { done: false, crowns: 0, attempts: 0, bestAccuracy: 0 }
  },
  crowns: {},
  gems: 50,
  freezes: 1,
  streak: 0,
  lastCompletedDate: '',
  mistakesBank: {},
  totalXp: 0,
  dailyXp: {},
  savedSession: null
});

export const loadQuestState = () => {
  if (typeof window === 'undefined') return createDefaultQuestState();
  try {
    const raw = localStorage.getItem(QUEST_STORAGE_KEY);
    if (!raw) return createDefaultQuestState();
    const parsed = JSON.parse(raw);
    const defaults = createDefaultQuestState();
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return defaults;
    const state = { ...defaults, ...parsed };
    for (const key of ['nodes', 'crowns', 'mistakesBank', 'dailyXp']) {
      state[key] = parsed[key] && typeof parsed[key] === 'object' && !Array.isArray(parsed[key]) ? parsed[key] : defaults[key];
    }
    const session = state.savedSession;
    if (session && (!Array.isArray(session.queue) || !session.queue.length || !Number.isInteger(session.currentIndex) || !session.queue[session.currentIndex] || !Array.isArray(session.history) || !Array.isArray(session.retryQueue) || session.isFinished || session.outOfHearts)) state.savedSession = null;
    return state;
  } catch (e) {
    return createDefaultQuestState();
  }
};

export const saveQuestState = (state) => {
  if (typeof window === 'undefined') return false;
  try {
    localStorage.setItem(QUEST_STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) { return false; }
};

/**
 * Determine node status: 'locked' | 'available' | 'completed' | 'crowned'
 */
export const getNodeStatus = (state, nodeId) => {
  const nodeData = state.nodes[nodeId];
  if (nodeData?.crowned) return 'crowned';
  if (nodeData?.done) return 'completed';

  // Find node position in curriculum
  let prevNodeId = null;
  let found = false;
  for (const unit of QUEST_UNITS) {
    for (const node of unit.nodes) {
      if (node.id === nodeId) {
        found = true;
        break;
      }
      prevNodeId = node.id;
    }
    if (found) break;
  }

  // First node is always available
  if (!prevNodeId) return 'available';

  // Check if previous node is completed or crowned
  const prevData = state.nodes[prevNodeId];
  if (prevData?.done || prevData?.crowned) {
    return 'available';
  }

  return 'locked';
};

/**
 * Check if an answer is correct
 */
export const evaluateAnswer = (question, userAnswer) => {
  if (!question) return false;

  switch (question.type) {
    case 'match':
      return userAnswer === 'matched';

    case 'choice':
    case 'listen':
      return question.answer === userAnswer;

    case 'build': {
      const normTarget = normalizeText(question.answer);
      const normUser = normalizeText(Array.isArray(userAnswer) ? userAnswer.join(' ') : userAnswer);
      return normTarget === normUser;
    }

    case 'input': {
      const normUser = normalizeText(userAnswer);
      const targets = [question.answer, ...(question.alternatives || [])].map(normalizeText);
      return targets.includes(normUser);
    }

    default:
      return false;
  }
};

/**
 * Create a fresh interactive learning session
 */
export const createQuestSession = (node, mode = 'lesson', customQuestions = null) => {
  const rawQuestions = customQuestions || node.questions || [];
  // Shallow copy so we can append mistake retries
  const queue = rawQuestions.map(question => ({ ...question,
    ...(question.options ? { options: shuffle(question.options) } : {}),
    ...(question.words ? { words: shuffle(question.words) } : {})
  }));
  const isBoss = mode !== 'review' && node.kind === 'boss';

  return {
    nodeId: node.id,
    nodeTitle: node.title,
    nodeKind: node.kind,
    mode,
    isBoss,
    hearts: isBoss ? MAX_HEARTS : null,
    queue,
    totalInitial: queue.length,
    currentIndex: 0,
    combo: 0,
    maxCombo: 0,
    mistakesCount: 0,
    retryQueue: [],
    history: [],
    isFinished: false,
    outOfHearts: false
  };
};

/**
 * Process a submitted answer in the session
 */
export const submitSessionAnswer = (session, userAnswer) => {
  if (session.isFinished || session.outOfHearts) return null;
  if (session.answeredIndex === session.currentIndex) return null;

  const currentQ = session.queue[session.currentIndex];
  if (!currentQ) return null;
  session.answeredIndex = session.currentIndex;
  const isCorrect = evaluateAnswer(currentQ, userAnswer);

  const result = {
    question: currentQ,
    userAnswer,
    isCorrect,
    why: currentQ.why,
    hint: currentQ.hint,
    correctAnswer: currentQ.answer
  };

  session.history.push(result);

  if (isCorrect) {
    session.combo += 1;
    if (session.combo > session.maxCombo) {
      session.maxCombo = session.combo;
    }
  } else {
    session.combo = 0;
    session.mistakesCount += 1;

    // In Boss mode, lose a heart
    if (session.isBoss && session.hearts !== null) {
      session.hearts = Math.max(0, session.hearts - 1);
      if (session.hearts === 0) {
        session.outOfHearts = true;
        return { ...result, outOfHearts: true };
      }
    }

    // "重點是 使其學會": Push to retry queue so user attempts again before completion
    session.retryQueue.push(currentQ);
  }

  return result;
};

/**
 * Advance to next question or pull from retry queue
 */
export const advanceSession = (session) => {
  if (session.outOfHearts) return { finished: false, outOfHearts: true };
  if (session.answeredIndex !== session.currentIndex) return { finished: false };

  // Next in queue
  if (session.currentIndex + 1 < session.queue.length) {
    session.currentIndex += 1;
    return { finished: false, nextQuestion: session.queue[session.currentIndex], isRetry: false };
  }

  // If initial queue finished, check retryQueue
  if (session.retryQueue.length > 0) {
    const retryItem = session.retryQueue.shift();
    session.queue.push(retryItem);
    session.currentIndex += 1;
    return {
      finished: false,
      nextQuestion: retryItem,
      isRetry: true,
      remainingRetries: session.retryQueue.length
    };
  }

  // Finished!
  session.isFinished = true;
  return { finished: true, session };
};

// Save answered progress immediately, including mistakes from abandoned or failed lessons.
// The history cursor prevents a retry, pause or finalization from recording the same answer twice.
export const checkpointSession = (state, session) => {
  const next = { ...state, mistakesBank: { ...state.mistakesBank } };
  for (const item of session.history.slice(session.recordedHistoryCount || 0)) {
    if (item.isCorrect) continue;
    const q = item.question;
    const previous = next.mistakesBank[q.id];
    next.mistakesBank[q.id] = { count: (previous?.count || 0) + 1, lastWrong: Date.now(), reviews: 0, dueAt: Date.now(), q };
  }
  session.recordedHistoryCount = session.history.length;
  next.savedSession = session.isFinished || session.outOfHearts ? null : JSON.parse(JSON.stringify(session));
  saveQuestState(next);
  return next;
};

/**
 * Finalize session results and update persistent user state
 */
export const finalizeSession = (state, session) => {
  if (!session.isFinished || !session.totalInitial || session.outOfHearts || session.finalized) return null;
  session.finalized = true;
  const newState = { ...checkpointSession(state, session), nodes: { ...state.nodes }, crowns: { ...state.crowns }, dailyXp: { ...state.dailyXp }, savedSession: null };
  const isBoss = session.isBoss;
  const isReview = session.mode === 'review';
  const perfect = session.mistakesCount === 0;

  // Calculate XP
  let xpGained = isReview ? XP_RATES.review : isBoss ? XP_RATES.boss : XP_RATES.lesson;
  if (perfect) xpGained += XP_RATES.perfectBonus;

  newState.totalXp = (newState.totalXp || 0) + xpGained;

  // Mark node done
  const existingNode = newState.nodes[session.nodeId] || { crowns: 0, attempts: 0 };
  const attempts = (existingNode.attempts || 0) + 1;
  const accuracy = Math.round(session.history.slice(0, session.totalInitial).filter(item => item.isCorrect).length / Math.max(1, session.totalInitial) * 100);

  let newCrown = false;
  let crownUnitId = null;

  if (isBoss && !session.outOfHearts) {
    // Find unit
    const unit = QUEST_UNITS.find(u => u.nodes.some(n => n.id === session.nodeId));
    if (unit && !newState.crowns[unit.id]) {
      newState.crowns[unit.id] = Date.now();
      newCrown = true;
      crownUnitId = unit.id;
      newState.gems = (newState.gems || 0) + 20; // 20 gems for a crown!
    }
  }

  if (!isReview) newState.nodes[session.nodeId] = {
    done: true,
    crowned: isBoss && !session.outOfHearts,
    attempts,
    bestAccuracy: Math.max(existingNode.bestAccuracy || 0, accuracy),
    lastCompleted: Date.now()
  };

  // Unlock next node in sequence
  let nextNodeId = null;
  let takeNext = false;
  for (const unit of QUEST_UNITS) {
    for (const node of unit.nodes) {
      if (takeNext) {
        nextNodeId = node.id;
        break;
      }
      if (node.id === session.nodeId) {
        takeNext = true;
      }
    }
    if (nextNodeId) break;
  }

  if (!isReview && nextNodeId && !newState.nodes[nextNodeId]) {
    newState.nodes[nextNodeId] = { done: false, crowns: 0, attempts: 0, bestAccuracy: 0 };
  }

  // Add mistakes to persistent mistakesBank
  if (isReview) {
    for (const item of session.history.slice(0, session.totalInitial)) {
      const record = newState.mistakesBank[item.question.id];
      if (!record || !item.isCorrect || record.dueAt > Date.now()) continue;
      const reviews = (record.reviews || 0) + 1;
      if (reviews >= 3) delete newState.mistakesBank[item.question.id];
      else newState.mistakesBank[item.question.id] = { ...record, reviews, dueAt: Date.now() + DAY_MS * (reviews === 1 ? 1 : 3) };
    }
  }

  const today = localDateKey();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (newState.lastCompletedDate !== today) {
    newState.streak = newState.lastCompletedDate === localDateKey(yesterday) ? (newState.streak || 0) + 1 : 1;
  }
  newState.lastCompletedDate = today;
  newState.dailyXp[today] = (newState.dailyXp[today] || 0) + xpGained;
  const gemsGained = newCrown ? 20 : 5;
  if (!newCrown) newState.gems = (newState.gems ?? 0) + gemsGained;

  // Save to storage
  saveQuestState(newState);

  return {
    newState,
    xpGained,
    perfect,
    accuracy,
    newCrown,
    crownUnitId,
    gemsGained
  };
};
