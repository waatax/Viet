/**
 * Quick Bilingual Learning & Audio Data Hub (快速雙語聽讀與音訊下載核心數據庫)
 * Tailored specifically for Chinese native speakers (中文母語者) learning Vietnamese.
 *
 * All entries are verified to correspond with pre-rendered studio recordings in
 * audioManifest.json and audioManifestZh.json, guaranteeing zero-latency audio playback
 * and instant offline dual-track MP3/WAV download.
 */

// ── 1. 生活核心單字 (越+中) ──────────────────────────────────
export const QUICK_VOCABULARY_CATEGORIES = [
  {
    id: 'dining',
    name: '飲食餐飲',
    icon: '🍽️',
    desc: '越南必吃美食、咖啡客製與結帳必備詞',
    words: [
      {
        id: 'qv_cafe',
        viet: 'Cà phê',
        zh: '咖啡',
        ipa: '[kaː˨˩ fe˧˧]',
        tone: 'Huyền + Ngang',
        hanViet: '咖啡 (法語 Café 音譯)',
        memoryTip: '越語修飾語後置！黑咖啡是 cà phê đen，冰奶咖啡是 cà phê sữa đá。'
      },
      {
        id: 'qv_pho',
        viet: 'Phở',
        zh: '河粉',
        ipa: '[fəː˧˩˧]',
        tone: 'Hỏi (問聲)',
        hanViet: '粉 (粵語「河粉」借詞)',
        memoryTip: '問聲要先降後升。牛肉河粉是 phở bò，雞肉河粉是 phở gà。'
      },
      {
        id: 'qv_banhmi',
        viet: 'Bánh mì',
        zh: '法國麵包',
        ipa: '[ɓajŋ̟˧˦ mi˨˩]',
        tone: 'Sắc + Huyền',
        hanViet: '餅麵 (Bánh 源自「餅」，mì 源自「麵」)',
        memoryTip: '滿街可見的夾肉法棍。Bánh 在越語指所有糕餅麵點。'
      },
      {
        id: 'qv_sugar',
        viet: 'Đường',
        zh: '糖',
        ipa: '[ɗɨəŋ˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '糖 (同音詞還有「路」)',
        memoryTip: 'ít đường 是少糖，không đường 是無糖。'
      },
      {
        id: 'qv_ice',
        viet: 'Đá',
        zh: '冰',
        ipa: '[ɗaː˧˦]',
        tone: 'Sắc (銳聲)',
        hanViet: '石 (原指冰塊如石頭)',
        memoryTip: 'ít đá 是少冰，không đá 是去冰。'
      },
      {
        id: 'qv_bill',
        viet: 'Tính tiền',
        zh: '結帳 / 算錢',
        ipa: '[tiɲ˧˦ tiəŋ˨˩]',
        tone: 'Sắc + Huyền',
        hanViet: '算錢',
        memoryTip: '吃飽招手萬用句：「Em ơi, tính tiền!」（服務員，買單！）'
      },
      {
        id: 'qv_tea',
        viet: 'Trà',
        zh: '茶',
        ipa: '[tɕaː˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '茶 (中古音 dæ)',
        memoryTip: '南部發像 chà，路邊冰茶叫 trà đá，通常免費或極便宜。'
      },
      {
        id: 'qv_menu',
        viet: 'Thực đơn',
        zh: '菜單',
        ipa: '[tʰɨk̚˨˩˨ ɗəːn˧˧]',
        tone: 'Nặng + Ngang',
        hanViet: '食單',
        memoryTip: '食單＝菜單，南部口語也直接說 menu。'
      }
    ]
  },
  {
    id: 'traffic',
    name: '交通出行',
    icon: '🛵',
    desc: '搭車、叫 Grab、問路與方向導航必背詞',
    words: [
      {
        id: 'qv_moto',
        viet: 'Xe máy',
        zh: '機車',
        ipa: '[sɛ˧˧ maːj˧˦]',
        tone: 'Ngang + Sắc',
        hanViet: '車機 (車＋機器)',
        memoryTip: '越南的機車王國代名詞。Grab 機車叫 GrabBike。'
      },
      {
        id: 'qv_bus',
        viet: 'Xe buýt',
        zh: '公車',
        ipa: '[sɛ˧˧ ɓwit̚˧˦]',
        tone: 'Ngang + Sắc',
        hanViet: '車 Bus (法語音譯)',
        memoryTip: '市區公車站牌會寫 Trạm xe buýt。'
      },
      {
        id: 'qv_airport',
        viet: 'Sân bay',
        zh: '機場',
        ipa: '[ʂən˧˧ ɓaːj˧˧]',
        tone: 'Ngang + Ngang',
        hanViet: '場飛 (場地＋飛行)',
        memoryTip: 'Sân（場）+ bay（飛）＝飛機場。胡志明機場是 Sân bay Tân Sơn Nhất。'
      },
      {
        id: 'qv_station',
        viet: 'Nhà ga',
        zh: '車站',
        ipa: '[ɲaː˨˩ ɣaː˧˧]',
        tone: 'Huyền + Ngang',
        hanViet: '家 Gare (Gare 源自法語火車站)',
        memoryTip: 'Nhà（屋/舍）+ ga（站）＝火車站或客運總站。'
      },
      {
        id: 'qv_right',
        viet: 'Rẽ phải',
        zh: '右轉',
        ipa: '[rɛ˧˩˧ faːj˧˩˧]',
        tone: 'Hỏi + Hỏi',
        hanViet: '轉右 (純越語)',
        memoryTip: 'phải 是右邊也是「必須」；rẽ trái 是左轉，đi thẳng 是直走。'
      },
      {
        id: 'qv_go',
        viet: 'Đi',
        zh: '去 / 走',
        ipa: '[ɗi˧˧]',
        tone: 'Ngang (平聲)',
        hanViet: '去 / 行',
        memoryTip: 'đi đâu（去哪裡？），đi chơi（出去玩），đi làm（去上班）。'
      },
      {
        id: 'qv_arrive',
        viet: 'Đến',
        zh: '到 / 抵達',
        ipa: '[ɗeŋ˧˦]',
        tone: 'Sắc (銳聲)',
        hanViet: '到',
        memoryTip: 'Tôi đến từ Đài Loan（我來自台灣）。'
      },
      {
        id: 'qv_return',
        viet: 'Về',
        zh: '回 / 返回',
        ipa: '[ve˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '回',
        memoryTip: 'về nhà 是回家，về nước 是回國。'
      }
    ]
  },
  {
    id: 'money',
    name: '數字金錢',
    icon: '💰',
    desc: '逛街購物、換匯換算與殺價談判',
    words: [
      {
        id: 'qv_money',
        viet: 'Tiền',
        zh: '錢',
        ipa: '[tiəŋ˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '錢 (中古音 dzen)',
        memoryTip: 'Bao nhiêu tiền?（多少錢？），tiền mặt 是現金。'
      },
      {
        id: 'qv_dong',
        viet: 'Đồng',
        zh: '越南盾 / 塊錢',
        ipa: '[ɗoŋ˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '銅 (源自古代銅錢)',
        memoryTip: '越南官方貨幣單位 VND，口語直接稱 đồng。'
      },
      {
        id: 'qv_thousand',
        viet: 'Nghìn',
        zh: '千',
        ipa: '[ŋiŋ˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '千 (南部稱 ngàn)',
        memoryTip: '50 nghìn 是五萬盾（約台幣 65 元）。注意千位標點在越南用點號（50.000）。'
      },
      {
        id: 'qv_million',
        viet: 'Triệu',
        zh: '百萬',
        ipa: '[tɕiəw˨˩˨]',
        tone: 'Nặng (重聲)',
        hanViet: '兆 (在越語固定指 1,000,000 百萬)',
        memoryTip: '一百萬盾約等於新台幣 1,300 元。'
      },
      {
        id: 'qv_expensive',
        viet: 'Đắt',
        zh: '貴',
        ipa: '[ɗat̚˧˦]',
        tone: 'Sắc (入聲銳調)',
        hanViet: '貴 (南部稱 mắc)',
        memoryTip: 'Đắt quá!（太貴了！南部說 Mắc quá!）'
      },
      {
        id: 'qv_cheap',
        viet: 'Rẻ',
        zh: '便宜',
        ipa: '[rɛ˧˩˧]',
        tone: 'Hỏi (問聲)',
        hanViet: '賤 / 宜',
        memoryTip: 'Rẻ quá!（好便宜！）'
      },
      {
        id: 'qv_discount',
        viet: 'Bớt',
        zh: '便宜一點 / 少算一點',
        ipa: '[ɓəːt̚˧˦]',
        tone: 'Sắc (入聲銳調)',
        hanViet: '減 / 拔',
        memoryTip: 'Bớt chút đi!（算便宜一點嘛！殺價必備）。'
      },
      {
        id: 'qv_transfer',
        viet: 'Chuyển khoản',
        zh: '轉帳',
        ipa: '[tɕwiəŋ˧˩˧ kʰwaːn˧˩˧]',
        tone: 'Hỏi + Hỏi',
        hanViet: '轉款',
        memoryTip: '越南 QR Code 轉帳極度盛行，買路邊攤也能 chuyển khoản。'
      }
    ]
  },
  {
    id: 'time',
    name: '時間日程',
    icon: '⏰',
    desc: '預約約會、時間表達與星期曆法',
    words: [
      {
        id: 'qv_today',
        viet: 'Hôm nay',
        zh: '今天',
        ipa: '[hom˧˧ naːj˧˧]',
        tone: 'Ngang + Ngang',
        hanViet: '今日',
        memoryTip: 'hôm 是日/天，nay 是這。'
      },
      {
        id: 'qv_yesterday',
        viet: 'Hôm qua',
        zh: '昨天',
        ipa: '[hom˧˧ kwaː˧˧]',
        tone: 'Ngang + Ngang',
        hanViet: '過去之日',
        memoryTip: 'qua 是過去/穿過。'
      },
      {
        id: 'qv_tomorrow',
        viet: 'Ngày mai',
        zh: '明天',
        ipa: '[ŋaːj˨˩ maːj˧˧]',
        tone: 'Huyền + Ngang',
        hanViet: '明日',
        memoryTip: 'mai 是明日。Hẹn ngày mai!（明天見！）'
      },
      {
        id: 'qv_now',
        viet: 'Bây giờ',
        zh: '現在',
        ipa: '[ɓəj˧˧ zəː˨˩]',
        tone: 'Ngang + Huyền',
        hanViet: '現在之時',
        memoryTip: 'Bây giờ là mấy giờ?（現在幾點？）'
      },
      {
        id: 'qv_weekend',
        viet: 'Cuối tuần',
        zh: '週末',
        ipa: '[kuəj˧˦ twən˨˩]',
        tone: 'Sắc + Huyền',
        hanViet: '末週 (cuối＝末，tuần＝週)',
        memoryTip: 'Cuối tuần này bạn rảnh không?（這週末你有空嗎？）'
      },
      {
        id: 'qv_monday',
        viet: 'Thứ hai',
        zh: '星期一',
        ipa: '[tʰɨ˧˦ haːj˧˧]',
        tone: 'Sắc + Ngang',
        hanViet: '第二日',
        memoryTip: '⚠️ 陷阱！越語星期是從 thứ hai（星期一）開始數，不是星期二！'
      },
      {
        id: 'qv_friday',
        viet: 'Thứ sáu',
        zh: '星期五',
        ipa: '[tʰɨ˧˦ saːw˧˦]',
        tone: 'Sắc + Sắc',
        hanViet: '第六日',
        memoryTip: '⚠️ 陷阱！thứ sáu 是星期五，不是星期六！'
      },
      {
        id: 'qv_hour',
        viet: 'Giờ',
        zh: '小時 / 點鐘',
        ipa: '[zəː˨˩]',
        tone: 'Huyền (玄聲)',
        hanViet: '時 (中古音 zí)',
        memoryTip: 'Mấy giờ?（幾點？），hai giờ（兩點）。'
      }
    ]
  }
];

