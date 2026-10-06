import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag, Sparkles,
  AudioLines, MessagesSquare, ShoppingBag, GraduationCap, Play, Route, Brain, Clock, Layers3,
  Zap, LifeBuoy, ShieldCheck, Award, Briefcase, CheckSquare, Square, ChevronDown, ChevronUp, Flame,
  Search, Landmark, Layers, ArrowUpRight, Volume2, MapPin, Coffee, Building2
} from 'lucide-react';
import { learningPath, flashcardsDeck } from '../data/vietnameseData';
import { SYLLABUS_REGISTRY } from '../config/syllabusRegistry';
import { srsEngine } from '../services/srsEngine';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './LearningPathModule.css';

export const VIETNAM_LANDSCAPES = [
  {
    id: 'hcmc',
    nameZh: '胡志明市金融特區',
    nameVi: 'Thành phố Hồ Chí Minh',
    nameEn: 'Ho Chi Minh City (Saigon)',
    accent: '🌴 西貢商業音',
    accentType: 'south',
    image: 'hcmc_skyline_illustration.jpg',
    badgeZh: '南越經濟火車頭',
    badgeEn: 'Economic Hub',
    descZh: '第一郡金融CBD、咖啡公寓、西貢歌劇院與現代都會，外資FDI與台商聚落重鎮。',
    descEn: 'District 1 CBD, Cafe Apartments, Opera House, and premier FDI destination.',
    audioText: 'Thành phố Hồ Chí Minh',
    targetModule: 'business'
  },
  {
    id: 'benthanh',
    nameZh: '檳城市場與百年商街',
    nameVi: 'Chợ Bến Thành',
    nameEn: 'Ben Thanh Market',
    accent: '🌴 西貢熱帶市集音',
    accentType: 'south',
    image: 'ben_thanh_market_illustration.jpg',
    badgeZh: '市集採購殺價實戰',
    badgeEn: 'Bargaining & Market',
    descZh: '百年歷史經典圓環地標，傳統服飾奧黛、腰果咖啡乾貨與道地小吃應有盡有。',
    descEn: 'Centennial landmark market for street food, cashews, dried fruits, and bargaining.',
    audioText: 'Chợ Bến Thành',
    targetModule: 'shopping'
  },
  {
    id: 'coffee_food',
    nameZh: '越式滴漏咖啡與美食盛宴',
    nameVi: 'Cà Phê Phin & Ẩm Thực',
    nameEn: 'Vietnamese Coffee & Cuisine',
    accent: '🇻🇳 全國經典風情',
    accentType: 'north',
    image: 'viet_coffee_food_illustration.jpg',
    badgeZh: '慢生活與舌尖記憶',
    badgeEn: 'Gastronomy & Coffee',
    descZh: '早晨一杯滴滴冰奶咖啡 (Cà phê sữa đá)，搭配現烤牛肉河粉與法國麵包，體驗真正慢活。',
    descEn: 'Slow-drip condensed milk iced coffee, beef pho soup, and crispy banh mi baguettes.',
    audioText: 'Cà phê sữa đá và phở bò',
    targetModule: 'topics'
  },
  {
    id: 'industrial',
    nameZh: '南部外資工廠製造特區',
    nameVi: 'Khu Công Nghiệp Phía Nam',
    nameEn: 'Southern Industrial Zone',
    accent: '💼 產線品保與商務音',
    accentType: 'south',
    image: 'south_vietnam_industrial_illustration.jpg',
    badgeZh: 'SMT產線與供應鏈',
    badgeEn: 'FDI Manufacturing',
    descZh: '平陽、同奈、隆安台商工廠實況：產線巡檢、AQL抽驗、加班調度與紅發票開立。',
    descEn: 'Binh Duong & Dong Nai factory clusters: QA audits, shift scheduling, and commercial terms.',
    audioText: 'Khu công nghiệp phía Nam',
    targetModule: 'business'
  },
  {
    id: 'dalat',
    nameZh: '大叻高原避暑山城',
    nameVi: 'Đà Lạt · Thành Phố Ngàn Hoa',
    nameEn: 'Dalat Pine Highlands',
    accent: '⛰️ 高原清涼音',
    accentType: 'south',
    image: 'da_lat_mountain_illustration.jpg',
    badgeZh: '萬花之城與殖民洋樓',
    badgeEn: 'Cool Retreat',
    descZh: '海拔1,500公尺高原松林，法式建築林立，盛產高山茶、草莓與鮮花，四季涼爽。',
    descEn: '1,500m elevation pine hills, French villas, artichoke tea, and cool spring climate.',
    audioText: 'Đà Lạt thành phố ngàn hoa',
    targetModule: 'conversation'
  },
  {
    id: 'mekong',
    nameZh: '湄公河三角洲水鄉',
    nameVi: 'Đồng Bằng Sông Cửu Long',
    nameEn: 'Mekong River Delta',
    accent: '🛶 水鄉西南民謠音',
    accentType: 'south',
    image: 'mekong_delta_illustration.jpg',
    badgeZh: '九龍江魚米之鄉',
    badgeEn: 'Waterways & Fruits',
    descZh: '熱帶果園、水上市場小舟穿梭，豐富水產與傳統民歌，感受最淳樸親切的南越熱情。',
    descEn: 'Floating markets in Can Tho, tropical orchards, boat tours, and southern hospitality.',
    audioText: 'Đồng bằng sông Cửu Long',
    targetModule: 'conversation'
  },
  {
    id: 'cuchi',
    nameZh: '古芝地道歷史遺產',
    nameVi: 'Địa Đạo Củ Chi',
    nameEn: 'Cu Chi Historic Tunnels',
    accent: '🏛️ 歷史文化專題音',
    accentType: 'south',
    image: 'cu_chi_tunnels_illustration.jpg',
    badgeZh: '世界軍事奇蹟',
    badgeEn: 'Historical Heritage',
    descZh: '深入地下三層、長達250公里的縱橫地道網絡，親歷越南近代抗爭史與熱帶雨林。',
    descEn: '250km underground tunnel complex showing resilience, survival tactics, and history.',
    audioText: 'Địa đạo Củ Chi',
    targetModule: 'macropol'
  },
  {
    id: 'vungtau',
    nameZh: '頭頓海濱休閒度假地',
    nameVi: 'Bãi Biển Vũng Tàu',
    nameEn: 'Vung Tau Coastal Beach',
    accent: '🌊 濱海放鬆慢步調',
    accentType: 'south',
    image: 'vung_tau_beach_illustration.jpg',
    badgeZh: '西貢近郊海鮮大道',
    badgeEn: 'Seaside Getaway',
    descZh: '距離胡志明市僅兩小時車程，迎著海風漫步海濱公路、品嚐現撈生猛海鮮排檔。',
    descEn: 'Seaside city with golden sand beaches, seafood night markets, and lighthouse vistas.',
    audioText: 'Bãi biển Vũng Tàu',
    targetModule: 'conversation'
  }
];

