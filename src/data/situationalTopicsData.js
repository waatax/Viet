/**
 * 7大核心深度情境教學數據庫 (Situational Topics Mastery Dataset)
 * 權威收錄：
 * 1. 商業見面問候 (Business Greetings & Corporate Networking)
 * 2. 餐廳話題 (Dining, Ordering, Customization & Utensils)
 * 3. 家庭話題 (Family, Kinship, Relatives & Marital Status)
 * 4. 健康話題 (Health, Symptoms, Pharmacy & Doctor Consultation)
 * 5. 日期、星期 (一到日)、月份與停留時間 (Dates, Weekdays, Months & Duration of Stay)
 * 6. 多少錢 常見說法 (Price Inquiries, Bargaining & Payments)
 * 7. 數字、量詞與大數讀法 (Numbers 0 to Billions, Classifiers & Currency Math)
 * 
 * 每個專題均配備：
 * - ⚡ 快速學習速查 (Quick Study Survival Guide & Formula Patterns)
 * - 📖 深度情境教研 (In-Depth Situational Lessons, Grammar & Regional Accents)
 * - 🗣️ 多輪雙角色會話 (Multi-Turn Dialogues with Dual-Role Audio)
 * - 🎴 專屬智慧複習閃卡庫 (Dedicated Topic Flashcard Decks)
 * - 🎯 實戰理解測驗題 (Interactive Mastery Quizzes)
 */

