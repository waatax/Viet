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
  overviewZh: '越南語主要由三大方言體系構成：北越（以河內首都音為規範標準，聲調區分嚴謹）、中越（順化歷史音，聲調低沉喉音重）與南越（胡志明市商業音，發音輕快軟化）。掌握南北音變與詞彙對照，無論在北部政教檢定或南部經商投資皆能遊刃有餘。',
  overviewEn: 'Vietnamese features three major dialect regions: Northern (Hanoi standard with 6 distinct tones), Central (Hue heritage with deep pitch), and Southern (Saigon commerce with softened consonants and 5 active tones).',
  
  toneDifferences: [
    {
      id: 'ngang',
      tone: 'Thanh Ngang (平聲 ─)',
      sampleWord: 'Ma',
      northZh: '音高 44-44，平穩清亮高平調',
      northEn: 'Pitch 44-44, crisp high level tone',
      northAudio: 'Ma',
      southZh: '音高 33-33，略為平緩放鬆',
      southEn: 'Pitch 33-33, relaxed mid-level tone',
      southAudio: 'Ma',
      diffZh: '南北皆為平調，北音略高亢，南音較輕柔'
    },
    {
      id: 'huyen',
      tone: 'Thanh Huyền (玄聲 \\)',
      sampleWord: 'Mà',
      northZh: '音高 31-21，深沉低降調',
      northEn: 'Pitch 31-21, deep low falling tone',
      northAudio: 'Mà',
      southZh: '音高 21-21，柔和下沉',
      southEn: 'Pitch 21-21, gentle soft low',
      southAudio: 'Mà',
      diffZh: '南北調形一致，皆為平穩降調'
    },
    {
      id: 'sac',
      tone: 'Thanh Sắc (銳聲 /)',
      sampleWord: 'Má',
      northZh: '音高 35-45，陡峭急促向上衝',
      northEn: 'Pitch 35-45, steep sharp climb',
      northAudio: 'Má',
      southZh: '音高 35-44，平緩上揚',
      southEn: 'Pitch 35-44, smooth rising tone',
      southAudio: 'Má',
      diffZh: '北音緊縮急升；南音在短母音或塞音尾時極短促'
    },
    {
      id: 'hoi',
      tone: 'Thanh Hỏi (問聲 ˀ)',
      sampleWord: 'Mả',
      northZh: '音高 31-12-35，先降後升曲折調',
      northEn: 'Pitch 31-12-35, distinct dip-and-rise contour',
      northAudio: 'Mả',
      southZh: '音高 32-23，曲折幅度較小平緩',
      southEn: 'Pitch 32-23, smooth relaxed dipping curve',
      southAudio: 'Mả',
      diffZh: '南越將 Hỏi 與 Ngã 合併為此平緩問調'
    },
    {
      id: 'nga',
      tone: 'Thanh Ngã (跌聲 ~)',
      sampleWord: 'Mã',
      northZh: '音高 35-45，中途喉頭瞬間緊閉截斷（喉塞波浪音）',
      northEn: 'Pitch 35-45, glottal stop wave break',
      northAudio: 'Mã',
      southZh: '南越無喉塞音，完全讀成問聲 (Mả)',
      southEn: 'Saigon merged: pronounced smoothly as Hỏi (Mả)',
      southAudio: 'Mả',
      diffZh: '★ 最關鍵差別：南越人日常口語中 Sữa (牛奶) 與 Sửa (修理) 聲調完全相同，無喉塞頓斷'
    },
    {
      id: 'nang',
      tone: 'Thanh Nặng (重聲 .)',
      sampleWord: 'Mạ',
      northZh: '音高 21-11，腹部用力急速下頓，短促緊閉',
      northEn: 'Pitch 21-11, abrupt constricted drop',
      northAudio: 'Mạ',
      southZh: '音高 21-12，頓音較軟，尾音有微弱回升',
      southEn: 'Pitch 21-12, softer drop without harsh cutoff',
      southAudio: 'Mạ',
      diffZh: '北越短促截斷感強烈；南越較為溫和長綿'
    }
  ],

  phoneticRules: [
    { 
      rule: 'd, gi, r (聲母)', 
      northZh: 'D, Gi, R 全讀 [z] (像英文 Z 音，無捲舌)', 
      northEn: 'All pronounced as /z/ (like English "zoo")',
      southZh: 'D, Gi 讀 [j] (像 Y 音)；R 讀 [r] 滾舌捲舌音', 
      southEn: 'D, Gi pronounced as /j/ ("yes"); R as rolled /r/',
      example: 'Da (皮膚) / Giờ (小時) / Rắn (蛇)', 
      audioText: 'Da',
      northAudioText: 'Da',
      southAudioText: 'Ya',
      pairs: [
        { northWord: 'Da', southWord: 'Ya', displayWord: 'Da (皮膚)', northIPA: '[za]', southIPA: '[ja]' },
        { northWord: 'Giờ', southWord: 'Yờ', displayWord: 'Giờ (小時)', northIPA: '[zəː]', southIPA: '[jəː]' },
        { northWord: 'Rắn', southWord: 'Rắn', displayWord: 'Rắn (蛇)', northIPA: '[zan]', southIPA: '[raŋ]' }
      ]
    },
    { 
      rule: 'v (聲母)', 
      northZh: '讀標準咬唇 [v] 音 (唇齒摩擦音)', 
      northEn: 'Clear labiodental /v/ (lip against teeth)',
      southZh: '常軟化讀成 [j] (像 Y 音) 或 [w]/Vô (例如 Vào 讀成 Vô 或 Dào)', 
      southEn: 'Often pronounced as /j/ ("yes") or merged with /w/',
      example: 'Vào (進去) / Vui vẻ (快樂) / Về (回去)', 
      audioText: 'Vào',
      northAudioText: 'Vào',
      southAudioText: 'Vô',
      pairs: [
        { northWord: 'Vào', southWord: 'Vô', displayWord: 'Vào (進去)', northIPA: '[vaːw]', southIPA: '[vo] / [jaːw]' },
        { northWord: 'Vui vẻ', southWord: 'Dui dẻ', displayWord: 'Vui vẻ (高興)', northIPA: '[vwi vɛ]', southIPA: '[jwi jɛ]' },
        { northWord: 'Về', southWord: 'Dề', displayWord: 'Về (回家)', northIPA: '[ve]', southIPA: '[je]' }
      ]
    },
    { 
      rule: 'tr / ch (聲母)', 
      northZh: 'Tr 與 Ch 不分，皆發平舌 [tɕ] (類似國語「機」的清脆音)', 
      northEn: 'Tr and Ch are merged into flat /tɕ/ (like "ch")',
      southZh: 'Tr 捲舌清晰 [ʈ] (舌尖向後捲)；Ch 發平舌 [c]', 
      southEn: 'Tr is retroflex /ʈ/ while Ch is sharp palatal /c/',
      example: 'Trà (茶葉) vs Cha (父親)', 
      audioText: 'Trà',
      northAudioText: 'Trà',
      southAudioText: 'Trà',
      pairs: [
        { northWord: 'Trà', southWord: 'Trà', displayWord: 'Trà (茶葉)', northIPA: '[tɕaː] (平舌)', southIPA: '[ʈaː] (捲舌)' },
        { northWord: 'Cha', southWord: 'Cha', displayWord: 'Cha (父親)', northIPA: '[tɕaː]', southIPA: '[caː]' }
      ]
    },
    { 
      rule: 's / x (聲母)', 
      northZh: 'S 與 X 不分，皆發平舌 [s] (像國語「思」)', 
      northEn: 'S and X are both pronounced as flat /s/',
      southZh: 'S 發捲舌 [ʂ] (像國語「詩/sh」)；X 發平舌 [s]', 
      southEn: 'S is retroflex /ʂ/ ("shine"); X is flat /s/ ("sun")',
      example: 'Sữa (牛奶) vs Xa (遙遠)', 
      audioText: 'Sữa',
      northAudioText: 'Sữa',
      southAudioText: 'Sửa',
      pairs: [
        { northWord: 'Sữa', southWord: 'Sửa', displayWord: 'Sữa (牛奶)', northIPA: '[sɨəˀ˥] (平舌+喉塞)', southIPA: '[ʂɨə˧˨˧] (捲舌+問聲)' },
        { northWord: 'Xa', southWord: 'Xa', displayWord: 'Xa (遙遠)', northIPA: '[saː]', southIPA: '[saː]' }
      ]
    },
    { 
      rule: '聲調 Hỏi / Ngã (問跌調)', 
      northZh: '問聲(Hỏi)與跌聲(Ngã)區分極嚴格，跌聲有強烈喉塞斷音', 
      northEn: 'Clear distinction between Hỏi (dip-rise) and Ngã (glottal break)',
      southZh: '南越口音中 Hỏi 與 Ngã 完全合流，跌聲一律讀成平緩的問聲', 
      southEn: 'Hỏi and Ngã tones are virtually merged into one smooth dipping tone',
      example: 'Mã (代碼) vs Mả (墳墓)', 
      audioText: 'Mã',
      northAudioText: 'Mã',
      southAudioText: 'Mả',
      pairs: [
        { northWord: 'Mã', southWord: 'Mả', displayWord: 'Mã (代碼/馬)', northIPA: '[maːˀ˥] (喉塞斷音)', southIPA: '[maː˧˨˧] (合流讀成Mả)' },
        { northWord: 'Mả', southWord: 'Mả', displayWord: 'Mả (墳墓)', northIPA: '[maː˧˩˧]', southIPA: '[maː˧˨˧]' },
        { northWord: 'Đã', southWord: 'Đả', displayWord: 'Đã (已經)', northIPA: '[ɗaːˀ˥]', southIPA: '[ɗaː˧˨˧]' },
        { northWord: 'Nghĩ', southWord: 'Nghỉ', displayWord: 'Nghĩ (思考)', northIPA: '[ŋiˀ˥]', southIPA: '[ŋi˧˨˧]' }
      ]
    },
    { 
      rule: '字尾韻尾 -n / -ng, -t / -c', 
      northZh: '字尾鼻音與塞音發音位置精準對應，前鼻/後鼻分明', 
      northEn: 'Final consonants strictly follow written spelling',
      southZh: '在 a, o, u 後，前鼻音 -n 常後移讀成 -ng；-t 讀成 -k/-c', 
      southEn: 'Final -n often sounds like -ng; -t sounds like -k after back vowels',
      example: 'Bán (賣) vs Báng / Mắt (眼睛) vs Mắc', 
      audioText: 'Bán',
      northAudioText: 'Bán',
      southAudioText: 'Báng',
      pairs: [
        { northWord: 'Bán', southWord: 'Báng', displayWord: 'Bán (買賣的賣)', northIPA: '[baːn] (前鼻)', southIPA: '[baːŋ] (後鼻 Báng)' },
        { northWord: 'Mắt', southWord: 'Mắc', displayWord: 'Mắt (眼睛)', northIPA: '[mat] (齒音尾)', southIPA: '[mak] (喉音尾 Mắc)' },
        { northWord: 'Ăn', southWord: 'Ăng', displayWord: 'Ăn (吃飯)', northIPA: '[an]', southIPA: '[aŋ]' }
      ]
    },
    { 
      rule: 'qu (聲母)', 
      northZh: '讀標準圓唇複輔音 [kw] (發音清脆)', 
      northEn: 'Clear labialized velar consonant /kw/',
      southZh: '舌根音軟化脫落，直接發雙唇半母音 [w]', 
      southEn: 'Softened into bilabial glide /w/',
      example: 'Quá (太過) / Quên (忘記)', 
      audioText: 'Quá',
      northAudioText: 'Quá',
      southAudioText: 'Oá',
      pairs: [
        { northWord: 'Quá', southWord: 'Oá', displayWord: 'Quá (太/非常)', northIPA: '[kwaː]', southIPA: '[waː]' },
        { northWord: 'Quên', southWord: 'Uên', displayWord: 'Quên (忘記)', northIPA: '[kwen]', southIPA: '[wen]' }
      ]
    },
    { 
      rule: '-nh / -ch (i, e, ê 後韻尾)', 
      northZh: '-nh 讀顎化硬腭鼻音 [ɲ]；-ch 讀清硬腭塞音 [c]', 
      northEn: '-nh is palatal /ɲ/, -ch is palatal /c/',
      southZh: '-nh 讀成齒齦鼻音 [n]；-ch 讀成舌尖清塞音 [t]', 
      southEn: '-nh is alveolar /n/, -ch is alveolar /t/',
      example: 'Bệnh (生病) / Chính (正確) / Thích (喜歡)', 
      audioText: 'Bệnh',
      northAudioText: 'Bệnh',
      southAudioText: 'Bện',
      pairs: [
        { northWord: 'Bệnh', southWord: 'Bện', displayWord: 'Bệnh (疾病/病)', northIPA: '[bɛɲ] (北音)', southIPA: '[bɛn] (讀同 Bện)' },
        { northWord: 'Chính', southWord: 'Chín', displayWord: 'Chính (主要/正確)', northIPA: '[tɕiɲ]', southIPA: '[tɕin] (讀同 Chín)' },
        { northWord: 'Thích', southWord: 'Thít', displayWord: 'Thích (喜愛)', northIPA: '[tʰic]', southIPA: '[tʰit] (讀同 Thít)' }
      ]
    }
  ],

  wordComparisonMatrix: [
    { north: 'Thìa', south: 'Muỗng', meaningZh: '湯匙', meaningEn: 'Spoon', category: '餐飲器具' },
    { north: 'Bát', south: 'Chén', meaningZh: '飯碗', meaningEn: 'Bowl', category: '餐飲器具' },
    { north: 'Ngô', south: 'Bắp', meaningZh: '玉米', meaningEn: 'Corn / Maize', category: '食材蔬果' },
    { north: 'Dứa', south: 'Thơm / Khóm', meaningZh: '鳳梨', meaningEn: 'Pineapple', category: '食材蔬果' },
    { north: 'Đậu phụ', south: 'Tàu hũ', meaningZh: '豆腐', meaningEn: 'Tofu / Bean curd', category: '食材蔬果' },
    { north: 'Hoa quả', south: 'Trái cây', meaningZh: '水果 (總稱)', meaningEn: 'Fruit', category: '食材蔬果' },
    { north: 'Lạc', south: 'Đậu phộng', meaningZh: '花生', meaningEn: 'Peanut', category: '食材蔬果' },
    { north: 'Chè', south: 'Trà', meaningZh: '茶水 / 甜湯', meaningEn: 'Tea / Sweet soup', category: '飲品點心' },
    { north: 'Kem', south: 'Kem / Cà rem', meaningZh: '冰淇淋 / 冰棒', meaningEn: 'Ice cream', category: '飲品點心' },
    { north: 'Vào', south: 'Vô', meaningZh: '進入 (動詞)', meaningEn: 'To enter', category: '核心動作' },
    { north: 'Ra', south: 'Ra', meaningZh: '出去 (動詞)', meaningEn: 'To exit', category: '核心動作' },
    { north: 'Béo', south: 'Mập', meaningZh: '胖 (形容人體態)', meaningEn: 'Chubby / Fat', category: '外觀體態' },
    { north: 'Gầy', south: 'Ốm', meaningZh: '瘦 (形容人體態)', meaningEn: 'Thin / Skinny', category: '外觀體態' },
    { north: 'Ốm', south: 'Bệnh', meaningZh: '生病 (南越 Ốm 專指瘦)', meaningEn: 'Sick / Illness', category: '健康醫療' },
    { north: 'Mũ', south: 'Nón', meaningZh: '帽子', meaningEn: 'Hat / Cap', category: '日常服飾' },
    { north: 'Chăn', south: 'Mền', meaningZh: '棉被', meaningEn: 'Blanket', category: '居家生活' },
    { north: 'Tất', south: 'Vớ', meaningZh: '襪子', meaningEn: 'Socks', category: '日常服飾' },
    { north: 'Ô', south: 'Dù', meaningZh: '雨傘', meaningEn: 'Umbrella', category: '日常用品' },
    { north: 'Gửi thư', south: 'Gởi thơ', meaningZh: '寄信', meaningEn: 'Send a letter', category: '通訊交流' },
    { north: 'Điện thoại', south: 'ĐTDĐ', meaningZh: '手機 / 行動電話', meaningEn: 'Mobile phone', category: '科技通訊' },
    { north: 'Nhé', south: 'Nha / Nghen', meaningZh: '語氣詞 (好嗎 / 喔)', meaningEn: 'Modal Particle (okay?)', category: '語氣助詞' },
    { north: 'Ạ', south: 'Dạ', meaningZh: '敬語詞 (句首Dạ/句尾Ạ)', meaningEn: 'Polite Particle', category: '禮貌敬語' },
    { north: 'Thế à?', south: 'Vậy hả?', meaningZh: '是這樣子嗎？真的嗎？', meaningEn: 'Is that so?', category: '社交應答' },
    { north: 'Nghìn', south: 'Ngàn', meaningZh: '千 (金額單位)', meaningEn: 'Thousand (Currency)', category: '商業數字' }
  ],

  regionalParticles: [
    {
      region: '🏛️ 北越河內 (Miền Bắc)',
      particles: [
        { word: 'Ạ', usageZh: '放在句尾表示極高度尊敬 (例: Vâng ạ, Cháu chào bác ạ)' },
        { word: 'Nhé / Nhỉ', usageZh: '溫和邀請或商量 (例: Đi ăn phở nhé!)' },
        { word: 'Thế / Thế à', usageZh: '疑問或驚訝 (例: Sao lại thế?)' },
        { word: 'Cơ / Đâu', usageZh: '強調口吻 (例: Em không biết đâu!)' }
      ]
    },
    {
      region: '🌴 南越胡志明 (Miền Nam)',
      particles: [
        { word: 'Dạ', usageZh: '放在句首作為禮貌應答 (例: Dạ đúng rồi, Dạ chào anh)' },
        { word: 'Nha / Nghen', usageZh: '親切囑咐或約定 (例: Đi uống cà phê nha!)' },
        { word: 'Nè / Nè nghen', usageZh: '提醒注意或展示事物 (例: Xem cái này nè!)' },
        { word: 'Hén / Hả', usageZh: '尋求認同或反問 (例: Ngon quá hén!)' }
      ]
    }
  ]
};

