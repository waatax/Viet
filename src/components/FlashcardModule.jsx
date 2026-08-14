import React, { useState } from 'react';
import { Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const FlashcardModule = ({ selectedAccent, updateUserStats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);
  const [reviewDeck, setReviewDeck] = useState(flashcardsDeck);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      audioEngine.speak(currentCard.viet, { accent: selectedAccent });
    }
  };

  const handleAnswer = (knowsIt) => {
    setIsFlipped(false);
    if (knowsIt) {
      updateUserStats(10); // +10 XP
      if (!masteredCards.includes(currentCard.id)) {
        setMasteredCards([...masteredCards, currentCard.id]);
      }
    }

    setTimeout(() => {
      if (currentIndex < reviewDeck.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        // Deck finish loop
        setCurrentIndex(0);
      }
    }, 200);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Brain color="var(--brand-primary)" />
          單字與片語 Leitner 間隔重複記憶閃卡 (3D Memory Flashcards)
        </h2>
        <p className="section-desc">點擊卡片即可 3D 翻轉查看中文與發音音訊，記住單字獲取 XP 獎勵！</p>
      </div>

      {/* Progress & Deck Stats */}
      <div style={{ maxWidth: '450px', margin: '0 auto 1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9em' }}>
        <span>進度：<strong>{currentIndex + 1} / {reviewDeck.length}</strong></span>
        <span style={{ color: 'var(--brand-green)' }}>已精通：<strong>{masteredCards.length} 個單字</strong></span>
      </div>

      {/* 3D Flip Card Container */}
      <div 
        className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardClick}
      >
        <div className="flashcard-inner">
          {/* Card Front (Vietnamese) */}
          <div className="flashcard-front">
            <span className="tone-symbol" style={{ marginBottom: '1rem' }}>{currentCard.category}</span>
            <div style={{ fontSize: '2.4em', fontWeight: 800, color: 'var(--brand-accent)' }}>
              {currentCard.viet}
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: '1rem' }}>
              💡 點擊翻轉卡片查看中文與聽音訊
            </div>
          </div>

          {/* Card Back (Chinese & Example) */}
          <div className="flashcard-back">
            <div style={{ fontSize: '2em', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.5rem' }}>
              {currentCard.zh}
            </div>
            <div style={{ fontSize: '1.05em', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              例句：<strong>{currentCard.example}</strong>
            </div>

            <button 
              className="speaker-btn"
              onClick={(e) => {
                e.stopPropagation();
                audioEngine.speak(currentCard.viet, { accent: selectedAccent });
              }}
            >
              <Volume2 size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons: Remembered vs Need Review */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <button 
          className="control-btn"
          style={{ background: '#ef4444', color: '#fff', padding: '0.75rem 1.5rem' }}
          onClick={() => handleAnswer(false)}
        >
          <XCircle size={18} /> 還不熟悉 (重覆練習)
        </button>

        <button 
          className="control-btn"
          style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.75rem 1.5rem' }}
          onClick={() => handleAnswer(true)}
        >
          <CheckCircle2 size={18} /> 已掌握單字 (+10 XP)
        </button>

        <button 
          className="control-btn"
          onClick={handleRestart}
          title="重新輪播閃卡"
        >
          <RefreshCw size={18} /> 重頭開始
        </button>
      </div>
    </div>
  );
};
