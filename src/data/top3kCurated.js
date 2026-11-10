/**
 * Top 3,000 校正層（第 1,001–3,000 名，人工逐條校對）
 *
 * 與 top1kCurated.js 相同：原始釋義多為古漢語／方言義項、例句多為片語或套版句，
 * 本檔改寫為現代台灣華語常用義、完整例句、易錯提示，並逐條判斷漢越音（非漢越詞留空）。
 *
 * 每列格式：rank|viet|zh|en|pos|example|exampleZh|note|hanViet
 * - zh 為 SKIP＝語料雜訊（單一字母、人名、粗話），不列入學習卡
 * 驗證：node scripts/test_vocab_quality.mjs
 */
export const TOP3K_CURATED_ROWS = `
1001|giây|秒|second|名詞|Đợi tôi mười giây.|等我十秒。||
1002|gỗ|木頭|wood|名詞|Cái bàn này làm bằng gỗ.|這張桌子是木頭做的。||
1003|phường|坊（市區行政區）|ward|名詞|Nhà tôi ở phường Bến Nghé, quận 1.|我家在第一郡濱義坊。|地址常寫 Phường（坊）、Quận（郡）|坊
1004|không khí|空氣 / 氣氛|air; atmosphere|名詞|Không khí ở Đà Lạt rất trong lành.|大叻的空氣很清新。||空氣
1005|liên tục|連續 / 不斷|continuous|副詞|Trời mưa liên tục ba ngày.|連續下了三天雨。||連續
1006|bò|牛 / 爬|cow; to crawl|名詞|Tôi thích ăn phở bò.|我喜歡吃牛肉河粉。|動詞義是「爬」：em bé đang bò|
1007|tuyến|路線 / 線|route; line|名詞|Tuyến xe buýt này đi qua chợ Bến Thành.|這條公車路線經過濱城市場。||線
1008|tích cực|積極|active; positive|形容詞|Anh ấy làm việc rất tích cực.|他工作很積極。||積極
1009|đập|打 / 拍 / 水壩|to hit; dam|動詞|Tim tôi đập nhanh quá.|我的心跳得好快。||
1010|ly|杯|glass; cup|量詞|Cho tôi hai ly trà đá.|請給我兩杯冰茶。|北部也說 cốc|
1011|căn hộ|公寓|apartment|名詞|Tôi thuê một căn hộ ở quận 7.|我在第七郡租了一間公寓。||
1012|tài sản|財產 / 資產|property; assets|名詞|Đây là tài sản của công ty.|這是公司的財產。||財產
1013|vật|東西 / 物|thing; object|名詞|Vật này dùng để làm gì?|這個東西是做什麼用的？||物
1014|điều hành|營運 / 管理|to operate; to run|動詞|Chị ấy điều hành một công ty du lịch.|她經營一家旅行社。||調行
1015|vẽ|畫|to draw; to paint|動詞|Con tôi thích vẽ tranh.|我孩子喜歡畫畫。||
1016|phiên bản|版本|version|名詞|Ứng dụng có phiên bản mới.|應用程式有新版本了。||翻版
1017|kính|眼鏡 / 玻璃|glasses; glass|名詞|Tôi quên mang kính rồi.|我忘了帶眼鏡。|kính 也作「敬」：kính gửi＝敬啟|鏡
1018|cổng|大門|gate|名詞|Tôi đợi bạn ở cổng trường.|我在校門口等你。||
1019|công an|公安 / 警察|police|名詞|Công an đang kiểm tra giấy tờ xe.|公安正在檢查行車證件。||公安
1020|hồ|湖|lake|名詞|Hồ Hoàn Kiếm ở trung tâm Hà Nội.|還劍湖在河內市中心。||湖
1021|chợ|市場|market|名詞|Sáng nay mẹ đi chợ mua rau.|今天早上媽媽去市場買菜。||
1022|phong cách|風格|style|名詞|Tôi thích phong cách của quán này.|我喜歡這家店的風格。||風格
1023|hạn chế|限制|to limit; limitation|動詞|Bác sĩ bảo tôi hạn chế ăn mặn.|醫生叫我少吃鹹。||限制
1024|ánh sáng|光線|light|名詞|Phòng này có nhiều ánh sáng.|這個房間光線很充足。||
1025|công bố|公佈|to announce|動詞|Kết quả sẽ được công bố vào thứ sáu.|結果將在星期五公佈。||公佈
1026|lái|開（車）/ 駕駛|to drive|動詞|Anh biết lái ô tô không?|你會開車嗎？||
1027|xác|屍體 / 殼|corpse; shell|名詞|Họ tìm thấy xác con cá voi trên biển.|他們在海上發現鯨魚的屍體。|xác nhận＝確認，是另一個意思|
1028|xung quanh|周圍|around; surroundings|介詞|Xung quanh khách sạn có nhiều quán ăn.|飯店周圍有很多小吃店。||
1029|mở rộng|擴大 / 擴展|to expand|動詞|Công ty muốn mở rộng thị trường.|公司想要擴大市場。||
1030|hạt|顆粒 / 種子|seed; grain|名詞|Hạt cà phê này đến từ Đắk Lắk.|這些咖啡豆來自多樂省。||
1031|sáng tạo|創造 / 有創意|creative; to create|形容詞|Ý tưởng của bạn rất sáng tạo.|你的點子很有創意。||創造
1032|hình thức|形式|form|名詞|Thanh toán bằng hình thức chuyển khoản.|以轉帳的形式付款。||形式
1033|song|但是（書面）/ 雙|however (formal)|連詞|Giá hơi cao, song chất lượng rất tốt.|價格有點高，但品質很好。|書面語，口語用 nhưng|
1034|tác phẩm|作品|work (of art)|名詞|Đây là tác phẩm nổi tiếng của ông ấy.|這是他的知名作品。||作品
1035|ủng hộ|支持|to support|動詞|Gia đình luôn ủng hộ tôi.|家人一直支持我。||擁護
1036|giao dịch|交易|transaction|名詞|Giao dịch đã thành công.|交易已成功。||交易
1037|mũi|鼻子|nose|名詞|Tôi bị nghẹt mũi.|我鼻塞了。||
1038|hết sức|盡力 / 非常|utmost; extremely|副詞|Chúng tôi sẽ cố gắng hết sức.|我們會盡全力。||
1039|thanh|根 / 條（量詞）/ 聲音|bar; classifier for sticks|量詞|Cho tôi một thanh sô cô la.|請給我一條巧克力。|âm thanh＝聲音|
1040|chỉ đạo|指導 / 指示|to direct|動詞|Giám đốc đã chỉ đạo xử lý ngay.|總經理已指示立刻處理。||指導
1041|tỷ|十億|billion|數詞|Dự án này trị giá hai tỷ đồng.|這個專案價值二十億盾。|1 tỷ＝1,000 triệu|
1042|mừng|高興 / 慶祝|glad; to celebrate|形容詞|Tôi rất mừng khi gặp lại bạn.|再見到你我很高興。||
1043|mãi|一直 / 永遠|forever; keep on|副詞|Tôi sẽ nhớ mãi chuyến đi này.|我會永遠記得這趟旅程。||
1044|hộp|盒子|box|名詞|Cho tôi một hộp sữa.|請給我一盒牛奶。||
1045|thanh niên|青年|youth; young people|名詞|Thanh niên Việt Nam rất năng động.|越南青年很有活力。||青年
1046|dịp|機會 / 時機|occasion|名詞|Nhân dịp Tết, tôi về quê.|趁著過年，我回老家。||
1047|góc|角落 / 角度|corner; angle|名詞|Quán cà phê ở góc đường.|咖啡店在街角。||
1048|tài liệu|資料 / 文件|document; materials|名詞|Anh gửi tài liệu cho tôi nhé.|請把資料寄給我。||材料
1049|cân|秤 / 公斤（北部）|scale; kilogram|名詞|Cân này có chính xác không?|這個秤準嗎？|北部 cân＝公斤，南部說 ký|斤
1050|nhắn|傳訊息 / 留話|to text; to leave a message|動詞|Tôi sẽ nhắn tin cho bạn.|我會傳訊息給你。||
1051|thể|形體 / 可以（có thể）|body; form|名詞|Thể dục giúp cơ thể khỏe mạnh.|運動讓身體健康。|最常見於 có thể（可以）|體
1052|bao lâu|多久|how long|副詞|Bạn ở Việt Nam bao lâu rồi?|你在越南多久了？||
1053|tù|監獄 / 坐牢|prison|名詞|Hắn đã ngồi tù năm năm.|他坐了五年牢。||囚
1054|tin tưởng|信任|to trust|動詞|Tôi tin tưởng bạn.|我信任你。||信想
1055|chúc mừng|恭喜|congratulations|動詞|Chúc mừng sinh nhật!|生日快樂！||
1056|thí sinh|考生|candidate (exam)|名詞|Các thí sinh đang làm bài thi.|考生們正在作答。||試生
1057|nửa|一半|half|名詞|Tôi ăn nửa ổ bánh mì.|我吃了半條法國麵包。||
1058|quảng cáo|廣告|advertisement|名詞|Tôi không thích xem quảng cáo.|我不喜歡看廣告。||廣告
1059|dấu|記號 / 聲調符號|mark; accent mark|名詞|Viết tiếng Việt phải có dấu.|寫越南文要加聲調符號。||
1060|kèm|附上 / 搭配|to attach; to come with|動詞|Tôi gửi kèm hóa đơn trong email.|我在 email 裡附上發票。||
1061|tờ|張（紙）|sheet (of paper)|量詞|Cho tôi một tờ giấy.|請給我一張紙。||
1062|chi|花費 / 支出|to spend|動詞|Tháng này tôi chi hơi nhiều.|這個月我花得有點多。||支
1063|ký|簽名 / 公斤（南部）|to sign; kilogram|動詞|Anh ký vào đây giúp tôi.|請在這裡簽名。|南部 một ký＝一公斤|記
1064|tỷ lệ|比例 / 比率|rate; ratio|名詞|Tỷ lệ thất nghiệp đang giảm.|失業率正在下降。||比例
1065|quần áo|衣服|clothes|名詞|Tôi cần giặt quần áo.|我需要洗衣服。||
1066|xuất khẩu|出口|to export|動詞|Việt Nam xuất khẩu nhiều gạo.|越南出口很多稻米。||出口
1067|tăng cường|加強|to strengthen|動詞|Chúng ta cần tăng cường kiểm tra chất lượng.|我們需要加強品質檢查。||增強
1068|thua|輸|to lose|動詞|Đội nhà thua hai bàn.|主隊輸了兩球。||
1069|trao đổi|交換 / 討論|to exchange; to discuss|動詞|Chúng ta trao đổi thêm qua email nhé.|我們再用 email 討論吧。||
1070|tiết kiệm|節省 / 儲蓄|to save|動詞|Tôi đang tiết kiệm tiền để mua nhà.|我正在存錢買房子。||節儉
1071|lẫn|混雜 / 互相|mixed; mutually|副詞|Đừng để lẫn tài liệu cũ và mới.|別把新舊資料混在一起。||
1072|phân|分 / 糞便|to divide; manure|動詞|Thầy phân lớp thành bốn nhóm.|老師把班級分成四組。||分
1073|sai lầm|錯誤|mistake|名詞|Ai cũng có lúc mắc sai lầm.|每個人都有犯錯的時候。||
1074|não|腦|brain|名詞|Ngủ đủ giúp não hoạt động tốt hơn.|睡飽讓大腦運作更好。||腦
1075|bổ sung|補充|to add; to supplement|動詞|Tôi muốn bổ sung một ý.|我想補充一點。||補充
1076|tắt|關掉|to turn off|動詞|Nhớ tắt đèn trước khi ra ngoài.|出門前記得關燈。|開是 bật 或 mở|
1077|chỉ huy|指揮|to command|動詞|Ông ấy chỉ huy cả đội.|他指揮整個隊伍。||指揮
1078|e|怕 / 恐怕|to fear (that)|動詞|Tôi e là không kịp.|我恐怕來不及。||
1079|trái tim|心（情感）|heart|名詞|Bài hát này chạm đến trái tim tôi.|這首歌觸動了我的心。||
1080|quê|故鄉 / 老家|hometown|名詞|Tết này tôi về quê.|今年過年我回老家。||
1081|kết nối|連接 / 連線|to connect|動詞|Điện thoại không kết nối được Wi-Fi.|手機連不上 Wi-Fi。||
1082|thất bại|失敗|to fail; failure|動詞|Thất bại là mẹ thành công.|失敗為成功之母。||失敗
1083|khai thác|開發 / 開採|to exploit; to tap|動詞|Họ khai thác tiềm năng du lịch biển.|他們開發海洋觀光的潛力。||開拓
1084|tập đoàn|集團|corporation; group|名詞|Anh ấy làm cho một tập đoàn lớn.|他在一家大集團工作。||集團
1085|hè|夏天 / 人行道|summer; sidewalk|名詞|Mùa hè ở Sài Gòn rất nóng.|西貢的夏天很熱。|vỉa hè＝人行道|夏
1086|ngạc nhiên|驚訝|surprised|形容詞|Tôi rất ngạc nhiên khi nghe tin này.|聽到這個消息我很驚訝。||愕然
1087|mong muốn|希望 / 願望|to wish; desire|動詞|Tôi mong muốn được làm việc ở đây.|我希望能在這裡工作。||
1088|vết|痕跡 / 傷痕|mark; stain|名詞|Áo tôi bị dính vết cà phê.|我的衣服沾到咖啡漬。||
1089|chuyên nghiệp|專業|professional|形容詞|Đội ngũ của họ rất chuyên nghiệp.|他們的團隊很專業。||專業
1090|bãi|灘 / 空地|beach; lot|名詞|Bãi biển Mỹ Khê rất đẹp.|美溪海灘很美。|bãi đỗ xe＝停車場|
1091|bụng|肚子|belly|名詞|Tôi đau bụng.|我肚子痛。||
1092|khô|乾|dry|形容詞|Quần áo khô rồi.|衣服乾了。||枯
1093|ngắn|短|short|形容詞|Bài này ngắn thôi.|這一課很短。||
1094|chuẩn|標準 / 正確|standard; correct|形容詞|Bạn phát âm rất chuẩn.|你發音很標準。||準
1095|tốt nghiệp|畢業|to graduate|動詞|Em tốt nghiệp đại học năm ngoái.|我去年大學畢業。||卒業
1096|mô hình|模式 / 模型|model|名詞|Đây là mô hình kinh doanh mới.|這是新的商業模式。||模形
1097|rẻ|便宜|cheap|形容詞|Ở chợ rẻ hơn siêu thị.|市場比超市便宜。||
1098|tham dự|參加 / 出席|to attend|動詞|Tôi sẽ tham dự hội nghị ở Hà Nội.|我會出席在河內的會議。||參預
1099|đôi khi|有時|sometimes|副詞|Đôi khi tôi đi làm bằng xe buýt.|有時我搭公車上班。||
1100|góp phần|有助於 / 貢獻|to contribute|動詞|Du lịch góp phần phát triển kinh tế.|觀光有助於經濟發展。||
1101|chứng minh|證明|to prove|動詞|Anh có giấy tờ chứng minh không?|你有證明文件嗎？|chứng minh nhân dân＝身分證（舊稱）|證明
1102|thể thao|體育 / 運動|sports|名詞|Bạn thích môn thể thao nào?|你喜歡哪項運動？||體操
1103|sàn|地板|floor|名詞|Sàn nhà còn ướt.|地板還是濕的。||
1104|phân tích|分析|to analyze|動詞|Chúng ta cần phân tích nguyên nhân.|我們需要分析原因。||分析
1105|lượt|次 / 輪|turn; time|名詞|Đến lượt bạn rồi.|輪到你了。||
1106|cha mẹ|父母|parents|名詞|Cha mẹ tôi sống ở Đài Trung.|我父母住在台中。||
1107|thơ|詩|poem; poetry|名詞|Ông ấy thích đọc thơ.|他喜歡讀詩。||詩
1108|liên hệ|聯絡|to contact|動詞|Có gì cứ liên hệ với tôi.|有什麼事儘管聯絡我。||聯繫
1109|khán giả|觀眾|audience|名詞|Khán giả vỗ tay rất lâu.|觀眾鼓掌很久。||看者
1110|điện tử|電子|electronic|形容詞|Tôi làm trong ngành điện tử.|我在電子業工作。||電子
1111|vệ sinh|衛生 / 清潔|hygiene; to clean|名詞|Nhà vệ sinh ở đâu?|廁所在哪裡？|nhà vệ sinh＝廁所|衛生
1112|nhân vật|人物 / 角色|character|名詞|Nhân vật chính trong phim rất dễ thương.|電影的主角很可愛。||人物
1113|ngăn|阻止 / 隔開 / 抽屜|to prevent; drawer|動詞|Chúng ta phải ngăn dịch bệnh lây lan.|我們必須阻止疫情擴散。||
1114|kéo dài|延長 / 持續|to last; to extend|動詞|Cuộc họp kéo dài hai tiếng.|會議持續了兩小時。||
1115|bộ phận|部門 / 部分|department; part|名詞|Anh làm ở bộ phận nào?|你在哪個部門工作？||部分
1116|trưa|中午|noon|名詞|Trưa nay chúng ta ăn gì?|今天中午我們吃什麼？||
1117|viêm|發炎|inflammation|名詞|Tôi bị viêm họng.|我喉嚨發炎。||炎
1118|ví dụ|例如 / 例子|example|名詞|Anh cho tôi một ví dụ được không?|你可以給我舉個例子嗎？||
1119|tướng|將軍|general|名詞|Ông ấy từng là một vị tướng.|他曾是一位將軍。||將
1120|tuy|雖然|although|連詞|Tuy mệt nhưng tôi vẫn vui.|雖然累，但我還是很開心。|tuy … nhưng … 搭配使用|雖
1121|dĩ nhiên|當然|of course|副詞|Dĩ nhiên là tôi sẽ đến.|我當然會來。||已然
1122|khí|氣體 / 氣|gas; air|名詞|Khí thải xe máy gây ô nhiễm.|機車廢氣造成污染。||氣
1123|bậc|階 / 等級|step; level|名詞|Cẩn thận bậc thang nhé.|小心台階喔。||
1124|xương|骨頭|bone|名詞|Cá này nhiều xương quá.|這條魚刺好多。||
1125|chính quyền|政府 / 政權|authorities|名詞|Chính quyền địa phương đã hỗ trợ người dân.|地方政府已協助居民。||政權
1126|dịch|翻譯 / 疫情|to translate; epidemic|動詞|Bạn dịch giúp tôi câu này nhé.|請幫我翻譯這句。|dịch bệnh＝疫情|譯
1127|chuyên|專門 / 專攻|specialized|副詞|Cửa hàng này chuyên bán đồ điện tử.|這家店專賣電子產品。||專
1128|quý khách|貴賓 / 顧客（敬稱）|valued customer|名詞|Kính chào quý khách!|歡迎光臨！|店家廣播常用的敬語|貴客
1129|đồng hồ|時鐘 / 手錶|clock; watch|名詞|Đồng hồ của tôi chạy chậm năm phút.|我的錶慢了五分鐘。||銅壺
1130|ước|希望 / 大約|to wish; about|動詞|Tôi ước được đi Phú Quốc.|我希望能去富國島。|ước tính＝估計|
1131|ung thư|癌症|cancer|名詞|Hút thuốc làm tăng nguy cơ ung thư.|吸菸會增加罹癌風險。||癰疽
1132|vận động|運動 / 動員|to exercise; to mobilize|動詞|Bạn nên vận động mỗi ngày.|你應該每天運動。||運動
1133|kém|差 / 不好 / 差（時間）|poor; less|形容詞|Mắt tôi hơi kém.|我視力有點差。|tám giờ kém mười＝七點五十分|
1134|trang bị|裝備 / 配備|to equip|動詞|Phòng họp được trang bị máy chiếu.|會議室配有投影機。||裝備
1135|siêu|超級|super|副詞|Món này siêu ngon!|這道超好吃！|siêu thị＝超市|超
1136|tung|拋 / 推出|to toss; to launch|動詞|Hãng sẽ tung sản phẩm mới vào tháng sau.|廠商下個月將推出新產品。||
1137|vườn|花園 / 果園|garden|名詞|Nhà bà có một vườn rau nhỏ.|奶奶家有一個小菜園。||
1138|luật sư|律師|lawyer|名詞|Tôi cần hỏi ý kiến luật sư.|我需要諮詢律師。||律師
1139|thủ tục|手續|procedure|名詞|Thủ tục xin visa có phức tạp không?|申請簽證的手續複雜嗎？||手續
1140|đống|堆|pile|名詞|Trên bàn có một đống giấy tờ.|桌上有一堆文件。||
1141|buộc|綁 / 被迫|to tie; to force|動詞|Tôi buộc phải nghỉ việc.|我被迫辭職。|bắt buộc＝強制|
1142|tấn|噸|ton|量詞|Mỗi tháng nhà máy xuất hai trăm tấn hàng.|工廠每月出貨兩百噸。||
1143|tình cảm|感情|feelings; affection|名詞|Họ có tình cảm với nhau.|他們對彼此有感情。||情感
1144|tương tự|類似|similar|形容詞|Tôi cũng gặp vấn đề tương tự.|我也遇到類似的問題。||相似
1145|sửa|修理 / 修改|to fix; to edit|動詞|Anh sửa giúp em cái xe này nhé.|請幫我修這台車。||
1146|lương|薪水|salary|名詞|Lương tháng này đã về chưa?|這個月的薪水入帳了嗎？||糧
1147|ngang|橫 / 相當|horizontal; equal|形容詞|Đi ngang qua chợ là tới.|橫過市場就到了。||
1148|nắng|陽光 / 晴天|sunshine; sunny|名詞|Hôm nay nắng to quá.|今天太陽好大。||
1149|chiến lược|策略 / 戰略|strategy|名詞|Công ty cần chiến lược mới.|公司需要新策略。||戰略
1150|hôm qua|昨天|yesterday|副詞|Hôm qua tôi đi Vũng Tàu.|昨天我去頭頓。||
1151|quỹ|基金 / 資金|fund|名詞|Công ty có quỹ khen thưởng cho nhân viên.|公司有員工獎勵基金。||櫃
1152|cơm|米飯 / 餐|rice; meal|名詞|Tối nay ăn cơm ở nhà nhé.|今晚在家吃飯喔。||
1153|ném|丟 / 扔|to throw|動詞|Đừng ném rác xuống đường.|別把垃圾丟在路上。||
1154|vỡ|破 / 碎|broken|動詞|Cái ly bị vỡ rồi.|杯子破了。||
1155|xuất sắc|出色|excellent|形容詞|Cô ấy là nhân viên xuất sắc nhất năm.|她是年度最優秀的員工。||出色
1156|mảnh|片 / 塊|piece|名詞|Cẩn thận mảnh kính vỡ.|小心玻璃碎片。||
1157|bếp|廚房 / 爐子|kitchen; stove|名詞|Mẹ đang nấu ăn trong bếp.|媽媽正在廚房煮飯。||
1158|dấu hiệu|跡象 / 徵兆|sign; symptom|名詞|Đây là dấu hiệu tốt.|這是個好跡象。||
1159|muộn|晚 / 遲|late|形容詞|Xin lỗi, tôi đến muộn.|抱歉，我遲到了。|南部常說 trễ|
1160|nhà trường|學校（機構）|the school|名詞|Nhà trường thông báo nghỉ học ngày mai.|學校通知明天停課。||
1161|biện pháp|措施 / 辦法|measure|名詞|Chúng ta cần biện pháp cụ thể.|我們需要具體的措施。||辦法
1162|thanh tra|稽查 / 檢查員|inspection; inspector|名詞|Đoàn thanh tra sẽ đến nhà máy tuần sau.|稽查團下週會來工廠。||清查
1163|điều chỉnh|調整|to adjust|動詞|Chúng tôi sẽ điều chỉnh giá.|我們會調整價格。||調整
1164|nộp|繳交|to submit; to pay|動詞|Hạn nộp hồ sơ là thứ hai.|繳交資料的期限是星期一。||
1165|du khách|遊客|tourist|名詞|Hội An đón nhiều du khách nước ngoài.|會安迎來很多外國遊客。||遊客
1166|tai|耳朵|ear|名詞|Tai tôi bị ù.|我的耳朵在嗡嗡響。|tai nạn＝事故（災難）|
1167|tận|直到 / 盡頭|until; to the end|副詞|Anh ấy đưa tôi tận nhà.|他把我送到家門口。||盡
1168|nỗ lực|努力|effort; to strive|名詞|Cảm ơn sự nỗ lực của mọi người.|謝謝大家的努力。||努力
1169|cảm nhận|感受|to feel; perception|動詞|Bạn cảm nhận thế nào về món này?|你覺得這道菜怎麼樣？||感認
1170|nguy cơ|風險 / 危機|risk|名詞|Có nguy cơ mưa lớn vào chiều nay.|今天下午有下大雨的可能。||危機
1171|bầu|選舉 / 葫蘆|to elect; gourd|動詞|Mọi người bầu anh ấy làm trưởng nhóm.|大家選他當組長。|có bầu＝懷孕|
1172|nhà hàng|餐廳|restaurant|名詞|Nhà hàng này có món Huế rất ngon.|這家餐廳的順化菜很好吃。||
1173|mã|代碼 / 號碼|code|名詞|Anh nhập mã giảm giá ở đây.|請在這裡輸入折扣碼。||碼
1174|hỏng|壞掉|broken|形容詞|Máy giặt bị hỏng rồi.|洗衣機壞了。|南部也說 hư|
1175|kịp|來得及|in time|副詞|Đi nhanh lên, không kịp xe buýt!|快一點，會趕不上公車！||
1176|đàn|群 / 樂器（琴）|flock; instrument|名詞|Một đàn chim bay qua.|一群鳥飛過。|chơi đàn＝彈琴|
1177|khác biệt|差異|difference|名詞|Hai bản này có khác biệt gì?|這兩個版本有什麼差異？||
1178|phí|費用|fee|名詞|Phí giao hàng là ba mươi nghìn.|運費是三萬盾。||費
1179|nghiêm túc|認真 / 嚴肅|serious|形容詞|Anh ấy làm việc rất nghiêm túc.|他工作很認真。||嚴肅
1180|gắn|安裝 / 貼上|to attach|動詞|Họ đang gắn máy lạnh mới.|他們正在裝新冷氣。||
1181|hợp lý|合理|reasonable|形容詞|Giá này khá hợp lý.|這個價格相當合理。||合理
1182|đốt|燒|to burn|動詞|Không được đốt rác ở đây.|這裡不准燒垃圾。||
1183|duy trì|維持|to maintain|動詞|Chúng ta cần duy trì chất lượng.|我們需要維持品質。||維持
1184|xây|蓋 / 建|to build|動詞|Họ đang xây nhà mới.|他們正在蓋新房子。||
1185|tác động|影響 / 作用|impact|名詞|Thời tiết có tác động lớn đến nông nghiệp.|天氣對農業影響很大。||作動
1186|giày|鞋子|shoes|名詞|Đôi giày này bao nhiêu tiền?|這雙鞋多少錢？||
1187|sẵn|現成 / 已備好|ready; available|副詞|Ở đây có sẵn khăn tắm.|這裡有現成的浴巾。||
1188|giám sát|監督|to supervise|動詞|Quản đốc giám sát dây chuyền sản xuất.|廠長監督生產線。||監察
1189|tiêu chuẩn|標準|standard|名詞|Sản phẩm đạt tiêu chuẩn châu Âu.|產品符合歐洲標準。||標準
1190|kỹ năng|技能|skill|名詞|Kỹ năng giao tiếp rất quan trọng.|溝通技巧很重要。||技能
1191|trứng|蛋|egg|名詞|Cho tôi hai quả trứng ốp la.|請給我兩顆荷包蛋。||
1192|nông nghiệp|農業|agriculture|名詞|Đồng bằng sông Cửu Long phát triển nông nghiệp.|九龍江平原以農業發展。||農業
1193|thế thì|那麼|then; in that case|連詞|Thế thì mình đi taxi nhé.|那我們搭計程車吧。||
1194|yếu|弱|weak|形容詞|Tín hiệu điện thoại ở đây rất yếu.|這裡手機訊號很弱。||
1195|đói|餓|hungry|形容詞|Tôi đói quá, đi ăn thôi!|我好餓，去吃飯吧！||
1196|phổ biến|普遍 / 流行|common; popular|形容詞|Xe máy rất phổ biến ở Việt Nam.|機車在越南很普遍。||普遍
1197|năng lực|能力|ability|名詞|Anh ấy có năng lực quản lý tốt.|他有很好的管理能力。||能力
1198|nông dân|農民|farmer|名詞|Nông dân đang thu hoạch lúa.|農民正在收割稻子。||農民
1199|la|喊 / 罵|to shout; to scold|動詞|Đừng la to thế!|別那麼大聲喊！||
1200|ngọn|（山、火、燈的）量詞 / 頂端|top; classifier|量詞|Ngọn núi này cao nhất miền Bắc.|這座山是北部最高的。||
1201|vợ chồng|夫妻|husband and wife|名詞|Hai vợ chồng họ rất hạnh phúc.|他們夫妻倆很幸福。||
1202|ánh|光|light; ray|名詞|Ánh trăng đêm nay rất đẹp.|今晚的月光很美。||映
1203|thích hợp|適合|suitable|形容詞|Đây là thời điểm thích hợp để đầu tư.|這是適合投資的時機。||適合
1204|hợp|合 / 適合|to suit; to match|動詞|Màu này rất hợp với bạn.|這個顏色很適合你。||合
1205|đợt|批 / 波 / 期|round; wave|名詞|Đợt hàng đầu tiên đã về.|第一批貨到了。||
1206|Hàn Quốc|韓國|South Korea|名詞|Tôi thích phim Hàn Quốc.|我喜歡韓劇。||韓國
1207|răng|牙齒|tooth|名詞|Tôi bị đau răng.|我牙痛。||
1208|phản ứng|反應|reaction; to react|名詞|Cơ thể tôi bị phản ứng với thuốc này.|我對這種藥有不良反應。||反應
1209|truyền|傳 / 輸（液）|to transmit|動詞|Bệnh này truyền qua đường nào?|這種病透過什麼途徑傳染？||傳
1210|ma|鬼|ghost|名詞|Con tôi sợ ma.|我孩子怕鬼。||魔
1211|cú|一下（量詞）/ 貓頭鷹|blow; owl|量詞|Anh ấy gọi cho tôi mấy cú điện thoại.|他打了幾通電話給我。||
1212|thề|發誓|to swear|動詞|Tôi thề là tôi nói thật.|我發誓我說的是真的。||誓
1213|miếng|塊 / 片|piece; bite|名詞|Cho tôi thử một miếng.|讓我嚐一口。||
1214|hay là|或者 / 還是|or; how about|連詞|Hay là mình đi xem phim đi?|不如我們去看電影吧？||
1215|Nhật|日本|Japan|名詞|Xe này là hàng Nhật.|這輛車是日本貨。||日
1216|cung|宮 / 弓 / 供給|palace; supply|名詞|Cung cầu thị trường đang thay đổi.|市場供需正在變化。|cung cấp＝供應|
1217|sát|緊貼 / 接近|close to|形容詞|Nhà tôi nằm sát biển.|我家就在海邊。||
1218|Tết|春節 / 節日|Lunar New Year|名詞|Tết năm nay bạn về quê không?|今年過年你回老家嗎？|Tết 專指農曆新年|節
1219|rửa|洗|to wash|動詞|Rửa tay trước khi ăn nhé.|吃飯前要洗手喔。|洗澡用 tắm，洗衣用 giặt|
1220|thời trang|時尚 / 服裝|fashion|名詞|Cô ấy rất thích thời trang.|她很喜歡時尚。||時裝
1221|nhà máy|工廠|factory|名詞|Nhà máy của chúng tôi ở Bình Dương.|我們的工廠在平陽。||
1222|diễn viên|演員|actor|名詞|Anh ấy là diễn viên nổi tiếng.|他是知名演員。||演員
1223|trộm|偷 / 小偷|to steal; thief|動詞|Xe đạp của tôi bị trộm rồi.|我的腳踏車被偷了。||
1224|màu sắc|色彩|colour|名詞|Bức tranh có màu sắc rất đẹp.|這幅畫色彩很美。||
1225|đô thị|都市|urban area|名詞|Giao thông đô thị ngày càng đông.|都市交通越來越擁擠。||都市
1226|tự hào|自豪|proud|形容詞|Bố mẹ rất tự hào về con.|爸媽很以你為榮。||自豪
1227|cao cấp|高級|high-end|形容詞|Đây là khách sạn cao cấp.|這是高級飯店。||高級
1228|con số|數字|figure; number|名詞|Con số này có chính xác không?|這個數字正確嗎？||
1229|lập tức|立刻|immediately|副詞|Hãy gọi cấp cứu ngay lập tức!|立刻叫救護車！||立即
1230|hàng hoá|貨物 / 商品|goods|名詞|Hàng hoá đã được giao đủ.|貨物已全數交付。||行貨
1231|pha|泡 / 沖 / 調|to brew; to mix|動詞|Để tôi pha cà phê cho bạn.|我來幫你泡咖啡。||
1232|kho|倉庫 / 滷|warehouse; to braise|名詞|Hàng còn trong kho không?|倉庫裡還有貨嗎？|cá kho＝滷魚|庫
1233|tác giả|作者|author|名詞|Tác giả cuốn sách này là ai?|這本書的作者是誰？||作者
1234|đề|題目 / 提|topic; to write on|名詞|Đề thi năm nay khá khó.|今年的考題相當難。|đề nghị＝提議|題
1235|ê|喂 / 痠麻|hey; sore|感嘆詞|Ê, đợi tôi với!|喂，等等我！|對長輩不禮貌|
1236|hàng đầu|首要 / 頂尖|leading; top|形容詞|Đây là công ty hàng đầu trong ngành.|這是業界頂尖的公司。||
1237|ngã|跌倒 / 路口|to fall; crossroads|動詞|Bé bị ngã xe đạp.|小朋友騎腳踏車摔倒了。|ngã tư＝十字路口|
1238|giàu|有錢 / 富有|rich|形容詞|Ông ấy rất giàu.|他很有錢。||
1239|anh chàng|那個小伙子|young man; guy|名詞|Anh chàng đó là ai vậy?|那個男生是誰？||
1240|quan|官員|official|名詞|Ông ấy từng làm quan ở Huế.|他曾在順化當官。|quan trọng、quan tâm 中的 quan 是「關」|官
1241|khỉ|猴子|monkey|名詞|Trên núi có nhiều khỉ.|山上有很多猴子。||
1242|cạnh tranh|競爭|to compete|動詞|Thị trường điện thoại cạnh tranh rất mạnh.|手機市場競爭很激烈。||競爭
1243|vì thế|因此|therefore|連詞|Trời mưa to, vì thế chuyến bay bị hoãn.|下大雨，因此班機延誤。||
1244|cực|極 / 非常|extremely; pole|副詞|Món này cực ngon!|這道菜超好吃！||極
1245|miễn phí|免費|free (of charge)|形容詞|Wi-Fi ở đây miễn phí.|這裡的 Wi-Fi 免費。||免費
1246|xứng đáng|值得 / 配得上|worthy|形容詞|Bạn xứng đáng được khen thưởng.|你值得被獎勵。||
1247|văn bản|文件 / 文本|document|名詞|Anh gửi văn bản chính thức cho tôi nhé.|請把正式文件寄給我。||文本
1248|chào mừng|歡迎|to welcome|動詞|Chào mừng bạn đến Việt Nam!|歡迎來到越南！||
1249|khám|檢查 / 看病|to examine|動詞|Tôi cần đi khám bệnh.|我需要去看病。||勘
1250|anh hùng|英雄|hero|名詞|Ông ấy là anh hùng của dân tộc.|他是民族英雄。||英雄
1251|quốc hội|國會|National Assembly|名詞|Quốc hội vừa thông qua luật mới.|國會剛通過新法。||國會
1252|uỷ ban|委員會|committee|名詞|Tôi đến uỷ ban phường làm giấy tờ.|我去坊委會辦證件。|ủy ban nhân dân＝人民委員會（地方政府）|委班
1253|cảm xúc|情緒 / 感受|emotion|名詞|Anh ấy khó kiểm soát cảm xúc.|他很難控制情緒。||感觸
1254|trại|營地 / 農場|camp; farm|名詞|Cuối tuần chúng tôi đi cắm trại.|週末我們去露營。||寨
1255|mỗi|每|each; every|限定詞|Mỗi ngày tôi học mười từ mới.|我每天學十個新字。||
1256|trung ương|中央|central|名詞|Đây là bệnh viện trung ương.|這是中央醫院。||中央
1257|cầu thủ|球員|player (football)|名詞|Cầu thủ số mười đá rất hay.|十號球員踢得很好。||球手
1258|gia|家 / 加|family; to add|名詞|Gia đình tôi có năm người.|我家有五個人。|常見於 gia đình、tham gia|家
1259|giấu|藏|to hide|動詞|Em giấu chìa khóa ở đâu?|你把鑰匙藏在哪？||
1260|ngày nay|現今|nowadays|副詞|Ngày nay ai cũng dùng điện thoại thông minh.|現今人人都用智慧型手機。||
1261|tiêu dùng|消費|to consume|動詞|Người tiêu dùng ngày càng thông minh.|消費者越來越精明。||消用
1262|địa điểm|地點|location|名詞|Địa điểm tổ chức ở đâu?|舉辦地點在哪裡？||地點
1263|tăng trưởng|成長|growth|名詞|Tăng trưởng kinh tế năm nay khá tốt.|今年經濟成長不錯。||增長
1264|động|動 / 洞穴|to move; cave|動詞|Đừng động vào đồ của tôi.|別碰我的東西。|động Phong Nha＝風牙洞|動
1265|lái xe|開車 / 司機|to drive; driver|動詞|Tôi không biết lái xe.|我不會開車。||
1266|thai|胎兒 / 懷孕|fetus; pregnancy|名詞|Chị ấy đang mang thai.|她正在懷孕。||胎
1267|tưởng tượng|想像|to imagine|動詞|Tôi không thể tưởng tượng được.|我無法想像。||想象
1268|tổ|小組 / 巢|team; nest|名詞|Tổ của tôi có sáu công nhân.|我們這組有六名工人。||組
1269|đua|比賽 / 競爭|to race|動詞|Hai đội đang đua thuyền.|兩隊正在划船比賽。||
1270|đời sống|生活|life; living|名詞|Đời sống người dân đã cải thiện nhiều.|居民生活改善很多。||
1271|hành vi|行為|behaviour|名詞|Đây là hành vi vi phạm pháp luật.|這是違法行為。||行為
1272|mở cửa|開門 / 開放|to open|動詞|Cửa hàng mở cửa từ tám giờ sáng.|商店早上八點開門。||
1273|tuỳ|隨 / 看情況|depending on|動詞|Tuỳ bạn, đi đâu cũng được.|隨你，去哪裡都可以。||隨
1274|ấm|溫暖|warm|形容詞|Mặc áo ấm vào kẻo lạnh.|穿上暖和的衣服，免得著涼。||
1275|nêu|提出|to raise; to state|動詞|Anh nêu ý kiến của mình đi.|你說說你的意見吧。||
1276|bộ trưởng|部長|minister|名詞|Bộ trưởng sẽ phát biểu tại hội nghị.|部長將在會議上致詞。||部長
1277|kêu|叫 / 喊|to call; to cry out|動詞|Con mèo kêu cả đêm.|貓叫了一整晚。|南部 kêu＝叫（人）|
1278|sư|和尚 / 師|monk; master|名詞|Nhà sư đang tụng kinh.|和尚正在誦經。||師
1279|vỏ|殼 / 皮|shell; peel|名詞|Bóc vỏ trước khi ăn.|吃之前先剝皮。||
1280|đại biểu|代表|delegate|名詞|Các đại biểu đã đến đủ.|各位代表都到齊了。||代表
1281|gốc|根 / 原本|root; origin|名詞|Anh ấy gốc Huế.|他是順化人。||
1282|đóng góp|貢獻 / 捐獻|to contribute|動詞|Cảm ơn bạn đã đóng góp ý kiến.|謝謝你提供意見。||
1283|chạm|碰觸|to touch|動詞|Xin đừng chạm vào hiện vật.|請勿觸摸展品。||
1284|sóng|波浪 / 訊號|wave; signal|名詞|Hôm nay biển có sóng lớn.|今天海上浪很大。||
1285|dự kiến|預計|expected; to plan|動詞|Dự kiến tháng sau hoàn thành.|預計下個月完成。||預見
1286|xinh đẹp|美麗|beautiful|形容詞|Cô dâu hôm nay rất xinh đẹp.|今天的新娘很漂亮。||
1287|phương tiện|交通工具 / 工具|means; vehicle|名詞|Xe máy là phương tiện phổ biến nhất.|機車是最普遍的交通工具。|和中文「方便」同字不同義|方便
1288|sự nghiệp|事業|career|名詞|Anh ấy rất thành công trong sự nghiệp.|他事業很成功。||事業
1289|thương|疼愛 / 心疼|to love; to pity|動詞|Bà rất thương cháu.|奶奶很疼孫子。|bị thương＝受傷|
1290|nhất định|一定|certainly|副詞|Tôi nhất định sẽ quay lại.|我一定會再回來。||一定
1291|dính|黏 / 沾|sticky; to stick|動詞|Áo bị dính sơn.|衣服沾到油漆。||
1292|thi đấu|比賽|to compete|動詞|Đội tuyển sẽ thi đấu vào tối nay.|代表隊今晚比賽。||試鬥
1293|phong trào|運動 / 風潮|movement; trend|名詞|Phong trào chạy bộ đang rất phổ biến.|跑步風潮正盛行。||風潮
1294|hành tinh|行星|planet|名詞|Trái Đất là hành tinh của chúng ta.|地球是我們的星球。||行星
1295|ban đầu|一開始|initially|副詞|Ban đầu tôi thấy tiếng Việt rất khó.|一開始我覺得越語很難。||
1296|chùa|寺廟|pagoda|名詞|Ngày rằm, bà thường đi chùa.|每逢農曆十五，奶奶常去寺廟。||
1297|phức tạp|複雜|complicated|形容詞|Vấn đề này khá phức tạp.|這個問題相當複雜。||複雜
1298|thu nhập|收入|income|名詞|Thu nhập của anh ấy khá cao.|他的收入相當高。||收入
1299|bảo hiểm|保險|insurance|名詞|Công ty có đóng bảo hiểm cho nhân viên.|公司有幫員工投保。||保險
1300|bám|緊抓 / 黏著|to cling to|動詞|Bám chặt vào nhé!|抓緊喔！||
1301|tiếp cận|接觸 / 接近|to approach; to access|動詞|Chúng tôi muốn tiếp cận khách hàng trẻ.|我們想接觸年輕客群。||接近
1302|đạo|宗教 / 道|religion; way|名詞|Anh theo đạo gì?|你信什麼宗教？|đạo Phật＝佛教|道
1303|bão|颱風|storm; typhoon|名詞|Cơn bão sắp vào miền Trung.|颱風即將登陸中部。||
1304|giáo sư|教授|professor|名詞|Bà ấy là giáo sư đại học.|她是大學教授。||教師
1305|phẫu thuật|手術|surgery|名詞|Ông tôi vừa phẫu thuật xong.|我爺爺剛動完手術。||剖術
1306|trạm|站|station|名詞|Trạm xăng gần nhất ở đâu?|最近的加油站在哪裡？||站
1307|thay thế|取代 / 替換|to replace|動詞|Không ai có thể thay thế bạn.|沒有人能取代你。||
1308|lợi ích|利益 / 好處|benefit|名詞|Tập thể dục có nhiều lợi ích.|運動有很多好處。||利益
1309|Đà Nẵng|峴港|Da Nang|名詞|Đà Nẵng có bãi biển rất đẹp.|峴港有很美的海灘。||
1310|thú|動物 / 樂趣|animal; pleasure|名詞|Sở thú ở đây có nhiều loài thú hiếm.|這裡的動物園有很多珍稀動物。|thú vị＝有趣|獸
1311|màn|幕 / 簾|curtain; screen|名詞|Màn hình điện thoại bị nứt.|手機螢幕裂了。||幔
1312|khẩu|口 / （槍的）量詞|mouth; classifier for guns|名詞|Đeo khẩu trang khi ra đường nhé.|出門要戴口罩喔。|khẩu trang＝口罩|口
1313|ống|管子|pipe; tube|名詞|Ống nước bị rò rỉ.|水管漏水了。||
1314|đeo|戴 / 背|to wear (accessories)|動詞|Anh ấy đeo kính đen.|他戴墨鏡。|穿衣用 mặc，戴帽用 đội|
1315|no|飽|full (after eating)|形容詞|Tôi no rồi, cảm ơn.|我吃飽了，謝謝。||
1316|tội phạm|罪犯|criminal|名詞|Cảnh sát đã bắt được tội phạm.|警察已抓到罪犯。||罪犯
1317|mái|屋頂 / 瀏海|roof; fringe|名詞|Mái nhà bị dột.|屋頂漏水。||
1318|lỗ|洞 / 虧損|hole; loss|名詞|Tháng này công ty bị lỗ.|這個月公司虧損。|lời（賺）↔ lỗ（虧）|
1319|nghi ngờ|懷疑|to doubt; to suspect|動詞|Tôi nghi ngờ thông tin này.|我懷疑這個消息。||
1320|bảo đảm|保證 / 確保|to guarantee|動詞|Chúng tôi bảo đảm giao hàng đúng hạn.|我們保證準時交貨。|也寫作 đảm bảo|保擔
1321|u|腫瘤|tumor|名詞|Bác sĩ phát hiện một khối u nhỏ.|醫生發現一個小腫瘤。||
1322|từ chối|拒絕|to refuse|動詞|Tôi phải từ chối lời mời này.|我必須婉拒這個邀請。||
1323|khám phá|探索 / 發現|to discover|動詞|Tôi muốn khám phá miền Tây.|我想探索湄公河三角洲。||勘破
1324|kỹ|仔細|carefully|副詞|Đọc kỹ hợp đồng trước khi ký.|簽約前要仔細閱讀合約。||
1325|khai|申報 / 開|to declare|動詞|Anh cần khai báo hải quan.|你需要向海關申報。|khai trương＝開幕|開
1326|dao|刀|knife|名詞|Cho tôi mượn con dao.|借我一把刀。||
1327|dễ thương|可愛|cute|形容詞|Em bé dễ thương quá!|小寶寶好可愛！||
1328|thế hệ|世代|generation|名詞|Thế hệ trẻ rất giỏi công nghệ.|年輕世代很擅長科技。||世系
1329|nút|按鈕 / 鈕扣|button; knot|名詞|Bấm nút này để mở cửa.|按這個鈕開門。||
1330|h|SKIP
1331|gói|包 / 包裝|to wrap; package|動詞|Chị gói lại giúp em nhé.|請幫我包起來喔。||
1332|châu|洲|continent|名詞|Việt Nam nằm ở châu Á.|越南位於亞洲。||洲
1333|o|SKIP
1334|nghiêm trọng|嚴重|serious|形容詞|Tình hình không nghiêm trọng lắm.|情況不算太嚴重。||嚴重
1335|say|醉 / 暈（車）|drunk; carsick|形容詞|Tôi say xe.|我暈車。|say rượu＝喝醉|
1336|cách mạng|革命|revolution|名詞|Cách mạng công nghiệp đã thay đổi thế giới.|工業革命改變了世界。||革命
1337|nội|內 / 祖（父系）|inner; paternal|形容詞|Ông bà nội tôi sống ở Huế.|我爺爺奶奶住在順化。|nội＝父系，ngoại＝母系|內
1338|thủ tướng|總理|prime minister|名詞|Thủ tướng đã đến thăm nhà máy.|總理參訪了工廠。||首相
1339|chủ đề|主題|topic|名詞|Chủ đề hôm nay là du lịch.|今天的主題是旅遊。||主題
1340|chuyên môn|專業 / 專長|expertise|名詞|Anh ấy có chuyên môn về tài chính.|他有財務專長。||專門
1341|giấc|（睡眠的）一覺|sleep (period)|名詞|Chúc bạn ngủ một giấc thật ngon.|祝你睡個好覺。||
1342|xếp|排 / 疊|to arrange; to line up|動詞|Mọi người xếp hàng ở đây.|大家在這裡排隊。|xếp hàng＝排隊|
1343|bia|啤酒 / 石碑|beer; stele|名詞|Cho tôi hai chai bia.|請給我兩瓶啤酒。||
1344|chuột|老鼠 / 滑鼠|mouse|名詞|Trong bếp có chuột.|廚房裡有老鼠。||
1345|cặp|對 / 書包|pair; school bag|名詞|Họ là một cặp đôi đẹp.|他們是很登對的一對。||
1346|phát biểu|發言|to speak (formally)|動詞|Mời anh phát biểu ý kiến.|請你發表意見。||發表
1347|ôm|擁抱|to hug|動詞|Mẹ ôm con vào lòng.|媽媽把孩子抱在懷裡。||
1348|chảy|流|to flow|動詞|Nước chảy rất mạnh.|水流得很急。||
1349|gan|肝 / 膽子|liver; courage|名詞|Anh ấy gan thật!|他膽子真大！||肝
1350|đòi hỏi|要求|to demand|動詞|Công việc này đòi hỏi kinh nghiệm.|這份工作需要經驗。||
1351|nhập|輸入 / 進|to enter; to import|動詞|Anh nhập mật khẩu vào đây.|請在這裡輸入密碼。||入
1352|tài khoản|帳戶|account|名詞|Tôi muốn mở tài khoản ngân hàng.|我想開銀行帳戶。||財款
1353|đại|大|big; great|形容詞|Đây là trường đại học lớn nhất.|這是最大的大學。||大
1354|hạng|等級|class; rank|名詞|Tôi đặt vé hạng phổ thông.|我訂了經濟艙。||項
1355|kem|冰淇淋 / 乳霜|ice cream; cream|名詞|Con muốn ăn kem dừa.|我想吃椰子冰淇淋。||
1356|tín hiệu|訊號|signal|名詞|Ở đây không có tín hiệu.|這裡沒有訊號。||信號
1357|sân bay|機場|airport|名詞|Sân bay Tân Sơn Nhất rất đông.|新山一機場人很多。||
1358|ba|爸爸（南部）/ 三|dad (South); three|名詞|Ba tôi làm kỹ sư.|我爸爸是工程師。|北部叫 bố|
1359|liên kết|連結 / 合作|to link; to partner|動詞|Hai trường liên kết đào tạo.|兩校合作培訓。||聯結
1360|nông thôn|農村|countryside|名詞|Cuộc sống ở nông thôn rất yên bình.|鄉下的生活很平靜。||農村
1361|váy|裙子|skirt; dress|名詞|Cô ấy mặc váy trắng.|她穿白色洋裝。||
1362|lợi|利益 / 牙齦|benefit; gum|名詞|Làm vậy có lợi cho cả hai bên.|這樣做對雙方都有利。||利
1363|cửa sổ|窗戶|window|名詞|Mở cửa sổ cho thoáng nhé.|開窗通風一下吧。||
1364|ngoại|外 / 外祖（母系）|outer; maternal|形容詞|Bà ngoại tôi tám mươi tuổi.|我外婆八十歲。||外
1365|đối mặt|面對|to face|動詞|Chúng ta phải đối mặt với khó khăn.|我們必須面對困難。||對面
1366|ma tuý|毒品|drugs|名詞|Ma tuý bị cấm nghiêm ngặt ở Việt Nam.|毒品在越南被嚴格禁止。||麻醉
1367|truyền hình|電視|television|名詞|Chương trình được phát trên truyền hình.|節目在電視上播出。||傳形
1368|xác nhận|確認|to confirm|動詞|Vui lòng xác nhận đơn hàng.|請確認訂單。||確認
1369|đài|台（電台）/ 塔|station; tower|名詞|Tôi nghe đài mỗi sáng.|我每天早上聽廣播。||臺
1370|cụ|老人家（敬稱）|elderly person|代名詞|Cụ ơi, cụ đi đâu đấy ạ?|老人家，您要去哪裡呀？|稱呼非常年長的長輩|
1371|cho nên|所以|so; therefore|連詞|Tôi bị ốm, cho nên không đi được.|我生病了，所以不能去。||
1372|vui lòng|請（正式）|please (formal)|副詞|Vui lòng chờ trong giây lát.|請稍候片刻。|公告、客服常用|
1373|kênh|頻道 / 運河|channel; canal|名詞|Kênh này có phim hay.|這個頻道有好看的電影。||
1374|ngu ngốc|愚蠢|stupid|形容詞|Đó là một quyết định ngu ngốc.|那是個愚蠢的決定。|罵人用語，小心使用|
1375|quy hoạch|規劃|to plan; planning|名詞|Khu này đã có quy hoạch mới.|這區已有新規劃。||規劃
1376|tuyên bố|宣布|to declare|動詞|Công ty tuyên bố mở nhà máy mới.|公司宣布設立新工廠。||宣佈
1377|nấu|煮|to cook|動詞|Tối nay tôi nấu canh chua.|今晚我煮酸湯。||
1378|trễ|遲 / 晚（南部）|late|形容詞|Xe buýt đến trễ mười phút.|公車晚了十分鐘。|北部常說 muộn|
1379|dân số|人口|population|名詞|Dân số Việt Nam hơn một trăm triệu.|越南人口超過一億。||民數
1380|sắt|鐵|iron|名詞|Cửa này làm bằng sắt.|這扇門是鐵做的。||
1381|đe doạ|威脅|to threaten|動詞|Ô nhiễm đang đe doạ sức khỏe người dân.|污染正威脅居民健康。||
1382|nhầm|弄錯|to mistake|動詞|Xin lỗi, tôi gọi nhầm số.|抱歉，我打錯電話了。||
1383|vi phạm|違反|to violate|動詞|Anh đã vi phạm luật giao thông.|你違反了交通規則。||違犯
1384|luôn luôn|總是|always|副詞|Mẹ luôn luôn lo cho con.|媽媽總是擔心孩子。||
1385|bằng chứng|證據|evidence|名詞|Có bằng chứng gì không?|有什麼證據嗎？||憑證
1386|cấm|禁止|to ban|動詞|Cấm hút thuốc.|禁止吸菸。||禁
1387|tươi|新鮮|fresh|形容詞|Cá ở đây rất tươi.|這裡的魚很新鮮。||
1388|đặc vụ|特務 / 探員|special agent|名詞|Anh ta đóng vai đặc vụ trong phim.|他在電影裡飾演特務。||特務
1389|quan sát|觀察|to observe|動詞|Hãy quan sát kỹ trước khi làm.|動手之前先仔細觀察。||觀察
1390|đội ngũ|團隊|team; staff|名詞|Đội ngũ bác sĩ ở đây rất giỏi.|這裡的醫師團隊很優秀。||隊伍
1391|quần|褲子|trousers|名詞|Cái quần này hơi dài.|這條褲子有點長。||
1392|âm nhạc|音樂|music|名詞|Tôi rất thích âm nhạc truyền thống.|我很喜歡傳統音樂。||音樂
1393|căn cứ|根據 / 基地|basis; according to|動詞|Căn cứ vào hợp đồng, bên mua phải trả trước.|根據合約，買方須先付款。||根據
1394|công cụ|工具|tool|名詞|Đây là công cụ học tiếng Việt rất tốt.|這是很好的越語學習工具。||工具
1395|lúa|稻子|rice plant|名詞|Nông dân đang gặt lúa.|農民正在割稻。|煮好的飯是 cơm，生米是 gạo|
1396|tạm|暫時|temporarily|副詞|Cửa hàng tạm đóng cửa.|商店暫停營業。|tạm biệt＝再見|暫
1397|cho dù|即使|even if|連詞|Cho dù khó, tôi cũng sẽ cố gắng.|即使困難，我也會努力。||
1398|tự tin|自信|confident|形容詞|Hãy tự tin nói tiếng Việt!|要有自信說越語！||自信
1399|cảnh báo|警告|to warn|動詞|Họ cảnh báo có bão lớn.|他們警告有強颱。||警報
1400|để ý|注意 / 留意|to notice|動詞|Tôi không để ý giờ.|我沒注意時間。||
1401|thông thường|通常|usually|副詞|Thông thường tôi ăn sáng lúc bảy giờ.|我通常七點吃早餐。||通常
1402|chán|無聊 / 膩|bored|形容詞|Ở nhà mãi chán quá.|一直待在家好無聊。||
1403|New York|SKIP
1404|xuân|春天|spring|名詞|Mùa xuân ở Hà Nội rất đẹp.|河內的春天很美。||春
1405|đối thủ|對手|rival|名詞|Họ là đối thủ cạnh tranh của chúng tôi.|他們是我們的競爭對手。||對手
1406|ờ|嗯 / 喔|uh; oh|感嘆詞|Ờ, để tôi nghĩ đã.|嗯，讓我想一下。|口語填充詞|
1407|mức độ|程度|degree; level|名詞|Mức độ ô nhiễm đang tăng.|污染程度正在上升。||
1408|hoá|化 / 變成|to become|動詞|Nước hoá thành băng khi rất lạnh.|很冷時水會變成冰。|hóa đơn＝發票|化
1409|làn|車道 / 一陣|lane; wisp|名詞|Xe máy phải đi đúng làn đường.|機車必須走在正確車道。||
1410|phương|方|direction; side|名詞|Mặt trời mọc ở phương Đông.|太陽從東方升起。||方
1411|đào|挖 / 桃子|to dig; peach|動詞|Họ đang đào đường để sửa ống nước.|他們正在挖路修水管。|hoa đào＝桃花（北部過年花）|
1412|Tây|西方 / 西洋|West; Western|名詞|Anh ấy thích ăn đồ Tây.|他喜歡吃西餐。|người Tây＝西方人|西
1413|quan điểm|觀點|viewpoint|名詞|Tôi tôn trọng quan điểm của bạn.|我尊重你的觀點。||觀點
1414|căng thẳng|緊張|stressed; tense|形容詞|Công việc dạo này rất căng thẳng.|最近工作壓力很大。||
1415|bỏ qua|略過 / 原諒|to skip; to let go|動詞|Lần này tôi bỏ qua cho bạn.|這次就原諒你了。||
1416|hầm|地窖 / 隧道 / 燉|cellar; tunnel; to stew|名詞|Xe đi qua hầm Hải Vân.|車子穿過海雲隧道。||
1417|trung bình|平均 / 中等|average|形容詞|Lương trung bình ở đây là bao nhiêu?|這裡的平均薪資是多少？||中平
1418|ngu|笨|stupid|形容詞|Đừng nói người khác ngu.|別說別人笨。|罵人用語，小心使用|愚
1419|cải thiện|改善|to improve|動詞|Tiếng Việt của tôi đã cải thiện nhiều.|我的越語進步很多。||改善
1420|cát|沙|sand|名詞|Trẻ em chơi trên cát.|小孩在沙灘上玩。||
1421|sắp xếp|安排 / 整理|to arrange|動詞|Để tôi sắp xếp thời gian.|讓我安排一下時間。||
1422|ngón|手指 / 腳趾|finger; toe|名詞|Ngón tay tôi bị đứt.|我的手指割傷了。||
1423|nghiệm|驗|to test; to verify|動詞|Thí nghiệm này rất thú vị.|這個實驗很有趣。|多見於 thí nghiệm、kinh nghiệm|驗
1424|xu hướng|趨勢|trend|名詞|Đây là xu hướng mới của giới trẻ.|這是年輕人的新趨勢。||趨向
1425|tỏ|表示 / 顯得|to express; to show|動詞|Anh ấy tỏ ra rất vui.|他顯得很開心。||
1426|dặm|英里|mile|量詞|Chỗ đó cách đây mấy dặm?|那裡離這裡幾英里？||
1427|đâm|刺 / 撞|to stab; to crash|動詞|Xe máy đâm vào cột điện.|機車撞上電線桿。||
1428|chị em|姊妹|sisters|名詞|Hai chị em rất thân nhau.|兩姊妹感情很好。||
1429|xưa|從前|old times|形容詞|Ngày xưa ở đây là cánh đồng.|以前這裡是一片田野。||
1430|gạo|米|uncooked rice|名詞|Một ký gạo bao nhiêu tiền?|一公斤米多少錢？||
1431|mông|屁股|buttocks|名詞|Bé ngã đau mông.|小孩摔到屁股好痛。||
1432|chở|載|to carry; to give a ride|動詞|Anh chở em ra sân bay nhé.|你載我去機場吧。||
1433|nhẹ nhàng|輕柔 / 溫和|gentle|形容詞|Cô ấy nói chuyện rất nhẹ nhàng.|她說話很溫柔。||
1434|sinh hoạt|生活 / 日常活動|daily life; activities|名詞|Chi phí sinh hoạt ở Hà Nội khá cao.|河內的生活費相當高。||生活
1435|tế bào|細胞|cell|名詞|Cơ thể có hàng tỷ tế bào.|人體有數十億個細胞。||細胞
1436|săn|打獵 / 搶（便宜）|to hunt|動詞|Tôi thích săn vé máy bay giá rẻ.|我喜歡搶便宜機票。||
1437|thuyết phục|說服|to persuade|動詞|Tôi đã thuyết phục được sếp.|我說服了老闆。||說服
1438|khoa|科（系）|department; faculty|名詞|Anh học khoa nào?|你念哪個系？||科
1439|chờ đợi|等待|to wait|動詞|Xin lỗi đã để bạn chờ đợi.|抱歉讓你久等了。||
1440|kết hôn|結婚|to marry|動詞|Họ kết hôn năm ngoái.|他們去年結婚。||結婚
1441|bông|朵 / 棉花|flower (classifier); cotton|名詞|Anh tặng em một bông hồng.|我送你一朵玫瑰。||
1442|bật|打開（開關）|to turn on|動詞|Bật quạt lên giúp tôi.|請幫我開電扇。||
1443|hình thành|形成|to form|動詞|Thói quen tốt hình thành từ nhỏ.|好習慣從小養成。||形成
1444|nhiệt độ|溫度|temperature|名詞|Nhiệt độ hôm nay là ba mươi tư độ.|今天氣溫三十四度。||熱度
1445|xét|審查 / 考慮|to examine; to consider|動詞|Hồ sơ của bạn đang được xét.|你的資料正在審核中。||
1446|thế kỷ|世紀|century|名詞|Ngôi chùa này xây từ thế kỷ mười một.|這座寺廟建於十一世紀。||世紀
1447|kẻ thù|敵人|enemy|名詞|Đừng biến bạn thành kẻ thù.|別把朋友變成敵人。||
1448|dạo|最近 / 閒逛|lately; to stroll|副詞|Dạo này bạn khỏe không?|你最近好嗎？|đi dạo＝散步|
1449|hành chính|行政|administrative|形容詞|Giờ hành chính là từ tám giờ đến năm giờ.|辦公時間是八點到五點。||行政
1450|Hoa Kỳ|美國|the United States|名詞|Anh ấy du học ở Hoa Kỳ.|他在美國留學。|口語多說 Mỹ|花旗
1451|chứng kiến|目睹 / 見證|to witness|動詞|Tôi đã chứng kiến vụ tai nạn.|我目睹了那場車禍。||證見
1452|tâm lý|心理|psychology; mindset|名詞|Anh ấy hiểu tâm lý khách hàng.|他懂得顧客心理。||心理
1453|nổi bật|突出 / 顯眼|outstanding|形容詞|Chiếc áo đỏ rất nổi bật.|那件紅衣服很顯眼。||
1454|tự động|自動|automatic|形容詞|Cửa mở tự động.|門會自動打開。||自動
1455|tình huống|情況 / 情境|situation|名詞|Trong tình huống khẩn cấp, hãy gọi 115.|緊急情況請撥 115。||情況
1456|g|SKIP
1457|thanh toán|付款 / 結帳|to pay|動詞|Tôi muốn thanh toán bằng thẻ.|我想刷卡付款。||清算
1458|tôn trọng|尊重|to respect|動詞|Hãy tôn trọng văn hóa địa phương.|請尊重當地文化。||尊重
1459|thưởng|獎賞 / 獎金|reward; bonus|名詞|Cuối năm công ty có thưởng Tết.|年底公司有年終獎金。||賞
1460|tách|分開 / 杯（量詞）|to separate; cup|動詞|Tách lòng đỏ ra khỏi lòng trắng.|把蛋黃和蛋白分開。|một tách trà＝一杯茶|
1461|tâm|心 / 中心|heart; center|名詞|Đừng bận tâm chuyện nhỏ.|別為小事操心。||心
1462|nghỉ ngơi|休息|to rest|動詞|Bạn nên nghỉ ngơi nhiều hơn.|你應該多休息。||
1463|đấu|比賽 / 鬥|to compete; match|動詞|Hai đội đấu với nhau tối nay.|兩隊今晚對戰。||鬥
1464|nhập khẩu|進口|to import|動詞|Máy móc này được nhập khẩu từ Đức.|這些機器從德國進口。||入口
1465|đỉnh|頂峰|peak|名詞|Chúng tôi leo lên đỉnh Fansipan.|我們爬上番西邦峰。||頂
1466|á|啊（驚叫）|ah; ouch|感嘆詞|Á, đau quá!|啊，好痛！||
1467|âm thanh|聲音|sound|名詞|Âm thanh của loa này rất hay.|這個喇叭的聲音很好。||音聲
1468|lùi|後退|to move back|動詞|Anh lùi xe lại một chút.|你把車往後倒一點。||
1469|xăng|汽油|petrol|名詞|Xe máy của tôi sắp hết xăng.|我的機車快沒油了。||
1470|hành|蔥 / 洋蔥|green onion; onion|名詞|Cho thêm hành vào phở nhé.|河粉多加點蔥喔。|hành tây＝洋蔥|
1471|sợ hãi|害怕|frightened|形容詞|Đứa bé trông rất sợ hãi.|那孩子看起來很害怕。||
1472|thuận lợi|順利|favourable; smooth|形容詞|Chúc chuyến đi thuận lợi!|祝旅途順利！||順利
1473|ngắm|欣賞 / 觀看|to admire; to gaze|動詞|Chúng tôi ngắm hoàng hôn trên biển.|我們在海邊欣賞夕陽。||
1474|thôn|村|hamlet|名詞|Thôn này có khoảng hai trăm hộ.|這個村大約有兩百戶。||村
1475|tồi tệ|糟糕|terrible|形容詞|Hôm nay là một ngày tồi tệ.|今天真是糟糕的一天。||
1476|treo|掛|to hang|動詞|Treo áo lên móc giúp tôi.|請幫我把衣服掛到衣架上。||
1477|độc đáo|獨特|unique|形容詞|Kiến trúc ở Hội An rất độc đáo.|會安的建築很獨特。||獨到
1478|bàn tay|手掌|hand|名詞|Bàn tay em lạnh quá.|你的手好冰。||
1479|lạc|迷路 / 花生|to get lost; peanut|動詞|Tôi bị lạc ở phố cổ.|我在古街迷路了。|北部 lạc＝花生（南部 đậu phộng）|
1480|nụ|花苞 / 笑容的量詞|bud; classifier for smiles|名詞|Cô ấy có nụ cười rất đẹp.|她的笑容很美。||
1481|hiện tượng|現象|phenomenon|名詞|Đây là hiện tượng tự nhiên.|這是自然現象。||現象
1482|tối đa|最多 / 最大|maximum|形容詞|Mỗi phòng tối đa bốn người.|每間房最多四人。||最多
1483|báo chí|新聞界 / 報刊|press|名詞|Báo chí đưa tin về vụ việc này.|媒體報導了這件事。||報誌
1484|sam|SKIP
1485|động cơ|引擎 / 動機|engine; motive|名詞|Động cơ xe bị nóng quá.|車子引擎太熱了。||動機
1486|hoàn cảnh|處境 / 環境|circumstances|名詞|Gia đình anh ấy có hoàn cảnh khó khăn.|他家境困難。||環境
1487|đạo đức|道德|morality|名詞|Đó là vấn đề đạo đức.|那是道德問題。||道德
1488|đỡ|扶 / 接 / 好轉|to support; to feel better|動詞|Tôi đã đỡ đau đầu rồi.|我頭痛好多了。||
1489|ả|那女人（貶）|that woman (dismissive)|代名詞|Ả ta không đáng tin.|那女人不可信。|語氣輕蔑，避免使用|
1490|bớt|減少 / 少算|to reduce|動詞|Bớt cho em mười nghìn nhé.|算我便宜一萬吧。||
1491|lỡ|錯過 / 萬一|to miss; in case|動詞|Tôi lỡ chuyến xe cuối rồi.|我錯過末班車了。||
1492|bơi|游泳|to swim|動詞|Bạn biết bơi không?|你會游泳嗎？||
1493|thành phần|成分 / 成員|component; ingredient|名詞|Thành phần của món này gồm những gì?|這道菜有哪些成分？||成分
1494|thảo luận|討論|to discuss|動詞|Chúng ta thảo luận vấn đề này nhé.|我們來討論這個問題吧。||討論
1495|mèo|貓|cat|名詞|Nhà tôi có hai con mèo.|我家有兩隻貓。||
1496|quá khứ|過去|the past|名詞|Đừng nghĩ về quá khứ nữa.|別再想過去了。||過去
1497|mi|你（粗俗，中部）/ 睫毛|you (rude); eyelash|代名詞|Mi đi đâu đó?|你去哪裡？|中部方言、朋友間用；lông mi＝睫毛|
1498|giải thưởng|獎項|award|名詞|Bộ phim đã đoạt giải thưởng lớn.|這部電影拿了大獎。||解賞
1499|trúng|中（獎）/ 打中|to hit; to win|動詞|Tôi trúng xổ số!|我中樂透了！||中
1500|làm ăn|做生意|to do business|動詞|Dạo này làm ăn thế nào?|最近生意怎麼樣？||
1501|chiến|戰 / 超讚（口語）|to fight; awesome (slang)|動詞|Hai bên chiến đấu suốt đêm.|雙方戰鬥了一整夜。|年輕人說 chiến quá＝太猛了|戰
1502|hài lòng|滿意|satisfied|形容詞|Khách hàng rất hài lòng với dịch vụ.|客戶對服務很滿意。||
1503|khó chịu|不舒服 / 不爽|uncomfortable; annoyed|形容詞|Tôi thấy hơi khó chịu trong người.|我覺得身體有點不舒服。||
1504|thống nhất|統一 / 一致同意|unified; to agree|動詞|Hai bên đã thống nhất kế hoạch.|雙方已就計畫達成一致。||統一
1505|phiên|場（會議、審判）/ 次|session|名詞|Phiên họp bắt đầu lúc hai giờ.|會議兩點開始。||番
1506|thực ra|其實|actually|副詞|Thực ra tôi không thích cà phê.|其實我不喜歡咖啡。||
1507|thủ|守 / 手|to guard; hand (Sino)|名詞|Thủ môn bắt bóng rất giỏi.|守門員接球很厲害。|thủ môn＝守門員|守
1508|cử|派遣 / 推舉|to send; to appoint|動詞|Công ty cử tôi sang Việt Nam làm việc.|公司派我到越南工作。||舉
1509|nha|喔（南部句尾）/ 牙|okay? (Southern); tooth (Sino)|助詞|Mai gặp nha!|明天見喔！|北部說 nhé；nha khoa＝牙科|
1510|chừng|大約 / 程度|about; extent|副詞|Chừng mười phút nữa tôi tới.|大約再十分鐘我到。||
1511|gương|鏡子 / 榜樣|mirror; example|名詞|Cô ấy đứng trước gương.|她站在鏡子前。||
1512|bạc|銀 / 錢|silver; money|名詞|Chiếc nhẫn này bằng bạc.|這枚戒指是銀做的。||
1513|tham quan|參觀|to visit (a site)|動詞|Chúng tôi đi tham quan nhà máy.|我們去參觀工廠。||參觀
1514|tải|下載 / 載運|to download; to carry|動詞|Bạn tải ứng dụng này về máy nhé.|你把這個應用程式下載到手機吧。||
1515|mát|涼爽|cool|形容詞|Buổi tối trời mát hơn.|晚上天氣比較涼。||
1516|đám cưới|婚禮|wedding|名詞|Cuối tuần này tôi đi đám cưới bạn.|這週末我去參加朋友的婚禮。||
1517|hồng|粉紅 / 玫瑰 / 柿子|pink; rose; persimmon|形容詞|Cô ấy thích màu hồng.|她喜歡粉紅色。||紅
1518|quý vị|各位（敬稱）|ladies and gentlemen|代名詞|Kính thưa quý vị đại biểu.|各位貴賓好。|正式致詞的開場|貴位
1519|Huế|順化|Hue|名詞|Huế là cố đô của Việt Nam.|順化是越南的古都。||
1520|bột|粉|powder; flour|名詞|Bánh này làm từ bột gạo.|這種糕是用米粉做的。||
1521|tiết|節（課堂）/ 動物血|period (class); blood|名詞|Hôm nay tôi có bốn tiết học.|今天我有四堂課。|tiết canh＝生血凍（傳統菜）|節
1522|chà|哇（感嘆）/ 搓|wow; to rub|感嘆詞|Chà, nhà bạn đẹp quá!|哇，你家好漂亮！||
1523|đàn bà|女人（口語）|woman|名詞|Đàn bà ở đây rất chăm chỉ.|這裡的女人很勤勞。|正式說 phụ nữ|
1524|sợi|條 / 根（線狀量詞）|strand; fibre|量詞|Trên áo có một sợi tóc.|衣服上有一根頭髮。||
1525|im lặng|安靜 / 沉默|silent|形容詞|Xin giữ im lặng trong thư viện.|圖書館內請保持安靜。||
1526|tuyển|招募 / 選拔|to recruit|動詞|Công ty đang tuyển nhân viên kế toán.|公司正在招聘會計。||選
1527|Sài Gòn|西貢|Saigon|名詞|Sài Gòn là tên cũ của Thành phố Hồ Chí Minh.|西貢是胡志明市的舊名。|日常仍普遍使用|
1528|cổ phần|股份|share; stock|名詞|Anh ấy có cổ phần trong công ty này.|他在這家公司有股份。||股份
1529|ngôn ngữ|語言|language|名詞|Tiếng Việt là ngôn ngữ có sáu thanh điệu.|越南語是有六個聲調的語言。||言語
1530|thơm|香 / 鳳梨（南部）|fragrant; pineapple|形容詞|Bánh mì mới ra lò thơm quá.|剛出爐的麵包好香。||
1531|tan|融化 / 散（下課下班）|to melt; to end|動詞|Mấy giờ con tan học?|你幾點放學？|tan làm＝下班|
1532|em gái|妹妹|younger sister|名詞|Em gái tôi đang học đại học.|我妹妹正在念大學。||
1533|đậu|豆子 / 停（車）/ 考上|bean; to park; to pass|名詞|Tôi thích ăn chè đậu đen.|我喜歡吃黑豆甜湯。|南部 đậu xe＝停車；thi đậu＝考上|豆
1534|bụi|灰塵 / 灌木|dust; bush|名詞|Đường nhiều bụi quá.|路上灰塵好多。||
1535|năm học|學年|school year|名詞|Năm học mới bắt đầu vào tháng chín.|新學年在九月開始。||
1536|bất động sản|不動產 / 房地產|real estate|名詞|Anh ấy làm môi giới bất động sản.|他是房地產仲介。||不動產
1537|thành tích|成績 / 成就|achievement|名詞|Đội tuyển đạt thành tích tốt.|代表隊取得好成績。||成績
1538|lợi nhuận|利潤|profit|名詞|Lợi nhuận năm nay tăng mười phần trăm.|今年利潤增加百分之十。||利潤
1539|vĩ đại|偉大|great|形容詞|Đây là công trình vĩ đại.|這是偉大的工程。||偉大
1540|vô địch|冠軍 / 無敵|champion|名詞|Đội Việt Nam đã vô địch.|越南隊奪冠了。||無敵
1541|tài|才能 / 厲害|talent; talented|名詞|Anh ấy rất có tài.|他很有才華。|tài xế＝司機（另一個詞）|才
1542|bang|州（聯邦）|state|名詞|Mỹ có năm mươi bang.|美國有五十個州。||邦
1543|đổi mới|革新 / 創新|renovation|名詞|Công ty cần đổi mới cách làm việc.|公司需要革新工作方式。|Đổi Mới 也指 1986 年的革新開放政策|
1544|chiến dịch|戰役 / 宣傳活動|campaign|名詞|Công ty mở chiến dịch quảng cáo mới.|公司推出新的廣告活動。||戰役
1545|xử|處理 / 審判|to handle; to judge|動詞|Việc này anh xử lý giúp em nhé.|這件事請你幫我處理。|xử lý＝處理|處
1546|chai|瓶|bottle|名詞|Cho tôi một chai nước suối.|請給我一瓶礦泉水。||
1547|ép|擠壓 / 強迫|to press; to force|動詞|Đừng ép tôi uống nữa.|別再逼我喝了。|nước ép＝果汁|
1548|ra đời|誕生 / 問世|to be born; to launch|動詞|Sản phẩm mới ra đời năm ngoái.|新產品去年問世。||
1549|lừa|騙 / 驢|to cheat; donkey|動詞|Cẩn thận kẻo bị lừa.|小心被騙。||
1550|thất vọng|失望|disappointed|形容詞|Tôi hơi thất vọng về kết quả.|我對結果有點失望。||失望
1551|thùng|箱 / 桶|box; barrel|名詞|Cho tôi một thùng nước.|請給我一箱水。||桶
1552|ngân sách|預算|budget|名詞|Dự án này vượt ngân sách.|這個專案超出預算。||銀冊
1553|chế biến|加工 / 烹調|to process|動詞|Nhà máy chế biến thủy sản.|這是水產加工廠。||製變
1554|đóng cửa|關門 / 停業|to close|動詞|Siêu thị đóng cửa lúc mười giờ tối.|超市晚上十點關門。||
1555|hưởng|享受 / 享有|to enjoy; to receive|動詞|Nhân viên được hưởng lương tháng mười ba.|員工享有第十三個月薪資。||享
1556|sắc|鋒利 / 顏色|sharp; colour|形容詞|Con dao này rất sắc.|這把刀很鋒利。|dấu sắc＝銳聲符號|
1557|dì|阿姨（母親的姊妹）|aunt (mother's sister)|代名詞|Dì tôi sống ở Cần Thơ.|我阿姨住在芹苴。||姨
1558|hoàn thiện|完善|to perfect|動詞|Chúng tôi đang hoàn thiện sản phẩm.|我們正在完善產品。||完善
1559|dọn|整理 / 搬（家）|to tidy; to move|動詞|Cuối tuần tôi dọn nhà mới.|週末我搬新家。|dọn dẹp＝打掃|
1560|ghé|順道去|to drop by|動詞|Tiện đường ghé nhà tôi chơi nhé.|順路來我家坐坐吧。||
1561|hòn|（石、島的）量詞|classifier for stones, islands|量詞|Vịnh Hạ Long có hàng nghìn hòn đảo.|下龍灣有上千座島嶼。||
1562|thiên nhiên|大自然|nature|名詞|Tôi thích cảnh thiên nhiên ở Sa Pa.|我喜歡沙壩的自然風光。||天然
1563|trang trí|裝飾|to decorate|動詞|Nhà được trang trí rất đẹp cho Tết.|家裡為過年佈置得很漂亮。||裝置
1564|im|安靜|quiet|形容詞|Im nào, em bé đang ngủ.|安靜，小寶寶在睡覺。||
1565|bản đồ|地圖|map|名詞|Anh xem bản đồ giúp tôi.|請幫我看地圖。||版圖
1566|công nhân|工人|worker|名詞|Nhà máy có năm trăm công nhân.|工廠有五百名工人。||工人
1567|nhận thức|認知 / 意識|awareness|名詞|Cần nâng cao nhận thức về môi trường.|需要提升環保意識。||認識
1568|sinh nhật|生日|birthday|名詞|Hôm nay là sinh nhật của mẹ tôi.|今天是我媽媽的生日。||生日
1569|lộ|洩露 / 路|to reveal; road|動詞|Bí mật đã bị lộ.|秘密已經洩露了。|quốc lộ＝國道|露
1570|tạp chí|雜誌|magazine|名詞|Tôi đọc tạp chí kinh tế mỗi tuần.|我每週讀經濟雜誌。||雜誌
1571|mệt mỏi|疲倦|tired; weary|形容詞|Sau chuyến bay dài, tôi rất mệt mỏi.|長途飛行後我很疲憊。||
1572|nối|連接|to connect|動詞|Nối dây này vào ổ cắm.|把這條線接到插座。||
1573|quản trị|管理（經營）|administration|名詞|Anh ấy học quản trị kinh doanh.|他念企業管理。||管治
1574|leo|爬|to climb|動詞|Chúng tôi leo núi vào sáng sớm.|我們一大早去爬山。||
1575|phần lớn|大部分|the majority|名詞|Phần lớn nhân viên là người địa phương.|大部分員工是當地人。||
1576|tập thể|集體|collective|名詞|Đây là thành tích của cả tập thể.|這是整個團隊的成就。||集體
1577|kiến trúc|建築|architecture|名詞|Kiến trúc Pháp ở Hà Nội rất đẹp.|河內的法式建築很美。||建築
1578|chiếu|放映 / 照射 / 草蓆|to screen; to shine; mat|動詞|Rạp đang chiếu phim mới.|電影院正在上映新片。||照
1579|kích thước|尺寸|size; dimensions|名詞|Kích thước hộp là bao nhiêu?|箱子的尺寸是多少？||
1580|hành trình|旅程|journey|名詞|Hành trình từ Bắc vào Nam mất hai ngày.|從北到南的旅程要兩天。||行程
1581|đòi|要求 / 討|to demand|動詞|Khách đòi đổi phòng khác.|客人要求換房間。||
1582|lưu ý|注意|to note|動詞|Xin lưu ý: cửa hàng đóng cửa sớm hôm nay.|請注意：今天商店提早關門。||留意
1583|cổ phiếu|股票|stock|名詞|Giá cổ phiếu tăng mạnh hôm nay.|今天股價大漲。||股票
1584|phạm|犯|to commit (error, crime)|動詞|Ai cũng có thể phạm lỗi.|每個人都可能犯錯。||犯
1585|ca sĩ|歌手|singer|名詞|Cô ấy là ca sĩ nổi tiếng.|她是知名歌手。||歌士
1586|cỡ|尺寸 / 大約|size; about|名詞|Anh mặc áo cỡ nào?|你穿幾號的衣服？||
1587|phiền|麻煩 / 打擾|to bother|動詞|Xin lỗi đã làm phiền anh.|抱歉打擾你了。||煩
1588|anh trai|哥哥|older brother|名詞|Anh trai tôi làm việc ở Đài Bắc.|我哥哥在台北工作。||
1589|thuyền trưởng|船長|captain (ship)|名詞|Thuyền trưởng thông báo tàu sắp cập bến.|船長廣播船即將靠岸。||船長
1590|tóm|抓住 / 概括|to grab; to sum up|動詞|Tóm lại, dự án đã thành công.|總之，專案成功了。|tóm tắt＝摘要|
1591|giải trí|娛樂|entertainment|名詞|Cuối tuần bạn giải trí bằng cách nào?|週末你怎麼娛樂？||
1592|khổng lồ|巨大|giant|形容詞|Con tàu này khổng lồ.|這艘船非常巨大。||
1593|ngăn chặn|阻止|to prevent|動詞|Cần ngăn chặn hàng giả.|需要遏止假貨。||
1594|áp lực|壓力|pressure|名詞|Công việc này có nhiều áp lực.|這份工作壓力很大。||壓力
1595|đại hội|大會|congress|名詞|Đại hội cổ đông diễn ra vào tháng tư.|股東大會在四月舉行。||大會
1596|động vật|動物|animal|名詞|Con yêu thích động vật.|孩子很喜歡動物。||動物
1597|chứng|症 / 證|symptom; proof|名詞|Bà tôi bị chứng mất ngủ.|我奶奶有失眠症。||症
1598|quân sự|軍事|military|名詞|Đây là khu vực quân sự.|這裡是軍事區。||軍事
1599|công bằng|公平|fair|形容詞|Như vậy là không công bằng.|這樣不公平。||公平
1600|tín dụng|信用|credit|名詞|Tôi thanh toán bằng thẻ tín dụng.|我用信用卡付款。||信用
1601|đăng|發布 / 登記|to post; to register|動詞|Tôi đăng ảnh lên Facebook.|我把照片發到臉書。|đăng ký＝登記|登
1602|nghệ sĩ|藝術家 / 藝人|artist|名詞|Anh ấy là nghệ sĩ múa rối nước.|他是水上木偶表演藝術家。||藝士
1603|đa dạng|多樣|diverse|形容詞|Ẩm thực Việt Nam rất đa dạng.|越南飲食非常多樣。||多樣
1604|đĩa|盤子 / 光碟|plate; disc|名詞|Cho tôi thêm một đĩa rau.|請再給我一盤菜。|南部也說 dĩa|
1605|cờ|旗 / 棋|flag; chess|名詞|Lá cờ Việt Nam màu đỏ sao vàng.|越南國旗是紅底黃星。|chơi cờ＝下棋|旗
1606|cột|柱子 / 欄|pillar; column|名詞|Xe đâm vào cột điện.|車子撞上電線桿。||
1607|yêu thương|疼愛|to love; to cherish|動詞|Bố mẹ rất yêu thương con cái.|父母很疼愛孩子。||
1608|xứ|地方 / 國度|land; region|名詞|Anh ấy sống ở xứ lạ một mình.|他獨自住在異鄉。|xứ sở＝國度|處
1609|thời tiết|天氣|weather|名詞|Thời tiết hôm nay thế nào?|今天天氣怎麼樣？||時節
1610|mãi mãi|永遠|forever|副詞|Tôi sẽ nhớ bạn mãi mãi.|我會永遠記得你。||
1611|biểu diễn|表演|to perform|動詞|Ban nhạc sẽ biểu diễn tối nay.|樂團今晚會表演。||表演
1612|năm ngoái|去年|last year|副詞|Năm ngoái tôi đi Nhật.|去年我去了日本。||
1613|toàn cầu|全球|global|形容詞|Biến đổi khí hậu là vấn đề toàn cầu.|氣候變遷是全球問題。||全球
1614|lông|毛 / 羽毛|hair (body); feather|名詞|Con mèo rụng lông nhiều quá.|貓掉毛好嚴重。||
1615|tha thứ|原諒|to forgive|動詞|Xin hãy tha thứ cho tôi.|請原諒我。||
1616|thông|通 / 松樹|to unblock; pine|動詞|Đà Lạt có nhiều rừng thông.|大叻有很多松樹林。|thông tin＝資訊|通
1617|cảng|港口|port|名詞|Hàng sẽ cập cảng Hải Phòng vào thứ hai.|貨物星期一抵達海防港。||港
1618|thép|鋼|steel|名詞|Công ty xuất khẩu thép sang Mỹ.|公司出口鋼材到美國。||
1619|độc|有毒 / 獨|poisonous; unique|形容詞|Loại nấm này rất độc.|這種菇毒性很強。|độc thân＝單身|毒
1620|người yêu|戀人|boyfriend; girlfriend|名詞|Người yêu tôi là người Đà Nẵng.|我的戀人是峴港人。||
1621|khớp|關節 / 吻合|joint; to match|名詞|Ông tôi bị đau khớp gối.|我爺爺膝關節痛。||
1622|nhà thờ|教堂|church|名詞|Nhà thờ Đức Bà là điểm du lịch nổi tiếng.|聖母大教堂是知名景點。||
1623|học viên|學員|trainee; student|名詞|Lớp này có hai mươi học viên.|這個班有二十名學員。||學員
1624|thổi|吹|to blow|動詞|Gió thổi mạnh quá.|風吹得好強。||
1625|phát huy|發揮|to promote; to bring into play|動詞|Hãy phát huy điểm mạnh của bạn.|發揮你的長處吧。||發揮
1626|bóng đá|足球|football|名詞|Người Việt rất mê bóng đá.|越南人很熱愛足球。||
1627|lực|力|force|名詞|Máy này có lực rất mạnh.|這台機器力道很強。|nỗ lực＝努力|力
1628|chặn|擋 / 封鎖|to block|動詞|Đường bị chặn vì sửa cầu.|路因修橋被封鎖。||
1629|dựng|豎立 / 建|to erect; to set up|動詞|Họ dựng lều trên bãi biển.|他們在海灘上搭帳篷。||
1630|lịch|日曆 / 行程|calendar; schedule|名詞|Lịch làm việc tuần này rất kín.|這週行程很滿。|lịch sự＝有禮貌|曆
1631|vi|微|micro-|形容詞|Vi khuẩn có thể gây bệnh.|細菌可能致病。|多見於 vi khuẩn、vi phạm|微
1632|ga|車站 / 瓦斯|station; gas|名詞|Ga Hà Nội ở đường Lê Duẩn.|河內火車站在黎筍路。|nước có ga＝氣泡水|
1633|kịp thời|及時|in time|副詞|Cảm ơn bạn đã giúp kịp thời.|謝謝你及時幫忙。||及時
1634|phạt|處罰 / 罰款|to fine; to punish|動詞|Anh bị phạt vì vượt đèn đỏ.|你因闖紅燈被罰款。||罰
1635|thời kỳ|時期|period|名詞|Đây là thời kỳ khó khăn của công ty.|這是公司的艱困時期。||時期
1636|Ấn Độ|印度|India|名詞|Món cà ri này kiểu Ấn Độ.|這道咖哩是印度風味。||印度
1637|bận|忙|busy|形容詞|Hôm nay tôi bận lắm.|今天我很忙。||
1638|hương|香氣 / 香|fragrance; incense|名詞|Hương hoa sữa rất đặc biệt.|奶花的香氣很特別。|thắp hương＝上香|香
1639|đối tác|合作夥伴|partner|名詞|Họ là đối tác lâu năm của chúng tôi.|他們是我們多年的合作夥伴。||對作
1640|pin|電池|battery|名詞|Điện thoại sắp hết pin.|手機快沒電了。||
1641|trôi|漂 / 流逝|to drift; to pass|動詞|Thời gian trôi nhanh quá.|時間過得好快。||
1642|quy mô|規模|scale|名詞|Nhà máy có quy mô lớn.|工廠規模很大。||規模
1643|đáp|回答 / 降落|to answer; to land|動詞|Máy bay đã đáp xuống an toàn.|飛機已安全降落。||答
1644|hằng|每 / 經常|every; constantly|副詞|Hằng ngày tôi đi bộ ba mươi phút.|我每天走路三十分鐘。||恆
1645|chủ động|主動|proactive|形容詞|Hãy chủ động hỏi khi không hiểu.|不懂時要主動發問。||主動
1646|di động|行動 / 手機|mobile|形容詞|Số di động của bạn là gì?|你的手機號碼是多少？|điện thoại di động＝手機|移動
1647|xuyên|穿過 / 貫穿|through|動詞|Đường hầm xuyên qua núi.|隧道穿過山。|thường xuyên＝經常|穿
1648|lát|一會兒 / 片 / 鋪|moment; slice|名詞|Đợi tôi một lát nhé.|等我一下喔。||
1649|thần kinh|神經|nerve|名詞|Bác sĩ khám thần kinh cho bệnh nhân.|醫生為病人做神經檢查。||神經
1650|thống kê|統計|statistics|名詞|Theo thống kê, số du khách tăng mạnh.|根據統計，遊客人數大增。||統計
1651|dinh dưỡng|營養|nutrition|名詞|Trẻ em cần ăn đủ dinh dưỡng.|兒童需要攝取足夠營養。||營養
1652|hẹn hò|約會|to date|動詞|Họ đang hẹn hò.|他們正在交往。||
1653|đền|廟 / 賠償|temple; to compensate|名詞|Đền Ngọc Sơn nằm trên hồ Hoàn Kiếm.|玉山祠位於還劍湖上。|đền bù＝賠償|
1654|nướng|烤|to grill|動詞|Tôi thích ăn thịt nướng.|我喜歡吃烤肉。||
1655|thí nghiệm|實驗|experiment|名詞|Học sinh đang làm thí nghiệm.|學生正在做實驗。||試驗
1656|khủng bố|恐怖攻擊|terrorism|名詞|Sân bay tăng cường an ninh chống khủng bố.|機場加強反恐安檢。||恐怖
1657|công nhận|承認 / 認可|to recognize|動詞|Bằng cấp này được công nhận ở nhiều nước.|這個學歷在許多國家受到認可。||公認
1658|giới hạn|限制 / 界限|limit|名詞|Tốc độ giới hạn là sáu mươi km/h.|速限是時速六十公里。||界限
1659|mai|明天 / 梅花（黃梅）|tomorrow; apricot blossom|副詞|Mai tôi bay về Đài Loan.|明天我飛回台灣。|南部過年擺黃梅 hoa mai|
1660|công viên|公園|park|名詞|Chúng tôi đi dạo trong công viên.|我們在公園散步。||公園
1661|kín|密閉 / 祕密|closed; secret|形容詞|Nhớ đóng kín cửa sổ.|記得把窗戶關緊。||
1662|mượn|借（用）|to borrow|動詞|Cho tôi mượn cây bút.|借我一支筆。||
1663|trình độ|程度 / 水準|level|名詞|Trình độ tiếng Việt của bạn khá tốt.|你的越語程度相當好。||程度
1664|cộng|加 / 合計|plus; to add|動詞|Hai cộng ba bằng năm.|二加三等於五。||共
1665|sang trọng|豪華 / 高雅|luxurious|形容詞|Nhà hàng này rất sang trọng.|這家餐廳很高級。||
1666|tủ|櫃子|cabinet; wardrobe|名詞|Quần áo để trong tủ.|衣服放在衣櫃裡。|tủ lạnh＝冰箱|
1667|chia tay|分手 / 告別|to break up; to part|動詞|Họ đã chia tay rồi.|他們已經分手了。||
1668|ưu tiên|優先|priority|動詞|Ghế này ưu tiên cho người già.|這是博愛座（優先給老人）。||優先
1669|bài học|課 / 教訓|lesson|名詞|Đây là bài học đắt giá.|這是寶貴的教訓。||
1670|Hùng|雄（人名、雄王）|Hung (name)|名詞|Giỗ Tổ Hùng Vương là ngày lễ lớn.|雄王祭祖日是重要節日。||雄
1671|phỏng vấn|面試 / 採訪|interview|動詞|Ngày mai tôi đi phỏng vấn xin việc.|明天我去面試工作。||訪問
1672|tôm|蝦|shrimp|名詞|Tôi bị dị ứng tôm.|我對蝦子過敏。||
1673|thực|實 / 食|real; food (Sino)|形容詞|Đây là chuyện có thực.|這是真實的事情。|thực phẩm＝食品|實
1674|công chúa|公主|princess|名詞|Con gái tôi thích truyện công chúa.|我女兒喜歡公主故事。||公主
1675|muối|鹽|salt|名詞|Cho thêm một chút muối.|再加一點鹽。||
1676|vận chuyển|運輸|to transport|動詞|Phí vận chuyển đã bao gồm chưa?|運費包含了嗎？||運轉
1677|đáng kể|相當可觀|considerable|形容詞|Giá đã giảm đáng kể.|價格已大幅下降。||
1678|huấn luyện|訓練|to train|動詞|Huấn luyện viên rất nghiêm khắc.|教練很嚴格。||訓練
1679|chìa khoá|鑰匙|key|名詞|Tôi làm mất chìa khoá rồi.|我把鑰匙弄丟了。||
1680|kinh|經（佛經）/ 京城|sutra; capital|名詞|Bà đang đọc kinh.|奶奶正在念經。|kinh tế 中的 kinh 是「經」|經
1681|xoay|轉|to turn; to rotate|動詞|Xoay núm này để mở.|轉這個旋鈕就能打開。||
1682|độc lập|獨立|independent|形容詞|Con tôi rất độc lập.|我的孩子很獨立。||獨立
1683|rác|垃圾|rubbish|名詞|Vứt rác đúng nơi quy định.|垃圾請丟到指定地點。||
1684|phủ|覆蓋 / 府|to cover; office|動詞|Núi phủ đầy sương mù.|山被濃霧籠罩。|chính phủ＝政府|覆
1685|tiếp xúc|接觸|to contact|動詞|Tránh tiếp xúc với người bị cúm.|避免接觸流感患者。||接觸
1686|béo|胖 / 油膩（北部）|fat|形容詞|Dạo này tôi hơi béo.|最近我有點胖。|南部說 mập|
1687|tốn|花費 / 耗費|to cost; to consume|動詞|Đi taxi tốn nhiều tiền lắm.|搭計程車很花錢。||損
1688|đếm|數（數）|to count|動詞|Bé đã biết đếm đến một trăm.|小朋友已經會數到一百了。||
1689|phụ thuộc|依賴 / 取決於|to depend on|動詞|Giá phụ thuộc vào số lượng.|價格取決於數量。||附屬
1690|bả|她（南部口語）/ 誘餌|she (Southern)|代名詞|Bả nói mai bả tới.|她說她明天來。|bà ấy 的南部縮音|
1691|linh hồn|靈魂|soul|名詞|Âm nhạc là linh hồn của bộ phim.|音樂是這部電影的靈魂。||靈魂
1692|khuôn mặt|臉龐|face|名詞|Cô ấy có khuôn mặt tròn.|她有一張圓臉。||
1693|quái vật|怪物|monster|名詞|Phim này có con quái vật rất đáng sợ.|這部電影的怪物很可怕。||怪物
1694|thiệt|損失 / 真的（南部）|loss; really (South)|動詞|Mua cái này thiệt quá.|買這個太吃虧了。|南部 thiệt＝thật（真的）|
1695|gương mặt|面孔|face|名詞|Đây là gương mặt mới của làng nhạc.|這是樂壇的新面孔。||
1696|tượng|雕像|statue|名詞|Tượng Phật ở chùa rất lớn.|寺裡的佛像很大。||像
1697|phản bội|背叛|to betray|動詞|Anh ấy đã phản bội bạn bè.|他背叛了朋友。||反背
1698|giận|生氣|angry|形容詞|Đừng giận tôi nhé.|別生我的氣喔。||
1699|lô|批（貨）/ 地塊|batch; lot|名詞|Lô hàng này bị lỗi nhiều.|這批貨瑕疵很多。||
1700|từ bỏ|放棄|to give up|動詞|Đừng từ bỏ ước mơ của mình.|別放棄你的夢想。||
1701|giấy tờ|證件 / 文件|papers; documents|名詞|Anh mang đủ giấy tờ chưa?|你證件帶齊了嗎？||
1702|địch|敵人|enemy|名詞|Quân địch đã rút lui.|敵軍已經撤退。||敵
1703|phát hành|發行|to release; to issue|動詞|Sách sẽ được phát hành tháng sau.|書將在下個月發行。||發行
1704|thủ đô|首都|capital|名詞|Hà Nội là thủ đô của Việt Nam.|河內是越南的首都。||首都
1705|khung|框|frame|名詞|Khung ảnh này đẹp quá.|這個相框好漂亮。||
1706|khắc phục|克服 / 修復|to overcome; to fix|動詞|Chúng tôi sẽ khắc phục sự cố ngay.|我們會立刻排除故障。||克服
1707|hậu quả|後果|consequence|名詞|Uống rượu lái xe gây hậu quả nghiêm trọng.|酒駕會造成嚴重後果。||後果
1708|coi chừng|小心|watch out|動詞|Coi chừng xe!|小心車子！|北部常說 cẩn thận|
1709|rồng|龍|dragon|名詞|Cầu Rồng phun lửa vào tối cuối tuần.|龍橋週末晚上會噴火。||
1710|hàng loạt|大量 / 一連串|a series of|形容詞|Công ty tung ra hàng loạt sản phẩm mới.|公司推出一系列新產品。||
1711|mua sắm|購物|to shop|動詞|Cuối tuần tôi đi mua sắm.|週末我去購物。||
1712|tuyên truyền|宣傳|to promote; propaganda|動詞|Họ tuyên truyền về an toàn giao thông.|他們宣導交通安全。||宣傳
1713|dọc|沿著 / 直的|along; vertical|介詞|Chúng tôi đi dạo dọc bờ sông.|我們沿著河岸散步。||
1714|lưu|儲存 / 留|to save; to keep|動詞|Nhớ lưu file trước khi tắt máy.|關機前記得存檔。||留
1715|mộ|墓|grave|名詞|Tết Thanh minh, gia đình đi tảo mộ.|清明節全家去掃墓。||墓
1716|sân khấu|舞台|stage|名詞|Ca sĩ bước lên sân khấu.|歌手走上舞台。||
1717|tổng số|總數|total|名詞|Tổng số khách là hai trăm người.|客人總數是兩百人。||總數
1718|cỏ|草|grass|名詞|Không được giẫm lên cỏ.|請勿踐踏草地。||
1719|đề tài|題材 / 主題|subject; topic|名詞|Đề tài luận văn của tôi về du lịch.|我的論文題目是關於觀光。||題材
1720|mạch|脈搏 / 電路|pulse; circuit|名詞|Bác sĩ bắt mạch cho tôi.|醫生幫我把脈。||脈
1721|uy tín|信譽|reputation|名詞|Đây là công ty có uy tín.|這是一家信譽良好的公司。||威信
1722|Thái Lan|泰國|Thailand|名詞|Tôi từng làm việc ở Thái Lan.|我曾在泰國工作。||泰蘭
1723|bà con|親戚 / 鄉親|relatives; folks|名詞|Bà con trong xóm rất tốt bụng.|鄰里的鄉親都很熱心。||
1724|cam kết|承諾|to commit|動詞|Chúng tôi cam kết hoàn tiền nếu hàng lỗi.|我們承諾商品有瑕疵就退款。||甘結
1725|chấm dứt|終止|to end|動詞|Hai bên chấm dứt hợp đồng.|雙方終止合約。||
1726|lao|結核病 / 衝|tuberculosis; to rush|動詞|Chiếc xe lao nhanh qua ngã tư.|那輛車快速衝過十字路口。|lao động＝勞動（另一詞）|
1727|mét|公尺|metre|量詞|Hồ bơi dài năm mươi mét.|游泳池長五十公尺。||
1728|đa|多 / 榕樹|multi-; banyan|形容詞|Đa số người dân dùng xe máy.|大多數民眾騎機車。|cây đa＝榕樹|多
1729|nhiễm|感染 / 沾染|to be infected|動詞|Vết thương bị nhiễm trùng.|傷口感染了。||染
1730|triệu chứng|症狀|symptom|名詞|Triệu chứng của bạn là gì?|你有什麼症狀？||兆症
1731|người thân|親人|relatives|名詞|Tết là dịp sum họp với người thân.|過年是和家人團聚的時候。||
1732|vải|布 / 荔枝|fabric; lychee|名詞|Áo này làm bằng vải cotton.|這件衣服是棉布做的。|quả vải＝荔枝|
1733|trình bày|說明 / 簡報|to present|動詞|Mời anh trình bày ý tưởng.|請你說明你的想法。||
1734|đâu đó|某處|somewhere|代名詞|Tôi để chìa khoá ở đâu đó trong phòng.|我把鑰匙放在房間某個地方。||
1735|ăn uống|飲食|eating and drinking|動詞|Bạn cần ăn uống điều độ.|你要飲食規律。||
1736|kích thích|刺激|to stimulate|動詞|Cà phê kích thích thần kinh.|咖啡會刺激神經。||激刺
1737|vừa mới|剛剛|just now|副詞|Tôi vừa mới về đến nhà.|我剛剛到家。||
1738|mệt|累|tired|形容詞|Hôm nay tôi mệt quá.|今天我好累。||
1739|cơ chế|機制|mechanism|名詞|Cơ chế này giúp giảm chi phí.|這個機制有助於降低成本。||機制
1740|môi|嘴唇|lip|名詞|Môi tôi bị khô.|我的嘴唇很乾。|môi trường＝環境（另一詞）|
1741|hầu hết|幾乎全部|almost all|限定詞|Hầu hết mọi người đều đồng ý.|幾乎所有人都同意。||
1742|diện|打扮 / 面|to dress up; aspect|動詞|Hôm nay chị diện đẹp quá!|妳今天打扮得好漂亮！||面
1743|ý thức|意識|awareness; conscious|名詞|Mọi người cần có ý thức giữ vệ sinh chung.|大家要有維護公共衛生的意識。||意識
1744|mô tả|描述|to describe|動詞|Anh mô tả người đó cho tôi nghe.|請你描述那個人給我聽。||模寫
1745|sơn|油漆|paint|名詞|Cẩn thận, sơn còn ướt!|小心，油漆未乾！||
1746|đề xuất|提出 / 建議|to propose|動詞|Tôi đề xuất tăng ngân sách quảng cáo.|我建議增加廣告預算。||提出
1747|vũ trụ|宇宙|universe|名詞|Con tôi thích đọc sách về vũ trụ.|我孩子喜歡讀宇宙的書。||宇宙
1748|huynh|兄（書面）|elder brother (literary)|名詞|Phụ huynh học sinh họp vào thứ bảy.|學生家長星期六開會。|多見於 phụ huynh（家長）|兄
1749|nguyên liệu|原料|raw material|名詞|Giá nguyên liệu tăng mạnh.|原料價格大漲。||原料
1750|thừa|多餘 / 剩|surplus|形容詞|Còn thừa nhiều đồ ăn.|還剩很多食物。||
1751|đệ|呈遞 / 弟（書面）|to submit; younger brother|動詞|Hồ sơ đã được đệ trình lên cấp trên.|資料已呈交上級。||遞
1752|trường học|學校|school|名詞|Trường học gần nhà tôi.|學校在我家附近。||
1753|ghi nhận|記錄 / 肯定|to record; to acknowledge|動詞|Công ty ghi nhận đóng góp của anh.|公司肯定你的貢獻。||記認
1754|thói quen|習慣|habit|名詞|Đọc sách mỗi tối là thói quen tốt.|每晚讀書是好習慣。||
1755|trưởng thành|成熟 / 長大|to grow up|動詞|Con bạn đã trưởng thành rồi.|你的孩子已經長大成人了。||長成
1756|gia tăng|增加|to increase|動詞|Số người dùng internet gia tăng nhanh.|網路使用者快速增加。||加增
1757|thúc đẩy|推動|to promote|動詞|Chính sách mới thúc đẩy đầu tư.|新政策推動投資。||
1758|đồng nghiệp|同事|colleague|名詞|Đồng nghiệp của tôi rất vui tính.|我的同事很風趣。||同業
1759|cứng|硬|hard|形容詞|Bánh này hơi cứng.|這個餅有點硬。||
1760|trẻ con|小孩 / 孩子氣|child; childish|名詞|Đừng cư xử như trẻ con.|別像小孩一樣。||
1761|vật liệu|材料|material|名詞|Vật liệu xây dựng tăng giá.|建材漲價了。||物料
1762|miêu tả|描寫|to describe|動詞|Bài văn miêu tả cảnh quê hương.|這篇文章描寫家鄉風景。||描寫
1763|thèm|想吃 / 渴望|to crave|動詞|Tôi đang thèm ăn phở.|我好想吃河粉。||
1764|tiêu thụ|消費 / 銷售|to consume; to sell|動詞|Xe này tiêu thụ ít xăng.|這台車很省油。||消受
1765|văn|文 / 文學|literature; writing|名詞|Con tôi học giỏi môn văn.|我孩子國文很好。||文
1766|chớ|不要（書面）|do not|副詞|Chớ nói dối người khác.|不要對別人說謊。|口語多用 đừng|
1767|thợ|師傅 / 技工|craftsman|名詞|Gọi thợ sửa ống nước giúp tôi.|幫我叫水電師傅。||
1768|xét nghiệm|檢驗 / 化驗|lab test|名詞|Kết quả xét nghiệm máu bình thường.|驗血結果正常。||
1769|tiêu diệt|消滅|to destroy|動詞|Thuốc này tiêu diệt vi khuẩn.|這種藥能消滅細菌。||消滅
1770|em trai|弟弟|younger brother|名詞|Em trai tôi mười tám tuổi.|我弟弟十八歲。||
1771|giải phóng|解放|to liberate|動詞|Ngày Giải phóng miền Nam là ba mươi tháng tư.|南方解放日是四月三十日。||解放
1772|phân phối|分配 / 經銷|to distribute|動詞|Công ty phân phối hàng trên toàn quốc.|公司在全國經銷商品。||分配
1773|tròn|圓|round|形容詞|Bàn tròn ngồi được tám người.|圓桌可以坐八個人。||
1774|vật chất|物質|material|名詞|Đời sống vật chất đã tốt hơn.|物質生活改善了。||物質
1775|đau đớn|痛苦|painful|形容詞|Đó là ký ức đau đớn.|那是痛苦的回憶。||
1776|lạy|跪拜 / 拜託|to kowtow; please|動詞|Lạy trời đừng mưa!|老天保佑別下雨！||
1777|phóng viên|記者|reporter|名詞|Phóng viên đang phỏng vấn người dân.|記者正在採訪民眾。||訪員
1778|trực tuyến|線上|online|形容詞|Lớp học trực tuyến bắt đầu lúc tám giờ.|線上課程八點開始。||直線
1779|dày|厚|thick|形容詞|Cuốn sách này dày quá.|這本書好厚。||
1780|phiếu|票 / 券|ticket; voucher|名詞|Tôi có phiếu giảm giá.|我有折價券。||票
1781|đại tá|上校|colonel|名詞|Ông ấy là đại tá về hưu.|他是退休上校。||大佐
1782|bi|彈珠 / 悲|marble; tragic|名詞|Bọn trẻ đang chơi bi.|孩子們在玩彈珠。|bi kịch＝悲劇|
1783|sĩ quan|軍官|officer|名詞|Anh trai tôi là sĩ quan hải quân.|我哥哥是海軍軍官。||士官
1784|hôn nhân|婚姻|marriage|名詞|Họ có cuộc hôn nhân hạnh phúc.|他們的婚姻很幸福。||婚姻
1785|tiêm|打針 / 注射|to inject|動詞|Em bé cần tiêm phòng.|小寶寶需要打預防針。||
1786|tính toán|計算 / 盤算|to calculate|動詞|Để tôi tính toán chi phí.|讓我算一下費用。||
1787|thế mà|然而 / 竟然|and yet|連詞|Đã hẹn rồi, thế mà anh ấy không đến.|已經約好了，他竟然沒來。||
1788|phương án|方案|plan; option|名詞|Chúng ta cần phương án dự phòng.|我們需要備案。||方案
1789|xoá|刪除|to delete|動詞|Tôi lỡ xoá ảnh rồi.|我不小心把照片刪了。||
1790|cởi|脫|to take off|動詞|Cởi giày trước khi vào nhà.|進屋前先脫鞋。||
1791|ra lệnh|下令|to order|動詞|Giám đốc ra lệnh tạm dừng sản xuất.|總經理下令暫停生產。||
1792|tham khảo|參考|to refer to|動詞|Anh tham khảo tài liệu này nhé.|你參考一下這份資料。||參考
1793|lãi suất|利率|interest rate|名詞|Lãi suất tiết kiệm đang giảm.|存款利率正在下降。||利率
1794|bắt cóc|綁架|to kidnap|動詞|Cảnh sát giải cứu nạn nhân bị bắt cóc.|警方救出被綁架的受害者。||
1795|mềm|軟|soft|形容詞|Gối này rất mềm.|這個枕頭很軟。||
1796|ca khúc|歌曲|song|名詞|Đây là ca khúc mới nhất của cô ấy.|這是她最新的歌曲。||歌曲
1797|xuất|出 / 開立|to issue; to export|動詞|Chị xuất hoá đơn cho công ty em nhé.|請幫我開公司發票。||出
1798|Trung|中部 / 中國|central; China|名詞|Tôi thích ăn món miền Trung.|我喜歡吃中部菜。||中
1799|đuôi|尾巴|tail|名詞|Con chó vẫy đuôi.|狗在搖尾巴。||
1800|điên rồ|瘋狂|crazy|形容詞|Đó là ý tưởng điên rồ.|那是個瘋狂的點子。||
1801|công đoàn|工會|trade union|名詞|Công đoàn tổ chức du lịch cho công nhân.|工會為工人舉辦旅遊。||工團
1802|chỉ số|指數|index|名詞|Chỉ số giá tiêu dùng tăng nhẹ.|消費者物價指數小幅上升。||指數
1803|chứng khoán|證券|securities|名詞|Anh ấy đầu tư chứng khoán.|他投資股票。||證券
1804|mặt hàng|品項 / 商品|item; product line|名詞|Mặt hàng này bán rất chạy.|這個品項賣得很好。||
1805|mọc|長出 / 升起|to grow; to rise|動詞|Mặt trời mọc lúc năm giờ rưỡi.|太陽五點半升起。||
1806|quyển|本（書的量詞）|classifier for books|量詞|Tôi mua hai quyển sách.|我買了兩本書。|南部多說 cuốn|卷
1807|loại bỏ|排除 / 去除|to eliminate|動詞|Cần loại bỏ sản phẩm lỗi.|需要剔除瑕疵品。||
1808|tiệm|店（南部）|shop|名詞|Tiệm này bán bánh mì rất ngon.|這家店的麵包很好吃。||
1809|bố trí|安排 / 佈置|to arrange|動詞|Phòng họp được bố trí cho hai mươi người.|會議室安排了二十人的座位。||佈置
1810|canh|湯 / 看守|soup; to guard|名詞|Tôi thích canh chua cá.|我喜歡魚酸湯。||
1811|đụng|碰撞 / 碰到|to bump into|動詞|Xe tôi bị đụng ở ngã tư.|我的車在十字路口被撞。||
1812|nhịp|節奏 / 拍子|rhythm; beat|名詞|Nhịp sống ở Sài Gòn rất nhanh.|西貢的生活節奏很快。||
1813|hiếm|稀少|rare|形容詞|Đây là loài chim rất hiếm.|這是很稀有的鳥類。||
1814|giờ đây|現在|now|副詞|Giờ đây cuộc sống đã khác nhiều.|如今生活已大不相同。||
1815|khuyến khích|鼓勵|to encourage|動詞|Thầy giáo khuyến khích học sinh đặt câu hỏi.|老師鼓勵學生提問。||勸激
1816|khởi động|啟動 / 暖身|to start; to warm up|動詞|Khởi động lại máy tính đi.|把電腦重新開機吧。||起動
1817|cao đẳng|專科學校|college|名詞|Em ấy học cao đẳng du lịch.|他讀觀光專科。||高等
1818|phóng|放大 / 發射 / 飆|to enlarge; to launch|動詞|Anh phóng to ảnh giúp tôi.|請幫我把照片放大。||放
1819|đồi|山丘|hill|名詞|Nhà nghỉ nằm trên đồi.|民宿在山丘上。||
1820|lợn|豬（北部）|pig|名詞|Thịt lợn hôm nay rẻ.|今天豬肉便宜。|南部說 heo|
1821|đại uý|上尉|captain (army)|名詞|Anh ấy là đại uý công an.|他是公安上尉。||大尉
1822|Hoàng|皇（人名常見）|Hoang (name); imperial|名詞|Hoàng thành Thăng Long là di sản thế giới.|昇龍皇城是世界遺產。||皇
1823|biên giới|邊界|border|名詞|Lào Cai giáp biên giới Trung Quốc.|老街省與中國接壤。||邊界
1824|rủi ro|風險|risk|名詞|Đầu tư nào cũng có rủi ro.|任何投資都有風險。||
1825|vết thương|傷口|wound|名詞|Vết thương cần được băng lại.|傷口需要包紮。||
1826|mất tích|失蹤|missing|動詞|Một ngư dân bị mất tích trên biển.|一名漁民在海上失蹤。||
1827|hy sinh|犧牲|to sacrifice|動詞|Mẹ đã hy sinh nhiều vì con.|媽媽為孩子犧牲很多。||犧牲
1828|kế toán|會計|accountant; accounting|名詞|Chị ấy làm kế toán ở công ty tôi.|她在我們公司當會計。||計算
1829|mũ|帽子|hat|名詞|Đội mũ bảo hiểm khi đi xe máy.|騎機車要戴安全帽。|南部說 nón|
1830|phó chủ tịch|副主席|vice chairman|名詞|Phó chủ tịch sẽ thay mặt phát biểu.|副主席將代表致詞。||副主席
1831|Phật|佛|Buddha|名詞|Bà tôi theo đạo Phật.|我奶奶信佛教。||佛
1832|rắn|蛇 / 堅硬|snake; hard|名詞|Trong vườn có rắn!|花園裡有蛇！||
1833|đam mê|熱愛 / 熱情|passion|名詞|Nấu ăn là đam mê của tôi.|做菜是我的熱情所在。||
1834|chất liệu|材質|material|名詞|Chất liệu áo này rất mát.|這件衣服的材質很涼爽。||質料
1835|chịu đựng|忍受|to endure|動詞|Tôi không chịu đựng được tiếng ồn.|我受不了噪音。||
1836|thiệt hại|損失|damage; loss|名詞|Cơn bão gây thiệt hại lớn.|颱風造成重大損失。||
1837|thắc mắc|疑問|question; to wonder|名詞|Nếu có thắc mắc, xin cứ hỏi.|如有疑問，請儘管問。||
1838|khúc|段 / 曲|section; piece|名詞|Cho tôi một khúc cá thu.|請給我一段鯖魚。||曲
1839|chức|職位|position|名詞|Anh ấy giữ chức giám đốc.|他擔任總經理一職。||職
1840|đánh bại|打敗|to defeat|動詞|Đội nhà đánh bại đối thủ hai bàn.|主隊以兩球擊敗對手。||
1841|biểu tượng|象徵 / 圖示|symbol; icon|名詞|Áo dài là biểu tượng của Việt Nam.|奧黛是越南的象徵。||表象
1842|truyện|故事|story|名詞|Bà kể truyện cổ tích cho cháu.|奶奶講童話故事給孫子聽。||傳
1843|bẫy|陷阱|trap|名詞|Cẩn thận, đây là cái bẫy!|小心，這是陷阱！||
1844|lắng nghe|傾聽|to listen carefully|動詞|Cảm ơn bạn đã lắng nghe.|謝謝你的傾聽。||
1845|nhựa|塑膠 / 樹脂|plastic|名詞|Hạn chế dùng túi nhựa.|少用塑膠袋。||
1846|thiết lập|建立 / 設定|to establish; to set up|動詞|Hai nước thiết lập quan hệ ngoại giao.|兩國建立外交關係。||設立
1847|cực kỳ|極其|extremely|副詞|Phong cảnh ở đây cực kỳ đẹp.|這裡的風景極美。||極奇
1848|giảng dạy|教學|to teach|動詞|Cô ấy giảng dạy ở trường đại học.|她在大學任教。||講
1849|địa ngục|地獄|hell|名詞|Kẹt xe giờ cao điểm như địa ngục.|尖峰時段塞車簡直是地獄。||地獄
1850|thư viện|圖書館|library|名詞|Tôi đọc sách ở thư viện.|我在圖書館看書。||書院
1851|toán|數學|mathematics|名詞|Con tôi giỏi toán.|我孩子數學很好。||算
1852|cầu nguyện|祈禱|to pray|動詞|Mọi người cầu nguyện cho nạn nhân.|大家為受難者祈禱。||求願
1853|ý định|打算 / 意圖|intention|名詞|Tôi có ý định mở quán cà phê.|我打算開一家咖啡店。||意定
1854|chủ nghĩa|主義|-ism|名詞|Đây là chủ nghĩa cá nhân.|這是個人主義。||主義
1855|tư tưởng|思想|thought; ideology|名詞|Ông ấy có tư tưởng rất tiến bộ.|他的思想很進步。||思想
1856|nhấn mạnh|強調|to emphasize|動詞|Giám đốc nhấn mạnh tầm quan trọng của chất lượng.|總經理強調品質的重要性。||
1857|cắm|插|to plug in; to stick in|動詞|Cắm sạc vào giúp tôi.|請幫我插上充電器。||
1858|ngoan|乖|well-behaved|形容詞|Con ngoan, mẹ thương.|乖孩子，媽媽疼你。||
1859|phân biệt|區分 / 歧視|to distinguish; to discriminate|動詞|Bạn phân biệt được dấu hỏi và dấu ngã không?|你分得出問聲和跌聲嗎？||分別
1860|khăn|毛巾 / 圍巾|towel; scarf|名詞|Cho tôi thêm một cái khăn tắm.|請再給我一條浴巾。||
1861|thử thách|挑戰|challenge|名詞|Đây là thử thách lớn với tôi.|這對我是很大的挑戰。||
1862|âm|陰 / 負 / 音|yin; negative; sound|形容詞|Nhiệt độ ở đó có thể xuống âm.|那裡的氣溫可能降到零下。||陰
1863|một ít|一點點|a little|名詞|Cho tôi một ít muối.|給我一點鹽。||
1864|xấu hổ|害羞 / 丟臉|ashamed; shy|形容詞|Em bé xấu hổ trốn sau lưng mẹ.|小朋友害羞地躲在媽媽背後。||
1865|quy trình|流程|process; procedure|名詞|Quy trình sản xuất rất nghiêm ngặt.|生產流程非常嚴格。||規程
1866|khẩn cấp|緊急|urgent|形容詞|Đây là trường hợp khẩn cấp!|這是緊急情況！||緊急
1867|lò|爐 / 烤箱|oven; furnace|名詞|Bánh mì vừa ra lò.|麵包剛出爐。|lò vi sóng＝微波爐|
1868|vững|穩|steady; firm|形容詞|Hãy đứng vững nhé.|站穩喔。||
1869|chìm|沉|to sink|動詞|Con thuyền bị chìm.|那艘船沉了。||
1870|nâng cấp|升級|to upgrade|動詞|Tôi muốn nâng cấp phòng lên hạng cao hơn.|我想把房間升級。||
1871|phong phú|豐富|rich; abundant|形容詞|Thực đơn ở đây rất phong phú.|這裡的菜單很豐富。||豐富
1872|hạt nhân|核 / 核心|nuclear; core|名詞|Nhà máy điện hạt nhân cần an toàn tuyệt đối.|核電廠需要絕對安全。||
1873|hầu như|幾乎|almost|副詞|Tôi hầu như không xem tivi.|我幾乎不看電視。||
1874|ông già|老人家 / 老爸（口語）|old man|名詞|Ông già ngồi uống trà dưới gốc cây.|老人家坐在樹下喝茶。||
1875|mục|項目 / 腐爛|item; rotten|名詞|Anh xem mục thứ ba trong hợp đồng.|你看合約的第三項。||目
1876|phụ huynh|家長|parent|名詞|Phụ huynh đến đón con lúc bốn giờ.|家長四點來接孩子。||父兄
1877|dự báo|預報|forecast|名詞|Dự báo thời tiết nói mai có mưa.|天氣預報說明天會下雨。||預報
1878|thách thức|挑戰|challenge; to challenge|名詞|Đây là thách thức lớn của ngành.|這是業界的一大挑戰。||
1879|xu|分（錢）/ 硬幣|cent; coin|名詞|Tôi không còn một xu nào.|我身上一毛錢都沒了。||
1880|con cái|子女|children (offspring)|名詞|Bố mẹ luôn lo cho con cái.|父母總是為子女操心。||
1881|đa số|大多數|majority|名詞|Đa số khách hàng hài lòng.|大多數顧客很滿意。||多數
1882|lầu|樓層（南部）/ 樓|floor; tower|名詞|Phòng tôi ở lầu ba.|我的房間在三樓（南部說法）。|北部說 tầng|樓
1883|ngờ|料想 / 懷疑|to expect; to suspect|動詞|Tôi không ngờ anh lại đến.|我沒想到你會來。||
1884|mỏng|薄|thin|形容詞|Áo này mỏng quá.|這件衣服好薄。||
1885|me|羅望子|tamarind|名詞|Tôi thích ăn tôm rang me.|我喜歡吃羅望子炒蝦。||
1886|phục hồi|恢復|to recover|動詞|Kinh tế đang phục hồi.|經濟正在復甦。||復回
1887|giao tiếp|溝通 / 交際|to communicate|動詞|Tôi muốn giao tiếp tốt hơn bằng tiếng Việt.|我想用越語溝通得更好。||交接
1888|khảo sát|調查 / 勘察|to survey|動詞|Công ty khảo sát nhu cầu khách hàng.|公司調查顧客需求。||考察
1889|toà án|法院|court|名詞|Vụ việc đã được đưa ra toà án.|此案已送交法院。||座案
1890|đẩy mạnh|推動 / 加強|to boost|動詞|Chúng tôi đẩy mạnh bán hàng trực tuyến.|我們大力推動線上銷售。||
1891|nghi|懷疑|to suspect|動詞|Cảnh sát nghi anh ta lấy trộm.|警方懷疑他偷東西。||疑
1892|trình|呈交 / 出示|to present; to submit|動詞|Vui lòng trình hộ chiếu.|請出示護照。||呈
1893|tuyệt đối|絕對|absolute|副詞|Tuyệt đối không được hút thuốc ở đây.|這裡絕對禁止吸菸。||絕對
1894|cam|柳橙|orange|名詞|Cho tôi một ly nước cam.|請給我一杯柳橙汁。||柑
1895|liều|劑量 / 冒險|dose; reckless|名詞|Uống đúng liều bác sĩ kê.|按照醫生開的劑量服用。|liều mạng＝拚命|
1896|vậy mà|竟然 / 可是|and yet|連詞|Đã dặn rồi, vậy mà vẫn quên.|已經叮嚀過了，竟然還是忘了。||
1897|biểu hiện|表現 / 症狀|sign; expression|名詞|Đây là biểu hiện của bệnh cúm.|這是流感的症狀。||表現
1898|chế|製造 / 調製|to make; to process|動詞|Món này chế từ sữa dừa.|這道是用椰奶做的。|chế tạo＝製造|製
1899|hiện trường|現場|scene|名詞|Cảnh sát đã có mặt tại hiện trường.|警察已抵達現場。||現場
1900|lành|善良 / 痊癒 / 好|kind; healed|形容詞|Vết thương đã lành.|傷口已經癒合了。||
1901|than|煤 / 抱怨|coal; to complain|名詞|Bếp than nướng thịt rất thơm.|炭火烤肉很香。|than phiền＝抱怨|炭
1902|kế|旁邊 / 計畫 / 繼（繼母）|next to; plan; step-|名詞|Nhà tôi ở kế bên chợ.|我家在市場旁邊。||
1903|lưỡi|舌頭 / 刀刃|tongue; blade|名詞|Tôi bị bỏng lưỡi vì ăn nóng.|我吃太燙燙到舌頭。||
1904|bền vững|永續 / 穩固|sustainable|形容詞|Phát triển bền vững là mục tiêu chung.|永續發展是共同目標。||
1905|nữ hoàng|女王|queen|名詞|Cô ấy được gọi là nữ hoàng nhạc pop.|她被稱為流行音樂女王。||女皇
1906|chôn|埋|to bury|動詞|Ông bà được chôn ở quê.|祖父母葬在老家。||
1907|khoảng cách|距離 / 差距|distance; gap|名詞|Khoảng cách giữa hai thành phố là năm mươi km.|兩城相距五十公里。||
1908|phổi|肺|lung|名詞|Hút thuốc hại phổi.|吸菸傷肺。||肺
1909|thận|腎|kidney|名詞|Uống nhiều nước tốt cho thận.|多喝水對腎臟好。||腎
1910|Tây Ban Nha|西班牙|Spain|名詞|Tôi học tiếng Tây Ban Nha.|我學西班牙語。||西班牙
1911|cắn|咬|to bite|動詞|Con chó này có cắn không?|這隻狗會咬人嗎？||
1912|kẹt|卡住 / 塞（車）|stuck; jammed|動詞|Giờ này đường hay kẹt xe.|這時間路上常塞車。||
1913|công dân|公民|citizen|名詞|Mọi công dân đều bình đẳng.|所有公民一律平等。||公民
1914|mây|雲 / 藤|cloud; rattan|名詞|Hôm nay trời nhiều mây.|今天多雲。||
1915|kết luận|結論|conclusion|名詞|Cuối cùng, kết luận của cuộc họp là gì?|最後，會議的結論是什麼？||結論
1916|thái độ|態度|attitude|名詞|Thái độ phục vụ ở đây rất tốt.|這裡的服務態度很好。||態度
1917|tương đương|相當於|equivalent|形容詞|Một trăm nghìn đồng tương đương khoảng một trăm hai mươi Đài tệ.|十萬盾約相當於一百二十元台幣。||相當
1918|định hướng|方向 / 定位|orientation|名詞|Công ty có định hướng phát triển rõ ràng.|公司有明確的發展方向。||定向
1919|huỷ|取消 / 摧毀|to cancel|動詞|Chuyến bay bị huỷ vì bão.|航班因颱風取消。||毀
1920|ngọt|甜|sweet|形容詞|Trà sữa này ngọt quá.|這杯奶茶太甜了。||
1921|vớ vẩn|胡扯 / 無聊|nonsense|形容詞|Đừng nói chuyện vớ vẩn nữa.|別再胡說八道了。||
1922|gãy|斷|broken (bone, stick)|動詞|Anh ấy bị gãy chân.|他腿骨折了。||
1923|kết|喜歡（口語）/ 結|to like (slang); to tie|動詞|Tôi kết bài hát này lắm.|我超愛這首歌。|年輕人口語；kết thúc＝結束|結
1924|trượt|滑倒 / 落榜|to slip; to fail|動詞|Đường trơn, cẩn thận trượt ngã.|路很滑，小心滑倒。|thi trượt＝考不上|
1925|che|遮|to cover|動詞|Che ô vào kẻo ướt.|撐傘遮一下，免得淋濕。||
1926|diễn đàn|論壇|forum|名詞|Tôi hỏi trên diễn đàn học tiếng Việt.|我在越語學習論壇上發問。||演壇
1927|trung học|中學|secondary school|名詞|Con tôi học trung học cơ sở.|我孩子讀國中。|trung học phổ thông＝高中|中學
1928|tài nguyên|資源|resources|名詞|Việt Nam có nhiều tài nguyên thiên nhiên.|越南有豐富的自然資源。||財源
1929|thi công|施工|construction work|動詞|Công trình đang thi công.|工程正在施工中。||施工
1930|tài trợ|贊助|to sponsor|動詞|Công ty tài trợ cho giải bóng đá.|公司贊助足球賽。||財助
1931|gọn|整齊 / 精簡|neat; compact|形容詞|Phòng bạn gọn gàng quá.|你的房間好整齊。||
1932|nhận định|判斷 / 評估|assessment|動詞|Chuyên gia nhận định giá sẽ tăng.|專家判斷價格會上漲。||認定
1933|tổng|總|total; general|形容詞|Tổng cộng hết bao nhiêu?|總共多少錢？|tổng giám đốc＝總經理|總
1934|trước hết|首先|first of all|副詞|Trước hết, xin cảm ơn mọi người.|首先，感謝大家。||
1935|đặc trưng|特色 / 特徵|characteristic|名詞|Nón lá là nét đặc trưng của Việt Nam.|斗笠是越南的特色。||特徵
1936|cân bằng|平衡|balance|名詞|Cần cân bằng giữa công việc và cuộc sống.|要在工作與生活間取得平衡。||
1937|chỉ tiêu|指標 / 目標|target; quota|名詞|Tháng này đã đạt chỉ tiêu doanh số.|這個月已達成業績目標。||指標
1938|mực|墨水 / 魷魚|ink; squid|名詞|Tôi gọi một đĩa mực nướng.|我點了一盤烤魷魚。||
1939|lãng mạn|浪漫|romantic|形容詞|Đà Lạt là thành phố lãng mạn.|大叻是浪漫的城市。||浪漫
1940|phá huỷ|摧毀|to destroy|動詞|Trận động đất phá huỷ nhiều nhà.|地震摧毀了許多房屋。||破毀
1941|giao lưu|交流|to exchange|動詞|Hai trường giao lưu văn hóa.|兩校進行文化交流。||交流
1942|số phận|命運|fate|名詞|Đó là số phận của anh ấy.|那是他的命運。||數分
1943|lâu dài|長期|long-term|形容詞|Chúng tôi muốn hợp tác lâu dài.|我們希望長期合作。||
1944|vận tải|運輸|transport|名詞|Công ty vận tải này rất uy tín.|這家運輸公司很有信譽。||運載
1945|đo|量|to measure|動詞|Để tôi đo nhiệt độ cho bạn.|我幫你量體溫。||
1946|chuông|鈴 / 鐘|bell|名詞|Chuông cửa đang reo.|門鈴在響。||
1947|chấm|沾 / 點 / 評分|to dip; dot; to grade|動詞|Chấm nem vào nước mắm.|把春捲沾魚露。||
1948|đỗ|停（車）/ 考上 / 豆（北部）|to park; to pass|動詞|Xe ô tô không được đỗ ở đây.|汽車不得停在這裡。|南部說 đậu|
1949|trời ơi|天啊|oh my God|感嘆詞|Trời ơi, muộn rồi!|天啊，遲到了！||
1950|dân chủ|民主|democracy|名詞|Cuộc họp diễn ra rất dân chủ.|會議進行得很民主。||民主
1951|chặt chẽ|嚴密|tight; strict|形容詞|Hai phòng ban phối hợp chặt chẽ.|兩個部門緊密配合。||
1952|má|媽媽（南部）/ 臉頰|mom (South); cheek|名詞|Má ơi, con về rồi!|媽，我回來了！|北部叫 mẹ|
1953|đấu tranh|鬥爭|to struggle|動詞|Họ đấu tranh vì quyền lợi công nhân.|他們為工人權益抗爭。||鬥爭
1954|thân thiện|友善|friendly|形容詞|Người dân ở đây rất thân thiện.|這裡的居民很友善。||親善
1955|chứng nhận|證明 / 認證|certificate; to certify|名詞|Sản phẩm có giấy chứng nhận chất lượng.|產品有品質認證書。||證認
1956|trung thành|忠誠|loyal|形容詞|Chó là con vật trung thành.|狗是忠誠的動物。||忠誠
1957|nhà văn|作家|writer|名詞|Nguyễn Du là nhà văn lớn của Việt Nam.|阮攸是越南的大文豪。||
1958|nhận xét|評論 / 意見|comment|名詞|Thầy có nhận xét gì về bài của em không ạ?|老師對我的作業有什麼意見嗎？||
1959|bấm|按|to press|動詞|Bấm nút xanh để bắt đầu.|按綠色按鈕開始。||
1960|gác|看守 / 閣樓|to guard; attic|動詞|Có người gác cổng suốt đêm.|整晚有人看守大門。||
1961|heo|豬（南部）|pig|名詞|Tôi muốn mua một ký thịt heo.|我想買一公斤豬肉。|北部說 lợn|
1962|nhẫn|戒指|ring|名詞|Anh ấy tặng cô ấy một chiếc nhẫn.|他送她一枚戒指。||
1963|bảo tàng|博物館|museum|名詞|Bảo tàng Chứng tích Chiến tranh rất đông khách.|戰爭遺跡博物館遊客很多。||寶藏
1964|doanh thu|營收|revenue|名詞|Doanh thu quý này tăng mạnh.|本季營收大增。||營收
1965|hoàng tử|王子|prince|名詞|Truyện kể về một hoàng tử nghèo.|故事講的是一位落魄王子。||皇子
1966|chuỗi|連鎖 / 串|chain; string|名詞|Đây là chuỗi cửa hàng tiện lợi lớn nhất.|這是最大的便利商店連鎖。||
1967|nước mắt|眼淚|tears|名詞|Cô ấy rơi nước mắt vì xúc động.|她感動得落淚。||
1968|trình diễn|表演 / 展示|to perform; to show|動詞|Người mẫu trình diễn áo dài.|模特兒展示奧黛。||呈演
1969|khủng khiếp|可怕|terrible|形容詞|Trời hôm nay nóng khủng khiếp.|今天熱得可怕。||恐怯
1970|nhắm|閉（眼）/ 瞄準|to close (eyes); to aim|動詞|Nhắm mắt lại và thư giãn.|閉上眼睛放鬆。||
1971|danh hiệu|稱號|title|名詞|Anh ấy nhận danh hiệu nhân viên xuất sắc.|他獲得優秀員工稱號。||名號
1972|học bổng|獎學金|scholarship|名詞|Em ấy được học bổng du học.|他獲得留學獎學金。||學俸
1973|ban hành|頒布|to issue (law)|動詞|Chính phủ ban hành quy định mới.|政府頒布新規定。||頒行
1974|Minh|明（人名常見）|Minh (name); bright|名詞|Anh Minh là đồng nghiệp của tôi.|明哥是我的同事。||明
1975|kinh phí|經費|funding|名詞|Dự án thiếu kinh phí.|專案經費不足。||經費
1976|cấp cứu|急救|emergency care|動詞|Gọi xe cấp cứu ngay!|立刻叫救護車！|急救專線 115|急救
1977|giam|關押|to detain|動詞|Nghi phạm đang bị tạm giam.|嫌犯正被羈押。||監
1978|nằm xuống|躺下|to lie down|動詞|Anh nằm xuống đây để bác sĩ khám.|請躺下讓醫生檢查。||
1979|kỳ lạ|奇怪|strange|形容詞|Chuyện này thật kỳ lạ.|這件事真奇怪。||
1980|tha|原諒 / 饒 / 叼|to forgive; to carry in mouth|動詞|Lần này tha cho em nhé.|這次就饒了你吧。||
1981|khâu|縫 / 環節|to sew; stage|動詞|Mẹ khâu lại cái áo rách.|媽媽把破衣服縫好。|khâu sản xuất＝生產環節|
1982|dân cư|居民|residents; population|名詞|Khu dân cư này rất yên tĩnh.|這個住宅區很安靜。||民居
1983|nấm|菇類|mushroom|名詞|Tôi thích lẩu nấm.|我喜歡菇菇火鍋。||
1984|vận hành|運轉 / 操作|to operate|動詞|Máy mới vận hành rất ổn định.|新機器運轉很穩定。||運行
1985|đế|底 / 鞋底|sole; base|名詞|Đế giày bị bong ra.|鞋底脫膠了。||
1986|tia|光線 / 射線|ray|名詞|Tia nắng chiếu qua cửa sổ.|陽光從窗戶照進來。||
1987|cô giáo|女老師|female teacher|名詞|Cô giáo của con rất hiền.|孩子的老師很溫柔。||
1988|xe tải|卡車|truck|名詞|Xe tải không được vào nội thành ban ngày.|卡車白天不能進市區。||
1989|liên bang|聯邦|federal|名詞|Nga là nhà nước liên bang.|俄羅斯是聯邦國家。||聯邦
1990|phạm vi|範圍|scope; range|名詞|Việc này nằm ngoài phạm vi của tôi.|這件事超出我的職權範圍。||範圍
1991|sâu sắc|深刻|profound|形容詞|Bài nói của ông ấy rất sâu sắc.|他的演講很深刻。||
1992|tiêu chí|標準 / 準則|criterion|名詞|Giá là tiêu chí quan trọng nhất.|價格是最重要的標準。||標志
1993|đéo|SKIP
1994|tiếp nhận|接收 / 接受|to receive|動詞|Bệnh viện đã tiếp nhận bệnh nhân.|醫院已收治病人。||
1995|cài đặt|安裝 / 設定|to install; to set|動詞|Bạn cài đặt ứng dụng này chưa?|你安裝這個應用程式了嗎？||
1996|hạ tầng|基礎建設|infrastructure|名詞|Hạ tầng giao thông đang được nâng cấp.|交通基礎建設正在升級。||下層
1997|giáng sinh|聖誕節|Christmas|名詞|Giáng sinh năm nay bạn đi đâu?|今年聖誕節你去哪裡？||降生
1998|nền tảng|基礎 / 平台|foundation; platform|名詞|Ngữ pháp là nền tảng của ngôn ngữ.|文法是語言的基礎。||
1999|co|縮|to shrink|動詞|Áo bị co sau khi giặt.|衣服洗完縮水了。||
2000|nhân lực|人力|human resources|名詞|Công ty đang thiếu nhân lực.|公司正缺人力。||人力
2001|phu nhân|夫人|wife (formal); Madam|名詞|Thủ tướng và phu nhân đã đến sân bay.|總理與夫人已抵達機場。|正式場合稱他人的妻子|夫人
2002|sự việc|事情 / 事件|matter; incident|名詞|Sự việc xảy ra lúc mười giờ tối.|事情發生在晚上十點。||事役
2003|ho|咳嗽|to cough|動詞|Tôi bị ho mấy ngày rồi.|我咳嗽好幾天了。||
2004|chiến binh|戰士|warrior|名詞|Anh ấy là một chiến binh thật sự.|他是一名真正的戰士。||戰兵
2005|đồn|派出所 / 傳聞|police station; rumour|名詞|Đồn công an gần nhất ở đâu?|最近的派出所在哪裡？|người ta đồn＝聽說、謠傳|
2006|hư|壞掉（南部）/ 頑皮|broken; naughty|形容詞|Máy lạnh bị hư rồi.|冷氣壞了。|北部多說 hỏng；trẻ hư＝不乖的小孩|
2007|xe máy|機車|motorbike|名詞|Ở Việt Nam ai cũng đi xe máy.|在越南人人都騎機車。||
2008|hâm mộ|仰慕 / 粉絲|to admire; fan|動詞|Tôi rất hâm mộ ca sĩ này.|我很喜歡這位歌手。|người hâm mộ＝粉絲|歆慕
2009|phụ trách|負責|to be in charge|動詞|Ai phụ trách dự án này?|誰負責這個專案？||負責
2010|huy động|動員 / 籌措|to mobilize|動詞|Công ty huy động vốn để mở rộng.|公司籌資擴大規模。||揮動
2011|vất vả|辛苦|hard; toilsome|形容詞|Anh vất vả quá!|你辛苦了！|慰問語，對方可回 Không sao đâu|
2012|thông điệp|訊息 / 主旨|message|名詞|Bộ phim mang thông điệp về tình yêu thương.|這部電影傳達關於愛的訊息。||通牒
2013|đi lại|往來 / 移動|to travel about|動詞|Đi lại ở thành phố này rất tiện.|在這座城市移動很方便。||
2014|yên tâm|放心|to feel assured|形容詞|Bạn cứ yên tâm, tôi lo được.|你放心，我處理得來。||安心
2015|giãn|放鬆 / 擴張|to relax; to stretch|動詞|Tập thể dục giúp cơ bắp giãn ra.|運動讓肌肉放鬆。|thư giãn＝放鬆|
2016|giá cả|物價|prices|名詞|Giá cả ở đây khá rẻ.|這裡的物價相當便宜。||
2017|khen|稱讚|to praise|動詞|Sếp khen tôi làm tốt.|老闆稱讚我做得好。||
2018|trị giá|價值|to be worth|動詞|Món quà trị giá năm triệu đồng.|這份禮物價值五百萬盾。||值價
2019|chứng tỏ|證明 / 顯示|to prove; to show|動詞|Kết quả này chứng tỏ bạn đã cố gắng.|這個結果證明你努力過了。||
2020|cô đơn|孤單|lonely|形容詞|Sống một mình đôi khi thấy cô đơn.|一個人住有時覺得孤單。||孤單
2021|đặc điểm|特點|feature|名詞|Đặc điểm của món này là cay và thơm.|這道菜的特點是又辣又香。||特點
2022|khổ|辛苦 / 尺寸（紙）|hard (life); paper size|形容詞|Ngày xưa gia đình tôi rất khổ.|以前我家很苦。|khổ A4＝A4 大小|苦
2023|rối loạn|紊亂 / 失調|disorder|名詞|Tôi bị rối loạn tiêu hóa.|我消化不良（腸胃失調）。||
2024|sốc|震驚|shocked|形容詞|Tôi bị sốc khi nghe tin đó.|聽到那消息我很震驚。||
2025|dãy|排 / 列|row; range|名詞|Dãy nhà này toàn quán ăn.|這排房子全是小吃店。|dãy núi＝山脈|
2026|người lớn|大人|adult|名詞|Vé người lớn bao nhiêu tiền?|成人票多少錢？||
2027|đương nhiên|當然|naturally|副詞|Đương nhiên là tôi đồng ý.|我當然同意。||當然
2028|biến đổi|變化|to change; change|名詞|Biến đổi khí hậu ảnh hưởng đến nông nghiệp.|氣候變遷影響農業。||
2029|khói|煙|smoke|名詞|Bếp nhiều khói quá.|廚房好多煙。||
2030|gấu|熊|bear|名詞|Con tôi thích gấu bông.|我孩子喜歡泰迪熊。||
2031|văn học|文學|literature|名詞|Cô ấy học văn học Việt Nam.|她念越南文學。||文學
2032|lưới|網|net|名詞|Ngư dân đang kéo lưới.|漁民正在拉網。||
2033|an|安|safe; peaceful|形容詞|Chúc cả nhà bình an.|祝全家平安。|多見於 bình an、an toàn|安
2034|đồ chơi|玩具|toy|名詞|Con tôi có rất nhiều đồ chơi.|我孩子有很多玩具。||
2035|lôi|拉 / 拖|to pull; to drag|動詞|Đừng lôi tôi vào chuyện này.|別把我扯進這件事。||
2036|tháo|拆 / 卸下|to remove; to undo|動詞|Tháo giày ra trước khi vào nhà.|進屋前把鞋脫掉。||
2037|tâm sự|談心 / 心事|to confide|動詞|Hai chị em ngồi tâm sự cả đêm.|兩姊妹聊心事聊了一整晚。||心事
2038|lọc|過濾|to filter|動詞|Nước này đã được lọc.|這水已經過濾了。|nước lọc＝白開水|
2039|gởi|寄（南部寫法）|to send (Southern spelling)|動詞|Tôi gởi thư cho bạn rồi.|我已經寄信給你了。|標準寫法 gửi|
2040|phong|封（頭銜）/ 風|to confer; wind (Sino)|動詞|Ông ấy được phong hàm giáo sư.|他獲授教授頭銜。|phong cảnh＝風景|封
2041|thay vì|而不是|instead of|連詞|Thay vì đi taxi, mình đi bộ nhé.|我們走路去，不搭計程車了。||
2042|móng|指甲 / 地基|nail; foundation|名詞|Chị muốn sơn móng tay màu gì?|妳想擦什麼顏色的指甲油？||
2043|đáy|底|bottom|名詞|Đồng xu rơi xuống đáy hồ.|硬幣掉到湖底。||
2044|mỏ|礦 / 鳥嘴|mine; beak|名詞|Quảng Ninh có nhiều mỏ than.|廣寧有很多煤礦。||
2045|thỉnh thoảng|偶爾|occasionally|副詞|Thỉnh thoảng tôi ăn đồ chay.|我偶爾吃素。||
2046|ơn|恩|favour; gratitude|名詞|Tôi sẽ không quên ơn bạn.|我不會忘記你的恩情。|cảm ơn＝感恩|恩
2047|cụm|群 / 組|cluster|名詞|Cụm từ này nghĩa là gì?|這個片語是什麼意思？|cụm từ＝片語|
2048|thờ|祭拜 / 供奉|to worship|動詞|Nhà nào cũng có bàn thờ tổ tiên.|每家都有祖先供桌。||
2049|xuất bản|出版|to publish|動詞|Cuốn sách được xuất bản năm 2020.|這本書在 2020 年出版。||出版
2050|loạt|系列|series|名詞|Đây là loạt phim rất nổi tiếng.|這是很有名的系列電影。||
2051|kinh khủng|恐怖 / 超級（口語）|terrible; extremely|形容詞|Trời nóng kinh khủng.|天氣熱得要命。|口語常當「超」：đẹp kinh khủng|驚恐
2052|tên lửa|飛彈 / 火箭|missile; rocket|名詞|Tên lửa được phóng lên vũ trụ.|火箭發射進入太空。||
2053|lý tưởng|理想|ideal|形容詞|Đây là nơi lý tưởng để nghỉ dưỡng.|這裡是度假的理想地點。||理想
2054|nghĩa|意思 / 義|meaning|名詞|Từ này có nghĩa là gì?|這個字是什麼意思？||義
2055|ngoại trừ|除了|except|介詞|Tất cả đều đến, ngoại trừ anh Nam.|大家都來了，除了阿南。||外除
2056|phản đối|反對|to oppose|動詞|Nhiều người phản đối kế hoạch này.|很多人反對這個計畫。||反對
2057|đau khổ|痛苦|suffering|形容詞|Anh ấy rất đau khổ sau khi chia tay.|分手後他很痛苦。||
2058|phe|派 / 方|side; faction|名詞|Bạn đứng về phe nào?|你站哪一邊？||
2059|mua bán|買賣|to trade|動詞|Họ mua bán xe cũ.|他們做二手車買賣。||
2060|đối xử|對待|to treat|動詞|Hãy đối xử tốt với mọi người.|要善待每個人。||對處
2061|rộng rãi|寬敞 / 廣泛|spacious; widely|形容詞|Phòng khách rất rộng rãi.|客廳很寬敞。||
2062|cao su|橡膠|rubber|名詞|Bình Phước có nhiều đồn điền cao su.|平福省有很多橡膠園。||
2063|khủng hoảng|危機|crisis|名詞|Công ty đang gặp khủng hoảng tài chính.|公司正面臨財務危機。||恐慌
2064|đắt|貴（北部）|expensive|形容詞|Cái áo này đắt quá.|這件衣服太貴了。|南部說 mắc|
2065|quốc phòng|國防|national defence|名詞|Bộ Quốc phòng ở Hà Nội.|國防部在河內。||國防
2066|tâm hồn|心靈|soul; mind|名詞|Âm nhạc làm tâm hồn thư thái.|音樂讓心靈平靜。||心魂
2067|dũng cảm|勇敢|brave|形容詞|Cậu bé rất dũng cảm.|那小男孩很勇敢。||勇敢
2068|trò chuyện|聊天|to chat|動詞|Chúng tôi trò chuyện suốt buổi tối.|我們聊了一整個晚上。||
2069|tuyển sinh|招生|enrolment|動詞|Trường đang tuyển sinh khóa mới.|學校正在招收新生。||選生
2070|kệ|架子 / 不管（mặc kệ）|shelf; never mind|名詞|Sách để trên kệ.|書放在架子上。|Kệ nó!＝別管它！|
2071|quen thuộc|熟悉|familiar|形容詞|Con đường này rất quen thuộc với tôi.|這條路我很熟悉。||
2072|thi đua|競賽|to compete (in emulation)|動詞|Các tổ thi đua tăng năng suất.|各組競賽提升產能。||
2073|chuyên ngành|專業（科系）|major; specialty|名詞|Chuyên ngành của bạn là gì?|你的主修是什麼？||專行
2074|gạch|磚 / 劃掉|brick; to cross out|名詞|Nhà này xây bằng gạch đỏ.|這間房子是紅磚蓋的。||
2075|hân hạnh|榮幸|honoured|形容詞|Rất hân hạnh được gặp anh.|很榮幸見到您。||欣幸
2076|nhiệt|熱|heat|名詞|Nồi này giữ nhiệt rất tốt.|這個鍋保溫效果很好。|nhiệt độ＝溫度|熱
2077|lợi dụng|利用（貶義）|to take advantage of|動詞|Đừng lợi dụng lòng tốt của người khác.|別利用別人的好意。||利用
2078|hiểu biết|知識 / 懂|knowledge; knowledgeable|名詞|Anh ấy có hiểu biết rộng.|他見識很廣。||
2079|tương đối|相對 / 還算|relatively|副詞|Giá ở đây tương đối rẻ.|這裡價格相對便宜。||相對
2080|nhiệt tình|熱情|enthusiastic|形容詞|Nhân viên ở đây rất nhiệt tình.|這裡的員工很熱情。||熱情
2081|cốc|杯子（北部）|cup; glass|名詞|Cho tôi một cốc nước.|請給我一杯水。|南部說 ly|
2082|lợi thế|優勢|advantage|名詞|Biết tiếng Việt là một lợi thế lớn.|會越語是很大的優勢。||利勢
2083|lưu trữ|儲存|to store; to archive|動詞|Dữ liệu được lưu trữ trên máy chủ.|資料儲存在伺服器上。||留貯
2084|mô|哪裡（中部方言）/ 組織|where (Central); tissue|代名詞|Anh đi mô rứa?|你要去哪裡呀？|順化等中部方言：mô＝đâu，rứa＝vậy|
2085|đề cập|提到|to mention|動詞|Bài báo có đề cập đến vấn đề này.|文章有提到這個問題。||提及
2086|hàng xóm|鄰居|neighbour|名詞|Hàng xóm của tôi rất tốt bụng.|我的鄰居很熱心。||
2087|tu|修行 / 一口喝下|to practise (religion); to gulp|動詞|Ông ấy đi tu ở chùa.|他到寺廟出家修行。||修
2088|trước đây|以前|previously|副詞|Trước đây tôi sống ở Hải Phòng.|以前我住在海防。||
2089|bẩn|髒|dirty|形容詞|Áo bị bẩn rồi.|衣服髒了。|南部常說 dơ|
2090|gánh|挑 / 承擔|to carry on a pole; to bear|動詞|Bà gánh hàng ra chợ bán.|奶奶挑著貨去市場賣。||
2091|vội|匆忙|hurried|形容詞|Đừng vội, cứ từ từ.|別急，慢慢來。||
2092|cấu trúc|結構|structure|名詞|Cấu trúc câu tiếng Việt khá đơn giản.|越語的句子結構相當簡單。||構築
2093|tâm thần|精神（疾病）|mental|形容詞|Bệnh viện tâm thần ở ngoại ô.|精神病院在郊區。||心神
2094|Lê|黎（姓氏）/ 梨|Le (surname); pear|名詞|Nhà Lê là một triều đại lớn của Việt Nam.|黎朝是越南重要的朝代。|quả lê＝梨子|黎
2095|can|勸阻 / 干|to intervene; to stop|動詞|Mọi người vào can hai người đang cãi nhau.|大家上前勸架。||干
2096|công khai|公開|public; openly|形容詞|Kết quả sẽ được công khai.|結果將會公開。||公開
2097|đoàn kết|團結|united|形容詞|Đội chúng ta rất đoàn kết.|我們隊很團結。||團結
2098|vươn|伸展 / 崛起|to stretch; to rise|動詞|Thành phố đang vươn lên mạnh mẽ.|這座城市正強勢崛起。||
2099|ưu đãi|優惠|incentive; discount|名詞|Khách mới được ưu đãi mười phần trăm.|新客人享九折優惠。||優待
2100|giảng viên|講師|lecturer|名詞|Chị ấy là giảng viên đại học.|她是大學講師。||講員
2101|ước mơ|夢想|dream|名詞|Ước mơ của tôi là đi khắp thế giới.|我的夢想是環遊世界。||
2102|tuyết|雪|snow|名詞|Sa Pa có năm có tuyết rơi.|沙壩有些年份會下雪。||雪
2103|hoàn tất|完成|to complete|動詞|Thủ tục đã hoàn tất.|手續已辦妥。||完畢
2104|đậm|濃 / 深|strong; dark|形容詞|Cà phê này đậm quá.|這咖啡好濃。||
2105|sự cố|故障 / 事故|incident; breakdown|名詞|Máy bị sự cố kỹ thuật.|機器發生技術故障。||事故
2106|nguồn gốc|來源 / 起源|origin|名詞|Món này có nguồn gốc từ Huế.|這道菜源自順化。||
2107|giấy phép|許可證|licence; permit|名詞|Anh có giấy phép lái xe không?|你有駕照嗎？||
2108|như thể|彷彿|as if|連詞|Anh ấy nói như thể đã biết hết.|他說得好像全都知道似的。||
2109|nô lệ|奴隸|slave|名詞|Đừng làm nô lệ cho điện thoại.|別當手機的奴隸。||奴隸
2110|thực hành|實作 / 練習|to practise|動詞|Muốn giỏi phải thực hành nhiều.|要學好就要多練習。||實行
2111|đại tướng|大將|general (four-star)|名詞|Đại tướng Võ Nguyên Giáp rất nổi tiếng.|武元甲大將非常有名。||大將
2112|dạ|是的（禮貌應答）|yes (polite)|感嘆詞|Dạ, em hiểu rồi ạ.|是的，我明白了。|對長輩、客人應答用 dạ|
2113|ghép|拼接 / 移植|to join; to transplant|動詞|Ghép hai cái bàn lại với nhau.|把兩張桌子併在一起。||
2114|trộn|拌 / 混合|to mix|動詞|Trộn đều nước mắm với chanh.|把魚露和檸檬拌勻。||
2115|khởi đầu|開始|beginning|名詞|Đây là khởi đầu tốt.|這是好的開始。||起頭
2116|thuỷ|水（漢越）|water (Sino)|名詞|Thuỷ sản là ngành xuất khẩu lớn.|水產是重要的出口產業。|多見於 thuỷ sản、thuỷ điện|水
2117|Hải Phòng|海防|Hai Phong|名詞|Cảng Hải Phòng rất lớn.|海防港非常大。||海防
2118|siêu thị|超市|supermarket|名詞|Tôi đi siêu thị mua đồ ăn.|我去超市買食物。||超市
2119|chuyển đổi|轉換|to convert|動詞|Chuyển đổi đô la sang đồng.|把美元換成越盾。||
2120|đạo diễn|導演|director (film)|名詞|Đạo diễn này rất nổi tiếng.|這位導演很有名。||導演
2121|chiến sĩ|戰士|soldier|名詞|Các chiến sĩ đang canh gác biên giới.|戰士們正在守衛邊境。||戰士
2122|chế tạo|製造|to manufacture|動詞|Nhà máy chế tạo linh kiện điện tử.|工廠製造電子零件。||製造
2123|vinh dự|榮幸 / 榮譽|honour|名詞|Tôi rất vinh dự được nhận giải này.|能獲得這個獎我很榮幸。||榮譽
2124|to lớn|巨大|huge|形容詞|Đó là thành công to lớn.|那是巨大的成功。||
2125|vương quốc|王國|kingdom|名詞|Thái Lan là một vương quốc.|泰國是一個王國。||王國
2126|thuỷ sản|水產|aquatic products|名詞|Công ty xuất khẩu thuỷ sản sang Nhật.|公司出口水產到日本。||水產
2127|buông|放開|to let go|動詞|Đừng buông tay tôi nhé.|別放開我的手喔。||
2128|mụ|那女人（貶）/ 老婦|old woman (derogatory)|名詞|Mụ phù thuỷ trong truyện rất độc ác.|故事裡的女巫很惡毒。|語氣輕蔑，避免對人使用|
2129|dán|貼|to stick; to paste|動詞|Dán tem lên phong bì.|把郵票貼在信封上。||
2130|mỡ|油脂 / 脂肪|fat; grease|名詞|Thịt này nhiều mỡ quá.|這塊肉肥肉太多了。||
2131|tính chất|性質|nature; property|名詞|Tính chất công việc này rất khác.|這份工作的性質很不一樣。||性質
2132|lầm|弄錯|to be mistaken|動詞|Xin lỗi, tôi nhận lầm người.|抱歉，我認錯人了。||
2133|lan|蔓延 / 蘭花|to spread; orchid|動詞|Tin đồn lan rất nhanh.|謠言傳得很快。|hoa lan＝蘭花|
2134|thời hạn|期限|term; deadline|名詞|Hộ chiếu của tôi còn thời hạn hai năm.|我的護照還有兩年效期。||時限
2135|bến|碼頭 / 車站|wharf; terminal|名詞|Bến xe Miền Đông rất đông.|東部客運站人很多。||
2136|làm phiền|打擾|to disturb|動詞|Xin lỗi đã làm phiền.|不好意思打擾了。||
2137|phun|噴|to spray|動詞|Họ đang phun thuốc diệt muỗi.|他們正在噴殺蚊藥。||
2138|khối lượng|重量 / 工作量|mass; volume|名詞|Khối lượng công việc tuần này rất lớn.|這週的工作量很大。||塊量
2139|kim loại|金屬|metal|名詞|Không mang đồ kim loại vào máy quét.|金屬物品不可帶進掃描機。||金類
2140|thiên thần|天使|angel|名詞|Em bé ngủ như thiên thần.|小寶寶睡得像天使。||天神
2141|thị xã|市鎮|town (district-level)|名詞|Thị xã này đang phát triển du lịch.|這個市鎮正在發展觀光。||市社
2142|nát|爛 / 碎|crushed; rotten|形容詞|Quả chuối bị nát rồi.|香蕉壓爛了。||
2143|chín|九 / 熟|nine; ripe; cooked|數詞|Thịt bò chín hay tái?|牛肉要全熟還是半熟？|數字 9 也是 chín|
2144|mặt nạ|面具 / 面膜|mask; face mask|名詞|Tối nào cô ấy cũng đắp mặt nạ.|她每晚都敷面膜。||
2145|gia nhập|加入|to join|動詞|Việt Nam gia nhập WTO năm 2007.|越南在 2007 年加入 WTO。||加入
2146|nạn|災難 / 受害|disaster|名詞|Tai nạn giao thông xảy ra hằng ngày.|交通事故天天發生。|tai nạn＝事故|難
2147|vô tội|無辜|innocent|形容詞|Anh ấy vô tội.|他是無辜的。||無罪
2148|mồi|誘餌 / 下酒菜|bait; snack|名詞|Mua thêm ít đồ mồi để nhậu.|多買點下酒菜來喝酒。||
2149|trạng thái|狀態|state; condition|名詞|Máy đang ở trạng thái chờ.|機器處於待機狀態。||狀態
2150|chủ trương|主張 / 方針|policy; to advocate|名詞|Đây là chủ trương của công ty.|這是公司的方針。||主張
2151|bối cảnh|背景|context; background|名詞|Phim lấy bối cảnh Hà Nội xưa.|電影以舊河內為背景。||背景
2152|hứng thú|興趣|interest|名詞|Tôi rất hứng thú với văn hóa Việt.|我對越南文化很有興趣。||興趣
2153|mổ|開刀 / 宰殺 / 啄|to operate; to slaughter|動詞|Bác sĩ nói phải mổ ngay.|醫生說要立刻開刀。||
2154|ngọt ngào|甜蜜|sweet|形容詞|Giọng hát của cô ấy rất ngọt ngào.|她的歌聲很甜美。||
2155|hiệp hội|協會|association|名詞|Anh ấy là thành viên hiệp hội doanh nghiệp.|他是企業協會的成員。||協會
2156|khoảnh khắc|瞬間|moment|名詞|Đó là khoảnh khắc đáng nhớ.|那是值得紀念的一刻。||頃刻
2157|tư cách|資格 / 身分|capacity; qualification|名詞|Tôi phát biểu với tư cách đại diện công ty.|我以公司代表的身分發言。||資格
2158|tập luyện|鍛鍊 / 練習|to train|動詞|Tôi tập luyện ở phòng gym ba buổi một tuần.|我每週去健身房練三次。||習煉
2159|bắt buộc|強制 / 必須|compulsory|形容詞|Đội mũ bảo hiểm là bắt buộc.|戴安全帽是強制的。||
2160|phấn đấu|奮鬥|to strive|動詞|Chúng tôi phấn đấu hoàn thành sớm.|我們努力提早完成。||奮鬥
2161|giảm giá|打折|discount|動詞|Cửa hàng đang giảm giá năm mươi phần trăm.|商店正在打五折。||減價
2162|vịnh|海灣|bay|名詞|Vịnh Hạ Long là di sản thế giới.|下龍灣是世界遺產。||
2163|học trò|學生（老師稱）|pupil|名詞|Thầy luôn nhớ học trò cũ.|老師一直記得以前的學生。||
2164|trụ sở|總部 / 辦公處|headquarters|名詞|Trụ sở công ty ở Đài Bắc.|公司總部在台北。||住所
2165|bầu cử|選舉|election|名詞|Cuộc bầu cử diễn ra vào tháng năm.|選舉在五月舉行。||
2166|đảng viên|黨員|party member|名詞|Ông ấy là đảng viên lâu năm.|他是資深黨員。||黨員
2167|hành khách|乘客|passenger|名詞|Mời hành khách lên máy bay.|請乘客登機。||行客
2168|khốn nạn|混蛋 / 可惡|bastard; wretched|形容詞|Thằng đó khốn nạn thật!|那傢伙真可惡！|很重的罵人話，聽懂即可|困難
2169|hiệu|店（老式）/ 品牌 / 號|shop; brand; sign|名詞|Hiệu sách này mở cửa đến chín giờ.|這家書店開到九點。|nhãn hiệu＝商標|號
2170|mong đợi|期待|to look forward to|動詞|Tôi rất mong đợi chuyến đi này.|我很期待這趟旅行。||
2171|toàn diện|全面|comprehensive|形容詞|Chúng tôi kiểm tra toàn diện hệ thống.|我們全面檢查系統。||全面
2172|Úc|澳洲|Australia|名詞|Con gái tôi du học ở Úc.|我女兒在澳洲留學。||澳
2173|gặp gỡ|會面|to meet up|動詞|Rất vui được gặp gỡ các bạn.|很高興和大家見面。||
2174|báo động|警報|alarm|名詞|Chuông báo động kêu lúc nửa đêm.|警報器半夜響了。||報動
2175|sinh vật|生物|living thing|名詞|Biển có nhiều sinh vật lạ.|海裡有很多奇特的生物。||生物
2176|vứt|丟棄|to throw away|動詞|Đừng vứt rác bừa bãi.|不要亂丟垃圾。||
2177|ngại|不好意思 / 怕麻煩|hesitant; shy|形容詞|Có gì cần cứ nói, đừng ngại.|需要什麼就說，別客氣。||
2178|tử tế|善良 / 厚道|kind; decent|形容詞|Bà chủ nhà rất tử tế.|房東太太人很好。||仔細
2179|bí ẩn|神祕|mysterious|形容詞|Hang động này rất bí ẩn.|這個洞穴很神祕。||祕隱
2180|thi hành|執行|to enforce|動詞|Luật mới bắt đầu thi hành từ tháng một.|新法從一月開始施行。||施行
2181|bắt giữ|逮捕|to arrest|動詞|Cảnh sát đã bắt giữ nghi phạm.|警方已逮捕嫌犯。||
2182|liên tiếp|接連|consecutive|副詞|Đội nhà thắng ba trận liên tiếp.|主隊連勝三場。||連接
2183|Dũng|SKIP
2184|sát nhân|殺人犯|murderer|名詞|Kẻ sát nhân đã bị bắt.|殺人犯已被逮捕。||殺人
2185|giàu có|富有|wealthy|形容詞|Ông ấy xuất thân từ gia đình giàu có.|他出身富裕家庭。||
2186|số liệu|數據|data|名詞|Số liệu này lấy từ đâu?|這些數據從哪來的？||數料
2187|hiệu trưởng|校長|principal|名詞|Thầy hiệu trưởng phát biểu khai giảng.|校長在開學典禮致詞。||校長
2188|phù thuỷ|巫師 / 女巫|witch; wizard|名詞|Con tôi thích truyện phù thuỷ.|我孩子喜歡巫師的故事。||符水
2189|bát|碗（北部）|bowl|名詞|Cho tôi thêm một bát cơm.|請再給我一碗飯。|南部說 chén|鉢
2190|không những|不但|not only|連詞|Cô ấy không những đẹp mà còn giỏi.|她不但漂亮而且能幹。|không những … mà còn …|
2191|theo đuổi|追求|to pursue|動詞|Anh ấy theo đuổi ước mơ làm đầu bếp.|他追求當廚師的夢想。||
2192|dữ|兇 / 厲害|fierce|形容詞|Con chó này dữ lắm.|這隻狗很兇。||
2193|bí thư|書記|secretary (party)|名詞|Bí thư thành ủy đến thăm nhà máy.|市委書記參訪工廠。||祕書
2194|can thiệp|干預|to intervene|動詞|Chính phủ can thiệp để giữ giá ổn định.|政府介入以穩定價格。||干涉
2195|hải quân|海軍|navy|名詞|Anh trai tôi phục vụ trong hải quân.|我哥哥在海軍服役。||海軍
2196|trung sĩ|中士|sergeant|名詞|Trung sĩ ra lệnh tập hợp.|中士下令集合。||中士
2197|tội nghiệp|可憐|poor (pitiful)|形容詞|Tội nghiệp con mèo bị ướt hết.|可憐的貓全身濕透。||罪業
2198|Cần Thơ|芹苴|Can Tho|名詞|Chợ nổi Cái Răng ở Cần Thơ.|丐冷水上市場在芹苴。||芹苴
2199|gần gũi|親近|close; intimate|形容詞|Cô giáo rất gần gũi với học sinh.|老師和學生很親近。||
2200|thám tử|偵探|detective|名詞|Tôi thích đọc truyện thám tử.|我喜歡看偵探小說。||探子
2201|đánh dấu|做記號 / 標示|to mark|動詞|Đánh dấu những từ bạn chưa biết.|把你不懂的字標起來。||
2202|đề án|提案 / 計畫書|proposal; scheme|名詞|Đề án đã được phê duyệt.|提案已獲批准。||提案
2203|học viện|學院|academy|名詞|Anh ấy học ở Học viện Ngoại giao.|他念外交學院。||學院
2204|bài tập|作業 / 練習題|exercise; homework|名詞|Con làm bài tập xong chưa?|你作業做完了嗎？||
2205|lãng phí|浪費|wasteful; to waste|形容詞|Đừng lãng phí thức ăn.|別浪費食物。||浪費
2206|vân|紋路 / 雲|pattern; cloud (Sino)|名詞|Mở khóa điện thoại bằng vân tay.|用指紋解鎖手機。|vân tay＝指紋|紋
2207|dự đoán|預測|to predict|動詞|Tôi dự đoán đội Việt Nam sẽ thắng.|我預測越南隊會贏。||預斷
2208|thoáng|通風 / 一瞥|airy; fleeting|形容詞|Phòng này thoáng mát.|這房間通風涼爽。||
2209|hiến|捐獻|to donate|動詞|Anh ấy hiến máu mỗi năm.|他每年捐血。|hiến pháp＝憲法|獻
2210|tuyển dụng|招聘|to recruit|動詞|Công ty đang tuyển dụng kỹ sư.|公司正在招聘工程師。||選用
2211|cài|安裝 / 扣上 / 別上|to install; to fasten|動詞|Cài dây an toàn vào nhé.|繫好安全帶喔。||
2212|bất thường|異常|unusual|形容詞|Thời tiết năm nay rất bất thường.|今年天氣很反常。||不常
2213|nhạy cảm|敏感|sensitive|形容詞|Da tôi rất nhạy cảm.|我的皮膚很敏感。||
2214|mụn|痘痘|pimple|名詞|Dạo này tôi bị nổi mụn.|最近我長痘痘。||
2215|bóng tối|黑暗|darkness|名詞|Con tôi sợ bóng tối.|我孩子怕黑。||
2216|diệt|消滅|to exterminate|動詞|Dùng thuốc này để diệt muỗi.|用這個藥滅蚊。||滅
2217|chú trọng|注重|to focus on|動詞|Công ty chú trọng chất lượng dịch vụ.|公司注重服務品質。||注重
2218|bề mặt|表面|surface|名詞|Lau sạch bề mặt bàn.|把桌面擦乾淨。||
2219|cỗ|宴席 / 一套|feast; set|名詞|Ngày giỗ, cả nhà làm cỗ.|忌日那天全家辦宴席。||
2220|thẩm quyền|權限 / 職權|authority|名詞|Việc này thuộc thẩm quyền của cơ quan thuế.|這件事屬於稅務機關的職權。||審權
2221|chung kết|決賽|final|名詞|Trận chung kết diễn ra tối mai.|決賽明晚舉行。||終結
2222|luyện|練|to practise|動詞|Mỗi sáng tôi luyện phát âm.|我每天早上練發音。||練
2223|động viên|鼓勵 / 動員|to encourage|動詞|Cảm ơn bạn đã động viên tôi.|謝謝你鼓勵我。||動員
2224|bày tỏ|表達|to express|動詞|Tôi muốn bày tỏ lòng biết ơn.|我想表達感謝之意。||
2225|công suất|功率 / 產能|capacity; power|名詞|Nhà máy hoạt động hết công suất.|工廠滿載運轉。||功率
2226|hít|吸（氣）|to inhale|動詞|Hít thở sâu nào.|深呼吸。||
2227|hang|洞穴|cave|名詞|Hang Sơn Đoòng là hang lớn nhất thế giới.|韓松洞是世界最大的洞穴。||
2228|nghề nghiệp|職業|occupation|名詞|Nghề nghiệp của bạn là gì?|你的職業是什麼？||藝業
2229|lớp học|教室 / 班級|classroom; class|名詞|Lớp học có hai mươi học sinh.|班上有二十個學生。||
2230|phổ thông|普通 / 普及|general; common|形容詞|Con tôi học trung học phổ thông.|我孩子讀高中。|phổ thông＝普通（高中）|普通
2231|hơn nữa|而且|moreover|連詞|Phòng này rẻ, hơn nữa còn gần biển.|這間房便宜，而且離海很近。||
2232|lý thuyết|理論|theory|名詞|Lý thuyết thì dễ, thực hành mới khó.|理論簡單，實作才難。||理說
2233|phòng chống|防治|to prevent and combat|動詞|Cần phòng chống dịch bệnh mùa mưa.|雨季要防治疫病。||
2234|bạo lực|暴力|violence|名詞|Nói không với bạo lực gia đình.|向家暴說不。||暴力
2235|chủ nhân|主人|owner|名詞|Chủ nhân ngôi nhà rất hiếu khách.|這棟房子的主人很好客。||主人
2236|di tích|古蹟|historical site|名詞|Văn Miếu là di tích nổi tiếng ở Hà Nội.|文廟是河內著名古蹟。||遺跡
2237|hiệp|半場 / 俠|half (match); chivalrous|名詞|Hiệp một kết thúc với tỷ số một không.|上半場以一比零結束。||俠
2238|tử vong|死亡|death|名詞|Tai nạn không có người tử vong.|事故沒有人死亡。||死亡
2239|cô dâu|新娘|bride|名詞|Cô dâu mặc áo dài đỏ.|新娘穿紅色奧黛。||
2240|phi|爆香（炒）/ 飛 / 非|to fry (garlic); to fly|動詞|Phi tỏi cho thơm rồi mới xào rau.|先把蒜爆香再炒菜。|phi lợi nhuận＝非營利|
2241|ác|惡 / 壞心|evil|形容詞|Đừng ác với động vật.|別對動物殘忍。||惡
2242|tù nhân|囚犯|prisoner|名詞|Tù nhân được thả sau mười năm.|囚犯十年後獲釋。||囚人
2243|khoẻ mạnh|健康強壯|healthy|形容詞|Chúc em bé khoẻ mạnh.|祝寶寶健康。||
2244|ấm áp|溫暖|warm|形容詞|Gia đình là nơi ấm áp nhất.|家是最溫暖的地方。||
2245|dâng|奉上 / 上漲|to offer; to rise|動詞|Nước sông dâng cao sau mưa.|雨後河水上漲。||
2246|tinh tế|細膩|refined; subtle|形容詞|Cách trang trí rất tinh tế.|裝潢很細膩。||精細
2247|khắc|雕刻 / 刻（時間）|to carve; quarter (hour)|動詞|Họ khắc tên lên nhẫn.|他們把名字刻在戒指上。||刻
2248|suy|想 / 衰退|to reason; to decline|動詞|Suy cho cùng, sức khỏe là quan trọng nhất.|說到底，健康最重要。|suy nghĩ＝思考|推
2249|Lào|寮國|Laos|名詞|Chúng tôi đi xe buýt sang Lào.|我們搭巴士到寮國。||
2250|lau|擦|to wipe|動詞|Lau bàn giúp tôi nhé.|請幫我擦桌子。||
2251|nhiên liệu|燃料|fuel|名詞|Giá nhiên liệu tăng mạnh.|燃料價格大漲。||燃料
2252|tôn giáo|宗教|religion|名詞|Việt Nam có nhiều tôn giáo.|越南有多種宗教。||宗教
2253|Tuấn|SKIP
2254|ngày xưa|從前|in the old days|副詞|Ngày xưa, ông tôi là thầy giáo.|以前我爺爺是老師。||
2255|vở|筆記本 / 齣（戲）|notebook; play|名詞|Con quên vở ở trường.|孩子把筆記本忘在學校。||
2256|người mẫu|模特兒|model|名詞|Cô ấy là người mẫu thời trang.|她是時裝模特兒。||
2257|thu hồi|收回|to recall; to withdraw|動詞|Hãng thu hồi sản phẩm bị lỗi.|廠商召回瑕疵產品。||收回
2258|đường phố|街道|street|名詞|Đường phố Hà Nội rất đông xe máy.|河內街頭機車很多。||
2259|kêu gọi|呼籲|to call on|動詞|Chính phủ kêu gọi người dân tiết kiệm điện.|政府呼籲民眾節約用電。||
2260|dáng|身材 / 樣子|figure; shape|名詞|Cô ấy có dáng người cao.|她身材高挑。||樣
2261|trước mắt|眼前 / 暫時|for now|副詞|Trước mắt chúng ta cần giải quyết việc này.|眼前我們要先解決這件事。||
2262|đại lý|代理商 / 經銷|agent; dealer|名詞|Đây là đại lý chính hãng.|這是原廠授權經銷商。||代理
2263|kịch|戲劇|drama; play|名詞|Tối nay chúng tôi đi xem kịch.|今晚我們去看舞台劇。||劇
2264|phản ánh|反映|to reflect; to report|動詞|Khách hàng phản ánh dịch vụ chậm.|顧客反映服務太慢。||反映
2265|bọc|包 / 裹|to wrap|動詞|Bọc quà giúp tôi nhé.|請幫我包裝禮物。||
2266|khoe|炫耀|to show off|動詞|Anh ấy khoe xe mới với bạn bè.|他向朋友炫耀新車。||
2267|Thái|泰族 / 泰國|Thai; Tai people|名詞|Người Thái sống nhiều ở vùng Tây Bắc.|泰族多居住在西北地區。|Thái Lan＝泰國|泰
2268|bốc|抓 / 抽（籤）|to pick up; to draw|動詞|Mỗi người bốc một lá thăm.|每人抽一支籤。||
2269|cớm|條子（警察俗稱）|cop (slang)|名詞|Cẩn thận, có cớm đằng kia!|小心，那邊有條子！|俚語，正式說 công an|
2270|đoạt|奪得|to seize; to win|動詞|Cô ấy đoạt huy chương vàng.|她奪得金牌。||奪
2271|danh|名|name; fame|名詞|Ông ấy là người có danh tiếng.|他是有名望的人。|danh sách＝名單|名
2272|trả giá|討價還價 / 付出代價|to bargain; to pay the price|動詞|Đi chợ nhớ trả giá nhé.|去市場記得殺價喔。||
2273|vi khuẩn|細菌|bacteria|名詞|Rửa tay để diệt vi khuẩn.|洗手以殺死細菌。||微菌
2274|đình|亭（村莊祭祀廳）|communal house|名詞|Lễ hội được tổ chức ở đình làng.|祭典在村亭舉行。||亭
2275|gắn bó|緊密相依|attached; close|形容詞|Tôi gắn bó với công ty này mười năm.|我在這家公司待了十年。||
2276|huyền thoại|傳說 / 傳奇|legend|名詞|Anh ấy là huyền thoại bóng đá.|他是足球傳奇人物。||玄話
2277|dư luận|輿論|public opinion|名詞|Vụ việc gây xôn xao dư luận.|此事引起輿論譁然。||輿論
2278|học hỏi|學習 / 請教|to learn from|動詞|Tôi còn phải học hỏi nhiều.|我還要多學習。||
2279|tin cậy|信賴|reliable; to trust|形容詞|Đây là đối tác đáng tin cậy.|這是值得信賴的合作夥伴。||
2280|khái niệm|概念|concept|名詞|Khái niệm này hơi khó hiểu.|這個概念有點難懂。||概念
2281|thuốc lá|香菸|cigarette|名詞|Ở đây cấm hút thuốc lá.|這裡禁止抽菸。||
2282|giảng|講解|to explain; to lecture|動詞|Thầy giảng bài rất dễ hiểu.|老師講課很好懂。||講
2283|pháp lý|法律上的|legal|形容詞|Hợp đồng này có giá trị pháp lý.|這份合約具法律效力。||法理
2284|don|SKIP
2285|đúng đắn|正確 / 正當|proper; correct|形容詞|Đó là quyết định đúng đắn.|那是正確的決定。||
2286|tập hợp|集合|to gather|動詞|Mọi người tập hợp ở sảnh lúc tám giờ.|大家八點在大廳集合。||集合
2287|cựu|前任 / 舊|former|形容詞|Ông ấy là cựu giám đốc.|他是前任總經理。||舊
2288|khí hậu|氣候|climate|名詞|Khí hậu miền Nam nóng quanh năm.|南部氣候終年炎熱。||氣候
2289|gối|枕頭 / 膝蓋（đầu gối）|pillow; knee|名詞|Cho tôi thêm một cái gối.|請再給我一個枕頭。||
2290|hưu|退休|retirement|名詞|Bố tôi đã nghỉ hưu.|我爸爸已經退休了。||休
2291|trân trọng|珍惜 / 謹（書信）|to cherish; respectfully|動詞|Tôi rất trân trọng tình bạn này.|我很珍惜這份友誼。|書信結尾：Trân trọng（謹啟）|珍重
2292|cuộn|捲|to roll; roll|動詞|Cuộn chiếu lại giúp tôi.|請幫我把蓆子捲起來。|gỏi cuốn 的 cuốn 是另一字|
2293|phương thức|方式|method; mode|名詞|Phương thức thanh toán là gì?|付款方式是什麼？||方式
2294|thời đại|時代|era|名詞|Chúng ta sống trong thời đại số.|我們生活在數位時代。||時代
2295|có ích|有用|useful|形容詞|Lời khuyên này rất có ích.|這個建議很有用。||
2296|hạn|期限 / 乾旱|deadline; drought|名詞|Hạn nộp hồ sơ là thứ sáu.|資料繳交期限是星期五。||限
2297|đầm|洋裝 / 潟湖|dress; lagoon|名詞|Cô ấy mặc đầm dự tiệc.|她穿洋裝參加派對。||
2298|dụng cụ|工具 / 用具|tool; equipment|名詞|Mang theo dụng cụ sửa xe.|帶上修車工具。||用具
2299|giả vờ|假裝|to pretend|動詞|Đừng giả vờ không biết.|別假裝不知道。||
2300|mồm|嘴（口語）|mouth (colloquial)|名詞|Câm mồm đi!|閉嘴！|較粗俗，禮貌用 miệng|
2301|ông bà|祖父母 / 祖先|grandparents; ancestors|名詞|Tết này tôi về thăm ông bà.|今年過年我回去看爺爺奶奶。||
2302|nạp|儲值 / 充|to top up; to load|動詞|Tôi muốn nạp tiền điện thoại.|我想儲值手機話費。||納
2303|sạch sẽ|乾淨|clean|形容詞|Phòng khách sạn rất sạch sẽ.|飯店房間很乾淨。||
2304|công thức|公式 / 食譜|formula; recipe|名詞|Cho tôi xin công thức nấu món này.|請給我這道菜的食譜。||公式
2305|cúi|低（頭）/ 彎（腰）|to bow; to bend|動詞|Cúi đầu chào khách.|低頭向客人行禮。||
2306|góp|湊 / 貢獻|to contribute; to pool|動詞|Mỗi người góp một trăm nghìn.|每人出十萬盾。||
2307|sáng tác|創作|to compose|動詞|Ông ấy sáng tác nhiều bài hát hay.|他創作了很多好歌。||創作
2308|xe đạp|腳踏車|bicycle|名詞|Hội An rất hợp để đi xe đạp.|會安很適合騎腳踏車。||
2309|cất|收好 / 起飛|to put away; to take off|動詞|Cất tiền vào ví đi.|把錢收進皮夾吧。|cất cánh＝起飛|
2310|cua|螃蟹 / 彎道|crab; bend|名詞|Bánh canh cua rất ngon.|螃蟹粗米麵很好吃。||
2311|chăn nuôi|畜牧|livestock farming|名詞|Gia đình anh ấy làm nghề chăn nuôi.|他家從事畜牧業。||
2312|tháp|塔|tower|名詞|Tháp Chàm ở Nha Trang rất cổ.|芽莊的占婆塔很古老。||塔
2313|sửa đổi|修改|to amend|動詞|Hợp đồng cần sửa đổi điều khoản ba.|合約第三條需要修改。||
2314|biết ơn|感恩|grateful|形容詞|Tôi rất biết ơn sự giúp đỡ của anh.|我很感謝你的幫忙。||
2315|đất đai|土地|land|名詞|Giá đất đai ở đây tăng nhanh.|這裡的地價漲得很快。||
2316|mặt đất|地面|ground|名詞|Máy bay sắp chạm mặt đất.|飛機即將著陸。||
2317|tạm thời|暫時|temporary|形容詞|Đây chỉ là giải pháp tạm thời.|這只是暫時的辦法。||暫時
2318|đồng bào|同胞|compatriots|名詞|Đồng bào miền Trung đang gặp lũ.|中部同胞正遭遇洪水。||同胞
2319|động lực|動力|motivation|名詞|Gia đình là động lực của tôi.|家人是我的動力。||動力
2320|buôn bán|做生意|to trade|動詞|Bà tôi buôn bán ở chợ.|我奶奶在市場做生意。||
2321|bản chất|本質|essence|名詞|Bản chất của vấn đề là thiếu giao tiếp.|問題的本質是缺乏溝通。||本質
2322|cánh tay|手臂|arm|名詞|Cánh tay tôi bị đau.|我的手臂痛。||
2323|cân nhắc|斟酌|to weigh up|動詞|Để tôi cân nhắc thêm.|讓我再考慮一下。||
2324|công chúng|大眾|the public|名詞|Bảo tàng mở cửa cho công chúng.|博物館對大眾開放。||公眾
2325|sói|狼|wolf|名詞|Con sói trong truyện rất gian xảo.|故事裡的狼很狡猾。||
2326|tiến độ|進度|progress|名詞|Tiến độ dự án đang chậm.|專案進度落後。||進度
2327|thẩm mỹ|美容 / 審美|aesthetics; cosmetic|名詞|Chị ấy làm ở viện thẩm mỹ.|她在美容院工作。||審美
2328|trung uý|中尉|lieutenant|名詞|Anh ấy là trung uý quân đội.|他是陸軍中尉。||中尉
2329|ngưng|停止|to stop|動詞|Mưa đã ngưng chưa?|雨停了嗎？||凝
2330|tức|生氣 / 即（tức là）|angry; that is|形容詞|Tôi tức lắm vì bị lừa.|被騙了我很氣。|tức là＝也就是說|即
2331|thoả mãn|滿足|to satisfy|動詞|Sản phẩm thoả mãn nhu cầu khách hàng.|產品滿足顧客需求。||妥滿
2332|biết đâu|說不定|who knows|副詞|Biết đâu mai trời lại nắng.|說不定明天又放晴了。||
2333|cãi|吵架 / 頂嘴|to argue|動詞|Hai anh em lại cãi nhau.|兩兄弟又吵架了。||
2334|trí tuệ|智慧|intelligence|名詞|Trí tuệ nhân tạo đang phát triển nhanh.|人工智慧發展迅速。||智慧
2335|ốm|生病（北部）/ 瘦（南部）|sick (North); thin (South)|形容詞|Hôm nay con bị ốm, không đi học.|今天孩子生病沒去上學。|南部 ốm＝瘦，生病說 bệnh|
2336|quét|掃 / 掃描|to sweep; to scan|動詞|Quét mã QR để thanh toán.|掃 QR 碼付款。||
2337|cút|鵪鶉 / 滾開（粗）|quail; get lost (rude)|名詞|Trứng cút luộc rất ngon.|水煮鵪鶉蛋很好吃。|Cút đi! 是很兇的「滾開」|
2338|đấm|揍 / 拳打|to punch|動詞|Anh ta đấm vào tường vì tức giận.|他氣得一拳打在牆上。||
2339|trả thù|報仇|to take revenge|動詞|Phim kể về một người muốn trả thù.|電影講一個想報仇的人。||
2340|tư|私 / 四（序數）|private; fourth|形容詞|Con tôi học trường tư.|我孩子讀私立學校。|thứ tư＝星期三|私
2341|đàm phán|談判|to negotiate|動詞|Hai công ty đang đàm phán hợp đồng.|兩家公司正在談合約。||談判
2342|bận rộn|忙碌|busy|形容詞|Cuộc sống ở thành phố rất bận rộn.|城市生活很忙碌。||
2343|cản|阻擋|to block|動詞|Đừng cản đường người khác.|別擋別人的路。||
2344|đồng đội|隊友|teammate|名詞|Anh ấy chuyền bóng cho đồng đội.|他把球傳給隊友。||同隊
2345|nghiệp vụ|業務 / 專業技能|professional skills|名詞|Nhân viên cần nâng cao nghiệp vụ.|員工需要提升專業能力。||業務
2346|nhân chứng|證人|witness|名詞|Có nhân chứng thấy vụ tai nạn.|有證人看到車禍。||人證
2347|nhốt|關（起來）|to lock up|動詞|Đừng nhốt con chó cả ngày.|別整天把狗關著。||
2348|chân thành|真誠|sincere|形容詞|Xin chân thành cảm ơn.|衷心感謝。||真誠
2349|loa|喇叭|loudspeaker|名詞|Loa của quán hát to quá.|店裡的喇叭太大聲了。||
2350|trợ giúp|幫助|to assist|動詞|Cần trợ giúp, xin bấm nút này.|需要協助請按此鈕。||
2351|giơ|舉起|to raise|動詞|Ai biết thì giơ tay.|知道的人請舉手。||
2352|ám ảnh|糾纏 / 陰影|to haunt; obsession|動詞|Vụ tai nạn ám ảnh tôi mãi.|那場車禍一直讓我揮之不去。||暗影
2353|lặn|潛水 / （日）落|to dive; to set|動詞|Chúng tôi đi lặn ngắm san hô.|我們去潛水看珊瑚。||
2354|hài hước|幽默|humorous|形容詞|Anh ấy rất hài hước.|他很幽默。||諧謔
2355|du học|留學|to study abroad|動詞|Em muốn du học ở Đài Loan.|我想去台灣留學。||遊學
2356|kích hoạt|啟用 / 開通|to activate|動詞|Bạn cần kích hoạt thẻ trước khi dùng.|卡片使用前需要開通。||激活
2357|bồi dưỡng|進修 / 補身|to train; to nourish|動詞|Công ty cử tôi đi bồi dưỡng nghiệp vụ.|公司派我去進修。||培養
2358|chúng mày|你們（粗俗）|you guys (rude)|代名詞|Chúng mày đi đâu đấy?|你們去哪裡？|只用於很熟的同輩，對外人很失禮|
2359|ghê|可怕 / 噁心 / 好（口語）|scary; gross; really|形容詞|Con sâu này trông ghê quá.|這隻蟲看起來好噁心。|口語 giỏi ghê＝好厲害|
2360|quyền lợi|權益|rights and interests|名詞|Người lao động cần biết quyền lợi của mình.|勞工要了解自己的權益。||權利
2361|giọt|滴|drop|名詞|Mỗi lần nhỏ hai giọt thuốc.|每次滴兩滴藥水。||
2362|lãnh|領（南部）|to receive (pay)|動詞|Cuối tháng mới lãnh lương.|月底才領薪水。|北部說 lĩnh|領
2363|xe buýt|公車|bus|名詞|Xe buýt số mười đi sân bay.|十號公車到機場。||
2364|chăn|被子 / 放牧|blanket; to herd|名詞|Trời lạnh, đắp thêm chăn đi.|天冷，多蓋條被子吧。|南部說 mền|
2365|tui|我（南部口語）|I (Southern casual)|代名詞|Tui là người Sài Gòn.|我是西貢人。|tôi 的南部口語發音|
2366|thang|梯子 / 階梯|ladder; stairs|名詞|Đi thang máy lên tầng năm.|搭電梯上五樓。|thang máy＝電梯|
2367|điếm|SKIP
2368|biệt thự|別墅|villa|名詞|Họ thuê một biệt thự gần biển.|他們租了一棟海邊別墅。||別墅
2369|công cộng|公共|public|形容詞|Không hút thuốc nơi công cộng.|公共場所禁止吸菸。||公共
2370|huyết áp|血壓|blood pressure|名詞|Ông tôi bị huyết áp cao.|我爺爺有高血壓。||血壓
2371|rèn luyện|鍛鍊|to train; to hone|動詞|Thể thao giúp rèn luyện sức khỏe.|運動有助鍛鍊身體。||
2372|tuân|遵守|to comply|動詞|Mọi người phải tuân thủ nội quy.|大家都必須遵守規定。|多見於 tuân thủ|遵
2373|tức giận|憤怒|angry|形容詞|Anh ấy tức giận bỏ đi.|他氣得走掉了。||
2374|di sản|遺產|heritage|名詞|Hội An là di sản văn hóa thế giới.|會安是世界文化遺產。||遺產
2375|thiên đường|天堂|paradise|名詞|Phú Quốc là thiên đường du lịch.|富國島是旅遊天堂。||天堂
2376|thắt|繫 / 打（結）|to tie|動詞|Thắt cà vạt giúp anh với.|幫我打領帶。||
2377|xếp hạng|排名|to rank|動詞|Khách sạn được xếp hạng năm sao.|飯店被評為五星級。||
2378|dự thảo|草案|draft|名詞|Đây là dự thảo hợp đồng.|這是合約草案。||預草
2379|cơ cấu|結構|structure|名詞|Công ty đang thay đổi cơ cấu tổ chức.|公司正在調整組織結構。||機構
2380|qua đời|去世|to pass away|動詞|Ông ấy qua đời năm ngoái.|他去年過世了。||
2381|vãi|灑 / 超（俚語）|to spill; very (slang)|動詞|Đừng làm vãi cơm ra bàn.|別把飯灑在桌上。|年輕人俚語 hay vãi＝超讚，較粗|
2382|vệ tinh|衛星|satellite|名詞|Việt Nam đã phóng vệ tinh lên quỹ đạo.|越南已將衛星送上軌道。||衛星
2383|đựng|裝|to contain|動詞|Túi này dùng để đựng đồ ăn.|這個袋子用來裝食物。||
2384|đối diện|對面|opposite|名詞|Ngân hàng ở đối diện khách sạn.|銀行在飯店對面。||對面
2385|mồ hôi|汗|sweat|名詞|Trời nóng, mồ hôi ướt áo.|天氣熱，汗濕了衣服。||
2386|phê|批示 / 興奮（俚語）|to approve; high (slang)|動詞|Giám đốc đã phê đơn xin nghỉ.|總經理已批准請假單。|phê duyệt＝核准|批
2387|dẫn đầu|領先|to lead|動詞|Đội Việt Nam đang dẫn đầu bảng.|越南隊在小組暫居領先。||
2388|kẹo|糖果|candy|名詞|Con không được ăn nhiều kẹo.|孩子不能吃太多糖。||
2389|lãnh thổ|領土|territory|名詞|Đây là lãnh thổ của Việt Nam.|這是越南的領土。||領土
2390|làm chủ|做主 / 掌握|to master; to be in charge|動詞|Tôi muốn làm chủ tiếng Việt.|我想精通越語。||
2391|phái|派 / 派遣|faction; to dispatch|名詞|Công ty phái người sang hỗ trợ.|公司派人過去支援。||派
2392|chương|章|chapter|名詞|Đọc chương ba trước khi đến lớp.|上課前先讀第三章。||章
2393|mật|蜂蜜 / 祕密|honey; secret|名詞|Pha trà với mật ong.|用蜂蜜泡茶。|mật khẩu＝密碼|密
2394|luyện tập|練習|to practise|動詞|Luyện tập mỗi ngày sẽ tiến bộ.|每天練習就會進步。||練習
2395|cứt|SKIP
2396|trừng phạt|懲罰|to punish|動詞|Kẻ vi phạm sẽ bị trừng phạt.|違規者將受到懲罰。||懲罰
2397|đột nhập|闖入|to break in|動詞|Kẻ trộm đột nhập vào nhà lúc nửa đêm.|小偷半夜闖入屋內。||突入
2398|bể|破（南部）/ 池|broken; tank|動詞|Cái ly bị bể rồi.|杯子破了。|北部說 vỡ；bể bơi＝游泳池|
2399|cập|靠（岸）/ 更新（cập nhật）|to dock; to update|動詞|Tàu sẽ cập cảng lúc chín giờ.|船九點靠港。|cập nhật＝更新|及
2400|buồn cười|好笑|funny|形容詞|Chuyện này buồn cười quá.|這件事太好笑了。||
2401|nâu|棕色|brown|形容詞|Cho tôi ly nâu đá.|請給我一杯冰牛奶咖啡。|河內 nâu đá＝冰煉乳咖啡|
2402|tựa|靠 / 標題 / 像|to lean; title; like|動詞|Tựa lưng vào ghế cho đỡ mỏi.|靠著椅背比較不累。||
2403|lo ngại|擔憂|concerned|動詞|Nhiều người lo ngại về ô nhiễm.|很多人擔心污染問題。||
2404|dấu vết|痕跡|trace|名詞|Cảnh sát tìm thấy dấu vết lạ.|警方發現可疑痕跡。||
2405|liên|連續|continuously|副詞|Điện thoại reo liên hồi.|電話響個不停。|liên tục＝連續|連
2406|đội trưởng|隊長|captain|名詞|Anh ấy là đội trưởng đội bóng.|他是球隊隊長。||隊長
2407|thu thập|收集|to collect|動詞|Chúng tôi thu thập ý kiến khách hàng.|我們收集顧客意見。||收集
2408|danh dự|名譽|honour|名詞|Tôi lấy danh dự ra hứa.|我以名譽擔保。||名譽
2409|hợp pháp|合法|legal|形容詞|Anh có giấy phép lao động hợp pháp không?|你有合法的工作許可嗎？||合法
2410|non|嫩 / 經驗不足|young; inexperienced|形容詞|Rau này còn non.|這菜還很嫩。||
2411|Bình Dương|平陽|Binh Duong|名詞|Nhiều nhà máy Đài Loan ở Bình Dương.|許多台資工廠在平陽。||平陽
2412|chìa|伸出 / 鑰匙|to hold out; key|動詞|Anh ấy chìa tay ra bắt tay tôi.|他伸出手跟我握手。|chìa khóa＝鑰匙|
2413|chẩn đoán|診斷|to diagnose|動詞|Bác sĩ chẩn đoán tôi bị viêm họng.|醫生診斷我喉嚨發炎。||診斷
2414|diễn biến|發展 / 經過|development; course|名詞|Diễn biến cơn bão rất phức tạp.|颱風的動態很複雜。||演變
2415|xấu xa|卑劣|wicked|形容詞|Đó là hành động xấu xa.|那是卑劣的行為。||
2416|chi nhánh|分公司 / 分行|branch|名詞|Ngân hàng có chi nhánh ở Đà Nẵng.|銀行在峴港有分行。||
2417|cá tính|個性|personality|名詞|Cô ấy có cá tính mạnh.|她個性很強。||個性
2418|riêng tư|隱私|private|形容詞|Đây là chuyện riêng tư.|這是私事。||
2419|đẻ|生（孩子，口語）|to give birth|動詞|Chị ấy mới đẻ em bé.|她剛生小寶寶。|正式說 sinh|
2420|xâm nhập|入侵|to intrude|動詞|Virus xâm nhập vào máy tính.|病毒入侵電腦。||侵入
2421|kiểu dáng|款式|design; style|名詞|Kiểu dáng xe này rất đẹp.|這台車的款式很好看。||
2422|lai|混血 / 下擺|mixed; hem|形容詞|Con của họ là con lai.|他們的孩子是混血兒。||
2423|chủ nhật|星期日|Sunday|名詞|Chủ nhật này bạn có rảnh không?|這個星期天你有空嗎？||主日
2424|làm quen|認識|to get to know|動詞|Tôi muốn làm quen với bạn.|我想認識你。||
2425|ngược lại|相反|on the contrary|副詞|Tôi tưởng nó đắt, ngược lại rất rẻ.|我以為很貴，結果正好相反，很便宜。||
2426|ẩn|隱藏|to hide|動詞|Ẩn ứng dụng này đi.|把這個應用程式隱藏起來。||隱
2427|dọn dẹp|打掃|to clean up|動詞|Cuối tuần tôi dọn dẹp nhà cửa.|週末我打掃家裡。||
2428|mù|瞎 / 霧|blind; fog|形容詞|Ông ấy bị mù từ nhỏ.|他從小就失明。|sương mù＝霧|
2429|tư duy|思維|thinking|名詞|Bạn cần thay đổi tư duy.|你需要改變思維。||思惟
2430|đẹp trai|帥|handsome|形容詞|Anh ấy rất đẹp trai.|他很帥。||
2431|cộng hoà|共和|republic|名詞|Cộng hoà Xã hội Chủ nghĩa Việt Nam.|越南社會主義共和國。||共和
2432|từ thiện|慈善|charity|名詞|Công ty tổ chức hoạt động từ thiện.|公司舉辦慈善活動。||慈善
2433|nở|開（花）/ 孵化|to bloom; to hatch|動詞|Hoa đào nở vào dịp Tết.|桃花在過年時盛開。||
2434|hung thủ|兇手|perpetrator|名詞|Cảnh sát đã tìm ra hung thủ.|警方已找到兇手。||兇手
2435|liên minh|聯盟|alliance|名詞|Hai công ty thành lập liên minh.|兩家公司結盟。||聯盟
2436|đòn|一擊 / 扁擔|blow; pole|名詞|Đó là một đòn đau với công ty.|那對公司是重重一擊。||
2437|công chức|公務員|civil servant|名詞|Mẹ tôi là công chức nhà nước.|我媽媽是公務員。||公職
2438|tâm trí|心思 / 腦海|mind|名詞|Tâm trí tôi lúc nào cũng nghĩ đến gia đình.|我心裡總是想著家人。||心智
2439|bảo mật|保密|security; confidential|名詞|Đây là thông tin bảo mật.|這是機密資訊。||保密
2440|căng|緊繃 / 撐開|tight; tense|形容詞|Tình hình đang rất căng.|情勢非常緊張。||
2441|thuận|順 / 慣用（手）|smooth; handed|形容詞|Tôi thuận tay trái.|我是左撇子。||順
2442|điển hình|典型|typical|形容詞|Đây là ví dụ điển hình.|這是典型的例子。||典型
2443|tin đồn|謠言|rumour|名詞|Đừng tin tin đồn trên mạng.|別相信網路謠言。||
2444|cải tiến|改進|to improve|動詞|Chúng tôi liên tục cải tiến sản phẩm.|我們持續改進產品。||改進
2445|hứa hẹn|承諾 / 前景看好|to promise; promising|動詞|Thị trường này rất hứa hẹn.|這個市場前景很好。||
2446|ví|皮夾 / 比喻|wallet; to compare|名詞|Tôi để quên ví ở nhà.|我把皮夾忘在家裡了。||
2447|doạ|威脅 / 嚇唬|to threaten|動詞|Đừng doạ trẻ con.|別嚇唬小孩。||
2448|dễ chịu|舒服|pleasant|形容詞|Thời tiết hôm nay rất dễ chịu.|今天天氣很舒服。||
2449|chào đón|迎接|to welcome|動詞|Cả nhà ra sân bay chào đón tôi.|全家到機場接我。||
2450|pháo|鞭炮 / 砲|firecracker; artillery|名詞|Pháo hoa đêm giao thừa rất đẹp.|除夕夜的煙火很美。|pháo hoa＝煙火|炮
2451|thích thú|開心有趣|delighted|形容詞|Bọn trẻ rất thích thú với trò chơi.|孩子們玩得很開心。||
2452|đành|只好|to have no choice but|副詞|Hết xe buýt, tôi đành đi taxi.|沒公車了，我只好搭計程車。||
2453|buôn|販賣|to trade|動詞|Anh ấy buôn hàng từ Trung Quốc về.|他從中國批貨回來賣。||
2454|lời nói|言語|words; speech|名詞|Lời nói của mẹ rất ấm áp.|媽媽的話很溫暖。||
2455|tiền bạc|錢財|money|名詞|Đừng vì tiền bạc mà mất bạn bè.|別為了錢失去朋友。||
2456|tử|死（漢越）/ 子|death (Sino); child (Sino)|名詞|Tỷ lệ tử vong đã giảm.|死亡率已下降。|多見於 tử vong、phụ tử|死
2457|quỳ|跪|to kneel|動詞|Họ quỳ xuống cầu nguyện.|他們跪下祈禱。||跪
2458|hành lang|走廊|corridor|名詞|Nhà vệ sinh ở cuối hành lang.|廁所在走廊盡頭。||行廊
2459|dối trá|虛偽|deceitful|形容詞|Tôi ghét sự dối trá.|我討厭虛偽。||
2460|áo khoác|外套|jacket|名詞|Mang áo khoác đi, Đà Lạt lạnh lắm.|帶件外套吧，大叻很冷。||
2461|chiêu|招數 / 招（待）|trick; move|名詞|Đây là chiêu bán hàng rất hay.|這是很厲害的銷售招數。|chiêu đãi＝招待|招
2462|dự định|打算|to plan|動詞|Bạn dự định ở lại bao lâu?|你打算待多久？||預定
2463|mạng lưới|網路 / 網絡|network|名詞|Công ty có mạng lưới phân phối rộng.|公司有廣泛的經銷網絡。||
2464|ven|沿著邊緣|along the edge|介詞|Có nhiều quán cà phê ven sông.|河邊有很多咖啡店。||
2465|xinh|漂亮|pretty|形容詞|Em bé xinh quá!|小寶寶好漂亮！||
2466|cúp|獎盃 / 停（電）|cup (trophy); to cut off|名詞|Đội Việt Nam giành cúp vô địch.|越南隊奪得冠軍盃。|cúp điện＝停電|
2467|ăn cắp|偷竊|to steal|動詞|Ăn cắp là phạm pháp.|偷竊是違法的。||
2468|củ|塊莖|tuber; root|名詞|Mua cho mẹ ba củ khoai lang.|幫媽媽買三個地瓜。|俚語 một củ＝一百萬盾|
2469|hữu ích|有益 / 有用|useful|形容詞|Ứng dụng này rất hữu ích.|這個應用程式很實用。||有益
2470|tràn|溢出 / 湧入|to overflow|動詞|Nước tràn ra sàn nhà.|水溢到地板上。||
2471|múa|跳舞|to dance|動詞|Các em múa rất đẹp.|小朋友們舞跳得很美。||
2472|gi|SKIP
2473|nghĩa vụ|義務|duty; obligation|名詞|Đóng thuế là nghĩa vụ của công dân.|納稅是公民的義務。||義務
2474|chén|碗（南部）/ 小杯|bowl; small cup|名詞|Cho tôi thêm một chén cơm.|請再給我一碗飯。|北部說 bát|盞
2475|đông đảo|眾多|numerous|形容詞|Lễ hội thu hút đông đảo du khách.|節慶吸引大批遊客。||
2476|cu|SKIP
2477|k|SKIP
2478|điện ảnh|電影（藝術）|cinema|名詞|Anh ấy làm việc trong ngành điện ảnh.|他在電影業工作。||電影
2479|chỉ định|指定 / 醫囑|to designate; to prescribe|動詞|Bác sĩ chỉ định nghỉ ngơi một tuần.|醫生囑咐休息一週。||指定
2480|Lý|李（姓氏）/ 理|Ly (surname); reason (Sino)|名詞|Nhà Lý dời đô về Thăng Long.|李朝遷都昇龍。|lý do＝理由|李
2481|cách thức|方式|manner; method|名詞|Cách thức làm việc của anh rất hiệu quả.|你的工作方式很有效率。||格式
2482|thành thật|誠實|honest|形容詞|Thành thật mà nói, tôi không thích.|老實說，我不喜歡。||誠實
2483|dạ dày|胃|stomach|名詞|Tôi bị đau dạ dày.|我胃痛。||
2484|kim cương|鑽石|diamond|名詞|Chiếc nhẫn kim cương rất đắt.|鑽戒很貴。||金剛
2485|loài người|人類|humankind|名詞|Nước rất quan trọng với loài người.|水對人類非常重要。||
2486|nặng nề|沉重 / 嚴重|heavy; severe|形容詞|Cơn bão gây thiệt hại nặng nề.|颱風造成嚴重損失。||
2487|lọt|漏進 / 鑽過|to slip through|動詞|Đồng xu lọt xuống khe.|硬幣掉進縫裡。|lọt vào chung kết＝進入決賽|
2488|sẹo|疤|scar|名詞|Vết mổ để lại sẹo.|手術留下疤痕。||
2489|văn minh|文明|civilized|形容詞|Hãy xếp hàng văn minh.|請文明排隊。||文明
2490|cộng sản|共產|communist|形容詞|Đảng Cộng sản Việt Nam thành lập năm 1930.|越南共產黨成立於 1930 年。||共產
2491|dừa|椰子|coconut|名詞|Cho tôi một trái dừa tươi.|請給我一顆新鮮椰子。||
2492|quãng|一段（距離、時間）|stretch; interval|名詞|Quãng đường này đi bộ mất mười phút.|這段路走路要十分鐘。||
2493|ngầm|地下 / 暗中|underground; secret|形容詞|Hà Nội đang xây tàu điện ngầm.|河內正在興建地鐵。||
2494|giáp|接壤 / 甲|to border; armour|動詞|Việt Nam giáp Lào và Campuchia.|越南與寮國、柬埔寨接壤。||甲
2495|tiêu biểu|代表性|representative|形容詞|Phở là món ăn tiêu biểu của Việt Nam.|河粉是越南的代表性料理。||標表
2496|bán lẻ|零售|retail|動詞|Cửa hàng chỉ bán lẻ, không bán sỉ.|這家店只零售不批發。||
2497|mạo hiểm|冒險|risky; to venture|形容詞|Leo núi một mình rất mạo hiểm.|一個人爬山很危險。||冒險
2498|hải quan|海關|customs|名詞|Anh cần khai báo hải quan.|你需要向海關申報。||海關
2499|tiên tiến|先進|advanced|形容詞|Nhà máy dùng công nghệ tiên tiến.|工廠採用先進技術。||先進
2500|tổng kết|總結|to sum up|動詞|Cuối năm công ty họp tổng kết.|年底公司開總結會議。||總結
2501|hiệu lực|效力 / 生效|validity; effect|名詞|Hợp đồng có hiệu lực từ ngày ký.|合約自簽署日起生效。||效力
2502|lắp đặt|安裝|to install|動詞|Thợ đang lắp đặt máy lạnh.|師傅正在安裝冷氣。||
2503|men|酵母 / 琺瑯 / 釉|yeast; enamel; glaze|名詞|Bánh mì cần men để nở.|麵包要用酵母才會膨脹。||
2504|bút|筆|pen|名詞|Cho tôi mượn cây bút.|借我一支筆。||筆
2505|chặng|段（路程）|leg; stage|名詞|Chặng đường cuối cùng rất khó.|最後一段路很艱難。||
2506|dâu|媳婦 / 草莓 / 桑|daughter-in-law; strawberry|名詞|Đà Lạt nổi tiếng với dâu tây.|大叻以草莓聞名。|con dâu＝媳婦|
2507|nhỏ bé|小小的|small; tiny|形容詞|Đây là món quà nhỏ bé của tôi.|這是我的小小心意。||
2508|sản lượng|產量|output|名詞|Sản lượng cà phê năm nay tăng.|今年咖啡產量增加。||產量
2509|tiện|方便 / 順便|convenient|形容詞|Ở gần ga tàu rất tiện.|住在車站附近很方便。|tiện đường＝順路|便
2510|van|閥門 / 哀求|valve; to plead|名詞|Van nước bị hỏng.|水閥壞了。|van xin＝哀求|
2511|móc|鉤子 / 掛|hook; to hang|名詞|Treo túi lên móc.|把包包掛在鉤子上。||
2512|tài xế|司機|driver|名詞|Tài xế taxi rất nhiệt tình.|計程車司機很熱心。||
2513|uỷ viên|委員|committee member|名詞|Ông ấy là uỷ viên hội đồng quản trị.|他是董事會成員。||委員
2514|phát sinh|產生 / 發生|to arise|動詞|Nếu phát sinh chi phí, tôi sẽ báo trước.|如果產生額外費用，我會先通知。||發生
2515|bầu trời|天空|sky|名詞|Bầu trời hôm nay rất xanh.|今天的天空很藍。||
2516|thuận tiện|方便|convenient|形容詞|Thanh toán bằng thẻ rất thuận tiện.|刷卡付款很方便。||順便
2517|tối thiểu|最少 / 最低|minimum|形容詞|Lương tối thiểu vừa tăng.|最低工資剛調漲。||最少
2518|vú|乳房 / 奶媽|breast; nanny|名詞|Ung thư vú cần phát hiện sớm.|乳癌需要及早發現。||乳
2519|bơm|打氣 / 幫浦|to pump; pump|動詞|Bơm bánh xe giúp tôi nhé.|請幫我的輪胎打氣。||
2520|năng động|有活力|dynamic|形容詞|Sài Gòn là thành phố năng động.|西貢是充滿活力的城市。||能動
2521|dưỡng|保養 / 養|to nourish; to care for|動詞|Kem này dùng để dưỡng da.|這款乳霜用來保養皮膚。||養
2522|lãi|利息 / 利潤|interest; profit|名詞|Gửi tiết kiệm được lãi bao nhiêu?|存款利息有多少？||
2523|tranh cãi|爭論|to argue|動詞|Hai bên tranh cãi về giá.|雙方為了價格爭論。||
2524|cạn|乾涸 / 淺 / 用完|dried up; shallow|形容詞|Hồ nước đã cạn.|湖水乾了。|cạn ly＝乾杯|
2525|mặt bằng|場地 / 平面|premises; level ground|名詞|Tôi đang tìm mặt bằng để mở quán.|我正在找店面開店。||
2526|kỷ lục|紀錄|record|名詞|Anh ấy phá kỷ lục quốc gia.|他打破了全國紀錄。||紀錄
2527|kỹ sư|工程師|engineer|名詞|Anh trai tôi là kỹ sư điện.|我哥哥是電機工程師。||技師
2528|vang|響亮 / 紅酒|resounding; wine|動詞|Tiếng cười vang khắp phòng.|笑聲響遍整個房間。|rượu vang＝葡萄酒|
2529|nhạc sĩ|作曲家|composer; musician|名詞|Trịnh Công Sơn là nhạc sĩ nổi tiếng.|鄭公山是知名音樂家。||樂士
2530|giây phút|片刻 / 時刻|moment|名詞|Đó là giây phút hạnh phúc nhất.|那是最幸福的時刻。||
2531|hét|大叫|to shout|動詞|Đừng hét to như vậy.|別那麼大聲叫。||
2532|tiêu cực|消極 / 負面|negative|形容詞|Đừng suy nghĩ tiêu cực.|別負面思考。||消極
2533|xả|沖洗 / 放（水）/ 宣洩|to rinse; to release|動詞|Xả nước cho sạch xà phòng.|用水把肥皂沖乾淨。|xả stress＝紓壓|
2534|chọn lựa|選擇|to choose|動詞|Có nhiều món để chọn lựa.|有很多菜可以選。||
2535|linh hoạt|靈活|flexible|形容詞|Giờ làm việc ở đây rất linh hoạt.|這裡的工作時間很彈性。||靈活
2536|phê duyệt|核准|to approve|動詞|Hồ sơ đã được phê duyệt.|資料已經核准。||批閱
2537|chui|鑽 / 偷偷（非法）|to crawl through; illegal|動詞|Con mèo chui vào gầm giường.|貓鑽到床底下。|hàng chui＝走私貨|
2538|mảng|領域 / 片|area; section|名詞|Tôi phụ trách mảng marketing.|我負責行銷這一塊。||
2539|Trái Đất|地球|Earth|名詞|Trái Đất quay quanh Mặt Trời.|地球繞著太陽轉。||
2540|lần lượt|依序|in turn|副詞|Mọi người lần lượt giới thiệu bản thân.|大家輪流自我介紹。||
2541|ngoài ra|此外|besides|連詞|Ngoài ra, khách sạn còn có hồ bơi.|此外，飯店還有游泳池。||
2542|mê|迷上 / 昏迷|to be crazy about; unconscious|動詞|Con tôi mê bóng đá.|我孩子迷足球。||迷
2543|thu hoạch|收成 / 收穫|harvest|動詞|Nông dân đang thu hoạch cà phê.|農民正在採收咖啡。||收穫
2544|hồn|魂|soul|名詞|Bài hát này rất có hồn.|這首歌很有靈魂。||魂
2545|dạy học|教書|to teach|動詞|Mẹ tôi dạy học ba mươi năm.|我媽媽教書三十年。||
2546|bảo tồn|保存 / 保育|to conserve|動詞|Cần bảo tồn các di tích lịch sử.|需要保存歷史古蹟。||保存
2547|chuyển động|運動 / 移動|motion; to move|動詞|Tàu đã bắt đầu chuyển động.|列車開始移動了。||轉動
2548|chúng nó|他們（非正式）|they (informal)|代名詞|Chúng nó đi chơi rồi.|他們出去玩了。|指晚輩或帶輕視，對長輩不用|
2549|tranh chấp|爭議 / 糾紛|dispute|名詞|Hai bên có tranh chấp về đất đai.|雙方有土地糾紛。||爭執
2550|trưng bày|陳列 / 展示|to display|動詞|Bảo tàng trưng bày nhiều hiện vật quý.|博物館展出許多珍貴文物。||
2551|hội viên|會員|member|名詞|Hội viên được giảm giá mười phần trăm.|會員享九折。||會員
2552|phần nào|某種程度|to some extent|副詞|Tôi phần nào hiểu được cảm giác của bạn.|我多少能理解你的感受。||
2553|ổ|窩 / 插座 / 條（麵包）|nest; socket; loaf|名詞|Cho tôi một ổ bánh mì.|請給我一條法國麵包。|ổ cắm＝插座|
2554|tình cờ|偶然|by chance|副詞|Tôi tình cờ gặp bạn cũ ở chợ.|我在市場巧遇老朋友。||
2555|tương ứng|相應|corresponding|形容詞|Điền thông tin vào ô tương ứng.|把資料填入對應的欄位。||相應
2556|cộng sự|合作者 / 夥伴|associate; partner|名詞|Anh ấy là cộng sự lâu năm của tôi.|他是我多年的工作夥伴。||共事
2557|thường trực|常駐 / 值班|standing; on duty|形容詞|Bác sĩ thường trực đêm nay là ai?|今晚值班醫生是誰？||常直
2558|tiên|仙女 / 先|fairy; first (Sino)|名詞|Cô ấy đẹp như tiên.|她美得像仙女。|tiên tiến＝先進|仙
2559|trẻ trung|年輕有活力|youthful|形容詞|Bà ấy trông rất trẻ trung.|她看起來很年輕。||
2560|đứt|斷|snapped; cut|動詞|Dây điện bị đứt.|電線斷了。||
2561|thứ trưởng|副部長|deputy minister|名詞|Thứ trưởng Bộ Công Thương đến thăm nhà máy.|工貿部副部長參訪工廠。||次長
2562|vui chơi|遊玩|to have fun|動詞|Khu vui chơi này rất hợp cho trẻ em.|這個遊樂區很適合小孩。||
2563|xưởng|工廠 / 工坊|workshop|名詞|Xưởng may có hai trăm công nhân.|成衣廠有兩百名工人。||廠
2564|gậy|棍子 / 拐杖|stick|名詞|Ông tôi đi bằng gậy.|我爺爺拄著拐杖走路。||
2565|go|SKIP
2566|trước tiên|首先|first of all|副詞|Trước tiên, hãy rửa tay.|首先，請先洗手。||
2567|củng cố|鞏固|to consolidate|動詞|Ôn tập giúp củng cố kiến thức.|複習有助鞏固知識。||鞏固
2568|cư xử|待人處事|to behave|動詞|Anh ấy cư xử rất lịch sự.|他待人很有禮貌。||居處
2569|máy móc|機器 / 死板|machinery; mechanical|名詞|Nhà máy nhập máy móc từ Nhật.|工廠從日本進口機器。||
2570|áp|壓 / 貼近|to press against|動詞|Áp tai vào tường để nghe.|把耳朵貼在牆上聽。|áp dụng＝應用|押
2571|can đảm|勇敢|courageous|形容詞|Cô ấy can đảm nói ra sự thật.|她勇敢說出真相。||肝膽
2572|bình luận|評論 / 留言|to comment|動詞|Mọi người bình luận rất nhiều về bài viết.|大家對這篇貼文留言很多。||評論
2573|bắt tay|握手 / 著手|to shake hands; to start|動詞|Hai giám đốc bắt tay nhau.|兩位總經理握手。||
2574|thấm|滲 / 吸|to soak in|動詞|Nước mưa thấm vào tường.|雨水滲進牆壁。||
2575|trụ|柱子|pillar|名詞|Cây cầu có bốn trụ lớn.|這座橋有四根大柱子。||柱
2576|yêu quý|疼愛 / 珍愛|to cherish|動詞|Học sinh rất yêu quý cô giáo.|學生們很喜愛老師。||
2577|bảo quản|保存 / 保管|to preserve|動詞|Bảo quản nơi khô ráo, thoáng mát.|請存放於乾燥涼爽處。||保管
2578|cảm|感冒 / 感覺|to catch a cold; to feel|動詞|Tôi bị cảm rồi.|我感冒了。||感
2579|nhãn|標籤 / 龍眼|label; longan|名詞|Đọc kỹ nhãn trước khi dùng.|使用前請詳閱標示。||
2580|uỷ|委託|to entrust|動詞|Tôi uỷ quyền cho anh ký thay.|我授權你代簽。|ủy quyền＝授權|委
2581|vịt|鴨|duck|名詞|Trứng vịt lộn là món đặc sản.|鴨仔蛋是特色小吃。||
2582|cải cách|改革|reform|名詞|Chính phủ đẩy mạnh cải cách hành chính.|政府推動行政改革。||改革
2583|thiết thực|實際 / 實用|practical|形容詞|Khóa học này rất thiết thực.|這門課很實用。||切實
2584|tuổi trẻ|青春|youth|名詞|Hãy tận hưởng tuổi trẻ.|好好享受青春吧。||
2585|điệu|曲調 / 姿態 / 做作|tune; manner|名詞|Điệu nhạc này rất quen.|這首曲調很耳熟。||調
2586|đại sứ|大使|ambassador|名詞|Đại sứ quán ở đường nào?|大使館在哪條路？||大使
2587|thảm|地毯 / 悲慘|carpet; tragic|名詞|Phòng khách trải thảm đỏ.|客廳鋪了紅地毯。||慘
2588|tốt lành|吉祥 / 美好|good; auspicious|形容詞|Chúc bạn một ngày tốt lành.|祝你有美好的一天。||
2589|lừa đảo|詐騙|fraud; to scam|動詞|Cẩn thận các cuộc gọi lừa đảo.|小心詐騙電話。||
2590|râu|鬍子|beard|名詞|Anh ấy để râu.|他留鬍子。||
2591|lịch sự|有禮貌|polite|形容詞|Nhân viên ở đây rất lịch sự.|這裡的員工很有禮貌。|和 lịch sử（歷史）只差聲調|歷事
2592|chắc hẳn|想必|surely|副詞|Chắc hẳn bạn rất mệt.|你想必很累。||
2593|hiệp sĩ|騎士 / 俠士|knight|名詞|Con tôi thích truyện hiệp sĩ.|我孩子喜歡騎士故事。||俠士
2594|hương vị|風味|flavour|名詞|Món này mang hương vị miền Tây.|這道菜帶有湄公河三角洲的風味。||香味
2595|nhân dịp|趁著 / 值此|on the occasion of|介詞|Nhân dịp năm mới, chúc mọi người sức khỏe.|值此新年，祝大家身體健康。||
2596|loại hình|類型|type|名詞|Đây là loại hình du lịch mới.|這是新型態的旅遊。||類形
2597|luật pháp|法律|law|名詞|Mọi người phải tôn trọng luật pháp.|每個人都要尊重法律。||律法
2598|tham nhũng|貪污|corruption|名詞|Chính phủ chống tham nhũng mạnh mẽ.|政府大力反貪。||貪
2599|trâu|水牛|water buffalo|名詞|Ở nông thôn vẫn còn người cày bằng trâu.|鄉下還有人用水牛耕田。||
2600|máy chủ|伺服器|server|名詞|Máy chủ đang bảo trì.|伺服器正在維護中。||
2601|y tá|護理師|nurse|名詞|Y tá đang đo huyết áp cho bệnh nhân.|護理師正在幫病人量血壓。||醫佐
2602|chảy máu|流血|to bleed|動詞|Tay tôi bị chảy máu.|我的手在流血。||
2603|hoá chất|化學物質|chemical|名詞|Không để hoá chất gần trẻ em.|化學品不要放在兒童附近。||化質
2604|kiến nghị|建議 / 陳情|recommendation|名詞|Người dân gửi kiến nghị lên chính quyền.|民眾向政府提出陳情。||建議
2605|thực tiễn|實踐 / 實務|practice|名詞|Lý thuyết phải gắn với thực tiễn.|理論必須結合實務。||實踐
2606|cư dân|居民|resident|名詞|Cư dân chung cư họp vào tối thứ sáu.|社區住戶星期五晚上開會。||居民
2607|đột nhiên|突然|suddenly|副詞|Đột nhiên trời đổ mưa.|突然下起雨來。||突然
2608|tiểu thuyết|小說|novel|名詞|Tôi đang đọc một cuốn tiểu thuyết Việt.|我正在讀一本越南小說。||小說
2609|bận tâm|操心|to worry about|動詞|Đừng bận tâm chuyện đó nữa.|別再為那件事操心了。||
2610|cứu mạng|救命|to save a life|動詞|Cảm ơn anh đã cứu mạng tôi.|謝謝你救了我的命。||救命
2611|gỡ|解開 / 拆下|to untangle; to remove|動詞|Gỡ ứng dụng này ra khỏi điện thoại.|把這個應用程式從手機移除。||
2612|va|撞|to bump|動詞|Tôi va vào cửa kính.|我撞到玻璃門。|va chạm＝碰撞|
2613|be|SKIP
2614|phân giải|分解 / 解析度|to decompose; resolution|動詞|Rác hữu cơ dễ phân giải.|有機垃圾容易分解。||分解
2615|thư giãn|放鬆|to relax|動詞|Cuối tuần tôi đi spa thư giãn.|週末我去 spa 放鬆。||
2616|trực thăng|直升機|helicopter|名詞|Trực thăng đưa người bị nạn đi cấp cứu.|直升機把傷者送去急救。||直升
2617|tăng giá|漲價|to raise prices|動詞|Giá xăng lại tăng giá.|汽油又漲價了。||
2618|bỏ rơi|拋棄|to abandon|動詞|Đừng bỏ rơi thú cưng.|不要棄養寵物。||
2619|gục|倒下 / 垂頭|to collapse|動詞|Anh ấy gục xuống vì mệt.|他累得倒下。||
2620|khai mạc|開幕|to open (event)|動詞|Hội chợ khai mạc vào sáng mai.|展覽明天早上開幕。||開幕
2621|lẽ|道理|reason|名詞|Lẽ ra tôi nên đến sớm hơn.|我本來應該早點到。|lẽ ra＝本來應該|理
2622|nội bộ|內部|internal|名詞|Đây là thông tin nội bộ.|這是內部資訊。||內部
2623|sinh sống|生活 / 居住|to live|動詞|Gia đình tôi sinh sống ở Đài Loan.|我家住在台灣。||
2624|đối phó|應付|to cope with|動詞|Chúng ta cần đối phó với cơn bão.|我們需要應對颱風。||對付
2625|rực rỡ|燦爛|brilliant|形容詞|Pháo hoa rực rỡ trên bầu trời.|煙火在空中燦爛綻放。||
2626|chinh phục|征服|to conquer|動詞|Anh ấy chinh phục đỉnh Fansipan.|他征服了番西邦峰。||征服
2627|vật lý|物理|physics|名詞|Con tôi học giỏi vật lý.|我孩子物理很好。||物理
2628|dân gian|民間|folk|形容詞|Đây là bài hát dân gian.|這是一首民謠。||民間
2629|cà|茄子 / 番茄|eggplant; tomato|名詞|Cà tím nướng mỡ hành rất ngon.|蔥油烤茄子很好吃。|cà chua＝番茄|
2630|làm nên|造就|to create; to make|動詞|Chính sự cố gắng làm nên thành công.|正是努力造就了成功。||
2631|ngửi|聞|to smell|動詞|Ngửi thử xem có mùi gì không.|聞聞看有沒有什麼味道。||
2632|nhà báo|記者|journalist|名詞|Nhà báo đang phỏng vấn giám đốc.|記者正在採訪總經理。||
2633|thiên tài|天才|genius|名詞|Cậu bé là một thiên tài toán học.|那男孩是數學天才。||天才
2634|trực thuộc|隸屬|to be under|動詞|Bệnh viện này trực thuộc Bộ Y tế.|這家醫院隸屬衛生部。||直屬
2635|voi|大象|elephant|名詞|Bản Đôn nổi tiếng với voi.|班敦以大象聞名。||
2636|đầu hàng|投降|to surrender|動詞|Đừng bao giờ đầu hàng.|永遠不要投降。||投降
2637|có thai|懷孕|to be pregnant|動詞|Vợ tôi đang có thai.|我太太懷孕了。||
2638|dị ứng|過敏|allergy|名詞|Tôi bị dị ứng phấn hoa.|我對花粉過敏。||異應
2639|lạp|臘（臘腸）|cured (sausage)|名詞|Cơm chiên lạp xưởng rất ngon.|臘腸炒飯很好吃。|lạp xưởng＝臘腸|臘
2640|suýt|差點|almost|副詞|Tôi suýt bị ngã.|我差點跌倒。||
2641|võ|武術|martial arts|名詞|Con tôi học võ Vovinam.|我孩子學越武道。||武
2642|đồng bộ|同步 / 成套|synchronized|形容詞|Dữ liệu đã được đồng bộ.|資料已同步。||同步
2643|phần thưởng|獎品 / 獎勵|reward|名詞|Phần thưởng cho người thắng là chuyến du lịch.|贏家的獎品是一趟旅行。||分賞
2644|ruộng|田|rice field|名詞|Ruộng bậc thang ở Mù Cang Chải rất đẹp.|木江界的梯田很美。||
2645|bày|陳列 / 擺|to display; to set out|動詞|Mẹ bày mâm cỗ ra bàn.|媽媽把宴席菜擺上桌。||
2646|hiến pháp|憲法|constitution|名詞|Hiến pháp là luật cơ bản của nhà nước.|憲法是國家的根本大法。||憲法
2647|khoang|艙|compartment; cabin|名詞|Hành lý để trong khoang máy bay.|行李放在機艙裡。||
2648|quan niệm|觀念|notion|名詞|Mỗi người có quan niệm sống khác nhau.|每個人的人生觀不同。||觀念
2649|tâm trạng|心情|mood|名詞|Hôm nay tâm trạng tôi không tốt.|今天我心情不好。||心狀
2650|âm mưu|陰謀|plot; conspiracy|名詞|Cảnh sát phát hiện âm mưu lừa đảo.|警方識破詐騙陰謀。||陰謀
2651|kịch bản|劇本|script|名詞|Kịch bản phim này rất hay.|這部電影的劇本很好。||劇本
2652|ngâm|泡 / 浸|to soak|動詞|Ngâm gạo nếp qua đêm.|把糯米泡一晚。|ngâm thơ＝吟詩|
2653|tổng công ty|總公司|corporation|名詞|Tổng công ty có trụ sở ở Hà Nội.|總公司設在河內。||總公司
2654|xóm|村落 / 鄰里|hamlet; neighbourhood|名詞|Cả xóm đến chúc mừng.|整個鄰里都來祝賀。||
2655|thánh|聖|saint; holy|名詞|Nhà thờ Thánh Giuse rất cổ.|聖若瑟教堂很古老。||聖
2656|chém|砍 / 坑錢（口語）|to slash; to overcharge|動詞|Quán này chém khách du lịch.|這家店坑觀光客。|chém gió＝吹牛|
2657|xúc động|感動|moved|形容詞|Tôi rất xúc động khi nghe bài hát này.|聽到這首歌我很感動。||觸動
2658|lui|後退|to retreat|動詞|Lui ra sau một chút.|往後退一點。||
2659|tiêu hoá|消化|digestion|名詞|Ăn chậm tốt cho tiêu hoá.|吃慢一點有助消化。||消化
2660|cáp|纜線|cable|名詞|Cáp internet bị đứt.|網路海纜斷了。||
2661|vô tình|無意 / 無情|by accident; heartless|副詞|Tôi vô tình làm vỡ cái ly.|我不小心打破杯子。||無情
2662|hầu|伺候 / 幾乎|to serve; almost|動詞|Hầu như ai cũng biết chuyện này.|幾乎大家都知道這件事。|hầu như＝幾乎|
2663|nếp|糯米 / 褶|glutinous rice; fold|名詞|Bánh chưng làm từ gạo nếp.|方粽是用糯米做的。||
2664|trói|綁|to tie up|動詞|Họ trói con heo lại.|他們把豬綁起來。||
2665|đà|勢頭|momentum|名詞|Kinh tế đang trên đà phục hồi.|經濟正處於復甦態勢。||
2666|ngăn cản|阻止|to prevent|動詞|Không ai ngăn cản được anh ấy.|沒有人能阻止他。||
2667|thiếu tá|少校|major (army)|名詞|Ông ấy là thiếu tá về hưu.|他是退休少校。||少佐
2668|đại ca|大哥（江湖）|big brother (gang)|名詞|Trong phim, đại ca là người đứng đầu nhóm.|片中「大哥」是幫派老大。||大哥
2669|dương|陽 / 正 / 海洋|yang; positive; ocean|形容詞|Kết quả xét nghiệm dương tính.|檢驗結果為陽性。|dương lịch＝陽曆|陽
2670|tồi|差勁|bad|形容詞|Dịch vụ ở đây khá tồi.|這裡的服務很差。||
2671|đối phương|對方|the other side|名詞|Hãy lắng nghe ý kiến của đối phương.|要傾聽對方的意見。||對方
2672|bồi thường|賠償|to compensate|動詞|Công ty sẽ bồi thường thiệt hại.|公司會賠償損失。||賠償
2673|chốt|門閂 / 敲定|latch; to finalize|動詞|Chốt đơn hàng này nhé!|這筆訂單就這樣敲定喔！||
2674|thận trọng|謹慎|cautious|形容詞|Hãy thận trọng khi đầu tư.|投資要謹慎。||慎重
2675|tán|閒聊 / 搭訕 / 散|to chat; to flirt|動詞|Họ ngồi tán chuyện cả buổi.|他們坐著閒聊了好一陣子。||
2676|tư nhân|私人|private|形容詞|Đây là bệnh viện tư nhân.|這是私立醫院。||私人
2677|đồng hành|同行 / 陪伴|to accompany|動詞|Cảm ơn bạn đã đồng hành cùng chúng tôi.|謝謝你與我們同行。||同行
2678|cong|彎|curved|形容詞|Con đường này rất cong.|這條路很彎。||
2679|hài|喜劇 / 搞笑|comedy; funny|形容詞|Phim này hài quá!|這部片好好笑！||諧
2680|nọ|那（遠指）|that (other)|限定詞|Hôm nọ tôi gặp anh ấy ở chợ.|前幾天我在市場遇到他。||
2681|tên tuổi|名聲|reputation; name|名詞|Anh ấy đã có tên tuổi trong ngành.|他在業界已有名氣。||
2682|bị cáo|被告|defendant|名詞|Bị cáo đã nhận tội.|被告已認罪。||被告
2683|lít|公升|litre|量詞|Xe này đi một trăm km hết hai lít xăng.|這台車跑一百公里耗油兩公升。||
2684|bánh mì|法國麵包|baguette sandwich|名詞|Sáng nay tôi ăn bánh mì thịt.|今天早上我吃肉法國麵包。||
2685|ngọc|玉 / 寶石|jade; gem|名詞|Bà đeo chiếc vòng ngọc.|奶奶戴著玉鐲。||玉
2686|Thanh Hoá|清化|Thanh Hoa|名詞|Thanh Hoá có biển Sầm Sơn.|清化有岑山海灘。||清化
2687|cống hiến|貢獻|to devote|動詞|Ông ấy cống hiến cả đời cho giáo dục.|他一生奉獻給教育。||貢獻
2688|hổ|老虎|tiger|名詞|Năm nay là năm con hổ.|今年是虎年。||虎
2689|hỗn hợp|混合|mixture; mixed|名詞|Đây là hỗn hợp nhiều loại hạt.|這是多種堅果的混合。||混合
2690|khơi|外海 / 挑起|open sea; to stir up|名詞|Tàu cá ra khơi lúc sáng sớm.|漁船清晨出海。||
2691|kiên nhẫn|耐心|patient|形容詞|Học ngoại ngữ cần kiên nhẫn.|學外語需要耐心。||堅忍
2692|nãy|剛才|a moment ago|副詞|Lúc nãy ai gọi cho tôi vậy?|剛才誰打電話給我？||
2693|sa thải|解僱|to dismiss|動詞|Công ty sa thải nhân viên vi phạm.|公司解僱違規員工。||沙汰
2694|nhân sự|人事|human resources|名詞|Phòng nhân sự ở tầng hai.|人事部在二樓。||人事
2695|Quảng Nam|廣南|Quang Nam|名詞|Hội An thuộc tỉnh Quảng Nam.|會安隸屬廣南省。||廣南
2696|lắp|安裝 / 組裝|to fit; to assemble|動詞|Anh lắp giúp tôi cái kệ này.|請幫我組裝這個架子。|nói lắp＝口吃|
2697|chuối|香蕉|banana|名詞|Một nải chuối bao nhiêu tiền?|一串香蕉多少錢？||
2698|công thương|工商|industry and trade|名詞|Bộ Công Thương quản lý xuất nhập khẩu.|工貿部管理進出口。||工商
2699|ra tay|出手|to take action|動詞|Đến lúc phải ra tay rồi.|是時候出手了。||
2700|chiến trường|戰場|battlefield|名詞|Ông tôi từng ra chiến trường.|我爺爺曾上過戰場。||戰場
2701|giặt|洗（衣）|to wash (clothes)|動詞|Khách sạn có dịch vụ giặt ủi.|飯店有洗衣服務。||
2702|lồng|籠子 / 燈籠|cage; lantern|名詞|Đèn lồng Hội An rất đẹp.|會安的燈籠很美。||籠
2703|danh tiếng|名聲|fame|名詞|Trường này có danh tiếng lâu đời.|這所學校歷史悠久、聲譽卓著。||名聲
2704|phím|按鍵|key (keyboard)|名詞|Bấm phím Enter để tiếp tục.|按 Enter 鍵繼續。||
2705|ao|池塘|pond|名詞|Sau nhà có một cái ao nhỏ.|屋後有個小池塘。||
2706|nhân loại|人類|mankind|名詞|Đây là phát minh vĩ đại của nhân loại.|這是人類的偉大發明。||人類
2707|bự|大（南部）|big (Southern)|形容詞|Con cá này bự quá!|這條魚好大！|北部說 to|
2708|khiêu vũ|跳舞（交際舞）|to dance|動詞|Họ khiêu vũ trong bữa tiệc.|他們在派對上跳舞。||跳舞
2709|ấp|村落（南部）/ 孵|hamlet; to incubate|名詞|Ông bà tôi sống ở ấp Phú Lợi.|我祖父母住在富利村。|gà ấp trứng＝母雞孵蛋|邑
2710|lương thực|糧食|food staples|名詞|Lúa gạo là lương thực chính.|稻米是主要糧食。||糧食
2711|độc giả|讀者|reader|名詞|Tạp chí có nhiều độc giả trẻ.|這本雜誌有很多年輕讀者。||讀者
2712|nam giới|男性|men|名詞|Bệnh này phổ biến ở nam giới.|這種病常見於男性。||男界
2713|bỏ cuộc|放棄|to give up|動詞|Đừng bỏ cuộc giữa chừng.|別半途而廢。||
2714|cành|樹枝|branch|名詞|Mua một cành đào chơi Tết.|買一枝桃花過年。||
2715|miễn|免 / 只要|to exempt; as long as|動詞|Trẻ em dưới sáu tuổi được miễn vé.|六歲以下兒童免票。|miễn là＝只要|免
2716|nhặt|撿|to pick up|動詞|Nhặt rác bỏ vào thùng.|把垃圾撿起來丟進垃圾桶。||
2717|đồ đạc|家具 / 東西|belongings; furniture|名詞|Tôi đã dọn hết đồ đạc.|我已把東西都搬好了。||
2718|Nghệ An|乂安|Nghe An|名詞|Nghệ An là quê của Bác Hồ.|乂安是胡伯伯的故鄉。||乂安
2719|hạ cánh|降落|to land|動詞|Máy bay đã hạ cánh an toàn.|飛機已安全降落。||
2720|trọng lượng|重量|weight|名詞|Trọng lượng hành lý tối đa là hai mươi ký.|行李重量上限二十公斤。||重量
2721|vững chắc|穩固|solid; firm|形容詞|Ngôi nhà được xây rất vững chắc.|這棟房子蓋得很穩固。||
2722|mâu thuẫn|矛盾|conflict; contradiction|名詞|Hai anh em có mâu thuẫn.|兩兄弟之間有矛盾。||矛盾
2723|thị trưởng|市長|mayor|名詞|Thị trưởng phát biểu tại lễ khai mạc.|市長在開幕式上致詞。||市長
2724|ảo|虛擬 / 虛幻|virtual; illusory|形容詞|Tiền ảo có nhiều rủi ro.|虛擬貨幣風險很高。||幻
2725|đạp|踩 / 踢|to pedal; to kick|動詞|Tôi đạp xe đi làm.|我騎腳踏車上班。||踏
2726|khiếu nại|投訴|to complain|動詞|Tôi muốn khiếu nại về dịch vụ.|我想投訴服務問題。||
2727|thang máy|電梯|lift|名詞|Thang máy đang bảo trì.|電梯正在維修。||
2728|táo|蘋果 / 棗|apple; jujube|名詞|Tôi ăn một quả táo mỗi ngày.|我每天吃一顆蘋果。|táo bón＝便祕|
2729|kể cả|包括|including|介詞|Tất cả đều phải nộp, kể cả giám đốc.|所有人都要繳交，包括總經理。||
2730|phi công|飛行員|pilot|名詞|Ước mơ của con là làm phi công.|孩子的夢想是當飛行員。||飛工
2731|cổ đông|股東|shareholder|名詞|Cổ đông nhận cổ tức hằng năm.|股東每年領股息。||股東
2732|chiến thuật|戰術|tactics|名詞|Huấn luyện viên thay đổi chiến thuật.|教練改變了戰術。||戰術
2733|cũng nên|也該 / 也許|might as well|副詞|Trời mưa thế này, ở nhà cũng nên.|雨這麼大，待在家也好。||
2734|gợi ý|提示 / 建議|suggestion|名詞|Bạn có gợi ý nhà hàng nào không?|你有推薦的餐廳嗎？||
2735|chè|甜湯 / 茶（北部）|sweet soup; tea|名詞|Chè ba màu là món tráng miệng nổi tiếng.|三色甜湯是有名的甜點。||
2736|dược|藥（漢越）|pharmaceutical|名詞|Chị ấy làm dược sĩ.|她是藥劑師。|dược phẩm＝藥品|藥
2737|lên tiếng|發聲 / 表態|to speak up|動詞|Nhiều người lên tiếng phản đối.|很多人出聲反對。||
2738|năng suất|生產力 / 產能|productivity|名詞|Máy mới giúp tăng năng suất.|新機器提高了生產力。||能率
2739|ban đêm|夜間|at night|名詞|Ban đêm đường phố rất yên tĩnh.|夜裡街道很安靜。||
2740|hư hỏng|損壞 / 變壞|damaged; spoiled|形容詞|Hàng bị hư hỏng khi vận chuyển.|貨物在運送中損壞。||
2741|khởi hành|出發|to depart|動詞|Xe khởi hành lúc sáu giờ sáng.|車子早上六點出發。||起行
2742|đối đầu|對抗|to confront|動詞|Hai đội mạnh đối đầu trong trận chung kết.|兩支強隊在決賽交鋒。||對頭
2743|đội hình|陣容 / 隊形|line-up|名詞|Đội hình hôm nay rất mạnh.|今天的陣容很強。||隊形
2744|bền|耐用|durable|形容詞|Đôi giày này rất bền.|這雙鞋很耐穿。||
2745|ý nghĩ|念頭|thought|名詞|Tôi chợt có một ý nghĩ.|我突然有個念頭。||
2746|bình quân|平均|average|形容詞|Thu nhập bình quân đầu người tăng.|人均收入增加。||平均
2747|chốn|地方（文學）|place (literary)|名詞|Đây là chốn bình yên của tôi.|這裡是我的寧靜之地。||
2748|con tin|人質|hostage|名詞|Cảnh sát giải cứu con tin an toàn.|警方安全救出人質。||
2749|mốc|發霉 / 里程碑|mould; milestone|名詞|Bánh mì bị mốc rồi.|麵包發霉了。|cột mốc＝里程碑|
2750|hồi phục|康復|to recover|動詞|Sức khỏe ông đã hồi phục.|爺爺的身體已經康復。||回復
2751|lang thang|閒逛 / 流浪|to wander|動詞|Tôi thích lang thang phố cổ.|我喜歡在古街閒逛。||
2752|thượng|上 / 上游|upper|形容詞|Thượng nguồn sông Mê Kông ở Trung Quốc.|湄公河上游在中國。|thượng lộ bình an＝一路平安|上
2753|ốc|螺 / 螺絲|snail; screw|名詞|Tối nay đi ăn ốc không?|今晚去吃螺嗎？||
2754|cầu thang|樓梯|staircase|名詞|Cẩn thận khi đi cầu thang.|走樓梯要小心。||
2755|dự phòng|預備 / 備用|backup; preventive|形容詞|Mang theo pin dự phòng.|帶著行動電源。|pin dự phòng＝行動電源|預防
2756|phạm tội|犯罪|to commit a crime|動詞|Anh ta bị bắt vì phạm tội.|他因犯罪被捕。||犯罪
2757|quy tắc|規則|rule|名詞|Hãy tuân thủ quy tắc an toàn.|請遵守安全規則。||規則
2758|cừu|綿羊|sheep|名詞|Ninh Thuận có nhiều trang trại cừu.|寧順省有很多綿羊農場。||
2759|kế tiếp|接下來|next|形容詞|Bước kế tiếp là gì?|下一步是什麼？||繼接
2760|chủ nhiệm|主任 / 班導|director; homeroom teacher|名詞|Cô giáo chủ nhiệm gọi điện cho phụ huynh.|班導打電話給家長。||主任
2761|ngớ ngẩn|傻 / 荒唐|silly|形容詞|Đừng hỏi câu ngớ ngẩn.|別問傻問題。||
2762|vô dụng|沒用|useless|形容詞|Cái máy này vô dụng rồi.|這台機器沒用了。||無用
2763|cố định|固定|fixed|形容詞|Giá ở đây là giá cố định.|這裡是不二價。||固定
2764|hiệu ứng|效應|effect|名詞|Hiệu ứng nhà kính làm trái đất nóng lên.|溫室效應使地球暖化。||效應
2765|vui mừng|高興|glad|形容詞|Cả nhà vui mừng đón Tết.|全家歡喜過年。||
2766|máy ảnh|相機|camera|名詞|Tôi mang máy ảnh đi du lịch.|我帶相機去旅行。||
2767|nghiêng|傾斜|to tilt|動詞|Bức tranh treo hơi nghiêng.|畫掛得有點歪。||
2768|tại chỗ|當場 / 現場|on the spot|副詞|Món này được nấu tại chỗ.|這道菜是現場烹調的。||
2769|ván|木板 / 局（棋）|plank; round|名詞|Chơi thêm một ván cờ nữa nhé.|再下一盤棋吧。||板
2770|dàn|整套 / 排列|set; to arrange|名詞|Ban nhạc có dàn trống rất hay.|樂團的鼓組很棒。|dàn nhạc＝樂團|
2771|trục|軸|axis; axle|名詞|Trục xe bị gãy.|車軸斷了。||軸
2772|xài|用 / 花（南部）|to use; to spend|動詞|Tháng này xài nhiều tiền quá.|這個月花太多錢了。|北部說 dùng、tiêu|
2773|cầu xin|懇求|to beg|動詞|Anh ấy cầu xin sự tha thứ.|他懇求原諒。||
2774|dốc|斜坡|slope|名詞|Con dốc này rất cao.|這個坡很陡。||
2775|Đồng Nai|同奈|Dong Nai|名詞|Đồng Nai có nhiều khu công nghiệp.|同奈有很多工業區。||
2776|ướt|濕|wet|形容詞|Quần áo bị ướt hết rồi.|衣服全濕了。||
2777|ẩm|潮濕|humid|形容詞|Mùa mưa nhà rất ẩm.|雨季家裡很潮濕。||
2778|cổ điển|古典|classical|形容詞|Tôi thích nhạc cổ điển.|我喜歡古典音樂。||古典
2779|nhiễm trùng|感染（細菌）|infection|名詞|Vết thương bị nhiễm trùng.|傷口感染了。||染蟲
2780|quầy|櫃檯|counter|名詞|Thanh toán ở quầy số ba.|請到三號櫃檯結帳。||
2781|chanh|檸檬 / 萊姆|lime|名詞|Cho tôi một ly nước chanh.|請給我一杯檸檬水。||
2782|thỏ|兔子|rabbit|名詞|Con tôi nuôi một con thỏ.|我孩子養了一隻兔子。||兔
2783|vách|牆壁 / 峭壁|wall; cliff|名詞|Vách núi rất dựng đứng.|山崖十分陡峭。||
2784|dẹp|收起 / 扁 / 取締|to clear away; flat|動詞|Dẹp đồ chơi đi rồi ăn cơm.|把玩具收好再吃飯。||
2785|bí quyết|祕訣|secret (to success)|名詞|Bí quyết nấu phở ngon là gì?|煮好河粉的祕訣是什麼？||祕訣
2786|hoàng hậu|皇后|queen (consort)|名詞|Hoàng hậu Nam Phương rất xinh đẹp.|南芳皇后非常美麗。||皇后
2787|đại dương|海洋|ocean|名詞|Rác nhựa làm ô nhiễm đại dương.|塑膠垃圾污染海洋。||大洋
2788|ăn mặc|穿著|to dress|動詞|Hãy ăn mặc lịch sự khi vào chùa.|進寺廟請穿著得體。||
2789|Đài Loan|台灣|Taiwan|名詞|Tôi là người Đài Loan.|我是台灣人。||臺灣
2790|lọ|瓶 / 罐|jar; vase|名詞|Cho hoa vào lọ.|把花插進花瓶。||
2791|phủ nhận|否認|to deny|動詞|Anh ta phủ nhận mọi cáo buộc.|他否認所有指控。||否認
2792|chữa trị|治療|to treat|動詞|Bệnh này có thể chữa trị được.|這種病可以治療。||
2793|dập|撲滅 / 沖壓|to put out; to stamp|動詞|Lính cứu hỏa đã dập tắt đám cháy.|消防員已撲滅火災。||
2794|thác|瀑布|waterfall|名詞|Thác Bản Giốc rất hùng vĩ.|板約瀑布非常壯觀。||
2795|nhà thơ|詩人|poet|名詞|Xuân Diệu là nhà thơ nổi tiếng.|春妙是知名詩人。||
2796|đồ hoạ|圖像 / 繪圖|graphics|名詞|Cô ấy làm thiết kế đồ hoạ.|她從事平面設計。||圖畫
2797|chỉnh|調整|to adjust|動詞|Chỉnh âm lượng nhỏ lại giúp tôi.|請幫我把音量調小。||整
2798|nón|帽子（南部）/ 斗笠|hat; conical hat|名詞|Nón lá là biểu tượng của Việt Nam.|斗笠是越南的象徵。|北部說 mũ|
2799|giật|搶 / 抽動|to snatch; to jerk|動詞|Cẩn thận bị giật túi xách.|小心包包被搶。||
2800|quy|歸 / 換算|to convert; to attribute|動詞|Quy đổi một trăm đô ra tiền Việt là bao nhiêu?|一百美元換成越盾是多少？|quy định＝規定|歸
2801|rạp|戲院|theatre; cinema|名詞|Tối nay đi rạp xem phim nhé.|今晚去電影院看電影吧。||
2802|xét xử|審判|to try (a case)|動詞|Toà án sẽ xét xử vụ án vào tuần sau.|法院下週將審理此案。||
2803|chủ trì|主持|to chair|動詞|Giám đốc chủ trì cuộc họp.|總經理主持會議。||主持
2804|muội|妹（古裝劇）/ 煤灰|younger sister (drama)|名詞|Trong phim, anh ấy gọi cô ấy là sư muội.|片中他叫她師妹。|古裝劇用語，日常用 em|妹
2805|phơi|曬|to dry in the sun|動詞|Phơi quần áo ngoài ban công.|把衣服曬在陽台。||
2806|đảng bộ|黨部|party committee|名詞|Đảng bộ tỉnh họp vào cuối năm.|省黨部年底開會。||黨部
2807|văn nghệ|文藝|arts; performance|名詞|Công ty tổ chức đêm văn nghệ cuối năm.|公司舉辦年終文藝晚會。||文藝
2808|kỳ vọng|期望|expectation|名詞|Bố mẹ đặt nhiều kỳ vọng vào con.|父母對孩子寄予厚望。||期望
2809|mờ|模糊|blurry; dim|形容詞|Ảnh này hơi mờ.|這張照片有點模糊。||
2810|điện thoại di động|手機|mobile phone|名詞|Tắt điện thoại di động trong rạp phim.|在電影院請關手機。||
2811|đẳng cấp|等級 / 檔次|class; level|名詞|Đây là khách sạn đẳng cấp quốc tế.|這是國際級的飯店。||等級
2812|dự trữ|儲備|reserve|名詞|Nhà nên có thực phẩm dự trữ.|家裡應該備些存糧。||預貯
2813|trăng|月亮|moon|名詞|Đêm nay trăng tròn.|今晚月亮很圓。||
2814|ước tính|估計|to estimate|動詞|Chi phí ước tính khoảng mười triệu.|費用估計約一千萬盾。||
2815|điền|填寫|to fill in|動詞|Điền thông tin vào mẫu này.|在這張表格填寫資料。||填
2816|ong|蜜蜂|bee|名詞|Cẩn thận có ong!|小心有蜜蜂！|mật ong＝蜂蜜|
2817|đinh|釘子|nail|名詞|Treo tranh bằng đinh.|用釘子掛畫。||釘
2818|huỷ hoại|毀壞|to ruin|動詞|Thuốc lá huỷ hoại sức khỏe.|香菸會毀掉健康。||毀壞
2819|kỷ luật|紀律 / 處分|discipline|名詞|Nhân viên vi phạm sẽ bị kỷ luật.|違規員工會受處分。||紀律
2820|lục|翻找 / 綠|to rummage; green|動詞|Tôi lục cả tủ mà không thấy.|我把整個櫃子翻遍了都找不到。|xanh lục＝綠色|
2821|lứa|批 / 年齡層|batch; age group|名詞|Chúng tôi cùng lứa tuổi.|我們是同年齡層。||
2822|chắn|擋|to shield; to block|動詞|Hàng rào chắn gió.|圍籬擋風。||
2823|Đà Lạt|大叻|Da Lat|名詞|Đà Lạt mát mẻ quanh năm.|大叻終年涼爽。||
2824|gian|間 / 奸|room; cunning|名詞|Nhà có ba gian.|房子有三間。|gian xảo＝奸詐|間
2825|có lẽ|也許|perhaps|副詞|Có lẽ mai trời sẽ mưa.|明天也許會下雨。||
2826|hiền|溫柔 / 善良|gentle; kind|形容詞|Cô giáo của con rất hiền.|孩子的老師很溫柔。||賢
2827|xăm|刺青|to tattoo|動詞|Anh ấy xăm hình trên tay.|他手上有刺青。||
2828|nhì|第二|second|數詞|Đội tôi đạt giải nhì.|我們隊得了第二名。||二
2829|thắng lợi|勝利|victory|名詞|Hội nghị đã thành công thắng lợi.|會議圓滿成功。||勝利
2830|tập tin|檔案（電腦）|file|名詞|Gửi tập tin này qua email nhé.|用 email 傳這個檔案吧。||
2831|bỏ phiếu|投票|to vote|動詞|Mọi người bỏ phiếu chọn trưởng nhóm.|大家投票選組長。||
2832|chăng|嗎 / 難道（書面）|perhaps? (literary)|助詞|Phải chăng anh ấy đã quên?|難道他忘了？||
2833|thảm hoạ|災難|disaster|名詞|Động đất là thảm hoạ lớn.|地震是大災難。||慘禍
2834|đoàn viên|團員 / 團圓|member; reunion|名詞|Tết là dịp đoàn viên gia đình.|過年是闔家團圓的時候。||團圓
2835|hiện thực|現實|reality|名詞|Ước mơ đã trở thành hiện thực.|夢想成真了。||現實
2836|bỗng|忽然|suddenly|副詞|Bỗng có tiếng gõ cửa.|忽然有人敲門。||
2837|triều|朝代 / 潮|dynasty; tide|名詞|Triều Nguyễn là triều đại cuối cùng.|阮朝是最後一個朝代。|thủy triều＝潮汐|朝
2838|đánh thức|叫醒|to wake (someone)|動詞|Sáu giờ đánh thức tôi nhé.|六點叫醒我喔。||
2839|gạt|撥開 / 騙（南部）|to brush aside; to trick|動詞|Gạt nước mưa trên kính xe.|撥掉車窗上的雨水。||
2840|mặt trận|戰線 / 陣線|front|名詞|Mặt trận Tổ quốc tổ chức hoạt động từ thiện.|祖國陣線舉辦慈善活動。||
2841|phát động|發起|to launch|動詞|Công ty phát động phong trào tiết kiệm điện.|公司發起節電運動。||發動
2842|giữ gìn|保護 / 維護|to preserve|動詞|Hãy giữ gìn vệ sinh chung.|請維護公共衛生。||
2843|ngẫu nhiên|隨機 / 偶然|random|形容詞|Chọn ngẫu nhiên năm người.|隨機抽五個人。||偶然
2844|trùng|重疊 / 蟲|to coincide; worm|動詞|Lịch họp bị trùng.|會議時間撞期了。|vi trùng＝細菌|重
2845|đón nhận|接受|to receive|動詞|Sản phẩm được khách hàng đón nhận.|產品受到顧客歡迎。||
2846|rút lui|撤退 / 退出|to withdraw|動詞|Anh ấy rút lui khỏi cuộc thi.|他退出比賽。||
2847|tất|襪子（北部）/ 全|socks; all|名詞|Tôi mua ba đôi tất.|我買了三雙襪子。|南部說 vớ；tất cả＝全部|
2848|tố cáo|檢舉|to denounce|動詞|Người dân tố cáo hành vi vi phạm.|民眾檢舉違法行為。||訴告
2849|cố ý|故意|deliberately|副詞|Tôi không cố ý làm bạn buồn.|我不是故意讓你難過。||故意
2850|tư pháp|司法|judiciary|名詞|Bộ Tư pháp quản lý công chứng.|司法部管理公證事務。||司法
2851|đê|堤防|dyke|名詞|Đê sông Hồng bảo vệ Hà Nội.|紅河堤防保護河內。||堤
2852|đầu óc|頭腦|mind|名詞|Anh ấy có đầu óc kinh doanh.|他有生意頭腦。||
2853|huỷ diệt|毀滅|to annihilate|動詞|Chiến tranh huỷ diệt nhiều thành phố.|戰爭摧毀了許多城市。||毀滅
2854|phụ kiện|配件|accessory|名詞|Cửa hàng bán phụ kiện điện thoại.|這家店賣手機配件。||附件
2855|thẩm phán|法官|judge|名詞|Thẩm phán tuyên án vào buổi chiều.|法官下午宣判。||審判
2856|Nha Trang|芽莊|Nha Trang|名詞|Nha Trang có biển rất đẹp.|芽莊的海很美。||
2857|hiện diện|出席 / 存在|to be present|動詞|Cảm ơn sự hiện diện của quý vị.|感謝各位的蒞臨。||現面
2858|băn khoăn|猶豫 / 掛心|to be undecided|形容詞|Tôi còn băn khoăn nên chọn cái nào.|我還在猶豫要選哪一個。||
2859|quan chức|官員|official|名詞|Nhiều quan chức tham dự hội nghị.|許多官員出席會議。||官職
2860|khéo léo|靈巧|skilful|形容詞|Cô ấy may vá rất khéo léo.|她縫紉手藝很巧。||
2861|màng|膜|membrane; film|名詞|Bọc thức ăn bằng màng bọc.|用保鮮膜包住食物。||
2862|tự sát|自殺|suicide|動詞|Phim có cảnh nhân vật định tự sát.|片中有角色想輕生的情節。||自殺
2863|toàn thể|全體|entire; all|名詞|Toàn thể nhân viên nghỉ lễ.|全體員工放假。||全體
2864|tự tử|自殺（口語）|to commit suicide|動詞|Nếu có ý nghĩ tự tử, hãy gọi người thân ngay.|如有輕生念頭，請立刻聯絡家人。||自死
2865|đầu mối|頭緒 / 窗口|lead; contact point|名詞|Anh là đầu mối liên lạc với khách hàng.|你是對客戶的聯絡窗口。||
2866|vũ trang|武裝|armed|形容詞|Lực lượng vũ trang bảo vệ biên giới.|武裝部隊守衛邊境。||武裝
2867|y học|醫學|medicine (field)|名詞|Y học cổ truyền rất phổ biến ở Việt Nam.|傳統醫學在越南很普遍。||醫學
2868|hậu|後|after; rear|名詞|Đây là hậu quả của việc lười biếng.|這是偷懶的後果。|多見於 hậu quả、hậu trường|後
2869|khu phố|街區|neighbourhood|名詞|Khu phố này rất an ninh.|這個街區很安全。||
2870|đồng tiền|貨幣 / 錢|currency; coin|名詞|Đồng tiền Việt Nam là đồng.|越南的貨幣是盾。||銅錢
2871|cúm|流感|flu|名詞|Tôi bị cúm, phải nghỉ làm.|我得了流感，要請假。||
2872|đột ngột|突然|abrupt|形容詞|Thời tiết thay đổi đột ngột.|天氣驟變。||突兀
2873|đời nào|絕不 / 哪可能|never|副詞|Đời nào tôi làm chuyện đó!|我哪可能做那種事！||
2874|vặt|瑣碎|trivial|形容詞|Toàn chuyện vặt thôi.|都只是小事。|ăn vặt＝吃零食|
2875|cử động|動（身體）|to move|動詞|Sau mổ chưa nên cử động nhiều.|手術後還不宜多動。||舉動
2876|gõ|敲 / 打（字）|to knock; to type|動詞|Gõ cửa trước khi vào.|進去前先敲門。||
2877|xi|水泥（xi măng）/ 鞋油|cement; polish|名詞|Giá xi măng tăng mạnh.|水泥價格大漲。||
2878|Long|龍（漢越）|dragon (Sino)|名詞|Vịnh Hạ Long rất đẹp.|下龍灣很美。|日常說 rồng|龍
2879|hẹp|窄|narrow|形容詞|Hẻm này hẹp quá.|這條巷子太窄了。||狹
2880|đồng tính|同性戀|homosexual|形容詞|Việt Nam không cấm kết hôn đồng tính.|越南不禁止同性婚禮。||同性
2881|học phí|學費|tuition fee|名詞|Học phí năm nay tăng.|今年學費調漲了。||學費
2882|cải tạo|改造 / 整修|to renovate|動詞|Công viên đang được cải tạo.|公園正在整修。||改造
2883|sa mạc|沙漠|desert|名詞|Đồi cát Mũi Né giống như sa mạc.|美奈的沙丘像沙漠。||沙漠
2884|biểu tình|示威|to demonstrate|動詞|Người dân biểu tình phản đối dự án.|民眾示威反對這個專案。||表情
2885|bùn|泥巴|mud|名詞|Giày dính đầy bùn.|鞋子沾滿泥巴。||
2886|bọ|蟲子|bug|名詞|Trong phòng có con bọ.|房間裡有隻蟲。||
2887|dần dần|漸漸|gradually|副詞|Tôi dần dần quen với khí hậu ở đây.|我漸漸習慣這裡的氣候。||
2888|mì|麵|noodles|名詞|Tôi ăn mì gói cho nhanh.|我吃泡麵比較快。|mì gói＝泡麵|
2889|giám khảo|評審|judge (contest)|名詞|Ban giám khảo chấm điểm rất công bằng.|評審團評分很公平。||監考
2890|lạm phát|通貨膨脹|inflation|名詞|Lạm phát làm giá cả tăng.|通膨讓物價上漲。||濫發
2891|tả|描寫 / 左|to describe; left|動詞|Hãy tả lại căn phòng của bạn.|請描述你的房間。||寫
2892|tổng cục|總局|general department|名詞|Tổng cục Hải quan công bố số liệu mới.|海關總局公布最新數據。||總局
2893|dường như|似乎|it seems|副詞|Dường như anh ấy không vui.|他似乎不太開心。||
2894|người nhà|家人|family member|名詞|Chỉ người nhà mới được vào thăm.|只有家屬可以探視。||
2895|phá hoại|破壞|to sabotage|動詞|Kẻ xấu phá hoại tài sản chung.|壞人破壞公物。||破壞
2896|Hà Lan|荷蘭|the Netherlands|名詞|Hà Lan nổi tiếng với hoa tulip.|荷蘭以鬱金香聞名。||荷蘭
2897|chọc|戳 / 逗弄|to poke; to tease|動詞|Đừng chọc em nữa!|別再逗弟弟了！||
2898|hoàng gia|皇家|royal|形容詞|Đây là lăng mộ hoàng gia ở Huế.|這是順化的皇家陵墓。||皇家
2899|kiếp|一輩子 / 前世今生|life (incarnation)|名詞|Kiếp sau tôi vẫn muốn làm con của mẹ.|下輩子我還想當媽媽的孩子。||劫
2900|chứng cứ|證據|evidence|名詞|Không có chứng cứ thì không thể kết luận.|沒有證據就不能下定論。||證據
2901|hoàn|退還 / 完成|to refund; to complete|動詞|Cửa hàng sẽ hoàn tiền nếu hàng lỗi.|商品有瑕疵，商店會退款。|hoàn thành＝完成|還
2902|kháng chiến|抗戰|resistance war|名詞|Ông tôi tham gia kháng chiến.|我爺爺參加過抗戰。||抗戰
2903|phát minh|發明|invention|名詞|Điện thoại là phát minh quan trọng.|電話是重要的發明。||發明
2904|Linh|SKIP
2905|thay mặt|代表|on behalf of|動詞|Tôi thay mặt công ty cảm ơn quý khách.|我代表公司感謝各位貴賓。||
2906|cò|鸛鳥 / 掮客 / 扳機|stork; broker|名詞|Cẩn thận cò đất lừa đảo.|小心土地掮客詐騙。||
2907|cảm hứng|靈感|inspiration|名詞|Chuyến đi cho tôi nhiều cảm hứng.|這趟旅行給了我很多靈感。||感興
2908|đáng giá|值得 / 值錢|worthwhile|形容詞|Chuyến đi này rất đáng giá.|這趟旅程很值得。||
2909|bé nhỏ|小小的|tiny|形容詞|Đây là căn phòng bé nhỏ của tôi.|這是我小小的房間。||
2910|sôi động|熱鬧|lively|形容詞|Phố đi bộ buổi tối rất sôi động.|行人徒步區晚上很熱鬧。||
2911|đồng bằng|平原|plain; delta|名詞|Đồng bằng sông Cửu Long rất rộng.|九龍江平原很遼闊。||
2912|lót|墊 / 鋪|to line; to pad|動詞|Lót giấy dưới đáy hộp.|在盒底墊一張紙。|ăn lót dạ＝墊肚子|
2913|bó|束 / 綁|bunch; to bind|名詞|Mua cho mẹ một bó hoa.|幫媽媽買一束花。||
2914|nén|壓縮 / 忍住 / 炷（香）|to compress; to suppress|動詞|Tôi cố nén cơn giận.|我努力壓住怒氣。|một nén nhang＝一炷香|
2915|thành tựu|成就|achievement|名詞|Đây là thành tựu lớn của ngành y.|這是醫學界的重大成就。||成就
2916|cấu hình|配置 / 規格|configuration|名詞|Máy tính này có cấu hình mạnh.|這台電腦配備很強。||構形
2917|thương lượng|協商|to negotiate|動詞|Hai bên đang thương lượng giá.|雙方正在議價。||商量
2918|ghi nhớ|牢記|to remember|動詞|Hãy ghi nhớ số điện thoại khẩn cấp.|請記住緊急電話號碼。||
2919|chiên|煎 / 炸（南部）|to fry|動詞|Tôi thích ăn cá chiên giòn.|我喜歡吃酥炸魚。|北部說 rán|
2920|huy chương|獎牌|medal|名詞|Vận động viên giành huy chương vàng.|運動員奪得金牌。||徽章
2921|len|毛線 / 擠進|wool; to squeeze through|名詞|Mẹ đan áo len cho con.|媽媽給孩子織毛衣。||
2922|mềm mại|柔軟|soft|形容詞|Tóc cô ấy rất mềm mại.|她的頭髮很柔順。||
2923|phê bình|批評|to criticize|動詞|Sếp phê bình tôi vì đến muộn.|老闆因我遲到而批評我。||批評
2924|tuy vậy|儘管如此|nevertheless|連詞|Trời mưa, tuy vậy mọi người vẫn đến.|下雨了，儘管如此大家還是來了。||
2925|thao tác|操作|operation; to operate|名詞|Thao tác này rất đơn giản.|這個操作很簡單。||操作
2926|Quảng Ninh|廣寧|Quang Ninh|名詞|Vịnh Hạ Long thuộc tỉnh Quảng Ninh.|下龍灣隸屬廣寧省。||廣寧
2927|lam|藍（色）|blue (indigo)|形容詞|Áo dài màu xanh lam rất đẹp.|藍色奧黛很漂亮。||藍
2928|lõi|核心 / 芯|core|名詞|Bỏ lõi quả táo trước khi ăn.|吃蘋果前先去核。||
2929|miễn dịch|免疫|immunity|名詞|Ăn nhiều rau giúp tăng miễn dịch.|多吃蔬菜能增強免疫力。||免疫
2930|mớ|一堆 / 一把|bunch; heap|名詞|Mua một mớ rau muống.|買一把空心菜。||
2931|ngập|淹水|flooded|動詞|Đường bị ngập sau cơn mưa.|大雨後道路淹水。||
2932|thiêu|焚燒|to burn; to cremate|動詞|Đám cháy thiêu rụi ba căn nhà.|大火燒毀三間房子。||燒
2933|tương|醬|sauce|名詞|Chấm nem với tương ớt.|春捲沾辣椒醬。||醬
2934|Quốc|國（漢越）|nation (Sino)|名詞|Mọi người đứng nghiêm hát quốc ca.|大家立正唱國歌。||國
2935|buộc tội|指控|to accuse|動詞|Anh ta bị buộc tội lừa đảo.|他被控詐欺。||
2936|bản sao|副本|copy|名詞|Nộp bản sao hộ chiếu.|繳交護照影本。||
2937|cử tri|選民|voter|名詞|Cử tri đi bầu cử từ sáng sớm.|選民一早就去投票。||
2938|nắm bắt|掌握|to grasp|動詞|Cần nắm bắt cơ hội.|要把握機會。||
2939|tỉnh táo|清醒|alert; clear-headed|形容詞|Uống cà phê cho tỉnh táo.|喝咖啡提神。||
2940|nội địa|國內|domestic|形容詞|Chuyến bay nội địa khởi hành ở ga quốc nội.|國內線航班從國內航廈出發。||內地
2941|tuân thủ|遵守|to comply|動詞|Doanh nghiệp phải tuân thủ luật lao động.|企業必須遵守勞動法。||遵守
2942|vận|運氣 / 運輸|luck; transport|名詞|Vận may đã đến với tôi.|好運降臨到我身上了。|vận chuyển＝運輸|運
2943|ngoại ngữ|外語|foreign language|名詞|Biết ngoại ngữ dễ tìm việc hơn.|會外語比較好找工作。||外語
2944|tốt bụng|好心|kind-hearted|形容詞|Bà hàng xóm rất tốt bụng.|鄰居奶奶很熱心。||
2945|chu đáo|周到|thoughtful|形容詞|Khách sạn phục vụ rất chu đáo.|飯店服務很周到。||周到
2946|chứng chỉ|證書|certificate|名詞|Tôi có chứng chỉ tiếng Việt.|我有越語檢定證書。||證紙
2947|tẩy|擦掉 / 卸（妝）|to erase; to remove|動詞|Tẩy trang trước khi ngủ.|睡前要卸妝。|cục tẩy＝橡皮擦|洗
2948|giáo|教（漢越）/ 長矛|teach (Sino); spear|名詞|Mẹ tôi là giáo viên.|我媽媽是老師。|多見於 giáo viên、giáo dục|教
2949|ngưỡng mộ|仰慕|to admire|動詞|Tôi rất ngưỡng mộ nghị lực của anh ấy.|我很佩服他的毅力。||仰慕
2950|tư thế|姿勢|posture|名詞|Ngồi đúng tư thế để không đau lưng.|坐姿正確才不會背痛。||姿勢
2951|đích|目標 / 終點|target; goal|名詞|Mục đích chuyến đi là gì?|這趟行程的目的是什麼？|đích thân＝親自|的
2952|lành mạnh|健康|healthy; wholesome|形容詞|Hãy ăn uống lành mạnh.|要健康飲食。||
2953|đau đầu|頭痛|headache|形容詞|Tôi bị đau đầu từ sáng.|我從早上就頭痛。||
2954|bơ|奶油 / 酪梨（南部）|butter; avocado|名詞|Sinh tố bơ rất ngon.|酪梨冰沙很好喝。||
2955|hố|坑 / 洞|pit; hole|名詞|Cẩn thận có hố trên đường.|小心路上有坑。||
2956|thi thể|遺體|body (corpse)|名詞|Thi thể đã được đưa về quê.|遺體已送回家鄉。||屍體
2957|nấu ăn|做飯|to cook|動詞|Anh ấy nấu ăn rất giỏi.|他很會做菜。||
2958|gam|公克|gram|量詞|Cho tôi hai trăm gam thịt bò.|給我兩百公克牛肉。||
2959|nuôi dưỡng|養育|to raise; to nurture|動詞|Bà nuôi dưỡng tôi từ nhỏ.|奶奶從小把我養大。||
2960|tổng thể|整體|overall|名詞|Nhìn tổng thể, dự án khá tốt.|整體來看，專案相當好。||總體
2961|hoàn chỉnh|完整|complete|形容詞|Hãy viết câu hoàn chỉnh.|請寫完整的句子。||完整
2962|ngõ|巷子（北部）|alley|名詞|Nhà tôi ở ngõ mười hai.|我家在第十二巷。|南部說 hẻm|
2963|yếu đuối|軟弱|weak; fragile|形容詞|Đừng tỏ ra yếu đuối.|別表現得軟弱。||
2964|nóng bỏng|火熱 / 熱門|hot; burning|形容詞|Đây là vấn đề nóng bỏng hiện nay.|這是當前的熱門議題。||
2965|tắc|堵塞（北部）/ 金桔（南部）|blocked; kumquat|形容詞|Đường tắc từ sáng đến giờ.|從早上塞車到現在。|南部 trà tắc＝金桔茶|塞
2966|vắng|冷清 / 不在|deserted; absent|形容詞|Hôm nay quán vắng khách.|今天店裡客人很少。||
2967|hoa hồng|玫瑰 / 佣金|rose; commission|名詞|Anh tặng em một bó hoa hồng.|我送你一束玫瑰。|tiền hoa hồng＝佣金|花紅
2968|tình báo|情報|intelligence|名詞|Anh ta là nhân viên tình báo.|他是情報人員。||情報
2969|chợt|忽然|suddenly|副詞|Tôi chợt nhớ ra một chuyện.|我忽然想起一件事。||
2970|mới mẻ|新鮮 / 新穎|novel; fresh|形容詞|Đây là trải nghiệm mới mẻ.|這是很新鮮的體驗。||
2971|xúc phạm|冒犯|to offend|動詞|Tôi không có ý xúc phạm anh.|我無意冒犯你。||觸犯
2972|Hà Tĩnh|河靜|Ha Tinh|名詞|Hà Tĩnh nằm ở Bắc Trung Bộ.|河靜位於北中部。||河靜
2973|hở|露出 / 縫隙|exposed; gap|形容詞|Cửa sổ bị hở, gió lùa vào.|窗戶有縫，風灌進來。||
2974|khe|縫|slit; crack|名詞|Đồng xu rơi vào khe ghế.|硬幣掉進椅子縫裡。||
2975|hình dung|想像|to imagine|動詞|Bạn có thể hình dung được không?|你能想像嗎？||形容
2976|sinh thái|生態|ecology|名詞|Đây là khu du lịch sinh thái.|這是生態旅遊區。||生態
2977|ác mộng|惡夢|nightmare|名詞|Tối qua tôi gặp ác mộng.|昨晚我做了惡夢。||惡夢
2978|trí|智 / 心思|mind; intellect|名詞|Bố mẹ yên trí khi con có việc làm.|孩子有工作，父母就放心了。|trí nhớ＝記憶力|智
2979|ưu điểm|優點|advantage|名詞|Ưu điểm của sản phẩm này là bền.|這產品的優點是耐用。||優點
2980|lăn|滾|to roll|動詞|Quả bóng lăn xuống dốc.|球滾下坡。||
2981|tủ lạnh|冰箱|fridge|名詞|Bỏ sữa vào tủ lạnh.|把牛奶放進冰箱。||
2982|tỉnh uỷ|省委|provincial party committee|名詞|Văn phòng tỉnh uỷ ở trung tâm thành phố.|省委辦公室在市中心。||省委
2983|ôn|複習|to review|動詞|Con đang ôn bài để thi.|孩子正在複習準備考試。||溫
2984|chăm chỉ|勤奮|hard-working|形容詞|Em ấy học rất chăm chỉ.|他讀書很勤奮。||
2985|mầm non|幼兒園 / 幼苗|kindergarten; sprout|名詞|Con tôi học trường mầm non gần nhà.|我孩子讀附近的幼兒園。||
2986|trời đất|天地 / 天啊|heaven and earth; my god|感嘆詞|Trời đất ơi, sao lại thế này!|天啊，怎麼會這樣！||
2987|tế|祭 / 國際（quốc tế）|to worship; international|動詞|Lễ tế trời đất được tổ chức ở Huế.|祭天地大典在順化舉行。|quốc tế＝國際|祭
2988|giải thoát|解脫|to release; to free|動詞|Anh ấy muốn giải thoát khỏi áp lực.|他想擺脫壓力。||解脫
2989|vĩnh viễn|永遠|forever|副詞|Tài khoản đã bị khóa vĩnh viễn.|帳號已被永久封鎖。||永遠
2990|y như|一模一樣|exactly like|副詞|Con gái y như mẹ.|女兒跟媽媽一模一樣。||
2991|rớt|掉落 / 落榜（南部）|to drop; to fail|動詞|Điện thoại rớt xuống đất.|手機掉到地上。|北部多說 rơi|
2992|Hải|海（漢越）|sea (Sino)|名詞|Tôi thích ăn hải sản.|我喜歡吃海鮮。|日常說 biển|海
2993|chuồng|圈 / 籠|pen; coop|名詞|Gà đã về chuồng.|雞已回到雞舍。||
2994|dư|多餘 / 剩|surplus; extra|形容詞|Còn dư hai vé.|還多兩張票。||餘
2995|kê|開（藥）/ 墊高 / 小米|to prescribe; to prop|動詞|Bác sĩ kê đơn thuốc cho tôi.|醫生幫我開藥。||
2996|nhìn nhận|看待 / 承認|to view; to acknowledge|動詞|Cần nhìn nhận vấn đề một cách khách quan.|要客觀看待問題。||
2997|quốc lộ|國道|national highway|名詞|Quốc lộ một chạy dọc đất nước.|一號國道貫穿全國。||國路
2998|đảng uỷ|黨委|party committee|名詞|Đảng uỷ công ty họp hằng tháng.|公司黨委每月開會。||黨委
2999|bẻ|折斷 / 掰|to break; to snap|動詞|Bẻ đôi cái bánh chia cho em.|把餅掰成兩半分給弟弟。||
3000|vây|包圍 / 魚鰭|to surround; fin|動詞|Người hâm mộ vây quanh ca sĩ.|粉絲圍住了歌手。|vây cá＝魚翅|圍
`;
