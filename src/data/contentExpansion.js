/**
 * 2026-11 內容擴充（每個單元至少 +10%）
 *
 * 所有新增內容集中於此檔，再由各模組在原陣列尾端 push，保留既有項目的順序與 ID（不影響已儲存的進度）。
 * 每一項都附帶「為什麼」：用法說明、易錯原因或答錯解說。增幅由 scripts/test_content_growth.mjs 核對。
 */

// ── 學習總覽（LearningPathModule）──────────────────────────────
export const EXTRA_PROVERBS = [
  {
    id: 'proverb_three_trees',
    vi: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.',
    zh: '一棵樹成不了山林，三棵樹聚在一起便成高山。團結力量大。',
    en: 'One tree cannot make a forest; three trees together make a high mountain.',
    hanViet: 'NON · NÚI · CAO (高)',
    culturalContext: '越南人在團隊合作、職場動員時常引用，強調齊心協力勝過單打獨鬥。',
    audioText: 'Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao'
  }
];

export const EXTRA_ETIQUETTE_TIPS = [
  {
    id: 'two_hands',
    icon: '🤲',
    tagZh: '長幼禮節',
    tagEn: 'Respect Gestures',
    titleZh: '遞東西給長輩要用雙手',
    titleEn: 'Use Both Hands with Elders',
    phraseVi: 'Cháu mời bác ạ.',
    audioText: 'Cháu mời bác ạ',
    descZh: '把茶、名片或禮物遞給長輩、上司時，用雙手並微微點頭，再加上 mời（請）與句尾 ạ，表示尊敬。單手遞物或隨手丟過去，會被視為沒禮貌。',
    descEn: 'Hand tea, business cards or gifts to elders and superiors with both hands and a slight nod, adding "mời … ạ".',
    color: '#0891b2',
    bg: 'rgba(8, 145, 178, 0.12)'
  }
];

// ── 情境主題（SITUATIONAL_TOPICS.flashcardDeck）──────────────────
export const EXTRA_TOPIC_FLASHCARDS = {
  business_greeting: { id: 'biz_fc_x1', viet: 'Đối tác', zh: '合作夥伴 / 客戶', en: 'Business partner', hanViet: '對作', hintZh: '商務 Email 常寫 quý đối tác（貴合作夥伴）。', toneType: 'sac' },
  dining_restaurant: { id: 'dine_fc_x1', viet: 'Tính tiền', zh: '結帳 / 算錢', en: 'The bill, please', hanViet: '', hintZh: 'Em ơi, tính tiền! 是餐廳最常聽到的一句。', toneType: 'sac' },
  family_kinship: { id: 'fam_fc_x1', viet: 'Cháu', zh: '孫子 / 姪甥 / 晚輩自稱', en: 'Grandchild; niece or nephew', hanViet: '', hintZh: '對祖父母輩自稱 cháu：Cháu chào ông ạ.', toneType: 'sac' },
  health_medical: { id: 'med_fc_x1', viet: 'Dị ứng', zh: '過敏', en: 'Allergy', hanViet: '異應', hintZh: 'Tôi bị dị ứng với…（我對…過敏）就醫、點餐都用得到。', toneType: 'nang' },
  date_time_stay: { id: 'time_fc_x1', viet: 'Cuối tuần', zh: '週末', en: 'Weekend', hanViet: '', hintZh: 'cuối＝末，tuần＝週：Cuối tuần này bạn rảnh không?', toneType: 'sac' },
  pricing_bargaining: { id: 'price_fc_x1', viet: 'Bớt', zh: '減價 / 少算一點', en: 'Give a discount', hanViet: '', hintZh: 'Bớt chút đi! 是殺價萬用句；正式折扣叫 giảm giá。', toneType: 'sac' },
  numbers_scale: { id: 'num_fc_x1', viet: 'Triệu', zh: '百萬', en: 'Million', hanViet: '兆', hintZh: '1 triệu＝1.000.000 盾，約新台幣 1,300 元（依匯率浮動）。', toneType: 'nang' }
};

// ── 政經宏觀（macroVocabularyGlossary）──────────────────────────
export const EXTRA_MACRO_GLOSSARY = [
  { viet: 'Lạm phát', hanViet: '濫發', meaning: '通貨膨脹', sample: 'Ngân hàng Nhà nước theo dõi sát lạm phát để điều hành lãi suất.' },
  { viet: 'Giải ngân', hanViet: '解銀', meaning: '（資金）撥付、實際到位', sample: 'Vốn FDI giải ngân tăng cho thấy các dự án đang triển khai thật.' },
  { viet: 'Chuyển đổi số', hanViet: '轉對數', meaning: '數位轉型', sample: 'Nhiều doanh nghiệp đẩy mạnh chuyển đổi số để giảm chi phí vận hành.' }
];

// ── 7 天速成（FAST_TRACK_DAYS[n].phrases）──────────────────────
export const EXTRA_FAST_TRACK_PHRASES = [
  { viet: 'Tôi đến từ Đài Loan.', zh: '我來自台灣。', en: "I'm from Taiwan.", hintZh: '自我介紹必備；đến từ＝來自。對方常接著問 Bạn ở Việt Nam bao lâu rồi?（你在越南多久了？）', hintEn: 'Essential self-introduction; đến từ = to come from.', hanViet: 'Đài Loan (臺灣)' },
  { viet: 'Cho tôi xin thực đơn.', zh: '請給我菜單。', en: 'May I have the menu, please?', hintZh: 'xin 讓請求更禮貌；thực đơn（食單）＝菜單，南部也常直接說 menu。', hintEn: 'xin softens the request; thực đơn = menu.', hanViet: 'Thực đơn (食單)' },
  { viet: 'Đắt quá, bớt chút đi chị!', zh: '太貴了，算便宜一點嘛！', en: 'Too expensive, give me a little discount!', hintZh: '殺價黃金句：先嫌貴（đắt quá），再請求 bớt（減）。南部說 mắc quá。', hintEn: 'Classic bargaining line; in the South say mắc quá.', hanViet: '純越語 (Từ thuần Việt)' },
  { viet: 'Anh ơi, cho em xuống ở đây.', zh: '大哥，讓我在這裡下車。', en: 'Excuse me, please drop me off here.', hintZh: '搭 Grab 機車或計程車時用；xuống＝下（車），配合手勢指出地點。', hintEn: 'Use with Grab bikes or taxis; xuống = get off.', hanViet: '純越語 (Từ thuần Việt)' },
  { viet: 'Em nên gọi anh là gì ạ?', zh: '我該怎麼稱呼您呢？', en: 'How should I address you?', hintZh: '拿不準稱謂時直接問，越南人會欣賞你的禮貌；對方常答 Gọi anh là được（叫我哥就行）。', hintEn: 'Ask when unsure how to address someone; it shows respect.', hanViet: '純越語 · 稱謂確認' },
  { viet: 'Ở đây có thanh toán bằng thẻ không?', zh: '這裡可以刷卡嗎？', en: 'Can I pay by card here?', hintZh: 'thanh toán（清算）＝付款；bằng thẻ＝用卡。也可問 có chuyển khoản không?（可以轉帳嗎？）', hintEn: 'thanh toán = to pay; bằng thẻ = by card.', hanViet: 'Thanh toán (清算)' },
  { viet: 'Cuối tuần này bạn có rảnh không?', zh: '這個週末你有空嗎？', en: 'Are you free this weekend?', hintZh: '邀約前先問有沒有空；rảnh＝有空。對方說 Có, rảnh! 就能接著約 đi cà phê（喝咖啡）。', hintEn: 'Ask before inviting; rảnh = free.', hanViet: '純越語 (Từ thuần Việt)' }
];

// ── 商務出差（businessData）────────────────────────────────────
export const EXTRA_BUSINESS_TEST = [
  {
    id: 'btest_7',
    categoryZh: '商務 Email 與會議禮儀',
    questionVi: 'Trong email gửi đối tác, câu nào phù hợp nhất để xin dời lịch họp một cách lịch sự?',
    questionZh: '在寄給合作夥伴的 Email 中，哪一句最能得體地請求延後會議？',
    questionEn: 'In an email to a partner, which sentence most politely asks to reschedule a meeting?',
    options: [
      'Mai không họp nữa nhé. (明天不開了喔)',
      'Chúng tôi xin phép được dời cuộc họp sang thứ Năm, mong quý công ty thông cảm. (我們請求將會議改到星期四，敬請貴公司見諒)',
      'Anh tự sắp xếp lại lịch đi. (你自己重排時間吧)',
      'Họp hay không cũng được. (開不開都可以)'
    ],
    answerIndex: 1,
    explainZh: '正確！「xin phép được + 動詞」是正式請求許可的句型；「quý công ty」(貴公司) 與「mong … thông cảm」(敬請見諒) 是商務書信常用的禮貌套語。其他選項語氣過於隨便，容易讓對方覺得不被尊重。'
  }
];

