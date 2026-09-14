import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { SITUATIONAL_TOPICS } from '../src/data/situationalTopicsData.js';

const audioDir = path.resolve('public/audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const manifestPath = path.resolve('src/data/audioManifest.json');
let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {}
}

function cleanText(text) {
  if (!text) return '';
  let cleaned = String(text);
  cleaned = cleaned.replace(/\([^)]*[\u4e00-\u9fa5A-Za-z]+[^)]*\)/g, ' ');
  cleaned = cleaned.replace(/（[^）]*[\u4e00-\u9fa5A-Za-z]+[^）]*）/g, ' ');
  cleaned = cleaned.replace(/\[[^\]]*\]/g, ' ');
  cleaned = cleaned.replace(/[\u4e00-\u9fa5]/g, ' ');
  cleaned = cleaned.replace(/[，。！？；：（）「」『』、《》“”‘’…—]/g, ' ');
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*(?:đ|₫|VND)(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} đồng `);
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*k(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} nghìn `);
  cleaned = cleaned.replace(/NT\$/gi, ' ');
  cleaned = cleaned.replace(/\$/g, ' ');
  cleaned = cleaned.replace(/~/g, ' ');
  cleaned = cleaned.replace(/[—_=+*#@$%^&|\\/<>]/g, ' ');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

const targetPhrases = new Set();
const rawToCleanMap = new Map();

function register(raw) {
  if (!raw) return;
  const cleaned = cleanText(raw);
  if (cleaned) {
    targetPhrases.add(cleaned);
    rawToCleanMap.set(String(raw).trim(), cleaned);
  }
}

SITUATIONAL_TOPICS.forEach(topic => {
  if (topic.quickGuide?.survivalTable) {
    topic.quickGuide.survivalTable.forEach(item => register(item.viet));
  }
  if (topic.quickGuide?.sentencePatterns) {
    topic.quickGuide.sentencePatterns.forEach(p => {
      if (p.example) register(p.example);
    });
  }
  if (topic.dialogues) {
    topic.dialogues.forEach(d => {
      if (d.lines) d.lines.forEach(l => register(l.viet));
    });
  }
  if (topic.flashcardDeck) {
    topic.flashcardDeck.forEach(fc => register(fc.viet));
  }
});

console.log(`Found ${targetPhrases.size} unique cleaned phrases in SITUATIONAL_TOPICS.`);

async function fetchAudioSingleChunk(text, retries = 3) {
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

async function fetchAudioWithRetry(text) {
  if (!text) return null;
  if (text.length <= 150) {
    return await fetchAudioSingleChunk(text);
  }
  const sentences = text.match(/[^.!?;\n]+[.!?;\n]*/g) || [text];
  const chunks = [];
  let currentChunk = '';
  for (const s of sentences) {
    if ((currentChunk + ' ' + s).length > 140) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim());
      currentChunk = s;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + s;
    }
  }
  if (currentChunk.trim()) chunks.push(currentChunk.trim());
  const buffers = [];
  for (const chunk of chunks) {
    const buf = await fetchAudioSingleChunk(chunk);
    if (buf) buffers.push(buf);
    await new Promise(r => setTimeout(r, 60));
  }
  return buffers.length > 0 ? Buffer.concat(buffers) : null;
}

async function build() {
  let downloaded = 0;
  let cached = 0;
  let failed = 0;
  const list = Array.from(targetPhrases);

  for (let i = 0; i < list.length; i++) {
    const phrase = list[i];
    const hash = getHash(phrase);
    const filename = `${hash}.mp3`;
    const filepath = path.join(audioDir, filename);

    manifest[phrase] = filename;
    manifest[phrase.toLowerCase()] = filename;

    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 200) {
      cached++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${list.length}] Fetching "${phrase.slice(0, 30)}..." `);
    const data = await fetchAudioWithRetry(phrase);
    if (data) {
      fs.writeFileSync(filepath, data);
      downloaded++;
      console.log(`OK (${data.length} bytes)`);
    } else {
      failed++;
      console.log(`FAILED!`);
    }

    await new Promise(r => setTimeout(r, 75));
  }

  // Map raw strings as well
  rawToCleanMap.forEach((cleaned, raw) => {
    const hash = getHash(cleaned);
    const filename = `${hash}.mp3`;
    manifest[raw] = filename;
    manifest[raw.toLowerCase()] = filename;
  });

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n=== Topics Audio Bank Complete ===`);
  console.log(`Total: ${list.length}`);
  console.log(`Newly Downloaded: ${downloaded}`);
  console.log(`Already Cached: ${cached}`);
  console.log(`Failed: ${failed}`);
  console.log(`Manifest updated at: ${manifestPath}\n`);
}

build();
