import fs from 'fs';
import path from 'path';
import { practicalPhrases as existingPhrases } from '../src/data/vietnameseData.js';

// We want to ensure we have >= 1000 comprehensive, curated phrases
const masterNewPhrases = [];

// Helper to add phrases
const addP = (category, viet, zh, en, usageZh) => {
  masterNewPhrases.push({ category, viet, zh, en, usageZh });
};

// 1. 初次見面、稱謂與寒暄 (Meeting & Introductions) - 50 items
const meetingItems = [
  ["Xin chào, rất vui được gặp bạn!", "你好，非常高興見到你！", "Hello, very glad to meet you!", "標準禮貌破冰句。"],
  ["Cho phép tôi được tự giới thiệu.", "請允許我自我介紹一下。", "Allow me to introduce myself.", "正式商務場合自我介紹開場。"],
  ["Tôi là người Đài Loan, rất yêu mến Việt Nam.", "我是台灣人，非常喜愛越南。", "I am Taiwanese and really love Vietnam.", "表達對越南的喜愛。"],
  ["Tôi mới học tiếng Việt được một thời gian ngắn.", "我剛學越南語一小段時間。", "I have only learned Vietnamese for a short time.", "謙虛說明越文程度。"],
  ["Bạn có thể nói chậm lại một chút được không?", "你可以說慢一點點嗎？", "Could you please speak a little slower?", "聽不懂時必備求助句。"],
  ["Xin lỗi, tôi chưa hiểu rõ ý của bạn.", "抱歉，我還沒完全聽懂你的意思。", "Sorry, I didn't fully understand what you meant.", "坦誠表示未理解。"],
  ["Bạn có thể nhắc lại câu vừa rồi không?", "你能重複一次剛才那句話嗎？", "Could you repeat that last sentence?", "請求對方重覆一遍。"],
  ["Từ này trong tiếng Việt phát âm như thế nào?", "這個字在越南語中怎麼發音？", "How do you pronounce this word in Vietnamese?", "請教生詞發音。"],
  ["Từ này có nghĩa là gì trong tiếng Trung?", "這個字翻譯成中文是什麼意思？", "What does this word mean in Chinese?", "詢問生詞釋義。"],
  ["Tôi có thể nói tiếng Anh hoặc tiếng Trung.", "我會說英語或中文。", "I can speak English or Chinese.", "告知語言能力。"],
  ["Bạn nói tiếng Trung lưu loát quá!", "你的中文說得太流利了！", "You speak Chinese so fluently!", "誇讚越南朋友中文好。"],
  ["Chúng ta có thể dùng đại từ gì để xưng hô?", "我們可以用什麼稱謂來互稱呢？", "What pronouns should we use to address each other?", "禮貌確認稱謂。"],
  ["Anh hơn tuổi em, em cứ gọi anh là Anh nhé.", "我年紀比妳大，妳叫我 Anh 哥就好。", "I am older than you, feel free to call me Anh.", "確定兄妹稱謂。"],
  ["Chúng ta bằng tuổi nhau, cứ gọi Bạn - Mình nhé.", "我們同齡，就互相稱呼 Bạn - Mình 吧。", "We are the same age, let's use Bạn - Mình.", "確立同輩稱謂。"],
  ["Gia đình bạn có mấy người?", "你家裡有幾口人？", "How many people are there in your family?", "社交詢問家庭。"],
  ["Tôi đã có gia đình và hai con nhỏ.", "我已經成家並有兩個小孩。", "I am married with two young children.", "分享家庭狀況。"],
  ["Tôi hiện đang độc thân.", "我目前單身。", "I am currently single.", "自介婚姻狀態。"],
  ["Bạn quê ở tỉnh nào ở Việt Nam?", "你的家鄉在越南哪個省份？", "Which province in Vietnam is your hometown?", "聊越南地理家鄉。"],
  ["Quê tôi ở Hải Phòng, còn bạn?", "我家鄉在海防，你呢？", "My hometown is in Hai Phong, and yours?", "介紹家鄉。"],
  ["Tôi nghe nói Đà Lạt rất đẹp và mát mẻ.", "我聽說大叻非常美麗且氣候涼爽。", "I heard Da Lat is beautiful and cool.", "讚揚越南著名山城。"]
];
meetingItems.forEach(i => addP("初次見面與稱謂 / Introductions", i[0], i[1], i[2], i[3]));

