
export const HAN_VIET_SOUND_RULES = [
  {
    categoryZh: '雙唇音 (幫/滂/並母)',
    categoryEn: 'Labial Consonants',
    chineseZh: '中文 b / p (注音 ㄅ / ㄆ)',
    taiwanZh: '台語 b / p',
    vietShift: '➔ 越語 B / P / PH',
    ruleZh: '古漢語幫母多轉為 B，滂母多轉為 PH (讀 f 音)。',
    examples: [
      { han: '北', vi: 'Bắc', note: '國語: ㄅㄟˇ · 越語: Bắc' },
      { han: '報', vi: 'Báo', note: '國語: ㄅㄠˋ · 越語: Báo' },
      { han: '平', vi: 'Bình', note: '國語: ㄆㄧㄥˊ · 越語: Bình' },
      { han: '普', vi: 'Phổ', note: '國語: ㄆㄨˇ · 越語: Phổ' },
      { han: '法', vi: 'Pháp', note: '國語: ㄈㄚˇ / 台語: huat · 越語: Pháp' },
      { han: '風', vi: 'Phong', note: '國語: ㄈㄥ · 越語: Phong' }
    ]
  },
  {
    categoryZh: '舌尖中音 (端/透/定母)',
    categoryEn: 'Alveolar Consonants',
    chineseZh: '中文 d / t (注音 ㄉ / ㄊ)',
    taiwanZh: '台語 d / t',
    vietShift: '➔ 越語 Đ / TH',
    ruleZh: '古端母、定母轉為越語 Đ (d帶橫線)；透母轉為強送氣 TH (同注音ㄊ)。',
    examples: [
      { han: '大', vi: 'Đại', note: '國語: ㄉㄚˋ · 越語: Đại' },
      { han: '動', vi: 'Động', note: '國語: ㄉㄨㄥˋ · 越語: Động' },
      { han: '道', vi: 'Đạo', note: '國語: ㄉㄠˋ · 越語: Đạo' },
      { han: '通', vi: 'Thông', note: '國語: ㄊㄨㄥ · 越語: Thông' },
      { han: '天', vi: 'Thiên', note: '國語: ㄊㄧㄢ · 越語: Thiên' },
      { han: '體', vi: 'Thể', note: '國語: ㄊㄧˇ · 越語: Thể' }
    ]
  },
  {
    categoryZh: '舌根清音 (見/群母)',
    categoryEn: 'Velar Consonants',
    chineseZh: '中文 g / k (注音 ㄍ / ㄎ)',
    taiwanZh: '台語 k',
    vietShift: '➔ 越語 C / K / QU',
    ruleZh: '見母字在越語中大量轉為 C、K 或圓唇的 Qu。',
    examples: [
      { han: '國', vi: 'Quốc', note: '國語: ㄍㄨㄛˊ / 台語: kok · 越語: Quốc' },
      { han: '軍', vi: 'Quân', note: '國語: ㄐㄩㄣ / 台語: kun · 越語: Quân' },
      { han: '經', vi: 'Kinh', note: '國語: ㄐㄧㄥ / 台語: keng · 越語: Kinh' },
      { han: '結', vi: 'Kết', note: '國語: ㄐㄧㄝˊ / 台語: kiat · 越語: Kết' },
      { han: '公', vi: 'Công', note: '國語: ㄍㄨㄥ · 越語: Công' },
      { han: '金', vi: 'Kim', note: '國語: ㄐㄧㄣ · 越語: Kim' }
    ]
  },
  {
    categoryZh: '舌根擦音 (溪母)',
    categoryEn: 'Aspirated Velar Consonants',
    chineseZh: '中文 k / h (注音 ㄎ / ㄏ)',
    taiwanZh: '台語 kh',
    vietShift: '➔ 越語 KH',
    ruleZh: '溪母字在越語幾乎百分之百對應 KH (喉嚨摩擦音)！台語讀 kh 的字特別準！',
    examples: [
      { han: '開', vi: 'Khai', note: '國語: ㄎㄞ / 台語: khui · 越語: Khai' },
      { han: '考', vi: 'Khảo', note: '國語: ㄎㄠˇ / 台語: khó · 越語: Khảo' },
      { han: '空', vi: 'Không', note: '國語: ㄎㄨㄥ / 台語: khong · 越語: Không' },
      { han: '客', vi: 'Khách', note: '國語: ㄎㄜˋ / 台語: kheh · 越語: Khách' },
      { han: '科', vi: 'Khoa', note: '國語: ㄎㄜ / 台語: kho · 越語: Khoa' },
      { han: '氣', vi: 'Khí', note: '國語: ㄑㄧˋ / 台語: khì · 越語: Khí' }
    ]
  },
  {
    categoryZh: '鼻音與日母 (疑母 / 日母)',
    categoryEn: 'Nasal & Palatal Consonants',
    chineseZh: '中文 ng- / r- (注音 ㄖ)',
    taiwanZh: '台語 ng / j',
    vietShift: '➔ 越語 NG(H) / NH',
    ruleZh: '疑母轉為字首 NG/NGH；日母字（人、日、如）在越語一律轉為 NH！',
    examples: [
      { han: '人', vi: 'Nhân', note: '國語: ㄖㄣˊ / 台語: jîn · 越語: Nhân' },
      { han: '日', vi: 'Nhật', note: '國語: ㄖˋ / 台語: ji̍t · 越語: Nhật' },
      { han: '入', vi: 'Nhập', note: '國語: ㄖㄨˋ / 台語: ji̍p · 越語: Nhập' },
      { han: '語', vi: 'Ngữ', note: '國語: ㄩˇ / 台語: gí · 越語: Ngữ' },
      { han: '義', vi: 'Nghĩa', note: '國語: ㄧˋ / 台語: gī · 越語: Nghĩa' },
      { han: '業', vi: 'Nghiệp', note: '國語: ㄧㄝˋ / 台語: gia̍p · 越語: Nghiệp' }
    ]
  },
  {
    categoryZh: '入聲促音韻尾 (-p, -t, -c, -ch)',
    categoryEn: 'Checked Entering Tones (Ru Sheng)',
    chineseZh: '國語丟失入聲 (轉為各聲調)',
    taiwanZh: '台語/粵語/客語完整保留 -p, -t, -k',
    vietShift: '➔ 越語 -P, -T, -C, -CH',
    ruleZh: '【重磅規律】台語或客語有短促入聲的字，在越語中必然結尾為 p/t/c/ch，且只能帶銳聲 (Sắc) 或重聲 (Nặng)！',
    examples: [
      { han: '國', vi: 'Quốc', note: '台語: kok (入聲) ➔ 越語 -c + 銳聲' },
      { han: '學', vi: 'Học', note: '台語: ha̍k (入聲) ➔ 越語 -c + 重聲' },
      { han: '十', vi: 'Thập', note: '台語: tsa̍p (入聲) ➔ 越語 -p + 重聲' },
      { han: '八', vi: 'Bát', note: '台語: pat (入聲) ➔ 越語 -t + 銳聲' },
      { han: '合', vi: 'Hợp', note: '台語: ha̍p (入聲) ➔ 越語 -p + 重聲' },
      { han: '特', vi: 'Đặc', note: '台語: ti̍k (入聲) ➔ 越語 -c + 重聲' }
    ]
  },
  {
    categoryZh: '齒擦音與塞擦音 (心/精/清母)',
    categoryEn: 'Sibilants & Affricates',
    chineseZh: '中文 s / x / c / z (注音 ㄙ / ㄒ / ㄘ / ㄗ)',
    taiwanZh: '台語 s / ts / tsh',
    vietShift: '➔ 越語 T / X / S / C',
    ruleZh: '古心母與精母字在越語中大量轉為 T (如心 Tâm, 新 Tân)，或轉為 X/S (如社 Xã, 生 Sinh)。',
    examples: [
      { han: '心', vi: 'Tâm', note: '國語: ㄒㄧㄣ / 台語: sim · 越語: Tâm' },
      { han: '新', vi: 'Tân', note: '國語: ㄒㄧㄣ / 台語: sin · 越語: Tân' },
      { han: '星', vi: 'Tinh', note: '國語: ㄒㄧㄥ / 台語: tshenn · 越語: Tinh' },
      { han: '生', vi: 'Sinh', note: '國語: ㄕㄥ / 台語: senn · 越語: Sinh' },
      { han: '社', vi: 'Xã', note: '國語: ㄕㄜˋ / 台語: siā · 越語: Xã' },
      { han: '修', vi: 'Tu', note: '國語: ㄒㄧㄡ / 台語: tsiu · 越語: Tu' }
    ]
  }
];

