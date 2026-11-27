import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import {
  VIETNAMESE_SONGS,
  SONGS_YOUTUBE_BASE_URL,
  SONGS_YOUTUBE_VIDEO_ID,
  songYoutubeUrl,
  formatTimestamp,
  formatDuration
} from '../src/data/vietnameseSongs.js';

const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];

assert.equal(SONGS_YOUTUBE_VIDEO_ID, 'm7Wya6Z-QdM');
assert.equal(SONGS_YOUTUBE_BASE_URL, 'https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm');
assert.equal(songYoutubeUrl(0), 'https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm');
assert.equal(songYoutubeUrl(242), 'https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm&t=242');
assert.equal(VIETNAMESE_SONGS.length, 24, 'All 24 songs present');

let totalLines = 0;
let totalSections = 0;
let prevEnd = 0;

for (let i = 0; i < VIETNAMESE_SONGS.length; i++) {
  const song = VIETNAMESE_SONGS[i];
  assert.equal(song.no, i + 1, `Sequential song no #${i + 1}`);
  assert.ok(song.id && song.titleVi && song.titleZh && song.coverArtist && song.originalArtist);
  assert.equal(song.startSec, prevEnd, `Song #${song.no} startSec aligns with previous endSec`);
  assert.ok(song.startSec <= song.vocalStartSec && song.vocalStartSec <= song.endSec, `Song #${song.no} vocalStartSec within range`);
  assert.equal(song.durationSec, song.endSec - song.startSec);
  assert.equal(song.startTimestamp, formatTimestamp(song.startSec));
  assert.equal(song.endTimestamp, formatTimestamp(song.endSec));
  assert.ok(song.sections.length >= 4, `Song #${song.no} has structured sections`);
  assert.ok(Array.isArray(song.keyVocab) && song.keyVocab.length >= 4, `Song #${song.no} has keyVocab`);

  for (const text of [song.titleZh, song.summaryZh, song.mood, ...song.keyVocab.flatMap(v => [v.zh, v.note || ''])]) {
    const m = text.match(SIMPLIFIED);
    assert.ok(!m, `Song #${song.no} contains simplified char: ${m?.[0]} in ${text}`);
    for (const term of MAINLAND) {
      assert.ok(!text.includes(term), `Song #${song.no} contains mainland term: ${term}`);
    }
  }

  for (const sec of song.sections) {
    totalSections++;
    assert.ok(sec.label && sec.timestamp && Number.isInteger(sec.startSec));
    assert.ok(sec.lines.length > 0);
    for (const line of sec.lines) {
      totalLines++;
      assert.ok(line.vi.trim().length > 0, `Non-empty vi in song #${song.no}`);
      assert.ok(line.zh.trim().length > 0, `Non-empty zh in song #${song.no}`);
      assert.ok(Number.isInteger(line.sec));
      const m = line.zh.match(SIMPLIFIED);
      assert.ok(!m, `Song #${song.no} lyric contains simplified char: ${m?.[0]} in ${line.zh}`);
      for (const term of MAINLAND) {
        assert.ok(!line.zh.includes(term), `Song #${song.no} lyric contains mainland term: ${term}`);
      }
    }
  }
  prevEnd = song.endSec;
}
assert.equal(prevEnd, 5554, 'Ends at exact total video length 5554s');

// Render component & test siteSearch via esbuild + react-test-renderer
const memory = new Map();
globalThis.localStorage = { getItem: k => memory.get(k) ?? null, setItem: (k, v) => memory.set(k, v) };
fs.mkdirSync('scripts/cache', { recursive: true });
const outfile = path.resolve('scripts/cache/songs-test.mjs');
await build({
  stdin: {
    contents: `export { default as VietnameseSongsModule } from './src/components/VietnameseSongsModule.jsx'; export { audioEngine } from './src/services/audioEngine.js'; export { searchSite } from './src/services/siteSearch.js';`,
    resolveDir: process.cwd(),
    loader: 'js'
  },
  outfile,
  bundle: true,
  platform: 'node',
  format: 'esm',
  external: ['react', 'react-dom', 'react/jsx-runtime', 'lucide-react'],
  loader: { '.css': 'empty' },
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
  logLevel: 'error'
});

