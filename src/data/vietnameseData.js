/**
 * Comprehensive Dual-Subsystem Vietnamese Learning Dataset
 * (越語學習通雙軌完整數據庫 · 台灣教育部課綱 / iVPT / 漢越音 / 雙子系統全向支援)
 * 
 * Supports:
 * - Traditional Chinese (ZH) Mode (with Han-Viet / Hán Việt cognates & Taiwan practical context)
 * - English (EN) Mode (with IPA, Latin cognate notes, CEFR & international business context)
 */

// 1. 完整 29 字母表與音標 (Alphabet & Phonetics)
export const vietnameseAlphabet = [
  { char: 'A a', name: 'a', ipa: '[aː]', type: 'vowel', example: 'Ba', meaningZh: '父親 / 數字3', meaningEn: 'Father / Number 3', hintZh: '類似國語「阿」長母音', hintEn: 'Open central unrounded vowel, like "a" in "father"', north: '[aː]', south: '[aː]' },
  { char: 'Ă ă', name: 'á', ipa: '[a]', type: 'vowel', example: 'Ăn', meaningZh: '吃 (動詞)', meaningEn: 'To eat', hintZh: '短音 a，嘴巴張大發急促短音', hintEn: 'Short "a", similar to "u" in "cup"', north: '[a]', south: '[a]' },
  { char: 'Â â', name: 'ớ', ipa: '[ə]', type: 'vowel', example: 'Vận', meaningZh: '運氣 / 命運', meaningEn: 'Luck / Fate', hintZh: '類似國語「ㄜ」短音', hintEn: 'Short mid central vowel, like "u" in "bun"', north: '[ə]', south: '[ə]' },
  { char: 'B b', name: 'bê', ipa: '[ɓ]', type: 'consonant', example: 'Bạn', meaningZh: '朋友 / 你', meaningEn: 'Friend / You (peer)', hintZh: '內爆濁音 B，雙唇緊閉微吸氣後爆破', hintEn: 'Voiced implosive "b", tighter than English "b"', north: '[ɓ]', south: '[ɓ]' },
  { char: 'C c', name: 'xê', ipa: '[k]', type: 'consonant', example: 'Cơm', meaningZh: '米飯 / 便當', meaningEn: 'Cooked rice / Meal', hintZh: '不送氣清音，類似國語「ㄍ/ㄍㄜ」', hintEn: 'Voiceless unaspirated velar stop, like "k" in "skill"', north: '[k]', south: '[k]' },
  { char: 'D d', name: 'dê', ipa: '[z] / [j]', type: 'consonant', example: 'Dù', meaningZh: '雨傘 / 即使', meaningEn: 'Umbrella / Although', hintZh: '北越讀 [z] (像英文 Z)，南越讀 [j] (像英文 Y)', hintEn: 'North: /z/ as in "zoo"; South: /j/ as in "yes"', north: '[z] 像 Z', northEn: '[z] like Z', south: '[j] 像 Y', southEn: '[j] like Y' },
  { char: 'Đ đ', name: 'đê', ipa: '[ɗ]', type: 'consonant', example: 'Đi', meaningZh: '去 / 走', meaningEn: 'To go / Walk', hintZh: '內爆濁音 D，舌尖抵住上齒齦後微吸氣放開', hintEn: 'Voiced implosive "d", firmer than English "d"', north: '[ɗ]', south: '[ɗ]' },
  { char: 'E e', name: 'e', ipa: '[ɛ]', type: 'vowel', example: 'Em', meaningZh: '弟弟/妹妹/晚輩/你', meaningEn: 'Younger sibling / You (junior)', hintZh: '嘴巴開度較大的「誒」', hintEn: 'Open-mid front unrounded vowel, like "e" in "bed"', north: '[ɛ]', south: '[ɛ]' },
  { char: 'Ê ê', name: 'ê', ipa: '[e]', type: 'vowel', example: 'Điệu', meaningZh: '韻律 / 聲調', meaningEn: 'Melody / Rhythm', hintZh: '嘴形微扁發「ㄝ」', hintEn: 'Close-mid front unrounded vowel, like "ay" in "say"', north: '[e]', south: '[e]' },
  { char: 'G g / Gh', name: 'giê', ipa: '[ɣ]', type: 'consonant', example: 'Gà', meaningZh: '雞 / 雞肉', meaningEn: 'Chicken', hintZh: '舌根軟顎濁擦音，喉嚨後方摩擦出聲', hintEn: 'Voiced velar fricative, smooth throat vibration', north: '[ɣ]', south: '[ɣ]' },
  { char: 'H h', name: 'hát', ipa: '[h]', type: 'consonant', example: 'Học', meaningZh: '學習 (漢越: 學)', meaningEn: 'To study / Learn', hintZh: '清喉擦音，與國語「ㄏ」相同', hintEn: 'Voiceless glottal fricative, like "h" in "hat"', north: '[h]', south: '[h]' },
  { char: 'I i', name: 'i ngắn', ipa: '[i]', type: 'vowel', example: 'Đi', meaningZh: '去', meaningEn: 'Go', hintZh: '短前母音「一」', hintEn: 'Close front unrounded vowel, like "ee" in "see"', north: '[i]', south: '[i]' },
  { char: 'K k', name: 'ca', ipa: '[k]', type: 'consonant', example: 'Kéo', meaningZh: '剪刀 / 拉', meaningEn: 'Scissors / To pull', hintZh: '常搭配 i, e, ê，發不送氣 K 音', hintEn: 'Spelled before i, e, ê; unaspirated /k/', north: '[k]', south: '[k]' },
  { char: 'L l', name: 'e-lờ', ipa: '[l]', type: 'consonant', example: 'Làm', meaningZh: '做 / 工作', meaningEn: 'To do / Make / Work', hintZh: '舌尖齒齦邊音，與國語「ㄌ」相同', hintEn: 'Alveolar lateral approximant, like "l" in "love"', north: '[l]', south: '[l]' },
  { char: 'M m', name: 'em-mờ', ipa: '[m]', type: 'consonant', example: 'Mẹ', meaningZh: '母親 / 媽媽', meaningEn: 'Mother / Mom', hintZh: '雙唇鼻音，與國語「ㄇ」相同', hintEn: 'Bilabial nasal, like "m" in "mother"', north: '[m]', south: '[m]' },
  { char: 'N n', name: 'en-nờ', ipa: '[n]', type: 'consonant', example: 'Nón', meaningZh: '帽子 (越式斗笠)', meaningEn: 'Hat / Conical hat', hintZh: '舌尖鼻音，與國語「ㄋ」相同', hintEn: 'Alveolar nasal, like "n" in "name"', north: '[n]', south: '[n]' },
  { char: 'O o', name: 'o', ipa: '[ɔ]', type: 'vowel', example: 'Ong', meaningZh: '蜜蜂', meaningEn: 'Bee', hintZh: '嘴巴大圓張發「喔」', hintEn: 'Open-mid back rounded vowel, like "aw" in "saw"', north: '[ɔ]', south: '[ɔ]' },
  { char: 'Ô ô', name: 'ô', ipa: '[o]', type: 'vowel', example: 'Ô tô', meaningZh: '汽車', meaningEn: 'Automobile / Car', hintZh: '嘴形聚圓較小，發「歐」', hintEn: 'Close-mid back rounded vowel, like "o" in "boat"', north: '[o]', south: '[o]' },
  { char: 'Ơ ơ', name: 'ơ', ipa: '[əː]', type: 'vowel', example: 'Ơn', meaningZh: '恩情 / 感謝', meaningEn: 'Favor / Gratitude', hintZh: '嘴巴微開自然放鬆發「ㄜ」長音', hintEn: 'Mid central unrounded vowel, longer than â', north: '[əː]', south: '[əː]' },
  { char: 'P p', name: 'pê', ipa: '[p]', type: 'consonant', example: 'Pin', meaningZh: '電池 / 外來語', meaningEn: 'Battery / Loanwords', hintZh: '多用於外來語或字尾閉塞音 -p', hintEn: 'Voiceless bilabial stop; final -p is unreleased', north: '[p]', south: '[p]' },
  { char: 'Q q (Qu)', name: 'quy', ipa: '[kʷ]', type: 'consonant', example: 'Quá', meaningZh: '太...了 / 非常', meaningEn: 'Too / Very / Overly', hintZh: '北越讀 [kw]，南越常軟化為 [w]', hintEn: 'North: /kw/ like "quick"; South: often /w/ like "water"', north: '[kw]', south: '[w]' },
  { char: 'R r', name: 'e-rờ', ipa: '[ʐ] / [r]', type: 'consonant', example: 'Rắn', meaningZh: '蛇', meaningEn: 'Snake', hintZh: '北越讀像英文 [z]，南越捲舌彈舌 [r]', hintEn: 'North: /z/; South: rolled or retroflex /r/', north: '[z] 像 Z', northEn: '[z] like Z', south: '[r] 捲舌 R', southEn: '[r] rolled R' },
  { char: 'S s', name: 'ét-sờ', ipa: '[s] / [ʂ]', type: 'consonant', example: 'Sữa', meaningZh: '牛奶', meaningEn: 'Milk', hintZh: '北越讀平舌 [s]，南越捲舌 [ʂ] (像 sh)', hintEn: 'North: /s/ as in "sun"; South: retroflex /ʂ/ like "shine"', north: '[s] 平舌', northEn: '[s] flat', south: '[ʂ] 捲舌 Sh', southEn: '[ʂ] retroflex Sh' },
  { char: 'T t', name: 'tê', ipa: '[t]', type: 'consonant', example: 'Tôi', meaningZh: '我 (通用自稱)', meaningEn: 'I / Me (formal / standard)', hintZh: '不吐氣的 T 音，類似國語「ㄉ」', hintEn: 'Voiceless unaspirated /t/, like "t" in "stop"', north: '[t]', south: '[t]' },
  { char: 'U u', name: 'u', ipa: '[u]', type: 'vowel', example: 'Uống', meaningZh: '喝 (動詞)', meaningEn: 'To drink', hintZh: '嘴唇嘟圓發「烏」', hintEn: 'Close back rounded vowel, like "oo" in "moon"', north: '[u]', south: '[u]' },
  { char: 'Ư ư', name: 'ư', ipa: '[ɨ]', type: 'vowel', example: 'Ước', meaningZh: '願望 / 估算', meaningEn: 'Wish / Estimate', hintZh: '微笑扁唇同時喉頭發「烏」', hintEn: 'Close central unrounded vowel, "u" with flat smile lips', north: '[ɨ]', south: '[ɨ]' },
  { char: 'V v', name: 'vê', ipa: '[v] / [j]', type: 'consonant', example: 'Vào', meaningZh: '進入 (動詞)', meaningEn: 'To enter / Go into', hintZh: '北越標準咬唇 [v]，南越常讀成 [j] (像 Y)', hintEn: 'North: labiodental /v/; South: palatal /j/ like "yes"', north: '[v] 咬唇', northEn: '[v] labiodental', south: '[j] 像 Y', southEn: '[j] like Y' },
  { char: 'X x', name: 'ích-xờ', ipa: '[s]', type: 'consonant', example: 'Xe', meaningZh: '車子 / 交通工具', meaningEn: 'Vehicle / Car / Bike', hintZh: '平舌齒音，類似國語「ㄙ」或「西」', hintEn: 'Voiceless alveolar fricative /s/ as in "six"', north: '[s]', south: '[s]' },
  { char: 'Y y', name: 'i dài', ipa: '[i]', type: 'vowel', example: 'Yêu', meaningZh: '愛 / 喜歡', meaningEn: 'To love', hintZh: '長母音「一」，常與母音結合成雙母音', hintEn: 'Long "i", identical in sound to "i ngắn" [i]', north: '[i]', south: '[i]' }
];

