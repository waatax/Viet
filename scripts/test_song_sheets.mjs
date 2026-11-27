/**
 * Automated verification suite for all 24 standalone bilingual song HTML & A4 PDF sheets
 * and the 24-song index page in public/songs/.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { VIETNAMESE_SONGS } from '../src/data/vietnameseSongs.js';
import { segmentLyricLine } from './song_lyrics_lexicon.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SONGS_DIR = path.join(ROOT, 'public', 'songs');
const DICT = JSON.parse(fs.readFileSync(path.join(ROOT, 'public', 'data', 'vi-zh-dict.json'), 'utf8'));

const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];
const FORBIDDEN_GLOSS = ['總監', '光寶', '美金', '店員', '踆烏', '肉頭', '淫蕩', '野蠻', '去世', '屁股', '常見詞：', '???'];

// 1. Verify index.html exists and links all 24 HTML and all 24 PDF files
const indexPath = path.join(SONGS_DIR, 'index.html');
assert.ok(fs.existsSync(indexPath), 'public/songs/index.html must exist');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

let totalPdfBytes = 0;
let totalPages = 0;
let totalPhrases = 0;
let totalWords = 0;

for (const song of VIETNAMESE_SONGS) {
  const htmlFile = `${song.id}.html`;
  const pdfFile = `${song.id}.pdf`;
  const htmlPath = path.join(SONGS_DIR, htmlFile);
  const pdfPath = path.join(SONGS_DIR, pdfFile);

  assert.ok(indexHtml.includes(htmlFile), `index.html must link to ${htmlFile}`);
  assert.ok(indexHtml.includes(pdfFile), `index.html must link to ${pdfFile}`);

  // 2. Verify standalone HTML file
  assert.ok(fs.existsSync(htmlPath), `Missing standalone HTML: ${htmlFile}`);
  const html = fs.readFileSync(htmlPath, 'utf8');
  assert.ok(html.includes(song.titleVi), `${htmlFile} must include Vietnamese title ${song.titleVi}`);
  assert.ok(html.includes(song.titleZh), `${htmlFile} must include Chinese title ${song.titleZh}`);
  assert.ok(html.includes('g-chip is-phrase'), `${htmlFile} must include Phrase (片語) annotations`);
  assert.ok(html.includes('g-chip is-word'), `${htmlFile} must include Word (單字) annotations`);
  assert.ok(html.includes(pdfFile), `${htmlFile} must include direct PDF download link`);
  assert.ok(html.includes('@page'), `${htmlFile} must include A4 print pagination CSS`);

  // Verify every single lyric line and gloss integrity for this song
  for (const sec of song.sections) {
    for (const line of sec.lines) {
      const { segments } = segmentLyricLine(line.vi, DICT);
      assert.ok(segments.length > 0, `Empty segmentation for "${line.vi}" in #${song.no}`);
      for (const seg of segments) {
        assert.ok(seg.zh && seg.zh.trim().length > 0, `Missing gloss for "${seg.text}" in #${song.no} "${line.vi}"`);
        assert.ok(seg.zh.length <= 16, `Gloss too long (${seg.zh.length}) for "${seg.text}": ${seg.zh}`);
        const simpMatch = seg.zh.match(SIMPLIFIED);
        assert.ok(!simpMatch, `Simplified char "${simpMatch?.[0]}" in gloss "${seg.zh}" for "${seg.text}"`);
        for (const bad of MAINLAND) {
          assert.ok(!seg.zh.includes(bad), `Mainland term "${bad}" in gloss "${seg.zh}"`);
        }
        for (const bad of FORBIDDEN_GLOSS) {
          assert.ok(!seg.zh.includes(bad), `Corrupted gloss "${bad}" in "${seg.text}" => "${seg.zh}"`);
        }
        if (seg.kind === 'phrase') totalPhrases++;
        else if (seg.kind === 'word') totalWords++;
      }
    }
  }

  // Verify the rendered HTML itself contains no corrupted glosses or simplified chars in visible text
  for (const bad of FORBIDDEN_GLOSS) {
    assert.ok(!html.includes(bad), `${htmlFile} contains forbidden artifact "${bad}"`);
  }

  // 3. Verify standalone PDF file
  assert.ok(fs.existsSync(pdfPath), `Missing standalone PDF: ${pdfFile}`);
  const pdfBuf = fs.readFileSync(pdfPath);
  assert.ok(pdfBuf.subarray(0, 5).toString('ascii') === '%PDF-', `${pdfFile} must start with %PDF-`);
  assert.ok(pdfBuf.length > 50 * 1024, `${pdfFile} looks unexpectedly small (${pdfBuf.length} bytes)`);
  const pdfStr = pdfBuf.toString('latin1');
  const pages = (pdfStr.match(/\/Type\s*\/Page\b/g) || []).length;
  assert.ok(pages >= 2 && pages <= 15, `${pdfFile} page count out of expected bounds: ${pages}`);
  assert.ok(pdfStr.includes('%%EOF'), `${pdfFile} must end with %%EOF`);

  totalPdfBytes += pdfBuf.length;
  totalPages += pages;
}

console.log(
  `PASS test_song_sheets: Verified index.html + all 24 standalone HTML & 24 A4 PDF files (${totalPages} total pages, ${(
    totalPdfBytes /
    (1024 * 1024)
  ).toFixed(2)} MB, ${totalPhrases} phrase annotations, ${totalWords} word annotations, 0 missing/corrupted glosses)!`
);
