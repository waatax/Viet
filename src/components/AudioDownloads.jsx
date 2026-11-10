import React from 'react';
import { Download, FileAudio } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';

export default function AudioDownloads({ lines, accent = 'north' }) {
  return <details className="audio-downloads"><summary><Download size={18} aria-hidden="true" /> 下載逐句 MP3 與文字對照</summary>
    <p>瀏覽器快取留在這台裝置，可能被系統清除；下方 MP3 可另存至檔案。這是合成語音，變速播放不會改變下載檔案的原速。</p>
    <ol>{lines.map((line, i) => {
      const vi = line.viet || line.vi || '';
      const file = audioEngine.resolveManifestFile(vi, accent);
      const zhFile = line.zh && audioEngine.resolveNativeFile(line.zh, 'zh');
      return <li key={`${i}-${vi}`}><div><span lang="vi">{vi}</span><small>{line.zh}</small></div><div className="audio-download-links">{file ? <a href={audioEngine.buildAudioUrl(file)} download={`vietnamese-${i + 1}.mp3`}><FileAudio size={16} aria-hidden="true" />越文 MP3 ↓</a> : <span>此句暫無下載檔</span>}{zhFile && <a href={audioEngine.buildAudioUrl(zhFile)} download={`chinese-${i + 1}.mp3`}>中文 MP3 ↓</a>}</div></li>;
    })}</ol>
  </details>;
}
