import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { audioEngine } from '../services/audioEngine';
import './PronunciationVideos.css';

import { videoLessons as lessons } from '../data/videoLessons';

export default function PronunciationVideos({ initialLesson = 0 }) {
  const [lesson, setLesson] = useState(initialLesson);
  const [error, setError] = useState(false);
  const player = useRef(null);
  const src = `${import.meta.env.BASE_URL}pronunciation-video/lesson-${lesson}.mp4`;

  function playLesson(index) {
    flushSync(() => { setError(false); setLesson(index); });
    player.current.play().catch(e => {
      if (e.name !== 'AbortError') setError(true);
    });
  }

  return <section className="pronunciation-videos" aria-labelledby="course-video-title">
    <h3 id="course-video-title">發音影片課程</h3>
    <p>第一次學，從第 0 課開始。看到「看字試讀」時先自己念，再聽越語示範。</p>
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