// 2. 六大聲調 (6 Tones with Pitch Contours & Audio Synth)
export const vietnameseTones = [
  {
    id: 'ngang',
    name: 'Thanh Ngang (平聲)',
    nameZh: 'Thanh Ngang (平聲)',
    nameEn: 'Level Tone (Thanh Ngang)',
    symbol: '無符號 (Ma)',
    symbolZh: '無符號 (Ma)',
    symbolEn: 'No mark (Ma)',
    pitchDescriptionZh: '中高平音 (444)',
    pitchDescriptionEn: 'Mid-high Level (444)',
    contour: '444 (平直不升不降)',
    contourZh: '444 (平直不升不降)',
    contourEn: '444 (flat, no rise or fall)',
    example: 'Ma',
    meaningZh: '鬼',
    meaningEn: 'Ghost',
    hintZh: '類似國語第一聲 (陰平)，聲音平穩拉長',
    hintEn: 'Like singing a steady musical note at medium pitch',
    color: '#3b82f6'
  },
  {
    id: 'huyen',
    name: 'Thanh Huyền (玄聲/降調)',
    nameZh: 'Thanh Huyền (玄聲/降調)',
    nameEn: 'Falling Tone (Thanh Huyền)',
    symbol: '重音符號 ` (Mà)',
    symbolZh: '重音符號 ` (Mà)',
    symbolEn: 'Grave accent ` (Mà)',
    pitchDescriptionZh: '低降音 (311)',
    pitchDescriptionEn: 'Low Falling (311)',
    contour: '311 (平緩柔和向下傾斜)',
    contourZh: '311 (平緩柔和向下傾斜)',
    contourEn: '311 (gentle downward slope)',
    example: 'Mà',
    meaningZh: '但是 / 卻',
    meaningEn: 'But / Yet',
    hintZh: '類似國語輕柔的四聲，但起音較低、結尾溫柔',
    hintEn: 'Low, smooth falling tone, gentle sigh pitch',
    color: '#10b981'
  },
  {
    id: 'hoi',
    name: 'Thanh Hỏi (問聲/勾調)',
    nameZh: 'Thanh Hỏi (問聲/勾調)',
    nameEn: 'Dipping-Rising Tone (Thanh Hỏi)',
    symbol: '問號符號 ̉ (Mả)',
    symbolZh: '問號符號 ̉ (Mả)',
    symbolEn: 'Hook above ̉ (Mả)',
    pitchDescriptionZh: '曲折音 (313)',
    pitchDescriptionEn: 'Dipping & Rising (313)',
    contour: '313 (先平緩微降後稍微揚起)',
    contourZh: '313 (先平緩微降後稍微揚起)',
    contourEn: '313 (dips low, then rises)',
    example: 'Mả',
    meaningZh: '墳墓',
    meaningEn: 'Tomb / Grave',
    hintZh: '類似國語第三聲 (上聲) 的後半段轉折',
    hintEn: 'Starts mid, dips low, then slightly rises as in questioning',
    color: '#f59e0b'
  },
  {
    id: 'nga',
    name: 'Thanh Ngã (跌聲/波浪調)',
    nameZh: 'Thanh Ngã (跌聲/波浪調)',
    nameEn: 'Glottalized High Tone (Thanh Ngã)',
    symbol: '波浪符號 ̃ (Mã)',
    symbolZh: '波浪符號 ̃ (Mã)',
    symbolEn: 'Tilde ̃ (Mã)',
    pitchDescriptionZh: '高升聲門緊縮音 (35)',
    pitchDescriptionEn: 'High Rising Glottalized (35)',
    contour: '35 (中途喉頭瞬間緊閉後向上衝出)',
    contourZh: '35 (中途喉頭瞬間緊閉後向上衝出)',
    contourEn: '35 (glottal stop, then sharp rise)',
    example: 'Mã',
    meaningZh: '馬 (漢越) / 代碼',
    meaningEn: 'Horse / Code',
    hintZh: '北越有明顯的喉塞停頓波浪；南越通常讀成類似 Hỏi (問聲)',
    hintEn: 'Rises high with a brief mid-throat glottal stop hiccup',
    color: '#ec4899'
  },
  {
    id: 'sac',
    name: 'Thanh Sắc (銳聲/升調)',
    nameZh: 'Thanh Sắc (銳聲/升調)',
    nameEn: 'High Rising Tone (Thanh Sắc)',
    symbol: '撇號 ́ (Má)',
    symbolZh: '撇號 ́ (Má)',
    symbolEn: 'Acute accent ́ (Má)',
    pitchDescriptionZh: '陡峭高升音 (35)',
    pitchDescriptionEn: 'Sharp High Rising (35)',
    contour: '35 (從中音急速向上爬升)',
    contourZh: '35 (從中音急速向上爬升)',
    contourEn: '35 (rapid climb from mid pitch)',
    example: 'Má',
    meaningZh: '媽媽 (南越) / 臉頰',
    meaningEn: 'Mother (South) / Cheek',
    hintZh: '類似國語第二聲 (陽平) 或英文問句結尾的快速上揚',
    hintEn: 'Fast rising sharp pitch, like asking "What?!" in surprise',
    color: '#ef4444'
  },
  {
    id: 'nang',
    name: 'Thanh Nặng (重聲/下點調)',
    nameZh: 'Thanh Nặng (重聲/下點調)',
    nameEn: 'Heavy Drop Tone (Thanh Nặng)',
    symbol: '下加點 ̣ (Mạ)',
    symbolZh: '下加點 ̣ (Mạ)',
    symbolEn: 'Dot below ̣ (Mạ)',
    pitchDescriptionZh: '短促急降頓音 (21)',
    pitchDescriptionEn: 'Short Heavy Constricted (21)',
    contour: '21 (腹部收力短促下頓)',
    contourZh: '21 (腹部收力短促下頓)',
    contourEn: '21 (short, abrupt drop with tension)',
    example: 'Mạ',
    meaningZh: '秧苗 / 鍍金',
    meaningEn: 'Rice seedling / Plating',
    hintZh: '發音極為短促，腹部用力急速截斷氣流',
    hintEn: 'Extremely short, dropped deep with abrupt vocal cutoff',
    color: '#8b5cf6'
  }
];

// 3. 南北越口音對比 (Accent Comparison: Hanoi vs Saigon)
export const accentDifferences = {
  overviewZh: '越南語三大方言體系：北越（河內首都標音）、中越（順化歷史音）與南越（胡志明市商業通行音）。在台商務與日常生活以北越音與南越音最為普及。',
  overviewEn: 'Vietnamese features three major dialect regions: Northern (Hanoi standard), Central (Hue heritage), and Southern (Ho Chi Minh City commerce). Learners primarily choose between Northern clarity and Southern conversational cadence.',
  phoneticRules: [
    { 
      rule: 'd, gi, r', 
      northZh: 'D, Gi, R 全讀 [z] (像英文 Z 音)', 
      northEn: 'All pronounced as /z/ (like English "zoo")',
      southZh: 'D, Gi 讀 [j] (像 Y 音)；R 讀 [r] 滾舌捲舌音', 
      southEn: 'D, Gi pronounced as /j/ ("yes"); R as rolled /r/',
      example: 'Rắn (蛇)', 
      audioText: 'Rắn' 
    },
    { 
      rule: 'v', 
      northZh: '讀標準咬唇 [v] 音', 
      northEn: 'Clear labiodental /v/ (lip against teeth)',
      southZh: '常讀成 [j] (像 Y 音) 或輕微軟顎化 [v]', 
      southEn: 'Often pronounced as /j/ ("yes") or merged with /w/',
      example: 'Vào (進去)', 
      audioText: 'Vào' 
    },
    { 
      rule: 'tr / ch', 
      northZh: 'Tr 與 Ch 不分，皆發平舌 [ch]', 
      northEn: 'Tr and Ch are merged into flat /tɕ/ (like "ch")',
      southZh: 'Tr 捲舌清晰 [tr]；Ch 發平舌 [ch]', 
      southEn: 'Tr is retroflex /ʈ/ while Ch is sharp palatal /c/',
      example: 'Trà (茶葉)', 
      audioText: 'Trà' 
    },
    { 
      rule: 's / x', 
      northZh: 'S 與 X 不分，皆發平舌 [s]', 
      northEn: 'S and X are both pronounced as flat /s/',
      southZh: 'S 發捲舌 [ʂ] (像 sh)；X 發平舌 [s]', 
      southEn: 'S is retroflex /ʂ/ ("shine"); X is flat /s/ ("sun")',
      example: 'Sữa (牛奶)', 
      audioText: 'Sữa' 
    },
    { 
      rule: '聲調 Hỏi / Ngã', 
      northZh: '問聲(Hỏi)與跌聲(Ngã)區分極清晰，跌聲有喉塞斷音', 
      northEn: 'Clear distinction between Hỏi (dip-rise) and Ngã (glottal break)',
      southZh: '南越口音中 Hỏi 與 Ngã 幾乎合併為同一種轉折問聲', 
      southEn: 'Hỏi and Ngã tones are virtually merged into one smooth dipping tone',
      example: 'Sữa vs Sửa', 
      audioText: 'Sữa' 
    },
    { 
      rule: '字尾 -n / -ng, -t / -c', 
      northZh: '字尾鼻音與塞音發音位置精準對應', 
      northEn: 'Final consonants strictly follow written spelling',
      southZh: '部分前鼻音 -n 會後移為 -ng；-t 轉為 -c', 
      southEn: 'Final -n often sounds like -ng; -t sounds like -k after back vowels',
      example: 'Bánh (餅)', 
      audioText: 'Bánh' 
    }
  ],
  wordComparisonMatrix: [
    { north: 'Thìa', south: 'Muỗng', meaningZh: '湯匙', meaningEn: 'Spoon', category: '餐具 / Utensils' },
    { north: 'Ngô', south: 'Bắp', meaningZh: '玉米', meaningEn: 'Corn / Maize', category: '食物 / Food' },
    { north: 'Dứa', south: 'Thơm / Khóm', meaningZh: '鳳梨', meaningEn: 'Pineapple', category: '水果 / Fruit' },
    { north: 'Đậu phụ', south: 'Tàu hũ', meaningZh: '豆腐', meaningEn: 'Tofu / Bean curd', category: '食物 / Food' },
    { north: 'Chè', south: 'Trà', meaningZh: '茶水 / 甜品', meaningEn: 'Tea / Sweet soup', category: '飲品 / Drink' },
    { north: 'Vào', south: 'Vô', meaningZh: '進入 (動詞)', meaningEn: 'To enter', category: '動詞 / Verb' },
    { north: 'Béo', south: 'Mập', meaningZh: '胖 (形容人體形)', meaningEn: 'Fat / Chubby', category: '形容詞 / Adjective' },
    { north: 'Ốm', south: 'Bệnh', meaningZh: '生病 (南越 Ốm 專指瘦)', meaningEn: 'Sick (In South, Ốm means thin)', category: '健康 / Health' },
    { north: 'Mũ', south: 'Nón', meaningZh: '帽子', meaningEn: 'Hat / Cap', category: '服飾 / Clothing' },
    { north: 'Chăn', south: 'Mền', meaningZh: '棉被', meaningEn: 'Blanket', category: '居家 / Home' },
    { north: 'Điện thoại', south: 'ĐTDĐ', meaningZh: '手機 / 行動電話', meaningEn: 'Mobile phone', category: '科技 / Tech' },
    { north: 'Nhé', south: 'Nha', meaningZh: '語氣詞 (好嗎 / 喔)', meaningEn: 'Particle (okay? / will you?)', category: '日常 / Particle' }
  ]
};