export const EXTRA_CURRENCY_BLITZ = [
  {
    id: 'q_rate_6',
    type: 'fast_conversion',
    questionVi: 'Báo giá 2,5 tỷ đồng tương đương bao nhiêu triệu đồng?',
    questionZh: '報價 2,5 tỷ đồng（越南以逗號表示小數點）等於多少 triệu（百萬）盾？',
    questionEn: 'A quote of 2.5 billion VND equals how many million VND?',
    options: ['25 triệu', '250 triệu', '2.500 triệu', '25.000 triệu'],
    answerIndex: 2,
    explainZh: '1 tỷ＝1.000 triệu，所以 2,5 tỷ＝2.500 triệu（約新台幣 320 萬元）。越南數字用「.」分隔千位、「,」表示小數，與台灣相反，看合約金額時最容易看錯。'
  }
];

// ── 生活急救（EMERGENCY_CARDS）─────────────────────────────────
export const EXTRA_EMERGENCY_CARDS = [
  { category: 'health', viet: 'Tôi bị dị ứng với hải sản.', zh: '我對海鮮過敏。', en: "I'm allergic to seafood.", phonetic: 'Dị ứng (過敏) · Hải sản (海鮮)', situationZh: '點餐或就醫時先告知過敏原，避免誤食；也可把這張卡出示給店家。', situationEn: 'Tell restaurants or doctors about your allergy.' },
  { category: 'transport', viet: 'Tôi bị lạc đường, làm ơn chỉ giúp tôi đường về khách sạn này.', zh: '我迷路了，請幫我指引回這家飯店的路。', en: "I'm lost, please show me the way back to this hotel.", phonetic: 'Lạc đường (迷路)', situationZh: '同時出示飯店名片或地圖上的地址，對方更容易幫你。', situationEn: 'Show the hotel card or address while asking.' },
  { category: 'emergency', viet: 'Tôi bị mất hộ chiếu, đồn công an gần nhất ở đâu?', zh: '我的護照遺失了，最近的派出所在哪裡？', en: 'I lost my passport. Where is the nearest police station?', phonetic: 'Hộ chiếu (護照) · Đồn công an (派出所)', situationZh: '護照遺失先到派出所報案取得證明，再聯絡駐越南台北經濟文化辦事處申請補發。', situationEn: 'Report to the police first, then contact the Taipei Economic and Cultural Office.' }
];

// ── 字母發音（TAIWAN_MINIMAL_PAIRS）────────────────────────────
export const EXTRA_MINIMAL_PAIRS = [
  {
    id: 'mp_6',
    titleZh: 'tr vs ch（北部幾乎同音、南部有捲舌）',
    taiwanZh: '注音 ㄓ（捲舌）與 ㄐ（不捲舌）的對照',
    pairVi: 'trà (茶) vs chà (哇／搓)',
    ruleZh: '河內口音中 tr 與 ch 幾乎同音；胡志明市口音的 tr 會捲舌（接近 ㄓ），ch 則舌面貼上顎（接近 ㄐ）。拼字一定要分清楚：聽南部人說話時，有捲舌的就是 tr。',
    audio1: 'trà',
    audio2: 'chà'
  }
];

// ── 聲調遊戲（ToneGameModule TRICKY_PAIRS / REAL_WORDS）──────────
export const EXTRA_TRICKY_TONES = [
  { word: 'nghỉ', tone: 'hoi', base: 'nghi', hint: 'nghỉ (休息 · 問聲降後揚)', level: 'tricky' },
  { word: 'nghĩ', tone: 'nga', base: 'nghi', hint: 'nghĩ (想 · 跌聲喉塞上揚)', level: 'tricky' }
];
export const EXTRA_REAL_TONE_WORDS = [
  { word: 'chợ', tone: 'nang', base: 'cho', hint: 'chợ (市場 · 重聲短促下沉)', level: 'real' },
  { word: 'gà', tone: 'huyen', base: 'ga', hint: 'gà (雞 · 玄聲低降)', level: 'real' }
];

// ── 人稱稱謂（MASTER_PRONOUN_MATRIX）───────────────────────────
export const EXTRA_PRONOUN_ROLES = [
  {
    targetRoleZh: '初次見面、看不出年齡的陌生人',
    targetRoleEn: 'A stranger whose age you cannot judge',
    youCallThem: 'Anh / Chị（拿不準時寧可往上叫）',
    theyCallYou: 'Anh / Chị',
    selfCall: 'Tôi（中性、安全）',
    contextZh: '問路、電話客服、展覽攤位等第一次接觸：先用 anh／chị 抬高對方、自稱 tôi 最保險，熟了再依年齡調整成 em 等稱謂。',
    exampleVi: 'Xin lỗi anh, cho tôi hỏi ga tàu ở đâu ạ?',
    exampleZh: '不好意思，請問火車站在哪裡？（年齡不明，先用 anh 尊稱）'
  }
];

// ── 實用短句（practicalPhrases，同時擴充跟讀與造句素材）──────────
const P = (category, viet, zh, en, usageZh, usageEn) => ({ category, viet, zh, en, usageZh, usageEn });
const G = '問候與禮貌 / Greetings';
const C = '咖啡與飲品 / Cafe & Drinks';
const D = '餐飲與點餐 / Dining';
const S = '購物與殺價 / Shopping';
const T = '交通與出行 / Grab & Transport';
const H = '飯店與住宿 / Hotel';
const A = '機場與出入境 / Airport & Visa';
const M = '放鬆與水療 / Hair Spa & Massage';
const B = '商務與職場 / Business';
const E = '醫療與急難 / Pharmacy & Emergency';
const L = '居家與租屋 / Apartment & Living';
const R = '旅遊與休閒 / Tourism & Travel';
const N = '熱炒與乾杯 / Nightlife & Cheers';
const I = '情感與俗諺 / Idioms & Slang';
const K = '社交閒聊與生活 / Small Talk';

