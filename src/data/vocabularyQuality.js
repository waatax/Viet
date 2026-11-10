/**
 * 詞彙品質層：把原始 10k 詞頻庫整理成可以安全拿來教學的資料。
 *
 * 1. Top 1,000：套用 top1kCurated.js 的人工校對（釋義、詞性、例句、易錯提示），標記 verified。
 * 2. 其他階層：尚未逐條校對，因此只做「不會出錯」的清理——
 *    - 英文欄位的佔位字（vocabulary、common term）清空，介面改用中文；
 *    - 系統套版的假例句（「X 這個在工作上非常必需」等）不顯示；
 *    - 片語型例句標記為 phrase，介面顯示為「搭配詞組」而非「例句」；
 *    - 中文例句尾端的辭典殘字（「。 天理。」）去除，半形逗號改為全形。
 */
import { FREQUENCY_VOCABULARY, TIER_DEFINITIONS } from './frequencyVocabularyData.js';
import { TOP1K_CURATED_ROWS } from './top1kCurated.js';

const POS_CATEGORY = {
  名詞: '生活名詞',
  動詞: '日常動詞',
  代名詞: '人稱與指示',
  形容詞: '描述與狀態',
  副詞: '語法功能詞',
  介詞: '語法功能詞',
  連詞: '語法功能詞',
  助詞: '語氣與助詞',
  限定詞: '語法功能詞',
  量詞: '數字與量詞',
  數詞: '數字與量詞',
  感嘆詞: '語氣與助詞'
};

const TEMPLATE_EXAMPLES = [
  /này rất cần thiết cho công việc/i,
  /^bạn có thể .+ giúp tôi không\?$/i,
  /^điều này rất .+ và quan trọng\.$/i,
  /^hãy chú ý đến .+ trong ngữ cảnh này\.$/i
];
const TEMPLATE_EXAMPLE_ZH = /在工作上非常必需|在這種情境下請注意|你能幫我.+嗎？$|這非常.+且重要。$/;
const PLACEHOLDER_EN = /^(vocabulary|common term|word|term|n\/a|unknown)$/i;

export const parseCuratedRows = (text = '') => {
  const map = new Map();
  text.split(/\r?\n/).forEach((line) => {
    const row = line.trim();
    if (!row) return;
    const [rank, viet, zh = '', en = '', pos = '', example = '', exampleZh = '', note = ''] = row.split('|');
    map.set(Number(rank), {
      rank: Number(rank),
      viet,
      skip: zh === 'SKIP',
      zh,
      en,
      pos,
      example,
      exampleZh,
      note
    });
  });
  return map;
};

export const TOP1K_CURATED = parseCuratedRows(TOP1K_CURATED_ROWS);

/**
 * 漢越音校正（Top 1,000）：原檔有大量「同音不同義」的誤配（anh＝英、ai＝哀、xa＝車…），
 * 會讓「用中文字聯想」的記憶鉤誤導學習者。'' 表示該詞並非漢越詞，移除；其餘改為正確的同源字。
 */
export const HANVIET_FIX = {
  7: '', 30: '', 33: '', 34: '', 57: '', 69: '', 71: '', 79: '', 103: '', 110: '', 154: '', 187: '', 225: '', 237: '', 244: '', 247: '', 263: '', 303: '', 334: '', 351: '', 356: '', 474: '', 478: '', 504: '', 528: '', 589: '', 597: '', 609: '', 640: '', 648: '', 653: '', 664: '', 681: '', 688: '', 739: '', 785: '', 820: '', 821: '', 840: '', 849: '', 855: '', 902: '', 52: '只', 90: '條', 144: '糖', 167: '適', 176: '房', 223: '句', 227: '省', 235: '銅', 254: '成', 296: '試', 317: '旬', 449: '電', 450: '聯關', 499: '花', 509: '肌', 520: '幅', 545: '東', 566: '伯', 622: '期', 666: '身', 671: '越', 676: '弊', 699: '伊', 708: '安', 712: '俄', 738: '南', 766: '神', 782: '護', 810: '輔', 817: '瓶', 830: '公', 898: '界', 939: '院', 960: '案'
};


