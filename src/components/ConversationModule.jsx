import React, { useState } from 'react';
import { MessageSquare, Volume2, UserCheck, Play, Utensils, Briefcase, Smile } from 'lucide-react';
import { multiScenarios } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const ConversationModule = ({ selectedAccent, updateUserStats }) => {
  const [activeCategory, setActiveCategory] = useState('daily');
  const [activeDialogueId, setActiveDialogueId] = useState('d1');
  const [roleplaySpeaker, setRoleplaySpeaker] = useState(null); // 'user' role

  const currentScenario = multiScenarios.find(s => s.category === activeCategory) || multiScenarios[0];
  const currentDialogueGroup = currentScenario.dialogues[0];

  const handleSpeakLine = (text) => {
    audioEngine.speak(text, { accent: selectedAccent });
  };

  const handlePlayFullDialogue = () => {
    currentDialogueGroup.lines.forEach((line, idx) => {
      setTimeout(() => {
        audioEngine.speak(line.viet, { accent: selectedAccent });
      }, idx * 3000);
    });
    updateUserStats(15); // Earn 15 XP for practicing dialogue
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <MessageSquare color="var(--brand-primary)" />
          多情境會話與商業職場對練 (Scenario & Business Conversations)
        </h2>
        <p className="section-desc">包含日常問候、越南特色美食餐廳點餐與商業拜訪談判會話</p>
      </div>

      {/* Category Tabs */}
      <div className="controls-group" style={{ marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <button 
          className={`control-btn ${activeCategory === 'daily' ? 'active' : ''}`}
          style={{ background: activeCategory === 'daily' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeCategory === 'daily' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveCategory('daily')}
        >
          <Smile size={16} /> 1. 日常問候與自我介紹
        </button>
        <button 
          className={`control-btn ${activeCategory === 'restaurant' ? 'active' : ''}`}
          style={{ background: activeCategory === 'restaurant' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeCategory === 'restaurant' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveCategory('restaurant')}
        >
          <Utensils size={16} /> 2. 餐廳點餐與美食用語
        </button>
        <button 
          className={`control-btn ${activeCategory === 'business' ? 'active' : ''}`}
          style={{ background: activeCategory === 'business' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeCategory === 'business' ? '#fff' : 'var(--text-primary)' }}
          onClick={() => setActiveCategory('business')}
        >
          <Briefcase size={16} /> 3. 商業職場與商務拜訪
        </button>
      </div>

      {/* Main Dialogue Box */}
      <div className="simulator-box">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.3em', fontWeight: 800, color: 'var(--brand-accent)' }}>
              {currentDialogueGroup.name}
            </h3>
            <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              分類：{currentScenario.title}
            </span>
          </div>

          <div className="controls-group">
            <button className="control-btn" onClick={handlePlayFullDialogue} style={{ background: 'var(--brand-green)', color: '#fff' }}>
              <Play size={16} /> 播放整段對話 (+15 XP)
            </button>
          </div>
        </div>

        {/* Dialogue Lines List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {currentDialogueGroup.lines.map((line, idx) => (
            <div 
              key={idx} 
              className="learning-card"
              style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '1rem 1.25rem',
                borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--brand-accent)' : 'var(--brand-purple)'}`
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <span className="tone-symbol" style={{ fontSize: '0.8em', background: 'var(--bg-accent)' }}>
                    {line.speaker}
                  </span>
                </div>
                <div style={{ fontSize: '1.15em', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {line.viet}
                </div>
                <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
                  {line.zh}
                </div>
              </div>

              <button 
                className="speaker-btn" 
                onClick={() => handleSpeakLine(line.viet)}
                title="播放句型音訊"
              >
                <Volume2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