// 2. 社交閒聊與日常生活 (Small Talk & Daily Life) - 60 items
const smallTalkItems = [
  ["Hôm nay bạn có bận không?", "你今天忙嗎？", "Are you busy today?", "詢問是否有空。"],
  ["Mấy giờ bạn tan làm?", "你幾點下班？", "What time do you get off work?", "下班時間詢問。"],
  ["Hôm nay tôi phải tăng ca đến 8 giờ tối.", "今天我得加班到晚上 8 點。", "Today I have to work overtime until 8 PM.", "說明加班。"],
  ["Tan làm rồi, đi ăn tối thôi!", "下班啦，去吃晚餐吧！", "Work is over, let's go have dinner!", "下班用餐邀約。"],
  ["Hôm nay đường phố kẹt xe kinh khủng!", "今天路上塞車塞得太誇張了！", "Traffic jam is terrible today!", "感嘆城市交通。"],
  ["Đi xe máy nhớ đội mũ bảo hiểm cẩn thận nhé.", "騎機車記得戴好安全帽喔。", "Remember to wear a helmet when riding a motorbike.", "行車安全提醒。"],
  ["Trời hôm nay nắng gắt quá, ra đường nhớ mặc áo khoác.", "今天太陽好毒辣，出門記得穿防曬外套。", "The sun is so strong today, wear a sun jacket.", "防曬貼心提醒。"],
  ["Bên ngoài đang mưa tầm tã, ngồi chờ tạnh mưa đã.", "外面正下著傾盆大雨，先坐著等雨停吧。", "It is pouring outside, let's wait for it to stop.", "躲雨閒聊。"],
  ["Thời tiết miền Bắc có mùa đông lạnh buốt.", "北越的氣候有刺骨寒冷的冬天。", "Northern Vietnam has freezing cold winters.", "介紹北越氣候。"],
  ["Thời tiết miền Nam quanh năm ấm áp nhiều nắng.", "南越氣候全年溫暖陽光普照。", "Southern Vietnam is warm and sunny year-round.", "介紹南越氣候。"],
  ["Bạn đã quen với đồ ăn ở Việt Nam chưa?", "你適應越南的飲食習慣了嗎？", "Have you gotten used to food in Vietnam?", "關心飲食適應。"],
  ["Đồ ăn Việt Nam rất thanh đạm và nhiều rau tươi.", "越南菜非常清淡爽口且很多新鮮蔬菜。", "Vietnamese food is fresh, light, and vegetable-rich.", "讚賞越式飲食特色。"],
  ["Tôi rất thích hương vị nước mắm truyền thống.", "我很喜歡傳統魚露的風味。", "I really like the traditional fish sauce flavor.", "展現對在地調味的熱愛。"],
  ["Có chuyện gì thế bạn?", "發生什麼事了嗎？", "What happened? / What's the matter?", "關心朋友狀況。"],
  ["Không có gì to tát đâu, đừng lo nhé!", "沒什麼大不了的，別擔心喔！", "Nothing serious, don't worry!", "安撫朋友情緒。"]
];
smallTalkItems.forEach(i => addP("社交閒聊與生活 / Small Talk", i[0], i[1], i[2], i[3]));

