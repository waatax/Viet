/**
 * YouTube Playlist Video Directory (越文學習 - Học tiếng Việt)
 * All course videos are hosted on YouTube instead of GitHub Pages.
 */

export const YOUTUBE_PLAYLIST_ID = 'PLR5AMjsCboFM';
export const YOUTUBE_PLAYLIST_URL = `https://www.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`;

/**
 * Build a direct YouTube watch URL within the course playlist, optionally at a specific timestamp.
 */
export function youtubeVideoUrl(videoId, startSeconds = 0) {
  if (!videoId) return YOUTUBE_PLAYLIST_URL;
  const params = new URLSearchParams({ v: videoId, list: YOUTUBE_PLAYLIST_ID });
  const t = Math.floor(Number(startSeconds) || 0);
  if (t > 0) params.set('t', `${t}s`);
  return `https://www.youtube.com/watch?${params.toString()}`;
}

export function youtubeThumbUrl(videoId) {
  return videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';
}

/**
 * 6 Guided Pronunciation Videos (基礎 00 ~ 05) in playlist PLR5AMjsCboFM.
 */
export const PRONUNCIATION_YOUTUBE_VIDEOS = [
  { lesson: 0, id: 'pron_0', title: '用台灣注音讀越南語', videoId: 'gy_wNYIOq6o', duration: '10:29', summary: '用台灣熟悉的注音符號建立越語拼讀橋樑，零基礎 10 分鐘開口。' },
  { lesson: 1, id: 'pron_1', title: '先看母音，再開口', videoId: 'URg23a2jukY', duration: '10:05', summary: '拆解 12 個單母音的嘴形與舌位，分清 ơ / ư / ô / ê / â / ă。' },
  { lesson: 2, id: 'pron_2', title: '用同一音節聽懂六聲', videoId: 'HJWXjcaD1uc', duration: '10:06', summary: '以同音節 ma 六連發建立聲調高線記憶，攻克問聲與跌聲。' },
  { lesson: 3, id: 'pron_3', title: '從字首找到發音位置', videoId: 'LkcoWV4Zjxk', duration: '10:36', summary: '側視發音部位圖示，徹底搞懂 ng/ngh、nh、kh、ph、tr/ch、d/gi/r。' },
  { lesson: 4, id: 'pron_4', title: '韻尾、雙母音與滑音', videoId: 'Qg0HYlKOzoo', duration: '10:38', summary: '搭配台語入聲記憶 -p/-t/-c/-ch 塞音尾與雙母音自然滑動。' },
  { lesson: 5, id: 'pron_5', title: '看新字，自己拼出來', videoId: 'efn-Bsuxmng', duration: '10:11', summary: '四步拼讀實戰演練：看到任何陌生越文單字都能自行精準讀出。' }
];

/**
 * Dialogue Video ID -> YouTube Video ID mapping for videos published in playlist PLR5AMjsCboFM.
 * Currently 77/78 dialogue videos (+ 6 pronunciation videos = 83 total) are live on YouTube.
 */
