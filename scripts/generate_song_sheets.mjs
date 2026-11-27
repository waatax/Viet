/**
 * Generates 24 independent, publication-grade bilingual Vietnamese song lyric sheets
 * (standalone HTML + A4 PDF) and a 24-song printable/downloadable index page in public/songs/.
 *
 * Each song sheet includes:
 * - Complete song metadata, exact YouTube start/vocal/end timestamps & section map
 * - Full Vietnamese lyrics with inline visual highlighting of multi-word phrases
 * - Full Traditional Chinese sentence-by-sentence translations
 * - Per-line interlinear Word (單字) & Phrase (片語) annotation tiles with POS, 6-tone color dots, and Han-Viet cues
 * - Curated Key Vocabulary explanations + Song Phrase Quick Reference table
 * - Print-optimized A4 pagination (@page running headers/footers, break-inside: avoid)
 *
 * Usage:
 *   node scripts/generate_song_sheets.mjs            # Generate all 24 HTML + 24 PDF + index.html
 *   node scripts/generate_song_sheets.mjs --html-only
 *   node scripts/generate_song_sheets.mjs --only=1,3 # Generate only specific song numbers
 */

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  VIETNAMESE_SONGS,
  SONGS_YOUTUBE_META,
  SONGS_YOUTUBE_BASE_URL,
  songYoutubeUrl,
  formatTimestamp,
  formatDuration
} from '../src/data/vietnameseSongs.js';
import { TONE_META, analyzeVietnameseTones } from '../src/services/vietWordLookupService.js';
import { segmentLyricLine } from './song_lyrics_lexicon.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'songs');
const DICT_PATH = path.join(ROOT, 'public', 'data', 'vi-zh-dict.json');

const POS_SHORT_MAP = {
  '名詞': '名',
  '動詞': '動',
  '形容詞': '形',
  '副詞': '副',
  '代名詞': '代',
  '介詞': '介',
  '連詞': '連',
  '助詞': '助',
  '限定詞': '限',
  '量詞': '量',
  '數詞': '數',
  '感嘆詞': '嘆',
  '片語': '片語',
  '成語': '成語',
  '專有名詞': '專名',
  '英文片語': 'EN'
};

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function findChromeBinary() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser'
  ].filter(Boolean);

  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('Could not find Chrome or Edge binary for PDF generation.');
}

function renderToneDots(tones) {
  if (!tones || tones.length === 0) return '';
  return `<span class="g-tones" aria-label="${esc(tones.map((t) => t.name).join('・'))}">${tones
    .map(
      (t) =>
        `<span class="g-dot" style="background:${t.color}" title="${esc(t.syllable)}：${esc(t.name)}"></span>`
    )
    .join('')}</span>`;
}

function renderInlineLyric(inlineRuns) {
  return inlineRuns
    .map((run) => {
      if (run.kind === 'phrase') {
        return `<span class="vi-phrase">${esc(run.text)}</span>`;
      }
      if (run.kind === 'en') {
        return `<span class="vi-en">${esc(run.text)}</span>`;
      }
      return esc(run.text);
    })
    .join('');
}

function renderGlossChip(seg) {
  const posShort = POS_SHORT_MAP[seg.pos] || seg.pos || '';
  if (seg.kind === 'en') {
    return `<span class="g-chip is-en"><span class="g-top"><span class="g-tag is-en">英文</span><span class="g-vi">${esc(seg.text)}</span></span><span class="g-zh">${esc(seg.zh)}</span></span>`;
  }
  if (seg.kind === 'phrase') {
    const hvHtml = seg.hanViet ? `<span class="g-hv">漢·${esc(seg.hanViet)}</span>` : '';
    const posHtml = posShort && posShort !== '片語' ? `<span class="g-pos">${esc(posShort)}</span>` : '';
    return `<span class="g-chip is-phrase"><span class="g-top"><span class="g-tag is-phrase">片語</span><span class="g-vi">${esc(seg.text)}</span>${renderToneDots(seg.tones)}${posHtml}</span><span class="g-zh">${esc(seg.zh)}${hvHtml}</span></span>`;
  }
  const hvHtml = seg.hanViet ? `<span class="g-hv">漢·${esc(seg.hanViet)}</span>` : '';
  const posHtml = posShort ? `<span class="g-pos">${esc(posShort)}</span>` : '';
  return `<span class="g-chip is-word"><span class="g-top">${renderToneDots(seg.tones)}<span class="g-vi">${esc(seg.text)}</span>${posHtml}</span><span class="g-zh">${esc(seg.zh)}${hvHtml}</span></span>`;
}

function analyzeSong(song, dict) {
  let lineCount = 0;
  let phraseCount = 0;
  let wordCount = 0;
  let enCount = 0;
  const uniquePhrases = new Map();
  const uniqueWords = new Set();

  const sections = song.sections.map((sec) => {
    const lines = sec.lines.map((line) => {
      lineCount++;
      const { segments, inlineRuns } = segmentLyricLine(line.vi, dict);
      for (const seg of segments) {
        const key = seg.text.normalize('NFC').toLowerCase();
        if (seg.kind === 'phrase') {
          phraseCount++;
          const prev = uniquePhrases.get(key);
          if (prev) {
            prev.count++;
          } else {
            uniquePhrases.set(key, {
              vi: seg.text.toLowerCase() === seg.text ? seg.text : seg.text,
              display: key,
              zh: seg.zh,
              pos: seg.pos,
              hanViet: seg.hanViet,
              tones: seg.tones,
              count: 1
            });
          }
        } else if (seg.kind === 'en') {
          enCount++;
        } else {
          wordCount++;
          uniqueWords.add(key);
        }
      }
      return { ...line, segments, inlineRuns };
    });
    return { ...sec, lines };
  });

  // Collect high-value phrases not already in song.keyVocab for the Quick Phrase Summary table
  const keyVocabSet = new Set(
    (song.keyVocab || []).map((v) => v.vi.normalize('NFC').toLowerCase().trim())
  );
  const extraPhrases = [...uniquePhrases.values()]
    .filter((p) => !keyVocabSet.has(p.display))
    .sort((a, b) => b.count - a.count || a.display.localeCompare(b.display, 'vi'))
    .slice(0, 24);

  return {
    song,
    sections,
    stats: {
      sectionCount: song.sections.length,
      lineCount,
      phraseCount,
      uniquePhraseCount: uniquePhrases.size,
      wordCount,
      uniqueWordCount: uniqueWords.size,
      enCount
    },
    extraPhrases
  };
}

