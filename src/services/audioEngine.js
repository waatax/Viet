/**
 * Audio Engine for Vietnamese Learning Hub
 * Combines Web Speech API (vi-VN TTS) and Web Audio API synth for authentic tone pitch preview
 */

class AudioEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.voices = [];
    this.audioCtx = null;
    this.isInitialized = false;

    if (typeof window !== 'undefined') {
      this.initVoices();
      if (this.synth) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  initVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  getVietnameseVoice() {
    if (!this.synth) return null;
    if (this.voices.length === 0) {
      this.voices = this.synth.getVoices();
    }
    // Search for explicit vi-VN or vi voice
    const viVoice = this.voices.find(v => v.lang.includes('vi') || v.lang.includes('VI'));
    return viVoice || null;
  }

  /**
   * Play text using Web Speech API TTS
   * @param {string} text - Vietnamese text to speak
   * @param {object} options - { rate, pitch, accent: 'north'|'south' }
   */
  speak(text, options = {}) {
    if (!this.synth) {
      console.warn('Speech Synthesis not supported');
      return;
    }

    // Cancel any ongoing speech
    this.synth.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    
    const voice = this.getVietnameseVoice();
    if (voice) {
      utterance.voice = voice;
    }

    // Rate and pitch adjustments based on Southern vs Northern accent preference
    const baseRate = options.rate || 0.9;
    const basePitch = options.pitch || 1.0;

    if (options.accent === 'south') {
      utterance.rate = baseRate * 1.05;
      utterance.pitch = basePitch * 1.05;
    } else if (options.accent === 'north') {
      utterance.rate = baseRate * 0.95;
      utterance.pitch = basePitch * 0.98;
    } else {
      utterance.rate = baseRate;
      utterance.pitch = basePitch;
    }

    this.synth.speak(utterance);
  }

  /**
   * Synthesizes pitch tone contours using Web Audio API oscillator
   * Tones: 'ngang', 'huyen', 'hoi', 'nga', 'sac', 'nang'
   */
  playTonePitch(toneType) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      const duration = 0.5;
      const baseFreq = 220; // A3 pitch

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

      switch (toneType) {
        case 'ngang': // Level high tone (444)
          osc.frequency.setValueAtTime(baseFreq * 1.2, now);
          osc.frequency.linearRampToValueAtTime(baseFreq * 1.2, now + duration);
          break;

        case 'huyen': // Low falling tone (311)
          osc.frequency.setValueAtTime(baseFreq * 1.1, now);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, now + duration);
          break;

        case 'hoi': // Dipping-rising tone (313)
          osc.frequency.setValueAtTime(baseFreq * 1.0, now);
          osc.frequency.linearRampToValueAtTime(baseFreq * 0.7, now + duration * 0.4);
          osc.frequency.linearRampToValueAtTime(baseFreq * 1.25, now + duration);
          break;

        case 'nga': // High rising glottalized tone (35)
          osc.frequency.setValueAtTime(baseFreq * 1.0, now);
          osc.frequency.linearRampToValueAtTime(baseFreq * 1.4, now + duration * 0.5);
          // slight break/vibration effect
          gain.gain.setValueAtTime(0.02, now + duration * 0.5);
          gain.gain.setValueAtTime(0.2, now + duration * 0.6);
          osc.frequency.linearRampToValueAtTime(baseFreq * 1.5, now + duration);
          break;

        case 'sac': // High rising tone (35)
          osc.frequency.setValueAtTime(baseFreq * 1.05, now);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.6, now + duration);
          break;

        case 'nang': // Low heavy drop (21)
          osc.frequency.setValueAtTime(baseFreq * 0.95, now);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, now + duration * 0.3);
          gain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.35);
          break;

        default:
          osc.frequency.setValueAtTime(baseFreq, now);
      }

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      console.warn('AudioContext failed:', e);
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}

export const audioEngine = new AudioEngine();
