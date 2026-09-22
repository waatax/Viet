import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles, Volume2, Play, Pause, RotateCw, CheckCircle2,
  XCircle, Award, BookOpen, Layers, MessageSquare, ChevronRight,
  ChevronLeft, HelpCircle, ShieldCheck, Zap, Globe, ArrowRight,
  ThumbsUp, ThumbsDown, Star, Check
} from 'lucide-react';
import { SITUATIONAL_TOPICS } from '../data/situationalTopicsData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { srsEngine } from '../services/srsEngine';
import './TopicMasteryModule.css';

const getCategoryIcon = (category = '') => {
  const c = (category || '').toLowerCase();
  if (c.includes('問候') || c.includes('尊稱')) return '🤝';
  if (c.includes('破冰') || c.includes('金句')) return '🌟';
  if (c.includes('名片')) return '📇';
  if (c.includes('點餐') || c.includes('菜單')) return '🍜';
  if (c.includes('要求') || c.includes('備註')) return '🛎️';
  if (c.includes('稱謂') || c.includes('長幼')) return '👨‍👩‍👦';
  if (c.includes('症狀') || c.includes('病')) return '🤒';
  if (c.includes('就醫') || c.includes('藥')) return '💊';
  if (c.includes('日期') || c.includes('星期') || c.includes('月份')) return '📅';
  if (c.includes('時間') || c.includes('停留')) return '⏳';
  if (c.includes('問價') || c.includes('價格')) return '🏷️';
  if (c.includes('殺價') || c.includes('折扣')) return '💵';
  if (c.includes('結帳') || c.includes('買單')) return '💳';
  if (c.includes('數字') || c.includes('計數')) return '🔢';
  if (c.includes('量詞')) return '📦';
  return '💡';
};

