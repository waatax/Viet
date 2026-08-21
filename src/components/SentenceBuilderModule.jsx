import React, { useState, useEffect } from 'react';
import { Puzzle, ArrowRight, RefreshCw, Volume2, Trophy, Eye, EyeOff, Sparkles, Filter } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import './SentenceBuilderModule.css';

export const SentenceBuilderModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode, t } = useLanguage();
  const [difficulty, setDifficulty] = useState('all'); // 'all' | 'easy' (3-5 words) | 'medium' (6-8 words) | 'hard' (9+ words)
  const [selectedCat, setSelectedCat] = useState('all');
  const [phrases, setPhrases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [wordBlocks, setWordBlocks] = useState([]);
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [solvedCount, setSolvedCount] = useState(0);

  // Filter and shuffle phrases
  useEffect(() => {
    let pool = practicalPhrases.filter(p => {
      const len = p.viet.split(/\s+/).length;
      if (len < 3) return false;
      if (difficulty === 'easy' && len > 5) return false;
      if (difficulty === 'medium' && (len < 6 || len > 8)) return false;
      if (difficulty === 'hard' && len < 9) return false;
      if (selectedCat !== 'all' && p.category !== selectedCat) return false;
      return true;
    });

    if (pool.length === 0) {
      pool = practicalPhrases.filter(p => p.viet.split(/\s+/).length >= 3);
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setPhrases(shuffled.slice(0, 25));
    setCurrentIndex(0);
  }, [difficulty, selectedCat]);

  useEffect(() => {
    if (phrases.length > 0 && currentIndex < phrases.length) {
      setupPhrase();
    }
  }, [currentIndex, phrases]);

  const setupPhrase = () => {
    setIsCorrect(null);
    setShowHint(false);
    setSelectedBlocks([]);
    const currentPhrase = phrases[currentIndex].viet;
    const cleanPhrase = currentPhrase.replace(/[.,!?;:…—]/g, '');
    const words = cleanPhrase.split(/\s+/).filter(w => w);
    
    const blocks = words.map((w, i) => ({ id: `word-${i}-${w}`, word: w }));
    const shuffledBlocks = [...blocks].sort(() => 0.5 - Math.random());
    setWordBlocks(shuffledBlocks);
  };

  const handleSelectBlock = (block) => {
    if (isCorrect !== null) return;
    setWordBlocks(prev => prev.filter(b => b.id !== block.id));
    setSelectedBlocks(prev => [...prev, block]);
  };

  const handleDeselectBlock = (block) => {
    if (isCorrect !== null) return;
    setSelectedBlocks(prev => prev.filter(b => b.id !== block.id));
    setWordBlocks(prev => [...prev, block]);
  };

  const checkAnswer = () => {
    const userSentence = selectedBlocks.map(b => b.word).join(' ').toLowerCase();
    const cleanTarget = phrases[currentIndex].viet.replace(/[.,!?;:…—]/g, '').toLowerCase().trim();
    
    if (userSentence === cleanTarget) {
      setIsCorrect(true);
      audioEngine.playSuccessChime();
      const nextSolved = solvedCount + 1;
      setSolvedCount(nextSolved);

      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 10 });
      
      // Check for sentence architect achievement
      gamificationEngine.checkAchievements({ xp: 40 }, { type: 'SENTENCE_BUILD_STREAK', count: nextSolved });

      setTimeout(() => {
        audioEngine.speak(phrases[currentIndex].viet, { accent: selectedAccent });
      }, 300);
    } else {
      setIsCorrect(false);
      audioEngine.playGentleError();
    }
  };

  const nextPhrase = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      const shuffled = [...phrases].sort(() => 0.5 - Math.random());
      setPhrases(shuffled);
      setCurrentIndex(0);
    }
  };

  if (phrases.length === 0) return <div className="module-loading">載入句子重組庫中…</div>;

  const currentPhrase = phrases[currentIndex];
  const categories = ['all', ...new Set(practicalPhrases.map(p => p.category))];

  return (
    <div className="module-container sentence-builder-module">
      <div className="section-header">
        <h2 className="section-title">
          <Puzzle color="var(--brand-primary)" />
          {learningMode === 'zh' ? '句子重組特訓 (Sentence Builder 2.0)' : 'Sentence Builder 2.0'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '將單字塊點擊排列成正確順序的越南語句子，鍛鍊 SVO 語法語感與句型結構！'
            : 'Click word blocks in the correct order to master Vietnamese SVO grammar and word order!'}
        </p>
      </div>

      {/* Difficulty & Category Filter Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', labelZh: '全部長度', labelEn: 'All Lengths' },
            { id: 'easy', labelZh: '🌱 入門 (3-5詞)', labelEn: '🌱 Beginner' },
            { id: 'medium', labelZh: '⚡ 中級 (6-8詞)', labelEn: '⚡ Intermediate' },
            { id: 'hard', labelZh: '🔥 高級 (9詞以上)', labelEn: '🔥 Advanced' }
          ].map(lvl => (
            <button
              key={lvl.id}
              onClick={() => setDifficulty(lvl.id)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: difficulty === lvl.id ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: difficulty === lvl.id ? 'var(--bg-accent)' : 'var(--bg-card)',
                color: difficulty === lvl.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}
            >
              {learningMode === 'zh' ? lvl.labelZh : lvl.labelEn}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          <Trophy size={16} color="var(--brand-gold)" />
          <span>{learningMode === 'zh' ? `已完成：${solvedCount} 句` : `Solved: ${solvedCount}`}</span>
        </div>
      </div>

      <div className="builder-card">
        {/* Target Translation / Meaning */}
        <div className="target-prompt">
          <span className="prompt-label">{learningMode === 'zh' ? '目標中文釋義：' : 'Target Meaning:'}</span>
          <h3 className="prompt-text">
            {learningMode === 'zh' ? currentPhrase.zh : (currentPhrase.en || currentPhrase.zh)}
          </h3>
          {currentPhrase.usageZh && (
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              💡 {learningMode === 'zh' ? currentPhrase.usageZh : currentPhrase.usageEn}
            </div>
          )}
        </div>

        {/* Selected Words Area (The Sentence Dropzone) */}
        <div className={`dropzone ${isCorrect === true ? 'correct' : isCorrect === false ? 'wrong' : ''}`}>
          {selectedBlocks.length === 0 ? (
            <div className="dropzone-placeholder">
              {learningMode === 'zh' ? '點擊下方單字塊，依序組裝成完整句子...' : 'Click words below in order to build the sentence...'}
            </div>
          ) : (
            selectedBlocks.map((block) => (
              <button
                key={block.id}
                className="word-chip active"
                onClick={() => handleDeselectBlock(block)}
              >
                {block.word}
              </button>
            ))
          )}
        </div>

        {/* Source Word Bank (Clickable Blocks) */}
        <div className="word-bank">
          {wordBlocks.map((block) => (
            <button
              key={block.id}
              className="word-chip"
              onClick={() => handleSelectBlock(block)}
            >
              {block.word}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="builder-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              className="btn btn-secondary"
              onClick={setupPhrase}
              title="重設目前拼字"
            >
              <RefreshCw size={16} />
              {learningMode === 'zh' ? '重新排列' : 'Reset'}
            </button>

            <button
              className="btn btn-secondary"
              onClick={() => setShowHint(prev => !prev)}
            >
              {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
              {learningMode === 'zh' ? (showHint ? '隱藏越語' : '查看越語提示') : (showHint ? 'Hide' : 'Hint')}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {isCorrect === null ? (
              <button
                className="primary-action"
                onClick={checkAnswer}
                disabled={selectedBlocks.length === 0}
                style={{ opacity: selectedBlocks.length === 0 ? 0.5 : 1 }}
              >
                {learningMode === 'zh' ? '檢查答案 (+10 XP)' : 'Check Answer (+10 XP)'}
              </button>
            ) : isCorrect ? (
              <button className="primary-action btn-success" onClick={nextPhrase}>
                <span>{learningMode === 'zh' ? '太棒了！下一題' : 'Correct! Next'}</span>
                <ArrowRight size={16} />
              </button>
            ) : (
              <button className="btn btn-danger" onClick={setupPhrase}>
                {learningMode === 'zh' ? '答錯了，重試' : 'Try Again'}
              </button>
            )}
          </div>
        </div>

        {/* Hint Reveal Box */}
        {showHint && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem 1rem',
            background: 'var(--bg-accent)',
            border: '1px dashed var(--brand-primary)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--brand-primary)',
            fontWeight: 800,
            fontSize: '1rem'
          }}>
            🔍 越語原句參考：{currentPhrase.viet}
          </div>
        )}
      </div>
    </div>
  );
};

export default SentenceBuilderModule;
