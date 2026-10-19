import { scenarioCategories } from './scenarioCategories.js';

// Links every syllabus chapter to the knowledge points it practises, so a learner who picks a
// chapter sees exactly which concepts on the page to review first.
const EXPLICIT = {
  vocab_1k: ['回想再翻面', '搭配成組', '語境卡'],
  vocab_3k: ['一詞多搭配', '正反向提取', '詞族擴展'],
  vocab_5k: ['搭配成組', '語境卡', '分類與合併'],
  vocab_10k: ['詞族擴展', '正反向提取', '錯卡修復'],
  confusables_all: ['易混對比', '分類與合併', '錯卡修復'],
  confusables_tones: ['易混對比', '錯卡修復'],
  confusables_vowels: ['易混對比', '分類與合併'],
  confusables_false_friends: ['易混對比', '語境卡'],

  topic_biz: ['合作寒暄', '需求變更'],
  topic_dine: ['客製需求', '需求變更'],
  topic_fam: ['親屬介紹'],
  topic_med: ['症狀敘述', '不適程度'],
  topic_time: ['日期與停留', '日期與星期', '時間範圍'],
  topic_price: ['客製需求', '需求變更'],
  topic_num: ['日期與停留', '時間範圍'],

  biz_negotiation: ['條件協商', '附條件讓步', '保留與建議'],
  biz_factory: ['交期與品質', '會議待辦'],
  biz_docsim: ['條款語彙', '正式書信'],
  biz_expo: ['條件協商', '正式書信'],
  biz_dualcity: ['保留與建議', '會議結論'],
  biz_networking: ['委婉催促', '正式書信'],
  biz_nhau: ['保留與建議', '會議結論'],
  biz_currency: ['條件協商', '附條件讓步'],
  biz_travel: ['交期與品質', '會議待辦'],
  biz_exam: ['正式書信', '條款語彙', '會議結論'],
  biz_hanviet: ['條款語彙', '正式書信'],

  macro_radar: ['指標口徑', '百分比與百分點', '趨勢動詞'],
  macro_rates: ['指標口徑', '名目與實質'],
  macro_trade: ['指標口徑', '趨勢動詞'],
  macro_south_biz: ['預測語氣', '引述與作者立場'],
  macro_north_dev: ['預測語氣', '因果與保留'],
  macro_sources: ['引述與作者立場', '論證結構'],
  macro_dossier_1: ['法規文件層級', '論證結構'],
  macro_dossier_2: ['趨勢動詞', '百分比與百分點', '因果與保留'],
  macro_dossier_4: ['法規文件層級', '引述與作者立場'],
  macro_dossier_7: ['法規文件層級', '名目與實質'],
  macro_dossier_10: ['預測語氣', '因果與保留'],
  macro_dossier_12: ['法規文件層級', '論證結構'],
  'macro_dossier-2026-03': ['指標口徑', '名目與實質', '趨勢動詞'],
  'macro_dossier-2026-05': ['預測語氣', '因果與保留'],
  'macro_dossier-2026-06': ['預測語氣', '論證結構'],
  'macro_dossier-2026-08': ['法規文件層級', '引述與作者立場'],
  'macro_dossier-2026-09': ['法規文件層級', '論證結構'],
  'macro_dossier-2026-11': ['預測語氣', '引述與作者立場'],

  base_alphabet: ['字母與組合', '複合聲母', 'k／c／qu 的分工', 'g／gh、ng／ngh'],
  base_tones: ['符號分層', '音節拆解', '塞音韻尾'],
  base_pronouns: ['年長男性／女性', '親屬分支', '包不包含聽者', '職場稱呼'],
  base_tonegame: ['同韻對比', '六調同韻', '換調即換詞'],

  ft_day1: ['第1–2天', '社交延續'],
  ft_day2: ['第1–2天', '結帳問題'],
  ft_day3: ['第3–5天', '結帳問題'],
  ft_day4: ['交通目的地', '聽懂指路'],
  ft_day5: ['第3–5天', '社交延續'],
  ft_day6: ['第6–7天', '天氣閒聊', '社交延續'],
  ft_day7: ['第6–7天', '報案句'],

  emg_police: ['先說位置', '再說問題', '聯絡協助者', '索取書面證明'],
  emg_medical: ['過敏告知', '疼痛位置', '描述發生時間', '語言需求'],

  grm_rules: ['SVO 與修飾', '時貌與語境', '否定與尚未', '被動 bị／được', '疑問詞位置'],
  grm_hanviet: ['字根擴展', '假朋友', '字根不能單獨硬套', '漢越詞與固有詞']
};

// Situational-dialogue chapters are linked by the scenario's category
const CONVERSATION_BY_CATEGORY = {
  dining: ['開啟需求', '接續追問', '確認與收尾'],
  travel: ['開啟需求', '澄清訊息', '確認共同結論'],
  business: ['表達不同意見', '確認共同結論', '話題轉換'],
  daily: ['開啟需求', '接續追問', '結束對話'],
  meeting: ['話題轉換', '接續追問', '結束對話'],
  chat: ['話題轉換', '接續追問', '結束對話'],
  leisure: ['話題轉換', '接續追問', '結束對話'],
  sports: ['話題轉換', '接續追問', '結束對話'],
  health: ['澄清訊息', '即時改口', '確認與收尾'],
  emergency: ['澄清訊息', '即時改口', '確認與收尾'],
  banking: ['澄清訊息', '確認與收尾', '即時改口'],
  stage: ['開啟需求', '澄清訊息', '結束對話'],
  fasttrack: ['開啟需求', '確認與收尾', '結束對話']
};

/**
 * Knowledge points (concept names) a chapter practises.
 * scenarioCategories.js is generated from situationalScenarios (checked by test_knowledge_curriculum)
 * so this page does not have to load the full dialogue data.
 * Single-page modules ("module_*" chapters) cover the whole page.
 */
export function chapterKnowledge(chapter, guide = null) {
  if (!chapter) return [];
  if (EXPLICIT[chapter.id]) return EXPLICIT[chapter.id];
  if (chapter.moduleId === 'conversation') {
    return CONVERSATION_BY_CATEGORY[scenarioCategories[chapter.targetParam?.scenarioId]] || [];
  }
  if (chapter.id.startsWith('module_') && guide) return guide.rows.slice(0, 3).map(r => r[0]);
  return [];
}
