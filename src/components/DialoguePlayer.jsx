import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Play, Pause, FastForward, Eye, EyeOff, Sparkles, MessageCircle, MapPin } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const DialoguePlayer = ({ scenario, selectedAccent, updateUserStats }) => {
  const { learningMode } = useLanguage();
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(null);
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9); // 0.9 normal, 0.7 slow
  const [showTranslations, setShowTranslations] = useState(true);
  const isPlayingFullRef = useRef(false);
  const currentIdxRef = useRef(0);
  const timerRef = useRef(null);

  const dialogues = scenario.dialogues || [];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      if (!state.isPlaying && !isPlayingFullRef.current) {
        setActiveLineIndex(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Clear timers and stop audio on unmount or scenario switch
  useEffect(() => {
    return () => {
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
    };
  }, [scenario.id]);

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
      key: `line_${idx}`,
      onEnd: () => {
        if (!isPlayingFullRef.current) {
          setActiveLineIndex(null);
        }
      }
    });
  };

  const playLineInSequence = (index) => {
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

    audioEngine.speak(line.viet, {
      accent: selectedAccent,
      rate: playbackSpeed,
      key: `seq_line_${index}`,
      onEnd: () => {
        if (!isPlayingFullRef.current) return;
        // Natural conversational gap between turns
        const gapMs = playbackSpeed < 0.85 ? 900 : 700;
        timerRef.current = setTimeout(() => {
          if (isPlayingFullRef.current) {
            playLineInSequence(index + 1);
          }
        }, gapMs);
      }
    });
  };

  const handlePlayFullDialogue = () => {
    if (isPlayingFull) {
      // Pause/Stop
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveLineIndex(null);
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }

    setIsPlayingFull(true);
    isPlayingFullRef.current = true;
    playLineInSequence(0);
  };

  return (
    <div className="dialogue-player-wrapper">
      {/* Control Header Toolbar */}
      <div className="dialogue-toolbar">
        <div className="toolbar-left">
          <button 
            className={`control-btn play-full-btn ${isPlayingFull ? 'playing' : ''}`}
            onClick={handlePlayFullDialogue}
            style={{ background: isPlayingFull ? 'var(--brand-primary)' : 'var(--brand-green)', color: '#fff' }}
          >
            {isPlayingFull ? <Pause size={16} /> : <Play size={16} />}
            <span>
              {isPlayingFull 
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? '播放全篇對話 (+20 XP)' : 'Play Full Dialogue (+20 XP)')}
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
          const isUserRole = line.role === 'learner';
          const isActive = activeLineIndex === idx;

          return (
            <div 
              key={idx} 
              className={`dialogue-bubble-row ${isUserRole ? 'row-learner' : 'row-npc'} ${isActive ? 'line-highlight' : ''}`}
            >
              <div className="chat-bubble-container">
                <div className="bubble-meta">
                  <span className="speaker-tag">{line.speaker}</span>
                  {selectedAccent === 'north' && line.northTip && (
                    <span className="dialect-badge north" title="北越口音特色">
                      🏛️ {line.northTip}
                    </span>
                  )}
                  {selectedAccent === 'south' && line.southTip && (
                    <span className="dialect-badge south" title="南越口音特色">
                      🌴 {line.southTip}
                    </span>
                  )}
                </div>

                <div className="bubble-content-main">
                  <div className="vietnamese-text">{line.viet}</div>
                  
                  {showTranslations && (
                    <div className="translation-text">
                      {learningMode === 'zh' ? line.zh : line.en}
                    </div>
                  )}
                </div>

                {/* Single line audio trigger */}
                <div className="bubble-footer-actions">
                  <button 
                    className={`line-audio-trigger ${isActive ? 'playing' : ''}`}
                    onClick={() => handlePlayLine(line.viet, idx, playbackSpeed)}
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
