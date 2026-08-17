import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle, XCircle, Award, Flame, RefreshCw, Volume2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { quizzes } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const QuizModule = ({ userStats, updateUserStats, selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [wrongQuizzes, setWrongQuizzes] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const categories = [
    { id: 'all', labelZh: '全部題型 (iVPT 全真綜合)', labelEn: 'All Types (Comprehensive)' },
    { id: '聲調與發音', labelZh: '🎵 聲調與聽力辨析', labelEn: '🎵 Tones & Listening' },
    { id: '漢越音與詞義', labelZh: '📖 漢越音同源詞義', labelEn: '📖 Han-Viet Etymology' },
    { id: '人稱稱謂與語用', labelZh: '👥 職場與親屬稱謂', labelEn: '👥 Pronouns & Social' },
    { id: '生活實用與數字', labelZh: '🛍️ 生活算價與購物', labelEn: '🛍️ Living & Shopping' }
  ];

  const filteredQuizzes = quizzes.filter(q => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === '聲調與發音') return q.questionZh?.includes('調') || q.questionZh?.includes('音') || q.questionZh?.includes('聲');
    if (selectedCategory === '漢越音與詞義') return q.questionZh?.includes('漢越') || q.questionZh?.includes('字根') || q.questionZh?.includes('意思');
    if (selectedCategory === '人稱稱謂與語用') return q.questionZh?.includes('稱') || q.questionZh?.includes('稱呼') || q.questionZh?.includes('自稱');
    if (selectedCategory === '生活實用與數字') return q.questionZh?.includes('盾') || q.questionZh?.includes('買') || q.questionZh?.includes('錢') || q.questionZh?.includes('價');
    return true;
  });

  const activeDeck = isReviewMode ? (wrongQuizzes.length > 0 ? wrongQuizzes : quizzes) : (filteredQuizzes.length > 0 ? filteredQuizzes : quizzes);
  const activeQuiz = activeDeck[currentQuizIdx] || activeDeck[0];

  useEffect(() => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setWrongQuizzes([]);
    setIsReviewMode(false);
  }, [selectedCategory]);

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === activeQuiz.answer) {
      setScore(prev => prev + 1);
      if (updateUserStats) updateUserStats(25);
    } else {
      setWrongQuizzes(prev => [...prev, activeQuiz]);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuizIdx < activeDeck.length - 1) {
      setCurrentQuizIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setWrongQuizzes([]);
    setIsReviewMode(false);
  };

  const handleStartReviewMistakes = () => {
    setIsReviewMode(true);
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  const playSpeech = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key });
  };

  const options = learningMode === 'zh' ? activeQuiz.optionsZh : activeQuiz.optionsEn;

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Trophy color="var(--brand-gold)" />
          {learningMode === 'zh' ? 'iVPT 國際越語能力檢定與實戰測驗中心' : 'iVPT & CEFR Mock Proficiency Exams'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋 iVPT A1 - B2 全真題型，包含聲調辨識、南北口音、金額計算、漢越音詞義與職場稱謂'
            : 'Covers authentic iVPT A1-B2 test formats including tones, dialects, currency, Sino-Vietnamese cognates, and business pronouns.'}
        </p>
      </div>

      {/* Gamification Dashboard */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', textAlign: 'center' }}>
          <div>
            <Flame size={30} color="var(--brand-primary)" className="streak-flame-animated" style={{ margin: '0 auto 0.4rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 900 }}>{userStats.streak} {t('days')}</div>
            <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '連續學習天數' : 'Streak Days'}
            </div>
          </div>

          <div>
            <Trophy size={30} color="var(--brand-gold)" style={{ margin: '0 auto 0.4rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 900, color: 'var(--brand-gold)' }}>{userStats.xp} {t('xp')}</div>
            <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '累積經驗值' : 'Total XP'}
            </div>
          </div>

          <div>
            <Award size={30} color="var(--brand-green)" style={{ margin: '0 auto 0.4rem' }} />
            <div style={{ fontSize: '1.5em', fontWeight: 900, color: 'var(--brand-green)' }}>
              {userStats.xp > 200 
                ? (learningMode === 'zh' ? '越語達人 🇻🇳' : 'VietMaster Pro 🇻🇳')
                : (learningMode === 'zh' ? '越語新秀 🎒' : 'Novice Explorer 🎒')
              }
            </div>
            <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '當前頭銜階級' : 'Current Mastery Rank'}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Category Filter Bar */}
      <div className="filter-pill-bar" style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`filter-pill ${selectedCategory === c.id ? 'active' : ''}`}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: selectedCategory === c.id ? 'var(--brand-primary)' : 'var(--bg-card)',
              color: selectedCategory === c.id ? '#fff' : 'var(--text-secondary)',
              border: `1px solid ${selectedCategory === c.id ? 'var(--brand-primary)' : 'var(--border-color)'}`,
              fontWeight: 700,
              fontSize: '0.88rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {learningMode === 'zh' ? c.labelZh : c.labelEn}
          </button>
        ))}
      </div>

      {!quizFinished ? (
        <div className="simulator-box">
          {/* Quiz Question Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontWeight: 800, color: 'var(--brand-accent)', fontSize: '0.9em' }}>
              {isReviewMode && <span style={{ color: '#ef4444', marginRight: '0.5rem' }}>[錯題複習模式]</span>}
              {learningMode === 'zh' ? `第 ${currentQuizIdx + 1} / ${activeDeck.length} 題` : `Question ${currentQuizIdx + 1} of ${activeDeck.length}`}
            </span>
            <span className="tone-symbol" style={{ background: 'var(--bg-main)' }}>
              {activeQuiz.level || 'iVPT A1-A2'}
            </span>
          </div>

          <div style={{ fontSize: '1.3em', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            {learningMode === 'zh' ? activeQuiz.questionZh : activeQuiz.questionEn}
          </div>

          {/* Options List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
            {options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOpt = idx === activeQuiz.answer;
              let btnStyle = {
                padding: '1.1rem 1.3rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-main)',
                border: '1.5px solid var(--border-color)',
                textAlign: 'left',
                fontWeight: 700,
                fontSize: '1.02em',
                cursor: isAnswered ? 'default' : 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.2s ease',
                color: 'var(--text-primary)'
              };

              if (isAnswered) {
                if (isCorrectOpt) {
                  btnStyle.borderColor = 'var(--brand-green)';
                  btnStyle.background = 'rgba(16, 185, 129, 0.1)';
                } else if (isSelected) {
                  btnStyle.borderColor = 'var(--brand-primary)';
                  btnStyle.background = 'rgba(239, 68, 68, 0.1)';
                }
              }

              return (
                <button
                  key={idx}
                  style={btnStyle}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                >
                  <span>{opt}</span>
                  {isAnswered && isCorrectOpt && <CheckCircle size={20} color="var(--brand-green)" />}
                  {isAnswered && isSelected && !isCorrectOpt && <XCircle size={20} color="var(--brand-primary)" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box */}
          {isAnswered && (
            <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem', animation: 'fadeInContent 0.3s ease' }}>
              <div style={{ fontWeight: 800, color: selectedOption === activeQuiz.answer ? 'var(--brand-green)' : 'var(--brand-primary)', marginBottom: '0.4rem' }}>
                {selectedOption === activeQuiz.answer ? '🎉 ' + t('common.correct') : '❌ ' + t('common.wrong')}
              </div>
              <div style={{ fontSize: '0.94em', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <strong>{t('common.explanation')}：</strong>
                {learningMode === 'zh' ? activeQuiz.explanationZh : activeQuiz.explanationEn}
              </div>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                className="control-btn"
                style={{ background: 'var(--brand-accent)', color: '#fff', padding: '0.75rem 1.6rem', fontWeight: 800 }}
                onClick={handleNextQuiz}
              >
                <span>{currentQuizIdx < activeDeck.length - 1 ? (learningMode === 'zh' ? '下一題' : 'Next') : (learningMode === 'zh' ? '查看成績單' : 'View Results')}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Results Card */
        <div className="simulator-box" style={{ textAlign: 'center', padding: '3rem 1.5rem' }}>
          <div style={{ fontSize: '3.5em', marginBottom: '0.5rem' }}>🏆</div>
          <h3 style={{ fontSize: '1.8em', fontWeight: 900, marginBottom: '0.5rem' }}>
            {learningMode === 'zh' ? '恭喜完成 iVPT 模擬測驗！' : 'Quiz Completed!'}
          </h3>
          <div style={{ fontSize: '1.3em', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '1.5rem' }}>
            {learningMode === 'zh' ? `總分：${score} / ${activeDeck.length} 題 (${Math.round((score/activeDeck.length)*100)}分)` : `Score: ${score} / ${activeDeck.length} (${Math.round((score/activeDeck.length)*100)}%)`}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="control-btn"
              style={{ background: 'var(--brand-accent)', color: '#fff', padding: '0.85rem 1.8rem', fontWeight: 800 }}
              onClick={handleRestartQuiz}
            >
              <RefreshCw size={18} />
              <span>{learningMode === 'zh' ? '重新測驗' : 'Retake Quiz'}</span>
            </button>

            {wrongQuizzes.length > 0 && !isReviewMode && (
              <button
                className="control-btn"
                style={{ background: '#ef4444', color: '#fff', padding: '0.85rem 1.8rem', fontWeight: 800 }}
                onClick={handleStartReviewMistakes}
              >
                <span>{learningMode === 'zh' ? `🚨 複習錯題 (${wrongQuizzes.length}題)` : `Review Mistakes (${wrongQuizzes.length})`}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
