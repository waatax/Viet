// v2.19 baseline: 180 concepts. One additional transfer concept per module.
// [concept, Vietnamese, meaning, rule, Chinese-transfer trap, speaking task]
export const knowledgeBridge = {
  path: ['把不懂說清楚', 'Tôi hiểu từ này, nhưng chưa hiểu cả câu.', '我懂這個詞，但還沒懂整句。', 'từ 是詞；cả câu 是整句。先定位不懂的範圍，再請對方協助。', '聽到熟詞不等於理解整段，不能只用點頭代替確認。', '改成懂整句但不懂這個詞，說一次。'],
  alphabet: ['韻尾不另加母音', 'Tôi thích học tiếng Việt.', '我喜歡學越南文。', 'thích、học、Việt 的塞音韻尾收住；先聽原速再短句跟讀。', '不要在詞尾加中文「克、特」的額外母音。', '分別讀 học 和 Việt，再放回完整句。'],
  tonegame: ['聲調放回語境', 'Cái bàn này rất bẩn.', '這張桌子很髒。', 'bàn 是桌子，bẩn 是髒；聲調和母音都要保留，不能只猜調型。', 'bàn 與 bẩn 不只是聲調差異，也有 a／â 的差別。', '指出兩詞的母音與調號，再讀完整句。'],
  pronoun: ['先問合適稱呼', 'Tôi nên xưng hô thế nào?', '我該怎麼稱呼比較合適？', 'xưng hô 包含自稱與對稱；不確定關係時可以詢問。', '不要僅按職業或外表就固定把所有人稱作 em。', '設定一位年長同事，練習詢問與回應稱呼。'],
  shopping: ['確認每件或總共', 'Giá này là cho một cái hay cả hai?', '這個價錢是一個還是兩個合計？', 'một cái 指一個；cả hai 指兩個全部；hay 提出兩個選項。', '聽懂金額後仍須確認單價、數量與總額。', '將兩個改成三個，再問一次總價。'],
  phrases: ['先道歉再修復', 'Xin lỗi, tôi nghe chưa rõ.', '不好意思，我沒聽清楚。', 'nghe chưa rõ 描述聽得不清楚；需要重說時可接請求句。', '沒聽清楚不等於不同意；先說明問題，避免誤解。', '接上一句請對方說慢一點的請求。'],
  grammar: ['形容詞不用 là', 'Món này ngon nhưng hơi cay.', '這道菜好吃，但有點辣。', 'ngon 和 cay 可直接作述語；hơi 表程度偏輕。', '中文「是好吃的」不能逐字搬成 là ngon。', '把辣換成甜 ngọt，描述一道甜點。'],
  sentence: ['兩種選擇用 hay', 'Bạn muốn uống trà hay cà phê?', '你想喝茶還是咖啡？', '選擇問句用 hay 連接可選項目；逐項聽懂後回覆其中一項。', '不要將選擇問句一律套成 có…không 的是非問句。', '把選項改成熱茶與冰茶。'],
  hanviet: ['漢字聯想後查搭配', 'Tôi là sinh viên, không phải giáo viên.', '我是大學生，不是老師。', 'sinh viên 通常指大專學生；giáo viên 是教師；否定名詞判斷可用 không phải。', '不能把所有學生都稱為 sinh viên；中小學生常用 học sinh。', '換成「我是老師，不是大學生」。'],
  conversation: ['重述數量再確認', 'Hai người, lúc bảy giờ tối, đúng không?', '兩個人，晚上七點，對嗎？', '重述人數與時段，再以 đúng không 請對方確認。', 'bảy giờ 單獨只有七點，加入 tối 才清楚表示晚上。', '改成三個人、晚上六點，再確認一次。'],
  accent: ['地域詞不必改拼字', 'Tôi muốn một cốc nước.', '我想要一杯水。', 'cốc 與 ly 都可作杯的稱呼；地區使用偏好不等於唯一標準。', '遇到不同地區用詞先確認意思，不要判定對方說錯。', '把 cốc 換成 ly，維持相同需求。'],
  shadowing: ['短語分段再合句', 'Ngày mai tôi sẽ gọi lại.', '明天我會再打來。', '先聽整句，再按 Ngày mai／tôi sẽ／gọi lại 分組跟讀，最後回到整句。', '不要為了逐字追上音檔而破壞語塊與意思。', '將明天換成 hôm nay（今天），自然重述。'],
  business: ['委婉要求再確認', 'Anh có thể xác nhận lại số lượng không?', '可以請你再確認數量嗎？', 'có thể…không 提出請求；xác nhận lại 表再次確認。', '數量、幣別與交期要逐項核對，不能只回覆「可以」。', '把數量換成時間 thời gian，再提出請求。'],
  macropol: ['預測不等於事實', 'Giá có thể tăng trong tháng tới.', '價格可能在下個月上升。', 'có thể 標示可能性；tháng tới 限定未來期間，此處只作語言例句。', '不能刪掉「可能」後把預測翻成已確定的事實。', '把上升 tăng 改成下降 giảm，保留不確定語氣。'],
  quiz: ['區分否定與未完成', 'Tôi không uống cà phê.', '我不喝咖啡。', 'không 在這裡否定喝咖啡；chưa uống 則表示還沒喝。', 'không 不一定表示永遠拒絕；須按上下文判斷習慣或當次選擇。', '改成「我還沒喝咖啡」，解釋意義差異。'],
  flashcards: ['單詞連同搭配提取', 'Tôi thường đi bộ vào buổi sáng.', '我通常早上散步。', '把 đi bộ 作為搭配記憶；thường 是經常，buổi sáng 是早上。', '只會翻譯 bộ 的單字義，未必能說出「散步」。', '遮住例句，從「早上散步」重建整句。'],
  topics: ['需求加上排除條件', 'Cho tôi một ly trà, không đường.', '請給我一杯茶，不加糖。', '先交代物品與數量，再補不加糖；可用 ít đường 表少糖。', 'không đường 是無糖；ít đường 是少糖，兩者不能混用。', '改成兩杯少糖茶，核對數量與糖量。'],
  fasttrack: ['先確認再行動', 'Cho tôi xuống ở đây.', '請讓我在這裡下車。', 'xuống 在此表示下車；ở đây 表這裡，配合明確地點使用。', '不要只說「這裡」就假設對方知道要停車或下車。', '接上一句禮貌致謝，演練下車對話。'],
  emergency: ['坦白資訊不確定', 'Tôi không nhớ địa chỉ.', '我不記得地址。', 'không nhớ 表不記得；可搭配地圖或已知地標協助定位。', '不知道地址時不要臆測，用實際可確認的資訊協助對方。', '接上目前所在飯店或地標的短句。'],
  science: ['延後提取觀察差異', 'Hôm nay tôi nhớ được năm từ.', '今天我能想起五個詞。', 'nhớ được 在此描述成功想起；用同一提示條件比較隔日表現。', '當天看過五次不等於隔天能想起；不要把熟悉感當成果。', '隔日不看原文再說，記下是否需要提示。']
};