const wordCount = (s = '') => s.trim().split(/\s+/).filter(Boolean).length;

/** 'sentence' | 'phrase' | 'none' — what kind of example a raw entry carries. */
export const classifyExample = (entry = {}) => {
  const example = (entry.example || '').trim();
  if (!example) return 'none';
  if (TEMPLATE_EXAMPLES.some((re) => re.test(example)) || TEMPLATE_EXAMPLE_ZH.test(entry.exampleZh || '')) return 'none';
  const normalize = (s) => s.toLowerCase().replace(/[.,!?;:…]/g, '').trim();
  if (normalize(example) === normalize(entry.viet || '')) return 'none';
  const ends = /[.?!…]$/.test(example);
  if (ends && (wordCount(example) >= 3 || (wordCount(example) >= 2 && /^\p{Lu}/u.test(example)))) return 'sentence';
  return 'phrase';
};

export const cleanExampleZh = (zh = '') => {
  let text = zh.trim();
  // dictionary residue after the real sentence: 「公里勝於強權。 天理。」「…乾淨。書。」「…呀?助。」
  text = text.replace(/([。！？?!])\s*[^\s。！？?!]{1,4}。$/u, '$1');
  if (/[一-鿿]/.test(text)) text = text.replace(/,\s*/g, '，').replace(/\?/g, '？').replace(/!/g, '！');
  return text.replace(/。。$/, '。');
};

export const refineEntry = (raw, curated = TOP1K_CURATED.get(raw.rank)) => {
  if (curated && curated.viet === raw.viet && raw.tier === 'top1k') {
    if (curated.skip) return { ...raw, hidden: true };
    const pos = curated.pos || raw.pos;
    const keepExample = !curated.example;
    return {
      ...raw,
      zh: curated.zh || raw.zh,
      en: curated.en || raw.en,
      pos,
      category: POS_CATEGORY[pos] || raw.category,
      example: keepExample ? raw.example : curated.example,
      exampleZh: keepExample ? cleanExampleZh(raw.exampleZh) : curated.exampleZh,
      exampleKind: 'sentence',
      hanViet: Object.prototype.hasOwnProperty.call(HANVIET_FIX, raw.rank) ? HANVIET_FIX[raw.rank] : raw.hanViet,
      note: curated.note || '',
      verified: true
    };
  }
  const exampleKind = classifyExample(raw);
  return {
    ...raw,
    en: PLACEHOLDER_EN.test((raw.en || '').trim()) ? '' : raw.en,
    example: exampleKind === 'none' ? '' : raw.example,
    exampleZh: exampleKind === 'none' ? '' : cleanExampleZh(raw.exampleZh),
    exampleKind,
    note: '',
    verified: false
  };
};

/** The vocabulary every flashcard surface should use. Hidden noise entries are removed. */
export const VOCABULARY = FREQUENCY_VOCABULARY.map((w) => refineEntry(w)).filter((w) => !w.hidden);

export const VOCAB_BY_ID = new Map(VOCABULARY.map((w) => [w.id, w]));

export const VOCAB_TIERS = TIER_DEFINITIONS.map((tier) => {
  const words = VOCABULARY.filter((w) => w.tier === tier.id);
  return {
    ...tier,
    count: words.length,
    verified: words.filter((w) => w.verified).length,
    withSentence: words.filter((w) => w.exampleKind === 'sentence').length
  };
});

/** Lookup used by other surfaces (e.g. ear-training batches) to show the corrected gloss. */
export const getRefinedWord = (idOrRank) => {
  if (typeof idOrRank === 'number') return VOCABULARY.find((w) => w.rank === idOrRank);
  return VOCAB_BY_ID.get(idOrRank);
};
