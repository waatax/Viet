/**
 * Top 1,000 校正層（人工逐條校對）
 *
 * 原始詞頻庫的釋義取自開放辭典的古漢語／方言義項（例：đang＝「次 / 鼎」、xe＝「搓 / 紡」），
 * 例句多為片語或模板句。本檔逐條改寫為現代台灣華語常用義、真實完整例句與華語母語者易錯提示，
 * 由 vocabularyQuality.js 在載入時覆蓋 frequencyVocabularyData.js 的對應欄位。
 *
 * 每列格式：rank|viet|zh|en|pos|example|exampleZh|note
 * - example 留空＝沿用原檔例句（僅用於原句已正確者）
 * - zh 為 SKIP＝語料雜訊（單一字母或英文冠詞），不列入學習卡
 * 驗證：node scripts/test_vocab_quality.mjs
 */
export const TOP1K_CURATED_ROWS = `
1|không|不 / 沒有|not; no|副詞|||句尾的 không 表疑問：Có … không? 是最基本的問句框架
2|là|是|to be|動詞|||只接名詞；形容詞前不用 là（說 Tôi vui，不說 Tôi là vui）
3|tôi|我|I; me|代名詞|||中性自稱；與熟人對話常改用 em、anh、mình
4|có|有|to have; there is|動詞|||Có … không? 問「有沒有／是不是」
5|của|的（所屬）|of; belonging to|介詞|||語序與中文相反：điện thoại của tôi＝我的手機
6|và|和 / 以及|and|連詞|||
7|anh|哥哥 / 你（對年長男性）|older brother; you (to a man)|代名詞|||越語依年齡關係選稱謂，同一個人可能是 anh 也可能是 em
8|được|可以 / 得以|can; to get to|助詞|||動詞前表受益（được mời 受邀）；動詞後表能夠（làm được 做得到）
9|đã|已經（過去）|already; past marker|副詞|||時間明確時常省略；常與句尾 rồi 搭配
10|cho|給 / 讓 / 為了|to give; for; to let|介詞|||點餐起手式：Cho tôi … ＝請給我…
11|sẽ|將會|will (future)|副詞|||
12|đó|那 / 那裡|that; there|代名詞|||
13|các|各位 / 們（複數）|plural marker|限定詞|||các bạn＝你們；các 指全部，những 指其中一些
14|người|人|person; people|名詞|||
15|trong|在…裡面|in; inside|介詞|||
16|với|和…一起 / 對|with; to|介詞|||
17|này|這 / 這個|this|限定詞|||放在名詞後：cái này 這個（語序與中文相反）
18|đi|去 / 走|to go|動詞|||句尾 đi 表催促：Ăn đi! 吃吧！
19|phải|必須 / 對的 / 右邊|must; right|動詞|||bên phải＝右邊；đúng 才是「正確」的一般說法
20|gì|什麼|what|代名詞|||放句尾：Bạn ăn gì? 你吃什麼？
21|những|一些 / 那些（複數）|plural marker (some)|限定詞|||
22|ở|在 / 住在|at; in; to live|介詞|||
23|để|為了 / 放|in order to; to put|連詞|||
24|cô|小姐 / 阿姨 / 女老師|miss; aunt; female teacher|代名詞|||
25|làm|做 / 工作|to do; to make; to work|動詞|||
26|rồi|了 / 已經|already|助詞|||句尾 rồi 表完成：Tôi ăn rồi.
27|ta|我們 / 咱|we; us (informal)|代名詞|Ta đi thôi!|咱們走吧！|chúng ta 的簡稱，也常見於影視中的自稱
28|đây|這裡 / 這|here; this|代名詞|Tôi ở đây.|我在這裡。|介紹時用：Đây là bạn tôi.
29|em|弟妹 / 你（對晚輩）/ 我（對長輩）|younger sibling; I or you (younger)|代名詞|Em ăn cơm chưa?|你吃飯了嗎？|對年長者自稱 em，對年幼者稱對方 em
30|biết|知道 / 會|to know; can|動詞|||biết + 動詞＝會做某事
31|ông|爺爺 / 先生（年長男性）|grandfather; sir|代名詞|Ông ấy là bác sĩ.|他是醫生。|稱呼年長男性或正式場合的男士
32|đến|到 / 來到|to arrive; to come|動詞|Tôi đến lúc tám giờ.|我八點到。|
33|khi|當…的時候|when|連詞|Khi rảnh, tôi đọc sách.|有空的時候，我看書。|
34|lại|又 / 再 / 回來|again; back|副詞|Anh ấy lại đến muộn.|他又遲到了。|放動詞前＝又；放動詞後＝回來（quay lại）
35|về|回 / 關於|to return; about|動詞|Tôi về nhà lúc sáu giờ.|我六點回家。|也可當「關於」：nói về Việt Nam
36|nó|他 / 它（非正式）|he; she; it (informal)|代名詞|Nó là em tôi.|他是我弟弟。|對長輩使用不禮貌，多用於小孩、動物、物品
37|cũng|也|also; too|副詞|Tôi cũng thích phở.|我也喜歡河粉。|放在動詞前
38|con|孩子 / 隻（動物量詞）|child; classifier for animals|名詞|Con của tôi năm tuổi.|我的孩子五歲。|量詞用法：một con mèo 一隻貓
39|nhưng|但是|but|連詞|Phòng nhỏ nhưng rất sạch.|房間小，但很乾淨。|
40|nói|說 / 講|to speak; to say|動詞|Anh nói chậm một chút nhé.|請你說慢一點。|
41|có thể|可以 / 可能|can; may|動詞|Tôi có thể ngồi ở đây không?|我可以坐這裡嗎？|
42|vào|進入 / 在（時間）|to enter; on (time)|動詞|Mời anh vào nhà.|請進屋。|也接時間：vào thứ hai 在星期一
43|mà|而 / 卻 / 的（關係詞）|but; that (relative)|連詞|Cái áo mà tôi mua rất đẹp.|我買的那件衣服很漂亮。|連接修飾語，也可表轉折
44|đang|正在|in the process of (-ing)|副詞|Tôi đang ăn cơm.|我正在吃飯。|進行式標記，放在動詞前
45|như|像 / 如同|like; as|介詞|Cô ấy hát như ca sĩ.|她唱歌像歌手一樣。|
46|cậu|你（平輩朋友）/ 舅舅|you (friend); maternal uncle|代名詞|Cậu đi đâu đấy?|你要去哪裡？|常與 tớ 配對，朋友間使用
47|còn|還 / 還有 / 至於|still; and what about|副詞|Tôi còn nhiều việc.|我還有很多事。|Còn bạn? ＝那你呢？
48|thì|就 / 則（承接）|then; as for|助詞|Nếu mưa thì tôi ở nhà.|如果下雨，我就待在家。|常見句型 Nếu … thì …
49|cái|個（物品量詞）|classifier for objects|量詞|Cho tôi hai cái bánh.|請給我兩個餅。|
50|chúng ta|我們（包含對方）|we (including you)|代名詞|Chúng ta đi ăn nhé.|我們去吃飯吧。|包含聽話者；不包含時用 chúng tôi
51|ấy|那 / 他那個（指示）|that (aforementioned)|限定詞|Cô ấy là bạn tôi.|她是我朋友。|稱謂 + ấy＝第三人稱：anh ấy 他、cô ấy 她
52|chỉ|只 / 指|only; to point|副詞|Tôi chỉ uống nước.|我只喝水。|
53|bạn|朋友 / 你|friend; you|代名詞|||同輩間通用的「你」，不確定稱謂時最安全
54|nhiều|多 / 很多|many; much|形容詞|Hôm nay có nhiều khách.|今天客人很多。|
55|muốn|想要|to want|動詞|||
56|từ|從 / 詞|from; word|介詞|Tôi đến từ Đài Loan.|我來自台灣。|名詞義「詞」：từ mới 生詞
57|sao|為什麼 / 怎麼 / 星星|why; how; star|副詞|Sao anh không đến?|你為什麼沒來？|Thế nào 問狀況，sao 常問原因
58|rất|很 / 非常|very|副詞|Món này rất ngon.|這道菜很好吃。|放在形容詞前；lắm 放形容詞後
59|nào|哪 / 哪個|which|限定詞|Bạn thích món nào?|你喜歡哪道菜？|
60|trên|在…上面|on; above|介詞|Sách ở trên bàn.|書在桌上。|
61|mình|我 / 自己|I; oneself|代名詞|Mình là sinh viên.|我是學生。|朋友間親切的自稱
62|họ|他們 / 姓氏|they; family name|代名詞|Họ đến từ Hà Nội.|他們來自河內。|họ Nguyễn＝姓阮
63|năm|年 / 五|year; five|名詞|Năm nay tôi ba mươi tuổi.|我今年三十歲。|同時是數字 5
64|hơn|更 / 比…多|more than|副詞|Hôm nay nóng hơn hôm qua.|今天比昨天熱。|比較句：形容詞 + hơn + 對象
65|bị|被（不好的事）|passive (adverse)|助詞|Tôi bị cảm.|我感冒了。|表不好的遭遇；好事用 được
66|vậy|那麼 / 這樣|so; like that|副詞|Vậy thì chúng ta đi thôi.|那我們就走吧。|
67|thấy|看見 / 覺得|to see; to feel|動詞|Tôi thấy món này hơi cay.|我覺得這道菜有點辣。|
68|nếu|如果|if|連詞|Nếu rảnh, bạn hãy đến nhé.|如果有空，你就來吧。|
69|thế|那樣 / 這麼|so; like that|副詞|Sao anh về sớm thế?|你怎麼這麼早回來？|thế nào＝怎麼樣
70|việc|事情 / 工作|matter; work|名詞|Tôi có việc gấp.|我有急事。|
71|cần|需要|to need|動詞|Tôi cần một cái túi.|我需要一個袋子。|
72|đâu|哪裡 / 才不（否定）|where; not at all|代名詞|Nhà vệ sinh ở đâu?|廁所在哪裡？|句尾的 đâu 可表否定語氣：Không đâu!
73|nhà|家 / 房子|house; home|名詞|||
74|tới|到 / 下一個|to arrive; next|動詞|Xe tới rồi.|車到了。|tuần tới＝下週
75|lên|上 / 往上|to go up|動詞|Mời chị lên xe.|請上車。|
76|sau|之後 / 後面|after; behind|介詞|Sau bữa tối, tôi đi dạo.|晚餐後我去散步。|
77|thôi|而已 / 算了 / 吧|only; let's; stop|助詞|Một chút thôi.|一點點而已。|Thôi! 也有「算了、不要了」的意思
78|cả|全部 / 連…都|all; even|限定詞|Cả nhà tôi đều khỏe.|我全家都很好。|
79|ai|誰|who|代名詞|Ai gọi điện cho tôi?|誰打電話給我？|
80|theo|跟隨 / 根據|to follow; according to|動詞|Theo tôi, món này ngon hơn.|依我看，這道比較好吃。|
81|nên|應該 / 所以|should; therefore|連詞|Bạn nên nghỉ một chút.|你應該休息一下。|Vì … nên … ＝因為…所以…
82|chuyện|事情 / 故事|story; matter|名詞|Có chuyện gì vậy?|發生什麼事了？|
83|sự|（動詞、形容詞名詞化）|nominalizer|名詞|Cảm ơn sự giúp đỡ của anh.|謝謝你的幫忙。|sự + 動詞＝抽象名詞
84|chưa|還沒|not yet|副詞|Tôi chưa ăn sáng.|我還沒吃早餐。|句尾問：Ăn chưa? 吃了嗎？回答 Rồi 或 Chưa
85|nghĩ|想 / 思考|to think|動詞|Tôi nghĩ anh ấy đúng.|我想他是對的。|
86|vì|因為|because|連詞|Tôi nghỉ vì bị ốm.|我因為生病請假。|
87|nữa|再 / 還要|more; further|副詞|Cho tôi một ly nữa.|請再給我一杯。|放句尾
88|đấy|那裡 / 喔（語氣）|there; emphatic particle|助詞|Anh đi đâu đấy?|你要去哪裡呀？|句尾加強語氣，帶親切感
89|hắn|他（帶貶意）|he (pejorative)|代名詞|Tôi không tin hắn.|我不相信他。|語氣不客氣，日常對人別用
90|điều|事 / 件（抽象）|thing; matter|名詞|Điều này rất quan trọng.|這件事很重要。|
91|ngày|日 / 天|day|名詞|Hôm nay là ngày đẹp trời.|今天是好天氣的日子。|
92|mới|新的 / 才 / 剛|new; just|形容詞|Tôi mua điện thoại mới.|我買了新手機。|放動詞前＝才、剛
93|trước|之前 / 前面|before; in front|介詞|Rửa tay trước khi ăn.|吃飯前先洗手。|
94|tại|在 / 由於|at; because of|介詞|Tôi làm việc tại Hà Nội.|我在河內工作。|tại sao＝為什麼
95|thứ|第 / 種 / 星期|ordinal; kind; day of week|名詞|Thứ hai tôi đi làm.|星期一我去上班。|thứ hai 也可指「第二」
96|khác|別的 / 不同|other; different|形容詞|Cho tôi xem cái khác.|請給我看別的。|
97|mọi|每 / 所有|every; all|限定詞|Mọi người đều đồng ý.|大家都同意。|mọi người＝大家
98|hay|或者 / 常常 / 好看|or; often; interesting|連詞|Anh uống trà hay cà phê?|你喝茶還是咖啡？|形容詞義：Phim này hay. 這部片很好看
99|nhất|最|the most|副詞|Món này ngon nhất.|這道最好吃。|形容詞 + nhất＝最…
100|chứ|當然 / 吧（確認）|of course; right?|助詞|Anh đi chứ?|你會去吧？|期待對方肯定時使用
101|vẫn|仍然|still|副詞|Trời vẫn mưa.|天還在下雨。|
102|thật|真的|true; really|副詞|Thật không?|真的嗎？|
103|à|啊 / 嗎（句尾）|oh; question particle|助詞|Anh đến rồi à?|你到了啊？|確認已猜到的事
104|nghe|聽|to listen; to hear|動詞|Tôi thích nghe nhạc Việt.|我喜歡聽越南音樂。|
105|qua|經過 / 過去的|to pass; last|動詞|Hôm qua tôi đi qua chợ.|昨天我經過市場。|hôm qua＝昨天
106|đúng|對 / 正確|correct; right|形容詞|Bạn nói đúng.|你說得對。|
107|mẹ|媽媽|mother|名詞|Mẹ tôi nấu ăn rất ngon.|我媽媽很會做菜。|
108|hãy|請 / 應（祈使）|please; let's (imperative)|副詞|Hãy nghe tôi nói.|請聽我說。|
109|chúng|他們 / 它們|they (often objects, animals)|代名詞|Chúng rất đáng yêu.|牠們很可愛。|單用多指動物、物品；chúng tôi 我們
110|cùng|一起 / 相同|together; same|副詞|Chúng ta cùng đi nhé.|我們一起去吧。|
111|lần|次|time (occurrence)|量詞|Đây là lần đầu tôi đến Việt Nam.|這是我第一次來越南。|
112|quá|太 / 超過|too; excessively|副詞|Đắt quá!|太貴了！|形容詞 + quá；殺價必備
113|bà|奶奶 / 女士（年長女性）|grandmother; madam|代名詞|Bà tôi năm nay tám mươi tuổi.|我奶奶今年八十歲。|
114|nước|水 / 國家|water; country|名詞|Cho tôi một chai nước.|請給我一瓶水。|nước Việt Nam＝越南這個國家
115|cách|方法 / 距離|way; method; away from|名詞|Cách này dễ hơn.|這個方法比較簡單。|
116|không thể|不能 / 無法|cannot|動詞|Tôi không thể đến hôm nay.|我今天不能來。|
117|đừng|不要|don't|副詞|Đừng lo!|別擔心！|
118|tên|名字|name|名詞|Tên của bạn là gì?|你叫什麼名字？|
119|giờ|點鐘 / 小時 / 現在|hour; o'clock; now|名詞|Bây giờ là mấy giờ?|現在幾點？|
120|đưa|遞給 / 帶去|to hand; to take someone|動詞|Anh đưa em ra sân bay nhé.|我送你去機場吧。|
121|ngay|立刻 / 就在|right away; right at|副詞|Tôi đến ngay.|我馬上到。|
122|mày|你（粗俗或極親近）|you (rude or intimate)|代名詞|Mày đi đâu đấy?|你去哪？|只用於非常親近的同輩，對陌生人很失禮
123|giúp|幫助|to help|動詞|Bạn giúp tôi được không?|你可以幫我嗎？|
124|tớ|我（朋友間）|I (between friends)|代名詞|Tớ đói quá.|我好餓。|與 cậu 配對，學生常用
125|nhìn|看 / 注視|to look at|動詞|Nhìn kìa, đẹp quá!|你看，好美！|xem 看節目；nhìn 用眼睛看
126|nhau|互相|each other|副詞|Chúng ta gặp nhau ở quán cà phê.|我們在咖啡館見面吧。|
127|chết|死 / 糟了|to die; damn|動詞|Cây này chết rồi.|這棵植物死了。|口語 Chết rồi! ＝糟了！
128|lúc|時候 / 時刻|moment; at (time)|名詞|Lúc đó tôi đang ngủ.|那時候我正在睡覺。|
129|xem|看（節目、東西）|to watch; to look at|動詞|Tối nay chúng ta xem phim nhé.|今晚我們看電影吧。|
130|gặp|見面 / 遇到|to meet|動詞|Rất vui được gặp anh.|很高興見到你。|
131|bằng|用 / 搭乘 / 等於|by means of; equal|介詞|Tôi đi bằng xe máy.|我騎機車去。|
132|tất cả|全部 / 所有|all|限定詞|Tất cả là hai trăm nghìn.|總共二十萬盾。|結帳常聽到
133|bên|邊 / 方|side|名詞|Ngân hàng ở bên trái.|銀行在左邊。|
134|lấy|拿 / 取|to take; to get|動詞|Tôi lấy cái này.|我要這個。|購物時表示決定要買
135|đều|都 / 均勻|all; evenly|副詞|Chúng tôi đều là người Đài Loan.|我們都是台灣人。|
136|cháu|孫子 / 姪甥 / 晚輩自稱|grandchild; niece; nephew|代名詞|Cháu chào ông ạ.|爺爺您好。|對祖父母輩或父母的兄姊說話時自稱 cháu
137|gọi|叫 / 打電話|to call|動詞|Tôi sẽ gọi cho bạn.|我會打給你。|
138|chính|正是 / 主要|exactly; main|副詞|Chính anh ấy đã giúp tôi.|正是他幫了我。|
139|cao|高|tall; high|形容詞|Anh ấy rất cao.|他很高。|
140|nơi|地方|place|名詞|Đây là nơi tôi sinh ra.|這裡是我出生的地方。|
141|do|由於 / 由|due to; by|介詞|Chuyến bay bị hoãn do trời mưa.|班機因下雨延誤。|
142|thời gian|時間|time|名詞|Tôi không có thời gian.|我沒有時間。|
143|từng|曾經 / 每一|once; ever; each|副詞|Tôi từng sống ở Huế.|我曾住在順化。|
144|đường|路 / 糖|road; sugar|名詞|Đường này rất đông xe.|這條路車很多。|點飲料：ít đường＝少糖
145|lớn|大|big|形容詞|Thành phố này rất lớn.|這座城市很大。|
146|tháng|月|month|名詞|Tháng sau tôi về Đài Loan.|下個月我回台灣。|
147|tiền|錢|money|名詞|||
148|lắm|很（放句尾）|very (after adjective)|副詞|Ngon lắm!|很好吃！|與 rất 同義但位置在後，口語常用
149|sống|生活 / 活著 / 生的|to live; raw|動詞|Tôi sống ở Sài Gòn.|我住在西貢。|
150|dùng|使用 / 用餐（禮貌）|to use; to have (polite)|動詞|Tôi dùng thẻ được không?|我可以用卡嗎？|
151|hoặc|或者|or|連詞|Bạn có thể đi xe buýt hoặc taxi.|你可以搭公車或計程車。|問句選擇用 hay，陳述選擇用 hoặc
152|xe|車|vehicle|名詞|Xe của tôi màu đen.|我的車是黑色的。|xe máy 機車；xe buýt 公車
153|ăn|吃|to eat|動詞|||
154|bố|爸爸（北部）|father (Northern)|名詞|Bố tôi là giáo viên.|我爸爸是老師。|南部常說 ba
155|hết|完 / 用光|to run out; finished|動詞|Hết tiền rồi.|錢用完了。|Hết hàng＝賣完了
156|đầu|頭 / 開始|head; beginning|名詞|Tôi bị đau đầu.|我頭痛。|đầu tiên＝第一個
157|ngoài|外面 / 除了|outside; besides|介詞|Trời ngoài kia lạnh lắm.|外面很冷。|
158|chị|姊姊 / 妳（對年長女性）|older sister; you (to a woman)|代名詞|Chị ơi, cho em hỏi.|姊姊，請問一下。|對店家年輕女性也常用
159|hiểu|懂 / 理解|to understand|動詞|Tôi không hiểu.|我不懂。|
160|số|數字 / 號碼|number|名詞|Số điện thoại của bạn là gì?|你的電話號碼是多少？|
161|bọn|（一群人，非正式）|group of people (informal)|名詞|Bọn mình đi ăn đi.|我們去吃東西吧。|bọn mình＝我們這幫人，親近時用
162|Việt Nam|越南|Vietnam|名詞|Tôi rất thích Việt Nam.|我很喜歡越南。|
163|mất|失去 / 花費（時間）|to lose; to take (time)|動詞|Tôi bị mất ví.|我的皮夾不見了。|Mất hai tiếng＝花兩小時
164|luôn|總是 / 立刻|always; right away|副詞|Cô ấy luôn đúng giờ.|她總是很準時。|
165|hàng|商品 / 排 / 店|goods; row; shop|名詞|Hàng này mới về.|這批貨剛到。|
166|thêm|加 / 再|to add; more|動詞|Cho tôi thêm đá.|請幫我加冰塊。|
167|thích|喜歡|to like|動詞|Tôi thích uống cà phê.|我喜歡喝咖啡。|
168|bộ|套 / 部（部門）|set; ministry|名詞|Tôi mua một bộ quần áo.|我買了一套衣服。|
169|bé|小 / 小孩|small; little kid|形容詞|Em bé đang ngủ.|小寶寶正在睡覺。|
170|giết|殺|to kill|動詞|Xin đừng giết con mèo đó.|請別殺那隻貓。|新聞與影視常見，日常少用
171|khỏi|離開 / 痊癒 / 不用|out of; recovered|動詞|Tôi đã khỏi bệnh.|我病好了。|
172|xin|請 / 請求|please; to ask for|動詞|Xin cảm ơn.|謝謝。|禮貌開頭：Xin + 動詞
173|sử dụng|使用|to use|動詞|Tôi không biết sử dụng máy này.|我不會用這台機器。|
174|mang|攜帶 / 拿|to carry; to bring|動詞|Tôi quên mang ô.|我忘了帶傘。|mang về＝外帶
175|tay|手|hand; arm|名詞|Rửa tay trước khi ăn.|吃飯前要洗手。|
176|phòng|房間|room|名詞|Tôi muốn đặt một phòng đơn.|我想訂一間單人房。|
177|học|學 / 讀書|to study; to learn|動詞|Tôi đang học tiếng Việt.|我正在學越南語。|
178|xin lỗi|對不起|sorry; excuse me|動詞|Xin lỗi, tôi đến muộn.|對不起，我遲到了。|也可當「不好意思，請問…」
179|vừa|剛剛 / 剛好 / 一邊|just; fitting; while|副詞|Tôi vừa ăn xong.|我剛吃完。|vừa … vừa … ＝一邊…一邊…
180|gần|近|near|形容詞|Khách sạn ở gần biển.|飯店靠近海邊。|
181|trường|學校|school|名詞|Con tôi học ở trường này.|我孩子在這間學校上學。|
182|xuống|下 / 往下|to go down|動詞|Tôi xuống xe ở đây.|我在這裡下車。|
183|chiếc|輛 / 個（單件物品）|classifier for vehicles, items|量詞|Tôi mua một chiếc xe máy.|我買了一輛機車。|
184|cứ|儘管 / 一直|just go on; keep on|副詞|Anh cứ nói đi.|你儘管說吧。|
185|ngài|您（敬稱）|sir (formal)|代名詞|Xin mời ngài ngồi.|請您就座。|外交或非常正式的場合
186|nay|現在 / 今|now; this|名詞|Năm nay tôi đi Đà Nẵng.|今年我去峴港。|hôm nay 今天；năm nay 今年
187|yêu|愛|to love|動詞|Tôi yêu Việt Nam.|我愛越南。|
188|nhé|喔 / 吧（親切語氣）|okay? (friendly particle)|助詞|Mai gặp nhé!|明天見喔！|
189|mấy|幾 / 幾個|how many (few)|限定詞|Bạn có mấy người con?|你有幾個孩子？|預期數量少（10 以下）用 mấy；多用 bao nhiêu
190|cuộc|場（活動、事件）|classifier for events|量詞|Cuộc họp bắt đầu lúc chín giờ.|會議九點開始。|
191|chắc|大概 / 確實|probably; firm|副詞|Chắc anh ấy quên rồi.|他大概忘了。|
192|hỏi|問|to ask|動詞|Cho tôi hỏi một chút.|請問一下。|
193|bỏ|放棄 / 丟掉 / 放|to quit; to throw away|動詞|Đừng bỏ rác ở đây.|不要在這裡丟垃圾。|
194|chào|打招呼 / 你好|to greet; hello|動詞|Chào chị, chị khỏe không?|姊姊妳好，妳好嗎？|
195|loại|種類|type; kind|名詞|Bạn thích loại nào?|你喜歡哪一種？|
196|bao giờ|什麼時候|when|副詞|Bao giờ anh về?|你什麼時候回來？|句首問未來；句尾問過去
197|hả|啊？ / 嗎（口語）|huh? (casual question)|助詞|Anh nói gì hả?|你說什麼啊？|對長輩不要用
198|nhanh|快|fast|形容詞|Anh đi nhanh lên!|你快一點！|
199|giống|像 / 相似|similar; to resemble|形容詞|Con giống mẹ.|孩子長得像媽媽。|
200|gia đình|家庭 / 家人|family|名詞|Gia đình tôi có bốn người.|我家有四個人。|
201|chỗ|地方 / 座位|place; seat|名詞|Chỗ này có người chưa?|這個位子有人嗎？|
202|nhỏ|小|small|形容詞|Phòng này hơi nhỏ.|這個房間有點小。|
203|chẳng|一點也不（語氣強）|not at all|副詞|Tôi chẳng biết gì cả.|我什麼都不知道。|比 không 語氣更強
204|tiếng|語言 / 聲音 / 小時|language; sound; hour|名詞|Tôi nói tiếng Việt chưa tốt.|我的越語還說得不好。|hai tiếng＝兩小時
205|bây giờ|現在|now|副詞|Bây giờ tôi phải đi.|我現在得走了。|
206|vấn đề|問題 / 議題|problem; issue|名詞|Không có vấn đề gì.|沒有什麼問題。|
207|ngươi|你（古語）|thou (archaic)|代名詞|Ngươi là ai?|你是誰？|只見於古裝劇與文學，日常不要用
208|xảy|發生|to happen|動詞|Chuyện gì đã xảy ra?|發生了什麼事？|常以 xảy ra 出現
209|làm việc|工作|to work|動詞|Tôi làm việc ở công ty Đài Loan.|我在台灣公司工作。|
210|thế giới|世界|world|名詞|Việt Nam xuất khẩu cà phê ra thế giới.|越南把咖啡出口到世界各地。|
211|công ty|公司|company|名詞|Công ty tôi ở Bình Dương.|我的公司在平陽。|
212|tạo|創造 / 造成|to create|動詞|Chúng tôi tạo việc làm cho người dân.|我們為居民創造工作機會。|
213|lời|話語 / 利潤|words; profit|名詞|Cảm ơn lời khuyên của bạn.|謝謝你的建議。|
214|phát triển|發展|to develop|動詞|Kinh tế Việt Nam phát triển nhanh.|越南經濟發展很快。|
215|giữ|保持 / 保管|to keep|動詞|Anh giữ giúp tôi cái túi này nhé.|請幫我保管這個包。|
216|thực hiện|實行 / 執行|to carry out|動詞|Chúng tôi sẽ thực hiện kế hoạch này.|我們會執行這個計畫。|
217|trẻ|年輕 / 小孩|young; child|形容詞|Cô ấy còn rất trẻ.|她還很年輕。|trẻ em＝兒童
218|cha|父親|father|名詞|Cha tôi đã về hưu.|我父親已經退休了。|
219|đủ|足夠|enough|形容詞|Bao nhiêu đây là đủ rồi.|這些就夠了。|
220|quay|轉 / 回 / 拍攝|to turn; to return; to film|動詞|Anh quay lại đây nhé.|你回到這裡來吧。|quay phải＝右轉
221|vụ|案件 / 季節|case; incident|名詞|Vụ này cảnh sát đang điều tra.|這起案件警方正在調查。|
222|đẹp|美 / 漂亮|beautiful|形容詞|Hội An rất đẹp.|會安很美。|
223|câu|句子 / 釣魚|sentence; to fish|名詞|Câu này nghĩa là gì?|這句話是什麼意思？|
224|dưới|在…下面|under; below|介詞|Con mèo nằm dưới bàn.|貓躺在桌子下。|
225|thằng|小子（貶或親暱）|guy (rude or intimate)|名詞|Thằng bé rất ngoan.|那小男孩很乖。|對成人使用很不禮貌；稱小男孩則常見
226|hoạt động|活動 / 運作|activity; to operate|名詞|Máy này không hoạt động.|這台機器不運作。|
227|tỉnh|省 / 清醒|province; awake|名詞|Tôi đi công tác ở tỉnh Đồng Nai.|我去同奈省出差。|
228|tự|自己|by oneself|副詞|Tôi tự làm được.|我自己做得來。|
229|giữa|中間|between; middle|介詞|Ngồi giữa hai người.|坐在兩人中間。|
230|chơi|玩|to play|動詞|Cuối tuần đi chơi không?|週末要出去玩嗎？|
231|mua|買|to buy|動詞|Tôi muốn mua cái này.|我想買這個。|
232|vâng|是的（北部）|yes (polite)|感嘆詞|Vâng, tôi hiểu rồi.|好的，我明白了。|南部常說 dạ
233|thưa|敬稟（敬語開頭）|polite address word|動詞|Thưa cô, em xin phép về.|老師，我先告辭了。|正式稱呼前使用
234|kẻ|人（帶貶意）/ 畫線|person (negative)|名詞|Kẻ trộm đã bỏ chạy.|小偷跑掉了。|kẻ 常帶負面色彩，與 người 相對
235|đồng|盾（貨幣）/ 銅 / 田野|dong; copper; field|名詞|Một trăm nghìn đồng.|十萬盾。|越南貨幣單位
236|vài|幾個|a few|限定詞|Tôi ở đây vài ngày.|我在這裡待幾天。|
237|bài|課 / 篇 / 歌曲|lesson; article|名詞|Hôm nay chúng ta học bài mới.|今天我們學新的一課。|
238|phần|部分|part|名詞|Phần này khó quá.|這部分太難了。|
239|tăng|增加|to increase|動詞|Giá xăng lại tăng.|油價又漲了。|
240|tuổi|歲|age; years old|名詞|Bạn bao nhiêu tuổi?|你幾歲？|
241|giá|價格 / 豆芽|price; bean sprouts|名詞|Giá bao nhiêu?|價格多少？|
242|cảm ơn|謝謝|to thank|動詞|Cảm ơn bạn rất nhiều.|非常謝謝你。|
243|xây dựng|建設|to build|動詞|Họ đang xây dựng một cây cầu mới.|他們正在建一座新橋。|
244|đồ|東西|thing; stuff|名詞|Đồ ăn ở đây rất rẻ.|這裡的食物很便宜。|đồ ăn 食物；đồ uống 飲料
245|khoảng|大約|about; approximately|副詞|Khoảng mười phút nữa tôi đến.|大約再十分鐘我到。|
246|khiến|使得 / 讓|to cause; to make|動詞|Tin này khiến tôi rất vui.|這消息讓我很開心。|
247|bán|賣 / 半|to sell|動詞|Chị bán cái này bao nhiêu?|這個妳賣多少？|
248|sáng|早上 / 明亮|morning; bright|名詞|Sáng nay tôi dậy sớm.|今天早上我很早起。|
249|phía|方向 / 那一邊|direction; side|名詞|Đi về phía trước.|往前走。|
250|điểm|點 / 分數|point; score|名詞|Con được điểm cao.|孩子得了高分。|
251|ý|意思 / 想法|idea; meaning|名詞|Ý bạn là gì?|你的意思是什麼？|nước Ý＝義大利
252|đầu tiên|第一 / 最初|first|形容詞|Đây là lần đầu tiên tôi ăn phở.|這是我第一次吃河粉。|
253|chạy|跑|to run|動詞|Xe này chạy rất nhanh.|這輛車跑得很快。|
254|thành|成為 / 城市|to become; city|動詞|Nước biến thành đá.|水變成冰。|
255|bởi|由於 / 被|because of; by|介詞|Tôi đến muộn bởi trời mưa.|我因為下雨遲到了。|
256|bắt đầu|開始|to begin|動詞|Phim bắt đầu lúc bảy giờ.|電影七點開始。|
257|gây|造成|to cause|動詞|Mưa lớn gây ngập đường.|大雨造成道路淹水。|多用於負面結果
258|một số|一些|some|限定詞|Tôi có một số câu hỏi.|我有一些問題。|
259|đặc biệt|特別|special|形容詞|Hôm nay là ngày đặc biệt.|今天是特別的日子。|
260|kia|那（較遠）|that (farther)|限定詞|Cái kia đẹp hơn.|那個比較漂亮。|này 這 → đó 那 → kia 更遠的那個
261|bắt|抓 / 搭乘|to catch|動詞|Tôi bắt taxi về khách sạn.|我搭計程車回飯店。|bắt tay＝握手
262|đối với|對於|towards; for|介詞|Đối với tôi, gia đình là số một.|對我來說，家庭最重要。|
263|chú|叔叔|uncle (younger than parent)|代名詞|Chú ơi, cho cháu hỏi đường.|叔叔，請問路怎麼走。|稱呼年長於你、年輕於父親的男性
264|thông tin|資訊|information|名詞|Tôi cần thêm thông tin.|我需要更多資訊。|
265|thành phố|城市|city|名詞|Thành phố Hồ Chí Minh rất đông.|胡志明市人很多。|
266|máy|機器|machine|名詞|Máy lạnh bị hỏng rồi.|冷氣壞了。|
267|ơi|喂（呼喚）|hey (calling)|助詞|Em ơi, tính tiền!|（對店員）請結帳！|餐廳最實用：Em ơi 叫服務生
268|gái|女生|girl; female|名詞|Con gái tôi học lớp ba.|我女兒讀三年級。|單用略不禮貌，多以 con gái 出現
269|khá|相當 / 還不錯|rather; quite|副詞|Tiếng Việt của bạn khá tốt.|你的越語相當好。|
270|quan trọng|重要|important|形容詞|Sức khỏe là quan trọng nhất.|健康最重要。|
271|dân|人民 / 居民|people; resident|名詞|Người dân ở đây rất thân thiện.|這裡的居民很友善。|
272|tối|晚上 / 暗|evening; dark|名詞|Tối nay anh rảnh không?|今晚你有空嗎？|
273|ổn|穩 / 沒問題|fine; stable|形容詞|Mọi việc đều ổn.|一切都好。|Không sao, ổn mà. 沒事啦
274|Mỹ|美國|USA|名詞|Anh ấy sống ở Mỹ.|他住在美國。|
275|chương trình|節目 / 計畫|program|名詞|Chương trình này rất hay.|這個節目很好看。|
276|thế nào|怎麼樣|how|副詞|Món này thế nào?|這道菜怎麼樣？|
277|đứng|站|to stand|動詞|Đứng ở đây đợi tôi nhé.|站在這裡等我喔。|
278|nói chuyện|聊天 / 談話|to talk|動詞|Tôi muốn nói chuyện với anh.|我想跟你談談。|
279|đứa|個（小孩量詞）|classifier for children|量詞|Chị có mấy đứa con?|妳有幾個孩子？|
280|giảm|減少 / 降價|to reduce|動詞|Giảm giá cho tôi đi!|算我便宜一點嘛！|殺價必備
281|mặt|臉 / 面|face|名詞|Rửa mặt đi con.|孩子，去洗臉。|
282|buổi|（一段時間）/ 場|session; part of day|名詞|Buổi sáng tôi uống cà phê.|早上我喝咖啡。|buổi sáng／trưa／chiều／tối
283|rõ|清楚|clear|形容詞|Tôi nghe không rõ.|我聽不清楚。|
284|bệnh|病|illness|名詞|Bệnh này có nặng không?|這個病嚴重嗎？|
285|đặt|放 / 預訂|to place; to book|動詞|Tôi muốn đặt bàn cho bốn người.|我想訂四人桌。|
286|tiếp tục|繼續|to continue|動詞|Chúng ta tiếp tục nhé.|我們繼續吧。|
287|ừ|嗯（對平輩、晚輩）|yeah (casual)|感嘆詞|Ừ, để mình làm.|嗯，我來做。|對長輩要說 dạ 或 vâng
288|đêm|夜晚|night|名詞|Đêm qua tôi ngủ không ngon.|昨晚我睡得不好。|
289|vui|開心 / 好玩|happy; fun|形容詞|Hôm nay tôi rất vui.|今天我很開心。|
290|đầu tư|投資|to invest|動詞|Công ty đầu tư vào Việt Nam.|公司投資越南。|
291|kể|講述|to tell (a story)|動詞|Bà kể chuyện cho cháu nghe.|奶奶講故事給孫子聽。|
292|chờ|等|to wait|動詞|Xin chờ một chút.|請稍等。|
293|ngủ|睡覺|to sleep|動詞|Tối qua tôi ngủ sớm.|昨晚我很早睡。|
294|viết|寫|to write|動詞|Bạn viết ra giúp tôi nhé.|請你幫我寫下來。|
295|tham gia|參加|to participate|動詞|Tôi muốn tham gia lớp học này.|我想參加這堂課。|
296|thi|考試|to take an exam|動詞|Tuần sau tôi thi tiếng Việt.|下週我考越語。|
297|ngồi|坐|to sit|動詞|Mời chị ngồi.|請坐。|
298|uống|喝|to drink|動詞|||
299|chọn|選|to choose|動詞|Bạn chọn màu nào?|你選哪個顏色？|
300|tuy nhiên|然而|however|連詞|Tuy nhiên, tôi vẫn muốn thử.|然而，我還是想試試。|
301|đội|隊 / 戴（帽）|team; to wear (hat)|名詞|Đội của chúng tôi đã thắng.|我們隊贏了。|đội mũ bảo hiểm＝戴安全帽
302|thuốc|藥|medicine|名詞|Tôi cần mua thuốc đau đầu.|我要買頭痛藥。|thuốc lá＝香菸
303|bảo|告訴 / 叫（某人做）|to tell|動詞|Mẹ bảo tôi về sớm.|媽媽叫我早點回來。|
304|đạt|達到|to achieve|動詞|Anh ấy đạt điểm cao.|他得到高分。|
305|hệ thống|系統|system|名詞|Hệ thống đang bị lỗi.|系統現在有問題。|
306|bảo vệ|保護 / 警衛|to protect; security guard|動詞|Anh bảo vệ chỉ đường cho tôi.|警衛幫我指路。|
307|đánh|打|to hit; to play|動詞|Tôi thích đánh cầu lông.|我喜歡打羽毛球。|
308|cây|樹 / 棵|tree; plant|名詞|Cây này rất cao.|這棵樹很高。|
309|thay đổi|改變|to change|動詞|Kế hoạch đã thay đổi.|計畫改變了。|
310|đáng|值得|worth|副詞|Phim này đáng xem.|這部片值得看。|
311|da|皮膚 / 皮革|skin; leather|名詞|Cô ấy có da trắng.|她皮膚白。|
312|đất|土地|land; soil|名詞|Đất ở đây rất tốt.|這裡的土地很好。|
313|Chúa|上帝 / 主|God; Lord|名詞|Chúa ơi, muộn quá rồi!|天啊，太晚了！|口語 Chúa ơi! ＝天啊！
314|khả năng|能力 / 可能性|ability; possibility|名詞|Anh ấy có khả năng làm việc này.|他有能力做這件事。|
315|cấp|等級 / 核發|level; to issue|動詞|Anh ấy đã được cấp visa.|他已經拿到簽證了。|
316|màu|顏色|color|名詞|Tôi thích màu xanh.|我喜歡藍色。|
317|tuần|週|week|名詞|Tuần này tôi rất bận.|這週我很忙。|
318|lâu|久|long (time)|形容詞|Lâu rồi không gặp!|好久不見！|
319|công việc|工作|job; work|名詞|Công việc của bạn thế nào?|你的工作怎麼樣？|
320|cám ơn|謝謝|thank you|動詞|Cám ơn anh nhiều.|非常謝謝你。|與 cảm ơn 通用，南部較常見
321|thị trường|市場（經濟）|market|名詞|Thị trường Việt Nam rất tiềm năng.|越南市場很有潛力。|買菜的傳統市場用 chợ
322|mức|程度 / 水準|level|名詞|Mức lương ở đây khá cao.|這裡的薪資水準相當高。|
323|ảnh|照片|photo|名詞|Cho tôi xem ảnh nhé.|讓我看看照片吧。|chụp ảnh＝拍照
324|doanh nghiệp|企業|enterprise|名詞|Đây là doanh nghiệp Đài Loan.|這是台灣企業。|
325|phụ nữ|女性|woman|名詞|Hôm nay là ngày Phụ nữ Việt Nam.|今天是越南婦女節。|10 月 20 日是越南婦女節
326|quan tâm|關心|to care about|動詞|Cảm ơn bạn đã quan tâm.|謝謝你的關心。|
327|quyết định|決定|to decide|動詞|Tôi quyết định ở lại.|我決定留下來。|
328|khó|難|difficult|形容詞|Tiếng Việt không khó lắm.|越語沒那麼難。|
329|bước|步 / 走|step|名詞|Bước đầu tiên rất quan trọng.|第一步很重要。|
330|khu|區域|area; zone|名詞|Khu này có nhiều nhà hàng.|這區有很多餐廳。|
331|bắn|射擊 / 開槍|to shoot|動詞|Họ bắn pháo hoa vào dịp Tết.|他們在春節放煙火。|
332|kiểm tra|檢查|to check|動詞|Anh kiểm tra lại giúp tôi.|請幫我再檢查一次。|
333|phút|分鐘|minute|名詞|Đợi tôi năm phút.|等我五分鐘。|
334|xa|遠|far|形容詞|Sân bay có xa không?|機場遠嗎？|
335|nằm|躺 / 位於|to lie; to be located|動詞|Đà Nẵng nằm ở miền Trung.|峴港位於中部。|
336|trả|付 / 歸還|to pay; to return|動詞|Tôi trả bằng tiền mặt.|我付現金。|
337|sợ|怕|to be afraid|動詞|Tôi sợ đi xe máy.|我怕騎機車。|
338|thuộc|屬於 / 背熟|to belong; to know by heart|動詞|Công ty này thuộc tập đoàn lớn.|這家公司隸屬大集團。|
339|kinh tế|經濟|economy|名詞|Kinh tế năm nay tăng trưởng tốt.|今年經濟成長不錯。|
340|sản xuất|生產|to produce|動詞|Nhà máy sản xuất giày dép.|工廠生產鞋子。|
341|vợ|妻子|wife|名詞|Vợ tôi là người Việt.|我太太是越南人。|
342|ít|少|few; little|形容詞|Ít đường thôi nhé.|少糖就好喔。|ít đá＝少冰
343|hôm nay|今天|today|副詞|Hôm nay trời đẹp quá.|今天天氣真好。|
344|xong|完成|finished|動詞|Tôi làm xong rồi.|我做完了。|
345|cảnh sát|警察|police|名詞|Gọi cảnh sát ngay!|馬上叫警察！|
346|chân|腳 / 腿|foot; leg|名詞|Chân tôi bị đau.|我的腳痛。|
347|kế hoạch|計畫|plan|名詞|Kế hoạch của bạn là gì?|你的計畫是什麼？|
348|nghiên cứu|研究|to research|動詞|Tôi nghiên cứu văn hóa Việt Nam.|我研究越南文化。|
349|mắt|眼睛|eye|名詞|Mắt cô ấy rất đẹp.|她的眼睛很美。|
350|an toàn|安全|safe|形容詞|Đi xe an toàn nhé.|騎車小心喔。|
351|cố|努力 / 盡力|to try hard|動詞|Tôi sẽ cố học.|我會努力學習。|Cố lên! ＝加油！
352|quản lý|管理 / 經理|to manage; manager|動詞|Anh ấy quản lý nhà máy này.|他管理這間工廠。|
353|chút|一點|a bit|名詞|Đợi một chút nhé.|等一下喔。|
354|so|比較|to compare|動詞|So với năm ngoái, giá cao hơn.|跟去年比，價格比較高。|so với＝與…相比
355|cuối cùng|最後|finally; last|副詞|Cuối cùng tôi cũng đến nơi.|我終於到了。|
356|cổ|脖子 / 古老|neck; ancient|名詞|Tôi bị đau cổ.|我脖子痛。|phố cổ＝古街
357|dù|雖然 / 雨傘（南部）|although; umbrella|連詞|Dù mưa, tôi vẫn đi.|雖然下雨，我還是去。|
358|biển|海 / 招牌|sea; sign|名詞|Tôi thích đi biển.|我喜歡去海邊。|biển số＝車牌
359|dành|留給 / 花（時間）|to spare; to reserve|動詞|Tôi dành thời gian cho gia đình.|我把時間留給家人。|
360|ôi|哎呀|oh!|感嘆詞|Ôi, đẹp quá!|哎呀，好美！|
361|cuộc sống|生活|life|名詞|Cuộc sống ở đây rất vui.|這裡的生活很有趣。|
362|mở|打開|to open|動詞|Mấy giờ cửa hàng mở cửa?|店幾點開門？|
363|món|道（菜）|dish|名詞|Món này là món gì?|這道是什麼菜？|
364|dừng|停|to stop|動詞|Dừng ở đây giúp tôi.|請在這裡停。|搭車必備
365|thực sự|真正 / 確實|really|副詞|Tôi thực sự thích nơi này.|我真的很喜歡這裡。|
366|phim|電影|movie|名詞|Bộ phim này rất hay.|這部電影很好看。|
367|cuối|最後 / 末端|end; last|名詞|Cuối tuần bạn làm gì?|週末你做什麼？|
368|lo|擔心|to worry|動詞|Đừng lo, không sao đâu.|別擔心，沒事的。|
369|Hà Nội|河內|Hanoi|名詞|Tôi sẽ đi Hà Nội vào tháng sau.|我下個月要去河內。|
370|xã hội|社會|society|名詞|Mạng xã hội rất phổ biến ở Việt Nam.|社群網路在越南很普遍。|
371|ngành|行業 / 產業|industry; field|名詞|Tôi làm trong ngành điện tử.|我在電子業工作。|
372|con người|人類 / 為人|human being|名詞|Con người cần ngủ đủ giấc.|人需要充足的睡眠。|
373|chịu|承受 / 願意|to bear; to accept|動詞|Tôi không chịu nổi cái nóng này.|我受不了這種熱。|
374|lớp|班級 / 層|class; layer|名詞|Lớp tiếng Việt bắt đầu lúc bảy giờ.|越語課七點開始。|
375|yêu cầu|要求|to request|動詞|Khách hàng yêu cầu giao hàng sớm.|客戶要求提早交貨。|
376|nhóm|小組|group|名詞|Nhóm chúng tôi có năm người.|我們小組有五個人。|
377|gửi|寄 / 傳送|to send|動詞|Tôi gửi cho bạn qua Zalo.|我用 Zalo 傳給你。|
378|huyện|縣（省以下行政區）|rural district|名詞|Nhà máy nằm ở huyện bên cạnh.|工廠位在隔壁縣。|
379|vàng|黃色 / 金|yellow; gold|形容詞|Cô ấy mặc áo màu vàng.|她穿黃色的衣服。|
380|càng|越…越…|the more|副詞|Càng học càng thích.|越學越喜歡。|
381|coi|看（南部）|to watch (Southern)|動詞|Tối nay coi phim không?|今晚要看電影嗎？|北部多說 xem
382|ạ|（句尾敬語）|polite final particle|助詞|Em cảm ơn chị ạ.|謝謝姊姊。|對長輩、客戶時加在句尾
383|phép|許可 / 規則|permission|名詞|Tôi xin phép về trước.|我先告辭了。|xin phép＝請求允許，職場常用
384|cứu|救|to rescue|動詞|Cứu tôi với!|救命啊！|
385|chắc chắn|確定 / 一定|certain|副詞|Tôi chắc chắn sẽ đến.|我一定會來。|
386|mùa|季節|season|名詞|Mùa mưa ở Sài Gòn bắt đầu tháng năm.|西貢雨季五月開始。|
387|nhỉ|對吧（徵求同意）|right? (seeking agreement)|助詞|Hôm nay nóng nhỉ?|今天好熱喔，對吧？|
388|đọc|讀|to read|動詞|Từ này đọc thế nào?|這個字怎麼唸？|
389|khó khăn|困難|hardship|名詞|Công việc này có nhiều khó khăn.|這份工作有許多困難。|
390|vùng|地區|region|名詞|Vùng này trồng nhiều cà phê.|這地區種很多咖啡。|
391|vị|味道 / 位（敬稱）|taste; honorific classifier|名詞|Món này có vị hơi ngọt.|這道菜味道有點甜。|
392|cơ hội|機會|opportunity|名詞|Đây là cơ hội tốt.|這是個好機會。|
393|hoàn toàn|完全|completely|副詞|Tôi hoàn toàn đồng ý.|我完全同意。|
394|diễn|表演|to perform|動詞|Cô ấy diễn rất hay.|她演得很好。|
395|dự án|專案|project|名詞|Dự án này kéo dài một năm.|這個專案為期一年。|
396|bất cứ|任何|any|限定詞|Bạn có thể gọi tôi bất cứ lúc nào.|你隨時都可以打給我。|
397|khu vực|區域|area|名詞|Khu vực này cấm hút thuốc.|這個區域禁止吸菸。|
398|kết quả|結果|result|名詞|Kết quả kiểm tra thế nào?|檢查結果怎麼樣？|
399|sớm|早|early|形容詞|Mai tôi phải dậy sớm.|明天我得早起。|
400|thầy|男老師|male teacher|名詞|Thầy giáo của tôi rất vui tính.|我的老師很風趣。|女老師用 cô
401|báo|報紙 / 通報|newspaper; to report|名詞|Bố tôi đọc báo mỗi sáng.|我爸爸每天早上看報。|
402|tàu|火車 / 船|train; ship|名詞|Tôi đi tàu từ Hà Nội vào Huế.|我搭火車從河內到順化。|
403|thử|試|to try|動詞|Tôi mặc thử được không?|我可以試穿嗎？|
404|bác sĩ|醫生|doctor|名詞|Tôi cần gặp bác sĩ.|我需要看醫生。|
405|người ta|別人 / 人家|people; they|代名詞|Người ta nói món này rất ngon.|大家都說這道菜很好吃。|
406|lòng|內心 / 內臟|heart; innards|名詞|Tôi rất vui lòng giúp bạn.|我很樂意幫你。|vui lòng＝請（正式）
407|thiết kế|設計|to design|動詞|Cô ấy thiết kế áo dài.|她設計奧黛。|
408|c|SKIP
409|cảm thấy|感覺|to feel|動詞|Tôi cảm thấy mệt.|我覺得累。|
410|quên|忘記|to forget|動詞|Tôi quên tên bạn rồi.|我忘記你的名字了。|
411|chủ|老闆 / 主人|owner; boss|名詞|Chủ quán rất thân thiện.|店老闆很親切。|
412|công tác|出差 / 工作|business trip; work|名詞|Tuần sau tôi đi công tác.|下週我要出差。|
413|chống|對抗 / 防|to oppose; against|動詞|Kem chống nắng ở đâu?|防曬乳在哪裡？|
414|ban|部門 / 委員會|committee; board|名詞|Ban giám đốc đang họp.|董事會正在開會。|
415|trung tâm|中心|center|名詞|Khách sạn ở trung tâm thành phố.|飯店在市中心。|
416|tuyệt|太棒了|great|形容詞|Tuyệt quá!|太棒了！|
417|khách hàng|客戶|customer|名詞|Khách hàng rất hài lòng.|客戶很滿意。|
418|dài|長|long|形容詞|Con đường này rất dài.|這條路很長。|áo dài＝奧黛
419|điện thoại|電話 / 手機|telephone|名詞|Điện thoại của tôi hết pin rồi.|我的手機沒電了。|
420|chuyển|轉移 / 搬|to move; to transfer|動詞|Tôi chuyển tiền cho bạn nhé.|我轉帳給你喔。|
421|sẵn sàng|準備好|ready|形容詞|Tôi sẵn sàng rồi.|我準備好了。|
422|sang|到（對面、他處）|to cross over|動詞|Tôi sang Việt Nam làm việc.|我到越南工作。|跨越到另一邊時用 sang
423|hướng|方向|direction|名詞|Khách sạn ở hướng nào?|飯店在哪個方向？|
424|sắp|快要|about to|副詞|Tôi sắp đến rồi.|我快到了。|
425|xã|鄉|commune|名詞|Xã này có một trường học mới.|這個鄉有一所新學校。|
426|chuẩn bị|準備|to prepare|動詞|Tôi đang chuẩn bị bữa tối.|我正在準備晚餐。|
427|dịch vụ|服務|service|名詞|Dịch vụ ở đây rất tốt.|這裡的服務很好。|
428|hiệu quả|效果 / 有效|effective; result|名詞|Cách này rất hiệu quả.|這個方法很有效。|
429|đại học|大學|university|名詞|Tôi học đại học ở Đài Bắc.|我在台北念大學。|
430|độ|度 / 程度|degree|名詞|Hôm nay ba mươi lăm độ.|今天三十五度。|
431|vòng|圈 / 環|circle; round|名詞|Tôi đi bộ một vòng hồ.|我繞湖走一圈。|
432|máu|血|blood|名詞|Tôi cần xét nghiệm máu.|我需要驗血。|
433|hơi|有點 / 氣體|a little; steam|副詞|Món này hơi cay.|這道菜有點辣。|
434|dễ|容易|easy|形容詞|Bài này dễ lắm.|這課很簡單。|
435|bay|飛|to fly|動詞|Chuyến bay của tôi lúc mười giờ.|我的班機十點起飛。|
436|vốn|資金 / 本來|capital; originally|名詞|Công ty cần thêm vốn.|公司需要更多資金。|
437|đời|人生 / 一代|life; generation|名詞|Đó là chuyện đời tôi.|那是我人生的故事。|
438|sách|書|book|名詞|Tôi mua một cuốn sách tiếng Việt.|我買了一本越語書。|
439|kiểu|樣式|style|名詞|Tôi thích kiểu áo này.|我喜歡這款上衣。|
440|súng|槍|gun|名詞|Cảnh sát có súng.|警察有槍。|
441|hiện nay|現今|nowadays|副詞|Hiện nay nhiều người học tiếng Việt.|現今很多人學越語。|
442|khoa học|科學|science|名詞|Con tôi thích môn khoa học.|我孩子喜歡自然科學。|
443|khách|客人|guest|名詞|Nhà hàng hôm nay đông khách.|餐廳今天客人很多。|
444|trời|天 / 天氣|sky; weather|名詞|Trời sắp mưa.|天快下雨了。|
445|chất lượng|品質|quality|名詞|Chất lượng sản phẩm rất tốt.|產品品質很好。|
446|thành công|成功|to succeed|動詞|Chúc bạn thành công!|祝你成功！|
447|hỗ trợ|支援 / 協助|to support|動詞|Chúng tôi sẽ hỗ trợ anh.|我們會協助你。|
448|chồng|丈夫|husband|名詞|Chồng tôi làm kỹ sư.|我先生是工程師。|
449|điện|電|electricity|名詞|Nhà tôi bị mất điện.|我家停電了。|
450|liên quan|相關|related|動詞|Việc này không liên quan đến tôi.|這件事跟我無關。|
451|đợi|等|to wait|動詞|Đợi tôi với!|等等我！|
452|nhờ|拜託 / 多虧|to ask a favor; thanks to|動詞|Tôi nhờ bạn một việc nhé.|我拜託你一件事。|
453|đàn ông|男人|man|名詞|Người đàn ông kia là ai?|那個男人是誰？|
454|lựa chọn|選擇|choice; to choose|名詞|Đây là lựa chọn tốt nhất.|這是最好的選擇。|
455|duy nhất|唯一|only; unique|形容詞|Đây là cách duy nhất.|這是唯一的方法。|
456|chung|共同|common; together|形容詞|Chúng tôi ở chung một phòng.|我們住同一間房。|
457|đầy|滿|full|形容詞|Xe buýt đầy người.|公車擠滿了人。|
458|biến|變成 / 消失|to turn into; to vanish|動詞|Anh ấy biến mất rồi.|他消失了。|
459|làm ơn|請（客氣）|please|副詞|Làm ơn cho tôi xem thực đơn.|麻煩給我看菜單。|
460|gã|傢伙|guy (dismissive)|名詞|Gã đó trông rất lạ.|那傢伙看起來很奇怪。|語氣輕蔑
461|mời|請 / 邀請|to invite; please|動詞|Mời anh dùng trà.|請喝茶。|
462|bởi vì|因為|because|連詞|Tôi không đi bởi vì trời mưa.|我不去，因為下雨。|
463|quyền|權利|right|名詞|Ai cũng có quyền học tập.|人人都有受教育的權利。|
464|một cách|（形容詞副詞化）|-ly (adverbial)|副詞|Anh ấy nói một cách rõ ràng.|他說得很清楚。|một cách + 形容詞＝…地
465|giải|獎項 / 解決|prize; to solve|名詞|Cô ấy đoạt giải nhất.|她得了第一名。|
466|đá|踢 / 石頭 / 冰塊|to kick; stone; ice|動詞|Chúng tôi đá bóng mỗi chiều.|我們每天下午踢足球。|cà phê đá＝冰咖啡
467|con trai|兒子 / 男孩|son; boy|名詞|Con trai tôi mười tuổi.|我兒子十歲。|
468|một chút|一點點|a little|名詞|Tôi biết một chút tiếng Việt.|我會一點點越語。|
469|học sinh|（中小學）學生|pupil|名詞|Các học sinh đang học bài.|學生們正在讀書。|大學生用 sinh viên
470|cung cấp|供應|to supply|動詞|Công ty cung cấp nguyên liệu.|公司供應原料。|
471|vị trí|位置|position|名詞|Bạn gửi vị trí cho tôi nhé.|你把位置傳給我喔。|
472|đau|痛|painful; to hurt|形容詞|Tôi đau bụng quá.|我肚子好痛。|
473|cạnh|旁邊|beside|名詞|Nhà tôi ở cạnh trường học.|我家在學校旁邊。|
474|mạnh|強|strong|形容詞|Gió hôm nay rất mạnh.|今天風很強。|
475|sinh viên|大學生|university student|名詞|Tôi là sinh viên năm hai.|我是大二學生。|
476|vẻ|外表 / 樣子|appearance|名詞|Trông anh có vẻ mệt.|你看起來有點累。|có vẻ＝看來
477|a|啊（驚嘆）|ah!|感嘆詞|A, tôi nhớ rồi!|啊，我想起來了！|
478|khoá|鎖 / 課程|lock; course|名詞|Tôi quên khoá cửa rồi.|我忘記鎖門了。|
479|mạng|網路 / 生命|network; life|名詞|Mạng ở đây rất chậm.|這裡網路很慢。|
480|đem|帶 / 拿|to bring|動詞|Em đem hóa đơn ra giúp anh.|請把帳單拿來。|
481|kết thúc|結束|to end|動詞|Cuộc họp kết thúc lúc năm giờ.|會議五點結束。|
482|định|打算|to intend|動詞|Tôi định đi Đà Lạt.|我打算去大叻。|
483|quốc gia|國家|nation|名詞|Việt Nam là quốc gia đẹp.|越南是美麗的國家。|
484|bàn|桌子 / 討論|table; to discuss|名詞|Cho tôi một bàn cho hai người.|請給我兩人桌。|
485|chiều|下午|afternoon|名詞|Chiều nay tôi đi siêu thị.|今天下午我去超市。|
486|nhiệm vụ|任務|duty|名詞|Đây là nhiệm vụ của tôi.|這是我的任務。|
487|công nghệ|科技|technology|名詞|Công nghệ thay đổi rất nhanh.|科技變化很快。|
488|dẫn|帶領|to lead|動詞|Anh dẫn tôi đi nhé.|你帶我去吧。|
489|kinh doanh|經商|to do business|動詞|Gia đình tôi kinh doanh nhà hàng.|我家經營餐廳。|
490|con gái|女兒 / 女孩|daughter; girl|名詞|Con gái chị xinh quá.|妳女兒好漂亮。|
491|lý do|理由|reason|名詞|Lý do là gì?|理由是什麼？|
492|hiện|目前 / 顯現|currently; to appear|副詞|Tôi hiện sống ở Đà Nẵng.|我目前住在峴港。|
493|cơ sở|基礎 / 據點|basis; facility|名詞|Công ty có ba cơ sở ở miền Nam.|公司在南部有三個據點。|
494|bao nhiêu|多少|how much; how many|代名詞|Cái này bao nhiêu tiền?|這個多少錢？|
495|thật sự|真的|really|副詞|Tôi thật sự xin lỗi.|我真的很抱歉。|
496|trường hợp|情況|case; situation|名詞|Trong trường hợp này, hãy gọi tôi.|這種情況下請打給我。|
497|bóng|球 / 影子|ball; shadow|名詞|Bóng đá rất phổ biến ở Việt Nam.|足球在越南很普遍。|
498|hội|協會 / 節慶|association; festival|名詞|Tôi tham gia hội doanh nhân Đài Loan.|我參加台商協會。|
499|hoa|花|flower|名詞|Tôi tặng mẹ một bó hoa.|我送媽媽一束花。|
500|quy định|規定|regulation|名詞|Đây là quy định của công ty.|這是公司的規定。|
501|to|大（口語）|big|形容詞|Con cá này to quá.|這條魚好大。|
502|cửa|門|door|名詞|Làm ơn đóng cửa lại.|請把門關上。|
503|nàng|她（文學）|she (literary)|代名詞|Nàng hát rất hay.|她唱得很好聽。|小說、歌詞常見，日常用 cô ấy
504|kiếm|尋找 / 賺|to look for; to earn|動詞|Tôi đang kiếm việc làm.|我正在找工作。|kiếm tiền＝賺錢
505|đơn vị|單位|unit|名詞|Đơn vị tiền Việt Nam là đồng.|越南貨幣單位是盾。|
506|ồ|喔|oh!|感嘆詞|Ồ, tôi không biết.|喔，我不知道。|
507|văn hoá|文化|culture|名詞|Tôi thích tìm hiểu văn hoá Việt Nam.|我喜歡了解越南文化。|
508|Trung Quốc|中國|China|名詞|Hàng này nhập từ Trung Quốc.|這批貨從中國進口。|
509|cơ|肌肉 / 機（漢越）|muscle; (Sino-Viet) machine|名詞|Cơ chân tôi bị đau.|我腿部肌肉痛。|
510|xuất hiện|出現|to appear|動詞|Anh ấy xuất hiện trên tivi.|他出現在電視上。|
511|hình|圖 / 形狀|picture; shape|名詞|Hình này rất đẹp.|這張圖很美。|
512|suốt|整個 / 一直|throughout|介詞|Tôi làm việc suốt ngày.|我工作一整天。|
513|giỏi|厲害 / 擅長|good at|形容詞|Bạn nói tiếng Việt giỏi quá!|你越語說得真好！|
514|cơ quan|機關 / 器官|agency; organ|名詞|Tôi làm việc ở cơ quan nhà nước.|我在政府機關工作。|
515|thậm chí|甚至|even|副詞|Anh ấy thậm chí không gọi cho tôi.|他甚至沒打給我。|
516|rời|離開|to leave|動詞|Tôi rời Hà Nội vào sáng mai.|我明天早上離開河內。|
517|thiếu|缺少|to lack|動詞|Còn thiếu một người.|還少一個人。|
518|đánh giá|評估|to evaluate|動詞|Khách hàng đánh giá sản phẩm rất tốt.|客戶對產品評價很好。|
519|quả|水果 / 顆|fruit; classifier for round items|名詞|Tôi mua một quả dưa hấu.|我買了一顆西瓜。|南部多用 trái
520|bức|幅 / 封（量詞）|classifier for pictures, letters|量詞|Tôi nhận được một bức thư.|我收到一封信。|
521|dòng|行 / 河流|line; stream|名詞|Đọc dòng đầu tiên đi.|唸第一行吧。|
522|hát|唱歌|to sing|動詞|Chị hát hay quá.|姊姊唱得真好聽。|
523|vượt|超越 / 跨過|to exceed; to cross|動詞|Đừng vượt đèn đỏ.|不要闖紅燈。|
524|ngon|好吃|delicious|形容詞|Phở này ngon quá!|這碗河粉真好吃！|
525|dạy|教|to teach|動詞|Cô ấy dạy tiếng Việt.|她教越語。|
526|du lịch|旅遊|to travel|動詞|Tôi đi du lịch Hội An.|我去會安旅遊。|
527|tuyệt vời|太棒了 / 極好|wonderful|形容詞|Bữa ăn này thật tuyệt vời.|這頓飯真棒。|
528|cá|魚|fish|名詞|Tôi thích ăn cá kho.|我喜歡吃滷魚。|
529|quân|軍隊|army; troops|名詞|Quân đội đang giúp dân.|軍隊正在幫助人民。|
530|giải quyết|解決|to solve|動詞|Chúng ta giải quyết việc này nhé.|我們解決這件事吧。|
531|đào tạo|培訓|to train|動詞|Công ty đào tạo nhân viên mới.|公司培訓新員工。|
532|toàn|全部 / 全都|all; entire|限定詞|Toàn công ty nghỉ lễ.|全公司放假。|
533|chuyến|趟 / 班次|trip; flight|名詞|Chuyến bay này bị hoãn.|這班飛機延誤了。|
534|lễ|節日 / 儀式|holiday; ceremony|名詞|Ngày mai là ngày lễ.|明天是假日。|
535|cười|笑|to laugh; to smile|動詞|Em bé cười rất dễ thương.|小寶寶笑得很可愛。|
536|quan hệ|關係|relationship|名詞|Quan hệ của họ rất tốt.|他們的關係很好。|
537|hề|小丑 / 絲毫|clown; (not) at all|副詞|Tôi không hề biết.|我完全不知道。|không hề＝完全沒有
538|cũ|舊|old (things)|形容詞|Chiếc xe này cũ rồi.|這輛車舊了。|人老用 già，物舊用 cũ
539|rượu|酒|alcohol; wine|名詞|Tôi không uống rượu.|我不喝酒。|
540|thiết bị|設備|equipment|名詞|Thiết bị này bị hỏng.|這個設備壞了。|
541|mặc|穿 / 不管|to wear; regardless|動詞|Hôm nay bạn mặc đẹp quá.|你今天穿得真好看。|
542|m|SKIP
543|giáo dục|教育|education|名詞|Giáo dục rất quan trọng.|教育很重要。|
544|kìa|看那邊（語氣）|look! (over there)|助詞|Xe buýt đến kìa!|公車來了！|
545|đông|東 / 冬 / 人多|east; winter; crowded|形容詞|Chợ hôm nay đông quá.|今天市場人好多。|
546|ảnh hưởng|影響|influence|動詞|Trời mưa ảnh hưởng đến công việc.|下雨影響工作。|
547|chính phủ|政府|government|名詞|Chính phủ vừa ban hành quy định mới.|政府剛頒布新規定。|
548|ngôi|棟 / 顆（量詞）|classifier for buildings, stars|量詞|Ngôi nhà này rất đẹp.|這棟房子很美。|
549|quá trình|過程|process|名詞|Quá trình này mất ba tháng.|這個過程要花三個月。|
550|phát hiện|發現|to discover|動詞|Tôi phát hiện một lỗi nhỏ.|我發現一個小錯誤。|
551|nâng|提高 / 抬起|to raise|動詞|Chúng ta nâng ly nào!|我們舉杯吧！|
552|thu|收 / 秋|to collect; autumn|動詞|Công ty thu tiền vào cuối tháng.|公司月底收款。|
553|môi trường|環境|environment|名詞|Chúng ta cần bảo vệ môi trường.|我們需要保護環境。|
554|điều kiện|條件|condition|名詞|Điều kiện làm việc ở đây rất tốt.|這裡的工作條件很好。|
555|giá trị|價值|value|名詞|Hợp đồng này có giá trị lớn.|這份合約價值很高。|
556|sông|河|river|名詞|Sông Hồng chảy qua Hà Nội.|紅河流經河內。|
557|dậy|起床|to get up|動詞|Mấy giờ bạn dậy?|你幾點起床？|
558|địa phương|地方 / 當地|local|名詞|Tôi muốn ăn món địa phương.|我想吃當地的菜。|
559|quý|珍貴 / 季|precious; quarter|形容詞|Thời gian rất quý.|時間很寶貴。|
560|hình ảnh|影像|image|名詞|Hình ảnh này rất rõ.|這張影像很清楚。|
561|đơn giản|簡單|simple|形容詞|Cách làm rất đơn giản.|做法很簡單。|
562|báo cáo|報告|to report|動詞|Tôi phải báo cáo với sếp.|我得向老闆報告。|
563|cố gắng|努力|to try hard|動詞|Tôi sẽ cố gắng hết sức.|我會盡全力。|
564|bản thân|自己|oneself|名詞|Hãy tin vào bản thân.|要相信自己。|
565|nổi|浮 / 有名 / 動得了|to float; famous|動詞|Tôi không ăn nổi nữa.|我吃不下了。|動詞 + nổi＝有能力做到
566|bác|伯伯 / 伯母|uncle; aunt (older than parents)|代名詞|Cháu chào bác ạ.|伯伯您好。|稱呼比父母年長的人，不分男女
567|chàng|小伙子 / 他（文學）|young man|名詞|Chàng trai ấy rất dễ thương.|那個小伙子很可愛。|
568|xanh|藍 / 綠|blue; green|形容詞|Bầu trời hôm nay rất xanh.|今天的天空很藍。|xanh dương 藍色；xanh lá 綠色
569|máy bay|飛機|airplane|名詞|Máy bay sắp cất cánh.|飛機快起飛了。|
570|tấn công|攻擊|to attack|動詞|Đội bạn tấn công rất mạnh.|對手進攻很猛。|
571|phù hợp|適合|suitable|形容詞|Công việc này phù hợp với tôi.|這份工作適合我。|
572|tập trung|專注 / 集中|to focus|動詞|Tôi không thể tập trung.|我無法專心。|
573|hy vọng|希望|to hope|動詞|Tôi hy vọng gặp lại bạn.|我希望能再見到你。|
574|chính xác|正確 / 精確|exact|形容詞|Số này có chính xác không?|這個數字正確嗎？|
575|tất nhiên|當然|of course|副詞|Tất nhiên rồi!|當然了！|
576|thoát|逃離 / 退出|to escape; to exit|動詞|Tôi không thoát được ứng dụng.|我退不出這個應用程式。|
577|chất|物質 / 品質|substance|名詞|Thực phẩm này không có chất bảo quản.|這種食品沒有防腐劑。|
578|bản|份 / 版本|copy; version|名詞|Cho tôi hai bản hợp đồng.|請給我兩份合約。|
579|thấp|低 / 矮|low; short|形容詞|Bàn này hơi thấp.|這張桌子有點矮。|
580|lỗi|錯誤|error; fault|名詞|Lỗi của tôi, xin lỗi anh.|是我的錯，對不起。|
581|áo|上衣|shirt; top|名詞|Cái áo này bao nhiêu tiền?|這件上衣多少錢？|
582|bữa|餐 / 頓|meal|名詞|Bữa tối nay ăn gì?|今天晚餐吃什麼？|
583|sai|錯|wrong|形容詞|Tôi nói sai rồi.|我說錯了。|
584|đảm bảo|保證|to guarantee|動詞|Tôi đảm bảo hàng này tốt.|我保證這批貨很好。|
585|trắng|白色|white|形容詞|Tôi muốn mua áo trắng.|我想買白色上衣。|
586|ổng|他（南部口語）|he (Southern casual)|代名詞|Ổng đi đâu rồi?|他去哪裡了？|ông ấy 的南部縮音
587|tiếp|接著 / 接待|next; to receive|動詞|Chúng ta làm tiếp nhé.|我們接著做吧。|
588|nhà nước|國家（政府）|the state|名詞|Đây là ngân hàng nhà nước.|這是國家銀行。|
589|mối|（關係）/ 白蟻|relationship; termite|名詞|Đây là mối quan hệ tốt.|這是良好的關係。|
590|tưởng|以為|to assume wrongly|動詞|Tôi tưởng hôm nay là thứ hai.|我以為今天是星期一。|常指想錯了；nghĩ 僅是「認為」
591|cảm giác|感覺|feeling|名詞|Cảm giác này rất lạ.|這種感覺很奇怪。|
592|chó|狗|dog|名詞|Con chó này rất ngoan.|這隻狗很乖。|
593|thực tế|實際|reality|名詞|Thực tế rất khác.|實際上很不一樣。|
594|lao động|勞工 / 勞動|labor; worker|名詞|Công ty cần thêm lao động.|公司需要更多勞工。|
595|đóng|關 / 繳|to close; to pay (fees)|動詞|Mấy giờ đóng cửa?|幾點關門？|đóng tiền＝繳錢
596|lãnh đạo|領導|leader; to lead|名詞|Lãnh đạo công ty đến thăm nhà máy.|公司高層來參訪工廠。|
597|tấm|張 / 片|classifier for flat items|量詞|Cho tôi một tấm vé.|請給我一張票。|
598|cá nhân|個人|individual; personal|名詞|Đây là ý kiến cá nhân của tôi.|這是我個人的意見。|
599|cán bộ|幹部|official; cadre|名詞|Cán bộ hải quan đang kiểm tra.|海關人員正在檢查。|
600|câu chuyện|故事|story|名詞|Câu chuyện này rất cảm động.|這個故事很感人。|
601|mục tiêu|目標|goal|名詞|Mục tiêu của tôi là nói lưu loát.|我的目標是說得流利。|
602|loài|物種|species|名詞|Loài hoa này rất hiếm.|這種花很稀有。|
603|nền|基礎 / 背景|foundation; background|名詞|Nền kinh tế đang phát triển.|經濟正在發展。|
604|thắng|贏|to win|動詞|Đội Việt Nam thắng rồi!|越南隊贏了！|
605|phục vụ|服務|to serve|動詞|Nhân viên phục vụ rất nhiệt tình.|服務員非常熱心。|
606|ư|嗎（驚訝）|really? (surprise)|助詞|Anh về rồi ư?|你回來了嗎？|帶驚訝或反問語氣
607|hạnh phúc|幸福|happy; happiness|形容詞|Chúc hai bạn hạnh phúc.|祝兩位幸福。|
608|mau|快（口語）|quick|形容詞|Mau lên, muộn rồi!|快點，遲到了！|
609|mẫu|樣品 / 款式|sample; model|名詞|Cho tôi xem mẫu này.|請給我看這個款式。|
610|điên|瘋|crazy|形容詞|Trời nóng điên lên được.|天氣熱得快瘋了。|
611|nội dung|內容|content|名詞|Nội dung hợp đồng rất rõ ràng.|合約內容很清楚。|
612|nhân viên|員工|employee|名詞|Công ty có năm mươi nhân viên.|公司有五十名員工。|
613|nữ|女|female|形容詞|Nhà vệ sinh nữ ở đâu?|女廁在哪裡？|
614|chia sẻ|分享|to share|動詞|Cảm ơn bạn đã chia sẻ.|謝謝你的分享。|
615|thịt|肉|meat|名詞|Tôi không ăn thịt bò.|我不吃牛肉。|
616|nặng|重|heavy|形容詞|Vali này nặng quá.|這個行李箱好重。|
617|bình thường|普通 / 正常|normal|形容詞|Hôm nay tôi thấy bình thường.|今天我覺得還好。|
618|vua|國王|king|名詞|Huế từng là nơi ở của vua.|順化曾是皇帝的居所。|
619|giới thiệu|介紹|to introduce|動詞|Tôi xin giới thiệu về bản thân.|我來自我介紹一下。|
620|nhu cầu|需求|demand|名詞|Nhu cầu cà phê ngày càng tăng.|咖啡的需求越來越高。|
621|cắt|剪 / 切|to cut|動詞|Tôi muốn cắt tóc.|我想剪頭髮。|
622|kỳ|期 / 奇怪|period; strange|名詞|Kỳ nghỉ này tôi về nước.|這次假期我要回國。|
623|đỏ|紅色|red|形容詞|Lì xì màu đỏ rất đẹp.|紅包很漂亮。|
624|nhân dân|人民|the people|名詞|Nhân dân Việt Nam rất hiếu khách.|越南人民很好客。|
625|thành viên|成員|member|名詞|Gia đình tôi có năm thành viên.|我家有五位成員。|
626|rõ ràng|清楚 / 明確|clear|形容詞|Anh ấy giải thích rất rõ ràng.|他解釋得很清楚。|
627|miền|地區（大區域）|region|名詞|Tôi thích món ăn miền Trung.|我喜歡中部菜。|miền Bắc／Trung／Nam
628|giao|交付 / 外送|to deliver|動詞|Khi nào giao hàng?|什麼時候交貨？|
629|Pháp|法國 / 法律|France; law|名詞|Bánh mì có nguồn gốc từ Pháp.|法國麵包源自法國。|
630|cơ thể|身體|body|名詞|Cơ thể cần nhiều nước.|身體需要很多水。|
631|chết tiệt|該死（粗話）|damn (swear)|感嘆詞|Chết tiệt, tôi quên chìa khóa!|該死，我忘了鑰匙！|影視常見的粗話，正式場合別用
632|luật|法律|law|名詞|Luật giao thông rất nghiêm.|交通法規很嚴格。|
633|chúc|祝|to wish|動詞|Chúc mừng năm mới!|新年快樂！|
634|bệnh viện|醫院|hospital|名詞|Đưa tôi đến bệnh viện.|送我去醫院。|
635|đoàn|團體|group; delegation|名詞|Đoàn du lịch có hai mươi người.|旅行團有二十人。|
636|thư|信件|letter|名詞|Tôi gửi thư cho khách hàng.|我寄信給客戶。|
637|thời điểm|時間點|moment; point in time|名詞|Bây giờ là thời điểm tốt nhất.|現在是最好的時機。|
638|hứa|承諾|to promise|動詞|Tôi hứa sẽ trở lại.|我答應會回來。|
639|may mắn|幸運|lucky|形容詞|Chúc bạn may mắn!|祝你好運！|
640|trang|頁|page|名詞|Mở sách trang mười.|打開書第十頁。|
641|trở nên|變得|to become|動詞|Thời tiết trở nên lạnh hơn.|天氣變得更冷了。|
642|sở|局 / 處|department; office|名詞|Tôi đến sở kế hoạch và đầu tư.|我去計畫投資局。|
643|tình yêu|愛情|love|名詞|Đây là một bài hát về tình yêu.|這是一首關於愛情的歌。|
644|toàn bộ|全部|entire|限定詞|Tôi đã trả toàn bộ tiền.|我已付清全部款項。|
645|trai|男的 / 蚌|male; clam|名詞|Bạn trai của tôi người Việt.|我男朋友是越南人。|
646|lũ|洪水 / 一幫|flood; bunch|名詞|Miền Trung thường có lũ vào tháng mười.|中部十月常有洪水。|
647|giấy|紙|paper|名詞|Cho tôi một tờ giấy.|請給我一張紙。|
648|vô|進（南部）|to enter (Southern)|動詞|Mời anh vô nhà.|請進屋。|北部多說 vào
649|dễ dàng|容易|easily|形容詞|Việc này rất dễ dàng.|這件事很容易。|
650|thuê|租 / 雇用|to rent; to hire|動詞|Tôi muốn thuê xe máy.|我想租機車。|
651|tóc|頭髮|hair|名詞|Tóc của cô ấy rất dài.|她的頭髮很長。|
652|tặng|贈送|to give (a gift)|動詞|Tôi tặng bạn món quà này.|這份禮物送給你。|
653|trái|左 / 水果（南部）|left; fruit|名詞|Rẽ trái ở ngã tư.|在十字路口左轉。|
654|cuốn|本（量詞）/ 捲|classifier for books; to roll|量詞|Tôi đọc xong cuốn sách này rồi.|我讀完這本書了。|
655|bánh|餅 / 糕點|cake; bread|名詞|Bánh này rất ngọt.|這個餅很甜。|
656|trải|鋪 / 經歷|to spread; to go through|動詞|Tôi trải chiếu ra sàn.|我把蓆子鋪在地上。|
657|cánh|翅膀 / 一側|wing|名詞|Cánh gà nướng rất ngon.|烤雞翅很好吃。|
658|quà|禮物|gift|名詞|Đây là quà cho bạn.|這是給你的禮物。|
659|chăm sóc|照顧|to take care of|動詞|Tôi chăm sóc mẹ tôi.|我照顧媽媽。|
660|lịch sử|歷史|history|名詞|Việt Nam có lịch sử rất lâu đời.|越南有悠久的歷史。|
661|văn phòng|辦公室|office|名詞|Văn phòng ở tầng năm.|辦公室在五樓。|
662|nuôi|養|to raise|動詞|Nhà tôi nuôi một con mèo.|我家養了一隻貓。|
663|hồ sơ|資料 / 檔案|file; dossier|名詞|Tôi đã nộp hồ sơ xin việc.|我已遞交求職資料。|
664|căn|間 / 棟（量詞）|classifier for rooms, houses|量詞|Tôi thuê một căn hộ nhỏ.|我租了一間小公寓。|
665|nghỉ|休息 / 請假|to rest; to take leave|動詞|Chúng ta nghỉ một lát nhé.|我們休息一下吧。|
666|thân|身體 / 親近|body; close|形容詞|Chúng tôi là bạn thân.|我們是好朋友。|
667|rừng|森林|forest|名詞|Vườn quốc gia này có rừng rất lớn.|這座國家公園有很大的森林。|
668|nhạc|音樂|music|名詞|Tôi thích nghe nhạc trữ tình.|我喜歡聽抒情樂。|
669|lượng|量|amount|名詞|Lượng khách năm nay tăng nhiều.|今年客量增加很多。|
670|xấu|醜 / 不好|ugly; bad|形容詞|Thời tiết hôm nay xấu quá.|今天天氣真差。|
671|Việt|越（越南）|Viet|名詞|Tôi đang học tiếng Việt.|我正在學越語。|
672|chú ý|注意|to pay attention|動詞|Xin chú ý, tàu sắp đến.|請注意，列車即將到站。|
673|trực tiếp|直接|direct|形容詞|Chúng ta nói chuyện trực tiếp nhé.|我們當面談吧。|
674|lá|葉子 / 張|leaf|名詞|Lá cây chuyển màu vàng.|樹葉變黃了。|
675|thay|換 / 代替|to change; instead of|動詞|Tôi muốn thay phòng khác.|我想換另一間房。|
676|tệ|糟 / 貨幣|bad; currency|形容詞|Dịch vụ này tệ quá.|這服務太差了。|
677|đen|黑色|black|形容詞|Cho tôi một ly cà phê đen.|請給我一杯黑咖啡。|
678|hãng|公司（品牌）|firm; brand|名詞|Hãng này sản xuất xe máy.|這家公司生產機車。|
679|viên|顆 / 員（職稱）|pill; member suffix|量詞|Uống hai viên sau bữa ăn.|飯後吃兩顆。|
680|phát|發放 / 播放|to distribute; to broadcast|動詞|Họ phát tài liệu cho mọi người.|他們發資料給大家。|
681|trốn|躲 / 逃|to hide; to flee|動詞|Con mèo trốn dưới giường.|貓躲在床底下。|
682|tim|心臟|heart|名詞|Tim tôi đập rất nhanh.|我的心跳很快。|
683|thăm|拜訪|to visit|動詞|Tôi đến thăm bạn.|我來拜訪你。|
684|hành động|行動|action|名詞|Đây là một hành động tốt.|這是個好的舉動。|
685|núi|山|mountain|名詞|Sa Pa có nhiều núi cao.|沙壩有很多高山。|
686|tự nhiên|自然 / 請隨意|natural; make yourself at home|形容詞|Anh cứ tự nhiên nhé.|請別拘束喔。|
687|dám|敢|to dare|動詞|Tôi không dám ăn món này.|我不敢吃這道菜。|
688|cầu|橋 / 祈求|bridge; to pray|名詞|Cầu Rồng ở Đà Nẵng rất đẹp.|峴港的龍橋很美。|
689|làng|村莊|village|名詞|Làng này nổi tiếng về gốm.|這個村子以陶器聞名。|
690|chụp|拍（照）|to take (a photo)|動詞|Chụp giúp tôi một tấm ảnh nhé.|請幫我拍一張照。|
691|tụi|（一群人，口語）|group (Southern casual)|名詞|Tụi mình đi cà phê đi.|我們去喝咖啡吧。|tụi mình＝我們（南部口語）
692|thời|時代 / 時候|era; time|名詞|Thời đó chưa có điện thoại.|那個年代還沒有手機。|
693|nhảy|跳 / 跳舞|to jump; to dance|動詞|Cô ấy nhảy rất đẹp.|她舞跳得很美。|
694|lĩnh vực|領域|field; sector|名詞|Anh làm trong lĩnh vực nào?|你在哪個領域工作？|
695|kỹ thuật|技術|technique|名詞|Tôi là nhân viên kỹ thuật.|我是技術人員。|
696|kinh nghiệm|經驗|experience|名詞|Anh ấy có nhiều kinh nghiệm.|他有很多經驗。|
697|kiểm soát|控制|to control|動詞|Chúng ta cần kiểm soát chi phí.|我們需要控制成本。|
698|máy tính|電腦|computer|名詞|Máy tính của tôi bị hỏng.|我的電腦壞了。|
699|y|他（書面）/ 醫療|he (literary); medical|代名詞|Y không nói gì cả.|他什麼也沒說。|書面、略帶貶意，日常少用
700|hẳn|一定 / 徹底|surely; completely|副詞|Hẳn là anh ấy rất mệt.|他一定很累。|
701|đoán|猜|to guess|動詞|Bạn đoán xem tôi bao nhiêu tuổi.|你猜我幾歲。|
702|tương lai|未來|future|名詞|Tôi muốn sống ở Việt Nam trong tương lai.|未來我想住在越南。|
703|hôm|天（某日）|day (specific)|名詞|Hôm đó trời rất đẹp.|那天天氣很好。|hôm qua 昨天；hôm kia 前天
704|đồng ý|同意|to agree|動詞|Tôi đồng ý với bạn.|我同意你。|
705|thể hiện|表現|to express; to show|動詞|Món quà thể hiện lòng biết ơn.|這份禮物表達感謝。|
706|triển khai|展開 / 推行|to roll out|動詞|Công ty sẽ triển khai dự án mới.|公司將推行新專案。|
707|hoàn thành|完成|to complete|動詞|Tôi đã hoàn thành báo cáo.|我已完成報告。|
708|yên|安靜 / 馬鞍|quiet; saddle|形容詞|Ở đây rất yên tĩnh và yên bình.|這裡很安靜祥和。|
709|tổng thống|總統|president|名詞|Tổng thống Mỹ đã đến thăm Việt Nam.|美國總統已到訪越南。|
710|in|列印|to print|動詞|Tôi muốn in tài liệu này.|我想印這份文件。|
711|sức khoẻ|健康|health|名詞|Chúc bác sức khoẻ!|祝您身體健康！|
712|Nga|俄羅斯|Russia|名詞|Nhiều khách Nga đến Nha Trang.|許多俄羅斯遊客來芽莊。|
713|ý kiến|意見|opinion|名詞|Ý kiến của bạn thế nào?|你的意見如何？|
714|suy nghĩ|思考|to think over|動詞|Để tôi suy nghĩ một chút.|讓我想一下。|
715|quái|怪 / 到底（加強語氣）|strange; the heck|形容詞|Chuyện quái gì thế này?|這到底是怎麼回事？|口語加強語氣，略帶粗魯
716|hoà|和 / 溶解|to dissolve; to draw|動詞|Hai đội hoà nhau.|兩隊打成平手。|
717|tự do|自由|freedom; free|名詞|Tôi thích đi du lịch tự do.|我喜歡自由行。|
718|cần thiết|必要|necessary|形容詞|Việc này không cần thiết.|這件事沒必要。|
719|đồng thời|同時|at the same time|副詞|Anh ấy là giám đốc, đồng thời là kỹ sư.|他是總經理，同時也是工程師。|
720|chữ|文字|letter; word|名詞|Chữ này đọc thế nào?|這個字怎麼唸？|
721|cẩn thận|小心|careful|形容詞|Đi cẩn thận nhé!|路上小心喔！|
722|điều trị|治療|to treat|動詞|Bác sĩ đang điều trị cho anh ấy.|醫生正在治療他。|
723|ghi|記下|to note down|動詞|Anh ghi địa chỉ giúp tôi nhé.|請幫我記下地址。|
724|đề nghị|提議 / 請求|to propose|動詞|Tôi đề nghị họp vào thứ ba.|我提議星期二開會。|
725|đất nước|國家|country; homeland|名詞|Đất nước này rất đẹp.|這個國家很美。|
726|tầng|樓層|floor|名詞|Phòng tôi ở tầng ba.|我的房間在三樓。|
727|chả|肉餅 / 才不（口語否定）|pork roll; not (casual)|名詞|Tôi thích ăn bún chả.|我喜歡吃烤肉米線。|口語否定：Chả biết＝不知道
728|nè|喔 / 這裡（南部）|here; hey (Southern)|助詞|Tiền của chị nè.|姊姊，妳的錢在這。|北部多說 này
729|tập|練習 / 集|to practice; volume|動詞|Mỗi sáng tôi tập thể dục.|每天早上我做運動。|
730|ứng dụng|應用程式|application|名詞|Bạn tải ứng dụng Grab chưa?|你下載 Grab 了嗎？|
731|lối|通道 / 方式|way; path|名詞|Lối ra ở đâu?|出口在哪裡？|
732|nóng|熱|hot|形容詞|Hôm nay nóng quá.|今天好熱。|
733|rộng|寬|wide; spacious|形容詞|Phòng này rất rộng.|這間房很寬敞。|
734|chủ tịch|主席|chairman|名詞|Chủ tịch công ty đến Đài Loan.|公司主席來到台灣。|
735|mong|盼望|to hope; to look forward|動詞|Tôi mong được gặp anh sớm.|盼望早日見到你。|
736|cuộc đời|人生|life|名詞|Đây là ngày vui nhất cuộc đời tôi.|這是我人生最開心的一天。|
737|tiếc|可惜|to regret|動詞|Tiếc quá, tôi không đi được.|真可惜，我不能去。|
738|nam|南 / 男|south; male|名詞|Nhà vệ sinh nam ở bên phải.|男廁在右邊。|同時也是「南」：miền Nam
739|cầm|拿著|to hold|動詞|Anh cầm giúp tôi cái này.|請幫我拿一下這個。|
740|xác định|確定|to determine|動詞|Chúng ta cần xác định mục tiêu.|我們需要確定目標。|
741|dây|繩 / 線|rope; wire|名詞|Dây điện này bị đứt.|這條電線斷了。|
742|khắp|遍及|all over|介詞|Tôi đi khắp Việt Nam.|我走遍越南。|
743|quán|小店 / 餐館|small shop; eatery|名詞|Quán này bán phở rất ngon.|這間店的河粉很好吃。|
744|bệnh nhân|病人|patient|名詞|Bệnh nhân cần nghỉ ngơi.|病人需要休息。|
745|băng|冰 / 繃帶|ice; bandage|名詞|Tôi cần băng để băng vết thương.|我需要繃帶包紮傷口。|
746|Đức|德國 / 德|Germany; virtue|名詞|Máy này được sản xuất ở Đức.|這台機器在德國生產。|
747|điều tra|調查|to investigate|動詞|Cảnh sát đang điều tra vụ này.|警察正在調查此案。|
748|chính sách|政策|policy|名詞|Chính sách thuế đã thay đổi.|稅務政策改變了。|
749|hiện tại|目前|at present|副詞|Hiện tại tôi đang ở Đà Nẵng.|我目前在峴港。|
750|giúp đỡ|幫忙|to help|動詞|Cảm ơn bạn đã giúp đỡ tôi.|謝謝你幫助我。|
751|theo dõi|追蹤|to follow; to monitor|動詞|Tôi theo dõi trang của bạn trên mạng.|我在網路上追蹤你的頁面。|
752|bình tĩnh|冷靜|calm|形容詞|Bình tĩnh nào, không sao đâu.|冷靜點，沒事的。|
753|hồi|當時 / 回|at the time; back then|名詞|Hồi nhỏ tôi sống ở Huế.|小時候我住在順化。|
754|khách sạn|飯店|hotel|名詞|Khách sạn này có hồ bơi.|這間飯店有游泳池。|
755|đối tượng|對象|target; object|名詞|Đối tượng của sản phẩm này là người trẻ.|這項產品的對象是年輕人。|
756|gồm|包含|to include|動詞|Giá này gồm bữa sáng.|這個價格含早餐。|
757|bảng|板 / 表格|board; table|名詞|Xem bảng giá ở đây.|請看這裡的價目表。|
758|thường xuyên|經常|regularly|副詞|Tôi thường xuyên đi công tác.|我經常出差。|
759|cơn|陣 / 場（量詞）|classifier for storms, pain|量詞|Cơn mưa này rất lớn.|這場雨很大。|
760|đảo|島|island|名詞|Phú Quốc là đảo lớn nhất Việt Nam.|富國島是越南最大的島。|
761|kéo|拉 / 剪刀|to pull; scissors|動詞|Kéo cửa ra.|把門拉開。|
762|tiến hành|進行|to carry out|動詞|Chúng ta tiến hành kiểm tra hàng.|我們進行驗貨。|
763|đổi|換|to exchange|動詞|Tôi muốn đổi tiền.|我想換錢。|
764|vé|票|ticket|名詞|Tôi muốn mua hai vé.|我想買兩張票。|
765|chiến đấu|戰鬥|to fight|動詞|Họ đã chiến đấu rất dũng cảm.|他們戰鬥得很勇敢。|
766|thần|神|god; deity|名詞|Đền này thờ thần biển.|這座廟供奉海神。|
767|đám|群 / 場（婚喪）|crowd; ceremony|名詞|Cuối tuần tôi đi đám cưới.|週末我去喝喜酒。|
768|lo lắng|擔憂|to be anxious|動詞|Mẹ tôi rất lo lắng.|我媽媽很擔心。|
769|giải thích|解釋|to explain|動詞|Anh giải thích lại được không?|你可以再解釋一次嗎？|
770|mặc dù|雖然|although|連詞|Mặc dù mệt, tôi vẫn đi làm.|雖然累，我還是去上班。|
771|i|SKIP
772|thông qua|通過 / 透過|to pass; through|動詞|Công ty thông qua kế hoạch mới.|公司通過了新計畫。|
773|sở hữu|擁有|to own|動詞|Anh ấy sở hữu hai cửa hàng.|他擁有兩間店。|
774|công trình|工程|construction project|名詞|Công trình này sắp hoàn thành.|這項工程快完成了。|
775|thông báo|通知|to announce|動詞|Tôi sẽ thông báo cho bạn sau.|我之後再通知你。|
776|đoạn|段落|section|名詞|Đọc đoạn này giúp tôi.|請幫我唸這一段。|
777|giai đoạn|階段|stage|名詞|Dự án đang ở giai đoạn đầu.|專案處於初期階段。|
778|hướng dẫn|指導 / 導覽|to guide; guide|動詞|Anh ấy hướng dẫn tôi cách làm.|他教我怎麼做。|
779|toà|棟 / 法院|classifier for buildings; court|名詞|Văn phòng ở toà nhà này.|辦公室在這棟大樓。|
780|đăng ký|登記 / 註冊|to register|動詞|Tôi muốn đăng ký lớp này.|我想報名這堂課。|
781|v|SKIP
782|hộ|幫忙 / 戶|on behalf of; household|副詞|Anh cầm hộ tôi nhé.|請幫我拿一下。|
783|chiếm|佔據|to occupy|動詞|Nữ chiếm một nửa nhân viên.|女性佔員工的一半。|
784|phá|破壞|to destroy|動詞|Đừng phá đồ của em.|不要弄壞弟弟的東西。|
785|sức|力氣|strength|名詞|Tôi không còn sức nữa.|我沒力氣了。|
786|không gian|空間|space|名詞|Quán này có không gian rất đẹp.|這家店的空間很美。|
787|phương pháp|方法|method|名詞|Đây là phương pháp học rất tốt.|這是很好的學習方法。|
788|tiến|前進|to advance|動詞|Công việc tiến rất nhanh.|工作進展很快。|
789|nắm|抓住 / 把握|to grasp|動詞|Nắm chặt tay tôi nhé.|抓緊我的手喔。|
790|lính|士兵|soldier|名詞|Anh ấy từng là lính.|他曾是軍人。|
791|chấp nhận|接受|to accept|動詞|Tôi chấp nhận giá này.|我接受這個價格。|
792|lệnh|命令|order; command|名詞|Đây là lệnh của giám đốc.|這是總經理的命令。|
793|vũ khí|武器|weapon|名詞|Không được mang vũ khí lên máy bay.|不得攜帶武器上飛機。|
794|già|老（年紀）|old (age)|形容詞|Ông tôi đã già rồi.|我爺爺已經老了。|
795|thả|放開|to release|動詞|Thả cá xuống hồ.|把魚放到湖裡。|
796|khoan|先別 / 鑽孔|hold on; to drill|動詞|Khoan đã, để tôi xem.|等等，讓我看看。|
797|chính thức|正式|official|形容詞|Đây là thông báo chính thức.|這是正式通知。|
798|lạnh|冷|cold|形容詞|Hà Nội mùa đông rất lạnh.|河內冬天很冷。|
799|thú vị|有趣|interesting|形容詞|Chuyến đi này rất thú vị.|這趟旅程很有趣。|
800|đại diện|代表|representative|名詞|Tôi là đại diện của công ty.|我是公司代表。|
801|cụ thể|具體|specific|形容詞|Anh nói cụ thể hơn được không?|你可以說得更具體嗎？|
802|anh em|兄弟 / 大家（男性）|brothers; guys|名詞|Hai anh em rất giống nhau.|兩兄弟長得很像。|
803|sạch|乾淨|clean|形容詞|Phòng này rất sạch.|這間房很乾淨。|
804|nỗi|（情緒名詞）|classifier for sorrow|名詞|Tôi hiểu nỗi buồn của bạn.|我懂你的難過。|
805|the|SKIP
806|tiệc|宴會|party|名詞|Tối nay công ty có tiệc.|今晚公司有宴會。|
807|hấp dẫn|吸引人|attractive|形容詞|Món ăn này trông rất hấp dẫn.|這道菜看起來很誘人。|
808|nhân|人（漢越）/ 餡 / 趁|filling; on the occasion of|名詞|Nhân bánh này là thịt.|這個餅的餡是肉。|nhân dịp＝趁著…之際
809|lực lượng|力量 / 部隊|force|名詞|Lực lượng lao động rất trẻ.|勞動力很年輕。|
810|phụ|輔助|auxiliary; to assist|動詞|Em phụ chị một tay nhé.|我幫姊姊一把吧。|
811|bao|包 / 袋|bag; pack|名詞|Tôi mua một bao gạo.|我買了一袋米。|
812|lửa|火|fire|名詞|Lửa to quá, nhỏ lại đi.|火太大了，調小一點。|
813|nguyên nhân|原因|cause|名詞|Nguyên nhân là gì?|原因是什麼？|
814|lão|老頭 / 老（貶）|old man (rude)|名詞|Lão ấy rất khó tính.|那老頭很難搞。|語氣不敬；敬稱用 ông、cụ
815|buồn|難過|sad|形容詞|Sao bạn buồn thế?|你怎麼這麼難過？|buồn ngủ＝想睡；buồn cười＝好笑
816|hợp tác|合作|to cooperate|動詞|Rất vui được hợp tác với anh.|很高興能與你合作。|
817|bình|瓶 / 壺|bottle; vase|名詞|Cho tôi một bình trà.|請給我一壺茶。|
818|dựa|依靠|to lean on; based on|動詞|Dựa vào kết quả, chúng ta quyết định.|根據結果我們來決定。|
819|cưới|結婚|to marry|動詞|Tháng sau họ cưới.|他們下個月結婚。|
820|tầm|範圍 / 大約|range; around|名詞|Tôi đến tầm tám giờ.|我大約八點到。|
821|mùi|氣味|smell|名詞|Mùi này thơm quá.|這味道好香。|
822|bí mật|秘密|secret|名詞|Đây là bí mật của tôi.|這是我的秘密。|
823|tinh thần|精神|spirit|名詞|Tinh thần làm việc rất tốt.|工作士氣很好。|
824|ngựa|馬|horse|名詞|Năm nay là năm con ngựa.|今年是馬年。|
825|môn|科目|subject|名詞|Bạn thích môn nào nhất?|你最喜歡哪一科？|
826|tình|情感 / 情況|feeling|名詞|Họ có tình cảm rất tốt.|他們感情很好。|
827|vô cùng|無比|extremely|副詞|Tôi vô cùng biết ơn bạn.|我非常感謝你。|
828|nghệ thuật|藝術|art|名詞|Múa rối nước là nghệ thuật đặc sắc.|水上木偶是獨特的藝術。|
829|may|幸好 / 縫製|luckily; to sew|副詞|May quá, tôi tìm được ví rồi.|好險，我找到皮夾了。|
830|công|公 / 功|public; labor|名詞|Nhà vệ sinh công cộng ở đâu?|公共廁所在哪裡？|
831|đổ|倒 / 翻倒|to pour; to fall over|動詞|Đổ nước vào ly.|把水倒進杯子。|
832|túi|袋子 / 包包|bag; pocket|名詞|Cho tôi một cái túi.|請給我一個袋子。|
833|tiếp theo|接下來|next|形容詞|Bước tiếp theo là gì?|下一步是什麼？|
834|lạ|奇怪 / 陌生|strange; unfamiliar|形容詞|Mùi này lạ quá.|這味道好奇怪。|
835|tường|牆|wall|名詞|Treo bức tranh lên tường.|把畫掛到牆上。|
836|quanh|周圍|around|介詞|Quanh đây có quán nào ngon không?|這附近有好吃的店嗎？|
837|đầy đủ|齊全|complete|形容詞|Hồ sơ của bạn đã đầy đủ.|你的資料已經齊全了。|
838|chia|分|to divide|動詞|Chia đều cho mọi người.|平分給大家。|
839|rơi|掉落|to fall|動詞|Điện thoại của tôi bị rơi.|我的手機掉了。|
840|dần|漸漸|gradually|副詞|Tôi dần quen với cuộc sống ở đây.|我漸漸習慣這裡的生活。|
841|thông minh|聰明|smart|形容詞|Con bạn rất thông minh.|你的孩子很聰明。|
842|khẳng định|肯定 / 斷言|to affirm|動詞|Tôi khẳng định điều đó là đúng.|我肯定那是對的。|
843|dầu|油|oil|名詞|Xe hết dầu rồi.|車子沒油了。|
844|công nghiệp|工業|industry|名詞|Bình Dương có nhiều khu công nghiệp.|平陽有很多工業區。|
845|cảnh|風景 / 場景|scenery|名詞|Cảnh ở đây đẹp quá.|這裡風景真美。|
846|bao gồm|包括|to include|動詞|Giá vé bao gồm bữa trưa.|票價包含午餐。|
847|ngừng|停止|to stop|動詞|Mưa đã ngừng rồi.|雨停了。|
848|kết hợp|結合|to combine|動詞|Tôi kết hợp đi công tác và du lịch.|我把出差和旅遊結合起來。|
849|ca|班次 / 唱 / 杯|shift; to sing; mug|名詞|Hôm nay tôi làm ca đêm.|今天我上夜班。|
850|đón|接（人）|to pick up|動詞|Anh ra sân bay đón tôi nhé.|你來機場接我喔。|
851|cháy|燃燒 / 著火|to burn|動詞|Nhà bên kia bị cháy!|對面的房子著火了！|
852|giao thông|交通|traffic|名詞|Giao thông ở Hà Nội rất đông.|河內的交通很擁擠。|
853|mưa|雨 / 下雨|rain|名詞|Trời đang mưa to.|現在正下大雨。|
854|lập|建立 / 制定|to establish|動詞|Chúng tôi lập công ty năm ngoái.|我們去年成立公司。|
855|đô|美元 / 都城|dollar; capital city|名詞|Cái này giá năm đô.|這個要五美元。|
856|họp|開會|to meet|動詞|Chiều nay chúng ta họp.|今天下午我們開會。|
857|chuyên gia|專家|expert|名詞|Anh ấy là chuyên gia kỹ thuật.|他是技術專家。|
858|chi tiết|細節|detail|名詞|Anh gửi chi tiết cho tôi nhé.|請把細節傳給我。|
859|diện tích|面積|area|名詞|Diện tích nhà máy rất lớn.|工廠面積很大。|
860|danh sách|名單|list|名詞|Tên tôi có trong danh sách không?|我的名字在名單上嗎？|
861|mơ|做夢 / 夢想|to dream|動詞|Tôi mơ được sống ở Đà Lạt.|我夢想住在大叻。|
862|trò|遊戲 / 把戲|game|名詞|Trẻ em thích trò này.|小孩喜歡這個遊戲。|
863|ngày mai|明天|tomorrow|副詞|Ngày mai tôi đi Huế.|明天我去順化。|
864|truyền thống|傳統|tradition|名詞|Áo dài là trang phục truyền thống.|奧黛是傳統服飾。|
865|trưởng|長（職位）|chief; head|名詞|Anh ấy là trưởng phòng.|他是部門主管。|
866|ấn tượng|印象|impression|名詞|Tôi rất có ấn tượng với thành phố này.|我對這座城市印象很深。|
867|ghét|討厭|to hate|動詞|Tôi ghét đi muộn.|我討厭遲到。|
868|chứa|裝 / 容納|to contain|動詞|Phòng này chứa được năm mươi người.|這間可容納五十人。|
869|chi phí|費用|cost|名詞|Chi phí vận chuyển là bao nhiêu?|運費是多少？|
870|bạn bè|朋友們|friends|名詞|Tôi đi chơi với bạn bè.|我跟朋友出去玩。|
871|thương mại|貿易 / 商業|commerce|名詞|Đây là trung tâm thương mại lớn nhất.|這是最大的購物中心。|
872|sức mạnh|力量|strength|名詞|Đoàn kết tạo nên sức mạnh.|團結就是力量。|
873|hiện đại|現代|modern|形容詞|Nhà máy này rất hiện đại.|這間工廠很現代化。|
874|nhắc|提醒|to remind|動詞|Nhắc tôi gọi điện cho sếp nhé.|提醒我打給老闆喔。|
875|nói dối|說謊|to lie|動詞|Đừng nói dối tôi.|別對我說謊。|
876|khoẻ|健康 / 好|healthy; well|形容詞|Dạo này bạn khoẻ không?|你最近好嗎？|與 khỏe 同字，兩種寫法都常見
877|tìm hiểu|了解|to learn about|動詞|Tôi muốn tìm hiểu thị trường.|我想了解市場。|
878|dự|參加（會議）|to attend|動詞|Tôi đi dự tiệc cưới.|我去參加喜宴。|
879|bất kỳ|任何|any|限定詞|Bạn có thể chọn bất kỳ món nào.|你可以選任何一道菜。|
880|đùa|開玩笑|to joke|動詞|Tôi chỉ đùa thôi.|我只是開玩笑。|
881|hẹn|約定|to make an appointment|動詞|Hẹn gặp lại!|再會！|
882|y tế|醫療|healthcare|名詞|Bảo hiểm y tế rất quan trọng.|健康保險很重要。|
883|chức năng|功能|function|名詞|Máy này có nhiều chức năng.|這台機器有很多功能。|
884|mục đích|目的|purpose|名詞|Mục đích chuyến đi là gì?|這趟行程的目的是什麼？|
885|nhanh chóng|迅速|quickly|形容詞|Chúng tôi sẽ giao hàng nhanh chóng.|我們會迅速交貨。|
886|học tập|學習|to study|動詞|Môi trường học tập ở đây rất tốt.|這裡的學習環境很好。|
887|chính trị|政治|politics|名詞|Tôi không hiểu nhiều về chính trị.|我不太懂政治。|
888|giả|假的|fake|形容詞|Cái túi này là hàng giả.|這個包是假貨。|
889|thuế|稅|tax|名詞|Giá này đã có thuế chưa?|這個價格含稅了嗎？|
890|gió|風|wind|名詞|Hôm nay gió to quá.|今天風好大。|
891|Đảng|黨（共產黨）|the Party|名詞|Đảng Cộng sản lãnh đạo Việt Nam.|共產黨領導越南。|
892|chiến thắng|戰勝 / 勝利|victory|名詞|Cả nước mừng chiến thắng.|全國慶祝勝利。|
893|áp dụng|應用 / 實施|to apply|動詞|Khuyến mãi này áp dụng đến cuối tháng.|這項優惠適用到月底。|
894|giải pháp|解決方案|solution|名詞|Chúng ta cần giải pháp tốt hơn.|我們需要更好的解決方案。|
895|vui vẻ|愉快|cheerful|形容詞|Chúc bạn cuối tuần vui vẻ!|祝你週末愉快！|
896|việc làm|工作機會|job; employment|名詞|Nhà máy tạo nhiều việc làm.|工廠創造很多工作機會。|
897|liệu|是否 / 料想|whether (wondering)|副詞|Liệu anh ấy có đến không?|不知道他會不會來？|
898|giới|界 / 性別|circle; gender|名詞|Giới trẻ rất thích ứng dụng này.|年輕族群很喜歡這個應用程式。|
899|ổn định|穩定|stable|形容詞|Công việc của tôi khá ổn định.|我的工作相當穩定。|
900|bố mẹ|爸媽|parents|名詞|Bố mẹ tôi sống ở Đài Loan.|我爸媽住在台灣。|
901|thẻ|卡|card|名詞|Ở đây có nhận thẻ không?|這裡收卡嗎？|
902|đằng|那邊|over there; side|名詞|Quán ở đằng kia.|店在那邊。|
903|hạ|降低 / 夏|to lower; summer|動詞|Hạ giá cho tôi đi.|算我便宜一點吧。|
904|trừ|除了 / 扣除|except; to subtract|介詞|Tôi ăn được tất cả, trừ rau mùi.|我什麼都吃，除了香菜。|
905|sự kiện|活動 / 事件|event|名詞|Công ty tổ chức sự kiện lớn.|公司舉辦大型活動。|
906|cộng đồng|社群|community|名詞|Cộng đồng người Đài Loan ở đây rất đông.|這裡的台灣人社群很大。|
907|bất ngờ|意外|surprising|形容詞|Tin này thật bất ngờ.|這個消息真令人意外。|
908|năng lượng|能源|energy|名詞|Năng lượng mặt trời đang phát triển.|太陽能正在發展。|
909|thành lập|成立|to found|動詞|Công ty thành lập năm 2010.|公司成立於 2010 年。|
910|chiến tranh|戰爭|war|名詞|Ông tôi kể về chiến tranh.|我爺爺講述戰爭的事。|
911|vai|肩膀 / 角色|shoulder; role|名詞|Vai tôi bị đau.|我的肩膀痛。|
912|chậm|慢|slow|形容詞|Xin nói chậm lại.|請說慢一點。|
913|số lượng|數量|quantity|名詞|Số lượng đơn hàng là bao nhiêu?|訂單數量是多少？|
914|thở|呼吸|to breathe|動詞|Tôi khó thở.|我呼吸困難。|
915|hội nghị|會議|conference|名詞|Hội nghị diễn ra ở Hà Nội.|會議在河內舉行。|
916|có mặt|在場|to be present|動詞|Tất cả đã có mặt chưa?|大家都到了嗎？|
917|sữa|牛奶|milk|名詞|Cho tôi cà phê sữa đá.|請給我冰奶咖啡。|
918|một vài|幾個|a few|限定詞|Tôi có một vài câu hỏi.|我有幾個問題。|
919|dân tộc|民族|ethnic group|名詞|Việt Nam có năm mươi tư dân tộc.|越南有五十四個民族。|
920|đèn|燈|lamp|名詞|Làm ơn tắt đèn.|請關燈。|
921|chế độ|制度 / 模式|regime; mode|名詞|Điện thoại đang ở chế độ im lặng.|手機在靜音模式。|
922|hút|吸|to suck; to smoke|動詞|Ở đây không được hút thuốc.|這裡不能吸菸。|
923|mạnh mẽ|強而有力|powerful|形容詞|Thị trường tăng trưởng mạnh mẽ.|市場強勁成長。|
924|đơn|單子 / 訂單|form; order|名詞|Anh đã nhận đơn hàng chưa?|你收到訂單了嗎？|
925|thoải mái|舒適 / 自在|comfortable|形容詞|Ghế này rất thoải mái.|這張椅子很舒服。|
926|khoản|款項|sum; item|名詞|Tôi đã trả khoản tiền đó.|我已付了那筆款項。|
927|giáo viên|老師|teacher|名詞|Mẹ tôi là giáo viên tiếng Anh.|我媽媽是英文老師。|
928|tốc độ|速度|speed|名詞|Tốc độ mạng rất chậm.|網速很慢。|
929|đạn|子彈|bullet|名詞|Viên đạn bay qua đầu anh ấy.|子彈從他頭上飛過。|
930|cướp|搶|to rob|動詞|Tôi bị cướp điện thoại.|我的手機被搶了。|
931|thị trấn|鎮|town|名詞|Sa Pa là một thị trấn nhỏ.|沙壩是個小鎮。|
932|thẳng|直|straight|形容詞|Đi thẳng rồi rẽ phải.|直走再右轉。|
933|giám đốc|總經理|director|名詞|Giám đốc đang họp.|總經理正在開會。|
934|khóc|哭|to cry|動詞|Em bé đang khóc.|小寶寶在哭。|
935|quân đội|軍隊|army|名詞|Anh trai tôi đi quân đội.|我哥哥去當兵。|
936|an ninh|安全 / 保安|security|名詞|Đi qua cửa an ninh ở sân bay.|通過機場安檢門。|
937|vai trò|角色|role|名詞|Bạn có vai trò rất quan trọng.|你的角色很重要。|
938|thức ăn|食物|food|名詞|Thức ăn ở đây rất tươi.|這裡的食物很新鮮。|
939|viện|院（機構）|institute|名詞|Anh ấy làm ở viện nghiên cứu.|他在研究院工作。|
940|địa chỉ|地址|address|名詞|Địa chỉ của bạn là gì?|你的地址是什麼？|
941|nạn nhân|受害者|victim|名詞|Nạn nhân đã được đưa đi bệnh viện.|傷者已被送往醫院。|
942|di chuyển|移動|to move|動詞|Tôi di chuyển bằng xe máy.|我騎機車移動。|
943|cơ bản|基本|basic|形容詞|Tôi biết tiếng Việt cơ bản.|我會基礎越語。|
944|cục|塊 / 局|lump; bureau|名詞|Cho tôi thêm vài cục đá.|請再給我幾塊冰。|
945|vì vậy|因此|therefore|連詞|Trời mưa, vì vậy tôi ở nhà.|下雨了，因此我待在家。|
946|bờ|岸|shore|名詞|Chúng tôi đi dạo dọc bờ biển.|我們沿著海岸散步。|
947|hợp đồng|合約|contract|名詞|Chúng ta ký hợp đồng nhé.|我們簽合約吧。|
948|giành|爭取|to win; to compete for|動詞|Họ giành giải nhất.|他們奪得第一名。|
949|trồng|種植|to plant|動詞|Nhà tôi trồng nhiều rau.|我家種很多菜。|
950|địa bàn|區域 / 轄區|local area|名詞|Công ty mở rộng địa bàn hoạt động.|公司擴大營運範圍。|
951|màn hình|螢幕|screen|名詞|Màn hình điện thoại bị vỡ.|手機螢幕破了。|
952|nét|筆畫 / 清晰|stroke; sharp|名詞|Hình này rất nét.|這張圖很清晰。|
953|Bắc|北|north|名詞|Tôi thích món ăn miền Bắc.|我喜歡北部菜。|
954|dạng|類型 / 形式|form|名詞|Thuốc này có dạng viên.|這種藥是錠狀。|
955|yếu tố|因素|factor|名詞|Giá là yếu tố quan trọng.|價格是重要因素。|
956|chặt|砍 / 緊|to chop; tight|動詞|Chặt thịt gà thành miếng nhỏ.|把雞肉剁成小塊。|
957|gà|雞|chicken|名詞|Tôi thích ăn cơm gà.|我喜歡吃雞肉飯。|
958|đồng chí|同志|comrade|名詞|Xin chào các đồng chí.|各位同志好。|僅官方場合使用
959|Nhật Bản|日本|Japan|名詞|Xe này được nhập từ Nhật Bản.|這輛車從日本進口。|
960|án|案件 / 判決|case; verdict|名詞|Toà đã xử xong vụ án.|法院已審結此案。|
961|giường|床|bed|名詞|Tôi muốn phòng có hai giường.|我想要有兩張床的房間。|
962|giọng|口音 / 聲音|accent; voice|名詞|Giọng miền Nam rất dễ nghe.|南部口音很好聽。|
963|cưng|寶貝 / 疼愛|darling; to pamper|動詞|Bà rất cưng cháu.|奶奶很疼孫子。|
964|liên lạc|聯絡|to contact|動詞|Tôi sẽ liên lạc với bạn sau.|我之後再聯絡你。|
965|phố|街|street|名詞|Phố cổ Hà Nội rất đông.|河內古街人很多。|
966|cà phê|咖啡|coffee|名詞|Cho tôi một ly cà phê.|請給我一杯咖啡。|
967|nghèo|窮|poor|形容詞|Gia đình tôi ngày xưa rất nghèo.|我家以前很窮。|
968|chim|鳥|bird|名詞|Con chim này hót rất hay.|這隻鳥叫得很好聽。|
969|gấp|急 / 摺疊|urgent; to fold|形容詞|Việc này rất gấp.|這件事很急。|
970|miệng|嘴|mouth|名詞|Mở miệng ra nào.|張開嘴巴。|
971|hệ|系統 / 學制|system; program type|名詞|Em ấy học hệ đại học chính quy.|他讀的是正規大學部。|
972|phối hợp|協調 / 配合|to coordinate|動詞|Hai bộ phận cần phối hợp tốt hơn.|兩個部門需要更好的配合。|
973|thuyền|船|boat|名詞|Chúng tôi đi thuyền trên vịnh Hạ Long.|我們在下龍灣搭船。|
974|chủ yếu|主要|mainly|副詞|Tôi chủ yếu làm ở văn phòng.|我主要在辦公室工作。|
975|thu hút|吸引|to attract|動詞|Hội An thu hút nhiều du khách.|會安吸引很多遊客。|
976|b|SKIP
977|đáp ứng|滿足（需求）|to meet (needs)|動詞|Chúng tôi đáp ứng yêu cầu của khách.|我們滿足客戶的要求。|
978|nhẹ|輕|light|形容詞|Túi này rất nhẹ.|這個包很輕。|
979|tư vấn|諮詢|to consult|動詞|Anh tư vấn giúp tôi nhé.|請幫我提供建議。|
980|hôn|親吻|to kiss|動詞|Mẹ hôn con.|媽媽親孩子。|
981|chữa|治療 / 修理|to treat; to fix|動詞|Anh có chữa được xe này không?|你能修這輛車嗎？|
982|đẩy|推|to push|動詞|Đẩy cửa ra.|把門推開。|
983|liền|立刻|right away|副詞|Tôi đi liền.|我馬上去。|
984|cửa hàng|商店|store|名詞|Cửa hàng này mở đến mấy giờ?|這家店開到幾點？|
985|rắc rối|麻煩|trouble|名詞|Tôi không muốn có rắc rối.|我不想惹麻煩。|
986|pháp luật|法律|law|名詞|Chúng ta phải tuân thủ pháp luật.|我們必須遵守法律。|
987|ý tưởng|點子|idea|名詞|Đây là ý tưởng rất hay.|這是很棒的點子。|
988|lưng|背|back|名詞|Tôi bị đau lưng.|我背痛。|
989|đuổi|追 / 趕走|to chase; to expel|動詞|Con chó đuổi theo con mèo.|狗追著貓。|
990|bom|炸彈|bomb|名詞|Bom từ thời chiến tranh vẫn còn.|戰爭時期的炸彈還在。|
991|ghế|椅子|chair|名詞|Mời ngồi ghế này.|請坐這張椅子。|
992|điều khiển|操控 / 遙控器|to control; remote|動詞|Cái điều khiển ở đâu rồi?|遙控器跑哪去了？|
993|vay|借（款）|to borrow|動詞|Tôi muốn vay ngân hàng.|我想跟銀行貸款。|
994|tắm|洗澡|to bathe|動詞|Tôi đi tắm trước nhé.|我先去洗澡喔。|
995|ha|哈 / 喔（南部）|ha; right? (Southern)|感嘆詞|Vui ha!|好開心喔！|
996|hại|害 / 有害|harm; harmful|動詞|Hút thuốc hại sức khoẻ.|吸菸有害健康。|
997|thoả thuận|協議|to agree; agreement|名詞|Hai bên đã có thoả thuận.|雙方已達成協議。|
998|hoàn hảo|完美|perfect|形容詞|Mọi thứ đều hoàn hảo.|一切都很完美。|
999|hội đồng|委員會|council|名詞|Hội đồng đang họp.|委員會正在開會。|
1000|mắc|貴（南部）/ 犯 / 卡住|expensive (South); to make (error)|形容詞|Sao mắc quá vậy?|怎麼這麼貴？|南部殺價常聽到；北部說 đắt
`;
