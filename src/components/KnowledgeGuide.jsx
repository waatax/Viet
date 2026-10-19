import React, { useEffect, useState } from 'react';
import { BookOpen, Target, GitBranch, AlertTriangle, ClipboardCheck, RotateCcw, GraduationCap, Eye, EyeOff, CheckCircle, Search, Wrench, Play, Calendar } from 'lucide-react';
import { knowledgeGuides, curriculumStages, knowledgeMaps } from '../data/knowledgeGuides';
import { correctionSteps, transferQuestions, knowledgeReferences } from '../data/knowledgeExtensions';
import { SYLLABUS_REGISTRY } from '../config/syllabusRegistry';
import { loadKnowledgeProgress, saveKnowledgeProgress, errorRepairs } from '../services/knowledgeProgress';
import { KnowledgeDiagram } from './KnowledgeDiagram';
import './KnowledgeGuide.css';

export function KnowledgeGuide({ moduleId, onSelectChapter, setActiveTab }) {
  const guide = knowledgeGuides[moduleId];
  const chapters = SYLLABUS_REGISTRY.filter(c => c.moduleId === moduleId);
  const [answer, setAnswer] = useState(null);
  const [saved] = useState(() => loadKnowledgeProgress(moduleId, guide?.rows.length || 0));
  const [checks, setChecks] = useState(saved.checks);
  const [chapterId, setChapterId] = useState('');
  const [revealed, setRevealed] = useState([]);
  const [recalled, setRecalled] = useState(saved.recalled);
  const [transferAnswer, setTransferAnswer] = useState(null);
  const [errorType, setErrorType] = useState(saved.errorType);
  const [storageAvailable, setStorageAvailable] = useState(true);
  useEffect(() => {
    setStorageAvailable(saveKnowledgeProgress(moduleId, { checks, recalled, errorType }));
  }, [moduleId, checks, recalled, errorType]);
  const chapter = chapters.find(c => c.id === chapterId);
  const count = checks.filter(Boolean).length;
  if (!guide) return null;
  const [transferQuestion, transferOptions, transferCorrect, transferExplanation] = transferQuestions[moduleId];
  return (
    <section className="knowledge-guide" aria-labelledby={`knowledge-${moduleId}`}>
      <header className="kg-header">
        <div><span className="kg-eyebrow"><GraduationCap size={17} aria-hidden="true" /> 課綱知識整理 · 第{guide.stage}階起</span>
          <h2 id={`knowledge-${moduleId}`}>{guide.title}</h2></div>
        <span className="kg-level">{curriculumStages[guide.stage - 1].level}</span>
      </header>
      <p className="kg-goal"><Target size={19} aria-hidden="true" /><span>{guide.goal}</span></p>
      <p className="kg-save-status" role="status">{storageAvailable ? '勾選與錯因類型會保留在此瀏覽器；答題與答案展開狀態每次重新練習。' : '此瀏覽器無法儲存；本次仍可練習，離開頁面後不會保留進度。'}</p>
      <details open className="kg-details">
        <summary><BookOpen size={18} aria-hidden="true" /> 核心知識與例句對照</summary>
        <div className="kg-table-wrap" tabIndex="0" role="region" aria-label="核心知識例句表，可橫向捲動">
          <table><caption>概念 → 越文 → 語意 → 使用規則</caption><thead><tr><th scope="col">知識點</th><th scope="col">越文例句</th><th scope="col">意思</th><th scope="col">理解與應用</th></tr></thead>
            <tbody>{guide.rows.map(row => <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i} lang={i === 1 ? 'vi' : 'zh-Hant'}>{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </details>
      <figure className="kg-flow">
        <figcaption><GitBranch size={18} aria-hidden="true" /> {knowledgeMaps[moduleId][0]}</figcaption>
        <ol>{knowledgeMaps[moduleId][1].map(([title, desc], i) => <li key={title}><span className="kg-step">{i + 1}</span><strong>{title}</strong><span>{desc}</span></li>)}</ol>
      </figure>
      <KnowledgeDiagram moduleId={moduleId} />
      <section className="kg-recall" aria-labelledby={`recall-${moduleId}`}>
        <h3 id={`recall-${moduleId}`}><EyeOff size={20} aria-hidden="true" /> 知識點逐項回想</h3>
        <p>先收起上方「核心知識與例句對照」，說出越文的意思與使用規則，再展開核對；能換一個例子說明時，再自行勾選。</p>
        <div className="kg-recall-grid">{guide.rows.map(([concept, vi, meaning, rule], i) => <article className="kg-recall-card" key={concept}>
          <span className="kg-eyebrow">{i < 3 ? '基礎理解' : '延伸應用'} · {i + 1}/{guide.rows.length}</span>
          <h4>{concept}</h4><p lang="vi" className="kg-example">{vi}</p>
          <button type="button" aria-expanded={revealed.includes(i)} aria-controls={`recall-answer-${moduleId}-${i}`} onClick={() => setRevealed(prev => prev.includes(i) ? prev.filter(n => n !== i) : [...prev, i])}><Eye size={16} aria-hidden="true" /> {revealed.includes(i) ? '收起答案' : '回想後核對'}</button>
          <div id={`recall-answer-${moduleId}-${i}`} hidden={!revealed.includes(i)}><p><strong>{meaning}</strong></p><p>{rule}</p></div>
          <label className="kg-check"><input type="checkbox" checked={recalled.includes(i)} onChange={() => setRecalled(prev => prev.includes(i) ? prev.filter(n => n !== i) : [...prev, i])} />我能解釋並另舉例子</label>
        </article>)}</div>
        <p role="status"><CheckCircle size={16} aria-hidden="true" /> 已自行確認 {recalled.length}/{guide.rows.length} 項；請隔日用新例句再查。</p>
      </section>
      <aside className="kg-trap"><AlertTriangle size={20} aria-hidden="true" /><div><strong>易錯點與使用界線</strong><p>{guide.trap}</p></div></aside>
      {chapters.length > 0 && <div className="kg-chapter">
        <label htmlFor={`chapter-${moduleId}`}>對照本模組課綱章節（{chapters.length}項）</label>
        <select id={`chapter-${moduleId}`} value={chapterId} onChange={e => setChapterId(e.target.value)}><option value="">選擇要補強的章節</option>{chapters.map(c => <option key={c.id} value={c.id}>{c.titleZh}</option>)}</select>
        {chapter && <div className="kg-chapter-result"><h3>{chapter.titleZh}</h3><p>{chapter.descZh}</p><ol><li>對照本章說明，找出三個需要理解的詞、規則或條件，寫出中文意思。</li><li>本課練習方法：{guide.task}</li><li>將任務套用到「{chapter.titleZh}」，替換一項人物、時間、數量或觀點後重做。</li><li>核對是否涵蓋本章目標：「{chapter.descZh}」；未能解釋的部分列入下方錯因修正。</li></ol><button type="button" onClick={() => onSelectChapter(chapter)}>前往章節練習 →</button></div>}
      </div>}
      <div className="kg-practice">
        <h3><ClipboardCheck size={20} aria-hidden="true" /> 先檢查，再修正</h3><fieldset><legend>{guide.question}</legend>
          <div className="kg-options">{guide.options.map((opt, i) => <button type="button" key={opt} aria-pressed={answer === i} onClick={() => setAnswer(i)}>{opt}</button>)}</div>
        </fieldset>
        {answer !== null && <p role="status" className={answer === guide.answer ? 'kg-correct' : 'kg-retry'}>{answer === guide.answer ? '✓ 答對了。' : `再想一想。正確答案：${guide.options[guide.answer]}。`}{guide.explain}</p>}
        <fieldset className="kg-transfer"><legend>換個情境再檢查：{transferQuestion}</legend><div className="kg-options">{transferOptions.map((option, i) => <button type="button" key={option} aria-pressed={transferAnswer === i} onClick={() => setTransferAnswer(i)}>{option}</button>)}</div></fieldset>
        {transferAnswer !== null && <p role="status" className={transferAnswer === transferCorrect ? 'kg-correct' : 'kg-retry'}>{transferAnswer === transferCorrect ? '✓ 答對了。' : `請回查規則。正確答案：${transferOptions[transferCorrect]}。`}{transferExplanation}</p>}
        <p><strong>輸出任務：</strong>{guide.task}</p>
        <div className="kg-progress"><label htmlFor={`kg-progress-${moduleId}`}>自我檢核 {count}/3（自行確認，非能力認證）</label><progress id={`kg-progress-${moduleId}`} value={count} max="3" /></div>
        {['我能解釋本課三個知識點，並舉例。', '我能遮住原文，在新情境完成任務。', '我已記錄錯因，並安排隔日再次回想。'].map((label, i) => <label className="kg-check" key={label}><input type="checkbox" checked={checks[i]} onChange={() => setChecks(prev => prev.map((v, n) => n === i ? !v : v))} />{label}</label>)}
        <button type="button" className="kg-reset" onClick={() => { setAnswer(null); setTransferAnswer(null); setChecks([false, false, false]); setRevealed([]); setRecalled([]); setErrorType('meaning'); }}><RotateCcw size={16} aria-hidden="true" /> 重做檢核與回想</button>
      </div>
      <figure className="kg-flow kg-correction"><figcaption><Wrench size={18} aria-hidden="true" /> 錯因 → 修正 → 新情境驗證</figcaption><ol>{correctionSteps.map(([title, description], i) => {
        const Icon = [Search, Target, Play, Calendar][i];
        return <li key={title}><Icon size={22} aria-hidden="true" /><strong>{title}</strong><span>{description}</span></li>;
      })}</ol><p>本課輸出目標：{guide.task}</p></figure>
      <div className="kg-repair"><label htmlFor={`kg-error-${moduleId}`}><strong>這一輪最需要修正的是？</strong></label><select id={`kg-error-${moduleId}`} value={errorType} onChange={e => setErrorType(e.target.value)}>{Object.entries(errorRepairs).map(([id, [label]]) => <option key={id} value={id}>{label}</option>)}</select><p role="status"><Wrench size={17} aria-hidden="true" /> {errorRepairs[errorType][1]}</p><p>現在：針對「{guide.rows.find((_, i) => !recalled.includes(i))?.[0] || guide.rows[0][0]}」試做一次；隔日：遮住答案，用新例子檢查是否還犯同樣錯誤。</p></div>
      <details className="kg-details"><summary><GraduationCap size={18} aria-hidden="true" /> 七階能力地圖與延伸任務</summary>
        <p>依課綱安排的學習目標；級別與詞數不作為官方檢定換算。高階任務需逐步累積閱讀、錄音及翻譯作品。</p>
        <ol className="kg-stage-list">{curriculumStages.map((stage, i) => <li key={stage.level}><strong>第{i + 1}階 · {stage.level} · {stage.title}</strong><p>{stage.task}</p><div>{stage.modules.map(id => <button type="button" key={id} onClick={() => setActiveTab(id)}>{knowledgeGuides[id].title.split('：')[0]} →</button>)}</div></li>)}</ol>
      </details>
      {knowledgeReferences[moduleId] && <aside className="kg-references"><h3>原文與延伸核對</h3><ul>{knowledgeReferences[moduleId].map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noreferrer">{label} ↗</a></li>)}</ul><p>連結用於核對相關規則或原文；本頁教學例句與練習為另行編寫。</p></aside>}
    </section>
  );
}