const { VietnameseSongsModule, audioEngine, searchSite } = await import(pathToFileURL(outfile).href);

// Verify global site search finds songs
const hits1 = searchSite('Từng Là');
assert.ok(hits1.some(h => h.moduleId === 'songs' && h.destination?.songId === 'song-01-tung-la'), 'siteSearch finds Từng Là');
const hits2 = searchSite('黃昏');
assert.ok(hits2.some(h => h.moduleId === 'songs' && h.destination?.songId === 'song-13-phai-dau-cuoc-tinh'), 'siteSearch finds Phai Dấu Cuộc Tình via 黃昏');
const hits3 = searchSite('越南歌曲');
assert.ok(hits3.some(h => h.moduleId === 'songs'), 'siteSearch finds 越南歌曲');
let spoken = [];
audioEngine.speak = (text, opts) => spoken.push([text, opts]);
audioEngine.stop = () => {};

let xpEarned = 0;
let renderer;
act(() => {
  renderer = TestRenderer.create(
    React.createElement(VietnameseSongsModule, {
      selectedAccent: 'north',
      updateUserStats: (n) => { xpEarned += n; }
    })
  );
});

const jsonStr = JSON.stringify(renderer.toJSON());
assert.ok(jsonStr.includes('https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm'), 'Main YouTube URL rendered');
assert.ok(jsonStr.includes('https://youtu.be/m7Wya6Z-QdM?si=M96hnlOOjHQ3EjAm&t=242'), 'Exact second timestamp link rendered for Song #2');
assert.ok(jsonStr.includes('Từng Là'), 'Default song #1 rendered');
assert.ok(jsonStr.includes('Rời Bỏ'), 'Song #24 listed in master table & sidebar');
assert.ok(jsonStr.includes('/Viet/songs/index.html'), '24-song printable index link rendered');
assert.ok(jsonStr.includes('/Viet/songs/song-01-tung-la.html'), 'Song #1 standalone HTML link rendered');
assert.ok(jsonStr.includes('/Viet/songs/song-01-tung-la.pdf'), 'Song #1 standalone PDF download link rendered');
assert.ok(jsonStr.includes('/Viet/songs/song-24-roi-bo.pdf'), 'Song #24 standalone PDF download link rendered');

// Click into song #13 (Phai Dấu Cuộc Tình) and test TTS + XP
const textOf = node => (node.children || []).map(c => typeof c === 'string' ? c : textOf(c)).join('');
const song13Btn = renderer.root.findAllByType('button').find(b => textOf(b).includes('Phai Dấu Cuộc Tình'));
assert.ok(song13Btn, 'Song #13 button exists');
act(() => song13Btn.props.onClick());
assert.ok(JSON.stringify(renderer.toJSON()).includes('2768'), 'Song #13 exact startSec 2768 rendered');

const markBtn = renderer.root.findAllByType('button').find(b => textOf(b).includes('標記已學'));
assert.ok(markBtn, 'Mark listened button exists');
act(() => markBtn.props.onClick());
assert.equal(xpEarned, 10, 'Marking song listened grants +10 XP');

const speakBtn = renderer.root.findAllByType('button').find(b => b.props['aria-label']?.startsWith('朗讀越文歌詞：'));
assert.ok(speakBtn, 'Line TTS speak button exists');
act(() => speakBtn.props.onClick());
assert.equal(spoken.length, 1, 'TTS speak invoked');

act(() => renderer.unmount());
delete globalThis.localStorage;

console.log(`PASS: All 24 Vietnamese songs (${totalSections} sections, ${totalLines} bilingual lines), exact timestamps, YouTube links, site search, TTS & UI interactions verified! Duration format check: ${formatDuration(242)}`);