// 4. 數字、貨幣換算與商務金融 (Numbers & VND Currency Simulator)
export const numbersAndCurrency = {
  baseNumbers: [
    { num: 0, viet: 'Không', zh: '零', en: 'Zero' },
    { num: 1, viet: 'Một', zh: '一', en: 'One' },
    { num: 2, viet: 'Hai', zh: '二', en: 'Two' },
    { num: 3, viet: 'Ba', zh: '三', en: 'Three' },
    { num: 4, viet: 'Bốn', zh: '四', en: 'Four' },
    { num: 5, viet: 'Năm', zh: '五', en: 'Five' },
    { num: 6, viet: 'Sáu', zh: '六', en: 'Six' },
    { num: 7, viet: 'Bảy', zh: '七', en: 'Seven' },
    { num: 8, viet: 'Tám', zh: '八', en: 'Eight' },
    { num: 9, viet: 'Chín', zh: '九', en: 'Nine' },
    { num: 10, viet: 'Mười', zh: '十', en: 'Ten' }
  ],
  unitsScale: [
    { unit: 'Trăm (百 / Hundred)', scale: '100', viet: 'Một trăm', zh: '一百', en: 'One hundred' },
    { unit: 'Nghìn / Ngàn (千 / Thousand)', scale: '1,000', viet: 'Một nghìn / Một ngàn', zh: '一千 [北:Nghìn / 南:Ngàn]', en: 'One thousand' },
    { unit: 'Triệu (百萬 / Million)', scale: '1,000,000', viet: 'Một triệu', zh: '一百萬 (越文以百萬為階)', en: 'One million' },
    { unit: 'Tỷ (十億 / Billion)', scale: '1,000,000,000', viet: 'Một tỷ', zh: '十億 (商業與房產常用)', en: 'One billion' },
    { unit: 'Mười Tỷ (百億 / 10 Billions)', scale: '10,000,000,000', viet: 'Mười tỷ', zh: '一百億 (企業投資資本)', en: 'Ten billion' }
  ],
  priceBrackets: [
    {
      rangeZh: '10,000 - 99,000 VND (街頭小吃、路邊攤、冰咖啡)',
      rangeEn: '10,000 - 99,000 VND (Street Food, Local Cafe, Snacks)',
      examples: [
        { amount: '25.000đ', shortcut: '25k', viet: 'Hai mươi lăm nghìn đồng', zh: '2.5 萬盾 (約 NT$32 / $1 USD)', en: '25k VND (Iced Coffee, ~$1 USD)' },
        { amount: '45.000đ', shortcut: '45k', viet: 'Bốn mươi lăm nghìn đồng', zh: '4.5 萬盾 (一碗傳統河粉, 約 NT$58)', en: '45k VND (Beef Pho bowl, ~$1.8 USD)' },
        { amount: '60.000đ', shortcut: '60k', viet: 'Sáu mươi nghìn đồng', zh: '6 萬盾 (連鎖店特調咖啡, 約 NT$77)', en: '60k VND (Specialty Highlands Coffee)' }
      ]
    },
    {
      rangeZh: '100,000 - 999,000 VND (餐廳聚餐、Grab/Taxi、超市採買)',
      rangeEn: '100,000 - 999,000 VND (Restaurant Dining, Grab Rides, Groceries)',
      examples: [
        { amount: '150.000đ', shortcut: '150k', viet: 'Một trăm năm mươi nghìn đồng', zh: '15 萬盾 (市區計程車, 約 NT$192)', en: '150k VND (City center Grab ride, ~$6 USD)' },
        { amount: '350.000đ', shortcut: '350k', viet: 'Ba trăm năm mươi nghìn đồng', zh: '35 萬盾 (海鮮餐廳單人套餐, 約 NT$448)', en: '350k VND (Seafood restaurant dinner)' },
        { amount: '800.000đ', shortcut: '800k', viet: 'Tám trăm nghìn đồng', zh: '80 萬盾 (家庭超市一週採購, 約 NT$1,025)', en: '800k VND (Weekly supermarket shopping)' }
      ]
    },
    {
      rangeZh: '1,000,000 - 999,000,000 VND (機票、租屋、手機家電、工廠採購)',
      rangeEn: '1,000,000 - 999,000,000 VND (Rent, Flights, Electronics, Procurement)',
      examples: [
        { amount: '5.500.000đ', shortcut: '5.5 củ', viet: 'Năm triệu năm trăm nghìn đồng', zh: '550 萬盾 (台越來回機票/手機, 約 NT$7,050)', en: '5.5 Million VND (Roundtrip flight / Smartphone)' },
        { amount: '12.000.000đ', shortcut: '12 củ', viet: 'Mười hai triệu đồng', zh: '1,200 萬盾 (胡志明一郡單人套房月租, 約 NT$15,380)', en: '12 Million VND (Monthly apartment rent)' },
        { amount: '350.000.000đ', shortcut: '350 triệu', viet: 'Ba trăm năm mươi triệu đồng', zh: '3.5 億盾 (汽車/小型工廠設備, 約 NT$448,000)', en: '350 Million VND (Automobile / Machinery)' }
      ]
    },
    {
      rangeZh: '1,000,000,000 - 10,000,000,000 VND (銀行定存、不動產、外資設立)',
      rangeEn: '1,000,000,000 - 10,000,000,000 VND (Real Estate, Corporate Capital, FDI)',
      examples: [
        { amount: '1.200.000.000đ', shortcut: '1.2 tỷ', viet: 'Một tỷ hai trăm triệu đồng', zh: '12 億盾 (公寓套房投資, 約 NT$153.8 萬)', en: '1.2 Billion VND (Condo studio investment)' },
        { amount: '5.000.000.000đ', shortcut: '5 tỷ', viet: 'Năm tỷ đồng', zh: '50 億盾 (銀行企業商業貸款, 約 NT$641 萬)', en: '5 Billion VND (Commercial business credit line)' },
        { amount: '10.000.000.000đ', shortcut: '10 tỷ', viet: 'Mười tỷ đồng', zh: '100 億盾 (外商投資登記資本額, 約 NT$1,282 萬)', en: '10 Billion VND (FDI Registered capital)' }
      ]
    }
  ],
  bankingDialogues: [
    {
      titleZh: '1. 臨櫃開立個人帳戶 (Mở tài khoản ngân hàng)',
      titleEn: '1. Opening a Bank Account (Mở tài khoản ngân hàng)',
      lines: [
        { speaker: 'Khách hàng', viet: 'Cho tôi mở một tài khoản ngân hàng cá nhân.', zh: '我要辦理一個個人銀行帳戶。', en: 'I would like to open a personal bank account.' },
        { speaker: 'Giao dịch viên', viet: 'Anh vui lòng cho tôi xem hộ chiếu và visa còn hạn ạ.', zh: '請出示您的護照與有效簽證。', en: 'Please show me your valid passport and visa.' },
        { speaker: 'Khách hàng', viet: 'Gửi cô hộ chiếu và hợp đồng lao động của tôi.', zh: '這是我的護照與工作合約。', en: 'Here are my passport and employment contract.' },
        { speaker: 'Giao dịch viên', viet: 'Anh điền vào tờ khai này và ký tên ở đây nhé.', zh: '請填寫這張申請表並在此簽名。', en: 'Please fill in this application form and sign here.' }
      ]
    },
    {
      titleZh: '2. 大額商業匯款與轉帳 (Chuyển khoản số tiền lớn)',
      titleEn: '2. Large Wire Transfer (Chuyển khoản số tiền lớn)',
      lines: [
        { speaker: 'Khách hàng', viet: 'Tôi muốn chuyển khoản hai tỷ đồng cho công ty đối tác.', zh: '我想轉帳二十億越南盾 (2,000,000,000 VND) 給合作公司。', en: 'I want to transfer 2 billion VND to our partner company.' },
        { speaker: 'Giao dịch viên', viet: 'Dạ, anh vui lòng điền số tài khoản thụ hưởng và nội dung chuyển tiền.', zh: '好的，請填寫收款帳號與轉帳備註內容。', en: 'Yes sir, please fill in the beneficiary account number and remarks.' },
        { speaker: 'Khách hàng', viet: 'Phí chuyển khoản là bao nhiêu?', zh: '轉帳手續費是多少？', en: 'How much is the bank transfer fee?' },
        { speaker: 'Giao dịch viên', viet: 'Phí là mười một nghìn đồng đã bao gồm thuế VAT ạ.', zh: '手續費包含加值稅共 11,000 越南盾。', en: 'The fee is 11,000 VND inclusive of VAT.' }
      ]
    },
    {
      titleZh: '3. 定期存款與利息諮詢 (Gửi tiết kiệm & Lãi suất)',
      titleEn: '3. Term Deposit & Interest Rates (Gửi tiết kiệm & Lãi suất)',
      lines: [
        { speaker: 'Khách hàng', viet: 'Lãi suất gửi tiết kiệm kỳ hạn mười hai tháng là bao nhiêu?', zh: '十二個月期的定期存款年利率是多少？', en: 'What is the 12-month fixed deposit interest rate?' },
        { speaker: 'Giao dịch viên', viet: 'Hiện tại lãi suất là năm phẩy năm phần trăm một năm ạ.', zh: '目前年利率是 5.5%。', en: 'Currently the rate is 5.5% per annum.' },
        { speaker: 'Khách hàng', viet: 'Tôi muốn gửi năm tỷ đồng kỳ hạn một năm.', zh: '我想辦理五十億盾 (5,000,000,000 VND) 的一年期定存。', en: 'I would like to deposit 5 billion VND for one year.' },
        { speaker: 'Giao dịch viên', viet: 'Dạ, tôi sẽ làm sổ tiết kiệm ngay cho anh.', zh: '好的，我馬上為您辦理定存存摺。', en: 'Certainly, I will issue your passbook right away.' }
      ]
    }
  ],
  specialRules: [
    { ruleZh: '11-19 尾數 5', ruleEn: 'Numbers 11-19 ending with 5', textZh: '5 讀作 "Lăm" 而不是 "Năm"（例如：15 = Mười lăm）', textEn: '5 becomes "Lăm" instead of "Năm" (e.g. 15 = Mười lăm)' },
    { ruleZh: '21-91 尾數 1', ruleEn: 'Numbers 21-91 ending with 1', textZh: '1 讀作 "Mốt" 而不是 "Một"（例如：21 = Hai mươi mốt）', textEn: '1 becomes "Mốt" instead of "Một" (e.g. 21 = Hai mươi mốt)' },
    { ruleZh: '20-90 的 十', ruleEn: 'Tens 20, 30... 90', textZh: '10 讀作 "Mươi"（平聲）而不是 "Mười"（例如：30 = Ba mươi）', textEn: '10 becomes flat tone "Mươi" instead of "Mười" (e.g. 30 = Ba mươi)' },
    { ruleZh: '百/千/萬/億/十億', ruleEn: 'Scale Units', textZh: 'Hundred = Trăm | Thousand = Nghìn (北)/Ngàn (南) | Million = Triệu | Billion = Tỷ', textEn: 'Hundred = Trăm | Thousand = Nghìn/Ngàn | Million = Triệu | Billion = Tỷ' },
    { ruleZh: '日常俗稱語', ruleEn: 'Slang Currency Terms', textZh: '年輕人口語 "50k" = 50.000đ；"1 củ" = 100萬盾；"1 cọc/cây" = 1億盾/1,000萬盾', textEn: 'Colloquial "50k" = 50,000 VND; "1 củ" = 1M VND; "1 cây" = 10M/100M VND' }
  ]
};

