/**
 * Compiles a compact, zero-bloat offline Vietnamese -> Traditional Chinese lookup dictionary
 * from the project's existing curated datasets into public/data/vi-zh-dict.json.
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
  '稱謂': '稱'
};

// High-priority essential words & everyday compounds (guarantees crisp Taiwan Traditional Chinese glosses)
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
  ['việt nam', '越南', '越南', '名'],
  ['tiếng việt', '越南語 / 越文', '', '名'],
  ['đài loan', '台灣', '台灣', '名'],
  ['hà nội', '河內', '河內', '名'],
  ['sài gòn', '西貢（胡志明市）', '柴棍', '名'],
  ['hồ chí minh', '胡志明', '胡志明', '名'],
  ['tiếng trung', '中文 / 華語', '', '名'],
  ['tiếng anh', '英文 / 英語', '', '名'],
  ['cà phê', '咖啡', '', '名'],
  ['cà phê sữa đá', '越式冰奶咖啡', '', '名'],
  ['phở', '越南河粉', '', '名'],
  ['bánh mì', '越式法國麵包', '', '名'],
  ['bún chả', '烤肉米線', '', '名'],
  ['gỏi cuốn', '生春捲', '', '名'],
  ['trà đá', '冰茶', '', '名'],
  ['bao nhiêu', '多少', '', '代'],
  ['bao nhiêu tiền', '多少錢', '', '片'],
  ['ở đâu', '在哪裡', '', '代'],
  ['tại sao', '為什麼', '', '代'],
  ['như thế nào', '怎麼樣 / 如何', '', '代'],
  ['khi nào', '什麼時候', '', '代'],
  ['mấy giờ', '幾點', '', '代'],
  ['một chút', '一點點 / 稍微', '', '副'],
  ['rất vui', '很高興', '', '形'],
  ['chúc mừng', '恭喜 / 祝賀', '祝', '動'],
  ['ngon quá', '太好吃了', '', '形'],
  ['đẹp quá', '太美了', '', '形'],
  ['đúng rồi', '對了 / 沒錯', '', '片'],
  ['được rồi', '好了 / 可以了', '', '片'],
  ['tính tiền', '結帳 / 買單', '', '動'],
  ['cho tôi', '請給我', '', '片'],
  ['làm ơn', '麻煩 / 請', '', '片'],
  ['có thể', '可以 / 能夠', '', '助'],
  ['chúng ta', '我們（含對方）', '眾', '代'],
  ['chúng tôi', '我們（不含對方）', '眾', '代'],
  ['các bạn', '你們 / 各位朋友', '', '代'],
  ['anh ấy', '他（較年長男性）', '', '代'],
  ['chị ấy', '她（較年長女性）', '', '代'],
  ['cô ấy', '她（女性）', '', '代'],
  ['em ấy', '他 / 她（較年幼者）', '', '代'],
  ['họ', '他們 / 她們', '', '代'],
  ['mình', '自己 / 我（親切）', '', '代'],
  ['nhé', '喔 / 吧（親切語氣）', '', '助'],
  ['nha', '喔 / 吧（南越親切語氣）', '', '助'],
  ['ạ', '（敬語句尾詞）', '', '助'],
  ['ơi', '欸 / 喂（呼喚語氣）', '', '助'],
  ['à', '啊 / 嗎（確認語氣）', '', '助'],
  ['ừ', '嗯（對平輩/晚輩）', '', '嘆'],
  ['vâng', '是的（北越敬語）', '', '嘆'],
  ['dạ', '是的（南越敬語）', '', '嘆'],
  ['một', '一 (1)', '', '數'],
  ['hai', '二 (2)', '', '數'],
  ['ba', '三 (3) / 爸爸（南越）', '', '數'],
  ['bốn', '四 (4)', '', '數'],
  ['năm', '五 (5) / 年', '', '數'],
  ['sáu', '六 (6)', '', '數'],
  ['bảy', '七 (7)', '', '數'],
  ['tám', '八 (8)', '', '數'],
  ['chín', '九 (9) / 熟', '', '數'],
  ['mười', '十 (10)', '', '數'],
  ['trăm', '百 (100)', '', '數'],
  ['nghìn', '千（北越）', '', '數'],
  ['ngàn', '千（南越）', '', '數'],
  ['triệu', '百萬', '兆', '數'],
  ['tỷ', '十億', '億', '數']
];

const VIET_WORD_RE = /^[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ\s-]+$/;
const HAS_CJK_RE = /[\u4e00-\u9fff]/;

function normalizeKey(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  // Strip parenthetical hints like "anh (哥哥)" or "cà phê / cafe"
  s = s.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s*（[^）]*）\s*/g, ' ');
  s = s.replace(/[.,?!;:…"'""''«»()[\]{}]/g, '').replace(/\s+/g, ' ').trim();
  return s.toLowerCase();
}

function cleanGloss(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  // Remove leading numbering or trailing punctuation
  s = s.replace(/^[0-9０-９]+[.)、]\s*/, '').replace(/[。；;]+$/, '').trim();
  if (s.length > 48) {
    // Keep concise first 2 clauses
    const parts = s.split(/[；;，,]/);
    s = parts.slice(0, 2).join('，').slice(0, 46);
  }
  return s;
}