export const EXTRA_PHRASES = [
  P(G, 'Dạo này anh thế nào?', '你最近怎麼樣？', 'How have you been lately?', '熟人久未見面的開場，比 khỏe không 更自然。', 'Catching up with someone you know.'),
  P(G, 'Lâu lắm rồi mới gặp lại chị!', '好久不見了！', 'Long time no see!', '重逢時說；lâu lắm rồi＝很久了。', 'When meeting again after a long time.'),
  P(G, 'Cho em gửi lời hỏi thăm gia đình anh nhé.', '請代我向你的家人問好。', 'Please send my regards to your family.', '道別時表達關心，越南人很重視家人。', 'A warm farewell that shows care.'),
  P(G, 'Xin lỗi, em không cố ý.', '對不起，我不是故意的。', "Sorry, I didn't mean it.", '不小心碰撞或冒犯時的道歉。', 'Apologising for an accident.'),
  P(G, 'Không có gì, đừng khách sáo!', '不客氣，別客套！', "You're welcome, don't mention it!", '回應道謝；khách sáo＝客套。', 'Replying to thanks.'),
  P(G, 'Chúc anh thượng lộ bình an!', '祝你一路平安！', 'Have a safe trip!', '送行祝福；thượng lộ bình an＝上路平安。', 'Wishing someone a safe journey.'),
  P(C, 'Cho em một ly bạc xỉu, ít ngọt nhé.', '請給我一杯白咖啡，少甜喔。', 'One bạc xỉu, less sweet please.', 'bạc xỉu 是奶多咖啡少的西貢白咖啡。', 'Saigon milky coffee, less sugar.'),
  P(C, 'Ở đây có cà phê muối không?', '這裡有鹽咖啡嗎？', 'Do you have salted coffee here?', '源自順化的鹽咖啡近年流行全越。', 'Asking for the trendy salted coffee.'),
  P(C, 'Em ơi, cho chị xin thêm đá.', '請再給我一些冰塊。', 'Could I get more ice, please?', 'xin thêm＝再要一些；對年輕店員稱 em。', 'Asking staff for more ice.'),
  P(C, 'Trà đá ở đây có miễn phí không?', '這裡的冰茶是免費的嗎？', 'Is the iced tea free here?', '很多小吃店的冰茶免費或很便宜，問清楚比較安心。', 'Iced tea is often free at eateries.'),
  P(C, 'Mật khẩu Wi-Fi là gì vậy em?', 'Wi-Fi 密碼是什麼？', "What's the Wi-Fi password?", 'mật khẩu＝密碼。', 'Asking for the Wi-Fi password.'),
  P(D, 'Món nào là món đặc biệt của quán?', '哪道是店裡的招牌菜？', "What's the house specialty?", '不知道點什麼時問招牌最保險。', 'When unsure what to order.'),
  P(D, 'Cho tôi một phần cơm tấm sườn bì chả.', '請給我一份排骨豬皮絲蒸蛋碎米飯。', 'One broken rice with pork chop, pork skin and egg meatloaf.', 'cơm tấm 是西貢經典碎米飯：sườn 排骨、bì 豬皮絲、chả 蒸蛋肉餅。', 'Ordering a classic Saigon dish.'),
  P(D, 'Đừng cho rau mùi nhé, tôi không ăn được.', '請不要放香菜，我不敢吃。', "No cilantro please, I can't eat it.", 'rau mùi＝香菜（南部說 ngò）。', 'Avoiding cilantro.'),
  P(D, 'Món này ăn kèm với gì?', '這道菜要配什麼吃？', 'What does this dish come with?', 'ăn kèm＝搭配著吃；越南菜常配生菜與沾醬。', 'Asking about side dishes.'),
  P(D, 'Phần này hai người ăn có đủ không?', '這份兩個人吃夠嗎？', 'Is this portion enough for two?', '確認份量，避免點太多或太少。', 'Checking portion size.'),
  P(D, 'Cho mình gói phần còn lại mang về nhé.', '剩下的幫我打包帶走喔。', 'Please pack the leftovers to go.', 'gói＝包；mang về＝帶回去。', 'Taking leftovers home.'),
  P(S, 'Cái này có màu khác không chị?', '這個有其他顏色嗎？', 'Does this come in other colors?', '挑衣服、包包時常用。', 'Asking for another colour.'),
  P(S, 'Em mặc thử được không?', '我可以試穿嗎？', 'Can I try it on?', 'mặc thử＝穿穿看；thử＝試。', 'Trying clothes on.'),
  P(S, 'Giá này là giá cuối chưa chị?', '這是最後的價格了嗎？', 'Is this your final price?', '殺價收尾用；老闆說 giá cuối rồi 就表示不能再降。', 'Closing a bargain.'),
  P(S, 'Em mua nhiều, chị bớt thêm chút nữa nhé.', '我買很多，再便宜一點吧。', "I'm buying a lot, give me a bit more off.", '以量換價是市場最有效的談判方式。', 'Bulk-buying discount.'),
  P(S, 'Có hóa đơn không ạ?', '有發票（收據）嗎？', 'Do you have a receipt?', 'hóa đơn＝發票、收據；公司報帳時必問。', 'Asking for a receipt.'),
  P(S, 'Hàng này có bảo hành không?', '這個商品有保固嗎？', 'Does this come with a warranty?', 'bảo hành＝保固；買電子產品必問。', 'Checking the warranty.'),
  P(T, 'Anh chạy chậm thôi, em hơi sợ.', '你騎慢一點，我有點怕。', "Please go slower, I'm a bit scared.", '搭機車 Grab 時常用；chạy chậm＝開慢。', 'Asking a driver to slow down.'),
  P(T, 'Từ đây đến sân bay mất bao lâu?', '從這裡到機場要多久？', 'How long does it take to get to the airport from here?', 'mất bao lâu＝要花多久。', 'Asking travel time.'),
  P(T, 'Đi đường này có bị kẹt xe không?', '走這條路會塞車嗎？', 'Will there be traffic on this route?', 'kẹt xe＝塞車（北部說 tắc đường）。', 'Asking about traffic.'),
  P(T, 'Anh dừng ở trước cổng khách sạn giúp em.', '請在飯店門口前停。', 'Please stop in front of the hotel gate.', 'trước cổng＝大門前。', 'Telling the driver where to stop.'),
  P(T, 'Xe buýt số mấy đi Bến Thành?', '幾號公車到濱城？', 'Which bus number goes to Ben Thanh?', 'số mấy＝幾號。', 'Asking for a bus number.'),
  P(T, 'Anh ơi, biển số xe của anh là bao nhiêu?', '司機大哥，你的車牌號碼是多少？', 'What is your licence plate number?', 'biển số＝車牌；上車前先核對最安全。', 'Confirming a ride-hailing car.'),
  P(H, 'Tôi muốn trả phòng muộn một chút được không?', '我可以晚一點退房嗎？', 'Can I check out a little late?', 'trả phòng＝退房；muộn＝晚。', 'Requesting late checkout.'),
  P(H, 'Phòng tôi bị hỏng máy lạnh.', '我房間的冷氣壞了。', 'The air conditioner in my room is broken.', 'bị hỏng＝壞掉；máy lạnh＝冷氣（北部也說 điều hòa）。', 'Reporting a broken AC.'),
  P(H, 'Cho tôi gửi hành lý ở lễ tân nhé.', '我想把行李寄放在櫃檯。', "I'd like to leave my luggage at the front desk.", 'lễ tân＝櫃檯；退房後還想逛街時用。', 'Storing luggage after checkout.'),
  P(H, 'Bữa sáng phục vụ từ mấy giờ?', '早餐幾點開始供應？', 'What time is breakfast served?', 'phục vụ＝供應、服務。', 'Asking breakfast hours.'),
  P(H, 'Làm ơn dọn phòng giúp tôi.', '請幫我打掃房間。', 'Please clean my room.', 'dọn phòng＝打掃房間。', 'Requesting housekeeping.'),
  P(A, 'Tôi muốn ngồi ghế cạnh cửa sổ.', '我想坐靠窗的位子。', "I'd like a window seat.", 'cạnh cửa sổ＝靠窗；靠走道是 cạnh lối đi。', 'Choosing a seat.'),
  P(A, 'Hành lý của tôi bị thất lạc.', '我的行李遺失了。', 'My luggage is lost.', 'thất lạc＝遺失；到行李服務處出示行李條。', 'Reporting lost luggage.'),
  P(A, 'Tôi đến Việt Nam để du lịch, ở lại mười ngày.', '我來越南旅遊，停留十天。', "I'm visiting Vietnam for tourism, staying ten days.", '入境查驗常被問目的與天數。', 'Answering an immigration officer.'),
  P(A, 'Quầy làm thủ tục của hãng này ở đâu?', '這家航空公司的報到櫃檯在哪裡？', "Where is this airline's check-in counter?", 'quầy làm thủ tục＝報到櫃檯；thủ tục＝手續。', 'Finding check-in.'),
  P(A, 'Chuyến bay có bị hoãn không?', '班機有延誤嗎？', 'Is the flight delayed?', 'bị hoãn＝延誤；bị hủy＝取消。', 'Checking flight status.'),
  P(M, 'Chị làm nhẹ tay thôi nhé.', '請輕一點喔。', 'Please be gentle.', 'nhẹ tay＝手輕一點；按摩太痛時說。', 'During a massage.'),
  P(M, 'Chỗ này hơi đau, chị làm mạnh hơn được không?', '這裡有點痠，可以再用力一點嗎？', 'This spot is sore, could you press harder?', 'mạnh hơn＝更用力。', 'Adjusting massage pressure.'),
  P(M, 'Gội đầu dưỡng sinh bao nhiêu tiền một lần?', '養生洗頭一次多少錢？', 'How much is a herbal head spa per session?', 'gội đầu dưỡng sinh 是越南特色的洗頭按摩。', 'Asking spa prices.'),
  P(M, 'Em muốn cắt ngắn một chút, giữ phần mái.', '我想剪短一點，保留瀏海。', 'I want it a bit shorter, keep the bangs.', 'cắt ngắn＝剪短；mái＝瀏海。', 'At the hairdresser.'),
  P(M, 'Tiền boa có tính vào hóa đơn chưa?', '小費有算進帳單了嗎？', 'Is the tip included in the bill?', 'tiền boa＝小費（源自法語 pourboire）。', 'Checking the tip.'),
  P(B, 'Em gửi anh bản báo giá qua email trong hôm nay.', '我今天內把報價單用 email 寄給您。', "I'll email you the quotation today.", 'báo giá＝報價；trong hôm nay＝今天之內。', 'Promising a quotation.'),
  P(B, 'Mình chốt lại các điểm chính nhé.', '我們把重點確認一下吧。', "Let's confirm the key points.", 'chốt＝敲定；會議結尾常用。', 'Wrapping up a meeting.'),
  P(B, 'Hạn chót nộp báo cáo là thứ mấy?', '報告的截止日是星期幾？', 'What day is the report deadline?', 'hạn chót＝截止期限。', 'Asking a deadline.'),
  P(B, 'Xin lỗi, em có thể nói lại con số đó không?', '抱歉，可以再說一次那個數字嗎？', 'Sorry, could you repeat that number?', '會議中確認數字，避免誤會。', 'Confirming figures.'),
  P(B, 'Tôi sẽ xác nhận lại với cấp trên rồi trả lời anh.', '我跟主管確認後再回覆您。', "I'll confirm with my manager and get back to you.", 'cấp trên＝上級；談判時爭取時間的得體說法。', 'Buying time in a negotiation.'),
  P(B, 'Cảm ơn anh đã dành thời gian cho cuộc họp hôm nay.', '謝謝您今天撥空開會。', "Thank you for your time in today's meeting.", '會議結束的禮貌結語。', 'Closing a meeting politely.'),
  P(E, 'Tôi bị sốt từ tối hôm qua.', '我從昨晚開始發燒。', "I've had a fever since last night.", 'sốt＝發燒；說明症狀開始時間對醫師很重要。', 'Describing symptoms.'),
  P(E, 'Thuốc này uống trước hay sau khi ăn?', '這藥是飯前還是飯後吃？', 'Should I take this before or after meals?', 'trước／sau khi ăn＝飯前／飯後。', 'Checking how to take medicine.'),
  P(E, 'Tôi bị tiêu chảy, có thuốc nào không?', '我拉肚子，有藥嗎？', 'I have diarrhoea, do you have any medicine?', 'tiêu chảy＝腹瀉。', 'At the pharmacy.'),
  P(E, 'Một ngày uống mấy lần, mỗi lần mấy viên?', '一天吃幾次，每次幾顆？', 'How many times a day, and how many pills each time?', '在藥局確認劑量。', 'Confirming dosage.'),
  P(E, 'Tôi có bảo hiểm du lịch.', '我有旅遊保險。', 'I have travel insurance.', 'bảo hiểm＝保險；就醫時出示保單。', 'At the clinic.'),
  P(E, 'Làm ơn gọi giúp tôi một chiếc taxi đến bệnh viện.', '請幫我叫一台計程車去醫院。', 'Please call me a taxi to the hospital.', '身體不適需要協助時說。', 'Asking for help to reach a hospital.'),
  P(L, 'Tiền điện nước tính riêng hay đã bao gồm?', '水電費另計還是已經包含？', 'Are utilities separate or included?', '租屋必問；tiền điện nước＝水電費。', 'Renting an apartment.'),
  P(L, 'Hợp đồng thuê tối thiểu mấy tháng?', '租約最少要幾個月？', 'What is the minimum lease term?', 'tối thiểu＝最少。', 'Lease terms.'),
  P(L, 'Bồn rửa bị tắc, anh qua sửa giúp em được không?', '水槽堵住了，你可以過來幫我修嗎？', 'The sink is clogged, can you come and fix it?', 'bị tắc＝堵塞。', 'Asking the landlord for repairs.'),
  P(L, 'Tiền cọc là bao nhiêu tháng?', '押金是幾個月？', 'How many months is the deposit?', 'tiền cọc＝押金。', 'Deposit terms.'),
  P(L, 'Tối thứ mấy có xe rác đến?', '垃圾車星期幾晚上來？', 'Which evening does the garbage truck come?', 'xe rác＝垃圾車。', 'Living in a neighbourhood.'),
  P(R, 'Vé vào cửa bao nhiêu một người?', '門票一個人多少錢？', 'How much is the entrance ticket per person?', 'vé vào cửa＝門票。', 'At a sight.'),
  P(R, 'Mấy giờ thì bảo tàng đóng cửa?', '博物館幾點關門？', 'What time does the museum close?', 'đóng cửa＝關門。', 'Checking opening hours.'),
  P(R, 'Có tour đi vịnh Hạ Long trong ngày không?', '有下龍灣一日遊嗎？', 'Is there a day tour to Ha Long Bay?', 'trong ngày＝當天來回。', 'Booking a day trip.'),
  P(R, 'Bạn chụp giúp mình một tấm ảnh được không?', '你可以幫我拍張照嗎？', 'Could you take a photo for me?', 'chụp ảnh＝拍照；một tấm＝一張。', 'Asking for a photo.'),
  P(R, 'Ở đây có chỗ nào ngắm hoàng hôn đẹp không?', '這附近有看夕陽的好地方嗎？', 'Is there a nice place to watch the sunset around here?', 'hoàng hôn＝黃昏、夕陽。', 'Asking locals for tips.'),
  P(R, 'Mùa này đi Đà Lạt có lạnh không?', '這個季節去大叻會冷嗎？', 'Is it cold in Da Lat this season?', '大叻海拔高，早晚溫差大。', 'Planning what to pack.'),
  P(N, 'Tôi xin phép uống nửa ly thôi nhé.', '我喝半杯就好喔。', 'Let me just drink half a glass.', '不勝酒力時得體的推辭。', 'Politely limiting your drinking.'),
  P(N, 'Hôm nay tôi lái xe, xin phép không uống rượu.', '今天我開車，請容我不喝酒。', "I'm driving today, so please excuse me from drinking.", '越南嚴格取締酒駕，這是最有說服力的理由。', 'Declining alcohol.'),
  P(N, 'Cho thêm một thùng bia nữa nhé!', '再來一箱啤酒！', 'One more case of beer!', 'thùng＝箱。', 'Ordering more beer.'),
  P(N, 'Món nhậu nào ở đây ngon nhất?', '這裡哪道下酒菜最好吃？', "What's the best drinking snack here?", 'món nhậu＝下酒菜。', 'At a nhậu restaurant.'),
  P(N, 'Uống tùy ý nhé, không ép đâu.', '隨意喝喔，不勉強。', 'Drink as you like, no pressure.', 'tùy ý＝隨意；體貼不想多喝的同伴。', 'Being a considerate host.'),
  P(I, 'Một con ngựa đau, cả tàu bỏ cỏ.', '一匹馬病了，整個馬廄都不吃草。', 'When one horse is sick, the whole stable stops eating.', '形容同舟共濟、彼此關心；同事生病時常說。', 'On solidarity.'),
  P(I, 'Học thầy không tày học bạn.', '跟老師學不如跟朋友學。', 'Learning from friends beats learning from teachers.', '鼓勵同儕互學：多找越南朋友練習口說。', 'Encouraging peer learning.'),
  P(I, 'Từ từ rồi cháo cũng nhừ.', '慢慢來，粥總會煮爛的。', 'Take your time; the porridge will soften eventually.', '安慰別人別急，慢慢來總會成功。', 'Telling someone to be patient.'),
  P(I, 'Nói thì dễ, làm mới khó.', '說起來容易，做起來難。', 'Easier said than done.', '日常常用的感嘆。', 'A common remark.'),
  P(I, 'Chậm mà chắc.', '慢而穩。', 'Slow but sure.', '學習與工作都適用的態度。', 'A steady attitude.'),
  P(K, 'Bạn thích làm gì vào thời gian rảnh?', '你有空時喜歡做什麼？', 'What do you like to do in your free time?', '開啟興趣話題的好問題。', 'Starting a conversation.'),
  P(K, 'Quê bạn ở đâu?', '你的老家在哪裡？', 'Where is your hometown?', 'quê＝故鄉；越南人很樂意聊家鄉。', 'Getting to know someone.'),
  P(K, 'Bạn ở Sài Gòn lâu chưa?', '你住西貢很久了嗎？', 'Have you lived in Saigon long?', '… chưa? 問「了沒」。', 'Small talk with residents.'),
  P(K, 'Thời tiết hôm nay dễ chịu quá!', '今天天氣好舒服！', 'The weather is so pleasant today!', 'dễ chịu＝舒服；閒聊天氣最安全。', 'Safe small talk.'),
  P(K, 'Cuối tuần vừa rồi bạn đi đâu chơi?', '上個週末你去哪裡玩？', 'Where did you go last weekend?', 'vừa rồi＝剛過去的；聊近況的好話題。', 'Chatting about the weekend.'),
  P(G, 'Hẹn gặp lại anh vào tuần sau nhé.', '下週再見喔。', 'See you next week.', 'hẹn gặp lại＝約定再見；加上時間更具體。', 'Saying goodbye with a plan.'),
  P(R, 'Đường đi bộ lên núi có khó không?', '走路上山的路難走嗎？', 'Is the hiking trail up the mountain difficult?', 'đi bộ＝走路；健行前先問路況。', 'Checking a hiking trail.'),
  P(D, 'Cho tôi xin thêm một bát cơm.', '請再給我一碗飯。', 'Could I have another bowl of rice?', 'bát＝碗（南部說 chén）；xin thêm＝再要一些。', 'Asking for more rice.'),
  P(H, 'Phòng này có cửa sổ không?', '這間房有窗戶嗎？', 'Does this room have a window?', '越南不少平價旅館的房間沒有窗戶，訂房前先問。', 'Checking a hotel room.')
];

