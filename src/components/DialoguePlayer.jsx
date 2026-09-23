import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Play, Pause, FastForward, Eye, EyeOff, Sparkles, MessageCircle, MapPin, Layers, CheckCircle } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

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
  const isLearner = role === 'learner' || 
    s.includes('du khách') || 
    s.includes('bạn') || 
    s.includes('người học') || 
    s.includes('tôi') || 
    s.includes('chúng tôi') || 
    s.includes('khách đài loan') ||
    s.startsWith('a ');
  
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

export const DialoguePlayer = ({ scenario, selectedAccent, updateUserStats }) => {
  const { learningMode } = useLanguage();
  
  // Support dialogueSections (dual dialogues) or fallback to scenario.dialogues
  const sections = scenario.dialogueSections && scenario.dialogueSections.length > 0 
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
      ];

  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || 'd1');
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9); // 0.9 normal, 0.7 slow
  const [showTranslations, setShowTranslations] = useState(true);
  const [playMode, setPlayMode] = useState('bilingual'); // 'bilingual' | 'viet-only'
  const isPlayingFullRef = useRef(false);
  const currentIdxRef = useRef(0);
  const timerRef = useRef(null);

  // Active dialogue section object
  const activeSection = sections.find(s => s.id === activeSectionId) || sections[0];
  const dialogues = activeSection?.lines || [];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      if (!state.isPlaying && !isPlayingFullRef.current) {
        setActiveLineIndex(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Reset section and stop audio on scenario switch
  useEffect(() => {
    setActiveSectionId(sections[0]?.id || 'd1');
    isPlayingFullRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    audioEngine.stop();
    setActiveLineIndex(null);
    setIsPlayingFull(false);
  }, [scenario.id]);

  // Stop audio on tab switch within same scenario
  const handleSwitchSection = (sectionId) => {
    if (sectionId === activeSectionId) return;
    isPlayingFullRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    audioEngine.stop();
    setActiveLineIndex(null);
    setIsPlayingFull(false);
    setActiveSectionId(sectionId);
  };

  const handlePlayLine = (text, idx, speed = playbackSpeed) => {
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    setActiveLineIndex(idx);
    audioEngine.speak(text, { 
      accent: selectedAccent, 
      rate: speed,
      key: `line_${activeSectionId}_${idx}`,
      onEnd: () => {
        if (!isPlayingFullRef.current) {
          setActiveLineIndex(null);
        }
      }
    });
  };

  const playLineInSequence = (index, part = 'bilingual-first', currentPlayMode = playMode) => {
    if (!isPlayingFullRef.current || index >= dialogues.length) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveLineIndex(null);
      if (index >= dialogues.length && updateUserStats) {
        updateUserStats(20);
      }
      return;
    }

    currentIdxRef.current = index;
    setActiveLineIndex(index);
    const line = dialogues[index];

    const isBilingual = currentPlayMode === 'bilingual';

    if (isBilingual && part === 'bilingual-first') {
      const nativeText = learningMode === 'zh' ? line.zh : line.en;
      const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

      audioEngine.speak(nativeText, {
        lang: nativeLang,
        rate: playbackSpeed,
        key: `seq_line_native_${activeSectionId}_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) {
              playLineInSequence(index, 'viet', currentPlayMode);
            }
          }, 300); // short gap between languages
        }
      });
    } else {
      audioEngine.speak(line.viet || line.vi, {
        accent: selectedAccent,
        lang: 'vi',
        rate: playbackSpeed,
        key: `seq_line_${activeSectionId}_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          // Natural conversational gap between turns
          const gapMs = playbackSpeed < 0.85 ? 900 : 700;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) {
              playLineInSequence(index + 1, 'bilingual-first', currentPlayMode);
            }
          }, gapMs);
        }
      });
    }
  };

  const handlePlayFullDialogue = (mode = 'bilingual') => {
    if (isPlayingFull) {
      // Pause/Stop
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveLineIndex(null);
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }

    setPlayMode(mode);
    setIsPlayingFull(true);
    isPlayingFullRef.current = true;
    playLineInSequence(0, 'bilingual-first', mode);
  };

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

      {/* Control Header Toolbar */}
      <div className="dialogue-toolbar">
        <div className="toolbar-left" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {/* Play Bilingual */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'bilingual' ? 'playing' : ''}`}
            onClick={() => handlePlayFullDialogue('bilingual')}
            style={{ 
              background: isPlayingFull && playMode === 'bilingual' ? 'var(--brand-primary)' : 'var(--brand-green)', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'bilingual' ? 0.6 : 1
            }}
          >
            {isPlayingFull && playMode === 'bilingual' ? <Pause size={16} /> : <Play size={16} />}
            <span>
              {isPlayingFull && playMode === 'bilingual'
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? <>中+越 <span className="hide-mobile">(+20 XP)</span></> : <>Bilingual <span className="hide-mobile">(+20 XP)</span></>)}
            </span>
          </button>

          {/* Play Viet Only */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'viet-only' ? 'playing' : ''}`}
            onClick={() => handlePlayFullDialogue('viet-only')}
            style={{ 
              background: isPlayingFull && playMode === 'viet-only' ? 'var(--brand-primary)' : 'var(--brand-accent, #8b5cf6)', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'viet-only' ? 0.6 : 1
            }}
          >
            {isPlayingFull && playMode === 'viet-only' ? <Pause size={16} /> : <Play size={16} />}
            <span>
              {isPlayingFull && playMode === 'viet-only'
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? <>純越文 <span className="hide-mobile">(+20 XP)</span></> : <>Viet <span className="hide-mobile">(+20 XP)</span></>)}
            </span>
          </button>

          {/* Speed Toggle */}
          <div className="speed-toggle-group">
            <button 
              className={`speed-chip ${playbackSpeed >= 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.9)}
              title="正常語速"
            >
              1.0x
            </button>
            <button 
              className={`speed-chip ${playbackSpeed < 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.7)}
              title="慢速精讀 (適合初學跟讀)"
            >
              0.75x {learningMode === 'zh' ? '慢速' : 'Slow'}
            </button>
          </div>
        </div>

        <div className="toolbar-right">
          {/* Hide/Show Translation Toggle */}
          <button 
            className="control-btn toggle-trans-btn"
            onClick={() => setShowTranslations(prev => !prev)}
            title={showTranslations ? '隱藏中文/英文翻譯以考驗聽力' : '顯示翻譯'}
          >
            {showTranslations ? <EyeOff size={15} /> : <Eye size={15} />}
            <span>{showTranslations ? (learningMode === 'zh' ? '隱藏翻譯 (聽力模式)' : 'Hide Translation') : (learningMode === 'zh' ? '顯示翻譯' : 'Show Translation')}</span>
          </button>
        </div>
      </div>

      {/* Dialogue Chat Feed */}
      <div className="dialogue-chat-feed">
        {dialogues.map((line, idx) => {
          const speakerName = line.speaker || line.speakerVi || line.speakerZh || 'Người đối thoại';
          const isUserRole = line.role === 'learner' || line.isLearner || (line.speakerVi && (line.speakerVi.includes('Khách') || line.speakerVi.includes('thuê') || line.speakerVi.includes('Bạn') || line.speakerVi.includes('nhân')));
          const isActive = activeLineIndex === idx;
          const visual = getSpeakerVisual(speakerName, isUserRole ? 'learner' : 'npc', learningMode);
          const vietText = line.viet || line.vi;

          return (
            <div 
              key={`${activeSectionId}_${idx}`} 
              className={`dialogue-bubble-row ${isUserRole ? 'row-learner' : 'row-npc'} ${isActive ? 'line-highlight' : ''}`}
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
                </div>

                <div className="bubble-content-main">
                  <div className="vietnamese-text">
                    <TypewriterText text={vietText} isActive={isActive} speed={30} />
                  </div>
                  
                  {showTranslations && (
                    <div className="translation-text">
                      <TypewriterText text={learningMode === 'zh' ? line.zh : line.en} isActive={isActive} speed={30} />
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

                {/* Single line audio trigger */}
                <div className="bubble-footer-actions">
                  <button 
                    className={`line-audio-trigger ${isActive ? 'playing' : ''}`}
                    onClick={() => handlePlayLine(vietText, idx, playbackSpeed)}
                    title={learningMode === 'zh' ? '單句朗讀' : 'Play line'}
                  >
                    <Volume2 size={16} />
                    <span>{playbackSpeed < 0.85 ? (learningMode === 'zh' ? '慢速朗讀' : 'Slow') : (learningMode === 'zh' ? '朗讀' : 'Play')}</span>
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

