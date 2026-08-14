/**
 * Comprehensive Vietnamese Learning Dataset (越語學習通完整數據庫)
 * Tailored for Traditional Chinese speakers
 */

export const vietnameseAlphabet = [
  { char: 'A a', name: 'a', ipa: '[aː]', type: 'vowel', example: 'Ba', meaning: '父親 / 數字3', hint: '類似中文「阿」', north: '[aː]', south: '[aː]' },
  { char: 'Ă ă', name: 'á', ipa: '[a]', type: 'vowel', example: 'Ăn', meaning: '吃', hint: '短音 a，嘴巴張大發短音', north: '[a]', south: '[a]' },
  { char: 'Â â', name: 'ớ', ipa: '[ə]', type: 'vowel', example: 'Vận', meaning: '運氣', hint: '類似中文「ㄜ」短音', north: '[ə]', south: '[ə]' },
  { char: 'B b', name: 'bê', ipa: '[ɓ]', type: 'consonant', example: 'Bạn', meaning: '朋友', hint: '雙唇閉合發 B 音', north: '[ɓ]', south: '[ɓ]' },
  { char: 'C c', name: 'xê', ipa: '[k]', type: 'consonant', example: 'Cơm', meaning: '米飯', hint: '不發音的 G/K，發 K 音', north: '[k]', south: '[k]' },
  { char: 'D d', name: 'dê', ipa: '[z] / [j]', type: 'consonant', example: 'Dù', meaning: '雨傘', hint: '北越讀 [z] (Zip)，南越讀 [j] (Yee)', north: '[z] 像 Z', south: '[j] 像 Y' },
  { char: 'Đ đ', name: 'đê', ipa: '[ɗ]', type: 'consonant', example: 'Đi', meaning: '去', hint: '濁音 D，舌尖抵住上齒齦', north: '[ɗ]', south: '[ɗ]' },
  { char: 'E e', name: 'e', ipa: '[ɛ]', type: 'vowel', example: 'Em', meaning: '弟弟/妹妹/你(晚輩)', hint: '嘴巴張大的「誒」', north: '[ɛ]', south: '[ɛ]' },
  { char: 'Ê ê', name: 'ê', ipa: '[e]', type: 'vowel', example: 'Điệu', meaning: '韻律', hint: '類似國語「ㄝ」', north: '[e]', south: '[e]' },
  { char: 'G g / Gh', name: 'giê', ipa: '[ɣ]', type: 'consonant', example: 'Gà', meaning: '雞肉', hint: '喉嚨後方發出的軟顎擦音', north: '[ɣ]', south: '[ɣ]' },
  { char: 'H h', name: 'hát', ipa: '[h]', type: 'consonant', example: 'Học', meaning: '學習', hint: '與國語「ㄏ」相同', north: '[h]', south: '[h]' },
  { char: 'I i', name: 'i ngắn', ipa: '[i]', type: 'vowel', example: 'Đi', meaning: '去', hint: '短母音「一」', north: '[i]', south: '[i]' },
  { char: 'K k', name: 'ca', ipa: '[k]', type: 'consonant', example: 'Kéo', meaning: '剪刀', hint: '搭配 i, e, ê 發 K 音', north: '[k]', south: '[k]' },
  { char: 'L l', name: 'e-lờ', ipa: '[l]', type: 'consonant', example: 'Làm', meaning: '做', hint: '與國語「ㄌ」相同', north: '[l]', south: '[l]' },
  { char: 'M m', name: 'em-mờ', ipa: '[m]', type: 'consonant', example: 'Mẹ', meaning: '母親', hint: '與國語「ㄇ」相同', north: '[m]', south: '[m]' },
  { char: 'N n', name: 'en-nờ', ipa: '[n]', type: 'consonant', example: 'Nón', meaning: '帽子', hint: '與國語「ㄋ」相同', north: '[n]', south: '[n]' },
  { char: 'O o', name: 'o', ipa: '[ɔ]', type: 'vowel', example: 'Ong', meaning: '蜜蜂', hint: '嘴巴圓張發「喔」', north: '[ɔ]', south: '[ɔ]' },
  { char: 'Ô ô', name: 'ô', ipa: '[o]', type: 'vowel', example: 'Ô tô', meaning: '汽車', hint: '嘴形聚圓發「歐」', north: '[o]', south: '[o]' },
  { char: 'Ơ ơ', name: 'ơ', ipa: '[əː]', type: 'vowel', example: 'Ơn', meaning: '恩情', hint: '嘴巴微開自然發「ㄜ」長音', north: '[əː]', south: '[əː]' },
  { char: 'P p', name: 'pê', ipa: '[p]', type: 'consonant', example: 'Pin', meaning: '電池', hint: '通常用於外來語或字尾 stop sound', north: '[p]', south: '[p]' },
  { char: 'Q q (Qu)', name: 'quy', ipa: '[kʷ]', type: 'consonant', example: 'Quá', meaning: '太/極', hint: '北越發 [kw] (K-w)，南越發 [w] (W)', north: '[kw]', south: '[w]' },
  { char: 'R r', name: 'e-rờ', ipa: '[ʐ] / [r]', type: 'consonant', example: 'Rắn', meaning: '蛇', hint: '北越讀像 [z]，南越捲舌 [r]', north: '[z] 像 Z', south: '[r] 捲舌 R' },
  { char: 'S s', name: 'ét-sờ', ipa: '[s] / [ʂ]', type: 'consonant', example: 'Sữa', meaning: '牛奶', hint: '北越讀 [s] (S)，南越捲舌 [ʂ] (Sh)', north: '[s] 平舌', south: '[ʂ] 捲舌 Sh' },
  { char: 'T t', name: 'tê', ipa: '[t]', type: 'consonant', example: 'Tôi', meaning: '我', hint: '不吐氣的 T 音，類似國語「ㄉ」', north: '[t]', south: '[t]' },
  { char: 'U u', name: 'u', ipa: '[u]', type: 'vowel', example: 'Uống', meaning: '喝', hint: '嘴唇嘟起發「烏」', north: '[u]', south: '[u]' },
  { char: 'Ư ư', name: 'ư', ipa: '[ɨ]', type: 'vowel', example: 'Ước', meaning: '願望', hint: '扁唇發「烏」或「資」的韻母', north: '[ɨ]', south: '[ɨ]' },
  { char: 'V v', name: 'vê', ipa: '[v] / [j]', type: 'consonant', example: 'Vào', meaning: '進去', hint: '北越讀 [v] (V)，南越讀 [j] (Y/V)', north: '[v] 咬唇', south: '[j] 像 Y' },
  { char: 'X x', name: 'ích-xờ', ipa: '[s]', type: 'consonant', example: 'Xe', meaning: '車子', hint: '平舌 S 音，類似「西」', north: '[s]', south: '[s]' },
  { char: 'Y y', name: 'i dài', ipa: '[i]', type: 'vowel', example: 'Yêu', meaning: '愛', hint: '長母音「一」', north: '[i]', south: '[i]' }
];

