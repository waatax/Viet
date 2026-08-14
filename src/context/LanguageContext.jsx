import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const translations = {
  zh: {
    brandName: '越語學習通',
    brandSub: 'Chào Việt Nam!',
    subsystemZh: '用中文學越文 (台越深度對照)',
    subsystemEn: 'Learn via English (Global Track)',
    switchSubsystem: '切換子系統',
    currentTrackBadge: '🇹🇼 中文學越文 (台越深度對照 · 含漢越音)',
    northAccent: '北越 (河內)',
    southAccent: '南越 (胡志明)',
    accentPref: '口音切換',
    streak: '連續打卡',
    days: '天',
    xp: 'XP',
    fontSize: '字體',
    sizeSmall: '小',
    sizeNormal: '中',
    sizeLarge: '大',
    sizeXLarge: '特大',
    lightTheme: '亮面主題',
    darkTheme: '暗面主題',
    tabs: {
      path: '0. 學習路徑總覽',
      alphabet: '1. 字母與6大聲調',
      accent: '2. 南北越口音對比',
      shopping: '3. 數字與貨幣換算',
      conversation: '4. 階梯情境會話',
      phrases: '5. 實用短句速查',
      flashcards: '6. 間隔記憶閃卡',
      grammar: '7. 語法與拼句練習',
      hanviet: '8. 漢越音百字根庫',
      pronoun: '9. 人稱稱謂推算器',
      quiz: '10. iVPT檢定測驗'
    },
    common: {
      listen: '播放發音',
      listenSlow: '慢速朗讀',
      listenNorth: '北越音朗讀',
      listenSouth: '南越音朗讀',
      listenPitch: '聲調音高合成',
      meaning: '釋義',
      example: '例句 / 單字',
      hint: '學習提示',
      ipa: '國際音標 (IPA)',
      rule: '發音/語法規則',
      practice: '開始練習',
      submit: '提交答案',
      reset: '重新整理',
      next: '下一題',
      prev: '上一題',
      finish: '完成測驗',
      result: '測驗結果',
      score: '得分',
      correct: '回答正確！',
      wrong: '回答錯誤，請再試一次',
      explanation: '解析與說明',
      category: '分類',
      searchPlaceholder: '搜尋單字、句子或中文意思...',
      filterAll: '全部顯示',
      mastered: '已掌握',
      unmastered: '需複習',
      cardFlipHint: '點擊卡片翻面查看釋義與例句'
    }
  },
  en: {
    brandName: 'VietMaster Pro',
    brandSub: 'Chào Việt Nam!',
    subsystemZh: 'Learn via Chinese (Han-Viet Mode)',
    subsystemEn: 'Learn via English (Global Track)',
    switchSubsystem: 'Switch Track',
    currentTrackBadge: '🌐 Learn Vietnamese via English (Global Track)',
    northAccent: 'North (Hanoi)',
    southAccent: 'South (Saigon)',
    accentPref: 'Accent Mode',
    streak: 'Streak',
    days: 'days',
    xp: 'XP',
    fontSize: 'Font',
    sizeSmall: 'S',
    sizeNormal: 'M',
    sizeLarge: 'L',
    sizeXLarge: 'XL',
    lightTheme: 'Light Theme',
    darkTheme: 'Dark Theme',
    tabs: {
      path: '0. Learning Path',
      alphabet: '1. Alphabet & 6 Tones',
      accent: '2. North vs South Dialects',
      shopping: '3. Numbers & VND Currency',
      conversation: '4. Situational Dialogues',
      phrases: '5. Essential Phrases',
      flashcards: '6. SRS Flashcards',
      grammar: '7. Grammar & Sentence Builder',
      hanviet: '8. Sino-Vietnamese Roots',
      pronoun: '9. Kinship & Pronoun Tool',
      quiz: '10. iVPT / CEFR Mock Exams'
    },
    common: {
      listen: 'Play Audio',
      listenSlow: 'Slow Audio',
      listenNorth: 'Northern Audio',
      listenSouth: 'Southern Audio',
      listenPitch: 'Tone Pitch Synth',
      meaning: 'Meaning',
      example: 'Example / Word',
      hint: 'Learning Hint',
      ipa: 'IPA Phonetics',
      rule: 'Rule & Notes',
      practice: 'Practice Now',
      submit: 'Submit Answer',
      reset: 'Reset',
      next: 'Next Question',
      prev: 'Previous',
      finish: 'Finish Quiz',
      result: 'Quiz Result',
      score: 'Score',
      correct: 'Correct! Excellent!',
      wrong: 'Incorrect, try again.',
      explanation: 'Explanation & Notes',
      category: 'Category',
      searchPlaceholder: 'Search vocabulary, phrases, meanings...',
      filterAll: 'All Categories',
      mastered: 'Mastered',
      unmastered: 'Needs Review',
      cardFlipHint: 'Click card to flip and view meaning & examples'
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [learningMode, setLearningMode] = useState(() => {
    return localStorage.getItem('viet_learning_mode') || 'zh';
  });

  useEffect(() => {
    localStorage.setItem('viet_learning_mode', learningMode);
    document.documentElement.setAttribute('data-learning-mode', learningMode);
  }, [learningMode]);

  const toggleLearningMode = () => {
    setLearningMode(prev => (prev === 'zh' ? 'en' : 'zh'));
  };

  const t = (keyPath) => {
    const keys = keyPath.split('.');
    let current = translations[learningMode];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        return keyPath;
      }
    }
    return current;
  };

  const loc = (obj, field = '') => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    if (field) {
      const zhVal = obj[`${field}Zh`] || obj[`${field}_zh`] || obj[field];
      const enVal = obj[`${field}En`] || obj[`${field}_en`] || obj[field];
      return learningMode === 'en' ? (enVal || zhVal) : (zhVal || enVal);
    }
    const zhVal = obj.zh || obj.meaningZh || obj.descZh || obj.nameZh || obj.titleZh || obj.textZh;
    const enVal = obj.en || obj.meaningEn || obj.descEn || obj.nameEn || obj.titleEn || obj.textEn;
    return learningMode === 'en' ? (enVal || zhVal) : (zhVal || enVal);
  };

  return (
    <LanguageContext.Provider value={{ learningMode, setLearningMode, toggleLearningMode, t, loc }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
