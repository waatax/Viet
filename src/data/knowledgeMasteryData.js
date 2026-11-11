import { knowledgeGuides, speakableVi } from './knowledgeGuides.js';
import { conceptDetails } from './conceptDetails.js';
import { knowledgeBridge, bridgeChecks } from './knowledgeBridge.js';

/**
 * 20 門知識學科魅力引導庫 (Subject Sparks & Love-the-Discipline Guide)
 * 讓越南語學習者發現每一門知識學科背後的文化溫度、科學邏輯與實用樂趣，
 * 結合「🎧 聽・📖 讀・🗣️ 說」三維學習攻略，真正愛上這些知識學科。
 */
export const subjectSparks = {
  path: {
    disciplineName: '信達雅七階能力藍圖學',
    badge: '🧭 學習導航學科',
    sparkHook: '學語言最怕像在迷霧裡走路。這門學科把越南語拆成七個看得見風景的驛站，讓你每走一步都清楚聽見自己的進步！',
    ahaInsight: '原來「會說幾千個單字」不等於流利；只要掌握「聽懂關鍵詞 → 主動澄清 → 禮貌回應」，第一週就能在越南自在開口！',
    listenGuide: '先聽出句中的否定與時貌詞（如 chưa／không），抓準對方的核心意圖。',
    readGuide: '對照「信（準確）、達（自然）、雅（得體）」三層階梯，讀懂日常與正式文體的差異。',
    speakGuide: '每次開口只設定一個小目標：先求意思清楚，再換一個稱謂或情境說第二遍。',
    joyAffirmation: '你正在用最聰明的地圖探索越南語，每一次開口都是值得慶祝的里程碑！',
    funFact: '越南人打招呼時最常說「Ăn cơm chưa?（吃飽沒？）」，這源於千年稻作農耕文化的溫情互助，回答「Dạ rồi!（吃飽啦！）」就能立刻收穫燦爛笑容！',
    magicPhrase: {
      viet: 'Cố lên, bạn làm được mà!',
      zh: '加油，你一定可以做到的！',
      usage: '最溫暖的互相打氣神句'
    }
  },
  alphabet: {
    disciplineName: '越語聲學與拼讀解碼學',
    badge: '🔤 聲音密碼學科',
    sparkHook: '越南語字母就像一套精準的「聲音樂譜」！只要解開 29 個字母與韻尾的組合規律，全越南的路牌、菜單你都能看字讀音！',
    ahaInsight: '為什麼同一個 /k/ 音會寫成 c、k 或 qu？這不是為了為難你，而是百年前傳教士為了讓拼寫規則 100% 零例外所設計的巧思！',
    listenGuide: '專心聽母音的嘴型（如圓唇 u 與展唇 ư）以及詞尾 -c/-t/-p 俐落收住的瞬間。',
    readGuide: '看字時先拆成「聲母＋母音＋韻尾＋聲調」四格積木，不要整串字母硬背。',
    speakGuide: '唸塞音韻尾時把嘴巴輕輕閉住不吐氣，體會越南語像打擊樂般清脆的節奏感！',
    joyAffirmation: '太棒了！你的耳朵與舌頭正在解鎖越南語最迷人的聲音密碼！',
    funFact: '越南語字母中的角號（ư、ơ）和帽子（â、ê、ô）是百年前傳教士依據葡萄牙語音標發明的，這套精密的拼音符號讓文盲率在短短幾十年間從 95% 驟降！',
    magicPhrase: {
      viet: 'Tiếng Việt dễ thương quá!',
      zh: '越南話太可愛了吧！',
      usage: '稱讚發音好聽的真誠讚美'
    }
  },
  tonegame: {
    disciplineName: '六度聲調與旋律辨義學',
    badge: '🎵 聲調音樂學科',
    sparkHook: '把越南語六聲調想像成六種有表情的音樂旋律！跟著音高起伏哼唱，你會發現說越南語就像在唱歌一樣好聽又有趣。',
    ahaInsight: '越南語聲調不只靠「高低」，還加上了氣息與喉部質感！抓到這個訣竅，最難分的問聲與跌聲也會瞬間變得立體分明。',
    listenGuide: '先用 0.75× 慢速聽「同音節換聲調」（如 ma／má／mà），感受旋律往上揚或往下沉。',
    readGuide: '把聲調符號當成音符：銳聲（ˊ）高揚、玄聲（ˋ）平緩下降、重聲（.）短促沉穩。',
    speakGuide: '開口時手勢跟著聲調畫曲線，不用刻意用力壓喉嚨，放輕鬆讓聲音自然流動。',
    joyAffirmation: '你的音感越來越敏銳了！每一個精準的聲調都讓你的越語更有靈魂！',
    funFact: '在越南南方（西貢與湄公河三角洲），跌聲（ngã）與問聲（hỏi）發音完全合流，說起話來如同輕柔的水上民謠般溫潤隨和，這正是南方人隨性樂天的性格寫照！',
    magicPhrase: {
      viet: 'Nói chuẩn như người bản xứ!',
      zh: '說得跟在地人一樣標準！',
      usage: '聽到聲調精準時的最高讚美'
    }
  },
  pronoun: {
    disciplineName: '越南人際溫度與稱謂社會學',
    badge: '🤝 人際文化學科',
    sparkHook: '在越南，四海之內皆家人！學會稱謂學，你叫出的每一個字不再只是冷冰冰的「你和我」，而是瞬間拉近距離的溫暖問候。',
    ahaInsight: '為什麼越南人叫店員、同事甚至路人都用「哥哥（anh）、姊姊（chị）、弟妹（em）」？因為把社會當成大家庭，是越南文化最動人的人情味！',
    listenGuide: '聽對話開頭的第一個詞與句尾的 ạ，就能立刻聽出雙方的輩分與親疏關係。',
    readGuide: '把稱謂視為「成對的雙人舞」（anh ↔ em、chú ↔ cháu），連同雙方的相對年齡一起讀。',
    speakGuide: '不確定對方年齡時，大方微笑加上禮貌詢問，越南朋友一定會熱情回應你！',
    joyAffirmation: '懂稱謂的人最受歡迎！你已經掌握了打開越南人心門的金鑰匙！',
    funFact: '在越南語裡幾乎沒有冷冰冰的「你／我」，即使是在路邊買一杯甘蔗汁，你叫攤主一聲「Chị ơi（姊姊）」，對方就會像對待親弟妹一樣，熱情地幫你加滿冰塊！',
    magicPhrase: {
      viet: 'Em chào anh chị ạ!',
      zh: '向哥哥姊姊問好！',
      usage: '打開心門、拉近距離的黃金問候'
    }
  },
  shopping: {
    disciplineName: '越南市集經濟與數字邏輯學',
    badge: '🛍️ 生活數位學科',
    sparkHook: '從熱鬧的檳城市場到精品咖啡館，數字與議價是一場充滿笑容的社交遊戲！學會千位邏輯，讓你買得聰明又開心。',
    ahaInsight: '越南盾動輒幾萬、幾十萬，但只要記住「nghìn（千＝三個零）」與「triệu（百萬＝六個零）」，腦袋就像裝了即時匯率計算機！',
    listenGuide: '抓準百位後的 linh／lẻ 與尾數 mốt（1）、lăm（5），報價再快也能一秒聽懂。',
    readGuide: '看標價時直接以「每三位逗號」對齊 nghìn 與 triệu，徹底告別中文「萬位」換算卡頓。',
    speakGuide: '付款前笑著把「數量＋單價＋總價」重述一次，既專業又能贏得店家尊重。',
    joyAffirmation: '數字與報價難不倒你了！現在去越南逛街點餐，你就是最自信的達人！',
    funFact: '在越南夜市或路邊攤，大家常把千盾（nghìn）簡稱為「k」或「chục（十）」，例如 50k 會說「năm chục」，懂得這樣說老闆會瞬間把你當成道地內行人！',
    magicPhrase: {
      viet: 'Bớt một chút nhé, người quen mà!',
      zh: '算便宜一點嘛，都熟客了！',
      usage: '夜市充滿人情味的微笑殺價金句'
    }
  },
  phrases: {
    disciplineName: '高頻語塊與萬能造句工程學',
    badge: '⚡ 溝通工具學科',
    sparkHook: '不用苦背幾百條複雜語法！只要掌握十幾個像樂高積木一樣的「萬能短句框架」，換個詞就能應付 80% 的日常溝通。',
    ahaInsight: '原來「請給我物品（Cho tôi…）」、「請幫我忙（…giúp tôi）」與「我可以…嗎（Tôi có thể…）」各司其職，分清楚就能說得道地又有禮貌！',
    listenGuide: '先聽句首是請求、詢問還是致歉，再抓中間被替換的名詞或動詞。',
    readGuide: '把短句拆成「固定句框＋可替換槽位」，一眼看穿句子的組合結構。',
    speakGuide: '每學一句就順手換三種飲料或生活物品說出來，讓萬能句框變成你的直覺反射！',
    joyAffirmation: '你的口語工具箱越來越豐富了，隨時隨地都能自在開口表達需求！',
    funFact: '越南語句尾的「ạ、nhé、nha、đi」被稱為「情感調色盤」！一句話只要尾巴加上甜甜的「nha」，原本生硬的請求瞬間變成像好友撒嬌般親切自然！',
    magicPhrase: {
      viet: 'Cho tôi một ly cà phê sữa đá nhé!',
      zh: '請給我一杯冰奶咖啡唷！',
      usage: '全越南街頭最受歡迎的生活神句'
    }
  },
  grammar: {
    disciplineName: '越語極簡語序與時貌建築學',
    badge: '🏛️ 語法邏輯學科',
    sparkHook: '好消息：越南語動詞完全不用像英文那樣背過去式或第三人稱變化！它是一門乾淨俐落、像排積木一樣優雅的邏輯學科。',
    ahaInsight: '越南語修飾語採用「先畫主角、再加細節」的鏡頭美學（例如：書 → 新 → 我買的），只要習慣先說核心名詞，造句就會無比順暢！',
    listenGuide: '聽動詞前面的時間信號（đã 已經／đang 正在／sẽ 將會／chưa 尚未），瞬間掌握事情發生的時間軸。',
    readGuide: '先圈出「主詞＋動詞＋核心名詞」，再看後面的形容詞如何一層層精確描繪名詞。',
    speakGuide: '形容事物好吃、漂亮時直接說「Món này ngon」，大膽拿掉多餘的 là，越語立刻變道地！',
    joyAffirmation: '你已經看穿越南語最核心的語序美學，造句邏輯越來越清晰了！',
    funFact: '越南語動詞完全沒有惱人的時態變位與單複數人稱屈折！形容詞也能直接當動詞用，只要排好積木語序，連小朋友都能在十分鐘內看懂語法骨架！',
    magicPhrase: {
      viet: 'Ngữ pháp tiếng Việt rất logic!',
      zh: '越南語語法非常合乎邏輯！',
      usage: '越學越有自信的底氣宣言'
    }
  },
  sentence: {
    disciplineName: '語塊組裝與複句邏輯建構學',
    badge: '🧩 結構思維學科',
    sparkHook: '把單字連成好聽的長句，就像拼裝精緻的模型！用「因為…所以…」、「雖然…但是…」把想法串起來，讓你的越語有理有據。',
    ahaInsight: '只要把「數量＋量詞＋名詞＋特色」打包成一個語塊，再搭配連接詞，你就能用簡單的詞彙說出非常有層次的完整想法！',
    listenGuide: '注意聽連接詞成對出現的信號（vì…nên…／tuy…nhưng…／nếu…thì…），預判後半句的走向。',
    readGuide: '閱讀長句時先在連接詞與介詞（ở／để／khi）處輕輕畫斜線，長句立刻變成好讀的小短語。',
    speakGuide: '先說出核心主句，再像加積木一樣補上地點、時間或原因，輕鬆說出流暢長句。',
    joyAffirmation: '從單字到完整長句，你的越語表達力正在迎來質的飛躍！',
    funFact: '越南最著名的古典文學《翹傳》採用「六八體詩歌」，每逢偶數句尾韻律如同海浪波紋般層層推進，這種注重韻律的傳統讓現代越南語的長句讀起來依然朗朗上口！',
    magicPhrase: {
      viet: 'Ý kiến của bạn rất hay!',
      zh: '你的想法非常棒！',
      usage: '在長句討論中給予夥伴最棒的肯定'
    }
  },
  hanviet: {
    disciplineName: '千年漢越音韻與古典詩文美學',
    badge: '📜 文化橋樑學科',
    sparkHook: '身為華語學習者，你天生自帶越南語「超能力」！超過六成越語進階詞彙與漢字同源，這門學科帶你一秒喚醒腦中的字根寶庫。',
    ahaInsight: '從《Truyện Kiều（翹傳）》六八體詩歌的波浪押韻，到現代報紙的政經詞彙，漢越音是連結千年東方文學與現代越南社會的奇妙橋樑！',
    listenGuide: '聽出漢越字根的固定聲母與韻尾對應（如國＝quốc、學＝học），用耳朵就能推敲新詞涵義。',
    readGuide: '一面享受字根秒懂的快感，一面特別標記有趣的「漢越假朋友」（如 bác sĩ 是醫師而非博士）。',
    speakGuide: '在正式場合適度選用漢越詞展現專業，日常聊天則切換成親切的純越固有詞！',
    joyAffirmation: '貫通漢越字根與文學美感，你正在體驗跨文化語言學習最迷人的樂趣！',
    funFact: '超過 60% 的越南語進階詞彙都源自漢字古音！比如「thời gian（時間）」、「hạnh phúc（幸福）」，華語學習者只要掌握聲韻對應，單字庫就能以十倍速暴增！',
    magicPhrase: {
      viet: 'Vạn sự như ý!',
      zh: '萬事如意！',
      usage: '逢年過節最溫馨親切的漢越吉祥話'
    }
  },
  conversation: {
    disciplineName: '真實互動語用與會話修復學',
    badge: '💬 實戰互動學科',
    sparkHook: '真正的溝通高手不是從不聽錯，而是懂得優雅地「接球、追問與確認」！這門學科讓你面對真實越南人時從容不迫、越聊越投機。',
    ahaInsight: '當你說出「你的意思是…對嗎？（Ý anh là… phải không?）」，對方不僅不會覺得你越語不好，反而會稱讚你溝通細心又可靠！',
    listenGuide: '在對話中抓緊「數字、日期、地點」三大錨點，沒聽清就大方請對方重述。',
    readGuide: '觀察對話如何「開啟需求 → 追問細節 → 修正誤會 → 確認收尾」，掌握真實交談的節奏。',
    speakGuide: '養成「先重述關鍵條件＋加一句 đúng không?」的好習慣，讓每一場對話都精準落地。',
    joyAffirmation: '你已經具備真實會話的修復力與掌控感，勇敢享受每一次越語交談吧！',
    funFact: '西貢街頭的「Trà Đá（冰茶）」文化是一扇流動的社交客廳！只要坐在矮塑膠椅上一杯冰茶，一句「Dạo này thế nào?（最近好嗎？）」就能聊上一整個午後！',
    magicPhrase: {
      viet: 'Đi uống cà phê không?',
      zh: '要去喝杯咖啡嗎？',
      usage: '在越南開啟一段美好情誼的最佳邀請'
    }
  },
  accent: {
    disciplineName: '越南南北風土與方言地理學',
    badge: '🗺️ 人文地理學科',
    sparkHook: '從千年古都河內的清亮抑揚，到熱帶西貢的溫潤隨和，南北口音背後藏著越南的山川地理與生活哲學，聽懂雙城口音超有成就感！',
    ahaInsight: '就像台灣南北有不同飲食與習慣用詞，越南北部說 ngô（玉米）、南部說 bắp，但拼寫標準卻全國相通——選一種主口音說，兩邊都能聽懂最瀟灑！',
    listenGuide: '比較同一句話在河內與胡志明市的聲調尾韻與常用語氣詞（thế vs vậy），培養寬廣的聽力耳。',
    readGuide: '記住「口音改變聲音，但不改變標準拼字」，閱讀時仍以正統拼寫為基準。',
    speakGuide: '先穩定練好你最常接觸的地區口音，遇到地區差異詞時微笑問一句「Từ này có nghĩa là gì?」。',
    joyAffirmation: '聽懂南北雙城之聲，你的越語視野已經跨越地域，走進真實的越南生活！',
    funFact: '河內人喝蛋咖啡（Cà phê trứng）品味綿密細緻，西貢人喝冰奶咖啡（Cà phê sữa đá）享受奔放沁涼；這份風土差異也反映在北部兒化緊湊與南部寬厚開展的語調中！',
    magicPhrase: {
      viet: 'Bắc Nam một nhà!',
      zh: '北南一家親！',
      usage: '化解口音好奇、展現豁達包容的幽默話'
    }
  },
  shadowing: {
    disciplineName: '聽覺運動迴路與跟讀神經學',
    badge: '🎧 語感鍛鍊學科',
    sparkHook: '為什麼跟讀（Shadowing）被譽為口說進步最快的祕密武器？因為它直接打通「耳朵聽見」到「嘴巴說出」的大腦神經高速公路！',
    ahaInsight: '把長句切成 2 到 4 個字的「呼吸意群（Chunk）」，像跟著音樂節拍一樣延遲半秒開口，舌頭就不會打結，語調還會自然變道地！',
    listenGuide: '先聽整句的情緒與停頓位置，找出哪幾個字被母語者連在一起唸。',
    readGuide: '利用斜線（／）標出意群邊界，讓眼睛一次讀一個語塊，而不是逐字跳讀。',
    speakGuide: '先慢速 0.75× 對準母音與聲調，再挑戰原速 1.0× 不看字延遲跟讀，最後換一個詞自己說！',
    joyAffirmation: '每一次跟讀都在強化你的越語肌肉記憶，你的發音與流暢度正在飛速成長！',
    funFact: '認知神經學發現，跟讀時大腦的「布洛卡區（語言生成）」與「韋尼克區（語音感知）」會同時啟動同步放電，模仿三次就能建立超越默念十遍的肌肉記憶！',
    magicPhrase: {
      viet: 'Luyện tập mỗi ngày, tiến bộ từng giây!',
      zh: '每天練習，分秒進步！',
      usage: '跟讀開口時給大腦的最佳正面暗示'
    }
  },
  business: {
    disciplineName: '東協商務談判與契約語用學',
    badge: '💼 職場菁英學科',
    sparkHook: '越南是全球供應鏈最耀眼的新星！學會商務越語，從產線巡檢、報價交期到正式公函，讓你成為跨國職場上最受敬重的溝通橋樑。',
    ahaInsight: '越南商務文化講究「先建立情誼（tình cảm），再落實條款確認（xác nhận）」，一句得體的委婉請求往往比生硬催促更能推動合作！',
    listenGuide: '高度聚焦數量、幣別、交貨日期與責任歸屬，聽完立刻核對條件。',
    readGuide: '掌握正式書信「Kính gửi… / Trân trọng」與條件句「Nếu…thì…」的嚴謹結構。',
    speakGuide: '提出讓步或變更時，務必把「前提條件＋具體數字＋確認期限」連成完整句子說清楚。',
    joyAffirmation: '兼具專業精準與禮貌風範，你的商務越語實力正在為職涯創造無限可能！',
    funFact: '在越南商務餐敘中，最熱鬧的儀式就是全桌起立齊喊「Một, hai, ba, dzô!（一、二、三，乾杯！）」，這不僅是破冰利器，更是東協商業夥伴建立信任的文化橋樑！',
    magicPhrase: {
      viet: 'Hợp tác vui vẻ, cùng nhau phát triển!',
      zh: '合作愉快，攜手共贏！',
      usage: '簽署協議與商務握手時的誠懇結語'
    }
  },
  macropol: {
    disciplineName: '越南宏觀政經與批判閱讀學',
    badge: '📈 宏觀趨勢學科',
    sparkHook: '想看懂東協經濟起飛的第一手脈動嗎？透過這門學科，你能直接讀懂越南財經新聞、政策報告與產業趨勢，擁有洞見未來的雙眼！',
    ahaInsight: '閱讀政經報導時，區分「已發生數據」與「預測語氣（có thể／dự kiến）」、分清「百分比（%）」與「百分點」，是高階讀者的核心素養！',
    listenGuide: '聽新聞摘要時先抓「比較基準（cùng kỳ 同期）」與「趨勢動詞（tăng／giảm／đi ngang）」。',
    readGuide: '用「來源、口徑、論點、限制」四格濾鏡剖析文章，不把評論推測當成既定事實。',
    speakGuide: '練習用三句話摘要一則趨勢：先說數據事實，再加 có thể 說明可能影響，最後補充觀察條件。',
    joyAffirmation: '你能用越語思考宏觀經濟與社會脈絡，這份深度與眼界令人讚嘆！',
    funFact: '1986 年越南推行「Đổi Mới（革新開放）」政策，三十年間從農業國躍升為全球高科技電子製造重鎮，越南語財經報導中「tăng trưởng（成長）」始終是最熱門的關鍵詞！',
    magicPhrase: {
      viet: 'Cơ hội phát triển rộng mở!',
      zh: '發展機遇前景廣闊！',
      usage: '洞悉東協脈動的遠見評語'
    }
  },
  quiz: {
    disciplineName: '認知診斷與錯因逆向工程學',
    badge: '🎯 診斷進階學科',
    sparkHook: '在這裡，答錯題目不是扣分，而是發現寶藏！這門學科教你像偵探一樣從錯誤中找出「最後一塊拼圖」，讓弱點直接變成最強項。',
    ahaInsight: '原來 90% 的錯誤都可歸入「聲音、詞義、語序、語境」四大類！只要看清自己為什麼被干擾選項吸引，同類題型就再也考不倒你。',
    listenGuide: '分清楚自己是「耳誤（mua／mưa 母音混淆）」還是「詞義不熟」，對症下藥最省力。',
    readGuide: '作答後仔細閱讀每個干擾選項的解析，理解規則邊界比單純記住答案更有價值。',
    speakGuide: '把曾經答錯的題目改寫成跟自己生活有關的新句子並大聲說出來，完成真正的記憶修復！',
    joyAffirmation: '懂得從錯誤中提煉智慧，你已經掌握了高效學習者最核心的逆向工程力！',
    funFact: '大腦神經科學證明：每一次「差點答對但做錯」的時刻，正是神經突觸重新編碼的最活躍期！將錯題歸類不是挫敗，而是把大腦記憶固化成直覺反射的黃金捷徑！',
    magicPhrase: {
      viet: 'Thất bại là mẹ thành công!',
      zh: '失敗是成功之母！',
      usage: '錯題後重新挑戰自我的豁達口訣'
    }
  },
  flashcards: {
    disciplineName: '主動提取與間隔記憶工程學',
    badge: '🗂️ 詞彙記憶學科',
    sparkHook: '告別死背單字隔天就忘的挫折感！結合腦科學「主動提取」與「黃金間隔複習」，加上黃金搭配詞，讓單字真正在你的腦中生根發芽。',
    ahaInsight: '只背單字「đặt（訂）」很難開口，但連同搭配詞「đặt phòng（訂房）、đặt vé（訂票）」一起記，遇到情境就能整串脫口而出！',
    listenGuide: '善用「盲聽選義」與「越中連播」，讓耳朵一聽到聲音就直接浮現畫面，不經過中文逐字翻譯。',
    readGuide: '翻卡前給自己三秒鐘主動回想詞義與例句，這種「微費力感」正是神經連結變強的信號。',
    speakGuide: '每複習一張卡，就用它的黃金搭配說一句跟今天生活有關的話，把被動字庫變成主動口語！',
    joyAffirmation: '你的越語詞彙神經網路正在穩健擴張，每翻一張卡都離流利更近一步！',
    funFact: '根據著名的「測試效應（Testing Effect）」，主動從記憶中提取一個越語詞彙，比被動看答案十次能在大腦海馬迴中保留多達三倍的時間，翻卡前回想三秒正是魔法所在！',
    magicPhrase: {
      viet: 'Nhớ lâu, hiểu sâu, dùng được ngay!',
      zh: '記牢、理解透徹、立刻能用！',
      usage: '高效率掌握單字庫的自豪宣言'
    }
  },
  topics: {
    disciplineName: '七大生活專題跨域整合學',
    badge: '🌏 跨域實戰學科',
    sparkHook: '真實生活不會只考單一科目！從點一杯少冰咖啡、詢問住宿天數到看診描述症狀，這門學科帶你把零散知識串成流暢的生活劇本。',
    ahaInsight: '當你能把「數量＋品名＋客製條件（ít đường, không đá）」與「日期時間」自由組合，你就擁有在越南獨立生活的全方位行動力！',
    listenGuide: '在連續情境中同時捕捉兩個以上的關鍵資訊（例如：幾杯飲料＋什麼甜度、哪一天＋住幾晚）。',
    readGuide: '對照七大生活主題的常用句式，觀察數量、時間與程度副詞（hơi／cao）如何精準搭配。',
    speakGuide: '試著把兩個主題串起來說（例如先點餐再問總價與能否轉帳），享受一氣呵成的暢快感！',
    joyAffirmation: '跨領域整合成功！你已經能把課堂知識化為走遍越南的真實生活力！',
    funFact: '越南的國民三明治 Bánh mì 巧妙融合了法國長棍麵包的酥脆與越南在地的扎肉、香菜和醃蘿蔔，這正是越南文化吸收多元精華、轉化為獨特生活美學的最佳象徵！',
    magicPhrase: {
      viet: 'Ngon quá, cho tôi thêm một cái!',
      zh: '太美味了，請再給我一份！',
      usage: '品味越南街頭美食最真性情的一句話'
    }
  },
  fasttrack: {
    disciplineName: '七日高頻生存任務工程學',
    badge: '🚀 速成行動學科',
    sparkHook: '馬上就要出發去越南了嗎？這門學科專為行動派打造，濃縮每天最核心的一個生存任務，讓你用最短時間累積最大的開口自信！',
    ahaInsight: '語言速成的祕訣不在於「一天背一百句」，而在於「每天徹底練熟三句能解決問題的話，隔天早上不看字還能自然說出來」！',
    listenGuide: '鎖定計程車指路（đi thẳng／rẽ trái）、問價與點餐的高頻回應，讓耳朵熟悉街頭實戰節奏。',
    readGuide: '按第 1 天到第 7 天的任務清單循序推進，每天新學前先遮住課文回想前一天的三句核心句。',
    speakGuide: '把每句生存短句換成自己要去的真實飯店、想吃的美食大聲說三次，上場即戰力滿分！',
    joyAffirmation: '行動力滿分！短短七天的精準累積，足以讓你的越南之旅充滿驚喜與笑容！',
    funFact: '初訪越南的旅人只要掌握「Xin chào（你好）」、「Cảm ơn（謝謝）」與「Bao nhiêu tiền（多少錢）」這黃金三角生存句，全越南的微笑與熱情就會為你全天候綻放！',
    magicPhrase: {
      viet: 'Hẹn gặp lại Việt Nam xinh đẹp!',
      zh: '再會，美麗的越南！',
      usage: '旅行滿載美好回憶時的深情道別'
    }
  },
  emergency: {
    disciplineName: '危機溝通與精準求助實務學',
    badge: '🛟 安全守護學科',
    sparkHook: '出門在外，平安是最大的快樂！這門學科是你最可靠的隨身護身符，教你在緊急時刻用最簡短清晰的越語，三秒鐘傳達位置與需求。',
    ahaInsight: '緊急求助的黃金公式是「① 我在哪裡 → ② 發生什麼事（如遺失護照／藥物過敏）→ ③ 需要什麼協助（如中文口譯／書面證明）」，順序對了就能最快獲得支援！',
    listenGuide: '遇到聽不懂的醫療或警政指示時，不慌張、不亂猜，先聽關鍵地標並請求口譯或重述。',
    readGuide: '熟讀常見症狀、方位（bên trái／bên phải）與證件詞彙，搭配全螢幕大字卡隨時出示。',
    speakGuide: '用平穩清楚的語速練熟「位置＋問題＋請找口譯」三連句，有備無患最安心！',
    joyAffirmation: '學會保護自己與清楚求助，這份從容與安全感將陪伴你安心探索世界！',
    funFact: '在越南若遇到需要求助的情境，只要大方出示寫有地址的大字卡，路上的騎士與店家常會主動幫你打電話甚至熱心帶路，這份淳樸善良是越南最讓人安心的底色！',
    magicPhrase: {
      viet: 'Cảm ơn mọi người đã giúp đỡ tôi!',
      zh: '感謝大家熱心幫助我！',
      usage: '化險為夷後最誠摯的致謝金句'
    }
  },
  science: {
    disciplineName: '實證語言習得與記憶實驗學',
    badge: '🔬 腦科學方法學科',
    sparkHook: '把自己當成最酷的語言科學家！這門學科揭開大腦如何記住外語的真相，讓你用「提取、交錯、延後複習」輕鬆打破遺忘曲線。',
    ahaInsight: '研究證實：「連看十遍課文」產生的熟悉感很容易在隔天消失；反而是「闔上書本努力回想一次」，能讓記憶留存率翻倍成長！',
    listenGuide: '把易混淆的聲音（如 mua／mưa／múa）交錯在一起盲聽，訓練大腦高解析度的聽覺辨識力。',
    readGuide: '閱讀時養成「先看例句猜規則、再展開核對」的習慣，把每一次閱讀都變成主動提取實驗。',
    speakGuide: '每次學完新詞，堅持用它造一個跟自己今天有關的句子並隔日重測，親眼見證記憶的蛻變！',
    joyAffirmation: '掌握科學學習法的你，每一分鐘的練習都在創造最高效、最快樂的成長！',
    funFact: '大腦的遺忘速度在學習後第一天最快，但只要在第 1 天、第 3 天與第 7 天各主動提取一次，遺忘曲線就會被強行拉平成永久記憶，這就是本系統 1/3/7 排程背後的科學定理！',
    magicPhrase: {
      viet: 'Học tập khoa học, nhớ mãi không quên!',
      zh: '科學學習，歷久不忘！',
      usage: '成為自主學習大師的終身箴言'
    }
  }
};

