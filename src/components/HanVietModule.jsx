import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Sparkles, Award, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { hanVietRoots } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const HanVietModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoot, setSelectedRoot] = useState(hanVietRoots[0]);
  const [activeKey, setActiveKey] = useState(null);

  // Morpheme Combiner States
  const [slot1, setSlot1] = useState(null);
  const [slot2, setSlot2] = useState(null);
  const [combineMsg, setCombineMsg] = useState(null);
  const [unlockedCombos, setUnlockedCombos] = useState([]);
  
  // False Friend Expansion State & Drill State
  const [expandedFalseFriend, setExpandedFalseFriend] = useState(null);
  const [drillIdx, setDrillIdx] = useState(0);
  const [drillAnswered, setDrillAnswered] = useState(null);
  const [drillScore, setDrillScore] = useState(0);

  const FALSE_FRIENDS_DRILLS = [
    {
      viet: 'Bác sĩ',
      han: '博士',
      questionZh: '在越南語中，「Bác sĩ」真正指的意思是什麼？',
      questionEn: 'In Vietnamese, what does "Bác sĩ" actually mean?',
      optionsZh: ['A. 博士學位 (PhD)', 'B. 醫生 (Medical Doctor)', 'C. 博學的大師 (Master)'],
      optionsEn: ['A. PhD Degree', 'B. Medical Doctor', 'C. Great Scholar'],
      answer: 1,
      explanationZh: '⚠️ 陷阱！Bác sĩ 源自漢字「博士」，但在越文中指「醫生」。學術博士在越語為「Tiến sĩ (進士)」。'
    },
    {
      viet: 'Sinh viên',
      han: '生員',
      questionZh: '在越南語中，「Sinh viên」是指哪種身分？',
      questionEn: 'What does "Sinh viên" refer to in Vietnamese?',
      optionsZh: ['A. 大學生 (University Student)', 'B. 小學生 (Primary Student)', 'C. 剛出生的嬰兒 (Newborn)'],
      optionsEn: ['A. University Student', 'B. Primary Student', 'C. Newborn baby'],
      answer: 0,
      explanationZh: '⚠️ 陷阱！Sinh viên 源自古代科舉「生員 (秀才)」，在現代越語中專指「大學生」。中小學生稱為「Học sinh (學生)」。'
    },
    {
      viet: 'Lịch sự',
      han: '歷史',
      questionZh: '當越南朋友稱讚你「Rất lịch sự」，他的意思是什麼？',
      questionEn: 'When a Vietnamese friend says "Rất lịch sự", what does it mean?',
      optionsZh: ['A. 你很有歷史淵源', 'B. 你非常有禮貌、文雅', 'C. 你說話很古老'],
      optionsEn: ['A. You are historical', 'B. You are very polite/courteous', 'C. You speak archaic'],
      answer: 1,
      explanationZh: '⚠️ 陷阱！Lịch sự 是「禮貌、文雅、得體」；真正的「歷史」在越文中發音為「Lịch sử」。'
    },
    {
      viet: 'Khách sạn',
      han: '客棧',
      questionZh: '在越南街道上看到「Khách sạn」，這代表什麼場所？',
      questionEn: 'What does "Khách sạn" mean on street signs in Vietnam?',
      optionsZh: ['A. 現代飯店/酒店 (Hotel)', 'B. 古裝拍片客棧', 'C. 餐廳小吃攤'],
      optionsEn: ['A. Modern Hotel', 'B. Ancient Inn', 'C. Restaurant stall'],
      answer: 0,
      explanationZh: '⚠️ 陷阱！Khách sạn 字面為「客棧」，在現代越南專指標準「飯店、酒店 (Hotel)」。'
    }
  ];

  const VALID_COMPOUNDS = {
    'Quốc + Tế': { viet: 'Quốc tế', han: '國際', zh: '國際', en: 'International' },
    'Kinh + Tế': { viet: 'Kinh tế', han: '經濟', zh: '經濟', en: 'Economy' },
    'Đại + Học': { viet: 'Đại học', han: '大學', zh: '大學', en: 'University' },
    'Quốc + Gia': { viet: 'Quốc gia', han: '國家', zh: '國家', en: 'Nation' },
    'Bệnh + Viện': { viet: 'Bệnh viện', han: '病院', zh: '醫院', en: 'Hospital' },
    'Du + Học': { viet: 'Du học', han: '遊學', zh: '留學', en: 'Study abroad' },
    'Học + Sinh': { viet: 'Học sinh', han: '學生', zh: '學生 (中小學)', en: 'Student' },
    'Pháp + Luật': { viet: 'Pháp luật', han: '法律', zh: '法律', en: 'Law' },
    'Nhân + Dân': { viet: 'Nhân dân', han: '人民', zh: '人民', en: 'People' },
    'Văn + Hóa': { viet: 'Văn hóa', han: '文化', zh: '文化', en: 'Culture' },
    'Tự + Do': { viet: 'Tự do', han: '自由', zh: '自由', en: 'Freedom' },
    'Công + Ty': { viet: 'Công ty', han: '公司', zh: '公司', en: 'Company' },
    'An + Toàn': { viet: 'An toàn', han: '安全', zh: '安全', en: 'Safety' },
    'Bác + Sĩ': { viet: 'Bác sĩ', han: '博士', zh: '醫生 (假朋友!)', en: 'Doctor' },
    'Y + Viện': { viet: 'Y viện', han: '醫院', zh: '醫療機構', en: 'Medical Clinic' },
    'Kinh + Doanh': { viet: 'Kinh doanh', han: '經營', zh: '商業/經商', en: 'Business' }
  };

  const COMBINER_ROOTS = [
    'Quốc', 'Tế', 'Kinh', 'Đại', 'Học', 'Gia',
    'Bệnh', 'Viện', 'Du', 'Pháp', 'Luật', 'Nhân',
    'Dân', 'Văn', 'Hóa', 'Tự', 'Do', 'Công',
    'Ty', 'An', 'Toàn', 'Bác', 'Sĩ'
  ];

  const handleCombineClick = (root) => {
    if (!slot1) {
      setSlot1(root);
      setCombineMsg(null);
    } else if (!slot2) {
      setSlot2(root);
      const comboKey = `${slot1} + ${root}`;
      const valid = VALID_COMPOUNDS[comboKey];
      if (valid) {
        setCombineMsg({ type: 'success', text: `✨ 成功組合：${valid.viet} (${valid.han}) - ${valid.zh}` });
        playWord(valid.viet, `combo_${valid.viet}`);
        if (!unlockedCombos.includes(valid.viet)) {
          setUnlockedCombos(prev => [...prev, valid.viet]);
        }
        if (updateUserStats) updateUserStats(5);
      } else {
        setCombineMsg({ type: 'error', text: '❌ 無效的字根組合，請再試一次！' });
        setTimeout(() => {
          setSlot1(null);
          setSlot2(null);
          setCombineMsg(null);
        }, 1500);
      }
    } else {
      setSlot1(root);
      setSlot2(null);
      setCombineMsg(null);
    }
  };

  const handleDrillChoice = (idx) => {
    if (drillAnswered !== null) return;
    setDrillAnswered(idx);
    const drill = FALSE_FRIENDS_DRILLS[drillIdx];
    if (idx === drill.answer) {
      setDrillScore(prev => prev + 1);
      if (updateUserStats) updateUserStats(15);
    }
  };

  const nextDrill = () => {
    setDrillAnswered(null);
    setDrillIdx(prev => (prev + 1) % FALSE_FRIENDS_DRILLS.length);
  };

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const filteredRoots = hanVietRoots.filter(r => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      r.root.toLowerCase().includes(term) ||
      r.han.toLowerCase().includes(term) ||
      (r.meaningZh && r.meaningZh.toLowerCase().includes(term)) ||
      (r.meaningEn && r.meaningEn.toLowerCase().includes(term))
    );
  });

  const playWord = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
    if (updateUserStats) updateUserStats(2);
  };

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          {learningMode === 'zh' ? '漢越音百字根庫 (Hán Việt Cognates Explorer)' : 'Sino-Vietnamese Root Explorer (Hán Việt)'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '越南語高達 40% - 70% 的詞彙為「漢越詞」（源自中古漢語與唐宋音韻）。掌握字根對照規律，即可透過母語經驗倍速解鎖數千高階詞彙！'
            : '40%-70% of Vietnamese vocabulary originates from Sino-Vietnamese cognates. Master core roots to rapidly decode thousands of advanced words.'}
        </p>
      </div>

      {/* Secret Weapon Knowledge Card */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', borderLeft: '4px solid var(--brand-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Sparkles size={20} color="var(--brand-accent)" />
          <h3 style={{ fontSize: '1.18em', fontWeight: 800 }}>
            {learningMode === 'zh' ? '💡 漢越音倍速記詞秘笈（台越音韻超強關聯）' : '💡 The Sino-Vietnamese Accelerator'}
          </h3>
        </div>
        <p style={{ fontSize: '0.94em', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {learningMode === 'zh'
            ? '越語發音與台語/客語/古漢語音韻高度契合。例如：Quốc (國) + Tế (際) = Quốc tế (國際)；Kinh (經) + Tế (濟) = Kinh tế (經濟)；Đại (大) + Học (學) = Đại học (大學)！'
            : 'Example: Quốc (Nation) + Tế (International) = Quốc tế (International); Kinh (Manage) + Tế (Economy) = Kinh tế (Economy); Đại (Big) + Học (Study) = Đại học (University)!'}
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ margin: '1.5rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1.2rem', border: '1.5px solid var(--border-color)', boxShadow: 'var(--shadow-xs)' }}>
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.75rem' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={learningMode === 'zh' ? '搜尋字根、漢字或釋義 (如: Quốc, 學, 經濟, 自由)...' : 'Search root, Chinese character, or meaning...'}
            style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', fontSize: '0.96rem' }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 800 }}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Morpheme Combiner */}
      <div style={{ marginBottom: '2rem', padding: '1.25rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', border: '2px dashed var(--brand-gold)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-primary)', margin: 0 }}>
            🧪 詞素煉金合成台 (Morpheme Combiner Workbench)
          </h3>
          <span style={{ fontSize: '0.85em', fontWeight: 700, color: 'var(--brand-gold)', background: 'var(--bg-accent)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-full)' }}>
            已解鎖: {unlockedCombos.length} / {Object.keys(VALID_COMPOUNDS).length}
          </span>
        </div>
        
        <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
          點選下方任意 2 個字根，系統將自動演算是否能化合為合法的高階漢越複合詞：
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.2rem' }}>
          {COMBINER_ROOTS.map(r => (
            <button
              key={r}
              onClick={() => handleCombineClick(r)}
              style={{
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                background: (slot1 === r || slot2 === r) ? 'var(--brand-primary)' : 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: (slot1 === r || slot2 === r) ? '#fff' : 'var(--text-primary)',
                transition: 'all 0.15s ease'
              }}
            >
              {r}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2em', fontWeight: 'bold', flexWrap: 'wrap', background: 'var(--bg-main)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
          <div style={{ width: '90px', height: '40px', borderBottom: '2px solid var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>{slot1 || '?'}</div>
          <span style={{ color: 'var(--text-primary)' }}>+</span>
          <div style={{ width: '90px', height: '40px', borderBottom: '2px solid var(--brand-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-primary)' }}>{slot2 || '?'}</div>
          <span style={{ color: 'var(--text-primary)' }}>=</span>
          <div style={{ minWidth: '160px', height: '40px', display: 'flex', alignItems: 'center' }}>
             {combineMsg && (
               <span style={{ color: combineMsg.type === 'success' ? '#10b981' : '#ef4444', fontSize: '0.92em' }}>
                 {combineMsg.text}
               </span>
             )}
          </div>
        </div>
      </div>

      {/* False Friends Drill Quiz */}
      <div style={{
        marginBottom: '2rem',
        padding: '1.25rem',
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.06) 0%, rgba(245, 158, 11, 0.08) 100%)',
        borderRadius: 'var(--radius-md)',
        border: '1.5px solid #f59e0b'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
          <h3 style={{ fontSize: '1.15em', fontWeight: 800, color: '#d97706', margin: 0 }}>
            ⚠️ 假朋友避坑排雷特訓 (False Friends Drill)
          </h3>
          <span style={{ fontSize: '0.85em', fontWeight: 700, color: '#d97706' }}>
            第 {drillIdx + 1} / {FALSE_FRIENDS_DRILLS.length} 題 · 答對 {drillScore} 題
          </span>
        </div>

        <div style={{ fontSize: '1.02em', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.9rem' }}>
          {learningMode === 'zh' ? FALSE_FRIENDS_DRILLS[drillIdx].questionZh : FALSE_FRIENDS_DRILLS[drillIdx].questionEn}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.65rem', marginBottom: '0.9rem' }}>
          {(learningMode === 'zh' ? FALSE_FRIENDS_DRILLS[drillIdx].optionsZh : FALSE_FRIENDS_DRILLS[drillIdx].optionsEn).map((opt, idx) => {
            const isSelected = drillAnswered === idx;
            const isCorrect = idx === FALSE_FRIENDS_DRILLS[drillIdx].answer;
            let btnBg = 'var(--bg-card)';
            let btnBorder = '1px solid var(--border-color)';
            if (drillAnswered !== null) {
              if (isCorrect) {
                btnBg = 'rgba(16, 185, 129, 0.2)';
                btnBorder = '1.5px solid #10b981';
              } else if (isSelected) {
                btnBg = 'rgba(239, 68, 68, 0.2)';
                btnBorder = '1.5px solid #ef4444';
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleDrillChoice(idx)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: btnBg,
                  border: btnBorder,
                  textAlign: 'left',
                  cursor: drillAnswered === null ? 'pointer' : 'default',
                  fontWeight: 700,
                  fontSize: '0.92em',
                  color: 'var(--text-primary)'
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {drillAnswered !== null && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.9em', color: drillAnswered === FALSE_FRIENDS_DRILLS[drillIdx].answer ? '#10b981' : '#d97706', flex: '1 1 300px' }}>
              {learningMode === 'zh' ? FALSE_FRIENDS_DRILLS[drillIdx].explanationZh : FALSE_FRIENDS_DRILLS[drillIdx].explanationZh}
            </div>
            <button
              className="primary-action"
              style={{ padding: '0.45rem 1rem', fontSize: '0.88em' }}
              onClick={nextDrill}
            >
              下一題 ➔
            </button>
          </div>
        )}
      </div>

      {/* Main Grid: Left Root List + Right Detail Compounds */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
        {/* Left: Root Picker Cards */}
        <div>
          <h3 style={{ fontSize: '1.15em', fontWeight: 800, marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} color="var(--brand-primary)" />
            {learningMode === 'zh' ? '核心字根列表' : 'Core Roots'} ({filteredRoots.length})
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))', gap: '0.75rem', maxHeight: '560px', overflowY: 'auto', paddingRight: '0.3rem' }}>
            {filteredRoots.map((r, idx) => {
              const isSelected = selectedRoot?.root === r.root;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRoot(r)}
                  aria-pressed={isSelected}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--bg-accent)' : 'var(--bg-card)',
                    border: `1.5px solid ${isSelected ? 'var(--brand-accent)' : 'var(--border-color)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.2)' : 'none',
                    transform: isSelected ? 'scale(1.02)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '1.3em', fontWeight: 900, color: 'var(--brand-primary)' }}>
                    {r.root}
                  </div>
                  <div style={{ fontSize: '0.95em', fontWeight: 800, color: 'var(--brand-gold)', margin: '0.15rem 0' }}>
                    {r.han}
                  </div>
                  <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
                    {loc(r, 'meaning')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Root Deep Breakdown & Compounds */}
        {selectedRoot && (
          <div className="simulator-box" style={{ margin: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div>
                <span style={{ fontSize: '0.82em', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase' }}>
                  ACTIVE ROOT EXPLORATION
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.3rem' }}>
                  <span style={{ fontSize: '2.2em', fontWeight: 900, color: 'var(--brand-primary)' }}>{selectedRoot.root}</span>
                  <span style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-gold)' }}>({selectedRoot.han})</span>
                </div>
                <div style={{ fontSize: '1em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {learningMode === 'zh' ? '釋義：' : 'Meaning: '}
                  <strong>{loc(selectedRoot, 'meaning')}</strong>
                </div>
              </div>

              <button
                className="speaker-btn"
                onClick={() => playWord(selectedRoot.root, `root_${selectedRoot.root}`)}
                title={`播放 ${selectedRoot.root} 發音`}
              >
                <Volume2 size={20} />
              </button>
            </div>

            {/* Phonological Rule Note */}
            {selectedRoot.phonologyNote && (
              <div style={{ background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.2rem', fontSize: '0.88em', color: 'var(--text-secondary)', borderLeft: '3px solid var(--brand-gold)' }}>
                📖 <strong>{learningMode === 'zh' ? '音韻考證：' : 'Phonetics: '}</strong>
                {learningMode === 'zh' ? selectedRoot.phonologyNoteZh : selectedRoot.phonologyNoteEn}
              </div>
            )}

            {/* Derived Compound Words Grid */}
            <h4 style={{ fontSize: '1.1em', fontWeight: 800, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '衍生高頻複合詞 (Compounds)' : 'Derived Compounds'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedRoot.compounds?.map((c, cIdx) => {
                const isPlayingC = activeKey === c.viet;
                const isFalseFriend = !!c.falseFriend;
                const isExpanded = expandedFalseFriend === c.viet;
                return (
                  <div key={cIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div
                      onClick={() => isFalseFriend && setExpandedFalseFriend(isExpanded ? null : c.viet)}
                      style={{
                        background: 'var(--bg-main)',
                        padding: '0.85rem 1.1rem',
                        borderRadius: 'var(--radius-md)',
                        border: isExpanded ? '2px solid #ff9800' : '1px solid var(--border-color)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.2s ease',
                        cursor: isFalseFriend ? 'pointer' : 'default'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)' }}>
                          {c.viet}
                          <span style={{ fontSize: '0.85em', color: 'var(--brand-gold)', marginLeft: '0.5rem', fontWeight: 700 }}>
                            [{c.han}]
                          </span>
                          {isFalseFriend && (
                            <span style={{ marginLeft: '0.5rem', fontSize: '0.75em', background: '#ff9800', color: '#fff', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>
                              ⚠️ 假朋友
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                          {learningMode === 'zh' ? c.zh : c.en}
                        </div>
                      </div>

                      <button
                        className={`speaker-btn mini-btn ${isPlayingC ? 'playing' : ''}`}
                        onClick={(e) => { e.stopPropagation(); playWord(c.viet, c.viet); }}
                        title={`朗讀 ${c.viet}`}
                      >
                        <Volume2 size={16} />
                      </button>
                    </div>
                    {isExpanded && isFalseFriend && (
                      <div style={{ padding: '0.75rem', background: '#fff4e5', borderLeft: '4px solid #ff9800', borderRadius: '4px', fontSize: '0.9em', color: '#663c00' }}>
                        <strong>字面直譯：</strong> {c.falseFriend.literalZh}<br/>
                        <div style={{ marginTop: '0.3rem' }}><strong>⚠️ 注意：</strong> {c.falseFriend.warningZh}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
