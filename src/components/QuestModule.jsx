import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Sparkles, Trophy, Heart, Flame, Volume2, Snail, CheckCircle2,
  XCircle, ArrowRight, RotateCcw, Lightbulb, HelpCircle, Eye, EyeOff,
  BookOpen, Star, Award, Check, ChevronDown, ChevronUp, Play, Lock,
  Unlock, VolumeX, Shield, RefreshCw, X, MessageSquare, Compass
} from 'lucide-react';
import { QUEST_UNITS, QUEST_STATS } from '../data/questCurriculumData';
import {
  loadQuestState, saveQuestState, getNodeStatus,
  createQuestSession, submitSessionAnswer, advanceSession,
  finalizeSession, normalizeText, MAX_HEARTS
} from '../utils/questEngine';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './QuestModule.css';

export function QuestModule({ selectedAccent = 'north', updateUserStats }) {
  const { t } = useLanguage();
  const [questState, setQuestState] = useState(loadQuestState);
  const [activeSession, setActiveSession] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [guideUnit, setGuideUnit] = useState(null);
  const [showMistakesReview, setShowMistakesReview] = useState(false);

  // In-session answer states
  const [userAnswer, setUserAnswer] = useState('');
  const [buildPlacedWords, setBuildPlacedWords] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [matchSelectedVi, setMatchSelectedVi] = useState(null);
  const [matchSelectedZh, setMatchSelectedZh] = useState(null);
  const [feedback, setFeedback] = useState(null); // { isCorrect, why, hint, correctAnswer }
  const [showHint, setShowHint] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [completionData, setCompletionData] = useState(null);

  const answerInputRef = useRef(null);

  // Sync state changes to storage
  useEffect(() => {
    saveQuestState(questState);
  }, [questState]);

  // Current active question
  const currentQ = useMemo(() => {
    if (!activeSession) return null;
    return activeSession.queue[activeSession.currentIndex] || null;
  }, [activeSession]);

  // Sound playback helpers
  const handlePlayAudio = (text, slow = false) => {
    if (!text) return;
    const rate = slow ? 0.65 : 1.0;
    audioEngine.speak(text, { accent: selectedAccent, rate });
  };

  // Keyboard shortcut support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeSession || completionData) return;

      // Enter key advances when feedback is open, or submits when answer is ready
      if (e.key === 'Enter') {
        if (feedback) {
          e.preventDefault();
          handleNextQuestion();
        } else if (canSubmitAnswer()) {
          e.preventDefault();
          handleSubmitAnswer();
        }
      }

      // 1-4 keys for multiple choice
      if (!feedback && (currentQ?.type === 'choice' || currentQ?.type === 'listen')) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= currentQ.options.length) {
          e.preventDefault();
          setUserAnswer(currentQ.options[num - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSession, feedback, completionData, userAnswer, buildPlacedWords, matchedPairs, currentQ]);

  // Reset answer states on new question
  useEffect(() => {
    if (!currentQ) return;
    setUserAnswer('');
    setBuildPlacedWords([]);
    setMatchedPairs([]);
    setMatchSelectedVi(null);
    setMatchSelectedZh(null);
    setFeedback(null);
    setShowHint(false);
    setShowTranscript(false);

    // Auto-focus input on cloze/input questions
    if (currentQ.type === 'input') {
      setTimeout(() => answerInputRef.current?.focus(), 100);
    }

    // Auto-play question audio for listening or prompt audio
    if (currentQ.type === 'listen' && currentQ.audioText) {
      handlePlayAudio(currentQ.audioText, false);
    }
  }, [activeSession?.currentIndex, currentQ?.id]);

  // Check if answer is ready to submit
  const canSubmitAnswer = () => {
    if (!currentQ || feedback) return false;
    switch (currentQ.type) {
      case 'choice':
      case 'listen':
        return !!userAnswer;
      case 'build':
        return buildPlacedWords.length > 0;
      case 'match':
        return matchedPairs.length === currentQ.pairs.length;
      case 'input':
        return userAnswer.trim().length > 0;
      default:
        return false;
    }
  };

  // Start a lesson session
  const handleStartNode = (node) => {
    setSelectedNode(null);
    setCompletionData(null);
    const session = createQuestSession(node, 'lesson');
    setActiveSession(session);
  };

  // Submit answer
  const handleSubmitAnswer = () => {
    if (!canSubmitAnswer() || !activeSession || !currentQ) return;

    let finalAnswer = userAnswer;
    if (currentQ.type === 'build') {
      finalAnswer = buildPlacedWords.join(' ');
    } else if (currentQ.type === 'match') {
      finalAnswer = 'matched';
    }

    const res = submitSessionAnswer(activeSession, finalAnswer);
    if (!res) return;

    setFeedback(res);

    if (res.isCorrect) {
      if (activeSession.combo >= 3) {
        audioEngine.playComboSound();
      } else {
        audioEngine.playSuccessChime();
      }
      // Read correct answer audio for reinforcement
      if (currentQ.audioText && currentQ.type !== 'listen') {
        handlePlayAudio(currentQ.audioText, false);
      }
    } else {
      audioEngine.playGentleError();
    }
  };

  // Move to next question or conclude lesson
  const handleNextQuestion = () => {
    if (!activeSession) return;

    const adv = advanceSession(activeSession);
    if (adv.finished) {
      // Finalize session
      const fin = finalizeSession(questState, activeSession);
      setQuestState(fin.newState);
      setCompletionData(fin);

      // Play fanfare
      if (fin.newCrown) {
        audioEngine.playBadgeUnlockSound();
      } else {
        audioEngine.playLevelUpFanfare();
      }

      // Propagate XP to global App stats
      if (updateUserStats && fin.xpGained) {
        updateUserStats({ type: 'ADD_XP', payload: fin.xpGained });
      }
      setActiveSession(null);
    } else {
      setActiveSession({ ...activeSession });
    }
  };

  // Word building token clicks
  const handleAddBuildWord = (word, index) => {
    if (feedback) return;
    audioEngine.playHaptic?.('selection');
    handlePlayAudio(word, false);
    setBuildPlacedWords(prev => [...prev, word]);
  };

  const handleRemoveBuildWord = (index) => {
    if (feedback) return;
    audioEngine.playHaptic?.('selection');
    setBuildPlacedWords(prev => prev.filter((_, i) => i !== index));
  };

  // Match interaction
  const handleSelectMatchVi = (vi) => {
    if (feedback || matchedPairs.some(p => p[0] === vi)) return;
    handlePlayAudio(vi, false);
    setMatchSelectedVi(vi);

    if (matchSelectedZh) {
      checkMatchPair(vi, matchSelectedZh);
    }
  };

  const handleSelectMatchZh = (zh) => {
    if (feedback || matchedPairs.some(p => p[1] === zh)) return;
    setMatchSelectedZh(zh);

    if (matchSelectedVi) {
      checkMatchPair(matchSelectedVi, zh);
    }
  };

  const checkMatchPair = (vi, zh) => {
    const pair = currentQ.pairs.find(p => p[0] === vi && p[1] === zh);
    if (pair) {
      audioEngine.playSuccessChime();
      setMatchedPairs(prev => [...prev, [vi, zh]]);
      setMatchSelectedVi(null);
      setMatchSelectedZh(null);
    } else {
      audioEngine.playGentleError();
      setTimeout(() => {
        setMatchSelectedVi(null);
        setMatchSelectedZh(null);
      }, 350);
    }
  };

  // Available word bank tokens for sentence builder
  const availableBuildWords = useMemo(() => {
    if (!currentQ || currentQ.type !== 'build') return [];
    const pool = [...currentQ.words];
    const usedCounts = {};
    for (const w of buildPlacedWords) {
      usedCounts[w] = (usedCounts[w] || 0) + 1;
    }
    return pool.map((word, idx) => {
      const isUsed = (usedCounts[word] || 0) > 0;
      if (isUsed) usedCounts[word] -= 1;
      return { word, idx, isUsed };
    });
  }, [currentQ, buildPlacedWords]);

  // Shuffled match options
  const matchOptions = useMemo(() => {
    if (!currentQ || currentQ.type !== 'match') return { viList: [], zhList: [] };
    const viList = currentQ.pairs.map(p => p[0]);
    // Deterministic shuffle
    const zhList = [...currentQ.pairs.map(p => p[1])].reverse();
    return { viList, zhList };
  }, [currentQ]);

  // Calculate overall crown counts
  const totalCrowns = useMemo(() => Object.keys(questState.crowns || {}).length, [questState]);

  // Mistakes count
  const mistakesCount = useMemo(() => Object.keys(questState.mistakesBank || {}).length, [questState]);

  return (
    <div className="quest-container">
      {/* Top Gamification Status Bar */}
      <header className="quest-header-bar">
        <div className="quest-brand">
          <div className="quest-mascot-avatar" role="img" aria-label="Duolingo 冒險夥伴">🦉</div>
          <div>
            <h1 className="quest-main-title">越南語 闖關學習之路</h1>
            <p className="quest-sub-title">Duolingo 式階梯闖關 · 全語音 · 提示鷹架 · 徹底精熟</p>
          </div>
        </div>

        <div className="quest-stats-pill-group">
          <div className="quest-stat-pill streak-pill" title="連續學習天數">
            <Flame className="pill-icon flame-icon" />
            <span className="pill-val">{questState.streak || 1}</span>
            <span className="pill-unit">天</span>
          </div>

          <div className="quest-stat-pill gems-pill" title="冒險寶石">
            <span className="pill-icon">💎</span>
            <span className="pill-val">{questState.gems || 50}</span>
          </div>

          <div className="quest-stat-pill crowns-pill" title="單元金冠總數">
            <span className="pill-icon">👑</span>
            <span className="pill-val">{totalCrowns}</span>
            <span className="pill-unit">/ 8</span>
          </div>

          <div className="quest-stat-pill xp-pill" title="累積經驗值">
            <Sparkles className="pill-icon xp-icon" />
            <span className="pill-val">{questState.totalXp || 0}</span>
            <span className="pill-unit">XP</span>
          </div>

          {mistakesCount > 0 && (
            <button
              type="button"
              className="quest-review-btn"
              onClick={() => setShowMistakesReview(true)}
              title="查看與複習錯題庫"
            >
              <RotateCcw size={15} />
              <span>錯題強化 ({mistakesCount})</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Learning Map or Active Lesson */}
      {!activeSession && !completionData && (
        <div className="quest-map-view">
          {QUEST_UNITS.map((unit, unitIdx) => {
            const hasCrown = !!questState.crowns[unit.id];
            const completedInUnit = unit.nodes.filter(n => questState.nodes[n.id]?.done).length;

            return (
              <section key={unit.id} className={`quest-unit-section theme-${unit.color}`}>
                {/* Unit Banner */}
                <div className="quest-unit-banner">
                  <div className="unit-info">
                    <div className="unit-tag-row">
                      <span className="unit-stage-tag">{unit.stage}</span>
                      <span className="unit-progress-tag">
                        進度: {completedInUnit} / {unit.nodes.length}
                        {hasCrown && ' · 👑 已通關'}
                      </span>
                    </div>
                    <h2 className="unit-title">
                      <span className="unit-icon">{unit.icon}</span>
                      第 {unitIdx + 1} 單元：{unit.title}
                    </h2>
                    <p className="unit-vi-subtitle">{unit.viTitle}</p>
                    <p className="unit-goal">🎯 {unit.goal}</p>
                  </div>

                  <button
                    type="button"
                    className="quest-guide-btn"
                    onClick={() => setGuideUnit(unit)}
                    aria-label={`${unit.title} 觀念手冊`}
                  >
                    <BookOpen size={16} />
                    <span>觀念手冊</span>
                  </button>
                </div>

                {/* Nodes Winding Trail */}
                <div className="quest-path-trail">
                  {unit.nodes.map((node, nodeIdx) => {
                    const status = getNodeStatus(questState, node.id);
                    const isSelected = selectedNode?.id === node.id;
                    const isBoss = node.kind === 'boss';

                    // Sine wave horizontal offset for winding snake trail
                    const offsetAngles = [-42, 35, -28, 0];
                    const offsetX = offsetAngles[nodeIdx % 4];

                    return (
                      <div
                        key={node.id}
                        className="quest-node-row"
                        style={{ transform: `translateX(${offsetX}px)` }}
                      >
                        {status === 'available' && (
                          <div className="node-start-bubble">
                            <span>開始！</span>
                          </div>
                        )}

                        <button
                          type="button"
                          className={`quest-node-btn status-${status} ${isBoss ? 'is-boss' : ''} ${isSelected ? 'is-active' : ''}`}
                          onClick={() => {
                            if (status === 'locked') {
                              audioEngine.playGentleError();
                            } else {
                              audioEngine.playHaptic?.('selection');
                              setSelectedNode(node);
                            }
                          }}
                          aria-label={`${node.title} (${status})`}
                        >
                          <div className="node-inner-circle">
                            {status === 'locked' && <Lock size={22} className="lock-icon" />}
                            {status === 'available' && <span className="node-icon">{node.icon}</span>}
                            {status === 'completed' && <Check size={26} className="done-icon" />}
                            {status === 'crowned' && <span className="crown-icon">👑</span>}
                          </div>
                        </button>

                        <div className="quest-node-label-pill">
                          {node.title}
                        </div>

                        {/* Interactive Node Popover */}
                        {isSelected && (
                          <div className="quest-node-popover animate-pop-in">
                            <div className="popover-header">
                              <span className="popover-badge">
                                {isBoss ? '👑 單元終極挑戰 (3 顆心)' : '🌱 核心技能探索'}
                              </span>
                              <button
                                type="button"
                                className="popover-close-x"
                                onClick={() => setSelectedNode(null)}
                              >
                                <X size={16} />
                              </button>
                            </div>

                            <h3 className="popover-title">{node.title}</h3>
                            <p className="popover-desc">
                              {isBoss
                                ? '綜合本單元所有聽力、語序與詞彙，答錯扣愛心，通關即可榮獲單元金冠！'
                                : '以循序漸進的互動題型熟練本課知識，答錯將於課末重複演練，直到學會為止。'}
                            </p>

                            <div className="popover-reward-row">
                              <span className="reward-item">⚡ +{isBoss ? 30 : 15} XP</span>
                              {isBoss && <span className="reward-item">💎 +20 寶石</span>}
                              <span className="reward-item">🎯 {node.questions.length} 題精選</span>
                            </div>

                            <button
                              type="button"
                              className="popover-start-btn"
                              onClick={() => handleStartNode(node)}
                            >
                              <Play size={18} fill="currentColor" />
                              <span>{status === 'completed' || status === 'crowned' ? '重新複習' : '開始闖關'}</span>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* Active Interactive Lesson View */}
      {activeSession && currentQ && (
        <div className="quest-lesson-wrapper animate-fade-in">
          {/* Top Session Progress Bar & Hearts */}
          <div className="lesson-top-bar">
            <button
              type="button"
              className="lesson-exit-btn"
              onClick={() => {
                if (window.confirm('確定要暫停本次學習返回地圖嗎？')) {
                  setActiveSession(null);
                }
              }}
              title="離開"
            >
              <X size={20} />
            </button>

            <div className="lesson-progress-track">
              <div
                className="lesson-progress-fill"
                style={{
                  width: `${Math.min(100, Math.round((activeSession.currentIndex / activeSession.queue.length) * 100))}%`
                }}
              />
            </div>

            {activeSession.isBoss ? (
              <div className="lesson-hearts" title={`剩餘愛心: ${activeSession.hearts}`}>
                {Array.from({ length: MAX_HEARTS }).map((_, i) => (
                  <Heart
                    key={i}
                    size={20}
                    className={`heart-icon ${i < activeSession.hearts ? 'filled' : 'empty'}`}
                    fill={i < activeSession.hearts ? '#ef4444' : 'none'}
                  />
                ))}
              </div>
            ) : (
              <div className="lesson-mastery-tag" title="無死角精熟保證">
                <Shield size={16} />
                <span>精熟學習模式</span>
              </div>
            )}

            {activeSession.combo >= 2 && (
              <div className="lesson-combo-badge animate-bounce">
                <Flame size={16} />
                <span>x{activeSession.combo} 連擊</span>
              </div>
            )}
          </div>

          {/* Lesson Body */}
          <div className="lesson-content-card">
            {/* Out of Hearts Game Over */}
            {activeSession.outOfHearts ? (
              <div className="lesson-game-over-screen animate-fade-in">
                <div className="game-over-icon">💔</div>
                <h2>愛心已耗盡！</h2>
                <p>單元挑戰需要高度專注力。別氣餒，先回地圖複習基礎關卡，隨時可以再次挑戰！</p>
                <button
                  type="button"
                  className="quest-btn-primary"
                  onClick={() => setActiveSession(null)}
                >
                  返回學習地圖
                </button>
              </div>
            ) : (
              <>
                {/* Question Audio & Scaffolding Toolbar */}
                <div className="lesson-question-toolbar">
                  {currentQ.audioText && (
                    <div className="audio-control-pills">
                      <button
                        type="button"
                        className="audio-pill-btn"
                        onClick={() => handlePlayAudio(currentQ.audioText, false)}
                        title="標準真人語速朗讀"
                      >
                        <Volume2 size={18} />
                        <span>標準語音</span>
                      </button>

                      <button
                        type="button"
                        className="audio-pill-btn slow-btn"
                        onClick={() => handlePlayAudio(currentQ.audioText, true)}
                        title="0.65x 烏龜慢速朗讀，聽清聲調調型"
                      >
                        <Snail size={18} />
                        <span>慢速 (0.65x)</span>
                      </button>

                      {currentQ.type === 'listen' && (
                        <button
                          type="button"
                          className="audio-pill-btn transcript-btn"
                          onClick={() => setShowTranscript(prev => !prev)}
                        >
                          {showTranscript ? <EyeOff size={16} /> : <Eye size={16} />}
                          <span>{showTranscript ? '隱藏文字' : '文字提示'}</span>
                        </button>
                      )}
                    </div>
                  )}

                  <button
                    type="button"
                    className={`hint-toggle-btn ${showHint ? 'active' : ''}`}
                    onClick={() => setShowHint(prev => !prev)}
                    title="查看解題密技與文法指引"
                  >
                    <Lightbulb size={18} />
                    <span>{showHint ? '收起提示' : '💡 解題提示'}</span>
                  </button>
                </div>

                {/* Show Transcript if toggled */}
                {showTranscript && currentQ.audioText && (
                  <div className="transcript-box animate-fade-in">
                    <p className="transcript-text">{currentQ.audioText}</p>
                    <span className="transcript-note">⚠️ 建議遮住文字再聽一次，培養純聽覺語感！</span>
                  </div>
                )}

                {/* Pedagogical Hint Card ("適當提示 重點是 使其學會") */}
                {showHint && currentQ.hint && (
                  <div className="lesson-hint-card animate-fade-in">
                    <div className="hint-header">
                      <Lightbulb size={16} className="hint-icon" />
                      <strong>學習鷹架指引</strong>
                    </div>
                    <p className="hint-body">{currentQ.hint}</p>
                  </div>
                )}

                {/* Question Prompt */}
                <div className="lesson-prompt-area">
                  <h3 className="lesson-prompt-text">{currentQ.prompt}</h3>
                </div>

                {/* Interactive Question Types */}
                <div className="lesson-interactive-area">
                  {/* TYPE 1: Multiple Choice or Listening Choice */}
                  {(currentQ.type === 'choice' || currentQ.type === 'listen') && (
                    <div className="choice-options-grid">
                      {currentQ.options.map((opt, optIdx) => {
                        const isSelected = userAnswer === opt;
                        const keyLetter = String.fromCharCode(65 + optIdx);

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            className={`choice-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => {
                              if (feedback) return;
                              audioEngine.playHaptic?.('selection');
                              setUserAnswer(opt);
                            }}
                          >
                            <span className="choice-letter-badge">{keyLetter}</span>
                            <span className="choice-text">{opt}</span>
                            <span className="choice-key-hint">{optIdx + 1}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* TYPE 2: Sentence Building (拼句重組) */}
                  {currentQ.type === 'build' && (
                    <div className="build-interactive-box">
                      <div className="build-placed-zone">
                        {buildPlacedWords.length === 0 ? (
                          <span className="build-placeholder-text">點擊下方詞彙方塊，組裝出完整的句子</span>
                        ) : (
                          buildPlacedWords.map((word, wIdx) => (
                            <button
                              key={wIdx}
                              type="button"
                              className="build-chip placed animate-scale-up"
                              onClick={() => handleRemoveBuildWord(wIdx)}
                            >
                              {word}
                            </button>
                          ))
                        )}
                      </div>

                      <div className="build-pool-zone">
                        {availableBuildWords.map(({ word, idx, isUsed }) => (
                          <button
                            key={idx}
                            type="button"
                            className={`build-chip available ${isUsed ? 'disabled' : ''}`}
                            disabled={isUsed || !!feedback}
                            onClick={() => handleAddBuildWord(word, idx)}
                          >
                            {word}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TYPE 3: Match Pairs (詞彙配對) */}
                  {currentQ.type === 'match' && (
                    <div className="match-interactive-box">
                      <p className="match-guidance-note">
                        點擊左側越文與右側中文進行配對 ({matchedPairs.length} / {currentQ.pairs.length})
                      </p>
                      <div className="match-columns-grid">
                        <div className="match-col vi-col">
                          {matchOptions.viList.map((vi, idx) => {
                            const isMatched = matchedPairs.some(p => p[0] === vi);
                            const isSelected = matchSelectedVi === vi;
                            return (
                              <button
                                key={idx}
                                type="button"
                                className={`match-card vi-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                                disabled={isMatched || !!feedback}
                                onClick={() => handleSelectMatchVi(vi)}
                              >
                                <span>{vi}</span>
                                <Volume2 size={14} className="match-speak-icon" />
                              </button>
                            );
                          })}
                        </div>

                        <div className="match-col zh-col">
                          {matchOptions.zhList.map((zh, idx) => {
                            const isMatched = matchedPairs.some(p => p[1] === zh);
                            const isSelected = matchSelectedZh === zh;
                            return (
                              <button
                                key={idx}
                                type="button"
                                className={`match-card zh-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`}
                                disabled={isMatched || !!feedback}
                                onClick={() => handleSelectMatchZh(zh)}
                              >
                                <span>{zh}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TYPE 4: Input / Cloze (填空聽寫) */}
                  {currentQ.type === 'input' && (
                    <div className="input-interactive-box">
                      <input
                        ref={answerInputRef}
                        type="text"
                        className="quest-text-input"
                        placeholder="請在此輸入答案..."
                        value={userAnswer}
                        disabled={!!feedback}
                        onChange={(e) => setUserAnswer(e.target.value)}
                      />

                      {/* Quick Diacritics Bar for Typing Vietnamese easily */}
                      <div className="diacritics-quick-bar">
                        <span className="diacritics-label">聲調字母快速輸入：</span>
                        {['á', 'à', 'ả', 'ã', 'ạ', 'đ', 'ê', 'ơ', 'ư', 'ô', 'â'].map(char => (
                          <button
                            key={char}
                            type="button"
                            className="diacritic-key"
                            disabled={!!feedback}
                            onClick={() => {
                              setUserAnswer(prev => prev + char);
                              answerInputRef.current?.focus();
                            }}
                          >
                            {char}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Bottom Action / Feedback Footer */}
          {!activeSession.outOfHearts && (
            <footer className={`lesson-footer-bar ${feedback ? (feedback.isCorrect ? 'footer-correct' : 'footer-wrong') : ''}`}>
              {!feedback ? (
                <div className="footer-action-row">
                  <div className="footer-shortcut-hint">
                    提示：按鍵盤 <strong>Enter</strong> 即可送出檢查
                  </div>
                  <button
                    type="button"
                    className="quest-check-btn"
                    disabled={!canSubmitAnswer()}
                    onClick={handleSubmitAnswer}
                  >
                    <span>檢查答案</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              ) : (
                <div className="footer-feedback-row animate-slide-up">
                  <div className="feedback-content">
                    <div className="feedback-title-row">
                      {feedback.isCorrect ? (
                        <>
                          <CheckCircle2 size={24} className="feedback-icon correct" />
                          <span className="feedback-title correct">Xuất sắc! 太棒了，完全正確！</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={24} className="feedback-icon wrong" />
                          <span className="feedback-title wrong">Chưa đúng rồi! 正確答案是：<strong>{feedback.correctAnswer}</strong></span>
                        </>
                      )}
                    </div>
                    <p className="feedback-why">{feedback.why}</p>
                    <div className="feedback-audio-actions" style={{ margin: '0.4rem 0' }}>
                      <button
                        type="button"
                        className="audio-pill-btn"
                        style={{ padding: '0.25rem 0.65rem', fontSize: '0.78rem' }}
                        onClick={() => handlePlayAudio(currentQ.audioText, false)}
                      >
                        <Volume2 size={14} />
                        <span>再聽一次標準發音</span>
                      </button>
                      <button
                        type="button"
                        className="audio-pill-btn slow-btn"
                        style={{ padding: '0.25rem 0.65rem', fontSize: '0.78rem', marginLeft: '0.4rem' }}
                        onClick={() => handlePlayAudio(currentQ.audioText, true)}
                      >
                        <Snail size={14} />
                        <span>慢速 (0.65x)</span>
                      </button>
                    </div>
                    {!feedback.isCorrect && (
                      <p className="feedback-retry-promise">
                        💡 <strong>精熟保證：</strong>此題已加入課末練習佇列，稍後將再次挑戰，直到徹底掌握！
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    className={`feedback-continue-btn ${feedback.isCorrect ? 'correct' : 'wrong'}`}
                    onClick={handleNextQuestion}
                  >
                    <span>繼續</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </footer>
          )}
        </div>
      )}

      {/* Lesson Celebration Screen */}
      {completionData && (
        <div className="quest-completion-overlay animate-fade-in">
          <div className="completion-modal-card">
            <div className="celebration-mascot-row">
              <span className="celebration-emoji animate-bounce">🎉</span>
              <span className="celebration-mascot">🦉</span>
              <span className="celebration-emoji animate-bounce">🏆</span>
            </div>

            <h2 className="completion-title">
              {completionData.newCrown ? '👑 恭喜榮獲單元金冠！' : 'Bài học hoàn thành! 本課圓滿通關！'}
            </h2>
            <p className="completion-sub">
              {completionData.perfect
                ? '太神了！零失誤全對通關，獲得完美答題獎勵！'
                : '成功克服難題，將錯誤轉化為真實能力，徹底學會了本課核心！'}
            </p>

            <div className="completion-stats-grid">
              <div className="stat-card xp-stat">
                <span className="stat-label">獲得經驗</span>
                <span className="stat-val">+{completionData.xpGained} XP</span>
              </div>
              <div className="stat-card acc-stat">
                <span className="stat-label">首次精準度</span>
                <span className="stat-val">{completionData.accuracy}%</span>
              </div>
              <div className="stat-card gem-stat">
                <span className="stat-label">獲得寶石</span>
                <span className="stat-val">+{completionData.gemsGained} 💎</span>
              </div>
            </div>

            <button
              type="button"
              className="completion-done-btn"
              onClick={() => {
                setCompletionData(null);
                setActiveSession(null);
              }}
            >
              <span>繼續下一站旅程</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Guidebook Modal (觀念手冊) */}
      {guideUnit && (
        <div className="quest-modal-backdrop" onClick={() => setGuideUnit(null)}>
          <div className="quest-modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>📖 {guideUnit.title} · 核心觀念手冊</h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setGuideUnit(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <section className="guide-section">
                <h3>📌 核心文法精講</h3>
                <p>{guideUnit.guide.keyGrammar}</p>
              </section>

              <section className="guide-section">
                <h3>🎵 聲調與發音提點</h3>
                <p>{guideUnit.guide.toneTip}</p>
              </section>

              <section className="guide-section">
                <h3>💬 情境示範對話</h3>
                <div className="guide-dialogue-list">
                  {guideUnit.guide.dialogue.map((line, i) => (
                    <div key={i} className="guide-dialogue-row">
                      <button
                        type="button"
                        className="guide-speak-btn"
                        onClick={() => handlePlayAudio(line.vi, false)}
                        title="朗讀"
                      >
                        <Volume2 size={16} />
                      </button>
                      <div className="dialogue-text-group">
                        <span className="speaker-name">{line.speaker}:</span>
                        <span className="vi-text">{line.vi}</span>
                        <span className="zh-text">{line.zh}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {/* Mistakes Spaced Review Modal */}
      {showMistakesReview && (
        <div className="quest-modal-backdrop" onClick={() => setShowMistakesReview(false)}>
          <div className="quest-modal-card" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🧠 錯題間隔複習庫 ({mistakesCount} 題)</h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowMistakesReview(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <p className="mistakes-intro">
                系統根據間隔重複 (Spaced Repetition) 演算法記錄你的盲點。複習強化這些題目，能將短期記憶轉化為大腦神經元長期直覺！
              </p>

              <div className="mistakes-list">
                {Object.entries(questState.mistakesBank || {}).map(([qId, record]) => {
                  const q = record.q;
                  if (!q) return null;
                  return (
                    <div key={qId} className="mistake-item-card">
                      <div className="mistake-item-header">
                        <span className="mistake-type-badge">{q.type}</span>
                        <span className="mistake-count-badge">已錯過 {record.count} 次</span>
                        {q.audioText && (
                          <button
                            type="button"
                            className="mistake-speak-btn"
                            onClick={() => handlePlayAudio(q.audioText, false)}
                          >
                            <Volume2 size={16} />
                          </button>
                        )}
                      </div>
                      <p className="mistake-prompt">{q.prompt}</p>
                      <p className="mistake-answer">正解：<strong>{q.answer}</strong></p>
                      <p className="mistake-why">{q.why}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
