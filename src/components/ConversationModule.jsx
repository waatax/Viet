import React, { useState } from 'react';
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
  Filter
} from 'lucide-react';
import { situationalScenarios, scenarioCategories } from '../data/situationalScenarios';
import { DialoguePlayer } from './DialoguePlayer';
import { RolePlayEngine } from './RolePlayEngine';
import { ScenarioVocabDeck } from './ScenarioVocabDeck';
import { CulturalTipsCard } from './CulturalTipsCard';
import { useLanguage } from '../context/LanguageContext';

export const ConversationModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, t } = useLanguage();
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScenarioId, setActiveScenarioId] = useState(situationalScenarios[0]?.id || 'cafe');
  const [activeViewTab, setActiveViewTab] = useState('dialogue'); // 'dialogue' | 'roleplay' | 'vocab' | 'culture'

  const currentScenario = situationalScenarios.find(s => s.id === activeScenarioId) || situationalScenarios[0];

  // Filter scenarios
  const filteredScenarios = situationalScenarios.filter(sc => {
    const matchesCategory = selectedCategory === 'all' || sc.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
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

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <MessageSquare color="var(--brand-primary)" />
          {learningMode === 'zh' ? '16 大實戰情境對話與沉浸式角色扮演 (Situational Role-Play)' : '16 Practical Situational Dialogues & Interactive Role-Play'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋咖啡廳、河粉店、法國麵包、熱炒海鮮、機場通關、飯店入住、Grab 叫車、夜市殺價、藥局就醫與商務拜訪等 16 個超真實高頻情境'
            : 'Master 16 authentic real-world scenarios including cafes, pho shops, banh mi carts, seafood dining, airports, hotels, Grab rides, market bargaining, and medical clinics.'}
        </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};
