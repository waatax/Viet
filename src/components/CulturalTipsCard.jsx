import React from 'react';
import { Compass, Lightbulb, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CulturalTipsCard = ({ scenario }) => {
  const { learningMode } = useLanguage();
  const tipsData = scenario.culturalTips || scenario.culturalTip;

  if (!tipsData) return null;

  const rawTips = learningMode === 'zh' 
    ? (tipsData.tipsZh || (tipsData.contentZh ? [tipsData.contentZh] : [])) 
    : (tipsData.tipsEn || (tipsData.contentEn ? [tipsData.contentEn] : []));
  const tipsList = Array.isArray(rawTips) ? rawTips : (rawTips ? [rawTips] : []);
  const proTip = learningMode === 'zh' ? tipsData.proTipZh : tipsData.proTipEn;

  return (
    <div className="cultural-tips-card-wrapper">
      <div className="cultural-header">
        <Compass size={20} color="var(--brand-gold)" />
        <h4 style={{ margin: 0, fontSize: '1.15em', fontWeight: 800 }}>
          {learningMode === 'zh' ? tipsData.titleZh : tipsData.titleEn}
        </h4>
      </div>

      <div className="cultural-tips-list">
        {tipsList?.map((tip, idx) => (
          <div key={idx} className="cultural-tip-item">
            <CheckCircle size={16} color="var(--brand-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
            <div className="tip-text">{tip}</div>
          </div>
        ))}
      </div>

      {proTip && (
        <div className="protip-box">
          <Lightbulb size={18} color="var(--brand-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div className="protip-text">{proTip}</div>
        </div>
      )}
    </div>
  );
};
