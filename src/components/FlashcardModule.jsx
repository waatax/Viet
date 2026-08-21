import React, { useState, useEffect, useRef } from 'react';
import { Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw, Sparkles, Award, Play, Pause } from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { srsEngine } from '../services/srsEngine';

const getCardIcon = (card) => {
  if (!card) return '💡';
  if (card.icon) return card.icon;
  const text = (card.zh + ' ' + card.viet + ' ' + (card.category || '')).toLowerCase();
  if (text.includes('cà phê')) return '☕';
  if (text.includes('phở') || text.includes('bún')) return '🍜';
  if (text.includes('bánh mì')) return '🥖';
  if (text.includes('cảm ơn') || text.includes('感謝')) return '🙏';
  if (text.includes('xin chào') || text.includes('你好')) return '👋';
  if (text.includes('bệnh viện') || text.includes('醫院')) return '🏥';
  if (text.includes('khách sạn') || text.includes('飯店')) return '🏨';
  if (text.includes('sân bay') || text.includes('機場')) return '✈️';
  if (text.includes('tiền') || text.includes('giá') || text.includes('đắt') || text.includes('錢') || text.includes('買')) return '💸';
  if (text.includes('công ty') || text.includes('hợp đồng') || text.includes('公司')) return '🏢';
  if (text.includes('hải sản')) return '🦀';
  if (text.includes('chúc mừng')) return '🎉';
  if (text.includes('nhậu')) return '🍻';
  const cats = {
    '問候與禮貌': '🤝',
    '購物殺價': '🛍️',
    '餐飲美食': '🍽️',
    '商務職場': '💼',
    '交通出行': '🚗',
    '飯店住宿': '🛌',
    '醫療健康': '💊',
    '社交日常': '💬',
    '漢越核心': '📖',
    '節慶祝福': '🏮',
    '道地口語': '🗣️'
  };
  return cats[card.category] || '💡';
};

