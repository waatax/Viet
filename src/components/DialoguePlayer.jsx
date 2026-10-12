import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Volume2, PlayCircle, Eye, EyeOff, Sparkles, Star, Copy, Check } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { bookmarkService } from '../services/bookmarkService';
import { getPlaybackPrefs } from '../services/dialoguePlayback';
import { useDialoguePlayback, useFollowActiveLine } from '../hooks/useDialoguePlayback';
import { DialoguePlaybackBar, PlaybackPartChip, getPlaybackCopy } from './DialoguePlaybackBar';

const TypewriterText = ({ text, isActive, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!isActive) {
      setDisplayedText(text);
      return;
    }
    setDisplayedText('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, isActive, speed]);

  return <span>{displayedText}</span>;
};

export const getSpeakerVisual = (speaker = '', role = '', learningMode = 'zh') => {
  const s = (speaker || '').toLowerCase();
  // An explicit 'npc' role wins over name guesses (e.g. "Bạn địa phương" is the local friend)
  const isLearner = role === 'learner' || role !== 'npc' && (
    s.includes('du khách') ||
    s.includes('bạn') || 
    s.includes('người học') || 
    s.includes('tôi') || 
    s.includes('chúng tôi') || 
    s.includes('khách đài loan') ||
    s.startsWith('a ')
  );
  
  if (isLearner) {
    return {
      icon: '🎒',
      bg: 'rgba(59, 130, 246, 0.12)',
      border: '#3b82f6',
      roleName: learningMode === 'zh' ? '學習者 / 旅客' : 'Learner / Traveler'
    };
  }
  if (s.includes('bác sĩ') || s.includes('y tá')) {
    return { icon: '👨‍⚕️', bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', roleName: learningMode === 'zh' ? '門診醫師' : 'Physician' };
  }
  if (s.includes('dược sĩ')) {
    return { icon: '💊', bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', roleName: learningMode === 'zh' ? '專業藥劑師' : 'Pharmacist' };
  }
  if (s.includes('thợ') || s.includes('stylist') || s.includes('cắt tóc') || s.includes('30shine')) {
    return { icon: '💈', bg: 'rgba(236, 72, 153, 0.12)', border: '#ec4899', roleName: learningMode === 'zh' ? '造型設計師' : 'Hair Stylist' };
  }
  if (s.includes('tài xế') || s.includes('lái xe') || s.includes('grab')) {
    return { icon: '🚕', bg: 'rgba(245, 158, 11, 0.12)', border: '#f59e0b', roleName: learningMode === 'zh' ? '專車司機' : 'Driver' };
  }
  if (s.includes('lễ tân') || s.includes('tiếp tân') || s.includes('khách sạn')) {
    return { icon: '🏨', bg: 'rgba(14, 165, 233, 0.12)', border: '#0ea5e9', roleName: learningMode === 'zh' ? '飯店櫃檯' : 'Receptionist' };
  }
  if (s.includes('nhân viên') || s.includes('phục vụ') || s.includes('bồi bàn')) {
    return { icon: '🛎️', bg: 'rgba(99, 102, 241, 0.12)', border: '#6366f1', roleName: learningMode === 'zh' ? '服務專員' : 'Service Staff' };
  }
  if (s.includes('chủ') || s.includes('chị bán') || s.includes('cô bán') || s.includes('anh bán') || s.includes('quầy')) {
    return { icon: '🛒', bg: 'rgba(249, 115, 22, 0.12)', border: '#f97316', roleName: learningMode === 'zh' ? '在地攤主/店主' : 'Shopkeeper' };
  }
  if (s.includes('hải quan') || s.includes('công an') || s.includes('an ninh')) {
    return { icon: '🛃', bg: 'rgba(100, 116, 139, 0.12)', border: '#64748b', roleName: learningMode === 'zh' ? '關卡審查官' : 'Customs Officer' };
  }
  if (s.includes('giám đốc') || s.includes('đối tác') || s.includes('quản lý') || s.includes('nam')) {
    return { icon: '💼', bg: 'rgba(139, 92, 246, 0.12)', border: '#8b5cf6', roleName: learningMode === 'zh' ? '商務主管/經理' : 'Executive' };
  }
  if (s.includes('kỹ sư') || s.includes('quản đốc') || s.includes('nhà máy')) {
    return { icon: '🏭', bg: 'rgba(234, 88, 12, 0.12)', border: '#ea580c', roleName: learningMode === 'zh' ? '工廠主管/工程師' : 'Factory Engineer' };
  }
  if (s.includes('chủ nhà') || s.includes('môi giới')) {
    return { icon: '🏠', bg: 'rgba(20, 184, 166, 0.12)', border: '#14b8a6', roleName: learningMode === 'zh' ? '房產代表/房東' : 'Landlord' };
  }
  return {
    icon: '🇻🇳',
    bg: 'rgba(239, 68, 68, 0.12)',
    border: '#ef4444',
    roleName: learningMode === 'zh' ? '在地母語者' : 'Local Speaker'
  };
};

export const DialoguePlayer = ({ scenario, selectedAccent, updateUserStats, autoStart, onPlaybackComplete, autoNextLabel }) => {
  const { learningMode } = useLanguage();
  const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

  // Support dialogueSections (dual dialogues) or fallback to scenario.dialogues
  const sections = useMemo(() => (
    scenario.dialogueSections && scenario.dialogueSections.length > 0
      ? scenario.dialogueSections
      : [
          {
            id: 'd1',
            titleZh: '對話一：標準實況對話',
            titleVi: 'Hội Thoại 1: Tiêu Chuẩn',
            titleEn: 'Dialogue 1: Standard Interaction',
            summaryZh: scenario.summaryZh,
            summaryEn: scenario.summaryEn,
            lines: scenario.dialogues || scenario.dialogue || []
          }
        ]
  ), [scenario]);

  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || 'd1');
  const [showTranslations, setShowTranslations] = useState(true);
  const [engineKey, setEngineKey] = useState(null);
  const [copiedLineIdx, setCopiedLineIdx] = useState(null);
  const [, setBmTick] = useState(0);
  const feedRef = useRef(null);
  const awardedRef = useRef(new Set());
  const pendingAutoPlayRef = useRef(null);
  const consumedAutoStartRef = useRef(null);

  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];
  const dialogues = activeSection?.lines || [];
  const sectionIndex = Math.max(0, sections.findIndex(s => s.id === activeSection?.id));

  const handlePlaylistComplete = ({ mode }) => {
    const awardKey = `${scenario.id}:${activeSection?.id}`;
    if (!awardedRef.current.has(awardKey)) {
      awardedRef.current.add(awardKey);
      if (updateUserStats) updateUserStats(20);
    }
    if (!getPlaybackPrefs().autoNext) return;
    // Continue with the next dialogue section first, then hand over to the next scenario
    if (sectionIndex + 1 < sections.length) {
      pendingAutoPlayRef.current = mode;
      setActiveSectionId(sections[sectionIndex + 1].id);
    } else if (onPlaybackComplete) {
      onPlaybackComplete({ mode });
    }
  };

  const player = useDialoguePlayback({
    lines: dialogues,
    accent: selectedAccent,
    nativeLang,
    title: learningMode === 'zh' ? scenario.titleZh : scenario.titleEn,
    onComplete: handlePlaylistComplete
  });

  useFollowActiveLine(feedRef, player.isActive ? player.index : -1, player.isPlaying);

  useEffect(() => {
    return bookmarkService.subscribe(() => setBmTick(t => t + 1));
  }, []);

  useEffect(() => {
    return audioEngine.subscribe((state) => {
      setEngineKey(state.isPlaying ? state.activeKey : null);
    });
  }, []);

  // Reset section on scenario switch (the playback hook stops itself when the script changes)
  useEffect(() => {
    setActiveSectionId(sections[0]?.id || 'd1');
  }, [scenario.id]);

  // Auto-continue: start the next section, or the next scenario requested by the parent
  useEffect(() => {
    if (pendingAutoPlayRef.current) {
      const mode = pendingAutoPlayRef.current;
      pendingAutoPlayRef.current = null;
      player.play(mode, 0);
      return;
    }
    if (autoStart && autoStart.scenarioId === scenario.id && consumedAutoStartRef.current !== autoStart.nonce) {
      consumedAutoStartRef.current = autoStart.nonce;
      player.play(autoStart.mode, 0);
    }
  }, [activeSectionId, scenario.id, autoStart]);

  const handleCopyLine = (vietText, translation, idx) => {
    navigator.clipboard?.writeText(`${vietText}\n${translation || ''}`);
    audioEngine.playHaptic('tap');
    setCopiedLineIdx(idx);
    setTimeout(() => setCopiedLineIdx(null), 1800);
  };

  const handleToggleBookmark = (line, vietText) => {
    audioEngine.playHaptic('tap');
    bookmarkService.toggle({
      id: `scn_line_${vietText}`,
      viet: vietText,
      zh: line.zh || '',
      en: line.en || '',
      category: scenario.titleZh || '情境對話',
      module: 'conversation',
      tag: '情境金句'
    });
  };

  const handleSwitchSection = (sectionId) => {
    if (sectionId === activeSectionId) return;
    player.stop();
    setActiveSectionId(sectionId);
  };

  // Single line, Vietnamese only (interrupts any running sequence)
  const handlePlayLine = (text, idx) => {
    audioEngine.speak(text, {
      accent: selectedAccent,
      rate: player.prefs.speed,
      key: `line_${activeSectionId}_${idx}`
    });
  };

  const t = getPlaybackCopy(learningMode);

  return (
    <div className="dialogue-player-wrapper">
      {/* Dialogue Section Selector Tabs (Dialogue 1 / Dialogue 2) */}
      {sections.length > 1 && (
        <div className="dialogue-section-nav" style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {sections.map((sec, sIdx) => {
            const isSecActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => handleSwitchSection(sec.id)}
                className={`dialogue-sec-tab-btn ${isSecActive ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1.1rem',
                  borderRadius: 'var(--radius-md, 8px)',
                  border: isSecActive ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                  background: isSecActive ? 'var(--brand-primary-light, rgba(239, 68, 68, 0.12))' : 'var(--bg-secondary)',
                  color: isSecActive ? 'var(--brand-primary)' : 'var(--text-primary)',
                  fontWeight: isSecActive ? 700 : 500,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{sIdx === 0 ? '💬' : '🌟'}</span>
                <span>{learningMode === 'zh' ? sec.titleZh : sec.titleEn}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Active Section Goal Summary Card */}
      {activeSection && (
        <div
          className="dialogue-section-summary-banner"
          style={{
            background: 'var(--bg-card)',
            borderLeft: '4px solid var(--brand-accent)',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-sm, 6px)',
            marginBottom: '1rem',
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Sparkles size={16} color="var(--brand-accent)" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: 'var(--text-primary)', marginRight: '0.4rem' }}>
              {learningMode === 'zh' ? activeSection.titleZh : activeSection.titleEn}:
            </strong>
            <span>{learningMode === 'zh' ? activeSection.summaryZh : activeSection.summaryEn}</span>
          </div>
        </div>
      )}

      {/* Two-mode playback: 越→中 逐句對照 / 純越文沉浸 */}
      <DialoguePlaybackBar
        player={player}
        lines={dialogues}
        learningMode={learningMode}
        title={learningMode === 'zh' ? scenario.titleZh : scenario.titleEn}
        autoNextLabel={autoNextLabel}
        xpHint="+20 XP"
      />

      <div className="dialogue-toolbar dialogue-toolbar-slim">
        <span className="dialogue-toolbar-hint">
          {learningMode === 'zh'
            ? `共 ${dialogues.length} 句 · 點「▶ 從此句」可從任一句開始連播`
            : `${dialogues.length} lines · tap "▶ From here" to start at any line`}
        </span>
        <button
          className="control-btn toggle-trans-btn"
          onClick={() => setShowTranslations(prev => !prev)}
          title={showTranslations ? '隱藏中文/英文翻譯以考驗聽力' : '顯示翻譯'}
          aria-pressed={!showTranslations}
        >
          {showTranslations ? <EyeOff size={15} /> : <Eye size={15} />}
          <span>{showTranslations ? (learningMode === 'zh' ? '隱藏翻譯 (聽力模式)' : 'Hide Translation') : (learningMode === 'zh' ? '顯示翻譯' : 'Show Translation')}</span>
        </button>
      </div>

      {/* Dialogue Chat Feed */}
      <div className="dialogue-chat-feed" ref={feedRef}>
        {dialogues.map((line, idx) => {
          const speakerName = line.speaker || line.speakerVi || line.speakerZh || 'Người đối thoại';
          const isUserRole = line.role === 'learner' || line.isLearner || (line.speakerVi && (line.speakerVi.includes('Khách') || line.speakerVi.includes('thuê') || line.speakerVi.includes('Bạn') || line.speakerVi.includes('nhân')));
          const isSequenceLine = player.isActive && player.index === idx;
          const isActive = isSequenceLine || engineKey === `line_${activeSectionId}_${idx}`;
          const visual = getSpeakerVisual(speakerName, isUserRole ? 'learner' : line.role, learningMode);
          const vietText = line.viet || line.vi;
          const translation = learningMode === 'zh' ? line.zh : line.en;
          const revealTranslation = showTranslations || (isSequenceLine && player.part === 'native');

          return (
            <div
              key={`${activeSectionId}_${idx}`}
              data-line-index={idx}
              className={`dialogue-bubble-row ${isUserRole ? 'row-learner' : 'row-npc'} ${isActive ? 'line-highlight' : ''} ${isSequenceLine ? `dpb-active-line part-${player.part}` : ''}`}
            >
              {/* Speaker Avatar Circle */}
              <div
                className="dialogue-avatar"
                style={{
                  background: visual.bg,
                  borderColor: visual.border,
                  color: visual.border
                }}
                title={`${speakerName} (${visual.roleName})`}
              >
                <span>{visual.icon}</span>
              </div>

              <div className="chat-bubble-container">
                <div className="bubble-meta">
                  <span className="speaker-tag">{speakerName}</span>
                  <span
                    className="role-tag-pill"
                    style={{
                      borderColor: visual.border,
                      color: visual.border,
                      background: visual.bg
                    }}
                  >
                    <span>{visual.icon}</span>
                    <span>{visual.roleName}</span>
                  </span>
                  {(line.northTip || line.southTip) && (
                    <span className="dialect-badge-pill">
                      <span>🗣️</span>
                      <span>{learningMode === 'zh' ? '方言要點' : 'Dialect'}</span>
                    </span>
                  )}
                  {isSequenceLine && <PlaybackPartChip player={player} learningMode={learningMode} className="dpb-line-part" />}
                </div>

                <div className="bubble-content-main">
                  <div className="vietnamese-text dpb-viet-text">
                    <TypewriterText text={vietText} isActive={isActive} speed={30} />
                  </div>

                  {revealTranslation && (
                    <div className="translation-text dpb-native-text">
                      <TypewriterText text={translation} isActive={isActive} speed={30} />
                    </div>
                  )}

                  {(line.northTip || line.southTip) && (
                    <details className="dialect-supplement">
                      <summary>
                        <span className="supplement-icon">📖</span>
                        <span>{learningMode === 'zh' ? '方言補充' : 'Dialect Notes'}</span>
                      </summary>
                      <div className="dialect-notes-content">
                        {line.northTip && (
                          <div className="dialect-note">
                            <span className="dialect-tag north">🇻🇳 {learningMode === 'zh' ? '北音' : 'North'}</span>
                            <span>{learningMode === 'zh' ? line.northTip : (line.northTipEn || line.northTip)}</span>
                          </div>
                        )}
                        {line.southTip && (
                          <div className="dialect-note">
                            <span className="dialect-tag south">🇻🇳 {learningMode === 'zh' ? '南音' : 'South'}</span>
                            <span>{learningMode === 'zh' ? line.southTip : (line.southTipEn || line.southTip)}</span>
                          </div>
                        )}
                      </div>
                    </details>
                  )}
                </div>

                {/* Single line actions: play from here, audio, bookmark, copy */}
                <div className="bubble-footer-actions" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
                  <button
                    className={`line-audio-trigger dpb-line-play-btn ${isSequenceLine ? 'playing' : ''}`}
                    onClick={() => {
                      audioEngine.playHaptic('tap');
                      player.playFrom(idx);
                    }}
                    title={t.jump(idx + 1)}
                  >
                    <PlayCircle size={15} />
                    <span>{learningMode === 'zh' ? '從此句' : 'From here'}</span>
                  </button>

                  <button
                    className={`line-audio-trigger ${engineKey === `line_${activeSectionId}_${idx}` ? 'playing' : ''}`}
                    onClick={() => handlePlayLine(vietText, idx)}
                    title={learningMode === 'zh' ? '單句朗讀 (越文)' : 'Play line'}
                  >
                    <Volume2 size={15} />
                    <span>{player.prefs.speed < 0.85 ? (learningMode === 'zh' ? '慢速朗讀' : 'Slow') : (learningMode === 'zh' ? '朗讀' : 'Play')}</span>
                  </button>

                  <button
                    className="line-audio-trigger"
                    style={{
                      background: bookmarkService.isBookmarked(vietText) ? 'rgba(234, 179, 8, 0.15)' : 'transparent',
                      borderColor: bookmarkService.isBookmarked(vietText) ? 'var(--brand-gold)' : 'var(--border-color)',
                      color: bookmarkService.isBookmarked(vietText) ? 'var(--brand-gold)' : 'var(--text-muted)'
                    }}
                    onClick={() => handleToggleBookmark(line, vietText)}
                    title={bookmarkService.isBookmarked(vietText) ? '取消收藏' : '加入生詞本'}
                  >
                    <Star size={15} fill={bookmarkService.isBookmarked(vietText) ? '#eab308' : 'none'} color="#eab308" />
                    <span>{bookmarkService.isBookmarked(vietText) ? (learningMode === 'zh' ? '已收藏' : 'Starred') : (learningMode === 'zh' ? '收藏' : 'Star')}</span>
                  </button>

                  <button
                    className="line-audio-trigger"
                    style={{ background: 'transparent', color: 'var(--text-muted)' }}
                    onClick={() => handleCopyLine(vietText, translation, idx)}
                    title={learningMode === 'zh' ? '複製整句' : 'Copy'}
                  >
                    {copiedLineIdx === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    <span>{copiedLineIdx === idx ? (learningMode === 'zh' ? '已複製' : 'Copied') : (learningMode === 'zh' ? '複製' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
