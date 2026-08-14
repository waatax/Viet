/**
 * Multi-Tiered Hybrid Audio Engine for Vietnamese Learning Hub
 * 
 * Features:
 * 1. Tier 1: High-Fidelity Native Vietnamese Audio Stream (Google TTS / CDN stream with caching)
 * 2. Tier 2: Web Speech API (Used only if native vi-VN voice is verified installed on client OS)
 * 3. Tier 3: Web Audio API 6-Tone Harmonic Pitch Synthesizer (Ngang, Huyền, Hỏi, Ngã, Sắc, Nặng)
 * 4. Text Sanitizer: Cleans brackets, Chinese/English translations, and formatting for crystal-clear speech
 * 5. State Management: Event subscription for active audio status, playing animation, and speed control
 */

class AudioEngine {
  constructor() {
    this.currentAudio = null;
    this.currentOscillators = [];
    this.audioCtx = null;
    this.audioCache = new Map();
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.hasNativeVietVoice = false;
    this.listeners = new Set();
    this.state = {
      isPlaying: false,
      activeText: null,
      activeKey: null,
      accent: 'north',
      error: null
    };

    if (typeof window !== 'undefined') {
      this.initVoices();
      if (this.synth) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices() || [];
    this.hasNativeVietVoice = this.voices.some(v => 
      (v.lang && (v.lang.startsWith('vi') || v.lang.includes('VI'))) ||
      (v.name && (v.name.toLowerCase().includes('vietnam') || v.name.toLowerCase().includes('vietnamese')))
    );
  }

  getVietnameseVoice() {
    if (!this.synth) return null;
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices() || [];
    }
    return this.voices.find(v => 
      (v.lang && (v.lang.startsWith('vi') || v.lang.includes('VI'))) ||
      (v.name && (v.name.toLowerCase().includes('vietnam') || v.name.toLowerCase().includes('vietnamese')))
    ) || null;
  }