export const FlashcardModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [srsData, setSrsData] = useState({});
  const [audioFirstMode, setAudioFirstMode] = useState(false);

  // Deck Autoplay state
  const [isPlayingDeck, setIsPlayingDeck] = useState(false);
  const [playMode, setPlayMode] = useState('zh-vi'); // 'zh-vi' | 'vi-zh' | 'vi-only'
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const isPlayingDeckRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    setSrsData(srsEngine.loadSrsData());
  }, []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeKey, setActiveKey] = useState(null);

  const categories = [
    { id: 'all', labelZh: '全部單字 (100張)', labelEn: 'All (100)' },
    { id: '購物殺價', labelZh: '🛍️ 購物殺價', labelEn: '🛍️ Shopping' },
    { id: '餐飲美食', labelZh: '🍜 餐飲美食', labelEn: '🍜 Food & Dining' },
    { id: '商務職場', labelZh: '💼 商務職場', labelEn: '💼 Business' },
    { id: '交通出行', labelZh: '✈️ 交通出行', labelEn: '✈️ Transport' },
    { id: '飯店住宿', labelZh: '🏨 飯店住宿', labelEn: '🏨 Hotel' },
    { id: '醫療健康', labelZh: '💊 醫療健康', labelEn: '💊 Medical' },
    { id: '問候與禮貌', labelZh: '👋 問候禮貌', labelEn: '👋 Greetings' }
  ];

  const filteredDeck = flashcardsDeck.filter(card => {
    if (selectedCategory === 'all') return true;
    return card.category === selectedCategory || (selectedCategory === '購物殺價' && (card.category.includes('購物') || card.category.includes('殺價')));
  });

  const reviewDeck = React.useMemo(() => {
    const baseDeck = filteredDeck.length > 0 ? filteredDeck : flashcardsDeck;
    const now = Date.now();
    const due = [];
    const newCards = [];
    baseDeck.forEach(card => {
      const data = srsData[card.id];
      if (!data || !data.dueDate) {
        newCards.push(card);
      } else if (data.dueDate <= now) {
        due.push(card);
      }
    });
    const deck = [...due, ...newCards.slice(0, 10)];
    return deck.length > 0 ? deck : baseDeck.slice(0, 10);
  }, [filteredDeck, srsData]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    isPlayingDeckRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    audioEngine.stop();
    setIsPlayingDeck(false);
  }, [selectedCategory]);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => {
      unsubscribe();
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  const playDeckInSequence = (index, part = 'first', currentPlayMode = playMode, speed = playbackSpeed) => {
    if (!isPlayingDeckRef.current || index >= reviewDeck.length) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      return;
    }

    setCurrentIndex(index);
    const card = reviewDeck[index];
    const nativeText = learningMode === 'zh' ? card.zh : card.en;
    const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

    if (currentPlayMode === 'vi-only') {
      setIsFlipped(false);
      audioEngine.speak(card.viet, {
        accent: selectedAccent,
        lang: 'vi',
        rate: speed,
        key: `fc_seq_viet_${card.id}`,
        onEnd: () => {
          if (!isPlayingDeckRef.current) return;
          const gap = speed < 0.85 ? 1400 : 1100;
          timerRef.current = setTimeout(() => {
            if (isPlayingDeckRef.current) {
              if (index + 1 < reviewDeck.length) {
                playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
              } else {
                setIsPlayingDeck(false);
                isPlayingDeckRef.current = false;
              }
            }
          }, gap);
        }
      });
    } else if (currentPlayMode === 'zh-vi') {
      // 1次中文 (翻到中文釋義面) -> 1次越文 (翻回越文發音面)
      if (part === 'first') {
        setIsFlipped(true); // Flip to back to show meaning
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `fc_seq_native_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                setIsFlipped(false); // Flip to front for Vietnamese
                playDeckInSequence(index, 'second', currentPlayMode, speed);
              }
            }, 350);
          }
        });
      } else {
        setIsFlipped(false);
        audioEngine.speak(card.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `fc_seq_viet_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            const gap = speed < 0.85 ? 1600 : 1300;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                if (index + 1 < reviewDeck.length) {
                  playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
                } else {
                  setIsPlayingDeck(false);
                  isPlayingDeckRef.current = false;
                }
              }
            }, gap);
          }
        });
      }
    } else {
      // 'vi-zh': 1次越文 (正面) -> 1次中文 (背面)
      if (part === 'first') {
        setIsFlipped(false);
        audioEngine.speak(card.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `fc_seq_viet_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                setIsFlipped(true);
                playDeckInSequence(index, 'second', currentPlayMode, speed);
              }
            }, 350);
          }
        });
      } else {
        setIsFlipped(true);
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `fc_seq_native_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            const gap = speed < 0.85 ? 1600 : 1300;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                if (index + 1 < reviewDeck.length) {
                  setIsFlipped(false);
                  playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
                } else {
                  setIsPlayingDeck(false);
                  isPlayingDeckRef.current = false;
                }
              }
            }, gap);
          }
        });
      }
    }
  };

  const handlePlayDeck = (mode = 'zh-vi') => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }

    setPlayMode(mode);
    setIsPlayingDeck(true);
    isPlayingDeckRef.current = true;
    playDeckInSequence(currentIndex, 'first', mode, playbackSpeed);
  };

  const handlersRef = useRef({ handleCardClick: null, handleAnswer: null });

  const handleCardClick = () => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    if (!isFlipped && currentCard) {
      audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
    }
  };

  const handleAnswer = (quality) => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    setIsFlipped(false);
    if (currentCard) {
      if (updateUserStats && quality > 0) updateUserStats(quality > 0 ? 10 : 2);
      const updated = srsEngine.reviewCard(currentCard.id, quality);
      setSrsData(prev => ({
        ...prev,
        [currentCard.id]: updated
      }));
    }

    setTimeout(() => {
      if (currentIndex < reviewDeck.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 180);
  };

  useEffect(() => {
    handlersRef.current = { handleCardClick, handleAnswer };
  }, [handleCardClick, handleAnswer]);

  // Keyboard shortcut navigation (Space to flip, Left to review, Right for mastered)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        handlersRef.current.handleCardClick();
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        handlersRef.current.handleAnswer(4);
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        handlersRef.current.handleAnswer(0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleRestart = () => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
    }
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const isCardPlaying = activeKey === `fc_${currentCard?.id}` || activeKey === currentCard?.viet || activeKey === `fc_seq_viet_${currentCard?.id}`;

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Brain color="var(--brand-primary)" />
          {learningMode === 'zh' ? '單字與高頻短句 Leitner 間隔記憶 3D 閃卡' : 'Spaced Repetition Flashcards (3D Memory Deck)'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '點擊卡片（或按空白鍵）3D 翻轉查看釋義、漢越音標註與原生真人發音。支援鍵盤快速操作（←需複習 / 已掌握→）。'
            : 'Click card or press Space to 3D-flip. Inspect bilingual meanings, Sino-Vietnamese roots, and native audio.'}
        </p>
      </div>

      {/* Category Filter Chips */}
      <div style={{ maxWidth: '650px', margin: '0 auto 0.8rem', display: 'flex', gap: '0.45rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              fontSize: '0.82em',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {learningMode === 'zh' ? cat.labelZh : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Continuous Unit Audio Playback Toolbar */}
      <div style={{ maxWidth: '650px', margin: '0 auto 1rem', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Mode 1: Once Chinese, Once Vietnamese (中+越) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'zh-vi' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('zh-vi')}
          style={{ 
            background: isPlayingDeck && playMode === 'zh-vi' ? 'var(--brand-primary)' : 'var(--brand-green)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'zh-vi' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '自動翻卡：每張先播中文釋義，再翻面播越文發音 (免動手通勤聽背)' : 'Play 1x Chinese then 1x Vietnamese'}
        >
          {isPlayingDeck && playMode === 'zh-vi' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'zh-vi'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 中+越 (一次中文一次越文)</> : <>Play: Zh → Vi</>)}
          </span>
        </button>

        {/* Mode 2: Once Vietnamese, Once Chinese (越+中) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'vi-zh' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('vi-zh')}
          style={{ 
            background: isPlayingDeck && playMode === 'vi-zh' ? 'var(--brand-primary)' : 'var(--brand-gold)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'vi-zh' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '自動翻卡：每張先播越文發音，再翻面播中文釋義' : 'Play 1x Vietnamese then 1x Chinese'}
        >
          {isPlayingDeck && playMode === 'vi-zh' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'vi-zh'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 越+中</> : <>Play: Vi → Zh</>)}
          </span>
        </button>

        {/* Mode 3: Vietnamese Only (純越文) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'vi-only' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('vi-only')}
          style={{ 
            background: isPlayingDeck && playMode === 'vi-only' ? 'var(--brand-primary)' : 'var(--brand-accent, #8b5cf6)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'vi-only' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '沉浸式純越文單字連續聽力' : 'Vietnamese Only'}
        >
          {isPlayingDeck && playMode === 'vi-only' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'vi-only'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 純越文</> : <>Play: Viet Only</>)}
          </span>
        </button>

        {/* Speed Toggle Chips */}
        <div className="speed-toggle-group" style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-color)' }}>
          <button 
            className={`speed-chip ${playbackSpeed >= 0.85 ? 'active' : ''}`}
            onClick={() => setPlaybackSpeed(0.9)}
            style={{
              background: playbackSpeed >= 0.85 ? 'var(--brand-accent)' : 'transparent',
              color: playbackSpeed >= 0.85 ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '0.25rem 0.55rem',
              fontSize: '0.78em',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600
            }}
            title="正常語速"
          >
            1.0x
          </button>
          <button 
            className={`speed-chip ${playbackSpeed < 0.85 ? 'active' : ''}`}
            onClick={() => setPlaybackSpeed(0.7)}
            style={{
              background: playbackSpeed < 0.85 ? 'var(--brand-accent)' : 'transparent',
              color: playbackSpeed < 0.85 ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '0.25rem 0.55rem',
              fontSize: '0.78em',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600
            }}
            title="慢速精讀"
          >
            0.75x
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95em', fontWeight: 600, color: 'var(--text-primary)' }}>
          <input 
            type="checkbox" 
            checked={audioFirstMode} 
            onChange={(e) => setAudioFirstMode(e.target.checked)} 
            style={{ cursor: 'pointer' }}
          />
          {learningMode === 'zh' ? 'Audio First (聽音盲測)' : 'Audio First Mode'}
        </label>
      </div>

      {/* Progress & Deck Stats */}
      <div style={{ maxWidth: '520px', margin: '0 auto 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95em', background: 'var(--bg-card)', padding: '0.75rem 1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
          <span>{learningMode === 'zh' ? '當前進度：' : 'Progress: '}</span>
          <strong style={{ color: 'var(--brand-accent)' }}>{currentIndex + 1} / {reviewDeck.length}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-green)', fontWeight: 800 }}>
          <Award size={16} />
          <span>{learningMode === 'zh' ? '已掌握：' : 'Mastered: '}</span>
          <span>{Object.values(srsData).filter(d => d.interval >= 14).length} {learningMode === 'zh' ? '字' : 'words'}</span>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleCardClick();
          }
        }}
        role="button"
        tabIndex="0"
        aria-label={learningMode === 'zh' ? '翻面查看答案' : 'Flip card to reveal answer'}
      >
        <div className="flashcard-inner">
          {/* Card Front (Vietnamese) */}
          <div className="flashcard-front">
            <span className="tone-symbol" style={{ marginBottom: '1.2rem', background: 'var(--bg-accent)', color: 'var(--brand-gold)' }}>
              {currentCard.category}
            </span>
            <div style={{ fontSize: '2.6em', fontWeight: 900, color: 'var(--brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', lineHeight: 1.2 }}>
              {audioFirstMode && !isFlipped ? (
                <span style={{ filter: 'blur(10px)', opacity: 0.6, userSelect: 'none' }}>{currentCard.viet}</span>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '1.2em', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>{getCardIcon(currentCard)}</span>
                  <span>{currentCard.viet}</span>
                </div>
              )}
              <Volume2 
                size={26} 
                className={isCardPlaying ? 'playing-pulse' : ''} 
                style={{ color: isCardPlaying ? 'var(--brand-primary)' : 'var(--brand-accent)', cursor: 'pointer' }}
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
                }}
              />
            </div>
            {currentCard.hanViet && (
              <div style={{ fontSize: '1.05em', color: 'var(--brand-gold)', marginTop: '0.75rem', fontWeight: 800 }}>
                {learningMode === 'zh' ? `漢越音：${currentCard.hanViet}` : `Sino-Vietnamese: ${currentCard.hanViet}`}
              </div>
            )}
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>💡 {t('common.cardFlipHint')} (按 Space 翻轉)</span>
            </div>
          </div>

          {/* Card Back (Meaning & Example) */}
          <div className="flashcard-back">
            <span className="tone-symbol" style={{ marginBottom: '0.8rem', background: 'var(--bg-card)' }}>
              {learningMode === 'zh' ? '釋義與例句' : 'Meaning & Context'}
            </span>
            {audioFirstMode && (
              <div style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
                {currentCard.viet}
              </div>
            )}
            <div style={{ fontSize: '2.1em', fontWeight: 900, color: 'var(--brand-primary)', marginBottom: '0.6rem' }}>
              {learningMode === 'zh' ? currentCard.zh : currentCard.en}
            </div>
            <div style={{ fontSize: '1.05em', color: 'var(--text-secondary)', marginBottom: '1.2rem', maxWidth: '420px', lineHeight: 1.5 }}>
              {learningMode === 'zh' ? '例句：' : 'Example: '}
              <strong style={{ color: 'var(--text-primary)' }}>{currentCard.example}</strong>
            </div>

            <button 
              className={`speaker-btn ${isCardPlaying ? 'playing' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
              }}
              title={t('common.listen')}
            >
              <Volume2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons: Remembered vs Need Review */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <button 
          className="control-btn"
          style={{ background: '#ef4444', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.95em', fontWeight: 700 }}
          onClick={() => handleAnswer(0)}
          title="鍵盤快捷鍵: ← 左方向鍵"
        >
          {learningMode === 'zh' ? '生疏 (Again) - 1d' : 'Again - 1d'}
        </button>

        <button 
          className="control-btn"
          style={{ background: '#f59e0b', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.95em', fontWeight: 700 }}
          onClick={() => handleAnswer(3)}
        >
          {learningMode === 'zh' ? '困難 (Hard) - 3d' : 'Hard - 3d'}
        </button>

        <button 
          className="control-btn"
          style={{ background: '#3b82f6', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.95em', fontWeight: 700 }}
          onClick={() => handleAnswer(4)}
          title="鍵盤快捷鍵: → 右方向鍵"
        >
          {learningMode === 'zh' ? '良好 (Good) - 6d' : 'Good - 6d'}
        </button>

        <button 
          className="control-btn"
          style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.95em', fontWeight: 700 }}
          onClick={() => handleAnswer(5)}
        >
          {learningMode === 'zh' ? '容易 (Easy) - 14d+' : 'Easy - 14d+'}
        </button>
      </div>
    </div>
  );
};