// 5. 漢越音百字根庫 (Hán Việt Root Explorer - 40%-70% of Vietnamese Vocab)
export const hanVietRoots = [
  {
    han: '國 (Guó)',
    root: 'Quốc',
    meaningZh: '國家、疆域',
    meaningEn: 'Country, Nation, State',
    compounds: [
      { viet: 'Quốc gia', zh: '國家', en: 'Nation / Country' },
      { viet: 'Quốc tế', zh: '國際', en: 'International' },
      { viet: 'Trung Quốc', zh: '中國', en: 'China' },
      { viet: 'Hàn Quốc', zh: '韓國', en: 'South Korea' },
      { viet: 'Quốc tịch', zh: '國籍', en: 'Nationality' }
    ]
  },
  {
    han: '學 (Xué)',
    root: 'Học',
    meaningZh: '學習、學科',
    meaningEn: 'To study, Academic field',
    compounds: [
      { viet: 'Học sinh', zh: '學生', en: 'Student (K-12)' },
      { viet: 'Đại học', zh: '大學', en: 'University' },
      { viet: 'Học tập', zh: '學習', en: 'Study / Learn' },
      { viet: 'Học viện', zh: '學院', en: 'Academy / Institute' },
      { viet: 'Khoa học', zh: '科學', en: 'Science' }
    ]
  },
  {
    han: '經 (Jīng)',
    root: 'Kinh',
    meaningZh: '經營、經濟、經典',
    meaningEn: 'Manage, Economy, Classic',
    compounds: [
      { viet: 'Kinh tế', zh: '經濟', en: 'Economy' },
      { viet: 'Kinh doanh', zh: '經營 / 商業', en: 'Business / Commerce' },
      { viet: 'Kinh nghiệm', zh: '經驗', en: 'Experience' },
      { viet: 'Kinh điển', zh: '經典', en: 'Classic' }
    ]
  },
  {
    han: '濟 (Jì)',
    root: 'Tế',
    meaningZh: '救濟、交際、國際',
    meaningEn: 'Aid, Social, Across',
    compounds: [
      { viet: 'Kinh tế', zh: '經濟', en: 'Economy' },
      { viet: 'Quốc tế', zh: '國際', en: 'International' },
      { viet: 'Thực tế', zh: '實際', en: 'Reality / Practical' },
      { viet: 'Cứu tế', zh: '救濟', en: 'Relief / Aid' }
    ]
  },
  {
    han: '生 (Shēng)',
    root: 'Sinh',
    meaningZh: '生命、出生、生活',
    meaningEn: 'Life, Birth, Student',
    compounds: [
      { viet: 'Sinh viên', zh: '大學生', en: 'University student' },
      { viet: 'Sinh nhật', zh: '生日', en: 'Birthday' },
      { viet: 'Cuộc sống', zh: '生活', en: 'Life' },
      { viet: 'Vệ sinh', zh: '衛生', en: 'Hygiene / Restroom' },
      { viet: 'Hy sinh', zh: '犧牲', en: 'Sacrifice' }
    ]
  },
  {
    han: '公 (Gōng)',
    root: 'Công',
    meaningZh: '公家、工作、公眾',
    meaningEn: 'Public, Work, Industry',
    compounds: [
      { viet: 'Công ty', zh: '公司', en: 'Company / Corporation' },
      { viet: 'Công nhân', zh: '工人 / 勞工', en: 'Worker / Laborer' },
      { viet: 'Công việc', zh: '工作 / 事務', en: 'Job / Task' },
      { viet: 'Công viên', zh: '公園', en: 'Public park' },
      { viet: 'Công nghệ', zh: '科技 / 工藝', en: 'Technology' }
    ]
  },
  {
    han: '司 (Sī)',
    root: 'Ty',
    meaningZh: '掌理、所屬機構',
    meaningEn: 'Manage, Bureau, Office',
    compounds: [
      { viet: 'Công ty', zh: '公司', en: 'Company' },
      { viet: 'Tổng công ty', zh: '總公司 / 集團', en: 'Corporation group' },
      { viet: 'Ty cảnh sát', zh: '警察局 (舊稱)', en: 'Police station' }
    ]
  },
  {
    han: '病 (Bìng)',
    root: 'Bệnh',
    meaningZh: '疾病、病患',
    meaningEn: 'Disease, Sickness, Patient',
    compounds: [
      { viet: 'Bệnh viện', zh: '醫院', en: 'Hospital' },
      { viet: 'Bệnh nhân', zh: '病人 / 患者', en: 'Patient' },
      { viet: 'Bệnh tật', zh: '疾病', en: 'Illness' }
    ]
  },
  {
    han: '院 (Yuàn)',
    root: 'Viện',
    meaningZh: '機構、大廈院所',
    meaningEn: 'Institute, Hospital, Hall',
    compounds: [
      { viet: 'Bệnh viện', zh: '醫院', en: 'Hospital' },
      { viet: 'Học viện', zh: '學院', en: 'Academy' },
      { viet: 'Viện bảo tàng', zh: '博物館', en: 'Museum' }
    ]
  },
  {
    han: '心 (Xīn)',
    root: 'Tâm',
    meaningZh: '心靈、中心',
    meaningEn: 'Heart, Mind, Center',
    compounds: [
      { viet: 'Trung tâm', zh: '中心', en: 'Center' },
      { viet: 'Quan tâm', zh: '關心', en: 'To care / Pay attention' },
      { viet: 'Yên tâm', zh: '安心', en: 'Feel at ease' },
      { viet: 'Tâm lý', zh: '心理', en: 'Psychology' }
    ]
  }
];