// ── 情境會話研經（SCENARIO_EXEGESIS）───────────────────────────
export const EXTRA_SCENARIO_EXEGESIS = {
  market: {
    scenarioId: 'market',
    titleZh: '🛒 傳統市場買菜、議價與數量單位深度研經',
    titleEn: 'Wet Market Shopping, Bargaining & Units Exegesis',
    coreFormulas: [
      {
        formulaVi: '[Món hàng] + bao nhiêu (tiền) + một + [ký / bó / con]?',
        formulaZh: '[商品] + 多少錢 + 一 + [公斤／把／隻]？',
        explainZh: '越南市場以「公斤 (ký)」計價，蔬菜論「把 (bó)」、雞魚論「隻／條 (con)」。先問單位價再決定數量，能避免結帳時的誤會。',
        exampleVi: 'Cà chua bao nhiêu một ký vậy chị?',
        exampleZh: '番茄一公斤多少錢？'
      },
      {
        formulaVi: 'Bớt cho em + [số tiền / một chút] + được không?',
        formulaZh: '算我便宜 + [金額／一點] + 可以嗎？',
        explainZh: '「bớt」是口語的減價，比正式的「giảm giá」親切；搭配稱謂 em／chị 和句尾 được không 顯得有禮，不會被當成故意壓價。',
        exampleVi: 'Bớt cho em mười nghìn được không chị?',
        exampleZh: '算我少一萬盾可以嗎？'
      },
      {
        formulaVi: 'Lấy cho em + [số lượng] + [đơn vị]',
        formulaZh: '幫我拿 + [數量] + [單位]',
        explainZh: '談好價格後用「lấy」（拿）下單；小份量可說「nửa ký」（半公斤），北部長輩也會用「lạng」（100 公克）。',
        exampleVi: 'Lấy cho em nửa ký tôm nhé.',
        exampleZh: '幫我拿半公斤蝦子喔。'
      }
    ],
    hanVietRoots: [
      { root: 'Thị trường (市場)', origin: '書面語的「市場」，多指經濟市場；日常買菜的傳統市場說 chợ。' },
      { root: 'Giá (價)', origin: '價格；giá cả 物價、giá cố định 定價（不二價）。' },
      { root: 'Tươi（純越語）', origin: '「新鮮」，挑海鮮蔬果最常用：Cá này có tươi không?' }
    ],
    northSouthContrast: {
      featureZh: '數量與價格說法',
      northVi: 'Một cân / một lạng · Đắt quá! · Mặc cả',
      southVi: 'Một ký / một trăm gam · Mắc quá! · Trả giá',
      noteZh: '北部長輩仍會用 cân（公斤）、lạng（100 公克），南部多說 ký。嫌貴時北部說 đắt、南部說 mắc；「殺價」北部叫 mặc cả，南部叫 trả giá。'
    },
    culturalNotes: [
      '🕖 清晨最新鮮：傳統市場凌晨就開始批貨，七點前的海鮮蔬菜最新鮮，接近中午則可能有收攤價。',
      '🤝 開市第一筆（mở hàng）：不少攤販相信第一筆生意會影響整天的運氣，清晨殺價過頭或問完不買，可能讓老闆不太高興。',
      '💵 備好小鈔：小攤常找不開 50 萬盾大鈔，準備 1 萬到 10 萬面額的鈔票，結帳更順利。'
    ],
    colloquialExtensions: [
      { vi: 'Cho thêm ít hành nhé', zh: '送我一點蔥吧', note: '買菜時常向老闆討點蔥或香草，熟客通常會給' },
      { vi: 'Mai em lại mua nữa', zh: '明天我再來買', note: '建立熟客關係，下次比較好講價' },
      { vi: 'Cân lại giúp em', zh: '幫我再秤一次', note: '覺得份量不對時，禮貌地請老闆重秤' }
    ]
  }
};

