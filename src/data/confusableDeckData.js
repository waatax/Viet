/**
 * Confusable & Minimal Pairs Mnemonic Flashcards Dataset (相近似字詞·攣生對比記憶法庫)
 * 
 * Specifically designed for Chinese (Mandarin/Taiwanese) native learners from the
 * perspective of SLA (Second Language Acquisition), Contrastive Phonology, and Dual-Coding Mnemonics.
 * 
 * Five Core Pedagogical Pillars:
 * 1. TONE_PAIRS (聲調攣生微差) - 6-tone pitch & contour minimal pairs
 * 2. VOWEL_PAIRS (母音微差與長短音) - Long a vs short ă, u vs ư, o vs ô vs ơ
 * 3. CONSONANT_PAIRS (輔音與拼寫陷阱) - Unaspirated t vs aspirated th, b vs đ, c vs kh, tr vs ch
 * 4. HANVIET_FALSE_FRIENDS (漢越同形異義假朋友) - Deceptive cognates (bác sĩ, lịch sự, kỳ cục, etc.)
 * 5. SYNONYM_NUANCES (近義詞情境微差) - Subtle pragmatic boundaries (xem/nhìn/thấy, nghĩ/nhớ/muốn, etc.)
 */

export const CONFUSABLE_CATEGORIES = [
  { id: 'all', labelZh: '🌟 全部對比組', labelEn: 'All Confusables', icon: 'Sparkles', color: 'var(--brand-primary)' },
  { id: 'tone_pairs', labelZh: '🎵 聲調攣生微差', labelEn: 'Tone Minimal Pairs', icon: 'Music', color: '#3b82f6' },
  { id: 'vowel_contrasts', labelZh: '🔤 母音長短與舌位', labelEn: 'Vowel & Length Contrasts', icon: 'Type', color: '#10b981' },
  { id: 'consonant_contrasts', labelZh: '🗣️ 輔音與拼寫陷阱', labelEn: 'Consonant & Orthography', icon: 'AudioLines', color: '#f59e0b' },
  { id: 'hanviet_false_friends', labelZh: '⚡ 漢越假朋友', labelEn: 'Han-Viet False Friends', icon: 'Zap', color: '#ec4899' },
  { id: 'synonym_nuances', labelZh: '💡 近義詞情境微差', labelEn: 'Pragmatic Synonyms', icon: 'Brain', color: '#8b5cf6' }
];

