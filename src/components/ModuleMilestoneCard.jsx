import React, { useState, useEffect } from 'react';
import { Award, ArrowRight, Sparkles, CheckCircle2, RotateCcw, Compass, ArrowUpRight, Flame } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const ModuleMilestoneCard = ({
  currentModuleId,
  moduleTitleZh,
  moduleTitleEn,
  nextModuleId,
  nextModuleTitleZh,
  nextModuleTitleEn,
  relatedModules = [],
  summaryHighlights = [],
  bonusXp = 30,
  setActiveTab,
  updateUserStats
}) => {
  const { learningMode, t } = useLanguage();

  const storageKey = `viet_milestone_${currentModuleId}`;
  const [claimed, setClaimed] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return false;
      const today = new Date().toDateString();
      return saved === today;
    } catch {
      return false;
    }
  });

  const handleClaimXp = () => {
    if (claimed) return;
    audioEngine.playHaptic('success');
    audioEngine.playLevelUpFanfare();
    
    if (updateUserStats) {
      updateUserStats({
        type: 'ADD_XP',
        payload: bonusXp,
        moduleId: currentModuleId
      });
    }

    try {
      const today = new Date().toDateString();
      localStorage.setItem(storageKey, today);
    } catch {}

    setClaimed(true);
  };

  const handleGoNext = () => {
    audioEngine.playHaptic('tap');
    if (setActiveTab && nextModuleId) {
      setActiveTab(nextModuleId);
    }
  };

  const handleGoRelated = (id) => {
    audioEngine.playHaptic('tap');
    if (setActiveTab && id) {
      setActiveTab(id);
    }
  };

  const moduleTitle = learningMode === 'zh' ? moduleTitleZh : (moduleTitleEn || moduleTitleZh);
  const nextTitle = learningMode === 'zh' ? nextModuleTitleZh : (nextModuleTitleEn || nextModuleTitleZh);

  return (
    <section className="module-milestone-section" style={{
      marginTop: '2.5rem',
      marginBottom: '1.5rem',
      padding: '2rem 1.8rem',
      background: 'linear-gradient(135deg, color-mix(in srgb, var(--bg-card) 95%, #2563eb 5%) 0%, color-mix(in srgb, var(--bg-card) 95%, #eab308 5%) 100%)',
      border: '2px solid var(--border-color)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--card-shadow)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative top accent glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, #3b82f6, #eab308, #10b981)'
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.25rem',
        marginBottom: '1.5rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: 'var(--radius-full)',
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.2), rgba(239, 68, 68, 0.15))',
            border: '1.5px solid var(--brand-gold)',
            color: 'var(--brand-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            boxShadow: '0 4px 12px rgba(234, 179, 8, 0.2)'
          }}>
            🏆
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              <Sparkles size={13} /> {learningMode === 'zh' ? '單元學習里程碑達成' : 'Unit Milestone Achieved'}
            </div>
            <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? `恭喜完成「${moduleTitle}」章節學習！` : `Congratulations on completing ${moduleTitle}!`}
            </h3>
          </div>
        </div>

        {/* Claim XP Button */}
        <div>
          <button
            onClick={handleClaimXp}
            disabled={claimed}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.65rem 1.35rem',
              borderRadius: 'var(--radius-full)',
              border: claimed ? '1.5px solid #10b981' : '1.5px solid var(--brand-gold)',
              background: claimed ? 'rgba(16, 185, 129, 0.14)' : 'linear-gradient(135deg, var(--brand-gold), #f59e0b)',
              color: claimed ? '#10b981' : '#000',
              fontWeight: 900,
              fontSize: '0.92rem',
              cursor: claimed ? 'default' : 'pointer',
              boxShadow: claimed ? 'none' : '0 4px 14px rgba(234, 179, 8, 0.35)',
              transition: 'all 0.2s ease'
            }}
          >
            {claimed ? (
              <>
                <CheckCircle2 size={16} />
                <span>{learningMode === 'zh' ? `今日里程碑已領取 (+${bonusXp} XP)` : `Today's +${bonusXp} XP Claimed`}</span>
              </>
            ) : (
              <>
                <span>⚡</span>
                <span>{learningMode === 'zh' ? `領取通關獎勵 (+${bonusXp} XP)` : `Claim Milestone Reward (+${bonusXp} XP)`}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Summary Highlights (if provided) */}
      {summaryHighlights.length > 0 && (
        <div style={{
          background: 'var(--bg-main)',
          padding: '1rem 1.25rem',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.5rem',
          border: '1px solid var(--border-color)'
        }}>
          <strong style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.4rem' }}>
            💡 {learningMode === 'zh' ? '本章關鍵認知沉澱' : 'Key Knowledge Takeaways'}:
          </strong>
          <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-primary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
            {summaryHighlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Next Step & Cross-Learning Action Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1rem',
        alignItems: 'stretch'
      }}>
        {/* Primary Next Chapter Card */}
        {nextModuleId && (
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--brand-accent)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.12)'
          }}>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: 'var(--brand-accent)',
                background: 'var(--bg-accent)',
                padding: '0.15rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '0.6rem'
              }}>
                <Compass size={12} /> {learningMode === 'zh' ? '認知體系推薦下一步' : 'Recommended Next Step'}
              </span>
              <h4 style={{ margin: '0 0 0.35rem', fontSize: '1.12rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                {nextTitle}
              </h4>
              <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {learningMode === 'zh'
                  ? '將剛才學到的知識立即投入實戰強化，形成永久長期記憶連結。'
                  : 'Immediately apply what you just learned to lock in long-term memory.'}
              </p>
            </div>

            <button
              onClick={handleGoNext}
              style={{
                marginTop: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.45rem',
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--brand-accent)',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.25)'
              }}
            >
              <span>{learningMode === 'zh' ? `進入「${nextTitle}」` : `Continue to ${nextTitle}`}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Related Exercises & Sister Modules */}
        {relatedModules.length > 0 && (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.74rem',
                fontWeight: 800,
                color: 'var(--text-secondary)',
                background: 'var(--bg-subtle)',
                padding: '0.15rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                marginBottom: '0.6rem'
              }}>
                <RotateCcw size={12} /> {learningMode === 'zh' ? '相關交叉練習模組' : 'Related Cross-Training'}
              </span>
              <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '多元深化訓練' : 'Deepen Your Skills'}
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              {relatedModules.map((rel) => (
                <button
                  key={rel.id}
                  onClick={() => handleGoRelated(rel.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.6rem 0.85rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>{rel.icon || '📌'}</span>
                    <div>
                      <strong style={{ fontSize: '0.88rem', display: 'block' }}>
                        {learningMode === 'zh' ? rel.titleZh : (rel.titleEn || rel.titleZh)}
                      </strong>
                      {rel.descZh && (
                        <small style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                          {learningMode === 'zh' ? rel.descZh : (rel.descEn || rel.descZh)}
                        </small>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight size={14} color="var(--brand-accent)" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ModuleMilestoneCard;
