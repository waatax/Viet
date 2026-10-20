import React, { useState, useEffect, useMemo } from 'react';
import { 
  MessageSquare, 
  Search, 
  Sparkles, 
  Volume2, 
  Compass, 
  BookOpen, 
  Play, 
  Award, 
  CheckCircle2, 
  Utensils, 
  Plane, 
  Store, 
  HeartPulse, 
  Briefcase, 
  AlertTriangle,
  Layers,
  ChevronRight,
  Filter,
  ClipboardList,
  Map,
  Maximize2,
  Minimize2,
  Columns,
  Monitor,
  LayoutGrid
} from 'lucide-react';
import { situationalScenarios, scenarioCategories } from '../data/situationalScenarios';
import { getScenarioExegesis } from '../data/scenarioExegesisData';
import { ScenarioExegesisCard } from './ScenarioExegesisCard';
import { DialoguePlayer } from './DialoguePlayer';
import { RolePlayEngine } from './RolePlayEngine';
import { ScenarioVocabDeck } from './ScenarioVocabDeck';
import { CulturalTipsCard } from './CulturalTipsCard';
import RealMenuViewer from './RealMenuViewer';
import CityGuideViewer from './CityGuideViewer';
import { useLanguage } from '../context/LanguageContext';
import { ModuleMilestoneCard } from './ModuleMilestoneCard';