import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Sparkles, Award, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { hanVietRoots } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';

export const HanVietModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeHanTab, setActiveHanTab] = useState('roots'); // 'roots' | 'rules' | 'combiner' | 'falsefriends'
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
    'Kinh + Doanh': { viet: 'Kinh doanh', han: '經營', zh: '商業/經商', en: 'Business' },
    'Tài + Chính': { viet: 'Tài chính', han: '財務', zh: '財務/金融', en: 'Finance' },
    'Kỹ + Thuật': { viet: 'Kỹ thuật', han: '技術', zh: '技術/科技', en: 'Technology' },
    'Thương + Mại': { viet: 'Thương mại', han: '商貿', zh: '貿易/商業', en: 'Trade' },
    'Hợp + Đồng': { viet: 'Hợp đồng', han: '合同', zh: '契約/合同', en: 'Contract' },
    'Sản + Xuất': { viet: 'Sản xuất', han: '生產', zh: '生產/製造', en: 'Production' },
    'Thông + Tin': { viet: 'Thông tin', han: '通信', zh: '資訊/消息', en: 'Information' },
    'Bảo + Hiểm': { viet: 'Bảo hiểm', han: '保險', zh: '保險', en: 'Insurance' },
    'Đầu + Tư': { viet: 'Đầu tư', han: '投資', zh: '投資 (FDI)', en: 'Investment' }
  };

  const COMBINER_ROOTS = [
    'Quốc', 'Tế', 'Kinh', 'Đại', 'Học', 'Gia',
    'Bệnh', 'Viện', 'Du', 'Pháp', 'Luật', 'Nhân',
    'Dân', 'Văn', 'Hóa', 'Tự', 'Do', 'Công',
    'Ty', 'An', 'Toàn', 'Bác', 'Sĩ', 'Tài',
    'Chính', 'Kỹ', 'Thuật', 'Thương', 'Mại', 'Hợp',
    'Đồng', 'Sản', 'Xuất', 'Thông', 'Tin', 'Bảo',
    'Hiểm', 'Đầu', 'Tư'
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
        audioEngine.playSuccessChime();
        playWord(valid.viet, `combo_${valid.viet}`);
        if (!unlockedCombos.includes(valid.viet)) {
          const nextCombos = [...unlockedCombos, valid.viet];
          setUnlockedCombos(nextCombos);
          gamificationEngine.checkAchievements({ xp: 50 }, { type: 'HANVIET_STUDIED', count: nextCombos.length });
        }
        if (updateUserStats) updateUserStats(10);
      } else {
        setCombineMsg({ type: 'error', text: '❌ 無效的字根組合，請再試一次！' });
        audioEngine.playGentleError();
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
      audioEngine.playSuccessChime();
      if (updateUserStats) updateUserStats(15);
    } else {
      audioEngine.playGentleError();
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

      {/* Secret Weapon Knowledge Card - Comprehensive Educational Block */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', borderLeft: '4px solid var(--brand-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <Sparkles size={22} color="var(--brand-accent)" />
          <h3 style={{ fontSize: '1.25em', fontWeight: 800 }}>
            {learningMode === 'zh' ? '💡 知識點 完整解釋：漢越詞的降維打擊 (The Sino-Vietnamese Accelerator)' : '💡 Comprehensive Knowledge: The Sino-Vietnamese Accelerator'}
          </h3>
        </div>
        <div style={{ fontSize: '0.95em', color: 'var(--text-primary)', lineHeight: 1.7 }}>
          {learningMode === 'zh' ? (
            <>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong>你知道嗎？</strong> 現代越南語中，高達 <strong>60% 到 70%</strong> 的詞彙屬於「漢越詞」（Từ Hán Việt）。這些詞彙在唐宋時期從中國傳入越南，保留了大量古漢語（尤其是中古音）的發音特徵。對於母語為中文（特別是會講台語、客家話或粵語）的學習者來說，這簡直是<strong>降維打擊</strong>！
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong>🧠 如何運用這個優勢？</strong><br/>
                與其死記硬背單字，不如掌握「字根」。因為漢越詞的組合邏輯與中文<strong>完全一致</strong>。只要記住一個字根，就能瞬間解鎖數十個相關詞彙。<br/>
                例如：你知道「Quốc」對應漢字「國」，「Tế」對應「際」，「Gia」對應「家」。<br/>
                那麼你不需要學，就能猜出：<br/>
                👉 <strong>Quốc tế</strong> = 國際<br/>
                👉 <strong>Quốc gia</strong> = 國家
              </p>
              <p style={{ margin: 0, padding: '0.75rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-primary)' }}>
                <strong>⚠️ 假朋友警告：</strong>雖然多數詞彙意思相同，但有少數詞彙在越南語中演變出了不同的意思（稱為「假朋友」）。例如「Bác sĩ」對應漢字是「博士」，但越南語的意思卻是「醫生」！我們在下方的「避坑排雷特訓」中會專門對付它們。
              </p>
            </>
          ) : (
            <>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong>Did you know?</strong> Up to <strong>60% to 70%</strong> of modern Vietnamese vocabulary consists of "Sino-Vietnamese words" (Từ Hán Việt). These words were borrowed from Chinese during the Tang and Song dynasties and have preserved many phonetic features of Middle Chinese. For learners with a background in Chinese, this is an incredible <strong>unfair advantage</strong>!
              </p>
              <p style={{ marginBottom: '0.75rem' }}>
                <strong>🧠 How to leverage this?</strong><br/>
                Instead of memorizing isolated words, master the "roots". The logic of combining Sino-Vietnamese words is <strong>exactly the same</strong> as in Chinese. By learning one root, you can instantly unlock dozens of related words.<br/>
                For example: If you know "Quốc" maps to "Nation", "Tế" maps to "International", and "Gia" maps to "Family".<br/>
                You can intuitively guess:<br/>
                👉 <strong>Quốc tế</strong> = International<br/>
                👉 <strong>Quốc gia</strong> = Nation
              </p>
              <p style={{ margin: 0, padding: '0.75rem', background: 'rgba(37, 99, 235, 0.1)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--brand-primary)' }}>
                <strong>⚠️ False Friends Warning:</strong> While most words share the same meaning, some have evolved differently in Vietnamese (known as "False Friends"). For instance, "Bác sĩ" maps to the Chinese characters for "PhD", but in Vietnamese, it means "Medical Doctor"! We will tackle these in the drill below.
              </p>
            </>
          )}
        </div>
      </div>

      
      {/* Sub Navigation Bar for Han-Viet Hub */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { id: 'roots', labelZh: '📖 1. 百大核心字根庫', labelEn: '1. 100 Core Roots' },
          { id: 'rules', labelZh: '⚡ 2. 聲母音變與入聲對應密碼', labelEn: '2. Sound-Shift Matrix' },
          { id: 'combiner', labelZh: '🧪 3. 詞素煉金合成台', labelEn: '3. Morpheme Combiner' },
          { id: 'falsefriends', labelZh: '⚠️ 4. 假朋友避坑排雷', labelEn: '4. False Friends Drill' }
        ].map(t => (
          <button
            key={t.id}
            className={`control-btn ${activeHanTab === t.id ? 'active' : ''}`}
            style={{
              background: activeHanTab === t.id ? 'var(--brand-accent)' : 'var(--bg-card)',
              color: activeHanTab === t.id ? '#fff' : 'inherit',
              padding: '0.5rem 1rem',
              fontWeight: 800,
              fontSize: '0.88rem'
            }}
            onClick={() => setActiveHanTab(t.id)}
          >
            {learningMode === 'zh' ? t.labelZh : t.labelEn}
          </button>
        ))}
      </div>

      {/* ==================================================== */}
      {/* TAB 1: 100 CORE ROOTS EXPLORER */}
      {/* ==================================================== */}
      {activeHanTab === 'roots' && (
        <>
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

      
        </>
      )}

      {/* ==================================================== */}
      {/* TAB: SOUND-SHIFT RULES MATRIX */}
      {/* ==================================================== */}
      {activeHanTab === 'rules' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--brand-accent)' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              ⚡ 中古漢語 ➔ 現代越語聲母音變與入聲對照規律
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6 }}>
              語言學家整理的「音變對應羅塞塔石碑」！利用台語、客家話或國語發音，即可一秒推算出越南語對應的字首子音與尾音。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {HAN_VIET_SOUND_RULES.map((rule, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  border: '1.5px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ fontSize: '1.1rem', color: 'var(--brand-primary)' }}>
                    {rule.categoryZh}
                  </strong>
                  <span style={{ fontSize: '0.85rem', fontWeight: 900, color: 'var(--brand-gold)', background: 'var(--bg-main)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-color)' }}>
                    {rule.vietShift}
                  </span>
                </div>

                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {rule.chineseZh} · {rule.taiwanZh}
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {rule.ruleZh}
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    經典示範詞 (點擊聽標準發音)：
                  </div>
                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
                    {rule.examples.map((ex, exIdx) => (
                      <button
                        key={exIdx}
                        onClick={() => playWord(ex.vi, `rule_${idx}_${exIdx}`)}
                        style={{
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.3rem 0.65rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.84rem'
                        }}
                        title={ex.note}
                      >
                        <span style={{ fontWeight: 800, color: 'var(--brand-gold)' }}>{ex.han}</span>
                        <strong style={{ color: 'var(--brand-primary)' }}>{ex.vi}</strong>
                        <Volume2 size={12} color="var(--brand-accent)" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: MORPHEME COMBINER */}
      {/* ==================================================== */}
      {activeHanTab === 'combiner' && (
        <div>
          {/* Morpheme Combiner Tutorial & Workbench */}
      <div className="section-header" style={{ marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem' }}>
        <h2 className="section-title">
          <Sparkles color="var(--brand-gold)" />
          {learningMode === 'zh' ? '實戰演練：詞素煉金合成台' : 'Practice: Morpheme Combiner Workbench'}
        </h2>
      </div>

      <div className="simulator-box" style={{ marginBottom: '1rem', background: 'var(--bg-accent)', border: '1px solid var(--brand-gold)', borderRadius: 'var(--radius-md)', padding: '1.2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
          <HelpCircle size={22} color="var(--brand-gold)" />
          <h3 style={{ fontSize: '1.15em', fontWeight: 800, margin: 0 }}>
            {learningMode === 'zh' ? '玩法教學：詞素煉金術' : 'How to Play: Morpheme Alchemy'}
          </h3>
        </div>
        <div style={{ fontSize: '0.95em', color: 'var(--text-primary)', lineHeight: 1.6 }}>
          {learningMode === 'zh' ? (
            <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>積木概念：</strong>就像樂高積木一樣，你可以把單一的字根（詞素）組裝成高階詞彙。</li>
              <li><strong>操作方式：</strong>從下方字根庫中，點選兩個能合理對應的字根（例如先點 <code>Quốc(國)</code> 再點 <code>Gia(家)</code>）。</li>
              <li><strong>學習目標：</strong>找出隱藏在題庫中的 <strong>{Object.keys(VALID_COMPOUNDS).length} 個</strong>合法複合詞，完成越南語詞彙鍊金！點擊成功的單字會發音。</li>
            </ul>
          ) : (
            <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>LEGO Concept:</strong> Combine single roots (morphemes) into advanced words, just like LEGO blocks.</li>
              <li><strong>How to interact:</strong> Select two roots from the bank below that make a logical compound (e.g., <code>Quốc(Nation)</code> + <code>Gia(Family)</code>).</li>
              <li><strong>Goal:</strong> Find and unlock all <strong>{Object.keys(VALID_COMPOUNDS).length}</strong> hidden valid compounds. Click on the successful words to hear the pronunciation!</li>
            </ul>
          )}
        </div>
      </div>

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

      </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: FALSE FRIENDS DRILL */}
      {/* ==================================================== */}
      {activeHanTab === 'falsefriends' && (
        <div>
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
    </div>
  )}

      {/* Main Grid: Left Root List + Right Detail Compounds */}
      {activeHanTab === 'roots' && (
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
      )}
    </div>
  );
};
