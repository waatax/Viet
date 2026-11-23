// Adaptive Ultralearning Telemetry & Direct-Then-Drill Engine
// Implements: 85% Difficulty Sweet Spot, Quality from Quantity, Variability Over Repetition,
// Bottleneck Detection, and Speaking Exposure Ladder persistence.

import { allModuleMasteryItems, subjectSparks } from '../data/knowledgeMasteryData';
import { NEAR_NATIVE_PILLARS } from '../data/ultralearningSystem';
import { loadModuleMasteredPoints } from './bridgeProgress';
import { loadKnowledgeProgress } from './knowledgeProgress';

const STORAGE_KEY = 'viet_ultralearning_state_v1';

const getTodayKey = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const DEFAULT_STATE = {
  recentOutcomes: [], // rolling last 20 booleans
  dailyOutput: { date: '', count: 0, spoken: 0 },
  totalOutput: 0,
  exposureLevel: 1,
  studyMode: 'sweetspot', // 'guided' | 'sweetspot' | 'immersion'
  interleaveAccents: true,
  blindListening: true,
  speechSpeed: 1.0,
  pillarWeaknessHits: {
    phonetics: 0,
    vocabulary: 0,
    immersion: 0,
    syntax: 0,
    speaking: 0
  }
};

export function loadUltralearningState() {
  const today = getTodayKey();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...DEFAULT_STATE, dailyOutput: { date: today, count: 0, spoken: 0 } };
    }
    const parsed = JSON.parse(raw);
    const daily = parsed.dailyOutput?.date === today
      ? { date: today, count: Number(parsed.dailyOutput.count) || 0, spoken: Number(parsed.dailyOutput.spoken) || 0 }
      : { date: today, count: 0, spoken: 0 };

    return {
      ...DEFAULT_STATE,
      ...parsed,
      recentOutcomes: Array.isArray(parsed.recentOutcomes) ? parsed.recentOutcomes.slice(-20).map(Boolean) : [],
      dailyOutput: daily,
      totalOutput: Number(parsed.totalOutput) || 0,
      exposureLevel: Math.min(4, Math.max(1, Number(parsed.exposureLevel) || 1)),
      pillarWeaknessHits: { ...DEFAULT_STATE.pillarWeaknessHits, ...(parsed.pillarWeaknessHits || {}) }
    };
  } catch {
    return { ...DEFAULT_STATE, dailyOutput: { date: today, count: 0, spoken: 0 } };
  }
}

export function saveUltralearningState(nextState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
    return true;
  } catch {
    return false;
  }
}

export function recordDrillOutcome(isCorrect, pillarId = 'immersion', didSpeak = false) {
  const state = loadUltralearningState();
  const nextOutcomes = [...state.recentOutcomes, Boolean(isCorrect)].slice(-20);
  const weakness = { ...state.pillarWeaknessHits };
  if (!isCorrect && pillarId && weakness[pillarId] !== undefined) {
    weakness[pillarId] = (weakness[pillarId] || 0) + 1;
  }
  const nextState = {
    ...state,
    recentOutcomes: nextOutcomes,
    dailyOutput: {
      date: getTodayKey(),
      count: state.dailyOutput.count + 1,
      spoken: state.dailyOutput.spoken + (didSpeak ? 1 : 0)
    },
    totalOutput: state.totalOutput + 1,
    pillarWeaknessHits: weakness
  };
  saveUltralearningState(nextState);
  return nextState;
}

export function recordSpokenOutput(exposureLevelReached = 2) {
  const state = loadUltralearningState();
  const nextState = {
    ...state,
    exposureLevel: Math.max(state.exposureLevel, Math.min(4, exposureLevelReached)),
    dailyOutput: {
      date: getTodayKey(),
      count: state.dailyOutput.count + 1,
      spoken: state.dailyOutput.spoken + 1
    },
    totalOutput: state.totalOutput + 1
  };
  saveUltralearningState(nextState);
  return nextState;
}