export const VIETNAMESE_ETIQUETTE_TIPS = [
  {
    id: 'trada',
    icon: '🍵',
    tagZh: '國民待客之道',
    tagEn: 'Hospitality',
    titleZh: '落座先來一杯茶：Trà Đá 冰茶哲學',
    titleEn: 'Trà Đá: The Iced Tea Philosophy',
    phraseVi: 'Trà đá vỉa hè',
    audioText: 'Trà đá vỉa hè',
    descZh: '無論走進路邊小吃攤或商務餐館，店家必先奉上一杯免費或極便宜的冰茉莉花茶（Trà đá）。這不僅是解暑，更是越南人打開話匣子、營造親切放鬆氣氛的必備開場白。',
    descEn: 'Iced jasmine tea is universally served across eateries, acting as an instant social icebreaker and cooling relief.',
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.12)'
  },
  {
    id: 'crossing',
    icon: '🛵',
    tagZh: '行人求生心法',
    tagEn: 'Street Safety',
    titleZh: '等速向前別猶豫：穿過機車洪流',
    titleEn: 'Crossing the Motorbike Waves',
    phraseVi: 'Băng qua đường một cách tự tin',
    audioText: 'Băng qua đường một cách tự tin',
    descZh: '在河內或胡志明市過斑馬線，千萬不要突然停下或急退！騎士依靠預判軌跡繞過行人。只需步伐穩健、保持等速向前慢行，配合目光接觸（Eye contact），便能安全穿行。',
    descEn: 'Walk steadily without sudden stops or retreats. Riders anticipate your trajectory and naturally glide around you.',
    color: '#f59e0b',
    bg: 'rgba(245, 158, 11, 0.12)'
  },
  {
    id: 'honorifics',
    icon: '🧧',
    tagZh: '長幼儒家禮節',
    tagEn: 'Respect & Manners',
    titleZh: '雙手接物與長輩尊稱：極致禮貌細節',
    titleEn: 'Two Hands & Honorifics',
    phraseVi: 'Lễ phép với người lớn tuổi',
    audioText: 'Lễ phép với người lớn tuổi',
    descZh: '遞交名片、現金或奉茶時，雙手遞上（或左手托右手肘）。稱呼長輩切勿直呼其名，必須冠以稱謂（如 Bác Minh, Chị Lan），並在發言句首加「Dạ」、句尾加「ạ」以示尊重。',
    descEn: 'Always use both hands when passing cards or gifts. Never address elders by name alone; prepend proper kinship titles.',
    color: '#3b82f6',
    bg: 'rgba(59, 130, 246, 0.12)'
  },
  {
    id: 'nhau',
    icon: '🍻',
    tagZh: '應酬社交密碼',
    tagEn: 'Social Drinking',
    titleZh: '1, 2, 3, Dzô!：越式熱炒搏感情',
    titleEn: '1, 2, 3, Dzô! Cheers Culture',
    phraseVi: 'Một, hai, ba, dzô!',
    audioText: 'Một, hai, ba, dzô!',
    descZh: '在熱炒攤（Quán nhậu）舉杯敬酒時，所有人齊聲高喊「Một, hai, ba, dzô!（1、2、3，乾杯！）」。碰杯時晚輩杯緣稍低於長輩，是建立深厚信任與人脈的最佳場域。',
    descEn: 'The hearty chant "Một, hai, ba, dzô!" unites colleagues and partners at dinner, building genuine camaraderie.',
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.12)'
  },
  {
    id: 'kilogram',
    icon: '⚖️',
    tagZh: '市場購物眉角',
    tagEn: 'Market Units',
    titleZh: '一公斤不等於一台斤：算清計量基數',
    titleEn: 'Buying by Ký (Kg) not Jin',
    phraseVi: 'Mua hàng theo Ký',
    audioText: 'Mua hàng theo Ký',
    descZh: '台灣習慣算台斤（600g），但越南全境傳統市場與超市一律採公制「公斤（Ký / kg）」。問價時老闆報的是整整 1,000 公克的價格，換算時記得切勿誤以為價格偏貴！',
    descEn: 'Vietnamese markets strictly use kilograms (1,000g), unlike the traditional Taiwanese jin (600g).',
    color: '#8b5cf6',
    bg: 'rgba(139, 92, 246, 0.12)'
  }
];

export const ADAPTIVE_TRACKS = [
  {
    id: 'all',
    icon: '🧭',
    titleZh: '全能精通總覽',
    titleEn: 'All-Round Mastery',
    descZh: '全面覆蓋發音、生活、職場、商務與政經全域課程。',
    descEn: 'Comprehensive path across phonetics, daily life, business, and politics.',
    badgeZh: '全域 20 大模組',
    badgeEn: 'All 20 Modules',
    color: 'var(--brand-accent)'
  },
  {
    id: 'expatriate',
    icon: '💼',
    titleZh: '外派經商與工廠管理軌道',
    titleEn: 'Expat & Factory Management',
    descZh: 'SMT工廠巡檢、AQL品保、商務談判、合約法規與宴飲應酬。',
    descEn: 'SMT factory tours, QA audits, negotiations, contracts, and banquet socializing.',
    badgeZh: '台商外派專用',
    badgeEn: 'FDI Business',
    color: '#f59e0b'
  },
  {
    id: 'lifestyle',
    icon: '✈️',
    titleZh: '生活社交與觀光探索軌道',
    titleEn: 'Daily Life & Travel Explorer',
    descZh: '咖啡館點單、市場殺價、租屋簽約、看診買藥與交通出行。',
    descEn: 'Coffee ordering, market bargaining, apartment leases, clinics, and Grab rides.',
    badgeZh: '生活旅居必備',
    badgeEn: 'Daily Life',
    color: '#10b981'
  },
  {
    id: 'academic',
    icon: '🎓',
    titleZh: '從零考級至雙語精通軌道',
    titleEn: 'Academic & CEFR Mastery',
    descZh: '29字母音標、6大聲調、30大核心語法、漢越同源字根與萬詞辭庫。',
    descEn: 'IPA letters, 6 tones, 30 grammar rules, Han-Viet roots, and 10k frequency vocab.',
    badgeZh: 'iVPT / CEFR 認證',
    badgeEn: 'A1-C2 Exam',
    color: '#8b5cf6'
  }
];