/**
 * 聲調走向音高分析器：分析越文字詞中各音節的聲調走勢
 * 6 大聲調走勢：平聲（33 平中音）、玄聲（21 緩降）、銳聲（35 高升）、問聲（313 降升）、跌聲（35 緊喉中升）、重聲（21 緊喉急降）
 */
function analyzeToneContour(vietText) {
  if (!vietText) return [];
  const words = String(vietText).trim().split(/\s+/).filter(w => /^[a-zA-Zà-ỹÀ-ỸđĐ]+$/u.test(w.replace(/[.,?!;:…]+$/u, '')));
  return words.slice(0, 8).map(word => {
    const cleanWord = word.replace(/[.,?!;:…]+$/u, '').normalize('NFD');
    let toneName = 'ngang (平聲)';
    let contour = '33 中平 ──';
    let pitchHeight = 3;

    if (/[́]/.test(cleanWord)) {
      toneName = 'sắc (銳聲)';
      contour = '35 高升 ↗';
      pitchHeight = 5;
    } else if (/[̀]/.test(cleanWord)) {
      toneName = 'huyền (玄聲)';
      contour = '21 緩降 ↘';
      pitchHeight = 2;
    } else if (/[̉]/.test(cleanWord)) {
      toneName = 'hỏi (問聲)';
      contour = '313 降升 ⤾';
      pitchHeight = 2.5;
    } else if (/[̃]/.test(cleanWord)) {
      toneName = 'ngã (跌聲)';
      contour = '35 緊喉升 ⤴';
      pitchHeight = 4.5;
    } else if (/[̣]/.test(cleanWord)) {
      toneName = 'nặng (重聲)';
      contour = '21 緊喉降 ⤸';
      pitchHeight = 1;
    }

    const w = word.replace(/[.,?!;:…]+$/u, '');
    return {
      word: w,
      syllable: w,
      toneName,
      contour,
      pitchHeight
    };
  });
}