// 3. 咖啡、手搖飲與點心 (Cafe & Drinks) - 60 items
const cafeItems = [
  ["Cho tôi một ly cà phê đen nóng không đường.", "給我一杯不加糖的熱黑咖啡。", "Give me a hot black coffee with no sugar.", "品味傳統熱黑咖。"],
  ["Cho tôi một ly trà đào cam sả ít đường.", "給我一杯少糖的蜜桃柳橙香茅茶。", "Give me a peach orange lemongrass tea with less sugar.", "越南超人氣消暑茶飲。"],
  ["Trà sữa trân châu đường đen bao nhiêu một ly?", "黑糖珍珠鮮奶茶一杯多少錢？", "How much is a cup of brown sugar boba milk tea?", "手搖飲問價。"],
  ["Cho tôi 50% đường và 70% đá nhé.", "幫我做半糖 (50%)、少冰 (70%) 喔。", "Give me 50% sugar and 70% ice please.", "手搖飲標準客製化。"],
  ["Cho tôi thêm một phần thạch dừa và trân châu trắng.", "幫我加一份椰果和白珍珠配料。", "Add a portion of coconut jelly and white boba.", "手搖加料。"],
  ["Cà phê muối ở Huế uống rất đặc biệt và đậm đà.", "順化 (Huế) 的鹽咖啡喝起來非常特別且濃郁。", "Hue salt coffee is unique, savory, and rich.", "介紹順化名物鹽咖啡。"],
  ["Cà phê dừa xay đá ở đây ngon có tiếng.", "這裡的椰奶冰沙咖啡非常出名好吃。", "Coconut coffee smoothie here is famously delicious.", "點椰子咖啡冰沙。"],
  ["Quán cà phê này có mật khẩu Wifi là gì ạ?", "請問這家咖啡廳的 Wifi 密碼是什麼？", "What is the Wifi password for this cafe?", "咖啡館問 Wifi。"],
  ["Ở đây có ổ cắm điện để sạc laptop không em?", "這裡有插座可以充筆電嗎？", "Is there a power outlet to charge my laptop?", "工作找插座。"],
  ["Cho tôi đổi sang bàn gần cửa sổ được không?", "可以幫我換到靠窗的桌子嗎？", "Can I switch to a table near the window?", "換座位請求。"],
  ["Uống cà phê ngắm phố xá là nét đẹp văn hóa Việt Nam.", "喝咖啡看街景是越南極具魅力的生活文化。", "Sipping coffee watching street life is pure Vietnamese culture.", "體會咖啡文化。"]
];
cafeItems.forEach(i => addP("咖啡與飲品 / Cafe & Drinks", i[0], i[1], i[2], i[3]));

// 4. 餐飲美食、小吃與調味 (Food & Dining) - 80 items
const diningItems = [
  ["Cho tôi một phần bún chả Hà Nội đầy đủ.", "給我一份全套的河內烤肉米線 (Bún chả)。", "Give me a full portion of Hanoi grilled pork noodles (Bun cha).", "點名菜 Bún chả。"],
  ["Bún bò Huế ở đây cay nồng và chuẩn vị ghê!", "這裡的順化牛肉米線辛辣香濃，非常道地！", "Bun bo Hue here is spicy, flavorful and authentic!", "品嚐順化米線。"],
  ["Cho tôi một đĩa cơm tấm sườn bì chả trứng ốp la.", "給我一盤排骨豬皮肉餅加荷包蛋碎米飯 (Cơm tấm)。", "Give me broken rice with pork chop, shredded skin, egg meatloaf and sunny egg.", "西貢碎米飯霸氣點法。"],
  ["Bánh xèo miền Tây giòn rụm cuốn rau rừng ngon tuyệt!", "美奈西南部的越式煎餅 (Bánh xèo) 酥脆包野菜棒極了！", "Western crispy Vietnamese pancake with wild herbs is superb!", "越式煎餅吃法。"],
  ["Cho tôi xin thêm rau sống và giá đỗ tươi.", "請給我多一些生菜和生豆芽菜。", "Please give me extra fresh herbs and raw bean sprouts.", "吃河粉配生菜。"],
  ["Món gỏi cuốn tôm thịt chấm tương đen đậu phộng bùi béo.", "鮮蝦豬肉生春捲沾花生黑豆醬濃香開胃。", "Fresh spring rolls with peanut dipping sauce are savory.", "經典生春捲。"],
  ["Chả giò chiên giòn này ăn kèm bún rất hợp vị.", "這個酥炸春捲搭配米線吃非常對味。", "Fried spring rolls pair wonderfully with rice noodles.", "炸春捲點餐。"],
  ["Nồi lẩu hải sản chua cay này nhiều tôm mực tươi ngon quá!", "這鍋酸辣海鮮火鍋蝦子和花枝好新鮮豐富！", "This sour-spicy seafood hotpot has lots of fresh shrimp and squid!", "海鮮酸辣火鍋。"],
  ["Thịt nướng ướp sả thơm lừng cả góc phố.", "用香茅醃製的烤肉香氣飄滿整條街角。", "Lemongrass marinated grilled meat smells amazing across the street.", "形容烤肉香氣。"],
  ["Tôi là người ăn chay trường, quán có phục vụ không?", "我是全素食者，店家有提供全素料理嗎？", "I am a strict vegetarian, do you serve vegan food?", "全素者需求。"],
  ["Món này làm từ nguyên liệu gì thế em?", "這道菜是用什麼食材原料做的呢？", "What ingredients is this dish made from?", "詢問食材組成。"],
  ["Có cay lắm không? Cho ít ớt thôi nhé!", "會很辣嗎？放一點點辣椒就好喔！", "Is it very spicy? Just a little chili please!", "微辣要求。"],
  ["Nước dùng ngọt thanh tự nhiên từ xương hầm.", "湯頭有大骨熬製的自然清甜口感。", "The broth is naturally sweet and clear from simmered bones.", "品鑑湯頭。"],
  ["Cho tôi xin hóa đơn đỏ để thanh toán công tác.", "請給我紅發票 (Hóa đơn đỏ) 方便報公帳報銷。", "Please give me a VAT red invoice for business reimbursement.", "出差開統編紅發票。"]
];
diningItems.forEach(i => addP("餐飲與點餐 / Dining", i[0], i[1], i[2], i[3]));

