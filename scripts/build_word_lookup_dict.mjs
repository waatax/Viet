/**
 * Compiles a comprehensive, compact offline Vietnamese -> Traditional Chinese lookup dictionary
 * from ALL curated datasets in the Viet project into public/data/vi-zh-dict.json.
 *
 * Format (minimizes JSON & gzip size):
 *   "word": "繁中簡譯"                       (when no hanViet & no pos)
 *   "word": ["繁中簡譯", "漢越", "詞性縮寫"]  (trailing empty strings trimmed)
 *
 * Run: node scripts/build_word_lookup_dict.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { VOCABULARY } from '../src/data/vocabularyQuality.js';
import * as vietData from '../src/data/vietnameseData.js';
import * as quickBilingual from '../src/data/quickBilingualData.js';
import * as businessData from '../src/data/businessData.js';
import * as confusableDeck from '../src/data/confusableDeckData.js';
import * as situationalScenarios from '../src/data/situationalScenarios.js';
import * as situationalTopics from '../src/data/situationalTopicsData.js';
import * as macroData from '../src/data/macroData.js';
import * as vietnameseSongs from '../src/data/vietnameseSongs.js';
import * as questCurriculum from '../src/data/questCurriculumData.js';
import * as contentExpansion from '../src/data/contentExpansion.js';
import * as conceptDetails from '../src/data/conceptDetails.js';
import * as knowledgeGuides from '../src/data/knowledgeGuides.js';
import * as knowledgeMastery from '../src/data/knowledgeMasteryData.js';
import * as knowledgeAdvanced from '../src/data/knowledgeAdvanced.js';
import * as knowledgeExtensions from '../src/data/knowledgeExtensions.js';
import * as listeningLessons from '../src/data/listeningLessons.js';
import * as scenarioExegesis from '../src/data/scenarioExegesisData.js';
import * as pronunciationCards from '../src/data/pronunciationCards.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_PATH = path.join(ROOT, 'public', 'data', 'vi-zh-dict.json');

const POS_SHORT = {
  '名詞': '名',
  '動詞': '動',
  '形容詞': '形',
  '副詞': '副',
  '代名詞': '代',
  '介詞': '介',
  '連詞': '連',
  '助詞': '助',
  '限定詞': '限',
  '量詞': '量',
  '數詞': '數',
  '感嘆詞': '嘆',
  '片語': '片',
  '成語': '成',
  '稱謂': '稱',
  '字素': '字',
  '專名': '專'
};

/**
 * Generates Vietnamese old-style <-> new-style tone placement variants for oa/oe/uy
 * (e.g. "hóa" <-> "hoá", "khỏe" <-> "khoẻ", "thủy" <-> "thuỷ").
 */
const TONE_SWAP_PAIRS = [
  ['óa', 'oá'], ['òa', 'oà'], ['ỏa', 'oả'], ['õa', 'oã'], ['ọa', 'oạ'],
  ['óe', 'oé'], ['òe', 'oè'], ['ỏe', 'oẻ'], ['õe', 'oẽ'], ['ọe', 'oẹ'],
  ['úy', 'uý'], ['ùy', 'uỳ'], ['ủy', 'uỷ'], ['ũy', 'uỹ'], ['ụy', 'uỵ']
];

export function getOrthographyVariants(str) {
  const set = new Set([str]);
  for (const [a, b] of TONE_SWAP_PAIRS) {
    for (const cur of [...set]) {
      if (cur.includes(a)) set.add(cur.replaceAll(a, b));
      if (cur.includes(b)) set.add(cur.replaceAll(b, a));
    }
  }
  return [...set];
}