// ── 單字閃卡：易混字對比（CONFUSABLE_PAIRS）─────────────────────
export const EXTRA_CONFUSABLE_PAIRS = [
  {
    id: 'conf_vowel_ext_01',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel Contrasts',
    titleZh: 'an (安) / ăn (吃) / ân (恩)',
    titleEn: 'an / ăn / ân',
    summaryZh: '同一個 a 加不同帽子：長音 a、短促 ă、像「恩」的 â，三個字意思完全不同。',
    summaryEn: 'Long a, short ă and schwa-like â change the meaning completely.',
    words: [
      { viet: 'an', ipa: '[ʔaːn˧]', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '安（如 bình an 平安、an toàn 安全）', en: 'Safe, peaceful', hanViet: '安', tag: '漢越詞' },
      { viet: 'ăn', ipa: '[ʔan˧]', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '吃（如 ăn cơm 吃飯）', en: 'To eat', hanViet: '', tag: '日常動詞' },
      { viet: 'ân', ipa: '[ʔən˧]', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '恩（如 ân nhân 恩人、ân cần 殷勤）', en: 'Grace, favour', hanViet: '恩', tag: '漢越詞' }
    ],
    mnemonicHookZh: '「帽子讓音變短變扁」：a 長音大開口（安 an）→ ă 戴彎月帽，短促一口吃（ăn）→ â 戴尖帽，像中文「恩」的 ㄣ（ân）。',
    mnemonicHookEn: 'No hat = long a (an); moon hat = short ă (ăn, eat); pointed hat = schwa â (ân, grace).',
    pitfallAlertZh: '台灣學習者常把 ăn 唸成拉長的 an，聽起來變成「安」。ă 一定要短促有力，像「啊」急收。',
    hanVietInsightZh: 'an＝安、ân＝恩 都是漢越音；ăn（吃）是純越語，所以沒有對應漢字。看到戴尖帽的 â，常可聯想到中文的 ㄣ／ㄥ 韻。',
    masterSentence: 'Ăn cơm xong, con nhớ cảm ơn ân nhân đã giúp gia đình mình được bình an.',
    masterSentenceZh: '吃完飯，記得感謝幫助我們家平安的恩人。',
    masterSentenceEn: 'After eating, remember to thank the benefactor who kept our family safe.',
    drill: {
      questionZh: '「吃飯」的越語是哪一個？',
      options: ['an cơm', 'ăn cơm', 'ân cơm'],
      correctIndex: 1,
      explanationZh: 'ăn 的 ă 是短促的 a，嘴巴張開的時間很短；an 是長音（安），ân 接近中文「恩」。吃＝ăn。'
    }
  },
  {
    id: 'conf_cons_ext_01',
    type: 'consonant_contrasts',
    categoryLabelZh: '🗣️ 輔音與拼寫陷阱',
    categoryLabelEn: 'Consonant Contrasts',
    titleZh: 'da (皮膚) vs gia (家) vs ra (出去)',
    titleEn: 'da / gia / ra',
    summaryZh: '北部口音裡 d、gi、r 三個聲母都唸成 z，聽起來一樣，拼字卻完全不同。',
    summaryEn: 'In the Northern accent d, gi and r all sound like z — spelling must be memorised.',
    words: [
      { viet: 'da', ipa: '[zaː˧] 北 / [jaː˧] 南', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '皮膚／皮革（如 da mặt 臉部皮膚）', en: 'Skin, leather', hanViet: '', tag: '身體' },
      { viet: 'gia', ipa: '[zaː˧] 北 / [jaː˧] 南', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '家／加（如 gia đình 家庭、tham gia 參加）', en: 'Family; to add', hanViet: '家 / 加', tag: '漢越詞' },
      { viet: 'ra', ipa: '[zaː˧] 北 / [ɹaː˧] 南', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '出去（如 ra ngoài 出門）', en: 'To go out', hanViet: '', tag: '方向動詞' }
    ],
    mnemonicHookZh: '「漢字『家、加、價』都寫 gi」：gia đình 家庭、tham gia 參加、giá 價格；r 多是純越語（ra 出、rau 菜）。',
    mnemonicHookEn: 'Sino-Vietnamese words for 家/加/價 are spelled gi; native words like ra, rau use r.',
    pitfallAlertZh: '跟北部人學時三個字聽起來都像「匝」，拼寫錯誤率最高；跟南部人學則 r 帶捲舌，比較好分辨。',
    hanVietInsightZh: '漢越詞拼寫有規律：中文 j／q／x 聲母的字常寫 gi（家 gia、教 giáo、間 gian），中文以 y 起頭的字常寫 d（由 do、遊 du、預 dự）。',
    masterSentence: 'Ra ngoài nắng nhớ bảo vệ da, cả gia đình mình ai cũng dặn vậy.',
    masterSentenceZh: '出門曬太陽記得保護皮膚，我們全家人都這樣叮嚀。',
    masterSentenceEn: 'Protect your skin when you go out in the sun — everyone in our family says so.',
    drill: {
      questionZh: '聽到北部人說 [zaː] đình（家庭），正確拼寫是？',
      options: ['da đình', 'gia đình', 'ra đình'],
      correctIndex: 1,
      explanationZh: '北部 d、gi、r 都唸成 z，光聽無法分辨，要靠詞彙記拼法：家庭＝gia đình（漢越「家」都寫 gi）。'
    }
  },
  {
    id: 'conf_hv_ext_01',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Tiểu thư (千金小姐) vs Cô／Em (叫「小姐」)',
    titleEn: 'Tiểu thư vs Cô / Em',
    summaryZh: '中文喊服務生「小姐」，越語可不能直譯成 Tiểu thư——那是「千金大小姐」。',
    summaryEn: 'Calling a waitress "tiểu thư" sounds like "princess" — use em or chị instead.',
    words: [
      { viet: 'Tiểu thư', ipa: '[tiəw˧˩˧ tʰɨ˧]', tone: 'hoi', toneSymbol: '̉ (問聲)', toneNameZh: '問聲 (Hỏi)', pitch: '313', zh: '千金小姐（常帶「嬌生慣養」意味）', en: 'Rich young lady (often "spoiled")', hanViet: '小姐', tag: '漢越假朋友' },
      { viet: 'Cô', ipa: '[ko˧]', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '小姐／阿姨／女老師（稱呼女性）', en: 'Miss; aunt; female teacher', hanViet: '姑', tag: '稱謂' },
      { viet: 'Em', ipa: '[ʔɛm˧]', tone: 'ngang', toneSymbol: '無符號 (平聲)', toneNameZh: '平聲 (Ngang)', pitch: '44', zh: '叫比你年輕的人（如女服務生）', en: 'Younger person (e.g. a waitress)', hanViet: '', tag: '點餐稱呼' }
    ],
    mnemonicHookZh: '「中文的小姐 ≠ 越南的 Tiểu thư」：越語 Tiểu thư 只指大戶人家的千金；叫人請看年紀，用 em／chị／cô。',
    mnemonicHookEn: 'Tiểu thư means "young lady of a rich family"; address people by age with em / chị / cô.',
    pitfallAlertZh: '台灣人習慣喊「小姐」叫服務生，直譯成 Tiểu thư 會讓對方尷尬，甚至覺得你在挖苦她嬌氣。',
    hanVietInsightZh: 'Tiểu thư＝小姐（漢越音完全對應），但語意停留在古代「官宦人家的女兒」，現代口語多帶「嬌氣、公主病」色彩，是典型的漢越假朋友。',
    masterSentence: 'Em ơi, cho chị gọi món; cô bé kia trông như tiểu thư nhà giàu.',
    masterSentenceZh: '小妹，我要點餐；那邊那個女孩看起來像有錢人家的千金。',
    masterSentenceEn: "Excuse me, I'd like to order; that girl over there looks like a rich family's daughter.",
    drill: {
      questionZh: '在餐廳想叫年輕的女服務生點餐，最自然的說法是？',
      options: ['Tiểu thư ơi!', 'Em ơi!', 'Bà ơi!'],
      correctIndex: 1,
      explanationZh: '越南餐廳叫比自己年輕的店員一律用 Em ơi；Tiểu thư 是「千金大小姐」，用來叫店員會被當成調侃；Bà 是叫奶奶輩，會讓年輕人不高興。'
    }
  }
];

