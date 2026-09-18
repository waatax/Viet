import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

const phrases = [
  'Em chào anh ạ, ngày mai mình đi cà phê nhé!',
  'Tiếng Việt càng học càng thấy thú vị.',
  'Thời tiết mát mẻ làm cho tôi cảm thấy rất dễ chịu.',
  'Trước khi đi ngủ, tôi luôn uống một ly nước ấm.',
  'Nếu ngày mai trời mưa thì chúng ta sẽ ở nhà.',
  'Hai người bạn thân cùng nhau đi du lịch Đà Nẵng.',
  'Tôi thường xuyên tập thể dục vào buổi sáng sớm.',
  'Mỗi ngày tôi đều học mười từ vựng mới.',
  'Tuần sau tôi sẽ đi ra Hà Nội công tác rồi đi vào Sài Gòn.',
  'Xin vui lòng giữ im lặng trong phòng họp.',
  'Tâm bình an',
  'Bình minh lên',
  'Thảo mộc xanh',
  'Xã hội mới',
  'Tiến bộ nhanh',
  'Đại lộ lớn',
  'Bắc tiến gấp',
  'Học tập tốt'
];

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

async function fetchAudio(text) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = await res.arrayBuffer();
        if (buf.byteLength > 200) return Buffer.from(buf);
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  return null;
}

console.log(`Generating audio for ${phrases.length} new phrases...`);
for (let i = 0; i < phrases.length; i++) {
  const text = phrases[i];
  const hash = getHash(text);
  const fileName = `${hash}.mp3`;
  const filePath = path.join(audioDir, fileName);

  if (!fs.existsSync(filePath)) {
    const buf = await fetchAudio(text);
    if (buf) {
      fs.writeFileSync(filePath, buf);
      console.log(`[${i + 1}/${phrases.length}] Downloaded: ${text} (${buf.length} bytes)`);
    } else {
      console.error(`[${i + 1}/${phrases.length}] Failed: ${text}`);
    }
    await new Promise(r => setTimeout(r, 120));
  }

  manifest[text] = fileName;
  manifest[text.toLowerCase()] = fileName;
  const stripped = text.replace(/[.,?!;:…]+$/g, '').trim();
  if (stripped) {
    manifest[stripped] = fileName;
    manifest[stripped.toLowerCase()] = fileName;
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('Audio generation finished! Manifest updated.');