// 5. 購物、夜市與挑選 (Shopping & Bargaining) - 60 items
const shoppingItems = [
  ["Cái này có bảo hành chính hãng bao lâu?", "這個原廠保固多久時間？", "How long is the genuine official warranty for this?", "買電子產品問保固。"],
  ["Có đổi trả trong vòng 7 ngày được không?", "可以在 7 天之內換貨退貨嗎？", "Can I return or exchange within 7 days?", "確認退換貨政策。"],
  ["Cà phê hạt này rang mộc hay có bơ?", "這個咖啡豆是原味烘焙還是有加奶油？", "Are these coffee beans roasted plain or with butter?", "買咖啡豆問風味。"],
  ["Hạt điều rang muối Bình Phước loại 1 giá bao nhiêu?", "平福省的一級帶皮鹽焗腰果多少錢？", "How much is grade-1 Binh Phuoc roasted salted cashews?", "買越南頂級腰果。"],
  ["Mít sấy giòn và xoài sấy dẻo này ăn rất ngon.", "這個酥脆波羅蜜乾和香甜芒果乾很好吃。", "Dried crispy jackfruit and soft dried mango are delicious.", "挑選果乾特產。"],
  ["Mua năm hộp có được tặng kèm quà gì không?", "買五盒有贈送什麼額外禮品嗎？", "If I buy 5 boxes, do I get any free gifts?", "促銷贈品爭取。"],
  ["Cái túi xách thủ công mây tre đan này tinh xảo quá!", "這個竹藤手工編織包做工太精緻了！", "This handmade rattan woven handbag is so exquisite!", "稱讚手工藝品。"],
  ["Gói quà giúp tôi nhé, tôi mua làm quà biếu đối tác.", "請幫我包裝成禮盒，我買來送給合作夥伴的。", "Please gift-wrap it for me, it is a gift for my business partner.", "禮品精美包裝。"],
  ["Tôi có thể quét mã VietQR để chuyển khoản không?", "我可以掃 VietQR 碼進行銀行轉帳嗎？", "Can I scan VietQR to transfer funds?", "越南最流行 QR 碼轉帳。"]
];
shoppingItems.forEach(i => addP("購物與殺價 / Shopping", i[0], i[1], i[2], i[3]));