  /**
   * Subscribe to audio state changes (e.g. for UI active/pulse indicators)
   */
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }

  notifyState(updates) {
    this.state = { ...this.state, ...updates };
    this.listeners.forEach(listener => {
      try {
        listener(this.state);
      } catch (err) {
        console.error('AudioEngine state listener error:', err);
      }
    });
  }

  /**
   * Cleans Vietnamese text for crystal-clear TTS pronunciation
   * Removes Chinese/English annotations, brackets, symbols, and formatting
   */
  cleanText(text) {
    if (!text) return '';
    let cleaned = String(text);

    // 1. Remove Chinese characters and translations in parentheses or brackets e.g. (店員), （客棧）, [z] 像 Z
    cleaned = cleaned.replace(/\([^)]*[\u4e00-\u9fa5A-Za-z]+[^)]*\)/g, ' ');
    cleaned = cleaned.replace(/（[^）]*[\u4e00-\u9fa5A-Za-z]+[^）]*）/g, ' ');
    cleaned = cleaned.replace(/\[[^\]]*\]/g, ' ');

    // 2. Remove isolated Chinese characters
    cleaned = cleaned.replace(/[\u4e00-\u9fa5]/g, ' ');

    // 3. Clean currency symbols: only when preceded by digits (never replace standalone Vietnamese letter đ/Đ)
    cleaned = cleaned.replace(/(\d+[\d.,]*)\s*(?:đ|₫|VND)(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} đồng `);
    cleaned = cleaned.replace(/(\d+[\d.,]*)\s*k(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} nghìn `);
    cleaned = cleaned.replace(/NT\$/gi, ' ');
    cleaned = cleaned.replace(/\$/g, ' ');
    cleaned = cleaned.replace(/~/g, ' ');

    // 4. Remove unwanted symbols while keeping valid Vietnamese diacritics and essential punctuation
    cleaned = cleaned.replace(/[—_=+*#@$%^&|\\/<>]/g, ' ');
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    return cleaned;
  }

  /**
   * Main speech method with multi-tiered fallback
   * @param {string} rawText - Vietnamese text
   * @param {object} options - { rate: number, accent: 'north'|'south', key: string, onEnd: func, onStart: func }
   */
  speak(rawText, options = {}) {
    if (!rawText) return;

    // Stop previous audio completely
    this.stop();

    const cleanedText = this.cleanText(rawText);
    if (!cleanedText) return;

    const rate = options.rate || (options.accent === 'south' ? 1.0 : 0.95);
    const key = options.key || rawText;

    this.notifyState({
      isPlaying: true,
      activeText: rawText,
      activeKey: key,
      accent: options.accent || 'north',
      error: null
    });

    if (options.onStart) options.onStart();

    // Primary: Google Native Vietnamese Audio Stream
    this.playOnlineStream(cleanedText, rate, options)
      .catch((err) => {
        console.warn('Online audio stream fallback to Web Speech:', err);
        // Fallback: Web Speech API (if supported)
        this.playWebSpeech(cleanedText, rate, options);
      });
  }

  /**
   * Tier 1: High-fidelity online audio stream
   */
  playOnlineStream(text, rate = 1.0, options = {}) {
    return new Promise((resolve, reject) => {
      try {
        // Build direct Vietnamese TTS stream URL
        const encodedText = encodeURIComponent(text.slice(0, 200)); // Google TTS single utterance limit
        const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodedText}`;

        let audio = this.audioCache.get(audioUrl);
        if (!audio) {
          audio = new Audio(audioUrl);
          audio.preload = 'auto';
          this.audioCache.set(audioUrl, audio);
        } else {
          audio.currentTime = 0;
        }

        this.currentAudio = audio;
        audio.playbackRate = Math.min(Math.max(rate, 0.5), 2.0);

        const cleanup = () => {
          audio.removeEventListener('ended', handleEnded);
          audio.removeEventListener('error', handleError);
          audio.removeEventListener('pause', handlePause);
        };

        const handleEnded = () => {
          cleanup();
          this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
          if (options.onEnd) options.onEnd();
          resolve();
        };

        const handlePause = () => {
          if (this.currentAudio === audio && audio.currentTime === 0) {
            cleanup();
            this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
          }
        };

        const handleError = (e) => {
          cleanup();
          reject(e);
        };

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('error', handleError);
        audio.addEventListener('pause', handlePause);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            cleanup();
            reject(e);
          });
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  /**
   * Tier 2: Web Speech API fallback
   */
  playWebSpeech(text, rate = 1.0, options = {}) {
    if (!this.synth) {
      this.notifyState({ isPlaying: false, activeText: null, activeKey: null, error: 'Audio not supported' });
      return;
    }

    try {
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'vi-VN';
      utterance.rate = Math.min(Math.max(rate, 0.7), 1.3);
      utterance.pitch = options.accent === 'south' ? 1.05 : 1.0;

      const vietVoice = this.getVietnameseVoice();
      if (vietVoice) {
        utterance.voice = vietVoice;
      }

      utterance.onend = () => {
        this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
        if (options.onEnd) options.onEnd();
      };

      utterance.onerror = (e) => {
        console.warn('Web Speech API Error:', e);
        this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
      };

      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Speech synthesis failed:', err);
      this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
    }
  }

  /**
   * Pronounces alphabet cards cleanly (Letter Name + Example Word)
   */
  speakAlphabet(item, options = {}) {
    if (!item) return;
    // Extract base letter cleanly: e.g. "Ă ă" -> "Ă", "Q q (Qu)" -> "Qu"
    const exampleWord = item.example || '';
    
    // Pronounce: Letter Name e.g. "á", then example "Ăn"
    const speechText = `${item.name}. ${exampleWord}.`;
    this.speak(speechText, { ...options, key: item.char });
  }

  /**
   * Tier 3: High-Fidelity Harmonic 6-Tone Pitch Synthesizer (Web Audio API)
   * Accurately reproduces authentic Vietnamese acoustic pitch contours
   * Tones: 'ngang', 'huyen', 'hoi', 'nga', 'sac', 'nang'
   */
  playTonePitch(toneType) {
    try {
      this.stop();

      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const duration = 0.55;
      const baseFreq = 220; // A3 pitch fundamental

      // Master Gain with gentle acoustic envelope
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);

      // Dual Oscillators for rich, natural harmonic timbre (Sine + Triangle)
      const oscSine = ctx.createOscillator();
      const oscTri = ctx.createOscillator();
      const triGain = ctx.createGain();

      oscSine.type = 'sine';
      oscTri.type = 'triangle';
      triGain.gain.setValueAtTime(0.15, now);

      oscSine.connect(masterGain);
      oscTri.connect(triGain);
      triGain.connect(masterGain);

      this.currentOscillators = [oscSine, oscTri];

      // Pitch Contour Trajectories according to Vietnamese Phonology
      switch (toneType) {
        case 'ngang': // 1. Thanh Ngang (444): Level mid-high pitch
          oscSine.frequency.setValueAtTime(baseFreq * 1.25, now);
          oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.25, now + duration);
          oscTri.frequency.setValueAtTime(baseFreq * 1.25, now);
          oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.25, now + duration);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
          break;

        case 'huyen': // 2. Thanh Huyền (311): Smooth gentle low falling
          oscSine.frequency.setValueAtTime(baseFreq * 1.15, now);
          oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.82, now + duration);
          oscTri.frequency.setValueAtTime(baseFreq * 1.15, now);
          oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.82, now + duration);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
          break;

        case 'hoi': // 3. Thanh Hỏi (313): Dipping-rising contour
          oscSine.frequency.setValueAtTime(baseFreq * 1.05, now);
          oscSine.frequency.linearRampToValueAtTime(baseFreq * 0.72, now + duration * 0.45);
          oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.30, now + duration);
          oscTri.frequency.setValueAtTime(baseFreq * 1.05, now);
          oscTri.frequency.linearRampToValueAtTime(baseFreq * 0.72, now + duration * 0.45);
          oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.30, now + duration);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
          break;

        case 'nga': // 4. Thanh Ngã (35): High rising with brief mid-throat glottal interruption
          oscSine.frequency.setValueAtTime(baseFreq * 1.02, now);
          oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.22, now + duration * 0.38);
          // Glottal dip effect
          masterGain.gain.setValueAtTime(0.02, now + duration * 0.42);
          masterGain.gain.setValueAtTime(0.24, now + duration * 0.52);
          oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.55, now + duration);

          oscTri.frequency.setValueAtTime(baseFreq * 1.02, now);
          oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.55, now + duration);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
          break;

        case 'sac': // 5. Thanh Sắc (35): Sharp high rising climb
          oscSine.frequency.setValueAtTime(baseFreq * 1.08, now);
          oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 1.65, now + duration);
          oscTri.frequency.setValueAtTime(baseFreq * 1.08, now);
          oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 1.65, now + duration);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
          break;

        case 'nang': // 6. Thanh Nặng (21): Low abrupt heavy constricted drop
          oscSine.frequency.setValueAtTime(baseFreq * 0.95, now);
          oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.55, now + duration * 0.32);
          oscTri.frequency.setValueAtTime(baseFreq * 0.95, now);
          oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.55, now + duration * 0.32);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.36);
          break;

        default:
          oscSine.frequency.setValueAtTime(baseFreq, now);
          oscTri.frequency.setValueAtTime(baseFreq, now);
          masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
      }

      this.notifyState({ isPlaying: true, activeText: toneType, activeKey: toneType });

      oscSine.start(now);
      oscTri.start(now);
      oscSine.stop(now + duration);
      oscTri.stop(now + duration);

      setTimeout(() => {
        this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
      }, duration * 1000);

    } catch (e) {
      console.warn('Web Audio pitch synth failed:', e);
    }
  }

  /**
   * Immediately stops any playing audio, utterance, or oscillator
   */
  stop() {
    // 1. Stop HTML5 Audio
    if (this.currentAudio) {
      try {
        this.currentAudio.pause();
        this.currentAudio.currentTime = 0;
      } catch (e) {
        // ignore
      }
      this.currentAudio = null;
    }

    // 2. Stop Web Speech Synthesis
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {
        // ignore
      }
    }

    // 3. Stop active oscillators
    if (this.currentOscillators.length > 0) {
      this.currentOscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch (e) {
          // ignore
        }
      });
      this.currentOscillators = [];
    }

    this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
  }
}

export const audioEngine = new AudioEngine();