export const vietnameseTones = [
  {
    id: 'ngang',
    name: 'Thanh Ngang (平聲)',
    symbol: '無標記 (Ma)',
    pitchDescription: '高平音 (High Level)',
    contour: '444 (平直升級高音)',
    example: 'Ma',
    meaning: '鬼',
    zhHint: '類似國語第一聲 (陰平)',
    color: '#3b82f6'
  },
  {
    id: 'huyen',
    name: 'Thanh Huyền (玄聲/平下降)',
    symbol: '重音符號 (Mà)',
    pitchDescription: '低降音 (Low Falling)',
    contour: '311 (平緩下降溫柔音)',
    example: 'Mà',
    meaning: '但是 / 卻',
    zhHint: '類似輕柔下滑的四聲，語氣溫和',
    color: '#10b981'
  },
  {
    id: 'hoi',
    name: 'Thanh Hỏi (問聲/問號聲)',
    symbol: '問號符號 (Mả)',
    pitchDescription: '轉折聲 (Dipping-Rising)',
    contour: '313 (先下降再稍微上揚)',
    example: 'Mả',
    meaning: '墳墓',
    zhHint: '類似國語第三聲 (上聲) 的後半段',
    color: '#f59e0b'
  },
  {
    id: 'nga',
    name: 'Thanh Ngã (跌聲/波浪聲)',
    symbol: '波浪符號 (Mã)',
    pitchDescription: '高上升停頓聲 (Glottalized High)',
    contour: '35 (中途緊縮哽咽後上揚)',
    example: 'Mã',
    meaning: '馬 / 代碼',
    zhHint: '北越有明顯喉頭喉塞波浪音；南越常與 Thỏi (問聲) 合併！',
    color: '#ec4899'
  },
  {
    id: 'sac',
    name: 'Thanh Sắc (銳聲/上聲)',
    symbol: '撇號 (Má)',
    pitchDescription: '高升音 (High Rising)',
    contour: '35 (快速陡峭往上升)',
    example: 'Má',
    meaning: '媽媽 / 臉頰',
    zhHint: '類似國語第二聲 (陽平) 或陡峭的四聲升調',
    color: '#ef4444'
  },
  {
    id: 'nang',
    name: 'Thanh Nặng (重聲/下點聲)',
    symbol: '下點符號 (Mạ)',
    pitchDescription: '重降停頓音 (Low Dropping)',
    contour: '21 (急促短暫頓音)',
    example: 'Mạ',
    meaning: '秧苗',
    zhHint: '發音極短，腹部用力戛然而止',
    color: '#8b5cf6'
  }
];