const getTopicSpeakerVisual = (speaker = '', topicId = '', lineIndex = 0, learningMode = 'zh') => {
  const s = (speaker || '').toLowerCase();
  const isSpeakerB = lineIndex % 2 === 1;

  if (!isSpeakerB) {
    // Speaker A (Learner / Visitor / Customer)
    if (topicId === 'business_greeting' || s.includes('đài loan') || s.includes('khách')) {
      return { icon: '💼', role: learningMode === 'zh' ? '商務代表 (明先生)' : 'Project Manager (Minh)', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'dining' || s.includes('khách')) {
      return { icon: '🍜', role: learningMode === 'zh' ? '用餐顧客' : 'Diner', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'family') {
      return { icon: '🧑', role: learningMode === 'zh' ? '外國朋友' : 'Friend', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'health') {
      return { icon: '🤒', role: learningMode === 'zh' ? '身體不適者' : 'Patient', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'date_time') {
      return { icon: '✈️', role: learningMode === 'zh' ? '自由行旅客' : 'Traveler', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'price_bargain') {
      return { icon: '🛍️', role: learningMode === 'zh' ? '市集買家' : 'Shopper', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    if (topicId === 'numbers_math') {
      return { icon: '🔢', role: learningMode === 'zh' ? '詢價採購' : 'Buyer', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
    }
    return { icon: '🎒', role: learningMode === 'zh' ? '學習者' : 'Learner', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.15)' };
  } else {
    // Speaker B (Local Host / Vendor / Specialist)
    if (topicId === 'business_greeting' || s.includes('giám đốc')) {
      return { icon: '👔', role: learningMode === 'zh' ? '總經理 (Nam 總)' : 'Director Nam', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'dining' || s.includes('phục vụ') || s.includes('quán')) {
      return { icon: '👨‍🍳', role: learningMode === 'zh' ? '店員 / 跑堂' : 'Server', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'family' || s.includes('bạn')) {
      return { icon: '👩', role: learningMode === 'zh' ? '在地越南朋友' : 'Local Friend', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'health' || s.includes('bác sĩ') || s.includes('dược sĩ')) {
      return { icon: '👨‍⚕️', role: learningMode === 'zh' ? '主治醫師 / 藥師' : 'Doctor / Pharmacist', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'date_time' || s.includes('lễ tân')) {
      return { icon: '🏨', role: learningMode === 'zh' ? '飯店前台櫃檯' : 'Hotel Front Desk', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'price_bargain' || s.includes('chủ quán') || s.includes('bán')) {
      return { icon: '🛒', role: learningMode === 'zh' ? '市場熱情攤主' : 'Market Vendor', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    if (topicId === 'numbers_math') {
      return { icon: '🧮', role: learningMode === 'zh' ? '收銀會計' : 'Accountant', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
    }
    return { icon: '🇻🇳', role: learningMode === 'zh' ? '在地母語者' : 'Local Host', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' };
  }
};

export const TopicMasteryModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode, t } = useLanguage();

  // Active Topic
  const [activeTopicId, setActiveTopicId] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.topicId) {
          sessionStorage.removeItem('viet_target_chapter');
          return item.targetParam.topicId;
        }
      }
    } catch {}
    return 'business_greeting';
  });

  // Active View Tab: 'quick' | 'dialogue' | 'flashcards' | 'quiz'
  const [activeView, setActiveView] = useState('quick');

  // Accent & Speed
  const [accent, setAccent] = useState(selectedAccent);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  // Active playing state from AudioEngine
  const [audioState, setAudioState] = useState({ isPlaying: false, activeKey: null });

  // Dialogue state
  const [activeDialogueIndex, setActiveDialogueIndex] = useState(0);
  const [isPlayingConversation, setIsPlayingConversation] = useState(false);
  const isPlayingConversationRef = useRef(false);
  const convTimerRef = useRef(null);

  // Quick Study Play All state
  const [isPlayingSurvival, setIsPlayingSurvival] = useState(false);
  const isPlayingSurvivalRef = useRef(false);
  const survivalTimerRef = useRef(null);

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [audioFirstMode, setAudioFirstMode] = useState(false);
  const [isAutoplayingDeck, setIsAutoplayingDeck] = useState(false);
  const isAutoplayingDeckRef = useRef(false);
  const deckTimerRef = useRef(null);

  // Quiz state
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Subscribe to AudioEngine state
  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setAudioState({ isPlaying: state.isPlaying, activeKey: state.activeKey });
    });
    return () => {
      unsubscribe();
      stopAllSequences();
    };
  }, []);

  // Sync external accent changes
  useEffect(() => {
    setAccent(selectedAccent);
  }, [selectedAccent]);

  // Handle cross-module jump events
  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.topicId) {
        setActiveTopicId(chap.targetParam.topicId);
        if (chap.targetParam.view) setActiveView(chap.targetParam.view);
      }
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  // Stop any running playback sequences
  const stopAllSequences = () => {
    isPlayingConversationRef.current = false;
    isPlayingSurvivalRef.current = false;
    isAutoplayingDeckRef.current = false;
    if (convTimerRef.current) clearTimeout(convTimerRef.current);
    if (survivalTimerRef.current) clearTimeout(survivalTimerRef.current);
    if (deckTimerRef.current) clearTimeout(deckTimerRef.current);
    audioEngine.stop();
    setIsPlayingConversation(false);
    setIsPlayingSurvival(false);
    setIsAutoplayingDeck(false);
  };

  // Reset indices when switching topic
  useEffect(() => {
    stopAllSequences();
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
    setActiveDialogueIndex(0);
    setSelectedAnswer(null);
    setQuizSubmitted(false);
  }, [activeTopicId]);

  const currentTopic = SITUATIONAL_TOPICS.find(t => t.id === activeTopicId) || SITUATIONAL_TOPICS[0];

  // Play single Vietnamese text
  const handleSpeak = (text, key) => {
    stopAllSequences();
    audioEngine.playHaptic('tap');
    audioEngine.speak(text, {
      accent,
      rate: playbackSpeed,
      key: key || text
    });
  };

  // --- Quick Study: Play all survival phrases sequentially ---
  const playSurvivalInSequence = (index) => {
    const list = currentTopic.quickGuide?.survivalTable || [];
    if (!isPlayingSurvivalRef.current || index >= list.length) {
      setIsPlayingSurvival(false);
      isPlayingSurvivalRef.current = false;
      return;
    }

    const item = list[index];
    audioEngine.speak(item.viet, {
      accent,
      rate: playbackSpeed,
      key: `survival_${activeTopicId}_${index}`,
      onEnd: () => {
        if (!isPlayingSurvivalRef.current) return;
        survivalTimerRef.current = setTimeout(() => {
          if (isPlayingSurvivalRef.current) playSurvivalInSequence(index + 1);
        }, 1200);
      }
    });
  };

  const togglePlaySurvival = () => {
    if (isPlayingSurvival) {
      stopAllSequences();
    } else {
      stopAllSequences();
      setIsPlayingSurvival(true);
      isPlayingSurvivalRef.current = true;
      playSurvivalInSequence(0);
    }
  };

  // --- Dialogue: Play full conversation sequentially ---
  const currentDialogue = currentTopic.dialogues?.[activeDialogueIndex] || currentTopic.dialogues?.[0];

  const playDialogueInSequence = (lineIndex) => {
    const lines = currentDialogue?.lines || [];
    if (!isPlayingConversationRef.current || lineIndex >= lines.length) {
      setIsPlayingConversation(false);
      isPlayingConversationRef.current = false;
      return;
    }

    const line = lines[lineIndex];
    audioEngine.speak(line.viet, {
      accent,
      rate: playbackSpeed,
      key: `dialogue_${currentDialogue.id}_${lineIndex}`,
      onEnd: () => {
        if (!isPlayingConversationRef.current) return;
        convTimerRef.current = setTimeout(() => {
          if (isPlayingConversationRef.current) playDialogueInSequence(lineIndex + 1);
        }, 1000);
      }
    });
  };

  const togglePlayConversation = () => {
    if (isPlayingConversation) {
      stopAllSequences();
    } else {
      stopAllSequences();
      setIsPlayingConversation(true);
      isPlayingConversationRef.current = true;
      playDialogueInSequence(0);
    }
  };

  // --- Flashcards: Autoplay Deck ---
  const currentDeck = currentTopic.flashcardDeck || [];
  const currentCard = currentDeck[currentCardIndex] || currentDeck[0];

  const playDeckInSequence = (cardIdx, step = 'front') => {
    if (!isAutoplayingDeckRef.current || cardIdx >= currentDeck.length) {
      setIsAutoplayingDeck(false);
      isAutoplayingDeckRef.current = false;
      return;
    }

    setCurrentCardIndex(cardIdx);
    const card = currentDeck[cardIdx];

    if (step === 'front') {
      setIsCardFlipped(false);
      audioEngine.speak(card.viet, {
        accent,
        rate: playbackSpeed,
        key: `fc_viet_${card.id}`,
        onEnd: () => {
          if (!isAutoplayingDeckRef.current) return;
          deckTimerRef.current = setTimeout(() => {
            if (isAutoplayingDeckRef.current) {
              setIsCardFlipped(true);
              playDeckInSequence(cardIdx, 'back');
            }
          }, 800);
        }
      });
    } else {
      const nativeMeaning = learningMode === 'zh' ? card.zh : card.en;
      audioEngine.speak(nativeMeaning, {
        lang: learningMode === 'zh' ? 'zh' : 'en',
        rate: 1.0,
        key: `fc_native_${card.id}`,
        onEnd: () => {
          if (!isAutoplayingDeckRef.current) return;
          deckTimerRef.current = setTimeout(() => {
            if (isAutoplayingDeckRef.current) {
              playDeckInSequence(cardIdx + 1, 'front');
            }
          }, 1400);
        }
      });
    }
  };

  const toggleAutoplayDeck = () => {
    if (isAutoplayingDeck) {
      stopAllSequences();
    } else {
      stopAllSequences();
      setIsAutoplayingDeck(true);
      isAutoplayingDeckRef.current = true;
      playDeckInSequence(currentCardIndex, 'front');
    }
  };

  // Rate Flashcard with SRS
  const handleRateCard = (rating) => {
    audioEngine.playHaptic('tap');
    if (currentCard && srsEngine) {
      srsEngine.recordReview(currentCard.id, rating);
    }
    if (updateUserStats) {
      updateUserStats(prev => ({ ...prev, xp: prev.xp + 5 }));
    }
    setIsCardFlipped(false);
    if (currentCardIndex < currentDeck.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  // Quiz submission
  const handleOptionSelect = (idx) => {
    if (quizSubmitted) return;
    setSelectedAnswer(idx);
    setQuizSubmitted(true);
    const isCorrect = idx === currentTopic.quiz?.answer;
    if (isCorrect) {
      audioEngine.playHaptic('success');
      if (updateUserStats) {
        updateUserStats(prev => ({ ...prev, xp: prev.xp + 25 }));
      }
    } else {
      audioEngine.playHaptic('warning');
    }
  };

  return (
    <div className="topics-mastery-container">
      {/* 1. 英雄旗艦專區 */}
      <section className="topics-hero">
        <div className="topics-hero-content">
          <div className="topics-hero-badge">
            <Sparkles size={15} />
            <span>{learningMode === 'zh' ? '7大核心情境專題深造' : '7 Situational Mastery Tracks'}</span>
          </div>

          <h1 className="topics-hero-title">
            <span>{currentTopic.icon}</span>
            <span>{learningMode === 'zh' ? currentTopic.titleZh : currentTopic.titleEn}</span>
            <small style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600 }}>({currentTopic.titleVi})</small>
          </h1>

          <p className="topics-hero-desc">
            {learningMode === 'zh' ? currentTopic.summaryZh : currentTopic.summaryEn}
          </p>

          {/* 全域聲學控制列 */}
          <div className="topics-global-controls">
            {/* 口音切換 */}
            <div className="topics-control-group">
              <span className="topics-ctrl-label">{learningMode === 'zh' ? '發音腔調:' : 'Dialect:'}</span>
              <button
                className={`topics-toggle-btn ${accent === 'north' ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setAccent('north'); }}
              >
                {learningMode === 'zh' ? '北越 (河內)' : 'North (Hanoi)'}
              </button>
              <button
                className={`topics-toggle-btn ${accent === 'south' ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setAccent('south'); }}
              >
                {learningMode === 'zh' ? '南越 (西貢)' : 'South (Saigon)'}
              </button>
            </div>

            {/* 語速切換 */}
            <div className="topics-control-group">
              <span className="topics-ctrl-label">{learningMode === 'zh' ? '語速:' : 'Speed:'}</span>
              <button
                className={`topics-toggle-btn ${playbackSpeed === 0.75 ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setPlaybackSpeed(0.75); }}
              >
                0.75x
              </button>
              <button
                className={`topics-toggle-btn ${playbackSpeed === 1.0 ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setPlaybackSpeed(1.0); }}
              >
                1.0x
              </button>
              <button
                className={`topics-toggle-btn ${playbackSpeed === 1.25 ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setPlaybackSpeed(1.25); }}
              >
                1.25x
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 7大情境專題橫向導覽切換列 */}
      <nav className="topics-nav-bar" aria-label="Situational Topics">
        {SITUATIONAL_TOPICS.map((topic) => {
          const isActive = topic.id === activeTopicId;
          return (
            <button
              key={topic.id}
              className={`topic-nav-tab ${isActive ? 'active' : ''}`}
              onClick={() => {
                audioEngine.playHaptic('selection');
                setActiveTopicId(topic.id);
              }}
            >
              <span className="topic-tab-icon">{topic.icon}</span>
              <span>{learningMode === 'zh' ? topic.titleZh : topic.titleEn}</span>
              <span className="topic-tab-badge">{learningMode === 'zh' ? topic.badgeZh : topic.badgeEn}</span>
            </button>
          );
        })}
      </nav>

      {/* 3. 4大學習視圖分頁切換列 */}
      <div className="topics-view-tabs" role="tablist">
        <button
          className={`view-sub-tab ${activeView === 'quick' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setActiveView('quick'); }}
        >
          <Zap size={16} />
          <span>{learningMode === 'zh' ? '⚡ 快速學習' : '⚡ Quick Study'}</span>
        </button>
        <button
          className={`view-sub-tab ${activeView === 'dialogue' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setActiveView('dialogue'); }}
        >
          <MessageSquare size={16} />
          <span>{learningMode === 'zh' ? '📖 深度會話' : '📖 Dialogues'}</span>
        </button>
        <button
          className={`view-sub-tab ${activeView === 'flashcards' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setActiveView('flashcards'); }}
        >
          <Layers size={16} />
          <span>{learningMode === 'zh' ? '🎴 複習閃卡' : '🎴 Flashcards'}</span>
        </button>
        <button
          className={`view-sub-tab ${activeView === 'quiz' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setActiveView('quiz'); }}
        >
          <Award size={16} />
          <span>{learningMode === 'zh' ? '🎯 實戰測驗' : '🎯 Mastery Quiz'}</span>
        </button>
      </div>

      {/* 4. 專題主體內容區 */}
      <div className="topic-content-body">
        {/* ========================================================
            VIEW 1: 快速學習速查 (Quick Study)
           ======================================================== */}
        {activeView === 'quick' && (
          <div className="quick-study-section">
            <div className="quick-study-header">
              <div className="quick-study-tagline">
                <Sparkles size={18} />
                <span>{currentTopic.quickGuide?.taglineZh}</span>
              </div>
              <button
                className="play-all-btn"
                onClick={togglePlaySurvival}
              >
                {isPlayingSurvival ? <Pause size={16} /> : <Play size={16} />}
                <span>
                  {isPlayingSurvival
                    ? (learningMode === 'zh' ? '暫停連續朗讀' : 'Pause Autoplay')
                    : (learningMode === 'zh' ? '全篇金句依序朗讀' : 'Play All Phrases')}
                </span>
              </button>
            </div>

            {/* 三秒救急生存字卡列表 */}
            <div className="survival-grid">
              {currentTopic.quickGuide?.survivalTable.map((item, idx) => {
                const key = `survival_${activeTopicId}_${idx}`;
                const isPlaying = audioState.isPlaying && audioState.activeKey === key;
                return (
                  <div key={idx} className={`survival-card ${isPlaying ? 'playing' : ''}`}>
                    <div className="survival-card-top">
                      <span className="survival-category-badge">
                        <span>{getCategoryIcon(item.category)}</span>
                        <span>{item.category}</span>
                      </span>
                      <button
                        className={`audio-icon-btn ${isPlaying ? 'playing' : ''}`}
                        onClick={() => handleSpeak(item.viet, key)}
                        title={learningMode === 'zh' ? '聆聽道地發音' : 'Listen pronunciation'}
                      >
                        <Volume2 size={18} />
                      </button>
                    </div>

                    <div className="survival-viet-text">{item.viet}</div>
                    <div className="survival-pronun-text">🔊 {item.pronunciation}</div>
                    <div className="survival-meaning-text">
                      {learningMode === 'zh' ? item.zh : item.en}
                    </div>
                    {item.hanViet && (
                      <div className="survival-hanviet-text">📖 漢越拆解: {item.hanViet}</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* 核心句型公式 */}
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <BookOpen size={20} color="var(--brand-gold)" />
              <span>{learningMode === 'zh' ? '萬用黃金句型公式' : 'Essential Sentence Formulas'}</span>
            </h3>
            <div className="formula-cards-grid">
              {currentTopic.quickGuide?.sentencePatterns.map((pat, idx) => {
                const key = `formula_${activeTopicId}_${idx}`;
                const isPlaying = audioState.isPlaying && audioState.activeKey === key;
                return (
                  <div key={idx} className="formula-card">
                    <div className="formula-pattern">{pat.pattern}</div>
                    <div className="formula-meaning">{pat.meaningZh}</div>
                    <div className="formula-example-box">
                      <div>
                        <strong style={{ color: 'var(--text-primary)' }}>{pat.example}</strong>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{pat.exampleZh}</div>
                      </div>
                      <button
                        className={`audio-icon-btn ${isPlaying ? 'playing' : ''}`}
                        onClick={() => handleSpeak(pat.example, key)}
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 文化眉角 Do's and Don'ts */}
            <div className="culture-tip-card">
              <div className="culture-tip-title">
                <ShieldCheck size={22} />
                <span>{learningMode === 'zh' ? '文化眉角與地雷指南' : 'Cultural Etiquette & Pitfalls'}</span>
              </div>
              <div className="culture-dos-donts-grid">
                <div className="culture-box dos">
                  <div className="culture-box-label">
                    <ThumbsUp size={16} />
                    <span>DO - 推薦做法</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    {currentTopic.quickGuide?.culturalDosAndDonts.dos}
                  </p>
                </div>
                <div className="culture-box donts">
                  <div className="culture-box-label">
                    <ThumbsDown size={16} />
                    <span>DON'T - 切忌禁忌</span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                    {currentTopic.quickGuide?.culturalDosAndDonts.donts}
                  </p>
                </div>
              </div>
              <div className="culture-protip-banner">
                {currentTopic.quickGuide?.culturalDosAndDonts.proTipZh}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 2: 深度情境對話 (In-Depth Dialogues)
           ======================================================== */}
        {activeView === 'dialogue' && (
          <div className="dialogue-section">
            {/* 對話切換列 */}
            <div className="dialogue-switcher">
              {currentTopic.dialogues?.map((diag, idx) => (
                <button
                  key={diag.id}
                  className={`dialogue-tab-btn ${idx === activeDialogueIndex ? 'active' : ''}`}
                  onClick={() => {
                    stopAllSequences();
                    audioEngine.playHaptic('tap');
                    setActiveDialogueIndex(idx);
                  }}
                >
                  <span>{diag.titleZh}</span>
                </button>
              ))}
            </div>

            {/* 對話卡片 */}
            <div className="dialogue-card-main">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
                  {currentDialogue.titleZh}
                  <small style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                    {currentDialogue.titleEn}
                  </small>
                </h3>
                <button
                  className="play-all-btn"
                  onClick={togglePlayConversation}
                >
                  {isPlayingConversation ? <Pause size={16} /> : <Play size={16} />}
                  <span>
                    {isPlayingConversation
                      ? (learningMode === 'zh' ? '暫停對話播放' : 'Pause Dialogue')
                      : (learningMode === 'zh' ? '播放全篇連續對話' : 'Play Full Dialogue')}
                  </span>
                </button>
              </div>

              {/* 雙角色對話氣泡流 */}
              <div className="dialogue-chat-stream">
                {currentDialogue.lines.map((line, lIdx) => {
                  const key = `dialogue_${currentDialogue.id}_${lIdx}`;
                  const isPlaying = audioState.isPlaying && audioState.activeKey === key;
                  const isSpeakerB = lIdx % 2 === 1;
                  const speakerVisual = getTopicSpeakerVisual(line.speaker, activeTopicId, lIdx, learningMode);

                  return (
                    <div
                      key={lIdx}
                      className={`chat-bubble-row ${isSpeakerB ? 'speaker-b' : 'speaker-a'} ${isPlaying ? 'playing' : ''}`}
                    >
                      <div 
                        className="chat-avatar"
                        style={{
                          fontSize: '1.4rem',
                          border: `2px solid ${speakerVisual.color}`,
                          background: speakerVisual.bg,
                          boxShadow: isPlaying ? `0 0 12px ${speakerVisual.color}` : 'none'
                        }}
                        title={`${line.speaker} (${speakerVisual.role})`}
                      >
                        {speakerVisual.icon}
                      </div>
                      <div className="chat-bubble-body">
                        <div className="chat-speaker-header" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
                          <span className="chat-speaker-name">{line.speaker}</span>
                          <span 
                            className="chat-role-chip" 
                            style={{ 
                              fontSize: '0.72rem', 
                              padding: '0.1rem 0.5rem', 
                              borderRadius: '999px', 
                              border: `1px solid ${speakerVisual.color}`, 
                              color: speakerVisual.color,
                              background: speakerVisual.bg,
                              fontWeight: 700 
                            }}
                          >
                            <span>{speakerVisual.icon}</span>
                            <span>{speakerVisual.role}</span>
                          </span>
                        </div>
                        <div className="chat-viet-text">
                          <span>{line.viet}</span>
                          <button
                            className={`audio-icon-btn ${isPlaying ? 'playing' : ''}`}
                            onClick={() => handleSpeak(line.viet, key)}
                          >
                            <Volume2 size={16} />
                          </button>
                        </div>
                        <div className="chat-meaning-text">
                          {learningMode === 'zh' ? line.zh : line.en}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 深度教研摺疊筆記 */}
              <div className="deep-lessons-box">
                <div className="deep-lessons-title">
                  <BookOpen size={20} />
                  <span>{learningMode === 'zh' ? '語法深度探索與南北音差異' : 'Grammar & Dialect Notes'}</span>
                </div>

                {currentTopic.deepLessons?.grammarExploration.map((g, gIdx) => (
                  <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--brand-gold)' }}>📌 {g.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{g.content}</p>
                  </div>
                ))}

                {/* 漢越詞對照表 */}
                {currentTopic.deepLessons?.hanVietCognates && (
                  <div>
                    <h4 style={{ fontWeight: 800, fontSize: '1rem', color: '#a855f7', marginTop: '0.5rem' }}>
                      📚 本專題核心漢越詞彙速查表 (Han-Viet Cognates)
                    </h4>
                    <table className="hanviet-table">
                      <thead>
                        <tr>
                          <th>越文詞彙 (Từ ngữ)</th>
                          <th>漢字來源 (Chữ Hán)</th>
                          <th>中文意涵 (Ý nghĩa)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentTopic.deepLessons.hanVietCognates.map((c, cIdx) => (
                          <tr key={cIdx}>
                            <td style={{ fontWeight: 800, color: 'var(--text-primary)' }}>
                              <button
                                style={{ background: 'none', border: 'none', color: 'inherit', font: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
                                onClick={() => handleSpeak(c.viet, `han_${c.viet}`)}
                              >
                                <Volume2 size={14} color="var(--brand-emerald)" />
                                <span>{c.viet}</span>
                              </button>
                            </td>
                            <td style={{ color: '#a855f7', fontWeight: 700 }}>{c.han}</td>
                            <td style={{ color: 'var(--text-secondary)' }}>{c.zh}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* 南北越口音說明 */}
                {currentTopic.deepLessons?.regionalDifferences && (
                  <div style={{ background: 'rgba(56, 189, 248, 0.08)', padding: '0.85rem 1rem', borderRadius: '10px', borderLeft: '4px solid #38bdf8' }}>
                    <strong style={{ color: '#38bdf8' }}>🗺️ 北越 (河內) vs 南越 (西貢) 習慣差異：</strong>
                    <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.3rem', lineHeight: 1.5 }}>
                      {currentTopic.deepLessons.regionalDifferences}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 3: 專題複習閃卡 (Interactive Flashcards)
           ======================================================== */}
        {activeView === 'flashcards' && (
          <div className="flashcards-section">
            {/* 頂部閃卡操作列 */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '540px' }}>
              <div style={{ fontWeight: 800, color: 'var(--text-secondary)' }}>
                卡片 {currentCardIndex + 1} / {currentDeck.length}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="topics-toggle-btn"
                  style={{ background: audioFirstMode ? 'var(--brand-emerald)' : 'rgba(255,255,255,0.08)', color: '#ffffff' }}
                  onClick={() => setAudioFirstMode(prev => !prev)}
                >
                  {audioFirstMode ? '🎧 聽力先決: 開' : '🎧 聽力先決: 關'}
                </button>
                <button
                  className="play-all-btn"
                  style={{ padding: '0.4rem 0.85rem', fontSize: '0.82rem' }}
                  onClick={toggleAutoplayDeck}
                >
                  {isAutoplayingDeck ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isAutoplayingDeck ? '暫停巡迴' : '自動巡迴朗讀'}</span>
                </button>
              </div>
            </div>

            {/* 3D 翻轉卡片 */}
            <div
              className="flashcard-wrapper"
              onClick={() => {
                audioEngine.playHaptic('tap');
                setIsCardFlipped(prev => !prev);
              }}
            >
              <div className={`flashcard-inner ${isCardFlipped ? 'is-flipped' : ''}`}>
                {/* 正面 (Front) */}
                <div className="flashcard-face flashcard-front">
                  <div className="fc-badge-row">
                    <span className="fc-tone-tag">聲調: {currentCard.toneType || 'ngang'}</span>
                    <button
                      className="audio-icon-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(currentCard.viet, `fc_viet_${currentCard.id}`);
                      }}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>

                  <div className="fc-center-text">
                    <div className="fc-viet-word">
                      {audioFirstMode && !isCardFlipped ? '🎧 (請點擊聆聽)' : currentCard.viet}
                    </div>
                    {currentCard.hanViet && (
                      <span style={{ color: '#a855f7', fontWeight: 700, fontSize: '0.95rem' }}>
                        漢越: {currentCard.hanViet}
                      </span>
                    )}
                  </div>

                  <div className="fc-bottom-tip">
                    <RotateCw size={14} />
                    <span>點擊卡片翻轉查看釋義</span>
                  </div>
                </div>

                {/* 背面 (Back) */}
                <div className="flashcard-face flashcard-back">
                  <div className="fc-badge-row">
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#10b981' }}>中文/英文釋義</span>
                    <button
                      className="audio-icon-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSpeak(currentCard.viet, `fc_viet_${currentCard.id}`);
                      }}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>

                  <div className="fc-center-text">
                    <div className="fc-meaning-text">
                      {learningMode === 'zh' ? currentCard.zh : currentCard.en}
                    </div>
                    <div className="fc-hint-text">
                      💡 {currentCard.hintZh}
                    </div>
                  </div>

                  <div className="fc-bottom-tip">
                    <RotateCw size={14} />
                    <span>再次點擊翻回正面</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 左右導覽切換 */}
            <div className="flashcard-nav-controls">
              <button
                className="fc-round-nav-btn"
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  setIsCardFlipped(false);
                  setCurrentCardIndex(prev => (prev > 0 ? prev - 1 : currentDeck.length - 1));
                }}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '0.75rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  setIsCardFlipped(prev => !prev);
                }}
              >
                翻轉卡片 (Flip)
              </button>

              <button
                className="fc-round-nav-btn"
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  setIsCardFlipped(false);
                  setCurrentCardIndex(prev => (prev < currentDeck.length - 1 ? prev + 1 : 0));
                }}
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* SRS 間隔重複評分按鈕 */}
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                記錄記憶程度（獲得 +5 XP）：
              </div>
              <div className="fc-srs-rating-row">
                <button className="srs-btn again" onClick={() => handleRateCard('again')}>❌ 又忘了 (Again)</button>
                <button className="srs-btn hard" onClick={() => handleRateCard('hard')}>⚠️ 有點難 (Hard)</button>
                <button className="srs-btn good" onClick={() => handleRateCard('good')}>👍 記住了 (Good)</button>
                <button className="srs-btn easy" onClick={() => handleRateCard('easy')}>⭐ 超簡單 (Easy)</button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW 4: 實戰理解測驗 (Mastery Quiz)
           ======================================================== */}
        {activeView === 'quiz' && (
          <div className="quiz-section">
            <div className="quiz-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--brand-gold)', fontWeight: 800 }}>
                <Award size={20} />
                <span>情境理解檢測（答對獎勵 +25 XP）</span>
              </div>

              <div className="quiz-question-title">
                {learningMode === 'zh' ? currentTopic.quiz?.questionZh : currentTopic.quiz?.questionEn}
              </div>

              <div className="quiz-options-grid">
                {currentTopic.quiz?.optionsZh.map((opt, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const isCorrect = idx === currentTopic.quiz.answer;
                  let btnClass = '';
                  if (quizSubmitted) {
                    if (isCorrect) btnClass = 'correct';
                    else if (isSelected) btnClass = 'incorrect';
                  }

                  return (
                    <button
                      key={idx}
                      className={`quiz-option-btn ${btnClass}`}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={quizSubmitted}
                    >
                      <span>{learningMode === 'zh' ? opt : currentTopic.quiz.optionsEn[idx]}</span>
                      {quizSubmitted && isCorrect && <CheckCircle2 size={20} color="#10b981" />}
                      {quizSubmitted && isSelected && !isCorrect && <XCircle size={20} color="#ef4444" />}
                    </button>
                  );
                })}
              </div>

              {/* 答案詳解 */}
              {quizSubmitted && (
                <div className={`quiz-explanation-box ${selectedAnswer === currentTopic.quiz.answer ? 'correct' : 'wrong'}`}>
                  <div className="quiz-explanation-title">
                    {selectedAnswer === currentTopic.quiz.answer ? (
                      <>
                        <CheckCircle2 size={20} />
                        <span>恭喜答對！獲得 +25 XP</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={20} />
                        <span>再接再厲！正確答案是：選項 {['A', 'B', 'C', 'D'][currentTopic.quiz.answer]}</span>
                      </>
                    )}
                  </div>
                  <div className="quiz-explanation-desc">
                    {learningMode === 'zh' ? currentTopic.quiz.explainZh : currentTopic.quiz.explainEn}
                  </div>
                  <div style={{ marginTop: '0.75rem' }}>
                    <button
                      style={{
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'inherit',
                        padding: '0.4rem 1rem',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.85rem'
                      }}
                      onClick={() => {
                        setSelectedAnswer(null);
                        setQuizSubmitted(false);
                      }}
                    >
                      重新作答 (Retry)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicMasteryModule;
