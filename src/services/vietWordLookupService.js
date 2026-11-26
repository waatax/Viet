/**
 * vietWordLookupService.js
 * Zero-DOM-mutation, ultra-lightweight Vietnamese word detection, tone analysis,
 * longest-match compound lookup, button/user-select-none fallback, and lazy offline dictionary loader.
 */

// Vietnamese letters including all diacritics and đ/Đ
export const VIET_CHAR_RE = /[a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ]/;
export const VIET_DIACRITIC_RE = /[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ]/;

// Technical / financial / UI acronyms that should NEVER trigger as unaccented Vietnamese words
const TECH_ACRONYMS = new Set([
  'XP', 'FDI', 'GDP', 'USD', 'VND', 'TWD', 'SBV', 'SME', 'AQL', 'SMT', 'CBD',
  'PDF', 'MP3', 'WAV', 'TTS', 'SM', 'SRS', 'IPA', 'CEFR', 'IVPT', 'UI', 'UX',
  'OK', 'EN', 'ZH', 'VI', 'VN', 'LV', 'QA', 'QC', 'HR', 'IT', 'AI', 'API',
  'URL', 'KPI', 'ROI', 'VAT', 'CIF', 'FOB', 'OEM', 'ODM', 'BOM', 'SOP', 'MOQ',
  'NDA', 'LOI', 'MOU', 'POA', 'YOY', 'QOQ', 'MOM', 'ATM', 'POS', 'SIM', 'PIN',
  'APP', 'WEB', 'PRO', 'VIP', 'TOP', 'NEW', 'HOT', 'LAB', 'HUB', 'MAX', 'MIN',
  'A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Q1', 'Q2', 'Q3', 'Q4'
]);

// Common English UI / technical tokens that should NOT trigger false Vietnamese popups in English text
const ENGLISH_UI_STOPWORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'if', 'of', 'in', 'on', 'at', 'to', 'for', 'by', 'with',
  'from', 'into', 'about', 'over', 'after', 'under', 'between', 'through', 'during', 'before',
  'is', 'am', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
  'will', 'would', 'shall', 'should', 'can', 'could', 'may', 'might', 'must', 'not', 'no', 'yes',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'our', 'their',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'whom', 'where', 'when', 'why', 'how',
  'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other', 'some', 'such', 'only', 'own', 'same',
  'so', 'than', 'too', 'very', 'just', 'now', 'here', 'there', 'then', 'up', 'down', 'out', 'off', 'back',
  'home', 'menu', 'mode', 'dark', 'light', 'font', 'size', 'speed', 'rate', 'accent', 'north', 'south',
  'audio', 'video', 'videos', 'song', 'songs', 'music', 'play', 'pause', 'stop', 'next', 'prev', 'repeat',
  'loop', 'slow', 'fast', 'normal', 'save', 'saved', 'bookmark', 'bookmarks', 'word', 'words', 'bank',
  'flashcard', 'flashcards', 'quiz', 'quest', 'quests', 'daily', 'streak', 'level', 'xp', 'badge', 'badges',
  'progress', 'settings', 'prefs', 'search', 'filter', 'clear', 'close', 'open', 'start', 'finish', 'done',
  'practice', 'study', 'learn', 'learning', 'lesson', 'lessons', 'module', 'modules', 'chapter', 'guide',
  'grammar', 'pronunciation', 'tone', 'tones', 'alphabet', 'phrases', 'dialogue', 'dialogues', 'scenario',
  'scenarios', 'business', 'macro', 'travel', 'shopping', 'emergency', 'kit', 'hub', 'lab', 'studio',
  'vietnamese', 'english', 'chinese', 'taiwan', 'hanoi', 'saigon', 'native', 'offline', 'online',
  'top', 'pro', 'vip', 'new', 'hot', 'tip', 'tips', 'note', 'notes', 'example', 'examples', 'meaning',
  'version', 'release', 'details', 'engine', 'system', 'sm', 'srs', 'ipa', 'cefr', 'ivpt', 'fdi', 'gdp',
  'usd', 'vnd', 'pdf', 'mp3', 'wav', 'tts', 'app', 'web', 'ui', 'ux', 'ok', 'hi', 'hey', 'bye', 'see',
  'do', 'feedback', 'retention', 'cognates', 'ultralearn', 'ultralearning', 'shadowing', 'builder',
  'click', 'tap', 'hover', 'select', 'press', 'check', 'show', 'hide', 'view', 'list', 'card', 'cards',
  'a1', 'a2', 'b1', 'b2', 'c1', 'c2', 'ctrl', 'shift', 'alt', 'esc', 'core', 'syntax', 'formulas'
]);

