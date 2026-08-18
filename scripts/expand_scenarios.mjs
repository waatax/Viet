import fs from 'fs';
import path from 'path';

// Load situationalScenarios.js and expand with new scenarios
import { situationalScenarios, scenarioCategories } from '../src/data/situationalScenarios.js';
import { practicalPhrases } from '../src/data/vietnameseData.js';

console.log('Original situationalScenarios count:', situationalScenarios.length);
console.log('Original practicalPhrases count:', practicalPhrases.length);

// 1. Define New Scenarios for the 8 Core Life Domains
const newScenarios = [
  // --- 1. 初次見面與自我介紹 (First Meeting) ---
  {
    id: 'meeting',
    category: 'meeting',
    tagZh: '初見破冰',
    tagEn: 'First Meeting',
    icon: '🤝',
    image: 'travel.jpg',
    titleZh: '初次見面自我介紹、詢問背景與加 Zalo 好友',
    titleEn: 'Self-Introduction, Background & Adding Zalo Contact',
    titleVi: 'Gặp Gỡ, Làm Quen & Kết Bạn Zalo',
    summaryZh: '學習向越南朋友自我介紹姓名、國籍、工作、學越文時間，並禮貌交換 Zalo/Facebook 聯繫方式。',
    summaryEn: 'Learn to introduce yourself, nationality, profession, study duration, and exchange Zalo/Facebook contacts politely.',
    dialogues: [
      {
        speaker: 'Minh (朋友)',
        role: 'npc',
        viet: 'Chào bạn! Mình là Minh. Rất vui được làm quen với bạn.',
        zh: '你好！我是 Minh。很高興認識你。',
        en: 'Hello! I am Minh. Very glad to get to know you.',
        northTip: '同輩或初次見面年齡相近時，常用「Mình - Bạn」稱呼，親切平易。',
        southTip: '南越口語常親切自稱「Tui / Mình」稱呼對方「Bạn / Bồ」。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Chào Minh! Mình là David, người Đài Loan. Mình mới chuyển đến Việt Nam công tác.',
        zh: '你好 Minh！我是 David，台灣人。我剛調派到越南工作。',
        en: 'Hello Minh! I am David from Taiwan. I just moved to Vietnam for work.',
        northTip: '「công tác」是標準漢越詞（工作/出差/派駐）。',
        southTip: '南越口語也常直接說「làm việc」(工作)。'
      },
      {
        speaker: 'Minh (朋友)',
        role: 'npc',
        viet: 'Ồ, tiếng Việt của bạn rất tốt! Bạn học lâu chưa? Bạn đang ở quận mấy?',
        zh: '哇，你的越語說得真好！你學多久了？你目前住在幾郡？',
        en: 'Oh, your Vietnamese is great! How long have you learned? Which district do you live in?',
        northTip: '河內分「Quận」(郡/區) 和「Huyện」(縣)。',
        southTip: '胡志明市以「Quận 1, Quận 7, TP. Thủ Đức」聞名。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Mình học được khoảng 6 tháng rồi. Mình đang ở Quận 1. Bạn có dùng Zalo không? Cho mình xin số nhé!',
        zh: '我學了大約 6 個月了。我住在第一郡。你有用 Zalo 嗎？請留個電話號碼方便加好友吧！',
        en: 'I have studied for about 6 months. I live in District 1. Do you use Zalo? May I have your number?',
        northTip: 'Zalo 是越南最普及的通訊軟體，地位等同台灣 LINE。',
        southTip: '口語說「Cho mình xin số」(給我號碼) 是加好友最自然的說法。'
      },
      {
        speaker: 'Minh (朋友)',
        role: 'npc',
        viet: 'Có chứ! Số Zalo của mình là 0901234567. Rảnh thì nhắn tin đi cà phê nhé!',
        zh: '有的！我的 Zalo 號碼是 0901234567。有空傳訊息一起喝咖啡喔！',
        en: 'Sure! My Zalo number is 0901234567. Text me when you are free to grab a coffee!',
        northTip: '「Đi cà phê」在越南文化中是社交聚會、聊天的代名詞。',
        southTip: '「Rảnh thì nhắn tin」= 有空就傳訊息。'
      }
    ],
    rolePlay: {
      userRoleZh: '新朋友 (David)',
      userRoleEn: 'New Friend (David)',
      partnerRoleZh: '越南朋友 (Minh)',
      partnerRoleEn: 'Vietnamese Friend (Minh)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chào bạn! Mình là Minh. Rất vui được làm quen với bạn.',
          partnerPromptZh: '你好！我是 Minh。很高興認識你。',
          partnerPromptEn: 'Hello! I am Minh. Very glad to get to know you.',
          userOptions: [
            {
              id: 'm1_opt1',
              textVi: 'Chào Minh! Mình là David, người Đài Loan. Rất vui được gặp bạn.',
              textZh: '你好 Minh！我是 David，台灣人。很高興遇見你。',
              textEn: 'Hello Minh! I am David from Taiwan. Nice to meet you.',
              isCorrect: true,
              feedbackZh: '非常棒！自報姓名與國籍，禮貌得體。',
              feedbackEn: 'Great! Stating your name and nationality is polite and friendly.'
            },
            {
              id: 'm1_opt2',
              textVi: 'Bao nhiêu tiền một ký?',
              textZh: '一公斤多少錢？',
              textEn: 'How much per kilo?',
              isCorrect: false,
              feedbackZh: '這是在市場買東西的句子喔！',
              feedbackEn: 'This is a market shopping phrase!'
            }
          ]
        },
        {
          stepIndex: 2,
          partnerPromptVi: 'Tiếng Việt của bạn tốt quá! Bạn có dùng Zalo không?',
          partnerPromptZh: '你的越語太好了！你有用 Zalo 嗎？',
          partnerPromptEn: 'Your Vietnamese is so good! Do you use Zalo?',
          userOptions: [
            {
              id: 'm2_opt1',
              textVi: 'Có chứ, số của mình là 0912345678, bạn kết bạn với mình nhé!',
              textZh: '有的，我的號碼是 0912345678，你加我好友吧！',
              textEn: 'Yes, my number is 0912345678, please add me!',
              isCorrect: true,
              feedbackZh: '答得好！在越南迅速交換 Zalo 是建立友誼的第一步。',
              feedbackEn: 'Well done! Exchanging Zalo is essential for making friends in Vietnam.'
            },
            {
              id: 'm2_opt2',
              textVi: 'Tôi muốn về nhà ngủ.',
              textZh: '我想回家睡覺。',
              textEn: 'I want to go home and sleep.',
              isCorrect: false,
              feedbackZh: '這樣回答會讓氣氛變尷尬喔！',
              feedbackEn: 'This would make the mood awkward!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Làm quen', zh: '結識 / 做朋友', en: 'Get acquainted / make friends', phonetic: '[lam kwɛn]', note: '初次見面核心詞' },
      { viet: 'Rất vui được gặp bạn', zh: '很高興遇見你', en: 'Nice to meet you', phonetic: '[zət vuj dɯək ɣəp baːn]', note: '社交禮貌標準句' },
      { viet: 'Kết bạn Zalo', zh: '加 Zalo 好友', en: 'Add on Zalo', phonetic: '[ket baːn za lo]', note: '越南通訊必備' },
      { viet: 'Số điện thoại', zh: '電話號碼', en: 'Phone number', phonetic: '[so diəŋ twaːj]', note: '簡稱 SĐT' },
      { viet: 'Mới chuyển đến', zh: '剛搬來 / 剛調派過來', en: 'Just moved here', phonetic: '[məj cwiən den]', note: '描述旅居背景' }
    ],
    culturalTips: {
      titleZh: '越南初見社交與加好友禮儀',
      titleEn: 'First Meeting & Social Etiquette in Vietnam',
      tipsZh: [
        '在越南結識新朋友，通常在寒暄幾句後便會主動詢問「Cho mình xin Zalo」(加個 Zalo 吧)，這是非常友好熱情的表現。',
        '初次見面如果不確定對方年紀，可以先用禮貌中性的「Mình - Bạn」(我與你) 或禮貌尊稱「Anh / Chị」，確定年齡後再調整稱謂。',
        '越南人對外國朋友通常非常熱情好奇，常會聊到工作、學越文原因與婚姻狀況，這在當地是拉近距離的日常關心。'
      ],
      tipsEn: [
        'Exchanging Zalo contacts early in a conversation is standard friendly behavior.',
        'When age is uncertain, use polite "Mình - Bạn" before establishing age hierarchy.',
        'Asking about origin, career, and family is a warm way Vietnamese people build rapport.'
      ]
    }
  },

  // --- 2. 溝通與日常閒聊 (Communication & Chit-chat) ---
  {
    id: 'smalltalk',
    category: 'chat',
    tagZh: '社交閒聊',
    tagEn: 'Daily Small Talk',
    icon: '💬',
    image: 'cafe.jpg',
    titleZh: '天氣閒聊、週末休假安排與日常生活關心',
    titleEn: 'Weather, Weekend Plans & Everyday Chit-Chat',
    titleVi: 'Trò Chuyện, Thời Tiết & Cuộc Sống Thường Ngày',
    summaryZh: '學習越南人最常聊的天氣變化、週末放假去處、美食推薦與生活問候技巧。',
    summaryEn: 'Master daily chit-chat about tropical weather, weekend plans, dining spots, and friendly greetings.',
    dialogues: [
      {
        speaker: 'Hoa (同事)',
        role: 'npc',
        viet: 'Dạo này thời tiết Sài Gòn nóng quá anh nhỉ! Chiều nào cũng có mưa rào.',
        zh: '這陣子西貢的天氣好熱啊哥！每天下午還都下陣雨。',
        en: 'The weather in Saigon has been so hot lately! It rains every afternoon.',
        northTip: '河內有四季，冬天會冷；西貢只有乾季 (mùa khô) 與雨季 (mùa mưa)。',
        southTip: '「Mưa rào」指熱帶午後雷陣雨，來得快去得快。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Đúng vậy! Mùa mưa nên đi đâu cũng phải mang theo áo mưa. Cuối tuần này em có kế hoạch gì chưa?',
        zh: '沒錯！雨季出門去哪都得隨身帶雨衣。這週末妳有什麼計畫了嗎？',
        en: 'Indeed! During rainy season you always need a raincoat. Any plans for this weekend?',
        northTip: '「áo mưa」= 雨衣，越南機車族的必備神器。',
        southTip: '「Cuối tuần」= 週末；「kế hoạch」= 計畫。'
      },
      {
        speaker: 'Hoa (同事)',
        role: 'npc',
        viet: 'Em định đi dạo phố đi bộ Nguyễn Huệ rồi ghé ăn ốc với bạn. Anh đã ăn ốc Sài Gòn bao giờ chưa?',
        zh: '我打算去阮惠步行街散步，然後跟朋友去吃炒螺。哥吃過西貢的炒螺海鮮了嗎？',
        en: 'I plan to stroll around Nguyen Hue Walking Street then eat sea snails with friends. Have you ever tried Saigon snails?',
        northTip: '阮惠街（Phố đi bộ Nguyễn Huệ）是胡志明市最熱鬧的休閒中心。',
        southTip: '吃「Ốc」(螺肉海鮮大排檔) 是南越最具代表性的夜間庶民文化。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Anh ăn thử một lần rồi, ngon tuyệt vời! Hôm nào em dẫn anh đi quán nào ngon nhé!',
        zh: '我吃過一次，太美味了！改天妳帶我去哪家好吃的店吧！',
        en: 'I tried it once, absolutely delicious! You should take me to a great spot sometime!',
        northTip: '「Ngon tuyệt vời」= 好吃到極點 / 讚絕了。',
        southTip: '「Hôm nào... nhé」= 改天...喔，是越南約朋友最常見的句式。'
      }
    ],
    rolePlay: {
      userRoleZh: '好友 (David)',
      userRoleEn: 'Friend (David)',
      partnerRoleZh: '同事 (Hoa)',
      partnerRoleEn: 'Colleague (Hoa)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Cuối tuần này anh có rảnh không? Anh định đi đâu chơi?',
          partnerPromptZh: '這週末哥有空嗎？打算去哪裡玩？',
          partnerPromptEn: 'Are you free this weekend? Where do you plan to go?',
          userOptions: [
            {
              id: 'st1_opt1',
              textVi: 'Cuối tuần anh định đi cà phê đọc sách và đi dạo phố.',
              textZh: '週末我打算去咖啡廳看書和去街上散步。',
              textEn: 'I plan to go to a cafe to read and walk around the streets.',
              isCorrect: true,
              feedbackZh: '完美回答！自然表達了休閒安排。',
              feedbackEn: 'Perfect! Expresses your weekend plans smoothly.'
            },
            {
              id: 'st1_opt2',
              textVi: 'Tôi bị mất hộ chiếu rồi.',
              textZh: '我的護照弄丟了。',
              textEn: 'I lost my passport.',
              isCorrect: false,
              feedbackZh: '這是緊急求助的句子，不符合閒聊語境。',
              feedbackEn: 'This is an emergency phrase, not suitable for small talk.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Thời tiết', zh: '天氣', en: 'Weather', phonetic: '[tʰəj tiət]', note: '閒聊常用話題' },
      { viet: 'Mùa mưa / Mùa khô', zh: '雨季 / 乾季', en: 'Rainy season / Dry season', phonetic: '[muə muə / muə xo]', note: '越南熱帶氣候' },
      { viet: 'Cuối tuần', zh: '週末', en: 'Weekend', phonetic: '[kwoj twən]', note: '安排休閒' },
      { viet: 'Rảnh rỗi', zh: '空閒 / 有空', en: 'Free / At leisure', phonetic: '[zaɲ zoːj]', note: '問時間' },
      { viet: 'Ngon tuyệt vời', zh: '美味極了', en: 'Delicious / Wonderful', phonetic: '[ŋɔn twiət vəj]', note: '稱讚美食' }
    ],
    culturalTips: {
      titleZh: '越南人的閒聊與週末休閒習慣',
      titleEn: 'Vietnamese Chit-chat & Weekend Culture',
      tipsZh: [
        '越南人碰面最常問「Ăn cơm chưa?」(吃飯了嗎？) 或「Dạo này khỏe không?」(最近好嗎？)，類似中文的親切問候。',
        '「Đi dạo」(散步漫遊) 與「Cà phê bệt」(席地而坐的街頭咖啡) 是年輕人最愛的平民休閒。'
      ],
      tipsEn: [
        '"Ăn cơm chưa?" (Have you eaten?) is the classic friendly greeting.',
        'Sidewalk cafes and walking streets are popular spots for social relaxation.'
      ]
    }
  },

  // --- 3. 興趣、休閒與娛樂 (Hobbies & Leisure) ---
  {
    id: 'leisure_hobbies',
    category: 'leisure',
    tagZh: '休閒娛樂',
    tagEn: 'Hobbies & Leisure',
    icon: '🎮',
    image: 'travel.jpg',
    titleZh: '交流個人興趣、卡拉OK (Karaoke) 與看電影休閒',
    titleEn: 'Talking About Hobbies, Karaoke & Movies',
    titleVi: 'Sở Thích, Hát Karaoke & Giải Trí Cuối Tuần',
    summaryZh: '掌握如何表達自己的興趣愛好（唱歌、拍照、烹飪、聽音樂），並參與越南超受歡迎的 Karaoke 聚會。',
    summaryEn: 'Talk about personal hobbies (music, photography, cooking, movies) and join Vietnamese Karaoke parties.',
    dialogues: [
      {
        speaker: 'Tuấn (朋友)',
        role: 'npc',
        viet: 'Anh David ơi, sở thích của anh lúc rảnh rỗi là gì thế?',
        zh: 'David 哥，你平時有空時有什麼興趣愛好呢？',
        en: 'David, what are your hobbies in your free time?',
        northTip: '「Sở thích」即漢字「所好/嗜好」，指興趣。',
        southTip: '南越也常問「Lúc rảnh anh thích làm gì?」(有空喜歡做什麼？)。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Anh thích nghe nhạc V-Pop, chụp ảnh đường phố và đi du lịch khám phá ẩm thực.',
        zh: '我喜歡聽越南流行音樂 (V-Pop)、街頭攝影以及到處旅行探索美食。',
        en: 'I like listening to V-Pop music, street photography, and traveling for food.',
        northTip: 'V-Pop (Nhạc trẻ Việt Nam) 近年在國際非常熱門。',
        southTip: '「Chụp ảnh」(北越) / 「Chụp hình」(南越) 都表示拍照。'
      },
      {
        speaker: 'Tuấn (朋友)',
        role: 'npc',
        viet: 'Hay quá! Tối nay nhóm mình đi hát Karaoke ở Quận 1, anh đi chung cho vui nhé!',
        zh: '太棒了！今晚我們這幫朋友要去第一郡唱卡拉OK，哥一起來熱鬧一下吧！',
        en: 'Awesome! Tonight our group is going for Karaoke in District 1, come join us!',
        northTip: 'Karaoke 是越南人聚會、團建 (Team building) 最熱門的活動。',
        southTip: '「Đi chung cho vui」= 一起去熱鬧熱鬧/湊個熱鬧。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Được chứ! Anh sẽ tập hát một bài tiếng Việt để góp vui.',
        zh: '太好了！我會練習唱一首越南歌來共襄盛舉。',
        en: 'Sure! I will practice a Vietnamese song to contribute to the fun.',
        northTip: '「Góp vui」指在聚會中表演助興、增添樂趣。',
        southTip: '會唱一兩首經典越文歌（如《See Tình》）在聚會中極受歡迎！'
      }
    ],
    rolePlay: {
      userRoleZh: '聚會朋友 (David)',
      userRoleEn: 'Party Friend (David)',
      partnerRoleZh: '好友 (Tuấn)',
      partnerRoleEn: 'Friend (Tuấn)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Tối nay nhóm mình đi hát Karaoke, anh tham gia nhé?',
          partnerPromptZh: '今晚我們去唱卡拉OK，哥參加嗎？',
          partnerPromptEn: 'We are going for Karaoke tonight, will you join?',
          userOptions: [
            {
              id: 'lh1_opt1',
              textVi: 'Tuyệt vời! Mấy giờ và ở đâu thế em? Anh sẽ đến đúng giờ.',
              textZh: '太棒了！幾點在哪裡呢？我會準時到。',
              textEn: 'Awesome! What time and where? I will arrive on time.',
              isCorrect: true,
              feedbackZh: '非常熱情且積極的社交回應！',
              feedbackEn: 'Enthusiastic and polite social response!'
            },
            {
              id: 'lh1_opt2',
              textVi: 'Cho tôi một bát phở bò tái.',
              textZh: '給我一碗半熟牛肉河粉。',
              textEn: 'Give me a bowl of beef pho.',
              isCorrect: false,
              feedbackZh: '這不是在點餐喔！',
              feedbackEn: 'Not a dining context!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Sở thích', zh: '興趣 / 愛好', en: 'Hobby', phonetic: '[səː tʰik]', note: '漢越詞「所好」' },
      { viet: 'Hát Karaoke', zh: '唱卡拉OK', en: 'Sing Karaoke', phonetic: '[hat ka ra o ke]', note: '越南國民娛樂' },
      { viet: 'Nghe nhạc', zh: '聽音樂', en: 'Listen to music', phonetic: '[ŋɛ ɲaːk]', note: '休閒詞彙' },
      { viet: 'Chụp ảnh / Chụp hình', zh: '拍照 / 攝影', en: 'Take photos', phonetic: '[cup aɲ / cup hïŋ]', note: '北越 chụp ảnh, 南越 chụp hình' },
      { viet: 'Xem phim', zh: '看電影', en: 'Watch movies', phonetic: '[sɛm fim]', note: '娛樂日常' }
    ],
    culturalTips: {
      titleZh: '越南熱門休閒與 Karaoke 文化',
      titleEn: 'Vietnamese Leisure & Karaoke Culture',
      tipsZh: [
        '在越南，唱 Karaoke 是慶祝生日、下班聚會與朋友聯絡感情的頭號活動，包廂通常配有豐盛的水果拼盤與啤酒小吃。',
        '外國朋友若能開口哼唱一兩句當地流行歌曲，會立刻拉近與越南朋友的心理距離！'
      ],
      tipsEn: [
        'Karaoke is the most popular social entertainment in Vietnam for celebrations and team bonding.',
        'Singing a local Vietnamese hit will instantly win you great appreciation among friends.'
      ]
    }
  },

  // --- 4. 運動與健身 (Sports & Fitness) ---
  {
    id: 'sports_fitness',
    category: 'sports',
    tagZh: '運動健身',
    tagEn: 'Sports & Fitness',
    icon: '⚽',
    image: 'travel.jpg',
    titleZh: '公園踢毽子 (Đá cầu)、打羽球與健身房運動交流',
    titleEn: 'Shuttlecock Kicking (Đá cầu), Badminton & Gym Fitness',
    titleVi: 'Thể Thao, Đá Cầu, Cầu Lông & Tập Gym',
    summaryZh: '認識越南國技「踢毽子」(Đá cầu)、晨間公園運動、羽毛球約打與健身房重量訓練表達。',
    summaryEn: 'Explore Vietnamese traditional shuttlecock kicking (Đá cầu), badminton matches, park exercises, and gym workouts.',
    dialogues: [
      {
        speaker: 'Huy (球友)',
        role: 'npc',
        viet: 'Anh David! Anh có muốn vào chơi đá cầu cùng tụi em cho vui không?',
        zh: 'David 哥！你想不想跟我們一起踢毽子玩玩熱鬧一下？',
        en: 'David! Would you like to join us for shuttlecock kicking?',
        northTip: '「Đá cầu」(踢毽子) 是越南從學校到公園人人都會的全民運動。',
        southTip: '在傍晚的公園或廣場，經常能看到一群人圍成圓圈凌空對踢。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Hay quá! Nhưng anh mới tập chơi, sợ đá không khéo làm hỏng nhịp của mọi người.',
        zh: '好啊！但我才剛學著踢，怕踢得不好打亂大家的節奏。',
        en: 'Awesome! But I am a beginner, afraid I might mess up the rhythm for everyone.',
        northTip: '「mới tập chơi」= 剛學著玩/初學者。',
        southTip: '「không khéo」= 不靈巧/踢得不好。'
      },
      {
        speaker: 'Huy (球友)',
        role: 'npc',
        viet: 'Không sao đâu anh, vui là chính mà! Ngoài đá cầu ra, anh có hay chơi môn thể thao nào khác không?',
        zh: '沒關係的哥，開心最重要！除了踢毽子，你平時常做其他運動嗎？',
        en: 'No worries at all, fun is the main thing! Besides shuttlecock, do you play other sports?',
        northTip: '「Vui là chính」= 開心為主/好玩第一，經典口頭禪。',
        southTip: '「Môn thể thao」= 體育運動項目。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Anh thường chạy bộ buổi sáng và đi tập gym ba buổi mỗi tuần. Cuối tuần thỉnh thoảng đánh cầu lông.',
        zh: '我平時早上常跑步，每週去健身房鍛鍊三次。週末偶爾打羽毛球。',
        en: 'I usually jog in the morning and hit the gym 3 times a week. On weekends I occasionally play badminton.',
        northTip: '「Đánh cầu lông」= 打羽毛球（越南人極度熱愛的運動）。',
        southTip: '「Tập gym」= 健身房重訓健身。'
      }
    ],
    rolePlay: {
      userRoleZh: '運動夥伴 (David)',
      userRoleEn: 'Sports Partner (David)',
      partnerRoleZh: '球友 (Huy)',
      partnerRoleEn: 'Teammate (Huy)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Chiều mai sau giờ làm, anh có muốn đi đánh cầu lông cùng bọn em không?',
          partnerPromptZh: '明天下班後，哥想跟我們一起去打羽毛球嗎？',
          partnerPromptEn: 'Tomorrow after work, do you want to play badminton with us?',
          userOptions: [
            {
              id: 'sp1_opt1',
              textVi: 'Được chứ! Mai anh sẽ mang theo vợt cầu lông đi làm.',
              textZh: '好啊！明天我會帶羽球拍去上班。',
              textEn: 'Sure! Tomorrow I will bring my badminton racket to work.',
              isCorrect: true,
              feedbackZh: '太棒了！熱愛運動是融入越南同事圈的最佳途徑。',
              feedbackEn: 'Excellent! Sports is one of the best ways to bond with colleagues in Vietnam.'
            },
            {
              id: 'sp1_opt2',
              textVi: 'Tôi muốn mua thuốc giảm đau.',
              textZh: '我想買止痛藥。',
              textEn: 'I want to buy painkillers.',
              isCorrect: false,
              feedbackZh: '這是在藥局的對話喔！',
              feedbackEn: 'This is a pharmacy dialogue!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Đá cầu', zh: '踢毽子（越南國技）', en: 'Shuttlecock kicking', phonetic: '[da kəw]', note: '全民熱門運動' },
      { viet: 'Cầu lông', zh: '羽毛球', en: 'Badminton', phonetic: '[kəw loŋ]', note: '動詞用 đánh cầu lông' },
      { viet: 'Bóng đá', zh: '足球', en: 'Football / Soccer', phonetic: '[ɓɔŋ da]', note: '越南狂熱運動之王' },
      { viet: 'Chạy bộ', zh: '跑步 / 慢跑', en: 'Jogging / Running', phonetic: '[caːj ɓo]', note: '晨昏公園常見' },
      { viet: 'Tập gym', zh: '健身 / 健身房重訓', en: 'Gym workout / Fitness', phonetic: '[təp dʑim]', note: '現代年輕人日常' }
    ],
    culturalTips: {
      titleZh: '越南獨特的「踢毽子」與運動社交文化',
      titleEn: 'Vietnamese Shuttlecock & Sports Culture',
      tipsZh: [
        '越南的「Đá cầu」(踢毽子) 是一項具備高度技巧的體育運動，毽子使用特殊彈簧羽毛，腳法華麗，曾多次奪得世界冠軍。',
        '越南人對「Bóng đá」(足球) 擁有極致狂熱，國家隊獲勝時整座城市會徹夜舉行「Đi bão」(騎機車搖紅旗狂歡遊行)。'
      ],
      tipsEn: [
        'Đá cầu (shuttlecock) is a national sport played skillfully in parks across the country.',
        'Football (Bóng đá) triggers immense national passion, often celebrated by festive "Đi bão" parades.'
      ]
    }
  },

  // --- 5. 職場協作與工作請假 (Workplace & Office Collaboration) ---
  {
    id: 'workplace_collab',
    category: 'business',
    tagZh: '職場協作',
    tagEn: 'Workplace & Leave',
    icon: '💼',
    image: 'business.jpg',
    titleZh: '辦公室工作交接、請病假報備與會議進度匯報',
    titleEn: 'Workplace Handovers, Sick Leave Requests & Meeting Progress',
    titleVi: 'Công Việc, Xin Nghỉ Phép & Báo Cáo Tiến Độ',
    summaryZh: '學會辦公室與工廠車間實務溝通：請假（Nghỉ phép）、確認交期進度、協同跨部門合作。',
    summaryEn: 'Communicate effectively in office and factory settings: taking leave, progress updates, and team coordination.',
    dialogues: [
      {
        speaker: 'Trần (主管)',
        role: 'npc',
        viet: 'David, báo cáo tiến độ dự án tuần này đã hoàn thành chưa?',
        zh: 'David，本週的專案進度報告完成了嗎？',
        en: 'David, is this week’s project progress report completed yet?',
        northTip: '「Tiến độ」(進度)、「Dự án」(專案/項目) 均為常用漢越詞。',
        southTip: '在主管前匯報工作時，語氣要明確自信。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Dạ thưa anh, em đã gửi báo cáo qua email rồi ạ. Mọi hạng mục đều đang đúng tiến độ.',
        zh: '報告主管，我已經透過 Email 發送報告了。所有項目都在按進度進行中。',
        en: 'Yes sir, I have sent the report via email. All items are on schedule.',
        northTip: '對長官用「Dạ thưa... ạ」表達高度敬意與專業態度。',
        southTip: '「đúng tiến độ」= 按進度/如期。'
      },
      {
        speaker: 'Trần (主管)',
        role: 'npc',
        viet: 'Tốt lắm. Chiều mai 2 giờ chúng ta sẽ họp với khách hàng để chốt hợp đồng nhé.',
        zh: '非常好。明天下萬 2 點我們要跟客戶開會敲定合約。',
        en: 'Very good. Tomorrow at 2 PM we will meet with clients to finalize the contract.',
        northTip: '「Chốt」指敲定/定案（如 chốt hợp đồng 敲定合約, chốt đơn 結單）。',
        southTip: '商務上「họp」(開會) 與「hợp đồng」(合約) 是最高頻字彙。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Dạ vâng, em sẽ chuẩn bị đầy đủ tài liệu và phòng họp trước ạ.',
        zh: '收到，我會提前準備好完整資料與會議室。',
        en: 'Understood, I will prepare all documents and the meeting room in advance.',
        northTip: '「Dạ vâng」= 是的/遵命/收到，是標準嚴謹的職場回應。',
        southTip: '「Tài liệu」= 文件資料；「phòng họp」= 會議室。'
      }
    ],
    rolePlay: {
      userRoleZh: '專案幹部 (David)',
      userRoleEn: 'Project Specialist (David)',
      partnerRoleZh: '部門主管 (Trần)',
      partnerRoleEn: 'Department Manager (Trần)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'David, tài liệu cho buổi họp ngày mai đã chuẩn bị xong chưa em?',
          partnerPromptZh: 'David，明天會議的文件資料準備好了嗎？',
          partnerPromptEn: 'David, are the materials for tomorrow’s meeting ready yet?',
          userOptions: [
            {
              id: 'wc1_opt1',
              textVi: 'Dạ thưa anh, em đã chuẩn bị xong và in sẵn tài liệu rồi ạ.',
              textZh: '報告主管，我已經準備完畢並且印好資料了。',
              textEn: 'Yes sir, I have prepared everything and printed the documents.',
              isCorrect: true,
              feedbackZh: '專業且負責任的完美答覆！',
              feedbackEn: 'Professional, reliable and respectful reply!'
            },
            {
              id: 'wc1_opt2',
              textVi: 'Cho tôi một ly trà đá.',
              textZh: '給我一杯冰茶。',
              textEn: 'Give me an iced tea.',
              isCorrect: false,
              feedbackZh: '在職場匯報中請勿回答無關內容。',
              feedbackEn: 'Irrelevant reply in a work meeting.'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Báo cáo', zh: '報告 / 匯報', en: 'Report', phonetic: '[ɓaːw kaːw]', note: '漢越詞「報告」' },
      { viet: 'Tiến độ', zh: '進度', en: 'Progress / Schedule', phonetic: '[tiən do]', note: '專案管理必備' },
      { viet: 'Xin nghỉ phép', zh: '請假 / 請年假', en: 'Request leave / Take time off', phonetic: '[sin ŋi fɛp]', note: '人資日常' },
      { viet: 'Họp', zh: '開會 / 會議', en: 'Meeting', phonetic: '[hɔp]', note: '職場核心動詞' },
      { viet: 'Tài liệu', zh: '文件 / 資料', en: 'Documents / Materials', phonetic: '[taːj liəw]', note: '漢越詞「資料」' }
    ],
    culturalTips: {
      titleZh: '越南職場溝通與請假禮儀',
      titleEn: 'Workplace Communication & Leave Etiquette in Vietnam',
      tipsZh: [
        '在越南職場中向主管報告時，開頭加上「Dạ thưa [稱謂]...」並以「ạ」結尾，能展現出極高的職業素養與對長官的敬重。',
        '若需請病假或事假，通常需提前向直屬主管（Quản lý / Trưởng phòng）發送 Zalo 訊息或 Email 報備，並由同事協同交接當日緊急事務。'
      ],
      tipsEn: [
        'Using "Dạ thưa..." and "ạ" shows high professional respect when reporting to managers.',
        'Requesting leave is typically done in advance via formal email or direct Zalo notification.'
      ]
    }
  },

  // --- 6. 旅遊景點與租借機車 (Travel & Tour Booking) ---
  {
    id: 'travel_tour',
    category: 'travel',
    tagZh: '旅遊包車',
    tagEn: 'Tours & Rentals',
    icon: '🛵',
    image: 'travel.jpg',
    titleZh: '景點門票購買、租借機車 (Thuê xe máy) 與一日遊諮詢',
    titleEn: 'Attraction Tickets, Motorbike Rental & Day Tour Booking',
    titleVi: 'Đặt Tour Du Lịch, Mua Vé & Thuê Xe Máy',
    summaryZh: '掌握在峴港、河內、胡志明或大叻租機車、確認油箱、押金、頭盔與購買觀光景點門票實戰對話。',
    summaryEn: 'Rent motorbikes, check fuel/helmets, leave deposit, and book day tours in Da Nang, Hanoi, Saigon, or Da Lat.',
    dialogues: [
      {
        speaker: 'Chủ tiệm (店主)',
        role: 'npc',
        viet: 'Chào em, em muốn thuê xe máy số hay xe ga? Thuê mấy ngày?',
        zh: '你好，你想租打檔車還是自動變速機車 (Scooter)？租幾天？',
        en: 'Hello, do you want to rent a manual or automatic scooter? For how many days?',
        northTip: '「Xe số」= 打檔機車（省油/爬坡好）；「Xe ga」= 自動變速速克達。',
        southTip: '在峴港 (Đà Nẵng)、富國島租機車是自由行最普遍的方式。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Cho em thuê một chiếc xe ga trong ba ngày. Giá thuê một ngày là bao nhiêu ạ?',
        zh: '給我租一輛自動變速機車 (Xe ga)，租三天。一天的租金是多少錢呢？',
        en: 'I want to rent an automatic scooter for three days. How much is the daily rental?',
        northTip: '「Xe ga」騎乘方便，適合在市區或平坦觀光路段。',
        southTip: '「Giá thuê」= 租金。'
      },
      {
        speaker: 'Chủ tiệm (店主)',
        role: 'npc',
        viet: 'Xe ga một trăm năm mươi nghìn một ngày. Bên anh kèm hai mũ bảo hiểm và áo mưa nhé.',
        zh: '自動機車一天十五萬盾 (150,000 VND)。我們附送兩頂安全帽和雨衣喔。',
        en: 'Automatic is 150,000 VND per day. We include two helmets and raincoats.',
        northTip: '「Mũ bảo hiểm」(北越) / 「Nón bảo hiểm」(南越) 指安全帽。',
        southTip: '在越南騎機車未戴安全帽會被交警嚴格開罰。'
      },
      {
        speaker: 'David (學習者)',
        role: 'learner',
        viet: 'Dạ tốt quá! Em cần đặt cọc hộ chiếu hay tiền mặt ạ?',
        zh: '太好了！我需要押護照還是付現金押金呢？',
        en: 'Great! Do I need to leave my passport or cash as deposit?',
        northTip: '「Đặt cọc」指付押金/訂金（漢越詞「定閣」）。',
        southTip: '一般飯店租車免押護照，外部車行常需押護照影本或現金。'
      }
    ],
    rolePlay: {
      userRoleZh: '自由行旅客 (David)',
      userRoleEn: 'Traveler (David)',
      partnerRoleZh: '車行老闆 (Chủ tiệm)',
      partnerRoleEn: 'Rental Owner (Chủ tiệm)',
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: 'Em thuê xe ga hay xe số? Em thuê mấy ngày?',
          partnerPromptZh: '你要租自動速克達還是打檔車？租幾天？',
          partnerPromptEn: 'Do you rent an automatic scooter or manual? For how many days?',
          userOptions: [
            {
              id: 'tt1_opt1',
              textVi: 'Cho em thuê một chiếc xe ga trong 2 ngày nhé.',
              textZh: '請給我租一輛自動速克達，租 2 天。',
              textEn: 'I would like to rent an automatic scooter for 2 days please.',
              isCorrect: true,
              feedbackZh: '非常標準清楚的租車表達！',
              feedbackEn: 'Clear and standard vehicle rental sentence!'
            },
            {
              id: 'tt1_opt2',
              textVi: 'Tôi muốn đổi tiền USD sang VND.',
              textZh: '我想把美金換成越南盾。',
              textEn: 'I want to exchange USD to VND.',
              isCorrect: false,
              feedbackZh: '這是在銀行的換匯句子喔！',
              feedbackEn: 'This is a currency exchange phrase!'
            }
          ]
        }
      ]
    },
    vocab: [
      { viet: 'Thuê xe máy', zh: '租機車', en: 'Rent a motorbike', phonetic: '[tʰwe sɛ maːj]', note: '自由行必備技能' },
      { viet: 'Xe ga', zh: '自動變速速克達 (Scooter)', en: 'Automatic scooter', phonetic: '[sɛ ɣa]', note: '免換檔最好騎' },
      { viet: 'Xe số', zh: '打檔機車', en: 'Manual / Semi-auto motorbike', phonetic: '[sɛ so]', note: '爬坡省油首選' },
      { viet: 'Mũ bảo hiểm / Nón bảo hiểm', zh: '安全帽', en: 'Helmet', phonetic: '[mu ɓaːw hiəm / nɔn ɓaːw hiəm]', note: '騎車必戴' },
      { viet: 'Đặt cọc', zh: '押金 / 訂金', en: 'Deposit', phonetic: '[daːt kaːwk]', note: '漢越詞「定閣」' }
    ],
    culturalTips: {
      titleZh: '越南自由行機車租借與交通常識',
      titleEn: 'Motorbike Rentals & Traffic Tips in Vietnam',
      tipsZh: [
        '在越南租機車時，務必先檢查煞車 (Thắng xe)、大燈、喇叭以及車身原有刮痕，並向店家確認就近的加油站位置 (Cây xăng)。',
        '越南規定騎機車所有乘客必須全程佩戴安全帽 (Mũ/Nón bảo hiểm)，且市區限速通常為 40~50 km/h。'
      ],
      tipsEn: [
        'Always check brakes, lights, horns and fuel before riding a rented motorbike.',
        'Helmets are mandatory by law for both drivers and pillion passengers in Vietnam.'
      ]
    }
  }
];

// Combine scenarios
const updatedScenarios = [...situationalScenarios];
newScenarios.forEach(newSc => {
  const existingIdx = updatedScenarios.findIndex(s => s.id === newSc.id);
  if (existingIdx >= 0) {
    updatedScenarios[existingIdx] = newSc;
  } else {
    updatedScenarios.push(newSc);
  }
});

// Update Categories list in situationalScenarios
const updatedCategories = [
  { id: 'all', labelZh: '全部情境 (' + updatedScenarios.length + '個)', labelEn: 'All Scenarios (' + updatedScenarios.length + ')' },
  { id: 'meeting', labelZh: '🤝 初次見面', labelEn: '🤝 First Meeting' },
  { id: 'chat', labelZh: '💬 溝通閒聊', labelEn: '💬 Small Talk' },
  { id: 'travel', labelZh: '✈️ 旅遊出行', labelEn: '✈️ Travel & Transport' },
  { id: 'dining', labelZh: '🍜 餐飲美食', labelEn: '🍜 Food & Dining' },
  { id: 'leisure', labelZh: '🎮 興趣休閒', labelEn: '🎮 Hobbies & Leisure' },
  { id: 'sports', labelZh: '⚽ 運動健身', labelEn: '⚽ Sports & Fitness' },
  { id: 'business', labelZh: '💼 職場工作', labelEn: '💼 Business & Work' },
  { id: 'health', labelZh: '💊 醫療健康', labelEn: '💊 Health & Medical' },
  { id: 'emergency', labelZh: '🚨 緊急求助', labelEn: '🚨 Emergency & Police' }
];

console.log('Updated situationalScenarios count:', updatedScenarios.length);

// Write updated situationalScenarios.js
const situationalScenariosFile = path.resolve('src/data/situationalScenarios.js');
const situationalScenariosCode = `/**
 * Comprehensive Situational Vietnamese Dataset (${updatedScenarios.length}大實戰情境全能越語數據庫)
 * Standardized for Taiwan learners (ZH Mode) & Global English track (EN Mode)
 * Includes dialogue scripts, interactive role-play questions, vocabulary deck, and cultural tips.
 */

export const scenarioCategories = ${JSON.stringify(updatedCategories, null, 2)};

export const situationalScenarios = ${JSON.stringify(updatedScenarios, null, 2)};
`;

fs.writeFileSync(situationalScenariosFile, situationalScenariosCode, 'utf8');
console.log('✅ Successfully updated situationalScenarios.js');
