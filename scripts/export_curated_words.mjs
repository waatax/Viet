import fs from 'fs';
import { flashcardsDeck } from '../src/data/vietnameseData.js';
import { SITUATIONAL_TOPICS } from '../src/data/situationalTopicsData.js';

const topicCategoryMap = {
  business_greeting: '商務職場', dining_restaurant: '餐飲美食',
  family_kinship: '家庭親屬', health_medical: '醫療健康',
  date_time_stay: '日期時間', pricing_bargaining: '購物殺價',
  numbers_scale: '數字量詞'
};

const topicCards = SITUATIONAL_TOPICS.flatMap(topic => 
  (topic.flashcardDeck || []).map(fc => ({
    ...fc,
    category: topicCategoryMap[topic.id] || '生活日常'
  }))
);

const curated = [...flashcardsDeck, ...topicCards].map((c, idx) => ({
  id: c.id ? `curated_${c.id}` : `curated_${idx + 1}`,
  rank: idx + 1,
  viet: c.viet,
  zh: c.zh,
  en: c.en || '',
  hanViet: c.hanViet || '',
  pos: c.pos || '常用詞彙',
  category: c.category || '生活情境',
  example: c.example || '',
  exampleZh: c.exampleZh || ''
}));

fs.writeFileSync('scripts/curated_words.json', JSON.stringify(curated, null, 2), 'utf-8');
console.log(`Exported ${curated.length} curated words to scripts/curated_words.json`);
