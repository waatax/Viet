import { EXTRA_ETIQUETTE_TIPS, EXTRA_PROVERBS } from '../data/contentExpansion';
import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag, Sparkles,
  AudioLines, MessagesSquare, ShoppingBag, GraduationCap, Play, Route, Brain, Clock, Layers3,
  Zap, LifeBuoy, ShieldCheck, Award, Briefcase, CheckSquare, Square, ChevronDown, ChevronUp, Flame,
  Search, Landmark, Layers, ArrowUpRight, Volume2, MapPin, Coffee, Building2,
  Star, RotateCw, Copy, Check, Bookmark
} from 'lucide-react';
import { learningPath, flashcardsDeck } from '../data/vietnameseData';
import { SYLLABUS_REGISTRY } from '../config/syllabusRegistry';
import { NAV_GROUPS } from '../config/navigation';
import { srsEngine } from '../services/srsEngine';
import { audioEngine } from '../services/audioEngine';
import { bookmarkService } from '../services/bookmarkService';
import { useLanguage } from '../context/LanguageContext';
import { HomeConversationStudio } from './HomeConversationStudio';
import { DailyPatternMixer } from './DailyPatternMixer';
import './LearningPathModule.css';

export const VIETNAM_LANDSCAPES = [
  {
    id: 'hcmc',
    nameZh: '胡志明市金融特區',
    nameVi: 'Thành phố Hồ Chí Minh',
    nameEn: 'Ho Chi Minh City (Saigon)',
    accent: '🌴 南越口音偏好',
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
VIETNAMESE_ETIQUETTE_TIPS.push(...EXTRA_ETIQUETTE_TIPS);


export const VIETNAMESE_PROVERBS = [
  {
    id: 'proverb_iron_needle',
    vi: 'Có công mài sắt, có ngày nên kim.',
    zh: '只要功夫深，鐵杵磨成針。比喻只要有毅力與耐心，再艱巨的學習目標終能達成。',
    en: 'With perseverance, an iron rod can be ground into a needle. Practice makes perfect.',
    hanViet: 'CÔNG (功) · MÀI · SẮT (鐵) · KIM (針)',
    culturalContext: '越南家喻戶曉的立志諺語，勉勵人持之以恆。',
    audioText: 'Có công mài sắt, có ngày nên kim'
  },
  {
    id: 'proverb_learn_eating_speaking',
    vi: 'Học ăn, học nói, học gói, học mở.',
    zh: '學吃、學說、學包、學解。指為人處世的禮儀與應對進退，凡事皆須從小處細心學習。',
    en: 'Learn how to eat, how to speak, how to wrap, and how to unwrap. Master all life courtesies.',
    hanViet: 'HỌC (學) · ĂN (吃) · NÓI (說)',
    culturalContext: '長輩教導晚輩舉止得體、謙虛謹慎的至理名言。',
    audioText: 'Học ăn, học nói, học gói, học mở'
  },
  {
    id: 'proverb_travel_day_learn_basket',
    vi: 'Đi một ngày đàng, học một sàng khôn.',
    zh: '行一日路，長一籮智。意即「讀萬卷書不如行萬里路」，走出舒適圈開拓眼界。',
    en: "Travel a day's journey, gain a basket full of wisdom. Experience broadens the mind.",
    hanViet: 'KHÔN (坤/智) · ĐÀNG (路)',
    culturalContext: '鼓勵旅行與實踐，親身體驗異國風土人情獲益良多。',
    audioText: 'Đi một ngày đàng, học một sàng khôn'
  },
  {
    id: 'proverb_eat_fruit_remember_planter',
    vi: 'Ăn quả nhớ kẻ trồng cây.',
    zh: '吃果子拜樹頭（飲水思源）。享受成果時，永遠不忘開拓者與恩人的付出。',
    en: 'When eating fruit, remember who planted the tree. Gratitude and honoring roots.',
    hanViet: 'QUẢ (果) · KẺ · TRỒNG · CÂY (樹)',
    culturalContext: '越南尊師重道與崇敬先祖文化的核心價值觀。',
    audioText: 'Ăn quả nhớ kẻ trồng cây'
  },
  {
    id: 'proverb_words_no_money',
    vi: 'Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.',
    zh: '話語無須金錢買，擇善而言悅人心。良言一句三冬暖，注重談吐修養與同理心。',
    en: 'Words cost no money to buy; choose your words carefully to please one another.',
    hanViet: 'LỜI (言) · TIỀN (錢) · MUA (買)',
    culturalContext: '強調口語溝通的柔和藝術，在職場與日常交往特別受用。',
    audioText: 'Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau'
  },
  {
    id: 'proverb_one_tree_not_mountain',
    vi: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.',
    zh: '獨木不成林，三木成高山。強調眾志成城、團隊協同合作的力量。',
    en: 'A single tree makes not a forest; three trees grouped form a high mountain. Unity is strength.',
    hanViet: 'CÂY (木) · NON (山) · CAO (高)',
    culturalContext: '象徵越南民族團結克服困難與歷史挑戰的集體精神。',
    audioText: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao'
  },
  {
    id: 'proverb_ask_to_know',
    vi: 'Muốn biết phải hỏi, muốn giỏi phải học.',
    zh: '欲知須發問，欲精須向學。不恥下問、勇於求知是成為專家的唯一捷徑。',
    en: 'If you want to know, ask; if you want to excel, learn.',
    hanViet: 'BIẾT (知) · HỎI (問) · GIỎI · HỌC (學)',
    culturalContext: '鼓勵主動開口發問，是越語學習者的最佳座右銘。',
    audioText: 'Muốn biết phải hỏi, muốn giỏi phải học'
  }
];
VIETNAMESE_PROVERBS.push(...EXTRA_PROVERBS);


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
      { id: 'accent', icon: '🇻🇳', titleZh: '南北口音對照', titleEn: 'North vs South', level: 'A1-B1', hours: '3h', descZh: '河內標準音 vs 南越口音偏好對比與切換' }
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
      { id: 'conversation', icon: '💬', titleZh: '64大情境對話', titleEn: '64 Scenarios', level: 'A1-B2', hours: '18h', descZh: '涵蓋食衣住行、租屋看診與分段雙語精聽' },
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
    descZh: '越南語神經合成語音 · 雙語對照 · 1.0x / 0.75x 慢速精讀',
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

const VALID_HOME_VIEWS = ['overview', 'studio', 'curriculum', 'culture', 'guide'];

export const LearningPathModule = ({
  setActiveTab,
  onOpenChapterFinder,
  onSelectChapter,
  KnowledgeGuideComponent,
  selectedAccent = 'north',
  setSelectedAccent,
  updateUserStats
}) => {
  const { learningMode, loc, t } = useLanguage();

  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_path_progress');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [checkedCanDos, setCheckedCanDos] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_cando_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(() => {
    try {
      return parseInt(localStorage.getItem('viet_daily_goal_min') || '10', 10);
    } catch {
      return 10;
    }
  });

  const [activeHomeView, setActiveHomeView] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_home_view_tab_v2');
      return VALID_HOME_VIEWS.includes(saved) ? saved : 'overview';
    } catch {
      return 'overview';
    }
  });

  const handleSelectHomeView = (viewKey) => {
    audioEngine.playHaptic('selection');
    setActiveHomeView(viewKey);
    try {
      localStorage.setItem('viet_home_view_tab_v2', viewKey);
    } catch {}
  };

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
      ).slice(0, 6);
    }
    if (activeTrack === 'lifestyle') {
      return SYLLABUS_REGISTRY.filter(chap =>
        chap.category === 'scenario' ||
        chap.category === 'fasttrack' ||
        chap.category === 'topics' ||
        chap.id === 'vocab_1k' ||
        chap.id === 'scn_apt_rental' ||
        chap.id === 'scn_air_customs'
      ).slice(0, 6);
    }
    if (activeTrack === 'academic') {
      return SYLLABUS_REGISTRY.filter(chap =>
        chap.category === 'basics' ||
        chap.category === 'grammar' ||
        chap.category === 'vocab'
      ).slice(0, 6);
    }
    return SYLLABUS_REGISTRY.slice(0, 6);
  }, [activeTrack]);

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
    setSrsStats({ dueCount: due, masteredCount: mastered, totalTracked: trackedKeys.length });
  }, []);

  useEffect(() => {
    try { localStorage.setItem('viet_path_progress', JSON.stringify(completed)); } catch {}
  }, [completed]);

  useEffect(() => {
    try { localStorage.setItem('viet_cando_checklist', JSON.stringify(checkedCanDos)); } catch {}
  }, [checkedCanDos]);

  useEffect(() => {
    try { localStorage.setItem('viet_daily_goal_min', dailyGoalMinutes.toString()); } catch {}
  }, [dailyGoalMinutes]);

  const toggleStage = (id) => {
    setCompleted(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const toggleCanDo = (stageId, canDoIdx) => {
    const key = `${stageId}_${canDoIdx}`;
    setCheckedCanDos(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePlayLandscape = (e, text, accent = 'north') => {
    e.stopPropagation();
    audioEngine.playHaptic('tap');
    audioEngine.speak(text, { accent });
  };

  const [quoteIdx, setQuoteIdx] = useState(() => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((now - startOfYear) / 86400000);
    return dayOfYear % VIETNAMESE_PROVERBS.length;
  });

  const currentProverb = VIETNAMESE_PROVERBS[quoteIdx];
  const [isProverbBookmarked, setIsProverbBookmarked] = useState(() => bookmarkService.isBookmarked(currentProverb.vi));
  const [copiedProverb, setCopiedProverb] = useState(false);

  useEffect(() => {
    setIsProverbBookmarked(bookmarkService.isBookmarked(currentProverb.vi));
  }, [currentProverb]);

  const handleNextQuote = () => {
    audioEngine.playHaptic('tap');
    setQuoteIdx(prev => (prev + 1) % VIETNAMESE_PROVERBS.length);
  };

  const handleToggleProverbBookmark = () => {
    audioEngine.playHaptic('tap');
    const added = bookmarkService.toggle({
      viet: currentProverb.vi,
      chinese: currentProverb.zh,
      english: currentProverb.en,
      category: 'phrases',
      source: '每日道地諺語金句',
      note: currentProverb.hanViet
    });
    setIsProverbBookmarked(added);
  };

  const handleCopyProverb = () => {
    navigator.clipboard?.writeText(`${currentProverb.vi}\n${currentProverb.zh}`);
    setCopiedProverb(true);
    audioEngine.playHaptic('tap');
    setTimeout(() => setCopiedProverb(false), 2000);
  };

  const currentStage = learningPath.find(s => !completed.includes(s.id)) || learningPath[0];

  const SPECIALIZED_PORTALS = [
    {
      id: 'business',
      icon: Briefcase,
      tone: 'amber',
      titleZh: '商務出差與工廠實務',
      titleEn: 'Business & FDI Hub',
      descZh: '產線巡檢・AQL 品保・紅發票・商務應酬'
    },
    {
      id: 'macropol',
      icon: Landmark,
      tone: 'blue',
      titleZh: '越南政經總經智庫',
      titleEn: 'Vietnam Macro Hub',
      descZh: 'USD/VND 匯率・央行利率・通關法規專題'
    },
    {
      id: 'emergency',
      icon: LifeBuoy,
      tone: 'rose',
      titleZh: '生活急救點讀錦囊',
      titleEn: 'Emergency Audio Kit',
      descZh: '醫療看診・遺失協尋・街頭一鍵出聲卡'
    },
    {
      id: 'hanviet',
      icon: BookOpen,
      tone: 'purple',
      titleZh: '漢越同源字根倍速記憶',
      titleEn: 'Han-Viet Cognates',
      descZh: '用中文漢字推導越語詞彙與聲調對應'
    }
  ];

  const EXPLORE_TABS = [
    { id: 'overview', icon: '✨', labelZh: '每日精選', labelEn: 'Daily Picks' },
    { id: 'studio', icon: '🎧', labelZh: '首頁快播會話室', labelEn: 'Quick Dialogue Studio' },
    { id: 'curriculum', icon: '🗺️', labelZh: '20 模組與 A1–C2 藍圖', labelEn: 'Full Curriculum' },
    { id: 'culture', icon: '🇻🇳', labelZh: '越南風土與禮儀', labelEn: 'Culture & Etiquette' },
    { id: 'guide', icon: '📖', labelZh: '學習法與知識導覽', labelEn: 'Method & Guide' }
  ];

  return (
    <div className="home-explore-deck">
      <div className="home-explore-tabs" role="tablist" aria-label={learningMode === 'zh' ? '探索更多學習專區' : 'Explore learning sections'}>
        {EXPLORE_TABS.map(tab => {
          const isActive = activeHomeView === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`home-explore-tab ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectHomeView(tab.id)}
            >
              <span aria-hidden="true">{tab.icon}</span>
              <span>{learningMode === 'zh' ? tab.labelZh : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {activeHomeView === 'overview' && (
        <div className="explore-panel explore-overview">
          <section className="proverb-card-v2" aria-label="每日越語諺語">
            <div className="proverb-card-head">
              <div className="proverb-head-title">
                <span className="proverb-pill">📜 每日越語金句 #{quoteIdx + 1}/{VIETNAMESE_PROVERBS.length}</span>
                <span className="proverb-hanviet">{currentProverb.hanViet}</span>
              </div>
              <div className="proverb-head-actions">
                <button
                  type="button"
                  className="proverb-icon-btn"
                  onClick={() => {
                    audioEngine.playHaptic('tap');
                    audioEngine.speak(currentProverb.audioText, { accent: selectedAccent });
                  }}
                  title="播放發音"
                  aria-label="播放諺語發音"
                >
                  <Volume2 size={16} />
                </button>
                <button
                  type="button"
                  className={`proverb-icon-btn ${isProverbBookmarked ? 'is-saved' : ''}`}
                  onClick={handleToggleProverbBookmark}
                  title={isProverbBookmarked ? '從生詞本移除' : '收藏至生詞本'}
                  aria-label="收藏諺語"
                >
                  <Star size={16} fill={isProverbBookmarked ? 'currentColor' : 'none'} />
                </button>
                <button
                  type="button"
                  className="proverb-icon-btn"
                  onClick={handleCopyProverb}
                  title="複製"
                  aria-label="複製諺語"
                >
                  {copiedProverb ? <Check size={15} /> : <Copy size={15} />}
                </button>
                <button
                  type="button"
                  className="proverb-shuffle-btn"
                  onClick={handleNextQuote}
                >
                  <RotateCw size={13} />
                  <span>換一句</span>
                </button>
              </div>
            </div>
            <blockquote className="proverb-vi">“{currentProverb.vi}”</blockquote>
            <p className="proverb-zh">{learningMode === 'zh' ? currentProverb.zh : currentProverb.en}</p>
          </section>

          <section className="specialized-portals-section" aria-label="進階專題與實用工具">
            <div className="explore-subhead">
              <h2>{learningMode === 'zh' ? '專題與實戰工具' : 'Specialized Hubs'}</h2>
              <button type="button" className="explore-link-btn" onClick={() => handleSelectHomeView('curriculum')}>
                <span>瀏覽全部 20 門課程</span>
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="specialized-portals-grid">
              {SPECIALIZED_PORTALS.map(({ id, icon: Icon, tone, titleZh, titleEn, descZh }) => (
                <button
                  key={id}
                  type="button"
                  className={`portal-card-v2 tone-${tone}`}
                  onClick={() => {
                    audioEngine.playHaptic('tap');
                    setActiveTab(id);
                  }}
                >
                  <span className={`portal-icon-v2 tone-${tone}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="portal-copy-v2">
                    <strong>{learningMode === 'zh' ? titleZh : titleEn}</strong>
                    <small>{descZh}</small>
                  </span>
                  <ArrowRight size={15} className="portal-arrow-v2" aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeHomeView === 'studio' && (
        <div className="explore-panel">
          <HomeConversationStudio
            selectedAccent={selectedAccent}
            onSelectAccent={setSelectedAccent}
            setActiveTab={setActiveTab}
            updateUserStats={updateUserStats}
          />
        </div>
      )}

      {activeHomeView === 'curriculum' && (
        <div className="explore-panel explore-curriculum">
          <section className="explore-surface-card">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker">個人化學習賽道</span>
                <h2>依目標挑選優先章節</h2>
              </div>
              {onOpenChapterFinder && (
                <button type="button" className="explore-primary-pill" onClick={onOpenChapterFinder}>
                  <Search size={15} />
                  <span>搜尋全部章節</span>
                </button>
              )}
            </div>

            <div className="adaptive-tracks-grid">
              {ADAPTIVE_TRACKS.map(tr => {
                const isSelected = activeTrack === tr.id;
                return (
                  <button
                    key={tr.id}
                    type="button"
                    className={`track-choice-card ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelectTrack(tr.id)}
                  >
                    <div className="track-choice-top">
                      <span className="track-choice-icon">{tr.icon}</span>
                      <span className="track-choice-badge">{learningMode === 'zh' ? tr.badgeZh : tr.badgeEn}</span>
                    </div>
                    <strong>{learningMode === 'zh' ? tr.titleZh : tr.titleEn}</strong>
                    <small>{learningMode === 'zh' ? tr.descZh : tr.descEn}</small>
                  </button>
                );
              })}
            </div>

            <div className="track-chapters-grid">
              {trackFeaturedChapters.map(chap => (
                <button
                  key={chap.id}
                  type="button"
                  className="syllabus-preview-card"
                  onClick={() => {
                    setActiveTab(chap.moduleId);
                    if (chap.targetParam) {
                      sessionStorage.setItem('viet_target_chapter', JSON.stringify(chap));
                      window.dispatchEvent(new CustomEvent('viet_jump_chapter', { detail: chap }));
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="syllabus-card-meta">
                    <span className="syllabus-cat-pill">{learningMode === 'zh' ? chap.categoryLabelZh : chap.categoryLabelVi}</span>
                    <span className="syllabus-lvl-text">{chap.level} · {chap.readTime}</span>
                  </div>
                  <strong>{chap.titleZh}</strong>
                  <small>{chap.titleVi}</small>
                </button>
              ))}
            </div>
          </section>

          <section className="explore-surface-card">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker">全域課程地圖</span>
                <h2>五大階梯・20 大核心學習模組</h2>
              </div>
            </div>

            <div className="tiers-stack">
              {MODULE_KNOWLEDGE_MAP.map((tier) => (
                <div key={tier.tierId} className="tier-group-box" style={{ '--tier-accent': tier.color }}>
                  <div className="tier-group-head">
                    <div>
                      <h3>{learningMode === 'zh' ? tier.tierNameZh : tier.tierNameEn}</h3>
                      <p>{learningMode === 'zh' ? tier.tierDescZh : tier.tierDescEn}</p>
                    </div>
                    <span className="tier-count-pill">{tier.modules.length} 模組</span>
                  </div>
                  <div className="tier-modules-grid">
                    {tier.modules.map((mod) => (
                      <button
                        key={mod.id}
                        type="button"
                        className="knowledge-mod-card"
                        onClick={() => {
                          audioEngine.playHaptic('tap');
                          setActiveTab(mod.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      >
                        <div className="mod-card-top">
                          <span className="mod-card-title">
                            <span>{mod.icon}</span>
                            <strong>{learningMode === 'zh' ? mod.titleZh : mod.titleEn}</strong>
                          </span>
                          <span className="mod-level-tag">{mod.level}</span>
                        </div>
                        <p>{mod.descZh}</p>
                        <div className="mod-card-foot">
                          <span>⏱ {mod.hours}</span>
                          <span className="mod-enter-cta">進入 <ArrowRight size={12} /></span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="learning-roadmap" className="explore-surface-card">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker">A1–C2 成長藍圖</span>
                <h2>七階實戰能力指標 (Can-Do Checklist)</h2>
              </div>
              <span className="roadmap-progress-pill">已完成 {completed.length} / {learningPath.length} 階段</span>
            </div>

            <div className="roadmap-grid-v2">
              {learningPath.map((stage) => {
                const done = completed.includes(stage.id);
                const isCurrent = currentStage && currentStage.id === stage.id;
                const canDoList = learningMode === 'zh' ? stage.canDoZh : stage.canDoEn;
                const stageCheckedCount = canDoList.filter((_, cIdx) => checkedCanDos[`${stage.id}_${cIdx}`]).length;
                const canDoProgress = Math.round((stageCheckedCount / canDoList.length) * 100);

                return (
                  <div key={stage.id} className={`roadmap-stage-card ${done ? 'is-done' : isCurrent ? 'is-current' : ''}`}>
                    <div className="roadmap-stage-head">
                      <div>
                        <div className="roadmap-stage-badges">
                          <span className="stage-cefr-badge">CEFR {stage.level}</span>
                          <span className="stage-ivpt-badge">{loc(stage, 'ivpt')}</span>
                          {isCurrent && <span className="stage-current-badge"><Flame size={13} /> 進行中</span>}
                        </div>
                        <h3>{loc(stage, 'title')}</h3>
                        <small>⏱ {loc(stage, 'duration')} · 📚 目標詞彙 {stage.vocabTarget} 字</small>
                      </div>
                      <button
                        type="button"
                        className={`stage-toggle-btn ${done ? 'is-done' : ''}`}
                        onClick={() => toggleStage(stage.id)}
                      >
                        {done ? <CheckCircle size={15} /> : <Circle size={15} />}
                        <span>{done ? '已通關' : '標記通關'}</span>
                      </button>
                    </div>

                    <div className="stage-goal-box">
                      <strong>🎯 核心目標：</strong>{loc(stage, 'goal')}
                    </div>

                    <div className="stage-cando-box">
                      <div className="stage-cando-head">
                        <span><CheckSquare size={15} /> 能力自檢</span>
                        <strong>{stageCheckedCount}/{canDoList.length} ({canDoProgress}%)</strong>
                      </div>
                      <div className="stage-cando-list">
                        {canDoList.map((item, i) => {
                          const isChecked = !!checkedCanDos[`${stage.id}_${i}`];
                          return (
                            <button
                              key={i}
                              type="button"
                              className={`stage-cando-item ${isChecked ? 'is-checked' : ''}`}
                              onClick={() => toggleCanDo(stage.id, i)}
                            >
                              {isChecked ? <CheckSquare size={15} /> : <Square size={15} />}
                              <span>{item}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="stage-modules-row">
                      {stage.modules.map((modId) => (
                        <button
                          key={modId}
                          type="button"
                          className="stage-mod-chip"
                          onClick={() => setActiveTab(modId)}
                        >
                          <span>{t(`tabs.${modId}`)}</span>
                          <ArrowRight size={13} />
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}

      {activeHomeView === 'culture' && (
        <div className="explore-panel explore-culture">
          <section className="cultural-landscapes-section">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker"><MapPin size={14} /> 越南人文地理</span>
                <h2>走進真實越南・地標發音與情境直達</h2>
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
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="landscape-img-overlay">
                      <span className="landscape-badge">{learningMode === 'zh' ? land.badgeZh : land.badgeEn}</span>
                      <span className="landscape-accent-tag">{land.accent}</span>
                    </div>
                  </div>

                  <div className="landscape-content">
                    <div className="landscape-title-row">
                      <span className="landscape-name-zh">{learningMode === 'zh' ? land.nameZh : land.nameEn}</span>
                      <button
                        type="button"
                        className="landscape-listen-btn"
                        onClick={(e) => handlePlayLandscape(e, land.audioText, land.accentType)}
                        title="聆聽地標發音"
                        aria-label={`聆聽 ${land.nameVi} 發音`}
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    <div className="landscape-name-vi">{land.nameVi}</div>
                    <p className="landscape-desc">{learningMode === 'zh' ? land.descZh : land.descEn}</p>
                    <div className="landscape-footer-cta">
                      <span>前往相關學習模組</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="cultural-tips-section">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker">跨文化社交眉角</span>
                <h2>越南在地生活避坑與禮儀指南</h2>
              </div>
            </div>

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
                  <strong className="etiquette-title">{learningMode === 'zh' ? tip.titleZh : tip.titleEn}</strong>
                  <div className="etiquette-phrase-row">
                    <span className="etiquette-vi">{tip.phraseVi}</span>
                    <button
                      type="button"
                      className="landscape-listen-btn"
                      onClick={(e) => handlePlayLandscape(e, tip.audioText)}
                      title="聆聽發音"
                      aria-label={`聆聽 ${tip.phraseVi} 發音`}
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p className="etiquette-desc">{learningMode === 'zh' ? tip.descZh : tip.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeHomeView === 'guide' && (
        <div className="explore-panel explore-guide">
          <div className="guide-metrics-grid">
            <section className="explore-surface-card compact-card">
              <div className="guide-metric-head">
                <span className="guide-metric-icon amber"><Target size={20} /></span>
                <div>
                  <h3>今日微學習目標</h3>
                  <p>每天 5–20 分鐘，穩定建立越語語感</p>
                </div>
              </div>
              <div className="goal-pills-row">
                {[
                  { min: 5, label: '🌱 輕鬆 5 分鐘' },
                  { min: 10, label: '⚡ 標準 10 分鐘' },
                  { min: 20, label: '🔥 衝刺 20 分鐘' }
                ].map(opt => (
                  <button
                    key={opt.min}
                    type="button"
                    className={`goal-pill-btn ${dailyGoalMinutes === opt.min ? 'active' : ''}`}
                    onClick={() => setDailyGoalMinutes(opt.min)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="explore-surface-card compact-card">
              <div className="guide-metric-head">
                <span className="guide-metric-icon blue"><Brain size={20} /></span>
                <div>
                  <h3>SM-2 記憶保鮮狀態</h3>
                  <p>排程中 {srsStats.totalTracked} 詞 · 長期記憶 {srsStats.masteredCount} 詞</p>
                </div>
              </div>
              <div className="srs-action-row">
                <span className={`srs-status-badge ${srsStats.dueCount > 0 ? 'has-due' : 'is-clear'}`}>
                  {srsStats.dueCount > 0 ? `${srsStats.dueCount} 張到期待複習` : '✓ 記憶狀態良好'}
                </span>
                <button type="button" className="explore-primary-pill" onClick={() => setActiveTab('flashcards')}>
                  <Layers3 size={15} />
                  <span>前往智能閃卡</span>
                </button>
              </div>
            </section>
          </div>

          <section className="explore-surface-card">
            <div className="explore-surface-head">
              <div>
                <span className="explore-kicker">科學二語習得 (SLA)</span>
                <h2>五步閉環學習節奏</h2>
              </div>
            </div>
            <div className="sla-steps-grid">
              {PEDAGOGICAL_STEPS.map((s) => (
                <button
                  key={s.step}
                  type="button"
                  className="sla-step-card"
                  onClick={() => {
                    setActiveTab(s.targetModule);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="sla-step-top">
                    <span className="sla-step-num" style={{ background: s.color }}>{s.step}</span>
                    <span className="sla-step-emoji">{s.icon}</span>
                  </div>
                  <strong>{learningMode === 'zh' ? s.titleZh : s.titleEn}</strong>
                  <p>{learningMode === 'zh' ? s.descZh : s.descEn}</p>
                </button>
              ))}
            </div>
          </section>

          {KnowledgeGuideComponent && (
            <KnowledgeGuideComponent
              moduleId="path"
              selectedAccent={selectedAccent}
              onSelectChapter={onSelectChapter}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default LearningPathModule;
