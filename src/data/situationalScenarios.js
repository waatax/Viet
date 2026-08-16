/**
 * Comprehensive 16-Scenario Situational Vietnamese Dataset (16大實戰情境全能越語數據庫 - 雙軌深度對話版)
 * Standardized for Taiwan learners (ZH Mode) & Global English track (EN Mode)
 * Includes Dual Dialogue Sections (Dialogue 1: Standard & Dialogue 2: Advanced/Extension), 
 * Interactive role-play steps, vocabulary decks, and cultural advice.
 */

export const scenarioCategories = [
  { id: 'all', labelZh: '全部情境 (16個)', labelEn: 'All Scenarios (16)' },
  { id: 'shopping', labelZh: '🛍️ 高頻購物', labelEn: '🛍️ Shopping & Markets' },
  { id: 'dining', labelZh: '🍜 餐飲美食', labelEn: '🍜 Food & Dining' },
  { id: 'travel', labelZh: '✈️ 旅遊交通', labelEn: '✈️ Travel & Transport' },
  { id: 'daily', labelZh: '🏪 日常生活', labelEn: '🏪 Daily Life' },
  { id: 'health', labelZh: '💊 醫療健康', labelEn: '💊 Health & Medical' },
  { id: 'business', labelZh: '💼 職場商務', labelEn: '💼 Business & Work' },
  { id: 'emergency', labelZh: '🚨 緊急求助', labelEn: '🚨 Emergency & Police' }
];