// High-priority essential words, everyday compounds, proverbs, place names & native syllables
const ESSENTIAL_OVERRIDES = [
  ['xin chào', '你好 / 您好', '', '嘆'],
  ['chào', '打招呼 / 你好', '', '動'],
  ['cảm ơn', '謝謝 / 感謝', '感恩', '動'],
  ['cám ơn', '謝謝 / 感謝', '感恩', '動'],
  ['xin lỗi', '對不起 / 不好意思', '', '動'],
  ['tạm biệt', '再見', '暫別', '嘆'],
  ['hẹn gặp lại', '回頭見 / 再會', '', '片'],
  ['không có gì', '不客氣 / 沒什麼', '', '片'],
  ['không sao', '沒關係 / 沒事', '', '片'],
  ['việt nam', '越南', '越南', '專'],
  ['tiếng việt', '越南語 / 越文', '', '名'],
  ['đài loan', '台灣', '台灣', '專'],
  ['đài tệ', '新台幣 (TWD)', '台幣', '名'],
  ['hà nội', '河內（越南首都）', '河內', '專'],
  ['sài gòn', '西貢（胡志明市）', '柴棍', '專'],
  ['gòn', '西貢（Sài Gòn 簡稱）', '', '專'],
  ['hồ chí minh', '胡志明', '胡志明', '專'],
  ['thành phố hồ chí minh', '胡志明市', '胡志明市', '專'],
  ['đà nẵng', '峴港（中越第一大城）', '沱灢', '專'],
  ['nẵng', '峴港（Đà Nẵng）', '', '專'],
  ['đà lạt', '大叻（高原山城）', '大叻', '專'],
  ['vũng tàu', '頭頓（海濱城市）', '淎 Tàu', '專'],
  ['nha trang', '芽莊', '芽莊', '專'],
  ['hội an', '會安（古鎮）', '會安', '專'],
  ['phú quốc', '富國島', '富國', '專'],
  ['cần thơ', '芹苴（湄公河大城）', '芹苴', '專'],
  ['huế', '順化（古都）', '順化', '專'],
  ['bình dương', '平陽省', '平陽', '專'],
  ['đồng nai', '同奈省', '同奈', '專'],
  ['bến thành', '檳城（胡志明市地標）', '𤅶城', '專'],
  ['củ chi', '古芝（地道遺址）', '糾支', '專'],
  ['cửu long', '九龍江（湄公河）', '九龍', '專'],
  ['tiếng trung', '中文 / 華語', '', '名'],
  ['tiếng hoa', '華語 / 中文', '', '名'],
  ['tiếng anh', '英文 / 英語', '', '名'],
  ['cà phê', '咖啡', '咖啡', '名'],
  ['cà phê sữa đá', '越式冰奶咖啡', '', '名'],
  ['cà phê phin', '越式滴漏咖啡', '', '名'],
  ['phở', '越南河粉', '粉', '名'],
  ['phở bò', '牛肉河粉', '', '名'],
  ['tái', '半熟 / 生燙（牛肉）', '再', '形'],
  ['nạm', '牛腩', '', '名'],
  ['quẩy', '油條', '鬼', '名'],
  ['bánh mì', '越式法國麵包', '餅麵', '名'],
  ['bún chả', '烤肉米線', '', '名'],
  ['bún bò', '牛肉米線', '', '名'],
  ['gỏi cuốn', '越式生春捲', '', '名'],
  ['trà đá', '冰茶', '茶石', '名'],
  ['vỉa hè', '人行道 / 路邊攤', '', '名'],
  ['vỉa', '路邊 / 人行道邊', '', '名'],
  ['quán nhậu', '越式熱炒啤酒攤', '', '名'],
  ['dzô', '乾杯！（南越歡呼）', '', '嘆'],
  ['vô', '進來 / 乾杯（南越）', '入', '動'],
  ['bao nhiêu', '多少', '', '代'],
  ['bao nhiêu tiền', '多少錢', '', '片'],
  ['ở đâu', '在哪裡', '', '代'],
  ['tại sao', '為什麼', '', '代'],
  ['như thế nào', '怎麼樣 / 如何', '', '代'],
  ['khi nào', '什麼時候', '', '代'],
  ['mấy giờ', '幾點', '', '代'],
  ['bây giờ', '現在', '', '名'],
  ['bây', '現在（bây giờ）', '', '代'],
  ['hôm nay', '今天', '', '名'],
  ['ngày mai', '明天', '', '名'],
  ['hôm qua', '昨天', '', '名'],
  ['một chút', '一點點 / 稍微', '', '副'],
  ['rất vui', '很高興', '', '形'],
  ['hân hạnh', '榮幸（商務客套）', '欣幸', '形'],
  ['chúc mừng', '恭喜 / 祝賀', '祝', '動'],
  ['ngon quá', '太好吃了', '', '形'],
  ['đẹp quá', '太美了', '', '形'],
  ['đúng rồi', '對了 / 沒錯', '', '片'],
  ['được rồi', '好了 / 可以了', '', '片'],
  ['tính tiền', '結帳 / 買單', '算錢', '動'],
  ['cho tôi', '請給我', '', '片'],
  ['làm ơn', '麻煩 / 請', '', '片'],
  ['có thể', '可以 / 能夠', '可體', '助'],
  ['chúng ta', '我們（含對方）', '眾', '代'],
  ['chúng tôi', '我們（不含對方）', '眾', '代'],
  ['các bạn', '你們 / 各位朋友', '', '代'],
  ['anh ấy', '他（較年長男性）', '', '代'],
  ['chị ấy', '她（較年長女性）', '', '代'],
  ['cô ấy', '她（女性）', '', '代'],
  ['em ấy', '他 / 她（較年幼者）', '', '代'],
  ['họ', '他們 / 她們 / 姓氏', '', '代'],
  ['mình', '自己 / 我（親切）', '', '代'],
  ['nhau', '互相 / 彼此', '', '代'],
  ['lời nói', '話語 / 言談', '', '名'],
  ['vừa lòng', '稱心 / 滿意', '', '形'],
  ['lựa lời', '擇言 / 慎選話語', '', '動'],
  ['tiền mua', '買東西的錢', '', '名'],
  ['nhé', '喔 / 吧（親切語氣）', '', '助'],
  ['nha', '喔 / 吧（南越親切語氣）', '', '助'],
  ['ạ', '（敬語句尾詞）', '', '助'],
  ['ơi', '欸 / 喂（呼喚語氣）', '', '助'],
  ['à', '啊 / 嗎（確認語氣）', '', '助'],
  ['ừ', '嗯（對平輩/晚輩）', '', '嘆'],
  ['vâng', '是的（北越敬語）', '', '嘆'],
  ['dạ', '是的（南越敬語）', '', '嘆'],
  ['khỏe', '健康 / 好嗎', '', '形'],
  ['rẽ', '轉彎', '', '動'],
  ['rẽ trái', '左轉', '', '動'],
  ['rẽ phải', '右轉', '', '動'],
  ['đi thẳng', '直走', '', '動'],
  ['tô', '大碗（湯碗）', '', '量'],
  ['chén', '小碗 / 飯碗（南越）', '盞', '量'],
  ['bát', '飯碗（北越）', '鉢', '量'],
  ['đĩa', '盤 / 碟', '碟', '量'],
  ['đũa', '筷子', '箸', '名'],
  ['muỗng', '湯匙（南越）', '', '名'],
  ['thìa', '湯匙（北越）', '匙', '名'],
  ['rưỡi', '半（一點半、五十）', '', '數'],
  ['nghề', '職業 / 手藝', '藝', '名'],
  ['sốt', '發燒 / 醬汁', '', '動'],
  ['sâu', '深 / 蟲', '深', '形'],
  ['sổ', '本子 / 冊子', '簿', '名'],
  ['hộ chiếu', '護照', '護照', '名'],
  ['sân bay', '機場', '', '名'],
  ['sân', '場地 / 院子', '', '名'],
  ['khách sạn', '飯店 / 旅館', '客棧', '名'],
  ['nhà hàng', '餐廳', '', '名'],
  ['bệnh viện', '醫院', '病院', '名'],
  ['ngân hàng', '銀行', '銀行', '名'],
  ['xe buýt', '公車 / 巴士', '', '名'],
  ['buýt', '巴士（源自 bus）', '', '名'],
  ['xe máy', '機車 / 摩托車', '', '名'],
  ['tài xế', '司機', '財車', '名'],
  ['trông', '看起來 / 照看', '', '動'],
  ['rằng', '說 / 道（引述連詞）', '', '連'],
  ['riêng', '各自 / 私人 / 單獨', '', '形'],
  ['trở', '返回 / 變成', '', '動'],
  ['trở lại', '回到 / 再回來', '', '動'],
  ['nguồn', '來源 / 源頭', '源', '名'],
  ['tội', '罪 / 可憐', '罪', '名'],
  ['khóa', '鎖 / 課程屆別', '鎖/課', '名'],
  ['trận', '場 / 陣（比賽、雨）', '陣', '量'],
  ['hòa', '和平 / 平手 / 融和', '和', '形'],
  ['nguyễn', '阮（越南第一大姓）', '阮', '專'],
  ['trần', '陳（常見姓氏）/ 天花板', '陳', '專'],
  ['lê', '黎（常見姓氏）/ 梨子', '黎', '專'],
  ['phạm', '范（常見姓氏）', '范', '專'],
  ['huỳnh', '黃（南越常見姓氏）', '黃', '專'],
  ['hoàng', '黃（北越常見姓氏）/ 皇', '黃/皇', '專'],
  ['vũ', '武（姓氏）/ 舞 / 羽', '武/舞', '專'],
  ['đặng', '鄧（常見姓氏）', '鄧', '專'],
  ['bùi', '裴（常見姓氏）', '裴', '專'],
  ['đỗ', '杜（常見姓氏）/ 停靠', '杜', '專'],
  ['ngô', '吳（姓氏）/ 玉米', '吳', '專'],
  ['dương', '楊（姓氏）/ 陽 / 洋', '楊/陽', '專'],
  ['tuấn', '俊（常見人名）', '俊', '專'],
  ['hùng', '雄（常見人名）', '雄', '專'],
  ['minh', '明（常見人名 / 聰明）', '明', '專'],
  ['linh', '靈 / 玲（常見人名）', '靈', '專'],
  ['lan', '蘭（常見人名 / 蘭花）', '蘭', '專'],
  ['hương', '香（常見人名 / 香氣）', '香', '專'],
  ['sĩ', '士 / 專業人士（如 bác sĩ）', '士', '字'],
  ['sản', '產 / 產品（如 sản xuất）', '產', '字'],
  ['tác', '作 / 合作（如 hợp tác）', '作', '字'],
  ['tính', '計算 / 性質 / 打算', '性/算', '動'],
  ['nhận', '收到 / 接收 / 確認', '認', '動'],
  ['hóa', '化 / 貨品（hàng hóa）', '化/貨', '名'],
  ['tiêu', '消費 / 目標 / 胡椒', '消/標', '動'],
  ['dụng', '用 / 使用（sử dụng）', '用', '動'],
  ['giám', '監 / 總監（giám đốc）', '監', '字'],
  ['suất', '率 / 效率（lãi suất 利率）', '率', '名'],
  ['thức', '識 / 方式 / 醒著', '識/式', '動'],
  ['bất', '不 / 非（如 bất ngờ）', '不', '副'],
  ['trợ', '助 / 補助（hỗ trợ）', '助', '動'],
  ['thường', '經常 / 普通 / 平常', '常', '副'],
  ['trị', '治 / 價值（giá trị）', '治/值', '動'],
  ['nhiên', '然（tự nhiên 自然）', '然', '字'],
  ['thoại', '話（điện thoại 電話）', '話', '字'],
  ['triển', '展（phát triển 發展）', '展', '字'],
  ['kiến', '見 / 意見（ý kiến）/ 螞蟻', '見', '名'],
  ['sạn', '棧（khách sạn 飯店）/ 砂礫', '棧', '名'],
  ['nguyên', '原 / 完整 / 元', '原/元', '形'],
  ['tích', '積 / 面積 / 分析', '積/析', '字'],
  ['kiện', '件 / 條件 / 包裹', '件', '量'],
  ['sử', '史 / 使（lịch sử 歷史）', '史/使', '字'],
  ['mại', '貿 / 賣（thương mại 商貿）', '貿', '字'],
  ['sơ', '初 / 簡略（hồ sơ 檔案）', '初/疏', '形'],
  ['hoạch', '劃（kế hoạch 計畫）', '劃', '字'],
  ['huyền', '玄 / 玄聲（越語第二聲）', '玄', '名'],
  ['hạnh', '幸 / 品行（hạnh phúc 幸福）', '幸/行', '字'],
  ['hoạt', '活（hoạt động 活動）', '活', '字'],
  ['thảo', '討 / 草（thảo luận 討論）', '討/草', '字'],
  ['hữu', '友 / 有（hữu ích 有益）', '友/有', '字'],
  ['trì', '持（duy trì 維持）', '持', '字'],
  ['thiểu', '少（tối thiểu 至少）', '少', '字'],
  ['giác', '覺 / 角（cảm giác 感覺）', '覺/角', '字'],
  ['thẩm', '審（thẩm định 審定）', '審', '字'],
  ['cư', '居（dân cư 居民）', '居', '字'],
  ['nhiệm', '任（trách nhiệm 責任）', '任', '字'],
  ['tố', '素 / 控告（yếu tố 要素）', '素/訴', '字'],
  ['trách', '責 / 責備（trách nhiệm）', '責', '動'],
  ['tiểu', '小（tiểu học 小學）', '小', '字'],
  ['khả', '可（khả năng 可能/能力）', '可', '字'],
  ['niên', '年（thanh niên 青年）', '年', '字'],
  ['cường', '強（tăng cường 加強）', '強', '字'],
  ['khấu', '扣（chiết khấu 折扣 / xuất khẩu）', '扣', '字'],
  ['khẩn', '緊 / 緊急（khẩn cấp）', '緊', '形'],
  ['trạng', '狀 / 狀態（tình trạng）', '狀', '字'],
  ['tàng', '藏（bảo tàng 博物館）', '藏', '字'],
  ['tôn', '尊 / 孫 / 鐵皮屋頂', '尊/孫', '動'],
  ['đương', '當（tương đương 相當）', '當', '字'],
  ['tránh', '避免 / 閃避', '避', '動'],
  ['suối', '泉水 / 溪流（nước suối 礦泉水）', '泉', '名'],
  ['niêm', '封貼 / 標示（niêm yết 標價）', '黏', '動'],
  ['rút', '提領 / 抽出（rút tiền 提款）', '', '動'],
  ['sếp', '老闆 / 主管（口語）', '', '名'],
  ['ngò', '香菜 / 芫荽（南越）', '', '名'],
  ['nổ', '爆炸 / 爆胎 / 發動', '', '動'],
  ['mắn', '幸運（may mắn）/ 多產', '', '形'],
  ['nhạt', '清淡 / 淡（味道、顏色）', '', '形'],
  ['phộng', '花生（đậu phộng）', '', '名'],
  ['lãm', '覽（triển lãm 展覽）', '覽', '字'],
  ['vựng', '彙（từ vựng 詞彙）', '彙', '字'],
  ['sầu', '憂愁 / 榴槤（sầu riêng）', '愁', '名'],
  ['dõi', '追蹤 / 關注（theo dõi）', '', '動'],
  ['rủi', '倒楣 / 萬一（rủi ro 風險）', '', '形'],
  ['ruột', '腸子 / 親生的 / 內胎', '', '名'],
  ['hảo', '好 / 優質（hảo hạng）', '好', '形'],
  ['vẹn', '完整 / 圓滿（trọn vẹn）', '', '形'],
  ['sấy', '烘乾 / 吹乾', '', '動'],
  ['trọ', '租屋 / 寄宿（nhà trọ）', '', '動'],
  ['tộ', '砂鍋 / 陶鍋（cá kho tộ）', '', '名'],
  ['thoải', '舒適（thoải mái）', '', '形'],
  ['gìn', '保持 / 愛護（giữ gìn）', '', '動'],
  ['niềm', '心情 / 信念（niềm vui 喜悅）', '念', '名'],
  ['nồi', '鍋子', '', '名'],
  ['sườn', '排骨 / 肋骨 / 山坡', '', '名'],
  ['khuyên', '勸告 / 建議 / 耳環', '勸', '動'],
  ['muống', '空心菜（rau muống）', '', '名'],
  ['sảnh', '大廳（飯店、機場）', '廳', '名'],
  ['ngực', '胸部 / 胸口', '', '名'],
  ['thặng', '剩餘 / 順差（thặng dư）', '剩', '字'],
  ['loát', '流利（lưu loát）', '', '形'],
  ['rét', '寒冷 / 嚴寒（北越）', '', '形'],
  ['trống', '空的 / 鼓 / 公的（禽類）', '', '形'],
  ['quẹt', '刷（quẹt thẻ 刷卡）/ 划火柴', '', '動'],
  ['nhấn', '按 / 點擊 / 強調', '', '動'],
  ['quế', '肉桂', '桂', '名'],
  ['tỉ', '十億 / 比例', '億/比', '數'],
  ['chụm', '聚攏 / 湊在一起', '', '動'],
  ['chụm lại', '聚在一起 / 齊心合力', '', '動'],
  ['đàng', '道路 / 路途（古語，同 đường）', '', '名'],
  ['sàng', '米篩 / 一籮筐', '', '名'],
  ['mài', '磨 / 研磨', '', '動'],
  ['mài sắt', '磨鐵（比喻苦練）', '', '動'],
  ['hòn', '顆 / 座（山、石、島量詞）', '', '量'],
  ['hòn núi', '一座山', '', '名'],
  ['một', '一 (1)', '一', '數'],
  ['hai', '二 (2)', '二', '數'],
  ['ba', '三 (3) / 爸爸（南越）', '三', '數'],
  ['bốn', '四 (4)', '四', '數'],
  ['năm', '五 (5) / 年', '五/年', '數'],
  ['sáu', '六 (6)', '六', '數'],
  ['bảy', '七 (7)', '七', '數'],
  ['tám', '八 (8)', '八', '數'],
  ['chín', '九 (9) / 熟', '九', '數'],
  ['mười', '十 (10)', '十', '數'],
  ['trăm', '百 (100)', '百', '數'],
  ['nghìn', '千（北越）', '千', '數'],
  ['ngàn', '千（南越）', '千', '數'],
  ['triệu', '百萬', '兆', '數'],
  ['tỷ', '十億 / 比例', '億/比', '數']
];

