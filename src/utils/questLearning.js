// Keep narration language explicit: Chinese task instructions and Vietnamese models.
export const speechLanguage = text => /[\u3400-\u9fff]/u.test(text) ? 'zh' : 'vi';
export const readableAnswer = q => q.type === 'match'
  ? q.pairs.map(([vi, zh]) => `${vi}：${zh}`).join('；') : q.answer;
export const repairAdvice = (q, answer) => {
  const normalize = value => String(value || '').normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase().replace(/[\s.,!?]+/g, '');
  if (q.type === 'input' && normalize(answer) === normalize(q.answer)) return '你已抓到詞形；請比對母音符號與聲調。越文的附加符號可能改變詞義，慢聽後再輸入一次。';
  return ({ listen: '先重聽越文，找出時間、數量或否定詞，再對照下面的解說；下一次先不看字幕。', build: '先找主詞和動詞，再放受詞與修飾語。對照正確語序，遮住答案重新組句。', match: '把容易混淆的兩組詞分開念，再用其中一個詞說一句話。', input: '把答案放回完整句子，檢查詞義、拼字和聲調，再遮住答案回想。', choice: '比較你選的意思與正解，指出哪個關鍵詞或情境條件不同，再看規則說明。' })[q.type];
};
