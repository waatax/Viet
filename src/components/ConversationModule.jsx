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
  Map
} from 'lucide-react';
import { situationalScenarios, scenarioCategories } from '../data/situationalScenarios';
import { DialoguePlayer } from './DialoguePlayer';
import { RolePlayEngine } from './RolePlayEngine';
import { ScenarioVocabDeck } from './ScenarioVocabDeck';
import { CulturalTipsCard } from './CulturalTipsCard';
import RealMenuViewer from './RealMenuViewer';
import CityGuideViewer from './CityGuideViewer';
import { useLanguage } from '../context/LanguageContext';

export const ConversationModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, t } = useLanguage();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScenarioId, setActiveScenarioId] = useState(situationalScenarios[0]?.id || 'cafe');
  const [activeViewTab, setActiveViewTab] = useState('dialogue'); // 'dialogue' | 'roleplay' | 'vocab' | 'culture'

  const currentScenario = situationalScenarios.find(s => s.id === activeScenarioId) || situationalScenarios[0];

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
      const matchesDialogue = (sc.dialogues?.some(d => 
        d.viet.toLowerCase().includes(q) || 
        d.zh.toLowerCase().includes(q) || 
        d.en.toLowerCase().includes(q)
      )) || (sc.dialogueSections?.some(sec => 
        sec.titleZh?.toLowerCase().includes(q) ||
        sec.titleVi?.toLowerCase().includes(q) ||
        sec.lines?.some(l => 
          l.viet.toLowerCase().includes(q) || 
          l.zh.toLowerCase().includes(q) || 
          l.en.toLowerCase().includes(q)
        )
      ));

      // Also match vocab
      const matchesVocab = sc.vocab?.some(v => 
        v.viet.toLowerCase().includes(q) || 
        v.zh.toLowerCase().includes(q)
      );

      return matchesCategory && (matchesTitle || matchesDialogue || matchesVocab);
    });
  }, [selectedCategory, debouncedSearchQuery]);

  return (
    <div className="module-container">
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
            <strong style={{ color: 'var(--text-primary, #1f2937)' }}>{learningMode === 'zh' ? '實戰順序：' : 'Practice Flow: '}</strong>
            {learningMode === 'zh'
              ? '建議先透過【對話研讀】與【文化秘笈】建立基礎，再進入【角色扮演】進行沉浸式模擬並賺取經驗值。'
              : 'Start with "Dialogue Study" and "Cultural Tips" to build a foundation, then jump into "Role-Play" to practice and earn XP.'}
          </li>
        </ul>
      </div>

      {/* Category Filter Pills & Search Bar */}
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
      </div>

      {/* Main Grid: Left Scenario List Carousel / Right Detail Workstation */}
      <div className="scenario-workspace-grid">
        {/* Scenario List (Left Sidebar / Drawer) */}
        <div className="scenario-sidebar">
          <div className="sidebar-header-badge">
            <span>{learningMode === 'zh' ? `情境清單 (${filteredScenarios.length})` : `Scenarios (${filteredScenarios.length})`}</span>
          </div>

          <div className="scenario-card-list">
            {filteredScenarios.map((sc) => {
              const isSelected = sc.id === activeScenarioId;
              return (
                <button
                  key={sc.id}
                  className={`scenario-nav-card ${isSelected ? 'active-card' : ''}`}
                  onClick={() => {
                    setActiveScenarioId(sc.id);
                  }}
                  aria-pressed={isSelected}
                >
                  <div className="card-icon-bubble">{sc.icon}</div>
                  <div className="card-info">
                    <div className="card-tag">{learningMode === 'zh' ? sc.tagZh : sc.tagEn}</div>
                    <h4 className="card-title">
                      {learningMode === 'zh' ? sc.titleZh : sc.titleEn}
                    </h4>
                    <span className="card-sub">{sc.titleVi}</span>
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

            {currentScenario.realMenu && (
              <button 
                className={`view-tab-btn ${activeViewTab === 'menu' ? 'active' : ''} highlight-tab`}
                onClick={() => setActiveViewTab('menu')}
              >
                <ClipboardList size={16} />
                <span>{learningMode === 'zh' ? '5. 實際菜單解析' : '5. Real Menu Guide'}</span>
              </button>
            )}

            {currentScenario.cityGuides && (
              <button 
                className={`view-tab-btn ${activeViewTab === 'cityGuide' ? 'active' : ''} highlight-tab`}
                onClick={() => setActiveViewTab('cityGuide')}
              >
                <Map size={16} />
                <span>{learningMode === 'zh' ? '5. 城市景點指南' : '5. City Guides'}</span>
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
        </div>
      </div>
    </div>
  );
};
