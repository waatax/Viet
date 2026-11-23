// Near-Native Vietnamese Ultralearning System
// Grounded in Scott H. Young's "Ultralearning" (9 Principles) & "Get Better at Anything" (See · Do · Feedback)

export const NEAR_NATIVE_PILLARS = [
  {
    id: 'phonetics',
    icon: '🎵',
    label: '聲調與語音反射',
    labelEn: 'Tones & Phonetics',
    shortDesc: '6 大聲調音高曲線、母音張合與南北越口音聽辨',
    modules: ['alphabet', 'tonegame', 'accent'],
    drillAction: 'tonegame',
    drillLabel: '聲調聽辨特訓',
    metalearningType: '程序技能 (Procedure)'
  },
  {
    id: 'vocabulary',
    icon: '🧠',
    label: '高頻詞彙與漢越網',
    labelEn: 'Core Vocab & Cognates',
    shortDesc: '萬詞間隔抗遺忘、漢越同源字根與生活數字反應',
    modules: ['flashcards', 'hanviet', 'shopping'],
    drillAction: 'flashcards',
    drillLabel: 'SM-2 閃卡記憶',
    metalearningType: '核心事實 (Facts)'
  },
  {
    id: 'immersion',
    icon: '💬',
    label: '真實聽力與情境對話',
    labelEn: 'Direct Immersion',
    shortDesc: '無字幕盲聽、高頻生存短句與 64 大生活實戰對話',
    modules: ['phrases', 'conversation', 'fasttrack', 'emergency'],
    drillAction: 'conversation',
    drillLabel: '情境會話實戰',
    metalearningType: '直接遷移 (Directness)'
  },
  {
    id: 'syntax',
    icon: '🧩',
    label: '語序直覺與稱謂禮儀',
    labelEn: 'Syntax & Kinship',
    shortDesc: '修飾語後置、時態標記、人稱相對論與語氣詞直覺',
    modules: ['grammar', 'pronoun', 'sentence', 'topics'],
    drillAction: 'sentence',
    drillLabel: '拼句結構特訓',
    metalearningType: '深層概念 (Concepts)'
  },
  {
    id: 'speaking',
    icon: '🎙️',
    label: '母語級輸出與高階實務',
    labelEn: 'Near-Native Output',
    shortDesc: '影子跟讀、商務談判、政經脈絡與綜合認證檢核',
    modules: ['shadowing', 'quiz', 'business', 'macropol', 'science', 'path'],
    drillAction: 'shadowing',
    drillLabel: '影子跟讀特訓',
    metalearningType: '實戰輸出 (Transfer)'
  }
];

export const SEE_DO_FEEDBACK_LOOP = [
  {
    step: 'SEE',
    badge: '01 · 觀察模仿',
    title: '精準母語範例 (Worked Examples)',
    source: 'Get Better at Anything · Part I',
    insight: '不要在空白處盲目摸索。先聽懂母語原音、看清聲調曲線與「看不見的隱性知識」（稱謂高低、南北用語差異），再立刻切換到主動輸出。'
  },
  {
    step: 'DO',
    badge: '02 · 刻意實戰',
    title: '85% 難度甜蜜點 × 高變異交錯練習',
    source: 'Get Better at Anything · Part II',
    insight: '維持約 85% 正確率的「最佳挑戰區」，刻意交錯北越河內音與南越西貢音、混合不同情境與提取題型，才能長出真實世界的遷移能力。'
  },
  {
    step: 'FEEDBACK',
    badge: '03 · 真實回饋',
    title: '三層矯正回饋 × 漸進開口暴露',
    source: 'Get Better at Anything · Part III',
    insight: '區分對錯（結果）、找出錯在哪個聲調或語序（資訊）、立刻慢速對照重唸（矯正），並透過「聽→跟→遮字說→原速說」徹底消除開口恐懼。'
  }
];

