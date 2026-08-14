import React, { useState } from 'react';
import { Trophy, CheckCircle, XCircle, Award, Flame, RefreshCw, Volume2 } from 'lucide-react';
import { quizzes } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const QuizModule = ({ userStats, updateUserStats, selectedAccent }) => {
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const activeQuiz = quizzes[currentQuizIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === activeQuiz.answer) {
      setScore(prev => prev + 1);
      updateUserStats(25); // +25 XP
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

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Trophy color="var(--brand-gold)" />
          越語綜合實戰測驗與學習成就 (Quiz & Achievements)
        </h2>
        <p className="section-desc">包含聲調、南北口音、數字發音與形容詞語法測驗</p>
      </div>

      {/* Stats Dashboard Card */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
          <div>
            <Flame size={32} color="var(--brand-primary)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 800 }}>{userStats.streak} 天</div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>連續學習天數</div>
          </div>

          <div>
            <Trophy size={32} color="var(--brand-gold)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 800, color: 'var(--brand-gold)' }}>{userStats.xp} XP</div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>累積經驗值</div>
          </div>

          <div>
            <Award size={32} color="var(--brand-green)" style={{ margin: '0 auto 0.5rem' }} />
            <div style={{ fontSize: '1.8em', fontWeight: 800, color: 'var(--brand-green)' }}>
              {userStats.xp > 200 ? '越南語達人 🇻🇳' : '越語初學者 🎒'}
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>當前頭銜階級</div>
          </div>
        </div>
      </div>

      {/* Quiz Card Container */}
      {!quizFinished ? (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontSize: '0.9em', color: 'var(--text-muted)' }}>
            <span>題目 {currentQuizIdx + 1} / {quizzes.length}</span>
            <span>當前得分：{score} / {quizzes.length}</span>
          </div>

          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {activeQuiz.question}
          </h3>

          {/* Options list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {activeQuiz.options.map((option, idx) => {
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
                  style={{ ...btnStyle, padding: '1rem', justifyContent: 'flex-start', fontSize: '1.05em', textAlign: 'left' }}
                  onClick={() => handleSelectOption(idx)}
                >
                  <span style={{ fontWeight: 800, width: '24px' }}>{String.fromCharCode(65 + idx)}.</span>
                  <span>{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Banner */}
          {isAnswered && (
            <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'var(--bg-accent)', marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>
                {selectedOption === activeQuiz.answer ? '✅ 正確！' : '❌ 答錯了！'}
              </div>
              <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
                解析：{activeQuiz.explanation}
              </div>
            </div>
          )}

          {isAnswered && (
            <button 
              className="control-btn" 
              style={{ background: 'var(--brand-accent)', color: '#fff', padding: '0.75rem 1.5rem' }}
              onClick={handleNextQuiz}
            >
              {currentQuizIdx < quizzes.length - 1 ? '下一題 ➔' : '查看總成績結果 🏆'}
            </button>
          )}
        </div>
      ) : (
        /* Quiz Result Finish Screen */
        <div className="simulator-box" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <Trophy size={64} color="var(--brand-gold)" style={{ margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.8em', fontWeight: 800, marginBottom: '0.5rem' }}>
            測驗完成！你的得分：{score} / {quizzes.length}
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            恭喜獲得 <strong>+{score * 25} XP</strong> 經驗值獎勵！
          </p>

          <button className="control-btn" style={{ background: 'var(--brand-primary)', color: '#fff' }} onClick={handleRestartQuiz}>
            <RefreshCw size={18} /> 再測驗一次
          </button>
        </div>
      )}
    </div>
  );
};
