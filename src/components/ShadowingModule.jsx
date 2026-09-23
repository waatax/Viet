import React, { useState, useEffect, useRef } from 'react';
import {
  Mic, MicOff, Volume2, Play, RefreshCw, Trophy, AlertTriangle,
  ArrowRight, CheckCircle2, XCircle, AlertCircle, Headphones, Sparkles, ChevronRight
} from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { situationalScenarios } from '../data/situationalScenarios';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './ShadowingModule.css';

const stripVietnameseDiacritics = (str = '') => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
};

const getSyllableTone = (syllable = '') => {
  const s = syllable.toLowerCase();
  if (/[àằầèềìòồờùừỳ]/.test(s)) return { id: 'huyen', mark: 'ˋ', nameZh: '玄聲 (31)', color: '#10b981' };
  if (/[áắấéếíóốớúứý]/.test(s)) return { id: 'sac', mark: 'ˊ', nameZh: '銳聲 (35)', color: '#ef4444' };
  if (/[ảẳẩẻểỉỏổởủửỷ]/.test(s)) return { id: 'hoi', mark: '?', nameZh: '問聲 (313)', color: '#f59e0b' };
  if (/[ãẵẫẽễĩõỗỡũữỹ]/.test(s)) return { id: 'nga', mark: '~', nameZh: '跌聲 (35̃)', color: '#8b5cf6' };
  if (/[ạặậẹệịọộợụựỵ]/.test(s)) return { id: 'nang', mark: '.', nameZh: '重聲 (21)', color: '#64748b' };
  return { id: 'ngang', mark: '—', nameZh: '平聲 (44)', color: '#3b82f6' };
};

// Build scenario phrases pool
const scenarioDialoguePhrases = situationalScenarios.slice(0, 8).flatMap(sc => 
  (sc.dialogues || []).slice(0, 4).map(d => ({
    viet: d.viet,
    zh: d.zh,
    en: d.en,
    category: sc.titleZh || '情境會話'
  }))
);

const ALL_SHADOWING_PHRASES = [...practicalPhrases, ...scenarioDialoguePhrases];

const ShadowingModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [phrases, setPhrases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [wordDiagnostics, setWordDiagnostics] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [userAudioUrl, setUserAudioUrl] = useState(null);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState(false);
  const userAudioRef = useRef(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mediaStreamRef = useRef(null);

  const recognitionRef = useRef(null);
  const [activeKey, setActiveKey] = useState(null);

  // Group categories
  const categories = ['all', ...new Set(ALL_SHADOWING_PHRASES.map(p => p.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setPhrases(ALL_SHADOWING_PHRASES);
    } else {
      setPhrases(ALL_SHADOWING_PHRASES.filter(p => p.category === selectedCategory));
    }
    setCurrentIndex(0);
    resetState();
  }, [selectedCategory]);

  useEffect(() => {
    // Audio engine subscription
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });

    // Init Speech Recognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'vi-VN';

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
        
        if (event.results[0].isFinal) {
          calculateDetailedAccuracy(currentTranscript);
          stopListening();
        }
      };

      recognitionRef.current.onerror = (event) => {
        stopListening();
        if (event.error === 'not-allowed') {
          setErrorMsg(learningMode === 'zh' ? '麥克風未授權，請允許瀏覽器使用麥克風。' : 'Microphone access denied. Please allow microphone permissions.');
        } else if (event.error !== 'no-speech') {
          setErrorMsg(`辨識提示: ${event.error}`);
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setErrorMsg(learningMode === 'zh' ? '您的瀏覽器不支援 Web Speech API 語音辨識，建議使用 Chrome 或 Edge 體驗最佳辨識效果。您仍可透過錄音回放與標準原音自我對照！' : 'Speech Recognition is not supported. Use Chrome or Edge for full AI assessment.');
    }

    return () => {
      unsubscribe();
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const resetState = () => {
    setTranscript('');
    setAccuracy(null);
    setWordDiagnostics([]);
    setErrorMsg('');
    if (userAudioUrl) {
      URL.revokeObjectURL(userAudioUrl);
      setUserAudioUrl(null);
    }
  };

  const startMediaRecording = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStreamRef.current = stream;
        audioChunksRef.current = [];
        const recorder = new MediaRecorder(stream);
        mediaRecorderRef.current = recorder;

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunksRef.current.push(e.data);
          }
        };

        recorder.onstop = () => {
          const blob = new Blob(audioChunksRef.current, { type: 'audio/webm;codecs=opus' });
          const url = URL.createObjectURL(blob);
          setUserAudioUrl(url);
          if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
          }
        };

        recorder.start();
      }
    } catch (e) {
      console.warn('MediaRecorder error:', e);
    }
  };

  const stopMediaRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const toggleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    resetState();
    audioEngine.playHaptic('tap');
    startMediaRecording();

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        console.error(e);
        setIsListening(true);
      }
    } else {
      setIsListening(true);
    }
  };

  const stopListening = () => {
    setIsListening(false);
    audioEngine.playHaptic('tap');
    stopMediaRecording();
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
  };

  const handleNext = () => {
    if (currentIndex < phrases.length - 1) {
      setCurrentIndex(currentIndex + 1);
      resetState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      resetState();
    }
  };

  const playTargetAudio = (rate = 1.0, isSlow = false) => {
    if (!phrases[currentIndex]) return;
    audioEngine.speak(phrases[currentIndex].viet, { 
      accent: selectedAccent,
      rate,
      key: isSlow ? `shadow_slow_${currentIndex}` : `shadow_${currentIndex}`
    });
  };

  const playUserRecording = () => {
    if (!userAudioUrl) return;
    if (userAudioRef.current) {
      userAudioRef.current.pause();
    }
    const audio = new Audio(userAudioUrl);
    userAudioRef.current = audio;
    setIsPlayingUserAudio(true);
    audio.onended = () => setIsPlayingUserAudio(false);
    audio.onerror = () => setIsPlayingUserAudio(false);
    audio.play().catch(() => setIsPlayingUserAudio(false));
  };

  // High-Precision Word-by-Word & Tone Diagnostic Assessment
  const calculateDetailedAccuracy = (spokenText) => {
    const rawTarget = phrases[currentIndex].viet;
    const cleanTargetWords = rawTarget
      .replace(/[.,!?;:…—"']/g, '')
      .split(/\s+/)
      .filter(w => w.trim().length > 0);

    const cleanUserWords = spokenText
      .replace(/[.,!?;:…—"']/g, '')
      .split(/\s+/)
      .filter(w => w.trim().length > 0);

    const usedUserIndices = new Set();
    const diagnostics = cleanTargetWords.map((tWord, tIdx) => {
      const tClean = tWord.toLowerCase();
      const tBase = stripVietnameseDiacritics(tClean);

      // 1. Look for exact match (both letters and tones)
      for (let uIdx = 0; uIdx < cleanUserWords.length; uIdx++) {
        if (!usedUserIndices.has(uIdx)) {
          const uClean = cleanUserWords[uIdx].toLowerCase();
          if (uClean === tClean) {
            usedUserIndices.add(uIdx);
            return {
              word: tWord,
              status: 'correct',
              userWord: cleanUserWords[uIdx],
              hint: '音準與聲調完美！'
            };
          }
        }
      }

      // 2. Look for base letter match but tone mismatch
      for (let uIdx = 0; uIdx < cleanUserWords.length; uIdx++) {
        if (!usedUserIndices.has(uIdx)) {
          const uClean = cleanUserWords[uIdx].toLowerCase();
          const uBase = stripVietnameseDiacritics(uClean);
          if (uBase === tBase) {
            usedUserIndices.add(uIdx);
            return {
              word: tWord,
              status: 'tone_diff',
              userWord: cleanUserWords[uIdx],
              hint: `聽得像是「${cleanUserWords[uIdx]}」，聲調略有偏差`
            };
          }
        }
      }

      // 3. Word was omitted or missed
      return {
        word: tWord,
        status: 'missing',
        userWord: null,
        hint: '未檢測到清晰發音'
      };
    });

    let correctScore = 0;
    diagnostics.forEach(d => {
      if (d.status === 'correct') correctScore += 1;
      else if (d.status === 'tone_diff') correctScore += 0.65;
    });

    const finalAcc = Math.round((correctScore / cleanTargetWords.length) * 100);
    setAccuracy(finalAcc);
    setWordDiagnostics(diagnostics);

    if (finalAcc >= 85) {
      audioEngine.playSuccessChime();
      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 25 });
    } else if (finalAcc >= 55) {
      audioEngine.playHaptic('success');
      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 12 });
    } else {
      audioEngine.playGentleError();
    }
  };

  const currentPhrase = phrases[currentIndex];

  if (!currentPhrase) return <div className="module-container">載入跟讀內容中…</div>;

  const targetSyllables = currentPhrase.viet
    .replace(/[.,!?;:…—"']/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0);

  return (
    <div className="module-container shadowing-module">
      <div className="section-header">
        <h2 className="section-title">
          <Mic color="var(--brand-primary)" />
          {learningMode === 'zh' ? 'AI 語音跟讀與聲調精準診斷 (Shadowing 2.0)' : 'AI Shadowing & Tone Diagnostic 2.0'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh' 
            ? '開啟麥克風模仿跟讀！結合逐詞聲調辨識、雙軌錄音原音對照與 0.75x 慢速精聽，打磨地道越語口音！' 
            : 'Turn on your mic, shadow the native audio, and inspect word-by-word tone diagnostics with self-playback!'}
        </p>
      </div>

      {errorMsg && (
        <div className="error-banner">
          <AlertTriangle size={20} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Category Selector */}
      <div className="filter-pill-bar" style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat === 'all' ? (learningMode === 'zh' ? '🌟 全部句型庫' : 'All') : cat}
          </button>
        ))}
      </div>

      <div className="shadowing-card">
        <div className="card-header">
          <span className="category-tag-badge">
            {currentPhrase.category || '實用句型'}
          </span>
          <span className="progress-text">{currentIndex + 1} / {phrases.length}</span>
        </div>
        
        {/* Target Phrase Box */}
        <div className="target-phrase-box">
          <div className="phrase-viet">{currentPhrase.viet}</div>
          <div className="phrase-translation">
            {learningMode === 'zh' ? currentPhrase.zh : currentPhrase.en}
          </div>

          {/* Tone Contour Melody Guide */}
          <div className="shadow-tone-melody-bar">
            <span className="tone-melody-label">
              <Sparkles size={14} color="var(--brand-gold)" /> 聲調音高走勢：
            </span>
            <div className="tone-melody-chips">
              {targetSyllables.map((syl, sIdx) => {
                const tone = getSyllableTone(syl);
                return (
                  <span
                    key={sIdx}
                    className="tone-melody-chip"
                    style={{ borderTop: `3px solid ${tone.color}` }}
                  >
                    <strong>{syl}</strong>
                    <small style={{ color: tone.color }}>{tone.nameZh}</small>
                  </span>
                );
              })}
            </div>
          </div>
          
          {/* Audio Listen Buttons (Normal & Slow) */}
          <div className="shadow-play-actions">
            <button 
              className={`play-target-btn ${activeKey === `shadow_${currentIndex}` ? 'playing' : ''}`}
              onClick={() => playTargetAudio(1.0, false)}
            >
              <Volume2 size={18} />
              <span>{learningMode === 'zh' ? '標準原音 (1.0x)' : 'Normal (1.0x)'}</span>
            </button>
            <button 
              className={`play-target-btn slow-btn ${activeKey === `shadow_slow_${currentIndex}` ? 'playing' : ''}`}
              onClick={() => playTargetAudio(0.72, true)}
            >
              <Headphones size={18} color="var(--brand-gold)" />
              <span>{learningMode === 'zh' ? '慢速精聽 (0.75x)' : 'Slow (0.75x)'}</span>
            </button>
          </div>
        </div>

        {/* Mic Recording Area */}
        <div className="record-section">
          <button 
            className={`mic-btn ${isListening ? 'listening' : ''}`} 
            onClick={toggleListen}
            title={isListening ? '停止錄音並診斷' : '點擊開始跟讀'}
          >
            {isListening ? <MicOff size={36} /> : <Mic size={36} />}
          </button>
          
          <div className="transcript-box">
            {isListening ? (
              <span className="pulsing-text">
                🎙️ {transcript || (learningMode === 'zh' ? '請開始跟讀...正在聆聽中' : 'Listening... speak clearly')}
              </span>
            ) : (
              <span className="final-transcript">
                {transcript ? `「${transcript}」` : (learningMode === 'zh' ? '👉 點擊上方紅色麥克風開始錄音跟讀' : 'Click mic to start recording')}
              </span>
            )}
          </div>

          {/* Self Recording Audio Playback Dual-Track */}
          {userAudioUrl && !isListening && (
            <div className="self-playback-box">
              <button
                className={`self-audio-btn ${isPlayingUserAudio ? 'playing' : ''}`}
                onClick={playUserRecording}
              >
                <Play size={16} />
                <span>{isPlayingUserAudio ? '正在播放您的錄音…' : '🎧 播放我的跟讀錄音 (回聽對照)'}</span>
              </button>
            </div>
          )}
        </div>

        {/* Word-by-Word Diagnostic Results */}
        {accuracy !== null && !isListening && (
          <div className={`result-box ${accuracy >= 80 ? 'excellent' : accuracy >= 50 ? 'good' : 'needs-work'}`}>
            <div className="score-summary-row">
              <div className="score-circle">
                <span className="score-num">{accuracy}%</span>
              </div>
              <div className="score-text-wrap">
                <div className="score-title">
                  {accuracy >= 85 
                    ? (learningMode === 'zh' ? '太厲害了！發音與聲調極致道地！ 🎉' : 'Outstanding pronunciation! 🎉') 
                    : accuracy >= 60 
                      ? (learningMode === 'zh' ? '表現優異！大部分單字精準到位！ 👍' : 'Well done! Solid pronunciation! 👍')
                      : (learningMode === 'zh' ? '抓到感覺了！注意橘紅標記單字的聲調！ 💪' : 'Keep practicing tricky tones! 💪')
                  }
                </div>
                <div className="score-desc">
                  {learningMode === 'zh' ? '下方為 AI 逐詞檢測診斷，綠色代表音準完美，橘色代表聲調偏差：' : 'Word-by-word tone diagnostics:'}
                </div>
              </div>
            </div>

            {/* Diagnostic Badges Row */}
            {wordDiagnostics.length > 0 && (
              <div className="word-diagnostic-grid">
                {wordDiagnostics.map((item, idx) => (
                  <div
                    key={idx}
                    className={`word-diag-chip ${item.status}`}
                    title={item.hint}
                  >
                    <div className="diag-word">{item.word}</div>
                    <div className="diag-status-badge">
                      {item.status === 'correct' && <CheckCircle2 size={13} color="var(--brand-green)" />}
                      {item.status === 'tone_diff' && <AlertCircle size={13} color="var(--brand-gold)" />}
                      {item.status === 'missing' && <XCircle size={13} color="#ef4444" />}
                      <span>
                        {item.status === 'correct' ? '準確' : item.status === 'tone_diff' ? '調偏' : '未出聲'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="navigation-buttons">
          <button onClick={handlePrev} disabled={currentIndex === 0} className="nav-btn">
            {learningMode === 'zh' ? '上一句' : 'Previous'}
          </button>
          <button onClick={handleNext} disabled={currentIndex === phrases.length - 1} className="nav-btn primary">
            {learningMode === 'zh' ? '下一句' : 'Next'} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShadowingModule;
