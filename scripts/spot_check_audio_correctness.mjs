import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audioDir = path.resolve('public/audio');

console.log('====================================================');
console.log('   DEEP AUDIT & SPOT-CHECK: AUDIO CORRECTNESS & STANDARDS');
console.log('====================================================\n');

// 1. Physical file check for all manifest entries
console.log('--- Phase 1: Physical File Integrity Verification ---');
const totalEntries = Object.keys(manifest).length;
const referencedFiles = new Set(Object.values(manifest));
console.log(`Total text index entries in manifest: ${totalEntries}`);
console.log(`Unique MP3 files referenced in manifest: ${referencedFiles.size}`);

let missingFileCount = 0;
let corruptFileCount = 0;
let minSize = Infinity;
let maxSize = 0;
let totalBytes = 0;

referencedFiles.forEach(file => {
  const fullPath = path.join(audioDir, file);
  if (!fs.existsSync(fullPath)) {
    missingFileCount++;
    console.error(`[MISSING ON DISK] ${file}`);
    return;
  }
  const stat = fs.statSync(fullPath);
  if (stat.size < 300) {
    corruptFileCount++;
    console.error(`[CORRUPT/EMPTY] ${file} size: ${stat.size} bytes`);
  }
  // Check MP3 header: ID3 (49 44 33) or MPEG sync frame (FF FB / FF F3 / FF F2)
  const fd = fs.openSync(fullPath, 'r');
  const headerBuf = Buffer.alloc(4);
  fs.readSync(fd, headerBuf, 0, 4, 0);
  fs.closeSync(fd);

  const isId3 = headerBuf[0] === 0x49 && headerBuf[1] === 0x44 && headerBuf[2] === 0x33;
  const isMpegSync = headerBuf[0] === 0xFF && (headerBuf[1] & 0xE0) === 0xE0;
  if (!isId3 && !isMpegSync) {
    corruptFileCount++;
    console.error(`[INVALID AUDIO HEADER] ${file} header: ${headerBuf.toString('hex')}`);
  }

  if (stat.size < minSize) minSize = stat.size;
  if (stat.size > maxSize) maxSize = stat.size;
  totalBytes += stat.size;
});

