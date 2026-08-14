import React, { useState, useEffect } from 'react';
import { Layers, Puzzle, CheckCircle, RefreshCw, Volume2, ArrowRight } from 'lucide-react';
import { grammarRules, interactivePuzzles } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const GrammarModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [userWords, setUserWords] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  const currentPuzzle = interactivePuzzles[puzzleIndex] || interactivePuzzles[0];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handleAddWord = (word) => {
    if (!userWords.includes(word)) {
      const newWords = [...userWords, word];
      setUserWords(newWords);

      if (newWords.length === currentPuzzle.correctOrder.length) {
        const isAnswerCorrect = newWords.join(' ') === currentPuzzle.correctOrder.join(' ');
        setIsCorrect(isAnswerCorrect);
        setIsCompleted(true);
        if (isAnswerCorrect) {
          if (updateUserStats) updateUserStats(20);
          audioEngine.speak(newWords.join(' '), { accent: selectedAccent, key: `puzzle_${currentPuzzle.id}` });
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

  const playSpeech = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key });
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越南語語法核心與互動拼句練習器' : 'Vietnamese Grammar Rules & Interactive Sentence Builder'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '掌握 S+V+O 語序、形容詞後置修飾、量詞及時態助詞，並透過互動拼句挑戰驗證理解'
            : 'Master SVO order, post-nominal adjectives, classifiers, and tense markers with interactive builder exercises'}
        </p>
      </div>

      {/* 1. Grammar Rules Grid */}
      <div className="grid-cards" style={{ marginBottom: '2.5rem' }}>
        {grammarRules.map((rule, idx) => {
          const ruleKey = `grammar_rule_${idx}`;
          const isPlaying = activeKey === ruleKey;
          return (
            <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
              <h3 style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
                {learningMode === 'zh' ? rule.titleZh : rule.titleEn}
              </h3>
              <p style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                {learningMode === 'zh' ? rule.descriptionZh : rule.descriptionEn}
              </p>
              <div style={{ background: 'var(--bg-accent)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', fontSize: '0.9em', fontWeight: 700, color: 'var(--brand-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>
                  💡 {learningMode === 'zh' ? '實例：' : 'Example: '}
                  {learningMode === 'zh' ? rule.exampleZh : rule.exampleEn}
                </span>
                <button
                  className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={() => playSpeech(rule.exampleZh || rule.exampleEn, ruleKey)}
                  title="聆聽範例發音"
                >
                  <Volume2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Interactive Sentence Puzzle Game */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Puzzle color="var(--brand-gold)" />
          {learningMode === 'zh' ? '互動重組句型拼圖 Challenge' : 'Interactive Sentence Puzzle Challenge'} 
          <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
            ({puzzleIndex + 1} / {interactivePuzzles.length})
          </span>
        </h3>

        <div style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: '1.2rem' }}>
          {learningMode === 'zh' ? '請組合出：' : 'Construct the sentence: '}
          <span style={{ color: 'var(--brand-primary)' }}>
            「{learningMode === 'zh' ? currentPuzzle.sentenceZh : currentPuzzle.sentenceEn}」
          </span>
        </div>

        {/* Selected Words Drop Box */}
        <div 
          style={{ 
            minHeight: '75px', 
            background: 'var(--bg-main)', 
            border: '2px dashed var(--border-color)', 
            borderRadius: 'var(--radius-md)', 
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '1.5rem'
          }}
        >
          {userWords.length === 0 && (
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
              {learningMode === 'zh' ? '點擊下方單字標籤組裝正確句序...' : 'Click word tokens below to construct...'}
            </span>
          )}
          {userWords.map((word, idx) => (
            <button 
              key={idx} 
              className="control-btn"
              style={{ background: 'var(--brand-accent)', color: '#fff', fontSize: '1.05em' }}
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
              style={{ opacity: userWords.includes(word) ? 0.35 : 1, fontSize: '1.05em', padding: '0.5rem 1rem' }}
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
              {isCorrect 
                ? (learningMode === 'zh' ? '🎉 太棒了！句型重組完全正確！(+20 XP)' : '🎉 Correct sentence order! (+20 XP)')
                : (learningMode === 'zh' ? '❌ 順序有誤，再試一次吧！' : '❌ Incorrect order, try again!')
              }
            </div>
            {isCorrect && (
              <button 
                className={`speaker-btn ${activeKey === `puzzle_${currentPuzzle.id}` ? 'playing' : ''}`} 
                onClick={() => audioEngine.speak(userWords.join(' '), { accent: selectedAccent, key: `puzzle_${currentPuzzle.id}` })}
              >
                <Volume2 size={18} />
              </button>
            )}
          </div>
        )}

        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="control-btn" onClick={handleResetPuzzle}>
            <RefreshCw size={16} /> {learningMode === 'zh' ? '重置答案' : 'Reset'}
          </button>
          <button className="control-btn" style={{ background: 'var(--brand-accent)', color: '#fff' }} onClick={handleNextPuzzle}>
            {learningMode === 'zh' ? '下一題拼圖 ➔' : 'Next Puzzle ➔'}
          </button>
        </div>
      </div>
    </div>
  );
};