// Words that are uniquely and unambiguously Vietnamese even without diacritics
const UNAMBIGUOUS_UNACCENTED_VIET = new Set([
  'xin', 'chao', 'cam', 'nha', 'ngon', 'nguoi', 'nuoc', 'khong', 'duoc', 'nhung', 'nhieu',
  'trua', 'chieu', 'tuan', 'thang', 'ngay', 'truong', 'sinh', 'vien', 'thuong', 'yeu',
  'thich', 'biet', 'hieu', 'muon', 'nghe', 'noi', 'viet', 'doc', 'uong', 'quay', 'chay',
  'nhanh', 'cham', 'xanh', 'trang', 'vang', 'ngot', 'chua', 'man', 'cay', 'nong', 'lanh',
  'khoe', 'met', 'buon', 'vui', 'quen', 'nho', 'nhau', 'cung', 'chiu', 'thoi', 'nhe',
  'anh', 'em', 'ong', 'chu', 'bac', 'chau', 'banh', 'com', 'pho', 'bun', 'tra', 'sua',
  'tien', 'mua', 'ban', 'hang', 'quan', 'cho', 'xe', 'may', 'bay', 'tau', 'phong', 'khach', 'san',
  'trung', 'nam', 'tay', 'dong', 'sai', 'gon', 'ha', 'hue', 'nang', 'kim', 'loi', 'vua', 'long',
  'cay', 'non', 'cao', 'hoc', 'hoi', 'gioi', 'qua', 'sat', 'cong'
]);

const TONE_SWAP_PAIRS = [
  ['óa', 'oá'], ['òa', 'oà'], ['ỏa', 'oả'], ['õa', 'oã'], ['ọa', 'oạ'],
  ['óe', 'oé'], ['òe', 'oè'], ['ỏe', 'oẻ'], ['õe', 'oẽ'], ['ọe', 'oẹ'],
  ['úy', 'uý'], ['ùy', 'uỳ'], ['ủy', 'uỷ'], ['ũy', 'uỹ'], ['ụy', 'uỵ']
];

function lookupRawDict(dict, key) {
  if (!dict || !key) return null;
  if (dict[key] !== undefined) return dict[key];
  for (const [a, b] of TONE_SWAP_PAIRS) {
    if (key.includes(a)) {
      const alt = key.replaceAll(a, b);
      if (dict[alt] !== undefined) return dict[alt];
    } else if (key.includes(b)) {
      const alt = key.replaceAll(b, a);
      if (dict[alt] !== undefined) return dict[alt];
    }
  }
  return null;
}

const POS_LABELS = {
  '名': '名詞',
  '動': '動詞',
  '形': '形容詞',
  '副': '副詞',
  '代': '代名詞',
  '介': '介詞',
  '連': '連詞',
  '助': '助詞',
  '限': '限定詞',
  '量': '量詞',
  '數': '數詞',
  '嘆': '感嘆詞',
  '片': '片語',
  '成': '成語',
  '稱': '稱謂',
  '字': '漢越字根',
  '專': '專有名詞'
};

export const TONE_META = {
  ngang: { id: 'ngang', name: '平聲', mark: '—', color: '#64748b' },
  sac:   { id: 'sac',   name: '銳聲', mark: 'ˊ', color: '#ef4444' },
  huyen: { id: 'huyen', name: '玄聲', mark: 'ˋ', color: '#3b82f6' },
  hoi:   { id: 'hoi',   name: '問聲', mark: 'ˀ', color: '#f59e0b' },
  nga:   { id: 'nga',   name: '跌聲', mark: '˜', color: '#8b5cf6' },
  nang:  { id: 'nang',  name: '重聲', mark: '̣', color: '#10b981' }
};

/**
 * Detects the Vietnamese tone of a single syllable using NFD combining marks.
 */
export function detectSyllableTone(syllable) {
  if (!syllable) return TONE_META.ngang;
  const nfd = syllable.normalize('NFD');
  if (nfd.includes('\u0301')) return TONE_META.sac;
  if (nfd.includes('\u0300')) return TONE_META.huyen;
  if (nfd.includes('\u0309')) return TONE_META.hoi;
  if (nfd.includes('\u0303')) return TONE_META.nga;
  if (nfd.includes('\u0323')) return TONE_META.nang;
  return TONE_META.ngang;
}

