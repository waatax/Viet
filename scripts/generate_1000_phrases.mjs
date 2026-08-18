import fs from 'fs';
import path from 'path';

// Import existing practicalPhrases
import { practicalPhrases } from '../src/data/vietnameseData.js';

console.log('Current practicalPhrases count:', practicalPhrases.length);

const additionalPhrases = [
  // --- 1. 初次見面與自我介紹 (Introductions & Meeting) ---
  { category: "初次見面與稱謂 / Introductions", viet: "Rất hân hạnh được làm quen với bạn.", zh: "非常榮幸能結識你。", en: "Very honored to get to know you.", usageZh: "正式或客氣初見禮貌用語。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Bạn tên là gì?", zh: "你叫什麼名字？", en: "What is your name?", usageZh: "同輩或平輩互相詢問姓名。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tên tôi là...", zh: "我的名字是...", en: "My name is...", usageZh: "自我介紹姓名標準句型。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi đến từ Đài Loan.", zh: "我來自台灣。", en: "I come from Taiwan.", usageZh: "告知故鄉與國籍。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi là người Đài Bắc.", zh: "我是台北人。", en: "I am from Taipei.", usageZh: "說明具體城市。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Bạn sinh năm bao nhiêu?", zh: "你是哪一年出生的？", en: "Which year were you born?", usageZh: "越南人決定稱謂（Anh/Chị/Em）的常用問法。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Năm nay tôi 28 tuổi.", zh: "我今年 28 歲。", en: "I am 28 years old this year.", usageZh: "告知具體年齡。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Bạn làm nghề gì?", zh: "你從事什麼職業？", en: "What do you do for a living?", usageZh: "問職業工作。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi là kỹ sư công nghệ thông tin.", zh: "我是資訊軟體工程師。", en: "I am an IT software engineer.", usageZh: "IT 科技業自介。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi làm trong ngành xuất nhập khẩu.", zh: "我在進出口貿易行業工作。", en: "I work in the import-export industry.", usageZh: "商務貿易自介。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi làm việc tại một công ty Đài Loan.", zh: "我在一家台灣公司工作。", en: "I work at a Taiwanese company.", usageZh: "外企台商職場自介。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Bạn học tiếng Việt được bao lâu rồi?", zh: "你學越南語多久了？", en: "How long have you learned Vietnamese?", usageZh: "詢問語言學習歷程。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tôi tự học tiếng Việt trên ứng dụng này.", zh: "我在這個 App 上自學越南語。", en: "I self-study Vietnamese on this app.", usageZh: "說明自學方式。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Tiếng Việt của bạn phát âm rất chuẩn!", zh: "你的越南語發音非常標準！", en: "Your Vietnamese pronunciation is very standard!", usageZh: "誇獎對方發音好。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Cảm ơn bạn đã khen, tôi vẫn đang cố gắng.", zh: "謝謝你的誇獎，我還在努力中。", en: "Thank you for complimenting, I am still trying.", usageZh: "謙虛道謝回應。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Cho mình xin số Zalo của bạn nhé!", zh: "請給我你的 Zalo 號碼加好友吧！", en: "May I have your Zalo number to connect?", usageZh: "越南社交加好友必備。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Bạn có dùng Facebook hay Instagram không?", zh: "你有用 Facebook 或 IG 嗎？", en: "Do you use Facebook or Instagram?", usageZh: "交換社群帳號。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Quét mã QR Zalo của mình đi!", zh: "掃描我的 Zalo QR Code 吧！", en: "Scan my Zalo QR code!", usageZh: "現場掃碼加好友。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Mình vừa gửi lời mời kết bạn rồi nhé.", zh: "我剛剛發送好友邀請了喔。", en: "I just sent a friend request.", usageZh: "確認已送出邀請。" },
  { category: "初次見面與稱謂 / Introductions", viet: "Rất vui được biết bạn!", zh: "很高興認識你！", en: "Glad to know you!", usageZh: "結束初次對話的熱情致意。" },

  // --- 2. 社交閒聊與生活 (Small Talk & Daily Life) ---
  { category: "社交閒聊與生活 / Small Talk", viet: "Dạo này bạn có khỏe không?", zh: "這陣子你身體好嗎 / 過得好嗎？", en: "How have you been doing lately?", usageZh: "親切關懷問候句。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Dạo này công việc thế nào rồi?", zh: "最近工作如何呀？", en: "How is work going recently?", usageZh: "關心朋友工作狀況。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Mọi việc đều ổn cả, cảm ơn bạn!", zh: "一切都很好，謝謝你！", en: "Everything is good, thank you!", usageZh: "標準正向回應。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Dạo này tôi bận quá, ít có thời gian rảnh.", zh: "最近我太忙了，很少有空閒時間。", en: "I have been so busy lately, little free time.", usageZh: "表達近況忙碌。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Hôm nay trời đẹp quá bạn nhỉ!", zh: "今天天氣真好呢！", en: "The weather is so nice today, isn't it?", usageZh: "萬用開場破冰話題。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Hôm nay trời nóng quá, chắc phải 38 độ!", zh: "今天天氣太熱了，肯定有 38 度！", en: "Today is so hot, must be 38 degrees!", usageZh: "熱帶夏天感嘆。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Trời sắp mưa to rồi, cẩn thận kẻo ướt nhé!", zh: "快下大雨了，小心別淋濕喔！", en: "It is about to pour, be careful not to get wet!", usageZh: "雨季溫馨提醒。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Bạn đã ăn trưa chưa?", zh: "你吃午餐了嗎？", en: "Have you had lunch yet?", usageZh: "越南最親切的日常問候。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Tôi vừa mới ăn xong.", zh: "我剛吃飽。", en: "I just finished eating.", usageZh: "回應用餐狀況。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Trưa nay bạn muốn ăn gì?", zh: "今天中午你想吃什麼？", en: "What do you want to eat for lunch today?", usageZh: "約同事吃午餐。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Đi ăn cơm trưa cùng nhau nhé!", zh: "一起去吃午飯吧！", en: "Let's go have lunch together!", usageZh: "午餐邀約。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Hôm nay tôi mệt quá, muốn về nhà nghỉ ngơi.", zh: "今天我好累，想回家休息。", en: "I am so tired today, want to go home and rest.", usageZh: "表達疲累想休息。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Chúc bạn một ngày làm việc vui vẻ!", zh: "祝你度過愉快順利的工作日！", en: "Have a great and productive workday!", usageZh: "早晨同事祝福語。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Chúc bạn cuối tuần vui vẻ bên gia đình!", zh: "祝你和家人度過愉快的週末！", en: "Have a wonderful weekend with your family!", usageZh: "週五下班祝福語。" },
  { category: "社交閒聊與生活 / Small Talk", viet: "Hẹn gặp lại bạn vào tuần sau nhé!", zh: "下週見囉！", en: "See you next week!", usageZh: "道別約定。" },

  // --- 3. 興趣休閒與娛樂 (Hobbies & Leisure) ---
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Sở thích của bạn là gì?", zh: "你的興趣愛好是什麼？", en: "What are your hobbies?", usageZh: "問興趣常用句。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Tôi rất thích nghe nhạc và đọc sách.", zh: "我非常喜歡聽音樂和看書。", en: "I really like listening to music and reading.", usageZh: "靜態興趣表達。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Bạn có thích xem phim rạp không?", zh: "你喜歡去電影院看電影嗎？", en: "Do you like watching movies at the cinema?", usageZh: "休閒看電影話題。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Bộ phim này đang rất 'hot' ở Việt Nam.", zh: "這部電影最近在越南非常熱門。", en: "This movie is trending hot in Vietnam.", usageZh: "討論熱門影視。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Tối nay đi xem phim không?", zh: "今晚去看電影嗎？", en: "Do you want to watch a movie tonight?", usageZh: "約看電影。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Tôi rất thích đi du lịch và chụp ảnh.", zh: "我非常喜歡旅行和攝影拍照。", en: "I love traveling and taking photos.", usageZh: "旅遊愛好自述。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Bạn đã đi Đà Nẵng hay Phú Quốc chưa?", zh: "你去過峴港或富國島了嗎？", en: "Have you been to Da Nang or Phu Quoc?", usageZh: "熱門景點話題。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Cảnh ở vịnh Hạ Long đẹp tuyệt vời!", zh: "下龍灣的景色真是太美了！", en: "The scenery in Ha Long Bay is stunning!", usageZh: "讚美世界遺產景觀。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Hôm nào rảnh đi hát Karaoke nhé!", zh: "哪天有空一起去唱卡拉OK吧！", en: "Let's go for Karaoke when free!", usageZh: "越南超受歡迎社交活動。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Bạn hát hay quá, như ca sĩ vậy!", zh: "你唱得太好了，像歌手一樣！", en: "You sing so well, just like a singer!", usageZh: "KTV 熱情誇獎。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Cho tôi chọn bài hát tiếp theo nhé.", zh: "讓我點下一首歌喔。", en: "Let me pick the next song.", usageZh: "包廂點歌。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Tôi thích nấu ăn và làm bánh lúc rảnh.", zh: "我空閒時喜歡做飯和烤點心烘焙。", en: "I like cooking and baking in my free time.", usageZh: "烹飪烘焙興趣。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Món ăn này bạn tự nấu à? Khéo tay quá!", zh: "這道菜是你自己做的嗎？真手巧！", en: "Did you cook this dish yourself? So skillful!", usageZh: "稱讚廚藝手巧。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Đi dạo trung tâm thương mại mua sắm không?", zh: "去購物商場逛逛買東西嗎？", en: "Do you want to stroll around the mall for shopping?", usageZh: "逛街邀約。" },
  { category: "興趣休閒與娛樂 / Leisure & Hobbies", viet: "Quán cà phê này view đẹp và yên tĩnh ghê.", zh: "這家咖啡廳視野景色真棒而且很安靜呢。", en: "This cafe has a great view and is so peaceful.", usageZh: "打卡景觀咖啡館。" },

  // --- 4. 運動健身與戶外 (Sports & Fitness) ---
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Bạn có hay chơi thể thao không?", zh: "你平時常做運動嗎？", en: "Do you play sports often?", usageZh: "運動話題開場。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Môn thể thao yêu thích của bạn là gì?", zh: "你最喜歡的體育運動是什麼？", en: "What is your favorite sport?", usageZh: "詢問喜愛項目。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Tôi thường chạy bộ quanh hồ vào buổi sáng.", zh: "我平時早上常在湖邊跑步慢跑。", en: "I usually jog around the lake in the morning.", usageZh: "晨跑日常（如河內還劍湖、西貢龜湖）。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Bạn có muốn đi đánh cầu lông với nhóm mình không?", zh: "你想跟我們這幫朋友去打羽球嗎？", en: "Do you want to play badminton with our group?", usageZh: "約打羽毛球。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Tôi đi tập gym ba buổi một tuần.", zh: "我每週去健身房鍛鍊三次。", en: "I go to the gym 3 sessions a week.", usageZh: "規律重訓健身習慣。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Trận bóng đá tối qua kịch tính quá!", zh: "昨晚那場足球賽太緊張刺激了！", en: "Last night's football match was so thrilling!", usageZh: "熱烈討論足球賽事。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Việt Nam vô địch!", zh: "越南冠軍 / 越南必勝！", en: "Vietnam champion!", usageZh: "越南足球熱血口號。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Chơi đá cầu giúp rèn luyện phản xạ rất tốt.", zh: "踢毽子能非常好地鍛鍊反應能力。", en: "Shuttlecock kicking trains quick reflexes effectively.", usageZh: "踢毽子運動好處。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Tôi thích bơi lội vào mùa hè.", zh: "我夏天喜歡游泳消暑。", en: "I like swimming in summer.", usageZh: "游泳水上運動。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Tập thể dục đều đặn giúp nâng cao sức đề kháng.", zh: "規律運動能增強身體抵抗力免疫力。", en: "Regular exercise boosts immune resistance.", usageZh: "健康運動觀念。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Hôm nay tôi tập cơ ngực và cơ tay.", zh: "今天我在健身房練胸肌和手臂。", en: "Today I am working out chest and arms.", usageZh: "健身部位術語。" },
  { category: "運動健身與戶外 / Sports & Fitness", viet: "Bạn khởi động kỹ trước khi tập nhé!", zh: "你在運動前要好好熱身做伸展喔！", en: "Warm up thoroughly before working out!", usageZh: "防運動傷害提醒。" },

  // --- 5. 旅遊出行與租車導航 (Travel & Tourism) ---
  { category: "旅遊與出行 / Travel & Transit", viet: "Cho tôi hỏi đường đi đến chợ đêm Bến Thành.", zh: "請問去檳城夜市的路怎麼走？", en: "Excuse me, how do I get to Ben Thanh Night Market?", usageZh: "問路標準句。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Đi thẳng qua ngã tư rồi rẽ trái là tới.", zh: "直走穿過十字路口然後左轉就到了。", en: "Go straight past the crossroads then turn left.", usageZh: "指引方向。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Từ đây đến đó đi bộ mất bao lâu?", zh: "從這裡走路到那裡要多久？", en: "How long does it take to walk there from here?", usageZh: "確認步行距離時間。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Mất khoảng mười lăm phút đi bộ.", zh: "走路大概需要 15 分鐘。", en: "It takes about 15 minutes on foot.", usageZh: "回答步行耗時。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Tôi muốn đặt tour tham quan đồng bằng sông Cửu Long.", zh: "我想預約湄公河九龍江平原一日遊行程。", en: "I would like to book a Mekong Delta day tour.", usageZh: "旅行社預約 Tour。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Tour này đã bao gồm ăn trưa và vé tham quan chưa?", zh: "這個行程已經包含午餐和景點門票了嗎？", en: "Does this tour include lunch and entrance tickets?", usageZh: "確認團費包含項目。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Cho tôi thuê một chiếc xe máy trong ba ngày.", zh: "請給我租一輛機車，租三天。", en: "I want to rent a motorbike for three days.", usageZh: "觀光景點租機車。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Cây xăng gần nhất ở đâu ạ?", zh: "請問最近的加油站在哪裡？", en: "Where is the nearest petrol station?", usageZh: "租車找加油站。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Cho tôi đổ đầy bình xăng A95.", zh: "幫我加滿 95 無鉛汽油。", en: "Please fill up the tank with Ron 95 petrol.", usageZh: "加油站加油常用句。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Vé vào cổng bao nhiêu tiền một người?", zh: "門票一個人多少錢？", en: "How much is the entrance ticket per person?", usageZh: "景點購票問價。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Ở đây có cho thuê trang phục truyền thống Áo Dài không?", zh: "這裡有提供傳統越式奧黛 (Áo Dài) 出租拍照嗎？", en: "Do you rent traditional Ao Dai costumes here?", usageZh: "景點租奧黛體驗。" },
  { category: "旅遊與出行 / Travel & Transit", viet: "Phiền bạn chụp giúp tôi một tấm ảnh được không?", zh: "麻煩你幫我拍一張照片好嗎？", en: "Could you please help me take a photo?", usageZh: "請路人拍照禮貌用語。" },

  // --- 6. 餐飲美食與特殊忌口 (Food & Customization) ---
  { category: "餐飲與美食 / Dining & Food", viet: "Cho tôi một tô phở tái nạm gầu giòn.", zh: "給我一碗半熟牛肉加牛腩與脆肥牛河粉。", en: "Give me a bowl of beef pho with flank and crunchy fat.", usageZh: "老饕專業點河粉部位。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Cho tôi thêm một đĩa quẩy giòn nhé.", zh: "請幫我多加一盤酥脆油條。", en: "Please give me an extra plate of fried crullers (quẩy).", usageZh: "河內吃河粉必配油條。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Tôi không ăn được hành lá và ngò gai.", zh: "我不吃蔥花和刺芫荽香菜。", en: "I cannot eat scallions and culantro herbs.", usageZh: "忌口不加香菜/蔥花。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Đừng bỏ ớt cay nhé, tôi không ăn cay được.", zh: "請不要放辣椒喔，我吃不了辣。", en: "No chili please, I cannot eat spicy food.", usageZh: "不辣需求。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Ở đây có món chay không ạ?", zh: "請問這裡有素食餐點嗎？", en: "Do you have vegetarian dishes here?", usageZh: "詢問全素/蛋奶素。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Cho tôi xin thêm chén nước mắm ớt và quả chanh.", zh: "請給我多一小碗辣椒魚露和一顆新鮮檸檬。", en: "Please give me an extra bowl of chili fish sauce and a lime.", usageZh: "要越式沾醬調料。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Bánh mì này giòn rụm và thơm nức mũi!", zh: "這個法國麵包好酥脆，香氣撲鼻！", en: "This banh mi is super crispy and smells amazing!", usageZh: "讚賞麵包口感。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Cho tôi xin khăn lạnh và ly trà đá.", zh: "請給我濕紙巾和一杯冰茶。", en: "Please give me a wet wipe and an iced tea.", usageZh: "入座常要品項。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Bàn số 3 tính tiền em ơi!", zh: "3 號桌結帳喔服務生！", en: "Table 3 bill please!", usageZh: "餐廳叫結帳。" },
  { category: "餐飲與美食 / Dining & Food", viet: "Có thanh toán bằng thẻ tín dụng hay chuyển khoản được không?", zh: "可以刷信用卡或銀行轉帳 QR Code 嗎？", en: "Can I pay by credit card or bank transfer QR?", usageZh: "現代數位支付詢問。" },

  // --- 7. 工作職場與辦公室協作 (Workplace & Business) ---
  { category: "商務與職場 / Workplace", viet: "Sáng mai chúng ta có cuộc họp lúc 9 giờ.", zh: "明天早上 9 點我們有個會議。", en: "We have a meeting tomorrow morning at 9 AM.", usageZh: "通知開會時間。" },
  { category: "商務與職場 / Workplace", viet: "Tôi xin phép đến muộn mười lăm phút vì kẹt xe.", zh: "因為塞車，我向主管報備請假晚到 15 分鐘。", en: "I ask for permission to be 15 minutes late due to traffic.", usageZh: "塞車遲到報備。" },
  { category: "商務與職場 / Workplace", viet: "Tôi bị ốm nên xin phép nghỉ một ngày hôm nay.", zh: "我生病了，所以今天向公司請假一天。", en: "I am sick so I ask for leave for today.", usageZh: "請病假。" },
  { category: "商務與職場 / Workplace", viet: "Hôm nay tôi cần gửi báo cáo doanh thu cho sếp.", zh: "今天我需要向老闆發送營收業績報告。", en: "Today I need to send the revenue report to the boss.", usageZh: "提交報表。" },
  { category: "商務與職場 / Workplace", viet: "Hạn chót nộp dự án này là thứ Sáu tuần này.", zh: "這個專案項目的最後交期截止日是本週五。", en: "The deadline for this project is this Friday.", usageZh: "強調 Deadline。" },
  { category: "商務與職場 / Workplace", viet: "Chúng ta cần đẩy nhanh tiến độ sản xuất trong xưởng.", zh: "我們需要加快車間的工廠生產進度。", en: "We need to speed up production progress in the factory.", usageZh: "廠區督導進度。" },
  { category: "商務與職場 / Workplace", viet: "Vui lòng kiểm tra kỹ chất lượng trước khi đóng gói.", zh: "在打包出貨前請務必仔細檢驗品管品質。", en: "Please inspect quality thoroughly before packaging.", usageZh: "品管要求。" },
  { category: "商務與職場 / Workplace", viet: "Rất vui được hợp tác với quý công ty.", zh: "非常高興能與貴公司攜手合作。", en: "Very pleased to cooperate with your esteemed company.", usageZh: "簽約合作祝詞。" },
  { category: "商務與職場 / Workplace", viet: "Chúng tôi sẽ gửi lại hợp đồng đã ký qua bưu điện.", zh: "我們會將簽署好的正式合約透過快遞寄回。", en: "We will send back the signed contract via post.", usageZh: "合約寄送流程。" },
  { category: "商務與職場 / Workplace", viet: "Cảm ơn sự hỗ trợ nhiệt tình của toàn thể đội ngũ.", zh: "感謝全體團隊同仁的熱情大力支援。", en: "Thank you for the enthusiastic support of the whole team.", usageZh: "專案結案致謝。" },

  // --- 8. 醫療健康與藥局就醫 (Health & Medicine) ---
  { category: "醫療與健康 / Healthcare", viet: "Tôi bị đau đầu và sốt cao từ đêm qua.", zh: "我從昨晚開始頭痛並發高燒。", en: "I have had a headache and high fever since last night.", usageZh: "就醫描述發燒頭痛。" },
  { category: "醫療與健康 / Healthcare", viet: "Bán cho tôi một vỉ thuốc hạ sốt Paracetamol.", zh: "請賣給我一排普拿疼 (Paracetamol) 退燒藥。", en: "Sell me a blister pack of Paracetamol fever reducers.", usageZh: "藥局指名買退燒藥。" },
  { category: "醫療與健康 / Healthcare", viet: "Tôi bị đau bụng và đi ngoài nhiều lần.", zh: "我肚子痛而且拉肚子拉了好幾次。", en: "I have stomach pain and diarrhea multiple times.", usageZh: "描述水土不服腹瀉。" },
  { category: "醫療與健康 / Healthcare", viet: "Thuốc này uống trước ăn hay sau ăn?", zh: "這款藥是飯前吃還是飯後吃？", en: "Should I take this medicine before or after meals?", usageZh: "確認服藥時機。" },
  { category: "醫療與健康 / Healthcare", viet: "Mỗi ngày uống hai lần, mỗi lần một viên sau khi ăn.", zh: "每天吃兩次，每次飯後吃一顆。", en: "Take twice a day, one pill each time after meals.", usageZh: "藥師標準用法指示。" },
  { category: "醫療與健康 / Healthcare", viet: "Tôi bị dị ứng với thuốc kháng sinh Penicillin.", zh: "我對抗生素盤尼西林過敏。", en: "I am allergic to Penicillin antibiotics.", usageZh: "重大過敏史主動告知。" },
  { category: "醫療與健康 / Healthcare", viet: "Tôi muốn đo huyết áp và thử đường huyết.", zh: "我想量血壓和測血糖。", en: "I want to measure blood pressure and test blood sugar.", usageZh: "診所基本檢查。" },
  { category: "醫療與健康 / Healthcare", viet: "Bạn nên uống nhiều nước ấm và nghỉ ngơi đầy đủ.", zh: "你應該多喝溫水並充分臥床休息。", en: "You should drink plenty of warm water and get enough rest.", usageZh: "醫生衛教叮嚀。" },
  { category: "醫療與健康 / Healthcare", viet: "Tôi muốn mua dầu gió xanh Con Én.", zh: "我想買老鷹牌/雙燕牌綠油精（越南萬靈油）。", en: "I want to buy green medicated oil (Dầu gió).", usageZh: "買越南著名伴手綠油精。" },
  { category: "醫療與健康 / Healthcare", viet: "Vết thương này có cần phải khâu không bác sĩ?", zh: "醫生，這個傷口需要縫合嗎？", en: "Doctor, does this wound need stitches?", usageZh: "外傷就診詢問。" },

  // --- 9. 購物殺價與市集 (Shopping & Bargaining) ---
  { category: "購物與殺價 / Shopping", viet: "Cái này giá bao nhiêu tiền vậy chị?", zh: "姐，這個多少錢呢？", en: "How much is this, sister?", usageZh: "問價最實用句型。" },
  { category: "購物與殺價 / Shopping", viet: "Đắt quá, bớt cho em một chút đi!", zh: "太貴了，給我便宜一點點嘛！", en: "Too expensive, please give me a small discount!", usageZh: "夜市市場殺價金句。" },
  { category: "購物與殺價 / Shopping", viet: "Nếu em mua hai cái thì giá bao nhiêu?", zh: "如果我買兩個的話，算多少錢？", en: "If I buy two pieces, what is the price?", usageZh: "多件殺價策略。" },
  { category: "購物與殺價 / Shopping", viet: "Bán cho em một trăm nghìn được không?", zh: "算我十萬盾 (100,000 VND) 可以嗎？", en: "Can you sell it to me for 100,000 VND?", usageZh: "直接開出心理底價。" },
  { category: "購物與殺價 / Shopping", viet: "Cái áo này có size L hay XL không?", zh: "這件衣服有 L 號或 XL 號嗎？", en: "Does this shirt come in size L or XL?", usageZh: "買衣服挑尺碼。" },
  { category: "購物與殺價 / Shopping", viet: "Tôi có thể mặc thử cái này được không?", zh: "我可以試穿一下這個嗎？", en: "Can I try this on?", usageZh: "服飾店試穿。" },
  { category: "購物與殺價 / Shopping", viet: "Phòng thay đồ ở đằng kia ạ.", zh: "試衣間在那個方向喔。", en: "The fitting room is over there.", usageZh: "店員指示試衣間。" },
  { category: "購物與殺價 / Shopping", viet: "Cái này có màu khác không?", zh: "這個有其他顏色嗎？", en: "Does this come in other colors?", usageZh: "詢問顏色款式。" },
  { category: "購物與殺價 / Shopping", viet: "Tôi lấy cái màu đen này nhé.", zh: "我買這個黑色的。", en: "I will take this black one.", usageZh: "決定購買挑定款。" },
  { category: "購物與殺價 / Shopping", viet: "Gói ghém cẩn thận giúp tôi để mang lên máy bay nhé.", zh: "請幫我仔細包裝好，方便我帶上飛機。", en: "Please wrap it carefully so I can take it on the plane.", usageZh: "伴手禮防碎打包。" }
];

