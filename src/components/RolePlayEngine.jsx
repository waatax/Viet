import React, { useState, useEffect } from 'react';
import { Play, Volume2, Mic, CheckCircle2, XCircle, RotateCcw, Award, Sparkles, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const RolePlayEngine = ({ scenario, selectedAccent, updateUserStats }) => {
  const { learningMode } = useLanguage();
  const rolePlayData = scenario.rolePlay;
  const steps = rolePlayData?.steps || [];

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [recognitionSupported, setRecognitionSupported] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const currentStep = steps[currentStepIndex] || steps[0];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Check Web Speech Recognition support
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        setRecognitionSupported(true);
      }
    }
  }, []);

  // Auto-play partner prompt on step change
  useEffect(() => {
    if (currentStep && !completed) {
      audioEngine.speak(currentStep.partnerPromptVi, { 
        accent: selectedAccent,
        key: `rp_partner_${currentStepIndex}` 
      });
    }
  }, [currentStepIndex, completed, scenario.id]);

  const handlePlayAudio = (text, key, rate = 1.0) => {
    audioEngine.speak(text, { accent: selectedAccent, key, rate });
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    if (option.isCorrect) {
      setFeedback({
        type: 'success',
        textZh: option.feedbackZh || '回答完全正確！非常好！',
        textEn: option.feedbackEn || 'Great job! Completely correct response!'
      });
      setScore(prev => prev + 10);
      if (updateUserStats) updateUserStats(10);
    } else {
      setFeedback({
        type: 'error',
        textZh: option.feedbackZh || '這個回答在當前情境下不夠自然，請換一個選項試試。',
        textEn: option.feedbackEn || 'This reply does not fit naturally here, please try again.'
      });
    }
  };

  const handleNextStep = () => {
    if (currentStepIndex + 1 < steps.length) {
      setCurrentStepIndex(prev => prev + 1);
      setSelectedOption(null);
      setFeedback(null);
      setRecognizedText('');
    } else {
      setCompleted(true);
      if (updateUserStats) updateUserStats(30);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setSelectedOption(null);
    setFeedback(null);
    setCompleted(false);
    setScore(0);
    setRecognizedText('');
  };

  const handleStartVoiceShadowing = () => {
    if (!recognitionSupported) {
      alert(learningMode === 'zh' ? '您的瀏覽器不支援即時語音識別，請嘗試 Chrome 瀏覽器。' : 'Speech recognition not supported in this browser. Please try Chrome.');
      return;
    }

    try {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'vi-VN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsRecording(true);
      setRecognizedText(learningMode === 'zh' ? '正在聆聽您的越語發音...' : 'Listening to your Vietnamese speech...');

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
        setRecognizedText(learningMode === 'zh' ? '未偵測到聲音，請再試一次或點擊選項。' : 'No speech detected, please retry or click an option.');
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (e) {
      setIsRecording(false);
    }
  };

  if (!rolePlayData || steps.length === 0) {
    return (
      <div className="empty-state-card">
        <p>{learningMode === 'zh' ? '此情境暫無角色扮演練習。' : 'No role-play available for this scenario yet.'}</p>
      </div>
    );
  }

  const isPartnerPlaying = activeKey === `rp_partner_${currentStepIndex}`;

  return (
    <div className="roleplay-engine-wrapper">
      {/* Role Identity Bar */}
      <div className="roleplay-identity-bar">
        <div className="role-chip user-role">
          <span className="role-badge">
            {learningMode === 'zh' ? '你的角色' : 'Your Role'}
          </span>
          <strong>{learningMode === 'zh' ? rolePlayData.userRoleZh : rolePlayData.userRoleEn}</strong>
        </div>
        <div className="role-chip partner-role">
          <span className="role-badge">
            {learningMode === 'zh' ? '對話對象' : 'Partner'}
          </span>
          <strong>{learningMode === 'zh' ? rolePlayData.partnerRoleZh : rolePlayData.partnerRoleEn}</strong>
        </div>
        <div className="role-score-badge">
          <Award size={16} color="var(--brand-gold)" />
          <span>{score} XP</span>
        </div>
      </div>

      {!completed ? (
        <div className="roleplay-active-step">
          {/* Progress dots */}
          <div className="roleplay-progress-track">
            {steps.map((s, idx) => (
              <div 
                key={idx} 
                className={`step-dot ${idx === currentStepIndex ? 'current' : idx < currentStepIndex ? 'done' : ''}`}
                title={`Step ${idx + 1}`}
              />
            ))}
          </div>

          {/* Partner Speech Bubble */}
          <div className={`roleplay-bubble partner-bubble ${isPartnerPlaying ? 'bubble-playing-active' : ''}`}>
            <div className="bubble-header">
              <span className="speaker-name">
                {learningMode === 'zh' ? rolePlayData.partnerRoleZh : rolePlayData.partnerRoleEn}
              </span>
              <button 
                className={`bubble-audio-btn ${isPartnerPlaying ? 'playing' : ''}`} 
                onClick={() => handlePlayAudio(currentStep.partnerPromptVi, `rp_partner_${currentStepIndex}`)}
                title={learningMode === 'zh' ? '聆聽對象發音' : 'Listen to partner'}
              >
                <Volume2 size={16} />
                <span>{learningMode === 'zh' ? '播放語音' : 'Play'}</span>
              </button>
            </div>
            <div className="bubble-text-vi">{currentStep.partnerPromptVi}</div>
            <div className="bubble-text-trans">
              {learningMode === 'zh' ? currentStep.partnerPromptZh : currentStep.partnerPromptEn}
            </div>
          </div>

          {/* User Turn Prompt */}
          <div className="user-turn-container">
            <div className="user-turn-header">
              <div className="turn-label">
                <Sparkles size={16} color="var(--brand-accent)" />
                <span>{learningMode === 'zh' ? '輪到你回應了！請選擇最道地的越語回覆：' : 'Your Turn! Choose the most natural reply:'}</span>
              </div>
              
              {recognitionSupported && (
                <button 
                  className={`voice-shadow-btn ${isRecording ? 'recording' : ''}`}
                  onClick={handleStartVoiceShadowing}
                  title="開麥克風練習跟讀"
                >
                  <Mic size={15} />
                  <span>{isRecording ? (learningMode === 'zh' ? '聆聽中...' : 'Listening...') : (learningMode === 'zh' ? '麥克風跟讀練習' : 'Voice Practice')}</span>
                </button>
              )}
            </div>

            {recognizedText && (
              <div className="speech-result-pill">
                <span>🎙️ {recognizedText}</span>
              </div>
            )}

            {/* Multiple Choice Option Cards */}
            <div className="roleplay-options-list">
              {currentStep.userOptions.map((opt) => {
                const optKey = `rp_opt_${opt.id}`;
                const isPlayingThisOpt = activeKey === optKey;
                const isSelected = selectedOption?.id === opt.id;
                let optionClass = 'roleplay-opt-card';
                if (isSelected) {
                  optionClass += opt.isCorrect ? ' opt-correct' : ' opt-wrong';
                }
                if (isPlayingThisOpt) {
                  optionClass += ' opt-playing';
                }

                return (
                  <div
                    key={opt.id}
                    className={optionClass}
                    onClick={() => handleSelectOption(opt)}
                  >
                    <div className="opt-content">
                      <div className="opt-viet">{opt.textVi}</div>
                      <div className="opt-trans">
                        {learningMode === 'zh' ? opt.textZh : opt.textEn}
                      </div>
                    </div>
                    <div className="opt-actions">
                      <button 
                        className={`opt-speaker-btn ${isPlayingThisOpt ? 'playing' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayAudio(opt.textVi, optKey);
                        }}
                        title="試聽此句"
                      >
                        <Volume2 size={15} />
                      </button>
                      {isSelected && (
                        opt.isCorrect ? <CheckCircle2 size={20} color="var(--brand-green)" /> : <XCircle size={20} color="var(--brand-primary)" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feedback Banner */}
            {feedback && (
              <div className={`roleplay-feedback-banner ${feedback.type}`}>
                <div className="feedback-content">
                  {feedback.type === 'success' ? (
                    <CheckCircle2 size={18} color="var(--brand-green)" />
                  ) : (
                    <XCircle size={18} color="var(--brand-primary)" />
                  )}
                  <span>{learningMode === 'zh' ? feedback.textZh : feedback.textEn}</span>
                </div>

                {selectedOption?.isCorrect && (
                  <button className="continue-step-btn" onClick={handleNextStep}>
                    <span>{currentStepIndex + 1 < steps.length ? (learningMode === 'zh' ? '下一回合' : 'Next Turn') : (learningMode === 'zh' ? '完成角色扮演' : 'Finish')}</span>
                    <ChevronRight size={16} />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Completion Card */
        <div className="roleplay-completed-banner">
          <div className="trophy-glow">🎉</div>
          <h3>{learningMode === 'zh' ? '恭喜完成本情境角色扮演！' : 'Congratulations! Scenario Role-Play Completed!'}</h3>
          <p className="completed-desc">
            {learningMode === 'zh' 
              ? `你已順利通關「${scenario.titleZh}」的實戰對話，獲得 +${score + 30} XP！`
              : `You have mastered the live dialogue for "${scenario.titleEn}", earned +${score + 30} XP!`}
          </p>

          <div className="completed-actions">
            <button className="control-btn active" onClick={handleReset} style={{ background: 'var(--brand-accent)', color: '#fff' }}>
              <RotateCcw size={16} />
              <span>{learningMode === 'zh' ? '再次挑戰' : 'Practice Again'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