// ── 語法（GRAMMAR_DRILLS）──────────────────────────────────────
export const EXTRA_GRAMMAR_DRILLS = [
  {
    id: 'drill_21',
    ruleIndex: 3,
    questionZh: '你想說「我被老闆稱讚了」，下列哪一句正確？',
    questionEn: 'How do you say "I was praised by my boss"?',
    options: [
      { vi: 'Tôi được sếp khen.', zh: 'được（好事：受到稱讚）', isCorrect: true },
      { vi: 'Tôi bị sếp khen.', zh: 'bị（壞事：遭受）', isCorrect: false, mistakeReasonZh: 'bị 用於不好的遭遇（bị phạt 被罰、bị mắng 被罵）；被稱讚是好事，要用 được。' }
    ],
    explanationZh: '越語的「被」分兩種：好事用 được（được khen 被稱讚、được mời 受邀），壞事用 bị（bị cảm 感冒、bị mất ví 皮夾不見）。',
    audioText: 'Tôi được sếp khen.'
  },
  {
    id: 'drill_22',
    ruleIndex: 1,
    questionZh: '「一件紅色的新衣服」怎麼說？',
    questionEn: 'How do you say "a new red shirt"?',
    options: [
      { vi: 'một cái áo mới màu đỏ', zh: '名詞在前、修飾語在後（越語語序）', isCorrect: true },
      { vi: 'một mới màu đỏ cái áo', zh: '照中文語序直翻', isCorrect: false, mistakeReasonZh: '越語修飾語放在名詞後面：先說 áo（衣服），再加 mới（新）、màu đỏ（紅色）。照中文語序把形容詞放前面，越南人會聽不懂。' }
    ],
    explanationZh: '越語是「中心名詞在前、修飾語在後」：áo mới（新衣）、nhà to（大房子）、cà phê sữa（牛奶咖啡）。',
    audioText: 'một cái áo mới màu đỏ'
  },
  {
    id: 'drill_23',
    ruleIndex: 5,
    questionZh: '想問店家「這道菜辣嗎？」，哪一句正確？',
    questionEn: 'How do you ask "Is this dish spicy?"',
    options: [
      { vi: 'Món này có cay không?', zh: 'có + 形容詞 + không?', isCorrect: true },
      { vi: 'Món này là cay không?', zh: '誤加 là', isCorrect: false, mistakeReasonZh: 'là 只連接名詞（Đây là phở 這是河粉）；問形容詞是否成立要用「có … không?」，不要加 là。' }
    ],
    explanationZh: '「(có) + 動詞／形容詞 + không?」是萬用是非問句；回答時直接重複形容詞：Cay.（辣）或 Không cay.（不辣）。',
    audioText: 'Món này có cay không?'
  }
];

// ── 綜合測驗（quizzes）─────────────────────────────────────────
export const EXTRA_QUIZZES = [
  {
    id: 'q31',
    level: 'A1',
    questionZh: '越南朋友問你「Bạn ăn cơm chưa?」，最自然的回答是？',
    questionEn: 'A Vietnamese friend asks "Bạn ăn cơm chưa?" What is the most natural reply?',
    optionsZh: ['Rồi, cảm ơn bạn.（吃過了，謝謝）', 'Có, cảm ơn.（有，謝謝）', 'Là cơm.（是飯）', 'Không có.（沒有）'],
    optionsEn: ['Rồi, cảm ơn bạn. (Yes, I have, thanks)', 'Có, cảm ơn. (Have, thanks)', 'Là cơm. (It is rice)', 'Không có. (Do not have)'],
    answer: 0,
    explanationZh: '「…chưa?」問「…了沒？」，肯定回答用 Rồi（已經），否定用 Chưa（還沒）；不能用 Có／Không 回答。這句也常當打招呼用，相當於「吃飽沒？」。',
    explanationEn: '"…chưa?" asks "yet?"; answer Rồi (already) or Chưa (not yet), never Có / Không. It is also a friendly greeting.'
  },
  {
    id: 'q32',
    level: 'A2',
    questionZh: '在越南看到價格「45.000đ」，正確的唸法是？',
    questionEn: 'How do you read the price "45.000đ"?',
    optionsZh: ['Bốn mươi lăm nghìn đồng', 'Bốn năm không không không đồng', 'Bốn mươi năm nghìn đồng', 'Bốn lăm trăm đồng'],
    optionsEn: ['Bốn mươi lăm nghìn đồng', 'Bốn năm không không không đồng', 'Bốn mươi năm nghìn đồng', 'Bốn lăm trăm đồng'],
    answer: 0,
    explanationZh: '越南用「.」分隔千位，45.000＝四萬五千盾。十位數後的 5 要唸 lăm（不是 năm）：bốn mươi lăm nghìn。口語也常縮成 bốn lăm nghìn，或寫成 45k。',
    explanationEn: 'The dot separates thousands: 45.000 = forty-five thousand. A 5 after a tens digit is read lăm, not năm.'
  },
  {
    id: 'q33',
    level: 'B1',
    questionZh: '同事對你說「Anh vất vả quá!」，他的意思最接近？',
    questionEn: 'A colleague says "Anh vất vả quá!" What do they mean?',
    optionsZh: ['你辛苦了！', '你太胖了！', '你太慢了！', '你好有錢！'],
    optionsEn: ['You have worked so hard!', 'You are too fat!', 'You are too slow!', 'You are so rich!'],
    answer: 0,
    explanationZh: 'vất vả＝辛苦、勞累，是越南職場常用的慰問語；回應可說 Không sao đâu, cảm ơn em.（沒事啦，謝謝）。',
    explanationEn: 'vất vả means hard-working / exhausting; it is a common expression of appreciation at work.'
  }
];