const VIET_WORD_RE = /^[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ\s-]+$/;
const HAS_CJK_RE = /[\u4e00-\u9fff]/;
const PURE_CJK_RE = /^[\u4e00-\u9fff]+$/;
const INLINE_PAIR_RE = /([A-Za-zÀ-ỹđĐ][A-Za-zÀ-ỹđĐ\s]{0,28}?)\s*[（(]([^()（）]{1,20})[)）]/g;

function normalizeKey(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  s = s.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s*（[^）]*）\s*/g, ' ');
  s = s.replace(/[.,?!;:…"'“”‘’«»()[\]{}·•]/g, '').replace(/\s+/g, ' ').trim();
  return s.toLowerCase();
}

function cleanGloss(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  s = s.replace(/^[0-9０-９]+[.)、]\s*/, '').replace(/[。；;]+$/, '').trim();
  if (s.length > 48) {
    const parts = s.split(/[；;，,。]/);
    s = parts.slice(0, 2).join('，').slice(0, 46);
  }
  return s;
}

function cleanHanViet(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  s = s.replace(/^漢越[:：\s]*/, '');
  s = s.replace(/\s*\([^)]*\)/g, '').replace(/\s*（[^）]*）/g, '').trim();
  s = s.replace(/[.,;:/\-·•\s]+$/g, '').trim();
  if (!HAS_CJK_RE.test(s) || s.length > 8) return '';
  return s;
}

