import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag } from 'lucide-react';
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
  // First unfinished stage is where the learner stands right now
  const currentStage = learningPath.find(s => !completed.includes(s.id));

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Compass color="var(--brand-primary)" />
          {learningMode === 'zh' ? '學習路徑：從零基礎到越文高手' : 'Learning Path: Absolute Beginner to Mastery'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '對照台灣教育部東南亞語文課綱能力指標、iVPT 檢定分級與 CEFR 標準，把 10 個學習模組串成一條有順序的路。勾選已完成的階段，隨時知道自己站在哪裡。'
            : 'Mapped to Taiwan MOE Southeast Asian language curriculum indicators, iVPT levels, and CEFR standards. The 10 modules are sequenced into one route — check off stages to track where you stand.'}
        </p>
      </div>

      {/* Overall progress bar */}
      <div className="simulator-box" style={{ background: 'var(--bg-card)', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '0.8rem' }}>
          <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Target size={18} color="var(--brand-gold)" />
            {learningMode === 'zh' ? '整體進度' : 'Overall Progress'}
          </div>
          <div style={{ fontWeight: 900, color: 'var(--brand-primary)', fontSize: '1.3em' }}>
            {percent}% <span style={{ fontSize: '0.6em', color: 'var(--text-muted)', fontWeight: 700 }}>({completed.length}/{learningPath.length})</span>
          </div>
        </div>
        <div style={{ height: '10px', background: 'var(--bg-main)', borderRadius: '999px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
          <div style={{ height: '100%', width: `${percent}%`, background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-gold))', transition: 'width 0.3s ease' }} />
        </div>
        <div style={{ marginTop: '0.8rem', fontSize: '0.9em', color: 'var(--text-secondary)' }}>
          {currentStage ? (
            <>
              <strong style={{ color: 'var(--brand-accent)' }}>
                {learningMode === 'zh' ? '你現在在這裡：' : 'You are here: '}
              </strong>
              {loc(currentStage, 'title')}
            </>
          ) : (
            <strong style={{ color: 'var(--brand-gold)' }}>
              {learningMode === 'zh' ? '🎉 全部階段完成 — 你已經是越文高手了！' : '🎉 All stages complete — you have reached mastery!'}
            </strong>
          )}
        </div>
      </div>

      {/* Stage roadmap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {learningPath.map((stage, idx) => {
          const done = completed.includes(stage.id);
          const isCurrent = currentStage && currentStage.id === stage.id;
          return (
            <div
              key={stage.id}
              className="learning-card"
              style={{
                borderLeft: `5px solid ${done ? 'var(--brand-gold)' : isCurrent ? 'var(--brand-primary)' : 'var(--border-color)'}`,
                opacity: done ? 0.85 : 1
              }}
            >
              {/* Stage header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                <div style={{ flex: '1 1 320px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ background: 'var(--brand-primary)', color: '#fff', fontWeight: 900, fontSize: '0.78em', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                      CEFR {stage.level}
                    </span>
                    <span style={{ background: 'var(--bg-accent)', color: 'var(--brand-gold)', fontWeight: 800, fontSize: '0.78em', padding: '0.15rem 0.55rem', borderRadius: '999px' }}>
                      {loc(stage, 'ivpt')}
                    </span>
                    {isCurrent && (
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 800, fontSize: '0.78em' }}>
                        ● {learningMode === 'zh' ? '進行中' : 'In progress'}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.2em', fontWeight: 800, textDecoration: done ? 'line-through' : 'none' }}>
                    {loc(stage, 'title')}
                  </h3>
                  <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    ⏱ {loc(stage, 'duration')} · 📚 {learningMode === 'zh' ? `目標字彙 ${stage.vocabTarget} 字` : `${stage.vocabTarget} word target`}
                  </div>
                </div>

                <button
                  className="control-btn"
                  onClick={() => toggleStage(stage.id)}
                  style={{
                    background: done ? 'var(--brand-gold)' : 'var(--bg-main)',
                    color: done ? '#000' : 'inherit',
                    fontWeight: 800,
                    whiteSpace: 'nowrap'
                  }}
                >
                  {done ? <CheckCircle size={16} /> : <Circle size={16} />}
                  <span>
                    {done
                      ? (learningMode === 'zh' ? '已完成' : 'Completed')
                      : (learningMode === 'zh' ? '標記完成' : 'Mark done')}
                  </span>
                </button>
              </div>

              {/* Stage goal */}
              <div style={{ background: 'var(--bg-accent)', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.9rem', fontSize: '0.92em' }}>
                🎯 <strong>{learningMode === 'zh' ? '階段目標：' : 'Stage goal: '}</strong>
                {loc(stage, 'goal')}
              </div>

              {/* Can-do indicators */}
              <div style={{ marginBottom: '0.9rem' }}>
                <div style={{ fontSize: '0.85em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                  {learningMode === 'zh' ? '能力指標 (Can-do)' : 'Can-do Statements'}
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  {(learningMode === 'zh' ? stage.canDoZh : stage.canDoEn).map((item, i) => (
                    <li key={i} style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Linked modules */}
              <div style={{ marginBottom: '0.9rem' }}>
                <div style={{ fontSize: '0.85em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <BookOpen size={15} color="var(--brand-accent)" />
                  {learningMode === 'zh' ? '本階段使用的模組' : 'Modules for this stage'}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {stage.modules.map(modId => (
                    <button
                      key={modId}
                      className="control-btn"
                      onClick={() => setActiveTab(modId)}
                      style={{ fontSize: '0.85em', background: 'var(--bg-main)' }}
                    >
                      <span>{t(`tabs.${modId}`)}</span>
                      <ArrowRight size={14} color="var(--brand-accent)" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone */}
              <div style={{ fontSize: '0.85em', color: 'var(--brand-gold)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
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
