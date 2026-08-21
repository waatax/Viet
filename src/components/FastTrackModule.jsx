import React, { useState, useEffect } from 'react';
import {
  Zap, Calendar, CheckCircle2, Circle, Volume2, Sparkles, Trophy,
  ArrowRight, ShieldCheck, HelpCircle, Heart, Star, Award, ChevronRight, Play, MessageSquare, Lightbulb, Users
} from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';

export const FAST_TRACK_DAYS = [
  {
    day: 1,
    titleZh: 'Day 1: 3秒禮貌社交破冰',
    titleEn: 'Day 1: 3-Second Polite Icebreaker',
    icon: '🤝',
    summaryZh: '掌握最核心的問候、道謝、道歉與應答，踏出開口第一步！',
    summaryEn: 'Master essential greetings, thanks, apologies, and polite responses.',
    canDoZh: '能在 3 秒內用最得體的禮貌語向任何越南人打招呼與致謝。',
    canDoEn: 'Greet and thank any Vietnamese speaker politely within 3 seconds.',
    proTipZh: '💡 魔法禮貌尾助詞「ạ」：在任何問候或回答句尾加上「ạ (阿)」（如 Dạ vâng ạ / Chào anh ạ），能讓你的禮貌度與長輩好感度瞬間提升 200%！',
    proTipEn: '💡 Magic Politeness Particle "ạ": Ending phrases with "ạ" (e.g. Dạ vâng ạ / Chào anh ạ) adds tremendous warmth and courtesy.',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Dạ, em chào anh ạ! Em tên là Minh.', zh: '您好哥哥！我的名字叫阿明。', en: 'Hello brother! My name is Minh.' },
      { speaker: 'B (Người Việt)', viet: 'Chào em! Rất vui được gặp em ở Việt Nam.', zh: '你好！很高興在越南見到你。', en: 'Hello! Very glad to meet you in Vietnam.' },
      { speaker: 'A (Bạn)', viet: 'Dạ, cảm ơn anh nhiều! Em mới học tiếng Việt.', zh: '好的，非常感謝哥！我剛開始學越南語。', en: 'Thank you very much! I just started learning Vietnamese.' },
      { speaker: 'B (Người Việt)', viet: 'Em nói tiếng Việt giỏi quá, cố lên nhé!', zh: '你越南語說得很棒喔，加油！', en: 'You speak Vietnamese very well, keep it up!' }
    ],
    phrases: [
      {
        viet: 'Xin chào!',
        zh: '你好！(通用)',
        en: 'Hello! (Universal)',
        hintZh: '發音如「心早」，任何場合皆適用的禮貌打招呼。',
        hintEn: 'Pronounced like "sin chow", safe for all standard greetings.',
        hanViet: '純越語 (Từ thuần Việt) · 禮貌問候'
      },
      {
        viet: 'Cảm ơn nhiều!',
        zh: '非常感謝！',
        en: 'Thank you very much!',
        hintZh: '「感恩」的漢越音，發音如「感溫」，加 nhiều 代表非常。',
        hintEn: 'Han-Viet for "Grateful" (Cảm ơn), "nhiều" means a lot.',
        hanViet: 'Cảm ơn (感恩 · 漢越詞) · nhiều (多 · 純越語)'
      },
      {
        viet: 'Xin lỗi nhé!',
        zh: '不好意思 / 對不起！',
        en: 'Excuse me / Sorry!',
        hintZh: '借過、不小心碰到人或叫服務生時極為好用。',
        hintEn: 'Use for apologies, excusing yourself, or getting attention.',
        hanViet: '純越語 (Từ thuần Việt) · 道歉 / 借過'
      },
      {
        viet: 'Dạ, vâng ạ.',
        zh: '好的 / 是的 (超有禮貌應答)',
        en: 'Yes, understood (very polite)',
        hintZh: '南越常說「Dạ (夜)」，北越常說「Vâng (問)」，句尾加「ạ (阿)」顯得極具教養。',
        hintEn: 'South prefers "Dạ", North prefers "Vâng", ending with "ạ" adds high respect.',
        hanViet: '純越語敬語助詞 · Dạ (南越) / Vâng (北越) / ạ (敬語尾助詞)'
      },
      {
        viet: 'Rất vui được gặp bạn!',
        zh: '很高興認識你！',
        en: 'Nice to meet you!',
        hintZh: '初次見面自我介紹後的絕佳結尾句。',
        hintEn: 'The perfect closing line after introducing yourself.',
        hanViet: '純越語 (Từ thuần Việt) · 禮貌結識句'
      }
    ],
    quiz: {
      questionZh: '在南越（如胡志明市）回答長輩或店員「好的、是的」，最親切禮貌的說法是？',
      questionEn: 'In Southern Vietnam, what is the polite way to say "Yes / Understood"?',
      optionsZh: ['A. Không', 'B. Dạ ạ', 'C. Đi đâu', 'D. Tạm biệt'],
      optionsEn: ['A. Không', 'B. Dạ ạ', 'C. Đi đâu', 'D. Tạm biệt'],
      answer: 1,
      explainZh: '南越人習慣用「Dạ (夜)」作為肯定與禮貌回覆，句尾加上「ạ」更顯親切尊重！',
      explainEn: '"Dạ" is the classic Southern polite affirmative, and "ạ" adds extra courtesy.'
    }
  },
  {
    day: 2,
    titleZh: 'Day 2: 點餐與越南咖啡魔術密碼',
    titleEn: 'Day 2: Ordering Food & Coffee Magic Codes',
    icon: '☕',
    summaryZh: '解鎖越南最著名的咖啡、法棍麵包與河粉點餐秘訣！',
    summaryEn: 'Unlock ordering secrets for Vietnamese iced coffee, Bánh mì, and Phở.',
    canDoZh: '能自在走進任何道地街頭小吃攤與咖啡館，精準點出想要的甜度冰塊。',
    canDoEn: 'Walk into any street stall or cafe and order with exact ice/sugar preferences.',
    proTipZh: '💡 咖啡甜度密碼：道地越式咖啡使用甜度極高的煉乳 (Sữa đặc)。如果怕太甜，一定要記得說「Ít đường (少糖)」或「Ít sữa (少煉乳)」！',
    proTipEn: '💡 Coffee Sweetness Secret: Traditional Vietnamese coffee uses condensed milk. Say "Ít sữa" (less condensed milk) if you prefer less sweetness.',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Em ơi! Cho anh một ly cà phê sữa đá, ít đường.', zh: '服務生！給我一杯冰煉乳咖啡，少糖。', en: 'Excuse me! One iced milk coffee, less sugar please.' },
      { speaker: 'B (Nhân viên)', viet: 'Dạ có ngay ạ! Anh có dùng thêm bánh mì không?', zh: '馬上來！哥哥要加點法國麵包嗎？', en: 'Coming right up! Would you like a Bánh mì as well?' },
      { speaker: 'A (Bạn)', viet: 'Cho anh thêm một ổ bánh mì thịt nguội nhé.', zh: '再給我一份火腿法國麵包喔。', en: 'Add one cold-cuts Bánh mì please.' },
      { speaker: 'B (Nhân viên)', viet: 'Dạ vâng, tổng cộng 45 nghìn đồng ạ.', zh: '好的，一共是四萬五千越盾。', en: 'Understood, total is 45,000 VND.' }
    ],
    phrases: [
      {
        viet: 'Cho tôi một ly Cà phê sữa đá.',
        zh: '請給我一杯冰煉乳咖啡。',
        en: 'Please give me one iced milk coffee.',
        hintZh: '經典越式冰咖啡！Cà phê (咖啡) + sữa (奶) + đá (冰)。',
        hintEn: 'The iconic Vietnamese drink: coffee + condensed milk + ice.',
        hanViet: 'Cà phê (法語借詞 Café) · Sữa (乳 · 純越語) · Đá (冰/石 · 純越語)'
      },
      {
        viet: 'Cho tôi một tô Phở bò.',
        zh: '請給我一碗牛肉河粉。',
        en: 'Please give me a bowl of beef Phở.',
        hintZh: 'Phở bò (牛肉河粉)，Phở gà (雞肉河粉)。',
        hintEn: 'Phở bò = Beef Phở; Phở gà = Chicken Phở.',
        hanViet: 'Phở (純越語/廣東話廣府河粉借詞) · Bò (牛 · 純越語)'
      },
      {
        viet: 'Không đường, ít đá nha!',
        zh: '不要糖，少冰喔！',
        en: 'No sugar, less ice please!',
        hintZh: '不想喝太甜時的救命口訣：Không đường (無糖), Ít đá (少冰)。',
        hintEn: 'Lifesaving custom order code: Không đường (no sugar), Ít đá (less ice).',
        hanViet: 'Không (空 · 漢越) · Đường (糖) · Ít (少 · 純越語) · Đá (冰 · 純越語)'
      },
      {
        viet: 'Có bánh mì không?',
        zh: '有越式法國麵包嗎？',
        en: 'Do you have Bánh mì?',
        hintZh: '「Có ... không?」是萬能問句：「有沒有...？」',
        hintEn: '"Có ... không?" is the universal question pattern for "Do you have...?"',
        hanViet: 'Có... không (純越語萬能問句) · Bánh mì (麵包)'
      },
      {
        viet: 'Ngon quá, cảm ơn nhé!',
        zh: '太好吃了，謝謝你！',
        en: 'So delicious, thank you!',
        hintZh: '誇獎店家好手藝：Ngon (好吃) + quá (太...了)。',
        hintEn: 'Compliment the chef: Ngon (delicious) + quá (so/too).',
        hanViet: 'Ngon (純越語美味) · Quá (過 · 漢越) · Cảm ơn (感恩 · 漢越)'
      }
    ],
    quiz: {
      questionZh: '在咖啡店點咖啡時，想要「少冰、不加糖」，該怎麼說？',
      questionEn: 'How do you say "Less ice, no sugar" at a cafe?',
      optionsZh: ['A. Cho tôi phở gà', 'B. Ít đá, không đường', 'C. Bao nhiêu tiền', 'D. Xin lỗi nhé'],
      optionsEn: ['A. Cho tôi phở gà', 'B. Ít đá, không đường', 'C. Bao nhiêu tiền', 'D. Xin lỗi nhé'],
      answer: 1,
      explainZh: 'Ít đá (少冰) + không đường (無糖/不要糖)，是健康少負擔點飲品的黃金組合！',
      explainEn: '"Ít đá" (less ice) + "không đường" (no sugar) is the golden combo for beverages!'
    }
  },
  {
    day: 3,
    titleZh: 'Day 3: 市場殺價與數字貨幣秒算',
    titleEn: 'Day 3: Market Bargaining & VND Numbers',
    icon: '💵',
    summaryZh: '攻克百萬越南盾換算，享受夜市與傳統市場自在購物的樂趣！',
    summaryEn: 'Master million-VND currency conversions and bargain like a pro.',
    canDoZh: '能聽懂店家報價，並自然提出合理的折扣請求。',
    canDoEn: 'Understand price quotes and politely ask for standard discounts.',
    proTipZh: '💡 鈔票防搞混口訣：越南盾 50 萬盾 (500k) 與 2 萬盾 (20k) 都是藍色！付款時請務必看清楚後面的零 (000)，避免多付一個零！',
    proTipEn: '💡 Banknote Caution: 500,000 VND and 20,000 VND are both blue notes! Always count the zeros carefully before handing over cash.',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Chị ơi, cái áo này bao nhiêu tiền?', zh: '姐姐，這件衣服多少錢？', en: 'Sister, how much is this shirt?' },
      { speaker: 'B (Chủ quán)', viet: 'Một trăm năm mươi nghìn (150k) em ơi.', zh: '十五萬盾喔弟弟。', en: '150,000 VND, dear.' },
      { speaker: 'A (Bạn)', viet: 'Đắt quá! Bớt chút được không? Một trăm nghìn (100k) nha!', zh: '太貴了！可以算便宜點嗎？十萬盾好嗎！', en: 'Too expensive! Can you discount? 100k okay?' },
      { speaker: 'B (Chủ quán)', viet: 'Thôi được rồi, mở hàng cho em 100k đó!', zh: '好吧，算你開市價 100k 賣給你！', en: 'Alright, opening special for you 100k!' }
    ],
    phrases: [
      {
        viet: 'Cái này bao nhiêu tiền?',
        zh: '這個多少錢？',
        en: 'How much is this?',
        hintZh: '萬能問價句！Cái này (這個) + bao nhiêu tiền (多少錢)。',
        hintEn: 'Universal price inquiry: Cái này (this) + bao nhiêu tiền (how much money).',
        hanViet: 'Bao nhiêu (多少 · 純越語) · Tiền (錢 · 漢越詞)'
      },
      {
        viet: 'Năm mươi nghìn (50k) đồng.',
        zh: '五萬越盾 (約 65 台幣)。',
        en: 'Fifty thousand VND (~$2 USD).',
        hintZh: '越南人口語常省略千位說「50k (năm mươi)」。南越說「ngàn」，北越說「nghìn」。',
        hintEn: 'Often shortened to "50k". South says "ngàn", North says "nghìn".',
        hanViet: 'Năm mươi (五十) · Đồng (銅 · 漢越詞)'
      },
      {
        viet: 'Đắt quá! Bớt chút được không?',
        zh: '太貴了！可以算便宜一點嗎？',
        en: 'Too expensive! Can you give a discount?',
        hintZh: '親切微笑說這句，店家往往樂意去零頭或給折扣！',
        hintEn: 'Say this with a warm smile for an instant discount!',
        hanViet: 'Đắt (貴 · 純越語) · Bớt (減 · 純越語) · Được không (行嗎)'
      },
      {
        viet: 'Một trăm nghìn (100k) được không?',
        zh: '十萬盾可以嗎？',
        en: 'Is 100k VND okay?',
        hintZh: '直接提出心中的理想還價金額。',
        hintEn: 'Directly offer your target price politely.',
        hanViet: 'Một trăm (一百 · 純越數詞)'
      },
      {
        viet: 'Tôi lấy cái này, tính tiền nha.',
        zh: '我要買這個，結帳喔。',
        en: 'I will take this, bill please.',
        hintZh: '決定購買並示意結帳的乾脆說法。',
        hintEn: 'Ready to buy and asking for the bill.',
        hanViet: 'Lấy (拿 · 純越語) · Tính tiền (算錢 · Tính: 算/Tiền: 錢)'
      }
    ],
    quiz: {
      questionZh: '在市場買伴手禮想向老闆請求算便宜一點，最實用的短句是？',
      questionEn: 'What is the most practical phrase to ask for a discount at a market?',
      optionsZh: ['A. Bớt chút được không?', 'B. Tôi không biết', 'C. Xin chào bạn', 'D. Rất vui'],
      optionsEn: ['A. Bớt chút được không?', 'B. Tôi không biết', 'C. Xin chào bạn', 'D. Rất vui'],
      answer: 0,
      explainZh: '「Bớt chút được không?」(減一點好嗎？) 是全越南通用的溫和殺價神句！',
      explainEn: '"Bớt chút được không?" (Can you reduce a little?) is universally understood.'
    }
  },
  {
    day: 4,
    titleZh: 'Day 4: 計程車、Grab 與問路導航',
    titleEn: 'Day 4: Taxi, Grab & Directions',
    icon: '🚕',
    summaryZh: '出門搭車不迷路！精準指揮司機直走、轉彎與停車。',
    summaryEn: 'Navigate taxis, Grab, and street directions with full confidence.',
    canDoZh: '能流暢告訴司機要去哪裡，並在抵達時示意靠邊停車。',
    canDoEn: 'Tell drivers destinations and instruct them where to turn and stop.',
    proTipZh: '💡 Grab 叫車安全：在越南叫 GrabBike（機車）時，司機會提供安全帽 (Mũ bảo hiểm)，上車前請確認扣緊扣帶；下車時說聲「Đến nơi rồi, cảm ơn anh!」非常道地。',
    proTipEn: '💡 Grab Travel Tip: Always fasten your helmet strap on GrabBike. Say "Đến nơi rồi, cảm ơn anh!" when you arrive.',
    dialogue: [
      { speaker: 'A (Tài xế)', viet: 'Chào anh, anh muốn đi đến đâu ạ?', zh: '你好先生，您要去哪裡呢？', en: 'Hello, where would you like to go?' },
      { speaker: 'B (Bạn)', viet: 'Cho tôi đến chợ Bến Thành, đi thẳng đường này nhé.', zh: '請帶我到濱城市場，沿這條路直走喔。', en: 'To Ben Thanh Market please, go straight along this street.' },
      { speaker: 'A (Tài xế)', viet: 'Đến ngã tư này rẽ trái hay rẽ phải anh?', zh: '到這個十字路口要左轉還是右轉呢？', en: 'Turn left or right at this intersection?' },
      { speaker: 'B (Bạn)', viet: 'Rẽ phải, rồi dừng ở trước cổng chợ giúp tôi!', zh: '右轉，然後幫我停在市場大門前！', en: 'Turn right, then stop in front of the market gate!' }
    ],
    phrases: [
      {
        viet: 'Cho tôi đến chợ Bến Thành.',
        zh: '請帶我到濱城市場。',
        en: 'Please take me to Ben Thanh Market.',
        hintZh: 'Cho tôi đến + [地點] = 請帶我去某地。',
        hintEn: '"Cho tôi đến + [Place]" = Please take me to [Place].',
        hanViet: 'Chợ (市/市場 · 純越語) · Bến Thành (漢越: 邊城)'
      },
      {
        viet: 'Đi thẳng, rồi rẽ trái / rẽ phải.',
        zh: '直走，然後左轉 / 右轉。',
        en: 'Go straight, then turn left / turn right.',
        hintZh: 'Đi thẳng (直走), rẽ trái (左轉), rẽ phải (右轉)。',
        hintEn: 'Đi thẳng (straight), rẽ trái (left), rẽ phải (right).',
        hanViet: 'Đi thẳng (直走) · rẽ trái (左轉) · rẽ phải (右轉 · 純越語方向詞)'
      },
      {
        viet: 'Dừng ở đây nhé!',
        zh: '請停在這裡喔！',
        en: 'Please stop here!',
        hintZh: '看到目的地時提醒司機靠邊停車。',
        hintEn: 'Tell the driver to pull over and stop right here.',
        hanViet: 'Dừng (停 · 純越語) · ở đây (在此)'
      },
      {
        viet: 'Bao xa nữa thì đến?',
        zh: '還要多久/多遠才會到？',
        en: 'How much further until we arrive?',
        hintZh: '詢問剩餘路程與時間。',
        hintEn: 'Inquire about remaining distance and time.',
        hanViet: 'Xa (遠 · 純越語) · đến (到 · 純越語)'
      },
      {
        viet: 'Đến nơi rồi, cảm ơn anh!',
        zh: '到了，謝謝司機大哥！',
        en: 'We have arrived, thank you!',
        hintZh: '下車時的完美致謝。',
        hintEn: 'Polite farewell to driver upon arrival.',
        hanViet: 'Đến nơi (抵達 · 純越語) · Cảm ơn (感恩 · 漢越詞)'
      }
    ],
    quiz: {
      questionZh: '在 Grab 車上想告訴司機「在前面左轉」，應該使用哪個單字？',
      questionEn: 'Which phrase means "Turn left" in Vietnamese?',
      optionsZh: ['A. Đi thẳng', 'B. Rẽ trái', 'C. Rẽ phải', 'D. Dừng lại'],
      optionsEn: ['A. Đi thẳng', 'B. Rẽ trái', 'C. Rẽ phải', 'D. Dừng lại'],
      answer: 1,
      explainZh: 'Rẽ trái 是左轉，Rẽ phải 是右轉，Đi thẳng 是直走！',
      explainEn: '"Rẽ trái" = Turn left, "Rẽ phải" = Turn right, "Đi thẳng" = Go straight!'
    }
  },
  {
    day: 5,
    titleZh: 'Day 5: 稱謂神算與人際搞定術',
    titleEn: 'Day 5: Kinship Pronouns & Social Magic',
    icon: '👥',
    summaryZh: '徹底攻克越南人際稱謂系統，叫對稱呼好感度瞬間爆表！',
    summaryEn: 'Master Vietnamese kinship pronouns so you address everyone with charm.',
    canDoZh: '面對不同年齡層能 1 秒內切換 Anh, Chị, Em, Cô, Chú, Bác。',
    canDoEn: 'Switch smoothly between Anh, Chị, Em, Cô, Chú, Bác based on age and respect.',
    proTipZh: '💡 稱呼年齡黃金法則：面對餐廳年輕店員，一律親切呼喚「Em ơi!」；面對稍年長者稱呼「Anh ơi / Chị ơi」；長輩一律尊稱「Chú / Cô / Bác」。',
    proTipEn: '💡 Golden Pronoun Rule: Call restaurant servers "Em ơi!", older peers "Anh/Chị", and elders "Chú/Cô/Bác".',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Cháu chào Bác ạ! Bác có khỏe không?', zh: '晚輩向伯伯問好！伯伯身體好嗎？', en: 'Hello Uncle! How are you doing?' },
      { speaker: 'B (Bác)', viet: 'Chào cháu! Bác khỏe, cháu sang chơi vui không?', zh: '你好！伯伯很好，你在這裡玩得開心嗎？', en: 'Hello! I am well, having fun here?' },
      { speaker: 'A (Bạn)', viet: 'Dạ, cháu rất thích Việt Nam, con người ở đây rất thân thiện ạ.', zh: '是的，晚輩非常喜歡越南，這裡的人都很友善！', en: 'Yes, I really love Vietnam, the people here are so friendly.' },
      { speaker: 'B (Bác)', viet: 'Tốt quá, khi nào rảnh lại ghé nhà Bác chơi nhé!', zh: '太好了，有空再來伯伯家坐坐！', en: 'Wonderful, visit us again when you are free!' }
    ],
    phrases: [
      {
        viet: 'Chào Anh / Chào Chị!',
        zh: '哥哥好 / 姐姐好 (同輩年輕男女尊稱)。',
        en: 'Hello older brother / older sister (polite peer).',
        hintZh: '面對比自己稍長或初次見面的服務人員最得體的稱呼。',
        hintEn: 'Safe polite greeting for slightly older peers or restaurant staff.',
        hanViet: 'Anh (兄 · 漢越同源) · Chị (姊 · 純越語親屬詞)'
      },
      {
        viet: 'Em chào Bác / Chào Cô ạ!',
        zh: '晚輩向長輩伯伯 / 阿姨問好！',
        en: 'Greeting senior gentlemen (Bác) or ladies (Cô).',
        hintZh: '面對長輩父母年紀者，自稱 Em 或 Cháu，稱呼對方 Bác/Cô/Chú。',
        hintEn: 'Use Bác/Cô/Chú for elders, referring to yourself as Em or Cháu.',
        hanViet: 'Bác (伯 · 漢越同源) · Cô (姑 · 漢越同源) · Chú (叔 · 漢越同源)'
      },
      {
        viet: 'Em ơi, cho anh/chị gọi món!',
        zh: '服務生小弟/小妹，我要點餐！',
        en: 'Excuse me, I would like to order!',
        hintZh: '越南餐廳召喚店員的萬靈丹：「Em ơi!」(像台語親切呼喚)。',
        hintEn: '"Em ơi!" is the universal pleasant call for restaurant servers.',
        hanViet: 'Ơi (親切呼喚助詞 · 純越語) · Gọi món (點菜)'
      },
      {
        viet: 'Anh/Chị tên là gì?',
        zh: '請問您的大名叫什麼？',
        en: 'What is your name?',
        hintZh: '詢問對方姓名，得體又親切。',
        hintEn: 'Politely ask the other person their name.',
        hanViet: 'Tên (名 · 純越語) · là gì (是什麼 · 純越語)'
      },
      {
        viet: 'Tôi là người Đài Loan.',
        zh: '我是台灣人。',
        en: 'I am Taiwanese.',
        hintZh: '介紹國籍出處：Tôi là người + [國家]。',
        hintEn: 'State nationality: "Tôi là người..."',
        hanViet: 'Đài Loan (台灣 · 漢越詞) · Người (人 · 純越語)'
      }
    ],
    quiz: {
      questionZh: '在越南餐廳想要呼喚年輕的服務生過來點餐或加水，最自然地道的說法是？',
      questionEn: 'How do you naturally call a server at a Vietnamese restaurant?',
      optionsZh: ['A. Bác ơi!', 'B. Em ơi!', 'C. Tạm biệt!', 'D. Cảm ơn!'],
      optionsEn: ['A. Bác ơi!', 'B. Em ơi!', 'C. Tạm biệt!', 'D. Cảm ơn!'],
      answer: 1,
      explainZh: '「Em ơi!」是越南全境呼喚餐廳年輕服務生最親切有禮貌的經典口語！',
      explainEn: '"Em ơi!" is the standard, friendly way to call waitstaff in Vietnam.'
    }
  },
  {
    day: 6,
    titleZh: 'Day 6: 便利超商與逛街結帳',
    titleEn: 'Day 6: Convenience Store & Shopping Checkout',
    icon: '🛍️',
    summaryZh: '超商買水、買生活用品、刷卡與發票生活實戰。',
    summaryEn: 'Convenience store shopping, paying with card or cash, and receipts.',
    canDoZh: '在超商或商場能獨立找到商品、確認付款方式並順利完成結帳。',
    canDoEn: 'Find items, confirm payment methods, and complete purchases independently.',
    proTipZh: '💡 掃碼支付盛行：越南連鎖超商 (WinMart, GS25, Circle K) 幾乎全面支援 VietQR 與 MoMo 電子支付，可直接問「Quét mã QR được không? (可以掃碼嗎？)」。',
    proTipEn: '💡 QR Payment: Convenience stores widely accept VietQR and MoMo. Ask "Quét mã QR được không?" to pay via QR code.',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Em ơi, cho anh lấy chai nước suối này và bao bánh quy.', zh: '店員，我要買這瓶礦泉水和這包餅乾。', en: 'One bottle of water and this biscuit packet please.' },
      { speaker: 'B (Thu ngân)', viet: 'Dạ của anh hết ba mươi nghìn đồng (30k).', zh: '好的，一共是三萬越盾。', en: 'Total is 30,000 VND.' },
      { speaker: 'A (Bạn)', viet: 'Anh quét mã VietQR thanh toán nhé.', zh: '我掃 VietQR 條碼付款喔。', en: 'I will scan VietQR code to pay.' },
      { speaker: 'B (Thu ngân)', viet: 'Dạ được ạ, mã ở đây. Cho em gửi hóa đơn!', zh: '好的，條碼在這裡。發票收據給您！', en: 'Sure, code is here. Here is your receipt!' }
    ],
    phrases: [
      {
        viet: 'Có nước suối không em?',
        zh: '有礦泉水嗎？',
        en: 'Do you have bottled water?',
        hintZh: 'Nước suối (礦泉水)，Nước ngọt (汽水飲料)。',
        hintEn: 'Nước suối = Bottled water; Nước ngọt = Soft drinks.',
        hanViet: 'Nước suối (泉水/礦泉水 · 純越語)'
      },
      {
        viet: 'Có thể thanh toán bằng thẻ không?',
        zh: '可以用信用卡付款嗎？',
        en: 'Can I pay by credit card?',
        hintZh: 'Thanh toán (結算/付款) + thẻ (卡片)。',
        hintEn: 'Thanh toán (Han-Viet for pay/settle) + thẻ (card).',
        hanViet: 'Thanh toán (清算/結帳 · 漢越詞) · Thẻ (卡片)'
      },
      {
        viet: 'Cho tôi xin cái túi / hóa đơn.',
        zh: '請給我一個提袋 / 發票收據。',
        en: 'Please give me a bag / receipt.',
        hintZh: 'Túi (提袋), Hóa đơn (發票/收據)。',
        hintEn: 'Túi = bag; Hóa đơn = invoice/receipt.',
        hanViet: 'Hóa đơn (貨單/發票 · 漢越詞: Hóa = 貨 goods, Đơn = 單) · Túi (提袋)'
      },
      {
        viet: 'Tôi có thể thử cái này được không?',
        zh: '我可以試穿/試用這個嗎？',
        en: 'Can I try this on / try this?',
        hintZh: '在服飾店或鞋店非常實用。',
        hintEn: 'Essential for clothing and shoe stores.',
        hanViet: 'Thử (試/嘗試 · 漢越詞)'
      },
      {
        viet: 'Đủ tiền rồi, cảm ơn em nhé!',
        zh: '錢剛好，謝謝你！',
        en: 'Exact amount, thank you!',
        hintZh: '付完零錢或現金時的禮貌回饋。',
        hintEn: 'Polite remark when handing exact cash.',
        hanViet: 'Đủ (足夠 · 純越語) · Tiền (錢 · 漢越詞)'
      }
    ],
    quiz: {
      questionZh: '在超商或商場想詢問「能不能刷卡結帳」，關鍵詞「Thanh toán」對應的漢越音是？',
      questionEn: 'What is the Han-Viet cognate origin of "Thanh toán" (to pay)?',
      optionsZh: ['A. 清算 / 結算', 'B. 談判 / 商討', 'C. 探險 / 尋找', 'D. 感謝 / 報恩'],
      optionsEn: ['A. Settle / Pay (清算)', 'B. Negotiate (談判)', 'C. Explore (探險)', 'D. Thank (感謝)'],
      answer: 0,
      explainZh: '「Thanh toán」正是漢字「清算」的音讀，現代越南語中廣泛表示「結帳、付款」！',
      explainEn: '"Thanh toán" comes from Han-Viet "清算" and means to pay/settle the bill!'
    }
  },
  {
    day: 7,
    titleZh: 'Day 7: 社交閒聊與結交越南好友',
    titleEn: 'Day 7: Small Talk & Making Local Friends',
    icon: '💬',
    summaryZh: '聊家鄉、交換 Zalo、相約喝咖啡，建立深厚跨國友誼！',
    summaryEn: 'Chat about hometowns, exchange Zalo, meet for coffee, make lifelong friends!',
    canDoZh: '能自信進行 5 分鐘生活閒聊，並順利交換聯絡方式。',
    canDoEn: 'Engage in a 5-minute casual conversation and exchange social contacts.',
    proTipZh: '💡 「Đi cà phê nhé!」文化意涵：在越南，邀請別人「去喝咖啡」不一定真的只喝咖啡，而是泛指「放鬆見面閒聊聚會」的國民社交暗號！',
    proTipEn: '💡 "Đi cà phê" Culture: Inviting someone for coffee is the universal Vietnamese social code for hanging out and catching up.',
    dialogue: [
      { speaker: 'A (Bạn)', viet: 'Quê bạn ở đâu vậy? Bạn ở Sài Gòn lâu chưa?', zh: '你的家鄉在哪裡呢？你在西貢很久了嗎？', en: 'Where is your hometown? Have you lived in Saigon long?' },
      { speaker: 'B (Bạn Việt)', viet: 'Quê mình ở Đà Nẵng, mình vào Sài Gòn làm việc 3 năm rồi.', zh: '我家鄉在峴港，我來西貢工作三年了。', en: 'My hometown is Da Nang, I have worked in Saigon for 3 years.' },
      { speaker: 'A (Bạn)', viet: 'Ồ tuyệt quá! Khi nào rảnh, mình đi cà phê nhé!', zh: '哇太棒了！有空的時候，我們一起去喝咖啡吧！', en: 'Oh wonderful! When you are free, let us go for coffee!' },
      { speaker: 'B (Bạn Việt)', viet: 'Nhất trí luôn! Kết bạn Zalo với mình nha!', zh: '完全贊同！加我的 Zalo 好友吧！', en: 'Totally agreed! Let us connect on Zalo!' }
    ],
    phrases: [
      {
        viet: 'Quê bạn ở đâu?',
        zh: '你的家鄉在哪裡？',
        en: 'Where is your hometown?',
        hintZh: '越南人非常熱情，聊到家鄉 (Quê) 馬上話題不斷！',
        hintEn: 'Vietnamese people love sharing about their hometown province.',
        hanViet: 'Quê (家鄉/故鄉 · 純越語) · ở đâu (在哪裡)'
      },
      {
        viet: 'Bạn thích ăn món Việt nào nhất?',
        zh: '你最喜歡吃哪道越南菜？',
        en: 'What is your favorite Vietnamese food?',
        hintZh: 'Thích (喜歡) + nhất (第一/最)。',
        hintEn: 'Thích (to like) + nhất (Han-Viet for most/number one).',
        hanViet: 'Thích (喜歡 · 漢越詞: 適) · Nhất (一/最 · 漢越詞)'
      },
      {
        viet: 'Khi nào rảnh, mình đi cà phê nhé!',
        zh: '有空的時候，我們一起去喝咖啡吧！',
        en: 'When you are free, let us go for coffee!',
        hintZh: '越南社交最經典的邀約金句！',
        hintEn: 'The quintessential Vietnamese invitation to hang out!',
        hanViet: 'Rảnh (有空/閒暇 · 純越語) · Đi cà phê (喝咖啡/聚會)'
      },
      {
        viet: 'Kết bạn Zalo / Facebook với mình nha!',
        zh: '加我的 Zalo / Facebook 好友吧！',
        en: 'Let us connect on Zalo / Facebook!',
        hintZh: 'Zalo 是越南最普及的通訊軟體 (類似台灣 LINE)。',
        hintEn: 'Zalo is the most popular messaging app in Vietnam (like LINE).',
        hanViet: 'Kết bạn (結伴/交友 · 漢越詞)'
      },
      {
        viet: 'Chúc bạn một ngày vui vẻ!',
        zh: '祝你有愉快美好的一天！',
        en: 'Wish you a wonderful and joyful day!',
        hintZh: '道別時送上滿滿祝福。',
        hintEn: 'Warm parting blessing for everyday conversation.',
        hanViet: 'Chúc (祝 · 漢越詞) · Vui vẻ (愉快 · 純越語疊詞)'
      }
    ],
    quiz: {
      questionZh: '在越南結交當地朋友時，最主流普及的通訊軟體是哪一個？',
      questionEn: 'Which is the most popular social messaging app in Vietnam?',
      optionsZh: ['A. Zalo', 'B. WeChat', 'C. KakaoTalk', 'D. WhatsApp'],
      optionsEn: ['A. Zalo', 'B. WeChat', 'C. KakaoTalk', 'D. WhatsApp'],
      answer: 0,
      explainZh: 'Zalo 是越南人人必備的國民通訊 App，交換 Zalo 是在越南交友與商務聯繫的第一步！',
      explainEn: 'Zalo is Vietnam\'s national messaging app, essential for connecting with locals!'
    }
  }
];

