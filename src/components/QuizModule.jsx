import React, { useState, useEffect } from 'react';
import { Trophy, CheckCircle, XCircle, Award, Flame, RefreshCw, Volume2, ShieldCheck } from 'lucide-react';
import { quizzes } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const QuizModule = ({ userStats, updateUserStats, selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const activeQuiz = quizzes[currentQuizIdx] || quizzes[0];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === activeQuiz.answer) {
      setScore(prev => prev + 1);
      if (updateUserStats) updateUserStats(25);
    }
  };

  const handleNextQuiz = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuizIdx < quizzes.length - 1) {
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
          {learningMode === 'zh' ? 'iVPT 國際檢定與實戰測驗中心' : 'iVPT & CEFR Mock Proficiency Exams'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋 iVPT A1 - B2 全真題型，包含聲調辨識、南北口音、金額計算、漢越音詞義與職場稱謂'
            : 'Covers authentic iVPT A1-B2 test formats including tones, dialects, currency, Sino-Vietnamese cognates, and business pronouns'}
        </p>
      </div>

      {/* Stats Dashboard Card */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', marginBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <Flame size={32} color="var(--brand-primary)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 800 }}>{userStats.streak} {t('days')}</div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '連續學習天數' : 'Streak Days'}
            </div>
          </div>

          <div>
            <Trophy size={32} color="var(--brand-gold)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 800, color: 'var(--brand-gold)' }}>{userStats.xp} {t('xp')}</div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '累積經驗值' : 'Total XP'}
            </div>
          </div>

          <div>
            <Award size={32} color="var(--brand-green)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-green)' }}>
              {userStats.xp > 200 
                ? (learningMode === 'zh' ? '越南語達人 🇻🇳' : 'VietMaster Pro 🇻🇳')
                : (learningMode === 'zh' ? '越語新秀 🎒' : 'Novice Explorer 🎒')
              }
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              {learningMode === 'zh' ? '當前稱號等級' : 'Proficiency Rank'}
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Card Container */}
      {!quizFinished ? (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9em', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="tone-symbol" style={{ background: 'var(--brand-primary)', color: '#fff', fontWeight: 800 }}>
                iVPT {activeQuiz.level}
              </span>
              <span>{learningMode === 'zh' ? `題目 ${currentQuizIdx + 1} / ${quizzes.length}` : `Question ${currentQuizIdx + 1} of ${quizzes.length}`}</span>
            </div>
            <span>{learningMode === 'zh' ? `當前得分：${score} / ${quizzes.length}` : `Score: ${score} / ${quizzes.length}`}</span>
          </div>

          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
            {learningMode === 'zh' ? activeQuiz.questionZh : activeQuiz.questionEn}
          </h3>

          {/* Options list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {options.map((option, idx) => {
              const optKey = `quiz_opt_${idx}`;
              let btnStyle = { background: 'var(--bg-card)', borderColor: 'var(--border-color)' };
              if (isAnswered) {
                if (idx === activeQuiz.answer) {
                  btnStyle = { background: 'rgba(16, 185, 129, 0.2)', borderColor: 'var(--brand-green)', color: 'var(--brand-green)' };
                } else if (idx === selectedOption) {
                  btnStyle = { background: 'rgba(239, 68, 68, 0.2)', borderColor: '#ef4444', color: '#ef4444' };
                }
              }

              return (
                <button
                  key={idx}
                  className="control-btn"
                  style={{ ...btnStyle, padding: '1rem', justifyContent: 'space-between', fontSize: '1.05em', textAlign: 'left' }}
                  onClick={() => handleSelectOption(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontWeight: 800, width: '24px' }}>{String.fromCharCode(65 + idx)}.</span>
                    <span>{option}</span>
                  </div>
                  {isAnswered && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        playSpeech(option, optKey);
                      }}
                      style={{ padding: '0.2rem 0.5rem', color: 'var(--brand-accent)', cursor: 'pointer' }}
                    >
                      <Volume2 size={16} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div style={{ padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-accent)', marginBottom: '1.5rem', borderLeft: `4px solid ${selectedOption === activeQuiz.answer ? 'var(--brand-green)' : '#ef4444'}` }}>
              <div style={{ fontWeight: 800, marginBottom: '0.35rem', color: selectedOption === activeQuiz.answer ? 'var(--brand-green)' : '#ef4444' }}>
                {selectedOption === activeQuiz.answer 
                  ? (learningMode === 'zh' ? '✅ 回答正確！獲得 +25 XP' : '✅ Correct! Earned +25 XP') 
                  : (learningMode === 'zh' ? '❌ 回答有誤！' : '❌ Incorrect!')
                }
              </div>
              <div style={{ fontSize: '0.95em', color: 'var(--text-secondary)', lineHeight: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{learningMode === 'zh' ? '解析說明：' : 'Explanation: '}</strong>
                  {learningMode === 'zh' ? activeQuiz.explanationZh : activeQuiz.explanationEn}
                </div>
              </div>
            </div>
          )}

          {isAnswered && (
            <button 
              className="control-btn" 
              style={{ background: 'var(--brand-accent)', color: '#fff', padding: '0.75rem 1.5rem', fontSize: '1em' }}
              onClick={handleNextQuiz}
            >
              {currentQuizIdx < quizzes.length - 1 
                ? (learningMode === 'zh' ? '下一題 ➔' : 'Next Question ➔')
                : (learningMode === 'zh' ? '查看總成績結果 🏆' : 'View Results 🏆')
              }
            </button>
          )}
        </div>
      ) : (
        /* Quiz Result Finish Screen */
        <div className="simulator-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <Trophy size={64} color="var(--brand-gold)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.8em', fontWeight: 800, marginBottom: '0.5rem' }}>
            {learningMode === 'zh' 
              ? `測驗完成！你的總得分：${score} / ${quizzes.length}`
              : `Exam Finished! Your Score: ${score} / ${quizzes.length}`
            }
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {learningMode === 'zh'
              ? `恭喜獲得 +${score * 25} XP 經驗值獎勵！`
              : `Congratulations! You gained +${score * 25} XP.`
            }
          </p>

          <button className="control-btn" style={{ background: 'var(--brand-primary)', color: '#fff', padding: '0.75rem 1.5rem' }} onClick={handleRestartQuiz}>
            <RefreshCw size={18} /> {learningMode === 'zh' ? '再測驗一次' : 'Retake Exam'}
          </button>
        </div>
      )}
    </div>
  );
};
