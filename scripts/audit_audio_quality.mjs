/**
 * Automated quality audit for every conversation line and its audio (the checks an agent can
 * run without a human listener):
 *   1. format   – each clip is a neural MP3 (edge-tts: 24 kHz mono 48 kb/s), not a robotic fallback
 *   2. pace     – duration per Vietnamese syllable / Chinese character is plausible
 *                 (catches truncated, padded or wrong-sentence audio)
 *   3. loudness – no silent or near-silent clips
 *   4. mapping  – one MP3 is never shared by two different sentences
 *   5. text     – Vietnamese spelling (letters, one tone mark per syllable) and Taiwan Traditional
 *                 Chinese (no simplified characters or mainland terms) in every spoken line
 *   6. asr      – optional (--asr <ggml model>): ffmpeg's whisper filter transcribes each Vietnamese
 *                 clip and compares it with the text (character error rate)
 *
 * Input: scripts/cache/dialogue_audio_map.json (written by extract_dialogue_texts.mjs)
 * Usage: node scripts/extract_dialogue_texts.mjs && node scripts/audit_audio_quality.mjs [--asr model.bin]
 * Output: scripts/cache/audio_quality_report.json; exit code 1 when a blocking issue is found.
 */
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { fileURLToPath } from 'node:url';

const run = promisify(execFile);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AUDIO = path.join(ROOT, 'public', 'audio');
const MAP_PATH = path.join(ROOT, 'scripts', 'cache', 'dialogue_audio_map.json');
const REPORT_PATH = path.join(ROOT, 'scripts', 'cache', 'audio_quality_report.json');
const asrIndex = process.argv.indexOf('--asr');
const ASR_MODEL = asrIndex > 0 ? path.resolve(process.argv[asrIndex + 1]) : null;

if (!fs.existsSync(MAP_PATH)) {
  console.error('Run node scripts/extract_dialogue_texts.mjs first.');
  process.exit(1);
}
const rows = JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'));

// ------------------------------------------------------------------ text checks
const VI_LETTERS = 'a-zA-ZàáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÈÉẺẼẸÊỀẾỂỄỆÌÍỈĨỊÒÓỎÕỌÔỒỐỔỖỘƠỜỚỞỠỢÙÚỦŨỤƯỪỨỬỮỰỲÝỶỸỴĐ';
const VI_WORD = new RegExp(`[${VI_LETTERS}]+`, 'g');
const TONE_MARKS = /[̣̀́̃̉]/g;
// Characters that only exist in Simplified Chinese (ambiguous ones such as 里/面/台/只 are excluded)
const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证护边进运输费让给经济现实际业产厂级区别从应该样种认识诉讲师钟头热闹难预订备选择须将处负责总结]/;
const MAINLAND_TERMS = ['视频', '視頻', '質量', '信息', '軟件', '出租車', '打車', '土豆', '西紅柿', '酸奶', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '充電寶', '方便面', '自行車', '摩托車', '激活', '登機牌', '托運', '塑料', '渠道', '鼠標', '菠蘿', '前台'];

const syllables = text => (text.match(VI_WORD) || []);
// Commas, list separators and exclamations inside a line are voiced as pauses (~0.4 s each)
const pauseUnits = text => (text.replace(/[\s.。!！?？]+$/u, '').match(/[,，、;；:：!！?？.。/]/g) || []).length * 1.5;
const viSpeechUnits = text => {
  // digits are read as several syllables ("120.000" → một trăm hai mươi nghìn)
  const digitGroups = (text.match(/\d+/g) || []).reduce((n, d) => n + Math.min(6, d.length * 1.5), 0);
  return syllables(text).length + digitGroups + pauseUnits(text);
};
const zhSpeechUnits = text => (text.match(/[一-鿿]/g) || []).length
  + (text.match(/[A-Za-z]+/g) || []).reduce((n, w) => n + Math.max(1, Math.round(w.length / 3)), 0)
  + (text.match(/\d+/g) || []).reduce((n, d) => n + Math.min(6, d.length * 1.5), 0)
  + pauseUnits(text);