// 6. 越南語人稱代詞與稱謂推算器 (Kinship & Pronoun Calculator)
export const pronounKinshipData = [
  {
    pronoun: 'Anh',
    gender: 'male',
    relativeAge: 'older',
    descZh: '年齡略長於自己的男性 (哥哥輩/同輩較長男士/年輕男士禮貌稱呼/妻子對丈夫稱呼)',
    descEn: 'Older brother / Male slightly older / Polite for young men / Wife to husband',
    mySelfZh: 'Em (我)',
    mySelfEn: 'Em (I/me)'
  },
  {
    pronoun: 'Chị',
    gender: 'female',
    relativeAge: 'older',
    descZh: '年齡略長於自己的女性 (姐姐輩/同輩較長女士/年輕女士禮貌稱呼)',
    descEn: 'Older sister / Female slightly older / Polite address for women',
    mySelfZh: 'Em (我)',
    mySelfEn: 'Em (I/me)'
  },
  {
    pronoun: 'Em',
    gender: 'any',
    relativeAge: 'younger',
    descZh: '年齡小於自己的男女 (弟弟、妹妹/晚輩/部屬/丈夫對妻子稱呼)',
    descEn: 'Younger sibling / Junior / Subordinate / Husband to wife',
    mySelfZh: 'Anh (男稱我) / Chị (女稱我)',
    mySelfEn: 'Anh (if male) / Chị (if female)'
  },
  {
    pronoun: 'Chú',
    gender: 'male',
    relativeAge: 'father_younger',
    descZh: '叔叔輩 (比父母年紀小的男性長輩/保全/計程車司機長輩)',
    descEn: 'Uncle (younger than parents) / Elder male service worker',
    mySelfZh: 'Cháu / Con (我/晚輩/晚輩孩子)',
    mySelfEn: 'Cháu (Nephew/Niece)'
  },
  {
    pronoun: 'Cô',
    gender: 'female',
    relativeAge: 'father_younger_female',
    descZh: '姑姑/阿姨輩 (比父母年紀小的女性長輩/女性老師/店員女士)',
    descEn: 'Aunt (younger than parents) / Female teacher / Polite for ladies',
    mySelfZh: 'Cháu / Em (學生對老師)',
    mySelfEn: 'Cháu (Niece/Nephew) / Em (Student)'
  },
  {
    pronoun: 'Bác',
    gender: 'any',
    relativeAge: 'father_older',
    descZh: '伯父/伯母 (年紀比父母大的男女長輩)',
    descEn: 'Uncle/Aunt older than one’s parents / Respectful elder',
    mySelfZh: 'Cháu (晚輩/侄子)',
    mySelfEn: 'Cháu (Grandchild/Junior)'
  },
  {
    pronoun: 'Ông',
    gender: 'male',
    relativeAge: 'grandpa',
    descZh: '爺爺/外公輩 (年長男性/正式商務尊稱「先生/閣下」)',
    descEn: 'Grandfather / Elderly gentleman / Mr. in formal business',
    mySelfZh: 'Cháu (孫輩) / Tôi (正式商務)',
    mySelfEn: 'Cháu / Tôi (Formal)'
  },
  {
    pronoun: 'Bà',
    gender: 'female',
    relativeAge: 'grandma',
    descZh: '奶奶/外婆輩 (年長女性/正式商務尊稱「女士/夫人」)',
    descEn: 'Grandmother / Elderly lady / Mrs./Madam in formal business',
    mySelfZh: 'Cháu (孫輩) / Tôi (正式商務)',
    mySelfEn: 'Cháu / Tôi (Formal)'
  },
  {
    pronoun: 'Bạn',
    gender: 'any',
    relativeAge: 'same',
    descZh: '年齡相仿的朋友/同學/平輩 (無性別區分)',
    descEn: 'Friend / Peer / Classmate of similar age',
    mySelfZh: 'Tôi (我) / Mình (親切的我)',
    mySelfEn: 'Tôi / Mình'
  }
];

// 7. 五大階梯多情境雙語會話 (5-Stage Situational Dialogues)
export const multiScenarios = [
  {
    category: 'stage1',
    stageNameZh: '階段 1：零基礎破冰 (A1 / 越語初發)',
    stageNameEn: 'Stage 1: Absolute Beginner (iVPT A1)',
    titleZh: '日常打招呼與自我介紹 (Chào hỏi & Giới thiệu)',
    titleEn: 'Greetings & Self Introduction',
    dialogues: [
      {
        id: 's1_d1',
        nameZh: '初次見面 (Gặp nhau lần đầu)',
        nameEn: 'Meeting for the First Time',
        lines: [
          { speaker: 'Nam', viet: 'Xin chào! Tôi là Nam. Rất vui được gặp bạn.', zh: '你好！我是 Nam。很高興認識你。', en: 'Hello! I am Nam. Nice to meet you.' },
          { speaker: 'Lan', viet: 'Chào anh Nam! Em là Lan. Anh là người nước nào?', zh: 'Nam 哥你好！我是 Lan。你是哪國人？', en: 'Hello Nam! I am Lan. Which country are you from?' },
          { speaker: 'Nam', viet: 'Tôi là người Đài Loan. Còn em?', zh: '我是台灣人。那你呢？', en: 'I am Taiwanese. And you?' },
          { speaker: 'Lan', viet: 'Em là người Việt Nam. Anh học tiếng Việt lâu chưa?', zh: '我是越南人。你學越南語很久了嗎？', en: 'I am Vietnamese. Have you been learning Vietnamese for long?' },
          { speaker: 'Nam', viet: 'Tôi mới học được hai tháng thôi.', zh: '我才剛學了兩個月而已。', en: 'I have only learned for two months.' }
        ]
      }
    ]
  },
  {
    category: 'stage2',
    stageNameZh: '階段 2：生存餐飲與問路 (A2 / 初級流利)',
    stageNameEn: 'Stage 2: Survival & Dining (iVPT A2)',
    titleZh: '餐廳點餐與交通搭車 (Nhà hàng & Giao thông)',
    titleEn: 'Restaurant Ordering & Transportation',
    dialogues: [
      {
        id: 's2_d1',
        nameZh: '點牛肉河粉與冰奶咖 (Gọi Phở & Cà phê)',
        nameEn: 'Ordering Pho & Iced Milk Coffee',
        lines: [
          { speaker: 'Khách', viet: 'Em ơi! Cho anh xem thực đơn.', zh: '服務員！給我看一下菜單。', en: 'Excuse me! Please show me the menu.' },
          { speaker: 'Nhân viên', viet: 'Dạ, thực đơn đây ạ. Anh dùng gì?', zh: '好的，菜單在這裡。哥想點什麼？', en: 'Here is the menu. What would you like to order?' },
          { speaker: 'Khách', viet: 'Cho anh một tô phở bò tái và một ly cà phê sữa đá.', zh: '給我一碗半熟牛肉河粉和一杯冰牛奶咖啡。', en: 'Please give me a bowl of rare beef pho and an iced milk coffee.' },
          { speaker: 'Nhân viên', viet: 'Anh có ăn hành và rau thơm không ạ?', zh: '哥要加蔥和香菜嗎？', en: 'Do you eat scallions and herbs?' },
          { speaker: 'Khách', viet: 'Có chứ, cho nhiều rau sống nhé! Tính tiền cho anh luôn.', zh: '要的，多給點生菜喔！順便幫我結帳。', en: 'Yes, lots of fresh herbs please! Also the bill please.' }
        ]
      },
      {
        id: 's2_d2',
        nameZh: '搭乘計程車與指路 (Đi Taxi & Chỉ đường)',
        nameEn: 'Taking a Taxi & Giving Directions',
        lines: [
          { speaker: 'Khách', viet: 'Bác tài ơi, cho tôi đến chợ Bến Thành.', zh: '司機大哥，請載我到檳城市場。', en: 'Driver, please take me to Ben Thanh Market.' },
          { speaker: 'Tài xế', viet: 'Dạ được, anh lên xe đi ạ.', zh: '好的，請上車。', en: 'Sure, please get in.' },
          { speaker: 'Khách', viet: 'Đến ngã tư phía trước thì rẽ phải nhé.', zh: '到前面的十字路口請右轉。', en: 'Turn right at the upcoming intersection.' },
          { speaker: 'Tài xế', viet: 'Đến nơi rồi ạ. Hết tám mươi nghìn đồng.', zh: '到了。總共八萬越南盾 (80,000 VND)。', en: 'Here we are. That is 80,000 VND.' }
        ]
      }
    ]
  },
  {
    category: 'stage3',
    stageNameZh: '階段 3：融入生活與醫療 (B1 / 中級實用)',
    stageNameEn: 'Stage 3: Living & Healthcare (iVPT B1)',
    titleZh: '看病買藥與租屋合約 (Khám bệnh & Thuê nhà)',
    titleEn: 'Doctor Visit & Apartment Rental',
    dialogues: [
      {
        id: 's3_d1',
        nameZh: '在診所與藥局看病 (Tại phòng khám & Nhà thuốc)',
        nameEn: 'At the Clinic & Pharmacy',
        lines: [
          { speaker: 'Bác sĩ', viet: 'Chào anh, anh cảm thấy trong người thế nào?', zh: '你好，你哪裡感覺不舒服？', en: 'Hello, what symptoms are you feeling?' },
          { speaker: 'Bệnh nhân', viet: 'Tôi bị sốt cao từ tối qua và đau họng nhiều.', zh: '我從昨晚開始發高燒，而且喉嚨很痛。', en: 'I have had a high fever since last night and severe sore throat.' },
          { speaker: 'Bác sĩ', viet: 'Anh há miệng ra để tôi kiểm tra họng nhé.', zh: '請張開嘴巴讓我檢查一下喉嚨。', en: 'Please open your mouth so I can check your throat.' },
          { speaker: 'Bác sĩ', viet: 'Anh bị viêm họng cấp. Uống thuốc này ngày ba lần sau bữa ăn nhé.', zh: '您是急性咽喉炎。這款藥每天飯後吃三次喔。', en: 'You have acute pharyngitis. Take this medicine 3 times a day after meals.' }
        ]
      }
    ]
  },
  {
    category: 'stage4',
    stageNameZh: '階段 4：商務談判與職場 (B2 / 中高級商務)',
    stageNameEn: 'Stage 4: Business & Negotiation (iVPT B2)',
    titleZh: '商業會議與簽署合約 (Họp thương mại & Ký hợp đồng)',
    titleEn: 'Business Meeting & Contract Signing',
    dialogues: [
      {
        id: 's4_d1',
        nameZh: '洽談合作合約 (Thảo luận hợp đồng hợp tác)',
        nameEn: 'Discussing Partnership Contract',
        lines: [
          { speaker: 'Giám đốc', viet: 'Chào ông Chen! Rất hân hạnh được đón tiếp phái đoàn của ông.', zh: '陳總您好！非常榮幸接待您的代表團。', en: 'Welcome Mr. Chen! Great honor to host your delegation.' },
          { speaker: 'Ông Chen', viet: 'Cảm ơn ông Nguyễn. Chúng tôi rất quan tâm đến năng lực sản xuất của quý công ty.', zh: '謝謝阮總。我們非常關注貴公司的生產產能。', en: 'Thank you Mr. Nguyen. We are very interested in your manufacturing capacity.' },
          { speaker: 'Giám đốc', viet: 'Chúng tôi cam kết đảm bảo tiêu chuẩn chất lượng và giao hàng đúng hạn.', zh: '我們承諾保證質量標準並按時交貨。', en: 'We commit to ensuring quality standards and on-time delivery.' },
          { speaker: 'Ông Chen', viet: 'Tuyệt vời. Chúng ta hãy xem xét các điều khoản thanh toán trong hợp đồng.', zh: '太好了。讓我們檢視合同中的付款條款。', en: 'Excellent. Let us review the payment terms in the contract.' }
        ]
      }
    ]
  },
  {
    category: 'stage5',
    stageNameZh: '階段 5：高階專業與檢定 (C1-C2 / 高級專業)',
    stageNameEn: 'Stage 5: Master & Professional (iVPT C1-C2)',
    titleZh: '台越投資與經貿發展論壇 (Đầu tư & Kinh tế)',
    titleEn: 'Investment & Macroeconomics Forum',
    dialogues: [
      {
        id: 's5_d1',
        nameZh: '外商直接投資 (FDI) 趨勢分析',
        nameEn: 'FDI Foreign Investment Analysis',
        lines: [
          { speaker: 'Chuyên gia', viet: 'Việt Nam đang là điểm đến hấp dẫn đối với các tập đoàn công nghệ toàn cầu.', zh: '越南正成為全球高科技集團極具吸引力的投資目的地。', en: 'Vietnam is an attractive destination for global tech conglomerates.' },
          { speaker: 'Nhà đầu tư', viet: 'Chính sách ưu đãi thuế và nguồn nhân lực trẻ là yếu tố then chốt thu hút chúng tôi.', zh: '稅收優惠政策與年輕人力資源是吸引我們投資的關鍵要素。', en: 'Preferential tax policies and young human resources are the key factors attracting us.' },
          { speaker: 'Chuyên gia', viet: 'Sự phát triển bền vững cần đi đôi với chuyển đổi số và bảo vệ môi trường.', zh: '永續發展必須與數位轉型及環境保護並駕齊驅。', en: 'Sustainable development must accompany digital transformation and environmental protection.' }
        ]
      }
    ]
  }
];