export const accentDifferences = {
  overview: '越南語主要分為三大方言：北越（河內音）、中越（順化音）與南越（胡志明音）。其中學習者最常接觸的是北越標音與南越商務通行音。',
  phoneticRules: [
    { rule: 'd, gi, r', north: 'D, Gi, R 全讀 [z] (像英文 Z 音)', south: 'D, Gi 讀 [j] (像 Y 音)；R 讀 [r] 滾舌音', example: 'Rắn (蛇) -> 北 [Zắn], 南 [Rắn]' },
    { rule: 'v', north: '讀標準 [v] (上齒咬下唇)', south: '常讀成 [j] (像 Y 音) 或輕薇 [v]', example: 'Vào (進去) -> 北 [Vào], 南 [Jào/Vào]' },
    { rule: 'tr / ch', north: 'Tr 與 Ch 不分，皆發平舌 [ch]', south: 'Tr 發清脆捲舌 [tr]；Ch 發平舌 [ch]', example: 'Trà (茶) -> 北 [Chà], 南 [Trà]' },
    { rule: 's / x', north: 'S 與 X 不分，皆發平舌 [s]', south: 'S 發捲舌 [sh]；X 發平舌 [s]', example: 'Sữa (牛奶) -> 北 [Sữa], 南 [Shữa]' },
    { rule: '聲調 Hỏi / Ngã', north: '問聲(Hỏi)與跌聲(Ngã)區分極為清晰，Ngã 有明顯喉塞斷音', south: '南越口音中 Hỏi 與 Ngã 幾乎考考讀成一樣的轉折問聲', example: 'Sữa (牛奶) vs Sửa (修復) -> 南越聽起來極相似' },
    { rule: '字尾 n / ng', north: 'Anh, Ăn 發明確前鼻音與後鼻音', south: 'Anh 常讀成 [Anh-en]，n/ng 在部份字尾會軟化', example: 'Bánh (餅) -> 北 [Bánh], 南 [Bánh-eings]' }
  ],
  wordComparisonMatrix: [
    { north: 'Thìa', south: 'Muỗng', meaning: '湯匙', category: '餐具' },
    { north: 'Ngô', south: 'Bắp', meaning: '玉米', category: '食物' },
    { north: 'Dứa', south: 'Thơm / Khóm', meaning: '鳳梨', category: '水果' },
    { north: 'Đậu phụ', south: 'Tàu hũ', meaning: '豆腐', category: '食物' },
    { north: 'Chè', south: 'Trà', meaning: '茶', category: '飲料' },
    { north: 'Vào', south: 'Vô', meaning: '進入', category: '動詞' },
    { north: 'Béo', south: 'Mập', meaning: '胖', category: '形容詞' },
    { north: 'Ốm', south: 'Bệnh', meaning: '生病 (南越 Ốm 為瘦)', category: '健康' },
    { north: 'Mũ', south: 'Nón', meaning: '帽子', category: '服飾' },
    { north: 'Chăn', south: 'Mền', meaning: '棉被', category: '居家' },
    { north: 'Điện thoại', south: 'ĐTDĐ', meaning: '手機', category: '科技' },
    { north: 'Nhé', south: 'Nha', meaning: '語氣詞(好嗎/喔)', category: '日常' }
  ]
};

