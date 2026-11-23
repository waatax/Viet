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
  { lesson: 0, title: '用台灣注音讀越南語', videoId: 'gy_wNYIOq6o', duration: '10:29' },
  { lesson: 1, title: '先看母音，再開口', videoId: 'URg23a2jukY', duration: '10:05' },
  { lesson: 2, title: '用同一音節聽懂六聲', videoId: 'HJWXjcaD1uc', duration: '10:06' },
  { lesson: 3, title: '從字首找到發音位置', videoId: 'LkcoWV4Zjxk', duration: '10:36' },
  { lesson: 4, title: '韻尾、雙母音與滑音', videoId: 'Qg0HYlKOzoo', duration: '10:38' },
  { lesson: 5, title: '看新字，自己拼出來', videoId: 'efn-Bsuxmng', duration: '10:11' }
];

/**
 * Dialogue Video ID -> YouTube Video ID mapping for videos published in playlist PLR5AMjsCboFM.
 * When new videos are uploaded to the playlist, simply add their IDs here.
 */
export const DIALOGUE_YOUTUBE_IDS = {
  quest_units: 'ln0prxFEPJI',             // 01 闖關課程八單元小對話
  listening_talks: '4jlM70XQtN4',         // 02 隨身聽會話膠囊八組
  ft_day1_fasttrack: 'u6ST5MOjltg',       // 03 Day 1－ 3秒禮貌社交破冰
  ft_day2_fasttrack: '5oUUFeP4rqk',       // 04 Day 2－ 點餐與越南咖啡魔術密碼
  ft_day3_fasttrack: 'Jjce46hOVJM',       // 05 Day 3－ 市場殺價與數字貨幣秒算
  ft_day4_fasttrack: 'oftQUbYlNhs',       // 06 Day 4－ 計程車、Grab 與問路導航
  ft_day5_fasttrack: 'KUvo1F4eHRs',       // 07 Day 5－ 稱謂神算與人際搞定術
  ft_day6_fasttrack: 'jM1YlL3a7I8',       // 08 Day 6－ 便利超商與逛街結帳
  ft_day7_fasttrack: 'eKSBTDnSUYo',       // 09 Day 7－ 社交閒聊與結交越南好友
  stage1_greeting: 'Qdkd9DGweco',         // 10 日常打招呼與自我介紹
  stage2_dining_transport: 'qiK2leZkA9o', // 11 餐廳點餐與交通搭車
  stage4_biz_contract: 'kDaZeo1Men8',     // 13 商業會議與簽署合約
  stage5_fdi_economy: '-oIwJood4cE',      // 14 台越投資與經貿發展論壇
  vietnam_geography: 'TKbLbQIOjHA',       // 15 越南風土民情與三大區域
  family_restaurant: 'HmxgcrARUyU',       // 16 傳統越南餐廳點餐與特色飲料
  cafe: 'AMnSNduPHDI',                    // 17 咖啡廳點經典冰奶咖與甜度冰量
  pho: 'mTDlc1oMLIs',                     // 18 傳統河粉店點牛肉河粉、油條與熟度
  banhmi: 'Z0VhOTZ5Wo0',                  // 19 越式法國麵包攤客製化內餡與辣度
  seafood: 'zyWOpoX4waQ',                 // 20 海鮮大排檔炒螺肉、敬酒乾杯與結帳
  boba_che: 'titeqVEPerw',                // 21 手搖奶茶與傳統越式甜湯 Chè 點餐
  airport: '8m8xx3vZCJI',                 // 22 國際機場辦理登機、過海關與託運行李
  hotel: 'F7NNLW6Bc54',                   // 23 飯店櫃台辦理入住 Check in、退房與客房需求
  taxi: 'RXhqGSerHHE',                    // 24 Grab 叫車確認、指示司機左轉右轉與靠邊停
  market: 'x7Lef3Zjx4Q',                  // 25 傳統市場與觀光夜市挑選水果、問價與殺價
  convenience: 'FXxbqcCSEF4',             // 26 便利商店買零食泡麵、微波加熱與要塑膠袋
  pharmacy: '6hQEYpUhbLM',                // 27 藥局買藥、描述感冒發燒、拉肚子與用藥頻率
  hospital: 'T1K8hsQUzEM',                // 28 診所醫院掛號看診、量血壓與醫生問診
  spa: 'bTwM76vwHCo',                     // 29 越南理髮院洗頭 Gội đầu dưỡng sinh
  haircut: 'gwXzknu06uo',                 // 30 理髮沙龍 剪髮、洗臉修鬍與造型
  emergency: 'BbVBtxhAhq4',               // 31 緊急求助、遺失護照錢包、報警報案與急難電話
  meeting: 'XQ-LgOP3rmY',                 // 32 初次見面自我介紹、詢問背景與加 Zalo 好友
  smalltalk: 'An2qOHl_ulg',               // 33 天氣閒聊、週末休假安排與日常生活關心
  leisure_hobbies: 'Aq2nDfxtei8',         // 34 交流個人興趣、卡拉OK Karaoke 與看電影休閒
  sports_fitness: 'nH3HLpiT0VE',          // 35 公園踢毽子 Đá cầu、打羽球與健身房運動交流
  travel_tour: 'evMdp-5E-qI',             // 36 景點門票購買、租借機車 Thuê xe máy 與一日遊諮詢
  apartment_rental_contract: '6tPvXkSv5pM', // 37 公寓租賃簽約與物業維修
  airport_customs_visa: 'JyVuKQZzPe8',    // 38 機場海關入境與電子簽證查驗
  nhau_culture_dinner: 'jI00vw88Ohc',     // 39 越南熱炒 Nhậu 文化與敬酒禮儀
  pharmacy_clinic_visit: 'yiM6Po0QR-4'    // 40 藥局購藥與診所問診
};

export function getDialogueYoutubeId(id) {
  return DIALOGUE_YOUTUBE_IDS[id] || null;
}

export function getDialogueYoutubeUrl(id, startSeconds = 0) {
  const videoId = getDialogueYoutubeId(id);
  return videoId ? youtubeVideoUrl(videoId, startSeconds) : null;
}