// 8. 常用實用短句速查 (Essential Phrases)
export const practicalPhrases = [
  { category: '問候與禮貌 / Greetings', viet: 'Xin chào', zh: '你好', en: 'Hello', usageZh: '通用問候語', usageEn: 'Standard greeting' },
  { category: '問候與禮貌 / Greetings', viet: 'Cảm ơn nhiều', zh: '非常感謝', en: 'Thank you very much', usageZh: '表達謝意', usageEn: 'Expressing gratitude' },
  { category: '問候與禮貌 / Greetings', viet: 'Không có gì / Không sao', zh: '不客氣 / 沒關係', en: 'You are welcome / No problem', usageZh: '禮貌回應', usageEn: 'Polite response' },
  { category: '問候與禮貌 / Greetings', viet: 'Tạm biệt / Hẹn gặp lại', zh: '再見 / 下次見', en: 'Goodbye / See you again', usageZh: '道別用語', usageEn: 'Farewell' },
  { category: '問候與禮貌 / Greetings', viet: 'Em ơi! / Anh ơi!', zh: '服務員！/ 請問一下！', en: 'Excuse me! (Calling waiter)', usageZh: '越南稱呼服務員必用', usageEn: 'Calling attention of staff' },
  
  { category: '咖啡與飲品 / Cafe & Drinks', viet: 'Cho anh một ly cà phê sữa đá', zh: '給我一杯冰牛奶咖啡', en: 'One iced milk coffee please', usageZh: '咖啡廳點經典冰奶咖', usageEn: 'Ordering iced milk coffee' },
  { category: '咖啡與飲品 / Cafe & Drinks', viet: 'Cho một ly bạc xỉu ít đường', zh: '給我一杯微糖白咖啡 (多奶)', en: 'One bac xiu with less sugar', usageZh: '點多奶咖啡並控制甜度', usageEn: 'Ordering white coffee less sweet' },
  { category: '咖啡與飲品 / Cafe & Drinks', viet: 'Uống tại đây hay mang đi?', zh: '內用還外帶？', en: 'For here or to go?', usageZh: '店員詢問飲用方式', usageEn: 'Dine in or takeaway' },
  { category: '咖啡與飲品 / Cafe & Drinks', viet: 'Cho ít đường và nhiều đá nhé', zh: '幫我少糖多冰喔', en: 'Less sugar and extra ice please', usageZh: '冰量甜度客製化', usageEn: 'Customizing ice and sugar' },
  
  { category: '餐飲與點餐 / Dining', viet: 'Em ơi, cho anh xin thực đơn', zh: '服務員，請給我菜單', en: 'Waiter, please give me the menu', usageZh: '入座點餐', usageEn: 'Requesting menu' },
  { category: '餐飲與點餐 / Dining', viet: 'Cho một tô phở bò tái nạm', zh: '給我一碗生熟牛肉河粉', en: 'One bowl of rare & brisket beef pho', usageZh: '河粉老饕首選組合', usageEn: 'Ordering signature beef pho' },
  { category: '餐飲與點餐 / Dining', viet: 'Cho thêm một đĩa quẩy và trứng chần', zh: '再加一盤油條和半熟溫泉蛋', en: 'Add fried dough crullers & poached egg', usageZh: '河粉靈魂配菜', usageEn: 'Side crullers and poached egg' },
  { category: '餐飲與點餐 / Dining', viet: 'Không lấy hành / Không ăn cay', zh: '不要加蔥 / 不吃辣', en: 'No scallions / Not spicy', usageZh: '飲食客製交代', usageEn: 'No onions or chili' },
  { category: '餐飲與點餐 / Dining', viet: 'Bánh mì nướng giòn giúp em nhé', zh: '法國麵包幫我烤得酥脆一點喔', en: 'Please toast the banh mi extra crispy', usageZh: '街頭買麵包必說', usageEn: 'Asking for crispy toasted banh mi' },
  { category: '餐飲與點餐 / Dining', viet: 'Tính tiền cho anh nhé!', zh: '幫我結帳買單喔！', en: 'Check please!', usageZh: '餐廳結帳', usageEn: 'Asking for the bill' },

  { category: '交通與問路 / Transport', viet: 'Cho tôi đến khách sạn...', zh: '請帶我去...飯店', en: 'Please take me to hotel...', usageZh: '搭乘計程車/Grab', usageEn: 'For taxi / ride hailing' },
  { category: '交通與問路 / Transport', viet: 'Đến ngã tư phía trước thì rẽ phải', zh: '到前面的十字路口請右轉', en: 'Turn right at the intersection ahead', usageZh: '指引司機路口轉彎', usageEn: 'Directing driver to turn right' },
  { category: '交通與問路 / Transport', viet: 'Làm ơn bật máy lạnh mát hơn', zh: '請把冷氣開涼一點', en: 'Please turn up the air conditioning', usageZh: '計程車內溫度調整', usageEn: 'Adjusting taxi AC temperature' },
  { category: '交通與問路 / Transport', viet: 'Bác cho tôi dừng ở đây nhé', zh: '司機大哥請讓我在這裡下車', en: 'Please let me stop and get off here', usageZh: '路邊靠邊停靠下車', usageEn: 'Pulling over to alight' },

  { category: '購物與殺價 / Shopping', viet: 'Cái này bao nhiêu tiền một ký?', zh: '這個一公斤多少錢？', en: 'How much per kilo?', usageZh: '水果攤/市場買物問價', usageEn: 'Asking price per kg' },
  { category: '購物與殺價 / Shopping', viet: 'Đắt quá! Bớt chút được không?', zh: '太貴了！可以算便宜一點嗎？', en: 'Too expensive! Can you discount a bit?', usageZh: '夜市市場殺價必備', usageEn: 'Bargaining at markets' },
  { category: '購物與殺價 / Shopping', viet: 'Có quẹt thẻ được không?', zh: '可以刷信用卡嗎？', en: 'Can I pay by credit card?', usageZh: '確認非現金支付', usageEn: 'Inquiring credit card acceptance' },

  { category: '住宿與機場 / Hotel & Travel', viet: 'Tôi đã đặt phòng tên Chen', zh: '我預訂了房間，名字是 Chen', en: 'I have a booking under Chen', usageZh: '飯店櫃台 Check-in', usageEn: 'Hotel reception check-in' },
  { category: '住宿與機場 / Hotel & Travel', viet: 'Mật khẩu Wi-Fi là gì vậy em?', zh: '請問 WiFi 密碼是什麼呢？', en: 'What is the Wi-Fi password?', usageZh: '詢問上網密碼', usageEn: 'Asking Wi-Fi password' },
  { category: '住宿與機場 / Hotel & Travel', viet: 'Tôi có thể gửi hành lý ở đây không?', zh: '我可以把行李寄放在這裡嗎？', en: 'Can I store luggage here?', usageZh: '退房後暫存行李', usageEn: 'Luggage storage request' },
  { category: '住宿與機場 / Hotel & Travel', viet: 'Cửa ra máy bay số mấy?', zh: '登機門是幾號呢？', en: 'Which boarding gate is it?', usageZh: '機場找尋登機閘口', usageEn: 'Finding flight boarding gate' },

  { category: '放鬆與生活 / Spa & Living', viet: 'Gội đầu dưỡng sinh chín mươi phút', zh: '90 分鐘草本養生洗頭套餐', en: '90-min herbal hair spa package', usageZh: '越式洗頭店點套餐', usageEn: 'Ordering herbal hair wash' },
  { category: '放鬆與生活 / Spa & Living', viet: 'Mát-xa mạnh hơn một chút / Nhẹ thôi', zh: '按摩力道大力一點 / 輕一點', en: 'Massage stronger / More gentle', usageZh: '調整指壓按摩力道', usageEn: 'Adjusting massage pressure' },
  { category: '放鬆與生活 / Spa & Living', viet: 'Tiền thuê nhà mỗi tháng bao nhiêu?', zh: '每個月租金是多少錢？', en: 'How much is the monthly rent?', usageZh: '租屋看房問租金', usageEn: 'Inquiring apartment rent' },

  { category: '醫療與急難 / Health & Emergency', viet: 'Tôi bị sốt cao và đau đầu', zh: '我發高燒而且頭痛', en: 'I have high fever and headache', usageZh: '向藥師描述病情', usageEn: 'Describing symptoms at pharmacy' },
  { category: '醫療與急難 / Health & Emergency', viet: 'Thuốc này ngày uống mấy lần?', zh: '這款藥一天吃幾次？', en: 'How many times a day for this medicine?', usageZh: '確認用藥醫囑', usageEn: 'Asking dosage frequency' },
  { category: '醫療與急難 / Health & Emergency', viet: 'Giúp tôi với! / Cứu tôi với!', zh: '請幫幫我！ / 救命！', en: 'Please help me! / Save me!', usageZh: '緊急求救呼喊', usageEn: 'Emergency call for help' },
  { category: '醫療與急難 / Health & Emergency', viet: 'Tôi bị mất hộ chiếu và ví tiền', zh: '我弄丟了護照和錢包', en: 'I lost my passport and wallet', usageZh: '派出所報警做筆錄', usageEn: 'Reporting loss at police station' }
];