/**
 * Analyzes all syllables in a Vietnamese word or compound phrase.
 */
export function analyzeVietnameseTones(phrase) {
  if (!phrase) return [];
  return phrase
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((syl) => ({
      syllable: syl,
      ...detectSyllableTone(syl)
    }));
}

/**
 * Decodes a compact dictionary entry ("zh" or ["zh", "hanViet", "posShort"]).
 */
export function decodeDictEntry(raw) {
  if (!raw) return null;
  if (typeof raw === 'string') {
    return { zh: raw, hanViet: '', pos: '', posFull: '' };
  }
  if (Array.isArray(raw)) {
    const [zh = '', hanViet = '', pos = ''] = raw;
    return {
      zh,
      hanViet,
      pos,
      posFull: POS_LABELS[pos] || pos
    };
  }
  return null;
}

/**
 * Tokenizes a text string into word spans [{ text, lower, start, end }].
 */
export function tokenizeText(text) {
  const tokens = [];
  if (!text) return tokens;
  let i = 0;
  const len = text.length;
  while (i < len) {
    if (VIET_CHAR_RE.test(text[i])) {
      const start = i;
      i++;
      while (i < len && VIET_CHAR_RE.test(text[i])) i++;
      const word = text.slice(start, i);
      tokens.push({
        text: word,
        lower: word.normalize('NFC').toLowerCase(),
        start,
        end: i
      });
    } else {
      i++;
    }
  }
  return tokens;
}

/**
 * Checks whether two adjacent tokens are separated ONLY by spaces (no punctuation/newlines/CJK).
 */
function isSpaceSeparated(text, tokA, tokB) {
  const between = text.slice(tokA.end, tokB.start);
  return /^[ \t]+$/.test(between);
}

/**
 * Determines whether a text snippet has Vietnamese linguistic context.
 */
function hasVietnameseContext(text, tokens, targetIdx) {
  if (VIET_DIACRITIC_RE.test(text)) return true;
  const start = Math.max(0, targetIdx - 3);
  const end = Math.min(tokens.length - 1, targetIdx + 3);
  let vietHits = 0;
  let englishHits = 0;
  for (let k = start; k <= end; k++) {
    const w = tokens[k].lower;
    if (UNAMBIGUOUS_UNACCENTED_VIET.has(w)) vietHits++;
    else if (ENGLISH_UI_STOPWORDS.has(w)) englishHits++;
  }
  return vietHits >= 2 && vietHits >= englishHits;
}

/**
 * Looks up a word or longest-match compound (up to 4 words) at `offset` inside `text`.
 */
