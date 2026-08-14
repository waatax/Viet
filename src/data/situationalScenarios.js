/**
 * Comprehensive 16-Scenario Situational Vietnamese Dataset (16大實戰情境全能越語數據庫)
 * Standardized for Taiwan learners (ZH Mode) & Global English track (EN Mode)
 * Includes dialogue scripts, interactive role-play questions, vocabulary deck, and cultural tips.
 */

export const scenarioCategories = [
  { id: 'all', labelZh: '全部情境 (16個)', labelEn: 'All Scenarios (16)' },
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
    titleZh: '咖啡廳點經典冰奶咖與甜度冰量',
    titleEn: 'Ordering Vietnamese Iced Coffee at a Cafe',
    titleVi: 'Gọi Cà Phê Tại Quán Cà Phê',
    summaryZh: '學習點最道地的 Cà phê sữa đá (冰奶咖)、Bạc xỉu (白咖啡/多奶) 以及調整甜度冰量與內用外帶。',
    summaryEn: 'Order authentic Vietnamese Iced Milk Coffee, Bạc xỉu, adjust sweetness/ice, and choose dine-in or takeaway.',
    dialogues: [
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
    ],
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
              textVi: 'Tôi muốn đi vệ sinh.',
              textZh: '我想去洗手間。',
              textEn: 'I want to go to the toilet.',
              isCorrect: false,
              feedbackZh: '這是問廁所，店員問你想喝什麼喔！',
              feedbackEn: 'This asks for the restroom, not ordering drinks!'
            },
            {
              id: 'c1_opt3',
              textVi: 'Bao nhiêu tiền một cái áo?',
              textZh: '一件衣服多少錢？',
              textEn: 'How much is this shirt?',
              isCorrect: false,
              feedbackZh: '這是買衣服的問句，不合適。',
              feedbackEn: 'This is for clothes shopping!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Anh uống tại đây hay mang đi ạ? Có giảm đường không?',
          partnerPromptZh: '哥是在這裡喝還是外帶？需要少糖嗎？',
          partnerPromptEn: 'Dine-in or takeaway? Less sugar?',
          userOptions: [
            {
              id: 'c1_opt4',
              textVi: 'Uống tại đây, cho anh ít đường và nhiều đá nhé.',
              textZh: '內用，給我少糖多冰喔。',
              textEn: 'Dine-in, give me less sugar and extra ice please.',
              isCorrect: true,
              feedbackZh: '完美！準確表達了內用、少糖與多冰。',
              feedbackEn: 'Excellent! Clear specification for dine-in, less sugar and extra ice.'
            },
            {
              id: 'c1_opt5',
              textVi: 'Không có gì đâu.',
              textZh: '沒什麼 / 不客氣。',
              textEn: 'You are welcome.',
              isCorrect: false,
              feedbackZh: '回答離題了喔。',
              feedbackEn: 'Off-topic response.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Cà phê sữa đá', zh: '冰牛奶咖啡 (煉乳咖啡)', en: 'Iced milk coffee', phonetic: '[ka fe sɯə da]', note: '越南國飲，黑咖啡加煉乳與碎冰' },
      { viet: 'Bạc xỉu', zh: '白咖啡 (多奶少咖啡)', en: 'White coffee (more milk)', phonetic: '[ɓak siw]', note: '源自西貢粵語「白小」，適合怕苦者' },
      { viet: 'Cà phê đen đá', zh: '冰黑咖啡', en: 'Iced black coffee', phonetic: '[ka fe dɛn da]', note: '純黑咖啡加冰' },
      { viet: 'Ít đường', zh: '少糖 / 微糖', en: 'Less sugar', phonetic: '[it dɯəŋ]', note: '點飲料必背詞' },
      { viet: 'Nhiều đá', zh: '多冰', en: 'Extra ice', phonetic: '[ɲiəw da]', note: '炎熱氣候專用' },
      { viet: 'Không lấy đá', zh: '去冰 / 不加冰', en: 'No ice', phonetic: '[xoŋ ləj da]', note: '冷飲去冰' },
      { viet: 'Mang đi / Mang về', zh: '外帶', en: 'Takeaway / To go', phonetic: '[maŋ di / maŋ ve]', note: '南越講 mang đi，北越講 mang về' },
      { viet: 'Uống tại đây', zh: '內用 / 在此飲用', en: 'Dine in / For here', phonetic: '[uəŋ taːj dəj]', note: '在店內享用' }
    ],
    culturalTips: {
      titleZh: '越南咖啡館在地文化與秘笈',
      titleEn: 'Vietnamese Cafe Culture & Etiquette',
      tipsZh: [
        '叫店員請用「Em ơi!」(年輕店員) 或「Anh ơi / Chị ơi」，切勿直接大喊「Waiter」。',
        '越南的咖啡普遍預設加入香甜濃厚的煉乳 (Sữa đặc)，若不嗜甜，務必提醒「Ít đường」(少糖) 或「Ít sữa」(少奶)。',
        '在傳統咖啡館，通常會免費附上一大杯清涼消暑的淡香綠茶「Trà đá」(冰茶)。'
      ],
      tipsEn: [
        'Address staff with friendly pronouns: "Em ơi!" (younger staff) or "Anh ơi / Chị ơi".',
        'Vietnamese coffee comes standard with sweet condensed milk (Sữa đặc). Ask for "Ít đường" (less sugar) if you prefer milder sweetness.',
        'Traditional cafes always serve a complimentary iced fragrant tea known as "Trà đá".'
      ],
      proTipZh: '✨ 避坑：越南有些精品文青店結帳要先付，街頭小店通常是喝完離開前再喊「Em ơi tính tiền」(結帳)！',
      proTipEn: '✨ Pro Tip: Trendy cafes require payment at counter first, while street cafes charge after finishing when you call "Tính tiền"!'
    }
  },

  // 2. 傳統河粉店
  {
    id: 'pho',
    category: 'dining',
    tagZh: '國民美食',
    tagEn: 'National Dish',
    icon: '🍜',
    titleZh: '傳統河粉店點牛肉河粉、油條與熟度',
    titleEn: 'Ordering Pho Beef Noodle Soup & Toppings',
    titleVi: 'Gọi Món Tại Quán Phở Truyền Thống',
    summaryZh: '學會區分半熟生牛肉 (Phở tái)、全熟牛腩 (Phở chín/nạm)、加點油條 (Quẩy) 與特製半熟蛋 (Trứng chần)。',
    summaryEn: 'Order rare beef (Phở tái), well-done brisket (Phở chín/nạm), crispy crullers (Quẩy), and poached egg.',
    dialogues: [
      {
        speaker: 'Chủ quán (老闆)',
        role: 'npc',
        viet: 'Chào em, hôm nay ăn phở gì em ơi?',
        zh: '你好，今天想吃什麼河粉呀？',
        en: 'Hello, what kind of pho would you like today?',
        northTip: '河粉店老闆非常熱情，常用親切稱謂。',
        southTip: '南越河粉常會額外附上一大盤新鮮九層塔與生豆芽。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho em một tô phở bò tái nạm và một đĩa quẩy nhé.',
        zh: '給我一碗半熟生牛肉加熟牛腩河粉，還有一盤油條喔。',
        en: 'Please give me a bowl of rare & brisket beef pho and a plate of fried dough crullers.',
        northTip: '北越吃河粉必配「Quẩy」(油條) 泡湯汁！',
        southTip: '「Tô」是南越碗的稱呼，北越講「Bát」。'
      },
      {
        speaker: 'Chủ quán (老闆)',
        role: 'npc',
        viet: 'Có ăn hành và ngò gai không? Có thêm trứng chần không em?',
        zh: '吃蔥花和刺芫荽（香菜）嗎？要加一顆半熟溫泉蛋嗎？',
        en: 'Do you eat scallions and culantro? Would you like a poached egg?',
        northTip: '北越河粉靈魂在於滿滿的蔥花 (Hành hoa)。',
        southTip: '「Trứng chần」是濃郁半熟蛋黃浸泡在熱牛骨湯中。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Dạ có, cho nhiều hành và cho em thêm một chén trứng chần.',
        zh: '好的要加，請多放蔥花，並多給我一小碗半熟蛋。',
        en: 'Yes, lots of scallions please, and an extra bowl of poached egg.',
        northTip: '小碗在北越叫「Bát nhỏ」，南越叫「Chén」。',
        southTip: '多放生菜用「nhiều rau」，不吃蔥講「không lấy hành」。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Chị ơi, cho em xin thêm chanh và ớt tươi với ạ.',
        zh: '大姐，請再給我檸檬和新鮮辣椒片好嗎？',
        en: 'Excuse me, please give me some extra limes and fresh chilies.',
        northTip: '河粉配料必備金桔 (Quất) 或綠檸檬 (Chanh)。',
        southTip: '桌上常備是拉差辣椒醬 (Tương ớt) 與黑甜醬 (Tương đen)。'
      }
    ],
    rolePlay: {
      userRoleZh: '食客 (Khách)',
      userRoleEn: 'Diner (Khách)',
      partnerRoleZh: '河粉店老闆娘 (Chủ quán)',
      partnerRoleEn: 'Pho Shop Owner (Chủ quán)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào em, hôm nay ăn phở tái hay phở chín em ơi?',
          partnerPromptZh: '你好，今天吃生牛肉河粉還是熟牛肉河粉？',
          partnerPromptEn: 'Hello, rare beef pho or well-done beef pho today?',
          userOptions: [
            {
              id: 'pho_opt1',
              textVi: 'Cho em một tô phở bò tái nạm và một đĩa quẩy nhé.',
              textZh: '給我一碗生熟混合牛肉河粉和一盤油條。',
              textEn: 'Give me one rare & brisket beef pho and crullers please.',
              isCorrect: true,
              feedbackZh: '老饕級點法！半熟加熟牛腩是最高人氣搭配。',
              feedbackEn: 'Gourmet choice! Rare plus brisket is the most popular combo.'
            },
            {
              id: 'pho_opt2',
              textVi: 'Tôi muốn mua vé máy bay.',
              textZh: '我想買飛機票。',
              textEn: 'I want to buy a flight ticket.',
              isCorrect: false,
              feedbackZh: '這是買機票，不是點餐喔！',
              feedbackEn: 'This means buying airline tickets!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Em có ăn hành và ngò không? Có thêm chanh ớt không?',
          partnerPromptZh: '你吃蔥和香菜嗎？要加檸檬辣椒嗎？',
          partnerPromptEn: 'Do you eat scallions and herbs? Extra lime & chili?',
          userOptions: [
            {
              id: 'pho_opt3',
              textVi: 'Dạ có, cho em nhiều hành và thêm chanh ớt nhé.',
              textZh: '要的，給我多加蔥花和檸檬辣椒喔。',
              textEn: 'Yes, lots of scallions and lime & chili please.',
              isCorrect: true,
              feedbackZh: '回答非常標準順暢！',
              feedbackEn: 'Spot-on natural phrasing!'
            },
            {
              id: 'pho_opt4',
              textVi: 'Không, em không ăn hành.',
              textZh: '不，我不吃蔥。',
              textEn: 'No, I do not eat scallions.',
              isCorrect: true,
              feedbackZh: '完全正確！不吃蔥的朋友必備這句。',
              feedbackEn: 'Correct! Essential for those who dislike scallions.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Phở bò tái', zh: '半熟生牛肉河粉', en: 'Rare beef pho', phonetic: '[fəː ɓɔ taːj]', note: '將滾燙牛骨湯澆在生鮮牛肉片上，肉質最嫩' },
      { viet: 'Phở bò chín', zh: '全熟牛肉河粉', en: 'Well-done beef pho', phonetic: '[fəː ɓɔ cin]', note: '全熟牛腩肉片' },
      { viet: 'Phở gà', zh: '雞肉河粉', en: 'Chicken pho', phonetic: '[fəː ɣa]', note: '清甜雞肉絲與雞骨高湯' },
      { viet: 'Quẩy', zh: '越式油條', en: 'Fried dough cruller', phonetic: '[kwaj]', note: '泡在河粉湯中吸附濃郁湯汁' },
      { viet: 'Trứng chần', zh: '半熟溫泉蛋', en: 'Poached soft egg', phonetic: '[tɯŋ cən]', note: '盛在小碗湯中的生熟蛋' },
      { viet: 'Hành hoa / Hành lá', zh: '青蔥 / 蔥花', en: 'Scallions / Green onions', phonetic: '[haŋ hwa]', note: '不吃蔥說 Không lấy hành' },
      { viet: 'Ngò gai / Rau thơm', zh: '刺芫荽 (香菜) / 香草', en: 'Culantro / Fragrant herbs', phonetic: '[ŋɔ ɣaːj]', note: '越南特色香草' },
      { viet: 'Chanh và ớt', zh: '檸檬與辣椒', en: 'Lime and chili', phonetic: '[caɲ va əːt]', note: '吃河粉必擠檸檬提味' }
    ],
    culturalTips: {
      titleZh: '河粉老饕道地吃法與南北差異',
      titleEn: 'Authentic Pho Etiquette & Regional Variations',
      tipsZh: [
        '南北大不同：北越河粉（河內）湯頭清澈純厚、注重純蔥香與油條；南越河粉（西貢）湯頭微甜，附上一大盆生九層塔、豆芽、海鮮甜醬與辣椒醬。',
        '先喝一口原湯再調味：老饕習慣先喝一口純牛骨湯，再擠入檸檬汁（Chanh）並加入新鮮生辣椒圈。',
        '吃完喊買單：吃飽後對老闆招手說「Tính tiền cho em nhé!」(幫我結帳)。'
      ],
      tipsEn: [
        'North vs South: Northern pho features clear savory broth with crullers and scallions; Southern pho has sweeter broth with a forest of fresh herbs, bean sprouts, and hoisin/chili sauces.',
        'Sip broth first: Taste the pure simmering beef broth before squeezing in fresh lime and adding sliced bird’s eye chili.',
        'Calling the bill: Wave gently and say "Tính tiền cho em nhé!" to settle the check.'
      ],
      proTipZh: '✨ 避坑：桌上的濕紙巾 (Khăn lạnh) 通常需額外收費約 2,000-5,000 VND，若不用可放在一旁。',
      proTipEn: '✨ Pro Tip: Wet towels (Khăn lạnh) on the table usually cost 2,000–5,000 VND extra; leave unopened if not needed.'
    }
  },

  // 3. 越式法國麵包街頭攤
  {
    id: 'banhmi',
    category: 'dining',
    tagZh: '街頭必吃',
    tagEn: 'Street Legend',
    icon: '🥖',
    titleZh: '越式法國麵包攤客製化內餡與辣度',
    titleEn: 'Customizing Vietnamese Banh Mi at a Street Cart',
    titleVi: 'Mua Bánh Mì Tại Xe Bánh Mì Vỉa Hè',
    summaryZh: '掌握綜合肉醬 (Thịt đặc biệt)、烤肉 (Thịt nướng)、煎蛋 (Trứng ốp la)、不加辣 (Không ăn cay) 與烤酥脆 (Nướng giòn)。',
    summaryEn: 'Order Special Mixed Meat, Grilled Pork, Fried Egg, adjust spiciness (no chili / extra spicy), and toast crispy.',
    dialogues: [
      {
        speaker: 'Cô bán hàng (老闆娘)',
        role: 'npc',
        viet: 'Cháu mua bánh mì gì? Bánh mì thịt đặc biệt hay thịt nướng?',
        zh: '你買什麼麵包？綜合肉餡特別版還是現烤豬肉？',
        en: 'What banh mi would you like? Special mixed meats or grilled pork?',
        northTip: '街頭攤販長輩對年輕客人常親切自稱 Cô (阿姨)，稱客人 Cháu。',
        southTip: '南越麵包攤配料豐富，常擺放滿滿肉丸 (Xíu mại) 與叉燒。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho cháu hai ổ bánh mì thịt đặc biệt, nướng giòn giúp cháu nhé.',
        zh: '請給我兩個綜合肉餡法國麵包，幫我烤得酥脆一點喔。',
        en: 'Please give me two special mixed meat banh mi, toasted extra crispy.',
        northTip: '量詞「個/條」法國麵包用「ổ」或「cái」。',
        southTip: '「nướng giòn」是要求店家在烤箱或炭火上重新烘熱酥脆。'
      },
      {
        speaker: 'Cô bán hàng (老闆娘)',
        role: 'npc',
        viet: 'Có ăn cay không? Có ăn pa-tê và rau mùi không cháu?',
        zh: '吃辣嗎？要加肝醬 (Pâté) 和香菜醃蘿蔔嗎？',
        en: 'Do you eat spicy? Pâté and cilantro/pickles?',
        northTip: '香菜北越叫「Rau mùi」，南越叫「Ngò rí」。',
        southTip: '越式肝醬 (Pa-tê) 是麵包香醇無比的靈魂。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho cháu nhiều pa-tê, một ổ cho cay, một ổ không lấy ớt nhé cô.',
        zh: '請給我多加肝醬，一個要加辣，另一個不要放辣椒喔阿姨。',
        en: 'Lots of pâté please, one spicy, and one strictly without chili.',
        northTip: '辣椒是「Ớt」，不吃辣說「Không ăn cay / Không lấy ớt」。',
        southTip: '越南生辣椒非常辛辣，怕辣者請務必叮嚀。'
      },
      {
        speaker: 'Cô bán hàng (老闆娘)',
        role: 'npc',
        viet: 'Xong rồi đây! Hai ổ của cháu hết năm mươi nghìn.',
        zh: '做好了！你的兩個總共五萬盾 (50,000 VND)。',
        en: 'Ready! Two banh mi is 50,000 VND.',
        northTip: '均價一個約 20,000 - 35,000 VND。',
        southTip: '用紙包好並繫上橡皮筋，方便邊走邊吃。'
      }
    ],
    rolePlay: {
      userRoleZh: '買麵包客人 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '麵包攤阿姨 (Cô bán bánh mì)',
      partnerRoleEn: 'Banh Mi Vendor (Cô bán bánh mì)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Cháu ơi, ăn bánh mì gì? Có ăn pa-tê và bơ không?',
          partnerPromptZh: '你要吃什麼麵包？要加肝醬和奶油嗎？',
          partnerPromptEn: 'What banh mi would you like? With pâté and butter?',
          userOptions: [
            {
              id: 'bm_opt1',
              textVi: 'Cho cháu một ổ bánh mì thịt đặc biệt, nhiều pa-tê nhé.',
              textZh: '給我一個綜合肉麵包，多加肝醬喔。',
              textEn: 'One special meat banh mi with lots of pâté please.',
              isCorrect: true,
              feedbackZh: '完美！充分傳達了招牌品項與客製肝醬需求。',
              feedbackEn: 'Great job! Requested signature sandwich with extra pate.'
            },
            {
              id: 'bm_opt2',
              textVi: 'Tôi muốn mua thuốc cảm.',
              textZh: '我想買感冒藥。',
              textEn: 'I want to buy cold medicine.',
              isCorrect: false,
              feedbackZh: '這是買藥喔，不是買麵包！',
              feedbackEn: 'This is buying medicine!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Có ăn ớt cay và rau ngò không cháu?',
          partnerPromptZh: '有吃辣椒和香菜嗎？',
          partnerPromptEn: 'Do you want spicy chili and cilantro?',
          userOptions: [
            {
              id: 'bm_opt3',
              textVi: 'Dạ không ăn cay, không lấy ớt nhé cô.',
              textZh: '不吃辣，不要加辣椒喔阿姨。',
              textEn: 'No spicy, no chili please ma\'am.',
              isCorrect: true,
              feedbackZh: '非常實用！去辣椒必備句子。',
              feedbackEn: 'Crucial phrase for avoiding chili!'
            },
            {
              id: 'bm_opt4',
              textVi: 'Cho cháu nhiều ớt cay xé lưỡi nhé.',
              textZh: '給我多放超辣辣椒。',
              textEn: 'Lots of spicy chili please.',
              isCorrect: true,
              feedbackZh: '嗜辣者的首選！',
              feedbackEn: 'Chili lover choice!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bánh mì thịt đặc biệt', zh: '綜合招牌肉越式法國麵包', en: 'Special mixed meat banh mi', phonetic: '[ɓaɲ mi tʰit dak ɓiət]', note: '含扎肉、叉燒、紅燒肉與肝醬' },
      { viet: 'Bánh mì thịt nướng', zh: '現烤香茅豬肉麵包', en: 'Grilled pork banh mi', phonetic: '[ɓaɲ mi tʰit nɯəŋ]', note: '炭烤香味濃郁' },
      { viet: 'Bánh mì trứng ốp la', zh: '荷包蛋煎蛋麵包', en: 'Fried egg banh mi', phonetic: '[ɓaɲ mi tɯŋ op la]', note: '現煎荷包蛋早餐首選' },
      { viet: 'Pa-tê', zh: '肝醬 (豬肝醬/鵝肝醬)', en: 'Pâté spread', phonetic: '[pa te]', note: '法式殖民留下的靈魂醬料' },
      { viet: 'Đồ chua', zh: '醃蘿蔔絲 (酸甜白蘿蔔與紅蘿蔔)', en: 'Pickled daikon & carrots', phonetic: '[do cuə]', note: '去油解膩必備' },
      { viet: 'Nướng giòn', zh: '烤酥脆 / 烤熱', en: 'Toast crispy / Reheat', phonetic: '[nɯəŋ zɔn]', note: '確保麵包外皮酥脆' },
      { viet: 'Không lấy ớt / Không ăn cay', zh: '不要辣椒 / 不吃辣', en: 'No chili / Not spicy', phonetic: '[xoŋ ləj əːt]', note: '怕辣者救星' },
      { viet: 'Ngò rí / Rau mùi', zh: '香菜 / 芫荽', en: 'Cilantro / Coriander', phonetic: '[ŋɔ zi]', note: '不吃香菜可說 Không lấy ngò' }
    ],
    culturalTips: {
      titleZh: '法國麵包點餐技巧與街頭風情',
      titleEn: 'Banh Mi Ordering Tips & Street Smarts',
      tipsZh: [
        '現烤才酥脆：如果看到攤上的麵包已經放涼，點餐時記得交代「Nướng giòn giúp cháu」(請幫我烤脆)。',
        '辣醬 vs 生辣椒：越南很多攤販使用的是新鮮朝天椒 (Ớt hiểm)，辣度極高！若不太能吃辣，建議直接說「Không lấy ớt」(不要辣椒)。',
        '麵包量詞：在越南點麵包，量詞請用「Ổ」(如 Một ổ = 一條/一個)。'
      ],
      tipsEn: [
        'Always ask to toast: If loaves look soft, ask for "Nướng giòn" to have it reheated in the mini toaster oven until crackling.',
        'Fiery chilies: Vendors use fresh bird\'s eye chili. Say "Không lấy ớt" if you are sensitive to heat.',
        'Classifier for banh mi: Use the counter "Ổ" (e.g. Một ổ bánh mì = one loaf of banh mi).'
      ],
      proTipZh: '✨ 推薦品項：除了肉餡，西貢的「Bánh mì phá lấu」(牛雜麵包) 和「Bánh mì chảo」(鐵板鐵鍋麵包) 也極度美味！',
      proTipEn: '✨ Pro Tip: Also try "Bánh mì xíu mại" (meatball) or "Bánh mì chảo" (served hot on a skillet)!'
    }
  },

  // 4. 海鮮大排檔與熱炒餐廳
  {
    id: 'seafood',
    category: 'dining',
    tagZh: '熱炒夜生活',
    tagEn: 'Seafood & Nightlife',
    icon: '🍽️',
    titleZh: '海鮮大排檔炒螺肉、敬酒乾杯與結帳',
    titleEn: 'Seafood Snail Stall (Quán Ốc), Beer Cheers & Paying the Bill',
    titleVi: 'Ăn Ốc Vỉa Hè & Nhậu Quán Ăn Hải Sản',
    summaryZh: '掌握蒜香牛油炒螺 (Ốc xào bơ tỏi)、蔥油烤生蠔 (Hàu nướng mỡ hành)、越南啤酒乾杯 (1, 2, 3, Dzô!) 與買單算帳。',
    summaryEn: 'Order garlic butter snails, grilled oysters with scallion oil, beer cheers culture (Một hai ba dzô), and check-out.',
    dialogues: [
      {
        speaker: 'Phục vụ (服務生)',
        role: 'npc',
        viet: 'Dạ chào anh chị! Bàn mình đi mấy người ạ?',
        zh: '您好！請問我們這桌幾位呢？',
        en: 'Hello! How many people in your party?',
        northTip: '「Bàn mình」代表「我們這桌/您各位」。',
        southTip: '海鮮店夜間通常人聲鼎沸，氣氛熱鬧。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Bàn anh bốn người. Cho anh xem thực đơn hải sản nhé.',
        zh: '我們四個人。請給我看一下海鮮菜單喔。',
        en: 'Table of four. Please show us the seafood menu.',
        northTip: '四個人說「bốn người」。',
        southTip: '在熱炒店叫店員揮手說「Em ơi!」最自然。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho một đĩa ốc hương xào bơ tỏi, một đĩa hàu nướng mỡ hành và một két bia Sài Gòn.',
        zh: '來一盤蒜香奶油炒花螺、一盤蔥油烤生蠔，還有一箱西貢啤酒。',
        en: 'Give us one garlic butter sweet snails, grilled oysters with scallion oil, and a case of Saigon beer.',
        northTip: '北越喝 Bia Hà Nội / Bia Trúc Bạch，南越喝 Bia Sài Gòn / Bia 333。',
        southTip: '一箱啤酒叫「một két」，幾罐叫「mấy lon」。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Nào các bạn ơi! Một, hai, ba, dzô! Hai, ba, dzô! Hai, ba, uống!',
        zh: '來大家！一、二、三，喝（乾杯）！二、三，喝！二、三，乾杯乾了！',
        en: 'Alright everyone! One, two, three, cheers! Two, three, cheers! Drink up!',
        northTip: '北越發音「Dô」，南越發音「Dzô」，氣勢磅礴。',
        southTip: '越南餐桌聚會熱鬧乾杯口號。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Em ơi! Tính tiền cho bàn anh nhé! Có quẹt thẻ được không?',
        zh: '服務員！幫我們這桌結帳！可以刷卡嗎？',
        en: 'Waiter! The bill for our table please! Can we pay by credit card?',
        northTip: '刷卡說「Quẹt thẻ」或「Thanh toán thẻ」。',
        southTip: '大排檔通常收現金「Tiền mặt」或轉帳「Chuyển khoản」。'
      }
    ],
    rolePlay: {
      userRoleZh: '聚餐主客 (Khách)',
      userRoleEn: 'Host / Diner (Khách)',
      partnerRoleZh: '熱炒店店員 (Phục vụ)',
      partnerRoleEn: 'Waiter (Phục vụ)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ bàn anh bốn người, anh muốn gọi món gì trước ạ?',
          partnerPromptZh: '好的四位，請問想先點什麼菜呢？',
          partnerPromptEn: 'Table for four, what would you like to order first?',
          userOptions: [
            {
              id: 'oc_opt1',
              textVi: 'Cho anh một đĩa ốc hương xào bơ tỏi và bia Sài Gòn nhé.',
              textZh: '給我一盤蒜香奶油炒花螺和西貢啤酒。',
              textEn: 'Give us garlic butter sweet snails and Saigon beer please.',
              isCorrect: true,
              feedbackZh: '超棒！這是大排檔最經典必點的海鮮與啤酒搭配。',
              feedbackEn: 'Awesome! Classic seafood snail and beer combo.'
            },
            {
              id: 'oc_opt2',
              textVi: 'Tôi muốn đổi phòng khách sạn.',
              textZh: '我想換飯店房間。',
              textEn: 'I want to change hotel rooms.',
              isCorrect: false,
              feedbackZh: '這是飯店換房，不合適！',
              feedbackEn: 'This is for changing hotel rooms!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Anh ăn xong chưa ạ? Em hỗ trợ gì thêm không?',
          partnerPromptZh: '哥吃飽了嗎？還需要什麼協助嗎？',
          partnerPromptEn: 'Are you finished? Anything else I can help with?',
          userOptions: [
            {
              id: 'oc_opt3',
              textVi: 'Em ơi, tính tiền cho bàn anh nhé.',
              textZh: '服務員，幫我們這桌算帳買單喔。',
              textEn: 'Waiter, the bill for our table please.',
              isCorrect: true,
              feedbackZh: '標準結帳用語！',
              feedbackEn: 'Standard payment request!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Quán Ốc', zh: '螺肉海鮮熱炒攤', en: 'Snail & seafood stall', phonetic: '[kwan ok]', note: '越南極具特色的宵夜排檔文化' },
      { viet: 'Ốc hương xào bơ tỏi', zh: '蒜香奶油炒花螺', en: 'Garlic butter snails', phonetic: '[ok hɯəŋ saːw ɓəː tɔj]', note: '附帶烤法國麵包沾醬汁超絕配' },
      { viet: 'Hàu nướng mỡ hành', zh: '蔥油花生烤生蠔', en: 'Grilled scallion oil oysters', phonetic: '[haw nɯəŋ məː haŋ]', note: '灑上花生碎與香蔥' },
      { viet: 'Càng ghẹ rang muối', zh: '鹽炒花蟹螯', en: 'Salt-roasted crab claws', phonetic: '[kaːŋ ɣɛ zaːŋ mwoj]', note: '香辣下酒菜' },
      { viet: 'Bia hơi / Bia lon', zh: '生啤酒 / 罐裝啤酒', en: 'Draft beer / Canned beer', phonetic: '[ɓiə həːj]', note: '河內街頭 Bia hơi 文化盛行' },
      { viet: 'Một hai ba dzô!', zh: '一二三，乾杯！', en: '1, 2, 3, cheers!', phonetic: '[mot haːj ɓa zow]', note: '越南酒桌最狂熱的乾杯口號' },
      { viet: 'Tính tiền / Thanh toán', zh: '結帳買單', en: 'Pay the bill / Check', phonetic: '[tiɲ tiən / tʰaɲ twan]', note: '離開前招手喊算帳' },
      { viet: 'Quẹt thẻ / Tiền mặt', zh: '刷卡 / 現金', en: 'Credit card / Cash', phonetic: '[kwɛt tʰɛ / tiən mat]', note: '付款方式詢問' }
    ],
    culturalTips: {
      titleZh: '越南「Nhậu」(喝酒吃大排檔) 社交文化',
      titleEn: 'Vietnamese "Nhậu" Drinking & Dining Etiquette',
      tipsZh: [
        '啤酒加冰塊 (Uống bia với đá)：在越南，由於常溫天氣炎熱，啤酒大多會倒進裝有一大塊厚冰柱 (Đá cây) 的杯子中飲用。',
        '麵包沾醬 (Chấm bánh mì)：點「xào bơ tỏi」(炒奶油蒜蓉) 或「xào me」(炒酸子羅望子) 時，強烈建議加點一條法國麵包沾濃郁醬汁吃！',
        '敬酒禮節：敬酒時雙手舉杯，若對方年長或位尊，杯緣應略低於對方杯緣以示尊重。'
      ],
      tipsEn: [
        'Beer over ice: Beer in Vietnam is typically poured directly over huge clear ice cylinders in thick mugs.',
        'Dip bread in sauce: Order a baguette to dip into the rich garlic butter or sweet & sour tamarind sauce.',
        'Toast with both hands: Lower your glass slightly when clinking with senior peers.'
      ],
      proTipZh: '✨ 實用單字：不想喝了可以笑著說「Say rồi!」(我喝醉了啦) 或「Không uống được nữa」(不能再喝了)。',
      proTipEn: '✨ Pro Tip: Say "Say rồi!" (I\'m tipsy!) or "Xin phép uống trà" (permission to switch to tea) if tapped out!'
    }
  },

  // 5. 手搖茶飲與甜湯冰品店
  {
    id: 'boba_che',
    category: 'dining',
    tagZh: '甜品消暑',
    tagEn: 'Boba & Sweet Soups',
    icon: '🧋',
    titleZh: '手搖奶茶與傳統越式甜湯 (Chè) 點餐',
    titleEn: 'Ordering Bubble Tea & Traditional Vietnamese Sweet Soup (Chè)',
    titleVi: 'Gọi Trà Sữa & Quán Chè Truyền Thống',
    summaryZh: '黑糖珍珠鮮奶、經典蓮子柚子甜湯 (Chè bưởi)、調整甜度（半糖/微糖）與配料椰果仙草布丁。',
    summaryEn: 'Order Brown Sugar Boba, Grapefruit Sweet Soup (Chè bưởi), adjust ice/sugar, add grass jelly & coconut pudding.',
    dialogues: [
      {
        speaker: 'Nhân viên (店員)',
        role: 'npc',
        viet: 'Em chào chị! Chị muốn dùng trà sữa hay chè truyền thống ạ?',
        zh: '你好！姐想喝手搖奶茶還是傳統越式甜湯呢？',
        en: 'Hello! Would you like bubble tea or traditional sweet soup (Chè)?',
        northTip: '甜湯在越南是老少咸宜的消暑聖品。',
        southTip: '南越甜湯常淋上濃郁的現煮椰漿 (Nước cốt dừa)。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho chị một ly chè bưởi và một ly trà sữa trân châu đường đen.',
        zh: '給我一杯柚子皮椰奶甜湯和一杯黑糖珍珠奶茶。',
        en: 'Please give me one pomelo sweet soup (Chè bưởi) and one brown sugar boba milk tea.',
        northTip: 'Chè bưởi 做法獨特，用柚子白皮煮得爽脆不苦澀。',
        southTip: '手搖飲店林立，深受年輕人喜愛。'
      },
      {
        speaker: 'Nhân viên (店員)',
        role: 'npc',
        viet: 'Trà sữa chị lấy ngọt thế nào ạ? Chè có cần cho nhiều nước cốt dừa không?',
        zh: '奶茶甜度想要怎樣呢？甜湯需要多淋一點椰奶椰漿嗎？',
        en: 'What sweetness level for the milk tea? Extra coconut milk on the Chè?',
        northTip: '甜度選項：50% đường (半糖), 30% đường (微糖), không đường (無糖)。',
        southTip: '椰漿在越語叫「Nước cốt dừa」，香濃滑順。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Trà sữa cho năm mươi phần trăm đường và ít đá. Chè cho nhiều nước cốt dừa nhé.',
        zh: '奶茶請給我半糖 (50%) 少冰。甜湯多放點椰漿喔。',
        en: 'For milk tea: 50% sugar and less ice. For Chè: extra coconut milk please.',
        northTip: '少冰說「Ít đá」，去冰說「Không đá / Bỏ đá」。',
        southTip: '「Năm mươi phần trăm」= 50%。'
      }
    ],
    rolePlay: {
      userRoleZh: '顧客 (Khách)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '甜品店員 (Nhân viên)',
      partnerRoleEn: 'Dessert Staff (Nhân viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ chị chọn món gì ạ? Có cần tư vấn chè ngon không?',
          partnerPromptZh: '您想選什麼甜品？需要推薦好吃的招牌甜湯嗎？',
          partnerPromptEn: 'What would you like? Need recommendation for signature Chè?',
          userOptions: [
            {
              id: 'che_opt1',
              textVi: 'Cho chị một ly chè khúc bạch và một trà sữa ít đường.',
              textZh: '給我一杯杏仁豆腐奶凍甜湯和一杯少糖奶茶。',
              textEn: 'Give me one almond jelly Chè and one milk tea with less sugar.',
              isCorrect: true,
              feedbackZh: '太會點了！Chè khúc bạch 是消暑排隊人氣王。',
              feedbackEn: 'Great pick! Chè khúc bạch is a hit summer dessert.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Chè bưởi', zh: '柚子皮綠豆椰奶甜湯', en: 'Pomelo sweet soup', phonetic: '[cɛ ɓɯəj]', note: '脆口柚子皮與軟糯綠豆仁' },
      { viet: 'Chè khúc bạch', zh: '越式奶酪杏仁凍甜湯', en: 'Almond panna cotta Chè', phonetic: '[cɛ xuk ɓac]', note: '配龍眼與烤杏仁片' },
      { viet: 'Trà sữa trân châu', zh: '珍珠奶茶', en: 'Pearl bubble milk tea', phonetic: '[ca sɯə tən cəw]', note: '人氣手搖' },
      { viet: 'Nước cốt dừa', zh: '現煮濃郁椰漿', en: 'Coconut milk / cream', phonetic: '[nɯək kot zɯə]', note: '甜湯必淋' },
      { viet: 'Năm mươi phần trăm đường', zh: '半糖 (50% 糖)', en: '50% sugar level', phonetic: '[nam mɯəj fən cam dɯəŋ]', note: '甜度控制' },
      { viet: 'Ít đá / Không đá', zh: '少冰 / 去冰', en: 'Less ice / No ice', phonetic: '[it da / xoŋ da]', note: '冰量客製' }
    ],
    culturalTips: {
      titleZh: '越南 Chè (甜湯) 魅力與在地品嚐指南',
      titleEn: 'The Art of Vietnamese Chè Sweet Soups',
      tipsZh: [
        '百變 Chè：越南甜湯冷熱皆宜，有數十種配料（蓮子、芋頭、綠豆、龍眼、仙草、晶球凍），吃時盛入大碗碎冰攪拌。',
        '甜度提醒：傳統甜湯甜度偏高，可以主動請店家「Cho nhiều đá」(多給碎冰) 來平衡甜度。'
      ],
      tipsEn: [
        'Dozens of varieties: Chè features lotus seeds, mung bean, taro, grass jelly, and crushed ice.',
        'Crushed ice balancer: Ask for "Nhiều đá" (extra crushed ice) to balance the rich sweetness.'
      ],
      proTipZh: '✨ 經典老店常有「Chè thập cẩm」(綜合大滿貫甜湯)，一次吃到全部精華配料！',
      proTipEn: '✨ Pro Tip: Order "Chè thập cẩm" for an all-in-one sampler bowl!'
    }
  },

  // 6. 國際機場出入境與海關
  {
    id: 'airport',
    category: 'travel',
    tagZh: '出國通關',
    tagEn: 'Airport & Customs',
    icon: '✈️',
    titleZh: '國際機場辦理登機、過海關與托運行李',
    titleEn: 'International Airport Check-in, Baggage & Immigration',
    titleVi: 'Thủ Tục Tại Sân Bay Quốc Tế',
    summaryZh: '機場報到 (Check-in)、托運行李 (Gửi hành lý)、海關護照查驗 (Kiểm tra hộ chiếu)、換匯與買 4G 網卡。',
    summaryEn: 'Airport check-in, luggage drop, passport control, money exchange, and buying local 4G SIM card.',
    dialogues: [
      {
        speaker: 'Nhân viên hàng không (地勤)',
        role: 'npc',
        viet: 'Xin chào quý khách. Xin vui lòng cho tôi xem hộ chiếu và vé máy bay.',
        zh: '您好貴賓。請出示您的護照與機票。',
        en: 'Hello. Please show me your passport and flight ticket.',
        northTip: '護照越語為「Hộ chiếu」，機票為「Vé máy bay」。',
        southTip: '地勤服務態度禮貌標準。'
      },
      {
        speaker: 'Hành khách (乘客)',
        role: 'learner',
        viet: 'Dạ, hộ chiếu của tôi đây ạ. Tôi muốn gửi hai kiện hành lý.',
        zh: '好的，這是我的護照。我想托運兩件行李。',
        en: 'Here is my passport. I would like to check in two pieces of luggage.',
        northTip: '托運行李說「Gửi hành lý」或「Ký gửi hành lý」。',
        southTip: '件數量詞用「kiện」或「vali」。'
      },
      {
        speaker: 'Nhân viên hàng không (地勤)',
        role: 'npc',
        viet: 'Quý khách muốn ngồi ghế gần cửa sổ hay lối đi ạ?',
        zh: '您希望坐靠窗還是靠走道的座位呢？',
        en: 'Would you prefer a window seat or an aisle seat?',
        northTip: '靠窗：Gần cửa sổ；靠走道：Gần lối đi。',
        southTip: '選位常見對話。'
      },
      {
        speaker: 'Hành khách (乘客)',
        role: 'learner',
        viet: 'Cho tôi ghế gần lối đi nhé. Cửa ra máy bay số mấy vậy bạn?',
        zh: '給我靠走道的座位。請問登機門是幾號呢？',
        en: 'Aisle seat please. Which boarding gate is it?',
        northTip: '登機門越語叫「Cửa ra máy bay」或「Cổng lên máy bay」。',
        southTip: '號碼用「Số mấy」(幾號)。'
      },
      {
        speaker: 'Hành khách (乘客)',
        role: 'learner',
        viet: 'Cho tôi hỏi quầy đổi tiền và mua SIM 4G ở đâu vậy ạ?',
        zh: '請問換錢櫃台和買 4G SIM 卡的地方在哪裡呢？',
        en: 'Excuse me, where are the currency exchange counter and 4G SIM shop?',
        northTip: '換錢：Đổi tiền；SIM 卡：SIM 4G / Thẻ SIM。',
        southTip: '出境大廳外有許多換匯店與電信商 (Viettel, Vinaphone, Mobifone)。'
      }
    ],
    rolePlay: {
      userRoleZh: '旅客 (Hành khách)',
      userRoleEn: 'Passenger (Hành khách)',
      partnerRoleZh: '機場地勤人員 (Nhân viên hàng không)',
      partnerRoleEn: 'Airline Staff (Nhân viên hàng không)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Xin chào, quý khách bay chuyến đi Đài Bắc đúng không ạ? Cho em xin hộ chiếu.',
          partnerPromptZh: '您好，您是搭乘飛往台北的班機對嗎？請給我護照。',
          partnerPromptEn: 'Hello, flying to Taipei? May I have your passport?',
          userOptions: [
            {
              id: 'air_opt1',
              textVi: 'Dạ vâng, hộ chiếu của tôi đây. Tôi có một kiện hành lý ký gửi.',
              textZh: '是的，護照在這裡。我有一件托運行李。',
              textEn: 'Yes, here is my passport. I have one checked bag.',
              isCorrect: true,
              feedbackZh: '順暢自然！標準通關回答。',
              feedbackEn: 'Fluent and standard check-in response.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Hộ chiếu', zh: '護照', en: 'Passport', phonetic: '[ho ciw]', note: '出入境必備證件' },
      { viet: 'Vé máy bay', zh: '機票 / 登機證', en: 'Flight ticket / Boarding pass', phonetic: '[vɛ maːj ɓaːj]', note: '搭機憑證' },
      { viet: 'Hành lý ký gửi', zh: '托運行李', en: 'Checked luggage', phonetic: '[haɲ li ki ɣɯj]', note: '大件行李送托運' },
      { viet: 'Hành lý xách tay', zh: '手提隨身行李', en: 'Carry-on baggage', phonetic: '[haɲ li sac taːj]', note: '隨身上機' },
      { viet: 'Ghế gần cửa sổ', zh: '靠窗座位', en: 'Window seat', phonetic: '[ɣe ɣən kɯə so]', note: '觀景選位' },
      { viet: 'Ghế gần lối đi', zh: '靠走道座位', en: 'Aisle seat', phonetic: '[ɣe ɣən loj di]', note: '進出方便選位' },
      { viet: 'Cửa ra máy bay', zh: '登機門 / 登機閘口', en: 'Boarding gate', phonetic: '[kɯə za maːj ɓaːj]', note: '登機口' },
      { viet: 'Đổi tiền & Mua SIM', zh: '換外幣與買電話網卡', en: 'Exchange money & Buy SIM', phonetic: '[doj tiən va muə sim]', note: '抵達機場首要事項' }
    ],
    culturalTips: {
      titleZh: '越南兩大國際機場（河內內排 & 胡志明新山一）實戰錦囊',
      titleEn: 'Hanoi (HAN) & HCMC (SGN) Airport Guide',
      tipsZh: [
        '過海關護照查驗：準備好護照、簽證批文 (E-visa / Công văn)，海關若有詢問通常是「Ở Việt Nam mấy ngày?」(在越南停留幾天) 或「Đi du lịch hay công tác?」(旅遊還是出差)。',
        '買 SIM 卡推薦：越南三大電信為 Viettel (覆蓋最廣訊號最好)、Vinaphone 和 Mobifone。機場出關大廳一整排櫃台皆可現場開卡安裝。'
      ],
      tipsEn: [
        'Immigration: Have your passport and E-visa ready. Common questions: "How many days in Vietnam?" or "Tourism or business?".',
        'SIM Cards: Top 3 carriers are Viettel (best coverage), Vinaphone, and Mobifone. Available at arrival hall.'
      ],
      proTipZh: '✨ 避坑：出機場切勿搭乘拉客的黑牌野雞車，請到指定叫車區使用 Grab App 或搭乘 Vinasun (白綠色) / Mai Linh (全綠色) 正規跳錶計程車！',
      proTipEn: '✨ Pro Tip: Avoid unlicensed taxi touts; use the Grab app or stick to reputable Vinasun or Mai Linh metered cabs!'
    }
  },

  // 7. 飯店旅館入住與退房
  {
    id: 'hotel',
    category: 'travel',
    tagZh: '住宿無憂',
    tagEn: 'Hotel & Stay',
    icon: '🏨',
    titleZh: '飯店櫃台辦理入住 (Check-in)、退房與客房需求',
    titleEn: 'Hotel Check-in, Room Requests & Check-out',
    titleVi: 'Nhận Phòng & Trả Phòng Khách Sạn',
    summaryZh: '預訂登記、確認房型、詢問 WiFi 密碼、索取備品毛巾、寄放行李 (Gửi hành lý) 與退房結算。',
    summaryEn: 'Hotel check-in, Wi-Fi password inquiry, extra towels/blanket request, luggage storage, and check-out.',
    dialogues: [
      {
        speaker: 'Lễ tân (櫃台接待)',
        role: 'npc',
        viet: 'Xin chào quý khách! Em có thể giúp gì cho anh ạ?',
        zh: '您好貴賓！有什麼我可以為您服務的嗎？',
        en: 'Hello! How may I assist you today, sir?',
        northTip: '飯店櫃台叫「Lễ tân」。',
        southTip: '五星級與商務飯店服務用語十分客氣規範。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Tôi đã đặt phòng trước trên mạng. Tên tôi là Chen.',
        zh: '我之前在網路上訂了房間。我的名字是 Chen。',
        en: 'I booked a room online in advance. My name is Chen.',
        northTip: '預訂房間說「Đặt phòng trước」。',
        southTip: '在網路上訂說「trên mạng / online」。'
      },
      {
        speaker: 'Lễ tân (櫃台接待)',
        role: 'npc',
        viet: 'Dạ, em đã tìm thấy thông tin. Phòng của anh là phòng 802 ở tầng 8 ạ. Đây là chìa khóa phòng.',
        zh: '好的，我找到您的預訂資訊了。您的房間是 8 樓的 802 號房。這是房卡鑰匙。',
        en: 'Yes, I found your booking. Your room is 802 on the 8th floor. Here is your key card.',
        northTip: '房卡鑰匙說「Chìa khóa phòng / Thẻ phòng」。',
        southTip: '樓層用「Tầng」(如 Tầng 8 = 8樓)。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Mật khẩu Wi-Fi là gì vậy em? Mấy giờ phục vụ bữa sáng?',
        zh: '請問 Wi-Fi 密碼是什麼呢？早餐幾點開始供應？',
        en: 'What is the Wi-Fi password? What time is breakfast served?',
        northTip: '密碼越語是「Mật khẩu」。',
        southTip: '早餐說「Bữa sáng / Ăn sáng」。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Ngày mai tôi trả phòng lúc 12 giờ. Tôi có thể gửi hành lý ở đây không?',
        zh: '明天我 12 點退房。我可以把行李寄放在這裡嗎？',
        en: 'I will check out at 12 PM tomorrow. Can I store my luggage here?',
        northTip: '退房說「Trả phòng」或「Check-out」。',
        southTip: '寄放行李說「Gửi hành lý」。'
      }
    ],
    rolePlay: {
      userRoleZh: '房客 (Khách đặt phòng)',
      userRoleEn: 'Guest (Khách)',
      partnerRoleZh: '飯店前台人員 (Lễ tân)',
      partnerRoleEn: 'Receptionist (Lễ tân)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ xin chào anh, anh đến nhận phòng (check-in) phải không ạ?',
          partnerPromptZh: '您好，您是要辦理入住登記對嗎？',
          partnerPromptEn: 'Hello, are you checking in?',
          userOptions: [
            {
              id: 'ht_opt1',
              textVi: 'Vâng, tôi đã đặt phòng tên Chen. Cho tôi hỏi mật khẩu Wi-Fi nhé.',
              textZh: '是的，我訂了房名字叫 Chen。順便請問 Wi-Fi 密碼是什麼。',
              textEn: 'Yes, I booked under Chen. What is the Wi-Fi password?',
              isCorrect: true,
              feedbackZh: '非常流暢且得體！',
              feedbackEn: 'Polite and efficient check-in response.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Đặt phòng', zh: '預訂房間', en: 'Book a room', phonetic: '[dat fəwŋ]', note: '訂房動詞' },
      { viet: 'Nhận phòng (Check-in)', zh: '辦理入住', en: 'Check in', phonetic: '[ɲan fəwŋ]', note: '領取房卡' },
      { viet: 'Trả phòng (Check-out)', zh: '退房手續', en: 'Check out', phonetic: '[ca fəwŋ]', note: '結帳交還鑰匙' },
      { viet: 'Mật khẩu Wi-Fi', zh: 'WiFi 無線上網密碼', en: 'Wi-Fi password', phonetic: '[mat xəw waːj faːj]', note: '必問資訊' },
      { viet: 'Bữa sáng miễn phí', zh: '免費早餐', en: 'Complimentary breakfast', phonetic: '[ɓɯə saːŋ miən fi]', note: '含早確認' },
      { viet: 'Gửi hành lý', zh: '寄放行李', en: 'Store luggage', phonetic: '[ɣɯj haɲ li]', note: '退房後暫存' },
      { viet: 'Khăn tắm và chăn', zh: '大浴巾與毛毯被子', en: 'Towels and blanket', phonetic: '[xan tam va can]', note: '客房補充備品' }
    ],
    culturalTips: {
      titleZh: '越南飯店入住實用須知',
      titleEn: 'Hotel Stay Etiquette & Practices in Vietnam',
      tipsZh: [
        '證件押存：依照越南法規，飯店辦理 Check-in 時需要影印或暫時保管房客護照正本以向當地公安報備住宿，多數正規飯店影印後便會歸還。',
        '小費禮儀：門房提行李或每日客房清潔，可給予 20,000 - 50,000 VND 小費放在床頭或當面給予以示感謝。'
      ],
      tipsEn: [
        'Passport registration: By law, hotels photocopy passports for local registry. Most modern hotels return it immediately after scanning.',
        'Tipping: 20,000 to 50,000 VND is appreciated for bellhops or housekeeping on the pillow.'
      ],
      proTipZh: '✨ 若房間冷氣不冷，可說「Điều hòa phòng này không mát」(這間冷氣不冷)，前台會立即派工維修或換房。',
      proTipEn: '✨ Pro Tip: Say "Điều hòa không mát" if the AC is weak!'
    }
  },

  // 8. 叫車搭乘計程車與指路
  {
    id: 'taxi',
    category: 'travel',
    tagZh: '搭車必通',
    tagEn: 'Taxi & Grab',
    icon: '🚕',
    titleZh: 'Grab 叫車確認、指示司機左轉右轉與靠邊停',
    titleEn: 'Grab Ride Confirmation, Directions & Stopping',
    titleVi: 'Đi Xe Grab & Chỉ Đường Cho Bác Tài',
    summaryZh: '核對車牌、上車確認目的地、開強冷氣、指引「左轉、右轉、直走、前面路口靠邊停」。',
    summaryEn: 'Confirm license plate, destination, turn left/right, go straight, and pull over at the intersection.',
    dialogues: [
      {
        speaker: 'Tài xế (司機)',
        role: 'npc',
        viet: 'Alo anh ơi, em đến trước cổng rồi nhé. Xe em màu trắng biển số 51F-123.45.',
        zh: '喂哥，我已經到大門口前了喔。我的車是白色、車牌 51F-123.45。',
        en: 'Hello sir, I arrived in front of the gate. White car, license plate 51F-123.45.',
        northTip: 'Grab 司機常先電話確認位置。',
        southTip: '司機大哥自稱 Em，稱客人 Anh/Chị。'
      },
      {
        speaker: 'Khách (乘客)',
        role: 'learner',
        viet: 'Dạ, tôi thấy xe rồi, tôi đang đi ra đây.',
        zh: '好的，我看到車了，我現在走出去。',
        en: 'Yes, I see the car, I am walking out now.',
        northTip: '車子是「Xe」，看到說「thấy xe rồi」。',
        southTip: '走出門說「đi ra đây」。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Bác tài ơi, làm ơn bật điều hòa mát hơn một chút nhé.',
        zh: '司機大哥，請幫忙把冷氣開涼一點喔。',
        en: 'Driver, please turn up the air conditioner a bit cooler.',
        northTip: '冷氣北越叫「Điều hòa」，南越叫「Máy lạnh」。',
        southTip: '開冷氣說「Bật máy lạnh」。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Đến ngã tư phía trước thì rẽ phải, sau đó đi thẳng khoảng hai trăm mét.',
        zh: '到前面的十字路口請右轉，然後直走大約兩百公尺。',
        en: 'Turn right at the intersection ahead, then go straight for about 200 meters.',
        northTip: '十字路口：Ngã tư；右轉：Rẽ phải；直走：Đi thẳng。',
        southTip: '左轉：Rẽ trái (南越常說 Quẹo trái / Quẹo phải)。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Bác cho tôi dừng ở đây nhé! Không cần thối tiền lại đâu ạ.',
        zh: '大哥請讓我在這裡下車（停在這裡）！不用找零錢了。',
        en: 'Please let me stop here! Keep the change.',
        northTip: '找零錢北越說「Trả lại tiền thừa」，南越說「Thối tiền」。',
        southTip: '下車停靠說「Dừng ở đây / Cho tôi xuống đây」。'
      }
    ],
    rolePlay: {
      userRoleZh: '乘客 (Khách đi xe)',
      userRoleEn: 'Passenger (Khách)',
      partnerRoleZh: '計程車司機 (Bác tài)',
      partnerRoleEn: 'Driver (Bác tài)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào anh, anh đến chợ Bến Thành đúng không ạ? Đi đường nào nhanh anh?',
          partnerPromptZh: '您好，您是要去檳城市場對嗎？走哪條路比較快呢？',
          partnerPromptEn: 'Heading to Ben Thanh market? Which route is faster?',
          userOptions: [
            {
              id: 'tx_opt1',
              textVi: 'Cứ đi theo bản đồ Grab nhé. Đến ngã tư thì rẽ phải.',
              textZh: '照著 Grab 地圖走就行。到十字路口請右轉。',
              textEn: 'Follow the Grab map. Turn right at the intersection.',
              isCorrect: true,
              feedbackZh: '回答非常清晰專業！',
              feedbackEn: 'Clear, confident navigation direction!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Đến nơi rồi anh ơi! Hết bảy mươi nghìn đồng ạ.',
          partnerPromptZh: '到了哥！總共是七萬越南盾。',
          partnerPromptEn: 'Arrived! Total is 70,000 VND.',
          userOptions: [
            {
              id: 'tx_opt2',
              textVi: 'Gửi bác một trăm nghìn, không cần thối lại đâu ạ.',
              textZh: '給您十萬盾，不用找錢了。',
              textEn: 'Here is 100k VND, keep the change please.',
              isCorrect: true,
              feedbackZh: '親切大方的小費表達！',
              feedbackEn: 'Generous and friendly tipping phrase!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bác tài / Tài xế', zh: '司機大哥 / 駕駛員', en: 'Driver', phonetic: '[ɓak taːj]', note: '尊稱男性司機' },
      { viet: 'Biển số xe', zh: '車牌號碼', en: 'License plate', phonetic: '[ɓiən so sɛ]', note: '叫車核對車輛' },
      { viet: 'Rẽ trái / Quẹo trái', zh: '左轉', en: 'Turn left', phonetic: '[zɛ caːj / wɛw caːj]', note: '北越 Rẽ trái, 南越 Quẹo trái' },
      { viet: 'Rẽ phải / Quẹo phải', zh: '右轉', en: 'Turn right', phonetic: '[zɛ faːj / wɛw faːj]', note: '北越 Rẽ phải, 南越 Quẹo phải' },
      { viet: 'Đi thẳng', zh: '直走 / 往前開', en: 'Go straight', phonetic: '[di tʰaŋ]', note: '保持直線行駛' },
      { viet: 'Ngã tư / Ngã ba', zh: '十字路口 / 三叉路口', en: 'Intersection / T-junction', phonetic: '[ŋa tɯ / ŋa ɓa]', note: '路口地標' },
      { viet: 'Bật máy lạnh / Điều hòa', zh: '開冷氣空調', en: 'Turn on air conditioning', phonetic: '[ɓat maːj laɲ]', note: '車內降溫' },
      { viet: 'Dừng ở đây / Cho tôi xuống', zh: '停在這裡 / 讓我下車', en: 'Stop here / Let me get off', phonetic: '[zɯŋ əː dəj]', note: '到站下車' }
    ],
    culturalTips: {
      titleZh: '越南交通搭車秘笈與防坑指南',
      titleEn: 'Transport & Taxi Tips in Vietnam',
      tipsZh: [
        '首選 Grab App：在越南搭車強烈推薦下載 Grab，可綁定信用卡、路線透明、價格固定，不怕繞路或亂喊價。',
        '路邊攔車指名大品牌：若在路邊攔計程車，請認明「Vinasun (電話 38.27.27.27)」或「Mai Linh (全綠色車身，電話 38.38.38.38)」，並確認司機有按跳錶 (Bật đồng hồ)。'
      ],
      tipsEn: [
        'Use Grab App: Safe, fixed pricing, credit card payment, and GPS route tracking.',
        'Trusted metered taxis: Look exclusively for Vinasun (white/green) and Mai Linh (all green). Ensure the meter is turned on.'
      ],
      proTipZh: '✨ 叫機車 GrabBike (Xe ôm công nghệ) 既便宜又能在塞車時穿梭大街小巷，上車前請戴好司機提供的安全帽！',
      proTipEn: '✨ Pro Tip: GrabBike is ultra fast through traffic jams; buckle the helmet properly!'
    }
  },

  // 9. 傳統市場與夜市殺價
  {
    id: 'market',
    category: 'daily',
    tagZh: '市場殺價',
    tagEn: 'Market Bargaining',
    icon: '🛒',
    titleZh: '傳統市場與觀光夜市挑選水果、問價與殺價',
    titleEn: 'Shopping & Bargaining at Traditional & Night Markets',
    titleVi: 'Đi Chợ Mua Sắm & Mặc Cả Trái Cây',
    summaryZh: '買山竹榴槤、問多少錢一公斤 (Bao nhiêu một ký)、殺價算便宜 (Bớt chút đi) 與確認找零。',
    summaryEn: 'Buying mangosteen & durian, asking price per kilo, bargaining politely, and checking change.',
    dialogues: [
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Chị ơi, măng cụt này bao nhiêu tiền một ký vậy chị?',
        zh: '大姐，這山竹一公斤多少錢呀？',
        en: 'Sister, how much is this mangosteen per kilogram?',
        northTip: '公斤北越多用「Cân / Kg」，南越一律用「Ký」。',
        southTip: '山竹：Măng cụt；榴槤：Sầu riêng；芒果：Xoài。'
      },
      {
        speaker: 'Người bán (攤販大姐)',
        role: 'npc',
        viet: 'Tám mươi nghìn một ký em ơi. Măng cụt vườn ngọt lịm, bao ngon luôn!',
        zh: '八萬盾一公斤喔。自家果園的山竹超甜，保證好吃！',
        en: 'Eighty thousand VND per kilo. Sweet orchard mangosteen, guaranteed delicious!',
        northTip: '80,000 VND 約台幣 100 元。',
        southTip: '「Bao ngon」= 保證好吃保證甜。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Đắt quá chị ơi! Em mua hai ký, bớt cho em sáu mươi nghìn một ký được không?',
        zh: '太貴了大姐！我買兩公斤，算我一公斤六萬盾可以嗎？',
        en: 'Too expensive sister! I will buy 2 kilos, can you discount to 60k VND per kilo?',
        northTip: '「Đắt quá」= 太貴了（北越南越通用，南越亦可用 Mắc quá）。',
        southTip: '「Bớt cho em」= 算我便宜點。'
      },
      {
        speaker: 'Người bán (攤販大姐)',
        role: 'npc',
        viet: 'Thôi mở hàng cho em, lấy em bảy mươi nghìn một ký nhé! Cân cho em hai ký.',
        zh: '好吧討個開市好彩頭，算你一公斤七萬盾！幫你稱兩公斤。',
        en: 'Alright, for good morning luck, 70k VND per kilo! Let me weigh 2 kilos for you.',
        northTip: '「Mở hàng」= 討開市/早市開張好彩頭。',
        southTip: '各退一步成交。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Dạ cảm ơn chị. Gửi chị một trăm bốn mươi nghìn nhé.',
        zh: '好的謝謝大姐。給您十四萬盾喔。',
        en: 'Thank you sister. Here is 140,000 VND.',
        northTip: '140,000 = Một trăm bốn mươi nghìn.',
        southTip: '結帳完成愉快購物。'
      }
    ],
    rolePlay: {
      userRoleZh: '買水果客人 (Khách mua hàng)',
      userRoleEn: 'Shopper (Khách)',
      partnerRoleZh: '市場水果攤大姐 (Chị bán trái cây)',
      partnerRoleEn: 'Fruit Vendor (Chị bán trái cây)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Sầu riêng Ri6 thơm nức mũi em ơi, một trăm hai mươi nghìn một ký!',
          partnerPromptZh: '金枕頭 Ri6 榴槤香氣撲鼻喔，一公斤十二萬盾！',
          partnerPromptEn: 'Fragrant Ri6 durian, 120,000 VND per kilo!',
          userOptions: [
            {
              id: 'mkt_opt1',
              textVi: 'Chị ơi đắt quá, bớt cho em một trăm nghìn một ký được không? Em lấy nguyên quả.',
              textZh: '太貴了大姐，算我一公斤十萬可以嗎？我買一整顆。',
              textEn: 'Too expensive, can you do 100k/kilo? I will buy the whole fruit.',
              isCorrect: true,
              feedbackZh: '殺價非常在地有禮，切中要害！',
              feedbackEn: 'Polite, persuasive market bargaining tactic!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bao nhiêu tiền một ký?', zh: '一公斤多少錢？', en: 'How much per kilo?', phonetic: '[ɓaːw ɲiəw tiən mot ki]', note: '市場問價核心句型' },
      { viet: 'Đắt quá / Mắc quá', zh: '太貴了！', en: 'Too expensive!', phonetic: '[dat kwa / mak kwa]', note: '殺價起手式' },
      { viet: 'Bớt chút đi / Giảm giá đi', zh: '算便宜一點啦 / 打個折吧', en: 'Discount a bit please', phonetic: '[ɓəːt cut di]', note: '懇請優惠' },
      { viet: 'Măng cụt', zh: '山竹 (果后)', en: 'Mangosteen', phonetic: '[maŋ kut]', note: '熱帶水果必嚐' },
      { viet: 'Sầu riêng', zh: '榴槤 (果王)', en: 'Durian', phonetic: '[səw ziəŋ]', note: '香濃軟糯' },
      { viet: 'Xoài cát Hòa Lộc', zh: '和祿金沙芒果', en: 'Hoa Loc Mango', phonetic: '[swaːj kaːt]', note: '越南頂級甜芒' },
      { viet: 'Thanh long', zh: '火龍果', en: 'Dragon fruit', phonetic: '[tʰaɲ ləwŋ]', note: '平南盛產' },
      { viet: 'Cân / Ký', zh: '公斤 (kg)', en: 'Kilogram', phonetic: '[kən / ki]', note: '重量單位' }
    ],
    culturalTips: {
      titleZh: '越南市場殺價的黃金法則',
      titleEn: 'Golden Rules of Market Bargaining in Vietnam',
      tipsZh: [
        '早市忌大砍價：越南傳統攤販非常重視「Mở hàng」(早晨第一筆開市生意)，如果清晨去買，請盡量不要過度大殺價，以免攤販覺得影響全日財運。',
        '微笑殺價：殺價時保持微笑與親切稱呼（Chị ơi, Cô ơi），通常能拿到 10% 到 20% 的折扣。'
      ],
      tipsEn: [
        'Respect early morning "Mở hàng": Vendors believe the first sale sets the tone for the entire day. Avoid hard bargaining early in the morning.',
        'Bargain with smiles: Friendly smiles and kinship terms ("Chị ơi") yield 10–20% discounts easily.'
      ],
      proTipZh: '✨ 夜市買衣服紀念品，開價通常偏高，可從開價的 6-7 折開始禮貌出價協商！',
      proTipEn: '✨ Pro Tip: At tourist night markets (like Ben Thanh), polite counter-offers at 60-70% of opening price are standard.'
    }
  },

  // 10. 便利商店與超市採購
  {
    id: 'convenience',
    category: 'daily',
    tagZh: '超商採購',
    tagEn: 'Convenience Store',
    icon: '🏪',
    titleZh: '便利商店買零食泡麵、微波加熱與要塑膠袋',
    titleEn: 'Convenience Store (Circle K / WinMart) Snacks & Microwave',
    titleVi: 'Mua Sắm Tại Cửa Hàng Tiện Lợi (Circle K / 7-Eleven)',
    summaryZh: '買越南泡麵飲料、要求加熱熟食 (Hâm nóng)、要塑膠袋 (Túi nilon) 與信用卡/現金結帳。',
    summaryEn: 'Buy instant noodles & snacks, request microwaving, ask for plastic bag, and pay by card/cash.',
    dialogues: [
      {
        speaker: 'Thu ngân (收銀員)',
        role: 'npc',
        viet: 'Xin chào anh! Anh có thẻ thành viên không ạ?',
        zh: '您好！請問有會員卡嗎？',
        en: 'Hello sir! Do you have a membership card?',
        northTip: '收銀員叫「Thu ngân」。',
        southTip: '連鎖超商（Circle K, GS25, WinMart, FamilyMart）遍布市區。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Anh không có. Nhờ em hâm nóng hộp cơm này giúp anh nhé.',
        zh: '我沒有會員卡。請幫忙微波加熱這個便當盒喔。',
        en: 'I do not have one. Please microwave this meal box for me.',
        northTip: '微波加熱說「Hâm nóng」或「Quay lò vi sóng」。',
        southTip: '便當盒說「Hộp cơm」。'
      },
      {
        speaker: 'Thu ngân (收銀員)',
        role: 'npc',
        viet: 'Dạ được ạ. Anh có lấy túi nilon và muỗng đũa không?',
        zh: '好的。請問需要塑膠袋和湯匙筷子嗎？',
        en: 'Sure. Would you like a plastic bag and spoon/chopsticks?',
        northTip: '塑膠袋：Túi nilon / Túi bóng；湯匙：Muỗng / Thìa。',
        southTip: '筷子：Đũa。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho anh lấy một túi nilon và hai cái muỗng nhé. Anh thanh toán bằng thẻ.',
        zh: '給我一個塑膠袋和兩支湯匙。我用信用卡付款。',
        en: 'Give me one plastic bag and two spoons please. I will pay by card.',
        northTip: '刷卡說「Thanh toán bằng thẻ」。',
        southTip: '感應刷卡在連鎖超商非常普及。'
      }
    ],
    rolePlay: {
      userRoleZh: '顧客 (Khách mua hàng)',
      userRoleEn: 'Customer (Khách)',
      partnerRoleZh: '超商收銀員 (Thu ngân)',
      partnerRoleEn: 'Cashier (Thu ngân)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ tổng cộng sáu mươi lăm nghìn. Anh thanh toán tiền mặt hay chuyển khoản ạ?',
          partnerPromptZh: '總共六萬五千盾。請問付現金還是轉帳/刷卡？',
          partnerPromptEn: 'Total is 65,000 VND. Cash, transfer or card?',
          userOptions: [
            {
              id: 'cv_opt1',
              textVi: 'Cho anh quẹt thẻ nhé, và cho anh xin hóa đơn.',
              textZh: '幫我刷卡，並請給我發票收據。',
              textEn: 'I will tap my card, and please give me the receipt.',
              isCorrect: true,
              feedbackZh: '完美無缺的超商結帳對話！',
              feedbackEn: 'Seamless convenience store payment phrasing!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Hâm nóng đồ ăn', zh: '微波加熱食物', en: 'Microwave / Reheat food', phonetic: '[həm nəwŋ do aːn]', note: '超商熟食加熱' },
      { viet: 'Túi nilon / Túi bóng', zh: '塑膠提袋', en: 'Plastic shopping bag', phonetic: '[twij ni ləwŋ]', note: '購物袋' },
      { viet: 'Muỗng và đũa', zh: '湯匙與筷子', en: 'Spoon and chopsticks', phonetic: '[mwoŋ va dwo]', note: '即食餐具' },
      { viet: 'Mì gói / Mì tôm', zh: '泡麵 / 蝦味泡麵', en: 'Instant noodles', phonetic: '[mi ɣɔj / mi tom]', note: 'Hảo Hảo 泡麵超人氣' },
      { viet: 'Nước suối', zh: '礦泉水 / 瓶裝水', en: 'Bottled mineral water', phonetic: '[nɯək swoj]', note: '外出必買' },
      { viet: 'Hóa đơn', zh: '收據發票', en: 'Receipt / Invoice', phonetic: '[hwa dən]', note: '購物明細' }
    ],
    culturalTips: {
      titleZh: '越南便利商店特色與推薦伴手禮',
      titleEn: 'Vietnam Convenience Store Gems & Souvenirs',
      tipsZh: [
        '泡麵之王：必買粉紅色包裝的「Hảo Hảo Mì tôm chua cay」(酸辣蝦麵) 和「Phở Vifon」(即食河粉包)。',
        '24 小時冷氣休憩：越南的 Circle K 和 GS25 二樓多設有冷氣座位區、免費 Wi-Fi 與充電插座，是旅人歇腳的好去處。'
      ],
      tipsEn: [
        'Instant noodle king: Try the iconic pink "Hảo Hảo" sour & spicy shrimp noodles!',
        '24/7 rest stops: Circle K and GS25 typically feature upstairs AC seating areas with free Wi-Fi and power outlets.'
      ],
      proTipZh: '✨ 越南超商的零嘴腰果 (Hạt điều) 與椰子糖 (Kẹo dừa) 價格親民且品質極佳！',
      proTipEn: '✨ Pro Tip: Cashews (Hạt điều) sold in convenience stores make great affordable souvenirs.'
    }
  },

  // 11. 藥局買藥與症狀求助
  {
    id: 'pharmacy',
    category: 'health',
    tagZh: '藥局求助',
    tagEn: 'Pharmacy & Symptoms',
    icon: '💊',
    titleZh: '藥局買藥、描述感冒發燒、拉肚子與用藥頻率',
    titleEn: 'Pharmacy Visit: Cold, Fever, Diarrhea & Dosage Directions',
    titleVi: 'Mua Thuốc Tại Hiệu Thuốc Tây',
    summaryZh: '向藥師描述發燒 (Sốt)、頭痛 (Đau đầu)、拉肚子 (Đau bụng / Tiêu chảy) 及詢問一日吃幾次 (Ngày uống mấy lần)。',
    summaryEn: 'Describe fever (Sốt), headache (Đau đầu), diarrhea (Tiêu chảy), and inquire daily dosage instructions.',
    dialogues: [
      {
        speaker: 'Dược sĩ (藥師)',
        role: 'npc',
        viet: 'Chào em! Em cảm thấy khó chịu ở đâu? Em cần mua thuốc gì?',
        zh: '你好！你哪裡感覺不舒服？需要買什麼藥呢？',
        en: 'Hello! What symptoms do you have? What medicine do you need?',
        northTip: '西藥房叫「Hiệu thuốc tây」或「Nhà thuốc」。',
        southTip: '連鎖藥妝店（Pharmacity, Long Châu）非常專業齊全。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Tôi bị đau đầu, sốt nhẹ và đau bụng đi ngoài từ sáng nay.',
        zh: '我從今天早上開始頭痛、輕微發燒，而且肚子痛拉肚子。',
        en: 'I have had a headache, mild fever, and diarrhea since this morning.',
        northTip: '發燒：Sốt；頭痛：Đau đầu；拉肚子：Đau bụng đi ngoài / Tiêu chảy。',
        southTip: '症狀描述精準有助於藥師配藥。'
      },
      {
        speaker: 'Dược sĩ (藥師)',
        role: 'npc',
        viet: 'Em có bị dị ứng với loại thuốc nào không? Để chị lấy thuốc hạ sốt và men tiêu hóa.',
        zh: '你對什麼藥物過敏嗎？我幫你拿退燒藥和腸胃益生菌消化藥。',
        en: 'Are you allergic to any medicines? Let me get fever reducers and digestive probiotics.',
        northTip: '過敏說「Dị ứng thuốc」。',
        southTip: '退燒藥：Thuốc hạ sốt。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Tôi không bị dị ứng. Thuốc này ngày uống mấy lần và uống trước hay sau khi ăn?',
        zh: '我沒有藥物過敏。這款藥一天吃幾次？在飯前吃還是飯後吃呢？',
        en: 'I have no allergies. How many times a day should I take this, before or after meals?',
        northTip: '一天吃幾次：Ngày uống mấy lần；飯前：Trước khi ăn；飯後：Sau khi ăn。',
        southTip: '問清醫囑十分關鍵。'
      },
      {
        speaker: 'Dược sĩ (藥師)',
        role: 'npc',
        viet: 'Mỗi ngày uống hai lần, mỗi lần một viên sau bữa ăn sáng và tối nhé.',
        zh: '每天吃兩次，每次早晚飯後各吃一顆喔。',
        en: 'Take twice a day, one pill each time after breakfast and dinner.',
        northTip: '顆/粒量詞用「viên」。',
        southTip: '「Sau bữa ăn」= 飯後。'
      }
    ],
    rolePlay: {
      userRoleZh: '求藥者 (Người mua thuốc)',
      userRoleEn: 'Patient / Customer (Khách)',
      partnerRoleZh: '藥劑師 (Dược sĩ)',
      partnerRoleEn: 'Pharmacist (Dược sĩ)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Dạ chào anh, anh bị đau ở đâu ạ?',
          partnerPromptZh: '您好，您哪裡痛或不舒服呢？',
          partnerPromptEn: 'Hello sir, where does it hurt?',
          userOptions: [
            {
              id: 'ph_opt1',
              textVi: 'Tôi bị đau họng và sốt cao, cho tôi thuốc hạ sốt và thuốc ngậm nhé.',
              textZh: '我喉嚨痛且發高燒，請給我退燒藥和喉糖喉片。',
              textEn: 'I have a sore throat and high fever. Give me fever reducers and lozenges please.',
              isCorrect: true,
              feedbackZh: '症狀描述極為精確！',
              feedbackEn: 'Accurate and direct symptom description!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Hiệu thuốc / Nhà thuốc', zh: '藥局 / 西藥房', en: 'Pharmacy / Drugstore', phonetic: '[hiəw tʰwok / ɲa tʰwok]', note: 'Long Châu, Pharmacity 為大品牌' },
      { viet: 'Sốt / Sốt cao', zh: '發燒 / 發高燒', en: 'Fever / High fever', phonetic: '[sot / sot kaːw]', note: '常見體溫異常' },
      { viet: 'Đau đầu / Đau họng', zh: '頭痛 / 喉嚨痛', en: 'Headache / Sore throat', phonetic: '[daw dəw / daw hoŋ]', note: '感冒常見症狀' },
      { viet: 'Đau bụng / Tiêu chảy', zh: '肚子痛 / 腹瀉拉肚子', en: 'Stomachache / Diarrhea', phonetic: '[daw ɓuŋ / tiəw caːj]', note: '水土不服必備' },
      { viet: 'Thuốc hạ sốt', zh: '退燒藥 (如 Panadol)', en: 'Fever reducer (Paracetamol)', phonetic: '[tʰwok ha sot]', note: '降溫常用' },
      { viet: 'Ngày uống mấy lần?', zh: '一天吃幾次藥？', en: 'How many times a day?', phonetic: '[ŋaːj uəŋ məj lən]', note: '詢問服藥頻率' },
      { viet: 'Trước khi ăn / Sau khi ăn', zh: '飯前吃 / 飯後吃', en: 'Before meals / After meals', phonetic: '[tɯək xi aːn / saw xi aːn]', note: '用藥時機' },
      { viet: 'Dị ứng thuốc', zh: '藥物過敏', en: 'Drug allergy', phonetic: '[zi ɯŋ tʰwok]', note: '過敏史告知' }
    ],
    culturalTips: {
      titleZh: '在越南藥局買藥必備常識',
      titleEn: 'Pharmacy Tips & Over-The-Counter Medicine in Vietnam',
      tipsZh: [
        '連鎖藥局最安心：各大城市有「Pharmacity」與「Nhà thuốc Long Châu」等大型現代連鎖藥局，價格透明標示，藥師多能以簡易英文或翻譯溝通。',
        '水土不服必備常備藥：熱帶國家容易因冰塊或飲食不適應引起腸胃不適，若拉肚子可購買「Smecta」(止瀉劑) 或「Men vi sinh」(益生菌)。'
      ],
      tipsEn: [
        'Modern chains: Long Châu and Pharmacity offer regulated, transparently priced medications across all major cities.',
        'Stomach relief: For traveler\'s diarrhea, ask for Smecta or probiotics (Men vi sinh).'
      ],
      proTipZh: '✨ 蚊蟲叮咬或中暑，可購買越南家喻戶曉的「Dầu gió xanh」(綠油精/青草油) 塗抹太陽穴！',
      proTipEn: '✨ Pro Tip: "Dầu gió xanh" (Green Medicated Oil) is the famous local cure for insect bites and headaches.'
    }
  },

  // 12. 診所醫院掛號就醫
  {
    id: 'hospital',
    category: 'health',
    tagZh: '醫院看診',
    tagEn: 'Hospital & Clinic',
    icon: '🏥',
    titleZh: '診所醫院掛號看診、量血壓與醫生問診',
    titleEn: 'Hospital Registration, Vital Signs & Doctor Consultation',
    titleVi: 'Đăng Ký Khám Bệnh Tại Bệnh Viện',
    summaryZh: '掛號 (Đăng ký khám)、量血壓體溫 (Đo huyết áp, nhiệt độ)、詳細向醫師陳述病情與領藥手續。',
    summaryEn: 'Hospital registration, measuring blood pressure & temp, consulting physician, and picking up prescription.',
    dialogues: [
      {
        speaker: 'Y tá (護理師)',
        role: 'npc',
        viet: 'Xin chào anh! Anh đến khám bệnh gì ạ? Xin cho tôi mượn hộ chiếu để làm thủ tục.',
        zh: '您好！請問您要看什麼科別/有什麼不適？請借我護照辦理掛號手續。',
        en: 'Hello sir! What symptoms are you here for? Please lend me your passport for registration.',
        northTip: '掛號手續說「Làm thủ tục đăng ký khám」。',
        southTip: '醫院護士稱呼「Y tá / Điều dưỡng」。'
      },
      {
        speaker: 'Bệnh nhân (病患)',
        role: 'learner',
        viet: 'Tôi bị ho nhiều, khó thở và tức ngực suốt hai ngày nay.',
        zh: '這兩天我咳嗽得很厲害、呼吸困難且胸口悶痛。',
        en: 'I have been coughing severely, having shortness of breath and chest tightness for two days.',
        northTip: '咳嗽：Ho；難以呼吸：Khó thở；胸口痛：Tức ngực。',
        southTip: '「Suốt hai ngày nay」= 連續這兩天。'
      },
      {
        speaker: 'Bác sĩ (醫師)',
        role: 'npc',
        viet: 'Anh ngồi xuống đây, để tôi đo huyết áp và nghe tim phổi nhé. Hít sâu vào nào.',
        zh: '請坐在這裡，讓我為您量血壓並聽診心肺。請深呼吸。',
        en: 'Please sit here. Let me measure your blood pressure and listen to your lungs. Breathe in deeply.',
        northTip: '量血壓：Đo huyết áp；深呼吸：Hít sâu vào。',
        southTip: '聽診器：Ống nghe。'
      },
      {
        speaker: 'Bác sĩ (醫師)',
        role: 'npc',
        viet: 'Phổi của anh bị viêm nhẹ. Tôi sẽ kê đơn thuốc kháng sinh và thuốc ho cho anh.',
        zh: '您的肺部有輕微發炎。我會為您開立抗生素和止咳藥物處方。',
        en: 'Your lungs have mild inflammation. I will prescribe antibiotics and cough syrup for you.',
        northTip: '開處方箋：Kê đơn thuốc；抗生素：Kháng sinh。',
        southTip: '醫囑叮嚀。'
      }
    ],
    rolePlay: {
      userRoleZh: '患者 (Bệnh nhân)',
      userRoleEn: 'Patient (Bệnh nhân)',
      partnerRoleZh: '看診醫師 (Bác sĩ)',
      partnerRoleEn: 'Doctor (Bác sĩ)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào anh, anh bị đau từ khi nào? Có sốt cao không?',
          partnerPromptZh: '您好，您從什麼時候開始痛的？有發高燒嗎？',
          partnerPromptEn: 'Hello, when did the pain start? Any high fever?',
          userOptions: [
            {
              id: 'hp_opt1',
              textVi: 'Tôi bị đau từ tối qua, đo nhiệt độ là ba mươi tám độ năm.',
              textZh: '我從昨晚開始痛，量體溫是 38.5 度。',
              textEn: 'It started last night, temperature measured at 38.5°C.',
              isCorrect: true,
              feedbackZh: '敘述條理分明，非常清晰！',
              feedbackEn: 'Clear, structured medical disclosure!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Bệnh viện / Phòng khám', zh: '醫院 / 診所', en: 'Hospital / Clinic', phonetic: '[ɓəɲ viən / fəwŋ xaːm]', note: '醫療院所' },
      { viet: 'Đăng ký khám', zh: '掛號就醫', en: 'Register / Check-in for doctor', phonetic: '[daŋ ki xaːm]', note: '前台登記' },
      { viet: 'Đo huyết áp & nhiệt độ', zh: '量血壓與體溫', en: 'Measure blood pressure & temp', phonetic: '[dɔ hwiət aːp]', note: '常規生理量測' },
      { viet: 'Đơn thuốc', zh: '處方箋 / 藥單', en: 'Prescription', phonetic: '[dən tʰwok]', note: '領藥依據' },
      { viet: 'Thuốc kháng sinh', zh: '抗生素', en: 'Antibiotics', phonetic: '[tʰwok xaːŋ siɲ]', note: '處方抗炎藥' },
      { viet: 'Viêm họng / Viêm phổi', zh: '咽喉炎 / 肺炎', en: 'Pharyngitis / Pneumonia', phonetic: '[viəm hoŋ / viəm foj]', note: '呼吸道病症' }
    ],
    culturalTips: {
      titleZh: '在越就醫與國際醫療保險',
      titleEn: 'Healthcare & International Hospitals in Vietnam',
      tipsZh: [
        '國際綜合醫院：在河內或胡志明市，若需要中文或英文醫療服務，可前往「Bệnh viện FV (FV Hospital)」、「Vinmec」或「Raffles Medical / Family Medical Practice」，服務標準高且可直接協助海外保險理賠。',
        '保留醫療單據：看診後務必索取醫生診斷證明書 (Giấy chẩn đoán) 與正式發票 (Hóa đơn đỏ) 以便回國申請健保及商業保險理賠。'
      ],
      tipsEn: [
        'International hospitals: For English/multilingual service, visit FV Hospital, Vinmec, or Family Medical Practice in Hanoi and HCMC.',
        'Keep documentation: Request the medical certificate (Giấy khám bệnh) and VAT invoice (Hóa đơn) for travel insurance claims.'
      ],
      proTipZh: '✨ 緊急救護車直撥專線為 115！',
      proTipEn: '✨ Pro Tip: Vietnam\'s national ambulance hotline is 115!'
    }
  },

  // 13. 越式洗頭按摩與 SPA
  {
    id: 'spa',
    category: 'daily',
    tagZh: '放鬆享受',
    tagEn: 'Herbal Spa & Massage',
    icon: '💈',
    titleZh: '越式洗頭 (Gội đầu dưỡng sinh)、肩頸按摩與力道調整',
    titleEn: 'Vietnamese Herbal Hair Wash (Gội Đầu Dưỡng Sinh) & Massage',
    titleVi: 'Gội Đầu Dưỡng Sinh & Massage Thư Giãn',
    summaryZh: '草本洗頭、掏耳 (Lấy ráy tai)、敷臉、調節按摩力道（力道大一點/小一點/剛剛好）。',
    summaryEn: 'Herbal hair spa, ear cleaning, facial mask, and massage pressure control (Stronger / Softer / Just right).',
    dialogues: [
      {
        speaker: 'Kỹ thuật viên (技師)',
        role: 'npc',
        viet: 'Dạ em chào anh! Hôm nay anh chọn gói gội đầu dưỡng sinh sáu mươi phút hay chín mươi phút ạ?',
        zh: '您好！今天想選 60 分鐘還是 90 分鐘的養生草本洗頭套餐呢？',
        en: 'Hello sir! Would you like the 60-min or 90-min herbal head spa package?',
        northTip: '養生草本洗頭在越南極度盛行，稱「Gội đầu dưỡng sinh」。',
        southTip: '套餐包含洗頭、頭皮刮痧、洗臉、按摩敷臉等全套服務。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Cho anh gói chín mươi phút, có bao gồm lấy ráy tai và mát-xa cổ vai gáy không em?',
        zh: '給我 90 分鐘套餐，有包含掏耳朵和肩頸按摩嗎？',
        en: 'Give me the 90-minute package. Does it include ear cleaning and neck/shoulder massage?',
        northTip: '掏耳朵說「Lấy ráy tai」。',
        southTip: '肩頸按摩說「Mát-xa cổ vai gáy」。'
      },
      {
        speaker: 'Kỹ thuật viên (技師)',
        role: 'npc',
        viet: 'Dạ có đầy đủ hết ạ. Nước ấm thế này đã vừa chưa anh? Lực mát-xa có đau không?',
        zh: '是的全部都有包含喔。這樣的水溫剛好嗎？按摩力道會痛嗎？',
        en: 'Yes, fully included. Is this water temperature comfortable? Is the massage pressure okay?',
        northTip: '水溫剛好：Nước vừa rồi；力道剛好：Lực vừa rồi。',
        southTip: '技師會細心確認水溫與力道。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Nước ấm rất dễ chịu. Em mát-xa lưng mạnh hơn một chút nhé, cổ thì làm nhẹ thôi.',
        zh: '溫水非常舒服。妳幫我後背按摩力道大一點點，脖子部分力道輕一點就好。',
        en: 'The warm water is very pleasant. Please massage my back a bit stronger, and keep the neck gentle.',
        northTip: '大力一點：Mạnh hơn một chút；輕一點：Nhẹ hơn / Nhẹ thôi。',
        southTip: '舒服：Rất dễ chịu / Rất thoải mái。'
      },
      {
        speaker: 'Khách (顧客)',
        role: 'learner',
        viet: 'Rất thoải mái! Cảm ơn em nhiều. Gửi em tiền tip nhé.',
        zh: '太舒服了！非常感謝妳。這是給妳的小費喔。',
        en: 'So relaxing! Thank you very much. Here is a tip for you.',
        northTip: '小費越語多用「Tiền tip」或「Tiền boa」。',
        southTip: '服務滿意時給予小費是常見禮節。'
      }
    ],
    rolePlay: {
      userRoleZh: '顧客 (Khách làm đẹp)',
      userRoleEn: 'Guest (Khách)',
      partnerRoleZh: 'SPA 美容技師 (Kỹ thuật viên)',
      partnerRoleEn: 'Spa Technician (Kỹ thuật viên)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Anh ơi, lực ấn huyệt thế này vừa chưa hay cần mạnh hơn ạ?',
          partnerPromptZh: '哥，這樣的指壓穴道力道剛好嗎？還是需要更大力一點？',
          partnerPromptEn: 'Sir, is the acupressure pressure just right or stronger?',
          userOptions: [
            {
              id: 'spa_opt1',
              textVi: 'Lực thế này vừa rồi em nhé, rất dễ chịu.',
              textZh: '這樣的力道剛剛好，非常舒服。',
              textEn: 'This pressure is just right, very comfortable.',
              isCorrect: true,
              feedbackZh: '完美表達舒適感受！',
              feedbackEn: 'Perfect response expressing satisfaction!'
            },
            {
              id: 'spa_opt2',
              textVi: 'Cho anh mạnh hơn một chút ở phần vai nhé.',
              textZh: '肩膀部分幫我再更用力一點點喔。',
              textEn: 'A bit stronger on the shoulders please.',
              isCorrect: true,
              feedbackZh: '清楚指示加重力道！',
              feedbackEn: 'Clear instruction for extra pressure!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Gội đầu dưỡng sinh', zh: '草本養生洗頭 (越式洗頭)', en: 'Herbal hair wash spa', phonetic: '[ɣoj dəw zɯəŋ siɲ]', note: '含頭皮經絡按摩' },
      { viet: 'Mát-xa cổ vai gáy', zh: '肩頸肩背放鬆按摩', en: 'Neck & shoulder massage', phonetic: '[mat sa ko vaːj ɣaj]', note: '上班族最愛' },
      { viet: 'Lấy ráy tai', zh: '專業掏耳朵 / 採耳', en: 'Ear cleaning', phonetic: '[ləj zaːj taːj]', note: '越式特色服務' },
      { viet: 'Mạnh hơn một chút', zh: '大力一點點 (加重力道)', en: 'A bit stronger pressure', phonetic: '[maɲ həːn mot cut]', note: '力道加強' },
      { viet: 'Nhẹ hơn / Nhẹ thôi', zh: '輕一點 (放輕力道)', en: 'Softer / More gentle', phonetic: '[ɲɛ həːn / ɲɛ tʰoj]', note: '怕痛必講' },
      { viet: 'Vừa rồi / Rất thoải mái', zh: '剛剛好 / 非常舒服', en: 'Just right / Very relaxing', phonetic: '[vɯə zoj / zat tʰwaːj maːj]', note: '滿意回饋' },
      { viet: 'Tiền tip / Tiền boa', zh: '服務小費', en: 'Gratuity / Tip', phonetic: '[tiən tip / tiən ɓwa]', note: '犒賞技師' }
    ],
    culturalTips: {
      titleZh: '越式洗頭與 SPA 享受全攻略',
      titleEn: 'Vietnamese Herbal Hair Wash & Spa Guide',
      tipsZh: [
        '全套極致放鬆：標準越式洗頭不單是洗髮，流程通常包括：草藥浸泡 (Bồ kết / 皂角湯)、頭皮放鬆、洗臉敷黃瓜面膜、手部按摩、肩頸指壓與吹整頭髮。',
        '小費行情：通常 60-90 分鐘療程，小費行情約 50,000 - 100,000 VND（部分知名連鎖店已將服務費包含在價目表內，可先確認）。'
      ],
      tipsEn: [
        'All-in-one head to toe: Beyond washing hair with traditional Bồ kết herbal water, it includes facial cleanse, face mask, ear candling, and neck massage.',
        'Tipping guide: 50,000 to 100,000 VND is typical for a 60–90 min session unless service fee is built-in.'
      ],
      proTipZh: '✨ 女士洗完有專業「Sấy tóc」(吹乾造型) 服務，男士很多理髮廳 (Tiệm cắt tóc) 也附設全套洗頭修容！',
      proTipEn: '✨ Pro Tip: Hair blow-dry styling (Sấy tóc) is always included!'
    }
  },

  // 14. 租屋看房與生活水電
  {
    id: 'rent',
    category: 'daily',
    tagZh: '居留租屋',
    tagEn: 'Apartment Rental',
    icon: '🏠',
    titleZh: '租屋看房詢問租金、押金、水電費與簽約',
    titleEn: 'Renting an Apartment: Rent, Deposit, Utilities & Lease',
    titleVi: 'Thuê Nhà & Ký Hợp Đồng Thuê Căn Hộ',
    summaryZh: '看房 (Xem phòng)、問月租金 (Tiền thuê mỗi tháng)、押金 (Tiền cọc)、電費一度多少錢 (Tiền điện theo số) 與家電設備。',
    summaryEn: 'Apartment viewing, monthly rent, security deposit, electricity rate per kWh, and lease signing.',
    dialogues: [
      {
        speaker: 'Chủ nhà (房東)',
        role: 'npc',
        viet: 'Chào em! Mời em vào xem căn hộ. Căn này một phòng ngủ, đầy đủ nội thất.',
        zh: '你好！請進來看這間公寓。這是一房一廳格局，家具家電全配。',
        en: 'Hello! Please come in to view the apartment. It is a 1-bedroom unit, fully furnished.',
        northTip: '房東叫「Chủ nhà」；全配家具說「Đầy đủ nội thất」。',
        southTip: '公寓大樓稱「Chung cư / Căn hộ」。'
      },
      {
        speaker: 'Khách thuê (房客)',
        role: 'learner',
        viet: 'Căn hộ đẹp quá. Cho em hỏi tiền thuê mỗi tháng là bao nhiêu ạ?',
        zh: '這間公寓真漂亮。請問每個月租金是多少錢呢？',
        en: 'The apartment is lovely. How much is the monthly rent?',
        northTip: '月租金說「Tiền thuê mỗi tháng / Tiền nhà」。',
        southTip: '通常以百萬越南盾 (triệu) 為計價單位。'
      },
      {
        speaker: 'Chủ nhà (房東)',
        role: 'npc',
        viet: 'Giá thuê là mười hai triệu một tháng. Tiền cọc hai tháng và đóng tiền đầu mỗi tháng.',
        zh: '租金是每個月一千兩百萬盾 (12,000,000 VND)。押金兩個月，每個月初繳租。',
        en: 'The rent is 12 million VND per month. Deposit is 2 months, paid at the beginning of each month.',
        northTip: '押金叫「Tiền cọc / Tiền đặt cọc」。',
        southTip: '12 triệu VND 約合台幣 15,000 元。'
      },
      {
        speaker: 'Khách thuê (房客)',
        role: 'learner',
        viet: 'Tiền điện và tiền nước tính thế nào ạ? Có bao gồm phí quản lý và Wi-Fi không?',
        zh: '電費和水費怎麼計算呢？有包含大樓管理費和 Wi-Fi 網路嗎？',
        en: 'How are electricity and water calculated? Does it include management fees and Wi-Fi?',
        northTip: '電費：Tiền điện；水費：Tiền nước；管理費：Phí quản lý。',
        southTip: '電費常按政府台電表或一度 3,500 - 4,000 VND 計算。'
      },
      {
        speaker: 'Chủ nhà (房東)',
        role: 'npc',
        viet: 'Tiền điện tính bốn nghìn một số, nước một trăm nghìn một người, miễn phí Wi-Fi và phí quản lý.',
        zh: '電費一度四千盾，水費每人每月十萬盾，免費提供 Wi-Fi 和免管理費。',
        en: 'Electricity is 4,000 VND per kWh, water is 100,000 VND per person, free Wi-Fi and management fee.',
        northTip: '一度電說「Một số điện / một kWh」。',
        southTip: '簽約至少六個月或一年。'
      }
    ],
    rolePlay: {
      userRoleZh: '租客 (Người thuê nhà)',
      userRoleEn: 'Tenant (Người thuê)',
      partnerRoleZh: '房東 (Chủ nhà)',
      partnerRoleEn: 'Landlord (Chủ nhà)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Em thấy phòng này thế nào? Hợp đồng tối thiểu sáu tháng em nhé.',
          partnerPromptZh: '你覺得這房間如何？合約最短簽六個月喔。',
          partnerPromptEn: 'What do you think of this room? Minimum 6-month lease.',
          userOptions: [
            {
              id: 'rent_opt1',
              textVi: 'Dạ em ưng ý căn này. Ngày mai chúng ta ký hợp đồng và em đặt cọc nhé.',
              textZh: '我很中意這間。我們明天簽約並且我付押金喔。',
              textEn: 'I like this unit. Let us sign the contract and pay deposit tomorrow.',
              isCorrect: true,
              feedbackZh: '完美確認承租與簽約！',
              feedbackEn: 'Clear confirmation to proceed with lease signing!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Căn hộ / Chung cư', zh: '公寓大樓 / 電梯大樓', en: 'Apartment / Condominium', phonetic: '[kaːn ho / cuŋ kɯ]', note: '現代住宅' },
      { viet: 'Tiền thuê mỗi tháng', zh: '每個月租金', en: 'Monthly rent', phonetic: '[tiən tʰwe moj tʰaːŋ]', note: '經常以 Triệu (百萬) 報價' },
      { viet: 'Tiền đặt cọc', zh: '保證押金', en: 'Security deposit', phonetic: '[tiən dat kɔk]', note: '通常為 1-2 個月租金' },
      { viet: 'Hợp đồng thuê nhà', zh: '房屋租賃契約', en: 'Lease contract', phonetic: '[həːp doŋ tʰwe ɲa]', note: '法律依據' },
      { viet: 'Tiền điện & Tiền nước', zh: '電費與水費', en: 'Electricity and water bills', phonetic: '[tiən diən va tiən nɯək]', note: '生活公用事業支出' },
      { viet: 'Nội thất đầy đủ', zh: '家具家電全配', en: 'Fully furnished', phonetic: '[noj tʰət dəj du]', note: '拎包入住' },
      { viet: 'Tạm trú', zh: '暫住證 / 暫住登記', en: 'Temporary residence registration', phonetic: '[tam cu]', note: '房東需向公安登記' }
    ],
    culturalTips: {
      titleZh: '外國人在越南租房注意事項',
      titleEn: 'Expat Apartment Rental Guide in Vietnam',
      tipsZh: [
        '公安暫住登記 (Đăng ký tạm trú)：外國人租房，房東依法必須在 24 小時內向當地派出所/公安局完成「Tạm trú」(暫住登記)，這對申請工作證 (Work Permit) 或居留證 (TRC) 至關重要。',
        '水電計費方式：簽約前務必確認電費是按照「Giá nhà nước」(國家公定累進電價) 還是「Giá kinh doanh / Giá khoán」(固定一度 3,500-4,000 VND)。'
      ],
      tipsEn: [
        'Temporary Residence (Tạm trú): Landlords are legally required to register foreign tenants with local police within 24 hours.',
        'Electricity rates: Check whether power is billed at the government rate or fixed flat rate (approx. 3,500–4,000 VND/kWh).'
      ],
      proTipZh: '✨ 搬入前請務必拍照存證房間現狀與水電表讀數 (Số công tơ điện)！',
      proTipEn: '✨ Pro Tip: Photograph utility meters and existing furniture conditions prior to moving in!'
    }
  },

  // 15. 職場商務拜訪與會議
  {
    id: 'business_meeting',
    category: 'business',
    tagZh: '職場商務',
    tagEn: 'Business Meeting',
    icon: '💼',
    titleZh: '職場商務拜訪、交換名片、洽談專案與預約下次會議',
    titleEn: 'Business Meeting, Exchanging Business Cards & Partnerships',
    titleVi: 'Gặp Gỡ Đối Tác & Trao Đổi Công Việc',
    summaryZh: '初次商務寒暄、交換名片 (Trao danh thiếp)、介紹公司業務 (Giới thiệu công ty) 與商談合作。',
    summaryEn: 'Business greetings, business card exchange, company introduction, and partnership discussion.',
    dialogues: [
      {
        speaker: 'Giám đốc Việt Nam (阮總經理)',
        role: 'npc',
        viet: 'Chào anh Chen! Rất hân hạnh được đón tiếp phái đoàn của anh tại văn phòng chúng tôi.',
        zh: '陳總您好！非常榮幸在我們辦公室接待您的代表團。',
        en: 'Welcome Mr. Chen! It is a great honor to host your delegation at our office.',
        northTip: '商務場合稱呼頭銜「Giám đốc」(總經理/總監)。',
        southTip: '「Rất hân hạnh」= 漢越音「甚感榮幸」，非常正式得體。'
      },
      {
        speaker: 'Anh Chen (陳總)',
        role: 'learner',
        viet: 'Chào ông Nguyễn! Cảm ơn sự đón tiếp nồng hậu của quý công ty. Đây là danh thiếp của tôi.',
        zh: '阮總您好！感謝貴公司的熱情接待。這是我的名片。',
        en: 'Hello Mr. Nguyen! Thank you for the warm hospitality. Here is my business card.',
        northTip: '名片北越叫「Danh thiếp / Card」，南越常說「Namecard / Danh thiếp」。',
        southTip: '遞名片務必雙手奉上。'
      },
      {
        speaker: 'Giám đốc Việt Nam (阮總經理)',
        role: 'npc',
        viet: 'Cảm ơn anh. Chúng tôi đã xem qua hồ sơ năng lực của công ty anh, rất ấn tượng.',
        zh: '謝謝您。我們已經審閱過貴公司的公司簡介與資質履歷，非常令人欽佩。',
        en: 'Thank you. We have reviewed your company\'s capability profile, very impressive.',
        northTip: '公司簡介履歷說「Hồ sơ năng lực / Profile」。',
        southTip: '「Rất ấn tượng」= 印象深刻。'
      },
      {
        speaker: 'Anh Chen (陳總)',
        role: 'learner',
        viet: 'Chúng tôi rất mong muốn hợp tác lâu dài và mở rộng thị trường tại Việt Nam.',
        zh: '我們非常期盼能建立長期合作關係，並共同拓展越南市場。',
        en: 'We sincerely look forward to long-term cooperation and expanding the market in Vietnam.',
        northTip: '長期合作：Hợp tác lâu dài；拓展市場：Mở rộng thị trường。',
        southTip: '商務洽談核心願景。'
      }
    ],
    rolePlay: {
      userRoleZh: '商務代表 (Đại diện doanh nghiệp)',
      userRoleEn: 'Business Delegate (Đại diện)',
      partnerRoleZh: '越南合作夥伴總經理 (Giám đốc đối tác)',
      partnerRoleEn: 'Partner Managing Director (Giám đốc)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào anh, mời anh uống trà! Chúng ta có thể bắt đầu thảo luận về các điều khoản hợp đồng được chưa ạ?',
          partnerPromptZh: '您好，請用茶！我們可以開始討論合約條款了嗎？',
          partnerPromptEn: 'Welcome, please have tea! Shall we begin discussing contract terms?',
          userOptions: [
            {
              id: 'bs_opt1',
              textVi: 'Vâng, tuyệt vời. Chúng ta hãy cùng xem xét tiến độ giao hàng và phương thức thanh toán.',
              textZh: '好的太好了。讓我們一起檢視交貨進度與付款方式。',
              textEn: 'Yes, wonderful. Let us review the delivery schedule and payment terms.',
              isCorrect: true,
              feedbackZh: '商務語氣沉穩專業，非常優秀！',
              feedbackEn: 'Professional, articulate executive response!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Danh thiếp / Namecard', zh: '名片 / 商務名片', en: 'Business card', phonetic: '[zaɲ tʰiəp]', note: '雙手遞交' },
      { viet: 'Hợp tác kinh doanh', zh: '商業合作', en: 'Business partnership', phonetic: '[həːp taːk kiɲ zaːɲ]', note: '商務主題' },
      { viet: 'Hợp đồng thương mại', zh: '商業契約 / 合同', en: 'Commercial contract', phonetic: '[həːp doŋ tʰɯəŋ maːj]', note: '簽署文件' },
      { viet: 'Mở rộng thị trường', zh: '開拓市場', en: 'Market expansion', phonetic: '[məː zəwŋ tʰi cɯəŋ]', note: '商業戰略' },
      { viet: 'Tiến độ giao hàng', zh: '交貨進度 / 出貨時程', en: 'Delivery schedule', phonetic: '[tiən do zaːw haːŋ]', note: '供應鏈討論' },
      { viet: 'Phương thức thanh toán', zh: '付款方式 (如 L/C, T/T)', en: 'Payment terms / method', phonetic: '[fɯəŋ tʰɯk tʰaɲ twan]', note: '財務條款' }
    ],
    culturalTips: {
      titleZh: '台越商務禮儀與談判文化',
      titleEn: 'Vietnamese Business Etiquette & Relationship (Mối Quan Hệ)',
      tipsZh: [
        '交換名片禮儀：接受與遞送名片時，務必以雙手持名片兩角，並花數秒時間閱讀對方的姓名與頭銜，切忌直接塞入口袋。',
        '重視人際關係 (Quan hệ)：越南商務決策非常看重人與人之間的信任度與長期情誼。正式會議前後通常會安排餐敘 (Ăn trưa / Ăn tối)。'
      ],
      tipsEn: [
        'Business card exchange: Always present and receive business cards with both hands, taking a few seconds to inspect the title respectfully.',
        'Relationship first (Quan hệ): Personal trust and warmth precede formal agreements. Lunches or dinners are common and crucial.'
      ],
      proTipZh: '✨ 正式稱呼職稱 + 姓/名，如「Giám đốc Nguyễn」(阮總) 或「Tổng giám đốc Chen」(陳總經理) 以表尊重！',
      proTipEn: '✨ Pro Tip: Address business counterparts by title + given name (e.g. Giám đốc Nam).'
    }
  },

  // 16. 緊急求助與遺失報案
  {
    id: 'emergency',
    category: 'emergency',
    tagZh: '緊急求救',
    tagEn: 'Emergency & Police',
    icon: '🚨',
    titleZh: '緊急求助、遺失護照錢包、報警報案與急難電話',
    titleEn: 'Emergency Help, Lost Passport/Wallet, Police Report & Hotlines',
    titleVi: 'Khẩn Cấp & Trình Báo Công An',
    summaryZh: '錢包護照遺失 (Mất ví / hộ chiếu)、呼救幫忙 (Giúp tôi với / Cứu tôi với)、報警備案 (Báo công an) 與緊急電話。',
    summaryEn: 'Lost passport/wallet, shouting for help, filing a police report, and national emergency hotline numbers.',
    dialogues: [
      {
        speaker: 'Nạn nhân (受害者)',
        role: 'learner',
        viet: 'Giúp tôi với! Cứu tôi với! Có ai biết nói tiếng Anh hoặc tiếng Trung không?',
        zh: '請幫幫我！救命啊！有人會講英文或中文嗎？',
        en: 'Please help me! Save me! Does anyone speak English or Chinese?',
        northTip: '求助急喊「Giúp tôi với!」(請幫幫我)。',
        southTip: '「Cứu tôi với!」= 救命。'
      },
      {
        speaker: 'Công an (公安警察)',
        role: 'npc',
        viet: 'Bình tĩnh nào bạn! Có chuyện gì xảy ra vậy? Bạn bị mất đồ ở đâu?',
        zh: '請冷靜下來！發生了什麼事？你在哪裡弄丟東西的？',
        en: 'Calm down! What happened? Where did you lose your belongings?',
        northTip: '警察在越南統稱「Công an」(公安)。',
        southTip: '冷靜說「Bình tĩnh」。'
      },
      {
        speaker: 'Nạn nhân (受害者)',
        role: 'learner',
        viet: 'Tôi vừa bị giật túi xách ở ngã tư, bên trong có hộ chiếu, điện thoại và ví tiền.',
        zh: '我剛在十字路口被搶了隨身包，裡面有護照、手機和錢包。',
        en: 'My bag was just snatched at the intersection, inside was my passport, phone, and wallet.',
        northTip: '被搶說「Bị giật túi xách」；錢包是「Ví tiền」。',
        southTip: '請警察做筆錄備案。'
      },
      {
        speaker: 'Công an (公安警察)',
        role: 'npc',
        viet: 'Chúng tôi sẽ lập biên bản trình báo mất tài sản để bạn làm lại hộ chiếu nhé.',
        zh: '我們會為您製作遺失物報案筆錄，以便您前往辦事處補辦護照。',
        en: 'We will write an official police loss report so you can replace your passport at the embassy.',
        northTip: '製作報案筆錄：Lập biên bản trình báo。',
        southTip: '拿著報案證明即可前往駐越南代表處申請補發。'
      }
    ],
    rolePlay: {
      userRoleZh: '報案人 (Người trình báo)',
      userRoleEn: 'Reporting Citizen (Người trình báo)',
      partnerRoleZh: '值班公安警官 (Cán bộ công an)',
      partnerRoleEn: 'Police Officer (Công an)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào bạn, đồn công an nghe đây. Bạn cần hỗ trợ việc gì gấp?',
          partnerPromptZh: '您好，這裡是派出所。您需要什麼緊急協助？',
          partnerPromptEn: 'Hello, police station speaking. What is your emergency?',
          userOptions: [
            {
              id: 'em_opt1',
              textVi: 'Tôi bị mất hộ chiếu và ví tiền, xin công an lập biên bản giúp tôi để làm lại giấy tờ.',
              textZh: '我弄丟了護照和錢包，請公安幫我製作報案筆錄以補辦證件。',
              textEn: 'I lost my passport and wallet. Please file a police report so I can reissue documents.',
              isCorrect: true,
              feedbackZh: '敘述條理清晰，最標準的報案表達！',
              feedbackEn: 'Clear, direct, and effective emergency reporting!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Giúp tôi với! / Cứu tôi với!', zh: '請幫幫我！ / 救命！', en: 'Help me! / Save me!', phonetic: '[zup toj vəj / kɯw toj vəj]', note: '緊急呼救' },
      { viet: 'Đồn công an', zh: '警察局 / 派出所', en: 'Police station', phonetic: '[don kəwŋ aːn]', note: '報案地點' },
      { viet: 'Mất hộ chiếu / Ví tiền', zh: '遺失護照 / 錢包', en: 'Lost passport / wallet', phonetic: '[mat ho ciw / vi tiən]', note: '補辦需要報案單' },
      { viet: 'Lập biên bản', zh: '製作筆錄 / 開立報案證明', en: 'File an official police report', phonetic: '[lap ɓiən ɓaːn]', note: '理賠與補發關鍵' },
      { viet: '113', zh: '報警專線 (警察)', en: 'Police hotline: 113', phonetic: '[mot mot ɓa]', note: '全國報警' },
      { viet: '114', zh: '火警與消防救援', en: 'Fire department: 114', phonetic: '[mot mot ɓon]', note: '火警救災' },
      { viet: '115', zh: '急救救護車專線', en: 'Ambulance: 115', phonetic: '[mot mot naːm]', note: '醫療救護' }
    ],
    culturalTips: {
      titleZh: '越南急難救助與報案指南',
      titleEn: 'Emergency Numbers & Loss Reporting in Vietnam',
      tipsZh: [
        '越南三大緊急電話：警察報案撥打 113，火警撥打 114，救護車撥打 115。',
        '護照遺失流程：立即前往失竊地派出所取得「Biên bản báo mất」(報案證明)，隨後聯絡台灣駐越南代表處（河內或胡志明市台北經濟文化辦事處）辦理入國證明書或補發護照。'
      ],
      tipsEn: [
        'Three emergency hotlines: Police 113, Fire 114, Ambulance 115.',
        'Lost passport: File a report at the nearest police station for a certified loss receipt, then visit the nearest TECO office.'
      ],
      proTipZh: '✨ 在路邊使用手機時請留意周遭摩托車，貴重物品與斜背包建議背在身體內側！',
      proTipEn: '✨ Pro Tip: Hold phones securely away from street curbs to prevent drive-by snatching!'
    }
  }
];
