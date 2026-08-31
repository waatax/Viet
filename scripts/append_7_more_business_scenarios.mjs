import fs from 'fs';
import path from 'path';

const scenarioFilePath = path.resolve('src/data/situationalScenarios.js');
let fileContent = fs.readFileSync(scenarioFilePath, 'utf8');

const additionalBusinessScenarios = [
  {
    id: "biz_factory_lease",
    category: "business",
    tagZh: "廠房租賃",
    tagEn: "Factory & Land Lease",
    icon: "🏗️",
    image: "business.jpg",
    titleZh: "工業區土地租賃、標準廠房挑選與基礎設施談判",
    titleEn: "Industrial Land & Ready-Built Factory (RBF) Lease Negotiation",
    titleVi: "Thuê Đất Công Nghiệp, Chọn Nhà Xưởng Xây Sẵn & Đàm Phán Hạ Tầng",
    summaryZh: "外資設廠選址：挑選平陽/北寧標準廠房 (RBF)、洽談每平米月租金 ($/m2/tháng)、變壓站容量 (KVA) 與廢水排放指標。",
    summaryEn: "Factory site selection: negotiate ready-built factory (RBF) rent in Binh Duong/Bac Ninh, power substation KVA capacity, and wastewater quota.",
    dialogues: [
      {
        speaker: "Đại diện Chủ đầu tư KCN (園區招商主管)",
        role: "npc",
        viet: "Kính chào đoàn doanh nghiệp Đài Loan! Khu công nghiệp VSIP chúng tôi xin giới thiệu cụm nhà xưởng xây sẵn (RBF) diện tích 5.000 m2 vừa hoàn thiện.",
        zh: "熱烈歡迎台灣企業代表團！我們 VSIP 工業園區向各位介紹剛竣工的 5,000 平方公尺標準廠房 (RBF) 區塊。",
        en: "Welcome Taiwanese delegation! Our VSIP Industrial Park introduces our newly completed 5,000 m2 Ready-Built Factory (RBF).",
        northTip: "「Chủ đầu tư KCN」指工業區開發運營商；「Nhà xưởng xây sẵn」即標準廠房。",
        southTip: "平陽、同奈是台商租賃標準廠房最密集的聚落。"
      },
      {
        speaker: "Tổng Giám Đốc Doanh nghiệp (設廠總經理)",
        role: "learner",
        viet: "Mức giá thuê hiện tại là bao nhiêu USD một mét vuông mỗi tháng? Giá này đã bao gồm phí quản lý hạ tầng và tiền bảo dưỡng chưa?",
        zh: "目前每平方公尺月租金是多少美金？此價格是否已包含基礎設施管理費與維護費？",
        en: "What is the monthly rental rate per square meter in USD? Does this include infrastructure management and maintenance fees?",
        northTip: "「Giá thuê」(租金價格)；「Phí quản lý hạ tầng」(園區基建管理費)。",
        southTip: "詢問租金時務必確認管理費（通常約 $0.05~$0.08/m2/月）是否內含。"
      },
      {
        speaker: "Đại diện Chủ đầu tư KCN (園區招商主管)",
        role: "npc",
        viet: "Đơn giá thuê là 4.8 USD/m2/tháng. Xưởng có sẵn trạm biến áp 1.000 KVA và công suất đấu nối xử lý nước thải 50 m3/ngày đêm.",
        zh: "租金單價為每平方公尺每月 4.8 美金。廠房配備獨立 1,000 KVA 變電站，並提供每日 50 立方公尺之廢水納管處理額度。",
        en: "Rent is $4.80/m2/month. Equipped with a 1,000 KVA substation and 50 m3/day wastewater connection capacity.",
        northTip: "「Trạm biến áp」(變壓站)；「Đấu nối」(管網對接/納管)。",
        southTip: "電子與精密機械業特別看重電力供應穩定度與污水排放指標。"
      },
      {
        speaker: "Tổng Giám Đốc Doanh nghiệp (設廠總經理)",
        role: "learner",
        viet: "Nếu chúng tôi ký hợp đồng thuê dài hạn 5 năm, chủ đầu tư có hỗ trợ miễn phí tiền thuê 3 tháng đầu để chúng tôi lắp đặt máy móc không?",
        zh: "如果我們簽署 5 年長期租賃合約，開發商能否給予前 3 個月裝修免租期，方便我們進駐安裝生產機台？",
        en: "If we sign a 5-year long lease, can the developer grant a 3-month rent-free fit-out period for machinery setup?",
        northTip: "「Miễn phí tiền thuê」(免租期 / Rent-free period)。",
        southTip: "爭取 2~3 個月裝機免租期是租廠房談判的必備籌碼。"
      }
    ],
    rolePlay: {
      userRoleZh: "投資設廠決策人",
      userRoleEn: "Investment Director",
      partnerRoleZh: "工業區開發商代表",
      partnerRoleEn: "Park Developer Rep",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Nếu quý công ty cam kết ký hợp đồng 5 năm và đặt cọc 6 tháng, bên em sẽ xem xét chính sách ưu đãi.",
          partnerPromptZh: "若貴公司承諾簽約 5 年並支付 6 個月押金，我們將考慮給予優惠政策。",
          partnerPromptEn: "If you commit to a 5-year lease and 6-month deposit, we will review incentive concessions.",
          userOptions: [
            {
              id: "lease_opt1",
              textVi: "Chúng tôi đồng ý đặt cọc 6 tháng, đổi lại KCN cần hỗ trợ 3 tháng miễn phí lắp đặt máy móc và miễn phí quản lý năm đầu.",
              textZh: "我們同意支付 6 個月押金，但園區需給予 3 個月設備安裝免租期並免除首年管理費。",
              textEn: "We agree to the 6-month deposit, provided you grant 3-month rent-free setup and waive Year-1 management fees.",
              isCorrect: true,
              feedbackZh: "談判滿分！以充足押金換取免租期與管理費折讓，實現完美雙贏。",
              feedbackEn: "Masterful commercial concession trading long deposit for rent-free fit-out."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Nhà xưởng xây sẵn", vi: "Nhà xưởng xây sẵn", phonetic: "[ɲaː˨˩ sɨəŋ˧˩ səj˧ san˦˧˥]", ipa: "[ɲaː˨˩ sɨəŋ˧˩ səj˧ san˦˧˥]", zh: "標準廠房 (RBF)", en: "Ready-Built Factory (RBF)", hanViet: "Nhà (家/房) + Xưởng (廠)" },
      { viet: "Trạm biến áp", vi: "Trạm biến áp", phonetic: "[tɕam˧˨ ɓiən˦˧˥ aːp̚˦˧˥]", ipa: "[tɕam˧˨ ɓiən˦˧˥ aːp̚˦˧˥]", zh: "變電站 / 變壓站 (KVA)", en: "Power Substation (KVA)", hanViet: "Trạm (站) + Biến (變) + Áp (壓)" },
      { viet: "Đấu nối", vi: "Đấu nối", phonetic: "[ɗəw˦˧˥ noj˦˧˥]", ipa: "[ɗəw˦˧˥ noj˦˧˥]", zh: "管線銜接 / 納管連接", en: "Grid / Pipeline Connection", hanViet: "" },
      { viet: "Miễn phí tiền thuê", vi: "Miễn phí tiền thuê", phonetic: "[miən˦˧˥ fi˦˧˥ tiən˨˩ tʰwe˧]", ipa: "[miən˦˧˥ fi˦˧˥ tiən˨˩ tʰwe˧]", zh: "免租期 (裝修裝機免租)", en: "Rent-Free Fit-Out Period", hanViet: "Miễn (免) + Phí (費)" }
    ],
    culturalTip: {
      titleZh: "🏗️ 越南工業區 (KCN) 租廠設廠核心評估指南",
      titleEn: "Industrial Park Site Selection & Lease Due Diligence in Vietnam",
      contentZh: "在越南租賃標準廠房或購買 50 年土地使用權 (Quyền sử dụng đất)，需重點審查：1. 園區是否具備合法「1/500 細部規劃批文」與完整環評執照；2. 廠房是否已取得「消防驗收合格證 (Nghiệm thu PCCC)」；3. 雙十連休與重大節慶用電調度支援。合約應以越英或越中雙語對照簽署。",
      contentEn: "When leasing factory space in Vietnam, verify 1/500 zoning approvals, master Fire Safety (PCCC) acceptance certificates, and environmental quota limits.",
      proTipZh: "✨ 秘笈：交屋前務必實地測試地坪承重（Tải trọng sàn - 通常標準為 2~3 噸/m2）與廠房滴水簷高度（Chiều cao thông thủy）！",
      proTipEn: "✨ Pro Tip: Always test floor loading capacity (2-3 tons/m2) and eave clearance height before signing handover protocols."
    }
  },
  {
    id: "biz_bank_loan",
    category: "business",
    tagZh: "銀行貸款",
    tagEn: "Bank Loans & Credit",
    icon: "💰",
    image: "business.jpg",
    titleZh: "企業銀行融資貸款、抵押授信與利率協商",
    titleEn: "Corporate Bank Loans, Collateral Credit Lines & Interest Rate Negotiation",
    titleVi: "Vay Vốn Ngân Hàng Doanh Nghiệp, Hạn Mức Tín Dụng & Lãi Suất Thế Chấp",
    summaryZh: "企業融資操盤：向銀行申辦中期設備貸款 (Vay trung hạn) 與營運週轉金額度 (Hạn mức vốn lưu động)、抵押土地廠房並敲定浮動/固定利率。",
    summaryEn: "Corporate financing: secure machinery term loans and working capital credit lines, pledge land/assets, and negotiate fixed vs floating rates.",
    dialogues: [
      {
        speaker: "Giám đốc Khách hàng Doanh nghiệp (銀行企金主管)",
        role: "npc",
        viet: "Kính chào anh! Ngân hàng chúng tôi đã hoàn tất thẩm định báo cáo tài chính của doanh nghiệp FDI bên anh.",
        zh: "您好！我們銀行已經完成對貴外商直接投資 (FDI) 企業的財務報告徵信與授信審查。",
        en: "Hello! Our bank completed credit due diligence on your FDI corporate financial statements.",
        northTip: "「Thẩm định」(審定/徵信審查)；「Doanh nghiệp FDI」(外商投資企業)。",
        southTip: "越南大型商業銀行如 Vietcombank, BIDV, CTBC, Cathay 均有台資企業專屬企金團隊。"
      },
      {
        speaker: "Giám đốc Tài chính CFO (財務長)",
        role: "learner",
        viet: "Chào anh. Chúng tôi muốn vay trung hạn 2.000.000 USD để mua sắm dây chuyền sản xuất và xin cấp hạn mức vốn lưu động 1.000.000 USD.",
        zh: "您好。我們希望申請 200 萬美元中期貸款用於採購自動化產線，並申請 100 萬美元營運週轉金授信額度。",
        en: "We want to apply for a $2M medium-term loan for production lines and a $1M working capital credit facility.",
        northTip: "「Vay trung hạn」(中期貸款 3-5 年)；「Hạn mức vốn lưu động」(營運週轉金授信)。",
        southTip: "「Mua sắm dây chuyền」指產線機台設備採購。"
      },
      {
        speaker: "Giám đốc Khách hàng Doanh nghiệp (銀行企金主管)",
        role: "npc",
        viet: "Ngân hàng duyệt cấp khoản vay với lãi suất ưu đãi USD là 5.5%/năm cho năm đầu, tài sản thế chấp là quyền thuê đất và toàn bộ máy móc hình thành trong tương lai.",
        zh: "銀行批准核貸，首年美元優惠利率為年息 5.5%，抵押品為土地租賃權與未來購置之全套機械設備。",
        en: "We approved the loan at 5.5%/year USD preferential rate for Year 1, collateralized by land lease rights and future equipment.",
        northTip: "「Lãi suất ưu đãi」(優惠利率)；「Tài sản thế chấp」(抵押資產)。",
        southTip: "在越南，興建中廠房與未來機械可作為「Tài sản hình thành trong tương lai」設定抵押。"
      },
      {
        speaker: "Giám đốc Tài chính CFO (財務長)",
        role: "learner",
        viet: "Mức lãi suất 5.5% rất cạnh tranh. Thời hạn giải ngân (Disbursement) từng đợt theo tiến độ giao máy móc sẽ tiến hành thế nào?",
        zh: "5.5% 利率很有競爭力。按照機台到廠進度分期撥款 (Disbursement) 的放款流程將如何進行？",
        en: "5.5% is very competitive. How will the phased disbursement schedule proceed according to machinery delivery?",
        northTip: "「Giải ngân」(撥款/出款) 是銀行放款的核心專業術語。",
        southTip: "分期撥款需出示設備採購合約、進口海關單據與驗收紀錄。"
      }
    ],
    rolePlay: {
      userRoleZh: "企業財務長 CFO",
      userRoleEn: "Corporate CFO",
      partnerRoleZh: "銀行企金總監",
      partnerRoleEn: "Bank VP",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Để tiến hành giải ngân đợt 1 cho nhà cung cấp máy móc, doanh nghiệp cần xuất trình những chứng từ gì?",
          partnerPromptZh: "為了向機台設備供應商發放第一批撥款，企業需要出示哪些憑證？",
          partnerPromptEn: "What documents must the enterprise present to disburse Batch 1 to the equipment vendor?",
          userOptions: [
            {
              id: "loan_opt1",
              textVi: "Chúng tôi sẽ cung cấp hợp đồng mua bán, hóa đơn thương mại, tờ khai hải quan thông quan và biên bản nghiệm thu thiết bị.",
              textZh: "我們將提供買賣合約、商業發票、海關清關申報單以及設備驗收報告。",
              textEn: "We will provide the sales contract, commercial invoice, customs declaration, and equipment acceptance protocol.",
              isCorrect: true,
              feedbackZh: "完全合規！憑證齊全能確保銀行在 24 小時內順利撥款。",
              feedbackEn: "Flawless compliance answer matching banking disbursement standards."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Hạn mức tín dụng", vi: "Hạn mức tín dụng", phonetic: "[haːn˧˨ mɨk̚˦˧˥ tin˦˧˥ zuŋ˧˨]", ipa: "[haːn˧˨ mɨk̚˦˧˥ tin˦˧˥ zuŋ˧˨]", zh: "授信額度 / 信用額度", en: "Credit Facility / Line", hanViet: "Hạn (限) + Mức + Tín (信) + Dụng (用)" },
      { viet: "Thế chấp", vi: "Thế chấp", phonetic: "[tʰe˦˧˥ tɕəp̚˦˧˥]", ipa: "[tʰe˦˧˥ tɕəp̚˦˧˥]", zh: "抵押 / 擔保設定", en: "Collateral / Mortgage", hanViet: "Thế (替/質) + Chấp (執)" },
      { viet: "Giải ngân", vi: "Giải ngân", phonetic: "[zaːj˧˩ ŋən˧]", ipa: "[zaːj˧˩ ŋən˧]", zh: "銀行撥款 / 放款出款", en: "Loan Disbursement", hanViet: "Giải (解) + Ngân (銀/金)" },
      { viet: "Lãi suất", vi: "Lãi suất", phonetic: "[laːj˦˧˥ swət̚˦˧˥]", ipa: "[laːj˦˧˥ swət̚˦˧˥]", zh: "貸款利率 (年息/月息)", en: "Interest Rate", hanViet: "Lãi + Suất (率)" }
    ],
    culturalTip: {
      titleZh: "💰 越南外資企業銀行融資與外債登記法規",
      titleEn: "Banking Regulations & Foreign Loan Registration in Vietnam",
      contentZh: "外商在越南融資主要分為：在地商業銀行授信與海外母公司跨境股東借款 (Vay vốn nước ngoài)。依據越南國家銀行 (SBV) 法規，凡期限超過 1 年之中長期中外借款，必須在簽約後 30 天內向國家銀行辦理「外債登記 (Đăng ký khoản vay nước ngoài)」，否則將面臨無法合法還本付息的重大合規風險。",
      contentEn: "Cross-border medium/long-term shareholder loans exceeding 1 year must be officially registered with the State Bank of Vietnam (SBV) within 30 days of signing.",
      proTipZh: "✨ 秘笈：向當地外資銀行申請授信時，出示台灣母公司之公司保證函 (Corporate Guarantee) 可大幅壓低融資利差！",
      proTipEn: "✨ Pro Tip: Providing a Parent Corporate Guarantee from Taiwan significantly reduces lending interest margins in Vietnam."
    }
  },
  {
    id: "biz_epc_construction",
    category: "business",
    tagZh: "營造建廠",
    tagEn: "Construction EPC",
    icon: "🏢",
    image: "business.jpg",
    titleZh: "營造建設總承包 (EPC) 與廠房鋼構施工進度",
    titleEn: "EPC General Contractor, Steel Structure Construction & Handover",
    titleVi: "Tổng Thầu Xây Dựng EPC, Thi Công Nhà Thép Tiền Chế & Nghiệm Thu Công Trình",
    summaryZh: "工程建廠全流程：簽署統包合約 (Hợp đồng EPC)、鋼結構安裝 (Nhà thép tiền chế)、工期里程碑 (Tiến độ) 與工程保固期 (Bảo hành 24 tháng)。",
    summaryEn: "Factory construction EPC: turnkey design-build contracts, pre-engineered steel buildings, milestone payments, and 24-month structural warranty.",
    dialogues: [
      {
        speaker: "Tổng Thầu Xây Dựng EPC (營造總承包商)",
        role: "npc",
        viet: "Kính chào Chủ đầu tư! Chúng tôi đã hoàn thiện thiết kế cơ sở và xin được Giấy phép xây dựng (GPXD) cho nhà xưởng 10.000 m2.",
        zh: "業主您好！我們已經完成基礎工程設計，並順利取得 10,000 平方公尺新廠房的正式施工許可證 (GPXD)。",
        en: "Welcome Investor! We finalized the basic design and obtained the Construction Permit (GPXD) for the 10,000 m2 factory.",
        northTip: "「Chủ đầu tư」(業主/出資方)；「Giấy phép xây dựng GPXD」(建照/施工許可證)。",
        southTip: "在越南自建廠房必須取得省級建設廳核發之 GPXD 才能合法動工。"
      },
      {
        speaker: "Trưởng ban Quản lý Dự án (專案工程處長)",
        role: "learner",
        viet: "Tiến độ lắp dựng khung nhà thép tiền chế và đổ bê tông sàn xưởng sẽ hoàn thành trong bao nhiêu ngày?",
        zh: "鋼結構主體框架吊裝與廠房地坪混凝土澆置預計在多少天內完工？",
        en: "In how many days will the pre-engineered steel erection and concrete floor pouring be completed?",
        northTip: "「Khung nhà thép tiền chế」(鋼結構廠房預製框架)；「Đổ bê tông」(澆置混凝土)。",
        southTip: "鋼結構因施工迅速、耐用度高，是越南製造業建廠主流。"
      },
      {
        speaker: "Tổng Thầu Xây Dựng EPC (營造總承包商)",
        role: "npc",
        viet: "Chúng tôi cam kết hoàn thành phần thô trong 60 ngày và hoàn thiện toàn bộ công trình để bàn giao đưa vào hoạt động sau 120 ngày.",
        zh: "我們承諾在 60 天內完成主體結構粗胚工程，並在 120 天後全案完工驗收交屋，正式交付投產運營。",
        en: "We commit to finishing structural rough-in within 60 days, and full project handover ready for operation in 120 days.",
        northTip: "「Bàn giao」(驗收交屋/移交)；「Đưa vào hoạt động」(正式投產運營)。",
        southTip: "工程合約通常設有延誤工期違約金條款（Phạt chậm tiến độ）。"
      },
      {
        speaker: "Trưởng ban Quản lý Dự án (專案工程處長)",
        role: "learner",
        viet: "Tốt lắm. Điều khoản thanh toán sẽ giải ngân theo 5 đợt nghiệm thu, giữ lại 5% tiền bảo hành công trình trong vòng 24 tháng.",
        zh: "很好。工程款將按照 5 個驗收里程碑節點分期支付，並保留 5% 工程保固金，保固期為 24 個月。",
        en: "Very well. Payments will disburse across 5 acceptance milestones, retaining 5% warranty holdback for 24 months.",
        northTip: "「Tiền bảo hành」(工程保固金/質保金)；「Nghiệm thu」(驗收)。",
        southTip: "扣留 5% 保固金是確保總承包商在漏水或結構瑕疵時能及時修繕的國際慣例。"
      }
    ],
    rolePlay: {
      userRoleZh: "建廠專案處長",
      userRoleEn: "Project Director",
      partnerRoleZh: "EPC 營造總承包總經理",
      partnerRoleEn: "EPC Contractor GM",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Nếu trong quá trình thi công có phát sinh thay đổi thiết kế từ phía chủ đầu tư, thủ tục sẽ xử lý ra sao?",
          partnerPromptZh: "若在施工過程中業主提出設計變更 (Design Change)，流程該如何處理？",
          partnerPromptEn: "If design changes are requested by the client during construction, how is the process handled?",
          userOptions: [
            {
              id: "epc_opt1",
              textVi: "Hai bên phải lập Phụ lục Hợp đồng ghi rõ khối lượng phát sinh, chi phí và thời gian điều chỉnh trước khi thi công.",
              textZh: "雙方必須簽署合約補充協議 (Phụ lục)，明確載明追加工程量、費用與工期調整，經雙方確認後方可施工。",
              textEn: "Both parties must execute a Contract Addendum detailing scope changes, pricing, and schedule adjustments prior to execution.",
              isCorrect: true,
              feedbackZh: "完全符合營造管理規範！白紙黑字簽署補充協議能有效杜絕工程追加款糾紛。",
              feedbackEn: "Professional construction governance establishing clear change-order addendums."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Tổng thầu EPC", vi: "Tổng thầu EPC", phonetic: "[təwŋm˧˩ tʰəw˨˩ e-pe-ce]", ipa: "[təwŋm˧˩ tʰəw˨˩ e-pe-ce]", zh: "EPC 統包總承包商 (設計+採購+施工)", en: "EPC General Contractor", hanViet: "Tổng (總) + Thầu (包/攬)" },
      { viet: "Giấy phép xây dựng", vi: "Giấy phép xây dựng", phonetic: "[zəj˦˧˥ fɛp̚˦˧˥ səj˧ zɨŋ˧˨]", ipa: "[zəj˦˧˥ fɛp̚˦˧˥ səj˧ zɨŋ˧˨]", zh: "建照 / 施工許可證 (GPXD)", en: "Construction Permit (GPXD)", hanViet: "Giấy + Phép (法) + Xây dựng (建設)" },
      { viet: "Nhà thép tiền chế", vi: "Nhà thép tiền chế", phonetic: "[ɲaː˨˩ tʰɛp̚˦˧˥ tiən˨˩ tɕe˦˧˥]", ipa: "[ɲaː˨˩ tʰɛp̚˦˧˥ tiən˨˩ tɕe˦˧˥]", zh: "預製鋼結構廠房 (PEB)", en: "Pre-Engineered Steel Building", hanViet: "Nhà + Thép (鐵/鋼) + Tiền chế (預製)" },
      { viet: "Bàn giao", vi: "Bàn giao", phonetic: "[ɓaːn˨˩ zaːw˧]", ipa: "[ɓaːn˨˩ zaːw˧]", zh: "竣工移交 / 驗收交屋", en: "Project Handover", hanViet: "Bàn (盤) + Giao (交)" }
    ],
    culturalTip: {
      titleZh: "🏢 越南建廠營造總承包 (EPC) 招標眉角",
      titleEn: "Factory Construction & EPC General Contractor Contracting in Vietnam",
      contentZh: "在越南自建廠房，選擇具備「一級營造資質執照 (Chứng chỉ năng lực hoạt động xây dựng Hạng 1)」之優質總承包商至關重要。營造合約必須載明雨季 (Mùa mưa) 防汛應變計畫、工安保險、以及如期取得「竣工圖紙審批與驗收文件 (Hồ sơ hoàn công)」之法律義務，以便後續順利辦理房屋所有權狀 (Sổ hồng)。",
      contentEn: "Choose contractors holding Grade-1 construction licenses. Construction contracts must include monsoon contingency plans and guarantee delivery of official As-Built dossiers (Hoàn công) for property ownership titling.",
      proTipZh: "✨ 秘笈：每週五定期召開工程進度三方協調會（業主、監造單位 Tư vấn giám sát、營造商），能確保工期零延誤！",
      proTipEn: "✨ Pro Tip: Convene weekly tripartite site progress meetings (Owner, Supervision Consultant, Contractor) to ensure zero schedule slippage."
    }
  },
  {
    id: "biz_environmental_permit",
    category: "business",
    tagZh: "環評環保",
    tagEn: "Environmental Permit",
    icon: "🌱",
    image: "business.jpg",
    titleZh: "環評報告評估 (ĐTM)、廢水排放與環保合規審查",
    titleEn: "Environmental Impact Assessment (EIA/ĐTM) & Wastewater Compliance",
    titleVi: "Lập Báo Cáo Đánh Giá Tác Động Môi Trường (ĐTM) & Giấy Phép Môi Trường",
    summaryZh: "廠房環保法規：申辦環評報告 (ĐTM) 與環境許可證 (GPMT)、工業廢水標準納管 (QCVN 40) 與危險廢棄物申報處置。",
    summaryEn: "Environmental compliance: prepare EIA/ĐTM reports, obtain Environmental Permits (GPMT), meet QCVN industrial wastewater standards, and manage hazardous waste.",
    dialogues: [
      {
        speaker: "Chuyên gia Tư vấn Môi trường (環保顧問專家)",
        role: "npc",
        viet: "Chào Ban Giám Đốc! Theo Luật Bảo vệ Môi trường mới, dự án sản xuất xi mạ và dệt may của bên anh thuộc nhóm nguy cơ gây ô nhiễm cao, bắt buộc phải lập Báo cáo ĐTM.",
        zh: "各位長官好！依據越南新修訂之《環境保護法》，貴公司的電鍍與紡織印染專案屬於高污染潛在風險類別，依法強制編制環評報告 (ĐTM)。",
        en: "Hello Leadership! Under Vietnam's Environmental Protection Law, your electroplating and textile project falls under high-impact category, requiring an EIA/ĐTM Report.",
        northTip: "「ĐTM」(Đánh giá tác động môi trường) 是越南環評最高規格報告。",
        southTip: "紡織、染色、電鍍、化工在越南審查環評極為嚴格。"
      },
      {
        speaker: "Giám đốc EHS Công ty (環安衛處長)",
        role: "learner",
        viet: "Hệ thống xử lý nước thải sơ bộ của nhà máy chúng tôi đạt chuẩn B theo QCVN 40 trước khi xả vào trạm xử lý nước thải tập trung của KCN được không?",
        zh: "我們廠內的初級廢水處理系統在排放進入工業區集中污水處理廠之前，達到 QCVN 40 的 B 級標準可以符合納管要求嗎？",
        en: "Can our on-site pretreatment system meet QCVN 40 Column B standard before discharging into the industrial park central facility?",
        northTip: "「QCVN 40」是越南工業廢水國家技術標準（A級直排自然水體，B級排入園區集中處理廠）。",
        southTip: "大部分工業園區要求廠商自建預處理設施達到 B 級標準後再對接納管。"
      },
      {
        speaker: "Chuyên gia Tư vấn Môi trường (環保顧問專家)",
        role: "npc",
        viet: "Hoàn toàn phù hợp ạ! Chúng tôi sẽ hoàn thiện hồ sơ xin cấp Giấy phép Môi trường (GPMT) và trình Sở Tài nguyên và Môi trường thẩm định trong tháng này.",
        zh: "完全符合規範！我們將在本月備齊申請《環境許可證 (GPMT)》之全套文件，送交省級資源環境廳 (Sở TN&MT) 組織專家評審審批。",
        en: "Perfect! We will finalize the Environmental Permit (GPMT) application and submit it to the Department of Natural Resources & Environment (DONRE) this month.",
        northTip: "「Sở Tài nguyên và Môi trường」(DONRE / 資源環境廳) 是環評審批主管機關。",
        southTip: "「Giấy phép Môi trường GPMT」現已整合多項傳統環保排污許可證。"
      },
      {
        speaker: "Giám đốc EHS Công ty (環安衛處長)",
        role: "learner",
        viet: "Về rác thải nguy hại (dầu mỡ thải, hóa chất), chúng tôi đã ký hợp đồng với đơn vị có chức năng xử lý được Bộ cấp phép.",
        zh: "關於危險廢棄物（廢油、廢化學品溶劑），我們已與取得自然資源環境部核可的專業清運處理單位完成簽約。",
        en: "For hazardous waste (waste oil, chemical solvents), we contracted a Ministry-licensed disposal company.",
        northTip: "「Rác thải nguy hại」(危險廢棄物) 必須專門分類、上鎖儲存並定期申報產量。",
        southTip: "保留危廢聯單 (Chứng từ chất thải nguy hại) 是防範環保重罰的關鍵。"
      }
    ],
    rolePlay: {
      userRoleZh: "廠房環安衛總監",
      userRoleEn: "EHS Director",
      partnerRoleZh: "省資源環境廳稽查員",
      partnerRoleEn: "DONRE Inspector",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Đoàn kiểm tra môi trường yêu cầu xuất trình Giấy phép xả thải và sổ nhật ký vận hành trạm xử lý nước thải.",
          partnerPromptZh: "環保檢查組要求出示排污許可證以及污水處理站日常運轉操作日誌。",
          partnerPromptEn: "The environmental inspection team requests the discharge permit and wastewater operation logs.",
          userOptions: [
            {
              id: "env_opt1",
              textVi: "Dạ, kính gửi đoàn kiểm tra Giấy phép Môi trường hợp lệ và nhật ký quan trắc nước thải tự động online 24/7.",
              textZh: "報告長官，這是我們合法有效的《環境許可證》以及 24/7 連線傳輸之廢水自動連續監測日誌。",
              textEn: "Here is our valid Environmental Permit and 24/7 continuous online wastewater monitoring log.",
              isCorrect: true,
              feedbackZh: "無懈可擊！主動出示連線監測數據與合法許可證，展現一流合規水準。",
              feedbackEn: "Flawless compliance response presenting continuous monitoring telemetry logs."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Báo cáo ĐTM", vi: "Báo cáo ĐTM", phonetic: "[ɓaːw˦˧˥ kaːw˦˧˥ đe-te-em]", ipa: "[ɓaːw˦˧˥ kaːw˦˧˥ đe-te-em]", zh: "環境影響評估報告 (環評 / ĐTM)", en: "EIA Environmental Impact Report", hanViet: "Báo cáo Đánh giá Tác động Môi trường" },
      { viet: "Giấy phép Môi trường", vi: "Giấy phép Môi trường", phonetic: "[zəj˦˧˥ fɛp̚˦˧˥ moj˧ tɕɨəŋ˨˩]", ipa: "[zəj˦˧˥ fɛp̚˦˧˥ moj˧ tɕɨəŋ˨˩]", zh: "環境許可證 (GPMT)", en: "Environmental Permit (GPMT)", hanViet: "Giấy + Phép + Môi trường (環境)" },
      { viet: "Xử lý nước thải", vi: "Xử lý nước thải", phonetic: "[sɨ˧˩ li˦˧˥ nɨək̚˦˧˥ tʰaːj˧˩]", ipa: "[sɨ˧˩ li˦˧˥ nɨək̚˦˧˥ tʰaːj˧˩]", zh: "工業廢水處理 / 污水淨化", en: "Wastewater Treatment", hanViet: "Xử lý (處理) + Nước thải (排水)" },
      { viet: "Chất thải nguy hại", vi: "Chất thải nguy hại", phonetic: "[tɕət̚˦˧˥ tʰaːj˧˩ ŋwi˧ haːj˧˨]", ipa: "[tɕət̚˦˧˥ tʰaːj˧˩ ŋwi˧ haːj˧˨]", zh: "危險廢棄物 / 有害廢棄物", en: "Hazardous Industrial Waste", hanViet: "Chất (質) + Thải + Nguy hại (危害)" }
    ],
    culturalTip: {
      titleZh: "🌱 越南製造業環保法規執法趨勢與處罰避坑",
      titleEn: "Environmental Regulations & Enforcement Trends in Vietnam",
      contentZh: "近年來越南政府對外資企業之環保稽查極其嚴苛，未具備《環境許可證》擅自投產最高可面臨 20 億越南盾罰鍰乃至勒令停產停業。企業務必落實：1. 設置雨污分流管網；2. 廠內危廢儲存間需防滲漏並張貼危險標誌；3. 產量達標時依法安裝廢水/廢氣「自動連續在線監測系統 (Quan trắc tự động liên tục)」並即時連線至環境廳數據中心。",
      contentEn: "Vietnam strictly enforces environmental laws; operating without permits can trigger VND 2B fines and shutdowns. Implement stormwater/sewage separation, leak-proof hazardous rooms, and continuous telemetry systems.",
      proTipZh: "✨ 秘笈：每季定期委託具備 VIMCERTS 認證的第三方檢測實驗室進行排污採樣監測並出具報告，留檔備查！",
      proTipEn: "✨ Pro Tip: Contract VIMCERTS-accredited third-party labs for quarterly sampling reports to safeguard against surprise audits."
    }
  },
  {
    id: "biz_fire_safety_pccc",
    category: "business",
    tagZh: "消防審驗",
    tagEn: "Fire Safety PCCC",
    icon: "🚒",
    image: "business.jpg",
    titleZh: "消防工程審批 (PCCC)、噴淋系統與消防驗收",
    titleEn: "Fire Safety Design Appraisal (PCCC), Sprinklers & Police Inspection",
    titleVi: "Thẩm Duyệt Thiết Kế Phòng Cháy Chữa Cháy (PCCC) & Nghiệm Thu Công An",
    summaryZh: "廠房投產前置：申請消防設計審批 (Thẩm duyệt PCCC)、安裝自動噴淋系統 (Sprinkler)、防火塗料與通過公安局消防實地驗收。",
    summaryEn: "Pre-operational fire compliance: secure PCCC design appraisal, install automatic sprinklers, fireproof coatings, and pass Police Fire Acceptance Inspection.",
    dialogues: [
      {
        speaker: "Kỹ sư Tư vấn PCCC (消防顧問工程師)",
        role: "npc",
        viet: "Kính chào Tổng Giám Đốc! Bản vẽ thiết kế hệ thống Phòng cháy chữa cháy (PCCC) của nhà xưởng đã được Cục Cảnh sát PCCC phê duyệt thẩm duyệt.",
        zh: "總經理好！我們廠房的消防系統設計圖紙已經正式通過公安局消防警察局的圖紙審查與審批 (Thẩm duyệt PCCC)。",
        en: "General Director! Our factory Fire Protection (PCCC) design drawings have been officially approved by the Fire Police Bureau.",
        northTip: "「PCCC」(Phòng cháy chữa cháy) 是全越南最重要的工廠安檢審核代名詞。",
        southTip: "「Thẩm duyệt thiết kế PCCC」是開工前不可或缺的前置法定審批文件。"
      },
      {
        speaker: "Giám đốc Nhà máy (廠長)",
        role: "learner",
        viet: "Hệ thống chữa cháy tự động Sprinkler, vách ngăn chống cháy và sơn chống cháy kết cấu thép đã hoàn thành 100% chưa?",
        zh: "自動噴淋滅火系統 (Sprinkler)、防火隔牆與鋼結構防火塗料工程是否已 100% 施工完畢？",
        en: "Are the automatic sprinkler system, fire-rated partition walls, and steel intumescent paint 100% installed?",
        northTip: "「Hệ thống chữa cháy tự động」(自動滅火系統)；「Sơn chống cháy」(防火塗料)。",
        southTip: "鋼結構耐火時限（通常要求 60~120 分鐘）是消防驗收最核心指標。"
      },
      {
        speaker: "Kỹ sư Tư vấn PCCC (消防顧問工程師)",
        role: "npc",
        viet: "Dạ toàn bộ đã lắp đặt xong. Bể nước ngầm cứu hỏa 400 m3 và 2 máy bơm diesel dự phòng đã chạy thử nghiệm áp lực đạt chuẩn.",
        zh: "全部安裝完畢。400 立方公尺的專用消防蓄水池與 2 台備用柴油消防泵已完成加壓試車測試，水壓完全達標。",
        en: "All installed. The 400 m3 underground fire reservoir and 2 backup diesel pumps successfully completed pressure testing.",
        northTip: "「Bể nước cứu hỏa」(消防水池)；「Máy bơm」(消防加壓水泵)。",
        southTip: "實地驗收時公安消防警察會親自啟動測試水泵噴水壓力與警報聯動。"
      },
      {
        speaker: "Giám đốc Nhà máy (廠長)",
        role: "learner",
        viet: "Rất tốt. Hãy làm việc với Phòng Cảnh sát PCCC tỉnh để tổ chức kiểm tra nghiệm thu thực địa vào tuần sau để kịp ngày khai trương.",
        zh: "太好了。請儘快與省公安消防局協調，安排在下週進行現場實地驗收檢查，確保廠房如期正式開業投產。",
        en: "Very good. Coordinate with the Provincial Fire Police to schedule the on-site acceptance inspection next week for our grand opening.",
        northTip: "「Nghiệm thu thực địa」(實地現場驗收)；「Biên bản nghiệm thu」(驗收合格紀錄)。",
        southTip: "取得「Văn bản nghiệm thu PCCC」是工廠合法投產運營的最後一張關鍵王牌。"
      }
    ],
    rolePlay: {
      userRoleZh: "外派廠長",
      userRoleEn: "Plant Manager",
      partnerRoleZh: "公安消防局驗收長官",
      partnerRoleEn: "Fire Police Inspector",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Đoàn kiểm tra PCCC sẽ kích hoạt chuông báo cháy và thử nghiệm áp lực vòi phun nước ở chuyền 1.",
          partnerPromptZh: "消防檢查組將觸發手動火警警報鈴，並現場測試 1 號產線消防栓水帶的噴水壓力。",
          partnerPromptEn: "The fire inspection team will trigger the alarm bell and test fire hose nozzle pressure at Line 1.",
          userOptions: [
            {
              id: "pccc_opt1",
              textVi: "Dạ kính mời cán bộ kiểm tra. Đội PCCC cơ sở của xưởng đã túc trực và hệ thống bơm tự động sẵn sàng 100%.",
              textZh: "請長官檢驗。廠內基層消防應變自衛隊已全體待命，自動加壓泵浦系統 100% 準備就緒。",
              textEn: "Please proceed. Our on-site volunteer fire brigade is on standby and automatic pump systems are 100% ready.",
              isCorrect: true,
              feedbackZh: "應對沉著自信！訓練有素的基層消防自衛隊能給消防長官留下極佳印象。",
              feedbackEn: "Confident, disciplined response demonstrating on-site emergency readiness."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Phòng cháy chữa cháy (PCCC)", vi: "Phòng cháy chữa cháy (PCCC)", phonetic: "[fawŋ˨˩ tɕaːj˦˧˥ tɕɨə˦˧˥ tɕaːj˦˧˥]", ipa: "[fawŋ˨˩ tɕaːj˦˧˥ tɕɨə˦˧˥ tɕaːj˦˧˥]", zh: "消防 / 消防滅火工程 (PCCC)", en: "Fire Safety & Firefighting (PCCC)", hanViet: "Phòng (防) + Cháy + Chữa + Cháy" },
      { viet: "Thẩm duyệt PCCC", vi: "Thẩm duyệt PCCC", phonetic: "[tʰəm˧˩ zwiət̚˧˨]", ipa: "[tʰəm˧˩ zwiət̚˧˨]", zh: "消防設計審定與審批", en: "Fire Safety Design Approval", hanViet: "Thẩm (審) + Duyệt (閱)" },
      { viet: "Hệ thống Sprinkler", vi: "Hệ thống Sprinkler", phonetic: "[he˧˨ tʰəwŋm˦˧˥ spriŋ-kler]", ipa: "[he˧˨ tʰəwŋm˦˧˥ spriŋ-kler]", zh: "自動灑水噴淋滅火系統", en: "Automatic Sprinkler System", hanViet: "Hệ thống (系統)" },
      { viet: "Nghiệm thu PCCC", vi: "Nghiệm thu PCCC", phonetic: "[ŋiəm˧˨ tʰu˧]", ipa: "[ŋiəm˧˨ tʰu˧]", zh: "消防驗收合格認可", en: "Fire Acceptance Inspection", hanViet: "Nghiệm (驗) + Thu (收)" }
    ],
    culturalTip: {
      titleZh: "🚒 越南工廠消防 (PCCC) 驗收最嚴法規與避坑指南",
      titleEn: "Fire Safety (PCCC) Inspection Standards & Compliance in Vietnam",
      contentZh: "越南現行 QCVN 06:2022/BXD 消防建築技術標準被譽為史上最嚴格法規。自建或租賃廠房投產前，必須依序完成：1. 消防設計審批圖 (Thẩm duyệt)；2. 取得合格防火塗料與防火門檢驗證明；3. 通過公安局消防警察實地聯動測試並取得《消防驗收合格批文 (Văn bản nghiệm thu PCCC)》。未獲批文擅自使用將被斷電並勒令停業！",
      contentEn: "Vietnam enforces rigorous QCVN 06 fire standards. Factories must secure Design Approval, certified fire-rated materials, and official Police Acceptance Dossiers prior to launch.",
      proTipZh: "✨ 秘笈：廠房走道與緊急出口標示（Đèn Exit & Đèn sự cố 蓄電應急照明燈）務必保證 24 小時充飽電且不得堆放任何棧板貨物！",
      proTipEn: "✨ Pro Tip: Emergency exit illuminated signs and backup battery lights must be kept fully charged with exit aisles 100% unobstructed."
    }
  },
  {
    id: "biz_work_permit_trc",
    category: "business",
    tagZh: "外派居留",
    tagEn: "Work Permit & TRC",
    icon: "🛂",
    image: "business.jpg",
    titleZh: "外籍幹部工作證 (Work Permit) 與三年暫住卡申辦",
    titleEn: "Expatriate Work Permit & 3-Year Temporary Residence Card (TRC)",
    titleVi: "Xin Giấy Phép Lao Động (Work Permit) & Thẻ Tạm Trú (TRC) Cho Chuyên Gia",
    summaryZh: "台商幹部外派合法合規：申報外籍專家用人需求批文 (Giải trình nhu cầu lao động)、辦理 2 年工作證與領取 3 年暫住卡 (TRC)。",
    summaryEn: "Legal expat deployment: file foreign labor quota justifications, secure 2-year Work Permits, and obtain 3-year Temporary Residence Cards (TRC).",
    dialogues: [
      {
        speaker: "Chuyên viên Pháp lý & Visa (人資法務專員)",
        role: "npc",
        viet: "Chào Tổng Giám Đốc! Bộ Lao động - Thương binh và Xã hội đã phê duyệt Công văn chấp thuận nhu cầu sử dụng lao động nước ngoài cho 5 vị trí chuyên gia Đài Loan của bên mình.",
        zh: "總經理好！勞動榮軍與社會部已經正式核准我們公司 5 位台灣專家引進的「外國勞工用人需求公文批文」。",
        en: "General Director! The Ministry of Labor has approved the Foreign Labor Quota approval letter for our 5 Taiwanese specialists.",
        northTip: "「Công văn chấp thuận nhu cầu」(用人需求核准公文) 是辦理工作證第一步。",
        southTip: "外派主管在入境前 30 天必須先取得省級勞動廳之用人額度批文。"
      },
      {
        speaker: "Tổng Giám Đốc (總經理)",
        role: "learner",
        viet: "Hồ sơ xin cấp Giấy phép lao động (Work Permit) cho các kỹ sư bao gồm Lý lịch tư pháp, Bằng đại học và Giấy xác nhận kinh nghiệm 3 năm đã hợp pháp hóa lãnh sự chưa?",
        zh: "工程師們申辦工作證 (Work Permit) 的良民證、大學畢業證書與 3 年工作經驗證明文件，都已經完成台灣外交部與越南代表處的駐外使館認證了嗎？",
        en: "Have our engineers' Work Permit documents—including Police Clearance, University Degrees, and 3-Year Experience Letters—been consularly legalized?",
        northTip: "「Hợp pháp hóa lãnh sự」(駐外使館公證/領事認證) 是跨國文件法定要求。",
        southTip: "「Lý lịch tư pháp」(良民證/無犯罪紀錄證明) 效期通常為 6 個月。"
      },
      {
        speaker: "Chuyên viên Pháp lý & Visa (人資法務專員)",
        role: "npc",
        viet: "Dạ toàn bộ đã được dịch thuật công chứng sang tiếng Việt. Sở Lao động sẽ cấp Giấy phép lao động thời hạn 2 năm trong vòng 10 ngày làm việc.",
        zh: "全部文件均已完成越文公證翻譯。省勞動廳將在 10 個工作天內核發 2 年期正式工作證。",
        en: "All documents are translated and notarized in Vietnamese. The Department of Labor will issue 2-year Work Permits within 10 business days.",
        northTip: "「Dịch thuật công chứng」(公證翻譯)；「Giấy phép lao động」(Work Permit)。",
        southTip: "工作證最長效期為 2 年，期滿可辦理延期手續。"
      },
      {
        speaker: "Tổng Giám Đốc (總經理)",
        role: "learner",
        viet: "Sau khi có Work Permit, hãy nộp hồ sơ lên Cục Quản lý Xuất nhập cảnh để xin cấp Thẻ Tạm Trú (TRC ký hiệu LĐ2) thời hạn 2 năm để các chuyên gia xuất nhập cảnh miễn visa nhé.",
        zh: "取得工作證後，請立即向公安部出入境管理局遞件申請 2 年期暫住卡 (TRC 代號 LĐ2)，讓外派幹部享有免簽證多次往返越南的便利。",
        en: "Once we have the Work Permit, submit to the Immigration Department for 2-year Temporary Residence Cards (TRC - LĐ2) for visa-free entry.",
        northTip: "「Thẻ Tạm Trú TRC」(暫住卡) 相當於越南外籍人士居留證。",
        southTip: "持有 TRC 即可不限次數免簽進出越南，並可憑證在越南銀行開設個人外幣帳戶與租屋。"
      }
    ],
    rolePlay: {
      userRoleZh: "外派總經理",
      userRoleEn: "General Director",
      partnerRoleZh: "出入境管理局移民官",
      partnerRoleEn: "Immigration Officer",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Hồ sơ xin cấp Thẻ Tạm Trú LĐ2 của chuyên gia đã đầy đủ hộ chiếu gốc, mẫu đơn NA8 và Giấy phép lao động chưa?",
          partnerPromptZh: "申辦專家 LĐ2 暫住卡的文件是否已備齊護照原件、NA8 申請表與工作證原件？",
          partnerPromptEn: "Does the LĐ2 TRC application include the original passport, NA8 form, and original Work Permit?",
          userOptions: [
            {
              id: "trc_opt1",
              textVi: "Dạ đầy đủ rồi ạ. Kính gửi cán bộ hồ sơ gốc và tờ khai tạm trú trực tuyến của công an phường.",
              textZh: "全部齊全。呈上完整正本文件與當地派出所之線上外籍人士暫住登記申報單。",
              textEn: "All set. Submitting original documents and the local police online residence registration slip.",
              isCorrect: true,
              feedbackZh: "完全合規！線上暫住登記與 NA8 申報齊全，順利領取 2 年期 TRC 暫住卡！",
              feedbackEn: "Flawless immigration submission securing the 2-year TRC residence card."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Giấy phép lao động", vi: "Giấy phép lao động", phonetic: "[zəj˦˧˥ fɛp̚˦˧˥ laːw˧ ɗəwŋm˧˨]", ipa: "[zəj˦˧˥ fɛp̚˦˧˥ laːw˧ ɗəwŋm˧˨]", zh: "工作證 (Work Permit)", en: "Work Permit", hanViet: "Giấy + Phép + Lao động (勞動)" },
      { viet: "Thẻ tạm trú", vi: "Thẻ tạm trú", phonetic: "[tʰɛ˧˩ taːm˧˨ tɕu˦˧˥]", ipa: "[tʰɛ˧˩ taːm˧˨ tɕu˦˧˥]", zh: "外籍人士暫住卡 (TRC)", en: "Temporary Residence Card (TRC)", hanViet: "Thẻ (卡) + Tạm (暫) + Trú (住)" },
      { viet: "Hợp pháp hóa lãnh sự", vi: "Hợp pháp hóa lãnh sự", phonetic: "[həːp̚˧˨ faːp̚˦˧˥ hwaː˦˧˥ laːɲ˦˧˥ sɨ˧˨]", ipa: "[həːp̚˧˨ faːp̚˦˧˥ hwaː˦˧˥ laːɲ˦˧˥ sɨ˧˨]", zh: "領事認證 / 外交使館公證", en: "Consular Legalization", hanViet: "Hợp pháp hóa (合法化) + Lãnh sự (領事)" },
      { viet: "Lý lịch tư pháp", vi: "Lý lịch tư pháp", phonetic: "[li˦˧˥ lit̚˧˨ tɨ˧ faːp̚˦˧˥]", ipa: "[li˦˧˥ lit̚˧˨ tɨ˧ faːp̚˦˧˥]", zh: "良民證 / 無犯罪紀錄證明", en: "Police Clearance Certificate", hanViet: "Lý lịch (履歷) + Tư pháp (司法)" }
    ],
    culturalTip: {
      titleZh: "🛂 越南外派幹部工作簽證、工作證與暫住卡合規要訣",
      titleEn: "Expat Visa, Work Permit & Residency Compliance in Vietnam",
      contentZh: "外派幹部切勿持「旅遊簽證 (DL)」或僅持「商務簽證 (DN)」長期在越南工廠從事實質勞動與日常管理，否則將面臨重罰、沒收非法所得與驅逐出境 (Trục xuất)。標準合規路徑為：商務簽入境 -> 申請勞動用人配額批文 -> 辦理 Work Permit 工作證 -> 換發 2~3 年期 Thẻ Tạm Trú (TRC) 暫住卡。",
      contentEn: "Never engage in full-time management on tourist or ordinary business visas. Always follow the legal sequence: Quota Approval -> Work Permit -> 2-3 Year TRC Residence Card.",
      proTipZh: "✨ 秘笈：持有 TRC 暫住卡後，即可在越南合法報考或換發越南汽車/機車駕照（Đổi bằng lái xe）！",
      proTipEn: "✨ Pro Tip: With a valid TRC, expats can legally convert their home driving license into a Vietnamese Driver's License."
    }
  },
  {
    id: "biz_tax_audit_transfer_pricing",
    category: "business",
    tagZh: "稅務稽查",
    tagEn: "Tax Audit & Transfer Pricing",
    icon: "📊",
    image: "business.jpg",
    titleZh: "國稅局稅務稽查、移轉訂價與反避稅抗辯",
    titleEn: "Tax Audit Defense, Transfer Pricing Documentation & FDI Compliance",
    titleVi: "Thanh Tra Thuế Doanh Nghiệp FDI, Chống Chuyển Giá & Giải Trình Quyết Toán",
    summaryZh: "外資稅務實戰：迎戰越南稅務總局年度稽查 (Thanh tra thuế)、編制移轉訂價三層文檔 (Transfer Pricing Local File) 與捍衛關聯交易合理性。",
    summaryEn: "Tax audit defense: prepare for General Department of Taxation audits, compile 3-tier Transfer Pricing local files, and justify intercompany cross-border transactions.",
    dialogues: [
      {
        speaker: "Trưởng đoàn Thanh tra Thuế (國稅局稽查組長)",
        role: "npc",
        viet: "Kính chào Ban Giám Đốc. Theo Quyết định thanh tra thuế, chúng tôi sẽ tiến hành thanh tra quyết toán Thuế TNDN và kiểm tra giao dịch liên kết của công ty trong 3 năm qua.",
        zh: "各位主管好。依據稅務局稽查決定書，我們將對貴公司過去 3 年的企業所得稅 (CIT) 結算申報與跨國關聯交易展開全面查帳稽查。",
        en: "Greetings Leadership. Pursuant to our Tax Audit Decision, we will audit corporate income tax filings and transfer pricing transactions over the past 3 years.",
        northTip: "「Thanh tra thuế」(稅務專案稽查) 是越南國稅局對外資企業的重要審查程序。",
        southTip: "「Giao dịch liên kết」指跨國母子公司之間的關聯方交易。"
      },
      {
        speaker: "Tổng Giám Đốc CFO (財務長)",
        role: "learner",
        viet: "Dạ, chúng tôi hoàn toàn hợp tác. Công ty đã chuẩn bị đầy đủ Hồ sơ Quốc gia (Local File), Hồ sơ Toàn cầu (Master File) và Báo cáo lợi nhuận theo Nghị định 132.",
        zh: "我們全力配合。公司已依據越南政府第 132 號法令，備齊本地文檔 (Local File)、主體文檔 (Master File) 以及常規交易利潤率分析報告。",
        en: "We are fully cooperative. We prepared the Local File, Master File, and benchmark profit margin studies per Decree 132.",
        northTip: "「Nghị định 132」是越南現行最權威之移轉訂價反避稅法令。",
        southTip: "備齊 Transfer Pricing 移轉訂價報告能免除被稅局直接逕行核定利潤率（Ấn định thuế）。"
      },
      {
        speaker: "Trưởng đoàn Thanh tra Thuế (國稅局稽查組長)",
        role: "npc",
        viet: "Chúng tôi cần giải trình chi tiết về khoản phí bản quyền công nghệ (Royalty fee) 3% và phí hỗ trợ quản lý kỹ thuật trả về công ty mẹ tại Đài Loan.",
        zh: "我們需要貴方就支付給台灣母公司 3% 的技術權利金 (Royalty Fee) 以及管理技術諮詢服務費提供具體商業實質佐證說明。",
        en: "We require detailed justification regarding the 3% technology royalty fee and management service fees paid to Taiwan parent HQ.",
        northTip: "「Phí bản quyền」(權利金)；「Công ty mẹ」(母公司)。",
        southTip: "向母公司支付的管理費若無具體工時紀錄或產出報告，容易被稅局全額剔除不可抵扣。"
      },
      {
        speaker: "Tổng Giám Đốc CFO (財務長)",
        role: "learner",
        viet: "Chúng tôi có đầy đủ hợp đồng chuyển giao công nghệ đã đăng ký với Bộ Khoa học & Công nghệ, kèm nhật ký công tác của chuyên gia và chứng từ nộp thuế nhà thầu (FCT).",
        zh: "我們備齊向科技部完成登記之技術移轉合約，並附有台灣專家的出差工時日誌以及代扣代繳之外國承包商稅 (FCT) 完稅證明憑證。",
        en: "We hold tech transfer contracts registered with MOST, specialist timesheets, and Foreign Contractor Tax (FCT) withholding receipts.",
        northTip: "「Thuế nhà thầu FCT」(外國承包商稅) 是跨國支付服務費與權利金必扣稅賦。",
        southTip: "憑證鏈完整是抵禦稅局補稅罰款的最佳護城河。"
      }
    ],
    rolePlay: {
      userRoleZh: "企業財務長 CFO",
      userRoleEn: "Corporate CFO",
      partnerRoleZh: "稅務稽查長官",
      partnerRoleEn: "Senior Tax Inspector",
      steps: [
        {
          stepIndex: 1,
          partnerPromptVi: "Khoản chi phí lãi vay vượt mức trần 30% EBITDA theo quy định sẽ bị loại trừ khi tính thuế TNDN, anh có ý kiến gì không?",
          partnerPromptZh: "超過規定 EBITDA 30% 上限門檻的利息支出將在計算企業所得稅時予以剔除，您對此有何說明？",
          partnerPromptEn: "Net interest expense exceeding the 30% EBITDA ceiling will be disallowed for CIT deductions. Any comments?",
          userOptions: [
            {
              id: "tax_opt1",
              textVi: "Chúng tôi đồng ý loại trừ phần vượt trần năm nay và xin chuyển phần chi phí lãi vay này sang khấu trừ trong 5 năm tiếp theo theo luật định.",
              textZh: "我們同意在今年度剔除超額部分，並依法將該筆利息支出結轉至未來 5 年內繼續遞延扣除。",
              textEn: "We agree to disallow the excess this year and request carrying forward the disallowed interest to the next 5 consecutive years per regulations.",
              isCorrect: true,
              feedbackZh: "深諳稅法！精準運用 5 年利息結轉扣除規定，既維護稅務合規又為企業守住稅務利益。",
              feedbackEn: "Brilliant tax response leveraging the 5-year interest expense carry-forward rules."
            }
          ]
        }
      ]
    },
    vocabulary: [
      { viet: "Thanh tra thuế", vi: "Thanh tra thuế", phonetic: "[tʰaɲ˧ tɕaː˧ tʰwe˦˧˥]", ipa: "[tʰaɲ˧ tɕaː˧ tʰwe˦˧˥]", zh: "稅務稽查 / 稅務查帳", en: "Tax Audit / Inspection", hanViet: "Thanh tra (清查) + Thuế (稅)" },
      { viet: "Giao dịch liên kết", vi: "Giao dịch liên kết", phonetic: "[zaːw˧ zit̚˧˨ liən˧ ket̚˦˧˥]", ipa: "[zaːw˧ zit̚˧˨ liən˧ ket̚˦˧˥]", zh: "關聯交易 / 關係人交易 (Transfer Pricing)", en: "Related-Party Transaction", hanViet: "Giao dịch (交易) + Liên kết (連結)" },
      { viet: "Thuế nhà thầu (FCT)", vi: "Thuế nhà thầu (FCT)", phonetic: "[tʰwe˦˧˥ ɲaː˨˩ tʰəw˨˩]", ipa: "[tʰwe˦˧˥ ɲaː˨˩ tʰəw˨˩]", zh: "外國承包商稅 (FCT)", en: "Foreign Contractor Tax (FCT)", hanViet: "Thuế + Nhà thầu" },
      { viet: "Quyết toán thuế", vi: "Quyết toán thuế", phonetic: "[kwiət̚˦˧˥ twaːn˦˧˥ tʰwe˦˧˥]", ipa: "[kwiət̚˦˧˥ twaːn˦˧˥ tʰwe˦˧˥]", zh: "年度稅務結算 / 申報清算", en: "Annual Tax Finalization", hanViet: "Quyết toán (決算) + Thuế (稅)" }
    ],
    culturalTip: {
      titleZh: "📊 越南外商投資企業 (FDI) 稅務稽查與移轉訂價反避稅",
      titleEn: "FDI Tax Audit Defense & Transfer Pricing Rules (Decree 132) in Vietnam",
      contentZh: "越南稅務局近年重點鎖定跨國 FDI 企業進行「反避稅稽查 (Chống chuyển giá)」，特別關注：1. 連續虧損但產能持續擴張；2. 跨國母子公司利息支出超過 EBITDA 30% 上限；3. 境外管理諮詢費與特許權利金。企業每年與年度所得稅申報同時提交「關聯交易申報表 (Phụ lục giao dịch liên kết)」，是避免直接被稅局重估核定的關鍵。",
      contentEn: "Vietnam actively targets FDI transfer pricing. Ensure robust local documentation for management fees, intercompany loans (30% EBITDA cap), and intellectual property royalties under Decree 132.",
      proTipZh: "✨ 秘笈：在向海外母公司支付技術諮詢服務費前，務必妥善存檔專家的護照出入境章、工作電郵、視訊會議紀錄與技術報告作為商業實質憑證！",
      proTipEn: "✨ Pro Tip: Archive specialist passport entry stamps, email deliverables, and technical reports to prove commercial substance for foreign service fees."
    }
  }
];

// Read existing file and parse
const existingIds = new Set();
const idRegex = /"id":\s*"([^"]+)"/g;
let match;
while ((match = idRegex.exec(fileContent)) !== null) {
  existingIds.add(match[1]);
}

const scenariosToAdd = additionalBusinessScenarios.filter(s => !existingIds.has(s.id));
console.log(`Found ${scenariosToAdd.length} additional deep business scenarios to append (out of ${additionalBusinessScenarios.length}).`);

if (scenariosToAdd.length > 0) {
  // Find where situationalScenarios array ends
  const lastBracketIndex = fileContent.lastIndexOf('];');
  const lastBracketOnly = fileContent.lastIndexOf(']');
  const insertionPoint = lastBracketIndex !== -1 ? lastBracketIndex : lastBracketOnly;

  const scenariosJson = scenariosToAdd.map(s => JSON.stringify(s, null, 2)).join(',\n');
  
  const before = fileContent.slice(0, insertionPoint).trimEnd();
  const needsComma = !before.endsWith(',');
  const newContent = `${before}${needsComma ? ',' : ''}\n${scenariosJson}\n];\n`;

  fs.writeFileSync(scenarioFilePath, newContent, 'utf8');
  console.log(`Successfully appended ${scenariosToAdd.length} additional business scenarios to situationalScenarios.js!`);
} else {
  console.log('All additional scenarios are already present in situationalScenarios.js.');
}