export const EXPOSURE_LADDER = [
  {
    level: 1,
    tag: 'Lv.1 安心輸入',
    title: '聽懂母語原音與聲調起伏',
    tip: '不急著完美發音，先讓耳朵辨識 6 個聲調的高低轉折與停頓。'
  },
  {
    level: 2,
    tag: 'Lv.2 低壓跟讀',
    title: '跟著音檔同步小聲 Shadowing',
    tip: '模仿母語者的節奏與尾音語氣詞（ạ / nhé / nha），建立口腔肌肉記憶。'
  },
  {
    level: 3,
    tag: 'Lv.3 盲聽提取',
    title: '遮住越文與翻譯，主動回憶說出',
    tip: '強迫大腦主動提取（Retrieval），就算卡住也比直接偷看記憶深 3 倍。'
  },
  {
    level: 4,
    tag: 'Lv.4 母語原速',
    title: '1.15× 原速＋南北口音切換自在回應',
    tip: '跳出單一口音與慢速舒適圈，在真實街頭、餐廳與職場直覺脫口而出。'
  }
];

export const ULTRALEARNING_PRINCIPLES_MAP = [
  {
    no: '01',
    name: '後設學習 Metalearning',
    motto: '先畫地圖：區分概念・事實・程序',
    vietApply: '先搞懂越語 3 大架構：聲調發音（程序）、漢越詞根與高頻詞（事實）、形容詞後置與稱謂相對論（概念）。',
    targetModule: 'path',
    actionText: '檢視 20 模組地圖'
  },
  {
    no: '02',
    name: '專注衝刺 Focus',
    motto: '磨利你的刀：15 分鐘無干擾深潛',
    vietApply: '開啟內建專注計時器，每次只專攻 8 句交錯實戰題，累積高濃度主動輸出而非滑過頁面。',
    targetModule: 'ultra',
    actionText: '啟動 15 分鐘特訓'
  },
  {
    no: '03',
    name: '直接法 Directness',
    motto: '直球對決：用真實語境學真實越語',
    vietApply: '直接從越南歌曲歌詞、真實對話影片與 64 大生活實境切入，避免學完仍不敢在真實情境開口。',
    targetModule: 'songs',
    actionText: '聽越南金曲實境'
  },
  {
    no: '04',
    name: '直擊弱點 Drill',
    motto: 'Direct-Then-Drill 鎖定單一瓶頸',
    vietApply: '找出卡住流利度的單一瓶頸（如問聲 hỏi vs 跌聲 ngã、稱謂切換、數字換算），單點高強度突破再回到對話。',
    targetModule: 'tonegame',
    actionText: '進入聲調瓶頸特訓'
  },
  {
    no: '05',
    name: '主動提取 Retrieval',
    motto: '以測代讀：先回憶再揭曉答案',
    vietApply: '預設隱藏越文與中文提示，先聽音回想意思並開口說出，再用知識圖解與閃卡檢驗是否真正內化。',
    targetModule: 'flashcards',
    actionText: 'SM-2 主動提取閃卡'
  },
  {
    no: '06',
    name: '即時回饋 Feedback',
    motto: '別閃躲重拳：結果・資訊・矯正三層回饋',
    vietApply: '每次答題不只看對錯，更即時拆解聲調輪廓與語序差異，搭配 0.75× 慢速與原速 A/B 比對立刻修正。',
    targetModule: 'shadowing',
    actionText: '跟讀語音回饋'
  },
  {
    no: '07',
    name: '抗遺忘保存 Retention',
    motto: '補好漏水的桶：間隔・自動化・超額學習',
    vietApply: '結合 SM-2 間隔重複排程、漢越同源字根記憶錨點，將最高頻 35 句生存金句練到反射動作。',
    targetModule: 'hanviet',
    actionText: '漢越字根記憶錨點'
  },
  {
    no: '08',
    name: '深層直覺 Intuition',
    motto: '先往下深挖，再往上蓋樓',
    vietApply: '理解「為什麼越南人這樣說」（如年齡稱謂矩陣、語氣助詞、主述結構），用費曼式結構圖徹底通透。',
    targetModule: 'pronoun',
    actionText: '稱謂相對論直覺'
  },
  {
    no: '09',
    name: '跳出舒適圈 Experimentation',
    motto: '探索邊界：盲聽・加速・南北越混聽',
    vietApply: '當正確率超過 90%，主動開啟「無字幕盲聽＋1.15× 原速＋河內/西貢口音交錯」，突破中級高原期。',
    targetModule: 'listen',
    actionText: '隨身聽調速沉浸'
  }
];
