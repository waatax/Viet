import React, { useState } from 'react';
import { Download, FileAudio, Sparkles, Check, Loader2 } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { downloadBilingualAudioPair } from '../utils/audioStitcher';

export default function AudioDownloads({ lines, accent = 'north' }) {
  const [downloadingIdx, setDownloadingIdx] = useState(null);

  const handleDownloadBilingual = async (vi, zh, i) => {
    setDownloadingIdx(i);
    try {
      await downloadBilingualAudioPair({
        vietText: vi,
        zhText: zh,
        accent,
        filename: `bilingual-${i + 1}-${vi.replace(/[^\w\d\u00C0-\u024F\u1EA0-\u1EF9]+/g, '-')}`
      });
    } catch (e) {
      console.error(e);
    } finally {
      setDownloadingIdx(null);
    }
  };

  return (
    <details className="audio-downloads">
      <summary>
        <Download size={18} aria-hidden="true" /> 下載逐句 MP3 與文字對照（支援越中雙語合音）
      </summary>
      <p>
        瀏覽器快取留在這台裝置，可能被系統清除；下方提供個別音檔及<strong>「越＋中雙語合音」</strong>下載，方便通勤、運動、開車隨身離線聆聽。
      </p>
      <ol>
        {lines.map((line, i) => {
          const vi = line.viet || line.vi || '';
          const zh = line.zh || '';
          const file = audioEngine.resolveManifestFile(vi, accent);
          const zhFile = zh && audioEngine.resolveNativeFile(zh, 'zh');
          const isStitching = downloadingIdx === i;

          return (
            <li key={`${i}-${vi}`}>
              <div>
                <span lang="vi">{vi}</span>
                <small>{zh}</small>
              </div>
              <div className="audio-download-links">
                {file ? (
                  <a href={audioEngine.buildAudioUrl(file)} download={`vietnamese-${i + 1}.mp3`}>
                    <FileAudio size={16} aria-hidden="true" />越文 MP3 ↓
                  </a>
                ) : (
                  <span>此句暫無下載檔</span>
                )}
                {zhFile && (
                  <a href={audioEngine.buildAudioUrl(zhFile)} download={`chinese-${i + 1}.mp3`}>
                    中文 MP3 ↓
                  </a>
                )}
                {(file || zhFile) && (
                  <button
                    type="button"
                    className="bilingual-download-btn"
                    onClick={() => handleDownloadBilingual(vi, zh, i)}
                    disabled={isStitching}
                    title="合成並下載「先越文、後中文」雙語合音"
                    style={{
                      background: 'rgba(234, 179, 8, 0.12)',
                      border: '1px solid var(--brand-gold)',
                      color: 'var(--brand-gold)',
                      borderRadius: 'var(--radius-sm, 6px)',
                      padding: '0.2rem 0.55rem',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      marginLeft: '0.25rem'
                    }}
                  >
                    {isStitching ? (
                      <>
                        <Loader2 size={13} className="spin" aria-hidden="true" />
                        處理中…
                      </>
                    ) : (
                      <>
                        <Sparkles size={13} aria-hidden="true" />
                        越＋中雙語合音 ↓
                      </>
                    )}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </details>
  );
}
