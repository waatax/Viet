import React, { useState, useEffect } from 'react';
import { Info, Coffee, Utensils, BadgeCheck, CheckCircle2, Volume2 } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import './RealMenuViewer.css';

const RealMenuViewer = ({ scenario, learningMode, selectedAccent = 'north' }) => {
  const { realMenu } = scenario;
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key });
  };

  if (!realMenu) {
    return (
      <div className="real-menu-empty">
        <Info size={32} className="empty-icon" />
        <p>{learningMode === 'zh' ? '此情境尚未建置實際菜單解析。' : 'Real menu guide not available for this scenario yet.'}</p>
      </div>
    );
  }

  return (
    <div className="real-menu-container">
      <div className="real-menu-header">
        <div className="brand-badge">
          <BadgeCheck className="brand-icon" size={24} />
          <h2>{realMenu.brand}</h2>
        </div>
        <p className="brand-desc">
          {learningMode === 'zh' ? realMenu.descriptionZh : realMenu.descriptionEn}
        </p>
      </div>

      <div className="menu-sections">
        {realMenu.sections.map((section, idx) => (
          <div key={idx} className="menu-section-card">
            <h3 className="section-title">
              {learningMode === 'zh' ? section.titleZh : section.titleEn}
            </h3>
            <div className="menu-items-grid">
              {section.items.map((item, itemIdx) => {
                const itemKey = `menu_${idx}_${itemIdx}_${item.nameVi}`;
                const isPlaying = activeKey === itemKey;
                return (
                  <div key={itemIdx} className={`menu-item-box ${isPlaying ? 'playing-card' : ''}`}>
                    <div className="item-head">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span className="item-name-vi">{item.nameVi}</span>
                        <button
                          className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                          onClick={() => handleSpeak(item.nameVi, itemKey)}
                          title="播放菜名發音"
                          style={{
                            background: isPlaying ? 'var(--brand-primary)' : 'rgba(185, 28, 28, 0.1)',
                            color: isPlaying ? '#fff' : '#b91c1c',
                            border: 'none',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            padding: 0
                          }}
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                      <span className="item-price">{item.price}</span>
                    </div>
                    <div className="item-name-translated">
                      {learningMode === 'zh' ? item.nameZh : item.nameEn}
                    </div>
                    <div className="item-desc">
                      {learningMode === 'zh' ? item.descZh : item.descEn}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {(realMenu.orderingTipsZh && realMenu.orderingTipsZh.length > 0) && (
        <div className="ordering-tips-box">
          <h4>{learningMode === 'zh' ? '💡 點餐客製化必備句型' : '💡 Ordering & Customization Tips'}</h4>
          <ul>
            {learningMode === 'zh' 
              ? realMenu.orderingTipsZh.map((tip, i) => <li key={i}><CheckCircle2 size={14}/> <span>{tip}</span></li>)
              : realMenu.orderingTipsEn.map((tip, i) => <li key={i}><CheckCircle2 size={14}/> <span>{tip}</span></li>)
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default RealMenuViewer;
