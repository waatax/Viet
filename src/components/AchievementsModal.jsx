import React, { useState } from 'react';
import {
  Trophy, X, Flame, Sparkles, CheckCircle2, Lock, Award, Star, Zap, ShieldCheck
} from 'lucide-react';
import { ACHIEVEMENTS_LIST, gamificationEngine } from '../utils/gamificationEngine';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../services/audioEngine';

export const AchievementsModal = ({ userStats, isOpen, onClose }) => {
  const { learningMode } = useLanguage();
  const [filter, setFilter] = useState('all'); // 'all' | 'unlocked' | 'locked'

  if (!isOpen) return null;

  const unlockedIds = new Set(gamificationEngine.loadUnlockedAchievements());
  const currentLevel = gamificationEngine.calculateLevel(userStats.xp || 0);
  const levelProgress = gamificationEngine.getLevelProgress(userStats.xp || 0);

  const filteredBadges = ACHIEVEMENTS_LIST.filter(badge => {
    const isUnlocked = unlockedIds.has(badge.id);
    if (filter === 'unlocked') return isUnlocked;
    if (filter === 'locked') return !isUnlocked;
    return true;
  });

  const handleBadgeClick = (badge) => {
    if (unlockedIds.has(badge.id)) {
      audioEngine.playBadgeUnlockSound();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      padding: '1.25rem'
    }}>
      <div style={{
        background: 'var(--bg-card)',
        border: '2px solid var(--brand-gold)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '720px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        padding: '2rem'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.4rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <X size={24} />
        </button>

        {/* Header Stats */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>🏆✨</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 0.4rem' }}>
            {learningMode === 'zh' ? '越語榮耀成就勳章展示櫃' : 'Vietnamese Mastery Achievements'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: '0 0 1.5rem', fontSize: '0.95rem' }}>
            {learningMode === 'zh'
              ? `已解鎖 ${unlockedIds.size} / ${ACHIEVEMENTS_LIST.length} 枚榮譽勳章 · 累積 ${userStats.xp || 0} XP`
              : `Unlocked ${unlockedIds.size} of ${ACHIEVEMENTS_LIST.length} Badges · Total ${userStats.xp || 0} XP`}
          </p>

          {/* Level Progress Banner */}
          <div style={{
            background: 'var(--bg-accent)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--brand-gold), var(--brand-primary))',
                color: '#fff',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem'
              }}>
                Lv.{currentLevel}
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                  {learningMode === 'zh' ? `當前等級：Lv. ${currentLevel}` : `Current Level: Lv. ${currentLevel}`}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {levelProgress.requiredXpForNextLevel > 0
                    ? (learningMode === 'zh'
                      ? `距離 Lv. ${currentLevel + 1} 還需 ${levelProgress.requiredXpForNextLevel - levelProgress.currentXpInLevel} XP`
                      : `${levelProgress.requiredXpForNextLevel - levelProgress.currentXpInLevel} XP to next level`)
                    : '已達最高榮譽等級！'}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', fontWeight: 800 }}>
              <Flame size={22} fill="currentColor" />
              <span>{userStats.streak || 1} {learningMode === 'zh' ? '天連續打卡' : 'Day Streak'}</span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
          <button
            onClick={() => setFilter('all')}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: filter === 'all' ? '2px solid var(--brand-gold)' : '1px solid var(--border-color)',
              background: filter === 'all' ? 'rgba(234, 179, 8, 0.15)' : 'var(--bg-card)',
              color: filter === 'all' ? 'var(--brand-gold)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {learningMode === 'zh' ? `全部 (${ACHIEVEMENTS_LIST.length})` : `All (${ACHIEVEMENTS_LIST.length})`}
          </button>
          <button
            onClick={() => setFilter('unlocked')}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: filter === 'unlocked' ? '2px solid var(--brand-green)' : '1px solid var(--border-color)',
              background: filter === 'unlocked' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
              color: filter === 'unlocked' ? 'var(--brand-green)' : 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {learningMode === 'zh' ? `已解鎖 (${unlockedIds.size})` : `Unlocked (${unlockedIds.size})`}
          </button>
          <button
            onClick={() => setFilter('locked')}
            style={{
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: filter === 'locked' ? '2px solid var(--text-muted)' : '1px solid var(--border-color)',
              background: filter === 'locked' ? 'var(--bg-accent)' : 'var(--bg-card)',
              color: 'var(--text-secondary)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
          >
            {learningMode === 'zh' ? `未解鎖 (${ACHIEVEMENTS_LIST.length - unlockedIds.size})` : `Locked (${ACHIEVEMENTS_LIST.length - unlockedIds.size})`}
          </button>
        </div>

        {/* Badges Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {filteredBadges.map((badge) => {
            const isUnlocked = unlockedIds.has(badge.id);
            return (
              <div
                key={badge.id}
                onClick={() => handleBadgeClick(badge)}
                style={{
                  background: isUnlocked ? 'var(--bg-accent)' : 'rgba(0,0,0,0.03)',
                  border: isUnlocked ? '1.5px solid var(--brand-gold)' : '1px dashed var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem 1rem',
                  textAlign: 'center',
                  cursor: isUnlocked ? 'pointer' : 'default',
                  opacity: isUnlocked ? 1 : 0.6,
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.4rem',
                  filter: isUnlocked ? 'none' : 'grayscale(100%)'
                }}>
                  {badge.icon}
                </div>

                <div style={{ fontWeight: 800, color: isUnlocked ? 'var(--text-primary)' : 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {learningMode === 'zh' ? badge.titleZh : badge.titleEn}
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.4, marginBottom: '0.6rem' }}>
                  {learningMode === 'zh' ? badge.descZh : badge.descEn}
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: isUnlocked ? 'var(--brand-gold)' : 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}>
                  {isUnlocked ? (
                    <>
                      <CheckCircle2 size={13} color="var(--brand-green)" />
                      <span>已達成 (+{badge.bonusXp} XP)</span>
                    </>
                  ) : (
                    <>
                      <Lock size={12} />
                      <span>未達成 (+{badge.bonusXp} XP)</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsModal;
