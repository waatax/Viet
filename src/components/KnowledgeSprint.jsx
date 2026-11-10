import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Headphones, EyeOff, Mic, CalendarCheck, Download, Square, Trophy } from 'lucide-react';
import { knowledgeBridge, bridgeChecks } from '../data/knowledgeBridge';
import { audioEngine } from '../services/audioEngine';
import { useDialoguePlayback } from '../hooks/useDialoguePlayback';
import { loadBridge, reviewBridge, saveBridge } from '../services/bridgeProgress';
import './KnowledgeSprint.css';

const STEPS = [{ label: '聽懂', Icon: Headphones }, { label: '回想', Icon: EyeOff }, { label: '開口', Icon: Mic }, { label: '複習', Icon: CalendarCheck }];
export default function KnowledgeSprint({ moduleId, accent }) {
  const [concept, vi, zh, rule, trap, task] = knowledgeBridge[moduleId];
  const listening = bridgeChecks[moduleId];
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [reveal, setReveal] = useState(false);
  const [progress, setProgress] = useState(() => loadBridge(moduleId));
  const [saved, setSaved] = useState(true);
  const [finished, setFinished] = useState(false);
  const [draft, setDraft] = useState('');
  const [usedHelp, setUsedHelp] = useState(false);
  const [heard, setHeard] = useState(false);
  const [questionText, setQuestionText] = useState(false);
  const bodyRef = useRef(null);
  useEffect(() => { if (step > 0) bodyRef.current?.focus(); }, [step]);
  const lines = useMemo(() => [{ viet: vi, zh }], [vi, zh]);
  const player = useDialoguePlayback({ lines, accent, title: concept });
  useEffect(() => () => audioEngine.stop(), []);
  const move = next => { player.stop(); audioEngine.stop(); setStep(next); };
  const finish = recalled => {
    if (finished) return;
    player.stop(); audioEngine.stop();
    const next = reviewBridge(progress, recalled);
    setSaved(saveBridge(moduleId, next)); setProgress(next); setFinished(true); move(3);
  };
  const file = audioEngine.resolveManifestFile(vi, accent);
  const labels = ['起步練習', '記憶種子', '穩定萌芽', '持續成長'];
  return <section className="knowledge-sprint" aria-labelledby={`sprint-${moduleId}`}>
    <header className="sprint-heading"><div><span className="sprint-kicker">每天一小步 · 約 3 分鐘</span><h3 id={`sprint-${moduleId}`}>把知識變成說得出口的越文</h3><p>{concept} · 聽一遍、想一次，再換條件說。</p></div><span className="sprint-badge"><Trophy size={18} aria-hidden="true" />{labels[progress.level]}</span></header>
    <ol className="sprint-steps" aria-label="練習進度">{STEPS.map(({ label, Icon }, i) => <li key={label} aria-current={i === step ? 'step' : undefined}><span><Icon size={15} aria-hidden="true" /></span>{i + 1} {label}</li>)}</ol>
    <div className="sprint-body" ref={bodyRef} tabIndex={-1}>
      {step === 0 && <><h4><Headphones size={20} /> 先聽懂今天的句子</h4><p lang="vi" className="sprint-vi">{vi}</p><p>{zh}</p><p>{rule}</p><div className="sprint-actions"><button onClick={() => player.play('vi-zh')}>越文 → 中文</button><button onClick={() => { player.setPrefs({ speed: 0.75 }); player.play('vi-only'); }}>慢聽 0.75×</button><button onClick={() => { player.setPrefs({ speed: 1 }); player.play('vi-only'); }}>原速 1×</button><button onClick={() => { player.stop(); audioEngine.stop(); }}><Square size={15} /> 停止</button></div><p className="sprint-note" role="status">{player.isActive ? '語音播放中，可隨時停止或重聽。' : '先理解意思，再進入無字幕聽力。'}</p><button className="sprint-primary" onClick={() => move(1)}>準備好了，遮字挑戰 →</button></>}
      {step === 1 && <><h4><EyeOff size={20} /> 遮住原文，檢查是否真的聽懂</h4><p>先播放，再選出語意。答錯也沒關係，核對後可以再聽一次。</p><button onClick={() => { setHeard(true); audioEngine.speak(listening[0], { lang: 'vi', accent }); }}>播放無字幕題目</button> <button onClick={() => { setQuestionText(true); setHeard(true); setUsedHelp(true); }}>無法聽音？改看文字</button>{questionText && <p lang="vi">{listening[0]}</p>}<div className="sprint-options" role="group" aria-label="聽力語意選項">{listening[1].map((option, i) => <button key={option} disabled={answer !== null || !heard} onClick={() => { audioEngine.stop(); setAnswer(i); if (i !== listening[2]) setUsedHelp(true); }} aria-pressed={answer === i}>{option}</button>)}</div>{answer !== null && <div className="sprint-feedback" role="status"><strong>{answer === listening[2] ? '✓ 聽懂了！' : '一起找出關鍵詞'}</strong><p>正確語意：{listening[1][listening[2]]}</p><p lang="vi">{listening[0]}</p><p>{listening[3]}</p><button onClick={() => setAnswer(null)}>遮字再測</button> <button className="sprint-primary" onClick={() => move(2)}>下一步：換條件開口 →</button></div>}</>}
      {step === 2 && <><h4><Mic size={20} /> 換條件，輪到你說</h4><p className="sprint-task">{task}</p><label htmlFor={`sprint-draft-${moduleId}`}>先說再記下你的句子（選填，本次使用）</label><textarea id={`sprint-draft-${moduleId}`} value={draft} onChange={e => setDraft(e.target.value)} placeholder="不用追求完美，先把意思說清楚…" rows={3} /><button aria-expanded={reveal} onClick={() => { setUsedHelp(true); setReveal(!reveal); }}>{reveal ? '收起提示' : '我想過了，核對原句與易錯點'}</button>{reveal && <div className="sprint-feedback"><p lang="vi">{vi}</p><p>{rule}</p><p><strong>中文直譯提醒：</strong>{trap}</p></div>}<p className="sprint-note">自行核對：語意完整、條件已替換、稱謂與聲調有注意。此處不會自動評分發音。</p><div className="sprint-actions"><button className="sprint-primary" onClick={() => finish(!usedHelp && answer === listening[2])}>{usedHelp || answer !== listening[2] ? '練習完成，明天再鞏固' : '能獨立說出，安排複習'}</button><button onClick={() => finish(false)}>還需要提示，明天再練</button></div></>}
      {step === 3 && <><h4><CalendarCheck size={20} /> 很好，今天有開口！</h4><p role="status">{saved ? `下次複習：${new Date(progress.due).toLocaleDateString('zh-TW')}。進度保留在此瀏覽器。` : '儲存空間不可用，本次練習已完成，但重新開啟後不會保留紀錄。'}</p><p>到期獨立提取成功，依序隔 1、3、7 天再練；提前練習不會跳級。徽章代表練習紀錄，不是語言能力認證。</p><button onClick={() => { setAnswer(null); setReveal(false); setFinished(false); setDraft(''); setUsedHelp(false); setHeard(false); setQuestionText(false); move(0); }}>再練一次</button></>}
    </div>
    <footer className="sprint-footer"><span>{progress.due ? (progress.due <= Date.now() ? '今天有到期複習' : `複習日期 ${new Date(progress.due).toLocaleDateString('zh-TW')}`) : '從今天開始累積開口的勇氣'}</span>{file && <a href={audioEngine.buildAudioUrl(file)} download={`${moduleId}-practice.mp3`}><Download size={16} /> 下載本句 MP3</a>}</footer>
  </section>;
}
