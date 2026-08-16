import React, { useState, useEffect } from 'react';
import {
  Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag, Sparkles,
  AudioLines, MessagesSquare, ShoppingBag, GraduationCap, Play, Route
} from 'lucide-react';
import { learningPath } from '../data/vietnameseData';
import { useLanguage } from '../context/LanguageContext';

export const LearningPathModule = ({ setActiveTab }) => {
  const { learningMode, loc, t } = useLanguage();

  // Which stages the learner has marked complete (persisted locally)
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_path_progress');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('viet_path_progress', JSON.stringify(completed));
  }, [completed]);

  const toggleStage = (id) => {
    setCompleted(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const percent = Math.round((completed.length / learningPath.length) * 100);
  const currentStage = learningPath.find(s => !completed.includes(s.id));

  const quickStarts = [
    { id: 'literature', icon: BookOpen, titleZh: '49輪經典古文庫', titleEn: 'Classical Matrix', descZh: '245 部名著白話深研校勘', descEn: '245 masterpieces review', tone: 'purple' },
    { id: 'alphabet', icon: AudioLines, titleZh: '發音打底', titleEn: 'Start with sounds', descZh: '29 字母與 6 聲調', descEn: '29 letters and 6 tones', tone: 'blue' },
    { id: 'conversation', icon: MessagesSquare, titleZh: '情境開口', titleEn: 'Speak in context', descZh: '真實對話與跟讀', descEn: 'Dialogues and shadowing', tone: 'red' },
    { id: 'shopping', icon: ShoppingBag, titleZh: '旅行實戰', titleEn: 'Travel essentials', descZh: '數字、貨幣與購物', descEn: 'Numbers, money and shopping', tone: 'gold' },
    { id: 'quiz', icon: GraduationCap, titleZh: '能力檢測', titleEn: 'Check your level', descZh: 'iVPT 分級練習', descEn: 'iVPT level practice', tone: 'green' }
  ];

  return (
    <div className="module-container">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> {learningMode === 'zh' ? '專為繁體中文學習者打造' : 'Vietnamese that works in real life'}</div>
          <h1 id="home-title">
            {learningMode === 'zh' ? <>從第一聲問候，<span>走進真正的越南。</span></> : <>Learn Vietnamese.<span>Use it with confidence.</span></>}
          </h1>
          <p>
            {learningMode === 'zh'
              ? '整合南北口音、實境會話、漢越音與 iVPT 分級，讓每一次練習都更接近真實溝通。'
              : 'Master accents, real-world conversations, Sino-Vietnamese vocabulary and iVPT skills in one focused path.'}
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => setActiveTab(currentStage?.modules?.[0] || 'alphabet')}>
              <Play size={17} fill="currentColor" /> {learningMode === 'zh' ? '繼續學習' : 'Continue learning'}
            </button>
            <button className="secondary-action" onClick={() => document.getElementById('learning-roadmap')?.scrollIntoView({ behavior: 'smooth' })}>
              <Route size={18} /> {learningMode === 'zh' ? '查看完整路徑' : 'View full path'}
            </button>
          </div>
        </div>

        <div className="hero-progress-card">
          <div className="progress-orbit" style={{ '--progress': `${percent * 3.6}deg` }}>
            <div><strong>{percent}%</strong><span>{learningMode === 'zh' ? '總進度' : 'progress'}</span></div>
          </div>
          <div className="hero-progress-copy">
            <span>{learningMode === 'zh' ? '目前學習階段' : 'Current milestone'}</span>
            <strong>{currentStage ? loc(currentStage, 'title') : (learningMode === 'zh' ? '全部通關' : 'Path completed')}</strong>
            <small>{completed.length} / {learningPath.length} {learningMode === 'zh' ? '階段完成' : 'stages complete'}</small>
          </div>
        </div>
      </section>

      <section className="quick-start-section" aria-labelledby="quick-start-title">
        <div className="section-heading-row">
          <div>
            <span className="section-kicker">{learningMode === 'zh' ? '快速開始' : 'QUICK START'}</span>
            <h2 id="quick-start-title">{learningMode === 'zh' ? '今天想練什麼？' : 'What would you like to practice?'}</h2>
          </div>
          <span className="section-note">{learningMode === 'zh' ? '每次 5–10 分鐘也能穩定前進' : 'Make progress in just 5–10 minutes'}</span>
        </div>
        <div className="quick-start-grid">
          {quickStarts.map(({ id, icon: Icon, titleZh, titleEn, descZh, descEn, tone }) => (
            <button key={id} className={`quick-start-card tone-${tone}`} onClick={() => setActiveTab(id)}>
              <span className="quick-icon"><Icon size={23} /></span>
              <span><strong>{learningMode === 'zh' ? titleZh : titleEn}</strong><small>{learningMode === 'zh' ? descZh : descEn}</small></span>
              <ArrowRight className="quick-arrow" size={18} />
            </button>
          ))}
        </div>
      </section>

      {/* Stage Roadmap Cards */}
      <div id="learning-roadmap" className="roadmap-grid">
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
