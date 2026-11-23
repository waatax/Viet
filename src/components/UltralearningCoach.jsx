import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  Eye,
  EyeOff,
  Flame,
  Gauge,
  Headphones,
  Layers,
  Mic,
  Pause,
  Play,
  RefreshCw,
  RotateCcw,
  Shuffle,
  Sparkles,
  Target,
  Timer,
  Volume2,
  Zap
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { recordPointMastery } from '../services/bridgeProgress';
import {
  NEAR_NATIVE_PILLARS,
  SEE_DO_FEEDBACK_LOOP,
  EXPOSURE_LADDER,
  ULTRALEARNING_PRINCIPLES_MAP
} from '../data/ultralearningSystem';
import {
  loadUltralearningState,
  saveUltralearningState,
  recordDrillOutcome,
  recordSpokenOutput,
  getSweetSpotAnalysis,
  getPillarMasteryStats,
  getWeakestPillar,
  buildInterleavedDrillDeck
} from '../services/ultralearningEngine';
import './UltralearningCoach.css';

const SPEED_OPTIONS = [
  { val: 0.75, label: '0.75× 慢速' },
  { val: 1.0, label: '1.0× 原速' },
  { val: 1.15, label: '1.15× 母語快' }
];

const TIMER_PRESETS = [5, 15, 25];

