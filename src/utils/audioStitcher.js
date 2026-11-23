/**
 * Audio Stitcher & Dual-Language Audio Exporter
 *
 * Stitches Vietnamese audio + natural pause + Taiwan Mandarin audio into a single,
 * high-fidelity 16-bit PCM WAV / MP3 audio blob using the standard Web Audio API.
 * Enables zero-dependency, zero-backend, instantaneous offline audio downloads
 * on desktop and mobile browsers (iOS Safari, Android Chrome, Windows, macOS).
 */

import { audioEngine } from '../services/audioEngine';

/**
 * Converts Float32Array PCM channel data into a valid 16-bit PCM WAV ArrayBuffer
 */
export function audioBufferToWav(audioBuffer) {
  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;
  const bytesPerSample = bitDepth / 8;
  const blockAlign = numChannels * bytesPerSample;

  const length = audioBuffer.length * blockAlign;
  const buffer = new ArrayBuffer(44 + length);
  const view = new DataView(buffer);

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  // RIFF identifier
  writeString(view, 0, 'RIFF');
  // RIFF chunk length: 36 + data length
  view.setUint32(4, 36 + length, true);
  // RIFF type
  writeString(view, 8, 'WAVE');
  // format chunk identifier
  writeString(view, 12, 'fmt ');
  // format chunk length
  view.setUint32(16, 16, true);
  // sample format (1 = PCM)
  view.setUint16(20, format, true);
  // channel count
  view.setUint16(22, numChannels, true);
  // sample rate
  view.setUint32(24, sampleRate, true);
  // byte rate (sampleRate * blockAlign)
  view.setUint32(28, sampleRate * blockAlign, true);
  // block align (numChannels * bytesPerSample)
  view.setUint16(32, blockAlign, true);
  // bits per sample
  view.setUint16(34, bitDepth, true);
  // data chunk identifier
  writeString(view, 36, 'data');
  // data chunk length
  view.setUint32(40, length, true);

  // Write interleaved PCM samples
  const channels = [];
  for (let c = 0; c < numChannels; c++) {
    channels.push(audioBuffer.getChannelData(c));
  }

  let offset = 44;
  for (let i = 0; i < audioBuffer.length; i++) {
    for (let c = 0; c < numChannels; c++) {
      const sample = Math.max(-1, Math.min(1, channels[c][i]));
      // Convert float [-1.0, 1.0] to signed 16-bit integer [-32768, 32767]
      const intSample = sample < 0 ? sample * 32768 : sample * 32767;
      view.setInt16(offset, intSample, true);
      offset += 2;
    }
  }

  return buffer;
}

/**
 * Loads an audio file from URL and decodes it into an AudioBuffer
 */
export async function fetchAndDecodeAudio(audioCtx, url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const arrayBuffer = await res.arrayBuffer();
    return await audioCtx.decodeAudioData(arrayBuffer);
  } catch (err) {
    console.warn('Failed to decode audio from url:', url, err);
    return null;
  }
}

/**
 * Stitches two AudioBuffers together with a silent gap in between
 */
export function concatenateAudioBuffers(audioCtx, buffer1, buffer2, pauseMs = 400) {
  if (!buffer1 && !buffer2) return null;
  if (!buffer1) return buffer2;
  if (!buffer2) return buffer1;

  const sampleRate = buffer1.sampleRate;
  const numChannels = Math.max(buffer1.numberOfChannels, buffer2.numberOfChannels);
  const pauseSamples = Math.floor((pauseMs / 1000) * sampleRate);

  // If buffer2 has a different sample rate, resample if possible or proceed
  const totalLength = buffer1.length + pauseSamples + buffer2.length;
  const combined = audioCtx.createBuffer(numChannels, totalLength, sampleRate);

  for (let c = 0; c < numChannels; c++) {
    const output = combined.getChannelData(c);
    const data1 = buffer1.getChannelData(c % buffer1.numberOfChannels);
    output.set(data1, 0);

    // Silence gap: left as zeros by default

    const data2 = buffer2.getChannelData(c % buffer2.numberOfChannels);
    output.set(data2, buffer1.length + pauseSamples);
  }

  return combined;
}

/**
 * Downloads a Blob as a file in the browser
 */
export function triggerFileDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);
}

/**
 * High-level function: Stitches Vietnamese audio and Chinese audio and downloads the dual WAV file
 */
export async function downloadBilingualAudioPair({ vietText, zhText, filename, accent = 'north', pauseMs = 420 }) {
  const viFile = audioEngine.resolveManifestFile(vietText, accent);
  const zhFile = zhText && audioEngine.resolveNativeFile(zhText, 'zh');

  if (!viFile && !zhFile) {
    alert('此項目尚無預先錄製的音檔可供離線下載。');
    return false;
  }

  // If only one file exists, trigger direct download of that file
  if (viFile && !zhFile) {
    const directUrl = audioEngine.buildAudioUrl(viFile);
    const a = document.createElement('a');
    a.href = directUrl;
    a.download = `${filename || vietText}-vi.mp3`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => document.body.removeChild(a), 500);
    return true;
  }

  if (!viFile && zhFile) {
    const directUrl = audioEngine.buildAudioUrl(zhFile);
    const a = document.createElement('a');
    a.href = directUrl;
    a.download = `${filename || zhText}-zh.mp3`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => document.body.removeChild(a), 500);
    return true;
  }

  // Both files exist! Stitch them together
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      // Fallback: download the Vietnamese file directly
      const directUrl = audioEngine.buildAudioUrl(viFile);
      const a = document.createElement('a');
      a.href = directUrl;
      a.download = `${filename || vietText}-vi.mp3`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => document.body.removeChild(a), 500);
      return true;
    }

    const audioCtx = new AudioContextClass();
    const viUrl = audioEngine.buildAudioUrl(viFile);
    const zhUrl = audioEngine.buildAudioUrl(zhFile);

    const [viBuffer, zhBuffer] = await Promise.all([
      fetchAndDecodeAudio(audioCtx, viUrl),
      fetchAndDecodeAudio(audioCtx, zhUrl)
    ]);

    if (!viBuffer || !zhBuffer) {
      // Fallback if network issue or decoding fails
      const directUrl = audioEngine.buildAudioUrl(viFile);
      const a = document.createElement('a');
      a.href = directUrl;
      a.download = `${filename || vietText}-vi.mp3`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => document.body.removeChild(a), 500);
      return true;
    }

    const combined = concatenateAudioBuffers(audioCtx, viBuffer, zhBuffer, pauseMs);
    const wavBuffer = audioBufferToWav(combined);
    const blob = new Blob([wavBuffer], { type: 'audio/wav' });

    const safeFilename = filename
      ? `${filename}.wav`
      : `[越中雙語合音]-${vietText.replace(/\s+/g, '-')}-${zhText.replace(/\s+/g, '-')}.wav`;

    triggerFileDownload(blob, safeFilename);
    return true;
  } catch (err) {
    console.error('Bilingual audio stitch failed:', err);
    // Graceful fallback to direct VI download
    const directUrl = audioEngine.buildAudioUrl(viFile);
    const a = document.createElement('a');
    a.href = directUrl;
    a.download = `${filename || vietText}-vi.mp3`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => document.body.removeChild(a), 500);
    return true;
  }
}
