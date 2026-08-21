import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/vietnameseData.js');
let content = fs.readFileSync(filePath, 'utf-8');

const newPhrases = `,
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Tài xế đang đến, khoảng 5 phút nữa sẽ tới nơi.",
    "zh": "司機正在前來，大約 5 分鐘後會到達。",
    "en": "The driver is on the way, arriving in about 5 minutes.",
    "usageZh": "查看 Grab 車輛動態與報時",
    "usageEn": "Tracking Grab ride ETA"
  },
  {
    "category": "交通與出行 / Grab & Transport",
    "viet": "Bác tài ơi, làm ơn bật điều hòa mát hơn một chút được không?",
    "zh": "司機大哥，請問可以把冷氣開強一點點嗎？",
    "en": "Driver, could you please turn up the air conditioner a bit?",
    "usageZh": "搭車時禮貌請求調整車內冷氣",
    "usageEn": "Asking driver to adjust AC"
  },
  {
    "category": "餐飲與點餐 / Dining",
    "viet": "Giao hàng tận cửa / để ở bàn lễ tân giúp tôi nhé.",
    "zh": "請幫我送到門口 / 放在一樓櫃檯桌上喔。",
    "en": "Please deliver to the door / leave at reception desk.",
    "usageZh": "GrabFood / ShopeeFood 外送備註叮嚀",
    "usageEn": "Food delivery drop-off instructions"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Quét mã VietQR / MoMo này để thanh toán nhé!",
    "zh": "請掃這個 VietQR 或 MoMo 條碼付款喔！",
    "en": "Scan this VietQR / MoMo code to pay!",
    "usageZh": "越南當地最普及之電子 QR 掃碼支付",
    "usageEn": "Digital QR payment in Vietnam"
  },
  {
    "category": "購物與殺價 / Shopping",
    "viet": "Có chương trình khuyến mãi hoặc giảm giá cho khách mới không em?",
    "zh": "新客戶有促銷活動或折扣優惠嗎？",
    "en": "Are there any promotions or discounts for new customers?",
    "usageZh": "購物時詢問優惠折扣",
    "usageEn": "Inquiring about promotions"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi bị dị ứng với hải sản / đậu phộng, món này có chứa không?",
    "zh": "我對海鮮 / 花生過敏，這道菜裡面有包含嗎？",
    "en": "I am allergic to seafood / peanuts, does this dish contain them?",
    "usageZh": "用餐或買藥時主動聲明食物過敏原",
    "usageEn": "Declaring food allergies"
  },
  {
    "category": "醫療與急難 / Pharmacy & Emergency",
    "viet": "Tôi cần gặp bác sĩ khoa cấp cứu ngay lập tức, xin hãy giúp tôi!",
    "zh": "我需要立刻看急診科醫生，請幫幫我！",
    "en": "I need to see an emergency doctor immediately, please help me!",
    "usageZh": "在醫院急診處求助",
    "usageEn": "Emergency room urgent request"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Hôm nay chúng ta họp bàn về tiến độ triển khai dự án FDI nhé.",
    "zh": "今天我們開會討論外商投資 (FDI) 專案的落實進度吧。",
    "en": "Let us meet today to discuss the progress of our FDI project.",
    "usageZh": "跨國商務會議開場白",
    "usageEn": "Business project meeting kickoff"
  },
  {
    "category": "商務與職場 / Business",
    "viet": "Kính gửi quý công ty bản dự thảo hợp đồng thương mại đã điều chỉnh.",
    "zh": "呈送貴公司已完成修訂之商務契約草案。",
    "en": "Sending your company the revised draft of the commercial contract.",
    "usageZh": "高規格商務公文與 Email 往來",
    "usageEn": "Formal business email and contract draft"
  },
  {
    "category": "社交閒聊與生活 / Small Talk",
    "viet": "Cà phê vỉa hè và trà đá là nét văn hóa rất đặc trưng của Việt Nam!",
    "zh": "路邊攤咖啡與冰茶是越南極具代表性的道地文化！",
    "en": "Street-side coffee and iced tea are iconic hallmarks of Vietnamese culture!",
    "usageZh": "與越南朋友聊在地咖啡生活",
    "usageEn": "Chatting about Vietnamese street coffee culture"
  }`;

// Target end of practicalPhrases
const targetMarker = "export const flashcardsDeck = [";
const phraseEndIdx = content.indexOf(targetMarker);

if (phraseEndIdx !== -1) {
  const lastBracketIdx = content.lastIndexOf('];', phraseEndIdx);
  if (lastBracketIdx !== -1) {
    const before = content.slice(0, lastBracketIdx);
    const after = content.slice(lastBracketIdx);
    content = before + newPhrases + '\n' + after;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully expanded practicalPhrases in vietnameseData.js!');
  }
}