export const numbersAndCurrency = {
  baseNumbers: [
    { num: 0, viet: 'Không', zh: '零' },
    { num: 1, viet: 'Một', zh: '一' },
    { num: 2, viet: 'Hai', zh: '二' },
    { num: 3, viet: 'Ba', zh: '三' },
    { num: 4, viet: 'Bốn', zh: '四' },
    { num: 5, viet: 'Năm', zh: '五' },
    { num: 6, viet: 'Sáu', zh: '六' },
    { num: 7, viet: 'Bảy', zh: '七' },
    { num: 8, viet: 'Tám', zh: '八' },
    { num: 9, viet: 'Chín', zh: '九' },
    { num: 10, viet: 'Mười', zh: '十' }
  ],
  specialRules: [
    { rule: '11-19 尾數 5', text: '5 讀作 "Lăm" 而不是 "Năm"（例如：15 = Mười lăm）' },
    { rule: '21-91 尾數 1', text: '1 讀作 "Mốt" 而不是 "Một"（例如：21 = Hai mươi mốt）' },
    { rule: '20-90 的 十', text: '10 讀作 "Mươi"（平聲）而不是 "Mười"（例如：30 = Ba mươi）' },
    { rule: '百/千/萬/億', text: 'Hundred = Trăm | Thousand = Nghìn (北) / Ngàn (南) | Million = Triệu | Billion = Tỷ' }
  ],
  shoppingDialogues: [
    {
      title: '詢問價格 (Hỏi giá)',
      lines: [
        { speaker: '顧客', viet: 'Cái này bao nhiêu tiền?', zh: '這個多少錢？', audioText: 'Cái này bao nhiêu tiền?' },
        { speaker: '老闆', viet: 'Cái đó một trăm nghìn đồng.', zh: '那個十萬越南盾 (100,000 VND)。', audioText: 'Cái đó một trăm nghìn đồng.' },
        { speaker: '顧客', viet: 'Đắt quá! Bớt chút được không?', zh: '太貴了！可以算便宜一點嗎？', audioText: 'Đắt quá! Bớt chút được không?' },
        { speaker: '老闆', viet: 'Thôi được, tám mươi nghìn nhé!', zh: '好吧，算你八萬盾 (80,000 VND)！', audioText: 'Thôi được, tám mươi nghìn nhé!' },
        { speaker: '顧客', viet: 'Cảm ơn, tôi lấy cái này.', zh: '謝謝，我要買這個。', audioText: 'Cảm ơn, tôi lấy cái này.' }
      ]
    },
    {
      title: '在市場結帳 (Thanh toán ở chợ)',
      lines: [
        { speaker: '顧客', viet: 'Cho tôi hai kg măng cụt.', zh: '給我兩公斤山竹。', audioText: 'Cho tôi hai kg măng cụt.' },
        { speaker: '老闆', viet: 'Tổng cộng một trăm hai mươi nghìn.', zh: '總共十二萬盾 (120,000 VND)。', audioText: 'Tổng cộng một trăm hai mươi nghìn.' },
        { speaker: '顧客', viet: 'Gửi anh hai trăm nghìn. Thối lại tôi nhé.', zh: '給您二十萬盾。請找錢喔。', audioText: 'Gửi anh hai trăm nghìn. Thối lại tôi nhé.' },
        { speaker: '老闆', viet: 'Tiền thối của em tám mươi nghìn đây.', zh: '這是找你的八萬盾。', audioText: 'Tiền thối của em tám mươi nghìn đây.' }
      ]
    }
  ]
};