// ── 2. 生活情境會話 (越+中) ──────────────────────────────────
export const QUICK_CONVERSATION_TOPICS = [
  {
    id: 'talk_coffee',
    title: '咖啡廳點特調冰奶咖啡',
    icon: '☕',
    location: '胡志明市第一郡特色咖啡館',
    goal: '客製甜度冰塊並選擇外帶',
    dialogue: [
      {
        speaker: 'A',
        role: '顧客 (Bạn)',
        viet: 'Cho tôi một ly cà phê sữa đá.',
        zh: '請給我一杯冰奶咖啡。',
        tip: 'Cho tôi 是禮貌點餐開頭，意思如同「給我…」。'
      },
      {
        speaker: 'B',
        role: '店員 (Em)',
        viet: 'Bạn muốn ít đường hay ngọt bình thường?',
        zh: '您想要少糖還是正常甜？',
        tip: 'bình thường 是漢越詞「平常」，意思是正常標準。'
      },
      {
        speaker: 'A',
        role: '顧客 (Bạn)',
        viet: 'Ít đường, ít đá nhé.',
        zh: '少糖、少冰，謝謝。',
        tip: '句尾加上 nhé 語氣輕快親切。'
      },
      {
        speaker: 'B',
        role: '店員 (Em)',
        viet: 'Bạn uống ở đây hay mang đi?',
        zh: '您要在這裡喝還是外帶？',
        tip: 'mang đi 是「帶走/外帶」，uống ở đây 是「在此喝」。'
      },
      {
        speaker: 'A',
        role: '顧客 (Bạn)',
        viet: 'Cho tôi mang đi. Tính tiền luôn nhé.',
        zh: '我要外帶。順便結帳喔。',
        tip: 'luôn 表示「順便、一併完成」。'
      }
    ]
  },
  {
    id: 'talk_grab',
    title: '街頭叫 Grab 機車與認路',
    icon: '🛵',
    location: '河內還劍湖街角',
    goal: '確認司機車牌、核對目的地與下車地點',
    dialogue: [
      {
        speaker: 'B',
        role: '司機 (Tài xế)',
        viet: 'Chào bạn, bạn có phải là người đặt Grab không?',
        zh: '您好，請問是您叫的 Grab 嗎？',
        tip: 'có phải là … không 是最標準的確認是非問句。'
      },
      {
        speaker: 'A',
        role: '乘客 (Khách)',
        viet: 'Đúng rồi, biển số xe 29-B1 đúng không anh?',
        zh: '對的，車牌 29-B1 沒錯吧大哥？',
        tip: 'biển số xe 是車牌號碼。'
      },
      {
        speaker: 'B',
        role: '司機 (Tài xế)',
        viet: 'Đúng rồi, mời bạn đội mũ bảo hiểm.',
        zh: '沒錯，請您戴上安全帽。',
        tip: 'mũ bảo hiểm (帽保險) ＝ 安全帽，不戴在越南會被警察開罰。'
      },
      {
        speaker: 'A',
        role: '乘客 (Khách)',
        viet: 'Anh ơi, cho em xuống ở đây nhé.',
        zh: '大哥，讓我在這裡下車就可以了。',
        tip: 'cho em xuống 是搭計程車或公車的標準下車句。'
      },
      {
        speaker: 'B',
        role: '司機 (Tài xế)',
        viet: 'Được rồi, cảm ơn bạn nhiều nhé.',
        zh: '好的，非常謝謝您。'
      }
    ]
  },
  {
    id: 'talk_bargain',
    title: '傳統市場殺價實戰',
    icon: '🏷️',
    location: '濱城市場紀念品攤位',
    goal: '詢問價錢、有禮貌地爭取折扣並完成付款',
    dialogue: [
      {
        speaker: 'A',
        role: '顧客 (Khách)',
        viet: 'Cái này bao nhiêu tiền vậy chị?',
        zh: '大姐，這個多少錢呢？',
        tip: '稱呼女老闆 chị (大姐) 顯得親切有禮貌。'
      },
      {
        speaker: 'B',
        role: '老闆 (Chị bán hàng)',
        viet: 'Hai trăm nghìn đồng một cái em ơi.',
        zh: '一個二十萬盾（約台幣 260 元）喔。',
        tip: 'Hai trăm nghìn ＝ 200 × 1,000 ＝ 200,000 VND。'
      },
      {
        speaker: 'A',
        role: '顧客 (Khách)',
        viet: 'Đắt quá, bớt chút đi chị! Một trăm rưỡi được không?',
        zh: '太貴了啦，算便宜一點嘛大姐！十五萬可以嗎？',
        tip: 'Một trăm rưỡi 是口語「一百五十（千）」，即 150,000 盾。'
      },
      {
        speaker: 'B',
        role: '老闆 (Chị bán hàng)',
        viet: 'Thôi được, bán mở hàng cho em đấy.',
        zh: '好吧，算開市第一單便宜賣你啦。',
        tip: 'mở hàng 是開市衝喜氣。'
      },
      {
        speaker: 'A',
        role: '顧客 (Khách)',
        viet: 'Cảm ơn chị! Em gửi tiền mặt nhé.',
        zh: '謝謝大姐！我給您現金喔。',
        tip: 'tiền mặt ＝ 現金。'
      }
    ]
  },
  {
    id: 'talk_hotel',
    title: '飯店櫃檯入住與詢問',
    icon: '🏨',
    location: '峴港海邊度假飯店',
    goal: '辦理 Check-in、出示護照與詢問早餐及 Wifi',
    dialogue: [
      {
        speaker: 'B',
        role: '櫃檯 (Lễ tân)',
        viet: 'Xin chào, quý khách muốn nhận phòng phải không ạ?',
        zh: '您好，請問貴賓是要辦理入住嗎？',
        tip: 'quý khách (貴客) 是飯店與商務尊稱；nhận phòng ＝ 領房/入住。'
      },
      {
        speaker: 'A',
        role: '住客 (Khách)',
        viet: 'Tôi đã đặt một phòng cho hai người.',
        zh: '我已經預訂了一間雙人房。',
        tip: 'đã đặt ＝ 已經預訂。'
      },
      {
        speaker: 'B',
        role: '櫃檯 (Lễ tân)',
        viet: 'Cho tôi xin hộ chiếu của bạn để làm thủ tục.',
        zh: '請給我您的護照以便辦理手續。',
        tip: 'hộ chiếu (護照)，thủ tục (手續) 均為高頻漢越詞。'
      },
      {
        speaker: 'A',
        role: '住客 (Khách)',
        viet: 'Hộ chiếu đây ạ. Mật khẩu wifi là gì vậy?',
        zh: '護照在這裡。請問 Wifi 密碼是什麼呢？',
        tip: 'mật khẩu (密碼)。'
      },
      {
        speaker: 'B',
        role: '櫃檯 (Lễ tân)',
        viet: 'Đây là chìa khóa phòng. Chúc bạn kỳ nghỉ vui vẻ!',
        zh: '這是房間鑰匙。祝您假期愉快！',
        tip: 'chìa khóa ＝ 鑰匙。'
      }
    ]
  }
];

