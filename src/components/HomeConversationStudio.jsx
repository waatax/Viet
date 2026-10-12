import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Bookmark,
  Copy,
  Check,
  ChevronDown,
  Layers,
  Zap,
  Globe2,
  HardDrive,
  Headphones,
  Sliders,
  Flame,
  Lightbulb
} from 'lucide-react';
import { situationalScenarios } from '../data/situationalScenarios';
import { SCENARIO_EXEGESIS } from '../data/scenarioExegesisData';
import { audioEngine } from '../services/audioEngine';
import { offlineAudioService } from '../services/offlineAudioService';
import { bookmarkService } from '../services/bookmarkService';
import { useDialoguePlayback, useFollowActiveLine } from '../hooks/useDialoguePlayback';
import { getSpeakerVisual } from './DialoguePlayer';
import { useLanguage } from '../context/LanguageContext';
import './HomeConversationStudio.css';

// 10 Highest-Frequency Real-Life Practical Scenarios for Fast Homepage Learning
const TOP_CURATED_SCENARIOS = [
  { id: 'cafe', icon: '☕', labelZh: '咖啡點單', subZh: '滴漏冰奶咖·少糖少冰' },
  { id: 'pho', icon: '🍜', labelZh: '河粉點單', subZh: '生牛肉河粉·油條九層塔' },
  { id: 'banhmi', icon: '🥖', labelZh: '法國麵包', subZh: '內餡客製·微辣不加芫荽' },
  { id: 'taxi', icon: '🚕', labelZh: 'Grab 叫車', subZh: '指示轉彎·靠邊停放' },
  { id: 'market', icon: '🛒', labelZh: '市集殺價', subZh: '詢問單價·四步折價法' },
  { id: 'hotel', icon: '🏨', labelZh: '飯店入住', subZh: '訂房憑證·早餐密碼' },
  { id: 'airport', icon: '✈️', labelZh: '機場海關', subZh: '行李託運·出境登機門' },
  { id: 'pharmacy', icon: '💊', labelZh: '藥局就醫', subZh: '感冒發燒·一日三次' },
  { id: 'factory_tour', icon: '🏭', labelZh: '工廠品保', subZh: '產線進度·AQL抽驗' },
  { id: 'business_negotiation', icon: '💼', labelZh: '商務合約', subZh: '會議談判·名片遞交' },
  { id: 'vietnam_geography', icon: '🇻🇳', labelZh: '風土民情', subZh: '南北文化·區域習俗' }
];

