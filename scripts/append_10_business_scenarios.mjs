import fs from 'fs';
import path from 'path';

const scenarioFilePath = path.resolve('src/data/situationalScenarios.js');
let fileContent = fs.readFileSync(scenarioFilePath, 'utf8');

const newBusinessScenarios = [
  {
    id: "biz_trade_show_secc",
    category: "business",
    tagZh: "商展拓銷",
    tagEn: "Trade Shows & Pitch",
    icon: "🎪",
    image: "business.jpg",
    titleZh: "國際商展攤位接待、產品介紹與名片交換",
    titleEn: "SECC Trade Show Booth Greeting, Product Pitch & Card Exchange",
    titleVi: "Đón Tiếp Gian Hàng Triển Lãm, Giới Thiệu Sản Phẩm & Trao Danh Thiếp",
    summaryZh: "在胡志明市 SECC 展覽館接待國際買家：迎賓問候、遞送型錄 (Catalogue)、解說技術認證與交換名片及 Zalo。",
    summaryEn: "Host buyers at SECC Expo: welcome visitors, distribute catalogues, present ISO/CE certifications, and exchange Zalo/cards.",
    dialogues: [
      {
        speaker: "Đại diện Gian hàng (參展商)",
        role: "learner",
        viet: "Dạ xin chào anh! Chào mừng anh ghé thăm gian hàng của công ty chúng tôi tại triển lãm SECC.",
        zh: "您好！歡迎光臨參觀我們在 SECC 展覽會的攤位。",
        en: "Hello! Welcome to visit our company booth at the SECC exhibition.",
        northTip: "「Gian hàng」即展位、攤位；「Triển lãm」為展覽會。",
        southTip: "展會迎賓開頭常用「Dạ xin chào」展現滿滿誠意。"
      },
      {
        speaker: "Khách tham quan (買家)",
        role: "npc",
        viet: "Chào bạn. Công ty tôi đang tìm nguồn cung cấp linh kiện điện tử chất lượng cao. Bên bạn có catalogue không?",
        zh: "你好。我們公司正在尋找高品質的電子零件供應商。你們有型錄嗎？",
        en: "Hello. My company is looking for high-quality electronic components. Do you have a catalogue?",
        northTip: "「Nguồn cung cấp」指供應來源；「Linh kiện điện tử」為電子零件。",
        southTip: "買家索取型錄是開展商務交涉的第一步。"
      },
      {
        speaker: "Đại diện Gian hàng (參展商)",
        role: "learner",
        viet: "Dạ có ạ! Em xin gửi anh cuốn catalogue mới nhất. Tất cả sản phẩm bên em đều đạt chuẩn ISO 9001 và chứng nhận CE.",
        zh: "有的！送您我們最新版型錄。我們所有產品均符合 ISO 9001 標準並取得 CE 認證。",
        en: "Yes! Here is our latest catalogue. All our products meet ISO 9001 and have CE certification.",
        northTip: "「Đạt chuẩn」(達到標準)、「Chứng nhận」(認證)。",
        southTip: "強調國際認證能迅速建立海外買家信任。"
      },
      {
        speaker: "Khách tham quan (買家)",
        role: "npc",
        viet: "Rất ấn tượng! Anh cho tôi xin danh thiếp và số Zalo để tối nay trao đổi thêm về báo giá nhé.",
        zh: "令人印象深刻！請給我一張名片和 Zalo 號碼，今晚好進一步討論報價。",
        en: "Very impressive! Please give me your business card and Zalo number to discuss pricing tonight.",
        northTip: "「Danh thiếp」(名片)；「Zalo」是越南商務第一通訊軟體。",
        southTip: "當天晚上加 Zalo 發送報價單是展會轉單黃金法則。"
      },
      {
        speaker: "Đại diện Gian hàng (參展商)",
        role: "learner",
        viet: "Dạ vâng, em xin gửi anh danh thiếp bằng hai tay ạ. Tối nay em sẽ nhắn tin gửi bảng giá chi tiết cho anh ngay!",
        zh: "好的，雙手遞上我的名片。今晚我會立刻發送詳細價格表給您！",
        en: "Certainly, here is my card with both hands. I will message you the detailed price list tonight!",
        northTip: "「Trao bằng hai tay」(雙手遞交) 是越南商務重要禮儀。",
        southTip: "「Bảng giá chi tiết」即詳細報價單。"
      }
    ],
    rolePlay: {
      userRoleZh: "參展代表 (Đại diện)",
      userRoleEn: "Exhibitor Rep (Đại diện)",
      partnerRoleZh: "國際買家 (Khách tham quan)",
      partnerRoleEn: "Buyer (Khách tham quan)",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Chào bạn. Công ty tôi đang tìm nhà cung cấp linh kiện đạt chuẩn ISO. Bên bạn có tài liệu không?",
          partnerPromptZh: "你好。我們公司在找符合 ISO 標準的零件供應商。你們有相關資料嗎？",
          partnerPromptEn: "Hello. We are looking for ISO-certified suppliers. Do you have documentation?",
          userOptions: [
            {
              id: "secc_opt1",
              textVi: "Dạ có ạ! Em xin gửi anh cuốn catalogue và chứng nhận ISO 9001 của công ty em.",
              textZh: "有的！送上我們公司的型錄與 ISO 9001 認證文件給您。",
              textEn: "Yes! Here is our catalogue and ISO 9001 certificate.",
              isCorrect: true,
              feedbackZh: "非常專業！立刻遞上型錄與權威認證，精準回應買家需求。",
              feedbackEn: "Professional response directly providing requested documentation."
            },
            {
              id: "secc_opt2",
              textVi: "Không có, anh tự lên website xem đi.",
              textZh: "沒有耶，你自己上官網看吧。",
              textEn: "No, check our website yourself.",
              isCorrect: false,
              feedbackZh: "嚴重失禮！商展現場必須熱情主動提供資料。",
              feedbackEn: "Unprofessional and rude to a potential buyer."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Gian hàng", vi: "Gian hàng", phonetic: "[zaːn˧ haːŋ˨˩]", ipa: "[zaːn˧ haːŋ˨˩]", zh: "展覽攤位 / 展位", en: "Exhibition Booth", hanViet: "Gian (間) + Hàng (行)" },
      { viet: "Danh thiếp", vi: "Danh thiếp", phonetic: "[zaɲ˧ tʰiəp̚˦˧˥]", ipa: "[zaɲ˧ tʰiəp̚˦˧˥]", zh: "名片 / 商務名片", en: "Business Card", hanViet: "Danh (名) + Thiếp (帖)" },
      { viet: "Catalogue", vi: "Catalogue", phonetic: "[ka-ta-lo]", ipa: "[ka-ta-lo]", zh: "產品型錄 / 宣傳手冊", en: "Product Catalogue", hanViet: "" },
      { viet: "Chứng nhận", vi: "Chứng nhận", phonetic: "[tɕɨŋ˦˧˥ ɲən˧˨]", ipa: "[tɕɨŋ˦˧˥ ɲən˧˨]", zh: "證書 / 認證", en: "Certification", hanViet: "Chứng (證) + Nhận (認)" }
    ],
    culturalTip: {
      titleZh: "🎪 越南大型展覽會接待與名片禮儀",
      titleEn: "Exhibition Lead Capture & Business Card Etiquette in Vietnam",
      contentZh: "在胡志明市 SECC 或河內 ICE 參展時，交換名片必須「雙手遞交、正面朝向對方」，接過名片後切忌立刻塞入口袋，應認真閱讀 3~5 秒。此外，第一時間加買家 Zalo 並在當晚發送問候訊息與 PDF 型錄，能將展會成交率提升 3 倍以上！",
      contentEn: "Always exchange business cards with both hands facing the recipient. Connecting on Zalo on the same day and sending PDF catalogues within 2 hours multiplies conversion rates.",
      proTipZh: "✨ 秘笈：在展位放一盒高品質薄荷糖或台灣特色點心，能大幅增加買家停留洽談的時間！",
      proTipEn: "✨ Pro Tip: High quality mints or snacks at your booth significantly increase visitor dwell time."
    }
  },
  {
    id: "biz_rfq_pricing",
    category: "business",
    tagZh: "採購議價",
    tagEn: "RFQ & Pricing",
    icon: "💵",
    image: "business.jpg",
    titleZh: "詢價報價 (RFQ)、大宗採購折扣與 MOQ 議價",
    titleEn: "RFQ Quotation, Bulk Volume Discount & MOQ Negotiation",
    titleVi: "Yêu Cầu Báo Giá (RFQ), Chiết Khấu Số Lượng & Thương Lượng MOQ",
    summaryZh: "商務採購核心：核對 FOB Cát Lái 港口交貨價格、協商大宗採購折讓比率與首批試產起訂量 (MOQ)。",
    summaryEn: "Core procurement: verify FOB Cat Lai port pricing, negotiate volume discounts, and set trial MOQ.",
    dialogues: [
      {
        speaker: "Trưởng phòng Mua hàng (採購經理)",
        role: "npc",
        viet: "Chào anh, chúng tôi đã nhận được bản yêu cầu báo giá (RFQ) cho đơn hàng 50.000 sản phẩm.",
        zh: "您好，我們已經收到您針對 50,000 件訂單的詢價單 (RFQ)。",
        en: "Hello, we received your RFQ for the 50,000 unit order.",
        northTip: "「Yêu cầu báo giá」即國際貿易常用的 RFQ (Request for Quotation)。",
        southTip: "大型採購通常由 Trưởng phòng Mua hàng 主導談判。"
      },
      {
        speaker: "Giám đốc Kinh doanh (業務總監)",
        role: "learner",
        viet: "Báo giá hiện tại theo điều kiện FOB Cảng Cát Lái là bao nhiêu? Nếu chúng tôi tăng số lượng lên 100.000 cái thì có mức chiết khấu tốt hơn không?",
        zh: "目前 FOB 蓋萊港 (Cát Lái) 條件下的報價是多少？如果我們把數量增加到 10 萬件，有更好的折扣嗎？",
        en: "What is the FOB Cat Lai Port price? If we increase quantity to 100,000 units, is there a better discount?",
        northTip: "「Cảng Cát Lái」是胡志明市最大的貨櫃集裝箱港口。",
        southTip: "「Chiết khấu」為商業折扣，等於打折優惠。"
      },
      {
        speaker: "Trưởng phòng Mua hàng (採購經理)",
        role: "npc",
        viet: "Đơn giá hiện tại là 8.5 USD/cái. Nếu anh đặt 100.000 cái, chúng tôi có thể chiết khấu 6%, còn 8.0 USD/cái.",
        zh: "目前單價為每件 8.5 美金。如果您訂購 10 萬件，我們可折讓 6%，降至每件 8.0 美金。",
        en: "Unit price is $8.50. For 100,000 units, we can discount 6% down to $8.00/unit.",
        northTip: "「Đơn giá」(單價)；「Chiết khấu 6%」(折讓 6%)。",
        southTip: "以大量採購爭取降價是雙贏基本策略。"
      },
      {
        speaker: "Giám đốc Kinh doanh (業務總監)",
        role: "learner",
        viet: "Mức giá 8.0 USD rất hợp lý. Về điều khoản thanh toán, chúng tôi sẽ đặt cọc 30% T/T và thanh toán 70% còn lại khi nhận vận đơn B/L.",
        zh: "8.0 美金非常合理。關於付款條件，我們將電匯 30% 訂金，並在收到提單 (B/L) 副本時支付 70% 尾款。",
        en: "$8.00 is very reasonable. For payment terms, we will pay 30% T/T deposit and 70% upon B/L copy.",
        northTip: "「Đặt cọc」(付訂金)、「Vận đơn B/L」(海運提單)。",
        southTip: "T/T 30% cọc + 70% B/L 是台越外貿最標準付款條款。"
      }
    ],
    rolePlay: {
      userRoleZh: "買方業務總監 (Giám đốc)",
      userRoleEn: "Commercial Director",
      partnerRoleZh: "工廠採購主管 (Trưởng phòng)",
      partnerRoleEn: "Procurement Manager",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Nếu quý công ty đặt 100.000 cái, chúng tôi có thể giảm đơn giá xuống 8.0 USD/cái. Anh thấy thế nào?",
          partnerPromptZh: "如果貴公司下單 10 萬件，我們可將單價降至 8.0 美金。您覺得如何？",
          partnerPromptEn: "For 100,000 units, we can reduce unit price to $8.00. What do you think?",
          userOptions: [
            {
              id: "rfq_opt1",
              textVi: "Mức giá 8.0 USD rất hợp lý. Chúng tôi đồng ý và sẽ tiến hành làm hợp đồng thanh toán 30% T/T.",
              textZh: "8.0 美金很合理。我們同意並將開始擬定 30% T/T 訂金合約。",
              textEn: "Very reasonable. We agree and will draft the 30% T/T contract.",
              isCorrect: true,
              feedbackZh: "完美敲定！鎖定優惠單價並立即確認標準付款條款。",
              feedbackEn: "Perfect agreement locking favorable unit price with standard payment terms."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Báo giá", vi: "Báo giá", phonetic: "[ɓaːw˦˧˥ zaː˦˧˥]", ipa: "[ɓaːw˦˧˥ zaː˦˧˥]", zh: "報價單 / 報價", en: "Quotation / Quote", hanViet: "Báo (報) + Giá (價)" },
      { viet: "Chiết khấu", vi: "Chiết khấu", phonetic: "[tɕiət̚˦˧˥ kʰəw˦˧˥]", ipa: "[tɕiət̚˦˧˥ kʰəw˦˧˥]", zh: "折扣 / 折讓", en: "Discount / Rebate", hanViet: "Chiết (折) + Khấu (扣)" },
      { viet: "Đơn giá", vi: "Đơn giá", phonetic: "[ɗəːn˧ zaː˦˧˥]", ipa: "[ɗəːn˧ zaː˦˧˥]", zh: "單價 / 每單位價格", en: "Unit Price", hanViet: "Đơn (單) + Giá (價)" },
      { viet: "Đặt cọc", vi: "Đặt cọc", phonetic: "[ɗat̚˧˨ kawk͡p̚˧˨]", ipa: "[ɗat̚˧˨ kawk͡p̚˧˨]", zh: "付訂金 / 押金", en: "Deposit / Prepayment", hanViet: "" }
    ],
    culturalTip: {
      titleZh: "💵 越南商務採購之付款條件與報價眉角",
      titleEn: "Payment Terms & Negotiation Practices in Vietnam",
      contentZh: "在越南進行大宗外貿交易，報價時務必問清是「含稅價」(Đã bao gồm VAT) 還是「未稅價」(Chưa bao gồm VAT)，以及交貨條件是工廠交貨 (Ex-work)、FOB 還是 CIF。付款條件以 T/T 電匯訂金 30% 最為普遍，若金額超過 10 萬美元則建議開立不可撤銷信用狀 (L/C không hủy ngang)。",
      contentEn: "Always clarify if pricing is inclusive of 10% VAT and verify Incoterms (FOB/CIF). 30% T/T deposit is standard, while larger deals utilize Irrevocable Letters of Credit (L/C).",
      proTipZh: "✨ 避坑：簽約前務必在合約中載明美金與越盾之匯率基準日，避免匯率波動損失！",
      proTipEn: "✨ Pro Tip: Specify the FX exchange rate benchmark date in the contract to avoid currency fluctuation risks."
    }
  },
  {
    id: "biz_oem_odm_contract",
    category: "business",
    tagZh: "代工製造",
    tagEn: "OEM / ODM Specs",
    icon: "⚙️",
    image: "business.jpg",
    titleZh: "OEM 代工與 ODM 客製化規格洽談",
    titleEn: "OEM Manufacturing, ODM Custom Specs & NDA Signing",
    titleVi: "Đàm Phán Gia Công OEM, Thiết Kế ODM & Ký Thỏa Thuận Bảo Mật NDA",
    summaryZh: "工程代工交涉：確認模具費 (Chi phí khuôn mẫu)、工程公差 (Dung sai kỹ thuật)、試產打樣與簽署保密協定 (NDA)。",
    summaryEn: "OEM/ODM manufacturing: tooling costs, engineering tolerances, sample prototyping, and NDA confidentiality agreements.",
    dialogues: [
      {
        speaker: "Kỹ sư trưởng (總工程師)",
        role: "npc",
        viet: "Chào anh, chúng tôi đã xem qua bản vẽ kỹ thuật CAD của bên anh. Nhà máy hoàn toàn có thể gia công OEM theo tiêu chuẩn này.",
        zh: "您好，我們已經審查了貴方的 CAD 工程圖。工廠完全具備依照此標準進行 OEM 代工的能力。",
        en: "Hello, we reviewed your CAD technical drawings. Our factory is fully equipped for OEM production under these specs.",
        northTip: "「Bản vẽ kỹ thuật」(工程圖紙)；「Gia công」(代工/加工)。",
        southTip: "「Kỹ sư trưởng」為廠內技術最高負責人。"
      },
      {
        speaker: "Đại diện Đài Loan (台方代表)",
        role: "learner",
        viet: "Tuyệt vời. Chi phí mở khuôn mẫu mới là bao nhiêu và thời gian thử nghiệm mẫu (Prototyping) mất bao lâu?",
        zh: "太好了。開新模具的費用是多少？樣品打樣試產需要多長時間？",
        en: "Great. What is the new tooling mold cost and prototype sample lead time?",
        northTip: "「Mở khuôn」(開模)；「Mẫu thử」(測試樣品)。",
        southTip: "開模費用與樣品交期是 ODM 專案成敗核心。"
      },
      {
        speaker: "Kỹ sư trưởng (總工程師)",
        role: "npc",
        viet: "Chi phí khuôn khoảng 5.000 USD, thời gian làm mẫu là 15 ngày. Nếu đơn hàng chính thức đạt 50.000 cái, chúng tôi sẽ hoàn trả 100% tiền khuôn.",
        zh: "模具費用約 5,000 美金，打樣週期 15 天。若後續正式大貨訂單達到 50,000 件，我們將 100% 全額返還模具費。",
        en: "Mold cost is $5,000, sample lead time is 15 days. If the mass order reaches 50,000 units, mold cost is 100% refunded.",
        northTip: "「Hoàn trả」(退還/返還)；「Đơn hàng chính thức」(正式訂單)。",
        southTip: "大單返還模具費是製造業常見的雙贏激勵機制。"
      },
      {
        speaker: "Đại diện Đài Loan (台方代表)",
        role: "learner",
        viet: "Đồng ý. Trước khi gửi chi tiết thông số và file 3D, chúng ta hãy ký Thỏa thuận Bảo mật Thông tin (NDA) trước nhé.",
        zh: "同意。在傳送詳細規格與 3D 檔案之前，我們先簽署保密協定 (NDA) 吧。",
        en: "Agreed. Before sending full 3D specs, let us sign the Non-Disclosure Agreement (NDA) first.",
        northTip: "「Thỏa thuận bảo mật thông tin」即保密協定 NDA。",
        southTip: "保護智慧財產權是跨國研發代工必經步驟。"
      }
    ],
    rolePlay: {
      userRoleZh: "台商技術代表",
      userRoleEn: "Technical Rep",
      partnerRoleZh: "工廠總工程師",
      partnerRoleEn: "Lead Engineer",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Trước khi tiến hành mở khuôn, anh có yêu cầu gì về mặt pháp lý và bảo mật không?",
          partnerPromptZh: "在開始開模之前，您在法律與保密方面有什麼要求嗎？",
          partnerPromptEn: "Before opening the mold, do you have any legal or confidentiality requirements?",
          userOptions: [
            {
              id: "oem_opt1",
              textVi: "Chúng tôi cần hai bên ký kết Thỏa thuận Bảo mật Thông tin (NDA) để bảo vệ quyền sở hữu trí tuệ.",
              textZh: "我們需要雙方簽署保密協定 (NDA) 以保護智慧財產權。",
              textEn: "We need both parties to sign an NDA to protect intellectual property.",
              isCorrect: true,
              feedbackZh: "非常標準！跨國代工前務必簽署 NDA 保障專利與設計圖。",
              feedbackEn: "Correct standard procedure to protect proprietary designs before tooling."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Gia công", vi: "Gia công", phonetic: "[zaː˧ kəwŋm˧]", ipa: "[zaː˧ kəwŋm˧]", zh: "代工 / 加工製造", en: "OEM Processing", hanViet: "Gia (加) + Công (工)" },
      { viet: "Khuôn mẫu", vi: "Khuôn mẫu", phonetic: "[kʰuən˧ məw˦˧˥]", ipa: "[kʰuən˧ məw˦˧˥]", zh: "模具 / 鋼模", en: "Tooling Mold", hanViet: "Khuôn (模) + Mẫu (樣)" },
      { viet: "Bảo mật", vi: "Bảo mật", phonetic: "[ɓaːw˧˩ mət̚˧˨]", ipa: "[ɓaːw˧˩ mət̚˧˨]", zh: "保密 / 機密保護", en: "Confidentiality", hanViet: "Bảo (保) + Mật (密)" },
      { viet: "Thông số", vi: "Thông số", phonetic: "[tʰəwŋm˧ so˦˧˥]", ipa: "[tʰəwŋm˧ so˦˧˥]", zh: "技術參數 / 規格", en: "Specifications / Parameters", hanViet: "Thông (通) + Số (數)" }
    ],
    culturalTip: {
      titleZh: "⚙️ 越南工廠 OEM/ODM 代工合作要訣",
      titleEn: "OEM / ODM Collaboration Guidelines in Vietnam",
      contentZh: "越南製造業正迅速從單純組裝代工 (CM) 轉型至高精密 OEM/ODM。在委託越南工廠開模時，應明確定義公差範圍 (Dung sai)、試產打樣次數、以及達標後模具費返還機制。簽署正式雙語 (越英或越中) NDA 是保障技術圖紙外流的基本法律屏障。",
      contentEn: "When tooling in Vietnam, define engineering tolerances, prototype revision cycles, and mold refund quotas clearly in a bilingual NDA.",
      proTipZh: "✨ 秘笈：樣品確認後，務必由雙方主管在封樣件（Golden Sample）上親筆簽名封存作為驗貨標準！",
      proTipEn: "✨ Pro Tip: Both parties should sign and seal the approved Golden Sample as the ultimate inspection benchmark."
    }
  },
  {
    id: "biz_vat_invoice_tax",
    category: "business",
    tagZh: "稅務發票",
    tagEn: "VAT Red Invoice",
    icon: "🧾",
    image: "business.jpg",
    titleZh: "開立電子加值稅紅發票 (Hóa đơn đỏ) 與公司稅號報帳",
    titleEn: "Requesting Official VAT Red Invoices & Corporate Tax Reimbursement",
    titleVi: "Xuất Hóa Đơn Điện Tử GTGT (Hóa Đơn Đỏ) & Kê Khai Mã Số Thuế",
    summaryZh: "越南報帳法規：索取 10% 加值稅電子紅發票 (Hóa đơn điện tử)、提供公司統一稅號 (MST)、核對發票內容與 Email 接收。",
    summaryEn: "Vietnam tax compliance: obtain 10% VAT electronic red invoices, supply Tax ID (MST), and verify e-invoice email delivery.",
    dialogues: [
      {
        speaker: "Khách công tác (出差商務客)",
        role: "learner",
        viet: "Em ơi, công ty anh cần xuất hóa đơn đỏ (hóa đơn GTGT) cho toàn bộ chi phí lưu trú và ăn uống đợt này.",
        zh: "小姐，我們公司需要為這次的所有住宿與餐飲費用開立加值稅紅發票。",
        en: "Excuse me, our company needs an official VAT red invoice for all accommodation and dining expenses.",
        northTip: "「Hóa đơn đỏ」(紅發票) 是越南最權威的正式報稅憑證。",
        southTip: "飯店、餐廳結帳時必須主動要求，否則一般只會給收據。"
      },
      {
        speaker: "Thu ngân khách sạn (櫃檯會計)",
        role: "npc",
        viet: "Dạ được ạ. Anh vui lòng cung cấp Tên công ty, Mã số thuế (MST), Địa chỉ và Email để bên em xuất hóa đơn điện tử.",
        zh: "好的。請您提供公司全稱、統一稅號 (MST)、登記地址與電子信箱，我們立刻開立電子發票。",
        en: "Certainly. Please provide your full Company Name, Tax Code (MST), Address, and Email for e-invoicing.",
        northTip: "「Mã số thuế」(MST) 相當於台灣的公司統一編號（統編）。",
        southTip: "越南現已全面實施電子發票（Hóa đơn điện tử）。"
      },
      {
        speaker: "Khách công tác (出差商務客)",
        role: "learner",
        viet: "Đây là danh thiếp có đầy đủ thông tin xuất hóa đơn của công ty anh. Tổng số tiền đã gồm thuế VAT 10% rồi đúng không?",
        zh: "這是印有我們公司完整開票資訊的名片。總金額已經包含 10% 增值稅了對吧？",
        en: "Here is our card with complete billing details. The total amount is inclusive of 10% VAT, correct?",
        northTip: "「Đã gồm thuế VAT」(已含稅) 需反覆確認。",
        southTip: "出差報帳如果拿到未含稅單據將無法抵扣企業所得稅。"
      },
      {
        speaker: "Thu ngân khách sạn (櫃檯會計)",
        role: "npc",
        viet: "Dạ đúng rồi ạ, giá đã bao gồm VAT. Hệ thống sẽ tự động gửi file hóa đơn PDF và XML vào email của anh trong vòng 15 phút.",
        zh: "沒錯，價格已含稅。系統將在 15 分鐘內自動將 PDF 與 XML 發票檔案發送到您的信箱。",
        en: "Yes, price includes VAT. Our system will email the PDF and XML invoice files within 15 minutes.",
        northTip: "「File PDF và XML」是越南稅務局認可的標準發票格式。",
        southTip: "收到發票後務必核對稅號與統編是否完全一致。"
      }
    ],
    rolePlay: {
      userRoleZh: "出差主管",
      userRoleEn: "Business Traveler",
      partnerRoleZh: "飯店會計出納",
      partnerRoleEn: "Cashier Accountant",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Anh có cần xuất hóa đơn tài chính cho công ty không ạ?",
          partnerPromptZh: "請問您需要為公司開立正式財務發票嗎？",
          partnerPromptEn: "Do you need an official financial invoice for your company?",
          userOptions: [
            {
              id: "vat_opt1",
              textVi: "Dạ có, công ty tôi cần xuất hóa đơn đỏ. Đây là thông tin mã số thuế (MST) của bên tôi.",
              textZh: "是的，我們公司需要開紅發票。這是我們的統一稅號 (MST) 資訊。",
              textEn: "Yes, we need a red invoice. Here is our Tax ID (MST) information.",
              isCorrect: true,
              feedbackZh: "正確！清楚表達開立紅發票需求並主動提供 MST 稅號。",
              feedbackEn: "Correct! Clearly requested VAT invoice and provided company Tax ID."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Hóa đơn đỏ", vi: "Hóa đơn đỏ", phonetic: "[hwaː˦˧˥ ɗəːn˧ ɗɔ˧˩]", ipa: "[hwaː˦˧˥ ɗəːn˧ ɗɔ˧˩]", zh: "加值稅紅發票 / 統一發票", en: "Official VAT Red Invoice", hanViet: "Hóa (化) + Đơn (單)" },
      { viet: "Mã số thuế", vi: "Mã số thuế", phonetic: "[maː˦˧˥ so˦˧˥ tʰwe˦˧˥]", ipa: "[maː˦˧˥ so˦˧˥ tʰwe˦˧˥]", zh: "公司統一稅號 (MST / 統編)", en: "Tax Identification Number (MST)", hanViet: "Mã (碼) + Số (數) + Thuế (稅)" },
      { viet: "Thuế GTGT", vi: "Thuế GTGT", phonetic: "[tʰwe˦˧˥ zaː˧ tɕi˧˨ zaː˧ təwŋm˧]", ipa: "[tʰwe˦˧˥ zaː˧ tɕi˧˨ zaː˧ təwŋm˧]", zh: "加值型營業稅 (VAT 10%)", en: "Value-Added Tax (VAT)", hanViet: "Thuế (稅) + Giá trị gia tăng" },
      { viet: "Báo nợ", vi: "Báo nợ", phonetic: "[ɓaːw˦˧˥ nəː˧˨]", ipa: "[ɓaːw˦˧˥ nəː˧˨]", zh: "核銷報帳 / 扣款憑證", en: "Expense Filing / Debit Advice", hanViet: "Báo (報) + Nợ (負/債)" }
    ],
    culturalTip: {
      titleZh: "🧾 越南加值稅紅發票 (Hóa đơn đỏ) 報帳法則",
      titleEn: "Essential Red Invoice Accounting Rules in Vietnam",
      contentZh: "在越南，一般收據 (Phiếu thu / Hóa đơn bán lẻ) 在法律上「不能」作為企業所得稅扣抵憑證。唯有具備稅務總局認證碼之電子發票 (Hóa đơn điện tử có mã của cơ quan thuế) 才能合法核銷報帳。開票時必須確認公司名稱與營業執照一字不差，並核對 10 位或 13 位之 MST 稅號。",
      contentEn: "Retail receipts cannot be used for corporate tax deduction in Vietnam. Only official e-invoices with General Department of Taxation verification codes are valid for deductible expenses.",
      proTipZh: "✨ 秘笈：將公司的開票四要素（名稱、稅號、地址、信箱）存成手機記事本圖片，結帳時直接出示給店員拍照即可！",
      proTipEn: "✨ Pro Tip: Save your company billing 4-elements as a smartphone image to show cashiers instantly."
    }
  },
  {
    id: "biz_factory_audit_qc",
    category: "business",
    tagZh: "廠房品管",
    tagEn: "Factory Audit & QC",
    icon: "🏭",
    image: "business.jpg",
    titleZh: "工廠產線驗廠、品管抽檢與不良品處置",
    titleEn: "Factory Audit Walkthrough, QC Sampling & Defect Management",
    titleVi: "Kiểm Toán Nhà Xưởng, Lấy Mẫu Kiểm Tra KCS & Xử Lý Phế Phẩm NG",
    summaryZh: "廠房實務稽核：穿戴工安護具、巡視車間產能 (Năng suất chuyền)、抽檢不良率 (Tỷ lệ lỗi) 與擬定預防改善對策。",
    summaryEn: "On-site factory audit: inspect PPE safety, evaluate line productivity, test defect rate (NG), and formulate corrective actions.",
    dialogues: [
      {
        speaker: "Giám đốc Nhà máy (廠長)",
        role: "npc",
        viet: "Chào đoàn chuyên gia. Trước khi vào khu vực xưởng sản xuất, xin mời tất cả mọi người đội mũ bảo hộ và mang giày bảo hộ.",
        zh: "歡迎專家代表團。在進入生產車間之前，請大家戴上安全帽並穿上防護鞋。",
        en: "Welcome audit delegation. Before entering the production floor, please put on safety helmets and shoes.",
        northTip: "「Mũ bảo hộ」(安全帽)；「Giày bảo hộ」(勞保防護鞋)。",
        southTip: "遵守工安規範 (An toàn lao động) 是進入外資廠房第一鐵律。"
      },
      {
        speaker: "Chuyên gia Đánh giá (稽核主管)",
        role: "learner",
        viet: "Cảm ơn anh. Chúng tôi muốn kiểm tra quy trình kiểm soát chất lượng (KCS) trên chuyền 2 và xem báo cáo tỷ lệ phế phẩm tuần qua.",
        zh: "謝謝廠長。我們想檢查 2 號產線的品質管制 (QC) 流程，並查閱上週的不良品率 (NG率) 報告。",
        en: "Thank you. We would like to inspect QC procedures on Line 2 and review last week's defect rate report.",
        northTip: "「KCS」(Kiểm tra chất lượng sản phẩm) 是越南品管代名詞。",
        southTip: "「Tỷ lệ phế phẩm」即產線 NG 不良率。"
      },
      {
        speaker: "Giám đốc Nhà máy (廠長)",
        role: "npc",
        viet: "Chuyền 2 đang vận hành tự động hóa 80%, tỷ lệ lỗi duy trì ổn định ở mức 0.3%, thấp hơn nhiều so với tiêu chuẩn 1% của hợp đồng.",
        zh: "2 號產線目前實現 80% 自動化運轉，不良率穩定保持在 0.3%，遠低於合約規定的 1% 上限標準。",
        en: "Line 2 operates at 80% automation, maintaining defect rate stably at 0.3%, well below the contract 1% ceiling.",
        northTip: "「Vận hành」(運轉/運行)；「Tự động hóa」(自動化)。",
        southTip: "低於標準的良率是工廠向買家展現實力的最佳佐證。"
      },
      {
        speaker: "Chuyên gia Đánh giá (稽核主管)",
        role: "learner",
        viet: "Rất xuất sắc! Hệ thống 5S và lưu kho của xưởng rất ngăn nắp. Chúng tôi sẽ đánh giá đạt tiêu chuẩn nghiệm thu loại A.",
        zh: "非常優秀！廠房的 5S 管理與庫存倉儲非常整潔有序。我們將評定為 A 級驗收合格標準。",
        en: "Excellent! The 5S management and warehousing are very tidy. We will rate this as Grade A audit approval.",
        northTip: "「Hệ thống 5S」(5S管理體系)；「Lưu kho」(倉儲庫存)。",
        southTip: "給予工廠管理團隊肯定有助於深化日後外派配合默契。"
      }
    ],
    rolePlay: {
      userRoleZh: "驗廠稽核專家",
      userRoleEn: "Audit Specialist",
      partnerRoleZh: "越南廠長",
      partnerRoleEn: "Plant Manager",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Đây là sổ ghi chép kiểm tra KCS và biên bản xử lý linh kiện lỗi của xưởng. Anh có câu hỏi gì không?",
          partnerPromptZh: "這是廠裡的品管 (QC) 記錄簿與不良品處置報告。您有任何問題嗎？",
          partnerPromptEn: "Here is our QC inspection log and defect handling record. Any questions?",
          userOptions: [
            {
              id: "qc_opt1",
              textVi: "Hồ sơ ghi chép rất chi tiết và tuân thủ ISO. Tôi đánh giá cao quy trình kiểm soát chất lượng của xưởng.",
              textZh: "紀錄非常詳細且符合 ISO 標準。我高度讚賞廠方的品質控制流程。",
              textEn: "Very detailed records complying with ISO. I appreciate your quality control process.",
              isCorrect: true,
              feedbackZh: "專業客觀！認可工廠嚴謹制度，建立良好合作關係。",
              feedbackEn: "Professional praise acknowledging strict plant standards."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Kiểm toán", vi: "Kiểm toán", phonetic: "[kiəm˧˩ twaːn˦˧˥]", ipa: "[kiəm˧˩ twaːn˦˧˥]", zh: "驗廠稽核 / 審計", en: "Factory Audit / Inspection", hanViet: "Kiểm (檢) + Toán (算)" },
      { viet: "KCS", vi: "KCS", phonetic: "[ka-ce-es]", ipa: "[ka-ce-es]", zh: "品質檢驗 / 品管 (QC)", en: "Quality Control (QC)", hanViet: "Kiểm tra chất lượng sản phẩm" },
      { viet: "Phế phẩm", vi: "Phế phẩm", phonetic: "[fe˦˧˥ fəm˧˩]", ipa: "[fe˦˧˥ fəm˧˩]", zh: "不良品 / 報廢品 (NG)", en: "Defective Goods (NG)", hanViet: "Phế (廢) + Phẩm (品)" },
      { viet: "Năng suất", vi: "Năng suất", phonetic: "[naŋ˧ swət̚˦˧˥]", ipa: "[naŋ˧ swət̚˦˧˥]", zh: "產能 / 生產效率", en: "Productivity / Output", hanViet: "Năng (能) + Suất (率)" }
    ],
    culturalTip: {
      titleZh: "🏭 台越製造業驗廠與工廠管理眉角",
      titleEn: "Factory Inspection & Manufacturing Culture in Vietnam",
      contentZh: "越南是全球重要製造代工基地，台商在外派管理工廠時，需嚴格遵守 5S、工安衛生與消防規範。在與越南基層班長 (Trưởng chuyền) 和工人溝通時，切忌在眾人面前大聲斥責（避免傷及自尊失去面子），應採「恩威並濟、私下指導」的管理策略。",
      contentEn: "When managing factory operations in Vietnam, maintain strict 5S and safety rules. Avoid public scolding to preserve worker self-esteem; adopt a respectful, private guidance approach.",
      proTipZh: "✨ 秘笈：在車間設立「優秀員工之星」獎勵榜與激勵獎金，能顯著提升產線出勤率與穩定度！",
      proTipEn: "✨ Pro Tip: Establish an Employee of the Month bonus board to dramatically improve line attendance and retention."
    }
  },
  {
    id: "biz_customs_logistics",
    category: "business",
    tagZh: "海關物流",
    tagEn: "Customs & Logistics",
    icon: "🚢",
    image: "business.jpg",
    titleZh: "進出口海關報關、貨櫃裝箱與提單交期",
    titleEn: "Customs Clearance, Container Logistics & Bill of Lading (B/L)",
    titleVi: "Kê Khai Hải Quan Xuất Nhập Khẩu, Đóng Container & Vận Đơn B/L",
    summaryZh: "跨國貿易物流：掌握蓋萊港 (Cát Lái) / 海防港 (Hải Phòng) 報關程序、裝箱單 (Packing List) 與避免延滯費 (Demurrage)。",
    summaryEn: "International freight logistics: Cat Lai & Hai Phong customs clearance, Packing Lists, Bill of Lading, and avoiding demurrage fees.",
    dialogues: [
      {
        speaker: "Nhân viên Xuất Nhập Khẩu (報關專員)",
        role: "npc",
        viet: "Chào anh, lô hàng 2 container linh kiện từ Đài Loan đã cập cảng Cát Lái sáng nay.",
        zh: "您好，從台灣運來的 2 個貨櫃零件今早已經抵達胡志明市蓋萊港 (Cát Lái)。",
        en: "Hello, the 2-container shipment from Taiwan arrived at Cat Lai Port this morning.",
        northTip: "「Cập cảng」(進港靠泊)；「Lô hàng」(整批貨物)。",
        southTip: "胡志明市進出口主要走 Cát Lái，河內則走 Hải Phòng 港。"
      },
      {
        speaker: "Giám đốc Logistics (物流總監)",
        role: "learner",
        viet: "Tuyệt vời. Hồ sơ hải quan bao gồm Hóa đơn thương mại (Invoice), Bảng kê đóng gói (Packing List) và C/O đã hoàn tất chưa?",
        zh: "太好了。包含商業發票 (Invoice)、裝箱清單 (Packing List) 與產地證明 (C/O) 的報關文件都齊全了嗎？",
        en: "Great. Are all customs documents including Invoice, Packing List, and C/O completed?",
        northTip: "「Bảng kê đóng gói」(裝箱單)；「C/O」(產地證明書)。",
        southTip: "產地證明 C/O 攸關台越雙邊關稅減免優惠。"
      },
      {
        speaker: "Nhân viên Xuất Nhập Khẩu (報關專員)",
        role: "npc",
        viet: "Dạ đầy đủ rồi ạ. Chi cục hải quan đang tiến hành kiểm hóa luồng xanh, dự kiến chiều mai sẽ thông quan và kéo container về xưởng.",
        zh: "全部齊全。海關分局目前正在走綠線通關程序，預計明午即可完成清關並把貨櫃拖回工廠。",
        en: "All set. Customs is processing via Green Channel; clearance is expected by tomorrow afternoon to haul containers to the factory.",
        northTip: "「Luồng xanh」(綠線免驗通關)、「Thông quan」(清關放行)。",
        southTip: "綠線通關最快，黃線查單證，紅線則需 100% 開箱實體查驗。"
      },
      {
        speaker: "Giám đốc Logistics (物流總監)",
        role: "learner",
        viet: "Rất tốt. Hãy điều phối đội xe tải sẵn sàng để bốc dỡ hàng ngay, tránh phát sinh phí lưu kho (Demurrage) nhé.",
        zh: "很好。請調度好卡車車隊隨時準備卸貨，避免產生港口貨櫃延滯費 (Demurrage)。",
        en: "Very good. Coordinate the trucking fleet for immediate unloading to avoid container demurrage fees.",
        northTip: "「Bốc dỡ hàng」(裝卸貨物)；「Phí lưu kho」(滯港費)。",
        southTip: "及時還櫃是控制國際供應鏈成本的關鍵要點。"
      }
    ],
    rolePlay: {
      userRoleZh: "供應鏈主管",
      userRoleEn: "Supply Chain Manager",
      partnerRoleZh: "貨代物流專員",
      partnerRoleEn: "Freight Forwarder",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Lô hàng đã về đến cảng, anh muốn làm thủ tục thông quan luồng nào?",
          partnerPromptZh: "貨物已到港，您希望如何推進報關手續？",
          partnerPromptEn: "Shipment has arrived at port. How should we proceed with customs clearance?",
          userOptions: [
            {
              id: "log_opt1",
              textVi: "Hồ sơ của chúng tôi hoàn toàn hợp lệ, hãy nộp tờ khai điện tử để thông quan luồng xanh nhanh nhất.",
              textZh: "我們的文件完全合法合規，請立即提交電子申報以爭取最快綠線通關。",
              textEn: "Our documents are fully compliant; submit e-declaration for fastest Green Channel clearance.",
              isCorrect: true,
              feedbackZh: "非常專業！精準掌握合規電子申報與綠線通關要領。",
              feedbackEn: "Professional command ensuring smooth Green Channel e-customs clearance."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Hải quan", vi: "Hải quan", phonetic: "[haːj˧˩ kwaːn˧]", ipa: "[haːj˧˩ kwaːn˧]", zh: "海關 / 關稅局", en: "Customs Authority", hanViet: "Hải (海) + Quan (關)" },
      { viet: "Thông quan", vi: "Thông quan", phonetic: "[tʰəwŋm˧ kwaːn˧]", ipa: "[tʰəwŋm˧ kwaːn˧]", zh: "海關清關 / 放行", en: "Customs Clearance", hanViet: "Thông (通) + Quan (關)" },
      { viet: "Vận đơn", vi: "Vận đơn", phonetic: "[vən˧˨ ɗəːn˧]", ipa: "[vən˧˨ ɗəːn˧]", zh: "提單 (B/L) / 貨運單", en: "Bill of Lading (B/L)", hanViet: "Vận (運) + Đơn (單)" },
      { viet: "Container", vi: "Container", phonetic: "[kɔŋ-te-nơ]", ipa: "[kɔŋ-te-nơ]", zh: "貨櫃 / 集裝箱", en: "Shipping Container", hanViet: "" }
    ],
    culturalTip: {
      titleZh: "🚢 越南進出口通關與港口物流實務",
      titleEn: "Vietnam Port Logistics & Customs Flow (Cat Lai & Hai Phong)",
      contentZh: "南越進出口主要依賴胡志明市蓋萊港 (Cát Lái) 與巴地頭頓蓋梅深水港 (Cái Mép)，北越則以海防港 (Hải Phòng) 為中樞。越南海關實行「綠線 (Luồng xanh 免驗)、黃線 (Luồng vàng 審單)、紅線 (Luồng đỏ 查驗)」三級通關制度。保持文件一致性是確保綠線通關、杜絕海關卡關的唯一法門。",
      contentEn: "Vietnam operates a 3-tier customs system: Green (Immediate clearance), Yellow (Document review), and Red (Physical inspection). Data consistency across Invoices and B/L is essential for fast Green-tier approval.",
      proTipZh: "✨ 秘笈：提單上的收貨人抬頭與統編必須與越南公司的營業執照完全一致，錯一個英文字母都可能導致無法清關！",
      proTipEn: "✨ Pro Tip: Consignee name and MST on the B/L must match the Vietnamese business license letter-for-letter."
    }
  },
  {
    id: "biz_nhau_banquet",
    category: "business",
    tagZh: "商務應酬",
    tagEn: "Banquet & Nhậu",
    icon: "🍻",
    image: "business.jpg",
    titleZh: "商務宴請、酒桌應酬祝酒與座位禮儀",
    titleEn: "Business Banquet, 'Nhậu' Toasting Rituals & Dining Etiquette",
    titleVi: "Tiệc Chiêu Đãi Đối Tác, Nghi Thức Chúc Rượu & Văn Hóa Nhậu",
    summaryZh: "商務人脈沉澱：學會正式晚宴座位安排、雙手敬酒致意、齊喊「1, 2, 3, Dô!」與優雅表達酒量防線。",
    summaryEn: "Corporate dining etiquette: banquet seating hierarchy, two-handed toasts, '1-2-3 Dô' cheers, and tactful drinking moderation.",
    dialogues: [
      {
        speaker: "Chủ tịch Tập đoàn (董事長)",
        role: "npc",
        viet: "Rất vinh hạnh được đón tiếp phái đoàn doanh nghiệp Đài Loan tại TP.HCM! Xin mời anh Chen ngồi vào vị trí danh dự này.",
        zh: "非常榮幸在胡志明市接待台灣企業考察團！請陳總坐上這個貴賓主座。",
        en: "Great honor to host our Taiwanese delegation in HCMC! Please take this seat of honor, Mr. Chen.",
        northTip: "「Vị trí danh dự」(榮譽主賓席) 通常面向大門。",
        southTip: "商務宴請主人會親自引導貴賓入座以示敬重。"
      },
      {
        speaker: "Trưởng đoàn Đài Loan (台方團長)",
        role: "learner",
        viet: "Dạ, cảm ơn Chủ tịch Vũ đã tiếp đón vô cùng nồng hậu! Chúng tôi rất trân trọng tình cảm và sự chu đáo của quý tập đoàn.",
        zh: "謝謝武董事長無比熱情的款待！我們非常珍惜貴集團的深厚情誼與周到安排。",
        en: "Thank you Chairman Vu for the warm reception! We deeply appreciate your gracious hospitality.",
        northTip: "「Nồng hậu」(熱情濃厚)；「Tình cảm」(人際情誼)。",
        southTip: "在越南商務文化中，表達對主方「Tình cảm」的感謝能大幅增進好感。"
      },
      {
        speaker: "Chủ tịch Tập đoàn (董事長)",
        role: "npc",
        viet: "Nào, tất cả anh em cùng nâng ly! Một, hai, ba, dô! Hai, ba, dô! Trăm phần trăm vì sự hợp tác thành công rực rỡ!",
        zh: "來，大家一起舉杯！一、二、三，乾！二、三，乾！百分之百乾杯，慶祝我們合作圓滿成功！",
        en: "Come on everyone, raise your glasses! 1, 2, 3, Cheers! 100% bottoms up for our brilliant cooperation!",
        northTip: "「Một, hai, ba, dô!」是全越南共通的酒桌靈魂口號。",
        southTip: "首杯通常全員 100% 乾杯以示團結。"
      },
      {
        speaker: "Trưởng đoàn Đài Loan (台方團長)",
        role: "learner",
        viet: "Dạ, chúc Chủ tịch Vũ sức khỏe dồi dào, chúc quý tập đoàn vạn sự như ý và kinh doanh đại phát tài!",
        zh: "祝武董事長身體健康、貴集團萬事如意、生意大發財！",
        en: "Wishing Chairman Vu abundant health, and your group immense prosperity and thriving business!",
        northTip: "「Sức khỏe dồi dào」(健康充沛) 是最得體的敬酒祝福詞。",
        southTip: "雙手敬酒、杯緣略低於對方杯緣展現高超社交教養。"
      }
    ],
    rolePlay: {
      userRoleZh: "出差貴賓團長",
      userRoleEn: "Chief Guest",
      partnerRoleZh: "越南集團董事長",
      partnerRoleEn: "Chairman Host",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Nào anh Chen, chúng ta cùng cạn ly đầu tiên 100% chúc mừng tình hữu nghị hai bên nhé!",
          partnerPromptZh: "來陳總，我們一起乾了這第一杯 100%，慶祝雙方友誼長存！",
          partnerPromptEn: "Come Mr. Chen, let us finish our first glass 100% to celebrate our partnership!",
          userOptions: [
            {
              id: "nhau_opt1",
              textVi: "Dạ vâng! Kính chúc Chủ tịch và quý công ty ngày càng phát triển thịnh vượng! Một, hai, ba, dô!",
              textZh: "好的！敬祝董事長與貴公司日益繁榮昌盛！一、二、三，乾！",
              textEn: "Yes! Wishing the Chairman and your company thriving prosperity! 1, 2, 3, Cheers!",
              isCorrect: true,
              feedbackZh: "豪爽得體！首杯給足主人面子，氣氛瞬間熱絡！",
              feedbackEn: "Masterclass in hospitality etiquette honoring the host on the opening toast."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Nâng ly", vi: "Nâng ly", phonetic: "[nəŋ˧ li˧]", ipa: "[nəŋ˧ li˧]", zh: "舉杯祝酒 / 碰杯", en: "Raise a Glass / Toast", hanViet: "" },
      { viet: "Chiêu đãi", vi: "Chiêu đãi", phonetic: "[tɕiəw˧ ɗaːj˦˧˥]", ipa: "[tɕiəw˧ ɗaːj˦˧˥]", zh: "款待 / 設宴招待", en: "Host a Banquet / Treat", hanViet: "Chiêu (招) + Đãi (待)" },
      { viet: "Trăm phần trăm", vi: "Trăm phần trăm", phonetic: "[tɕam˧ fən˨˩ tɕam˧]", ipa: "[tɕam˧ fən˨˩ tɕam˧]", zh: "百分之百 / 乾杯 (Bottoms up)", en: "100% / Bottoms up", hanViet: "" },
      { viet: "Thịnh vượng", vi: "Thịnh vượng", phonetic: "[tʰiɲ˧˨ vɨəŋ˧˨]", ipa: "[tʰiɲ˧˨ vɨəŋ˧˨]", zh: "繁榮昌盛 / 興旺發達", en: "Prosperity / Thriving", hanViet: "Thịnh (盛) + Vượng (旺)" }
    ],
    culturalTip: {
      titleZh: "🍻 越南商務酒桌 (Nhậu) 核心潛規則",
      titleEn: "The Social Dynamics of Vietnamese Business Dining",
      contentZh: "在越南商務生態中，「酒桌」(Bàn nhậu) 是快速建立「私交信任 (Tình cảm)」的最強催化劑。許多在會議室無法鬆口的商務條款，常在酒酣耳熱之際取得共識。敬酒時切記：右手拿杯、左手扶底，自己杯緣略低於長官杯緣。若不勝酒力，喝完第一杯後可誠懇告知「Tửu lượng tôi kém」(我酒量弱) 並改敬汽水茶水。",
      contentEn: "Social drinking builds emotional rapport essential for closing deals in Vietnam. Always hold your glass with both hands with your rim slightly lower than senior hosts.",
      proTipZh: "✨ 秘笈：宴席進行到中段時，藉故上洗手間悄悄把帳單結清，會讓越南合作夥伴對你刮目相看！",
      proTipEn: "✨ Pro Tip: Settling the bill discreetly during a bathroom break earns tremendous respect from local partners."
    }
  },
  {
    id: "biz_bank_finance",
    category: "business",
    tagZh: "銀行金流",
    tagEn: "Banking & Finance",
    icon: "🏦",
    image: "business.jpg",
    titleZh: "越南銀行開戶、跨國匯款與企業信用狀",
    titleEn: "Corporate Banking Setup, Cross-Border Remittance & LC Issuance",
    titleVi: "Mở Tài Khoản Ngân Hàng Doanh Nghiệp, Chuyển Tiền & Mở Thư Tín Dụng L/C",
    summaryZh: "外派財務運作：辦理企業外幣與越盾帳戶開戶、開立不可撤銷信用狀 (L/C) 與向銀行申辦跨國結匯手續。",
    summaryEn: "Corporate treasury: open foreign currency and VND bank accounts, issue Irrevocable Letters of Credit (L/C), and international wire transfers.",
    dialogues: [
      {
        speaker: "Giao dịch viên Ngân hàng (銀行行員)",
        role: "npc",
        viet: "Kính chào anh, Ngân hàng Vietcombank có thể hỗ trợ gì cho doanh nghiệp có vốn đầu tư nước ngoài (FDI) của anh ạ?",
        zh: "您好，請問 Vietcombank 越南外貿銀行能為貴外商直接投資 (FDI) 企業提供什麼協助？",
        en: "Welcome, how can Vietcombank assist your Foreign Direct Investment (FDI) enterprise today?",
        northTip: "「Doanh nghiệp FDI」為外商投資企業簡稱。",
        southTip: "Vietcombank, BIDV, Techcombank 是越南三大主流外貿銀行。"
      },
      {
        speaker: "Giám đốc Tài chính (財務長)",
        role: "learner",
        viet: "Chúng tôi muốn mở tài khoản vốn đầu tư trực tiếp (DICA) bằng USD và tài khoản thanh toán bằng VND cho công ty mới thành lập.",
        zh: "我們想為新成立的公司開設 USD 直接投資資本帳戶 (DICA) 以及 VND 活期結算帳戶。",
        en: "We want to open a Direct Investment Capital Account (DICA) in USD and a VND payment account for our new entity.",
        northTip: "「Tài khoản vốn đầu tư」(資本帳戶 DICA) 依越南法規必須專款專用。",
        southTip: "所有外資資本金注資必須透過 DICA 資本帳戶匯入。"
      },
      {
        speaker: "Giao dịch viên Ngân hàng (銀行行員)",
        role: "npc",
        viet: "Dạ vâng, anh vui lòng xuất trình Giấy chứng nhận đầu tư (IRC), Giấy đăng ký doanh nghiệp (ERC) và hộ chiếu của người đại diện pháp luật.",
        zh: "好的，請出示投資許可證 (IRC)、企業登記證 (ERC) 以及法定代表人的護照原件。",
        en: "Certainly, please present your Investment Certificate (IRC), Enterprise Certificate (ERC), and Legal Representative passport.",
        northTip: "「IRC」與「ERC」是越南外資開戶兩大核心執照。",
        southTip: "「Người đại diện pháp luật」即公司法定代表人。"
      },
      {
        speaker: "Giám đốc Tài chính (財務長)",
        role: "learner",
        viet: "Hồ sơ của chúng tôi đã công chứng hợp lệ. Ngoài ra chúng tôi muốn mở hạn mức Tín dụng thư (L/C) 500.000 USD để nhập khẩu máy móc.",
        zh: "我們所有文件均已完成合法公證。另外我們想開立 50 萬美元信用狀 (L/C) 額度以進口生產設備機器。",
        en: "Our documents are notarized. We also want to establish a $500,000 Letter of Credit (L/C) facility for machinery imports.",
        northTip: "「Công chứng」(公證認證)；「Tín dụng thư L/C」(信用狀)。",
        southTip: "進口大型重機設備多採用 L/C 確保交易安全。"
      }
    ],
    rolePlay: {
      userRoleZh: "企業財務長",
      userRoleEn: "Chief Financial Officer",
      partnerRoleZh: "銀行客戶經理",
      partnerRoleEn: "Bank Relationship Manager",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Để làm thủ tục chuyển tiền lợi nhuận về Đài Loan sau quyết toán thuế, doanh nghiệp cần chuẩn bị những gì?",
          partnerPromptZh: "在完成年度稅務結算後，企業欲將利潤匯回台灣需準備哪些文件？",
          partnerPromptEn: "What documents are required to remit post-tax corporate profits back to Taiwan?",
          userOptions: [
            {
              id: "fin_opt1",
              textVi: "Chúng tôi đã hoàn thành nghĩa vụ nộp thuế và có báo cáo tài chính đã kiểm toán độc lập theo quy định của Ngân hàng Nhà nước.",
              textZh: "我們已履行全部納稅義務，並備齊經獨立審計之年度財務報告，符合越南國家銀行匯出法規。",
              textEn: "We fulfilled all tax obligations and prepared audited financial reports complying with State Bank of Vietnam regulations.",
              isCorrect: true,
              feedbackZh: "回答無懈可擊！完全掌握外商跨國利潤匯回的合法合規程序。",
              feedbackEn: "Flawless compliance answer matching State Bank of Vietnam profit repatriation rules."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Tài khoản", vi: "Tài khoản", phonetic: "[taːj˨˩ kʰwaːn˧˩]", ipa: "[taːj˨˩ kʰwaːn˧˩]", zh: "銀行帳戶 / 帳號", en: "Bank Account", hanViet: "Tài (財) + Khoản (款)" },
      { viet: "Tín dụng thư", vi: "Tín dụng thư", phonetic: "[tin˦˧˥ zuŋ˧˨ tʰɨ˧]", ipa: "[tin˦˧˥ zuŋ˧˨ tʰɨ˧]", zh: "信用狀 (L/C)", en: "Letter of Credit (L/C)", hanViet: "Tín (信) + Dụng (用) + Thư (書)" },
      { viet: "Chuyển tiền", vi: "Chuyển tiền", phonetic: "[tɕwiən˧˩ tiən˨˩]", ipa: "[tɕwiən˧˩ tiən˨˩]", zh: "匯款 / 轉帳", en: "Wire Transfer / Remittance", hanViet: "Chuyển (轉) + Tiền (錢)" },
      { viet: "Tỷ giá", vi: "Tỷ giá", phonetic: "[ti˧˩ zaː˦˧˥]", ipa: "[ti˧˩ zaː˦˧˥]", zh: "匯率 / 外匯牌價", en: "Exchange Rate", hanViet: "Tỷ (比) + Giá (價)" }
    ],
    culturalTip: {
      titleZh: "🏦 越南外資金融外匯管理與資金進出法規",
      titleEn: "Foreign Exchange & Capital Repatriation Regulations in Vietnam",
      contentZh: "越南實施嚴格之外匯管制 (Quản lý ngoại hối)。外商直接投資企業必須在註冊所在地之商業銀行開設專用的「直接投資資本帳戶 (DICA)」，所有註冊資本金、外債借款與年度稅後利潤匯回均必須經由此帳戶運作。保留完整的完稅證明 (Biên lai nộp thuế) 與審計報告是合法結匯出境的先決條件。",
      contentEn: "Vietnam strictly regulates foreign exchange. Foreign enterprises must route all registered capital and profit repatriation through dedicated Direct Investment Capital Accounts (DICA).",
      proTipZh: "✨ 秘笈：在越南開戶時，公司印章（Con dấu pháp nhân）極具法律效力，蓋印位置與清晰度需與銀行印鑑卡完全一致！",
      proTipEn: "✨ Pro Tip: Corporate company stamp chops carry immense legal power in banking; stamp positioning must match signature cards perfectly."
    }
  },
  {
    id: "biz_hiring_labor",
    category: "business",
    tagZh: "人資招募",
    tagEn: "Recruitment & Labor",
    icon: "👥",
    image: "business.jpg",
    titleZh: "工廠招募招工、勞動合約與加班排班",
    titleEn: "Factory Recruitment, Labor Contracts & Overtime Shift Planning",
    titleVi: "Tuyển Dụng Lao Động Nhà Máy, Ký Hợp Đồng & Bố Trí Tăng Ca",
    summaryZh: "廠房人資管理：招聘車間技術工、核定底薪與全勤津貼 (Phụ cấp chuyên cần)、簽署勞動合約與安排合法加班 (Tăng ca)。",
    summaryEn: "HR factory operations: hire line technicians, structure basic wages and attendance allowances, execute labor contracts, and schedule legal OT shifts.",
    dialogues: [
      {
        speaker: "Trưởng phòng Nhân sự HR (人資主管)",
        role: "npc",
        viet: "Thưa Tổng Giám Đốc, để chuẩn bị cho kế hoạch mở rộng chuyền sản xuất mới, xưởng chúng ta cần tuyển thêm 100 công nhân may và 10 kỹ thuật viên.",
        zh: "報告總經理，為了配合新產線擴產計畫，我們廠需要額外招聘 100 名車縫工與 10 名技術工程師。",
        en: "General Director, for our line expansion, we need to recruit 100 machine operators and 10 technicians.",
        northTip: "「Công nhân may」(成衣車縫工)；「Kỹ thuật viên」(技術員)。",
        southTip: "平陽、同奈工業區招工競爭激烈，薪資福利結構是關鍵。"
      },
      {
        speaker: "Tổng Giám Đốc (總經理)",
        role: "learner",
        viet: "Mức lương cơ bản và các khoản phụ cấp (chuyên cần, nhà ở, xăng xe) hiện tại chúng ta đề xuất thế nào so với mặt bằng chung trong KCN?",
        zh: "我們目前規劃的底薪與各項津貼（全勤、住房、油資補貼）比起工業區整體行情如何？",
        en: "How does our proposed basic salary and allowances (attendance, housing, gas) compare to the industrial park benchmark?",
        northTip: "「Lương cơ bản」(基本工資/底薪)；「Phụ cấp」(津貼補貼)。",
        southTip: "提供完善津貼（全勤、餐費）能有效降低工廠離職率。"
      },
      {
        speaker: "Trưởng phòng Nhân sự HR (人資主管)",
        role: "npc",
        viet: "Dạ, mức lương cơ bản bên mình cao hơn mức lương tối thiểu vùng 15%, cộng với đóng bảo hiểm xã hội (BHXH) đầy đủ nên người lao động rất hào hứng ứng tuyển.",
        zh: "我們的底薪高於地區最低法定工資 15%，加上依法全額投保社會保險 (BHXH)，因此求職者應徵非常踴躍。",
        en: "Our basic wage is 15% above the regional minimum, and we cover full social insurance (BHXH), attracting strong applicant interest.",
        northTip: "「Lương tối thiểu vùng」(地區最低工資)；「Bảo hiểm xã hội BHXH」(社保)。",
        southTip: "合規繳納 BHXH 是越南員工最看重的核心權益之一。"
      },
      {
        speaker: "Tổng Giám Đốc (總經理)",
        role: "learner",
        viet: "Rất tốt. Nhớ thỏa thuận rõ trong hợp đồng lao động về quy định làm thêm giờ (tăng ca) và thưởng lương tháng 13 theo luật lao động nhé.",
        zh: "很好。記得在勞動合約中明確載明加班規範與年終第 13 個月薪資獎金，嚴格遵守勞動法。",
        en: "Very good. Ensure the labor contract clearly states overtime rules and 13th-month Tet bonus pursuant to labor laws.",
        northTip: "「Thưởng lương tháng 13」(年終第13個月薪資獎金)。",
        southTip: "「Luật lao động」(勞動法規) 是台商外派幹部必備合規常識。"
      }
    ],
    rolePlay: {
      userRoleZh: "外派總經理",
      userRoleEn: "General Director",
      partnerRoleZh: "越南人資經理",
      partnerRoleEn: "HR Manager",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Để khuyến khích công nhân tăng ca kịp tiến độ xuất hàng tháng này, chúng ta nên có chính sách phụ cấp thế nào?",
          partnerPromptZh: "為了鼓勵工人配合加班趕上本月的出貨進度，我們應該採取怎樣的津貼政策？",
          partnerPromptEn: "To motivate workers for overtime to meet this month's shipping deadline, what allowance policy should we apply?",
          userOptions: [
            {
              id: "hr_opt1",
              textVi: "Chi trả tiền tăng ca 150% ngày thường, 200% ngày nghỉ theo luật, cộng thêm suất ăn tối miễn phí chất lượng cao.",
              textZh: "依勞動法平日支付 150%、休息日 200% 加班費，並額外提供高規格免費營養晚餐。",
              textEn: "Pay legal 150% weekday / 200% weekend OT rates, plus high quality complimentary hot dinners.",
              isCorrect: true,
              feedbackZh: "管理滿分！完全符合越南勞動法規，兼顧福利與產線士氣。",
              feedbackEn: "Exemplary management ensuring legal compliance while boosting worker morale."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Tuyển dụng", vi: "Tuyển dụng", phonetic: "[twiən˧˩ zuŋ˧˨]", ipa: "[twiən˧˩ zuŋ˧˨]", zh: "招聘 / 招募人員", en: "Recruitment / Hiring", hanViet: "Tuyển (選) + Dụng (用)" },
      { viet: "Tăng ca", vi: "Tăng ca", phonetic: "[taŋ˧ kaː˧]", ipa: "[taŋ˧ kaː˧]", zh: "加班 (Overtime)", en: "Overtime (OT)", hanViet: "Tăng (增) + Ca (班/班次)" },
      { viet: "Phụ cấp", vi: "Phụ cấp", phonetic: "[fu˧˨ kəp̚˦˧˥]", ipa: "[fu˧˨ kəp̚˦˧˥]", zh: "津貼 / 補貼", en: "Allowance / Subsidy", hanViet: "Phụ (附/副) + Cấp (給)" },
      { viet: "Lương tháng 13", vi: "Lương tháng 13", phonetic: "[lɨəŋ˧ tʰaːŋ˦˧˥]", ipa: "[lɨəŋ˧ tʰaːŋ˦˧˥]", zh: "第13個月薪資 (年終獎金)", en: "13th Month Salary (Tet Bonus)", hanViet: "Lương (糧/薪) + Tháng 13" }
    ],
    culturalTip: {
      titleZh: "👥 越南工廠人資管理與春節獎金 (Lương tháng 13) 文化",
      titleEn: "Labor Management & 13th-Month Tet Bonus in Vietnam",
      contentZh: "在越南管理製造業團隊，農曆春節前的「第 13 個月薪資 (Lương tháng 13)」具有極高的文化重要性，幾乎被視為法定標準福利。每年尾牙 (Tiệc tất niên)，公司若能舉辦摸彩大獎並及時發放返鄉年終獎金，將大幅提高年後返工率 (Tỷ lệ quay lại làm việc)。",
      contentEn: "The 13th-month Tet bonus is a paramount cultural institution in Vietnamese labor management. Hosting Year-End party raffles ensures high post-Tet worker return rates.",
      proTipZh: "✨ 秘笈：每逢越南婦女節 (20/10) 或國際婦女節 (8/3)，為女性員工準備小禮物或鮮花，能創造極強的向心力！",
      proTipEn: "✨ Pro Tip: Gifting flowers on Vietnamese Women's Day (Oct 20) generates tremendous goodwill among female factory workers."
    }
  },
  {
    id: "biz_exclusive_agency",
    category: "business",
    tagZh: "經銷通路",
    tagEn: "Distributorship",
    icon: "🤝",
    image: "business.jpg",
    titleZh: "獨家經銷代理權、年度業績目標與市場拓展",
    titleEn: "Exclusive Distributorship, Annual Sales Quotas & Channel Strategy",
    titleVi: "Ký Hợp Đồng Đại Lý Độc Quyền, Chỉ Tiêu Doanh Số & Mở Rộng Thị Trường",
    summaryZh: "通路拓展戰略：簽署分區獨家總代理合約 (Đại lý độc quyền)、設定季度 KPI 採購承諾與行銷補貼分攤。",
    summaryEn: "Channel expansion: negotiate regional exclusive distribution contracts, quarterly sales quotas (KPIs), and co-marketing subsidies.",
    dialogues: [
      {
        speaker: "Nhà Phân phối Việt Nam (越南經銷商)",
        role: "npc",
        viet: "Chào anh, công ty chúng tôi có hơn 500 đại lý cấp 2 trên toàn quốc và muốn xin làm nhà phân phối độc quyền cho thương hiệu của anh tại Việt Nam.",
        zh: "您好，我們在全越南擁有超過 500 家二級經銷商通路，希望能爭取貴品牌在越南的獨家總代理權。",
        en: "Hello, we have over 500 Tier-2 dealers nationwide and want to become your exclusive distributor in Vietnam.",
        northTip: "「Nhà phân phối」(經銷商)；「Đại lý độc quyền」(獨家代理)。",
        southTip: "越南通路結構分為 Nhà phân phối (總代) 與 Đại lý cấp 1/cấp 2 (分銷商)。"
      },
      {
        speaker: "Giám đốc Phát triển Thị trường (市場總監)",
        role: "learner",
        viet: "Chúng tôi rất hoan nghênh. Để được cấp quyền độc quyền toàn quốc, chỉ tiêu doanh số (Target) năm đầu tiên của bên chị là bao nhiêu?",
        zh: "我們非常歡迎。為了取得全越南獨家代理權，您承諾的第一年年度銷售目標 (Target) 是多少？",
        en: "We welcome this. To grant nationwide exclusivity, what is your first-year sales target commitment?",
        northTip: "「Chỉ tiêu doanh số」(銷售目標/KPI 額度)。",
        southTip: "以銷量承諾換取獨家保護是品牌方必談的核心條件。"
      },
      {
        speaker: "Nhà Phân phối Việt Nam (越南經銷商)",
        role: "npc",
        viet: "Chúng tôi cam kết doanh số năm đầu tối thiểu 1.000.000 USD, chia đều cho 4 quý. Đổi lại, bên anh hỗ trợ 5% chi phí quảng cáo tiếp thị nhé.",
        zh: "我們承諾第一年最低銷售額為 100 萬美金，平均分攤至 4 個季度。作為交換，希望貴方能補貼 5% 的行銷推廣廣告費。",
        en: "We commit to a minimum of $1,000,000 in Year 1 across 4 quarters. In return, we request 5% co-marketing support.",
        northTip: "「Chi phí quảng cáo tiếp thị」(廣告行銷費用)。",
        southTip: "提供行銷補貼 (MKT subsidy) 能激勵經銷商鋪貨推廣。"
      },
      {
        speaker: "Giám đốc Phát triển Thị trường (市場總監)",
        role: "learner",
        viet: "Thỏa thuận rất công bằng. Chúng tôi sẽ soạn thảo hợp đồng khung có điều khoản đánh giá KPI định kỳ hàng quý. Chúc mừng hợp tác!",
        zh: "這個協議非常公平。我們將擬定框架合約並加入每季定期 KPI 評核條款。祝我們合作成功！",
        en: "Very fair agreement. We will draft the framework contract with quarterly KPI review clauses. Cheers to our cooperation!",
        northTip: "「Hợp đồng khung」(框架合約)；「Đánh giá định kỳ」(定期考核)。",
        southTip: "設有解約與續約門檻的獨家合約才能保障品牌長遠利益。"
      }
    ],
    rolePlay: {
      userRoleZh: "品牌外貿總監",
      userRoleEn: "Brand Director",
      partnerRoleZh: "越南總代經理",
      partnerRoleEn: "Distributor GM",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Nếu quý 1 bên em vượt 120% chỉ tiêu doanh số, thương hiệu có chính sách thưởng chiết khấu thêm không?",
          partnerPromptZh: "如果第 1 季我們超額完成 120% 銷售目標，品牌方有額外的業績獎勵折讓政策嗎？",
          partnerPromptEn: "If we exceed our Q1 target by 120%, does the brand offer an additional rebate bonus?",
          userOptions: [
            {
              id: "dist_opt1",
              textVi: "Tất nhiên rồi! Chúng tôi sẽ thưởng thêm 2% chiết khấu vào đơn hàng tiếp theo để khuyến khích đại lý.",
              textZh: "當然！我們會在下一批訂單中額外給予 2% 折扣獎勵，以激勵經銷夥伴。",
              textEn: "Certainly! We will award an extra 2% rebate on the subsequent order to reward your achievement.",
              isCorrect: true,
              feedbackZh: "激勵滿分！階梯式超額返利能激發經銷商最大賣貨動能。",
              feedbackEn: "Excellent incentive structure aligning distributor motivation with brand growth."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Độc quyền", vi: "Độc quyền", phonetic: "[ɗəwk͡p̚˧˨ kwiən˨˩]", ipa: "[ɗəwk͡p̚˧˨ kwiən˨˩]", zh: "獨家 / 獨占代理權", en: "Exclusive Rights", hanViet: "Độc (獨) + Quyền (權)" },
      { viet: "Doanh số", vi: "Doanh số", phonetic: "[zaːɲ˧ so˦˧˥]", ipa: "[zaːɲ˧ so˦˧˥]", zh: "營業額 / 銷售額", en: "Sales Turnover / Revenue", hanViet: "Doanh (營) + Số (數)" },
      { viet: "Phân phối", vi: "Phân phối", phonetic: "[fən˧ foj˦˧˥]", ipa: "[fən˧ foj˦˧˥]", zh: "分銷 / 經銷配送", en: "Distribution", hanViet: "Phân (分) + Phối (配)" },
      { viet: "Tiếp thị", vi: "Tiếp thị", phonetic: "[tiəp̚˦˧˥ tʰi˧˨]", ipa: "[tiəp̚˦˧˥ tʰi˧˨]", zh: "行銷 / 市場推廣 (Marketing)", en: "Marketing", hanViet: "Tiếp (接) + Thị (市)" }
    ],
    culturalTip: {
      titleZh: "🤝 越南經銷通路商務博弈與市場開拓",
      titleEn: "Building Sustainable Distribution Channels in Vietnam",
      contentZh: "越南市場地形狹長，北越（河內）、中越（峴港）、南越（胡志明市）三大區域消費者偏好與通路體系截然不同。許多品牌會先給予「區域獨家」(Độc quyền vùng)，待經銷商連續 2~3 季達到 KPI 目標後，再升級為「全越南獨家總代理」(Tổng đại lý toàn quốc)，既能降低市場試錯風險，又能充分激勵經銷團隊。",
      contentEn: "Given Vietnam's regional diversity, brands often begin with regional exclusivity (North/South) before upgrading to nationwide master distributorship upon hitting quarterly KPIs.",
      proTipZh: "✨ 秘笈：在獨家經銷合約中明確寫入「若連續 2 季未達 70% 目標，自動轉為非獨家普通經銷」之落日條款！",
      proTipEn: "✨ Pro Tip: Include a sunset clause converting exclusivity into regular status if KPIs fall below 70% for two consecutive quarters."
    }
  }
];

// Read existing file and parse situationalScenarios array
const exportMatch = fileContent.match(/export const situationalScenarios = (\[[\s\S]*\]);?\s*$/);
if (!exportMatch) {
  console.error("Could not find situationalScenarios export in situationalScenarios.js");
  process.exit(1);
}

// Check existing IDs to avoid duplicates
const existingIds = new Set();
const idRegex = /"id":\s*"([^"]+)"/g;
let match;
while ((match = idRegex.exec(fileContent)) !== null) {
  existingIds.add(match[1]);
}

const scenariosToAdd = newBusinessScenarios.filter(s => !existingIds.has(s.id));
console.log(`Found ${scenariosToAdd.length} new business scenarios to append (out of ${newBusinessScenarios.length}).`);

if (scenariosToAdd.length > 0) {
  // Find where situationalScenarios array ends
  const lastBracketIndex = fileContent.lastIndexOf('];');
  const lastBracketOnly = fileContent.lastIndexOf(']');
  const insertionPoint = lastBracketIndex !== -1 ? lastBracketIndex : lastBracketOnly;

  const scenariosJson = scenariosToAdd.map(s => JSON.stringify(s, null, 2)).join(',\n');
  
  // Insert with proper comma
  const before = fileContent.slice(0, insertionPoint).trimEnd();
  const needsComma = !before.endsWith(',');
  const newContent = `${before}${needsComma ? ',' : ''}\n${scenariosJson}\n];\n`;

  fs.writeFileSync(scenarioFilePath, newContent, 'utf8');
  console.log(`Successfully appended ${scenariosToAdd.length} business scenarios to situationalScenarios.js!`);
} else {
  console.log('All 10 business scenarios are already present in situationalScenarios.js.');
}