export const multiScenarios = [
  {
    category: 'daily',
    title: '日常打招呼與自我介紹 (Chào hỏi & Giới thiệu)',
    dialogues: [
      {
        id: 'd1',
        name: '初次見面 (Gặp nhau lần đầu)',
        lines: [
          { speaker: 'Nam', viet: 'Xin chào! Tôi là Nam. Rất vui được gặp bạn.', zh: '你好！我是 Nam。很高興認識你。' },
          { speaker: 'Lan', viet: 'Chào anh Nam! Em là Lan. Anh là người nước nào?', zh: 'Nam 哥你好！我是 Lan。你是哪國人？' },
          { speaker: 'Nam', viet: 'Tôi là người Đài Loan. Còn em?', zh: '我是台灣人。那你呢？' },
          { speaker: 'Lan', viet: 'Em là người Việt Nam. Anh học tiếng Việt lâu chưa?', zh: '我是越南人。你學越南語很久了嗎？' },
          { speaker: 'Nam', viet: 'Tôi mới học được hai tháng thôi.', zh: '我才剛學了兩個月而已。' }
        ]
      }
    ]
  },
  {
    category: 'restaurant',
    title: '餐廳點餐與美食用語 (Nhà hàng & Ẩm thực)',
    dialogues: [
      {
        id: 'r1',
        name: '點河粉與咖啡 (Gọi Phở & Cà phê)',
        lines: [
          { speaker: '顧客', viet: 'Em ơi! Cho anh xem thực đơn.', zh: '服務員！給我看一下菜單。' },
          { speaker: '店員', viet: 'Dạ, thực đơn đây ạ. Anh dùng gì?', zh: '好的，菜單在這裡。哥要點什麼？' },
          { speaker: '顧客', viet: 'Cho anh một tô phở bò tái và một ly cà phê sữa đá.', zh: '給我一碗半熟牛肉河粉和一杯冰牛奶咖啡。' },
          { speaker: '店員', viet: 'Anh có ăn hành không ạ?', zh: '哥要加蔥嗎？' },
          { speaker: '顧客', viet: 'Có chứ, cho nhiều rau sống nhé!', zh: '要的，請多給一些生菜！' },
          { speaker: '顧客', viet: 'Tính tiền cho anh nhé!', zh: '幫我結帳喔！' }
        ]
      }
    ]
  },
  {
    category: 'business',
    title: '商務職場與商務會話 (Tiếng Việt Thương mại)',
    dialogues: [
      {
        id: 'b1',
        name: '拜訪商務夥伴 (Thăm đối tác kinh doanh)',
        lines: [
          { speaker: 'Giám đốc', viet: 'Chào ông Chen! Chào mừng ông đến thăm công ty chúng tôi.', zh: '陳總您好！歡迎您造訪我們公司。' },
          { speaker: 'Ông Chen', viet: 'Cảm ơn ông Nguyễn. Rất vinh hạnh được làm việc với quý công ty.', zh: '謝謝阮總。非常榮幸能貴公司合作。' },
          { speaker: 'Giám đốc', viet: 'Mời ông vào phòng họp dùng trà và thảo luận hợp đồng.', zh: '請陳總進會議室喝茶並討論合同。' },
          { speaker: 'Ông Chen', viet: 'Chúng tôi hy vọng hai bên sẽ có sự hợp tác lâu dài.', zh: '我們希望雙方能有長期的合作。' }
        ]
      }
    ]
  }
];

export const practicalPhrases = [
  { category: '問候語', viet: 'Xin chào', zh: '你好', usage: '通用問候' },
  { category: '問候語', viet: 'Cảm ơn nhiều', zh: '非常感謝', usage: '表達謝意' },
  { category: '問候語', viet: 'Không có gì / Không sao', zh: '不客氣 / 沒關係', usage: '禮貌回應' },
  { category: '問候語', viet: 'Tạm biệt', zh: '再見', usage: '告別' },
  { category: '交通指南', viet: 'Cho tôi đến khách sạn...', zh: '請帶我去...飯店', usage: '搭乘計程車/Grab' },
  { category: '交通指南', viet: 'Rẽ trái / Rẽ phải / Đi thẳng', zh: '左轉 / 右轉 / 直走', usage: '指引方向' },
  { category: '購物問價', viet: 'Bao nhiêu tiền?', zh: '多少錢？', usage: '買東西問價' },
  { category: '購物問價', viet: 'Có giảm giá không?', zh: '有打折嗎？', usage: '殺價用語' },
  { category: '餐飲求助', viet: 'Cho tôi xin nước lọc', zh: '請給我白開水', usage: '餐廳用餐' },
  { category: '餐飲求助', viet: 'Tôi ăn chay', zh: '我吃素', usage: '飲食需求' },
  { category: '緊急求助', viet: 'Giúp tôi với!', zh: '請幫幫我！', usage: '緊急求救' },
  { category: '緊急求助', viet: 'Bệnh viện ở đâu?', zh: '醫院在哪裡？', usage: '醫療求助' }
];

