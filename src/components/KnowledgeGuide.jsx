import React, { useState } from 'react';
import { BookOpen, Target, GitBranch, AlertTriangle, ClipboardCheck, RotateCcw, GraduationCap } from 'lucide-react';
import { knowledgeGuides, curriculumStages } from '../data/knowledgeGuides';
import { SYLLABUS_REGISTRY } from '../config/syllabusRegistry';
import './KnowledgeGuide.css';

export function KnowledgeGuide({ moduleId, onSelectChapter, setActiveTab }) {
  const guide = knowledgeGuides[moduleId];
  const chapters = SYLLABUS_REGISTRY.filter(c => c.moduleId === moduleId);
  const [answer, setAnswer] = useState(null);
  const [checks, setChecks] = useState([false, false, false]);
  const [chapterId, setChapterId] = useState('');
  const chapter = chapters.find(c => c.id === chapterId);
  const count = checks.filter(Boolean).length;
  if (!guide) return null;
  return (
    <section className="knowledge-guide" aria-labelledby={`knowledge-${moduleId}`}>
      <header className="kg-header">
        <div><span className="kg-eyebrow"><GraduationCap size={17} aria-hidden="true" /> 課綱知識整理 · 第{guide.stage}階起</span>
          <h2 id={`knowledge-${moduleId}`}>{guide.title}</h2></div>
        <span className="kg-level">{curriculumStages[guide.stage - 1].level}</span>
      </header>
      <p className="kg-goal"><Target size={19} aria-hidden="true" /><span>{guide.goal}</span></p>
      <details open className="kg-details">
        <summary><BookOpen size={18} aria-hidden="true" /> 核心知識與例句對照</summary>
        <div className="kg-table-wrap" tabIndex="0" role="region" aria-label="核心知識例句表，可橫向捲動">
          <table><caption>概念 → 越文 → 語意 → 使用規則</caption><thead><tr><th scope="col">知識點</th><th scope="col">越文例句</th><th scope="col">意思</th><th scope="col">理解與應用</th></tr></thead>
            <tbody>{guide.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i} lang={i === 1 ? 'vi' : 'zh-Hant'}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </details>
      <figure className="kg-flow">
        <figcaption><GitBranch size={18} aria-hidden="true" /> 把本課知識變成可運用的能力</figcaption>
        <ol>{[['聽與讀', '先抓意思及關鍵資訊'], ['拆解', '用上表找句型與語塊'], ['替換', '更換人物、數字或條件'], ['驗證', '遮住原文，完成新任務']].map(([title, desc], i) => <li key={title}><span className="kg-step">{i + 1}</span><strong>{title}</strong><span>{desc}</span></li>)}</ol>
      </figure>
      <aside className="kg-trap"><AlertTriangle size={20} aria-hidden="true" /><div><strong>易錯點與使用界線</strong><p>{guide.trap}</p></div></aside>
      {chapters.length > 0 && <div className="kg-chapter">
        <label htmlFor={`chapter-${moduleId}`}>對照本模組課綱章節（{chapters.length}項）</label>
        <select id={`chapter-${moduleId}`} value={chapterId} onChange={e => setChapterId(e.target.value)}><option value="">選擇要補強的章節</option>{chapters.map(c => <option key={c.id} value={c.id}>{c.titleZh}</option>)}</select>
        {chapter && <div className="kg-chapter-result"><h3>{chapter.titleZh}</h3><p>{chapter.descZh}</p><p>練習：以此章主題完成下方輸出任務，列出自己需要確認的詞彙、條件與錯因。</p><button type="button" onClick={() => onSelectChapter(chapter)}>前往章節練習 →</button></div>}
      </div>}
      <div className="kg-practice">
        <h3><ClipboardCheck size={20} aria-hidden="true" /> 先檢查，再修正</h3><fieldset><legend>{guide.question}</legend>
          <div className="kg-options">{guide.options.map((opt, i) => <button type="button" key={opt} aria-pressed={answer === i} onClick={() => setAnswer(i)}>{opt}</button>)}</div>
        </fieldset>
        {answer !== null && <p role="status" className={answer === guide.answer ? 'kg-correct' : 'kg-retry'}>{answer === guide.answer ? '✓ 答對了。' : `再想一想。正確答案：${guide.options[guide.answer]}。`}{guide.explain}</p>}
        <p><strong>輸出任務：</strong>{guide.task}</p>
        <div className="kg-progress"><label htmlFor={`kg-progress-${moduleId}`}>自我檢核 {count}/3（自行確認，非能力認證）</label><progress id={`kg-progress-${moduleId}`} value={count} max="3" /></div>
        {['我能解釋本課三個知識點，並舉例。', '我能遮住原文，在新情境完成任務。', '我已記錄錯因，並安排隔日再次回想。'].map((label, i) => <label className="kg-check" key={label}><input type="checkbox" checked={checks[i]} onChange={() => setChecks(prev => prev.map((v, n) => n === i ? !v : v))} />{label}</label>)}
        <button type="button" className="kg-reset" onClick={() => { setAnswer(null); setChecks([false, false, false]); }}><RotateCcw size={16} aria-hidden="true" /> 重做檢核</button>
      </div>
      <details className="kg-details"><summary><GraduationCap size={18} aria-hidden="true" /> 七階能力地圖與延伸任務</summary>
        <p>依課綱安排的學習目標；級別與詞數不作為官方檢定換算。高階任務需逐步累積閱讀、錄音及翻譯作品。</p>
        <ol className="kg-stage-list">{curriculumStages.map((stage, i) => <li key={stage.level}><strong>第{i + 1}階 · {stage.level} · {stage.title}</strong><p>{stage.task}</p><div>{stage.modules.map(id => <button type="button" key={id} onClick={() => setActiveTab(id)}>{knowledgeGuides[id].title.split('：')[0]} →</button>)}</div></li>)}</ol>
      </details>
    </section>
  );
}
