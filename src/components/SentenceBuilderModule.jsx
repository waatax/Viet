import React, { useState, useEffect } from 'react';
import { Puzzle, ArrowRight, RefreshCw, Volume2, Trophy, Eye, EyeOff, Sparkles, Filter } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import { ModuleMilestoneCard } from './ModuleMilestoneCard';
import './SentenceBuilderModule.css';

const getSyntaxExplanation = (userSentence, targetPhrase) => {
  const target = targetPhrase.viet.toLowerCase();
  if (target.includes('cà phê sữa') || target.includes('phở bò') || target.includes('trà đào') || target.includes('bánh mì')) {
    return '【修飾語後置原則】越南語中中心名詞放前面，材料、特徵或配料放在名詞後面！例如「cà phê sữa đá」(咖啡+奶+冰)、「phở bò」(河粉+牛)，切勿按中文習慣將形容詞放前！';
  }
  if (target.includes('đang') || target.includes('đã') || target.includes('sẽ') || target.includes('chưa')) {
    return '【時態助詞前置原則】越南語表示過去(đã)、現在進行(đang)、未來(sẽ)或尚未(chưa)的助詞，必須直接放在動詞的前方！';
  }
  if (target.includes('ở đâu') || target.includes('bao nhiêu') || target.includes('mấy giờ')) {
    return '【疑問詞位置】地點疑問詞「ở đâu」(在哪裡)、時間疑問詞「mấy giờ」(幾點) 常置於謂語動詞之後或句尾，不可直接置於句首。';
  }
  if (target.includes('không') || target.includes('nhé') || target.includes('ạ')) {
    return '【句尾助詞】是非問句助詞「không」、叮嚀商量「nhé」或謙恭敬語「ạ」嚴格鎖定在整句話的「最末尾」！';
  }
  return '【基本語序 S+V+O】越南語遵循「主詞 + 動詞 + 受詞」核心結構，形容詞修飾名詞時務必放在中心名詞之後！';
};

export const SentenceBuilderModule = ({ selectedAccent = 'north', updateUserStats, setActiveTab }) => {
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
    audioEngine.speak(block.word, { accent: selectedAccent });
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

        {/* Syntax Diagnostic & Mistake Explanation Banner */}
        {isCorrect === false && (
          <div style={{
            marginTop: '1.25rem',
            padding: '1.1rem 1.3rem',
            background: 'rgba(239, 68, 68, 0.08)',
            border: '1.5px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            animation: 'fadeInContent 0.3s ease'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#ef4444', fontWeight: 900, fontSize: '1rem', marginBottom: '0.4rem' }}>
              <span>❌ 語序排列有誤！讓我們來拆解正確句構：</span>
            </div>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.6rem' }}>
              <strong style={{ color: 'var(--brand-accent)' }}>💡 語法糾錯提示：</strong>
              <span>{getSyntaxExplanation(selectedBlocks.map(b => b.word).join(' '), currentPhrase)}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg-card)', padding: '0.6rem 0.9rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
              <div>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-green)', display: 'block' }}>標準正確語序 (Standard Vietnamese Syntax)：</span>
                <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{currentPhrase.viet}</strong>
              </div>
              <button
                className="speaker-btn mini-btn"
                onClick={() => audioEngine.speak(currentPhrase.viet, { accent: selectedAccent })}
                title="聆聽正確原音"
              >
                <Volume2 size={16} />
              </button>
            </div>
          </div>
        )}

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
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span>🔍 越語原句參考：{currentPhrase.viet}</span>
            <button
              className="speaker-btn mini-btn"
              onClick={() => audioEngine.speak(currentPhrase.viet, { accent: selectedAccent })}
              title="聆聽提示原音"
              style={{ width: '28px', height: '28px' }}
            >
              <Volume2 size={15} />
            </button>
          </div>
        )}
      </div>

      {/* Chapter Milestone & Recommended Next Steps */}
      <ModuleMilestoneCard
        currentModuleId="sentence"
        moduleTitleZh="拼句特訓 · 實戰句構挑戰"
        moduleTitleEn="Sentence Builder Challenge"
        nextModuleId="quiz"
        nextModuleTitleZh="iVPT 全真綜合能力模擬測驗"
        nextModuleTitleEn="Comprehensive iVPT Exam"
        bonusXp={30}
        setActiveTab={setActiveTab}
        updateUserStats={updateUserStats}
        summaryHighlights={[
          '透過單字積木拖曳，擺脫直譯依賴，強化 SVO 與修飾語後置正確語序',
          '在即時拼句判定與語音朗讀中，建立整句語感肌肉記憶',
          '挑戰初級短句至進階複合長句，驗證語法與字彙綜合應用力'
        ]}
        relatedModules={[
          { id: 'grammar', icon: '📚', titleZh: '30大語法法則', descZh: '深入句型法則剖析' },
          { id: 'quiz', icon: '🏆', titleZh: '綜合模擬測驗', descZh: '全真題庫實戰檢測' },
          { id: 'conversation', icon: '💬', titleZh: '49大情境對話', descZh: '整段真實對話演練' }
        ]}
      />
    </div>
  );
};

export default SentenceBuilderModule;