// Merge unique phrases
const existingViSet = new Set(practicalPhrases.map(p => p.viet.trim().toLowerCase()));
const combined = [...practicalPhrases];

let addedCount = 0;
additionalPhrases.forEach(p => {
  const norm = p.viet.trim().toLowerCase();
  if (!existingViSet.has(norm)) {
    combined.push(p);
    existingViSet.add(norm);
    addedCount++;
  }
});

console.log('Added new phrases:', addedCount);
console.log('New total practicalPhrases count:', combined.length);

// Read current vietnameseData.js
const vietnameseDataPath = path.resolve('src/data/vietnameseData.js');
let fileContent = fs.readFileSync(vietnameseDataPath, 'utf8');

// Replace practicalPhrases array in vietnameseData.js
const regex = /export const practicalPhrases = \[[\s\S]*?\n\];/;
const replacement = 'export const practicalPhrases = ' + JSON.stringify(combined, null, 2) + ';';

if (regex.test(fileContent)) {
  fileContent = fileContent.replace(regex, replacement);
  fs.writeFileSync(vietnameseDataPath, fileContent, 'utf8');
  console.log('✅ Successfully updated practicalPhrases in vietnameseData.js with ' + combined.length + ' phrases!');
} else {
  console.error('❌ Could not find practicalPhrases array in vietnameseData.js');
}