export function lookupTokenInText(text, offset, dict) {
  if (!text || offset < 0 || offset > text.length) return null;
  const tokens = tokenizeText(text);
  if (tokens.length === 0) return null;

  let idx = -1;
  for (let i = 0; i < tokens.length; i++) {
    if (offset >= tokens[i].start && offset <= tokens[i].end) {
      idx = i;
      break;
    }
  }
  if (idx === -1) return null;

  const target = tokens[idx];
  const hasDiacritic = VIET_DIACRITIC_RE.test(target.text);
  const inVietContext = hasVietnameseContext(text, tokens, idx);

  // Skip single ASCII letters like "a", "x", "v"
  if (target.lower.length === 1 && !hasDiacritic) return null;

  // Reject known technical/financial/UI acronyms (XP, FDI, GDP, USD, VND, AQL, SM, etc.)
  if (!hasDiacritic && TECH_ACRONYMS.has(target.text.toUpperCase()) && target.text === target.text.toUpperCase()) {
    return null;
  }

  // Filter out common English UI words when NOT in Vietnamese context
  if (!hasDiacritic && ENGLISH_UI_STOPWORDS.has(target.lower) && !inVietContext) {
    return null;
  }

  // Helper to check a contiguous range of tokens [a..b] in dictionary
  const checkSpan = (a, b) => {
    if (a < 0 || b >= tokens.length || a > b) return null;
    for (let k = a; k < b; k++) {
      if (!isSpaceSeparated(text, tokens[k], tokens[k + 1])) return null;
    }
    const phraseLower = tokens.slice(a, b + 1).map(t => t.lower).join(' ');
    const rawEntry = lookupRawDict(dict, phraseLower);
    if (!rawEntry) return null;
    const decoded = decodeDictEntry(rawEntry);
    if (!decoded || !decoded.zh) return null;
    const originalSlice = text.slice(tokens[a].start, tokens[b].end);
    return {
      word: originalSlice,
      normalized: phraseLower,
      start: tokens[a].start,
      end: tokens[b].end,
      tokenStart: a,
      tokenEnd: b,
      found: true,
      ...decoded
    };
  };

  let match = null;

  if (dict) {
    // 1. Try 3-word compounds covering idx
    match = checkSpan(idx - 2, idx) || checkSpan(idx - 1, idx + 1) || checkSpan(idx, idx + 2);
    // 2. Try 2-word compounds covering idx
    if (!match) {
      match = checkSpan(idx - 1, idx) || checkSpan(idx, idx + 1);
    }
    // 3. Try single token
    if (!match) {
      // Allow unaccented single token if unambiguous Viet, in Viet context, or explicitly annotated like "MUA (買)"
      const hasAdjacentCjkAnnotation = /^[ \t]*[（(][\u4e00-\u9fff]/.test(text.slice(target.end));
      if (hasDiacritic || UNAMBIGUOUS_UNACCENTED_VIET.has(target.lower) || inVietContext || hasAdjacentCjkAnnotation) {
        // Still guard against English stopwords like "IN (在)" or "CORE" unless unambiguous Viet or annotated
        if (!ENGLISH_UI_STOPWORDS.has(target.lower) || UNAMBIGUOUS_UNACCENTED_VIET.has(target.lower) || hasAdjacentCjkAnnotation) {
          match = checkSpan(idx, idx);
        }
      }
    }
  }

  // 4. If compound matched, build per-syllable breakdown
  if (match) {
    const breakdown = [];
    if (match.tokenEnd > match.tokenStart && dict) {
      for (let k = match.tokenStart; k <= match.tokenEnd; k++) {
        const sub = decodeDictEntry(lookupRawDict(dict, tokens[k].lower));
        if (sub && sub.zh) {
          breakdown.push({
            syllable: tokens[k].text,
            zh: sub.zh.split(/[\/／,，]/)[0].trim(),
            hanViet: sub.hanViet
          });
        }
      }
    }
    return {
      word: match.word,
      normalized: match.normalized,
      zh: match.zh,
      hanViet: match.hanViet,
      pos: match.pos,
      posFull: match.posFull,
      found: true,
      start: match.start,
      end: match.end,
      tones: analyzeVietnameseTones(match.word),
      breakdown
    };
  }

  // 5. Fallback: if the word clearly has Vietnamese diacritics, still offer pronunciation + tone info!
  if (hasDiacritic) {
    return {
      word: target.text,
      normalized: target.lower,
      zh: '',
      hanViet: '',
      pos: '',
      posFull: '',
      found: false,
      start: target.start,
      end: target.end,
      tones: analyzeVietnameseTones(target.text),
      breakdown: []
    };
  }

  return null;
}

/**
 * Looks up an explicit user-selected Vietnamese phrase (e.g. from window.getSelection()).
 */
export function lookupSelectedPhrase(rawText, dict) {
  if (!rawText || typeof rawText !== 'string') return null;
  const cleaned = rawText.normalize('NFC').trim().replace(/\s+/g, ' ');
  if (!cleaned || cleaned.length > 56) return null;
  const tokens = tokenizeText(cleaned);
  if (tokens.length === 0 || tokens.length > 5) return null;

  const hasAnyDiacritic = VIET_DIACRITIC_RE.test(cleaned);
  const lower = tokens.map(t => t.lower).join(' ');
  const exact = dict ? decodeDictEntry(lookupRawDict(dict, lower)) : null;

  if (exact && exact.zh) {
    if (!hasAnyDiacritic && tokens.length === 1 && (ENGLISH_UI_STOPWORDS.has(lower) || TECH_ACRONYMS.has(cleaned.toUpperCase()))) {
      return null;
    }
    const breakdown = tokens.length > 1 && dict
      ? tokens
          .map(t => {
            const sub = decodeDictEntry(lookupRawDict(dict, t.lower));
            return sub && sub.zh ? { syllable: t.text, zh: sub.zh.split(/[\/／,，]/)[0].trim(), hanViet: sub.hanViet } : null;
          })
          .filter(Boolean)
      : [];
    return {
      word: cleaned,
      normalized: lower,
      zh: exact.zh,
      hanViet: exact.hanViet,
      pos: exact.pos,
      posFull: exact.posFull,
      found: true,
      tones: analyzeVietnameseTones(cleaned),
      breakdown
    };
  }

  // Multi-word selection not in dict as a whole -> compose syllable breakdown if >=1 syllable found
  if (tokens.length > 1 && dict && (hasAnyDiacritic || tokens.some(t => UNAMBIGUOUS_UNACCENTED_VIET.has(t.lower)))) {
    const breakdown = tokens
      .map(t => {
        const sub = decodeDictEntry(lookupRawDict(dict, t.lower));
        return sub && sub.zh ? { syllable: t.text, zh: sub.zh.split(/[\/／,，]/)[0].trim(), hanViet: sub.hanViet } : null;
      })
      .filter(Boolean);
    if (breakdown.length > 0) {
      return {
        word: cleaned,
        normalized: lower,
        zh: breakdown.map(b => b.zh).join(' · '),
        hanViet: '',
        pos: '',
        posFull: '逐字拆譯',
        found: true,
        tones: analyzeVietnameseTones(cleaned),
        breakdown
      };
    }
  }

  if (hasAnyDiacritic) {
    return {
      word: cleaned,
      normalized: lower,
      zh: '',
      hanViet: '',
      pos: '',
      posFull: '',
      found: false,
      tones: analyzeVietnameseTones(cleaned),
      breakdown: []
    };
  }

  return null;
}

// ---------- Browser DOM Caret Detection (Works even on <button> & user-select: none!) ----------

const IGNORED_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'CODE', 'PRE', 'SCRIPT', 'STYLE', 'SVG', 'PATH', 'CANVAS', 'VIDEO', 'AUDIO']);

