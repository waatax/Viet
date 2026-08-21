import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Play, RefreshCw, Trophy, AlertTriangle, ArrowRight } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './ShadowingModule.css';

const ShadowingModule = ({ selectedAccent = 'north' }) => {
  const { learningMode } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [phrases, setPhrases] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [accuracy, setAccuracy] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  
  const recognitionRef = useRef(null);
  const [activeKey, setActiveKey] = useState(null);

  // Group categories
  const categories = ['all', ...new Set(practicalPhrases.map(p => p.category))];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setPhrases(practicalPhrases);
    } else {
      setPhrases(practicalPhrases.filter(p => p.category === selectedCategory));
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
      
      // Set language based on selected accent (fallback to vi-VN)
      recognitionRef.current.lang = 'vi-VN';

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
        
        if (event.results[0].isFinal) {
          calculateAccuracy(currentTranscript);
          setIsListening(false);
        }
      };

      recognitionRef.current.onerror = (event) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setErrorMsg(learningMode === 'zh' ? '麥克風未授權，請允許瀏覽器使用麥克風。' : 'Microphone access denied. Please allow microphone permissions.');
        } else {
          setErrorMsg(`Error: ${event.error}`);
        }
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      setErrorMsg(learningMode === 'zh' ? '您的瀏覽器不支援語音辨識功能，請使用最新版 Chrome 或 Safari。' : 'Your browser does not support Speech Recognition. Please use Chrome or Safari.');
    }

    return () => {
      unsubscribe();
      if (recognitionRef.current && isListening) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const resetState = () => {
    setTranscript('');
    setAccuracy(null);
    setErrorMsg('');
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        resetState();
        try {
          recognitionRef.current.start();
          setIsListening(true);
        } catch (e) {
          console.error(e);
        }
      }
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

  const playTargetAudio = () => {
    if (!phrases[currentIndex]) return;
    audioEngine.speak(phrases[currentIndex].viet, { 
      accent: selectedAccent,
      key: `shadow_${currentIndex}`
    });
  };

  // Basic accuracy calculation
  const calculateAccuracy = (spokenText) => {
    const targetText = phrases[currentIndex].viet.toLowerCase().replace(/[.,!?;:]/g, '');
    const userText = spokenText.toLowerCase().replace(/[.,!?;:]/g, '');
    
    const targetWords = targetText.split(/\s+/).filter(w => w.length > 0);
    const userWords = userText.split(/\s+/).filter(w => w.length > 0);
    
    let matches = 0;
    // Simple matching (can be improved with Levenshtein distance)
    targetWords.forEach(word => {
      if (userWords.includes(word)) {
        matches++;
      }
    });

    const calculatedAcc = targetWords.length > 0 ? Math.round((matches / targetWords.length) * 100) : 0;
    // Cap at 100
    setAccuracy(Math.min(calculatedAcc, 100));
  };

  const currentPhrase = phrases[currentIndex];

  if (!currentPhrase) return <div className="module-container">Loading...</div>;

  return (
    <div className="module-container shadowing-module">
      <div className="section-header">
        <h2 className="section-title">
          <Mic color="var(--brand-primary)" />
          {learningMode === 'zh' ? 'AI 發音跟讀特訓 (Shadowing)' : 'AI Shadowing & Pronunciation'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh' 
            ? '開啟麥克風跟著唸，即時評分你的越南語發音準確度！' 
            : 'Turn on your mic and repeat the phrases. Get real-time pronunciation accuracy scores!'}
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
            {cat === 'all' ? (learningMode === 'zh' ? '全部' : 'All') : cat}
          </button>
        ))}
      </div>

      <div className="shadowing-card">
        <div className="card-header">
          <span className="progress-text">{currentIndex + 1} / {phrases.length}</span>
        </div>
        
        <div className="target-phrase-box">
          <div className="phrase-viet">{currentPhrase.viet}</div>
          <div className="phrase-translation">
            {learningMode === 'zh' ? currentPhrase.zh : currentPhrase.en}
          </div>
          
          <button 
            className={`play-target-btn ${activeKey === `shadow_${currentIndex}` ? 'playing' : ''}`}
            onClick={playTargetAudio}
          >
            <Volume2 size={24} />
            {learningMode === 'zh' ? '聽原音示範' : 'Listen'}
          </button>
        </div>

        <div className="record-section">
          <button 
            className={`mic-btn ${isListening ? 'listening' : ''}`} 
            onClick={toggleListen}
            title={isListening ? 'Stop Recording' : 'Start Recording'}
          >
            {isListening ? <MicOff size={36} /> : <Mic size={36} />}
          </button>
          
          <div className="transcript-box">
            {isListening ? (
              <span className="pulsing-text">
                {transcript || (learningMode === 'zh' ? '請開始說話...' : 'Listening...')}
              </span>
            ) : (
              <span className="final-transcript">
                {transcript || (learningMode === 'zh' ? '點擊麥克風開始錄音' : 'Click mic to start recording')}
              </span>
            )}
          </div>
        </div>

        {accuracy !== null && !isListening && (
          <div className={`result-box ${accuracy >= 80 ? 'excellent' : accuracy >= 50 ? 'good' : 'needs-work'}`}>
            <div className="score-circle">
              <span className="score-num">{accuracy}%</span>
            </div>
            <div className="score-text">
              {accuracy >= 80 
                ? (learningMode === 'zh' ? '太棒了！發音非常標準！ 🎉' : 'Excellent! Perfect pronunciation! 🎉') 
                : accuracy >= 50 
                  ? (learningMode === 'zh' ? '不錯喔！繼續保持！ 👍' : 'Good job! Keep it up! 👍')
                  : (learningMode === 'zh' ? '還差一點，再試一次吧！ 💪' : 'Almost there, try again! 💪')
              }
            </div>
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
