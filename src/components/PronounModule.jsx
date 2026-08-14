import React, { useState, useEffect } from 'react';
import { Users, HelpCircle, CheckCircle, Volume2, Sparkles, UserCheck } from 'lucide-react';
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

  const computePronouns = () => {
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
        sampleEn: `Respectful greetings! Wishing you great health and happiness.`
      };
    }

    // Default: formal business
    return {
      you: targetGender === 'male' ? 'Ông / Anh' : 'Bà / Chị',
      youDescZh: '商務正式尊稱 (先生 / 女士)',
      youDescEn: 'Formal business title (Mr. / Ms.)',
      me: 'Tôi',
      meDescZh: '我 (正式中性自稱)',
      meDescEn: 'I / Me (Formal standard)',
      sampleVi: 'Rất hân hạnh được hợp tác với quý công ty.',
      sampleZh: '非常榮幸能與貴公司合作。',
      sampleEn: 'It is a great honor to cooperate with your esteemed company.'
    };
  };

  const result = computePronouns();

  const playSentence = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
    if (updateUserStats) updateUserStats(2);
  };

  return (
    <div className="module-container">
      {/* Header */}
      <div className="section-header">
        <h2 className="section-title">
          <Users color="var(--brand-primary)" />
          {learningMode === 'zh' ? '人稱代詞與稱謂智慧推算器 (Kinship Calculator)' : 'Kinship & Pronoun Intelligence Calculator'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '越南語沒有單純的 "You / I"，而是根據雙方的性別、年齡輩分與親疏關係動態確定稱呼！'
            : 'Vietnamese uses relational kinship terms instead of generic "You / I". Select relationship dynamics below to instantly compute exact pronouns.'}
        </p>
      </div>

      {/* Interactive Calculator Section */}
      <div className="simulator-box" style={{ background: 'var(--bg-card)', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles color="var(--brand-accent)" size={20} />
          {learningMode === 'zh' ? '⚡ 智慧稱謂即時推算' : '⚡ Live Relational Calculator'}
        </h3>

        {/* Input Selectors */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {/* 1. My Gender */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              {learningMode === 'zh' ? '1. 你的性別 (My Gender)：' : '1. Your Gender:'}
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`control-btn ${myGender === 'male' ? 'active' : ''}`}
                onClick={() => setMyGender('male')}
                style={{ flex: 1, padding: '0.6rem' }}
              >
                👨 {learningMode === 'zh' ? '男性 (Nam)' : 'Male'}
              </button>
              <button
                className={`control-btn ${myGender === 'female' ? 'active' : ''}`}
                onClick={() => setMyGender('female')}
                style={{ flex: 1, padding: '0.6rem' }}
              >
                👩 {learningMode === 'zh' ? '女性 (Nữ)' : 'Female'}
              </button>
            </div>
          </div>

          {/* 2. Target Gender */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              {learningMode === 'zh' ? '2. 對方的性別 (Target Gender)：' : '2. Target Gender:'}
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                className={`control-btn ${targetGender === 'male' ? 'active' : ''}`}
                onClick={() => setTargetGender('male')}
                style={{ flex: 1, padding: '0.6rem' }}
              >
                👨 {learningMode === 'zh' ? '男性 (Nam)' : 'Male'}
              </button>
              <button
                className={`control-btn ${targetGender === 'female' ? 'active' : ''}`}
                onClick={() => setTargetGender('female')}
                style={{ flex: 1, padding: '0.6rem' }}
              >
                👩 {learningMode === 'zh' ? '女性 (Nữ)' : 'Female'}
              </button>
            </div>
          </div>

          {/* 3. Relational Dynamic */}
          <div style={{ gridColumn: 'span 1' }}>
            <label style={{ display: 'block', fontSize: '0.85em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              {learningMode === 'zh' ? '3. 輩分與親疏關係：' : '3. Relational Dynamic:'}
            </label>
            <select
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="control-btn"
              style={{ width: '100%', padding: '0.6rem', background: 'var(--bg-main)' }}
            >
              <option value="older_peer">{learningMode === 'zh' ? '對方年紀稍長 (平輩哥姐)' : 'Older Peer (Brother / Sister)'}</option>
              <option value="younger_peer">{learningMode === 'zh' ? '對方年紀小於自己 (晚輩/弟妹)' : 'Younger Peer (Junior / Younger sibling)'}</option>
              <option value="same_age">{learningMode === 'zh' ? '同齡朋友 / 同學 (平輩無年齡差)' : 'Same Age Friend / Classmate'}</option>
              <option value="elder_uncle">{learningMode === 'zh' ? '長輩男性 (叔叔/伯父輩)' : 'Elder Male (Uncle / Senior)'}</option>
              <option value="elder_aunt">{learningMode === 'zh' ? '長輩女性 (阿姨/姑姑/女老師)' : 'Elder Female (Aunt / Teacher)'}</option>
              <option value="elder_grandparent">{learningMode === 'zh' ? '高齡長輩 (爺爺/奶奶輩)' : 'Senior Elder (Grandparent age)'}</option>
              <option value="formal_business">{learningMode === 'zh' ? '商務正式場合 (先生/女士尊稱)' : 'Formal Business (Mr. / Ms.)'}</option>
            </select>
          </div>
        </div>

        {/* Calculated Result Display Card */}
        <div style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.2rem' }}>
            {/* You Call Them */}
            <div style={{ borderLeft: '4px solid var(--brand-accent)', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 700 }}>
                {learningMode === 'zh' ? '👉 你稱呼對方為 (You)：' : '👉 You address them as:'}
              </div>
              <div style={{ fontSize: '1.8em', fontWeight: 900, color: 'var(--brand-accent)', margin: '0.2rem 0' }}>
                {result.you}
              </div>
              <div style={{ fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? result.youDescZh : result.youDescEn}
              </div>
            </div>

            {/* You Call Yourself */}
            <div style={{ borderLeft: '4px solid var(--brand-primary)', paddingLeft: '1rem' }}>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', fontWeight: 700 }}>
                {learningMode === 'zh' ? '👈 你自稱為 (I / Me)：' : '👈 You refer to yourself as:'}
              </div>
              <div style={{ fontSize: '1.8em', fontWeight: 900, color: 'var(--brand-primary)', margin: '0.2rem 0' }}>
                {result.me}
              </div>
              <div style={{ fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? result.meDescZh : result.meDescEn}
              </div>
            </div>
          </div>

          {/* Generated Live Example Sentence */}
          <div style={{ background: 'var(--bg-card)', padding: '1rem 1.25rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.8em', color: 'var(--brand-gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                {learningMode === 'zh' ? '💬 對話實例示範' : '💬 Contextual Example'}
              </div>
              <div style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--text-primary)' }}>
                {result.sampleVi}
              </div>
              <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                {learningMode === 'zh' ? result.sampleZh : result.sampleEn}
              </div>
            </div>
            <button
              className={`control-btn ${activeKey === 'calc_pronoun_sample' ? 'active' : ''}`}
              onClick={() => playSentence(result.sampleVi, 'calc_pronoun_sample')}
              style={{ background: 'var(--brand-primary)', color: '#fff', padding: '0.6rem 1rem' }}
            >
              <Volume2 size={16} />
              <span>{learningMode === 'zh' ? '聆聽示範' : 'Listen'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Reference Table */}
      <div>
        <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <UserCheck color="var(--brand-gold)" size={20} />
          {learningMode === 'zh' ? '越南語核心稱謂矩陣總表' : 'Vietnamese Master Kinship Matrix'}
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <thead>
              <tr style={{ background: 'var(--bg-accent)', textAlign: 'left', fontSize: '0.9em', color: 'var(--brand-gold)' }}>
                <th style={{ padding: '0.8rem 1rem' }}>{learningMode === 'zh' ? '稱謂 (Pronoun)' : 'Pronoun'}</th>
                <th style={{ padding: '0.8rem 1rem' }}>{learningMode === 'zh' ? '適用對象 (Target)' : 'Applies To'}</th>
                <th style={{ padding: '0.8rem 1rem' }}>{learningMode === 'zh' ? '自稱 (My Self)' : 'Self-reference'}</th>
                <th style={{ padding: '0.8rem 1rem' }}>{learningMode === 'zh' ? '語意解析 (Details)' : 'Listen'}</th>
              </tr>
            </thead>
            <tbody>
              {pronounKinshipData.map((item, idx) => {
                const itemKey = `pronoun_row_${idx}`;
                const isPlaying = activeKey === itemKey;
                return (
                  <tr key={idx} className={isPlaying ? 'row-highlight' : ''} style={{ borderBottom: '1px solid var(--border-color)', fontSize: '0.9em' }}>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 800, color: 'var(--brand-primary)', fontSize: '1.1em' }}>
                      {item.pronoun}
                    </td>
                    <td style={{ padding: '0.8rem 1rem', color: 'var(--text-primary)' }}>
                      {loc(item, 'desc')}
                    </td>
                    <td style={{ padding: '0.8rem 1rem', fontWeight: 700, color: 'var(--brand-accent)' }}>
                      {learningMode === 'zh' ? item.mySelfZh : item.mySelfEn}
                    </td>
                    <td style={{ padding: '0.8rem 1rem' }}>
                      <button
                        onClick={() => playSentence(`Chào ${item.pronoun} ạ`, itemKey)}
                        style={{ background: 'none', border: 'none', color: isPlaying ? 'var(--brand-primary)' : 'var(--brand-accent)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85em', fontWeight: isPlaying ? 700 : 500 }}
                      >
                        <Volume2 size={14} className={isPlaying ? 'playing-pulse' : ''} /> Chào {item.pronoun}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
