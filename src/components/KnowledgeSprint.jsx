import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Headphones, EyeOff, Mic, CalendarCheck, Download, Square, Trophy, BookOpen, Sparkles, Shuffle, ArrowRight, CheckCircle, Volume2 } from 'lucide-react';
import { knowledgeBridge, bridgeChecks } from '../data/knowledgeBridge';
import { allModuleMasteryItems, getKnowledgePointMasteryItem, subjectSparks } from '../data/knowledgeMasteryData';
import { audioEngine } from '../services/audioEngine';
import { useDialoguePlayback } from '../hooks/useDialoguePlayback';
import { loadBridge, reviewBridge, saveBridge, loadModuleMasteredPoints, recordPointMastery } from '../services/bridgeProgress';
import './KnowledgeSprint.css';

const STEPS = [
  { label: '聽懂・讀透', Icon: Headphones },
  { label: '遮字回想', Icon: EyeOff },
  { label: '跟讀・開口', Icon: Mic },
  { label: '掌握・複習', Icon: CalendarCheck }
];

const TIER_BADGES = { basic: '🌱 基礎', applied: '🚀 應用', advanced: '🏆 進階' };

export default function KnowledgeSprint({ moduleId, accent, selectedPointIndex, onSelectPoint, onMasteryUpdate }) {
  const items = allModuleMasteryItems[moduleId] || [];
  const totalPoints = items.length || 10;

  const [pointIdx, setPointIdx] = useState(() => (
    Number.isInteger(selectedPointIndex) && selectedPointIndex >= 0 && selectedPointIndex < totalPoints
      ? selectedPointIndex
      : totalPoints - 1
  ));

  const item = getKnowledgePointMasteryItem(moduleId, pointIdx);
  const fallbackRow = knowledgeBridge[moduleId] || ['', '', '', '', '', ''];
  const concept = item?.concept || fallbackRow[0];
  const vi = item?.spokenVi || fallbackRow[1];
  const displayVi = item?.vi || fallbackRow[1];
  const zh = item?.zh || fallbackRow[2];
  const rule = item?.rule || fallbackRow[3];
  const trap = item?.trap || fallbackRow[4];
  const task = item?.speakingTask || fallbackRow[5];
  const syntax = item?.syntax || displayVi;
  const mnemonic = item?.mnemonic || '';
  const listening = item?.listeningCheck || bridgeChecks[moduleId];
  const readingCheck = item?.readingCheck || null;
  const speakingCues = item?.speakingCues || [];
  const spark = subjectSparks[moduleId];

  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [readAnswer, setReadAnswer] = useState(null);
  const [hideZhInRead, setHideZhInRead] = useState(false);
  const [speakChecks, setSpeakChecks] = useState([false, false, false]);
  const [reveal, setReveal] = useState(false);
  const [progress, setProgress] = useState(() => loadBridge(moduleId));
  const [masteredPoints, setMasteredPoints] = useState(() => loadModuleMasteredPoints(moduleId, totalPoints));
  const [saved, setSaved] = useState(true);
  const [finished, setFinished] = useState(false);
  const [draft, setDraft] = useState('');
  const [usedHelp, setUsedHelp] = useState(false);
  const [heard, setHeard] = useState(false);
  const [questionText, setQuestionText] = useState(false);
  const bodyRef = useRef(null);

  const resetForPoint = (nextIdx) => {
    player.stop();
    audioEngine.stop();
    setPointIdx(nextIdx);
    setStep(0);
    setAnswer(null);
    setReadAnswer(null);
    setHideZhInRead(false);
    setSpeakChecks([false, false, false]);
    setReveal(false);
    setFinished(false);
    setDraft('');
    setUsedHelp(false);
    setHeard(false);
    setQuestionText(false);
    onSelectPoint?.(nextIdx);
  };

  useEffect(() => {
    if (Number.isInteger(selectedPointIndex) && selectedPointIndex >= 0 && selectedPointIndex < totalPoints && selectedPointIndex !== pointIdx) {
      resetForPoint(selectedPointIndex);
    }
  }, [selectedPointIndex]);

  useEffect(() => { if (step > 0) bodyRef.current?.focus(); }, [step]);
  const lines = useMemo(() => [{ viet: vi, zh }], [vi, zh]);
  const player = useDialoguePlayback({ lines, accent, title: concept });
  useEffect(() => () => audioEngine.stop(), []);

  const move = (next) => { player.stop(); audioEngine.stop(); setStep(next); };

  const finish = (recalled) => {
    if (finished) return;
    player.stop();
    audioEngine.stop();
    const next = reviewBridge(progress, recalled);
    const bridgeSaved = saveBridge(moduleId, next);
    const kpResult = recordPointMastery(moduleId, pointIdx, recalled, totalPoints);
    setSaved(bridgeSaved && kpResult.saved);
    setProgress(next);
    setMasteredPoints(kpResult.points);
    onMasteryUpdate?.(kpResult.points);
    setFinished(true);
    move(3);
  };

  const pickRandomOrNextPoint = () => {
    const unmastered = items.map((_, i) => i).filter((i) => !masteredPoints.includes(i) && i !== pointIdx);
    const pool = unmastered.length > 0 ? unmastered : items.map((_, i) => i).filter((i) => i !== pointIdx);
    const nextIdx = pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : (pointIdx + 1) % totalPoints;
    resetForPoint(nextIdx);
  };

  const file = audioEngine.resolveManifestFile(vi, accent);
  const labels = ['起步練習', '記憶種子', '穩定萌芽', '持續成長'];

  return (
    <section className="knowledge-sprint" aria-labelledby={`sprint-${moduleId}`} id={`sprint-box-${moduleId}`}>
      <header className="sprint-heading">
        <div>
          <span className="sprint-kicker">
            <Sparkles size={14} aria-hidden="true" /> 每天一小步 · 聽說讀快樂闖關（已掌握 {masteredPoints.length}/{totalPoints} 點）
          </span>
          <h3 id={`sprint-${moduleId}`}>把知識變成聽得懂、讀得透、說得出口的越文</h3>
          <p>
            <strong>第 {pointIdx + 1}/{totalPoints} 點：{concept}</strong> · 聽一遍、拆結構讀透，再換條件開口說。
          </p>
        </div>
        <span className="sprint-badge"><Trophy size={18} aria-hidden="true" />{labels[progress.level]}</span>
      </header>

      {/* 10-Point Interactive Selector Ribbon */}
      {items.length > 0 && (
        <div className="sprint-point-ribbon" role="navigation" aria-label="選擇本課知識點進行聽說讀練習">
          <div className="sprint-point-pills">
            {items.map((pt, i) => {
              const isMastered = masteredPoints.includes(i);
              const isCurrent = pointIdx === i;
              return (
                <button
                  key={pt.concept}
                  type="button"
                  className={`sprint-point-pill ${isCurrent ? 'sprint-point-active' : ''} ${isMastered ? 'sprint-point-mastered' : ''}`}
                  aria-current={isCurrent ? 'true' : undefined}
                  onClick={() => resetForPoint(i)}
                  title={`${TIER_BADGES[pt.tier] || ''} · 第 ${i + 1} 點：${pt.concept}`}
                >
                  <span>{isMastered ? '★' : i + 1}</span>
                  <small>{pt.concept}</small>
                </button>
              );
            })}
          </div>
          <button type="button" className="sprint-random-btn" onClick={pickRandomOrNextPoint}>
            <Shuffle size={15} aria-hidden="true" /> 換一點快樂練
          </button>
        </div>
      )}

      <ol className="sprint-steps" aria-label="練習進度">
        {STEPS.map(({ label, Icon }, i) => (
          <li key={label} aria-current={i === step ? 'step' : undefined}>
            <span><Icon size={15} aria-hidden="true" /></span>{i + 1} {label}
          </li>
        ))}
      </ol>

      <div className="sprint-body" ref={bodyRef} tabIndex={-1}>
        {step === 0 && (
          <>
            <h4><Headphones size={20} /> 先聽懂今天的句子，再拆結構讀透</h4>
            <div className="sprint-tier-row">
              <span className="sprint-tier-chip">{TIER_BADGES[item?.tier || 'advanced']} · 知識點 {pointIdx + 1}/{totalPoints}</span>
              <button type="button" className="sprint-read-toggle" onClick={() => setHideZhInRead(!hideZhInRead)}>
                <BookOpen size={15} aria-hidden="true" /> {hideZhInRead ? '顯示中文語意與解析' : '遮住中文・練習純越閱讀'}
              </button>
            </div>
            <p lang="vi" className="sprint-vi">{displayVi}</p>
            {!hideZhInRead ? (
              <>
                <p className="sprint-zh-meaning"><strong>語意：</strong>{zh}</p>
                <p><strong>核心規則：</strong>{rule}</p>
              </>
            ) : (
              <p className="sprint-note">📖 純越閱讀挑戰中：先看著上方越文句子，試著拆出語塊並回想意思！</p>
            )}

            <div className="sprint-actions">
              <button type="button" onClick={() => player.play('vi-zh')}>越文 → 中文</button>
              <button type="button" onClick={() => { player.setPrefs({ speed: 0.75 }); player.play('vi-only'); }}>慢聽 0.75×</button>
              <button type="button" onClick={() => { player.setPrefs({ speed: 1 }); player.play('vi-only'); }}>原速 1×</button>
              <button type="button" onClick={() => { player.stop(); audioEngine.stop(); }}><Square size={15} /> 停止</button>
            </div>

            {/* Structured Reading & Syntax Slot Box */}
            <div className="sprint-read-box">
              {readingCheck?.chunks?.length > 1 && (
                <div className="sprint-chunk-bar" role="group" aria-label="分段點聽與語塊拆解">
                  <strong>🔍 點擊語塊分段聽讀：</strong>
                  <div className="sprint-chunk-pills">
                    {readingCheck.chunks.map((chunk) => (
                      <button
                        key={chunk}
                        type="button"
                        className="sprint-chunk-btn"
                        onClick={() => audioEngine.speak(chunk, { lang: 'vi', accent })}
                      >
                        <Volume2 size={14} aria-hidden="true" /> <span lang="vi">{chunk}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="sprint-read-slot">
                <strong>📖 讀解語法槽位：</strong>
                <code>{syntax}</code>
              </div>
              {mnemonic && (
                <p className="sprint-mnemonic">
                  <strong>💡 快樂記憶口訣：</strong>{mnemonic}
                </p>
              )}
              {readingCheck && (
                <div className="sprint-read-quiz" role="group" aria-label="讀解快速核對">
                  <p className="sprint-read-prompt"><strong>🧩 讀解小暖身：</strong>{readingCheck.prompt}</p>
                  <div className="sprint-read-options">
                    {readingCheck.options.map((opt, idx) => (
                      <button
                        key={opt}
                        type="button"
                        className={readAnswer === idx ? 'sprint-read-selected' : ''}
                        onClick={() => setReadAnswer(idx)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  {readAnswer !== null && (
                    <p className="sprint-read-feedback" role="status">
                      {readAnswer === readingCheck.answer
                        ? `🎉 讀懂結構了！${readingCheck.explain}`
                        : `💡 再看一眼規則：正確為「${readingCheck.options[readingCheck.answer]}」。${readingCheck.explain}`}
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="sprint-note" role="status">
              {player.isActive ? '語音播放中，可隨時停止或重聽。' : '先理解意思，再進入無字幕聽力。'}
            </p>
            <button type="button" className="sprint-primary" onClick={() => move(1)}>準備好了，遮字挑戰 →</button>
          </>
        )}

        {step === 1 && (
          <>
            <h4><EyeOff size={20} /> 遮住原文，檢查是否真的聽懂</h4>
            <p>先播放，再選出語意。答錯也沒關係，核對後可以再聽一次。</p>
            <div className="sprint-actions">
              <button type="button" onClick={() => { setHeard(true); audioEngine.speak(listening[0], { lang: 'vi', accent }); }}>
                播放無字幕題目
              </button>
              <button type="button" onClick={() => { setHeard(true); audioEngine.speak(listening[0], { lang: 'vi', accent, rate: 0.75 }); }}>
                🐢 慢速盲聽 0.75×
              </button>
              <button type="button" onClick={() => { setQuestionText(true); setHeard(true); setUsedHelp(true); }}>
                無法聽音？改看文字
              </button>
            </div>
            {questionText && <p lang="vi" className="sprint-vi">{listening[0]}</p>}
            <div className="sprint-options" role="group" aria-label="聽力語意選項">
              {listening[1].map((option, i) => (
                <button
                  key={option}
                  type="button"
                  disabled={answer !== null || !heard}
                  onClick={() => {
                    audioEngine.stop();
                    setAnswer(i);
                    if (i !== listening[2]) setUsedHelp(true);
                  }}
                  aria-pressed={answer === i}
                >
                  {option}
                </button>
              ))}
            </div>
            {answer !== null && (
              <div className="sprint-feedback" role="status">
                <strong>{answer === listening[2] ? '✓ 聽懂了！耳朵抓得很準！' : '一起找出關鍵詞'}</strong>
                <p>正確語意：{listening[1][listening[2]]}</p>
                <p lang="vi" className="sprint-vi-reveal">{listening[0]}</p>
                <p><strong>📖 讀解與避坑：</strong>{listening[3]}</p>
                <div className="sprint-actions">
                  <button type="button" onClick={() => setAnswer(null)}>遮字再測</button>
                  <button type="button" className="sprint-primary" onClick={() => move(2)}>下一步：換條件開口 →</button>
                </div>
              </div>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h4><Mic size={20} /> 先帶讀跟說，再換條件輪到你說</h4>
            <div className="sprint-shadow-bar">
              <span>🗣️ 第一步：跟著母語音檔大聲跟讀一次原句</span>
              <div className="sprint-actions">
                <button type="button" onClick={() => audioEngine.speak(vi, { lang: 'vi', accent })}>
                  <Volume2 size={16} aria-hidden="true" /> 原速帶讀跟說 1×
                </button>
                <button type="button" onClick={() => audioEngine.speak(vi, { lang: 'vi', accent, rate: 0.75 })}>
                  🐢 慢速跟讀 0.75×
                </button>
              </div>
            </div>

            <p className="sprint-task">🎯 第二步・開口遷移任務：{task}</p>

            {speakingCues.length > 0 && (
              <div className="sprint-speak-checklist" role="group" aria-label="開口自我檢核清單">
                <p className="sprint-note"><strong>✨ 開口快樂自評（點選打勾）：</strong></p>
                <div className="sprint-cue-list">
                  {speakingCues.map((cue, idx) => (
                    <button
                      key={cue}
                      type="button"
                      className={`sprint-cue-btn ${speakChecks[idx] ? 'sprint-cue-checked' : ''}`}
                      onClick={() => setSpeakChecks((prev) => prev.map((v, n) => (n === idx ? !v : v)))}
                    >
                      <CheckCircle size={15} aria-hidden="true" /> {cue}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <label htmlFor={`sprint-draft-${moduleId}`}>先說再記下你的句子（選填，本次使用）</label>
            <textarea
              id={`sprint-draft-${moduleId}`}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="不用追求完美，先把意思說清楚…"
              rows={3}
            />
            <button type="button" aria-expanded={reveal} onClick={() => { setUsedHelp(true); setReveal(!reveal); }}>
              {reveal ? '收起提示' : '我想過了，核對原句與易錯點'}
            </button>
            {reveal && (
              <div className="sprint-feedback">
                <p lang="vi">{displayVi}</p>
                <p><strong>語法槽位：</strong><code>{syntax}</code></p>
                <p>{rule}</p>
                <p><strong>中文直譯提醒：</strong>{trap}</p>
              </div>
            )}
            <p className="sprint-note">自行核對：語意完整、條件已替換、稱謂與聲調有注意。此處不會自動評分發音。</p>
            <div className="sprint-actions">
              <button type="button" className="sprint-primary" onClick={() => finish(!usedHelp && answer === listening[2])}>
                {usedHelp || answer !== listening[2] ? '練習完成，明天再鞏固' : '能獨立說出，安排複習'}
              </button>
              <button type="button" onClick={() => finish(false)}>還需要提示，明天再練</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h4><CalendarCheck size={20} /> 很好，今天有開口！</h4>
            <div className="sprint-celebration-box">
              <p className="sprint-joy-msg">
                🎊 <strong>第 {pointIdx + 1}/{totalPoints} 點「{concept}」聽說讀完成！</strong>
                {spark?.joyAffirmation ? ` ${spark.joyAffirmation}` : ''}
              </p>
              <p>本學科知識點掌握進度：<strong>{masteredPoints.length} / {totalPoints} 點</strong></p>
            </div>
            <p role="status">
              {saved
                ? `下次複習：${new Date(progress.due).toLocaleDateString('zh-TW')}。進度保留在此瀏覽器。`
                : '儲存空間不可用，本次練習已完成，但重新開啟後不會保留紀錄。'}
            </p>
            <p>到期獨立提取成功，依序隔 1、3、7 天再練；提前練習不會跳級。徽章代表練習紀錄，不是語言能力認證。</p>
            <div className="sprint-actions">
              <button
                type="button"
                onClick={() => {
                  setAnswer(null);
                  setReadAnswer(null);
                  setReveal(false);
                  setFinished(false);
                  setDraft('');
                  setUsedHelp(false);
                  setHeard(false);
                  setQuestionText(false);
                  move(0);
                }}
              >
                再練一次
              </button>
              <button type="button" className="sprint-primary" onClick={pickRandomOrNextPoint}>
                繼續挑戰下一個知識點 <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </div>

      <footer className="sprint-footer">
        <span>
          {progress.due
            ? (progress.due <= Date.now() ? '今天有到期複習' : `複習日期 ${new Date(progress.due).toLocaleDateString('zh-TW')}`)
            : '從今天開始累積開口的勇氣'}
        </span>
        {file && (
          <a href={audioEngine.buildAudioUrl(file)} download={`${moduleId}-point-${pointIdx + 1}.mp3`}>
            <Download size={16} /> 下載本句 MP3
          </a>
        )}
      </footer>
    </section>
  );
}