function isValidKey(key) {
  if (!key || key.length < 1 || key.length > 40) return false;
  if (!VIET_WORD_RE.test(key)) return false;
  const words = key.split(/\s+/).filter(Boolean);
  if (words.length < 1 || words.length > 4) return false;
  if (key.length === 1 && /^[a-z]$/.test(key)) return false;
  return true;
}

// Map: key -> { zh, hanViet, pos, priority }
const entries = new Map();

function upsertSingleKey(key, zh, hanViet, posShort, priority) {
  if (!isValidKey(key) || !zh || !HAS_CJK_RE.test(zh)) return;
  const existing = entries.get(key);
  if (!existing || priority > existing.priority) {
    entries.set(key, {
      zh,
      hanViet: hanViet || (existing?.hanViet || ''),
      pos: posShort || (existing?.pos || ''),
      priority
    });
  } else if (existing) {
    if (!existing.hanViet && hanViet) existing.hanViet = hanViet;
    if (!existing.pos && posShort) existing.pos = posShort;
  }
}

function upsert(rawKey, rawZh, rawHanViet = '', rawPos = '', priority = 50) {
  const baseKey = normalizeKey(rawKey);
  const zh = cleanGloss(rawZh);
  if (!baseKey || !zh || !HAS_CJK_RE.test(zh)) return;
  const hanViet = cleanHanViet(rawHanViet);
  const posShort = POS_SHORT[rawPos] || (rawPos && rawPos.length === 1 ? rawPos : '');

  const variants = getOrthographyVariants(baseKey);
  for (let i = 0; i < variants.length; i++) {
    upsertSingleKey(variants[i], zh, hanViet, posShort, i === 0 ? priority : priority - 1);
  }
}