/**
 * 為全站 200 個知識點（20 模組 × 每模組 10 點）建構完整的「🎧 聽・📖 讀・🗣️ 說」三維互動資料。
 * - 第 10 點（index 9）100% 沿用 knowledgeBridge 與 bridgeChecks，確保既有測試與排程完全相容。
 * - 第 1～9 點（index 0..8）結合 knowledgeGuides.rows 與 conceptDetails，產生：
 *   1. 🎧 listeningCheck: [spokenVi, [opt0, opt1, opt2], answerIdx, whyExplanation]
 *   2. 📖 readingCheck: { prompt, options, answer, explain, chunks }
 *   3. 🗣️ speakingTask & speakingCues: 具體開口替換任務與三項自我檢核指標
 *   4. 🎵 toneContour: 視覺化聲調音高走勢
 */
function buildModuleMasteryItems(moduleId) {
  const guide = knowledgeGuides[moduleId];
  const details = conceptDetails[moduleId] || [];
  if (!guide) return [];

  const rows = guide.rows || [];
  const bridgeRow = knowledgeBridge[moduleId];
  const bridgeCheck = bridgeChecks[moduleId];

  return rows.map((row, idx) => {
    const [concept, vi, zh, rule] = row;
    const detail = details[idx] || {};
    const tier = guide.tiers?.[idx] || ['basic', 'applied', 'advanced'][Math.min(2, Math.floor(idx / 3))];

    // 1. 🎧 Listening Check (index 9 uses bridgeChecks verbatim for exact compatibility)
    let listeningCheck;
    if (idx === 9 && bridgeCheck) {
      listeningCheck = bridgeCheck;
    } else {
      const spoken = speakableVi(vi);
      // Pick two distinct plausible meaning distractors from other rows in the same module
      const otherMeanings = rows
        .filter((_, j) => j !== idx)
        .map((r) => r[2]);
      const d1 = otherMeanings[idx % otherMeanings.length] || '我今天還沒開始練習。';
      const d2 = otherMeanings[(idx + 3) % otherMeanings.length] || '請幫我再確認一次時間。';
      const answerIdx = idx % 3;
      const opts = [d1, d2];
      opts.splice(answerIdx, 0, zh);
      const why = `${rule}${detail.trap ? ` 避坑提醒：${detail.trap}` : ''}`;
      listeningCheck = [spoken, opts, answerIdx, why];
    }

    // 2. 📖 Reading & Structural Decoding Check
    const otherRules = rows
      .filter((_, j) => j !== idx)
      .map((r) => r[3]);
    const rDistractor1 = otherRules[(idx + 1) % otherRules.length] || '只看字面順序逐字照搬中文語序。';
    const rDistractor2 = otherRules[(idx + 4) % otherRules.length] || '省略所有聲調與量詞直接拼湊。';
    const readAnswerIdx = (idx + 1) % 3;
    const readOptions = [rDistractor1, rDistractor2];
    readOptions.splice(readAnswerIdx, 0, rule);

    const chunks = String(vi)
      .split(/\s*(?:\/|·|→|↔|,|\.)\s*/)
      .map((s) => s.trim())
      .filter(Boolean);

    const readingCheck = {
      prompt: `閱讀例句「${vi}」（${zh}），哪一項是本點的核心規則？`,
      options: readOptions,
      answer: readAnswerIdx,
      explain: `語法槽位：${detail.syntax || vi}。${detail.usage || rule}`,
      chunks: chunks.length > 0 ? chunks : [vi]
    };

    // 3. 🗣️ Speaking Task & Guided Production Cues
    const speakingTask = idx === 9 && bridgeRow?.[5]
      ? bridgeRow[5]
      : `先跟讀「${vi}」，接著依公式「${detail.syntax || concept}」換一個詞或對象，不看字幕說出一句新話。`;

    // 4. 🎵 Tone Pitch Contour (音高走向分析)
    const toneContour = analyzeToneContour(idx === 9 && bridgeRow ? bridgeRow[1] : vi);

    return {
      moduleId,
      index: idx,
      tier,
      concept,
      vi,
      spokenVi: idx === 9 && bridgeRow ? bridgeRow[1] : speakableVi(vi),
      zh,
      rule,
      syntax: detail.syntax || vi,
      usage: detail.usage || rule,
      trap: detail.trap || (idx === 9 && bridgeRow ? bridgeRow[4] : guide.trap),
      mnemonic: detail.mnemonic || `先聽懂「${concept}」，再換條件開口說！`,
      listeningCheck,
      readingCheck,
      speakingTask,
      toneContour,
      speakingCues: [
        '聲調高低與詞尾收音清楚',
        `語序符合「${detail.syntax || concept}」結構`,
        '不看中文字幕，自然流暢說出整句'
      ]
    };
  });
}

export const allModuleMasteryItems = Object.fromEntries(
  Object.keys(knowledgeGuides).map((id) => [id, buildModuleMasteryItems(id)])
);

export function getKnowledgePointMasteryItem(moduleId, pointIndex = 9) {
  const list = allModuleMasteryItems[moduleId] || [];
  const safeIdx = Number.isInteger(pointIndex) && pointIndex >= 0 && pointIndex < list.length
    ? pointIndex
    : Math.max(0, list.length - 1);
  return list[safeIdx] || null;
}