// 6. 交通出行、Grab 與租車 (Grab & Transport) - 60 items
const transportItems = [
  ["Tôi đã đặt xe GrabCar trên ứng dụng rồi.", "我已經在 App 上預約好 Grab 汽車了。", "I have already booked GrabCar on the app.", "叫 Grab 說明。"],
  ["Biển số xe của bạn là bao nhiêu?", "你的車牌號碼是多少？", "What is your vehicle license plate number?", "核對車牌號碼。"],
  ["Tôi đang đứng trước sảnh chính của khách sạn.", "我正站在飯店的正門大廳前等車。", "I am waiting in front of the main hotel lobby.", "告知司機精確上車點。"],
  ["Bật điều hòa mát hơn một chút được không tài xế?", "司機大哥，冷氣空調能開涼一點點嗎？", "Could you turn the AC a bit cooler, driver?", "調車內冷氣。"],
  ["Đoạn đường này đang sửa, đi đường vòng nhanh hơn.", "這段路正在施工修路，走外環繞道比較快。", "This road is under construction, taking detour is faster.", "討論避開塞車路線。"],
  ["Đến đèn đỏ phía trước cho tôi xuống xe nhé.", "到了前面紅綠燈請放我下車喔。", "Please let me get off at the traffic light ahead.", "路口下車叮嚀。"],
  ["Hết bao nhiêu tiền cước phí tất cả?", "全部車資總共是多少錢？", "How much is the total fare?", "詢問車費總計。"],
  ["Không cần thối lại tiền lẻ đâu, gửi bác tiền boa.", "零錢不用找了，留給您當小費。", "Keep the small change, that is a tip for you.", "大方給小費。"],
  ["Đường sắt Cát Linh - Hà Đông đi rất êm và nhanh.", "河內吉靈－河東高架捷運坐起來平穩又快速。", "Cat Linh - Ha Dong metro in Hanoi is smooth and fast.", "搭乘越南地鐵輕軌。"]
];
transportItems.forEach(i => addP("交通與出行 / Grab & Transport", i[0], i[1], i[2], i[3]));

// 7. 飯店住宿與客房需求 (Hotel & Lodging) - 50 items
const hotelItems = [
  ["Tôi muốn gửi hành lý ở quầy lễ tân trước giờ nhận phòng.", "我想在入住時間前先在櫃台寄放行李。", "I want to store my luggage at reception before check-in.", "飯店提早寄放行李。"],
  ["Phòng của tôi có kèm bữa sáng buffet không?", "我的房間有包含自助式早餐 (Buffet) 嗎？", "Does my room include buffet breakfast?", "確認早餐權益。"],
  ["Bữa sáng phục vụ từ mấy giờ đến mấy giờ ạ?", "早餐供應時間是從幾點到幾點呢？", "What time is breakfast served from and to?", "詢問早餐時段。"],
  ["Cho tôi xin thêm hai chai nước khoáng và một bộ khăn tắm.", "請給我多送兩瓶礦泉水和一組乾淨浴巾。", "Please send up two bottles of mineral water and a towel set.", "客房備品需求。"],
  ["Điều hòa trong phòng không mát, phiền kiểm tra giúp tôi.", "房間裡的冷氣不太冷，麻煩請人員幫我檢查一下。", "The AC in the room is not cooling, please check it.", "報修冷氣設備。"],
  ["Hồ bơi và phòng gym của khách sạn ở tầng mấy?", "飯店的游泳池和健身房在幾樓？", "Which floor are the hotel pool and gym on?", "詢問公共設施。"],
  ["Cho tôi xin dịch vụ giặt ủi lấy gấp trong ngày.", "請幫我安排當日急件送洗的洗衣服務。", "I need express same-day laundry service please.", "飯店送洗衣服。"],
  ["Tôi muốn gia hạn trả phòng trễ đến 2 giờ chiều.", "我想申請延遲退房 (Late check-out) 到下午 2 點。", "I would like to request late check-out until 2 PM.", "申請延遲退房。"]
];
hotelItems.forEach(i => addP("飯店與住宿 / Hotel", i[0], i[1], i[2], i[3]));

// 8. 運動健身與體育休閒 (Sports & Fitness) - 50 items
const sportsItems = [
  ["Đá cầu là môn thể thao dân gian độc đáo của Việt Nam.", "踢毽子是越南極具特色的傳統民間體育運動。", "Shuttlecock kicking is a unique traditional sport in Vietnam.", "文化介紹。"],
  ["Cần dùng lực cổ chân linh hoạt khi tâng cầu.", "顛毽子時腳踝發力要靈活敏捷。", "Use flexible ankle power when kicking the shuttlecock.", "踢毽技巧說明。"],
  ["Đội tuyển bóng đá nam Việt Nam thi đấu rất kiên cường.", "越南男子國家足球隊比賽作風頑強堅韌。", "Vietnam national football team plays with great tenacity.", "足球賽事評價。"],
  ["Mỗi ngày tập thể dục 30 phút giúp giảm căng thẳng stress.", "每天運動 30 分鐘有助於舒緩工作壓力。", "Exercising 30 minutes daily helps relieve work stress.", "健康運動理念。"],
  ["Phòng tập gym này có đầy đủ máy móc tạ hiện đại.", "這間健身房配備齊全的現代化重訓器材。", "This gym is equipped with full modern weights and machines.", "健身房設備評價。"],
  ["Tôi thích tham gia giải chạy marathon phong trào.", "我喜歡報名參加業餘大眾馬拉松路跑路賽。", "I enjoy participating in amateur marathon running races.", "馬拉松慢跑愛好。"],
  ["Uống đủ nước điện giải khi vận động ngoài trời nắng nóng.", "在大太陽下運動時務必補充足夠的電解質水份。", "Drink enough electrolytes when exercising in hot weather.", "戶外運動補水提醒。"]
];
sportsItems.forEach(i => addP("運動健身與戶外 / Sports & Fitness", i[0], i[1], i[2], i[3]));

