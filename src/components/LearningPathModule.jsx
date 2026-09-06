import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass, CheckCircle, Circle, Target, BookOpen, ArrowRight, Flag, Sparkles,
  AudioLines, MessagesSquare, ShoppingBag, GraduationCap, Play, Route, Brain, Clock, Layers3,
  Zap, LifeBuoy, ShieldCheck, Award, Briefcase, CheckSquare, Square, ChevronDown, ChevronUp, Flame
} from 'lucide-react';
import { learningPath, flashcardsDeck } from '../data/vietnameseData';
import { srsEngine } from '../services/srsEngine';
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

  // Fast-track completed days count
  const [fastTrackCount, setFastTrackCount] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_fasttrack_completed_days');
      return saved ? JSON.parse(saved).length : 0;
    } catch {
      return 0;
    }
  });

  // Interactive Can-Do Checkmarks Persisted State
  const [checkedCanDos, setCheckedCanDos] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_cando_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Daily Study Goal in Minutes (5, 10, 20)
  const [dailyGoalMinutes, setDailyGoalMinutes] = useState(() => {
    try {
      return parseInt(localStorage.getItem('viet_daily_goal_min') || '10', 10);
    } catch {
      return 10;
    }
  });

  // Expanded Stage Details Accordion
  const [expandedStageId, setExpandedStageId] = useState(null);

  // SRS Data
  const [srsStats, setSrsStats] = useState({ dueCount: 0, masteredCount: 0, totalTracked: 0 });

  useEffect(() => {
    const srsData = srsEngine.loadSrsData();
    const now = Date.now();
    let due = 0;
    let mastered = 0;
    const trackedKeys = Object.keys(srsData);
    
    trackedKeys.forEach(id => {
      const item = srsData[id];
      if (item.dueDate && item.dueDate <= now) due++;
      if (item.interval && item.interval >= 14) mastered++;
    });

    setSrsStats({
      dueCount: due,
      masteredCount: mastered,
      totalTracked: trackedKeys.length
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('viet_path_progress', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('viet_cando_checklist', JSON.stringify(checkedCanDos));
  }, [checkedCanDos]);

  useEffect(() => {
    localStorage.setItem('viet_daily_goal_min', dailyGoalMinutes.toString());
  }, [dailyGoalMinutes]);

  const toggleStage = (id) => {
    setCompleted(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const toggleCanDo = (stageId, canDoIdx) => {
    const key = `${stageId}_${canDoIdx}`;
    setCheckedCanDos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const percent = Math.round((completed.length / learningPath.length) * 100);
  const currentStage = learningPath.find(s => !completed.includes(s.id)) || learningPath[0];

  const quickStarts = [
    { id: 'business', icon: Briefcase, titleZh: '商務出差旗艦', titleEn: 'Business & FDI Hub', descZh: '談判·紅發票·工廠巡檢·應酬', descEn: 'Negotiation, Invoices & Factory', tone: 'gold' },
    { id: 'fasttrack', icon: Zap, titleZh: '7天生活速成', titleEn: '7-Day Fast-Track', descZh: '35 句高頻破冰實戰', descEn: '35 Survival Phrases', tone: 'gold' },
    { id: 'science', icon: Brain, titleZh: '科學方法研究', titleEn: 'Science & SLA', descZh: '5 大跨學科學習體系', descEn: '5-Discipline SLA Hub', tone: 'purple' },
    { id: 'emergency', icon: LifeBuoy, titleZh: '生活急救錦囊', titleEn: 'Survival Audio Kit', descZh: '街頭出差一鍵出聲', descEn: 'Instant Tap-to-Speak', tone: 'red' },
    { id: 'alphabet', icon: AudioLines, titleZh: '發音聲調打底', titleEn: 'Sounds & Tones', descZh: '29 字母與 6 聲調', descEn: '29 letters & 6 tones', tone: 'blue' },
    { id: 'conversation', icon: MessagesSquare, titleZh: '26大情境對話', titleEn: '26 Scenarios', descZh: '真實對話與角色扮演', descEn: 'Dialogues & Role-Play', tone: 'red' },
    { id: 'hanviet', icon: BookOpen, titleZh: '漢越同源字根', titleEn: 'Han-Viet Roots', descZh: '百大字根倍速記詞', descEn: '100 Core cognate roots', tone: 'purple' }
  ];

  return (
    <div className="module-container">
      {/* Hero Section with Live Progress Ring */}
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> {learningMode === 'zh' ? '多學科科學方法 · 專為繁體中文學習者打造' : 'Science-Backed Vietnamese for Everyone'}</div>
          <h1 id="home-title">
            {learningMode === 'zh' ? <>從第一聲問候，<span>走進真正的越南。</span></> : <>Learn Vietnamese.<span>Use it with confidence.</span></>}
          </h1>
          <p>
            {learningMode === 'zh'
              ? '結合 7天生活速成破冰、漢越音認知捷徑、SM-2 遺忘曲線對抗與南北口音切換，讓大眾快樂學好、掌握基本溝通！'
              : 'Master accents, 7-day survival conversations, Sino-Vietnamese cognates, and SM-2 memory curves in one joyful path.'}
          </p>
          <div className="hero-actions">
            <button className="primary-action" onClick={() => setActiveTab('fasttrack')}>
              <Zap size={18} fill="currentColor" /> {learningMode === 'zh' ? '開啟 7 天生活速成破冰' : 'Start 7-Day Fast-Track'}
            </button>
            <button className="secondary-action" onClick={() => setActiveTab('science')}>
              <Brain size={18} /> {learningMode === 'zh' ? '檢視科學研究體系' : 'Explore Science Hub'}
            </button>
          </div>
        </div>

        <div className="hero-progress-card">
          <div className="progress-orbit" style={{ '--progress': `${percent * 3.6}deg` }}>
            <div><strong>{percent}%</strong><span>{learningMode === 'zh' ? '總進度' : 'progress'}</span></div>
          </div>
          <div className="hero-progress-copy">
            <span>{learningMode === 'zh' ? '7天速成進度' : 'Fast-Track Progress'}</span>
            <strong>{fastTrackCount} / 7 {learningMode === 'zh' ? '天已通關' : 'Days Complete'}</strong>
            <small>{completed.length} / {learningPath.length} {learningMode === 'zh' ? '大階段完成' : 'stages complete'}</small>
          </div>
        </div>
      </section>

      {/* Daily Study Goal Selector Bar */}
      <section style={{
        margin: '1.5rem 0',
        padding: '1.1rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(234, 179, 8, 0.15)',
            color: 'var(--brand-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Target size={22} />
          </div>
          <div>
            <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '🎯 今日個人化學習微目標' : '🎯 Daily Micro-Learning Target'}
            </strong>
            <p style={{ margin: '0.2rem 0 0', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '科學證實：每天持續 5~10 分鐘，學習保存率提升 300%' : 'Consistency beats intensity: 5-10 mins daily yields 300% higher retention'}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { min: 5, labelZh: '🌱 輕鬆 5 分鐘', labelEn: '🌱 5 mins' },
            { min: 10, labelZh: '⚡ 標準 10 分鐘', labelEn: '⚡ 10 mins' },
            { min: 20, labelZh: '🔥 衝刺 20 分鐘', labelEn: '🔥 20 mins' }
          ].map(opt => (
            <button
              key={opt.min}
              onClick={() => setDailyGoalMinutes(opt.min)}
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                border: dailyGoalMinutes === opt.min ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: dailyGoalMinutes === opt.min ? 'var(--bg-accent)' : 'var(--bg-main)',
                color: dailyGoalMinutes === opt.min ? 'var(--brand-primary)' : 'var(--text-secondary)',
                fontWeight: dailyGoalMinutes === opt.min ? 800 : 600,
                fontSize: '0.86rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {learningMode === 'zh' ? opt.labelZh : opt.labelEn}
            </button>
          ))}
        </div>
      </section>

      {/* 7-Day Fast-Track Banner */}
      <section style={{
        margin: '1.75rem 0',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(234, 179, 8, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
        border: '1.5px solid rgba(234, 179, 8, 0.35)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #ef4444, #f59e0b)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 20px rgba(239, 68, 68, 0.25)'
          }}>
            ⚡
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '7天生活基本溝通速成破冰計畫' : '7-Day Fast-Track Survival Vietnamese'}
              </strong>
              <span style={{
                background: 'var(--brand-gold)',
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                {learningMode === 'zh' ? '大眾快樂零負擔' : 'Zero Friction'}
              </span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '每天 5 分鐘，精選 35 句打招呼、點咖啡、市場殺價、Grab搭車、稱謂防踩雷與交友實戰金句！'
                : '5 minutes a day: 35 essential phrases for greetings, coffee, bargaining, Grab rides, pronouns, and making friends!'}
            </p>
          </div>
        </div>

        <button
          className="primary-action"
          onClick={() => setActiveTab('fasttrack')}
          style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          <Play size={18} fill="currentColor" />
          {learningMode === 'zh' ? '立即前往速成島' : 'Start Fast-Track'}
        </button>
      </section>

      {/* Vietnam Macro & Policy Intelligence Portal Banner (Paperluz format) */}
      <section style={{
        margin: '1.75rem 0',
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, rgba(11, 19, 41, 0.95) 0%, rgba(19, 31, 61, 0.95) 100%)',
        border: '1.5px solid #3b82f6',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
        color: '#f8fafc'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: 'var(--radius-md)',
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            boxShadow: '0 8px 20px rgba(37, 99, 235, 0.4)'
          }}>
            🏛️
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <strong style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                {learningMode === 'zh' ? '越南政經 · 國家戰略與宏觀總經情報中心' : 'Vietnam Macro & Policy Intelligence Hub'}
              </strong>
              <span style={{
                background: '#f59e0b',
                color: '#000',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)'
              }}>
                {learningMode === 'zh' ? '智庫與一流新聞規格' : 'Paperluz Standard'}
              </span>
            </div>
            <p style={{ margin: '0.35rem 0 0', fontSize: '0.92rem', color: '#94a3b8' }}>
              {learningMode === 'zh'
                ? 'USD/VND 五年每週匯率走勢追蹤 · 央行與四大行定存放款利率矩陣 · 海關外貿通關法規 · 越共十四大與政經深度調查專題！'
                : '5-Year USD/VND weekly FX trend, SBV & Big 4 deposit/lending rates matrix, trade customs regulations, and in-depth political-economic dossiers!'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setActiveTab('macropol')}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            borderRadius: 'var(--radius-md)',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
            transition: 'all 0.15s ease'
          }}
        >
          <BookOpen size={18} />
          {learningMode === 'zh' ? '進入越南政經門戶' : 'Explore Macro Hub'}
        </button>
      </section>

      {/* SRS Retention Status Hub */}
      <section className="srs-retention-hub" style={{
        margin: '1.75rem 0',
        padding: '1.25rem 1.5rem',
        background: 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(16,185,129,0.08) 100%)',
        border: '1.5px solid rgba(37,99,235,0.25)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--brand-primary)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Brain size={26} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <strong style={{ fontSize: '1.15em', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '🧠 今日大腦記憶保鮮狀態 (SM-2 SRS)' : '🧠 Daily Brain Retention Status (SM-2)'}
              </strong>
              {srsStats.dueCount > 0 ? (
                <span style={{
                  background: '#ef4444',
                  color: '#fff',
                  fontSize: '0.75em',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {learningMode === 'zh' ? `${srsStats.dueCount} 張到期待複習` : `${srsStats.dueCount} Due for review`}
                </span>
              ) : (
                <span style={{
                  background: 'var(--brand-green)',
                  color: '#fff',
                  fontSize: '0.75em',
                  fontWeight: 800,
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {learningMode === 'zh' ? '✓ 記憶狀態絕佳' : '✓ Retention optimal'}
                </span>
              )}
            </div>
            <p style={{ margin: '0.3rem 0 0', fontSize: '0.88em', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? `已進入間隔重複排程：${srsStats.totalTracked} 個單字 · 深度長期記憶 (14d+)：${srsStats.masteredCount} 個`
                : `Active in SRS schedule: ${srsStats.totalTracked} words · Long-term mastered (14d+): ${srsStats.masteredCount} words`}
            </p>
          </div>
        </div>

        <button
          className="primary-action"
          style={{ padding: '0.6rem 1.2rem', fontSize: '0.92rem' }}
          onClick={() => setActiveTab('flashcards')}
        >
          <Layers3 size={17} />
          {learningMode === 'zh' ? '開啟智能閃卡複習' : 'Start SRS Flashcards'}
        </button>
      </section>

      {/* Quick Start Grid */}
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

      {/* CEFR Framework Milestones Matrix Bar */}
      <section style={{
        marginTop: '2rem',
        padding: '1.25rem 1.5rem',
        background: 'var(--bg-card)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase' }}>
              CEFR & iVPT 國際認證對標矩陣
            </span>
            <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.15rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              越語能力成長階段里程碑 (Progress Milestones)
            </h3>
          </div>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            對標歐洲語言共同架構 (CEFR) 與成大 iVPT
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem' }}>
          {[
            { lvl: 'A1 入門', hours: '30h', vocab: '500詞', focus: '發音·聲調·破冰', color: '#3b82f6' },
            { lvl: 'A1+ 初階', hours: '60h', vocab: '1,000詞', focus: '飲食·叫車·數字', color: '#10b981' },
            { lvl: 'A2 基礎', hours: '120h', vocab: '2,000詞', focus: '市場殺價·稱謂', color: '#f59e0b' },
            { lvl: 'B1 職場', hours: '250h', vocab: '3,500詞', focus: '工廠巡檢·商務', color: '#ef4444' },
            { lvl: 'B2 流暢', hours: '450h', vocab: '5,000詞', focus: '南北口音·熱炒', color: '#8b5cf6' },
            { lvl: 'C1 精通', hours: '700h', vocab: '7,500詞', focus: '漢越字根·法律', color: '#06b6d4' },
            { lvl: 'C2 大師', hours: '1000h+', vocab: '10,000+詞', focus: '同傳口譯·經貿', color: '#ec4899' }
          ].map((m, mIdx) => (
            <div
              key={mIdx}
              style={{
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                borderTop: `3px solid ${m.color}`,
                borderRadius: 'var(--radius-sm)',
                padding: '0.7rem 0.55rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontWeight: 900, fontSize: '0.92rem', color: m.color }}>{m.lvl}</div>
              <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                ⏱ {m.hours} · 📚 {m.vocab}
              </div>
              <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '0.3rem' }}>
                {m.focus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stage Roadmap Cards: A1 to C2 with Interactive Can-Do Checklist */}
      <div id="learning-roadmap" className="roadmap-grid" style={{ marginTop: '2.5rem' }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: '0.5rem' }}>
          <span className="section-kicker">{learningMode === 'zh' ? '成長藍圖' : 'LEARNING ROADMAP'}</span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.2rem 0' }}>
            {learningMode === 'zh' ? '🇻🇳 信達雅三位一體：A1 至 C2 七大進階階段' : 'A1 to C2 7-Stage Official Mastery Roadmap'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
            {learningMode === 'zh'
              ? '對標台灣成大 iVPT 與河內國家大學 VINATEST 認證標準，點擊勾選各項實戰能力指標。'
              : 'Aligned with iVPT and VINATEST official language framework standards.'}
          </p>
        </div>

        {learningPath.map((stage, idx) => {
          const done = completed.includes(stage.id);
          const isCurrent = currentStage && currentStage.id === stage.id;
          const isExpanded = expandedStageId === stage.id;
          const canDoList = learningMode === 'zh' ? stage.canDoZh : stage.canDoEn;

          // Calculate checked Can-Dos count
          const stageCheckedCount = canDoList.filter((_, cIdx) => checkedCanDos[`${stage.id}_${cIdx}`]).length;
          const canDoProgress = Math.round((stageCheckedCount / canDoList.length) * 100);

          return (
            <div
              key={stage.id}
              className="learning-card"
              style={{
                borderLeft: `6px solid ${done ? 'var(--brand-green)' : isCurrent ? 'var(--brand-primary)' : 'var(--border-color)'}`,
                opacity: done ? 0.95 : 1,
                background: done ? 'var(--bg-card-subtle)' : 'var(--bg-card)',
                boxShadow: isCurrent ? '0 8px 30px rgba(218, 37, 28, 0.12)' : 'var(--card-shadow)',
                transition: 'all 0.2s ease'
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
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 800, fontSize: '0.82em', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Flame size={14} color="var(--brand-accent)" />
                        {learningMode === 'zh' ? '目前進行中' : 'In progress'}
                      </span>
                    )}
                  </div>
                  <h3 style={{ fontSize: '1.28em', fontWeight: 900, color: 'var(--text-primary)' }}>
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
                      ? (learningMode === 'zh' ? '已全階段通關' : 'Completed')
                      : (learningMode === 'zh' ? '標記通關' : 'Mark done')}
                  </span>
                </button>
              </div>

              {/* Stage goal */}
              <div style={{ background: 'var(--bg-accent)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.9rem', fontSize: '0.94em', borderLeft: '3px solid var(--brand-accent)' }}>
                🎯 <strong>{learningMode === 'zh' ? '核心目標：' : 'Stage goal: '}</strong>
                {loc(stage, 'goal')}
              </div>

              {/* Interactive Can-Do Checklist */}
              <div style={{ marginBottom: '1rem', background: 'var(--bg-main)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <div style={{ fontSize: '0.88em', fontWeight: 800, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckSquare size={16} color="var(--brand-green)" />
                    <span>{learningMode === 'zh' ? '能力指標任務自檢 (Can-Do)' : 'Can-Do Progress Checklist'}</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-green)' }}>
                    {stageCheckedCount} / {canDoList.length} ({canDoProgress}%)
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {canDoList.map((item, i) => {
                    const isChecked = !!checkedCanDos[`${stage.id}_${i}`];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleCanDo(stage.id, i)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          cursor: 'pointer',
                          padding: '0.3rem 0',
                          userSelect: 'none'
                        }}
                      >
                        <span style={{ marginTop: '2px', color: isChecked ? 'var(--brand-green)' : 'var(--text-muted)' }}>
                          {isChecked ? <CheckSquare size={16} /> : <Square size={16} />}
                        </span>
                        <span style={{
                          fontSize: '0.9rem',
                          color: isChecked ? 'var(--text-muted)' : 'var(--text-secondary)',
                          textDecoration: isChecked ? 'line-through' : 'none',
                          lineHeight: 1.45
                        }}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Linked Recommended Learning Modules with Direct Launch CTA */}
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.86em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <BookOpen size={15} color="var(--brand-accent)" />
                  {learningMode === 'zh' ? '推薦實戰學習模組' : 'Recommended modules'}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {stage.modules.map((modId, mIdx) => (
                    <button
                      key={modId}
                      className="control-btn"
                      onClick={() => setActiveTab(modId)}
                      style={{
                        fontSize: '0.88em',
                        background: mIdx === 0 ? 'var(--bg-accent)' : 'var(--bg-main)',
                        border: mIdx === 0 ? '1.5px solid var(--brand-accent)' : '1px solid var(--border-color)',
                        color: mIdx === 0 ? 'var(--brand-accent)' : 'var(--text-primary)',
                        padding: '0.45rem 0.85rem',
                        fontWeight: 700
                      }}
                    >
                      <span>{t(`tabs.${modId}`)}</span>
                      <ArrowRight size={14} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Milestone Indicator */}
              <div style={{ fontSize: '0.88em', color: 'var(--brand-gold)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px dashed var(--border-color)' }}>
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

export default LearningPathModule;