function isValidKey(key) {
  if (!key || key.length < 1 || key.length > 36) return false;
  if (!VIET_WORD_RE.test(key)) return false;
  const words = key.split(/\s+/).filter(Boolean);
  if (words.length < 1 || words.length > 4) return false;
  // Exclude single ASCII letters unless valid Vietnamese single-letter words (à, ả, ă, â, ê, ô, ơ, ư, ở, ừ, ý, ố, ồ, ổ, ỗ, ộ, ớ, ờ, ở, ỡ, ợ, ứ, ừ, ử, ữ, ự, ủ, ũ, ụ, ù, ú, ì, í, ỉ, ĩ, ị, è, é, ẻ, ẽ, ẹ, ò, ó, ỏ, õ, ọ)
  if (key.length === 1 && /^[a-z]$/.test(key)) return false;
  return true;
}

// Map: key -> { zh, hanViet, pos, priority }
// Higher priority wins: 100=essential, 80=verified top5k, 60=curated module data, 40=unverified 10k
const entries = new Map();

function cleanHanViet(raw) {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.normalize('NFC').trim();
  s = s.replace(/^漢越[:：\s]*/, '');
  // Strip parenthetical explanations like "僕 (Tôi · 古越...)" -> "僕"
  s = s.replace(/\s*\([^)]*\)/g, '').replace(/\s*（[^）]*）/g, '').trim();
  // Remove trailing punctuation or Latin leftovers
  s = s.replace(/[.,;:/\-·•\s]+$/g, '').trim();
  // Must contain at least one CJK character and be short (<= 8 chars)
  if (!HAS_CJK_RE.test(s) || s.length > 8) return '';
  return s;
}

function upsert(rawKey, rawZh, rawHanViet = '', rawPos = '', priority = 50) {
  const key = normalizeKey(rawKey);
  const zh = cleanGloss(rawZh);
  if (!isValidKey(key) || !zh || !HAS_CJK_RE.test(zh)) return;

  const hanViet = cleanHanViet(rawHanViet);
  const posShort = POS_SHORT[rawPos] || (rawPos && rawPos.length === 1 ? rawPos : '');

  const existing = entries.get(key);
  if (!existing || priority > existing.priority) {
    entries.set(key, {
      zh,
      hanViet: hanViet || (existing?.hanViet || ''),
      pos: posShort || (existing?.pos || ''),
      priority
    });
  } else if (existing) {
    // Enrich missing metadata without overriding higher-priority gloss
    if (!existing.hanViet && hanViet) existing.hanViet = hanViet;
    if (!existing.pos && posShort) existing.pos = posShort;
  }
}

// 1. VOCABULARY (9,941 graded words with top5k curated overrides)
for (const item of VOCABULARY) {
  if (!item || !item.viet || !item.zh) continue;
  const priority = item.verified ? 80 : 40;
  upsert(item.viet, item.zh, item.hanViet || '', item.pos || '', priority);
}

// 2. Recursively harvest short viet/zh pairs from curated module data files
function harvestObject(obj, priority = 60, depth = 0) {
  if (!obj || depth > 5) return;
  if (Array.isArray(obj)) {
    for (const item of obj) harvestObject(item, priority, depth + 1);
    return;
  }
  if (typeof obj !== 'object') return;

  const vietCandidate = obj.viet || obj.vi || obj.word || obj.vietnamese || obj.term || obj.hanVietWord;
  const zhCandidate = obj.zh || obj.meaningZh || obj.zhTW || obj.meaning || obj.chinese || obj.translationZh || obj.titleZh;
  const hvCandidate = obj.hanViet || obj.hanviet || obj.han || obj.cognate || '';
  const posCandidate = obj.pos || '';

  if (typeof vietCandidate === 'string' && typeof zhCandidate === 'string') {
    // Handle slash-separated alternatives like "Cảm ơn / Cám ơn"
    const vietParts = vietCandidate.split('/').map(s => s.trim()).filter(Boolean);
    for (const vp of vietParts) {
      const words = normalizeKey(vp).split(/\s+/).filter(Boolean);
      if (words.length >= 1 && words.length <= 3) {
        upsert(vp, zhCandidate, typeof hvCandidate === 'string' ? hvCandidate : '', posCandidate, priority);
      }
    }
  }

  // Also check example words on alphabet items
  if (typeof obj.example === 'string' && typeof obj.meaningZh === 'string') {
    const words = normalizeKey(obj.example).split(/\s+/).filter(Boolean);
    if (words.length >= 1 && words.length <= 3) {
      upsert(obj.example, obj.meaningZh, '', '', priority);
    }
  }

  for (const val of Object.values(obj)) {
    if (val && typeof val === 'object') {
      harvestObject(val, priority, depth + 1);
    }
  }
}

harvestObject(vietData, 62);
harvestObject(quickBilingual, 60);
harvestObject(businessData, 58);
harvestObject(confusableDeck, 64);

// 3. Apply essential overrides (highest priority)
for (const [viet, zh, hv, pos] of ESSENTIAL_OVERRIDES) {
  upsert(viet, zh, hv, pos, 100);
}

// 4. Serialize compactly, sorted by key for clean diffs & high gzip ratio
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