// 1. VOCABULARY (9,941 graded words with top5k curated overrides) + Han-Viet morpheme fallback
const hanVietSyllableCandidates = [];
for (const item of VOCABULARY) {
  if (!item || !item.viet || !item.zh) continue;
  const priority = item.verified ? 80 : 40;
  upsert(item.viet, item.zh, item.hanViet || '', item.pos || '', priority);

  // Collect 2-syllable Han-Viet pairs for fallback morpheme coverage
  const syls = normalizeKey(item.viet).split(/\s+/).filter(Boolean);
  const hv = cleanHanViet(item.hanViet || '');
  if (syls.length === 2 && hv.length === 2 && PURE_CJK_RE.test(hv)) {
    hanVietSyllableCandidates.push({ syls, hv, compoundZh: cleanGloss(item.zh), verified: Boolean(item.verified) });
  }
}

// 2. Harvest inline "Viet (中文)" annotations & structured viet/zh pairs across ALL project datasets
function extractInlinePairs(str, priority = 55) {
  if (!str || typeof str !== 'string' || !HAS_CJK_RE.test(str)) return;
  INLINE_PAIR_RE.lastIndex = 0;
  let m;
  while ((m = INLINE_PAIR_RE.exec(str)) !== null) {
    const viPart = m[1].trim();
    const zhPart = m[2].trim();
    if (!HAS_CJK_RE.test(zhPart)) continue;
    for (const vp of viPart.split('/').map(s => s.trim()).filter(Boolean)) {
      const words = normalizeKey(vp).split(/\s+/).filter(Boolean);
      if (words.length >= 1 && words.length <= 4) {
        upsert(vp, zhPart, '', '', priority);
      }
    }
  }
}

