import React, { useState } from 'react';
import { practicalChallenges } from '../data/practicalChallenges';
import { audioEngine } from '../services/audioEngine';

export default function PracticalChallenge({ moduleId }) {
  const [level, setLevel] = useState('guided');
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [question, options, correct, why, transfer] = practicalChallenges[moduleId];
  return <section className="kg-practical" aria-label="實戰延伸任務">
    <span className="kg-practical-tag">實戰加一站 · 先回想，再核對</span>
    <h3>把知識帶進生活</h3>
    <div className="kg-options" aria-label="選擇練習方式">
      {[['guided', '🌱 有選項練習'], ['recall', '🌿 遮住選項回想'], ['transfer', '🌳 換情境挑戰']].map(([id, label]) => <button key={id} type="button" aria-pressed={level === id} onClick={() => { setLevel(id); setAnswer(null); setRevealed(false); audioEngine.stop(); }}>{label}</button>)}
    </div>
    <p>{level === 'transfer' ? transfer : question}</p>
    <button type="button" className="kg-listen-play" onClick={() => audioEngine.speak(level === 'transfer' ? transfer : question, { lang: 'zh' })}>🔊 朗讀任務</button>
    {level === 'guided' && <div className="kg-options">{options.map((option, i) => <button key={option} type="button" disabled={answer !== null} aria-pressed={answer === i} onClick={() => setAnswer(i)}>{option}</button>)}</div>}
    {level !== 'guided' && <button type="button" className="kg-listen-play" onClick={() => setRevealed(true)}>我已先試過，查看核對重點</button>}
    {(answer !== null || revealed) && <div role="status" className={answer !== null && answer !== correct ? 'kg-retry' : 'kg-correct'}>
      <strong>{answer !== null ? answer === correct ? '✓ 掌握重點了！' : '再練一次就更穩。' : '自我核對'}</strong>
      <p>核心答案：{options[correct]}</p><p>{why}</p>
      <button type="button" className="kg-listen-play" onClick={() => audioEngine.speak(`${options[correct]}。${why}`, { lang: 'zh' })}>🔊 朗讀答案與解說</button>
      <p>下一步：{transfer}</p>
      <small>明天不看提示再試一次；自主輸出由你核對，系統沒有評分錄音或自由回答。</small>
      <button type="button" className="kg-listen-play" onClick={() => { setAnswer(null); setRevealed(false); audioEngine.stop(); }}>重新練習</button>
    </div>}
  </section>;
}