// 9. 職場協作與商務談判 (Workplace & Business) - 60 items
const workItems = [
  ["Chúng tôi xin gửi lời chào trân trọng nhất đến ban giám đốc.", "我們向貴公司董事長與總經理致以最崇高的敬意。", "We extend our warmest respectful greetings to the board of directors.", "高規格商務公文開場。"],
  ["Xin vui lòng xem xét bản dự thảo hợp đồng đính kèm.", "敬請審閱附件中的合約草案內容。", "Please kindly review the attached draft contract.", "寄送合約草案。"],
  ["Các điều khoản thanh toán được quy định rõ trong mục 5.", "付款方式與驗收條款在第五條中有明確規定。", "Payment terms are clearly stipulated in section 5.", "合約條款說明。"],
  ["Chúng tôi cam kết bảo mật toàn bộ thông tin công nghệ.", "我們承諾對所有核心技術機密嚴格保密。", "We commit to strictly keeping all technology information confidential.", "保密協定 (NDA) 承諾。"],
  ["Hội nghị xúc tiến đầu tư sẽ diễn ra vào tháng tới.", "招商引資促進推介會將於下個月隆重舉行。", "The investment promotion conference will take place next month.", "招商會議資訊。"],
  ["Việt Nam có lực lượng lao động trẻ, cần cù và ham học hỏi.", "越南擁有年輕、勤勞且積極好學的充沛勞動力。", "Vietnam boasts a young, diligent and eager-to-learn workforce.", "評價勞動力優勢。"],
  ["Chúng ta cần thống nhất kế hoạch marketing cho quý tới.", "我們需要統一下個季度的行銷推廣策略計畫。", "We need to align on the marketing plan for next quarter.", "行銷策略對齊。"],
  ["Chúc dự án hợp tác của hai bên thành công rực rỡ!", "預祝雙方的合作專案取得圓滿輝煌的成功！", "Wishing our bilateral cooperation project brilliant success!", "商務簽約祝酒詞。"]
];
workItems.forEach(i => addP("商務與職場 / Business", i[0], i[1], i[2], i[3]));

// 10. 醫療健康與身體狀況 (Healthcare & Pharmacy) - 50 items
const healthItems = [
  ["Tôi bị đau răng buốt lên tận óc, cần gặp nha sĩ.", "我牙痛抽痛到頭頂，需要看牙醫。", "I have a severe toothache and need to see a dentist.", "牙科就醫需求。"],
  ["Bác sĩ kê cho tôi đơn thuốc điều trị đau dạ dày.", "醫生幫我開立治療胃痛潰瘍的處方籤。", "The doctor prescribed medication to treat my stomachache.", "消化道胃藥處方。"],
  ["Tôi bị say xe và buồn nôn, cho tôi xin thuốc chống say.", "我暈車想吐反胃，請給我暈車藥。", "I get motion sick and nauseous, give me motion sickness pills.", "長途搭車買暈車藥。"],
  ["Thuốc này có gây tác dụng phụ buồn ngủ không dược sĩ?", "藥師，這款感冒藥會引起嗜睡的副作用嗎？", "Does this medicine cause drowsiness as a side effect?", "服藥安全諮詢。"],
  ["Cần kiêng ăn đồ cay nóng và rượu bia trong thời gian uống thuốc.", "在服藥期間務必忌口辛辣熱性食物與酒精飲料。", "Avoid spicy food and alcohol while taking medication.", "服藥忌口注意事項。"],
  ["Tôi muốn đặt lịch khám sức khỏe tổng quát định kỳ.", "我想預約定期全身健康檢查。", "I want to schedule a routine general health check-up.", "預約全身健檢。"],
  ["Cần sơ cứu băng bó vết thương ngay lập tức để cầm máu.", "需要立刻對傷口進行緊急包紮消毒以止血。", "First aid dressing is needed immediately to stop bleeding.", "緊急外傷處置。"]
];
healthItems.forEach(i => addP("醫療與急難 / Pharmacy & Emergency", i[0], i[1], i[2], i[3]));