function harvestObject(obj, priority = 60, depth = 0) {
  if (!obj || depth > 7) return;
  if (typeof obj === 'string') {
    extractInlinePairs(obj, priority - 5);
    return;
  }
  if (Array.isArray(obj)) {
    for (const item of obj) harvestObject(item, priority, depth + 1);
    return;
  }
  if (typeof obj !== 'object') return;

  const vietCandidate = obj.viet || obj.vi || obj.word || obj.vietnamese || obj.term || obj.hanVietWord || obj.phraseVi || obj.nameVi || obj.titleVi;
  const zhCandidate = obj.zh || obj.meaningZh || obj.zhTW || obj.meaning || obj.chinese || obj.translationZh || obj.titleZh || obj.nameZh || obj.name;
  const hvCandidate = obj.hanViet || obj.hanviet || obj.han || obj.cognate || '';
  const posCandidate = obj.pos || '';

  if (typeof vietCandidate === 'string' && typeof zhCandidate === 'string') {
    const vietParts = vietCandidate.split('/').map(s => s.trim()).filter(Boolean);
    for (const vp of vietParts) {
      const words = normalizeKey(vp).split(/\s+/).filter(Boolean);
      if (words.length >= 1 && words.length <= 4) {
        upsert(vp, zhCandidate, typeof hvCandidate === 'string' ? hvCandidate : '', posCandidate, priority);
      }
    }
  }

  if (typeof obj.example === 'string' && typeof obj.meaningZh === 'string') {
    const words = normalizeKey(obj.example).split(/\s+/).filter(Boolean);
    if (words.length >= 1 && words.length <= 4) {
      upsert(obj.example, obj.meaningZh, '', '', priority);
    }
  }

  for (const val of Object.values(obj)) {
    if (typeof val === 'string') {
      extractInlinePairs(val, priority - 4);
    } else if (val && typeof val === 'object') {
      harvestObject(val, priority, depth + 1);
    }
  }
}