export const DIALOGUE_YOUTUBE_IDS = {
  quest_units: 'ln0prxFEPJI',               // 01 闖關課程八單元小對話
  listening_talks: '4jlM70XQtN4',           // 02 隨身聽會話膠囊八組
  ft_day1_fasttrack: 'u6ST5MOjltg',         // 03 Day 1: 3秒禮貌社交破冰
  ft_day2_fasttrack: '5oUUFeP4rqk',         // 04 Day 2: 點餐與越南咖啡魔術密碼
  ft_day3_fasttrack: 'Jjce46hOVJM',         // 05 Day 3: 市場殺價與數字貨幣秒算
  ft_day4_fasttrack: 'oftQUbYlNhs',         // 06 Day 4: 計程車、Grab 與問路導航
  ft_day5_fasttrack: 'KUvo1F4eHRs',         // 07 Day 5: 稱謂神算與人際搞定術
  ft_day6_fasttrack: 'jM1YlL3a7I8',         // 08 Day 6: 便利超商與逛街結帳
  ft_day7_fasttrack: 'eKSBTDnSUYo',         // 09 Day 7: 社交閒聊與結交越南好友
  stage1_greeting: 'Qdkd9DGweco',           // 10 日常打招呼與自我介紹 (Chào hỏi & Giới thiệu)
  stage2_dining_transport: 'qiK2leZkA9o',   // 11 餐廳點餐與交通搭車 (Nhà hàng & Giao thông)
  // 12 stage3_clinic_housing (看病買藥與租屋合約) — pending upload to playlist
  stage4_biz_contract: 'kDaZeo1Men8',       // 13 商業會議與簽署合約 (Họp thương mại & Ký hợp đồng)
  stage5_fdi_economy: '-oIwJood4cE',        // 14 台越投資與經貿發展論壇 (Đầu tư & Kinh tế)
  vietnam_geography: 'TKbLbQIOjHA',         // 15 越南風土民情與三大區域
  family_restaurant: 'HmxgcrARUyU',         // 16 傳統越南餐廳點餐與特色飲料
  cafe: 'AMnSNduPHDI',                      // 17 咖啡廳點經典冰奶咖與甜度冰量
  pho: 'mTDlc1oMLIs',                       // 18 傳統河粉店點牛肉河粉、油條與熟度
  banhmi: 'Z0VhOTZ5Wo0',                    // 19 越式法國麵包攤客製化內餡與辣度
  seafood: 'zyWOpoX4waQ',                   // 20 海鮮大排檔炒螺肉、敬酒乾杯與結帳
  boba_che: 'titeqVEPerw',                  // 21 手搖奶茶與傳統越式甜湯 (Chè) 點餐
  airport: '8m8xx3vZCJI',                   // 22 國際機場辦理登機、過海關與託運行李
  hotel: 'F7NNLW6Bc54',                     // 23 飯店櫃台辦理入住 (Check-in)、退房與客房需求
  taxi: 'RXhqGSerHHE',                      // 24 Grab 叫車確認、指示司機左轉右轉與靠邊停
  market: 'x7Lef3Zjx4Q',                    // 25 傳統市場與觀光夜市挑選水果、問價與殺價
  convenience: 'FXxbqcCSEF4',               // 26 便利商店買零食泡麵、微波加熱與要塑膠袋
  pharmacy: '6hQEYpUhbLM',                  // 27 藥局買藥、描述感冒發燒、拉肚子與用藥頻率
  hospital: 'T1K8hsQUzEM',                  // 28 診所醫院掛號看診、量血壓與醫生問診
  spa: 'bTwM76vwHCo',                       // 29 越式洗頭 (Gội đầu dưỡng sinh)、肩頸按摩與力道調整
  haircut: 'gwXzknu06uo',                   // 30 男士理髮沙龍 (30Shine 剪髮、洗臉修鬍與造型全體驗)
  emergency: 'BbVBtxhAhq4',                 // 31 緊急求助、遺失護照錢包、報警報案與急難電話
  meeting: 'XQ-LgOP3rmY',                   // 32 初次見面自我介紹、詢問背景與加 Zalo 好友
  smalltalk: 'An2qOHl_ulg',                 // 33 天氣閒聊、週末休假安排與日常生活關心
  leisure_hobbies: 'Aq2nDfxtei8',           // 34 交流個人興趣、卡拉OK (Karaoke) 與看電影休閒
  sports_fitness: 'nH3HLpiT0VE',            // 35 公園踢毽子 (Đá cầu)、打羽球與健身房運動交流
  travel_tour: 'evMdp-5E-qI',               // 36 景點門票購買、租借機車 (Thuê xe máy) 與一日遊諮詢
  apartment_rental_contract: '6tPvXkSv5pM', // 37 公寓租賃簽約與物業維修
  airport_customs_visa: 'JyVuKQZzPe8',      // 38 機場海關入境與電子簽證查驗
  nhau_culture_dinner: 'jI00vw88Ohc',       // 39 越南熱炒 Nhậu 文化與敬酒禮儀
  pharmacy_clinic_visit: 'yiM6Po0QR-4',     // 40 藥局購藥與診所問診
  topic_business_greeting: 'BHmlSpE-v9A',   // 41 商業見面問候情境對話
  topic_dining_restaurant: 'MYp3n8fAJbQ',   // 42 餐廳話題情境對話
  topic_family_kinship: 'N6DINeW8weQ',      // 43 家庭話題情境對話
  topic_health_medical: 'dKFNyFTyW-Q',      // 44 健康話題情境對話
  topic_date_time_stay: 'vDyErvw6pgs',      // 45 日期時間與停留情境對話
  topic_pricing_bargaining: 'DD42n4nhfgc',  // 46 多少錢常見說法情境對話
  topic_numbers_scale: 'sX45PF3WqBA',       // 47 數字、量詞與大數情境對話
  bank_open_account: 'U1XUuNoONZg',         // 48 臨櫃開立個人帳戶 (Mở tài khoản ngân hàng)
  bank_wire_transfer: 'ZWdOC2lIr9U',        // 49 大額商業匯款與轉帳 (Chuyển khoản số tiền lớn)
  bank_deposit_interest: 'HfL_XpVBJAw',     // 50 定期存款與利息諮詢 (Gửi tiết kiệm & Lãi suất)
  business_negotiation: 'Qxe-56QdSgs',      // 51 辦公室會議與合約交涉
  factory_tour: 'UtojTsllOeM',              // 52 越南工廠視察與生產進度討論
  rent: 'tPLMFMaOpDk',                      // 53 租屋看房詢問租金、押金、水電費與簽約
  business_meeting: 'IIyCLkI2IH0',          // 54 職場商務拜訪、交換名片、洽談專案與預約下次會議
  workplace_collab: 'jy_EsgtX9fE',          // 55 辦公室工作交接、請病假報備與會議進度匯報
  biz_trade_show_secc: 'XjtK54SNGEE',       // 56 國際商展攤位接待、產品介紹與名片交換
  biz_rfq_pricing: 'r37wohljv0M',           // 57 詢價報價 (RFQ)、大宗採購折扣與 MOQ 議價
  biz_oem_odm_contract: 'kvQGas5FEJI',      // 58 OEM 代工與 ODM 客製化規格洽談
  biz_vat_invoice_tax: 'AZlYtMJBe5E',       // 59 開立電子加值稅紅發票 (Hóa đơn đỏ) 與公司統編報帳
  biz_factory_audit_qc: '-DCJ7Iwng0k',      // 60 工廠產線驗廠、品管抽檢與不良品處置
  biz_customs_logistics: 'HEO0sYFqxmA',     // 61 進出口海關報關、貨櫃裝箱與提單交期
  biz_nhau_banquet: 'iys1zZ9Xi4M',          // 62 商務宴請、酒桌應酬祝酒與座位禮儀
  biz_bank_finance: '3R-EAYgis7M',          // 63 越南銀行開戶、跨國匯款與企業信用狀
  biz_hiring_labor: 'QqxvZs5wklY',          // 64 工廠招募招工、勞動合約與加班排班
  biz_exclusive_agency: 'fpfMgM0BTD8',      // 65 獨家經銷代理權、年度業績目標與市場拓展
  biz_factory_lease: 'BcPGJu__sP0',         // 66 工業區土地租賃、標準廠房挑選與基礎設施談判
  biz_bank_loan: 'BFw6_NkNJZg',             // 67 企業銀行融資貸款、抵押授信與利率協商
  biz_epc_construction: '48oEe4WSuII',      // 68 營造建設總承包 (EPC) 與廠房鋼構施工進度
  biz_environmental_permit: '98TGqOI8a8k',  // 69 環評報告評估 (ĐTM)、廢水排放與環保合規審查
  biz_fire_safety_pccc: '_8dh8qgKJa8',      // 70 消防工程審批 (PCCC)、噴淋系統與消防驗收
  biz_work_permit_trc: 'uA4TR6aW8ys',       // 71 外籍幹部工作證 (Work Permit) 與三年暫住卡申辦
  biz_tax_audit_transfer_pricing: '-qiwS5r6y1s', // 72 國稅局稅務稽查、移轉訂價與反避稅抗辯
  factory_quality_qa: 'yCpkQCILYyA',        // 73 工廠品保抽驗與出貨裝櫃
  biz_trade_show: 'FZiqUe-ccz8',            // 74 商展參展四階段實戰句
  biz_dual_city: '2ZFhVoQ15mI',             // 75 河內與胡志明市商務開場句
  biz_travel_survival: 'BwRSu4EoTlY',       // 76 出差報帳、入境與叫車句
  biz_zalo: 'cVzaCPgKxMc',                  // 77 Zalo 商務聯絡訊息
  biz_negotiation_battles: 'Fz8ChgBvVOk'    // 78 商務談判決戰最佳應對
};