export const CONFUSABLE_PAIRS = [
  // ─────────────────────────────────────────────────────────────
  // PILLAR 1: 聲調攣生微差組 (Tone Minimal Pairs)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'conf_tone_01',
    type: 'tone_pairs',
    categoryLabelZh: '🎵 聲調攣生微差',
    categoryLabelEn: 'Tone Minimal Pairs',
    titleZh: 'ban / bán / bàn / bản / bạn',
    titleEn: 'ban / bán / bàn / bản / bạn',
    summaryZh: '最經典五調矩陣：聲調一變，從「部門」變成「賣」、「桌子」、「版本」甚至「朋友」！',
    summaryEn: 'The ultimate 5-tone matrix: changes from committee to sell, table, edition, or friend!',
    words: [
      {
        viet: 'ban',
        ipa: '[ɓaːn]',
        tone: 'ngang',
        toneSymbol: '無符號 (平聲)',
        toneNameZh: '平聲 (Ngang)',
        pitch: '44 (中平)',
        zh: '部門 / 委員會 / 班級',
        en: 'Board / Committee / Department',
        hanViet: '班 (Ban · 如 Ban giám đốc 董事會)',
        tag: '組織機構'
      },
      {
        viet: 'bán',
        ipa: '[ɓaːn˦˥]',
        tone: 'sac',
        toneSymbol: '´ (銳聲)',
        toneNameZh: '銳聲 (Sắc)',
        pitch: '35 (高升)',
        zh: '賣 / 銷售',
        en: 'To sell',
        hanViet: '販 (Bán · 如 buôn bán 經商販售)',
        tag: '商業行為'
      },
      {
        viet: 'bàn',
        ipa: '[ɓaːn˨˩]',
        tone: 'huyen',
        toneSymbol: '` (玄聲)',
        toneNameZh: '玄聲 (Huyền)',
        pitch: '31 (低降)',
        zh: '桌子 / 商量探討',
        en: 'Table / Desk / To discuss',
        hanViet: '盤 / 般 (Bàn · 如 bàn bạc 商討)',
        tag: '家具與動詞'
      },
      {
        viet: 'bản',
        ipa: '[ɓaːn˧˩˧]',
        tone: 'hoi',
        toneSymbol: '̉ (問聲)',
        toneNameZh: '問聲 (Hỏi)',
        pitch: '313 (曲折探問)',
        zh: '版本 / 地圖 / 山寨村落',
        en: 'Edition / Copy / Mountain village',
        hanViet: '版 / 本 (Bản · 如 bản đồ 地圖)',
        tag: '名詞量詞'
      },
      {
        viet: 'bạn',
        ipa: '[ɓaːn˨˩ˀ]',
        tone: 'nang',
        toneSymbol: '̣ (重聲)',
        toneNameZh: '重聲 (Nặng)',
        pitch: '21 (急頓墜落)',
        zh: '朋友 / 同伴 / 你(同輩稱呼)',
        en: 'Friend / Companion / You (peer)',
        hanViet: '伴 (Bạn · 如 bạn bè 朋友)',
        tag: '核心人稱'
      }
    ],
    mnemonicHookZh: '「平平常常是部門(ban)，向上加價把貨賣(bán)，坐在桌前來商量(bàn)，看清版本與地圖(bản)，結交一世好同伴(bạn)！」',
    mnemonicHookEn: 'Level tone is committee (ban), sharp rising sells (bán), falling sits at table (bàn), dipping checks edition (bản), heavy dot makes friends (bạn).',
    pitfallAlertZh: '華語學習者最易混淆 bán (賣) 與 bạn (朋友/你)，在越南市場上常將「Bán cho tôi... (賣給我...)」講成「Bạn cho tôi...」，意思變成「朋友給我...」，非常尷尬！',
    hanVietInsightZh: '越語中的班、販、盤、版、伴在中古漢語中皆為幫母雙唇濁/清塞音，借入越語後嚴格分流為平、銳、玄、問、重五大聲調。',
    masterSentence: 'Tôi ngồi ở bàn để bàn với bạn về việc bán bản đồ mới của ban giám đốc.',
    masterSentenceZh: '我坐在桌前(bàn)，跟朋友(bạn)商討(bàn)販售(bán)董事會(ban)新版(bản)地圖的事宜。',
    masterSentenceEn: 'I sat at the table to discuss with a friend about selling the board\'s new map edition.',
    drill: {
      questionZh: '請選出正確填空：「Cửa hàng này ___ rất nhiều loại cà phê ngon.」(這家店___許多好喝的咖啡。)',
      options: ['ban', 'bán', 'bàn', 'bạn'],
      correctIndex: 1,
      explanationZh: '句意為「販售」，因此需選用高升銳聲(Sắc)的「bán」。'
    }
  },
  {
    id: 'conf_tone_02',
    type: 'tone_pairs',
    categoryLabelZh: '🎵 聲調攣生微差',
    categoryLabelEn: 'Tone Minimal Pairs',
    titleZh: 'mua / múa / mùa / mưa',
    titleEn: 'mua / múa / mùa / mưa',
    summaryZh: '生活高頻四胞胎：買東西、跳舞、季節與下雨，稍不留意就「在下雨天買跳舞」！',
    summaryEn: 'High-frequency 4-tuple: buy, dance, season, and rain!',
    words: [
      {
        viet: 'mua',
        ipa: '[muə]',
        tone: 'ngang',
        toneSymbol: '無符號 (平聲)',
        toneNameZh: '平聲 (Ngang)',
        pitch: '44 (中平)',
        zh: '買 / 購買',
        en: 'To buy / Purchase',
        hanViet: '',
        tag: '日常生活必備'
      },
      {
        viet: 'múa',
        ipa: '[muə˦˥]',
        tone: 'sac',
        toneSymbol: '´ (銳聲)',
        toneNameZh: '銳聲 (Sắc)',
        pitch: '35 (高升)',
        zh: '跳舞 / 舞動 (如 múa lân 舞獅)',
        en: 'To dance / Gesture',
        hanViet: '舞 (Múa · 越化音)',
        tag: '藝術動作'
      },
      {
        viet: 'mùa',
        ipa: '[muə˨˩]',
        tone: 'huyen',
        toneSymbol: '` (玄聲)',
        toneNameZh: '玄聲 (Huyền)',
        pitch: '31 (低降)',
        zh: '季節 / 時令 (如 mùa hè 夏季)',
        en: 'Season / Time of year',
        hanViet: '',
        tag: '自然時令'
      },
      {
        viet: 'mưa',
        ipa: '[mɨə]',
        tone: 'ngang',
        toneSymbol: 'ư (扁唇母音+平聲)',
        toneNameZh: '平聲 (Ngang) + ư',
        pitch: '44 (中平)',
        zh: '下雨 / 雨水 (如 trời mưa 天下雨)',
        en: 'Rain / To rain',
        hanViet: '',
        tag: '天氣氣候'
      }
    ],
    mnemonicHookZh: '「平平淡淡拿錢買(mua)，手向上揚飛身舞(múa)，秋風向下降季節(mùa)，扁起嘴巴下大雨(mưa)！」',
    mnemonicHookEn: 'Level lips buy (mua), arms reach high to dance (múa), falling pitch marks the season (mùa), smiling flat lips rain (mưa)!',
    pitfallAlertZh: '華語學習者常把「mua (買)」與「bán (賣)」的調值和中文搞混。此外，「mưa (下雨)」是扁唇音 ư，發音時嘴角必須往兩側拉像微笑，千萬不可嘟嘴發成 mua！',
    hanVietInsightZh: '「múa」為漢語「舞」的早期越化音；而「mưa」與藏緬語、南亞語系的降水詞根同源。',
    masterSentence: 'Vào mùa mưa, tôi mua một cái ô rồi ra phố xem múa lân.',
    masterSentenceZh: '在雨季(mùa mưa)，我買(mua)了一把傘，然後上街看舞(múa)獅。',
    masterSentenceEn: 'In the rainy season, I bought an umbrella and went to the street to watch the lion dance.',
    drill: {
      questionZh: '請選出正確句子：「Hôm nay trời ___ to quá, tôi không đi ra ngoài được.」',
      options: ['mua', 'múa', 'mùa', 'mưa'],
      correctIndex: 3,
      explanationZh: '「trời mưa」表示「天下雨」，需選擇扁唇母音平聲的「mưa」。'
    }
  },
  {
    id: 'conf_tone_03',
    type: 'tone_pairs',
    categoryLabelZh: '🎵 聲調攣生微差',
    categoryLabelEn: 'Tone Minimal Pairs',
    titleZh: 'ma / má / mà / mả / mã / mạ',
    titleEn: 'ma / má / mà / mả / mã / mạ',
    summaryZh: '越南語 6 聲調全家桶終極試金石：鬼、媽媽、但是、墳墓、外貌、稻秧！',
    summaryEn: 'The benchmark 6-tone test: ghost, mother, but, tomb, horse/appearance, and rice seedling!',
    words: [
      {
        viet: 'ma',
        ipa: '[maː]',
        tone: 'ngang',
        toneSymbol: '無符號 (平聲)',
        toneNameZh: '平聲 (Ngang)',
        pitch: '44 (中平)',
        zh: '鬼 / 妖魔鬼怪',
        en: 'Ghost / Spirit',
        hanViet: '魔 (Ma · 漢越詞)',
        tag: '平聲'
      },
      {
        viet: 'má',
        ipa: '[maː˦˥]',
        tone: 'sac',
        toneSymbol: '´ (銳聲)',
        toneNameZh: '銳聲 (Sắc)',
        pitch: '35 (高升)',
        zh: '媽媽(南越口語) / 臉頰',
        en: 'Mother (Southern) / Cheek',
        hanViet: '媽 (Má)',
        tag: '銳聲'
      },
      {
        viet: 'mà',
        ipa: '[maː˨˩]',
        tone: 'huyen',
        toneSymbol: '` (玄聲)',
        toneNameZh: '玄聲 (Huyền)',
        pitch: '31 (低降)',
        zh: '但是 / 卻 / 也就是說',
        en: 'But / Yet / That / Which',
        hanViet: '',
        tag: '玄聲'
      },
      {
        viet: 'mả',
        ipa: '[maː˧˩˧]',
        tone: 'hoi',
        toneSymbol: '̉ (問聲)',
        toneNameZh: '問聲 (Hỏi)',
        pitch: '313 (曲折調)',
        zh: '墳墓 / 塚',
        en: 'Tomb / Grave',
        hanViet: '',
        tag: '問聲'
      },
      {
        viet: 'mã',
        ipa: '[maːˀ˦˥]',
        tone: 'nga',
        toneSymbol: '~ (跌聲)',
        toneNameZh: '跌聲 (Ngã)',
        pitch: '35 (喉塞音激升)',
        zh: '馬 / 代碼 / 外表 (如 mã QR, mật mã)',
        en: 'Horse / Code / Appearance',
        hanViet: '馬 / 碼 (Mã · 漢越詞)',
        tag: '跌聲'
      },
      {
        viet: 'mạ',
        ipa: '[maː˨˩ˀ]',
        tone: 'nang',
        toneSymbol: '̣ (重聲)',
        toneNameZh: '重聲 (Nặng)',
        pitch: '21 (短促重墜)',
        zh: '稻秧 / 苗 / 鍍(如 mạ vàng 鍍金)',
        en: 'Rice seedling / To plate',
        hanViet: '',
        tag: '重聲'
      }
    ],
    mnemonicHookZh: '「平聲幽幽遇到鬼(ma)，銳聲親親叫聲媽(má)，玄聲嘆氣卻(mà)如何，問聲低頭看墳墓(mả)，跌聲頓揚掃代碼(mã)，重聲落地插稻秧(mạ)！」',
    mnemonicHookEn: 'Level sees ghost (ma), sharp hugs mom (má), falling sighs but (mà), dipping bows at tomb (mả), broken glottal scans code (mã), heavy dot plants seedlings (mạ).',
    pitfallAlertZh: '南越口語中「Hỏi (問聲 mả)」與「Ngã (跌聲 mã)」會合流為同一種先降後揚的調型；但在北越河內，「mã」中間有極為明顯的聲門閉鎖喉塞音（類似咳嗽中斷感）。',
    hanVietInsightZh: 'ma (魔)、má (媽)、mã (馬/碼) 全是高同源漢越音，掌握這組聲調就掌握了全越南語的 6 大音高軌跡。',
    masterSentence: 'Má bảo tôi quét mã QR mua mạ, mà trời tối làm tôi sợ ma gần mả.',
    masterSentenceZh: '媽媽(má)叫我掃描二維碼(mã)買稻秧(mạ)，但是(mà)天黑讓我在墳墓(mả)旁害怕遇到鬼(ma)。',
    masterSentenceEn: 'Mom told me to scan the QR code to buy seedlings, but the dark made me fear ghosts near the tomb.',
    drill: {
      questionZh: '請選出「掃描 QR 碼」的正確越語：',
      options: ['Quét ma QR', 'Quét má QR', 'Quét mã QR', 'Quét mạ QR'],
      correctIndex: 2,
      explanationZh: '代碼、密碼皆為漢越詞「Mã」(跌聲~)。'
    }
  },
  {
    id: 'conf_tone_04',
    type: 'tone_pairs',
    categoryLabelZh: '🎵 聲調攣生微差',
    categoryLabelEn: 'Tone Minimal Pairs',
    titleZh: 'cá / cà / cả / cạ',
    titleEn: 'cá / cà / cả / cạ',
    summaryZh: '餐飲生活四重奏：吃魚、喝咖啡/茄子、全部、還是死黨密友？',
    summaryEn: 'Dining & daily 4-tone set: fish, eggplant/coffee, all, and best buddy!',
    words: [
      {
        viet: 'cá',
        ipa: '[kaː˦˥]',
        tone: 'sac',
        toneSymbol: '´ (銳聲)',
        toneNameZh: '銳聲 (Sắc)',
        pitch: '35 (高升)',
        zh: '魚 / 魚類 (如 cá hồi 鮭魚)',
        en: 'Fish',
        hanViet: '',
        tag: '食材美食'
      },
      {
        viet: 'cà',
        ipa: '[kaː˨˩]',
        tone: 'huyen',
        toneSymbol: '` (玄聲)',
        toneNameZh: '玄聲 (Huyền)',
        pitch: '31 (低降)',
        zh: '茄子 / 咖啡簡稱 (如 cà phê, cà chua 番茄)',
        en: 'Eggplant / Coffee (short)',
        hanViet: '茄 (Cà · 漢越詞)',
        tag: '食材蔬果'
      },
      {
        viet: 'cả',
        ipa: '[kaː˧˩˧]',
        tone: 'hoi',
        toneSymbol: '̉ (問聲)',
        toneNameZh: '問聲 (Hỏi)',
        pitch: '313 (曲折調)',
        zh: '全部 / 整個 / 老大長者 (如 anh cả 大哥)',
        en: 'All / Whole / Eldest',
        hanViet: '',
        tag: '範圍與長幼'
      },
      {
        viet: 'cạ',
        ipa: '[kaː˨˩ˀ]',
        tone: 'nang',
        toneSymbol: '̣ (重聲)',
        toneNameZh: '重聲 (Nặng)',
        pitch: '21 (短促重墜)',
        zh: '死黨 / 密友搭檔 (如 cạ cứng 死黨搭檔)',
        en: 'Close buddy / Partner in crime',
        hanViet: '',
        tag: '道地俚語'
      }
    ],
    mnemonicHookZh: '「躍出水面一條魚(cá)，低頭喝杯香濃咖(cà)，問問全(cả)部桌上客，誰是你的鐵死黨(cạ)！」',
    mnemonicHookEn: 'Fish jumps high (cá), coffee sips low (cà), ask if all can join (cả), drink with your best buddy (cạ)!',
    pitfallAlertZh: '很多初學者點咖啡「cà phê」常不小心唸成銳聲的「cá phê」，聽起來會像「魚咖啡」，讓店員忍俊不禁！',
    hanVietInsightZh: 'cà 源於漢語「茄」；cả 在古越語中有尊崇大者之意，因此家中大哥叫「anh cả」。',
    masterSentence: 'Tôi và bạn cạ cứng gọi cả món cá chiên cùng hai ly cà phê đá.',
    masterSentenceZh: '我和鐵死黨(cạ)點了全(cả)部的炸魚(cá)料理與兩杯冰咖啡(cà phê)。',
    masterSentenceEn: 'My best buddy and I ordered all the fried fish dishes along with two iced coffees.',
    drill: {
      questionZh: '請選出「大哥（家中最長者）」的道地越語：',
      options: ['anh cá', 'anh cà', 'anh cả', 'anh cạ'],
      correctIndex: 2,
      explanationZh: '「anh cả」代表大哥/長兄，cả 為問聲。'
    }
  },
  {
    id: 'conf_tone_05',
    type: 'tone_pairs',
    categoryLabelZh: '🎵 聲調攣生微差',
    categoryLabelEn: 'Tone Minimal Pairs',
    titleZh: 'thêm / thèm',
    titleEn: 'thêm / thèm',
    summaryZh: '一聲之差天差地別：「再加一點(thêm)」vs「嘴饞想吃(thèm)」！',
    summaryEn: 'Just one tone: "add more (thêm)" vs "crave / lust for (thèm)"!',
    words: [
      {
        viet: 'thêm',
        ipa: '[tʰeːm]',
        tone: 'ngang',
        toneSymbol: '無符號 (平聲)',
        toneNameZh: '平聲 (Ngang)',
        pitch: '44 (中平)',
        zh: '添加 / 增加 / 再多一點 (如 cho thêm 请多给)',
        en: 'Add / More / In addition',
        hanViet: '添 (Thêm · 漢越詞)',
        tag: '數量增加'
      },
      {
        viet: 'thèm',
        ipa: '[tʰeːm˨˩]',
        tone: 'huyen',
        toneSymbol: '` (玄聲)',
        toneNameZh: '玄聲 (Huyền)',
        pitch: '31 (低降)',
        zh: '嘴饞 / 渴望想吃 (如 thèm ăn 嘴饞)',
        en: 'Crave / Desire / Drool over',
        hanViet: '',
        tag: '慾望感受'
      }
    ],
    mnemonicHookZh: '「平聲添加(thêm)再多點，玄聲口水往下滴(thèm)！」',
    mnemonicHookEn: 'Level tone adds more (thêm), falling tone drools with craving (thèm)!',
    pitfallAlertZh: '在小吃攤若想跟老闆說「請再多加一點辣椒 (Cho thêm ớt)」，如果音調發成降調的「Cho thèm ớt」，就變成「讓辣椒嘴饞」，老闆會聽得一頭霧水！',
    hanVietInsightZh: 'thêm 是漢越詞「添」（如增添、添水）的直接音韻轉化，平聲對應中古漢語平聲。',
    masterSentence: 'Tôi đang rất thèm phở bò, nên bảo phục vụ cho thêm quẩy.',
    masterSentenceZh: '我現在非常嘴饞想吃(thèm)牛肉河粉，所以請服務員再添(thêm)一份油條。',
    masterSentenceEn: 'I am really craving beef pho, so I asked the waiter to add more fried dough sticks.',
    drill: {
      questionZh: '在餐廳想說「請再多給我一些紙巾」，應該說：',
      options: ['Cho thèm khăn giấy', 'Cho thêm khăn giấy', 'Cho thơm khăn giấy', 'Cho thảm khăn giấy'],
      correctIndex: 1,
      explanationZh: '「Cho thêm」代表「請多添給...」，為平聲 thêm。'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 2: 母音長短與舌位微差組 (Vowel Quality & Length)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'conf_vowel_01',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel & Length Contrasts',
    titleZh: 'tai (耳朵) vs tay (手)',
    titleEn: 'tai (ear) vs tay (hand)',
    summaryZh: '華語母語者頭號發音痛點：長母音 a [aː] vs 短母音 ă [a]！耳朵還是手？',
    summaryEn: 'Top vowel trap: Long a [aː] in tai vs short ă [a] in tay!',
    words: [
      {
        viet: 'tai',
        ipa: '[taːj]',
        tone: 'ngang',
        toneSymbol: '長母音 a [aː]',
        toneNameZh: '長 a + 半母音 i',
        pitch: '44',
        zh: '耳朵 / 災難 (如 tai nạn 災難)',
        en: 'Ear / Disaster (tai nạn)',
        hanViet: '耳 (純越) / 災 (Tai · 漢越詞)',
        tag: '器官名詞'
      },
      {
        viet: 'tay',
        ipa: '[taj]',
        tone: 'ngang',
        toneSymbol: '短母音 ă [a]',
        toneNameZh: '短 a (y 拼寫) + 半母音 i',
        pitch: '44',
        zh: '手 / 手臂 / 家伙人物 (如 tay nghề 手藝)',
        en: 'Hand / Arm / Person (slang)',
        hanViet: '手 (純越)',
        tag: '器官與技能'
      }
    ],
    mnemonicHookZh: '「耳朵聽得長長久(tai [aː])，雙手做事急又短(tay [a])！」',
    mnemonicHookEn: 'Ears listen long and wide (tai [aː]), hands act swift and short (tay [a])!',
    pitfallAlertZh: '拼寫為 -ai 時，a 為長音，嘴巴要張大、母音拖長約 1.5 倍；拼寫為 -ay 時，母音其實是短音 ă，發音急促短暫，類似注音「ㄞ」的緊縮版！',
    hanVietInsightZh: 'tai nạn (災難) 的 tai 是漢越詞「災」；而人體器官 tai (耳朵) 與 tay (手) 則是古南亞語原生詞對。',
    masterSentence: 'Anh ấy dùng cả hai tay bịt chặt đôi tai để tránh tiếng ồn.',
    masterSentenceZh: '他用雙手(hai tay)緊緊捂住雙耳(đôi tai)以避開噪音。',
    masterSentenceEn: 'He used both hands to cover his ears to block the noise.',
    drill: {
      questionZh: '越語中的「耳機 (Headphones)」是：',
      options: ['tai nghe', 'tay nghe', 'tây nghe', 'tươi nghe'],
      correctIndex: 0,
      explanationZh: '耳機戴在「耳朵 (tai)」上聽，因此是「tai nghe」。'
    }
  },
  {
    id: 'conf_vowel_02',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel & Length Contrasts',
    titleZh: 'mai (明天/梅花) vs may (幸運/縫紉)',
    titleEn: 'mai (tomorrow) vs may (lucky/sew)',
    summaryZh: '長短母音再次交鋒：「明天(ngày mai)」還是「幸運(may mắn)」？',
    summaryEn: 'Long vs short a: tomorrow (mai) vs lucky (may)!',
    words: [
      {
        viet: 'mai',
        ipa: '[maːj]',
        tone: 'ngang',
        toneSymbol: '長母音 a [aː]',
        toneNameZh: '長 a + i',
        pitch: '44',
        zh: '明天 / 梅花 (如 ngày mai, hoa mai)',
        en: 'Tomorrow / Apricot blossom (hoa mai)',
        hanViet: '梅 (Mai · 漢越詞)',
        tag: '時間與節慶'
      },
      {
        viet: 'may',
        ipa: '[maj]',
        tone: 'ngang',
        toneSymbol: '短母音 ă [a]',
        toneNameZh: '短 a + y',
        pitch: '44',
        zh: '幸運 / 縫紉裁縫 (如 may mắn 幸運, may áo 縫衣)',
        en: 'Lucky / To sew',
        hanViet: '',
        tag: '運氣與動作'
      }
    ],
    mnemonicHookZh: '「明天長長來日方長是 mai，好運短暫及時裁縫是 may！」',
    mnemonicHookEn: 'Tomorrow stretches long (mai), good luck sews quick (may)!',
    pitfallAlertZh: '向越南朋友祝賀「Chúc bạn may mắn (祝你好運)」時，如果將 may 拖長音唸成 mai，會聽起來像「Chúc bạn mai mắng (祝你明天挨罵)」，反差極大！',
    hanVietInsightZh: 'hoa mai (金盞梅/黃梅花) 是越南南方春節最重要的吉祥花卉象徵。',
    masterSentence: 'Ngày mai tôi sẽ đi mua một chiếc áo may sẵn thật may mắn.',
    masterSentenceZh: '明天(ngày mai)我將去買一件很幸運(may mắn)的成衣(may sẵn)。',
    masterSentenceEn: 'Tomorrow I will buy a ready-made shirt for good luck.',
    drill: {
      questionZh: '祝福別人「祝你好運！」的正確說法為：',
      options: ['Chúc bạn mai mắn!', 'Chúc bạn may mắn!', 'Chúc bạn mây mắn!', 'Chúc bạn mẹ mắn!'],
      correctIndex: 1,
      explanationZh: '「幸運」是短音的「may mắn」。'
    }
  },
  {
    id: 'conf_vowel_03',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel & Length Contrasts',
    titleZh: 'thu (秋天/收取) vs thư (信件/舒坦)',
    titleEn: 'thu (autumn/collect) vs thư (letter/relax)',
    summaryZh: '圓唇 u [u] vs 扁唇微笑 ư [ɨ]：中文裡完全沒有的扁唇母音對比！',
    summaryEn: 'Rounded u vs smiling flat ư: autumn (thu) vs letter (thư)!',
    words: [
      {
        viet: 'thu',
        ipa: '[tʰu]',
        tone: 'ngang',
        toneSymbol: '圓唇後母音 u',
        toneNameZh: '嘟圓嘴唇 u',
        pitch: '44',
        zh: '秋天 / 收入收取 / 收錄 (如 mùa thu, thu nhập)',
        en: 'Autumn / To collect / Record',
        hanViet: '秋 / 收 (Thu · 漢越詞)',
        tag: '季節與經濟'
      },
      {
        viet: 'thư',
        ipa: '[tʰɨ]',
        tone: 'ngang',
        toneSymbol: '扁唇央閉母音 ư',
        toneNameZh: '微笑扁唇 ư (不圓唇)',
        pitch: '44',
        zh: '信件 / 書本 / 悠閒舒適 (如 lá thư 信, thư viện 圖書館, thư giãn 放鬆)',
        en: 'Letter / Book / Relaxed',
        hanViet: '書 / 舒 (Thư · 漢越詞)',
        tag: '文書與休閒'
      }
    ],
    mnemonicHookZh: '「嘴唇嘟圓收(thu)秋色，嘴角扁笑寫家書(thư)！」',
    mnemonicHookEn: 'Pout round lips for autumn income (thu), pull wide smile for letter reading (thư)!',
    pitfallAlertZh: '發「ư」時，牙齒微閉、嘴唇向兩邊扯平像在微笑拍照說「Cheese」，千萬不要嘟嘴！如果嘟嘴就變成「u」了。',
    hanVietInsightZh: 'thu (秋/收) 與 thư (書/舒) 皆為極高頻中古漢越詞，收入是 thu nhập，圖書館是 thư viện。',
    masterSentence: 'Vào mùa thu mát mẻ, tôi ngồi viết một lá thư gửi cho gia đình.',
    masterSentenceZh: '在涼爽的秋天(mùa thu)，我坐著寫一封信(lá thư)寄給家人。',
    masterSentenceEn: 'In the cool autumn, I sat down to write a letter to my family.',
    drill: {
      questionZh: '「圖書館」在越南語中是漢越詞，正確拼寫為：',
      options: ['thu viện', 'thư viện', 'thơ viện', 'thua viện'],
      correctIndex: 1,
      explanationZh: '「書」在越語中讀為扁唇的「thư」，故圖書館為「thư viện」。'
    }
  },
  {
    id: 'conf_vowel_04',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel & Length Contrasts',
    titleZh: 'cô (姑姑/老師) vs cơ (機會/肌肉) vs co (收縮)',
    titleEn: 'cô (aunt/teacher) vs cơ (chance/muscle) vs co (shrink)',
    summaryZh: '圓唇緊 ô vs 扁舒 ơ vs 開圓 o：三隻老虎口型大辨析！',
    summaryEn: 'Close-mid ô vs unrounded ơ vs open-mid o!',
    words: [
      {
        viet: 'cô',
        ipa: '[ko]',
        tone: 'ngang',
        toneSymbol: 'ô (聚圓半閉唇)',
        toneNameZh: '嘴型小圓聚攏 (歐)',
        pitch: '44',
        zh: '姑姑 / 女性老師 / 未婚年輕女士 (稱謂)',
        en: 'Aunt / Female teacher / Miss',
        hanViet: '姑 (Cô · 漢越詞)',
        tag: '核心尊稱'
      },
      {
        viet: 'cơ',
        ipa: '[kəː]',
        tone: 'ngang',
        toneSymbol: 'ơ (長扁舒展唇)',
        toneNameZh: '嘴角放鬆微扁 (ㄜ)',
        pitch: '44',
        zh: '機會 / 肌肉 / 機構 (如 cơ hội 機會, cơ bắp 肌肉)',
        en: 'Opportunity / Muscle / Mechanism',
        hanViet: '機 / 肌 (Cơ · 漢越詞)',
        tag: '漢越抽象詞'
      },
      {
        viet: 'co',
        ipa: '[kɔ]',
        tone: 'ngang',
        toneSymbol: 'o (大圓開口唇)',
        toneNameZh: '嘴巴張大滾圓 (喔)',
        pitch: '44',
        zh: '收縮 / 蜷縮 / 抽筋 (如 co lại 收縮)',
        en: 'To contract / Shrink / Curl up',
        hanViet: '',
        tag: '物理動詞'
      }
    ],
    mnemonicHookZh: '「帽子聚圓尊稱姑(cô)，帶鬍子放鬆有機會(cơ)，大嘴圓圈冷得直蜷縮(co)！」',
    mnemonicHookEn: 'Hat ô is aunt (cô), hooked ơ grabs opportunity (cơ), open o curls up with cold (co)!',
    pitfallAlertZh: '符號記憶神技：ô 上面有一頂「小帽子 (mũ)」，像戴著端莊帽子的女老師「cô giáo」；ơ 右上角有一個「小鬍子/小鉤子」，順手抓住機會「cơ hội」！',
    hanVietInsightZh: 'cô (姑)、cơ (機/肌) 皆是漢越核心詞，而 co 則是純越語物理動詞。',
    masterSentence: 'Cô giáo dạy chúng tôi nắm bắt cơ hội trước khi nền kinh tế co lại.',
    masterSentenceZh: '女老師(cô giáo)教我們在經濟收縮(co lại)前先把握機會(cơ hội)。',
    masterSentenceEn: 'The teacher taught us to seize opportunities before the economy contracts.',
    drill: {
      questionZh: '商務上常說的「把握機會 (nắm bắt ___)」，空格應填入：',
      options: ['cô hội', 'cơ hội', 'co hội', 'cư hội'],
      correctIndex: 1,
      explanationZh: '「機會」為漢越詞「cơ hội」，母音為帶鬍子的 ơ。'
    }
  },
  {
    id: 'conf_vowel_05',
    type: 'vowel_contrasts',
    categoryLabelZh: '🔤 母音長短與舌位',
    categoryLabelEn: 'Vowel & Length Contrasts',
    titleZh: 'cơm (米飯) vs câm (啞巴)',
    titleEn: 'cơm (cooked rice) vs câm (mute)',
    summaryZh: '長母音 ơ [əː] vs 短母音 â [ə]：去小吃攤點飯千萬別說成啞巴！',
    summaryEn: 'Long ơ in cơm (rice) vs short â in câm (mute)!',
    words: [
      {
        viet: 'cơm',
        ipa: '[kəːm]',
        tone: 'ngang',
        toneSymbol: 'ơ (長中央母音)',
        toneNameZh: '長 ơ [əː]',
        pitch: '44',
        zh: '米飯 / 便當餐點 (如 cơm sườn 排骨飯)',
        en: 'Cooked rice / Meal',
        hanViet: '',
        tag: '飲食生活核心'
      },
      {
        viet: 'câm',
        ipa: '[kəm]',
        tone: 'ngang',
        toneSymbol: 'â (短中央母音)',
        toneNameZh: '短 â [ə]',
        pitch: '44',
        zh: '啞巴 / 沉默無聲 (如 câm miệng 閉嘴)',
        en: 'Mute / Dumb / Speechless',
        hanViet: '喑 (Câm · 漢越詞)',
        tag: '生理與情緒'
      }
    ],
    mnemonicHookZh: '「吃米飯要細嚼慢嚥發長音(cơm)，急促短音閉上嘴巴成啞巴(câm)！」',
    mnemonicHookEn: 'Savor delicious rice with long ơ (cơm), swift short â stays silent and mute (câm)!',
    pitfallAlertZh: '去平民便當店 (quán cơm bình dân) 時，如果把「cơm」發得太短促且嘴形太窄，就會聽起來像「câm」，非常失禮！',
    hanVietInsightZh: 'cơm 是南亞語系最核心的原生水稻飲食詞彙，而 câm 對應漢語「喑啞」之「喑」。',
    masterSentence: 'Quán này nấu cơm rất ngon, làm cả bàn ăn mê mẩn đến mức câm nín.',
    masterSentenceZh: '這家店煮的米飯(cơm)太好吃了，讓整桌人沉醉到說不出話(câm nín)。',
    masterSentenceEn: 'This eatery makes such delicious rice that the entire table ate in stunned silence.',
    drill: {
      questionZh: '在胡志明市街頭常見的著名美食「碎米排骨飯」，越語是：',
      options: ['câm tấm', 'cơm tấm', 'cam tấm', 'cơm tôm'],
      correctIndex: 1,
      explanationZh: '米飯為長音的「cơm」，故碎米飯為「cơm tấm」。'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 3: 輔音與拼寫陷阱組 (Consonants & Orthography)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'conf_cons_01',
    type: 'consonant_contrasts',
    categoryLabelZh: '🗣️ 輔音與拼寫陷阱',
    categoryLabelEn: 'Consonant & Orthography',
    titleZh: 'tôi (我) vs thôi (算了/停止)',
    titleEn: 'tôi (I/me) vs thôi (stop/forget it)',
    summaryZh: '華語母語者全體中招盲點：越南語 T 是不送氣ㄉ，Th 才是送氣ㄊ！',
    summaryEn: 'Top orthography trap: Vietnamese T is unaspirated [t] (like D), while Th is aspirated [tʰ] (like T)!',
    words: [
      {
        viet: 'tôi',
        ipa: '[toj]',
        tone: 'ngang',
        toneSymbol: 't (不送氣清塞音 [t])',
        toneNameZh: '讀如注音「ㄉ」或台語「短」',
        pitch: '44',
        zh: '我 / 本人 (最通用正式的第一人稱自稱)',
        en: 'I / Me (standard formal)',
        hanViet: '僕 (Tôi · 古越意為僕人)',
        tag: '人稱代詞之王'
      },
      {
        viet: 'thôi',
        ipa: '[tʰoj]',
        tone: 'ngang',
        toneSymbol: 'th (送氣清塞音 [tʰ])',
        toneNameZh: '讀如注音「ㄊ」或英文 T',
        pitch: '44',
        zh: '算了 / 停止 / 作罷 / 就這樣 (如 thôi đi 算了吧)',
        en: 'Stop / Leave it / No more / That is all',
        hanViet: '退 (Thôi · 漢越詞)',
        tag: '生活高頻語氣詞'
      }
    ],
    mnemonicHookZh: '「ㄉ我(tôi)不吐氣，ㄊ算了(thôi)大口吹氣！」',
    mnemonicHookEn: 'T sounds like D for myself (tôi), Th puffs breath for stop it (thôi)!',
    pitfallAlertZh: '高達 90% 的華語學習者把「Tôi tên là... (我叫...)」讀成「Thôi tên là...」，聽在越南人耳裡變成了「算了吧名叫...」！請在掌心前發 tôi，掌心感受不到氣流才是對的！',
    hanVietInsightZh: 'tôi 原意為古代對長上的謙稱「僕人/我僕」，後演化為現代最標準客氣的「我」；thôi 源自中古漢越詞「退/罷」。',
    masterSentence: 'Tôi khuyên anh ấy nên dừng lại, thôi đừng làm chuyện mạo hiểm nữa.',
    masterSentenceZh: '我(tôi)勸他應該停手，算了吧(thôi)別再做冒險的事了。',
    masterSentenceEn: 'I advised him to stop and let it go, no more taking foolish risks.',
    drill: {
      questionZh: '自我介紹說「我是台灣人」，正確發音開頭應為：',
      options: ['Thôi là người Đài Loan', 'Tôi là người Đài Loan', 'Tơi là người Đài Loan', 'Tui là người Đài Loan'],
      correctIndex: 1,
      explanationZh: '標準自我介紹為「Tôi là...」，t 讀不送氣音 [t]。'
    }
  },
  {
    id: 'conf_cons_02',
    type: 'consonant_contrasts',
    categoryLabelZh: '🗣️ 輔音與拼寫陷阱',
    categoryLabelEn: 'Consonant & Orthography',
    titleZh: 'cá (魚) vs khá (挺好/相當)',
    titleEn: 'cá (fish) vs khá (pretty good/quite)',
    summaryZh: '不送氣軟顎塞音 c [k] (ㄍ) vs 軟顎清擦音 kh [x] (ㄏ)！',
    summaryEn: 'Unaspirated c [k] vs velar fricative kh [x]!',
    words: [
      {
        viet: 'cá',
        ipa: '[kaː˦˥]',
        tone: 'sac',
        toneSymbol: 'c (軟顎塞音 [k])',
        toneNameZh: '不送氣塞音 (ㄍ)',
        pitch: '35',
        zh: '魚 (名詞)',
        en: 'Fish',
        hanViet: '',
        tag: '食材名詞'
      },
      {
        viet: 'khá',
        ipa: '[xaː˦˥]',
        tone: 'sac',
        toneSymbol: 'kh (軟顎擦音 [x])',
        toneNameZh: '喉嚨摩擦音 (深喉ㄏ)',
        pitch: '35',
        zh: '相當 / 挺好 / 頗 (如 khá tốt 相當不錯, khá giả 富裕)',
        en: 'Quite / Pretty / Decent / Fairly',
        hanViet: '可 (Khá · 漢越詞)',
        tag: '程度副詞'
      }
    ],
    mnemonicHookZh: '「ㄍ乾脆閉氣是游魚(cá)，ㄏ喉嚨哈氣是相當好(khá)！」',
    mnemonicHookEn: 'Hard k-sound catches fish (cá), throat fricative kh scores pretty well (khá)!',
    pitfallAlertZh: '越南語的「kh」絕對不是英文的 k，也不是中文注音的 ㄎ！它是喉頭軟顎摩擦發出的擦音 [x]（類似德語 Bach 或台語「好」的喉音）。',
    hanVietInsightZh: 'khá 在古漢越音中對應「可」（如差強人意、尚可）。',
    masterSentence: 'Món cá kho tộ hôm nay được nấu khá vừa miệng.',
    masterSentenceZh: '今天的砂鍋燜魚(cá kho tộ)煮得相當(khá)合胃口。',
    masterSentenceEn: 'The braised claypot fish today was cooked quite nicely.',
    drill: {
      questionZh: '想稱讚對方的越語「說得相當不錯」，應該用哪個詞修飾 giỏi？',
      options: ['cá giỏi', 'khá giỏi', 'cà giỏi', 'khô giỏi'],
      correctIndex: 1,
      explanationZh: '「相當優秀/挺厲害」需使用程度副詞「khá giỏi」。'
    }
  },
  {
    id: 'conf_cons_03',
    type: 'consonant_contrasts',
    categoryLabelZh: '🗣️ 輔音與拼寫陷阱',
    categoryLabelEn: 'Consonant & Orthography',
    titleZh: 'ba (爸爸/三) vs đa (多/榕樹)',
    titleEn: 'ba (father/three) vs đa (multi/banyan tree)',
    summaryZh: '內爆濁音大對決：雙唇內爆 b [ɓ] vs 舌尖齒齦內爆 đ [ɗ]！',
    summaryEn: 'Implosive battle: bilabial b [ɓ] vs alveolar đ [ɗ]!',
    words: [
      {
        viet: 'ba',
        ipa: '[ɓaː]',
        tone: 'ngang',
        toneSymbol: 'b (雙唇內爆濁音 [ɓ])',
        toneNameZh: '閉唇微吸氣後爆破',
        pitch: '44',
        zh: '父親 / 爸爸 (南越) / 數字 3',
        en: 'Father / Dad / Number 3',
        hanViet: '巴 (Ba)',
        tag: '基礎數字親屬'
      },
      {
        viet: 'đa',
        ipa: '[ɗaː]',
        tone: 'ngang',
        toneSymbol: 'đ (舌尖內爆濁音 [ɗ])',
        toneNameZh: '舌尖抵上齒齦吸氣彈開',
        pitch: '44',
        zh: '多 / 多元 / 榕樹 (如 đa số 多數, cây đa 榕樹)',
        en: 'Multi / Plural / Banyan tree',
        hanViet: '多 (Đa · 漢越詞)',
        tag: '漢越詞根'
      }
    ],
    mnemonicHookZh: '「雙唇緊抿啵出爸爸三(ba)，舌尖抵齒彈出多元(đa)！」',
    mnemonicHookEn: 'Lips snap for dad & three (ba), tongue tip clicks for multi & diverse (đa)!',
    pitfallAlertZh: '注意字形：越語中有橫槓的「Đ/đ」才是發濁塞音 [ɗ]（類似英文 D）；沒有橫槓的「D/d」在北越讀 [z]，在南越讀 [j] (像英文 Y)！千萬別混淆！',
    hanVietInsightZh: 'đa dạng (多樣)、đa quốc gia (跨國/多國) 皆源自漢語「多」。',
    masterSentence: 'Ba tôi thích ngồi dưới gốc cây đa kể về văn hóa đa dạng của Việt Nam.',
    masterSentenceZh: '我爸爸(ba)喜歡坐在榕樹(cây đa)下講述越南的多樣(đa dạng)文化。',
    masterSentenceEn: 'My father likes to sit under the banyan tree and talk about Vietnam\'s diverse culture.',
    drill: {
      questionZh: '漢越詞「多數（大部分的人）」在越語中寫作：',
      options: ['ba số', 'đa số', 'da số', 'đá số'],
      correctIndex: 1,
      explanationZh: '「多」的漢越詞對應帶槓的「đa」，故為「đa số」。'
    }
  },
  {
    id: 'conf_cons_04',
    type: 'consonant_contrasts',
    categoryLabelZh: '🗣️ 輔音與拼寫陷阱',
    categoryLabelEn: 'Consonant & Orthography',
    titleZh: 'trời (天空) vs chơi (玩耍)',
    titleEn: 'trời (sky/heaven) vs chơi (play/hang out)',
    summaryZh: '捲舌塞擦音 tr [ʈ͡ʂ] vs 舌面前塞擦音 ch [t͡ɕ]！',
    summaryEn: 'Retroflex tr vs alveolo-palatal ch: sky (trời) vs play (chơi)!',
    words: [
      {
        viet: 'trời',
        ipa: '[ʈ͡ʂəːj˨˩]',
        tone: 'huyen',
        toneSymbol: 'tr (捲舌塞擦音)',
        toneNameZh: '舌尖翹起捲舌 (ㄓ)',
        pitch: '31',
        zh: '天空 / 天氣 / 老天爺 / 天哪！(感嘆詞)',
        en: 'Sky / Weather / Heaven / Heavens!',
        hanViet: '天 (Trời · 純越古音)',
        tag: '自然與感嘆'
      },
      {
        viet: 'chơi',
        ipa: '[t͡ɕəːj]',
        tone: 'ngang',
        toneSymbol: 'ch (舌面前塞擦音)',
        toneNameZh: '舌面平平抵齒齦 (ㄐ/ㄗ)',
        pitch: '44',
        zh: '玩耍 / 聚會娛樂 / 逛逛 (如 đi chơi 出去玩)',
        en: 'To play / Hang out / Have fun',
        hanViet: '',
        tag: '休閒娛樂'
      }
    ],
    mnemonicHookZh: '「捲起舌頭仰望老天爺(trời)，平著舌頭出去逛街玩(chơi)！」',
    mnemonicHookEn: 'Curl tongue to look at the sky (trời), flat tongue goes out to play (chơi)!',
    pitfallAlertZh: '在北越（河內）口音中，tr 與 ch 大多合流讀成不捲舌的 [c]（类似ㄐ/ㄗ）；但在南方或中越，tr 捲舌十分清晰。此外，兩者聲調不同：trời 是玄聲(降調)，chơi 是平聲！',
    hanVietInsightZh: '「Trời ơi! (我的天哪！)」是全越南最道地、使用頻率最高的日常感嘆口頭禪。',
    masterSentence: 'Hôm nay trời đẹp quá, tụi mình cùng nhau đi chơi nhé!',
    masterSentenceZh: '今天天氣(trời)太好了，我們大家一起出去玩(đi chơi)吧！',
    masterSentenceEn: 'The weather is so lovely today, let\'s go hang out together!',
    drill: {
      questionZh: '越南人驚呼「天哪！我的老天！」最常脫口而出的句子是：',
      options: ['Chơi ơi!', 'Trời ơi!', 'Trơi ơi!', 'Chời ơi!'],
      correctIndex: 1,
      explanationZh: '「老天爺」是捲舌帶降調的「Trời」，故為「Trời ơi!」。'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 4: 漢越同形異義假朋友 (Han-Viet False Friends)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'conf_false_01',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Bác sĩ (醫生) vs Tiến sĩ (博士)',
    titleEn: 'Bác sĩ (medical doctor) vs Tiến sĩ (PhD)',
    summaryZh: '漢越假朋友第一大坑：字面是「博士」，實際上是看病的「醫生」！',
    summaryEn: 'Deceptive Han-Viet false friend: Bác sĩ literally means "Ph.D" in Chinese characters, but in Vietnamese it means medical doctor!',
    words: [
      {
        viet: 'Bác sĩ',
        ipa: '[ɓaːk˦˥ si˦˥ˀ]',
        tone: 'sac-nga',
        toneSymbol: '漢越字面：博士',
        toneNameZh: '字面「博士」❌',
        pitch: '35-35',
        zh: '醫生 / 醫師 (看病行醫者)',
        en: 'Medical Doctor / Physician',
        hanViet: '博士 (Bác sĩ · 語義轉移為醫生)',
        tag: '醫療職業'
      },
      {
        viet: 'Tiến sĩ',
        ipa: '[tiən˦˥ si˦˥ˀ]',
        tone: 'sac-nga',
        toneSymbol: '漢越字面：進士',
        toneNameZh: '字面「進士」✅',
        pitch: '35-35',
        zh: '博士 (學術最高學位 Ph.D.)',
        en: 'Ph.D. / Academic Doctorate',
        hanViet: '進士 (Tiến sĩ · 現代指博士學位)',
        tag: '最高學歷'
      }
    ],
    mnemonicHookZh: '「生病進醫院找博愛的是醫生(Bác sĩ)，古代中進士有學問的是學術博士(Tiến sĩ)！」',
    mnemonicHookEn: 'Bác sĩ cures your illness as a doctor; Tiến sĩ passes exams to earn a PhD degree!',
    pitfallAlertZh: '華語商務人士介紹自己顧問是「博士」時，千萬別說成「Ông ấy là Bác sĩ」，對方會以為他是內科或外科醫生！必須說「Tiến sĩ」！',
    hanVietInsightZh: '在古代官制中，「博士」為官醫官署之職稱（如太醫署醫學博士），因此越語保留了「博士=醫生」的古義；而科舉殿試最高科名「進士」，在現代越南語中被用來翻譯西方最高學位「博士 (Ph.D)」。',
    masterSentence: 'Vị tiến sĩ kinh tế đó phải đến bệnh viện gặp bác sĩ để kiểm tra sức khỏe.',
    masterSentenceZh: '那位經濟學博士(tiến sĩ)必須去醫院找醫生(bác sĩ)檢查身體。',
    masterSentenceEn: 'That economics Ph.D. had to visit the hospital to see a medical doctor for a checkup.',
    drill: {
      questionZh: '在越南肚子痛去診所看病，櫃檯護士會問你要看哪位：',
      options: ['Tiến sĩ', 'Bác sĩ', 'Thạc sĩ', 'Kỹ sư'],
      correctIndex: 1,
      explanationZh: '行醫看診的醫生在越語中稱為「Bác sĩ」。'
    }
  },
  {
    id: 'conf_false_02',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Lịch sự (禮貌斯文) vs Lịch sử (歷史)',
    titleEn: 'Lịch sự (polite/courteous) vs Lịch sử (history)',
    summaryZh: '一音之差，鬧大笑話：歷史 Lịch sử 變成了有禮貌 Lịch sự！',
    summaryEn: 'Just one tone difference: Lịch sự means polite, while Lịch sử means history!',
    words: [
      {
        viet: 'Lịch sự',
        ipa: '[lik˨˩ˀ sɨ˨˩ˀ]',
        tone: 'nang-nang',
        toneSymbol: '重聲+重聲 (̣)',
        toneNameZh: '雙重聲短促',
        pitch: '21-21',
        zh: '有禮貌的 / 斯文客氣 / 優雅得體',
        en: 'Polite / Courteous / Civilized / Elegant',
        hanViet: '歷事 (Lịch sự · 歷練事理得體之意)',
        tag: '修養品格'
      },
      {
        viet: 'Lịch sử',
        ipa: '[lik˨˩ˀ sɨ˧˩˧]',
        tone: 'nang-hoi',
        toneSymbol: '重聲+問聲 (̉)',
        toneNameZh: '後字為問聲曲折',
        pitch: '21-313',
        zh: '歷史 / 史學 (如 lịch sử Việt Nam 越南歷史)',
        en: 'History / Historical',
        hanViet: '歷史 (Lịch sử · 漢越詞)',
        tag: '學術人文'
      }
    ],
    mnemonicHookZh: '「重聲落地好教養，為人處事真禮貌(Lịch sự)；問號悠悠問古今，上下五千是歷史(Lịch sử)！」',
    mnemonicHookEn: 'Heavy dot is polite and courteous (Lịch sự); curved hook ponders historical events (Lịch sử)!',
    pitfallAlertZh: '中文學習者常將「學歷史 (học lịch sử)」誤發成「học lịch sự (學習禮貌)」。要特別注意第二個字的聲調：問聲 (sử) 是歷史，重聲 (sự) 是禮貌！',
    hanVietInsightZh: 'Lịch sự 字面為「歷事」，古義為「飽歷人事、見多識廣因而通情達理、言行得體」，後凝固為形容詞「斯文禮貌」。',
    masterSentence: 'Giáo viên dạy môn lịch sử luôn cư xử rất lịch sự và hòa nhã với học sinh.',
    masterSentenceZh: '教歷史(lịch sử)課的老師對待學生一向舉止非常有禮貌(lịch sự)且和藹。',
    masterSentenceEn: 'The history teacher always conducts himself very politely and gently with students.',
    drill: {
      questionZh: '讚美某位先生「衣著講究、舉止斯文有禮貌」，應該用哪個詞？',
      options: ['lịch sử', 'lịch sự', 'lịch sắc', 'lịch sinh'],
      correctIndex: 1,
      explanationZh: '有禮貌、體面斯文是雙重聲的「lịch sự」。'
    }
  },
  {
    id: 'conf_false_03',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Khách sạn (現代高級飯店) vs Nhà trọ (平價客棧/出租房)',
    titleEn: 'Khách sạn (hotel) vs Nhà trọ (guesthouse/hostel)',
    summaryZh: '「客棧」不是古代簡陋小木屋！越南語的 Khách sạn 是現代豪華星級大飯店！',
    summaryEn: 'Khách sạn literally sounds like ancient inn (客棧) to Chinese ears, but modernly means a star hotel!',
    words: [
      {
        viet: 'Khách sạn',
        ipa: '[xak˦˥ saːn˨˩ˀ]',
        tone: 'sac-nang',
        toneSymbol: '漢越字面：客棧',
        toneNameZh: '字面「客棧」❌',
        pitch: '35-21',
        zh: '現代飯店 / 旅館酒店 (如 khách sạn 5 sao 五星級飯店)',
        en: 'Hotel / Star-rated Hotel',
        hanViet: '客棧 (Khách sạn · 現代專指高級旅館)',
        tag: '現代旅宿'
      },
      {
        viet: 'Nhà trọ',
        ipa: '[ɲaː˨˩ ʈ͡ʂɔ˨˩ˀ]',
        tone: 'huyen-nang',
        toneSymbol: '純越語詞彙',
        toneNameZh: '玄聲+重聲',
        pitch: '31-21',
        zh: '廉價旅社 / 學生工人分租套房 / 簡陋宿所',
        en: 'Boarding house / Low-cost rental room / Hostel',
        hanViet: '屋寄 (Nhà + 寓/歇)',
        tag: '平價租屋'
      }
    ],
    mnemonicHookZh: '「高樓大廈金碧輝煌叫客棧(Khách sạn)，簡陋背包平民合租叫小宿(Nhà trọ)！」',
    mnemonicHookEn: 'Fancy 5-star hotels are called Khách sạn; modest local boarding rooms are Nhà trọ!',
    pitfallAlertZh: '很多華語遊客看到招牌寫「Khách sạn」以為是平價廉價客棧，走進去才發現是幾百美元一晚的豪華五星飯店！而一般的平價小民宿通常寫「Nhà nghỉ (休息屋)」或「Nhà trọ」。',
    hanVietInsightZh: '「棧」本意為養馬棚或客商堆貨棧房，但在越南近代法語統治與現代化過程中，Khách sạn 被正式確立為 hotel 的標準書面譯詞。',
    masterSentence: 'Chúng tôi đặt phòng ở khách sạn năm sao, chứ không ở nhà trọ bình dân.',
    masterSentenceZh: '我們預訂了五星級飯店(khách sạn)的房間，而不是住平民出租房(nhà trọ)。',
    masterSentenceEn: 'We booked a room at a five-star hotel rather than staying at a budget boarding house.',
    drill: {
      questionZh: '在河內出差想入住「五星級商務飯店」，應搜尋：',
      options: ['Nhà trọ 5 sao', 'Khách sạn 5 sao', 'Quán trọ 5 sao', 'Nhà ăn 5 sao'],
      correctIndex: 1,
      explanationZh: '現代星級飯店一律稱為「Khách sạn」。'
    }
  },
  {
    id: 'conf_false_04',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Kỳ cục (尷尬荒謬) vs Ván cờ (棋局)',
    titleEn: 'Kỳ cục (weird/awkward) vs Ván cờ (chess game)',
    summaryZh: '字面是「棋局」，但越南人說 Kỳ cục 是在罵「古怪、尷尬、荒誕不經」！',
    summaryEn: 'Kỳ cục sounds like chess match in Han-Viet, but means bizarre, awkward or ridiculous!',
    words: [
      {
        viet: 'Kỳ cục',
        ipa: '[ki˨˩ kuk˨˩ˀ]',
        tone: 'huyen-nang',
        toneSymbol: '漢越字面：奇局',
        toneNameZh: '字面「奇局」❌',
        pitch: '31-21',
        zh: '古怪尷尬 / 荒唐可笑 / 莫名其妙',
        en: 'Weird / Bizarre / Awkward / Ridiculous',
        hanViet: '奇局 (Kỳ cục · 轉義為荒謬奇怪)',
        tag: '情緒與評價'
      },
      {
        viet: 'Ván cờ',
        ipa: '[vaːn˦˥ kəː˨˩]',
        tone: 'sac-huyen',
        toneSymbol: '純越+漢越',
        toneNameZh: '銳聲+玄聲',
        pitch: '35-31',
        zh: '一盤棋 / 棋局 (真正下象棋、圍棋的局)',
        en: 'Chess game / Match of chess',
        hanViet: '板棋 (Ván cờ)',
        tag: '棋藝博弈'
      }
    ],
    mnemonicHookZh: '「這盤棋局(ván cờ)下得精彩，那人言行古怪尷尬真奇局(kỳ cục)！」',
    mnemonicHookEn: 'Playing a board of chess is ván cờ, behaving weirdly and awkward is kỳ cục!',
    pitfallAlertZh: '如果同事對你說「Hành động của anh thật kỳ cục!」，千萬不要以為他在稱讚你「下了一盤奇妙的棋局」，他其實是在嚴肅抗議：「你的舉動真讓人尷尬/莫名其妙！」',
    hanVietInsightZh: 'kỳ 源於「奇」（奇特、離奇），cục 源於「局」（局面）；合在一起原指「離奇之局面」，後來演變為口語中指責事情古怪或尷尬的常用詞。',
    masterSentence: 'Trong ván cờ hôm qua, anh ấy đã có một nước đi vô cùng kỳ cục.',
    masterSentenceZh: '在昨天的棋局(ván cờ)中，他走出了一記無比古怪莫名(kỳ cục)的著法。',
    masterSentenceEn: 'In yesterday\'s chess game, he made an extremely bizarre and awkward move.',
    drill: {
      questionZh: '在路上看見某人穿著泳裝走進辦公室開會，可以用哪個詞形容這種情況？',
      options: ['Thật lịch sự', 'Thật kỳ cục', 'Thật ván cờ', 'Thật tiến sĩ'],
      correctIndex: 1,
      explanationZh: '舉止荒謬、令人尷尬不合常理稱為「kỳ cục」。'
    }
  },
  {
    id: 'conf_false_05',
    type: 'hanviet_false_friends',
    categoryLabelZh: '⚡ 漢越假朋友',
    categoryLabelEn: 'Han-Viet False Friends',
    titleZh: 'Phương tiện (交通工具) vs Tiện lợi (方便便利)',
    titleEn: 'Phương tiện (transport vehicle/means) vs Tiện lợi (convenient)',
    summaryZh: '漢越字「方便」在越南語成了交通工具！真正的方便是「Tiện lợi」！',
    summaryEn: 'Phương tiện means transport vehicle, NOT convenient! Convenient is Tiện lợi!',
    words: [
      {
        viet: 'Phương tiện',
        ipa: '[fɨəŋ tiən˨˩ˀ]',
        tone: 'ngang-nang',
        toneSymbol: '漢越字面：方便',
        toneNameZh: '字面「方便」❌',
        pitch: '44-21',
        zh: '交通工具 / 手段媒介 (如 phương tiện giao thông)',
        en: 'Vehicle / Mode of transport / Means',
        hanViet: '方便 (Phương tiện · 佛教借詞轉化為手段交通)',
        tag: '交通與工具'
      },
      {
        viet: 'Tiện lợi',
        ipa: '[tiən˨˩ˀ ləːj˨˩ˀ]',
        tone: 'nang-nang',
        toneSymbol: '漢越字面：便利',
        toneNameZh: '字面「便利」✅',
        pitch: '21-21',
        zh: '方便 / 便利 / 省時好用 (如 cửa hàng tiện lợi 便利商店)',
        en: 'Convenient / Handy',
        hanViet: '便利 (Tiện lợi · 漢越詞)',
        tag: '生活機能'
      }
    ],
    mnemonicHookZh: '「騎上機車當代步手段(phương tiện)，去趟便利商店真方便(tiện lợi)！」',
    mnemonicHookEn: 'Motorbike is your transport means (phương tiện), 24h store is so convenient (tiện lợi)!',
    pitfallAlertZh: '如果問越南人「Bây giờ bạn có phương tiện không?」，他會以為你在問「你現在有帶交通工具（摩托車/汽車）嗎？」，而不是「你現在方便說話嗎？（Bây giờ bạn có tiện nói chuyện không?）」！',
    hanVietInsightZh: '佛經中「方便法門」的「方便」指引導眾生的媒介與手段，越南語吸納了這個古意，將「phương tiện」現代化轉譯為交通代步手段。',
    masterSentence: 'Xe máy là phương tiện giao thông tiện lợi nhất trên đường phố Việt Nam.',
    masterSentenceZh: '摩托車是越南街頭最方便便利(tiện lợi)的交通工具(phương tiện giao thông)。',
    masterSentenceEn: 'The motorbike is the most convenient mode of transportation on Vietnamese streets.',
    drill: {
      questionZh: '在越南想去 7-Eleven 或 Circle K 便利商店，越語標牌寫的是：',
      options: ['Cửa hàng phương tiện', 'Cửa hàng tiện lợi', 'Cửa hàng lịch sự', 'Cửa hàng kỳ cục'],
      correctIndex: 1,
      explanationZh: '便利商店對應漢越詞「便利」，為「Cửa hàng tiện lợi」。'
    }
  },

  // ─────────────────────────────────────────────────────────────
  // PILLAR 5: 近義詞情境微差組 (Contextual Synonyms & Nuance)
  // ─────────────────────────────────────────────────────────────
  {
    id: 'conf_syn_01',
    type: 'synonym_nuances',
    categoryLabelZh: '💡 近義詞情境微差',
    categoryLabelEn: 'Pragmatic Synonyms',
    titleZh: '「看」的四重境界：xem / nhìn / thấy / gặp',
    titleEn: 'Four nuances of "look/see": xem / nhìn / thấy / gặp',
    summaryZh: '中文都叫「看」，越語用法分明：觀賞影視、凝視注目、看到結果、還是會面遇見？',
    summaryEn: 'Watch for fun (xem), gaze at (nhìn), perceive visually (thấy), or meet someone (gặp)!',
    words: [
      {
        viet: 'xem',
        ipa: '[sɛm]',
        tone: 'ngang',
        toneSymbol: '平聲',
        toneNameZh: '欣賞觀看',
        pitch: '44',
        zh: '看 (觀賞電影、看電視、看表演、看菜單)',
        en: 'Watch / View (movie, show, menu)',
        hanViet: '',
        tag: '娛樂與閱讀'
      },
      {
        viet: 'nhìn',
        ipa: '[ɲiŋ˨˩]',
        tone: 'huyen',
        toneSymbol: '玄聲',
        toneNameZh: '注目凝視',
        pitch: '31',
        zh: '注視 / 凝視 / 往某方向看 (眼球動作)',
        en: 'Look at / Gaze / Stare toward',
        hanViet: '',
        tag: '視覺動作定向'
      },
      {
        viet: 'thấy',
        ipa: '[tʰəj˦˥]',
        tone: 'sac',
        toneSymbol: '銳聲',
        toneNameZh: '看見感知結果',
        pitch: '35',
        zh: '看見 (動作結果) / 覺得感到 (如 cảm thấy 覺得)',
        en: 'See (result) / Notice / Feel',
        hanViet: '',
        tag: '感知結果'
      },
      {
        viet: 'gặp',
        ipa: '[ɣap˨˩ˀ]',
        tone: 'nang',
        toneSymbol: '重聲',
        toneNameZh: '碰面遇見',
        pitch: '21',
        zh: '遇見 / 碰面 / 會面 (人與人交互)',
        en: 'Meet / Encounter someone',
        hanViet: '',
        tag: '社交會面'
      }
    ],
    mnemonicHookZh: '「欣賞電影用 xem 觀，轉動眼球 nhìn 注視，發現看見 thấy 結果，碰面打招呼要 gặp！」',
    mnemonicHookEn: 'Xem a show, nhìn in a direction, thấy the outcome, gặp a friend!',
    pitfallAlertZh: '看電影要說「xem phim」，不能說「nhìn phim」或「thấy phim」；向某人問「你有看見我的鑰匙嗎？」要用「Có thấy chìa khóa không?」，不能用 xem！',
    hanVietInsightZh: 'thấy 常與漢越詞 cảm (感) 組成「cảm thấy (覺得/感到)」，表示主觀視覺或心理感知。',
    masterSentence: 'Khi đang xem phim rạp, tôi nhìn sang và thấy bạn tôi đến gặp giám đốc.',
    masterSentenceZh: '當在看(xem)院線電影時，我轉頭凝視(nhìn)並看見(thấy)我的朋友來會面(gặp)總經理。',
    masterSentenceEn: 'While watching a cinema movie, I looked over and saw my friend meeting the director.',
    drill: {
      questionZh: '晚上跟朋友約在電影院看最新大片，應該說：',
      options: ['Đi nhìn phim', 'Đi xem phim', 'Đi gặp phim', 'Đi thấy phim'],
      correctIndex: 1,
      explanationZh: '觀賞電影、表演使用「xem」，故為「Đi xem phim」。'
    }
  },
  {
    id: 'conf_syn_02',
    type: 'synonym_nuances',
    categoryLabelZh: '💡 近義詞情境微差',
    categoryLabelEn: 'Pragmatic Synonyms',
    titleZh: '「想」的三重微差：nghĩ / nhớ / muốn',
    titleEn: 'Three nuances of "think/miss/want": nghĩ / nhớ / muốn',
    summaryZh: '中文都說「我想...」：大腦理性思考、思念牽掛、還是主觀慾望想要？',
    summaryEn: 'Rational thinking (nghĩ), emotional missing/remembering (nhớ), or eager wanting (muốn)!',
    words: [
      {
        viet: 'nghĩ',
        ipa: '[ŋiˀ˦˥]',
        tone: 'nga',
        toneSymbol: '跌聲 (~)',
        toneNameZh: '大腦思考推敲',
        pitch: '35 (喉塞)',
        zh: '思考 / 認為 / 琢磨 (理性認知思考)',
        en: 'Think / Believe / Consider rationally',
        hanViet: '擬 / 議 (Nghĩ · 漢越詞)',
        tag: '大腦邏輯'
      },
      {
        viet: 'nhớ',
        ipa: '[ɲəː˦˥]',
        tone: 'sac',
        toneSymbol: '銳聲 (´)',
        toneNameZh: '情感牽掛思念',
        pitch: '35',
        zh: '想念 / 思念 / 記住 (感性記憶)',
        en: 'Miss someone / Remember / Recall',
        hanViet: '',
        tag: '情感與記憶'
      },
      {
        viet: 'muốn',
        ipa: '[muən˦˥]',
        tone: 'sac',
        toneSymbol: '銳聲 (´)',
        toneNameZh: '意欲打算',
        pitch: '35',
        zh: '想要 / 打算 / 希望 (慾望與意志)',
        en: 'Want / Desire to / Wish to',
        hanViet: '',
        tag: '企圖意志'
      }
    ],
    mnemonicHookZh: '「大腦琢磨思考 nghĩ，心頭牽掛思念 nhớ，意志堅定想要 muốn！」',
    mnemonicHookEn: 'Brain thinks deeply (nghĩ), heart misses sweetly (nhớ), will wants strongly (muốn)!',
    pitfallAlertZh: '跟越南女友/男友告白說「我想你」，一定要說「Anh nhớ em (我思念你)」，千萬不要說成「Anh nghĩ em」或「Anh muốn em」，後者語意會變成非常失禮的要求！',
    hanVietInsightZh: 'nghĩ 源自漢語「擬/議」；而 nhớ 是純越語，既能表達情感「想念」，也能表達大腦記憶「記住 (nhớ kỹ)」。',
    masterSentence: 'Tôi nghĩ rằng anh ấy rất muốn về quê vì đang nhớ gia đình da diết.',
    masterSentenceZh: '我認為(nghĩ)他非常想要(muốn)回鄉，因為他正在刻骨銘心地想念(nhớ)家人。',
    masterSentenceEn: 'I think that he really wants to return home because he misses his family dearly.',
    drill: {
      questionZh: '向久別的家人或朋友表達「我很想念你」，最地道的表達是：',
      options: ['Tôi nghĩ bạn lắm', 'Tôi nhớ bạn lắm', 'Tôi muốn bạn lắm', 'Tôi xem bạn lắm'],
      correctIndex: 1,
      explanationZh: '思念牽掛用「nhớ」，故「Tôi nhớ bạn lắm」意為「我好想你」。'
    }
  },
  {
    id: 'conf_syn_03',
    type: 'synonym_nuances',
    categoryLabelZh: '💡 近義詞情境微差',
    categoryLabelEn: 'Pragmatic Synonyms',
    titleZh: '「多少」的界限：bao nhiêu vs mấy',
    titleEn: 'Quantity threshold: bao nhiêu (>10 / price) vs mấy (<10 / time)',
    summaryZh: '問數量和價格的大學問：大於 10 或問價格用 bao nhiêu，小於 10 或幾點用 mấy！',
    summaryEn: 'Ask for price or large numbers (>10) with bao nhiêu; ask for small counts (<10) or clock time with mấy!',
    words: [
      {
        viet: 'bao nhiêu',
        ipa: '[ɓaːw ɲiəw]',
        tone: 'ngang-ngang',
        toneSymbol: '平聲雙音節',
        toneNameZh: '大數量或詢價',
        pitch: '44-44',
        zh: '多少 (數量預估 >10、詢問金錢價格通用)',
        en: 'How much / How many (>10 or prices)',
        hanViet: '',
        tag: '詢價與大數量'
      },
      {
        viet: 'mấy',
        ipa: '[məj˦˥]',
        tone: 'sac',
        toneSymbol: '銳聲單音節',
        toneNameZh: '小數量或時鐘鐘點',
        pitch: '35',
        zh: '幾 (數量預估 <10、幾點鐘、幾個人、幾月幾號)',
        en: 'How many (<10) / What time / Which',
        hanViet: '',
        tag: '鐘點與小計數'
      }
    ],
    mnemonicHookZh: '「買菜詢價問巨款是 bao nhiêu，數指頭算鐘點是 mấy！」',
    mnemonicHookEn: 'Bao nhiêu asks for price and big counts, mấy asks for clock time and single digits!',
    pitfallAlertZh: '問商品多少錢一定要用「Bao nhiêu tiền?」，不能問「Mấy tiền?」（極不自然！）。而問幾點鐘要用「Mấy giờ?」，很少人會問「Bao nhiêu giờ?」。',
    hanVietInsightZh: 'bao 是越語中詢問範疇的疑問詞綴，如 bao lâu (多久)、bao xa (多遠)。',
    masterSentence: 'Bây giờ là mấy giờ rồi, và tô phở đặc biệt này giá bao nhiêu tiền?',
    masterSentenceZh: '現在是幾點(mấy giờ)了，以及這碗招牌特別河粉價格是多少(bao nhiêu)錢？',
    masterSentenceEn: 'What time is it now, and how much does this special bowl of pho cost?',
    drill: {
      questionZh: '在市場買一件衣服，想問老闆「這件多少錢？」，正確問法為：',
      options: ['Cái này mấy tiền?', 'Cái này bao nhiêu tiền?', 'Cái này mấy giờ?', 'Cái này bao xa?'],
      correctIndex: 1,
      explanationZh: '詢問價格金錢一律使用「Bao nhiêu tiền?」。'
    }
  },
  {
    id: 'conf_syn_04',
    type: 'synonym_nuances',
    categoryLabelZh: '💡 近義詞情境微差',
    categoryLabelEn: 'Pragmatic Synonyms',
    titleZh: 'mua (買) vs bán (賣)',
    titleEn: 'mua (to buy) vs bán (to sell)',
    summaryZh: '商務談判生死線：平聲買進，銳聲賣出！',
    summaryEn: 'Business transaction core: flat tone buys (mua), high rising tone sells (bán)!',
    words: [
      {
        viet: 'mua',
        ipa: '[muə]',
        tone: 'ngang',
        toneSymbol: '無符號 (平聲)',
        toneNameZh: '平聲穩重不揚',
        pitch: '44',
        zh: '買 / 購買 (支出貨幣獲取商品)',
        en: 'To buy / Purchase',
        hanViet: '',
        tag: '買方採購'
      },
      {
        viet: 'bán',
        ipa: '[ɓaːn˦˥]',
        tone: 'sac',
        toneSymbol: '´ (銳聲)',
        toneNameZh: '高升銳聲衝刺',
        pitch: '35',
        zh: '賣 / 銷售 (售出商品換取貨幣)',
        en: 'To sell / Vend',
        hanViet: '販 (Bán · 漢越詞)',
        tag: '賣方經商'
      }
    ],
    mnemonicHookZh: '「平平穩穩買(mua)進來，高升利潤賣(bán)出去！」',
    mnemonicHookEn: 'Smooth level tone buys in (mua), sharp rising tone sells high (bán)!',
    pitfallAlertZh: '中文裡「買 (3聲降升)」與「賣 (4聲全降)」，而越語中「mua (平聲)」是買，「bán (銳聲向上)」是賣。在簽訂商業合同或菜市場談判時，切記平聲是買方，銳聲是賣方！',
    hanVietInsightZh: 'buôn bán (經商做生意) 將純越語 buôn 與漢越詞 bán (販) 結合，代表商務活動。',
    masterSentence: 'Doanh nhân thông minh luôn biết mua vào giá thấp và bán ra giá cao.',
    masterSentenceZh: '聰明的商人總是知道在低價時買入(mua vào)，在高價時賣出(bán ra)。',
    masterSentenceEn: 'Smart entrepreneurs always know to buy low and sell high.',
    drill: {
      questionZh: '房仲問客戶「您是想要買這間公寓，還是要賣？」，空格處應填入：',
      options: ['Anh muốn mua hay muốn bán?', 'Anh muốn bán hay muốn bán?', 'Anh muốn mưa hay muốn bạn?', 'Anh muốn mùa hay muốn ban?'],
      correctIndex: 0,
      explanationZh: '「買或賣」即為「mua (平聲) hay muốn bán (銳聲)」。'
    }
  }
];

export const CONFUSABLE_STATS = {
  totalPairs: CONFUSABLE_PAIRS.length,
  categoryCounts: {
    all: CONFUSABLE_PAIRS.length,
    tone_pairs: CONFUSABLE_PAIRS.filter(p => p.type === 'tone_pairs').length,
    vowel_contrasts: CONFUSABLE_PAIRS.filter(p => p.type === 'vowel_contrasts').length,
    consonant_contrasts: CONFUSABLE_PAIRS.filter(p => p.type === 'consonant_contrasts').length,
    hanviet_false_friends: CONFUSABLE_PAIRS.filter(p => p.type === 'hanviet_false_friends').length,
    synonym_nuances: CONFUSABLE_PAIRS.filter(p => p.type === 'synonym_nuances').length
  }
};
