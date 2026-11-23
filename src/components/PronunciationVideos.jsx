import React, { useState } from 'react';
import { ExternalLink, Play, ListVideo, CheckCircle2, Circle, Copy, Check, ArrowRight } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import {
  PRONUNCIATION_YOUTUBE_VIDEOS,
  YOUTUBE_PLAYLIST_URL,
  youtubeThumbUrl,
  youtubeVideoUrl,
  readWatchedVideos,
  markVideoWatched,
  toggleWatchedVideo,
  saveLastWatchedVideo
} from '../data/youtubeVideos';
import './PronunciationVideos.css';

export default function PronunciationVideos({ initialLesson = 0 }) {
  const safeInitial = initialLesson >= 0 && initialLesson < PRONUNCIATION_YOUTUBE_VIDEOS.length ? initialLesson : 0;
  const [lesson, setLesson] = useState(safeInitial);
  const [watched, setWatched] = useState(readWatchedVideos);
  const [copied, setCopied] = useState(false);

  const current = PRONUNCIATION_YOUTUBE_VIDEOS[lesson] || PRONUNCIATION_YOUTUBE_VIDEOS[0];
  const currentUrl = youtubeVideoUrl(current.videoId);
  const isCurrentWatched = watched.includes(current.id);
  const watchedPronCount = PRONUNCIATION_YOUTUBE_VIDEOS.filter(v => watched.includes(v.id)).length;

  const handleOpenVideo = (item) => {
    audioEngine.stop();
    const next = markVideoWatched(item.id);
    setWatched(next);
    saveLastWatchedVideo({ type: 'pron', id: item.id, lesson: item.lesson, title: `基礎 ${String(item.lesson).padStart(2, '0')} · ${item.title}`, videoId: item.videoId });
    if (typeof window !== 'undefined' && !watched.includes(item.id)) {
      window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
    }
  };

  const handleToggleWatched = (id) => {
    const next = toggleWatchedVideo(id);
    setWatched(next);
    if (typeof window !== 'undefined' && !watched.includes(id)) {
      window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard unavailable */ }
  };

  return <section className="pronunciation-videos" aria-labelledby="course-video-title">
    <div className="pv-header-row">
      <div>
        <h3 id="course-video-title">發音影片課程（YouTube 播放清單 · 6 堂全上架）</h3>
        <div className="pv-progress-row">
          <span>已觀看 <strong>{watchedPronCount} / {PRONUNCIATION_YOUTUBE_VIDEOS.length}</strong> 堂發音課</span>
          <progress value={watchedPronCount} max={PRONUNCIATION_YOUTUBE_VIDEOS.length} aria-label="發音影片學習進度" />
        </div>
      </div>
      <a
        className="pv-playlist-link"
        href={YOUTUBE_PLAYLIST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => audioEngine.stop()}
      >
        <ListVideo size={17} aria-hidden="true" />
        開啟完整 YouTube 播放清單
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
    <p>第一次學，從第 0 課開始。每個字都照四步練：① 聽示範（正常速度＋慢速）② 倒數時跟著念 ③ 自我檢查題先自己念 ④ 聽答案核對。</p>
    <p className="course-video-legend">畫面上的彩色字母：<span className="c-on">開頭</span>・<span className="c-nuc">母音</span>・<span className="c-fin">字尾</span>；右側圖示標出嘴形、舌位、發音位置與聲調走向。旁白為台灣華語，越語示範以河內音為主。</p>

    <div className="course-video-choices" aria-label="選課預覽或直接前往 YouTube 播放">
      {PRONUNCIATION_YOUTUBE_VIDEOS.map((item, i) => {
        const isDone = watched.includes(item.id);
        return (
          <div key={item.videoId} className={`pv-choice-card ${lesson === i ? 'is-selected' : ''} ${isDone ? 'is-watched' : ''}`}>
            <button
              type="button"
              className="pv-choice-select"
              aria-pressed={lesson === i}
              onClick={() => { setLesson(i); setCopied(false); }}
            >
              <span className="pv-choice-no">
                {isDone ? <CheckCircle2 size={14} aria-hidden="true" /> : null}
                基礎 {String(i).padStart(2, '0')}
              </span>
              <span className="pv-choice-meta">
                <strong>第 {i} 課 · {item.title}</strong>
                <small>片長 {item.duration}{isDone ? ' · 已看過' : ''}</small>
              </span>
            </button>
            <a
              className="pv-choice-yt"
              href={youtubeVideoUrl(item.videoId)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleOpenVideo(item)}
              aria-label={`前往 YouTube 播放第 ${i} 課：${item.title}`}
            >
              <Play size={14} fill="currentColor" aria-hidden="true" /> YouTube
            </a>
          </div>
        );
      })}
    </div>

    <div className="pv-featured-card" aria-live="polite">
      <a
        className="pv-thumb-link"
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleOpenVideo(current)}
        aria-label={`點擊前往 YouTube 觀看第 ${lesson} 課：${current.title}`}
      >
        <img
          src={youtubeThumbUrl(current.videoId)}
          alt={`第 ${lesson} 課 · ${current.title} YouTube 影片縮圖`}
          loading="lazy"
        />
        <span className="pv-play-overlay" aria-hidden="true">
          <Play size={34} fill="currentColor" />
        </span>
        {isCurrentWatched && <span className="pv-watched-badge">✓ 已看過</span>}
        <span className="pv-duration-badge">{current.duration}</span>
      </a>
      <div className="pv-featured-info">
        <span className="pv-lesson-tag">基礎 {String(lesson).padStart(2, '0')} · YouTube 教學影片</span>
        <h4>第 {lesson} 課 · {current.title}</h4>
        <p className="pv-summary">{current.summary}</p>
        <p className="pv-hint">點擊下方超連結將直接開啟 YouTube 播放清單中的對應位置，可自由切換 0.75× 慢速跟讀或全螢幕檢視嘴形圖示。</p>
        <div className="pv-featured-actions">
          <a
            className="pv-primary-yt-btn"
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleOpenVideo(current)}
          >
            <Play size={18} fill="currentColor" aria-hidden="true" />
            前往 YouTube 播放第 {lesson} 課
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <button
            type="button"
            className={`pv-secondary-btn ${isCurrentWatched ? 'is-done' : ''}`}
            onClick={() => handleToggleWatched(current.id)}
          >
            {isCurrentWatched ? <CheckCircle2 size={16} aria-hidden="true" /> : <Circle size={16} aria-hidden="true" />}
            {isCurrentWatched ? '已標記看完' : '標記已看完 (+10 XP)'}
          </button>
          <button type="button" className="pv-secondary-btn" onClick={handleCopyLink}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? '已複製連結' : '複製連結'}
          </button>
          {lesson + 1 < PRONUNCIATION_YOUTUBE_VIDEOS.length && (
            <button
              type="button"
              className="pv-secondary-btn"
              onClick={() => { setLesson(lesson + 1); setCopied(false); }}
            >
              下一課 <ArrowRight size={15} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  </section>;
}