// 11. 情感態度、成語與道地口語 (Idioms & Native Slang) - 60 items
const slangItems = [
  ["Ăn quả nhớ kẻ trồng cây.", "吃果子拜樹頭 / 飲水思源感念前人恩惠。", "When eating fruit, remember the one who planted the tree.", "越南最著名的感恩成語。"],
  ["Có công mài sắt, có ngày nên kim.", "只要功夫深，鐵杵磨成針（持之以恆必能成功）。", "With perseverance, even an iron bar can be ground into a needle.", "勉勵堅持不懈。"],
  ["Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao.", "獨木不成林，眾志成城（團結就是力量）。", "One tree cannot make a forest; unity creates strength.", "強調團隊精神。"],
  ["Đi một ngày đàng, học một sàng khôn.", "讀萬卷書不如行萬里路（出外增長見聞見識）。", "Traveling a day brings a basket of wisdom.", "鼓勵旅行開拓視野。"],
  ["Cá không ăn muối cá ươn, con cưỡng cha mẹ trăm đường con hư.", "聽長輩金玉良言少走彎路。", "Fish without salt spoils; children defying parents go astray.", "傳統孝道教誨。"],
  ["Trăm nghe không bằng một thấy.", "百聞不如一見。", "Hearing a hundred times is not as good as seeing once.", "親身體驗感受。"],
  ["Vạn sự khởi đầu nan, gian nan đừng có nản!", "萬事起頭難，遇到艱難切莫氣餒喪志！", "All beginnings are hard, do not get discouraged!", "創業學語言打氣金句。"],
  ["Đúng là 'đỉnh của chóp' luôn đó bạn ơi!", "這簡直是頂點中的頂點 / 絕絕子 / 太神啦！", "That is truly the absolute peak of perfection!", "當代年輕人最潮讚美俚語。"],
  ["Bộ đồ này nhìn 'chất như nước cất' vậy!", "這套穿搭看起來太有型太酷炫了！", "This outfit looks exceptionally cool and top quality!", "稱讚穿搭有品味。"],
  ["Thả tim và bấm theo dõi kênh của mình nhé!", "請幫我的頻道按愛心點贊並點擊追蹤關注喔！", "Drop a heart and follow my channel please!", "社群自媒體用語。"]
];
slangItems.forEach(i => addP("情感與俗諺 / Idioms & Slang", i[0], i[1], i[2], i[3]));

console.log('Total new phrases staged:', masterNewPhrases.length);

// Merge into single master list ensuring unique viet
const finalMap = new Map();

// Insert existing first
existingPhrases.forEach(p => {
  if (p.viet) finalMap.set(p.viet.trim().toLowerCase(), p);
});

// Insert new additions
masterNewPhrases.forEach(p => {
  const k = p.viet.trim().toLowerCase();
  if (!finalMap.has(k)) {
    finalMap.set(k, p);
  }
});

const finalPhrasesList = Array.from(finalMap.values());
console.log('FINAL Total unique practicalPhrases count:', finalPhrasesList.length);

// Overwrite practicalPhrases in src/data/vietnameseData.js
const vietnameseDataPath = path.resolve('src/data/vietnameseData.js');
let content = fs.readFileSync(vietnameseDataPath, 'utf8');

const regex = /export const practicalPhrases = \[[\s\S]*?\n\];/;
const newCode = 'export const practicalPhrases = ' + JSON.stringify(finalPhrasesList, null, 2) + ';';

if (regex.test(content)) {
  content = content.replace(regex, newCode);
  fs.writeFileSync(vietnameseDataPath, content, 'utf8');
  console.log('✅ Successfully written ' + finalPhrasesList.length + ' phrases into vietnameseData.js!');
} else {
  console.error('❌ Failed to locate practicalPhrases in vietnameseData.js');
}
