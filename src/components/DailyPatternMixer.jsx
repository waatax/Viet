import React, { useState, useMemo } from 'react';
import {
  Volume2, Snail, Copy, Check, Bookmark, Star, Sparkles,
  Maximize2, X, RefreshCw, Layers, ArrowRight, MessageSquare, Lightbulb, Compass
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { bookmarkService } from '../services/bookmarkService';
import { useLanguage } from '../context/LanguageContext';
import './DailyPatternMixer.css';

export const PATTERN_CATEGORIES = [
  {
    id: 'food_drink',
    icon: '🍜',
    titleZh: '飲品點餐客製機',
    titleEn: 'Food & Drink Order Mixer',
    descZh: '自由客製甜度、冰塊、配料與內用外帶，一秒生成道地點餐句！',
    slots: [
      {
        id: 'quantity',
        label: '數量量詞',
        options: [
          { textVi: 'Cho em một ly', textZh: '請給我一杯 (對年長者稱呼自稱 em)', audioText: 'Cho em một ly' },
          { textVi: 'Cho tôi một ly', textZh: '請給我一杯 (一般客氣通用)', audioText: 'Cho tôi một ly' },
          { textVi: 'Cho anh hai ly', textZh: '給我兩杯 (男士對較年輕店員自稱 anh)', audioText: 'Cho anh hai ly' },
          { textVi: 'Cho em một tô', textZh: '請給我一碗 (點河粉/湯麵專用量詞)', audioText: 'Cho em một tô' },
          { textVi: 'Cho em một ổ', textZh: '請給我一份 (點法國麵包專用量詞)', audioText: 'Cho em một ổ' }
        ]
      },
      {
        id: 'item',
        label: '餐點品項',
        options: [
          { textVi: 'cà phê sữa đá', textZh: '經典冰煉乳咖啡', audioText: 'cà phê sữa đá', tip: '越南國飲！以滴漏咖啡加厚甜煉乳與碎冰。' },
          { textVi: 'cà phê đen đá', textZh: '冰黑咖啡 (無奶濃苦)', audioText: 'cà phê đen đá', tip: '若不加糖請在甜度選 không đường。' },
          { textVi: 'trà đào cam sả', textZh: '蜜桃柳橙香茅冰茶', audioText: 'trà đào cam sả', tip: '越南年輕人最愛的消暑清爽果茶！' },
          { textVi: 'nước mía', textZh: '現壓鮮甘蔗汁', audioText: 'nước mía', tip: '街頭必喝，常加一顆小金桔提味！' },
          { textVi: 'phở bò tái', textZh: '生牛肉河粉 (滾湯燙熟薄牛肉片)', audioText: 'phở bò tái', tip: '最嫩的牛肉河粉吃法。' },
          { textVi: 'bánh mì thịt chả', textZh: '綜合火腿肉片法國麵包', audioText: 'bánh mì thịt chả', tip: '皮脆內軟，夾越南扎肉與醃蘿蔔。' }
        ]
      },
      {
        id: 'sugar',
        label: '甜度/配料客製',
        options: [
          { textVi: 'ít đường', textZh: '少糖', audioText: 'ít đường' },
          { textVi: 'không đường', textZh: '無糖 / 不要加糖', audioText: 'không đường' },
          { textVi: 'ít sữa', textZh: '少煉乳 (降低甜膩度)', audioText: 'ít sữa' },
          { textVi: 'không lấy hành', textZh: '不要加蔥 (河粉/熱食專用)', audioText: 'không lấy hành' },
          { textVi: 'không rau mùi', textZh: '不要香菜 (防香菜地雷口訣)', audioText: 'không rau mùi' },
          { textVi: 'ít cay', textZh: '微辣 / 少辣椒', audioText: 'ít cay' }
        ]
      },
      {
        id: 'ice_dining',
        label: '冰度 / 內用外帶',
        options: [
          { textVi: 'ít đá, mang về', textZh: '少冰，外帶包裝', audioText: 'ít đá, mang về' },
          { textVi: 'nhiều đá, uống tại chỗ', textZh: '多冰，在店內用', audioText: 'nhiều đá, uống tại chỗ' },
          { textVi: 'không đá, mang về', textZh: '去冰，外帶', audioText: 'không đá, mang về' },
          { textVi: 'đá riêng nhé', textZh: '冰塊分開包裝喔 (維持咖啡濃度神招)', audioText: 'đá riêng nhé' }
        ]
      }
    ],
    assemble: (s) => `${s.quantity.textVi} ${s.item.textVi}, ${s.sugar.textVi}, ${s.ice_dining.textVi}.`,
    meaningZh: (s) => `${s.quantity.textZh.split(' (')[0]}「${s.item.textZh.split(' (')[0]}」，${s.sugar.textZh.split(' (')[0]}，${s.ice_dining.textZh.split(' (')[0]}。`,
    loreZh: '💡 越南點餐黃金法則：越南咖啡預設甜度極高（滿滿煉乳），若平時喝微糖無糖，請務必養成說「ít sữa」或「không đường」的習慣！'
  },
  {
    id: 'market_price',
    icon: '💵',
    titleZh: '問價殺價與千盾省略',
    titleEn: 'Price & Colloquial VND Mixer',
    descZh: '掌握越南街頭最道地的「千盾 k」口語簡稱與四步禮貌殺價公式！',
    slots: [
      {
        id: 'inquiry',
        label: '詢價標的',
        options: [
          { textVi: 'Cái này bao nhiêu một ký?', textZh: '這個一公斤多少錢？(水果食材攤)', audioText: 'Cái này bao nhiêu một ký?' },
          { textVi: 'Trái xoài này tính sao chị?', textZh: '這芒果怎麼算呢姐姐？(親切生活口語)', audioText: 'Trái xoài này tính sao chị?' },
          { textVi: 'Bộ quần áo này giá bao nhiêu ạ?', textZh: '這套衣服價格多少呢？(夜市服飾攤)', audioText: 'Bộ quần áo này giá bao nhiêu ạ?' },
          { textVi: 'Cái nón này bao nhiêu tiền?', textZh: '這頂斗笠多少錢？(特產紀念品)', audioText: 'Cái nón này bao nhiêu tiền?' }
        ]
      },
      {
        id: 'colloquial_price',
        label: '口語省略報價 (聽辨)',
        options: [
          { textVi: 'Năm chục (50k)', textZh: '五萬盾 (口語 chục = 10，5 chục = 50k = 約 65 台幣)', audioText: 'Năm chục' },
          { textVi: 'Trăm rưỡi (150k)', textZh: '十五萬盾 (口語 trăm rưỡi = 一百五十千 = 150k = 約 195 台幣)', audioText: 'Trăm rưỡi' },
          { textVi: 'Hai trăm (200k)', textZh: '二十萬盾 (200k = 約 260 台幣)', audioText: 'Hai trăm' },
          { textVi: 'Tám chục (80k)', textZh: '八萬盾 (8 chục = 80k = 約 105 台幣)', audioText: 'Tám chục' }
        ]
      },
      {
        id: 'bargain',
        label: '禮貌還價對策',
        options: [
          { textVi: 'Đắt quá, bớt chút được không chị?', textZh: '太貴了，算便宜一點可以嗎姐姐？', audioText: 'Đắt quá, bớt chút được không chị?' },
          { textVi: 'Một trăm hai nhé, em lấy hai cái!', textZh: '算 120k 好嗎，我拿兩個！(以量換折扣)', audioText: 'Một trăm hai nhé, em lấy hai cái!' },
          { textVi: 'Khách quen mà, bớt đi chị nha!', textZh: '常客了嘛，算便宜點啦姐姐～ (南越親切軟磨)', audioText: 'Khách quen mà, bớt đi chị nha!' },
          { textVi: 'Được giá đó em mua luôn ạ.', textZh: '如果那價錢我就直接買囉。', audioText: 'Được giá đó em mua luôn ạ.' }
        ]
      }
    ],
    assemble: (s) => `${s.inquiry.textVi} — ${s.colloquial_price.textVi}. — ${s.bargain.textVi}`,
    meaningZh: (s) => `【問】${s.inquiry.textZh.split(' (')[0]} ➔ 【老闆答】${s.colloquial_price.textZh.split(' (')[0]} ➔ 【我回】${s.bargain.textZh.split(' (')[0]}`,
    loreZh: '💡 數字避坑心法：越南口語中，南部人超愛用「Chục（十）」代表一萬中的十，例如「hai chục」是 20k；「rưỡi（半）」代表前半位加五，例如「trăm rưỡi」是 150k、「hai triệu rưỡi」是 250 萬盾！'
  },
  {
    id: 'ride_delivery',
    icon: '🚕',
    titleZh: '叫車定位與外送指引',
    titleEn: 'Grab Ride & Delivery Calling',
    descZh: '搭 Grab、問路與外送員打電話確認位置的高頻救急句型組合！',
    slots: [
      {
        id: 'calling',
        label: '稱謂開場',
        options: [
          { textVi: 'Anh tài xế ơi,', textZh: '司機大哥你好，', audioText: 'Anh tài xế ơi,' },
          { textVi: 'Em ơi Grab giao hàng hả,', textZh: '小哥你是送 Grab 的對嗎，', audioText: 'Em ơi Grab giao hàng hả,' },
          { textVi: 'Bác tài ơi,', textZh: '司機伯伯/叔叔你好，(對年長司機極禮貌)', audioText: 'Bác tài ơi,' }
        ]
      },
      {
        id: 'location',
        label: '當前所在位置',
        options: [
          { textVi: 'em đang đứng trước cửa tòa nhà,', textZh: '我正站在大樓正門口，', audioText: 'em đang đứng trước cửa tòa nhà,' },
          { textVi: 'em đứng đối diện khách sạn,', textZh: '我站在飯店的正對面，', audioText: 'em đứng đối diện khách sạn,' },
          { textVi: 'em đang ở sảnh lễ tân tầng 1,', textZh: '我在一樓接待大廳，', audioText: 'em đang ở sảnh lễ tân tầng 1,' },
          { textVi: 'em đang đứng cạnh tiệm cà phê,', textZh: '我正站在咖啡店旁邊，', audioText: 'em đang đứng cạnh tiệm cà phê,' }
        ]
      },
      {
        id: 'action',
        label: '具體行動指示',
        options: [
          { textVi: 'anh đi theo định vị trên app nhé.', textZh: '請你照著 App 上的定位開過來喔。', audioText: 'anh đi theo định vị trên app nhé.' },
          { textVi: 'rẽ phải ở ngã tư phía trước giúp em.', textZh: '請在前方十字路口右轉。', audioText: 'rẽ phải ở ngã tư phía trước giúp em.' },
          { textVi: 'anh gửi ở bàn bảo vệ giúp em nhé.', textZh: '請幫我放在警衛管理室桌上喔。', audioText: 'anh gửi ở bàn bảo vệ giúp em nhé.' },
          { textVi: 'dừng lại ở lề đường bên phải giúp em.', textZh: '請幫我停在右側路邊靠邊放。', audioText: 'dừng lại ở lề đường bên phải giúp em.' }
        ]
      }
    ],
    assemble: (s) => `${s.calling.textVi} ${s.location.textVi} ${s.action.textVi}`,
    meaningZh: (s) => `${s.calling.textZh} ${s.location.textZh} ${s.action.textZh}`,
    loreZh: '💡 接司機電話救急訣竅：在越南叫 Grab 司機常會打電話確認「Em ở đâu? (你在哪？)」。只要說出「Trước cửa tòa nhà (大樓門口)」或「Theo định vị (照定位)」，司機就能秒懂定位！'
  },
  {
    id: 'particles_mood',
    icon: '💬',
    titleZh: '人稱與語氣尾助詞調色盤',
    titleEn: 'Pronouns & Mood Particles Mixer',
    descZh: '體會同一句話加上 ạ, nhé, nha, chứ, đi 的神韻差別，掌握最道地的親和力！',
    slots: [
      {
        id: 'subject',
        label: '核心情境主句',
        options: [
          { textVi: 'Cảm ơn anh', textZh: '感謝哥哥 / 多謝大哥', audioText: 'Cảm ơn anh' },
          { textVi: 'Em hiểu rồi', textZh: '我明白了 / 我懂了', audioText: 'Em hiểu rồi' },
          { textVi: 'Hẹn gặp lại', textZh: '再會 / 下次再相見', audioText: 'Hẹn gặp lại' },
          { textVi: 'Chúng mình đi ăn cơm', textZh: '我們去吃個飯', audioText: 'Chúng mình đi ăn cơm' },
          { textVi: 'Món này ngon quá', textZh: '這道菜真的好好吃', audioText: 'Món này ngon quá' }
        ]
      },
      {
        id: 'particle',
        label: '靈魂尾助詞 (語氣切換)',
        options: [
          { textVi: 'ạ!', textZh: '（ạ：晚輩對長輩/服務敬語，尊榮有禮滿分！）', audioText: 'ạ', tip: '越南文化最核心敬語標誌，加上立刻讓人感到家教極佳！' },
          { textVi: 'nhé!', textZh: '（nhé：北越經典親切確認、相約口吻「...喔！」）', audioText: 'nhé', tip: '相當於中文的「...好嗎？...喔！」，語氣平易近人。' },
          { textVi: 'nha~', textZh: '（nha：南越人最愛！柔和、親暱、撒嬌隨和）', audioText: 'nha', tip: '在胡志明市、峴港使用頻率最高，拉近人際距離的利器！' },
          { textVi: 'chứ?', textZh: '（chứ：反詰/確認口吻「...對吧？...是不是？」）', audioText: 'chứ', tip: '如 Ngon chứ? (好吃吧？)、Đi chứ? (去對吧？)。' },
          { textVi: 'đi!', textZh: '（đi：提議、催促「...快走吧！...去吧！」）', audioText: 'đi', tip: '表示邀請或催促行動，如 Đi thôi đi! (走啦走啦！)。' }
        ]
      }
    ],
    assemble: (s) => `${s.subject.textVi} ${s.particle.textVi}`,
    meaningZh: (s) => `${s.subject.textZh} ${s.particle.textZh}`,
    loreZh: '💡 尾助詞魔法：在越南，「ạ」代表極致尊崇（逢長輩必加）；「nhé」是北越好朋友的溫柔叮嚀；「nha」則是南越人甜美熱情的招牌！善用尾助詞，你的越南語立刻脫掉教科書機器味！'
  }
];

export const DailyPatternMixer = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode } = useLanguage();
  const [activeCatIndex, setActiveCatIndex] = useState(0);

  // Selections state per category: { [catId]: { [slotId]: optionIndex } }
  const [selections, setSelections] = useState({
    food_drink: { quantity: 0, item: 0, sugar: 0, ice_dining: 0 },
    market_price: { inquiry: 0, colloquial_price: 0, bargain: 0 },
    ride_delivery: { calling: 0, location: 0, action: 0 },
    particles_mood: { subject: 0, particle: 0 }
  });

  const [copied, setCopied] = useState(false);
  const [showLargeCard, setShowLargeCard] = useState(false);

  const currentCategory = PATTERN_CATEGORIES[activeCatIndex];
  const currentSlotSelection = selections[currentCategory.id] || {};

  // Build the current selected options objects
  const selectedOptions = useMemo(() => {
    const res = {};
    currentCategory.slots.forEach(slot => {
      const optIdx = currentSlotSelection[slot.id] || 0;
      res[slot.id] = slot.options[optIdx] || slot.options[0];
    });
    return res;
  }, [currentCategory, currentSlotSelection]);

  const assembledVi = useMemo(() => {
    return currentCategory.assemble(selectedOptions);
  }, [currentCategory, selectedOptions]);

  const assembledZh = useMemo(() => {
    return currentCategory.meaningZh(selectedOptions);
  }, [currentCategory, selectedOptions]);

  const handleSelectSlotOption = (slotId, optIndex) => {
    audioEngine.playHaptic('tap');
    setSelections(prev => ({
      ...prev,
      [currentCategory.id]: {
        ...(prev[currentCategory.id] || {}),
        [slotId]: optIndex
      }
    }));
  };

  const handleSpeakSentence = (slow = false) => {
    audioEngine.playHaptic('tap');
    const rate = slow ? 0.65 : 1.0;
    audioEngine.speak(assembledVi, { accent: selectedAccent, rate, lang: 'vi' });
    if (updateUserStats) updateUserStats(2);
  };

  const handleCopySentence = () => {
    navigator.clipboard?.writeText(`${assembledVi}\n${assembledZh}`);
    audioEngine.playHaptic('success');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleBookmark = () => {
    audioEngine.playHaptic('tap');
    bookmarkService.toggle({
      viet: assembledVi,
      chinese: assembledZh,
      english: assembledZh,
      category: '萬用開口槽位',
      source: currentCategory.titleZh
    });
  };

  const isBookmarked = bookmarkService.isBookmarked(assembledVi);

  return (
    <section className="daily-pattern-mixer" aria-labelledby="pattern-mixer-heading">
      {/* Category Tabs */}
      <div className="mixer-header">
        <div className="mixer-title-wrap">
          <div className="mixer-badge">
            <Sparkles size={13} />
            <span>{learningMode === 'zh' ? '即學即換 · 開口造句沙盒' : 'Interactive Pattern Slot Mixer'}</span>
          </div>
          <h3 id="pattern-mixer-heading" className="mixer-title">
            <span>🧩</span>
            <span>{learningMode === 'zh' ? '日常溝通萬能句型造句機' : 'Daily Communication Sentence Mixer'}</span>
          </h3>
          <p className="mixer-subtitle">
            {learningMode === 'zh'
              ? '擺脫死記硬背！點擊任意槽位自由抽換詞彙，秒產千萬種道地日常表達，支援雙速發音與街頭大字出示卡。'
              : 'Switch slots to assemble customized sentences for food ordering, bargaining, Grab rides, and modal particles.'}
          </p>
        </div>

        {/* Category Pills */}
        <div className="mixer-category-pills" role="tablist" aria-label="造句情境分類">
          {PATTERN_CATEGORIES.map((cat, idx) => {
            const isActive = activeCatIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`mixer-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  audioEngine.playHaptic('selection');
                  setActiveCatIndex(idx);
                }}
              >
                <span className="cat-icon">{cat.icon}</span>
                <span className="cat-text">{learningMode === 'zh' ? cat.titleZh : cat.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Slot Pickers */}
      <div className="mixer-slots-container">
        <div className="mixer-slot-group-title">
          <Layers size={15} />
          <span>{learningMode === 'zh' ? '點擊槽位詞彙進行即時替換：' : 'Tap to swap slot values:'}</span>
        </div>

        <div className="mixer-slots-grid">
          {currentCategory.slots.map(slot => {
            const currentIdx = currentSlotSelection[slot.id] || 0;
            return (
              <div key={slot.id} className="mixer-slot-col">
                <span className="slot-col-label">{slot.label}</span>
                <div className="slot-options-list">
                  {slot.options.map((opt, optIdx) => {
                    const isSelected = currentIdx === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        className={`slot-chip-btn ${isSelected ? 'selected' : ''}`}
                        onClick={() => handleSelectSlotOption(slot.id, optIdx)}
                        title={opt.tip || opt.textZh}
                      >
                        <span className="chip-vi">{opt.textVi}</span>
                        <span className="chip-zh">{opt.textZh.split(' (')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Real-Time Live Sentence Preview Card */}
      <div className="mixer-preview-card">
        <div className="preview-card-header">
          <div className="preview-status-tag">
            <span className="live-dot" />
            <span>{learningMode === 'zh' ? '即時合成造句' : 'Live Generated Sentence'}</span>
          </div>

          <div className="preview-action-btns">
            <button
              type="button"
              className="preview-tool-btn"
              onClick={handleCopySentence}
              title="複製越文與中文"
            >
              {copied ? <Check size={15} color="#10b981" /> : <Copy size={15} />}
              <span>{copied ? '已複製' : '複製'}</span>
            </button>

            <button
              type="button"
              className={`preview-tool-btn ${isBookmarked ? 'bookmarked' : ''}`}
              onClick={handleToggleBookmark}
              title="收藏此句至全站生詞本"
            >
              <Bookmark size={15} fill={isBookmarked ? '#eab308' : 'none'} color={isBookmarked ? '#eab308' : 'currentColor'} />
              <span>{isBookmarked ? '已收藏' : '收藏'}</span>
            </button>

            <button
              type="button"
              className="preview-tool-btn highlight"
              onClick={() => {
                audioEngine.playHaptic('selection');
                setShowLargeCard(true);
              }}
              title="在路上手機全螢幕大字出示給越南人看"
            >
              <Maximize2 size={15} />
              <span>出示給當地人看</span>
            </button>
          </div>
        </div>

        {/* Text Bodies */}
        <div className="preview-text-vi" lang="vi">
          {assembledVi}
        </div>
        <div className="preview-text-zh">
          {assembledZh}
        </div>

        {/* Audio Controls & Cultural Lore */}
        <div className="preview-card-footer">
          <div className="preview-audio-group">
            <button
              type="button"
              className="mixer-audio-btn standard"
              onClick={() => handleSpeakSentence(false)}
            >
              <Volume2 size={17} />
              <span>朗讀整句 (1.0x)</span>
            </button>

            <button
              type="button"
              className="mixer-audio-btn slow"
              onClick={() => handleSpeakSentence(true)}
              title="烏龜慢速播放，精確辨別 6 聲調調形走向"
            >
              <Snail size={17} />
              <span>慢速精聽 (0.65x)</span>
            </button>
          </div>

          <div className="preview-lore-box">
            <Lightbulb size={16} className="lore-icon" />
            <span>{currentCategory.loreZh}</span>
          </div>
        </div>
      </div>

      {/* Show-To-Local Fullscreen Modal Card */}
      {showLargeCard && (
        <div className="show-local-backdrop" onClick={() => setShowLargeCard(false)} role="dialog" aria-modal="true">
          <div className="show-local-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-top">
              <span className="modal-badge">📱 街頭出示字卡 · SHOW TO VIETNAMESE</span>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowLargeCard(false)}
                aria-label="關閉出示字卡"
              >
                <X size={22} />
              </button>
            </div>

            <div className="modal-large-vi" lang="vi">
              {assembledVi}
            </div>

            <div className="modal-sub-zh">
              {assembledZh}
            </div>

            <div className="modal-audio-actions">
              <button
                type="button"
                className="modal-speak-btn"
                onClick={() => handleSpeakSentence(false)}
              >
                <Volume2 size={24} />
                <span>大聲朗讀給對方聽</span>
              </button>
            </div>

            <p className="modal-bottom-hint">
              💡 提示：在路邊攤、計程車或嘈雜街頭，直接把手機螢幕亮給對方看即可順暢溝通！
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default DailyPatternMixer;
