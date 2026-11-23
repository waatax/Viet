import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ExternalLink, Play, ListVideo, Clock, Sparkles } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import catalog from '../data/dialogueVideoCatalog.json';
import {
  YOUTUBE_PLAYLIST_URL,
  getDialogueYoutubeId,
  youtubeThumbUrl,
  youtubeVideoUrl,
  PRONUNCIATION_YOUTUBE_VIDEOS
} from '../data/youtubeVideos';
import './DialogueVideos.css';

export const DIALOGUE_VIDEO_JUMP_KEY = 'viet_dialogue_video';

const clock = s => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;
const fold = s => String(s || '').normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/gi, 'd').toLowerCase();

function readJump() {
  try { return sessionStorage.getItem(DIALOGUE_VIDEO_JUMP_KEY); } catch { return null; }
}

export default function DialogueVideos({ initialVideoId, onNavigate }) {
  const videos = catalog.videos;
  const [currentId, setCurrentId] = useState(() => {
    const wanted = initialVideoId || readJump();
    return videos.some(v => v.id === wanted) ? wanted : videos[0].id;
  });
  const [series, setSeries] = useState('all');
  const [query, setQuery] = useState('');
  const playerBox = useRef(null);
  const current = videos.find(v => v.id === currentId) || videos[0];
  const index = videos.indexOf(current);
  const currentYoutubeId = getDialogueYoutubeId(current.id);
  const currentYoutubeUrl = currentYoutubeId ? youtubeVideoUrl(currentYoutubeId) : null;

  const totals = useMemo(() => {
    const publishedCount = videos.filter(v => Boolean(getDialogueYoutubeId(v.id))).length;
    return {
      lines: videos.reduce((n, v) => n + v.lineCount, 0),
      hours: videos.reduce((n, v) => n + v.duration, 0) / 3600,
      publishedCount
    };
  }, [videos]);

  const shown = useMemo(() => {
    const q = fold(query.trim());
    return videos.filter(v => {
      if (series === 'youtube' && !getDialogueYoutubeId(v.id)) return false;
      if (series !== 'all' && series !== 'youtube' && v.series !== series) return false;
      if (!q) return true;
      return fold([
        String(v.no),
        v.titleZh,
        v.titleEn,
        v.summaryZh,
        v.roles.join(' '),
        v.sections.map(s => `${s.titleZh} ${s.preview}`).join(' ')
      ].join(' ')).includes(q);
    });
  }, [videos, series, query]);

  useEffect(() => {
    let jumped = false;
    try {
      jumped = !!sessionStorage.getItem(DIALOGUE_VIDEO_JUMP_KEY);
      sessionStorage.removeItem(DIALOGUE_VIDEO_JUMP_KEY);
    } catch { /* storage unavailable */ }
    if (initialVideoId || jumped) playerBox.current?.scrollIntoView({ block: 'start' });
  }, [initialVideoId]);

  function open(id) {
    setCurrentId(id);
    playerBox.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  const handleOpenExternal = () => {
    audioEngine.stop();
  };

  const seriesInfo = Object.fromEntries(catalog.series.map(s => [s.id, s]));

  return <section className="dialogue-videos" aria-labelledby="dialogue-video-title">
    <header className="dv-intro">
      <div className="dv-intro-top">
        <div>
          <h2 id="dialogue-video-title">會話影片課程（YouTube 播放清單）</h2>
          <p>
            把網站上的情境會話做成教學影片：共 {videos.length} 支課程規劃（{totals.lines} 句對話，總長約 {totals.hours.toFixed(1)} 小時），目前已有 <strong>{totals.publishedCount} 支會話影片 ＋ {PRONUNCIATION_YOUTUBE_VIDEOS.length} 支發音課</strong> 上架於 YouTube 播放清單，點擊對應連結即可前往 YouTube 播放。
          </p>
        </div>
        <a
          className="dv-playlist-cta"
          href={YOUTUBE_PLAYLIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenExternal}
        >
          <ListVideo size={18} aria-hidden="true" />
          開啟完整 YouTube 播放清單
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>

      <ol className="dv-steps">
        <li><strong>逐句學習</strong>越語 → 中文意思 → 慢速越語 → 倒數跟著說</li>
        <li><strong>完整會話</strong>兩位說話者用正常速度一來一往</li>
        <li><strong>換你上場</strong>只看中文，先自己說越語，再聽標準說法</li>
      </ol>
      <p className="dv-note">中文為台灣華語語音，越語以河內音的女聲與男聲分飾兩角。影片皆由 YouTube 串流播放，不佔用網站頻寬並支援調整播放速度與全螢幕。</p>
    </header>

    <div className="dv-player" ref={playerBox}>
      <div className="dv-player-main">
        {currentYoutubeId ? (
          <a
            className="dv-yt-stage"
            href={currentYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenExternal}
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
            <span className="dv-yt-stage-badge">
              YouTube 播放清單 · {clock(current.duration)}
            </span>
          </a>
        ) : (
          <div className="dv-yt-pending">
            <Sparkles size={34} aria-hidden="true" />
            <h4>此會話影片即將上架至 YouTube 播放清單</h4>
            <p>您現在就可以點擊下方「到網站練習這段會話」聆聽雙語原音與逐句跟讀，或前往 YouTube 播放清單瀏覽已上架影片。</p>
            <a
              className="dv-yt-pending-link"
              href={YOUTUBE_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenExternal}
            >
              <ListVideo size={16} aria-hidden="true" />
              前往 YouTube 播放清單查看最新影片
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        )}

        <div className="dv-now" aria-live="polite">
          <div className="dv-now-badges">
            <span className="dv-badge">會話 {String(current.no).padStart(2, '0')}</span>
            {currentYoutubeId
              ? <span className="dv-status-live">▶ YouTube 已上架</span>
              : <span className="dv-status-soon">即將上架 YouTube</span>}
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
              onClick={handleOpenExternal}
            >
              <Play size={16} fill="currentColor" aria-hidden="true" />
              在 YouTube 播放這支影片
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          )}
          <button type="button" disabled={index <= 0} onClick={() => open(videos[index - 1].id)}>← 上一支</button>
          <button type="button" disabled={index >= videos.length - 1} onClick={() => open(videos[index + 1].id)}>下一支 →</button>
          {onNavigate && current.moduleTab && <button type="button" className="dv-link" onClick={() => {
            if (current.moduleTab === 'conversation') {
              try { sessionStorage.setItem('viet_target_chapter', JSON.stringify({ targetParam: { scenarioId: current.id } })); } catch { /* opens the first scenario */ }
            }
            onNavigate(current.moduleTab);
          }}>到網站練習這段會話</button>}
        </div>
      </div>

      <nav className="dv-chapters" aria-label="本支影片章節">
        <h4>
          <Clock size={16} aria-hidden="true" />
          {currentYoutubeId ? '本支影片章節（點擊跳至 YouTube 時間點）' : '本支影片章節預覽'}
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
                  onClick={handleOpenExternal}
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
      <label htmlFor="dv-search">搜尋會話</label>
      <input id="dv-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="例如：咖啡、Grab、報價、cà phê" />
      <div className="dv-filters" role="group" aria-label="依系列篩選">
        <button type="button" aria-pressed={series === 'all'} onClick={() => setSeries('all')}>全部 {videos.length}</button>
        <button type="button" className="dv-filter-yt" aria-pressed={series === 'youtube'} onClick={() => setSeries('youtube')}>▶ YouTube 已上架 {totals.publishedCount}</button>
        {catalog.series.map(s => {
          const n = videos.filter(v => v.series === s.id).length;
          return n ? <button type="button" key={s.id} aria-pressed={series === s.id} onClick={() => setSeries(s.id)}>{s.icon} {s.titleZh} {n}</button> : null;
        })}
      </div>
    </div>

    <div className="dv-catalog" aria-label="會話影片目錄">
      {catalog.series.map(s => {
        const items = shown.filter(v => v.series === s.id);
        if (!items.length) return null;
        return <section key={s.id} className="dv-series" aria-labelledby={`dv-series-${s.id}`}>
          <h3 id={`dv-series-${s.id}`}>{s.icon} {s.titleZh} <small>{items.length} 支</small></h3>
          <p>{s.descZh}</p>
          <ol className="dv-list">
            {items.map(v => {
              const ytId = getDialogueYoutubeId(v.id);
              const ytUrl = ytId ? youtubeVideoUrl(ytId) : null;
              return <li key={v.id} className={`dv-card-item ${v.id === current.id ? 'is-selected' : ''}`}>
                <button type="button" className="dv-card-select" aria-pressed={v.id === current.id} onClick={() => open(v.id)}>
                  <span className="dv-no">{String(v.no).padStart(2, '0')}</span>
                  <span className="dv-title">{v.titleZh}
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
                    onClick={handleOpenExternal}
                    aria-label={`前往 YouTube 播放會話 ${v.no}：${v.titleZh}`}
                  >
                    <Play size={13} fill="currentColor" aria-hidden="true" />
                    YouTube 播放
                    <ExternalLink size={12} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="dv-card-soon">即將上架 YouTube</span>
                )}
              </li>;
            })}
          </ol>
        </section>;
      })}
      {!shown.length && <p className="dv-empty">找不到符合「{query}」的會話，換個關鍵字試試。</p>}
    </div>
  </section>;
}
