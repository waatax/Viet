const KEY = 'viet_bridge_v1_';
export function normalizeBridge(value) {
  return { level: Math.min(3, Math.max(0, Number.isInteger(value?.level) ? value.level : 0)),
    due: Number.isFinite(value?.due) && value.due > 0 ? value.due : 0,
    completed: Number.isInteger(value?.completed) && value.completed > 0 ? value.completed : 0 };
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
