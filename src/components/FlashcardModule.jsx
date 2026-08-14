import React, { useState, useEffect } from 'react';
import { Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw, Sparkles } from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const FlashcardModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);
  const [reviewDeck, setReviewDeck] = useState(flashcardsDeck);
  const [activeKey, setActiveKey] = useState(null);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
    }
  };

  const handleAnswer = (knowsIt) => {
    setIsFlipped(false);
    if (knowsIt) {
      if (updateUserStats) updateUserStats(10);
      if (!masteredCards.includes(currentCard.id)) {
        setMasteredCards([...masteredCards, currentCard.id]);
      }
    }

    setTimeout(() => {
      if (currentIndex < reviewDeck.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 200);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const isCardPlaying = activeKey === `fc_${currentCard.id}` || activeKey === currentCard.viet;

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Brain color="var(--brand-primary)" />
          {learningMode === 'zh' ? '單字與片語 Leitner 間隔記憶閃卡 (3D Memory Deck)' : 'Spaced Repetition Flashcards (3D Memory Deck)'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '點擊卡片即可 3D 翻轉查看釋義、漢越音標註與發音音訊，記住單字獲取 XP 獎勵！'
            : 'Click card to flip and inspect bilingual meaning, Sino-Vietnamese cognates, and native audio.'}
        </p>
      </div>

      {/* Progress & Deck Stats */}
      <div style={{ maxWidth: '480px', margin: '0 auto 1.2rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.95em' }}>
        <span>
          {learningMode === 'zh' ? '進度：' : 'Progress: '}
          <strong>{currentIndex + 1} / {reviewDeck.length}</strong>
        </span>
        <span style={{ color: 'var(--brand-green)' }}>
          {learningMode === 'zh' ? '已掌握：' : 'Mastered: '}
          <strong>{masteredCards.length} {learningMode === 'zh' ? '個' : 'words'}</strong>
        </span>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="flashcard-inner">
          {/* Card Front (Vietnamese) */}
          <div className="flashcard-front">
            <span className="tone-symbol" style={{ marginBottom: '1rem', background: 'var(--bg-accent)' }}>
              {currentCard.category}
            </span>
            <div style={{ fontSize: '2.4em', fontWeight: 800, color: 'var(--brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
              <span>{currentCard.viet}</span>
              <Volume2 size={24} className={isCardPlaying ? 'playing-pulse' : ''} style={{ color: isCardPlaying ? 'var(--brand-primary)' : 'var(--brand-accent)' }} />
            </div>
            {currentCard.hanViet && (
              <div style={{ fontSize: '0.9em', color: 'var(--brand-gold)', marginTop: '0.5rem', fontWeight: 700 }}>
                {learningMode === 'zh' ? `漢越音：${currentCard.hanViet}` : `Sino-Vietnamese: ${currentCard.hanViet}`}
              </div>
            )}
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: '1.2rem' }}>
              💡 {t('common.cardFlipHint')}
            </div>
          </div>

          {/* Card Back (Meaning & Example) */}
          <div className="flashcard-back">
            <div style={{ fontSize: '2em', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
              {learningMode === 'zh' ? currentCard.zh : currentCard.en}
            </div>
            <div style={{ fontSize: '1.05em', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              {learningMode === 'zh' ? '例句：' : 'Example: '}
              <strong>{currentCard.example}</strong>
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
        <button 
          className="control-btn"
          style={{ background: '#ef4444', color: '#fff', padding: '0.75rem 1.4rem' }}
          onClick={() => handleAnswer(false)}
        >
          <XCircle size={18} /> {learningMode === 'zh' ? '還不熟悉 (重複練習)' : 'Needs Review'}
        </button>

        <button 
          className="control-btn"
          style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.75rem 1.4rem' }}
          onClick={() => handleAnswer(true)}
        >
          <CheckCircle2 size={18} /> {learningMode === 'zh' ? '已掌握單字 (+10 XP)' : 'Mastered (+10 XP)'}
        </button>

        <button 
          className="control-btn"
          onClick={handleRestart}
          title="重新輪播閃卡"
        >
          <RefreshCw size={18} /> {learningMode === 'zh' ? '從頭開始' : 'Restart Deck'}
        </button>
      </div>
    </div>
  );
};