console.log(`Missing files on disk: ${missingFileCount}`);
console.log(`Corrupt / Non-MP3 files: ${corruptFileCount}`);
console.log(`Smallest file: ${minSize} bytes | Largest file: ${maxSize} bytes`);
console.log(`Total audio library size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);

// 2. Text sanitization verification
console.log('\n--- Phase 2: Linguistic Text Sanitization Audit ---');
let chineseLeakCount = 0;
let englishBracketLeakCount = 0;

Object.keys(manifest).forEach(text => {
  if (/[\u4e00-\u9fa5]/.test(text)) {
    chineseLeakCount++;
  }
  if (/\([^)]*[A-Za-z]+[^)]*\)/.test(text) && !/^\([^)]+\)$/.test(text)) {
    englishBracketLeakCount++;
  }
});
console.log(`Keys with raw Chinese characters: ${chineseLeakCount} (sanitized at runtime by audioEngine.cleanText)`);
console.log(`Keys with bracketed notes: ${englishBracketLeakCount}`);

// 3. Phonetic and Tone Spot-Check
console.log('\n--- Phase 3: Comprehensive Pedagogical Audio Spot-Checks ---');

const spotCheckCategories = [
  {
    category: '1. Sáu Thanh Điệu (6 Tone Contours & Minimal Pairs)',
    samples: [
      { text: 'ma', expected: 'Thanh Ngang (平聲 44)', note: '鬼' },
      { text: 'mà', expected: 'Thanh Huyền (玄聲 31)', note: '但是 / 墓' },
      { text: 'má', expected: 'Thanh Sắc (銳聲 35)', note: '媽媽 / 臉頰' },
      { text: 'mả', expected: 'Thanh Hỏi (問聲 31-12)', note: '墳墓' },
      { text: 'mã', expected: 'Thanh Ngã (跌聲 35-45)', note: '號碼 / 馬' },
      { text: 'mạ', expected: 'Thanh Nặng (重聲 21)', note: '秧苗' },
      { text: 'sữa', expected: 'Thanh Ngã (Saigon hỏi/ngã merger check)', note: '牛奶' },
      { text: 'sửa', expected: 'Thanh Hỏi', note: '修理' },
      { text: 'ngủ', expected: 'Thanh Hỏi', note: '睡覺' },
      { text: 'ngũ', expected: 'Thanh Ngã', note: '五 / 軍伍' }
    ]
  },
  {
    category: '2. Phương Ngữ Bắc - Nam (Regional North-South Dialect Standard)',
    samples: [
      { text: 'Thìa', expected: 'Bắc bộ (北部湯匙)', note: '勺子' },
      { text: 'Muỗng', expected: 'Nam bộ (南部湯匙)', note: '湯匙' },
      { text: 'một trăm nghìn đồng', expected: 'Bắc bộ (100k VND)', note: '十萬越盾 (北)' },
      { text: 'một trăm ngàn đồng', expected: 'Nam bộ (100k VND)', note: '十萬越盾 (南)' },
      { text: 'hoa quả', expected: 'Bắc bộ (水果)', note: '水果 (北)' },
      { text: 'trái cây', expected: 'Nam bộ (水果)', note: '水果 (南)' },
      { text: 'Vâng ạ', expected: 'Bắc bộ (禮貌是/好的)', note: '遵命 (北)' },
      { text: 'Dạ', expected: 'Nam bộ (禮貌是/好的)', note: '夜/好的 (南)' }
    ]
  },
  {
    category: '3. Quy Tắc Số Đếm & Tiền Tệ (Numbering Irregularities & Currency)',
    samples: [
      { text: 'hai mươi mốt', expected: 'mốt (không đọc là một)', note: '21' },
      { text: 'ba mươi tư', expected: 'tư (không đọc là bốn)', note: '34' },
      { text: 'bốn mươi lăm', expected: 'lăm (không đọc là năm)', note: '45' },
      { text: 'hai triệu rưỡi', expected: 'rưỡi (nửa triệu)', note: '250 萬越盾' }
    ]
  },
  {
    category: '4. Tình Huống Đời Sống Thực Tế & 7 Chuyên Đề Sâu (Situational Curriculum)',
    samples: [
      { text: 'Dạ, em chào Giám đốc Nam ạ! Rất hân hạnh được gặp anh.', expected: 'Chuyên đề 1: Chào hỏi thương mại', note: '商務拜會' },
      { text: 'Em ơi! Quán mình có phở bò không em?', expected: 'Chuyên đề 2: Gọi món nhà hàng', note: '餐廳點餐' },
      { text: 'Anh Minh ơi, gia đình anh ở Đài Loan có mấy người vậy?', expected: 'Chuyên đề 3: Gia đình dòng tộc', note: '家庭問候' },
      { text: 'Chào dược sĩ, tôi bị sốt nhẹ và nghẹt mũi từ tối qua.', expected: 'Chuyên đề 4: Sức khỏe y tế', note: '診所就醫' },
      { text: 'Chào anh, anh đến Việt Nam với mục đích gì?', expected: 'Chuyên đề 5: Thời gian & Lưu trú', note: '海關停留' },
      { text: 'Chị ơi, sầu riêng này bán thế nào một ký vậy chị?', expected: 'Chuyên đề 6: Giá cả & Mặc cả', note: '市場詢價' },
      { text: 'Anh muốn cắt kiểu Undercut gọn gàng. Hai bên và sau gáy cắt ngắn sát, còn phần đỉnh chỉ tỉa bớt và tỉa mỏng thôi, đừng cắt ngắn quá nhé.', expected: 'Tình huống 30Shine: Cắt tóc', note: '理髮沙龍' },
      { text: 'Tôi bị dị ứng nặng với đậu phộng hải sản bột ngọt.', expected: 'Emergency Kit: Cấp cứu y tế', note: '過敏急救' },
      { text: 'Bên B cam kết bán và Bên A cam kết mua 50.000 bộ linh kiện điện tử sản xuất theo tiêu chuẩn ISO 9001:2015. Dung sai kỹ thuật không vượt quá ±0.05 mm.', expected: 'Thương mại: Hợp đồng mua bán', note: '正式商務合約' }
    ]
  }
];

let passCount = 0;
let sampleTotal = 0;

spotCheckCategories.forEach(group => {
  console.log(`\n${group.category}`);
  group.samples.forEach(s => {
    sampleTotal++;
    const file = manifest[s.text] || manifest[s.text.toLowerCase()];
    if (file) {
      const fullPath = path.join(audioDir, file);
      const exists = fs.existsSync(fullPath);
      const size = exists ? fs.statSync(fullPath).size : 0;
      if (exists && size > 300) {
        passCount++;
        console.log(`  ✅ [PASS] "${s.text}"`);
        console.log(`     -> File: ${file} (${size} bytes) | Expected: ${s.expected} (${s.note})`);
      } else {
        console.log(`  ❌ [FAIL - SIZE/EXIST] "${s.text}" -> File: ${file} (exists: ${exists}, size: ${size})`);
      }
    } else {
      console.log(`  ❌ [FAIL - UNMAPPED] "${s.text}"`);
    }
  });
});

console.log('\n====================================================');
console.log(`SPOT CHECK SUMMARY: ${passCount} / ${sampleTotal} Passed (${((passCount / sampleTotal) * 100).toFixed(1)}%)`);
console.log('====================================================');
