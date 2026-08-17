import React, { useState, useEffect, useMemo } from 'react';
import { Users, HelpCircle, CheckCircle, Volume2, Sparkles, UserCheck, ArrowRight, BookOpen } from 'lucide-react';
import { pronounKinshipData } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const PronounModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc } = useLanguage();
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  // Calculator inputs
  const [myGender, setMyGender] = useState('male'); // 'male' | 'female'
  const [targetGender, setTargetGender] = useState('female'); // 'male' | 'female'
  const [relation, setRelation] = useState('older_peer'); 
  // 'older_peer' | 'younger_peer' | 'same_age' | 'elder_uncle' | 'elder_aunt' | 'elder_grandparent' | 'formal_business'

  const calculated = useMemo(() => {
    if (relation === 'older_peer') {
      if (targetGender === 'male') {
        return {
          you: 'Anh',
          youDescZh: '年長於自己的男性 (哥哥輩/年輕男士)',
          youDescEn: 'Older male / Polite young gentleman',
          me: 'Em',
          meDescZh: '晚輩 (我)',
          meDescEn: 'Younger self (I/me)',
          sampleVi: 'Chào Anh! Em rất vui được gặp anh.',
          sampleZh: '哥你好！我很高興見到你。',
          sampleEn: 'Hello! I am very glad to meet you.'
        };
      } else {
        return {
          you: 'Chị',
          youDescZh: '年長於自己的女性 (姐姐輩/年輕女士)',
          youDescEn: 'Older female / Polite young lady',
          me: 'Em',
          meDescZh: '晚輩 (我)',
          meDescEn: 'Younger self (I/me)',
          sampleVi: 'Chào Chị! Em có thể giúp gì cho chị?',
          sampleZh: '姐你好！我能為您提供什麼協助？',
          sampleEn: 'Hello! How can I help you?'
        };
      }
    }

    if (relation === 'younger_peer') {
      const myPronoun = myGender === 'male' ? 'Anh' : 'Chị';
      return {
        you: 'Em',
        youDescZh: '年齡小於自己的男女 (弟妹/晚輩)',
        youDescEn: 'Younger peer (he/she/you)',
        me: myPronoun,
        meDescZh: myGender === 'male' ? '哥哥 (我)' : '姐姐 (我)',
        meDescEn: myGender === 'male' ? 'Older brother (I/me)' : 'Older sister (I/me)',
        sampleVi: `Chào Em! ${myPronoun} mời em uống cà phê nhé.`,
        sampleZh: `你好！${myGender === 'male' ? '哥' : '姐'}請你喝咖啡喔。`,
        sampleEn: `Hello! I would like to treat you to coffee.`
      };
    }

    if (relation === 'same_age') {
      return {
        you: 'Bạn',
        youDescZh: '同輩朋友/同學 (無性別差)',
        youDescEn: 'Peer / Friend of same age',
        me: 'Tôi / Mình',
        meDescZh: '我 (正式 / 親切)',
        meDescEn: 'I / Me',
        sampleVi: 'Chào Bạn! Hôm nay mình cùng đi ăn nhé.',
        sampleZh: '朋友你好！今天我們一起去吃飯吧。',
        sampleEn: 'Hello friend! Let us go eat together today.'
      };
    }

    if (relation === 'elder_uncle') {
      return {
        you: 'Chú / Bác',
        youDescZh: '叔叔 / 伯父 (長輩男性)',
        youDescEn: 'Uncle / Senior gentleman',
        me: 'Cháu / Con',
        meDescZh: '侄輩/晚輩 (我)',
        meDescEn: 'Nephew/Niece (I/me)',
        sampleVi: 'Cháu chào Chú ạ! Chú đi đâu đấy ạ?',
        sampleZh: '叔叔好！叔叔您要去哪裡呢？',
        sampleEn: 'Hello Uncle! Where are you heading to?'
      };
    }

    if (relation === 'elder_aunt') {
      return {
        you: 'Cô / Bác',
        youDescZh: '阿姨 / 姑姑 / 老師 (長輩女性)',
        youDescEn: 'Aunt / Female Teacher / Senior lady',
        me: 'Cháu / Em',
        meDescZh: '晚輩/學生 (我)',
        meDescEn: 'Niece/Student (I/me)',
        sampleVi: 'Em chào Cô ạ! Hôm nay bài học rất hay.',
        sampleZh: '老師好！今天的課程非常棒。',
        sampleEn: 'Hello Teacher! Today lesson was wonderful.'
      };
    }

    if (relation === 'elder_grandparent') {
      const youPronoun = targetGender === 'male' ? 'Ông' : 'Bà';
      return {
        you: youPronoun,
        youDescZh: targetGender === 'male' ? '爺爺/長者 (男性)' : '奶奶/長者 (女性)',
        youDescEn: targetGender === 'male' ? 'Grandfather / Elderly male' : 'Grandmother / Elderly female',
        me: 'Cháu',
        meDescZh: '孫輩/後生 (我)',
        meDescEn: 'Grandchild / Junior (I/me)',
        sampleVi: `Cháu kính chào ${youPronoun} ạ! Chúc ${youPronoun} dồi dào sức khỏe.`,
        sampleZh: `晚輩向${targetGender === 'male' ? '爺爺' : '奶奶'}問好！祝您身體健康。`,
        sampleEn: `I pay my deepest respect to you! Wishing you longevity and health.`
      };
    }

    if (relation === 'formal_business') {
      const youPronoun = targetGender === 'male' ? 'Ông / Anh' : 'Bà / Chị';
      return {
        you: youPronoun,
        youDescZh: '正式商務貴賓/長官',
        youDescEn: 'Formal Business Partner / VIP',
        me: 'Tôi',
        meDescZh: '本人 / 我 (正式商務)',
        meDescEn: 'I / Me (Formal business)',
        sampleVi: `Xin chào ${youPronoun}! Tôi rất vinh hạnh được hợp tác.`,
        sampleZh: `您好！本人非常榮幸能與貴方合作。`,
        sampleEn: `Hello! I am honored to collaborate with your esteemed company.`
      };
    }

    return {
      you: 'Bạn',
      youDescZh: '朋友',
      youDescEn: 'Friend',
      me: 'Tôi',
      meDescZh: '我',
      meDescEn: 'Me',
      sampleVi: 'Xin chào!',
      sampleZh: '你好！',
      sampleEn: 'Hello!'
    };
  }, [relation, targetGender, myGender]);

  // Pronoun Situational Challenge Sandbox State
  const [scenarioIdx, setScenarioIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scenarioScore, setScenarioScore] = useState(0);

  const PRONOUN_SCENARIOS = [
    {
      titleZh: '☕ 情境一：咖啡廳點餐',
      titleEn: '☕ Scenario 1: Coffee Shop',
      descZh: '你是一位 28 歲的男士，來到河內咖啡廳。接待你的店員是一位大約 20 歲的年輕女大學生。你應該如何自稱並稱呼對方？',
      descEn: 'You are a 28yo man at a Hanoi cafe. The barista is a 20yo young lady. How do you address yourselves?',
      optionsZh: [
        'A. 我稱「Anh (哥)」，稱對方「Em (妹/晚輩)」',
        'B. 我稱「Em (弟)」，稱對方「Chị (姐)」',
        'C. 我稱「Chú (叔)」，稱對方「Cháu (侄)」',
        'D. 雙方皆自稱「Tôi」'
      ],
      optionsEn: [
        'A. Me: Anh (Brother), You: Em (Sister)',
        'B. Me: Em (Brother), You: Chị (Sister)',
        'C. Me: Chú (Uncle), You: Cháu (Niece)',
        'D. Both use Tôi'
      ],
      answer: 0,
      explainZh: '✓ 完全正確！面對比自己年幼的女性店員，男性自稱 Anh (哥哥)，親切稱呼對方為 Em (弟妹輩)，是最道地有禮的點餐方式。'
    },
    {
      titleZh: '🛵 情境二：搭乘 Grab 摩托車',
      titleEn: '🛵 Scenario 2: Grab Ride',
      descZh: '你是一位 25 歲的乘客，接單的 Grab 司機是一位大約 65 歲、頭髮花白的長輩爺爺。你該如何打招呼並自稱？',
      descEn: 'You are a 25yo rider. Your Grab driver is a 65yo elderly senior with white hair. How should you greet him?',
      optionsZh: [
        'A. 自稱「Em」，稱對方「Anh」',
        'B. 自稱「Cháu (侄輩)」，稱對方「Bác / Ông (伯父/爺爺)」',
        'C. 自稱「Tôi」，稱對方「Bạn」',
        'D. 自稱「Con」，稱對方「Mẹ」'
      ],
      optionsEn: [
        'A. Me: Em, You: Anh',
        'B. Me: Cháu (Nephew), You: Bác/Ông (Uncle/Grandpa)',
        'C. Me: Tôi, You: Bạn',
        'D. Me: Con, You: Mẹ'
      ],
      answer: 1,
      explainZh: '✓ 完全正確！面對爺爺輩或年長於父母的長輩，晚輩應自稱 Cháu，並尊敬地稱呼對方為 Bác (伯父) 或 Ông (爺爺)。'
    },
    {
      titleZh: '💼 情境三：初次商務會議',
      titleEn: '💼 Scenario 3: Business Meeting',
      descZh: '你在胡志明市參加跨國企業合作會議，首次拜訪 45 歲的越南男性總經理。最得體且具備專業禮節的自稱與稱謂是？',
      descEn: 'You are at a corporate meeting meeting a 45yo Vietnamese Managing Director for the first time.',
      optionsZh: [
        'A. 自稱「Tôi / Em」，稱對方為「Anh / Quý công ty」',
        'B. 自稱「Mày」，稱對方為「Tao」',
        'C. 自稱「Con」，稱對方為「Bố」',
        'D. 自稱「Bạn」，稱對方為「Bạn」'
      ],
      optionsEn: [
        'A. Me: Tôi/Em, You: Anh/Quý công ty',
        'B. Me: Mày, You: Tao',
        'C. Me: Con, You: Bố',
        'D. Me: Bạn, You: Bạn'
      ],
      answer: 0,
      explainZh: '✓ 完全正確！商務初次見面可用禮貌客氣的 Tôi (本人) 或 Em，並尊稱對方為 Anh (長輩先生) 或 Quý công ty (貴公司)。'
    }
  ];

  const handleScenarioChoice = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === PRONOUN_SCENARIOS[scenarioIdx].answer) {
      setScenarioScore(s => s + 1);
      if (updateUserStats) updateUserStats(20);
    }
  };

  const nextScenario = () => {
    setSelectedAnswer(null);
    setScenarioIdx(prev => (prev + 1) % PRONOUN_SCENARIOS.length);
  };

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
    if (updateUserStats) updateUserStats(2);
  };

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Users color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越語社交與親屬人稱稱謂智能推算矩陣' : 'Vietnamese Kinship & Social Pronoun Calculator'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '越南語沒有單純的「你/我」，而是依據「年齡、性別、長幼尊卑」形成鏡像對稱稱謂（如 Anh-Em、Chị-Em、Chú-Cháu）。選擇雙方條件，立即推算最道地的稱謂與社交金句！'
            : 'Vietnamese uses relative kinship pronouns instead of simple you/I. Select age, gender, and social relation to compute natural reciprocal pronouns.'}
        </p>
      </div>

      {/* Interactive Situational Challenge */}
      <div style={{
        marginBottom: '2.5rem',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
        border: '1.5px solid var(--brand-green)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-green)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} />
              {learningMode === 'zh' ? '🎭 實境稱謂語用沙盤挑戰' : '🎭 Situational Pronoun Sandbox'}
            </h3>
            <span style={{ fontSize: '0.85em', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '進入真實生活情境，選出最得體、最自然的自稱與稱呼！' : 'Test your pronoun instincts in authentic everyday Vietnamese scenarios.'}
            </span>
          </div>
          <span style={{ fontSize: '0.88em', fontWeight: 800, color: 'var(--text-primary)' }}>
            關卡 {scenarioIdx + 1} / {PRONOUN_SCENARIOS.length} · 答對 {scenarioScore} 題
          </span>
        </div>

        <div style={{ background: 'var(--bg-card)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
          <div style={{ fontSize: '1.1em', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.4rem' }}>
            {learningMode === 'zh' ? PRONOUN_SCENARIOS[scenarioIdx].titleZh : PRONOUN_SCENARIOS[scenarioIdx].titleEn}
          </div>
          <p style={{ fontSize: '0.94em', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {learningMode === 'zh' ? PRONOUN_SCENARIOS[scenarioIdx].descZh : PRONOUN_SCENARIOS[scenarioIdx].descEn}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
          {(learningMode === 'zh' ? PRONOUN_SCENARIOS[scenarioIdx].optionsZh : PRONOUN_SCENARIOS[scenarioIdx].optionsEn).map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrect = idx === PRONOUN_SCENARIOS[scenarioIdx].answer;
            let bg = 'var(--bg-main)';
            let border = '1px solid var(--border-color)';
            if (selectedAnswer !== null) {
              if (isCorrect) {
                bg = 'rgba(16, 185, 129, 0.2)';
                border = '1.5px solid #10b981';
              } else if (isSelected) {
                bg = 'rgba(239, 68, 68, 0.2)';
                border = '1.5px solid #ef4444';
              }
            }
            return (
              <button
                key={idx}
                onClick={() => handleScenarioChoice(idx)}
                style={{
                  padding: '0.85rem 1.1rem',
                  borderRadius: 'var(--radius-md)',
                  background: bg,
                  border: border,
                  textAlign: 'left',
                  cursor: selectedAnswer === null ? 'pointer' : 'default',
                  fontWeight: 700,
                  fontSize: '0.92em',
                  color: 'var(--text-primary)',
                  transition: 'all 0.15s ease'
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selectedAnswer !== null && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', background: 'var(--bg-main)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.92em', fontWeight: 700, color: selectedAnswer === PRONOUN_SCENARIOS[scenarioIdx].answer ? '#10b981' : '#f59e0b', flex: '1 1 320px' }}>
              {learningMode === 'zh' ? PRONOUN_SCENARIOS[scenarioIdx].explainZh : PRONOUN_SCENARIOS[scenarioIdx].explainZh}
            </div>
            <button
              className="primary-action"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.88em' }}
              onClick={nextScenario}
            >
              下一情境 ➔
            </button>
          </div>
        )}
      </div>

      {/* Calculator Workstation Box */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <UserCheck color="var(--brand-accent)" />
          {learningMode === 'zh' ? '稱謂對照設定台' : 'Pronoun Computation Station'}
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
          {/* 1. My Identity */}
          <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <label style={{ display: 'block', fontSize: '0.88em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
              👤 {learningMode === 'zh' ? '1. 我的性別：' : '1. My Gender:'}
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`control-btn ${myGender === 'male' ? 'active' : ''}`}
                style={{ flex: 1, justifyContent: 'center', background: myGender === 'male' ? 'var(--brand-accent)' : 'var(--bg-card)', color: myGender === 'male' ? '#fff' : 'inherit' }}
                onClick={() => setMyGender('male')}
              >
                👨 {learningMode === 'zh' ? '男性 (Nam)' : 'Male'}
              </button>
              <button
                className={`control-btn ${myGender === 'female' ? 'active' : ''}`}
                style={{ flex: 1, justifyContent: 'center', background: myGender === 'female' ? 'var(--brand-accent)' : 'var(--bg-card)', color: myGender === 'female' ? '#fff' : 'inherit' }}
                onClick={() => setMyGender('female')}
              >
                👩 {learningMode === 'zh' ? '女性 (Nữ)' : 'Female'}
              </button>
            </div>
          </div>

          {/* 2. Target Identity */}
          <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <label style={{ display: 'block', fontSize: '0.88em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
              👥 {learningMode === 'zh' ? '2. 對象的性別：' : '2. Partner Gender:'}
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`control-btn ${targetGender === 'male' ? 'active' : ''}`}
                style={{ flex: 1, justifyContent: 'center', background: targetGender === 'male' ? 'var(--brand-accent)' : 'var(--bg-card)', color: targetGender === 'male' ? '#fff' : 'inherit' }}
                onClick={() => setTargetGender('male')}
              >
                👨 {learningMode === 'zh' ? '男性 (Nam)' : 'Male'}
              </button>
              <button
                className={`control-btn ${targetGender === 'female' ? 'active' : ''}`}
                style={{ flex: 1, justifyContent: 'center', background: targetGender === 'female' ? 'var(--brand-accent)' : 'var(--bg-card)', color: targetGender === 'female' ? '#fff' : 'inherit' }}
                onClick={() => setTargetGender('female')}
              >
                👩 {learningMode === 'zh' ? '女性 (Nữ)' : 'Female'}
              </button>
            </div>
          </div>

          {/* 3. Relative Age & Social Hierarchy */}
          <div style={{ background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <label style={{ display: 'block', fontSize: '0.88em', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
              ⚖️ {learningMode === 'zh' ? '3. 雙方年齡與社會關係：' : '3. Social Hierarchy:'}
            </label>
            <select
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.8rem',
                background: 'var(--bg-card)',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                fontSize: '0.92rem',
                outline: 'none'
              }}
            >
              <option value="older_peer">{learningMode === 'zh' ? '對方比我年長少許 (兄姐輩)' : 'Older Peer (Brother/Sister tier)'}</option>
              <option value="younger_peer">{learningMode === 'zh' ? '對方比我年幼 (弟妹晚輩)' : 'Younger Peer (Em)'}</option>
              <option value="same_age">{learningMode === 'zh' ? '同年齡朋友/同學 (Bạn)' : 'Same Age Friend (Bạn)'}</option>
              <option value="elder_uncle">{learningMode === 'zh' ? '長輩叔伯輩 (Chú / Bác)' : 'Senior Uncle (Chú/Bác)'}</option>
              <option value="elder_aunt">{learningMode === 'zh' ? '長輩姑姑/阿姨/老師 (Cô / Bác)' : 'Senior Aunt/Teacher (Cô/Bác)'}</option>
              <option value="elder_grandparent">{learningMode === 'zh' ? '祖輩長者 (Ông / Bà)' : 'Grandparent tier (Ông/Bà)'}</option>
              <option value="formal_business">{learningMode === 'zh' ? '正式商務/長官/貴賓 (Ông/Bà/Tôi)' : 'Formal Business (Ông/Bà/Tôi)'}</option>
            </select>
          </div>
        </div>

        {/* Calculated Pronouns Matrix Result Box */}
        <div style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', border: '1.5px solid var(--brand-accent)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            {/* You Pronoun */}
            <div style={{ background: 'var(--bg-card)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-xs)' }}>
              <span style={{ fontSize: '0.8em', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase' }}>
                {learningMode === 'zh' ? '👉 你對對方的稱呼 (You)' : '👉 How to address partner (You)'}
              </span>
              <div style={{ fontSize: '2em', fontWeight: 900, color: 'var(--brand-primary)', margin: '0.2rem 0' }}>
                {calculated.you}
              </div>
              <div style={{ fontSize: '0.86em', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? calculated.youDescZh : calculated.youDescEn}
              </div>
            </div>

            {/* Me Pronoun */}
            <div style={{ background: 'var(--bg-card)', padding: '1.1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-xs)' }}>
              <span style={{ fontSize: '0.8em', fontWeight: 800, color: 'var(--brand-green)', textTransform: 'uppercase' }}>
                {learningMode === 'zh' ? '👈 我對自己的自稱 (Me / I)' : '👈 Your self-reference (I/Me)'}
              </span>
              <div style={{ fontSize: '2em', fontWeight: 900, color: 'var(--brand-green)', margin: '0.2rem 0' }}>
                {calculated.me}
              </div>
              <div style={{ fontSize: '0.86em', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? calculated.meDescZh : calculated.meDescEn}
              </div>
            </div>
          </div>

          {/* Practical Sample Sentence with Audio */}
          <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '0.78em', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase' }}>
                {learningMode === 'zh' ? '💬 實用社交情境例句：' : '💬 Practical Phrase:'}
              </span>
              <div style={{ fontSize: '1.25em', fontWeight: 800, color: 'var(--brand-accent)', margin: '0.2rem 0' }}>
                {calculated.sampleVi}
              </div>
              <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? calculated.sampleZh : calculated.sampleEn}
              </div>
            </div>

            <button
              className="speaker-btn"
              onClick={() => handleSpeak(calculated.sampleVi, 'pronoun_sample')}
              title="朗讀此句"
            >
              <Volume2 size={18} />
            </button>
          </div>
        </div>

        {/* Pronoun Reference Table */}
        <h4 style={{ fontSize: '1.1em', fontWeight: 800, marginBottom: '0.8rem' }}>
          {learningMode === 'zh' ? '常用人稱稱謂總覽速查表' : 'Full Kinship Pronoun Chart'}
        </h4>
        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{learningMode === 'zh' ? '稱謂代詞' : 'Pronoun'}</th>
                <th>{learningMode === 'zh' ? '適用對象與性別' : 'Target & Gender'}</th>
                <th>{learningMode === 'zh' ? '自稱搭配' : 'Reciprocal (Me)'}</th>
                <th>{learningMode === 'zh' ? '社交親密度' : 'Formality'}</th>
                <th>{learningMode === 'zh' ? '朗讀' : 'Audio'}</th>
              </tr>
            </thead>
            <tbody>
              {pronounKinshipData.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ fontWeight: 900, color: 'var(--brand-primary)', fontSize: '1.1em' }}>{row.pronoun}</td>
                  <td style={{ fontWeight: 600 }}>{learningMode === 'zh' ? row.targetZh : row.targetEn}</td>
                  <td style={{ fontWeight: 700, color: 'var(--brand-green)' }}>{row.reciprocal}</td>
                  <td><span className="tone-symbol" style={{ fontSize: '0.8em' }}>{row.level}</span></td>
                  <td>
                    <button
                      className="speaker-btn mini-btn"
                      onClick={() => handleSpeak(row.pronoun, `pr_tbl_${idx}`)}
                      title="朗讀"
                    >
                      <Volume2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
