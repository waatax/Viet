import React, { useState, useEffect } from 'react';
import {
  Trophy, X, Flame, Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowRight,
  Gift, Award, Star, Check
} from 'lucide-react';
import { gamificationEngine } from '../utils/gamificationEngine';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const DailyQuestModal = ({ userStats, updateUserStats, isOpen, onClose }) => {
  const { learningMode } = useLanguage();
  const [quests, setQuests] = useState([]);
  const [streakShields, setStreakShields] = useState(1);
  const [claimMessage, setClaimMessage] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setQuests(gamificationEngine.getDailyQuests());
      setStreakShields(gamificationEngine.loadStreakShields());
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        audioEngine.playHaptic('tap');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleClaimQuest = (questId) => {
    const res = gamificationEngine.claimDailyQuest(questId);
    if (res.success) {
      setQuests(res.updatedQuests);
      audioEngine.playHaptic('success');
      audioEngine.playQuestCompleteSound();
      setClaimMessage(`+${res.claimedXp} XP 獲得！`);
      setTimeout(() => setClaimMessage(null), 2500);

      if (updateUserStats) {
        updateUserStats({
          type: 'ADD_XP',
          payload: res.claimedXp
        });
        if (res.allClaimed) {
          updateUserStats({
            type: 'QUEST_ALL_CLAIMED',
            payload: 50 // Bonus XP for all claimed
          });
        }
      }
    }
  };

  const handleBuyShield = () => {
    const res = gamificationEngine.buyStreakShield(userStats.xp || 0, 120);
    if (res.success) {
      setStreakShields(res.newShields);
      audioEngine.playHaptic('success');
      audioEngine.playStreakShieldSound();
      setClaimMessage('🛡️ 打卡防護罩購買成功！');
      setTimeout(() => setClaimMessage(null), 2500);

      if (updateUserStats) {
        updateUserStats({
          type: 'SHIELD_BOUGHT',
          payload: -120
        });
      }
    } else {
      audioEngine.playHaptic('warning');
      audioEngine.playGentleError();
      setClaimMessage(res.reason === 'MAX_SHIELDS' ? '⚠️ 防護罩已達上限 (3個)' : '⚠️ XP 不足 (需要 120 XP)');
      setTimeout(() => setClaimMessage(null), 2500);
    }
  };

  const completedCount = quests.filter(q => q.completed).length;

  return (
    <div className="ios-sheet-backdrop" onClick={() => { audioEngine.playHaptic('tap'); onClose(); }} role="dialog" aria-modal="true">
      <div className="ios-sheet-card" style={{ maxWidth: '640px', padding: '1.75rem', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
        <div className="ios-sheet-grabber" />
        
        {/* Close Button */}
        <button
          onClick={() => { audioEngine.playHaptic('tap'); onClose(); }}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '0.45rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10
          }}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>🎯⚡</div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 0.3rem' }}>
            {learningMode === 'zh' ? '每日挑戰看板與打卡防護罩' : 'Daily Quests & Streak Protection'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
            {learningMode === 'zh'
              ? `今日任務進度：${completedCount} / ${quests.length} 完成 · 每日 00:00 自動刷新`
              : `Today's Progress: ${completedCount} of ${quests.length} completed`}
          </p>
        </div>

        {/* Toast Claim Message */}
        {claimMessage && (
          <div style={{
            background: 'rgba(234, 179, 8, 0.15)',
            border: '1px solid var(--brand-gold)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem 1rem',
            textAlign: 'center',
            fontWeight: 800,
            color: 'var(--brand-gold)',
            marginBottom: '1rem',
            animation: 'glowSuccess 0.5s'
          }}>
            {claimMessage}
          </div>
        )}

        {/* Streak Shield Status Bar */}
        <div style={{
          background: 'var(--bg-accent)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '1rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.8rem' }}>🛡️</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? `連續打卡防護罩 (${streakShields}/3)` : `Streak Shield (${streakShields}/3)`}
              </div>
              <small style={{ color: 'var(--text-muted)' }}>
                {learningMode === 'zh' ? '出差斷簽時自動消耗 1 個保護連續天數' : 'Auto-protects streak if you miss a day'}
              </small>
            </div>
          </div>
          <button
            onClick={handleBuyShield}
            disabled={streakShields >= 3 || (userStats.xp || 0) < 120}
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--brand-gold)',
              background: 'rgba(234, 179, 8, 0.12)',
              color: 'var(--brand-gold)',
              fontWeight: 800,
              fontSize: '0.82rem',
              cursor: streakShields >= 3 || (userStats.xp || 0) < 120 ? 'not-allowed' : 'pointer',
              opacity: streakShields >= 3 || (userStats.xp || 0) < 120 ? 0.6 : 1
            }}
          >
            {streakShields >= 3 ? '已滿額 (Max)' : '購買防護罩 (120 XP)'}
          </button>
        </div>

        {/* Quests List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {quests.map((quest) => {
            const isDone = quest.completed;
            const isClaimed = quest.claimed;
            const progressPercent = Math.min(100, Math.round((quest.progress / quest.target) * 100));

            return (
              <div
                key={quest.id}
                style={{
                  background: isClaimed ? 'var(--bg-input)' : 'var(--bg-card-subtle)',
                  border: `1.5px solid ${isDone && !isClaimed ? 'var(--brand-gold)' : 'var(--border-color)'}`,
                  borderRadius: 'var(--radius-md)',
                  padding: '1.15rem 1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: isClaimed ? 0.75 : 1
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                  <span style={{ fontSize: '2rem' }}>{quest.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.98rem' }}>
                      {learningMode === 'zh' ? quest.titleZh : quest.titleEn}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      {learningMode === 'zh' ? quest.descZh : quest.descEn}
                    </div>
                    {/* Progress Bar */}
                    <div style={{ width: '100%', maxWidth: '240px', height: '6px', background: 'var(--bg-main)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${progressPercent}%`,
                        height: '100%',
                        background: isDone ? 'var(--brand-green)' : 'var(--brand-primary)',
                        transition: 'width 0.4s'
                      }} />
                    </div>
                  </div>
                </div>

                <div>
                  {isClaimed ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--brand-green)', fontWeight: 800, fontSize: '0.85rem' }}>
                      <Check size={16} /> 已領取
                    </span>
                  ) : isDone ? (
                    <button
                      className="primary-action"
                      onClick={() => handleClaimQuest(quest.id)}
                      style={{ padding: '0.5rem 1rem', fontSize: '0.88rem', fontWeight: 800 }}
                    >
                      領取 +{quest.rewardXp} XP 🎁
                    </button>
                  ) : (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700 }}>
                      {quest.progress} / {quest.target}
                    </span>
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

export default DailyQuestModal;