export default function UltralearningCoach({
  selectedAccent = 'north',
  onNavigate,
  onStartStudy,
  updateUserStats
}) {
  const [activeView, setActiveView] = useState('drill'); // 'drill' | 'radar' | 'blueprint'
  const [uState, setUState] = useState(() => loadUltralearningState());
  const [pillarFilter, setPillarFilter] = useState('weakest');
  const [deck, setDeck] = useState(() => buildInterleavedDrillDeck('weakest', 8));
  const [cardIdx, setCardIdx] = useState(0);

  // Per-card See -> Do -> Feedback state
  const [showSeeScaffold, setShowSeeScaffold] = useState(false);
  const [pickedOption, setPickedOption] = useState(null);
  const [spokenChecked, setSpokenChecked] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, total: 0 });
  const [sessionDone, setSessionDone] = useState(false);

  // Focus Sprint Timer (Principle 2: Focus)
  const [timerMinutes, setTimerMinutes] = useState(15);
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return undefined;
    const id = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          setTimerRunning(false);
          audioEngine.playHaptic('success');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [timerRunning]);

  const formatTimer = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const selectTimerPreset = (mins) => {
    audioEngine.playHaptic('selection');
    setTimerRunning(false);
    setTimerMinutes(mins);
    setSecondsLeft(mins * 60);
  };

  const pillarStats = useMemo(() => getPillarMasteryStats(), [uState.totalOutput, sessionScore.total]);
  const weakestPillar = useMemo(() => getWeakestPillar(), [uState.totalOutput, sessionScore.total]);
  const sweetSpot = useMemo(() => getSweetSpotAnalysis(uState.recentOutcomes), [uState.recentOutcomes]);

  const currentCard = deck[cardIdx] || deck[0];

  // Determine active accent for this card (Variability Over Repetition: alternate North & South!)
  const activeCardAccent = useMemo(() => {
    if (!uState.interleaveAccents) return selectedAccent;
    return cardIdx % 2 === 0 ? 'north' : 'south';
  }, [uState.interleaveAccents, selectedAccent, cardIdx]);

  const updateSetting = useCallback((patch) => {
    setUState(prev => {
      const next = { ...prev, ...patch };
      saveUltralearningState(next);
      return next;
    });
  }, []);

  const applySweetSpotUpgrade = () => {
    audioEngine.playHaptic('selection');
    updateSetting({
      blindListening: true,
      interleaveAccents: true,
      speechSpeed: 1.15,
      studyMode: 'immersion'
    });
    setShowSeeScaffold(false);
  };

  const applySweetSpotScaffold = () => {
    audioEngine.playHaptic('selection');
    updateSetting({
      blindListening: false,
      interleaveAccents: false,
      speechSpeed: 0.75,
      studyMode: 'guided'
    });
    setShowSeeScaffold(true);
  };

  const startFreshDeck = (nextFilter = pillarFilter) => {
    audioEngine.playHaptic('selection');
    setPillarFilter(nextFilter);
    setDeck(buildInterleavedDrillDeck(nextFilter, 8));
    setCardIdx(0);
    setPickedOption(null);
    setSpokenChecked(false);
    setShowSeeScaffold(false);
    setSessionScore({ correct: 0, total: 0 });
    setSessionDone(false);
  };

  const playCurrentAudio = (overrideAccent = activeCardAccent, overrideRate = uState.speechSpeed) => {
    if (!currentCard) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(currentCard.spokenVi, {
      accent: overrideAccent,
      rate: overrideRate
    });
  };

  const handleChooseAnswer = (optIdx) => {
    if (pickedOption !== null || !currentCard) return;
    const isCorrect = optIdx === currentCard.listeningCheck[2];
    setPickedOption(optIdx);
    setSessionScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    const updated = recordDrillOutcome(isCorrect, currentCard.pillarId, false);
    setUState(updated);
    audioEngine.playHaptic(isCorrect ? 'success' : 'error');
    if (isCorrect && updateUserStats) {
      updateUserStats({ type: 'ADD_XP', payload: 12 });
    }
  };

  const handleMarkSpoken = (levelReached) => {
    if (!currentCard) return;
    setSpokenChecked(true);
    const updated = recordSpokenOutput(levelReached);
    setUState(updated);
    if (levelReached >= 3 && pickedOption === currentCard.listeningCheck[2]) {
      recordPointMastery(currentCard.moduleId, currentCard.pointIndex, true, 10);
    }
    audioEngine.playHaptic('success');
    if (updateUserStats) {
      updateUserStats({ type: 'ADD_XP', payload: levelReached >= 3 ? 18 : 10 });
    }
  };

  const handleNextCard = () => {
    audioEngine.stop();
    audioEngine.playHaptic('tap');
    if (cardIdx + 1 >= deck.length) {
      setSessionDone(true);
      return;
    }
    setCardIdx(prev => prev + 1);
    setPickedOption(null);
    setSpokenChecked(false);
    setShowSeeScaffold(false);
  };

  const isAnswered = pickedOption !== null;
  const isCorrectAnswer = isAnswered && currentCard && pickedOption === currentCard.listeningCheck[2];
  const hideScriptBeforeAnswer = uState.blindListening && !isAnswered && !showSeeScaffold;

  return (
    <section className="ultra-coach" aria-labelledby="ultra-coach-title">
      {/* Compact Header */}
      <header className="ultra-hero">
        <div className="ultra-hero-copy">
          <span className="ultra-eyebrow">
            <Flame size={14} aria-hidden="true" />
            <span>Ultralearning × Get Better at Anything · 近母語實戰教練</span>
          </span>
          <h1 id="ultra-coach-title">用 See → Do → Feedback，把越語練成母語反射。</h1>
          <p>融合 Scott H. Young 雙書核心：85% 難度甜蜜點校準、南北越口音變異交錯、盲聽主動提取與開口暴露階梯。</p>
        </div>

        <div className="ultra-hero-metrics">
          <div className={`ultra-metric-card zone-${sweetSpot.zone}`}>
            <span className="metric-kicker"><Gauge size={14} /> 難度甜蜜點</span>
            <strong>{sweetSpot.label}</strong>
          </div>
          <div className="ultra-metric-card">
            <span className="metric-kicker"><Zap size={14} /> 今日主動輸出</span>
            <strong>{uState.dailyOutput.count} 次 <small>(口說 {uState.dailyOutput.spoken})</small></strong>
          </div>
          <div className="ultra-metric-card">
            <span className="metric-kicker"><Mic size={14} /> 開口暴露等級</span>
            <strong>Lv.{uState.exposureLevel} / 4</strong>
          </div>
        </div>
      </header>

      {/* Clean 3-Tab Sub-Navigation */}
      <div className="ultra-tabs" role="tablist" aria-label="超速學習模式切換">
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'drill'}
          className={`ultra-tab-btn ${activeView === 'drill' ? 'active' : ''}`}
          onClick={() => setActiveView('drill')}
        >
          <Target size={16} />
          <span>實戰特訓台 (See→Do→Feedback)</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'radar'}
          className={`ultra-tab-btn ${activeView === 'radar' ? 'active' : ''}`}
          onClick={() => setActiveView('radar')}
        >
          <Compass size={16} />
          <span>近母語雷達與弱點診斷</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeView === 'blueprint'}
          className={`ultra-tab-btn ${activeView === 'blueprint' ? 'active' : ''}`}
          onClick={() => setActiveView('blueprint')}
        >
          <Layers size={16} />
          <span>雙書 9+3 科學藍圖</span>
        </button>
      </div>

      {/* ================================================================= */}
      {/* VIEW 1: LIVE SEE -> DO -> FEEDBACK DRILL WORKBENCH                */}
      {/* ================================================================= */}
      {activeView === 'drill' && (
        <div className="ultra-drill-layout">
          {/* Calibration & Focus Control Bar */}
          <div className="ultra-control-bar">
            {/* Focus Timer */}
            <div className="ultra-timer-group">
              <Timer size={16} className="ultra-timer-icon" />
              <span className="ultra-timer-clock">{formatTimer(secondsLeft)}</span>
              <button
                type="button"
                className={`ultra-chip-btn ${timerRunning ? 'is-active' : ''}`}
                onClick={() => setTimerRunning(r => !r)}
              >
                {timerRunning ? <Pause size={13} /> : <Play size={13} />}
                <span>{timerRunning ? '暫停' : '專注計時'}</span>
              </button>
              <div className="ultra-timer-presets">
                {TIMER_PRESETS.map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`ultra-mini-pill ${timerMinutes === m ? 'active' : ''}`}
                    onClick={() => selectTimerPreset(m)}
                  >
                    {m}m
                  </button>
                ))}
              </div>
            </div>

            {/* Variability & Immersion Toggles */}
            <div className="ultra-toggles-group">
              <button
                type="button"
                className={`ultra-chip-btn ${uState.blindListening ? 'is-active' : ''}`}
                onClick={() => updateSetting({ blindListening: !uState.blindListening })}
                title="隱藏越文與中文，強迫聽力主動提取 (Retrieval)"
              >
                {uState.blindListening ? <EyeOff size={14} /> : <Eye size={14} />}
                <span>{uState.blindListening ? '盲聽提取 ON' : '顯示字幕'}</span>
              </button>

              <button
                type="button"
                className={`ultra-chip-btn ${uState.interleaveAccents ? 'is-active' : ''}`}
                onClick={() => updateSetting({ interleaveAccents: !uState.interleaveAccents })}
                title="每題交替播放河內北越音與西貢南越音 (Variability Over Repetition)"
              >
                <Shuffle size={14} />
                <span>{uState.interleaveAccents ? '南北越交錯 ON' : '單一口音'}</span>
              </button>

              <div className="ultra-speed-pills" role="group" aria-label="語速設定">
                {SPEED_OPTIONS.map(opt => (
                  <button
                    key={opt.val}
                    type="button"
                    className={`ultra-mini-pill ${uState.speechSpeed === opt.val ? 'active' : ''}`}
                    onClick={() => updateSetting({ speechSpeed: opt.val })}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic 85% Sweet Spot Advisory Strip */}
          {sweetSpot.suggestedAction && (
            <div className={`ultra-sweetspot-banner zone-${sweetSpot.zone}`}>
              <div>
                <strong>{sweetSpot.label}</strong>
                <span>{sweetSpot.advice}</span>
              </div>
              {sweetSpot.suggestedAction === 'upgrade' ? (
                <button type="button" className="ultra-banner-cta" onClick={applySweetSpotUpgrade}>
                  <Sparkles size={14} />
                  <span>一鍵升級母語沉浸 (盲聽 + 1.15×)</span>
                </button>
              ) : (
                <button type="button" className="ultra-banner-cta" onClick={applySweetSpotScaffold}>
                  <Headphones size={14} />
                  <span>開啟 0.75× 範例鷹架</span>
                </button>
              )}
            </div>
          )}

          {/* Direct-Then-Drill Pillar Selector */}
          <div className="ultra-pillar-strip" role="group" aria-label="選擇特訓焦點">
            <button
              type="button"
              className={`ultra-pillar-pill ${pillarFilter === 'weakest' ? 'active' : ''}`}
              onClick={() => startFreshDeck('weakest')}
            >
              <span>🎯 直擊最弱：{weakestPillar.label}</span>
            </button>
            <button
              type="button"
              className={`ultra-pillar-pill ${pillarFilter === 'all' ? 'active' : ''}`}
              onClick={() => startFreshDeck('all')}
            >
              <span>🔀 全域交錯變異</span>
            </button>
            {NEAR_NATIVE_PILLARS.map(p => (
              <button
                key={p.id}
                type="button"
                className={`ultra-pillar-pill ${pillarFilter === p.id ? 'active' : ''}`}
                onClick={() => startFreshDeck(p.id)}
              >
                <span>{p.icon} {p.label}</span>
              </button>
            ))}
          </div>

          {/* Main Active Drill Stage */}
          {sessionDone ? (
            <div className="ultra-complete-card">
              <div className="ultra-complete-badge">🏆 本輪 8 題超速特訓完成！</div>
              <h2>本輪正確率：{Math.round((sessionScore.correct / Math.max(1, sessionScore.total)) * 100)}% ({sessionScore.correct} / {sessionScore.total})</h2>
              <p>
                {sweetSpot.advice} 今日已累計完成 <strong>{uState.dailyOutput.count}</strong> 次主動輸出（含 <strong>{uState.dailyOutput.spoken}</strong> 次開口朗讀）。
              </p>
              <div className="ultra-complete-actions">
                <button type="button" className="ultra-primary-btn" onClick={() => startFreshDeck(pillarFilter)}>
                  <RefreshCw size={16} />
                  <span>再來一輪交錯特訓 (Quantity → Quality)</span>
                </button>
                <button type="button" className="ultra-secondary-btn" onClick={() => setActiveView('radar')}>
                  <Compass size={16} />
                  <span>檢視 5 大能力雷達</span>
                </button>
              </div>
            </div>
          ) : currentCard && (
            <div className="ultra-stage-card">
              {/* Stage Progress Header */}
              <div className="ultra-stage-head">
                <div className="ultra-stage-tags">
                  <span className="ultra-tag-pillar">{currentCard.pillarIcon} {currentCard.pillarLabel}</span>
                  <span className="ultra-tag-mod">{currentCard.disciplineBadge}</span>
                  <span className="ultra-tag-accent">
                    {activeCardAccent === 'north' ? '🏛️ 河內北越音' : '🌴 西貢南越音'} · {uState.speechSpeed}×
                  </span>
                </div>
                <div className="ultra-stage-counter">
                  第 <strong>{cardIdx + 1}</strong> / {deck.length} 題
                </div>
              </div>

              <div className="ultra-progress-bar">
                <div className="ultra-progress-fill" style={{ width: `${((cardIdx + (isAnswered ? 1 : 0)) / deck.length) * 100}%` }} />
              </div>

              {/* Phase Indicator */}
              <div className="ultra-phase-steps">
                <span className={!isAnswered && showSeeScaffold ? 'is-now' : 'is-done'}>1. SEE 母語範例</span>
                <span className={!isAnswered ? 'is-now' : 'is-done'}>2. DO 盲聽主動提取</span>
                <span className={isAnswered ? 'is-now' : ''}>3. FEEDBACK 矯正與開口</span>
              </div>

              {/* Audio Stimulus Hero */}
              <div className="ultra-stimulus-box">
                <div className="ultra-audio-controls">
                  <button
                    type="button"
                    className="ultra-play-hero-btn"
                    onClick={() => playCurrentAudio(activeCardAccent, uState.speechSpeed)}
                  >
                    <Volume2 size={22} />
                    <span>播放母語原音 ({activeCardAccent === 'north' ? '北越' : '南越'} {uState.speechSpeed}×)</span>
                  </button>
                  <button
                    type="button"
                    className="ultra-sub-audio-btn"
                    onClick={() => playCurrentAudio(activeCardAccent, 0.75)}
                  >
                    <span>🐢 0.75× 慢聽</span>
                  </button>
                  <button
                    type="button"
                    className="ultra-sub-audio-btn"
                    onClick={() => playCurrentAudio(activeCardAccent === 'north' ? 'south' : 'north', uState.speechSpeed)}
                  >
                    <span>🔀 聽對照口音 ({activeCardAccent === 'north' ? '西貢' : '河內'})</span>
                  </button>
                  {!isAnswered && uState.blindListening && (
                    <button
                      type="button"
                      className="ultra-sub-audio-btn"
                      onClick={() => setShowSeeScaffold(v => !v)}
                    >
                      <Eye size={14} />
                      <span>{showSeeScaffold ? '收起範例提示' : '先看母語範例 (See)'}</span>
                    </button>
                  )}
                </div>

                {/* Blind Shield OR Revealed Script */}
                {hideScriptBeforeAnswer ? (
                  <div className="ultra-blind-shield">
                    <Headphones size={20} />
                    <div>
                      <strong>盲聽提取模式啟用中（先聽音回想，再選出正確意思）</strong>
                      <small>核心考點：{currentCard.concept} — 強迫大腦主動提取比直接看字記憶強 3 倍！</small>
                    </div>
                  </div>
                ) : (
                  <div className="ultra-script-reveal">
                    <div className="ultra-vi-line">{currentCard.spokenVi}</div>
                    {currentCard.toneContour?.length > 0 && (
                      <div className="ultra-tone-row" aria-label="逐字聲調輪廓">
                        {currentCard.toneContour.map((tc, i) => (
                          <span key={i} className="ultra-tone-chip">
                            <b>{tc.syllable}</b>
                            <small>{tc.toneName} {tc.contour}</small>
                          </span>
                        ))}
                      </div>
                    )}
                    {showSeeScaffold && !isAnswered && (
                      <p className="ultra-see-hint">💡 <strong>隱性規則提示：</strong>{currentCard.rule}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Phase 2: DO — Active Retrieval Multiple Choice */}
              <div className="ultra-options-section">
                <div className="ultra-options-label">🎧 選出你剛剛聽到的正確意思：</div>
                <div className="ultra-options-grid">
                  {currentCard.listeningCheck[1].map((optText, idx) => {
                    const isPicked = pickedOption === idx;
                    const isRight = idx === currentCard.listeningCheck[2];
                    let cls = 'ultra-option-btn';
                    if (isAnswered) {
                      if (isRight) cls += ' is-correct';
                      else if (isPicked) cls += ' is-wrong';
                    }
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={cls}
                        disabled={isAnswered}
                        onClick={() => handleChooseAnswer(idx)}
                      >
                        <span className="ultra-opt-letter">{String.fromCharCode(65 + idx)}</span>
                        <span>{optText}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Phase 3: FEEDBACK — 3-Layer Corrective Feedback + Speaking Exposure Ladder */}
              {isAnswered && (
                <div className={`ultra-feedback-panel ${isCorrectAnswer ? 'is-correct' : 'is-wrong'}`}>
                  <div className="ultra-fb-header">
                    <strong>
                      {isCorrectAnswer
                        ? '✅ 提取正確！大腦神經連結強化完成'
                        : '💡 沒關係！錯題正是大腦重塑的黃金時刻'}
                    </strong>
                    <span className="ultra-fb-zh">正解：{currentCard.zh}</span>
                  </div>

                  <div className="ultra-fb-layers">
                    <div className="ultra-fb-item">
                      <span>📌 資訊回饋（母語規則）</span>
                      <p>{currentCard.rule}</p>
                    </div>
                    <div className="ultra-fb-item">
                      <span>🗣️ 矯正與開口任務（Exposure）</span>
                      <p>{currentCard.speakingTask}</p>
                    </div>
                  </div>

                  {/* Exposure Ladder Action Bar */}
                  <div className="ultra-exposure-bar">
                    <div className="ultra-exposure-copy">
                      <strong>開口暴露打卡（克服說越語的恐懼）：</strong>
                      <small>聽完後真的出聲說一遍，輸出量決定近母語速度！</small>
                    </div>
                    <div className="ultra-exposure-btns">
                      <button
                        type="button"
                        className={`ultra-speak-btn ${spokenChecked ? 'is-done' : ''}`}
                        onClick={() => handleMarkSpoken(2)}
                      >
                        <Mic size={15} />
                        <span>我已大聲跟讀 (+10 XP)</span>
                      </button>
                      <button
                        type="button"
                        className={`ultra-speak-btn strong ${spokenChecked ? 'is-done' : ''}`}
                        onClick={() => handleMarkSpoken(4)}
                      >
                        <CheckCircle2 size={15} />
                        <span>我能盲說原速回應 (+18 XP)</span>
                      </button>
                    </div>
                  </div>

                  <div className="ultra-fb-footer">
                    <button
                      type="button"
                      className="ultra-deep-link"
                      onClick={() => onStartStudy && onStartStudy(currentCard.moduleId, currentCard.pointIndex)}
                    >
                      <span>深入此知識點完整圖解</span>
                      <ArrowRight size={14} />
                    </button>
                    <button type="button" className="ultra-primary-btn" onClick={handleNextCard}>
                      <span>{cardIdx + 1 >= deck.length ? '查看本輪成果' : '下一題交錯特訓'}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* ================================================================= */}
      {/* VIEW 2: NEAR-NATIVE 5-PILLAR RADAR & EXPOSURE LADDER              */}
      {/* ================================================================= */}
      {activeView === 'radar' && (
        <div className="ultra-radar-layout">
          {/* Bottleneck Spotlight */}
          <div className="ultra-bottleneck-card">
            <div>
              <span className="ultra-eyebrow">Direct-Then-Drill · 單一瓶頸鎖定</span>
              <h2>目前最優先突破的瓶頸：{weakestPillar.icon} {weakestPillar.label}</h2>
              <p>
                掌握進度 <strong>{weakestPillar.mastered} / {weakestPillar.total} ({weakestPillar.percent}%)</strong>。
                依據《Ultralearning》原則 4「直擊最弱環節」，優先單點突破最弱能力，整體流利度提升最快！
              </p>
            </div>
            <div className="ultra-bottleneck-actions">
              <button
                type="button"
                className="ultra-primary-btn"
                onClick={() => { setActiveView('drill'); startFreshDeck(weakestPillar.id); }}
              >
                <Target size={16} />
                <span>立即特訓此瓶頸</span>
              </button>
              <button
                type="button"
                className="ultra-secondary-btn"
                onClick={() => onNavigate && onNavigate(weakestPillar.drillAction)}
              >
                <span>前往 {weakestPillar.drillLabel}</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* 5 Near-Native Pillars Progress Grid */}
          <div className="ultra-pillars-grid">
            {pillarStats.map(p => (
              <div key={p.id} className={`ultra-pillar-card ${p.id === weakestPillar.id ? 'is-bottleneck' : ''}`}>
                <div className="ultra-pc-head">
                  <span className="ultra-pc-icon">{p.icon}</span>
                  <div>
                    <small>{p.metalearningType}</small>
                    <h3>{p.label}</h3>
                  </div>
                  <strong className="ultra-pc-pct">{p.percent}%</strong>
                </div>
                <p className="ultra-pc-desc">{p.shortDesc}</p>
                <div className="ultra-progress-bar">
                  <div className="ultra-progress-fill" style={{ width: `${p.percent}%` }} />
                </div>
                <div className="ultra-pc-foot">
                  <span>已點亮 {p.mastered} / {p.total} 知識點</span>
                  <button
                    type="button"
                    className="ultra-inline-cta"
                    onClick={() => { setActiveView('drill'); startFreshDeck(p.id); }}
                  >
                    <span>開始特訓</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 4-Step Speaking Exposure Ladder */}
          <div className="ultra-surface-box">
            <div className="ultra-box-head">
              <span className="ultra-eyebrow">Get Better at Anything · Ch.12 Fears Fade with Exposure</span>
              <h3>漸進式開口暴露階梯（消除不敢開口說越語的心理阻力）</h3>
            </div>
            <div className="ultra-exposure-grid">
              {EXPOSURE_LADDER.map(step => {
                const reached = uState.exposureLevel >= step.level;
                return (
                  <button
                    key={step.level}
                    type="button"
                    className={`ultra-exposure-step ${reached ? 'is-reached' : ''}`}
                    onClick={() => updateSetting({ exposureLevel: step.level })}
                  >
                    <div className="ultra-exp-top">
                      <span>{step.tag}</span>
                      {reached && <CheckCircle2 size={16} />}
                    </div>
                    <strong>{step.title}</strong>
                    <p>{step.tip}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ================================================================= */}
      {/* VIEW 3: ULTRALEARNING x GET BETTER AT ANYTHING BLUEPRINT          */}
      {/* ================================================================= */}
      {activeView === 'blueprint' && (
        <div className="ultra-blueprint-layout">
          {/* See -> Do -> Feedback Loop */}
          <div className="ultra-surface-box">
            <div className="ultra-box-head">
              <span className="ultra-eyebrow">Get Better at Anything · 三階段精通循環</span>
              <h3>為什麼傳統背單字無法達到母語水準？關鍵在 See → Do → Feedback</h3>
            </div>
            <div className="ultra-sdf-grid">
              {SEE_DO_FEEDBACK_LOOP.map(item => (
                <div key={item.step} className="ultra-sdf-card">
                  <span className="ultra-sdf-badge">{item.badge}</span>
                  <h4>{item.title}</h4>
                  <small>{item.source}</small>
                  <p>{item.insight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 9 Ultralearning Principles -> Direct Viet Actions */}
          <div className="ultra-surface-box">
            <div className="ultra-box-head">
              <span className="ultra-eyebrow">Ultralearning · 9 大超速學習法則實戰對照表</span>
              <h3>點選任一法則，立刻進入對應的越語訓練模組</h3>
            </div>
            <div className="ultra-principles-grid">
              {ULTRALEARNING_PRINCIPLES_MAP.map(pr => (
                <div key={pr.no} className="ultra-principle-card">
                  <div className="ultra-pr-top">
                    <span className="ultra-pr-no">{pr.no}</span>
                    <strong>{pr.name}</strong>
                  </div>
                  <div className="ultra-pr-motto">{pr.motto}</div>
                  <p>{pr.vietApply}</p>
                  <button
                    type="button"
                    className="ultra-inline-cta"
                    onClick={() => {
                      if (pr.targetModule === 'ultra') {
                        setActiveView('drill');
                      } else if (onNavigate) {
                        onNavigate(pr.targetModule);
                      }
                    }}
                  >
                    <span>{pr.actionText}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
