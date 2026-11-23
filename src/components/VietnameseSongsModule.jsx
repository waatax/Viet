import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Music2, ExternalLink, Play, Clock, Volume2, Search, CheckCircle2,
  Heart, Copy, Check, ListMusic, ChevronLeft, ChevronRight, Sparkles,
  BookOpen, Columns2, Rows3, Eye, EyeOff, Mic, Tv, X
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import {
  VIETNAMESE_SONGS,
  SONGS_YOUTUBE_META,
  SONGS_YOUTUBE_BASE_URL,
  songYoutubeUrl,
  songYoutubeEmbedUrl,
  formatTimestamp,
  formatDuration,
  readListenedSongs,
  markSongListened,
  toggleListenedSong,
  readFavoriteSongs,
  toggleFavoriteSong
} from '../data/vietnameseSongs';
import './VietnameseSongsModule.css';

const fold = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/đ/gi, 'd')
    .toLowerCase();

export default function VietnameseSongsModule({
  initialSongId,
  selectedAccent = 'north',
  updateUserStats
}) {
  const [currentId, setCurrentId] = useState(() => {
    return VIETNAMESE_SONGS.some((s) => s.id === initialSongId)
      ? initialSongId
      : VIETNAMESE_SONGS[0].id;
  });
  const [query, setQuery] = useState('');
  const [artistFilter, setArtistFilter] = useState('all'); // 'all' | 'tram' | 'jiki' | 'duet' | 'favorites' | 'unlistened'
  const [showMasterTable, setShowMasterTable] = useState(true);
  const [showChinese, setShowChinese] = useState(true);
  const [layoutMode, setLayoutMode] = useState('stacked'); // 'stacked' | 'columns'
  const [showLineTimes, setShowLineTimes] = useState(true);
  const [embedSec, setEmbedSec] = useState(null);
  const [listened, setListened] = useState(readListenedSongs);
  const [favorites, setFavorites] = useState(readFavoriteSongs);
  const [copiedId, setCopiedId] = useState(null);

  const detailRef = useRef(null);

  useEffect(() => {
    if (initialSongId && VIETNAMESE_SONGS.some((s) => s.id === initialSongId)) {
      setCurrentId(initialSongId);
      setEmbedSec(null);
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [initialSongId]);

  const current = useMemo(
    () => VIETNAMESE_SONGS.find((s) => s.id === currentId) || VIETNAMESE_SONGS[0],
    [currentId]
  );

  const currentIdx = VIETNAMESE_SONGS.indexOf(current);
  const prevSong = currentIdx > 0 ? VIETNAMESE_SONGS[currentIdx - 1] : null;
  const nextSong =
    currentIdx < VIETNAMESE_SONGS.length - 1 ? VIETNAMESE_SONGS[currentIdx + 1] : null;

  const totals = useMemo(() => {
    const totalLines = VIETNAMESE_SONGS.reduce(
      (sum, song) =>
        sum + song.sections.reduce((secSum, sec) => secSum + sec.lines.length, 0),
      0
    );
    const totalVocab = VIETNAMESE_SONGS.reduce(
      (sum, song) => sum + (song.keyVocab?.length || 0),
      0
    );
    return {
      songs: VIETNAMESE_SONGS.length,
      lines: totalLines,
      vocab: totalVocab,
      listenedCount: listened.length
    };
  }, [listened]);

  const filteredSongs = useMemo(() => {
    const q = fold(query.trim());
    return VIETNAMESE_SONGS.filter((song) => {
      const artistLow = song.coverArtist.toLowerCase();
      if (artistFilter === 'tram' && !artistLow.includes('trạm')) return false;
      if (artistFilter === 'jiki' && !artistLow.includes('jiki')) return false;
      if (
        artistFilter === 'duet' &&
        !(artistLow.includes('trạm') && artistLow.includes('jiki'))
      ) {
        return false;
      }
      if (artistFilter === 'favorites' && !favorites.includes(song.id)) return false;
      if (artistFilter === 'unlistened' && listened.includes(song.id)) return false;

      if (!q) return true;
      const haystack = fold(
        [
          String(song.no),
          String(song.no).padStart(2, '0'),
          song.titleVi,
          song.titleZh,
          song.coverArtist,
          song.originalArtist,
          song.mood,
          song.summaryZh,
          song.startTimestamp,
          `${song.startSec}`,
          ...song.sections.flatMap((sec) => sec.lines.map((l) => `${l.vi} ${l.zh}`))
        ].join(' ')
      );
      return haystack.includes(q);
    });
  }, [query, artistFilter, favorites, listened]);

  const selectSong = (songId, scroll = true) => {
    setCurrentId(songId);
    setEmbedSec(null);
    if (scroll) {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMarkListened = (songId) => {
    const wasListened = listened.includes(songId);
    const next = markSongListened(songId);
    setListened(next);
    if (!wasListened) {
      if (typeof updateUserStats === 'function') {
        updateUserStats(10);
      } else if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
      }
    }
  };

  const handleToggleListened = (songId) => {
    const wasListened = listened.includes(songId);
    const next = toggleListenedSong(songId);
    setListened(next);
    if (!wasListened) {
      if (typeof updateUserStats === 'function') {
        updateUserStats(10);
      } else if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('viet_add_xp', { detail: { amount: 10 } }));
      }
    }
  };

  const handleToggleFavorite = (songId) => {
    audioEngine.playHaptic?.('tap');
    setFavorites(toggleFavoriteSong(songId));
  };

  const handleCopyTimestampLink = async (song) => {
    const url = songYoutubeUrl(song.startSec);
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(song.id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSpeakLine = (text) => {
    audioEngine.playHaptic?.('tap');
    audioEngine.speak(text, { accent: selectedAccent, rate: 0.85 });
  };

  const handleEmbedAt = (sec, songId = current.id) => {
    audioEngine.stop();
    handleMarkListened(songId);
    setEmbedSec(sec);
  };

  const scrollToSection = (secIndex) => {
    const el = document.getElementById(`song-sec-${current.id}-${secIndex}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentLineCount = current.sections.reduce((n, s) => n + s.lines.length, 0);
  const progressPct = Math.round((totals.listenedCount / Math.max(1, totals.songs)) * 100);
  const isCurrentListened = listened.includes(current.id);
  const isCurrentFavorite = favorites.includes(current.id);

  return (
    <section className="viet-songs" aria-labelledby="viet-songs-title">
      {/* Hero Banner */}
      <header className="vs-hero">
        <div className="vs-hero-top">
          <div className="vs-hero-copy">
            <span className="vs-eyebrow">
              <Music2 size={15} aria-hidden="true" />
              越南歌曲 · 雙語歌詞對照精選（完整 {totals.songs} 首）
            </span>
            <h2 id="viet-songs-title">越南抒情金曲庫・完整越文歌詞與中文翻譯</h2>
            <p>
              完整收錄 YouTube 熱門翻唱合輯
              <strong>《{SONGS_YOUTUBE_META.title}》</strong>（{SONGS_YOUTUBE_META.channel} ·{' '}
              {SONGS_YOUTUBE_META.coverArtists}）全部 <strong>{totals.songs} 首</strong>
              越南流行歌曲。每首歌皆附完整越文歌詞、逐句繁體中文對照翻譯、精選越語詞彙，以及精確至「秒」的
              YouTube 開始時間與段落跳轉連結。
            </p>
            <div className="vs-hero-stats">
              <span className="vs-stat-pill">
                <ListMusic size={14} aria-hidden="true" /> {totals.songs} 首完整歌曲
              </span>
              <span className="vs-stat-pill">
                <BookOpen size={14} aria-hidden="true" /> {totals.lines} 句越中雙語歌詞
              </span>
              <span className="vs-stat-pill">
                <Sparkles size={14} aria-hidden="true" /> {totals.vocab} 組歌詞精選詞彙
              </span>
              <span className="vs-stat-pill">
                <Clock size={14} aria-hidden="true" /> 總長 {SONGS_YOUTUBE_META.totalDurationTimestamp}（
                {SONGS_YOUTUBE_META.totalDurationSec.toLocaleString()} 秒）
              </span>
            </div>
          </div>

          <div className="vs-hero-actions">
            <a
              className="vs-yt-main-cta"
              href={SONGS_YOUTUBE_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => audioEngine.stop()}
            >
              <Play size={17} fill="currentColor" aria-hidden="true" />
              前往 YouTube 原影片完整收聽
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <button
              type="button"
              className={`vs-secondary-btn ${showMasterTable ? 'is-active' : ''}`}
              onClick={() => setShowMasterTable((prev) => !prev)}
            >
              <Clock size={15} aria-hidden="true" />
              {showMasterTable ? '收起 24 首秒數時間軸總表' : '展開 24 首秒數時間軸總表'}
            </button>
          </div>
        </div>

        <div className="vs-progress-strip">
          <div className="vs-progress-meta">
            <span>
              <CheckCircle2 size={15} aria-hidden="true" />
              已聽學 <strong>{totals.listenedCount} / {totals.songs}</strong> 首越南歌曲（{progressPct}%）
            </span>
            <small>點擊 YouTube 跳轉收聽或手動標記已學習，每首獲得 +10 XP</small>
          </div>
          <progress value={totals.listenedCount} max={totals.songs} aria-label="越南歌曲學習進度" />
        </div>
      </header>

      {/* Complete 24-Song Detailed Timestamp & Seconds Index */}
      {showMasterTable && (
        <div className="vs-index-drawer" role="region" aria-label="24 首歌曲精確開始秒數總表">
          <div className="vs-index-header">
            <div>
              <h3>
                <Clock size={18} aria-hidden="true" /> 全部 24 首歌曲開始秒數與 YouTube 直達時間軸總表
              </h3>
              <p>
                原影片連結：
                <a
                  href={SONGS_YOUTUBE_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--brand-primary)', fontWeight: 700 }}
                >
                  {SONGS_YOUTUBE_BASE_URL}
                </a>
                （含精確歌曲開始秒數、人聲進唱秒數與曲長秒數）
              </p>
            </div>
          </div>

          <div className="vs-table-wrap">
            <table className="vs-timestamp-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>越文歌名 / 中文譯名</th>
                  <th>翻唱 / 原唱</th>
                  <th>開始時間</th>
                  <th>開始秒數</th>
                  <th>人聲進唱</th>
                  <th>結束時間 / 曲長</th>
                  <th>快速操作</th>
                </tr>
              </thead>
              <tbody>
                {VIETNAMESE_SONGS.map((song) => {
                  const isSel = song.id === current.id;
                  return (
                    <tr key={song.id} className={isSel ? 'is-selected' : ''}>
                      <td className="vs-mono">{String(song.no).padStart(2, '0')}</td>
                      <td>
                        <div style={{ fontWeight: 800 }}>{song.titleVi}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                          {song.titleZh}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>{song.coverArtist}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                          原唱：{song.originalArtist}
                        </div>
                      </td>
                      <td className="vs-mono">{song.startTimestamp}</td>
                      <td>
                        <span className="vs-sec-badge">t = {song.startSec} 秒</span>
                      </td>
                      <td className="vs-mono">
                        {formatTimestamp(song.vocalStartSec)}
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          第 {song.vocalStartSec} 秒
                        </div>
                      </td>
                      <td className="vs-mono">
                        {song.endTimestamp}
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          長 {formatDuration(song.durationSec)} ({song.durationSec}秒)
                        </div>
                      </td>
                      <td>
                        <div className="vs-table-actions">
                          <a
                            className="vs-mini-yt"
                            href={songYoutubeUrl(song.startSec)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              audioEngine.stop();
                              handleMarkListened(song.id);
                            }}
                            title={`從第 ${song.startSec} 秒在 YouTube 播放 ${song.titleVi}`}
                          >
                            <Play size={12} fill="currentColor" aria-hidden="true" />
                            YouTube ({song.startSec}s)
                          </a>
                          <button
                            type="button"
                            className="vs-mini-lyrics-btn"
                            onClick={() => selectSong(song.id, true)}
                          >
                            完整歌詞
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Main Two-Column Workspace */}
      <div className="vs-workspace">
        {/* Left Sidebar: Search, Filter & Tracklist */}
        <aside className="vs-sidebar" aria-label="越南歌曲曲目清單">
          <div className="vs-search-box">
            <Search size={15} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋歌名、歌手、中文或歌詞…"
              aria-label="搜尋越南歌曲"
            />
          </div>

          <div className="vs-filter-chips" role="group" aria-label="篩選歌曲">
            {[
              { id: 'all', label: `全部 (${VIETNAMESE_SONGS.length})` },
              { id: 'tram', label: 'Trạm Cover' },
              { id: 'jiki', label: 'JiKi X' },
              { id: 'duet', label: '合唱' },
              { id: 'favorites', label: `收藏 (${favorites.length})` },
              { id: 'unlistened', label: '未收聽' }
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                className={`vs-filter-chip ${artistFilter === chip.id ? 'is-active' : ''}`}
                onClick={() => setArtistFilter(chip.id)}
              >
                {chip.label}
              </button>
            ))}
          </div>

          <div className="vs-track-list" role="listbox" aria-label="歌曲列表">
            {filteredSongs.length === 0 ? (
              <div style={{ padding: '1.25rem 0.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
                找不到符合條件的歌曲，請嘗試其他關鍵字或重設篩選。
              </div>
            ) : (
              filteredSongs.map((song) => {
                const active = song.id === current.id;
                const done = listened.includes(song.id);
                const fav = favorites.includes(song.id);
                return (
                  <button
                    key={song.id}
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={`vs-track-item ${active ? 'is-active' : ''}`}
                    onClick={() => selectSong(song.id, false)}
                  >
                    <span className="vs-track-num">{String(song.no).padStart(2, '0')}</span>
                    <span className="vs-track-info">
                      <span className="vs-track-title-row">
                        <span className="vs-track-title-vi">{song.titleVi}</span>
                        <span className="vs-track-status">
                          {fav && <Heart size={12} fill="#e11d48" color="#e11d48" aria-label="已收藏" />}
                          {done && <CheckCircle2 size={13} aria-label="已學習" />}
                        </span>
                      </span>
                      <span className="vs-track-title-zh">{song.titleZh}</span>
                      <span className="vs-track-meta">
                        <span className="vs-mono">{song.startTimestamp}</span>
                        <span>· 第 {song.startSec} 秒</span>
                        <span>· {formatDuration(song.durationSec)}</span>
                      </span>
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        {/* Right Detail Workspace */}
        <div className="vs-detail" ref={detailRef}>
          {/* Song Header & Exact Timestamps */}
          <article className="vs-song-card">
            <div className="vs-song-badges">
              <span className="vs-badge-no">第 {String(current.no).padStart(2, '0')} 首 / 共 24 首</span>
              <span className="vs-badge-mood">{current.mood}</span>
              <span className="vs-badge-artist">翻唱：{current.coverArtist}</span>
              <span className="vs-badge-artist">原唱：{current.originalArtist}</span>
            </div>

            <div className="vs-song-heading">
              <h3>{current.titleVi}</h3>
              <span className="vs-song-subtitle">{current.titleZh}</span>
            </div>

            <p className="vs-song-summary">{current.summaryZh}</p>

            {/* Detailed Timestamp Telemetry */}
            <div className="vs-telemetry-grid" aria-label="詳細時間軸與秒數資訊">
              <div className="vs-telemetry-box">
                <span>歌曲開始時間</span>
                <strong>{current.startTimestamp}</strong>
                <small>精確秒數：第 {current.startSec} 秒 (t={current.startSec})</small>
              </div>
              <div className="vs-telemetry-box">
                <span>人聲正式進唱</span>
                <strong>{formatTimestamp(current.vocalStartSec)}</strong>
                <small>
                  第 {current.vocalStartSec} 秒
                  {current.vocalStartSec > current.startSec
                    ? `（前奏 ${current.vocalStartSec - current.startSec} 秒）`
                    : '（立即進唱）'}
                </small>
              </div>
              <div className="vs-telemetry-box">
                <span>歌曲結束時間</span>
                <strong>{current.endTimestamp}</strong>
                <small>第 {current.endSec} 秒</small>
              </div>
              <div className="vs-telemetry-box">
                <span>曲長與歌詞數</span>
                <strong>{formatDuration(current.durationSec)}</strong>
                <small>
                  共 {current.durationSec} 秒 · {current.sections.length} 段 · {currentLineCount} 句
                </small>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="vs-action-row">
              <a
                className="vs-yt-song-btn"
                href={songYoutubeUrl(current.startSec)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  audioEngine.stop();
                  handleMarkListened(current.id);
                }}
              >
                <Play size={16} fill="currentColor" aria-hidden="true" />
                從第 {current.startSec} 秒在 YouTube 播放 ({current.startTimestamp})
                <ExternalLink size={14} aria-hidden="true" />
              </a>

              {current.vocalStartSec > current.startSec && (
                <a
                  className="vs-yt-vocal-btn"
                  href={songYoutubeUrl(current.vocalStartSec)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    audioEngine.stop();
                    handleMarkListened(current.id);
                  }}
                >
                  <Mic size={15} aria-hidden="true" />
                  從人聲第 {current.vocalStartSec} 秒開聽
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              )}

              <button
                type="button"
                className={`vs-secondary-btn ${embedSec !== null ? 'is-active' : ''}`}
                onClick={() =>
                  embedSec !== null ? setEmbedSec(null) : handleEmbedAt(current.startSec)
                }
              >
                <Tv size={15} aria-hidden="true" />
                {embedSec !== null ? '關閉內嵌播放器' : '頁內播放 YouTube'}
              </button>

              <button
                type="button"
                className="vs-secondary-btn"
                onClick={() => handleCopyTimestampLink(current)}
              >
                {copiedId === current.id ? (
                  <>
                    <Check size={15} aria-hidden="true" /> 已複製秒數連結
                  </>
                ) : (
                  <>
                    <Copy size={15} aria-hidden="true" /> 複製秒數連結
                  </>
                )}
              </button>

              <button
                type="button"
                className={`vs-secondary-btn ${isCurrentListened ? 'is-active' : ''}`}
                onClick={() => handleToggleListened(current.id)}
              >
                <CheckCircle2 size={15} aria-hidden="true" />
                {isCurrentListened ? '已學完' : '標記已學 (+10 XP)'}
              </button>

              <button
                type="button"
                className="vs-secondary-btn"
                onClick={() => handleToggleFavorite(current.id)}
                aria-pressed={isCurrentFavorite}
              >
                <Heart
                  size={15}
                  fill={isCurrentFavorite ? '#e11d48' : 'none'}
                  color={isCurrentFavorite ? '#e11d48' : 'currentColor'}
                  aria-hidden="true"
                />
                {isCurrentFavorite ? '已收藏' : '收藏'}
              </button>
            </div>

            {/* Optional Embedded YouTube Player synced to exact second */}
            {embedSec !== null && (
              <div className="vs-embed-wrap">
                <div className="vs-embed-bar">
                  <span>
                    ▶ 正在從 <strong>{formatTimestamp(embedSec)}（第 {embedSec} 秒）</strong> 播放《
                    {current.titleVi}》
                  </span>
                  <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                    <a
                      href={songYoutubeUrl(embedSec)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#dc2626', fontWeight: 800, textDecoration: 'none' }}
                    >
                      在 YouTube 開啟 ↗
                    </a>
                    <button
                      type="button"
                      className="vs-mini-lyrics-btn"
                      onClick={() => setEmbedSec(null)}
                      aria-label="關閉播放器"
                    >
                      <X size={14} aria-hidden="true" /> 關閉
                    </button>
                  </div>
                </div>
                <iframe
                  key={`${current.id}-${embedSec}`}
                  className="vs-embed-frame"
                  src={songYoutubeEmbedUrl(embedSec)}
                  title={`${current.titleVi} - YouTube 播放器`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Section Quick Jump Pills */}
            <div className="vs-section-nav">
              <div className="vs-section-nav-label">
                <Clock size={14} aria-hidden="true" /> 本曲段落快速定位（點擊捲動至該段落歌詞）：
              </div>
              <div className="vs-section-pills">
                {current.sections.map((sec, idx) => (
                  <button
                    key={`${current.id}-pill-${idx}`}
                    type="button"
                    className="vs-section-pill"
                    onClick={() => scrollToSection(idx)}
                  >
                    <span>{sec.label}</span>
                    <small>
                      {sec.timestamp} ({sec.startSec}s)
                    </small>
                  </button>
                ))}
              </div>
            </div>
          </article>

          {/* Lyrics Display Mode Controls */}
          <div className="vs-lyrics-toolbar" role="toolbar" aria-label="歌詞顯示選項">
            <div className="vs-toolbar-group">
              <button
                type="button"
                className={`vs-mode-btn ${showChinese ? 'is-active' : ''}`}
                onClick={() => setShowChinese((v) => !v)}
              >
                {showChinese ? <Eye size={14} aria-hidden="true" /> : <EyeOff size={14} aria-hidden="true" />}
                {showChinese ? '越中雙語對照' : '純越文（練聽力）'}
              </button>

              {showChinese && (
                <button
                  type="button"
                  className={`vs-mode-btn ${layoutMode === 'columns' ? 'is-active' : ''}`}
                  onClick={() =>
                    setLayoutMode((m) => (m === 'stacked' ? 'columns' : 'stacked'))
                  }
                >
                  {layoutMode === 'columns' ? (
                    <>
                      <Columns2 size={14} aria-hidden="true" /> 左右並排
                    </>
                  ) : (
                    <>
                      <Rows3 size={14} aria-hidden="true" /> 上下逐句對照
                    </>
                  )}
                </button>
              )}

              <button
                type="button"
                className={`vs-mode-btn ${showLineTimes ? 'is-active' : ''}`}
                onClick={() => setShowLineTimes((v) => !v)}
              >
                <Clock size={14} aria-hidden="true" />
                {showLineTimes ? '顯示逐句秒數' : '隱藏逐句秒數'}
              </button>
            </div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              點擊每句左側秒數可直達 YouTube 該秒；點擊右側 🔊 可用
              {selectedAccent === 'north' ? '北越河內音' : '南越胡志明音'}慢速跟讀
            </div>
          </div>

          {/* Complete Lyrics Sections */}
          <div className="vs-lyrics-container">
            {current.sections.map((sec, secIdx) => (
              <section
                key={`${current.id}-sec-${secIdx}`}
                id={`song-sec-${current.id}-${secIdx}`}
                className="vs-lyric-section"
              >
                <div className="vs-lyric-section-head">
                  <div className="vs-lyric-section-title">
                    <span>{sec.label}</span>
                    <span className="vs-sec-badge">
                      {sec.timestamp} · 第 {sec.startSec} 秒
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {embedSec !== null && (
                      <button
                        type="button"
                        className="vs-mini-lyrics-btn"
                        onClick={() => handleEmbedAt(sec.startSec)}
                      >
                        <Play size={12} aria-hidden="true" /> 頁內跳至此段
                      </button>
                    )}
                    <a
                      className="vs-section-yt-link"
                      href={songYoutubeUrl(sec.startSec)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        audioEngine.stop();
                        handleMarkListened(current.id);
                      }}
                    >
                      <Play size={12} fill="currentColor" aria-hidden="true" />
                      YouTube 從 {sec.startSec}s 播放
                      <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="vs-lyric-lines">
                  {sec.lines.map((line, lineIdx) => (
                    <div key={`${current.id}-${secIdx}-${lineIdx}`} className="vs-lyric-row">
                      {showLineTimes ? (
                        <a
                          className="vs-line-time"
                          href={songYoutubeUrl(line.sec)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`跳轉至 YouTube ${formatTimestamp(line.sec)}（第 ${line.sec} 秒）`}
                          onClick={(e) => {
                            if (embedSec !== null) {
                              e.preventDefault();
                              handleEmbedAt(line.sec);
                            } else {
                              audioEngine.stop();
                              handleMarkListened(current.id);
                            }
                          }}
                        >
                          <span>{formatTimestamp(line.sec)}</span>
                          <small>{line.sec}s ↗</small>
                        </a>
                      ) : (
                        <span aria-hidden="true" />
                      )}

                      <div
                        className={`vs-line-texts ${
                          showChinese && layoutMode === 'columns' ? 'is-columns' : ''
                        }`}
                      >
                        <div className="vs-line-vi">{line.vi}</div>
                        {showChinese && <div className="vs-line-zh">{line.zh}</div>}
                      </div>

                      <button
                        type="button"
                        className="vs-speak-btn"
                        onClick={() => handleSpeakLine(line.vi)}
                        title={`朗讀此句越文（${selectedAccent === 'north' ? '北越音' : '南越音'}）`}
                        aria-label={`朗讀越文歌詞：${line.vi}`}
                      >
                        <Volume2 size={15} aria-hidden="true" />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Song Key Vocabulary */}
          {current.keyVocab && current.keyVocab.length > 0 && (
            <section className="vs-vocab-card" aria-label="本曲精選越語詞彙">
              <h4>
                <Sparkles size={17} aria-hidden="true" /> 本曲精選越語詞彙（點擊 🔊 跟讀）
              </h4>
              <div className="vs-vocab-grid">
                {current.keyVocab.map((v, idx) => (
                  <div key={`${current.id}-v-${idx}`} className="vs-vocab-item">
                    <div className="vs-vocab-head">
                      <span className="vs-vocab-vi">{v.vi}</span>
                      <button
                        type="button"
                        className="vs-speak-btn"
                        style={{ width: '1.85rem', height: '1.85rem' }}
                        onClick={() => handleSpeakLine(v.vi)}
                        aria-label={`朗讀詞彙 ${v.vi}`}
                      >
                        <Volume2 size={13} aria-hidden="true" />
                      </button>
                    </div>
                    <div className="vs-vocab-zh">{v.zh}</div>
                    {v.note && <div className="vs-vocab-note">{v.note}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Previous / Next Song Navigation */}
          <nav className="vs-song-footer-nav" aria-label="上下首歌曲切換">
            <button
              type="button"
              className="vs-nav-song-btn"
              disabled={!prevSong}
              onClick={() => prevSong && selectSong(prevSong.id, true)}
            >
              <ChevronLeft size={17} aria-hidden="true" />
              {prevSong
                ? `上一首：#${String(prevSong.no).padStart(2, '0')} ${prevSong.titleVi} (${prevSong.startSec}s)`
                : '已是第一首'}
            </button>
            <button
              type="button"
              className="vs-nav-song-btn"
              disabled={!nextSong}
              onClick={() => nextSong && selectSong(nextSong.id, true)}
            >
              {nextSong
                ? `下一首：#${String(nextSong.no).padStart(2, '0')} ${nextSong.titleVi} (${nextSong.startSec}s)`
                : '已是最後一首'}
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