function buildSongHtml(analyzed, prevSong, nextSong) {
  const { song, sections, stats, extraPhrases } = analyzed;
  const trackNo = String(song.no).padStart(2, '0');
  const ytUrl = songYoutubeUrl(song.startSec);
  const shortYt = `youtu.be/${SONGS_YOUTUBE_META.videoId}${song.startSec > 0 ? `?t=${song.startSec}` : ''}`;
  const pdfFile = `${song.id}.pdf`;

  const toneLegendHtml = Object.values(TONE_META)
    .map(
      (t) =>
        `<span class="legend-tone"><span class="g-dot" style="background:${t.color}"></span>${esc(t.name)}</span>`
    )
    .join('');

  const sectionsHtml = sections
    .map(
      (sec, idx) => `
      <section class="lyric-section" id="sec-${idx + 1}">
        <div class="sec-head">
          <div class="sec-title">
            <span class="sec-index">${String(idx + 1).padStart(2, '0')}</span>
            <h2>${esc(sec.label)}</h2>
          </div>
          <a class="sec-time" href="${esc(songYoutubeUrl(sec.startSec))}" target="_blank" rel="noopener noreferrer">
            ${esc(sec.timestamp)} · 第 ${sec.startSec} 秒
          </a>
        </div>
        <div class="sec-lines">
          ${sec.lines
            .map(
              (line) => `
            <article class="lyric-card">
              <div class="lyric-main">
                <a class="line-ts" href="${esc(songYoutubeUrl(line.sec))}" target="_blank" rel="noopener noreferrer" title="YouTube 第 ${line.sec} 秒">
                  <span>${esc(formatTimestamp(line.sec))}</span>
                  <small>${line.sec}s</small>
                </a>
                <div class="line-body">
                  <div class="line-vi" lang="vi">${renderInlineLyric(line.inlineRuns)}</div>
                  <div class="line-zh"><span class="zh-mark">譯</span><span>${esc(line.zh)}</span></div>
                </div>
              </div>
              <div class="gloss-strip" aria-label="單字與片語標示">
                ${line.segments.map(renderGlossChip).join('')}
              </div>
            </article>`
            )
            .join('')}
        </div>
      </section>`
    )
    .join('\n');

  const keyVocabHtml = (song.keyVocab || [])
    .map((v) => {
      const tones = analyzeVietnameseTones(v.vi);
      return `
        <div class="vocab-card">
          <div class="vocab-top">
            <span class="vocab-vi" lang="vi">${esc(v.vi)}</span>
            ${renderToneDots(tones)}
            <span class="vocab-zh">${esc(v.zh)}</span>
          </div>
          ${v.note ? `<p class="vocab-note">${esc(v.note)}</p>` : ''}
        </div>`;
    })
    .join('');

  const phraseRefHtml =
    extraPhrases.length > 0
      ? `
      <section class="summary-block phrase-ref-block">
        <div class="summary-head">
          <h3>本曲常見片語速查表（共 ${extraPhrases.length} 組）</h3>
          <span>依本曲出現頻率排序，便於聽前預習與複習</span>
        </div>
        <div class="phrase-ref-grid">
          ${extraPhrases
            .map(
              (p) => `
            <div class="pref-item">
              <div class="pref-vi-row">
                <span class="pref-vi" lang="vi">${esc(p.display)}</span>
                ${renderToneDots(p.tones)}
              </div>
              <div class="pref-zh-row">
                <span class="pref-zh">${esc(p.zh)}</span>
                ${p.hanViet ? `<span class="g-hv">漢·${esc(p.hanViet)}</span>` : ''}
                ${p.count > 1 ? `<span class="pref-cnt">×${p.count}</span>` : ''}
              </div>
            </div>`
            )
            .join('')}
        </div>
      </section>`
      : '';

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>#${trackNo} ${esc(song.titleVi)}（${esc(song.titleZh)}）— 越中雙語歌詞與單字片語精讀講義 | 越語學習通</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Noto+Sans+TC:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --jade: #0f766e;
      --jade-dark: #115e59;
      --jade-soft: #f0fdfa;
      --jade-border: #99f6e4;
      --jade-line: #2dd4bf;
      --rose: #be123c;
      --rose-soft: #fff1f2;
      --amber: #92400e;
      --amber-soft: #fef3c7;
      --indigo: #3730a3;
      --indigo-soft: #eef2ff;
      --indigo-border: #c7d2fe;
      --ink: #0f172a;
      --ink-2: #334155;
      --muted: #64748b;
      --line: #e2e8f0;
      --line-soft: #eef2f6;
      --surface: #ffffff;
      --paper: #f8fafc;
      --font-vi: "Be Vietnam Pro", "Segoe UI", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      --font-zh: "Noto Sans TC", "Microsoft JhengHei", "PingFang TC", sans-serif;
      --font-mono: "Noto Sans Mono", "Cascadia Mono", Consolas, ui-monospace, monospace;
    }

    @page {
      size: A4 portrait;
      margin: 13mm 11.5mm 14mm 11.5mm;
      @top-left {
        content: "#${trackNo} ${song.titleVi.replace(/"/g, '\\"')}（${song.titleZh.replace(/"/g, '\\"')}）";
        font-family: "Be Vietnam Pro", "Microsoft JhengHei", "PingFang TC", sans-serif;
        font-size: 7.5pt;
        font-weight: 600;
        color: #64748b;
        border-bottom: 0.5pt solid #e2e8f0;
        padding-bottom: 3pt;
        margin-bottom: 4pt;
      }
      @top-right {
        content: "越語學習通 · 雙語歌詞精讀講義";
        font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
        font-size: 7.5pt;
        color: #94a3b8;
        border-bottom: 0.5pt solid #e2e8f0;
        padding-bottom: 3pt;
        margin-bottom: 4pt;
      }
      @bottom-left {
        content: "YouTube 原曲：${shortYt} · ${song.coverArtist.replace(/"/g, '\\"')}";
        font-family: "Be Vietnam Pro", "Microsoft JhengHei", "PingFang TC", sans-serif;
        font-size: 7.2pt;
        color: #94a3b8;
        border-top: 0.5pt solid #e2e8f0;
        padding-top: 3pt;
      }
      @bottom-right {
        content: "第 " counter(page) " / " counter(pages) " 頁";
        font-family: "Microsoft JhengHei", "PingFang TC", sans-serif;
        font-size: 7.5pt;
        font-weight: 600;
        color: #64748b;
        border-top: 0.5pt solid #e2e8f0;
        padding-top: 3pt;
      }
    }

    @page :first {
      @top-left { content: none; border: none; }
      @top-right { content: none; border: none; }
    }

    * { box-sizing: border-box; }

    html, body {
      margin: 0;
      padding: 0;
      background: #eef2f6;
      color: var(--ink);
      font-family: var(--font-zh);
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* Screen-only interactive top toolbar */
    .screen-bar {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(255, 255, 255, 0.94);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid #dbe2ea;
      padding: 10px 18px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
    }

    .bar-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 7px;
    }

    .bar-btn {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 6px 11px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: var(--ink);
      font-family: var(--font-zh);
      font-size: 13px;
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.14s ease;
    }

    .bar-btn:hover {
      border-color: var(--jade);
      color: var(--jade);
      background: var(--jade-soft);
    }

    .bar-btn.is-primary {
      background: linear-gradient(135deg, #0f766e, #0d9488);
      border-color: #0f766e;
      color: #ffffff;
      box-shadow: 0 2px 8px rgba(15, 118, 110, 0.25);
    }

    .bar-btn.is-primary:hover {
      filter: brightness(1.06);
      color: #ffffff;
    }

    .bar-btn.is-rose {
      background: linear-gradient(135deg, #be123c, #e11d48);
      border-color: #be123c;
      color: #ffffff;
      box-shadow: 0 2px 8px rgba(190, 18, 60, 0.24);
    }

    .bar-btn.is-rose:hover {
      filter: brightness(1.06);
      color: #ffffff;
    }

    .bar-btn.is-active {
      background: var(--jade-soft);
      border-color: var(--jade);
      color: var(--jade-dark);
    }

    .bar-btn.is-disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    /* Main Sheet Container (A4 proportions on screen) */
    .sheet {
      max-width: 210mm;
      margin: 18px auto 36px;
      background: var(--surface);
      padding: 13mm 12mm 16mm;
      border-radius: 12px;
      box-shadow: 0 10px 36px rgba(15, 23, 42, 0.1);
    }

    /* Editorial Cover Header */
    .song-header {
      border: 1px solid #d5e5e2;
      border-top: 4px solid var(--jade);
      border-radius: 10px;
      background: linear-gradient(180deg, #f5fbfa 0%, #ffffff 52%);
      padding: 13px 15px 11px;
      margin-bottom: 12px;
      break-inside: avoid;
    }

    .header-eyebrow {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-bottom: 6px;
    }

    .eyebrow-left {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }

    .track-pill {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--jade);
      color: #ffffff;
      font-family: var(--font-mono);
      font-size: 8pt;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .mood-pill {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: 999px;
      background: var(--amber-soft);
      color: var(--amber);
      font-size: 7.8pt;
      font-weight: 700;
    }

    .brand-tag {
      font-size: 7.8pt;
      font-weight: 600;
      color: var(--muted);
    }

    .title-row {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 4px 12px;
      margin-bottom: 6px;
    }

    .title-vi {
      margin: 0;
      font-family: var(--font-vi);
      font-size: 19pt;
      font-weight: 800;
      line-height: 1.22;
      letter-spacing: -0.015em;
      color: var(--ink);
    }

    .title-zh {
      font-size: 12.5pt;
      font-weight: 700;
      color: var(--jade);
    }

    .song-summary {
      margin: 0 0 9px;
      font-size: 8.4pt;
      line-height: 1.55;
      color: var(--ink-2);
    }

    .meta-grid {
      display: grid;
      grid-template-columns: 1fr 1.12fr 0.94fr 1.14fr;
      gap: 6px;
      margin-bottom: 9px;
    }

    .meta-box {
      background: #ffffff;
      border: 1px solid var(--line);
      border-radius: 7px;
      padding: 5px 8px;
    }

    .meta-label {
      display: block;
      font-size: 6.8pt;
      font-weight: 700;
      color: var(--muted);
      margin-bottom: 1px;
    }

    .meta-val {
      display: block;
      font-family: var(--font-vi);
      font-size: 8.2pt;
      font-weight: 700;
      color: var(--ink);
      line-height: 1.3;
    }

    .meta-sub {
      display: block;
      font-family: var(--font-mono);
      font-size: 6.8pt;
      color: var(--jade);
      font-weight: 600;
      margin-top: 1px;
    }

    .meta-link {
      display: block;
      color: var(--rose);
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: 6.7pt;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Legend strip */
    .legend-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 6px 12px;
      padding: 6px 9px;
      border-radius: 7px;
      background: var(--paper);
      border: 1px dashed #cbd5e1;
      font-size: 7.2pt;
      color: var(--ink-2);
    }

    .legend-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
    }

    .legend-sample-phrase {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 1px 6px;
      border-radius: 4px;
      background: var(--jade-soft);
      border: 1px solid var(--jade-border);
      border-left: 2.5px solid var(--jade);
      color: var(--jade-dark);
      font-weight: 700;
    }

    .legend-sample-word {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      padding: 1px 6px;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      color: var(--ink);
      font-weight: 600;
    }

    .legend-tone {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-weight: 600;
      color: var(--ink-2);
    }

    /* Lyric sections */
    .lyric-section {
      margin-bottom: 11px;
    }

    .sec-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      padding: 5px 10px;
      margin-bottom: 6px;
      border-radius: 7px;
      background: linear-gradient(90deg, #e6f7f5 0%, #f8fafc 100%);
      border: 1px solid #ccebe6;
      border-left: 3.5px solid var(--jade);
      break-after: avoid;
      page-break-after: avoid;
    }

    .sec-title {
      display: flex;
      align-items: center;
      gap: 7px;
    }

    .sec-index {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 5px;
      background: var(--jade);
      color: #ffffff;
      font-family: var(--font-mono);
      font-size: 7.2pt;
      font-weight: 700;
    }

    .sec-head h2 {
      margin: 0;
      font-size: 9.4pt;
      font-weight: 800;
      color: var(--jade-dark);
    }

    .sec-time {
      font-family: var(--font-mono);
      font-size: 7.5pt;
      font-weight: 700;
      color: var(--muted);
      text-decoration: none;
    }

    .sec-lines {
      display: flex;
      flex-direction: column;
      gap: 5.5px;
    }

    /* Individual lyric line card */
    .lyric-card {
      border: 1px solid var(--line);
      border-radius: 7px;
      background: #ffffff;
      padding: 6px 9px 6.5px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .lyric-main {
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    .line-ts {
      flex: 0 0 auto;
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      min-width: 46px;
      padding: 2px 4px;
      border-radius: 5px;
      background: var(--paper);
      border: 1px solid var(--line);
      color: var(--muted);
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: 6.7pt;
      font-weight: 700;
      line-height: 1.25;
      margin-top: 1px;
    }

    .line-ts small {
      font-size: 6pt;
      color: #94a3b8;
    }

    .line-body {
      flex: 1 1 auto;
      min-width: 0;
    }

    .line-vi {
      font-family: var(--font-vi);
      font-size: 10.6pt;
      font-weight: 700;
      line-height: 1.48;
      color: var(--ink);
      margin-bottom: 2px;
    }

    .vi-phrase {
      background: rgba(20, 184, 166, 0.08);
      border-bottom: 1.5px solid var(--jade-line);
      border-radius: 3px;
      padding: 0 2px;
    }

    .vi-en {
      background: rgba(99, 102, 241, 0.08);
      border-bottom: 1.5px dashed #818cf8;
      border-radius: 3px;
      padding: 0 2px;
    }

    .line-zh {
      display: flex;
      align-items: baseline;
      gap: 5px;
      font-size: 8.8pt;
      font-weight: 500;
      line-height: 1.45;
      color: var(--ink-2);
    }

    .zh-mark {
      flex: 0 0 auto;
      display: inline-block;
      padding: 0 3.5px;
      border-radius: 3px;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      color: #475569;
      font-size: 6.4pt;
      font-weight: 700;
      line-height: 1.4;
    }

    /* Word & Phrase Interlinear Gloss Strip */
    .gloss-strip {
      display: flex;
      flex-wrap: wrap;
      gap: 3.5px 4.5px;
      margin-top: 5.5px;
      padding-top: 5px;
      border-top: 1px dashed #e2e8f0;
    }

    .g-chip {
      display: inline-flex;
      flex-direction: column;
      gap: 1px;
      padding: 2.5px 5.5px 2.5px 5.5px;
      border-radius: 5px;
      line-height: 1.25;
      max-width: 100%;
    }

    .g-chip.is-phrase {
      background: var(--jade-soft);
      border: 1px solid var(--jade-border);
      border-left: 2.5px solid var(--jade);
    }

    .g-chip.is-word {
      background: var(--paper);
      border: 1px solid #e2e8f0;
    }

    .g-chip.is-en {
      background: var(--indigo-soft);
      border: 1px solid var(--indigo-border);
      border-left: 2.5px solid var(--indigo);
    }

    .g-top {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      flex-wrap: nowrap;
    }

    .g-tag {
      display: inline-block;
      padding: 0 3px;
      border-radius: 3px;
      font-size: 5.8pt;
      font-weight: 700;
      line-height: 1.35;
      letter-spacing: 0.02em;
    }

    .g-tag.is-phrase {
      background: var(--jade);
      color: #ffffff;
    }

    .g-tag.is-en {
      background: var(--indigo);
      color: #ffffff;
    }

    .g-vi {
      font-family: var(--font-vi);
      font-size: 7.8pt;
      font-weight: 700;
      color: var(--ink);
    }

    .g-chip.is-phrase .g-vi {
      color: var(--jade-dark);
    }

    .g-chip.is-en .g-vi {
      color: var(--indigo);
    }

    .g-pos {
      font-size: 5.9pt;
      font-weight: 600;
      color: #64748b;
      background: rgba(148, 163, 184, 0.14);
      padding: 0 3px;
      border-radius: 3px;
      line-height: 1.35;
    }

    .g-tones {
      display: inline-flex;
      align-items: center;
      gap: 2px;
    }

    .g-dot {
      display: inline-block;
      width: 4.5px;
      height: 4.5px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .g-zh {
      font-size: 7.2pt;
      font-weight: 500;
      color: var(--ink-2);
      display: inline-flex;
      align-items: center;
      gap: 3px;
      flex-wrap: wrap;
    }

    .g-chip.is-phrase .g-zh {
      color: var(--ink);
      font-weight: 600;
    }

    .g-hv {
      font-size: 6pt;
      font-weight: 700;
      color: var(--amber);
      background: var(--amber-soft);
      padding: 0 3px;
      border-radius: 3px;
      line-height: 1.35;
    }

    /* End-of-song Key Vocabulary & Phrase Reference */
    .summary-block {
      margin-top: 12px;
      border: 1px solid #d5e5e2;
      border-radius: 9px;
      background: #ffffff;
      padding: 10px 12px;
    }

    .summary-head {
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 6px;
      padding-bottom: 6px;
      margin-bottom: 8px;
      border-bottom: 1.5px solid var(--jade-border);
      break-after: avoid;
    }

    .summary-head h3 {
      margin: 0;
      font-size: 9.8pt;
      font-weight: 800;
      color: var(--jade-dark);
    }

    .summary-head span {
      font-size: 7.3pt;
      color: var(--muted);
    }

    .vocab-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 7px;
    }

    .vocab-card {
      padding: 7px 9px;
      border-radius: 7px;
      background: var(--paper);
      border: 1px solid var(--line);
      border-left: 3px solid var(--jade);
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .vocab-top {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 5px;
      margin-bottom: 3px;
    }

    .vocab-vi {
      font-family: var(--font-vi);
      font-size: 9.2pt;
      font-weight: 800;
      color: var(--jade-dark);
    }

    .vocab-zh {
      font-size: 8.6pt;
      font-weight: 700;
      color: var(--ink);
    }

    .vocab-note {
      margin: 0;
      font-size: 7.5pt;
      line-height: 1.48;
      color: var(--ink-2);
    }

    .phrase-ref-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 5px 7px;
    }

    .pref-item {
      padding: 4.5px 7px;
      border-radius: 6px;
      background: var(--jade-soft);
      border: 1px solid #d5f3ee;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .pref-vi-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
    }

    .pref-vi {
      font-family: var(--font-vi);
      font-size: 8pt;
      font-weight: 700;
      color: var(--jade-dark);
    }

    .pref-zh-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 1px;
    }

    .pref-zh {
      font-size: 7.3pt;
      color: var(--ink);
      font-weight: 500;
    }

    .pref-cnt {
      margin-left: auto;
      font-family: var(--font-mono);
      font-size: 6.4pt;
      color: var(--muted);
      font-weight: 700;
    }

    .sheet-colophon {
      margin-top: 12px;
      padding-top: 7px;
      border-top: 1px solid var(--line);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      font-size: 7pt;
      color: var(--muted);
    }

    /* Screen interactive display toggles */
    body.hide-words .g-chip.is-word { display: none; }
    body.hide-gloss .gloss-strip { display: none; }
    body.hide-tones .g-tones { display: none; }
    body.hide-ts .line-ts { display: none; }

    @media print {
      :root {
        /* Use static TrueType fonts in print so Chromium embeds compact, searchable CJK+Viet subsets instead of Type3 paths */
        --font-vi: "Be Vietnam Pro", "Segoe UI", "Microsoft JhengHei", "PingFang TC", sans-serif;
        --font-zh: "Microsoft JhengHei", "PingFang TC", "Hiragino Sans CNS", sans-serif;
        --font-mono: "Consolas", "Noto Sans Mono", ui-monospace, monospace;
      }
      html, body {
        background: #ffffff !important;
        font-family: var(--font-zh) !important;
      }
      .no-print, .screen-bar {
        display: none !important;
      }
      .sheet {
        max-width: none;
        margin: 0;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
      }
      a { color: inherit; }
    }

    @media screen and (max-width: 720px) {
      .sheet {
        margin: 8px;
        padding: 14px 12px;
      }
      .meta-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .vocab-grid, .phrase-ref-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <nav class="screen-bar no-print" aria-label="歌詞講義列印與導覽列">
    <div class="bar-group">
      <a class="bar-btn" href="../#/songs">← 返回越語學習通</a>
      <a class="bar-btn" href="./index.html">☰ 24 首歌詞總覽</a>
      <a class="bar-btn ${prevSong ? '' : 'is-disabled'}" href="${prevSong ? `./${prevSong.id}.html` : '#'}">◀ 上一首</a>
      <a class="bar-btn ${nextSong ? '' : 'is-disabled'}" href="${nextSong ? `./${nextSong.id}.html` : '#'}">下一首 ▶</a>
    </div>
    <div class="bar-group">
      <button type="button" class="bar-btn is-active" id="btn-mode-all">單字＋片語</button>
      <button type="button" class="bar-btn" id="btn-mode-phrase">僅看片語</button>
      <button type="button" class="bar-btn is-active" id="btn-tones">聲調色點</button>
      <button type="button" class="bar-btn is-active" id="btn-ts">逐句秒數</button>
      <a class="bar-btn is-rose" href="./${esc(pdfFile)}" download="${esc(pdfFile)}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>下載本首 PDF</a>
      <button type="button" class="bar-btn is-primary" onclick="window.print()"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>列印 / 另存 PDF</button>
    </div>
  </nav>

  <main class="sheet">
    <header class="song-header">
      <div class="header-eyebrow">
        <div class="eyebrow-left">
          <span class="track-pill">TRACK ${trackNo} / 24</span>
          <span class="mood-pill">${esc(song.mood)}</span>
        </div>
        <span class="brand-tag">越語學習通 · 越南抒情金曲雙語逐詞講義</span>
      </div>

      <div class="title-row">
        <h1 class="title-vi" lang="vi">${esc(song.titleVi)}</h1>
        <span class="title-zh">${esc(song.titleZh)}</span>
      </div>

      <p class="song-summary">${esc(song.summaryZh)}</p>

      <div class="meta-grid">
        <div class="meta-box">
          <span class="meta-label">翻唱 / 原唱</span>
          <span class="meta-val">${esc(song.coverArtist)}</span>
          <span class="meta-sub">原唱：${esc(song.originalArtist)}</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">曲目時間軸（曲長 ${esc(formatDuration(song.durationSec))}）</span>
          <span class="meta-val">${esc(song.startTimestamp)} – ${esc(song.endTimestamp)}</span>
          <span class="meta-sub">起 ${song.startSec}s · 人聲 ${formatTimestamp(song.vocalStartSec)} (${song.vocalStartSec}s)</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">歌詞與詞彙標示統計</span>
          <span class="meta-val">${stats.sectionCount} 段 · ${stats.lineCount} 句雙語</span>
          <span class="meta-sub">${stats.uniquePhraseCount} 組片語 · ${stats.uniqueWordCount} 個單字</span>
        </div>
        <div class="meta-box">
          <span class="meta-label">YouTube 原影片直達</span>
          <a class="meta-link" href="${esc(ytUrl)}" target="_blank" rel="noopener noreferrer">${esc(shortYt)}</a>
          <span class="meta-sub">合輯：${esc(SONGS_YOUTUBE_META.channel)}</span>
        </div>
      </div>

      <div class="legend-bar">
        <div class="legend-group">
          <strong>標示圖例：</strong>
          <span class="legend-sample-phrase">片語／複合詞（句中附綠底線）</span>
          <span class="legend-sample-word">單字</span>
          <span class="g-hv">漢·漢越同源字</span>
        </div>
        <div class="legend-group">
          <strong>聲調色點：</strong>
          ${toneLegendHtml}
        </div>
      </div>
    </header>

    ${sectionsHtml}

    <section class="summary-block">
      <div class="summary-head">
        <h3>本曲精選核心詞彙與句型精講</h3>
        <span>共 ${(song.keyVocab || []).length} 組核心詞彙</span>
      </div>
      <div class="vocab-grid">
        ${keyVocabHtml}
      </div>
    </section>

    ${phraseRefHtml}

    <footer class="sheet-colophon">
      <span>越語學習通 (Chào Việt Nam!) · 第 ${trackNo} 首獨立歌詞講義：${esc(song.titleVi)}（${esc(song.titleZh)}）</span>
      <span>原影片：${esc(SONGS_YOUTUBE_BASE_URL)}</span>
    </footer>
  </main>

  <script>
    (function () {
      var btnAll = document.getElementById('btn-mode-all');
      var btnPhrase = document.getElementById('btn-mode-phrase');
      var btnTones = document.getElementById('btn-tones');
      var btnTs = document.getElementById('btn-ts');

      if (btnAll && btnPhrase) {
        btnAll.addEventListener('click', function () {
          document.body.classList.remove('hide-words', 'hide-gloss');
          btnAll.classList.add('is-active');
          btnPhrase.classList.remove('is-active');
        });
        btnPhrase.addEventListener('click', function () {
          document.body.classList.add('hide-words');
          document.body.classList.remove('hide-gloss');
          btnPhrase.classList.add('is-active');
          btnAll.classList.remove('is-active');
        });
      }
      if (btnTones) {
        btnTones.addEventListener('click', function () {
          var hidden = document.body.classList.toggle('hide-tones');
          btnTones.classList.toggle('is-active', !hidden);
        });
      }
      if (btnTs) {
        btnTs.addEventListener('click', function () {
          var hidden = document.body.classList.toggle('hide-ts');
          btnTs.classList.toggle('is-active', !hidden);
        });
      }
    })();
  </script>
</body>
</html>
`;
}

function buildIndexHtml(allAnalyzed) {
  const totalLines = allAnalyzed.reduce((s, a) => s + a.stats.lineCount, 0);
  const totalPhrases = allAnalyzed.reduce((s, a) => s + a.stats.phraseCount, 0);
  const totalWords = allAnalyzed.reduce((s, a) => s + a.stats.wordCount, 0);

  const cardsHtml = allAnalyzed
    .map(({ song, stats }) => {
      const no = String(song.no).padStart(2, '0');
      return `
      <article class="song-item" data-search="${esc(`${no} ${song.titleVi} ${song.titleZh} ${song.coverArtist} ${song.originalArtist} ${song.mood}`.toLowerCase())}">
        <div class="item-top">
          <span class="item-no">${no}</span>
          <div class="item-titles">
            <h2 lang="vi">${esc(song.titleVi)}</h2>
            <p class="item-zh">${esc(song.titleZh)}</p>
          </div>
          <span class="item-mood">${esc(song.mood)}</span>
        </div>
        <div class="item-meta">
          <span>翻唱：<strong>${esc(song.coverArtist)}</strong></span>
          <span>原唱：${esc(song.originalArtist)}</span>
          <span class="mono">${esc(song.startTimestamp)} (${song.startSec}s) · ${esc(formatDuration(song.durationSec))}</span>
        </div>
        <div class="item-stats">
          <span>${stats.sectionCount} 段落</span>
          <span>${stats.lineCount} 句雙語</span>
          <span class="stat-phrase">${stats.uniquePhraseCount} 組片語</span>
          <span>${stats.uniqueWordCount} 個單字</span>
        </div>
        <div class="item-actions">
          <a class="btn-html" href="./${esc(song.id)}.html"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>獨立列印頁 (HTML)</a>
          <a class="btn-pdf" href="./${esc(song.id)}.pdf" download="${esc(song.id)}.pdf"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>下載 PDF</a>
        </div>
      </article>`;
    })
    .join('\n');

  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>24 首越南歌曲・獨立雙語歌詞 PDF 與 HTML 列印總覽 | 越語學習通</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500;600;700;800&family=Noto+Sans+TC:wght@400;500;700;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --jade: #0f766e;
      --jade-dark: #115e59;
      --jade-soft: #f0fdfa;
      --jade-border: #99f6e4;
      --rose: #be123c;
      --ink: #0f172a;
      --ink-2: #334155;
      --muted: #64748b;
      --line: #e2e8f0;
      --bg: #f1f5f9;
      --font-vi: "Be Vietnam Pro", "Segoe UI", "Noto Sans TC", sans-serif;
      --font-zh: "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      --font-mono: "Noto Sans Mono", Consolas, ui-monospace, monospace;
    }

    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: var(--bg);
      color: var(--ink);
      font-family: var(--font-zh);
      -webkit-font-smoothing: antialiased;
    }

    .wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 20px 16px 48px;
    }

    .hero {
      background: linear-gradient(135deg, #ffffff 0%, #f0fdfa 55%, #fff1f2 100%);
      border: 1px solid #ccebe6;
      border-top: 4px solid var(--jade);
      border-radius: 16px;
      padding: 22px 24px;
      margin-bottom: 18px;
      box-shadow: 0 6px 24px rgba(15, 23, 42, 0.06);
    }

    .hero-top {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 14px;
    }

    .eyebrow {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 999px;
      background: var(--jade);
      color: #ffffff;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .hero h1 {
      margin: 0 0 8px;
      font-size: clamp(20px, 3vw, 28px);
      line-height: 1.3;
    }

    .hero p {
      margin: 0;
      color: var(--ink-2);
      font-size: 14px;
      line-height: 1.65;
      max-width: 680px;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .hero-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 9px 14px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      color: var(--ink);
      font-size: 13.5px;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
    }

    .hero-btn:hover {
      border-color: var(--jade);
      color: var(--jade);
    }

    .hero-btn.is-yt {
      background: #dc2626;
      border-color: #dc2626;
      color: #ffffff;
    }

    .hero-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .stat-pill {
      padding: 4px 10px;
      border-radius: 999px;
      background: #ffffff;
      border: 1px solid var(--line);
      font-size: 12.5px;
      font-weight: 700;
      color: var(--ink-2);
    }

    .search-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 16px;
    }

    .search-bar input {
      flex: 1 1 280px;
      max-width: 440px;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid #cbd5e1;
      background: #ffffff;
      font: inherit;
      font-size: 14px;
    }

    .search-bar input:focus {
      outline: 2px solid var(--jade);
      outline-offset: 1px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 14px;
    }

    .song-item {
      background: #ffffff;
      border: 1px solid var(--line);
      border-radius: 13px;
      padding: 14px 15px;
      display: flex;
      flex-direction: column;
      gap: 9px;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
      transition: transform 0.14s ease, border-color 0.14s ease, box-shadow 0.14s ease;
      break-inside: avoid;
    }

    .song-item:hover {
      border-color: var(--jade);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(15, 118, 110, 0.1);
    }

    .item-top {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }

    .item-no {
      flex: 0 0 auto;
      width: 34px;
      height: 34px;
      border-radius: 9px;
      background: var(--jade);
      color: #ffffff;
      font-family: var(--font-mono);
      font-size: 13px;
      font-weight: 800;
      display: grid;
      place-items: center;
    }

    .item-titles {
      flex: 1 1 auto;
      min-width: 0;
    }

    .item-titles h2 {
      margin: 0;
      font-family: var(--font-vi);
      font-size: 16px;
      font-weight: 800;
      line-height: 1.3;
    }

    .item-zh {
      margin: 2px 0 0;
      font-size: 13px;
      font-weight: 600;
      color: var(--jade);
    }

    .item-mood {
      flex: 0 0 auto;
      padding: 2px 8px;
      border-radius: 999px;
      background: #fef3c7;
      color: #92400e;
      font-size: 11px;
      font-weight: 700;
    }

    .item-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 4px 10px;
      font-size: 12px;
      color: var(--muted);
    }

    .mono {
      font-family: var(--font-mono);
      font-weight: 600;
    }

    .item-stats {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      font-size: 11.5px;
      font-weight: 700;
    }

    .item-stats span {
      padding: 2px 7px;
      border-radius: 6px;
      background: #f8fafc;
      border: 1px solid var(--line);
      color: var(--ink-2);
    }

    .item-stats .stat-phrase {
      background: var(--jade-soft);
      border-color: var(--jade-border);
      color: var(--jade-dark);
    }

    .item-actions {
      display: grid;
      grid-template-columns: 1.35fr 1fr;
      gap: 8px;
      margin-top: auto;
      padding-top: 4px;
    }

    .btn-html, .btn-pdf {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 8px 10px;
      border-radius: 9px;
      font-size: 12.5px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.14s ease;
    }

    .btn-html {
      background: var(--jade-soft);
      border: 1px solid var(--jade-border);
      color: var(--jade-dark);
    }

    .btn-html:hover {
      background: var(--jade);
      border-color: var(--jade);
      color: #ffffff;
    }

    .btn-pdf {
      background: linear-gradient(135deg, #be123c, #e11d48);
      border: 1px solid #be123c;
      color: #ffffff;
    }

    .btn-pdf:hover {
      filter: brightness(1.07);
    }

    @media print {
      body { background: #ffffff; }
      .no-print { display: none !important; }
      .wrap { max-width: none; padding: 0; }
      .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
      .item-actions { display: none; }
    }
  </style>
</head>
<body>
  <div class="wrap">
    <header class="hero">
      <div class="hero-top">
        <div>
          <span class="eyebrow">越語學習通 · 24 首獨立歌詞精讀講義</span>
          <h1>越南抒情金曲庫・雙語歌詞 PDF 下載與列印中心</h1>
          <p>
            全部 <strong>24 首</strong>越南流行金曲皆已整理為<strong>每首獨立</strong>的 HTML 列印頁與 A4 排版 PDF。
            每句歌詞皆完整包含<strong>越文原句（附片語底線區隔）</strong>、<strong>繁體中文整句翻譯</strong>、
            <strong>逐詞「單字／片語」獨立標示</strong>、<strong>六聲調色點</strong>、<strong>漢越詞提示</strong>與<strong>本曲核心詞彙精講</strong>。
          </p>
        </div>
        <div class="hero-actions no-print">
          <a class="hero-btn" href="../#/songs">← 返回越南歌曲互動頁</a>
          <a class="hero-btn is-yt" href="${esc(SONGS_YOUTUBE_BASE_URL)}" target="_blank" rel="noopener noreferrer">▶ YouTube 原合輯</a>
        </div>
      </div>
      <div class="hero-stats">
        <span class="stat-pill">24 首獨立 HTML ＋ 24 份 A4 PDF</span>
        <span class="stat-pill">共 ${totalLines.toLocaleString()} 句雙語歌詞</span>
        <span class="stat-pill">共 ${totalPhrases.toLocaleString()} 次片語標示</span>
        <span class="stat-pill">共 ${totalWords.toLocaleString()} 次單字標示</span>
      </div>
    </header>

    <div class="search-bar no-print">
      <input type="search" id="song-filter" placeholder="搜尋曲目編號、越文歌名、中文歌名、歌手或曲風…" aria-label="搜尋 24 首歌曲" />
      <span id="filter-count" style="font-size:13px; color:#64748b; font-weight:600;">顯示全部 24 首</span>
    </div>

    <section class="grid" id="songs-grid" aria-label="24 首獨立歌曲講義清單">
      ${cardsHtml}
    </section>
  </div>

  <script>
    (function () {
      var input = document.getElementById('song-filter');
      var countEl = document.getElementById('filter-count');
      var cards = Array.prototype.slice.call(document.querySelectorAll('.song-item'));
      if (!input) return;
      input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        var shown = 0;
        cards.forEach(function (card) {
          var hay = card.getAttribute('data-search') || '';
          var match = !q || hay.indexOf(q) !== -1;
          card.style.display = match ? '' : 'none';
          if (match) shown++;
        });
        if (countEl) {
          countEl.textContent = q ? '符合條件：' + shown + ' / 24 首' : '顯示全部 24 首';
        }
      });
    })();
  </script>
</body>
</html>
`;
}

function renderPdfWithChrome(chromePath, htmlPath, pdfPath) {
  const fileUrl = pathToFileURL(htmlPath).href;
  execFileSync(
    chromePath,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-extensions',
      '--allow-file-access-from-files',
      '--no-pdf-header-footer',
      '--virtual-time-budget=8000',
      `--print-to-pdf=${pdfPath}`,
      fileUrl
    ],
    { stdio: 'pipe', timeout: 45000 }
  );
}

async function main() {
  const args = process.argv.slice(2);
  const htmlOnly = args.includes('--html-only');
  const onlyArg = args.find((a) => a.startsWith('--only='));
  const onlyNos = onlyArg
    ? new Set(
        onlyArg
          .slice('--only='.length)
          .split(',')
          .map((n) => Number(n.trim()))
          .filter(Number.isFinite)
      )
    : null;

  const dict = JSON.parse(fs.readFileSync(DICT_PATH, 'utf8'));
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const allAnalyzed = VIETNAMESE_SONGS.map((song) => analyzeSong(song, dict));

  // Always write index.html
  const indexHtml = buildIndexHtml(allAnalyzed);
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), indexHtml, 'utf8');

  const chromePath = htmlOnly ? null : findChromeBinary();
  let htmlCount = 0;
  let pdfCount = 0;
  let totalPdfBytes = 0;

  for (let i = 0; i < allAnalyzed.length; i++) {
    const item = allAnalyzed[i];
    const song = item.song;
    if (onlyNos && !onlyNos.has(song.no)) continue;

    const prevSong = i > 0 ? VIETNAMESE_SONGS[i - 1] : null;
    const nextSong = i < VIETNAMESE_SONGS.length - 1 ? VIETNAMESE_SONGS[i + 1] : null;

    const htmlPath = path.join(OUT_DIR, `${song.id}.html`);
    const pdfPath = path.join(OUT_DIR, `${song.id}.pdf`);

    const html = buildSongHtml(item, prevSong, nextSong);
    fs.writeFileSync(htmlPath, html, 'utf8');
    htmlCount++;

    if (!htmlOnly) {
      renderPdfWithChrome(chromePath, htmlPath, pdfPath);
      const size = fs.statSync(pdfPath).size;
      totalPdfBytes += size;
      pdfCount++;
      console.log(
        `[${String(song.no).padStart(2, '0')}/24] ${song.id} -> HTML + PDF (${(size / 1024).toFixed(1)} KB) | ${item.stats.lineCount} lines, ${item.stats.uniquePhraseCount} phrases`
      );
    } else {
      console.log(
        `[${String(song.no).padStart(2, '0')}/24] ${song.id} -> HTML only | ${item.stats.lineCount} lines, ${item.stats.uniquePhraseCount} phrases`
      );
    }
  }

  console.log(
    `\nDONE: Generated index.html + ${htmlCount} song HTML files${
      htmlOnly ? '' : ` + ${pdfCount} A4 PDF files (${(totalPdfBytes / (1024 * 1024)).toFixed(2)} MB total)`
    } in ${OUT_DIR}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