export const MODULE_KNOWLEDGE_MAP = [
  {
    tierId: 'basics',
    tierNameZh: '1. 語音與音系打底',
    tierNameEn: 'Phonetics & Tonal Foundations',
    tierDescZh: '從 0 開始建立精確發音、調值走向與南北越主流口音辨別力。',
    tierDescEn: 'Master 29 letters, 6 tones, and North-South accents from scratch.',
    color: '#3b82f6',
    modules: [
      { id: 'alphabet', icon: '🔤', titleZh: '字母發音打底', titleEn: 'Alphabet & IPA', level: 'A1', hours: '5h', descZh: '29字母、單複母音與特殊輔音開口要領' },
      { id: 'tonegame', icon: '🎵', titleZh: '聲調聽力競技場', titleEn: '6-Tone Arena', level: 'A1', hours: '4h', descZh: '6大聲調調值高低、沙盤對照與闖關聽辨' },
      { id: 'accent', icon: '🇻🇳', titleZh: '南北口音對照', titleEn: 'North vs South', level: 'A1-B1', hours: '3h', descZh: '河內標準音 vs 西貢商業音對比與切換' }
    ]
  },
  {
    tierId: 'fasttrack',
    tierNameZh: '2. 生活實戰與破冰生存',
    tierNameEn: 'Survival & Fast-Track Fluency',
    tierDescZh: '最高頻的生活場景速成，迅速開口、點餐叫車、市場購物不踩雷。',
    tierDescEn: 'High-frequency survival phrases for immediate daily communication.',
    color: '#f59e0b',
    modules: [
      { id: 'fasttrack', icon: '⚡', titleZh: '7天生活速成', titleEn: '7-Day Fast-Track', level: 'A1', hours: '7h', descZh: '35句高頻開口破冰、少糖少奶與實戰短劇' },
      { id: 'emergency', icon: '🛟', titleZh: '生活急救錦囊', titleEn: 'Emergency Kit', level: 'A1', hours: '2h', descZh: '113/114/115緊急專線、10大症狀點讀卡' },
      { id: 'phrases', icon: '📝', titleZh: '實用短句大全', titleEn: 'Daily Phrases', level: 'A1-A2', hours: '8h', descZh: '20大情境日常生活短句速查與音檔朗讀' },
      { id: 'shopping', icon: '🛍️', titleZh: '市集採購算價', titleEn: 'Market Bargaining', level: 'A1-A2', hours: '4h', descZh: '萬進位貨幣算價、防坑防假、四步殺價法' }
    ]
  },
  {
    tierId: 'conversation',
    tierNameZh: '3. 深度情境與口語對話',
    tierNameEn: 'Situational Dialogues & Immersion',
    tierDescZh: '置身真實越南社交與生活，在雙向角色扮演與影子跟讀中內化母語節奏。',
    tierDescEn: 'Branching role-plays and voice shadowing across authentic scenarios.',
    color: '#10b981',
    modules: [
      { id: 'conversation', icon: '💬', titleZh: '49大情境對話', titleEn: '49 Scenarios', level: 'A1-B2', hours: '18h', descZh: '涵蓋食衣住行、租屋看診與分段雙語精聽' },
      { id: 'topics', icon: '✨', titleZh: '7大情境專題', titleEn: '7 Deep Topics', level: 'A2-B1', hours: '10h', descZh: '商務拜訪、家庭稱謂、健康醫療與數字量詞' },
      { id: 'shadowing', icon: '🎙️', titleZh: '影子跟讀特訓', titleEn: 'Voice Shadowing', level: 'A1-B2', hours: '6h', descZh: '麥克風語音辨識、逐字音高聲調診斷' }
    ]
  },
  {
    tierId: 'grammar_vocab',
    tierNameZh: '4. 語法結構與字根網絡',
    tierNameEn: 'Grammar Syntax & Han-Viet Roots',
    tierDescZh: '從字根與核心句型舉一反三，掌握漢字同源詞與 SVO 語序本質。',
    tierDescEn: 'Unlock 30 grammar rules and Sino-Vietnamese cognates.',
    color: '#8b5cf6',
    modules: [
      { id: 'pronoun', icon: '👥', titleZh: '人稱代名詞體系', titleEn: 'Pronoun Matrix', level: 'A1-B1', hours: '4h', descZh: '年齡相對論稱謂、職場階層與敬語 ạ' },
      { id: 'grammar', icon: '📚', titleZh: '30大核心語法', titleEn: '30 Grammar Rules', level: 'A1-B2', hours: '12h', descZh: '形容詞後置、三大時態與受益/受害語氣' },
      { id: 'sentence', icon: '🧩', titleZh: '互動拼句特訓', titleEn: 'Sentence Builder', level: 'A1-B1', hours: '5h', descZh: '積木拖曳拼句、動態糾錯與語感塑造' },
      { id: 'hanviet', icon: '📖', titleZh: '漢越同源字根', titleEn: 'Han-Viet Roots', level: 'A2-C1', hours: '10h', descZh: '中古漢語八調對應、假友詞辨析與萬詞推導' }
    ]
  },
  {
    tierId: 'business_macro',
    tierNameZh: '5. 高階外派、政經智庫與測驗',
    tierNameEn: 'Business FDI, Macro & Certification',
    tierDescZh: '商務談判、工廠品保巡檢、5年匯率政經智庫與全真 iVPT 綜合認證。',
    tierDescEn: 'SMT factory audits, 5Y macro dashboards, and official test prep.',
    color: '#ef4444',
    modules: [
      { id: 'flashcards', icon: '🧠', titleZh: '10,000分級閃卡', titleEn: '10k SRS Deck', level: 'A1-C2', hours: '30h', descZh: 'SM-2 間隔重複、孿生混淆字庫與全詞性' },
      { id: 'quiz', icon: '🏆', titleZh: 'iVPT 綜合測驗', titleEn: 'iVPT Exam Prep', level: 'A1-B2', hours: '6h', descZh: '全真題庫模擬、能力等級診斷與錯題複習' },
      { id: 'business', icon: '💼', titleZh: '商務出差旗艦', titleEn: 'Business Hub', level: 'B1-C1', hours: '15h', descZh: 'SMT工廠巡檢、AQL抽驗、紅發票與應酬' },
      { id: 'macropol', icon: '🏛️', titleZh: '越南政經智庫', titleEn: 'Macro Intelligence', level: 'B2-C2', hours: '20h', descZh: '5年USD/VND匯率、央行利率、十四大專題' },
      { id: 'science', icon: '🔬', titleZh: '科學方法研究', titleEn: 'Science & SLA Hub', level: 'All', hours: '4h', descZh: '5大跨學科二語習得研究與文獻基石' }
    ]
  }
];

export const PEDAGOGICAL_STEPS = [
  {
    step: '1',
    icon: '🎧',
    titleZh: '精聽輸入 (Comprehensible Input)',
    titleEn: 'Comprehensible Input',
    descZh: '真人母語錄音 · 雙語對照 · 1.0x / 0.75x 慢速精讀',
    descEn: 'Native audio, bilingual transcripts, slow playback',
    targetModule: 'conversation',
    color: '#3b82f6'
  },
  {
    step: '2',
    icon: '🧩',
    titleZh: '結構剖析 (Cognitive Parsing)',
    titleEn: 'Grammar & Cognates',
    descZh: '30 大核心語法法則 · 漢越同源詞對照推導',
    descEn: '30 core grammar rules and Sino-Vietnamese roots',
    targetModule: 'grammar',
    color: '#06b6d4'
  },
  {
    step: '3',
    icon: '🧠',
    titleZh: '間隔固化 (Memory Consolidation)',
    titleEn: 'Memory Consolidation',
    descZh: 'SM-2 自適應間隔複習 · 10,000 高頻分級詞庫',
    descEn: 'SM-2 spaced repetition across 10,000 frequency words',
    targetModule: 'flashcards',
    color: '#10b981'
  },
  {
    step: '4',
    icon: '🎙️',
    titleZh: '內化跟讀 (Acoustic Shadowing)',
    titleEn: 'Prosodic Shadowing',
    descZh: '麥克風語音辨識跟讀 · 南北越雙主流口音切換',
    descEn: 'Voice shadowing with North vs South dialect switch',
    targetModule: 'shadowing',
    color: '#f59e0b'
  },
  {
    step: '5',
    icon: '🎭',
    titleZh: '任務輸出 (Interactive Output)',
    titleEn: 'Task-Based Output',
    descZh: '情境角色扮演互動分支 · 語法拼句實戰微測驗',
    descEn: 'Branching role-play dialogues and sentence puzzles',
    targetModule: 'conversation',
    color: '#ec4899'
  }
];