// 4. 數字、貨幣換算與商務金融 (Numbers & VND Currency Simulator)
export const numbersAndCurrency = {

  highFrequencyShopping: {
    categories: [
      { id: 'all', nameZh: '全部情境 (45+句)', nameEn: 'All Shopping (45+)' },
      { id: 'bargain', nameZh: '🔥 夜市殺價絕招', nameEn: '🔥 Bargaining Tactics' },
      { id: 'souvenir', nameZh: '🎁 特產伴手禮', nameEn: '🎁 Souvenirs & Treats' },
      { id: 'clothing', nameZh: '👗 服飾鞋包試穿', nameEn: '👗 Clothing & Sizing' },
      { id: 'fruit', nameZh: '🥭 水果生鮮秤重', nameEn: '🥭 Fruits & Weighing' },
      { id: 'payment', nameZh: '💳 刷卡轉帳發票', nameEn: '💳 Payment & Invoices' }
    ],
    items: [
      { id: 'bg1', category: 'bargain', viet: 'Cái này bao nhiêu tiền một cái?', zh: '這個一個多少錢？', en: 'How much is this per piece?', tag: '問價起手式', tipZh: '市場購物最通用問價句' },
      { id: 'bg2', category: 'bargain', viet: 'Có bớt chút nào không cô?', zh: '阿姨，可以算便宜一點點嗎？', en: 'Can you lower the price a little bit?', tag: '禮貌殺價', tipZh: '稱呼 cô/chị 顯得親切好議價' },
      { id: 'bg3', category: 'bargain', viet: 'Đắt quá, giảm giá cho tôi đi!', zh: '太貴了啦，給我打個折吧！', en: 'Too expensive, give me a discount please!', tag: '直接殺價', tipZh: '夜市觀光區強烈議價' },
      { id: 'bg4', category: 'bargain', viet: 'Nếu tôi mua ba cái thì giá bao nhiêu?', zh: '如果我買三個的話算多少錢？', en: 'If I buy 3 pieces, how much will it be?', tag: '以量議價', tipZh: '多件購買爭取批發折扣' },
      { id: 'bg5', category: 'bargain', viet: 'Bán mở hàng cho tôi giá may mắn đi!', zh: '幫我當今天開市第一單，算個吉利價吧！', en: 'Give me a lucky opening price for good fortune!', tag: '討吉利殺價', tipZh: '越南文化早市開單討好彩頭' },
      { id: 'bg6', category: 'bargain', viet: 'Một trăm nghìn được không?', zh: '十萬盾可以嗎？(100.000đ được không?)', en: 'Can you do 100,000 VND?', tag: '主動出價', tipZh: '心中底價直接詢問老闆' },
      { id: 'bg7', category: 'bargain', viet: 'Ở chỗ khác bán rẻ hơn nhiều.', zh: '別家店賣得便宜很多耶。', en: 'Other shops sell it much cheaper.', tag: '貨比三家', tipZh: '比價談判話術' },
      { id: 'bg8', category: 'bargain', viet: 'Bớt hai mươi nghìn nhé, tôi lấy liền!', zh: '便宜兩萬盾的話，我馬上買！', en: 'Discount 20k and I will take it right away!', tag: '成交收尾', tipZh: '給老闆立刻成交的誘因' },
      { id: 'bg9', category: 'bargain', viet: 'Tôi chỉ còn đúng hai trăm nghìn thôi.', zh: '我身上只剩剛好二十萬盾了。', en: 'I only have 200,000 VND left with me.', tag: '零錢戰術', tipZh: '示弱爭取最後降價' },
      { id: 'bg10', category: 'bargain', viet: 'Giá này là giá chót rồi hả anh?', zh: '這個價錢是底價、不能再降了嗎？', en: 'Is this your final best price?', tag: '確認底價', tipZh: '確認最後降價空間' },

      { id: 'sv1', category: 'souvenir', viet: 'Cà phê này là loại Robusta hay Arabica?', zh: '這款咖啡是羅布斯塔還是阿拉比卡豆？', en: 'Is this coffee Robusta or Arabica?', tag: '咖啡豆選購', tipZh: '越南為全球第二大咖啡出口國' },
      { id: 'sv2', category: 'souvenir', viet: 'Hạt điều rang muối này hạn sử dụng bao lâu?', zh: '這罐帶皮鹽焗腰果保質期多久？', en: 'What is the shelf life of these salted cashews?', tag: '食品期限', tipZh: '腰果為越南必買伴手禮' },
      { id: 'sv3', category: 'souvenir', viet: 'Tôi muốn mua năm hộp bánh pía làm quà.', zh: '我想買五盒榴槤皮亞餅當伴手禮。', en: 'I want to buy 5 boxes of Bánh Pía as gifts.', tag: '名產包裝', tipZh: 'Sóc Trăng 特產榴槤蛋黃餅' },
      { id: 'sv4', category: 'souvenir', viet: 'Gói kẹo dừa này bao nhiêu tiền một bịch?', zh: '這包檳知椰子糖一袋多少錢？', en: 'How much is a bag of this coconut candy?', tag: '名產價格', tipZh: 'Bến Tre 經典椰子軟糖' },
      { id: 'sv5', category: 'souvenir', viet: 'Có đóng thùng xốp để tôi mang lên máy bay không?', zh: '可以幫我用保麗龍箱封箱方便帶上飛機嗎？', en: 'Can you pack it in a styrofoam box for my flight?', tag: '機場託運', tipZh: '生鮮水果名產打包上機必備' },
      { id: 'sv6', category: 'souvenir', viet: 'Cho tôi thử một miếng được không?', zh: '可以讓我試吃一小口嗎？', en: 'Can I try a small piece?', tag: '試吃詢問', tipZh: '食品店試吃確認口味' },
      { id: 'sv7', category: 'souvenir', viet: 'Cái phin pha cà phê bằng nhôm này giá bao nhiêu?', zh: '這個鋁製越式咖啡滴漏壺多少錢？', en: 'How much is this traditional aluminum coffee filter?', tag: '滴漏壺選購', tipZh: 'Phin 滴漏壺為越式咖啡靈魂' },
      { id: 'sv8', category: 'souvenir', viet: 'Có túi hút chân không không em?', zh: '有真空包裝袋包裝嗎？', en: 'Do you have vacuum sealing bags?', tag: '保鮮包裝', tipZh: '真空防潮利於航空攜帶' },

      { id: 'cl1', category: 'clothing', viet: 'Cái áo này có size L không em?', zh: '這件衣服有 L 號嗎？', en: 'Do you have this shirt in size L?', tag: '詢問尺寸', tipZh: '越南尺碼通常比歐美版型偏小一號' },
      { id: 'cl2', category: 'clothing', viet: 'Phòng thay đồ ở đâu vậy?', zh: '請問試衣間在哪裡？', en: 'Where is the fitting room?', tag: '尋找試衣間', tipZh: '服飾店試穿' },
      { id: 'cl3', category: 'clothing', viet: 'Tôi có thể mặc thử bộ Áo Dài này được không?', zh: '我可以試穿這套越式奧黛 (Áo Dài) 嗎？', en: 'May I try on this Ao Dai set?', tag: '傳統服飾', tipZh: '奧黛為越南國服' },
      { id: 'cl4', category: 'clothing', viet: 'Đôi giày này hơi chật, có số lớn hơn không?', zh: '這雙鞋有點太緊，有大一號的嗎？', en: 'These shoes are a bit tight, do you have a larger size?', tag: '鞋碼調整', tipZh: '換大尺碼' },
      { id: 'cl5', category: 'clothing', viet: 'Có màu đen hoặc màu trắng không?', zh: '有黑色或白色的嗎？', en: 'Do you have this in black or white?', tag: '詢問顏色', tipZh: '挑選顏色' },
      { id: 'cl6', category: 'clothing', viet: 'Chất liệu vải này là cotton hay lụa tơ tằm?', zh: '這塊布料是純棉還是純天然蠶絲？', en: 'Is this fabric cotton or natural silk?', tag: '材質確認', tipZh: '會安與河內絲綢名產' },
      { id: 'cl7', category: 'clothing', viet: 'Chiếc nón lá truyền thống này bao nhiêu tiền?', zh: '頂傳統越式斗笠 (Nón lá) 賣多少錢？', en: 'How much is this traditional conical hat?', tag: '越式斗笠', tipZh: '越南經典特色手工藝品' },

      { id: 'fr1', category: 'fruit', viet: 'Một ký xoài cát này giá bao nhiêu?', zh: '這一公斤和祿芒果賣多少錢？', en: 'How much for one kilo of Hoa Loc mangoes?', tag: '水果秤重', tipZh: '越南以公斤 (ký/kg) 為計價單位' },
      { id: 'fr2', category: 'fruit', viet: 'Trái sầu riêng này nặng mấy ký?', zh: '這顆榴槤重幾公斤？', en: 'How many kilos does this durian weigh?', tag: '榴槤秤重', tipZh: 'Ri6 榴槤最為出名' },
      { id: 'fr3', category: 'fruit', viet: 'Gọt vỏ và cắt sẵn giúp tôi nhé.', zh: '請幫我削皮並切塊裝盒喔。', en: 'Please peel and slice it into a container for me.', tag: '現切服務', tipZh: '夜市水果攤現切現吃' },
      { id: 'fr4', category: 'fruit', viet: 'Trái dừa xiêm này có ngọt không?', zh: '這顆青椰子喝起來甜不甜？', en: 'Is this fresh young coconut sweet?', tag: '椰子選購', tipZh: 'Dừa xiêm 越式生椰水' },
      { id: 'fr5', category: 'fruit', viet: 'Cân giúp tôi hai ký thanh long ruột đỏ.', zh: '請幫我秤兩公斤紅肉火龍果。', en: 'Please weigh 2 kilos of red dragon fruit for me.', tag: '指定重量', tipZh: '平順省紅肉火龍果特產' },
      { id: 'fr6', category: 'fruit', viet: 'Măng cụt này có tươi không?', zh: '這些山竹新鮮嗎？', en: 'Is this mangosteen fresh?', tag: '山竹選購', tipZh: '熱帶水果之后' },

      { id: 'pm1', category: 'payment', viet: 'Có thanh toán bằng thẻ tín dụng không?', zh: '可以刷國際信用卡 (Visa/Master) 嗎？', en: 'Do you accept credit cards?', tag: '刷卡確認', tipZh: '商場超市必備' },
      { id: 'pm2', category: 'payment', viet: 'Tôi có thể quét mã QR chuyển khoản được không?', zh: '我可以掃 QR Code 銀行轉帳付款嗎？', en: 'Can I scan a QR code to transfer payment?', tag: '行動支付', tipZh: '越南 VietQR 普及率極高' },
      { id: 'pm3', category: 'payment', viet: 'Cho tôi xin túi nilông để xách đồ.', zh: '請給我一個塑膠提袋裝東西。', en: 'Please give me a plastic bag to carry items.', tag: '索取提袋', tipZh: '超市購物袋' },
      { id: 'pm4', category: 'payment', viet: 'Cho tôi xin hóa đơn đỏ VAT để hoàn thuế.', zh: '請開立統一紅發票給我，我要辦理退稅。', en: 'Please give me a red VAT invoice for tax refund.', tag: '商務退稅', tipZh: '機場退稅需準備 Hóa đơn đỏ' },
      { id: 'pm5', category: 'payment', viet: 'Tiền thối bị rách rồi, đổi tờ khác giúp tôi.', zh: '找給我的這張紙鈔破掉了，請幫我換一張。', en: 'This change note is torn, please exchange it for another one.', tag: '更換鈔票', tipZh: '破損塑膠鈔常被拒收，應即刻更換' },
      { id: 'pm6', category: 'payment', viet: 'Tính tiền giúp tôi!', zh: '請幫我結帳算錢！', en: 'Bill please! / Check out please!', tag: '結帳招呼', tipZh: '最常用結帳招呼句' }
    ],
    vocabulary: [
      { viet: 'Mua sắm', zh: '購物 / 買東西', en: 'Shopping', ipa: '[muə sam]' },
      { viet: 'Bao nhiêu tiền', zh: '多少錢', en: 'How much money', ipa: '[ɓaw ɲiəw tiəŋ]' },
      { viet: 'Giảm giá', zh: '打折 / 降價', en: 'Discount / Sale', ipa: '[zam za]' },
      { viet: 'Đắt quá', zh: '太貴了', en: 'Too expensive', ipa: '[ɗat kwa]' },
      { viet: 'Rẻ', zh: '便宜', en: 'Cheap', ipa: '[ʐɛ / jɛ]' },
      { viet: 'Hóa đơn đỏ', zh: '統一發票 (紅發票)', en: 'VAT Red Invoice', ipa: '[hwa ɗən ɗɔ]' },
      { viet: 'Quét mã QR', zh: '掃 QR Code 轉帳', en: 'Scan QR Code', ipa: '[kwɛt ma QR]' },
      { viet: 'Thẻ tín dụng', zh: '信用卡', en: 'Credit Card', ipa: '[tʰɛ tin zuŋ]' },
      { viet: 'Tiền mặt', zh: '現金', en: 'Cash', ipa: '[tiən mat]' },
      { viet: 'Tiền thối', zh: '找零錢', en: 'Change money', ipa: '[tiən tʰoj]' },
      { viet: 'Ký / Cân', zh: '公斤 (kg)', en: 'Kilogram', ipa: '[ki / kən]' },
      { viet: 'Thử đồ', zh: '試穿 / 試用', en: 'Try on', ipa: '[tʰɨ ɗo]' },
      { viet: 'Áo Dài', zh: '越南奧黛國服', en: 'Ao Dai Dress', ipa: '[aw zaj]' },
      { viet: 'Nón lá', zh: '越式斗笠', en: 'Conical Hat', ipa: '[nɔn la]' },
      { viet: 'Bánh Pía', zh: '榴槤蛋黃餅 (伴手禮)', en: 'Durian Pia Cake', ipa: '[ɓaɲ piə]' },
      { viet: 'Hạt điều', zh: '帶皮鹽焗腰果', en: 'Cashew nuts', ipa: '[hat diəw]' },
      { viet: 'Cà phê phin', zh: '滴漏咖啡粉/壺', en: 'Filter coffee', ipa: '[ka fe fin]' },
      { viet: 'Kẹo dừa', zh: '椰子糖', en: 'Coconut candy', ipa: '[kɛw zɨə]' }
    ]
  },
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
  priceTiers: [
    { range: '1.000 - 9.000đ', viet: 'Một nghìn đến chín nghìn đồng', twd: 'NT$ 1.3 ~ 12', examplesZh: '超商小零嘴、路邊停車費、茶水 (Trà đá)', examplesEn: 'Snacks, street parking, iced tea (Trà đá)' },
    { range: '10.000 - 49.000đ', viet: 'Mười nghìn đến bốn mươi chín nghìn đồng', twd: 'NT$ 13 ~ 63', examplesZh: '越式冰咖啡、法包三明治 (Bánh mì)、生椰水', examplesEn: 'Iced coffee, Bánh mì, fresh coconut' },
    { range: '50.000 - 99.000đ', viet: 'Năm mươi nghìn đến chín mươi chín nghìn đồng', twd: 'NT$ 64 ~ 127', examplesZh: '道地生牛肉河粉 (Phở bò)、連鎖店特調咖啡', examplesEn: 'Beef Pho bowl, specialty coffee' },
    { range: '100.000 - 499.000đ', viet: 'Một trăm nghìn đến bốn trăm chín mươi chín nghìn đồng', twd: 'NT$ 128 ~ 640', examplesZh: '市區計程車/Grab、海鮮熱炒單人餐、全身指壓按摩', examplesEn: 'Grab rides, seafood dinner, 60min massage' },
    { range: '500.000 - 1.999.000đ', viet: 'Năm trăm nghìn đến một triệu chín trăm chín mươi chín nghìn đồng', twd: 'NT$ 641 ~ 2,560', examplesZh: '家庭超市一週採買、星級渡假飯店單日住宿', examplesEn: 'Weekly grocery shopping, 4-star hotel night' },
    { range: '2.000.000 - 9.999.000đ', viet: 'Hai triệu đến chín triệu chín trăm chín mươi chín nghìn đồng', twd: 'NT$ 2,564 ~ 12,800', examplesZh: '台越往返國際機票、智慧型手機、西貢市區合租套房', examplesEn: 'Roundtrip flights, smartphone, room rental' },
    { range: '10.000.000 - 99.000.000đ', viet: 'Mười triệu đến chín mươi chín triệu đồng', twd: 'NT$ 12,820 ~ 126,900', examplesZh: '市中心高檔公寓月租、本田機車買賣 (Honda Vision)', examplesEn: 'Luxury apartment rent, Honda scooter purchase' },
    { range: '100.000.000 - 999.000.000đ', viet: 'Một trăm triệu đến chín trăm chín mươi chín triệu đồng', twd: 'NT$ 128,200 ~ 128.2 萬', examplesZh: '小型商業投資開店、汽車頭期款、工廠設備採購', examplesEn: 'Shop startup capital, car down payment, machinery' },
    { range: '1.000.000.000đ+', viet: 'Một tỷ đồng trở lên', twd: 'NT$ 128.2 萬以上', examplesZh: '胡志明/河內置產買房、銀行定存大額儲蓄、外商投資', examplesEn: 'Real estate purchase, bank term deposits, FDI capital' }
  ],
  shoppingPhrases: [
    { viet: 'Cái này bao nhiêu tiền?', zh: '這個多少錢？', en: 'How much is this?', tag: '問價必備' },
    { viet: 'Có giảm giá không?', zh: '可以打折嗎？能算便宜一點嗎？', en: 'Can you give a discount?', tag: '市場殺價' },
    { viet: 'Đắt quá, bớt chút đi!', zh: '太貴了，算便宜一點嘛！', en: 'Too expensive, give a little discount!', tag: '殺價金句' },
    { viet: 'Tôi lấy cái này.', zh: '我要買這個。', en: 'I will take this one.', tag: '決定購買' },
    { viet: 'Có thanh toán bằng thẻ không?', zh: '可以刷信用卡嗎？', en: 'Can I pay by credit card?', tag: '支付方式' },
    { viet: 'Có chuyển khoản ngân hàng được không?', zh: '可以轉帳付款嗎？(掃QR Code)', en: 'Can I pay via bank transfer / QR code?', tag: '行動支付' },
    { viet: 'Cho tôi xin hóa đơn đỏ.', zh: '請給我統一發票 (紅發票)。', en: 'Please give me a VAT red invoice.', tag: '商務報帳' },
    { viet: 'Tôi muốn đổi tiền USD sang VND.', zh: '我想將美金兌換成越南盾。', en: 'I want to exchange USD to VND.', tag: '銀行換匯' },
    { viet: 'Tỷ giá hôm nay là bao nhiêu?', zh: '今天的兌換匯率是多少？', en: 'What is today\'s exchange rate?', tag: '匯率諮詢' },
    { viet: 'Cho tôi mở một tài khoản ngân hàng cá nhân.', zh: '我想開立一個個人銀行帳戶。', en: 'I would like to open a personal bank account.', tag: '銀行開戶' },
    { viet: 'Tôi muốn gửi tiết kiệm kỳ hạn một năm.', zh: '我想辦理一年期定期存款。', en: 'I want to make a one-year fixed deposit.', tag: '定存理財' },
    { viet: 'Tôi muốn chuyển khoản cho công ty đối tác.', zh: '我想轉帳給商業合作夥伴公司。', en: 'I want to transfer money to a partner company.', tag: '商務匯款' }
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
    phonologyNoteZh: '中古入聲 -k 尾，對應越語 -c 尾 (Quốc)。',
    compounds: [
      { viet: 'Quốc gia', zh: '國家', en: 'Nation / Country' },
      { viet: 'Quốc tế', zh: '國際', en: 'International' },
      { viet: 'Trung Quốc', zh: '中國', en: 'China' },
      { viet: 'Hàn Quốc', zh: '韓國', en: 'South Korea' },
      { viet: 'Quốc tịch', zh: '國籍', en: 'Nationality' },
      { viet: 'Quốc hội', zh: '國會', en: 'National Assembly' }
    ]
  },
  {
    han: '學 (Xué)',
    root: 'Học',
    meaningZh: '學習、學科',
    meaningEn: 'To study, Academic field',
    phonologyNoteZh: '中古入聲 -k 尾，對應越語 -c 尾 (Học)。',
    compounds: [
      { viet: 'Học sinh', zh: '學生', en: 'Student (K-12)' },
      { viet: 'Đại học', zh: '大學', en: 'University' },
      { viet: 'Học tập', zh: '學習', en: 'Study / Learn' },
      { viet: 'Học viện', zh: '學院', en: 'Academy / Institute' },
      { viet: 'Khoa học', zh: '科學', en: 'Science' },
      { viet: 'Học phí', zh: '學費', en: 'Tuition fee' }
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
    phonologyNoteZh: '漢越音聲調對應：中古去聲字（陰/陽去），對應越語的銳聲/重聲。',
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
    phonologyNoteZh: '聲母 s- 對應中古漢語的生母。',
    compounds: [
      { viet: 'Sinh viên', zh: '大學生', en: 'University student', falseFriend: { literalZh: "生員", warningZh: "越南語中專指『大學生』，而非古代的秀才。" } },
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
      { viet: 'Công nghệ', zh: '科技 / 工藝', en: 'Technology' },
      { viet: 'Công an', zh: '公安 / 警察', en: 'Police' }
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
      { viet: 'Viện bảo tàng', zh: '博物館', en: 'Museum' },
      { viet: 'Viện kiểm sát', zh: '檢察院', en: 'Procuracy' }
    ]
  },
  {
    han: '心 (Xīn)',
    root: 'Tâm',
    meaningZh: '心靈、中心',
    meaningEn: 'Heart, Mind, Center',
    phonologyNoteZh: '中古心母，越語讀為 t-。',
    compounds: [
      { viet: 'Trung tâm', zh: '中心', en: 'Center' },
      { viet: 'Quan tâm', zh: '關心', en: 'To care / Pay attention' },
      { viet: 'Yên tâm', zh: '安心', en: 'Feel at ease' },
      { viet: 'Tâm lý', zh: '心理', en: 'Psychology' }
    ]
  },
  {
    han: '大 (Dà)',
    root: 'Đại',
    meaningZh: '巨大、宏大、高等',
    meaningEn: 'Big, Great, High',
    phonologyNoteZh: '中古定母濁音，越語轉為 đ-，並對應重聲 (Thanh Nặng)。',
    compounds: [
      { viet: 'Đại học', zh: '大學', en: 'University' },
      { viet: 'Đại biểu', zh: '代表', en: 'Representative / Delegate' },
      { viet: 'Đại sứ quán', zh: '大使館', en: 'Embassy' },
      { viet: 'Đại đa số', zh: '大多數', en: 'Great majority' }
    ]
  },
  {
    han: '小 (Xiǎo)',
    root: 'Tiểu',
    meaningZh: '細小、基層',
    meaningEn: 'Small, Minor, Elementary',
    compounds: [
      { viet: 'Tiểu học', zh: '小學', en: 'Elementary school' },
      { viet: 'Tiểu thuyết', zh: '小說', en: 'Novel / Fiction' },
      { viet: 'Tiểu bang', zh: '州 / 小邦', en: 'State (e.g. US state)' }
    ]
  },
  {
    han: '中 (Zhōng)',
    root: 'Trung',
    meaningZh: '中央、居中、中間',
    meaningEn: 'Center, Middle, Neutral',
    compounds: [
      { viet: 'Trung tâm', zh: '中心', en: 'Center / Hub' },
      { viet: 'Trung Quốc', zh: '中國', en: 'China' },
      { viet: 'Trung học', zh: '中學', en: 'High school' },
      { viet: 'Trung niên', zh: '中年', en: 'Middle-aged' }
    ]
  },
  {
    han: '高 (Gāo)',
    root: 'Cao',
    meaningZh: '高端、崇高、頂點',
    meaningEn: 'High, Advanced, Peak',
    compounds: [
      { viet: 'Cao cấp', zh: '高級', en: 'High-end / Premium' },
      { viet: 'Cao đẳng', zh: '高等專科 / 大專', en: 'Junior college' },
      { viet: 'Cao tốc', zh: '高速公路', en: 'Expressway' },
      { viet: 'Cao ốc', zh: '高樓大廈', en: 'Skyscraper' }
    ]
  },
  {
    han: '人 (Rén)',
    root: 'Nhân',
    meaningZh: '人員、人類、人品',
    meaningEn: 'Person, Human, People',
    compounds: [
      { viet: 'Nhân dân', zh: '人民', en: 'People / Citizens' },
      { viet: 'Nhân viên', zh: '職員 / 員工', en: 'Staff / Employee' },
      { viet: 'Nhân tài', zh: '人才', en: 'Talent' },
      { viet: 'Nhân loại', zh: '人類', en: 'Humanity' }
    ]
  },
  {
    han: '民 (Mín)',
    root: 'Dân',
    meaningZh: '民眾、百姓',
    meaningEn: 'People, Citizen, Folk',
    compounds: [
      { viet: 'Nhân dân', zh: '人民', en: 'People' },
      { viet: 'Dân chủ', zh: '民主', en: 'Democracy' },
      { viet: 'Dân tộc', zh: '民族', en: 'Ethnic group' },
      { viet: 'Công dân', zh: '公民', en: 'Citizen' }
    ]
  },
  {
    han: '家 (Jiā)',
    root: 'Gia',
    meaningZh: '家庭、專門家',
    meaningEn: 'Home, Family, Specialist',
    compounds: [
      { viet: 'Gia đình', zh: '家庭', en: 'Family / Household' },
      { viet: 'Quốc gia', zh: '國家', en: 'Country' },
      { viet: 'Chuyên gia', zh: '專家', en: 'Expert / Specialist' },
      { viet: 'Gia nhập', zh: '加入 / 入會', en: 'To join' }
    ]
  },
  {
    han: '主 (Zhǔ)',
    root: 'Chủ',
    meaningZh: '首長、自主、所有者',
    meaningEn: 'Master, Main, Host',
    compounds: [
      { viet: 'Chủ tịch', zh: '主席 / 董事長', en: 'Chairman / President' },
      { viet: 'Chủ đề', zh: '主題', en: 'Topic / Theme' },
      { viet: 'Chủ động', zh: '主動', en: 'Proactive' },
      { viet: 'Chủ nhân', zh: '主人', en: 'Owner / Host' }
    ]
  },
  {
    han: '員 (Yuán)',
    root: 'Viên',
    meaningZh: '組織成員、人員',
    meaningEn: 'Member, Personnel',
    compounds: [
      { viet: 'Nhân viên', zh: '員工 / 職員', en: 'Employee' },
      { viet: 'Hội viên', zh: '會員', en: 'Club member' },
      { viet: 'Đoàn viên', zh: '團員', en: 'Delegation member' },
      { viet: 'Thành viên', zh: '成員', en: 'Member' }
    ]
  },
  {
    han: '友 (Yǒu)',
    root: 'Hữu',
    meaningZh: '朋友、情誼',
    meaningEn: 'Friend, Friendship',
    compounds: [
      { viet: 'Hữu nghị', zh: '友誼 / 友好', en: 'Friendship' },
      { viet: 'Bằng hữu', zh: '朋友 (古語)', en: 'Companions' },
      { viet: 'Chiến hữu', zh: '戰友', en: 'Comrades' }
    ]
  },
  {
    han: '美 (Měi)',
    root: 'Mỹ',
    meaningZh: '美麗、美術、美國',
    meaningEn: 'Beautiful, Art, USA',
    compounds: [
      { viet: 'Nước Mỹ', zh: '美國', en: 'United States' },
      { viet: 'Mỹ thuật', zh: '美術', en: 'Fine Arts' },
      { viet: 'Mỹ phẩm', zh: '化妝品 / 美容品', en: 'Cosmetics' },
      { viet: 'Thẩm mỹ', zh: '審美 / 醫美', en: 'Aesthetic' }
    ]
  },
  {
    han: '華 (Huá)',
    root: 'Hoa',
    meaningZh: '中華、華麗',
    meaningEn: 'Chinese, Splendid',
    compounds: [
      { viet: 'Trung Hoa', zh: '中華', en: 'China' },
      { viet: 'Hoa kiều', zh: '華僑', en: 'Overseas Chinese' },
      { viet: 'Hoa lệ', zh: '華麗', en: 'Gorgeous' }
    ]
  },
  {
    han: '越 (Yuè)',
    root: 'Việt',
    meaningZh: '越南、超越、優越',
    meaningEn: 'Vietnam, Excel, Exceed',
    phonologyNoteZh: '中古入聲 -t 尾，越語完美保留 -t (Việt)。',
    compounds: [
      { viet: 'Việt Nam', zh: '越南', en: 'Vietnam' },
      { viet: 'Tiếng Việt', zh: '越南語', en: 'Vietnamese Language' },
      { viet: 'Ưu việt', zh: '優越', en: 'Superior' },
      { viet: 'Vượt qua', zh: '跨越 / 克服', en: 'To overcome' }
    ]
  },
  {
    han: '日 (Rì)',
    root: 'Nhật',
    meaningZh: '太陽、日子、日本',
    meaningEn: 'Sun, Day, Japan',
    phonologyNoteZh: '中古入聲 -t 尾，越語保留為 -t (Nhật)。',
    compounds: [
      { viet: 'Nhật Bản', zh: '日本', en: 'Japan' },
      { viet: 'Sinh nhật', zh: '生日', en: 'Birthday' },
      { viet: 'Chủ nhật', zh: '星期日 / 週日', en: 'Sunday' },
      { viet: 'Nhật ký', zh: '日記', en: 'Diary' }
    ]
  },
  {
    han: '台 (Tái)',
    root: 'Đài',
    meaningZh: '台灣、講台、廣播台',
    meaningEn: 'Taiwan, Platform, Station',
    phonologyNoteZh: '中古濁音，對應越語玄聲 (Thanh Huyền) 且聲母為 đ-。',
    compounds: [
      { viet: 'Đài Loan', zh: '台灣', en: 'Taiwan' },
      { viet: 'Đài truyền hình', zh: '電視台', en: 'TV Station' },
      { viet: 'Khán đài', zh: '看台', en: 'Grandstand' }
    ]
  },
  {
    han: '安 (Ān)',
    root: 'An',
    meaningZh: '平安、安定、安全',
    meaningEn: 'Safe, Peace, Secure',
    compounds: [
      { viet: 'An toàn', zh: '安全', en: 'Safety / Secure' },
      { viet: 'An tâm', zh: '安心', en: 'Peace of mind' },
      { viet: 'Công an', zh: '公安 / 警察', en: 'Public Security' },
      { viet: 'Bình an', zh: '平安', en: 'Peaceful' }
    ]
  },
  {
    han: '機 (Jī)',
    root: 'Cơ',
    meaningZh: '機器、契機、機構',
    meaningEn: 'Machine, Opportunity, Agency',
    compounds: [
      { viet: 'Cơ hội', zh: '機會', en: 'Opportunity' },
      { viet: 'Cơ quan', zh: '機關 / 單位', en: 'Government agency' },
      { viet: 'Cơ cấu', zh: '機構 / 架構', en: 'Structure' },
      { viet: 'Phi cơ', zh: '飛機', en: 'Airplane' }
    ]
  },
  {
    han: '場 (Chǎng)',
    root: 'Trường',
    meaningZh: '場所、田徑場、市場',
    meaningEn: 'Field, Yard, Ground',
    compounds: [
      { viet: 'Phi trường', zh: '飛機場', en: 'Airport' },
      { viet: 'Thị trường', zh: '市場', en: 'Market' },
      { viet: 'Hiện trường', zh: '現場', en: 'Scene / On-site' },
      { viet: 'Chiến trường', zh: '戰場', en: 'Battlefield' }
    ]
  },
  {
    han: '電 (Diàn)',
    root: 'Điện',
    meaningZh: '電力、電信',
    meaningEn: 'Electric, Electronic',
    compounds: [
      { viet: 'Điện thoại', zh: '電話 / 手機', en: 'Telephone / Phone' },
      { viet: 'Điện tử', zh: '電子', en: 'Electronics' },
      { viet: 'Điện ảnh', zh: '電影', en: 'Cinema / Movies' },
      { viet: 'Bưu điện', zh: '郵局', en: 'Post office' }
    ]
  },
  {
    han: '車 (Chē)',
    root: 'Xa',
    meaningZh: '車輛、交通工具',
    meaningEn: 'Vehicle, Car',
    compounds: [
      { viet: 'Xe hơi', zh: '汽車 / 小轎車', en: 'Car' },
      { viet: 'Xe máy', zh: '機車 / 摩托車', en: 'Motorcycle' },
      { viet: 'Xe buýt', zh: '公車 / 巴士', en: 'Bus' },
      { viet: 'Hỏa xa', zh: '火車 (舊稱)', en: 'Train' }
    ]
  },
  {
    han: '通 (Tōng)',
    root: 'Thông',
    meaningZh: '通達、通知、通訊',
    meaningEn: 'Connect, Communicate, Fluent',
    compounds: [
      { viet: 'Giao thông', zh: '交通', en: 'Traffic / Transport' },
      { viet: 'Thông tin', zh: '資訊 / 消息', en: 'Information' },
      { viet: 'Thông báo', zh: '通知 / 公告', en: 'Notice / Announcement' },
      { viet: 'Thông thạo', zh: '精通 / 流利', en: 'Fluent' }
    ]
  },
  {
    han: '行 (Xíng)',
    root: 'Hành',
    meaningZh: '行動、行業、銀行',
    meaningEn: 'Act, Industry, Bank',
    compounds: [
      { viet: 'Ngân hàng', zh: '銀行', en: 'Bank' },
      { viet: 'Hành động', zh: '行動', en: 'Action' },
      { viet: 'Hành chính', zh: '行政', en: 'Administration' },
      { viet: 'Du hành', zh: '旅行 / 漫遊', en: 'Travel' }
    ]
  },
  {
    han: '語 (Yǔ)',
    root: 'Ngữ',
    meaningZh: '語言、語文',
    meaningEn: 'Language, Speech',
    compounds: [
      { viet: 'Ngôn ngữ', zh: '語言', en: 'Language' },
      { viet: 'Ngoại ngữ', zh: '外語', en: 'Foreign language' },
      { viet: 'Ngữ pháp', zh: '語法 / 文法', en: 'Grammar' },
      { viet: 'Anh ngữ', zh: '英語', en: 'English' }
    ]
  },
  {
    han: '言 (Yán)',
    root: 'Ngôn',
    meaningZh: '言語、發言',
    meaningEn: 'Word, Speak, Statement',
    compounds: [
      { viet: 'Phát ngôn', zh: '發言', en: 'Spokesperson / To speak' },
      { viet: 'Tuyên ngôn', zh: '宣言', en: 'Declaration' },
      { viet: 'Ngôn từ', zh: '言詞', en: 'Wording' }
    ]
  },
  {
    han: '文 (Wén)',
    root: 'Văn',
    meaningZh: '文化、文章、文明',
    meaningEn: 'Culture, Text, Civil',
    compounds: [
      { viet: 'Văn hóa', zh: '文化', en: 'Culture' },
      { viet: 'Văn minh', zh: '文明', en: 'Civilization' },
      { viet: 'Văn bản', zh: '文件 / 正式公文', en: 'Document' },
      { viet: 'Luận văn', zh: '論文', en: 'Thesis / Paper' }
    ]
  },
  {
    han: '書 (Shū)',
    root: 'Thư',
    meaningZh: '書籍、公函、秘書',
    meaningEn: 'Book, Letter, Clerk',
    compounds: [
      { viet: 'Thư viện', zh: '圖書館', en: 'Library' },
      { viet: 'Thư ký', zh: '秘書', en: 'Secretary' },
      { viet: 'Chứng thư', zh: '證書', en: 'Certificate' },
      { viet: 'Lá thư', zh: '信件', en: 'Letter' }
    ]
  },
  {
    han: '音 (Yīn)',
    root: 'Âm',
    meaningZh: '聲音、音樂、發音',
    meaningEn: 'Sound, Music, Tone',
    compounds: [
      { viet: 'Âm nhạc', zh: '音樂', en: 'Music' },
      { viet: 'Âm thanh', zh: '聲音 / 聲響', en: 'Sound / Audio' },
      { viet: 'Phát âm', zh: '發音', en: 'Pronunciation' },
      { viet: 'Hán Việt', zh: '漢越音', en: 'Sino-Vietnamese' }
    ]
  },
  {
    han: '名 (Míng)',
    root: 'Danh',
    meaningZh: '名字、名譽、名單',
    meaningEn: 'Name, Fame, List',
    compounds: [
      { viet: 'Danh sách', zh: '名單 / 清單', en: 'List / Roster' },
      { viet: 'Nổi tiếng', zh: '著名 / 有名', en: 'Famous' },
      { viet: 'Họ tên', zh: '姓名', en: 'Full name' },
      { viet: 'Danh dự', zh: '名譽', en: 'Honor' }
    ]
  },
  {
    han: '食 (Shí)',
    root: 'Thực',
    meaningZh: '食物、飲食、實際',
    meaningEn: 'Eat, Food, Reality',
    phonologyNoteZh: '中古入聲 -k 尾，對應越語 -c 尾 (Thực)。',
    compounds: [
      { viet: 'Thực phẩm', zh: '食品', en: 'Food products' },
      { viet: 'Ẩm thực', zh: '飲食文化 / 美食', en: 'Cuisine' },
      { viet: 'Thực tế', zh: '實際', en: 'Realistic / Practical' },
      { viet: 'Thực hiện', zh: '實行 / 執行', en: 'To implement' }
    ]
  },
  {
    han: '品 (Pǐn)',
    root: 'Phẩm',
    meaningZh: '物品、品質、藥品',
    meaningEn: 'Product, Quality, Item',
    compounds: [
      { viet: 'Sản phẩm', zh: '產品', en: 'Product' },
      { viet: 'Dược phẩm', zh: '藥品', en: 'Pharmaceuticals' },
      { viet: 'Phẩm chất', zh: '品質 / 品格', en: 'Quality / Character' },
      { viet: 'Tác phẩm', zh: '作品', en: 'Masterpiece' }
    ]
  },
  {
    han: '物 (Wù)',
    root: 'Vật',
    meaningZh: '萬物、物質、動物',
    meaningEn: 'Matter, Thing, Creature',
    compounds: [
      { viet: 'Động vật', zh: '動物', en: 'Animal' },
      { viet: 'Thực vật', zh: '植物', en: 'Plant / Flora' },
      { viet: 'Vật giá', zh: '物價', en: 'Commodity prices' },
      { viet: 'Nhân vật', zh: '人物', en: 'Character / Figure' }
    ]
  },
  {
    han: '水 (Shuǐ)',
    root: 'Thủy',
    meaningZh: '水域、水產',
    meaningEn: 'Water, Aquatic',
    compounds: [
      { viet: 'Thủy sản', zh: '水產 / 海鮮', en: 'Seafood / Aquaculture' },
      { viet: 'Thủy điện', zh: '水力發電', en: 'Hydropower' },
      { viet: 'Hồng thủy', zh: '洪水', en: 'Flood' }
    ]
  },
  {
    han: '火 (Huǒ)',
    root: 'Hỏa',
    meaningZh: '火焰、火災、火車',
    meaningEn: 'Fire, Flame',
    compounds: [
      { viet: 'Tàu hỏa', zh: '火車 / 鐵路列車', en: 'Train' },
      { viet: 'Hỏa hoạn', zh: '火災', en: 'Conflagration / Fire' },
      { viet: 'Núi lửa', zh: '火山', en: 'Volcano' }
    ]
  },
  {
    han: '地 (Dì)',
    root: 'Địa',
    meaningZh: '土地、地點、地址',
    meaningEn: 'Earth, Land, Place',
    compounds: [
      { viet: 'Địa chỉ', zh: '地址', en: 'Address' },
      { viet: 'Địa điểm', zh: '地點', en: 'Location / Venue' },
      { viet: 'Địa lý', zh: '地理', en: 'Geography' },
      { viet: 'Động đất', zh: '地震', en: 'Earthquake' }
    ]
  },
  {
    han: '金 (Jīn)',
    root: 'Kim',
    meaningZh: '黃金、金融、金屬',
    meaningEn: 'Gold, Finance, Metal',
    compounds: [
      { viet: 'Hoàng kim', zh: '黃金時代', en: 'Golden age' },
      { viet: 'Kim loại', zh: '金屬', en: 'Metal' },
      { viet: 'Kim ngạch', zh: '進出口金額', en: 'Trade turnover' }
    ]
  },
  {
    han: '銀 (Yín)',
    root: 'Ngân',
    meaningZh: '銀兩、銀行、資金',
    meaningEn: 'Silver, Bank, Funds',
    compounds: [
      { viet: 'Ngân hàng', zh: '銀行', en: 'Bank' },
      { viet: 'Ngân sách', zh: '預算', en: 'Budget' },
      { viet: 'Tài chính', zh: '財務 / 金融', en: 'Finance' }
    ]
  },
  {
    han: '市 (Shì)',
    root: 'Thị',
    meaningZh: '城市、市場、市民',
    meaningEn: 'City, Market',
    compounds: [
      { viet: 'Thành phố', zh: '城市 / 市區', en: 'City' },
      { viet: 'Thị trường', zh: '市場', en: 'Market' },
      { viet: 'Thị dân', zh: '市民', en: 'Citizen' },
      { viet: 'Siêu thị', zh: '超市', en: 'Supermarket' }
    ]
  },
  {
    han: '業 (Yè)',
    root: 'Nghiệp',
    meaningZh: '企業、工業、事業',
    meaningEn: 'Business, Profession, Industry',
    compounds: [
      { viet: 'Doanh nghiệp', zh: '企業', en: 'Enterprise / Business' },
      { viet: 'Công nghiệp', zh: '工業', en: 'Industry' },
      { viet: 'Nông nghiệp', zh: '農業', en: 'Agriculture' },
      { viet: 'Nghề nghiệp', zh: '職業', en: 'Career / Occupation' }
    ]
  },
  {
    han: '產 (Chǎn)',
    root: 'Sản',
    meaningZh: '生產、財產、產品',
    meaningEn: 'Produce, Property, Yield',
    compounds: [
      { viet: 'Sản xuất', zh: '生產 / 製造', en: 'Manufacture' },
      { viet: 'Sản phẩm', zh: '產品', en: 'Product' },
      { viet: 'Bất động sản', zh: '房地產 / 不動產', en: 'Real estate' },
      { viet: 'Tài sản', zh: '財產 / 資產', en: 'Assets' }
    ]
  },
  {
    han: '理 (Lǐ)',
    root: 'Lý',
    meaningZh: '管理、理由、理論',
    meaningEn: 'Manage, Reason, Logic',
    compounds: [
      { viet: 'Quản lý', zh: '管理 / 經理', en: 'Management' },
      { viet: 'Lý do', zh: '理由 / 原因', en: 'Reason' },
      { viet: 'Tâm lý', zh: '心理', en: 'Psychology' },
      { viet: 'Lý tưởng', zh: '理想', en: 'Ideal' }
    ]
  },
  {
    han: '士 (Shì)',
    root: 'Sĩ',
    meaningZh: '人士、學士',
    meaningEn: 'Scholar',
    compounds: [
      { viet: 'Bác sĩ', zh: '醫生', en: 'Doctor', falseFriend: { literalZh: '博士', warningZh: '越南語的 Bác sĩ 是指『醫生』，而非學位上的博士（博士為 Tiến sĩ）。' } },
      { viet: 'Tiến sĩ', zh: '博士', en: 'Ph.D.' },
      { viet: 'Ca sĩ', zh: '歌手', en: 'Singer' }
    ]
  },
  {
    han: '歷 (Lì)',
    root: 'Lịch',
    meaningZh: '經歷、歷史',
    meaningEn: 'History, Experience',
    compounds: [
      { viet: 'Lịch sử', zh: '歷史', en: 'History' },
      { viet: 'Lịch sự', zh: '禮貌', en: 'Polite', falseFriend: { literalZh: '歷事', warningZh: '越南語的 Lịch sự 意為『禮貌、文雅』，與中文的歷史事件無關。' } },
      { viet: 'Du lịch', zh: '旅遊', en: 'Travel' }
    ]
  },
  {
    han: '客 (Kè)',
    root: 'Khách',
    meaningZh: '客人',
    meaningEn: 'Guest',
    compounds: [
      { viet: 'Khách hàng', zh: '客戶', en: 'Customer' },
      { viet: 'Khách sạn', zh: '飯店/旅館', en: 'Hotel', falseFriend: { literalZh: '客棧', warningZh: '越南語的 Khách sạn 是現代的『飯店、旅館』，並不是古代的客棧。' } },
      { viet: 'Du khách', zh: '遊客', en: 'Tourist' }
    ]
  },
  {
    han: '方 (Fāng)',
    root: 'Phương',
    meaningZh: '方向、方法',
    meaningEn: 'Direction, Method',
    compounds: [
      { viet: 'Phương pháp', zh: '方法', en: 'Method' },
      { viet: 'Địa phương', zh: '地方', en: 'Local' },
      { viet: 'Phương tiện', zh: '交通工具/手段', en: 'Means / Vehicle', falseFriend: { literalZh: '方便', warningZh: '越南語的 Phương tiện 指的是『交通工具』或『手段』，並非『方便』之意。' } }
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
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chào buổi sáng!",
    "zh": "早安！",
    "en": "Good morning!",
    "usageZh": "清晨早晨打招呼",
    "usageEn": "Morning greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chào buổi chiều!",
    "zh": "午安！",
    "en": "Good afternoon!",
    "usageZh": "下午問候",
    "usageEn": "Afternoon greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chào buổi tối!",
    "zh": "晚上好！",
    "en": "Good evening!",
    "usageZh": "傍晚見面問候",
    "usageEn": "Evening greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chúc ngủ ngon!",
    "zh": "祝你晚安好夢！",
    "en": "Good night!",
    "usageZh": "睡前道晚安",
    "usageEn": "Before sleep"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Dạo này bạn thế nào?",
    "zh": "最近過得如何？",
    "en": "How have you been lately?",
    "usageZh": "寒暄問候近況",
    "usageEn": "Asking about recent life"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Mọi việc vẫn ổn chứ?",
    "zh": "一切都還順利嗎？",
    "en": "Is everything okay?",
    "usageZh": "關心對方狀況",
    "usageEn": "Checking if all is well"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Lâu rồi không gặp!",
    "zh": "好久不見！",
    "en": "Long time no see!",
    "usageZh": "久別重逢",
    "usageEn": "Reunion greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Rất vui được làm quen với bạn.",
    "zh": "很高興能認識你。",
    "en": "Pleased to make your acquaintance.",
    "usageZh": "初次見面結識",
    "usageEn": "First introduction"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bạn đến từ đâu vậy?",
    "zh": "請問你來自哪裡呢？",
    "en": "Where are you from?",
    "usageZh": "詢問家鄉國籍",
    "usageEn": "Asking origin"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi đến từ Đài Loan.",
    "zh": "我來自台灣。",
    "en": "I am from Taiwan.",
    "usageZh": "表明身份來源",
    "usageEn": "Stating origin"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Xin lỗi vì đã làm phiền bạn.",
    "zh": "抱歉打擾你了。",
    "en": "Sorry for bothering you.",
    "usageZh": "禮貌致歉",
    "usageEn": "Polite apology"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Không có chi đâu!",
    "zh": "一點也不客氣！",
    "en": "Not at all / Don’t mention it!",
    "usageZh": "親切回應謝意",
    "usageEn": "Warm reply to thanks"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Làm ơn cho tôi hỏi một chút.",
    "zh": "麻煩請讓我問一下。",
    "en": "Please let me ask a quick question.",
    "usageZh": "禮貌開口詢問",
    "usageEn": "Polite inquiry intro"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chúc bạn một ngày tốt lành!",
    "zh": "祝你有美好的一天！",
    "en": "Have a great day!",
    "usageZh": "道別祝福",
    "usageEn": "Day wishing"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chúc cuối tuần vui vẻ!",
    "zh": "祝週末愉快！",
    "en": "Have a nice weekend!",
    "usageZh": "週五道別賀詞",
    "usageEn": "Weekend wishing"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bạn nói tiếng Anh được không?",
    "zh": "你會說英文嗎？",
    "en": "Can you speak English?",
    "usageZh": "語言溝通確認",
    "usageEn": "Checking English ability"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi chỉ biết một chút tiếng Việt.",
    "zh": "我只會一點點越南語。",
    "en": "I only speak a little Vietnamese.",
    "usageZh": "表達語言程度",
    "usageEn": "Stating basic language skills"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Xin nói chậm lại một chút.",
    "zh": "請說得慢一點。",
    "en": "Please speak a bit slower.",
    "usageZh": "請對方放慢語速",
    "usageEn": "Asking to slow down"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bạn có thể nhắc lại được không?",
    "zh": "你可以再重複一次嗎？",
    "en": "Could you repeat that please?",
    "usageZh": "沒聽清請求重述",
    "usageEn": "Asking for repetition"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi hiểu rồi, cảm ơn bạn.",
    "zh": "我明白了，謝謝你。",
    "en": "I understand now, thank you.",
    "usageZh": "確認聽懂指示",
    "usageEn": "Confirming understanding"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi không hiểu lắm.",
    "zh": "我不太明白。",
    "en": "I do not quite understand.",
    "usageZh": "表達困惑",
    "usageEn": "Expressing lack of comprehension"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Hẹn sớm gặp lại nhé!",
    "zh": "期待很快再見到你！",
    "en": "Hope to see you again soon!",
    "usageZh": "熱情告別",
    "usageEn": "Warm farewell"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Đi cẩn thận nhé!",
    "zh": "路上小心喔！慢走！",
    "en": "Take care on your way!",
    "usageZh": "送客叮嚀",
    "usageEn": "Seeing someone off safely"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chúc chuyến đi thượng lộ bình an!",
    "zh": "祝旅途一路平安！",
    "en": "Bon voyage / Safe journey!",
    "usageZh": "祝願遠行順利",
    "usageEn": "Wishing a safe journey"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Xin gửi lời chào đến gia đình bạn.",
    "zh": "請代我向你的家人問好。",
    "en": "Please give my regards to your family.",
    "usageZh": "代為致意",
    "usageEn": "Sending regards to family"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bạn đã ăn cơm chưa?",
    "zh": "你吃飽飯了嗎？",
    "en": "Have you eaten yet?",
    "usageZh": "越式經典關心問候",
    "usageEn": "Classic Vietnamese greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi ăn rồi, cảm ơn bạn.",
    "zh": "我吃過了，謝謝你。",
    "en": "I have eaten, thank you.",
    "usageZh": "回答問候",
    "usageEn": "Replying to meal greeting"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Chưa, tôi đang chuẩn bị đi ăn.",
    "zh": "還沒，我正準備去吃飯。",
    "en": "Not yet, I am about to go eat.",
    "usageZh": "回答問候並延伸話題",
    "usageEn": "Meal status response"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Cứ tự nhiên như ở nhà nhé!",
    "zh": "請放輕鬆，當作自己家一樣！",
    "en": "Make yourself at home!",
    "usageZh": "招待客人放鬆",
    "usageEn": "Welcoming guests"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Rất hân hạnh được đón tiếp bạn.",
    "zh": "非常榮幸能接待你。",
    "en": "It is an honor to host you.",
    "usageZh": "正式迎賓客套",
    "usageEn": "Formal guest reception"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi có thể chụp một tấm hình không?",
    "zh": "我可以拍一張合照嗎？",
    "en": "May I take a photo with you?",
    "usageZh": "請求拍照留念",
    "usageEn": "Asking for a photo"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Cho tôi xin số điện thoại của bạn.",
    "zh": "可以給我你的電話號碼嗎？",
    "en": "May I have your phone number?",
    "usageZh": "交換聯絡方式",
    "usageEn": "Asking for contact"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bạn có dùng Zalo không?",
    "zh": "你有用 Zalo 嗎？",
    "en": "Do you use Zalo?",
    "usageZh": "越南最常用通訊軟體",
    "usageEn": "Inquiring Zalo account"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Kết bạn Zalo với tôi nhé!",
    "zh": "加我的 Zalo 好友喔！",
    "en": "Add me on Zalo please!",
    "usageZh": "互加通訊軟體好友",
    "usageEn": "Adding friend on Zalo"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Nhắn tin cho tôi khi rảnh nhé.",
    "zh": "有空時傳訊息給我喔。",
    "en": "Text me when you are free.",
    "usageZh": "保持聯絡叮嚀",
    "usageEn": "Keep in touch"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Hôm nay trời đẹp quá nhỉ!",
    "zh": "今天天氣真好呢！",
    "en": "The weather is so lovely today!",
    "usageZh": "破冰聊日常天氣",
    "usageEn": "Icebreaking weather comment"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Hôm nay bạn bận không?",
    "zh": "今天你忙不忙呢？",
    "en": "Are you busy today?",
    "usageZh": "相約前確認空檔",
    "usageEn": "Checking availability"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Tôi rảnh cả ngày hôm nay.",
    "zh": "我今天一整天都有空。",
    "en": "I am free all day today.",
    "usageZh": "表達有空閒時間",
    "usageEn": "Stating availability"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Thật tuyệt khi được nói chuyện với bạn.",
    "zh": "能和你聊天真愉快。",
    "en": "It was great chatting with you.",
    "usageZh": "相談甚歡道別",
    "usageEn": "Pleasant conversation closure"
  },
  {
    "category": "問候與禮貌 / Greetings",
    "viet": "Bảo trọng nhé!",
    "zh": "請多保重身體喔！",
    "en": "Take good care of yourself!",
    "usageZh": "關懷叮嚀告別",
    "usageEn": "Take care wish"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly cà phê sữa đá mang về.",
    "zh": "給我一杯外帶冰奶咖啡。",
    "en": "One iced milk coffee to go please.",
    "usageZh": "街頭咖啡外帶點餐",
    "usageEn": "Ordering iced milk coffee takeout"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly cà phê đen đá không đường.",
    "zh": "給我一杯無糖冰黑咖啡。",
    "en": "One iced black coffee with no sugar.",
    "usageZh": "黑咖啡無糖特調",
    "usageEn": "Unsweetened black iced coffee"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly bạc xỉu nhiều sữa ít cà phê.",
    "zh": "給我一杯白咖啡（多奶少咖啡）。",
    "en": "One Bac Xiu (extra milk, light coffee).",
    "usageZh": "經典西貢白咖啡",
    "usageEn": "Ordering Saigon Bac Xiu"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly cà phê trứng nóng.",
    "zh": "給我一杯熱蛋黃咖啡。",
    "en": "One hot egg coffee please.",
    "usageZh": "河內必喝蛋咖啡",
    "usageEn": "Hanoi egg coffee order"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly cà phê muối.",
    "zh": "給我一杯順化鹽味奶蓋咖啡。",
    "en": "One Hue salted cream coffee.",
    "usageZh": "順化特色鹽咖啡",
    "usageEn": "Hue salt coffee"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly cà phê cốt dừa đá xay.",
    "zh": "給我一杯椰奶冰沙咖啡。",
    "en": "One coconut smoothie coffee.",
    "usageZh": "越式椰子冰沙咖啡",
    "usageEn": "Coconut coffee smoothie"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho em xin một ly trà đá nhé.",
    "zh": "請給我一杯冰茶。",
    "en": "Please give me an iced tea.",
    "usageZh": "越式佐餐百搭冰茶",
    "usageEn": "Requesting street iced tea"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Trà này có châm thêm nước nóng được không?",
    "zh": "這壺茶可以加熱水回沖嗎？",
    "en": "Can you refill hot water for this tea?",
    "usageZh": "茶壺回沖熱水",
    "usageEn": "Tea pot refill request"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly sinh tố bơ ít sữa đặc.",
    "zh": "給我一杯酪梨冰沙，少煉乳。",
    "en": "One avocado smoothie with less condensed milk.",
    "usageZh": "果汁攤點酪梨冰沙",
    "usageEn": "Avocado smoothie less sweet"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly sinh tố xoài mãng cầu.",
    "zh": "給我一杯芒果加白毛丹冰沙。",
    "en": "One mango and soursop smoothie.",
    "usageZh": "綜合南洋熱帶果汁",
    "usageEn": "Mango soursop smoothie"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một trái dừa tươi chặt ướp lạnh.",
    "zh": "給我一顆切好的冰鎮新鮮椰子。",
    "en": "One chilled fresh coconut please.",
    "usageZh": "新鮮現剖椰子水",
    "usageEn": "Fresh chilled coconut"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly nước mía siêu sạch có tắc.",
    "zh": "給我一杯加金桔的現榨甘蔗汁。",
    "en": "One sugarcane juice with kumquat.",
    "usageZh": "街頭必喝金桔甘蔗汁",
    "usageEn": "Sugarcane with calamansi"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly trà đào cam sả.",
    "zh": "給我一杯蜜桃柳橙香茅茶。",
    "en": "One peach orange lemongrass tea.",
    "usageZh": "越式連鎖網美水果茶",
    "usageEn": "Peach orange lemongrass tea"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly trà sen vàng hạt sen.",
    "zh": "給我一杯黃金蓮子烏龍茶。",
    "en": "One golden lotus seed tea.",
    "usageZh": "越式蓮子茶名飲",
    "usageEn": "Highlands lotus tea"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho ít đá thôi nhé em.",
    "zh": "幫我做微冰/少冰喔。",
    "en": "Less ice please.",
    "usageZh": "冰塊調整",
    "usageEn": "Ice reduction request"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Không lấy đá, để riêng đá giúp anh.",
    "zh": "不要冰塊，幫我把冰塊另外裝。",
    "en": "No ice, put ice in a separate cup please.",
    "usageZh": "冰塊分開裝",
    "usageEn": "Ice on the side"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho ba mươi phần trăm đường thôi.",
    "zh": "做三分微糖就好。",
    "en": "Thirty percent sugar please.",
    "usageZh": "微糖甜度客製",
    "usageEn": "30% sugar customization"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Có sữa yến mạch hoặc sữa hạt không?",
    "zh": "有燕麥奶或堅果奶嗎？",
    "en": "Do you have oat milk or nut milk?",
    "usageZh": "植物奶需求",
    "usageEn": "Plant-based milk inquiry"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho thêm một phần trân châu trắng.",
    "zh": "再加一份白玉寒天珍珠。",
    "en": "Add an extra portion of white boba.",
    "usageZh": "手搖飲加料",
    "usageEn": "Adding boba pearls"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Quán có ổ cắm điện để sạc laptop không?",
    "zh": "店裡有插座可以充筆電嗎？",
    "en": "Are there power outlets to charge laptop?",
    "usageZh": "咖啡廳辦公充電",
    "usageEn": "Laptop charging outlet"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Mật khẩu Wi-Fi của quán là gì?",
    "zh": "請問店裡的 Wi-Fi 密碼是多少？",
    "en": "What is the Wi-Fi password here?",
    "usageZh": "詢問上網密碼",
    "usageEn": "Inquiring Wi-Fi password"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho tôi ngồi bàn cạnh cửa sổ nhé.",
    "zh": "請讓我坐靠窗的位子。",
    "en": "I would like a table by the window.",
    "usageZh": "選靠窗景觀座位",
    "usageEn": "Window seat request"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cà phê này pha phin hay pha máy?",
    "zh": "這款咖啡是滴漏還是義式機壓的？",
    "en": "Is this drip phin coffee or machine espresso?",
    "usageZh": "詢問咖啡沖泡方式",
    "usageEn": "Drip vs Espresso check"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Hạt cà phê này là Robusta hay Arabica?",
    "zh": "這是羅布斯塔還是阿拉比卡咖啡豆？",
    "en": "Is this bean Robusta or Arabica?",
    "usageZh": "品評精品咖啡豆種",
    "usageEn": "Coffee bean variety"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Bán cho tôi một gói cà phê bột năm trăm gram.",
    "zh": "賣我一包 500 克的現磨咖啡粉。",
    "en": "Sell me a 500g bag of ground coffee.",
    "usageZh": "購買咖啡伴手禮",
    "usageEn": "Buying 500g ground coffee"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Có bán phin pha cà phê inox không?",
    "zh": "有賣不銹鋼咖啡滴漏壺嗎？",
    "en": "Do you sell stainless steel phin filters?",
    "usageZh": "購買滴漏壺器具",
    "usageEn": "Buying Vietnamese phin"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Uống tại quán hay mang đi?",
    "zh": "內用還是外帶呢？",
    "en": "For here or to go?",
    "usageZh": "店員詢問用餐方式",
    "usageEn": "Dine-in or takeaway"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Tôi dùng tại quán.",
    "zh": "我要在店內享用。",
    "en": "For here please.",
    "usageZh": "表明內用",
    "usageEn": "Dine-in selection"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Tôi mang đi, cho vào túi chữ T giúp tôi.",
    "zh": "我要外帶，請幫我裝在 T 字外帶袋。",
    "en": "Takeaway please, put in a T-bag handle.",
    "usageZh": "越式特色外帶提袋",
    "usageEn": "Takeout with handle"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho xin thêm một cái ống hút và khăn giấy.",
    "zh": "請多給我一根吸管和紙巾。",
    "en": "Give me an extra straw and tissue please.",
    "usageZh": "索取備用耗材",
    "usageEn": "Requesting straw and tissue"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Ly này ngon và thơm quá!",
    "zh": "這杯咖啡又香又好喝！",
    "en": "This cup is so fragrant and tasty!",
    "usageZh": "讚美飲品風味",
    "usageEn": "Praising coffee taste"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một đĩa hạt hướng dương cắn chơi.",
    "zh": "給我一盤嗑葵花籽。",
    "en": "Give me a plate of sunflower seeds.",
    "usageZh": "越式街頭喝茶嗑瓜子標配",
    "usageEn": "Sunflower seeds with tea"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Nước ép dưa hấu không bỏ đường.",
    "zh": "現榨西瓜汁不加糖。",
    "en": "Watermelon juice with no added sugar.",
    "usageZh": "純天然無糖果汁",
    "usageEn": "No sugar watermelon juice"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly sữa chua đánh đá cacao.",
    "zh": "給我一杯可可冰磚優格。",
    "en": "One iced yogurt with cocoa powder.",
    "usageZh": "特色越式冰優格",
    "usageEn": "Iced yogurt with cocoa"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cho một ly sữa chua nếp cẩm.",
    "zh": "給我一杯紫米黑糯米優格。",
    "en": "One black glutinous rice yogurt.",
    "usageZh": "北越傳統甜品優格",
    "usageEn": "Black sticky rice yogurt"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Có thanh toán bằng ví Momo được không?",
    "zh": "可以用 MoMo 電子錢包付款嗎？",
    "en": "Can I pay via Momo e-wallet?",
    "usageZh": "越南最普及電子支付",
    "usageEn": "Momo payment check"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Quét mã QR chuyển khoản ngân hàng nhé.",
    "zh": "我掃 QR Code 轉帳付款喔。",
    "en": "I will scan QR code to transfer via bank app.",
    "usageZh": "掃碼轉帳付款",
    "usageEn": "VietQR bank transfer"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Cà phê ở đây đậm đà đúng điệu.",
    "zh": "這裡的咖啡非常濃郁道地。",
    "en": "The coffee here is rich and authentic.",
    "usageZh": "稱讚咖啡濃郁度",
    "usageEn": "Authentic rich coffee"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Mở cửa từ mấy giờ đến mấy giờ?",
    "zh": "營業時間從幾點到幾點呢？",
    "en": "What are your opening hours?",
    "usageZh": "確認營業時間",
    "usageEn": "Opening hours inquiry"
  },
  {
    "category": "咖啡與飲品 / Cafe & Drinks",
    "viet": "Quán mở cửa 24 trên 24 giờ.",
    "zh": "本店 24 小時全天候營業。",
    "en": "The cafe is open 24/7.",
    "usageZh": "通宵咖啡廳說明",
    "usageEn": "24-hour service"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho chúng tôi xem thực đơn món ăn.",
    "zh": "請給我們看菜單。",
    "en": "Please let us see the food menu.",
    "usageZh": "入座點餐開頭",
    "usageEn": "Requesting food menu"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Quán có món gì ngon và nổi tiếng nhất?",
    "zh": "店裡有什麼最好吃、最招牌的菜？",
    "en": "What is your most famous signature dish?",
    "usageZh": "詢問主廚招牌菜",
    "usageEn": "Asking for house specialty"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một tô phở bò đặc biệt đầy đủ.",
    "zh": "給我一碗豪華全熟生牛肉全套大碗河粉。",
    "en": "One special combo beef pho with everything.",
    "usageZh": "點全套豪華牛肉河粉",
    "usageEn": "Special combo beef pho"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho thêm một đĩa thịt bò tái.",
    "zh": "再加一份生牛肉切片。",
    "en": "Add a plate of rare beef slices.",
    "usageZh": "加點生牛肉盤",
    "usageEn": "Extra rare beef plate"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho thêm chén tiết canh hoặc nước béo.",
    "zh": "請多給一碗牛骨油湯精華。",
    "en": "Give me a small bowl of rich broth oil.",
    "usageZh": "河內老饕道地油湯",
    "usageEn": "Rich broth oil add-on"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho hai cặp bánh quẩy giòn.",
    "zh": "給我兩份酥脆油條。",
    "en": "Give me two pairs of crispy crullers.",
    "usageZh": "河粉搭油條必點",
    "usageEn": "Ordering crullers for pho"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một phần bún chả nem rán.",
    "zh": "給我一份烤肉米線加炸春捲。",
    "en": "One grilled pork noodles with fried spring rolls.",
    "usageZh": "河內烤肉春捲米線",
    "usageEn": "Bun cha with fried spring rolls"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một phần bún đậu mắm tôm.",
    "zh": "給我一份豆腐炸春捲蝦醬米線。",
    "en": "One tofu and pork vermicelli with shrimp paste.",
    "usageZh": "越式特色蝦醬米線",
    "usageEn": "Bun dau mam tom"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Tôi không ăn được mắm tôm, đổi sang nước mắm.",
    "zh": "我不敢吃蝦醬，請幫我換成魚露。",
    "en": "I cannot eat shrimp paste, swap for fish sauce please.",
    "usageZh": "不敢吃蝦醬時換魚露",
    "usageEn": "Swap shrimp paste for fish sauce"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một tô bún bò Huế giò heo chả cua.",
    "zh": "給我一碗順化豬腳蟹肉丸牛肉米線。",
    "en": "One Hue beef vermicelli with pork knuckle & crab balls.",
    "usageZh": "順化特產香辣米線",
    "usageEn": "Bun bo Hue order"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một đĩa cơm tấm sườn bì chả ốp la.",
    "zh": "給我一份碎米飯排骨肉絲蒸蛋煎蛋全餐。",
    "en": "One broken rice with grilled pork chop, skin & fried egg.",
    "usageZh": "胡志明市碎米飯之王",
    "usageEn": "Com tam suon bi cha op la"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một cái bánh xèo miền Tây giòn rụm.",
    "zh": "給我一份酥脆的西南部越式黃金煎餅。",
    "en": "One crispy southwestern Banh Xeo pancake.",
    "usageZh": "越式巨型酥脆煎餅",
    "usageEn": "Western Banh Xeo"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Bánh này cuốn với rau rừng và chấm nước mắm.",
    "zh": "這個煎餅包生菜葉再沾魚露吃。",
    "en": "Wrap this pancake in wild leaves and dip in fish sauce.",
    "usageZh": "吃法指導",
    "usageEn": "How to eat Banh Xeo"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho thêm một đĩa rau sống tươi.",
    "zh": "再多給一盤新鮮生菜盤。",
    "en": "Please give us an extra plate of fresh herbs.",
    "usageZh": "免費/加點生菜籃",
    "usageEn": "Extra herbs basket"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho bốn cuốn gỏi cuốn tôm thịt.",
    "zh": "給我四條鮮蝦豬肉生春捲。",
    "en": "Four fresh summer rolls with shrimp & pork.",
    "usageZh": "招牌清爽生春捲",
    "usageEn": "Fresh shrimp summer rolls"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Chấm tương đậu phộng hay nước mắm tỏi ớt?",
    "zh": "沾花生黑醬還是蒜辣魚露呢？",
    "en": "Dip in peanut sauce or garlic chili fish sauce?",
    "usageZh": "生春捲沾醬選擇",
    "usageEn": "Peanut sauce vs Fish sauce"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một phần chả cá Lã Vọng thơm nức.",
    "zh": "給我一份香氣四溢的河內老牌薑黃烤魚。",
    "en": "One portion of La Vong turmeric grilled fish.",
    "usageZh": "河內百年名菜油炸魚",
    "usageEn": "Cha Ca La Vong dish"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một cái bánh mì heo quay giòn bì.",
    "zh": "給我一個脆皮烤豬肉法國麵包。",
    "en": "One banh mi with crispy roasted pork belly.",
    "usageZh": "脆皮燒肉法國麵包",
    "usageEn": "Crispy pork banh mi"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Bỏ nhiều ngò rí và đồ chua giúp tôi.",
    "zh": "幫我多放芫荽香菜和醃酸蘿蔔絲。",
    "en": "Add extra cilantro and pickled daikon & carrots.",
    "usageZh": "麵包加料客製",
    "usageEn": "Extra cilantro & pickles"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Không bỏ ớt tươi và tương ớt cay.",
    "zh": "不要放生辣椒和辣椒醬。",
    "en": "Do not put fresh chili or chili sauce.",
    "usageZh": "免辣備註",
    "usageEn": "No spicy sauce"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một tô cháo lòng nóng hổi.",
    "zh": "給我一碗熱騰騰的豬雜豬血粥。",
    "en": "One bowl of hot pork offal porridge.",
    "usageZh": "傳統豬雜粥",
    "usageEn": "Pork organ porridge"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho một phần lẩu hải sản chua cay.",
    "zh": "給我一份泰式酸辣海鮮火鍋。",
    "en": "One sweet & sour spicy seafood hotpot.",
    "usageZh": "多人海鮮酸辣火鍋",
    "usageEn": "Seafood sour spicy hotpot"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Lẩu này cho thêm mì tôm và nấm.",
    "zh": "火鍋幫我們再加泡麵和綜合菇。",
    "en": "Add instant noodles and mushrooms to this hotpot.",
    "usageZh": "火鍋加點麵食菇類",
    "usageEn": "Adding noodles to hotpot"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Món này có cay lắm không em?",
    "zh": "這道菜吃起來會很辣嗎？",
    "en": "Is this dish very spicy?",
    "usageZh": "確認辣度",
    "usageEn": "Asking spice level"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Làm ít cay hoặc không cay nhé.",
    "zh": "幫我做微辣或者完全不辣喔。",
    "en": "Make it mild or non-spicy please.",
    "usageZh": "要求微辣或不辣",
    "usageEn": "Mild spice request"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Tôi bị dị ứng với đậu phộng.",
    "zh": "我對花生嚴重過敏。",
    "en": "I am allergic to peanuts.",
    "usageZh": "食物過敏聲明",
    "usageEn": "Peanut allergy warning"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Tôi bị dị ứng với hải sản vỏ cứng.",
    "zh": "我對蝦蟹貝類甲殼海鮮過敏。",
    "en": "I am allergic to shellfish and shrimp.",
    "usageZh": "海鮮過敏聲明",
    "usageEn": "Shellfish allergy warning"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Món này không bỏ bột ngọt nhé.",
    "zh": "這道菜請完全不要加味精。",
    "en": "Please do not add MSG to this dish.",
    "usageZh": "要求不加味精 (MSG free)",
    "usageEn": "No MSG request"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho xin thêm hai cái bát nhỏ và hai đôi đũa.",
    "zh": "請多給兩個小碗和兩雙筷子。",
    "en": "Give us two extra small bowls and two pairs of chopsticks.",
    "usageZh": "索取分食餐具",
    "usageEn": "Extra bowls and chopsticks"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Khăn lạnh này có tính tiền riêng không?",
    "zh": "這包濕紙巾有額外收費嗎？",
    "en": "Do you charge separately for these wet towels?",
    "usageZh": "詢問濕紙巾費用（越常收2-3k）",
    "usageEn": "Wet wipe charge check"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Đồ ăn mang ra nhanh giúp tôi nhé.",
    "zh": "麻煩請幫我們出菜快一點喔。",
    "en": "Please bring the food out quickly.",
    "usageZh": "催菜加速出餐",
    "usageEn": "Expedite food order"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Bàn chúng tôi còn thiếu một món xào.",
    "zh": "我們這桌還少上了一盤炒菜。",
    "en": "Our table is still missing one stir-fried dish.",
    "usageZh": "提醒漏單確認",
    "usageEn": "Missing dish follow-up"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho gói thức ăn thừa mang về.",
    "zh": "請幫我把吃不完的菜打包帶走。",
    "en": "Please pack the leftovers for takeout.",
    "usageZh": "餐廳打包剩菜",
    "usageEn": "Takeaway box for leftovers"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Em ơi, tính tiền cho bàn số ba.",
    "zh": "服務生，幫三號桌結帳買單。",
    "en": "Server, bill for table number 3 please.",
    "usageZh": "舉手喊結帳買單",
    "usageEn": "Bill request for table"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cho xin hóa đơn đỏ VAT của công ty.",
    "zh": "請開立公司統編紅發票 (VAT)。",
    "en": "Please issue a corporate red VAT invoice.",
    "usageZh": "商務報帳索取紅發票",
    "usageEn": "Corporate VAT red invoice"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Có chấp nhận thanh toán thẻ tín dụng không?",
    "zh": "可以接受信用卡刷卡付款嗎？",
    "en": "Do you accept credit card payment?",
    "usageZh": "確認信用卡支付",
    "usageEn": "Credit card acceptance check"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Đồ ăn ở quán thực sự rất ngon miệng!",
    "zh": "這家店的料理真的太美味了！",
    "en": "The food here is truly exquisite and tasty!",
    "usageZh": "由衷誇獎廚藝",
    "usageEn": "Complimenting food taste"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Lần sau tôi nhất định sẽ quay lại.",
    "zh": "下次我一定會再來光顧。",
    "en": "I will definitely return next time.",
    "usageZh": "承諾再次光顧",
    "usageEn": "Promising return visit"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Quán có giao hàng tận nơi qua GrabFood không?",
    "zh": "店家有支援 GrabFood 外送嗎？",
    "en": "Do you deliver via GrabFood or ShopeeFood?",
    "usageZh": "詢問外送外帶平台",
    "usageEn": "Delivery app check"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Tôi muốn đặt bàn cho sáu người tối nay.",
    "zh": "我想預訂今晚六個人的餐桌。",
    "en": "I want to reserve a table for 6 tonight.",
    "usageZh": "電話餐廳訂位",
    "usageEn": "Table reservation for 6"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Có phòng riêng VIP cách âm không?",
    "zh": "店裡有隔音的 VIP 獨立包廂嗎？",
    "en": "Do you have a private VIP room?",
    "usageZh": "商務聚餐預約包廂",
    "usageEn": "VIP private dining room"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Giá này đã bao gồm mười phần trăm thuế chưa?",
    "zh": "這個價格已經含 10% 稅金了嗎？",
    "en": "Does this price already include 10% VAT tax?",
    "usageZh": "確認菜單是否含稅",
    "usageEn": "Tax inclusion inquiry"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Tiền thừa này xin gửi tặng em làm tiền boa.",
    "zh": "找零的小錢就留給你當小費吧。",
    "en": "Keep the change as a tip for your service.",
    "usageZh": "給予服務小費",
    "usageEn": "Leaving a tip"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Chúc quý khách ngon miệng!",
    "zh": "祝各位用餐愉快、胃口大開！",
    "en": "Bon appétit! Enjoy your meal!",
    "usageZh": "店員上菜祝賀詞",
    "usageEn": "Enjoy meal wishing"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Cảm ơn và hẹn gặp lại quý khách!",
    "zh": "感謝光臨，歡迎下次再來！",
    "en": "Thank you and see you again!",
    "usageZh": "結帳送客道別",
    "usageEn": "Farewell thanking"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cái này bao nhiêu tiền một cái?",
    "zh": "這個一個多少錢？",
    "en": "How much is this per piece?",
    "usageZh": "問單件價格",
    "usageEn": "Asking unit price"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Một ký xoài này giá bao nhiêu?",
    "zh": "這一公斤芒果賣多少錢？",
    "en": "How much for a kilo of these mangoes?",
    "usageZh": "水果攤秤重問價",
    "usageEn": "Asking fruit price per kg"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có bớt chút nào không cô?",
    "zh": "阿姨，可以算便宜一點點嗎？",
    "en": "Can you lower the price a little bit?",
    "usageZh": "市場溫和殺價",
    "usageEn": "Mild bargaining question"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Đắt quá, giảm giá cho tôi đi!",
    "zh": "太貴了啦，給我打個折吧！",
    "en": "Too expensive, give me a discount please!",
    "usageZh": "直接請求降價",
    "usageEn": "Direct discount request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Nếu tôi mua ba cái thì giá bao nhiêu?",
    "zh": "如果我買三個的話算多少錢？",
    "en": "If I buy 3 pieces, how much will it be?",
    "usageZh": "多件批發議價",
    "usageEn": "Bulk discount negotiation"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi mua nhiều, tính giá sỉ giúp tôi nhé.",
    "zh": "我買很多，請幫我算批發價喔。",
    "en": "I am buying a lot, please give me wholesale price.",
    "usageZh": "爭取批發特惠價",
    "usageEn": "Wholesale price request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Bán mở hàng cho tôi giá may mắn đi!",
    "zh": "幫我當今天開市第一單，算個吉利價吧！",
    "en": "Give me a lucky opening price for good fortune!",
    "usageZh": "越式傳統開市討吉利殺價法",
    "usageEn": "Lucky opening deal trick"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cho tôi xem mẫu màu khác được không?",
    "zh": "可以給我看看其他顏色款式的嗎？",
    "en": "Can I see other color options?",
    "usageZh": "更換顏色樣式",
    "usageEn": "Asking for other colors"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cái này có size lớn hơn hoặc nhỏ hơn không?",
    "zh": "這個有大一點或小一點的尺碼嗎？",
    "en": "Do you have this in a larger or smaller size?",
    "usageZh": "挑選合身尺寸",
    "usageEn": "Asking for size variation"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi có thể mặc thử cái áo này không?",
    "zh": "我可以試穿這件衣服嗎？",
    "en": "May I try this shirt on?",
    "usageZh": "請求試穿衣物",
    "usageEn": "Fitting room request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Phòng thay đồ ở chỗ nào vậy bạn?",
    "zh": "請問試衣間在哪個位置呢？",
    "en": "Where is the fitting room located?",
    "usageZh": "找尋更衣試穿室",
    "usageEn": "Locating fitting room"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có cái nào còn nguyên trong hộp/bọc không?",
    "zh": "有全新未拆封包裝的新品嗎？",
    "en": "Do you have a brand new unopened one in box?",
    "usageZh": "要求未拆封全新品",
    "usageEn": "New unopened item request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Hàng này là hàng chính hãng hay hàng nhái?",
    "zh": "這是正品還是仿冒品呢？",
    "en": "Is this genuine brand or replica?",
    "usageZh": "確認真偽產品質感",
    "usageEn": "Authenticity check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Sản phẩm này được sản xuất ở đâu?",
    "zh": "這項產品是在哪裡製造生產的？",
    "en": "Where was this product manufactured?",
    "usageZh": "產地產標確認",
    "usageEn": "Country of origin check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có bảo hành quốc tế không?",
    "zh": "這個商品有國際原廠保固嗎？",
    "en": "Does this product have international warranty?",
    "usageZh": "確認保固售後條款",
    "usageEn": "Warranty inquiry"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Thời hạn bảo hành là bao lâu?",
    "zh": "保固期限是多長時間呢？",
    "en": "How long is the warranty period?",
    "usageZh": "保固年限詢問",
    "usageEn": "Warranty duration"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có thể đổi trả trong vòng mấy ngày?",
    "zh": "可以在幾天之內退換貨？",
    "en": "Within how many days can I exchange or return?",
    "usageZh": "退換貨政策確認",
    "usageEn": "Return policy check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi muốn lấy cái này, gói lại giúp tôi.",
    "zh": "我要買這個，麻煩幫我包裝起來。",
    "en": "I will take this one, please wrap it up for me.",
    "usageZh": "決定購買打包",
    "usageEn": "Purchase decision & wrapping"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Gói làm quà tặng sinh nhật giúp tôi nhé.",
    "zh": "請幫我包裝成生日禮物的樣式喔。",
    "en": "Please wrap it as a birthday gift.",
    "usageZh": "禮品精美包裝",
    "usageEn": "Gift wrapping service"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cho tôi xin một cái túi nilon quai xách.",
    "zh": "請給我一個手提塑膠袋。",
    "en": "Please give me a plastic shopping bag.",
    "usageZh": "索取購物提袋",
    "usageEn": "Requesting shopping bag"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Túi này có tính thêm tiền không?",
    "zh": "這個提袋需要額外加錢付費嗎？",
    "en": "Is there an extra charge for this bag?",
    "usageZh": "確認袋子費用",
    "usageEn": "Bag fee check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi có thể trả bằng tiền mặt đô la Mỹ không?",
    "zh": "我可以直接付美金現金嗎？",
    "en": "Can I pay in US Dollar cash?",
    "usageZh": "外幣現金支付確認",
    "usageEn": "USD cash payment check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Ở đây có chấp nhận thẻ Visa hoặc Mastercard không?",
    "zh": "這裡接受 Visa 或 Mastercard 刷卡嗎？",
    "en": "Do you accept Visa or Mastercard here?",
    "usageZh": "國際信用卡刷卡",
    "usageEn": "Credit card brands check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Máy quẹt thẻ POS đang bị lỗi đường truyền.",
    "zh": "刷卡機連線發生異常錯誤。",
    "en": "The card reader POS machine has a connection error.",
    "usageZh": "店員告知刷卡機故障",
    "usageEn": "POS terminal error"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Để tôi chuyển khoản qua ngân hàng cho nhanh.",
    "zh": "那我用銀行 App 轉帳比較快。",
    "en": "Let me transfer via bank app for speed.",
    "usageZh": "轉帳即時付款",
    "usageEn": "Bank transfer alternative"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi đưa một triệu, thối lại giúp tôi bảy trăm.",
    "zh": "我給一百萬，請找我七十萬盾。",
    "en": "I give 1M, please give me 700k in change.",
    "usageZh": "算清找零大鈔",
    "usageEn": "Change calculation"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tiền này bị rách góc, đổi tờ khác giúp tôi.",
    "zh": "這張鈔票破損缺角了，請換一張給我。",
    "en": "This note is torn, please exchange for another.",
    "usageZh": "拒收破損紙鈔",
    "usageEn": "Damaged banknote replacement"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Ở chợ đêm có bán đồ lưu niệm không?",
    "zh": "夜市裡有賣紀念品伴手禮嗎？",
    "en": "Does the night market sell souvenirs?",
    "usageZh": "找尋特色紀念品",
    "usageEn": "Souvenir search"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cà phê chồn này có chứng nhận thật không?",
    "zh": "這包麝香貓咖啡有正品檢驗認證嗎？",
    "en": "Does this Weasel civet coffee have genuine certificate?",
    "usageZh": "買高檔咖啡確認真假",
    "usageEn": "Civet coffee authenticity"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Hạt điều rang muối vỏ lụa Bình Phước.",
    "zh": "平福省特產帶皮帶殼鹽烤腰果。",
    "en": "Binh Phuoc roasted salted cashews with silk skin.",
    "usageZh": "越南名產腰果指名購買",
    "usageEn": "Cashew nuts specialty"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Mua mười hộp có đóng thùng carton gửi máy bay không?",
    "zh": "買十盒有幫忙封箱打包托運搭機嗎？",
    "en": "If I buy 10 boxes, do you pack in a flight carton?",
    "usageZh": "大量伴手禮打包裝箱",
    "usageEn": "Flight packing carton"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cho tôi hóa đơn chi tiết từng món hàng.",
    "zh": "請給我列出每樣商品明細的收據。",
    "en": "Give me an itemized receipt please.",
    "usageZh": "索取明細收據",
    "usageEn": "Itemized receipt"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Tôi muốn hoàn thuế VAT ở sân bay.",
    "zh": "我想在機場辦理外籍旅客退稅 (VAT Refund)。",
    "en": "I want to claim VAT refund at the airport.",
    "usageZh": "辦理退稅單據",
    "usageEn": "VAT refund procedure"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Viết phiếu hoàn thuế du lịch giúp tôi nhé.",
    "zh": "麻煩幫我填寫觀光客退稅申請單喔。",
    "en": "Please fill out the tourist tax refund slip for me.",
    "usageZh": "填寫退稅單",
    "usageEn": "Tax refund slip request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Chợ mở cửa từ mấy giờ đến mấy giờ?",
    "zh": "這個傳統市場營業到幾點結束？",
    "en": "What time does the market open and close?",
    "usageZh": "確認市場營業時段",
    "usageEn": "Market opening hours"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Đừng nói thách giá cao quá nhé cô!",
    "zh": "阿姨不要把價格開太高騙觀光客啦！",
    "en": "Do not quote too high for tourists please!",
    "usageZh": "風趣幽默化解抬價",
    "usageEn": "Humorous anti-overcharging"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Hai trăm nghìn được thì tôi lấy luôn.",
    "zh": "二十萬盾可以的話我立刻拿。",
    "en": "200k VND and I will take it right now.",
    "usageZh": "一口底價殺價成交法",
    "usageEn": "Firm final price offer"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Không được thì tôi đi sang quầy khác xem.",
    "zh": "如果不行的話我就去別攤看看囉。",
    "en": "If not, I will check out other stalls.",
    "usageZh": "欲擒故縱轉身殺價法",
    "usageEn": "Walking away tactic"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Thôi được rồi, bán cho bạn giá hữu nghị!",
    "zh": "好啦好啦，算你交朋友的友情價！",
    "en": "Alright, I will sell to you at friendly price!",
    "usageZh": "攤商妥協成交詞",
    "usageEn": "Vendor agreeing to discount"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Cảm ơn cô, chúc cô buôn may bán đắt!",
    "zh": "謝謝阿姨，祝妳生意興隆大發財！",
    "en": "Thank you auntie, wish you prosperous sales!",
    "usageZh": "成交後討喜吉祥話",
    "usageEn": "Prosperity wish to vendor"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Áo dài truyền thống may đo lấy gấp.",
    "zh": "傳統越式旗袍奧黛加急量身訂做。",
    "en": "Custom-made traditional Ao Dai express service.",
    "usageZh": "訂做傳統奧黛禮服",
    "usageEn": "Custom Ao Dai tailoring"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Bao lâu thì may xong bộ áo dài này?",
    "zh": "訂做這套奧黛需要幾天可以完成？",
    "en": "How long to finish tailoring this Ao Dai?",
    "usageZh": "詢問成衣訂做工期",
    "usageEn": "Tailoring duration inquiry"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có dịch vụ giao áo tận khách sạn không?",
    "zh": "做好了有幫忙外送到飯店櫃台嗎？",
    "en": "Can you deliver the finished dress to my hotel?",
    "usageZh": "要求送件到飯店",
    "usageEn": "Hotel delivery request"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Đồ gốm sứ này có dễ vỡ khi vận chuyển không?",
    "zh": "這件陶瓷品托運搭飛機會容易碎嗎？",
    "en": "Is this ceramic fragile during flight shipping?",
    "usageZh": "易碎品包裝確認",
    "usageEn": "Fragile item shipping check"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Bọc màng xốp bóng khí cẩn thận giúp tôi.",
    "zh": "請幫我用氣泡防撞膜多包幾層保護。",
    "en": "Please wrap tightly with bubble wrap.",
    "usageZh": "氣泡膜加強防護",
    "usageEn": "Bubble wrap protection"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn gọi xe GrabCar bốn chỗ.",
    "zh": "我想叫一輛四人座 Grab 汽車。",
    "en": "I want to book a 4-seater GrabCar.",
    "usageZh": "App 叫車指名車型",
    "usageEn": "Booking 4-seater Grab"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn gọi xe GrabBike đi cho nhanh.",
    "zh": "我想叫 Grab 機車避開塞車比較快。",
    "en": "I want to book a GrabBike to beat traffic.",
    "usageZh": "叫機車短途代步",
    "usageEn": "Booking GrabBike"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Bác tài đang ở vị trí nào vậy?",
    "zh": "請問司機大哥現在人在哪個位置？",
    "en": "Where are you currently located, driver?",
    "usageZh": "電話確認司機位置",
    "usageEn": "Asking driver location"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi đang đứng chờ trước sảnh khách sạn.",
    "zh": "我正站在飯店大門大廳前等待。",
    "en": "I am waiting in front of hotel lobby.",
    "usageZh": "告知具體候車點",
    "usageEn": "Stating waiting point"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Biển số xe của bác là bao nhiêu?",
    "zh": "請問你的車牌號碼是多少呢？",
    "en": "What is your vehicle license plate number?",
    "usageZh": "核對車牌確認上車",
    "usageEn": "Checking license plate"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Làm ơn mở cốp xe để tôi cất hành lý.",
    "zh": "麻煩請打開後車廂讓我放行李。",
    "en": "Please pop the trunk so I can load luggage.",
    "usageZh": "請求開後車廂放行李",
    "usageEn": "Opening car trunk"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Cho tôi đến địa chỉ này trên bản đồ.",
    "zh": "請帶我去地圖上標註的這個地址。",
    "en": "Please take me to this address on the map.",
    "usageZh": "指地圖導航路線",
    "usageEn": "Showing map address"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đến sân bay Tân Sơn Nhất hết bao nhiêu phút?",
    "zh": "去新山一國際機場大約需要多少分鐘？",
    "en": "How many minutes to Tan Son Nhat airport?",
    "usageZh": "詢問行車預估時間",
    "usageEn": "Asking trip duration"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đường này có bị kẹt xe vào giờ này không?",
    "zh": "這個路段現在這個時間會大塞車嗎？",
    "en": "Is this route congested at this hour?",
    "usageZh": "打聽路況塞車情況",
    "usageEn": "Traffic jam check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Bác tài chạy cẩn thận, đừng chạy nhanh quá.",
    "zh": "司機大哥請開慢一點，安全第一。",
    "en": "Please drive carefully, not too fast.",
    "usageZh": "提醒安全駕駛慢行",
    "usageEn": "Requesting safe slow driving"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Làm ơn bật đồng hồ tính cước taxi.",
    "zh": "麻煩請務必按下跳表計費器。",
    "en": "Please turn on the taxi meter.",
    "usageZh": "搭傳統計程車要求跳表",
    "usageEn": "Demanding taxi meter"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi không muốn đi giá trọn gói thỏa thuận.",
    "zh": "我不想用喊價包車，請按表收費。",
    "en": "I do not want fixed quote, use meter please.",
    "usageZh": "拒絕隨意喊價",
    "usageEn": "Refusing unmetered ride"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đến ngã tư tiếp theo thì rẽ sang phải.",
    "zh": "到了下一個十字路口時請向右轉。",
    "en": "Turn right at the next intersection.",
    "usageZh": "引導路口右轉",
    "usageEn": "Directing right turn"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đi qua cây cầu vượt rồi rẽ trái.",
    "zh": "開過那座高架橋之後請向左轉。",
    "en": "Cross the overpass bridge then turn left.",
    "usageZh": "引導路口左轉",
    "usageEn": "Directing left turn"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đi thẳng hết con đường này là tới.",
    "zh": "沿著這條路一直往前直走到底就到了。",
    "en": "Go straight to the end of this road.",
    "usageZh": "指示直線行駛",
    "usageEn": "Directing straight driving"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Dừng xe lại ở góc đường bên kia nhé.",
    "zh": "請在對面街道的轉角處靠邊停下。",
    "en": "Stop at the opposite street corner please.",
    "usageZh": "指示下車精準位置",
    "usageEn": "Stopping at corner"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Cho tôi xuống xe ở chỗ này được rồi.",
    "zh": "讓我在這個位置下車就可以了。",
    "en": "I can get off right here, thank you.",
    "usageZh": "示意立即靠邊下車",
    "usageEn": "Alighting here"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Làm ơn bật máy lạnh lạnh hơn một chút.",
    "zh": "麻煩請把車內冷氣開涼爽一點。",
    "en": "Please turn up the air conditioner cooler.",
    "usageZh": "調整冷氣溫度",
    "usageEn": "Adjusting AC temperature"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Trong xe ngột ngạt quá, hạ cửa kính xuống.",
    "zh": "車內有點悶，請把車窗搖下來通風。",
    "en": "It feels stuffy, please roll down window.",
    "usageZh": "降下車窗通風",
    "usageEn": "Rolling down car window"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Chuyến đi này hết bao nhiêu tiền tất cả?",
    "zh": "這趟車資總共是多少錢呢？",
    "en": "How much is the total fare for this trip?",
    "usageZh": "到達目的地結算車資",
    "usageEn": "Asking total fare"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tiền phí cầu đường đã tính vào chưa?",
    "zh": "過路費和過橋費已經包含在內了嗎？",
    "en": "Are highway toll fees already included?",
    "usageZh": "確認過路費負擔",
    "usageEn": "Toll fee inclusion check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi trả bằng thẻ qua ứng dụng Grab rồi nhé.",
    "zh": "我已經在 Grab App 綁定信用卡扣款了。",
    "en": "I already paid via credit card on Grab app.",
    "usageZh": "告知已線上扣款",
    "usageEn": "In-app payment confirmation"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Gửi bác tiền thừa làm tiền boa chuyến đi.",
    "zh": "找零的小錢當作小費送給司機大哥。",
    "en": "Keep the change as a tip for the ride.",
    "usageZh": "給司機小費",
    "usageEn": "Giving driver tip"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đánh giá cho bác năm sao trên ứng dụng!",
    "zh": "我會在 App 上為您留下五星好評！",
    "en": "I will rate you 5 stars on the app!",
    "usageZh": "承諾五星好評",
    "usageEn": "Rating 5 stars"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn mua vé xe buýt đi Vũng Tàu.",
    "zh": "我想買去頭頓市的客運巴士車票。",
    "en": "I want to buy a bus ticket to Vung Tau.",
    "usageZh": "購買長途客運車票",
    "usageEn": "Buying intercity bus ticket"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Xe buýt Limousine VIP ghế ngả cao cấp.",
    "zh": "豪華頂級商務艙座椅 Limousine 專車。",
    "en": "VIP Limousine bus with reclining seats.",
    "usageZh": "預訂頂級九人座保母車",
    "usageEn": "VIP Limousine booking"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Mấy giờ thì xe bắt đầu xuất bến?",
    "zh": "客運巴士預計幾點開始發車？",
    "en": "What time does the bus depart the terminal?",
    "usageZh": "詢問發車時刻",
    "usageEn": "Bus departure time check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đi từ Sài Gòn ra Phan Thiết mất bao lâu?",
    "zh": "從西貢坐車到潘切需要多久時間？",
    "en": "How long from Saigon to Phan Thiet by bus?",
    "usageZh": "詢問兩地交通耗時",
    "usageEn": "Travel duration inquiry"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Xe có dừng ở trạm dừng chân nghỉ ngơi không?",
    "zh": "中途會在國道休息站停靠休息嗎？",
    "en": "Will the bus stop at highway rest stop?",
    "usageZh": "長途車中途如廁休息",
    "usageEn": "Highway rest stop check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Cho tôi xuống trạm dừng chân đi vệ sinh.",
    "zh": "請讓我在休息站下車上洗手間。",
    "en": "Let me get off at the rest stop for restroom.",
    "usageZh": "請求如廁暫停",
    "usageEn": "Restroom break request"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn thuê xe ô tô có tài xế riêng.",
    "zh": "我想租一輛配備專屬司機的商務車。",
    "en": "I want to rent a car with a private driver.",
    "usageZh": "包車附帶專職司機",
    "usageEn": "Car with private driver"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Giá thuê xe một ngày tám tiếng là bao nhiêu?",
    "zh": "包車一天八個小時的費用是多少？",
    "en": "How much to rent a car for 8 hours a day?",
    "usageZh": "詢問單日包車行情",
    "usageEn": "8-hour daily charter price"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Có bao gồm tiền xăng và phí cầu đường không?",
    "zh": "費用有包含汽油油錢與過路費嗎？",
    "en": "Does it include fuel and toll charges?",
    "usageZh": "確認包車全包項目",
    "usageEn": "Fuel & toll inclusion check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tài xế có thể nói được tiếng Trung không?",
    "zh": "司機先生會講中文或華語嗎？",
    "en": "Can the driver speak Chinese / Mandarin?",
    "usageZh": "指定能講華語司機",
    "usageEn": "Chinese speaking driver"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đón chúng tôi ở khách sạn lúc tám giờ sáng.",
    "zh": "請在早上八點準時到飯店大廳接我們。",
    "en": "Pick us up at hotel lobby at 8:00 AM.",
    "usageZh": "約定接送時間地點",
    "usageEn": "Setting pickup time & place"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đi tàu hỏa từ Hà Nội vào Đà Nẵng.",
    "zh": "搭乘觀光臥鋪火車從河內南下到峴港。",
    "en": "Take train from Hanoi to Da Nang.",
    "usageZh": "火車臥鋪長途旅行",
    "usageEn": "Train journey travel"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn mua vé giường nằm khoang bốn người.",
    "zh": "我想買四人包廂的高級軟臥火車票。",
    "en": "I want a soft-sleeper ticket in 4-berth cabin.",
    "usageZh": "訂購火車四人軟臥",
    "usageEn": "4-berth sleeper train ticket"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tàu hỏa chạy đêm rất êm và ngắm cảnh đẹp.",
    "zh": "夜行火車行駛平穩且沿途海景絕美。",
    "en": "The night train is smooth with scenic views.",
    "usageZh": "讚美火車風景",
    "usageEn": "Scenic train experience"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi muốn thuê một chiếc xe tay ga Honda Lead.",
    "zh": "我想租一台本田 Honda Lead 淑女速克達。",
    "en": "I want to rent a Honda Lead scooter.",
    "usageZh": "租借好騎的大車廂機車",
    "usageEn": "Renting Honda Lead scooter"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tiền đặt cọc thuê xe máy là bao nhiêu?",
    "zh": "租機車需要押多少押金或證件？",
    "en": "How much is the deposit to rent scooter?",
    "usageZh": "確認租車押金證件",
    "usageEn": "Scooter rental deposit check"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tôi có thể để lại bản sao hộ chiếu không?",
    "zh": "我可以用護照影本當作租車抵押嗎？",
    "en": "Can I leave a copy of my passport as deposit?",
    "usageZh": "協商護照影本抵押",
    "usageEn": "Leaving passport copy"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Xe này đổ xăng loại A95 hay E5?",
    "zh": "這輛機車要加 95 汽油還是 E5 乙醇汽油？",
    "en": "Does this scooter take RON 95 or E5 gas?",
    "usageZh": "加油站確認汽油種類",
    "usageEn": "Fuel type RON 95 vs E5"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đổ đầy bình xăng giúp tôi nhé bạn!",
    "zh": "請幫我把油箱加滿 95 汽油喔！",
    "en": "Fill up the gas tank full please!",
    "usageZh": "加油站喊加滿油箱",
    "usageEn": "Fill up the gas tank full"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Đội mũ bảo hiểm cẩn thận kẻo bị phạt.",
    "zh": "請務必戴好安全帽以免被交通警察開罰。",
    "en": "Wear helmet properly to avoid traffic fine.",
    "usageZh": "提醒安全帽規定",
    "usageEn": "Helmet wearing reminder"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Giao thông ở đây xe máy chạy rất đông.",
    "zh": "這裡的交通機車車流量非常龐大。",
    "en": "The motorcycle traffic here is super busy.",
    "usageZh": "形容越南機車瀑布奇景",
    "usageEn": "Motorcycle traffic observation"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi muốn làm thủ tục nhận phòng (Check-in).",
    "zh": "我想辦理入住登記手續。",
    "en": "I would like to check-in please.",
    "usageZh": "櫃台辦理入住開場",
    "usageEn": "Check-in request at reception"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi đã đặt phòng trước trên mạng Agoda.",
    "zh": "我之前已經在 Agoda 網站預訂房間了。",
    "en": "I booked in advance via Agoda.",
    "usageZh": "告知網路訂單來源",
    "usageEn": "Stating Agoda booking"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Đặt phòng dưới tên là Chen Wei-Ting.",
    "zh": "訂房登記的大名是 Chen Wei-Ting。",
    "en": "The reservation name is Chen Wei-Ting.",
    "usageZh": "提供護照英文姓名",
    "usageEn": "Providing booking name"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Đây là hộ chiếu và mã xác nhận đặt phòng.",
    "zh": "這是我的護照與訂房確認代碼憑證。",
    "en": "Here is my passport and booking confirmation.",
    "usageZh": "出示證件確認信",
    "usageEn": "Presenting passport & voucher"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Mấy giờ thì có thể nhận chìa khóa phòng?",
    "zh": "請問幾點可以拿到房間鑰匙進房？",
    "en": "What time can I get the room key to enter?",
    "usageZh": "確認進房時間",
    "usageEn": "Room key release time"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Có phòng nhận sớm trước mười hai giờ không?",
    "zh": "有提早於中午 12 點前入住的空房嗎？",
    "en": "Is early check-in available before noon?",
    "usageZh": "詢問提前入住",
    "usageEn": "Early check-in inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Nếu nhận phòng sớm có tính thêm phụ phí không?",
    "zh": "如果提早入住需要額外加收費用嗎？",
    "en": "Is there an extra fee for early check-in?",
    "usageZh": "確認提早入住費用",
    "usageEn": "Early check-in fee check"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi muốn phòng ở tầng cao và có cửa sổ.",
    "zh": "我想要高樓層且有對外景觀窗的房間。",
    "en": "I prefer a high floor room with windows.",
    "usageZh": "指定高樓層採光房",
    "usageEn": "High floor room request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Cho tôi phòng nhìn ra sông hoặc nhìn ra biển.",
    "zh": "請給我看得到河景或海景的景觀房。",
    "en": "Give me a room with river or ocean view.",
    "usageZh": "升等水岸景觀房",
    "usageEn": "River or sea view request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi muốn đổi sang phòng một giường đôi lớn.",
    "zh": "我想更換成一張大雙人床的房型。",
    "en": "I want to change to a King-size bed room.",
    "usageZh": "更換大床房型",
    "usageEn": "King bed change request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Phòng hai giường đơn riêng biệt cho hai người.",
    "zh": "兩張獨立單人床的雙人雙床房。",
    "en": "Twin beds room with two separate beds.",
    "usageZh": "確認雙單人床房型",
    "usageEn": "Twin beds room confirmation"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Mật khẩu Wi-Fi của khách sạn là gì?",
    "zh": "請問飯店的無線網路 Wi-Fi 密碼是多少？",
    "en": "What is the hotel Wi-Fi password?",
    "usageZh": "索取飯店上網密碼",
    "usageEn": "Hotel Wi-Fi password inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Bữa sáng buffet phục vụ từ mấy giờ đến mấy giờ?",
    "zh": "自助式早餐供應時間從幾點到幾點？",
    "en": "What time is breakfast buffet served?",
    "usageZh": "詢問早餐供應時段",
    "usageEn": "Breakfast hours inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Nhà hàng ăn sáng nằm ở tầng mấy vậy?",
    "zh": "吃早餐的餐廳位於幾樓呢？",
    "en": "Which floor is the breakfast restaurant located?",
    "usageZh": "確認早餐餐廳樓層",
    "usageEn": "Breakfast restaurant floor"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Hồ bơi vô cực và phòng tập gym ở tầng nào?",
    "zh": "無邊際高空泳池和健身房在哪一樓？",
    "en": "Which floor are infinity pool & gym located?",
    "usageZh": "休閒設施位置確認",
    "usageEn": "Infinity pool & gym inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Khách sạn có dịch vụ giặt ủi quần áo không?",
    "zh": "飯店有提供送洗衣物熨燙的服務嗎？",
    "en": "Do you have laundry and ironing services?",
    "usageZh": "詢問送洗服務",
    "usageEn": "Laundry service inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Bao lâu thì giặt xong quần áo gửi giặt?",
    "zh": "送洗的衣服大約需要多長時間能洗好？",
    "en": "How long does it take for laundry service?",
    "usageZh": "確認洗衣交件時間",
    "usageEn": "Laundry return duration"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Phòng không có nước nóng để tắm.",
    "zh": "房間的浴室完全沒有熱水可以洗澡。",
    "en": "There is no hot water in the shower room.",
    "usageZh": "反映浴室無熱水故障",
    "usageEn": "No hot water complaint"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Máy lạnh trong phòng không mát, bị chảy nước.",
    "zh": "房間冷氣不冷，而且一直在滴水。",
    "en": "AC is not cold and leaking water.",
    "usageZh": "反映冷氣故障漏水",
    "usageEn": "AC malfunction complaint"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Làm ơn đổi cho tôi sang một phòng khác.",
    "zh": "麻煩請幫我更換到另一間房間。",
    "en": "Please change me to another room.",
    "usageZh": "要求換房處置",
    "usageEn": "Room transfer request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Cho xin thêm hai cái gối và một cái chăn.",
    "zh": "請再多送兩個枕頭和一條被子到房間。",
    "en": "Please send 2 extra pillows and a blanket.",
    "usageZh": "索取額外寢具",
    "usageEn": "Extra pillows & blanket"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Cho thêm hai chai nước suối miễn phí.",
    "zh": "請再多給兩瓶免費的客房礦泉水。",
    "en": "Please give 2 extra complimentary water bottles.",
    "usageZh": "索取客房免費飲水",
    "usageEn": "Complimentary water request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Đồ uống trong tủ lạnh mini bar có tính tiền.",
    "zh": "小冰箱內的飲料和零食是要額外收費的。",
    "en": "Drinks in the mini-bar are charged extra.",
    "usageZh": "冰箱收費提示",
    "usageEn": "Mini-bar charge reminder"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Làm ơn dọn dẹp phòng giúp tôi hôm nay.",
    "zh": "今天麻煩請幫我徹底打掃整理房間。",
    "en": "Please clean up my room today.",
    "usageZh": "掛上請打掃客房牌",
    "usageEn": "Make up room request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Xin đừng làm phiền, tôi đang nghỉ ngơi.",
    "zh": "請勿打擾，我正在房內休息。",
    "en": "Do not disturb, I am resting inside.",
    "usageZh": "掛上請勿打擾牌",
    "usageEn": "Do not disturb sign"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi muốn làm thủ tục trả phòng (Check-out).",
    "zh": "我想辦理退房手續並結清費用。",
    "en": "I would like to check-out please.",
    "usageZh": "櫃台辦理退房手續",
    "usageEn": "Check-out request at desk"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Hạn trả phòng muộn nhất là mười hai giờ trưa.",
    "zh": "最晚退房時間規定為中午十二點整。",
    "en": "Latest check-out time is 12:00 noon.",
    "usageZh": "退房時限說明",
    "usageEn": "Check-out deadline rule"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi có thể trả phòng muộn lúc hai giờ chiều không?",
    "zh": "我可以延後到下午兩點再退房嗎？",
    "en": "Can I request late check-out until 2:00 PM?",
    "usageZh": "申請延後退房",
    "usageEn": "Late check-out request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Phí phụ thu trả phòng muộn là bao nhiêu?",
    "zh": "延遲退房加收的額外費用是多少？",
    "en": "How much is the late check-out surcharge fee?",
    "usageZh": "確認延遲退房費用",
    "usageEn": "Late check-out fee check"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi có thể gửi lại hành lý ở quầy lễ tân không?",
    "zh": "我可以把行李寄放在飯店櫃台大廳嗎？",
    "en": "May I store my luggage at reception desk?",
    "usageZh": "退房後暫存大件行李",
    "usageEn": "Luggage storage request"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Gửi hành lý đến sáu giờ tối tôi quay lại lấy.",
    "zh": "行李寄放到傍晚六點我會回來領取。",
    "en": "Store until 6:00 PM, I will return to collect.",
    "usageZh": "約定領取行李時間",
    "usageEn": "Setting luggage pickup time"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Đây là thẻ nhận hành lý gửi lại của bạn.",
    "zh": "這是您寄存行李的專屬號碼牌憑證。",
    "en": "Here is your luggage claim check tag.",
    "usageZh": "領取行李存根牌",
    "usageEn": "Luggage claim tag"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Khách sạn có xe đưa đón ra sân bay không?",
    "zh": "飯店有提供前往機場的接駁專車嗎？",
    "en": "Does hotel offer airport shuttle transfer?",
    "usageZh": "詢問機場接駁專車",
    "usageEn": "Airport shuttle inquiry"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Giá xe đưa đón sân bay một chiều là bao nhiêu?",
    "zh": "單趟機場專車接送的收費是多少？",
    "en": "How much is the one-way airport transfer?",
    "usageZh": "確認機場接送報價",
    "usageEn": "Airport transfer price"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Đặt giúp tôi một chiếc taxi lớn ra sân bay.",
    "zh": "麻煩請幫我叫一輛大計程車去機場。",
    "en": "Please book a large taxi to the airport for me.",
    "usageZh": "請櫃台代叫大車",
    "usageEn": "Booking airport taxi at desk"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Nhân viên khách sạn phục vụ rất nhiệt tình.",
    "zh": "飯店員工的服務態度非常親切熱情。",
    "en": "The hotel staff is very warm and helpful.",
    "usageZh": "稱讚飯店服務品質",
    "usageEn": "Praising hotel staff service"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Kỳ nghỉ ở khách sạn này thực sự rất tuyệt!",
    "zh": "在這家飯店度過的假期真的太美妙了！",
    "en": "My stay at this hotel was truly wonderful!",
    "usageZh": "高度好評住宿體驗",
    "usageEn": "Wonderful stay compliment"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Tôi sẽ giới thiệu cho bạn bè đến ở đây.",
    "zh": "我一定會推薦我的朋友們來這裡住宿。",
    "en": "I will recommend this hotel to my friends.",
    "usageZh": "承諾口碑宣傳推薦",
    "usageEn": "Recommending hotel to friends"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Cảm ơn vì sự đón tiếp chu đáo của khách sạn!",
    "zh": "感謝飯店全體員工無微不至的熱情款待！",
    "en": "Thank you for the thoughtful hospitality!",
    "usageZh": "退房由衷致謝詞",
    "usageEn": "Thanking hospitality at departure"
  },
  {
    "category": "飯店與住宿 / Hotel",
    "viet": "Chúc khách sạn kinh doanh ngày càng phát đạt!",
    "zh": "祝飯店生意興隆、客源源源不絕！",
    "en": "Wish your hotel prosperous business always!",
    "usageZh": "臨別贈予飯店吉利祝福",
    "usageEn": "Prosperity wish to hotel"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi muốn làm thủ tục lên máy bay.",
    "zh": "我想辦理登機報到與行李托運手續。",
    "en": "I would like to check-in for flight.",
    "usageZh": "機場報到櫃台開場",
    "usageEn": "Flight check-in desk"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Đây là vé máy bay điện tử và hộ chiếu của tôi.",
    "zh": "這是我的電子機票與有效護照。",
    "en": "Here is my e-ticket and valid passport.",
    "usageZh": "出示護照電子票",
    "usageEn": "Presenting e-ticket & passport"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi muốn chọn chỗ ngồi cạnh cửa sổ.",
    "zh": "我想挑選靠窗邊的機上座位。",
    "en": "I would like a window seat please.",
    "usageZh": "指定靠窗座位",
    "usageEn": "Window seat selection"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi muốn chọn chỗ ngồi cạnh lối đi.",
    "zh": "我想挑選靠走道的機上座位。",
    "en": "I would like an aisle seat please.",
    "usageZh": "指定靠走道走動座位",
    "usageEn": "Aisle seat selection"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi có hai kiện hành lý cần ký gửi.",
    "zh": "我有兩件大行李需要辦理託運。",
    "en": "I have two bags to check-in.",
    "usageZh": "申報託運行李件數",
    "usageEn": "Checking two bags"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Hành lý của tôi có bị quá cước không?",
    "zh": "我的托運行李重量有超重嗎？",
    "en": "Is my luggage overweight?",
    "usageZh": "確認行李是否超重",
    "usageEn": "Overweight luggage check"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Phí phạt hành lý quá cước tính thế nào?",
    "zh": "行李超重的加收罰款費用怎麼計算？",
    "en": "How is excess baggage fee calculated?",
    "usageZh": "詢問超重費率標準",
    "usageEn": "Excess baggage rate inquiry"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Kiện hành lý này có đồ thủy tinh dễ vỡ.",
    "zh": "這件行李裡面有易碎玻璃陶瓷製品。",
    "en": "This bag contains fragile glassware items.",
    "usageZh": "要求貼上易碎品標籤",
    "usageEn": "Fragile item declaration"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Dán nhãn hàng dễ vỡ (Fragile) giúp tôi nhé.",
    "zh": "麻煩請幫我貼上易碎品 (Fragile) 標籤。",
    "en": "Please attach a Fragile tag on it.",
    "usageZh": "貼易碎標籤",
    "usageEn": "Fragile sticker request"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Hành lý xách tay được mang tối đa mấy ký?",
    "zh": "手提隨身登機行李最多可以帶幾公斤？",
    "en": "How many kg allowed for carry-on baggage?",
    "usageZh": "隨身登機限重詢問",
    "usageEn": "Carry-on weight allowance"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Cửa ra máy bay (Boarding Gate) số mấy vậy?",
    "zh": "請問這班飛機的登機門是幾號呢？",
    "en": "Which boarding gate is for this flight?",
    "usageZh": "找尋登機口門號",
    "usageEn": "Boarding gate inquiry"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Mấy giờ thì bắt đầu cho hành khách lên máy bay?",
    "zh": "請問幾點開始開放旅客登機？",
    "en": "What time does boarding start?",
    "usageZh": "詢問登機開始時間",
    "usageEn": "Boarding time check"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Chuyến bay này có bị hoãn giờ bay (Delay) không?",
    "zh": "這班航班有任何延誤起飛的情形嗎？",
    "en": "Is this flight delayed?",
    "usageZh": "確認航班是否延誤",
    "usageEn": "Flight delay check"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Chuyến bay bị hoãn hai tiếng do thời tiết xấu.",
    "zh": "班機因為天候不佳延誤起飛兩小時。",
    "en": "Flight is delayed 2 hours due to bad weather.",
    "usageZh": "天候延誤廣播通知",
    "usageEn": "Weather delay announcement"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi cần xin thị thực điện tử (E-visa) vào Việt Nam.",
    "zh": "我需要申請入境越南的電子簽證 (E-visa)。",
    "en": "I need an E-visa to enter Vietnam.",
    "usageZh": "越南電子簽證申請",
    "usageEn": "Vietnam E-visa application"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Đây là công văn chấp thuận nhập cảnh của tôi.",
    "zh": "這是我的越南入境核准函正式公文。",
    "en": "Here is my official entry approval letter.",
    "usageZh": "出示簽證核准函",
    "usageEn": "Visa approval letter display"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Khu vực làm visa tại cửa khẩu (Visa on Arrival) ở đâu?",
    "zh": "落地簽證辦理櫃台位於哪個區域？",
    "en": "Where is the Visa on Arrival counter?",
    "usageZh": "找尋落地簽證處",
    "usageEn": "Visa on Arrival counter location"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Phí dán tem visa là hai mươi lăm đô la Mỹ.",
    "zh": "落地簽證蓋印印花費為 25 元美金現金。",
    "en": "Visa stamping fee is $25 USD in cash.",
    "usageZh": "準備落地簽美金規費",
    "usageEn": "Visa stamping fee $25 USD"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Mục đích chuyến đi của bạn đến Việt Nam là gì?",
    "zh": "您本次入境越南的主要目的是什麼？",
    "en": "What is the purpose of your visit to Vietnam?",
    "usageZh": "海關移民官問話",
    "usageEn": "Immigration purpose question"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi đến đây để đi du lịch nghỉ dưỡng.",
    "zh": "我來越南是為了觀光旅遊與度假放鬆。",
    "en": "I am here for tourism and vacation.",
    "usageZh": "回答觀光旅遊目的",
    "usageEn": "Tourism purpose response"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi đến đây để công tác và khảo sát thị trường.",
    "zh": "我來越南是為了商務差旅與考察市場。",
    "en": "I am here for business & market survey.",
    "usageZh": "回答商務考察目的",
    "usageEn": "Business trip response"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Bạn dự định ở lại Việt Nam trong bao lâu?",
    "zh": "您預計在越南境內停留多長的時間？",
    "en": "How long do you plan to stay in Vietnam?",
    "usageZh": "海關詢問停留天數",
    "usageEn": "Stay duration question"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi sẽ ở lại đây trong vòng hai tuần.",
    "zh": "我預計在這裡停留大約兩週的時間。",
    "en": "I will stay here for about two weeks.",
    "usageZh": "回答預計停留期",
    "usageEn": "Stating 2-week stay"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Bạn sẽ lưu trú tại khách sạn nào?",
    "zh": "您在越南期間將會入住哪一家飯店？",
    "en": "Which hotel will you be staying at?",
    "usageZh": "海關確認住宿地點",
    "usageEn": "Hotel address question"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi có vé máy bay khứ hồi quay về Đài Loan.",
    "zh": "我已經購買好返回台灣的來回機票。",
    "en": "I have a return flight ticket back to Taiwan.",
    "usageZh": "出示離境回程機票",
    "usageEn": "Showing return flight ticket"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Bạn có hàng hóa gì cần khai báo hải quan không?",
    "zh": "您有任何需要向海關申報的隨身物品嗎？",
    "en": "Do you have anything to declare at customs?",
    "usageZh": "海關申報物品查驗",
    "usageEn": "Customs declaration check"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Tôi không có gì cần khai báo, đi cửa xanh.",
    "zh": "我沒有需申報物品，走綠色免申報通道。",
    "en": "I have nothing to declare, green channel.",
    "usageZh": "走免申報綠色通道",
    "usageEn": "Nothing to declare green lane"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Băng chuyền lấy hành lý chuyến bay này ở đâu?",
    "zh": "領取這班航班行李的行李轉盤在哪裡？",
    "en": "Where is the baggage claim carousel?",
    "usageZh": "找尋行李領取轉盤",
    "usageEn": "Baggage carousel location"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Hành lý của tôi bị thất lạc, không thấy ra.",
    "zh": "我的托運行李遺失了，轉盤上找不到。",
    "en": "My baggage is lost, it did not appear.",
    "usageZh": "行李遺失服務台報案",
    "usageEn": "Lost luggage report at desk"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Làm ơn lập biên bản bất thường về hành lý.",
    "zh": "麻煩請幫我開立行李遺失申報證明單。",
    "en": "Please file a Property Irregularity Report.",
    "usageZh": "開立行李遺失單據",
    "usageEn": "Filing PIR report"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Nơi bán sim điện thoại 4G du lịch ở đâu?",
    "zh": "機場販售 4G 上網旅遊 SIM 卡的攤位在哪？",
    "en": "Where is the tourist 4G SIM card booth?",
    "usageZh": "找尋機場買 SIM 卡處",
    "usageEn": "Tourist SIM card booth"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Sim này có dung lượng data không giới hạn không?",
    "zh": "這張網卡包含無限流量高速上網嗎？",
    "en": "Does this SIM have unlimited high-speed data?",
    "usageZh": "確認無限流量上網",
    "usageEn": "Unlimited data check"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Cài đặt và kích hoạt sim giúp tôi trên máy nhé.",
    "zh": "麻煩請幫我把 SIM 卡裝入手機並開通。",
    "en": "Please install and activate SIM on my phone.",
    "usageZh": "請店員協助開通上網",
    "usageEn": "SIM activation on phone"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Quầy đổi tiền ngoại tệ có tỷ giá tốt nhất ở đâu?",
    "zh": "機場哪一家外幣兌換櫃台的匯率最好？",
    "en": "Which currency exchange counter has best rate?",
    "usageZh": "比較機場換匯匯率",
    "usageEn": "Best exchange rate counter"
  },
  {
    "category": "機場與出入境 / Airport & Visa",
    "viet": "Chúc bạn có một chuyến du lịch Việt Nam tuyệt vời!",
    "zh": "祝您在越南度過一段精彩難忘的旅程！",
    "en": "Have a wonderful journey in Vietnam!",
    "usageZh": "海關入境通關祝詞",
    "usageEn": "Welcome to Vietnam wish"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn trải nghiệm gội đầu dưỡng sinh.",
    "zh": "我想體驗越式草本養生洗頭服務。",
    "en": "I want to try herbal hair spa wash.",
    "usageZh": "越式洗頭點名項目",
    "usageEn": "Ordering herbal hair spa"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Gói gội đầu dưỡng sinh bao gồm những gì?",
    "zh": "養生洗頭全套套餐裡面包含哪些項目？",
    "en": "What is included in this hair spa package?",
    "usageZh": "詢問洗頭套餐內容",
    "usageEn": "Hair spa package details"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Bao gồm rửa mặt, đắp mặt nạ và massage cổ vai gáy.",
    "zh": "包含洗臉、敷天然小黃瓜面膜與肩頸指壓。",
    "en": "Includes facial wash, face mask & neck massage.",
    "usageZh": "套餐服務細項介紹",
    "usageEn": "Facial mask & shoulder massage"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn chọn gói chín mươi phút thư giãn toàn diện.",
    "zh": "我想選 90 分鐘的全方位深層放鬆套餐。",
    "en": "I choose the 90-minute full relaxation combo.",
    "usageZh": "選擇 90 分鐘全套方案",
    "usageEn": "90-minute combo choice"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Làm ơn cạo mặt và ngoáy tai giúp tôi luôn.",
    "zh": "麻煩也順便幫我刮鬍修面和越式採耳。",
    "en": "Please shave my face and clean ears too.",
    "usageZh": "加選修面與專業採耳",
    "usageEn": "Face shaving and ear cleaning"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Nước gội đầu nóng quá, chỉnh ấm vừa thôi.",
    "zh": "洗頭的水溫太燙了，請調溫和一點。",
    "en": "The water is too hot, make it comfortably warm.",
    "usageZh": "調整洗頭水溫",
    "usageEn": "Adjusting water temperature"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Gội đầu bằng nước bồ kết và sả thơm ngát.",
    "zh": "使用天然皂角 (Bồ kết) 和香茅草本熬汁洗頭。",
    "en": "Wash with natural soapberry and lemongrass water.",
    "usageZh": "草本天然熬煮原湯",
    "usageEn": "Herbal soapberry wash"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Mát-xa đầu và ấn huyệt thái dương rất dễ chịu.",
    "zh": "頭部放鬆指壓與按壓太陽穴非常舒服。",
    "en": "Head acupressure and temple massage feels great.",
    "usageZh": "讚美頭部指壓手法",
    "usageEn": "Complimenting head massage"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Làm ơn gãi nhẹ nhàng, đừng dùng móng tay cào.",
    "zh": "請輕柔抓洗頭皮，不要用指甲大力抓。",
    "en": "Please scratch gently, do not use fingernails.",
    "usageZh": "提醒指腹輕揉勿用指甲",
    "usageEn": "Gentle finger massage only"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn sấy tóc khô tự nhiên và tạo kiểu.",
    "zh": "洗完後請幫我吹乾頭髮並做簡單造型。",
    "en": "Please blow dry and style my hair.",
    "usageZh": "洗後吹乾造型",
    "usageEn": "Blow dry and hair styling"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn mát-xa toàn thân bằng tinh dầu thảo dược.",
    "zh": "我想做草本芳香精油全身指壓按摩。",
    "en": "I want a full body herbal essential oil massage.",
    "usageZh": "選精油全身油壓",
    "usageEn": "Full body oil massage"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Mát-xa bằng đá nóng bazan giảm đau nhức cơ.",
    "zh": "採用火山玄武熱石按摩舒緩全身肌肉痠痛。",
    "en": "Hot basalt stone massage to relieve muscle ache.",
    "usageZh": "熱石能量排毒放鬆",
    "usageEn": "Hot stone muscle relief"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Lực tay mát-xa mạnh hơn một chút nhé em.",
    "zh": "按摩的手勁力道請幫我再按重一點喔。",
    "en": "Please apply a bit stronger pressure.",
    "usageZh": "要求加重指壓力道",
    "usageEn": "Stronger pressure request"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Chỗ này đau quá, làm nhẹ tay lại thôi.",
    "zh": "這個穴位有點痛，麻煩輕一點溫柔按。",
    "en": "This spot hurts, please do it more gently.",
    "usageZh": "要求放輕力道",
    "usageEn": "Lighter touch on sore spot"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tập trung mát-xa nhiều ở vùng vai gáy và thắt lưng.",
    "zh": "請幫我重點加強肩膀、頸椎和後下腰部。",
    "en": "Focus more on my neck, shoulders and lower back.",
    "usageZh": "指定加強肩頸腰部",
    "usageEn": "Focus on shoulder & back"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Kỹ thuật viên mát-xa có tay nghề rất chuyên nghiệp.",
    "zh": "按摩技師的手法技術非常道地專業。",
    "en": "The massage therapist is highly skilled.",
    "usageZh": "誇獎技師專業手藝",
    "usageEn": "Praising therapist skill"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi cảm thấy người nhẹ nhõm và hết mỏi mệt hẳn.",
    "zh": "我覺得整個人身心無比舒暢，疲勞全消。",
    "en": "I feel completely refreshed and relaxed.",
    "usageZh": "表達身心徹底放鬆",
    "usageEn": "Feeling totally relieved"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Giá này đã bao gồm tiền boa (Tip) chưa?",
    "zh": "這個標價已經包含技師的服務小費了嗎？",
    "en": "Does this price already include tips?",
    "usageZh": "確認小費支付規範",
    "usageEn": "Tip inclusion check"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tiền boa quy định tối thiểu là bao nhiêu?",
    "zh": "店裡規定給予技師的小費行情是多少？",
    "en": "What is the standard minimum tip amount?",
    "usageZh": "打聽一般小費行情",
    "usageEn": "Standard tip inquiry"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Gửi tặng em một trăm nghìn tiền boa vì làm rất tốt.",
    "zh": "這十萬盾小費送給妳，因為妳服務得太棒了。",
    "en": "Here is 100k VND tip for your great service.",
    "usageZh": "滿意給予高額小費",
    "usageEn": "Giving 100k tip for great work"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Có trà gừng nóng và mứt gừng sau khi làm xong.",
    "zh": "按摩結束後有附贈熱薑茶與養生薑糖片。",
    "en": "Hot ginger tea and dried ginger served afterwards.",
    "usageZh": "享用術後養生茶點",
    "usageEn": "Post-massage ginger tea"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn làm móng tay và móng chân (Nail).",
    "zh": "我想做手部和足部指甲光療美甲護理。",
    "en": "I want a manicure and pedicure nail service.",
    "usageZh": "美甲沙龍護理需求",
    "usageEn": "Manicure & Pedicure order"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Sơn móng tay dạng gel màu hồng nhạt tự nhiên.",
    "zh": "幫我塗自然裸粉色的光療凝膠指甲油。",
    "en": "Light pink natural gel nail polish please.",
    "usageZh": "挑選裸色光療甲油",
    "usageEn": "Light pink gel polish"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Cắt da thừa và chà gót chân tẩy tế bào chết.",
    "zh": "修剪指緣死皮並做腳後跟去角質磨皮。",
    "en": "Trim cuticles and scrub dead skin off heels.",
    "usageZh": "手足深層去角質",
    "usageEn": "Cuticle trimming & heel scrub"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn xông hơi đá muối Himalaya trước khi mát-xa.",
    "zh": "按摩前我想先去喜馬拉雅粉紅鹽房蒸氣浴。",
    "en": "I want Himalaya salt sauna before massage.",
    "usageZh": "喜馬拉雅鹽浴桑拿",
    "usageEn": "Himalaya salt sauna"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Phòng xông hơi khô (Sauna) và xông ướt (Steam).",
    "zh": "提供芬蘭乾式桑拿房與草本精油濕式蒸氣房。",
    "en": "Dry sauna and herbal steam bath available.",
    "usageZh": "乾濕桑拿設施介紹",
    "usageEn": "Sauna and steam facilities"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Mặc quần áo rộng rãi này vào để chuẩn bị mát-xa.",
    "zh": "請換上這套寬鬆舒適的專用按摩棉服。",
    "en": "Put on this loose comfy outfit for massage.",
    "usageZh": "換上按摩專用棉袍",
    "usageEn": "Changing into massage outfit"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Cất đồ trang sức và ví tiền vào tủ khóa an toàn.",
    "zh": "請將手錶首飾與貴重錢包鎖進專屬保險櫃。",
    "en": "Lock jewelry and wallet in the safe locker.",
    "usageZh": "貴重物品鎖入置物櫃",
    "usageEn": "Securing valuables in locker"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Quán có nhận thanh toán bằng thẻ hoặc Momo không?",
    "zh": "店內可以刷信用卡或使用 Momo 支付嗎？",
    "en": "Do you accept card or Momo e-wallet payment?",
    "usageZh": "確認 Spa 付款方式",
    "usageEn": "Payment options inquiry"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Cho tôi xin danh thiếp để lần sau đặt lịch hẹn trước.",
    "zh": "請給我一張名片，方便我下次提前預約。",
    "en": "Give me your business card to book next time.",
    "usageZh": "索取店家預約名片",
    "usageEn": "Requesting business card"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Tôi muốn đặt lịch mát-xa cho hai người lúc bảy giờ tối.",
    "zh": "我想預約今晚七點兩位雙人 Spa 療程。",
    "en": "I want to book massage for 2 at 7:00 PM.",
    "usageZh": "電話預約雙人療程",
    "usageEn": "Booking couples massage"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Có phòng VIP riêng tư cho cặp đôi không?",
    "zh": "店裡有專供情侶夫妻的雙人專屬包廂嗎？",
    "en": "Do you have a private VIP room for couples?",
    "usageZh": "預約情侶雙人包廂",
    "usageEn": "Couples private room"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Cảm ơn em, hôm nay làm rất êm và sướng!",
    "zh": "謝謝妳，今天按得非常到位舒服！",
    "en": "Thank you, it was exceptionally relaxing today!",
    "usageZh": "由衷讚賞按摩體驗",
    "usageEn": "Expressing deep satisfaction"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Lần sau tới tôi sẽ chỉ định em làm tiếp nhé.",
    "zh": "下次我再來一定會指名找妳為我服務。",
    "en": "I will request you again on my next visit.",
    "usageZh": "指名指定王牌技師",
    "usageEn": "Requesting same therapist next time"
  },
  {
    "category": "放鬆與水療 / Hair Spa & Massage",
    "viet": "Chúc tiệm Spa của mình luôn đông khách!",
    "zh": "祝貴 Spa 店天天高朋滿座、客源不斷！",
    "en": "Wish your spa business always flourishing!",
    "usageZh": "祝福店家生意興隆",
    "usageEn": "Business blessing to spa"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chào mừng quý đoàn đã đến thăm công ty chúng tôi.",
    "zh": "熱烈歡迎貴代表團蒞臨本公司參觀指導。",
    "en": "Welcome your delegation to visit our company.",
    "usageZh": "商務正式迎賓開場",
    "usageEn": "Formal business welcome"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tôi là giám đốc phụ trách kinh doanh khu vực Châu Á.",
    "zh": "我是負責亞太地區業務拓展的總監。",
    "en": "I am the Sales Director for Asia region.",
    "usageZh": "自我介紹商務職位",
    "usageEn": "Introducing business title"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Đây là danh thiếp của tôi, rất hân hạnh được hợp tác.",
    "zh": "這是我的名片，非常榮幸能與貴公司合作。",
    "en": "Here is my business card, an honor to cooperate.",
    "usageZh": "雙手遞交商務名片",
    "usageEn": "Exchanging business cards"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúng ta vào phòng họp lớn để bắt đầu buổi làm việc.",
    "zh": "請各位移步至大會議室，開始今天的會議。",
    "en": "Let us proceed to conference room to start.",
    "usageZh": "引導進入會議室",
    "usageEn": "Entering conference room"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Xin mời mọi người dùng trà, cà phê và bánh ngọt.",
    "zh": "請各位貴賓享用茶水、現煮咖啡與精緻茶點。",
    "en": "Please enjoy tea, coffee and pastries.",
    "usageZh": "會議前招待茶點",
    "usageEn": "Serving meeting refreshments"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Hôm nay chúng ta họp bàn về dự án đầu tư nhà máy mới.",
    "zh": "今天我們主要開會研討新廠房投資設廠專案。",
    "en": "Today we meet to discuss the new factory project.",
    "usageZh": "闡述會議核心主旨",
    "usageEn": "Stating meeting agenda"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tôi xin trình bày bài thuyết trình về năng lực sản xuất.",
    "zh": "請容許我向各位簡報本公司的生產製造實力。",
    "en": "Allow me to present our manufacturing capabilities.",
    "usageZh": "開始正式商務簡報",
    "usageEn": "Starting business presentation"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Quy mô nhà xưởng của chúng tôi rộng mười hecta.",
    "zh": "我們在當地的現代化廠房佔地廣達十公頃。",
    "en": "Our factory site covers ten hectares.",
    "usageZh": "介紹工廠佔地規模",
    "usageEn": "Factory scale presentation"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Công suất sản xuất đạt một triệu sản phẩm mỗi tháng.",
    "zh": "每月產能滿載可高達一百萬件優質產品。",
    "en": "Monthly production capacity reaches 1M units.",
    "usageZh": "介紹每月最大產能",
    "usageEn": "Monthly capacity 1M units"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Hệ thống dây chuyền đạt tiêu chuẩn chất lượng ISO 9001.",
    "zh": "全套生產製程皆通過 ISO 9001 國際品質認證。",
    "en": "Production line certified with ISO 9001.",
    "usageZh": "展示品質國際認證",
    "usageEn": "ISO quality standard certification"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúng tôi có đội ngũ kỹ sư và công nhân lành nghề.",
    "zh": "我們擁有一支技術精湛的資深工程師與技術工團隊。",
    "en": "We have skilled engineers and workforce.",
    "usageZh": "介紹優質技術團隊",
    "usageEn": "Skilled workforce intro"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Quý công ty có thể cung cấp bảng báo giá chi tiết không?",
    "zh": "貴公司能否提供一份各品項明細的正式報價單？",
    "en": "Can you provide a detailed price quotation sheet?",
    "usageZh": "索取正式報價單據",
    "usageEn": "Requesting price quotation"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Giá FOB tại cảng Cát Lái là bao nhiêu đô la?",
    "zh": "在胡志明市卡萊港交貨的 FOB 美金價格是多少？",
    "en": "What is FOB price at Cat Lai port in USD?",
    "usageZh": "詢問海運 FOB 港口報價",
    "usageEn": "FOB port price inquiry"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Thời gian giao hàng dự kiến là bao nhiêu ngày?",
    "zh": "下單後的預計交貨生產期（Lead time）是幾天？",
    "en": "What is the estimated delivery lead time?",
    "usageZh": "確認生產交期天數",
    "usageEn": "Delivery lead time inquiry"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúng tôi cam kết giao hàng đúng thời hạn trong hợp đồng.",
    "zh": "我們鄭重承諾必定依照合約約定期限準時交貨。",
    "en": "We commit to on-time delivery per contract.",
    "usageZh": "承諾保證如期交貨",
    "usageEn": "On-time delivery commitment"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Số lượng đặt hàng tối thiểu (MOQ) là bao nhiêu cái?",
    "zh": "這款客製化產品的最低起訂量 (MOQ) 是多少？",
    "en": "What is the minimum order quantity (MOQ)?",
    "usageZh": "詢問最低起訂數量",
    "usageEn": "MOQ requirement check"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Nếu đặt số lượng lớn, chúng tôi có được chiết khấu không?",
    "zh": "如果大批量採購下單，我們能享有折扣折讓嗎？",
    "en": "Can we get a discount for large volume orders?",
    "usageZh": "爭取大單折扣讓利",
    "usageEn": "Volume discount inquiry"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Phương thức thanh toán là đặt cọc ba mươi phần trăm.",
    "zh": "付款方式為簽約預付 30% 訂金，餘款信用狀。",
    "en": "Payment terms: 30% deposit, balance by L/C.",
    "usageZh": "商務付款條款說明",
    "usageEn": "Payment terms negotiation"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Thanh toán bằng thư tín dụng không hủy ngang (L/C).",
    "zh": "餘款採用國際不可撤銷即期信用狀 (L/C) 結算。",
    "en": "Payment by irrevocable Letter of Credit (L/C).",
    "usageZh": "信用狀結算貿易款項",
    "usageEn": "Letter of Credit settlement"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúng tôi muốn kiểm tra mẫu hàng (Sample) trước khi ký.",
    "zh": "簽約前我們希望能先收到量產打樣樣品檢驗。",
    "en": "We want to inspect samples before signing.",
    "usageZh": "要求樣品送檢審查",
    "usageEn": "Sample inspection request"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Mẫu sản phẩm thực tế rất đạt yêu cầu kỹ thuật.",
    "zh": "送驗的實物樣品完全符合我們的技術品質規範。",
    "en": "The actual sample meets our technical specs.",
    "usageZh": "認可樣品質感合規",
    "usageEn": "Sample quality approval"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Hai bên đã thống nhất toàn bộ các điều khoản hợp đồng.",
    "zh": "雙方已對合約中的所有權利義務條款達成共識。",
    "en": "Both parties agreed on all contract terms.",
    "usageZh": "達成全面簽約共識",
    "usageEn": "Contract terms consensus"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tiến hành ký kết hợp đồng hợp tác thương mại chính thức.",
    "zh": "進行正式的雙邊商業經貿合作合約簽約儀式。",
    "en": "Proceed with formal trade contract signing.",
    "usageZh": "舉行正式簽約儀式",
    "usageEn": "Formal contract signing ceremony"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Người đại diện pháp luật của hai bên cùng ký tên đóng dấu.",
    "zh": "由雙方法定代表人共同親自簽名並加蓋公章。",
    "en": "Legal reps from both sides sign and stamp.",
    "usageZh": "雙方簽署蓋公司大章",
    "usageEn": "Signing and official stamping"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Mỗi bên giữ hai bản hợp đồng có giá trị pháp lý như nhau.",
    "zh": "雙方各執正本合約兩份，具備同等法律約束力。",
    "en": "Each side keeps two legally binding copies.",
    "usageZh": "分執正本合約備查",
    "usageEn": "Retaining contract copies"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúc mừng sự hợp tác thành công rực rỡ của chúng ta!",
    "zh": "熱烈祝賀我們本次經貿合作圓滿成功、共創雙贏！",
    "en": "Congratulations on our successful partnership!",
    "usageZh": "開香檳慶祝簽約成功",
    "usageEn": "Partnership success celebration"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Nâng ly chúc mừng mối quan hệ đối tác bền chặt!",
    "zh": "讓我們共同舉杯，為彼此長遠深厚的夥伴關係乾杯！",
    "en": "Raise a glass to our strong long-term partnership!",
    "usageZh": "舉杯慶祝長期結盟",
    "usageEn": "Toast to strategic partnership"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chúng tôi muốn thành lập công ty có vốn đầu tư nước ngoài (FDI).",
    "zh": "我們規劃在越南申請設立外商獨資 FDI 企業。",
    "en": "We plan to set up a 100% foreign-owned FDI firm.",
    "usageZh": "投資設立外資公司",
    "usageEn": "FDI company incorporation"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Thủ tục xin cấp giấy chứng nhận đăng ký đầu tư (IRC).",
    "zh": "辦理申請外商投資登記許可證 (IRC) 的法定流程。",
    "en": "Applying for Investment Registration Certificate (IRC).",
    "usageZh": "申請投資許可證執照",
    "usageEn": "IRC certificate process"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Giấy chứng nhận đăng ký doanh nghiệp (ERC).",
    "zh": "向計畫投資廳取得的企業商業登記證 (ERC)。",
    "en": "Enterprise Registration Certificate (ERC).",
    "usageZh": "取得營業執照 ERC",
    "usageEn": "ERC certificate acquisition"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Thuê đất trong khu công nghiệp thời hạn năm mươi năm.",
    "zh": "在國家級重點工業園區內租賃 50 年土地使用權。",
    "en": "Leasing land in industrial park for 50 years.",
    "usageZh": "租賃工業區建廠土地",
    "usageEn": "Industrial park land lease"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chính sách ưu đãi thuế thu nhập doanh nghiệp cho nhà đầu tư.",
    "zh": "越南政府給予高科技製造業投資者的所得稅減免優惠。",
    "en": "Corporate income tax incentives for investors.",
    "usageZh": "享有所得稅優惠政策",
    "usageEn": "Corporate tax incentives"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Miễn thuế bốn năm đầu và giảm năm mươi phần trăm chín năm tiếp theo.",
    "zh": "前四年完全免稅，隨後九年享有減半 50% 稅率優惠。",
    "en": "Tax free first 4 years, 50% off next 9 years.",
    "usageZh": "四免九減半租稅優惠",
    "usageEn": "4-year tax holiday rule"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tuyển dụng vị trí quản lý người Việt biết tiếng Hoa.",
    "zh": "積極招募精通越中雙語的在地中高階管理人才。",
    "en": "Recruiting Vietnamese managers fluent in Chinese.",
    "usageZh": "徵求精通中文越籍主管",
    "usageEn": "Bilingual manager recruitment"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Mức lương cơ bản và chế độ bảo hiểm theo luật lao động.",
    "zh": "基本薪資待遇與法定社保福利嚴格遵循越南勞動法。",
    "en": "Base salary & insurance comply with Labor Law.",
    "usageZh": "遵循法定勞工權益保障",
    "usageEn": "Labor law compliance"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Thực hiện đầy đủ bảo hiểm xã hội, y tế và thất nghiệp.",
    "zh": "為全體同仁依法投保社會保險、醫保與失業保險。",
    "en": "Fulfill social, medical and unemployment insurance.",
    "usageZh": "全員足額投保三保",
    "usageEn": "Social insurance coverage"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Môi trường làm việc an toàn, thân thiện và chuyên nghiệp.",
    "zh": "營造安全衛生、和諧友善且高效專業的職場環境。",
    "en": "Safe, friendly and professional workplace.",
    "usageZh": "倡導優質職場文化",
    "usageEn": "Safe work environment"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tổ chức khám sức khỏe định kỳ hàng năm cho công nhân viên.",
    "zh": "每年定期為全體基層員工與幹部安排全身健康檢查。",
    "en": "Annual periodic health check for all employees.",
    "usageZh": "安排年度員工健檢",
    "usageEn": "Annual employee health check"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Tăng năng suất lao động và giảm tỷ lệ hàng lỗi (Defect).",
    "zh": "持續提升產線生產效率，並將不良品率降至最低。",
    "en": "Increase productivity and reduce defect rate.",
    "usageZh": "精實生產降低不良率",
    "usageEn": "Productivity & defect control"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Báo cáo tài chính đã được kiểm toán độc lập xác nhận.",
    "zh": "全年度財務報表已通過四強獨立會計師事務所查核。",
    "en": "Financial reports audited by independent firm.",
    "usageZh": "會計師查核簽證財報",
    "usageEn": "Audited financial reports"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Mở tài khoản vốn đầu tư trực tiếp tại ngân hàng.",
    "zh": "在指定外資銀行開設專用之外商直接投資資本帳戶。",
    "en": "Open direct investment capital account at bank.",
    "usageZh": "開設 FDI 資本帳戶",
    "usageEn": "DICA bank account opening"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Chuyển lợi nhuận hợp pháp về nước theo đúng quy định.",
    "zh": "依法將完稅後的合法營運利潤匯回母國母公司。",
    "en": "Repatriating legal profits after tax legally.",
    "usageZh": "完稅利潤合法匯回母國",
    "usageEn": "Repatriating profits legally"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Duy trì mối quan hệ tốt đẹp với chính quyền địa phương.",
    "zh": "與當地省政府各部會主管機關維持良好順暢的溝通。",
    "en": "Maintain good relations with local authorities.",
    "usageZh": "保持良好政商溝通管道",
    "usageEn": "Local authority relations"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Đóng góp tích cực cho các hoạt động từ thiện cộng đồng.",
    "zh": "積極參與地方公益慈善活動，踐行企業社會責任 (CSR)。",
    "en": "Actively contribute to CSR and local charity.",
    "usageZh": "實踐企業社會責任 CSR",
    "usageEn": "CSR community contribution"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Kính chúc quý đối tác vạn sự như ý và thịnh vượng!",
    "zh": "誠摯祝福尊貴的合作夥伴萬事如意、大展鴻圖！",
    "en": "Wish our esteemed partners success & prosperity!",
    "usageZh": "商務晚宴圓滿結尾祝福",
    "usageEn": "Formal business partner wish"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi cảm thấy trong người rất mệt và sốt cao.",
    "zh": "我覺得全身非常疲憊乏力，而且發高燒。",
    "en": "I feel very fatigued and have high fever.",
    "usageZh": "向藥劑師描述發燒",
    "usageEn": "Describing fever & fatigue"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cho tôi mua thuốc hạ sốt Panadol Extra.",
    "zh": "給我買一盒 Panadol Extra 普拿疼退燒止痛藥。",
    "en": "Give me a box of Panadol Extra please.",
    "usageZh": "指定名牌退燒成藥",
    "usageEn": "Buying Panadol Extra"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị đau họng, rát cổ và ho nhiều.",
    "zh": "我喉嚨非常疼痛發炎、喉嚨乾癢而且一直咳嗽。",
    "en": "I have sore throat and cough a lot.",
    "usageZh": "感冒喉嚨痛症狀",
    "usageEn": "Sore throat & cough symptoms"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cho tôi kẹo ngậm đau họng thảo dược Eugica.",
    "zh": "給我買一盒 Eugica 綠色草本薄荷潤喉喉糖。",
    "en": "Give me a box of Eugica herbal throat lozenges.",
    "usageZh": "越南國民草本喉糖",
    "usageEn": "Eugica throat lozenges"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị đau bụng đi ngoài và buồn nôn liên tục.",
    "zh": "我一直肚子痛拉肚子，而且不停想吐噁心。",
    "en": "I have stomachache, diarrhea and nausea.",
    "usageZh": "急性腸胃炎就醫描述",
    "usageEn": "Stomach flu & diarrhea"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cho tôi thuốc cầm tiêu chảy và men tiêu hóa.",
    "zh": "請給我止瀉藥與腸道益生菌消化酵素。",
    "en": "Give me anti-diarrhea pills & probiotics.",
    "usageZh": "購買腸胃止瀉藥",
    "usageEn": "Anti-diarrhea & probiotics"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Uống gói bù nước điện giải Oresol pha nước.",
    "zh": "將 Oresol 口服電解質補水粉包溶於溫水服用。",
    "en": "Drink Oresol oral rehydration salts with water.",
    "usageZh": "腹瀉必備補充電解質",
    "usageEn": "Oresol hydration salts"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Thuốc này uống trước hay sau bữa ăn vậy dược sĩ?",
    "zh": "藥師，請問這款藥要在飯前還是飯後吃？",
    "en": "Pharmacist, take this before or after meals?",
    "usageZh": "詢問服藥時間點",
    "usageEn": "Before or after meals check"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Mỗi lần uống mấy viên và ngày uống mấy lần?",
    "zh": "每次要服用幾顆？每天總共需要吃幾次？",
    "en": "How many pills per dose, and how many times daily?",
    "usageZh": "詢問用藥劑量頻率",
    "usageEn": "Dosage & frequency inquiry"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Thuốc này uống vào có gây buồn ngủ không?",
    "zh": "吃了這款藥之後會不會產生嗜睡昏睡感？",
    "en": "Will taking this medicine cause drowsiness?",
    "usageZh": "確認藥物副作用嗜睡",
    "usageEn": "Drowsiness side effect check"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị dị ứng với kháng sinh Penicillin.",
    "zh": "我對青黴素盤尼西林（Penicillin）抗生素過敏。",
    "en": "I am allergic to Penicillin antibiotics.",
    "usageZh": "重要抗生素過敏警告",
    "usageEn": "Penicillin allergy warning"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi có tiền sử bị bệnh huyết áp cao và tim mạch.",
    "zh": "我有高血壓和心血管心臟病史。",
    "en": "I have history of hypertension & heart disease.",
    "usageZh": "申報重大慢性病史",
    "usageEn": "Chronic disease declaration"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cho tôi mua một hộp băng gạc cá nhân Urgo.",
    "zh": "請給我一盒 Urgo 防水透氣 OK 繃創口貼。",
    "en": "Give me a box of Urgo adhesive bandages.",
    "usageZh": "購買防水 OK 繃",
    "usageEn": "Buying Urgo bandages"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cồn y tế sát trùng vết thương và nước muối sinh lý.",
    "zh": "醫療用消毒殺菌酒精與生理食鹽水洗劑。",
    "en": "Antiseptic medical alcohol & saline solution.",
    "usageZh": "外傷消毒必備常備藥",
    "usageEn": "Antiseptic & saline solution"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cao dán giảm đau nhức Salonpas của Nhật.",
    "zh": "日本撒隆巴斯 (Salonpas) 肌肉痠痛消炎貼布。",
    "en": "Salonpas pain relief medicated patches.",
    "usageZh": "購買痠痛消炎貼布",
    "usageEn": "Salonpas pain relief patch"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Dầu gió xanh Thiên Thảo xoa bóp trúng gió.",
    "zh": "天草牌雙天鵝正莊綠油精（越式刮痧神油）。",
    "en": "Thien Thao green medicated oil for massage.",
    "usageZh": "越南必買萬用綠油精",
    "usageEn": "Thien Thao green oil"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị muỗi đốt sưng to, cho thuốc bôi ngứa.",
    "zh": "我被蚊子叮咬腫得很大，請給我消腫止癢藥膏。",
    "en": "Mosquito bites swollen, give me anti-itch cream.",
    "usageZh": "防蚊蟲叮咬止癢膏",
    "usageEn": "Anti-itch insect cream"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Thuốc xịt chống muỗi Soffell mùi hoa quả.",
    "zh": "Soffell 水果花香味長效防蚊驅蚊噴霧。",
    "en": "Soffell mosquito repellent spray with fruit scent.",
    "usageZh": "東南亞必備防蚊噴霧",
    "usageEn": "Soffell mosquito repellent"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Bệnh viện quốc tế có bác sĩ nói tiếng Anh ở đâu?",
    "zh": "哪裡有配備英語醫護人員的國際綜合醫院？",
    "en": "Where is international hospital with English staff?",
    "usageZh": "找尋外商國際醫院",
    "usageEn": "International hospital inquiry"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Bệnh viện FV (Pháp Việt) ở Quận 7 có chất lượng cao.",
    "zh": "位於胡志明市七郡的法越國際醫院 (FV Hospital)。",
    "en": "FV International Hospital in District 7.",
    "usageZh": "知名外商國際醫院",
    "usageEn": "FV International Hospital"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Gọi xe cấp cứu một một lăm (115) ngay lập tức!",
    "zh": "快點立刻撥打 115 叫緊急救護車！",
    "en": "Call 115 emergency ambulance right immediately!",
    "usageZh": "撥打 115 急救電話",
    "usageEn": "Calling 115 ambulance"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Có người bị ngất xỉu bất tỉnh, cần cấp cứu gấp!",
    "zh": "有人突然休克昏倒不省人事，需要緊急急救！",
    "en": "Someone passed out, urgent first aid needed!",
    "usageZh": "現場緊急休克急救",
    "usageEn": "Urgent first aid call"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị té xe máy trầy xước và chảy máu nhiều.",
    "zh": "我騎機車摔車擦傷，手腳一直在大量流血。",
    "en": "I fell off scooter, scratched & bleeding heavily.",
    "usageZh": "交通事故外傷呼救",
    "usageEn": "Traffic accident injury report"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Làm ơn giúp tôi băng bó và sát trùng vết thương.",
    "zh": "麻煩請幫我清洗傷口、消毒並包紮止血。",
    "en": "Please help bandage and disinfect the wound.",
    "usageZh": "請求緊急包紮止血",
    "usageEn": "Bandaging & cleaning wound"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi có bảo hiểm du lịch quốc tế chi trả viện phí.",
    "zh": "我投保了可全額理賠海外醫療費的國際旅遊險。",
    "en": "I have international travel medical insurance.",
    "usageZh": "出示海外旅平險保單",
    "usageEn": "Travel medical insurance cover"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Làm ơn cấp giấy chứng nhận y tế và hóa đơn viện phí.",
    "zh": "麻煩請開立正式就診醫療證明書與醫療收據。",
    "en": "Please issue medical certificate and official bill.",
    "usageZh": "保險理賠必備醫療證明",
    "usageEn": "Medical certificate & invoice"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị mất trộm ví tiền và toàn bộ giấy tờ tùy thân.",
    "zh": "我的錢包和所有隨身身分證件都被扒竊偷走了。",
    "en": "My wallet and all ID documents were stolen.",
    "usageZh": "遭遇失竊向警方報案",
    "usageEn": "Reporting stolen wallet & ID"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Đồn công an phường gần nhất nằm ở đường nào?",
    "zh": "離這裡最近的轄區坊級公安派出所在哪條路？",
    "en": "Where is the nearest ward police station?",
    "usageZh": "尋找派出所報案做筆錄",
    "usageEn": "Finding ward police station"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi muốn lập biên bản trình báo mất tài sản.",
    "zh": "我想製作報案筆錄，申請財物失竊證明公文。",
    "en": "I want to file a police report for lost property.",
    "usageZh": "製作正式報案三聯單",
    "usageEn": "Filing police loss report"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Làm ơn giúp tôi liên hệ văn phòng kinh tế văn hóa.",
    "zh": "請幫我緊急聯繫駐越南台北經濟文化辦事處。",
    "en": "Please help contact Taipei Economic & Cultural Office.",
    "usageZh": "聯繫外館尋求急難救助",
    "usageEn": "Contacting TECO representative"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Số điện thoại đường dây nóng bảo hộ công dân.",
    "zh": "急難救助與國人急難救難 24 小時專線電話。",
    "en": "Emergency hotline for citizen protection assistance.",
    "usageZh": "撥打海外急難救助專線",
    "usageEn": "Citizen protection hotline"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi cần làm lại giấy thông hành hoặc hộ chiếu mới.",
    "zh": "我需要緊急補發入境證明書或臨時護照證件。",
    "en": "I need emergency travel document / new passport.",
    "usageZh": "申請緊急補發返國護照",
    "usageEn": "Emergency travel passport"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Cảm ơn mọi người đã nhiệt tình giúp đỡ tôi lúc khó khăn!",
    "zh": "由衷感謝大家在我最危難困難時伸出溫暖援手！",
    "en": "Thank you all for helping me during hard times!",
    "usageZh": "向救助者由衷致謝",
    "usageEn": "Deep gratitude for emergency help"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi đã an toàn và ổn định tinh thần trở lại rồi.",
    "zh": "我目前人已經非常安全，情緒也已經平復了。",
    "en": "I am safe now and my mind is at ease.",
    "usageZh": "向親友回報人身平安",
    "usageEn": "Reporting safety & calm"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Chúc bạn luôn mạnh khỏe và bình an trên mọi nẻo đường!",
    "zh": "祝您身體永遠健康健朗、出入平安順遂！",
    "en": "Wish you health and safety wherever you go!",
    "usageZh": "致贈最真摯健康祝福",
    "usageEn": "Health and safety blessing"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tôi muốn tìm thuê một căn hộ chung cư cao cấp.",
    "zh": "我想尋找租賃一間高樓層的高級公寓套房。",
    "en": "I want to rent a luxury apartment condo.",
    "usageZh": "租屋仲介詢問房源",
    "usageEn": "Inquiring luxury condo rental"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Căn hộ có hai phòng ngủ và hai phòng vệ sinh.",
    "zh": "這間格局是兩房兩衛浴、採光通風良好。",
    "en": "Two-bedroom and two-bathroom apartment unit.",
    "usageZh": "詢問兩房兩衛格局",
    "usageEn": "2-bed 2-bath layout check"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Giá thuê mỗi tháng là mười lăm triệu đồng.",
    "zh": "每個月的純房屋租金為一千五百萬越南盾。",
    "en": "Monthly rent is 15M VND (~$600 USD).",
    "usageZh": "確認每月租金行情",
    "usageEn": "Monthly rent 15M VND"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Giá thuê đã bao gồm phí quản lý tòa nhà chưa?",
    "zh": "租金裡面已經包含大樓物業管理費了嗎？",
    "en": "Does rent include building management fee?",
    "usageZh": "確認管理費負擔",
    "usageEn": "Management fee inclusion check"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tiền đặt cọc là hai tháng tiền nhà.",
    "zh": "簽訂租賃合約需要押付兩個月的押金。",
    "en": "Deposit is two months worth of rent.",
    "usageZh": "確認押金月數條件",
    "usageEn": "Two-month deposit terms"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Hợp đồng thuê nhà có thời hạn tối thiểu một năm.",
    "zh": "房屋租賃合約規定的最短起租期為一年。",
    "en": "Minimum lease period is one full year.",
    "usageZh": "確認租期一年條款",
    "usageEn": "One-year lease minimum"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Căn hộ đã có đầy đủ nội thất sang trọng (Full nội thất).",
    "zh": "公寓內附全套高級家具家電（拎包即住全配）。",
    "en": "Fully furnished with luxury furniture & appliances.",
    "usageZh": "全家具家電全配房",
    "usageEn": "Fully furnished apartment"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Bao gồm sofa, tivi, máy giặt, tủ lạnh và giường nệm.",
    "zh": "包含沙發、液晶電視、洗衣機、冰箱與雙人床墊。",
    "en": "Includes sofa, TV, washer, fridge and King bed.",
    "usageZh": "清點家具家電清單",
    "usageEn": "Furniture inventory check"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tiền điện và tiền nước tính theo giá nhà nước.",
    "zh": "每個月水電費依照政府公用事業標準費率計算。",
    "en": "Electricity and water billed at official state rates.",
    "usageZh": "確認公表水電計算",
    "usageEn": "Official utility billing rate"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tòa nhà có hầm gửi xe máy và xe ô tô rộng rãi.",
    "zh": "大樓地下室設有寬敞明亮的汽機車專屬停車場。",
    "en": "Basement parking for cars and motorcycles.",
    "usageZh": "確認地下專用停車位",
    "usageEn": "Basement parking amenity"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Phí gửi xe máy là một trăm năm mươi nghìn một tháng.",
    "zh": "機車每月的固定停車管理費為十五萬盾。",
    "en": "Motorbike parking is 150k VND per month.",
    "usageZh": "機車月租停車費",
    "usageEn": "Motorbike parking fee"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Có bể bơi vô cực và phòng gym miễn phí cho cư dân.",
    "zh": "社區住戶享有免費使用無邊際泳池與健身房。",
    "en": "Free infinity pool and gym for residents.",
    "usageZh": "住戶專屬公設福利",
    "usageEn": "Free resident amenities"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Khu vực này có an ninh bảo vệ trực hai mươi bốn trên bảy.",
    "zh": "該豪宅社區配備 24 小時全天候安保警衛巡邏。",
    "en": "24/7 security guard patrolling the compound.",
    "usageZh": "全天候保全門禁安全",
    "usageEn": "24/7 compound security"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Khóa cửa căn hộ là khóa thông minh bằng vân tay và mã số.",
    "zh": "大門門鎖採用感應指紋與防盜密碼電子智慧鎖。",
    "en": "Smart electronic door lock with fingerprint & PIN.",
    "usageZh": "指紋密碼智慧門鎖",
    "usageEn": "Smart fingerprint lock"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Hôm nay tôi muốn đến xem nhà trực tiếp lúc ba giờ chiều.",
    "zh": "今天下午三點我想親自實地到現場看房。",
    "en": "I want to view the apartment at 3:00 PM today.",
    "usageZh": "預約房仲實地看屋",
    "usageEn": "Scheduling apartment viewing"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Không gian ở đây rất thoáng mát, sạch sẽ và yên tĩnh.",
    "zh": "這裡的居住環境非常通風涼爽、乾淨且清幽安靜。",
    "en": "The living space is airy, clean and peaceful.",
    "usageZh": "滿意看屋居住環境",
    "usageEn": "Praising living environment"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tôi đồng ý thuê căn này, chuẩn bị hợp đồng giúp tôi.",
    "zh": "我決定承租這間公寓，請房仲幫我準備租約。",
    "en": "I agree to lease this, prepare contract please.",
    "usageZh": "決定簽約承租",
    "usageEn": "Accepting lease agreement"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Đăng ký tạm trú cho người nước ngoài với công an.",
    "zh": "由房東至當地派出所為外籍房客辦理合法暫住登記。",
    "en": "Landlord registers temporary residence with police.",
    "usageZh": "外籍人士辦理居留登記",
    "usageEn": "Foreigner residence registration"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Ống nước bồn rửa chén trong bếp bị rò rỉ nước.",
    "zh": "廚房流理台下方的排水管有漏水滲水問題。",
    "en": "Kitchen sink pipe is leaking water underneath.",
    "usageZh": "報修水管滲漏",
    "usageEn": "Plumbing leak repair report"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Bóng đèn trong phòng khách bị cháy, cần thay mới.",
    "zh": "客廳的主照明燈泡燒壞了，需要更換全新燈泡。",
    "en": "Living room light bulb burned out, needs replacement.",
    "usageZh": "更換損壞燈泡",
    "usageEn": "Light bulb replacement"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Gọi thợ sửa chữa điện nước đến kiểm tra giúp tôi.",
    "zh": "麻煩請幫我聯絡合格的水電師傅前來檢修。",
    "en": "Call an electrician / plumber to inspect please.",
    "usageZh": "請房東派遣水電師傅",
    "usageEn": "Calling plumber / electrician"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Cục nóng máy lạnh kêu to quá, cần bơm thêm ga.",
    "zh": "冷氣室外主機運轉噪音很大，需要清洗補充冷媒。",
    "en": "AC compressor is noisy, needs cleaning & freon gas.",
    "usageZh": "冷氣保養清洗灌冷媒",
    "usageEn": "AC maintenance and freon refill"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Mạng Internet Wi-Fi bị mất tín hiệu, cần khởi động lại.",
    "zh": "Wi-Fi 網路突然斷線無訊號，需要重啟路由器。",
    "en": "Internet lost signal, needs router restart.",
    "usageZh": "反映網路斷線重啟",
    "usageEn": "Router restart & network fix"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Rác thải sinh hoạt để ở phòng chứa rác mỗi tầng.",
    "zh": "各樓層皆設有專用的密封垃圾集中收集室。",
    "en": "Household trash room located on each floor.",
    "usageZh": "樓層垃圾集中分類處理",
    "usageEn": "Floor trash disposal room"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Thanh toán tiền nhà qua chuyển khoản vào mùng một hàng tháng.",
    "zh": "每月一日定期透過銀行轉帳支付當月份房租。",
    "en": "Pay rent via bank transfer on 1st of each month.",
    "usageZh": "每月定期轉帳繳房租",
    "usageEn": "Monthly rent transfer rule"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Hàng xóm xung quanh rất thân thiện và lịch sự.",
    "zh": "隔壁鄰居們都非常和善親切且彬彬有禮。",
    "en": "Neighbors around are very friendly and polite.",
    "usageZh": "稱讚鄰里和睦氛圍",
    "usageEn": "Friendly neighborhood praise"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Gần đây có siêu thị mini WinMart mở cửa suốt ngày.",
    "zh": "社區樓下附近就有 24 小時全天營業的 WinMart 超商。",
    "en": "WinMart convenience store nearby open all day.",
    "usageZh": "生活採買機能便利",
    "usageEn": "WinMart convenience store"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Chợ truyền thống bán rau củ tươi cách đây năm trăm mét.",
    "zh": "販售新鮮產地蔬果的傳統菜市場距離僅五百公尺。",
    "en": "Traditional fresh market is just 500m away.",
    "usageZh": "鄰近傳統市場採買",
    "usageEn": "Traditional wet market nearby"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tôi muốn gia hạn hợp đồng thuê nhà thêm một năm nữa.",
    "zh": "合約即將期滿，我想繼續續簽續租一年的租約。",
    "en": "I want to renew the lease contract for 1 more year.",
    "usageZh": "提出續約續租申請",
    "usageEn": "Lease renewal request"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Chủ nhà rất tốt bụng và luôn hỗ trợ nhiệt tình.",
    "zh": "房東為人非常善良和藹，有問題總是第一時間協助。",
    "en": "The landlord is kind and always supportive.",
    "usageZh": "誇讚優質房東為人",
    "usageEn": "Praising helpful landlord"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tôi muốn mua một ít đồ gia dụng ở trung tâm thương mại.",
    "zh": "我想去大型購物中心採買一些日常廚房家居用品。",
    "en": "I want to buy some household goods at the mall.",
    "usageZh": "採買家居生活百貨",
    "usageEn": "Shopping for home goods"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Bình nóng lạnh có công tắc chống giật an toàn.",
    "zh": "浴室儲水式電熱水器配備安全防漏電斷路開關。",
    "en": "Water heater has anti-shock safety switch.",
    "usageZh": "安全防漏電電熱水器",
    "usageEn": "Anti-shock water heater check"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Không được hút thuốc lá bên trong căn hộ chung cư.",
    "zh": "全體住戶嚴格遵守公寓室內全面禁菸的衛生規定。",
    "en": "Smoking inside the apartment unit is prohibited.",
    "usageZh": "公寓室內全面禁菸守則",
    "usageEn": "No smoking rule in condo"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Tôi cảm thấy cuộc sống ở Việt Nam rất thoải mái và ấm áp.",
    "zh": "我覺得在越南的生活過得非常舒心自在且溫暖愜意。",
    "en": "I feel life in Vietnam is comfortable and warm.",
    "usageZh": "由衷喜愛越南旅居生活",
    "usageEn": "Enjoying life in Vietnam"
  },
  {
    "category": "居家與租屋 / Apartment & Living",
    "viet": "Chúc gia đình bạn luôn an cư lạc nghiệp và hạnh phúc!",
    "zh": "祝願您全家在此安居樂業、平安幸福美滿！",
    "en": "Wish your family peace, happiness & prosperity!",
    "usageZh": "贈予溫馨居家祝福",
    "usageEn": "Warm home blessing"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Việt Nam có rất nhiều danh lam thắng cảnh tuyệt đẹp.",
    "zh": "越南擁有非常多風景秀麗、舉世聞名的名勝古蹟。",
    "en": "Vietnam has countless breathtaking scenic spots.",
    "usageZh": "讚美越南旅遊風光",
    "usageEn": "Praising Vietnam tourism"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tôi muốn đi du lịch Vịnh Hạ Long ngắm núi đá vôi.",
    "zh": "我想去下龍灣搭遊船欣賞壯觀的喀斯特石灰岩奇景。",
    "en": "I want to tour Ha Long Bay limestone karsts.",
    "usageZh": "下龍灣世界自然遺產",
    "usageEn": "Ha Long Bay tour"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đi du thuyền ngủ đêm năm sao trên Vịnh Hạ Long.",
    "zh": "預訂五星級豪華頂級過夜遊船，在下龍灣海上巡航。",
    "en": "Book 5-star overnight cruise on Ha Long Bay.",
    "usageZh": "下龍灣豪華過夜遊船",
    "usageEn": "5-star overnight cruise"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Chèo thuyền Kayak khám phá hang động kỳ vĩ.",
    "zh": "親自划獨木舟 Kayak 穿梭探索神祕鐘乳石岩洞。",
    "en": "Kayaking to explore magnificent sea caves.",
    "usageZh": "划皮艇探索鐘乳石洞",
    "usageEn": "Kayaking through sea caves"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tham quan phố cổ Hội An rực rỡ đèn lồng đêm rằm.",
    "zh": "漫步在會安古鎮，欣賞滿街萬家燈火的夢幻五彩燈籠。",
    "en": "Visit Hoi An ancient town with colorful lanterns.",
    "usageZh": "會安古鎮燈籠夜景",
    "usageEn": "Hoi An ancient lantern town"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thả hoa đăng cầu may mắn trên dòng sông Hoài.",
    "zh": "在秋盆河（懷河）畔親手施放水燈祈求平安幸運。",
    "en": "Release floating candle lanterns on Hoai river.",
    "usageZh": "會安放水燈祈福",
    "usageEn": "Floating lanterns on river"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thành phố biển Đà Nẵng với bãi biển Mỹ Khê cát trắng.",
    "zh": "峴港海濱城市擁有獲評全球最美的美溪白沙灘。",
    "en": "Da Nang beach city with My Khe white sands.",
    "usageZh": "峴港美溪沙灘度假",
    "usageEn": "Da Nang My Khe beach"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Check-in Cầu Vàng bàn tay khổng lồ trên Bà Nà Hills.",
    "zh": "在巴拿山朝聖拍照打卡舉世聞名的巨人神之手黃金橋。",
    "en": "Check-in Golden Bridge held by hands on Ba Na.",
    "usageZh": "巴拿山黃金佛手橋",
    "usageEn": "Golden Bridge Ba Na Hills"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đi cáp treo đạt nhiều kỷ lục thế giới lên đỉnh núi.",
    "zh": "搭乘榮獲多項金氏世界紀錄的超長高空登山纜車。",
    "en": "Take world-record cable car to mountain peak.",
    "usageZh": "世界紀錄高空登山纜車",
    "usageEn": "World-record cable car"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thành phố Đà Lạt mộng mơ ngập tràn ngàn hoa.",
    "zh": "浪漫夢幻的山城大叻，氣候四季如春、百花齊放。",
    "en": "Dreamy Da Lat mountain city full of flowers.",
    "usageZh": "大叻高原避暑山城",
    "usageEn": "Dreamy Da Lat flower city"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Uống sữa đậu nành nóng và ăn bánh tráng nướng Đà Lạt.",
    "zh": "在寒涼的大叻夜市品嚐熱豆漿與現烤越式披薩煎餅。",
    "en": "Drink hot soy milk & eat Da Lat grilled rice paper.",
    "usageZh": "大叻夜市特色烤米紙",
    "usageEn": "Da Lat grilled rice paper"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đồi cát bay Mũi Né ngắm bình minh và trượt cát.",
    "zh": "在美奈紅白巨大流動沙丘欣賞絕美日出與體驗滑沙。",
    "en": "Mui Ne sand dunes for sunrise & sandboarding.",
    "usageZh": "美奈沙漠沙丘滑沙",
    "usageEn": "Mui Ne sand dunes tour"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Lái xe địa hình bốn bánh ATV trên đồi cát trắng.",
    "zh": "親自駕駛四輪驅動越野車 (ATV) 在白沙丘極速狂飆。",
    "en": "Drive 4WD ATV quad bike across white sand dunes.",
    "usageZh": "飆沙 ATV 越野車",
    "usageEn": "ATV quad bike in desert"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đảo ngọc Phú Quốc với làn nước biển trong xanh như ngọc.",
    "zh": "富國島珍珠海島擁有翡翠般清澈見底的碧海藍天。",
    "en": "Phu Quoc pearl island with emerald turquoise sea.",
    "usageZh": "富國島海島度假勝地",
    "usageEn": "Phu Quoc pearl island"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Lặn biển ngắm rạn san hô đầy màu sắc rực rỡ.",
    "zh": "潛入深海浮潛欣賞五彩繽紛的天然熱帶活珊瑚礁。",
    "en": "Snorkeling to admire colorful live coral reefs.",
    "usageZh": "深潛浮潛觀賞珊瑚礁",
    "usageEn": "Snorkeling tropical reefs"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đi cáp treo vượt biển dài nhất thế giới Hòn Thơm.",
    "zh": "搭乘跨越汪洋大海、全球最長的香島跨海全景纜車。",
    "en": "Take world longest sea-crossing cable car Hon Thom.",
    "usageZh": "富國島跨海香島纜車",
    "usageEn": "Hon Thom sea cable car"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Khám phá chợ đêm Phú Quốc ăn hải sản no nê.",
    "zh": "走訪富國島觀光夜市，痛快大啖現撈生猛海鮮。",
    "en": "Explore Phu Quoc night market for fresh seafood.",
    "usageZh": "富國島海鮮夜市狂歡",
    "usageEn": "Phu Quoc seafood market"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Ghé thăm làng chài cổ Hàm Ninh thưởng thức ghẹ tươi.",
    "zh": "探訪古樸的涵寧漁村，品嚐最肥美現蒸的花蟹。",
    "en": "Visit Ham Ninh fishing village for steamed flower crab.",
    "usageZh": "漁村現撈清蒸花蟹",
    "usageEn": "Ham Ninh fishing village crab"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Mua nước mắm truyền thống và ngọc trai làm quà lưu niệm.",
    "zh": "採購古法釀造頂級富國島魚露與天然珍珠伴手禮。",
    "en": "Buy traditional fish sauce & pearls as souvenirs.",
    "usageZh": "富國島頂級特產伴手禮",
    "usageEn": "Phu Quoc pearls & fish sauce"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Đi du lịch miền Tây sông nước Cần Thơ, Chợ Nổi Cái Răng.",
    "zh": "暢遊西南部九龍江平原水鄉芹苴與熱鬧的丐冷水上市場。",
    "en": "Explore Mekong Delta waterways & Cai Rang floating market.",
    "usageZh": "湄公河三角洲水上市場",
    "usageEn": "Mekong Delta floating market"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thuyền ba lá chèo len lỏi qua những rặng dừa nước.",
    "zh": "乘坐傳統手搖三板木船穿梭在水椰子林綠色水道間。",
    "en": "Rowing wooden sampan boat through water coconut canals.",
    "usageZh": "傳統手搖船穿梭椰林",
    "usageEn": "Rowing sampan in coconut canal"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thưởng thức đờn ca tài tử Nam Bộ di sản văn hóa.",
    "zh": "現場聆聽名列世界非物質文化遺產的南部才子彈唱。",
    "en": "Enjoy Southern folk music performance heritage.",
    "usageZh": "欣賞南部才子傳統曲藝",
    "usageEn": "Southern folk music heritage"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Ăn trái cây tươi hái tại vườn sinh thái trĩu quả.",
    "zh": "走進結實纍纍的生態果園，親手現採現吃熱帶水果。",
    "en": "Eat fresh tropical fruits picked in eco orchards.",
    "usageZh": "果園親採南洋水果",
    "usageEn": "Fruit picking in orchards"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thăm Cố đô Huế với Đại Nội Hoàng Cung uy nghiêm.",
    "zh": "探訪歷史名城順化古都與氣勢恢宏的順化皇城宮殿。",
    "en": "Visit Hue Ancient Citadel and Imperial City.",
    "usageZh": "參訪順化阮朝紫禁城",
    "usageEn": "Hue Imperial City tour"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Ngồi thuyền rồng ngắm hoàng hôn trên dòng sông Hương.",
    "zh": "乘坐在地彩繪仿古龍船，在浪漫香江上沈醉於夕陽餘暉。",
    "en": "Ride dragon boat on Perfume River at sunset.",
    "usageZh": "順化香江龍船賞日落",
    "usageEn": "Dragon boat on Perfume River"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Thưởng thức ca Huế trên sông Hương về đêm sâu lắng.",
    "zh": "夜間泛舟香江，在水波盪漾中細細聆聽典雅順化民歌。",
    "en": "Listen to Hue traditional singing on river at night.",
    "usageZh": "夜聽香江傳統宮廷雅樂",
    "usageEn": "Traditional Hue singing on boat"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Ruộng bậc thang Mù Cang Chải mùa lúa chín vàng óng.",
    "zh": "木江界梯田在秋季金黃稻穗成熟時宛如天梯仙境。",
    "en": "Mu Cang Chai golden terraced rice fields in autumn.",
    "usageZh": "西北部金黃梯田絕景",
    "usageEn": "Golden terraced rice fields"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Chinh phục đỉnh núi Fansipan nóc nhà Đông Dương.",
    "zh": "登頂海拔 3143 公尺、被譽為「印度支那屋脊」的番西邦峰。",
    "en": "Conquer Fansipan peak - the roof of Indochina.",
    "usageZh": "征服中南半島第一高峰",
    "usageEn": "Fansipan roof of Indochina"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Săn mây bồng bềnh tại thị trấn Sapa mù sương.",
    "zh": "在長年雲霧繚繞的避暑勝地沙壩小鎮漫步追尋雲海。",
    "en": "Cloud hunting in the misty mountain town of Sapa.",
    "usageZh": "沙壩雲海山城仙境",
    "usageEn": "Cloud hunting in Sapa"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tìm hiểu nét đẹp văn hóa độc đáo của đồng bào H’Mông.",
    "zh": "深入少數民族村落，親身體驗黑苗族 (H’Mông) 傳統服飾文化。",
    "en": "Discover unique ethnic culture of H’Mong people.",
    "usageZh": "探索黑苗族少數民族文化",
    "usageEn": "H’Mong ethnic culture tour"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tôi muốn mua tour du lịch trọn gói ba ngày hai đêm.",
    "zh": "我想報名參加三天兩夜的全包式精緻觀光旅行團。",
    "en": "I want to book a 3-day 2-night all-inclusive tour.",
    "usageZh": "預訂三天兩夜套裝行程",
    "usageEn": "3D2N all-inclusive tour booking"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tour có hướng dẫn viên du lịch nói tiếng Trung không?",
    "zh": "這個旅行團有配備全程講華語的專業隨團導遊嗎？",
    "en": "Does the tour have a Chinese speaking tour guide?",
    "usageZh": "指名華語專業導遊",
    "usageEn": "Chinese speaking tour guide"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Giá tour đã bao gồm vé tham quan và ăn uống chưa?",
    "zh": "團費已經包含所有景點門票與早午晚餐費了嗎？",
    "en": "Does tour price include entry tickets and all meals?",
    "usageZh": "確認全包費用明細",
    "usageEn": "Tour inclusions verification"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tôi muốn thuê một người hướng dẫn viên bản địa riêng.",
    "zh": "我想包雇一位熟知在地隱藏秘境的私人專屬導遊。",
    "en": "I want to hire a private local tour guide.",
    "usageZh": "聘請私人客製化伴遊導遊",
    "usageEn": "Hiring private local guide"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Giới thiệu cho tôi những quán ăn địa phương ngon nhất.",
    "zh": "請帶我去品嚐只有在地老饕才知道的隱藏版街頭小吃。",
    "en": "Show me the best hidden local authentic eateries.",
    "usageZh": "尋訪道地巷弄私房美食",
    "usageEn": "Local foodie spots recommendation"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Con người Việt Nam vô cùng thân thiện và hiếu khách.",
    "zh": "越南人民發自內心的友善與熱情好客令人印象深刻。",
    "en": "Vietnamese people are incredibly friendly & hospitable.",
    "usageZh": "高度讚美越南人文風情",
    "usageEn": "Praising hospitable people"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Cảnh quan thiên nhiên ở đây đẹp như một bức tranh.",
    "zh": "這裡壯麗的自然山水景致宛如一幅幅生動的水墨畫。",
    "en": "The natural landscape here is picturesque like painting.",
    "usageZh": "讚嘆大自然鬼斧神工",
    "usageEn": "Picturesque nature compliment"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tôi đã chụp được rất nhiều bức ảnh kỷ niệm tuyệt đẹp.",
    "zh": "我在這趟旅程中拍下了超多珍貴且絕美無比的紀念照。",
    "en": "I captured so many wonderful memorable photos.",
    "usageZh": "滿載拍照美好回憶",
    "usageEn": "Memorable travel photos"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Việt Nam thực sự là một điểm đến du lịch tuyệt vời!",
    "zh": "越南絕對是世界上最值得親自走訪探索的旅遊勝地！",
    "en": "Vietnam is truly a wonderful travel destination!",
    "usageZh": "極力推薦越南旅遊體驗",
    "usageEn": "Vietnam travel endorsement"
  },
  {
    "category": "旅遊與休閒 / Tourism & Travel",
    "viet": "Tôi nhất định sẽ quay lại khám phá thêm nhiều vùng đất mới!",
    "zh": "未來我一定會再度重返越南，探索更多未知的秘境！",
    "en": "I will definitely return to explore more regions!",
    "usageZh": "許下再次造訪約定",
    "usageEn": "Promising to revisit Vietnam"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cuối tuần rồi, rủ anh em cùng đi uống bia hơi thôi!",
    "zh": "週末到了，快約好兄弟們一起去路邊喝鮮啤酒！",
    "en": "It is weekend, let us go drink draft beer together!",
    "usageZh": "約酒攤熱鬧開場",
    "usageEn": "Inviting buddies for beer"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Uống bia hơi Hà Nội trên phố Tạ Hiện sầm uất.",
    "zh": "在熱鬧非凡的河內謝現啤酒街痛快暢飲生啤酒。",
    "en": "Drink Hanoi draft beer on bustling Ta Hien street.",
    "usageZh": "河內謝現街必喝鮮啤",
    "usageEn": "Ta Hien beer street experience"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Khu phố Tây Bùi Viện ở Sài Gòn náo nhiệt về đêm.",
    "zh": "西貢范五老街碧文步行街 (Bùi Viện) 越夜越美麗。",
    "en": "Bui Vien walking street in Saigon lively at night.",
    "usageZh": "西貢碧文酒吧步行街",
    "usageEn": "Bui Vien nightlife street"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho mười cốc bia hơi mát lạnh có nhiều bọt.",
    "zh": "先給我們上十杯冰涼解渴、泡沫綿密的鮮生啤酒。",
    "en": "Give us 10 cold glasses of fresh draft beer.",
    "usageZh": "爽快連點十杯生啤",
    "usageEn": "Ordering 10 glasses of draft beer"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho hai tháp bia tươi Tiger hoặc Heineken.",
    "zh": "給我來兩座帶水龍頭的 Tiger 或海尼根冰生啤酒柱。",
    "en": "Give us two draft beer towers of Tiger or Heineken.",
    "usageZh": "點大型啤酒柱 (Beer Tower)",
    "usageEn": "Beer tower order"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Thêm một xô đá lạnh để ướp lạnh lon bia.",
    "zh": "再給我們一個裝滿冰塊的鐵桶用來冰鎮易開罐啤酒。",
    "en": "Bring an ice bucket to chill canned beers please.",
    "usageZh": "越式喝啤酒加冰塊習慣",
    "usageEn": "Ice bucket for beers"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Người Việt Nam có thói quen uống bia bỏ đá vào ly.",
    "zh": "越南人喝啤酒非常習慣在玻璃杯中加入大塊冰磚。",
    "en": "Vietnamese people drink beer with ice in glasses.",
    "usageZh": "越式加冰啤酒文化特色",
    "usageEn": "Drinking beer on the rocks culture"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa nem chua rán giòn nóng hổi.",
    "zh": "給我們來一盤熱騰騰、外酥內嫩的現炸酸肉捲。",
    "en": "One plate of hot crispy fried sour pork rolls (Nem).",
    "usageZh": "啤酒下酒菜神物炸酸肉",
    "usageEn": "Nem chua ran beer snack"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa mực khô nướng xé sợi chấm tương ớt.",
    "zh": "來一隻炭烤香氣撲鼻的手撕乾魷魚沾是拉差辣椒醬。",
    "en": "Grilled dried squid shredded with chili sauce.",
    "usageZh": "炭烤魷魚乾下酒必備",
    "usageEn": "Grilled dried squid with beer"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa đậu hũ chiên sả ớt giòn rụm.",
    "zh": "來一盤香脆金黃、佐香茅與生辣椒的炸豆腐。",
    "en": "One plate of crispy fried tofu with lemongrass & chili.",
    "usageZh": "香茅炸豆腐熱炒熱門",
    "usageEn": "Fried lemongrass tofu"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa rau muống xào tỏi thơm lừng.",
    "zh": "來一盤大火快炒、蒜香四溢的脆嫩空心菜。",
    "en": "One plate of stir-fried morning glory with garlic.",
    "usageZh": "熱炒必點蒜炒空心菜",
    "usageEn": "Stir-fried morning glory garlic"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một phần nghêu hấp sả ớt thơm ngọt nước.",
    "zh": "來一份原汁原味、鮮甜多汁的香茅蒸白蛤蜊。",
    "en": "One pot of steamed clams with lemongrass & chili.",
    "usageZh": "香茅清蒸鮮蛤蜊",
    "usageEn": "Steamed clams with lemongrass"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa ốc hương xào bơ tỏi thơm nức mũi.",
    "zh": "來一盤濃郁奶油大蒜熱炒的頂級香螺海鮮。",
    "en": "One plate of sweet snails stir-fried in garlic butter.",
    "usageZh": "奶油大蒜炒香螺",
    "usageEn": "Sweet snails in garlic butter"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Chấm bánh mì nóng giòn vào nước sốt bơ tỏi.",
    "zh": "拿酥脆的法國麵包沾滿熱炒濃郁的奶油蒜香醬汁。",
    "en": "Dip crispy banh mi bread into garlic butter sauce.",
    "usageZh": "麵包沾醬極品吃法",
    "usageEn": "Dipper banh mi in snail sauce"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một phần sò huyết xào me chua ngọt đậm đà.",
    "zh": "來一份酸甜開胃、滋味濃郁的羅望子炒血蚶。",
    "en": "One plate of blood cockles in sweet sour tamarind sauce.",
    "usageZh": "酸甜羅望子炒血蚶",
    "usageEn": "Blood cockles in tamarind sauce"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa chân gà sả tắc ngâm chua cay.",
    "zh": "來一盤酸辣爽口、香脆開胃的香茅金桔醃無骨雞爪。",
    "en": "One plate of pickled chicken feet with lemongrass & kumquat.",
    "usageZh": "越式開胃冷盤檸香雞爪",
    "usageEn": "Pickled lemongrass chicken feet"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa bò lúc lắc khoai tây chiên.",
    "zh": "來一份美式黑胡椒骰子牛排佐酥炸黃金薯條。",
    "en": "One plate of Shaking Beef cubes with French fries.",
    "usageZh": "法式骰子牛柳佐薯條",
    "usageEn": "Bo Luc Lac shaking beef"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Cho một đĩa sụn gà chiên nước mắm giòn tan.",
    "zh": "來一盤香氣撲鼻、鹹甜酥脆的魚露現炸雞軟骨。",
    "en": "One plate of crispy chicken cartilage in fish sauce.",
    "usageZh": "魚露炸雞軟骨下酒菜",
    "usageEn": "Crispy chicken cartilage fish sauce"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Bàn này chuẩn bị nâng ly nào các anh em ơi!",
    "zh": "在座各位好兄弟好姊妹們，大家準備舉起酒杯囉！",
    "en": "Everyone at this table, get your glasses ready!",
    "usageZh": "全場起哄號召舉杯",
    "usageEn": "Rallying table for toast"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Một, hai, ba, dô! Hai, ba, dô! Hai, ba, uống!",
    "zh": "一、二、三，乾！二、三，乾！二、三，喝啦！",
    "en": "1, 2, 3, Cheers! 2, 3, Cheers! 2, 3, Drink up!",
    "usageZh": "越式最具震撼力的乾杯口號",
    "usageEn": "Classic Vietnamese drinking chant"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Uống trăm phần trăm (100%) cạn ly nhé!",
    "zh": "大家有義氣，這杯一定要百分之百全部乾杯喝光！",
    "en": "Bottoms up! Drink 100% empty glass!",
    "usageZh": "要求全乾一口飲盡",
    "usageEn": "100% Bottoms up call"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Không say là không về nhà hôm nay đâu nhé!",
    "zh": "今晚大家不醉不歸，沒喝痛快誰都不準先走！",
    "en": "No one goes home sober tonight!",
    "usageZh": "不醉不歸熱鬧豪言",
    "usageEn": "No sober home tonight"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Tửu lượng của bạn thực sự rất cừ khôi!",
    "zh": "你的酒量真的太深不可測、太厲害了！",
    "en": "Your drinking capacity is truly impressive!",
    "usageZh": "誇讚對方好酒量",
    "usageEn": "Praising drinking capacity"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Tôi uống không nổi nữa rồi, xin phép uống nước suối.",
    "zh": "我真的快喝不下了，請通融讓我改喝礦泉水。",
    "en": "I cannot drink more, let me have water please.",
    "usageZh": "舉白旗求饒換喝水",
    "usageEn": "Requesting water surrender"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Uống có chừng mực thôi để giữ an toàn.",
    "zh": "喝酒要適可而止量力而為，安全最重要。",
    "en": "Drink in moderation for safety first.",
    "usageZh": "理性飲酒溫馨提醒",
    "usageEn": "Moderate drinking reminder"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Đã uống rượu bia thì tuyệt đối không lái xe.",
    "zh": "「酒後絕不開車」，喝酒一律搭車叫代駕。",
    "en": "If you drink alcohol, absolutely do not drive.",
    "usageZh": "酒後不開車法定鐵律",
    "usageEn": "Do not drink and drive"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Để tôi gọi Grab chở mọi người về tận nhà an toàn.",
    "zh": "讓我用手機叫 Grab 大車，護送大家平安回家。",
    "en": "Let me book Grab rides to take everyone home safely.",
    "usageZh": "主動叫車護送好友",
    "usageEn": "Booking Grab for friends safely"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Hôm nay chúng ta đã có một đêm giao lưu quá vui!",
    "zh": "今晚這場聚會我們聊得太投緣、玩得太盡興了！",
    "en": "We had such a fun and joyful night together today!",
    "usageZh": "酒酣耳熱由衷感慨",
    "usageEn": "Memorable night together"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Tình cảm anh em chúng ta mãi mãi bền chặt!",
    "zh": "願我們跨越國界的兄弟情誼歷久彌新、永不褪色！",
    "en": "May our brotherly friendship last forever!",
    "usageZh": "兄弟情誼萬歲賀詞",
    "usageEn": "Brotherhood toast blessing"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Hẹn lần sau gặp lại chúng ta lại làm một chầu nữa nhé!",
    "zh": "約定好下次再碰面時，我們一定要再痛快喝一回！",
    "en": "Next time we meet, we will drink another round!",
    "usageZh": "許下下次再聚約定",
    "usageEn": "Next drinking round promise"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Em ơi, tính tổng tiền bàn nhậu này giúp anh.",
    "zh": "服務員，麻煩請幫我們結算這桌熱炒的所有帳單。",
    "en": "Server, calculate the total bill for this table.",
    "usageZh": "熱炒店霸氣結帳買單",
    "usageEn": "Bill calculation for party"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Hôm nay để tôi mời chầu này, mọi người đừng tranh.",
    "zh": "今天這頓全場由我作東買單請客，誰都別跟我搶！",
    "en": "Let me treat tonight round, no arguing please!",
    "usageZh": "爭相買單霸氣作東",
    "usageEn": "Treating the whole bill"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Chia đều tiền ra (Campuchia) cho công bằng nhé.",
    "zh": "這餐我們大家採荷蘭式 AA 制（越稱 Campuchia）平攤。",
    "en": "Let us split the bill equally (Go Dutch / Campuchia).",
    "usageZh": "年輕人流行 AA 制分攤",
    "usageEn": "Splitting bill equally AA"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Tối nay vui hết nấc và ấm áp tình bạn bè!",
    "zh": "今晚大家嗨到最高點，滿滿都是真摯的友情溫暖！",
    "en": "Tonight was super lively with warm friendship!",
    "usageZh": "完美句點慶祝感言",
    "usageEn": "Lively warm night closing"
  },
  {
    "category": "熱炒與乾杯 / Nightlife & Cheers",
    "viet": "Chúc toàn thể anh em sức khỏe dồi dào và thành đạt!",
    "zh": "敬祝全體好兄弟姊妹們身體健康壯如牛、事業大發達！",
    "en": "Wish all brothers great health and grand success!",
    "usageZh": "聚會散場吉利祝詞",
    "usageEn": "Final prosperity blessing to all"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tuyệt vời ông mặt trời!",
    "zh": "太棒了！無懈可擊！（越南流行俚語）",
    "en": "Awesome! Super fantastic! (Popular local slang)",
    "usageZh": "誇讚人事物超凡絕頂",
    "usageEn": "Popular awesome slang"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Hết nước chấm!",
    "zh": "美味到連沾醬都喝光／無可挑剔！（潮流俚語）",
    "en": "Beyond perfection! Absolutely flawless!",
    "usageZh": "年輕人狂讚極品流行語",
    "usageEn": "Beyond perfection slang"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Chuẩn không cần chỉnh!",
    "zh": "準確無誤！完美到不需要做任何修正！",
    "en": "So spot-on that it needs no adjustment!",
    "usageZh": "讚美精準完美無缺",
    "usageEn": "Spot-on perfection slang"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Quá đã luôn!",
    "zh": "太爽快、太過癮、太享受了！",
    "en": "Extremely satisfying and deeply enjoyable!",
    "usageZh": "表達心情舒暢爽快",
    "usageEn": "Extremely satisfying feeling"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Vui hết nấc!",
    "zh": "歡樂嗨到破表、開心到了極點！",
    "en": "Joyful to the absolute max level!",
    "usageZh": "形容情緒興奮狂喜",
    "usageEn": "Joy to the maximum limit"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Dễ thương xỉu luôn!",
    "zh": "可愛到讓人瞬間融化／萌翻天了！",
    "en": "So super cute that I could faint!",
    "usageZh": "讚美萌寵或甜美女孩",
    "usageEn": "Super cute fainting slang"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Trời ơi, đẹp xuất sắc!",
    "zh": "我的天啊，這簡直美得太出眾驚艷了！",
    "en": "Oh my gosh, breathtakingly gorgeous!",
    "usageZh": "驚嘆顏值美景極致",
    "usageEn": "Breathtakingly gorgeous"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Bạn thật là tốt bụng và chu đáo.",
    "zh": "你為人真的是太善良、太體貼細心了。",
    "en": "You are truly so kind-hearted and thoughtful.",
    "usageZh": "稱讚他人溫柔體貼",
    "usageEn": "Complimenting kindness"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tôi rất biết ơn sự giúp đỡ nhiệt tình của bạn.",
    "zh": "對於你給予我的熱心協助，我內心充滿無限感激。",
    "en": "I am deeply grateful for your generous assistance.",
    "usageZh": "表達深切謝意感恩",
    "usageEn": "Deep gratitude for help"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Có bạn làm bạn đồng hành là may mắn của tôi.",
    "zh": "能有你作為人生旅途的同行夥伴，是我莫大的幸運。",
    "en": "Having you as companion is my greatest luck.",
    "usageZh": "感謝知心好友相伴",
    "usageEn": "Gratitude for companionship"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tôi yêu đất nước và con người Việt Nam.",
    "zh": "我深深地熱愛著越南這片美麗土地與純樸的人民。",
    "en": "I deeply love Vietnam country and its people.",
    "usageZh": "表達對越南的真摯熱愛",
    "usageEn": "Love for Vietnam country"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Việt Nam giống như quê hương thứ hai của tôi.",
    "zh": "越南就像是我的第二個溫暖故鄉一樣親切。",
    "en": "Vietnam feels like my second warm hometown.",
    "usageZh": "視越南為第二故鄉",
    "usageEn": "Vietnam as second home"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Thuận buồm xuôi gió.",
    "zh": "一帆風順（萬事順風順水、前程似錦）。",
    "en": "Smooth sailing in all endeavors.",
    "usageZh": "經商遠行必備四字成語",
    "usageEn": "Smooth sailing idiom"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Mã đáo thành công.",
    "zh": "馬到成功（旗開得勝、事業迅速獲致成就）。",
    "en": "Immediate success upon arrival.",
    "usageZh": "祝賀事業騰飛經典名句",
    "usageEn": "Immediate success idiom"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Vạn sự như ý, tỷ sự như mơ.",
    "zh": "萬事如意，千千萬萬桩美夢都能成真。",
    "en": "All wishes come true, billions of dreams realized.",
    "usageZh": "年節與慶典必說吉祥賀詞",
    "usageEn": "Prosperous New Year wish"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "An khang thịnh vượng, phát tài phát lộc.",
    "zh": "闔家安康昌盛、財源廣進、大吉大利發大財。",
    "en": "Peace, health, prosperity and great wealth.",
    "usageZh": "祝賀經商發達吉祥對聯",
    "usageEn": "Wealth and prosperity idiom"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Buôn may bán đắt, khách đến nườm nượp.",
    "zh": "生意興隆通四海、買賣順利、門庭若市客滿盈。",
    "en": "May you buy lucky and sell fast with endless clients.",
    "usageZh": "祝賀開店做生意大賣",
    "usageEn": "Prosperous store blessing"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.",
    "zh": "獨木難成林，三木聚合成巍峨高山（團結就是力量）。",
    "en": "One tree cannot make a hill, three trees make a high mountain.",
    "usageZh": "強調團結合作經典古諺",
    "usageEn": "Unity is strength proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Ăn quả nhớ kẻ trồng cây.",
    "zh": "吃水果時要感念辛苦種樹的人（飲水思源、知恩圖報）。",
    "en": "When eating fruit, remember who planted tree.",
    "usageZh": "教導感恩懷德經典諺語",
    "usageEn": "Gratitude for roots proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Uống nước nhớ nguồn.",
    "zh": "喝水時要常思念水源由來（不忘本、常懷感恩之心）。",
    "en": "When drinking water, remember the spring source.",
    "usageZh": "飲水思源千古名句",
    "usageEn": "Remembering source proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Đi một ngày đàng, học một sàng khôn.",
    "zh": "行萬里路勝讀萬卷書，出門一天增長一籮筐智慧。",
    "en": "Travel a day road, gain a basket of great wisdom.",
    "usageZh": "鼓勵出國增廣見聞古訓",
    "usageEn": "Travel brings wisdom proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Có công mài sắt, có ngày nên kim.",
    "zh": "只要肯下苦功磨鐵杵，總有一天能磨成繡花針。",
    "en": "Constant grinding of iron turn into a sewing needle.",
    "usageZh": "鐵杵磨成針勉勵毅力名句",
    "usageEn": "Perseverance creates needle"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Vạn sự khởi đầu nan, gian nan đừng có nản.",
    "zh": "萬事起頭雖然艱難，但遭遇困難千萬不可輕易氣餒。",
    "en": "All beginnings are hard, do not be discouraged.",
    "usageZh": "鼓勵創業克服逆境金句",
    "usageEn": "Overcoming early hardships"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.",
    "zh": "說話無須花費金錢購買，應當慎選善言以溫暖人心。",
    "en": "Words cost nothing to buy, choose words that please heart.",
    "usageZh": "溝通以和為貴處世哲理",
    "usageEn": "Gentle speech philosophy"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Trăm nghe không bằng một thấy.",
    "zh": "百聞不如一見（親眼目睹勝過千言萬語傳聞）。",
    "en": "Hearing a hundred times is not as good as seeing once.",
    "usageZh": "重視親自見證真實體會",
    "usageEn": "Seeing is believing idiom"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Đồng vợ đồng chồng tát biển Đông cũng cạn.",
    "zh": "夫妻同心協力，連浩瀚的東海海水也能掏乾。",
    "en": "Husband and wife united can dry even the East Sea.",
    "usageZh": "讚頌夫妻同心共創家業",
    "usageEn": "Marital harmony proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Thương nhau củ ấu cũng tròn, ghét nhau bồ hòn cũng méo.",
    "zh": "相親相愛時連菱角都看作圓的，心生厭惡時連苦果也是歪的。",
    "en": "When in love, water caltrop looks round; when in hate, soapberry looks crooked.",
    "usageZh": "生動描繪愛憎情感主觀",
    "usageEn": "Love and hate subjectivity"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Nhập gia tùy tục, đáo giang tùy khúc.",
    "zh": "入境問俗，到了一條江河就隨其河道彎折（隨遇而安）。",
    "en": "When in Rome, do as the Romans do.",
    "usageZh": "出國尊重在地文化禮俗",
    "usageEn": "Adapt to local customs idiom"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Gần mực thì đen, gần đèn thì sáng.",
    "zh": "近朱者赤，近墨者黑（環境與朋友對人的深遠影響）。",
    "en": "Near ink you get stained black, near lamp you shine bright.",
    "usageZh": "擇友而交慎選環境古訓",
    "usageEn": "Influence of environment proverb"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Lá lành đùm lá rách.",
    "zh": "完好無損的葉子包裹破損殘葉（互助互愛、濟弱扶傾）。",
    "en": "Intact leaves wrap torn leaves (Mutual compassion).",
    "usageZh": "體現越南扶危濟困美德",
    "usageEn": "Mutual aid and kindness"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tôi chúc bạn luôn luôn vui vẻ và ngập tràn hạnh phúc.",
    "zh": "我祝福你天天眉開眼笑、生活中充滿無盡幸福與喜悅。",
    "en": "I wish you always joyful and full of deep happiness.",
    "usageZh": "贈予親密好友溫暖祝福",
    "usageEn": "Wishing perpetual joy & bliss"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Chúc bạn gặt hái được nhiều thành công hơn nữa trong tương lai.",
    "zh": "預祝你在未來的歲月裡，能收穫更輝煌燦爛的成就！",
    "en": "Wish you achieve even greater success in the future.",
    "usageZh": "祝福事業前程遠大",
    "usageEn": "Wishing grand future success"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tình bạn của chúng ta sẽ mãi mãi bền vững theo thời gian.",
    "zh": "願我們之間的珍貴友誼，經得起歲月洗禮，地久天長！",
    "en": "Our precious friendship will stand the test of time.",
    "usageZh": "為永恆深厚友誼乾杯",
    "usageEn": "Eternal friendship declaration"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Mong một ngày không xa được gặp lại bạn tại Đài Loan!",
    "zh": "殷切期盼不久的將來，能在台灣與你再度熱情相聚！",
    "en": "Hope to welcome you in Taiwan in the near future!",
    "usageZh": "盛情邀請至台灣作客",
    "usageEn": "Inviting friend to Taiwan"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Cảm ơn vì tất cả những kỷ niệm tuyệt vời bạn đã mang lại!",
    "zh": "由衷感謝你帶給我的所有難忘而美好的珍貴回憶！",
    "en": "Thank you for all the wonderful memories you gave me!",
    "usageZh": "離別由衷致謝銘記在心",
    "usageEn": "Thanking for sweet memories"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Mãi mãi là bạn tốt của nhau nhé!",
    "zh": "我們一輩子都要當彼此最知心、最要好的好朋友喔！",
    "en": "Let us forever be the best of true friends!",
    "usageZh": "許下一輩子摯友誓言",
    "usageEn": "Best friends forever promise"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Chúc bạn vạn dặm bình an trên con đường phía trước!",
    "zh": "祝福你在未來的人生旅程上，一路平安、萬里順遂！",
    "en": "Wish you peace and safety across thousands of miles!",
    "usageZh": "致贈深遠前程平安祝福",
    "usageEn": "Peace across 10,000 miles wish"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tôi sẽ luôn nhớ về bạn và những ngày tươi đẹp ở đây.",
    "zh": "我會永遠珍藏這段時光，並深深想念你與這裡的美好。",
    "en": "I will always remember you and beautiful days here.",
    "usageZh": "深情珍藏跨國美好時光",
    "usageEn": "Treasuring golden memories"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Tạm biệt và hẹn ngày tái ngộ sớm nhất!",
    "zh": "依依不捨道別，期待我們能以最快的速度再次相逢！",
    "en": "Farewell and looking forward to our earliest reunion!",
    "usageZh": "深情道別期盼早日重聚",
    "usageEn": "Farewell with reunion hope"
  },
  {
    "category": "情感與俗諺 / Idioms & Slang",
    "viet": "Yêu thương và trân trọng bạn rất nhiều!",
    "zh": "深深地珍惜並感謝有你出現在我的生命中！",
    "en": "Love, cherish and appreciate you very much!",
    "usageZh": "最高級深情溫馨結尾",
    "usageEn": "Loving appreciation finale"
  }
];

// 9. SRS 間隔記憶閃卡庫 (Spaced Repetition Flashcards Deck - 100 Cards Full Matrix)
export const flashcardsDeck = [
  { id: 1, viet: 'Xin chào', zh: '你好 / 您好', en: 'Hello / Greetings', hanViet: '', category: '問候與禮貌', example: 'Xin chào anh Nam, rất vui được gặp anh!' },
  { id: 2, viet: 'Cảm ơn', zh: '感謝 / 謝謝', en: 'Thank you', hanViet: '感恩 (Cảm ơn)', category: '問候與禮貌', example: 'Cảm ơn bạn rất nhiều vì đã giúp đỡ.' },
  { id: 3, viet: 'Quốc tế', zh: '國際', en: 'International', hanViet: '國際 (Quốc tế)', category: '漢越核心', example: 'Sân bay quốc tế Nội Bài ở Hà Nội.' },
  { id: 4, viet: 'Bao nhiêu', zh: '多少 (數量/價格)', en: 'How much / How many', hanViet: '', category: '購物殺價', example: 'Tô phở bò này bao nhiêu tiền?' },
  { id: 5, viet: 'Ngon quá', zh: '太好吃了 / 味道絕佳', en: 'So delicious / Tasty', hanViet: '', category: '餐飲美食', example: 'Cà phê sữa đá và bánh mì này ngon quá!' },
  { id: 6, viet: 'Công ty', zh: '公司 / 企業', en: 'Company / Corporation', hanViet: '公司 (Công ty)', category: '商務職場', example: 'Công ty chúng tôi có trụ sở ở Quận 1.' },
  { id: 7, viet: 'Hợp đồng', zh: '合約 / 契約', en: 'Contract / Agreement', hanViet: '合同 (Hợp đồng)', category: '商務職場', example: 'Hai bên đã chính thức ký kết hợp đồng.' },
  { id: 8, viet: 'Bệnh viện', zh: '醫院', en: 'Hospital', hanViet: '病院 (Bệnh viện)', category: '醫療健康', example: 'Tôi cần đi đến bệnh viện khám sức khỏe.' },
  { id: 9, viet: 'Sân bay', zh: '機場 / 飛機場', en: 'Airport', hanViet: '飛機場 (Phi trường)', category: '交通出行', example: 'Đón đối tác ở sân bay Tân Sơn Nhất.' },
  { id: 10, viet: 'Kinh tế', zh: '經濟', en: 'Economy', hanViet: '經濟 (Kinh tế)', category: '漢越核心', example: 'Kinh tế Việt Nam đang phát triển mạnh mẽ.' },
  { id: 11, viet: 'Đắt quá', zh: '太貴了 / 算便宜點', en: 'Too expensive', hanViet: '', category: '購物殺價', example: 'Cái áo này đắt quá, bớt cho em một chút nhé!' },
  { id: 12, viet: 'Khách sạn', zh: '飯店 / 旅館', en: 'Hotel', hanViet: '客棧 (Khách sạn)', category: '飯店住宿', example: 'Chúng tôi đặt phòng khách sạn năm sao 3 đêm.' },
  { id: 13, viet: 'Hẹn gặp lại', zh: '再見 / 下次見', en: 'See you again', hanViet: '', category: '問候與禮貌', example: 'Hẹn gặp lại bạn vào ngày mai nhé!' },
  { id: 14, viet: 'Rất vui được gặp bạn', zh: '很高興認識你', en: 'Nice to meet you', hanViet: '', category: '問候與禮貌', example: 'Rất vui được gặp anh tại Đài Loan.' },
  { id: 15, viet: 'Xin lỗi', zh: '對不起 / 抱歉 / 借過', en: 'Sorry / Excuse me', hanViet: '', category: '問候與禮貌', example: 'Xin lỗi, tôi có thể hỏi đường được không?' },
  { id: 16, viet: 'Không có gì', zh: '不客氣 / 沒關係', en: 'You are welcome / No problem', hanViet: '', category: '問候與禮貌', example: 'Không có gì đâu, giúp bạn là niềm vui của tôi.' },
  { id: 17, viet: 'Chúc ngủ ngon', zh: '晚安 / 祝好夢', en: 'Good night', hanViet: '', category: '問候與禮貌', example: 'Chúc cả nhà ngủ ngon và có giấc mơ đẹp.' },
  { id: 18, viet: 'Bạn tên gì?', zh: '你叫什麼名字？', en: 'What is your name?', hanViet: '', category: '問候與禮貌', example: 'Xin hỏi bạn tên là gì vậy ạ?' },
  { id: 19, viet: 'Tôi là người Đài Loan', zh: '我是台灣人', en: 'I am Taiwanese', hanViet: '台 (Đài)', category: '社交日常', example: 'Tôi là người Đài Loan sang Việt Nam du lịch.' },
  { id: 20, viet: 'Bạn khỏe không?', zh: '你身體好嗎？近況如何？', en: 'How are you?', hanViet: '康 (Khỏe)', category: '社交日常', example: 'Dạo này anh chị có khỏe không?' },
  { id: 21, viet: 'Tôi rất khỏe', zh: '我很好 / 我很健康', en: 'I am doing well', hanViet: '', category: '社交日常', example: 'Cảm ơn bạn, tôi vẫn rất khỏe và công việc tốt.' },
  { id: 22, viet: 'Cố lên!', zh: '加油！', en: 'Cheer up! / Go for it!', hanViet: '', category: '社交日常', example: 'Kỳ thi sắp tới rồi, cố lên nhé!' },
  { id: 23, viet: 'Cà phê sữa đá', zh: '越南冰奶咖啡', en: 'Iced Milk Coffee', hanViet: '', category: '餐飲美食', example: 'Cho em một ly cà phê sữa đá nhiều sữa ít ngọt.' },
  { id: 24, viet: 'Bánh mì thịt', zh: '越式豬肉法國麵包', en: 'Vietnamese Meat Banh Mi', hanViet: '', category: '餐飲美食', example: 'Một ổ bánh mì thịt nướng giòn rụm.' },
  { id: 25, viet: 'Phở bò tái nạm', zh: '生熟牛肉河粉', en: 'Rare & Brisket Beef Pho', hanViet: '', category: '餐飲美食', example: 'Cho anh một tô phở bò tái nạm thêm quẩy.' },
  { id: 26, viet: 'Bún chả Hà Nội', zh: '河內烤肉米線', en: 'Hanoi Grilled Pork Noodles', hanViet: '', category: '餐飲美食', example: 'Bún chả Hà Nội ăn kèm rau sống rất ngon.' },
  { id: 27, viet: 'Trà đá vỉa hè', zh: '街頭路邊冰茶', en: 'Street Iced Tea', hanViet: '茶 (Trà)', category: '餐飲美食', example: 'Ngồi uống trà đá vỉa hè ngắm phố phường.' },
  { id: 28, viet: 'Tính tiền nhé', zh: '買單結帳喔', en: 'The bill please', hanViet: '', category: '餐飲美食', example: 'Em ơi, tính tiền bàn số 5 giúp anh nhé!' },
  { id: 29, viet: 'Không lấy hành', zh: '不要加蔥花', en: 'No scallions / onions', hanViet: '', category: '餐飲美食', example: 'Tô phở của em không lấy hành và không ăn cay.' },
  { id: 30, viet: 'Ít đường nhiều đá', zh: '少糖多冰', en: 'Less sugar, more ice', hanViet: '', category: '餐飲美食', example: 'Trà sữa cho ít đường nhiều đá nha em.' },
  { id: 31, viet: 'Nước mắm', zh: '魚露 (越南靈魂醬汁)', en: 'Fish sauce', hanViet: '', category: '餐飲美食', example: 'Nước mắm Phú Quốc thơm ngon nức tiếng.' },
  { id: 32, viet: 'Cho thêm ớt', zh: '請多加一點辣椒', en: 'Add extra chili', hanViet: '', category: '餐飲美食', example: 'Cho xin thêm một đĩa ớt tươi xắt lát.' },
  { id: 33, viet: 'Tôi ăn chay', zh: '我吃素', en: 'I am vegetarian', hanViet: '齋 (Chay)', category: '餐飲美食', example: 'Quán này có món ăn chay không ạ?' },
  { id: 34, viet: 'Thực đơn', zh: '菜單', en: 'Menu', hanViet: '菜單 / 實單 (Thực đơn)', category: '餐飲美食', example: 'Cho tôi xem thực đơn đồ uống hôm nay.' },
  { id: 35, viet: 'Hải sản tươi sống', zh: '新鮮活海鮮', en: 'Fresh Seafood', hanViet: '海產 (Hải sản)', category: '餐飲美食', example: 'Quán này nổi tiếng với hải sản tươi sống giá rẻ.' },
  { id: 36, viet: 'Giảm giá một chút', zh: '算便宜一點 / 打折', en: 'Give a discount', hanViet: '減價 (Giảm giá)', category: '購物殺價', example: 'Mua nhiều có được giảm giá một chút không cô?' },
  { id: 37, viet: 'Một ký bao nhiêu?', zh: '一公斤多少錢？', en: 'How much per kilo?', hanViet: '', category: '購物殺價', example: 'Xoài cát Hòa Lộc một ký bao nhiêu tiền?' },
  { id: 38, viet: 'Có quẹt thẻ không?', zh: '可以刷信用卡嗎？', en: 'Can I pay by card?', hanViet: '', category: '購物殺價', example: 'Ở đây có quẹt thẻ tín dụng được không ạ?' },
  { id: 39, viet: 'Có tiền thối không?', zh: '有找零錢嗎？', en: 'Do you have change?', hanViet: '', category: '購物殺價', example: 'Tôi chỉ có tờ 500 nghìn, có tiền thối không?' },
  { id: 40, viet: 'Mua hai tặng một', zh: '買二送一', en: 'Buy 2 get 1 free', hanViet: '贈 (Tặng)', category: '購物殺價', example: 'Chương trình khuyến mãi mua hai tặng một.' },
  { id: 41, viet: 'Cho tôi xem cái này', zh: '請給我看看這個', en: 'Show me this one', hanViet: '', category: '購物殺價', example: 'Cho tôi xem cái nón lá truyền thống kia.' },
  { id: 42, viet: 'Hàng chất lượng cao', zh: '高品質商品', en: 'High quality goods', hanViet: '質量 (Chất lượng)', category: '購物殺價', example: 'Cà phê này là hàng chất lượng cao xuất khẩu.' },
  { id: 43, viet: 'Xuất xứ ở đâu?', zh: '產地來源在哪裡？', en: 'Where is it made?', hanViet: '出身 / 出處 (Xuất xứ)', category: '購物殺價', example: 'Sản phẩm này có xuất xứ từ Đà Lạt.' },
  { id: 44, viet: 'Gọi xe Grab', zh: '叫 Grab 計程車/機車', en: 'Call a Grab ride', hanViet: '', category: '交通出行', example: 'Để tôi gọi xe Grab chở chúng ta đi chợ Bến Thành.' },
  { id: 45, viet: 'Đi thẳng', zh: '直走', en: 'Go straight', hanViet: '', category: '交通出行', example: 'Đi thẳng khoảng 200 mét là tới ngã tư.' },
  { id: 46, viet: 'Rẽ phải', zh: '右轉', en: 'Turn right', hanViet: '', category: '交通出行', example: 'Đến đèn giao thông thì rẽ phải nhé bác tài.' },
  { id: 47, viet: 'Rẽ trái', zh: '左轉', en: 'Turn left', hanViet: '', category: '交通出行', example: 'Qua cây cầu này rồi rẽ trái vào hẻm.' },
  { id: 48, viet: 'Dừng ở đây nhé', zh: '請停在這裡下車', en: 'Stop here please', hanViet: '', category: '交通出行', example: 'Bác tài cho cháu dừng ở trước cửa khách sạn nhé.' },
  { id: 49, viet: 'Bật đồng hồ tính tiền', zh: '請按表跳表計費', en: 'Please turn on the meter', hanViet: '時計 (Đồng hồ)', category: '交通出行', example: 'Làm ơn bật đồng hồ tính tiền taxi giúp tôi.' },
  { id: 50, viet: 'Kẹt xe quá', zh: '塞車太嚴重了', en: 'Heavy traffic jam', hanViet: '', category: '交通出行', example: 'Giờ cao điểm ở Sài Gòn kẹt xe quá trời.' },
  { id: 51, viet: 'Ga tàu hỏa', zh: '火車站', en: 'Train station', hanViet: '火車 (Tàu hỏa)', category: '交通出行', example: 'Ga tàu hỏa Hà Nội nằm ở đường Lê Duẩn.' },
  { id: 52, viet: 'Bến xe khách', zh: '長途客運巴士站', en: 'Intercity Bus Station', hanViet: '', category: '交通出行', example: 'Bến xe Miền Đông có nhiều tuyến xe đi Đà Lạt.' },
  { id: 53, viet: 'Mấy giờ khởi hành?', zh: '幾點起飛/發車出發？', en: 'What time does it depart?', hanViet: '啟行 (Khởi hành)', category: '交通出行', example: 'Chuyến bay của chúng ta mấy giờ khởi hành?' },
  { id: 54, viet: 'Đặt phòng trước', zh: '提前預訂房間', en: 'Book room in advance', hanViet: '', category: '飯店住宿', example: 'Tôi đã đặt phòng trước qua mạng tuần trước.' },
  { id: 55, viet: 'Nhận phòng (Check-in)', zh: '辦理入住登記', en: 'Check-in', hanViet: '領房 / 入住', category: '飯店住宿', example: 'Mấy giờ tôi có thể nhận phòng khách sạn?' },
  { id: 56, viet: 'Trả phòng (Check-out)', zh: '辦理退房結帳', en: 'Check-out', hanViet: '退房', category: '飯店住宿', example: 'Giờ trả phòng quy định là 12 giờ trưa.' },
  { id: 57, viet: 'Giữ hành lý giúp tôi', zh: '請幫我寄存行李', en: 'Keep my luggage please', hanViet: '行李 (Hành lý)', category: '飯店住宿', example: 'Tôi có thể gửi giữ hành lý ở quầy lễ tân không?' },
  { id: 58, viet: 'Có bao gồm ăn sáng?', zh: '有包含早餐嗎？', en: 'Is breakfast included?', hanViet: '包含 (Bao gồm)', category: '飯店住宿', example: 'Giá phòng này đã bao gồm ăn sáng buffet chưa?' },
  { id: 59, viet: 'Mật khẩu Wi-Fi', zh: '無線網路 WiFi 密碼', en: 'Wi-Fi Password', hanViet: '密碼 (Mật khẩu)', category: '飯店住宿', example: 'Cho em xin mật khẩu Wi-Fi của quán cà phê.' },
  { id: 60, viet: 'Đổi tiền ở đâu?', zh: '哪裡可以兌換外幣？', en: 'Where can I exchange money?', hanViet: '換錢 (Đổi tiền)', category: '飯店住宿', example: 'Ở gần đây có tiệm vàng nào đổi tiền uy tín không?' },
  { id: 61, viet: 'Thuê xe máy', zh: '租借摩托車/機車', en: 'Rent a motorcycle', hanViet: '', category: '旅遊休閒', example: 'Thuê xe máy tự lái giá 150 nghìn một ngày.' },
  { id: 62, viet: 'Vé tham quan', zh: '參觀門票', en: 'Admission ticket', hanViet: '券 (Vé) / 參觀', category: '旅遊休閒', example: 'Mua vé tham quan Dinh Độc Lập ở đâu?' },
  { id: 63, viet: 'Cảnh đẹp tuyệt vời', zh: '風景極美 / 風光壯麗', en: 'Magnificent scenery', hanViet: '景 (Cảnh) / 絕 (Tuyệt)', category: '旅遊休閒', example: 'Vịnh Hạ Long có cảnh đẹp tuyệt vời như tranh vẽ.' },
  { id: 64, viet: 'Gội đầu dưỡng sinh', zh: '越式草本養生洗頭', en: 'Herbal hair spa wash', hanViet: '養生 (Dưỡng sinh)', category: '生活放鬆', example: 'Đi gội đầu dưỡng sinh thư giãn cuối tuần.' },
  { id: 65, viet: 'Mát-xa toàn thân', zh: '全身指壓按摩', en: 'Full body massage', hanViet: '全身 (Toàn thân)', category: '生活放鬆', example: 'Gói mát-xa toàn thân bằng đá nóng 90 phút.' },
  { id: 66, viet: 'Tôi bị đau đầu', zh: '我頭痛', en: 'I have a headache', hanViet: '頭 (Đầu)', category: '醫療健康', example: 'Tôi bị đau đầu và sốt nhẹ từ tối qua.' },
  { id: 67, viet: 'Đau bụng / Tiêu chảy', zh: '肚子痛 / 拉肚子', en: 'Stomachache / Diarrhea', hanViet: '', category: '醫療健康', example: 'Ăn đồ lạ bị đau bụng, cần mua thuốc tiêu hóa.' },
  { id: 68, viet: 'Tiệm thuốc tây', zh: '西藥房 / 藥局', en: 'Pharmacy / Drugstore', hanViet: '西藥 (Thuốc tây)', category: '醫療健康', example: 'Gần đây có tiệm thuốc tây nào mở cửa 24 giờ không?' },
  { id: 69, viet: 'Uống thuốc này', zh: '服用這款藥物', en: 'Take this medicine', hanViet: '', category: '醫療健康', example: 'Uống thuốc này ngày 2 lần sau bữa ăn.' },
  { id: 70, viet: 'Cứu tôi với!', zh: '救命！請幫幫我！', en: 'Save me! / Help me!', hanViet: '救 (Cứu)', category: '急難求助', example: 'Cứu tôi với, có người bị ngất xỉu!' },
  { id: 71, viet: 'Mất hộ chiếu', zh: '遺失護照', en: 'Lost passport', hanViet: '護照 (Hộ chiếu)', category: '急難求助', example: 'Tôi bị mất hộ chiếu, cần đến văn phòng đại diện báo mất.' },
  { id: 72, viet: 'Trạm cảnh sát', zh: '警察派出所', en: 'Police station', hanViet: '警察 (Cảnh sát)', category: '急難求助', example: 'Đến trạm cảnh sát gần nhất để làm giấy xác nhận.' },
  { id: 73, viet: 'Giám đốc', zh: '總經理 / 董事長 / 總裁', en: 'Director / CEO', hanViet: '監督 (Giám đốc)', category: '商務職場', example: 'Giám đốc công ty chúng tôi đang đi công tác Hà Nội.' },
  { id: 74, viet: 'Nhân viên', zh: '員工 / 職員', en: 'Staff / Employee', hanViet: '職員 (Nhân viên)', category: '商務職場', example: 'Nhân viên công ty làm việc rất chuyên nghiệp.' },
  { id: 75, viet: 'Họp bàn kế hoạch', zh: '開會討論計劃', en: 'Meeting to discuss plan', hanViet: '計劃 (Kế hoạch)', category: '商務職場', example: 'Sáng nay chúng ta có buổi họp bàn kế hoạch phát triển.' },
  { id: 76, viet: 'Báo cáo tài chính', zh: '財務報表 / 財報', en: 'Financial report', hanViet: '報告財務 (Báo cáo tài chính)', category: '商務職場', example: 'Nộp báo cáo tài chính quý 3 cho ban giám đốc.' },
  { id: 77, viet: 'Tuyển dụng nhân tài', zh: '徵才招募優秀人才', en: 'Recruit talent', hanViet: '選用 (Tuyển dụng) / 人才', category: '商務職場', example: 'Doanh nghiệp đang tuyển dụng nhiều nhân tài tiếng Việt.' },
  { id: 78, viet: 'Phát triển thị trường', zh: '拓展開拓市場', en: 'Develop market', hanViet: '發展市場 (Phát triển thị trường)', category: '商務職場', example: 'Chiến lược phát triển thị trường Đông Nam Á.' },
  { id: 79, viet: 'Đối tác chiến lược', zh: '戰略合作夥伴', en: 'Strategic partner', hanViet: '對手 / 伴 (Đối tác) / 戰略', category: '商務職場', example: 'Đài Loan là đối tác chiến lược quan trọng của Việt Nam.' },
  { id: 80, viet: 'Đầu tư nước ngoài', zh: '外國投資 (FDI)', en: 'Foreign investment', hanViet: '投資 (Đầu tư)', category: '商務職場', example: 'Thu hút nguồn vốn đầu tư nước ngoài vào công nghệ cao.' },
  { id: 81, viet: 'Ký tên đóng dấu', zh: '簽名並蓋章', en: 'Sign and stamp', hanViet: '簽名 (Ký tên) / 封 (Đóng dấu)', category: '商務職場', example: 'Vui lòng ký tên đóng dấu vào 3 bản hợp đồng.' },
  { id: 82, viet: 'Chúc mừng thành công', zh: '祝賀圓滿成功', en: 'Congratulate success', hanViet: '祝賀成功 (Chúc mừng thành công)', category: '商務職場', example: 'Chúc mừng dự án hợp tác thành công rực rỡ!' },
  { id: 83, viet: 'Giao dịch ngân hàng', zh: '銀行臨櫃交易', en: 'Banking transaction', hanViet: '交易銀行 (Giao dịch ngân hàng)', category: '商務職場', example: 'Thực hiện giao dịch chuyển tiền quốc tế tại ngân hàng.' },
  { id: 84, viet: 'Thuế thu nhập', zh: '個人/企業所得稅', en: 'Income tax', hanViet: '稅收入 (Thuế thu nhập)', category: '商務職場', example: 'Kê khai thuế thu nhập doanh nghiệp đúng hạn.' },
  { id: 85, viet: 'Bảo hiểm y tế', zh: '全民全民健康保險', en: 'Health insurance', hanViet: '保險醫療 (Bảo hiểm y tế)', category: '生活保障', example: 'Tất cả người lao động đều được đóng bảo hiểm y tế.' },
  { id: 86, viet: 'Thời tiết hôm nay', zh: '今天天氣狀況', en: 'Today weather', hanViet: '天時 (Thời tiết)', category: '日常對話', example: 'Thời tiết hôm nay ở Đà Nẵng rất mát mẻ và có nắng.' },
  { id: 87, viet: 'Trời sắp mưa rồi', zh: '快要下雨了', en: 'It is about to rain', hanViet: '', category: '日常對話', example: 'Trời sắp mưa to rồi, nhớ mang theo áo mưa nhé.' },
  { id: 88, viet: 'Bao nhiêu tuổi?', zh: '今年幾歲？(年齡)', en: 'How old are you?', hanViet: '歲 (Tuổi)', category: '日常對話', example: 'Năm nay em bao nhiêu tuổi rồi?' },
  { id: 89, viet: 'Sở thích của bạn', zh: '你的個人愛好與興趣', en: 'Your hobbies', hanViet: '所癖 (Sở thích)', category: '日常對話', example: 'Sở thích của tôi là nghe nhạc và đi du lịch khám phá.' },
  { id: 90, viet: 'Học tiếng Việt vui lắm', zh: '學越語非常有趣好玩', en: 'Learning Vietnamese is so fun', hanViet: '學 (Học)', category: '日常對話', example: 'Học tiếng Việt vui lắm, nhất là phần thanh điệu!' },
  { id: 91, viet: 'Cảm nhận thế nào?', zh: '你覺得感受如何？', en: 'How do you feel about it?', hanViet: '感 (Cảm)', category: '日常對話', example: 'Bạn cảm nhận thế nào về món ăn đường phố Sài Gòn?' },
  { id: 92, viet: 'Tuyệt vời ông mặt trời', zh: '太棒了！無懈可擊 (流行俚語)', en: 'Awesome! Super great!', hanViet: '', category: '道地口語', example: 'Chuyến đi này quả thật tuyệt vời ông mặt trời!' },
  { id: 93, viet: 'Không thành vấn đề', zh: '小事一樁 / 沒問題', en: 'No problem at all', hanViet: '問題 (Vấn đề)', category: '道地口語', example: 'Chuyện nhỏ thôi mà, không thành vấn đề đâu.' },
  { id: 94, viet: 'Đi nhậu thôi!', zh: '走吧！去熱炒喝一杯 (聚餐文化)', en: 'Let us go drink & eat street food!', hanViet: '', category: '道地口語', example: 'Cuối tuần rồi, rủ anh em cùng đi nhậu bia hơi thôi!' },
  { id: 95, viet: 'Trăm phần trăm (100%)', zh: '乾杯！一飲而盡 (100%)', en: 'Bottoms up! / 100%', hanViet: '百分之百', category: '道地口語', example: 'Một, hai, ba, dô! Uống trăm phần trăm nhé!' },
  { id: 96, viet: 'Một hai ba dô!', zh: '一、二、三，乾杯！(越式乾杯口號)', en: '1, 2, 3 Cheers!', hanViet: '', category: '道地口語', example: 'Người Việt Nam khi uống bia thường hô: Một hai ba dô!' },
  { id: 97, viet: 'Chúc mừng năm mới', zh: '新年快樂 (過年賀詞)', en: 'Happy New Year', hanViet: '祝賀新年度', category: '節慶祝福', example: 'Chúc mừng năm mới, an khang thịnh vượng!' },
  { id: 98, viet: 'An khang thịnh vượng', zh: '安康盛旺 (闔家平安、事業興盛)', en: 'Peace and Prosperity', hanViet: '安康盛旺 (An khang thịnh vượng)', category: '節慶祝福', example: 'Kính chúc quý công ty năm mới an khang thịnh vượng!' },
  { id: 99, viet: 'Vạn sự như ý', zh: '萬事如意 / 心想事成', en: 'May all your wishes come true', hanViet: '萬事如意 (Vạn sự như ý)', category: '節慶祝福', example: 'Năm mới phát tài phát lộc, vạn sự như ý!' },
  { id: 100, viet: 'Sức khỏe dồi dào', zh: '身體健康 / 活力充沛', en: 'Abundant health and vitality', hanViet: '', category: '節慶祝福', example: 'Kính chúc ông bà năm mới dồi dào sức khỏe và sống lâu trăm tuổi!' }
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
