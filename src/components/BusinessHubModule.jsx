import React, { useState, useEffect, useRef } from 'react';
import {
  Briefcase, Plane, FileText, Factory, Beer, Zap, Trophy, Volume2,
  CheckCircle2, AlertCircle, ArrowRight, RefreshCw, Flame, Award,
  Building, ShieldCheck, Heart, Sparkles, Copy, Check, Info, Users, Clock,
  MapPin, MessageCircle, Send, Presentation, QrCode, Tag
} from 'lucide-react';
import {
  businessCategories,
  tradeShowGuide,
  dualCityBusinessGuide,
  zaloNetworkingGuide,
  interactiveNegotiations,
  executiveSurvivalGuide,
  smartFactoryGuide,
  nhauCultureGuide,
  currencyBlitzQuestions,
  executiveHanVietRoots,
  realWorldCommercialDocuments,
  businessProficiencyTest
} from '../data/businessData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import './BusinessHubModule.css';

export const BusinessHubModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.tab) {
          sessionStorage.removeItem('viet_target_chapter');
          return item.targetParam.tab;
        }
      }
    } catch {}
    return 'expo';
  });

  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.tab) {
        setActiveTab(chap.targetParam.tab);
      }
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  // Audio State
  const [activeKey, setActiveKey] = useState(null);
  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  // ----------------------------------------------------
  // SUB-MODULE 1: TRADE SHOWS & EXHIBITIONS
  // ----------------------------------------------------
  const [activeExpoStageIdx, setActiveExpoStageIdx] = useState(0);

  // ----------------------------------------------------
  // SUB-MODULE 2: DUAL-CITY HANOI VS HCMC
  // ----------------------------------------------------
  const [selectedCityTab, setSelectedCityTab] = useState('hanoi');

  // ----------------------------------------------------
  // SUB-MODULE 3: ZALO NETWORKING & COPY TEMPLATES
  // ----------------------------------------------------
  const [copiedZaloIdx, setCopiedZaloIdx] = useState(null);
  const handleCopyZalo = (text, idx) => {
    navigator.clipboard?.writeText(text);
    setCopiedZaloIdx(idx);
    setTimeout(() => setCopiedZaloIdx(null), 2500);
  };

  // ----------------------------------------------------
  // SUB-MODULE 3.5: REAL-WORLD COMMERCIAL DOCUMENTS
  // ----------------------------------------------------
  const [activeDocIdx, setActiveDocIdx] = useState(0);

  // ----------------------------------------------------
  // SUB-MODULE 4.5: BUSINESS PROFICIENCY TEST (iVPT)
  // ----------------------------------------------------
  const [examActive, setExamActive] = useState(false);
  const [examIdx, setExamIdx] = useState(0);
  const [examScore, setExamScore] = useState(0);
  const [examFeedback, setExamFeedback] = useState(null);
  const [examFinished, setExamFinished] = useState(false);

  const startExam = () => {
    setExamActive(true);
    setExamIdx(0);
    setExamScore(0);
    setExamFeedback(null);
    setExamFinished(false);
  };

  const handleExamAnswer = (chosenOptIdx) => {
    const q = businessProficiencyTest[examIdx];
    const isCorrect = chosenOptIdx === q.answerIndex;
    if (isCorrect) {
      setExamScore(s => s + 100);
      setExamFeedback('correct');
      audioEngine.playComboSound(2);
    } else {
      setExamFeedback('wrong');
      audioEngine.playGentleError();
    }

    setTimeout(() => {
      if (examIdx + 1 < businessProficiencyTest.length) {
        setExamIdx(i => i + 1);
        setExamFeedback(null);
      } else {
        setExamFinished(true);
        audioEngine.playDealSuccessSound();
        if (updateUserStats) {
          updateUserStats({
            type: 'BUSINESS_EXAM_PASSED',
            payload: 100
          });
        }
      }
    }, 1800);
  };

  // ----------------------------------------------------
  // SUB-MODULE 4: INTERACTIVE NEGOTIATION ARENA
  // ----------------------------------------------------
  const [selectedBattleIdx, setSelectedBattleIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [trustScore, setTrustScore] = useState(65);
  const [battleHistory, setBattleHistory] = useState([]);
  const [battleFinished, setBattleFinished] = useState(false);
  const currentBattle = interactiveNegotiations[selectedBattleIdx] || interactiveNegotiations[0];

  const resetBattle = (battleIdx = selectedBattleIdx) => {
    const targetIdx = battleIdx < interactiveNegotiations.length ? battleIdx : 0;
    setSelectedBattleIdx(targetIdx);
    setCurrentStepIdx(0);
    setTrustScore(interactiveNegotiations[targetIdx].initialTrust);
    setBattleHistory([]);
    setBattleFinished(false);
  };

  const handleNegotiationChoice = (option) => {
    const newTrust = Math.max(0, Math.min(100, trustScore + option.trustDelta));
    setTrustScore(newTrust);

    const stepRecord = {
      step: currentStepIdx + 1,
      chosenOption: option,
      trustDelta: option.trustDelta,
      resultingTrust: newTrust
    };

    const newHistory = [...battleHistory, stepRecord];
    setBattleHistory(newHistory);

    // Play sound feedback
    if (option.trustDelta > 0) {
      audioEngine.playComboSound(2);
    } else {
      audioEngine.playGentleError();
    }

    if (currentStepIdx + 1 < currentBattle.steps.length) {
      setCurrentStepIdx(prev => prev + 1);
    } else {
      // Battle finished
      setBattleFinished(true);
      if (newTrust >= 70) {
        audioEngine.playDealSuccessSound();
        if (updateUserStats) {
          updateUserStats({
            type: 'BUSINESS_DEAL_WON',
            trust: newTrust,
            payload: newTrust >= 80 ? 80 : 50
          });
        }
      }
    }
  };

  // ----------------------------------------------------
  // SUB-MODULE 5: EXECUTIVE TRAVEL & VAT INVOICE
  // ----------------------------------------------------
  const [copiedField, setCopiedField] = useState(null);
  const handleCopy = (text, fieldName) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleVatStudy = () => {
    if (updateUserStats) {
      updateUserStats({ type: 'VAT_STUDIED', payload: 30 });
    }
  };

  // ----------------------------------------------------
  // SUB-MODULE 6: SMART FACTORY WALKTHROUGH
  // ----------------------------------------------------
  const [selectedZoneIdx, setSelectedZoneIdx] = useState(0);

  // ----------------------------------------------------
  // SUB-MODULE 7: NHẬU BANQUET TOASTS & ETIQUETTE
  // ----------------------------------------------------
  const handleToastAudio = (chantText) => {
    audioEngine.playGlassClinkSound();
    setTimeout(() => {
      handleSpeak(chantText);
    }, 400);
    if (updateUserStats) {
      updateUserStats({ type: 'NHAU_STUDIED', payload: 25 });
    }
  };

  // ----------------------------------------------------
  // SUB-MODULE 8: CURRENCY & SLANG BLITZ (10s TIMER)
  // ----------------------------------------------------
  const [blitzActive, setBlitzActive] = useState(false);
  const [blitzIdx, setBlitzIdx] = useState(0);
  const [blitzScore, setBlitzScore] = useState(0);
  const [blitzCombo, setBlitzCombo] = useState(0);
  const [blitzTimer, setBlitzTimer] = useState(10);
  const [blitzFeedback, setBlitzFeedback] = useState(null);
  const timerRef = useRef(null);

  const startBlitz = () => {
    setBlitzActive(true);
    setBlitzIdx(0);
    setBlitzScore(0);
    setBlitzCombo(0);
    setBlitzFeedback(null);
    setBlitzTimer(10);
  };

  useEffect(() => {
    if (blitzActive && !blitzFeedback && blitzTimer > 0) {
      timerRef.current = setInterval(() => {
        setBlitzTimer(t => {
          if (t <= 1) {
            handleBlitzAnswer(-1); // Time out
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [blitzActive, blitzFeedback, blitzIdx, blitzTimer]);

  const handleBlitzAnswer = (chosenOptIdx) => {
    clearInterval(timerRef.current);
    const q = currencyBlitzQuestions[blitzIdx];
    const isCorrect = chosenOptIdx === q.answerIndex;

    if (isCorrect) {
      const newCombo = blitzCombo + 1;
      setBlitzCombo(newCombo);
      setBlitzScore(s => s + 100 * newCombo);
      setBlitzFeedback('correct');
      audioEngine.playCashChime();

      if (updateUserStats) {
        updateUserStats({
          type: 'CURRENCY_BLITZ_STREAK',
          combo: newCombo,
          payload: 15 * newCombo
        });
      }
    } else {
      setBlitzCombo(0);
      setBlitzFeedback('wrong');
      audioEngine.playGentleError();
    }

    setTimeout(() => {
      if (blitzIdx + 1 < currencyBlitzQuestions.length) {
        setBlitzIdx(i => i + 1);
        setBlitzFeedback(null);
        setBlitzTimer(10);
      } else {
        setBlitzActive(false);
        audioEngine.playDealSuccessSound();
      }
    }, 1800);
  };

  return (
    <div className="module-container business-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Briefcase color="var(--brand-primary)" />
          {learningMode === 'zh' ? '商務出差·商展拓銷·雙城交涉全能旗艦 (Business Hub)' : 'Executive Travel, Trade Shows & Dual-City Negotiation Hub'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋 SECC/ICE 商展佈展與接單、河內 vs 胡志明市商務文化、Zalo 名片社交、7 大多分支談判決戰、加值稅紅發票與工廠巡檢。'
            : 'Trade show booth management, Hanoi vs HCMC business dynamics, Zalo networking, 7 interactive battles, and VAT invoices.'}
        </p>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="business-subnav" role="tablist">
        <button
          className={`biz-nav-tab ${activeTab === 'expo' ? 'active' : ''}`}
          onClick={() => setActiveTab('expo')}
        >
          <Presentation size={17} />
          <span>{learningMode === 'zh' ? '🎪 商展參展與拓銷' : '🎪 Trade Shows'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'dualcity' ? 'active' : ''}`}
          onClick={() => setActiveTab('dualcity')}
        >
          <MapPin size={17} />
          <span>{learningMode === 'zh' ? '🏙️ 河內 vs 胡志明雙城' : '🏙️ Hanoi vs HCMC'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'networking' ? 'active' : ''}`}
          onClick={() => setActiveTab('networking')}
        >
          <MessageCircle size={17} />
          <span>{learningMode === 'zh' ? '🤝 生意認識與 Zalo' : '🤝 Zalo Networking'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'docsim' ? 'active' : ''}`}
          onClick={() => setActiveTab('docsim')}
        >
          <FileText size={17} />
          <span>{learningMode === 'zh' ? '📜 實戰合約單據' : '📜 Documents & Contracts'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'negotiation' ? 'active' : ''}`}
          onClick={() => setActiveTab('negotiation')}
        >
          <Building size={17} />
          <span>{learningMode === 'zh' ? '🏢 商業談判決戰' : '🏢 Negotiation Arena'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'bizexam' ? 'active' : ''}`}
          onClick={() => setActiveTab('bizexam')}
        >
          <Award size={17} />
          <span>{learningMode === 'zh' ? '🎓 越語商務能力認證' : '🎓 Business Exam (iVPT)'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'travel' ? 'active' : ''}`}
          onClick={() => { setActiveTab('travel'); handleVatStudy(); }}
        >
          <Plane size={17} />
          <span>{learningMode === 'zh' ? '✈️ 出差生存與紅發票' : '✈️ Travel & VAT Invoice'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'factory' ? 'active' : ''}`}
          onClick={() => setActiveTab('factory')}
        >
          <Factory size={17} />
          <span>{learningMode === 'zh' ? '🏭 智慧廠區與產線' : '🏭 Smart Factory'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'nhau' ? 'active' : ''}`}
          onClick={() => setActiveTab('nhau')}
        >
          <Beer size={17} />
          <span>{learningMode === 'zh' ? '🍻 酒桌應酬與社交' : '🍻 Nhậu & Banquet'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'currency' ? 'active' : ''}`}
          onClick={() => setActiveTab('currency')}
        >
          <Zap size={17} />
          <span>{learningMode === 'zh' ? '⚡ 百萬貨幣極速盲測' : '⚡ Currency Blitz'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activeTab === 'hanviet' ? 'active' : ''}`}
          onClick={() => setActiveTab('hanviet')}
        >
          <FileText size={17} />
          <span>{learningMode === 'zh' ? '📊 商務漢越音字根' : '📊 Business Han-Viet'}</span>
        </button>
      </div>

      {/* ---------------------------------------------------- */}
      {/* 1. TRADE SHOWS & EXHIBITIONS VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'expo' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Top Expo Venues Cards */}
          <div className="negotiation-arena-card">
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {tradeShowGuide.titleZh}
            </h3>
            {/* FDI Tech Corridor Quick Insight */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(16, 185, 129, 0.08) 100%)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem 1.2rem',
              marginBottom: '1rem',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <Building size={20} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-primary)' }}>🏭 台商三大跨國科技聚落指南：</strong>
                <span style={{ marginRight: '0.6rem' }}>北越（Bắc Ninh / Bắc Giang - 鴻海、仁寶、和碩電子廊道）</span>
                <span style={{ marginRight: '0.6rem' }}>南越（Bình Dương / Đồng Nai - 傳統製造、鞋業與精密五金重鎮）</span>
                <span>中越（Đà Nẵng - 軟體開發與高科技研發園區）</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
              {tradeShowGuide.expoVenues.map((venue, idx) => (
                <div key={idx} style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-primary)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '0.98rem', marginBottom: '0.2rem' }}>
                      {learningMode === 'zh' ? venue.nameZh : venue.nameEn}
                    </strong>
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `venue-name-${idx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(venue.nameVi, `venue-name-${idx}`)}
                      title="朗讀展館越文全名"
                      aria-label="朗讀展館越文名稱"
                      style={{ width: '28px', height: '28px' }}
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '0.35rem' }}>
                    {venue.nameVi}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.45rem', lineHeight: 1.5 }}>
                    {venue.descZh}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-xs)' }}>
                    <small style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      📍 {venue.addressVi}
                    </small>
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `venue-addr-${idx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(venue.addressVi, `venue-addr-${idx}`)}
                      title="朗讀地址 (搭計程車/問路使用)"
                      aria-label="朗讀地址"
                      style={{ width: '24px', height: '24px' }}
                    >
                      <Volume2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expo Lifecycle Stage Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {tradeShowGuide.stages.map((stg, idx) => (
              <button
                key={stg.id}
                onClick={() => setActiveExpoStageIdx(idx)}
                style={{
                  padding: '0.6rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeExpoStageIdx === idx ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                  background: activeExpoStageIdx === idx ? 'var(--bg-accent)' : 'var(--bg-card)',
                  color: activeExpoStageIdx === idx ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                {learningMode === 'zh' ? stg.stageNameZh : stg.stageNameEn}
              </button>
            ))}
          </div>

          {/* Active Expo Stage Content */}
          <div className="negotiation-arena-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '2rem' }}>{tradeShowGuide.stages[activeExpoStageIdx].icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {learningMode === 'zh' ? tradeShowGuide.stages[activeExpoStageIdx].stageNameZh : tradeShowGuide.stages[activeExpoStageIdx].stageNameEn}
                  </h4>
                  {tradeShowGuide.stages[activeExpoStageIdx].stageNameVi && (
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `expo-stg-${activeExpoStageIdx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(tradeShowGuide.stages[activeExpoStageIdx].stageNameVi, `expo-stg-${activeExpoStageIdx}`)}
                      title="朗讀階段越文名稱"
                      style={{ width: '28px', height: '28px' }}
                    >
                      <Volume2 size={14} />
                    </button>
                  )}
                </div>
                <p style={{ margin: '0.2rem 0 0', color: 'var(--brand-gold)', fontSize: '0.88rem', fontWeight: 700 }}>
                  💡 {tradeShowGuide.stages[activeExpoStageIdx].tipsZh}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem', marginTop: '0.5rem' }}>
              {tradeShowGuide.stages[activeExpoStageIdx].phrases.map((phrase, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    background: 'var(--bg-input)',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.05rem' }}>
                      {phrase.viet}
                    </span>
                    <button
                      className={`speaker-btn ${activeKey === `expo-${activeExpoStageIdx}-${pIdx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(phrase.viet, `expo-${activeExpoStageIdx}-${pIdx}`)}
                      aria-label="播放發音"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                  <span style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                    {learningMode === 'zh' ? phrase.zh : phrase.en}
                  </span>
                  <small style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    💡 {phrase.hintZh}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 2. DUAL-CITY HANOI VS HCMC VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'dualcity' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="negotiation-arena-card">
            <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {dualCityBusinessGuide.titleZh}
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              在越南做生意，北越（河內）與南越（胡志明市）在商業文化、談判風格、稱謂禮數與社交模式上有著鮮明的分野。
            </p>
          </div>

          <div className="city-compare-grid">
            {dualCityBusinessGuide.cities.map((city) => (
              <div key={city.id} className={`city-profile-card ${city.id}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '2rem' }}>{city.icon}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                          {learningMode === 'zh' ? city.cityNameZh : city.cityNameEn}
                        </h4>
                        <button
                          className={`speaker-btn mini-btn ${activeKey === `city-name-${city.id}` ? 'playing' : ''}`}
                          onClick={() => handleSpeak(city.cityNameVi, `city-name-${city.id}`)}
                          title="朗讀城市越文名稱"
                          aria-label="朗讀城市全名"
                          style={{ width: '26px', height: '26px' }}
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                      <small style={{ color: 'var(--text-muted)' }}>{city.cityNameVi}</small>
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {city.summaryZh}
                </p>

                <div style={{ background: 'var(--bg-input)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  <strong>✈️ 機場交通：</strong> {city.airportZh}
                </div>
                <div style={{ background: 'var(--bg-input)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem' }}>
                  <strong>🏭 工業走廊：</strong> {city.industrialCorridorsZh}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>💼 核心商務交涉文化：</strong>
                  {city.businessCulture.map((bc, idx) => (
                    <div key={idx} style={{ padding: '0.6rem 0.8rem', background: 'var(--bg-card-subtle)', borderRadius: 'var(--radius-xs)', borderLeft: `3px solid ${city.tagColor}` }}>
                      <strong style={{ display: 'block', fontSize: '0.88rem', color: city.tagColor, marginBottom: '0.2rem' }}>{bc.labelZh}</strong>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{bc.descZh}</span>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>🗣️ 必備口語金句：</strong>
                  {city.mustKnowPhrases.map((phrase, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-input)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-xs)' }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-primary)' }}>{phrase.viet}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{phrase.zh}</div>
                      </div>
                      <button
                        className={`speaker-btn ${activeKey === `city-${city.id}-${idx}` ? 'playing' : ''}`}
                        onClick={() => handleSpeak(phrase.viet, `city-${city.id}-${idx}`)}
                        aria-label="播放金句發音"
                        title="朗讀金句"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3. BUSINESS NETWORKING & ZALO ECOSYSTEM VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'networking' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="negotiation-arena-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem' }}>📲💬</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {zaloNetworkingGuide.titleZh}
                </h3>
                <p style={{ margin: '0.3rem 0 0', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  {zaloNetworkingGuide.introZh}
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {zaloNetworkingGuide.templates.map((tpl, idx) => (
              <div key={tpl.id} className="zalo-message-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 900, color: '#0068ff' }}>
                    {learningMode === 'zh' ? tpl.titleZh : tpl.titleEn}
                  </h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `zalo-tpl-${idx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(tpl.viet, `zalo-tpl-${idx}`)}
                      title="朗讀 Zalo 訊息"
                      aria-label="朗讀範本發音"
                      style={{ width: '30px', height: '30px' }}
                    >
                      <Volume2 size={15} />
                    </button>
                    <button
                      onClick={() => handleCopyZalo(tpl.viet, idx)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(0, 104, 255, 0.12)',
                        border: '1px solid #0068ff',
                        color: '#0068ff',
                        padding: '0.35rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        cursor: 'pointer'
                      }}
                    >
                      {copiedZaloIdx === idx ? <><Check size={14} /> 已複製到剪貼簿</> : <><Copy size={14} /> 一鍵複製範本</>}
                    </button>
                  </div>
                </div>

                <div className="zalo-bubble-box">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.5 }}>
                      "{tpl.viet}"
                    </div>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', borderTop: '1px dashed rgba(0,104,255,0.3)', paddingTop: '0.4rem' }}>
                    <strong>中文意譯：</strong> {tpl.zh}
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    className={`secondary-action ${activeKey === `zalo-tpl-${idx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(tpl.viet, `zalo-tpl-${idx}`)}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                  >
                    <Volume2 size={15} /> 朗讀整段範本
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 3.5. REAL-WORLD COMMERCIAL DOCUMENTS & CONTRACTS */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'docsim' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="negotiation-arena-card">
            <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              📜 實戰商業買賣合約與海關申報單據全貌解析
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              越南跨國經貿實戰必備：掌握正式買賣合約 (HĐMB) 關鍵條款、仲裁條款 (VIAC)、進出口海關電子申報單 (Tờ khai Hải quan) 與通關通道識別。
            </p>
          </div>

          {/* Doc Selector Tabs */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {realWorldCommercialDocuments.map((doc, idx) => (
              <button
                key={doc.id}
                onClick={() => setActiveDocIdx(idx)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: activeDocIdx === idx ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                  background: activeDocIdx === idx ? 'var(--bg-accent)' : 'var(--bg-card)',
                  color: activeDocIdx === idx ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {learningMode === 'zh' ? doc.titleZh : doc.titleEn}
              </button>
            ))}
          </div>

          {/* Active Document Viewer Card */}
          <div className="negotiation-arena-card" style={{ background: '#fafaf9', border: '1.5px solid #d6d3d1' }}>
            <div style={{ textAlign: 'center', borderBottom: '2px solid #e7e5e4', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#44403c', whiteSpace: 'pre-line', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                {realWorldCommercialDocuments[activeDocIdx].docTypeVi}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.6rem', marginTop: '0.75rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: '#1c1917', whiteSpace: 'pre-line' }}>
                  {realWorldCommercialDocuments[activeDocIdx].headerVi}
                </h4>
                <button
                  className={`speaker-btn mini-btn ${activeKey === `doc-header-${activeDocIdx}` ? 'playing' : ''}`}
                  onClick={() => handleSpeak(realWorldCommercialDocuments[activeDocIdx].headerVi, `doc-header-${activeDocIdx}`)}
                  title="朗讀公文/合約抬頭"
                  aria-label="朗讀抬頭發音"
                >
                  <Volume2 size={16} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {realWorldCommercialDocuments[activeDocIdx].clauses.map((clause, cIdx) => (
                <div
                  key={cIdx}
                  style={{
                    background: '#ffffff',
                    padding: '1.1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #e7e5e4',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <strong style={{ fontSize: '0.98rem', color: 'var(--brand-primary)' }}>
                        📌 {clause.clauseNo}: {clause.titleVi}
                      </strong>
                      <button
                        className={`speaker-btn mini-btn ${activeKey === `doc-title-${activeDocIdx}-${cIdx}` ? 'playing' : ''}`}
                        onClick={() => handleSpeak(clause.titleVi, `doc-title-${activeDocIdx}-${cIdx}`)}
                        title="朗讀條款標題"
                        aria-label="朗讀條款標題"
                        style={{ width: '24px', height: '24px' }}
                      >
                        <Volume2 size={12} />
                      </button>
                    </div>
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `doc-${activeDocIdx}-${cIdx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(clause.contentVi, `doc-${activeDocIdx}-${cIdx}`)}
                      title="朗讀條款內容"
                      aria-label="朗讀條款內容"
                    >
                      <Volume2 size={15} />
                    </button>
                  </div>
                  <small style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {clause.titleZh}
                  </small>
                  <div style={{ fontSize: '0.92rem', color: '#292524', fontWeight: 700, lineHeight: 1.5, marginTop: '0.2rem' }}>
                    "{clause.contentVi}"
                  </div>
                  <div style={{ fontSize: '0.86rem', color: '#57534e', borderTop: '1px dashed #e7e5e4', paddingTop: '0.4rem', lineHeight: 1.5 }}>
                    <strong>中文條款：</strong> {clause.contentZh}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4. NEGOTIATION ARENA VIEW (7 BATTLES) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'negotiation' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Battle Selector */}
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {interactiveNegotiations.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => resetBattle(idx)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedBattleIdx === idx ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                  background: selectedBattleIdx === idx ? 'var(--bg-accent)' : 'var(--bg-card)',
                  color: selectedBattleIdx === idx ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                {learningMode === 'zh' ? b.titleZh : b.titleEn}
              </button>
            ))}
          </div>

          <div className="negotiation-arena-card">
            {/* Context & Partner Info */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {learningMode === 'zh' ? currentBattle.titleZh : currentBattle.titleEn}
                </h3>
                <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  {learningMode === 'zh' ? currentBattle.scenarioContextZh : currentBattle.scenarioContextEn}
                </p>
              </div>
              <button
                onClick={() => resetBattle()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <RefreshCw size={14} /> {learningMode === 'zh' ? '重新談判' : 'Restart'}
              </button>
            </div>

            {/* Trust & Rapport Gauge */}
            <div className="trust-gauge-container">
              <div className="trust-gauge-header">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Heart size={16} color={trustScore >= 70 ? 'var(--brand-green)' : trustScore >= 40 ? 'var(--brand-gold)' : 'var(--brand-primary)'} />
                  <span>{learningMode === 'zh' ? `夥伴信任度量表 (Partner Trust): ${trustScore}%` : `Partner Trust: ${trustScore}%`}</span>
                </span>
                <span style={{ color: trustScore >= 70 ? 'var(--brand-green)' : trustScore >= 40 ? 'var(--brand-gold)' : 'var(--brand-primary)' }}>
                  {trustScore >= 80 ? '🤝 高度信賴 (High Trust)' : trustScore >= 60 ? '⚖️ 謹慎友好 (Friendly)' : trustScore >= 40 ? '⚠️ 產生疑慮 (Hesitant)' : '❌ 信任破裂 (Crisis)'}
                </span>
              </div>
              <div className="trust-bar-bg">
                <div
                  className="trust-bar-fill"
                  style={{
                    width: `${trustScore}%`,
                    background: trustScore >= 70 ? 'var(--brand-green)' : trustScore >= 40 ? 'var(--brand-gold)' : 'var(--brand-primary)'
                  }}
                />
              </div>
            </div>

            {/* Current Step / Finished Screen */}
            {!battleFinished ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Partner Dialogue Speech */}
                <div className="partner-bubble">
                  <div className="partner-meta">
                    <Users size={16} />
                    <span>{currentBattle.partnerName} · {currentBattle.partnerRole}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      "{currentBattle.steps[currentStepIdx].partnerSpeech}"
                    </div>
                    <button
                      className={`speaker-btn ${activeKey === `partner-speech-${currentStepIdx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(currentBattle.steps[currentStepIdx].partnerSpeech, `partner-speech-${currentStepIdx}`)}
                      aria-label="播放發音"
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    {learningMode === 'zh' ? currentBattle.steps[currentStepIdx].partnerSpeechZh : currentBattle.steps[currentStepIdx].partnerSpeechEn}
                  </div>
                </div>

                {/* Step Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    {learningMode === 'zh' ? '請選擇您的回應策略與話術：' : 'Select your negotiation response strategy:'}
                  </div>
                  {currentBattle.steps[currentStepIdx].options.map((opt) => (
                    <button
                      key={opt.id}
                      className="dialogue-choice-btn"
                      onClick={() => handleNegotiationChoice(opt)}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)', flex: 1 }}>
                          💬 {opt.viet}
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                          <button
                            type="button"
                            className={`speaker-btn mini-btn ${activeKey === `opt-speech-${opt.id}` ? 'playing' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSpeak(opt.viet, `opt-speech-${opt.id}`);
                            }}
                            title="點擊試聽此回覆對話發音"
                            aria-label="試聽發音"
                          >
                            <Volume2 size={15} />
                          </button>
                          <span style={{
                            fontSize: '0.8rem',
                            fontWeight: 800,
                            padding: '0.15rem 0.5rem',
                            borderRadius: 'var(--radius-full)',
                            background: opt.trustDelta > 0 ? 'rgba(5, 150, 105, 0.15)' : 'rgba(218, 37, 28, 0.15)',
                            color: opt.trustDelta > 0 ? 'var(--brand-green)' : 'var(--brand-primary)'
                          }}>
                            {opt.trustDelta > 0 ? `+${opt.trustDelta}% 信任` : `${opt.trustDelta}% 信任`}
                          </span>
                        </div>
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        {learningMode === 'zh' ? opt.zh : opt.en}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Battle Summary Outcome */
              <div style={{
                background: trustScore >= 70 ? 'rgba(5, 150, 105, 0.08)' : 'rgba(218, 37, 28, 0.08)',
                border: `2px solid ${trustScore >= 70 ? 'var(--brand-green)' : 'var(--brand-primary)'}`,
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{ fontSize: '3.5rem' }}>
                  {trustScore >= 80 ? '🏆🤝' : trustScore >= 70 ? '🎉📝' : '⚠️💬'}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900, color: trustScore >= 70 ? 'var(--brand-green)' : 'var(--brand-primary)' }}>
                  {trustScore >= 70
                    ? (learningMode === 'zh' ? '談判成功！達成雙贏商業協議！' : 'Negotiation Success! Deal Closed!')
                    : (learningMode === 'zh' ? '談判陷入僵局，需重新調整策略' : 'Negotiation Stalled, Retune Strategy')}
                </h3>
                <p style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {trustScore >= 70
                    ? (learningMode === 'zh'
                        ? `最終夥伴信任度達到 ${trustScore}%！您成功在兼顧合作夥伴面子（Thể diện）與企業利潤的前提下簽訂有利條款，獲得大量 XP 獎勵！`
                        : `Final trust reached ${trustScore}%! You balanced cultural face and corporate profitability successfully.`)
                    : (learningMode === 'zh'
                        ? `最終夥伴信任度僅為 ${trustScore}%。越語商務談判切忌直接衝突施壓，建議重視長期關係（Tình cảm）與雙贏折讓。`
                        : `Final trust was ${trustScore}%. Direct aggression harms Vietnamese business ties. Focus on win-win empathy.`)}
                </p>
                <button
                  className="primary-action"
                  onClick={() => resetBattle()}
                  style={{ padding: '0.75rem 1.75rem', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem' }}
                >
                  {learningMode === 'zh' ? '再次挑戰本情境 🔄' : 'Try Again 🔄'}
                </button>
              </div>
            )}

            {/* History Feedbacks */}
            {battleHistory.length > 0 && (
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                  {learningMode === 'zh' ? '談判策略得失回顧：' : 'Negotiation Strategy Review:'}
                </div>
                {battleHistory.map((h, i) => (
                  <div key={i} style={{ fontSize: '0.88rem', padding: '0.5rem 0.75rem', background: 'var(--bg-input)', borderRadius: 'var(--radius-sm)' }}>
                    <span style={{ fontWeight: 800, color: h.trustDelta > 0 ? 'var(--brand-green)' : 'var(--brand-primary)' }}>
                      [回合 {h.step}] {h.chosenOption.feedbackZh}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 4.5. BUSINESS VIETNAMESE PROFICIENCY EXAM (iVPT) */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'bizexam' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {!examActive && !examFinished && (
            <div className="currency-blitz-arena" style={{ borderColor: 'var(--brand-primary)', background: 'linear-gradient(135deg, rgba(218, 37, 28, 0.08), rgba(234, 179, 8, 0.08))' }}>
              <div style={{ fontSize: '4rem' }}>🎓💼</div>
              <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                {learningMode === 'zh' ? '越南語商務實務能力檢定認證 (iVPT Simulator)' : 'Business Vietnamese Proficiency Certification'}
              </h3>
              <p style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {learningMode === 'zh'
                  ? '檢驗您在越南涉外經貿、合同法律條款、海關進出口通關、加值稅紅發票與長幼禮貌稱謂上的專業溝通掌握度。通過測驗可贏取 100 XP 與專屬商務成就！'
                  : 'Test your mastery in trade contracts, customs clearance, VAT invoicing, and corporate respect protocols.'}
              </p>
              <button
                className="primary-action"
                onClick={startExam}
                style={{ padding: '0.85rem 2.2rem', fontWeight: 900, fontSize: '1.1rem' }}
              >
                開始商務認證測驗 🚀
              </button>
            </div>
          )}

          {examActive && !examFinished && (
            <div className="negotiation-arena-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                <span style={{ fontWeight: 800, color: 'var(--brand-gold)' }}>
                  QUESTION {examIdx + 1} / {businessProficiencyTest.length} · 分類：{businessProficiencyTest[examIdx].categoryZh}
                </span>
                <span style={{ fontWeight: 900, color: 'var(--brand-green)' }}>
                  得分：{examScore} 分
                </span>
              </div>

              <div style={{ margin: '1rem 0' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
                  {learningMode === 'zh' ? businessProficiencyTest[examIdx].questionZh : businessProficiencyTest[examIdx].questionEn}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-input)', padding: '0.85rem 1.1rem', borderRadius: 'var(--radius-sm)', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                    "{businessProficiencyTest[examIdx].questionVi}"
                  </div>
                  <button
                    className={`speaker-btn ${activeKey === `exam-q-${examIdx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(businessProficiencyTest[examIdx].questionVi, `exam-q-${examIdx}`)}
                    title="朗讀越文題目"
                    aria-label="朗讀題目"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              </div>

              {examFeedback && (
                <div style={{
                  padding: '0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  background: examFeedback === 'correct' ? 'rgba(5, 150, 105, 0.12)' : 'rgba(218, 37, 28, 0.12)',
                  color: examFeedback === 'correct' ? 'var(--brand-green)' : 'var(--brand-primary)',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  marginBottom: '1rem'
                }}>
                  {examFeedback === 'correct' ? '🎉 回答正確！+100 分' : '❌ 回答錯誤！'}
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 400, marginTop: '0.3rem' }}>
                    {businessProficiencyTest[examIdx].explainZh}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {businessProficiencyTest[examIdx].options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    disabled={examFeedback !== null}
                    onClick={() => handleExamAnswer(optIdx)}
                    className="dialogue-choice-btn"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-primary)', flex: 1 }}>
                        {String.fromCharCode(65 + optIdx)}. {opt}
                      </span>
                      {/[a-zA-Zà-ỹÀ-Ỹ]/.test(opt) && (
                        <button
                          type="button"
                          className={`speaker-btn mini-btn ${activeKey === `exam-opt-${examIdx}-${optIdx}` ? 'playing' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpeak(opt, `exam-opt-${examIdx}-${optIdx}`);
                          }}
                          title="朗讀選項發音"
                          aria-label="朗讀選項"
                          style={{ width: '28px', height: '28px', flexShrink: 0 }}
                        >
                          <Volume2 size={14} />
                        </button>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {examFinished && (
            <div style={{
              background: 'rgba(5, 150, 105, 0.08)',
              border: '2px solid var(--brand-green)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{ fontSize: '4rem' }}>🏆📜</div>
              <h3 style={{ margin: 0, fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-green)' }}>
                {learningMode === 'zh' ? '恭喜通關！榮獲越語商務實務能力認證！' : 'Congratulations! Business Proficiency Passed!'}
              </h3>
              <p style={{ maxWidth: '520px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {learningMode === 'zh'
                  ? `您在本次商務測驗中取得滿分 ${examScore} 分！您已具備應對越南大型展覽會、外資設廠談判、海關通關與紅發票核銷的實戰越語溝通能力，獲得 100 XP 獎勵！`
                  : `You achieved a top score of ${examScore} pts! You are fully certified for trade shows, contracts, and tax compliance in Vietnam.`}
              </p>
              <button
                className="primary-action"
                onClick={startExam}
                style={{ padding: '0.75rem 2rem', fontWeight: 800, fontSize: '1rem', marginTop: '0.5rem' }}
              >
                再次挑戰測驗 🔄
              </button>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 5. EXECUTIVE TRAVEL & VAT INVOICE VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'travel' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* VAT Red Invoice Official Template Card */}
          <div className="negotiation-arena-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ fontSize: '2rem' }}>🧾</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {learningMode === 'zh' ? '加值稅紅發票開票必備四要素 (Hóa đơn đỏ)' : 'Official VAT Red Invoice Requisites'}
                  </h3>
                  <small style={{ color: 'var(--text-muted)' }}>Hóa đơn điện tử GTGT (Giá trị gia tăng) 10%</small>
                </div>
              </div>
              <span style={{
                background: 'rgba(217, 119, 6, 0.15)',
                color: 'var(--brand-gold)',
                border: '1px solid var(--brand-gold)',
                padding: '0.3rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 800,
                fontSize: '0.85rem'
              }}>
                台商出差報帳必備
              </span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
              {learningMode === 'zh'
                ? '在越南境內消費（如飯店住宿、商務宴請、租車、採購），向店家出示以下開票資訊即可請對方直接開立電子紅發票發送至您的 Email：'
                : 'Present this standardized corporate billing profile to hotels, restaurants, and suppliers for e-VAT invoice issuance:'}
            </p>

            {/* Interactive Copyable Invoice Box */}
            <div className="invoice-sample-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #d97706', paddingBottom: '0.5rem' }}>
                <strong>THÔNG TIN XUẤT HÓA ĐƠN GTGT (CÔNG TY)</strong>
                <span style={{ fontSize: '0.8rem', color: 'var(--brand-gold)' }}>點擊欄位一鍵複製</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>1. Tên công ty (公司抬頭全稱): </span>
                  <strong>CÔNG TY TNHH PRECISION INNOVATION VIỆT NAM</strong>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === 'invoice-comp' ? 'playing' : ''}`}
                    onClick={() => handleSpeak('CÔNG TY TNHH PRECISION INNOVATION VIỆT NAM', 'invoice-comp')}
                    title="朗讀公司全稱"
                    style={{ width: '26px', height: '26px' }}
                  >
                    <Volume2 size={13} />
                  </button>
                  <button
                    onClick={() => handleCopy('CÔNG TY TNHH PRECISION INNOVATION VIỆT NAM', 'name')}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    title="複製公司抬頭"
                  >
                    {copiedField === 'name' ? <Check size={14} color="var(--brand-green)" /> : <Copy size={14} />}
                  </button>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>2. Mã số thuế (MST 統一稅號): </span>
                  <strong style={{ color: 'var(--brand-primary)' }}>3702891234</strong>
                  <button
                    onClick={() => handleCopy('3702891234', 'mst')}
                    style={{ marginLeft: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                    title="複製統一稅號"
                  >
                    {copiedField === 'mst' ? <Check size={14} color="var(--brand-green)" /> : <Copy size={14} />}
                  </button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>3. Địa chỉ (公司登記地址): </span>
                  <span>Đường số 8, KCN VSIP 1, TP. Dĩ An, Tỉnh Bình Dương</span>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === 'invoice-addr' ? 'playing' : ''}`}
                    onClick={() => handleSpeak('Đường số 8, KCN VSIP 1, TP. Dĩ An, Tỉnh Bình Dương', 'invoice-addr')}
                    title="朗讀登記地址"
                    style={{ width: '26px', height: '26px' }}
                  >
                    <Volume2 size={13} />
                  </button>
                  <button
                    onClick={() => handleCopy('Đường số 8, KCN VSIP 1, TP. Dĩ An, Tỉnh Bình Dương', 'addr')}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                    title="複製登記地址"
                  >
                    {copiedField === 'addr' ? <Check size={14} color="var(--brand-green)" /> : <Copy size={14} />}
                  </button>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)' }}>4. Email nhận hóa đơn (發票接收信箱): </span>
                  <span>accounting.vn@precision-tw.com</span>
                  <button
                    onClick={() => handleCopy('accounting.vn@precision-tw.com', 'email')}
                    style={{ marginLeft: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer' }}
                    title="複製 Email"
                  >
                    {copiedField === 'email' ? <Check size={14} color="var(--brand-green)" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Travel & Airport Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {executiveSurvivalGuide.map((item) => (
              <div key={item.id} className="negotiation-arena-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1.8rem' }}>{item.icon}</span>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {learningMode === 'zh' ? item.titleZh : item.titleEn}
                    </h4>
                    <p style={{ margin: '0.2rem 0 0', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                      {learningMode === 'zh' ? item.descZh : item.descEn}
                    </p>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-accent)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  {learningMode === 'zh' ? item.proTipZh : item.proTipEn}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {item.phrases.map((phrase, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        background: 'var(--bg-input)',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                          {phrase.viet}
                        </span>
                        <button
                          className={`speaker-btn ${activeKey === `travel-${item.id}-${pIdx}` ? 'playing' : ''}`}
                          onClick={() => handleSpeak(phrase.viet, `travel-${item.id}-${pIdx}`)}
                          aria-label="播放發音"
                          title="朗讀發音"
                        >
                          <Volume2 size={16} />
                        </button>
                      </div>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {learningMode === 'zh' ? phrase.zh : phrase.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 6. SMART FACTORY WALKTHROUGH VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'factory' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Industrial Zones Overview */}
          <div className="negotiation-arena-card">
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {smartFactoryGuide.zones[0].nameZh}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
              {smartFactoryGuide.zones[0].parks.map((p, i) => (
                <div key={i} style={{ background: 'var(--bg-input)', padding: '0.85rem', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{p.name}</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{p.descZh}</span>
                  </div>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === `park-${i}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(p.name, `park-${i}`)}
                    title="朗讀工業區名稱"
                    aria-label="朗讀名稱"
                    style={{ width: '28px', height: '28px', flexShrink: 0 }}
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Zones Navigation (EHS, Production Lines) */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {smartFactoryGuide.zones.slice(1).map((z, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedZoneIdx(idx)}
                style={{
                  padding: '0.6rem 1.1rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedZoneIdx === idx ? '2px solid var(--brand-accent)' : '1px solid var(--border-color)',
                  background: selectedZoneIdx === idx ? 'var(--bg-accent)' : 'var(--bg-card)',
                  color: selectedZoneIdx === idx ? 'var(--brand-accent)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer'
                }}
              >
                {z.nameZh}
              </button>
            ))}
          </div>

          {/* Factory Directives Cards */}
          <div className="factory-directives-grid">
            {smartFactoryGuide.zones.slice(1)[selectedZoneIdx]?.terms?.map((t, idx) => (
              <div key={idx} className="factory-term-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {t.viet}
                  </span>
                  <button
                    className={`speaker-btn ${activeKey === `factory-${selectedZoneIdx}-${idx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(t.viet, `factory-${selectedZoneIdx}-${idx}`)}
                    aria-label="播放發音"
                    title="朗讀術語發音"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                  {learningMode === 'zh' ? t.zh : t.en}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', background: 'var(--bg-input)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-xs)', marginTop: '0.3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ flex: 1, lineHeight: 1.45 }}>
                    <span style={{ fontWeight: 800, color: 'var(--brand-primary)' }}>範例句：</span> {t.example}
                  </div>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === `factory-ex-${selectedZoneIdx}-${idx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(t.example, `factory-ex-${selectedZoneIdx}-${idx}`)}
                    title="朗讀工廠實戰例句"
                    aria-label="朗讀例句發音"
                    style={{ width: '28px', height: '28px', flexShrink: 0 }}
                  >
                    <Volume2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 7. NHẬU BANQUET TOASTS & ETIQUETTE VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'nhau' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Culture Intro */}
          <div className="negotiation-arena-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🍻</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {nhauCultureGuide.titleZh}
                </h3>
                <p style={{ margin: '0.3rem 0 0', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  {learningMode === 'zh' ? nhauCultureGuide.introZh : nhauCultureGuide.introEn}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Chants Box */}
          <div className="negotiation-arena-card">
            <h4 style={{ margin: '0 0 0.75rem', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              🔥 經典酒桌乾杯口號 (點擊即刻模擬碰杯發音)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {nhauCultureGuide.chants.map((chant, idx) => (
                <button
                  key={idx}
                  onClick={() => handleToastAudio(chant.viet)}
                  style={{
                    background: 'var(--bg-card-subtle)',
                    border: '1.5px solid var(--brand-gold)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    transition: 'all var(--transition-bounce)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                      🍻 {chant.viet}
                    </span>
                    <Volume2 size={16} color="var(--brand-gold)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {learningMode === 'zh' ? chant.zh : chant.en}
                  </span>
                  <small style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {chant.descZh}
                  </small>
                </button>
              ))}
            </div>
          </div>

          {/* Golden Rules */}
          <div className="negotiation-arena-card">
            <h4 style={{ margin: '0 0 0.75rem', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              💡 商務應酬三大黃金守則
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              {nhauCultureGuide.goldenRules.map((rule, idx) => (
                <div key={idx} style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderTop: '3px solid var(--brand-gold)' }}>
                  <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    {idx + 1}. {rule.ruleZh}
                  </strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {rule.descZh}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 8. CURRENCY & SLANG BLITZ VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'currency' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {!blitzActive ? (
            <div className="currency-blitz-arena">
              <div style={{ fontSize: '4rem' }}>⚡💵</div>
              <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-gold)' }}>
                {learningMode === 'zh' ? '百萬貨幣極速盲測 (10s Rapid Blitz)' : '10s Currency & Slang Blitz'}
              </h3>
              <p style={{ maxWidth: '560px', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {learningMode === 'zh'
                  ? '考驗您在 10 秒倒數計時內的越盾心算與黑話解碼能力（củ = 100萬, xị = 10萬, chai = 100萬, lít = 10萬, tỷ = 10億）！維持連續答對將觸發金幣狂熱倍率！'
                  : 'Decode Vietnamese monetary slang and large amounts (củ, xị, chai, lít, tỷ) under a 10-second countdown with combo multipliers!'}
              </p>
              <button
                className="primary-action"
                onClick={startBlitz}
                style={{ padding: '0.85rem 2rem', fontWeight: 900, fontSize: '1.1rem' }}
              >
                開始極速挑戰 🚀
              </button>
            </div>
          ) : (
            <div className="currency-blitz-arena">
              {/* Header Stats */}
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '600px', alignItems: 'center' }}>
                <span className="blitz-combo-badge">
                  🔥 COMBO x{blitzCombo} ({blitzScore} 分)
                </span>
                <span className="timer-countdown">
                  ⏱️ {blitzTimer}s
                </span>
              </div>

              {/* Question */}
              <div style={{ width: '100%', maxWidth: '600px', background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '0.5rem' }}>
                  QUESTION {blitzIdx + 1} / {currencyBlitzQuestions.length}
                </div>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                  {learningMode === 'zh' ? currencyBlitzQuestions[blitzIdx].questionZh : currencyBlitzQuestions[blitzIdx].questionEn}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', background: 'var(--bg-input)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <div style={{ fontSize: '1.05rem', color: 'var(--brand-primary)', fontWeight: 800 }}>
                    "{currencyBlitzQuestions[blitzIdx].questionVi}"
                  </div>
                  <button
                    className={`speaker-btn mini-btn ${activeKey === `blitz-q-${blitzIdx}` ? 'playing' : ''}`}
                    onClick={() => handleSpeak(currencyBlitzQuestions[blitzIdx].questionVi, `blitz-q-${blitzIdx}`)}
                    title="朗讀越文題目"
                    aria-label="朗讀題目"
                    style={{ width: '30px', height: '30px', flexShrink: 0 }}
                  >
                    <Volume2 size={15} />
                  </button>
                </div>
              </div>

              {/* Feedback Prompt */}
              {blitzFeedback && (
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  color: blitzFeedback === 'correct' ? 'var(--brand-green)' : 'var(--brand-primary)',
                  animation: 'glowSuccess 0.5s'
                }}>
                  {blitzFeedback === 'correct' ? '🎉 回答正確！+XP' : '❌ 答錯或超時！'}
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 400, marginTop: '0.2rem' }}>
                    {currencyBlitzQuestions[blitzIdx].explainZh}
                  </div>
                </div>
              )}

              {/* Options Grid */}
              <div className="blitz-options-grid">
                {currencyBlitzQuestions[blitzIdx].options.map((opt, optIdx) => (
                  <button
                    key={optIdx}
                    disabled={blitzFeedback !== null}
                    onClick={() => handleBlitzAnswer(optIdx)}
                    className="blitz-option-btn"
                  >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', width: '100%' }}>
                      <span>{opt}</span>
                      {/[a-zA-Zà-ỹÀ-Ỹ]/.test(opt) && (
                        <span
                          role="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpeak(opt, `blitz-opt-${blitzIdx}-${optIdx}`);
                          }}
                          style={{ display: 'inline-flex', alignItems: 'center', padding: '0.2rem', cursor: 'pointer', color: 'var(--brand-primary)' }}
                          title="試聽選項"
                        >
                          <Volume2 size={14} />
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* 9. BUSINESS HAN-VIET ROOTS VIEW */}
      {/* ---------------------------------------------------- */}
      {activeTab === 'hanviet' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="negotiation-arena-card">
            <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              📊 商務政經高階漢越字根庫 (Từ Hán Việt Thương Mại)
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              越南語中 80% 的商務、法規、會計與金融詞彙均直接對應漢字音。掌握以下核心字根，立即啟動指數級記詞槓桿！
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
            {executiveHanVietRoots.map((root, idx) => (
              <div key={idx} className="factory-term-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                      {root.root}
                    </span>
                    <button
                      className={`speaker-btn mini-btn ${activeKey === `hanviet-root-${idx}` ? 'playing' : ''}`}
                      onClick={() => handleSpeak(root.root, `hanviet-root-${idx}`)}
                      title="朗讀字根發音"
                      style={{ width: '24px', height: '24px' }}
                    >
                      <Volume2 size={12} />
                    </button>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--brand-gold)', fontWeight: 700 }}>
                    {root.meaningZh}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.4rem' }}>
                  {root.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'var(--bg-input)',
                        padding: '0.45rem 0.75rem',
                        borderRadius: 'var(--radius-xs)'
                      }}
                    >
                      <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.92rem' }}>
                        {ex.vi}
                      </span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          {ex.zh}
                        </span>
                        <button
                          onClick={() => handleSpeak(ex.vi, `hanviet-ex-${idx}-${exIdx}`)}
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--brand-primary)' }}
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessHubModule;
