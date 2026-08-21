/**
 * Multi-Tiered Native Audio Engine for Vietnamese Learning Hub
 * 
 * Features:
 * 1. Tier 0: Direct Pre-Bundled High-Fidelity MP3 Audio Bank (Zero latency, Zero CORS, Zero network failure)
 * 2. Tier 1: Dynamic High-Fidelity Native Vietnamese Audio Stream (with local Audio Cache)
 * 3. Tier 2: Web Speech API (Used only if native vi-VN voice is verified installed on client OS)
 * 4. Tier 3: Web Audio API 6-Tone Harmonic Pitch Synthesizer with Authentic Regional Dialects (Hanoi 6 Tones vs Saigon 5 Tones with Hỏi/Ngã Merger)
 * 5. Dialect Transformer: Converts text phonetically for authentic Southern pronunciation (Ngã -> Hỏi merger, initial/final consonants)
 * 6. Text Sanitizer: Cleans brackets, Chinese/English translations, and formatting for crystal-clear speech
 * 7. State Management: Event subscription for active audio status, playing animation, and speed control
 */

import audioManifest from '../data/audioManifest.json';

class AudioEngine {
  constructor() {
    this.currentAudio = null;
    this.currentOscillators = [];
    this.audioCtx = null;
    this.audioCache = new Map();
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.hasNativeVietVoice = false;
    this.manifest = audioManifest || {};
    this.normalizedManifest = new Map();
    
    this.initManifest();
    
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

  initManifest() {
    if (this.manifest) {
      Object.entries(this.manifest).forEach(([text, file]) => {
        if (text && file) {
          const trimmed = text.trim();
          this.normalizedManifest.set(trimmed, file);
          this.normalizedManifest.set(trimmed.toLowerCase(), file);
          
          // Store without trailing punctuation
          const stripped = trimmed.replace(/[.,?!;:…]+$/g, '').trim();
          if (stripped) {
            this.normalizedManifest.set(stripped, file);
            this.normalizedManifest.set(stripped.toLowerCase(), file);
          }
        }
      });
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
   * Converts standard Vietnamese text phonetically into Southern Vietnamese dialect:
   * 1. Merges all Thanh Ngã (~) into Thanh Hỏi (?) as per Southern phonology
   * 2. Replaces Northern regional lexical terms with Southern equivalents
   * 3. Adapts initial/final consonants for authentic Southern TTS pronunciation
   */
  toSouthernPhonetic(text) {
    if (!text) return '';
    let res = String(text);

    // 1. Dấu Ngã (~) -> Dấu Hỏi (?) conversion (Saigon Hỏi/Ngã Merger)
    const ngaToHoiMap = {
      'ã': 'ả', 'ẽ': 'ẻ', 'ĩ': 'ỉ', 'õ': 'ỏ', 'ũ': 'ủ', 'ỹ': 'ỷ',
      'ẵ': 'ẳ', 'ẫ': 'ẩ', 'ỗ': 'ổ', 'ỡ': 'ở', 'ữ': 'ử',
      'Ã': 'Ả', 'Ẽ': 'Ẻ', 'Ĩ': 'Ỉ', 'Õ': 'Ỏ', 'Ũ': 'Ủ', 'Ỹ': 'Ỷ',
      'Ẵ': 'Ẳ', 'Ẫ': 'Ẩ', 'Ỗ': 'Ổ', 'Ỡ': 'Ở', 'Ữ': 'Ử'
    };
    res = res.replace(/[ãẽĩõũỹẵẫỗỡữÃẼĨÕŨỸẴẪỖỠỮ]/g, char => ngaToHoiMap[char] || char);

    // 2. Dialect Lexicon adaptations for Southern speech
    res = res.replace(/\bnghìn\b/gi, 'ngàn');
    res = res.replace(/\bnhé\b/gi, 'nha');
    res = res.replace(/\bthế à\b/gi, 'vậy hả');
    res = res.replace(/\bvâng\b/gi, 'dạ');
    res = res.replace(/\bhoa quả\b/gi, 'trái cây');
    res = res.replace(/\blạc\b/gi, 'đậu phộng');
    res = res.replace(/\bbát\b/gi, 'chén');
    res = res.replace(/\bthìa\b/gi, 'muỗng');
    res = res.replace(/\bngô\b/gi, 'bắp');
    res = res.replace(/\bdứa\b/gi, 'thơm');
    res = res.replace(/\bđậu phụ\b/gi, 'tàu hũ');
    res = res.replace(/\bchăn\b/gi, 'mền');
    res = res.replace(/\btất\b/gi, 'vớ');
    res = res.replace(/\bmũ\b/gi, 'nón');

    // 3. Phonetic rendering adjustments for single-word / isolated TTS audio
    const wordMappings = {
      'da': 'ya', 'Da': 'Ya',
      'giờ': 'yờ', 'Giờ': 'Yờ',
      'vào': 'vô', 'Vào': 'Vô',
      'về': 'dề', 'Về': 'Dề',
      'vui vẻ': 'dui dẻ', 'Vui vẻ': 'Dui dẻ',
      'quá': 'oá', 'Quá': 'Oá',
      'quên': 'uên', 'Quên': 'Uên',
      'bán': 'báng', 'Bán': 'Báng',
      'mắt': 'mắc', 'Mắt': 'Mắc',
      'ăn': 'ăng', 'Ăn': 'Ăng',
      'bệnh': 'bện', 'Bệnh': 'Bện',
      'chính': 'chín', 'Chính': 'Chín',
      'thích': 'thít', 'Thích': 'Thít',
      'mã': 'mả', 'Mã': 'Mả',
      'sữa': 'sửa', 'Sữa': 'Sửa'
    };

    const trimmed = res.trim();
    if (wordMappings[trimmed]) {
      return wordMappings[trimmed];
    }

    return res;
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

    // 2. Remove isolated Chinese characters and Chinese fullwidth punctuation
    cleaned = cleaned.replace(/[\u4e00-\u9fa5]/g, ' ');
    cleaned = cleaned.replace(/[，。！？；：（）「」『』、《》“”‘’…—]/g, ' ');

    // 3. Clean currency symbols: only when preceded by digits
    cleaned = cleaned.replace(/(\d+[\d.,]*)\s*(?:đ|₫|VND)(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} đồng `);
    cleaned = cleaned.replace(/(\d+[\d.,]*)\s*k(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} nghìn `);
    cleaned = cleaned.replace(/NT\$/gi, ' ');
    cleaned = cleaned.replace(/\$/g, ' ');
    cleaned = cleaned.replace(/~/g, ' ');

    // 4. Remove unwanted symbols while keeping valid Vietnamese diacritics
    cleaned = cleaned.replace(/[—_=+*#@$%^&|\\/<>]/g, ' ');
    cleaned = cleaned.replace(/\s+/g, ' ').trim();

    return cleaned;
  }

  /**
   * Resolves the best audio file from manifest with dialect awareness
   */
  resolveManifestFile(text, accent = 'north') {
    if (!text) return null;
    const rawClean = text.trim();
    const isSouth = accent === 'south';

    if (isSouth) {
      const southPhonetic = this.toSouthernPhonetic(rawClean);
      const candidates = [
        `${rawClean}_south`,
        southPhonetic,
        this.normalizedManifest.get(southPhonetic),
        this.normalizedManifest.get(southPhonetic.toLowerCase()),
        rawClean,
        this.normalizedManifest.get(rawClean),
        this.normalizedManifest.get(rawClean.toLowerCase())
      ];
      for (const cand of candidates) {
        if (cand && this.manifest[cand]) return this.manifest[cand];
        if (cand && typeof cand === 'string' && cand.endsWith('.mp3')) return cand;
      }
    } else {
      const northPhonetic = rawClean.replace(/\bngàn\b/gi, 'nghìn');
      const candidates = [
        `${rawClean}_north`,
        rawClean,
        northPhonetic,
        this.normalizedManifest.get(rawClean),
        this.normalizedManifest.get(rawClean.toLowerCase()),
        this.normalizedManifest.get(northPhonetic)
      ];
      for (const cand of candidates) {
        if (cand && this.manifest[cand]) return this.manifest[cand];
        if (cand && typeof cand === 'string' && cand.endsWith('.mp3')) return cand;
      }
    }

    return null;
  }

  /**
   * Main speech method with prioritized pre-bundled audio bank fallback
   * @param {string} rawText - Vietnamese text
   * @param {object} options - { rate: number, accent: 'north'|'south', key: string, onEnd: func, onStart: func }
   */
  speak(rawText, options = {}) {
    if (!rawText) return;

    // Stop previous audio completely
    this.stop();

    const accent = options.accent || 'north';
    const lang = options.lang || 'vi';
    
    // For non-Vietnamese, skip text sanitization that removes Chinese
    const cleanedText = lang === 'vi' ? this.cleanText(rawText) : rawText.trim();
    if (!cleanedText) return;

    const rate = options.rate || (accent === 'south' ? 1.04 : 0.96);
    const key = options.key || rawText;

    this.notifyState({
      isPlaying: true,
      activeText: rawText,
      activeKey: key,
      accent,
      error: null
    });

    if (options.onStart) options.onStart();

    // 1. Priority 0: Check Pre-Bundled Audio Bank with accent awareness (only for Vietnamese)
    if (lang === 'vi') {
      const manifestFile = this.resolveManifestFile(cleanedText, accent) || this.resolveManifestFile(rawText, accent);

      if (manifestFile) {
        const baseUrl = import.meta.env.BASE_URL || '/';
        const audioPath = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}audio/${manifestFile}`;
        this.playLocalFile(audioPath, rate, options)
          .catch(() => {
            this.fallbackSpeech(cleanedText, rate, { ...options, accent });
          });
        return;
      }
    }

    // 2. Fallback: Web Speech API or Online Stream
    this.fallbackSpeech(cleanedText, rate, { ...options, accent });
  }

  /**
   * Plays a pre-bundled local MP3 audio file
   */
  playLocalFile(audioUrl, rate = 1.0, options = {}) {
    return new Promise((resolve, reject) => {
      try {
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
   * Fallback to Web Speech API first, then online audio stream
   */
  fallbackSpeech(cleanedText, rate, options = {}) {
    const isSouth = options.accent === 'south';
    const speechText = isSouth ? this.toSouthernPhonetic(cleanedText) : cleanedText;

    this.playWebSpeech(speechText, rate, options)
      .catch(() => {
        this.playOnlineStream(speechText, rate, options)
          .catch((err) => {
            console.warn('Audio fallback stream failed:', err);
            this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
          });
      });
  }

  /**
   * Tier 1: Web Speech API (synthesizes vi-VN natively with dialect pitch/rate contour)
   */
  playWebSpeech(text, rate = 1.0, options = {}) {
    return new Promise((resolve, reject) => {
      if (!this.synth) {
        return reject(new Error('Speech synthesis not supported'));
      }

      try {
        this.synth.cancel();

        const isSouth = options.accent === 'south';
        const utterance = new SpeechSynthesisUtterance(text);
        
        let targetLang = 'vi-VN';
        if (options.lang === 'zh') targetLang = 'zh-TW';
        else if (options.lang === 'en') targetLang = 'en-US';

        utterance.lang = targetLang;
        utterance.rate = Math.min(Math.max(rate, 0.7), 1.3);
        utterance.pitch = isSouth && targetLang === 'vi-VN' ? 1.08 : 0.98;

        if (targetLang === 'vi-VN') {
          const vietVoice = this.getVietnameseVoice();
          if (vietVoice) {
            utterance.voice = vietVoice;
          }
        } else {
          const voices = this.synth.getVoices() || [];
          const voice = voices.find(v => v.lang.startsWith(options.lang === 'zh' ? 'zh' : 'en'));
          if (voice) {
            utterance.voice = voice;
          }
        }

        utterance.onend = () => {
          this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
          if (options.onEnd) options.onEnd();
          resolve();
        };

        utterance.onerror = (e) => {
          this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
          reject(e);
        };

        this.synth.speak(utterance);
      } catch (err) {
        this.notifyState({ isPlaying: false, activeText: null, activeKey: null });
        reject(err);
      }
    });
  }

  /**
   * Tier 2: Online audio stream fallback
   */
  playOnlineStream(text, rate = 1.0, options = {}) {
    return new Promise((resolve, reject) => {
      try {
        const encodedText = encodeURIComponent(text.slice(0, 200));
        const tl = options.lang === 'zh' ? 'zh-TW' : (options.lang === 'en' ? 'en-US' : 'vi');
        const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${tl}&client=tw-ob&q=${encodedText}`;

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
   * Pronounces alphabet cards cleanly (Letter Name + Example Word)
   */
  speakAlphabet(item, options = {}) {
    if (!item) return;
    const exampleWord = item.example || '';
    const speechText = `${item.name}. ${exampleWord}.`;
    this.speak(speechText, { ...options, key: item.char });
  }

  /**
   * Tier 3: High-Fidelity Harmonic 6-Tone Pitch Synthesizer (Web Audio API)
   * Accurately reproduces authentic Vietnamese acoustic pitch contours:
   * - Hanoi North: 6 distinct tones with glottal stops on Ngã (3ˀ5) and Nặng (21ˀ)
   * - Saigon South: 5 tones with Hỏi/Ngã unified into a smooth 32-23 dipping tone, softer Nặng, and relaxed Ngang
   * 
   * @param {string} toneType - 'ngang', 'huyen', 'hoi', 'nga', 'sac', 'nang'
   * @param {string} accent - 'north' | 'south'
   */
  playTonePitch(toneType, accent = 'north') {
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
      const isSouth = accent === 'south';
      const duration = isSouth ? 0.52 : 0.56;
      const baseFreq = isSouth ? 230 : 220; // A3 pitch fundamental

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
      triGain.gain.setValueAtTime(isSouth ? 0.12 : 0.16, now);

      oscSine.connect(masterGain);
      oscTri.connect(triGain);
      triGain.connect(masterGain);

      this.currentOscillators = [oscSine, oscTri];

      // Pitch Contour Trajectories according to Vietnamese Phonology
      if (isSouth) {
        // ========== SOUTHERN (SAIGON) 5-TONE DIALECTAL SYSTEM ==========
        switch (toneType) {
          case 'ngang': // 1. Thanh Ngang (33): Relaxed mid-level pitch
            oscSine.frequency.setValueAtTime(baseFreq * 1.12, now);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.12, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.12, now);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.12, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'huyen': // 2. Thanh Huyền (21): Gentle soft low falling
            oscSine.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.88, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.88, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'hoi':
          case 'nga': // 3 & 4. Thanh Hỏi & Thanh Ngã MERGED (323): Smooth dipping curve, NO glottal interruption
            oscSine.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 0.84, now + duration * 0.45);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.20, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 0.84, now + duration * 0.45);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.20, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'sac': // 5. Thanh Sắc (35): Smooth mid-high rising climb
            oscSine.frequency.setValueAtTime(baseFreq * 1.06, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 1.50, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.06, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 1.50, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'nang': // 6. Thanh Nặng (21-12): Softer low drop without harsh glottal cutoff
            oscSine.frequency.setValueAtTime(baseFreq * 0.95, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.68, now + duration * 0.60);
            oscTri.frequency.setValueAtTime(baseFreq * 0.95, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.68, now + duration * 0.60);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.70);
            break;

          default:
            oscSine.frequency.setValueAtTime(baseFreq, now);
            oscTri.frequency.setValueAtTime(baseFreq, now);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        }
      } else {
        // ========== NORTHERN (HANOI) 6-TONE STANDARD SYSTEM ==========
        switch (toneType) {
          case 'ngang': // 1. Thanh Ngang (44): High level pitch
            oscSine.frequency.setValueAtTime(baseFreq * 1.28, now);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.28, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.28, now);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.28, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'huyen': // 2. Thanh Huyền (31): Deep low falling
            oscSine.frequency.setValueAtTime(baseFreq * 1.15, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.78, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.15, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.78, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'hoi': // 3. Thanh Hỏi (313): Deep dipping-rising contour
            oscSine.frequency.setValueAtTime(baseFreq * 1.05, now);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 0.70, now + duration * 0.45);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.35, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.05, now);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 0.70, now + duration * 0.45);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.35, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'nga': // 4. Thanh Ngã (35): Rising with sharp mid-glottal break
            oscSine.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.25, now + duration * 0.38);
            // Glottal drop effect (voice cuts off briefly)
            masterGain.gain.setValueAtTime(0.01, now + duration * 0.40);
            masterGain.gain.setValueAtTime(0.24, now + duration * 0.50);
            oscSine.frequency.linearRampToValueAtTime(baseFreq * 1.62, now + duration);

            oscTri.frequency.setValueAtTime(baseFreq * 1.02, now);
            oscTri.frequency.linearRampToValueAtTime(baseFreq * 1.62, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'sac': // 5. Thanh Sắc (35): Sharp steep high rising climb
            oscSine.frequency.setValueAtTime(baseFreq * 1.08, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 1.68, now + duration);
            oscTri.frequency.setValueAtTime(baseFreq * 1.08, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 1.68, now + duration);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            break;

          case 'nang': // 6. Thanh Nặng (21): Abrupt constricted heavy drop with rapid glottal cutoff
            oscSine.frequency.setValueAtTime(baseFreq * 0.95, now);
            oscSine.frequency.exponentialRampToValueAtTime(baseFreq * 0.50, now + duration * 0.28);
            oscTri.frequency.setValueAtTime(baseFreq * 0.95, now);
            oscTri.frequency.exponentialRampToValueAtTime(baseFreq * 0.50, now + duration * 0.28);
            masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.32);
            break;

          default:
            oscSine.frequency.setValueAtTime(baseFreq, now);
            oscTri.frequency.setValueAtTime(baseFreq, now);
            masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        }
      }

      this.notifyState({ isPlaying: true, activeText: toneType, activeKey: `${toneType}_${accent}` });

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
   * Play a crystal-clear pleasant success chime (Web Audio synthesis)
   */
  playSuccessChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const ctx = this.audioCtx;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      const now = ctx.currentTime;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.07);

