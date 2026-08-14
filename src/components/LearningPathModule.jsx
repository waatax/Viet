import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag, Sparkles, Award } from 'lucide-react';
import { learningPath } from '../data/vietnameseData';
import { useLanguage } from '../context/LanguageContext';

export const LearningPathModule = ({ setActiveTab }) => {
  const { learningMode, loc, t } = useLanguage();

  // Which stages the learner has marked complete (persisted locally)
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('viet_path_progress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('viet_path_progress', JSON.stringify(completed));
  }, [completed]);

  const toggleStage = (id) => {
    setCompleted(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const percent = Math.round((completed.length / learningPath.length) * 100);
  const currentStage = learningPath.find(s => !completed.includes(s.id));

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Compass color="var(--brand-primary)" />
          {learningMode === 'zh' ? '學習路徑總覽：從零基礎到越語高手 (CEFR & iVPT 指標)' : 'Learning Path: Absolute Beginner to Fluency'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '對照台灣教育部新住民語文課綱能力指標、iVPT 檢定分級與 CEFR 標準，將 10 個核心模組串聯為階梯式闖關路線。勾選完成階段，清晰掌握自身語言實力！'
            : 'Mapped to Taiwan MOE curriculum indicators, iVPT levels, and CEFR standards. Sequence through the 10 modules and track milestone progress.'}
        </p>
      </div>

      {/* Overall Progress Dashboard */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', marginBottom: '2.2rem', border: '1.5px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1em' }}>
            <Target size={20} color="var(--brand-gold)" />
            {learningMode === 'zh' ? '整體通關進度' : 'Overall Milestone Progress'}
          </div>
          <div style={{ fontWeight: 900, color: 'var(--brand-primary)', fontSize: '1.45em' }}>
            {percent}% <span style={{ fontSize: '0.62em', color: 'var(--text-muted)', fontWeight: 700 }}>({completed.length}/{learningPath.length} 階段)</span>
          </div>
        </div>

        <div style={{ height: '12px', background: 'var(--bg-main)', borderRadius: '999px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <div style={{ height: '100%', width: `${percent}%`, background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-gold))', transition: 'width 0.4s ease', borderRadius: '999px' }} />
        </div>

        <div style={{ marginTop: '0.9rem', fontSize: '0.94em', color: 'var(--text-secondary)' }}>
          {currentStage ? (
            <>
              <strong style={{ color: 'var(--brand-accent)' }}>
                {learningMode === 'zh' ? '👉 你目前正在攻克：' : '👉 You are currently at: '}
              </strong>
              <span style={{ fontWeight: 800, color: 'var(--text-primary)' }}>{loc(currentStage, 'title')}</span>
            </>
          ) : (
            <strong style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={18} />
              {learningMode === 'zh' ? '🎉 恭喜！全部學習階段已全數通關 — 你已具備卓越的越語實戰溝通能力！' : '🎉 All stages completed — You have achieved high fluency in Vietnamese!'}
            </strong>
          )}
        </div>
      </div>

      {/* Stage Roadmap Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
        {learningPath.map((stage, idx) => {
          const done = completed.includes(stage.id);
          const isCurrent = currentStage && currentStage.id === stage.id;
          return (
            <div
              key={stage.id}
              className="learning-card"
              style={{
                borderLeft: `6px solid ${done ? 'var(--brand-green)' : isCurrent ? 'var(--brand-primary)' : 'var(--border-color)'}`,
                opacity: done ? 0.9 : 1,
                background: done ? 'var(--bg-card-subtle)' : 'var(--bg-card)'
              }}
            >
              {/* Stage header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.9rem' }}>
                <div style={{ flex: '1 1 320px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'var(--brand-primary)', color: '#fff', fontWeight: 900, fontSize: '0.78em', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      CEFR {stage.level}
                    </span>
                    <span style={{ background: 'var(--bg-accent)', color: 'var(--brand-gold)', fontWeight: 800, fontSize: '0.78em', padding: '0.2rem 0.65rem', borderRadius: 'var(--radius-full)' }}>
                      {loc(stage, 'ivpt')}
                    </span>
                    {isCurrent && (
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 800, fontSize: '0.82em' }}>
                        ● {learningMode === 'zh' ? '進行中' : 'In progress'}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.25em', fontWeight: 800, color: 'var(--text-primary)', textDecoration: done ? 'none' : 'none' }}>
                    {loc(stage, 'title')}
                  </h3>
                  <div style={{ fontSize: '0.86em', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
                    ⏱ {loc(stage, 'duration')} · 📚 {learningMode === 'zh' ? `目標詞彙 ${stage.vocabTarget} 字` : `${stage.vocabTarget} words target`}
                  </div>
                </div>

                <button
                  className="control-btn"
                  onClick={() => toggleStage(stage.id)}
                  style={{
                    background: done ? 'var(--brand-green)' : 'var(--bg-main)',
                    color: done ? '#fff' : 'inherit',
                    fontWeight: 800,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {done ? <CheckCircle size={16} /> : <Circle size={16} />}
                  <span>
                    {done
                      ? (learningMode === 'zh' ? '已通關' : 'Completed')
                      : (learningMode === 'zh' ? '標記完成' : 'Mark done')}
                  </span>
                </button>
              </div>

              {/* Stage goal */}
              <div style={{ background: 'var(--bg-accent)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.9rem', fontSize: '0.94em', borderLeft: '3px solid var(--brand-accent)' }}>
                🎯 <strong>{learningMode === 'zh' ? '階段目標：' : 'Stage goal: '}</strong>
                {loc(stage, 'goal')}
              </div>

              {/* Can-do indicators */}
              <div style={{ marginBottom: '0.9rem' }}>
                <div style={{ fontSize: '0.86em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  {learningMode === 'zh' ? '能力指標 (Can-do Statements)' : 'Can-do Statements'}
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {(learningMode === 'zh' ? stage.canDoZh : stage.canDoEn).map((item, i) => (
                    <li key={i} style={{ fontSize: '0.92em', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Linked modules */}
              <div style={{ marginBottom: '0.9rem' }}>
                <div style={{ fontSize: '0.86em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={15} color="var(--brand-accent)" />
                  {learningMode === 'zh' ? '本階段推薦學習模組' : 'Recommended modules for this stage'}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {stage.modules.map(modId => (
                    <button
                      key={modId}
                      className="control-btn"
                      onClick={() => setActiveTab(modId)}
                      style={{ fontSize: '0.86em', background: 'var(--bg-main)', padding: '0.4rem 0.8rem' }}
                    >
                      <span>{t(`tabs.${modId}`)}</span>
                      <ArrowRight size={14} color="var(--brand-accent)" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone */}
              <div style={{ fontSize: '0.88em', color: 'var(--brand-gold)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginTop: 'auto' }}>
                <Flag size={15} style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                <span>{loc(stage, 'milestone')}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
