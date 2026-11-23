import React, { useState } from 'react';
import { ExternalLink, Play, ListVideo } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import {
  PRONUNCIATION_YOUTUBE_VIDEOS,
  YOUTUBE_PLAYLIST_URL,
  youtubeThumbUrl,
  youtubeVideoUrl
} from '../data/youtubeVideos';
import './PronunciationVideos.css';

export default function PronunciationVideos({ initialLesson = 0 }) {
  const safeInitial = initialLesson >= 0 && initialLesson < PRONUNCIATION_YOUTUBE_VIDEOS.length ? initialLesson : 0;
  const [lesson, setLesson] = useState(safeInitial);
  const current = PRONUNCIATION_YOUTUBE_VIDEOS[lesson] || PRONUNCIATION_YOUTUBE_VIDEOS[0];
  const currentUrl = youtubeVideoUrl(current.videoId);

  const handleOpenExternal = () => {
    audioEngine.stop();
  };

  return <section className="pronunciation-videos" aria-labelledby="course-video-title">
    <div className="pv-header-row">
      <h3 id="course-video-title">發音影片課程（YouTube 播放清單）</h3>
      <a
        className="pv-playlist-link"
        href={YOUTUBE_PLAYLIST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOpenExternal}
      >
        <ListVideo size={17} aria-hidden="true" />
        開啟完整 YouTube 播放清單
        <ExternalLink size={14} aria-hidden="true" />
      </a>
    </div>
    <p>第一次學，從第 0 課開始。每個字都照四步練：① 聽示範（正常速度＋慢速）② 倒數時跟著念 ③ 自我檢查題先自己念 ④ 聽答案核對。</p>
    <p className="course-video-legend">畫面上的彩色字母：<span className="c-on">開頭</span>・<span className="c-nuc">母音</span>・<span className="c-fin">字尾</span>；右側圖示標出嘴形、舌位、發音位置與聲調走向。旁白為台灣華語，越語示範以河內音為主。</p>

    <div className="course-video-choices" aria-label="選課預覽或直接前往 YouTube 播放">
      {PRONUNCIATION_YOUTUBE_VIDEOS.map((item, i) => (
        <div key={item.videoId} className={`pv-choice-card ${lesson === i ? 'is-selected' : ''}`}>
          <button
            type="button"
            className="pv-choice-select"
            aria-pressed={lesson === i}
            onClick={() => setLesson(i)}
          >
            <span className="pv-choice-no">基礎 {String(i).padStart(2, '0')}</span>
            <span className="pv-choice-meta">
              <strong>第 {i} 課 · {item.title}</strong>
              <small>片長 {item.duration}</small>
            </span>
          </button>
          <a
            className="pv-choice-yt"
            href={youtubeVideoUrl(item.videoId)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenExternal}
            aria-label={`前往 YouTube 播放第 ${i} 課：${item.title}`}
          >
            <Play size={14} aria-hidden="true" /> YouTube
          </a>
        </div>
      ))}
    </div>

    <div className="pv-featured-card" aria-live="polite">
      <a
        className="pv-thumb-link"
        href={currentUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOpenExternal}
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
        <span className="pv-duration-badge">{current.duration}</span>
      </a>
      <div className="pv-featured-info">
        <span className="pv-lesson-tag">基礎 {String(lesson).padStart(2, '0')} · YouTube 教學影片</span>
        <h4>第 {lesson} 課 · {current.title}</h4>
        <p>所有課程影片皆託管於 YouTube 播放清單，點擊下方連結將直接開啟 YouTube 對應影片位置播放（可於 YouTube 自由調整 0.75× 慢速或開啟全螢幕）。</p>
        <div className="pv-featured-actions">
          <a
            className="pv-primary-yt-btn"
            href={currentUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenExternal}
          >
            <Play size={18} fill="currentColor" aria-hidden="true" />
            前往 YouTube 播放第 {lesson} 課
            <ExternalLink size={15} aria-hidden="true" />
          </a>
          <a
            className="pv-secondary-yt-btn"
            href={YOUTUBE_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOpenExternal}
          >
            <ListVideo size={17} aria-hidden="true" />
            查看完整播放清單
          </a>
        </div>
      </div>
    </div>
  </section>;
}