export const bridgeDetails = Object.fromEntries(Object.entries(knowledgeBridge).map(([id, [concept, vi, zh, rule, trap, task]]) => [id, {
  concept, syntax: `${vi} → ${zh}`, usage: rule, trap,
  mnemonic: `先辨認差異，再換條件：${task}`,
  infograph: { type: 'flow', title: `${concept}：遷移練習路徑`, steps: [
    { title: '聽與辨認', desc: vi }, { title: '理解差異', desc: rule }, { title: '換條件說', desc: task }
  ] }
}]));

// Plausible meaning contrasts: feedback points back to the exact source sentence.
const distractors = {
  path: ['我完全不懂這個詞，但懂整句。', '我已經懂每一個詞和整句。'],
  alphabet: ['我不喜歡學越南文。', '我喜歡教中文。'],
  tonegame: ['這張桌子很乾淨。', '這位朋友很忙。'],
  pronoun: ['我應該在哪裡工作？', '你叫什麼名字？'],
  shopping: ['這兩個是免費的嗎？', '這個價錢是一百還是兩百？'],
  phrases: ['不好意思，我不同意。', '不好意思，我已經聽清楚了。'],
  grammar: ['這道菜不好吃，也不辣。', '這道菜好吃，但太甜。'],
  sentence: ['你想買茶和咖啡嗎？', '你已經喝過茶和咖啡了嗎？'],
  hanviet: ['我是老師，不是大學生。', '我是中小學生，也是老師。'],
  conversation: ['七個人，晚上兩點，對嗎？', '兩個人，早上七點，對嗎？'],
  accent: ['我想要一瓶牛奶。', '我不想喝水。'],
  shadowing: ['昨天我已經打過電話。', '明天我不會再打來。'],
  business: ['可以請你取消這批數量嗎？', '你已經改變價格了嗎？'],
  macropol: ['價格上個月已經上升。', '價格下個月一定下降。'],
  quiz: ['我還沒喝咖啡。', '我已經喝完咖啡。'],
  flashcards: ['我通常晚上搭車。', '我偶爾早上跑步。'],
  topics: ['請給我兩杯少糖茶。', '請給我一杯加糖咖啡。'],
  fasttrack: ['請在這裡讓我上車。', '請帶我去那裡。'],
  emergency: ['我知道完整地址。', '我沒有帶護照。'],
  science: ['昨天我背過五次。', '今天我忘了所有詞。']
};
export const bridgeChecks = Object.fromEntries(Object.entries(knowledgeBridge).map(([id, row], i) => {
  const answer = i % 3;
  const options = [...distractors[id]];
  options.splice(answer, 0, row[2]);
  return [id, [row[1], options, answer, `${row[3]} ${row[4]}`]];
}));
