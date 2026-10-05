import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

async function fetchAudio(text, retries = 3) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (buffer.byteLength > 200) {
          return Buffer.from(buffer);
        }
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 400 * (i + 1)));
    }
  }
  return null;
}

const phrases = [
  'Ký kết',
  'Ký kết hợp đồng thương mại.',
  'Thu hút vốn đầu tư nước ngoài.',
  'Doanh nghiệp có vốn đầu tư nước ngoài.',
  'Kinh tế Việt Nam phát triển nhanh.',
  'Báo cáo tài chính năm 2026.',
  'Thương mại điện tử rất phát triển.',
  'Chiến lược phát triển dài hạn.',
  'Tăng cường hợp tác song phương.',
  'Quản lý nhân sự và tiến độ sản xuất.',
  'Chính sách ưu đãi thuế cho nhà đầu tư.',
  'Tuân thủ nghiêm ngặt quy định pháp luật.',
  'Mở tài khoản tại ngân hàng Vietcombank.',
  'Thủ tục thông quan tại cảng Cát Lái.',
  'Tham gia hội nghị xúc tiến đầu tư.',
  'Hai bên đã ký kết thỏa thuận hợp tác.',
  'Triển khai dự án xây dựng nhà máy.'
];

console.log(`Synthesizing ${phrases.length} phrases...`);

for (const phrase of phrases) {
  const cleaned = phrase.trim();
  const hash = getHash(cleaned);
  const fileName = `${hash}.mp3`;
  const filePath = path.join(audioDir, fileName);

  if (!fs.existsSync(filePath)) {
    process.stdout.write(`Fetching: "${cleaned}"... `);
    const buf = await fetchAudio(cleaned);
    if (buf) {
      fs.writeFileSync(filePath, buf);
      process.stdout.write(`OK (${buf.length} bytes)\n`);
    } else {
      process.stdout.write(`FAILED\n`);
    }
    await new Promise(r => setTimeout(r, 150));
  } else {
    console.log(`Already exists: ${fileName}`);
  }

  manifest[cleaned] = fileName;
  manifest[cleaned.toLowerCase()] = fileName;
  const stripped = cleaned.replace(/[.,?!;:…]+$/g, '').trim();
  if (stripped) {
    manifest[stripped] = fileName;
    manifest[stripped.toLowerCase()] = fileName;
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('Manifest updated successfully!');