export function isIgnoredElement(el) {
  if (!el || el.nodeType !== 1) return true;
  if (IGNORED_TAGS.has(el.tagName)) return true;
  if (el.isContentEditable) return true;
  if (el.closest('[data-no-word-lookup], .viet-word-popover')) {
    return true;
  }
  return false;
}

export function isInteractiveClickTarget(el) {
  if (!el || el.nodeType !== 1) return false;
  return Boolean(el.closest('button, a, input, select, textarea, label, [role="button"], [role="tab"], [role="switch"], [role="menuitem"]'));
}

function pointInsideRect(x, y, r, padX = 3, padY = 4) {
  return r.width > 0 && r.height > 0 && x >= r.left - padX && x <= r.right + padX && y >= r.top - padY && y <= r.bottom + padY;
}

/**
 * Fallback scanner for <button> and `user-select: none` elements where Chromium/WebKit
 * caretRangeFromPoint returns an Element node or null instead of a Text node.
 */
function findTextCaretInElement(rootEl, clientX, clientY) {
  if (!rootEl || typeof document === 'undefined') return null;
  const walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let textNode;
  let nodesChecked = 0;

  while ((textNode = walker.nextNode()) && nodesChecked < 40) {
    const val = textNode.nodeValue || '';
    if (!val.trim() || !VIET_CHAR_RE.test(val)) continue;
    nodesChecked++;

    range.selectNodeContents(textNode);
    const nodeRect = range.getBoundingClientRect();
    if (!pointInsideRect(clientX, clientY, nodeRect, 6, 6)) continue;

    // Scan tokenized words in this text node directly (very fast: 1 range check per word!)
    const tokens = tokenizeText(val);
    for (let i = 0; i < tokens.length; i++) {
      range.setStart(textNode, tokens[i].start);
      range.setEnd(textNode, tokens[i].end);
      const rects = range.getClientRects();
      for (let rIdx = 0; rIdx < rects.length; rIdx++) {
        if (pointInsideRect(clientX, clientY, rects[rIdx], 3, 4)) {
          return { node: textNode, offset: tokens[i].start + 1 };
        }
      }
    }
  }
  return null;
}

/**
 * Resolves the text node & character offset at viewport coordinates (clientX, clientY).
 */