// ── 3. 中越近似單字 (越+中) ──────────────────────────────────
export const QUICK_COGNATES_DATA = [
  {
    id: 'cog_roots',
    title: '核心漢越同源字根庫 (Cognate Roots)',
    icon: '🏛️',
    desc: '中古漢語借詞，台語、客家話與華語母語者聽音就能秒懂',
    items: [
      {
        han: '國 (Guó)',
        vietRoot: 'Quốc',
        meaningZh: '國家、疆界',
        soundRuleZh: '中古入聲 -k 尾對應越語 -c 尾 (Quốc)。',
        pairs: [
          { viet: 'Quốc gia', zh: '國家', note: '完全同義' },
          { viet: 'Quốc tế', zh: '國際', note: '商務高頻' },
          { viet: 'Quốc tịch', zh: '國籍', note: '入境表格填寫' },
          { viet: 'Quốc hội', zh: '國會', note: '政治法律' }
        ]
      },
      {
        han: '心 (Xīn)',
        vietRoot: 'Tâm',
        meaningZh: '心臟、心思、核心',
        soundRuleZh: '清聲母陰平對應平聲 (Tâm，台語 sim 同源)。',
        pairs: [
          { viet: 'Trung tâm', zh: '中心', note: '商業中心、市中心' },
          { viet: 'An tâm', zh: '安心', note: '放心、別擔心' },
          { viet: 'Quan tâm', zh: '關心', note: '重視、照顧' },
          { viet: 'Tâm lý', zh: '心理', note: '心理學、心態' }
        ]
      },
      {
        han: '安 (Ān)',
        vietRoot: 'An',
        meaningZh: '平靜、穩當、免除危險',
        soundRuleZh: '零聲母陰平對應平聲 (An)。',
        pairs: [
          { viet: 'An toàn', zh: '安全', note: '工廠與交通標語' },
          { viet: 'Bình an', zh: '平安', note: '祝福用語' },
          { viet: 'An ninh', zh: '安寧 / 治安', note: '機場安檢' },
          { viet: 'Bất an', zh: '不安', note: '焦慮恐懼' }
        ]
      },
      {
        han: '學 (Xué)',
        vietRoot: 'Học',
        meaningZh: '學習、學術、院校',
        soundRuleZh: '入聲 -k 對應 -c 尾重聲 (Học)。',
        pairs: [
          { viet: 'Học sinh', zh: '學生', note: '專指中小學學生' },
          { viet: 'Đại học', zh: '大學', note: '高等學府' },
          { viet: 'Khoa học', zh: '科學', note: '科技科研' },
          { viet: 'Học phí', zh: '學費', note: '教育支出' }
        ]
      },
      {
        han: '經 (Jīng)',
        vietRoot: 'Kinh',
        meaningZh: '經理、治理、歷驗',
        soundRuleZh: '見母陰平對應 k 聲母平聲 (Kinh)。',
        pairs: [
          { viet: 'Kinh tế', zh: '經濟', note: '商業與總經核心' },
          { viet: 'Kinh nghiệm', zh: '經驗', note: '求職與職場履歷' },
          { viet: 'Kinh doanh', zh: '經營 / 商業', note: '做生意' },
          { viet: 'Kinh điển', zh: '經典', note: '代表作' }
        ]
      },
      {
        han: '準 (Zhǔn)',
        vietRoot: 'Chuẩn',
        meaningZh: '標準、預備、準確',
        soundRuleZh: '章母上聲對應問聲 (Chuẩn)。',
        pairs: [
          { viet: 'Chuẩn bị', zh: '準備', note: '行動就緒' },
          { viet: 'Tiêu chuẩn', zh: '標準', note: '品管規格' },
          { viet: 'Chính chuẩn', zh: '精準 / 正確', note: '準確無誤' }
        ]
      }
    ]
  },
  {
    id: 'cog_falsefriends',
    title: '漢越假朋友必避地雷 (False Friends Traps)',
    icon: '⚠️',
    desc: '看起來像中文，但現代越文意思完全不同，千萬不可直譯望文生義！',
    items: [
      {
        viet: 'Bác sĩ',
        hanLiteral: '博士',
        realMeaningZh: '醫生 (Medical Doctor)',
        trapWarningZh: '⚠️ 致命地雷！Bác sĩ 在現代越語專指「看診醫師」！真正的博士學位叫 Tiến sĩ (進士)。'
      },
      {
        viet: 'Sinh viên',
        hanLiteral: '生員',
        realMeaningZh: '大學生 (University Student)',
        trapWarningZh: '⚠️ 生員古代是秀才，現代越語專指「大專與大學生」。中小學生叫 Học sinh (學生)。'
      },
      {
        viet: 'Lịch sự',
        hanLiteral: '歷史 / 禮事',
        realMeaningZh: '禮貌、文雅、得體 (Polite)',
        trapWarningZh: '⚠️ 當越南人稱讚你「Rất lịch sự」是誇你很有禮貌修養！真正的「歷史」是問聲 Lịch sử。'
      },
      {
        viet: 'Khách sạn',
        hanLiteral: '客棧',
        realMeaningZh: '現代飯店 / 酒店 (Hotel)',
        trapWarningZh: '⚠️ 街上的 Khách sạn 是現代標準星級飯店，不是古代武俠客棧！平價民宿是 Nhà nghỉ。'
      },
      {
        viet: 'Khốn nạn',
        hanLiteral: '困難',
        realMeaningZh: '混蛋、惡劣、下流 (Bastard)',
        trapWarningZh: '⚠️ 超級核彈級地雷！絕對不能用「Khốn nạn」表示事情很難，這是嚴重的髒話！「困難」在越文是 Khó khăn。'
      },
      {
        viet: 'Cơ hội',
        hanLiteral: '機會 / 機遇',
        realMeaningZh: '商業機會 / 機遇 (Opportunity)',
        trapWarningZh: '⚠️ 詞序翻轉！越語偏好「機+會 (Cơ hội)」，合約中「Đây là cơ hội tốt」是「這是大好良機」。'
      }
    ]
  }
];