export const SITUATIONAL_TOPICS = [
  {
    id: 'business_greeting',
    titleZh: '商業見面問候',
    titleEn: 'Business Greetings & Networking',
    titleVi: 'Gặp Gỡ & Chào Hỏi Trong Kinh Doanh',
    icon: '🤝',
    badgeZh: '商務必備',
    badgeEn: 'Business Elite',
    color: '#3b82f6',
    summaryZh: '掌握越南商務拜訪、名片交換、尊稱禮儀、正式自我介紹與商務破冰金句。',
    summaryEn: 'Master formal introductions, business card exchange, corporate honorifics, and networking.',
    quickGuide: {
      taglineZh: '3秒鐘建立專業信任感與長輩好感度',
      survivalTable: [
        {
          viet: 'Dạ, em chào Giám đốc ạ!',
          zh: '總經理您好！(晚輩自稱 em，句首 Dạ，句尾 ạ)',
          en: 'Hello Director! (Very polite formal greeting)',
          pronunciation: '亞，恩 昭 匠 諾 阿',
          hanViet: 'Giám đốc (監督/經理) · Dạ/Ạ (敬語助詞)',
          category: '問候尊稱'
        },
        {
          viet: 'Rất hân hạnh được gặp anh.',
          zh: '非常榮幸見到您 (商務初次見面最高禮節)。',
          en: 'It is a great honor to meet you.',
          pronunciation: '熱 痕 行 諾 嘎 安',
          hanViet: 'Hân hạnh (欣幸/榮幸) · Gặp (見面)',
          category: '破冰金句'
        },
        {
          viet: 'Xin gửi anh danh thiếp của tôi.',
          zh: '請收下我的名片 (雙手奉上名片時說)。',
          en: 'Please accept my business card.',
          pronunciation: '心 個 安 央 提 誇 短',
          hanViet: 'Danh thiếp (名帖/名片) · Gửi (送/遞)',
          category: '交換名片'
        },
        {
          viet: 'Tôi là đại diện của công ty Đài Loan.',
          zh: '我是台灣公司的代表。',
          en: 'I am the representative of the Taiwanese company.',
          pronunciation: '短 辣 代 宴 誇 公 地 耐 鑾',
          hanViet: 'Đại diện (代表) · Công ty (公司) · Đài Loan (台灣)',
          category: '自我介紹'
        },
        {
          viet: 'Chúc công ty anh ngày càng phát triển!',
          zh: '祝貴公司蒸蒸日上、業務發展順利！',
          en: 'Wish your company continuous prosperity and growth!',
          pronunciation: '祝 公 地 安 該 港 法 剪',
          hanViet: 'Chúc (祝) · Phát triển (發展)',
          category: '祝福客套'
        },
        {
          viet: 'Rất mong có cơ hội hợp tác với anh.',
          zh: '非常期盼能有機會與您合作。',
          en: 'Looking forward to the opportunity to cooperate with you.',
          pronunciation: '熱 蒙 郭 哥 晦 合 打 味 安',
          hanViet: 'Cơ hội (機會) · Hợp tác (合作)',
          category: '合作致意'
        },
        {
          viet: 'Lần đầu tiên đến Việt Nam, mong anh giúp đỡ.',
          zh: '初次來到越南，請您多多指教與關照。',
          en: 'First time visiting Vietnam, please give us your guidance.',
          pronunciation: '冷 投 電 點 味 南，蒙 安 幼 諾',
          hanViet: 'Đầu tiên (首先/初次) · Giúp đỡ (幫助)',
          category: '謙遜破冰'
        },
        {
          viet: 'Xin lỗi, tôi có thể xin số Zalo của anh không?',
          zh: '不好意思，我可以加您的 Zalo 聯絡方式嗎？',
          en: 'Excuse me, may I have your Zalo number?',
          pronunciation: '心 類，短 郭 體 心 數 扎 漏 誇 安 空',
          hanViet: 'Số (數/號碼) · Zalo (越南國民通訊軟體)',
          category: '聯絡跟進'
        }
      ],
      sentencePatterns: [
        {
          pattern: 'Dạ, em là [Tên], đến từ [Công ty / Nơi chốn].',
          meaningZh: '您好，我是 [姓名]，來自 [公司/地方]。',
          example: 'Dạ, em là Minh, đến từ công ty Foxconn Đài Loan.',
          exampleZh: '您好，我是阿明，來自台灣富士康公司。'
        },
        {
          pattern: 'Rất vui được [Động từ] cùng với [Đại từ].',
          meaningZh: '很高興能與 [對方] 一同 [做某事]。',
          example: 'Rất vui được làm việc cùng với anh.',
          exampleZh: '很高興能與大哥您一同工作共事。'
        },
        {
          pattern: 'Xin hỏi, ai là người phụ trách về [Lĩnh vực] ạ?',
          meaningZh: '請問，誰是負責 [業務領域] 的負責人呢？',
          example: 'Xin hỏi, ai là người phụ trách về xuất nhập khẩu ạ?',
          exampleZh: '請問，誰是負責進出口業務的窗口呢？'
        }
      ],
      culturalDosAndDonts: {
        dos: '雙手遞交與接收名片；收到名片後務必認真閱讀對方的職稱與姓名，勿直接塞入口袋；句首常帶「Dạ」、句尾帶「ạ」表示高度教養。',
        donts: '切忌單手甩名片；商務場合避免在名片上直接用原子筆塗鴉；不要一見面就追問對方薪水或私事。',
        proTipZh: '💡 稱謂階級密碼：如果對方是總經理，稱呼「Chào Giám đốc」；如果不確定職稱，男士統稱「Anh」、女士統稱「Chị」，自稱「Em」，得體萬全！',
        proTipEn: '💡 Honorific Tip: Address general directors as "Giám đốc". When in doubt, address men as "Anh", women as "Chị", and refer to yourself as "Em".'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '敬語助詞「Dạ」與「Ạ」的黃金雙重奏',
          content: '在越南語商務溝通中，「Dạ」放在句子開頭，相當於中文「好的、是的、收到」；「Ạ」放在句子末尾，相當於日語的「です/ます」。兩者前後呼應（例：Dạ, em hiểu rồi ạ），能讓你的職場溝通好感度提升數倍。'
        },
        {
          title: '漢越名詞「Hợp tác (合作)」、「Cơ hội (機會)」的語序特點',
          content: '越語修飾語後置，但在商務漢越詞中保留了漢語的固定結構，例如「Cơ hội hợp tác」(合作機會)、「Đối tác kinh doanh」(商業夥伴)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Giám đốc', han: '監督', zh: '總經理 / 廠長' },
        { viet: 'Công ty', han: '公司', zh: '公司' },
        { viet: 'Hợp tác', han: '合作', zh: '合作' },
        { viet: 'Hợp đồng', han: '合同', zh: '合約 / 契約' },
        { viet: 'Danh thiếp', han: '名帖', zh: '名片' },
        { viet: 'Đại diện', han: '代表', zh: '代表 / 代理' },
        { viet: 'Khách hàng', han: '客行', zh: '客戶' }
      ],
      regionalDifferences: '北越商務場合用詞更講究正式公文漢越詞，如「Vâng, xin phép」；南越商業氛圍較輕鬆親切，普遍使用「Dạ, được rồi nha anh」；北越名片多稱「Danh thiếp」，南越口語常講「Card (Cạc)」或「Name card」。'
    },
    dialogues: [
      {
        id: 'dialogue_biz_1',
        titleZh: '初次商務拜訪與名片交換',
        titleEn: 'First Business Visit & Card Exchange',
        lines: [
          { speaker: 'A (Khách Đài Loan)', viet: 'Dạ, em chào Giám đốc Nam ạ! Rất hân hạnh được gặp anh.', zh: '南總經理您好！非常榮幸能拜會您。', en: 'Hello Director Nam! Great honor to meet you.' },
          { speaker: 'B (Giám đốc Nam)', viet: 'Chào anh Minh! Rất hoan nghênh anh đến thăm công ty chúng tôi.', zh: '明先生你好！非常歡迎您前來參觀我們公司。', en: 'Hello Mr. Minh! Welcome to visit our company.' },
          { speaker: 'A (Khách Đài Loan)', viet: 'Xin gửi anh danh thiếp của tôi. Tôi là quản lý dự án công nghệ mới.', zh: '請收下我的名片，我是新科技專案的專案經理。', en: 'Here is my business card. I am the project manager for new tech.' },
          { speaker: 'B (Giám đốc Nam)', viet: 'Cảm ơn anh. Đây là danh thiếp của tôi. Mời anh vào phòng họp uống trà nhé!', zh: '謝謝您，這是我的名片。請進會議室喝茶坐坐！', en: 'Thank you. Here is my card. Please come into the meeting room for tea!' },
          { speaker: 'A (Khách Đài Loan)', viet: 'Dạ vâng ạ, cảm ơn anh nhiều!', zh: '好的，非常感謝大哥！', en: 'Yes, thank you very much!' }
        ]
      },
      {
        id: 'dialogue_biz_2',
        titleZh: '會議結尾與後續跟進相約',
        titleEn: 'Meeting Wrap-Up & Follow-Up Agreement',
        lines: [
          { speaker: 'A (Khách Đài Loan)', viet: 'Cuộc họp hôm nay rất hiệu quả, cảm ơn anh Nam đã dành thời gian.', zh: '今天的會議非常有成效，感謝南總抽空接待。', en: 'Today\'s meeting was very productive, thank you for your time Mr. Nam.' },
          { speaker: 'B (Giám đốc Nam)', viet: 'Tôi cũng rất kỳ vọng vào dự án này. Sang tuần tôi sẽ gửi báo giá chi tiết.', zh: '我也對這個專案充滿期待。下週我會發送詳細報價單。', en: 'I am also looking forward to this project. Next week I will send the detailed quotation.' },
          { speaker: 'A (Khách Đài Loan)', viet: 'Dạ tuyệt quá, em có thể kết bạn Zalo của anh để tiện trao đổi không ạ?', zh: '太棒了，我可以加您的 Zalo 好友方便後續溝通嗎？', en: 'Wonderful, may I connect with you on Zalo for easy communication?' },
          { speaker: 'B (Giám đốc Nam)', viet: 'Được chứ! Số Zalo của tôi là số điện thoại trên danh thiếp nhé.', zh: '當然可以！我的 Zalo 就是名片上的電話號碼喔。', en: 'Of course! My Zalo is the phone number on my business card.' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'biz_fc_1', viet: 'Giám đốc', zh: '總經理 / 董事長', en: 'General Director / CEO', hanViet: '監督', hintZh: '商務拜訪最常用高階尊稱。', toneType: 'sac' },
      { id: 'biz_fc_2', viet: 'Danh thiếp', zh: '名片 / 商業名帖', en: 'Business card', hanViet: '名帖', hintZh: '交換名片時用雙手呈遞。', toneType: 'sac' },
      { id: 'biz_fc_3', viet: 'Hợp tác', zh: '合作 / 共同協作', en: 'To cooperate / collaborate', hanViet: '合作', hintZh: '商務洽談核心願景詞。', toneType: 'nang' },
      { id: 'biz_fc_4', viet: 'Công ty', zh: '公司 / 企業', en: 'Company / Corporation', hanViet: '公司', hintZh: 'Công (公) + ty (司)。', toneType: 'ngang' },
      { id: 'biz_fc_5', viet: 'Hợp đồng', zh: '合約 / 商業合同', en: 'Contract / Agreement', hanViet: '合同', hintZh: '簽約時必備關鍵詞彙。', toneType: 'huyen' },
      { id: 'biz_fc_6', viet: 'Đại diện', zh: '代表 / 代理人', en: 'Representative / Deputy', hanViet: '代表', hintZh: '代表公司或品牌出席。', toneType: 'nang' },
      { id: 'biz_fc_7', viet: 'Khách hàng', zh: '客戶 / 顧客', en: 'Client / Customer', hanViet: '客行', hintZh: '商務上指商戶與買家。', toneType: 'huyen' },
      { id: 'biz_fc_8', viet: 'Báo giá', zh: '報價單 / 報價', en: 'Quotation / Price quote', hanViet: '報價', hintZh: '會議後詢價、報價的核心。', toneType: 'sac' },
      { id: 'biz_fc_9', viet: 'Phòng họp', zh: '會議室', en: 'Meeting room / Conference room', hanViet: '房+會/合', hintZh: 'Mời vào phòng họp: 請進會議室。', toneType: 'nang' },
      { id: 'biz_fc_10', viet: 'Dự án', zh: '專案 / 企劃案', en: 'Project / Initiative', hanViet: '預案', hintZh: '科技、工程專案必用詞。', toneType: 'sac' }
    ],
    quiz: {
      questionZh: '在越南商務拜訪雙手呈遞名片給對方總經理時，最得體且道地的越語表達是？',
      questionEn: 'What is the most polite way to hand your business card to a general director in Vietnam?',
      optionsZh: [
        'A. Cái này bao nhiêu tiền?',
        'B. Dạ, xin gửi Giám đốc danh thiếp của tôi ạ.',
        'C. Đi đâu đấy bạn ơi?',
        'D. Tôi không có danh thiếp.'
      ],
      optionsEn: [
        'A. How much is this?',
        'B. Yes, please accept my business card Director.',
        'C. Where are you going friend?',
        'D. I do not have a card.'
      ],
      answer: 1,
      explainZh: '句首帶「Dạ」、尊稱「Giám đốc」、遞名片「xin gửi danh thiếp」、句尾帶敬語「ạ」，是最標準的商務禮儀！',
      explainEn: 'Starting with "Dạ", addressing "Giám đốc", and ending with "ạ" shows pristine business courtesy.'
    }
  },

  {
    id: 'dining_restaurant',
    titleZh: '餐廳話題',
    titleEn: 'Dining & Restaurant Conversations',
    titleVi: 'Chủ Đề Nhà Hàng & Ẩm Thực',
    icon: '🍜',
    badgeZh: '國民美食',
    badgeEn: 'Food & Dining',
    color: '#10b981',
    summaryZh: '從入座呼喚服務生、點河粉烤肉飯、客製化甜度冰量，到索取餐具與俐落買單。',
    summaryEn: 'Call servers naturally, order Phở, customize sweetness & ice, request utensils, and settle bills.',
    quickGuide: {
      taglineZh: '像在地人一樣點菜！享受美食毫不費力',
      survivalTable: [
        {
          viet: 'Em ơi, cho anh/chị xem thực đơn!',
          zh: '服務生小弟/小妹，請給我看一下菜單！',
          en: 'Excuse me server, may I see the menu please!',
          pronunciation: '恩 額，桌 安/機 賢 特 鄧',
          hanViet: 'Thực đơn (食單/菜單) · Em ơi (親切呼喚店員)',
          category: '呼喚店員'
        },
        {
          viet: 'Cho tôi một tô phở bò tái chín.',
          zh: '請給我一碗半生半熟牛肉河粉。',
          en: 'One bowl of half-rare, half-well-done beef Phở please.',
          pronunciation: '桌 短 木 都 否 播 代 敬',
          hanViet: 'Tô (碗) · Phở bò (牛肉河粉) · Tái (生肉/半熟) · Chín (熟)',
          category: '點經典河粉'
        },
        {
          viet: 'Một ly cà phê sữa đá, ít đường ít đá.',
          zh: '一杯冰煉乳咖啡，少糖少冰。',
          en: 'One iced condensed milk coffee, less sugar and less ice.',
          pronunciation: '木 離 咖 啡 sữa 拿，意 等 意 拿',
          hanViet: 'Cà phê (咖啡) · Ít đường (少糖) · Ít đá (少冰)',
          category: '客製化飲料'
        },
        {
          viet: 'Đừng cho rau mùi / hành lá nhé!',
          zh: '請不要放香菜 / 青蔥喔！(不吃香菜者救命句)',
          en: 'Please do not put coriander / scallions!',
          pronunciation: '能 桌 撈 姆 / 行 辣 壓',
          hanViet: 'Đừng (別/勿) · Rau mùi (香菜) · Hành lá (青蔥)',
          category: '忌口避雷'
        },
        {
          viet: 'Cho tôi xin một đôi đũa và cái thìa / muỗng.',
          zh: '請給我一雙筷子和一隻湯匙。',
          en: 'Please give me a pair of chopsticks and a spoon.',
          pronunciation: '桌 短 心 木 堆 怒 挖 該 替/門',
          hanViet: 'Đôi đũa (雙筷) · Thìa (北越勺子) / Muỗng (南越湯匙)',
          category: '索取餐具'
        },
        {
          viet: 'Món này có cay không em?',
          zh: '這道菜會辣嗎？',
          en: 'Is this dish spicy?',
          pronunciation: '蒙 耐 郭 改 空 恩',
          hanViet: 'Món (菜餚) · Cay (辣)',
          category: '詢問口味'
        },
        {
          viet: 'Ngon tuyệt vời! Cảm ơn quán nhé.',
          zh: '太好吃了！謝謝店家。',
          en: 'Super delicious! Thank you so much.',
          pronunciation: '昂 絕 肥！感 溫 關 壓',
          hanViet: 'Ngon (美味) · Tuyệt vời (絕偉/太棒了)',
          category: '誇獎美味'
        },
        {
          viet: 'Em ơi, tính tiền giúp anh/chị!',
          zh: '服務生，幫我買單結帳！',
          en: 'Excuse me, check/bill please!',
          pronunciation: '恩 額，定 錢 幼 安/機',
          hanViet: 'Tính tiền (算錢/結帳)',
          category: '買單結帳'
        }
      ],
      sentencePatterns: [
        {
          pattern: 'Cho tôi một [Tên món / Đồ uống], [Yêu cầu thêm].',
          meaningZh: '請給我一份 [菜名/飲品]，[客製化要求]。',
          example: 'Cho tôi một dĩa cơm tấm sườn nướng, không hành mỡ.',
          exampleZh: '請給我一份烤豬排碎米飯，不要蔥油。'
        },
        {
          pattern: 'Quán có [Món ăn / Đồ uống] không?',
          meaningZh: '店裡有沒有賣 [某種食物/飲料] 呢？',
          example: 'Quán có trà đào cam sả không em?',
          exampleZh: '店裡有蜜桃橙香茅茶嗎？'
        },
        {
          pattern: 'Có thể làm cho tôi [Ít đường / Không cay] được không?',
          meaningZh: '可以幫我做成 [少糖/不辣] 嗎？',
          example: 'Có thể làm cho tôi không cay được không?',
          exampleZh: '可以幫我做不辣的嗎？'
        }
      ],
      culturalDosAndDonts: {
        dos: '在餐廳招手呼叫年輕店員叫「Em ơi!」；擦筷子可用店家附的紙巾；越南餐桌常備新鮮檸檬片、朝天椒與魚露，依個人口味自行擠汁添加。',
        donts: '切忌把筷子插在飯碗正中間（這是祭祀死者之禁忌）；不要對服務生大聲拍桌打響指。',
        proTipZh: '💡 南北餐具用詞大不同：湯匙在北越叫做「Thìa (條)」，在南越叫做「Muỗng (門)」；茶水在北越喝熱茶 (Trà nóng)，南越一律送上一大杯冰香片茉莉茶 (Trà đá)！',
        proTipEn: '💡 Dialect Spoon Fact: "Thìa" is used in Hanoi (North), while "Muỗng" is used in Saigon (South). Iced jasmine tea is called "Trà đá".'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '萬能點餐動詞「Cho」的靈活用法',
          content: '「Cho tôi...」字面意思是「給我...」，但在餐廳中是最地道、最普遍的點餐句型，後面直接加量詞與菜名，如「Cho tôi một tô...」(給我一碗...)、「Cho tôi hai ly...」(給我兩杯...)。'
        },
        {
          title: '否定詞「Không」與祈使否定「Đừng」的忌口區別',
          content: '描述個人狀態用「Tôi không ăn cay」(我不吃辣)；命令/交代店家製作時用「Đừng cho đường」(別放糖) 或口語「Không đường nhé」(不要糖喔)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Thực đơn', han: '食單', zh: '菜單' },
        { viet: 'Món ăn', han: '物+食', zh: '菜餚 / 美食' },
        { viet: 'Hải sản', han: '海產', zh: '海鮮' },
        { viet: 'Ẩm thực', han: '飲食', zh: '美食料理 / 飲食文化' },
        { viet: 'Tính tiền', han: '算錢', zh: '結帳買單' },
        { viet: 'Hóa đơn', han: '貨單', zh: '收據 / 發票' }
      ],
      regionalDifferences: '南越菜系喜愛加椰奶 (Nước cốt dừa) 與較多糖，偏甜辣鮮香；北越菜注重原汁原味，重視高湯熬煮香氣，口味偏清爽鹹鮮。吃河粉時，南越會附上整盤生九層塔、刺芫荽、生豆芽與甜麵醬，北越則主要搭配油條 (Quẩy) 與蒜頭醋 (Giấm tỏi)。'
    },
    dialogues: [
      {
        id: 'dialogue_dine_1',
        titleZh: '傳統河粉店點牛肉河粉與飲料',
        titleEn: 'Ordering Beef Phở & Drinks at Traditional Stall',
        lines: [
          { speaker: 'A (Khách)', viet: 'Em ơi! Quán mình có phở bò không em?', zh: '店員！你們店有牛肉河粉嗎？', en: 'Excuse me! Do you have beef Phở?' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ có ạ! Anh muốn ăn phở tái, phở chín hay nạm gầu ạ?', zh: '有的！您想吃生牛肉、熟牛肉還是牛腩牛油邊肉呢？', en: 'Yes we do! Would you like rare beef, well-done, or brisket?' },
          { speaker: 'A (Khách)', viet: 'Cho anh một tô tái chín đặc biệt, nhiều hành ít bánh nhé.', zh: '給我一碗半生半熟特大碗，多蔥少河粉喔。', en: 'Give me one special bowl with rare & well-done beef, extra scallions and less noodles.' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ được ạ! Anh có uống thêm trà đá hay nước ngọt gì không?', zh: '好的！您需要加點冰茶還是汽水飲料嗎？', en: 'Sure! Would you like some iced tea or soft drinks?' },
          { speaker: 'A (Khách)', viet: 'Cho anh một ly trà đá không đường nha.', zh: '再給我一杯無糖冰茶喔。', en: 'Give me one glass of iced tea without sugar please.' }
        ]
      },
      {
        id: 'dialogue_dine_2',
        titleZh: '餐後結帳與發票索取',
        titleEn: 'Paying the Bill & Requesting Receipt',
        lines: [
          { speaker: 'A (Khách)', viet: 'Em ơi, bàn số 5 tính tiền giúp anh!', zh: '店員，5號桌幫我買單結帳！', en: 'Excuse me server, table 5 check please!' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ, của anh gồm một phở đặc biệt và một trà đá, tổng cộng 75 nghìn ạ.', zh: '好的，您是一碗特製河粉和一杯冰茶，總共7萬5千越盾。', en: 'Yes, yours includes one special Phở and one iced tea, total is 75k VND.' },
          { speaker: 'A (Khách)', viet: 'Anh có thể quét mã VietQR chuyển khoản được không?', zh: '我可以掃 VietQR 轉帳付款嗎？', en: 'Can I scan VietQR code to transfer payment?' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ được chứ ạ! Mã QR ở ngay trên bàn anh nhé.', zh: '當然可以！QR Code 就在您的桌角上喔。', en: 'Of course! The QR code is right on your table.' },
          { speaker: 'A (Khách)', viet: 'Anh chuyển khoản xong rồi nhé, cảm ơn em!', zh: '我轉帳完成了喔，謝謝你！', en: 'I have transferred the money, thank you!' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'dine_fc_1', viet: 'Phở bò', zh: '牛肉河粉', en: 'Beef Phở', hanViet: '廣東河粉/牛', hintZh: '越南最具代表性的國民湯麵。', toneType: 'hoi' },
      { id: 'dine_fc_2', viet: 'Cà phê sữa đá', zh: '冰煉乳咖啡', en: 'Iced milk coffee', hanViet: '咖啡/乳/石(冰)', hintZh: '滴漏咖啡加上濃郁煉乳與冰塊。', toneType: 'nga' },
      { id: 'dine_fc_3', viet: 'Tính tiền', zh: '結帳 / 買單', en: 'To pay the bill / check', hanViet: '算錢', hintZh: '越南全境通用的結帳口語。', toneType: 'sac' },
      { id: 'dine_fc_4', viet: 'Thực đơn', zh: '菜單 / 目錄', en: 'Menu', hanViet: '食單', hintZh: 'Xem thực đơn: 看菜單。', toneType: 'nang' },
      { id: 'dine_fc_5', viet: 'Không đường', zh: '不加糖 / 無糖', en: 'No sugar', hanViet: '空糖', hintZh: '點飲料健康少負擔的秘訣。', toneType: 'huyen' },
      { id: 'dine_fc_6', viet: 'Ít đá', zh: '少冰', en: 'Less ice', hanViet: '少石', hintZh: '越南冰塊給得很滿，必說 ít đá。', toneType: 'sac' },
      { id: 'dine_fc_7', viet: 'Đôi đũa', zh: '一雙筷子', en: 'A pair of chopsticks', hanViet: '對(雙)+箸(筷)', hintZh: '用餐必備基本餐具。', toneType: 'nga' },
      { id: 'dine_fc_8', viet: 'Cái muỗng', zh: '湯匙 (南越說法)', en: 'Spoon (Southern)', hanViet: '純越語餐具', hintZh: '北越叫 Thìa，南越叫 Muỗng。', toneType: 'nga' },
      { id: 'dine_fc_9', viet: 'Ngon quá', zh: '太好吃了！', en: 'So delicious!', hanViet: '純越美味+過', hintZh: '稱讚大廚好手藝的最佳讚美。', toneType: 'sac' },
      { id: 'dine_fc_10', viet: 'Trà đá', zh: '冰茉莉茶 / 冰香片', en: 'Iced tea', hanViet: '茶石', hintZh: '越南餐廳普及率100%的免費/平價茶水。', toneType: 'sac' }
    ],
    quiz: {
      questionZh: '在胡志明市（南越）吃熱炒或河粉，如果需要店家多拿一隻「湯匙」，最道地的稱呼是？',
      questionEn: 'In Southern Vietnam, how do you ask for a spoon?',
      optionsZh: [
        'A. Cho tôi một cái thìa',
        'B. Cho tôi một cái muỗng',
        'C. Cho tôi một đôi đũa',
        'D. Cho tôi một ly cà phê'
      ],
      optionsEn: [
        'A. Cho tôi một cái thìa',
        'B. Cho tôi một cái muỗng',
        'C. Cho tôi một đôi đũa',
        'D. Cho tôi một ly cà phê'
      ],
      answer: 1,
      explainZh: '南越人稱呼湯匙為「Muỗng (門)」，北越則偏好稱「Thìa (條)」！',
      explainEn: 'In Southern Vietnam, a spoon is called "Muỗng", whereas in the North it is "Thìa".'
    }
  },

  {
    id: 'family_kinship',
    titleZh: '家庭話題',
    titleEn: 'Family, Relatives & Kinship Titles',
    titleVi: 'Chủ Đề Gia Đình & Xưng Hô Dòng Tộc',
    icon: '👨‍👩‍👧‍👦',
    badgeZh: '文化核心',
    badgeEn: 'Family & Kinship',
    color: '#8b5cf6',
    summaryZh: '拆解越南家族親屬樹、婚姻狀況、兄弟姐妹排序，深度理解稱謂背後的宗族文化。',
    summaryEn: 'Navigate the Vietnamese family tree, marital status, sibling hierarchy, and kinship logic.',
    quickGuide: {
      taglineZh: '叫對稱謂，瞬間融入越南家庭的人情溫暖',
      survivalTable: [
        {
          viet: 'Gia đình bạn có mấy người?',
          zh: '你家裡有幾口人？',
          en: 'How many people are there in your family?',
          pronunciation: '扎 丁 盤 郭 買 能',
          hanViet: 'Gia đình (家庭) · Mấy người (幾人)',
          category: '詢問家庭'
        },
        {
          viet: 'Nhà tôi có bốn người: bố mẹ, tôi và em gái.',
          zh: '我家有四口人：爸爸、媽媽、我和妹妹。',
          en: 'My family has 4 people: dad, mom, me, and younger sister.',
          pronunciation: '雅 短 郭 奔 能：波 妹，短 挖 恩 該',
          hanViet: 'Bố (父) · Mẹ (母) · Em gái (妹)',
          category: '家庭成員'
        },
        {
          viet: 'Bạn đã kết hôn / có gia đình chưa?',
          zh: '你結婚了嗎？/ 有家庭了嗎？',
          en: 'Are you married / do you have a family yet?',
          pronunciation: '盤 打 接 婚 / 郭 扎 丁 接',
          hanViet: 'Kết hôn (結婚) · Chưa (未/還沒)',
          category: '婚姻狀況'
        },
        {
          viet: 'Tôi đã có gia đình và hai con nhỏ.',
          zh: '我已經成家了，並且有兩個小孩。',
          en: 'I am married and have two young children.',
          pronunciation: '短 打 郭 扎 丁 挖 海 昆 幼',
          hanViet: 'Gia đình (家庭) · Con (子女/孩子)',
          category: '成家子女'
        },
        {
          viet: 'Tôi vẫn còn độc thân.',
          zh: '我目前依然是單身。',
          en: 'I am still single.',
          pronunciation: '短 穩 昆 獨 身',
          hanViet: 'Độc thân (獨身/單身)',
          category: '單身應答'
        },
        {
          viet: 'Ông bà nội ngoại của bạn vẫn khỏe chứ?',
          zh: '你的爺爺奶奶、外公外婆身體還硬朗吧？',
          en: 'Are your paternal and maternal grandparents doing well?',
          pronunciation: '翁 吧 內 外 誇 盤 穩 奎 者',
          hanViet: 'Ông bà (翁婆/祖父母) · Nội (內/父系) · Ngoại (外/母系)',
          category: '長輩關心'
        },
        {
          viet: 'Anh trai của bạn làm nghề gì?',
          zh: '你的哥哥從事什麼職業工作？',
          en: 'What does your older brother do for a living?',
          pronunciation: '安 齋 誇 盤 藍 也 乙',
          hanViet: 'Anh trai (長兄/哥哥) · Nghề (職業)',
          category: '親友工作'
        },
        {
          viet: 'Tết này bạn có về quê thăm gia đình không?',
          zh: '今年農曆春節你會回鄉探望家人嗎？',
          en: 'Are you returning to your hometown to visit family this Tết?',
          pronunciation: '節 耐 盤 郭 唯 規 貪 扎 丁 空',
          hanViet: 'Tết (節/春節) · Về quê (回鄉) · Thăm (探訪)',
          category: '春節返鄉'
        }
      ],
      sentencePatterns: [
        {
          pattern: 'Tôi là [Con thứ / Con cả] trong gia đình.',
          meaningZh: '我在家中排行 [老幾 / 老大]。',
          example: 'Tôi là con cả trong gia đình.',
          exampleZh: '我是家裡面的老大（長子/長女）。'
        },
        {
          pattern: 'Bố mẹ tôi năm nay đã [Số tuổi] tuổi rồi.',
          meaningZh: '我父母今年已經 [年齡] 歲了。',
          example: 'Bố mẹ tôi năm nay đã sáu mươi tuổi rồi.',
          exampleZh: '我父母親今年已經六十歲了。'
        },
        {
          pattern: 'Bạn có [Anh trai / Chị gái / Em gái] không?',
          meaningZh: '你有沒有 [哥哥/姐姐/妹妹] 呢？',
          example: 'Bạn có anh chị em ruột không?',
          exampleZh: '你有親生親兄弟姐妹嗎？'
        }
      ],
      culturalDosAndDonts: {
        dos: '在越南作客見到對方長輩，晚輩應主動雙手環抱胸前微微鞠躬問好說「Cháu chào Ông/Bà ạ」；被問及婚姻狀況在越南是長輩熱情的關心，笑著禮貌回應即可。',
        donts: '切忌在長輩面前直呼長輩名諱；不要在越南家庭聚會時用手指直接指著長輩說話。',
        proTipZh: '💡 南北稱謂大對決：爸爸在北越叫「Bố (父)」，在南越叫「Ba (爸)」；媽媽在北越叫「Mẹ (母)」，在南越叫「Má (媽)」！此外，南越稱呼老大為「Anh Hai/Chị Hai」(二哥/二姐，因為老大留給天公)，北越稱老大為「Anh Cả/Chị Cả」！',
        proTipEn: '💡 North vs South Parents: North uses "Bố & Mẹ", while South uses "Ba & Má". Also, the eldest sibling is "Anh Cả" in the North, but "Anh Hai" in the South!'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '血緣親屬名詞「Ruột」與姻親的區別',
          content: '越語中在稱謂後加上「ruột」(字面為內臟/血肉)，表示「親生的、嫡親的」，如「Anh ruột」(親哥哥)、「Con ruột」(親骨肉)。而「Họ hàng」則泛指同宗遠親。'
        },
        {
          title: '越南排行數字「Anh Hai / Chị Ba」的社交稱謂',
          content: '在南越，朋友之間往往會依家中排行直接稱呼，例如「Anh Hai」(二哥)、「Chị Ba」(三姐)、「Út」(老么/小妹)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Gia đình', han: '家庭', zh: '家庭' },
        { viet: 'Phụ mẫu', han: '父母', zh: '父母 (公文書面語)' },
        { viet: 'Kết hôn', han: '結婚', zh: '結婚' },
        { viet: 'Độc thân', han: '獨身', zh: '單身' },
        { viet: 'Nội ngoại', han: '內外', zh: '父系內親與母系外親' },
        { viet: 'Họ hàng', han: '戶行', zh: '親戚宗族' }
      ],
      regionalDifferences: '越南是高度重視宗族觀念的社會。農曆春節 (Tết Nguyên Đán) 時，全家人不論身在何方，必定「Về quê」(回故鄉) 團聚祭祖。敬酒時，年幼晚輩必須用雙手捧杯，杯緣低於長輩以示孝敬尊崇。'
    },
    dialogues: [
      {
        id: 'dialogue_fam_1',
        titleZh: '咖啡廳閒聊家庭成員與近況',
        titleEn: 'Chatting About Family Members at a Cafe',
        lines: [
          { speaker: 'A (Bạn Việt)', viet: 'Anh Minh ơi, gia đình anh ở Đài Loan có mấy người vậy?', zh: '阿明哥，你在台灣的家裡有幾口人呀？', en: 'Mr. Minh, how many people are there in your family in Taiwan?' },
          { speaker: 'B (Bạn)', viet: 'Nhà anh có bốn người: bố mẹ anh, một em gái và anh.', zh: '我家有四個人：我爸媽、一個妹妹跟我。', en: 'My family has four: my parents, a younger sister, and me.' },
          { speaker: 'A (Bạn Việt)', viet: 'Em gái anh năm nay bao nhiêu tuổi rồi? Đã đi làm chưa?', zh: '你妹妹今年幾歲了？開始上班工作了嗎？', en: 'How old is your sister? Has she started working?' },
          { speaker: 'B (Bạn)', viet: 'Em ấy năm nay 24 tuổi, đang làm kế toán ở Đài Bắc.', zh: '她今年24歲，正在台北當會計師。', en: 'She is 24 this year, working as an accountant in Taipei.' },
          { speaker: 'A (Bạn Việt)', viet: 'Tuyệt vời quá! Khi nào rảnh mời cả nhà anh sang Việt Nam du lịch nhé!', zh: '太棒了！有空的時候歡迎邀請你全家來越南旅遊喔！', en: 'Wonderful! When you are free, invite your family to visit Vietnam!' }
        ]
      },
      {
        id: 'dialogue_fam_2',
        titleZh: '詢問婚姻狀況與生活關心',
        titleEn: 'Inquiring Marital Status & Life Updates',
        lines: [
          { speaker: 'A (Bác hàng xóm)', viet: 'Cháu Minh sang Việt Nam làm việc lâu chưa? Đã có gia đình chưa?', zh: '阿明姪子來越南工作很久了嗎？成家結婚了沒呀？', en: 'Minh, have you worked in Vietnam long? Are you married yet?' },
          { speaker: 'B (Minh)', viet: 'Dạ cháu sang được 1 năm rồi ạ. Cháu vẫn còn độc thân Bác ơi.', zh: '回伯伯，我來滿一年了。我現在還是單身啦。', en: 'Uncle, I have been here for 1 year. I am still single.' },
          { speaker: 'A (Bác hàng xóm)', viet: 'Thế à! Trai Đài Loan chăm chỉ, khéo lại lấy vợ người Việt Nam đấy nhé!', zh: '這樣啊！台灣男生勤奮上進，說不定以後娶個越南姑娘當老婆喔！', en: 'Is that so! Taiwanese guys work hard, maybe you will marry a Vietnamese wife!' },
          { speaker: 'B (Minh)', viet: 'Dạ, con gái Việt Nam rất hiền lành và đảm đang ạ!', zh: '是的，越南女孩子非常溫柔賢慧而且持家能幹！', en: 'Yes, Vietnamese women are very gentle, kind, and capable!' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'fam_fc_1', viet: 'Gia đình', zh: '家庭 / 家人', en: 'Family', hanViet: '家庭', hintZh: '社會最核心的基本單元。', toneType: 'huyen' },
      { id: 'fam_fc_2', viet: 'Bố mẹ', zh: '父母親 (北越常用)', en: 'Parents (Northern)', hanViet: '父+母', hintZh: '南越口語常稱 Ba má。', toneType: 'sac' },
      { id: 'fam_fc_3', viet: 'Ba má', zh: '爸媽 (南越常用)', en: 'Dad & Mom (Southern)', hanViet: '爸+媽', hintZh: '胡志明市與湄公河三角洲最親切叫法。', toneType: 'sac' },
      { id: 'fam_fc_4', viet: 'Ông bà', zh: '祖父母 / 爺爺奶奶', en: 'Grandparents', hanViet: '翁+婆', hintZh: '長輩最高尊稱。', toneType: 'huyen' },
      { id: 'fam_fc_5', viet: 'Anh trai', zh: '哥哥 / 長兄', en: 'Older brother', hanViet: '兄+純越男', hintZh: '同胞兄弟中的兄長。', toneType: 'ngang' },
      { id: 'fam_fc_6', viet: 'Chị gái', zh: '姐姐 / 胞姊', en: 'Older sister', hanViet: '姊+純越女', hintZh: '同胞姐妹中的長姊。', toneType: 'nang' },
      { id: 'fam_fc_7', viet: 'Em gái', zh: '妹妹', en: 'Younger sister', hanViet: '純越年幼+女', hintZh: '比自己年幼的同輩女性。', toneType: 'sac' },
      { id: 'fam_fc_8', viet: 'Kết hôn', zh: '結婚 / 成家', en: 'To get married', hanViet: '結婚', hintZh: '正式書面與口語皆通用。', toneType: 'huyen' },
      { id: 'fam_fc_9', viet: 'Độc thân', zh: '單身 / 未婚', en: 'Single / Unmarried', hanViet: '獨身', hintZh: '自我介紹個人狀態用詞。', toneType: 'ngang' },
      { id: 'fam_fc_10', viet: 'Về quê', zh: '回鄉 / 回老家', en: 'To return to hometown', hanViet: '純越回+鄉/故鄉', hintZh: '春節返鄉團圓最重要的文化詞。', toneType: 'ngang' }
    ],
    quiz: {
      questionZh: '在南越地區（如西貢），家庭中的「長子或長女」（老大），民間習慣如何尊稱？',
      questionEn: 'In Southern Vietnam, how is the eldest child in a family customarily addressed?',
      optionsZh: [
        'A. Anh Cả / Chị Cả',
        'B. Anh Hai / Chị Hai',
        'C. Anh Ba / Chị Ba',
        'D. Em Út'
      ],
      optionsEn: [
        'A. Anh Cả / Chị Cả',
        'B. Anh Hai / Chị Hai',
        'C. Anh Ba / Chị Ba',
        'D. Em Út'
      ],
      answer: 1,
      explainZh: '南越傳統習俗認為「老大留給天公 (Trời)」，因此家中實際上的第一個孩子會從「老二 (Anh Hai / Chị Hai)」開始排起！',
      explainEn: 'Southern tradition reserves the number 1 for Heaven (Trời), so the firstborn sibling is addressed as "Anh Hai" or "Chị Hai"!'
    }
  },

  {
    id: 'health_medical',
    titleZh: '健康話題',
    titleEn: 'Health, Medical & Pharmacy',
    titleVi: 'Chủ Đề Sức Khỏe, Thuốc & Bệnh Viện',
    icon: '💊',
    badgeZh: '生活急救',
    badgeEn: 'Health & Clinic',
    color: '#ef4444',
    summaryZh: '身體各部位名稱、感冒發燒症狀精準表達、藥局買藥劑量指示與醫院診所看診對話。',
    summaryEn: 'Express bodily symptoms, buy medications at pharmacies, understand dosages, and visit doctors.',
    quickGuide: {
      taglineZh: '出門在外身體不適？一秒說清症狀買對藥',
      survivalTable: [
        {
          viet: 'Tôi bị đau đầu và sốt cao.',
          zh: '我頭痛而且發高燒。',
          en: 'I have a headache and a high fever.',
          pronunciation: '短 比 到 頭 挖 數 高',
          hanViet: 'Đau (痛) · Đầu (頭) · Sốt (發燒)',
          category: '常見症狀'
        },
        {
          viet: 'Tôi bị đau bụng và đi ngoài / tiêu chảy.',
          zh: '我肚子痛而且拉肚子 / 腹瀉。',
          en: 'I have stomachache and diarrhea.',
          pronunciation: '短 比 到 朋 挖 屌 外 / 雕 柴',
          hanViet: 'Đau bụng (腹痛) · Tiêu chảy (消水/腹瀉)',
          category: '腸胃問題'
        },
        {
          viet: 'Tôi muốn mua thuốc cảm cúm / giảm đau.',
          zh: '我想買感冒藥 / 止痛藥。',
          en: 'I want to buy cold medication / painkillers.',
          pronunciation: '短 門 木 水 感 供 / 染 到',
          hanViet: 'Thuốc (藥) · Cảm cúm (感冒) · Giảm đau (減痛/止痛)',
          category: '藥局買藥'
        },
        {
          viet: 'Thuốc này uống ngày mấy lần?',
          zh: '這個藥一天要服用幾次？',
          en: 'How many times a day should I take this medicine?',
          pronunciation: '水 耐 翁 該 買 冷',
          hanViet: 'Uống (飲/喝/吃藥) · Ngày (日/天) · Mấy lần (幾次)',
          category: '服藥指示'
        },
        {
          viet: 'Uống sau bữa ăn hay trước bữa ăn?',
          zh: '飯後吃還是飯前吃？',
          en: 'Take it after meals or before meals?',
          pronunciation: '翁 騷 柏 安 海 着 柏 安',
          hanViet: 'Sau (後) · Trước (前) · Bữa ăn (餐食)',
          category: '用藥時間'
        },
        {
          viet: 'Tôi bị dị ứng với hải sản / kháng sinh.',
          zh: '我對海鮮 / 抗生素過敏。',
          en: 'I am allergic to seafood / antibiotics.',
          pronunciation: '短 比 意 應 味 海 產 / 坑 生',
          hanViet: 'Dị ứng (異應/過敏) · Kháng sinh (抗生/抗生素)',
          category: '過敏體質'
        },
        {
          viet: 'Làm ơn cho tôi hỏi bệnh viện quốc tế ở đâu?',
          zh: '請問國際醫院在哪裡？',
          en: 'Please tell me where the international hospital is?',
          pronunciation: '藍 溫 桌 短 悔 院 院 國 接 額 投',
          hanViet: 'Bệnh viện (病院/醫院) · Quốc tế (國際)',
          category: '尋找醫院'
        },
        {
          viet: 'Tôi cần gọi xe cấp cứu 115!',
          zh: '我需要打 115 叫救護車！',
          en: 'I need to call an ambulance (dial 115)!',
          pronunciation: '短 更 乖 接 結 救 木 木 南',
          hanViet: 'Cấp cứu (急救) · Số 115 (越南急救電話)',
          category: '緊急救護'
        }
      ],
      sentencePatterns: [
        {
          pattern: 'Tôi bị [Tên triệu chứng] từ hôm qua đến giờ.',
          meaningZh: '我從昨天到現在一直 [出現某種症狀]。',
          example: 'Tôi bị đau họng và ho nhiều từ hôm qua đến giờ.',
          exampleZh: '我從昨天到現在一直喉嚨痛而且咳嗽很多。'
        },
        {
          pattern: 'Cho tôi mua liều thuốc [Chữa bệnh gì].',
          meaningZh: '給我買一份治療 [某種疾病] 的藥劑量。',
          example: 'Cho tôi mua liều thuốc trị đau dạ dày.',
          exampleZh: '給我買一份治療胃痛的胃藥。'
        },
        {
          pattern: 'Sau khi uống thuốc, tôi cảm thấy [Trạng thái].',
          meaningZh: '吃完藥之後，我覺得 [身體狀態]。',
          example: 'Sau khi uống thuốc, tôi cảm thấy đỡ hơn nhiều.',
          exampleZh: '吃過藥後，我感覺好多了。'
        }
      ],
      culturalDosAndDonts: {
        dos: '在越南藥局 (Nhà thuốc) 買藥非常便利，連鎖藥局如 Pharmacity、Long Châu 有專業藥劑師；如果不確定藥名，出示手機上的越文單字卡或藥盒照片最精確。',
        donts: '就醫時切忌隱瞞藥物過敏史 (Dị ứng thuốc)；避免隨意購買無衛福部許可標籤的草藥散劑。',
        proTipZh: '💡 越南藥局神奇「Liều (劑量)」文化：在越南傳統藥房買感冒藥，藥劑師常問你要買幾天的份量（如「Bán cho 2 ngày」），並把每次要吃的一排排膠囊藥丸直接分裝在小塑膠袋裡，既便宜又極具在地特色！',
        proTipEn: '💡 Pharmacy Culture: Pharmacies in Vietnam often prepare customized multi-pill pouches for 1-3 days ("Liều thuốc") tailored to your symptoms.'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '被動遭遇負面詞彙「Bị」與正面幸運詞彙「Được」',
          content: '越語中表示生病、受傷、遭遇不順時，動詞前必須加上「Bị」(被/遭受到)，如「Bị cảm」(感冒)、「Bị đau」(感到疼痛)。相反地，幸運獲利時則用「Được」(得到/獲准)。'
        },
        {
          title: '身體各部位與「Đau (痛)」的自由組合公式',
          content: '「Đau + 部位」可組成所有疼痛詞彙：Đau đầu (頭痛)、Đau răng (牙痛)、Đau họng (喉嚨痛)、Đau lưng (腰酸背痛)、Đau mắt (眼睛痛)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Bệnh viện', han: '病院', zh: '醫院' },
        { viet: 'Bác sĩ', han: '博士/醫生', zh: '醫師 / 醫生' },
        { viet: 'Y tá', han: '醫佐', zh: '護理師 / 護士' },
        { viet: 'Kháng sinh', han: '抗生', zh: '抗生素' },
        { viet: 'Dị ứng', han: '異應', zh: '過敏' },
        { viet: 'Cấp cứu', han: '急救', zh: '緊急急救 / 救護' },
        { viet: 'Sức khỏe', han: '力+健康', zh: '身體健康' }
      ],
      regionalDifferences: '北越買藥常說「Mua vỉ thuốc」(買一板鋁箔包裝)；南越常說「Mua mấy liều」(買幾包調劑)；拉肚子在北越稱「Đi ngoài」，在南越稱「Tiêu chảy」或「Đau bụng xổ」。大城市台商常去 FV 法越醫院 (Bệnh viện FV) 或國際診所 (Raffles Medical, Vinmec)，皆配有華語翻譯服務。'
    },
    dialogues: [
      {
        id: 'dialogue_med_1',
        titleZh: '連鎖藥局 (Pharmacity) 描述感冒發燒症狀買藥',
        titleEn: 'Buying Cold & Fever Medicine at a Pharmacy',
        lines: [
          { speaker: 'A (Khách)', viet: 'Chào dược sĩ, tôi bị sốt nhẹ và nghẹt mũi từ tối qua.', zh: '藥劑師你好，我從昨晚開始有點微燒而且鼻塞。', en: 'Hello pharmacist, I have a slight fever and stuffy nose since last night.' },
          { speaker: 'B (Dược sĩ)', viet: 'Dạ, anh có bị ho hay đau họng không ạ?', zh: '好的，您有咳嗽或喉嚨痛嗎？', en: 'Understood, do you have a cough or sore throat?' },
          { speaker: 'A (Khách)', viet: 'Có, họng hơi rát. Cho tôi thuốc giảm sốt và trị cảm cúm nhé.', zh: '有的，喉嚨有點刺痛。請給我退燒藥跟感冒藥喔。', en: 'Yes, a bit sore. Please give me fever reducer and cold medicine.' },
          { speaker: 'B (Dược sĩ)', viet: 'Đây là thuốc hạ sốt Paracetamol và thuốc cảm. Ngày uống 2 lần, mỗi lần 1 viên sau ăn nhé.', zh: '這是普拿疼退燒藥與感冒藥。一天吃兩次，每次一顆，飯後吃喔。', en: 'Here is Paracetamol and cold tablets. Take twice a day, 1 pill each after meals.' },
          { speaker: 'A (Khách)', viet: 'Tôi hiểu rồi, cảm ơn dược sĩ nhiều!', zh: '我明白了，非常感謝藥劑師！', en: 'Got it, thank you very much pharmacist!' }
        ]
      },
      {
        id: 'dialogue_med_2',
        titleZh: '國際診所醫生問診與量血壓',
        titleEn: 'Doctor Consultation & Blood Pressure Measurement',
        lines: [
          { speaker: 'A (Bác sĩ)', viet: 'Chào anh Minh, hôm nay anh cảm thấy khó chịu ở đâu?', zh: '你好明先生，今天你覺得身體哪裡不舒服呢？', en: 'Hello Mr. Minh, where do you feel uncomfortable today?' },
          { speaker: 'B (Minh)', viet: 'Dạ thưa bác sĩ, tôi bị đau dạ dày và buồn nôn sau khi ăn.', zh: '報告醫生，我吃完東西後胃痛而且很想吐。', en: 'Doctor, my stomach hurts and I feel nauseous after eating.' },
          { speaker: 'A (Bác sĩ)', viet: 'Để tôi đo huyết áp và kiểm tra bụng cho anh nhé. Anh có dị ứng thuốc gì không?', zh: '讓我幫你量血壓並檢查一下腹部。你有對什麼藥物過敏嗎？', en: 'Let me measure your blood pressure and examine your abdomen. Any drug allergies?' },
          { speaker: 'B (Minh)', viet: 'Dạ không, tôi không có tiền sử dị ứng thuốc gì ạ.', zh: '沒有，我沒有任何藥物過敏病史。', en: 'No, I have no history of drug allergies.' },
          { speaker: 'A (Bác sĩ)', viet: 'Tốt rồi, tôi kê đơn thuốc dạ dày cho anh uống 5 ngày sẽ khỏi nhé.', zh: '很好，我開5天的胃藥處方給你，按時吃就會好囉。', en: 'Good, I will prescribe 5 days of stomach medication, you will recover soon.' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'med_fc_1', viet: 'Bác sĩ', zh: '醫師 / 醫生', en: 'Doctor / Physician', hanViet: '博士', hintZh: '診所與醫院的主治人員。', toneType: 'sac' },
      { id: 'med_fc_2', viet: 'Bệnh viện', zh: '醫院 / 醫療院所', en: 'Hospital', hanViet: '病院', hintZh: 'Bệnh (病) + viện (院)。', toneType: 'nang' },
      { id: 'med_fc_3', viet: 'Đau đầu', zh: '頭痛', en: 'Headache', hanViet: '痛+頭', hintZh: '高頻常見不適症狀。', toneType: 'huyen' },
      { id: 'med_fc_4', viet: 'Sốt cao', zh: '發高燒', en: 'High fever', hanViet: '純越發燒+高', hintZh: '量體溫高於 38.5 度時用詞。', toneType: 'sac' },
      { id: 'med_fc_5', viet: 'Thuốc cảm', zh: '感冒藥', en: 'Cold medicine', hanViet: '水(藥)+感', hintZh: '藥局最常購買的成藥。', toneType: 'sac' },
      { id: 'med_fc_6', viet: 'Đau bụng', zh: '腹痛 / 肚子痛', en: 'Stomachache / Abdominal pain', hanViet: '痛+純越腹', hintZh: '腸胃不適最常用短語。', toneType: 'nang' },
      { id: 'med_fc_7', viet: 'Tiêu chảy', zh: '腹瀉 / 拉肚子', en: 'Diarrhea', hanViet: '消水/消流', hintZh: '飲食不適水土不服症狀。', toneType: 'hoi' },
      { id: 'med_fc_8', viet: 'Dị ứng', zh: '過敏反應', en: 'Allergy / Allergic reaction', hanViet: '異應', hintZh: '就診與點餐忌口關鍵詞。', toneType: 'sac' },
      { id: 'med_fc_9', viet: 'Uống thuốc', zh: '服藥 / 吃藥', en: 'To take medicine', hanViet: '飲+藥', hintZh: '越語吃藥動詞用「Uống (喝/飲)」。', toneType: 'sac' },
      { id: 'med_fc_10', viet: 'Cấp cứu', zh: '急診 / 緊急急救', en: 'Emergency / First aid', hanViet: '急救', hintZh: '緊急撥打 115 專線。', toneType: 'sac' }
    ],
    quiz: {
      questionZh: '在越南語中，「吃藥」的動作通常使用哪一個動詞？（不同於中文的「吃」）',
      questionEn: 'In Vietnamese, which verb is typically used for "taking medicine"?',
      optionsZh: [
        'A. Ăn thuốc (吃)',
        'B. Uống thuốc (喝/飲)',
        'C. Xem thuốc (看)',
        'D. Mua thuốc (買)'
      ],
      optionsEn: [
        'A. Ăn thuốc (Eat)',
        'B. Uống thuốc (Drink/Take)',
        'C. Xem thuốc (Watch)',
        'D. Mua thuốc (Buy)'
      ],
      answer: 1,
      explainZh: '越南語中服用藥物不說「Ăn」，而一律使用「Uống (喝/飲)」搭配藥物（因為多數需配水吞服或為藥水）！',
      explainEn: 'Vietnamese uses "Uống" (drink/swallow) for taking medication, never "Ăn" (eat)!'
    }
  },

  {
    id: 'date_time_stay',
    titleZh: '日期時間與停留',
    titleEn: 'Dates, Days, Months & Duration of Stay',
    titleVi: 'Ngày Tháng, Thứ & Thời Gian Lưu Trú',
    icon: '📅',
    badgeZh: '出入境實戰',
    badgeEn: 'Time & Stay',
    color: '#06b6d4',
    summaryZh: '掌握星期一至星期日、12個月份、時間副詞，以及海關與日常生活詢問「要待多久」。',
    summaryEn: 'Learn days of the week, 12 months, time expressions, and immigration answers for duration of stay.',
    quickGuide: {
      taglineZh: '精確預約時間、回答簽證停留天數必修篇',
      survivalTable: [
        {
          viet: 'Hôm nay là Thứ mấy?',
          zh: '今天星期幾？',
          en: 'What day of the week is it today?',
          pronunciation: '烘 耐 辣 特 買',
          hanViet: 'Hôm nay (今天) · Thứ mấy (星期幾)',
          category: '詢問星期'
        },
        {
          viet: 'Thứ Hai, Thứ Ba, Thứ Tư, Thứ Năm, Thứ Sáu, Thứ Bảy, Chủ Nhật.',
          zh: '星期一、星期二、星期三、星期四、星期五、星期六、星期日。',
          en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.',
          pronunciation: '特 海, 特 巴, 特 德, 特 南, 特 騷, 特 擺, 主 日',
          hanViet: 'Thứ (次/序數) · Chủ Nhật (主日/星期天)',
          category: '一週七天'
        },
        {
          viet: 'Tháng này là Tháng mấy? Tháng Một đến Tháng Mười Hai.',
          zh: '這個月是幾月？一月到十二月。',
          en: 'What month is this? January to December.',
          pronunciation: '湯 耐 辣 湯 買？湯 木 點 湯 妹 海',
          hanViet: 'Tháng (月) · Tháng Một (一月) · Tháng Mười Hai (十二月)',
          category: '十二月份'
        },
        {
          viet: 'Hôm qua, hôm nay, ngày mai, ngày kia.',
          zh: '昨天、今天、明天、後天。',
          en: 'Yesterday, today, tomorrow, the day after tomorrow.',
          pronunciation: '烘 誇，烘 耐，該 買，該 接',
          hanViet: '時間副詞核心四重奏',
          category: '常用時間'
        },
        {
          viet: 'Bạn dự định ở lại Việt Nam bao lâu?',
          zh: '你打算在越南停留多久？(海關入境必問)',
          en: 'How long do you plan to stay in Vietnam?',
          pronunciation: '盤 預 定 額 賴 味 南 包 樓',
          hanViet: 'Dự định (預定/打算) · Lưu trú (留住/停留)',
          category: '停留時間'
        },
        {
          viet: 'Tôi ở lại khoảng hai tuần / ba tháng.',
          zh: '我大約停留兩週 / 三個月。',
          en: 'I will stay for about two weeks / three months.',
          pronunciation: '短 額 賴 款 海 短 / 巴 湯',
          hanViet: 'Khoảng (約/大概) · Tuần (週/星期) · Tháng (月)',
          category: '回答停留'
        },
        {
          viet: 'Visa của tôi có thời hạn một năm.',
          zh: '我的簽證效期是一年。',
          en: 'My visa is valid for one year.',
          pronunciation: '微 撒 誇 短 郭 柴 限 木 南',
          hanViet: 'Thời hạn (時限/效期) · Một năm (一年)',
          category: '簽證效期'
        },
        {
          viet: 'Hẹn gặp anh vào lúc 9 giờ sáng mai nhé!',
          zh: '約定明天早上9點與您見面喔！',
          en: 'See you tomorrow morning at 9:00 AM!',
          pronunciation: '現 嘎 安 哇 綠 敬 幼 雙 買 壓',
          hanViet: 'Hẹn gặp (相約見面) · Giờ (小時/點鐘)',
          category: '約定時間'
        }
      ],
      sentencePatterns: [
        {
          pattern: 'Tôi sẽ ở lại [Nơi chốn] trong vòng [Số lượng thời gian].',
          meaningZh: '我將在 [某地] 停留 [多久時間] 內。',
          example: 'Tôi sẽ ở lại TP. Hồ Chí Minh trong vòng 10 ngày.',
          exampleZh: '我將在胡志明市停留10天。'
        },
        {
          pattern: 'Khi nào bạn [Hành động]?',
          meaningZh: '你什麼時候 [做某事] 呢？',
          example: 'Khi nào bạn bay về Đài Loan?',
          exampleZh: '你什麼時候搭機飛回台灣？'
        },
        {
          pattern: 'Bây giờ là [Số giờ] giờ [Số phút] phút.',
          meaningZh: '現在是 [幾點] 點 [幾分] 分。',
          example: 'Bây giờ là mười giờ ba mươi phút sáng.',
          exampleZh: '現在是早上十點三十分。'
        }
      ],
      culturalDosAndDonts: {
        dos: '在越南過海關回答「Ở lại bao lâu?」時，準備好回程機票與飯店訂房行程單；約定商務會議時，用 Zalo 明確備註「Thứ mấy, ngày mấy, mấy giờ」避免誤會。',
        donts: '切忌把星期日說成「Thứ Tám」（越語沒有星期八，星期日專用詞為「Chủ Nhật」或北越「Chúa Nhật」）。',
        proTipZh: '💡 星期數字大玄機：越南語的星期從「Thứ Hai (次二)」代表星期一！星期二叫做「Thứ Ba (次三)」，星期三是「Thứ Tư (次四)」，依序往後推算一個數字，直到星期天叫做「Chủ Nhật (主日)」！',
        proTipEn: '💡 Weekday Shift Rule: Monday is "Thứ Hai" (2nd order), Tuesday is "Thứ Ba", and Sunday is "Chủ Nhật". Never say "Thứ Một" or "Thứ Tám"!'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '越南一週七天序數命名邏輯',
          content: '越語受天主教歷法引進影響，將主日 (Chủ Nhật) 視為第一天，因此工作日第一天（星期一）順延成為第二個日子，故稱「Thứ Hai」。此外，星期三必須說「Thứ Tư」而不是「Thứ Bốn」。'
        },
        {
          title: '時間長度與時間點的介系詞搭配',
          content: '表達停留長度直接用「trong [時間]」(在...內)，例如「trong 2 tuần」(在兩週內)；表達特定時間點用「vào lúc [幾點]」(在...點鐘)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Chủ Nhật', han: '主日', zh: '星期日 / 週日' },
        { viet: 'Thời hạn', han: '時限', zh: '期限 / 效期' },
        { viet: 'Dự định', han: '預定', zh: '預計 / 打算' },
        { viet: 'Lưu trú', han: '留住', zh: '停留居留' },
        { viet: 'Thời gian', han: '時間', zh: '時間' },
        { viet: 'Tương lai', han: '未來', zh: '將來 / 未來' }
      ],
      regionalDifferences: '北越講「星期天」有時保留天主教古音「Chúa Nhật」；詢問時間時，南越口語常講「Mấy giờ rồi nè?」，北越常講「Mấy giờ rồi ạ?」。月份方面，一月在正式場合可稱「Tháng Giêng」(正月)，十二月稱「Tháng Chạp」(臘月)。'
    },
    dialogues: [
      {
        id: 'dialogue_time_1',
        titleZh: '機場海關人員詢問入境目的與停留天數',
        titleEn: 'Immigration Officer Inquiring Purpose & Duration of Stay',
        lines: [
          { speaker: 'A (Hải quan)', viet: 'Chào anh, anh đến Việt Nam với mục đích gì?', zh: '你好先生，你來到越南的目的是什麼？', en: 'Hello, what is the purpose of your visit to Vietnam?' },
          { speaker: 'B (Hành khách)', viet: 'Dạ, tôi đến công tác và khảo sát thị trường ạ.', zh: '報告長官，我來出差出巡並考察市場。', en: 'I am here for business trip and market survey.' },
          { speaker: 'A (Hải quan)', viet: 'Anh dự định ở lại Việt Nam bao lâu?', zh: '你預計在越南停留多久呢？', en: 'How long do you plan to stay in Vietnam?' },
          { speaker: 'B (Hành khách)', viet: 'Tôi ở lại hai tuần, ngày 28 tháng này tôi sẽ bay về.', zh: '我停留兩週，這個月28號我就會搭機回國。', en: 'I stay for two weeks, I will fly back on the 28th of this month.' },
          { speaker: 'A (Hải quan)', viet: 'Được rồi, chúc anh có chuyến công tác tốt đẹp!', zh: '好的，祝你出差順利愉快！', en: 'Alright, wish you a successful business trip!' }
        ]
      },
      {
        id: 'dialogue_time_2',
        titleZh: '與越南合作夥伴相約下週會議時間',
        titleEn: 'Scheduling Next Week\'s Meeting with Local Partners',
        lines: [
          { speaker: 'A (Đối tác)', viet: 'Anh Minh ơi, tuần sau Thứ mấy anh rảnh để mình họp dự án?', zh: '阿明哥，下週星期幾你有空我們開會討論專案？', en: 'Mr. Minh, which day next week are you free for our meeting?' },
          { speaker: 'B (Minh)', viet: 'Thứ Ba hoặc Thứ Năm tuần sau anh đều rảnh.', zh: '下週二或下週四我都有空。', en: 'Next Tuesday or Thursday I am both free.' },
          { speaker: 'A (Đối tác)', viet: 'Vậy mình chốt sáng Thứ Ba lúc 10 giờ tại văn phòng em nhé!', zh: '那我們敲定下週二早上10點在我們辦公室見囉！', en: 'Then let us confirm next Tuesday 10:00 AM at my office!' },
          { speaker: 'B (Minh)', viet: 'Nhất trí luôn, sáng Thứ Ba tuần sau gặp em nhé!', zh: '完全同意，下週二早上見囉！', en: 'Totally agree, see you next Tuesday morning!' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'time_fc_1', viet: 'Thứ Hai', zh: '星期一 (一週的第二天)', en: 'Monday', hanViet: '次二', hintZh: '越南語星期從「次二」起算。', toneType: 'ngang' },
      { id: 'time_fc_2', viet: 'Thứ Tư', zh: '星期三 (注意用 Tư 而非 Bốn)', en: 'Wednesday', hanViet: '次四', hintZh: '星期三不能說 Thứ Bốn。', toneType: 'ngang' },
      { id: 'time_fc_3', viet: 'Thứ Bảy', zh: '星期六 / 週六', en: 'Saturday', hanViet: '次七', hintZh: '週末假期的第一天。', toneType: 'hoi' },
      { id: 'time_fc_4', viet: 'Chủ Nhật', zh: '星期日 / 週日', en: 'Sunday', hanViet: '主日', hintZh: '星期天專屬單字，切勿說 Thứ Tám。', toneType: 'nang' },
      { id: 'time_fc_5', viet: 'Tháng Mười Hai', zh: '十二月', en: 'December', hanViet: '月十二', hintZh: '一年最後一個月份。', toneType: 'ngang' },
      { id: 'time_fc_6', viet: 'Hôm nay', zh: '今天 / 本日', en: 'Today', hanViet: '純越今日', hintZh: '日常生活最高頻時間詞。', toneType: 'ngang' },
      { id: 'time_fc_7', viet: 'Ngày mai', zh: '明天 / 翌日', en: 'Tomorrow', hanViet: '純越翌日', hintZh: '約定未來時段必備詞彙。', toneType: 'huyen' },
      { id: 'time_fc_8', viet: 'Bao lâu', zh: '多久時間？', en: 'How long?', hanViet: '純越多久', hintZh: '詢問停留或耗費時間長度。', toneType: 'ngang' },
      { id: 'time_fc_9', viet: 'Hai tuần', zh: '兩週 / 兩個星期', en: 'Two weeks', hanViet: '二週', hintZh: '入境申報常用停留時間單位。', toneType: 'huyen' },
      { id: 'time_fc_10', viet: 'Bây giờ', zh: '現在 / 目前', en: 'Now / At present', hanViet: '純越此時', hintZh: 'Bây giờ là mấy giờ: 現在幾點。', toneType: 'huyen' }
    ],
    quiz: {
      questionZh: '在越南語中，中文的「星期一」在越語中正確對應的單字是哪一個？',
      questionEn: 'In Vietnamese, what is the correct translation for "Monday"?',
      optionsZh: [
        'A. Thứ Một',
        'B. Thứ Hai',
        'C. Thứ Ba',
        'D. Chủ Nhật'
      ],
      optionsEn: [
        'A. Thứ Một',
        'B. Thứ Hai',
        'C. Thứ Ba',
        'D. Chủ Nhật'
      ],
      answer: 1,
      explainZh: '越南語受天主教主日歷法影響，星期一對應的是「Thứ Hai (第二日)」，越語中絕對沒有「Thứ Một」！',
      explainEn: 'Monday is translated as "Thứ Hai" (the 2nd day). There is no such word as "Thứ Một"!'
    }
  },

  {
    id: 'pricing_bargaining',
    titleZh: '多少錢常見說法',
    titleEn: 'Pricing, Inquiries & Bargaining',
    titleVi: 'Hỏi Giá, Trả Giá & Thanh Toán',
    icon: '💵',
    badgeZh: '購物必修',
    badgeEn: 'Shopping & Bargain',
    color: '#eab308',
    summaryZh: '萬能問價、市場溫和殺價神句、去零頭技術、優惠折扣與多種付款方式（現金/刷卡/QR）。',
    summaryEn: 'Universal price inquiries, gentle bargaining tactics, round-offs, discounts, and payments.',
    quickGuide: {
      taglineZh: '買伴手禮不當冤大頭！享受互動樂趣',
      survivalTable: [
        {
          viet: 'Cái này bao nhiêu tiền vậy chị?',
          zh: '姐姐，這個多少錢呢？(萬能問價句)',
          en: 'Sister, how much is this one?',
          pronunciation: '該 耐 包 紐 錢 歪 機',
          hanViet: 'Bao nhiêu (多少) · Tiền (錢)',
          category: '問價金句'
        },
        {
          viet: 'Bán thế nào vậy anh?',
          zh: '大哥，這個怎麼賣？(水果攤/菜市場道地問法)',
          en: 'How do you sell this, brother?',
          pronunciation: '幫 替 鬧 歪 安',
          hanViet: 'Bán (賣) · Thế nào (如何/怎樣)',
          category: '市場問法'
        },
        {
          viet: 'Đắt quá! Bớt chút được không?',
          zh: '太貴了！可以算便宜一點嗎？(殺價必備)',
          en: 'Too expensive! Can you reduce the price a bit?',
          pronunciation: '達 誇！波 祝 諾 空',
          hanViet: 'Đắt (貴) · Bớt (減價/讓步)',
          category: '請求打折'
        },
        {
          viet: 'Có giảm giá không em?',
          zh: '有打折 / 優惠折扣嗎？',
          en: 'Is there any discount?',
          pronunciation: '郭 染 價 空 恩',
          hanViet: 'Giảm giá (減價/打折)',
          category: '詢問折扣'
        },
        {
          viet: 'Tôi mua hai cái, tính chẵn một trăm nghìn (100k) nhé!',
          zh: '我買兩個，湊整數算我十萬盾喔！',
          en: 'I buy two, round it down to 100k VND please!',
          pronunciation: '短 木 海 該，定 產 木 展 迎 壓',
          hanViet: 'Tính chẵn (算整數/去零頭)',
          category: '去零湊整'
        },
        {
          viet: 'Tôi có thể thanh toán bằng thẻ tín dụng không?',
          zh: '我可以用信用卡付款嗎？',
          en: 'Can I pay by credit card?',
          pronunciation: '短 郭 體 清 算 榜 體 信 用 空',
          hanViet: 'Thanh toán (清算/付款) · Thẻ tín dụng (信用卡)',
          category: '信用卡付款'
        },
        {
          viet: 'Cho tôi quét mã VietQR chuyển khoản nhé.',
          zh: '讓我掃 VietQR 轉帳付款喔。',
          en: 'Let me scan VietQR code to pay.',
          pronunciation: '桌 短 貴 碼 VietQR 轉 款 壓',
          hanViet: 'Quét mã (掃碼) · Chuyển khoản (轉帳)',
          category: '掃碼支付'
        },
        {
          viet: 'Cho tôi xin hóa đơn đỏ / phiếu thu.',
          zh: '請給我加值稅紅發票 / 收據。',
          en: 'Please provide me with a VAT invoice / receipt.',
          pronunciation: '桌 短 心 化 單 朵 / 票 收',
          hanViet: 'Hóa đơn đỏ (紅發票/VAT發票)',
          category: '索取發票'
        }
      ],
      sentencePatterns: [
        {
          pattern: '[Tên món đồ] này bao nhiêu tiền một [Đơn vị: cái / ký / ly]?',
          meaningZh: '這個 [物品] 一 [單位：個/公斤/杯] 多少錢？',
          example: 'Xoài này bao nhiêu tiền một ký?',
          exampleZh: '這個芒果一公斤多少錢？'
        },
        {
          pattern: 'Nếu tôi mua [Số lượng] cái thì có bớt không?',
          meaningZh: '如果我買 [數量] 個的話，能算便宜一點嗎？',
          example: 'Nếu tôi mua ba cái thì có bớt không chị?',
          exampleZh: '如果我買三個的話，姐姐能算便宜點嗎？'
        },
        {
          pattern: 'Tổng cộng hết bao nhiêu tiền ạ?',
          meaningZh: '全部總共一共多少錢呢？',
          example: 'Tất cả của tôi hết bao nhiêu tiền ạ?',
          exampleZh: '我的所有東西總共一共多少錢呢？'
        }
      ],
      culturalDosAndDonts: {
        dos: '在觀光夜市（如濱城市場、會安古鎮）購物殺價時保持親切微笑，通常以 7~8 折開口最得體；若買多件可主動要求「Tính chẵn」(去零頭湊整數)。',
        donts: '清晨早晨店家開門時切忌「只問不買」或大刀砍價，越南傳統相信第一位客人的交易（Mở hàng，開市）會決定整天的運勢。',
        proTipZh: '💡 數字「K」的口語魔力：在越南大街小巷、咖啡廳菜單上，幾乎所有標價都會省略後面的三個零 (000)，用「k」代替！例如「50k」就是 50,000 盾（約 65 台幣）；「150k」就是 150,000 盾。看懂「k」字直接暢通無阻！',
        proTipEn: '💡 The "k" notation: In Vietnam, prices drop the three zeros (000) using "k". 50k = 50,000 VND (~$2 USD). Always count your zeros!'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '「Bao nhiêu (多少)」與「Mấy (幾)」的數量區別',
          content: '詢問預估數量或金額超過 10 時，必須用「Bao nhiêu」(如 Bao nhiêu tiền)；而詢問 10 以內的小額數量或序數時才用「Mấy」(如 Mấy cái, Mấy giờ)。'
        },
        {
          title: '動詞「Bớt (減價)」與「Giảm (打折)」的口語溫和語感',
          content: '在菜市場傳統攤販，直接說「Bớt chút được không?」(減一點好嗎) 最具人情味；在連鎖商場或店鋪，則使用「Có giảm giá không?」(有特價折扣嗎)。'
        }
      ],
      hanVietCognates: [
        { viet: 'Thanh toán', han: '清算', zh: '結帳 / 付款' },
        { viet: 'Giảm giá', han: '減價', zh: '打折 / 降價' },
        { viet: 'Hóa đơn', han: '貨單', zh: '發票 / 收據' },
        { viet: 'Tín dụng', han: '信用', zh: '信用卡之信用' },
        { viet: 'Miễn phí', han: '免費', zh: '不用錢 / 免費' },
        { viet: 'Tiền mặt', han: '錢物/現錢', zh: '現金' }
      ],
      regionalDifferences: '北越講「千」一律說「Nghìn」；南越講「千」一律說「Ngàn」。所以在西貢攤販報價「Hai mươi ngàn」就是 2 萬盾；在河內報價「Hai mươi nghìn」完全相同。鈔票顏色注意：50萬盾 (500k) 與 2萬盾 (20k) 都是藍色調，付款時請看清零的個數！'
    },
    dialogues: [
      {
        id: 'dialogue_price_1',
        titleZh: '傳統市場購買熱帶水果與溫和議價',
        titleEn: 'Buying Tropical Fruits & Polite Bargaining at Market',
        lines: [
          { speaker: 'A (Khách)', viet: 'Chị ơi, sầu riêng này bán thế nào một ký vậy chị?', zh: '姐姐，這個榴槤一公斤怎麼賣呀？', en: 'Sister, how much is this durian per kilo?' },
          { speaker: 'B (Bán hoa quả)', viet: 'Sầu riêng Ri6 bao ngon, một trăm hai mươi nghìn (120k) một ký em nhé.', zh: '保證甜香好吃的 Ri6 榴槤，一公斤12萬盾喔。', en: 'Guaranteed delicious Ri6 durian, 120k VND per kilo dear.' },
          { speaker: 'A (Khách)', viet: 'Đắt thế chị! Em mua nguyên một quả to, bớt cho em còn 100k một ký được không?', zh: '好貴呀姐！我買一整顆大顆的，算我一公斤10萬盾好嗎？', en: 'Quite pricey sister! I buy a whole big one, can you do 100k per kilo?' },
          { speaker: 'B (Bán hoa quả)', viet: 'Thôi mở hàng cho em, quả này 3 ký tính chẵn ba trăm nghìn (300k) nhé!', zh: '好吧算你開市價，這顆3公斤算整數30萬盾賣你！', en: 'Alright special opening price, this one is 3kg, round to 300k VND!' },
          { speaker: 'A (Khách)', viet: 'Dạ tuyệt quá, cảm ơn chị nhiều! Em trả tiền mặt nhé.', zh: '太棒了，非常感謝姐姐！我付現金喔。', en: 'Wonderful, thank you so much! I pay with cash.' }
        ]
      },
      {
        id: 'dialogue_price_2',
        titleZh: '精品服飾店詢問折扣與電子掃碼付款',
        titleEn: 'Asking for Discounts & Paying via VietQR at Boutique',
        lines: [
          { speaker: 'A (Khách)', viet: 'Em ơi, chiếc áo sơ mi lụa này có đang được giảm giá không?', zh: '店員，這件絲綢襯衫現在有在做特價打折嗎？', en: 'Excuse me, is this silk shirt on discount right now?' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ có ạ! Cửa hàng đang có chương trình giảm 15% cho khách mua từ 2 món.', zh: '有的！店內現在有任選2件享85折（減15%）的活動。', en: 'Yes! We have a 15% discount when you purchase 2 items.' },
          { speaker: 'A (Khách)', viet: 'Thế để anh chọn thêm một cái cà vạt nữa nhé.', zh: '那讓哥再多挑一條領帶湊兩件吧。', en: 'Then let me pick a tie as well.' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ tổng cộng của anh sau giảm là 450 nghìn đồng ạ. Anh thanh toán thế nào ạ?', zh: '好的，折價後總共是45萬越盾。您想要如何付款呢？', en: 'Your total after discount is 450k VND. How would you like to pay?' },
          { speaker: 'A (Khách)', viet: 'Anh quét mã VietQR trên quầy thu ngân nhé.', zh: '我直接掃櫃台上的 VietQR 條碼轉帳喔。', en: 'I will scan the VietQR code on the cash register.' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'price_fc_1', viet: 'Bao nhiêu tiền', zh: '多少錢？', en: 'How much money?', hanViet: '純越多少+錢', hintZh: '問價必學的核心黃金萬用句。', toneType: 'huyen' },
      { id: 'price_fc_2', viet: 'Đắt quá', zh: '太貴了！', en: 'Too expensive!', hanViet: '純越貴+過', hintZh: '殺價時的第一句自然驚嘆。', toneType: 'sac' },
      { id: 'price_fc_3', viet: 'Bớt chút đi', zh: '算便宜一點吧！', en: 'Give a little discount!', hanViet: '純越減+少+去', hintZh: '溫和請求老闆打折讓步。', toneType: 'sac' },
      { id: 'price_fc_4', viet: 'Giảm giá', zh: '減價 / 打折促銷', en: 'Discount / On sale', hanViet: '減價', hintZh: '商場與店家特價常用標示。', toneType: 'hoi' },
      { id: 'price_fc_5', viet: 'Thanh toán', zh: '結算 / 結帳付款', en: 'To settle the bill / pay', hanViet: '清算', hintZh: '正式與櫃台結帳用詞。', toneType: 'sac' },
      { id: 'price_fc_6', viet: 'Tiền mặt', zh: '現金 / 現鈔', en: 'Cash', hanViet: '現錢/錢物', hintZh: '傳統市場多收現金。', toneType: 'nang' },
      { id: 'price_fc_7', viet: 'Quét mã QR', zh: '掃描 QR Code 付款', en: 'Scan QR Code', hanViet: '純越掃碼', hintZh: '越南如今極度普及的無現金支付。', toneType: 'sac' },
      { id: 'price_fc_8', viet: 'Hóa đơn', zh: '發票 / 收據', en: 'Invoice / Receipt', hanViet: '貨單', hintZh: '報帳必備索取單據。', toneType: 'ngang' },
      { id: 'price_fc_9', viet: 'Miễn phí', zh: '完全免費', en: 'Free of charge', hanViet: '免費', hintZh: '不用付錢即可享有。', toneType: 'sac' },
      { id: 'price_fc_10', viet: 'Tính chẵn', zh: '算整數 / 去零頭', en: 'Round down the number', hanViet: '算+純越整數', hintZh: '市場買菜去尾數絕招。', toneType: 'nga' }
    ],
    quiz: {
      questionZh: '在傳統市場挑選伴手禮或水果，想要向老闆親切微笑請求算便宜一點，最實用的短語是？',
      questionEn: 'At a traditional market, what is the best friendly phrase to ask for a small discount?',
      optionsZh: [
        'A. Bớt chút được không?',
        'B. Tôi không có tiền',
        'C. Bán đắt quá đi',
        'D. Cho tôi cái hóa đơn'
      ],
      optionsEn: [
        'A. Bớt chút được không?',
        'B. Tôi không có tiền',
        'C. Bán đắt quá đi',
        'D. Cho tôi cái hóa đơn'
      ],
      answer: 0,
      explainZh: '「Bớt chút được không?」(減一點好嗎？) 是全越南通用的溫和殺價神句，親切有禮不失尊重！',
      explainEn: '"Bớt chút được không?" (Can you discount a bit?) is the universal, polite bargaining phrase throughout Vietnam!'
    }
  },

  {
    id: 'numbers_scale',
    titleZh: '數字、量詞與大數',
    titleEn: 'Numbers, Units & Large Currency',
    titleVi: 'Số Đếm, Lượng Từ & Đơn Vị Tiền Tệ',
    icon: '🔢',
    badgeZh: '計算基石',
    badgeEn: 'Math & Currency',
    color: '#ec4899',
    summaryZh: '掌握 0 到十億數字、特殊變音規則（mốt, tư, lăm, mươi）、量詞搭配與百萬越南盾秒算。',
    summaryEn: 'Master 0 to billions, tricky phonetic rules (mốt, tư, lăm, mươi), classifiers, and large VND math.',
    quickGuide: {
      taglineZh: '攻克百萬越南盾換算，不再被一堆「0」搞得頭昏眼花',
      survivalTable: [
        {
          viet: 'Không, một, hai, ba, bốn, năm, sáu, bảy, tám, chín, mười.',
          zh: '0、1、2、3、4、5、6、7、8、9、10。',
          en: '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.',
          pronunciation: '空，木，海，巴，奔，南，騷，擺，丹，敬，妹',
          hanViet: '基礎基數詞彙 (0 至 10)',
          category: '個位數'
        },
        {
          viet: 'Mười một, mười hai, ..., mười lăm, ..., mười chín.',
          zh: '11、12、...、15 (注意變音 lăm)、...、19。',
          en: '11, 12, ..., 15 (notice lăm), ..., 19.',
          pronunciation: '妹 木，妹 海，...，妹 藍，...，妹 敬',
          hanViet: '十幾 (15 必須讀 mười lăm)',
          category: '十位數變音'
        },
        {
          viet: 'Hai mươi mốt (21), ba mươi tư (34), năm mươi lăm (55).',
          zh: '21 (注意變音 mốt)、34 (注意變音 tư)、55 (注意變音 lăm)。',
          en: '21 (notice mốt), 34 (notice tư), 55 (notice lăm).',
          pronunciation: '海 妹 木，巴 妹 德，南 妹 藍',
          hanViet: '三大核心變音字：mốt (1), tư (4), lăm (5)',
          category: '兩位數變音'
        },
        {
          viet: 'Một trăm (100), một nghìn / một ngàn (1.000).',
          zh: '一百 (100)、一千 (1.000，北越 nghìn / 南越 ngàn)。',
          en: 'One hundred (100), one thousand (1,000).',
          pronunciation: '木 展，木 迎 / 木 昂',
          hanViet: 'Trăm (百) · Nghìn/Ngàn (千)',
          category: '百與千'
        },
        {
          viet: 'Một triệu (1.000.000), mười triệu (10.000.000).',
          zh: '一百萬 (1.000.000 盾，約 1,300 台幣)、一千萬 (10.000.000)。',
          en: 'One million (1,000,000), ten million (10,000,000).',
          pronunciation: '木 昭，妹 昭',
          hanViet: 'Triệu (兆/在現代越語中代表百萬)',
          category: '百萬級大數'
        },
        {
          viet: 'Một tỷ (1.000.000.000 đồng).',
          zh: '十億 (1.000.000.000 盾，約 130 萬台幣)。',
          en: 'One billion VND (~$40,000 USD).',
          pronunciation: '木 梯',
          hanViet: 'Tỷ (秭/十億)',
          category: '十億級大數'
        },
        {
          viet: 'Cái (個/件), con (隻/動物), chai (瓶), ly (杯), bát / chén (碗).',
          zh: '常用量詞：cái (個/東西), con (隻/動物), chai (瓶), ly (杯), bát/chén (碗)。',
          en: 'Classifiers: cái (objects), con (animals/living), chai (bottle), ly (glass), bát/chén (bowl).',
          pronunciation: '該，昆，齋，離，霸/尖',
          hanViet: '越語核心量詞體系',
          category: '常用量詞'
        },
        {
          viet: 'Đổi tiền ở đâu tỷ giá tốt nhất?',
          zh: '在哪裡換錢匯率最好？',
          en: 'Where can I exchange money with the best rate?',
          pronunciation: '隊 錢 額 投 梯 價 多的 敬',
          hanViet: 'Đổi tiền (兌錢/換錢) · Tỷ giá (比價/匯率)',
          category: '外幣兌換'
        }
      ],
      sentencePatterns: [
        {
          pattern: '[Số đếm] + [Lượng từ] + [Danh từ].',
          meaningZh: '[數字] + [量詞] + [名詞]（越語量詞黃金結構）。',
          example: 'Cho tôi hai ly cà phê và ba ổ bánh mì.',
          exampleZh: '給我兩杯咖啡和三個法國麵包。'
        },
        {
          pattern: 'Số điện thoại của bạn là bao nhiêu?',
          meaningZh: '你的電話號碼是多少？',
          example: 'Số điện thoại của tôi là 0903 123 456.',
          exampleZh: '我的電話號碼是 0903 123 456。'
        },
        {
          pattern: 'Số tiền này quy đổi ra tiền Đài Loan là bao nhiêu?',
          meaningZh: '這筆金額折算成新台幣是多少錢呢？',
          example: '500k đồng quy đổi ra khoảng 650 Đài tệ.',
          exampleZh: '50萬越盾換算出來大約是650新台幣。'
        }
      ],
      culturalDosAndDonts: {
        dos: '速算台幣小撇步：越南盾去掉後面 3 個零，再乘以 1.3，就是大約的新台幣金額！（例：100,000 盾 → 100 × 1.3 ≈ 130 台幣）；付錢時認真看清楚零的個數。',
        donts: '切忌把 21 讀成「Hai mươi một」（必須讀 Hai mươi mốt）；不要把 25 讀成「Hai mươi năm」（必須讀 Hai mươi lăm）。',
        proTipZh: '💡 漢越詞大驚喜：越語的「Triệu」漢字寫作「兆」，但在越南數學單位中，「Triệu」精準代表的是「百萬 (Million, 10^6)」！而「Tỷ (秭)」代表的是「十億 (Billion, 10^9)」！記住這兩個單位，看財報與買房秒懂！',
        proTipEn: '💡 Currency Units: "Triệu" means million (10^6), and "Tỷ" means billion (10^9). Remove 3 zeros and multiply by ~1.3 for TWD or divide by 25 for USD.'
      }
    },
    deepLessons: {
      grammarExploration: [
        {
          title: '四大不可違背的數字變音鐵律',
          content: '1. 數字 1 (Một)：在 21, 31, 41...91 時，一律變音為「Mốt」以避開「Một」的重音沉降。\\n2. 數字 4 (Bốn)：在 24, 34...94 時，正式書面與口語推薦變音為漢越音「Tư」(四)。\\n3. 數字 5 (Năm)：在 15, 25, 35...95 時，一律變音為「Lăm」以避免與「Năm (年/歲)」搞混。\\n4. 數字 10 (Mười)：在 20, 30...90 時，調號變為平聲「Mươi」(無調)。'
        },
        {
          title: '越南語量詞「Cái」與「Con」的靈性分野',
          content: '「Con」通常用於具有生命力、會活動的事物（如動物 Con chó, Con mèo，甚至會流動的河流 Con sông，鋒利的刀子 Con dao）；而「Cái」則專用於無生命的靜態器物（Cái bàn 桌子, Cái áo 衣服）。'
        }
      ],
      hanVietCognates: [
        { viet: 'Triệu', han: '兆', zh: '百萬 (1.000.000)' },
        { viet: 'Tỷ', han: '秭', zh: '十億 (1.000.000.000)' },
        { viet: 'Tỷ giá', han: '比價', zh: '匯率' },
        { viet: 'Đơn vị', han: '單位', zh: '單位' },
        { viet: 'Số lượng', han: '數量', zh: '數量' },
        { viet: 'Phần trăm', han: '分+純越百', zh: '百分比 (%)' }
      ],
      regionalDifferences: '北越人習慣說「Một nghìn」，南越人習慣說「Một ngàn」；在電話號碼朗讀時，數字 0 北越習慣唸「Không」，南越有時會唸「Zê-rô (Zero)」；數字 7 (Bảy) 南越口語有時發音聽起來像「Bảy/Bẩy」極輕快。'
    },
    dialogues: [
      {
        id: 'dialogue_num_1',
        titleZh: '銀樓 (Tiệm vàng) 換匯與計算匯率',
        titleEn: 'Exchanging Currency & Calculating Exchange Rates at Gold Shop',
        lines: [
          { speaker: 'A (Khách)', viet: 'Chị ơi, hôm nay 100 Đô la Mỹ (USD) đổi được bao nhiêu tiền Việt vậy chị?', zh: '姐姐，今天 100 美元可以換多少越南盾呢？', en: 'Sister, how much VND can I get for 100 USD today?' },
          { speaker: 'B (Chủ tiệm vàng)', viet: 'Hôm nay tỷ giá là 25 nghìn 400. 100 Đô đổi được hai triệu năm trăm bốn mươi nghìn (2.540.000đ) em nhé.', zh: '今天匯率是 25,400。100 美元可換 254 萬越盾喔。', en: 'Today\'s rate is 25,400. 100 USD gets you 2,540,000 VND.' },
          { speaker: 'A (Khách)', viet: 'Tỷ giá tốt quá! Em muốn đổi 500 Đô la Mỹ.', zh: '匯率真好！我想兌換 500 美元。', en: 'Great rate! I would like to exchange 500 USD.' },
          { speaker: 'B (Chủ tiệm vàng)', viet: 'Của em 500 Đô là mười hai triệu bảy trăm nghìn (12.700.000đ) nhé. Em đếm lại tiền nha.', zh: '你的 500 美元總共是一千兩百七十萬盾。你重數一下錢喔。', en: 'Your 500 USD is 12,700,000 VND. Please recount the bills.' },
          { speaker: 'A (Khách)', viet: 'Dạ đủ rồi ạ, cảm ơn chị!', zh: '好的足夠了，謝謝姐姐！', en: 'Yes exact amount, thank you sister!' }
        ]
      },
      {
        id: 'dialogue_num_2',
        titleZh: '飲料店運用量詞與數字點多杯外帶',
        titleEn: 'Using Classifiers & Numbers for Takeaway Beverage Order',
        lines: [
          { speaker: 'A (Khách)', viet: 'Em ơi, cho anh đặt ba ly trà sữa trân châu và hai chai nước cam ép.', zh: '店員，我要點三杯珍珠奶茶和兩瓶現榨柳橙汁。', en: 'Excuse me, I want to order 3 glasses of boba milk tea and 2 bottles of orange juice.' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ, ba ly trà sữa và hai chai nước cam. Tổng cộng là một trăm bốn mươi lăm nghìn (145k) ạ.', zh: '好的，三杯奶茶和兩瓶柳橙汁。總共是一十四萬五千越盾。', en: 'Yes, 3 milk teas and 2 bottles of orange juice. Total is 145k VND.' },
          { speaker: 'A (Khách)', viet: 'Cho anh gửi 150k tiền mặt, khỏi cần thối lại 5k nhé!', zh: '給你15萬現金，不用找5千零錢囉！', en: 'Here is 150k cash, keep the 5k change!' },
          { speaker: 'B (Nhân viên)', viet: 'Dạ em cảm ơn anh nhiều, chúc anh ngon miệng!', zh: '哇非常感謝大哥，祝您享用愉快！', en: 'Thank you so much brother, enjoy your drinks!' }
        ]
      }
    ],
    flashcardDeck: [
      { id: 'num_fc_1', viet: 'Một triệu', zh: '一百萬 (1.000.000 盾)', en: 'One million', hanViet: '一兆', hintZh: '越南基本工資約 4~5 百萬盾。', toneType: 'nang' },
      { id: 'num_fc_2', viet: 'Một tỷ', zh: '十億 (1.000.000.000 盾)', en: 'One billion', hanViet: '一秭', hintZh: '買房與大額企業投資單位。', toneType: 'hoi' },
      { id: 'num_fc_3', viet: 'Hai mươi mốt', zh: '二十一 (注意 1 讀 mốt)', en: 'Twenty-one', hanViet: '二+十+一', hintZh: '逢 1 變音為 mốt 的鐵律。', toneType: 'sac' },
      { id: 'num_fc_4', viet: 'Mười lăm', zh: '十五 (注意 5 讀 lăm)', en: 'Fifteen', hanViet: '十+五', hintZh: '逢 5 變音為 lăm 的鐵律。', toneType: 'ngang' },
      { id: 'num_fc_5', viet: 'Ba mươi tư', zh: '三十四 (4 推薦讀 tư)', en: 'Thirty-four', hanViet: '三+十+四', hintZh: '漢越數字四 (tư) 的雅稱。', toneType: 'ngang' },
      { id: 'num_fc_6', viet: 'Một ký', zh: '一公斤 (Kilogram)', en: 'One kilogram', hanViet: '公斤簡稱', hintZh: '市場買菜水果最核心計量單位。', toneType: 'sac' },
      { id: 'num_fc_7', viet: 'Một ly', zh: '一杯 (杯裝飲料)', en: 'A glass / A cup', hanViet: '杯之量詞', hintZh: '點咖啡、冰茶用量詞。', toneType: 'ngang' },
      { id: 'num_fc_8', viet: 'Một chai', zh: '一瓶 (瓶裝飲料)', en: 'A bottle', hanViet: '瓶之量詞', hintZh: '點礦泉水、啤酒用量詞。', toneType: 'ngang' },
      { id: 'num_fc_9', viet: 'Tỷ giá', zh: '貨幣匯率', en: 'Exchange rate', hanViet: '比價', hintZh: '外幣兌換不可或缺。', toneType: 'hoi' },
      { id: 'num_fc_10', viet: 'Đổi tiền', zh: '兌換貨幣 / 換錢', en: 'To exchange money', hanViet: '兌錢', hintZh: '在銀樓或銀行換匯動作。', toneType: 'hoi' }
    ],
    quiz: {
      questionZh: '在越南語數字讀法中，數字「25」與「21」的正確發音分別是？',
      questionEn: 'In Vietnamese number pronunciation, what are the correct forms of "25" and "21"?',
      optionsZh: [
        'A. Hai mươi năm & Hai mươi một',
        'B. Hai mươi lăm & Hai mươi mốt',
        'C. Hai mươi lăm & Hai mươi một',
        'D. Hai năm & Hai một'
      ],
      optionsEn: [
        'A. Hai mươi năm & Hai mươi một',
        'B. Hai mươi lăm & Hai mươi mốt',
        'C. Hai mươi lăm & Hai mươi một',
        'D. Hai năm & Hai một'
      ],
      answer: 1,
      explainZh: '在兩位數中，個位數的 5 必須變音為「lăm」，個位數的 1 必須變音為「mốt」，故為「Hai mươi lăm」與「Hai mươi mốt」！',
      explainEn: 'In compound numbers, 5 becomes "lăm" and 1 becomes "mốt", giving "Hai mươi lăm" and "Hai mươi mốt"!'
    }
  }
];
