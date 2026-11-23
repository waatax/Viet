import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  ExternalLink, Play, ListVideo, Clock, Sparkles,
  CheckCircle2, Circle, Copy, Check, RotateCcw, BookOpen, Film
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import catalog from '../data/dialogueVideoCatalog.json';
import {
  YOUTUBE_PLAYLIST_URL,
  getDialogueYoutubeId,
  youtubeThumbUrl,
  youtubeVideoUrl,
  PRONUNCIATION_YOUTUBE_VIDEOS,
  TOTAL_YOUTUBE_VIDEOS,
  readWatchedVideos,
  markVideoWatched,
  toggleWatchedVideo,
  readLastWatchedVideo,
  saveLastWatchedVideo
} from '../data/youtubeVideos';
import PronunciationVideos from './PronunciationVideos';
import './DialogueVideos.css';

export const DIALOGUE_VIDEO_JUMP_KEY = 'viet_dialogue_video';

const clock = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
const fold = s => String(s || '').normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/gi, 'd').toLowerCase();

function readJump() {
  try { return sessionStorage.getItem(DIALOGUE_VIDEO_JUMP_KEY); } catch { return null; }
}

export default function DialogueVideos({ initialVideoId, onNavigate }) {
  const videos = catalog.videos;
  const [hubTab, setHubTab] = useState('dialogue'); // 'dialogue' | 'pronunciation'
  const [currentId, setCurrentId] = useState(() => {
    const wanted = initialVideoId || readJump();
    return videos.some(v => v.id === wanted) ? wanted : videos[0].id;
  });
  const [series, setSeries] = useState('all');
  const [query, setQuery] = useState('');
  const [watched, setWatched] = useState(readWatchedVideos);
  const [lastWatched, setLastWatched] = useState(readLastWatchedVideo);
  const [copied, setCopied] = useState(false);
  const playerBox = useRef(null);

  const current = videos.find(v => v.id === currentId) || videos[0];
  const index = videos.indexOf(current);
  const currentYoutubeId = getDialogueYoutubeId(current.id);
  const currentYoutubeUrl = currentYoutubeId ? youtubeVideoUrl(currentYoutubeId) : null;
  const isCurrentWatched = watched.includes(current.id);

  const totals = useMemo(() => {
    const publishedCount = videos.filter(v => Boolean(getDialogueYoutubeId(v.id))).length;
    const watchedDialogue = videos.filter(v => watched.includes(v.id)).length;
    const watchedPron = PRONUNCIATION_YOUTUBE_VIDEOS.filter(v => watched.includes(v.id)).length;
    return {
      lines: videos.reduce((n, v) => n + v.lineCount, 0),
      hours: videos.reduce((n, v) => n + v.duration, 0) / 3600,
      publishedCount,
      watchedAll: watchedDialogue + watchedPron,
      watchedDialogue
    };
  }, [videos, watched]);

  const shown = useMemo(() => {
    const q = fold(query.trim());
    return videos.filter(v => {
      if (series === 'youtube' && !getDialogueYoutubeId(v.id)) return false;
      if (series === 'unwatched' && watched.includes(v.id)) return false;
      if (!['all', 'youtube', 'unwatched'].includes(series) && v.series !== series) return false;
      if (!q) return true;
      return fold([
        String(v.no),
        String(v.no).padStart(2, '0'),
        v.titleZh,
        v.titleEn,
        v.summaryZh,
        v.roles.join(' '),
        v.sections.map(s => `${s.titleZh} ${s.preview}`).join(' ')
      ].join(' ')).includes(q);
    });
  }, [videos, series, query, watched]);

  useEffect(() => {
    let jumped = false;
    try {
      jumped = !!sessionStorage.getItem(DIALOGUE_VIDEO_JUMP_KEY);
      sessionStorage.removeItem(DIALOGUE_VIDEO_JUMP_KEY);
    } catch { /* storage unavailable */ }
    if (initialVideoId || jumped) {
      setHubTab('dialogue');
      playerBox.current?.scrollIntoView({ block: 'start' });
    }
  }, [initialVideoId]);

  function open(id) {
    setHubTab('dialogue');
    setCurrentId(id);
    setCopied(false);
    playerBox.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleOpenYoutube = (videoObj, ytId) => {
    audioEngine.stop();
    if (!videoObj) return;
    const wasWatched = watched.includes(videoObj.id);
    const next = markVideoWatched(videoObj.id);
    setWatched(next);
    const entry = {
      type: 'dialogue',
      id: videoObj.id,
      no: videoObj.no,
      title: `會話 ${String(videoObj.no).padStart(2, '0')} · ${videoObj.titleZh}`,
      videoId: ytId
    };
    saveLastWatchedVideo(entry);
    setLastWatched(entry);
    if (typeof window !== 'undefined' && !wasWatched) {
      window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
    }
  };

  const handleToggleWatched = (id) => {
    const wasWatched = watched.includes(id);
    const next = toggleWatchedVideo(id);
    setWatched(next);
    if (typeof window !== 'undefined' && !wasWatched) {
      window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
    }
  };

  const handleCopyLink = async () => {
    const targetUrl = currentYoutubeUrl || YOUTUBE_PLAYLIST_URL;
    try {
      await navigator.clipboard.writeText(targetUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  const seriesInfo = Object.fromEntries(catalog.series.map(s => [s.id, s]));
  const progressPct = Math.round((totals.watchedAll / Math.max(1, TOTAL_YOUTUBE_VIDEOS)) * 100);

  return <section className="dialogue-videos" aria-labelledby="dialogue-video-title">
    <header className="dv-intro">
      <div className="dv-intro-top">
        <div>
          <span className="dv-hero-eyebrow">
            <Film size={15} aria-hidden="true" />
            YouTube 完整影音課程 · {TOTAL_YOUTUBE_VIDEOS} 支線上影片
          </span>
          <h2 id="dialogue-video-title">會話與發音影片課程中心</h2>
          <p>
            全站核心發音與情境會話影片（共 <strong>{PRONUNCIATION_YOUTUBE_VIDEOS.length} 支發音課 ＋ {totals.publishedCount} 支會話課</strong>，{totals.lines} 句對話、總長約 {totals.hours.toFixed(1)} 小時）已整合至 YouTube 播放清單，點選任一影片或章節時間點即可直接前往 YouTube 播放。
          </p>
        </div>
        <div className="dv-hero-cta-col">
          <a
            className="dv-playlist-cta"
            href={YOUTUBE_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioEngine.stop()}
          >
            <ListVideo size={18} aria-hidden="true" />
            開啟完整 YouTube 播放清單
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          {lastWatched && (
            <button
              type="button"
              className="dv-resume-btn"
              onClick={() => {
                if (lastWatched.type === 'pron') setHubTab('pronunciation');
                else if (videos.some(v => v.id === lastWatched.id)) open(lastWatched.id);
              }}
            >
              <RotateCcw size={15} aria-hidden="true" />
              接著上次：{lastWatched.title}
            </button>
          )}
        </div>
      </div>

      {/* Unified Progress Strip */}
      <div className="dv-progress-strip">
        <div className="dv-progress-meta">
          <span>
            <CheckCircle2 size={16} aria-hidden="true" />
            已觀看 <strong>{totals.watchedAll} / {TOTAL_YOUTUBE_VIDEOS}</strong> 支影片（{progressPct}%）
          </span>
          <small>點擊 YouTube 播放或手動勾選即可累積學習進度與 +10 XP</small>
        </div>
        <progress value={totals.watchedAll} max={TOTAL_YOUTUBE_VIDEOS} aria-label="影音課程整體觀看進度" />
      </div>

      {/* Unified Hub Switcher: Dialogue Videos vs Pronunciation Videos */}
      <div className="dv-hub-tabs" role="tablist" aria-label="影片課程分類">
        <button
          type="button"
          role="tab"
          aria-selected={hubTab === 'dialogue'}
          className={hubTab === 'dialogue' ? 'is-active' : ''}
          onClick={() => setHubTab('dialogue')}
        >
          💬 情境會話影片（{totals.publishedCount} / {videos.length} 已上架）
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={hubTab === 'pronunciation'}
          className={hubTab === 'pronunciation' ? 'is-active' : ''}
          onClick={() => setHubTab('pronunciation')}
        >
          🔤 基礎發音課 00～05（6 / 6 全上架）
        </button>
      </div>
    </header>

    {hubTab === 'pronunciation' ? (
      <div className="dv-pron-panel">
        <PronunciationVideos />
      </div>
    ) : (
      <>
        <ol className="dv-steps">
          <li><strong>逐句學習</strong>越語 → 中文意思 → 慢速越語 → 倒數跟著說</li>
          <li><strong>完整會話</strong>兩位說話者用正常速度一來一往</li>
          <li><strong>換你上場</strong>只看中文，先自己說越語，再聽標準說法</li>
        </ol>
        <p className="dv-note">中文為台灣華語語音，越語以河內音的女聲與男聲分飾兩角。影片透過 YouTube 播放清單開啟，支援 0.75× 放慢跟讀、手機背景播放與全螢幕字幕。</p>

        <div className="dv-player" ref={playerBox}>
          <div className="dv-player-main">
            {currentYoutubeId ? (
              <a
                className="dv-yt-stage"
                href={currentYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOpenYoutube(current, currentYoutubeId)}
                aria-label={`點擊前往 YouTube 播放會話 ${current.no}：${current.titleZh}`}
              >
                <img
                  src={youtubeThumbUrl(currentYoutubeId)}
                  alt={`會話 ${String(current.no).padStart(2, '0')} · ${current.titleZh} YouTube 縮圖`}
                  loading="lazy"
                />
                <span className="dv-yt-play-btn" aria-hidden="true">
                  <Play size={36} fill="currentColor" />
                </span>
                {isCurrentWatched && <span className="dv-stage-watched">✓ 已觀看</span>}
                <span className="dv-yt-stage-badge">
                  YouTube 播放清單 · {clock(current.duration)}
                </span>
              </a>
            ) : (
              <div className="dv-yt-pending">
                <Sparkles size={34} aria-hidden="true" />
                <h4>會話 {String(current.no).padStart(2, '0')} 影片待補傳至 YouTube 播放清單</h4>
                <p>您現在就可以點擊下方「到網站練習這段會話」聆聽雙語原音與逐句跟讀，或前往 YouTube 播放清單觀看其他 {totals.publishedCount} 支已上架會話影片。</p>
                <a
                  className="dv-yt-pending-link"
                  href={YOUTUBE_PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => audioEngine.stop()}
                >
                  <ListVideo size={16} aria-hidden="true" />
                  前往 YouTube 播放清單查看全部影片
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            )}

            <div className="dv-now" aria-live="polite">
              <div className="dv-now-badges">
                <span className="dv-badge">會話 {String(current.no).padStart(2, '0')}</span>
                {currentYoutubeId
                  ? <span className="dv-status-live">▶ YouTube 已上架</span>
                  : <span className="dv-status-soon">待補傳 YouTube</span>}
                {isCurrentWatched && <span className="dv-status-done">✓ 已看過</span>}
              </div>
              <h3>{current.titleZh}</h3>
              <p>{seriesInfo[current.series]?.icon} {seriesInfo[current.series]?.titleZh} · {current.lineCount} 句 · {clock(current.duration)}{current.roles.length ? ` · 角色：${current.roles.join('、')}` : ''}</p>
            </div>

            <div className="dv-nav">
              {currentYoutubeUrl && (
                <a
                  className="dv-yt-primary-link"
                  href={currentYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleOpenYoutube(current, currentYoutubeId)}
                >
                  <Play size={16} fill="currentColor" aria-hidden="true" />
                  在 YouTube 播放這支影片
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              )}
              <button
                type="button"
                className={`dv-watched-toggle ${isCurrentWatched ? 'is-done' : ''}`}
                onClick={() => handleToggleWatched(current.id)}
              >
                {isCurrentWatched ? <CheckCircle2 size={15} aria-hidden="true" /> : <Circle size={15} aria-hidden="true" />}
                {isCurrentWatched ? '已看過' : '標記已看過'}
              </button>
              <button type="button" onClick={handleCopyLink} aria-label="複製這支影片的 YouTube 連結">
                {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
                {copied ? '已複製' : '複製連結'}
              </button>
              <button type="button" disabled={index <= 0} onClick={() => open(videos[index - 1].id)}>← 上一支</button>
              <button type="button" disabled={index >= videos.length - 1} onClick={() => open(videos[index + 1].id)}>下一支 →</button>
              {onNavigate && current.moduleTab && <button type="button" className="dv-link" onClick={() => {
                if (current.moduleTab === 'conversation') {
                  try { sessionStorage.setItem('viet_target_chapter', JSON.stringify({ targetParam: { scenarioId: current.id } })); } catch { /* opens the first scenario */ }
                }
                onNavigate(current.moduleTab);
              }}>
                <BookOpen size={15} aria-hidden="true" />
                到網站練習這段會話
              </button>}
            </div>
          </div>

          <nav className="dv-chapters" aria-label="本支影片章節">
            <h4>
              <Clock size={16} aria-hidden="true" />
              {currentYoutubeId ? '本支影片章節（點擊直跳 YouTube 時間點）' : '本支影片章節預覽'}
            </h4>
            <ol>
              {current.chapters.map(c => (
                <li key={`${c.t}-${c.title}`}>
                  {currentYoutubeId ? (
                    <a
                      className="dv-chapter-link"
                      href={youtubeVideoUrl(currentYoutubeId, c.t)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleOpenYoutube(current, currentYoutubeId)}
                    >
                      <span>{clock(c.t)}</span>
                      <strong>{c.title}</strong>
                      <ExternalLink size={12} className="dv-chapter-ext" aria-hidden="true" />
                    </a>
                  ) : (
                    <div className="dv-chapter-static">
                      <span>{clock(c.t)}</span>
                      <strong>{c.title}</strong>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div className="dv-toolbar">
          <div className="dv-search-row">
            <label htmlFor="dv-search">快速搜尋 78 支會話影片</label>
            <span className="dv-result-count">顯示 {shown.length} / {videos.length} 支</span>
          </div>
          <input id="dv-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="輸入編號、中文或越文：例如 17、咖啡、Grab、報價、銀行、cà phê" />
          <div className="dv-filters" role="group" aria-label="依系列篩選">
            <button type="button" aria-pressed={series === 'all'} onClick={() => setSeries('all')}>全部 {videos.length}</button>
            <button type="button" className="dv-filter-yt" aria-pressed={series === 'youtube'} onClick={() => setSeries('youtube')}>▶ YouTube 已上架 {totals.publishedCount}</button>
            <button type="button" aria-pressed={series === 'unwatched'} onClick={() => setSeries('unwatched')}>尚未觀看 {videos.length - totals.watchedDialogue}</button>
            {catalog.series.map(s => {
              const items = videos.filter(v => v.series === s.id);
              const done = items.filter(v => watched.includes(v.id)).length;
              return items.length ? (
                <button type="button" key={s.id} aria-pressed={series === s.id} onClick={() => setSeries(s.id)}>
                  {s.icon} {s.titleZh} {done > 0 ? `${done}/${items.length}` : items.length}
                </button>
              ) : null;
            })}
          </div>
        </div>

        <div className="dv-catalog" aria-label="會話影片目錄">
          {catalog.series.map(s => {
            const items = shown.filter(v => v.series === s.id);
            if (!items.length) return null;
            const seriesDone = items.filter(v => watched.includes(v.id)).length;
            return <section key={s.id} className="dv-series" aria-labelledby={`dv-series-${s.id}`}>
              <div className="dv-series-head">
                <h3 id={`dv-series-${s.id}`}>{s.icon} {s.titleZh} <small>{items.length} 支</small></h3>
                {seriesDone > 0 && <span className="dv-series-progress">✓ 已觀看 {seriesDone}/{items.length}</span>}
              </div>
              <p>{s.descZh}</p>
              <ol className="dv-list">
                {items.map(v => {
                  const ytId = getDialogueYoutubeId(v.id);
                  const ytUrl = ytId ? youtubeVideoUrl(ytId) : null;
                  const isDone = watched.includes(v.id);
                  return <li key={v.id} className={`dv-card-item ${v.id === current.id ? 'is-selected' : ''} ${isDone ? 'is-watched' : ''}`}>
                    <button type="button" className="dv-card-select" aria-pressed={v.id === current.id} onClick={() => open(v.id)}>
                      <span className="dv-no">
                        {isDone ? '✓' : String(v.no).padStart(2, '0')}
                      </span>
                      <span className="dv-title">
                        <strong>{String(v.no).padStart(2, '0')} · {v.titleZh}</strong>
                        <small>{v.lineCount} 句 · {clock(v.duration)}{v.sections.length > 1 ? ` · ${v.sections.length} 段` : ''}</small>
                        <em lang="vi">{v.sections[0].preview}</em>
                      </span>
                    </button>
                    {ytUrl ? (
                      <a
                        className="dv-card-yt-link"
                        href={ytUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleOpenYoutube(v, ytId)}
                        aria-label={`前往 YouTube 播放會話 ${v.no}：${v.titleZh}`}
                      >
                        <Play size={13} fill="currentColor" aria-hidden="true" />
                        YouTube 播放
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="dv-card-soon">待補傳至 YouTube（可先站內練對話）</span>
                    )}
                  </li>;
                })}
              </ol>
            </section>;
          })}
          {!shown.length && <p className="dv-empty">找不到符合「{query}」的會話，換個關鍵字試試。</p>}
        </div>
      </>
    )}
  </section>;
}