const textIssues = [];
const seenText = new Set();
for (const row of rows) {
  if (!seenText.has(`vi:${row.viet}`)) {
    seenText.add(`vi:${row.viet}`);
    for (const word of syllables(row.viet)) {
      const tones = word.normalize('NFD').match(TONE_MARKS) || [];
      if (tones.length > 1) textIssues.push({ kind: 'vi-double-tone', source: row.source, word, text: row.viet });
    }
    const stray = row.viet.replace(VI_WORD, '').replace(/[\d\s.,!?;:'"“”‘’…\-–—/%&+×=@#$₫đ°()]/g, '');
    if (stray) textIssues.push({ kind: 'vi-stray-characters', source: row.source, chars: [...new Set(stray)].join(''), text: row.viet });
  }
  if (row.zh && !seenText.has(`zh:${row.zh}`)) {
    seenText.add(`zh:${row.zh}`);
    const simp = row.zh.match(new RegExp(SIMPLIFIED.source, 'g'));
    if (simp) textIssues.push({ kind: 'zh-simplified', source: row.source, chars: [...new Set(simp)].join(''), text: row.zh });
    const terms = MAINLAND_TERMS.filter(t => row.zh.includes(t));
    if (terms.length) textIssues.push({ kind: 'zh-mainland-term', source: row.source, terms, text: row.zh });
  }
}

// ------------------------------------------------------------------ audio checks
const clips = new Map(); // file -> { lang, texts:Set, sources:Set }
for (const row of rows) {
  for (const file of new Set([row.vi.north, row.vi.south].filter(Boolean))) {
    const clip = clips.get(file) || { lang: 'vi', texts: new Set(), sources: new Set(), raw: row.raw || row.viet };
    clip.texts.add(row.viet);
    clip.sources.add(row.source);
    clips.set(file, clip);
  }
  if (row.zhFile) {
    const clip = clips.get(row.zhFile) || { lang: 'zh', texts: new Set(), sources: new Set() };
    clip.texts.add(row.zh);
    clip.sources.add(row.source);
    clips.set(row.zhFile, clip);
  }
}

const probe = async (file) => {
  const full = path.join(AUDIO, file);
  const { stdout } = await run('ffprobe', ['-v', 'error', '-select_streams', 'a:0', '-show_entries',
    'stream=codec_name,sample_rate,channels,bit_rate:format=duration', '-of', 'json', full]);
  const info = JSON.parse(stdout);
  const { stderr } = await run('ffmpeg', ['-hide_banner', '-nostats', '-i', full, '-af', 'volumedetect', '-f', 'null', '-']);
  const maxVolume = Number(/max_volume:\s*(-?[\d.]+) dB/.exec(stderr)?.[1]);
  const meanVolume = Number(/mean_volume:\s*(-?[\d.]+) dB/.exec(stderr)?.[1]);
  const stream = info.streams?.[0] || {};
  return {
    codec: stream.codec_name,
    sampleRate: Number(stream.sample_rate),
    channels: stream.channels,
    bitRate: Math.round(Number(stream.bit_rate) / 1000),
    duration: Number(info.format?.duration),
    maxVolume,
    meanVolume
  };
};

const normalizeForCompare = text => text.normalize('NFC').toLowerCase()
  .replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

const levenshtein = (a, b) => {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = tmp;
    }
  }
  return prev[b.length];
};

const transcribe = async (file) => {
  const out = path.join(os.tmpdir(), `asr-${process.pid}-${path.basename(file)}.txt`);
  const model = ASR_MODEL.replace(/\\/g, '/').replace(/:/g, '\\:');
  const dest = out.replace(/\\/g, '/').replace(/:/g, '\\:');
  await run('ffmpeg', ['-hide_banner', '-nostats', '-loglevel', 'error', '-i', path.join(AUDIO, file),
    '-af', `aresample=16000,whisper=model=${model}:language=vi:queue=30:destination=${dest}:format=text`, '-f', 'null', '-']);
  const text = fs.existsSync(out) ? fs.readFileSync(out, 'utf-8') : '';
  fs.rmSync(out, { force: true });
  return text.trim();
};

const files = [...clips.keys()];
const results = new Map();
let cursor = 0;
let done = 0;
await Promise.all(Array.from({ length: Math.max(2, Math.min(8, os.cpus().length)) }, async () => {
  while (cursor < files.length) {
    const file = files[cursor++];
    try {
      results.set(file, await probe(file));
    } catch (error) {
      results.set(file, { error: error.message.split('\n')[0] });
    }
    if (++done % 500 === 0) console.log(`  probed ${done}/${files.length}`);
  }
}));

const audioIssues = [];
const paces = { vi: [], zh: [] };
for (const [file, clip] of clips) {
  const r = results.get(file);
  const text = [...clip.texts][0];
  const source = [...clip.sources][0];
  if (r.error || !r.duration) {
    audioIssues.push({ kind: 'unreadable', blocking: true, file, text, source, detail: r.error });
    continue;
  }
  if (r.codec !== 'mp3' || r.sampleRate !== 24000 || r.channels !== 1 || r.bitRate < 40) {
    audioIssues.push({ kind: 'non-neural-format', blocking: false, file, text, source,
      detail: `${r.codec} ${r.sampleRate}Hz ${r.channels}ch ${r.bitRate}kb/s` });
  }
  if (!(r.maxVolume > -30)) {
    audioIssues.push({ kind: 'too-quiet', blocking: true, file, text, source, detail: `max ${r.maxVolume} dB` });
  }
  // Pauses are counted on the raw line: cleaning drops separators such as "a / b" that are voiced
  const units = clip.lang === 'vi'
    ? viSpeechUnits(text) - pauseUnits(text) + pauseUnits(clip.raw.replace(/\([^)]*\)|（[^）]*）|\[[^\]]*\]/g, ''))
    : zhSpeechUnits(text);
  if (units >= 3) {
    const secPerUnit = r.duration / units;
    paces[clip.lang].push(secPerUnit);
    // edge-tts speaks ~0.2–0.3 s per Vietnamese syllable and ~0.2–0.25 s per Chinese character;
    // clip padding makes short lines look slow, so the upper bound is generous.
    const [low, high] = clip.lang === 'vi' ? [0.11, units < 6 ? 0.9 : 0.6] : [0.09, units < 6 ? 0.9 : 0.5];
    if (secPerUnit < low || secPerUnit > high) {
      audioIssues.push({ kind: 'pace-outlier', blocking: true, file, text, source,
        detail: `${r.duration.toFixed(2)}s for ${units} units = ${secPerUnit.toFixed(3)} s/unit` });
    }
  }
  const distinct = new Set([...clip.texts].map(normalizeForCompare));
  if (distinct.size > 1) {
    audioIssues.push({ kind: 'shared-by-different-texts', blocking: true, file, texts: [...distinct], source });
  }
}

