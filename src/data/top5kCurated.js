/**
 * Top 5,000 校正層（第 3,001–5,000 名，人工逐條校對）
 *
 * 與 top1kCurated.js 相同：原始釋義多為古漢語／方言義項、例句多為片語或套版句，
 * 本檔改寫為現代台灣華語常用義、完整例句、易錯提示，並逐條判斷漢越音（非漢越詞留空）。
 *
 * 每列格式：rank|viet|zh|en|pos|example|exampleZh|note|hanViet
 * - zh 為 SKIP＝語料雜訊（單一字母、人名、粗話），不列入學習卡
 * 驗證：node scripts/test_vocab_quality.mjs
 */
export const TOP5K_CURATED_ROWS = `
3001|xách|提（手提）|to carry by hand|動詞|Để tôi xách vali giúp chị.|我幫妳提行李箱。|túi xách＝手提包|
3002|dồn|堆積 / 集中|to pile up; to concentrate|動詞|Việc dồn lại nhiều quá.|事情堆了好多。||
3003|thân thiết|親密|close; intimate|形容詞|Chúng tôi là bạn thân thiết từ nhỏ.|我們是從小的好朋友。||親切
3004|công lý|公理 / 正義|justice|名詞|Mọi người đều muốn công lý được thực thi.|大家都希望正義得以伸張。||公理
3005|thắp|點（燈、香）|to light|動詞|Mùng một, bà thắp hương trên bàn thờ.|初一奶奶在供桌上香。||
3006|thị|氏（女性中間名）/ 市|female middle name; market (Sino)|名詞|Tên chị ấy là Nguyễn Thị Lan.|她的名字是阮氏蘭。|越南女性名字常有 Thị|氏
3007|thiếp|打盹 / 妾（古）|to doze off; concubine (old)|動詞|Bà mệt quá nên thiếp đi một lúc.|奶奶太累了，打了個盹。|喜帖是 thiệp（重聲），別混淆|
3008|bộ môn|學科 / 教研組|subject; department|名詞|Bộ môn tiếng Việt có năm giảng viên.|越語教研組有五位講師。||部門
3009|khôi phục|恢復|to restore|動詞|Hệ thống đã được khôi phục.|系統已經恢復。||恢復
3010|trú|居住 / 避（雨）|to reside; to shelter|動詞|Chúng tôi trú mưa dưới mái hiên.|我們在屋簷下躲雨。|tạm trú＝暫住|住
3011|lạc quan|樂觀|optimistic|形容詞|Hãy luôn lạc quan nhé.|要一直保持樂觀喔。||樂觀
3012|nhét|塞|to stuff|動詞|Nhét giấy tờ vào túi.|把文件塞進包包裡。||
3013|chua|酸|sour|形容詞|Xoài này chua quá.|這芒果好酸。|canh chua＝酸湯|
3014|môn học|科目|school subject|名詞|Bạn thích môn học nào nhất?|你最喜歡哪個科目？||門學
3015|phó giám đốc|副總經理|deputy director|名詞|Phó giám đốc sẽ tiếp đoàn khách.|副總會接待訪客團。||副監督
3016|tiền đạo|前鋒|striker|名詞|Tiền đạo ghi hai bàn thắng.|前鋒進了兩球。||
3017|tội ác|罪行|crime|名詞|Đó là một tội ác nghiêm trọng.|那是嚴重的罪行。||罪惡
3018|bình chọn|票選|to vote for|動詞|Hãy bình chọn cho món ăn yêu thích.|請票選你最喜歡的菜。||評選
3019|phó|副|deputy|形容詞|Anh ấy là phó phòng kinh doanh.|他是業務部副理。||副
3020|khôn ngoan|聰明 / 精明|wise; shrewd|形容詞|Đó là lựa chọn khôn ngoan.|那是明智的選擇。||
3021|sót|遺漏|to omit; to miss|動詞|Kiểm tra kỹ kẻo sót.|仔細檢查免得遺漏。||
3022|sướng|爽 / 舒服|happy; pleasant|形容詞|Được nghỉ một tuần sướng quá!|能休一個禮拜真爽！||
3023|thung lũng|山谷|valley|名詞|Thung lũng Tình Yêu ở Đà Lạt rất đẹp.|大叻的愛情谷很美。||
3024|bầy|群|herd; flock|名詞|Một bầy vịt đang bơi trên ao.|一群鴨子在池塘游泳。||
3025|chí|志氣|will; ambition|名詞|Có chí thì nên.|有志者事竟成。||志
3026|nương|山坡田 / 依靠|hillside field; to rely|名詞|Người dân trồng ngô trên nương.|居民在山坡田種玉米。||
3027|sim|SIM 卡 / 桃金娘|SIM card; rose myrtle|名詞|Tôi muốn mua sim điện thoại.|我想買手機 SIM 卡。||
3028|tranh luận|爭論 / 辯論|to debate|動詞|Hai bên tranh luận rất sôi nổi.|雙方辯論得很熱烈。||爭論
3029|điện lực|電力|electric power|名詞|Công ty điện lực thông báo cắt điện.|電力公司通知停電。||電力
3030|công sức|心血 / 功夫|effort|名詞|Cảm ơn công sức của mọi người.|感謝大家的付出。||
3031|giải cứu|解救|to rescue|動詞|Lính cứu hỏa giải cứu người mắc kẹt.|消防員救出受困的人。||解救
3032|tử cung|子宮|uterus|名詞|Bác sĩ khám tử cung cho bệnh nhân.|醫生為病人檢查子宮。||子宮
3033|bóp|捏 / 按摩 / 皮夾（南部）|to squeeze; wallet|動詞|Bóp vai giúp mẹ đi con.|孩子，幫媽媽捏捏肩。|南部 cái bóp＝皮夾|
3034|sát hại|殺害|to murder|動詞|Nạn nhân bị sát hại tối qua.|受害者昨晚遇害。||殺害
3035|sôi|沸騰|to boil|動詞|Nước sôi rồi.|水開了。||
3036|giỡn|開玩笑（南部）|to joke (Southern)|動詞|Tôi chỉ giỡn thôi mà.|我只是開玩笑啦。|北部說 đùa|
3037|yên tĩnh|安靜|quiet|形容詞|Thư viện rất yên tĩnh.|圖書館很安靜。||安靜
3038|ấn|按|to press|動詞|Ấn nút đỏ để dừng máy.|按紅色按鈕停機。|Ấn Độ＝印度|
3039|Bắc Kinh|北京|Beijing|名詞|Anh ấy từng làm việc ở Bắc Kinh.|他曾在北京工作。||北京
3040|nghị định|議定（政府命令）|decree|名詞|Chính phủ ban hành nghị định mới.|政府頒布新議定。||議定
3041|tiến triển|進展|progress|名詞|Dự án có nhiều tiến triển.|專案有很大進展。||進展
3042|té|跌倒（南部）|to fall|動詞|Đường trơn, coi chừng té.|路滑，小心跌倒。|北部說 ngã|
3043|chuyển giao|移交|to transfer|動詞|Công ty chuyển giao công nghệ cho đối tác.|公司把技術移轉給合作夥伴。||轉交
3044|nghị sĩ|議員|member of parliament|名詞|Nghị sĩ phát biểu tại quốc hội.|議員在國會發言。||議士
3045|mu|（手、腳）背 / 殼|back (of hand); shell|名詞|Mu bàn tay tôi bị trầy.|我的手背擦傷了。||
3046|xám|灰色|grey|形容詞|Tôi thích áo màu xám.|我喜歡灰色的衣服。||
3047|ẩm thực|飲食 / 美食|cuisine|名詞|Ẩm thực Huế rất cầu kỳ.|順化的飲食很講究。||飲食
3048|vinh quang|光榮|glory|名詞|Đó là giây phút vinh quang của đội tuyển.|那是代表隊的光榮時刻。||榮光
3049|đột phá|突破|breakthrough|名詞|Đây là bước đột phá trong y học.|這是醫學上的突破。||突破
3050|Thăng Long|昇龍（河內古稱）|Thang Long|名詞|Thăng Long là tên cũ của Hà Nội.|昇龍是河內的舊名。||昇龍
3051|ăn mừng|慶祝|to celebrate|動詞|Cả đội ăn mừng chiến thắng.|全隊慶祝勝利。||
3052|biết điều|懂事 / 識相|sensible|形容詞|Cậu bé rất biết điều.|那男孩很懂事。||
3053|quyết liệt|激烈 / 堅決|fierce; resolute|形容詞|Trận đấu diễn ra rất quyết liệt.|比賽打得非常激烈。||決烈
3054|bộ đội|部隊 / 軍人|soldiers; troops|名詞|Anh trai tôi đi bộ đội hai năm.|我哥哥當兵兩年。||部隊
3055|chi bộ|支部|(party) cell|名詞|Chi bộ họp vào đầu tháng.|支部每月初開會。||支部
3056|dấu ấn|印記|mark; imprint|名詞|Chuyến đi để lại dấu ấn sâu sắc.|這趟旅程留下深刻的印記。||
3057|lật|翻|to flip; to turn over|動詞|Lật trang tiếp theo.|翻到下一頁。||
3058|ngô|玉米（北部）|corn (Northern)|名詞|Ngô nướng ăn rất thơm.|烤玉米很香。|南部說 bắp|
3059|va chạm|碰撞 / 衝突|collision; conflict|名詞|Hai xe va chạm nhẹ.|兩台車輕微擦撞。||
3060|bảo hành|保固|warranty|名詞|Điện thoại được bảo hành mười hai tháng.|手機保固十二個月。||保行
3061|dê|山羊|goat|名詞|Lẩu dê là đặc sản Ninh Bình.|羊肉火鍋是寧平特產。||
3062|bất kể|不論|regardless of|介詞|Bất kể trời mưa hay nắng, anh ấy đều chạy bộ.|不論晴雨，他都去跑步。||不計
3063|bú|吸奶|to suckle|動詞|Em bé đang bú sữa mẹ.|小寶寶正在喝母奶。||
3064|nắp|蓋子|lid; cap|名詞|Đậy nắp nồi lại.|把鍋蓋蓋上。||
3065|quyết|決定 / 堅決|to decide; determined|動詞|Tôi quyết học tiếng Việt cho giỏi.|我決心把越語學好。||決
3066|bồ|男女朋友（口語）/ 籮筐|boyfriend/girlfriend (slang); basket|名詞|Anh ấy có bồ chưa?|他有女朋友了嗎？||
3067|ưa|喜歡|to like|動詞|Tôi không ưa đồ ngọt.|我不喜歡甜食。||
3068|sa|紗 / 陷入|gauze; to fall into|名詞|Áo dài này may bằng vải sa.|這件奧黛是用紗布做的。|sa mạc＝沙漠|紗
3069|nhá|喔（同 nhé）/ 嚼|okay? (= nhé); to chew|助詞|Mai gặp nhá!|明天見喔！||
3070|lều|帳篷|tent|名詞|Chúng tôi dựng lều cạnh hồ.|我們在湖邊搭帳篷。||
3071|nhầm lẫn|搞錯|confusion; mistake|名詞|Xin lỗi, có sự nhầm lẫn.|抱歉，有點誤會。||
3072|cưỡi|騎|to ride|動詞|Du khách cưỡi voi ở Bản Đôn.|遊客在班敦騎大象。||
3073|kẹp|夾子 / 夾|clip; to clip|名詞|Cho tôi mượn cái kẹp tóc.|借我一個髮夾。||
3074|phân loại|分類|to classify|動詞|Hãy phân loại rác trước khi vứt.|丟垃圾前請先分類。||分類
3075|thực tập|實習|internship|動詞|Em đang thực tập ở ngân hàng.|我正在銀行實習。||實習
3076|bảy|七|seven|數詞|Tuần có bảy ngày.|一週有七天。||
3077|chỉ dẫn|指引|instruction; to guide|名詞|Làm theo chỉ dẫn trên màn hình.|照螢幕上的指示操作。||指引
3078|giếng|井|well|名詞|Ngày xưa làng này dùng nước giếng.|以前這村子用井水。||
3079|thà|寧可|would rather|副詞|Tôi thà đi bộ còn hơn đi xe chật.|我寧可走路也不想擠車。||
3080|tước|剝奪 / 爵位|to strip; title|動詞|Anh ta bị tước bằng lái xe.|他被吊銷駕照。||爵
3081|đệm|墊子 / 床墊|cushion; mattress|名詞|Đệm này rất êm.|這個床墊很軟。|tên đệm＝中間名|
3082|gia cầm|家禽|poultry|名詞|Dịch cúm gia cầm đã được kiểm soát.|禽流感疫情已受控制。||家禽
3083|tiện lợi|便利|convenient|形容詞|Cửa hàng tiện lợi mở cửa hai mươi bốn giờ.|便利商店二十四小時營業。||便利
3084|cố vấn|顧問|adviser|名詞|Ông ấy là cố vấn pháp luật của công ty.|他是公司的法律顧問。||顧問
3085|mất mát|損失 / 失去|loss|名詞|Đó là mất mát lớn của gia đình.|那是家裡的一大損失。||
3086|sập|倒塌|to collapse|動詞|Cây cầu cũ bị sập.|舊橋倒塌了。||
3087|đường sắt|鐵路|railway|名詞|Đường sắt Bắc Nam dài hơn một nghìn bảy trăm km.|南北鐵路長一千七百多公里。||
3088|lướt|滑 / 瀏覽|to glide; to browse|動詞|Tôi lướt Facebook trước khi ngủ.|我睡前滑臉書。||掠
3089|nhường|讓|to give way; to yield|動詞|Hãy nhường ghế cho người già.|請讓座給老人。||讓
3090|phòng thủ|防守|defence|動詞|Đội nhà phòng thủ rất chắc.|主隊防守很穩。||防守
3091|tiện nghi|設施 / 舒適|amenities|名詞|Phòng có đầy đủ tiện nghi.|房間設施齊全。||便宜
3092|ồn|吵|noisy|形容詞|Quán này ồn quá.|這家店好吵。||
3093|bất chấp|不顧|in spite of|介詞|Bất chấp mưa to, họ vẫn đến.|儘管下大雨，他們還是來了。||
3094|cháo|粥|rice porridge|名詞|Ốm thì nên ăn cháo.|生病就該吃粥。||
3095|mệnh lệnh|命令|order|名詞|Đây là mệnh lệnh của cấp trên.|這是上級的命令。||命令
3096|nhấc|拿起 / 抬|to lift|動詞|Nhấc máy giúp tôi, có điện thoại.|幫我接一下電話，有人打來。||
3097|trung thực|誠實|honest|形容詞|Anh ấy là người trung thực.|他是個誠實的人。||忠實
3098|chỉ thị|指示|directive|名詞|Chúng tôi làm theo chỉ thị của giám đốc.|我們依總經理的指示辦理。||指示
3099|bối rối|慌亂 / 不知所措|confused; flustered|形容詞|Tôi bối rối không biết trả lời sao.|我慌得不知道怎麼回答。||
3100|dung dịch|溶液|solution (liquid)|名詞|Rửa vết thương bằng dung dịch muối.|用鹽水清洗傷口。||溶液
3101|giá thành|成本|production cost|名詞|Giá thành sản phẩm đã giảm.|產品成本已下降。||價成
3102|phấn|粉 / 粉筆|powder; chalk|名詞|Cô giáo viết bằng phấn trắng.|老師用白粉筆寫字。||粉
3103|tuyệt vọng|絕望|despair|形容詞|Đừng tuyệt vọng, vẫn còn cơ hội.|別絕望，還有機會。||絕望
3104|hối hận|後悔|to regret|動詞|Tôi hối hận vì đã nói như vậy.|我後悔那樣說。||悔恨
3105|cước|費用（運費、話費）|fee; charge|名詞|Cước điện thoại tháng này bao nhiêu?|這個月的電話費多少？||
3106|biểu|叫（南部）/ 表|to tell (Southern); chart|動詞|Mẹ biểu con về sớm.|媽媽叫我早點回家。|biểu đồ＝圖表|表
3107|bức xúc|氣憤 / 急迫|frustrated; pressing|形容詞|Người dân bức xúc vì kẹt xe.|居民對塞車很不滿。||逼促
3108|cạo|刮 / 剃|to shave; to scrape|動詞|Sáng nào anh ấy cũng cạo râu.|他每天早上刮鬍子。||
3109|nhiếp ảnh|攝影|photography|名詞|Anh ấy là nhiếp ảnh gia.|他是攝影師。||攝影
3110|viên chức|公務人員|public employee|名詞|Mẹ tôi là viên chức nhà nước.|我媽媽是公務人員。||員職
3111|ý chí|意志|willpower|名詞|Anh ấy có ý chí rất mạnh.|他意志很堅強。||意志
3112|đặt hàng|訂貨|to order|動詞|Tôi đặt hàng trên mạng.|我在網路上訂貨。||
3113|mơ ước|夢想|dream|名詞|Mơ ước của em là làm bác sĩ.|我的夢想是當醫生。||
3114|tiền vệ|中場（足球）|midfielder|名詞|Tiền vệ chuyền bóng rất chính xác.|中場傳球很精準。||前衛
3115|hôi|臭|smelly|形容詞|Thùng rác hôi quá.|垃圾桶好臭。||
3116|lo sợ|擔心害怕|fearful|形容詞|Người dân lo sợ bão lớn.|居民擔心大颱風。||
3117|họng|喉嚨|throat|名詞|Tôi bị đau họng.|我喉嚨痛。||
3118|xa lạ|陌生|unfamiliar|形容詞|Thành phố này còn xa lạ với tôi.|這城市對我來說還很陌生。||
3119|đấu giá|拍賣|auction|動詞|Bức tranh được đấu giá rất cao.|這幅畫拍出高價。||鬥價
3120|bản quyền|版權|copyright|名詞|Phần mềm này có bản quyền.|這是正版軟體。||版權
3121|Hán|漢（字）|Han (Chinese)|名詞|Ông tôi biết đọc chữ Hán.|我爺爺會讀漢字。||漢
3122|bệnh tật|疾病|illness|名詞|Chúc bà khỏe mạnh, không bệnh tật.|祝奶奶身體健康、無病無痛。||病疾
3123|hoang dã|野生|wild|形容詞|Vườn quốc gia có nhiều động vật hoang dã.|國家公園有很多野生動物。||荒野
3124|ban ngày|白天|daytime|名詞|Ban ngày trời rất nóng.|白天天氣很熱。||
3125|tính mạng|性命|life|名詞|An toàn tính mạng là quan trọng nhất.|生命安全最重要。||性命
3126|hội chợ|博覽會 / 展覽|fair; exhibition|名詞|Hội chợ thương mại diễn ra ở Sài Gòn.|商展在西貢舉行。||
3127|quang|晴朗 / 光|clear; light (Sino)|形容詞|Trời quang mây tạnh.|雨過天晴。|quang cảnh＝光景|光
3128|song song|並行|parallel|形容詞|Hai con đường chạy song song.|兩條路平行。||雙雙
3129|thải|排放 / 淘汰|to discharge|動詞|Nhà máy không được thải nước bẩn ra sông.|工廠不得把污水排到河裡。|khí thải＝廢氣|汰
3130|để dành|存起來|to save up|動詞|Tôi để dành tiền mua xe.|我存錢買車。||
3131|câm|啞|mute|形容詞|Câm miệng lại!|閉嘴！|罵人用語，語氣很兇|
3132|khách quan|客觀|objective|形容詞|Hãy nhận xét một cách khách quan.|請客觀地評論。||客觀
3133|két|保險箱 / 箱（啤酒）|safe; crate|名詞|Tiền để trong két sắt.|錢放在保險箱裡。|một két bia＝一箱啤酒|
3134|xì|漏氣 / 嘶|to leak (air)|動詞|Bánh xe bị xì hơi.|輪胎漏氣了。||
3135|biến động|波動|fluctuation|名詞|Giá vàng biến động mạnh.|金價波動劇烈。||變動
3136|con mẹ|SKIP
3137|lỏng|鬆 / 液態|loose; liquid|形容詞|Ốc vít bị lỏng.|螺絲鬆了。||
3138|hàm lượng|含量|content (amount)|名詞|Sữa này có hàm lượng đường thấp.|這種牛奶含糖量低。||含量
3139|lưu thông|流通 / 通行|to circulate|動詞|Xe cộ lưu thông bình thường.|車輛正常通行。||流通
3140|trọng|重視|to value|動詞|Ông ấy rất trọng chữ tín.|他很重視信用。||重
3141|tuần tra|巡邏|to patrol|動詞|Cảnh sát tuần tra ban đêm.|警察夜間巡邏。||巡查
3142|buồng|房間 / 串（香蕉）|room; bunch|名詞|Mẹ mua một buồng chuối.|媽媽買了一大串香蕉。||
3143|công sở|機關 / 辦公處|government office|名詞|Giờ làm việc ở công sở là tám tiếng.|機關上班時間是八小時。||公所
3144|dung lượng|容量|capacity|名詞|Điện thoại hết dung lượng rồi.|手機容量滿了。||容量
3145|dẫn dắt|帶領|to lead; to guide|動詞|Cô giáo dẫn dắt học sinh rất tận tình.|老師很用心地帶領學生。||
3146|kinh ngạc|驚訝|astonished|形容詞|Tôi kinh ngạc trước vẻ đẹp của vịnh.|我被海灣的美景驚呆了。||驚愕
3147|vạch|線 / 劃|line; to draw|名詞|Dừng xe trước vạch trắng.|在白線前停車。||
3148|đặc sắc|特色 / 出色|distinctive|形容詞|Lễ hội có nhiều tiết mục đặc sắc.|節慶有許多精彩節目。||特色
3149|đồng phục|制服|uniform|名詞|Học sinh mặc đồng phục đến trường.|學生穿制服上學。||同服
3150|bình yên|平安|peaceful|形容詞|Chúc gia đình bạn bình yên.|祝你們家平安。||平安
3151|bởi vậy|因此|therefore|連詞|Trời mưa, bởi vậy trận đấu bị hoãn.|下雨了，因此比賽延期。||
3152|sụp đổ|崩潰 / 倒塌|to collapse|動詞|Công ty sụp đổ sau khủng hoảng.|公司在危機後倒閉。||
3153|truy|追|to pursue|動詞|Cảnh sát truy bắt tên trộm.|警察追捕小偷。|truy cập＝存取（網路）|追
3154|Tây Nguyên|西原（越南中部高原）|Central Highlands|名詞|Tây Nguyên là vùng trồng cà phê lớn.|西原是咖啡主要產區。||西原
3155|ghi chép|筆記 / 記錄|to take notes|動詞|Nhớ ghi chép khi họp.|開會記得做筆記。||
3156|khen thưởng|獎勵|to reward|動詞|Công ty khen thưởng nhân viên xuất sắc.|公司獎勵優秀員工。||
3157|đường hầm|隧道|tunnel|名詞|Xe đi qua đường hầm Hải Vân.|車子穿過海雲隧道。||
3158|dò|探 / 查|to probe; to look up|動詞|Dò bản đồ để tìm đường.|查地圖找路。||
3159|thuật|敘述 / 術|to recount; art (Sino)|動詞|Anh thuật lại câu chuyện cho tôi nghe.|你把事情經過說給我聽。|kỹ thuật＝技術|述
3160|động tác|動作|movement; gesture|名詞|Làm theo động tác của huấn luyện viên.|跟著教練的動作做。||動作
3161|ưa thích|喜愛|favourite|形容詞|Phở là món ăn ưa thích của tôi.|河粉是我最愛的食物。||
3162|thối|臭 / 找零（南部）|rotten; to give change|形容詞|Trứng này thối rồi.|這顆蛋臭掉了。|南部 thối tiền＝找錢|
3163|cương|韁繩 / 堅定|reins; firm|名詞|Cầm cương ngựa cho chặt.|握緊馬韁繩。|kiên cường＝堅強|
3164|dịch bệnh|疫情|epidemic|名詞|Dịch bệnh đã được kiểm soát.|疫情已受到控制。||疫病
3165|dịu dàng|溫柔|gentle|形容詞|Cô ấy nói chuyện rất dịu dàng.|她說話很溫柔。||
3166|lừa dối|欺騙|to deceive|動詞|Đừng lừa dối người thân.|別欺騙家人。||
3167|trọng tâm|重點|focus; key point|名詞|Trọng tâm bài học hôm nay là gì?|今天課程的重點是什麼？||重心
3168|động đất|地震|earthquake|名詞|Đài Loan hay có động đất.|台灣常有地震。||
3169|bình minh|黎明|dawn|名詞|Chúng tôi ngắm bình minh trên biển.|我們在海邊看日出。||平明
3170|chủ quyền|主權|sovereignty|名詞|Mỗi quốc gia đều bảo vệ chủ quyền.|每個國家都捍衛主權。||主權
3171|dây chuyền|生產線 / 項鍊|production line; necklace|名詞|Dây chuyền sản xuất chạy hai mươi bốn giờ.|生產線二十四小時運轉。||
3172|xử phạt|處罰|to penalize|動詞|Người vi phạm sẽ bị xử phạt.|違規者將受罰。||處罰
3173|cố tình|故意|intentionally|副詞|Anh ta cố tình đến muộn.|他故意遲到。||故情
3174|đồng minh|同盟|ally|名詞|Hai nước là đồng minh lâu năm.|兩國是長年盟友。||同盟
3175|chậu|盆|basin; pot|名詞|Trồng cây trong chậu nhỏ.|在小盆裡種植物。||
3176|Hàn|韓國 / 焊接|Korea; to weld|名詞|Tôi đang học tiếng Hàn.|我正在學韓語。|hàn＝焊接（動詞）|韓
3177|rủ|邀 / 低垂|to invite along; to droop|動詞|Bạn bè rủ tôi đi cà phê.|朋友約我去喝咖啡。||
3178|thẳng thắn|坦率|frank|形容詞|Anh ấy nói chuyện rất thẳng thắn.|他說話很直率。||
3179|che giấu|隱瞞|to conceal|動詞|Đừng che giấu sự thật.|別隱瞞真相。||
3180|lấp|填|to fill (in)|動詞|Họ lấp cái hố trên đường.|他們把路上的坑填平。||
3181|quần chúng|群眾|the masses|名詞|Phong trào được quần chúng ủng hộ.|這項運動受到群眾支持。||群眾
3182|thống đốc|總督 / 州長 / 行長|governor|名詞|Thống đốc Ngân hàng Nhà nước phát biểu hôm nay.|國家銀行行長今天發表談話。||統督
3183|đính|釘 / 附|to attach; to sew on|動詞|Đính kèm file trong email.|在 email 中附上檔案。|đính kèm＝附件|訂
3184|danh mục|目錄 / 清單|list; catalogue|名詞|Đây là danh mục sản phẩm mới.|這是新產品目錄。||名目
3185|thăm dò|探查 / 民調|to survey; to probe|動詞|Họ thăm dò ý kiến khách hàng.|他們調查顧客意見。||
3186|bảo hộ|保護|to protect|動詞|Công nhân phải mặc đồ bảo hộ.|工人必須穿防護衣。||保護
3187|giận dữ|憤怒|furious|形容詞|Ông ấy giận dữ bỏ về.|他氣沖沖地走了。||
3188|đè|壓|to press down|動詞|Đừng để đồ nặng đè lên hộp bánh.|別讓重物壓到餅盒。||
3189|Vũng Tàu|頭頓|Vung Tau|名詞|Cuối tuần chúng tôi đi biển Vũng Tàu.|週末我們去頭頓海邊。||
3190|khoai tây|馬鈴薯|potato|名詞|Cho tôi một phần khoai tây chiên.|請給我一份薯條。||
3191|vương|王 / 沾染|king (Sino); to linger|名詞|Vương quốc Anh là nước lớn ở châu Âu.|英國是歐洲大國。||王
3192|xinh xắn|小巧可愛|pretty; cute|形容詞|Căn nhà nhỏ xinh xắn bên hồ.|湖邊有間小巧可愛的房子。||
3193|đối thoại|對話|dialogue|名詞|Hai bên cần đối thoại để hiểu nhau.|雙方需要對話來互相了解。||對話
3194|bắt gặp|撞見|to come across|動詞|Tôi bắt gặp anh ấy ở siêu thị.|我在超市撞見他。||
3195|gia vị|調味料|spice; seasoning|名詞|Món này cần thêm gia vị.|這道菜需要再加點調味料。||加味
3196|giùm|幫（南部）|for (someone)|副詞|Anh mở cửa giùm em.|請幫我開門。|北部說 giúp|
3197|nuốt|吞|to swallow|動詞|Tôi bị đau họng, khó nuốt.|我喉嚨痛，很難吞嚥。||
3198|bẩn thỉu|骯髒|filthy|形容詞|Căn phòng bẩn thỉu quá.|這房間髒死了。||
3199|gợi|引起 / 喚起|to evoke|動詞|Bài hát gợi nhớ tuổi thơ.|這首歌讓人想起童年。|gợi ý＝建議|
3200|thiếu niên|少年|youth (teen)|名詞|Đây là sân chơi cho thiếu niên.|這是給青少年的遊樂場。||少年
3201|trái phép|非法|illegal|形容詞|Xe đậu trái phép sẽ bị phạt.|違規停車會被罰款。||
3202|tức là|也就是說|that is|連詞|Thứ hai tuần sau, tức là ngày mười lăm.|下週一，也就是十五號。||即
3203|bổ nhiệm|任命|to appoint|動詞|Anh ấy được bổ nhiệm làm giám đốc.|他被任命為總經理。||補任
3204|ngư dân|漁民|fisherman|名詞|Ngư dân ra khơi từ sáng sớm.|漁民一大早就出海。||漁民
3205|ti|SKIP
3206|duyên|緣分 / 有魅力|fate; charm|名詞|Chúng ta gặp nhau là có duyên.|我們相遇是緣分。||緣
3207|nhân tạo|人造|artificial|形容詞|Trí tuệ nhân tạo đang thay đổi thế giới.|人工智慧正在改變世界。||人造
3208|soi|照 / 照鏡子|to shine on; to look in a mirror|動詞|Cô ấy soi gương trước khi đi.|她出門前照鏡子。||
3209|phiêu lưu|冒險|adventure|名詞|Con tôi thích phim phiêu lưu.|我孩子喜歡冒險片。||漂流
3210|treo cổ|上吊 / 絞刑|to hang (execution)|動詞|Phim có cảnh nhân vật bị treo cổ.|片中有角色被絞死的場景。||
3211|sinh sản|生殖 / 繁殖|to reproduce|動詞|Loài cá này sinh sản vào mùa mưa.|這種魚在雨季繁殖。||生產
3212|Do Thái|猶太|Jewish|名詞|Ông ấy là người Do Thái.|他是猶太人。||猶太
3213|dài hạn|長期|long-term|形容詞|Hợp đồng dài hạn có giá tốt hơn.|長期合約價格比較優惠。||長限
3214|thiếu nhi|兒童|children|名詞|Ngày Quốc tế Thiếu nhi là một tháng sáu.|國際兒童節是六月一日。||少兒
3215|thủng|破洞|punctured|形容詞|Lốp xe bị thủng.|輪胎破了。||
3216|đắp|蓋（被）/ 堆|to cover with; to build up|動詞|Đắp chăn vào kẻo lạnh.|蓋好被子，免得著涼。||
3217|trở về|回來|to return|動詞|Anh ấy trở về quê sau mười năm.|他十年後回到家鄉。||
3218|Trung Hoa|中華|China (cultural)|名詞|Phố Tàu có nhiều nhà hàng Trung Hoa.|中國城有很多中餐廳。||中華
3219|thuỷ điện|水力發電|hydropower|名詞|Nhà máy thuỷ điện Hòa Bình rất lớn.|和平水電站非常大。||水電
3220|hàng không|航空|aviation; airline|名詞|Hãng hàng không này giá rẻ.|這家航空公司很便宜。||航空
3221|hứng|興致 / 接（住）|mood; to catch|名詞|Hôm nay tôi không có hứng đi chơi.|今天我沒心情出去玩。||興
3222|phân công|分工|to assign|動詞|Trưởng nhóm phân công công việc.|組長分配工作。||分工
3223|My|SKIP
3224|hình sự|刑事|criminal (law)|形容詞|Đây là vụ án hình sự.|這是刑事案件。||刑事
3225|tảng|大塊|block; chunk|量詞|Một tảng đá lớn chắn đường.|一塊大石頭擋住了路。||
3226|ám sát|暗殺|to assassinate|動詞|Phim kể về một vụ ám sát.|電影講述一起暗殺事件。||暗殺
3227|giới tính|性別|gender|名詞|Điền giới tính vào ô này.|在這格填寫性別。||界性
3228|mật khẩu|密碼|password|名詞|Đừng chia sẻ mật khẩu cho ai.|不要把密碼給任何人。||密口
3229|rách|破（布、紙）|torn|形容詞|Quần tôi bị rách.|我的褲子破了。||
3230|trợ lý|助理|assistant|名詞|Trợ lý của giám đốc sẽ liên hệ với anh.|總經理助理會跟你聯絡。||助理
3231|chấp thuận|批准 / 同意|to approve|動詞|Ngân hàng đã chấp thuận khoản vay.|銀行已核准貸款。||執順
3232|hô hấp|呼吸|respiration|名詞|Bệnh nhân bị khó hô hấp.|病人呼吸困難。||呼吸
3233|ngành nghề|行業|profession; trade|名詞|Mỗi ngành nghề đều có khó khăn riêng.|每個行業都有自己的難處。||
3234|tân|新|new (Sino)|形容詞|Tối nay nhà bạn tôi làm tiệc tân gia.|今晚我朋友家辦入厝宴。|tân gia＝新居|新
3235|hàng rào|圍籬|fence|名詞|Nhà có hàng rào xanh rất đẹp.|房子有漂亮的綠籬。||
3236|lạm dụng|濫用|to abuse|動詞|Không nên lạm dụng thuốc kháng sinh.|不應濫用抗生素。||濫用
3237|thẩm định|審核|to appraise|動詞|Dự án đang được thẩm định.|專案正在審查中。||審定
3238|thực thi|實施|to enforce|動詞|Luật này được thực thi từ năm sau.|這項法律明年起實施。||實施
3239|tham vọng|野心 / 抱負|ambition|名詞|Anh ấy có tham vọng lớn.|他雄心勃勃。||貪望
3240|đỉnh cao|巔峰|peak|名詞|Đây là đỉnh cao sự nghiệp của cô ấy.|這是她事業的巔峰。||
3241|định vị|定位|to locate; GPS|動詞|Bật định vị để tìm đường.|打開定位來找路。||定位
3242|chất béo|脂肪|fat|名詞|Món này có nhiều chất béo.|這道菜脂肪很多。||
3243|lộn xộn|亂七八糟|messy|形容詞|Phòng con lộn xộn quá.|孩子的房間亂七八糟。||
3244|hông|腰側 / 不（南部口語）|hip; not (Southern slang)|名詞|Tôi bị đau hông.|我腰側痛。|南部口語 hông＝không|
3245|rảnh|有空|free (time)|形容詞|Tối nay bạn rảnh không?|今晚你有空嗎？||
3246|nông|淺 / 農|shallow; agriculture (Sino)|形容詞|Hồ này nông lắm, không nguy hiểm.|這個湖很淺，不危險。|nông nghiệp＝農業|
3247|biệt|分別 / 杳無音訊|separately; to vanish|動詞|Anh ấy đi biệt mấy năm không về.|他一去好幾年都沒回來。|đặc biệt＝特別|別
3248|cảm ứng|感應 / 觸控|touch; induction|名詞|Màn hình cảm ứng rất nhạy.|觸控螢幕很靈敏。||感應
3249|cấp độ|等級|level|名詞|Bài này ở cấp độ trung cấp.|這課是中級程度。||級度
3250|hàm|下巴 / 頜|jaw|名詞|Tôi bị đau hàm khi nhai.|我咀嚼時下巴痛。||頷
3251|thiên hạ|天下 / 大家|the world; people|名詞|Đừng để ý lời thiên hạ.|別在意別人說什麼。||天下
3252|báu|珍貴|precious|形容詞|Đây là món quà quý báu.|這是很珍貴的禮物。||寶
3253|búp bê|洋娃娃|doll|名詞|Con gái tôi thích chơi búp bê.|我女兒喜歡玩洋娃娃。||
3254|nhánh|分支|branch|名詞|Công ty có nhiều nhánh kinh doanh.|公司有多個業務分支。||
3255|phi thường|非凡|extraordinary|形容詞|Cô ấy có trí nhớ phi thường.|她有驚人的記憶力。||非常
3256|rụng|掉落|to fall off|動詞|Mùa thu lá rụng nhiều.|秋天落葉很多。||
3257|chấp hành|執行 / 遵守|to comply; to execute|動詞|Mọi người phải chấp hành luật giao thông.|大家必須遵守交通規則。||執行
3258|yên lặng|安靜|silent|形容詞|Cả lớp yên lặng lắng nghe.|全班安靜地聆聽。||
3259|bổ|劈 / 補|to split; nutritious|動詞|Bổ quả dưa hấu ra ăn đi.|把西瓜切開來吃吧。|bổ dưỡng＝營養|補
3260|quý giá|珍貴|valuable|形容詞|Thời gian là thứ quý giá nhất.|時間是最珍貴的東西。||貴價
3261|sáng lập|創立|to found|動詞|Ông ấy sáng lập công ty năm 1995.|他在 1995 年創立公司。||創立
3262|đánh cắp|偷竊|to steal|動詞|Thông tin cá nhân bị đánh cắp.|個人資料被盜。||
3263|đẹp mắt|好看|eye-catching|形容詞|Món ăn được trình bày rất đẹp mắt.|菜餚擺盤很好看。||
3264|con cháu|子孫|descendants|名詞|Ông bà luôn lo cho con cháu.|祖父母總是為子孫操心。||
3265|trợ cấp|補助|subsidy|名詞|Sinh viên nghèo được trợ cấp học phí.|清寒學生獲得學費補助。||助給
3266|vận động viên|運動員|athlete|名詞|Cô ấy là vận động viên bơi lội.|她是游泳選手。||運動員
3267|trang sức|首飾|jewellery|名詞|Cửa hàng bán trang sức bạc.|這家店賣銀飾。||裝飾
3268|son|口紅|lipstick|名詞|Chị ấy đánh son đỏ.|她擦紅色口紅。||
3269|định mệnh|命中注定|destiny|名詞|Cuộc gặp gỡ đó như định mệnh.|那次相遇彷彿命中注定。||定命
3270|đun|煮（北部）|to boil; to heat|動詞|Đun nước pha trà nhé.|燒水泡茶吧。|南部說 nấu nước|
3271|đít|SKIP
3272|bộ máy|機構 / 機器|apparatus; machinery|名詞|Bộ máy hành chính cần tinh gọn hơn.|行政機構需要更精簡。||
3273|hoá đơn|發票 / 帳單|invoice; bill|名詞|Cho tôi hoá đơn đỏ nhé.|請開公司發票給我。|hóa đơn đỏ＝增值稅發票|貨單
3274|lộ trình|路線 / 行程|route; roadmap|名詞|Lộ trình chuyến đi đã được gửi qua email.|行程已用 email 寄出。||路程
3275|ồn ào|吵鬧|noisy|形容詞|Thành phố ồn ào cả ngày.|城市整天吵吵鬧鬧。||
3276|chi tiêu|開銷|spending|名詞|Tháng này chi tiêu nhiều quá.|這個月開銷太大。||支消
3277|phó thủ tướng|副總理|deputy prime minister|名詞|Phó thủ tướng đến dự lễ khai mạc.|副總理出席開幕式。||副首相
3278|chúng mình|我們（親暱）|we (intimate)|代名詞|Chúng mình đi xem phim nhé.|我們去看電影吧。||
3279|kiềm chế|克制|to restrain|動詞|Hãy kiềm chế cơn giận.|要克制怒氣。||鉗制
3280|yêu mến|喜愛|to be fond of|動詞|Học sinh rất yêu mến thầy.|學生們都很喜愛老師。||
3281|lậu|走私 / 非法|smuggled; illicit|形容詞|Hàng lậu bị tịch thu.|走私貨被沒收。||漏
3282|nghìn|千（北部）|thousand|數詞|Cái này giá năm mươi nghìn.|這個五萬盾。|南部說 ngàn|
3283|nhiệt đới|熱帶|tropical|形容詞|Việt Nam có khí hậu nhiệt đới.|越南屬於熱帶氣候。||熱帶
3284|nhảm nhí|胡扯|nonsense|形容詞|Đừng nói chuyện nhảm nhí nữa.|別再胡說了。||
3285|khoả|裸|naked|形容詞|Bức tượng khoả thân trong bảo tàng.|博物館裡的裸體雕像。|多見於 khỏa thân|裸
3286|nửa đêm|半夜|midnight|名詞|Nửa đêm có người gõ cửa.|半夜有人敲門。||
3287|sôi nổi|熱烈|lively|形容詞|Buổi thảo luận diễn ra sôi nổi.|討論進行得很熱烈。||
3288|duyệt|核准 / 瀏覽|to approve; to browse|動詞|Sếp đã duyệt đơn nghỉ phép.|老闆已批准休假單。|trình duyệt＝瀏覽器|閱
3289|mật ong|蜂蜜|honey|名詞|Uống trà gừng với mật ong.|喝薑茶加蜂蜜。||
3290|nến|蠟燭|candle|名詞|Thổi nến đi, chúc mừng sinh nhật!|吹蠟燭吧，生日快樂！|南部說 đèn cầy|
3291|vật dụng|用品|household item|名詞|Mang theo vật dụng cá nhân.|帶上個人用品。||物用
3292|bù|補 / 彌補|to make up for|動詞|Tôi sẽ làm bù vào thứ bảy.|我星期六補班。||
3293|kiểm toán|審計 / 稽核|audit|名詞|Công ty kiểm toán đang làm việc.|會計師事務所正在查帳。||檢算
3294|loạn|亂|chaos; disorder|形容詞|Giờ tan tầm giao thông rất loạn.|下班時段交通很亂。||亂
3295|riêng biệt|獨立 / 個別|separate|形容詞|Mỗi phòng có nhà vệ sinh riêng biệt.|每間房有獨立衛浴。||
3296|thuỷ thủ|水手|sailor|名詞|Các thuỷ thủ đang chuẩn bị ra khơi.|水手們正準備出海。||水手
3297|Hà|河（漢越）|river (Sino)|名詞|Hà Nội nghĩa là "trong sông".|河內的意思是「河之內」。|日常說 sông|河
3298|nhện|蜘蛛|spider|名詞|Góc tường có con nhện.|牆角有隻蜘蛛。||
3299|kỳ diệu|奇妙|miraculous|形容詞|Thiên nhiên thật kỳ diệu.|大自然真奇妙。||奇妙
3300|mồ côi|孤兒|orphan|名詞|Cô ấy mồ côi cha từ nhỏ.|她從小喪父。||
3301|trực|值班|to be on duty|動詞|Tối nay ai trực?|今晚誰值班？||直
3302|hành lý|行李|luggage|名詞|Hành lý của tôi chưa ra.|我的行李還沒出來。||行李
3303|lý giải|解釋 / 理解|to explain|動詞|Tôi không lý giải được chuyện này.|我無法解釋這件事。||理解
3304|luồng|股（氣流）/ 流|current; stream|名詞|Một luồng gió mát thổi qua.|一陣涼風吹過。||
3305|phản hồi|回饋 / 回覆|feedback; to reply|名詞|Cảm ơn phản hồi của bạn.|謝謝你的回饋。||反回
3306|tự nguyện|自願|voluntary|形容詞|Họ tự nguyện làm việc không lương.|他們自願無償工作。||自願
3307|giặc|侵略者 / 敵寇|invader; enemy|名詞|Ông cha ta đã đánh giặc giữ nước.|我們的祖先曾抗敵衛國。||
3308|mật mã|密碼（代碼）|code; cipher|名詞|Tin nhắn được viết bằng mật mã.|訊息用暗號寫成。||密碼
3309|toán học|數學|mathematics|名詞|Anh ấy là giáo viên toán học.|他是數學老師。||算學
3310|đầu bếp|廚師|chef|名詞|Đầu bếp nhà hàng này rất giỏi.|這家餐廳的廚師很厲害。||
3311|độc thân|單身|single|形容詞|Anh ấy vẫn còn độc thân.|他還是單身。||獨身
3312|chèo|划（槳）/ 嘲劇|to row; cheo theatre|動詞|Chúng tôi chèo thuyền ở Tràng An.|我們在長安划船。|chèo 也是北部傳統戲曲|
3313|chỉ trích|指責|to criticize|動詞|Anh ấy bị chỉ trích vì phát ngôn sai.|他因失言遭到批評。||指摘
3314|giả thuyết|假設|hypothesis|名詞|Đây chỉ là giả thuyết.|這只是假設。||假說
3315|góp ý|提意見|to give feedback|動詞|Cảm ơn bạn đã góp ý.|謝謝你提供意見。||
3316|khống chế|控制|to control|動詞|Cảnh sát đã khống chế được nghi phạm.|警方已制伏嫌犯。||控制
3317|phục|佩服 / 埋伏|to admire; to ambush|動詞|Tôi phục anh thật đấy!|我真佩服你！|khâm phục＝欽佩|服
3318|mất trí|失智 / 發瘋|to lose one's mind|動詞|Ông cụ bị mất trí nhớ.|老先生失智了。||失智
3319|tệ hại|糟糕|terrible|形容詞|Tình hình ngày càng tệ hại.|情況越來越糟。||弊害
3320|vòng tay|手鐲 / 懷抱|bracelet; embrace|名詞|Cô ấy đeo vòng tay bạc.|她戴銀手鐲。||
3321|xác chết|屍體|corpse|名詞|Cảnh sát phát hiện một xác chết bên sông.|警方在河邊發現一具屍體。||
3322|đại loại|大致|roughly|副詞|Đại loại là anh ấy không muốn đi.|大致上就是他不想去。||大類
3323|đần|笨|dumb|形容詞|Đừng nói con đần như thế.|別說孩子那麼笨。|罵人用語|
3324|chuyên đề|專題|special topic|名詞|Hội thảo chuyên đề về năng lượng.|能源專題研討會。||專題
3325|căn bản|根本 / 基本|fundamental|形容詞|Đây là kiến thức căn bản.|這是基本知識。||根本
3326|ban chấp hành|執行委員會|executive committee|名詞|Ban chấp hành công đoàn họp hôm nay.|工會執委會今天開會。||班執行
3327|dở|難吃 / 不好 / 做到一半|bad (taste); unfinished|形容詞|Món này dở quá.|這道菜好難吃。|bỏ dở＝半途而廢|
3328|mập|胖（南部）|fat (Southern)|形容詞|Dạo này anh mập ra.|最近你胖了。|北部說 béo|
3329|mịn|細緻 / 滑|smooth; fine|形容詞|Da em bé rất mịn.|小寶寶的皮膚很滑嫩。||
3330|sân chơi|遊樂場 / 平台|playground; arena|名詞|Khu này có sân chơi cho trẻ em.|這區有兒童遊樂場。||
3331|thiêng liêng|神聖|sacred|形容詞|Tình mẹ thiêng liêng nhất.|母愛最神聖。||
3332|tàn|凋謝 / 結束 / 菸灰|to wither; to end; ash|動詞|Hoa đã tàn rồi.|花已經謝了。||殘
3333|dệt|編織|to weave|動詞|Làng này nổi tiếng dệt lụa.|這個村以織絲聞名。||
3334|nước hoa|香水|perfume|名詞|Chị dùng nước hoa gì vậy?|妳擦什麼香水？||
3335|dụ|哄 / 誘|to coax; to lure|動詞|Mẹ dụ con ăn rau.|媽媽哄孩子吃青菜。||誘
3336|lắc|搖|to shake|動詞|Lắc đều trước khi uống.|飲用前搖勻。||
3337|nhức|痠痛|to ache|動詞|Tôi bị nhức đầu.|我頭痛。||
3338|rễ|根|root|名詞|Cây này có rễ rất sâu.|這棵樹根很深。||
3339|thông tư|通令 / 通告|circular (regulation)|名詞|Bộ vừa ban hành thông tư mới.|部會剛頒布新的通令。||
3340|thể dục|體育 / 運動|exercise|名詞|Mỗi sáng ông tôi tập thể dục.|我爺爺每天早上運動。||體育
3341|đường bộ|陸路|road (transport)|名詞|Đi đường bộ từ Hà Nội đến Huế mất mười hai tiếng.|從河內走陸路到順化要十二小時。||
3342|chức vụ|職務|position|名詞|Chức vụ của anh là gì?|你的職位是什麼？||職務
3343|hưởng ứng|響應|to respond to|動詞|Người dân hưởng ứng phong trào trồng cây.|民眾響應種樹運動。||響應
3344|mật độ|密度|density|名詞|Mật độ dân số ở thành phố rất cao.|城市人口密度很高。||密度
3345|thủ lĩnh|首領|leader|名詞|Anh ấy là thủ lĩnh của nhóm.|他是這群人的首領。||首領
3346|kiêm|兼任|concurrently|動詞|Ông ấy là giám đốc kiêm kế toán.|他是總經理兼會計。||兼
3347|nhận biết|辨認|to recognize|動詞|Làm sao nhận biết hàng thật hàng giả?|怎麼分辨真貨假貨？||
3348|thủ công|手工|handmade|形容詞|Đây là đồ thủ công mỹ nghệ.|這是手工藝品。||手工
3349|bàn giao|交接|to hand over|動詞|Chủ đầu tư bàn giao nhà vào tháng sau.|建商下個月交屋。||
3350|cúng|祭拜|to make offerings|動詞|Ngày rằm, nhà tôi cúng ông bà.|每逢十五，我家祭拜祖先。||供
3351|đại gia|富豪|tycoon|名詞|Ông ấy là đại gia bất động sản.|他是房地產大亨。||大家
3352|đề phòng|提防|to guard against|動詞|Mang theo ô để đề phòng trời mưa.|帶把傘以防下雨。||提防
3353|Quảng Ngãi|廣義（省）|Quang Ngai|名詞|Quảng Ngãi có đảo Lý Sơn.|廣義省有李山島。||廣義
3354|dữ dội|猛烈|violent; fierce|形容詞|Cơn mưa dữ dội kéo dài cả đêm.|暴雨下了一整夜。||
3355|ngụ|居住|to reside|動詞|Ông ấy ngụ tại quận Ba Đình.|他住在巴亭郡。||寓
3356|phù hộ|保佑|to bless; to protect|動詞|Cầu trời phù hộ cho gia đình.|祈求上天保佑全家。||扶護
3357|tiên tri|先知 / 預言|prophet; to prophesy|名詞|Ông ấy nói như một nhà tiên tri.|他說得像個先知。||先知
3358|tình thế|局勢|situation|名詞|Tình thế rất khó khăn.|局勢非常艱難。||情勢
3359|điếu|根（菸）/ 悼|classifier for cigarettes; to mourn|量詞|Anh ấy hút một điếu thuốc.|他抽了一根菸。|điếu văn＝悼詞|
3360|đồng nghĩa|同義|synonymous|形容詞|Hai từ này đồng nghĩa với nhau.|這兩個字是同義詞。||同義
3361|chánh|正（南部）/ 首長|chief (Southern)|形容詞|Ông ấy là chánh văn phòng.|他是辦公室主任。|北部常寫 chính|正
3362|coi trọng|重視|to value|動詞|Công ty coi trọng chất lượng.|公司重視品質。||
3363|cây trồng|作物|crop|名詞|Lúa là cây trồng chính ở đồng bằng.|稻米是平原的主要作物。||
3364|quần đảo|群島|archipelago|名詞|Quần đảo Côn Đảo rất đẹp.|崑崙群島很美。||群島
3365|Thuỵ Sĩ|瑞士|Switzerland|名詞|Đồng hồ Thuỵ Sĩ rất nổi tiếng.|瑞士手錶很有名。||瑞士
3366|banh|球（南部）/ 撐開|ball (Southern); to pry open|名詞|Bọn trẻ đá banh ngoài sân.|孩子們在院子踢球。|北部說 bóng|
3367|thầy giáo|男老師|male teacher|名詞|Thầy giáo dạy toán rất vui tính.|數學老師很風趣。||
3368|hải sản|海鮮|seafood|名詞|Nha Trang có nhiều hải sản tươi.|芽莊有很多新鮮海鮮。||海產
3369|kề|緊靠|close to|形容詞|Nhà tôi nằm kề bên chợ.|我家緊鄰市場。||
3370|quen biết|認識|to know (someone)|動詞|Chúng tôi quen biết nhau từ lâu.|我們認識很久了。||
3371|Vinh|榮市 / 榮|Vinh (city); glory (Sino)|名詞|Thành phố Vinh là thủ phủ của Nghệ An.|榮市是乂安省會。||榮
3372|cứu hộ|救援|rescue|名詞|Đội cứu hộ đã có mặt.|救援隊已到場。||救護
3373|truyền thuyết|傳說|legend|名詞|Hồ Gươm gắn với truyền thuyết trả gươm.|還劍湖與還劍傳說有關。||傳說
3374|đơn thuần|單純|pure; simply|形容詞|Đây không đơn thuần là chuyện tiền bạc.|這不單純是錢的問題。||單純
3375|Thái Bình Dương|太平洋|Pacific Ocean|名詞|Biển Đông nối với Thái Bình Dương.|東海與太平洋相連。||太平洋
3376|cân đối|勻稱 / 平衡|balanced|形容詞|Bữa ăn cần cân đối dinh dưỡng.|飲食需要營養均衡。||
3377|ghen|吃醋|jealous|形容詞|Anh ấy hay ghen.|他很愛吃醋。||
3378|tham|貪|greedy|形容詞|Đừng tham quá.|別太貪心。|tham gia＝參加（另一詞）|貪
3379|hái|摘|to pick|動詞|Chúng tôi đi hái dâu ở Đà Lạt.|我們去大叻摘草莓。||
3380|mạch máu|血管|blood vessel|名詞|Hút thuốc làm hại mạch máu.|吸菸傷血管。||
3381|ngoài trời|戶外|outdoors|名詞|Quán có bàn ngồi ngoài trời.|店裡有戶外座位。||
3382|xem ra|看來|it seems|副詞|Xem ra trời sắp mưa.|看來快下雨了。||
3383|biết bao|多麼|how much|副詞|Tôi nhớ quê biết bao!|我是多麼想念家鄉！||
3384|bình đẳng|平等|equal|形容詞|Nam nữ bình đẳng.|男女平等。||平等
3385|hộ chiếu|護照|passport|名詞|Xin cho xem hộ chiếu.|請出示護照。||護照
3386|khát|渴|thirsty|形容詞|Tôi khát nước quá.|我好渴。||渴
3387|lén|偷偷|secretly|副詞|Con lén ăn bánh trong tủ.|孩子偷吃櫃子裡的餅。||
3388|nghi lễ|儀式|ceremony|名詞|Đám cưới có nhiều nghi lễ truyền thống.|婚禮有很多傳統儀式。||儀禮
3389|nhà cửa|房子|houses; home|名詞|Tết đến, nhà cửa được dọn sạch.|過年時家裡打掃得乾乾淨淨。||
3390|nhân tiện|順便|by the way|副詞|Nhân tiện, anh có số của chị Lan không?|順便問一下，你有阿蘭姊的電話嗎？||因便
3391|cay|辣|spicy|形容詞|Tôi không ăn cay được.|我不能吃辣。||
3392|cổ vũ|鼓舞 / 加油|to cheer; to encourage|動詞|Khán giả cổ vũ đội nhà.|觀眾為主隊加油。||鼓舞
3393|ngắt|摘 / 打斷|to pick; to interrupt|動詞|Xin lỗi đã ngắt lời anh.|抱歉打斷你的話。||
3394|phẩm chất|品德 / 品質|quality; character|名詞|Anh ấy có phẩm chất tốt.|他品格很好。||品質
3395|quy luật|規律|law (pattern)|名詞|Đó là quy luật tự nhiên.|那是自然規律。||規律
3396|tiến trình|進程|process|名詞|Tiến trình đàm phán đang thuận lợi.|談判進程很順利。||進程
3397|ớt|辣椒|chilli|名詞|Cho thêm ớt nhé.|多加點辣椒喔。||
3398|kim ngạch|金額（進出口額）|turnover (trade)|名詞|Kim ngạch xuất khẩu tăng mạnh.|出口額大幅成長。||金額
3399|ký kết|簽訂|to sign (agreement)|動詞|Hai bên đã ký kết hợp đồng.|雙方已簽訂合約。||
3400|nói thẳng|直說|to speak frankly|動詞|Tôi nói thẳng, tôi không đồng ý.|我直說了，我不同意。||
3401|phát sóng|播出|to broadcast|動詞|Chương trình phát sóng lúc tám giờ tối.|節目晚上八點播出。||
3402|sáng kiến|創見 / 倡議|initiative|名詞|Đây là sáng kiến rất hay.|這是很好的點子。||創見
3403|vực|深淵|abyss|名詞|Xe suýt rơi xuống vực.|車子差點掉下山谷。||
3404|ái|愛（漢越）|love (Sino)|名詞|Ông ấy có lòng ái quốc sâu sắc.|他有深厚的愛國心。|多見於 ái quốc、ái mộ|愛
3405|đấng|（尊稱的量詞）|classifier for revered beings|量詞|Cha mẹ là đấng sinh thành.|父母是生養我們的人。||
3406|đặc sản|特產|speciality|名詞|Đặc sản Đà Lạt là dâu tây.|大叻特產是草莓。||特產
3407|bá|伯母 / 姑媽（北部）/ 霸|aunt (father's elder sister, North); hegemon|名詞|Bá tôi sống ở Hải Dương.|我姑媽住在海陽。|bá vai＝勾肩搭背|伯
3408|điều lệ|章程|charter; rules|名詞|Điều lệ công ty quy định rõ quyền lợi.|公司章程明訂權益。||條例
3409|độc quyền|壟斷 / 獨家|monopoly; exclusive|名詞|Đây là sản phẩm phân phối độc quyền.|這是獨家代理的產品。||獨權
3410|bàn phím|鍵盤|keyboard|名詞|Bàn phím máy tính bị hỏng.|電腦鍵盤壞了。||
3411|chênh lệch|差距|difference; gap|名詞|Giá ở hai cửa hàng chênh lệch khá nhiều.|兩家店的價格差很多。||
3412|còi|哨子 / 喇叭|whistle; horn|名詞|Đừng bấm còi liên tục.|別一直按喇叭。||
3413|ngăn ngừa|預防|to prevent|動詞|Rửa tay để ngăn ngừa bệnh.|洗手預防疾病。||
3414|Hạ Long|下龍|Ha Long|名詞|Hạ Long nổi tiếng với hàng nghìn đảo đá.|下龍以上千座石島聞名。||下龍
3415|chất độc|毒物|poison|名詞|Chất độc màu da cam để lại hậu quả nặng nề.|橙劑留下嚴重後遺症。||質毒
3416|giảm thiểu|減少 / 降低|to minimize|動詞|Cần giảm thiểu rác thải nhựa.|需要減少塑膠垃圾。||減少
3417|khía cạnh|層面|aspect|名詞|Hãy xem xét vấn đề ở nhiều khía cạnh.|要從多個層面看問題。||
3418|kèn|喇叭（樂器）|trumpet|名詞|Anh ấy thổi kèn rất hay.|他吹喇叭吹得很好。||
3419|phá sản|破產|bankrupt|動詞|Công ty đó đã phá sản.|那家公司破產了。||破產
3420|đùi|大腿|thigh|名詞|Tôi bị chuột rút ở đùi.|我大腿抽筋。||
3421|cảm động|感動|moved|形容詞|Câu chuyện rất cảm động.|這個故事很感人。||感動
3422|cảnh giác|警覺|vigilant|形容詞|Hãy cảnh giác với kẻ lạ.|對陌生人要提高警覺。||警覺
3423|lưu giữ|保存|to preserve|動詞|Bảo tàng lưu giữ nhiều hiện vật quý.|博物館保存了許多珍貴文物。||留
3424|mỉm|微笑|to smile slightly|動詞|Cô ấy mỉm cười chào tôi.|她微笑跟我打招呼。||
3425|phanh|剎車（北部）|brake|名詞|Phanh xe bị hỏng.|剎車壞了。|南部說 thắng|
3426|trở ngại|障礙|obstacle|名詞|Ngôn ngữ không còn là trở ngại.|語言不再是障礙。||阻礙
3427|tối cao|最高|supreme|形容詞|Toà án nhân dân tối cao ở Hà Nội.|最高人民法院在河內。||最高
3428|địa lý|地理|geography|名詞|Con tôi học giỏi môn địa lý.|我孩子地理很好。||地理
3429|hẻm|巷子（南部）|alley (Southern)|名詞|Nhà tôi ở trong hẻm nhỏ.|我家在小巷裡。|北部說 ngõ|
3430|định nghĩa|定義|definition|名詞|Định nghĩa của từ này là gì?|這個字的定義是什麼？||定義
3431|dung|容（寬恕）/ 容納|to tolerate; to contain|動詞|Xin hãy dung thứ cho tôi.|請原諒我。|nội dung＝內容|容
3432|minh hoạ|插圖 / 說明|illustration|名詞|Sách có nhiều hình minh hoạ.|書裡有很多插圖。||明畫
3433|thập kỷ|十年|decade|名詞|Kinh tế phát triển mạnh trong thập kỷ qua.|過去十年經濟快速發展。||十紀
3434|bước đầu|初步|initial|形容詞|Dự án đã có kết quả bước đầu.|專案已有初步成果。||
3435|rõ rệt|明顯|noticeable|形容詞|Sức khỏe của ông cải thiện rõ rệt.|爺爺的健康明顯改善。||
3436|sút|射門 / 下降|to shoot (ball); to decline|動詞|Cầu thủ sút bóng vào lưới.|球員射門得分。|sút cân＝體重下降|
3437|trung cấp|中級|intermediate|形容詞|Tôi đang học tiếng Việt trung cấp.|我正在學中級越語。||中級
3438|tầng lớp|階層|class (social)|名詞|Tầng lớp trung lưu đang tăng.|中產階級正在增加。||
3439|đặc|濃稠 / 特（漢越）|thick; special (Sino)|形容詞|Sữa đặc rất ngọt.|煉乳很甜。|đặc biệt＝特別|
3440|cắt giảm|削減|to cut back|動詞|Công ty cắt giảm chi phí.|公司削減開支。||
3441|nhân tố|因素|factor|名詞|Con người là nhân tố quan trọng nhất.|人是最重要的因素。||因素
3442|thành quả|成果|result; fruit|名詞|Đây là thành quả của cả đội.|這是全隊的成果。||成果
3443|học hành|讀書 / 學業|studies|名詞|Bố mẹ lo cho việc học hành của con.|父母關心孩子的學業。||
3444|kết cấu|結構|structure|名詞|Kết cấu ngôi nhà rất chắc chắn.|房子結構很堅固。||結構
3445|lùn|矮|short (height)|形容詞|Em trai tôi hơi lùn.|我弟弟有點矮。||
3446|rao|叫賣 / 刊登|to hawk; to advertise|動詞|Bà bán xôi rao từ sáng sớm.|賣糯米飯的阿婆一大早就沿街叫賣。|rao vặt＝分類廣告|
3447|sưng|腫|swollen|形容詞|Chân tôi bị sưng.|我的腳腫了。||
3448|trèo|爬|to climb|動詞|Đừng trèo cây, nguy hiểm lắm!|別爬樹，很危險！||
3449|cà chua|番茄|tomato|名詞|Cho tôi một ký cà chua.|給我一公斤番茄。||
3450|hoài|一直（南部）/ 懷|keep on (Southern)|副詞|Sao anh nói hoài vậy?|你怎麼一直講？|北部說 mãi|懷
3451|lý luận|理論|theory|名詞|Lý luận phải gắn với thực tiễn.|理論要與實務結合。||理論
3452|định kỳ|定期|periodic|形容詞|Bạn nên khám sức khỏe định kỳ.|你應該定期健康檢查。||定期
3453|bản năng|本能|instinct|名詞|Đó là bản năng của người mẹ.|那是母親的本能。||本能
3454|kháng sinh|抗生素|antibiotic|名詞|Thuốc kháng sinh phải có đơn bác sĩ.|抗生素需要醫生處方。||抗生
3455|mong chờ|期盼|to look forward to|動詞|Cả nhà mong chờ ngày đoàn tụ.|全家期盼團聚的日子。||
3456|thừa kế|繼承|to inherit|動詞|Anh ấy thừa kế công ty của bố.|他繼承了父親的公司。||承繼
3457|vận dụng|運用|to apply|動詞|Hãy vận dụng kiến thức vào thực tế.|把知識運用到實際生活。||運用
3458|Nhà Trắng|白宮|the White House|名詞|Tổng thống làm việc ở Nhà Trắng.|總統在白宮辦公。||
3459|khuya|深夜|late at night|形容詞|Khuya rồi, đi ngủ đi.|很晚了，去睡吧。||
3460|khuyết tật|殘疾|disability|名詞|Trường có lối đi cho người khuyết tật.|學校有無障礙通道。||缺疾
3461|minh bạch|透明 / 清楚|transparent|形容詞|Chi phí phải minh bạch.|費用必須透明。||明白
3462|phép thuật|魔法|magic|名詞|Con tôi thích phim phép thuật.|我孩子喜歡魔法電影。||法術
3463|vô nghĩa|沒有意義|meaningless|形容詞|Cãi nhau lúc này thật vô nghĩa.|這時候吵架毫無意義。||無義
3464|đoàn thể|團體|organization|名詞|Các đoàn thể địa phương tham gia hỗ trợ.|地方團體參與協助。||團體
3465|đích thực|真正|genuine|形容詞|Đây là món phở đích thực.|這才是正宗的河粉。||的實
3466|nếm|嚐|to taste|動詞|Nếm thử xem có mặn không.|嚐嚐看會不會鹹。||
3467|ăn trộm|偷|to steal|動詞|Có kẻ ăn trộm xe máy đêm qua.|昨晚有人偷機車。||
3468|nhà bếp|廚房|kitchen|名詞|Nhà bếp nhà hàng rất sạch.|餐廳廚房很乾淨。||
3469|Trường Sa|長沙群島|Spratly Islands|名詞|Quần đảo Trường Sa nằm ở Biển Đông.|長沙群島位於東海。||長沙
3470|khùng|瘋（南部）|crazy (Southern)|形容詞|Mày khùng hả?|你瘋了嗎？|語氣粗魯，熟人之間才用|
3471|cung ứng|供應|to supply|動詞|Công ty cung ứng nguyên liệu cho nhà máy.|公司為工廠供應原料。||供應
3472|công dụng|功用|use; function|名詞|Lá này có công dụng chữa ho.|這種葉子有止咳的功效。||功用
3473|gai|刺|thorn|名詞|Hoa hồng có nhiều gai.|玫瑰有很多刺。||
3474|thú nhận|坦承|to confess|動詞|Anh ấy thú nhận đã sai.|他坦承自己錯了。||
3475|chăm lo|照顧 / 關注|to look after|動詞|Công đoàn chăm lo đời sống công nhân.|工會關照工人的生活。||
3476|dao động|波動 / 動搖|to fluctuate; to waver|動詞|Giá dao động từ một đến hai triệu.|價格在一百萬到兩百萬之間浮動。||搖動
3477|nhôm|鋁|aluminium|名詞|Cửa sổ làm bằng nhôm kính.|窗戶是鋁框玻璃。||
3478|bá tước|伯爵|count; earl|名詞|Truyện kể về một bá tước giàu có.|故事講一位富有的伯爵。||伯爵
3479|chuyển biến|轉變|change|名詞|Tình hình đã có chuyển biến tích cực.|情勢已有正面轉變。||轉變
3480|doanh số|銷售額|sales|名詞|Doanh số tháng này tăng hai mươi phần trăm.|本月銷售額成長兩成。||營數
3481|nhất thiết|一定 / 必須|necessarily|副詞|Không nhất thiết phải đến sớm.|不一定要早到。||一切
3482|vượt trội|超群|outstanding|形容詞|Sản phẩm có chất lượng vượt trội.|產品品質出眾。||
3483|an ủi|安慰|to comfort|動詞|Tôi an ủi bạn khi bạn buồn.|朋友難過時我安慰他。||安慰
3484|cất cánh|起飛|to take off|動詞|Máy bay cất cánh lúc mười giờ.|飛機十點起飛。||
3485|gươm|劍|sword|名詞|Hồ Gươm còn gọi là hồ Hoàn Kiếm.|劍湖也叫還劍湖。||
3486|họ hàng|親戚|relatives|名詞|Tết là dịp thăm họ hàng.|過年是拜訪親戚的時候。||
3487|thống trị|統治|to rule|動詞|Đất nước từng bị thực dân thống trị.|國家曾被殖民統治。||統治
3488|trí nhớ|記憶力|memory|名詞|Bà tôi có trí nhớ rất tốt.|我奶奶記性很好。||
3489|bao vây|包圍|to surround|動詞|Cảnh sát bao vây toà nhà.|警方包圍大樓。||包圍
3490|ni|這（中部方言）/ 尼|this (Central dialect); nun|代名詞|Cái ni là cái chi?|（中部方言）這是什麼？|順化方言：ni＝này，chi＝gì|
3491|cống|下水道 / 涵洞|sewer; culvert|名詞|Cống bị tắc nên đường ngập.|下水道堵塞，路就淹水了。||
3492|gốm|陶瓷|ceramics|名詞|Làng gốm Bát Tràng rất nổi tiếng.|缽場陶瓷村很有名。||
3493|huyết|血（漢越）|blood (Sino)|名詞|Bà tôi bị cao huyết áp.|我奶奶有高血壓。||血
3494|tư liệu|資料|documentation|名詞|Bảo tàng có nhiều tư liệu quý.|博物館有很多珍貴資料。||資料
3495|bồn|槽 / 盆|tank; tub|名詞|Bồn nước trên mái bị rò.|屋頂的水塔漏水。|bồn tắm＝浴缸|盆
3496|khẩn trương|緊急 / 加緊|urgent; hurried|形容詞|Mọi người khẩn trương hoàn thành công việc.|大家加緊完成工作。||緊張
3497|nhận dạng|辨識|to identify|動詞|Camera có chức năng nhận dạng khuôn mặt.|攝影機有臉部辨識功能。||認樣
3498|nổi loạn|叛逆 / 叛亂|to rebel|動詞|Tuổi dậy thì hay nổi loạn.|青春期常常很叛逆。||
3499|hài hoà|和諧|harmonious|形容詞|Màu sắc phối rất hài hoà.|顏色搭配很和諧。||諧和
3500|lẻ|單數 / 零（錢）/ 零售|odd; small change|形容詞|Anh có tiền lẻ không?|你有零錢嗎？|số lẻ＝奇數|
3501|nhật ký|日記|diary|名詞|Tối nào em cũng viết nhật ký.|我每天晚上都寫日記。||日記
3502|nước thải|廢水|wastewater|名詞|Nước thải phải được xử lý trước khi xả ra sông.|廢水必須處理後才能排入河中。||
3503|sắp đặt|安排 / 佈置|to arrange|動詞|Mọi việc đã được sắp đặt sẵn.|一切都已安排好了。||
3504|Bình Định|平定（省）|Binh Dinh|名詞|Bình Định là quê hương của võ cổ truyền.|平定是傳統武術之鄉。||平定
3505|Hiếu|孝順|filial piety|名詞|Anh ấy là người con có hiếu.|他是個孝順的孩子。|hiếu khách＝好客|孝
3506|phu|勞工 / 夫|labourer; husband (Sino)|名詞|Ngày xưa ông tôi làm phu mỏ.|以前我爺爺當礦工。||夫
3507|trọng tài|裁判|referee|名詞|Trọng tài thổi còi kết thúc trận đấu.|裁判吹哨結束比賽。||仲裁
3508|bôi|塗 / 抹|to apply; to smear|動詞|Bôi kem chống nắng trước khi ra ngoài.|出門前擦防曬乳。||
3509|mạn|一帶 / 船舷|region; side of a ship|名詞|Gia đình tôi sống ở mạn ngược.|我家住在上游山區一帶。||
3510|Khánh Hoà|慶和（省）|Khanh Hoa|名詞|Nha Trang thuộc tỉnh Khánh Hoà.|芽莊屬於慶和省。||慶和
3511|nghiệp|業 / 業障|career; karma|名詞|Đó là nghiệp của anh ta.|那是他的業障。|sự nghiệp＝事業|業
3512|đất liền|陸地 / 本土|mainland|名詞|Đảo cách đất liền ba mươi km.|島離本島三十公里。||
3513|gián điệp|間諜|spy|名詞|Phim kể về một điệp viên gián điệp.|電影講述一名間諜。||間諜
3514|hiển nhiên|顯然|obvious|形容詞|Đó là điều hiển nhiên.|那是顯而易見的事。||顯然
3515|ruồi|蒼蠅|fly|名詞|Đậy thức ăn kẻo ruồi bâu.|把食物蓋好，免得蒼蠅叮。||
3516|thất nghiệp|失業|unemployed|形容詞|Anh ấy thất nghiệp ba tháng rồi.|他失業三個月了。||失業
3517|Trương|張（姓）|Truong (surname)|名詞|Thầy Trương dạy chúng tôi tiếng Trung.|張老師教我們中文。||張
3518|khiêm tốn|謙虛|modest|形容詞|Cô ấy rất giỏi nhưng khiêm tốn.|她很厲害卻很謙虛。||謙遜
3519|người máy|機器人|robot|名詞|Nhà máy dùng người máy để lắp ráp.|工廠用機器人組裝。||
3520|nho nhỏ|小小的|smallish|形容詞|Tôi có một món quà nho nhỏ cho bạn.|我有個小禮物要送你。||
3521|sẵn lòng|樂意|willing|形容詞|Tôi sẵn lòng giúp bạn.|我很樂意幫你。||
3522|sờ|摸|to touch|動詞|Đừng sờ vào tranh.|別摸畫。||
3523|thông số|參數 / 規格|parameter; spec|名詞|Xem thông số kỹ thuật của máy.|看看機器的技術規格。||通數
3524|hoãn|延期|to postpone|動詞|Chuyến bay bị hoãn hai tiếng.|班機延誤兩小時。||緩
3525|phàn nàn|抱怨|to complain|動詞|Khách phàn nàn về dịch vụ.|客人抱怨服務。||
3526|thần linh|神靈|deities|名詞|Người xưa tin vào thần linh.|古人相信神靈。||神靈
3527|chữ ký|簽名|signature|名詞|Xin anh cho chữ ký ở đây.|請您在這裡簽名。||
3528|hai|二|two|數詞|Tôi có hai em gái.|我有兩個妹妹。||
3529|sức sống|活力 / 生命力|vitality|名詞|Thành phố tràn đầy sức sống.|城市充滿活力。||
3530|thiện|善|good; kind|形容詞|Bà ấy làm nhiều việc thiện.|她做了很多善事。|từ thiện＝慈善|善
3531|thân hình|身材|figure; physique|名詞|Cô ấy có thân hình cân đối.|她身材勻稱。||身形
3532|thợ săn|獵人|hunter|名詞|Người thợ săn đi vào rừng.|獵人走進森林。||
3533|vô lý|不合理|unreasonable|形容詞|Yêu cầu này thật vô lý.|這要求真不合理。||無理
3534|cõi|境界 / 世界|realm|名詞|Ông đã về cõi vĩnh hằng.|他已長眠。|委婉說法：過世|
3535|dân sự|民事|civil|形容詞|Đây là tranh chấp dân sự.|這是民事糾紛。||民事
3536|toạ lạc|坐落|to be located|動詞|Khách sạn toạ lạc ngay trung tâm.|飯店坐落在市中心。||坐落
3537|đục|混濁 / 鑿子|cloudy; chisel|形容詞|Nước sông đục ngầu.|河水很混濁。||濁
3538|binh|兵|soldier (Sino)|名詞|Ông ấy từng là binh nhì.|他曾是二等兵。|binh lính＝士兵|兵
3539|kinh hoàng|驚恐|horrified|形容詞|Vụ tai nạn thật kinh hoàng.|那場車禍太可怕了。||驚惶
3540|khép|闔上 / 關上|to close (partly)|動詞|Khép cửa lại giùm tôi.|幫我把門帶上。||
3541|lặp lại|重複|to repeat|動詞|Xin hãy lặp lại một lần nữa.|請再重複一次。||
3542|manh mối|線索|clue|名詞|Cảnh sát tìm thấy manh mối mới.|警方找到新線索。||
3543|nguyền|詛咒 / 發誓|to curse; to swear|動詞|Mụ phù thủy nguyền công chúa ngủ trăm năm.|巫婆詛咒公主沉睡百年。||
3544|phong độ|狀態 / 風度|form; bearing|名詞|Cầu thủ này đang có phong độ cao.|這名球員正處於好狀態。||風度
3545|tiếp thu|吸收 / 接受|to absorb; to take in|動詞|Học sinh tiếp thu bài rất nhanh.|學生吸收得很快。||接收
3546|xích|鏈子|chain|名詞|Xe đạp bị tuột xích.|腳踏車掉鏈了。||
3547|gài|扣 / 設（陷阱）|to fasten; to set (a trap)|動詞|Gài cúc áo lại đi.|把扣子扣好。||
3548|trấn|鎮|town; to guard|名詞|Thị trấn nhỏ nằm bên sông.|小鎮位於河邊。|thị trấn＝鎮|鎮
3549|đếch|SKIP
3550|ngon lành|津津有味|delicious; with relish|形容詞|Bé ăn ngon lành hết bát cơm.|寶寶津津有味地吃完一碗飯。||
3551|thư ký|秘書|secretary|名詞|Thư ký sẽ gửi lịch họp.|秘書會寄送會議時間表。||書記
3552|đàng hoàng|體面 / 正派|decent; proper|形容詞|Anh ấy có công việc đàng hoàng.|他有份正當的工作。||堂皇
3553|mũi tên|箭 / 箭頭|arrow|名詞|Đi theo mũi tên chỉ đường.|跟著箭頭走。||
3554|thiên|天 / 篇|heaven (Sino); chapter|名詞|Thiên nhiên ở đây rất hoang sơ.|這裡的大自然很原始。|thiên nhiên＝天然 / 大自然|天
3555|trùng hợp|巧合|coincidence|名詞|Thật là trùng hợp!|真是巧合！||重合
3556|tỷ số|比分|score|名詞|Tỷ số hiện tại là hai một.|目前比分是二比一。||比數
3557|đột biến|突變|mutation; sudden change|名詞|Virus có đột biến mới.|病毒出現新突變。||突變
3558|bướm|蝴蝶|butterfly|名詞|Trong vườn có nhiều bướm.|花園裡有很多蝴蝶。||
3559|hoà bình|和平|peace|名詞|Ai cũng mong hoà bình.|人人都盼望和平。||和平
3560|không quân|空軍|air force|名詞|Anh ấy là phi công không quân.|他是空軍飛行員。||空軍
3561|nôn|吐|to vomit|動詞|Tôi say xe, muốn nôn.|我暈車想吐。|南部說 ói|
3562|phòng ngừa|預防|to prevent|動詞|Tiêm vắc xin để phòng ngừa bệnh.|打疫苗預防疾病。||防禦
3563|tro|灰燼|ash|名詞|Đống lửa chỉ còn tro.|火堆只剩灰燼。||
3564|tích luỹ|累積|to accumulate|動詞|Tôi tích luỹ kinh nghiệm qua nhiều năm.|我多年累積經驗。||積累
3565|cảm kích|感激|grateful|形容詞|Tôi rất cảm kích sự giúp đỡ của anh.|我很感激你的幫忙。||感激
3566|di truyền|遺傳|heredity|名詞|Bệnh này có tính di truyền.|這種病會遺傳。||遺傳
3567|gia súc|牲畜|livestock|名詞|Nông dân nuôi nhiều gia súc.|農民養很多牲畜。||家畜
3568|thiệt mạng|喪命|to be killed|動詞|Hai người thiệt mạng trong vụ tai nạn.|兩人在事故中喪生。||
3569|hào hứng|興致勃勃|enthusiastic|形容詞|Bọn trẻ hào hứng đi dã ngoại.|孩子們興高采烈去郊遊。||豪興
3570|xúc tiến|促進|to promote|動詞|Hội nghị xúc tiến đầu tư diễn ra hôm nay.|投資促進會議今天舉行。||促進
3571|khả thi|可行|feasible|形容詞|Kế hoạch này có khả thi không?|這計畫可行嗎？||可施
3572|thời khắc|時刻|moment|名詞|Đó là thời khắc đáng nhớ.|那是難忘的時刻。||時刻
3573|ưa chuộng|喜愛 / 偏好|to favour|動詞|Sản phẩm này được giới trẻ ưa chuộng.|這產品很受年輕人喜愛。||
3574|bàn bạc|商量|to discuss|動詞|Chúng ta bàn bạc rồi quyết định.|我們商量後再決定。||
3575|hấp thụ|吸收|to absorb|動詞|Cơ thể hấp thụ canxi từ sữa.|身體從牛奶吸收鈣。||吸收
3576|biên bản|會議紀錄 / 筆錄|minutes; report|名詞|Thư ký ghi biên bản cuộc họp.|秘書做會議紀錄。||
3577|đặc thù|特殊|specific; peculiar|形容詞|Mỗi ngành có đặc thù riêng.|每個行業都有其特殊性。||特殊
3578|đặt chân|踏上|to set foot|動詞|Lần đầu tôi đặt chân đến Hà Nội.|我第一次踏上河內。||
3579|Bắc Ninh|北寧（省）|Bac Ninh|名詞|Bắc Ninh nổi tiếng với dân ca quan họ.|北寧以官賀民歌聞名。||北寧
3580|Liên Xô|蘇聯|Soviet Union|名詞|Bố tôi từng du học ở Liên Xô.|我爸曾在蘇聯留學。||聯蘇
3581|phẩm|品|product; grade (Sino)|名詞|Đây là sản phẩm mới của công ty.|這是公司的新產品。|sản phẩm＝產品|品
3582|ghi âm|錄音|to record (audio)|動詞|Cho phép tôi ghi âm buổi phỏng vấn nhé.|允許我錄下這次訪談好嗎？||記音
3583|hỗn loạn|混亂|chaotic|形容詞|Hiện trường rất hỗn loạn.|現場一片混亂。||混亂
3584|nhăn|皺|wrinkled|形容詞|Áo sơ mi bị nhăn.|襯衫皺了。||
3585|sáu|六|six|數詞|Tôi dậy lúc sáu giờ.|我六點起床。||
3586|bỏng|燙傷 / 爆米花|burn; popcorn|名詞|Cẩn thận kẻo bỏng tay.|小心燙到手。|bỏng ngô＝爆米花|
3587|còng|手銬 / 駝背|handcuffs; bent|名詞|Cảnh sát còng tay nghi phạm.|警察把嫌犯上銬。||
3588|thâm|瘀青 / 深|bruised; deep (Sino)|形容詞|Mắt anh bị thâm vì thức khuya.|你熬夜熬出黑眼圈了。||深
3589|tá|打（十二個）|dozen|量詞|Mẹ mua một tá bút chì.|媽媽買了一打鉛筆。||
3590|cổ đại|古代|ancient|形容詞|Bảo tàng trưng bày đồ cổ đại.|博物館展出古代文物。||古代
3591|tần số|頻率|frequency|名詞|Đài phát trên tần số chín mươi chín.|電台在九十九頻道播出。||頻數
3592|xâm phạm|侵犯|to violate|動詞|Không ai được xâm phạm quyền riêng tư.|任何人不得侵犯隱私。||侵犯
3593|đực|雄性 / 公的|male (animal)|形容詞|Con gà đực gáy mỗi sáng.|公雞每天早上啼叫。||
3594|cốt|核心 / 骨架 / 為了|core; frame; in order to|名詞|Cốt truyện phim rất hấp dẫn.|電影劇情很吸引人。|cốt truyện＝劇情|骨
3595|giả sử|假設|suppose|連詞|Giả sử mai trời mưa thì sao?|假設明天下雨怎麼辦？||假使
3596|mở đầu|開頭|to begin; opening|動詞|Bài phát biểu mở đầu bằng lời cảm ơn.|演講以感謝開場。||
3597|mỹ thuật|美術|fine arts|名詞|Con tôi học trường mỹ thuật.|我孩子讀美術學校。||美術
3598|Hồng Kông|香港|Hong Kong|名詞|Tôi quá cảnh ở Hồng Kông.|我在香港轉機。||
3599|đồng tình|同意 / 贊同|to agree|動詞|Tôi hoàn toàn đồng tình với anh.|我完全贊同你。||同情
3600|ướp|醃|to marinate|動詞|Ướp thịt với nước mắm và tỏi.|用魚露和大蒜醃肉。||
3601|khắc nghiệt|嚴酷|harsh|形容詞|Thời tiết miền Trung rất khắc nghiệt.|中部天氣很嚴酷。||
3602|mặn|鹹|salty|形容詞|Canh hơi mặn.|湯有點鹹。||
3603|năm tháng|歲月|years; time|名詞|Năm tháng trôi qua thật nhanh.|歲月過得好快。||
3604|phú|富 / 賦|rich (Sino); ode|形容詞|Ông ấy là một phú ông trong làng.|他是村裡的富翁。|giàu＝富（日常）|富
3605|vòng tròn|圓圈|circle|名詞|Các em ngồi thành vòng tròn.|孩子們圍坐成一圈。||
3606|huấn luyện viên|教練|coach|名詞|Huấn luyện viên rất nghiêm khắc.|教練很嚴格。||訓練員
3607|đăng tải|刊登|to publish|動詞|Bài viết được đăng tải trên báo.|文章刊登在報上。||登載
3608|động mạch|動脈|artery|名詞|Ông bị xơ vữa động mạch.|他有動脈硬化。||動脈
3609|rối|亂 / 糾纏|tangled; confused|形容詞|Tóc em bị rối.|我頭髮打結了。|múa rối nước＝水上木偶戲|
3610|thẩm vấn|審問|to interrogate|動詞|Cảnh sát thẩm vấn nghi phạm.|警方審問嫌犯。||審問
3611|moi|掏 / 挖|to dig out|動詞|Anh ấy moi tiền trong túi ra.|他從口袋掏出錢。||
3612|tám|八|eight|數詞|Lớp học bắt đầu lúc tám giờ.|課八點開始。|南部 tám＝閒聊|
3613|chuyên viên|專員|specialist|名詞|Chị ấy là chuyên viên tư vấn.|她是顧問專員。||專員
3614|thạc sĩ|碩士|master's degree|名詞|Anh ấy có bằng thạc sĩ kinh tế.|他有經濟學碩士學位。||碩士
3615|bưu điện|郵局|post office|名詞|Tôi ra bưu điện gửi thư.|我去郵局寄信。||郵電
3616|cản trở|阻礙|to hinder|動詞|Mưa lớn cản trở giao thông.|大雨阻礙交通。||
3617|hoang|荒 / 揮霍|wild; wasteful|形容詞|Mảnh đất bỏ hoang nhiều năm.|這塊地荒廢多年。||荒
3618|hội chứng|症候群|syndrome|名詞|Anh ấy mắc hội chứng mất ngủ.|他有失眠症。||會症
3619|ngữ|語|language (Sino)|名詞|Ngữ pháp tiếng Việt không khó lắm.|越語文法不太難。|ngữ pháp＝文法|語
3620|Thái Bình|太平（省）|Thai Binh|名詞|Thái Bình là tỉnh trồng lúa lớn.|太平省是產稻大省。||太平
3621|mới lạ|新奇|novel|形容詞|Món ăn này rất mới lạ với tôi.|這道菜對我來說很新奇。||
3622|đan|編織|to knit|動詞|Bà đan khăn len cho cháu.|奶奶為孫子織毛線圍巾。||
3623|nứt|裂開|to crack|動詞|Tường nhà bị nứt.|牆壁裂了。||
3624|quạt|扇子 / 電扇|fan|名詞|Bật quạt lên đi, nóng quá.|開電扇吧，好熱。||
3625|nhai|嚼|to chew|動詞|Nhai kỹ rồi mới nuốt.|細嚼再吞下。||
3626|vuông|方形|square|形容詞|Cái bàn hình vuông.|這張桌子是方的。||
3627|chuyền|傳（球）|to pass|動詞|Chuyền bóng cho tôi!|把球傳給我！||傳
3628|giang hồ|江湖 / 黑道|underworld; wanderer|名詞|Phim kể về thế giới giang hồ.|電影講述江湖世界。||江湖
3629|liệt|癱瘓|paralysed|形容詞|Ông tôi bị liệt nửa người.|我爺爺半身不遂。|liệt kê＝列舉|
3630|ham|貪 / 熱衷|keen on|動詞|Thằng bé ham chơi, lười học.|那孩子貪玩不愛讀書。||
3631|hình dạng|形狀|shape|名詞|Bánh có hình dạng con cá.|餅乾是魚的形狀。||形樣
3632|nhậu|喝酒（聚會）|to drink (with friends)|動詞|Tối nay đi nhậu không?|今晚去喝一杯嗎？||
3633|thương binh|傷兵 / 榮民|wounded soldier|名詞|Ông tôi là thương binh.|我爺爺是傷殘軍人。||傷兵
3634|vô số|無數|countless|形容詞|Bầu trời có vô số vì sao.|天上有無數星星。||無數
3635|quảng trường|廣場|square (plaza)|名詞|Quảng trường Ba Đình rất rộng.|巴亭廣場很大。||廣場
3636|sương|霧 / 露|mist; dew|名詞|Sáng nay Đà Lạt có sương mù.|今天早上大叻起霧。|sương mù＝霧|霜
3637|hoạ|畫 / 禍|painting; disaster (Sino)|名詞|Ông ấy là một hoạ sĩ nổi tiếng.|他是有名的畫家。|tai hoạ＝災禍|畫
3638|kiên trì|堅持|persistent|形容詞|Học ngoại ngữ cần kiên trì.|學外語需要恆心。||堅持
3639|nhân văn|人文|humanities; humane|形容詞|Đây là bộ phim rất nhân văn.|這是一部很有人情味的電影。||人文
3640|phì|噴 / 肥|to spurt; fat (Sino)|動詞|Anh ấy phì cười.|他噗哧一笑。|béo phì＝肥胖|
3641|xấu xí|醜陋|ugly|形容詞|Con vịt xấu xí trở thành thiên nga.|醜小鴨變成了天鵝。||
3642|Cà Mau|金甌|Ca Mau|名詞|Cà Mau là cực Nam của Việt Nam.|金甌是越南最南端。||
3643|nghiền|磨碎 / 上癮|to grind; addicted|動詞|Nghiền tiêu thành bột.|把胡椒磨成粉。||研
3644|kích|刺激 / 激|to stimulate (Sino)|動詞|Đừng kích anh ta nữa.|別再激他了。|kích thước＝尺寸|激
3645|ly hôn|離婚|to divorce|動詞|Hai người đã ly hôn.|兩人已經離婚。||離婚
3646|phóng xạ|輻射|radiation|名詞|Khu vực này bị nhiễm phóng xạ.|這區域受到輻射污染。||放射
3647|qua lại|往來|to go back and forth|動詞|Xe cộ qua lại tấp nập.|車輛來來往往。||
3648|sinh động|生動|vivid|形容詞|Bài giảng rất sinh động.|課程講得很生動。||生動
3649|tỏi|大蒜|garlic|名詞|Phi tỏi cho thơm.|爆香大蒜。||
3650|cồn|酒精 / 沙洲|alcohol; sandbank|名詞|Sát trùng vết thương bằng cồn.|用酒精消毒傷口。||
3651|day|揉 / 轉向|to massage; to turn|動詞|Day huyệt thái dương cho đỡ đau đầu.|揉太陽穴緩解頭痛。||
3652|khoái|喜歡 / 爽|to love; delighted|動詞|Tôi khoái món này lắm.|我超愛這道菜。|口語|快
3653|đối|對|to face; pair (Sino)|動詞|Hai nhà đối diện nhau.|兩棟房子面對面。|câu đối＝對聯|對
3654|ối|哎呀|oh! (surprise)|感嘆詞|Ối, đau quá!|哎呀，好痛！||
3655|chu kỳ|週期|cycle|名詞|Kinh tế có chu kỳ lên xuống.|經濟有起伏週期。||週期
3656|liên hoan|聚餐 / 聯歡|party|名詞|Cuối năm công ty tổ chức liên hoan.|年底公司辦聯歡會。||聯歡
3657|phương hướng|方向|direction|名詞|Tôi bị mất phương hướng.|我迷失方向了。||方向
3658|ranh giới|界線|boundary|名詞|Đây là ranh giới giữa hai tỉnh.|這是兩省的界線。||
3659|hữu nghị|友誼|friendship|名詞|Cửa khẩu Hữu Nghị nằm ở Lạng Sơn.|友誼關口位於諒山。||友誼
3660|tràn ngập|充滿 / 淹沒|to flood; to fill|動詞|Căn phòng tràn ngập ánh nắng.|房間灑滿陽光。||
3661|tuỷ|骨髓|marrow|名詞|Anh ấy hiến tuỷ cứu người.|他捐骨髓救人。||髓
3662|Quảng Bình|廣平（省）|Quang Binh|名詞|Động Phong Nha ở Quảng Bình.|風牙洞在廣平省。||廣平
3663|sơ sinh|新生兒|newborn|形容詞|Trẻ sơ sinh ngủ rất nhiều.|新生兒睡很多。||初生
3664|thoa|塗抹|to rub on|動詞|Thoa dầu lên chỗ đau.|在痛處塗藥油。||
3665|vô ích|無益 / 白費|useless|形容詞|Khóc cũng vô ích thôi.|哭也沒用。||無益
3666|cận|近視 / 近|short-sighted; near (Sino)|形容詞|Em bị cận nên phải đeo kính.|我近視，得戴眼鏡。|cận thị＝近視|近
3667|giúp việc|幫傭|domestic helper|名詞|Nhà tôi thuê người giúp việc.|我家請了幫傭。||
3668|thông cảm|體諒|to sympathize|動詞|Mong anh thông cảm.|請您體諒。||通感
3669|tượng trưng|象徵|to symbolize|動詞|Hoa sen tượng trưng cho sự thanh cao.|蓮花象徵高潔。||象徵
3670|luật lệ|規矩 / 法規|rules|名詞|Mỗi nơi có luật lệ riêng.|各地有各自的規矩。||律例
3671|cải|芥菜 / 改|mustard greens; to change (Sino)|名詞|Mẹ nấu canh cải.|媽媽煮芥菜湯。|cải thiện＝改善|
3672|nhổ|拔 / 吐|to pull out; to spit|動詞|Tôi đi nhổ răng khôn.|我去拔智齒。||
3673|đầu gối|膝蓋|knee|名詞|Tôi bị đau đầu gối.|我膝蓋痛。||
3674|dân chúng|民眾|the public|名詞|Dân chúng tụ tập trước toà nhà.|民眾聚集在大樓前。||民眾
3675|dặn|叮嚀|to remind; to instruct|動詞|Mẹ dặn tôi mặc áo ấm.|媽媽叮嚀我穿暖一點。||
3676|ham muốn|慾望|desire|名詞|Con người có nhiều ham muốn.|人有許多慾望。||
3677|tơ|絲|silk thread|名詞|Con tằm nhả tơ.|蠶吐絲。||絲
3678|đóng băng|結冰 / 凍結|to freeze|動詞|Mặt hồ đóng băng vào mùa đông.|冬天湖面結冰。||
3679|ổ cứng|硬碟|hard drive|名詞|Ổ cứng máy tính bị đầy.|電腦硬碟滿了。||
3680|bất hợp pháp|非法|illegal|形容詞|Buôn bán động vật hoang dã là bất hợp pháp.|買賣野生動物是違法的。||不合法
3681|lốp|輪胎|tyre|名詞|Xe bị thủng lốp.|車子爆胎了。||
3682|nhận diện|辨識|to identify|動詞|Camera nhận diện biển số xe.|攝影機辨識車牌。||認面
3683|bìa|封面 / 邊|cover; edge|名詞|Bìa sách màu xanh.|書的封面是藍色的。||
3684|bản lĩnh|本領 / 魄力|mettle; capability|名詞|Cô ấy là người phụ nữ có bản lĩnh.|她是個有魄力的女性。||本領
3685|cao quý|高貴|noble|形容詞|Nghề giáo là nghề cao quý.|教師是崇高的職業。||高貴
3686|dời|搬移 / 延期|to move; to postpone|動詞|Cuộc họp dời sang thứ sáu.|會議改到星期五。||
3687|mầm|芽|sprout|名詞|Hạt đậu đã nảy mầm.|豆子發芽了。||萌
3688|bánh xe|車輪|wheel|名詞|Bánh xe bị kẹt bùn.|車輪卡在泥巴裡。||
3689|liệt sĩ|烈士|fallen soldier|名詞|Hàng năm chúng tôi viếng nghĩa trang liệt sĩ.|每年我們都去烈士陵園祭拜。||烈士
3690|thân thể|身體|body|名詞|Tập thể dục giúp thân thể khỏe mạnh.|運動讓身體健康。||身體
3691|điều khoản|條款|clause; terms|名詞|Đọc kỹ điều khoản hợp đồng.|仔細閱讀合約條款。||條款
3692|địa|地|earth (Sino)|名詞|Bạn có thích môn địa không?|你喜歡地理課嗎？|địa＝địa lý 簡稱|地
3693|chú rể|新郎|groom|名詞|Chú rể rất đẹp trai.|新郎很帥。||
3694|hình dáng|外形|appearance; shape|名詞|Hình dáng chiếc xe rất thể thao.|這台車外形很運動風。||形樣
3695|kính trọng|敬重|to respect|動詞|Học sinh kính trọng thầy cô.|學生敬重老師。||敬重
3696|tiễn|送行|to see off|動詞|Tôi ra sân bay tiễn bạn.|我去機場送朋友。||餞
3697|chuyển hoá|轉化 / 代謝|to transform; metabolism|動詞|Cơ thể chuyển hoá thức ăn thành năng lượng.|身體把食物轉化為能量。||轉化
3698|nữ sinh|女學生|schoolgirl|名詞|Các nữ sinh mặc áo dài trắng.|女學生穿白色奧黛。||女生
3699|thực đơn|菜單|menu|名詞|Cho tôi xem thực đơn.|請給我看菜單。||食單
3700|xác minh|查證|to verify|動詞|Thông tin cần được xác minh.|資訊需要查證。||確明
3701|ơ|咦|huh? (surprise)|感嘆詞|Ơ, sao anh lại ở đây?|咦，你怎麼在這裡？||
3702|chê|嫌棄 / 批評|to criticize; to look down on|動詞|Đừng chê món mẹ nấu.|別嫌媽媽煮的菜。||
3703|dịu|緩和 / 柔和|soft; to ease|形容詞|Trời đã dịu mát hơn.|天氣涼爽些了。||
3704|hành nghề|執業|to practise (a profession)|動詞|Bác sĩ phải có giấy phép hành nghề.|醫生必須有執業執照。||行藝
3705|khai trương|開幕 / 開張|to open (business)|動詞|Cửa hàng khai trương vào thứ bảy.|店舖星期六開幕。||開張
3706|lẽ ra|本來應該|should have|副詞|Lẽ ra tôi nên đến sớm hơn.|我本該早點到的。||
3707|lột|剝|to peel; to strip|動詞|Lột vỏ tôm trước khi nấu.|煮之前先剝蝦殼。||
3708|mía|甘蔗|sugar cane|名詞|Nước mía rất mát.|甘蔗汁很消暑。||
3709|nguội|涼了 / 冷掉|cold (food)|形容詞|Cơm nguội rồi.|飯涼了。||
3710|tàu ngầm|潛艇|submarine|名詞|Hải quân có tàu ngầm mới.|海軍有新潛艇。||
3711|tín đồ|信徒|believer; fan|名詞|Cô ấy là tín đồ của cà phê.|她是咖啡迷。||信徒
3712|đều đặn|規律 / 均勻|regular|形容詞|Tôi tập thể dục đều đặn mỗi ngày.|我每天規律運動。||
3713|chùm|串|bunch; cluster|量詞|Một chùm nho rất ngọt.|一串葡萄很甜。||
3714|ngắn hạn|短期|short-term|形容詞|Tôi học một khoá ngắn hạn.|我上了一個短期課程。||短限
3715|phán xét|評斷|to judge|動詞|Đừng phán xét người khác.|別評判別人。||
3716|trọn vẹn|完整 / 圓滿|complete|形容詞|Chúc bạn một ngày trọn vẹn.|祝你有圓滿的一天。||
3717|bảo trì|維修保養|maintenance|動詞|Thang máy đang bảo trì.|電梯維修中。||保持
3718|tri|SKIP
3719|lạnh lùng|冷漠|cold; aloof|形容詞|Anh ấy trả lời rất lạnh lùng.|他回答得很冷淡。||
3720|mép|邊緣 / 嘴角|edge; corner of mouth|名詞|Đừng đứng sát mép đường.|別站在路邊太近。||
3721|nghệ|薑黃 / 藝|turmeric; art (Sino)|名詞|Mẹ dùng nghệ để nấu cà ri.|媽媽用薑黃煮咖哩。|nghệ thuật＝藝術|
3722|triển vọng|前景|prospect|名詞|Ngành này có nhiều triển vọng.|這行業前景看好。||展望
3723|trong sạch|清白|clean; pure|形容詞|Môi trường cần được giữ trong sạch.|環境需要保持清潔。||
3724|dại|傻 / 野生 / 狂犬病|foolish; wild; rabid|形容詞|Con chó bị dại.|那隻狗得了狂犬病。|hoa dại＝野花|
3725|eo|腰|waist|名詞|Váy này hơi chật ở eo.|這條裙子腰有點緊。||
3726|nghĩa trang|墓園|cemetery|名詞|Thanh minh cả nhà ra nghĩa trang.|清明全家去墓園。||義莊
3727|hiện hành|現行|current (in force)|形容詞|Theo quy định hiện hành, phải có giấy phép.|依現行規定，必須有許可證。||現行
3728|linh mục|神父|priest|名詞|Linh mục làm lễ ở nhà thờ.|神父在教堂主持彌撒。||靈牧
3729|nghiêm|嚴 / 立正|strict; attention!|形容詞|Bố tôi rất nghiêm.|我爸很嚴格。||嚴
3730|bùa|符|amulet; charm|名詞|Bà đeo bùa bình an cho cháu.|奶奶給孫子戴平安符。||符
3731|cung điện|宮殿|palace|名詞|Cung điện Huế rất cổ kính.|順化宮殿古色古香。||宮殿
3732|hết mình|全力以赴|wholeheartedly|副詞|Cả đội chơi hết mình.|全隊全力以赴。||
3733|tiền lương|薪資|salary|名詞|Tiền lương được trả vào cuối tháng.|薪水月底發放。||錢糧
3734|tranh cử|競選|to run for office|動詞|Ông ấy tranh cử tổng thống.|他競選總統。||爭舉
3735|cầu hôn|求婚|to propose|動詞|Anh ấy cầu hôn cô ấy ở Đà Lạt.|他在大叻向她求婚。||求婚
3736|đúc|鑄造|to cast (metal)|動詞|Tượng được đúc bằng đồng.|雕像是銅鑄的。||
3737|biên tập|編輯|to edit; editor|動詞|Chị ấy biên tập sách cho nhà xuất bản.|她為出版社編書。||編輯
3738|chính đáng|正當|legitimate|形容詞|Đó là yêu cầu chính đáng.|那是正當的要求。||正當
3739|sứ mệnh|使命|mission|名詞|Sứ mệnh của công ty là phục vụ khách hàng.|公司的使命是服務客戶。||使命
3740|xâm lược|侵略|to invade|動詞|Đất nước từng bị ngoại bang xâm lược.|國家曾遭外國侵略。||侵略
3741|trong sáng|純潔 / 清新|pure; innocent|形容詞|Tình yêu tuổi học trò thật trong sáng.|學生時代的愛情很純真。||
3742|tâm linh|心靈 / 靈性|spiritual|形容詞|Chùa là nơi tâm linh.|寺廟是心靈寄託之處。||心靈
3743|côn trùng|昆蟲|insect|名詞|Rừng có nhiều loài côn trùng.|森林有許多昆蟲。||昆蟲
3744|hiệu suất|效率|efficiency|名詞|Máy mới có hiệu suất cao hơn.|新機器效率更高。||效率
3745|luộc|水煮|to boil (food)|動詞|Rau luộc chấm nước mắm.|燙青菜沾魚露。||
3746|thiền|禪 / 冥想|Zen; meditation|名詞|Mỗi sáng tôi ngồi thiền mười phút.|我每天早上打坐十分鐘。||禪
3747|xô|推擠 / 水桶|to push; bucket|動詞|Đừng xô nhau!|不要推擠！||
3748|dắt|牽|to lead by hand|動詞|Mẹ dắt con qua đường.|媽媽牽孩子過馬路。||
3749|thủ phạm|元兇|culprit|名詞|Cảnh sát đã bắt được thủ phạm.|警方已抓到元兇。||首犯
3750|bùng nổ|爆發 / 激增|to explode; boom|動詞|Thương mại điện tử đang bùng nổ.|電子商務正在爆發成長。||
3751|cử nhân|學士|bachelor's degree|名詞|Tôi có bằng cử nhân luật.|我有法律學士學位。||舉人
3752|tai nghe|耳機|headphones|名詞|Đeo tai nghe vào cho đỡ ồn.|戴上耳機比較不吵。||
3753|tái|半生 / 再|rare (meat); re- (Sino)|形容詞|Cho tôi một tô phở tái.|給我一碗生牛肉河粉。|tái chế＝回收再製|再
3754|vướng mắc|疙瘩 / 卡關|obstacle; snag|名詞|Có vướng mắc gì cứ hỏi tôi.|有什麼卡住的儘管問我。||
3755|xe tăng|坦克|tank|名詞|Bảo tàng có xe tăng thời chiến tranh.|博物館有戰爭時期的坦克。||
3756|địa hình|地形|terrain|名詞|Địa hình miền núi rất hiểm trở.|山區地形很險峻。||地形
3757|đồ dùng|用品|utensils; supplies|名詞|Mua đồ dùng học tập cho con.|幫孩子買文具。||
3758|bây|SKIP
3759|keo|膠水 / 小氣|glue; stingy|名詞|Dán bằng keo cho chắc.|用膠水黏牢。|keo kiệt＝小氣|膠
3760|kép|雙 / 雙層|double|形容詞|Phòng có giường kép không?|房間有雙人床嗎？||
3761|luận|論|to discuss (Sino)|動詞|Em đang viết luận văn tốt nghiệp.|我正在寫畢業論文。|luận văn＝論文|論
3762|tưới|澆水|to water|動詞|Nhớ tưới cây mỗi sáng.|記得每天早上澆花。||
3763|biến chứng|併發症|complication|名詞|Bệnh tiểu đường có nhiều biến chứng.|糖尿病有很多併發症。||變症
3764|giỏ|籃子|basket|名詞|Bà xách giỏ đi chợ.|奶奶提著籃子去市場。||
3765|thân mến|親愛的|dear|形容詞|Các bạn thân mến, chào mừng các bạn!|親愛的朋友們，歡迎你們！||
3766|thích nghi|適應|to adapt|動詞|Tôi đã thích nghi với cuộc sống ở đây.|我已適應這裡的生活。||適宜
3767|đô đốc|海軍上將|admiral|名詞|Đô đốc chỉ huy hạm đội.|海軍上將指揮艦隊。||都督
3768|đông nam|東南|southeast|名詞|Việt Nam ở Đông Nam Á.|越南位於東南亞。||東南
3769|hiệp định|協定|agreement (treaty)|名詞|Hai nước ký hiệp định thương mại.|兩國簽訂貿易協定。||協定
3770|đặc tính|特性|characteristic|名詞|Mỗi loại gỗ có đặc tính riêng.|每種木材都有其特性。||特性
3771|gian lận|作弊 / 詐欺|to cheat|動詞|Thí sinh gian lận bị đình chỉ thi.|作弊考生被取消考試資格。||奸吝
3772|gót|腳跟|heel|名詞|Giày cao gót làm đau chân.|高跟鞋讓腳很痛。||
3773|hữu cơ|有機|organic|形容詞|Tôi chỉ mua rau hữu cơ.|我只買有機蔬菜。||有機
3774|mắc kẹt|受困|to be stuck|動詞|Nhiều người mắc kẹt trong thang máy.|很多人受困電梯。||
3775|rạng|破曉 / 發亮|to dawn; bright|動詞|Trời vừa rạng sáng.|天剛破曉。||
3776|siêu âm|超音波|ultrasound|名詞|Chị ấy đi siêu âm thai.|她去照產檢超音波。||超音
3777|lệch|偏 / 歪|crooked; off|形容詞|Bức tranh treo bị lệch.|畫掛歪了。||
3778|bắp|玉米（南部）/ 肌肉|corn (Southern); muscle|名詞|Bắp nướng mỡ hành ngon lắm.|蔥油烤玉米很好吃。|北部說 ngô|
3779|gừng|薑|ginger|名詞|Uống trà gừng cho ấm bụng.|喝薑茶暖胃。||
3780|thuỷ tinh|玻璃|glass|名詞|Cẩn thận, ly thuỷ tinh dễ vỡ.|小心，玻璃杯易碎。||水晶
3781|đầu ra|出路 / 輸出|output; market outlet|名詞|Nông dân lo đầu ra cho nông sản.|農民擔心農產品的銷路。||
3782|cảnh quan|景觀|landscape|名詞|Cảnh quan nơi đây rất đẹp.|這裡景觀很美。||景觀
3783|hay ho|有趣 / 了不起|interesting|形容詞|Có gì hay ho đâu!|有什麼了不起的！|多用於否定或反諷|
3784|huân chương|勳章|medal; order|名詞|Ông được tặng huân chương lao động.|他獲頒勞動勳章。||勳章
3785|hô|喊 / 暴牙|to shout; buck-toothed|動詞|Mọi người hô vang khẩu hiệu.|大家高喊口號。||呼
3786|lâm|陷入 / 林|to fall into; forest (Sino)|動詞|Công ty lâm vào khủng hoảng.|公司陷入危機。|lâm nghiệp＝林業|臨
3787|lưu niệm|紀念|souvenir; keepsake|名詞|Chúng ta chụp ảnh lưu niệm nhé.|我們拍張紀念照吧。||留念
3788|rót|倒（液體）|to pour|動詞|Rót cho tôi ly nước.|幫我倒杯水。||
3789|Thái Nguyên|太原（省）|Thai Nguyen|名詞|Trà Thái Nguyên rất nổi tiếng.|太原茶很有名。||太原
3790|biên|邊 / 編|border; to compile (Sino)|名詞|Thị trấn nằm sát biên giới.|小鎮緊鄰邊境。|biên giới＝邊界|邊
3791|cơ bắp|肌肉|muscle|名詞|Anh ấy tập gym để có cơ bắp.|他上健身房練肌肉。||
3792|giật mình|嚇一跳|startled|動詞|Tiếng sấm làm tôi giật mình.|雷聲讓我嚇一跳。||
3793|xoáy|漩渦 / 旋|whirlpool; to swirl|名詞|Đừng bơi gần chỗ nước xoáy.|別在漩渦附近游泳。||
3794|xào|炒|to stir-fry|動詞|Mì xào bò là món tôi thích.|牛肉炒麵是我喜歡的菜。||
3795|xếp hàng|排隊|to queue|動詞|Vui lòng xếp hàng.|請排隊。||
3796|chĩa|指向 / 對準|to point at|動詞|Đừng chĩa súng vào người khác.|別把槍對著別人。||
3797|máy in|印表機|printer|名詞|Máy in hết mực rồi.|印表機沒墨水了。||
3798|môi giới|仲介|broker|名詞|Tôi thuê nhà qua môi giới.|我透過仲介租房子。||媒介
3799|phấn khởi|振奮|excited|形容詞|Mọi người phấn khởi đón Tết.|大家歡欣迎接新年。||奮起
3800|thanh lịch|優雅|elegant|形容詞|Cô ấy ăn mặc thanh lịch.|她穿著優雅。||
3801|viền|邊 / 滾邊|border; trim|名詞|Áo có viền màu đỏ.|衣服有紅色滾邊。||
3802|Ngọ|午（地支）|Horse (zodiac)|名詞|Năm nay là năm Ngọ.|今年是馬年。||午
3803|chuộc|贖|to redeem|動詞|Anh ấy muốn chuộc lại lỗi lầm.|他想彌補過錯。||贖
3804|gia tộc|家族|clan|名詞|Đây là nhà thờ của gia tộc họ Nguyễn.|這是阮氏家族的祠堂。||家族
3805|lão hoá|老化|ageing|名詞|Kem này chống lão hoá da.|這款乳霜可抗老化。||老化
3806|đau lòng|心痛|heartbroken|形容詞|Nghe tin đó tôi rất đau lòng.|聽到那消息我很心痛。||
3807|Ba Lan|波蘭|Poland|名詞|Bạn tôi đang du học ở Ba Lan.|我朋友在波蘭留學。||
3808|thu xếp|安排|to arrange|動詞|Tôi sẽ thu xếp thời gian để gặp anh.|我會安排時間跟你見面。||
3809|tàn phá|摧毀|to devastate|動詞|Cơn bão tàn phá nhiều nhà cửa.|颱風摧毀許多房屋。||殘破
3810|gọn gàng|整齊|tidy|形容詞|Phòng em lúc nào cũng gọn gàng.|我的房間總是很整齊。||
3811|khoáng sản|礦產|minerals|名詞|Vùng núi này giàu khoáng sản.|這片山區礦產豐富。||礦產
3812|tự vệ|自衛|self-defence|動詞|Cô ấy học võ để tự vệ.|她學武術來自衛。||自衛
3813|đề cử|提名|to nominate|動詞|Bộ phim được đề cử giải Oscar.|這部電影獲奧斯卡提名。||提舉
3814|hỏi thăm|問候|to ask after|動詞|Cho tôi gửi lời hỏi thăm bố mẹ bạn.|代我問候你爸媽。||
3815|khuyến cáo|建議 / 警告|to recommend; warning|動詞|Bác sĩ khuyến cáo không nên thức khuya.|醫生建議不要熬夜。||勸告
3816|tuyển chọn|選拔|to select|動詞|Đội tuyển chọn những cầu thủ giỏi nhất.|代表隊選拔最好的球員。||選
3817|quả thật|確實|truly|副詞|Quả thật món này rất ngon.|這道菜確實很好吃。||
3818|sỏi|小石子 / 結石|pebble; stone|名詞|Ông bị sỏi thận.|他有腎結石。||
3819|bề ngoài|外表|appearance|名詞|Đừng đánh giá người qua bề ngoài.|別以貌取人。||
3820|dinh|府邸|palace; residence|名詞|Dinh Độc Lập ở Sài Gòn.|獨立宮在西貢。||營
3821|dòng họ|宗族|lineage|名詞|Dòng họ tôi có truyền thống hiếu học.|我家族有好學的傳統。||
3822|thuyết|說 / 學說|theory; to lecture|名詞|Đó chỉ là thuyết âm mưu.|那只是陰謀論。|thuyết phục＝說服|說
3823|triệu tập|召集|to convene|動詞|Giám đốc triệu tập cuộc họp khẩn.|總經理召開緊急會議。||召集
3824|đẹp đẽ|美好|beautiful|形容詞|Đó là những kỷ niệm đẹp đẽ.|那是美好的回憶。||
3825|cấy|插秧 / 移植|to transplant (rice)|動詞|Nông dân đang cấy lúa.|農民正在插秧。||
3826|vụn|碎屑|crumbs; fragments|名詞|Bánh mì rơi vụn đầy bàn.|麵包屑掉滿桌。||
3827|mạ|秧苗 / 鍍|rice seedling; to plate|名詞|Ruộng mạ xanh mướt.|秧田綠油油。||
3828|trầm trọng|嚴重|serious|形容詞|Tình trạng ô nhiễm rất trầm trọng.|污染情況很嚴重。||沉重
3829|đền bù|賠償|to compensate|動詞|Công ty đền bù cho người dân.|公司賠償居民。||
3830|hồi hộp|緊張 / 心跳加速|nervous|形容詞|Tôi hồi hộp chờ kết quả thi.|我緊張地等考試結果。||
3831|lường|預料 / 量|to foresee|動詞|Không ai lường trước được chuyện này.|沒人料到會這樣。||量
3832|rác rưởi|垃圾|rubbish|名詞|Dọn hết rác rưởi trong sân.|把院子裡的垃圾清乾淨。||
3833|bất tử|不朽 / 永生|immortal|形容詞|Tên tuổi ông sẽ bất tử.|他的名字將永垂不朽。||不死
3834|muỗi|蚊子|mosquito|名詞|Ở đây nhiều muỗi quá.|這裡蚊子好多。||
3835|thô|粗|coarse; rough|形容詞|Vải này hơi thô.|這布有點粗。||粗
3836|thế lực|勢力|power; influence|名詞|Ông ấy có thế lực lớn.|他勢力很大。||勢力
3837|lộng lẫy|華麗|splendid|形容詞|Cô dâu trông thật lộng lẫy.|新娘看起來好亮麗。||
3838|ngây thơ|天真|naive|形容詞|Trẻ con thật ngây thơ.|小孩真天真。||
3839|thiệp|卡片 / 請帖|card; invitation|名詞|Tôi nhận được thiệp cưới của bạn.|我收到朋友的喜帖。|thiệp mời＝邀請函|帖
3840|thể chất|體質 / 體能|physique|名詞|Học sinh cần rèn luyện thể chất.|學生需要鍛鍊體能。||體質
3841|tình nhân|情人|lover|名詞|Ngày Valentine là ngày lễ tình nhân.|情人節是二月十四日。||情人
3842|óc|腦|brain|名詞|Anh ấy có đầu óc kinh doanh.|他有生意頭腦。||
3843|đa phần|大部分|majority|名詞|Đa phần sinh viên đều đi làm thêm.|大部分學生都打工。||多分
3844|bất hạnh|不幸|unfortunate|形容詞|Cô bé có tuổi thơ bất hạnh.|那女孩有個不幸的童年。||不幸
3845|sáng suốt|明智|wise|形容詞|Đó là quyết định sáng suốt.|那是明智的決定。||
3846|bí|南瓜 / 卡住|pumpkin; stuck|名詞|Mẹ nấu canh bí đỏ.|媽媽煮南瓜湯。|bí mật＝祕密；bí quá＝卡住了|
3847|đại sứ quán|大使館|embassy|名詞|Tôi đến đại sứ quán xin visa.|我去大使館申請簽證。||大使館
3848|ếch|青蛙|frog|名詞|Ếch kêu sau cơn mưa.|雨後青蛙叫。||
3849|bà già|老太太|old woman|名詞|Một bà già bán rau ở đầu ngõ.|巷口有位老太太賣菜。|稱呼人時較不禮貌，宜說 bà cụ|
3850|bấy giờ|那時|at that time|副詞|Bấy giờ tôi mới mười tuổi.|那時我才十歲。||
3851|duyên dáng|迷人 / 有韻味|graceful|形容詞|Cô ấy rất duyên dáng trong tà áo dài.|她穿奧黛很有韻味。||
3852|phân bón|肥料|fertilizer|名詞|Bón phân bón cho cây lúa.|給稻子施肥。||
3853|bàn chân|腳掌|foot|名詞|Bàn chân tôi bị phồng.|我的腳掌起水泡。||
3854|báo thù|報仇|to take revenge|動詞|Phim kể về hành trình báo thù.|電影講述復仇之路。||報讎
3855|chuồn|溜走|to sneak off|動詞|Thằng bé chuồn ra ngoài chơi.|小男孩溜出去玩。||
3856|niệm|念|to recite (prayers)|動詞|Bà ngồi niệm Phật mỗi tối.|奶奶每晚唸佛。||念
3857|toi|白費 / 死（禽畜）|wasted; to die (animals)|形容詞|Mất toi cả buổi sáng.|白白浪費一整個早上。||
3858|phúc|福|blessing|名詞|Chúc bạn nhiều phúc.|祝你多福。|hạnh phúc＝幸福|福
3859|hoa quả|水果（北部）|fruit|名詞|Mẹ mua hoa quả để cúng.|媽媽買水果來拜拜。|南部說 trái cây|花果
3860|liên đoàn|聯盟 / 聯合會|federation|名詞|Liên đoàn bóng đá Việt Nam.|越南足球協會。||聯團
3861|tâm huyết|心血|dedication|名詞|Anh ấy dồn hết tâm huyết vào dự án.|他把全部心血投入專案。||心血
3862|khao khát|渴望|to yearn|動詞|Tôi khao khát được đi du lịch.|我渴望去旅行。||
3863|ưu thế|優勢|advantage|名詞|Đội nhà chiếm ưu thế.|主隊佔上風。||優勢
3864|giản dị|樸素|simple|形容詞|Bác Hồ sống rất giản dị.|胡伯伯生活很樸素。||簡易
3865|nhị|二 / 二胡|second (Sino); two-string fiddle|名詞|Anh ấy kéo đàn nhị rất hay.|他拉二胡拉得很好。|giải nhì＝二獎|二
3866|sanh|生（南部）|to give birth (Southern)|動詞|Chị tôi mới sanh em bé.|我姊剛生寶寶。|北部說 sinh|生
3867|ghi chú|備註|note|名詞|Viết ghi chú bên cạnh.|在旁邊寫備註。||記註
3868|kích động|煽動 / 激動|to incite; agitated|動詞|Đừng kích động người khác.|不要煽動別人。||激動
3869|lệ|淚 / 慣例|tear; custom (Sino)|名詞|Cô ấy rơi lệ khi chia tay.|她分手時落淚。|thông lệ＝慣例|淚
3870|nám|斑 / 燒焦|melasma; scorched|名詞|Da mặt chị bị nám.|她臉上長斑。||
3871|tống|塞 / 趕走|to shove; to kick out|動詞|Anh ta bị tống ra khỏi quán.|他被趕出店外。||
3872|cổ truyền|傳統|traditional|形容詞|Tết cổ truyền là dịp sum họp.|傳統新年是團聚的時刻。||古傳
3873|trục trặc|故障 / 出狀況|glitch|名詞|Máy bị trục trặc.|機器出故障了。||
3874|chủng|種|type; strain|名詞|Đây là chủng virus mới.|這是新的病毒株。||種
3875|khôn|聰明 / 精明|clever|形容詞|Con chó này khôn lắm.|這隻狗很聰明。||
3876|nhọn|尖|sharp; pointed|形容詞|Cẩn thận dao nhọn.|小心尖刀。||
3877|tham mưu|參謀|staff officer; to advise|名詞|Anh ấy làm tham mưu cho giám đốc.|他當總經理的幕僚。||參謀
3878|Bùi|SKIP
3879|chóng mặt|頭暈|dizzy|形容詞|Tôi bị chóng mặt.|我頭暈。||
3880|ghi hình|錄影|to film|動詞|Chương trình đang ghi hình.|節目正在錄影。||
3881|hợp nhất|合併|to merge|動詞|Hai ngân hàng hợp nhất làm một.|兩家銀行合併為一。||合一
3882|mã hoá|加密 / 編碼|to encrypt|動詞|Dữ liệu được mã hoá an toàn.|資料已安全加密。||碼化
3883|mộc|木 / 樸素|wood (Sino); plain|形容詞|Cô ấy thích trang điểm mộc.|她喜歡素顏淡妝。|thợ mộc＝木匠|木
3884|trầm|低沉 / 沉香|deep (voice); agarwood|形容詞|Giọng anh ấy trầm và ấm.|他的聲音低沉溫暖。||沉
3885|trinh sát|偵察|reconnaissance|動詞|Cảnh sát trinh sát khu vực.|警方偵查該區域。||偵察
3886|vòi|水龍頭 / 象鼻|tap; trunk|名詞|Vòi nước bị rò.|水龍頭漏水。||
3887|vội vàng|匆忙|hurried|形容詞|Anh ấy vội vàng ra sân bay.|他匆匆趕往機場。||
3888|chân dung|肖像|portrait|名詞|Hoạ sĩ vẽ chân dung tôi.|畫家幫我畫肖像。||真容
3889|chúa tể|霸主|overlord|名詞|Sư tử là chúa tể rừng xanh.|獅子是森林之王。||主宰
3890|giải toả|疏散 / 排解|to clear; to relieve|動詞|Nghe nhạc giúp giải toả căng thẳng.|聽音樂有助紓壓。||解鎖
3891|tuổi thơ|童年|childhood|名詞|Tôi có tuổi thơ ở quê.|我在鄉下度過童年。||
3892|túi xách|手提包|handbag|名詞|Chị ấy quên túi xách trên taxi.|她把手提包忘在計程車上。||
3893|khởi công|動工|to break ground|動詞|Công trình khởi công tháng trước.|工程上個月動工。||起工
3894|nhuộm|染|to dye|動詞|Tôi muốn nhuộm tóc màu nâu.|我想把頭髮染成棕色。||染
3895|trí thức|知識份子|intellectual|名詞|Ông ấy là một nhà trí thức.|他是位知識份子。||智識
3896|rò rỉ|洩漏|to leak|動詞|Thông tin bị rò rỉ ra ngoài.|消息被洩漏出去。||
3897|đại lộ|大道|boulevard|名詞|Đại lộ Nguyễn Huệ là phố đi bộ.|阮惠大道是行人徒步區。||大路
3898|bề|面 / 方面|side; dimension|名詞|Hồ có bề rộng hai trăm mét.|湖寬兩百公尺。|bề ngoài＝外表|
3899|giáo hoàng|教宗|pope|名詞|Giáo hoàng sống ở Vatican.|教宗住在梵蒂岡。||教皇
3900|ống kính|鏡頭|lens|名詞|Ống kính máy ảnh bị bẩn.|相機鏡頭髒了。||
3901|cơ khí|機械|mechanical engineering|名詞|Anh ấy là kỹ sư cơ khí.|他是機械工程師。||機器
3902|thành đạt|有成就|successful|形容詞|Anh ấy là doanh nhân thành đạt.|他是成功的企業家。||成達
3903|trút|倒出 / 發洩|to pour out; to vent|動詞|Đừng trút giận lên con.|別把氣出在孩子身上。||
3904|âm đạo|SKIP
3905|Quảng Trị|廣治（省）|Quang Tri|名詞|Quảng Trị có nhiều di tích chiến tranh.|廣治有許多戰爭遺跡。||廣治
3906|khiếp|嚇人 / 害怕|dreadful; scared|形容詞|Khiếp, nóng thế!|天啊，好熱！||怯
3907|lớn lao|重大|great|形容詞|Đó là niềm vui lớn lao.|那是莫大的喜悅。||
3908|xoắn|扭 / 捲|to twist|動詞|Tóc cô ấy xoắn tự nhiên.|她的頭髮是自然捲。||
3909|hoạ sĩ|畫家|painter|名詞|Hoạ sĩ vẽ tranh phong cảnh.|畫家畫風景畫。||畫士
3910|lớn tuổi|年長|elderly|形容詞|Hãy nhường ghế cho người lớn tuổi.|請讓座給年長者。||
3911|tộc|族|ethnic group (Sino)|名詞|Việt Nam có năm mươi tư dân tộc.|越南有五十四個民族。|dân tộc＝民族|族
3912|xuất xứ|產地|origin|名詞|Sản phẩm có xuất xứ rõ ràng.|產品來源清楚。||出處
3913|bổ ích|有益|beneficial|形容詞|Chuyến đi rất bổ ích.|這趟旅程很有收穫。||補益
3914|chửi|罵|to scold; to curse|動詞|Đừng chửi bậy.|不要罵髒話。||
3915|gầy|瘦（北部）|thin|形容詞|Dạo này em gầy quá.|最近妳好瘦。|南部說 ốm|
3916|người tình|情人|lover|名詞|Cô ấy là người tình của anh ta.|她是他的情人。||
3917|pháp sư|法師|wizard; master monk|名詞|Pháp sư trong truyện có phép thuật.|故事裡的法師會魔法。||法師
3918|phối|搭配|to coordinate|動詞|Phối áo trắng với quần jeans.|白上衣搭牛仔褲。|phối hợp＝配合|配
3919|tát|打耳光 / 舀水|to slap; to bail|動詞|Cô ấy tát anh ta một cái.|她打了他一巴掌。||
3920|đấu trường|競技場|arena|名詞|Đấu trường La Mã rất nổi tiếng.|羅馬競技場很有名。||鬥場
3921|Hải Dương|海陽（省）|Hai Duong|名詞|Bánh đậu xanh là đặc sản Hải Dương.|綠豆糕是海陽特產。||海陽
3922|cấu tạo|構造|structure|名詞|Cấu tạo của máy rất đơn giản.|機器構造很簡單。||構造
3923|hội trường|禮堂 / 會場|hall|名詞|Hội trường đã kín chỗ.|禮堂已經坐滿。||會場
3924|tín nhiệm|信任|trust|動詞|Nhân viên tín nhiệm giám đốc mới.|員工信任新總經理。||信任
3925|có lý|有道理|reasonable|形容詞|Anh nói cũng có lý.|你說的也有道理。||
3926|lặng lẽ|默默|quietly|副詞|Cô ấy lặng lẽ rời đi.|她默默離開了。||
3927|suy thoái|衰退|recession|名詞|Kinh tế thế giới đang suy thoái.|世界經濟正在衰退。||衰退
3928|trán|額頭|forehead|名詞|Trán em nóng quá, có sốt không?|你額頭好燙，發燒了嗎？||
3929|tư lệnh|司令|commander|名詞|Tư lệnh quân khu đến thăm đơn vị.|軍區司令來視察單位。||司令
3930|tổn thất|損失|loss|名詞|Cơn bão gây tổn thất lớn.|颱風造成重大損失。||損失
3931|ảo giác|幻覺|hallucination|名詞|Tôi tưởng là ảo giác.|我以為是幻覺。||幻覺
3932|Thuỵ Điển|瑞典|Sweden|名詞|Thuỵ Điển ở Bắc Âu.|瑞典位於北歐。||瑞典
3933|háo hức|雀躍 / 期待|eager|形容詞|Các em háo hức chờ Tết.|孩子們滿心期待過年。||
3934|mặt tiền|店面 / 臨街|frontage|名詞|Nhà mặt tiền giá rất cao.|臨街店面房價很高。||
3935|sơ đồ|圖表 / 平面圖|diagram; map|名詞|Xem sơ đồ chỗ ngồi.|看座位圖。||
3936|bắt chước|模仿|to imitate|動詞|Trẻ con hay bắt chước người lớn.|小孩常模仿大人。||
3937|cường độ|強度|intensity|名詞|Cường độ làm việc rất cao.|工作強度很高。||強度
3938|giầy|鞋（舊拼法）|shoe|名詞|Đôi giầy này bao nhiêu tiền?|這雙鞋多少錢？|現代多寫 giày|
3939|nguyện|願|to vow; willing|動詞|Tôi nguyện cố gắng hết sức.|我願盡全力。|tình nguyện＝志願|願
3940|tăng tốc|加速|to accelerate|動詞|Xe tăng tốc trên đường cao tốc.|車子在高速公路上加速。||增速
3941|vô hình|無形|invisible|形容詞|Áp lực vô hình đè nặng lên vai.|無形的壓力壓在肩上。||無形
3942|vật thể|物體|object|名詞|Người ta thấy một vật thể lạ trên trời.|有人看到天空出現不明物體。||物體
3943|xa xôi|遙遠|remote|形容詞|Làng ở vùng xa xôi hẻo lánh.|村莊在偏遠地區。||
3944|am|庵|small temple|名詞|Trên núi có một ngôi am nhỏ.|山上有一座小庵。||庵
3945|chích|打針 / 叮|to inject; to sting|動詞|Bé sợ bị chích.|寶寶怕打針。|南部說 chích＝打針|
3946|giải đáp|解答|to answer|動詞|Thầy giải đáp thắc mắc của học sinh.|老師解答學生的疑問。||解答
3947|nhà ga|車站|station|名詞|Nhà ga Hà Nội ở phố Lê Duẩn.|河內車站在黎筍街。||
3948|ràng buộc|束縛 / 約束|to bind|動詞|Hợp đồng ràng buộc cả hai bên.|合約約束雙方。||
3949|truy nã|通緝|to hunt (a fugitive)|動詞|Hắn đang bị truy nã.|他正被通緝。||追拿
3950|hối tiếc|後悔 / 遺憾|regret|動詞|Tôi không hối tiếc điều gì.|我沒有什麼遺憾。||悔惜
3951|mã số|代碼 / 編號|code number|名詞|Nhập mã số nhân viên.|輸入員工編號。||碼數
3952|neo|錨 / 停泊|anchor|動詞|Tàu neo ở vịnh.|船停泊在海灣。||
3953|tổn hại|損害|to harm|動詞|Hút thuốc tổn hại sức khỏe.|吸菸損害健康。||損害
3954|ứng|預支 / 應|to advance (money); to respond (Sino)|動詞|Tôi xin ứng trước nửa tháng lương.|我想預支半個月薪水。||應
3955|đình chỉ|停止 / 停職|to suspend|動詞|Anh ta bị đình chỉ công tác.|他被停職了。||停止
3956|bi kịch|悲劇|tragedy|名詞|Đó là một bi kịch gia đình.|那是一場家庭悲劇。||悲劇
3957|hoảng sợ|驚慌|panicked|形容詞|Mọi người hoảng sợ chạy ra ngoài.|大家驚慌地跑出去。||慌
3958|quấn|纏 / 包裹|to wrap|動詞|Quấn khăn cho ấm cổ.|圍上圍巾讓脖子暖和。||
3959|vỉa hè|人行道|sidewalk|名詞|Xe máy đậu đầy vỉa hè.|人行道停滿機車。||
3960|gay|緊張 / 棘手|tense; tricky|形容詞|Tình hình gay go lắm.|情況很棘手。||
3961|ly dị|離婚|to divorce|動詞|Bố mẹ cô ấy đã ly dị.|她爸媽已離婚。||離異
3962|thân yêu|親愛|beloved|形容詞|Gửi mẹ thân yêu của con.|給我親愛的媽媽。||
3963|đế chế|帝國|empire|名詞|Đế chế La Mã từng rất hùng mạnh.|羅馬帝國曾經非常強大。||帝制
3964|Hội An|會安|Hoi An|名詞|Phố cổ Hội An rất lãng mạn.|會安古鎮很浪漫。||會安
3965|mìn|地雷|mine (explosive)|名詞|Khu vực này còn bom mìn.|這區域還有未爆彈和地雷。||
3966|nhân cách|人格|personality; character|名詞|Anh ấy là người có nhân cách.|他是個有品格的人。||人格
3967|phân tử|分子|molecule|名詞|Nước có công thức phân tử H2O.|水的分子式是 H2O。||分子
3968|tạng|臟 / 體質|organ; constitution|名詞|Tạng người tôi khó tăng cân.|我是吃不胖的體質。|nội tạng＝內臟|臟
3969|vướng|卡住 / 礙|to get caught|動詞|Áo bị vướng vào cành cây.|衣服被樹枝勾住了。||
3970|vắt|擠 / 搭|to squeeze; to drape|動詞|Vắt chanh vào nước.|把檸檬汁擠進水裡。||
3971|án mạng|命案|murder case|名詞|Đã xảy ra một vụ án mạng.|發生了一起命案。||案命
3972|bóng chày|棒球|baseball|名詞|Đài Loan rất mê bóng chày.|台灣很迷棒球。||
3973|hoan hô|歡呼|to cheer|動詞|Khán giả hoan hô nhiệt liệt.|觀眾熱烈歡呼。||歡呼
3974|mặt nước|水面|water surface|名詞|Lá rơi trên mặt nước.|葉子落在水面上。||
3975|lượn|盤旋 / 閒逛|to glide; to cruise|動詞|Chim lượn trên bầu trời.|鳥在天空盤旋。||
3976|động thái|動態 / 舉動|move; action|名詞|Đây là động thái tích cực.|這是積極的舉動。||動態
3977|tiêu đề|標題|title; headline|名詞|Tiêu đề bài báo rất gây chú ý.|報導標題很吸睛。||標題
3978|võ sĩ|拳擊手 / 武士|boxer; fighter|名詞|Võ sĩ giành huy chương vàng.|選手奪得金牌。||武士
3979|hộ tống|護送|to escort|動詞|Cảnh sát hộ tống đoàn xe.|警察護送車隊。||護送
3980|que|棍 / 籤|stick|名詞|Ăn kem que cho mát.|吃根冰棒消暑。||
3981|Nam Định|南定（省）|Nam Dinh|名詞|Phở bò Nam Định rất nổi tiếng.|南定牛肉河粉很有名。||南定
3982|sức ép|壓力|pressure|名詞|Đội bóng chịu sức ép lớn.|球隊承受很大壓力。||
3983|thất|失 / 七 / 室|lose (Sino); seven (Sino)|動詞|Đừng thất hứa nhé.|別食言喔。|thất bại＝失敗|失
3984|bộc lộ|顯露|to reveal|動詞|Cô ấy ít khi bộc lộ cảm xúc.|她很少表露情緒。||暴露
3985|lụa|絲綢|silk|名詞|Áo dài lụa rất mềm mại.|絲綢奧黛很柔軟。||
3986|sung sướng|幸福 / 快樂|blissful|形容詞|Bà sống sung sướng bên con cháu.|奶奶與子孫幸福生活。||
3987|toàn thân|全身|whole body|名詞|Tôi mỏi toàn thân.|我全身痠痛。||全身
3988|tầm thường|平庸|mediocre|形容詞|Đó không phải là chuyện tầm thường.|那不是一般的事。||尋常
3989|đối lập|對立|opposite|形容詞|Hai quan điểm hoàn toàn đối lập.|兩種觀點完全對立。||對立
3990|lặng|靜|silent; calm|形容詞|Biển lặng sóng.|海面風平浪靜。||
3991|thầy thuốc|醫生|physician|名詞|Thầy thuốc như mẹ hiền.|醫者如慈母。||
3992|bệnh hoạn|病態|sick; morbid|形容詞|Đó là suy nghĩ bệnh hoạn.|那是病態的想法。||病患
3993|củi|柴|firewood|名詞|Ông đi kiếm củi trên núi.|爺爺上山砍柴。||
3994|khác thường|異常|unusual|形容詞|Hôm nay anh ấy im lặng khác thường.|他今天異常安靜。||
3995|lâu đời|悠久|long-standing|形容詞|Đây là làng nghề lâu đời.|這是歷史悠久的工藝村。||
3996|quá tải|超載|overloaded|形容詞|Bệnh viện đang quá tải.|醫院人滿為患。||過載
3997|quăng|丟 / 拋|to throw|動詞|Đừng quăng rác bừa bãi.|不要亂丟垃圾。||
3998|sai sót|差錯|error|名詞|Báo cáo có vài sai sót nhỏ.|報告有幾個小錯誤。||
3999|yếu kém|薄弱 / 差|weak; poor|形容詞|Cơ sở hạ tầng còn yếu kém.|基礎建設仍很薄弱。||
4000|bế|抱（北部）|to carry (a child)|動詞|Mẹ bế em bé đi ngủ.|媽媽抱寶寶去睡覺。|南部說 ẵm；bế mạc＝閉幕|
4001|công cuộc|事業 / 大業|undertaking; cause|名詞|Công cuộc Đổi Mới bắt đầu năm 1986.|革新事業始於 1986 年。||
4002|công văn|公文|official letter|名詞|Công ty đã gửi công văn cho sở.|公司已發公文給廳處。||公文
4003|mùng|初（日期）/ 蚊帳（南部）|first days of month; mosquito net|名詞|Mùng một Tết cả nhà đi chúc Tết.|大年初一全家去拜年。|北部蚊帳說 màn|
4004|ngày tháng|日期 / 日子|date; days|名詞|Ghi rõ ngày tháng năm sinh.|寫清楚出生年月日。||
4005|sơ tán|疏散|to evacuate|動詞|Người dân được sơ tán trước bão.|居民在颱風前被疏散。||疏散
4006|sừng|角（動物）|horn|名詞|Con trâu có đôi sừng dài.|水牛有一對長角。||
4007|yểm trợ|掩護 / 支援|to cover; to support|動詞|Pháo binh yểm trợ bộ binh.|砲兵掩護步兵。||掩助
4008|Phú Yên|富安（省）|Phu Yen|名詞|Phú Yên có Gành Đá Đĩa rất đẹp.|富安省的盤石灘很美。||富安
4009|la hét|大喊大叫|to scream|動詞|Đừng la hét trong bệnh viện.|醫院裡別大吼大叫。||
4010|thầm|暗暗 / 小聲|silently; secretly|副詞|Cô ấy thầm yêu anh ấy.|她暗戀他。|nói thầm＝說悄悄話|
4011|áo dài|奧黛（越南長衫）|ao dai|名詞|Cô ấy mặc áo dài đi dự lễ.|她穿奧黛參加典禮。||
4012|điên khùng|瘋瘋癲癲|crazy|形容詞|Đừng làm chuyện điên khùng.|別做瘋狂的事。||
4013|cơ trưởng|機長|captain (pilot)|名詞|Cơ trưởng thông báo máy bay sắp hạ cánh.|機長宣布飛機即將降落。||機長
4014|nóc|屋頂 / 頂|roof; top|名詞|Con mèo trèo lên nóc nhà.|貓爬上屋頂。||
4015|sen|蓮花|lotus|名詞|Hoa sen là quốc hoa Việt Nam.|蓮花是越南國花。|vòi sen＝蓮蓬頭|蓮
4016|cán|把柄 / 輾|handle; to run over|名詞|Cán dao bị gãy.|刀柄斷了。|bị xe cán＝被車輾|
4017|nhàm chán|乏味|boring|形容詞|Công việc này rất nhàm chán.|這份工作很乏味。||
4018|quyên góp|募捐|to donate; to raise funds|動詞|Học sinh quyên góp sách cho vùng lũ.|學生為水災區募集書本。||捐
4019|bưởi|柚子|pomelo|名詞|Trung thu ăn bưởi.|中秋吃柚子。||
4020|núi lửa|火山|volcano|名詞|Núi lửa đã ngừng hoạt động lâu rồi.|這火山早已停止活動。||
4021|phát điện|發電|to generate power|動詞|Nhà máy phát điện bằng sức gió.|電廠用風力發電。||發電
4022|vóc dáng|身材|figure|名詞|Cô ấy có vóc dáng cao ráo.|她身材高挑。||
4023|con nít|小孩（南部）|kid (Southern)|名詞|Đừng cư xử như con nít.|別像小孩一樣。|北部說 trẻ con|
4024|dưa|瓜 / 醃菜|melon; pickles|名詞|Dưa hấu mùa hè rất ngọt.|夏天的西瓜很甜。|dưa chua＝酸菜|
4025|nhập viện|住院|to be hospitalized|動詞|Ông tôi phải nhập viện.|我爺爺得住院。||入院
4026|sòng|賭場 / 公道|gambling den; fair|名詞|Cảnh sát triệt phá một sòng bạc.|警方破獲一處賭場。|sòng phẳng＝公道、清楚|
4027|ích kỷ|自私|selfish|形容詞|Đừng ích kỷ như vậy.|別那麼自私。||益己
4028|ăn ở|為人處世 / 起居|behaviour; living|動詞|Anh ấy ăn ở rất tử tế.|他為人很厚道。||
4029|đường kính|直徑 / 砂糖|diameter; refined sugar|名詞|Bánh có đường kính hai mươi cm.|蛋糕直徑二十公分。||
4030|làm chứng|作證|to testify|動詞|Tôi có thể làm chứng cho anh ấy.|我可以為他作證。||
4031|lây|傳染|to infect; contagious|動詞|Bệnh cúm lây rất nhanh.|流感傳染得很快。||
4032|siết|擰緊 / 收緊|to tighten|動詞|Siết chặt ốc vít.|把螺絲鎖緊。||
4033|thân mật|親密 / 親切|intimate; friendly|形容詞|Buổi gặp gỡ diễn ra thân mật.|會面氣氛很親切。||親密
4034|tè|尿尿（兒語）|to pee (childish)|動詞|Bé muốn đi tè.|寶寶想尿尿。|兒語|
4035|chiêm ngưỡng|欣賞 / 瞻仰|to admire|動詞|Du khách chiêm ngưỡng vẻ đẹp của vịnh.|遊客欣賞海灣美景。||瞻仰
4036|lâm sàng|臨床|clinical|形容詞|Thuốc đang thử nghiệm lâm sàng.|藥物正在臨床試驗。||臨床
4037|lặp|重複|to repeat|動詞|Đừng lặp lại sai lầm cũ.|別重蹈覆轍。||
4038|rước|迎接 / 接|to welcome; to pick up|動詞|Chiều nay tôi đi rước con.|今天下午我去接孩子。|rước đèn＝提燈遊行|
4039|trơn|滑 / 素面|slippery; plain|形容詞|Đường trơn vì mưa.|下雨路很滑。||
4040|tận mắt|親眼|with one's own eyes|副詞|Tôi tận mắt thấy chuyện đó.|我親眼看到那件事。||
4041|từ chức|辭職|to resign|動詞|Bộ trưởng đã từ chức.|部長已辭職。||辭職
4042|chủ quan|主觀 / 大意|subjective; careless|形容詞|Đừng chủ quan với bệnh nhẹ.|小病也別大意。||主觀
4043|cá mập|鯊魚|shark|名詞|Biển này không có cá mập.|這片海沒有鯊魚。||
4044|tra|查 / 加（調味）|to look up; to add|動詞|Tra từ điển để tìm nghĩa.|查字典找意思。||查
4045|hành hạ|折磨|to torment|動詞|Cơn đau hành hạ ông cả đêm.|疼痛折磨了他整夜。||
4046|phần cứng|硬體|hardware|名詞|Máy tính bị lỗi phần cứng.|電腦硬體故障。||
4047|ức chế|壓抑 / 憋屈|suppressed; frustrated|形容詞|Tôi thấy rất ức chế.|我覺得很憋屈。||抑制
4048|làm giàu|致富|to get rich|動詞|Anh ấy làm giàu từ nông nghiệp.|他靠農業致富。||
4049|ma thuật|魔術 / 巫術|magic|名詞|Đó là trò ma thuật.|那是魔術把戲。||魔術
4050|say mê|迷戀 / 熱愛|passionate|動詞|Anh ấy say mê âm nhạc.|他熱愛音樂。||
4051|tuổi thọ|壽命|lifespan|名詞|Tuổi thọ trung bình đã tăng.|平均壽命已提高。||歲壽
4052|ngưỡng|門檻|threshold|名詞|Anh ấy đã đến ngưỡng bốn mươi tuổi.|他已到四十歲的門檻。||
4053|thư mục|資料夾 / 目錄|folder; directory|名詞|Lưu file vào thư mục mới.|把檔案存到新資料夾。||書目
4054|truy tìm|追查|to track down|動詞|Cảnh sát truy tìm kẻ gây án.|警方追查犯人。||
4055|tử hình|死刑|death penalty|名詞|Hắn bị tuyên án tử hình.|他被判死刑。||死刑
4056|dịch chuyển|移動|to shift|動詞|Đồ đạc bị dịch chuyển khỏi chỗ cũ.|東西被移離原位。||
4057|góp mặt|參與 / 露面|to take part|動詞|Nhiều ngôi sao góp mặt trong phim.|許多明星參與演出這部電影。||
4058|hữu hiệu|有效|effective|形容詞|Đây là cách hữu hiệu nhất.|這是最有效的方法。||有效
4059|kỹ lưỡng|仔細|thorough|形容詞|Hãy đọc hợp đồng kỹ lưỡng.|請仔細閱讀合約。||
4060|lân cận|鄰近|neighbouring|形容詞|Người dân các tỉnh lân cận đến xem hội.|鄰近各省的居民來看廟會。||鄰近
4061|mô phỏng|模擬|to simulate|動詞|Phần mềm mô phỏng lái máy bay.|飛行模擬軟體。||模倣
4062|vòng quanh|環繞|around|介詞|Chúng tôi đi vòng quanh hồ.|我們繞湖走一圈。||
4063|biệt danh|綽號|nickname|名詞|Biệt danh của anh ấy là "Bin".|他的綽號是「Bin」。||別名
4064|mãnh liệt|強烈|intense|形容詞|Cô ấy yêu anh ấy mãnh liệt.|她愛他愛得熱烈。||猛烈
4065|nhân danh|以…名義|in the name of|介詞|Tôi nhân danh công ty cảm ơn quý vị.|我代表公司感謝各位。||人名
4066|năng khiếu|天分|talent|名詞|Bé có năng khiếu âm nhạc.|孩子有音樂天分。||
4067|sưởi|取暖|to warm oneself|動詞|Cả nhà ngồi sưởi bên bếp lửa.|全家圍著爐火取暖。||
4068|thiên tai|天災|natural disaster|名詞|Miền Trung hay gặp thiên tai.|中部常遭天災。||天災
4069|bản nhạc|樂曲|piece of music|名詞|Đây là bản nhạc tôi thích nhất.|這是我最愛的曲子。||
4070|bảo lãnh|擔保|to guarantee; to sponsor|動詞|Bố tôi đứng ra bảo lãnh khoản vay.|我爸出面擔保貸款。||保領
4071|bộ mặt|面貌|face; appearance|名詞|Bộ mặt thành phố đã thay đổi nhiều.|城市面貌改變很多。||
4072|cáo|狐狸 / 告|fox; to report (Sino)|名詞|Con cáo rất tinh ranh.|狐狸很狡猾。|báo cáo＝報告|
4073|cọc|樁 / 押金|stake; deposit|名詞|Thuê nhà phải đặt cọc một tháng.|租房要付一個月押金。|đặt cọc＝付訂金|
4074|khen ngợi|稱讚|to praise|動詞|Giáo viên khen ngợi học sinh.|老師稱讚學生。||
4075|kín đáo|含蓄 / 隱密|discreet|形容詞|Cô ấy ăn mặc kín đáo.|她穿著保守。||
4076|muôn|萬（文雅）|ten thousand (literary)|數詞|Chúc bạn muôn sự như ý.|祝你萬事如意。||萬
4077|ngắn gọn|簡短|brief|形容詞|Hãy trả lời ngắn gọn.|請簡短回答。||
4078|bẩm sinh|天生|innate|形容詞|Bé bị bệnh tim bẩm sinh.|孩子有先天性心臟病。||稟生
4079|dự bị|預備|reserve|形容詞|Anh ấy là cầu thủ dự bị.|他是候補球員。||預備
4080|dự luật|法案|bill (law)|名詞|Quốc hội thảo luận dự luật mới.|國會討論新法案。||預律
4081|thuật ngữ|術語|term|名詞|Đây là thuật ngữ y học.|這是醫學術語。||術語
4082|trào|溢出 / 湧|to overflow|動詞|Nồi canh sôi trào ra ngoài.|湯滾得溢出來了。|trào lưu＝潮流|潮
4083|xứ sở|國度 / 地方|land; country|名詞|Đà Lạt là xứ sở ngàn hoa.|大叻是千花之城。||處所
4084|bất lợi|不利|disadvantageous|形容詞|Thời tiết bất lợi cho trận đấu.|天氣對比賽不利。||不利
4085|khởi|起|to start (Sino)|動詞|Mọi chuyện khởi đầu từ một hiểu lầm.|一切都始於一場誤會。|khởi đầu＝開端|起
4086|nông sản|農產品|farm produce|名詞|Giá nông sản giảm mạnh.|農產品價格大跌。||農產
4087|nổi giận|發火|to get angry|動詞|Ông ấy nổi giận vì bị lừa.|他因被騙而大怒。||
4088|vấn|纏 / 問（漢越）|to wrap; to ask (Sino)|動詞|Bà vấn tóc gọn gàng.|奶奶把頭髮盤得整整齊齊。|vấn đề＝問題|
4089|chủng tộc|種族|race|名詞|Không được phân biệt chủng tộc.|不得有種族歧視。||種族
4090|tang|喪事|mourning|名詞|Gia đình đang để tang ông.|家人正在為爺爺守喪。||喪
4091|tem|郵票 / 標籤|stamp; label|名詞|Dán tem lên phong bì.|在信封上貼郵票。||
4092|tươi sáng|光明|bright|形容詞|Chúc bạn một tương lai tươi sáng.|祝你前途光明。||
4093|đệ tử|弟子|disciple|名詞|Ông ấy có nhiều đệ tử.|他有很多弟子。||弟子
4094|cai trị|統治|to rule|動詞|Thực dân cai trị nước này gần trăm năm.|殖民者統治這國家近百年。||該治
4095|cược|打賭 / 押金|to bet; deposit|動詞|Tôi cược với anh là mai trời mưa.|我跟你打賭明天會下雨。||
4096|kiểm định|檢定|to inspect; to certify|動詞|Xe phải được kiểm định định kỳ.|車子須定期檢驗。||檢定
4097|châm|點火 / 針刺|to light; to prick|動詞|Châm lửa đốt nến.|點火燃蠟燭。|châm cứu＝針灸|針
4098|diễn xuất|演技|acting|名詞|Diễn xuất của cô ấy rất tự nhiên.|她的演技很自然。||演出
4099|giai điệu|旋律|melody|名詞|Giai điệu bài hát rất dễ nhớ.|歌曲旋律很好記。||
4100|hình phạt|刑罰 / 處罰|punishment|名詞|Hình phạt dành cho tội này rất nặng.|這罪的刑罰很重。||刑罰
4101|se|微涼 / 乾澀|chilly; dry|形容詞|Trời se lạnh vào cuối thu.|秋末天氣微涼。||
4102|thế chấp|抵押|mortgage|動詞|Anh ấy thế chấp nhà để vay tiền.|他抵押房子借錢。||
4103|văn chương|文學 / 文筆|literature; writing|名詞|Cô ấy có năng khiếu văn chương.|她有寫作天分。||文章
4104|Cường|SKIP
4105|châu Á|亞洲|Asia|名詞|Việt Nam nằm ở châu Á.|越南位於亞洲。||洲亞
4106|cởi mở|開朗 / 開放|open-minded|形容詞|Anh ấy rất cởi mở và thân thiện.|他很開朗友善。||
4107|gian hàng|攤位|stall; booth|名詞|Công ty có gian hàng ở hội chợ.|公司在展覽會有攤位。||間行
4108|liệt kê|列舉|to list|動詞|Hãy liệt kê những việc cần làm.|請列出要做的事。||列計
4109|nội vụ|內政 / 內務|internal affairs|名詞|Bộ Nội vụ quản lý công chức.|內政部管理公務員。||內務
4110|xứng|相配 / 值得|worthy; matching|形容詞|Hai người rất xứng đôi.|兩人很相配。|xứng đáng＝值得|稱
4111|đơn độc|孤單|alone|形容詞|Ông lão sống đơn độc.|老人獨自生活。||單獨
4112|độc hại|有毒|toxic|形容詞|Khí thải độc hại gây ô nhiễm.|有毒廢氣造成污染。||毒害
4113|Lào Cai|老街（省）|Lao Cai|名詞|Sa Pa thuộc tỉnh Lào Cai.|沙壩屬於老街省。||
4114|giàn|棚架 / 鑽台|trellis; rig|名詞|Giàn hoa giấy trước nhà rất đẹp.|門前的九重葛花架很美。||
4115|giám định|鑑定|to assess|動詞|Chuyên gia giám định bức tranh.|專家鑑定這幅畫。||鑑定
4116|hoả|火|fire (Sino)|名詞|Gọi xe cứu hoả ngay!|快叫消防車！|xe hoả＝火車|火
4117|hỡi|啊（呼喚）|O! (vocative)|感嘆詞|Hỡi các bạn trẻ, hãy cố gắng!|年輕朋友們啊，加油！||
4118|nữ tính|女人味|femininity|名詞|Cô ấy rất nữ tính.|她很有女人味。||女性
4119|vắng mặt|缺席|absent|動詞|Hôm nay có ba học sinh vắng mặt.|今天有三位學生缺席。||
4120|ấm cúng|溫馨|cosy|形容詞|Quán cà phê nhỏ rất ấm cúng.|小咖啡館很溫馨。||
4121|hèn nhát|懦弱|cowardly|形容詞|Bỏ chạy là hèn nhát.|逃跑是懦弱的。||
4122|học kỳ|學期|semester|名詞|Học kỳ này em học năm môn.|這學期我修五門課。||學期
4123|ngất|昏倒|to faint|動詞|Cô ấy ngất vì quá nóng.|她熱到昏倒。||
4124|nhược điểm|缺點|weakness|名詞|Ai cũng có nhược điểm.|人人都有缺點。||弱點
4125|đĩ|SKIP
4126|đạm|蛋白質 / 氮|protein; nitrogen|名詞|Thịt bò giàu chất đạm.|牛肉富含蛋白質。|phân đạm＝氮肥|
4127|nhân đạo|人道|humanitarian|形容詞|Đây là hoạt động nhân đạo.|這是人道活動。||人道
4128|phân chia|分配|to divide|動詞|Phân chia công việc cho hợp lý.|合理分配工作。||分
4129|phương châm|方針|guiding principle|名詞|Phương châm của công ty là "khách hàng là trên hết".|公司方針是「顧客至上」。||方針
4130|sâm|人參|ginseng|名詞|Sâm Ngọc Linh rất quý.|玉靈參很珍貴。||參
4131|thần tượng|偶像|idol|名詞|Ca sĩ đó là thần tượng của em.|那位歌手是我的偶像。||神像
4132|đón tiếp|接待|to receive (guests)|動詞|Cảm ơn anh đã đón tiếp chúng tôi.|謝謝你接待我們。||
4133|ghê tởm|噁心 / 可憎|disgusting|形容詞|Hành vi đó thật ghê tởm.|那行為真令人作嘔。||
4134|hợp chất|化合物|compound|名詞|Nước là hợp chất của hydro và oxy.|水是氫和氧的化合物。||合質
4135|lộn|翻 / 弄錯|to flip; to mix up|動詞|Tôi đi lộn đường rồi.|我走錯路了。|口語 lộn＝nhầm|
4136|tràn đầy|充滿|full of|形容詞|Cô ấy tràn đầy năng lượng.|她充滿活力。||
4137|công phu|功夫 / 費工|elaborate; effort|形容詞|Món này làm rất công phu.|這道菜做得很費工。||工夫
4138|hoan nghênh|歡迎|to welcome|動詞|Chúng tôi hoan nghênh mọi ý kiến.|我們歡迎各種意見。||歡迎
4139|soạn thảo|起草|to draft|動詞|Luật sư soạn thảo hợp đồng.|律師起草合約。||撰草
4140|trong suốt|透明|transparent|形容詞|Nước biển trong suốt.|海水清澈透明。||
4141|tây bắc|西北|northwest|名詞|Tây Bắc có ruộng bậc thang đẹp.|西北有美麗的梯田。||西北
4142|cưa|鋸子 / 鋸|saw; to saw|動詞|Bố cưa cây cho gọn.|爸爸把樹鋸整齊。||鋸
4143|ngoại lệ|例外|exception|名詞|Không có ngoại lệ nào.|沒有任何例外。||外例
4144|độc ác|狠毒|cruel|形容詞|Mụ dì ghẻ độc ác.|狠毒的後母。||毒惡
4145|bê|小牛 / 端|calf; to carry|名詞|Thịt bê rất mềm.|小牛肉很嫩。|bê＝端（北部口語）|
4146|bún|米線|rice vermicelli|名詞|Bún chả là món nổi tiếng ở Hà Nội.|烤肉米線是河內名菜。||
4147|bản sắc|特色 / 本色|identity|名詞|Cần giữ gìn bản sắc dân tộc.|要保存民族特色。||本色
4148|giòn|脆|crispy|形容詞|Bánh mì giòn rụm.|法國麵包酥脆。||
4149|hàng hải|航海|maritime|形容詞|Anh ấy học trường đại học hàng hải.|他讀海事大學。||航海
4150|tất yếu|必然|inevitable|形容詞|Đó là xu hướng tất yếu.|那是必然的趨勢。||必要
4151|đính hôn|訂婚|to get engaged|動詞|Họ đính hôn vào tháng trước.|他們上個月訂婚了。||訂婚
4152|đắng|苦|bitter|形容詞|Cà phê này đắng quá.|這咖啡好苦。||
4153|bảo trọng|保重|take care|動詞|Anh bảo trọng nhé!|你保重喔！||保重
4154|bắt nguồn|起源於|to originate|動詞|Sông Hồng bắt nguồn từ Trung Quốc.|紅河發源於中國。||
4155|giải mã|解碼 / 解開|to decode|動詞|Các nhà khoa học giải mã bí ẩn.|科學家解開謎團。||解碼
4156|khủng long|恐龍|dinosaur|名詞|Con tôi mê khủng long.|我孩子迷恐龍。||恐龍
4157|lôi cuốn|吸引人|captivating|形容詞|Cuốn sách rất lôi cuốn.|這本書很吸引人。||
4158|toa|車廂 / 處方|carriage; prescription|名詞|Tôi ngồi toa số năm.|我坐第五節車廂。|南部 toa thuốc＝處方|
4159|trong lành|清新|fresh (air)|形容詞|Không khí ở quê rất trong lành.|鄉下空氣很清新。||
4160|xen|穿插 / 夾雜|to intersperse|動詞|Đừng xen vào chuyện người khác.|別插手別人的事。||
4161|định cư|定居|to settle|動詞|Gia đình anh ấy định cư ở Mỹ.|他家定居美國。||定居
4162|cọ|刷子 / 擦洗|brush; to scrub|動詞|Cọ sạch nồi trước khi cất.|收起來前把鍋刷乾淨。||
4163|hiện hữu|存在|to exist|動詞|Nguy cơ vẫn còn hiện hữu.|風險依然存在。||現有
4164|kiến trúc sư|建築師|architect|名詞|Kiến trúc sư thiết kế ngôi nhà.|建築師設計房子。||建築師
4165|mâm|托盤 / 一桌菜|tray; meal tray|名詞|Mâm cơm gia đình ngày Tết.|過年的家常飯菜。||
4166|phần trăm|百分之|percent|名詞|Giảm giá hai mươi phần trăm.|打八折。||
4167|dồi dào|充沛|abundant|形容詞|Bà vẫn còn sức khỏe dồi dào.|奶奶依然精神充沛。||
4168|mệnh|命|fate; life (Sino)|名詞|Mỗi người có số mệnh riêng.|每個人都有自己的命運。|số mệnh＝命運|命
4169|sắc đẹp|美貌|beauty|名詞|Cô ấy đoạt giải cuộc thi sắc đẹp.|她在選美比賽獲獎。||
4170|tiến hoá|進化|to evolve|動詞|Loài người tiến hoá qua hàng triệu năm.|人類經過數百萬年進化。||進化
4171|tưởng niệm|紀念 / 悼念|to commemorate|動詞|Lễ tưởng niệm các anh hùng liệt sĩ.|追悼英雄烈士的典禮。||想念
4172|anh chị em|兄弟姊妹|siblings|名詞|Bạn có mấy anh chị em?|你有幾個兄弟姊妹？||
4173|chuyên khoa|專科|specialty|名詞|Bệnh viện chuyên khoa mắt.|眼科專科醫院。||專科
4174|chuẩn mực|規範 / 標準|standard; norm|名詞|Đó là chuẩn mực đạo đức.|那是道德規範。||準
4175|chì|鉛|lead|名詞|Xăng không chì tốt cho môi trường.|無鉛汽油對環境較好。|bút chì＝鉛筆|
4176|câu lạc bộ|俱樂部 / 社團|club|名詞|Em tham gia câu lạc bộ tiếng Anh.|我參加英語社。||俱樂部
4177|liên hiệp|聯合|united; to unite|名詞|Liên Hiệp Quốc có trụ sở ở New York.|聯合國總部在紐約。||聯合
4178|lỗ hổng|漏洞|gap; loophole|名詞|Phần mềm có lỗ hổng bảo mật.|軟體有資安漏洞。||
4179|phong tục|風俗|custom|名詞|Mỗi vùng có phong tục riêng.|每個地區都有自己的風俗。||風俗
4180|thế gian|世間|the world|名詞|Trên thế gian không ai hoàn hảo.|世上沒有人是完美的。||世間
4181|vớ|襪子（南部）/ 抓住|socks (Southern); to grab|名詞|Mang vớ vào cho ấm.|穿上襪子比較暖。|北部說 tất|
4182|búa|鎚子|hammer|名詞|Đưa tôi cái búa.|把鎚子遞給我。||
4183|khuất|隱沒 / 看不見|hidden; out of sight|形容詞|Mặt trời đã khuất sau núi.|太陽已經隱沒在山後。|người đã khuất＝已故者|屈
4184|lôi kéo|拉攏|to lure; to draw in|動詞|Đừng để người xấu lôi kéo.|別被壞人拉攏。||
4185|nghi thức|儀式|ritual|名詞|Nghi thức đón khách rất trang trọng.|迎賓儀式很隆重。||儀式
4186|thuở|時候 / 當年|time; era|名詞|Thuở nhỏ tôi sống ở quê.|小時候我住在鄉下。||
4187|xu thế|趨勢|trend|名詞|Đó là xu thế của thời đại.|那是時代的趨勢。||趨勢
4188|chớp|閃電 / 眨|lightning; to blink|名詞|Trời có chớp, sắp mưa rồi.|有閃電，快下雨了。|chớp mắt＝眨眼|
4189|gầm|吼 / 底下|to roar; underneath|動詞|Sư tử gầm vang.|獅子大聲吼叫。|gầm giường＝床底下|
4190|cảnh cáo|警告|to warn|動詞|Cầu thủ bị trọng tài cảnh cáo.|球員被裁判警告。||警告
4191|quyền năng|權能 / 力量|power|名詞|Thần có quyền năng vô biên.|神有無邊的力量。||權能
4192|thắt lưng|腰帶 / 腰|belt; waist|名詞|Thắt dây an toàn và thắt lưng.|繫好安全帶和腰帶。||
4193|đen tối|黑暗|dark; sinister|形容詞|Đó là thời kỳ đen tối của lịch sử.|那是歷史的黑暗時期。||
4194|chép|抄|to copy|動詞|Chép bài vào vở.|把課文抄到本子上。||
4195|cứu hoả|消防|firefighting|名詞|Xe cứu hoả đến rất nhanh.|消防車來得很快。||救火
4196|giải tán|解散|to disband|動詞|Cuộc họp giải tán lúc năm giờ.|會議五點散會。||解散
4197|hình tượng|形象|image|名詞|Ca sĩ giữ gìn hình tượng.|歌手很注意形象。||形象
4198|ngậm|含|to hold in the mouth|動詞|Ngậm kẹo cho đỡ đau họng.|含顆糖舒緩喉嚨痛。||
4199|bất ổn|不穩定|unstable|形容詞|Tình hình chính trị bất ổn.|政局不穩。||不穩
4200|gieo|播種|to sow|動詞|Nông dân gieo hạt vào mùa xuân.|農民在春天播種。||
4201|liều lĩnh|魯莽|reckless|形容詞|Đó là hành động liều lĩnh.|那是魯莽的舉動。||
4202|vỗ|拍|to pat; to clap|動詞|Mẹ vỗ lưng cho bé ngủ.|媽媽拍拍背哄寶寶睡。||
4203|chuyên mục|專欄|column; section|名詞|Báo có chuyên mục ẩm thực.|報紙有美食專欄。||專目
4204|sống động|生動|lively; vivid|形容詞|Hình ảnh rất sống động.|畫面很生動。||
4205|thống|統 / 痛|unify; pain (Sino)|動詞|Nước nhà thống nhất năm 1975.|國家在 1975 年統一。|thống nhất＝統一|統
4206|tụ|聚|to gather|動詞|Máu tụ dưới da.|血淤積在皮下。|tụ tập＝聚集|聚
4207|góc độ|角度|angle|名詞|Nhìn từ góc độ khác sẽ thấy khác.|從不同角度看就會不一樣。||角度
4208|lương tâm|良心|conscience|名詞|Làm việc có lương tâm.|做事要有良心。||良心
4209|lấp lánh|閃閃發亮|sparkling|形容詞|Sao lấp lánh trên trời.|星星在天上閃爍。||
4210|mòn|磨損|worn|形容詞|Lốp xe bị mòn.|輪胎磨損了。||
4211|mốt|時尚 / 後天|fashion; day after tomorrow|名詞|Áo này đang là mốt.|這件衣服正流行。|ngày mốt＝後天（南部）|
4212|nước ngọt|汽水 / 淡水|soft drink; fresh water|名詞|Cho tôi một chai nước ngọt.|給我一瓶汽水。||
4213|sưu tầm|蒐集|to collect|動詞|Ông tôi sưu tầm tem.|我爺爺集郵。||搜尋
4214|thiết yếu|必需|essential|形容詞|Gạo là mặt hàng thiết yếu.|米是必需品。||切要
4215|thẳm|深|deep|形容詞|Đôi mắt sâu thẳm.|深邃的雙眼。|多見於 sâu thẳm|
4216|chúng tao|我們（粗魯）|we (rude)|代名詞|Chúng tao không sợ mày.|我們不怕你。|語氣粗魯，只用於吵架或很熟的朋友|
4217|dải|帶 / 條|strip; band|名詞|Dải lụa đỏ được cắt khai mạc.|開幕剪下紅綢帶。|dải ngân hà＝銀河|
4218|gìn giữ|維護 / 保存|to preserve|動詞|Hãy gìn giữ truyền thống.|要保存傳統。||
4219|mới đây|最近|recently|副詞|Mới đây công ty ra mắt sản phẩm mới.|最近公司推出新產品。||
4220|vuốt|撫摸 / 爪|to stroke; claw|動詞|Bé vuốt ve con mèo.|寶寶撫摸小貓。||
4221|chảo|平底鍋|frying pan|名詞|Đun nóng chảo rồi cho dầu.|熱鍋後加油。||
4222|diễn tả|描述 / 表達|to describe|動詞|Tôi không biết diễn tả thế nào.|我不知道怎麼描述。||演寫
4223|han|生鏽 / 問|rust; to ask|動詞|Ông hỏi han sức khỏe mọi người.|他關心地問候大家的健康。|hỏi han＝問候|
4224|mạnh dạn|大膽|bold|形容詞|Hãy mạnh dạn nói tiếng Việt.|大膽地說越語吧。||
4225|mẩu|小片段|piece; bit|名詞|Đọc một mẩu tin ngắn.|讀一則短訊息。||
4226|mặc kệ|不管|to ignore; never mind|動詞|Mặc kệ nó, đi thôi.|別管他，走吧。||
4227|nghĩ lại|重新考慮|to reconsider|動詞|Anh nghĩ lại đi.|你再想想吧。||
4228|thìa|湯匙（北部）|spoon (Northern)|名詞|Cho tôi xin cái thìa.|請給我一支湯匙。|南部說 muỗng|
4229|gián đoạn|中斷|to interrupt|動詞|Mạng bị gián đoạn.|網路中斷了。||間斷
4230|hoang mang|惶恐 / 不知所措|bewildered|形容詞|Người dân hoang mang vì tin đồn.|居民因謠言而惶恐。||荒茫
4231|xay|磨 / 打（果汁）|to grind; to blend|動詞|Xay sinh tố bơ cho tôi.|幫我打一杯酪梨冰沙。||
4232|điện năng|電能|electric energy|名詞|Tiết kiệm điện năng.|節約用電。||電能
4233|ảo tưởng|幻想|illusion|名詞|Đừng sống trong ảo tưởng.|別活在幻想裡。||幻想
4234|chăm|勤 / 照顧|diligent; to care for|形容詞|Em ấy học rất chăm.|他讀書很用功。|chăm sóc＝照顧|
4235|lố bịch|荒唐可笑|ridiculous|形容詞|Trông anh ta thật lố bịch.|他看起來真可笑。||
4236|tỷ giá|匯率|exchange rate|名詞|Tỷ giá đô la hôm nay là bao nhiêu?|今天美元匯率多少？||比價
4237|hoảng loạn|驚慌失措|panic|形容詞|Đám đông hoảng loạn bỏ chạy.|人群驚慌逃竄。||慌亂
4238|khuyết điểm|缺點|shortcoming|名詞|Tôi nhận khuyết điểm của mình.|我承認自己的缺點。||缺點
4239|tháo gỡ|解決 / 拆除|to resolve; to dismantle|動詞|Chính phủ tháo gỡ khó khăn cho doanh nghiệp.|政府為企業解決困難。||
4240|đối ngoại|對外 / 外交|foreign affairs|形容詞|Chính sách đối ngoại hoà bình.|和平的外交政策。||對外
4241|hào|角（貨幣）/ 壕溝|ten-cent coin; moat|名詞|Kinh thành Huế có hào nước bao quanh.|順化京城有護城河環繞。||毫
4242|nảy sinh|產生|to arise|動詞|Vấn đề mới nảy sinh.|新問題產生了。||
4243|vĩ mô|宏觀|macro|形容詞|Kinh tế vĩ mô ổn định.|總體經濟穩定。||偉模
4244|bịt|摀 / 堵|to cover; to plug|動詞|Bịt mũi lại vì mùi hôi.|因臭味摀住鼻子。||
4245|ki|SKIP
4246|kết cục|結局|outcome|名詞|Kết cục của phim rất buồn.|電影結局很悲傷。||結局
4247|mộng|夢|dream|名詞|Đêm qua tôi gặp ác mộng.|昨晚我做惡夢。|ác mộng＝惡夢|夢
4248|sóc|松鼠|squirrel|名詞|Con sóc leo lên cây.|松鼠爬上樹。||
4249|tình thương|愛心|love; compassion|名詞|Trẻ em cần tình thương.|孩子需要愛。||
4250|xịt|噴 / 漏氣|to spray|動詞|Xịt thuốc muỗi trong phòng.|在房間噴防蚊液。||
4251|bất cập|不足 / 不合理|inadequate|形容詞|Quy định này còn nhiều bất cập.|這規定還有很多不足之處。||不及
4252|thuỷ lợi|水利|irrigation|名詞|Hệ thống thuỷ lợi giúp tưới ruộng.|水利系統幫助灌溉田地。||水利
4253|vác|扛|to carry on the shoulder|動詞|Anh ấy vác bao gạo lên lầu.|他扛米袋上樓。||
4254|hồi sinh|復甦|to revive|動詞|Làng nghề đang hồi sinh.|工藝村正在復甦。||回生
4255|chủ thể|主體|subject; entity|名詞|Doanh nghiệp là chủ thể của nền kinh tế.|企業是經濟的主體。||主體
4256|cư trú|居住|to reside|動詞|Anh cần đăng ký cư trú.|你需要登記居住地。||居住
4257|dứt|斷 / 停止|to end; to cut off|動詞|Mưa đã dứt.|雨停了。|dứt khoát＝果斷|
4258|giúp ích|有幫助|to be helpful|動詞|Cuốn sách giúp ích cho tôi rất nhiều.|這本書幫了我很多。||
4259|khám nghiệm|檢驗 / 驗屍|to examine (forensic)|動詞|Công an khám nghiệm hiện trường.|公安勘驗現場。||勘驗
4260|khả quan|樂觀 / 看好|promising|形容詞|Kết quả rất khả quan.|結果很樂觀。||可觀
4261|kết án|判刑|to sentence|動詞|Bị cáo bị kết án năm năm tù.|被告被判五年徒刑。||結案
4262|Hạnh|SKIP
4263|dòng chảy|水流|current; flow|名詞|Dòng chảy sông rất mạnh.|河水流得很急。||
4264|mặt khác|另一方面|on the other hand|連詞|Mặt khác, chúng ta cần tiết kiệm.|另一方面，我們需要節省。||
4265|sương mù|霧|fog|名詞|Sương mù dày đặc buổi sáng.|早上濃霧瀰漫。||
4266|Biển Đông|東海（南海）|East Sea (South China Sea)|名詞|Việt Nam có bờ biển dài trên Biển Đông.|越南在東海有很長的海岸線。||
4267|toả|散發|to radiate|動詞|Hoa toả hương thơm ngát.|花散發陣陣香氣。||
4268|cớ|藉口 / 原因|pretext; reason|名詞|Anh ấy lấy cớ bận để không đến.|他藉口很忙沒來。||故
4269|lệ phí|規費|fee|名詞|Lệ phí làm hộ chiếu là bao nhiêu?|辦護照的規費多少？||例費
4270|thâm nhập|深入 / 滲透|to penetrate|動詞|Công ty muốn thâm nhập thị trường Việt Nam.|公司想打入越南市場。||深入
4271|thí điểm|試點|pilot (trial)|名詞|Chương trình đang chạy thí điểm.|計畫正在試辦。||試點
4272|thạch|果凍 / 石|jelly; stone (Sino)|名詞|Thạch dừa mát lạnh.|椰果凍冰涼爽口。||石
4273|tự chủ|自主|autonomous|形容詞|Trường đại học được tự chủ tài chính.|大學可財務自主。||自主
4274|xí nghiệp|企業 / 工廠|enterprise; factory|名詞|Mẹ tôi làm ở xí nghiệp may.|我媽在成衣廠工作。||企業
4275|ngoại ô|郊區|suburb|名詞|Nhà tôi ở ngoại ô thành phố.|我家在市郊。||外塢
4276|ngộ độc|中毒|poisoning|名詞|Nhiều người bị ngộ độc thực phẩm.|很多人食物中毒。||誤毒
4277|năng|常 / 勤|often; diligently|副詞|Con nên năng đến thăm bà.|你應該常去看奶奶。||
4278|phản|反 / 木板床|anti- (Sino); plank bed|動詞|Anh ấy phản đối kế hoạch.|他反對這計畫。|phản đối＝反對|反
4279|sai phạm|違規 / 錯誤|violation|名詞|Thanh tra phát hiện nhiều sai phạm.|稽查發現許多違規。||差犯
4280|tinh trùng|精子|sperm|名詞|Bác sĩ xét nghiệm tinh trùng.|醫生檢驗精子。||精蟲
4281|từ ngữ|詞語|words; vocabulary|名詞|Bài viết dùng từ ngữ đơn giản.|文章用語簡單。||詞語
4282|hạm đội|艦隊|fleet|名詞|Hạm đội tàu chiến đang tập trận.|艦隊正在演習。||艦隊
4283|mất ngủ|失眠|insomnia|動詞|Dạo này tôi hay mất ngủ.|最近我常失眠。||
4284|ngai|寶座|throne|名詞|Nhà vua ngồi trên ngai vàng.|國王坐在龍椅上。||
4285|bóc|剝 / 撕|to peel; to tear open|動詞|Bóc vỏ trứng.|剝蛋殼。||剝
4286|bất lực|無能為力|powerless|形容詞|Tôi cảm thấy bất lực.|我覺得無能為力。||不力
4287|lên ngôi|登基 / 稱霸|to ascend the throne|動詞|Vua lên ngôi năm mười tuổi.|國王十歲登基。||
4288|ngon miệng|好胃口|appetizing|形容詞|Chúc mọi người ăn ngon miệng!|祝大家用餐愉快！||
4289|ngoại tệ|外幣|foreign currency|名詞|Đổi ngoại tệ ở ngân hàng.|在銀行換外幣。||外幣
4290|quan tài|棺材|coffin|名詞|Quan tài được đưa ra nghĩa trang.|棺木被送往墓園。||棺材
4291|vội vã|匆匆|hasty|形容詞|Anh ấy vội vã rời đi.|他匆匆離去。||
4292|bệnh lý|病理 / 病症|pathology|名詞|Ông ấy có bệnh lý tim mạch.|他有心血管疾病。||病理
4293|dai|韌 / 有嚼勁|chewy; tough|形容詞|Thịt này hơi dai.|這肉有點韌。||
4294|hiện đại hoá|現代化|modernization|名詞|Công nghiệp hoá, hiện đại hoá đất nước.|國家工業化、現代化。||現代化
4295|lỗi lầm|過錯|mistake|名詞|Ai cũng có lỗi lầm.|人人都會犯錯。||
4296|nới|放寬 / 鬆開|to loosen|動詞|Nới thắt lưng ra một chút.|把腰帶鬆一點。||
4297|Lâm Đồng|林同（省）|Lam Dong|名詞|Đà Lạt là thủ phủ tỉnh Lâm Đồng.|大叻是林同省會。||林同
4298|bất tỉnh|昏迷|unconscious|形容詞|Nạn nhân bất tỉnh.|受害者昏迷不醒。||不醒
4299|chất vấn|質詢|to question|動詞|Đại biểu chất vấn bộ trưởng.|代表質詢部長。||質問
4300|khích lệ|鼓勵|to encourage|動詞|Thầy khích lệ học sinh cố gắng.|老師鼓勵學生努力。||激勵
4301|sai trái|錯誤 / 不對|wrong|形容詞|Đó là hành vi sai trái.|那是錯誤的行為。||
4302|thứ ba|星期二 / 第三|Tuesday; third|名詞|Thứ ba tuần sau tôi rảnh.|下週二我有空。||
4303|tụ tập|聚集|to gather|動詞|Thanh niên tụ tập ở công viên.|年輕人聚在公園。||聚集
4304|đích thân|親自|personally|副詞|Giám đốc đích thân đến gặp khách.|總經理親自來見客人。||的身
4305|Cửu Long|九龍（湄公河）|Mekong (Cuu Long)|名詞|Đồng bằng sông Cửu Long là vựa lúa.|九龍江平原是米倉。||九龍
4306|sinh dục|生殖|reproductive|形容詞|Bác sĩ khám sức khỏe sinh dục.|醫生做生殖健康檢查。||生育
4307|tổ hợp|組合 / 集團|combination; complex|名詞|Tổ hợp khách sạn và trung tâm thương mại.|飯店與購物中心綜合體。||組合
4308|biên phòng|邊防|border guard|名詞|Bộ đội biên phòng tuần tra.|邊防部隊巡邏。||邊防
4309|dị|怪|weird|形容詞|Trông anh ta dị quá.|他看起來好怪。|kỳ dị＝奇異|異
4310|hướng dẫn viên|導遊|tour guide|名詞|Hướng dẫn viên nói tiếng Trung.|導遊會說中文。||向引員
4311|muỗng|湯匙（南部）|spoon (Southern)|名詞|Cho em xin cái muỗng.|請給我一支湯匙。|北部說 thìa|
4312|nguyên vẹn|完好|intact|形容詞|Hàng đến nơi còn nguyên vẹn.|貨物送到時完好無損。||
4313|thiếu nữ|少女|young woman|名詞|Bức tranh vẽ một thiếu nữ.|這幅畫畫的是一位少女。||少女
4314|tín ngưỡng|信仰|belief; religion|名詞|Người Việt có tín ngưỡng thờ cúng tổ tiên.|越南人有祭祖信仰。||信仰
4315|lăng|陵墓|mausoleum|名詞|Lăng Bác ở quảng trường Ba Đình.|胡志明陵在巴亭廣場。||陵
4316|nghệ nhân|工藝師|artisan|名詞|Nghệ nhân làm gốm rất khéo.|工藝師做陶很靈巧。||藝人
4317|đèo|山口 / 載（後座）|mountain pass; to give a ride|名詞|Đèo Hải Vân rất đẹp.|海雲嶺很美。|đèo ai đó＝用機車載人|
4318|hành quân|行軍|to march|動詞|Bộ đội hành quân qua rừng.|部隊行軍穿越森林。||行軍
4319|kỷ|紀 / 己|era; self (Sino)|名詞|Thế kỷ hai mươi mốt.|二十一世紀。|thế kỷ＝世紀|紀
4320|nước mắm|魚露|fish sauce|名詞|Chấm nước mắm cho đậm đà.|沾魚露更夠味。||
4321|thăng|升|to rise (Sino)|動詞|Anh ấy được thăng chức.|他升職了。|thăng chức＝升職|升
4322|hữu dụng|有用|useful|形容詞|Đây là kỹ năng rất hữu dụng.|這是很有用的技能。||有用
4323|lạ lùng|奇怪|strange|形容詞|Chuyện này thật lạ lùng.|這件事真奇怪。||
4324|sư đoàn|師（軍隊）|division|名詞|Sư đoàn ba trăm hai mươi.|三二〇師。||師團
4325|tuần hoàn|循環|circulation|名詞|Tập thể dục tốt cho tuần hoàn máu.|運動有益血液循環。||循環
4326|đồ vật|東西 / 物品|object|名詞|Đồ vật trong nhà rất gọn gàng.|家裡的東西很整齊。||
4327|Thiên Chúa|天主|God (Catholic)|名詞|Họ theo đạo Thiên Chúa.|他們信天主教。||天主
4328|bình dân|平民 / 平價|popular; affordable|形容詞|Quán ăn bình dân giá rẻ.|平價小吃店很便宜。||平民
4329|dỡ|卸 / 拆|to unload; to dismantle|動詞|Công nhân dỡ hàng xuống xe.|工人從車上卸貨。||
4330|lắp ráp|組裝|to assemble|動詞|Nhà máy lắp ráp ô tô.|汽車組裝廠。||
4331|thai nhi|胎兒|foetus|名詞|Thai nhi phát triển bình thường.|胎兒發育正常。||胎兒
4332|bảo trợ|贊助 / 資助|to sponsor|動詞|Công ty bảo trợ cho học sinh nghèo.|公司資助清寒學生。||保助
4333|lục soát|搜查|to search|動詞|Công an lục soát căn nhà.|公安搜查房子。||
4334|thuần|純 / 馴|pure; tame|形容詞|Đây là giống chó thuần chủng.|這是純種狗。||純
4335|triết lý|哲理|philosophy|名詞|Triết lý sống của ông rất đơn giản.|他的人生哲理很簡單。||哲理
4336|đãi|請客 / 款待|to treat|動詞|Hôm nay tôi đãi mọi người.|今天我請大家。||待
4337|Bến Tre|檳椥（省）|Ben Tre|名詞|Bến Tre là xứ dừa.|檳椥是椰子之鄉。||
4338|bác bỏ|駁回|to reject|動詞|Toà bác bỏ đơn kháng cáo.|法院駁回上訴。||駁
4339|canh chừng|看守|to keep watch|動詞|Anh canh chừng xe giúp tôi.|幫我顧一下車。||
4340|dương vật|SKIP
4341|gay gắt|激烈 / 毒辣|harsh; fierce|形容詞|Nắng gay gắt buổi trưa.|中午太陽毒辣。||
4342|thiết|設 / 鐵（漢越）|to set up (Sino)|動詞|Công ty thiết lập văn phòng mới.|公司設立新辦事處。|thiết kế＝設計|設
4343|đường cao tốc|高速公路|expressway|名詞|Đường cao tốc Hà Nội – Hải Phòng.|河內－海防高速公路。||
4344|đảm nhận|擔任|to take on|動詞|Cô ấy đảm nhận vai trò trưởng nhóm.|她擔任組長。||擔認
4345|cách ly|隔離|to isolate|動詞|Bệnh nhân được cách ly.|病人被隔離。||隔離
4346|liên doanh|合資|joint venture|名詞|Đây là công ty liên doanh Việt – Nhật.|這是越日合資公司。||聯營
4347|vọng|望 / 迴盪|hope (Sino); to echo|動詞|Tiếng chuông vọng xa.|鐘聲遠遠迴盪。|hy vọng＝希望|望
4348|điếc|聾|deaf|形容詞|Ông tôi bị điếc một bên tai.|我爺爺一耳失聰。||
4349|đế quốc|帝國|empire|名詞|Đế quốc Anh từng rất rộng lớn.|大英帝國曾經版圖遼闊。||帝國
4350|địa vị|地位|status|名詞|Ông ấy có địa vị cao trong xã hội.|他社會地位很高。||地位
4351|chi phối|支配 / 左右|to dominate|動詞|Đừng để cảm xúc chi phối.|別讓情緒左右你。||支配
4352|cây số|公里|kilometre|名詞|Từ đây đến chợ khoảng hai cây số.|從這裡到市場約兩公里。||
4353|hận|恨|hatred|名詞|Đừng mang hận trong lòng.|別把恨放在心裡。||恨
4354|thường niên|年度|annual|形容詞|Đại hội cổ đông thường niên.|年度股東大會。||常年
4355|đầu độc|下毒 / 毒害|to poison|動詞|Thông tin sai lệch đầu độc giới trẻ.|錯誤資訊毒害年輕人。||投毒
4356|bao bì|包裝|packaging|名詞|Bao bì sản phẩm rất đẹp.|產品包裝很漂亮。||包皮
4357|dân tộc thiểu số|少數民族|ethnic minority|名詞|Sa Pa có nhiều đồng bào dân tộc thiểu số.|沙壩有許多少數民族同胞。||民族少數
4358|kèo|賭盤 / 椽|betting odds; rafter|名詞|Tối nay có kèo đá bóng không?|今晚有足球賭盤嗎？|口語 kèo＝約、局|
4359|lon|罐|can|名詞|Cho tôi một lon bia.|給我一罐啤酒。||
4360|phong thuỷ|風水|feng shui|名詞|Ông ấy rất tin phong thuỷ.|他很相信風水。||風水
4361|hấp|蒸|to steam|動詞|Cá hấp gừng rất ngon.|薑蒸魚很好吃。||
4362|lẻn|溜|to sneak|動詞|Con mèo lẻn vào bếp.|貓溜進廚房。||
4363|mịn màng|細嫩|smooth|形容詞|Làn da mịn màng.|細嫩的肌膚。||
4364|chiết xuất|萃取|to extract|動詞|Tinh dầu được chiết xuất từ hoa.|精油從花中萃取。||折出
4365|dơi|蝙蝠|bat|名詞|Trong hang có nhiều dơi.|洞裡有很多蝙蝠。||
4366|gom|收集|to gather|動詞|Gom rác lại một chỗ.|把垃圾收集在一起。||
4367|hội tụ|匯聚|to converge|動詞|Nơi đây hội tụ nhiều tài năng.|這裡匯聚許多人才。||會聚
4368|khẩu hiệu|口號|slogan|名詞|Khẩu hiệu treo trên tường.|口號掛在牆上。||口號
4369|mẹo|訣竅|tip; trick|名詞|Có mẹo nào học từ vựng nhanh không?|有快速背單字的訣竅嗎？||
4370|noi|效法|to follow (an example)|動詞|Hãy noi gương các bạn giỏi.|要以優秀的同學為榜樣。|noi gương＝以…為榜樣|
4371|phiến|片 / 板|slab; flake|名詞|Một phiến đá lớn.|一大塊石板。||片
4372|bầm|瘀青|bruised|形容詞|Tay tôi bị bầm tím.|我的手瘀青了。|北部農村方言 bầm＝媽媽|
4373|cứng rắn|強硬|firm; tough|形容詞|Chính phủ có thái độ cứng rắn.|政府態度強硬。||
4374|diều|風箏|kite|名詞|Trẻ em thả diều trên đê.|孩子們在堤上放風箏。||鷂
4375|dẫu|即使|even though|連詞|Dẫu khó khăn, chúng ta không bỏ cuộc.|即使困難，我們也不放棄。||
4376|lang|郎 / 遊蕩|man (Sino); to roam|動詞|Con chó đi lang thang ngoài đường.|小狗在街上遊蕩。|lang thang＝流浪|浪
4377|Long An|隆安（省）|Long An|名詞|Long An giáp với Sài Gòn.|隆安省與西貢接壤。||隆安
4378|Phú Quốc|富國島|Phu Quoc|名詞|Chúng tôi đi nghỉ ở Phú Quốc.|我們去富國島度假。||富國
4379|suýt nữa|差點|almost|副詞|Suýt nữa thì tôi bị ngã.|我差點跌倒。||
4380|thí dụ|例如|example|名詞|Anh cho tôi một thí dụ nhé.|給我舉個例子吧。||譬喻
4381|thước|尺|ruler; metre (old)|名詞|Dùng thước kẻ đường thẳng.|用尺畫直線。||尺
4382|cao điểm|高峰|peak|名詞|Giờ cao điểm đường rất đông.|尖峰時間路上很擠。||高點
4383|nhà trọ|出租屋 / 旅舍|boarding house|名詞|Sinh viên thuê nhà trọ gần trường.|學生在學校附近租房。||
4384|thú y|獸醫|veterinary|名詞|Đưa con mèo đến bác sĩ thú y.|帶貓去看獸醫。||獸醫
4385|vinh hạnh|榮幸|honoured|形容詞|Rất vinh hạnh được gặp ông.|很榮幸見到您。||榮幸
4386|biểu đồ|圖表|chart|名詞|Xem biểu đồ doanh thu.|看營收圖表。||表圖
4387|dẻo|有彈性 / 軟糯|flexible; chewy|形容詞|Xôi rất dẻo.|糯米飯很軟Q。||
4388|vui tính|風趣|good-humoured|形容詞|Thầy giáo rất vui tính.|老師很風趣。||
4389|Thượng Hải|上海|Shanghai|名詞|Thượng Hải là thành phố lớn nhất Trung Quốc.|上海是中國最大的城市。||上海
4390|hối lộ|賄賂|to bribe|動詞|Hối lộ là phạm pháp.|行賄是違法的。||賄賂
4391|phát âm|發音|pronunciation|名詞|Phát âm của bạn rất chuẩn.|你的發音很標準。||發音
4392|đai|帶 / 腰帶|belt|名詞|Anh ấy có đai đen karate.|他是空手道黑帶。||帶
4393|đũa|筷子|chopsticks|名詞|Bạn dùng đũa giỏi quá!|你用筷子好厲害！||
4394|co giật|抽搐|to convulse|動詞|Em bé sốt cao bị co giật.|寶寶高燒抽搐。||
4395|cốt lõi|核心|core|名詞|Đó là vấn đề cốt lõi.|那是核心問題。||
4396|kinh điển|經典|classic|形容詞|Đây là bộ phim kinh điển.|這是經典電影。||經典
4397|nghịch|調皮 / 玩弄|naughty; to play with|形容詞|Thằng bé nghịch lắm.|那小男孩很調皮。||逆
4398|phù|浮腫|swollen|形容詞|Mặt tôi bị phù vì thiếu ngủ.|我睡眠不足臉都浮腫了。||浮
4399|tê|麻|numb|形容詞|Chân tôi bị tê.|我的腳麻了。||
4400|đái|SKIP
4401|chứa đựng|蘊含|to contain|動詞|Bài thơ chứa đựng nhiều cảm xúc.|這首詩蘊含許多情感。||
4402|phong toả|封鎖|to blockade|動詞|Khu vực bị phong toả.|該區域被封鎖。||封鎖
4403|quậy|攪 / 鬧|to stir; to make trouble|動詞|Bọn trẻ quậy cả buổi.|孩子們鬧了一整個下午。||
4404|An Giang|安江（省）|An Giang|名詞|An Giang có núi Sam nổi tiếng.|安江省有著名的山姆山。||安江
4405|nhiệt huyết|熱血 / 熱忱|enthusiasm|名詞|Thanh niên đầy nhiệt huyết.|年輕人熱血沸騰。||熱血
4406|thô lỗ|粗魯|rude|形容詞|Anh ta nói chuyện rất thô lỗ.|他說話很粗魯。||粗魯
4407|tình nghi|嫌疑|to suspect|動詞|Người bị tình nghi đã bị bắt.|嫌疑人已被捕。||情疑
4408|tự trọng|自尊|self-respect|名詞|Anh ấy là người có lòng tự trọng.|他是個有自尊心的人。||自重
4409|chủ đạo|主導|leading; dominant|形容詞|Màu chủ đạo của logo là xanh.|標誌的主色是藍色。||主導
4410|copy|複製|to copy|動詞|Copy file này sang máy khác.|把這檔案複製到另一台電腦。|正式說 sao chép|
4411|khát vọng|渴望 / 抱負|aspiration|名詞|Tuổi trẻ có nhiều khát vọng.|年輕人有許多抱負。||渴望
4412|linh kiện|零件|component|名詞|Cửa hàng bán linh kiện điện tử.|這家店賣電子零件。||零件
4413|đánh bắt|捕撈|to catch (fish)|動詞|Ngư dân đánh bắt cá xa bờ.|漁民在遠海捕魚。||
4414|cổ xưa|古老|ancient|形容詞|Ngôi chùa cổ xưa nghìn năm.|千年古寺。||
4415|gáy|啼 / 後頸|to crow; nape|動詞|Gà gáy lúc năm giờ sáng.|雞在清晨五點啼叫。||
4416|phiền phức|麻煩|troublesome|形容詞|Thủ tục rất phiền phức.|手續很麻煩。||煩
4417|tụt|下降 / 滑落|to drop; to slip|動詞|Điểm của em bị tụt.|我的成績下滑了。||
4418|an tâm|安心|reassured|形容詞|Anh cứ an tâm.|你儘管放心。||安心
4419|buồm|帆|sail|名詞|Thuyền buồm trên vịnh.|海灣上的帆船。||
4420|châu Phi|非洲|Africa|名詞|Anh ấy từng làm việc ở châu Phi.|他曾在非洲工作。||洲非
4421|há|難道（文言）/ 張開|is it not? (literary); to open|動詞|Bé há miệng ra cho bác sĩ khám.|寶寶張開嘴讓醫生檢查。||
4422|hợp lệ|合規 / 有效|valid|形容詞|Hộ chiếu của anh không hợp lệ.|你的護照無效。||合例
4423|pháo đài|堡壘|fortress|名詞|Pháo đài cổ trên đồi.|山丘上的古堡壘。||砲臺
4424|trì hoãn|拖延|to delay|動詞|Đừng trì hoãn công việc.|工作不要拖延。||遲緩
4425|tàn bạo|殘暴|brutal|形容詞|Đó là hành động tàn bạo.|那是殘暴的行為。||殘暴
4426|chen|擠|to squeeze in|動詞|Đừng chen hàng!|不要插隊！||
4427|hôn mê|昏迷|coma|名詞|Bệnh nhân rơi vào hôn mê.|病人陷入昏迷。||昏迷
4428|thanh bình|太平 / 寧靜|peaceful|形容詞|Làng quê thanh bình.|寧靜的鄉村。||清平
4429|đôi|雙 / 對|pair|量詞|Tôi mua một đôi giày.|我買了一雙鞋。||
4430|Liêm|SKIP
4431|kiệt sức|精疲力盡|exhausted|形容詞|Sau trận đấu, cả đội kiệt sức.|賽後全隊筋疲力盡。||竭力
4432|vùi|埋|to bury|動詞|Ông vùi khoai vào tro bếp.|爺爺把番薯埋在灶灰裡。||
4433|ưu tú|優秀|outstanding|形容詞|Cô ấy là học sinh ưu tú.|她是優秀學生。||優秀
4434|biên soạn|編纂|to compile|動詞|Giáo sư biên soạn từ điển.|教授編纂字典。||編纂
4435|cờ bạc|賭博|gambling|名詞|Cờ bạc là bác thằng bần.|賭博是貧窮的伯父。|越南俗語：賭博通往貧窮|
4436|khát khao|渴望|to long for|動詞|Em khát khao được đi học.|我渴望能上學。||
4437|phước|福（南部）|blessing (Southern)|名詞|Gặp được anh là phước của tôi.|遇見你是我的福氣。|北部常說 phúc|福
4438|Bình Thuận|平順（省）|Binh Thuan|名詞|Mũi Né thuộc tỉnh Bình Thuận.|美奈屬平順省。||平順
4439|bảo dưỡng|保養|to maintain|動詞|Xe cần bảo dưỡng định kỳ.|車子需要定期保養。||保養
4440|bực|煩 / 不爽|annoyed|形容詞|Tôi bực vì bị trễ xe.|我錯過車很不爽。||
4441|hấp thu|吸收|to absorb|動詞|Rễ cây hấp thu nước.|樹根吸收水分。||吸收
4442|thành uỷ|市委|city party committee|名詞|Bí thư thành uỷ phát biểu.|市委書記發言。||城委
4443|đáp án|答案|answer key|名詞|Đáp án đúng là câu B.|正確答案是 B。||答案
4444|đường lối|路線（方針）|policy line|名詞|Đường lối đối ngoại của nhà nước.|國家的外交路線。||
4445|binh lính|士兵|soldiers|名詞|Binh lính đứng gác ở cổng.|士兵在門口站崗。||兵
4446|bèn|於是 / 便|then; thereupon|副詞|Thấy trời mưa, tôi bèn ở nhà.|看到下雨，我便待在家。||
4447|dự tính|預計|to plan; to estimate|動詞|Tôi dự tính đi Đà Nẵng vào tháng sáu.|我預計六月去峴港。||預計
4448|khổ sở|痛苦 / 辛苦|miserable|形容詞|Cuộc sống của họ rất khổ sở.|他們生活很困苦。||苦楚
4449|lục địa|大陸|continent|名詞|Châu Á là lục địa lớn nhất.|亞洲是最大的洲。||陸地
4450|phong cảnh|風景|scenery|名詞|Phong cảnh Sa Pa thật đẹp.|沙壩風景真美。||風景
4451|rang|炒（乾炒）|to roast; to dry-fry|動詞|Mẹ rang lạc cho cả nhà.|媽媽炒花生給全家吃。||
4452|tinh dầu|精油|essential oil|名詞|Tinh dầu sả đuổi muỗi.|香茅精油可驅蚊。||精油
4453|chẳng lẽ|難道|surely not|副詞|Chẳng lẽ anh quên rồi sao?|難道你忘了嗎？||
4454|khẽ|輕輕|softly|副詞|Cô ấy khẽ mở cửa.|她輕輕打開門。||
4455|quá đáng|過分|excessive|形容詞|Anh nói vậy là quá đáng.|你這樣說太過分了。||過當
4456|rán|煎 / 炸（北部）|to fry (Northern)|動詞|Mẹ rán trứng cho bữa sáng.|媽媽煎蛋當早餐。|南部說 chiên|
4457|thiên văn|天文|astronomy|名詞|Con tôi thích thiên văn học.|我孩子喜歡天文學。||天文
4458|thịnh vượng|興旺|prosperous|形容詞|Chúc năm mới thịnh vượng.|祝新年興旺。||盛旺
4459|ca ngợi|歌頌 / 讚揚|to praise|動詞|Bài hát ca ngợi quê hương.|這首歌讚頌家鄉。||歌
4460|chủ chốt|主要 / 骨幹|key|形容詞|Anh ấy là nhân viên chủ chốt.|他是核心員工。||
4461|cóc|蟾蜍|toad|名詞|Con cóc nhảy ra từ bụi cây.|蟾蜍從草叢跳出來。|quả cóc＝太平洋榅桲（水果）|
4462|cắp|偷 / 夾|to steal; to tuck|動詞|Kẻ cắp lấy ví của tôi.|小偷偷了我的皮夾。||
4463|ngộ|可愛 / 怪（南部）|cute; odd (Southern)|形容詞|Con bé trông ngộ quá.|這小女孩好可愛。||
4464|phân bố|分佈|distribution|動詞|Dân cư phân bố không đều.|人口分佈不均。||分佈
4465|từ điển|字典|dictionary|名詞|Tra từ điển nếu không hiểu.|不懂就查字典。||詞典
4466|vương miện|王冠|crown|名詞|Hoa hậu đội vương miện.|選美皇后戴上后冠。||王冕
4467|châu Âu|歐洲|Europe|名詞|Tôi muốn du lịch châu Âu.|我想去歐洲旅行。||洲歐
4468|chịu khó|肯吃苦 / 勤奮|hard-working|形容詞|Cô ấy rất chịu khó.|她很肯吃苦。||
4469|phở|河粉|pho|名詞|Sáng nay tôi ăn phở bò.|今天早上我吃牛肉河粉。||
4470|tán tỉnh|搭訕 / 追求|to flirt|動詞|Anh ta tán tỉnh cô ấy.|他在追求她。||
4471|cao bồi|牛仔 / 小混混|cowboy; hooligan|名詞|Anh ấy đội mũ cao bồi.|他戴牛仔帽。||
4472|giai cấp|階級|social class|名詞|Xã hội cũ phân chia giai cấp.|舊社會劃分階級。||階級
4473|ngả|岔路 / 傾斜|direction; to lean|動詞|Ngả lưng nghỉ một lát.|躺下休息一下。|ngã ba＝三岔路口|
4474|quanh năm|一年到頭|all year round|副詞|Ở đây quanh năm ấm áp.|這裡一年到頭都很溫暖。||
4475|sánh|相比|to compare|動詞|Không ai sánh được với cô ấy.|沒人比得上她。|sánh vai＝並肩|
4476|thấu|透徹|thoroughly|副詞|Tôi hiểu thấu nỗi lòng của anh.|我完全理解你的心情。||透
4477|tật|毛病 / 殘疾|bad habit; disability|名詞|Anh ấy có tật hay quên.|他有健忘的毛病。||疾
4478|vẫy|揮手|to wave|動詞|Cô ấy vẫy tay chào tôi.|她向我揮手打招呼。||
4479|vỗ tay|拍手|to clap|動詞|Khán giả vỗ tay nhiệt liệt.|觀眾熱烈鼓掌。||
4480|đao|刀|sword; blade|名詞|Võ sĩ múa đao rất đẹp.|武術家舞刀舞得很漂亮。||刀
4481|bè|筏 / 夥|raft; gang|名詞|Họ đi bè trên sông.|他們在河上划竹筏。|bạn bè＝朋友|
4482|bản địa|本地|local; native|形容詞|Hướng dẫn viên là người bản địa.|導遊是當地人。||本地
4483|bực mình|心煩|annoyed|形容詞|Kẹt xe làm tôi bực mình.|塞車讓我很煩。||
4484|hạt giống|種子|seed|名詞|Mua hạt giống rau về trồng.|買菜種子回來種。||
4485|kíp|班 / 雷管|shift; detonator|名詞|Kíp trực đêm nay có ba người.|今晚值班的有三個人。||
4486|uốn|彎 / 燙（髮）|to bend; to perm|動詞|Tôi muốn uốn tóc.|我想燙頭髮。||
4487|chữ cái|字母|letter (alphabet)|名詞|Tiếng Việt có hai mươi chín chữ cái.|越語有二十九個字母。||
4488|hậu vệ|後衛|defender|名詞|Hậu vệ phá bóng ra ngoài.|後衛把球解圍出界。||後衛
4489|mơ hồ|模糊|vague|形容詞|Tôi chỉ nhớ mơ hồ.|我只記得模模糊糊。||模糊
4490|bù đắp|彌補|to make up for|動詞|Không gì bù đắp được mất mát này.|沒有什麼能彌補這損失。||
4491|phấn khích|興奮|excited|形容詞|Khán giả rất phấn khích.|觀眾非常興奮。||奮激
4492|Tiền Giang|前江（省）|Tien Giang|名詞|Chợ nổi Cái Bè ở Tiền Giang.|丐梅水上市場在前江省。||前江
4493|bằng cấp|學歷 / 文憑|qualifications|名詞|Kinh nghiệm quan trọng hơn bằng cấp.|經驗比學歷重要。||憑級
4494|dứt khoát|果斷|decisive|形容詞|Hãy trả lời dứt khoát.|請果斷地回答。||
4495|hòng|妄圖|hoping to|動詞|Hắn nói dối hòng trốn tội.|他說謊妄圖脫罪。||
4496|lịch trình|行程|schedule; itinerary|名詞|Lịch trình chuyến đi rất dày.|行程排得很滿。||歷程
4497|nảy|彈 / 冒出|to bounce; to sprout|動詞|Tôi chợt nảy ra một ý.|我突然想到一個主意。||
4498|thù|仇|enmity|名詞|Hai nhà có thù với nhau.|兩家有仇。|kẻ thù＝仇人|讎
4499|thứ bảy|星期六|Saturday|名詞|Thứ bảy này đi cà phê nhé.|這星期六去喝咖啡吧。||
4500|tử thần|死神|death (personified)|名詞|Anh ấy thoát khỏi tay tử thần.|他從鬼門關前逃回來。||死神
4501|Đặng|SKIP
4502|đến nơi|抵達|to arrive|動詞|Khi nào đến nơi thì gọi cho mẹ nhé.|到了就打給媽媽喔。||
4503|ca hát|唱歌|to sing|動詞|Cô ấy thích ca hát từ nhỏ.|她從小就喜歡唱歌。||歌
4504|chiếm đoạt|侵佔|to appropriate|動詞|Hắn chiếm đoạt tài sản của công ty.|他侵佔公司財產。||佔奪
4505|phân bổ|分配|to allocate|動詞|Ngân sách được phân bổ cho các tỉnh.|預算分配給各省。||分補
4506|độ ẩm|濕度|humidity|名詞|Độ ẩm ở Sài Gòn rất cao.|西貢的濕度很高。||
4507|bức xạ|輻射|radiation|名詞|Tia cực tím là bức xạ có hại.|紫外線是有害的輻射。||輻射
4508|chút ít|一點點|a little|名詞|Tôi biết chút ít tiếng Việt.|我會一點點越語。||
4509|cẩn trọng|謹慎|careful|形容詞|Hãy cẩn trọng khi ký hợp đồng.|簽約時要謹慎。||謹重
4510|lung linh|閃爍 / 璀璨|shimmering|形容詞|Phố cổ lung linh ánh đèn lồng.|古鎮燈籠閃閃發光。||
4511|nhiễu|干擾 / 雜訊|interference|名詞|Tivi bị nhiễu sóng.|電視訊號受干擾。||擾
4512|thích ứng|適應|to adapt|動詞|Cây này thích ứng với khí hậu nóng.|這種植物適應炎熱氣候。||適應
4513|trọng đại|重大|momentous|形容詞|Đây là sự kiện trọng đại.|這是重大事件。||重大
4514|ít nhiều|多少|more or less|副詞|Ai cũng ít nhiều có lỗi.|每個人多少都有錯。||
4515|Triệu|SKIP
4516|giả mạo|偽造 / 冒充|to forge|動詞|Giấy tờ này là giả mạo.|這份文件是偽造的。||假冒
4517|khoai|薯類|tuber; potato|名詞|Khoai lang nướng rất thơm.|烤地瓜很香。|khoai lang＝地瓜|
4518|nghiêm ngặt|嚴格|strict|形容詞|An ninh sân bay rất nghiêm ngặt.|機場安檢很嚴格。||
4519|sáp nhập|合併|to merge|動詞|Hai tỉnh được sáp nhập làm một.|兩省合併為一。||插入
4520|từ trường|磁場|magnetic field|名詞|Trái Đất có từ trường.|地球有磁場。||磁場
4521|Huyền|SKIP
4522|ngó|看 / 瞧|to look; to glance|動詞|Ngó qua cửa sổ xem ai đến.|從窗戶瞧瞧誰來了。||
4523|quần thể|群體 / 建築群|population; complex|名詞|Quần thể di tích Cố đô Huế.|順化古都建築群。||群體
4524|rong|水藻 / 閒逛|seaweed; to wander|名詞|Rong biển rất tốt cho sức khỏe.|海藻對健康很好。|đi rong＝到處逛|
4525|vật tư|物資 / 材料|supplies|名詞|Công trường thiếu vật tư.|工地缺材料。||物資
4526|bể bơi|游泳池（北部）|swimming pool|名詞|Khách sạn có bể bơi trên tầng thượng.|飯店頂樓有游泳池。|南部說 hồ bơi|
4527|giáo hội|教會|church (organization)|名詞|Giáo hội Phật giáo Việt Nam.|越南佛教教會。||教會
4528|lúng túng|窘迫 / 手足無措|awkward; flustered|形容詞|Tôi lúng túng không biết nói gì.|我窘得不知道說什麼。||
4529|trung gian|中間 / 中介|intermediary|形容詞|Anh ấy làm trung gian hoà giải.|他從中調解。||中間
4530|đại đội|連（軍隊）|company (military)|名詞|Đại đội trưởng ra lệnh tập hợp.|連長下令集合。||大隊
4531|Trung Đông|中東|Middle East|名詞|Giá dầu phụ thuộc vào tình hình Trung Đông.|油價取決於中東局勢。||中東
4532|ban công|陽台|balcony|名詞|Ban công nhà tôi trồng nhiều hoa.|我家陽台種了很多花。||
4533|bồn tắm|浴缸|bathtub|名詞|Phòng có bồn tắm lớn.|房間有大浴缸。||
4534|dược phẩm|藥品|pharmaceuticals|名詞|Công ty dược phẩm lớn nhất nước.|全國最大的藥品公司。||藥品
4535|giáo trình|教材|textbook; course material|名詞|Giáo trình tiếng Việt cho người nước ngoài.|給外國人的越語教材。||教程
4536|thì thầm|低語|to whisper|動詞|Hai người thì thầm với nhau.|兩人竊竊私語。||
4537|Gia Lai|嘉萊（省）|Gia Lai|名詞|Gia Lai có nhiều đồi chè và cà phê.|嘉萊有許多茶園和咖啡園。||嘉萊
4538|Thảo|SKIP
4539|chọn lọc|精選|selective; to select|動詞|Đây là những bài hát chọn lọc.|這些是精選歌曲。||
4540|khéo|靈巧 / 小心|skilful; careful|形容詞|Cô ấy khéo tay lắm.|她手很巧。|khéo kẻo ngã＝小心跌倒|巧
4541|nhấp|啜 / 點擊|to sip; to click|動詞|Nhấp vào đường link này.|點這個連結。||
4542|phản xạ|反射 / 反應|reflex|名詞|Thủ môn có phản xạ rất nhanh.|守門員反應很快。||反射
4543|tiền sử|病史 / 史前|medical history; prehistory|名詞|Bạn có tiền sử dị ứng không?|你有過敏病史嗎？||前史
4544|tuần lễ|週|week|名詞|Tôi nghỉ phép một tuần lễ.|我請假一週。||旬禮
4545|vận tốc|速度|velocity|名詞|Vận tốc tối đa là sáu mươi km một giờ.|最高時速六十公里。||運速
4546|buôn lậu|走私|to smuggle|動詞|Bọn buôn lậu bị bắt ở biên giới.|走私集團在邊境被捕。||
4547|sữa chua|優格|yogurt|名詞|Sữa chua tốt cho tiêu hoá.|優格有益消化。||
4548|vặn|扭 / 轉|to twist; to turn|動詞|Vặn nhỏ âm lượng xuống.|把音量轉小。||
4549|Vũ|SKIP
4550|giời|天（北部口語）|sky; heaven (Northern)|名詞|Ôi giời ơi, muộn rồi!|天啊，遲到了！|＝trời|
4551|mắng|罵|to scold|動詞|Mẹ mắng con vì về muộn.|媽媽因孩子晚歸罵他。||
4552|mến|喜愛|to be fond of|動詞|Bà con trong xóm rất mến cô giáo.|鄰居們都很喜歡這位老師。|thân mến＝親愛的|
4553|quyền hạn|權限|authority|名詞|Việc này vượt quá quyền hạn của tôi.|這超出我的權限。||權限
4554|thành niên|成年|adult|形容詞|Người chưa thành niên không được uống rượu.|未成年人不得喝酒。||成年
4555|thọ|壽|longevity|名詞|Cả nhà mừng thọ ông tám mươi tuổi.|全家為爺爺慶祝八十大壽。||壽
4556|xuôi|順 / 下游|downstream; smooth|形容詞|Mọi việc đều xuôi.|一切都很順。|miền xuôi＝平原地區|
4557|bản án|判決|verdict|名詞|Toà tuyên bản án mười năm tù.|法院宣判十年徒刑。||本案
4558|dang|張開（手臂）|to spread (arms)|動詞|Bé dang tay chạy đến ôm mẹ.|寶寶張開雙手跑去抱媽媽。||
4559|gây sự|找麻煩|to pick a fight|動詞|Đừng gây sự với người lạ.|別跟陌生人起衝突。||
4560|điêu khắc|雕刻|sculpture|名詞|Ông ấy là nhà điêu khắc nổi tiếng.|他是有名的雕刻家。||雕刻
4561|đo lường|測量|to measure|動詞|Khó đo lường hiệu quả của quảng cáo.|廣告效益很難衡量。||
4562|Yến|SKIP
4563|bóng ma|幽靈|ghost|名詞|Có người nói thấy bóng ma trong nhà hoang.|有人說在廢屋看到幽靈。||
4564|cà rốt|紅蘿蔔|carrot|名詞|Cà rốt tốt cho mắt.|紅蘿蔔對眼睛好。||
4565|hiện vật|實物 / 文物|artifact|名詞|Bảo tàng trưng bày nhiều hiện vật quý.|博物館展出許多珍貴文物。||現物
4566|mò|摸索|to grope|動詞|Tôi mò mẫm tìm công tắc đèn.|我摸黑找電燈開關。||摸
4567|tiêu chảy|腹瀉|diarrhoea|名詞|Tôi bị tiêu chảy vì ăn đồ lạ.|我吃了怪東西拉肚子。||
4568|vần|韻 / 拼讀|rhyme|名詞|Bài thơ có vần rất hay.|這首詩押韻很好。||韻
4569|khai giảng|開學|start of school year|動詞|Trường khai giảng ngày năm tháng chín.|學校九月五日開學。||開講
4570|khinh|輕視|to despise|動詞|Đừng khinh người nghèo.|別瞧不起窮人。||輕
4571|tịch thu|沒收|to confiscate|動詞|Hàng giả bị tịch thu.|假貨被沒收。||籍收
4572|vô tư|無憂無慮 / 無私|carefree; impartial|形容詞|Trẻ con sống rất vô tư.|小孩活得無憂無慮。|口語 cứ vô tư＝儘管|無私
4573|Đông Nam Á|東南亞|Southeast Asia|名詞|Việt Nam là thành viên ASEAN ở Đông Nam Á.|越南是東南亞的東協成員。||
4574|đau buồn|悲痛|grief-stricken|形容詞|Gia đình vô cùng đau buồn.|家人非常悲痛。||
4575|đốm|斑點|spot|名詞|Con chó có đốm trắng.|那隻狗有白斑點。||
4576|xoa|揉 / 搓|to rub|動詞|Xoa dầu vào chỗ đau.|在痛處揉藥油。||
4577|ép buộc|強迫|to force|動詞|Đừng ép buộc con học.|別逼孩子讀書。||
4578|Bồ Đào Nha|葡萄牙|Portugal|名詞|Ronaldo là cầu thủ Bồ Đào Nha.|C 羅是葡萄牙球員。||葡萄牙
4579|lung tung|亂七八糟|all over the place|副詞|Đồ chơi vứt lung tung.|玩具丟得到處都是。||
4580|êm|柔軟 / 平靜|soft; smooth|形容詞|Ghế này ngồi rất êm.|這張椅子坐起來很軟。||
4581|đài truyền hình|電視台|TV station|名詞|Đài truyền hình Việt Nam phát tin tức.|越南電視台播報新聞。||
4582|đề cao|重視 / 提倡|to uphold|動詞|Công ty đề cao tinh thần đồng đội.|公司重視團隊精神。||提高
4583|cày|犁田 / 拚命（做）|to plough; to grind|動詞|Trâu cày ruộng.|水牛犁田。|口語 cày game＝狂打電動|
4584|phi thuyền|太空船|spaceship|名詞|Phi thuyền bay vào vũ trụ.|太空船飛向宇宙。||飛船
4585|trái ngược|相反|contrary|形容詞|Hai người có tính cách trái ngược.|兩人個性相反。||
4586|ảo thuật|魔術|magic trick|名詞|Bé xem ảo thuật rất thích thú.|孩子看魔術看得很開心。||幻術
4587|Khánh|SKIP
4588|cửa khẩu|口岸|border gate|名詞|Hàng hoá đi qua cửa khẩu Lạng Sơn.|貨物經諒山口岸通關。||
4589|mại dâm|SKIP
4590|mục sư|牧師|pastor|名詞|Mục sư giảng đạo ở nhà thờ.|牧師在教堂講道。||牧師
4591|nhu|柔 / 需|soft (Sino)|形容詞|Lấy nhu thắng cương.|以柔克剛。|nhu cầu＝需求|柔
4592|thiếu sót|疏漏|shortcoming|名詞|Xin lỗi vì thiếu sót của chúng tôi.|抱歉我們的疏失。||少
4593|thấu hiểu|深刻理解|to understand deeply|動詞|Mẹ luôn thấu hiểu con.|媽媽總是懂我。||透
4594|đại chúng|大眾|mass; public|形容詞|Đây là món ăn đại chúng.|這是大眾美食。||大眾
4595|binh sĩ|士兵|soldier|名詞|Các binh sĩ diễu hành qua quảng trường.|士兵們在廣場遊行。||兵士
4596|chính quy|正規|regular; formal|形容詞|Anh ấy học đại học chính quy.|他讀正規大學。||正規
4597|Bắc Giang|北江（省）|Bac Giang|名詞|Vải thiều Bắc Giang rất ngọt.|北江荔枝很甜。||北江
4598|bất đồng|分歧|disagreement|名詞|Hai bên còn nhiều bất đồng.|雙方仍有很多分歧。||不同
4599|chống đối|反對 / 對抗|to oppose|動詞|Nhiều người chống đối dự án.|很多人反對這項目。||
4600|nang|囊（醫）|cyst; capsule|名詞|Bác sĩ phát hiện u nang buồng trứng.|醫生發現卵巢囊腫。||囊
4601|quân đoàn|軍團|army corps|名詞|Quân đoàn hai tiến vào Sài Gòn năm 1975.|第二軍團在 1975 年進入西貢。||軍團
4602|sao chép|複製 / 抄襲|to copy|動詞|Không được sao chép bài của bạn.|不可抄襲同學的作業。||抄
4603|thủ thuật|技巧 / 小手術|trick; procedure|名詞|Mẹo nhỏ, thủ thuật máy tính.|電腦小技巧。||手術
4604|điên cuồng|瘋狂|frenzied|形容詞|Fan hâm mộ cổ vũ điên cuồng.|粉絲瘋狂加油。||癲狂
4605|cổ tích|童話|fairy tale|名詞|Bà kể chuyện cổ tích cho cháu nghe.|奶奶講童話給孫子聽。||古蹟
4606|gu|品味|taste (style)|名詞|Cô ấy có gu thời trang rất tốt.|她穿衣品味很好。|來自法語 goût|
4607|hoang tưởng|妄想|delusion|名詞|Anh ta bị hoang tưởng.|他有妄想症。||荒想
4608|hé|微開|to open slightly|動詞|Cửa hé mở.|門開了一條縫。||
4609|khởi tố|起訴|to prosecute|動詞|Công an khởi tố vụ án.|公安立案起訴。||起訴
4610|phương diện|方面|aspect|名詞|Về phương diện kinh tế, dự án rất có lợi.|就經濟方面而言，這計畫很有利。||方面
4611|sách vở|書本|books; bookish|名詞|Học sinh mang sách vở đến trường.|學生帶書本上學。||
4612|bào chữa|辯護|to defend (in court)|動詞|Luật sư bào chữa cho bị cáo.|律師為被告辯護。||
4613|thiếu hụt|短缺|shortage|名詞|Bệnh viện thiếu hụt bác sĩ.|醫院缺醫生。||
4614|cử chỉ|舉止|gesture|名詞|Cử chỉ của anh ấy rất lịch sự.|他舉止很有禮貌。||舉止
4615|rèn|鍛造 / 鍛鍊|to forge; to train|動詞|Rèn luyện sức khỏe mỗi ngày.|每天鍛鍊身體。|rèn luyện＝鍛鍊|
4616|tục|習俗 / 粗俗|custom; vulgar|名詞|Người Việt có tục xông đất ngày Tết.|越南人過年有踩年頭的習俗。|nói tục＝說髒話|俗
4617|chói|刺眼|dazzling|形容詞|Nắng chói quá.|陽光好刺眼。||
4618|hãnh diện|自豪|proud|形容詞|Bố mẹ rất hãnh diện về con.|父母以孩子為傲。||
4619|Bỉ|比利時|Belgium|名詞|Sô-cô-la Bỉ rất nổi tiếng.|比利時巧克力很有名。||比
4620|Na|SKIP
4621|Tý|子（鼠年）|Rat (zodiac)|名詞|Tôi sinh năm Tý.|我屬鼠。||子
4622|chéo|斜 / 交叉|diagonal; crossed|形容詞|Đường kẻ chéo.|斜線。||
4623|coi thường|輕視|to look down on|動詞|Đừng coi thường đối thủ.|別輕視對手。||
4624|khuẩn|菌|bacterium|名詞|Rửa tay để diệt khuẩn.|洗手殺菌。|vi khuẩn＝細菌|菌
4625|mùi vị|味道|flavour|名詞|Mùi vị món này rất lạ.|這道菜味道很特別。||
4626|phát thanh|廣播|to broadcast (radio)|動詞|Đài phát thanh phát bản tin sáng.|廣播電台播出早間新聞。||發聲
4627|thương vụ|商務 / 交易|deal; trade|名詞|Đây là thương vụ lớn nhất năm.|這是今年最大的交易。||商務
4628|út|老么|youngest|形容詞|Em là con út trong nhà.|我是家裡的老么。||
4629|chức danh|職稱|title (job)|名詞|Chức danh của anh trên danh thiếp là gì?|你名片上的職稱是什麼？||職名
4630|cá voi|鯨魚|whale|名詞|Cá voi là động vật có vú.|鯨魚是哺乳動物。||
4631|khiên|盾牌|shield|名詞|Chiến binh cầm khiên và kiếm.|戰士手持盾牌和劍。||
4632|phết|塗抹 / 相當（口語）|to spread; quite|動詞|Phết bơ lên bánh mì.|在麵包上塗奶油。|hay ra phết＝挺好的|
4633|săn đuổi|追捕|to chase|動詞|Phóng viên săn đuổi ngôi sao.|記者追逐明星。||
4634|sẻ|麻雀 / 分享|sparrow; to share|名詞|Chim sẻ đậu trên mái nhà.|麻雀停在屋頂上。|chia sẻ＝分享|
4635|thanh xuân|青春|youth|名詞|Đừng lãng phí tuổi thanh xuân.|別浪費青春。||青春
4636|tỉ mỉ|仔細|meticulous|形容詞|Cô ấy làm việc rất tỉ mỉ.|她做事很細心。||
4637|vô danh|無名|anonymous|形容詞|Đây là tác phẩm của tác giả vô danh.|這是無名作者的作品。||無名
4638|diễn tập|演習|drill; rehearsal|動詞|Trường diễn tập phòng cháy.|學校進行消防演習。||演習
4639|gia công|加工|to process|動詞|Nhà máy gia công hàng may mặc.|工廠代工成衣。||加工
4640|nãy giờ|剛才到現在|all this time|副詞|Nãy giờ anh đi đâu vậy?|你剛剛去哪了？||
4641|quý báu|珍貴|precious|形容詞|Cảm ơn những lời khuyên quý báu.|謝謝寶貴的建議。||貴寶
4642|vững vàng|穩固|steady|形容詞|Anh ấy có tay nghề vững vàng.|他手藝很紮實。||
4643|bài bản|有系統 / 正規|systematic|形容詞|Cô ấy được đào tạo bài bản.|她受過正規訓練。||
4644|chết đuối|溺死|to drown|動詞|Không biết bơi rất dễ chết đuối.|不會游泳很容易溺水。||
4645|huy hiệu|徽章|badge|名詞|Học sinh đeo huy hiệu trên áo.|學生在衣服上別徽章。||徽號
4646|khoác|披 / 搭|to put on (over shoulders)|動詞|Khoác thêm áo kẻo lạnh.|多披件衣服免得著涼。|áo khoác＝外套|
4647|thảm hại|悲慘 / 慘敗|miserable|形容詞|Đội nhà thua thảm hại.|主隊慘敗。||慘害
4648|chấn động|震驚 / 震動|shock; to shake|名詞|Tin này gây chấn động dư luận.|這消息震驚輿論。||震動
4649|dạy dỗ|教養|to bring up; to educate|動詞|Bố mẹ dạy dỗ con cái nên người.|父母教養孩子成人。||
4650|hoàng hôn|黃昏|dusk|名詞|Ngắm hoàng hôn trên sông Hàn.|在漢江看夕陽。||黃昏
4651|khó tính|難搞 / 挑剔|fussy|形容詞|Sếp tôi rất khó tính.|我老闆很挑剔。||
4652|thần thánh|神聖 / 神明|divine|名詞|Đừng coi anh ta như thần thánh.|別把他當神一樣。||神聖
4653|đường dẫn|連結 / 路徑|link; path|名詞|Gửi cho tôi đường dẫn nhé.|把連結傳給我。||
4654|Tùng|SKIP
4655|bình ổn|平穩|to stabilize|動詞|Nhà nước bình ổn giá cả.|國家穩定物價。||平穩
4656|chót|最後|last|形容詞|Hạn chót nộp bài là thứ sáu.|交作業的最後期限是星期五。|hạn chót＝截止日|
4657|cộng tác|合作|to collaborate|動詞|Tôi cộng tác với tờ báo này.|我跟這家報社合作。||共作
4658|kê khai|申報|to declare|動詞|Kê khai thu nhập cá nhân.|申報個人所得。||計開
4659|kẽm|鋅|zinc|名詞|Mái tôn bằng kẽm.|鍍鋅鐵皮屋頂。||
4660|mầu|顏色（舊寫）/ 奇妙|colour (variant); miraculous|名詞|Áo này mầu gì?|這件衣服什麼顏色？|現代多寫 màu|
4661|mứt|蜜餞|candied fruit|名詞|Tết nhà nào cũng có mứt.|過年家家都有蜜餞。||
4662|nhúc nhích|動彈|to budge|動詞|Ngồi im, đừng nhúc nhích!|坐好，別動！||
4663|thủ đoạn|手段|scheme|名詞|Hắn dùng thủ đoạn để lừa tiền.|他用手段騙錢。||手段
4664|địa danh|地名|place name|名詞|Đây là một địa danh lịch sử.|這是一個歷史地名。||地名
4665|bàn tán|議論|to gossip; to discuss|動詞|Cả xóm bàn tán về chuyện đó.|整條街都在議論那件事。||
4666|hụt|不足 / 落空|short; to miss|動詞|Tôi bị hụt chân suýt ngã.|我踩空差點跌倒。||
4667|lan toả|擴散 / 散播|to spread|動詞|Hãy lan toả năng lượng tích cực.|散播正能量吧。||
4668|nước nhà|祖國 / 本國|our country|名詞|Bóng đá nước nhà đang phát triển.|本國足球正在發展。||
4669|thềm|台階 / 門階|doorstep|名詞|Bà ngồi trên thềm nhà.|奶奶坐在門階上。||
4670|tác nhân|因素 / 媒介|agent; factor|名詞|Khói bụi là tác nhân gây bệnh.|煙塵是致病因素。||作因
4671|đại bàng|老鷹|eagle|名詞|Đại bàng bay trên núi cao.|老鷹在高山上飛翔。||大鵬
4672|chậm trễ|延誤|delay|形容詞|Xin lỗi vì sự chậm trễ.|抱歉延誤了。||
4673|con nuôi|養子女|adopted child|名詞|Họ nhận một bé gái làm con nuôi.|他們收養一個女孩。||
4674|hiếp dâm|SKIP
4675|tẩu|煙斗 / 逃|pipe; to flee (Sino)|名詞|Ông tôi hút tẩu.|我爺爺抽煙斗。|tẩu thoát＝逃走|走
4676|vòm|拱頂|vault; dome|名詞|Mái vòm nhà thờ rất cao.|教堂拱頂很高。||
4677|xúc xích|香腸|sausage|名詞|Bé thích ăn xúc xích.|寶寶喜歡吃香腸。||
4678|cướp biển|海盜|pirate|名詞|Phim về cướp biển rất hay.|海盜電影很好看。||
4679|cặn bã|渣滓|dregs|名詞|Hắn là cặn bã của xã hội.|他是社會敗類。||
4680|du thuyền|遊艇|yacht; cruise boat|名詞|Chúng tôi đi du thuyền trên vịnh Hạ Long.|我們搭遊船遊下龍灣。||遊船
4681|khuôn|模子|mould|名詞|Đổ bột vào khuôn bánh.|把麵糊倒進模子。|khuôn mặt＝臉型|
4682|phẳng|平|flat|形容詞|Mặt bàn rất phẳng.|桌面很平。||
4683|thanh thản|心安 / 平靜|at peace|形容詞|Tôi thấy lòng thanh thản.|我心裡很平靜。||
4684|Phú Thọ|富壽（省）|Phu Tho|名詞|Đền Hùng nằm ở Phú Thọ.|雄王廟位於富壽省。||富壽
4685|bào|刨 / 磨|to plane; to wear away|動詞|Thợ mộc bào gỗ cho nhẵn.|木匠把木頭刨平。||刨
4686|bé bỏng|嬌小|tiny; dear little|形容詞|Con gái bé bỏng của mẹ.|媽媽的小寶貝。||
4687|chức trách|職責|duty|名詞|Đó là chức trách của tôi.|那是我的職責。||職責
4688|hoa văn|花紋|pattern|名詞|Áo có hoa văn dân tộc.|衣服有民族花紋。||花紋
4689|khai báo|申報 / 交代|to declare|動詞|Hành khách phải khai báo hải quan.|旅客必須向海關申報。||開報
4690|tham lam|貪婪|greedy|形容詞|Đừng tham lam quá.|別太貪心。||貪婪
4691|biên chế|編制|permanent staff|名詞|Cô ấy là giáo viên trong biên chế.|她是正式編制的老師。||編制
4692|cứ việc|儘管|go ahead|副詞|Anh cứ việc hỏi.|你儘管問。||
4693|cựu chiến binh|退伍軍人|veteran|名詞|Ông tôi là cựu chiến binh.|我爺爺是退伍軍人。||舊戰兵
4694|gật|點頭|to nod|動詞|Cô ấy gật đầu đồng ý.|她點頭答應。||
4695|ngầu|酷 / 混濁|cool (slang); murky|形容詞|Trông anh ấy ngầu quá!|他看起來好酷！||
4696|nhanh nhẹn|敏捷|agile; quick|形容詞|Cậu bé rất nhanh nhẹn.|小男孩很機靈。||
4697|trí tưởng tượng|想像力|imagination|名詞|Trẻ em có trí tưởng tượng phong phú.|孩子想像力豐富。||
4698|tù binh|戰俘|prisoner of war|名詞|Hai bên trao đổi tù binh.|雙方交換戰俘。||囚兵
4699|văng|飛濺 / 甩出|to fly off; to splash|動詞|Nước văng tung toé.|水花四濺。|văng tục＝爆粗口|
4700|âm lịch|農曆|lunar calendar|名詞|Tết là ngày mùng một tháng giêng âm lịch.|過年是農曆正月初一。||陰曆
4701|Bạc Liêu|薄遼（省）|Bac Lieu|名詞|Bạc Liêu có cánh đồng điện gió.|薄遼有風力發電場。||薄遼
4702|bồ câu|鴿子|pigeon; dove|名詞|Bồ câu là biểu tượng hoà bình.|鴿子是和平的象徵。||
4703|cứu trợ|救援 / 賑濟|relief aid|動詞|Gửi hàng cứu trợ cho vùng lũ.|寄救援物資到水災區。||救助
4704|lý lịch|履歷 / 背景|personal record; CV|名詞|Nộp bản sơ yếu lý lịch.|繳交履歷表。||履歷
4705|thám hiểm|探險|to explore|動詞|Họ thám hiểm hang Sơn Đoòng.|他們探險韓松洞。||探險
4706|thủ trưởng|首長 / 主管|head; chief|名詞|Thủ trưởng đơn vị ký quyết định.|單位首長簽署決定。||首長
4707|truy đuổi|追趕|to pursue|動詞|Cảnh sát truy đuổi tên cướp.|警察追趕搶匪。||追
4708|ám chỉ|暗指|to imply|動詞|Anh đang ám chỉ ai vậy?|你在暗指誰？||暗指
4709|âm thầm|默默|silently|副詞|Cô ấy âm thầm giúp đỡ mọi người.|她默默幫助大家。||
4710|đảm nhiệm|擔任|to be in charge of|動詞|Anh ấy đảm nhiệm vị trí giám đốc.|他擔任總經理一職。||擔任
4711|chôn cất|安葬|to bury|動詞|Ông được chôn cất ở quê.|他葬在故鄉。||
4712|thêu|刺繡|to embroider|動詞|Bà thêu hoa lên khăn tay.|奶奶在手帕上繡花。||
4713|tinh khiết|純淨|pure|形容詞|Nước uống tinh khiết.|純淨飲用水。||精潔
4714|xiếc|馬戲|circus|名詞|Cả nhà đi xem xiếc.|全家去看馬戲。||
4715|cổ họng|喉嚨|throat|名詞|Cổ họng tôi khô quá.|我喉嚨好乾。||
4716|nơ|蝴蝶結|bow; ribbon|名詞|Bé gái cài nơ đỏ.|小女孩戴紅色蝴蝶結。||
4717|bắt nạt|欺負|to bully|動詞|Đừng bắt nạt bạn nhỏ.|別欺負小朋友。||
4718|che chở|庇護|to protect|動詞|Bố mẹ luôn che chở con cái.|父母總是保護孩子。||
4719|găng tay|手套|gloves|名詞|Đeo găng tay khi rửa bát.|洗碗時戴手套。||
4720|hiệp ước|條約|treaty|名詞|Hai nước ký hiệp ước biên giới.|兩國簽訂邊界條約。||協約
4721|hoá học|化學|chemistry|名詞|Em giỏi môn hoá học.|我化學很好。||化學
4722|làn sóng|浪潮|wave|名詞|Làn sóng K-pop lan khắp châu Á.|韓流浪潮席捲亞洲。||
4723|nô|奴|slave (Sino)|名詞|Nhân dân không muốn làm nô lệ.|人民不願當奴隸。|nô lệ＝奴隸|奴
4724|viếng thăm|拜訪 / 造訪|to visit|動詞|Cảm ơn quý khách đã viếng thăm.|感謝貴賓蒞臨。||
4725|buồn nôn|噁心想吐|nauseous|形容詞|Tôi say sóng, buồn nôn quá.|我暈船，好想吐。||
4726|công đoạn|工序|stage (of process)|名詞|Đây là công đoạn cuối cùng.|這是最後一道工序。||工段
4727|ngắn ngủi|短暫|brief|形容詞|Cuộc đời ngắn ngủi lắm.|人生很短暫。||
4728|thon|纖細|slender|形容詞|Cô ấy có đôi chân thon dài.|她有修長的雙腿。||
4729|bao phủ|籠罩|to cover|動詞|Sương mù bao phủ thành phố.|霧籠罩城市。||包覆
4730|cai|戒 / 工頭|to quit (habit); foreman|動詞|Bố tôi đã cai thuốc lá.|我爸已經戒菸了。||戒
4731|gia hạn|延期 / 續期|to extend|動詞|Tôi cần gia hạn visa.|我需要延長簽證。||加限
4732|kiểm|檢|to check (Sino)|動詞|Kiểm lại số tiền trước khi đi.|走之前再點一下錢。|kiểm tra＝檢查|檢
4733|kỳ cục|古怪|weird|形容詞|Anh ta ăn mặc kỳ cục.|他穿得很古怪。||奇局
4734|lười|懶|lazy|形容詞|Hôm nay tôi lười nấu cơm.|今天我懶得煮飯。||
4735|lật đổ|推翻|to overthrow|動詞|Quân nổi dậy lật đổ nhà vua.|叛軍推翻了國王。||
4736|mát mẻ|涼爽|cool; refreshing|形容詞|Thời tiết hôm nay mát mẻ.|今天天氣涼爽。||
4737|Đồng Tháp|同塔（省）|Dong Thap|名詞|Đồng Tháp nổi tiếng với hoa sen.|同塔以蓮花聞名。||同塔
4738|bọt|泡沫|foam; bubble|名詞|Bia có nhiều bọt.|啤酒泡沫很多。||
4739|con hoang|SKIP
4740|cổ tay|手腕|wrist|名詞|Cô ấy đeo đồng hồ ở cổ tay trái.|她左手腕戴錶。||
4741|cứng đầu|固執|stubborn|形容詞|Thằng bé cứng đầu lắm.|那男孩很固執。||
4742|mài|磨|to sharpen; to grind|動詞|Mài dao cho sắc.|把刀磨利。||磨
4743|phán quyết|判決|ruling|名詞|Toà ra phán quyết cuối cùng.|法院做出最終判決。||判決
4744|quá sức|超過能力 / 過度|beyond one's strength|形容詞|Đừng làm việc quá sức.|別過度工作。||
4745|thê|妻 / 悽|wife (Sino); sad|名詞|Ông ấy sống cảnh vợ con thê thảm.|他家境淒慘。|thê thảm＝悽慘|悽
4746|thương yêu|疼愛|to love dearly|動詞|Bà rất thương yêu các cháu.|奶奶很疼孫子們。||
4747|thời cơ|時機|opportunity|名詞|Đây là thời cơ tốt để đầu tư.|這是投資的好時機。||時機
4748|tỉnh thành|省市|provinces and cities|名詞|Khách đến từ nhiều tỉnh thành.|客人來自各省市。||省城
4749|xúc|鏟 / 舀|to scoop|動詞|Xúc cơm cho bé ăn.|舀飯餵寶寶。|xúc động＝感動|
4750|áo choàng|斗篷 / 長袍|cloak; gown|名詞|Bác sĩ mặc áo choàng trắng.|醫生穿白袍。||
4751|đẫm|濕透|soaked|形容詞|Áo đẫm mồ hôi.|衣服被汗濕透。||
4752|đổ bộ|登陸|to land|動詞|Bão đổ bộ vào miền Trung.|颱風登陸中部。||
4753|bậy|胡亂 / 亂來|wrong; nonsense|形容詞|Đừng nói bậy.|別亂說。|nói bậy＝說髒話 / 胡說|
4754|đường cong|曲線|curve|名詞|Cô ấy có đường cong hoàn hảo.|她身材曲線完美。||
4755|dính dáng|牽連|to be involved|動詞|Tôi không dính dáng gì đến chuyện đó.|那件事跟我毫無關係。||
4756|hiền lành|善良溫和|gentle; kind|形容詞|Anh ấy là người hiền lành.|他是個善良的人。||
4757|láng giềng|鄰居|neighbour|名詞|Bán anh em xa mua láng giềng gần.|遠親不如近鄰。||
4758|quân nhân|軍人|serviceman|名詞|Bố tôi là quân nhân.|我爸是軍人。||軍人
4759|san hô|珊瑚|coral|名詞|Lặn ngắm san hô ở Nha Trang.|在芽莊潛水看珊瑚。||珊瑚
4760|tận tình|盡心|devoted|形容詞|Bác sĩ chăm sóc bệnh nhân rất tận tình.|醫生很盡心照顧病人。||盡情
4761|bong bóng|氣球 / 泡泡|balloon; bubble|名詞|Bé thổi bong bóng xà phòng.|寶寶吹肥皂泡泡。||
4762|bốn|四|four|數詞|Nhà tôi có bốn người.|我家有四個人。||
4763|chán nản|沮喪|discouraged|形容詞|Đừng chán nản, cố lên!|別灰心，加油！||
4764|cột sống|脊椎|spine|名詞|Ngồi sai tư thế hại cột sống.|坐姿不正傷脊椎。||
4765|huyệt|穴位 / 墓穴|acupoint; grave|名詞|Bấm huyệt giúp giảm đau.|按穴道有助止痛。||穴
4766|khởi nghĩa|起義|uprising|名詞|Cuộc khởi nghĩa Hai Bà Trưng.|二徵夫人起義。||起義
4767|lợi hại|厲害 / 利弊|formidable|形容詞|Đối thủ rất lợi hại.|對手很厲害。||利害
4768|nhịn|忍 / 不吃|to endure; to go without|動詞|Tôi nhịn ăn sáng để giảm cân.|我不吃早餐減肥。||忍
4769|phải chăng|合理（價格）/ 是否|reasonable; whether|形容詞|Giá cả phải chăng.|價格公道。||
4770|xuất thân|出身|origin; background|動詞|Anh ấy xuất thân từ gia đình nông dân.|他出身農家。||出身
4771|đồng cảm|同感 / 共鳴|empathy|動詞|Tôi rất đồng cảm với bạn.|我很能體會你的感受。||同感
4772|cá thể|個體|individual|名詞|Mỗi cá thể đều khác nhau.|每個個體都不同。||個體
4773|gập|折 / 彎|to fold; to bend|動詞|Gập máy tính lại đi.|把筆電闔上吧。||
4774|hiên|屋簷 / 走廊|veranda; eaves|名詞|Ngồi uống trà ngoài hiên.|坐在屋簷下喝茶。||軒
4775|ngay lập tức|立刻|immediately|副詞|Hãy gọi cấp cứu ngay lập tức.|立刻叫救護車。||立刻
4776|pháo hoa|煙火|fireworks|名詞|Đêm giao thừa có bắn pháo hoa.|除夕夜有放煙火。||炮花
4777|bộ luật|法典|code (of law)|名詞|Bộ luật Dân sự mới có hiệu lực.|新民法典已生效。||部律
4778|chào đời|出生|to be born|動詞|Con trai tôi chào đời năm ngoái.|我兒子去年出生。||
4779|lẹ|快（南部）|quick (Southern)|形容詞|Đi lẹ lên, trễ rồi!|快點走，遲到了！|北部說 nhanh|
4780|thiên đàng|天堂|paradise|名詞|Nơi đây đẹp như thiên đàng.|這裡美得像天堂。||天堂
4781|đấu thầu|投標|to bid (tender)|動詞|Nhiều công ty tham gia đấu thầu.|許多公司參與投標。||鬥投
4782|canh tác|耕作|to cultivate|動詞|Nông dân canh tác lúa nước.|農民種植水稻。||耕作
4783|công chứng|公證|to notarize|動詞|Hợp đồng cần được công chứng.|合約需要公證。||公證
4784|cằm|下巴|chin|名詞|Anh ấy để râu ở cằm.|他下巴留鬍子。||頷
4785|di chúc|遺囑|will (testament)|名詞|Ông để lại di chúc cho con cháu.|他給子孫留下遺囑。||遺囑
4786|nghiêm khắc|嚴厲|strict|形容詞|Thầy giáo rất nghiêm khắc.|老師很嚴格。||嚴刻
4787|ngần|這麼多 / 遲疑|this much; to hesitate|名詞|Ngần này tiền đủ không?|這麼多錢夠嗎？|ngần ngại＝猶豫|
4788|viện trợ|援助|aid|名詞|Nước bạn gửi viện trợ nhân đạo.|友邦送來人道援助。||援助
4789|vớt|撈|to scoop up|動詞|Vớt rác trên mặt hồ.|撈湖面上的垃圾。||
4790|ứng phó|應對|to cope with|動詞|Người dân chủ động ứng phó với bão.|居民主動應對颱風。||應付
4791|mệnh danh|號稱|to be dubbed|動詞|Đà Lạt được mệnh danh là thành phố ngàn hoa.|大叻被稱為千花之城。||命名
4792|nghị lực|毅力|willpower|名詞|Anh ấy vượt khó nhờ nghị lực phi thường.|他憑著驚人毅力克服困難。||毅力
4793|trung tá|中校|lieutenant colonel|名詞|Bố tôi là trung tá quân đội.|我爸是陸軍中校。||中佐
4794|trình tự|順序 / 程序|order; procedure|名詞|Làm theo trình tự từng bước.|按照順序一步一步做。||程序
4795|tương đồng|相似|similar|形容詞|Hai ngôn ngữ có nhiều điểm tương đồng.|兩種語言有很多相似之處。||相同
4796|ích|益|benefit (Sino)|名詞|Học thêm ngoại ngữ rất có ích.|多學外語很有用。|có ích＝有用|益
4797|điềm|預兆|omen|名詞|Người ta cho đó là điềm xấu.|人們認為那是凶兆。||兆
4798|anh đào|櫻桃 / 櫻花|cherry|名詞|Hoa anh đào nở vào mùa xuân.|櫻花在春天盛開。||櫻桃
4799|chạy đua|競賽|to race|動詞|Các nước chạy đua phát triển AI.|各國競相發展人工智慧。||
4800|cầm đầu|帶頭 / 首腦|to lead (a gang)|動詞|Kẻ cầm đầu băng cướp đã bị bắt.|搶劫集團首腦已落網。||
4801|mỹ nhân|美人|beauty (woman)|名詞|Cô ấy được gọi là mỹ nhân.|她被稱為美人。||美人
4802|thiếu thốn|匱乏|deprived|形容詞|Cuộc sống còn nhiều thiếu thốn.|生活仍很匱乏。||
4803|vọt|竄 / 飆升|to shoot up|動詞|Giá xăng tăng vọt.|油價飆漲。||
4804|trích dẫn|引用|to quote|動詞|Bài viết trích dẫn lời của chuyên gia.|文章引用專家的話。||摘引
4805|xuất huyết|出血|hemorrhage|名詞|Sốt xuất huyết rất nguy hiểm.|登革熱很危險。|sốt xuất huyết＝登革熱|出血
4806|Đan Mạch|丹麥|Denmark|名詞|Đan Mạch là nước rất hạnh phúc.|丹麥是很幸福的國家。||丹麥
4807|đồng loạt|一齊|simultaneously|副詞|Các cửa hàng đồng loạt giảm giá.|各店家同時降價。||同列
4808|hoà hợp|和睦 / 融合|harmonious|形容詞|Vợ chồng sống hoà hợp.|夫妻和睦相處。||和合
4809|khoáng chất|礦物質|mineral|名詞|Nước khoáng có nhiều khoáng chất.|礦泉水含很多礦物質。||礦質
4810|ngồi tù|坐牢|to be in prison|動詞|Hắn đã ngồi tù năm năm.|他坐了五年牢。||
4811|xác thực|確實 / 驗證|authentic; to authenticate|動詞|Nhập mã để xác thực tài khoản.|輸入驗證碼驗證帳號。||確實
4812|Quy Nhơn|歸仁|Quy Nhon|名詞|Quy Nhơn có biển rất đẹp.|歸仁的海很美。||歸仁
4813|kết nạp|接納（入會）|to admit (as member)|動詞|Anh ấy được kết nạp vào hội.|他被接納入會。||結納
4814|ngần ngại|猶豫|to hesitate|動詞|Đừng ngần ngại liên hệ với tôi.|請不要猶豫跟我聯絡。||
4815|như ý|如意|as one wishes|形容詞|Chúc bạn vạn sự như ý.|祝你萬事如意。||如意
4816|phai|褪色|to fade|動詞|Áo bị phai màu.|衣服褪色了。||
4817|phát nổ|爆炸|to explode|動詞|Bình gas bị phát nổ.|瓦斯桶爆炸了。||發
4818|tráng|攤（蛋）/ 沖洗|to spread thinly; to rinse|動詞|Tráng trứng cho bữa sáng.|早餐煎個蛋皮。|bánh tráng＝米紙|
4819|tác hại|危害|harmful effect|名詞|Tác hại của thuốc lá rất lớn.|菸害很大。||作害
4820|xà|樑 / 單槓 / 蛇|beam; bar|名詞|Anh ấy tập xà đơn mỗi sáng.|他每天早上練單槓。||
4821|Thuý|SKIP
4822|canh gác|看守|to guard|動詞|Lính canh gác cổng thành.|士兵看守城門。||
4823|công trường|工地|construction site|名詞|Công nhân làm việc ở công trường.|工人在工地工作。||工場
4824|di|SKIP
4825|hèn|卑賤 / 懦弱|lowly; cowardly|形容詞|Đừng làm chuyện hèn hạ.|別做卑鄙的事。|hèn gì＝難怪|
4826|khí quyển|大氣層|atmosphere|名詞|Khí quyển bảo vệ Trái Đất.|大氣層保護地球。||氣圈
4827|kinh dị|恐怖|horror|形容詞|Tôi không dám xem phim kinh dị.|我不敢看恐怖片。||驚異
4828|lược|梳子 / 略|comb; summary (Sino)|名詞|Cho em mượn cái lược.|借我梳子。|tóm lược＝摘要|
4829|nhân tài|人才|talent|名詞|Công ty cần thu hút nhân tài.|公司需要吸引人才。||人才
4830|nêm|調味|to season|動詞|Nêm thêm chút muối.|再加點鹽調味。||
4831|trốn tránh|逃避|to evade|動詞|Đừng trốn tránh trách nhiệm.|別逃避責任。||
4832|vừa phải|適中|moderate|形容詞|Ăn uống vừa phải.|飲食適量。||
4833|chọi|鬥 / 對抗|to fight (animals)|動詞|Lễ hội chọi trâu ở Đồ Sơn.|塗山鬥牛節。||
4834|hử|嗯？（疑問語氣）|huh? (question tag)|助詞|Mày đi đâu đấy hử?|你要去哪啊？|口語，對熟人用|
4835|nhan sắc|姿色|looks; beauty|名詞|Cô ấy có nhan sắc hơn người.|她容貌出眾。||顏色
4836|thể lực|體力|physical strength|名詞|Cầu thủ cần thể lực tốt.|球員需要好體力。||體力
4837|trú ẩn|躲避 / 避難|to take shelter|動詞|Người dân trú ẩn trong hầm.|居民躲進地下室避難。||住隱
4838|tây nam|西南|southwest|名詞|Gió mùa tây nam mang mưa đến.|西南季風帶來雨水。||西南
4839|chiều hướng|趨勢|tendency|名詞|Dịch bệnh có chiều hướng giảm.|疫情有下降趨勢。||
4840|ma quỷ|鬼怪|ghosts and demons|名詞|Trẻ con sợ ma quỷ.|小孩怕鬼。||魔鬼
4841|mấu chốt|關鍵|crux|名詞|Đó là mấu chốt của vấn đề.|那是問題的關鍵。||
4842|quốc tịch|國籍|nationality|名詞|Anh mang quốc tịch nước nào?|你是哪國國籍？||國籍
4843|trăn trở|輾轉 / 掛心|to toss and turn; to worry|動詞|Anh ấy trăn trở suốt đêm.|他整夜輾轉難眠。||
4844|tín|信|trust (Sino)|名詞|Làm ăn phải giữ chữ tín.|做生意要守信用。|uy tín＝信譽|信
4845|Đông Dương|印度支那|Indochina|名詞|Pháp từng cai trị Đông Dương.|法國曾統治印度支那。||東洋
4846|biểu dương|表揚|to commend|動詞|Công ty biểu dương nhân viên giỏi.|公司表揚優秀員工。||表揚
4847|diễn văn|演講稿|speech|名詞|Hiệu trưởng đọc diễn văn khai giảng.|校長宣讀開學致詞。||演文
4848|hù|嚇（南部）|to scare (Southern)|動詞|Đừng hù em!|別嚇我！|北部說 doạ|
4849|khắt khe|苛刻|strict; harsh|形容詞|Mẹ chồng rất khắt khe.|婆婆很嚴苛。||
4850|phang|SKIP
4851|rung động|心動 / 震動|to be moved; to vibrate|動詞|Trái tim tôi rung động.|我心動了。||
4852|sống còn|生死攸關|vital|形容詞|Đây là vấn đề sống còn của công ty.|這是攸關公司存亡的問題。||
4853|áp đặt|強加|to impose|動詞|Đừng áp đặt suy nghĩ lên con.|別把你的想法強加給孩子。||壓
4854|ang|SKIP
4855|che đậy|掩蓋|to cover up|動詞|Họ cố che đậy sự thật.|他們試圖掩蓋真相。||
4856|giết hại|殺害|to kill|動詞|Nhiều động vật bị giết hại trái phép.|許多動物遭非法殺害。||
4857|hợp tác xã|合作社|cooperative|名詞|Hợp tác xã nông nghiệp thu mua lúa.|農業合作社收購稻米。||合作社
4858|trúc|竹子|bamboo|名詞|Cây trúc mọc quanh chùa.|寺廟四周長著竹子。||竹
4859|tử thi|屍體|corpse|名詞|Pháp y khám nghiệm tử thi.|法醫驗屍。||死屍
4860|xà phòng|肥皂|soap|名詞|Rửa tay bằng xà phòng.|用肥皂洗手。|南部說 xà bông|
4861|úp|倒扣 / 蓋|to turn upside down|動詞|Úp bát lên giá cho ráo nước.|把碗倒扣在架上瀝乾。|mì úp＝泡麵|
4862|đổ máu|流血|bloodshed|動詞|Không muốn có thêm đổ máu.|不想再有流血衝突。||
4863|cương vị|職位|position|名詞|Ở cương vị lãnh đạo, anh phải gương mẫu.|身為領導，你得以身作則。||綱位
4864|dĩa|盤子（南部）/ 叉子（北部）|plate (S); fork (N)|名詞|Cho tôi một dĩa cơm tấm.|給我一盤碎米飯。|南北意思不同，要注意|
4865|hoảng|慌|panicked|形容詞|Đừng hoảng, bình tĩnh lại.|別慌，冷靜下來。||慌
4866|miếu|廟|shrine|名詞|Đầu làng có một ngôi miếu nhỏ.|村口有座小廟。||廟
4867|phà|渡輪|ferry|名詞|Đi phà qua sông.|搭渡輪過河。||
4868|thu gom|收集|to collect|動詞|Xe thu gom rác đến mỗi tối.|垃圾車每晚來收垃圾。||收
4869|thông thoáng|通風 / 暢通|airy; clear|形容詞|Căn phòng rất thông thoáng.|房間很通風。||通
4870|thở dài|嘆氣|to sigh|動詞|Ông thở dài một tiếng.|他嘆了一口氣。||
4871|công tố viên|檢察官|prosecutor|名詞|Công tố viên đọc cáo trạng.|檢察官宣讀起訴書。||公訴員
4872|cảnh tượng|景象|scene|名詞|Cảnh tượng sau bão thật đau lòng.|颱風過後的景象令人心痛。||景象
4873|cụt|斷 / 截短|cut short; dead-end|形容詞|Đây là ngõ cụt.|這是死巷。||
4874|diện mạo|面貌|appearance|名詞|Thành phố có diện mạo mới.|城市有了新面貌。||面貌
4875|dòng điện|電流|electric current|名詞|Dòng điện chạy qua dây dẫn.|電流通過導線。||
4876|huyền bí|神秘|mysterious|形容詞|Hang động có vẻ đẹp huyền bí.|洞穴有神秘之美。||玄祕
4877|khánh thành|落成|to inaugurate|動詞|Cây cầu mới được khánh thành.|新橋落成啟用。||慶成
4878|kế thừa|繼承|to inherit|動詞|Kế thừa truyền thống của cha ông.|繼承祖先的傳統。||繼承
4879|lề|邊 / 路肩|margin; roadside|名詞|Đỗ xe sát lề đường.|把車停在路邊。|lề lối＝做法|
4880|lốc|旋風|whirlwind|名詞|Lốc xoáy làm tốc mái nhiều nhà.|龍捲風掀翻許多屋頂。||
4881|lụt|水災|flood|名詞|Miền Trung bị lụt nặng.|中部水災嚴重。||
4882|máy lạnh|冷氣（南部）|air conditioner|名詞|Bật máy lạnh lên đi.|開冷氣吧。|北部說 điều hoà|
4883|nhuyễn|細爛 / 熟練|fine; mushy|形容詞|Xay nhuyễn rau cho bé.|把蔬菜打成泥給寶寶。||軟
4884|sắp sửa|即將|about to|副詞|Tàu sắp sửa chạy.|火車即將開動。||
4885|tai hoạ|災禍|disaster|名詞|Tai hoạ ập đến bất ngờ.|災禍突然降臨。||災禍
4886|thoái hoá|退化|to degenerate|動詞|Ông bị thoái hoá khớp gối.|他有膝關節退化。||退化
4887|tàn sát|屠殺|to massacre|動詞|Quân giặc tàn sát dân làng.|敵軍屠殺村民。||殘殺
4888|đánh bóng|擦亮|to polish|動詞|Đánh bóng giày trước khi đi.|出門前把鞋擦亮。||
4889|đông đúc|擁擠 / 熱鬧|crowded|形容詞|Phố đi bộ rất đông đúc.|步行街很熱鬧。||
4890|đần độn|愚笨|stupid|形容詞|Đừng nghĩ mình đần độn.|別覺得自己笨。||
4891|đồng bọn|同夥|accomplice|名詞|Cảnh sát bắt cả đồng bọn.|警方連同夥一起抓了。||同伴
4892|bịa|捏造|to make up|動詞|Anh ta bịa chuyện.|他編故事。||
4893|chó đẻ|SKIP
4894|sáng tỏ|明朗|clear|形容詞|Vụ việc đã được làm sáng tỏ.|事情已經真相大白。||
4895|thuốc phiện|鴉片|opium|名詞|Thuốc phiện bị cấm.|鴉片是違禁品。||
4896|trục xuất|驅逐出境|to deport|動詞|Người nước ngoài vi phạm bị trục xuất.|違法外國人被驅逐出境。||逐出
4897|võ thuật|武術|martial arts|名詞|Con trai tôi học võ thuật.|我兒子學武術。||武術
4898|ân|恩|grace; favour|名詞|Tôi mang ơn ân nhân cả đời.|我一輩子感念恩人。|ân nhân＝恩人|恩
4899|bỗng nhiên|忽然|suddenly|副詞|Bỗng nhiên trời đổ mưa.|忽然下起雨來。||
4900|cô lập|孤立|isolated|形容詞|Làng bị cô lập vì lũ.|村子因洪水而與外界隔絕。||孤立
4901|cấp bách|緊迫|urgent|形容詞|Đây là vấn đề cấp bách.|這是緊迫的問題。||急迫
4902|tua|快轉 / 流蘇 / 團（旅遊）|to fast-forward; tour|動詞|Tua nhanh đoạn quảng cáo.|快轉跳過廣告。|đi tua＝跟團|
4903|ập|突然湧來|to rush in|動詞|Cảnh sát ập vào nhà.|警察突然衝進屋裡。||
4904|hoài nghi|懷疑|skeptical|動詞|Tôi hoài nghi về câu chuyện đó.|我對那個故事抱持懷疑。||懷疑
4905|lựu đạn|手榴彈|grenade|名詞|Bảo tàng trưng bày lựu đạn thời chiến.|博物館展出戰時的手榴彈。||榴彈
4906|ngừa|預防|to prevent|動詞|Uống thuốc ngừa sốt rét.|吃預防瘧疾的藥。||
4907|quấy rầy|打擾|to bother|動詞|Xin lỗi đã quấy rầy anh.|抱歉打擾你了。||
4908|sơ bộ|初步|preliminary|形容詞|Đây là kết quả sơ bộ.|這是初步結果。||初步
4909|Vĩnh Phúc|永福（省）|Vinh Phuc|名詞|Tam Đảo thuộc tỉnh Vĩnh Phúc.|三島屬永福省。||永福
4910|cầm quyền|執政|in power|動詞|Đảng cầm quyền thông qua chính sách mới.|執政黨通過新政策。||
4911|ngoại trưởng|外交部長|foreign minister|名詞|Ngoại trưởng hai nước hội đàm.|兩國外長會談。||外長
4912|nung|燒製|to fire (kiln)|動詞|Gốm được nung ở nhiệt độ cao.|陶器高溫燒製。||
4913|nội trợ|家務 / 家庭主婦|housework; homemaker|名詞|Mẹ tôi làm nội trợ.|我媽是家庭主婦。||內助
4914|rãnh|溝|groove; ditch|名詞|Nước chảy theo rãnh.|水沿著溝流。|rảnh＝有空（不同字）|
4915|xe ngựa|馬車|horse carriage|名詞|Du khách đi xe ngựa quanh phố.|遊客搭馬車繞城。||
4916|đông lạnh|冷凍|frozen|形容詞|Thịt đông lạnh để được lâu.|冷凍肉可以放很久。||凍冷
4917|Giang|SKIP
4918|cộng hưởng|共鳴 / 加乘|resonance|名詞|Hiệu ứng cộng hưởng giúp tăng doanh số.|加乘效應帶動銷售。||共響
4919|hưng phấn|興奮|excited|形容詞|Cả đội đang rất hưng phấn.|全隊非常興奮。||興奮
4920|mẫu giáo|幼稚園|kindergarten|名詞|Con tôi học mẫu giáo.|我孩子讀幼稚園。||母教
4921|trắc nghiệm|選擇題 / 測驗|multiple-choice test|名詞|Bài thi trắc nghiệm có bốn mươi câu.|選擇題考試有四十題。||測驗
4922|vệ sĩ|保鏢|bodyguard|名詞|Ca sĩ đi cùng hai vệ sĩ.|歌手有兩名保鏢隨行。||衛士
4923|xung|衝 / 生氣|to clash; angry|形容詞|Nghe vậy anh ta nổi xung.|聽到這話他火冒三丈。|xung đột＝衝突|衝
4924|ám|纏 / 燻黑|to haunt; to blacken|動詞|Căn nhà bị ma ám.|這房子鬧鬼。||
4925|cao nguyên|高原|plateau|名詞|Cao nguyên đá Đồng Văn rất hùng vĩ.|同文石高原非常壯觀。||高原
4926|chằm chằm|目不轉睛|staringly|副詞|Anh ta nhìn tôi chằm chằm.|他直盯著我看。||
4927|dân trí|民智|education level of the people|名詞|Cần nâng cao dân trí.|需要提高民眾知識水準。||民智
4928|dép|拖鞋 / 涼鞋|sandals; slippers|名詞|Đi dép vào kẻo bẩn chân.|穿上拖鞋免得腳髒。||
4929|giáng|降 / 打|to descend; to strike|動詞|Lễ Giáng sinh vào ngày hai mươi lăm tháng mười hai.|聖誕節在十二月二十五日。|Giáng sinh＝聖誕|降
4930|loét|潰瘍|ulcer|名詞|Anh ấy bị loét dạ dày.|他有胃潰瘍。||
4931|lãng quên|遺忘|to forget|動詞|Những ký ức không bao giờ bị lãng quên.|這些記憶永遠不會被遺忘。||浪
4932|sáo|笛子 / 八哥|flute; myna|名詞|Anh ấy thổi sáo rất hay.|他吹笛子吹得很好。||
4933|sọc|條紋|stripe|名詞|Áo sơ mi kẻ sọc.|條紋襯衫。||
4934|ăn kiêng|節食|to diet|動詞|Tôi đang ăn kiêng để giảm cân.|我正在節食減肥。||
4935|ốp|貼 / 殼|to cover; case|動詞|Ốp gạch nhà tắm.|浴室貼磁磚。|ốp lưng＝手機殼|
4936|du học sinh|留學生|international student|名詞|Ở Đài Loan có nhiều du học sinh Việt Nam.|台灣有很多越南留學生。||遊學生
4937|dày đặc|密集|dense|形容詞|Lịch làm việc dày đặc.|工作行程很密集。||
4938|hệ số|係數|coefficient|名詞|Môn toán nhân hệ số hai.|數學成績乘以二。||係數
4939|măng|竹筍|bamboo shoot|名詞|Canh măng vịt rất ngon.|鴨肉筍湯很好喝。||
4940|ngân|銀 / 迴盪|silver (Sino); to resonate|動詞|Tiếng chuông ngân vang.|鐘聲迴盪。|ngân hàng＝銀行|銀
4941|nữ thần|女神|goddess|名詞|Tượng Nữ thần Tự do ở New York.|紐約的自由女神像。||女神
4942|quạ|烏鴉|crow|名詞|Con quạ đậu trên cành cây.|烏鴉停在樹枝上。||
4943|sắm|購置|to shop for|動詞|Mẹ đi sắm đồ Tết.|媽媽去辦年貨。||
4944|bến xe|客運站|bus station|名詞|Bến xe Miền Đông rất đông.|東部客運站人很多。||
4945|chi hội|分會|branch association|名詞|Chi hội phụ nữ họp hàng tháng.|婦女分會每月開會。||支會
4946|diễu hành|遊行|to parade|動詞|Đoàn xe diễu hành qua phố.|車隊沿街遊行。||
4947|gân|筋 / 青筋|tendon; vein|名詞|Tay ông nổi gân xanh.|他手上浮出青筋。||筋
4948|khiêu dâm|SKIP
4949|sâu rộng|深遠廣泛|extensive|形容詞|Hai nước hợp tác sâu rộng.|兩國全面深入合作。||
4950|sở dĩ|之所以|the reason why|連詞|Sở dĩ tôi đến muộn là vì kẹt xe.|我之所以遲到是因為塞車。||所以
4951|truyện ngắn|短篇小說|short story|名詞|Tôi thích đọc truyện ngắn.|我喜歡讀短篇小說。||
4952|xoang|鼻竇|sinus|名詞|Tôi bị viêm xoang.|我有鼻竇炎。||腔
4953|Hà Giang|河江（省）|Ha Giang|名詞|Mùa hoa tam giác mạch ở Hà Giang.|河江的蕎麥花季。||河江
4954|Trưng|徵（二徵夫人）|Trung (Trung Sisters)|名詞|Hai Bà Trưng là anh hùng dân tộc.|二徵夫人是民族英雄。||徵
4955|bầu dục|橢圓|oval|形容詞|Cái bàn hình bầu dục.|橢圓形的桌子。||
4956|lên lớp|上課 / 升級|to teach a class; to move up a grade|動詞|Thầy lên lớp lúc bảy giờ.|老師七點上課。|口語 lên lớp＝說教|
4957|ăn nói|說話（談吐）|way of speaking|動詞|Cô ấy ăn nói rất khéo.|她很會說話。||
4958|hỗn độn|混亂|chaotic|形容詞|Âm thanh hỗn độn ngoài chợ.|市場裡聲音嘈雜。||混沌
4959|khay|托盤|tray|名詞|Bưng khay trà ra mời khách.|端茶盤出來招待客人。||
4960|kết bạn|交朋友|to make friends|動詞|Tôi muốn kết bạn với người Việt.|我想交越南朋友。||結伴
4961|linh cảm|直覺 / 預感|hunch|名詞|Tôi có linh cảm không lành.|我有不祥的預感。||靈感
4962|lắng|沉澱 / 平息|to settle|動詞|Để nước lắng rồi mới dùng.|讓水沉澱再用。|lắng nghe＝傾聽|
4963|mủ|膿 / 樹汁|pus; sap|名詞|Vết thương bị mủ.|傷口化膿了。|mủ cao su＝橡膠汁|
4964|thuộc địa|殖民地|colony|名詞|Việt Nam từng là thuộc địa của Pháp.|越南曾是法國殖民地。||屬地
4965|tổng bí thư|總書記|general secretary|名詞|Tổng bí thư phát biểu tại đại hội.|總書記在大會上致詞。||總祕書
4966|đậm đà|濃郁|rich (flavour)|形容詞|Nước dùng phở đậm đà.|河粉湯頭濃郁。||
4967|bế tắc|僵局 / 走投無路|deadlock|形容詞|Đàm phán rơi vào bế tắc.|談判陷入僵局。||閉塞
4968|cao học|碩士班|master's program|名詞|Chị ấy đang học cao học.|她正在讀碩士班。||高學
4969|nguyên lý|原理|principle|名詞|Nguyên lý hoạt động của máy rất đơn giản.|機器運作原理很簡單。||原理
4970|trĩ|痔瘡|hemorrhoids|名詞|Ngồi lâu dễ bị trĩ.|久坐容易長痔瘡。||痔
4971|xôn xao|議論紛紛|abuzz|形容詞|Dư luận xôn xao về vụ việc.|輿論對此議論紛紛。||
4972|đá quý|寶石|gemstone|名詞|Nhẫn có gắn đá quý.|戒指鑲有寶石。||
4973|độc tố|毒素|toxin|名詞|Gan giúp lọc độc tố.|肝臟幫助過濾毒素。||毒素
4974|cưỡng|強迫 / 抗拒|to force; to resist|動詞|Không ai cưỡng lại được món này.|沒人抗拒得了這道菜。|cưỡng ép＝強迫|強
4975|kết liễu|結束（生命）|to end; to finish off|動詞|Phát súng kết liễu con thú.|一槍了結那隻野獸。||結了
4976|ngoan ngoãn|乖巧|well-behaved|形容詞|Bé rất ngoan ngoãn.|寶寶很乖巧。||
4977|sát cánh|並肩|side by side|動詞|Chúng ta sát cánh bên nhau.|我們並肩同行。||
4978|tình cảnh|處境|plight|名詞|Tình cảnh gia đình rất khó khăn.|家庭處境很艱難。||情景
4979|độc nhất|唯一|unique|形容詞|Đây là chiếc duy nhất, độc nhất vô nhị.|這是獨一無二的一件。||獨一
4980|bán đảo|半島|peninsula|名詞|Bán đảo Sơn Trà ở Đà Nẵng.|峴港的山茶半島。||半島
4981|bón|施肥 / 餵|to fertilize; to feed|動詞|Bón phân cho cây.|給植物施肥。||
4982|chải|梳 / 刷|to comb; to brush|動詞|Chải tóc trước khi đi.|出門前梳頭。|chải răng＝刷牙（南部）|
4983|cuồng|狂|crazy; fanatical|形容詞|Anh ấy cuồng bóng đá.|他是足球狂。||狂
4984|cá sấu|鱷魚|crocodile|名詞|Trại cá sấu ở Long Xuyên.|龍川的鱷魚養殖場。||
4985|di cư|遷徙 / 移民|to migrate|動詞|Chim di cư về phương Nam.|鳥兒向南遷徙。||移居
4986|lạnh lẽo|冷清|cold; desolate|形容詞|Căn nhà lạnh lẽo không người.|房子冷冷清清沒人住。||
4987|mong manh|脆弱|fragile|形容詞|Hy vọng rất mong manh.|希望很渺茫。||
4988|mí|眼皮|eyelid|名詞|Cô ấy có mắt hai mí.|她是雙眼皮。||
4989|ròng|純 / 連續|pure; on end|形容詞|Mưa ròng rã ba ngày.|連下三天雨。|ròng rã＝持續不斷|
4990|tu viện|修道院|monastery|名詞|Tu viện nằm trên đồi.|修道院位於山丘上。||修院
4991|tuổi tác|年紀|age|名詞|Tuổi tác không quan trọng.|年紀不重要。||
4992|ưu|優 / 憂|excellent; worry (Sino)|形容詞|Em đạt loại ưu.|我得了優等。|ưu điểm＝優點|優
4993|giai|SKIP
4994|giã|搗 / 舂|to pound|動詞|Giã tỏi ớt làm nước chấm.|搗蒜和辣椒做沾醬。|giã từ＝告別|
4995|hồn nhiên|天真無邪|innocent; natural|形容詞|Nụ cười hồn nhiên của trẻ thơ.|孩子天真無邪的笑容。||渾然
4996|nấy|那（ai nấy）|that (correlative)|代名詞|Ai nấy đều vui vẻ.|人人都很開心。|ai nấy＝每個人|
4997|thoả|滿足 / 妥|satisfied; settled|形容詞|Ăn cho thoả thích.|吃個痛快。|thoả thuận＝協議|妥
4998|triều đình|朝廷|royal court|名詞|Triều đình nhà Nguyễn đóng ở Huế.|阮朝朝廷設在順化。||朝廷
4999|tự ý|擅自|without permission|副詞|Không được tự ý nghỉ học.|不可擅自缺課。||自意
5000|giáo sĩ|傳教士|missionary; clergy|名詞|Các giáo sĩ phương Tây đến Việt Nam từ thế kỷ mười bảy.|西方傳教士自十七世紀來到越南。||教士
`;
