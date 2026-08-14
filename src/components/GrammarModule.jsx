import React, { useState } from 'react';
import { Layers, Puzzle, CheckCircle, RefreshCw, Volume2 } from 'lucide-react';
import { grammarRules, interactivePuzzles } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const GrammarModule = ({ selectedAccent, updateUserStats }) => {
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [userWords, setUserWords] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const currentPuzzle = interactivePuzzles[puzzleIndex] || interactivePuzzles[0];

  const handleAddWord = (word) => {
    if (!userWords.includes(word)) {
      const newWords = [...userWords, word];
      setUserWords(newWords);

      // Check if complete
      if (newWords.length === currentPuzzle.correctOrder.length) {
        const isAnswerCorrect = newWords.join(' ') === currentPuzzle.correctOrder.join(' ');
        setIsCorrect(isAnswerCorrect);
        setIsCompleted(true);
        if (isAnswerCorrect) {
          updateUserStats(20); // +20 XP
          audioEngine.speak(newWords.join(' '), { accent: selectedAccent });
        }
      }
    }
  };

  const handleRemoveWord = (word) => {
    setUserWords(userWords.filter(w => w !== word));
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleResetPuzzle = () => {
    setUserWords([]);
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleNextPuzzle = () => {
    handleResetPuzzle();
    setPuzzleIndex((prev) => (prev + 1) % interactivePuzzles.length);
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          越南語語法核心、形容詞後置與互動句型拼圖 (Grammar & Sentence Puzzle)
        </h2>
        <p className="section-desc">直觀掌握 S+V+O、形容詞後置規則與量詞 (cái, con, chiếc, người) 用法</p>
      </div>

      {/* 1. Grammar Rules Grid */}
      <div className="grid-cards" style={{ marginBottom: '2.5rem' }}>
        {grammarRules.map((rule, idx) => (
          <div key={idx} className="learning-card">
            <h3 style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
              {rule.title}
            </h3>
            <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              {rule.description}
            </p>
            <div style={{ background: 'var(--bg-accent)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9em', fontWeight: 700, color: 'var(--brand-primary)' }}>
              💡 實例：{rule.example}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Interactive Sentence Puzzle Game */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Puzzle color="var(--brand-gold)" />
          互動重組句型拼圖 Challenge ({puzzleIndex + 1} / {interactivePuzzles.length})
        </h3>

        <div style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: '1rem' }}>
          請組合出中文：<span style={{ color: 'var(--brand-primary)' }}>「{currentPuzzle.sentenceZh}」</span>
        </div>

        {/* Selected Words Drop Box */}
        <div 
          style={{ 
            minHeight: '70px', 
            background: 'var(--bg-main)', 
            border: '2px dashed var(--border-color)', 
            borderRadius: 'var(--radius-md)', 
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}
        >
          {userWords.length === 0 && (
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>點擊下方單字標籤組裝句子...</span>
          )}
          {userWords.map((word, idx) => (
            <button 
              key={idx} 
              className="control-btn"
              style={{ background: 'var(--brand-accent)', color: '#fff', fontSize: '1em' }}
              onClick={() => handleRemoveWord(word)}
            >
              {word} ✕
            </button>
          ))}
        </div>

        {/* Word Options */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {currentPuzzle.words.map((word, idx) => (
            <button 
              key={idx} 
              className="control-btn"
              disabled={userWords.includes(word)}
              style={{ opacity: userWords.includes(word) ? 0.4 : 1, fontSize: '1.05em' }}
              onClick={() => handleAddWord(word)}
            >
              {word}
            </button>
          ))}
        </div>

        {/* Feedback & Actions */}
        {isCompleted && (
          <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: isCorrect ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700, color: isCorrect ? 'var(--brand-green)' : '#ef4444' }}>
              {isCorrect ? '🎉 太棒了！句型重组完全正確！(+20 XP)' : '❌ 順序有誤，再試一次吧！'}
            </div>
            {isCorrect && (
              <button className="speaker-btn" onClick={() => audioEngine.speak(userWords.join(' '), { accent: selectedAccent })}>
                <Volume2 size={18} />
              </button>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="control-btn" onClick={handleResetPuzzle}>
            <RefreshCw size={16} /> 重置答案
          </button>
          <button className="control-btn" style={{ background: 'var(--brand-accent)', color: '#fff' }} onClick={handleNextPuzzle}>
            下一題拼圖 ➔
          </button>
        </div>
      </div>
    </div>
  );
};