export const ConversationModule = ({ selectedAccent, updateUserStats, setActiveTab }) => {
  const { learningMode, t } = useLanguage();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScenarioId, setActiveScenarioId] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.scenarioId) {
          sessionStorage.removeItem('viet_target_chapter');
          return item.targetParam.scenarioId;
        }
      }
    } catch {}
    return situationalScenarios[0]?.id || 'cafe';
  });
  const [activeViewTab, setActiveViewTab] = useState('dialogue'); // 'dialogue' | 'roleplay' | 'vocab' | 'culture' | 'exegesis'
  // Set when "auto-continue" moves to the next scenario so its dialogue starts by itself
  const [dialogueAutoStart, setDialogueAutoStart] = useState(null);

  // Widescreen & Fullscreen layout states
  const [isWidescreen, setIsWidescreen] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_widescreen_mode');
      if (saved !== null) return saved === 'true';
      return typeof window !== 'undefined' && window.innerWidth >= 1200;
    } catch {
      return false;
    }
  });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleWidescreen = () => {
    setIsWidescreen(prev => {
      const next = !prev;
      try { localStorage.setItem('viet_widescreen_mode', String(next)); } catch {}
      return next;
    });
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Keyboard shortcut: F for widescreen, Shift+F for fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target?.isContentEditable) return;

      if (e.key === 'f' || e.key === 'F') {
        if (e.shiftKey) {
          e.preventDefault();
          toggleFullscreen();
        } else {
          e.preventDefault();
          toggleWidescreen();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.scenarioId) {
        setActiveScenarioId(chap.targetParam.scenarioId);
      }
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  const currentScenario = situationalScenarios.find(s => s.id === activeScenarioId) || situationalScenarios[0];
  const currentExegesis = useMemo(() => getScenarioExegesis(currentScenario?.id), [currentScenario?.id]);

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Filter scenarios
  const filteredScenarios = useMemo(() => {
    return situationalScenarios.filter(sc => {
      const matchesCategory = selectedCategory === 'all' || 
                              sc.category === selectedCategory ||
                              (selectedCategory === 'shopping' && (sc.category === 'shopping' || sc.id === 'market' || sc.id === 'convenience')) ||
                              (selectedCategory === 'daily' && (sc.category === 'daily' || sc.id === 'spa'));
      const q = debouncedSearchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesTitle = (sc.titleZh && sc.titleZh.toLowerCase().includes(q)) ||
                           (sc.titleEn && sc.titleEn.toLowerCase().includes(q)) ||
                           (sc.titleVi && sc.titleVi.toLowerCase().includes(q)) ||
                           (sc.summaryZh && sc.summaryZh.toLowerCase().includes(q));

      // Also match any line across all dialogue sections (Dialogue 1 & Dialogue 2)
      const allDialogueLines = sc.dialogues || sc.dialogue || [];
      const matchesDialogue = (allDialogueLines.some(d => 
        (d.viet && d.viet.toLowerCase().includes(q)) || 
        (d.vi && d.vi.toLowerCase().includes(q)) || 
        (d.zh && d.zh.toLowerCase().includes(q)) || 
        (d.en && d.en.toLowerCase().includes(q))
      )) || (sc.dialogueSections?.some(sec => 
        sec.titleZh?.toLowerCase().includes(q) ||
        sec.titleVi?.toLowerCase().includes(q) ||
        sec.lines?.some(l => 
          (l.viet && l.viet.toLowerCase().includes(q)) || 
          (l.vi && l.vi.toLowerCase().includes(q)) || 
          (l.zh && l.zh.toLowerCase().includes(q)) || 
          (l.en && l.en.toLowerCase().includes(q))
        )
      ));

      // Also match vocab
      const allVocab = sc.vocab || sc.vocabulary || [];
      const matchesVocab = allVocab.some(v => 
        (v.viet && v.viet.toLowerCase().includes(q)) || 
        (v.vi && v.vi.toLowerCase().includes(q)) || 
        (v.zh && v.zh.toLowerCase().includes(q))
      );

      return matchesCategory && (matchesTitle || matchesDialogue || matchesVocab);
    });
  }, [selectedCategory, debouncedSearchQuery]);

  // Auto-continue (情境連播): when a dialogue finishes, move to the next scenario in the current list
  const handleDialogueComplete = ({ mode }) => {
    const list = filteredScenarios.length > 0 ? filteredScenarios : situationalScenarios;
    const currentIdx = list.findIndex(sc => sc.id === activeScenarioId);
    const nextScenario = list[currentIdx + 1];
    if (!nextScenario) return;
    setActiveScenarioId(nextScenario.id);
    setDialogueAutoStart({ scenarioId: nextScenario.id, mode, nonce: Date.now() });
  };

  return (
    <div className={`module-container ${isWidescreen ? 'conversation-module-widescreen' : ''}`}>
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <MessageSquare color="var(--brand-primary)" />
          {learningMode === 'zh' ? `${situationalScenarios.length} 大實戰情境對話與沉浸式角色扮演 (Situational Role-Play)` : `${situationalScenarios.length} Practical Situational Dialogues & Interactive Role-Play`}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? `全面涵蓋初次見面、社交閒聊、旅遊交通、咖啡美食、興趣娛樂、運動健身、職場協作、醫療健康與緊急求助等 ${situationalScenarios.length} 個超實用高頻情境`
            : `Master ${situationalScenarios.length} authentic real-world scenarios across first meetings, small talk, travel, dining, leisure, sports, workplace, healthcare, and emergencies.`}
        </p>
      </div>

      {/* Educational Guide Block */}
      <div className="scenario-guide-card" style={{ backgroundColor: 'var(--bg-secondary, #f8f9fa)', padding: '16px', borderRadius: '8px', marginBottom: '24px', borderLeft: '4px solid var(--brand-primary, #007bff)' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0, marginBottom: '12px', fontSize: '1.1rem' }}>
          <Compass size={18} style={{ color: 'var(--brand-primary, #007bff)' }} />
          {learningMode === 'zh' ? '💡 學習指南：情境語境與南北差異' : '💡 Learning Guide: Context & Regional Differences'}
        </h4>
        <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: 'var(--text-secondary, #4b5563)' }}>
          <li>
            <strong style={{ color: 'var(--text-primary, #1f2937)' }}>{learningMode === 'zh' ? '語境至上：' : 'Context is Key: '}</strong>
            {learningMode === 'zh' 
              ? '越南語高度依賴當下的情境與雙方關係。面對長輩、平輩或服務生，必須切換不同的稱呼與應對方式。'
              : 'Vietnamese relies heavily on context and relationships. You must adapt pronouns and phrases based on who you are speaking to.'}
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary, #1f2937)' }}>{learningMode === 'zh' ? '南北差異：' : 'North vs South: '}</strong>
            {learningMode === 'zh'
              ? '日常詞彙與發音在北越與南越有著顯著差異。請留意對話解析中的「北越提示」與「南越提示」，這能幫助您更接地氣。'
              : 'Daily vocabulary and pronunciation vary significantly between the North and South. Utilize the regional tips in dialogues to sound more local.'}
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary, #1f2937)' }}>{learningMode === 'zh' ? '雙模式聽力：' : 'Two Listening Modes: '}</strong>
            {learningMode === 'zh'
              ? '「越→中 逐句對照」每句先播越文、再播中文，幫你建立語意連結；「純越文 沉浸聽力」只播越南語，訓練不靠翻譯的聽解。可調語速、單句重複 1–3 次、跟讀停頓、單篇循環與自動連播下一情境。'
              : '"Viet → English" plays each Vietnamese line followed by its translation; "Vietnamese Only" plays the original audio alone. Adjust speed, repeat each line 1–3×, add shadowing pauses, loop, or auto-play the next scenario.'}
          </li>
          <li>
            <strong style={{ color: 'var(--text-primary, #1f2937)' }}>{learningMode === 'zh' ? '實戰順序：' : 'Practice Flow: '}</strong>
            {learningMode === 'zh'
              ? '建議先透過【對話研讀】與【文化秘笈】建立基礎，再進入【角色扮演】進行沉浸式模擬並賺取經驗值。'
              : 'Start with "Dialogue Study" and "Cultural Tips" to build a foundation, then jump into "Role-Play" to practice and earn XP.'}
          </li>
        </ul>
      </div>

      {/* Category Filter Pills & Search Bar with Widescreen Toolbar */}
      <div className="scenario-filter-bar">
        <div className="search-input-wrapper">
          <Search size={17} className="search-icon" />
          <input 
            type="text"
            placeholder={learningMode === 'zh' ? '搜尋情境、餐點（河粉、冰咖啡、麵包）、字彙或中文意思...' : 'Search scenarios, dishes (pho, coffee, banh mi), vocab...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="scenario-search-input"
          />
        </div>

        <div className="category-chips-row">
          {scenarioCategories.map(cat => (
            <button
              key={cat.id}
              className={`category-filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {learningMode === 'zh' ? cat.labelZh : cat.labelEn}
            </button>
          ))}
        </div>

        <div className="scenario-view-mode-actions">
          <button
            className={`widescreen-toggle-chip ${isWidescreen ? 'active' : ''}`}
            onClick={toggleWidescreen}
            title={learningMode === 'zh' ? '切換電腦橫式寬螢幕三欄沉浸工作台 (快捷鍵 F)' : 'Toggle Widescreen 3-Column Workbench (Key F)'}
            aria-pressed={isWidescreen}
          >
            <Columns size={15} />
            <span>{learningMode === 'zh' ? (isWidescreen ? '三欄工作台' : '展開三欄') : (isWidescreen ? '3-Col Mode' : 'Expand 3-Col')}</span>
            <span className="kb-kbd-badge">F</span>
          </button>

          <button
            className={`widescreen-toggle-chip ${isFullscreen ? 'active' : ''}`}
            onClick={toggleFullscreen}
            title={learningMode === 'zh' ? '切換瀏覽器橫式全螢幕 (快捷鍵 Shift+F)' : 'Toggle Fullscreen Mode (Key Shift+F)'}
            aria-pressed={isFullscreen}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
            <span>{learningMode === 'zh' ? (isFullscreen ? '退出全螢幕' : '全螢幕') : (isFullscreen ? 'Exit Full' : 'Fullscreen')}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Scenario List / Middle Detail Workstation / Right Exegesis Panel (in widescreen) */}
      <div className={`scenario-workspace-grid ${isWidescreen ? 'widescreen-active' : ''}`}>
        {/* Scenario List (Left Sidebar / Drawer) */}
        <div className="scenario-sidebar">
          <div className="sidebar-header-badge">
            <span>{learningMode === 'zh' ? `情境清單 (${filteredScenarios.length})` : `Scenarios (${filteredScenarios.length})`}</span>
          </div>

          <div className="scenario-card-list">
            {filteredScenarios.map((sc) => {
              const isSelected = sc.id === activeScenarioId;
              const titleZh = sc.titleZh || '';
              const titleEn = sc.titleEn || '';
              const titleVi = sc.titleVi || '';
              const tagZh = sc.tagZh || '';
              const tagEn = sc.tagEn || '';
              const fullTitle = learningMode === 'zh' ? titleZh : titleEn;
              const fullTag = learningMode === 'zh' ? tagZh : tagEn;
              return (
                <button
                  key={sc.id}
                  type="button"
                  className={`scenario-nav-card ${isSelected ? 'active-card' : ''}`}
                  onClick={() => {
                    setActiveScenarioId(sc.id);
                  }}
                  aria-pressed={isSelected}
                  title={`${fullTitle} · ${fullTag} (${titleVi})`}
                >
                  <div className="card-icon-bubble">{sc.icon}</div>
                  <div className="card-info">
                    <div className="card-tag">{fullTag}</div>
                    <h4 className="card-title">
                      {fullTitle}
                    </h4>
                    <span className="card-sub">{titleVi}</span>
                  </div>
                  <ChevronRight size={16} className="card-arrow" />
                </button>
              );
            })}

            {filteredScenarios.length === 0 && (
              <div className="no-result-box">
                <p>{learningMode === 'zh' ? '未找到符合關鍵字的情境，請嘗試其他關鍵字。' : 'No scenarios found matching your search.'}</p>
              </div>
            )}
          </div>
        </div>

        {/* Active Scenario Detail Box (Right Main Panel) */}
        <div className="scenario-detail-panel">
          {/* Active Scenario Hero Illustration Banner */}
          {currentScenario.image && (
            <div className="scenario-hero-cover-wrap">
              <img 
                src={`${import.meta.env.BASE_URL || '/'}images/scenarios/${currentScenario.image}`}
                alt={currentScenario.titleZh}
                className="scenario-hero-cover-img"
              />
              <div className="scenario-hero-cover-overlay">
                <span className="cover-badge">{learningMode === 'zh' ? currentScenario.tagZh : currentScenario.tagEn}</span>
                <div className="cover-title-row">
                  <span className="cover-icon">{currentScenario.icon}</span>
                  <h3 className="cover-title">{learningMode === 'zh' ? currentScenario.titleZh : currentScenario.titleEn}</h3>
                </div>
                <div className="cover-sub">{currentScenario.titleVi}</div>
              </div>
            </div>
          )}

          {/* Scenario Summary Banner */}
          <div className="scenario-summary-box">
            <p>{learningMode === 'zh' ? currentScenario.summaryZh : currentScenario.summaryEn}</p>
          </div>

          {/* Sub-Tab Navigation Bar (4 Views) */}
          <div className="scenario-view-tabs">
            <button 
              className={`view-tab-btn ${activeViewTab === 'dialogue' ? 'active' : ''}`}
              onClick={() => setActiveViewTab('dialogue')}
            >
              <BookOpen size={16} />
              <span>{learningMode === 'zh' ? '1. 對話研讀 & 聽力' : '1. Dialogue Study'}</span>
            </button>

            <button 
              className={`view-tab-btn ${activeViewTab === 'roleplay' ? 'active' : ''}`}
              onClick={() => setActiveViewTab('roleplay')}
            >
              <Sparkles size={16} />
              <span>{learningMode === 'zh' ? '2. 角色扮演模擬 (+XP)' : '2. Role-Play (+XP)'}</span>
            </button>

            <button 
              className={`view-tab-btn ${activeViewTab === 'vocab' ? 'active' : ''}`}
              onClick={() => setActiveViewTab('vocab')}
            >
              <Layers size={16} />
              <span>{learningMode === 'zh' ? '3. 核心字彙' : '3. Vocabulary'}</span>
            </button>

            <button 
              className={`view-tab-btn ${activeViewTab === 'culture' ? 'active' : ''}`}
              onClick={() => setActiveViewTab('culture')}
            >
              <Compass size={16} />
              <span>{learningMode === 'zh' ? '4. 文化秘笈 & 避坑' : '4. Cultural Tips'}</span>
            </button>

            {currentExegesis && (
              <button 
                className={`view-tab-btn ${activeViewTab === 'exegesis' ? 'active' : ''} highlight-tab`}
                onClick={() => {
                  setActiveViewTab('exegesis');
                  if (isWidescreen) {
                    const el = document.getElementById('scenario-exegesis-panel');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }
                }}
              >
                <BookOpen size={16} />
                <span>
                  {learningMode === 'zh'
                    ? (isWidescreen ? '5. 深度研經 (右欄已展開)' : '5. 深度研經剖析')
                    : (isWidescreen ? '5. Exegesis (Right)' : '5. In-Depth Exegesis')}
                </span>
              </button>
            )}

            {currentScenario.realMenu && (
              <button 
                className={`view-tab-btn ${activeViewTab === 'menu' ? 'active' : ''} highlight-tab`}
                onClick={() => setActiveViewTab('menu')}
              >
                <ClipboardList size={16} />
                <span>{currentScenario.id === 'haircut' ? (learningMode === 'zh' ? '6. 實體價目表解析' : '6. Service Price List') : (learningMode === 'zh' ? '6. 實際菜單解析' : '6. Real Menu Guide')}</span>
              </button>
            )}

            {currentScenario.cityGuides && (
              <button 
                className={`view-tab-btn ${activeViewTab === 'cityGuide' ? 'active' : ''} highlight-tab`}
                onClick={() => setActiveViewTab('cityGuide')}
              >
                <Map size={16} />
                <span>{learningMode === 'zh' ? '7. 城市景點指南' : '7. City Guides'}</span>
              </button>
            )}
          </div>

          {/* Tab Content Display */}
          <div className="scenario-tab-content">
            {activeViewTab === 'dialogue' && (
              <DialoguePlayer
                scenario={currentScenario}
                selectedAccent={selectedAccent}
                updateUserStats={updateUserStats}
                autoStart={dialogueAutoStart}
                onPlaybackComplete={handleDialogueComplete}
                autoNextLabel={learningMode === 'zh' ? '自動連播下一情境' : 'Auto-play next scenario'}
              />
            )}

            {activeViewTab === 'roleplay' && (
              <RolePlayEngine 
                scenario={currentScenario} 
                selectedAccent={selectedAccent} 
                updateUserStats={updateUserStats} 
              />
            )}

            {activeViewTab === 'vocab' && (
              <ScenarioVocabDeck 
                scenario={currentScenario} 
                selectedAccent={selectedAccent} 
              />
            )}

            {activeViewTab === 'culture' && (
              <CulturalTipsCard 
                scenario={currentScenario} 
              />
            )}

            {activeViewTab === 'exegesis' && (
              <div className="scenario-exegesis-tab-container">
                <ScenarioExegesisCard
                  exegesis={currentExegesis}
                  scenario={currentScenario}
                  selectedAccent={selectedAccent}
                />
              </div>
            )}

            {activeViewTab === 'menu' && (
              <RealMenuViewer
                scenario={currentScenario}
                learningMode={learningMode}
                selectedAccent={selectedAccent}
              />
            )}

            {activeViewTab === 'cityGuide' && (
              <CityGuideViewer
                scenario={currentScenario}
                learningMode={learningMode}
              />
            )}
          </div>

          {/* Guided Pedagogical Next Steps Action Bar (SLA Closed-Loop Action Bar) */}
          <div className="guided-pedagogical-bar" style={{
            marginTop: '1.75rem',
            padding: '1.25rem 1.5rem',
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border-color)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--card-shadow)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--brand-gold)" />
                <strong style={{ fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  {learningMode === 'zh' ? '🎯 情境習得下一動：完成閉環訓練' : '🎯 Next Pedagogical Step: Complete SLA Loop'}
                </strong>
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? '當前情境：' : 'Current Scenario: '}
                <strong style={{ color: 'var(--brand-accent)' }}>{learningMode === 'zh' ? currentScenario.title : currentScenario.titleVi}</strong>
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '0.75rem'
            }}>
              <button
                onClick={() => setActiveViewTab('roleplay')}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: activeViewTab === 'roleplay' ? '2px solid var(--brand-accent)' : '1px solid var(--border-color)',
                  background: activeViewTab === 'roleplay' ? 'var(--bg-accent)' : 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🎭</span>
                <div style={{ textAlign: 'left' }}>
                  <div>{learningMode === 'zh' ? '角色扮演演練' : 'Role-play Practice'}</div>
                  <small style={{ color: 'var(--brand-accent)', fontSize: '0.72rem' }}>+15 XP · 實戰對話輸出</small>
                </div>
              </button>

              <button
                onClick={() => setActiveViewTab('vocab')}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: activeViewTab === 'vocab' ? '2px solid var(--brand-accent)' : '1px solid var(--border-color)',
                  background: activeViewTab === 'vocab' ? 'var(--bg-accent)' : 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🗂️</span>
                <div style={{ textAlign: 'left' }}>
                  <div>{learningMode === 'zh' ? '情境字彙專題' : 'Scenario Vocab Deck'}</div>
                  <small style={{ color: 'var(--brand-gold)', fontSize: '0.72rem' }}>{currentScenario.vocab?.length || 0} 個核心句型詞</small>
                </div>
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) {
                    setActiveTab('shadowing');
                  } else {
                    window.location.hash = '#shadowing';
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>🎙️</span>
                <div style={{ textAlign: 'left' }}>
                  <div>{learningMode === 'zh' ? '影子跟讀內化' : 'Shadowing Accent'}</div>
                  <small style={{ color: '#10b981', fontSize: '0.72rem' }}>音高聲調 · 母語語感</small>
                </div>
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) {
                    setActiveTab('grammar');
                  } else {
                    window.location.hash = '#grammar';
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.15s ease'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>📚</span>
                <div style={{ textAlign: 'left' }}>
                  <div>{learningMode === 'zh' ? '語法結構剖析' : '30 Grammar Rules'}</div>
                  <small style={{ color: '#8b5cf6', fontSize: '0.72rem' }}>拆解句構 · 舉一反三</small>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Third-Column: In-Depth Exegesis Workstation (Widescreen Mode) */}
        {isWidescreen && (
          <aside id="scenario-exegesis-panel" className="scenario-exegesis-panel">
            <div className="exegesis-panel-dock-header">
              <div className="exegesis-dock-title">
                <BookOpen size={17} color="var(--brand-primary, #3b82f6)" />
                <span>{learningMode === 'zh' ? '深度研經即時工作台' : 'In-Depth Exegesis Desk'}</span>
              </div>
              <span className="exegesis-dock-tag">
                {learningMode === 'zh' ? '公式 · 詞源考 · 南北矩陣' : 'Syntax · Cognates · Dialects'}
              </span>
            </div>
            <ScenarioExegesisCard
              exegesis={currentExegesis}
              scenario={currentScenario}
              selectedAccent={selectedAccent}
            />
          </aside>
        )}
      </div>

      {/* Chapter Milestone & Recommended Next Steps */}
      <ModuleMilestoneCard
        currentModuleId="conversation"
        moduleTitleZh={`${situationalScenarios.length} 大情境日常生活對話與角色扮演`}
        moduleTitleEn={`${situationalScenarios.length} Situational Scenarios & Role-Play Engine`}
        nextModuleId="shadowing"
        nextModuleTitleZh="影子跟讀與語音辨識診斷"
        nextModuleTitleEn="Acoustic Shadowing Trainer"
        bonusXp={40}
        setActiveTab={setActiveTab}
        updateUserStats={updateUserStats}
        summaryHighlights={[
          '親歷 49 大真實越南情境（咖啡廳、居酒屋、租屋、看診、通關、商務談判等）',
          '以「越→中 逐句對照」與「純越文沉浸」雙模式精聽，搭配慢速、重複與跟讀停頓吸收對話精髓',
          '在角色扮演分支互動中驗證開口反應速度與語用得體度'
        ]}
        relatedModules={[
          { id: 'shadowing', icon: '🎙️', titleZh: '影子跟讀特訓', descZh: '戴上耳機跟讀原音語調' },
          { id: 'grammar', icon: '📚', titleZh: '30大核心語法', descZh: '解析對話背後句型規則' },
          { id: 'fasttrack', icon: '⚡', titleZh: '7天生活速成', descZh: '精煉核心生存短句' }
        ]}
      />
    </div>
  );
};