// ── 4. 遊戲化評量題目庫 (Gamified Quizzes) ────────────────────
export const QUICK_ASSESSMENT_QUESTIONS = [
  {
    id: 'quiz_1',
    category: '聽音辨義',
    promptVi: 'Tính tiền',
    questionZh: '聽到「Tính tiền」時，說話者的真正意圖是什麼？',
    optionsZh: [
      'A. 想要結帳、買單',
      'B. 想要借錢',
      'C. 抱怨太貴了',
      'D. 詢問營業時間'
    ],
    answer: 0,
    why: '正確！Tính tiền 源自漢字「算錢」，在越南餐廳、咖啡館或小吃攤是標準的結帳用語。'
  },
  {
    id: 'quiz_2',
    category: '中越近似詞',
    promptVi: 'Bác sĩ',
    questionZh: '在越南看到診所招牌寫著「Bác sĩ」，代表裡面是哪種專業人員？',
    optionsZh: [
      'A. 大學教授 / 博士生',
      'B. 看診醫師 (Doctor)',
      'C. 藥劑師',
      'D. 法律顧問'
    ],
    answer: 1,
    why: '正確！⚠️ 假朋友陷阱！Bác sĩ 源自漢字「博士」，但在現代越語中專指「醫生」；博士學位是「Tiến sĩ (進士)」。'
  },
  {
    id: 'quiz_3',
    category: '語音與聲調',
    promptVi: 'Đá vs Đắt',
    questionZh: '點飲料時說「ít đá」與買衣服時說「đắt quá」，其中「đá」與「đắt」的區別是？',
    optionsZh: [
      'A. đá 是少冰，đắt 是太貴',
      'B. đá 是太貴，đắt 是加冰',
      'C. 兩者發音完全相同',
      'D. đá 是熱的，đắt 是便宜'
    ],
    answer: 0,
    why: '正確！đá 是冰（長母音 a 開音節），đắt 是貴（短母音 ă 帶塞音尾 -t，短促銳聲）。'
  },
  {
    id: 'quiz_4',
    category: '假朋友地雷',
    promptVi: 'Khốn nạn',
    questionZh: '如果想表達工作「很困難」，千萬不能說成哪個詞？否則會變成罵人混蛋！',
    optionsZh: [
      'A. Khó khăn',
      'B. Khốn nạn',
      'C. Vất vả',
      'D. Phức tạp'
    ],
    answer: 1,
    why: '正確！⚠️ 超大禁忌！「Khốn nạn」字面看像困難，但現代越語意思是「卑劣、混蛋」；表達困難請用「Khó khăn」！'
  },
  {
    id: 'quiz_5',
    category: '時間陷阱',
    promptVi: 'Thứ sáu',
    questionZh: '越南朋友約你「Thứ sáu đi cà phê」，是指哪一天？',
    optionsZh: [
      'A. 星期六',
      'B. 星期五',
      'C. 星期四',
      'D. 六月六日'
    ],
    answer: 1,
    why: '正確！越語星期從 thứ hai (星期一) 開始數，因此 thứ sáu 是星期五，不要被中文的「六」誤導！'
  }
];
