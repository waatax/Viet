import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { audioEngine } from '../services/audioEngine';
import './PronunciationVideos.css';

import { videoLessons as lessons } from '../data/videoLessons';

const VIDEO_VERSION = 3;

export default function PronunciationVideos({ initialLesson = 0 }) {
  const [lesson, setLesson] = useState(initialLesson);
  const [error, setError] = useState(false);
  const player = useRef(null);
  // Bump VIDEO_VERSION whenever the MP4s are re-rendered so browsers and the CDN fetch the new edition.
  const src = `${import.meta.env.BASE_URL}pronunciation-video/lesson-${lesson}.mp4?v=${VIDEO_VERSION}`;

  function playLesson(index) {
    flushSync(() => { setError(false); setLesson(index); });
    player.current.play().catch(e => {
      if (e.name !== 'AbortError') setError(true);
    });
  }

  return <section className="pronunciation-videos" aria-labelledby="course-video-title">
    <h3 id="course-video-title">發音影片課程</h3>
    <p>第一次學，從第 0 課開始。每個字都照四步練：① 聽示範（正常速度＋慢速）② 倒數時跟著念 ③ 自我檢查題先自己念 ④ 聽答案核對。</p>
    <p className="course-video-legend">畫面上的彩色字母：<span className="c-on">開頭</span>・<span className="c-nuc">母音</span>・<span className="c-fin">字尾</span>；右側圖示標出嘴形、舌位、發音位置與聲調走向。旁白為台灣華語，越語示範以河內音為主。</p>
    <div className="course-video-choices" aria-label="選課播放">
      {lessons.map((title, i) => <button type="button" key={title} aria-pressed={lesson === i}
        onClick={() => playLesson(i)}>第 {i} 課 · {title}</button>)}
    </div>
    <p aria-live="polite"><strong>第 {lesson} 課 · {lessons[lesson]}</strong></p>
    <video ref={player} src={src} controls playsInline preload="none"
      aria-label={lessons[lesson]} onPlay={() => { audioEngine.stop(); setError(false); }}
      onError={() => setError(true)} />
    {error && <p role="alert">請再按播放，或<a href={src}>直接開啟這堂課的 MP4</a>。</p>}
  </section>;
}