// ------------------------------------------------------------------ optional ASR round trip
const asr = [];
if (ASR_MODEL) {
  const viClips = [...clips].filter(([, clip]) => clip.lang === 'vi');
  console.log(`ASR: transcribing ${viClips.length} Vietnamese clips with ${path.basename(ASR_MODEL)}`);
  let asrCursor = 0;
  await Promise.all(Array.from({ length: 2 }, async () => {
    while (asrCursor < viClips.length) {
      const [file, clip] = viClips[asrCursor++];
      const expected = normalizeForCompare([...clip.texts][0]);
      try {
        const heard = normalizeForCompare(await transcribe(file));
        const cer = expected ? levenshtein(heard, expected) / expected.length : 0;
        asr.push({ file, expected, heard, cer: Number(cer.toFixed(3)), source: [...clip.sources][0] });
      } catch (error) {
        asr.push({ file, expected, error: error.message.split('\n')[0] });
      }
      if (asr.length % 100 === 0) console.log(`  ASR ${asr.length}/${viClips.length}`);
    }
  }));
}

// ------------------------------------------------------------------ report
const median = list => {
  const sorted = [...list].sort((a, b) => a - b);
  return sorted.length ? Number(sorted[Math.floor(sorted.length / 2)].toFixed(3)) : null;
};
const count = (list, kind) => list.filter(i => i.kind === kind).length;
const report = {
  generatedAt: new Date().toISOString(),
  lines: rows.length,
  clips: { total: clips.size, vi: [...clips.values()].filter(c => c.lang === 'vi').length, zh: [...clips.values()].filter(c => c.lang === 'zh').length },
  medianSecondsPerUnit: { vi: median(paces.vi), zh: median(paces.zh) },
  summary: {
    unreadable: count(audioIssues, 'unreadable'),
    nonNeuralFormat: count(audioIssues, 'non-neural-format'),
    tooQuiet: count(audioIssues, 'too-quiet'),
    paceOutliers: count(audioIssues, 'pace-outlier'),
    sharedByDifferentTexts: count(audioIssues, 'shared-by-different-texts'),
    viDoubleTone: count(textIssues, 'vi-double-tone'),
    viStrayCharacters: count(textIssues, 'vi-stray-characters'),
    zhSimplified: count(textIssues, 'zh-simplified'),
    zhMainlandTerms: count(textIssues, 'zh-mainland-term')
  },
  asr: ASR_MODEL ? {
    model: path.basename(ASR_MODEL),
    clips: asr.length,
    medianCer: median(asr.filter(a => a.cer != null).map(a => a.cer)),
    over30: asr.filter(a => a.cer > 0.3).length,
    worst: [...asr].filter(a => a.cer != null).sort((a, b) => b.cer - a.cer).slice(0, 40)
  } : null,
  audioIssues,
  textIssues
};
fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf-8');

console.log(`Lines ${report.lines} | clips ${report.clips.total} (vi ${report.clips.vi}, zh ${report.clips.zh})`);
console.log(`Median s/unit: vi ${report.medianSecondsPerUnit.vi}, zh ${report.medianSecondsPerUnit.zh}`);
console.log('Summary:', JSON.stringify(report.summary));
if (report.asr) console.log('ASR:', JSON.stringify({ clips: report.asr.clips, medianCer: report.asr.medianCer, over30: report.asr.over30 }));
console.log(`Report: ${path.relative(ROOT, REPORT_PATH)}`);
const blocking = audioIssues.filter(i => i.blocking).length
  + report.summary.viDoubleTone + report.summary.zhSimplified + report.summary.zhMainlandTerms;
if (blocking) {
  console.error(`FAIL: ${blocking} blocking issue(s)`);
  process.exitCode = 1;
} else {
  console.log('PASS: audio format, pace, loudness, mapping and spoken-text checks');
}
