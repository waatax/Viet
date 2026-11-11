const KEY = 'viet_bridge_v1_';
const KP_KEY = 'viet_kp_mastered_v1_';
const LOVED_KEY = 'viet_loved_subjects_v1';

export function normalizeBridge(value) {
  return {
    level: Math.min(3, Math.max(0, Number.isInteger(value?.level) ? value.level : 0)),
    due: Number.isFinite(value?.due) && value.due > 0 ? value.due : 0,
    completed: Number.isInteger(value?.completed) && value.completed > 0 ? value.completed : 0
  };
}

export function loadBridge(id) {
  try { return normalizeBridge(JSON.parse(localStorage.getItem(KEY + id))); }
  catch { return normalizeBridge(null); }
}

export function reviewBridge(previous, recalled, now = Date.now()) {
  const current = normalizeBridge(previous);
  // Early practice never advances the spaced-review level or postpones a due date.
  if (recalled && current.due > now) return current;
  const level = recalled ? Math.min(3, current.level + 1) : 0;
  return { level, completed: current.completed + 1, due: now + [1, 1, 3, 7][level] * 86400000 };
}

export function saveBridge(id, value) {
  try { localStorage.setItem(KEY + id, JSON.stringify(value)); return true; }
  catch { return false; }
}

export function normalizeMasteredPoints(value, total = 10) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((n) => Number.isInteger(n) && n >= 0 && n < total))].sort((a, b) => a - b);
}

export function loadModuleMasteredPoints(id, total = 10) {
  let points = [];
  try {
    points = normalizeMasteredPoints(JSON.parse(localStorage.getItem(KP_KEY + id)), total);
  } catch {
    points = [];
  }
  const bridge = loadBridge(id);
  if (bridge.level > 0 && !points.includes(total - 1)) {
    points = normalizeMasteredPoints([...points, total - 1], total);
  }
  return points;
}

export function recordPointMastery(id, pointIndex, recalled = true, total = 10) {
  const current = loadModuleMasteredPoints(id, total);
  const next = recalled
    ? normalizeMasteredPoints([...current, pointIndex], total)
    : current;
  try {
    localStorage.setItem(KP_KEY + id, JSON.stringify(next));
    return { points: next, saved: true };
  } catch {
    return { points: next, saved: false };
  }
}

export function loadLovedSubjects() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LOVED_KEY));
    return Array.isArray(parsed) ? [...new Set(parsed.filter((s) => typeof s === 'string' && s.trim()))] : [];
  } catch {
    return [];
  }
}

export function toggleLovedSubject(moduleId) {
  const current = loadLovedSubjects();
  const loved = current.includes(moduleId);
  const next = loved ? current.filter((id) => id !== moduleId) : [...current, moduleId];
  try {
    localStorage.setItem(LOVED_KEY, JSON.stringify(next));
    return { loved: !loved, list: next, saved: true };
  } catch {
    return { loved: !loved, list: next, saved: false };
  }
}
