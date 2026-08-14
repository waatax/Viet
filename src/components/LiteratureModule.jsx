import React, { useState, useMemo } from 'react';
import { literatureVolumes, classicalLiteratureData } from '../data/classicalLiteratureData';
import audioEngine from '../services/audioEngine';

export default function LiteratureModule({ accent = 'north', onAddXp }) {
  const [selectedVolumeId, setSelectedVolumeId] = useState('v1');
  const [selectedRound, setSelectedRound] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedWorkId, setExpandedWorkId] = useState(null);
  const [activeTabByWork, setActiveTabByWork] = useState({}); // { [workId]: 'original' | 'vernacular' | 'analysis' | 'hanviet' | 'quotes' }
  const [playingQuoteId, setPlayingQuoteId] = useState(null);
  const [flashcardWork, setFlashcardWork] = useState(null);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(null);

  // Selected volume info
  const currentVolume = useMemo(() => {
    return literatureVolumes.find(v => v.id === selectedVolumeId) || literatureVolumes[0];
  }, [selectedVolumeId]);

  // Handle Volume Change
  const handleVolumeChange = (volId) => {
    setSelectedVolumeId(volId);
    const vol = literatureVolumes.find(v => v.id === volId);
    if (vol && vol.rounds.length > 0) {
      setSelectedRound(vol.rounds[0]);
    }
  };

  // Filter works by search query or current round
  const filteredWorks = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      return classicalLiteratureData.filter(w => 
        w.titleZh.toLowerCase().includes(q) ||
        w.titleVi.toLowerCase().includes(q) ||
        w.titleEn.toLowerCase().includes(q) ||
        w.authorZh.toLowerCase().includes(q) ||
        w.authorVi.toLowerCase().includes(q) ||
        w.dynastyZh.toLowerCase().includes(q) ||
        w.originalText.toLowerCase().includes(q) ||
        w.vernacularZh.toLowerCase().includes(q) ||
        w.analysis.toLowerCase().includes(q) ||
        w.hanVietNotes.toLowerCase().includes(q) ||
        (w.famousQuotes && w.famousQuotes.some(fq => fq.viet.toLowerCase().includes(q) || fq.zh.toLowerCase().includes(q)))
      );
    }
    return classicalLiteratureData.filter(w => w.round === selectedRound);
  }, [searchQuery, selectedRound]);

  // Play audio for famous quote
  const handlePlayAudio = (quoteText, quoteIdx, workId) => {
    const playKey = `${workId}_${quoteIdx}`;
    setPlayingQuoteId(playKey);
    audioEngine.speak(quoteText, {
      accent,
      rate: 1.0,
      onEnd: () => setPlayingQuoteId(null)
    });
    if (onAddXp) onAddXp(5);
  };

  // Copy text helper
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(text);
    setTimeout(() => setCopiedQuote(null), 2000);
  };

  // Toggle active tab for a specific work card
  const getActiveTab = (workId) => activeTabByWork[workId] || 'all';
  const setActiveTab = (workId, tab) => {
    setActiveTabByWork(prev => ({ ...prev, [workId]: tab }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-indigo-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-amber-500/20">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-amber-500/30">
              <span>🏛️ 49-Round Classical Matrix</span>
              <span>•</span>
              <span>245 部經典全文精校</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">
              古文白話深研校正經典庫
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              涵蓋先秦諸子、兩漢魏晉、唐宋八大家、唐詩宋詞元曲、明清四大名著、中越漢喃名篇與近現代啟蒙思想。
              全方位提供【古文原典】、【現代白話】、【深度解析】、【漢越音考證】與【名句原生點讀】。
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
            <div className="px-2">
              <div className="text-2xl sm:text-3xl font-black text-amber-400">7</div>
              <div className="text-xs text-stone-400 font-medium">主題分卷</div>
            </div>
            <div className="px-2 border-x border-white/10">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">49</div>
              <div className="text-xs text-stone-400 font-medium">專題輪次</div>
            </div>
            <div className="px-2">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">245</div>
              <div className="text-xs text-stone-400 font-medium">傳世名作</div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 全文快速檢索：輸入書名、篇名、作者、朝代、古文名句、越語譯文或漢越詞彙..."
          className="w-full px-5 py-4 pl-12 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all text-sm sm:text-base"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 text-lg">
          🔍
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 px-2.5 py-1 text-xs font-semibold bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-lg hover:bg-stone-300 transition-colors"
          >
            清除搜尋
          </button>
        )}
      </div>

      {/* Search results notice */}
      {searchQuery && (
        <div className="flex items-center justify-between px-4 py-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 rounded-xl text-sm text-amber-800 dark:text-amber-300">
          <span>
            搜尋「<strong>{searchQuery}</strong>」找到 <strong>{filteredWorks.length}</strong> 部相關經典文獻
          </span>
          <button 
            onClick={() => setSearchQuery('')}
            className="text-xs underline hover:text-amber-600 dark:hover:text-amber-200"
          >
            返回輪次瀏覽
          </button>
        </div>
      )}

      {/* Volume Selector Tabs (Hidden when searching) */}
      {!searchQuery && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase">
              選擇主題分卷 (Volumes)
            </h2>
            <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
              第 {currentVolume.rounds[0]} ~ {currentVolume.rounds[currentVolume.rounds.length - 1]} 輪
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {literatureVolumes.map((vol) => {
              const isActive = vol.id === selectedVolumeId;
              return (
                <button
                  key={vol.id}
                  onClick={() => handleVolumeChange(vol.id)}
                  className={`p-3 sm:p-4 rounded-2xl text-left transition-all relative overflow-hidden border flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg shadow-amber-600/25 border-amber-500 scale-[1.02]'
                      : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-amber-50/50 dark:hover:bg-stone-800/80 border-stone-200 dark:border-stone-800'
                  }`}
                >
                  <div className="text-xl sm:text-2xl mb-1.5">{vol.icon}</div>
                  <div>
                    <div className="text-xs font-bold truncate">
                      {vol.titleZh.split('：')[0]}
                    </div>
                    <div className={`text-[11px] font-medium truncate ${isActive ? 'text-amber-100' : 'text-stone-500 dark:text-stone-400'}`}>
                      {vol.titleZh.split('：')[1] || vol.titleZh}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Current Volume Description Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-stone-900/90 border border-amber-200/70 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <span>{currentVolume.icon}</span>
                <span>{currentVolume.titleZh}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                {currentVolume.descZh}
              </p>
            </div>
            <div className="text-xs font-medium text-stone-500 dark:text-stone-400 shrink-0">
              {currentVolume.titleVi}
            </div>
          </div>

          {/* Round Selector Pills */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-bold tracking-wider text-stone-500 dark:text-stone-400 uppercase flex items-center justify-between">
              <span>選擇研讀輪次 (Rounds)</span>
              <span className="text-stone-400 text-[11px]">每輪精研 5 部經典</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentVolume.rounds.map((r) => {
                const isActive = r === selectedRound;
                return (
                  <button
                    key={r}
                    onClick={() => setSelectedRound(r)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                      isActive
                        ? 'bg-amber-600 text-white border-amber-500 shadow-md shadow-amber-600/30 scale-105'
                        : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border-stone-200 dark:border-stone-800'
                    }`}
                  >
                    第 {r} 輪 (Round {r})
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Works List / Cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
          <h2 className="text-lg sm:text-xl font-black text-stone-800 dark:text-stone-100 flex items-center gap-2">
            <span>📚</span>
            <span>
              {searchQuery 
                ? `搜尋結果 (${filteredWorks.length} 部)` 
                : `第 ${selectedRound} 輪 · 精選 5 部傳世巨著`}
            </span>
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
            當前發音：{accent === 'north' ? '🏛️ 北越河內標準音' : '🌴 南越西貢通用音'}
          </span>
        </div>

        {filteredWorks.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-3">
            <div className="text-4xl">📖</div>
            <div className="text-lg font-bold text-stone-700 dark:text-stone-300">查無相關經典文獻</div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              請嘗試使用其他關鍵字搜尋，或點選上方輪次切換瀏覽 245 部經典。
            </p>
          </div>
        ) : (
          filteredWorks.map((work, idx) => {
            const activeTab = getActiveTab(work.id);
            const isExpanded = expandedWorkId === work.id || searchQuery.length > 0;

            return (
              <div
                key={work.id}
                className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Work Header */}
                <div className="p-5 sm:p-7 border-b border-stone-100 dark:border-stone-800/80 bg-gradient-to-r from-amber-50/40 via-transparent to-stone-50/40 dark:from-stone-900 dark:to-stone-900">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                          Round {work.round} · No.{idx + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                          {work.dynastyZh} · {work.dynastyVi}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">
                          {work.authorZh} ({work.authorVi})
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
                        {work.titleZh}
                      </h3>
                      <div className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-medium">
                        {work.titleVi} · <span className="italic">{work.titleEn}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => {
                          setFlashcardWork(work);
                          setFlashcardFlipped(false);
                        }}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/80 text-indigo-700 dark:text-indigo-300 transition-colors flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800/60"
                        title="開啟 3D 金句閃卡"
                      >
                        <span>🃏 3D 閃卡</span>
                      </button>
                      <button
                        onClick={() => handleCopy(`${work.titleZh}\n\n【古文原典】\n${work.originalText}\n\n【白話譯文】\n${work.vernacularZh}`)}
                        className="px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
                        title="複製古文與白話譯文"
                      >
                        {copiedQuote === work.originalText ? '✓ 已複製' : '📋 複製'}
                      </button>
                    </div>
                  </div>

                  {/* Tab bar for switching views */}
                  <div className="flex items-center gap-1.5 mt-4 pt-4 border-t border-stone-200/60 dark:border-stone-800 flex-wrap">
                    {[
                      { key: 'all', label: '📖 全覽視圖 (All)' },
                      { key: 'original', label: '📜 古文原典' },
                      { key: 'vernacular', label: '💡 白話譯文' },
                      { key: 'analysis', label: '🔍 深度解析' },
                      { key: 'hanviet', label: '🈴 漢越音考' },
                      { key: 'quotes', label: '⭐ 名句誦讀' }
                    ].map(tab => {
                      const isTabActive = activeTab === tab.key;
                      return (
                        <button
                          key={tab.key}
                          onClick={() => setActiveTab(work.id, tab.key)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                            isTabActive
                              ? 'bg-amber-600 text-white shadow-sm'
                              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card Content Section */}
                <div className="p-5 sm:p-7 space-y-6">
                  {/* 1. Original Text */}
                  {(activeTab === 'all' || activeTab === 'original') && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                          <span>📜</span> 【古文原典】 (Original Classical Text)
                        </span>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 text-stone-900 dark:text-stone-100 text-base sm:text-lg leading-relaxed font-serif tracking-wide">
                        {work.originalText}
                      </div>
                    </div>
                  )}

                  {/* 2. Vernacular Chinese */}
                  {(activeTab === 'all' || activeTab === 'vernacular') && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <span>💡</span> 【現代白話語譯】 (Modern Vernacular Chinese)
                        </span>
                      </div>
                      <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30 text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
                        {work.vernacularZh}
                      </div>
                    </div>
                  )}

                  {/* 3. English Alignment */}
                  {(activeTab === 'all' || activeTab === 'vernacular') && work.vernacularEn && (
                    <div className="space-y-1.5 pl-3 border-l-2 border-indigo-400/50 dark:border-indigo-600/50">
                      <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        🌐 English Translation
                      </span>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 italic leading-relaxed">
                        "{work.vernacularEn}"
                      </p>
                    </div>
                  )}

                  {/* 4. Deep Analysis */}
                  {(activeTab === 'all' || activeTab === 'analysis') && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                        <span>🔍</span> 【深度義理與修辭解析】 (Literary & Philosophical Analysis)
                      </span>
                      <div className="p-4 rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-900/30 text-stone-700 dark:text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {work.analysis}
                      </div>
                    </div>
                  )}

                  {/* 5. Han-Viet Notes */}
                  {(activeTab === 'all' || activeTab === 'hanviet') && (
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 flex items-center gap-1.5">
                        <span>🈴</span> 【漢越音音韻考證】 (Sino-Vietnamese Phonology & Etymology)
                      </span>
                      <div className="p-3.5 rounded-2xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200/50 dark:border-sky-900/30 text-xs text-sky-900 dark:text-sky-200 font-mono">
                        {work.hanVietNotes}
                      </div>
                    </div>
                  )}

                  {/* 6. Famous Quotes with Native Audio */}
                  {(activeTab === 'all' || activeTab === 'quotes') && work.famousQuotes && work.famousQuotes.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                        <span>⭐</span> 【傳世名句誦讀與發音點讀】 (Famous Quotes & Native Pronunciation)
                      </span>

                      <div className="space-y-2.5">
                        {work.famousQuotes.map((quote, qIdx) => {
                          const isPlaying = playingQuoteId === `${work.id}_${qIdx}`;
                          return (
                            <div
                              key={qIdx}
                              className="p-4 rounded-2xl bg-gradient-to-r from-rose-50/40 via-amber-50/20 to-transparent dark:from-stone-800/80 dark:to-stone-800/40 border border-rose-200/60 dark:border-stone-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div className="space-y-1">
                                <div className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                                  <span>🇻🇳</span>
                                  <span className="text-rose-600 dark:text-rose-400">{quote.viet}</span>
                                </div>
                                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
                                  🇨🇳 {quote.zh}
                                </div>
                                {quote.en && (
                                  <div className="text-[11px] text-stone-500 dark:text-stone-400 italic">
                                    🇬🇧 {quote.en}
                                  </div>
                                )}
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <button
                                  onClick={() => handlePlayAudio(quote.viet, qIdx, work.id)}
                                  disabled={isPlaying}
                                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                                    isPlaying
                                      ? 'bg-rose-600 text-white animate-pulse shadow-md shadow-rose-600/30'
                                      : 'bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/60 dark:hover:bg-rose-900 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800'
                                  }`}
                                >
                                  <span>{isPlaying ? '🔊 誦讀中...' : '🔊 原生誦讀'}</span>
                                </button>
                                <button
                                  onClick={() => handleCopy(quote.viet)}
                                  className="p-2 rounded-xl text-xs bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-600 dark:text-stone-300 transition-colors"
                                  title="複製名句"
                                >
                                  📋
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* 3D Flashcard Modal */}
      {flashcardWork && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setFlashcardWork(null)}
        >
          <div 
            className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-amber-500/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFlashcardWork(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xl font-bold"
            >
              ✕
            </button>

            <div className="text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                🃏 3D 經典名句記憶卡 (Flashcard)
              </span>
              <h3 className="text-xl font-black text-stone-900 dark:text-stone-100">
                {flashcardWork.titleZh}
              </h3>
              <p className="text-xs text-stone-500">
                {flashcardWork.dynastyZh} · {flashcardWork.authorZh}
              </p>
            </div>

            {/* 3D Card Body */}
            <div 
              onClick={() => setFlashcardFlipped(!flashcardFlipped)}
              className="cursor-pointer min-h-[220px] rounded-2xl p-6 bg-gradient-to-br from-amber-500/10 via-stone-800 to-black text-white shadow-xl flex flex-col justify-between items-center text-center transition-all transform hover:scale-[1.01] border border-amber-500/30"
            >
              <div className="text-xs text-amber-400/80 font-bold uppercase tracking-wider">
                {flashcardFlipped ? '💡 白話與深度解析 (點擊翻轉)' : '📜 原典名句誦讀 (點擊翻轉)'}
              </div>

              <div className="my-auto space-y-3">
                {!flashcardFlipped ? (
                  <>
                    <div className="text-lg sm:text-xl font-black text-amber-300 font-serif leading-relaxed">
                      {flashcardWork.famousQuotes?.[0]?.zh || flashcardWork.originalText.slice(0, 50) + '...'}
                    </div>
                    <div className="text-sm font-semibold text-rose-300">
                      {flashcardWork.famousQuotes?.[0]?.viet}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-stone-200 leading-relaxed">
                      {flashcardWork.vernacularZh.slice(0, 100)}...
                    </div>
                    <div className="text-xs text-stone-400 italic">
                      "{flashcardWork.vernacularEn?.slice(0, 100)}..."
                    </div>
                  </>
                )}
              </div>

              <div className="text-[11px] text-stone-400">
                🔄 點擊卡片切換 正/反 面
              </div>
            </div>

            {/* Audio Button inside modal */}
            {flashcardWork.famousQuotes?.[0] && (
              <button
                onClick={() => handlePlayAudio(flashcardWork.famousQuotes[0].viet, 0, flashcardWork.id)}
                className="w-full py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-lg shadow-amber-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>🔊 原生語音朗讀 (Play Audio)</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
