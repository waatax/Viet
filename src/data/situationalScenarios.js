/**
 * Comprehensive Situational Vietnamese Dataset (22大實戰情境全能越語數據庫)
 * Standardized for Taiwan learners (ZH Mode) & Global English track (EN Mode)
 * Includes dialogue scripts, interactive role-play questions, vocabulary deck, and cultural tips.
 */

export const scenarioCategories = [
  {
    "id": "all",
    "labelZh": "全部情境 (22個)",
    "labelEn": "All Scenarios (22)"
  },
  {
    "id": "meeting",
    "labelZh": "🤝 初次見面",
    "labelEn": "🤝 First Meeting"
  },
  {
    "id": "chat",
    "labelZh": "💬 溝通閒聊",
    "labelEn": "💬 Small Talk"
  },
  {
    "id": "travel",
    "labelZh": "✈️ 旅遊出行",
    "labelEn": "✈️ Travel & Transport"
  },
  {
    "id": "dining",
    "labelZh": "🍜 餐飲美食",
    "labelEn": "🍜 Food & Dining"
  },
  {
    "id": "leisure",
    "labelZh": "🎮 興趣休閒",
    "labelEn": "🎮 Hobbies & Leisure"
  },
  {
    "id": "sports",
    "labelZh": "⚽ 運動健身",
    "labelEn": "⚽ Sports & Fitness"
  },
  {
    "id": "business",
    "labelZh": "💼 職場工作",
    "labelEn": "💼 Business & Work"
  },
  {
    "id": "health",
    "labelZh": "💊 醫療健康",
    "labelEn": "💊 Health & Medical"
  },
  {
    "id": "emergency",
    "labelZh": "🚨 緊急求助",
    "labelEn": "🚨 Emergency & Police"
  }
];

