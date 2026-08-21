import React, { useState } from 'react';
import {
  LifeBuoy, Volume2, Search, Sparkles, Filter, ChevronRight, ShieldAlert,
  Utensils, Car, ShoppingBag, HeartPulse, Hotel, Users, Maximize2, X
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const EMERGENCY_CATEGORIES = [
  { id: 'all', labelZh: '全部急救卡', labelEn: 'All Cards', icon: '⚡' },
  { id: 'emergency', labelZh: '🚨 緊急求助 / 報案', labelEn: '🚨 Emergency & Police', icon: '🚨' },
  { id: 'dining', labelZh: '🍜 街頭點餐 / 咖啡', labelEn: '🍜 Dining & Drinks', icon: '🍜' },
  { id: 'transport', labelZh: '🚕 叫車搭車 / 問路', labelEn: '🚕 Taxi & Navigation', icon: '🚕' },
  { id: 'shopping', labelZh: '💵 購物殺價 / 算錢', labelEn: '💵 Shopping & Money', icon: '💵' },
  { id: 'health', labelZh: '💊 藥局看診 / 不適', labelEn: '💊 Pharmacy & Medical', icon: '💊' },
  { id: 'hotel', labelZh: '🏨 飯店入住 / 房務', labelEn: '🏨 Hotel & Living', icon: '🏨' },
  { id: 'social', labelZh: '🤝 禮貌社交 / 破冰', labelEn: '🤝 Polite Greetings', icon: '🤝' }
];

export const EMERGENCY_CARDS = [
  // 1. Emergency
  {
    category: 'emergency',
    viet: 'Cứu tôi với! (Giúp tôi với!)',
    zh: '救命！(請幫幫我！)',
    en: 'Help me please!',
    phonetic: 'Cứu tôi với / Giúp tôi với',
    situationZh: '發生緊急危險或需要周遭人立即協助時。',
    situationEn: 'In sudden danger or requiring immediate help.'
  },
  {
    category: 'emergency',
    viet: 'Làm ơn gọi cảnh sát / xe cấp cứu!',
    zh: '請幫我叫警察 / 叫救護車！',
    en: 'Please call the police / an ambulance!',
    phonetic: 'Làm ơn gọi cảnh sát (113) / cấp cứu (115)',
    situationZh: '遭遇意外或嚴重受傷時。警察113，救護車115。',
    situationEn: 'Accident or severe injury. Police 113, Ambulance 115.'
  },
  {
    category: 'emergency',
    viet: 'Tôi bị mất hộ chiếu / ví tiền.',
    zh: '我的護照 / 錢包遺失了。',
    en: 'I lost my passport / wallet.',
    phonetic: 'Hộ chiếu (護照) / Ví tiền (錢包)',
    situationZh: '在警局報案或向辦事處求助時。',
    situationEn: 'Reporting to police or consulate.'
  },

  // 2. Dining
  {
    category: 'dining',
    viet: 'Cho tôi một ly cà phê sữa đá, ít đường ít đá.',
    zh: '請給我一杯冰奶咖啡，少糖少冰。',
    en: 'Please give me an iced milk coffee, less sugar and less ice.',
    phonetic: 'Cà phê sữa đá + Ít đường + Ít đá',
    situationZh: '在任何越南咖啡店點出完美比例咖啡。',
    situationEn: 'Order perfect balanced Vietnamese coffee anywhere.'
  },
  {
    category: 'dining',
    viet: 'Em ơi! Cho anh/chị xem thực đơn (menu) với!',
    zh: '店員！請給我看一下菜單！',
    en: 'Excuse me! Please bring me the menu!',
    phonetic: 'Em ơi! Cho xem thực đơn (menu)',
    situationZh: '剛走進餐廳入座時呼喚服務生。',
    situationEn: 'Calling server to get the menu.'
  },
  {
    category: 'dining',
    viet: 'Món này không cay được không?',
    zh: '這道菜可以做不辣的嗎？',
    en: 'Can this dish be made non-spicy?',
    phonetic: 'Không cay (不辣) · Được không (可以嗎)',
    situationZh: '不吃辣或腸胃較弱時點餐必備。',
    situationEn: 'Essential for those who cannot eat chili.'
  },
  {
    category: 'dining',
    viet: 'Em ơi, tính tiền nha!',
    zh: '服務生，結帳喔！',
    en: 'Excuse me, check please!',
    phonetic: 'Tính tiền nha (南越最道地)',
    situationZh: '吃完飯示意結帳買單。',
    situationEn: 'Asking for the bill at a restaurant.'
  },

  // 3. Transport
  {
    category: 'transport',
    viet: 'Làm ơn cho tôi đến địa chỉ này.',
    zh: '請帶我到這個地址 (出示手機畫面)。',
    en: 'Please take me to this address.',
    phonetic: 'Cho tôi đến địa chỉ này',
    situationZh: '直接將手機地圖或地址秀給計程車/Grab司機看。',
    situationEn: 'Show destination address to driver on phone.'
  },
  {
    category: 'transport',
    viet: 'Đi thẳng, đến ngã tư rẽ trái / rẽ phải.',
    zh: '直走，到十字路口左轉 / 右轉。',
    en: 'Go straight, turn left / right at the intersection.',
    phonetic: 'Đi thẳng -> Ngã tư -> Rẽ trái / phải',
    situationZh: '在車上指揮司機行進方向。',
    situationEn: 'Directing the driver on the road.'
  },
  {
    category: 'transport',
    viet: 'Làm ơn dừng ở đây, tôi xuống xe.',
    zh: '請停在這裡，我要下車。',
    en: 'Please stop here, I will get off.',
    phonetic: 'Dừng ở đây (停在這裡)',
    situationZh: '抵達目的地示意靠邊停車。',
    situationEn: 'Tell driver to pull over for drop-off.'
  },

  // 4. Shopping
  {
    category: 'shopping',
    viet: 'Cái này bao nhiêu tiền? Bớt chút được không?',
    zh: '這個多少錢？可以算便宜一點嗎？',
    en: 'How much is this? Can you give a discount?',
    phonetic: 'Bao nhiêu tiền + Bớt chút được không',
    situationZh: '傳統市場、夜市殺價黃金神句。',
    situationEn: 'The golden combination for market shopping.'
  },
  {
    category: 'shopping',
    viet: 'Có thể thanh算 (thanh toán) bằng thẻ / chuyển khoản không?',
    zh: '可以刷信用卡或轉帳嗎？',
    en: 'Can I pay by card or bank transfer?',
    phonetic: 'Thanh toán bằng thẻ / Chuyển khoản',
    situationZh: '身上現金不足時確認付款方式。',
    situationEn: 'Confirming card or transfer payment.'
  },
  {
    category: 'shopping',
    viet: 'Tôi lấy cái này, cho tôi xin cái túi.',
    zh: '我要買這個，請給我一個提袋。',
    en: 'I will take this, please give me a bag.',
    phonetic: 'Tôi lấy cái này + Xin cái túi',
    situationZh: '決定購買打包。',
    situationEn: 'Purchasing and requesting a bag.'
  },

  // 5. Health & Medical
  {
    category: 'health',
    viet: 'Tôi bị đau đầu / đau bụng / sốt.',
    zh: '我頭痛 / 肚子痛 / 發燒。',
    en: 'I have a headache / stomachache / fever.',
    phonetic: 'Đau đầu (頭痛) / Đau bụng (腹痛) / Sốt (發燒)',
    situationZh: '在藥局買藥或醫院看診時描述症狀。',
    situationEn: 'Describing symptoms to pharmacist or doctor.'
  },
  {
    category: 'health',
    viet: 'Cho tôi mua thuốc giảm đau / thuốc cảm.',
    zh: '請給我止痛藥 / 感冒藥。',
    en: 'Please give me painkillers / cold medicine.',
    phonetic: 'Thuốc giảm đau (止痛藥) / Thuốc cảm (感冒藥)',
    situationZh: '在當地藥局 (Nhà thuốc) 買常備藥。',
    situationEn: 'Buying over-the-counter medicine at pharmacy.'
  },

  // 6. Hotel
  {
    category: 'hotel',
    viet: 'Tôi muốn nhận phòng (check-in) / trả phòng (check-out).',
    zh: '我要辦理入住 (Check-in) / 退房 (Check-out)。',
    en: 'I want to check in / check out.',
    phonetic: 'Nhận phòng (入住) / Trả phòng (退房)',
    situationZh: '在飯店櫃檯出示護照與訂單。',
    situationEn: 'Front desk reception procedures.'
  },
  {
    category: 'hotel',
    viet: 'Mật khẩu Wi-Fi của khách sạn là gì ạ?',
    zh: '請問飯店的 Wi-Fi 密碼是什麼呢？',
    en: 'What is the hotel Wi-Fi password?',
    phonetic: 'Mật khẩu (密碼) Wi-Fi',
    situationZh: '入住後詢問無線網路密碼。',
    situationEn: 'Asking for Wi-Fi credentials.'
  },
  {
    category: 'hotel',
    viet: 'Điều hòa / nước nóng trong phòng bị hỏng rồi.',
    zh: '房間裡的冷氣 / 熱水壞掉了。',
    en: 'The air conditioner / hot water in the room is broken.',
    phonetic: 'Điều hòa (冷氣) / Nước nóng (熱水) / Bị hỏng (壞掉)',
    situationZh: '房間設備出問題向櫃台報修。',
    situationEn: 'Reporting broken room amenities to front desk.'
  },

  // 7. Social
  {
    category: 'social',
    viet: 'Tôi không nói giỏi tiếng Việt, bạn nói tiếng Anh được không?',
    zh: '我越語說得不太好，請問你能說英語嗎？',
    en: 'I don\'t speak Vietnamese well, can you speak English?',
    phonetic: 'Nói tiếng Anh được không',
    situationZh: '溝通卡關時切換語言溝通。',
    situationEn: 'Politely switching to English.'
  },
  {
    category: 'social',
    viet: 'Bạn có thể giúp tôi một chút được không? Cảm ơn nhiều!',
    zh: '你能幫我一下嗎？非常感謝你！',
    en: 'Could you please help me a little? Thank you so much!',
    phonetic: 'Giúp tôi một chút (幫我一下)',
    situationZh: '向路人或店員尋求指引或協助。',
    situationEn: 'Politely asking a local for help.'
  }
];

export const EmergencyKitModule = ({ selectedAccent = 'north' }) => {
  const { learningMode } = useLanguage();
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fullscreenCard, setFullscreenCard] = useState(null);

  const filteredCards = EMERGENCY_CARDS.filter(card => {
    const matchesCat = selectedCat === 'all' || card.category === selectedCat;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    return (
      matchesCat &&
      (card.viet.toLowerCase().includes(q) ||
        card.zh.toLowerCase().includes(q) ||
        card.en.toLowerCase().includes(q) ||
        card.phonetic.toLowerCase().includes(q))
    );
  });

  const handleSpeak = (text, isSlow = false) => {
    audioEngine.speak(text, {
      accent: selectedAccent,
      rate: isSlow ? 0.75 : (selectedAccent === 'south' ? 1.04 : 0.96)
    });
  };

  return (
    <div className="module-container emergency-kit-module">
      {/* Hero Header */}
      <section className="emergency-hero" style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
        border: '1.5px solid rgba(239, 68, 68, 0.3)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div className="eyebrow" style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800 }}>
          <ShieldAlert size={18} /> {learningMode === 'zh' ? '生活溝通急救錦囊 · 一鍵出聲應急箱' : 'Vietnamese Survival Audio Kit'}
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.4rem 0 0.6rem' }}>
          {learningMode === 'zh' ? '街頭出差旅遊必備 · 點擊即刻發音' : 'Real-Life Survival Audio · Instant Tap to Speak'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.5, margin: 0, fontSize: '0.98rem' }}>
          {learningMode === 'zh'
            ? '遇到緊急狀況、點餐、搭車、看診或殺價時，直接點擊播放標準越南語，或放大螢幕直接出示給當地人看！'
            : 'One-tap audio playback with instant North/South accent toggle. Use fullscreen display mode to show directly to locals.'}
        </p>
      </section>

      {/* Search & Filter Bar */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 260px' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={learningMode === 'zh' ? '搜尋緊急求助、點餐、搭車、症狀或中文意思...' : 'Search emergency, dining, directions, symptoms...'}
            style={{ width: '100%', paddingLeft: '2.75rem' }}
          />
        </div>
      </div>

      {/* Category Filter Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {EMERGENCY_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            style={{
              padding: '0.55rem 1rem',
              borderRadius: 'var(--radius-full)',
              border: selectedCat === cat.id ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
              background: selectedCat === cat.id ? 'var(--bg-accent)' : 'var(--bg-card)',
              color: selectedCat === cat.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
              fontWeight: selectedCat === cat.id ? 800 : 600,
              cursor: 'pointer',
              fontSize: '0.88rem',
              transition: 'all 0.15s ease'
            }}
          >
            {learningMode === 'zh' ? cat.labelZh : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Emergency Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filteredCards.map((card, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1rem',
              transition: 'transform 0.15s ease'
            }}
          >
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--brand-primary)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                {card.viet}
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                {learningMode === 'zh' ? card.zh : card.en}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                📍 {learningMode === 'zh' ? card.situationZh : card.situationEn}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '0.85rem', marginTop: '0.2rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className="primary-action"
                  onClick={() => handleSpeak(card.viet, false)}
                  style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Volume2 size={16} /> {learningMode === 'zh' ? '發音' : 'Audio'}
                </button>
                <button
                  className="secondary-action"
                  onClick={() => handleSpeak(card.viet, true)}
                  style={{ padding: '0.45rem 0.75rem', fontSize: '0.82rem' }}
                >
                  {learningMode === 'zh' ? '慢速' : 'Slow'}
                </button>
              </div>

              <button
                className="secondary-action"
                onClick={() => setFullscreenCard(card)}
                title="放大螢幕出示給當地人看"
                style={{ padding: '0.45rem 0.65rem', color: 'var(--text-secondary)' }}
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Display Modal */}
      {fullscreenCard && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--brand-primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem 2rem',
            maxWidth: '540px',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.4)'
          }}>
            <button
              onClick={() => setFullscreenCard(null)}
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            >
              <X size={24} />
            </button>

            <div style={{ fontSize: '0.9rem', color: 'var(--brand-gold)', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem' }}>
              📱 出示此畫面給當地越南朋友看 (Show to locals)
            </div>

            <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--brand-primary)', lineHeight: 1.3, marginBottom: '1.5rem' }}>
              {fullscreenCard.viet}
            </div>

            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
              {learningMode === 'zh' ? fullscreenCard.zh : fullscreenCard.en}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button
                className="primary-action"
                onClick={() => handleSpeak(fullscreenCard.viet, false)}
                style={{ padding: '0.75rem 1.5rem', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Volume2 size={20} /> 播放標準發音
              </button>
              <button
                className="secondary-action"
                onClick={() => setFullscreenCard(null)}
                style={{ padding: '0.75rem 1.25rem' }}
              >
                關閉
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmergencyKitModule;