export const HomeConversationStudio = ({
  selectedAccent = 'north',
  onSelectAccent,
  setActiveTab,
  updateUserStats
}) => {
  const { learningMode, t } = useLanguage();
  const [activeScenarioId, setActiveScenarioId] = useState('cafe');

  // Active scenario object
  const activeScenario = useMemo(() => {
    return situationalScenarios.find(s => s.id === activeScenarioId) || situationalScenarios[0];
  }, [activeScenarioId]);

  // Extract lines for the active scenario
  const dialogueLines = useMemo(() => {
    if (!activeScenario) return [];
    if (activeScenario.dialogueSections && activeScenario.dialogueSections.length > 0) {
      return activeScenario.dialogueSections[0].lines || [];
    }
    return activeScenario.dialogues || activeScenario.dialogue || [];
  }, [activeScenario]);

  // Dialogue sequencer hook
  const player = useDialoguePlayback({
    lines: dialogueLines,
    accent: selectedAccent,
    nativeLang: learningMode === 'zh' ? 'zh' : 'en',
    title: activeScenario?.titleZh || '實質情境會話',
    onComplete: () => {
      audioEngine.playHaptic('celebrate');
      if (updateUserStats) updateUserStats(25);
    }
  });

  const containerRef = useRef(null);
  useFollowActiveLine(containerRef, player.index, player.isPlaying);

  // Offline Caching & Storage States
  const [isAutoCache, setIsAutoCache] = useState(() => offlineAudioService.isAutoCacheEnabled());
  const [cacheStatus, setCacheStatus] = useState({ total: 0, cachedCount: 0, isFullyCached: false, percent: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [bookmarkedSet, setBookmarkedSet] = useState(new Set());

  // Check scenario cache status when active scenario or accent changes
  useEffect(() => {
    let isMounted = true;
    offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent).then(status => {
      if (isMounted) setCacheStatus(status);
    });
    return () => { isMounted = false; };
  }, [dialogueLines, selectedAccent]);

  // Refresh bookmarks status
  useEffect(() => {
    const set = new Set();
    dialogueLines.forEach(l => {
      const viet = l.viet || l.vi;
      if (viet && bookmarkService.isBookmarked(viet)) {
        set.add(viet);
      }
    });
    setBookmarkedSet(set);
  }, [dialogueLines]);

  const handleToggleAutoCache = (e) => {
    const checked = e.target.checked;
    setIsAutoCache(checked);
    offlineAudioService.setAutoCacheEnabled(checked);
    audioEngine.playHaptic('tap');
  };

  const handleDownloadScenarioAudio = async () => {
    audioEngine.playHaptic('selection');
    setIsDownloading(true);
    setDownloadProgress(0);

    try {
      await offlineAudioService.cacheScenarioAudio(dialogueLines, selectedAccent, ({ percent }) => {
        setDownloadProgress(percent);
      });
      const updated = await offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent);
      setCacheStatus(updated);
      audioEngine.playHaptic('success');
    } catch (e) {
      console.warn('Download offline audio error:', e);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePlayLineVi = (line) => {
    const viet = line.viet || line.vi;
    if (!viet) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(viet, { accent: selectedAccent, lang: 'vi' });
    if (updateUserStats) updateUserStats(2);
  };

  const handlePlayLineZh = (line) => {
    const zh = line.zh;
    if (!zh) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(zh, { lang: 'zh' });
  };

  const handleCopySentence = (line, idx) => {
    const text = `${line.viet || line.vi}\n${line.zh || ''}`;
    navigator.clipboard?.writeText(text);
    audioEngine.playHaptic('tap');
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleToggleBookmark = (line) => {
    const viet = line.viet || line.vi;
    if (!viet) return;
    audioEngine.playHaptic('tap');
    const isAdded = bookmarkService.toggle({
      viet,
      chinese: line.zh || '',
      english: line.en || '',
      category: '會話金句',
      source: activeScenario?.titleZh || '實質會話'
    });
    setBookmarkedSet(prev => {
      const next = new Set(prev);
      if (isAdded) next.add(viet);
      else next.delete(viet);
      return next;
    });
  };

  // Scenario Exegesis Lore Data (if available for this scenario)
  const exegesis = useMemo(() => {
    return SCENARIO_EXEGESIS[activeScenarioId] || null;
  }, [activeScenarioId]);

  return (
    <section className="home-conv-studio" aria-labelledby="studio-main-heading">
      {/* 1. Header Area with Quality Badges */}
      <div className="studio-header">
        <div className="studio-title-group">
          <div className="studio-badge-row">
            <span className="studio-pill primary">
              <Flame size={12} fill="currentColor" /> {learningMode === 'zh' ? '最實用實質會話' : 'Top Practical Dialogues'}
            </span>
            <span className="studio-pill gold">
              <Headphones size={12} /> {learningMode === 'zh' ? '越文 / 越文+中文 雙軌語音' : 'Dual-Track Neural Narration'}
            </span>
            <span className="studio-pill green">
              <HardDrive size={12} /> {learningMode === 'zh' ? '支援離線下載播放' : 'Offline Playback Ready'}
            </span>
          </div>

          <h2 id="studio-main-heading" className="studio-title">
            <span>🇻🇳</span>
            <span>{learningMode === 'zh' ? '實質生活會話 · 雙軌雙語教學特區' : 'Practical Vietnamese Situational Conversations'}</span>
          </h2>

          <p className="studio-subtitle">
            {learningMode === 'zh'
              ? '將日常高頻實戰會話置於首頁頂端！點擊即聽、逐句精讀、越中雙語對照，並提供一次播放後自動儲存離線功能。'
              : 'Master everyday Vietnamese conversations right from the top of the homepage with native audio, dual-track listening, and full offline caching.'}
          </p>
        </div>

        {/* Accent Quick Switcher */}
        {onSelectAccent && (
          <div className="studio-accent-box" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-input)', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
            <Globe2 size={15} color="var(--brand-primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '切換發音：' : 'Voice: '}
            </span>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'north' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('north'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🇻🇳 河內標準音
            </button>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'south' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('south'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🌴 西貢商業音
            </button>
          </div>
        )}
      </div>

      {/* 2. Top Curated High-Frequency Scenarios Bar */}
      <div className="scenario-quick-selector" role="tablist" aria-label="情境切換">
        {TOP_CURATED_SCENARIOS.map(sc => {
          const isActive = activeScenarioId === sc.id;
          return (
            <button
              key={sc.id}
              role="tab"
              aria-selected={isActive}
              className={`scenario-chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                audioEngine.playHaptic('tap');
                setActiveScenarioId(sc.id);
              }}
              title={sc.subZh}
            >
              <span style={{ fontSize: '1.15rem' }}>{sc.icon}</span>
              <span>{sc.labelZh}</span>
            </button>
          );
        })}

        {/* Dropdown for All 64 Scenarios */}
        <div className="scenario-dropdown-wrap">
          <select
            className="scenario-select"
            value={activeScenarioId}
            onChange={(e) => {
              audioEngine.playHaptic('selection');
              setActiveScenarioId(e.target.value);
            }}
            aria-label="選擇其他情境"
          >
            <option value="" disabled>--- 探索全 64 大實戰情境 ---</option>
            {situationalScenarios.map(s => (
              <option key={s.id} value={s.id}>
                {s.icon || '💬'} {s.titleZh}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Master Control Toolbar (Play, Dual-Track Mode, Speed, Offline Cache) */}
      <div className="studio-toolbar">
        <div className="toolbar-left">
          {/* Main Continuous Play Button */}
          <button
            className={`master-play-btn ${player.isPlaying ? 'playing' : ''}`}
            onClick={() => {
              audioEngine.playHaptic('tap');
              if (player.isPlaying) player.pause();
              else if (player.isPaused) player.resume();
              else player.play(player.mode || 'vi-zh', 0);
            }}
          >
            {player.isPlaying ? (
              <>
                <Pause size={18} fill="currentColor" />
                <span>{learningMode === 'zh' ? '暫停播放' : 'Pause'}</span>
                <span className="wave-indicator" aria-hidden="true">
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                  <span className="wave-bar"></span>
                </span>
              </>
            ) : (
              <>
                <Play size={18} fill="currentColor" />
                <span>
                  {player.isPaused
                    ? (learningMode === 'zh' ? '繼續播放' : 'Resume')
                    : (learningMode === 'zh' ? '一鍵連續播放' : 'Play All')}
                </span>
              </>
            )}
          </button>

          {/* Mode Switcher: 越→中 逐句對照 vs 純越文 沉浸聽力 */}
          <div className="mode-toggle-group" role="group" aria-label="播放雙軌模式切換">
            <button
              className={`mode-toggle-btn ${player.mode === 'vi-zh' ? 'active' : ''}`}
              onClick={() => {
                audioEngine.playHaptic('tap');
                player.toggleMode('vi-zh');
              }}
              title="一遍越文原音，緊接著一遍中文導讀"
            >
              🇻🇳 越→中 雙語對照
            </button>
            <button
              className={`mode-toggle-btn ${player.mode === 'vi-only' ? 'active' : ''}`}
              onClick={() => {
                audioEngine.playHaptic('tap');
                player.toggleMode('vi-only');
              }}
              title="純越語原音沉浸聽力"
            >
              🇻🇳 純越文 沉浸聽力
            </button>
          </div>

          {/* Speed Selector */}
          <div className="mode-toggle-group" style={{ padding: '0.2rem' }}>
            {[
              { rate: 0.75, label: '0.75x 慢速' },
              { rate: 1.0, label: '1.0x 標準' },
              { rate: 1.2, label: '1.2x 挑戰' }
            ].map(opt => (
              <button
                key={opt.rate}
                className={`mode-toggle-btn ${player.prefs?.speed === opt.rate ? 'active' : ''}`}
                style={{ padding: '0.28rem 0.6rem', fontSize: '0.76rem' }}
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  player.setPrefs({ speed: opt.rate });
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="toolbar-right">
          {/* Offline Audio Caching & Preload Controls */}
          <div className="offline-group">
            {/* Auto-Cache Option Switch */}
            <label className="offline-checkbox-label" title="開啟後，每次點擊播放音檔即自動下載儲存在瀏覽器，離線或無網路時依舊能順暢播放">
              <input
                type="checkbox"
                checked={isAutoCache}
                onChange={handleToggleAutoCache}
              />
              <span>{learningMode === 'zh' ? '播過即存離線' : 'Auto-cache offline'}</span>
            </label>

            {/* One-Click Preload Download Button */}
            <button
              className={`offline-download-btn ${cacheStatus.isFullyCached ? 'ready' : ''}`}
              onClick={handleDownloadScenarioAudio}
              disabled={isDownloading}
              title={learningMode === 'zh' ? '一鍵將當前情境的所有越語與中文音檔完整下載至離線快取' : 'Download all dialogue audio clips for offline use'}
            >
              {isDownloading ? (
                <>
                  <Download size={14} className="animate-spin" />
                  <span>{learningMode === 'zh' ? `下載中 ${downloadProgress}%` : `Saving ${downloadProgress}%`}</span>
                </>
              ) : cacheStatus.isFullyCached ? (
                <>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>{learningMode === 'zh' ? `離線已就緒 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Ready Offline (${cacheStatus.cachedCount})`}</span>
                </>
              ) : (
                <>
                  <Download size={14} />
                  <span>{learningMode === 'zh' ? `一鍵下載離線 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Download (${cacheStatus.cachedCount}/${cacheStatus.total})`}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Sentence-by-Sentence Interactive Card Deck */}
      <div className="dialogue-card-deck" ref={containerRef}>
        {dialogueLines.map((line, idx) => {
          const isCurrentActive = player.isActive && player.index === idx;
          const speakerInfo = getSpeakerVisual(line.speakerVi || line.speaker || '', line.role || '', learningMode);
          const vietText = line.viet || line.vi || '';
          const zhText = line.zh || '';
          const isBookmarked = bookmarkedSet.has(vietText);

          return (
            <div
              key={idx}
              data-line-index={idx}
              className={`sentence-card ${isCurrentActive ? 'active-speaking' : ''}`}
            >
              <div className="sentence-card-top">
                <div className="speaker-badge-wrap">
                  <div className="speaker-avatar" style={{ background: speakerInfo.bg, border: `1.5px solid ${speakerInfo.border}` }}>
                    {speakerInfo.icon}
                  </div>
                  <span className="speaker-name-vi">{line.speakerVi || line.speaker || 'Người nói'}</span>
                  <span className="speaker-name-zh">({line.speakerZh || speakerInfo.roleName})</span>
                  {isCurrentActive && (
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand-primary)', marginLeft: '0.3rem' }}>
                      ▶ 正在播放
                    </span>
                  )}
                </div>

                <div className="sentence-actions">
                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleCopySentence(line, idx)}
                    title="複製越文與中文"
                  >
                    {copiedIndex === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>

                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleToggleBookmark(line)}
                    title={isBookmarked ? '從生詞本移除' : '收藏至生詞本'}
                    style={{ color: isBookmarked ? '#eab308' : undefined }}
                  >
                    <Bookmark size={14} fill={isBookmarked ? '#eab308' : 'none'} />
                  </button>
                </div>
              </div>

              <div className="sentence-card-body">
                <div className="sentence-text-vi">{vietText}</div>
                <div className="sentence-text-zh">{zhText}</div>
              </div>

              {/* Individual Audio Triggers: Separate Vietnamese & Chinese Neural Narration */}
              <div className="sentence-audio-btns">
                <button
                  className="audio-chip-play"
                  onClick={() => handlePlayLineVi(line)}
                  title="點擊單獨播放這句越語母語發音"
                >
                  <Volume2 size={13} />
                  <span>越語原音</span>
                  <span style={{ fontSize: '0.72rem', opacity: 0.75 }}>
                    {selectedAccent === 'north' ? '(北越音)' : '(南越音)'}
                  </span>
                </button>

                {zhText && (
                  <button
                    className="audio-chip-play zh-btn"
                    onClick={() => handlePlayLineZh(line)}
                    title="點擊單獨播放繁體中文導讀原音"
                  >
                    <Volume2 size={13} color="#10b981" />
                    <span>中文導讀</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>🇹🇼</span>
                  </button>
                )}

                <button
                  className="audio-chip-play"
                  style={{ marginLeft: 'auto', border: 'none', background: 'transparent', color: 'var(--text-muted)' }}
                  onClick={() => player.playSingleLine(idx, player.mode || 'vi-zh')}
                  title="以此句為起點連續播完"
                >
                  <span style={{ fontSize: '0.76rem', fontWeight: 600 }}>從此句接續播放 ➔</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. In-Depth Teaching Lore & Exegesis Section */}
      <div className="studio-lore-card">
        <div className="lore-header">
          <h3 className="lore-title">
            <Lightbulb size={18} color="var(--brand-gold)" />
            <span>{learningMode === 'zh' ? '本情境實質教學秘笈與防坑指南' : 'Pedagogical Lore & Insider Notes'}</span>
          </h3>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
            {activeScenario?.titleVi}
          </span>
        </div>

        <div className="lore-grid">
          {/* Formulas / Grammar Patterns */}
          <div className="lore-box">
            <h4>
              <span>📌</span>
              <span>{learningMode === 'zh' ? '核心句型公式' : 'Core Sentence Patterns'}</span>
            </h4>
            {exegesis?.coreFormulas && exegesis.coreFormulas.length > 0 ? (
              exegesis.coreFormulas.map((f, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.86rem' }}>{f.formulaVi}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{f.explainZh || f.formulaZh}</div>
                </div>
              ))
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '「Cho tôi + 動詞/名詞」為越南日常點餐、問話最親切有禮之開頭；句首加上「Dạ」或句尾加上「ạ」可倍增敬意。'
                  : '"Cho tôi + verb/noun" is the standard polite opener in daily requests.'}
              </p>
            )}
          </div>

          {/* Cultural Insights & Secrets */}
          <div className="lore-box">
            <h4>
              <span>💡</span>
              <span>{learningMode === 'zh' ? '在地文化潛規則' : 'Cultural Secrets'}</span>
            </h4>
            {activeScenario?.culturalTip?.contentZh ? (
              <ul>
                {activeScenario.culturalTip.contentZh.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            ) : exegesis?.culturalNotes ? (
              <ul>
                {exegesis.culturalNotes.slice(0, 3).map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '越南人稱謂講究長幼序數（Anh / Chị / Em），初次交談可先尊稱對方「Anh/Chị」，並自稱「Em」顯得謙遜得體。'
                  : 'Vietnamese address forms strictly follow kinship terms.'}
              </p>
            )}
          </div>

          {/* Key Scenario Vocabulary */}
          <div className="lore-box">
            <h4>
              <span>📖</span>
              <span>{learningMode === 'zh' ? '關鍵生詞點讀' : 'Key Vocabulary'}</span>
            </h4>
            <div className="studio-vocab-list">
              {(activeScenario?.vocab || activeScenario?.vocabulary || []).slice(0, 8).map((word, i) => (
                <button
                  key={i}
                  className="studio-vocab-chip"
                  onClick={() => {
                    const vi = word.viet || word.vi || word.word;
                    if (vi) {
                      audioEngine.playHaptic('tap');
                      audioEngine.speak(vi, { accent: selectedAccent, lang: 'vi' });
                    }
                  }}
                  title="點擊聽發音"
                >
                  <span className="studio-vocab-vi">{word.viet || word.vi || word.word}</span>
                  <span className="studio-vocab-zh">{word.zh || word.meaning}</span>
                  <Volume2 size={11} color="var(--brand-primary)" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Navigation Portal to Deep Conversation Module */}
      <div className="studio-portal-banner">
        <div className="portal-text">
          <span>🚀 想要體驗雙向角色扮演、深度分支選擇與全真 64 大實戰情境？</span>
        </div>
        <button
          className="portal-btn"
          onClick={() => {
            audioEngine.playHaptic('selection');
            if (setActiveTab) {
              sessionStorage.setItem('viet_target_chapter', JSON.stringify({
                moduleId: 'conversation',
                targetParam: { scenarioId: activeScenarioId }
              }));
              setActiveTab('conversation');
            }
          }}
        >
          <span>進入「49大情境對話旗艦模組」</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default HomeConversationStudio;