// 9. SRS 間隔記憶閃卡庫 (Spaced Repetition Flashcards Deck)
export const flashcardsDeck = [
  { id: 1, viet: 'Xin chào', zh: '你好', en: 'Hello / Greetings', hanViet: '', category: '問候 / Greetings', example: 'Xin chào anh Nam!' },
  { id: 2, viet: 'Cảm ơn', zh: '感謝 / 謝謝', en: 'Thank you', hanViet: '感恩 (Cảm ơn)', category: '禮貌 / Manners', example: 'Cảm ơn bạn rất nhiều.' },
  { id: 3, viet: 'Quốc tế', zh: '國際', en: 'International', hanViet: '國際 (Quốc tế)', category: '漢越 / Han-Viet', example: 'Sân bay quốc tế Nội Bài.' },
  { id: 4, viet: 'Bao nhiêu', zh: '多少 (數量/價格)', en: 'How much / How many', hanViet: '', category: '購物 / Shopping', example: 'Tô phở này bao nhiêu tiền?' },
  { id: 5, viet: 'Ngon quá', zh: '太好吃了', en: 'So delicious / Tasty', hanViet: '', category: '餐飲 / Food', example: 'Cà phê sữa đá ngon quá!' },
  { id: 6, viet: 'Công ty', zh: '公司 / 企業', en: 'Company / Corporation', hanViet: '公司 (Công ty)', category: '商務 / Business', example: 'Công ty chúng tôi ở Quận 1.' },
  { id: 7, viet: 'Hợp đồng', zh: '合約 / 契約', en: 'Contract / Agreement', hanViet: '合同 (Hợp đồng)', category: '商務 / Business', example: 'Ký hợp đồng thương mại hôm nay.' },
  { id: 8, viet: 'Bệnh viện', zh: '醫院', en: 'Hospital', hanViet: '病院 (Bệnh viện)', category: '醫療 / Health', example: 'Đi đến bệnh viện khám bệnh.' },
  { id: 9, viet: 'Sân bay', zh: '機場 / 飛機場', en: 'Airport', hanViet: '飛機場 (Phi trường)', category: '交通 / Travel', example: 'Đón khách ở sân bay Tân Sơn Nhất.' },
  { id: 10, viet: 'Kinh tế', zh: '經濟', en: 'Economy', hanViet: '經濟 (Kinh tế)', category: '漢越 / Han-Viet', example: 'Kinh tế Việt Nam tăng trưởng nhanh.' },
  { id: 11, viet: 'Đắt quá', zh: '太貴了', en: 'Too expensive', hanViet: '', category: '購物 / Shopping', example: 'Áo này đắt quá, bớt đi!' },
  { id: 12, viet: 'Khách sạn', zh: '飯店 / 旅館', en: 'Hotel', hanViet: '客棧 (Khách sạn)', category: '旅遊 / Travel', example: 'Đặt phòng khách sạn 3 đêm.' }
];

// 10. 語法規則與互動拼句 (Grammar Principles & Sentence Builder)
export const grammarRules = [
  {
    titleZh: '1. 越南語基本句型 (S + V + O 語序)',
    titleEn: '1. Basic SVO Word Order',
    descriptionZh: '越南語的基本語序與中文、英文相同，均為主詞 (Subject) + 動詞 (Verb) + 受詞 (Object)。沒有動詞變位。',
    descriptionEn: 'Vietnamese follows Subject + Verb + Object (SVO) order, similar to English and Chinese. Verbs do not conjugate.',
    exampleZh: 'Tôi (我) + ăn (吃) + cơm (飯) = 我吃飯。',
    exampleEn: 'Tôi (I) + ăn (eat) + cơm (rice) = I eat rice.'
  },
  {
    titleZh: '2. 形容詞後置修飾原則 (Adjective Modifier Position)',
    titleEn: '2. Post-nominal Adjective Rule',
    descriptionZh: '【核心重點】越南語的形容詞修飾名詞時，必須放在名詞的「後面」！（與中英文相反）',
    descriptionEn: 'Adjectives strictly follow the noun they modify (e.g. "Coffee milk ice" for Iced Milk Coffee).',
    exampleZh: 'Cà phê (咖啡) + sữa (牛奶) + đá (冰) = 冰牛奶咖啡',
    exampleEn: 'Cà phê (coffee) + sữa (milk) + đá (ice) = Iced Milk Coffee'
  },
  {
    titleZh: '3. 時間時態助詞 (Time & Aspect Markers)',
    titleEn: '3. Tense & Aspect Markers',
    descriptionZh: '越南語動詞無形態變化，透過放在動詞前的助詞表達時態：Đang (正在 / -ing)、Đã (已經 / Past)、Sẽ (將要 / Will)、Chưa (尚未 / Not yet)。',
    descriptionEn: 'Tenses are expressed via pre-verbal particles: Đang (progressive), Đã (past), Sẽ (future), Chưa (not yet).',
    exampleZh: 'Tôi đang học tiếng Việt. (我正在學越南語。)',
    exampleEn: 'Tôi đang học tiếng Việt. (I am learning Vietnamese.)'
  },
  {
    titleZh: '4. 被動與受益語氣 (Bị vs Được)',
    titleEn: '4. Passive & Benefactive (Bị vs Được)',
    descriptionZh: '表達被動或遭遇：遭遇負面/不幸用 "Bị"；獲得幸運/好處用 "Được"。',
    descriptionEn: 'Passive voice: Use "Bị" for negative/unwanted experiences; use "Được" for positive/fortunate experiences.',
    exampleZh: 'Bị phạt (被罰款) vs Được khen (受到稱讚)',
    exampleEn: 'Bị phạt (Got fined) vs Được khen (Was praised)'
  }
];

export const interactivePuzzles = [
  {
    id: 'p1',
    sentenceZh: '我正在學越南語',
    sentenceEn: 'I am learning Vietnamese',
    correctOrder: ['Tôi', 'đang', 'học', 'tiếng Việt'],
    words: ['đang', 'tiếng Việt', 'Tôi', 'học']
  },
  {
    id: 'p2',
    sentenceZh: '這個牛肉河粉很好吃',
    sentenceEn: 'This beef pho is very delicious',
    correctOrder: ['Phở bò', 'này', 'ngon', 'quá'],
    words: ['ngon', 'này', 'quá', 'Phở bò']
  },
  {
    id: 'p3',
    sentenceZh: '請給我算便宜一點',
    sentenceEn: 'Please give me a small discount',
    correctOrder: ['Bớt', 'chút', 'được', 'không'],
    words: ['chút', 'không', 'Bớt', 'được']
  },
  {
    id: 'p4',
    sentenceZh: '我們明天簽署商業合約',
    sentenceEn: 'We will sign the business contract tomorrow',
    correctOrder: ['Ngày mai', 'chúng tôi', 'ký', 'hợp đồng'],
    words: ['hợp đồng', 'Ngày mai', 'ký', 'chúng tôi']
  }
];

// 11. iVPT 國際檢定與全真模擬測驗 (iVPT & CEFR Mock Exams)
export const quizzes = [
  {
    id: 'q1',
    level: 'A1',
    questionZh: '在越南語六大聲調中，「Thanh Huyền」(玄聲) 的音高走勢特徵是？',
    questionEn: 'In Vietnamese 6 tones, what is the pitch contour of "Thanh Huyền" (Falling tone)?',
    optionsZh: ['陡峭高升音 (35)', '平緩柔和低降音 (311)', '急促下點頓音 (21)', '曲折升降音 (313)'],
    optionsEn: ['Sharp high rising (35)', 'Smooth low falling (311)', 'Short heavy drop (21)', 'Dipping-rising (313)'],
    answer: 1,
    explanationZh: 'Thanh Huyền 是平緩下降的溫柔低調 (311)，符號為重音符號 ` (Mà)。',
    explanationEn: 'Thanh Huyền is a gentle low-falling tone (311), marked with a grave accent ` (Mà).'
  },
  {
    id: 'q2',
    level: 'A1',
    questionZh: '南越（胡志明市）口音中，「湯匙」最道地的稱呼是？',
    questionEn: 'In Southern Vietnamese (Saigon) dialect, what is the common word for "spoon"?',
    optionsZh: ['Thìa', 'Muỗng', 'Ngô', 'Mũ'],
    optionsEn: ['Thìa', 'Muỗng', 'Ngô', 'Mũ'],
    answer: 1,
    explanationZh: '北越稱湯匙為 Thìa，南越則稱 Muỗng。',
    explanationEn: 'Northern dialect uses "Thìa", while Southern dialect uses "Muỗng".'
  },
  {
    id: 'q3',
    level: 'A2',
    questionZh: '數字 25 在越南語中的標準讀法是？',
    questionEn: 'What is the correct pronunciation of number 25 in Vietnamese?',
    optionsZh: ['Hai mươi năm', 'Hai mươi lăm', 'Hai mốt', 'Hai lăm mươi'],
    optionsEn: ['Hai mươi năm', 'Hai mươi lăm', 'Hai mốt', 'Hai lăm mươi'],
    answer: 1,
    explanationZh: '11-99 區間尾數 5 必須讀作 "lăm"（如 25 = Hai mươi lăm）。',
    explanationEn: 'For numbers 11-99, ending 5 must be spoken as "lăm" (e.g. 25 = Hai mươi lăm).'
  },
  {
    id: 'q4',
    level: 'A2',
    questionZh: '「Cà phê sữa đá」依照越南語語法，其正確詞序邏輯解析為？',
    questionEn: 'According to Vietnamese post-nominal adjective rule, how is "Cà phê sữa đá" structured?',
    optionsZh: ['冰 + 牛奶 + 咖啡', '咖啡 (名詞) + 牛奶 (修飾) + 冰 (修飾)', '牛奶 + 冰 + 咖啡', '咖啡 + 冰 + 牛奶'],
    optionsEn: ['Ice + Milk + Coffee', 'Coffee (Noun) + Milk (Modifier) + Ice (Modifier)', 'Milk + Ice + Coffee', 'Coffee + Ice + Milk'],
    answer: 1,
    explanationZh: '越南語形容詞後置修飾：Cà phê (咖啡) + sữa (牛奶) + đá (冰) = 冰牛奶咖啡。',
    explanationEn: 'Vietnamese places modifiers after nouns: Cà phê (coffee) + sữa (milk) + đá (ice) = Iced Milk Coffee.'
  },
  {
    id: 'q5',
    level: 'B1',
    questionZh: '漢越詞「Quốc tế」(國際) 的「Quốc」字根意思是？',
    questionEn: 'In the Sino-Vietnamese word "Quốc tế" (International), what does the root "Quốc" mean?',
    optionsZh: ['果 (Fruit)', '國 (Country / Nation)', '過 (Pass)', '過渡 (Transition)'],
    optionsEn: ['Fruit', 'Country / Nation (國)', 'Pass', 'Cross'],
    answer: 1,
    explanationZh: 'Quốc 對應漢字「國」，組詞如 Quốc gia (國家), Quốc tịch (國籍)。',
    explanationEn: 'Quốc corresponds to Chinese character "國" (Nation), as in Quốc gia (country), Quốc tịch (nationality).'
  },
  {
    id: 'q6',
    level: 'B2',
    questionZh: '在越南職場中，向比自己年紀稍長、地位尊重的男士同事打招呼，最適當的稱呼是？',
    questionEn: 'In a Vietnamese workplace, how do you respectfully address a male colleague slightly older than you?',
    optionsZh: ['Chào em', 'Chào Anh', 'Chào Bà', 'Chào Mày'],
    optionsEn: ['Chào em', 'Chào Anh', 'Chào Bà', 'Chào Mày'],
    answer: 1,
    explanationZh: '對年齡稍長或同輩尊重的男性稱呼「Anh」，自己自稱「Em」。',
    explanationEn: 'Address an older male peer as "Anh" and refer to oneself as "Em".'
  }
];