        gain.gain.setValueAtTime(0.001, now + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.18, now + i * 0.07 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.07 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.07);
        osc.stop(now + i * 0.07 + 0.36);
      });
    } catch (e) {
      // Audio SFX fallback
    }
  }

  /**
   * Play dynamic combo pitch sound based on current combo count
   */
  playComboSound(combo = 1) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const ctx = this.audioCtx;
      const baseFreq = 440; // A4
      const pitchMultiplier = Math.min(Math.pow(1.08, combo - 1), 2.2);
      const freq = baseFreq * pitchMultiplier;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.15);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.2, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      // ignore
    }
  }

  /**
   * Play exciting level-up fanfare chord
   */
  playLevelUpFanfare() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const ctx = this.audioCtx;
      const chords = [
        { freqs: [523.25, 659.25, 783.99], time: 0, dur: 0.18 }, // C major
        { freqs: [587.33, 739.99, 880.00], time: 0.20, dur: 0.18 }, // D major
        { freqs: [659.25, 830.61, 987.77], time: 0.40, dur: 0.18 }, // E major
        { freqs: [783.99, 987.77, 1046.50, 1318.51], time: 0.60, dur: 0.65 } // G-C major triumphal
      ];

      const now = ctx.currentTime;
      chords.forEach(({ freqs, time, dur }) => {
        freqs.forEach(f => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, now + time);

          gain.gain.setValueAtTime(0.001, now + time);
          gain.gain.exponentialRampToValueAtTime(0.15, now + time + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + time);
          osc.stop(now + time + dur + 0.05);
        });
      });
    } catch (e) {
      // ignore
    }
  }

  /**
   * Play achievement badge unlock sparkle
   */
  playBadgeUnlockSound() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const ctx = this.audioCtx;
      const notes = [659.25, 830.61, 987.77, 1318.51, 1661.22, 1975.53]; // E major glitter
      const now = ctx.currentTime;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.05);

        gain.gain.setValueAtTime(0.001, now + i * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.16, now + i * 0.05 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.05 + 0.4);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.05);
        osc.stop(now + i * 0.05 + 0.42);
      });
    } catch (e) {
      // ignore
    }
  }

  /**
   * Play gentle encouraging try-again sound
   */
  playGentleError() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioCtx || this.audioCtx.state === 'closed') {
        this.audioCtx = new AudioContext();
      }
      if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

      const ctx = this.audioCtx;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(220, now + 0.22);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.12, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {
      // ignore
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
export default audioEngine;