export function getSweetSpotAnalysis(recentOutcomes = []) {
  const sample = recentOutcomes.slice(-12);
  if (sample.length < 3) {
    return {
      zone: 'calibrating',
      accuracy: null,
      sampleSize: sample.length,
      label: '校準中 (先完成 3 題)',
      advice: '系統將依你的表現自動維持在 85% 最佳難度甜蜜點（Get Better at Anything 核心原則）。',
      suggestedAction: null
    };
  }
  const correct = sample.filter(Boolean).length;
  const accuracy = Math.round((correct / sample.length) * 100);

  if (accuracy > 90) {
    return {
      zone: 'too-easy',
      accuracy,
      sampleSize: sample.length,
      label: `${accuracy}% · 進入舒適圈`,
      advice: '目前太輕鬆了！建議開啟「盲聽無字幕＋南北越口音交錯＋1.15× 原速」跳出舒適圈。',
      suggestedAction: 'upgrade'
    };
  }
  if (accuracy < 72) {
    return {
      zone: 'too-hard',
      accuracy,
      sampleSize: sample.length,
      label: `${accuracy}% · 挑戰偏高`,
      advice: '先降低認知負荷：打開「0.75× 慢速＋先看母語範例 (See)」，穩住基礎再加速！',
      suggestedAction: 'scaffold'
    };
  }
  return {
    zone: 'sweet-spot',
    accuracy,
    sampleSize: sample.length,
    label: `${accuracy}% · 85% 黃金甜蜜點`,
    advice: '你的挑戰度剛剛好！正處於大腦記憶重塑與語感吸收效率最高的區間。',
    suggestedAction: null
  };
}

export function getPillarMasteryStats() {
  const state = loadUltralearningState();
  return NEAR_NATIVE_PILLARS.map((pillar) => {
    let mastered = 0;
    let total = 0;
    for (const modId of pillar.modules) {
      const items = allModuleMasteryItems[modId];
      if (!items) continue;
      total += items.length;
      const kp = loadModuleMasteredPoints(modId, items.length);
      const rec = loadKnowledgeProgress(modId, items.length).recalled || [];
      mastered += new Set([...kp, ...rec]).size;
    }
    const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;
    const errorHits = state.pillarWeaknessHits[pillar.id] || 0;
    return {
      ...pillar,
      mastered,
      total,
      percent,
      errorHits,
      // Lower score = bigger bottleneck to drill first
      priorityScore: percent - errorHits * 6
    };
  });
}

export function getWeakestPillar() {
  const stats = getPillarMasteryStats();
  return [...stats].sort((a, b) => a.priorityScore - b.priorityScore)[0] || stats[0];
}

export function findPillarForModule(moduleId) {
  const hit = NEAR_NATIVE_PILLARS.find(p => p.modules.includes(moduleId));
  return hit ? hit.id : 'immersion';
}

/**
 * Builds an interleaved drill deck (Variability Over Repetition + Direct-Then-Drill).
 * Prioritizes unmastered points and mixes modules within the target pillar (or across all pillars).
 */
export function buildInterleavedDrillDeck(pillarFilter = 'weakest', deckSize = 8) {
  const targetPillarId = pillarFilter === 'weakest' ? getWeakestPillar().id : pillarFilter;
  const pillars = targetPillarId === 'all'
    ? NEAR_NATIVE_PILLARS
    : NEAR_NATIVE_PILLARS.filter(p => p.id === targetPillarId);

  const pool = [];
  for (const pillar of pillars) {
    for (const modId of pillar.modules) {
      const items = allModuleMasteryItems[modId] || [];
      const spark = subjectSparks[modId];
      const kp = loadModuleMasteredPoints(modId, items.length);
      const rec = loadKnowledgeProgress(modId, items.length).recalled || [];
      const masteredSet = new Set([...kp, ...rec]);

      items.forEach((item, idx) => {
        pool.push({
          ...item,
          uid: `${modId}_${idx}`,
          moduleId: modId,
          pointIndex: idx,
          pillarId: pillar.id,
          pillarLabel: pillar.label,
          pillarIcon: pillar.icon,
          disciplineBadge: spark?.badge || modId,
          ahaInsight: spark?.ahaInsight || item.rule,
          isMastered: masteredSet.has(idx)
        });
      });
    }
  }

  // Deterministic-friendly shuffle favoring unmastered items first, then interleaving modules
  const unmastered = pool.filter(x => !x.isMastered);
  const mastered = pool.filter(x => x.isMastered);

  const shuffle = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const candidates = [...shuffle(unmastered), ...shuffle(mastered)];
  const selected = [];
  const usedModulesRecently = [];

  for (const item of candidates) {
    if (selected.length >= deckSize) break;
    // Encourage interleaving: avoid picking the same module twice in a row when alternatives exist
    if (usedModulesRecently[usedModulesRecently.length - 1] === item.moduleId && candidates.length > deckSize * 2) {
      continue;
    }
    selected.push(item);
    usedModulesRecently.push(item.moduleId);
  }

  // Top up if needed
  for (const item of candidates) {
    if (selected.length >= deckSize) break;
    if (!selected.some(s => s.uid === item.uid)) selected.push(item);
  }

  return selected;
}