// 13. 學習路徑總綱 (Learning Path: Absolute Beginner → Advanced)
// 對應台灣教育部本土語文（東南亞語文）課綱能力指標 + iVPT 檢定分級 + CEFR 對照
export const learningPath = [
  {
    id: 'lp1',
    level: 'A1',
    ivptZh: 'iVPT 入門級',
    ivptEn: 'iVPT Foundation',
    titleZh: '第 1 階：零基礎破冰（拼讀能力建立）',
    titleEn: 'Stage 1: Absolute Beginner (Decoding Foundation)',
    durationZh: '約 4–6 週 · 每日 20 分鐘',
    durationEn: 'Approx. 4–6 weeks · 20 min/day',
    vocabTarget: 150,
    goalZh: '看到任何越南文字母組合，都能自己拼讀出聲，並穩定分辨 6 個聲調。',
    goalEn: 'Read aloud any Vietnamese spelling from scratch and reliably distinguish all 6 tones.',
    canDoZh: [
      '正確唸出 29 個字母與全部母音／輔音組合',
      '聽辨並發出 6 大聲調，不再把 Hỏi 和 Ngã 搞混',
      '用 Xin chào / Cảm ơn / Tạm biệt 完成基本禮貌互動',
      '選定自己的主口音（北越河內 或 南越胡志明）'
    ],
    canDoEn: [
      'Pronounce all 29 letters plus vowel/consonant clusters',
      'Hear and produce all 6 tones without confusing Hỏi and Ngã',
      'Handle basic courtesy exchanges: Xin chào / Cảm ơn / Tạm biệt',
      'Commit to a primary accent (Hanoi North or Saigon South)'
    ],
    modules: ['alphabet', 'accent'],
    milestoneZh: '里程碑：完成第 10 項檢定測驗中的 A1 題組，正確率達 80%。',
    milestoneEn: 'Milestone: Score 80% on the A1 question set in the Quiz module.'
  },
  {
    id: 'lp2',
    level: 'A1+',
    ivptZh: 'iVPT 初級',
    ivptEn: 'iVPT Elementary',
    titleZh: '第 2 階：生存越語（稱謂與數字）',
    titleEn: 'Stage 2: Survival Vietnamese (Pronouns & Numbers)',
    durationZh: '約 6–8 週 · 每日 25 分鐘',
    durationEn: 'Approx. 6–8 weeks · 25 min/day',
    vocabTarget: 400,
    goalZh: '跨過華語母語者最大的兩道坎：人稱稱謂系統，以及「千／萬」與越南盾的換算。',
    goalEn: 'Clear the two hardest hurdles: the relational pronoun system and large-number currency conversion.',
    canDoZh: [
      '面對任何對象，能在 3 秒內選對「你／我」該用哪個稱謂',
      '聽懂並說出 0 到 10 億的數字，含口語簡稱（如 2 củ = 200 萬盾）',
      '在市場問價、殺價、確認找零',
      '完成自我介紹：姓名、國籍、職業、學越語多久'
    ],
    canDoEn: [
      'Pick the correct you/I pronoun pair within seconds for any interlocutor',
      'Say and understand numbers from 0 to 1 billion, including slang forms',
      'Ask prices, bargain, and confirm change at a market',
      'Deliver a self-introduction: name, nationality, job, study duration'
    ],
    modules: ['pronoun', 'shopping', 'phrases'],
    milestoneZh: '里程碑：不看提示完成「階段 1、2」全部情境會話的跟讀。',
    milestoneEn: 'Milestone: Shadow all Stage 1–2 dialogues without looking at hints.'
  },
  {
    id: 'lp3',
    level: 'A2',
    ivptZh: 'iVPT 中級',
    ivptEn: 'iVPT Intermediate',
    titleZh: '第 3 階：語法骨架與漢越音起飛',
    titleEn: 'Stage 3: Grammar Backbone & Han-Viet Takeoff',
    durationZh: '約 8–12 週 · 每日 30 分鐘',
    durationEn: 'Approx. 8–12 weeks · 30 min/day',
    vocabTarget: 1200,
    goalZh: '這是台灣學習者的加速帶——用漢越音字根，把 1 個字根換算成 5 到 10 個生詞。',
    goalEn: 'The accelerator stage: leverage Sino-Vietnamese roots to convert one root into 5–10 new words.',
    canDoZh: [
      '掌握形容詞後置、量詞、時態標記（đã／đang／sẽ）三大語法核心',
      '透過漢越音字根庫，看到 Quốc／Học／Kinh 就能推出整組同源詞',
      '用完整句子描述過去發生的事與未來計畫',
      '進行看診、搭車、問路等中等複雜度的情境對話'
    ],
    canDoEn: [
      'Master post-nominal adjectives, classifiers, and tense markers (đã/đang/sẽ)',
      'Expand vocabulary by deriving cognate families from Han-Viet roots',
      'Describe past events and future plans in full sentences',
      'Handle mid-complexity scenarios: clinic visits, transport, directions'
    ],
    modules: ['grammar', 'hanviet', 'flashcards'],
    milestoneZh: '里程碑：閃卡庫累積 500 張標記為「已掌握」，且漢越音字根熟悉 60 組以上。',
    milestoneEn: 'Milestone: 500 flashcards marked mastered, plus 60+ Han-Viet roots internalized.'
  },
  {
    id: 'lp4',
    level: 'B1',
    ivptZh: 'iVPT 中高級',
    ivptEn: 'iVPT Upper-Intermediate',
    titleZh: '第 4 階：流利情境應對與口音自如',
    titleEn: 'Stage 4: Fluent Situational Response & Accent Agility',
    durationZh: '約 4–6 個月 · 每日 40 分鐘',
    durationEn: 'Approx. 4–6 months · 40 min/day',
    vocabTarget: 3000,
    goalZh: '從「講得出來」進化到「接得下去」——能即時回應、能聽懂南北兩種口音。',
    goalEn: 'Move from producing sentences to sustaining exchanges, understanding both dialects live.',
    canDoZh: [
      '同時聽懂北越與南越口音的日常對話，不需對方放慢',
      '就工作、家庭、旅遊等主題連續交談 10 分鐘以上',
      '讀懂越南新聞標題與菜單、告示等日常書面文字',
      '在對話中即時修正自己的聲調錯誤'
    ],
    canDoEn: [
      'Follow everyday conversation in both Northern and Southern accents at natural speed',
      'Sustain 10+ minute conversations on work, family, and travel',
      'Read news headlines, menus, and public notices',
      'Self-correct tone errors in real time while speaking'
    ],
    modules: ['conversation', 'accent', 'quiz'],
    milestoneZh: '里程碑：完成「階段 3、4」情境會話，並在測驗中通過 A2／B1 題組。',
    milestoneEn: 'Milestone: Complete Stage 3–4 dialogues and pass the A2/B1 quiz sets.'
  },
  {
    id: 'lp5',
    level: 'B2–C1',
    ivptZh: 'iVPT 高級',
    ivptEn: 'iVPT Advanced',
    titleZh: '第 5 階：商務越語與越文高手',
    titleEn: 'Stage 5: Business Vietnamese & Mastery',
    durationZh: '約 6–12 個月 · 每日 45 分鐘',
    durationEn: 'Approx. 6–12 months · 45 min/day',
    vocabTarget: 6000,
    goalZh: '進入台商實戰場域：合約、投資、談判、正式書信，皆能獨立處理。',
    goalEn: 'Operate in professional settings: contracts, investment, negotiation, and formal correspondence.',
    canDoZh: [
      '主持會議、洽談合作條件、討論合約條款',
      '理解 FDI 投資、供應鏈、勞動法規等專業詞彙',
      '撰寫正式商業書信與電子郵件，用字得體',
      '依對象身分自如切換敬語層級與稱謂策略'
    ],
    canDoEn: [
      'Run meetings, negotiate terms, and discuss contract clauses',
      'Understand specialist vocabulary: FDI, supply chain, labor regulation',
      'Write formal business letters and emails with appropriate register',
      'Shift politeness levels and pronoun strategy to match the counterpart'
    ],
    modules: ['conversation', 'hanviet', 'quiz'],
    milestoneZh: '里程碑：完成「階段 5、6」商務與 FDI 情境，並通過 B1 以上全部題組。',
    milestoneEn: 'Milestone: Complete Stage 5–6 business/FDI scenarios and pass all B1+ quiz sets.'
  }
];
