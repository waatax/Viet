import React, { useState, useEffect } from 'react';
import { Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw, Sparkles, Award } from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const FlashcardModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_mastered_cards');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
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

  const reviewDeck = filteredDeck.length > 0 ? filteredDeck : flashcardsDeck;

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [selectedCategory]);

  useEffect(() => {
    localStorage.setItem('viet_mastered_cards', JSON.stringify(masteredCards));
  }, [masteredCards]);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  // Keyboard shortcut navigation (Space to flip, Left to review, Right for mastered)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space') {
        e.preventDefault();
        handleCardClick();
      } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
        handleAnswer(true);
      } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
        handleAnswer(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex, reviewDeck, currentCard]);

  const handleCardClick = () => {
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    if (!isFlipped && currentCard) {
      audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
    }
  };

  const handleAnswer = (knowsIt) => {
    setIsFlipped(false);
    if (knowsIt && currentCard) {
      if (updateUserStats) updateUserStats(10);
      if (!masteredCards.includes(currentCard.id)) {
        setMasteredCards(prev => [...prev, currentCard.id]);
      }
    }

    setTimeout(() => {
      if (currentIndex < reviewDeck.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 180);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const isCardPlaying = activeKey === `fc_${currentCard?.id}` || activeKey === currentCard?.viet;

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
      <div style={{ maxWidth: '650px', margin: '0 auto 1.2rem', display: 'flex', gap: '0.45rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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

      {/* Progress & Deck Stats */}
      <div style={{ maxWidth: '520px', margin: '0 auto 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.95em', background: 'var(--bg-card)', padding: '0.75rem 1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
          <span>{learningMode === 'zh' ? '當前進度：' : 'Progress: '}</span>
          <strong style={{ color: 'var(--brand-accent)' }}>{currentIndex + 1} / {reviewDeck.length}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-green)', fontWeight: 800 }}>
          <Award size={16} />
          <span>{learningMode === 'zh' ? '已掌握：' : 'Mastered: '}</span>
          <span>{masteredCards.length} {learningMode === 'zh' ? '字' : 'words'}</span>
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
              <span>{currentCard.viet}</span>
              <Volume2 size={26} className={isCardPlaying ? 'playing-pulse' : ''} style={{ color: isCardPlaying ? 'var(--brand-primary)' : 'var(--brand-accent)' }} />
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <button 
          className="control-btn"
          style={{ background: '#ef4444', color: '#fff', padding: '0.8rem 1.5rem', fontWeight: 800 }}
          onClick={() => handleAnswer(false)}
          title="鍵盤快捷鍵: ← 左方向鍵"
        >
          <XCircle size={18} /> {learningMode === 'zh' ? '需再複習 (←)' : 'Review (←)'}
        </button>

        <button 
          className="control-btn"
          style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.8rem 1.5rem', fontWeight: 800 }}
          onClick={() => handleAnswer(true)}
          title="鍵盤快捷鍵: → 右方向鍵"
        >
          <CheckCircle2 size={18} /> {learningMode === 'zh' ? '已熟記 (+10 XP) (→)' : 'Mastered (+10 XP) (→)'}
        </button>

        <button 
          className="control-btn"
          onClick={handleRestart}
          title="重新輪播卡片"
        >
          <RefreshCw size={17} /> {learningMode === 'zh' ? '重新開始' : 'Restart'}
        </button>
      </div>
    </div>
  );
};