export const situationalScenarios = [
  // 1. 咖啡廳點咖啡
  {
    id: 'cafe',
    category: 'dining',
    tagZh: '咖啡廳必備',
    tagEn: 'Cafe Essential',
    icon: '☕',
    image: 'cafe.jpg',
    titleZh: '咖啡廳點經典冰奶咖與甜度冰量',
    titleEn: 'Ordering Vietnamese Iced Coffee at a Cafe',
    titleVi: 'Gọi Cà Phê Tại Quán Cà Phê',
    summaryZh: '學習點最道地的 Cà phê sữa đá (冰奶咖)、Bạc xỉu (白咖啡/多奶) 以及調整甜度冰量、尋找插座 Wi-Fi 與外帶加點。',
    summaryEn: 'Order authentic Vietnamese Iced Milk Coffee, Bạc xỉu, adjust sweetness/ice, ask for Wi-Fi/sockets, and get takeaway.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：經典點餐與甜度冰量調整',
        titleVi: 'Hội Thoại 1: Gọi Món Chuẩn & Chỉnh Đường Đá',
        titleEn: 'Dialogue 1: Classic Ordering & Customization',
        summaryZh: '學習點最熱門的煉乳冰咖啡與白咖啡，指定少糖多冰與內用。',
        summaryEn: 'Order signature iced milk coffee and bac xiu with custom sweetness and ice.',
        lines: [
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ xin chào anh! Anh muốn uống gì ạ?',
            zh: '您好！請問哥想喝點什麼呢？',
            en: 'Hello sir! What would you like to drink?',
            northTip: '北越常禮貌用「ạ」結尾，語氣溫和。',
            southTip: '南越開頭常親切帶「Dạ / Dạ em chào anh」'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh một ly cà phê sữa đá và một ly bạc xỉu nhé.',
            zh: '給我一杯冰牛奶咖啡和一杯白咖啡（多奶）。',
            en: 'Please give me one iced milk coffee and one bac xiu (white coffee).',
            northTip: '北越有時用「cốc」表示杯子，南越一律用「ly」。',
            southTip: 'Bạc xỉu 是南越西貢極具代表性的多奶甜咖啡。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Anh uống tại đây hay mang về ạ? Có cần giảm đường không anh?',
            zh: '哥是在這裡喝還是外帶？需要減糖嗎？',
            en: 'For here or to go sir? Do you want less sugar?',
            northTip: '外帶北越常說「mang về」，南越說「mang đi」。',
            southTip: '越式咖啡非常甜，不習慣甜可主動說「ít ngọt」或「ít đường」。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Anh uống tại đây. Cho anh ít đường và nhiều đá một chút nhé.',
            zh: '我在這裡喝。幫我微糖（少糖），冰塊多放一點喔。',
            en: 'For here please. Give me less sugar and extra ice.',
            northTip: '「ít đường」= 少糖；「ít ngọt」= 微甜。',
            southTip: '「nhiều đá」= 多冰，南越炎熱天氣必備說法。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ được ạ. Của anh tổng cộng năm mươi lăm nghìn đồng.',
            zh: '好的。您的總共是五萬五千越南盾 (55,000 VND)。',
            en: 'Sure. Your total is 55,000 VND.',
            northTip: '55,000 讀作「Năm mươi lăm nghìn」。',
            southTip: '南越口語常讀「Năm mươi lăm ngàn」。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：詢問插座 Wi-Fi、加點蛋咖啡與打包外帶',
        titleVi: 'Hội Thoại 2: Hỏi Ổ Cắm, Wi-Fi, Cà Phê Trứng & Mang Về',
        titleEn: 'Dialogue 2: Asking for Socket, Wi-Fi & Egg Coffee',
        summaryZh: '工作學習必備：尋找筆電插座座位、索取 Wi-Fi 密碼、加點河內著名蛋咖啡並打包外帶。',
        summaryEn: 'Workstation setup: find power sockets, ask for Wi-Fi pass, order egg coffee and takeaway.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Em ơi, cho anh hỏi ở đây bàn nào có ổ cắm điện để cắm sạc máy tính không em?',
            zh: '請問這裡哪張桌子有插座可以充筆記型電腦呢？',
            en: 'Excuse me, which table here has power outlets for charging my laptop?',
            northTip: '「ổ cắm điện」= 電源插座；「sạc máy tính」= 筆電充電。',
            southTip: '店員常熱情引導「bàn góc / bàn trong」方便辦公的安靜角落。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ có ạ! Bàn góc bên trong cạnh cửa sổ có hai ổ cắm. Mời anh vào ngồi ạ.',
            zh: '有的！裡面靠窗角落那張桌子有兩個插座，請進去坐喔。',
            en: 'Yes! The corner table by the window has two outlets. Please have a seat inside.',
            northTip: '「cạnh cửa sổ」= 靠窗；「mời anh」= 請哥入座。',
            southTip: '南越常用「mời anh vô ngồi」語氣格外親和。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Mật khẩu Wi-Fi của quán mình là gì vậy em? Có viết ở đâu không?',
            zh: '請問店裡的 Wi-Fi 密碼是多少？有寫在哪裡嗎？',
            en: 'What is the Wi-Fi password of our cafe? Is it written anywhere?',
            northTip: '「Mật khẩu」= 密碼 (漢越詞：密口)。',
            southTip: '南越有時會寫在收據最下方「dưới hóa đơn」。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ mật khẩu Wi-Fi là caphevietnam2026 viết liền không dấu anh nhé.',
            zh: 'Wi-Fi 密碼是 caphevietnam2026 全部小寫連在一起喔哥。',
            en: 'The Wi-Fi password is caphevietnam2026, written all together without spaces sir.',
            northTip: '「viết liền」= 連著寫；「không dấu」= 不帶聲調符號。',
            southTip: '越南咖啡廳 Wi-Fi 普及率極高且通常速度極快。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh gọi thêm một ly cà phê trứng nóng và đóng gói mang về một ly trà đào nhé.',
            zh: '幫我加點一杯熱蛋咖啡，並再打包外帶一杯蜜桃茶喔。',
            en: 'Please also give me one hot egg coffee and pack one peach iced tea to take away.',
            northTip: '「cà phê trứng」= 著名河內蛋咖啡；「trà đào」= 蜜桃茶。',
            southTip: '「đóng gói mang về / mang đi」= 打包外帶。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ vâng ạ, cà phê trứng anh đợi khoảng năm phút em mang ra tận bàn nhé!',
            zh: '好的，熱蛋咖啡請稍等約五分鐘，我幫您直接送到桌上喔！',
            en: 'Yes sir, please wait about 5 minutes for the egg coffee, I will bring it right to your table!',
            northTip: '「tận bàn」= 送到桌邊。',
            southTip: '越式蛋咖啡香濃滑順如卡士達布丁，強烈推薦品嚐。'
          }
        ]
      }
    ],
    dialogues: [], // Backwards compatibility populated below
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '咖啡店員 (Nhân viên)',
      partnerRoleEn: 'Barista (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ xin chào anh! Anh muốn uống gì ạ?',
          partnerPromptZh: '您好！請問哥想喝點什麼呢？',
          partnerPromptEn: 'Hello sir! What would you like to drink?',
          userOptions: [
            {
              id: 'c1_opt1',
              textVi: 'Cho anh một ly cà phê sữa đá nhé.',
              textZh: '給我一杯冰牛奶咖啡。',
              textEn: 'Give me one iced milk coffee please.',
              isCorrect: true,
              feedbackZh: '太棒了！這是最道地且禮貌的點咖啡句型。',
              feedbackEn: 'Perfect! Authentic and polite way to order iced milk coffee.'
            },
            {
              id: 'c1_opt2',
              textVi: 'Tôi muốn ăn phở bò.',
              textZh: '我想吃牛肉河粉。',
              textEn: 'I want to eat beef pho.',
              isCorrect: false,
              feedbackZh: '在咖啡廳點河粉不太合適喔！請選擇咖啡品項。',
              feedbackEn: 'Ordering pho at a cafe is out of place! Please choose coffee.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Anh uống tại đây hay mang về ạ? Có giảm ngọt không anh?',
          partnerPromptZh: '哥在內用還是外帶？要減糖嗎？',
          partnerPromptEn: 'For here or to go? Any sweetness adjustment?',
          userOptions: [
            {
              id: 'c2_opt1',
              textVi: 'Anh uống tại đây, cho anh ít đường nhiều đá nhé.',
              textZh: '我在這裡喝，幫我少糖多冰喔。',
              textEn: 'For here please, less sugar and extra ice.',
              isCorrect: true,
              feedbackZh: '非常好！完整表達了內用、少糖與多冰的需求。',
              feedbackEn: 'Great! Accurately specified dine-in, less sugar, and extra ice.'
            },
            {
              id: 'c2_opt2',
              textVi: 'Bao nhiêu tiền một ký xoài?',
              textZh: '一公斤芒果多少錢？',
              textEn: 'How much for 1kg of mangoes?',
              isCorrect: false,
              feedbackZh: '這是市場買水果的句子喔，請專注於咖啡甜度與內用！',
              feedbackEn: 'This belongs to the fruit market! Please focus on coffee preferences.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Dạ tổng cộng của anh hết năm mươi lăm nghìn đồng ạ.',
          partnerPromptZh: '您的總共是五萬五千越南盾。',
          partnerPromptEn: 'Your total is 55,000 VND.',
          userOptions: [
            {
              id: 'c3_opt1',
              textVi: 'Gửi em tiền nhé. Cảm ơn em!',
              textZh: '給你錢喔。謝謝你！',
              textEn: 'Here is the money. Thank you!',
              isCorrect: true,
              feedbackZh: '禮貌又自然地完成了結帳！',
              feedbackEn: 'Polite and natural completion of payment!'
            },
            {
              id: 'c3_opt2',
              textVi: 'Cứu tôi với, tôi bị mất đồ.',
              textZh: '救我，我東西掉了。',
              textEn: 'Help me, I lost my belongings.',
              isCorrect: false,
              feedbackZh: '這是緊急求助句型，結帳時說「Gửi em tiền」即可！',
              feedbackEn: 'Emergency phrase! Say "Gửi em tiền" for payment.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Cà phê sữa đá', zh: '冰煉乳咖啡', en: 'Iced Milk Coffee' },
      { viet: 'Cà phê đen đá', zh: '冰黑咖啡', en: 'Iced Black Coffee' },
      { viet: 'Bạc xỉu', zh: '白咖啡 (多奶少咖啡)', en: 'White Coffee / Bac Xiu' },
      { viet: 'Cà phê trứng', zh: '蛋咖啡 (河內名物)', en: 'Egg Coffee' },
      { viet: 'Ít đường', zh: '少糖 / 微糖', en: 'Less sugar' },
      { viet: 'Nhiều đá', zh: '多冰', en: 'Extra ice' },
      { viet: 'Không đường', zh: '無糖', en: 'No sugar' },
      { viet: 'Mang về / Mang đi', zh: '外帶', en: 'Takeaway / To go' },
      { viet: 'Ổ cắm điện', zh: '電源插座', en: 'Power socket' }
    ],
    cultureTips: [
      {
        titleZh: '越式咖啡的靈魂：煉乳與滴漏壺 (Phin)',
        titleEn: 'The Soul of Vietnamese Coffee: Condensed Milk & Phin Filter',
        contentZh: '越南是世界第二大咖啡出口國（以 Robusta 羅布斯塔豆為主）。傳統越式咖啡使用金屬滴漏壺 (Phin)，底部先倒一層濃甜煉乳 (Sữa đặc)，沖泡出極濃郁甘苦香甜的滋味。',
        contentEn: 'Vietnam is the worlds 2nd largest coffee exporter. Traditional brewing uses a metal Phin filter dripping over thick sweet condensed milk.'
      },
      {
        titleZh: '「Bạc xỉu」的由來與南北文化差異',
        titleEn: 'Origin of Bạc Xỉu & Regional Differences',
        contentZh: 'Bạc xỉu 源自西貢華人粵語「白小（白少）」，意思是「白多（奶多）咖啡少」，特別適合怕苦或剛接觸越式咖啡的朋友。北越人更偏好熱燙濃烈的黑咖啡或蛋咖啡。',
        contentEn: 'Bac Xiu originated from Cantonese in Saigon meaning "mostly white milk with little coffee", ideal for those who prefer milder sweetness.'
      }
    ]
  },

  // 2. 河粉店
  {
    id: 'pho',
    category: 'dining',
    tagZh: '國民美食',
    tagEn: 'National Dish',
    icon: '🍜',
    image: 'pho.jpg',
    titleZh: '傳統河粉店點牛肉河粉、油條與熟度',
    titleEn: 'Ordering Authentic Beef Pho & Quẩy at a Pho Shop',
    titleVi: 'Gọi Món Tại Quán Phở Truyền Thống',
    summaryZh: '掌握點牛肉熟度（生牛肉 Tái / 熟牛腩 Nạm / 牛筋 Gân）、加點油條與溫泉蛋，以及客製調整湯頭鹹度與打包生配菜。',
    summaryEn: 'Master meat doneness (rare beef, brisket, tendon), side quẩy and poached egg, adjust broth richness, and get takeaway sides.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：經典牛肉熟度與油條半熟蛋',
        titleVi: 'Hội Thoại 1: Chọn Độ Chín Bò, Quẩy & Trứng Chần',
        titleEn: 'Dialogue 1: Meat Cuts, Quẩy & Poached Egg',
        summaryZh: '點半生半熟牛肉河粉、加點酥脆油條、香濃溫泉蛋與新鮮檸檬辣椒。',
        summaryEn: 'Order rare beef and brisket pho with fried crullers and extra herbs.',
        lines: [
          {
            speaker: 'Chủ quán (老闆)',
            role: 'npc',
            viet: 'Chào em, hôm nay ăn phở gì em ơi?',
            zh: '你好，今天想吃什麼河粉呀？',
            en: 'Hello, what kind of pho would you like today?',
            northTip: '北越傳統河粉店常見問法：「Ăn tái hay chín?」',
            southTip: '南越常問：「Ăn tô thường hay tô đặc biệt?」'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho em một tô phở bò tái nạm và một đĩa quẩy nhé.',
            zh: '給我一碗半熟生牛肉加熟牛腩河粉，還有一盤油條喔。',
            en: 'Please give me one bowl of rare beef and brisket pho, and a plate of quay crullers.',
            northTip: '「Tái」= 生牛肉滾湯淋熟；「Nạm」= 熟牛腩/牛五花；「Quẩy」= 油條。',
            southTip: '吃河粉配油條是北越河內最正宗的道地吃法。'
          },
          {
            speaker: 'Chủ quán (老闆)',
            role: 'npc',
            viet: 'Có ăn hành và ngò gai không? Có thêm trứng chần không em?',
            zh: '吃蔥花和刺芫荽（香菜）嗎？要加一顆半熟溫泉蛋嗎？',
            en: 'Do you eat green onions and culantro? Would you like a poached egg?',
            northTip: '不吃蔥說「không hành」；「ngò gai」是刺芫荽（鋸齒草）。',
            southTip: '「trứng chần」是滾燙牛骨高湯沖熟的半熟蛋黃，香濃順口。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Dạ có, cho nhiều hành và cho em thêm một chén trứng chần.',
            zh: '好的要加，請多放蔥花，並多給我一小碗半熟蛋。',
            en: 'Yes please, extra scallions and one bowl of poached egg for me.',
            northTip: '「chén」在北越常說「bát nhỏ」，南越說「chén」。',
            southTip: '將生蛋黃倒入滾燙湯頭拌勻，湯頭會更加香滑濃郁。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Chị ơi, cho em xin thêm chanh và ớt tươi với ạ.',
            zh: '大姐，請再給我檸檬和新鮮辣椒片好嗎？',
            en: 'Excuse me, could I have some more fresh lime and chili slices?',
            northTip: '北越習慣加「giấm tỏi」大蒜醃醋，南越習慣擠大量新鮮小金桔或檸檬。',
            southTip: '「ớt tươi」= 鮮辣椒片，越南生辣椒極辣請酌量添加。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：加牛筋牛丸、調清湯鹹度與打包特製生菜辣醬',
        titleVi: 'Hội Thoại 2: Thêm Gân Bò Viên, Nước Dùng Thanh & Mang Về',
        titleEn: 'Dialogue 2: Extra Tendon/Meatballs, Broth & Takeaway',
        summaryZh: '老饕級客製化：加點牛筋牛肉丸、要求清爽高湯、外帶時將熱湯生菜與特製會安辣醬分開包裝。',
        summaryEn: 'Gourmet customization: add tendon and beef meatballs, request light broth, and pack sides separately.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Chị ơi, tô phở đặc biệt của em cho thêm gân bò và bò viên được không ạ?',
            zh: '大姐，我的特製大碗河粉可以幫我多加牛筋和牛肉丸嗎？',
            en: 'Sister, can you add extra beef tendon and beef meatballs to my special bowl?',
            northTip: '「gân bò」= Ｑ彈牛筋；「bò viên」= 牛肉丸。',
            southTip: '南越河粉常備彈牙牛肉丸，沾海鮮醬黑醬食用。'
          },
          {
            speaker: 'Chủ quán (老闆)',
            role: 'npc',
            viet: 'Được chứ em! Thêm gân và bò viên thì thêm mười lăm nghìn nhé.',
            zh: '當然可以呀！加牛筋和牛肉丸額外加一萬五千盾喔。',
            en: 'Sure! Adding tendon and meatballs will be an extra 15,000 VND.',
            northTip: '「Thêm」= 額外添加/加點。',
            southTip: '加料通常非常平價實惠。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Nước dùng hơi đậm đà một chút, cho em xin thêm một chén nước dùng thanh không mỡ nhé.',
            zh: '湯頭稍微有一點點濃重，請給我一小碗不帶油花的清湯好嗎？',
            en: 'The broth is a bit rich, could I have a small bowl of clear, non-greasy broth please?',
            northTip: '「nước dùng thanh」= 清甜不油膩的高湯；「không mỡ」= 去油花。',
            southTip: '越式河粉如果覺得太濃，店家都很樂意免費加清湯。'
          },
          {
            speaker: 'Chủ quán (老闆)',
            role: 'npc',
            viet: 'Dạ đây em ơi! Nước dùng thanh nóng hổi, em cứ tự nhiên nêm thêm giấm tỏi ớt nhé.',
            zh: '來囉！熱騰騰的清湯，桌上有大蒜辣椒醋你可以自己隨意調味喔。',
            en: 'Here you go! Piping hot clear broth, feel free to add garlic vinegar and chili.',
            northTip: '「giấm tỏi」= 蒜頭白醋，河內吃河粉絕配。',
            southTip: '「tự nhiên」= 請自便、隨意享用。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho em gói mang về thêm hai phần phở chín nữa, để riêng rau sống và tương ớt giúp em.',
            zh: '幫我額外打包兩份熟牛肉河粉外帶，生蔬菜葉和辣醬幫我分開裝喔。',
            en: 'Please pack two more well-done beef pho bowls to go, and keep the fresh herbs and chili sauce separate.',
            northTip: '「để riêng」= 分開裝；「rau sống」= 生九層塔與豆芽菜。',
            southTip: '外帶分開裝可避免河粉泡爛或生菜變黃。'
          },
          {
            speaker: 'Chủ quán (老闆)',
            role: 'npc',
            viet: 'Dạ có ngay! Quán chị có tặng kèm một chai tương ớt Hội An đặc biệt mang về nhé.',
            zh: '馬上好！店裡還有附贈一瓶會安特製香辣醬讓您帶走喔。',
            en: 'Coming right up! We also gift you a special bottle of Hoi An chili sauce to take home.',
            northTip: '「tương ớt」= 越式特製辣椒醬。',
            southTip: '會安特產辣椒醬微甜鹹香，拌麵或沾肉極具風味。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '河粉店老闆 (Chủ quán)',
      partnerRoleEn: 'Pho Chef / Owner (Chủ quán)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào em, hôm nay ăn phở gì em ơi? Tái hay nạm?',
          partnerPromptZh: '你好，今天吃什麼河粉？半生熟生肉還是熟牛腩？',
          partnerPromptEn: 'Hello, what pho today? Rare beef or brisket?',
          userOptions: [
            {
              id: 'p1_opt1',
              textVi: 'Cho em một tô phở bò tái nạm và một đĩa quẩy.',
              textZh: '給我一碗生熟牛肉河粉和一盤油條。',
              textEn: 'Give me one rare and brisket beef pho and a plate of quay.',
              isCorrect: true,
              feedbackZh: '完全正確！標準且地道的雙拼牛肉點法。',
              feedbackEn: 'Completely correct! Standard and authentic double beef choice.'
            },
            {
              id: 'p1_opt2',
              textVi: 'Cho tôi một ly cà phê sữa đá.',
              textZh: '給我一杯冰奶咖啡。',
              textEn: 'Give me an iced milk coffee.',
              isCorrect: false,
              feedbackZh: '這裡在點河粉喔，請選擇河粉品項！',
              feedbackEn: 'This is a pho restaurant! Choose pho items.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Em có ăn hành và rau thơm không? Có thêm trứng chần không?',
          partnerPromptZh: '吃蔥花和香菜嗎？要加一顆溫泉蛋嗎？',
          partnerPromptEn: 'Do you eat scallions and herbs? Add a poached egg?',
          userOptions: [
            {
              id: 'p2_opt1',
              textVi: 'Dạ có, cho nhiều hành và thêm một chén trứng chần nhé.',
              textZh: '要加，請多放蔥並加一碗溫泉蛋喔。',
              textEn: 'Yes, extra scallions and one bowl of poached egg.',
              isCorrect: true,
              feedbackZh: '太棒了！展現懂吃越式河粉的精隨。',
              feedbackEn: 'Awesome! Shows true mastery of Vietnamese pho culture.'
            },
            {
              id: 'p2_opt2',
              textVi: 'Tôi muốn mua vé máy bay đi Hà Nội.',
              textZh: '我想買去河內的機票。',
              textEn: 'I want to buy a flight ticket to Hanoi.',
              isCorrect: false,
              feedbackZh: '這是機場買機票句型，請專注於加蔥與加蛋！',
              feedbackEn: 'Airport topic! Focus on herbs and eggs.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Phở nóng của em xong rồi đây, cẩn thận nóng nhé!',
          partnerPromptZh: '你的熱河粉好囉，小心燙喔！',
          partnerPromptEn: 'Your hot pho is ready, watch out it is hot!',
          userOptions: [
            {
              id: 'p3_opt1',
              textVi: 'Cảm ơn chị. Cho em xin thêm một quả chanh và ớt tươi với ạ.',
              textZh: '謝謝大姐。請再給我一顆檸檬和新鮮辣椒喔。',
              textEn: 'Thank you sister. Could I get extra lime and fresh chili please?',
              isCorrect: true,
              feedbackZh: '非常禮貌且道地，檸檬與辣椒是吃河粉的最佳靈魂！',
              feedbackEn: 'Very polite and authentic! Lime and chili are essential for pho.'
            },
            {
              id: 'p3_opt2',
              textVi: 'Phòng này máy lạnh hỏng rồi.',
              textZh: '這間房間冷氣壞了。',
              textEn: 'The AC in this room is broken.',
              isCorrect: false,
              feedbackZh: '這是飯店投訴句型，餐飲中要檸檬說「Cho em xin thêm chanh」！',
              feedbackEn: 'Hotel phrase! Use "Cho em xin thêm chanh" for lime.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Phở bò tái', zh: '半生牛肉河粉 (滾湯燙熟)', en: 'Rare beef pho' },
      { viet: 'Phở bò nạm', zh: '熟牛腩河粉', en: 'Beef brisket pho' },
      { viet: 'Phở gà', zh: '雞肉河粉', en: 'Chicken pho' },
      { viet: 'Quẩy', zh: '越式酥脆油條', en: 'Crispy fried crullers' },
      { viet: 'Trứng chần', zh: '滾湯沖泡溫泉蛋黃', en: 'Poached egg in broth' },
      { viet: 'Hành hoa / Hành lá', zh: '蔥花 / 蔥段', en: 'Green onions' },
      { viet: 'Ngò gai', zh: '刺芫荽 (刺香菜)', en: 'Culantro' },
      { viet: 'Gân bò', zh: '牛筋', en: 'Beef tendon' },
      { viet: 'Bò viên', zh: '牛肉丸', en: 'Beef meatballs' }
    ],
    cultureTips: [
      {
        titleZh: '北越河粉 (Phở Bắc) vs 南越河粉 (Phở Nam)',
        titleEn: 'Northern Pho vs Southern Pho Differences',
        contentZh: '北越河粉講究清澈鮮美的牛骨原汁高湯，搭配寬扁麵條、大量青蔥與酥脆油條，喜加大蒜辣椒醋；南越河粉湯頭偏甜濃郁，附贈整盤九層塔、生豆芽菜、刺芫荽並沾甜麵醬（黑醬）與辣醬。',
        contentEn: 'Northern Pho focuses on clear bone broth, wide flat noodles, green onions, and quay. Southern Pho is sweeter, loaded with fresh basil, sprouts, and hoisin/chili dips.'
      },
      {
        titleZh: '吃河粉時擠檸檬與辣椒的正確時機',
        titleEn: 'The Art of Squeezing Lime & Chili in Pho',
        contentZh: '道地老饕吃法：先喝一口純淨的牛骨原湯品嚐鮮味，再依個人喜好擠入新鮮青檸汁 (Chanh) 與幾片紅生辣椒 (Ớt tươi)，酸辣交織能瞬間激發湯頭層次。',
        contentEn: 'Foodie tip: Sip the pure broth first, then squeeze fresh lime juice and add chili slices to awaken layered aromas.'
      }
    ]
  },

  // 3. 法國麵包攤
  {
    id: 'banhmi',
    category: 'dining',
    tagZh: '街頭必吃',
    tagEn: 'Street Food King',
    icon: '🥖',
    image: 'banhmi.jpg',
    titleZh: '越式法國麵包攤客製化內餡與辣度',
    titleEn: 'Customizing Vietnamese Baguette (Bánh Mì) at a Street Cart',
    titleVi: 'Mua Bánh Mì Tại Xe Bánh Mì Vỉa Hè',
    summaryZh: '向路邊麵包攤老闆娘客製化內餡（肉醬 Pa-tê、叉燒、煎蛋、醃蘿蔔酸菜）、調整辣度不放香菜，要求現烤酥脆與切半。',
    summaryEn: 'Customize pate, barbecue pork, fried egg, pickled daikon, adjust chili/cilantro, request extra crispy toast and cut in half.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：客製特製綜合內餡與辣度香菜',
        titleVi: 'Hội Thoại 1: Đặt Bánh Mì Đặc Biệt & Chỉnh Cay',
        titleEn: 'Dialogue 1: Special Pork Baguette & Spice Level',
        summaryZh: '點最經典的特製綜合肉餡法國麵包，多抹肉醬肝醬、不要辣椒多放香菜。',
        summaryEn: 'Order special mixed pork banh mi with extra pate, no spicy chili, and extra cilantro.',
        lines: [
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Cháu ơi, ăn bánh mì gì? Có ăn pa-tê và bơ không?',
            zh: '小朋友/帥哥，吃什麼麵包呀？吃肝醬和奶油嗎？',
            en: 'What kind of banh mi do you want? Do you eat pate and mayo butter?',
            northTip: '老闆娘常用親切長輩稱呼「cháu」(晚輩/姪輩)。',
            southTip: '越式法國麵包的靈魂在於濃郁肝醬 (Pa-tê) 與手工蛋黃奶油 (Bơ trứng)。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho cháu một ổ bánh mì thịt đặc biệt, nhiều pa-tê nhé.',
            zh: '給我一份特製綜合豬肉法國麵包，肝醬多抹一點喔。',
            en: 'Please give me one special mixed meat banh mi with extra pate.',
            northTip: '量詞：南越一律稱「ổ bánh mì」，北越有時稱「cái bánh mì」。',
            southTip: '「Bánh mì thịt đặc biệt」通常包含火腿、叉燒、扎肉 (Chả lụa) 與肉鬆。'
          },
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Có ăn ớt cay và rau ngò không cháu?',
            zh: '吃辣和香菜嗎？',
            en: 'Do you eat hot chili and cilantro coriander?',
            northTip: '北越稱香菜為「rau mùi」，南越稱為「rau ngò」。',
            southTip: '如果不吃辣一定要提前強調「không ăn cay / không ớt」。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Dạ không ăn cay, không lấy ớt, cho cháu nhiều rau ngò nhé.',
            zh: '不要辣，不放辣椒，香菜幫我多放一點喔。',
            en: 'No spicy please, no chili, but give me extra cilantro.',
            northTip: '「không lấy ớt」= 不要辣椒。',
            southTip: '「nhiều rau ngò」= 多放香菜。'
          },
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Xong rồi đây! Hai ổ của cháu hết năm mươi nghìn.',
            zh: '好囉！你的兩份總共是五萬越南盾 (50,000 VND)。',
            en: 'All done! Your two banh mi total 50,000 VND.',
            northTip: '街頭法國麵包價格通常在 20k~35k VND 之間。',
            southTip: '外皮剛烤出來極度酥脆，趁熱吃最美味！'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：現烤香酥、加煎荷包蛋、多醃泡菜與切成兩半',
        titleVi: 'Hội Thoại 2: Nướng Giòn Rụm, Thêm Trứng Ốp-la & Cắt Đôi',
        titleEn: 'Dialogue 2: Extra Crispy, Fried Egg & Cut in Half',
        summaryZh: '要求烤箱高溫復烤酥脆、加點一顆半熟煎蛋、多放酸甜醃白蘿蔔絲並切成兩半分享。',
        summaryEn: 'Ask for charcoal crispy baking, add a sunny-side egg, extra pickles, and cut in half for sharing.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cô ơi, nướng bánh mì thật giòn cho cháu nhé, bánh nóng ăn mới ngon.',
            zh: '阿姨，幫我把麵包烤得非常酥脆喔，熱熱的吃才香。',
            en: 'Auntie, please toast the bread very crispy for me, it tastes best when piping hot.',
            northTip: '「nướng thật giòn」= 烤得非常酥脆；「bánh nóng」= 熱麵包。',
            southTip: '路邊攤通常有小型炭火爐或電烤箱現烤。'
          },
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Yên tâm đi cháu! Bánh mì của cô luôn nướng lò than giòn rụm. Cháu có thêm trứng ốp-la không?',
            zh: '放心啦！阿姨的麵包都是炭火烤得酥脆噴香。你要加煎荷包蛋嗎？',
            en: 'Rest assured! My baguettes are always charcoal baked extra crispy. Would you like to add a fried egg?',
            northTip: '「giòn rụm」= 酥脆到卡滋作響的生動形容詞。',
            southTip: '「Trứng ốp-la」源自法語 (œuf au plat)，指現煎荷包蛋。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Dạ có, cho cháu một quả trứng ốp-la chín tới và nhiều thịt xá xíu nhé.',
            zh: '要加，給我一顆半熟煎蛋，還有多一點叉燒肉喔。',
            en: 'Yes please, give me one soft-fried egg and extra barbecue pork.',
            northTip: '「chín tới」= 剛好半熟爆漿。',
            southTip: '「thịt xá xíu」= 甜鹹叉燒肉。'
          },
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Có ăn sốt bơ trứng và đồ chua không cháu? Đồ chua đu đủ cà rốt nhà làm đấy.',
            zh: '要抹蛋黃奶油醬和醃蘿蔔絲泡菜嗎？醃木瓜胡蘿蔔絲是自家做的喔。',
            en: 'Do you want egg butter mayo and pickled veggies? The papaya and carrot pickles are homemade.',
            northTip: '「đồ chua」= 酸甜醃白蘿蔔、胡蘿蔔或青木瓜絲，能完美解膩。',
            southTip: '自製蛋黃奶油醬 (Bơ trứng) 金黃濃香，是越式麵包精華。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho cháu nhiều đồ chua, ít sốt bơ, và cắt đôi ổ bánh mì ra giúp cháu với ạ.',
            zh: '幫我多放泡菜、抹一點點奶油就好，並幫我把麵包切成兩半喔。',
            en: 'Please give me extra pickled veggies, a little mayo butter, and help cut the baguette in half.',
            northTip: '「cắt đôi」= 切成兩半，方便兩人分著吃。',
            southTip: '切半後老闆娘會用紙袋兩端分別包裝，乾淨衛生。'
          },
          {
            speaker: 'Cô bán hàng (老闆娘)',
            role: 'npc',
            viet: 'Xong ngay đây! Cắt đôi và bọc giấy sạch sẽ cho cháu rồi nhé.',
            zh: '馬上切好！切成兩半並用乾淨紙袋為你包好囉。',
            en: 'Ready right away! Cut in half and cleanly wrapped in paper for you.',
            northTip: '「bọc giấy」= 紙張包裝。',
            southTip: '熱呼呼的酥脆外皮與爆漿內餡令人食指大動！'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '麵包攤老闆娘 (Cô bán bánh mì)',
      partnerRoleEn: 'Banh Mi Vendor (Cô bán bánh mì)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Cháu ơi ăn bánh mì gì? Bánh mì thịt nướng hay bánh mì đặc biệt?',
          partnerPromptZh: '你要吃什麼麵包？烤肉麵包還是特製綜合？',
          partnerPromptEn: 'Which banh mi? Grilled pork or special mixed?',
          userOptions: [
            {
              id: 'bm1_opt1',
              textVi: 'Cho cháu một ổ bánh mì đặc biệt, nhiều pa-tê nhé.',
              textZh: '給我一份特製綜合麵包，多抹肉醬。',
              textEn: 'Give me one special banh mi with extra pate please.',
              isCorrect: true,
              feedbackZh: '完全正確！道地表達喜好的內餡與抹醬。',
              feedbackEn: 'Correct! Great way to order special mixed banh mi.'
            },
            {
              id: 'bm1_opt2',
              textVi: 'Tôi muốn đổi tiền USD sang VND.',
              textZh: '我想換美金成越南盾。',
              textEn: 'I want to exchange USD to VND.',
              isCorrect: false,
              feedbackZh: '這是在銀行換錢的句子喔！請選麵包選項。',
              feedbackEn: 'Bank exchange sentence! Choose bread option.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Có ăn cay không cháu? Có cho ớt và rau ngò không?',
          partnerPromptZh: '吃辣嗎？放辣椒和香菜嗎？',
          partnerPromptEn: 'Do you eat spicy? Add chili and cilantro?',
          userOptions: [
            {
              id: 'bm2_opt1',
              textVi: 'Dạ không ăn cay, không lấy ớt, cho cháu nhiều rau ngò nhé.',
              textZh: '不吃辣，不加辣椒，香菜多放一點。',
              textEn: 'No spicy please, no chili, extra cilantro.',
              isCorrect: true,
              feedbackZh: '清晰精準地交代了辣度與香菜偏好！',
              feedbackEn: 'Clear and precise specification of spice and herbs!'
            },
            {
              id: 'bm2_opt2',
              textVi: 'Tôi bị đau đầu và sốt cao.',
              textZh: '我頭痛又發高燒。',
              textEn: 'I have a headache and high fever.',
              isCorrect: false,
              feedbackZh: '這是看醫生的症狀描述，請專注於調整辣度！',
              feedbackEn: 'Medical symptom! Focus on adjusting spice level.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Bánh mì nóng giòn của cháu xong rồi, hết ba mươi nghìn nhé!',
          partnerPromptZh: '你的香脆熱麵包好囉，總共三萬盾！',
          partnerPromptEn: 'Your crispy hot banh mi is ready, 30,000 VND please!',
          userOptions: [
            {
              id: 'bm3_opt1',
              textVi: 'Dạ cháu gửi cô tiền ạ. Cảm ơn cô nhiều!',
              textZh: '阿姨我付錢給您。非常謝謝阿姨！',
              textEn: 'Here is the money auntie. Thank you very much!',
              isCorrect: true,
              feedbackZh: '晚輩對長輩尊敬又親切的道地應對！',
              feedbackEn: 'Polite and authentic interaction with an elder vendor!'
            },
            {
              id: 'bm3_opt2',
              textVi: 'Cho tôi ký gửi thêm hai vali.',
              textZh: '幫我再托運兩個行李箱。',
              textEn: 'Check in two more suitcases for me.',
              isCorrect: false,
              feedbackZh: '這是機場托運行李句子，結帳請用「cháu gửi cô tiền」！',
              feedbackEn: 'Airport luggage phrase! Use payment response.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bánh mì thịt', zh: '豬肉綜合法國麵包', en: 'Pork banh mi' },
      { viet: 'Bánh mì chảo', zh: '鐵板鐵鍋法國麵包', en: 'Pan-fried banh mi' },
      { viet: 'Pa-tê (Pâté)', zh: '豬肝肉醬', en: 'Liver pate' },
      { viet: 'Bơ trứng', zh: '越式手工蛋黃奶油醬', en: 'Egg butter mayo' },
      { viet: 'Trứng ốp-la', zh: '現煎荷包蛋 (半熟/全熟)', en: 'Fried sunny egg' },
      { viet: 'Đồ chua', zh: '醃紅白蘿蔔青木瓜絲', en: 'Pickled veggies' },
      { viet: 'Rau ngò / Rau mùi', zh: '香菜 (南 ngò / 北 mùi)', en: 'Cilantro / Coriander' },
      { viet: 'Không ăn cay', zh: '不吃辣', en: 'Not spicy' },
      { viet: 'Cắt đôi', zh: '切成兩半', en: 'Cut in half' }
    ],
    cultureTips: [
      {
        titleZh: '殖民融合的結晶：法式長棍 vs 越式蓬鬆酥脆',
        titleEn: 'Colonial Fusion: French Baguette vs Vietnamese Crispy Banh Mi',
        contentZh: '法國麵包在十九世紀傳入越南，越南人改良了麵粉配方（加入米粉烘焙），使外皮無比薄脆酥香、內部輕盈蓬鬆，再夾入東南亞香草、醃泡菜與鮮香肉醬，躍升為全球知名街頭美食。',
        contentEn: 'Introduced during French colonial rule, Vietnamese bakers added rice flour to create a thinner, crackling crust and airy crumb stuffed with local savory fillings.'
      },
      {
        titleZh: '不可不知的客製化萬用句型',
        titleEn: 'Essential Banh Mi Customization Phrases',
        contentZh: '不吃香菜說「Không ngò (南) / Không mùi (北)」；不吃辣說「Không ớt」；多抹肝醬說「Nhiều pa-tê」；切成兩半分著吃說「Cắt đôi」。',
        contentEn: 'Pro tips: "Không ngò" for no cilantro, "Không ớt" for no chili, "Nhiều pa-tê" for extra pate, and "Cắt đôi" to cut in half.'
      }
    ]
  },

  // 4. 海鮮大排檔
  {
    id: 'seafood',
    category: 'dining',
    tagZh: '夜生活海鮮',
    tagEn: 'Seafood & Drinking',
    icon: '🦞',
    image: 'seafood.jpg',
    titleZh: '海鮮大排檔炒螺肉、敬酒乾杯與結帳',
    titleEn: 'Dining at a Vietnamese Seafood & Snail Stall (Quán Ốc)',
    titleVi: 'Ăn Hải Sản & Nhậu Tại Quán Ốc Vỉa Hè',
    summaryZh: '體驗越南道地「Nhậu (飲酒聚餐)」文化：點炒香螺、烤草蝦大蝦、生蠔、活海鮮秤重、熱鬧乾杯喊「Một, hai, ba, dô!」與核對帳單。',
    summaryEn: 'Experience authentic Vietnamese drinking culture (Nhậu): order snails, prawns, grilled oysters, weigh live seafood, cheer "Dô!", and check the bill.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：招牌大蒜奶油炒螺、鹽烤草蝦與豪邁乾杯',
        titleVi: 'Hội Thoại 1: Ốc Hương Xào Bơ Tỏi, Tôm Nướng & Dô Bia',
        titleEn: 'Dialogue 1: Garlic Butter Snails, Prawns & Cheers',
        summaryZh: '點最熱銷的奶油炒香螺、鹽烤草蝦、西貢啤酒，並與朋友喊出經典三二一乾杯。',
        summaryEn: 'Order signature garlic butter sweet snails, chili salt grilled prawns, Saigon beer, and cheer.',
        lines: [
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ chào anh chị! Hôm nay có ốc hương xào bơ tỏi và tôm nướng muối ớt rất tươi ạ.',
            zh: '您好！今天有剛到的大蒜奶油炒香螺和鹽烤辣椒大蝦，非常新鮮喔！',
            en: 'Hello everyone! Today we have very fresh garlic butter sweet snails and chili salt grilled prawns.',
            northTip: '「Ốc hương」= 香螺/花螺，越式海鮮攤必點頂級招牌。',
            southTip: '南越海鮮排檔稱「Quán ốc」，是夜間聚餐放鬆聖地。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh một đĩa ốc hương xào bơ tỏi và nửa ký tôm sú nướng nhé.',
            zh: '給我一份大蒜奶油炒香螺，和半公斤鹽烤草蝦。',
            en: 'Give me a plate of garlic butter snails and half a kilo of grilled tiger prawns please.',
            northTip: '「nửa ký」= 半公斤 (500克)；海鮮多以公斤計價。',
            southTip: '大蒜奶油醬汁甜香濃郁，常加點法國麵包蘸著吃。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Anh uống bia gì? Quán em có bia Sài Gòn Special và bia Tiger bạc.',
            zh: '哥喝什麼啤酒呢？我們有特級西貢啤酒和虎牌晶融啤酒。',
            en: 'What beer would you like? We have Saigon Special and Tiger Crystal.',
            northTip: '河內流行「Bia Hà Nội / Bia hơi」，西貢流行「Bia Sài Gòn / Tiger」。',
            southTip: '在越南喝啤酒習慣在杯中加一大塊圓柱冰塊 (Đá cục)。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh bốn lon bia Sài Gòn và một ca đá nhé. Một, hai, ba, dô!',
            zh: '給我四罐西貢啤酒和一壺冰塊。一、二、三，乾杯！',
            en: 'Give me 4 cans of Saigon beer and an ice pitcher please. One, two, three, cheers (Dô)!',
            northTip: '「ca đá」= 裝滿冰塊的冰壺。',
            southTip: '「Một, hai, ba, dô!」是越南全境最響亮的聚會乾杯歡呼口號。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：活螃蟹秤重詢價、烤生蠔蔥油花生與明細結帳',
        titleVi: 'Hội Thoại 2: Cân Cua Cà Mau, Hàu Nướng Mỡ Hành & Tính Tiền',
        titleEn: 'Dialogue 2: Live Crab Weighing, Oysters & Check Bill',
        summaryZh: '深度海鮮實況：挑選金甌活螃蟹確認料理費、加點經典蔥油花生烤生蠔、沾醬吃麵包與索取消費明細。',
        summaryEn: 'Live seafood weighing, ask for free steaming/tamarind sauce cooking, grilled scallion oysters, and itemized bill.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Em ơi, cua Cà Mau này bao nhiêu tiền một ký? Giá này đã bao gồm công chế biến chưa?',
            zh: '小弟/小妹，這金甌螃蟹一公斤多少錢？這個價格有包含料理烹調費嗎？',
            en: 'Excuse me, how much per kilo for this Ca Mau crab? Does this price include the cooking fee?',
            northTip: '「Cua Cà Mau」= 越南最著名的金甌省肥美青蟹。',
            southTip: '問清「công chế biến (料理費)」可避免結帳誤會。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ cua thịt bốn trăm năm mươi nghìn một ký, đã miễn phí công hấp sả hoặc rang me rồi ạ.',
            zh: '肉蟹一公斤四十五萬盾，已經免費包含清蒸香茅或炒酸子羅望子醬的料理費了。',
            en: 'Meat crab is 450,000 VND/kg, which already includes free lemongrass steaming or tamarind sauce stir-fry.',
            northTip: '「hấp sả」= 清蒸香茅；「rang me」= 炒羅望子酸甜醬。',
            southTip: '450,000 VND 約台幣 580 元，非常經濟划算。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Vớt cho anh hai con cua này đem rang me, và cho một đĩa hàu nướng mỡ hành đậu phộng nhé.',
            zh: '幫我撈這兩隻螃蟹做炒酸子醬，並來一盤烤生蠔加蔥油花生粒。',
            en: 'Please catch these two crabs for tamarind stir-fry, and give me a plate of oysters grilled with scallion oil and peanuts.',
            northTip: '「hàu nướng mỡ hành」= 烤生蠔淋翠綠蔥油與碎花生，越式必點海鮮。',
            southTip: '「đậu phộng」= 花生 (北越稱 lạc)。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ hai con cua của anh đúng một ký hai. Anh có muốn dùng thêm bánh mì chấm sốt me không ạ?',
            zh: '兩隻螃蟹剛好 1.2 公斤。您要不要加點一份法國麵包沾濃郁酸子醬吃呢？',
            en: 'Your two crabs weigh exactly 1.2 kg. Would you like some bread to dip in the tamarind sauce?',
            northTip: '「chấm sốt me」= 沾酸甜羅望子醬。',
            southTip: '麵包沾酸子炒蟹醬汁是海鮮排檔一絕！'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh hai ổ bánh mì nhé. Lát nữa tính tiền thì in giúp anh hóa đơn chi tiết nha.',
            zh: '給我兩份麵包。等一下結帳幫我印出詳細消費明細單喔。',
            en: 'Give me two baguettes please. Later when checking out, please print an itemized bill for me.',
            northTip: '「hóa đơn chi tiết」= 詳細消費發票/明細單。',
            southTip: '越語結帳常說「Em ơi, tính tiền / tính bill giúp anh」'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ vâng ạ, quán em tính đúng giá niêm yết trên bảng và không thu thêm phí phụ thu đâu anh.',
            zh: '好的沒問題，我們店完全按照板上標價計費，絕不收取任何額外服務費喔。',
            en: 'Yes sir, our stall charges exactly as listed on the menu board with no hidden extra surcharge.',
            northTip: '「giá niêm yết」= 公開標價。',
            southTip: '誠信經營排檔會當場秤重讓顧客過目。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '海鮮排檔服務員 (Nhân viên quán ốc)',
      partnerRoleEn: 'Seafood Stall Waiter (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ quán em hôm nay có ốc móng tay và tôm nướng rất ngon, anh gọi món gì ạ?',
          partnerPromptZh: '今天竹蟶和烤蝦很棒，哥要點什麼呢？',
          partnerPromptEn: 'Today razor clams and grilled prawns are great, what to order?',
          userOptions: [
            {
              id: 'sf1_opt1',
              textVi: 'Cho anh một đĩa ốc hương xào bơ tỏi và nửa ký tôm nướng.',
              textZh: '給我一份奶油炒香螺和半公斤烤蝦。',
              textEn: 'Give me garlic butter sweet snails and half a kilo of grilled prawns.',
              isCorrect: true,
              feedbackZh: '完全正確！道地的海鮮點餐句型。',
              feedbackEn: 'Correct! Authentic seafood ordering phrasing.'
            },
            {
              id: 'sf1_opt2',
              textVi: 'Cho tôi đổi một phòng có bồn tắm.',
              textZh: '幫我換一間有浴缸的房間。',
              textEn: 'Change to a room with a bathtub.',
              isCorrect: false,
              feedbackZh: '這是飯店換房要求，請選海鮮料理！',
              feedbackEn: 'Hotel room request! Choose seafood dish.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Bàn mình uống bia gì ạ? Bia Sài Gòn hay bia Tiger?',
          partnerPromptZh: '我們桌喝什麼啤酒？西貢啤酒還是虎牌？',
          partnerPromptEn: 'Which beer for your table? Saigon or Tiger?',
          userOptions: [
            {
              id: 'sf2_opt1',
              textVi: 'Cho anh bốn lon bia Sài Gòn và một ca đá nhé.',
              textZh: '給我四罐西貢啤酒和一壺冰塊。',
              textEn: 'Give me 4 cans of Saigon beer and an ice pitcher please.',
              isCorrect: true,
              feedbackZh: '非常棒！完美融入越南加冰塊喝啤酒的風俗。',
              feedbackEn: 'Great! Fits the Vietnamese beer with ice tradition.'
            },
            {
              id: 'sf2_opt2',
              textVi: 'Cho tôi một bát thuốc hạ sốt.',
              textZh: '給我一碗退燒藥。',
              textEn: 'Give me a bowl of fever medicine.',
              isCorrect: false,
              feedbackZh: '這是藥局買藥句型，請選擇啤酒品項！',
              feedbackEn: 'Pharmacy phrase! Choose beer item.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Bàn mình ăn xong chưa ạ? Em dọn bàn và tính tiền nhé!',
          partnerPromptZh: '大家吃飽了嗎？我幫忙收拾桌子並結帳喔！',
          partnerPromptEn: 'Finished eating? I will clear the table and bring the bill!',
          userOptions: [
            {
              id: 'sf3_opt1',
              textVi: 'Em ơi tính tiền giúp anh, in hóa đơn chi tiết nhé.',
              textZh: '店員幫我結帳，請印出詳細帳單喔。',
              textEn: 'Excuse me, bill please, and print an itemized receipt.',
              isCorrect: true,
              feedbackZh: '結帳乾淨俐落，要求帳單明細非常聰明！',
              feedbackEn: 'Clear payment call with smart receipt check!'
            },
            {
              id: 'sf3_opt2',
              textVi: 'Rẽ trái rồi đi thẳng năm mươi mét.',
              textZh: '左轉然後直走五十公尺。',
              textEn: 'Turn left and go straight 50 meters.',
              isCorrect: false,
              feedbackZh: '這是搭計程車指示方向的句子喔！',
              feedbackEn: 'Taxi direction sentence! Use bill check phrase.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Ốc hương', zh: '花螺 / 香螺', en: 'Sweet snail' },
      { viet: 'Xào bơ tỏi', zh: '大蒜奶油炒', en: 'Stir-fried with garlic butter' },
      { viet: 'Nướng mỡ hành', zh: '烤蔥油花生', en: 'Grilled with scallion oil' },
      { viet: 'Tôm sú', zh: '草蝦 / 大明蝦', en: 'Tiger prawn' },
      { viet: 'Cua Cà Mau', zh: '金甌肉蟹 / 膏蟹', en: 'Ca Mau mud crab' },
      { viet: 'Một, hai, ba, dô!', zh: '一、二、三，乾杯！', en: '1, 2, 3, Cheers!' },
      { viet: 'Tính tiền / Check bill', zh: '結帳 / 買單', en: 'Pay the bill' }
    ],
    cultureTips: [
      {
        titleZh: '越南獨特的「加冰塊喝啤酒 (Bia kèm đá)」文化',
        titleEn: 'The "Beer on the Rocks" Culture in Vietnam',
        contentZh: '因為越南氣候炎熱，排檔與啤酒館通常不冷藏整箱啤酒，而是給每人倒進裝有大冰塊 (Đá cục) 的玻璃杯中。喝起來清爽解渴且不易喝醉，是熱帶消暑絕招。',
        contentEn: 'Due to tropical heat, beer is typically poured over large ice cubes in glasses, keeping drinks crisp and refreshing.'
      },
      {
        titleZh: '乾杯熱鬧口號的含義',
        titleEn: 'The Meaning of Vietnamese Toasting "Dô!"',
        contentZh: '全桌人一起舉杯大喊「1, 2, 3, dô! 2, 3, dô! 2, 3, uống! (喝!)」，象徵放下煩惱、拉近彼此距離的熱情友誼。',
        contentEn: 'Chanting "1, 2, 3, dô!" signifies breaking barriers and celebrating warm friendship together.'
      }
    ]
  },

  // 5. 手搖與甜湯
  {
    id: 'boba_che',
    category: 'dining',
    tagZh: '甜品手搖',
    tagEn: 'Boba & Desserts',
    icon: '🧋',
    image: 'boba_che.jpg',
    titleZh: '手搖奶茶與傳統越式甜湯 (Chè) 點餐',
    titleEn: 'Ordering Boba Milk Tea & Traditional Sweet Soup (Chè)',
    titleVi: 'Gọi Trà Sữa & Chè Truyền Thống',
    summaryZh: '掌握手搖奶茶糖度冰度自訂、越式傳統甜湯 Chè（柚子皮甜湯、三色冰、杏仁豆腐果凍）、招牌酪梨冰沙、自備環保杯折價與碎冰分裝。',
    summaryEn: 'Customize boba sugar/ice, order traditional Chè (pomelo sweet soup, three-color dessert, almond jelly), avocado smoothie, and eco-cup discounts.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：黑糖珍珠奶茶與傳統柚子皮甜湯',
        titleVi: 'Hội Thoại 1: Trà Sữa Trân Châu & Chè Bưởi',
        titleEn: 'Dialogue 1: Brown Sugar Boba & Pomelo Sweet Soup',
        summaryZh: '手搖奶茶點三分糖半冰，搭配越南極具特色的消暑甜品「柚子皮甜湯 (Chè bưởi)」。',
        summaryEn: 'Order 30% sugar and 50% ice boba tea alongside signature pomelo pith sweet soup.',
        lines: [
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Em chào anh! Anh gọi trà sữa hay chè truyền thống ạ?',
            zh: '你好哥！請問要點手搖奶茶還是傳統甜湯呢？',
            en: 'Hello sir! Would you like bubble milk tea or traditional sweet soup?',
            northTip: '「Chè」涵蓋了越南所有傳統冷熱甜湯、八寶粥與仙草凍品。',
            southTip: '西貢街道處處可見歷史悠久的甜湯老店。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh một ly trà sữa trân châu đường đen và một bát chè bưởi nhé.',
            zh: '給我一杯黑糖珍珠鮮奶茶，和一碗柚子皮甜湯。',
            en: 'Please give me one brown sugar pearl milk tea and one bowl of pomelo sweet soup.',
            northTip: '「Chè bưởi」用柚子白囊慢火浸透糖蜜煮成，口感如果凍般軟脆彈牙。',
            southTip: '「trân châu đường đen」= 黑糖珍珠。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Trà sữa anh lấy bao nhiêu phần trăm đường và đá ạ?',
            zh: '奶茶您要幾分糖和幾分冰呢？',
            en: 'What percentage of sugar and ice would you like for your milk tea?',
            northTip: '手搖飲店普遍使用百分比標示糖冰度。',
            southTip: '標準甜度通常極甜，建議台灣朋友點 30% 或 50% 糖。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh ba mươi phần trăm đường và năm mươi phần trăm đá nhé.',
            zh: '幫我做三分糖（30%）、半冰（50% 冰）喔。',
            en: 'Please make it 30% sugar and 50% ice.',
            northTip: '「ba mươi phần trăm đường」= 30% 糖（微糖）。',
            southTip: '「năm mươi phần trăm đá」= 50% 冰（少冰/半冰）。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：推薦酪梨冰沙、杏仁豆腐甜湯加椰奶與自備環保杯',
        titleVi: 'Hội Thoại 2: Sinh Tố Bơ, Chè Khúc Bạch & Bình Cá Nhân',
        titleEn: 'Dialogue 2: Avocado Smoothie, Almond Jelly & Eco Cup',
        summaryZh: '探索越南必吃神級酪梨冰沙、清涼杏仁豆腐甜湯、使用自備隨行杯折抵優惠與碎冰單獨打包。',
        summaryEn: 'Discover avocado smoothies, almond jelly dessert with rich coconut milk, eco cup discount, and ice packed separately.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Em ơi, quán mình món chè nào bán chạy nhất và ít ngọt nhất vậy em?',
            zh: '店員，請問店裡哪一款甜湯最熱銷而且甜度最低呢？',
            en: 'Excuse me, which sweet soup is your best seller and least sweet?',
            northTip: '「bán chạy nhất」= 最暢銷/最熱賣；「ít ngọt nhất」= 最不甜。',
            southTip: '詢問招牌品項是品嚐在地甜品的最佳切入點。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ anh nên thử chè khúc bạch hoặc sinh tố bơ sầu riêng ạ, thanh mát và ngọt dịu lắm.',
            zh: '建議哥嘗試杏仁豆腐果凍甜湯或酪梨榴槤冰沙，口感清爽且甜度很溫和喔。',
            en: 'You should try our Che Khuc Bach almond jelly or avocado durian smoothie, very refreshing and gentle in sweetness.',
            northTip: '「Chè khúc bạch」= 杏仁牛奶果凍搭配龍眼荔枝的清爽甜品。',
            southTip: '「Sinh tố bơ」= 越南高原特產濃醇酪梨冰沙，加入煉乳滑順無比。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh một bát chè khúc bạch, thêm nhiều thạch dừa và nước cốt dừa béo nhé.',
            zh: '給我一碗杏仁豆腐甜湯，多放椰子果凍和濃郁椰奶喔。',
            en: 'Give me one bowl of Khuc Bach jelly, with extra coconut jelly and rich coconut milk.',
            northTip: '「nước cốt dừa」= 越式甜湯靈魂椰漿椰奶。',
            southTip: '「thạch dừa」= Ｑ彈椰子果凍。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ được ạ. Anh có mang theo bình cá nhân không ạ? Quán em giảm năm nghìn cho khách dùng bình riêng.',
            zh: '好的。您有自備環保杯嗎？本店自備隨行杯折抵五千盾喔。',
            en: 'Sure. Did you bring a personal eco cup? Our shop offers 5,000 VND discount for using your own bottle.',
            northTip: '「bình cá nhân / bình riêng」= 個人隨行環保杯。',
            southTip: '越南年輕族群越來越崇尚環保減塑。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Anh có mang bình đây. Bát chè của bạn anh thì để riêng đá ra một túi nhỏ nhé.',
            zh: '我有帶杯子。我朋友那碗甜湯請幫忙把碎冰單獨裝在小袋子裡喔。',
            en: 'I have my bottle here. For my friends sweet soup bowl, please pack the shaved ice in a separate small bag.',
            northTip: '「để riêng đá」= 碎冰分開裝。',
            southTip: '外帶甜品分開裝冰塊，避免融化稀釋椰奶香氣。'
          },
          {
            speaker: 'Nhân viên (店員)',
            role: 'npc',
            viet: 'Dạ vâng, để riêng đá thì chè sẽ không bị nhạt khi mang đi xa ạ!',
            zh: '好的，分開裝冰塊外帶路上就不會融化變淡了！',
            en: 'Yes sir, packing ice separately ensures the dessert wont get watered down on your way!',
            northTip: '「không bị nhạt」= 不會變淡。',
            southTip: '店員貼心打包讓外帶品嚐也能維持最佳口感。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '甜品店員 (Nhân viên quán chè)',
      partnerRoleEn: 'Dessert Staff (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ xin chào anh! Hôm nay anh muốn ăn chè gì ạ? Quán có chè thái và chè bưởi.',
          partnerPromptZh: '您好哥！今天想吃什麼甜湯？我們有泰式甜湯和柚皮甜湯。',
          partnerPromptEn: 'Hello sir! Which sweet soup today? We have Thai Che and Pomelo Che.',
          userOptions: [
            {
              id: 'bc1_opt1',
              textVi: 'Cho anh một bát chè bưởi và một ly trà sữa ít đường nhé.',
              textZh: '給我一碗柚皮甜湯和一杯少糖奶茶。',
              textEn: 'Give me one pomelo sweet soup and a less-sweet milk tea please.',
              isCorrect: true,
              feedbackZh: '完美！準確點出甜品品項與甜度要求。',
              feedbackEn: 'Perfect! Accurately ordered dessert and customized sweetness.'
            },
            {
              id: 'bc1_opt2',
              textVi: 'Tôi bị mất ví tiền ở chợ.',
              textZh: '我在市場掉了錢包。',
              textEn: 'I lost my wallet at the market.',
              isCorrect: false,
              feedbackZh: '這是報案句子，請選擇甜品點餐！',
              feedbackEn: 'Police report sentence! Choose dessert.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Trà sữa anh uống tại chỗ hay mang về ạ? Có cần bọc đá riêng không anh?',
          partnerPromptZh: '奶茶在這裡喝還是外帶？需要另外分開包裝冰塊嗎？',
          partnerPromptEn: 'Dine in or to go for the milk tea? Pack ice separately?',
          userOptions: [
            {
              id: 'bc2_opt1',
              textVi: 'Anh mang về, để riêng đá ra túi nhỏ giúp anh nhé.',
              textZh: '我外帶，冰塊幫我分開裝在小袋子裡喔。',
              textEn: 'To go please, and pack the ice in a separate small bag for me.',
              isCorrect: true,
              feedbackZh: '非常棒！展現外帶甜品最專業的客製需求。',
              feedbackEn: 'Awesome! Shows pro customization for takeaway dessert.'
            },
            {
              id: 'bc2_opt2',
              textVi: 'Cho tôi đo huyết áp và nhịp tim.',
              textZh: '幫我量血壓和心跳。',
              textEn: 'Measure my blood pressure and pulse.',
              isCorrect: false,
              feedbackZh: '這是醫院體檢句子，請專注於外帶與冰塊分裝！',
              feedbackEn: 'Hospital checkup phrase! Focus on takeaway ice.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Dạ của anh xong rồi ạ, tổng cộng bốn mươi nghìn đồng!',
          partnerPromptZh: '好囉，總共是四萬越南盾！',
          partnerPromptEn: 'All set sir, total is 40,000 VND!',
          userOptions: [
            {
              id: 'bc3_opt1',
              textVi: 'Gửi em tiền nhé. Cảm ơn em nhiều!',
              textZh: '給你錢喔。非常謝謝你！',
              textEn: 'Here is the money. Thank you very much!',
              isCorrect: true,
              feedbackZh: '順利結帳完成甜品手搖體驗！',
              feedbackEn: 'Smooth payment completing the dessert experience!'
            },
            {
              id: 'bc3_opt2',
              textVi: 'Xe này có đi ra sân bay không?',
              textZh: '這台車有去機場嗎？',
              textEn: 'Does this car go to the airport?',
              isCorrect: false,
              feedbackZh: '這是問路搭車句子，結帳請說「Gửi em tiền」！',
              feedbackEn: 'Transport phrase! Use payment phrase.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Trà sữa trân châu', zh: '珍珠奶茶', en: 'Pearl milk tea' },
      { viet: 'Chè bưởi', zh: '柚子皮甜湯 (清甜爽口)', en: 'Pomelo pith sweet soup' },
      { viet: 'Chè khúc bạch', zh: '杏仁牛奶豆腐甜湯', en: 'Khuc Bach jelly sweet soup' },
      { viet: 'Sinh tố bơ', zh: '酪梨冰沙 (加煉乳濃郁)', en: 'Avocado smoothie' },
      { viet: 'Nước cốt dừa', zh: '濃縮椰奶 / 椰漿', en: 'Coconut milk' },
      { viet: 'Để riêng đá', zh: '碎冰分開裝', en: 'Pack ice separately' }
    ],
    cultureTips: [
      {
        titleZh: '越南甜湯 (Chè) 的千變萬化',
        titleEn: 'The Colorful World of Vietnamese Chè',
        contentZh: '越南 Chè 有上百種，從熱煮的蓮子百合 (Chè hạt sen)、黑糯米酸奶 (Sữa chua nếp cẩm) 到加入碎冰的椰汁三色冰 (Chè ba màu)，是越南人下午茶與夜間消暑的最愛。',
        contentEn: 'Vietnam features hundreds of Chè variations, ranging from lotus seed soup, black sticky rice yogurt to three-color shaved ice.'
      },
      {
        titleZh: '手搖甜度與酪梨冰沙的隱藏喝法',
        titleEn: 'Boba Sweetness & Avocado Smoothie Secret',
        contentZh: '越南手搖飲預設甜度通常比台灣高出一階，建議初次嘗試點 30% 糖 (Ba mươi phần trăm đường)。酪梨冰沙 (Sinh tố bơ) 質地如同冰淇淋，可要求加一球榴槤 (Sầu riêng) 更添南洋風味。',
        contentEn: 'Vietnamese boba is sweeter on average, so 30% sugar is recommended. Avocado smoothies have ice cream texture and pair wonderfully with durian.'
      }
    ]
  },

  // 6. 機場通關
  {
    id: 'airport',
    category: 'travel',
    tagZh: '出入境必用',
    tagEn: 'Airport Transit',
    icon: '✈️',
    image: 'airport.jpg',
    titleZh: '國際機場辦理登機、過海關與托運行李',
    titleEn: 'Airport Check-in, Baggage Drop & Customs Clearance',
    titleVi: 'Làm Thủ Tục Tại Sân Bay & Hải Quan',
    summaryZh: '國際機場實戰：出示機票護照辦理登機、選擇靠窗/走道座位、應對行李超重重新整理、海關過關問答與詢問貴賓室。',
    summaryEn: 'Airport procedures: passport check-in, window/aisle seat selection, handle overweight baggage, customs questions, and lounge location.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：櫃台 Check-in、托運行李與靠窗座位',
        titleVi: 'Hội Thoại 1: Check-in, Ký Gửi Hành Lý & Ghế Cửa Sổ',
        titleEn: 'Dialogue 1: Check-in, Baggage Drop & Window Seat',
        summaryZh: '在航空公司櫃台出示護照機票、托運二十公斤行李、確認行動電源隨身與索取登機證。',
        summaryEn: 'Show passport at counter, check in 20kg baggage, verify power banks, and pick window seat.',
        lines: [
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Xin chào quý khách, xin vui lòng cho xem hộ chiếu và vé máy bay ạ.',
            zh: '您好貴賓，請出示您的護照和機票。',
            en: 'Hello passenger, please show me your passport and flight ticket.',
            northTip: '「Hộ chiếu」= 護照；「Vé máy bay」= 機票。',
            southTip: '機場地勤多使用標準禮貌越語。'
          },
          {
            speaker: 'Hành khách (旅客)',
            role: 'learner',
            viet: 'Dạ hộ chiếu và vé của tôi đây. Tôi bay chuyến đi Đài Bắc.',
            zh: '好的，這是我的護照和機票。我搭乘飛往台北的航班。',
            en: 'Here are my passport and ticket. I am on the flight to Taipei.',
            northTip: '「Đài Bắc」= 台北 (Taipei)；「Đài Loan」= 台灣。',
            southTip: '出示手機電子機票 (E-ticket) 亦非常普遍方便。'
          },
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Anh có bao nhiêu kiện hành lý ký gửi ạ? Có mang theo pin sạc dự phòng không?',
            zh: '請問您有幾件托運行李？隨身有攜帶行動電源（充電寶）嗎？',
            en: 'How many checked bags do you have? Are you carrying any power banks?',
            northTip: '「ký gửi」= 托運 (漢越詞：寄託)；「pin sạc dự phòng」= 行動電源。',
            southTip: '行動電源嚴禁托運，必須隨身攜帶 (xách tay)。'
          },
          {
            speaker: 'Hành khách (旅客)',
            role: 'learner',
            viet: 'Tôi có một kiện ký gửi hai mươi ký. Cho tôi chọn ghế cạnh cửa sổ nhé.',
            zh: '我有一件二十公斤的托運行李。請幫我安排靠窗座位喔。',
            en: 'I have one checked bag of 20 kg. Please arrange a window seat for me.',
            northTip: '「ghế cạnh cửa sổ」= 靠窗座；「ghế cạnh lối đi」= 靠走道座。',
            southTip: '「hai mươi ký」= 20公斤。'
          },
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Đây là thẻ lên máy bay của anh. Cửa số 12, lên máy bay lúc mười bốn giờ ba mươi nhé.',
            zh: '這是您的登機證。在 12 號登機門，十四點三十分開始登機喔。',
            en: 'Here is your boarding pass. Gate 12, boarding time is 14:30.',
            northTip: '「Thẻ lên máy bay」= 登機證 (Boarding pass)。',
            southTip: '「Cửa lên máy bay / Cổng」= 登機門。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：行李超重重新整理、詢問免稅店與商務貴賓室',
        titleVi: 'Hội Thoại 2: Hành Lý Quá Cân, Cửa Hàng Miễn Thuế & Phòng Chờ',
        titleEn: 'Dialogue 2: Overweight Baggage, Duty Free & Lounge',
        summaryZh: '處理行李超重 3 公斤拿回隨身背包、詢問海關檢查與免稅店貴賓室所在位置。',
        summaryEn: 'Reorganize 3kg overweight luggage into carry-on, ask security checkpoint and business lounge location.',
        lines: [
          {
            speaker: 'Hành khách (旅客)',
            role: 'learner',
            viet: 'Hành lý của tôi có bị quá cân không em? Giới hạn ký gửi là bao nhiêu ký?',
            zh: '我的行李有超重嗎？免費托運限額是多少公斤呢？',
            en: 'Is my luggage overweight? What is the checked baggage limit in kilos?',
            northTip: '「quá cân / quá cước」= 超重；「giới hạn」= 限制額度。',
            southTip: '各航空公司免費行李額度通常在 20kg 至 23kg。'
          },
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Dạ vali của anh là hai mươi ba ký, quá ba ký so với tiêu chuẩn hai mươi ký ạ.',
            zh: '您的行李箱是 23 公斤，超出 20 公斤標準限額 3 公斤喔。',
            en: 'Your suitcase is 23 kg, which is 3 kg over the 20 kg standard allowance.',
            northTip: '「tiêu chuẩn」= 標準限額。',
            southTip: '超重可選擇現場補買超重費或重新整理隨身行李。'
          },
          {
            speaker: 'Hành khách (旅客)',
            role: 'learner',
            viet: 'Để tôi lấy bớt áo khoác và quà lưu niệm bỏ vào balo xách tay nhé.',
            zh: '那我把厚外套和紀念品拿出來放隨身背包喔。',
            en: 'Let me take out my jacket and souvenirs to put into my carry-on backpack.',
            northTip: '「quà lưu niệm」= 紀念品；「balo xách tay」= 隨身後背包。',
            southTip: '「lấy bớt」= 拿出一部分以減輕重量。'
          },
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Dạ bây giờ là đúng hai mươi ký rồi ạ. Anh có thể qua cửa kiểm tra an ninh.',
            zh: '現在剛好 20 公斤了。您可以前往安檢門囉。',
            en: 'Now it is exactly 20 kg. You can proceed to the security checkpoint.',
            northTip: '「kiểm tra an ninh」= 機場安全檢查。',
            southTip: '安檢需將筆記型電腦與液體單獨取出放置於托盤中。'
          },
          {
            speaker: 'Hành khách (旅客)',
            role: 'learner',
            viet: 'Cho tôi hỏi phòng chờ thương gia và cửa hàng miễn thuế nằm ở khu vực nào ạ?',
            zh: '請問貴賓室商務休息室和免稅店在第幾區呢？',
            en: 'Could you tell me where the business class lounge and duty-free shops are located?',
            northTip: '「phòng chờ thương gia」= 商務貴賓休息室；「cửa hàng miễn thuế」= 免稅店。',
            southTip: '「khu vực」= 區域/樓層。'
          },
          {
            speaker: 'Nhân viên sân bay (地勤)',
            role: 'npc',
            viet: 'Dạ sau khi qua hải quan anh rẽ trái, phòng chờ nằm ở tầng hai đối diện cửa số 15 ạ.',
            zh: '過海關後向左轉，貴賓室在二樓 15 號登機門正對面喔。',
            en: 'After passing customs please turn left, the lounge is on the 2nd floor opposite Gate 15.',
            northTip: '「sau khi qua hải quan」= 過海關之後。',
            southTip: '「đối diện」= 正對面。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '旅客 (Hành khách)',
      userRoleEn: 'Passenger (Hành khách)',
      partnerRoleZh: '機場地勤 (Nhân viên sân bay)',
      partnerRoleEn: 'Ground Staff (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Xin chào anh, anh bay chuyến bay nào ạ? Xin cho xem hộ chiếu.',
          partnerPromptZh: '您好，搭乘哪班航班？請出示護照。',
          partnerPromptEn: 'Hello, which flight? Please show your passport.',
          userOptions: [
            {
              id: 'ap1_opt1',
              textVi: 'Dạ tôi bay đi Đài Bắc. Gửi em hộ chiếu và vé máy bay.',
              textZh: '我飛往台北。這是護照與機票。',
              textEn: 'I fly to Taipei. Here is passport and ticket.',
              isCorrect: true,
              feedbackZh: '完全正確！清晰交代目的地並出示證件。',
              feedbackEn: 'Correct! Clearly stated destination and presented documents.'
            },
            {
              id: 'ap1_opt2',
              textVi: 'Cho tôi gọi một đĩa ốc xào me.',
              textZh: '給我點一盤炒酸子螺。',
              textEn: 'Give me tamarind stir-fried snails.',
              isCorrect: false,
              feedbackZh: '這是在海鮮排檔點餐的句子喔！',
              feedbackEn: 'Seafood stall phrase! Choose airport response.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Anh muốn chọn ghế cạnh cửa sổ hay cạnh lối đi ạ?',
          partnerPromptZh: '您想選靠窗還是靠走道的座位呢？',
          partnerPromptEn: 'Window seat or aisle seat for you?',
          userOptions: [
            {
              id: 'ap2_opt1',
              textVi: 'Cho tôi chọn ghế cạnh cửa sổ nhé.',
              textZh: '幫我選靠窗的座位喔。',
              textEn: 'Please give me a window seat.',
              isCorrect: true,
              feedbackZh: '準確選擇了座位偏好！',
              feedbackEn: 'Accurately chose seat preference!'
            },
            {
              id: 'ap2_opt2',
              textVi: 'Bánh mì này có nhiều pa-tê không?',
              textZh: '這麵包有放很多肉醬嗎？',
              textEn: 'Does this banh mi have lots of pate?',
              isCorrect: false,
              feedbackZh: '這是問麵包內餡的句子，選座位請用「ghế cạnh cửa sổ」！',
              feedbackEn: 'Food phrase! Use seat selection phrase.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Thẻ lên máy bay của anh đây, cửa số 12 lên máy bay lúc 14:30 nhé.',
          partnerPromptZh: '這是您的登機證，12號門 14:30 登機。',
          partnerPromptEn: 'Your boarding pass here, Gate 12 at 14:30.',
          userOptions: [
            {
              id: 'ap3_opt1',
              textVi: 'Cảm ơn em nhiều. Chúc em một ngày làm việc vui vẻ!',
              textZh: '非常感謝你。祝你今天工作愉快！',
              textEn: 'Thank you very much. Have a great working day!',
              isCorrect: true,
              feedbackZh: '非常有禮貌的結尾對話，令人心情愉悅！',
              feedbackEn: 'Very polite farewell, leaving a great impression!'
            },
            {
              id: 'ap3_opt2',
              textVi: 'Tôi muốn mua sim 4G.',
              textZh: '我想買 4G SIM 卡。',
              textEn: 'I want to buy a 4G SIM.',
              isCorrect: false,
              feedbackZh: '領取登機證後表達感謝即可！',
              feedbackEn: 'Thank the staff after receiving boarding pass!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Hộ chiếu', zh: '護照', en: 'Passport' },
      { viet: 'Thẻ lên máy bay', zh: '登機證 (Boarding pass)', en: 'Boarding pass' },
      { viet: 'Hành lý ký gửi', zh: '托運行李', en: 'Checked luggage' },
      { viet: 'Hành lý xách tay', zh: '隨身登機行李', en: 'Carry-on baggage' },
      { viet: 'Ghế cạnh cửa sổ', zh: '靠窗座位', en: 'Window seat' },
      { viet: 'Cửa kiểm tra an ninh', zh: '安全檢查門', en: 'Security checkpoint' },
      { viet: 'Cửa hàng miễn thuế', zh: '免稅店', en: 'Duty-free shop' }
    ],
    cultureTips: [
      {
        titleZh: '越南各大國際機場代碼與通關注意事項',
        titleEn: 'Major Airport Codes & Customs Clearance Tips',
        contentZh: '胡志明市新山一機場 (SGN)、河內內排機場 (HAN)、峴港機場 (DAD)。入境越南需確保持有有效簽證或電子簽 (E-Visa)，並將列印紙本與護照一同交予移民官查驗。',
        contentEn: 'Major airports: SGN (HCMC), HAN (Hanoi), DAD (Da Nang). Ensure you have printed your valid E-Visa alongside your passport for immigration.'
      },
      {
        titleZh: '行李超重與行動電源規範',
        titleEn: 'Overweight Baggage & Power Bank Regulations',
        contentZh: '越南民航局嚴格規定：行動電源 (Pin sạc dự phòng) 絕對禁止放入托運行李，必須放在隨身背包中。超重行李在櫃台現場購買費用較高，建議出發前在官網預購行李額度。',
        contentEn: 'Aviation rules strictly forbid power banks in checked luggage. Purchase extra baggage allowance online in advance to save fees.'
      }
    ]
  },

  // 7. 飯店入住
  {
    id: 'hotel',
    category: 'travel',
    tagZh: '住宿必備',
    tagEn: 'Hotel & Stay',
    icon: '🏨',
    image: 'hotel.jpg',
    titleZh: '飯店櫃台辦理入住 (Check-in)、退房與客房需求',
    titleEn: 'Hotel Check-in, Room Service & Late Check-out Requests',
    titleVi: 'Nhận Phòng & Đặt Phòng Tại Khách Sạn',
    summaryZh: '掌握飯店櫃台 Check-in 登記、支付押金、索取 Wi-Fi、更換遙控器、多要浴巾與水、以及免費延遲退房 (Late check-out) 申請。',
    summaryEn: 'Master hotel check-in, deposit payment, Wi-Fi password, AC remote replacement, extra towels/water, and free late check-out requests.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：櫃台 Check-in 登記、海景雙人房與早餐時間',
        titleVi: 'Hội Thoại 1: Nhận Phòng, Hướng Biển & Giờ Ăn Sáng',
        titleEn: 'Dialogue 1: Check-in, Ocean View Room & Breakfast',
        summaryZh: '出示線上訂房資訊與護照、支付押金五萬盾、詢問 Wi-Fi 密碼與自助早餐地點。',
        summaryEn: 'Present Agoda booking, pay deposit, get Wi-Fi password, and confirm breakfast hours.',
        lines: [
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ xin chào quý khách! Anh chị đã đặt phòng trước chưa ạ?',
            zh: '您好貴賓！請問您之前有預訂房間了嗎？',
            en: 'Hello distinguished guests! Have you made a reservation in advance?',
            northTip: '「Lễ tân」= 櫃台接待人員 (漢越詞：禮賓)。',
            southTip: '越南星級飯店櫃台接待普遍具備優雅英文與親和態度。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Tôi đã đặt phòng qua Agoda tên là Chen, phòng đôi hướng biển.',
            zh: '我透過 Agoda 預訂了房間，名字是 Chen，海景雙人房。',
            en: 'I booked a room via Agoda under the name Chen, double room with ocean view.',
            northTip: '「phòng đôi」= 雙人房；「phòng đơn」= 單人房。',
            southTip: '「hướng biển」= 面海海景；「hướng phố」= 面向市景。'
          },
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ em thấy rồi ạ. Xin anh cho mượn hộ chiếu và tiền đặt cọc năm trăm nghìn.',
            zh: '查到您的預訂了。請借我護照登記，並支付押金五十萬越南盾。',
            en: 'I found your booking. Please lend me your passport and a deposit of 500,000 VND.',
            northTip: '「tiền đặt cọc / tiền cọc」= 住宿押金，退房時全額退還。',
            southTip: '「năm trăm nghìn」= 500,000 VND (約台幣650元)。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Gửi em hộ chiếu và tiền cọc nhé. Mật khẩu Wi-Fi là gì vậy em?',
            zh: '給你護照和押金。請問 Wi-Fi 密碼是多少呢？',
            en: 'Here are my passport and deposit. What is the Wi-Fi password please?',
            northTip: '「Mật khẩu Wi-Fi」= Wi-Fi 連線密碼。',
            southTip: '多數飯店房卡套上都會貼心印有 Wi-Fi 帳密。'
          },
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ phòng anh ở tầng 8, số 802. Bữa sáng miễn phí từ sáu giờ đến chín giờ rưỡi tại tầng 2 ạ.',
            zh: '您的房間在 8 樓 802 號房。免費自助早餐在 2 樓，供應時間為 6:00 至 9:30。',
            en: 'Your room is on the 8th floor, room 802. Complimentary breakfast is on the 2nd floor from 6:00 to 9:30.',
            northTip: '「Bữa sáng miễn phí」= 免費附贈早餐。',
            southTip: '「chín giờ rưỡi」= 9:30。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：空調故障換電池、索取額外毛巾水與免費延遲退房',
        titleVi: 'Hội Thoại 2: Sửa Điều Hòa, Thêm Khăn Nước & Trả Phòng Muộn',
        titleEn: 'Dialogue 2: AC Repair, Extra Towels & Late Check-out',
        summaryZh: '致電櫃台派員更換冷氣遙控器電池、加送兩瓶水與大浴巾、並成功申請延遲退房至下午兩點。',
        summaryEn: 'Call reception to replace AC batteries, deliver extra water/towels, and get free late check-out to 2 PM.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Alo lễ tân phải không ạ? Phòng 802 điều hòa hơi lạnh và điều khiển bị hết pin.',
            zh: '喂，請問是櫃台嗎？802 號房冷氣有點太冷，而且遙控器似乎沒電了。',
            en: 'Hello, is this reception? In room 802 the AC is a bit too cold and the remote battery is dead.',
            northTip: '「điều hòa」= 空調冷氣 (南越常用 máy lạnh)；「hết pin」= 電池沒電。',
            southTip: '致電總機開頭說「Alo lễ tân ơi」最為道地自然。'
          },
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ em xin lỗi anh! Em sẽ cử nhân viên kỹ thuật lên thay pin và kiểm tra ngay ạ.',
            zh: '非常抱歉！我馬上派工程人員上去幫您更換電池並檢查空調。',
            en: 'We apologize for that sir! I will dispatch a technician to replace batteries and check it right away.',
            northTip: '「nhân viên kỹ thuật」= 水電工程技術人員。',
            southTip: '「cử lên ngay」= 立刻派員上樓服務。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho tôi xin thêm hai chai nước suối miễn phí và hai cái khăn tắm lớn nhé.',
            zh: '順便請幫我多送兩瓶免費礦泉水和兩條大浴巾喔。',
            en: 'Could I also request two extra complimentary bottles of water and two large bath towels?',
            northTip: '「nước suối」= 礦泉水；「khăn tắm lớn」= 大浴巾。',
            southTip: '客房備品在合理範圍內均可免費向櫃台索取。'
          },
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ vâng, nhân viên sẽ mang lên phòng cho anh trong vòng năm phút ạ.',
            zh: '好的，服務人員會在五分鐘內為您送達房間。',
            en: 'Yes sir, housekeeping will deliver them to your room within 5 minutes.',
            northTip: '「trong vòng năm phút」= 五分鐘之內。',
            southTip: '效率高且服務周到。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Ngày mai tôi muốn trả phòng muộn lúc hai giờ chiều có được không và có tính phí không?',
            zh: '明天我想延遲退房到下午兩點可以嗎？需要額外收費嗎？',
            en: 'Can I request a late check-out tomorrow at 2:00 PM, and is there any extra fee?',
            northTip: '「trả phòng muộn / trễ」= 延遲退房 (Late check-out)；「tính phí」= 額外收費。',
            southTip: '淡季或房況允許時多數飯店能提供 1~2 小時彈性免費延遲。'
          },
          {
            speaker: 'Lễ tân (櫃台接待)',
            role: 'npc',
            viet: 'Dạ khách sạn hỗ trợ anh trả phòng trễ đến mười bốn giờ hoàn toàn miễn phí ạ!',
            zh: '飯店為您免費支援延遲退房至下午 14:00，不收取額外費用喔！',
            en: 'Our hotel is happy to support your late check-out until 14:00 completely free of charge!',
            northTip: '「hoàn toàn miễn phí」= 完全免費。',
            southTip: '優質的服務體驗為旅程增添舒適與安心。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '房客 (Khách thuê phòng)',
      userRoleEn: 'Guest (Khách thuê phòng)',
      partnerRoleZh: '飯店櫃台 (Lễ tân khách sạn)',
      partnerRoleEn: 'Receptionist (Lễ tân)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ chào anh, anh đã đặt phòng trước chưa ạ? Cho em xin tên người đặt.',
          partnerPromptZh: '您好，請問有先預訂嗎？請給我訂房人姓名。',
          partnerPromptEn: 'Hello, do you have a reservation? Name please.',
          userOptions: [
            {
              id: 'ht1_opt1',
              textVi: 'Tôi đặt phòng qua Agoda tên là Chen, phòng đôi hướng biển.',
              textZh: '我透過 Agoda 訂房，名字是 Chen，海景雙人房。',
              textEn: 'I booked via Agoda under Chen, ocean view double room.',
              isCorrect: true,
              feedbackZh: '完全正確！完整提供預訂管道、姓名與房型。',
              feedbackEn: 'Correct! Provided booking channel, name, and room type.'
            },
            {
              id: 'ht1_opt2',
              textVi: 'Cho tôi một tô phở bò tái.',
              textZh: '給我一碗生牛肉河粉。',
              textEn: 'Give me a rare beef pho.',
              isCorrect: false,
              feedbackZh: '這是在餐廳點河粉的句子，請選擇 Check-in 回答！',
              feedbackEn: 'Restaurant phrase! Choose hotel check-in response.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Xin anh cho em mượn hộ chiếu và đặt cọc năm trăm nghìn ạ.',
          partnerPromptZh: '請借我護照並支付五十萬盾押金。',
          partnerPromptEn: 'Please lend passport and 500,000 VND deposit.',
          userOptions: [
            {
              id: 'ht2_opt1',
              textVi: 'Gửi em hộ chiếu và tiền cọc. Mật khẩu Wi-Fi là gì vậy em?',
              textZh: '給你護照和押金。請問 Wi-Fi 密碼是多少？',
              textEn: 'Here is passport and deposit. What is the Wi-Fi password?',
              isCorrect: true,
              feedbackZh: '非常自然！繳交押金同時詢問 Wi-Fi。',
              feedbackEn: 'Very natural! Handed deposit while asking for Wi-Fi.'
            },
            {
              id: 'ht2_opt2',
              textVi: 'Bác sĩ ơi tôi bị đau họng.',
              textZh: '醫生我喉嚨痛。',
              textEn: 'Doctor I have a sore throat.',
              isCorrect: false,
              feedbackZh: '這是看醫生的句子，請選護照押金選項！',
              feedbackEn: 'Doctor phrase! Select hotel response.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Phòng anh số 802 ở tầng 8 nhé. Chúc anh có kỳ nghỉ tuyệt vời!',
          partnerPromptZh: '您的房間是 8 樓 802 號，祝您假期愉快！',
          partnerPromptEn: 'Room 802 on 8th floor. Have a wonderful holiday!',
          userOptions: [
            {
              id: 'ht3_opt1',
              textVi: 'Cảm ơn em nhiều nhé! Tạm biệt em.',
              textZh: '非常感謝你！再見。',
              textEn: 'Thank you very much! Goodbye.',
              isCorrect: true,
              feedbackZh: '禮貌地結束入住登記手續！',
              feedbackEn: 'Politely finished the check-in procedure!'
            },
            {
              id: 'ht3_opt2',
              textVi: 'Cho tôi mua hai ký xoài.',
              textZh: '給我買兩公斤芒果。',
              textEn: 'Sell me two kilos of mangoes.',
              isCorrect: false,
              feedbackZh: '市場買水果句子，請禮貌向櫃台致謝！',
              feedbackEn: 'Market phrase! Thank the front desk.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Đặt phòng', zh: '預訂房間', en: 'Book a room' },
      { viet: 'Nhận phòng / Check-in', zh: '辦理入住登記', en: 'Check in' },
      { viet: 'Trả phòng / Check-out', zh: '辦理退房手續', en: 'Check out' },
      { viet: 'Tiền đặt cọc', zh: '住宿保證金 / 押金', en: 'Deposit' },
      { viet: 'Phòng đôi hướng biển', zh: '海景雙人房', en: 'Ocean view double room' },
      { viet: 'Điều hòa / Máy lạnh', zh: '空調冷氣 (北 điều hòa / 南 máy lạnh)', en: 'Air conditioning' },
      { viet: 'Trả phòng muộn', zh: '延遲退房 (Late check-out)', en: 'Late check-out' }
    ],
    cultureTips: [
      {
        titleZh: '越南飯店押金與護照登記法規',
        titleEn: 'Hotel Deposit & Passport Registration Laws',
        contentZh: '越南政府規定外籍旅客入住必須出示護照由櫃台掃描登記（或暫時保管）。押金 (Tiền cọc) 多數收現金 500k~1000k VND 或預授權信用卡，退房查房無損後原額退還。',
        contentEn: 'Vietnamese law mandates hotels register foreign guests passports. Cash deposits (500k-1M VND) or credit holds are fully refunded at checkout.'
      },
      {
        titleZh: '給飯店行李員與房務員的小費禮儀',
        titleEn: 'Tipping Etiquette for Hotel Staff',
        contentZh: '小費在越南並非硬性強制，但若行李員幫忙搬運行李上樓，或每日在床頭給予清潔人員 20,000~50,000 VND (約 25~65 台幣) 小費，服務人員會非常感謝並提供更細緻的照料。',
        contentEn: 'Tipping is not mandatory, but 20k-50k VND for bellboys or daily housekeeping is warmly appreciated.'
      }
    ]
  },

  // 8. Grab 叫車搭車
  {
    id: 'taxi',
    category: 'travel',
    tagZh: '出行必會',
    tagEn: 'Grab & Taxi Ride',
    icon: '🚕',
    image: 'taxi.jpg',
    titleZh: 'Grab 叫車確認、指示司機左轉右轉與靠邊停',
    titleEn: 'Riding Grab & Giving Driving Directions in Vietnamese',
    titleVi: 'Đi Xe Grab & Chỉ Đường Cho Tài Xế',
    summaryZh: '搭乘 Grab / 計程車必備：核對車牌、指示左右轉直走、遇塞車改道高架橋、調整冷氣、無現金電子支付與靠邊下車。',
    summaryEn: 'Grab/Taxi ride essentials: verify license plate, navigate left/right/straight, bypass traffic, adjust AC, cashless QR pay, and drop-off.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：確認目的地與車牌、指示轉彎與靠邊下車',
        titleVi: 'Hội Thoại 1: Xác Nhận Biển Số, Chỉ Rẽ & Xuống Xe',
        titleEn: 'Dialogue 1: License Plate, Navigation & Drop-off',
        summaryZh: '核對車輛車牌號碼、前往濱城市場、指示前方十字路口右轉五十米靠邊下車。',
        summaryEn: 'Confirm license plate, drive to Ben Thanh Market, turn right at intersection, and stop on the right curb.',
        lines: [
          {
            speaker: 'Tài xế (司機)',
            role: 'npc',
            viet: 'Dạ chào anh, anh đi đến chợ Bến Thành đúng không ạ?',
            zh: '您好哥，您要去濱城市場對嗎？',
            en: 'Hello sir, are you going to Ben Thanh Market?',
            northTip: '「Tài xế / Bác tài」= 司機大哥。',
            southTip: 'Grab 司機接單後會主動核對目的地名稱。'
          },
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Đúng rồi anh ơi. Xe mình biển số 51F-8888 đúng không?',
            zh: '沒錯大哥。我們這台車車牌是 51F-8888 對吧？',
            en: 'Thats right brother. Your car license plate is 51F-8888, correct?',
            northTip: '「biển số xe」= 車牌號碼。',
            southTip: '上車前務必核對手機 App 顯示之車牌與車型。'
          },
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Đến ngã tư phía trước anh rẽ phải, rồi đi thẳng năm mươi mét nhé.',
            zh: '到前面十字路口請右轉，然後直走五十公尺喔。',
            en: 'At the intersection ahead please turn right, then go straight for 50 meters.',
            northTip: '「ngã tư」= 十字路口；「ngã ba」= 三叉路口/丁字路口。',
            southTip: '「rẽ phải」= 右轉 (南越常說 quẹo phải)；「rẽ trái」= 左轉 (南越 quẹo trái)。'
          },
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Tới nơi rồi anh ơi! Cho tôi xuống ở lề đường bên phải nhé.',
            zh: '到了到了大哥！請讓我在右邊路旁下車喔。',
            en: 'We have arrived brother! Please let me get off on the right curb.',
            northTip: '「Tới nơi rồi / Đến nơi rồi」= 到達目的地了。',
            southTip: '「lề đường」= 路旁 / 路邊；「dừng xe」= 停靠停車。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：遇塞車改走外環高架、調小冷氣、無現金 Momo 支付',
        titleVi: 'Hội Thoại 2: Kẹt Xe Đi Đường Vòng, Chỉnh Máy Lạnh & Quét Momo',
        titleEn: 'Dialogue 2: Bypassing Traffic, Adjusting AC & Momo QR Pay',
        summaryZh: '遇到大塞車要求司機改走河畔外環高架橋、調高車內冷氣溫度、使用信用卡或 Momo 電子錢包掃碼付款。',
        summaryEn: 'Reroute to river bypass overpass during heavy traffic, adjust cold AC, and scan Momo QR code for cashless pay.',
        lines: [
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Anh tài xế ơi, phía trước hình như đang kẹt xe đông quá, có đường nào đi nhanh hơn không anh?',
            zh: '司機大哥，前面好像嚴重塞車，有其他比較快的小路可以繞嗎？',
            en: 'Driver, it looks like there is a huge traffic jam ahead, is there a faster shortcut route?',
            northTip: '「kẹt xe」= 塞車 (北越常用 tắc đường)。',
            southTip: '胡志明市尖峰時段塞車嚴重，司機熟悉各類後街巷弄。'
          },
          {
            speaker: 'Tài xế (司機)',
            role: 'npc',
            viet: 'Dạ giờ cao điểm đường này hay tắc. Mình rẽ vào đường tránh ven sông đi cầu vượt sẽ nhanh hơn mười phút đấy anh.',
            zh: '尖峰時間這條路很塞。我們切進河畔外環道走高架橋會快十分鐘喔。',
            en: 'During rush hour this street is always jammed. If we turn into the riverside bypass over the flyover it will be 10 minutes faster.',
            northTip: '「giờ cao điểm」= 尖峰交通時段；「cầu vượt」= 高架橋/立交橋。',
            southTip: '「đường tránh ven sông」= 沿河外環避堵道路。'
          },
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Vậy anh rẽ đường đó giúp tôi nhé. Với lại phiền anh chỉnh điều hòa nhỏ lại một chút, trong xe hơi lạnh.',
            zh: '那麻煩大哥幫我改走那條路。另外冷氣幫我調小一點，車裡有點太冷了。',
            en: 'Please take that route then. Also could you turn down the AC a bit, its quite chilly inside.',
            northTip: '「chỉnh điều hòa nhỏ lại」= 把冷氣調小；「trong xe hơi lạnh」= 車裡有點冷。',
            southTip: '越南司機習慣把冷氣開到極強，隨時可禮貌要求調溫。'
          },
          {
            speaker: 'Tài xế (司機)',
            role: 'npc',
            viet: 'Dạ vâng, em đã tăng nhiệt độ điều hòa lên rồi. Anh xem đã vừa chưa ạ?',
            zh: '好的，我已經把空調溫度調高了。您看這樣溫度可以嗎？',
            en: 'Sure thing, I have raised the AC temperature. Is this comfortable for you now?',
            northTip: '「tăng nhiệt độ」= 調高溫度。',
            southTip: '服務態度良好貼心。'
          },
          {
            speaker: 'Hành khách (乘客)',
            role: 'learner',
            viet: 'Tôi không có tiền mặt nhỏ, tôi thanh toán bằng thẻ tín dụng hoặc quét mã Momo được không anh?',
            zh: '我身上沒有小額零錢，可以用信用卡刷卡或掃 Momo 電子錢包轉帳嗎？',
            en: 'I dont have small cash change, can I pay by credit card or scan your Momo e-wallet QR code?',
            northTip: '「tiền mặt」= 現金；「thẻ tín dụng」= 信用卡。',
            southTip: '「Momo / ZaloPay」是越南目前最通行的國民電子錢包。'
          },
          {
            speaker: 'Tài xế (司機)',
            role: 'npc',
            viet: 'Dạ được chứ anh, anh cứ quét mã QR dán trên lưng ghế lái là được ạ.',
            zh: '當然可以，您直接掃描貼在駕駛座椅背上的 QR Code 就可以了喔。',
            en: 'Of course sir, just scan the QR code sticker on the back of the drivers seat.',
            northTip: '「quét mã QR」= 掃描 QR 碼。',
            southTip: '「lưng ghế lái」= 駕駛座椅後背。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '乘客 (Hành khách)',
      userRoleEn: 'Passenger (Hành khách)',
      partnerRoleZh: 'Grab 司機 (Tài xế Grab)',
      partnerRoleEn: 'Grab Driver (Tài xế)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ chào anh, anh có phải là khách đặt chuyến đi chợ Bến Thành không ạ?',
          partnerPromptZh: '您好，您是叫車去濱城市場的乘客嗎？',
          partnerPromptEn: 'Hello, are you the passenger going to Ben Thanh Market?',
          userOptions: [
            {
              id: 'tx1_opt1',
              textVi: 'Đúng rồi anh, xe mình biển số 51F-8888 đúng không?',
              textZh: '沒錯，我們車牌是 51F-8888 對吧？',
              textEn: 'Yes brother, your plate is 51F-8888 right?',
              isCorrect: true,
              feedbackZh: '完全正確！上車前確認車牌是最安全的好習慣。',
              feedbackEn: 'Correct! Verifying the license plate is a smart safety habit.'
            },
            {
              id: 'tx1_opt2',
              textVi: 'Cho tôi một bát chè bưởi.',
              textZh: '給我一碗柚皮甜湯。',
              textEn: 'Give me a pomelo sweet soup.',
              isCorrect: false,
              feedbackZh: '這是甜品店點餐，請選擇確認叫車的回答！',
              feedbackEn: 'Dessert phrase! Choose taxi confirmation.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Đến đoạn đường này anh muốn đi thế nào tiếp theo ạ?',
          partnerPromptZh: '到這段路您想怎麼走呢？',
          partnerPromptEn: 'How would you like to proceed on this stretch?',
          userOptions: [
            {
              id: 'tx2_opt1',
              textVi: 'Đến ngã tư phía trước anh rẽ phải, rồi đi thẳng năm mươi mét nhé.',
              textZh: '到前面十字路口請右轉，然後直走五十公尺。',
              textEn: 'At the front intersection turn right, then go straight 50m.',
              isCorrect: true,
              feedbackZh: '非常清晰流暢的方向指示！',
              feedbackEn: 'Clear and fluent navigation direction!'
            },
            {
              id: 'tx2_opt2',
              textVi: 'Tôi muốn mua thuốc hạ sốt.',
              textZh: '我想買退燒藥。',
              textEn: 'I want to buy fever medicine.',
              isCorrect: false,
              feedbackZh: '這是藥局買藥句子，指示方向請用「rẽ phải / đi thẳng」！',
              feedbackEn: 'Pharmacy phrase! Use navigation directions.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Dạ tới nơi rồi anh nhé, hết sáu mươi nghìn đồng ạ.',
          partnerPromptZh: '到目的地囉，總共六萬越南盾。',
          partnerPromptEn: 'We have arrived, 60,000 VND please.',
          userOptions: [
            {
              id: 'tx3_opt1',
              textVi: 'Cho tôi xuống ở lề đường bên phải nhé. Gửi anh tiền, cảm ơn anh!',
              textZh: '請讓我在右邊路旁下車。給你錢，謝謝大哥！',
              textEn: 'Drop me on right curb please. Here is money, thanks brother!',
              isCorrect: true,
              feedbackZh: '完美指示下車點並完成支付！',
              feedbackEn: 'Perfect drop-off spot specification and payment!'
            },
            {
              id: 'tx3_opt2',
              textVi: 'Hộ chiếu của tôi bị hết hạn.',
              textZh: '我的護照過期了。',
              textEn: 'My passport has expired.',
              isCorrect: false,
              feedbackZh: '這是簽證過期句子，請選付費下車選項！',
              feedbackEn: 'Passport sentence! Choose payment response.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Biển số xe', zh: '車牌號碼', en: 'License plate' },
      { viet: 'Rẽ phải / Quẹo phải', zh: '右轉 (北 rẽ / 南 quẹo)', en: 'Turn right' },
      { viet: 'Rẽ trái / Quẹo trái', zh: '左轉', en: 'Turn left' },
      { viet: 'Đi thẳng', zh: '直走', en: 'Go straight' },
      { viet: 'Ngã tư / Ngã ba', zh: '十字路口 / 三叉路口', en: 'Intersection / T-junction' },
      { viet: 'Kẹt xe / Tắc đường', zh: '塞車 (南 kẹt xe / 北 tắc đường)', en: 'Traffic jam' },
      { viet: 'Lề đường', zh: '路旁 / 路緣', en: 'Curb / Roadside' }
    ],
    cultureTips: [
      {
        titleZh: '越南搭乘計程車與 Grab 安全心法',
        titleEn: 'Grab & Taxi Safety Tips in Vietnam',
        contentZh: '強烈推薦下載「Grab」或「Xanh SM (電動車)」App，價格透明、信用卡扣款防敲竹槓。若在路邊攔車，僅推薦大型正規車隊「Mai Linh (綠色)」或「Vinasun (白色)」，上車確認跳表 (Bật đồng hồ)。',
        contentEn: 'Use Grab or Xanh SM apps for transparent pricing. If hailing on the street, only take official Mai Linh (green) or Vinasun (white) taxis with meters on.'
      },
      {
        titleZh: '南北越指示方向用語差異',
        titleEn: 'Regional Driving Direction Vocabulary',
        contentZh: '在河內（北越）轉彎說「Rẽ phải / Rẽ trái」；在西貢（南越）一律說「Quẹo phải / Quẹo trái」。直走北越說「Đi thẳng」，南越說「Đi tuốt」。',
        contentEn: 'In Hanoi use "Rẽ" for turns; in Saigon use "Quẹo". For straight, North uses "Đi thẳng", South often says "Đi tuốt".'
      }
    ]
  },

  // 9. 傳統市場與夜市
  {
    id: 'market',
    category: 'shopping',
    tagZh: '殺價買水果',
    tagEn: 'Bargaining at Market',
    icon: '🥭',
    image: 'market.jpg',
    titleZh: '傳統市場與觀光夜市挑選水果、問價與殺價',
    titleEn: 'Shopping for Tropical Fruit & Bargaining at Local Markets',
    titleVi: 'Đi Chợ, Mua Trái Cây & Mặc Cả Giá',
    summaryZh: '市場採買技巧：問水果一公斤多少錢、殺價技巧（買多算批發價）、試吃腰果乾果特產、請老闆真空包裝帶上飛機。',
    summaryEn: 'Market shopping mastery: ask price per kilo, bargain for discounts, sample roasted cashews/dried fruit, and request vacuum sealing for flights.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：挑選特級和祿芒果與開市殺價',
        titleVi: 'Hội Thoại 1: Chọn Xoài Cát Hòa Lộc & Mặc Cả Mở Hàng',
        titleEn: 'Dialogue 1: Picking Hoa Loc Mangoes & Bargaining',
        summaryZh: '詢問頂級和祿芒果價格、買三公斤爭取一公斤四萬五千盾開市優惠價。',
        summaryEn: 'Ask for top-grade Hoa Loc mango price and negotiate discount for buying 3kg.',
        lines: [
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Em gái ơi, mua xoài cát Hòa Lộc hay thanh long đi em, trái cây vườn tươi ngọt lắm!',
            zh: '小妹/阿弟，來買和祿芒果還是火龍果吧，自家果園剛採的鮮甜多汁喔！',
            en: 'Come buy Hoa Loc mangoes or dragon fruit, orchard fresh and very sweet!',
            northTip: '「Xoài cát Hòa Lộc」= 越南公認最頂級甘甜多汁的芒果品種。',
            southTip: '市場攤販大姐極熱情，常以「Em ơi / Cháu ơi」拉近距離。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Chị ơi, xoài này bao nhiêu tiền một ký vậy chị?',
            zh: '大姐，這芒果一公斤多少錢呀？',
            en: 'Sister, how much is this mango per kilo?',
            northTip: '一公斤：南越說「một ký / một kg」，北越說「một cân」。',
            southTip: '「Bao nhiêu tiền một ký?」是市場買菜黃金必備句。'
          },
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Xoài cát loại một sáu mươi nghìn một ký em nhé. Mua hai ký chị tính một trăm nghìn thôi.',
            zh: '特級芒果一公斤六萬盾 (60k)。買兩公斤大姐算你十萬盾就好。',
            en: 'Grade-A mango is 60,000 VND per kg. Buy 2 kg and I will charge you only 100,000 VND.',
            northTip: '「loại một」= 特等/一級品。',
            southTip: '買多攤販通常會主動給予小幅折讓。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Bốn mươi lăm nghìn một ký được không chị? Em lấy ba ký luôn.',
            zh: '一公斤四萬五可以嗎大姐？我可以一次拿三公斤喔。',
            en: 'How about 45,000 VND per kg sister? I will take 3 kg at once.',
            northTip: '「Bớt đi chị」= 算便宜一點啦大姐。',
            southTip: '「Em lấy ba ký luôn」以批量購買作為殺價籌碼。'
          },
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Thôi được rồi, mở hàng chị bớt cho em, ba ký hết một trăm ba mươi lăm nghìn.',
            zh: '好啦好啦，今天開市算你便宜，三公斤總共十三萬五千盾 (135,000 VND)。',
            en: 'Alright, for good morning luck I give you discount, 3 kg totals 135,000 VND.',
            northTip: '「mở hàng」= 早市開張/開市第一筆生意。',
            southTip: '越南商人非常重視「開張吉利」，早晨買通常最好殺價。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：試吃鹽炒腰果與果乾、算批發價與抽真空包裝',
        titleVi: 'Hội Thoại 2: Ăn Thử Hạt Điều, Giá Sỉ & Hút Chân Không',
        titleEn: 'Dialogue 2: Cashew Sampling, Wholesale Price & Vacuum Seal',
        summaryZh: '試吃平福頂級帶皮鹽焗腰果與波羅蜜脆片、購買五盒爭取批發折扣並用厚袋抽真空密封帶上飛機。',
        summaryEn: 'Sample Binh Phuoc salted cashews and jackfruit chips, negotiate wholesale price, and get vacuum sealed bags for luggage.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cô ơi, hạt điều rang muối và mít sấy này cháu có thể ăn thử một miếng được không ạ?',
            zh: '阿姨，這鹽炒腰果和菠蘿蜜脆片我可以試吃一小塊看看嗎？',
            en: 'Auntie, can I try a small sample piece of these salted roasted cashews and dried jackfruit chips?',
            northTip: '「hạt điều rang muối」= 越南名產帶皮鹽焗腰果；「mít sấy」= 波羅蜜脆片。',
            southTip: '「ăn thử」= 試吃；正規市場攤位都非常歡迎顧客先嚐後買。'
          },
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Ăn thử thoải mái đi cháu ơi! Hạt điều Bình Phước loại to nhất, giòn thơm đậm đà lắm.',
            zh: '儘管隨便試吃！平福省特級大顆腰果，香脆濃郁非常好吃喔。',
            en: 'Feel free to sample as much as you like! These are top-size Binh Phuoc cashews, extra crunchy and fragrant.',
            northTip: '「Bình Phước」= 越南腰果之鄉（平福省），品質冠絕全球。',
            southTip: '「thoải mái」= 隨心所欲、別客氣。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Ngon quá cô ạ! Nếu cháu mua năm hộp hạt điều và ba bịch cà phê thì cô có giảm giá không?',
            zh: '好好吃喔！如果我買五盒腰果和三包咖啡豆，阿姨可以算便宜一點嗎？',
            en: 'So delicious! If I purchase 5 boxes of cashews and 3 bags of coffee, could you give me a discount?',
            northTip: '「hộp」= 盒裝；「bịch / gói」= 袋裝/包裝。',
            southTip: '批量購買（5盒以上）是爭取大額批發價的最佳時機。'
          },
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Mua nhiều thế cô tính giá sỉ cho cháu, giảm mười phần trăm và tặng thêm một bịch xoài sấy dẻo nhé.',
            zh: '買這麼多阿姨算你批發價，總價打九折再送你一包特級芒果乾喔。',
            en: 'Buying so many, I will charge you wholesale price with 10% off and gift you a bag of soft dried mangoes.',
            northTip: '「giá sỉ」= 批發價；「giá lẻ」= 零售價。',
            southTip: '「xoài sấy dẻo」= 軟韌甘甜的越式芒果乾。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Tuyệt vời quá! Cô hút chân không giúp cháu để cháu đóng vào vali mang lên máy bay nhé.',
            zh: '太棒了！請阿姨幫我用機器抽真空密封，方便我裝進行李箱帶上飛機喔。',
            en: 'Awesome! Please vacuum-seal them for me so I can pack them into my suitcase for the flight.',
            northTip: '「hút chân không」= 機器抽真空包裝 (漢越詞：吸真空)。',
            southTip: '特產抽真空後體積大幅縮小且可防潮保鮮長達一年。'
          },
          {
            speaker: 'Chị bán hàng (攤販大姐)',
            role: 'npc',
            viet: 'Được ngay cháu ơi! Cô dùng túi dày hút chân không kín mít, để được cả năm không sợ ẩm.',
            zh: '馬上幫你用厚袋子抽真空封好，放一整年都不怕受潮變質喔。',
            en: 'Right away! I will use thick bags to seal them airtight, they will keep for a whole year without getting soggy.',
            northTip: '「kín mít」= 密不透風；「không sợ ẩm」= 不怕受潮。',
            southTip: '熱情周到的市場文化令人感到溫暖。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách mua hàng)',
      userRoleEn: 'Shopper (Khách mua hàng)',
      partnerRoleZh: '市場攤販大姐 (Chị bán hàng)',
      partnerRoleEn: 'Market Vendor (Chị bán hàng)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Em ơi, xoài cát Hòa Lộc vườn mới hái ngon lắm, mua ủng hộ chị đi!',
          partnerPromptZh: '新摘的和祿芒果很甜，買幾斤捧場一下吧！',
          partnerPromptEn: 'Freshly picked Hoa Loc mangoes, please support me!',
          userOptions: [
            {
              id: 'mk1_opt1',
              textVi: 'Chị ơi, xoài này bao nhiêu tiền một ký vậy chị?',
              textZh: '大姐，這芒果一公斤多少錢？',
              textEn: 'Sister, how much is this mango per kilo?',
              isCorrect: true,
              feedbackZh: '完全正確！標準第一步先詢問單價。',
              feedbackEn: 'Correct! Standard first step is asking the unit price.'
            },
            {
              id: 'mk1_opt2',
              textVi: 'Tôi muốn gửi hai kiện hành lý ký gửi.',
              textZh: '我想托運兩件行李。',
              textEn: 'I want to check in two bags.',
              isCorrect: false,
              feedbackZh: '這是機場托運行李句子，市場買水果請選問價！',
              feedbackEn: 'Airport luggage phrase! Ask for fruit price.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Xoài loại một sáu mươi nghìn một ký em ơi, mua hai ký chị tính một trăm nghìn.',
          partnerPromptZh: '特級一公斤六萬，買兩公斤算十萬。',
          partnerPromptEn: 'Grade A 60k/kg, buy 2kg for 100k.',
          userOptions: [
            {
              id: 'mk2_opt1',
              textVi: 'Bốn mươi lăm nghìn một ký được không chị? Em lấy ba ký luôn.',
              textZh: '一公斤四萬五可以嗎？我直接拿三公斤。',
              textEn: '45k/kg ok? I will take 3kg right away.',
              isCorrect: true,
              feedbackZh: '非常聰明！以買 3 公斤的量達成殺價目標。',
              feedbackEn: 'Very smart! Bargained effectively by increasing quantity.'
            },
            {
              id: 'mk2_opt2',
              textVi: 'Đến ngã tư rẽ phải.',
              textZh: '到十字路口右轉。',
              textEn: 'Turn right at intersection.',
              isCorrect: false,
              feedbackZh: '這是計程車指路句子，市場殺價請出價！',
              feedbackEn: 'Taxi direction sentence! Make a price offer.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Được rồi, mở hàng bớt cho em, ba ký hết một trăm ba mươi lăm nghìn nhé!',
          partnerPromptZh: '好啦開市算你便宜，三公斤十三萬五千盾！',
          partnerPromptEn: 'Alright, morning discount, 3kg is 135,000 VND!',
          userOptions: [
            {
              id: 'mk3_opt1',
              textVi: 'Dạ em gửi chị tiền. Chọn cho em mấy trái chín ngọt nhé!',
              textZh: '我付錢給您。幫我挑幾顆熟甜的喔！',
              textEn: 'Here is the money. Pick sweet ripe ones for me!',
              isCorrect: true,
              feedbackZh: '非常地道的買水果收尾對話！',
              feedbackEn: 'Authentic market deal completion!'
            },
            {
              id: 'mk3_opt2',
              textVi: 'Phòng 802 điều hòa bị hỏng.',
              textZh: '802 號房冷氣壞了。',
              textEn: 'Room 802 AC is broken.',
              isCorrect: false,
              feedbackZh: '飯店投訴句子，請用付錢買水果選項！',
              feedbackEn: 'Hotel phrase! Use payment phrase.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bao nhiêu tiền một ký?', zh: '一公斤多少錢？', en: 'How much per kilo?' },
      { viet: 'Xoài cát Hòa Lộc', zh: '和祿芒果 (頂級品種)', en: 'Hoa Loc sweet mango' },
      { viet: 'Hạt điều rang muối', zh: '帶皮鹽焗腰果', en: 'Salted roasted cashews' },
      { viet: 'Mặc cả / Trả giá', zh: '殺價 / 討價還價', en: 'Bargain / Negotiate price' },
      { viet: 'Bớt đi', zh: '算便宜一點 / 減價', en: 'Give a discount' },
      { viet: 'Mở hàng', zh: '開市 / 開張生財', en: 'First morning sale' },
      { viet: 'Hút chân không', zh: '抽真空包裝', en: 'Vacuum seal' }
    ],
    cultureTips: [
      {
        titleZh: '越南市場殺價文化與「開市 (Mở hàng)」禁忌',
        titleEn: 'Market Bargaining & "Mở Hàng" Superstition',
        contentZh: '清晨是攤販最重視的「Mở hàng (開市)」時段，老闆希望第一筆成交順利討個好彩頭，通常最容易殺價。但若在清晨第一攤議價很久卻不買走人，會被視為不吉利。',
        contentEn: 'Morning first sales (Mở hàng) bring luck for the day, making it easy to bargain. However, haggling hard without buying on the first morning sale is considered unlucky.'
      },
      {
        titleZh: '觀光夜市與傳統市集的買水果心法',
        titleEn: 'Buying Tropical Fruits at Night Markets',
        contentZh: '像胡志明市濱城市場 (Chợ Bến Thành) 或峴港漢市場 (Chợ Hàn)，觀光客報價通常會高出20%~40%。對半砍或從6折開始談，並搭配微笑與「Bớt cho em đi chị (算便宜一點啦大姐)」最具成效。',
        contentEn: 'Tourist markets quote 20-40% higher. Counter-offer starting around 60-70% with friendly smiles and polite bargaining phrases.'
      }
    ]
  },

  // 10. 便利商店
  {
    id: 'convenience',
    category: 'shopping',
    tagZh: '生活必用',
    tagEn: 'Convenience Store',
    icon: '🏪',
    image: 'convenience.jpg',
    titleZh: '便利商店買零食泡麵、微波加熱與要塑膠袋',
    titleEn: 'Convenience Store (Circle K / WinMart) Shopping & Services',
    titleVi: 'Mua Sắm Tại Cửa Hàng Tiện Lợi (Circle K / WinMart)',
    summaryZh: '超商全方位服務：買泡麵零食、微波加熱、索取塑膠袋、購買 4G 旅遊 SIM 卡開通、尋找國際 ATM 與加購純淨冰塊杯。',
    summaryEn: 'Store services: snacks/instant noodles, microwave heating, plastic bags, 4G tourist SIM card activation, international ATM, and ice cups.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：零食結帳、微波加熱包子與索取提袋',
        titleVi: 'Hội Thoại 1: Tính Tiền, Hâm Nóng Bánh Bao & Túi Nilon',
        titleEn: 'Dialogue 1: Checkout, Microwave Bun & Plastic Bag',
        summaryZh: '結帳泡麵零食、確認無會員卡、請店員微波加熱包子並多拿一個塑膠袋。',
        summaryEn: 'Checkout snacks, decline membership card, microwave steamed bun, and ask for a plastic bag.',
        lines: [
          {
            speaker: 'Thu ngân (收銀員)',
            role: 'npc',
            viet: 'Dạ xin chào anh! Anh có thẻ thành viên không ạ?',
            zh: '您好哥！請問您有會員卡嗎？',
            en: 'Hello sir! Do you have a membership card?',
            northTip: '「thẻ thành viên」= 會員卡 (漢越詞：成員卡)。',
            southTip: '超商收銀員制式開場白。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Tôi không có thẻ. Tính tiền giúp tôi mấy món này nhé.',
            zh: '我沒有會員卡。幫我結帳這幾樣東西喔。',
            en: 'I dont have a card. Please ring up these items for me.',
            northTip: '「Tính tiền giúp tôi」= 請幫我結帳。',
            southTip: '「mấy món này」= 這幾件物品。'
          },
          {
            speaker: 'Thu ngân (收銀員)',
            role: 'npc',
            viet: 'Bánh bao này anh có cần hâm nóng lại bằng lò vi sóng không ạ?',
            zh: '這顆包子您需要用微波爐加熱嗎？',
            en: 'Would you like this steamed bun reheated in the microwave?',
            northTip: '「hâm nóng」= 微波加熱/熱一下；「lò vi sóng」= 微波爐。',
            southTip: 'Circle K、FamilyMart 均提供免費便當與熱食微波服務。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Có, hâm nóng giúp tôi với, và cho tôi xin thêm một cái túi nilon nhé.',
            zh: '好的，請幫我加熱，並再給我一個塑膠提袋喔。',
            en: 'Yes, please reheat it for me, and could I get a plastic bag please?',
            northTip: '「túi nilon」= 塑膠袋/手提膠袋。',
            southTip: '越南超商塑膠袋多數免費或僅收象徵性小額費用。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：購買開通 4G 旅遊 SIM 卡、國際 ATM 提款與冰塊杯',
        titleVi: 'Hội Thoại 2: Mua Sim 4G Du Lịch, Cây ATM & Ly Đá Viên',
        titleEn: 'Dialogue 2: 4G Travel SIM, International ATM & Ice Cup',
        summaryZh: '購買 Viettel 30 天 4G 高速旅遊上網卡並現場開通、詢問國際提款 ATM 位置與加購兩千盾純淨冰塊杯。',
        summaryEn: 'Buy and activate 30-day 4G Viettel SIM card, locate international ATM machine, and grab 2k VND ice cup.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Bạn ơi, cửa hàng mình có bán sim 4G du lịch của Viettel hoặc Vinaphone không?',
            zh: '店員你好，請問店裡有賣 Viettel 或 Vinaphone 的 4G 旅遊上網 SIM 卡嗎？',
            en: 'Excuse me, does your store sell Viettel or Vinaphone 4G tourist SIM cards?',
            northTip: '「sim 4G du lịch」= 4G 旅遊電話卡。',
            southTip: 'Viettel 是越南覆蓋率最廣、訊號最強的國營電信運營商。'
          },
          {
            speaker: 'Thu ngân (收銀員)',
            role: 'npc',
            viet: 'Dạ có ạ! Bên em có gói ba mươi ngày, mỗi ngày sáu gigabyte tốc độ cao giá một trăm năm mươi nghìn.',
            zh: '有的！我們有 30 天方案，每天 6GB 高速上網流量，價格是十五萬越南盾。',
            en: 'Yes! We have a 30-day package with 6GB high-speed data per day for 150,000 VND.',
            northTip: '150,000 VND (約台幣190元)，性價比極高。',
            southTip: '「tốc độ cao」= 高速流量。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Lắp sim và kích hoạt giúp tôi với nhé. Với lại ở gần đây có cây ATM nào rút tiền quốc tế không bạn?',
            zh: '請幫我安裝並開通 SIM 卡。另外這附近有可以跨國提款的 ATM 機台嗎？',
            en: 'Please help me insert and activate the SIM. Also is there any international ATM nearby to withdraw cash?',
            northTip: '「kích hoạt」= 開通啟用；「cây ATM」= 自動櫃員提款機。',
            southTip: '超商店員熟練掌握換卡開通流程。'
          },
          {
            speaker: 'Thu ngân (收銀員)',
            role: 'npc',
            viet: 'Dạ ngay bên cạnh cửa ra vào có cây ATM của ngân hàng Vietcombank nhận thẻ quốc tế Visa và Mastercard ạ.',
            zh: '大門口旁邊就有一台 Vietcombank 的 ATM，支援 Visa 和 Mastercard 國際卡提款喔。',
            en: 'Right next to the entrance there is a Vietcombank ATM that accepts international Visa and Mastercard.',
            northTip: 'Vietcombank 與 BIDV 是越南最大的國有商業銀行。',
            southTip: '「cửa ra vào」= 出入大門。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho tôi lấy thêm một ly đá viên và một chai nước khoáng thiên nhiên nhé.',
            zh: '幫我多拿一杯純淨冰塊杯，和一瓶天然礦泉水喔。',
            en: 'Please also give me one cup of ice cubes and a bottle of natural mineral water.',
            northTip: '「ly đá viên」= 裝滿衛生冰塊的塑膠杯；「nước khoáng」= 礦泉水。',
            southTip: '在超商買飲料配一杯 2,000 VND 冰塊杯是越南在地經典吃法。'
          },
          {
            speaker: 'Thu ngân (收銀員)',
            role: 'npc',
            viet: 'Dạ ly đá hai nghìn, nước suối sáu nghìn, của anh tất cả là một trăm năm mươi tám nghìn ạ.',
            zh: '冰塊杯兩千盾，礦泉水六千盾，您總共是一萬五萬八千盾喔。',
            en: 'The ice cup is 2,000 VND, water is 6,000 VND, your total is 158,000 VND.',
            northTip: '價格極度透明實惠。',
            southTip: '支援刷卡、Apple Pay 與現金支付。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách mua sắm)',
      userRoleEn: 'Shopper (Khách mua sắm)',
      partnerRoleZh: '超商收銀員 (Thu ngân)',
      partnerRoleEn: 'Cashier (Thu ngân)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ xin chào anh! Anh có dùng thẻ thành viên tích điểm không ạ?',
          partnerPromptZh: '您好，有會員卡集點嗎？',
          partnerPromptEn: 'Hello, any membership card to earn points?',
          userOptions: [
            {
              id: 'cv1_opt1',
              textVi: 'Tôi không có thẻ. Tính tiền giúp tôi mấy món này nhé.',
              textZh: '我沒有卡，幫我結帳這幾樣東西。',
              textEn: 'I dont have one. Ring up these items please.',
              isCorrect: true,
              feedbackZh: '完全正確！簡潔明瞭的超商結帳應答。',
              feedbackEn: 'Correct! Concise and clear cashier response.'
            },
            {
              id: 'cv1_opt2',
              textVi: 'Tôi muốn đặt một phòng hướng biển.',
              textZh: '我想訂一間海景房。',
              textEn: 'I want to book an ocean view room.',
              isCorrect: false,
              feedbackZh: '這是飯店訂房句子，請選超商結帳選項！',
              feedbackEn: 'Hotel booking phrase! Choose convenience store phrase.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Bánh bao và xúc xích này anh có cần hâm nóng lò vi sóng không?',
          partnerPromptZh: '包子和熱狗需要用微波爐加熱嗎？',
          partnerPromptEn: 'Microwave the bun and sausage for you?',
          userOptions: [
            {
              id: 'cv2_opt1',
              textVi: 'Có, hâm nóng giúp tôi với, và cho tôi xin thêm một cái túi nilon nhé.',
              textZh: '好的請幫我加熱，並給我一個塑膠袋。',
              textEn: 'Yes reheat please, and give me a plastic bag.',
              isCorrect: true,
              feedbackZh: '非常實用！要求加熱與塑膠袋的標準句型。',
              feedbackEn: 'Very useful! Standard way to ask for reheating and bags.'
            },
            {
              id: 'cv2_opt2',
              textVi: 'Cho tôi một bát phở bò nạm.',
              textZh: '給我一碗熟牛腩河粉。',
              textEn: 'Give me a beef brisket pho.',
              isCorrect: false,
              feedbackZh: '這是河粉店句子，請專注於微波與塑膠袋！',
              feedbackEn: 'Pho shop phrase! Focus on microwave heating.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Của anh tổng cộng năm mươi tám nghìn đồng, anh thanh toán tiền mặt hay chuyển khoản?',
          partnerPromptZh: '總共五萬八千盾，您付現金還是轉帳？',
          partnerPromptEn: 'Total is 58,000 VND, cash or bank transfer?',
          userOptions: [
            {
              id: 'cv3_opt1',
              textVi: 'Tôi thanh toán bằng tiền mặt. Gửi em sáu mươi nghìn.',
              textZh: '我用現金結帳。給你六萬盾。',
              textEn: 'I pay by cash. Here is 60,000 VND.',
              isCorrect: true,
              feedbackZh: '順利且俐落地完成超商消費！',
              feedbackEn: 'Smoothly completed the convenience store purchase!'
            },
            {
              id: 'cv3_opt2',
              textVi: 'Cho tôi một ly cà phê ít đường.',
              textZh: '給我一杯少糖咖啡。',
              textEn: 'Give me a less-sugar coffee.',
              isCorrect: false,
              feedbackZh: '咖啡廳句子，結帳請選擇現金支付！',
              feedbackEn: 'Cafe phrase! Choose cash payment.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Cửa hàng tiện lợi', zh: '便利商店', en: 'Convenience store' },
      { viet: 'Thẻ thành viên', zh: '會員卡', en: 'Membership card' },
      { viet: 'Hâm nóng', zh: '加熱 / 微波', en: 'Reheat / Microwave' },
      { viet: 'Lò vi sóng', zh: '微波爐', en: 'Microwave oven' },
      { viet: 'Túi nilon', zh: '塑膠手提袋', en: 'Plastic bag' },
      { viet: 'Sim 4G du lịch', zh: '4G 旅遊上網卡', en: '4G Tourist SIM' },
      { viet: 'Cây ATM', zh: 'ATM 自動提款機', en: 'ATM cash machine' }
    ],
    cultureTips: [
      {
        titleZh: '越南兩大便利商店體系：Circle K vs WinMart+',
        titleEn: 'Convenience Store Chains in Vietnam',
        contentZh: '「Circle K」24 小時營業，設有冷氣座位區，以現調奶茶、微波熱食與冰塊杯著稱，是年輕人深夜聚會熱點；「WinMart+」隸屬越南最大零售集團，以生鮮蔬果、生活百貨為特色。',
        contentEn: 'Circle K is 24/7 with AC seating, hot snacks, and ice drinks. WinMart+ focuses on groceries, fresh fruits, and daily necessities.'
      },
      {
        titleZh: '超商買飲料加購冰塊杯 (Ly đá) 的道地習慣',
        titleEn: 'The Ice Cup (Ly Đá) Habit at Stores',
        contentZh: '走進越南超商買罐裝可樂、茶飲或水時，店員常會問「Có lấy ly đá không anh? (要拿冰塊杯嗎？)」，只要 2k VND 就能獲得裝滿純淨衛生碎冰的杯子，清涼又消暑。',
        contentEn: 'Buying canned drinks often pairs with a 2,000 VND ice cup (Ly đá) filled with filtered ice for tropical refreshment.'
      }
    ]
  },

  // 11. 藥局買藥
  {
    id: 'pharmacy',
    category: 'health',
    tagZh: '健康應急',
    tagEn: 'Pharmacy & Health',
    icon: '💊',
    image: 'pharmacy.jpg',
    titleZh: '藥局買藥、描述感冒發燒、拉肚子與用藥頻率',
    titleEn: 'Buying Medicine & Describing Symptoms at a Local Pharmacy',
    titleVi: 'Mua Thuốc & Miêu Tả Triệu Chứng Tại Hiệu Thuốc',
    summaryZh: '掌握症狀描述：發燒頭痛 (Sốt, đau đầu)、喉嚨痛 (Đau họng)、拉肚子 (Đau bụng đi ngoài)、暈車藥 (Thuốc say xe)、防蚊液、確認過敏與飯前飯後用藥方式。',
    summaryEn: 'Describe medical symptoms: fever, headache, sore throat, diarrhea, motion sickness pills, mosquito spray, verify allergies, and dosages.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：感冒發燒喉嚨痛、過敏確認與服藥時間',
        titleVi: 'Hội Thoại 1: Cảm Sốt, Đau Họng, Dị Ứng & Liều Dùng',
        titleEn: 'Dialogue 1: Flu, Sore Throat, Allergies & Dosage',
        summaryZh: '向藥劑師描述發高燒與喉嚨發炎痛、確認無藥物過敏、交代一日兩次早晚飯後服用。',
        summaryEn: 'Describe high fever and sore throat to pharmacist, verify no drug allergies, and get twice-daily dosage instructions.',
        lines: [
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Dạ chào anh, anh đang có triệu chứng khó chịu thế nào ạ?',
            zh: '您好，請問您現在有哪裡不舒服或什麼症狀呢？',
            en: 'Hello sir, what uncomfortable symptoms are you experiencing?',
            northTip: '「Dược sĩ」= 藥劑師 (漢越詞：藥士)；「triệu chứng」= 症狀 (漢越詞：徵狀)。',
            southTip: '越南社區藥局 (Hiệu thuốc / Nhà thuốc) 密度高，買藥極方便。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Tôi bị sốt cao, đau đầu và đau họng suốt từ hôm qua đến giờ.',
            zh: '我從昨天開始發高燒、頭痛而且喉嚨很痛。',
            en: 'I have had a high fever, headache, and sore throat since yesterday.',
            northTip: '「sốt cao」= 發高燒；「đau đầu」= 頭痛；「đau họng」= 喉嚨痛。',
            southTip: '「suốt từ hôm qua」= 從昨天一直持續到現在。'
          },
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Anh có bị dị ứng với loại thuốc nào không? Để em lấy thuốc hạ sốt và kháng viêm.',
            zh: '您對任何藥物過敏嗎？我幫您拿退燒藥和消炎藥。',
            en: 'Are you allergic to any medications? Let me get fever reducers and anti-inflammatory pills for you.',
            northTip: '「dị ứng」= 過敏 (漢越詞：異應)；「thuốc hạ sốt」= 退燒藥；「kháng viêm」= 消炎藥。',
            southTip: '若有青黴素過敏可說「Dị ứng kháng sinh Penicillin」。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Tôi không bị dị ứng. Thuốc này ngày uống mấy lần và uống trước hay sau khi ăn?',
            zh: '我沒有藥物過敏。這藥一天吃幾次？飯前還是飯後吃？',
            en: 'I have no allergies. How many times a day should I take this, before or after meals?',
            northTip: '「trước khi ăn」= 飯前；「sau khi ăn」= 飯後。',
            southTip: '「ngày uống mấy lần」= 一天吃幾次。'
          },
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Mỗi ngày uống hai lần, mỗi lần một viên sau bữa ăn sáng và tối nhé.',
            zh: '每天吃兩次，每次一顆，早晚餐飯後吃喔。',
            en: 'Take it twice a day, one pill each time after breakfast and dinner.',
            northTip: '「viên」= 藥丸/顆粒之量詞。',
            southTip: '藥劑師通常會在藥袋外清楚註記服用時間。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：購買防蚊液、暈車藥、益生菌止瀉與確認兒童適用性',
        titleVi: 'Hội Thoại 2: Xịt Chống Muỗi, Thuốc Say Xe & Men Tiêu Hóa',
        titleEn: 'Dialogue 2: Mosquito Spray, Motion Sickness & Probiotics',
        summaryZh: '應對南洋水土不服：購買長途搭車暈車藥、腸胃腹瀉益生菌、天然草本防蚊噴霧並確認兒童安全。',
        summaryEn: 'Handle tropical travel issues: motion sickness pills, gut probiotics for diarrhea, organic mosquito repellent, and child safety.',
        lines: [
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Dược sĩ ơi, tôi bị say xe và đau bụng đi ngoài từ sáng, có thuốc nào tác dụng nhanh không?',
            zh: '藥劑師您好，我暈車而且從今天早上開始拉肚子肚子痛，有見效快的藥嗎？',
            en: 'Pharmacist, I have motion sickness and diarrhea stomach cramps since morning, is there fast-acting medicine?',
            northTip: '「say xe」= 暈車；「đau bụng đi ngoài」= 肚子痛腹瀉拉肚子。',
            southTip: '「tác dụng nhanh」= 快速見效。'
          },
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Dạ có ạ! Em cho anh vỉ thuốc chống say xe uống trước khi lên xe ba mươi phút, và men vi sinh tiêu hóa nhé.',
            zh: '有的！我給您一排暈車藥，上車前三十分鐘服用，再加上腸胃益生菌止瀉膠囊。',
            en: 'Yes! Here is a blister pack of motion sickness pills to take 30 mins before riding, plus digestive probiotics.',
            northTip: '「thuốc chống say xe」= 暈車藥；「men vi sinh」= 腸胃益生菌。',
            southTip: '「vỉ thuốc」= 一排/一板膠囊藥片。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Tôi muốn mua thêm một chai xịt chống muỗi côn trùng và một tuýp dầu gió xanh Con Én.',
            zh: '我還想買一瓶防蚊噴霧，還有一條經典雙燕牌綠油精草本油。',
            en: 'I would also like to buy a bottle of mosquito insect repellent spray and a tube of Eagle brand green medicated oil.',
            northTip: '「xịt chống muỗi」= 防蚊噴霧；「dầu gió xanh」= 越南人手一瓶的綠草本風油精。',
            southTip: '越南熱帶地區防蚊必不可少。'
          },
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Dạ đây là xịt chống muỗi hữu cơ dùng được cho cả người lớn và trẻ em trên hai tuổi ạ.',
            zh: '這是天然草本防蚊噴霧，大人和兩歲以上兒童都可以安心使用喔。',
            en: 'Here is an organic mosquito repellent spray suitable for both adults and children over 2 years old.',
            northTip: '「hữu cơ」= 有機/天然植物草本；「trẻ em」= 兒童。',
            southTip: '溫和不刺激皮膚。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Thuốc đau bụng này uống vào lúc đói hay lúc no vậy dược sĩ?',
            zh: '這款腸胃藥是要空腹吃還是飯後吃呢？',
            en: 'Should this stomach medicine be taken on an empty stomach or when full?',
            northTip: '「lúc đói」= 肚子餓時/空腹；「lúc no」= 吃飽時/飯後。',
            southTip: '確認空腹或飯後能確保藥效發揮並保護胃壁。'
          },
          {
            speaker: 'Dược sĩ (藥劑師)',
            role: 'npc',
            viet: 'Men vi sinh anh nên uống sau bữa ăn ba mươi phút cùng với nhiều nước ấm nhé.',
            zh: '益生菌建議在飯後三十分鐘搭配溫開水服用喔。',
            en: 'You should take the probiotics 30 minutes after meals with plenty of warm water.',
            northTip: '「nước ấm」= 溫開水。',
            southTip: '多補充水分與電解質能迅速緩解拉肚子脫水。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '患者 (Bệnh nhân)',
      userRoleEn: 'Patient (Bệnh nhân)',
      partnerRoleZh: '藥劑師 (Dược sĩ)',
      partnerRoleEn: 'Pharmacist (Dược sĩ)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào anh, anh bị đau ở đâu và cảm thấy khó chịu thế nào?',
          partnerPromptZh: '您好，您哪裡痛？感覺哪裡不舒服？',
          partnerPromptEn: 'Hello, where does it hurt and what symptoms?',
          userOptions: [
            {
              id: 'ph1_opt1',
              textVi: 'Tôi bị sốt cao, đau đầu và đau họng từ hôm qua.',
              textZh: '我從昨天開始發高燒、頭痛和喉嚨痛。',
              textEn: 'I have high fever, headache, and sore throat since yesterday.',
              isCorrect: true,
              feedbackZh: '完全正確！清晰準確地描述了關鍵感冒症狀。',
              feedbackEn: 'Correct! Clearly and accurately described symptoms.'
            },
            {
              id: 'ph1_opt2',
              textVi: 'Cho tôi một ly cà phê đen đá.',
              textZh: '給我一杯冰黑咖啡。',
              textEn: 'Give me an iced black coffee.',
              isCorrect: false,
              feedbackZh: '這是在咖啡廳點咖啡，請選擇症狀描述！',
              feedbackEn: 'Cafe phrase! Describe medical symptoms.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Anh có bị dị ứng thuốc không? Thuốc này ngày uống hai lần nhé.',
          partnerPromptZh: '您有藥物過敏嗎？這藥一天吃兩次喔。',
          partnerPromptEn: 'Any drug allergies? Take this twice a day.',
          userOptions: [
            {
              id: 'ph2_opt1',
              textVi: 'Tôi không bị dị ứng. Uống trước hay sau khi ăn vậy dược sĩ?',
              textZh: '我沒過敏。請問是飯前還是飯後吃？',
              textEn: 'No allergies. Before or after meals pharmacist?',
              isCorrect: true,
              feedbackZh: '非常棒！主動確認用藥時間與飯前飯後細節。',
              feedbackEn: 'Great! Proactively verified dosage timing with meals.'
            },
            {
              id: 'ph2_opt2',
              textVi: 'Cho tôi đổi sang phòng có ban công.',
              textZh: '幫我換到有陽台的房間。',
              textEn: 'Change me to a balcony room.',
              isCorrect: false,
              feedbackZh: '這是飯店換房句子，買藥請確認服用方式！',
              feedbackEn: 'Hotel phrase! Check medicine instructions.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Thuốc của anh hết tám mươi nghìn đồng, anh nhớ uống nhiều nước ấm nhé!',
          partnerPromptZh: '您的藥總共八萬盾，記得多喝溫開水喔！',
          partnerPromptEn: 'Your medicine is 80,000 VND, remember to drink plenty of warm water!',
          userOptions: [
            {
              id: 'ph3_opt1',
              textVi: 'Dạ tôi nhớ rồi. Gửi dược sĩ tiền, cảm ơn dược sĩ nhiều!',
              textZh: '我記住了。給您藥錢，非常謝謝藥劑師！',
              textEn: 'Got it. Here is the money, thank you very much!',
              isCorrect: true,
              feedbackZh: '圓滿完成藥局買藥與用藥諮詢！',
              feedbackEn: 'Smoothly completed the pharmacy consultation and purchase!'
            },
            {
              id: 'ph3_opt2',
              textVi: 'Bao nhiêu tiền một ký xoài?',
              textZh: '一公斤芒果多少錢？',
              textEn: 'How much for a kilo of mangoes?',
              isCorrect: false,
              feedbackZh: '市場買水果句子，請禮貌向藥劑師致謝付款！',
              feedbackEn: 'Market phrase! Thank the pharmacist.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Hiệu thuốc / Nhà thuốc', zh: '藥局 / 藥房', en: 'Pharmacy / Drugstore' },
      { viet: 'Sốt cao / Cảm cúm', zh: '發高燒 / 流行性感冒', en: 'High fever / Flu' },
      { viet: 'Đau đầu / Đau họng', zh: '頭痛 / 喉嚨痛', en: 'Headache / Sore throat' },
      { viet: 'Đau bụng đi ngoài', zh: '腹瀉 / 拉肚子', en: 'Diarrhea / Stomach upset' },
      { viet: 'Thuốc hạ sốt', zh: '退燒藥', en: 'Fever reducer (Paracetamol)' },
      { viet: 'Dị ứng thuốc', zh: '藥物過敏', en: 'Drug allergy' },
      { viet: 'Xịt chống muỗi', zh: '防蚊噴霧', en: 'Mosquito repellent' }
    ],
    cultureTips: [
      {
        titleZh: '越南藥局連鎖品牌與常備藥購買',
        titleEn: 'Major Pharmacy Chains & OTC Medicines in Vietnam',
        contentZh: '越南知名連鎖大藥局如「Pharmacity」與「Long Châu (隆洲)」遍布全越，藥品明碼標價、環境明亮衛生。常見感冒藥如 Panadol (普拿疼)、抗過敏藥、腸胃藥皆可免處方直接購買。',
        contentEn: 'Major pharmacy chains Pharmacity and Long Chau offer transparent OTC medications nationwide. Panadol, anti-allergics, and tummy meds are widely available.'
      },
      {
        titleZh: '東南亞水土不服防範之道',
        titleEn: 'Preventing Stomach Upsets in Southeast Asia',
        contentZh: '避免飲用未煮沸生水或路邊生冷冰塊，腸胃較敏感者可隨身攜帶益生菌 (Men tiêu hóa) 與電解質粉 (Oresol) 以防脫水。',
        contentEn: 'Avoid untreated tap water. Travelers with sensitive stomachs should carry probiotics and Oresol hydration salts.'
      }
    ]
  },

  // 12. 醫院看診
  {
    id: 'hospital',
    category: 'health',
    tagZh: '就醫必懂',
    tagEn: 'Hospital & Medical',
    icon: '🏥',
    image: 'hospital.jpg',
    titleZh: '診所醫院掛號看診、量血壓與醫生問診',
    titleEn: 'Doctor Consultation, Blood Pressure & Medical Diagnosis',
    titleVi: 'Khám Bệnh Tại Phòng Khám & Bệnh Viện',
    summaryZh: '醫院急診就診：初診掛號登記、聽診心肺量血壓、摔傷照 X 光檢驗、索取英文診斷證明書與正式發票以供回國海外保險理賠。',
    summaryEn: 'Hospital clinic workflow: registration, BP and chest exam, X-ray for injuries, bilingual medical certificates, and official invoices for insurance claims.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：門診掛號問診、聽診心肺與開立處方',
        titleVi: 'Hội Thoại 1: Đăng Ký Khám, Nghe Tim Phổi & Kê Đơn',
        titleEn: 'Dialogue 1: Registration, Lung Exam & Prescription',
        summaryZh: '出示護照辦理門診掛號、量血壓、聽診心肺雜音並診斷輕微肺炎開立處方籤。',
        summaryEn: 'Register with passport, check blood pressure, stethoscope lung check, diagnose mild bronchitis and prescribe meds.',
        lines: [
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Xin chào anh! Anh đến khám bệnh gì ạ? Xin cho tôi mượn hộ chiếu để làm thủ tục.',
            zh: '您好！請問您要看什麼科別呢？請借我護照辦理掛號登記。',
            en: 'Hello sir! What brings you in today? Please lend me your passport for registration.',
            northTip: '「khám bệnh」= 看病問診 (漢越詞：勘病)；「Bác sĩ」= 醫生 (漢越詞：博士)。',
            southTip: '在越南外籍人士就診通常需出示護照正本以建檔。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Tôi bị ho nhiều, khó thở và tức ngực suốt hai ngày nay.',
            zh: '我這兩天一直劇烈咳嗽、呼吸困難而且胸口悶痛。',
            en: 'I have been coughing heavily, having shortness of breath, and chest tightness for two days.',
            northTip: '「ho nhiều」= 劇烈咳嗽；「khó thở」= 呼吸困難；「tức ngực」= 胸悶胸痛。',
            southTip: '描述症狀清晰準確有助於醫生快速精準鑑別診斷。'
          },
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Anh ngồi xuống đây, để tôi đo huyết áp và nghe tim phổi nhé. Hít sâu vào nào.',
            zh: '請您坐這裡，我幫您量血壓並聽診心肺。請深呼吸。',
            en: 'Please sit here, let me measure your blood pressure and listen to your heart and lungs. Take a deep breath.',
            northTip: '「đo huyết áp」= 量血壓 (漢越詞：度血壓)；「Hít sâu vào」= 請深吸氣。',
            southTip: '「nghe tim phổi」= 聽診心臟與肺部。'
          },
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Phổi của anh bị viêm nhẹ. Tôi sẽ kê đơn thuốc kháng sinh và thuốc ho cho anh.',
            zh: '您的肺部有輕微發炎。我會為您開立抗生素和止咳藥物。',
            en: 'Your lungs have mild inflammation. I will prescribe antibiotics and cough medicine for you.',
            northTip: '「kê đơn thuốc」= 開立處方籤；「thuốc kháng sinh」= 抗生素。',
            southTip: '「viêm phổi nhẹ」= 輕度支氣管炎/肺炎。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：機車摔傷清創消毒、照 X 光與索取中英文保險診斷證明',
        titleVi: 'Hội Thoại 2: Sát Trùng, Chụp X-quang & Giấy Chứng Nhận Y Tế',
        titleEn: 'Dialogue 2: Wound Cleaning, X-ray & Insurance Certificate',
        summaryZh: '摔車擦傷清創消毒、膝關節照 X 光確認無骨折損害、開立雙語診斷書與紅發票以供回國申請海外突發醫療保險理賠。',
        summaryEn: 'Clean scrape wounds from motorbike fall, take knee X-ray, and issue bilingual medical certificate + red invoice for overseas insurance claim.',
        lines: [
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Chào bác sĩ, tôi bị ngã xe máy trầy xước ở chân và tay, cần sát trùng và chụp X-quang kiểm tra xương.',
            zh: '醫生好，我騎機車摔倒手腳擦傷，需要清創消毒並照 X 光確認骨頭是否有骨折。',
            en: 'Hello doctor, I fell off a motorbike with abrasions on my leg and arm, I need antiseptic cleaning and an X-ray to check the bones.',
            northTip: '「ngã xe máy」= 摔機車；「trầy xước」= 擦傷破皮；「sát trùng」= 消毒清創。',
            southTip: '「chụp X-quang」= 照 X 光攝影檢查。'
          },
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Để y tá rửa sạch vết thương cho anh trước, sau đó tôi viết phiếu chỉ định đi chụp X-quang khớp gối nhé.',
            zh: '先讓護理師為您清洗消毒傷口，然後我開立檢查單去照膝關節 X 光片喔。',
            en: 'Let the nurse wash and sanitize your wounds first, then I will write a referral slip for a knee X-ray.',
            northTip: '「y tá / điều dưỡng」= 護士/護理師；「khớp gối」= 膝關節。',
            southTip: '「phiếu chỉ định」= 檢查檢驗單。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Bác sĩ ơi, xương của tôi có bị nứt hay rạn gì không ạ?',
            zh: '醫生，我的骨頭有骨裂或骨折嗎？',
            en: 'Doctor, are my bones cracked or fractured in any way?',
            northTip: '「nứt / rạn xương」= 骨裂；「gãy xương」= 骨折。',
            southTip: '關心骨骼結構完整性。'
          },
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Kết quả phim chụp rất tốt, xương không bị tổn thương, chỉ bị dập phần mềm nhẹ thôi anh yên tâm.',
            zh: 'X 光片結果非常好，骨骼完全正常無損，只有輕微軟組織挫傷，請您放心。',
            en: 'The X-ray results look very good, bones are undamaged, just mild soft tissue contusion, rest assured.',
            northTip: '「dập phần mềm」= 軟組織挫傷瘀血；「tổn thương」= 損傷/病變。',
            southTip: '「yên tâm」= 請放心。'
          },
          {
            speaker: 'Bệnh nhân (患者)',
            role: 'learner',
            viet: 'Bác sĩ cấp giúp tôi giấy chứng nhận y tế song ngữ tiếng Anh và hóa đơn đỏ để về nước thanh toán bảo hiểm nhé.',
            zh: '請醫生幫我開立英文醫療診斷證明書和正式稅務發票，以便回國申請海外保險理賠喔。',
            en: 'Doctor, please issue an English bilingual medical certificate and red tax invoice so I can claim overseas insurance back home.',
            northTip: '「giấy chứng nhận y tế / giấy khám bệnh」= 診斷證明書；「hóa đơn đỏ」= 正式增值稅紅發票 (VAT)。',
            southTip: '返國申請健保或商業保險必備兩大文件：英文診斷書 + 費用收據明細。'
          },
          {
            speaker: 'Bác sĩ (醫生)',
            role: 'npc',
            viet: 'Dạ được, anh mang hồ sơ xuống quầy thu ngân tầng 1 để đóng dấu mộc đỏ của bệnh viện nhé.',
            zh: '沒問題，請攜帶病歷資料至一樓批價櫃台蓋醫院正式官方印章喔。',
            en: 'Certainly, please take your records down to the 1st floor cashier to get the official red hospital stamp.',
            northTip: '「dấu mộc đỏ」= 官方紅章鋼印。',
            southTip: '蓋章後文件具備完全國際法律效力。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '患者 (Bệnh nhân)',
      userRoleEn: 'Patient (Bệnh nhân)',
      partnerRoleZh: '主治醫生 (Bác sĩ điều trị)',
      partnerRoleEn: 'Doctor (Bác sĩ)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Xin chào anh, anh bị đau ở đâu và khó chịu mấy ngày rồi?',
          partnerPromptZh: '您好，您哪裡痛？不舒服幾天了？',
          partnerPromptEn: 'Hello, where does it hurt and for how many days?',
          userOptions: [
            {
              id: 'hp1_opt1',
              textVi: 'Tôi bị ho nhiều, khó thở và tức ngực suốt hai ngày nay.',
              textZh: '我這兩天劇烈咳嗽、呼吸困難且胸口悶痛。',
              textEn: 'I have heavy cough, shortness of breath, and chest tightness for 2 days.',
              isCorrect: true,
              feedbackZh: '完全正確！清晰準確地向醫師陳述主訴。',
              feedbackEn: 'Correct! Clearly and accurately stated main complaint.'
            },
            {
              id: 'hp1_opt2',
              textVi: 'Cho tôi một ly bạc xỉu ít đường.',
              textZh: '給我一杯少糖白咖啡。',
              textEn: 'Give me a less-sugar white coffee.',
              isCorrect: false,
              feedbackZh: '咖啡廳點單句子，醫院問診請選症狀描述！',
              feedbackEn: 'Cafe phrase! Describe medical symptoms to doctor.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Để tôi đo huyết áp và nghe tim phổi nhé. Hít thở sâu vào nào.',
          partnerPromptZh: '我幫您量血壓並聽診心肺，請深呼吸。',
          partnerPromptEn: 'Let me check BP and listen to lungs. Breathe deeply.',
          userOptions: [
            {
              id: 'hp2_opt1',
              textVi: 'Vâng thưa bác sĩ. Bệnh của tôi có nghiêm trọng không ạ?',
              textZh: '好的醫生。我的病情嚴重嗎？',
              textEn: 'Yes doctor. Is my condition serious?',
              isCorrect: true,
              feedbackZh: '自然配合檢查並適時詢問診斷結果。',
              feedbackEn: 'Naturally cooperated with exam and inquired about severity.'
            },
            {
              id: 'hp2_opt2',
              textVi: 'Hành lý của tôi bị quá cân.',
              textZh: '我的行李超重了。',
              textEn: 'My luggage is overweight.',
              isCorrect: false,
              feedbackZh: '這是機場行李句子，請專注於醫師檢查！',
              feedbackEn: 'Airport phrase! Cooperate with medical exam.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Phổi của anh viêm nhẹ, tôi kê đơn thuốc kháng sinh và thuốc ho nhé.',
          partnerPromptZh: '肺部輕度發炎，我為您開抗生素與止咳藥。',
          partnerPromptEn: 'Mild lung inflammation, I prescribe antibiotics and cough meds.',
          userOptions: [
            {
              id: 'hp3_opt1',
              textVi: 'Cảm ơn bác sĩ nhiều. Cấp giúp tôi giấy chứng nhận y tế tiếng Anh nhé.',
              textZh: '非常感謝醫生。請幫我開立英文醫療診斷書喔。',
              textEn: 'Thank you doctor. Please issue an English medical certificate for me.',
              isCorrect: true,
              feedbackZh: '太棒了！索取英文診斷證明以利後續保險理賠。',
              feedbackEn: 'Awesome! Requested English medical certificate for insurance.'
            },
            {
              id: 'hp3_opt2',
              textVi: 'Cho tôi gửi tiền cọc phòng.',
              textZh: '給我繳飯店押金。',
              textEn: 'Let me pay hotel deposit.',
              isCorrect: false,
              feedbackZh: '飯店句子，醫囑結束後致謝並索取診斷書！',
              feedbackEn: 'Hotel phrase! Thank doctor and request certificate.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Phòng khám / Bệnh viện', zh: '診所 / 綜合醫院', en: 'Clinic / Hospital' },
      { viet: 'Đo huyết áp', zh: '量血壓', en: 'Measure blood pressure' },
      { viet: 'Khó thở / Tức ngực', zh: '呼吸困難 / 胸悶胸痛', en: 'Shortness of breath / Chest pain' },
      { viet: 'Chụp X-quang', zh: '照 X 光攝影檢查', en: 'X-ray examination' },
      { viet: 'Kê đơn thuốc', zh: '開立處方籤', en: 'Prescribe medicine' },
      { viet: 'Giấy chứng nhận y tế', zh: '醫療診斷證明書 (保險理賠必備)', en: 'Medical certificate' }
    ],
    cultureTips: [
      {
        titleZh: '在越南外籍人士就醫首選：國際綜合醫院',
        titleEn: 'International Hospitals for Expats & Travelers',
        contentZh: '河內與胡志明市有高水準的國際醫院如「FV Hospital (法越醫院)」、「Vinmec (越捷旗艦醫療)」與「Family Medical Practice (國際全科診所)」，提供英法中文多語接待、支援海外保險直接結算 (Direct Billing)。',
        contentEn: 'Top-tier international facilities like FV Hospital, Vinmec, and Family Medical Practice provide multilingual care and direct overseas insurance billing.'
      },
      {
        titleZh: '海外就醫回國申請健保自墊醫療核退',
        titleEn: 'Claiming NHI & Travel Insurance Back in Taiwan',
        contentZh: '在越南就醫後，務必向醫院索取三份核心文件：1. 英文醫療診斷書 (Medical Certificate)；2. 正式費用明細發票 (VAT Invoice)；3. 處方收據。回國六個月內可向台灣衛福部健保署申請緊急就醫核退。',
        contentEn: 'Always collect 3 core docs: English medical certificate, itemized VAT invoice, and pharmacy receipt to claim NHI reimbursement within 6 months.'
      }
    ]
  },

  // 13. 越式洗頭與 SPA
  {
    id: 'spa',
    category: 'daily',
    tagZh: '放鬆享受',
    tagEn: 'Herbal Spa & Hair Wash',
    icon: '💆',
    image: 'spa.jpg',
    titleZh: '越式洗頭 (Gội đầu dưỡng sinh)、肩頸按摩與力道調整',
    titleEn: 'Vietnamese Herbal Hair Wash (Gội Đầu Dưỡng Sinh) & Massage',
    titleVi: 'Gội Đầu Dưỡng Sinh & Mát-Xa Thư Giãn',
    summaryZh: '享受越式養生洗頭全套流程：草本洗髮、掏耳朵、肩頸精油放鬆、熱石眼部溫敷、臉部小黃瓜面膜、避開舊傷與給小費。',
    summaryEn: 'Indulge in 90-min herbal head spa: ear cleaning, shoulder oil massage, hot stone eye compress, organic cucumber mask, and tipping.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：90分鐘養生洗頭套餐、水溫力道調節與給予小費',
        titleVi: 'Hội Thoại 1: Gói 90 Phút, Chỉnh Nước Lực Mát-xa & Tiền Tip',
        titleEn: 'Dialogue 1: 90-Min Package, Water Temp, Pressure & Tip',
        summaryZh: '選擇包含掏耳朵與肩頸放鬆的 90 分鐘套餐、確認溫水與後背加重力道、結尾致謝給予小費。',
        summaryEn: 'Select 90-min herbal package including ear cleaning and neck massage, adjust back pressure, and tip.',
        lines: [
          {
            speaker: 'Nhân viên Spa (美容師)',
            role: 'npc',
            viet: 'Dạ em chào anh! Hôm nay anh chọn gói gội đầu dưỡng sinh sáu mươi phút hay chín mươi phút ạ?',
            zh: '您好哥！今天想選 60 分鐘還是 90 分鐘的草本養生洗頭套餐呢？',
            en: 'Hello sir! Would you like the 60-minute or 90-minute herbal hair spa package today?',
            northTip: '「Gội đầu dưỡng sinh」= 越式草本養生洗頭 (結合穴道按摩與中草藥洗髮)。',
            southTip: '越式洗頭店遍布市區，是極度熱門的放鬆身心體驗。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Cho anh gói chín mươi phút, có bao gồm lấy ráy tai và mát-xa cổ vai gáy không em?',
            zh: '給我 90 分鐘套餐，有包含掏耳朵和肩頸按摩嗎？',
            en: 'Give me the 90-minute package, does it include ear cleaning and neck/shoulder massage?',
            northTip: '「lấy ráy tai」= 掏耳朵/採耳；「cổ vai gáy」= 頸部、肩部與後頸。',
            southTip: '90分鐘全套通常包含洗臉、敷臉、洗頭、掏耳、手部與肩頸按摩。'
          },
          {
            speaker: 'Nhân viên Spa (美容師)',
            role: 'npc',
            viet: 'Dạ có đầy đủ hết ạ. Nước ấm thế này đã vừa chưa anh? Lực mát-xa có đau không?',
            zh: '都有全套包含喔。水溫這樣剛剛好嗎？按摩力道會痛嗎？',
            en: 'Everything is fully included. Is this water temperature comfortable? Does the massage pressure hurt?',
            northTip: '「Nước ấm」= 溫水；「lực mát-xa」= 按摩力道。',
            southTip: '美容師會時刻貼心詢問顧客舒適度。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Nước ấm rất dễ chịu. Em mát-xa lưng mạnh hơn một chút nhé, cổ thì làm nhẹ thôi.',
            zh: '溫水非常舒服。後背幫我按重一點點，脖子輕輕按就好喔。',
            en: 'The warm water is very pleasant. Please massage my back a bit firmer, but be gentle on my neck.',
            northTip: '「mạnh hơn」= 力道更重一點；「nhẹ thôi」= 力道輕柔一點。',
            southTip: '「rất dễ chịu / rất thoải mái」= 非常舒服放鬆。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Rất thoải mái! Cảm ơn em nhiều. Gửi em tiền tip nhé.',
            zh: '太放鬆了！非常感謝你。這是給你的小費喔。',
            en: 'So relaxing! Thank you very much. Here is your tip.',
            northTip: '越式洗頭給予 50k~100k VND 小費是非常得體的禮儀。',
            southTip: '「tiền tip / tiền boa」= 小費。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：敷天然小黃瓜面膜、熱石眼部溫敷、避開舊傷與刷卡結帳',
        titleVi: 'Hội Thoại 2: Đắp Mặt Nạ Dưa Leo, Đá Nóng & Quẹt Thẻ',
        titleEn: 'Dialogue 2: Cucumber Mask, Hot Stone & Card Payment',
        summaryZh: '加選天然小黃瓜敷臉與眼部熱石舒緩、提醒美容師避開左肩舊傷、體驗專業服務後使用信用卡無手續費結帳。',
        summaryEn: 'Add organic cucumber face mask, hot stone eye compress, caution left shoulder injury, and pay by card without fee.',
        lines: [
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Em ơi, gói chăm sóc da mặt của quán có kèm đắp mặt nạ dưa leo và mát-xa mắt không?',
            zh: '美容師，請問臉部護理方案有包含敷小黃瓜面膜和眼部舒緩按摩嗎？',
            en: 'Excuse me, does your facial care package include a cucumber mask and eye soothing massage?',
            northTip: '「chăm sóc da mặt」= 臉部護理；「đắp mặt nạ」= 敷面膜。',
            southTip: '「dưa leo / dưa chuột」= 小黃瓜 (南 dưa leo / 北 dưa chuột)。'
          },
          {
            speaker: 'Nhân viên Spa (美容師)',
            role: 'npc',
            viet: 'Dạ có ạ! Bên em dùng mặt nạ thảo dược thiên nhiên kết hợp chườm đá nóng vùng mắt rất dễ chịu.',
            zh: '有的！我們使用天然草本面膜，並結合眼部熱石溫敷，非常舒適放鬆喔。',
            en: 'Yes! We use natural herbal masks combined with hot stone eye compresses, very soothing.',
            northTip: '「thảo dược thiên nhiên」= 天然中草藥；「chườm đá nóng」= 熱石溫敷。',
            southTip: '溫熱的火山玄武岩熱石能迅速緩解眼部疲勞。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Vai trái của anh tuần trước bị trật khớp nhẹ, em đừng ấn mạnh vào chỗ đó nhé.',
            zh: '我左邊肩膀上週有一點拉傷扭到，請避開那裡不要重壓喔。',
            en: 'My left shoulder had a slight sprain last week, please dont press hard on that spot.',
            northTip: '「vai trái」= 左肩膀；「trật khớp nhẹ」= 輕微拉傷/扭傷脫位。',
            southTip: '「đừng ấn mạnh」= 請不要重壓。提前告知傷病史非常重要。'
          },
          {
            speaker: 'Nhân viên Spa (美容師)',
            role: 'npc',
            viet: 'Dạ em nhớ rồi ạ, em sẽ mát-xa xoa bóp thật nhẹ nhàng vùng vai cho anh thư giãn.',
            zh: '我記住了，肩膀周圍我會用非常輕柔的手法幫您溫柔舒緩。',
            en: 'I noted that, I will gently rub and soothe around your shoulder area for your relaxation.',
            northTip: '「nhẹ nhàng」= 輕柔溫和。',
            southTip: '越式手法講究柔中帶勁。'
          },
          {
            speaker: 'Khách (顧客)',
            role: 'learner',
            viet: 'Dịch vụ của quán rất chuyên nghiệp! Anh thanh toán bằng thẻ tín dụng được chứ?',
            zh: '服務非常專業舒服！我可以用信用卡刷卡結帳對吧？',
            en: 'Your service is remarkably professional! Can I pay by credit card?',
            northTip: '「chuyên nghiệp」= 專業 (漢越詞：專業)。',
            southTip: '多數正規 SPA 均支援 Visa/Mastercard 刷卡。'
          },
          {
            speaker: 'Nhân viên Spa (美容師)',
            role: 'npc',
            viet: 'Dạ quán em chấp nhận thanh toán quẹt thẻ không mất phí cà thẻ ạ. Cảm ơn anh rất nhiều!',
            zh: '我們店接受刷卡且不加收任何刷卡手續費喔。非常感謝您的光臨！',
            en: 'Our spa accepts credit card swipes with zero surcharge fee. Thank you very much!',
            northTip: '「quẹt thẻ / cà thẻ」= 刷卡結帳。',
            southTip: '享受完洗頭按摩令人精神煥發！'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '顧客 (Khách hàng)',
      userRoleEn: 'Customer (Khách hàng)',
      partnerRoleZh: 'Spa 美容師 (Nhân viên Spa)',
      partnerRoleEn: 'Spa Specialist (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ xin chào anh! Hôm nay anh muốn chọn gói gội đầu 60 phút hay 90 phút ạ?',
          partnerPromptZh: '您好，想選 60 分鐘還是 90 分鐘洗頭套餐？',
          partnerPromptEn: 'Hello, 60-min or 90-min hair wash package today?',
          userOptions: [
            {
              id: 'sp1_opt1',
              textVi: 'Cho anh gói chín mươi phút, có mát-xa cổ vai gáy nhé.',
              textZh: '給我 90 分鐘套餐，有肩頸按摩的。',
              textEn: 'Give me 90-min package with neck/shoulder massage.',
              isCorrect: true,
              feedbackZh: '完全正確！清晰指名套餐時長與按摩項目。',
              feedbackEn: 'Correct! Clearly specified package duration and services.'
            },
            {
              id: 'sp1_opt2',
              textVi: 'Tôi muốn mua sim 4G Viettel.',
              textZh: '我想買 4G SIM 卡。',
              textEn: 'I want to buy a 4G SIM.',
              isCorrect: false,
              feedbackZh: '這是超商買電話卡句子，請選洗頭套餐！',
              feedbackEn: 'Store phrase! Select spa package option.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Dạ nước ấm thế này đã vừa chưa anh? Em mát-xa có bị đau không?',
          partnerPromptZh: '水溫可以嗎？我按摩力道會痛嗎？',
          partnerPromptEn: 'Water temp ok? Does my pressure hurt?',
          userOptions: [
            {
              id: 'sp2_opt1',
              textVi: 'Nước ấm rất dễ chịu. Em mát-xa lưng mạnh hơn một chút nhé.',
              textZh: '水溫很舒服，後背幫我按重一點喔。',
              textEn: 'Water is very pleasant. Back massage firmer please.',
              isCorrect: true,
              feedbackZh: '非常棒！精準反饋水溫並要求適當力道。',
              feedbackEn: 'Great! Accurately confirmed temp and adjusted pressure.'
            },
            {
              id: 'sp2_opt2',
              textVi: 'Cho tôi một tô phở gà.',
              textZh: '給我一碗雞肉河粉。',
              textEn: 'Give me a chicken pho.',
              isCorrect: false,
              feedbackZh: '河粉店句子，請專注於 SPA 按摩反饋！',
              feedbackEn: 'Pho phrase! Give feedback on massage.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Dạ buổi trị liệu của anh hoàn thành rồi ạ. Anh cảm thấy thế nào?',
          partnerPromptZh: '您的洗頭療程完成囉，感覺如何呢？',
          partnerPromptEn: 'Your session is completed. How do you feel?',
          userOptions: [
            {
              id: 'sp3_opt1',
              textVi: 'Rất thoải mái! Cảm ơn em, gửi em tiền tip nhé.',
              textZh: '太舒服了！謝謝你，這是給你的小費。',
              textEn: 'So relaxing! Thank you, here is your tip.',
              isCorrect: true,
              feedbackZh: '非常得體大方地致謝並提供小費！',
              feedbackEn: 'Very gracious and polite feedback with tipping!'
            },
            {
              id: 'sp3_opt2',
              textVi: 'Tôi muốn báo án mất tài sản.',
              textZh: '我要報案失竊。',
              textEn: 'I want to report stolen property.',
              isCorrect: false,
              feedbackZh: '警局報案句子，SPA 結束請致謝！',
              feedbackEn: 'Police phrase! Thank the spa specialist.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Gội đầu dưỡng sinh', zh: '越式草本養生洗頭', en: 'Herbal hair spa' },
      { viet: 'Mát-xa cổ vai gáy', zh: '肩頸穴道按摩', en: 'Neck & shoulder massage' },
      { viet: 'Lấy ráy tai', zh: '掏耳朵 / 採耳', en: 'Ear cleaning' },
      { viet: 'Mạnh hơn / Nhẹ thôi', zh: '按重一點 / 輕一點', en: 'Firmer / Gentler' },
      { viet: 'Đắp mặt nạ', zh: '敷面膜', en: 'Facial mask' },
      { viet: 'Tiền tip / Tiền boa', zh: '服務小費', en: 'Service tip' }
    ],
    cultureTips: [
      {
        titleZh: '越式養生洗頭 (Gội đầu dưỡng sinh) 的特色流程',
        titleEn: 'Unique Procedure of Vietnamese Head Spa',
        contentZh: '越式養生洗頭不僅是單純洗髮，而是融合中醫經絡穴道、草本天然熬煮皂角水 (Bồ kết)、精油指壓、臉部去角質、草本燻蒸與採耳掏耳朵的超值全身心放鬆儀式。',
        contentEn: 'Gội đầu dưỡng sinh combines meridian acupressure, boiled Bo Ket herbs, essential oil massage, facial scrub, and ear picking into a holistic ritual.'
      },
      {
        titleZh: '洗頭店小費給付行情',
        titleEn: 'Tipping Guidelines for Vietnamese Spas',
        contentZh: '在平價洗頭店（套餐 150k~250k VND），通常給美容師 50,000 VND (約 65 台幣) 小費；在高級水療會館（套餐 400k~800k VND），小費通常為 100,000 VND 或已包含服務費。',
        contentEn: 'Standard tip at local hair spas is around 50,000 VND (~$2 USD); at luxury wellness spas 100,000 VND is customary.'
      }
    ]
  },

  // 14. 租屋簽約
  {
    id: 'rent',
    category: 'business',
    tagZh: '長期居留',
    tagEn: 'Apartment Rental',
    icon: '🏠',
    image: 'rent.jpg',
    titleZh: '租屋看房詢問租金、押金、水電費與簽約',
    titleEn: 'Apartment Viewing, Rent Terms, Utilities & Signing Lease',
    titleVi: 'Xem & Thuê Căn Hộ, Hỏi Tiền Điện Nước & Ký Hợp Đồng',
    summaryZh: '掌握在越租屋關鍵：看一房一廳公寓、確認月租金與兩個月押金、水電抄表度數起算、測試家電水壓、大樓管理費與機車停車位。',
    summaryEn: 'Master apartment leasing in Vietnam: view 1-bedroom flat, 2-month deposit, utility meter readings, water pressure, management fees, and parking.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：看房詢問租金、押金與水電費計價',
        titleVi: 'Hội Thoại 1: Xem Căn Hộ, Giá Thuê, Cọc & Tiền Điện Nước',
        titleEn: 'Dialogue 1: Apartment Tour, Rent, Deposit & Utilities',
        summaryZh: '看全新家具一房一廳、確認月租一千二百萬盾、押二付一、電費一度四千盾與免管理費。',
        summaryEn: 'Tour fully furnished 1-bedroom flat, confirm 12M VND rent, 2-month deposit, 4k VND/kWh electricity, and free Wi-Fi.',
        lines: [
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Chào em! Mời em vào xem căn hộ. Căn này một phòng ngủ, đầy đủ nội thất.',
            zh: '你好！請進來看房。這套是一房一廳，家具家電全配喔。',
            en: 'Hello! Come in and see the apartment. This is a one-bedroom unit, fully furnished.',
            northTip: '「một phòng ngủ」= 一房一廳；「đầy đủ nội thất」= 家具家電全配。',
            southTip: '「Chủ nhà」= 房東 (漢越詞：主家)。'
          },
          {
            speaker: 'Khách thuê (租客)',
            role: 'learner',
            viet: 'Căn hộ đẹp quá. Cho em hỏi tiền thuê mỗi tháng là bao nhiêu ạ?',
            zh: '房子好漂亮。請問每個月租金是多少呢？',
            en: 'The apartment is gorgeous. May I ask how much the monthly rent is?',
            northTip: '「tiền thuê」= 租金 (漢越詞：錢賃)。',
            southTip: '「mỗi tháng」= 每個月。'
          },
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Giá thuê là mười hai triệu một tháng. Tiền cọc hai tháng và đóng tiền đầu mỗi tháng.',
            zh: '租金是一個月一千二百萬越南盾 (12,000,000 VND)。押金兩個月，月初繳房租。',
            en: 'The rent is 12 million VND per month. Deposit is 2 months, rent paid at the start of each month.',
            northTip: '12,000,000 VND 約台幣 15,500 元。',
            southTip: '「Tiền cọc hai tháng」= 押金兩個月 (押二付一常規模式)。'
          },
          {
            speaker: 'Khách thuê (租客)',
            role: 'learner',
            viet: 'Tiền điện và tiền nước tính thế nào ạ? Có bao gồm phí quản lý và Wi-Fi không?',
            zh: '電費和水費怎麼計算呢？有包含大樓管理費和 Wi-Fi 嗎？',
            en: 'How are electricity and water calculated? Does it include building management fees and Wi-Fi?',
            northTip: '「tiền điện」= 電費；「tiền nước」= 水費；「phí quản lý」= 大樓管理費。',
            southTip: '租屋前務必確認電費是按政府國家台階電價還是每度固定費率。'
          },
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Tiền điện tính bốn nghìn một số, nước một trăm nghìn một người, miễn phí Wi-Fi và phí quản lý.',
            zh: '電費一度四千盾，水費一人十萬盾，免費提供 Wi-Fi 和免管理費。',
            en: 'Electricity is 4,000 VND per kWh, water 100,000 VND per person, free Wi-Fi and management fees.',
            northTip: '「bốn nghìn một số (kWh)」= 一度電四千盾。',
            southTip: '免管理費與免費 Wi-Fi 能節省不少生活開銷。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：檢查家電水壓、抄錄水電初始度數與大樓機車位',
        titleVi: 'Hội Thoại 2: Thử Thiết Bị, Chốt Số Điện Nước & Gửi Xe Máy',
        titleEn: 'Dialogue 2: Check Appliances, Utility Meters & Parking',
        summaryZh: '測試洗衣機冰箱與熱水器水壓、現場記錄電表水表初始度數寫入租約、確認 24 小時警衛與免費機車停車位。',
        summaryEn: 'Test washing machine and solar water pressure, record initial meter readings in contract, verify 24/7 security and motorbike parking.',
        lines: [
          {
            speaker: 'Khách thuê (租客)',
            role: 'learner',
            viet: 'Anh chủ nhà ơi, cho em kiểm tra máy giặt, tủ lạnh và áp lực nước trong nhà tắm một chút nhé.',
            zh: '房東大哥，請讓我測試一下洗衣機、冰箱和浴室水龍頭的水壓喔。',
            en: 'Landlord, please let me test the washing machine, refrigerator, and bathroom water pressure.',
            northTip: '「máy giặt」= 洗衣機；「tủ lạnh」= 冰箱；「áp lực nước」= 水流壓力。',
            southTip: '看房時主動測試冷氣與熱水器水壓是老租客必備技能。'
          },
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Em cứ kiểm tra thoải mái. Mọi thiết bị đều là đồ mới mua, nước nóng năng lượng mặt trời chảy rất mạnh.',
            zh: '你儘管試用。所有家電都是新買的，太陽能熱水器水量大水壓很強。',
            en: 'Feel free to test everything. All appliances are brand new, and solar hot water has strong pressure.',
            northTip: '「năng lượng mặt trời」= 太陽能；「chảy rất mạnh」= 出水非常強勁。',
            southTip: '家電設備完好能免去日後維修困擾。'
          },
          {
            speaker: 'Khách thuê (租客)',
            role: 'learner',
            viet: 'Hôm nay mình chốt số công tơ điện và đồng hồ nước ghi vào hợp đồng luôn anh nhé.',
            zh: '我們今天把電表和水表的初始度數抄下來，直接寫進租賃合約裡喔。',
            en: 'Lets record the electric meter and water meter initial readings directly into the lease contract today.',
            northTip: '「công tơ điện」= 電表；「đồng hồ nước」= 水表；「hợp đồng thuê nhà」= 租賃契約。',
            southTip: '「chốt số」= 抄錄確認初始度數，避免承擔前房客水電費。'
          },
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Được chứ! Điện hiện tại là số 1520, nước là số 45. Hai bên cùng ký tên xác nhận nhé.',
            zh: '好的！電表目前是 1520 度，水表是 45 度，我們雙方在合約上簽字確認。',
            en: 'Sure! Current electricity is 1520, water is 45. Both parties sign to confirm.',
            northTip: '「ký tên xác nhận」= 簽字簽名確認。',
            southTip: '雙方拍照留存電表儀表最為穩妥。'
          },
          {
            speaker: 'Khách thuê (租客)',
            role: 'learner',
            viet: 'Tòa nhà mình có bảo vệ trực 24/7 không và phí gửi xe máy mỗi tháng là bao nhiêu ạ?',
            zh: '這棟大樓有 24 小時警衛值班嗎？機車每個月的停車月租費是多少呢？',
            en: 'Does our building have 24/7 security guard on duty, and how much is monthly motorbike parking?',
            northTip: '「bảo vệ trực 24/7」= 全天候全天值班保全警衛。',
            southTip: '「phí gửi xe máy」= 機車停車月費 (通常 100k~150k VND)。'
          },
          {
            speaker: 'Chủ nhà (房東)',
            role: 'npc',
            viet: 'Dạ có bảo vệ và camera an ninh suốt ngày đêm, miễn phí một chỗ để xe máy dưới hầm em nhé.',
            zh: '大樓全天候有警衛和監視器，地下室免費提供一個機車專屬停車位喔。',
            en: 'Yes, we have 24/7 guards and security cameras, plus one free motorbike parking spot in the basement.',
            northTip: '「camera an ninh」= 安全監視攝影機；「dưới hầm」= 地下停車場。',
            southTip: '安全有保障且附免費車位非常理想。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '租客 (Khách thuê nhà)',
      userRoleEn: 'Tenant (Khách thuê nhà)',
      partnerRoleZh: '房東 (Chủ nhà)',
      partnerRoleEn: 'Landlord (Chủ nhà)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào em! Căn hộ một phòng ngủ này em thấy thế nào? Có ưng ý không?',
          partnerPromptZh: '你好！這間一房一廳你覺得如何？滿意嗎？',
          partnerPromptEn: 'Hello! How do you like this 1-bedroom flat?',
          userOptions: [
            {
              id: 'rt1_opt1',
              textVi: 'Căn hộ rất đẹp. Cho em hỏi tiền thuê và tiền cọc mỗi tháng là bao nhiêu ạ?',
              textZh: '房子很漂亮。請問每個月租金和押金是多少呢？',
              textEn: 'Very pretty. How much is monthly rent and deposit please?',
              isCorrect: true,
              feedbackZh: '完全正確！禮貌稱讚並直入租金與押金核心。',
              feedbackEn: 'Correct! Politely complimented and inquired rent terms.'
            },
            {
              id: 'rt1_opt2',
              textVi: 'Cho tôi một bát phở tái nạm.',
              textZh: '給我一碗半生熟牛肉河粉。',
              textEn: 'Give me a rare and brisket pho.',
              isCorrect: false,
              feedbackZh: '這是河粉店點餐句子，看房請選問租金！',
              feedbackEn: 'Pho phrase! Ask about rent terms.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Giá thuê mười hai triệu, cọc hai tháng. Em có thắc mắc gì về tiền điện nước không?',
          partnerPromptZh: '租金一千二百萬，押金兩個月。水電費有疑問嗎？',
          partnerPromptEn: 'Rent 12M, 2-month deposit. Questions on utilities?',
          userOptions: [
            {
              id: 'rt2_opt1',
              textVi: 'Tiền điện và nước tính thế nào ạ? Có bao gồm phí quản lý và Wi-Fi không?',
              textZh: '電費水費怎麼算？有包含管理費和 Wi-Fi 嗎？',
              textEn: 'How are utilities billed? Includes management & Wi-Fi?',
              isCorrect: true,
              feedbackZh: '非常專業！徹底釐清生活水電與管理費所有雜項。',
              feedbackEn: 'Pro! Clarified all utility and management fee details.'
            },
            {
              id: 'rt2_opt2',
              textVi: 'Tôi bị sốt cao và đau họng.',
              textZh: '我發高燒和喉嚨痛。',
              textEn: 'I have high fever and sore throat.',
              isCorrect: false,
              feedbackZh: '這是看醫生句子，請專注於水電費用！',
              feedbackEn: 'Medical phrase! Focus on utility costs.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Điện 4k một số, miễn phí Wi-Fi. Nếu em đồng ý thì mình ký hợp đồng thuê nhà nhé!',
          partnerPromptZh: '電費一度四千，免 Wi-Fi。同意的話我們簽約囉！',
          partnerPromptEn: 'Electric 4k/kWh, free Wi-Fi. If agreed, lets sign the lease!',
          userOptions: [
            {
              id: 'rt3_opt1',
              textVi: 'Dạ em đồng ý! Mình chốt số công tơ điện rồi ký hợp đồng nhé.',
              textZh: '我同意！我們抄錄電表度數後簽合約喔。',
              textEn: 'I agree! Lets record meter reading and sign lease.',
              isCorrect: true,
              feedbackZh: '完美的簽約收尾，懂得保護自身權益抄電表！',
              feedbackEn: 'Flawless closing, protected rights by checking meters!'
            },
            {
              id: 'rt3_opt2',
              textVi: 'Bao nhiêu tiền một ký xoài?',
              textZh: '一公斤芒果多少錢？',
              textEn: 'How much for a kilo of mangoes?',
              isCorrect: false,
              feedbackZh: '市場買水果句子，租屋請確認簽約！',
              feedbackEn: 'Market phrase! Confirm lease signing.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Căn hộ / Chung cư', zh: '公寓 / 大樓大廈', en: 'Apartment / Condominium' },
      { viet: 'Tiền thuê nhà', zh: '房屋租金', en: 'House rent' },
      { viet: 'Tiền đặt cọc', zh: '租屋押金', en: 'Security deposit' },
      { viet: 'Phí quản lý', zh: '大樓物業管理費', en: 'Management fee' },
      { viet: 'Công tơ điện', zh: '電表', en: 'Electricity meter' },
      { viet: 'Hợp đồng thuê nhà', zh: '房屋租賃契約 (合約)', en: 'Lease contract' }
    ],
    cultureTips: [
      {
        titleZh: '越南租屋常規：押二付一與暫住登記 (Tạm trú)',
        titleEn: 'Lease Norms: 2-Month Deposit & Police Registration',
        contentZh: '在越南租屋標準合約多為一年期，採「押二付一（Cọc 2 tháng, đóng 1 tháng）」形式。依越南法律，房東有義務在入住 24 小時內協助外籍租客向當地轄區公安局辦理「暫住登記 (Đăng ký tạm trú)」，此證明對於日後辦理工作證與居留卡至關重要。',
        contentEn: 'Standard lease is 1-year with 2 months deposit. Landlords must register your temporary residence (Tạm trú) with local police within 24 hours.'
      },
      {
        titleZh: '水電費收費標準陷阱',
        titleEn: 'Utility Bill Pricing Standards',
        contentZh: '一般服務式公寓 (Serviced Apartment) 常固定收電費 3,500~4,500 VND/度 (kWh)。若承租一般住宅大樓，可要求按國家電力公司 (EVN) 官方帳單直接繳費，能節省可觀開銷。',
        contentEn: 'Serviced apartments charge 3.5k-4.5k VND/kWh. In standard condos, ask to pay directly according to official EVN power bills to save money.'
      }
    ]
  },

  // 15. 商務會議
  {
    id: 'business_meeting',
    category: 'business',
    tagZh: '職場經貿',
    tagEn: 'Business & Trade',
    icon: '💼',
    image: 'business_meeting.jpg',
    titleZh: '職場商務拜訪、交換名片、洽談專案與預約下次會議',
    titleEn: 'Business Visit, Exchanging Cards, Project Negotiations & Follow-ups',
    titleVi: 'Gặp Gỡ Đối Tác, Trao Danh Thiếp & Đàm Phán Dự Án',
    summaryZh: '職場商務談判：初次拜訪接待、雙手交換名片、CIF 貿易條件報價說明、確認 30 天交期時間、空運寄送產品樣品與約定線上視訊複會。',
    summaryEn: 'Business negotiation: reception greetings, business card etiquette, CIF pricing terms, 30-day delivery timeline, air sample shipping, and virtual follow-up meetings.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：初次商務拜訪、雙手交換名片與合作展望',
        titleVi: 'Hội Thoại 1: Gặp Gỡ Đối Tác, Trao Danh Thiếp & Hợp Tác',
        titleEn: 'Dialogue 1: Meeting Partners, Business Cards & Vision',
        summaryZh: '在越企辦公室拜訪越方代表、致謝熱情接待、雙手遞交名片與表達長期深耕越南市場之期待。',
        summaryEn: 'Visit partner office, exchange business cards with both hands, and express commitment to Vietnam market expansion.',
        lines: [
          {
            speaker: 'Đối tác Việt Nam (越方代表)',
            role: 'npc',
            viet: 'Chào anh Chen! Rất hân hạnh được đón tiếp phái đoàn của anh tại văn phòng chúng tôi.',
            zh: '陳總您好！非常榮幸在我們公司辦公室迎接您的代表團。',
            en: 'Welcome Mr. Chen! It is our great pleasure to receive your delegation at our office.',
            northTip: '「Rất hân hạnh」= 非常榮幸 (漢越詞：甚欣幸)。',
            southTip: '商務場合稱呼對方職稱或姓氏加「Ông / Bà / Anh」。'
          },
          {
            speaker: 'Đại diện Đài Loan (台方代表)',
            role: 'learner',
            viet: 'Chào ông Nguyễn! Cảm ơn sự đón tiếp nồng hậu của quý công ty. Đây là danh thiếp của tôi.',
            zh: '阮總您好！感謝貴公司的熱情接待。這是我的名片。',
            en: 'Hello Mr. Nguyen! Thank you for the warm reception of your company. Here is my business card.',
            northTip: '「đón tiếp nồng hậu」= 熱情隆重接待；「danh thiếp / card visit」= 名片。',
            southTip: '在越南遞名片務必雙手奉上並正面朝向對方。'
          },
          {
            speaker: 'Đối tác Việt Nam (越方代表)',
            role: 'npc',
            viet: 'Cảm ơn anh. Chúng tôi đã xem qua hồ sơ năng lực của công ty anh, rất ấn tượng.',
            zh: '謝謝您。我們已經審閱過貴公司的實力簡介簡報，非常令人印象深刻。',
            en: 'Thank you. We have reviewed your company capacity profile, which is very impressive.',
            northTip: '「hồ sơ năng lực」= 公司實力簡介 / Profile (漢越詞：戶籍能力)。',
            southTip: '「rất ấn tượng」= 非常令人印象深刻。'
          },
          {
            speaker: 'Đại diện Đài Loan (台方代表)',
            role: 'learner',
            viet: 'Chúng tôi rất mong muốn hợp tác lâu dài và mở rộng thị trường tại Việt Nam.',
            zh: '我們非常期待能與貴公司建立長期合作，並拓展在越南的市場。',
            en: 'We sincerely look forward to establishing long-term cooperation and expanding market in Vietnam.',
            northTip: '「hợp tác lâu dài」= 長期合作 (漢越詞：合作久長)。',
            southTip: '「mở rộng thị trường」= 拓展市場 (漢越詞：擴大市場)。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：CIF 條款報價說明、交期確認、寄送樣品與線上複會',
        titleVi: 'Hội Thoại 2: Báo Giá CIF, Thời Gian Giao Hàng & Hàng Mẫu',
        titleEn: 'Dialogue 2: CIF Price Terms, Lead Times & Product Samples',
        summaryZh: '深入探討海防與吉萊港 CIF 報價條件、承諾 30 天內完成交貨、本週空運樣品品質檢驗並約定下週三視訊會議確認訂單。',
        summaryEn: 'Discuss CIF Hai Phong / Cat Lai port quotes, commit to 30-day production lead time, air express product samples, and set virtual meeting.',
        lines: [
          {
            speaker: 'Đại diện Đài Loan (台方代表)',
            role: 'learner',
            viet: 'Thưa ông, đây là bảng báo giá chi tiết theo điều kiện CIF cảng Hải Phòng và cảng Cát Lái.',
            zh: '阮總，這是依照海防港與吉萊港 CIF 貿易條件所製作的詳細報價單。',
            en: 'Sir, here is the detailed quotation sheet based on CIF terms to Hai Phong Port and Cat Lai Port.',
            northTip: '「bảng báo giá chi tiết」= 詳細報價單；「cảng」= 港口 (海防港為北越門戶，吉萊港為南越樞紐)。',
            southTip: '「Thưa ông」= 尊稱閣下/先生。'
          },
          {
            speaker: 'Đối tác Việt Nam (越方代表)',
            role: 'npc',
            viet: 'Mức giá này khá cạnh tranh. Tuy nhiên thời gian giao hàng cho đơn hàng đầu tiên là bao lâu?',
            zh: '這價格相當具有競爭力。不過第一批訂單的交貨交期大約需要多久呢？',
            en: 'This price level is quite competitive. However what is the delivery lead time for the initial order?',
            northTip: '「giá khá cạnh tranh」= 價格頗具競爭力；「thời gian giao hàng」= 交貨期。',
            southTip: '「đơn hàng đầu tiên」= 首筆訂單。'
          },
          {
            speaker: 'Đại diện Đài Loan (台方代表)',
            role: 'learner',
            viet: 'Chúng tôi có thể hoàn thành sản xuất và giao hàng trong vòng ba mươi ngày kể từ khi ký hợp đồng.',
            zh: '從合約簽署成立起算，我們能在三十天內完成生產並出貨。',
            en: 'We can complete manufacturing and delivery within 30 days from the date of contract signing.',
            northTip: '「hoàn thành sản xuất」= 完成生產；「kể từ khi」= 自從...起算。',
            southTip: '三十天交期在國際貿易中極具吸引力。'
          },
          {
            speaker: 'Đối tác Việt Nam (越方代表)',
            role: 'npc',
            viet: 'Rất tốt! Ông có thể gửi cho chúng tôi một bộ hàng mẫu để kiểm định chất lượng trước không?',
            zh: '太好了！您可以先寄送一套樣品給我們進行品質檢驗測試嗎？',
            en: 'Very good! Could you send us a set of product samples for prior quality inspection?',
            northTip: '「hàng mẫu」= 產品樣品 (漢越詞：行模)；「kiểm định chất lượng」= 檢驗品質。',
            southTip: '樣品測試是越企採購決策的重要環節。'
          },
          {
            speaker: 'Đại diện Đài Loan (台方代表)',
            role: 'learner',
            viet: 'Chúng tôi sẽ gửi mẫu bằng đường hàng không ngay trong tuần này đến văn phòng quý công ty.',
            zh: '我們本週內會立即透過空運快遞將樣品寄達貴公司辦公室。',
            en: 'We will dispatch the samples via air express within this week directly to your companys office.',
            northTip: '「đường hàng không」= 航空快遞運送。',
            southTip: '「ngay trong tuần này」= 本週之內。展現高效率。'
          },
          {
            speaker: 'Đối tác Việt Nam (越方代表)',
            role: 'npc',
            viet: 'Cảm ơn ông. Sau khi kiểm định mẫu, chúng ta sẽ họp trực tuyến vào thứ Tư tuần sau để chốt số lượng nhé.',
            zh: '謝謝您。樣品測試後，我們下週三召開線上視訊會議確定採購數量。',
            en: 'Thank you. After sample testing, we will hold an online meeting next Wednesday to finalize order quantities.',
            northTip: '「họp trực tuyến」= 線上視訊會議；「chốt số lượng」= 確定拍板採購數量。',
            southTip: '順利推進合作專案進入實質訂單階段。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '台方商務代表 (Đại diện Đài Loan)',
      userRoleEn: 'Taiwan Business Rep (Đại diện Đài Loan)',
      partnerRoleZh: '越方企業總經理 (Đối tác Việt Nam)',
      partnerRoleEn: 'Vietnam General Manager (Đối tác)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào ông Chen! Rất hân hạnh được đón tiếp ông tại trụ sở công ty chúng tôi.',
          partnerPromptZh: '陳總好！非常榮幸在總部迎接您。',
          partnerPromptEn: 'Welcome Mr. Chen! Honor to host you at our HQ.',
          userOptions: [
            {
              id: 'bm_rp1_opt1',
              textVi: 'Chào ông Nguyễn! Cảm ơn sự đón tiếp nồng hậu. Đây là danh thiếp của tôi.',
              textZh: '阮總好！感謝熱情接待。這是我的名片。',
              textEn: 'Hello Mr. Nguyen! Thanks for warm welcome. Here is my card.',
              isCorrect: true,
              feedbackZh: '完全正確！極具商務禮儀與專業風範。',
              feedbackEn: 'Correct! Highly professional business etiquette.'
            },
            {
              id: 'bm_rp1_opt2',
              textVi: 'Cho tôi một ly trà sữa trân châu.',
              textZh: '給我一杯珍珠奶茶。',
              textEn: 'Give me a boba milk tea.',
              isCorrect: false,
              feedbackZh: '這是手搖店句子，商務拜訪請交換名片！',
              feedbackEn: 'Boba phrase! Exchange business cards.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Chúng tôi rất ấn tượng với sản phẩm của ông. Báo giá chi tiết thế nào ạ?',
          partnerPromptZh: '我們對您的產品印象深刻，詳細報價如何？',
          partnerPromptEn: 'Impressed with your products. How is the quote?',
          userOptions: [
            {
              id: 'bm_rp2_opt1',
              textVi: 'Đây là bảng báo giá theo điều kiện CIF. Chúng tôi có thể giao hàng trong ba mươi ngày.',
              textZh: '這是 CIF 條件報價單，我們能在三十天內交貨。',
              textEn: 'Here is quote under CIF terms. We can deliver in 30 days.',
              isCorrect: true,
              feedbackZh: '太棒了！精準交代貿易條款與生產交期。',
              feedbackEn: 'Awesome! Accurately stated trade terms and lead times.'
            },
            {
              id: 'bm_rp2_opt2',
              textVi: 'Cắt đôi ổ bánh mì giúp cháu.',
              textZh: '幫我把麵包切成兩半。',
              textEn: 'Cut the baguette in half.',
              isCorrect: false,
              feedbackZh: '麵包攤句子，商務洽談請說明報價！',
              feedbackEn: 'Street food phrase! Present business quote.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Rất tốt, ông gửi hàng mẫu kiểm định rồi tuần sau mình họp trực tuyến chốt đơn nhé!',
          partnerPromptZh: '很好，您寄樣品檢驗，下週線上會議敲定訂單！',
          partnerPromptEn: 'Great, send samples for testing then meeting next week!',
          userOptions: [
            {
              id: 'bm_rp3_opt1',
              textVi: 'Vâng thưa ông, tôi sẽ gửi mẫu ngay tuần này. Rất mong hợp tác thành công!',
              textZh: '好的阮總，我本週立即寄樣品。期盼合作成功！',
              textEn: 'Yes sir, I will send samples this week. Looking forward to success!',
              isCorrect: true,
              feedbackZh: '非常完美的商務談判圓滿收尾！',
              feedbackEn: 'Flawless closing of a successful business meeting!'
            },
            {
              id: 'bm_rp3_opt2',
              textVi: 'Cho tôi xin thêm chanh và ớt.',
              textZh: '請給我檸檬和辣椒。',
              textEn: 'Give me lime and chili.',
              isCorrect: false,
              feedbackZh: '餐廳吃河粉句子，商務洽談請表達合作期望！',
              feedbackEn: 'Pho phrase! Express business cooperation.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Danh thiếp / Card visit', zh: '商業名片', en: 'Business card' },
      { viet: 'Bảng báo giá', zh: '產品報價單', en: 'Price quotation sheet' },
      { viet: 'Hàng mẫu', zh: '產品樣品', en: 'Product sample' },
      { viet: 'Thời gian giao hàng', zh: '交貨期 / 交期 (Lead time)', en: 'Delivery lead time' },
      { viet: 'Họp trực tuyến', zh: '線上視訊會議', en: 'Online virtual meeting' },
      { viet: 'Hợp tác lâu dài', zh: '長期經貿合作', en: 'Long-term partnership' }
    ],
    cultureTips: [
      {
        titleZh: '越南職場人際關係 (Quan hệ) 與名片禮儀',
        titleEn: 'Business Networking (Quan Hệ) & Card Etiquette',
        contentZh: '在越南經商極度看重「人際信任與私交 (Quan hệ)」。交換名片必須雙手遞交並雙手收受，收下後應花數秒認真端詳名片上的姓名與職稱，切忌隨手放入口袋或在名片上直接塗寫。',
        contentEn: 'Business in Vietnam thrives on relational trust (Quan hệ). Always exchange business cards with both hands and review the title respectfully.'
      },
      {
        titleZh: '餐敘在商務談判中的重要角色',
        titleEn: 'The Role of Business Dinners & Drinking',
        contentZh: '正式會議後，越方通常會熱情邀約共進晚餐甚至小酌。餐桌上的輕鬆互動往往是建立深厚信任與敲定合作細節的最佳時機。',
        contentEn: 'Post-meeting dining and casual drinking are crucial for building deep trust and smoothing out contract details.'
      }
    ]
  },

  // 16. 緊急求助
  {
    id: 'emergency',
    category: 'emergency',
    tagZh: '救命必備',
    tagEn: 'Emergency & Police',
    icon: '🚨',
    image: 'emergency.jpg',
    titleZh: '緊急求助、遺失護照錢包、報警報案與急難電話',
    titleEn: 'Emergency Assistance, Lost Passport, Police Report & TECO Hotline',
    titleVi: 'Trợ Giúp Khẩn Cấp, Mất Hộ Chiếu & Báo Công An',
    summaryZh: '急難救助必備：遭搶呼救、向轄區派出所製作報案失竊筆錄、聯繫駐越南台北經濟文化辦事處急難救助專線、借用電話與搭乘安全計程車。',
    summaryEn: 'Emergency survival: shouting for help, filing a police report for lost passport/wallet, calling TECO emergency hotline, and safe transport.',
    dialogueSections: [
      {
        id: 'd1',
        titleZh: '對話一：飛車搶劫呼救、警察了解案情與製作報案筆錄',
        titleVi: 'Hội Thoại 1: Bị Cướp Giật, Báo Công An & Lập Biên Bản',
        titleEn: 'Dialogue 1: Snatch Theft, Police Inquiry & Report',
        summaryZh: '呼喊救命求助、冷靜向公安警察描述在十字路口被飛車搶走包包（內有護照、手機與錢包）並製作報案證明。',
        summaryEn: 'Shout for help, describe bag snatching at intersection (passport, phone, wallet) to police officer, and file property loss report.',
        lines: [
          {
            speaker: 'Nạn nhân (受害者)',
            role: 'learner',
            viet: 'Giúp tôi với! Cứu tôi với! Có ai biết nói tiếng Anh hoặc tiếng Trung không?',
            zh: '救我！幫幫我！有人會說英語或中文嗎？',
            en: 'Help me! Save me! Does anyone speak English or Chinese?',
            northTip: '「Giúp tôi với / Cứu tôi với」= 救命 / 幫幫我！',
            southTip: '在街頭遇到緊急危難時大聲呼喊此句能迅速引起路人與保全注意。'
          },
          {
            speaker: 'Công an (警察)',
            role: 'npc',
            viet: 'Bình tĩnh nào bạn! Có chuyện gì xảy ra vậy? Bạn bị mất đồ ở đâu?',
            zh: '請冷靜下來！發生了什麼事？你在哪裡遺失物品的？',
            en: 'Calm down please! What happened? Where did you lose your belongings?',
            northTip: '「Công an」= 公安警察；「Bình tĩnh nào」= 請保持冷靜。',
            southTip: '「mất đồ」= 遺失財物/失竊。'
          },
          {
            speaker: 'Nạn nhân (受害者)',
            role: 'learner',
            viet: 'Tôi vừa bị giật túi xách ở ngã tư, bên trong có hộ chiếu, điện thoại và ví tiền.',
            zh: '我剛在十字路口被飛車搶了包包，裡面有護照、手機和錢包。',
            en: 'My handbag was just snatched at the intersection, inside was my passport, phone, and wallet.',
            northTip: '「bị giật túi xách」= 被飛車飛搶包包；「ví tiền」= 皮夾錢包。',
            southTip: '在鬧區路口務必遠離馬路邊緣滑手機。'
          },
          {
            speaker: 'Công an (警察)',
            role: 'npc',
            viet: 'Chúng tôi sẽ lập biên bản trình báo mất tài sản để bạn làm lại hộ chiếu nhé.',
            zh: '我們會為您製作財產遺失報案筆錄，以便您前往代表處補發護照。',
            en: 'We will write a formal property loss police report so you can reapply for your passport.',
            northTip: '「lập biên bản」= 製作官方筆錄證明單。',
            southTip: '這份報案單（Biên bản mất đồ）是補發護照與出境必備的核心文件。'
          }
        ]
      },
      {
        id: 'd2',
        titleZh: '對話二：聯繫台北駐越辦事處急難救助、借用電話與叫正規計程車',
        titleVi: 'Hội Thoại 2: Liên Hệ Văn Phòng Đài Bắc, Mượn Điện Thoại & Taxi',
        titleEn: 'Dialogue 2: TECO Emergency Hotline, Phone Borrowing & Taxi',
        summaryZh: '遺失證件後前往駐越南台北經濟文化辦事處 (TECO) 申辦緊急入國證明書、借用飯店電話撥打急難專線並搭乘正規 Mai Linh 計程車。',
        summaryEn: 'Call TECO emergency hotline for travel documents, borrow hotel phone to notify banks, and book trusted Mai Linh taxi to police station.',
        lines: [
          {
            speaker: 'Nạn nhân (受害者)',
            role: 'learner',
            viet: 'Chào anh, tôi là du khách Đài Loan vừa bị mất hết giấy tờ, tôi cần liên hệ khẩn cấp với Văn phòng Kinh tế Văn hóa Đài Bắc.',
            zh: '您好，我是台灣遊客剛遺失了所有證件，需要緊急聯繫駐越南台北經濟文化辦事處。',
            en: 'Hello, I am a Taiwanese traveler who just lost all documents, I urgently need to contact the Taipei Economic and Cultural Office.',
            northTip: '「Văn phòng Kinh tế Văn hóa Đài Bắc」= 駐越南台北經濟文化辦事處 (TECO)。',
            southTip: '「mất hết giấy tờ」= 遺失所有身分證件。'
          },
          {
            speaker: 'Nhân viên khách sạn (飯店人員)',
            role: 'npc',
            viet: 'Bạn có bản sao hộ chiếu hoặc căn cước công dân lưu trong điện thoại hoặc email không?',
            zh: '您手機或電子郵件裡有存護照或身分證的彩色影本電子檔嗎？',
            en: 'Do you have a soft copy backup of your passport or ID card saved in your phone or email?',
            northTip: '「bản sao hộ chiếu」= 護照影本；「căn cước công dân」= 國民身分證。',
            southTip: '隨身雲端備份護照電子檔是海外旅遊必備生存技巧。'
          },
          {
            speaker: 'Nạn nhân (受害者)',
            role: 'learner',
            viet: 'Tôi có lưu ảnh chụp hộ chiếu trong Google Drive. Đây là số điện thoại đường dây nóng bảo hộ công dân.',
            zh: '我有在 Google Drive 存護照照片。這是辦事處急難救助專線號碼。',
            en: 'I saved passport photos in Google Drive. Here is the citizen protection emergency hotline number.',
            northTip: '「đường dây nóng」= 24小時緊急求助熱線 (Hotline)。',
            southTip: '「bảo hộ công dân」= 旅外國人急難救助。'
          },
          {
            speaker: 'Nhân viên khách sạn (飯店人員)',
            role: 'npc',
            viet: 'Tôi sẽ cho bạn mượn điện thoại bàn của khách sạn để gọi ngay về đường dây nóng nhé.',
            zh: '我把飯店櫃台的室內電話借給您，讓您立刻撥打急難專線求助。',
            en: 'I will lend you the hotels landline phone to call the emergency hotline immediately.',
            northTip: '「điện thoại bàn」= 室內座機電話。',
            southTip: '熱心相助能及時安定受害旅客的情緒。'
          },
          {
            speaker: 'Nạn nhân (受害者)',
            role: 'learner',
            viet: 'Cảm ơn anh rất nhiều! Phiền anh hướng dẫn tôi cách bắt taxi an toàn đến trụ sở công an quận với ạ.',
            zh: '非常感謝你！麻煩請指引我如何搭乘正規安全的計程車前往郡警察局。',
            en: 'Thank you so much! Please guide me on how to take a safe taxi to the district police station.',
            northTip: '「công an quận」= 轄區郡警察局 / 分局。',
            southTip: '「taxi an toàn」= 正規安全計程車。'
          },
          {
            speaker: 'Nhân viên khách sạn (飯店人員)',
            role: 'npc',
            viet: 'Để tôi gọi xe taxi Mai Linh chính hãng cho bạn, tôi sẽ dặn tài xế đưa bạn đến tận cửa công an nhé.',
            zh: '我幫您叫正規綠色 Mai Linh 計程車，並會叮嚀司機安全護送您到達警局門口喔。',
            en: 'Let me call an official Mai Linh taxi for you, I will instruct the driver to take you right to the police station door.',
            northTip: '「Mai Linh chính hãng」= 正規大廠綠色計程車。',
            southTip: '「đến tận cửa」= 送到門口。確保全程人身安全。'
          }
        ]
      }
    ],
    dialogues: [],
    rolePlay: {
      userRoleZh: '受害者 (Nạn nhân)',
      userRoleEn: 'Victim (Nạn nhân)',
      partnerRoleZh: '公安警察 (Công an)',
      partnerRoleEn: 'Police Officer (Công an)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Bình tĩnh nào! Bạn bị mất đồ gì và xảy ra ở đâu?',
          partnerPromptZh: '冷靜！你掉了什麼東西？在哪裡發生的？',
          partnerPromptEn: 'Calm down! What did you lose and where?',
          userOptions: [
            {
              id: 'em1_opt1',
              textVi: 'Tôi bị giật túi xách ở ngã tư, bên trong có hộ chiếu và ví tiền.',
              textZh: '我在十字路口被搶包包，裡面有護照和錢包。',
              textEn: 'My bag was snatched at intersection, had passport & wallet.',
              isCorrect: true,
              feedbackZh: '完全正確！清晰具體地描述案發經過與失竊物品。',
              feedbackEn: 'Correct! Clearly described incident and lost items.'
            },
            {
              id: 'em1_opt2',
              textVi: 'Cho tôi một tô phở gà không hành.',
              textZh: '給我一碗不加蔥的雞肉河粉。',
              textEn: 'Give me chicken pho without scallions.',
              isCorrect: false,
              feedbackZh: '這是餐廳點餐句子，報警請描述案情！',
              feedbackEn: 'Food phrase! Report emergency incident.'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Bạn có nhớ đặc điểm của kẻ cướp và biển số xe máy không?',
          partnerPromptZh: '你記得歹徒特徵和機車車牌嗎？',
          partnerPromptEn: 'Remember suspect features or motorbike plate?',
          userOptions: [
            {
              id: 'em2_opt1',
              textVi: 'Hai người đi xe máy màu đỏ chạy rất nhanh, tôi không nhìn rõ biển số.',
              textZh: '兩個人騎紅色機車騎非常快，我沒看清車牌。',
              textEn: 'Two on a red bike sped away fast, could not see plate.',
              isCorrect: true,
              feedbackZh: '非常實事求是地提供有限線索，冷靜客觀。',
              feedbackEn: 'Realistic and calm provision of available clues.'
            },
            {
              id: 'em2_opt2',
              textVi: 'Tôi muốn đổi một phòng có bồn tắm.',
              textZh: '我想換有浴缸的房間。',
              textEn: 'I want a room with bathtub.',
              isCorrect: false,
              feedbackZh: '飯店換房句子，請配合警方詢問案發細節！',
              feedbackEn: 'Hotel phrase! Cooperate with police inquiry.'
            }
          ]
        },
        {
          stepIndex: 3,
          partnerPromptVi: 'Tôi sẽ lập biên bản báo mất đồ để bạn mang đến Văn phòng Đài Bắc làm lại hộ chiếu nhé.',
          partnerPromptZh: '我製作報案單，讓您拿去台北代表處補發護照。',
          partnerPromptEn: 'I will file report for you to take to TECO for new passport.',
          userOptions: [
            {
              id: 'em3_opt1',
              textVi: 'Cảm ơn anh công an nhiều lắm! Giúp tôi đóng dấu mộc đỏ nhé.',
              textZh: '非常感謝警察先生！請幫我蓋上紅章喔。',
              textEn: 'Thank you officer! Please put the official red stamp on it.',
              isCorrect: true,
              feedbackZh: '完美！報案筆錄蓋上官方紅章始具效力。',
              feedbackEn: 'Perfect! Ensured official stamp on police report.'
            },
            {
              id: 'em3_opt2',
              textVi: 'Bao nhiêu tiền một ly cà phê sữa đá?',
              textZh: '一杯冰奶咖啡多少錢？',
              textEn: 'How much for iced milk coffee?',
              isCorrect: false,
              feedbackZh: '咖啡廳句子，請向公安警察致謝並索取蓋章筆錄！',
              feedbackEn: 'Cafe phrase! Thank police and get stamped report.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Cứu tôi với / Giúp tôi với', zh: '救命！ / 幫幫我！', en: 'Help me! / Save me!' },
      { viet: 'Công an / Cảnh sát', zh: '公安警察', en: 'Police officer' },
      { viet: 'Bị cướp giật', zh: '遭到飛車搶劫', en: 'Victim of snatch theft' },
      { viet: 'Mất hộ chiếu', zh: '遺失護照', en: 'Lost passport' },
      { viet: 'Lập biên bản', zh: '製作報案筆錄證明', en: 'File a formal police report' },
      { viet: 'Văn phòng Đài Bắc', zh: '駐越南台北經濟文化辦事處 (TECO)', en: 'Taipei Economic & Cultural Office' },
      { viet: 'Đường dây nóng', zh: '緊急求助專線 (Hotline)', en: 'Emergency hotline' },
      { viet: 'Số điện thoại khẩn cấp', zh: '急難救助電話 (113警 / 114火 / 115救護)', en: 'Emergency numbers (113/114/115)' }
    ],
    cultureTips: [
      {
        titleZh: '越南三大緊急報警救護電話',
        titleEn: 'Vietnams 3 Major Emergency Numbers',
        contentZh: '🚨 警察報案 (Police)：113；🚒 消防火警 (Fire)：114；🚑 醫療救護 (Ambulance)：115。遇搶劫失竊請就近前往案發地「Công an phường (坊派出所)」報案。',
        contentEn: 'Emergency hotlines: 113 for Police, 114 for Fire, 115 for Ambulance. Visit local Ward Police (Công an phường) for crime reports.'
      },
      {
        titleZh: '台灣旅外急難救助與辦事處聯繫方式',
        titleEn: 'Taiwan TECO Emergency Assistance in Vietnam',
        contentZh: '駐河內代表處 (北越) 緊急專線：+84-913-219-986；駐胡志明市辦事處 (南越) 緊急專線：+84-903-927-019。遺失護照憑警方報案單、身分證影本與照片可當日或次日申辦緊急入國證明書返台。',
        contentEn: 'TECO Emergency Hotlines: Hanoi +84-913-219-986; HCMC +84-903-927-019. Police reports and ID copies enable fast Emergency Travel Document issuance.'
      }
    ]
  }
];

// Ensure dialogues field is populated for backwards compatibility with any component reading .dialogues directly
situationalScenarios.forEach(sc => {
  if (sc.dialogueSections && sc.dialogueSections[0]?.lines) {
    sc.dialogues = sc.dialogueSections[0].lines;
  }
});