export const situationalScenarios = [
  {
    "id": "vietnam_geography",
    "category": "travel",
    "tagZh": "風土民情",
    "tagEn": "Culture & Travel",
    "icon": "🇻🇳",
    "image": "vietnam_map.jpg",
    "titleZh": "越南風土民情與三大區域",
    "titleEn": "Vietnamese Culture & Regions",
    "titleVi": "Văn Hóa Và Các Vùng Miền Việt Nam",
    "summaryZh": "深入了解越南北、中、南部的風土民情，並探索各大著名城市的必訪景點。",
    "summaryEn": "Dive deep into the culture and local customs of Northern, Central, and Southern Vietnam, and explore top attractions.",
    "cityGuides": {
      "descriptionZh": "越南地形狹長，北、中、南越在氣候、飲食與文化上都有著鮮明的差異。點擊各區域深入了解：",
      "descriptionEn": "Vietnam's long geography results in distinct climates, cuisines, and cultures across the North, Center, and South.",
      "regions": [
        {
          "nameVi": "Miền Bắc",
          "nameZh": "北越 (Miền Bắc)",
          "nameEn": "Northern Vietnam",
          "climateZh": "四季分明，冬天 (12-2月) 會冷，甚至山區會下雪。",
          "climateEn": "Four distinct seasons. Winters (Dec-Feb) can be quite cold, with snow in the mountains.",
          "cultureZh": "保留最多傳統文化與歷史古蹟。飲食偏清淡，注重原汁原味，不嗜甜與辣。",
          "cultureEn": "Preserves traditional culture and history. Cuisine is light, focusing on original flavors, not overly sweet or spicy.",
          "cities": [
            {
              "nameZh": "河內 (Hà Nội)",
              "nameEn": "Hanoi",
              "descZh": "越南首都，擁有千年歷史的文化古城，步調較為悠閒。",
              "descEn": "The capital city, a thousand-year-old cultural hub with a relaxed pace.",
              "attractions": ["Phố Cổ (三十六古街)", "Hồ Hoàn Kiếm (還劍湖)", "Văn Miếu (文廟)"]
            },
            {
              "nameZh": "下龍灣 (Hạ Long)",
              "nameEn": "Ha Long",
              "descZh": "世界自然遺產，以壯麗的石灰岩喀斯特地貌聞名。",
              "descEn": "A World Heritage site famous for its breathtaking limestone karsts.",
              "attractions": ["Vịnh Hạ Long (下龍灣乘船)", "Hang Sửng Sốt (驚訝洞)"]
            },
            {
              "nameZh": "沙壩 (Sa Pa)",
              "nameEn": "Sapa",
              "descZh": "西北部高原小鎮，以梯田與少數民族文化著稱。",
              "descEn": "Northwestern highland town known for terraced rice fields and ethnic minorities.",
              "attractions": ["Đỉnh Fansipan (番西邦峰)", "Bản Cát Cát (貓貓村)"]
            }
          ]
        },
        {
          "nameVi": "Miền Trung",
          "nameZh": "中越 (Miền Trung)",
          "nameEn": "Central Vietnam",
          "climateZh": "乾濕季分明，夏季炎熱，秋季常有颱風與暴雨。",
          "climateEn": "Distinct dry and wet seasons. Hot summers and stormy autumns.",
          "cultureZh": "昔日阮朝皇室所在地。當地人性格刻苦耐勞。飲食口味偏重，極度嗜辣。",
          "cultureEn": "Home to the former Nguyen Dynasty. Locals are known for resilience. Cuisine is highly flavorful and very spicy.",
          "cities": [
            {
              "nameZh": "峴港 (Đà Nẵng)",
              "nameEn": "Da Nang",
              "descZh": "越南第三大城，以絕美海岸線與現代化設施著稱，是最宜居城市。",
              "descEn": "Vietnam's 3rd largest city, famous for beautiful coastlines and modern amenities.",
              "attractions": ["Bà Nà Hills (巴拿山/佛手橋)", "Cầu Rồng (龍橋)", "Biển Mỹ Khê (美溪沙灘)"]
            },
            {
              "nameZh": "會安 (Hội An)",
              "nameEn": "Hoi An",
              "descZh": "世界文化遺產，完美保留15至19世紀的傳統貿易港口風貌，夜間燈籠極美。",
              "descEn": "World Heritage site preserving a 15th-19th century trading port, famous for lanterns.",
              "attractions": ["Phố cổ Hội An (會安古鎮)", "Chùa Cầu (日本橋)"]
            },
            {
              "nameZh": "順化 (Huế)",
              "nameEn": "Hue",
              "descZh": "越南末代王朝的古都，充滿歷史滄桑與皇城底蘊。",
              "descEn": "The ancient capital of Vietnam's last dynasty, full of imperial history.",
              "attractions": ["Đại Nội (順化皇城)", "Lăng Tự Đức (嗣德陵)"]
            }
          ]
        },
        {
          "nameVi": "Miền Nam",
          "nameZh": "南越 (Miền Nam)",
          "nameEn": "Southern Vietnam",
          "climateZh": "終年炎熱，僅分旱季與雨季 (5-11月常有午後雷陣雨)。",
          "climateEn": "Hot year-round, divided only into dry and rainy seasons (May-Nov).",
          "cultureZh": "經濟中心，文化多元開放。當地人性格熱情大方。飲食偏甜，且喝任何飲料都喜歡加大量冰塊。",
          "cultureEn": "Economic hub with a diverse and open culture. Locals are welcoming. Cuisine is sweeter and drinks are served with lots of ice.",
          "cities": [
            {
              "nameZh": "胡志明市 (TP. HCM)",
              "nameEn": "Ho Chi Minh City",
              "descZh": "越南最大城市與經濟樞紐，充滿活力、高樓與法式殖民風情。",
              "descEn": "Vietnam's largest city, vibrant and bustling with French colonial charm.",
              "attractions": ["Nhà thờ Đức Bà (紅教堂)", "Bưu điện Trung tâm (中央郵局)", "Chợ Bến Thành (檳城市場)"]
            },
            {
              "nameZh": "芹苴 (Cần Thơ)",
              "nameEn": "Can Tho",
              "descZh": "湄公河三角洲最大城市，體驗濃厚的水鄉澤國風情。",
              "descEn": "Largest city in the Mekong Delta, famous for water-based culture.",
              "attractions": ["Chợ nổi Cái Răng (丐冷水上市場)", "Bến Ninh Kiều (寧橋碼頭)"]
            },
            {
              "nameZh": "富國島 (Phú Quốc)",
              "nameEn": "Phu Quoc",
              "descZh": "越南最大的島嶼，免簽證的度假勝地，擁有絕美夕陽。",
              "descEn": "Vietnam's largest island and a visa-free tropical paradise with stunning sunsets.",
              "attractions": ["Grand World (富國大世界)", "Cáp treo Hòn Thơm (跨海纜車)"]
            }
          ]
        }
      ]
    },
    "dialogues": [
      {
        "speaker": "Du khách (遊客)",
        "role": "learner",
        "viet": "Tôi muốn đi du lịch Việt Nam. Bạn có thể giới thiệu cho tôi vài thành phố được không?",
        "zh": "我想去越南旅遊，你能介紹幾個城市給我嗎？",
        "en": "I want to travel to Vietnam. Can you recommend some cities to me?",
        "northTip": "「Du lịch」是旅遊；「Giới thiệu」是介紹。",
        "southTip": "「Vài」是幾個的意思。"
      },
      {
        "speaker": "Bạn địa phương (當地朋友)",
        "role": "npc",
        "viet": "Tất nhiên rồi! Nếu bạn thích thời tiết mát mẻ và văn hóa truyền thống, hãy đến Hà Nội ở miền Bắc.",
        "zh": "當然！如果你喜歡涼爽的天氣和傳統文化，就去北部的河內。",
        "en": "Of course! If you like cool weather and traditional culture, go to Hanoi in the North.",
        "northTip": "北越四季分明，冬天是真的會冷。",
        "southTip": "「Mát mẻ」指涼爽的。"
      },
      {
        "speaker": "Du khách (遊客)",
        "role": "learner",
        "viet": "Nghe hay quá! Thế còn miền Trung và miền Nam thì sao?",
        "zh": "聽起來很棒！那中部和南部呢？",
        "en": "Sounds great! What about the Central and South regions?",
        "northTip": "「Thế còn... thì sao?」是「那...呢？」的常用句型。",
        "southTip": "南部人更常說「Vậy còn... thì sao?」"
      },
      {
        "speaker": "Bạn địa phương (當地朋友)",
        "role": "npc",
        "viet": "Miền Trung có Đà Nẵng và Hội An rất đẹp. Còn miền Nam thì bạn nhất định phải đến Thành phố Hồ Chí Minh nhộn nhịp.",
        "zh": "中部有峴港和會安非常美。南部的話你一定要去熱鬧的胡志明市。",
        "en": "The Central region has beautiful Da Nang and Hoi An. In the South, you must visit bustling Ho Chi Minh City.",
        "northTip": "「Nhất định」是一定；「Nhộn nhịp」是熱鬧、熙熙攘攘的意思。",
        "southTip": "南部人也常將胡志明市簡稱為「Sài Gòn」(西貢)。"
      },
      {
        "speaker": "Du khách (遊客)",
        "role": "learner",
        "viet": "Tôi rất thích ăn cay. Vậy tôi nên đi đâu?",
        "zh": "我非常喜歡吃辣。那我應該去哪裡？",
        "en": "I really like eating spicy food. So where should I go?",
        "northTip": "「Ăn cay」是吃辣。",
        "southTip": "越南各地對辣的接受度差異很大。"
      },
      {
        "speaker": "Bạn địa phương (當地朋友)",
        "role": "npc",
        "viet": "Bạn nên đến miền Trung! Đồ ăn ở Huế và Đà Nẵng rất cay và đậm đà.",
        "zh": "你應該去中部！順化和峴港的食物非常辣且重口味。",
        "en": "You should go to the Central region! Food in Hue and Da Nang is very spicy and flavorful.",
        "northTip": "「Đậm đà」形容食物味道濃郁、重口味。",
        "southTip": "北越偏清淡，南越偏甜，中越才是吃辣的天堂！"
      }
    ],
    "rolePlay": {
      "userRoleZh": "遊客 (Du khách)",
      "userRoleEn": "Tourist (Du khách)",
      "partnerRoleZh": "當地導遊 (Hướng dẫn viên)",
      "partnerRoleEn": "Local Guide (Hướng dẫn viên)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào bạn, bạn muốn khám phá vùng nào của Việt Nam trước?",
          "partnerPromptZh": "你好，你想先探索越南的哪個地區？",
          "partnerPromptEn": "Hello, which region of Vietnam do you want to explore first?",
          "userOptions": [
            {
              "id": "geo1_opt1",
              "textVi": "Tôi muốn đi miền Bắc để xem Vịnh Hạ Long.",
              "textZh": "我想去北部看下龍灣。",
              "textEn": "I want to go to the North to see Ha Long Bay.",
              "isCorrect": true,
              "feedbackZh": "非常正確！下龍灣就在北越。",
              "feedbackEn": "Very correct! Ha Long Bay is in the North."
            },
            {
              "id": "geo1_opt2",
              "textVi": "Tôi muốn đi miền Nam để xem Vịnh Hạ Long.",
              "textZh": "我想去南部看下龍灣。",
              "textEn": "I want to go to the South to see Ha Long Bay.",
              "isCorrect": false,
              "feedbackZh": "地理位置錯囉！下龍灣在北越，不在南越。",
              "feedbackEn": "Wrong geography! Ha Long Bay is in the North, not the South."
            },
            {
              "id": "geo1_opt3",
              "textVi": "Tôi muốn ăn phở.",
              "textZh": "我想吃河粉。",
              "textEn": "I want to eat pho.",
              "isCorrect": false,
              "feedbackZh": "雖然河粉很好吃，但導遊問的是你想去哪個地區喔。",
              "feedbackEn": "While pho is delicious, the guide is asking which region you want to visit."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Bạn có thích ăn đồ ăn có vị ngọt không? Hay bạn thích ăn cay?",
          "partnerPromptZh": "你喜歡吃甜的食物嗎？還是喜歡吃辣？",
          "partnerPromptEn": "Do you like sweet food? Or do you like it spicy?",
          "userOptions": [
            {
              "id": "geo2_opt1",
              "textVi": "Tôi rất thích ăn cay. Chắc tôi hợp với đồ ăn miền Trung.",
              "textZh": "我非常喜歡吃辣。我猜我適合中部的食物。",
              "textEn": "I really like spicy food. I guess I'm suited for Central food.",
              "isCorrect": true,
              "feedbackZh": "完全正確！中越 (如順化) 是最愛吃辣的地區。",
              "feedbackEn": "Absolutely right! Central Vietnam is known for spicy food."
            },
            {
              "id": "geo2_opt2",
              "textVi": "Tôi thích ăn cay, nên tôi sẽ đến miền Bắc.",
              "textZh": "我喜歡吃辣，所以我會去北部。",
              "textEn": "I like spicy food, so I will go to the North.",
              "isCorrect": false,
              "feedbackZh": "北越的食物口味偏清淡，不太吃辣喔！",
              "feedbackEn": "Northern food is actually quite mild and not very spicy!"
            },
            {
              "id": "geo2_opt3",
              "textVi": "Tôi không thích thời tiết lạnh.",
              "textZh": "我不喜歡冷的天氣。",
              "textEn": "I don't like cold weather.",
              "isCorrect": false,
              "feedbackZh": "這沒有回答到導遊關於口味的問題。",
              "feedbackEn": "This doesn't answer the guide's question about flavor preferences."
            }
          ]
        }
      ]
    },
    "vocabulary": [
      {
        "vi": "Miền Bắc",
        "zh": "北部",
        "en": "North",
        "ipa": "[miən˨˩ ɓak̚˦˧˥]"
      },
      {
        "vi": "Miền Trung",
        "zh": "中部",
        "en": "Central",
        "ipa": "[miən˨˩ ʈuŋ˧]"
      },
      {
        "vi": "Miền Nam",
        "zh": "南部",
        "en": "South",
        "ipa": "[miən˨˩ naːm˧]"
      },
      {
        "vi": "Thủ đô",
        "zh": "首都",
        "en": "Capital",
        "ipa": "[tʰu˧˩ ɗo˧]"
      },
      {
        "vi": "Nhộn nhịp",
        "zh": "熱鬧",
        "en": "Bustling",
        "ipa": "[ɲon˧˨ ɲip̚˧˨]"
      },
      {
        "vi": "Đậm đà",
        "zh": "重口味/味道濃",
        "en": "Flavorful",
        "ipa": "[ɗəm˧˨ ɗaː˨˩]"
      }
    ],
    "culturalTip": {
      "titleZh": "🇻🇳 跨越一千公里的文化差異",
      "titleEn": "Cultural Differences Across 1000km",
      "contentZh": "越南地形像一個字母「S」，長達一千六百多公里，這造就了北中南巨大的差異。性格上，北越人傳統、注重面子與儲蓄；南越人開放、樂天、及時行樂；中越人因氣候嚴峻而特別刻苦耐勞。語言上，雖然都寫一樣的字，但北中南的口音 (Giọng) 完全不同，北越發音字正腔圓，南越連音多且較為隨性，而中越的腔調則常讓南北越人也聽不懂！",
      "contentEn": "Vietnam's 'S' shaped geography spans over 1600km, creating huge regional differences. Northerners are traditional and focus on saving; Southerners are open, optimistic, and live in the moment; Central people are resilient due to harsh weather. Linguistically, while the writing is the same, the accents (Giọng) differ wildly. The North is precise, the South is relaxed, and the Central accent can be hard even for other Vietnamese to understand!",
      "proTipZh": "✨ 避坑：當你跟南越人提到「胡志明市」時，他們通常更喜歡稱其舊名「西貢」(Sài Gòn)。",
      "proTipEn": "✨ Pro Tip: When talking to Southerners, they often prefer the old name 'Saigon' over 'Ho Chi Minh City'."
    }
  },
  {
    "id": "business_negotiation",
    "category": "business",
    "tagZh": "商業交涉",
    "tagEn": "Business Negotiation",
    "icon": "💼",
    "image": "business.jpg",
    "titleZh": "辦公室會議與合約交涉",
    "titleEn": "Office Meetings & Contract Negotiation",
    "titleVi": "Thương Lượng Kinh Doanh Tại Văn Phòng",
    "summaryZh": "學習如何在越南辦公室進行專業的商業交涉，包含討論價格、合約條款與表達合作意願。",
    "summaryEn": "Learn how to negotiate professionally in a Vietnamese office, including discussing prices, contract terms, and expressing intent to cooperate.",
    "dialogues": [
      {
        "speaker": "Đối tác (合作夥伴)",
        "role": "npc",
        "viet": "Chào anh, rất vui được đón tiếp anh tại văn phòng công ty chúng tôi.",
        "zh": "您好，很高興能在我們公司辦公室接待您。",
        "en": "Hello, we are very glad to welcome you to our company's office.",
        "northTip": "「Đón tiếp」是非常正式的「接待、迎接」用語。",
        "southTip": "商務場合通常會用「Công ty chúng tôi」來代表「本公司」。"
      },
      {
        "speaker": "Khách (訪客)",
        "role": "learner",
        "viet": "Chào chị, cảm ơn chị đã dành thời gian. Chúng ta có thể bắt đầu thảo luận về hợp đồng mới được không?",
        "zh": "您好，謝謝您撥冗。我們可以開始討論新合約了嗎？",
        "en": "Hello, thank you for your time. Can we start discussing the new contract?",
        "northTip": "「Dành thời gian」意指撥出時間；「Hợp đồng」為合約。",
        "southTip": "「Thảo luận」是討論的意思，常搭配「về」(關於) 使用。"
      },
      {
        "speaker": "Đối tác (合作夥伴)",
        "role": "npc",
        "viet": "Tất nhiên rồi. Về mức giá, chúng tôi hy vọng anh có thể giảm thêm 5% nữa.",
        "zh": "當然。關於價格，我們希望您能再降5%。",
        "en": "Of course. Regarding the price, we hope you can reduce it by another 5%.",
        "northTip": "「Giảm giá」是降價，交涉時很常聽到對手要求「giảm thêm」(再降)。",
        "southTip": "「Mức giá」代表價格水位、價位。"
      },
      {
        "speaker": "Khách (訪客)",
        "role": "learner",
        "viet": "Mức giá này đã là tốt nhất rồi. Tuy nhiên, nếu công ty đặt hàng với số lượng lớn hơn, chúng tôi sẽ xem xét.",
        "zh": "這個價格已經是最好的了。不過，如果貴公司下更大數量的訂單，我們會考慮。",
        "en": "This price is already the best. However, if the company places a larger order, we will consider it.",
        "northTip": "「Số lượng lớn」指大量；「Xem xét」是非常好用的商務詞彙「考慮、審酌」。",
        "southTip": "「Đặt hàng」是下單、訂貨的意思。"
      },
      {
        "speaker": "Đối tác (合作夥伴)",
        "role": "npc",
        "viet": "Tuyệt vời, vậy chúng ta sẽ ký hợp đồng vào ngày mai nhé. Hợp tác vui vẻ!",
        "zh": "太棒了，那我們明天簽約吧。合作愉快！",
        "en": "Excellent, then we will sign the contract tomorrow. Happy cooperating!",
        "northTip": "「Ký hợp đồng」是簽合約。",
        "southTip": "「Hợp tác vui vẻ」是商務結束時必說的「合作愉快」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "訪客/供應商 (Khách)",
      "userRoleEn": "Visitor/Supplier (Khách)",
      "partnerRoleZh": "合作夥伴 (Đối tác)",
      "partnerRoleEn": "Business Partner (Đối tác)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào anh, rất vui được đón tiếp anh tại văn phòng công ty chúng tôi.",
          "partnerPromptZh": "您好，很高興能在我們公司辦公室接待您。",
          "partnerPromptEn": "Hello, we are very glad to welcome you to our company's office.",
          "userOptions": [
            {
              "id": "biz1_opt1",
              "textVi": "Chào chị. Chúng ta có thể bắt đầu thảo luận về hợp đồng mới được không?",
              "textZh": "您好。我們可以開始討論新合約了嗎？",
              "textEn": "Hello. Can we start discussing the new contract?",
              "isCorrect": true,
              "feedbackZh": "非常得體！直接切入重點，展現專業度。",
              "feedbackEn": "Very appropriate! Getting straight to the point shows professionalism."
            },
            {
              "id": "biz1_opt2",
              "textVi": "Chào chị. Nhà vệ sinh ở đâu?",
              "textZh": "妳好。廁所在哪裡？",
              "textEn": "Hello. Where is the restroom?",
              "isCorrect": false,
              "feedbackZh": "雖然是生活用語，但在商務寒暄後直接問這個略顯突兀。",
              "feedbackEn": "A bit abrupt right after a formal business greeting."
            },
            {
              "id": "biz1_opt3",
              "textVi": "Cảm ơn. Tôi muốn uống bia.",
              "textZh": "謝謝。我想喝啤酒。",
              "textEn": "Thanks. I want to drink beer.",
              "isCorrect": false,
              "feedbackZh": "在辦公室會議中要啤酒是非常不恰當的！",
              "feedbackEn": "Asking for beer during an office meeting is highly inappropriate!"
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Về mức giá, chúng tôi hy vọng anh có thể giảm thêm 5% nữa.",
          "partnerPromptZh": "關於價格，我們希望您能再降5%。",
          "partnerPromptEn": "Regarding the price, we hope you can reduce it by another 5%.",
          "userOptions": [
            {
              "id": "biz2_opt1",
              "textVi": "Mức giá này đã là tốt nhất rồi. Nếu công ty đặt hàng số lượng lớn hơn, chúng tôi sẽ xem xét.",
              "textZh": "這個價格已經是最好的了。如果貴公司大量下單，我們會考慮。",
              "textEn": "This price is the best. If you order in larger quantities, we will consider it.",
              "isCorrect": true,
              "feedbackZh": "談判滿分！委婉拒絕並提出交換條件。",
              "feedbackEn": "Perfect negotiation! Politely declining while offering a counter-condition."
            },
            {
              "id": "biz2_opt2",
              "textVi": "Không, giá quá đắt.",
              "textZh": "不，價格太貴了。",
              "textEn": "No, the price is too expensive.",
              "isCorrect": false,
              "feedbackZh": "對方是在要求你降價，所以你說「價格太貴」邏輯不通喔。",
              "feedbackEn": "They are asking you to lower the price, so saying 'too expensive' doesn't make sense here."
            },
            {
              "id": "biz2_opt3",
              "textVi": "Tuyệt vời, hợp tác vui vẻ!",
              "textZh": "太棒了，合作愉快！",
              "textEn": "Excellent, happy cooperating!",
              "isCorrect": false,
              "feedbackZh": "對方要求砍價，直接說太棒了會讓公司虧錢啊！",
              "feedbackEn": "Agreeing enthusiastically to a price cut might cost your company money!"
            }
          ]
        }
      ]
    },
    "vocabulary": [
      {
        "vi": "Hợp đồng",
        "zh": "合約",
        "en": "Contract",
        "ipa": "[həːp̚˧˨ ɗoŋ˨˩]"
      },
      {
        "vi": "Thương lượng",
        "zh": "協商 / 談判",
        "en": "Negotiate",
        "ipa": "[tʰɨəŋ˧ lɨəŋ˧˨]"
      },
      {
        "vi": "Đối tác",
        "zh": "合作夥伴",
        "en": "Partner",
        "ipa": "[ɗoj˦˧˥ taːk̚˦˧˥]"
      },
      {
        "vi": "Giảm giá",
        "zh": "降價 / 折扣",
        "en": "Discount",
        "ipa": "[zaːm˧˩ zaː˦˧˥]"
      },
      {
        "vi": "Số lượng",
        "zh": "數量",
        "en": "Quantity",
        "ipa": "[so˦˧˥ lɨəŋ˧˨]"
      },
      {
        "vi": "Ký",
        "zh": "簽名 / 簽署",
        "en": "Sign",
        "ipa": "[ki˦˧˥]"
      }
    ],
    "culturalTip": {
      "titleZh": "🇻🇳 越南商務文化：關係先行",
      "titleEn": "Vietnamese Business Culture: Relationships First",
      "contentZh": "在越南的商業環境中，「建立關係」(Xây dựng mối quan hệ) 非常重要。在正式進入合約談判前，通常會有適度的閒聊 (寒暄家庭、興趣等)。合約的簽署往往不是交涉的終點，而是長期合作關係的起點。此外，商務談判中保持禮貌與面子 (Thể diện) 是關鍵，直接的拒絕較少見，通常會用「Chúng tôi sẽ xem xét」(我們會考慮) 來委婉表達。",
      "contentEn": "In Vietnam, building relationships is crucial. Formal negotiations are often preceded by small talk. Signing a contract is seen as the beginning of a long-term relationship, not the end of a deal. Saving face (Thể diện) is important, so direct refusals are rare; instead, you'll hear 'Chúng tôi sẽ xem xét' (We will consider it).",
      "proTipZh": "✨ 避坑：雙手遞交名片 (Danh thiếp) 並仔細閱讀是基本的商務禮儀。切勿在會議上表現出過度急躁的情緒。",
      "proTipEn": "✨ Pro Tip: Presenting and receiving business cards with both hands is basic etiquette. Avoid showing impatience during meetings."
    }
  },
  {
    "id": "factory_tour",
    "category": "business",
    "tagZh": "工廠視察",
    "tagEn": "Factory Tour",
    "icon": "🏭",
    "image": "factory.jpg",
    "titleZh": "越南工廠視察與生產進度討論",
    "titleEn": "Vietnam Factory Tour & Production Progress",
    "titleVi": "Tham Quan Nhà Máy Và Tiến Độ Sản Xuất",
    "summaryZh": "掌握在越南工廠視察時的實用對話，包含詢問生產進度、品質控管與出貨時間。",
    "summaryEn": "Master practical dialogue during a factory tour in Vietnam, including inquiring about production progress, quality control, and shipping time.",
    "dialogues": [
      {
        "speaker": "Quản lý (管理者)",
        "role": "learner",
        "viet": "Xin chào, tiến độ sản xuất của lô hàng này đến đâu rồi?",
        "zh": "你好，這批貨的生產進度到哪裡了？",
        "en": "Hello, how is the production progress of this shipment?",
        "northTip": "「Tiến độ sản xuất」是生產進度；「Lô hàng」是批貨。",
        "southTip": "在工廠，這句話是巡線時最常問的經典句型。"
      },
      {
        "speaker": "Quản đốc (廠長/領班)",
        "role": "npc",
        "viet": "Dạ, hiện tại chúng tôi đã hoàn thành 80% rồi ạ.",
        "zh": "報告，目前我們已經完成80%了。",
        "en": "Sir/Madam, currently we have completed 80%.",
        "northTip": "「Hoàn thành」是完成的意思。",
        "southTip": "「Dạ」表示尊敬的回應，下屬對上司必用。"
      },
      {
        "speaker": "Quản lý (管理者)",
        "role": "learner",
        "viet": "Tốt lắm. Nhớ chú ý đến khâu kiểm tra chất lượng nhé, không được để xảy ra lỗi.",
        "zh": "很好。記得注意品質檢驗環節，不能出錯。",
        "en": "Very good. Remember to pay attention to quality control, no errors are allowed.",
        "northTip": "「Kiểm tra chất lượng」就是品管(QC)；「Lỗi」是錯誤、瑕疵。",
        "southTip": "「Khâu」在這裡指環節、步驟。"
      },
      {
        "speaker": "Quản đốc (廠長/領班)",
        "role": "npc",
        "viet": "Vâng, chúng tôi luôn kiểm tra QC rất kỹ lưỡng trước khi đóng gói.",
        "zh": "是的，我們在包裝前都會進行非常仔細的品檢。",
        "en": "Yes, we always check QC very thoroughly before packaging.",
        "northTip": "「Kỹ lưỡng」是仔細的；「Đóng gói」是包裝。",
        "southTip": "工廠實務中，越南人也很習慣直接講「QC」這個縮寫。"
      },
      {
        "speaker": "Quản lý (管理者)",
        "role": "learner",
        "viet": "Vậy khi nào có thể xuất hàng? Khách hàng đang giục rất gấp.",
        "zh": "那什麼時候可以出貨？客戶催得很急。",
        "en": "So when can we ship the goods? The client is rushing us.",
        "northTip": "「Xuất hàng」是出貨；「Khách hàng」是客戶。",
        "southTip": "「Giục」是催促；「Rất gấp」是非常緊急。"
      },
      {
        "speaker": "Quản đốc (廠長/領班)",
        "role": "npc",
        "viet": "Dự kiến chiều thứ sáu tuần này sẽ giao cho bên vận chuyển ạ.",
        "zh": "預計本週五下午會交給貨運方。",
        "en": "It's expected to be handed over to the shipping company this Friday afternoon.",
        "northTip": "「Dự kiến」是預計；「Vận chuyển」是運輸、貨運。",
        "southTip": "交貨也常說「Giao hàng」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "主管/客戶 (Quản lý)",
      "userRoleEn": "Manager/Client (Quản lý)",
      "partnerRoleZh": "廠長/領班 (Quản đốc)",
      "partnerRoleEn": "Foreman/Supervisor (Quản đốc)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào sếp, sếp đến kiểm tra xưởng ạ?",
          "partnerPromptZh": "老闆好，您來巡視廠房嗎？",
          "partnerPromptEn": "Hello boss, are you here to inspect the factory?",
          "userOptions": [
            {
              "id": "fac1_opt1",
              "textVi": "Ừ, tiến độ sản xuất của lô hàng này đến đâu rồi?",
              "textZh": "嗯，這批貨的生產進度到哪裡了？",
              "textEn": "Yes, how is the production progress of this shipment?",
              "isCorrect": true,
              "feedbackZh": "非常霸氣且專業的主管提問！",
              "feedbackEn": "Very assertive and professional manager question!"
            },
            {
              "id": "fac1_opt2",
              "textVi": "Tôi muốn đi du lịch.",
              "textZh": "我想去旅遊。",
              "textEn": "I want to travel.",
              "isCorrect": false,
              "feedbackZh": "在工廠巡視時提這個太跳tone了。",
              "feedbackEn": "Too out of context for a factory inspection."
            },
            {
              "id": "fac1_opt3",
              "textVi": "Cho tôi một ly cà phê.",
              "textZh": "給我一杯咖啡。",
              "textEn": "Give me a cup of coffee.",
              "isCorrect": false,
              "feedbackZh": "雖然可以請下屬倒咖啡，但不是回答廠長問題的好選項。",
              "feedbackEn": "Not the best response to the foreman's question about the inspection."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Dạ, hiện tại chúng tôi đã hoàn thành 80% rồi ạ.",
          "partnerPromptZh": "報告，目前我們已經完成80%了。",
          "partnerPromptEn": "Currently we have completed 80%.",
          "userOptions": [
            {
              "id": "fac2_opt1",
              "textVi": "Tốt lắm. Nhớ chú ý đến khâu kiểm tra chất lượng nhé.",
              "textZh": "很好。記得注意品質檢驗環節。",
              "textEn": "Very good. Remember to pay attention to quality control.",
              "isCorrect": true,
              "feedbackZh": "完美的進度跟進與品質叮嚀！",
              "feedbackEn": "Perfect progress follow-up and quality reminder!"
            },
            {
              "id": "fac2_opt2",
              "textVi": "Tại sao lại chậm như vậy?",
              "textZh": "為什麼這麼慢？",
              "textEn": "Why is it so slow?",
              "isCorrect": false,
              "feedbackZh": "如果80%在排程內，這樣罵人會打擊士氣喔。",
              "feedbackEn": "If 80% is on schedule, scolding them will hurt morale."
            },
            {
              "id": "fac2_opt3",
              "textVi": "Hủy đơn hàng đi.",
              "textZh": "取消訂單吧。",
              "textEn": "Cancel the order.",
              "isCorrect": false,
              "feedbackZh": "人家都做80%了，取消訂單太可怕了！",
              "feedbackEn": "They've done 80%, cancelling the order is a terrible idea!"
            }
          ]
        }
      ]
    },
    "vocabulary": [
      {
        "vi": "Nhà máy / Xưởng",
        "zh": "工廠 / 廠房",
        "en": "Factory / Workshop",
        "ipa": "[ɲaː˨˩ maj˦˧˥]"
      },
      {
        "vi": "Tiến độ",
        "zh": "進度",
        "en": "Progress",
        "ipa": "[tiən˦˧˥ ɗo˧˨]"
      },
      {
        "vi": "Sản xuất",
        "zh": "生產",
        "en": "Production",
        "ipa": "[saːn˧˩ sʷət̚˦˧˥]"
      },
      {
        "vi": "Chất lượng",
        "zh": "品質",
        "en": "Quality",
        "ipa": "[t͡ɕət̚˦˧˥ lɨəŋ˧˨]"
      },
      {
        "vi": "Lô hàng",
        "zh": "批貨",
        "en": "Shipment",
        "ipa": "[lo˧ haːŋ˨˩]"
      },
      {
        "vi": "Xuất hàng",
        "zh": "出貨",
        "en": "Ship goods",
        "ipa": "[sʷət̚˦˧˥ haːŋ˨˩]"
      }
    ],
    "culturalTip": {
      "titleZh": "🇻🇳 越南工廠管理：恩威並濟",
      "titleEn": "Vietnamese Factory Management",
      "contentZh": "在越南工廠管理中，直接的指令固然重要，但「帶心」更是留住基層員工的關鍵。主管或幹部在巡視時，經常會用「Anh/Chị/Em」等親切稱謂來拉近距離。此外，當地非常重視工會與勞動權益，因此在催促進度時，也需留意溝通語氣。遇到加班 (Tăng ca) 需求時，提供良好的點心或晚餐補貼，通常能有效激勵產線員工。",
      "contentEn": "In Vietnamese factory management, winning the hearts of the workers is just as important as giving clear instructions. Managers often use friendly pronouns (Anh/Chị/Em) to build rapport. Because labor rights are highly valued, tone of communication is important when rushing progress. When overtime (Tăng ca) is needed, providing good snacks or meal allowances effectively motivates assembly line workers.",
      "proTipZh": "✨ 避坑：當場大聲斥責 (Mắng mỏ) 員工在越南文化中會讓人極度「沒面子」，可能導致整條產線罷工，建議私下糾正。",
      "proTipEn": "✨ Pro Tip: Publicly shouting at an employee causes a severe loss of face and could lead to a strike. It's best to correct mistakes privately."
    }
  },
  {
    "id": "family_restaurant",
    "category": "dining",
    "tagZh": "越式合菜",
    "tagEn": "Family Style",
    "icon": "🍽️",
    "image": "restaurant.jpg",
    "titleZh": "傳統越南餐廳點餐與特色飲料",
    "titleEn": "Ordering at a Traditional Vietnamese Restaurant",
    "titleVi": "Gọi Món Tại Nhà Hàng Việt Nam",
    "summaryZh": "學習在傳統越式餐廳 (Quán ăn gia đình) 點越式合菜 (如控肉、酸湯) 與常見飲料 (生啤酒、甘蔗汁)。",
    "summaryEn": "Learn to order family-style Vietnamese dishes and popular local drinks like fresh beer and sugarcane juice.",
    "realMenu": {
      "brand": "Nhà Hàng Món Việt (越南傳統家常菜館 🍚)",
      "descriptionZh": "在地人最愛的家庭式合菜餐廳，大家一起分享道地美味。",
      "descriptionEn": "Local family-style restaurant where dishes are shared communally.",
      "sections": [
        {
          "titleZh": "🍲 經典主菜與湯品 (Món Chính & Món Canh)",
          "titleEn": "Mains & Soups",
          "items": [
            {
              "nameVi": "Thịt Kho Tộ",
              "nameZh": "焦糖瓦煲控肉",
              "nameEn": "Caramelized Pork in Clay Pot",
              "price": "60k - 90k VND",
              "descZh": "南部家庭必備！肥瘦相間的豬肉用焦糖與魚露慢火燉煮，超級下飯。",
              "descEn": "A Southern staple. Pork belly slow-braised in caramel and fish sauce."
            },
            {
              "nameVi": "Canh Chua Cá Lóc",
              "nameZh": "越式雷魚酸湯",
              "nameEn": "Sour Soup with Snakehead Fish",
              "price": "50k - 80k VND",
              "descZh": "加入羅望子、鳳梨、番茄與豆芽，酸甜開胃，通常與瓦煲肉搭配吃。",
              "descEn": "Tangy tamarind soup with pineapple, tomatoes, and fresh herbs."
            },
            {
              "nameVi": "Rau Muống Xào Tỏi",
              "nameZh": "蒜香炒空心菜",
              "nameEn": "Stir-fried Morning Glory with Garlic",
              "price": "40k - 50k VND",
              "descZh": "越南餐廳最常見的國民青菜，蒜香濃郁且口感清脆。",
              "descEn": "The most popular vegetable dish, rich in garlic flavor and crunchy."
            }
          ]
        },
        {
          "titleZh": "🍚 飯類 (Cơm)",
          "titleEn": "Rice Dishes",
          "items": [
            {
              "nameVi": "Cơm Trắng",
              "nameZh": "白飯 (通常一大鍋)",
              "nameEn": "Steamed White Rice",
              "price": "15k - 20k VND/thố",
              "descZh": "在合菜餐廳，白飯通常是用「Thố」(小陶鍋/碗公) 裝盛上桌分享。",
              "descEn": "Served in a communal clay pot or large bowl to share."
            },
            {
              "nameVi": "Cơm Tấm Sườn Bì Chả",
              "nameZh": "招牌碎米飯 (排骨+肉皮+蒸蛋)",
              "nameEn": "Broken Rice with Pork Chop",
              "price": "45k - 70k VND",
              "descZh": "若是簡餐店，這是南部無人不曉的經典個人餐。",
              "descEn": "The iconic Southern dish for a quick, fulfilling personal meal."
            }
          ]
        },
        {
          "titleZh": "🍻 必喝在地飲料 (Thức Uống)",
          "titleEn": "Local Drinks",
          "items": [
            {
              "nameVi": "Bia Hơi",
              "nameZh": "越式生啤酒",
              "nameEn": "Fresh Draught Beer",
              "price": "10k - 15k VND",
              "descZh": "北越極度盛行，新鮮未殺菌的淡啤酒，聚餐必點「Một, hai, ba, dô!」。",
              "descEn": "Fresh, light draught beer. A staple of Northern drinking culture."
            },
            {
              "nameVi": "Nước Mía",
              "nameZh": "鮮榨甘蔗汁",
              "nameEn": "Sugarcane Juice",
              "price": "15k - 20k VND",
              "descZh": "路邊攤與小吃店的神級飲料，常加入一顆金桔提味，清涼解渴。",
              "descEn": "Freshly squeezed with a hint of calamansi. The ultimate thirst quencher."
            },
            {
              "nameVi": "Trà Đá",
              "nameZh": "冰清茶",
              "nameEn": "Iced Tea",
              "price": "3k - 5k VND (或免費)",
              "descZh": "幾乎每家餐廳都會提供的冰茶，有時是免費的。",
              "descEn": "The standard table water substitute in Vietnam, often free or very cheap."
            }
          ]
        }
      ],
      "orderingTipsZh": [
        "點白飯：Cho một thố cơm trắng (請給一鍋白飯)",
        "點啤酒冰塊：Cho xin ít đá viên (請給一些冰塊 - 越南喝啤酒常加冰)",
        "結帳必備：Em ơi, tính tiền! (服務生，買單！)"
      ],
      "orderingTipsEn": [
        "Order rice: Cho một thố cơm (One pot of rice, please)",
        "Ask for ice: Cho xin đá (Ice please - common with beer in Vietnam)",
        "Check please: Tính tiền!"
      ]
    },
    "dialogues": [
      {
        "speaker": "Phục vụ (服務生)",
        "role": "npc",
        "viet": "Dạ, hai anh chị dùng gì ạ? Có cần xem thực đơn không?",
        "zh": "您好，兩位要用點什麼呢？需要看菜單嗎？",
        "en": "Hello, what would you two like to have? Do you need to see the menu?",
        "northTip": "「Thực đơn」是菜單的正式說法，口語也常直接借用英文說「Menu」。",
        "southTip": "服務生稱呼客人常會根據目測年齡靈活使用 anh(哥)/chị(姐)。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh một phần thịt kho tộ, một tô canh chua cá lóc và đĩa rau muống xào tỏi nhé.",
        "zh": "請給我一份瓦煲控肉、一碗雷魚酸湯，還有一盤蒜炒空心菜。",
        "en": "Please give me one claypot pork, a bowl of sour snakehead fish soup, and a plate of garlic morning glory.",
        "northTip": "「Rau muống xào tỏi」是從南到北餐廳必備的國民青菜。",
        "southTip": "瓦煲肉 (Kho tộ) 與酸湯 (Canh chua) 是南越家庭餐桌的靈魂絕配。"
      },
      {
        "speaker": "Phục vụ (服務生)",
        "role": "npc",
        "viet": "Dạ, anh chị ăn cơm trắng hay cơm rang ạ? Có uống nước gì không?",
        "zh": "好的，哥姐吃白飯還是炒飯？要喝點什麼水嗎？",
        "en": "Yes, do you want white rice or fried rice? Any drinks?",
        "northTip": "炒飯在北越叫「Cơm rang」，南越叫「Cơm chiên」。",
        "southTip": "吃合菜通常配白飯最能品嚐菜餚原味。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh một thố cơm trắng. Nước thì lấy hai ly nước mía và hai ly trà đá.",
        "zh": "給我一鍋白飯。飲料的話拿兩杯甘蔗汁和兩杯冰茶。",
        "en": "Give me a pot of white rice. For drinks, two sugarcane juices and two iced teas.",
        "northTip": "「Thố」指的是餐廳裝飯用的小陶鍋或小甕。",
        "southTip": "越南人極愛喝冰茶 (Trà đá)，經常點來解渴與漱口。"
      },
      {
        "speaker": "Phục vụ (服務生)",
        "role": "npc",
        "viet": "Dạ vâng, anh chị đợi một chút nhé, món ăn sẽ lên ngay ạ.",
        "zh": "好的，哥姐請稍等一下，菜馬上上來。",
        "en": "Yes, please wait a moment, the food will be served shortly.",
        "northTip": "「Lên món」或「Lên ngay」表示上菜。",
        "southTip": "傳統餐廳上菜速度通常很快。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách)",
      "userRoleEn": "Customer (Khách)",
      "partnerRoleZh": "餐廳服務生 (Phục vụ)",
      "partnerRoleEn": "Waiter (Phục vụ)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ, hai anh chị dùng gì ạ? Có cần xem thực đơn không?",
          "partnerPromptZh": "您好，兩位要用點什麼呢？需要看菜單嗎？",
          "partnerPromptEn": "Hello, what would you two like to have? Do you need to see the menu?",
          "userOptions": [
            {
              "id": "res1_opt1",
              "textVi": "Cho anh một thịt kho tộ và canh chua nhé.",
              "textZh": "給我一份瓦煲控肉和酸湯。",
              "textEn": "Give me one claypot pork and sour soup.",
              "isCorrect": true,
              "feedbackZh": "非常道地！這兩道菜是越南合菜的經典黃金組合。",
              "feedbackEn": "Very authentic! This is the classic golden combo of Vietnamese dining."
            },
            {
              "id": "res1_opt2",
              "textVi": "Anh muốn mua một chiếc xe máy.",
              "textZh": "我想買一台摩托車。",
              "textEn": "I want to buy a motorbike.",
              "isCorrect": false,
              "feedbackZh": "這裡是餐廳喔，買車要去車行！",
              "feedbackEn": "This is a restaurant, not a dealership!"
            },
            {
              "id": "res1_opt3",
              "textVi": "Không cần, tôi không đói.",
              "textZh": "不用，我不餓。",
              "textEn": "No need, I'm not hungry.",
              "isCorrect": false,
              "feedbackZh": "進了餐廳卻說不餓，會讓服務生很尷尬喔。",
              "feedbackEn": "Saying you're not hungry inside a restaurant is awkward."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Dạ, anh chị ăn cơm trắng hay cơm rang ạ? Có uống nước gì không?",
          "partnerPromptZh": "好的，哥姐吃白飯還是炒飯？要喝點什麼水嗎？",
          "partnerPromptEn": "Yes, do you want white rice or fried rice? Any drinks?",
          "userOptions": [
            {
              "id": "res2_opt1",
              "textVi": "Cho anh một thố cơm trắng, hai ly nước mía và hai ly bia hơi.",
              "textZh": "給我一鍋白飯，兩杯甘蔗汁和兩杯生啤酒。",
              "textEn": "Give me a pot of white rice, two sugarcane juices, and two draught beers.",
              "isCorrect": true,
              "feedbackZh": "完美！點了白飯配菜，還精準點了在地最受歡迎的甘蔗汁和生啤酒。",
              "feedbackEn": "Perfect! Ordered white rice for the dishes, plus popular local drinks."
            },
            {
              "id": "res2_opt2",
              "textVi": "Cho tôi mười bát phở.",
              "textZh": "給我十碗河粉。",
              "textEn": "Give me ten bowls of pho.",
              "isCorrect": false,
              "feedbackZh": "點太多了，而且你們只有兩個人，且沒回答到飲料的問題。",
              "feedbackEn": "That's too much food for two people, and you missed the drink question."
            },
            {
              "id": "res2_opt3",
              "textVi": "Cho tôi một ly cà phê muối.",
              "textZh": "給我一杯鹽咖啡。",
              "textEn": "Give me a salted coffee.",
              "isCorrect": false,
              "feedbackZh": "雖然有回答飲料，但沒回答要吃飯還是炒飯喔！",
              "feedbackEn": "You answered the drink part but forgot to specify the rice!"
            }
          ]
        }
      ]
    },
    "vocabulary": [
      {
        "vi": "Nhà hàng",
        "zh": "餐廳",
        "en": "Restaurant",
        "ipa": "[ɲaː˨˩ haːŋ˨˩]"
      },
      {
        "vi": "Thực đơn",
        "zh": "菜單",
        "en": "Menu",
        "ipa": "[tʰɨk̚˧˨ ɗəːn˧]"
      },
      {
        "vi": "Thịt kho tộ",
        "zh": "瓦煲控肉",
        "en": "Claypot pork",
        "ipa": "[tʰit̚˧˨ xɔ˧ tɔ˧˨]"
      },
      {
        "vi": "Canh chua",
        "zh": "酸湯",
        "en": "Sour soup",
        "ipa": "[kaɲ˧ t͡ɕuə˧]"
      },
      {
        "vi": "Nước mía",
        "zh": "甘蔗汁",
        "en": "Sugarcane juice",
        "ipa": "[nɨək̚˧˦ miə˧˦]"
      },
      {
        "vi": "Bia hơi",
        "zh": "生啤酒",
        "en": "Draught beer",
        "ipa": "[biə˧ həːj˧]"
      },
      {
        "vi": "Cơm trắng",
        "zh": "白飯",
        "en": "White rice",
        "ipa": "[kəːm˧ ʈaŋ˧˦]"
      },
      {
        "vi": "Tính tiền",
        "zh": "結帳 / 買單",
        "en": "Bill please",
        "ipa": "[tin˧˦ tiən˨˩]"
      }
    ],
    "culturalTip": {
      "titleZh": "🇻🇳 越式合菜與拼酒文化",
      "titleEn": "Family-Style Dining & Nhậu Culture",
      "contentZh": "在越南吃合菜 (Ăn cơm gia đình)，通常是大家共享中間的肉類與湯品，並將湯汁淋在自己的白飯上享用。如果是一群朋友去熱炒店 (Quán nhậu)，則一定會點「Bia hơi」(生啤酒) 或瓶裝啤酒，並且非常流行加冰塊喝。敬酒時大家會齊聲高喊「Một, hai, ba, Dô! (一、二、三，乾杯！)」氣氛非常熱烈。",
      "contentEn": "In a Vietnamese family meal, dishes are shared from the center, and flavorful broths are often spooned over individual bowls of rice. In lively drinking spots (Quán nhậu), 'Bia hơi' (draught beer) is king, usually served over ice. Expect loud cheers of 'Một, hai, ba, Dô!' (1, 2, 3, Cheers!) throughout the night.",
      "proTipZh": "✨ 避坑：餐廳桌上放的濕紙巾 (Khăn ướt) 通常是要額外收費的 (約 2,000-5,000 VND)。冰茶 (Trà đá) 有些免費，有些也會收少許費用。",
      "proTipEn": "✨ Pro Tip: The wet wipes (Khăn ướt) on the table usually cost extra (2k-5k VND). Iced tea (Trà đá) is sometimes free, but often carries a small charge."
    }
  },
  {
    "id": "cafe",
    "category": "dining",
    "tagZh": "咖啡廳必備",
    "tagEn": "Cafe Essential",
    "icon": "☕",
    "image": "cafe.jpg",
    "titleZh": "咖啡廳點經典冰奶咖與甜度冰量",
    "titleEn": "Ordering Vietnamese Iced Coffee at a Cafe",
    "titleVi": "Gọi Cà Phê Tại Quán Cà Phê",
    "summaryZh": "學習點最道地的 Cà phê sữa đá (冰奶咖)、Bạc xỉu (白咖啡/多奶) 以及調整甜度冰量與內用外帶。",
    "summaryEn": "Order authentic Vietnamese Iced Milk Coffee, Bạc xỉu, adjust sweetness/ice, and choose dine-in or takeaway.",
    
    "realMenu": {
      "brand": "Highlands Coffee (高原咖啡 🇻🇳)",
      "descriptionZh": "全越最大連鎖咖啡，實際菜單點餐教學。",
      "descriptionEn": "Vietnam's largest coffee chain menu guide.",
      "sections": [
        {
          "titleZh": "☕ 傳統越南咖啡 (Phin - Cà Phê Truyền Thống)",
          "titleEn": "Traditional Vietnamese Coffee",
          "items": [
            {
              "nameVi": "Phin Sữa Đá",
              "nameZh": "冰煉乳咖啡",
              "nameEn": "Iced Milk Coffee",
              "price": "29k - 39k VND",
              "descZh": "最經典的越式滴漏咖啡加煉乳，重度提神必備。",
              "descEn": "Classic Vietnamese iced drip coffee with condensed milk."
            },
            {
              "nameVi": "Bạc Xỉu Đá",
              "nameZh": "冰白咖啡 (多奶)",
              "nameEn": "Iced White Coffee",
              "price": "29k - 39k VND",
              "descZh": "適合不常喝咖啡的人，奶香味濃郁，南部西貢特色。",
              "descEn": "Perfect for those who prefer milkier coffee, a Saigon specialty."
            }
          ]
        },
        {
          "titleZh": "🍵 人氣茶飲 (Trà)",
          "titleEn": "Popular Teas",
          "items": [
            {
              "nameVi": "Trà Sen Vàng",
              "nameZh": "黃金蓮子茶",
              "nameEn": "Golden Lotus Tea",
              "price": "45k - 55k VND",
              "descZh": "Highlands 招牌必點！清甜烏龍茶底搭配綿密蓮子與脆爽荸薺。",
              "descEn": "Signature drink! Sweet oolong tea with lotus seeds and water chestnuts."
            },
            {
              "nameVi": "Trà Thạch Đào",
              "nameZh": "蜜桃果凍茶",
              "nameEn": "Peach Jelly Tea",
              "price": "45k - 55k VND",
              "descZh": "清爽解渴，裡面有真實水蜜桃切塊與Q彈果凍。",
              "descEn": "Refreshing peach tea with real peach slices and jelly."
            }
          ]
        },
        {
          "titleZh": "🥖 輕食 (Bánh Mì / Bánh Ngọt)",
          "titleEn": "Light Snacks",
          "items": [
            {
              "nameVi": "Bánh Mì Que (Pa-tê)",
              "nameZh": "法式麵包棍 (肝醬)",
              "nameEn": "Baguette Stick (Pate)",
              "price": "19k VND",
              "descZh": "烤得酥脆的細長麵包，夾滿越式肝醬，配咖啡絕佳。",
              "descEn": "Crispy thin baguette filled with savory Vietnamese pate."
            }
          ]
        }
      ],
      "orderingTipsZh": [
        "尺寸 (Size)：小杯 Size S (Nhỏ) / 中杯 Size M (Vừa) / 大杯 Size L (Lớn)",
        "客製化：少冰 (Ít đá) / 少糖 (Ít đường) / 正常 (Bình thường)"
      ],
      "orderingTipsEn": [
        "Sizes: Small S (Nhỏ) / Medium M (Vừa) / Large L (Lớn)",
        "Customizations: Less ice (Ít đá) / Less sugar (Ít đường) / Normal (Bình thường)"
      ]
    },
    "dialogues": [
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Dạ xin chào anh! Anh muốn uống gì ạ?",
        "zh": "您好！請問哥想喝點什麼呢？",
        "en": "Hello sir! What would you like to drink?",
        "northTip": "北越常禮貌用「ạ」結尾，語氣溫和。",
        "southTip": "南越開頭常親切帶「Dạ / Dạ em chào anh」"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh một ly cà phê sữa đá và một ly bạc xỉu nhé.",
        "zh": "給我一杯冰牛奶咖啡和一杯白咖啡（多奶）。",
        "en": "Please give me one iced milk coffee and one bac xiu (white coffee).",
        "northTip": "北越有時用「cốc」表示杯子，南越一律用「ly」。",
        "southTip": "Bạc xỉu 是南越西貢極具代表性的多奶甜咖啡。"
      },
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Anh uống tại đây hay mang về ạ? Có cần giảm đường không anh?",
        "zh": "哥是在這裡喝還是外帶？需要減糖嗎？",
        "en": "For here or to go sir? Do you want less sugar?",
        "northTip": "外帶北越常說「mang về」，南越說「mang đi」。",
        "southTip": "越式咖啡非常甜，不習慣甜可主動說「ít ngọt」或「ít đường」。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Anh uống tại đây. Cho anh ít đường và nhiều đá một chút nhé.",
        "zh": "我在這裡喝。幫我微糖（少糖），冰塊多放一點喔。",
        "en": "For here please. Give me less sugar and extra ice.",
        "northTip": "「ít đường」= 少糖；「ít ngọt」= 微甜。",
        "southTip": "「nhiều đá」= 多冰，南越炎熱天氣必備說法。"
      },
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Dạ được ạ. Của anh tổng cộng năm mươi lăm nghìn đồng.",
        "zh": "好的。您的總共是五萬五千越南盾 (55,000 VND)。",
        "en": "Sure. Your total is 55,000 VND.",
        "northTip": "55,000 讀作「Năm mươi lăm nghìn」。",
        "southTip": "南越口語常讀「Năm mươi lăm ngàn」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách)",
      "userRoleEn": "Customer (Khách)",
      "partnerRoleZh": "咖啡店員 (Nhân viên)",
      "partnerRoleEn": "Barista (Nhân viên)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ xin chào anh! Anh muốn uống gì ạ?",
          "partnerPromptZh": "您好！請問哥想喝點什麼呢？",
          "partnerPromptEn": "Hello sir! What would you like to drink?",
          "userOptions": [
            {
              "id": "c1_opt1",
              "textVi": "Cho anh một ly cà phê sữa đá nhé.",
              "textZh": "給我一杯冰牛奶咖啡。",
              "textEn": "Give me one iced milk coffee please.",
              "isCorrect": true,
              "feedbackZh": "太棒了！這是最道地且禮貌的點咖啡句型。",
              "feedbackEn": "Perfect! Authentic and polite way to order iced milk coffee."
            },
            {
              "id": "c1_opt2",
              "textVi": "Tôi muốn đi vệ sinh.",
              "textZh": "我想去洗手間。",
              "textEn": "I want to go to the restroom.",
              "isCorrect": false,
              "feedbackZh": "店員在問你想喝什麼，先點餐比較合適喔！",
              "feedbackEn": "Staff is asking for your order, better order first!"
            },
            {
              "id": "c1_opt3",
              "textVi": "Cho anh mười bát phở bò.",
              "textZh": "給我十碗牛肉河粉。",
              "textEn": "Give me ten bowls of beef pho.",
              "isCorrect": false,
              "feedbackZh": "這裡是咖啡店，不是河粉店喔！",
              "feedbackEn": "This is a cafe, not a noodle shop!"
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Anh uống tại đây hay mang về ạ? Có cần giảm đường không anh?",
          "partnerPromptZh": "哥是在這裡喝還是外帶？需要減糖嗎？",
          "partnerPromptEn": "For here or to go sir? Do you want less sugar?",
          "userOptions": [
            {
              "id": "c2_opt1",
              "textVi": "Anh uống tại đây, cho anh ít đường và nhiều đá nhé.",
              "textZh": "我在這裡喝，幫我少糖多冰喔。",
              "textEn": "For here please, less sugar and extra ice.",
              "isCorrect": true,
              "feedbackZh": "完美！精確回答了內用、甜度與冰塊需求。",
              "feedbackEn": "Excellent! Clear answer on dining location, sugar, and ice."
            },
            {
              "id": "c2_opt2",
              "textVi": "Không cần đá, cho tôi nước sôi.",
              "textZh": "不需要冰塊，給我滾水。",
              "textEn": "No ice, give me boiling water.",
              "isCorrect": false,
              "feedbackZh": "點冰咖啡卻要求熱水會讓店員很困惑喔！",
              "feedbackEn": "Asking for boiling water for iced coffee is confusing!"
            },
            {
              "id": "c2_opt3",
              "textVi": "Tôi muốn ngủ ở đây.",
              "textZh": "我想睡在這裡。",
              "textEn": "I want to sleep here.",
              "isCorrect": false,
              "feedbackZh": "語意不合常理。",
              "feedbackEn": "Inappropriate response in a cafe."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ được ạ. Của anh tổng cộng năm mươi lăm nghìn đồng.",
          "partnerPromptZh": "好的。您的總共是五萬五千越南盾。",
          "partnerPromptEn": "Sure. Your total is 55,000 VND.",
          "userOptions": [
            {
              "id": "c3_opt1",
              "textVi": "Gửi em tiền nhé. Cho anh xin hóa đơn.",
              "textZh": "給你錢喔。請給我收據發票。",
              "textEn": "Here is the money. Please give me the receipt.",
              "isCorrect": true,
              "feedbackZh": "非常標準的付款與要發票表達！",
              "feedbackEn": "Standard polite payment phrase!"
            },
            {
              "id": "c3_opt2",
              "textVi": "Đắt quá, tôi không trả tiền đâu.",
              "textZh": "太貴了，我才不付錢呢。",
              "textEn": "Too expensive, I won't pay.",
              "isCorrect": false,
              "feedbackZh": "在咖啡廳這樣說很不禮貌喔！",
              "feedbackEn": "Impolite response."
            },
            {
              "id": "c3_opt3",
              "textVi": "Tôi là người nước ngoài, cho tôi miễn phí.",
              "textZh": "我是外國人，請給我免費。",
              "textEn": "I am a foreigner, make it free.",
              "isCorrect": false,
              "feedbackZh": "這是不合理的請求。",
              "feedbackEn": "Unreasonable request."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Cà phê sữa đá",
        "zh": "冰牛奶咖啡（加煉乳）",
        "en": "Iced coffee with condensed milk",
        "phonetic": "[ka fe sɯə da]",
        "note": "越南國寶級飲品"
      },
      {
        "viet": "Cà phê đen đá",
        "zh": "冰黑咖啡",
        "en": "Iced black coffee",
        "phonetic": "[ka fe dɛn da]",
        "note": "濃郁不加奶"
      },
      {
        "viet": "Bạc xỉu",
        "zh": "白咖啡（多奶少咖啡）",
        "en": "White coffee (more milk)",
        "phonetic": "[bak siw]",
        "note": "南越經典甜香"
      },
      {
        "viet": "Cà phê trứng",
        "zh": "蛋咖啡",
        "en": "Egg coffee",
        "phonetic": "[ka fe tɯŋ]",
        "note": "河內必喝特色"
      },
      {
        "viet": "Ít đường",
        "zh": "少糖 / 微糖",
        "en": "Less sugar",
        "phonetic": "[it dɯəŋ]",
        "note": "點飲料必背詞"
      },
      {
        "viet": "Nhiều đá",
        "zh": "多冰",
        "en": "Extra ice",
        "phonetic": "[ɲiəw da]",
        "note": "炎熱氣候專用"
      },
      {
        "viet": "Không lấy đá",
        "zh": "去冰 / 不加冰",
        "en": "No ice",
        "phonetic": "[xoŋ ləj da]",
        "note": "冷飲去冰"
      },
      {
        "viet": "Mang đi / Mang về",
        "zh": "外帶",
        "en": "Takeaway / To go",
        "phonetic": "[maŋ di / maŋ ve]",
        "note": "南越講 mang đi，北越講 mang về"
      },
      {
        "viet": "Uống tại đây",
        "zh": "內用 / 在此飲用",
        "en": "Dine in / For here",
        "phonetic": "[uəŋ taːj dəj]",
        "note": "在店內享用"
      }
    ],
    "culturalTips": {
      "titleZh": "越南咖啡館在地文化與秘笈",
      "titleEn": "Vietnamese Cafe Culture & Etiquette",
      "tipsZh": [
        "叫店員請用「Em ơi!」(年輕店員) 或「Anh ơi / Chị ơi」，切勿直接大喊「Waiter」。",
        "越南的咖啡普遍預設加入香甜濃厚的煉乳 (Sữa đặc)，若不嗜甜，務必提醒「Ít đường」(少糖) 或「Ít sữa」(少奶)。",
        "在傳統咖啡館，通常會免費附上一大杯清涼消暑的淡香綠茶「Trà đá」(冰茶)。"
      ],
      "tipsEn": [
        "Address staff with friendly pronouns: \"Em ơi!\" (younger staff) or \"Anh ơi / Chị ơi\".",
        "Vietnamese coffee comes standard with sweet condensed milk (Sữa đặc). Ask for \"Ít đường\" (less sugar) if you prefer milder sweetness.",
        "Traditional cafes always serve a complimentary iced fragrant tea known as \"Trà đá\"."
      ],
      "proTipZh": "✨ 避坑：越南有些精品文青店結帳要先付，街頭小店通常是喝完離開前再喊「Em ơi tính tiền」(結帳)！",
      "proTipEn": "✨ Pro Tip: Trendy cafes require payment at counter first, while street cafes charge after finishing when you call \"Tính tiền\"!"
    }
  },
  {
    "id": "pho",
    "category": "dining",
    "tagZh": "國民美食",
    "tagEn": "National Dish",
    "icon": "🍜",
    "image": "pho.jpg",
    "titleZh": "傳統河粉店點牛肉河粉、油條與熟度",
    "titleEn": "Ordering Pho Beef Noodle Soup & Toppings",
    "titleVi": "Gọi Món Tại Quán Phở Truyền Thống",
    "summaryZh": "學會區分半熟生牛肉 (Phở tái)、全熟牛腩 (Phở chín/nạm)、加點油條 (Quẩy) 與特製半熟蛋 (Trứng chần)。",
    "summaryEn": "Order rare beef (Phở tái), well-done brisket (Phở chín/nạm), crispy crullers (Quẩy), and poached egg.",
    
    "realMenu": {
      "brand": "Phở Gia Truyền (傳統河粉名店 🍜)",
      "descriptionZh": "模擬越南街頭與名店常見的河粉菜單，掌握點肉部位。",
      "descriptionEn": "Common menu at traditional Pho restaurants. Master the beef cuts.",
      "sections": [
        {
          "titleZh": "🍲 經典牛肉河粉 (Phở Bò)",
          "titleEn": "Classic Beef Pho",
          "items": [
            {
              "nameVi": "Phở Tái",
              "nameZh": "半熟生牛肉河粉",
              "nameEn": "Rare Beef Pho",
              "price": "50k - 70k VND",
              "descZh": "切薄片的生牛肉鋪在麵上，用滾燙高湯淋熟，肉質最嫩。",
              "descEn": "Thinly sliced rare beef cooked by the boiling broth, very tender."
            },
            {
              "nameVi": "Phở Chín",
              "nameZh": "全熟牛腩/瘦肉河粉",
              "nameEn": "Well-done Beef Pho",
              "price": "50k - 70k VND",
              "descZh": "燉煮入味的全熟牛肉塊，口感紮實。",
              "descEn": "Thoroughly cooked and stewed beef, firmer texture."
            },
            {
              "nameVi": "Phở Tái Nạm",
              "nameZh": "半熟牛+熟牛腩河粉",
              "nameEn": "Rare & Flank Beef Pho",
              "price": "60k - 80k VND",
              "descZh": "雙重享受，同時吃得到軟嫩生牛與帶點油花的牛腩。",
              "descEn": "The best of both worlds: rare beef and flavorful flank."
            },
            {
              "nameVi": "Phở Đặc Biệt",
              "nameZh": "招牌綜合河粉",
              "nameEn": "Special Combo Pho",
              "price": "70k - 90k VND",
              "descZh": "什麼都有！包含生牛、熟牛、牛百葉(Sách)、牛丸(Bò Viên)、牛筋(Gân)。",
              "descEn": "Everything included! Rare beef, brisket, tripe, meatballs, and tendon."
            }
          ]
        },
        {
          "titleZh": "🥢 必備配菜與小吃 (Món Ăn Kèm)",
          "titleEn": "Side Dishes",
          "items": [
            {
              "nameVi": "Quẩy",
              "nameZh": "越式油條",
              "nameEn": "Fried Dough Sticks",
              "price": "5k - 10k VND",
              "descZh": "吃北越河粉必備！撕碎泡入吸滿高湯精華。",
              "descEn": "Must-have for Northern pho. Tear and dip into the hot broth."
            },
            {
              "nameVi": "Trứng Chần",
              "nameZh": "半熟溫泉蛋 (滾湯燙)",
              "nameEn": "Poached Egg in Broth",
              "price": "10k VND",
              "descZh": "用牛肉熱湯燙過的小碗半熟蛋，極致濃郁。",
              "descEn": "A poached egg served in a small bowl of hot beef broth."
            }
          ]
        }
      ],
      "orderingTipsZh": [
        "如果不吃蔥：Không hành (不加蔥) / Không rau (不加生菜)",
        "想多加肉：Thêm thịt (加肉) / Thêm bánh (加麵)"
      ],
      "orderingTipsEn": [
        "No green onions: Không hành / No herbs: Không rau",
        "Extra meat: Thêm thịt / Extra noodles: Thêm bánh"
      ]
    },
    "dialogues": [
      {
        "speaker": "Chủ quán (老闆)",
        "role": "npc",
        "viet": "Chào em, hôm nay ăn phở gì em ơi?",
        "zh": "你好，今天想吃什麼河粉呀？",
        "en": "Hello, what kind of pho would you like today?",
        "northTip": "河粉店老闆非常熱情，常用親切稱謂。",
        "southTip": "南越河粉常會額外附上一大盤新鮮九層塔與生豆芽。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho em một tô phở bò tái nạm và một đĩa quẩy nhé.",
        "zh": "給我一碗半熟生牛肉加熟牛腩河粉，還有一盤油條喔。",
        "en": "Please give me a bowl of rare & brisket beef pho and a plate of fried dough crullers.",
        "northTip": "北越吃河粉必配「Quẩy」(油條) 泡湯汁！",
        "southTip": "「Tô」是南越碗的稱呼，北越講「Bát」。"
      },
      {
        "speaker": "Chủ quán (老闆)",
        "role": "npc",
        "viet": "Có ăn hành và ngò gai không? Có thêm trứng chần không em?",
        "zh": "吃蔥花和刺芫荽（香菜）嗎？要加一顆半熟溫泉蛋嗎？",
        "en": "Do you eat scallions and culantro? Would you like a poached egg?",
        "northTip": "北越河粉靈魂在於滿滿的蔥花 (Hành hoa)。",
        "southTip": "「Trứng chần」是濃郁半熟蛋黃浸泡在熱牛骨湯中。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Dạ có, cho nhiều hành và cho em thêm một chén trứng chần.",
        "zh": "好的要加，請多放蔥花，並多給我一小碗半熟蛋。",
        "en": "Yes, lots of scallions please, and an extra bowl of poached egg.",
        "northTip": "小碗在北越叫「Bát nhỏ」，南越叫「Chén」。",
        "southTip": "多放生菜用「nhiều rau」，不吃蔥講「không lấy hành」。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Chị ơi, cho em xin thêm chanh và ớt tươi với ạ.",
        "zh": "大姐，請再給我檸檬和新鮮辣椒片好嗎？",
        "en": "Excuse me, please give me some extra limes and fresh chilies.",
        "northTip": "河粉配料必備金桔 (Quất) 或綠檸檬 (Chanh)。",
        "southTip": "桌上常備是拉差辣椒醬 (Tương ớt) 與黑甜醬 (Tương đen)。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "食客 (Khách)",
      "userRoleEn": "Diner (Khách)",
      "partnerRoleZh": "河粉店老闆娘 (Chủ quán)",
      "partnerRoleEn": "Pho Shop Owner (Chủ quán)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào em, hôm nay ăn phở tái hay phở chín em ơi?",
          "partnerPromptZh": "你好，今天吃生牛肉河粉還是熟牛肉河粉？",
          "partnerPromptEn": "Hello, rare beef pho or well-done beef pho today?",
          "userOptions": [
            {
              "id": "pho_opt1",
              "textVi": "Cho em một tô phở bò tái nạm và một đĩa quẩy nhé.",
              "textZh": "給我一碗生熟混合牛肉河粉和一盤油條。",
              "textEn": "Give me one rare & brisket beef pho and crullers please.",
              "isCorrect": true,
              "feedbackZh": "非常地道！半熟生牛肉 (tái) 搭配熟牛腩 (nạm) 是老饕最愛。",
              "feedbackEn": "Awesome! Combining rare and brisket beef is a classic combo."
            },
            {
              "id": "pho_opt2",
              "textVi": "Cho tôi một ly sinh tố bơ.",
              "textZh": "給我一杯酪梨冰沙。",
              "textEn": "Give me an avocado smoothie.",
              "isCorrect": false,
              "feedbackZh": "河粉店主要供應熱湯河粉，飲料通常只有豆漿或冰茶喔！",
              "feedbackEn": "Pho shops focus on noodles, smoothie is unlikely available here."
            },
            {
              "id": "pho_opt3",
              "textVi": "Tôi không đói, tôi vào ngồi chơi.",
              "textZh": "我不餓，我進來坐坐看風景。",
              "textEn": "I am not hungry, just sitting here.",
              "isCorrect": false,
              "feedbackZh": "在熱鬧的河粉店需要點餐喔！",
              "feedbackEn": "In a busy pho shop, please place an order."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Có ăn hành và ngò gai không? Có thêm trứng chần không em?",
          "partnerPromptZh": "吃蔥花和香菜嗎？要加半熟蛋嗎？",
          "partnerPromptEn": "Do you eat scallions and cilantro? Want a poached egg?",
          "userOptions": [
            {
              "id": "pho2_opt1",
              "textVi": "Dạ có, cho nhiều hành và cho em thêm một chén trứng chần.",
              "textZh": "要的，請多放蔥，並多加一碗半熟蛋。",
              "textEn": "Yes, extra scallions and a bowl of poached egg.",
              "isCorrect": true,
              "feedbackZh": "太專業了！半熟蛋黃泡熱湯在越南非常受歡迎。",
              "feedbackEn": "Expert diner! Poached egg in hot broth is iconic."
            },
            {
              "id": "pho2_opt2",
              "textVi": "Cho tôi mười cân hành tây sống.",
              "textZh": "給我十公斤生洋蔥。",
              "textEn": "Give me 10kg of raw onions.",
              "isCorrect": false,
              "feedbackZh": "數量過於誇張。",
              "feedbackEn": "Excessive quantity."
            },
            {
              "id": "pho2_opt3",
              "textVi": "Đừng cho nước dùng, tôi ăn khô.",
              "textZh": "別給高湯，我吃全乾的。",
              "textEn": "No soup, dry pho.",
              "isCorrect": false,
              "feedbackZh": "這家是傳統湯河粉名店，如果不喝湯可以點乾拌河粉 (Phở trộn) 專門店。",
              "feedbackEn": "This shop specializes in traditional soup pho."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ phở của em đây! Em có cần thêm gì nữa không?",
          "partnerPromptZh": "你的河粉來囉！還需要其他東西嗎？",
          "partnerPromptEn": "Here is your pho! Need anything else?",
          "userOptions": [
            {
              "id": "pho3_opt1",
              "textVi": "Chị ơi, cho em xin thêm chanh và ớt tươi với ạ.",
              "textZh": "大姐，請再給我檸檬和新鮮辣椒片好嗎？",
              "textEn": "Excuse me, please give me some extra limes and fresh chilies.",
              "isCorrect": true,
              "feedbackZh": "完美！擠檸檬汁和加生辣椒是越式河粉調味靈魂。",
              "feedbackEn": "Perfect! Fresh lime and chilies are essential for pho."
            },
            {
              "id": "pho3_opt2",
              "textVi": "Hết bao nhiêu một vé máy bay?",
              "textZh": "一張機票多少錢？",
              "textEn": "How much is a flight ticket?",
              "isCorrect": false,
              "feedbackZh": "問錯對象囉。",
              "feedbackEn": "Wrong question."
            },
            {
              "id": "pho3_opt3",
              "textVi": "Tôi muốn đổi món khác.",
              "textZh": "我想換別的菜。",
              "textEn": "I want to change dishes.",
              "isCorrect": false,
              "feedbackZh": "煮好的河粉通常不能隨意退換喔。",
              "feedbackEn": "Served soup pho cannot be returned randomly."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Phở bò tái",
        "zh": "生牛肉河粉（半熟嫩肉）",
        "en": "Rare beef pho",
        "phonetic": "[fə bɔ taːj]",
        "note": "牛肉粉招牌"
      },
      {
        "viet": "Phở nạm / chín",
        "zh": "牛腩 / 全熟熟牛肉",
        "en": "Flank / Well-done beef",
        "phonetic": "[fə nam / cin]",
        "note": "熟肉軟嫩"
      },
      {
        "viet": "Phở gà",
        "zh": "雞肉河粉",
        "en": "Chicken pho",
        "phonetic": "[fə ga]",
        "note": "湯頭清甜"
      },
      {
        "viet": "Quẩy",
        "zh": "油條（河粉必配）",
        "en": "Fried crullers",
        "phonetic": "[kwəj]",
        "note": "泡在熱湯中吸飽湯汁"
      },
      {
        "viet": "Trứng chần",
        "zh": "半熟溫泉蛋（牛骨湯浸泡）",
        "en": "Poached egg in broth",
        "phonetic": "[tɯŋ cən]",
        "note": "老饕加點吃法"
      },
      {
        "viet": "Ngò gai",
        "zh": "刺芫荽（越南香草）",
        "en": "Culantro / Long coriander",
        "phonetic": "[ŋɔ gaːj]",
        "note": "河粉經典香草"
      },
      {
        "viet": "Hành hoa / Hành lá",
        "zh": "蔥花 / 綠青蔥",
        "en": "Scallions / Spring onion",
        "phonetic": "[haɲ hwa]",
        "note": "滿滿鋪在碗頂"
      },
      {
        "viet": "Giá đỗ",
        "zh": "豆芽菜",
        "en": "Bean sprouts",
        "phonetic": "[za do]",
        "note": "南越常生吃，北越常汆燙"
      },
      {
        "viet": "Tương ớt / Tương đen",
        "zh": "辣椒醬 / 海鮮甜麵醬",
        "en": "Chili sauce / Hoisin sauce",
        "phonetic": "[tɯəŋ ət]",
        "note": "南越必備沾醬"
      }
    ],
    "culturalTips": {
      "titleZh": "品嚐正統越南河粉老饕吃法",
      "titleEn": "How to Eat Pho Like a Local",
      "tipsZh": [
        "先喝一口原汁原味的牛骨高湯，品味純粹清甜，再擠入檸檬汁 (Chanh) 與加入生辣椒片 (Ớt tươi)。",
        "南越吃法會將九層塔 (Húng quế) 與刺芫荽 (Ngò gai) 用手撕碎丟入熱湯中激發香氣。",
        "「Quẩy」(油條) 剛炸出來金黃酥脆，壓入湯裡浸泡 3 秒吸收牛骨濃湯，口感極其驚艷！"
      ],
      "tipsEn": [
        "Sip the pure bone broth first before adding lime wedges and fresh chili slices.",
        "In Southern Vietnam, tear fresh basil leaves and culantro by hand into the steaming broth to release aromatic oils.",
        "Dip crispy fried crullers (Quẩy) into the rich broth for 3 seconds for the ultimate local taste!"
      ],
      "proTipZh": "✨ 避坑：北越人吃河粉偏好清澈湯頭只加蒜醋與辣椒醬；南越人則熱愛加大量黑甜醬 (Tương đen) 與生豆芽，各具特色！",
      "proTipEn": "✨ Pro Tip: Northern pho prefers clear broth with garlic vinegar, while Southern pho loves sweet hoisin sauce and fresh herbs!"
    }
  },
  {
    "id": "banhmi",
    "category": "dining",
    "tagZh": "街頭必吃",
    "tagEn": "Street Food King",
    "icon": "🥖",
    "image": "banhmi.jpg",
    "titleZh": "越式法國麵包攤客製化內餡與辣度",
    "titleEn": "Ordering Banh Mi at a Street Food Cart",
    "titleVi": "Mua Bánh Mì Tại Xe Bánh Mì Vỉa Hè",
    "summaryZh": "掌握點 Bánh mì thịt (肉餡麵包)、Bánh mì trứng (煎蛋麵包)、客製加滿肝醬 (Pa-tê)、醃蘿蔔與調整辣度。",
    "summaryEn": "Customize your crispy Banh Mi with pate, savory cold cuts, fried eggs, pickled daikon, and spicy chili.",
    
    "realMenu": {
      "brand": "Tiệm Bánh Mì (人氣越式法包攤 🥖)",
      "descriptionZh": "模擬在地排隊法包名店的菜單，教你選料與客製化。",
      "descriptionEn": "Menu from a popular local Banh Mi cart. Learn to customize your sandwich.",
      "sections": [
        {
          "titleZh": "🥪 招牌口味 (Các Loại Bánh Mì)",
          "titleEn": "Signature Banh Mi Types",
          "items": [
            {
              "nameVi": "Bánh Mì Thịt (Đặc Biệt)",
              "nameZh": "招牌綜合肉法包",
              "nameEn": "Special Mixed Meat Banh Mi",
              "price": "30k - 60k VND",
              "descZh": "夾滿各色越式扎肉(Chả lụa)、燒肉、肉鬆、肝醬與醃蘿蔔，最豐盛！",
              "descEn": "Packed with various Vietnamese cold cuts, roasted pork, pate, and pickles."
            },
            {
              "nameVi": "Bánh Mì Heo Quay",
              "nameZh": "脆皮燒肉法包",
              "nameEn": "Roasted Pork Belly Banh Mi",
              "price": "25k - 40k VND",
              "descZh": "包入帶有酥脆豬皮的烤肉塊，口感層次分明，非常香。",
              "descEn": "Filled with crispy roasted pork belly chunks. Very savory."
            },
            {
              "nameVi": "Bánh Mì Ốp La",
              "nameZh": "煎蛋法包",
              "nameEn": "Fried Egg Banh Mi",
              "price": "15k - 20k VND",
              "descZh": "最常見的早餐選擇，熱騰騰的現煎荷包蛋配上一點醬油。",
              "descEn": "Popular breakfast option: sunny-side-up eggs inside a warm baguette."
            },
            {
              "nameVi": "Bánh Mì Chả Cá",
              "nameZh": "炸魚餅法包",
              "nameEn": "Fish Cake Banh Mi",
              "price": "20k - 30k VND",
              "descZh": "中南部常見口味，夾入現炸Ｑ彈魚餅與特製甜辣醬。",
              "descEn": "Common in central/south. Includes bouncy fried fish cakes and sweet chili."
            }
          ]
        }
      ],
      "orderingTipsZh": [
        "辣度調整：Không cay (不辣) / Ít cay (微辣) / Nhiều ớt (多辣椒)",
        "不吃香菜：Không ngò (不加香菜)"
      ],
      "orderingTipsEn": [
        "Spiciness: Không cay (Not spicy) / Ít cay (Mild) / Nhiều ớt (Extra chili)",
        "No cilantro: Không ngò"
      ]
    },
    "dialogues": [
      {
        "speaker": "Cô bán hàng (老闆娘)",
        "role": "npc",
        "viet": "Cháu ơi, ăn bánh mì gì? Có ăn pa-tê và bơ không?",
        "zh": "小朋友/帥哥，吃什麼麵包呀？吃肝醬和奶油嗎？",
        "en": "Hello dear, what banh mi do you want? Do you eat pate and butter?",
        "northTip": "路邊攤長輩常親切稱呼顧客為「Cháu」(晚輩) 或「Em」。",
        "southTip": "「Pa-tê」是越式法包的靈魂所在，香濃潤口。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho cháu một ổ bánh mì thịt đặc biệt, nhiều pa-tê nhé.",
        "zh": "給我一份特製綜合豬肉法國麵包，肝醬多抹一點喔。",
        "en": "Please give me one special combination meat banh mi with extra pate.",
        "northTip": "量詞南越用「ổ」(條/個)，北越有時說「cái」。",
        "southTip": "「Đặc biệt」是特製豪華版，配料最豐富。"
      },
      {
        "speaker": "Cô bán hàng (老闆娘)",
        "role": "npc",
        "viet": "Có ăn ớt cay và rau ngò không cháu?",
        "zh": "吃辣和香菜嗎？",
        "en": "Do you want spicy chilies and cilantro?",
        "northTip": "越式生辣椒非常辛辣，怕辣請說「không ăn cay」。",
        "southTip": "「Rau ngò」即香菜，在法包裡能去膩提鮮。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Dạ không ăn cay, không lấy ớt, cho cháu nhiều rau ngò nhé.",
        "zh": "不要辣，不放辣椒，香菜幫我多放一點喔。",
        "en": "No spicy please, no chili, but lots of cilantro.",
        "northTip": "「Không ăn cay」是旅行必學免受辣痛救命句！",
        "southTip": "加酸甜醃蘿蔔絲叫「đồ chua」。"
      },
      {
        "speaker": "Cô bán hàng (老闆娘)",
        "role": "npc",
        "viet": "Xong rồi đây! Hai ổ của cháu hết năm mươi nghìn.",
        "zh": "好囉！你的兩份總共是五萬越南盾 (50,000 VND)。",
        "en": "All done! Two loaves for 50,000 VND.",
        "northTip": "路邊攤通常只能以現金支付 (Tiền mặt)。",
        "southTip": "現代攤販也越來越普及掃描 QR Code 付款 (Quét mã)。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách)",
      "userRoleEn": "Customer (Khách)",
      "partnerRoleZh": "法包攤阿姨 (Cô bán hàng)",
      "partnerRoleEn": "Banh Mi Vendor (Cô bán hàng)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Cháu ơi, ăn bánh mì gì? Có ăn pa-tê và bơ không?",
          "partnerPromptZh": "吃什麼法國麵包？吃肝醬和美乃滋奶油嗎？",
          "partnerPromptEn": "What banh mi do you want? Do you take pate and butter?",
          "userOptions": [
            {
              "id": "bm1_opt1",
              "textVi": "Cho cháu một ổ bánh mì thịt đặc biệt, nhiều pa-tê nhé.",
              "textZh": "給我一份特製綜合肉法包，多加肝醬。",
              "textEn": "Give me one special combination banh mi with extra pate.",
              "isCorrect": true,
              "feedbackZh": "完美！特製豪華版 (đặc biệt) 包含了扎肉、叉燒與滿滿肝醬。",
              "feedbackEn": "Great! Banh mi dac biet is the best choice."
            },
            {
              "id": "bm1_opt2",
              "textVi": "Cho tôi một bát cơm chiên.",
              "textZh": "給我一碗炒飯。",
              "textEn": "Give me a bowl of fried rice.",
              "isCorrect": false,
              "feedbackZh": "這裡是法包攤，沒有賣炒飯喔！",
              "feedbackEn": "This cart only sells banh mi, no fried rice."
            },
            {
              "id": "bm1_opt3",
              "textVi": "Tôi muốn mua mười lít xăng.",
              "textZh": "我想買十公升汽油。",
              "textEn": "I want 10 liters of gasoline.",
              "isCorrect": false,
              "feedbackZh": "情境完全錯誤。",
              "feedbackEn": "Completely irrelevant."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Có ăn ớt cay và rau ngò không cháu?",
          "partnerPromptZh": "吃辣椒和香菜嗎？",
          "partnerPromptEn": "Do you want spicy chilies and cilantro?",
          "userOptions": [
            {
              "id": "bm2_opt1",
              "textVi": "Dạ không ăn cay, không lấy ớt, cho cháu nhiều rau ngò nhé.",
              "textZh": "不吃辣、不放辣椒，請多放香菜。",
              "textEn": "No spicy, no chili, extra cilantro please.",
              "isCorrect": true,
              "feedbackZh": "清楚明確的客製化指示！",
              "feedbackEn": "Clear customization instruction!"
            },
            {
              "id": "bm2_opt2",
              "textVi": "Cho cháu một chai rượu vang.",
              "textZh": "給我一瓶紅酒。",
              "textEn": "Give me a bottle of wine.",
              "isCorrect": false,
              "feedbackZh": "街頭小攤沒有販售紅酒。",
              "feedbackEn": "Street carts do not sell wine."
            },
            {
              "id": "bm2_opt3",
              "textVi": "Tôi không thích ăn bánh mì.",
              "textZh": "我不喜歡吃麵包。",
              "textEn": "I do not like bread.",
              "isCorrect": false,
              "feedbackZh": "在點餐時這樣回答不符合對話邏輯。",
              "feedbackEn": "Illogical response."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Xong rồi đây! Của cháu hết ba mươi nghìn đồng nhé.",
          "partnerPromptZh": "包好囉！你的總共是三萬越南盾。",
          "partnerPromptEn": "Here you go! It is 30,000 VND.",
          "userOptions": [
            {
              "id": "bm3_opt1",
              "textVi": "Dạ cháu gửi tiền cô nhé. Bánh mì nóng giòn ngon quá.",
              "textZh": "好的我給您錢。麵包熱騰騰酥脆好香啊。",
              "textEn": "Here is the money. The bread is so hot and crispy.",
              "isCorrect": true,
              "feedbackZh": "禮貌付款並讚美攤販，非常受在地人喜愛！",
              "feedbackEn": "Polite payment and friendly compliment!"
            },
            {
              "id": "bm3_opt2",
              "textVi": "Tôi chỉ có tiền đô la Mỹ.",
              "textZh": "我只有美金。",
              "textEn": "I only have US Dollars.",
              "isCorrect": false,
              "feedbackZh": "街頭攤販通常只收越南盾現金 (VND)。",
              "feedbackEn": "Street stalls only take VND cash."
            },
            {
              "id": "bm3_opt3",
              "textVi": "Để cháu nợ lần sau trả nhé.",
              "textZh": "讓我賒帳下次付吧。",
              "textEn": "Let me pay next time.",
              "isCorrect": false,
              "feedbackZh": "初次光顧不可隨意賒帳喔。",
              "feedbackEn": "Cannot ask for credit as a visitor."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Bánh mì thịt",
        "zh": "豬肉綜合法國麵包",
        "en": "Pork meat banh mi",
        "phonetic": "[baɲ mi tʰit]",
        "note": "最經典國民款式"
      },
      {
        "viet": "Bánh mì ốp la / trứng",
        "zh": "雙煎蛋法國麵包",
        "en": "Fried egg banh mi",
        "phonetic": "[baɲ mi op la]",
        "note": "現煎荷包蛋香氣四溢"
      },
      {
        "viet": "Bánh mì chả lụa",
        "zh": "越式白扎肉法國麵包",
        "en": "Vietnamese pork sausage banh mi",
        "phonetic": "[baɲ mi ca luə]",
        "note": "扎肉 Q 彈無比"
      },
      {
        "viet": "Bánh mì heo quay",
        "zh": "脆皮烤乳豬法國麵包",
        "en": "Crispy roast pork banh mi",
        "phonetic": "[baɲ mi hɛw kwaːj]",
        "note": "肉皮香脆多汁"
      },
      {
        "viet": "Pa-tê",
        "zh": "豬肝醬（靈魂抹醬）",
        "en": "Liver pate",
        "phonetic": "[pa te]",
        "note": "滋潤酥脆麵包"
      },
      {
        "viet": "Bơ",
        "zh": "越式黃油美乃滋",
        "en": "Vietnamese mayonnaise/butter",
        "phonetic": "[bə]",
        "note": "蛋黃打發濃郁"
      },
      {
        "viet": "Đồ chua",
        "zh": "酸甜醃紅白蘿蔔絲",
        "en": "Pickled daikon and carrots",
        "phonetic": "[do cuə]",
        "note": "爽口解膩必備"
      },
      {
        "viet": "Rau mùi / Ngò rí",
        "zh": "香菜 / 芫荽",
        "en": "Cilantro / Coriander",
        "phonetic": "[zaw muj / ŋɔ zi]",
        "note": "北越叫 rau mùi，南越叫 ngò"
      },
      {
        "viet": "Không lấy ớt",
        "zh": "不要辣椒 / 不加辣",
        "en": "No chili",
        "phonetic": "[xoŋ ləj ət]",
        "note": "怕辣必背金句"
      }
    ],
    "culturalTips": {
      "titleZh": "法國殖民演變出的世界名物：越式法包",
      "titleEn": "The Story Behind Banh Mi",
      "tipsZh": [
        "越式法包 (Bánh mì) 融合了法國長棍麵包的酥脆外皮與越南在地大米粉配方，口感外極度酥脆、內裡輕盈鬆軟。",
        "好吃的法包核心在於攤主自製的豬肝肉醬 (Pa-tê) 與手工蛋黃美乃滋 (Bơ trứng)。",
        "現買現吃是最高享受！攤販通常會在小烤箱或炭火上把麵包重新烤熱 1 分鐘後才夾料。"
      ],
      "tipsEn": [
        "Banh Mi combines the French baguette crust with Vietnamese rice flour for an ultra-crispy outside and airy inside.",
        "The secret soul lies in homemade liver pate (Pa-tê) and golden egg yolk butter spread.",
        "Always eat it fresh! Vendors toast the bread on small grills before stuffing it with ingredients."
      ],
      "proTipZh": "✨ 避坑：越南的生朝天椒 (Ớt hiểm) 辣度驚人，吃微辣請說「cho ít ớt」(少放辣)，完全不吃辣講「không ăn cay」！",
      "proTipEn": "✨ Pro Tip: Fresh bird’s eye chilies are fiery hot. Ask for \"Ít ớt\" (little chili) or \"Không ăn cay\" (no spicy)!"
    }
  },
  {
    "id": "seafood",
    "category": "dining",
    "tagZh": "在地夜宵",
    "tagEn": "Night Seafood Feast",
    "icon": "🦐",
    "image": "market.jpg",
    "titleZh": "海鮮大排檔炒螺肉、敬酒乾杯與結帳",
    "titleEn": "Seafood Street Stall (Quán Ốc) Dining & Toasting",
    "titleVi": "Ăn Hải Sản & Nhậu Tại Quán Ốc Vỉa Hè",
    "summaryZh": "體驗西貢最熱鬧的「Nhậu」(飲酒宵夜) 文化，點蒜香奶油炒香螺、鹽烤斑節蝦、大喊「Mot Hai Ba Dzo」乾杯。",
    "summaryEn": "Experience Saigon nightlife culture (Nhậu), order garlic butter snails, grilled tiger prawns, and shout cheers!",
    "dialogues": [
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Dạ chào anh chị! Hôm nay có ốc hương xào bơ tỏi và tôm nướng muối ớt rất tươi ạ.",
        "zh": "您好！今天有剛到的大蒜奶油炒香螺和鹽烤辣椒大蝦，非常新鮮喔！",
        "en": "Hello! Today we have fresh garlic butter snails and salt-chili grilled prawns.",
        "northTip": "海鮮排檔在越南叫「Quán Hải Sản」或「Quán Ốc」。",
        "southTip": "南越西貢吃螺 (Ăn ốc) 是夜生活社交必經行程。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh một đĩa ốc hương xào bơ tỏi và nửa ký tôm sú nướng nhé.",
        "zh": "給我一份大蒜奶油炒香螺，和半公斤鹽烤草蝦。",
        "en": "Give me a plate of garlic butter snails and half a kilo of grilled tiger prawns.",
        "northTip": "重量單位一公斤叫「một cân」或「một ký」。",
        "southTip": "「Ốc hương」是肉質彈牙的高級甜香螺。"
      },
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Anh uống bia gì? Quán em có bia Sài Gòn Special và bia Tiger bạc.",
        "zh": "哥喝什麼啤酒呢？我們有特級西貢啤酒和虎牌晶融啤酒。",
        "en": "What beer would you like? We have Saigon Special and Tiger Crystal.",
        "northTip": "北越人喝河內啤酒 (Bia Hà Nội)，南越喝西貢啤酒 (Bia Sài Gòn)。",
        "southTip": "啤酒通常配整桶冰塊 (Xô đá) 倒進杯子喝。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh bốn lon bia Sài Gòn và một ca đá nhé. Một, hai, ba, dô!",
        "zh": "給我四罐西貢啤酒和一壺冰塊。一、二、三，乾杯！",
        "en": "Give me four cans of Saigon beer and an ice bucket. One, two, three, cheers!",
        "northTip": "乾杯口號「Một, hai, ba, dô!」全越南通用熱情四射！",
        "southTip": "喝啤酒敬酒必須全員碰杯同喝。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách)",
      "userRoleEn": "Customer (Khách)",
      "partnerRoleZh": "大排檔店員 (Nhân viên)",
      "partnerRoleEn": "Seafood Waiter (Nhân viên)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ chào anh chị! Hôm nay có ốc hương xào bơ tỏi và tôm nướng muối ớt rất tươi ngon ạ.",
          "partnerPromptZh": "您好！今天大蒜奶油炒香螺和鹽烤辣椒蝦非常鮮美喔！",
          "partnerPromptEn": "Hello! Today our garlic butter snails and grilled prawns are very fresh.",
          "userOptions": [
            {
              "id": "sf1_opt1",
              "textVi": "Cho anh một đĩa ốc hương xào bơ tỏi và nửa ký tôm sú nướng nhé.",
              "textZh": "給我一份蒜香奶油炒香螺和半公斤烤草蝦。",
              "textEn": "Give me one plate of garlic butter snails and half kilo of grilled prawns.",
              "isCorrect": true,
              "feedbackZh": "太懂點了！蒜香奶油醬汁配法包沾著吃是極品！",
              "feedbackEn": "Awesome choice! Garlic butter sauce with bread is heavenly."
            },
            {
              "id": "sf1_opt2",
              "textVi": "Cho tôi một tô kem socola.",
              "textZh": "給我一碗巧克力冰淇淋。",
              "textEn": "Give me chocolate ice cream.",
              "isCorrect": false,
              "feedbackZh": "海鮮熱炒攤沒有賣冰淇淋喔。",
              "feedbackEn": "Seafood stalls do not sell ice cream."
            },
            {
              "id": "sf1_opt3",
              "textVi": "Tôi bị dị ứng hải sản, cho tôi thịt gà.",
              "textZh": "我對海鮮過敏，給我雞肉。",
              "textEn": "I am allergic to seafood, give me chicken.",
              "isCorrect": false,
              "feedbackZh": "海鮮大排檔主要供應海鮮產品。",
              "feedbackEn": "Seafood stall specializes in seafood."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Anh chị dùng bia Sài Gòn hay nước ngọt gì không ạ?",
          "partnerPromptZh": "哥喝西貢啤酒還是汽水飲料呢？",
          "partnerPromptEn": "Would you like Saigon beer or soft drinks?",
          "userOptions": [
            {
              "id": "sf2_opt1",
              "textVi": "Cho anh bốn lon bia Sài Gòn Special ướp lạnh và một ca đá nhé.",
              "textZh": "給我四罐冰鎮西貢特級啤酒和一大壺冰塊。",
              "textEn": "Give me four cold Saigon Special beers and an ice pitcher.",
              "isCorrect": true,
              "feedbackZh": "完美！加冰塊喝啤酒是在地最道地的「Nhậu」文化。",
              "feedbackEn": "Perfect! Drinking beer with ice is classic Vietnamese dining style."
            },
            {
              "id": "sf2_opt2",
              "textVi": "Cho tôi trà sữa trân châu đường đen.",
              "textZh": "給我黑糖珍珠鮮奶。",
              "textEn": "Give me brown sugar boba milk.",
              "isCorrect": false,
              "feedbackZh": "熱炒店沒有手搖珍珠奶茶。",
              "feedbackEn": "No boba tea in seafood stalls."
            },
            {
              "id": "sf2_opt3",
              "textVi": "Quán có rượu thuốc bắc không?",
              "textZh": "店家有中藥補酒嗎？",
              "textEn": "Do you have herbal medicine wine?",
              "isCorrect": false,
              "feedbackZh": "大排檔通常只供應啤酒和常規烈酒。",
              "feedbackEn": "Stalls typically serve beer."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Em dọn bàn xong rồi ạ. Anh chị cần thêm món gì nữa không?",
          "partnerPromptZh": "餐盤整理好囉，哥還需要加點什麼嗎？",
          "partnerPromptEn": "Finished cleaning table. Need anything else?",
          "userOptions": [
            {
              "id": "sf3_opt1",
              "textVi": "Em ơi, cho anh xin hóa đơn tính tiền bàn số 5 nhé.",
              "textZh": "店員弟，請給我5號桌的帳單結帳喔。",
              "textEn": "Excuse me, please bring the bill for table number 5.",
              "isCorrect": true,
              "feedbackZh": "標準結帳句型！",
              "feedbackEn": "Standard clear bill request!"
            },
            {
              "id": "sf3_opt2",
              "textVi": "Bữa này ai trả tiền thì trả, tôi không trả.",
              "textZh": "這餐誰要付就付，反正我不付。",
              "textEn": "Whoever wants to pay can pay, not me.",
              "isCorrect": false,
              "feedbackZh": "不禮貌的表達。",
              "feedbackEn": "Rude response."
            },
            {
              "id": "sf3_opt3",
              "textVi": "Cho tôi xin thêm mười thùng bia miễn phí.",
              "textZh": "請多送我十箱免費啤酒。",
              "textEn": "Give me 10 cases of free beer.",
              "isCorrect": false,
              "feedbackZh": "不合理要求。",
              "feedbackEn": "Unreasonable."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Ốc hương xào bơ tỏi",
        "zh": "大蒜奶油炒香螺",
        "en": "Garlic butter sweet snails",
        "phonetic": "[ok hɯəŋ saːw bə tɔj]",
        "note": "下酒必點頭牌"
      },
      {
        "viet": "Tôm nướng muối ớt",
        "zh": "鹽烤辣椒鮮蝦",
        "en": "Salt & chili grilled prawns",
        "phonetic": "[tom nɯəŋ muəj ət]",
        "note": "鹹香辣鮮"
      },
      {
        "viet": "Mực nướng sa tế",
        "zh": "沙茶烤魷魚",
        "en": "Grilled squid with satay",
        "phonetic": "[mɯk nɯəŋ sa te]",
        "note": "焦香彈牙"
      },
      {
        "viet": "Nghêu hấp sả",
        "zh": "香茅清蒸蛤蜊",
        "en": "Steamed clams with lemongrass",
        "phonetic": "[ŋew həp sa]",
        "note": "湯汁清爽甘甜"
      },
      {
        "viet": "Càng ghẹ rang muối",
        "zh": "鹽焗花蟹鉗",
        "en": "Salt-roasted crab claws",
        "phonetic": "[kaːŋ ɣɛ zaːŋ muəj]",
        "note": "肉厚鮮甜"
      },
      {
        "viet": "Một, hai, ba, dô!",
        "zh": "一、二、三，乾杯！",
        "en": "One, two, three, cheers!",
        "phonetic": "[mot haːj ba zo]",
        "note": "越南聚餐靈魂口號"
      },
      {
        "viet": "Tính tiền / Thanh toán",
        "zh": "結帳 / 買單",
        "en": "Check the bill / Pay",
        "phonetic": "[tiɲ tiən / tʰaɲ twaːn]",
        "note": "用完餐結帳"
      }
    ],
    "culturalTips": {
      "titleZh": "深入西貢「Nhậu」(熱炒喝酒) 夜市排檔文化",
      "titleEn": "Saigon Nhậu Seafood Culture",
      "tipsZh": [
        "在越南，海鮮螺肉大排檔是下班社交放鬆的聖地。桌椅通常是矮塑料桌椅 (Bàn ghế nhựa)。",
        "喝啤酒時服務員會主動往杯子裡塞一大塊圓柱形冰塊 (Đá cây)，酒溫隨時保持冰涼透心。",
        "敬酒時每個人都要大喊「Một, hai, ba, dô! Hai, ba, dô! Hai, ba, uống!」氣氛極為歡樂熱鬧。"
      ],
      "tipsEn": [
        "Drinking and eating snails (Ăn ốc nhậu) is a core social lifestyle in Vietnam, seated on colorful plastic stools.",
        "Waiters constantly replenish large cylindrical ice blocks directly into beer glasses to keep it ice-cold.",
        "Join the infectious cheer: \"Một, hai, ba, dô!\" before taking sips with friends."
      ],
      "proTipZh": "✨ 避坑：大排檔桌上放的濕紙巾 (Khăn lạnh) 與花生小菜通常不是免費的，有用才會計費 (約 2,000 - 5,000 VND)，不用不收費。",
      "proTipEn": "✨ Pro Tip: Wet towels (Khăn lạnh) and peanuts on the table are charged if used (around 3k-5k VND), left untouched are free."
    }
  },
  {
    "id": "boba_che",
    "category": "dining",
    "tagZh": "下午茶甜點",
    "tagEn": "Dessert & Boba",
    "icon": "🧋",
    "image": "cafe.jpg",
    "titleZh": "手搖奶茶與傳統越式甜湯 (Chè) 點餐",
    "titleEn": "Ordering Boba Milk Tea & Traditional Sweet Soup (Chè)",
    "titleVi": "Gọi Trà Sữa & Chè Truyền Thống",
    "summaryZh": "學會手搖飲料客製化糖度 (Đường)、冰量 (Đá)、加黑糖珍珠 (Trân châu) 與品嚐傳統柚皮甜湯 (Chè bưởi)、三色冰 (Chè ba màu)。",
    "summaryEn": "Customize boba milk tea sugar/ice levels, add toppings, and order traditional Pomelo sweet soup (Chè bưởi).",
    "dialogues": [
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Em chào anh! Anh gọi trà sữa hay chè truyền thống ạ?",
        "zh": "你好哥！請問要點手搖奶茶還是傳統甜湯呢？",
        "en": "Hello! Would you like milk tea or traditional sweet soup?",
        "northTip": "「Chè」在北越常指茶葉茶飲，但在全越南甜點中指的是「甜湯/糖水」。",
        "southTip": "南越的 Chè 口味濃郁，常加入香濃現煮椰奶 (Nước cốt dừa)。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh một ly trà sữa trân châu đường đen và một bát chè bưởi nhé.",
        "zh": "給我一杯黑糖珍珠鮮奶茶，和一碗柚子皮甜湯。",
        "en": "Please give me one brown sugar boba milk tea and a bowl of pomelo sweet soup.",
        "northTip": "珍珠在越南叫「Trân châu」。",
        "southTip": "「Chè bưởi」(柚皮甜湯) 脆嫩爽口，是越南必吃經典甜品。"
      },
      {
        "speaker": "Nhân viên (店員)",
        "role": "npc",
        "viet": "Trà sữa anh lấy bao nhiêu phần trăm đường và đá ạ?",
        "zh": "奶茶您要幾分糖和幾分冰呢？",
        "en": "What percentage of sugar and ice for your milk tea?",
        "northTip": "百分比越南語為「phần trăm (%)」。",
        "southTip": "微糖通常選「ba mươi phần trăm đường」(30% 糖)。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh ba mươi phần trăm đường và năm mươi phần trăm đá nhé.",
        "zh": "幫我做三分糖（30%）、半冰（50% 冰）喔。",
        "en": "Give me 30% sugar and 50% ice please.",
        "northTip": "台灣手搖飲風靡全越南，糖冰調整與台灣習慣完全通用！",
        "southTip": "甜湯 (Chè) 預設會附碎冰 (Đá bào)。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách)",
      "userRoleEn": "Customer (Khách)",
      "partnerRoleZh": "甜品店員 (Nhân viên)",
      "partnerRoleEn": "Dessert Barista (Nhân viên)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Em chào anh! Anh gọi trà sữa hay chè truyền thống ạ?",
          "partnerPromptZh": "你好哥！要點奶茶還是傳統甜湯？",
          "partnerPromptEn": "Hello! Milk tea or traditional sweet soup?",
          "userOptions": [
            {
              "id": "bc1_opt1",
              "textVi": "Cho anh một ly trà sữa trân châu đường đen và một bát chè bưởi nhé.",
              "textZh": "給我一杯黑糖珍珠鮮奶茶和一碗柚皮甜湯。",
              "textEn": "One brown sugar boba milk tea and one bowl of pomelo sweet soup please.",
              "isCorrect": true,
              "feedbackZh": "很棒的組合！甜湯配奶茶是一大享受。",
              "feedbackEn": "Great combo! Boba tea and traditional pomelo soup."
            },
            {
              "id": "bc1_opt2",
              "textVi": "Cho tôi một cân thịt bò.",
              "textZh": "給我一公斤生牛肉。",
              "textEn": "Give me 1kg of raw beef.",
              "isCorrect": false,
              "feedbackZh": "甜品店沒有賣生肉。",
              "feedbackEn": "Dessert shops do not sell meat."
            },
            {
              "id": "bc1_opt3",
              "textVi": "Tôi muốn đi bơi.",
              "textZh": "我想去游泳。",
              "textEn": "I want to go swimming.",
              "isCorrect": false,
              "feedbackZh": "離題了。",
              "feedbackEn": "Irrelevant."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Trà sữa anh lấy bao nhiêu phần trăm đường và đá ạ?",
          "partnerPromptZh": "奶茶您要幾分糖和幾分冰呢？",
          "partnerPromptEn": "What percentage of sugar and ice for the milk tea?",
          "userOptions": [
            {
              "id": "bc2_opt1",
              "textVi": "Cho anh ba mươi phần trăm đường và năm mươi phần trăm đá nhé.",
              "textZh": "給我三分糖（30% 糖）和半冰（50% 冰）。",
              "textEn": "Give me 30% sugar and 50% ice please.",
              "isCorrect": true,
              "feedbackZh": "精確標準的台灣客製化甜度冰量說法！",
              "feedbackEn": "Accurate sugar and ice specification!"
            },
            {
              "id": "bc2_opt2",
              "textVi": "Cho tôi một trăm độ C nước nóng.",
              "textZh": "給我100度熱水。",
              "textEn": "Give me 100 degrees boiling water.",
              "isCorrect": false,
              "feedbackZh": "手搖冷飲通常不這樣指定。",
              "feedbackEn": "Not standard for iced boba."
            },
            {
              "id": "bc2_opt3",
              "textVi": "Đừng cho trà, chỉ cho đường thôi.",
              "textZh": "別加茶，只加純糖。",
              "textEn": "No tea, only sugar.",
              "isCorrect": false,
              "feedbackZh": "這不是正常飲料做法。",
              "feedbackEn": "Abnormal drink order."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ đồ uống của anh xong rồi, tổng cộng bốn mươi lăm nghìn đồng ạ.",
          "partnerPromptZh": "您的飲品做好囉，總共是四萬五千盾。",
          "partnerPromptEn": "Your drink is ready, total is 45,000 VND.",
          "userOptions": [
            {
              "id": "bc3_opt1",
              "textVi": "Cảm ơn em, anh gửi tiền mặt nhé.",
              "textZh": "謝謝你，我付現金喔。",
              "textEn": "Thank you, here is cash.",
              "isCorrect": true,
              "feedbackZh": "清楚的付現表達！",
              "feedbackEn": "Clear cash payment phrase!"
            },
            {
              "id": "bc3_opt2",
              "textVi": "Tôi muốn chuyển khoản bằng thẻ xe buýt.",
              "textZh": "我想用公車卡轉帳。",
              "textEn": "I want to pay with bus card.",
              "isCorrect": false,
              "feedbackZh": "公車卡不能用來手搖店轉帳。",
              "feedbackEn": "Bus cards cannot transfer money."
            },
            {
              "id": "bc3_opt3",
              "textVi": "Đổi cho tôi ly to gấp đôi.",
              "textZh": "幫我換成兩倍大的杯子。",
              "textEn": "Change to double size.",
              "isCorrect": false,
              "feedbackZh": "做好後不能直接無償升級喔。",
              "feedbackEn": "Cannot upgrade size after made."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Trà sữa trân châu",
        "zh": "珍珠奶茶",
        "en": "Bubble milk tea",
        "phonetic": "[ca sɯə cən cəw]",
        "note": "高人氣飲品"
      },
      {
        "viet": "Trân châu đường đen",
        "zh": "黑糖珍珠",
        "en": "Brown sugar boba",
        "phonetic": "[cən cəw dɯəŋ dɛn]",
        "note": "軟糯香甜"
      },
      {
        "viet": "Chè bưởi",
        "zh": "柚皮綠豆甜湯",
        "en": "Pomelo sweet soup",
        "phonetic": "[cɛ bɯəj]",
        "note": "口感爽脆椰香濃郁"
      },
      {
        "viet": "Chè ba màu",
        "zh": "三色冰（紅豆/綠豆/粉粿/椰奶）",
        "en": "Three-color dessert",
        "phonetic": "[cɛ ba maːw]",
        "note": "南越經典消暑冰品"
      },
      {
        "viet": "Phần trăm (%)",
        "zh": "百分比",
        "en": "Percent",
        "phonetic": "[fən cam]",
        "note": "指定甜度冰量必備"
      }
    ],
    "culturalTips": {
      "titleZh": "越南手搖飲盛況與百年甜湯 Chè",
      "titleEn": "Vietnam Boba Craze & Historic Chè",
      "tipsZh": [
        "越南年輕人極度熱愛台灣奶茶（KOI Thé, Gong Cha, Phê La 等），甜度建議選 30% 或 50%，預設 100% 全糖通常非常甜。",
        "傳統甜湯「Chè」有數十種款式，熱食滋補、冷食配碎冰消暑，是越南文化中歷史悠久的國民點心。"
      ],
      "tipsEn": [
        "Boba tea is massive in Vietnam. We recommend 30% or 50% sugar as 100% is very sweet.",
        "Traditional Chè has dozens of varieties featuring lotus seeds, coconut milk, jelly, and pomelo rind."
      ],
      "proTipZh": "✨ 避坑：買 Chè 時店家會給一小碗甜湯和一小碗碎冰，自己一勺一勺把碎冰加進甜湯裡攪拌吃，最能保持爽脆！",
      "proTipEn": "✨ Pro Tip: When eating Chè, spoon crushed ice gradually into the bowl to keep toppings crispy!"
    }
  },
  {
    "id": "airport",
    "category": "travel",
    "tagZh": "出國通關",
    "tagEn": "Airport & Customs",
    "icon": "✈️",
    "image": "airport.jpg",
    "titleZh": "國際機場辦理登機、過海關與托運行李",
    "titleEn": "Airport Check-In, Baggage Drop & Customs Clearance",
    "titleVi": "Làm Thủ Tục Tại Sân Bay & Hải Quan",
    "summaryZh": "機場櫃台出示護照 (Hộ chiếu)、登機證 (Thẻ lên máy bay)、行李托運 (Hành lý ký gửi) 與挑選靠窗靠走道座位。",
    "summaryEn": "Navigate check-in counter, baggage drop, window/aisle seat selection, and customs declaration.",
    "dialogues": [
      {
        "speaker": "Nhân viên sân bay (地勤)",
        "role": "npc",
        "viet": "Xin chào quý khách, xin vui lòng cho xem hộ chiếu và vé máy bay ạ.",
        "zh": "您好貴賓，請出示您的護照和機票。",
        "en": "Hello, please show your passport and flight ticket.",
        "northTip": "河內內排機場 (Sân bay Nội Bài) 地勤講標準北越音。",
        "southTip": "胡志明新山一機場 (Sân bay Tân Sơn Nhất) 講南越音。"
      },
      {
        "speaker": "Hành khách (旅客)",
        "role": "learner",
        "viet": "Dạ hộ chiếu và vé của tôi đây. Tôi bay chuyến đi Đài Bắc.",
        "zh": "好的，這是我的護照和機票。我搭乘飛往台北的航班。",
        "en": "Here are my passport and ticket. I am flying to Taipei.",
        "northTip": "台北在越南語叫「Đài Bắc」，高雄叫「Cao Hùng」。",
        "southTip": "禮貌遞證件可說「Gửi bạn / Gửi chị」。"
      },
      {
        "speaker": "Nhân viên sân bay (地勤)",
        "role": "npc",
        "viet": "Anh có bao nhiêu kiện hành lý ký gửi ạ? Có mang theo pin sạc dự phòng không?",
        "zh": "請問您有幾件托運行李？隨身有攜帶行動電源（充電寶）嗎？",
        "en": "How many pieces of checked luggage? Do you have power banks with you?",
        "northTip": "行動電源必須隨身攜帶，不能托運！",
        "southTip": "托運行李叫「Hành lý ký gửi」，隨身行李叫「Hành lý xách tay」。"
      },
      {
        "speaker": "Hành khách (旅客)",
        "role": "learner",
        "viet": "Tôi có một kiện ký gửi hai mươi ký. Cho tôi chọn ghế cạnh cửa sổ nhé.",
        "zh": "我有一件二十公斤的托運行李。請幫我安排靠窗座位喔。",
        "en": "I have one checked bag weighing 20kg. Please give me a window seat.",
        "northTip": "靠窗座位叫「ghế cạnh cửa sổ」，走道座位叫「ghế gần lối đi」。",
        "southTip": "兩個人同行想坐一起可說「cho hai người ngồi cạnh nhau」。"
      },
      {
        "speaker": "Nhân viên sân bay (地勤)",
        "role": "npc",
        "viet": "Đây là thẻ lên máy bay của anh. Cửa số 12, lên máy bay lúc mười bốn giờ ba mươi nhé.",
        "zh": "這是您的登機證。在 12 號登機門，十四點三十分開始登機喔。",
        "en": "Here is your boarding pass. Gate 12, boarding at 14:30.",
        "northTip": "登機門叫「Cửa ra máy bay」或「Cổng số」。",
        "southTip": "祝旅途愉快會說「Chúc anh chuyến đi vui vẻ!」"
      }
    ],
    "rolePlay": {
      "userRoleZh": "旅客 (Hành khách)",
      "userRoleEn": "Passenger (Hành khách)",
      "partnerRoleZh": "機場地勤人員 (Nhân viên sân bay)",
      "partnerRoleEn": "Check-in Agent (Nhân viên sân bay)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Xin chào quý khách, xin vui lòng cho xem hộ chiếu và vé máy bay ạ.",
          "partnerPromptZh": "您好貴賓，請出示您的護照和機票。",
          "partnerPromptEn": "Hello, please show your passport and flight ticket.",
          "userOptions": [
            {
              "id": "ap1_opt1",
              "textVi": "Dạ hộ chiếu và vé của tôi đây. Tôi bay chuyến đi Đài Bắc.",
              "textZh": "這是我的護照和機票，我飛往台北。",
              "textEn": "Here is my passport and ticket. I fly to Taipei.",
              "isCorrect": true,
              "feedbackZh": "完美標準的櫃台值機開場！",
              "feedbackEn": "Perfect check-in opening statement!"
            },
            {
              "id": "ap1_opt2",
              "textVi": "Tôi không mang giấy tờ gì cả.",
              "textZh": "我沒帶任何證件。",
              "textEn": "I did not bring any documents.",
              "isCorrect": false,
              "feedbackZh": "出國登機必須出示護照喔。",
              "feedbackEn": "Passport is required for flight check-in."
            },
            {
              "id": "ap1_opt3",
              "textVi": "Cho tôi lái máy bay thử một đoạn.",
              "textZh": "讓我試開一段飛機。",
              "textEn": "Let me pilot the plane for a bit.",
              "isCorrect": false,
              "feedbackZh": "危險且荒謬的發言。",
              "feedbackEn": "Dangerous and absurd statement."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Anh có bao nhiêu kiện hành lý ký gửi ạ? Anh muốn ngồi ghế gần cửa sổ hay lối đi?",
          "partnerPromptZh": "您有幾件托運行李？想要靠窗還是走道座位？",
          "partnerPromptEn": "How many checked bags do you have? Window or aisle seat?",
          "userOptions": [
            {
              "id": "ap2_opt1",
              "textVi": "Tôi có một vali ký gửi hai mươi cân, cho tôi ghế cạnh cửa sổ nhé.",
              "textZh": "我有一件20公斤行李箱要托運，請給我靠窗座位。",
              "textEn": "I have one 20kg suitcase to check, window seat please.",
              "isCorrect": true,
              "feedbackZh": "極佳！精確交代了行李件數與偏好的座位類型。",
              "feedbackEn": "Excellent! Stated baggage details and seat preference."
            },
            {
              "id": "ap2_opt2",
              "textVi": "Tôi có mười con gà sống mang theo.",
              "textZh": "我隨身帶了十隻活雞。",
              "textEn": "I have ten live chickens with me.",
              "isCorrect": false,
              "feedbackZh": "活禽不能隨機搭機。",
              "feedbackEn": "Live animals cannot be checked without permits."
            },
            {
              "id": "ap2_opt3",
              "textVi": "Tôi muốn ngồi trên nóc máy bay.",
              "textZh": "我想坐在機頂吹風。",
              "textEn": "I want to sit on top of the plane.",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Impossible."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Đây là thẻ lên máy bay của anh. Cửa số 12, lên máy bay lúc mười bốn giờ ba mươi nhé.",
          "partnerPromptZh": "這是您的登機證。12號登機門，14:30開始登機。",
          "partnerPromptEn": "Here is your boarding pass. Gate 12, boarding at 14:30.",
          "userOptions": [
            {
              "id": "ap3_opt1",
              "textVi": "Cảm ơn cô, cửa an ninh đi lối nào vậy ạ?",
              "textZh": "謝謝您，請問安檢門往哪邊走呢？",
              "textEn": "Thank you, which way to security check?",
              "isCorrect": true,
              "feedbackZh": "非常自然實用的詢問安檢方向！",
              "feedbackEn": "Very practical question to ask for security directions!"
            },
            {
              "id": "ap3_opt2",
              "textVi": "Máy bay có thể đợi tôi đến tối được không?",
              "textZh": "飛機可以等我到晚上嗎？",
              "textEn": "Can the plane wait for me until evening?",
              "isCorrect": false,
              "feedbackZh": "航班時間是固定的，不能隨意更改延誤。",
              "feedbackEn": "Flight schedules are fixed."
            },
            {
              "id": "ap3_opt3",
              "textVi": "Tôi muốn đổi sang bay đi Mỹ ngay bây giờ.",
              "textZh": "我想立刻改飛去美國。",
              "textEn": "I want to change to USA right now.",
              "isCorrect": false,
              "feedbackZh": "地勤櫃台無法無故臨時變更非同航班航線。",
              "feedbackEn": "Cannot randomly reroute at boarding gate."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Hộ chiếu",
        "zh": "護照",
        "en": "Passport",
        "phonetic": "[ho ciəw]",
        "note": "出國必備身份證件"
      },
      {
        "viet": "Thẻ lên máy bay",
        "zh": "登機證 / 登機牌",
        "en": "Boarding pass",
        "phonetic": "[tʰɛ len maːj baːj]",
        "note": "登機必備"
      },
      {
        "viet": "Hành lý ký gửi",
        "zh": "托運行李",
        "en": "Checked luggage",
        "phonetic": "[haɲ li ki ɣɯj]",
        "note": "大件行李"
      },
      {
        "viet": "Hành lý xách tay",
        "zh": "隨身手提行李",
        "en": "Carry-on baggage",
        "phonetic": "[haɲ li saːk taːj]",
        "note": "限重 7kg 通常"
      },
      {
        "viet": "Ghế cạnh cửa sổ",
        "zh": "靠窗座位",
        "en": "Window seat",
        "phonetic": "[ɣe kaɲ kɯə so]",
        "note": "風景極佳"
      },
      {
        "viet": "Ghế gần lối đi",
        "zh": "靠走道座位",
        "en": "Aisle seat",
        "phonetic": "[ɣe ɣən loj di]",
        "note": "進出方便"
      },
      {
        "viet": "Cửa ra máy bay",
        "zh": "登機門 / 登機口",
        "en": "Boarding gate",
        "phonetic": "[kɯə za maːj baːj]",
        "note": "登機處"
      }
    ],
    "culturalTips": {
      "titleZh": "越南國際機場過關注意事項",
      "titleEn": "Vietnam Airport & Customs Tips",
      "tipsZh": [
        "越南海關規定入境攜帶現金超過 5,000 美金或 15,000,000 越南盾需主動申報。",
        "出海關時準備好電子簽證 (E-Visa) 列印紙本與回程機票行程單，能大幅加快通關速度。",
        "離開機場建議在航廈內叫 Grab 或搭乘正規排班計程車 (Vinasun / Mai Linh)，切勿跟隨航廈外拉客的野雞車司機。"
      ],
      "tipsEn": [
        "Customs requires declaration if carrying over $5,000 USD or 15 million VND cash.",
        "Keep printed copies of your E-Visa and return ticket ready for smooth immigration check.",
        "Book rides inside the terminal via Grab app or official taxi queues (Vinasun / Mai Linh) to avoid scams."
      ],
      "proTipZh": "✨ 避坑：過海關時請保持嚴肅、遵守動線，現在越南海關現代化規範嚴格，絕不需要主動給小費！",
      "proTipEn": "✨ Pro Tip: Follow immigration lines normally, modern Vietnam airport terminals strictly forbid informal tips."
    }
  },
  {
    "id": "hotel",
    "category": "travel",
    "tagZh": "住宿無憂",
    "tagEn": "Hotel Stay",
    "icon": "🏨",
    "image": "hotel.jpg",
    "titleZh": "飯店櫃台辦理入住 (Check-in)、退房與客房需求",
    "titleEn": "Hotel Check-In, Room Requests & Check-Out",
    "titleVi": "Nhận Phòng & Đặt Phòng Tại Khách Sạn",
    "summaryZh": "辦理飯店入住 (Nhận phòng)、詢問 Wi-Fi 密碼、早餐時間 (Bữa sáng)、要求多加枕頭與延遲退房 (Trả phòng muộn)。",
    "summaryEn": "Hotel check-in, deposit, asking for Wi-Fi, breakfast hours, extra pillows, and late check-out.",
    "dialogues": [
      {
        "speaker": "Lễ tân (櫃台接待)",
        "role": "npc",
        "viet": "Dạ xin chào quý khách! Anh chị đã đặt phòng trước chưa ạ?",
        "zh": "您好貴賓！請問您之前有預訂房間了嗎？",
        "en": "Hello! Have you booked a room with us in advance?",
        "northTip": "飯店櫃台稱「Lễ tân」。",
        "southTip": "「Đặt phòng」是預約訂房。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Tôi đã đặt phòng qua Agoda tên là Chen, phòng đôi hướng biển.",
        "zh": "我透過 Agoda 預訂了房間，名字是 Chen，海景雙人房。",
        "en": "I booked a double sea-view room via Agoda under the name Chen.",
        "northTip": "雙人房在越南語叫「Phòng đôi」，單人房叫「Phòng đơn」。",
        "southTip": "海景房叫「Phòng hướng biển / View biển」。"
      },
      {
        "speaker": "Lễ tân (櫃台接待)",
        "role": "npc",
        "viet": "Dạ em thấy rồi ạ. Xin anh cho mượn hộ chiếu và tiền đặt cọc năm trăm nghìn.",
        "zh": "查到您的預訂了。請借我護照登記，並支付押金五十萬越南盾。",
        "en": "Found your booking. Please lend me your passport and a 500,000 VND deposit.",
        "northTip": "押金在越南語叫「Tiền đặt cọc / Tiền cọc」。",
        "southTip": "通常退房 (Trả phòng) 時如無額外消費會全額退還。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Gửi em hộ chiếu và tiền cọc nhé. Mật khẩu Wi-Fi là gì vậy em?",
        "zh": "給你護照和押金。請問 Wi-Fi 密碼是多少呢？",
        "en": "Here is my passport and deposit. What is the Wi-Fi password?",
        "northTip": "密碼叫「Mật khẩu」。",
        "southTip": "詢問早餐時間可說「Bữa sáng từ mấy giờ đến mấy giờ?」"
      },
      {
        "speaker": "Lễ tân (櫃台接待)",
        "role": "npc",
        "viet": "Dạ phòng anh ở tầng 8, số 802. Bữa sáng miễn phí từ sáu giờ đến chín giờ rưỡi tại tầng 2 ạ.",
        "zh": "您的房間在 8 樓 802 號房。免費自助早餐在 2 樓，供應時間為 6:00 至 9:30。",
        "en": "Your room is 802 on 8th floor. Complimentary breakfast is 6:00 to 9:30 on 2nd floor.",
        "northTip": "房卡叫「Thẻ phòng」或「Chìa khóa phòng」。",
        "southTip": "電梯叫「Thang máy」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "住客 (Khách thuê)",
      "userRoleEn": "Guest (Khách thuê)",
      "partnerRoleZh": "飯店櫃台人員 (Lễ tân)",
      "partnerRoleEn": "Hotel Receptionist (Lễ tân)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ xin chào quý khách! Anh chị đã đặt phòng trước chưa ạ?",
          "partnerPromptZh": "您好貴賓！請問有提前預訂房間了嗎？",
          "partnerPromptEn": "Hello! Did you make a reservation beforehand?",
          "userOptions": [
            {
              "id": "ht1_opt1",
              "textVi": "Tôi đã đặt phòng qua mạng tên là Chen, phòng đôi hướng biển.",
              "textZh": "我網路訂房名字是 Chen，海景雙人房。",
              "textEn": "I booked online under Chen, double sea-view room.",
              "isCorrect": true,
              "feedbackZh": "完美！提供了姓名與房型資訊。",
              "feedbackEn": "Perfect! Provided name and room type."
            },
            {
              "id": "ht1_opt2",
              "textVi": "Tôi vào ngủ nhờ một lát được không?",
              "textZh": "我進來借睡一下可以嗎？",
              "textEn": "Can I crash here for a bit?",
              "isCorrect": false,
              "feedbackZh": "飯店需要正規辦理入住喔。",
              "feedbackEn": "Hotels require proper check-in."
            },
            {
              "id": "ht1_opt3",
              "textVi": "Bán cho tôi một căn nhà lầu.",
              "textZh": "賣給我一棟透天豪宅。",
              "textEn": "Sell me a multi-story house.",
              "isCorrect": false,
              "feedbackZh": "飯店是住宿場所，不是房屋仲介。",
              "feedbackEn": "Hotels provide rooms, not real estate sales."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Dạ thấy thông tin rồi ạ. Xin anh cho mượn hộ chiếu và đặt cọc năm trăm nghìn đồng.",
          "partnerPromptZh": "查到資料囉。請出示護照並支付押金五十萬盾。",
          "partnerPromptEn": "Found your booking. Passport and 500k deposit please.",
          "userOptions": [
            {
              "id": "ht2_opt1",
              "textVi": "Gửi bạn hộ chiếu và tiền cọc nhé. Cho tôi hỏi mật khẩu Wi-Fi là gì?",
              "textZh": "給您護照和押金。請問 Wi-Fi 密碼是多少？",
              "textEn": "Here is passport and deposit. What is the Wi-Fi password?",
              "isCorrect": true,
              "feedbackZh": "非常實用的入住詢問！",
              "feedbackEn": "Very practical hotel check-in inquiry!"
            },
            {
              "id": "ht2_opt2",
              "textVi": "Tôi không có tiền cọc, khách sạn tự chịu đi.",
              "textZh": "我沒押金，飯店自己承擔吧。",
              "textEn": "No deposit, hotel should bear it.",
              "isCorrect": false,
              "feedbackZh": "支付押金是飯店常規流程。",
              "feedbackEn": "Deposits are standard hotel policy."
            },
            {
              "id": "ht2_opt3",
              "textVi": "Khách sạn có tặng vàng cho khách không?",
              "textZh": "飯店有送房客黃金嗎？",
              "textEn": "Does hotel give free gold?",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Absurd request."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ phòng anh ở tầng 8, số 802. Bữa sáng miễn phí từ sáu giờ đến chín giờ rưỡi tại tầng 2 ạ.",
          "partnerPromptZh": "房間在8樓802。免費早餐6:00-9:30在2樓。",
          "partnerPromptEn": "Room 802 on 8th floor. Free breakfast 6:00-9:30 on 2nd floor.",
          "userOptions": [
            {
              "id": "ht3_opt1",
              "textVi": "Cảm ơn bạn nhiều. Thang máy đi hướng nào vậy?",
              "textZh": "非常感謝你。請問電梯往哪個方向走？",
              "textEn": "Thank you very much. Which way to the elevator?",
              "isCorrect": true,
              "feedbackZh": "禮貌且清楚地詢問電梯位置！",
              "feedbackEn": "Polite question asking for elevator directions!"
            },
            {
              "id": "ht3_opt2",
              "textVi": "Tôi muốn ăn sáng lúc nửa đêm.",
              "textZh": "我想在半夜吃早餐。",
              "textEn": "I want breakfast at midnight.",
              "isCorrect": false,
              "feedbackZh": "早餐有固定的供應時段。",
              "feedbackEn": "Breakfast has fixed morning hours."
            },
            {
              "id": "ht3_opt3",
              "textVi": "Đổi cho tôi phòng tầng hầm.",
              "textZh": "幫我換去地下室房間。",
              "textEn": "Move me to a basement room.",
              "isCorrect": false,
              "feedbackZh": "您預訂的是高樓層海景房喔。",
              "feedbackEn": "You booked a sea-view room."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Nhận phòng / Check-in",
        "zh": "辦理入住",
        "en": "Check-in",
        "phonetic": "[ɲən fɔŋ]",
        "note": "到店手續"
      },
      {
        "viet": "Trả phòng / Check-out",
        "zh": "退房結帳",
        "en": "Check-out",
        "phonetic": "[ca fɔŋ]",
        "note": "離開飯店"
      },
      {
        "viet": "Phòng đơn",
        "zh": "單人房",
        "en": "Single room",
        "phonetic": "[fɔŋ dən]",
        "note": "一張單人床"
      },
      {
        "viet": "Phòng đôi",
        "zh": "雙人房",
        "en": "Double / Twin room",
        "phonetic": "[fɔŋ doj]",
        "note": "雙人床或兩張單人床"
      },
      {
        "viet": "Tiền đặt cọc",
        "zh": "押金 / 保證金",
        "en": "Deposit",
        "phonetic": "[tiən dat kɔk]",
        "note": "退房時歸還"
      },
      {
        "viet": "Mật khẩu Wi-Fi",
        "zh": "無線網路密碼",
        "en": "Wi-Fi password",
        "phonetic": "[mat kʰəw]",
        "note": "上網必問"
      },
      {
        "viet": "Thang máy",
        "zh": "電梯",
        "en": "Elevator / Lift",
        "phonetic": "[tʰaːŋ maːj]",
        "note": "搭電梯上樓"
      }
    ],
    "culturalTips": {
      "titleZh": "越南飯店住宿實用技巧",
      "titleEn": "Vietnam Hotel Stay Guide",
      "tipsZh": [
        "辦理入住時飯店櫃台會要求暫時保留護照登記，或複印後立即歸還原件（部分星級飯店可要求當場複印後退回）。",
        "冰箱內的 Mini Bar 飲料零食大多額外收費，免費的瓶裝水通常放置在書桌或洗手台上，瓶身標有「Complimentary / Miễn phí」。",
        "退房時間普遍為中午 12:00，需要延遲退房可提前致電櫃台詢問「Trả phòng muộn」。"
      ],
      "tipsEn": [
        "Hotels will hold passports for police registration or photocopy them upon check-in.",
        "Mini-bar items in fridge are chargeable. Free water bottles are usually marked \"Complimentary / Miễn phí\".",
        "Standard check-out is 12:00 PM. Ask front desk for \"Trả phòng muộn\" (late check-out) if needed."
      ],
      "proTipZh": "✨ 避坑：越南電壓為 220V，插座大多為雙圓孔或雙扁孔通用型，台灣雙扁插頭可直接插，但高功率電器需注意電壓相容性！",
      "proTipEn": "✨ Pro Tip: Vietnam uses 220V electricity with universal two-pin sockets compatible with most US/Taiwan dual-voltage chargers."
    }
  },
  {
    "id": "taxi",
    "category": "travel",
    "tagZh": "出行必學",
    "tagEn": "Ride-Hailing & Navigation",
    "icon": "🚖",
    "image": "travel.jpg",
    "titleZh": "Grab 叫車確認、指示司機左轉右轉與靠邊停",
    "titleEn": "Taking Grab, Giving Directions & Dropping Off",
    "titleVi": "Đi Xe Grab & Chỉ Đường Cho Tài Xế",
    "summaryZh": "學會確認車牌號碼 (Biển số xe)、指示司機直走 (Đi thẳng)、左轉 (Rẽ trái)、右轉 (Rẽ phải)、靠邊停 (Dừng lại ở đây)。",
    "summaryEn": "Confirm license plates, guide drivers (straight, turn left/right, stop here), and navigate traffic.",
    "dialogues": [
      {
        "speaker": "Tài xế (司機)",
        "role": "npc",
        "viet": "Dạ chào anh, anh đi đến chợ Bến Thành đúng không ạ?",
        "zh": "您好哥，您要去濱城市場對嗎？",
        "en": "Hello sir, are you going to Ben Thanh Market?",
        "northTip": "Grab 司機常在接單後發訊息確認定位。",
        "southTip": "司機稱呼乘客為「Anh / Chị / Em」。"
      },
      {
        "speaker": "Hành khách (乘客)",
        "role": "learner",
        "viet": "Đúng rồi anh ơi. Xe mình biển số 51F-8888 đúng không?",
        "zh": "沒錯大哥。我們這台車車牌是 51F-8888 對吧？",
        "en": "That is right. Is your license plate 51F-8888?",
        "northTip": "車牌號碼叫「Biển số xe」。",
        "southTip": "上車前務必核對車牌與司機照片。"
      },
      {
        "speaker": "Hành khách (乘客)",
        "role": "learner",
        "viet": "Đến ngã tư phía trước anh rẽ phải, rồi đi thẳng năm mươi mét nhé.",
        "zh": "到前面十字路口請右轉，然後直走五十公尺喔。",
        "en": "At the intersection ahead please turn right, then go straight for 50 meters.",
        "northTip": "十字路口叫「Ngã tư」，三叉路口叫「Ngã ba」。",
        "southTip": "右轉南越也說「quẹo phải」，北越說「rẽ phải」。"
      },
      {
        "speaker": "Hành khách (乘客)",
        "role": "learner",
        "viet": "Tới nơi rồi anh ơi! Cho tôi xuống ở lề đường bên phải nhé.",
        "zh": "到了到了大哥！請讓我在右邊路旁下車喔。",
        "en": "We have arrived! Please drop me off at the right curbside.",
        "northTip": "靠邊停叫「tấp vào lề」或「dừng lại ở đây」。",
        "southTip": "下車記得說「Cảm ơn anh!」"
      }
    ],
    "rolePlay": {
      "userRoleZh": "乘客 (Hành khách)",
      "userRoleEn": "Rider (Hành khách)",
      "partnerRoleZh": "Grab 司機 (Tài xế Grab)",
      "partnerRoleEn": "Grab Driver (Tài xế Grab)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ chào anh, anh đi theo định vị trên ứng dụng đến chợ Bến Thành đúng không ạ?",
          "partnerPromptZh": "您好哥，您照著App定位去濱城市場對嗎？",
          "partnerPromptEn": "Hello sir, going to Ben Thanh Market as set on app?",
          "userOptions": [
            {
              "id": "tx1_opt1",
              "textVi": "Đúng rồi anh ơi, chở tôi đến chợ Bến Thành quận 1 nhé.",
              "textZh": "對的大哥，載我去第1郡的濱城市場喔。",
              "textEn": "Yes driver, take me to Ben Thanh Market in District 1.",
              "isCorrect": true,
              "feedbackZh": "完美核對目的地！",
              "feedbackEn": "Perfect destination confirmation!"
            },
            {
              "id": "tx1_opt2",
              "textVi": "Tôi muốn đi bộ tập thể dục.",
              "textZh": "我想走路運動。",
              "textEn": "I want to walk for exercise.",
              "isCorrect": false,
              "feedbackZh": "既然叫了車就不要說走路喔！",
              "feedbackEn": "Since you booked a ride, do not say walk."
            },
            {
              "id": "tx1_opt3",
              "textVi": "Anh đưa tôi về nhà anh đi.",
              "textZh": "你帶我回你家吧。",
              "textEn": "Take me to your home.",
              "isCorrect": false,
              "feedbackZh": "不恰當的請求。",
              "feedbackEn": "Inappropriate."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Đoạn này đường đang kẹt xe, em chạy đường vòng tránh kẹt được không anh?",
          "partnerPromptZh": "這段路大塞車，我繞路避開塞車可以嗎？",
          "partnerPromptEn": "Traffic is heavy ahead, can I take a detour to avoid congestion?",
          "userOptions": [
            {
              "id": "tx2_opt1",
              "textVi": "Được anh, đường nào nhanh và thông thoáng thì anh cứ đi nhé.",
              "textZh": "好的大哥，哪條路快又通暢你就走哪條。",
              "textEn": "Sure, take whichever route is faster and clear.",
              "isCorrect": true,
              "feedbackZh": "非常體貼且明智的司機溝通！",
              "feedbackEn": "Very polite and practical response to driver!"
            },
            {
              "id": "tx2_opt2",
              "textVi": "Cứ đâm thẳng qua dòng xe cho nhanh.",
              "textZh": "直接衝過車陣最快。",
              "textEn": "Crash through traffic directly.",
              "isCorrect": false,
              "feedbackZh": "危險駕駛不可取。",
              "feedbackEn": "Dangerous driving instruction."
            },
            {
              "id": "tx2_opt3",
              "textVi": "Dừng xe lại giữa cầu cho tôi xuống.",
              "textZh": "停在橋中間讓我下車。",
              "textEn": "Stop on bridge for me to get off.",
              "isCorrect": false,
              "feedbackZh": "在橋中央停車極度危險且違法。",
              "feedbackEn": "Stopping on bridge is illegal and unsafe."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Đến nơi rồi anh ơi! Xe đỗ ở cổng chính chợ nhé.",
          "partnerPromptZh": "到了大哥！車子停在市場正門口喔。",
          "partnerPromptEn": "We have arrived! Parked at main market entrance.",
          "userOptions": [
            {
              "id": "tx3_opt1",
              "textVi": "Cảm ơn anh tài xế, cho tôi xuống ở lề đường bên phải nhé.",
              "textZh": "謝謝司機大哥，讓我在右側路旁下車喔。",
              "textEn": "Thank you driver, please let me off at right curb.",
              "isCorrect": true,
              "feedbackZh": "禮貌下車道謝！",
              "feedbackEn": "Polite drop-off and gratitude!"
            },
            {
              "id": "tx3_opt2",
              "textVi": "Lái xe vào tận trong quầy bán thịt giùm tôi.",
              "textZh": "把車開進去肉攤裡面給我。",
              "textEn": "Drive inside meat stall for me.",
              "isCorrect": false,
              "feedbackZh": "汽車不能開進傳統市場室內。",
              "feedbackEn": "Cars cannot enter indoor market."
            },
            {
              "id": "tx3_opt3",
              "textVi": "Chở tôi đi thêm mười vòng thành phố nữa.",
              "textZh": "再載我繞市區十圈。",
              "textEn": "Drive me 10 more laps around city.",
              "isCorrect": false,
              "feedbackZh": "需重新叫車設定行程。",
              "feedbackEn": "Must rebook on app."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Tài xế / Bác tài",
        "zh": "司機大哥 / 司機師傅",
        "en": "Driver",
        "phonetic": "[taːj se / baːk taːj]",
        "note": "親切稱謂"
      },
      {
        "viet": "Biển số xe",
        "zh": "車牌號碼",
        "en": "License plate",
        "phonetic": "[biən so sɛ]",
        "note": "上車前必核對"
      },
      {
        "viet": "Đi thẳng",
        "zh": "直走",
        "en": "Go straight",
        "phonetic": "[di tʰaŋ]",
        "note": "指路基本指令"
      },
      {
        "viet": "Rẽ trái / Quẹo trái",
        "zh": "左轉",
        "en": "Turn left",
        "phonetic": "[zɛ caːj / kwɛw caːj]",
        "note": "北越講 rẽ，南越講 quẹo"
      },
      {
        "viet": "Rẽ phải / Quẹo phải",
        "zh": "右轉",
        "en": "Turn right",
        "phonetic": "[zɛ faːj / kwɛw faːj]",
        "note": "北越講 rẽ，南越講 quẹo"
      },
      {
        "viet": "Ngã tư / Ngã ba",
        "zh": "十字路口 / 三叉路口",
        "en": "Crossroad / T-junction",
        "phonetic": "[ŋa tɯ / ŋa ba]",
        "note": "重要地標"
      },
      {
        "viet": "Dừng lại ở đây",
        "zh": "停在這裡 / 靠邊停",
        "en": "Stop here / Pull over",
        "phonetic": "[zɯŋ laːj ə dəj]",
        "note": "下車必講"
      }
    ],
    "culturalTips": {
      "titleZh": "越南搭車叫車必知要訣",
      "titleEn": "Grab & Taxi Tips in Vietnam",
      "tipsZh": [
        "在越南出行強烈推薦使用 **Grab** 應用程式叫車（汽車 GrabCar 或摩托計程車 GrabBike），價格透明固定，不必擔心被繞路或跳表動手腳。",
        "搭乘 GrabBike（摩托車）時，司機會提供安全帽 (Mũ bảo hiểm)，依越南法規必須全程佩戴。",
        "如果路邊攔計程車，請認準兩大正規車隊：白色綠底的 **Mai Linh**（美靈計程車）或綠紅線條的 **Vinasun**。"
      ],
      "tipsEn": [
        "Grab is the safest way to travel in Vietnam. Fixed fares avoid meter scams.",
        "When taking GrabBike (scooter taxi), always wear the provided helmet by law.",
        "If hailing street taxis, only choose reputable brands: Mai Linh (Green) or Vinasun (White with red/green lines)."
      ],
      "proTipZh": "✨ 避坑：下車前切記檢查後座與車門置物格，避免手機或皮夾遺落車上！",
      "proTipEn": "✨ Pro Tip: Always double-check the back seat before getting out to ensure your phone or wallet is not left behind!"
    }
  },
  {
    "id": "market",
    "category": "daily",
    "tagZh": "逛街必備",
    "tagEn": "Market Bargaining",
    "icon": "🛍️",
    "image": "market.jpg",
    "titleZh": "傳統市場與觀光夜市挑選水果、問價與殺價",
    "titleEn": "Market Shopping, Fruit Selection & Polite Bargaining",
    "titleVi": "Đi Chợ, Mua Trái Cây & Mặc Cả Giá",
    "summaryZh": "學會挑選芒果、火龍果、榴槤，詢問價格 (Bao nhiêu một ký)，禮貌殺價「Bớt cho em một chút」(算便宜一點)。",
    "summaryEn": "Buy tropical fruits, ask prices per kilo, and politely negotiate discounts with friendly market vendors.",
    "dialogues": [
      {
        "speaker": "Chị bán hàng (攤販大姐)",
        "role": "npc",
        "viet": "Em gái ơi, mua xoài cát Hòa Lộc hay thanh long đi em, trái cây vườn tươi ngọt lắm!",
        "zh": "小妹/阿弟，來買和祿芒果還是火龍果吧，自家果園剛採的鮮甜多汁喔！",
        "en": "Hello dear! Buy some Hoa Loc mangoes or dragon fruit, super fresh and sweet!",
        "northTip": "和祿芒果 (Xoài cát Hòa Lộc) 是越南最頂級香甜的芒果品種。",
        "southTip": "熱帶水果在南越湄公河三角洲盛產豐富且極其便宜。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Chị ơi, xoài này bao nhiêu tiền một ký vậy chị?",
        "zh": "大姐，這芒果一公斤多少錢呀？",
        "en": "Sister, how much is this mango per kilogram?",
        "northTip": "問價必備句「Bao nhiêu tiền một ký / một cân?」",
        "southTip": "南越口語常講「Bao nhiêu một ký?」"
      },
      {
        "speaker": "Chị bán hàng (攤販大姐)",
        "role": "npc",
        "viet": "Xoài cát loại một sáu mươi nghìn một ký em nhé. Mua hai ký chị tính một trăm nghìn thôi.",
        "zh": "特級芒果一公斤六萬盾 (60k)。買兩公斤大姐算你十萬盾就好。",
        "en": "Grade-A mango is 60,000 VND per kg. Buy 2 kg and I will give it to you for 100k.",
        "northTip": "買多通常有組合特惠價。",
        "southTip": "「Loại một」代表一等品頂級品質。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Bốn mươi lăm nghìn một ký được không chị? Em lấy ba ký luôn.",
        "zh": "一公斤四萬五可以嗎大姐？我可以一次拿三公斤喔。",
        "en": "Can you do 45,000 VND per kg? I will take 3 kilograms.",
        "northTip": "殺價口氣要保持微笑親切「Bớt cho em nhé」(算便宜點嘛)。",
        "southTip": "用量大來爭取折扣是最自然的殺價話術。"
      },
      {
        "speaker": "Chị bán hàng (攤販大姐)",
        "role": "npc",
        "viet": "Thôi được rồi, mở hàng chị bớt cho em, ba ký hết một trăm ba mươi lăm nghìn.",
        "zh": "好啦好啦，今天開市算你便宜，三公斤總共十三萬五千盾 (135,000 VND)。",
        "en": "Alright, early bird discount for you! 3 kg for 135,000 VND.",
        "northTip": "「Mở hàng」是指攤販當天最初的幾單開市生意，通常願意給優惠圖個好彩頭。",
        "southTip": "成交時記得道謝「Cảm ơn chị nhiều!」"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách mua)",
      "userRoleEn": "Shopper (Khách mua)",
      "partnerRoleZh": "水果攤老闆娘 (Chị bán hàng)",
      "partnerRoleEn": "Fruit Vendor (Chị bán hàng)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Em gái ơi, mua xoài cát Hòa Lộc hay thanh long đi em, trái cây vườn tươi ngọt lắm!",
          "partnerPromptZh": "來買芒果還是火龍果呀？果園直送鮮甜喔！",
          "partnerPromptEn": "Buy mangoes or dragonfruit? Fresh and sweet!",
          "userOptions": [
            {
              "id": "mk1_opt1",
              "textVi": "Chị ơi, xoài này bao nhiêu tiền một ký vậy chị?",
              "textZh": "大姐，這芒果一公斤多少錢？",
              "textEn": "Sister, how much is this mango per kilo?",
              "isCorrect": true,
              "feedbackZh": "問價金句！清晰自然。",
              "feedbackEn": "Classic price inquiry phrase!"
            },
            {
              "id": "mk1_opt2",
              "textVi": "Cho tôi một tấn vàng ròng.",
              "textZh": "給我一噸純金。",
              "textEn": "Give me a ton of gold.",
              "isCorrect": false,
              "feedbackZh": "情境荒謬。",
              "feedbackEn": "Absurd."
            },
            {
              "id": "mk1_opt3",
              "textVi": "Trái cây này chắc chua lắm đúng không?",
              "textZh": "這水果肯定酸死了對吧？",
              "textEn": "This fruit must be super sour right?",
              "isCorrect": false,
              "feedbackZh": "直接質疑攤販水果不甜很不禮貌喔。",
              "feedbackEn": "Rude to insult vendor produce directly."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Xoài cát loại một sáu mươi nghìn một ký em nhé. Mua hai ký chị tính một trăm nghìn thôi.",
          "partnerPromptZh": "特級芒果一公斤六萬盾，買兩公斤算十萬。",
          "partnerPromptEn": "Grade A is 60k/kg. Buy 2kg for 100k.",
          "userOptions": [
            {
              "id": "mk2_opt1",
              "textVi": "Bốn mươi lăm nghìn một ký được không chị? Em lấy ba ký luôn.",
              "textZh": "一公斤四萬五好嗎大姐？我買三公斤。",
              "textEn": "Can you do 45k/kg? I take 3kg.",
              "isCorrect": true,
              "feedbackZh": "以量制價！高明的殺價技巧。",
              "feedbackEn": "Smart bargaining strategy using volume!"
            },
            {
              "id": "mk2_opt2",
              "textVi": "Một nghìn đồng mười ký được thì em mua.",
              "textZh": "一千盾買十公斤的話我就買。",
              "textEn": "1,000 VND for 10kg or no deal.",
              "isCorrect": false,
              "feedbackZh": "大幅偏離行情的無理開價會激怒攤販喔。",
              "feedbackEn": "Unreasonable lowball will upset vendors."
            },
            {
              "id": "mk2_opt3",
              "textVi": "Chị tặng miễn phí cho em hết sạp này đi.",
              "textZh": "你整攤免費送給我吧。",
              "textEn": "Give me the whole stall for free.",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Impossible."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Thôi được rồi, mở hàng chị bớt cho em, ba ký hết một trăm ba mươi lăm nghìn.",
          "partnerPromptZh": "好吧，算你便宜，三公斤十三萬五千盾。",
          "partnerPromptEn": "Alright, early deal! 3kg for 135k VND.",
          "userOptions": [
            {
              "id": "mk3_opt1",
              "textVi": "Dạ em cảm ơn chị! Chọn cho em mấy trái chín vừa ăn nhé.",
              "textZh": "謝謝大姐！幫我挑幾顆熟度剛好能現吃的喔。",
              "textEn": "Thank you sister! Pick some ready-to-eat ripe ones for me.",
              "isCorrect": true,
              "feedbackZh": "達成交易並請求挑選熟度，非常地道！",
              "feedbackEn": "Great deal closed with practical fruit ripeness request!"
            },
            {
              "id": "mk3_opt2",
              "textVi": "Tôi đổi ý rồi, không mua nữa đâu.",
              "textZh": "我改變主意了，不買了。",
              "textEn": "I changed my mind, not buying anymore.",
              "isCorrect": false,
              "feedbackZh": "殺完價達成協議後反悔在越南市場是忌諱喔！",
              "feedbackEn": "Backing out after agreeing on bargain is bad etiquette."
            },
            {
              "id": "mk3_opt3",
              "textVi": "Bọc vào mười cái bao tải cho tôi mang về.",
              "textZh": "裝進十個大麻布袋讓我帶走。",
              "textEn": "Pack into 10 burlap sacks.",
              "isCorrect": false,
              "feedbackZh": "三公斤水果只需要一個塑膠袋即可。",
              "feedbackEn": "Normal plastic bag is sufficient."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Xoài cát Hòa Lộc",
        "zh": "和祿金芒（頂級香甜芒果）",
        "en": "Hoa Loc Sweet Mango",
        "phonetic": "[swaːj kaːt hwa lok]",
        "note": "果肉厚實無絲"
      },
      {
        "viet": "Thanh long",
        "zh": "火龍果（紅肉/白肉）",
        "en": "Dragon fruit",
        "phonetic": "[tʰaɲ loŋ]",
        "note": "平順省盛產"
      },
      {
        "viet": "Sầu riêng",
        "zh": "榴槤（金枕頭/Ri6）",
        "en": "Durian",
        "phonetic": "[səw ziəŋ]",
        "note": "果王極品"
      },
      {
        "viet": "Măng cụt",
        "zh": "山竹（果后）",
        "en": "Mangosteen",
        "phonetic": "[maŋ kut]",
        "note": "清甜解熱"
      },
      {
        "viet": "Dừa xiêm",
        "zh": "綠暹羅香椰（椰子水）",
        "en": "Fresh sweet coconut",
        "phonetic": "[zɯə siəm]",
        "note": "椰子水甘甜爽口"
      },
      {
        "viet": "Bao nhiêu một ký?",
        "zh": "一公斤多少錢？",
        "en": "How much per kilo?",
        "phonetic": "[baːw ɲiəw mot ki]",
        "note": "問價必學"
      },
      {
        "viet": "Bớt cho em một chút",
        "zh": "算我便宜一點嘛",
        "en": "Give me a little discount please",
        "phonetic": "[bət cɔ ɛm mot cut]",
        "note": "禮貌殺價金句"
      }
    ],
    "culturalTips": {
      "titleZh": "越南市集殺價藝術與好彩頭文化",
      "titleEn": "Market Bargaining & Etiquette",
      "tipsZh": [
        "在傳統市場殺價請務必保持**微笑與禮貌**，通常可嘗試從 7 折到 8 折左右開始談。觀光夜市（如濱城市場）標價偏高，有較大議價空間。",
        "早晨第一位顧客叫「Mở hàng」(開市客)，越南攤主非常看重第一筆交易是否順利成交，代表當天的運勢好彩頭。",
        "買水果時可主動要求攤主現場切開試吃「Cho em ăn thử một miếng」(讓我試吃一塊)。"
      ],
      "tipsEn": [
        "Bargain with a friendly smile. Starting at 70-80% of original quote is a good rule of thumb in tourist markets.",
        "Early morning buyers are \"Mở hàng\" (first customer). Vendors cherish closing this deal for good day luck.",
        "Feel free to ask for a free sample slice: \"Cho em ăn thử một miếng\"."
      ],
      "proTipZh": "✨ 避坑：早晨成為第一位客人 (Mở hàng) 時，若大幅殺價成功後切勿隨意棄單不買，會被認為帶來晦氣喔！",
      "proTipEn": "✨ Pro Tip: If you are the first customer of the day, do not back out after bargaining successfully as it brings bad superstition."
    }
  },
  {
    "id": "convenience",
    "category": "daily",
    "tagZh": "生活必備",
    "tagEn": "Convenience Store",
    "icon": "🏪",
    "image": "market.jpg",
    "titleZh": "便利商店買零食泡麵、微波加熱與要塑膠袋",
    "titleEn": "Convenience Store Shopping, Microwave & Bag Request",
    "titleVi": "Mua Sắm Tại Cửa Hàng Tiện Lợi (Circle K / WinMart)",
    "summaryZh": "在 Circle K、GS25、FamilyMart、WinMart 購買泡麵、飲料、要求微波加熱 (Hâm nóng)、要塑膠袋 (Túi nilon) 與發票。",
    "summaryEn": "Buy snacks, instant noodles, ask for microwave heating, plastic bags, and receipt at 24h convenience stores.",
    "dialogues": [
      {
        "speaker": "Thu ngân (收銀員)",
        "role": "npc",
        "viet": "Dạ xin chào anh! Anh có thẻ thành viên không ạ?",
        "zh": "您好哥！請問您有會員卡嗎？",
        "en": "Hello sir! Do you have a membership card with us?",
        "northTip": "便利商店收銀員稱「Thu ngân」。",
        "southTip": "會員卡叫「Thẻ thành viên」。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Tôi không có thẻ. Tính tiền giúp tôi mấy món này nhé.",
        "zh": "我沒有會員卡。幫我結帳這幾樣東西喔。",
        "en": "I do not have a card. Please ring up these items for me.",
        "northTip": "條碼掃描叫「quét mã vạch」。",
        "southTip": "買泡麵常會附塑膠叉子。"
      },
      {
        "speaker": "Thu ngân (收銀員)",
        "role": "npc",
        "viet": "Bánh bao này anh có cần hâm nóng lại bằng lò vi sóng không ạ?",
        "zh": "這顆包子您需要用微波爐加熱嗎？",
        "en": "Would you like this steam bun heated in the microwave?",
        "northTip": "微波加熱叫「hâm nóng」或「quay nóng」。",
        "southTip": "便利商店通常免費提供熱水沖泡麵。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Có, hâm nóng giúp tôi với, và cho tôi xin thêm một cái túi nilon nhé.",
        "zh": "好的，請幫我加熱，並再給我一個塑膠提袋喔。",
        "en": "Yes please heat it up, and give me a plastic bag too.",
        "northTip": "塑膠袋北越叫「Túi nilon」，南越叫「Bao xốp」。",
        "southTip": "現在部分超商塑膠袋需付費 (約 500 - 1,000 VND)。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách mua)",
      "userRoleEn": "Customer (Khách mua)",
      "partnerRoleZh": "超商收銀員 (Thu ngân)",
      "partnerRoleEn": "Cashier (Thu ngân)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ xin chào anh! Anh có thẻ thành viên không ạ?",
          "partnerPromptZh": "您好哥！請問有會員卡嗎？",
          "partnerPromptEn": "Hello sir! Do you have a member card?",
          "userOptions": [
            {
              "id": "cv1_opt1",
              "textVi": "Tôi không có thẻ thành viên. Tính tiền giúp tôi mấy món này nhé.",
              "textZh": "我沒有會員卡。幫我結帳這些物品喔。",
              "textEn": "No member card. Please ring up these items.",
              "isCorrect": true,
              "feedbackZh": "俐落標準的超商結帳開場！",
              "feedbackEn": "Crisp and standard cashier interaction!"
            },
            {
              "id": "cv1_opt2",
              "textVi": "Tôi muốn mua lại toàn bộ cửa hàng này.",
              "textZh": "我想買下這整家便利商店。",
              "textEn": "I want to buy this entire store.",
              "isCorrect": false,
              "feedbackZh": "這不是一般購物對話。",
              "feedbackEn": "Not normal shopping talk."
            },
            {
              "id": "cv1_opt3",
              "textVi": "Cho tôi mượn tiền của thu ngân.",
              "textZh": "借我收銀機裡面的錢。",
              "textEn": "Lend me cashier money.",
              "isCorrect": false,
              "feedbackZh": "不當要求。",
              "feedbackEn": "Inappropriate request."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Bánh bao này anh có cần hâm nóng lại bằng lò vi sóng không ạ?",
          "partnerPromptZh": "這顆肉包需要微波加熱嗎？",
          "partnerPromptEn": "Do you need this bun heated in microwave?",
          "userOptions": [
            {
              "id": "cv2_opt1",
              "textVi": "Có, hâm nóng giúp tôi với, và cho tôi xin thêm một cái túi nilon nhé.",
              "textZh": "要的，請幫我加熱，並給我一個塑膠提袋。",
              "textEn": "Yes, please heat it up, and give me a plastic bag.",
              "isCorrect": true,
              "feedbackZh": "極佳！同時提出加熱與袋子需求。",
              "feedbackEn": "Great! Stated heating and bag requirements."
            },
            {
              "id": "cv2_opt2",
              "textVi": "Nấu chín giúp tôi bằng than củi.",
              "textZh": "用木炭幫我重新烤熟。",
              "textEn": "Cook it with charcoal.",
              "isCorrect": false,
              "feedbackZh": "便利商店只有微波爐喔。",
              "feedbackEn": "Convenience stores only have microwaves."
            },
            {
              "id": "cv2_opt3",
              "textVi": "Vứt bánh bao đi, tôi chỉ lấy vỏ hộp.",
              "textZh": "把肉包扔了，我只要紙盒。",
              "textEn": "Throw away bun, keep box.",
              "isCorrect": false,
              "feedbackZh": "浪費食物不符合對話邏輯。",
              "feedbackEn": "Illogical."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ tổng cộng sáu mươi hai nghìn. Anh thanh toán tiền mặt hay quét mã QR ạ?",
          "partnerPromptZh": "總共六萬二千盾。現金還是掃QR碼？",
          "partnerPromptEn": "Total 62k VND. Cash or QR scan?",
          "userOptions": [
            {
              "id": "cv3_opt1",
              "textVi": "Tôi quét mã QR ngân hàng nhé. Đưa mã giúp tôi.",
              "textZh": "我掃銀行QR碼付款喔。請出示條碼。",
              "textEn": "I will scan banking QR code. Please show code.",
              "isCorrect": true,
              "feedbackZh": "現代越南最流行的付款方式！",
              "feedbackEn": "Most popular cashless payment in modern Vietnam!"
            },
            {
              "id": "cv3_opt2",
              "textVi": "Tôi trả bằng tem thư được không?",
              "textZh": "我用郵票付款行嗎？",
              "textEn": "Can I pay with postage stamps?",
              "isCorrect": false,
              "feedbackZh": "郵票不能作為法幣支付。",
              "feedbackEn": "Stamps are not legal tender."
            },
            {
              "id": "cv3_opt3",
              "textVi": "Ghi nợ vào sổ của chủ tịch phường.",
              "textZh": "記在里長的帳上。",
              "textEn": "Charge to ward chairman book.",
              "isCorrect": false,
              "feedbackZh": "超商無法隨意記帳。",
              "feedbackEn": "Cannot charge to third parties."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Hâm nóng",
        "zh": "微波加熱",
        "en": "Microwave / Reheat",
        "phonetic": "[həm nɔŋ]",
        "note": "超商熟食必用"
      },
      {
        "viet": "Túi nilon / Bao xốp",
        "zh": "塑膠袋 / 塑膠提袋",
        "en": "Plastic bag",
        "phonetic": "[tuj ni lɔn / baːw sop]",
        "note": "裝零食飲料"
      },
      {
        "viet": "Nước nóng",
        "zh": "熱水（泡泡麵）",
        "en": "Hot boiling water",
        "phonetic": "[nɯək nɔŋ]",
        "note": "超商免費提供"
      },
      {
        "viet": "Quét mã QR",
        "zh": "掃描 QR Code 付款",
        "en": "Scan QR code to pay",
        "phonetic": "[kwɛt ma QR]",
        "note": "行動支付必備"
      },
      {
        "viet": "Hóa đơn",
        "zh": "發票 / 收據",
        "en": "Receipt / Invoice",
        "phonetic": "[hwa dən]",
        "note": "購物憑證"
      }
    ],
    "culturalTips": {
      "titleZh": "越南 24 小時便利商店文化",
      "titleEn": "24h Convenience Store Scene",
      "tipsZh": [
        "越南城市的 Circle K, GS25, FamilyMart 通常設有冷氣充足的二樓用餐座位區與免費 Wi-Fi，是學生與旅人避暑好去處。",
        "店內提供現煮越南冰咖啡 (Cà phê sữa đá)、微波飯糰熱狗與現泡麵條服務。",
        "越南目前全面普及 VietQR 銀行手機無卡掃碼支付，便利商店 100% 支援掃碼。"
      ],
      "tipsEn": [
        "Circle K and GS25 in Vietnam feature spacious 2nd-floor AC seating areas with free Wi-Fi.",
        "They offer freshly made iced milk coffee, heated snacks, and instant noodle boiling counters.",
        "Cashless QR payments via bank apps are widely accepted across all stores."
      ],
      "proTipZh": "✨ 避坑：部分小額找零 (如 500 VND 或 1,000 VND) 有時店員會以一粒水果糖代替找零，這在越南是常見的習俗喔！",
      "proTipEn": "✨ Pro Tip: Very small change (e.g. 500 VND) may sometimes be given as hard candy if coins are scarce."
    }
  },
  {
    "id": "pharmacy",
    "category": "health",
    "tagZh": "急用常備",
    "tagEn": "Pharmacy & Medicine",
    "icon": "💊",
    "image": "pharmacy.jpg",
    "titleZh": "藥局買藥、描述感冒發燒、拉肚子與用藥頻率",
    "titleEn": "Buying Medicine at a Pharmacy & Describing Symptoms",
    "titleVi": "Mua Thuốc & Miêu Tả Triệu Chứng Tại Hiệu Thuốc",
    "summaryZh": "描述症狀：發燒 (Sốt)、頭痛 (Đau đầu)、喉嚨痛 (Đau họng)、拉肚子 (Đau bụng/Tiêu chảy)、詢問飯前飯後吃法。",
    "summaryEn": "Describe cold, fever, sore throat, diarrhea, and clarify dosage instructions (before/after meals).",
    "dialogues": [
      {
        "speaker": "Dược sĩ (藥劑師)",
        "role": "npc",
        "viet": "Dạ chào anh, anh đang có triệu chứng khó chịu thế nào ạ?",
        "zh": "您好，請問您現在有哪裡不舒服或什麼症狀呢？",
        "en": "Hello, what symptoms are you experiencing?",
        "northTip": "藥局在越南稱為「Hiệu thuốc」或「Nhà thuốc」。",
        "southTip": "連鎖大藥局如 Pharmacity, An Khang, Long Châu 遍布全越。"
      },
      {
        "speaker": "Bệnh nhân (患者)",
        "role": "learner",
        "viet": "Tôi bị sốt cao, đau đầu và đau họng suốt từ hôm qua đến giờ.",
        "zh": "我從昨天開始發高燒、頭痛而且喉嚨很痛。",
        "en": "I have had a high fever, headache, and sore throat since yesterday.",
        "northTip": "發燒叫「Sốt」，喉嚨痛叫「Đau họng」。",
        "southTip": "頭痛叫「Đau đầu」，肚子痛叫「Đau bụng」。"
      },
      {
        "speaker": "Dược sĩ (藥劑師)",
        "role": "npc",
        "viet": "Anh có bị dị ứng với loại thuốc nào không? Để em lấy thuốc hạ sốt và kháng viêm.",
        "zh": "您對任何藥物過敏嗎？我幫您拿退燒藥和消炎藥。",
        "en": "Are you allergic to any medication? I will get fever reducers and anti-inflammatory pills.",
        "northTip": "過敏叫「Dị ứng」。",
        "southTip": "退燒藥常用「Thuốc hạ sốt」(如 Paracetamol / Panadol)。"
      },
      {
        "speaker": "Bệnh nhân (患者)",
        "role": "learner",
        "viet": "Tôi không bị dị ứng. Thuốc này ngày uống mấy lần và uống trước hay sau khi ăn?",
        "zh": "我沒有藥物過敏。這藥一天吃幾次？飯前還是飯後吃？",
        "en": "No allergies. How many times a day should I take this, before or after meals?",
        "northTip": "飯前叫「trước khi ăn」，飯後叫「sau khi ăn」。",
        "southTip": "一天兩次叫「ngày uống hai lần」。"
      },
      {
        "speaker": "Dược sĩ (藥劑師)",
        "role": "npc",
        "viet": "Mỗi ngày uống hai lần, mỗi lần một viên sau bữa ăn sáng và tối nhé.",
        "zh": "每天吃兩次，每次一顆，早晚餐飯後吃喔。",
        "en": "Take twice a day, one pill each time after breakfast and dinner.",
        "northTip": "藥丸單位叫「Viên」。",
        "southTip": "藥師通常會在藥袋上寫明早中晚用量。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "患者 (Bệnh nhân)",
      "userRoleEn": "Patient (Bệnh nhân)",
      "partnerRoleZh": "藥劑師 (Dược sĩ)",
      "partnerRoleEn": "Pharmacist (Dược sĩ)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ chào anh, anh đang có triệu chứng khó chịu thế nào ạ?",
          "partnerPromptZh": "您好，請問哪裡不舒服呢？",
          "partnerPromptEn": "Hello, what symptoms are bothering you?",
          "userOptions": [
            {
              "id": "pm1_opt1",
              "textVi": "Tôi bị sốt cao, đau đầu và đau họng suốt từ hôm qua đến giờ.",
              "textZh": "我從昨天開始發高燒、頭痛和喉嚨痛。",
              "textEn": "I have had high fever, headache, and sore throat since yesterday.",
              "isCorrect": true,
              "feedbackZh": "症狀描述非常精準到位！",
              "feedbackEn": "Very accurate symptom description!"
            },
            {
              "id": "pm1_opt2",
              "textVi": "Tôi cảm thấy quá vui vẻ và nhiều tiền.",
              "textZh": "我覺得太快樂且錢太多。",
              "textEn": "I feel too happy and rich.",
              "isCorrect": false,
              "feedbackZh": "這不是疾病症狀。",
              "feedbackEn": "Not a medical symptom."
            },
            {
              "id": "pm1_opt3",
              "textVi": "Bán cho tôi thuốc trường sinh bất lão.",
              "textZh": "賣給我長生不老仙丹。",
              "textEn": "Sell me immortal potion.",
              "isCorrect": false,
              "feedbackZh": "神話傳說，藥局沒有。",
              "feedbackEn": "Mythical item."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Anh có bị dị ứng với loại thuốc nào không? Để em lấy thuốc hạ sốt và kháng viêm.",
          "partnerPromptZh": "對什麼藥過敏嗎？我拿退燒和消炎藥。",
          "partnerPromptEn": "Any drug allergies? I will get fever and anti-inflammatory pills.",
          "userOptions": [
            {
              "id": "pm2_opt1",
              "textVi": "Tôi không bị dị ứng thuốc nào cả. Thuốc này uống thế nào vậy dược sĩ?",
              "textZh": "我沒對任何藥過敏。請問這藥怎麼服用？",
              "textEn": "No allergies. How should I take this medication?",
              "isCorrect": true,
              "feedbackZh": "主動確認服藥方式，非常正確！",
              "feedbackEn": "Great! Stated allergy status and asked for dosage instructions."
            },
            {
              "id": "pm2_opt2",
              "textVi": "Tôi uống hết cả hộp cùng một lúc được không?",
              "textZh": "我可以一次把整盒全吞了嗎？",
              "textEn": "Can I swallow the whole box at once?",
              "isCorrect": false,
              "feedbackZh": "過量服藥極其危險！",
              "feedbackEn": "Overdose is extremely dangerous."
            },
            {
              "id": "pm2_opt3",
              "textVi": "Tôi dị ứng với nước lọc.",
              "textZh": "我對白開水過敏。",
              "textEn": "I am allergic to water.",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Nonsense."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Thuốc này ngày uống hai lần, mỗi lần một viên sau bữa ăn sáng và tối nhé.",
          "partnerPromptZh": "每天吃兩次，每次一顆，早晚餐後吃。",
          "partnerPromptEn": "Take twice a day, one pill each after breakfast and dinner.",
          "userOptions": [
            {
              "id": "pm3_opt1",
              "textVi": "Vâng tôi hiểu rồi, cảm ơn dược sĩ nhiều nhé.",
              "textZh": "好的我明白了，非常謝謝藥劑師。",
              "textEn": "Understood, thank you very much pharmacist.",
              "isCorrect": true,
              "feedbackZh": "禮貌確認用藥須知！",
              "feedbackEn": "Polite confirmation of medical advice!"
            },
            {
              "id": "pm3_opt2",
              "textVi": "Tôi muốn uống thuốc trước khi ngủ ba ngày.",
              "textZh": "我想在睡前三天吃藥。",
              "textEn": "I take pills 3 days before sleeping.",
              "isCorrect": false,
              "feedbackZh": "時間語法邏輯錯誤。",
              "feedbackEn": "Illogical timing."
            },
            {
              "id": "pm3_opt3",
              "textVi": "Thuốc này có thể pha với trà sữa uống không?",
              "textZh": "這藥能混在奶茶裡喝嗎？",
              "textEn": "Can I mix pills in boba tea?",
              "isCorrect": false,
              "feedbackZh": "藥物應用溫開水送服，不宜搭配茶奶。",
              "feedbackEn": "Medication should be taken with water, not tea."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Thuốc hạ sốt",
        "zh": "退燒藥 (Paracetamol)",
        "en": "Fever reducer",
        "phonetic": "[tʰuək ha sot]",
        "note": "發燒必備"
      },
      {
        "viet": "Đau đầu",
        "zh": "頭痛",
        "en": "Headache",
        "phonetic": "[daːw dəw]",
        "note": "常見症狀"
      },
      {
        "viet": "Đau họng",
        "zh": "喉嚨痛",
        "en": "Sore throat",
        "phonetic": "[daːw hɔŋ]",
        "note": "感冒徵兆"
      },
      {
        "viet": "Đau bụng / Tiêu chảy",
        "zh": "肚子痛 / 腹瀉拉肚子",
        "en": "Stomachache / Diarrhea",
        "phonetic": "[daːw buŋ / tiəw caːj]",
        "note": "水土不服必備"
      },
      {
        "viet": "Thuốc dị ứng",
        "zh": "過敏藥",
        "en": "Antihistamine / Allergy medicine",
        "phonetic": "[tʰuək zi ɯŋ]",
        "note": "抗過敏"
      },
      {
        "viet": "Trước khi ăn / Sau khi ăn",
        "zh": "飯前 / 飯後",
        "en": "Before meals / After meals",
        "phonetic": "[cɯək kʰi aːn / saːw kʰi aːn]",
        "note": "服藥時間"
      }
    ],
    "culturalTips": {
      "titleZh": "在越南購買藥品安心指南",
      "titleEn": "Buying Medicine in Vietnam Safely",
      "tipsZh": [
        "越南各大城市隨處可見大型正規連鎖藥局（如 **Pharmacity**, **Nhà Thuốc Long Châu**, **An Khang**），明碼實價且藥劑師專業。",
        "出國水土不服時，常見常備藥包括感冒退燒藥 (Panadol / Paracetamol)、止瀉腸胃藥 (Smecta / Berberin) 與止癢防蚊膏 (Remos)。",
        "買藥時如果不確定越南語發音，也可以直接用手機出示藥物通用學名或外盒照片。"
      ],
      "tipsEn": [
        "Reputable nationwide pharmacy chains like Pharmacity and Long Chau have licensed English-speaking staff.",
        "Common travel medicines: Panadol (fever/pain), Berberin/Smecta (diarrhea), and Remos (mosquito repellent).",
        "Showing photos of generic chemical names or packaging is very effective if language barrier occurs."
      ],
      "proTipZh": "✨ 避坑：若發燒超過 39 度或伴隨劇烈腹痛，請立即前往大醫院急診，切勿僅靠成藥拖延病情！",
      "proTipEn": "✨ Pro Tip: If high fever persists over 39°C, visit an international hospital emergency room immediately."
    }
  },
  {
    "id": "hospital",
    "category": "health",
    "tagZh": "醫療健康",
    "tagEn": "Hospital & Clinic",
    "icon": "🏥",
    "image": "spa.jpg",
    "titleZh": "診所醫院掛號看診、量血壓與醫生問診",
    "titleEn": "Hospital & Clinic Visit, Vitals Check & Doctor Consultation",
    "titleVi": "Khám Bệnh Tại Phòng Khám & Bệnh Viện",
    "summaryZh": "掛號 (Đăng ký khám)、量血壓 (Đo huyết áp)、體溫 (Nhiệt độ)、聽診與醫生開立處方簽 (Kê đơn thuốc)。",
    "summaryEn": "Register at reception, check blood pressure/temperature, and consult doctor for diagnosis and prescription.",
    "dialogues": [
      {
        "speaker": "Bác sĩ (醫生)",
        "role": "npc",
        "viet": "Xin chào anh! Anh đến khám bệnh gì ạ? Xin cho tôi mượn hộ chiếu để làm thủ tục.",
        "zh": "您好！請問您要看什麼科別呢？請借我護照辦理掛號登記。",
        "en": "Hello! What brings you here today? Please provide your passport for registration.",
        "northTip": "醫生在越南語叫「Bác sĩ」，護士叫「Y tá / Điều dưỡng」。",
        "southTip": "大醫院如 FV Hospital, Hoan My, Vinmec 設有國際醫療中心。"
      },
      {
        "speaker": "Bệnh nhân (患者)",
        "role": "learner",
        "viet": "Tôi bị ho nhiều, khó thở và tức ngực suốt hai ngày nay.",
        "zh": "我這兩天一直劇烈咳嗽、呼吸困難而且胸口悶痛。",
        "en": "I have been coughing heavily, having shortness of breath and chest tightness for two days.",
        "northTip": "咳嗽叫「Ho」，胸悶叫「Tức ngực」。",
        "southTip": "呼吸困難叫「Khó thở」。"
      },
      {
        "speaker": "Bác sĩ (醫生)",
        "role": "npc",
        "viet": "Anh ngồi xuống đây, để tôi đo huyết áp và nghe tim phổi nhé. Hít sâu vào nào.",
        "zh": "請您坐這裡，我幫您量血壓並聽診心肺。請深呼吸。",
        "en": "Please sit here. I will take your blood pressure and listen to your chest. Breathe deeply.",
        "northTip": "量血壓叫「Đo huyết áp」，深呼吸叫「Hít sâu」。",
        "southTip": "量體溫叫「Đo nhiệt độ / Đo thân nhiệt」。"
      },
      {
        "speaker": "Bác sĩ (醫生)",
        "role": "npc",
        "viet": "Phổi của anh bị viêm nhẹ. Tôi sẽ kê đơn thuốc kháng sinh và thuốc ho cho anh.",
        "zh": "您的肺部有輕微發炎。我會為您開立抗生素和止咳藥物。",
        "en": "You have mild bronchitis. I will prescribe antibiotics and cough syrup for you.",
        "northTip": "處方箋叫「Đơn thuốc」。",
        "southTip": "抗生素叫「Thuốc kháng sinh」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "患者 (Bệnh nhân)",
      "userRoleEn": "Patient (Bệnh nhân)",
      "partnerRoleZh": "主治醫生 (Bác sĩ)",
      "partnerRoleEn": "Doctor (Bác sĩ)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Xin chào anh! Anh đến khám bệnh gì ạ? Xin cho tôi mượn hộ chiếu để làm thủ tục.",
          "partnerPromptZh": "您好！要看什麼科？請出示護照。",
          "partnerPromptEn": "Hello! What department? Passport please.",
          "userOptions": [
            {
              "id": "hp1_opt1",
              "textVi": "Dạ tôi muốn khám nội khoa, tôi bị đau dạ dày và buồn nôn.",
              "textZh": "我想看內科，我胃痛而且一直想吐。",
              "textEn": "Internal medicine please, I have stomachache and nausea.",
              "isCorrect": true,
              "feedbackZh": "準確表達就診科別與症狀！",
              "feedbackEn": "Accurate department and symptom statement!"
            },
            {
              "id": "hp1_opt2",
              "textVi": "Tôi đến đây để tham quan du lịch.",
              "textZh": "我來醫院觀光旅遊。",
              "textEn": "I came here for sightseeing.",
              "isCorrect": false,
              "feedbackZh": "醫院不是觀光景點。",
              "feedbackEn": "Hospitals are not tourist attractions."
            },
            {
              "id": "hp1_opt3",
              "textVi": "Tôi muốn làm bác sĩ trưởng khoa.",
              "textZh": "我想直接當主任醫生。",
              "textEn": "I want to be department chief.",
              "isCorrect": false,
              "feedbackZh": "荒謬不切實際。",
              "feedbackEn": "Absurd."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Anh ngồi vào ghế để y tá đo huyết áp và đo nhiệt độ trước khi vào phòng khám nhé.",
          "partnerPromptZh": "請坐椅子上，讓護士先量血壓和體溫。",
          "partnerPromptEn": "Please sit down for vitals check: blood pressure and temperature.",
          "userOptions": [
            {
              "id": "hp2_opt1",
              "textVi": "Vâng được ạ. Huyết áp của tôi hôm nay có bình thường không y tá?",
              "textZh": "好的。請問我今天的血壓正常嗎？",
              "textEn": "Sure. Is my blood pressure normal today nurse?",
              "isCorrect": true,
              "feedbackZh": "配合測量並關心自身健康數據！",
              "feedbackEn": "Cooperative and concerned about health vitals!"
            },
            {
              "id": "hp2_opt2",
              "textVi": "Đừng đo, tôi sợ cái máy kêu tít tít.",
              "textZh": "別量，我怕機器逼逼叫。",
              "textEn": "Do not measure, I fear beeping machines.",
              "isCorrect": false,
              "feedbackZh": "測量血壓是基礎安全步驟。",
              "feedbackEn": "Vitals check is mandatory safety procedure."
            },
            {
              "id": "hp2_opt3",
              "textVi": "Đo huyết áp cho cả con gấu bông của tôi nữa.",
              "textZh": "幫我的泰迪熊也量一下血壓。",
              "textEn": "Measure blood pressure for my teddy bear too.",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Nonsense."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Bác sĩ đã khám xong và kê đơn thuốc cho anh, anh ra quầy số 3 lấy thuốc nhé.",
          "partnerPromptZh": "醫生已開好處方箋，請到3號櫃台領藥。",
          "partnerPromptEn": "Doctor finished diagnosis and wrote prescription, pick up at Counter 3.",
          "userOptions": [
            {
              "id": "hp3_opt1",
              "textVi": "Cảm ơn bác sĩ, tôi có cần kiêng đồ cay nóng không ạ?",
              "textZh": "謝謝醫生，請問我有需要忌口辛辣刺激食物嗎？",
              "textEn": "Thank you doctor, should I avoid spicy or hot food?",
              "isCorrect": true,
              "feedbackZh": "非常周全的醫囑與飲食禁忌確認！",
              "feedbackEn": "Very thoughtful question about dietary restrictions!"
            },
            {
              "id": "hp3_opt2",
              "textVi": "Kê cho tôi một trăm thang thuốc bổ về ăn dần.",
              "textZh": "開給我一百份補藥回家慢慢吃。",
              "textEn": "Prescribe 100 tonic packs for me.",
              "isCorrect": false,
              "feedbackZh": "處方藥需遵照醫囑劑量開立。",
              "feedbackEn": "Prescription must strictly match medical diagnosis."
            },
            {
              "id": "hp3_opt3",
              "textVi": "Tôi không thích uống thuốc, cho tôi kẹo.",
              "textZh": "我不喜歡吃藥，給我糖果。",
              "textEn": "I dislike medicine, give me candy.",
              "isCorrect": false,
              "feedbackZh": "治療疾病需按時服藥。",
              "feedbackEn": "Medicine is required for recovery."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Bệnh viện",
        "zh": "醫院",
        "en": "Hospital",
        "phonetic": "[ɓəɲ viən]",
        "note": "醫療機構"
      },
      {
        "viet": "Phòng khám",
        "zh": "診所 / 門診部",
        "en": "Clinic",
        "phonetic": "[fɔŋ kʰaːm]",
        "note": "社區就醫處"
      },
      {
        "viet": "Bác sĩ / Y tá",
        "zh": "醫生 / 護士",
        "en": "Doctor / Nurse",
        "phonetic": "[baːk si / i ta]",
        "note": "醫護人員"
      },
      {
        "viet": "Đo huyết áp",
        "zh": "量血壓",
        "en": "Measure blood pressure",
        "phonetic": "[do hwiət aːp]",
        "note": "基礎健檢"
      },
      {
        "viet": "Đơn thuốc",
        "zh": "處方箋 / 藥單",
        "en": "Prescription",
        "phonetic": "[dən tʰuək]",
        "note": "憑單領藥"
      }
    ],
    "culturalTips": {
      "titleZh": "在越南就醫就診必備常識",
      "titleEn": "Visiting Hospitals in Vietnam",
      "tipsZh": [
        "外國旅客在越南就醫建議選擇國際綜合醫院（如河內/胡志明市的 **Vinmec**, **FV Hospital**, **Raffles Medical**），具備多語種翻譯服務。",
        "就醫時請務必索取詳細診斷證明書 (Giấy chẩn đoán) 與正規稅務發票 (Hóa đơn đỏ VAT)，以便回國後向全民健保與海外旅遊平安險申請理賠。"
      ],
      "tipsEn": [
        "International hospitals (Vinmec, FV Hospital, Raffles) offer English, French, and Chinese services.",
        "Always request official medical diagnosis reports and Red Invoices (Hóa đơn VAT) for overseas travel insurance claims."
      ],
      "proTipZh": "✨ 避坑：越南公立大醫院病患較多，急診可撥打 **115** 叫救護車，但市區尖峰時間叫 Grab 往往比等救護車更快抵達醫院！",
      "proTipEn": "✨ Pro Tip: Dial 115 for ambulance, but booking a Grab directly is often faster during city traffic jams."
    }
  },
  {
    "id": "spa",
    "category": "daily",
    "tagZh": "放鬆紓壓",
    "tagEn": "Herbal Spa & Massage",
    "icon": "💆",
    "image": "spa.jpg",
    "titleZh": "越式洗頭 (Gội đầu dưỡng sinh)、肩頸按摩與力道調整",
    "titleEn": "Vietnamese Herbal Hair Spa & Massage Relaxation",
    "titleVi": "Gội Đầu Dưỡng Sinh & Mát-Xa Thư Giãn",
    "summaryZh": "體驗正統草本養生洗頭套餐 (Gội đầu dưỡng sinh)、肩頸掏耳按摩、調整水溫與力道「Mạnh hơn」(重一點) /「Nhẹ thôi」(輕一點)。",
    "summaryEn": "Experience herbal hair wash, ear cleaning, acupressure neck massage, and adjust water/massage pressure.",
    "dialogues": [
      {
        "speaker": "Nhân viên Spa (美容師)",
        "role": "npc",
        "viet": "Dạ em chào anh! Hôm nay anh chọn gói gội đầu dưỡng sinh sáu mươi phút hay chín mươi phút ạ?",
        "zh": "您好哥！今天想選 60 分鐘還是 90 分鐘的草本養生洗頭套餐呢？",
        "en": "Hello sir! Would you like the 60-minute or 90-minute herbal spa package today?",
        "northTip": "養生洗頭在越南叫「Gội đầu dưỡng sinh」，極受歡迎。",
        "southTip": "包含草藥熬水洗髮、洗臉、敷面膜、掏耳與肩頸按摩。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Cho anh gói chín mươi phút, có bao gồm lấy ráy tai và mát-xa cổ vai gáy không em?",
        "zh": "給我 90 分鐘套餐，有包含掏耳朵和肩頸按摩嗎？",
        "en": "Give me the 90-min package. Does it include ear cleaning and neck/shoulder massage?",
        "northTip": "掏耳朵叫「lấy ráy tai」。",
        "southTip": "肩頸按摩叫「mát-xa cổ vai gáy」。"
      },
      {
        "speaker": "Nhân viên Spa (美容師)",
        "role": "npc",
        "viet": "Dạ có đầy đủ hết ạ. Nước ấm thế này đã vừa chưa anh? Lực mát-xa có đau không?",
        "zh": "都有全套包含喔。水溫這樣剛剛好嗎？按摩力道會痛嗎？",
        "en": "Yes, fully included. Is this warm water comfortable? Is massage pressure okay?",
        "northTip": "水溫剛好說「nước ấm vừa rồi」。",
        "southTip": "水太燙說「nóng quá」，太涼說「lạnh quá」。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Nước ấm rất dễ chịu. Em mát-xa lưng mạnh hơn một chút nhé, cổ thì làm nhẹ thôi.",
        "zh": "溫水非常舒服。後背幫我按重一點點，脖子輕輕按就好喔。",
        "en": "Warm water is very relaxing. Please massage back a bit harder, and neck gently.",
        "northTip": "重一點＝「Mạnh hơn một chút」；輕一點＝「Nhẹ hơn / Nhẹ thôi」。",
        "southTip": "舒服說「Rất thoải mái / Dễ chịu」。"
      },
      {
        "speaker": "Khách (顧客)",
        "role": "learner",
        "viet": "Rất thoải mái! Cảm ơn em nhiều. Gửi em tiền tip nhé.",
        "zh": "太放鬆了！非常感謝你。這是給你的小費喔。",
        "en": "So relaxing! Thank you so much. Here is your tip.",
        "northTip": "小費在越南叫「Tiền tip」或「Tiền boa」。",
        "southTip": "優質服務通常給予 50,000 - 100,000 VND 小費。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "顧客 (Khách hàng)",
      "userRoleEn": "Customer (Khách hàng)",
      "partnerRoleZh": "SPA 美容師 (Kỹ thuật viên Spa)",
      "partnerRoleEn": "Spa Therapist (Kỹ thuật viên Spa)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Dạ em chào anh! Hôm nay anh chọn gói gội đầu dưỡng sinh sáu mươi phút hay chín mươi phút ạ?",
          "partnerPromptZh": "您好哥！選60分鐘還是90分鐘草本養生洗頭套餐？",
          "partnerPromptEn": "Hello sir! 60-minute or 90-minute herbal hair spa package?",
          "userOptions": [
            {
              "id": "sp1_opt1",
              "textVi": "Cho anh gói chín mươi phút, có bao gồm lấy ráy tai và mát-xa cổ vai gáy không em?",
              "textZh": "給我90分鐘套餐，有包含掏耳朵和肩頸按摩嗎？",
              "textEn": "90-min package please. Does it include ear cleaning and neck massage?",
              "isCorrect": true,
              "feedbackZh": "完美！清楚確認套餐時長與包含項目。",
              "feedbackEn": "Perfect! Clarified duration and included services."
            },
            {
              "id": "sp1_opt2",
              "textVi": "Cho tôi gói cạo trọc đầu.",
              "textZh": "給我剃光頭套餐。",
              "textEn": "Give me bald shaving package.",
              "isCorrect": false,
              "feedbackZh": "養生 SPA 館不是理髮剃頭店喔。",
              "feedbackEn": "Herbal spas are for relaxation, not shaving."
            },
            {
              "id": "sp1_opt3",
              "textVi": "Tôi muốn tắm cho cả đàn vịt.",
              "textZh": "我想幫整群鴨子洗澡。",
              "textEn": "I want to bathe ducks.",
              "isCorrect": false,
              "feedbackZh": "荒謬不切實際。",
              "feedbackEn": "Absurd."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Dạ có đầy đủ hết ạ. Nước ấm thế này đã vừa chưa anh? Lực mát-xa có đau không ạ?",
          "partnerPromptZh": "全套都有。水溫剛好嗎？按摩力道會痛嗎？",
          "partnerPromptEn": "Fully included. Is water temperature and massage pressure okay?",
          "userOptions": [
            {
              "id": "sp2_opt1",
              "textVi": "Nước ấm rất dễ chịu. Em mát-xa vai mạnh hơn một chút nhé.",
              "textZh": "溫水很舒服。肩膀幫我按重一點喔。",
              "textEn": "Warm water is great. Please massage shoulders a bit harder.",
              "isCorrect": true,
              "feedbackZh": "極佳的力道與感受即時反饋！",
              "feedbackEn": "Great real-time pressure feedback!"
            },
            {
              "id": "sp2_opt2",
              "textVi": "Dùng nước đá lạnh đóng băng gội đầu cho tôi.",
              "textZh": "用結冰的冰水幫我洗頭。",
              "textEn": "Use freezing ice water to wash hair.",
              "isCorrect": false,
              "feedbackZh": "養生洗頭使用溫熱草藥熬汁。",
              "feedbackEn": "Herbal spas use warm herbal water."
            },
            {
              "id": "sp2_opt3",
              "textVi": "Ấn mạnh đến mức gãy xương luôn nhé.",
              "textZh": "用力按到骨折為止。",
              "textEn": "Press hard until bones break.",
              "isCorrect": false,
              "feedbackZh": "不當指示。",
              "feedbackEn": "Dangerous."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Dạ xong rồi ạ, anh thấy trong người có thoải mái và nhẹ nhõm hơn không ạ?",
          "partnerPromptZh": "完成囉，您覺得身體有放鬆舒暢些嗎？",
          "partnerPromptEn": "Finished! Do you feel relaxed and refreshed?",
          "userOptions": [
            {
              "id": "sp3_opt1",
              "textVi": "Rất thoải mái và dễ chịu! Cảm ơn em, gửi em tiền tip nhé.",
              "textZh": "非常放鬆舒服！謝謝你，這是給你的小費。",
              "textEn": "Very relaxing and comfortable! Thank you, here is tip.",
              "isCorrect": true,
              "feedbackZh": "禮貌答謝與給予小費，賓主盡歡！",
              "feedbackEn": "Polite compliment and tipping!"
            },
            {
              "id": "sp3_opt2",
              "textVi": "Gội đầu xong làm tóc tôi biến mất rồi.",
              "textZh": "洗完頭我的頭髮全消失了。",
              "textEn": "My hair disappeared.",
              "isCorrect": false,
              "feedbackZh": "不合邏輯。",
              "feedbackEn": "Illogical."
            },
            {
              "id": "sp3_opt3",
              "textVi": "Tôi muốn nằm ngủ ở đây đến tuần sau.",
              "textZh": "我想躺睡在這裡到下週。",
              "textEn": "I want to sleep here till next week.",
              "isCorrect": false,
              "feedbackZh": "療程結束後需讓位給下一位客人。",
              "feedbackEn": "Session ended, please vacate bed."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Gội đầu dưỡng sinh",
        "zh": "越式草本養生洗頭",
        "en": "Vietnamese herbal hair spa",
        "phonetic": "[ɣoj dəw zɯəŋ siɲ]",
        "note": "極致放鬆體驗"
      },
      {
        "viet": "Lấy ráy tai",
        "zh": "掏耳朵 / 採耳",
        "en": "Ear cleaning",
        "phonetic": "[ləj zaːj taːj]",
        "note": "特色放鬆環節"
      },
      {
        "viet": "Mát-xa cổ vai gáy",
        "zh": "肩頸穴位按摩",
        "en": "Neck and shoulder massage",
        "phonetic": "[maːt sa ko vaːj ɣaːj]",
        "note": "緩解久坐疲勞"
      },
      {
        "viet": "Mạnh hơn một chút",
        "zh": "再重一點點 / 力道加強",
        "en": "A bit harder please",
        "phonetic": "[maɲ hən mot cut]",
        "note": "調整力道"
      },
      {
        "viet": "Nhẹ thôi / Nhẹ hơn",
        "zh": "輕一點 / 溫柔一點",
        "en": "Gently / Softer please",
        "phonetic": "[ɲɛ tʰoj / ɲɛ hən]",
        "note": "怕痛必講"
      },
      {
        "viet": "Tiền tip / Tiền boa",
        "zh": "小費",
        "en": "Tip",
        "phonetic": "[tiən tip / tiən bwa]",
        "note": "給予服務員獎勵"
      }
    ],
    "culturalTips": {
      "titleZh": "越式洗頭 (Gội đầu dưỡng sinh) 頂級體驗秘密",
      "titleEn": "The Magic of Vietnamese Herbal Hair Spa",
      "tipsZh": [
        "越式洗頭使用皂角 (Bồ kết)、香茅 (Sả)、葡萄柚皮 (Vỏ bưởi) 等天然草藥熬煮成溫熱香湯，能深層清潔頭皮、安神助眠。",
        "標準流程通常涵蓋洗臉、去角質、面部刮痧撥筋、敷小黃瓜、掏耳、肩頸熱敷與頭皮水療循環循環瀑布沖水。",
        "建議提前 1 天電話或粉絲專頁預約，避免熱門時段現場久候。"
      ],
      "tipsEn": [
        "Herbal hair spa uses natural boiled ingredients: honeylocust (Bồ kết), lemongrass, and pomelo rind for scalp wellness.",
        "Full service includes facial cleanse, cucumber mask, ear pampering, hot towel neck massage, and halo water waterfall.",
        "Booking in advance via Facebook page or hotline is recommended for popular spas."
      ],
      "proTipZh": "✨ 避坑：掏耳朵過程若感到酸脹或緊張，可隨時說「Nhẹ thôi」(輕一點)，技師會立刻放輕動作！",
      "proTipEn": "✨ Pro Tip: If ear cleaning feels ticklish or too intense, say \"Nhẹ thôi\" (gently) anytime!"
    }
  },
  {
    "id": "rent",
    "category": "business",
    "tagZh": "長住生活",
    "tagEn": "Apartment Rental",
    "icon": "🏠",
    "image": "hotel.jpg",
    "titleZh": "租屋看房詢問租金、押金、水電費與簽約",
    "titleEn": "Renting an Apartment, Asking Utilities & Lease Terms",
    "titleVi": "Xem & Thuê Căn Hộ, Hỏi Tiền Điện Nước & Ký Hợp Đồng",
    "summaryZh": "看房諮詢：詢問每月租金 (Tiền thuê)、押金 (Tiền cọc)、電費 (Tiền điện)、水費 (Tiền nước) 與簽署租賃合約 (Hợp đồng thuê nhà)。",
    "summaryEn": "Tour studio apartments, ask monthly rent, deposit, electricity/water rates, and sign 6-12 month lease.",
    "dialogues": [
      {
        "speaker": "Chủ nhà (房東)",
        "role": "npc",
        "viet": "Chào em! Mời em vào xem căn hộ. Căn này một phòng ngủ, đầy đủ nội thất.",
        "zh": "你好！請進來看房。這套是一房一廳，家具家電全配喔。",
        "en": "Hello! Welcome to view the apartment. This is a 1-bedroom fully furnished unit.",
        "northTip": "房東叫「Chủ nhà」，房客叫「Người thuê」。",
        "southTip": "家具全配叫「Đầy đủ nội thất / Full nội thất」。"
      },
      {
        "speaker": "Khách thuê (租客)",
        "role": "learner",
        "viet": "Căn hộ đẹp quá. Cho em hỏi tiền thuê mỗi tháng là bao nhiêu ạ?",
        "zh": "房子好漂亮。請問每個月租金是多少呢？",
        "en": "Lovely apartment. How much is the monthly rent?",
        "northTip": "每月租金叫「Tiền thuê mỗi tháng」。",
        "southTip": "公寓大樓叫「Chung cư」或「Căn hộ」。"
      },
      {
        "speaker": "Chủ nhà (房東)",
        "role": "npc",
        "viet": "Giá thuê là mười hai triệu một tháng. Tiền cọc hai tháng và đóng tiền đầu mỗi tháng.",
        "zh": "租金是一個月一千二百萬越南盾 (12,000,000 VND)。押金兩個月，月初繳房租。",
        "en": "Rent is 12 million VND per month. 2-month deposit, payable at the start of each month.",
        "northTip": "12,000,000 讀作「Mười hai triệu」。",
        "southTip": "押金通常為 1 到 2 個月房租。"
      },
      {
        "speaker": "Khách thuê (租客)",
        "role": "learner",
        "viet": "Tiền điện và tiền nước tính thế nào ạ? Có bao gồm phí quản lý và Wi-Fi không?",
        "zh": "電費和水費怎麼計算呢？有包含大樓管理費和 Wi-Fi 嗎？",
        "en": "How are electricity and water calculated? Are management fee and Wi-Fi included?",
        "northTip": "電費依度數計算「bốn nghìn một số / một kWh」。",
        "southTip": "管理費叫「Phí quản lý」。"
      },
      {
        "speaker": "Chủ nhà (房東)",
        "role": "npc",
        "viet": "Tiền điện tính bốn nghìn một số, nước một trăm nghìn một người, miễn phí Wi-Fi và phí quản lý.",
        "zh": "電費一度四千盾，水費一人十萬盾，免費提供 Wi-Fi 和免管理費。",
        "en": "Electricity is 4,000 VND per kWh, water 100k per person, free Wi-Fi and management fees.",
        "northTip": "水電明細必須白紙黑字寫進合約中。",
        "southTip": "簽合約叫「Ký hợp đồng」。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "看房租客 (Người thuê)",
      "userRoleEn": "Tenant (Người thuê)",
      "partnerRoleZh": "公寓房東 (Chủ nhà)",
      "partnerRoleEn": "Landlord (Chủ nhà)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào anh! Căn hộ studio này ba mươi lăm mét vuông, đầy đủ nội thất ban công thoáng mát.",
          "partnerPromptZh": "你好！這套單身公寓35平米，家具全配陽台採光通風。",
          "partnerPromptEn": "Hello! This 35sqm studio is fully furnished with a bright balcony.",
          "userOptions": [
            {
              "id": "rt1_opt1",
              "textVi": "Căn hộ đẹp quá. Cho tôi hỏi giá thuê mỗi tháng là bao nhiêu ạ?",
              "textZh": "房子很漂亮。請問每月租金是多少？",
              "textEn": "Very nice apartment. How much is monthly rent?",
              "isCorrect": true,
              "feedbackZh": "切中核心的看房第一問！",
              "feedbackEn": "Direct and essential rental question!"
            },
            {
              "id": "rt1_opt2",
              "textVi": "Nhà này có nuôi được đàn voi không anh?",
              "textZh": "這房子能養一群大象嗎？",
              "textEn": "Can I keep a herd of elephants here?",
              "isCorrect": false,
              "feedbackZh": "公寓不能飼養大型野生動物。",
              "feedbackEn": "Impossible."
            },
            {
              "id": "rt1_opt3",
              "textVi": "Tôi muốn đập thông sang nhà hàng xóm.",
              "textZh": "我想把隔壁鄰居家牆壁打通。",
              "textEn": "I want to demolish wall to neighbor.",
              "isCorrect": false,
              "feedbackZh": "租屋不能擅自破壞結構。",
              "feedbackEn": "Tenants cannot alter building structure."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Giá thuê chín triệu một tháng, tiền cọc hai tháng, điện bốn nghìn một số, nước một trăm nghìn một người.",
          "partnerPromptZh": "租金月付九百萬，押金兩個月，電費一度四千，水費一人十萬。",
          "partnerPromptEn": "Rent is 9M/month, 2 months deposit, electricity 4k/kWh, water 100k/person.",
          "userOptions": [
            {
              "id": "rt2_opt1",
              "textVi": "Hợp đồng thuê tối thiểu mấy tháng vậy anh? Có bao gồm phí gửi xe máy không?",
              "textZh": "租約最短簽幾個月？有包含機車停車費嗎？",
              "textEn": "What is the minimum lease length? Does it include motorbike parking?",
              "isCorrect": true,
              "feedbackZh": "非常精明的租客！確認合約期與停車費。",
              "feedbackEn": "Very smart tenant questions about lease term and parking!"
            },
            {
              "id": "rt2_opt2",
              "textVi": "Tôi muốn dùng điện nước miễn phí suốt đời.",
              "textZh": "我想終身免費用水電。",
              "textEn": "I want free utilities for life.",
              "isCorrect": false,
              "feedbackZh": "不切實際。",
              "feedbackEn": "Impossible."
            },
            {
              "id": "rt2_opt3",
              "textVi": "Cọc bằng lời hứa danh dự được không?",
              "textZh": "用人格保證代替押金可以嗎？",
              "textEn": "Can I deposit with a verbal promise?",
              "isCorrect": false,
              "feedbackZh": "租賃需簽約並支付真金白銀押金。",
              "feedbackEn": "Cash deposit is mandatory."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Hợp đồng sáu tháng anh nhé. Nếu anh ưng ý thì ngày mai chúng ta ký hợp đồng và bàn giao chìa khóa.",
          "partnerPromptZh": "合約六個月。滿意的話明天簽約交鑰匙。",
          "partnerPromptEn": "6-month lease. If satisfied we sign contract tomorrow and handover keys.",
          "userOptions": [
            {
              "id": "rt3_opt1",
              "textVi": "Dạ tôi đồng ý. Ngày mai chín giờ sáng tôi qua ký hợp đồng nhé.",
              "textZh": "好的我同意。明天早上九點我過來簽約喔。",
              "textEn": "Agreed. I will come tomorrow at 9 AM to sign the lease.",
              "isCorrect": true,
              "feedbackZh": "順利敲定簽約時間！",
              "feedbackEn": "Confirmed lease signing schedule smoothly!"
            },
            {
              "id": "rt3_opt2",
              "textVi": "Tôi muốn ký hợp đồng thuê trong một tiếng đồng hồ.",
              "textZh": "我想簽只租一個小時的合約。",
              "textEn": "I want a 1-hour lease.",
              "isCorrect": false,
              "feedbackZh": "長期公寓租賃通常為6個月至1年。",
              "feedbackEn": "Apartment leases are 6-12 months."
            },
            {
              "id": "rt3_opt3",
              "textVi": "Tôi sẽ dọn vào ở luôn đêm nay không cần chìa khóa.",
              "textZh": "我今晚直接破門住進去。",
              "textEn": "I will move in tonight without keys.",
              "isCorrect": false,
              "feedbackZh": "違法侵入。",
              "feedbackEn": "Illegal trespass."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Căn hộ / Chung cư",
        "zh": "公寓 / 住宅大樓",
        "en": "Apartment / Condominium",
        "phonetic": "[kaːn ho / cuŋ kɯ]",
        "note": "現代住宅"
      },
      {
        "viet": "Tiền thuê mỗi tháng",
        "zh": "每月租金",
        "en": "Monthly rent",
        "phonetic": "[tiən tʰwe moj tʰaːŋ]",
        "note": "定期房租"
      },
      {
        "viet": "Hợp đồng thuê nhà",
        "zh": "租屋合約",
        "en": "Lease agreement",
        "phonetic": "[həp doŋ tʰwe ɲa]",
        "note": "法律保障文件"
      },
      {
        "viet": "Tiền điện / Tiền nước",
        "zh": "電費 / 水費",
        "en": "Electricity / Water bill",
        "phonetic": "[tiən diən / tiən nɯək]",
        "note": "每月生活開銷"
      },
      {
        "viet": "Đầy đủ nội thất",
        "zh": "家具家電齊全",
        "en": "Fully furnished",
        "phonetic": "[dəj du noj tʰət]",
        "note": "拎包入住"
      },
      {
        "viet": "Tạm trú",
        "zh": "暫住登記（外國人申報）",
        "en": "Temporary residence registration",
        "phonetic": "[taːm cu]",
        "note": "合法居留必辦"
      }
    ],
    "culturalTips": {
      "titleZh": "外國人在越南租房法律與暫住證須知",
      "titleEn": "Renting in Vietnam & Police Registration",
      "tipsZh": [
        "外國人在越南租房，房東依法必須在入住 24 小時內向當地公安申報**暫住登記 (Đăng ký tạm trú)**，以利日後申請工作證 (Work Permit) 或居留證 (TRC)。",
        "簽約時務必逐項核對家具電器清單 (Biên bản bàn giao)，並拍照記錄水表 (Đồng hồ nước) 與電表 (Đồng hồ điện) 初度數。",
        "水電收費標準：公寓住宅通常依官方階梯電價或合約約定價格計費。"
      ],
      "tipsEn": [
        "Landlords must register foreign tenants with local police for Temporary Residence (Đăng ký tạm trú) within 24h.",
        "Inspect furniture inventory and take photos of electric/water meters upon moving in.",
        "Deposit is usually 1-2 months, refunded upon lease termination."
      ],
      "proTipZh": "✨ 避坑：簽約前務必確認退租條款，一般提早 30 天通知即可無損拿回全部押金！",
      "proTipEn": "✨ Pro Tip: Ensure the contract states 30 days advance notice for full deposit refund upon departure."
    }
  },
  {
    "id": "business_meeting",
    "category": "business",
    "tagZh": "商務菁英",
    "tagEn": "Business & Networking",
    "icon": "💼",
    "image": "business.jpg",
    "titleZh": "職場商務拜訪、交換名片、洽談專案與預約下次會議",
    "titleEn": "Business Meeting, Exchanging Namecards & Project Discussion",
    "titleVi": "Gặp Gỡ Đối Tác, Trao Danh Thiếp & Đàm Phán Dự Án",
    "summaryZh": "商務禮儀：雙手遞接名片 (Trao danh thiếp)、稱呼職稱 (Giám đốc)、洽談合作 (Hợp tác) 與敲定合約進度。",
    "summaryEn": "Corporate meeting etiquette, exchanging namecards with two hands, contract negotiation, and scheduling follow-up.",
    "dialogues": [
      {
        "speaker": "Đối tác Việt Nam (越方代表)",
        "role": "npc",
        "viet": "Chào anh Chen! Rất hân hạnh được đón tiếp phái đoàn của anh tại văn phòng chúng tôi.",
        "zh": "陳總您好！非常榮幸在我們公司辦公室迎接您的代表團。",
        "en": "Hello Mr. Chen! Great pleasure to welcome your delegation to our office.",
        "northTip": "商務場合稱呼「Ông / Bà」或職稱「Giám đốc」(總經理)。",
        "southTip": "開場寒暄十分注重禮貌與熱情。"
      },
      {
        "speaker": "Đại diện Đài Loan (台方代表)",
        "role": "learner",
        "viet": "Chào ông Nguyễn! Cảm ơn sự đón tiếp nồng hậu của quý công ty. Đây là danh thiếp của tôi.",
        "zh": "阮總您好！感謝貴公司的熱情接待。這是我的名片。",
        "en": "Hello Mr. Nguyen! Thank you for the warm reception. Here is my business card.",
        "northTip": "交換名片必須雙手奉上並微微點頭致意。",
        "southTip": "接過名片後請認真閱讀姓名與職銜，切勿隨手塞入口袋。"
      },
      {
        "speaker": "Đối tác Việt Nam (越方代表)",
        "role": "npc",
        "viet": "Cảm ơn anh. Chúng tôi đã xem qua hồ sơ năng lực của công ty anh, rất ấn tượng.",
        "zh": "謝謝您。我們已經審閱過貴公司的實力簡介簡報，非常令人印象深刻。",
        "en": "Thank you. We reviewed your company capability profile, very impressive.",
        "northTip": "合作夥伴叫「Đối tác」。",
        "southTip": "合作意願高會說「mong muốn hợp tác lâu dài」(期望長期合作)。"
      },
      {
        "speaker": "Đại diện Đài Loan (台方代表)",
        "role": "learner",
        "viet": "Chúng tôi rất mong muốn hợp tác lâu dài và mở rộng thị trường tại Việt Nam.",
        "zh": "我們非常期待能與貴公司建立長期合作，並拓展在越南的市場。",
        "en": "We look forward to long-term cooperation and expanding market in Vietnam.",
        "northTip": "市場叫「Thị trường」，合約叫「Hợp đồng」。",
        "southTip": "「Rất hân hạnh được hợp tác」是商務致謝經典金句。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "商務代表 (Đại diện kinh doanh)",
      "userRoleEn": "Business Delegate (Đại diện kinh doanh)",
      "partnerRoleZh": "越方總經理 (Giám đốc đối tác)",
      "partnerRoleEn": "Managing Director (Giám đốc đối tác)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào ông Wang! Rất hân hạnh được đón tiếp phái đoàn của ông tại văn phòng công ty chúng tôi.",
          "partnerPromptZh": "王總您好！非常榮幸在敝公司迎接貴代表團。",
          "partnerPromptEn": "Hello Mr. Wang! Great honor to welcome your delegation at our office.",
          "userOptions": [
            {
              "id": "bm_rp1_opt1",
              "textVi": "Chào ông Nguyễn! Cảm ơn sự đón tiếp nồng hậu của quý công ty. Đây là danh thiếp của tôi.",
              "textZh": "阮總您好！感謝貴公司熱情接待。這是我的名片。",
              "textEn": "Hello Mr. Nguyen! Thank you for warm welcome. Here is my card.",
              "isCorrect": true,
              "feedbackZh": "非常得體的大氣商務應答！",
              "feedbackEn": "Very professional business greeting!"
            },
            {
              "id": "bm_rp1_opt2",
              "textVi": "Tôi đến đây để chơi game cùng các bạn.",
              "textZh": "我來這裡跟你們一起打電動。",
              "textEn": "I came to play games with you.",
              "isCorrect": false,
              "feedbackZh": "商務拜訪場合不合適。",
              "feedbackEn": "Inappropriate for business."
            },
            {
              "id": "bm_rp1_opt3",
              "textVi": "Văn phòng các bạn nhìn không đẹp bằng công ty tôi.",
              "textZh": "你們辦公室看起來沒我們公司漂亮。",
              "textEn": "Your office is not as nice as mine.",
              "isCorrect": false,
              "feedbackZh": "極度無禮。",
              "feedbackEn": "Very rude."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Chúng tôi đã xem qua bản đề xuất hợp tác, các điều khoản về chất lượng sản phẩm rất phù hợp.",
          "partnerPromptZh": "我們看過合作提案，產品品質條款非常符合需求。",
          "partnerPromptEn": "We reviewed the proposal, product quality terms match our needs well.",
          "userOptions": [
            {
              "id": "bm_rp2_opt1",
              "textVi": "Rất tuyệt vời. Chúng ta hãy cùng thảo luận chi tiết về tiến độ giao hàng và phương thức thanh toán nhé.",
              "textZh": "太好了。我們一起就交貨進度與付款方式深入討論吧。",
              "textEn": "Wonderful. Let us discuss delivery schedule and payment terms.",
              "isCorrect": true,
              "feedbackZh": "專業推動商務談判進程！",
              "feedbackEn": "Professional advancement of business discussion!"
            },
            {
              "id": "bm_rp2_opt2",
              "textVi": "Các bạn phải giảm giá chín mươi phần trăm thì chúng tôi mới làm.",
              "textZh": "你們必須打一折我們才願意合作。",
              "textEn": "Discount 90% or no deal.",
              "isCorrect": false,
              "feedbackZh": "不合理要求會破壞合作信任。",
              "feedbackEn": "Unreasonable."
            },
            {
              "id": "bm_rp2_opt3",
              "textVi": "Tôi không quan tâm hợp đồng, chỉ muốn đi uống bia.",
              "textZh": "我不在乎合約，我只想去喝啤酒。",
              "textEn": "I do not care about contract, only beer.",
              "isCorrect": false,
              "feedbackZh": "不合時宜。",
              "feedbackEn": "Unprofessional."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Chúng tôi sẽ gửi bản dự thảo hợp đồng chính thức qua email cho ông vào thứ Sáu tuần này nhé.",
          "partnerPromptZh": "我們會在週五前將正式合約草案以Email發送給您。",
          "partnerPromptEn": "We will send official contract draft via email to you this Friday.",
          "userOptions": [
            {
              "id": "bm_rp3_opt1",
              "textVi": "Vâng cảm ơn ông. Chúng tôi rất mong đợi sự hợp tác thành công tốt đẹp giữa hai bên.",
              "textZh": "好的感謝您。我們非常期待雙方合作圓滿成功。",
              "textEn": "Thank you. We eagerly look forward to successful partnership.",
              "isCorrect": true,
              "feedbackZh": "完美的會議圓滿結語！",
              "feedbackEn": "Perfect wrap-up statement for executive meeting!"
            },
            {
              "id": "bm_rp3_opt2",
              "textVi": "Thứ Sáu tôi bận đi câu cá, đừng gửi gì cả.",
              "textZh": "週五我忙著釣魚，什麼都別寄。",
              "textEn": "Busy fishing Friday, send nothing.",
              "isCorrect": false,
              "feedbackZh": "商務失禮。",
              "feedbackEn": "Unprofessional."
            },
            {
              "id": "bm_rp3_opt3",
              "textVi": "Ký bừa vào giấy trắng này luôn đi.",
              "textZh": "隨便簽在白紙上就好了。",
              "textEn": "Sign randomly on blank paper.",
              "isCorrect": false,
              "feedbackZh": "嚴肅商業合約不可草率。",
              "feedbackEn": "Contracts require formal procedure."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Danh thiếp",
        "zh": "名片 / 商業名片",
        "en": "Business card / Namecard",
        "phonetic": "[zaɲ tʰiəp]",
        "note": "商務必備"
      },
      {
        "viet": "Đối tác",
        "zh": "合作夥伴 / 對方客戶",
        "en": "Partner / Counterpart",
        "phonetic": "[doj taːk]",
        "note": "商業關係"
      },
      {
        "viet": "Hợp đồng",
        "zh": "商業合約",
        "en": "Contract",
        "phonetic": "[həp doŋ]",
        "note": "法律文件"
      },
      {
        "viet": "Hợp tác kinh doanh",
        "zh": "商務合作",
        "en": "Business cooperation",
        "phonetic": "[həp taːk kiɲ zwaːɲ]",
        "note": "共創雙贏"
      },
      {
        "viet": "Tiến độ giao hàng",
        "zh": "交貨進度 / 出貨日程",
        "en": "Delivery schedule",
        "phonetic": "[tiən do zaːw haːŋ]",
        "note": "供應鏈關鍵"
      },
      {
        "viet": "Phương thức thanh toán",
        "zh": "付款方式 (LC / TT)",
        "en": "Payment method",
        "phonetic": "[fɯəŋ tʰɯk tʰaɲ twaːn]",
        "note": "財務結算"
      }
    ],
    "culturalTips": {
      "titleZh": "越南商務談判禮儀與社交文化",
      "titleEn": "Vietnamese Business Culture & Etiquette",
      "tipsZh": [
        "初次見面交換名片時，請務必使用**雙手遞交與接收**，並先仔細端詳對方的姓名與職務頭銜以示尊重。",
        "會議開始前，越方通常會準備熱茶 (Trà nóng) 或水果點心，喝茶寒暄是建立私人信賴關係 (Mối quan hệ) 的關鍵環節。",
        "商務宴請 (Tiệc chiêu đãi) 是落實合作的重要推手，席間敬酒碰杯能大幅拉近雙方信任感。"
      ],
      "tipsEn": [
        "Always exchange business cards with BOTH hands and a slight nod, examining card details respectfully.",
        "Drinking hot tea and casual chat before meetings helps build essential business relationships (Quan hệ).",
        "Business dinners and banquets are crucial for sealing deals and fostering trust."
      ],
      "proTipZh": "✨ 避坑：談判時避免當面直接強烈否定對方讓對方「失面子」，宜採委婉溝通「Chúng ta hãy cùng xem xét lại」(讓我們一起再研擬研擬)！",
      "proTipEn": "✨ Pro Tip: Avoid direct confrontation in meetings to preserve \"Face\" (Thể diện). Frame concerns constructively."
    }
  },
  {
    "id": "emergency",
    "category": "emergency",
    "tagZh": "救命急難",
    "tagEn": "Emergency & Police",
    "icon": "🚨",
    "image": "business.jpg",
    "titleZh": "緊急求助、遺失護照錢包、報警報案與急難電話",
    "titleEn": "Emergency Assistance, Lost Passport, Police Report & Hotlines",
    "titleVi": "Trợ Giúp Khẩn Cấp, Mất Hộ Chiếu & Báo Công An",
    "summaryZh": "大喊救命「Cứu tôi với!」(救我)、遺失護照 (Mất hộ chiếu)、報警 (Báo công an)、報案筆錄 (Lập biên bản) 與 113/114/115 急難電話。",
    "summaryEn": "Shout for help (Cứu tôi với), report stolen passport/wallet to police station, and know 113/114/115 emergency numbers.",
    "dialogues": [
      {
        "speaker": "Nạn nhân (受害者)",
        "role": "learner",
        "viet": "Giúp tôi với! Cứu tôi với! Có ai biết nói tiếng Anh hoặc tiếng Trung không?",
        "zh": "救我！幫幫我！有人會說英語或中文嗎？",
        "en": "Help me! Save me! Does anyone speak English or Chinese?",
        "northTip": "大聲呼救叫「Cứu tôi với!」(救我！)",
        "southTip": "求助說「Giúp tôi với!」(幫幫我！)"
      },
      {
        "speaker": "Công an (警察)",
        "role": "npc",
        "viet": "Bình tĩnh nào bạn! Có chuyện gì xảy ra vậy? Bạn bị mất đồ ở đâu?",
        "zh": "請冷靜下來！發生了什麼事？你在哪裡遺失物品的？",
        "en": "Calm down please! What happened? Where did you lose your items?",
        "northTip": "派出所/公安局叫「Đồn công an」。",
        "southTip": "警察在越南稱為「Công an」。"
      },
      {
        "speaker": "Nạn nhân (受害者)",
        "role": "learner",
        "viet": "Tôi vừa bị giật túi xách ở ngã tư, bên trong có hộ chiếu, điện thoại và ví tiền.",
        "zh": "我剛在十字路口被飛車搶了包包，裡面有護照、手機和錢包。",
        "en": "My bag was just snatched at the intersection, inside was my passport, phone, and wallet.",
        "northTip": "被飛車搶奪叫「Bị giật túi xách」。",
        "southTip": "遺失證件護照叫「Mất hộ chiếu」。"
      },
      {
        "speaker": "Công an (警察)",
        "role": "npc",
        "viet": "Chúng tôi sẽ lập biên bản trình báo mất tài sản để bạn làm lại hộ chiếu nhé.",
        "zh": "我們會為您製作財產遺失報案筆錄，以便您前往代表處補發護照。",
        "en": "We will file an official loss report so you can replace your passport at embassy.",
        "northTip": "報案筆錄證明在越南語叫「Biên bản trình báo」。",
        "southTip": "此證明是補辦旅行證件與保險理賠必備文件。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "求助者 (Người cần giúp đỡ)",
      "userRoleEn": "Victim (Người cần giúp đỡ)",
      "partnerRoleZh": "值班警察 (Công an trực ban)",
      "partnerRoleEn": "Police Officer (Công an trực ban)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào bạn, đồn công an nghe đây. Bạn đang gặp sự cố khẩn cấp gì vậy?",
          "partnerPromptZh": "您好，派出所值班員警。請問遇到什麼緊急事故？",
          "partnerPromptEn": "Hello, police station on duty. What emergency are you facing?",
          "userOptions": [
            {
              "id": "em1_opt1",
              "textVi": "Cứu tôi với! Tôi vừa bị giật túi xách ở ngã tư, bên trong có hộ chiếu và ví tiền.",
              "textZh": "救我！我剛在路口被搶了包包，裡面有護照和錢包。",
              "textEn": "Help! My bag was snatched at intersection, inside are passport and wallet.",
              "isCorrect": true,
              "feedbackZh": "緊急呼救並迅速說明案情地點與損失要物！",
              "feedbackEn": "Urgent help call explaining incident location and stolen items!"
            },
            {
              "id": "em1_opt2",
              "textVi": "Tôi bị mất một que kẹo mút.",
              "textZh": "我弄丟了一支棒棒糖。",
              "textEn": "I lost a lollipop.",
              "isCorrect": false,
              "feedbackZh": "非警務緊急事故。",
              "feedbackEn": "Not a police emergency."
            },
            {
              "id": "em1_opt3",
              "textVi": "Tôi gọi nhầm số, chào công an nhé.",
              "textZh": "我打錯電話了，警察再見。",
              "textEn": "Wrong number, bye police.",
              "isCorrect": false,
              "feedbackZh": "無端浪費警力資源。",
              "feedbackEn": "Misuse of emergency lines."
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Bạn bình tĩnh nào! Bạn có nhớ đặc điểm của đối tượng và biển số xe không? Xảy ra lúc mấy giờ?",
          "partnerPromptZh": "請冷靜！記得嫌犯特徵和車牌嗎？幾點發生的？",
          "partnerPromptEn": "Stay calm! Remember suspect description and license plate? What time?",
          "userOptions": [
            {
              "id": "em2_opt1",
              "textVi": "Dạ khoảng mười lăm phút trước, hai người đi xe máy màu đỏ, tôi không nhìn rõ biển số.",
              "textZh": "大約十五分鐘前，兩人騎紅色摩托車，我沒看清車牌。",
              "textEn": "About 15 minutes ago, two people on a red scooter, could not see plate.",
              "isCorrect": true,
              "feedbackZh": "提供了發生時間、嫌犯人數與車輛特徵！",
              "feedbackEn": "Provided time, suspects count, and vehicle details!"
            },
            {
              "id": "em2_opt2",
              "textVi": "Họ bay bằng đĩa bay vũ trụ nên tôi không đuổi kịp.",
              "textZh": "他們搭乘外星飛碟跑掉所以我追不上。",
              "textEn": "They flew away in UFO.",
              "isCorrect": false,
              "feedbackZh": "謊報案情會被處罰喔。",
              "feedbackEn": "False report."
            },
            {
              "id": "em2_opt3",
              "textVi": "Tôi quên mất vừa nãy xảy ra chuyện gì rồi.",
              "textZh": "我忘了剛剛發生什麼事了。",
              "textEn": "I forgot what happened.",
              "isCorrect": false,
              "feedbackZh": "需盡可能提供案件資訊。",
              "feedbackEn": "Must try to provide facts."
            }
          ]
        },
        {
          "stepIndex": 3,
          "partnerPromptVi": "Chúng tôi sẽ lập biên bản xác nhận mất giấy tờ ngay để bạn đến văn phòng đại diện làm lại hộ chiếu nhé.",
          "partnerPromptZh": "我們會立刻做筆錄，以便您到辦事處補發護照。",
          "partnerPromptEn": "We will file a report for you to reapply passport at representative office.",
          "userOptions": [
            {
              "id": "em3_opt1",
              "textVi": "Cảm ơn các đồng chí công an rất nhiều. Tôi cần ký tên vào đâu ạ?",
              "textZh": "非常感謝警察同志。請問我需要在哪裡簽字呢？",
              "textEn": "Thank you very much officers. Where should I sign?",
              "isCorrect": true,
              "feedbackZh": "配合完成正式報案筆錄流程！",
              "feedbackEn": "Cooperated with official report signing process!"
            },
            {
              "id": "em3_opt2",
              "textVi": "Công an phải đền tiền mặt cho tôi ngay lập tức.",
              "textZh": "警察必須立刻賠現金給我。",
              "textEn": "Police must compensate me in cash now.",
              "isCorrect": false,
              "feedbackZh": "警察負責緝凶與報案筆錄，非賠償機構。",
              "feedbackEn": "Police investigate crimes, not insurance compensators."
            },
            {
              "id": "em3_opt3",
              "textVi": "Tôi không cần hộ chiếu, tôi ở lại Việt Nam luôn.",
              "textZh": "我不需要護照了，我要直接留在越南。",
              "textEn": "I do not need passport, staying forever.",
              "isCorrect": false,
              "feedbackZh": "外國人無護照屬於非法居留。",
              "feedbackEn": "Staying without passport is illegal."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Cứu tôi với!",
        "zh": "救我！/ 救命！",
        "en": "Help me! / Save me!",
        "phonetic": "[kɯw toj vəj]",
        "note": "極度緊急大喊"
      },
      {
        "viet": "Giúp tôi với!",
        "zh": "幫幫我！",
        "en": "Please help me!",
        "phonetic": "[zup toj vəj]",
        "note": "日常求助"
      },
      {
        "viet": "Đồn công an",
        "zh": "公安局 / 派出所 / 警察局",
        "en": "Police station",
        "phonetic": "[don koŋ aːn]",
        "note": "報案地點"
      },
      {
        "viet": "Mất hộ chiếu",
        "zh": "遺失護照",
        "en": "Lost passport",
        "phonetic": "[mat ho ciəw]",
        "note": "急難救助"
      },
      {
        "viet": "Lập biên bản",
        "zh": "製作報案筆錄 / 官方證明",
        "en": "File a police report",
        "phonetic": "[ləp biən baːn]",
        "note": "補辦證件必備"
      },
      {
        "viet": "113",
        "zh": "報警電話 (113)",
        "en": "Police hotline (113)",
        "phonetic": "[mot mot ba]",
        "note": "全越報警專線"
      },
      {
        "viet": "114",
        "zh": "消防火警 (114)",
        "en": "Fire department (114)",
        "phonetic": "[mot mot bon]",
        "note": "火警電話"
      },
      {
        "viet": "115",
        "zh": "救護車急救 (115)",
        "en": "Ambulance (115)",
        "phonetic": "[mot mot naːm]",
        "note": "醫療救護"
      }
    ],
    "culturalTips": {
      "titleZh": "越南急難求助與駐外代表處聯絡清單",
      "titleEn": "Vietnam Emergency Hotlines & Embassy Contact",
      "tipsZh": [
        "**三大官方緊急電話**：警察報案撥 **113**、火警救援撥 **114**、救護醫療撥 **115**。",
        "在街頭行走或搭乘機車時，務必將隨身包包斜背在靠內側人行道方向，切勿邊走邊拿手機看，防範飛車搶奪。",
        "駐越南台北經濟文化辦事處 (河內)：+84-24-3833-5501；駐胡志明市台北經濟文化辦事處：+84-28-3834-9160。"
      ],
      "tipsEn": [
        "Emergency numbers: Police **113**, Fire **114**, Ambulance **115**.",
        "Cross-body bags should be worn facing away from street traffic to prevent snatching.",
        "Taipei Economic and Cultural Office (TECO) Hotline: Hanoi (+84-24-3833-5501), HCMC (+84-28-3834-9160)."
      ],
      "proTipZh": "✨ 避坑：出國前請將護照相片頁與簽證影印 2 份分開存放，並存一份電子檔在手機雲端，遇緊急狀況能最快完成補發手續！",
      "proTipEn": "✨ Pro Tip: Keep printed copies of your passport and visa separate from your main luggage for emergency replacement."
    }
  },
  {
    "id": "meeting",
    "category": "meeting",
    "tagZh": "初見破冰",
    "tagEn": "First Meeting",
    "icon": "🤝",
    "image": "travel.jpg",
    "titleZh": "初次見面自我介紹、詢問背景與加 Zalo 好友",
    "titleEn": "Self-Introduction, Background & Adding Zalo Contact",
    "titleVi": "Gặp Gỡ, Làm Quen & Kết Bạn Zalo",
    "summaryZh": "學習向越南朋友自我介紹姓名、國籍、工作、學越文時間，並禮貌交換 Zalo/Facebook 聯繫方式。",
    "summaryEn": "Learn to introduce yourself, nationality, profession, study duration, and exchange Zalo/Facebook contacts politely.",
    "dialogues": [
      {
        "speaker": "Minh (朋友)",
        "role": "npc",
        "viet": "Chào bạn! Mình là Minh. Rất vui được làm quen với bạn.",
        "zh": "你好！我是 Minh。很高興認識你。",
        "en": "Hello! I am Minh. Very glad to get to know you.",
        "northTip": "同輩或初次見面年齡相近時，常用「Mình - Bạn」稱呼，親切平易。",
        "southTip": "南越口語常親切自稱「Tui / Mình」稱呼對方「Bạn / Bồ」。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Chào Minh! Mình là David, người Đài Loan. Mình mới chuyển đến Việt Nam công tác.",
        "zh": "你好 Minh！我是 David，台灣人。我剛調派到越南工作。",
        "en": "Hello Minh! I am David from Taiwan. I just moved to Vietnam for work.",
        "northTip": "「công tác」是標準漢越詞（工作/出差/派駐）。",
        "southTip": "南越口語也常直接說「làm việc」(工作)。"
      },
      {
        "speaker": "Minh (朋友)",
        "role": "npc",
        "viet": "Ồ, tiếng Việt của bạn rất tốt! Bạn học lâu chưa? Bạn đang ở quận mấy?",
        "zh": "哇，你的越語說得真好！你學多久了？你目前住在幾郡？",
        "en": "Oh, your Vietnamese is great! How long have you learned? Which district do you live in?",
        "northTip": "河內分「Quận」(郡/區) 和「Huyện」(縣)。",
        "southTip": "胡志明市以「Quận 1, Quận 7, TP. Thủ Đức」聞名。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Mình học được khoảng 6 tháng rồi. Mình đang ở Quận 1. Bạn có dùng Zalo không? Cho mình xin số nhé!",
        "zh": "我學了大約 6 個月了。我住在第一郡。你有用 Zalo 嗎？請留個電話號碼方便加好友吧！",
        "en": "I have studied for about 6 months. I live in District 1. Do you use Zalo? May I have your number?",
        "northTip": "Zalo 是越南最普及的通訊軟體，地位等同台灣 LINE。",
        "southTip": "口語說「Cho mình xin số」(給我號碼) 是加好友最自然的說法。"
      },
      {
        "speaker": "Minh (朋友)",
        "role": "npc",
        "viet": "Có chứ! Số Zalo của mình là 0901234567. Rảnh thì nhắn tin đi cà phê nhé!",
        "zh": "有的！我的 Zalo 號碼是 0901234567。有空傳訊息一起喝咖啡喔！",
        "en": "Sure! My Zalo number is 0901234567. Text me when you are free to grab a coffee!",
        "northTip": "「Đi cà phê」在越南文化中是社交聚會、聊天的代名詞。",
        "southTip": "「Rảnh thì nhắn tin」= 有空就傳訊息。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "新朋友 (David)",
      "userRoleEn": "New Friend (David)",
      "partnerRoleZh": "越南朋友 (Minh)",
      "partnerRoleEn": "Vietnamese Friend (Minh)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chào bạn! Mình là Minh. Rất vui được làm quen với bạn.",
          "partnerPromptZh": "你好！我是 Minh。很高興認識你。",
          "partnerPromptEn": "Hello! I am Minh. Very glad to get to know you.",
          "userOptions": [
            {
              "id": "m1_opt1",
              "textVi": "Chào Minh! Mình là David, người Đài Loan. Rất vui được gặp bạn.",
              "textZh": "你好 Minh！我是 David，台灣人。很高興遇見你。",
              "textEn": "Hello Minh! I am David from Taiwan. Nice to meet you.",
              "isCorrect": true,
              "feedbackZh": "非常棒！自報姓名與國籍，禮貌得體。",
              "feedbackEn": "Great! Stating your name and nationality is polite and friendly."
            },
            {
              "id": "m1_opt2",
              "textVi": "Bao nhiêu tiền một ký?",
              "textZh": "一公斤多少錢？",
              "textEn": "How much per kilo?",
              "isCorrect": false,
              "feedbackZh": "這是在市場買東西的句子喔！",
              "feedbackEn": "This is a market shopping phrase!"
            }
          ]
        },
        {
          "stepIndex": 2,
          "partnerPromptVi": "Tiếng Việt của bạn tốt quá! Bạn có dùng Zalo không?",
          "partnerPromptZh": "你的越語太好了！你有用 Zalo 嗎？",
          "partnerPromptEn": "Your Vietnamese is so good! Do you use Zalo?",
          "userOptions": [
            {
              "id": "m2_opt1",
              "textVi": "Có chứ, số của mình là 0912345678, bạn kết bạn với mình nhé!",
              "textZh": "有的，我的號碼是 0912345678，你加我好友吧！",
              "textEn": "Yes, my number is 0912345678, please add me!",
              "isCorrect": true,
              "feedbackZh": "答得好！在越南迅速交換 Zalo 是建立友誼的第一步。",
              "feedbackEn": "Well done! Exchanging Zalo is essential for making friends in Vietnam."
            },
            {
              "id": "m2_opt2",
              "textVi": "Tôi muốn về nhà ngủ.",
              "textZh": "我想回家睡覺。",
              "textEn": "I want to go home and sleep.",
              "isCorrect": false,
              "feedbackZh": "這樣回答會讓氣氛變尷尬喔！",
              "feedbackEn": "This would make the mood awkward!"
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Làm quen",
        "zh": "結識 / 做朋友",
        "en": "Get acquainted / make friends",
        "phonetic": "[lam kwɛn]",
        "note": "初次見面核心詞"
      },
      {
        "viet": "Rất vui được gặp bạn",
        "zh": "很高興遇見你",
        "en": "Nice to meet you",
        "phonetic": "[zət vuj dɯək ɣəp baːn]",
        "note": "社交禮貌標準句"
      },
      {
        "viet": "Kết bạn Zalo",
        "zh": "加 Zalo 好友",
        "en": "Add on Zalo",
        "phonetic": "[ket baːn za lo]",
        "note": "越南通訊必備"
      },
      {
        "viet": "Số điện thoại",
        "zh": "電話號碼",
        "en": "Phone number",
        "phonetic": "[so diəŋ twaːj]",
        "note": "簡稱 SĐT"
      },
      {
        "viet": "Mới chuyển đến",
        "zh": "剛搬來 / 剛調派過來",
        "en": "Just moved here",
        "phonetic": "[məj cwiən den]",
        "note": "描述旅居背景"
      }
    ],
    "culturalTips": {
      "titleZh": "越南初見社交與加好友禮儀",
      "titleEn": "First Meeting & Social Etiquette in Vietnam",
      "tipsZh": [
        "在越南結識新朋友，通常在寒暄幾句後便會主動詢問「Cho mình xin Zalo」(加個 Zalo 吧)，這是非常友好熱情的表現。",
        "初次見面如果不確定對方年紀，可以先用禮貌中性的「Mình - Bạn」(我與你) 或禮貌尊稱「Anh / Chị」，確定年齡後再調整稱謂。",
        "越南人對外國朋友通常非常熱情好奇，常會聊到工作、學越文原因與婚姻狀況，這在當地是拉近距離的日常關心。"
      ],
      "tipsEn": [
        "Exchanging Zalo contacts early in a conversation is standard friendly behavior.",
        "When age is uncertain, use polite \"Mình - Bạn\" before establishing age hierarchy.",
        "Asking about origin, career, and family is a warm way Vietnamese people build rapport."
      ]
    }
  },
  {
    "id": "smalltalk",
    "category": "chat",
    "tagZh": "社交閒聊",
    "tagEn": "Daily Small Talk",
    "icon": "💬",
    "image": "cafe.jpg",
    "titleZh": "天氣閒聊、週末休假安排與日常生活關心",
    "titleEn": "Weather, Weekend Plans & Everyday Chit-Chat",
    "titleVi": "Trò Chuyện, Thời Tiết & Cuộc Sống Thường Ngày",
    "summaryZh": "學習越南人最常聊的天氣變化、週末放假去處、美食推薦與生活問候技巧。",
    "summaryEn": "Master daily chit-chat about tropical weather, weekend plans, dining spots, and friendly greetings.",
    "dialogues": [
      {
        "speaker": "Hoa (同事)",
        "role": "npc",
        "viet": "Dạo này thời tiết Sài Gòn nóng quá anh nhỉ! Chiều nào cũng có mưa rào.",
        "zh": "這陣子西貢的天氣好熱啊哥！每天下午還都下陣雨。",
        "en": "The weather in Saigon has been so hot lately! It rains every afternoon.",
        "northTip": "河內有四季，冬天會冷；西貢只有乾季 (mùa khô) 與雨季 (mùa mưa)。",
        "southTip": "「Mưa rào」指熱帶午後雷陣雨，來得快去得快。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Đúng vậy! Mùa mưa nên đi đâu cũng phải mang theo áo mưa. Cuối tuần này em có kế hoạch gì chưa?",
        "zh": "沒錯！雨季出門去哪都得隨身帶雨衣。這週末妳有什麼計畫了嗎？",
        "en": "Indeed! During rainy season you always need a raincoat. Any plans for this weekend?",
        "northTip": "「áo mưa」= 雨衣，越南機車族的必備神器。",
        "southTip": "「Cuối tuần」= 週末；「kế hoạch」= 計畫。"
      },
      {
        "speaker": "Hoa (同事)",
        "role": "npc",
        "viet": "Em định đi dạo phố đi bộ Nguyễn Huệ rồi ghé ăn ốc với bạn. Anh đã ăn ốc Sài Gòn bao giờ chưa?",
        "zh": "我打算去阮惠步行街散步，然後跟朋友去吃炒螺。哥吃過西貢的炒螺海鮮了嗎？",
        "en": "I plan to stroll around Nguyen Hue Walking Street then eat sea snails with friends. Have you ever tried Saigon snails?",
        "northTip": "阮惠街（Phố đi bộ Nguyễn Huệ）是胡志明市最熱鬧的休閒中心。",
        "southTip": "吃「Ốc」(螺肉海鮮大排檔) 是南越最具代表性的夜間庶民文化。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Anh ăn thử một lần rồi, ngon tuyệt vời! Hôm nào em dẫn anh đi quán nào ngon nhé!",
        "zh": "我吃過一次，太美味了！改天妳帶我去哪家好吃的店吧！",
        "en": "I tried it once, absolutely delicious! You should take me to a great spot sometime!",
        "northTip": "「Ngon tuyệt vời」= 好吃到極點 / 讚絕了。",
        "southTip": "「Hôm nào... nhé」= 改天...喔，是越南約朋友最常見的句式。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "好友 (David)",
      "userRoleEn": "Friend (David)",
      "partnerRoleZh": "同事 (Hoa)",
      "partnerRoleEn": "Colleague (Hoa)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Cuối tuần này anh có rảnh không? Anh định đi đâu chơi?",
          "partnerPromptZh": "這週末哥有空嗎？打算去哪裡玩？",
          "partnerPromptEn": "Are you free this weekend? Where do you plan to go?",
          "userOptions": [
            {
              "id": "st1_opt1",
              "textVi": "Cuối tuần anh định đi cà phê đọc sách và đi dạo phố.",
              "textZh": "週末我打算去咖啡廳看書和去街上散步。",
              "textEn": "I plan to go to a cafe to read and walk around the streets.",
              "isCorrect": true,
              "feedbackZh": "完美回答！自然表達了休閒安排。",
              "feedbackEn": "Perfect! Expresses your weekend plans smoothly."
            },
            {
              "id": "st1_opt2",
              "textVi": "Tôi bị mất hộ chiếu rồi.",
              "textZh": "我的護照弄丟了。",
              "textEn": "I lost my passport.",
              "isCorrect": false,
              "feedbackZh": "這是緊急求助的句子，不符合閒聊語境。",
              "feedbackEn": "This is an emergency phrase, not suitable for small talk."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Thời tiết",
        "zh": "天氣",
        "en": "Weather",
        "phonetic": "[tʰəj tiət]",
        "note": "閒聊常用話題"
      },
      {
        "viet": "Mùa mưa / Mùa khô",
        "zh": "雨季 / 乾季",
        "en": "Rainy season / Dry season",
        "phonetic": "[muə muə / muə xo]",
        "note": "越南熱帶氣候"
      },
      {
        "viet": "Cuối tuần",
        "zh": "週末",
        "en": "Weekend",
        "phonetic": "[kwoj twən]",
        "note": "安排休閒"
      },
      {
        "viet": "Rảnh rỗi",
        "zh": "空閒 / 有空",
        "en": "Free / At leisure",
        "phonetic": "[zaɲ zoːj]",
        "note": "問時間"
      },
      {
        "viet": "Ngon tuyệt vời",
        "zh": "美味極了",
        "en": "Delicious / Wonderful",
        "phonetic": "[ŋɔn twiət vəj]",
        "note": "稱讚美食"
      }
    ],
    "culturalTips": {
      "titleZh": "越南人的閒聊與週末休閒習慣",
      "titleEn": "Vietnamese Chit-chat & Weekend Culture",
      "tipsZh": [
        "越南人碰面最常問「Ăn cơm chưa?」(吃飯了嗎？) 或「Dạo này khỏe không?」(最近好嗎？)，類似中文的親切問候。",
        "「Đi dạo」(散步漫遊) 與「Cà phê bệt」(席地而坐的街頭咖啡) 是年輕人最愛的平民休閒。"
      ],
      "tipsEn": [
        "\"Ăn cơm chưa?\" (Have you eaten?) is the classic friendly greeting.",
        "Sidewalk cafes and walking streets are popular spots for social relaxation."
      ]
    }
  },
  {
    "id": "leisure_hobbies",
    "category": "leisure",
    "tagZh": "休閒娛樂",
    "tagEn": "Hobbies & Leisure",
    "icon": "🎮",
    "image": "travel.jpg",
    "titleZh": "交流個人興趣、卡拉OK (Karaoke) 與看電影休閒",
    "titleEn": "Talking About Hobbies, Karaoke & Movies",
    "titleVi": "Sở Thích, Hát Karaoke & Giải Trí Cuối Tuần",
    "summaryZh": "掌握如何表達自己的興趣愛好（唱歌、拍照、烹飪、聽音樂），並參與越南超受歡迎的 Karaoke 聚會。",
    "summaryEn": "Talk about personal hobbies (music, photography, cooking, movies) and join Vietnamese Karaoke parties.",
    "dialogues": [
      {
        "speaker": "Tuấn (朋友)",
        "role": "npc",
        "viet": "Anh David ơi, sở thích của anh lúc rảnh rỗi là gì thế?",
        "zh": "David 哥，你平時有空時有什麼興趣愛好呢？",
        "en": "David, what are your hobbies in your free time?",
        "northTip": "「Sở thích」即漢字「所好/嗜好」，指興趣。",
        "southTip": "南越也常問「Lúc rảnh anh thích làm gì?」(有空喜歡做什麼？)。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Anh thích nghe nhạc V-Pop, chụp ảnh đường phố và đi du lịch khám phá ẩm thực.",
        "zh": "我喜歡聽越南流行音樂 (V-Pop)、街頭攝影以及到處旅行探索美食。",
        "en": "I like listening to V-Pop music, street photography, and traveling for food.",
        "northTip": "V-Pop (Nhạc trẻ Việt Nam) 近年在國際非常熱門。",
        "southTip": "「Chụp ảnh」(北越) / 「Chụp hình」(南越) 都表示拍照。"
      },
      {
        "speaker": "Tuấn (朋友)",
        "role": "npc",
        "viet": "Hay quá! Tối nay nhóm mình đi hát Karaoke ở Quận 1, anh đi chung cho vui nhé!",
        "zh": "太棒了！今晚我們這幫朋友要去第一郡唱卡拉OK，哥一起來熱鬧一下吧！",
        "en": "Awesome! Tonight our group is going for Karaoke in District 1, come join us!",
        "northTip": "Karaoke 是越南人聚會、團建 (Team building) 最熱門的活動。",
        "southTip": "「Đi chung cho vui」= 一起去熱鬧熱鬧/湊個熱鬧。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Được chứ! Anh sẽ tập hát một bài tiếng Việt để góp vui.",
        "zh": "太好了！我會練習唱一首越南歌來共襄盛舉。",
        "en": "Sure! I will practice a Vietnamese song to contribute to the fun.",
        "northTip": "「Góp vui」指在聚會中表演助興、增添樂趣。",
        "southTip": "會唱一兩首經典越文歌（如《See Tình》）在聚會中極受歡迎！"
      }
    ],
    "rolePlay": {
      "userRoleZh": "聚會朋友 (David)",
      "userRoleEn": "Party Friend (David)",
      "partnerRoleZh": "好友 (Tuấn)",
      "partnerRoleEn": "Friend (Tuấn)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Tối nay nhóm mình đi hát Karaoke, anh tham gia nhé?",
          "partnerPromptZh": "今晚我們去唱卡拉OK，哥參加嗎？",
          "partnerPromptEn": "We are going for Karaoke tonight, will you join?",
          "userOptions": [
            {
              "id": "lh1_opt1",
              "textVi": "Tuyệt vời! Mấy giờ và ở đâu thế em? Anh sẽ đến đúng giờ.",
              "textZh": "太棒了！幾點在哪裡呢？我會準時到。",
              "textEn": "Awesome! What time and where? I will arrive on time.",
              "isCorrect": true,
              "feedbackZh": "非常熱情且積極的社交回應！",
              "feedbackEn": "Enthusiastic and polite social response!"
            },
            {
              "id": "lh1_opt2",
              "textVi": "Cho tôi một bát phở bò tái.",
              "textZh": "給我一碗半熟牛肉河粉。",
              "textEn": "Give me a bowl of beef pho.",
              "isCorrect": false,
              "feedbackZh": "這不是在點餐喔！",
              "feedbackEn": "Not a dining context!"
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Sở thích",
        "zh": "興趣 / 愛好",
        "en": "Hobby",
        "phonetic": "[səː tʰik]",
        "note": "漢越詞「所好」"
      },
      {
        "viet": "Hát Karaoke",
        "zh": "唱卡拉OK",
        "en": "Sing Karaoke",
        "phonetic": "[hat ka ra o ke]",
        "note": "越南國民娛樂"
      },
      {
        "viet": "Nghe nhạc",
        "zh": "聽音樂",
        "en": "Listen to music",
        "phonetic": "[ŋɛ ɲaːk]",
        "note": "休閒詞彙"
      },
      {
        "viet": "Chụp ảnh / Chụp hình",
        "zh": "拍照 / 攝影",
        "en": "Take photos",
        "phonetic": "[cup aɲ / cup hïŋ]",
        "note": "北越 chụp ảnh, 南越 chụp hình"
      },
      {
        "viet": "Xem phim",
        "zh": "看電影",
        "en": "Watch movies",
        "phonetic": "[sɛm fim]",
        "note": "娛樂日常"
      }
    ],
    "culturalTips": {
      "titleZh": "越南熱門休閒與 Karaoke 文化",
      "titleEn": "Vietnamese Leisure & Karaoke Culture",
      "tipsZh": [
        "在越南，唱 Karaoke 是慶祝生日、下班聚會與朋友聯絡感情的頭號活動，包廂通常配有豐盛的水果拼盤與啤酒小吃。",
        "外國朋友若能開口哼唱一兩句當地流行歌曲，會立刻拉近與越南朋友的心理距離！"
      ],
      "tipsEn": [
        "Karaoke is the most popular social entertainment in Vietnam for celebrations and team bonding.",
        "Singing a local Vietnamese hit will instantly win you great appreciation among friends."
      ]
    }
  },
  {
    "id": "sports_fitness",
    "category": "sports",
    "tagZh": "運動健身",
    "tagEn": "Sports & Fitness",
    "icon": "⚽",
    "image": "travel.jpg",
    "titleZh": "公園踢毽子 (Đá cầu)、打羽球與健身房運動交流",
    "titleEn": "Shuttlecock Kicking (Đá cầu), Badminton & Gym Fitness",
    "titleVi": "Thể Thao, Đá Cầu, Cầu Lông & Tập Gym",
    "summaryZh": "認識越南國技「踢毽子」(Đá cầu)、晨間公園運動、羽毛球約打與健身房重量訓練表達。",
    "summaryEn": "Explore Vietnamese traditional shuttlecock kicking (Đá cầu), badminton matches, park exercises, and gym workouts.",
    "dialogues": [
      {
        "speaker": "Huy (球友)",
        "role": "npc",
        "viet": "Anh David! Anh có muốn vào chơi đá cầu cùng tụi em cho vui không?",
        "zh": "David 哥！你想不想跟我們一起踢毽子玩玩熱鬧一下？",
        "en": "David! Would you like to join us for shuttlecock kicking?",
        "northTip": "「Đá cầu」(踢毽子) 是越南從學校到公園人人都會的全民運動。",
        "southTip": "在傍晚的公園或廣場，經常能看到一群人圍成圓圈凌空對踢。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Hay quá! Nhưng anh mới tập chơi, sợ đá không khéo làm hỏng nhịp của mọi người.",
        "zh": "好啊！但我才剛學著踢，怕踢得不好打亂大家的節奏。",
        "en": "Awesome! But I am a beginner, afraid I might mess up the rhythm for everyone.",
        "northTip": "「mới tập chơi」= 剛學著玩/初學者。",
        "southTip": "「không khéo」= 不靈巧/踢得不好。"
      },
      {
        "speaker": "Huy (球友)",
        "role": "npc",
        "viet": "Không sao đâu anh, vui là chính mà! Ngoài đá cầu ra, anh có hay chơi môn thể thao nào khác không?",
        "zh": "沒關係的哥，開心最重要！除了踢毽子，你平時常做其他運動嗎？",
        "en": "No worries at all, fun is the main thing! Besides shuttlecock, do you play other sports?",
        "northTip": "「Vui là chính」= 開心為主/好玩第一，經典口頭禪。",
        "southTip": "「Môn thể thao」= 體育運動項目。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Anh thường chạy bộ buổi sáng và đi tập gym ba buổi mỗi tuần. Cuối tuần thỉnh thoảng đánh cầu lông.",
        "zh": "我平時早上常跑步，每週去健身房鍛鍊三次。週末偶爾打羽毛球。",
        "en": "I usually jog in the morning and hit the gym 3 times a week. On weekends I occasionally play badminton.",
        "northTip": "「Đánh cầu lông」= 打羽毛球（越南人極度熱愛的運動）。",
        "southTip": "「Tập gym」= 健身房重訓健身。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "運動夥伴 (David)",
      "userRoleEn": "Sports Partner (David)",
      "partnerRoleZh": "球友 (Huy)",
      "partnerRoleEn": "Teammate (Huy)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Chiều mai sau giờ làm, anh có muốn đi đánh cầu lông cùng bọn em không?",
          "partnerPromptZh": "明天下班後，哥想跟我們一起去打羽毛球嗎？",
          "partnerPromptEn": "Tomorrow after work, do you want to play badminton with us?",
          "userOptions": [
            {
              "id": "sp1_opt1",
              "textVi": "Được chứ! Mai anh sẽ mang theo vợt cầu lông đi làm.",
              "textZh": "好啊！明天我會帶羽球拍去上班。",
              "textEn": "Sure! Tomorrow I will bring my badminton racket to work.",
              "isCorrect": true,
              "feedbackZh": "太棒了！熱愛運動是融入越南同事圈的最佳途徑。",
              "feedbackEn": "Excellent! Sports is one of the best ways to bond with colleagues in Vietnam."
            },
            {
              "id": "sp1_opt2",
              "textVi": "Tôi muốn mua thuốc giảm đau.",
              "textZh": "我想買止痛藥。",
              "textEn": "I want to buy painkillers.",
              "isCorrect": false,
              "feedbackZh": "這是在藥局的對話喔！",
              "feedbackEn": "This is a pharmacy dialogue!"
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Đá cầu",
        "zh": "踢毽子（越南國技）",
        "en": "Shuttlecock kicking",
        "phonetic": "[da kəw]",
        "note": "全民熱門運動"
      },
      {
        "viet": "Cầu lông",
        "zh": "羽毛球",
        "en": "Badminton",
        "phonetic": "[kəw loŋ]",
        "note": "動詞用 đánh cầu lông"
      },
      {
        "viet": "Bóng đá",
        "zh": "足球",
        "en": "Football / Soccer",
        "phonetic": "[ɓɔŋ da]",
        "note": "越南狂熱運動之王"
      },
      {
        "viet": "Chạy bộ",
        "zh": "跑步 / 慢跑",
        "en": "Jogging / Running",
        "phonetic": "[caːj ɓo]",
        "note": "晨昏公園常見"
      },
      {
        "viet": "Tập gym",
        "zh": "健身 / 健身房重訓",
        "en": "Gym workout / Fitness",
        "phonetic": "[təp dʑim]",
        "note": "現代年輕人日常"
      }
    ],
    "culturalTips": {
      "titleZh": "越南獨特的「踢毽子」與運動社交文化",
      "titleEn": "Vietnamese Shuttlecock & Sports Culture",
      "tipsZh": [
        "越南的「Đá cầu」(踢毽子) 是一項具備高度技巧的體育運動，毽子使用特殊彈簧羽毛，腳法華麗，曾多次奪得世界冠軍。",
        "越南人對「Bóng đá」(足球) 擁有極致狂熱，國家隊獲勝時整座城市會徹夜舉行「Đi bão」(騎機車搖紅旗狂歡遊行)。"
      ],
      "tipsEn": [
        "Đá cầu (shuttlecock) is a national sport played skillfully in parks across the country.",
        "Football (Bóng đá) triggers immense national passion, often celebrated by festive \"Đi bão\" parades."
      ]
    }
  },
  {
    "id": "workplace_collab",
    "category": "business",
    "tagZh": "職場協作",
    "tagEn": "Workplace & Leave",
    "icon": "💼",
    "image": "business.jpg",
    "titleZh": "辦公室工作交接、請病假報備與會議進度匯報",
    "titleEn": "Workplace Handovers, Sick Leave Requests & Meeting Progress",
    "titleVi": "Công Việc, Xin Nghỉ Phép & Báo Cáo Tiến Độ",
    "summaryZh": "學會辦公室與工廠車間實務溝通：請假（Nghỉ phép）、確認交期進度、協同跨部門合作。",
    "summaryEn": "Communicate effectively in office and factory settings: taking leave, progress updates, and team coordination.",
    "dialogues": [
      {
        "speaker": "Trần (主管)",
        "role": "npc",
        "viet": "David, báo cáo tiến độ dự án tuần này đã hoàn thành chưa?",
        "zh": "David，本週的專案進度報告完成了嗎？",
        "en": "David, is this week’s project progress report completed yet?",
        "northTip": "「Tiến độ」(進度)、「Dự án」(專案/項目) 均為常用漢越詞。",
        "southTip": "在主管前匯報工作時，語氣要明確自信。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Dạ thưa anh, em đã gửi báo cáo qua email rồi ạ. Mọi hạng mục đều đang đúng tiến độ.",
        "zh": "報告主管，我已經透過 Email 發送報告了。所有項目都在按進度進行中。",
        "en": "Yes sir, I have sent the report via email. All items are on schedule.",
        "northTip": "對長官用「Dạ thưa... ạ」表達高度敬意與專業態度。",
        "southTip": "「đúng tiến độ」= 按進度/如期。"
      },
      {
        "speaker": "Trần (主管)",
        "role": "npc",
        "viet": "Tốt lắm. Chiều mai 2 giờ chúng ta sẽ họp với khách hàng để chốt hợp đồng nhé.",
        "zh": "非常好。明天下萬 2 點我們要跟客戶開會敲定合約。",
        "en": "Very good. Tomorrow at 2 PM we will meet with clients to finalize the contract.",
        "northTip": "「Chốt」指敲定/定案（如 chốt hợp đồng 敲定合約, chốt đơn 結單）。",
        "southTip": "商務上「họp」(開會) 與「hợp đồng」(合約) 是最高頻字彙。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Dạ vâng, em sẽ chuẩn bị đầy đủ tài liệu và phòng họp trước ạ.",
        "zh": "收到，我會提前準備好完整資料與會議室。",
        "en": "Understood, I will prepare all documents and the meeting room in advance.",
        "northTip": "「Dạ vâng」= 是的/遵命/收到，是標準嚴謹的職場回應。",
        "southTip": "「Tài liệu」= 文件資料；「phòng họp」= 會議室。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "專案幹部 (David)",
      "userRoleEn": "Project Specialist (David)",
      "partnerRoleZh": "部門主管 (Trần)",
      "partnerRoleEn": "Department Manager (Trần)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "David, tài liệu cho buổi họp ngày mai đã chuẩn bị xong chưa em?",
          "partnerPromptZh": "David，明天會議的文件資料準備好了嗎？",
          "partnerPromptEn": "David, are the materials for tomorrow’s meeting ready yet?",
          "userOptions": [
            {
              "id": "wc1_opt1",
              "textVi": "Dạ thưa anh, em đã chuẩn bị xong và in sẵn tài liệu rồi ạ.",
              "textZh": "報告主管，我已經準備完畢並且印好資料了。",
              "textEn": "Yes sir, I have prepared everything and printed the documents.",
              "isCorrect": true,
              "feedbackZh": "專業且負責任的完美答覆！",
              "feedbackEn": "Professional, reliable and respectful reply!"
            },
            {
              "id": "wc1_opt2",
              "textVi": "Cho tôi một ly trà đá.",
              "textZh": "給我一杯冰茶。",
              "textEn": "Give me an iced tea.",
              "isCorrect": false,
              "feedbackZh": "在職場匯報中請勿回答無關內容。",
              "feedbackEn": "Irrelevant reply in a work meeting."
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Báo cáo",
        "zh": "報告 / 匯報",
        "en": "Report",
        "phonetic": "[ɓaːw kaːw]",
        "note": "漢越詞「報告」"
      },
      {
        "viet": "Tiến độ",
        "zh": "進度",
        "en": "Progress / Schedule",
        "phonetic": "[tiən do]",
        "note": "專案管理必備"
      },
      {
        "viet": "Xin nghỉ phép",
        "zh": "請假 / 請年假",
        "en": "Request leave / Take time off",
        "phonetic": "[sin ŋi fɛp]",
        "note": "人資日常"
      },
      {
        "viet": "Họp",
        "zh": "開會 / 會議",
        "en": "Meeting",
        "phonetic": "[hɔp]",
        "note": "職場核心動詞"
      },
      {
        "viet": "Tài liệu",
        "zh": "文件 / 資料",
        "en": "Documents / Materials",
        "phonetic": "[taːj liəw]",
        "note": "漢越詞「資料」"
      }
    ],
    "culturalTips": {
      "titleZh": "越南職場溝通與請假禮儀",
      "titleEn": "Workplace Communication & Leave Etiquette in Vietnam",
      "tipsZh": [
        "在越南職場中向主管報告時，開頭加上「Dạ thưa [稱謂]...」並以「ạ」結尾，能展現出極高的職業素養與對長官的敬重。",
        "若需請病假或事假，通常需提前向直屬主管（Quản lý / Trưởng phòng）發送 Zalo 訊息或 Email 報備，並由同事協同交接當日緊急事務。"
      ],
      "tipsEn": [
        "Using \"Dạ thưa...\" and \"ạ\" shows high professional respect when reporting to managers.",
        "Requesting leave is typically done in advance via formal email or direct Zalo notification."
      ]
    }
  },
  {
    "id": "travel_tour",
    "category": "travel",
    "tagZh": "旅遊包車",
    "tagEn": "Tours & Rentals",
    "icon": "🛵",
    "image": "travel.jpg",
    "titleZh": "景點門票購買、租借機車 (Thuê xe máy) 與一日遊諮詢",
    "titleEn": "Attraction Tickets, Motorbike Rental & Day Tour Booking",
    "titleVi": "Đặt Tour Du Lịch, Mua Vé & Thuê Xe Máy",
    "summaryZh": "掌握在峴港、河內、胡志明或大叻租機車、確認油箱、押金、頭盔與購買觀光景點門票實戰對話。",
    "summaryEn": "Rent motorbikes, check fuel/helmets, leave deposit, and book day tours in Da Nang, Hanoi, Saigon, or Da Lat.",
    "dialogues": [
      {
        "speaker": "Chủ tiệm (店主)",
        "role": "npc",
        "viet": "Chào em, em muốn thuê xe máy số hay xe ga? Thuê mấy ngày?",
        "zh": "你好，你想租打檔車還是自動變速機車 (Scooter)？租幾天？",
        "en": "Hello, do you want to rent a manual or automatic scooter? For how many days?",
        "northTip": "「Xe số」= 打檔機車（省油/爬坡好）；「Xe ga」= 自動變速速克達。",
        "southTip": "在峴港 (Đà Nẵng)、富國島租機車是自由行最普遍的方式。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Cho em thuê một chiếc xe ga trong ba ngày. Giá thuê một ngày là bao nhiêu ạ?",
        "zh": "給我租一輛自動變速機車 (Xe ga)，租三天。一天的租金是多少錢呢？",
        "en": "I want to rent an automatic scooter for three days. How much is the daily rental?",
        "northTip": "「Xe ga」騎乘方便，適合在市區或平坦觀光路段。",
        "southTip": "「Giá thuê」= 租金。"
      },
      {
        "speaker": "Chủ tiệm (店主)",
        "role": "npc",
        "viet": "Xe ga một trăm năm mươi nghìn một ngày. Bên anh kèm hai mũ bảo hiểm và áo mưa nhé.",
        "zh": "自動機車一天十五萬盾 (150,000 VND)。我們附送兩頂安全帽和雨衣喔。",
        "en": "Automatic is 150,000 VND per day. We include two helmets and raincoats.",
        "northTip": "「Mũ bảo hiểm」(北越) / 「Nón bảo hiểm」(南越) 指安全帽。",
        "southTip": "在越南騎機車未戴安全帽會被交警嚴格開罰。"
      },
      {
        "speaker": "David (學習者)",
        "role": "learner",
        "viet": "Dạ tốt quá! Em cần đặt cọc hộ chiếu hay tiền mặt ạ?",
        "zh": "太好了！我需要押護照還是付現金押金呢？",
        "en": "Great! Do I need to leave my passport or cash as deposit?",
        "northTip": "「Đặt cọc」指付押金/訂金（漢越詞「定閣」）。",
        "southTip": "一般飯店租車免押護照，外部車行常需押護照影本或現金。"
      }
    ],
    "rolePlay": {
      "userRoleZh": "自由行旅客 (David)",
      "userRoleEn": "Traveler (David)",
      "partnerRoleZh": "車行老闆 (Chủ tiệm)",
      "partnerRoleEn": "Rental Owner (Chủ tiệm)",
      "steps": [
        {
          "stepIndex": 1,
          "partnerPromptVi": "Em thuê xe ga hay xe số? Em thuê mấy ngày?",
          "partnerPromptZh": "你要租自動速克達還是打檔車？租幾天？",
          "partnerPromptEn": "Do you rent an automatic scooter or manual? For how many days?",
          "userOptions": [
            {
              "id": "tt1_opt1",
              "textVi": "Cho em thuê một chiếc xe ga trong 2 ngày nhé.",
              "textZh": "請給我租一輛自動速克達，租 2 天。",
              "textEn": "I would like to rent an automatic scooter for 2 days please.",
              "isCorrect": true,
              "feedbackZh": "非常標準清楚的租車表達！",
              "feedbackEn": "Clear and standard vehicle rental sentence!"
            },
            {
              "id": "tt1_opt2",
              "textVi": "Tôi muốn đổi tiền USD sang VND.",
              "textZh": "我想把美金換成越南盾。",
              "textEn": "I want to exchange USD to VND.",
              "isCorrect": false,
              "feedbackZh": "這是在銀行的換匯句子喔！",
              "feedbackEn": "This is a currency exchange phrase!"
            }
          ]
        }
      ]
    },
    "vocab": [
      {
        "viet": "Thuê xe máy",
        "zh": "租機車",
        "en": "Rent a motorbike",
        "phonetic": "[tʰwe sɛ maːj]",
        "note": "自由行必備技能"
      },
      {
        "viet": "Xe ga",
        "zh": "自動變速速克達 (Scooter)",
        "en": "Automatic scooter",
        "phonetic": "[sɛ ɣa]",
        "note": "免換檔最好騎"
      },
      {
        "viet": "Xe số",
        "zh": "打檔機車",
        "en": "Manual / Semi-auto motorbike",
        "phonetic": "[sɛ so]",
        "note": "爬坡省油首選"
      },
      {
        "viet": "Mũ bảo hiểm / Nón bảo hiểm",
        "zh": "安全帽",
        "en": "Helmet",
        "phonetic": "[mu ɓaːw hiəm / nɔn ɓaːw hiəm]",
        "note": "騎車必戴"
      },
      {
        "viet": "Đặt cọc",
        "zh": "押金 / 訂金",
        "en": "Deposit",
        "phonetic": "[daːt kaːwk]",
        "note": "漢越詞「定閣」"
      }
    ],
    "culturalTips": {
      "titleZh": "越南自由行機車租借與交通常識",
      "titleEn": "Motorbike Rentals & Traffic Tips in Vietnam",
      "tipsZh": [
        "在越南租機車時，務必先檢查煞車 (Thắng xe)、大燈、喇叭以及車身原有刮痕，並向店家確認就近的加油站位置 (Cây xăng)。",
        "越南規定騎機車所有乘客必須全程佩戴安全帽 (Mũ/Nón bảo hiểm)，且市區限速通常為 40~50 km/h。"
      ],
      "tipsEn": [
        "Always check brakes, lights, horns and fuel before riding a rented motorbike.",
        "Helmets are mandatory by law for both drivers and pillion passengers in Vietnam."
      ]
    }
  }
];