// ── 漢越字根（hanVietRoots）────────────────────────────────────
export const EXTRA_HANVIET_ROOTS = [
  { han: '時 (Shí)', root: 'Thời', meaningZh: '時間、時代', meaningEn: 'Time, era', phonologyNoteZh: '中文 sh 聲母常對應越語 th：時 thời、實 thực、市 thị。', compounds: [{ viet: 'Thời gian', zh: '時間', en: 'Time' }, { viet: 'Thời tiết', zh: '天氣（時節）', en: 'Weather' }, { viet: 'Đồng thời', zh: '同時', en: 'At the same time' }, { viet: 'Thời đại', zh: '時代', en: 'Era' }] },
  { han: '動 (Dòng)', root: 'Động', meaningZh: '活動、移動', meaningEn: 'Move, act', phonologyNoteZh: '中文去聲字在漢越音多為重聲（nặng）：動 động、自 tự、定 định。', compounds: [{ viet: 'Hoạt động', zh: '活動', en: 'Activity' }, { viet: 'Động vật', zh: '動物', en: 'Animal' }, { viet: 'Lao động', zh: '勞動、勞工', en: 'Labour' }, { viet: 'Tự động', zh: '自動', en: 'Automatic' }] },
  { han: '會 (Huì)', root: 'Hội', meaningZh: '聚會、機構', meaningEn: 'Meeting, association', phonologyNoteZh: '中文 h 聲母多保留為越語 h：會 hội、和 hòa、華 hoa。', compounds: [{ viet: 'Xã hội', zh: '社會', en: 'Society' }, { viet: 'Hội nghị', zh: '會議', en: 'Conference' }, { viet: 'Cơ hội', zh: '機會', en: 'Opportunity' }, { viet: 'Hội viên', zh: '會員', en: 'Member' }] },
  { han: '意 (Yì)', root: 'Ý', meaningZh: '意思、想法', meaningEn: 'Meaning, idea', phonologyNoteZh: '中文零聲母 y 的字在漢越音常只剩母音：意 ý、醫 y、衣 y。', compounds: [{ viet: 'Ý kiến', zh: '意見', en: 'Opinion' }, { viet: 'Chú ý', zh: '注意', en: 'Attention' }, { viet: 'Đồng ý', zh: '同意', en: 'Agree' }, { viet: 'Ý nghĩa', zh: '意義', en: 'Meaning' }] },
  { han: '關 (Guān)', root: 'Quan', meaningZh: '關係、關卡', meaningEn: 'Relation, checkpoint', phonologyNoteZh: '中文 g／k 聲母合口字常對應越語 qu：關 quan、國 quốc、官 quan。', compounds: [{ viet: 'Quan hệ', zh: '關係', en: 'Relationship' }, { viet: 'Quan tâm', zh: '關心', en: 'Care about' }, { viet: 'Quan trọng', zh: '重要（關重）', en: 'Important' }, { viet: 'Hải quan', zh: '海關', en: 'Customs' }] },
  { han: '交 (Jiāo)', root: 'Giao', meaningZh: '交換、交往、交付', meaningEn: 'Exchange, deliver', phonologyNoteZh: '中文 j 聲母常對應越語 gi：交 giao、家 gia、教 giáo、間 gian。', compounds: [{ viet: 'Giao thông', zh: '交通', en: 'Traffic' }, { viet: 'Ngoại giao', zh: '外交', en: 'Diplomacy' }, { viet: 'Giao dịch', zh: '交易', en: 'Transaction' }, { viet: 'Giao hàng', zh: '交貨、外送', en: 'Delivery' }] },
  { han: '熱 (Rè)', root: 'Nhiệt', meaningZh: '熱、溫度、熱情', meaningEn: 'Heat, enthusiasm', phonologyNoteZh: '中文 r 聲母常對應越語 nh：熱 nhiệt、人 nhân、日 nhật。', compounds: [{ viet: 'Nhiệt độ', zh: '溫度（熱度）', en: 'Temperature' }, { viet: 'Nhiệt tình', zh: '熱情', en: 'Enthusiastic' }, { viet: 'Nhiệt đới', zh: '熱帶', en: 'Tropical' }, { viet: 'Nhiệt kế', zh: '溫度計', en: 'Thermometer' }] }
];

// ── 購物數字（numbersAndCurrency.shoppingPhrases）───────────────
export const EXTRA_SHOPPING_PHRASES = [
  { viet: 'Chị ơi, cái này có size lớn hơn không?', zh: '姊姊，這件有大一點的尺寸嗎？', en: 'Do you have this in a bigger size?', tag: '試穿換尺寸' },
  { viet: 'Em lấy hai cái thì bớt cho em được không?', zh: '我買兩件可以算便宜一點嗎？', en: 'If I take two, can you give me a discount?', tag: '議價技巧' }
];

// ── 南北口音（accentDifferences.wordComparisonMatrix）────────────
export const EXTRA_ACCENT_WORDS = [
  { north: 'Lợn', south: 'Heo', meaningZh: '豬（thịt lợn／thịt heo 豬肉）', meaningEn: 'Pig / Pork', category: '食材' },
  { north: 'Vừng', south: 'Mè', meaningZh: '芝麻', meaningEn: 'Sesame', category: '食材' },
  { north: 'Bố', south: 'Ba / Tía', meaningZh: '爸爸', meaningEn: 'Dad', category: '家庭稱謂' }
];

// ── 科學方法（RESEARCH_PANELS[memory_srs].theories）─────────────
export const EXTRA_RESEARCH_THEORIES = {
  memory_srs: [
    {
      nameZh: '提取練習效應 (Testing Effect)',
      nameEn: 'Testing Effect / Retrieval Practice',
      descZh: 'Roediger 與 Karpicke（2006）發現：主動回想答案比反覆閱讀更能形成長期記憶；即使回想失敗，看過解答後的記憶也比單純重讀牢固。',
      descEn: 'Actively retrieving an answer builds longer-lasting memory than re-reading (Roediger & Karpicke, 2006); even failed attempts help once feedback is shown.',
      appZh: '單字閃卡先遮住意思讓你回想再翻面；答錯立即說明原因，並在幾張後重考。',
      appEn: 'Flashcards hide the meaning until you try to recall it; misses are explained and retested a few cards later.'
    },
    {
      nameZh: '交錯練習 (Interleaved Practice)',
      nameEn: 'Interleaved Practice',
      descZh: 'Rohrer 與 Taylor（2007）等研究顯示：把不同題型交錯練習，比同一題型連續練習更能提升辨別力與遷移能力。',
      descEn: 'Mixing problem types during practice improves discrimination and transfer compared with blocked practice (e.g. Rohrer & Taylor, 2007).',
      appZh: '閃卡「智慧混合」依熟練度交錯出現翻卡、聽音選義、看中選越與聽寫拼字。',
      appEn: 'Smart-mix flashcards interleave flip, listening, reverse choice and dictation according to mastery.'
    }
  ]
};