function getTextCaretAtPoint(clientX, clientY) {
  if (typeof document === 'undefined') return null;

  if (typeof document.caretPositionFromPoint === 'function') {
    const pos = document.caretPositionFromPoint(clientX, clientY);
    if (pos && pos.offsetNode) {
      if (pos.offsetNode.nodeType === 3) {
        return { node: pos.offsetNode, offset: pos.offset };
      }
      if (pos.offsetNode.nodeType === 1 && !isIgnoredElement(pos.offsetNode)) {
        const hit = findTextCaretInElement(pos.offsetNode, clientX, clientY);
        if (hit) return hit;
      }
    }
  }

  if (typeof document.caretRangeFromPoint === 'function') {
    const range = document.caretRangeFromPoint(clientX, clientY);
    if (range && range.startContainer) {
      if (range.startContainer.nodeType === 3) {
        return { node: range.startContainer, offset: range.startOffset };
      }
      if (range.startContainer.nodeType === 1 && !isIgnoredElement(range.startContainer)) {
        const hit = findTextCaretInElement(range.startContainer, clientX, clientY);
        if (hit) return hit;
      }
    }
  }

  // Final fallback for <button> / user-select:none elements
  const el = document.elementFromPoint(clientX, clientY);
  if (el && !isIgnoredElement(el)) {
    return findTextCaretInElement(el, clientX, clientY);
  }
  return null;
}

/**
 * Detects a Vietnamese word/compound directly under (clientX, clientY) and verifies
 * that the pointer actually sits inside the word's rendered bounding box.
 */
export function detectWordAtPoint(clientX, clientY, dict) {
  const caret = getTextCaretAtPoint(clientX, clientY);
  if (!caret) return null;

  let { node, offset } = caret;
  const parentEl = node.parentElement;
  if (!parentEl || isIgnoredElement(parentEl)) return null;

  const text = node.nodeValue || '';
  if (!text.trim()) return null;

  let result =
    lookupTokenInText(text, offset, dict) ||
    (offset > 0 ? lookupTokenInText(text, offset - 1, dict) : null);

  // If caretRangeFromPoint snapped to an adjacent text node inside a user-select:none container, try element scan
  if (!result) {
    const el = document.elementFromPoint(clientX, clientY);
    if (el && !isIgnoredElement(el)) {
      const altCaret = findTextCaretInElement(el, clientX, clientY);
      if (altCaret) {
        node = altCaret.node;
        offset = altCaret.offset;
        result = lookupTokenInText(node.nodeValue || '', offset, dict);
      }
    }
  }

  if (!result) return null;

  // Verify pointer is genuinely inside the matched word's rendered rect (prevents whitespace false triggers)
  try {
    const range = document.createRange();
    range.setStart(node, result.start);
    range.setEnd(node, result.end);
    const rects = range.getClientRects();
    let hitRect = null;
    for (let i = 0; i < rects.length; i++) {
      const r = rects[i];
      if (pointInsideRect(clientX, clientY, r, 3, 4)) {
        hitRect = r;
        break;
      }
    }
    if (!hitRect) return null;

    const fullRect = range.getBoundingClientRect();
    return {
      ...result,
      rect: {
        top: fullRect.top,
        bottom: fullRect.bottom,
        left: fullRect.left,
        right: fullRect.right,
        width: fullRect.width,
        height: fullRect.height
      },
      hitRect: {
        top: hitRect.top,
        bottom: hitRect.bottom,
        left: hitRect.left,
        right: hitRect.right,
        width: hitRect.width,
        height: hitRect.height
      }
    };
  } catch {
    return null;
  }
}

// ---------- Lazy Dictionary Loader ----------

let cachedDict = null;
let loadPromise = null;

export function getCachedDictionary() {
  return cachedDict;
}

export async function loadWordDictionary() {
  if (cachedDict) return cachedDict;
  if (loadPromise) return loadPromise;

  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const primaryUrl = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}data/vi-zh-dict.json`;

  loadPromise = (async () => {
    try {
      let res = await fetch(primaryUrl, { cache: 'force-cache' });
      if (!res.ok) {
        res = await fetch('./data/vi-zh-dict.json', { cache: 'force-cache' });
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      cachedDict = data;
      return cachedDict;
    } catch (err) {
      loadPromise = null;
      console.warn('[VietWordLookup] Dictionary load failed:', err);
      return null;
    }
  })();

  return loadPromise;
}

export function preloadWordDictionaryIdle() {
  if (cachedDict || loadPromise || typeof window === 'undefined') return;
  const trigger = () => {
    loadWordDictionary().catch(() => {});
  };
  if (typeof window.requestIdleCallback === 'function') {
    window.requestIdleCallback(trigger, { timeout: 1500 });
  } else {
    window.setTimeout(trigger, 800);
  }
}