const ALL_MODULES = [
  [vietData, 64],
  [confusableDeck, 64],
  [situationalTopics, 62],
  [situationalScenarios, 62],
  [quickBilingual, 60],
  [businessData, 60],
  [macroData, 60],
  [contentExpansion, 60],
  [questCurriculum, 58],
  [vietnameseSongs, 58],
  [conceptDetails, 56],
  [knowledgeGuides, 56],
  [knowledgeMastery, 56],
  [knowledgeAdvanced, 56],
  [knowledgeExtensions, 56],
  [listeningLessons, 56],
  [scenarioExegesis, 56],
  [pronunciationCards, 58]
];

for (const [mod, prio] of ALL_MODULES) {
  harvestObject(mod, prio);
}

// 3. Fill missing bound Han-Viet syllables from verified 2-char Han-Viet compounds (low priority = 25)
for (const { syls, hv, compoundZh, verified } of hanVietSyllableCandidates) {
  for (let i = 0; i < 2; i++) {
    const syl = syls[i];
    const char = hv[i];
    if (!entries.has(syl) && syl.length >= 2) {
      upsert(syl, `${char}（常見詞：${hv} ${compoundZh.split(/[\/／,，]/)[0].trim()}）`, char, '字素', verified ? 28 : 22);
    }
  }
}

