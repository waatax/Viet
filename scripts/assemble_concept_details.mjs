import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { knowledgeGuides } from '../src/data/knowledgeGuides.js';
import { part1 } from './data_modules/part1.mjs';
import { part2 } from './data_modules/part2.mjs';
import { part3 } from './data_modules/part3.mjs';
import { part4 } from './data_modules/part4.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const allModules = {
  ...part1,
  ...part2,
  ...part3,
  ...part4
};

const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];

let errors = 0;
const expectedModules = Object.keys(knowledgeGuides);

for (const modId of expectedModules) {
  const modData = allModules[modId];
  if (!modData) {
    console.error(`Missing module in conceptDetails: ${modId}`);
    errors++;
    continue;
  }
  if (modData.length !== 9) {
    console.error(`Module ${modId} has ${modData.length} items (expected 9)`);
    errors++;
  }
  const expectedRows = knowledgeGuides[modId].rows;
  for (let i = 0; i < 9; i++) {
    const item = modData[i];
    const expConcept = expectedRows[i][0];
    if (item.concept !== expConcept) {
      console.error(`Module ${modId} [${i}]: concept mismatch. Found "${item.concept}", expected "${expConcept}"`);
      errors++;
    }
    // Verify required fields
    for (const field of ['syntax', 'usage', 'trap', 'mnemonic', 'infograph']) {
      if (!item[field]) {
        console.error(`Module ${modId} [${i}] (${item.concept}): missing field "${field}"`);
        errors++;
      }
    }
    // Check infograph
    if (item.infograph && (!item.infograph.type || !item.infograph.title)) {
      console.error(`Module ${modId} [${i}] (${item.concept}): infograph missing type or title`);
      errors++;
    }
    // Check text for simplified or mainland terms
    const checkText = `${item.concept} ${item.syntax} ${item.usage} ${item.trap} ${item.mnemonic} ${item.infograph?.title || ''}`;
    const simp = checkText.match(SIMPLIFIED);
    if (simp) {
      console.error(`Module ${modId} [${i}] (${item.concept}): contains simplified character "${simp[0]}" in "${checkText.slice(0, 30)}..."`);
      errors++;
    }
    for (const m of MAINLAND) {
      if (checkText.includes(m)) {
        console.error(`Module ${modId} [${i}] (${item.concept}): contains mainland term "${m}"`);
        errors++;
      }
    }
  }
}

if (errors > 0) {
  console.error(`Validation failed with ${errors} errors.`);
  process.exit(1);
}

console.log(`Validation passed! All 20 modules and 180 concepts strictly verified.`);

const outputContent = `/**
 * Explicit Knowledge Point Details & Micro-Infographics Database (全量 180 知識點架構庫)
 * 每個知識點均配備：
 *  - concept: 知識點名稱 (與課綱嚴格對齊)
 *  - syntax: 核心語法槽位 / 語用公式
 *  - usage: 深度實戰規則剖析
 *  - trap: 華語學習者高頻避坑警示 (繁體台灣用語標準，杜絕簡體與大陸術語)
 *  - mnemonic: 記憶心法與口訣
 *  - infograph: 專屬微型向量資訊圖表結構 (type, title, metadata)
 */

export const conceptDetails = ${JSON.stringify(allModules, null, 2)};
`;

fs.writeFileSync(path.join(ROOT, 'src', 'data', 'conceptDetails.js'), outputContent, 'utf8');
console.log('Successfully wrote src/data/conceptDetails.js');
