const prefix = 'viet_knowledge_v1_';
export function normalizeKnowledgeProgress(value, rowCount) {
  const recalled = Array.isArray(value?.recalled) ? [...new Set(value.recalled.filter(n => Number.isInteger(n) && n >= 0 && n < rowCount))] : [];
  const checks = [0, 1, 2].map(i => value?.checks?.[i] === true);
  const errorType = ['sound', 'meaning', 'order', 'register', 'information'].includes(value?.errorType) ? value.errorType : 'meaning';
  return { recalled, checks, errorType };
}
export function loadKnowledgeProgress(moduleId, rowCount) {
  try { return normalizeKnowledgeProgress(JSON.parse(localStorage.getItem(prefix + moduleId)), rowCount); }
  catch { return normalizeKnowledgeProgress(null, rowCount); }
}
export function saveKnowledgeProgress(moduleId, value) {
  try { localStorage.setItem(prefix + moduleId, JSON.stringify(value)); return true; }
  catch { return false; }
}

export const errorRepairs = {
  sound: ['聽音／發音', '固定同一聲母與韻部，比較兩個容易混淆的音；先慢聽，再錄一個新詞核對。'],
  meaning: ['詞義／搭配', '寫出容易混淆的兩個詞，各配一個完整例句；遮住中文，換詞重述意思。'],
  order: ['詞序／句型', '圈出主詞、述語與名詞組；保留骨架，只替換人物或物品，再說一遍。'],
  register: ['稱謂／語域', '先交代對象、相對年齡及場合；選合適稱謂，分別寫口語與正式版本。'],
  information: ['資訊／條件遺漏', '列出人物、時間、地點、數量與單位；標出原句未交代的資訊，再重述請對方確認。']
};
