import { vietnameseAlphabet, vietnameseCompoundConsonants, vietnameseFinalConsonants } from './vietnameseData.js';

export const tones = [
  ['ngang', '平聲', '', '維持平穩的音高。'],
  ['huyền', '玄聲', '\u0300', '放鬆喉部，讓音高向下走。'],
  ['sắc', '銳聲', '\u0301', '從中音往上揚。'],
  ['hỏi', '問聲', '\u0309', '音高先往下探，單念時可再回升。'],
  ['ngã', '跌聲', '\u0303', '河內音常帶喉部收緊，再往上揚。'],
  ['nặng', '重聲', '\u0323', '河內音低而短，喉部收緊收尾。']
];

// The uppercase vowel marks the tone-bearing letter. A legal syllable frame
// keeps short vowels and dependent spellings pronounceable in all six tones.
const families = {
  single: [
    ['a','mA'], ['ă','bĂn'], ['â','cÂn'], ['e','bE'], ['ê','bÊ'], ['i','bI'],
    ['o','bO'], ['ô','cÔ'], ['ơ','mƠ'], ['u','tU'], ['ư','tƯ'], ['y','lY']
  ],
  double: [
    ['ia','bIa'], ['iê','tiÊn'], ['yê','yÊn'], ['ya','khuYa'],
    ['ua','mUa'], ['uô','muÔn'], ['ưa','mƯa'], ['ươ','lưƠn']
  ],
  glide: [
    ['ai','mAi'], ['ay','tAy'], ['ao','bAo'], ['au','sAu'], ['âu','cÂu'], ['ây','cÂy'],
    ['eo','mEo'], ['êu','kÊu'], ['iu','dIu'], ['oi','bOi'], ['ôi','tÔi'], ['ơi','chƠi'],
    ['ui','vUi'], ['ưi','gƯi'], ['ưu','lƯu'], ['oa','hOa'], ['oă','hoĂn'], ['oe','khOe'],
    ['uâ','tuÂn'], ['uê','huÊ'], ['uy','tUy'], ['uơ','huƠ']
  ]
};

export const deckNames = {
  single: '單母音', double: '核心雙母音', glide: '滑音組合', initial: '字首子音', final: '字尾子音'
};

export const pronunciationDecks = Object.fromEntries(Object.entries(families).map(([key, rows]) => [
  key, rows.flatMap(([pattern, frame]) => tones.map(([tone, label, mark, tip], toneIndex) => {
    const word = frame.replace(/\p{Lu}/u, letter => (letter.toLowerCase() + mark).normalize('NFC'));
    return { pattern, word, toneIndex, answer: tone + ' · ' + label, tip };
  }))
]));

pronunciationDecks.initial = [
  ...vietnameseAlphabet.filter(item => item.type === 'consonant').map(item => ({
    pattern: item.char.split(' ')[1], word: item.example, answer: item.meaningZh, tip: item.hintZh
  })),
  ...vietnameseCompoundConsonants.flatMap(item => item.cluster.split(' / ').map(pattern => {
    const example = item.examples.find(ex => ex.vi.toLowerCase().startsWith(pattern) &&
      (pattern !== 'ng' || !ex.vi.toLowerCase().startsWith('ngh'))) ||
      (pattern === 'ng' ? { vi: 'Ngon', zh: '好吃' } : item.examples[0]);
    return { pattern, word: example.vi, answer: example.zh, tip: item.descZh };
  }))
];

pronunciationDecks.final = vietnameseFinalConsonants.flatMap(group => group.items.map(item => ({
  pattern: item.final, word: item.examples[0].vi, answer: item.examples[0].zh, tip: item.descZh
})));