export const TOTAL_YOUTUBE_VIDEOS = PRONUNCIATION_YOUTUBE_VIDEOS.length + Object.keys(DIALOGUE_YOUTUBE_IDS).length;

export function getDialogueYoutubeId(id) {
  return DIALOGUE_YOUTUBE_IDS[id] || null;
}

export function getDialogueYoutubeUrl(id, startSeconds = 0) {
  const videoId = getDialogueYoutubeId(id);
  return videoId ? youtubeVideoUrl(videoId, startSeconds) : null;
}

// ── Watched Video Progress & Resume Persistence ──────────────────────────────
const WATCHED_KEY = 'viet_yt_watched_v1';
const LAST_VIDEO_KEY = 'viet_yt_last_video_v1';

export function readWatchedVideos() {
  try {
    const parsed = JSON.parse(localStorage.getItem(WATCHED_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveWatchedVideos(ids) {
  try {
    localStorage.setItem(WATCHED_KEY, JSON.stringify([...new Set(ids)]));
  } catch { /* storage unavailable */ }
}

export function markVideoWatched(id) {
  const current = readWatchedVideos();
  if (current.includes(id)) return current;
  const next = [...current, id];
  saveWatchedVideos(next);
  return next;
}

export function toggleWatchedVideo(id) {
  const current = readWatchedVideos();
  const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
  saveWatchedVideos(next);
  return next;
}

export function readLastWatchedVideo() {
  try {
    return JSON.parse(localStorage.getItem(LAST_VIDEO_KEY) || 'null');
  } catch {
    return null;
  }
}

export function saveLastWatchedVideo(entry) {
  try {
    localStorage.setItem(LAST_VIDEO_KEY, JSON.stringify({ ...entry, at: Date.now() }));
  } catch { /* storage unavailable */ }
}