export const flashcardsDeck = [
  { id: 1, viet: 'Xin chào', zh: '你好', category: '問候', example: 'Xin chào anh!' },
  { id: 2, viet: 'Cảm ơn', zh: '謝謝', category: '禮貌', example: 'Cảm ơn bạn rất nhiều.' },
  { id: 3, viet: 'Tạm biệt', zh: '再見', category: '問候', example: 'Hẹn gặp lại, tạm biệt!' },
  { id: 4, viet: 'Bao nhiêu', zh: '多少', category: '購物', example: 'Cái này bao nhiêu?' },
  { id: 5, viet: 'Ngon quá', zh: '很好吃', category: '餐飲', example: 'Phở này ngon quá!' },
  { id: 6, viet: 'Bớt giá', zh: '殺價/降價', category: '購物', example: 'Bớt giá chút đi.' },
  { id: 7, viet: 'Nước uống', zh: '飲用水', category: '餐飲', example: 'Cho tôi nước uống.' },
  { id: 8, viet: 'Hợp đồng', zh: '合同/契約', category: '商務', example: 'Ký hợp đồng hôm nay.' },
  { id: 9, viet: 'Đối tác', zh: '合作夥伴', category: '商務', example: 'Gặp đối tác mới.' },
  { id: 10, viet: 'Sân bay', zh: '機場', category: '交通', example: 'Đi đến sân bay.' }
];

export const grammarRules = [
  {
    title: '1. 越南語基本句型 (S + V + O)',
    description: '越南語語序與中文非常相似，均為主詞 + 動詞 + 受詞。',
    example: 'Tôi (我) + ăn (吃) + cơm (飯) = 我吃飯。'
  },
  {
    title: '2. 形容詞後置原則 (Adjective Modifier Position)',
    description: '越南語的形容詞修飾名詞時，必須放在名詞的「後面」！',
    example: 'Cà phê (咖啡) + sữa (牛奶) + đá (冰) = 冰牛奶咖啡 (Cà phê sữa đá)'
  },
  {
    title: '3. 常見量詞用法 (Classifiers)',
    description: '越南語名詞前常需要量詞：Cái (物件)、Con (動物/生命體)、Chiếc (車輛/機械)、Người (人)。',
    example: 'Một cái bàn (一張桌子) | Một con mèo (一隻貓) | Một chiếc xe (一輛車)'
  },
  {
    title: '4. 時間時態助詞 (Time Markers)',
    description: 'Đang (正在) | Đã (已經) | Sẽ (將要) | Chưa (尚未)。放在動詞前方。',
    example: 'Tôi đang học tiếng Việt. (我正在學越南語。)'
  }
];

export const interactivePuzzles = [
  {
    id: 'p1',
    sentenceZh: '我正在學越南語',
    correctOrder: ['Tôi', 'đang', 'học', 'tiếng Việt'],
    words: ['đang', 'tiếng Việt', 'Tôi', 'học']
  },
  {
    id: 'p2',
    sentenceZh: '這個牛肉河粉很好吃',
    correctOrder: ['Phở bò', 'này', 'ngon', 'quá'],
    words: ['ngon', 'này', 'quá', 'Phở bò']
  },
  {
    id: 'p3',
    sentenceZh: '請給我算便宜一點',
    correctOrder: ['Bớt', 'chút', 'được', 'không'],
    words: ['chút', 'không', 'Bớt', 'được']
  }
];

export const quizzes = [
  {
    id: 'q1',
    question: '在越南語中，「Thanh Huyền」(玄聲) 的調型特徵是？',
    options: ['高升音', '低降平緩音', '急速下點頓音', '轉折聲'],
    answer: 1,
    explanation: 'Thanh Huyền 是平緩下降的溫柔低調 (311)。'
  },
  {
    id: 'q2',
    question: '南越口音中，「湯匙」通常稱為？',
    options: ['Thìa', 'Muỗng', 'Ngô', 'Mũ'],
    answer: 1,
    explanation: '北越稱 Thìa，南越稱 Muỗng。'
  },
  {
    id: 'q3',
    question: '數字 15 在越南語中正確唸法是？',
    options: ['Mười năm', 'Mười lăm', 'Hai mươi mốt', 'Mười mốt'],
    answer: 1,
    explanation: '11-19 的尾數 5 要唸作 "lăm"。'
  },
  {
    id: 'q4',
    question: '「Cà phê sữa đá」依照越南語形容詞後置順序解析為？',
    options: ['冰+牛奶+咖啡', '咖啡+牛奶+冰', '牛奶+冰+咖啡', '咖啡+冰+牛奶'],
    answer: 1,
    explanation: 'Cà phê (咖啡) + sữa (牛奶) + đá (冰)。'
  }
];