export const FastTrackModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode, t } = useLanguage();
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [completedDays, setCompletedDays] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_fasttrack_completed_days');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [quizState, setQuizState] = useState({
    selectedOption: null,
    isSubmitted: false,
    isCorrect: null
  });

  const currentDay = FAST_TRACK_DAYS[activeDayIdx] || FAST_TRACK_DAYS[0];

  useEffect(() => {
    localStorage.setItem('viet_fasttrack_completed_days', JSON.stringify(completedDays));
  }, [completedDays]);

  // Reset quiz state when day tab changes
  useEffect(() => {
    setQuizState({ selectedOption: null, isSubmitted: false, isCorrect: null });
  }, [activeDayIdx]);

  const handlePlayAudio = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const handleSelectQuizOption = (idx) => {
    if (quizState.isSubmitted) return;
    setQuizState(prev => ({ ...prev, selectedOption: idx }));
  };

  const handleSubmitQuiz = () => {
    if (quizState.selectedOption === null) return;
    const isCorrect = quizState.selectedOption === currentDay.quiz.answer;
    setQuizState(prev => ({ ...prev, isSubmitted: true, isCorrect }));

    if (isCorrect) {
      audioEngine.playSuccessChime();
      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 15 });
    } else {
      audioEngine.playGentleError();
    }
  };

  const handleCompleteDay = (dayNum) => {
    if (!completedDays.includes(dayNum)) {
      const nextCompleted = [...completedDays, dayNum];
      setCompletedDays(nextCompleted);
      audioEngine.playLevelUpFanfare();

      if (updateUserStats) {
        updateUserStats({ type: 'ADD_XP', payload: 50 });
      }

      // Check for gamification achievements
      gamificationEngine.checkAchievements(
        { xp: 50, streak: 1 },
        { type: 'FAST_TRACK_DAY', day: dayNum }
      );

      if (nextCompleted.length === FAST_TRACK_DAYS.length) {
        gamificationEngine.checkAchievements(
          { xp: 150, streak: 7 },
          { type: 'FAST_TRACK_ALL_COMPLETE' }
        );
      }
    }
  };

  const progressPercent = Math.round((completedDays.length / FAST_TRACK_DAYS.length) * 100);

  return (
    <div className="module-container fast-track-module">
      {/* Hero Header */}
      <section className="fast-track-hero" style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(234, 179, 8, 0.12) 50%, rgba(59, 130, 246, 0.12) 100%)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>
              <Zap size={18} /> {learningMode === 'zh' ? '7天生活基本溝通速成破冰計畫' : '7-Day Fast-Track Survival Vietnamese'}
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.4rem 0 0.6rem' }}>
              {learningMode === 'zh' ? '不用死記硬背，7 天輕鬆開口說越語！' : 'Speak Real Vietnamese in 7 Days, Zero Stress!'}
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', lineHeight: 1.6, margin: 0, fontSize: '1rem' }}>
              {learningMode === 'zh'
                ? '專為大眾打造的科學破冰路線：精選 35 句高頻實戰金句、真實對話模擬、在地文化密技與南北口音切換，幫你快速搞定打招呼、點餐咖啡、市場殺價、Grab搭車與人際社交！'
                : 'Scientific fast-track: 35 essential communicative phrases, interactive dialogues, cultural secrets, and dialect switching to master greetings, dining, bargaining, Grab rides, and socializing!'}
            </p>
          </div>

          {/* Progress Card */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '1.25rem 1.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-color)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            textAlign: 'center',
            minWidth: '200px'
          }}>
            <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--brand-gold)' }}>
              {progressPercent}%
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
              {learningMode === 'zh' ? `${completedDays.length} / 7 天已通關` : `${completedDays.length} / 7 Days Complete`}
            </div>
            <div style={{
              width: '100%',
              height: '6px',
              background: 'var(--bg-input)',
              borderRadius: 'var(--radius-full)',
              marginTop: '0.6rem',
              overflow: 'hidden'
            }}>
              <div style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, var(--brand-gold), var(--brand-primary))',
                transition: 'width 0.4s ease'
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* 7 Days Navigation Pills */}
      <div className="fast-track-nav-days" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
        gap: '0.75rem',
        marginBottom: '2rem'
      }}>
        {FAST_TRACK_DAYS.map((dayItem, idx) => {
          const isDone = completedDays.includes(dayItem.day);
          const isActive = activeDayIdx === idx;
          return (
            <button
              key={dayItem.day}
              onClick={() => setActiveDayIdx(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: isActive ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: isActive ? 'var(--bg-accent)' : 'var(--bg-card)',
                color: isActive ? 'var(--brand-primary)' : 'var(--text-primary)',
                fontWeight: isActive ? 800 : 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: isActive ? '0 4px 12px rgba(37,99,235,0.15)' : 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.3rem' }}>{dayItem.icon}</span>
                <span style={{ fontSize: '0.92rem' }}>Day {dayItem.day}</span>
              </div>
              {isDone ? (
                <CheckCircle2 size={18} color="var(--brand-green)" />
              ) : (
                <Circle size={16} color="var(--text-muted)" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Card */}
      <div className="fast-track-day-content" style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
      }}>
        {/* Day Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--brand-primary)', fontWeight: 800 }}>
              <span style={{ fontSize: '1.6rem' }}>{currentDay.icon}</span>
              <span style={{ fontSize: '1.35rem' }}>{learningMode === 'zh' ? currentDay.titleZh : currentDay.titleEn}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: '0.4rem 0 0', fontSize: '1rem', lineHeight: 1.5 }}>
              {learningMode === 'zh' ? currentDay.summaryZh : currentDay.summaryEn}
            </p>
          </div>

          <div style={{
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '0.6rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--brand-green)'
          }}>
            <ShieldCheck size={20} />
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>Can-Do 實戰目標</div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700 }}>
                {learningMode === 'zh' ? currentDay.canDoZh : currentDay.canDoEn}
              </div>
            </div>
          </div>
        </div>

        {/* Pro Cultural Secret Card */}
        {currentDay.proTipZh && (
          <div style={{
            margin: '0 0 2rem',
            padding: '1.1rem 1.4rem',
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(59, 130, 246, 0.08) 100%)',
            border: '1px solid rgba(234, 179, 8, 0.35)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.85rem'
          }}>
            <Lightbulb size={24} color="var(--brand-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.94rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? currentDay.proTipZh : currentDay.proTipEn}
            </div>
          </div>
        )}

        {/* Phrases List */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} color="var(--brand-gold)" />
            {learningMode === 'zh' ? '今日核心溝通金句 (點擊發音聆聽)' : 'Essential Communicative Phrases (Tap to Listen)'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1rem' }}>
            {currentDay.phrases.map((phrase, pIdx) => (
              <div
                key={pIdx}
                style={{
                  background: 'var(--bg-accent)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                      {phrase.viet}
                    </span>
                    <button
                      className="speaker-btn"
                      onClick={() => handlePlayAudio(phrase.viet)}
                      title="播放越南語發音"
                      style={{ padding: '0.4rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                    {learningMode === 'zh' ? phrase.zh : phrase.en}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    💡 {learningMode === 'zh' ? phrase.hintZh : phrase.hintEn}
                  </div>
                </div>

                {phrase.hanViet && (
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--brand-gold)',
                    fontWeight: 700,
                    background: 'rgba(234, 179, 8, 0.08)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: 'var(--radius-sm)',
                    display: 'inline-block',
                    alignSelf: 'flex-start'
                  }}>
                    🔍 漢越字根對照：{phrase.hanViet}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Real Dialogue Simulation Box */}
        {currentDay.dialogue && currentDay.dialogue.length > 0 && (
          <div style={{
            background: 'var(--bg-accent)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--brand-primary)', fontWeight: 800, marginBottom: '1rem' }}>
              <MessageSquare size={20} />
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '今日實戰情境模擬對話 (點擊發音朗讀)' : 'Daily Practical Dialogue Simulation'}
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {currentDay.dialogue.map((line, lIdx) => (
                <div
                  key={lIdx}
                  onClick={() => handlePlayAudio(line.viet)}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.9rem 1.2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '0.2rem' }}>
                      {line.speaker}
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--brand-primary)', marginBottom: '0.2rem' }}>
                      {line.viet}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {learningMode === 'zh' ? line.zh : line.en}
                    </div>
                  </div>
                  <button className="speaker-btn" style={{ padding: '0.35rem' }} title="發音">
                    <Volume2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Micro-Check Quiz Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(139,92,246,0.05) 100%)',
          border: '1px solid rgba(37,99,235,0.2)',
          borderRadius: 'var(--radius-md)',
          padding: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--brand-primary)', fontWeight: 800 }}>
            <HelpCircle size={20} />
            <span style={{ fontSize: '1.1rem' }}>
              {learningMode === 'zh' ? '今日情境微測驗 (快速驗證記憶)' : 'Daily Micro-Check (Quick Recall)'}
            </span>
          </div>

          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            {learningMode === 'zh' ? currentDay.quiz.questionZh : currentDay.quiz.questionEn}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
            {(learningMode === 'zh' ? currentDay.quiz.optionsZh : currentDay.quiz.optionsEn).map((opt, oIdx) => {
              const isSelected = quizState.selectedOption === oIdx;
              let btnBorder = isSelected ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)';
              let btnBg = isSelected ? 'rgba(37,99,235,0.1)' : 'var(--bg-card)';

              if (quizState.isSubmitted) {
                if (oIdx === currentDay.quiz.answer) {
                  btnBorder = '2px solid var(--brand-green)';
                  btnBg = 'rgba(16,185,129,0.15)';
                } else if (isSelected) {
                  btnBorder = '2px solid #ef4444';
                  btnBg = 'rgba(239,68,68,0.15)';
                }
              }

              return (
                <button
                  key={oIdx}
                  onClick={() => handleSelectQuizOption(oIdx)}
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: btnBorder,
                    background: btnBg,
                    color: 'var(--text-primary)',
                    textAlign: 'left',
                    fontWeight: 600,
                    cursor: quizState.isSubmitted ? 'default' : 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!quizState.isSubmitted ? (
            <button
              className="primary-action"
              onClick={handleSubmitQuiz}
              disabled={quizState.selectedOption === null}
              style={{
                padding: '0.6rem 1.4rem',
                opacity: quizState.selectedOption === null ? 0.6 : 1,
                cursor: quizState.selectedOption === null ? 'not-allowed' : 'pointer'
              }}
            >
              {learningMode === 'zh' ? '確認答案 (+15 XP)' : 'Submit Answer (+15 XP)'}
            </button>
          ) : (
            <div style={{
              marginTop: '1rem',
              padding: '0.9rem',
              borderRadius: 'var(--radius-md)',
              background: quizState.isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)',
              border: quizState.isCorrect ? '1px solid var(--brand-green)' : '1px solid #ef4444',
              color: 'var(--text-primary)',
              fontSize: '0.92rem',
              lineHeight: 1.5
            }}>
              <strong>{quizState.isCorrect ? '🎉 正確！' : '💡 解析：'}</strong> {learningMode === 'zh' ? currentDay.quiz.explainZh : currentDay.quiz.explainEn}
            </div>
          )}
        </div>

        {/* Completion & Next Action Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <button
            className="primary-action"
            onClick={() => handleCompleteDay(currentDay.day)}
            style={{
              padding: '0.85rem 1.75rem',
              fontSize: '1.05rem',
              background: completedDays.includes(currentDay.day) ? 'var(--brand-green)' : 'var(--brand-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            {completedDays.includes(currentDay.day) ? (
              <>
                <CheckCircle2 size={20} />
                {learningMode === 'zh' ? `Day ${currentDay.day} 已通關！` : `Day ${currentDay.day} Completed!`}
              </>
            ) : (
              <>
                <Trophy size={20} />
                {learningMode === 'zh' ? `標記 Day ${currentDay.day} 通關 (+50 XP)` : `Mark Day ${currentDay.day} Complete (+50 XP)`}
              </>
            )}
          </button>

          {activeDayIdx < FAST_TRACK_DAYS.length - 1 && (
            <button
              className="secondary-action"
              onClick={() => setActiveDayIdx(prev => prev + 1)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem' }}
            >
              <span>{learningMode === 'zh' ? '前往下一天' : 'Next Day'}</span>
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FastTrackModule;