export const LearningPathModule = ({ setActiveTab, onOpenChapterFinder }) => {
  const { learningMode, loc, t } = useLanguage();

  // Which stages the learner has marked complete (persisted locally)
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_path_progress');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Fast-track completed days count
  const [fastTrackCount, setFastTrackCount] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_fasttrack_completed_days');
      return saved ? JSON.parse(saved).length : 0;
    } catch {
      return 0;
    }
  });

  // Interactive Can-Do Checkmarks Persisted State
  const [checkedCanDos, setCheckedCanDos] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_cando_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Daily Study Goal in Minutes (5, 10, 20)
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(() => {
    try {
      return parseInt(localStorage.getItem('viet_daily_goal_min') || '10', 10);
    } catch {
      return 10;
    }
  });

  // Active Adaptive Learning Track Preset: 'all' | 'expatriate' | 'lifestyle' | 'academic'
  const [activeTrack, setActiveTrack] = useState(() => {
    try {
      return localStorage.getItem('viet_active_learning_track') || 'all';
    } catch {
      return 'all';
    }
  });

  const handleSelectTrack = (trackId) => {
    setActiveTrack(trackId);
    try {
      localStorage.setItem('viet_active_learning_track', trackId);
    } catch {}
  };

  const trackFeaturedChapters = useMemo(() => {
    if (activeTrack === 'expatriate') {
      return SYLLABUS_REGISTRY.filter(chap => 
        chap.category === 'business' || 
        chap.category === 'macropol' || 
        chap.id === 'scn_factory_qa' || 
        chap.id === 'scn_nhau_dinner' || 
        chap.id === 'vocab_5k'
      ).slice(0, 8);
    }
    if (activeTrack === 'lifestyle') {
      return SYLLABUS_REGISTRY.filter(chap => 
        chap.category === 'scenario' || 
        chap.category === 'fasttrack' || 
        chap.category === 'topics' || 
        chap.id === 'vocab_1k' || 
        chap.id === 'scn_apt_rental' || 
        chap.id === 'scn_air_customs' || 
        chap.id === 'scn_pharmacy_clinic'
      ).slice(0, 8);
    }
    if (activeTrack === 'academic') {
      return SYLLABUS_REGISTRY.filter(chap => 
        chap.category === 'basics' || 
        chap.category === 'grammar' || 
        chap.category === 'vocab'
      ).slice(0, 8);
    }
    return SYLLABUS_REGISTRY.slice(0, 8);
  }, [activeTrack]);

  // Expanded Stage Details Accordion
  const [expandedStageId, setExpandedStageId] = useState(null);

  // SRS Data
  const [srsStats, setSrsStats] = useState({ dueCount: 0, masteredCount: 0, totalTracked: 0 });

  useEffect(() => {
    const srsData = srsEngine.loadSrsData();
    const now = Date.now();
    let due = 0;
    let mastered = 0;
    const trackedKeys = Object.keys(srsData);
    
    trackedKeys.forEach(id => {
      const item = srsData[id];
      if (item.dueDate && item.dueDate <= now) due++;
      if (item.interval && item.interval >= 14) mastered++;
    });

    setSrsStats({
      dueCount: due,
      masteredCount: mastered,
      totalTracked: trackedKeys.length
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('viet_path_progress', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('viet_cando_checklist', JSON.stringify(checkedCanDos));
  }, [checkedCanDos]);

  useEffect(() => {
    localStorage.setItem('viet_daily_goal_min', dailyGoalMinutes.toString());
  }, [dailyGoalMinutes]);

  const toggleStage = (id) => {
    setCompleted(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const toggleCanDo = (stageId, canDoIdx) => {
    const key = `${stageId}_${canDoIdx}`;
    setCheckedCanDos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePlayLandscape = (e, text, accent = 'north') => {
    e.stopPropagation();
    audioEngine.playHaptic('tap');
    audioEngine.speak(text, { accent });
  };

  const percent = Math.round((completed.length / learningPath.length) * 100);
  const currentStage = learningPath.find(s => !completed.includes(s.id)) || learningPath[0];

  const quickStarts = [
    { id: 'topics', icon: Sparkles, titleZh: '7大情境專題深造', titleEn: '7 Situational Mastery', descZh: '商業問候·餐廳·家庭·健康·日期·殺價·數字', descEn: 'Business, Dining, Family, Health, Dates, Price & Numbers', tone: 'gold' },
    { id: 'macropol', icon: Landmark, titleZh: '越南政經智庫', titleEn: 'Macro & Politics', descZh: '5年匯率·SBV利率·海關關稅·十四大', descEn: '5Y FX, SBV Rates, Customs & Dossiers', tone: 'blue' },
    { id: 'business', icon: Briefcase, titleZh: '商務出差旗艦', titleEn: 'Business & FDI Hub', descZh: '談判·紅發票·工廠巡檢·應酬', descEn: 'Negotiation, Invoices & Factory', tone: 'gold' },
    { id: 'fasttrack', icon: Zap, titleZh: '7天生活速成', titleEn: '7-Day Fast-Track', descZh: '35 句高頻破冰實戰', descEn: '35 Survival Phrases', tone: 'gold' },
    { id: 'science', icon: Brain, titleZh: '科學方法研究', titleEn: 'Science & SLA', descZh: '5 大跨學科學習體系', descEn: '5-Discipline SLA Hub', tone: 'purple' },
    { id: 'emergency', icon: LifeBuoy, titleZh: '生活急救錦囊', titleEn: 'Survival Audio Kit', descZh: '街頭出差一鍵出聲', descEn: 'Instant Tap-to-Speak', tone: 'red' },
    { id: 'alphabet', icon: AudioLines, titleZh: '發音聲調打底', titleEn: 'Sounds & Tones', descZh: '29 字母與 6 聲調', descEn: '29 letters & 6 tones', tone: 'blue' },
    { id: 'conversation', icon: MessagesSquare, titleZh: '49大情境對話', titleEn: '49 Scenarios', descZh: '真實對話與角色扮演', descEn: 'Dialogues & Role-Play', tone: 'red' },
    { id: 'hanviet', icon: BookOpen, titleZh: '漢越同源字根', titleEn: 'Han-Viet Roots', descZh: '百大字根倍速記詞', descEn: '100 Core cognate roots', tone: 'purple' }
  ];

  return (
    <div className="module-container">
      {/* Hero Section with Live Progress Ring */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> {learningMode === 'zh' ? '多學科科學方法 · 專為繁體中文學習者打造' : 'Science-Backed Vietnamese for Everyone'}</div>
          <h1 id="home-title">
            {learningMode === 'zh' ? <>從第一聲問候，<span>走進真正的越南。</span></> : <>Learn Vietnamese.<span>Use it with confidence.</span></>}
          </h1>
          <p>
            {learningMode === 'zh'
              ? '結合 7天生活速成破冰、漢越音認知捷徑、SM-2 遺忘曲線對抗與南北口音切換，讓大眾快樂學好、掌握基本溝通！'
              : 'Master accents, 7-day survival conversations, Sino-Vietnamese cognates, and SM-2 memory curves in one joyful path.'}
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => setActiveTab('fasttrack')}>
              <Zap size={18} fill="currentColor" /> {learningMode === 'zh' ? '開啟 7 天生活速成破冰' : 'Start 7-Day Fast-Track'}
            </button>
            <button className="secondary-action" onClick={() => setActiveTab('science')}>
              <Brain size={18} /> {learningMode === 'zh' ? '檢視科學研究體系' : 'Explore Science Hub'}
            </button>
          </div>
        </div>

        <div className="hero-progress-card">
          <div className="progress-orbit" style={{ '--progress': `${percent * 3.6}deg` }}>
            <div><strong>{percent}%</strong><span>{learningMode === 'zh' ? '總進度' : 'progress'}</span></div>
          </div>
          <div className="hero-progress-copy">
            <span>{learningMode === 'zh' ? '7天速成進度' : 'Fast-Track Progress'}</span>
            <strong>{fastTrackCount} / 7 {learningMode === 'zh' ? '天已通關' : 'Days Complete'}</strong>
            <small>{completed.length} / {learningPath.length} {learningMode === 'zh' ? '大階段完成' : 'stages complete'}</small>
          </div>
        </div>
      </section>

      {/* Daily Study Goal Selector Bar */}
      <section style={{
        margin: '1.5rem 0',
        padding: '1.1rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(234, 179, 8, 0.15)',
            color: 'var(--brand-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Target size={22} />
          </div>
          <div>
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '🎯 今日個人化學習微目標' : '🎯 Daily Micro-Learning Target'}
            </strong>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '科學證實：每天持續 5~10 分鐘，學習保存率提升 300%' : 'Consistency beats intensity: 5-10 mins daily yields 300% higher retention'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { min: 5, labelZh: '🌱 輕鬆 5 分鐘', labelEn: '🌱 5 mins' },
            { min: 10, labelZh: '⚡ 標準 10 分鐘', labelEn: '⚡ 10 mins' },
            { min: 20, labelZh: '🔥 衝刺 20 分鐘', labelEn: '🔥 20 mins' }
          ].map(opt => (
            <button
              key={opt.min}
              onClick={() => setDailyGoalMinutes(opt.min)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: dailyGoalMinutes === opt.min ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: dailyGoalMinutes === opt.min ? 'var(--bg-accent)' : 'var(--bg-main)',
                color: dailyGoalMinutes === opt.min ? 'var(--brand-primary)' : 'var(--text-secondary)',
                fontWeight: dailyGoalMinutes === opt.min ? 800 : 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {learningMode === 'zh' ? opt.labelZh : opt.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* 🚀 今日推薦 3 步黃金動能循環 (Today's 3-Step Momentum Loop) */}
      <section className="daily-momentum-card" style={{
        margin: '1.75rem 0',
        padding: '1.75rem',
        background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 92%, #2563eb 8%) 0%, color-mix(in srgb, var(--bg-card) 95%, #10b981 5%) 100%)',
        border: '2px solid var(--border-highlight)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--card-shadow)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #3b82f6, #10b981, #f59e0b)'
        }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Flame size={15} color="var(--brand-gold)" />
              <span>{learningMode === 'zh' ? '高黏著動能 · 二語習得每日最佳化' : 'Daily Momentum Acquisition Cycle'}</span>
            </div>
            <h2 style={{ fontSize: '1.38rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.25rem 0 0.15rem' }}>
              {learningMode === 'zh' ? '⚡ 今日黃金學習 3 步閉環 (20 分鐘最優路徑)' : '⚡ Today\'s 3-Step Golden Momentum Loop'}
            </h2>
            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '不需猶豫今天學什麼！按照「溫故 ➔ 吸收 ➔ 輸出」科學節奏，每天 20 分鐘自然養成母語神經迴路。'
                : 'No more guessing what to study: Review ➔ Acquire ➔ Output. 20 mins a day for effortless fluency.'}
            </p>
          </div>

          <button
            onClick={() => {
              audioEngine.playHaptic('success');
              setActiveTab('flashcards');
            }}
            style={{
              padding: '0.75rem 1.4rem',
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(135deg, var(--brand-accent), #1d4ed8)',
              color: '#fff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.94rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 15px rgba(37, 99, 235, 0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            <Play size={16} fill="currentColor" />
            <span>{learningMode === 'zh' ? '一鍵啟動今日閉環' : 'Start Today\'s Loop'}</span>
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem'
        }}>
          {/* Step 1 */}
          <div
            onClick={() => {
              audioEngine.playHaptic('tap');
              setActiveTab('flashcards');
            }}
            style={{
              background: 'var(--bg-main)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
            className="momentum-step-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
              <span style={{
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#3b82f6',
                fontWeight: 900,
                fontSize: '0.76rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                STEP 1 · 5 分鐘
              </span>
              <span style={{ fontSize: '1.35rem' }}>🧠</span>
            </div>
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
              {learningMode === 'zh' ? '溫故知新：SM-2 智能閃卡' : 'Review: SM-2 Spaced Repetition'}
            </strong>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45, flexGrow: 1 }}>
              {learningMode === 'zh'
                ? `抗遺忘記憶喚醒！今日排程有 ${srsStats.dueCount > 0 ? srsStats.dueCount : '10'} 個到期單字等待鞏固長期記憶。`
                : `Beat the forgetting curve with active recall flashcards.`}
            </p>
            <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 800, color: '#3b82f6' }}>
              <span>{learningMode === 'zh' ? '進入閃卡庫' : 'Open Deck'}</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => {
              audioEngine.playHaptic('tap');
              setActiveTab(fastTrackCount < 7 ? 'fasttrack' : 'topics');
            }}
            style={{
              background: 'var(--bg-main)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
            className="momentum-step-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
              <span style={{
                background: 'rgba(234, 179, 8, 0.15)',
                color: 'var(--brand-gold)',
                fontWeight: 900,
                fontSize: '0.76rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                STEP 2 · 10 分鐘
              </span>
              <span style={{ fontSize: '1.35rem' }}>⚡</span>
            </div>
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
              {learningMode === 'zh' ? '核心吸收：今日進度章節' : 'Core Lesson: Today\'s Focus'}
            </strong>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45, flexGrow: 1 }}>
              {learningMode === 'zh'
                ? (fastTrackCount < 7 ? `7天生活速成：第 ${fastTrackCount + 1} 天破冰實戰！精讀 5 句道地金句與對話。` : '7大情境專題：商務談判、點餐飲食與日常生活深度吸收。')
                : 'Acquire high-frequency language patterns through structured immersion.'}
            </p>
            <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-gold)' }}>
              <span>{learningMode === 'zh' ? (fastTrackCount < 7 ? `挑戰 Day ${fastTrackCount + 1}` : '進入情境專題') : 'Start Lesson'}</span>
              <ArrowRight size={14} />
            </div>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => {
              audioEngine.playHaptic('tap');
              setActiveTab('sentence');
            }}
            style={{
              background: 'var(--bg-main)',
              border: '1.5px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative'
            }}
            className="momentum-step-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
              <span style={{
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                fontWeight: 900,
                fontSize: '0.76rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                STEP 3 · 5 分鐘
              </span>
              <span style={{ fontSize: '1.35rem' }}>🎯</span>
            </div>
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
              {learningMode === 'zh' ? '實戰輸出：拼句與對話模擬' : 'Output: Sentence & Dialogue'}
            </strong>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45, flexGrow: 1 }}>
              {learningMode === 'zh'
                ? '立即轉化為產出！透過拼句特訓或情境對話角色扮演，驗證今天所學，鎖定記憶。'
                : 'Convert passive knowledge into active communicative fluency.'}
            </p>
            <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.82rem', fontWeight: 800, color: '#10b981' }}>
              <span>{learningMode === 'zh' ? '立即拼句實戰' : 'Start Output'}</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive 3-Track Goal Switcher */}
      <section className="adaptive-tracks-card" style={{
        margin: '1.75rem 0',
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(37, 99, 235, 0.12)',
              color: 'var(--brand-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Compass size={22} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '🎯 個人化學習賽道導航 (Adaptive Goal Tracks)' : '🎯 Adaptive Goal-Oriented Tracks'}
              </h3>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' 
                  ? '選擇您的學習目標，系統將智能為您重組章節推薦、情境演練與高頻單字權重' 
                  : 'Select your learning objective to dynamically prioritize recommended chapters and vocabulary.'}
              </p>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '0.85rem'
        }}>
          {ADAPTIVE_TRACKS.map(tr => {
            const isSelected = activeTrack === tr.id;
            return (
              <div
                key={tr.id}
                onClick={() => handleSelectTrack(tr.id)}
                style={{
                  padding: '1.1rem 1.25rem',
                  borderRadius: 'var(--radius-lg)',
                  border: isSelected ? `2px solid ${tr.color}` : '1px solid var(--border-color)',
                  background: isSelected ? 'var(--bg-accent)' : 'var(--bg-main)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  boxShadow: isSelected ? '0 4px 14px rgba(37,99,235,0.15)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{tr.icon}</span>
                  <span style={{
                    background: isSelected ? tr.color : 'rgba(148, 163, 184, 0.15)',
                    color: isSelected ? '#fff' : 'var(--text-secondary)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.55rem',
                    borderRadius: 'var(--radius-full)'
                  }}>
                    {learningMode === 'zh' ? tr.badgeZh : tr.badgeEn}
                  </span>
                </div>
                <strong style={{ fontSize: '0.98rem', color: isSelected ? tr.color : 'var(--text-primary)', display: 'block', marginBottom: '0.3rem' }}>
                  {learningMode === 'zh' ? tr.titleZh : tr.titleEn}
                </strong>
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {learningMode === 'zh' ? tr.descZh : tr.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Master Course Syllabus & Chapter Quick Jump Hub */}
      <section className="syllabus-hub-banner" style={{
        margin: '1.75rem 0',
        padding: '1.75rem 2rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-highlight)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Layers size={15} />
              <span>{learningMode === 'zh' ? '全站章節導覽大廳' : 'Master Curriculum Directory'}</span>
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.35rem 0 0.2rem' }}>
              {learningMode === 'zh' 
                ? `${ADAPTIVE_TRACKS.find(t => t.id === activeTrack)?.titleZh || '全能精通'} · 精選推薦直達` 
                : `${ADAPTIVE_TRACKS.find(t => t.id === activeTrack)?.titleEn || 'Mastery'} · Featured Chapters`}
            </h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' 
                ? '依主題立即探索生活情境、商務出差、越南政經、發音聲調與語法字根，快速找到你想學的內容！'
                : 'Browse by topics: Life Dialogues, FDI Business, Macro Politics, Pronunciation, and Grammar Roots.'}
            </p>
          </div>

          <button
            onClick={onOpenChapterFinder}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.25rem',
              borderRadius: 'var(--radius-full)',
              background: 'var(--brand-accent)',
              color: '#fff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            <Search size={17} />
            <span>{learningMode === 'zh' ? '🔍 開啟全域章節速查盤 (Ctrl+K)' : 'Search All Chapters'}</span>
          </button>
        </div>

        {/* Featured Chapter Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '0.85rem'
        }}>
          {trackFeaturedChapters.map(chap => (
            <div
              key={chap.id}
              onClick={() => {
                setActiveTab(chap.moduleId);
                if (chap.targetParam) {
                  sessionStorage.setItem('viet_target_chapter', JSON.stringify(chap));
                  window.dispatchEvent(new CustomEvent('viet_jump_chapter', { detail: chap }));
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
              className="syllabus-preview-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--brand-accent)', background: 'var(--bg-accent)', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-full)' }}>
                  {learningMode === 'zh' ? chap.categoryLabelZh : chap.categoryLabelVi}
                </span>
                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--brand-gold)' }}>
                  {chap.level} · {chap.readTime}
                </span>
              </div>
              <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)', margin: '0.2rem 0', lineHeight: 1.3 }}>
                {chap.titleZh}
              </strong>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {chap.titleVi}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-accent)' }}>
                <span>{learningMode === 'zh' ? '前往章節' : 'Start'}</span>
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🗺️ 全域 20 大模組知識體系全景地圖 (20-Module SLA Knowledge Map) */}
      <section className="knowledge-map-section" style={{
        margin: '2rem 0',
        padding: '1.75rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Layers size={16} />
              <span>{learningMode === 'zh' ? '全域架構 · 零死角全景導航' : 'Complete 20-Module Knowledge Architecture'}</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.35rem 0 0.2rem' }}>
              {learningMode === 'zh' ? '🗺️ 全域 20 大模組知識體系地圖 (Knowledge Highway)' : '🗺️ 20-Module Full Knowledge Map'}
            </h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '依二語習得（SLA）科學認知階梯劃分：發音打底 ➔ 生活破冰 ➔ 深度對話 ➔ 語法字根 ➔ 智庫經貿，各模組無縫相連。'
                : 'Structured by SLA cognitive stages: Phonetics ➔ Survival ➔ Scenarios ➔ Syntax & Roots ➔ Business & Macro Intelligence.'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {MODULE_KNOWLEDGE_MAP.map((tier) => (
            <div
              key={tier.tierId}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderLeft: `5px solid ${tier.color}`,
                borderRadius: 'var(--radius-lg)',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.12rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {learningMode === 'zh' ? tier.tierNameZh : tier.tierNameEn}
                  </h3>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {learningMode === 'zh' ? tier.tierDescZh : tier.tierDescEn}
                  </p>
                </div>
                <span style={{
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  color: tier.color,
                  background: 'var(--bg-card)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: `1px solid ${tier.color}`
                }}>
                  {tier.modules.length} {learningMode === 'zh' ? '個核心模組' : 'Modules'}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: '0.75rem'
              }}>
                {tier.modules.map((mod) => (
                  <div
                    key={mod.id}
                    onClick={() => {
                      audioEngine.playHaptic('tap');
                      setActiveTab(mod.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.9rem 1rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: 'var(--card-shadow)'
                    }}
                    className="knowledge-mod-card"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <span style={{ fontSize: '1.3rem' }}>{mod.icon}</span>
                        <strong style={{ fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                          {learningMode === 'zh' ? mod.titleZh : mod.titleEn}
                        </strong>
                      </div>
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 900,
                        background: 'rgba(37, 99, 235, 0.1)',
                        color: 'var(--brand-accent)',
                        padding: '0.15rem 0.45rem',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        {mod.level}
                      </span>
                    </div>

                    <p style={{ margin: '0 0 0.6rem', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
                      {mod.descZh}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.4rem', borderTop: '1px solid var(--border-subtle)', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 700 }}>
                        ⏱ {mod.hours}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', fontSize: '0.76rem', fontWeight: 800, color: 'var(--brand-accent)' }}>
                        <span>進入</span>
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🇻🇳 越南人文地理與生活實境圖解景觀專區 */}
      <section className="cultural-landscapes-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <MapPin size={15} />
              <span>{learningMode === 'zh' ? '越南人文地理實景' : 'Cultural Geography & Destinations'}</span>
            </div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.35rem 0 0.2rem' }}>
              {learningMode === 'zh' ? '🇻🇳 越南人文地理與生活實境圖解 (Cultural Landscapes)' : '🇻🇳 Living Environments & Cultural Landscapes'}
            </h2>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' 
                ? '走進真實越南！結合地理風貌、地標發音與實戰情境直達，全方位掌握南北文化思維與語言脈絡。' 
                : 'Immerse into authentic Vietnam: geographical vistas, native pronunciations, and direct scenario links.'}
            </p>
          </div>
        </div>

        <div className="landscape-grid">
          {VIETNAM_LANDSCAPES.map(land => (
            <div
              key={land.id}
              className="landscape-card"
              onClick={() => {
                audioEngine.playHaptic('tap');
                setActiveTab(land.targetModule);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="landscape-img-wrap">
                <img
                  src={`${import.meta.env.BASE_URL || '/'}images/${land.image}`}
                  alt={land.nameZh}
                  className="landscape-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="landscape-img-overlay">
                  <span className="landscape-badge">
                    {learningMode === 'zh' ? land.badgeZh : land.badgeEn}
                  </span>
                  <span className="landscape-accent-tag">
                    {land.accent}
                  </span>
                </div>
              </div>

              <div className="landscape-content">
                <div className="landscape-title-row">
                  <span className="landscape-name-zh">
                    {learningMode === 'zh' ? land.nameZh : land.nameEn}
                  </span>
                  <button
                    className="landscape-listen-btn"
                    onClick={(e) => handlePlayLandscape(e, land.audioText, land.accentType)}
                    title="聆聽地標發音"
                    aria-label={`聆聽 ${land.nameVi} 發音`}
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
                <div className="landscape-name-vi">{land.nameVi}</div>
                <p className="landscape-desc">
                  {learningMode === 'zh' ? land.descZh : land.descEn}
                </p>
                <div className="landscape-footer-cta">
                  <span>{learningMode === 'zh' ? '前往相關學習模組' : 'Explore Module'}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7-Day Fast-Track Banner */}
      <section style={{
        margin: '1.75rem 0',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(234, 179, 8, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
        border: '1.5px solid rgba(234, 179, 8, 0.35)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 20px rgba(239, 68, 68, 0.25)'
          }}>
            ⚡
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '7天生活基本溝通速成破冰計畫' : '7-Day Fast-Track Survival Vietnamese'}
              </strong>
              <span style={{
                background: 'var(--brand-gold)',
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                {learningMode === 'zh' ? '大眾快樂零負擔' : 'Zero Friction'}
              </span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '每天 5 分鐘，精選 35 句打招呼、點咖啡、市場殺價、Grab搭車、稱謂防踩雷與交友實戰金句！'
                : '5 minutes a day: 35 essential phrases for greetings, coffee, bargaining, Grab rides, pronouns, and making friends!'}
            </p>
          </div>
        </div>

        <button
          className="primary-action"
          onClick={() => setActiveTab('fasttrack')}
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Play size={18} fill="currentColor" />
          {learningMode === 'zh' ? '立即前往速成島' : 'Start Fast-Track'}
        </button>
      </section>

      {/* Vietnam Macro & Policy Intelligence Portal Banner (Paperluz format) */}
      <section style={{
        margin: '1.75rem 0',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(11, 19, 41, 0.95) 0%, rgba(19, 31, 61, 0.95) 100%)',
        border: '1.5px solid #3b82f6',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
        color: '#f8fafc'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)'
          }}>
            🏛️
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                {learningMode === 'zh' ? '越南政經 · 國家戰略與宏觀總經情報中心' : 'Vietnam Macro & Policy Intelligence Hub'}
              </strong>
              <span style={{
                background: '#f59e0b',
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                {learningMode === 'zh' ? '智庫與一流新聞規格' : 'Paperluz Standard'}
              </span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: '#94a3b8' }}>
              {learningMode === 'zh'
                ? 'USD/VND 五年每週匯率走勢追蹤 · 央行與四大行定存放款利率矩陣 · 海關外貿通關法規 · 越共十四大與政經深度調查專題！'
                : '5-Year USD/VND weekly FX trend, SBV & Big 4 deposit/lending rates matrix, trade customs regulations, and in-depth political-economic dossiers!'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('macropol')}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
            transition: 'all 0.15s ease'
          }}
        >
          <BookOpen size={18} />
          {learningMode === 'zh' ? '進入越南政經門戶' : 'Explore Macro Hub'}
        </button>
      </section>

      {/* 💡 越南跨文化避坑與社交禮儀圖解專區 */}
      <section className="cultural-tips-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
          <Sparkles size={18} style={{ color: 'var(--brand-gold)' }} />
          <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-primary)', margin: 0 }}>
            {learningMode === 'zh' ? '💡 越南跨文化避坑與社交禮儀圖解指南' : '💡 Cultural Etiquette & Living Hacks Guide'}
          </h2>
        </div>
        <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          {learningMode === 'zh'
            ? '在地人沒說但超重要的 5 大日常溝通眉角！從茶桌習慣、馬路求生到商務宴飲禮儀，避免踩雷、迅速融入。'
            : '5 essential cultural survival rules: tea table habits, road safety, and dinner manners for seamless integration.'}
        </p>

        <div className="etiquette-grid">
          {VIETNAMESE_ETIQUETTE_TIPS.map(tip => (
            <div key={tip.id} className="etiquette-card" style={{ borderLeft: `4px solid ${tip.color}` }}>
              <div className="etiquette-header">
                <div className="etiquette-icon-wrap" style={{ background: tip.bg }}>
                  <span>{tip.icon}</span>
                </div>
                <span className="etiquette-tag" style={{ background: tip.bg, color: tip.color }}>
                  {learningMode === 'zh' ? tip.tagZh : tip.tagEn}
                </span>
              </div>
              <strong className="etiquette-title">
                {learningMode === 'zh' ? tip.titleZh : tip.titleEn}
              </strong>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0.3rem 0 0.5rem' }}>
                <span className="etiquette-vi">{tip.phraseVi}</span>
                <button
                  className="landscape-listen-btn"
                  onClick={(e) => handlePlayLandscape(e, tip.audioText)}
                  title="聆聽發音"
                  aria-label={`聆聽 ${tip.phraseVi} 發音`}
                >
                  <Volume2 size={13} />
                </button>
              </div>
              <p className="etiquette-desc">
                {learningMode === 'zh' ? tip.descZh : tip.descEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SRS Retention Status Hub */}
      <section className="srs-retention-hub" style={{
        margin: '1.75rem 0',
        padding: '1.25rem 1.5rem',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.08) 100%)',
        border: '1.5px solid rgba(37,99,235,0.25)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--brand-primary)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Brain size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <strong style={{ fontSize: '1.15em', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '🧠 今日大腦記憶保鮮狀態 (SM-2 SRS)' : '🧠 Daily Brain Retention Status (SM-2)'}
              </strong>
              {srsStats.dueCount > 0 ? (
                <span style={{
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: '0.75em',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {learningMode === 'zh' ? `${srsStats.dueCount} 張到期待複習` : `${srsStats.dueCount} Due for review`}
                </span>
              ) : (
                <span style={{
                  background: 'var(--brand-green)',
                  color: '#fff',
                  fontSize: '0.75em',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {learningMode === 'zh' ? '✓ 記憶狀態絕佳' : '✓ Retention optimal'}
                </span>
              )}
            </div>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.88em', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? `已進入間隔重複排程：${srsStats.totalTracked} 個單字 · 深度長期記憶 (14d+)：${srsStats.masteredCount} 個`
                : `Active in SRS schedule: ${srsStats.totalTracked} words · Long-term mastered (14d+): ${srsStats.masteredCount} words`}
            </p>
          </div>
        </div>

        <button
          className="primary-action"
          style={{ padding: '0.6rem 1.2rem', fontSize: '0.92rem' }}
          onClick={() => setActiveTab('flashcards')}
        >
          <Layers3 size={17} />
          {learningMode === 'zh' ? '開啟智能閃卡複習' : 'Start SRS Flashcards'}
        </button>
      </section>

      {/* 5-Step SLA Closed-Loop Pedagogical Model Card */}
      <section className="pedagogical-loop-card" style={{
        margin: '1.75rem 0',
        padding: '1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--card-shadow)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(234, 179, 8, 0.15)',
            color: 'var(--brand-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Layers size={22} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.18rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '🔄 認知二語習得 5 步閉環教學法 (SLA Closed-Loop Model)' : '🔄 5-Step SLA Closed-Loop Pedagogical Model'}
            </h3>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '告別死記硬背！遵循二語習得 SLA 科學節奏：精聽輸入 ➔ 結構剖析 ➔ 間隔固化 ➔ 內化跟讀 ➔ 任務輸出'
                : 'Scientific language acquisition flow: Auditory Input ➔ Grammar Structure ➔ Memory Consolidation ➔ Prosodic Shadowing ➔ Interactive Output.'}
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '0.75rem'
        }}>
          {PEDAGOGICAL_STEPS.map((s) => (
            <div
              key={s.step}
              onClick={() => {
                setActiveTab(s.targetModule);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="pedagogical-step-box"
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                <span style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: 'var(--radius-full)',
                  background: s.color,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  fontWeight: 900
                }}>
                  {s.step}
                </span>
                <span style={{ fontSize: '1.45rem' }}>{s.icon}</span>
              </div>
              <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.3 }}>
                {learningMode === 'zh' ? s.titleZh : s.titleEn}
              </strong>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, flexGrow: 1 }}>
                {learningMode === 'zh' ? s.descZh : s.descEn}
              </p>
              <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', fontWeight: 800, color: s.color }}>
                <span>{learningMode === 'zh' ? '前往此步驟' : 'Enter Step'}</span>
                <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Start Grid */}
      <section className="quick-start-section" aria-labelledby="quick-start-title">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">{learningMode === 'zh' ? '快速開始' : 'QUICK START'}</span>
            <h2 id="quick-start-title">{learningMode === 'zh' ? '今天想練什麼？' : 'What would you like to practice?'}</h2>
          </div>
          <span className="section-note">{learningMode === 'zh' ? '每次 5–10 分鐘也能穩定前進' : 'Make progress in just 5–10 minutes'}</span>
        </div>
        <div className="quick-start-grid">
          {quickStarts.map(({ id, icon: Icon, titleZh, titleEn, descZh, descEn, tone }) => (
            <button key={id} className={`quick-start-card tone-${tone}`} onClick={() => setActiveTab(id)}>
              <span className="quick-icon"><Icon size={23} /></span>
              <span><strong>{learningMode === 'zh' ? titleZh : titleEn}</strong><small>{learningMode === 'zh' ? descZh : descEn}</small></span>
              <ArrowRight className="quick-arrow" size={18} />
            </button>
          ))}
        </div>
      </section>

      {/* CEFR Framework Milestones Matrix Bar */}
      <section style={{
        marginTop: '2rem',
        padding: '1.25rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase' }}>
              CEFR & iVPT 國際認證對標矩陣
            </span>
            <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              越語能力成長階段里程碑 (Progress Milestones)
            </h3>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            對標歐洲語言共同架構 (CEFR) 與成大 iVPT
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
          {[
            { lvl: 'A1 入門', hours: '30h', vocab: '500詞', focus: '發音·聲調·破冰', color: '#3b82f6' },
            { lvl: 'A1+ 初階', hours: '60h', vocab: '1,000詞', focus: '飲食·叫車·數字', color: '#10b981' },
            { lvl: 'A2 基礎', hours: '120h', vocab: '2,000詞', focus: '市場殺價·稱謂', color: '#f59e0b' },
            { lvl: 'B1 職場', hours: '250h', vocab: '3,500詞', focus: '工廠巡檢·商務', color: '#ef4444' },
            { lvl: 'B2 流暢', hours: '450h', vocab: '5,000詞', focus: '南北口音·熱炒', color: '#8b5cf6' },
            { lvl: 'C1 精通', hours: '700h', vocab: '7,500詞', focus: '漢越字根·法律', color: '#06b6d4' },
            { lvl: 'C2 大師', hours: '1000h+', vocab: '10,000+詞', focus: '同傳口譯·經貿', color: '#ec4899' }
          ].map((m, mIdx) => (
            <div
              key={mIdx}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderTop: `3px solid ${m.color}`,
                borderRadius: 'var(--radius-sm)',
                padding: '0.7rem 0.55rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontWeight: 900, fontSize: '0.92rem', color: m.color }}>{m.lvl}</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                ⏱ {m.hours} · 📚 {m.vocab}
              </div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                {m.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stage Roadmap Cards: A1 to C2 with Interactive Can-Do Checklist */}
      <div id="learning-roadmap" className="roadmap-grid" style={{ marginTop: '2.5rem' }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: '0.5rem' }}>
          <span className="section-kicker">{learningMode === 'zh' ? '成長藍圖' : 'LEARNING ROADMAP'}</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.2rem 0' }}>
            {learningMode === 'zh' ? '🇻🇳 信達雅三位一體：A1 至 C2 七大進階階段' : 'A1 to C2 7-Stage Official Mastery Roadmap'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
            {learningMode === 'zh'
              ? '對標台灣成大 iVPT 與河內國家大學 VINATEST 認證標準，點擊勾選各項實戰能力指標。'
              : 'Aligned with iVPT and VINATEST official language framework standards.'}
          </p>
        </div>

        {learningPath.map((stage, idx) => {
          const done = completed.includes(stage.id);
          const isCurrent = currentStage && currentStage.id === stage.id;
          const isExpanded = expandedStageId === stage.id;
          const canDoList = learningMode === 'zh' ? stage.canDoZh : stage.canDoEn;

          // Calculate checked Can-Dos count
          const stageCheckedCount = canDoList.filter((_, cIdx) => checkedCanDos[`${stage.id}_${cIdx}`]).length;
          const canDoProgress = Math.round((stageCheckedCount / canDoList.length) * 100);

          return (
            <div
              key={stage.id}
              className="learning-card"
              style={{
                borderLeft: `6px solid ${done ? 'var(--brand-green)' : isCurrent ? 'var(--brand-primary)' : 'var(--border-color)'}`,
                opacity: done ? 0.95 : 1,
                background: done ? 'var(--bg-card-subtle)' : 'var(--bg-card)',
                boxShadow: isCurrent ? '0 8px 30px rgba(218, 37, 28, 0.12)' : 'var(--card-shadow)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Stage header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                <div style={{ flex: '1 1 320px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'var(--brand-primary)', color: '#fff', fontWeight: 900, fontSize: '0.78em', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      CEFR {stage.level}
                    </span>
                    <span style={{ background: 'var(--bg-accent)', color: 'var(--brand-gold)', fontWeight: 800, fontSize: '0.78em', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {loc(stage, 'ivpt')}
                    </span>
                    {isCurrent && (
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 800, fontSize: '0.82em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Flame size={14} color="var(--brand-accent)" />
                        {learningMode === 'zh' ? '目前進行中' : 'In progress'}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.28em', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {loc(stage, 'title')}
                  </h3>
                  <div style={{ fontSize: '0.86em', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    ⏱ {loc(stage, 'duration')} · 📚 {learningMode === 'zh' ? `目標詞彙 ${stage.vocabTarget} 字` : `${stage.vocabTarget} words target`}
                  </div>
                </div>

                <button
                  className="control-btn"
                  onClick={() => toggleStage(stage.id)}
                  style={{
                    background: done ? 'var(--brand-green)' : 'var(--bg-main)',
                    color: done ? '#fff' : 'inherit',
                    fontWeight: 800,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {done ? <CheckCircle size={16} /> : <Circle size={16} />}
                  <span>
                    {done
                      ? (learningMode === 'zh' ? '已全階段通關' : 'Completed')
                      : (learningMode === 'zh' ? '標記通關' : 'Mark done')}
                  </span>
                </button>
              </div>

              {/* Stage goal */}
              <div style={{ background: 'var(--bg-accent)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.9rem', fontSize: '0.94em', borderLeft: '3px solid var(--brand-accent)' }}>
                🎯 <strong>{learningMode === 'zh' ? '核心目標：' : 'Stage goal: '}</strong>
                {loc(stage, 'goal')}
              </div>

              {/* Interactive Can-Do Checklist */}
              <div style={{ marginBottom: '1rem', background: 'var(--bg-main)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <div style={{ fontSize: '0.88em', fontWeight: 800, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckSquare size={16} color="var(--brand-green)" />
                    <span>{learningMode === 'zh' ? '能力指標任務自檢 (Can-Do)' : 'Can-Do Progress Checklist'}</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-green)' }}>
                    {stageCheckedCount} / {canDoList.length} ({canDoProgress}%)
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {canDoList.map((item, i) => {
                    const isChecked = !!checkedCanDos[`${stage.id}_${i}`];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleCanDo(stage.id, i)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          cursor: 'pointer',
                          padding: '0.3rem 0',
                          userSelect: 'none'
                        }}
                      >
                        <span style={{ marginTop: '2px', color: isChecked ? 'var(--brand-green)' : 'var(--text-muted)' }}>
                          {isChecked ? <CheckSquare size={16} /> : <Square size={16} />}
                        </span>
                        <span style={{
                          fontSize: '0.9rem',
                          color: isChecked ? 'var(--text-muted)' : 'var(--text-secondary)',
                          textDecoration: isChecked ? 'line-through' : 'none',
                          lineHeight: 1.45
                        }}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Linked Recommended Learning Modules with Direct Launch CTA */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.86em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={15} color="var(--brand-accent)" />
                  {learningMode === 'zh' ? '推薦實戰學習模組' : 'Recommended modules'}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {stage.modules.map((modId, mIdx) => (
                    <button
                      key={modId}
                      className="control-btn"
                      onClick={() => setActiveTab(modId)}
                      style={{
                        fontSize: '0.88em',
                        background: mIdx === 0 ? 'var(--bg-accent)' : 'var(--bg-main)',
                        border: mIdx === 0 ? '1.5px solid var(--brand-accent)' : '1px solid var(--border-color)',
                        color: mIdx === 0 ? 'var(--brand-accent)' : 'var(--text-primary)',
                        padding: '0.45rem 0.85rem',
                        fontWeight: 700
                      }}
                    >
                      <span>{t(`tabs.${modId}`)}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone Indicator */}
              <div style={{ fontSize: '0.88em', color: 'var(--brand-gold)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-color)' }}>
                <Flag size={15} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{loc(stage, 'milestone')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPathModule;