// 4. Apply essential overrides (highest priority)
for (const [viet, zh, hv, pos] of ESSENTIAL_OVERRIDES) {
  upsert(viet, zh, hv, pos, 100);
}

// 5. Serialize compactly, sorted by key for clean diffs & high gzip ratio
const sortedKeys = Array.from(entries.keys()).sort();
const compactDict = {};
let singleCount = 0;
let multiCount = 0;

for (const key of sortedKeys) {
  const { zh, hanViet, pos } = entries.get(key);
  if (key.includes(' ')) multiCount++;
  else singleCount++;

  if (!hanViet && !pos) {
    compactDict[key] = zh;
  } else if (!pos) {
    compactDict[key] = [zh, hanViet];
  } else {
    compactDict[key] = [zh, hanViet, pos];
  }
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
const jsonStr = JSON.stringify(compactDict);
fs.writeFileSync(OUT_PATH, jsonStr, 'utf8');

const rawBytes = Buffer.byteLength(jsonStr, 'utf8');
const gzBytes = zlib.gzipSync(jsonStr, { level: 9 }).length;

console.log(`Built ${OUT_PATH}`);
console.log(`Entries: ${sortedKeys.length} (single: ${singleCount}, multi-word: ${multiCount})`);
console.log(`Size: ${(rawBytes / 1024).toFixed(1)} KB raw | ${(gzBytes / 1024).toFixed(1)} KB gzipped`);