// ── 越語闖關（每關再加一題情境聽力，32 題）──────────────────────
// [越文, 正確意思, 兩個對比意思, 答錯解說]
export const EXTRA_QUEST_LISTENING = [
  ['Chào buổi sáng, chúc bạn một ngày tốt lành!', '早安，祝你有美好的一天！', ['晚安，明天見！', '請問你住在哪裡？'], 'buổi sáng 是早上；chúc … tốt lành 是祝福語。晚上道別要說 chúc ngủ ngon。'],
  ['Tôi tên là Minh, năm nay hai mươi lăm tuổi.', '我叫明，今年二十五歲。', ['我叫明，今年十五歲。', '他叫明，在學校工作。'], 'tên là 後接名字；hai mươi lăm＝25，十位後的 5 唸 lăm。'],
  ['Bạn nói chậm một chút được không?', '你可以說慢一點嗎？', ['你可以說大聲一點嗎？', '你會說越南語嗎？'], 'chậm＝慢；một chút＝一點；… được không? 是禮貌請求。聽不懂時先請對方放慢。'],
  ['Rất vui được làm quen với bạn, mình là người Đài Loan.', '很高興認識你，我是台灣人。', ['很抱歉打擾你，我是越南人。', '很高興再見到你，我在台灣工作。'], 'làm quen＝結識；mình 是朋友間的自稱；người Đài Loan＝台灣人。'],
  ['Anh ấy là anh trai của em.', '他是我的哥哥。', ['他是我的弟弟。', '她是我的姊姊。'], 'anh trai 是哥哥，em trai 才是弟弟；anh ấy＝他（年長男性）。'],
  ['Tôi không phải là bác sĩ, tôi là y tá.', '我不是醫生，我是護理師。', ['我是醫生，不是護理師。', '我不是護理師，我是老師。'], '否定 là 要說 không phải là；y tá＝護理師。注意哪個詞跟在 không phải 後面。'],
  ['Chị ấy làm kế toán ở một công ty Nhật.', '她在一家日本公司當會計。', ['她在一家日本公司當翻譯。', '她在一家台灣銀行當會計。'], 'làm + 職業＝擔任；kế toán＝會計；công ty Nhật＝日本公司。'],
  ['Đây là danh thiếp của tôi, rất mong được hợp tác.', '這是我的名片，很期待能合作。', ['這是我的手機，請打給我。', '我忘了帶名片，抱歉。'], 'danh thiếp＝名片；mong được hợp tác 是商務場合的客氣結語。'],
  ['Cho tôi một ly cà phê đen nóng, không đường.', '請給我一杯熱黑咖啡，不加糖。', ['請給我一杯冰奶咖啡，少糖。', '請給我一杯熱茶，多糖。'], 'đen＝黑（不加奶）；nóng＝熱；không đường＝無糖。越南咖啡預設很甜，要特別說。'],
  ['Bánh mì này có pa tê và chả lụa.', '這個法國麵包有肝醬和越南火腿。', ['這碗河粉有牛肉和雞肉。', '這個法國麵包只有蔬菜。'], 'pa tê＝肝醬；chả lụa＝越南豬肉火腿，是 bánh mì 的經典內餡。'],
  ['Món này ngon nhưng hơi mặn.', '這道菜好吃，但有點鹹。', ['這道菜不好吃，太甜了。', '這道菜很辣，但很便宜。'], 'hơi＝有點；mặn＝鹹。nhưng 表轉折，先稱讚再提意見比較禮貌。'],
  ['Cho em thêm một đĩa rau sống và hai chai bia.', '請再給我一盤生菜和兩瓶啤酒。', ['請給我兩盤生菜和一瓶水。', '請幫我把生菜打包。'], 'thêm＝再加；đĩa＝盤；chai＝瓶。注意數量：一盤生菜、兩瓶啤酒。'],
  ['Số điện thoại của tôi là không chín một hai, ba bốn năm.', '我的電話號碼是 0912-345。', ['我的房間號碼是 912。', '我的電話號碼是 0921-543。'], '電話號碼逐位唸；không＝0。聽數字時一位一位寫下來最保險。'],
  ['Tổng cộng là một trăm hai mươi nghìn đồng.', '總共是十二萬盾。', ['總共是一萬兩千盾。', '總共是一百二十萬盾。'], 'một trăm hai mươi nghìn＝120 × 1,000＝120,000 盾。越南以「千 nghìn」為單位分組。'],
  ['Nếu chị bán rẻ hơn, em sẽ mua hai ký.', '如果妳賣便宜一點，我就買兩公斤。', ['如果妳賣貴一點，我就不買了。', '我已經買了兩公斤。'], 'Nếu … sẽ … 是條件句；用「多買」換折扣是市場常見策略。ký＝公斤。'],
  ['Giá này đã bao gồm phí giao hàng chưa?', '這個價格已經包含運費了嗎？', ['這個價格包含稅金了嗎？', '運費可以免費嗎？'], 'bao gồm＝包含；phí giao hàng＝運費；… chưa? 問「了沒」。'],
  ['Bây giờ là tám giờ kém mười lăm.', '現在是七點四十五分。', ['現在是八點十五分。', '現在是八點半。'], 'kém＝差；tám giờ kém mười lăm＝八點差十五分＝7:45。'],
  ['Thứ sáu tuần sau chúng ta họp lúc chín giờ sáng.', '下週五我們早上九點開會。', ['這週五我們晚上九點開會。', '下週六我們早上九點出發。'], 'thứ sáu＝星期五（不是星期六）；tuần sau＝下週；sáng＝早上。'],
  ['Mỗi sáng tôi dậy lúc sáu giờ rưỡi rồi đi tập thể dục.', '我每天早上六點半起床，然後去運動。', ['我每天晚上六點半下班回家。', '我每天早上七點半吃早餐。'], 'rưỡi＝半；rồi＝然後；tập thể dục＝運動。'],
  ['Buổi chiều mình đi bảo tàng, buổi tối đi ăn hải sản nhé.', '下午我們去博物館，晚上去吃海鮮喔。', ['早上去博物館，中午吃海鮮。', '下午去市場，晚上回飯店休息。'], 'buổi chiều＝下午；buổi tối＝晚上；bảo tàng＝博物館。'],
  ['Nhà vệ sinh ở cuối hành lang, bên tay phải.', '洗手間在走廊盡頭的右手邊。', ['洗手間在二樓左手邊。', '洗手間在入口旁邊。'], 'cuối hành lang＝走廊盡頭；bên tay phải＝右手邊（trái 是左）。'],
  ['Đi thẳng qua hai ngã tư rồi rẽ trái.', '直走過兩個十字路口後左轉。', ['直走過一個十字路口後右轉。', '在第二個十字路口迴轉。'], 'đi thẳng＝直走；ngã tư＝十字路口；rẽ trái＝左轉。注意數量 hai＝兩個。'],
  ['Tài xế Grab đang đến, khoảng năm phút nữa.', 'Grab 司機正在過來，大約再五分鐘。', ['Grab 司機已經到了。', 'Grab 司機取消了訂單。'], 'đang đến＝正在來；khoảng＝大約；năm phút nữa＝再五分鐘。'],
  ['Chợ Bến Thành ở gần đây, đi bộ khoảng mười phút.', '濱城市場就在附近，走路大約十分鐘。', ['濱城市場很遠，要搭車半小時。', '濱城市場今天沒開。'], 'ở gần đây＝在這附近；đi bộ＝走路。'],
  ['Máy số ba đang bị lỗi, cần kiểm tra ngay.', '三號機正在故障，需要立刻檢查。', ['三號機已經修好了。', '三號機明天要保養。'], 'bị lỗi＝出錯、故障；cần … ngay＝需要立刻…。'],
  ['Tối nay cả tổ phải tăng ca để kịp giao hàng.', '今晚全組要加班才能趕上出貨。', ['今晚全組可以提早下班。', '出貨日延到下週了。'], 'tăng ca＝加班；kịp＝來得及；giao hàng＝交貨、出貨。'],
  ['Chúng tôi có thể giảm năm phần trăm nếu đặt trên một nghìn sản phẩm.', '如果訂購超過一千件，我們可以降價百分之五。', ['如果訂購少於一千件，價格要加百分之五。', '我們不能再降價了。'], 'phần trăm＝百分比；đặt trên＝訂購超過。注意條件與數字。'],
  ['Hôm nay tỷ lệ lỗi giảm còn một phần trăm, mọi người làm tốt lắm.', '今天不良率降到百分之一，大家做得很好。', ['今天不良率升到百分之十。', '今天產量增加了一倍。'], 'tỷ lệ lỗi＝不良率；giảm còn＝降到。晨會先肯定成果能提升士氣。'],
  ['Bạn nói tiếng Việt giỏi quá! Đâu có, mình còn phải học nhiều.', '「你越語說得真好！」「哪裡，我還要多學習。」', ['「你越語說得真好！」「對，我學了十年。」', '「你越語說得不太好。」「謝謝指教。」'], 'Đâu có＝哪有、哪裡，是越南人被稱讚時的謙虛回應。'],
  ['Chủ nhật này đi xem phim với mình không?', '這個星期天要不要跟我去看電影？', ['這個星期六要不要去游泳？', '星期天你可以幫我搬家嗎？'], 'Chủ nhật＝星期日；把 không? 放句尾就成了邀約。'],
  ['Đây là chút quà nhỏ từ Đài Loan, mong anh chị nhận cho.', '這是從台灣帶來的小禮物，請您們收下。', ['這是很貴的禮物，請好好保存。', '這是我在越南買的紀念品。'], 'chút quà nhỏ＝小小心意；越南人收禮常先客氣推辭，送禮的人再說 nhận cho em nhé。'],
  ['Cảm ơn mọi người đã giúp đỡ, hẹn gặp lại ở Việt Nam!', '謝謝大家的幫忙，越南再見！', ['謝謝大家，我不會再來越南了。', '對不起大家，我明天要回國了。'], 'giúp đỡ＝幫忙；hẹn gặp lại＝約好再見。']
];
