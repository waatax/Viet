import React from 'react';

// Dedicated multi-tier visual infographics (INFOGRAPHS) for all 20 modules.
// Every diagram features high-contrast vector visuals, accessible semantics (role="img", aria-label),
// explicit linguistic rules, and structured practical takeaways.
export function KnowledgeDiagram({ moduleId }) {
  if (moduleId === 'path') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-path">
        <figcaption id="kg-diag-path">三維「信·達·雅」溝通階梯與輸出檢驗迴圈</figcaption>
        <div className="kg-unit-grid kg-grid-3">
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-blue">第 1 層 · 信（正確）</strong>
            <p lang="vi"><strong>Tôi chưa ăn.</strong></p>
            <span>語意精準：chưa 表示尚未，保留後續可能，不可翻成決絕的「我不吃」。</span>
          </div>
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-emerald">第 2 層 · 達（通暢）</strong>
            <p lang="vi"><strong>Anh nói chậm lại được không?</strong></p>
            <span>對話修復：聽不懂時主動提出降速請求，建立雙向反饋，確保溝通順暢。</span>
          </div>
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-gold">第 3 層 · 雅（合度）</strong>
            <p lang="vi"><strong>Kính gửi quý công ty,</strong></p>
            <span>語域切換：商務公文採用正式敬語，日常聊天則用自然口語（如 Cảm ơn nhé!）。</span>
          </div>
        </div>
        
        {/* Supplementary Infograph 2: 7-Stage Roadmap Milestones */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.5rem' }}>七階能力目標與輸出任務檢驗階梯 (CEFR A1～C2)</strong>
          <div className="kg-unit-grid">
            <div>
              <span className="kg-pill-tag kg-tag-blue">A1 解碼階段 (150詞)</span>
              <small>能準確拼讀新音節、聽辨六聲調走向，完成無稿問候與自我介紹。</small>
            </div>
            <div>
              <span className="kg-pill-tag kg-tag-emerald">A2 生存階段 (400詞)</span>
              <small>能自主點餐、數字報價找零、叫車指路，並妥善處理日常緊急求助。</small>
            </div>
            <div>
              <span className="kg-pill-tag kg-tag-gold">B1 語法字根 (1200詞)</span>
              <small>掌握逆序修飾名詞組、時貌助詞與成對複句，能藉漢越字根推導新詞彙。</small>
            </div>
            <div>
              <span className="kg-pill-tag kg-tag-purple">B2 會話修正 (2500詞)</span>
              <small>能主動切換南北方言口音、運用四階決策漏斗修復對話並流暢影子跟讀。</small>
            </div>
          </div>
        </div>

        <ol className="kg-token-strip" style={{ marginTop: '0.9rem' }}>
          <li><span>步驟 1</span><strong>錄音自評</strong></li>
          <li><span>步驟 2</span><strong>換對象替換</strong></li>
          <li><span>步驟 3</span><strong>隔日盲測</strong></li>
          <li><span>步驟 4</span><strong>實戰驗證</strong></li>
        </ol>
        <p>學習階梯：先保證語意無誤（信），再練習主動引導與修復對話（達），最後依場合得體切換語域（雅）。</p>
      </figure>
    );
  }

  if (moduleId === 'alphabet') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-alphabet">
        <figcaption id="kg-diag-alphabet">越南語音節五位一體解剖圖與正字法拼寫律</figcaption>
        <div className="kg-anatomy-diagram">
          <div className="kg-anatomy-slots">
            <div className="kg-slot-box">
              <span className="kg-slot-role">聲母 Initial</span>
              <strong lang="vi">th / b / nh / ng</strong>
              <small>單音素輔音單位</small>
            </div>
            <div className="kg-slot-box">
              <span className="kg-slot-role">介音 Glide</span>
              <strong lang="vi">u / o</strong>
              <small>圓唇化過渡</small>
            </div>
            <div className="kg-slot-box kg-slot-core">
              <span className="kg-slot-role">核心母音 Nucleus</span>
              <strong lang="vi">yê / a / ă / â / iê</strong>
              <small>承載音節主要響度</small>
            </div>
            <div className="kg-slot-box">
              <span className="kg-slot-role">韻尾 Coda</span>
              <strong lang="vi">-n / -c / -t / -p</strong>
              <small>收音與喉塞截斷</small>
            </div>
          </div>
          <div className="kg-tone-banner">
            <span className="kg-pill-tag kg-tag-gold">聲調層 Tone Tier</span>
            <span>銳聲 (sắc) · 玄聲 (huyền) · 問聲 (hỏi) · 跌聲 (ngã) · 重聲 (nặng) · 平聲 (ngang)</span>
          </div>
        </div>

        {/* Supplementary Infograph 2: Orthography Spelling Rules */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>三大正字法拼寫分工鐵律 (Orthography Rules)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-blue">/k/ 音分工：c · k · qu</strong>
              <small>在 <code>i, e, ê, y</code> 前寫 <strong>k</strong>；接 <code>u</code> 介音寫 <strong>qu</strong>；其他母音前寫 <strong>c</strong>。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">濁音前置分工：gh · ngh</strong>
              <small>在 <code>i, e, ê</code> 前必須寫 <strong>gh</strong> 與 <strong>ngh</strong>；其他母音前寫 <strong>g</strong> 與 <strong>ng</strong>。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-gold">塞音韻尾限調：-c, -t, -p, -ch</strong>
              <small>因氣流在口腔完全截斷受阻，<strong>只能搭配銳聲 (sắc) 或重聲 (nặng)</strong>，無法發平聲或玄聲。</small>
            </div>
          </div>
        </div>

        <p><strong>塞音韻尾鐵律：</strong>以 <code>-c</code>、<code>-t</code>、<code>-p</code> 或 <code>-ch</code> 結尾的閉音節，因氣流完全受阻，聲調<strong>只能搭配銳聲 (sắc) 或重聲 (nặng)</strong>，無法發平聲或玄聲。</p>
      </figure>
    );
  }

  if (moduleId === 'tonegame') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-tonegame">
        <figcaption id="kg-diag-tonegame">六聲調五度聲學走向與聲質對照圖譜</figcaption>
        <svg viewBox="0 0 540 180" role="img" aria-label="六聲調五度音高走勢：平聲33，銳聲35，玄聲21，問聲313，跌聲325帶喉塞，重聲21短促緊喉。">
          {[1, 2, 3, 4, 5].map(lvl => (
            <g key={lvl}>
              <line x1="45" y1={155 - (lvl - 1) * 32} x2="520" y2={155 - (lvl - 1) * 32} stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
              <text x="30" y={160 - (lvl - 1) * 32} fontSize="11" fill="currentColor" textAnchor="end">{lvl}</text>
            </g>
          ))}
          {/* ngang 33 */}
          <path d="M55,91 L115,91" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" strokeLinecap="round" />
          <text x="85" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">ma (33)</text>
          <text x="85" y="128" fontSize="11" textAnchor="middle" fill="currentColor">平聲 · 鬼</text>

          {/* sac 35 */}
          <path d="M135,91 L195,27" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" strokeLinecap="round" />
          <text x="165" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">má (35)</text>
          <text x="165" y="128" fontSize="11" textAnchor="middle" fill="currentColor">銳聲 · 媽媽</text>

          {/* huyen 21 */}
          <path d="M215,123 L275,155" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" strokeLinecap="round" />
          <text x="245" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">mà (21)</text>
          <text x="245" y="128" fontSize="11" textAnchor="middle" fill="currentColor">玄聲 · 但是</text>

          {/* hoi 313 */}
          <path d="M295,91 Q320,155 355,91" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" strokeLinecap="round" />
          <text x="325" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">mả (313)</text>
          <text x="325" y="128" fontSize="11" textAnchor="middle" fill="currentColor">問聲 · 墳墓</text>

          {/* nga 325 with glottal */}
          <path d="M375,91 Q395,123 405,105" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3" />
          <line x1="405" y1="105" x2="415" y2="85" stroke="var(--brand-gold, #c28a25)" strokeWidth="2.5" strokeDasharray="3 2" />
          <path d="M415,85 L435,27" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" strokeLinecap="round" />
          <text x="405" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">mã (325)</text>
          <text x="405" y="128" fontSize="11" textAnchor="middle" fill="currentColor">跌聲 · 代碼</text>

          {/* nang 21 short */}
          <path d="M455,123 L485,155" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="5.5" strokeLinecap="round" />
          <text x="480" y="112" fontSize="13" fontWeight="700" textAnchor="middle" fill="currentColor" lang="vi">mạ (21)</text>
          <text x="480" y="128" fontSize="11" textAnchor="middle" fill="currentColor">重聲 · 秧苗</text>
        </svg>

        {/* Supplementary Infograph 2: Minimal Pair Confusion Matrix */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>換調即換詞：最小對立詞組辨義 (Minimal Pairs Spectrum)</strong>
          <div className="kg-unit-grid">
            <div><strong lang="vi">bàn (玄)</strong><span>桌子（生活名詞）</span></div>
            <div><strong lang="vi">bán (銳)</strong><span>販賣（動作動詞）</span></div>
            <div><strong lang="vi">bạn (重)</strong><span>朋友、同輩稱呼</span></div>
            <div><strong lang="vi">bản (問)</strong><span>版本、原稿、山寨</span></div>
          </div>
        </div>

        <p>北部口音明確區分問聲（降升）與跌聲（中升帶喉塞緊縮中斷）；南部許多口音問跌合流，但拼字正字法仍須嚴格遵循原符號。</p>
      </figure>
    );
  }

  if (moduleId === 'pronoun') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-pronoun">
        <figcaption id="kg-diag-pronoun">稱謂社交階層與「我們」包容性矩陣</figcaption>
        <div className="kg-unit-grid">
          <div>
            <strong lang="vi">chúng tôi</strong>
            <span>說話者 ＋ 己方群體</span>
            <span><strong>排除聽者</strong>（向客戶／外人介紹團隊業務）</span>
          </div>
          <div>
            <strong lang="vi">chúng ta</strong>
            <span>說話者 ＋ 聽者群體</span>
            <span><strong>包含聽者</strong>（邀請對方共同行動、聚餐合作）</span>
          </div>
        </div>

        <ol className="kg-token-strip" style={{ marginTop: '0.9rem' }}>
          <li><span>祖父母輩</span><strong lang="vi">ông / bà ↔ cháu</strong></li>
          <li><span>父母輩</span><strong lang="vi">bác / chú / cô ↔ cháu</strong></li>
          <li><span>稍年長</span><strong lang="vi">anh / chị ↔ em</strong></li>
          <li><span>較年輕</span><strong lang="vi">em ↔ anh / chị</strong></li>
          <li><span>同輩平輩</span><strong lang="vi">bạn ↔ tôi / mình</strong></li>
        </ol>

        {/* Supplementary Infograph 2: Kinship Branches & Third Person */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>親屬九宮格分支與第三人稱語法</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-blue">父系血親 · nội</strong>
              <small>ông bà nội (祖父母)、bác (伯父)、chú (叔父)、cô (姑姑)</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">母系血親 · ngoại</strong>
              <small>ông bà ngoại (外祖父母)、bác (大阿姨/姨丈)、dì (阿姨)、cậu (舅舅)</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-gold">第三人稱後綴 · + ấy</strong>
              <small>稱謂後接 ấy 指稱他人：anh ấy (他)、chị ấy (她)、ông ấy (老先生)</small>
            </div>
          </div>
        </div>

        <p>第三方稱呼只需在稱謂後加上 <code>ấy</code>（如 <code>anh ấy</code>、<code>chị ấy</code>）；詢問不確定之長輩稱呼時，可先禮貌問：<span lang="vi">Tôi nên gọi anh/chị là gì?</span></p>
      </figure>
    );
  }

  if (moduleId === 'shopping') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-shopping">
        <figcaption id="kg-diag-shopping">每三位分組，對照越文大數單位與標點符號</figcaption>
        <div className="kg-unit-grid">
          {[
            ['1', '000', 'nghìn · 千 (10³)'],
            ['1', '000 000', 'triệu · 百萬 (10⁶)'],
            ['1', '000 000 000', 'tỷ · 十億 (10⁹)']
          ].map(([one, zeros, label]) => (
            <div key={label}>
              <strong>{one} {zeros}</strong>
              <span lang="vi">{label}</span>
            </div>
          ))}
        </div>
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <div className="kg-unit-grid">
            <div>
              <span className="kg-slot-role">千分位標點點號 (.)</span>
              <strong>250.000 ₫</strong>
              <small>越文以句點隔開每三位數</small>
            </div>
            <div>
              <span className="kg-slot-role">小數點標點逗號 (,)</span>
              <strong>2,5 triệu ₫</strong>
              <small>等於 2.500.000 越南盾</small>
            </div>
            <div>
              <span className="kg-slot-role">特殊個位變音</span>
              <strong lang="vi">21 = mốt · 25 = lăm</strong>
              <small>十位非零時個位 1 讀 mốt、5 讀 lăm</small>
            </div>
            <div>
              <span className="kg-slot-role">折扣演算法門</span>
              <strong lang="vi">giảm giá 20%</strong>
              <small>越文說降價20%，等於中文「八折」</small>
            </div>
          </div>
        </div>
        <p>250 nghìn＝250 × 1,000＝250,000；2,5 triệu＝2.5 × 1,000,000＝2,500,000。請注意越文小數與千分位標點與美式剛好相反。</p>
      </figure>
    );
  }

  if (moduleId === 'phrases') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-phrases">
        <figcaption id="kg-diag-phrases">三大情境核心請求句型積木模組</figcaption>
        <div className="kg-anatomy-diagram">
          <div style={{ display: 'grid', gap: '0.6rem' }}>
            <div className="kg-slot-strip-row">
              <span className="kg-pill-tag kg-tag-blue">索取物品</span>
              <ol className="kg-token-strip">
                <li><span>起始請求</span><strong lang="vi">Cho tôi</strong></li>
                <li><span>數量詞組</span><strong lang="vi">một ly</strong></li>
                <li><span>核心物件</span><strong lang="vi">nước.</strong></li>
              </ol>
            </div>
            <div className="kg-slot-strip-row">
              <span className="kg-pill-tag kg-tag-emerald">請求協助</span>
              <ol className="kg-token-strip">
                <li><span>稱謂</span><strong lang="vi">Anh/Chị</strong></li>
                <li><span>能否助詞</span><strong lang="vi">có thể</strong></li>
                <li><span>具體動作</span><strong lang="vi">viết ra</strong></li>
                <li><span>對象指引</span><strong lang="vi">giúp tôi</strong></li>
                <li><span>禮貌問尾</span><strong lang="vi">được không?</strong></li>
              </ol>
            </div>
            <div className="kg-slot-strip-row">
              <span className="kg-pill-tag kg-tag-gold">請求許可</span>
              <ol className="kg-token-strip">
                <li><span>第一人稱</span><strong lang="vi">Tôi</strong></li>
                <li><span>可以許可</span><strong lang="vi">có thể</strong></li>
                <li><span>自我行為</span><strong lang="vi">ngồi đây</strong></li>
                <li><span>是非疑問</span><strong lang="vi">không?</strong></li>
              </ol>
            </div>
          </div>
        </div>

        {/* Supplementary Infograph 2: Polite Rejection & Clarification */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>委婉開場與拒絕修復語塊 (Polite Rejection & Clarification)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Xin lỗi, làm phiền anh…</strong>
              <small>開口前致意：不好意思，打擾您一下。</small>
            </div>
            <div>
              <strong lang="vi">Cảm ơn, nhưng tôi không cần.</strong>
              <small>委婉拒絕：先致謝再拒絕，保留人情面子。</small>
            </div>
            <div>
              <strong lang="vi">Tôi thích cái này hơn.</strong>
              <small>表達偏好：相較之下我比較喜歡這一個。</small>
            </div>
          </div>
        </div>

        <p>執行動作的主體是決定句型的關鍵：索取物品用 <code>Cho tôi</code>，請他人執行用 <code>Anh có thể... giúp tôi</code>，自身行為許可則用 <code>Tôi có thể... không?</code>。</p>
      </figure>
    );
  }

  if (moduleId === 'grammar') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-grammar">
        <figcaption id="kg-diag-grammar">名詞組逆序修飾結構與五維時貌光譜</figcaption>
        <ol className="kg-token-strip">
          {[
            ['hai', '數量詞 · 兩'],
            ['cuốn', '量詞 · 本'],
            ['sách', '中心名詞 · 書'],
            ['mới', '形容詞修飾 · 新'],
            ['của tôi', '領屬詞組 · 我的']
          ].map(([vi, zh]) => (
            <li key={vi}><strong lang="vi">{vi}</strong><span>{zh}</span></li>
          ))}
        </ol>
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <span className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>時貌標記時間軸線 (Aspect Horizon)</span>
          <div className="kg-unit-grid">
            <div><strong lang="vi">đã</strong><span>已經（過去完成）</span></div>
            <div><strong lang="vi">vừa</strong><span>剛剛（瞬時過去）</span></div>
            <div><strong lang="vi">đang</strong><span>正在（進行狀態）</span></div>
            <div><strong lang="vi">sắp</strong><span>快要（即將發生）</span></div>
            <div><strong lang="vi">sẽ</strong><span>將會（未來預期）</span></div>
          </div>
        </div>

        {/* Supplementary Infograph 2: Passive Voice Dual Track */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>被動語態雙軌判斷與疑問詞原位留存</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">được · 獲得（幸運/正面）</strong>
              <small><span lang="vi">Tôi được khen.</span>（我被稱讚了。）表示有利或符合心願的結果。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-gold">bị · 遭遇（不利/負面）</strong>
              <small><span lang="vi">Tôi bị phạt.</span>（我被處罰了。）表示非自願、負面之倒楣遭遇。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-blue">疑問詞原位 (In-situ)</strong>
              <small>問受詞放句尾：<span lang="vi">Bạn đi đâu?</span>；問主詞放句首：<span lang="vi">Ai gọi bạn?</span>。</small>
            </div>
          </div>
        </div>

        <p>越語名詞組為「中心語在前，修飾語在後」；時貌助詞（đã/đang/sẽ）在時間副詞明確時常可省略，而 <code>chưa</code>（尚未）自帶時貌暗示，絕非一般否定 <code>không</code>。</p>
      </figure>
    );
  }

  if (moduleId === 'sentence') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-sentence">
        <figcaption id="kg-diag-sentence">四大邏輯複句成對關聯結構圖</figcaption>
        <div className="kg-unit-grid">
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-blue">因果關聯</strong>
            <p><strong lang="vi">Vì … nên …</strong></p>
            <span><strong lang="vi">Vì</strong> trời mưa <strong lang="vi">nên</strong> tôi ở nhà.（因為下雨，所以我待在家。）</span>
          </div>
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-gold">讓步轉折</strong>
            <p><strong lang="vi">Tuy … nhưng …</strong></p>
            <span><strong lang="vi">Tuy</strong> mệt <strong lang="vi">nhưng</strong> tôi vẫn học.（雖然累，我仍然讀書。）</span>
          </div>
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-emerald">假設條件</strong>
            <p><strong lang="vi">Nếu … thì …</strong></p>
            <span><strong lang="vi">Nếu</strong> rảnh <strong lang="vi">thì</strong> tôi sẽ gọi.（如果有空，我會打電話。）</span>
          </div>
          <div className="kg-card-feature">
            <strong className="kg-pill-tag kg-tag-purple">遞進並列</strong>
            <p><strong lang="vi">Không những … mà còn …</strong></p>
            <span>Món này <strong lang="vi">không những</strong> ngon <strong lang="vi">mà còn</strong> rẻ.（不但好吃而且便宜。）</span>
          </div>
        </div>

        {/* Supplementary Infograph 2: Relative Clause mà & Purpose để */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>關係子句 mà 與目的 để 的語塊連接</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">關係子句 mà</strong>
              <small><span lang="vi">Cuốn sách mà tôi mua rất hay.</span>（我買的那本書很好看。）修飾名詞整句後置。</small>
            </div>
            <div>
              <strong lang="vi">目的 để vs 原因 vì</strong>
              <small><span lang="vi">Học để làm việc.</span>（學習是為了工作。）để 指向未來目標，vì 說明過去已成原因。</small>
            </div>
            <div>
              <strong lang="vi">時間從句 khi</strong>
              <small><span lang="vi">Khi đến Hà Nội, tôi sẽ gọi.</span>（到河內時我會打電話。）可置句首並以逗號隔開。</small>
            </div>
          </div>
        </div>

        <p>先判斷前後兩個子句的邏輯運算關係，再選框架；成對關聯詞的前後順序固定，不可顛倒或與英文混套。</p>
      </figure>
    );
  }

  if (moduleId === 'hanviet') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-hanviet">
        <figcaption id="kg-diag-hanviet">漢越字根網絡與《金雲翹傳》六八體押韻律</figcaption>
        {[
          ['Trăm', 'năm', 'trong', 'cõi', 'người', 'ta'],
          ['Chữ', 'tài', 'chữ', 'mệnh', 'khéo', 'là', 'ghét', 'nhau']
        ].map((line, i) => (
          <ol className="kg-poem" key={i} aria-label={i === 0 ? '六言：共六音節' : '八言：共八音節'}>
            {line.map((word, n) => (
              <li key={n} className={n === 5 ? 'kg-rhyme' : ''}>
                <span>{n + 1}</span>
                <strong lang="vi">{word}</strong>
                {n === 5 && <small>韻</small>}
              </li>
            ))}
          </ol>
        ))}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>假朋友警示 (False Friends Warning) 與語域分化</strong>
          <div className="kg-unit-grid">
            <div><strong lang="vi">bác sĩ</strong><span>醫師（非中文之「博士」）</span></div>
            <div><strong lang="vi">tiến sĩ</strong><span>博士學位（進士詞源）</span></div>
            <div><strong lang="vi">lịch sự</strong><span>有禮貌、客氣（非「歷史」）</span></div>
            <div><strong lang="vi">lịch sử</strong><span>歷史（聲調不同，詞義迥異）</span></div>
            <div><strong lang="vi">phụ nữ</strong><span>婦女（漢越詞，中性莊重）</span></div>
            <div><strong lang="vi">đàn bà</strong><span>女人（固有詞，口語或不夠敬意）</span></div>
          </div>
        </div>
        <p>六八體本例中 <span lang="vi">ta ↔ là</span> 於第 6 音節押平聲韻；漢越詞佔越語詞彙量逾六成，但必須警惕假朋友詞義分化。</p>
      </figure>
    );
  }

  if (moduleId === 'conversation') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-conversation">
        <figcaption id="kg-diag-conversation">會話中斷即時主動修復四階決策漏斗</figcaption>
        <div className="kg-unit-grid">
          <div className="kg-card-feature">
            <span className="kg-step">1</span>
            <strong>沒聽清楚？</strong>
            <p lang="vi"><strong lang="vi">Anh nói lại được không?</strong></p>
            <small>請求重述，避免單方面猜測</small>
          </div>
          <div className="kg-card-feature">
            <span className="kg-step">2</span>
            <strong>語速太快？</strong>
            <p lang="vi"><strong lang="vi">Anh nói chậm lại được không?</strong></p>
            <small>要求降低說話速度以利捕捉音節</small>
          </div>
          <div className="kg-card-feature">
            <span className="kg-step">3</span>
            <strong>單詞不懂？</strong>
            <p lang="vi"><strong lang="vi">Từ này nghĩa là gì?</strong></p>
            <small>鎖定單一關鍵詞進行定義釋疑</small>
          </div>
          <div className="kg-card-feature">
            <span className="kg-step">4</span>
            <strong>確認數字與共識？</strong>
            <p lang="vi"><strong lang="vi">[Số tiền], đúng không?</strong></p>
            <small>主動覆誦關鍵條件完成閉環確認</small>
          </div>
        </div>

        {/* Supplementary Infograph 2: Topic Transition & Closing Signals */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>交際流轉信號：話題切換、委婉異議與得體收尾</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">À, nhân tiện…</strong>
              <small>話題轉換：啊，順便一提……確認前事談畢後自然切入新議題。</small>
            </div>
            <div>
              <strong lang="vi">Tôi hiểu, nhưng tôi nghĩ khác…</strong>
              <small>表達不同意見：先同理對方再提歧異，避免直接否定傷害合作關係。</small>
            </div>
            <div>
              <strong lang="vi">Thôi, tôi phải đi rồi.</strong>
              <small>收尾信號：好了，我得先走了。給出收尾提示再道別，避免突然離席。</small>
            </div>
          </div>
        </div>

        <p>遇到聽不懂時「主動修復」對話比「點頭假裝聽懂」更能建立信任；複述關鍵資訊（金額、日期、數量）是確保履約的最有效工具。</p>
      </figure>
    );
  }

  if (moduleId === 'accent') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-accent">
        <figcaption id="kg-diag-accent">越南南北雙城語音與高頻生活詞彙對照等語線</figcaption>
        <div className="kg-unit-grid">
          <div>
            <strong className="kg-pill-tag kg-tag-blue">北部河內音 (Hà Nội)</strong>
            <ul style={{ paddingLeft: '1.2rem', margin: '0.4rem 0' }}>
              <li><code>d, gi, r</code> 皆讀作 <strong>[z]</strong> 濁擦音</li>
              <li><code>v</code> 讀作清晰之 <strong>[v]</strong> 音</li>
              <li><code>hỏi</code> 與 <code>ngã</code> 明確分立為兩調</li>
              <li>詞彙：<strong>bố</strong> (爸), <strong>thìa</strong> (湯匙), <strong>ngô</strong> (玉米)</li>
              <li>語氣詞：<strong>Đi đâu thế?</strong>（去哪裡呀？）</li>
            </ul>
          </div>
          <div>
            <strong className="kg-pill-tag kg-tag-emerald">南部胡志明音 (TP. Hồ Chí Minh)</strong>
            <ul style={{ paddingLeft: '1.2rem', margin: '0.4rem 0' }}>
              <li><code>d, gi</code> 讀作 <strong>[j]</strong>；<code>r</code> 帶捲舌音</li>
              <li><code>v</code> 常讀作近音 <strong>[j] / [w]</strong></li>
              <li><code>hỏi</code> 與 <code>ngã</code> 合流為單一問調</li>
              <li>詞彙：<strong>ba</strong> (爸), <strong>muỗng</strong> (湯匙), <strong>bắp</strong> (玉米)</li>
              <li>語氣詞：<strong>Đi đâu vậy?</strong>（去哪裡呀？）</li>
            </ul>
          </div>
        </div>

        {/* Supplementary Infograph 2: Regional Pronoun Habits */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>地區性禮貌應對習慣 (Sociolinguistic Variations)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Dạ, con cảm ơn cô.</strong>
              <small>南部晚輩對父母長輩常以 <strong>con</strong> 自稱，句首常用 <strong>dạ</strong> 表恭敬。</small>
            </div>
            <div>
              <strong lang="vi">Cháu chào bác ạ.</strong>
              <small>北部晚輩對長輩更普遍自稱 <strong>cháu</strong>，句尾習慣加上 <strong>ạ</strong> 標示禮貌。</small>
            </div>
          </div>
        </div>

        <p>口音是語音實踐的真實多樣性，不影響全國統一的正字法拼寫；建議學習者初期先錨定一種口音穩定輸出，聽力則需南北兼顧。</p>
      </figure>
    );
  }

  if (moduleId === 'shadowing') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-shadowing">
        <figcaption id="kg-diag-shadowing">影子跟讀五階漸進認知天梯與意群切分</figcaption>
        <ol className="kg-timeline" style={{ marginTop: '0.5rem' }}>
          {[
            ['1. 聽解語意', '先充分理解全文與句子意思'],
            ['2. 切分意群', '劃出語意停頓塊 (Chunking)'],
            ['3. 0.75x 慢速', '對齊韻尾收阻與聲調走向'],
            ['4. 1.0x 原速', '同頻模仿連音語流與句調情緒'],
            ['5. 延遲重述', '停頓2秒無稿重現語句結構']
          ].map(([step, desc], i) => (
            <li key={step}>
              <span className="kg-dot" aria-hidden="true">{i + 1}</span>
              <strong>{step}</strong>
              <span>{desc}</span>
            </li>
          ))}
        </ol>

        {/* Supplementary Infograph 2: Chunking & Self-Evaluation Radar */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>意群切分標記與自評三度量表</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Tôi muốn / đặt một phòng / cho hai người.</strong>
              <small>自然意群停頓：在介系詞與連接詞前稍作換氣，勿在名詞與修飾語中間截斷。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-blue">自評 1 · 聲調精準度 (1~3分)</strong>
              <small>檢視高升是否到位、問跌是否混淆、重聲是否緊短。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">自評 2 · 塞尾到位率 (1~3分)</strong>
              <small>檢視 -c, -t, -p 收口時是否有多餘之尾音母音洩漏。</small>
            </div>
          </div>
        </div>

        <p>每次跟讀錄音只鎖定一項核心變因修復（如純練韻尾收口或純練跌聲喉塞）；經由「聽音 → 延遲 → 重構」才能將語音轉化為長期主動表達力。</p>
      </figure>
    );
  }

  if (moduleId === 'business') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-business">
        <figcaption id="kg-diag-business">越商 B2B 詢價與合約談判五段式骨架</figcaption>
        <div className="kg-anatomy-diagram">
          <ol className="kg-bars">
            <li>
              <span className="kg-bar-label">1. 正式啟信</span>
              <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: '20%' }} /></span>
              <span className="kg-bar-value" lang="vi">Kính gửi Quý công ty,</span>
            </li>
            <li>
              <span className="kg-bar-label">2. 詢價目的</span>
              <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: '40%' }} /></span>
              <span className="kg-bar-value" lang="vi">Chúng tôi muốn hỏi giá sản phẩm…</span>
            </li>
            <li>
              <span className="kg-bar-label">3. 規格條件</span>
              <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: '60%' }} /></span>
              <span className="kg-bar-value" lang="vi">Số lượng: 500 chiếc, giao trước 30/11</span>
            </li>
            <li>
              <span className="kg-bar-label">4. 附條件協商</span>
              <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: '80%' }} /></span>
              <span className="kg-bar-value" lang="vi">Có thể giảm 3% nếu thanh toán trước</span>
            </li>
            <li>
              <span className="kg-bar-label">5. 專業署名</span>
              <span className="kg-bar-track"><span className="kg-bar-fill" style={{ width: '100%' }} /></span>
              <span className="kg-bar-value" lang="vi">Trân trọng, [Họ tên · Chức danh]</span>
            </li>
          </ol>
        </div>

        {/* Supplementary Infograph 2: Commercial Contract Core Clauses */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>商務合約四大關鍵條款與談判術語</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">điều khoản thanh toán</strong>
              <small>付款條款：定金、信用狀 (L/C) 或電匯 (T/T)，註明稅前或含加值稅 (VAT)。</small>
            </div>
            <div>
              <strong lang="vi">thời hạn giao hàng</strong>
              <small>交貨期限：註明確切日/月/年，避免只寫「儘快」(càng sớm càng tốt)。</small>
            </div>
            <div>
              <strong lang="vi">điều khoản bất khả kháng</strong>
              <small>不可抗力條款：天災、戰爭或政府法令變更導致免責之法定約定。</small>
            </div>
            <div>
              <strong lang="vi">Ai phụ trách việc này?</strong>
              <small>會議結案追蹤：指明單一負責人與完成期限，避免責任真空。</small>
            </div>
          </div>
        </div>

        <p>所有金額談判請註明幣別（VND 或 USD）與是否含加值稅（VAT）；讓步必須附帶具體商業對價條件（如預付、起訂量門檻）。</p>
      </figure>
    );
  }

  if (moduleId === 'macropol') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-macropol">
        <figcaption id="kg-diag-macropol">百分比與百分點判讀及越南法規效力金字塔</figcaption>
        <svg viewBox="0 0 440 150" role="img" aria-label="示例由4%變5%，增加1個百分點，相對增幅25%；橫軸從0到6%，每格等距。">
          <line x1="100" y1="115" x2="340" y2="115" stroke="currentColor" />
          {[0, 1, 2, 3, 4, 5, 6].map(n => (
            <g key={n}>
              <line x1={100 + n * 40} y1="112" x2={100 + n * 40} y2="119" stroke="currentColor" />
              <text x={100 + n * 40} y="139" textAnchor="middle" fill="currentColor">{n}%</text>
            </g>
          ))}
          <text x="10" y="40" fill="currentColor">原值 4%</text>
          <rect x="100" y="20" width="160" height="28" fill="var(--brand-primary, #14b8a6)" />
          <text x="10" y="90" fill="currentColor">新值 5%</text>
          <rect x="100" y="70" width="200" height="28" fill="var(--brand-primary, #14b8a6)" />
        </svg>

        {/* Supplementary Infograph 2: Legal Hierarchy & Statistical Horizon */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.8rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>越南法規文件位階金字塔與統計口徑</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Luật (法律)</strong>
              <small>國會 (Quốc hội) 審議通過，具備最高法律位階之母法。</small>
            </div>
            <div>
              <strong lang="vi">Nghị định (議定)</strong>
              <small>政府總理簽署頒布之行政命令，規範母法之具體實施細則。</small>
            </div>
            <div>
              <strong lang="vi">Thông tư (通知)</strong>
              <small>各部會部長發布之行業執行要點與技術指引。</small>
            </div>
            <div>
              <strong lang="vi">so với cùng kỳ (同比 YoY)</strong>
              <small>與去年同期相比；區隔環比 (so với tháng/quý trước)。</small>
            </div>
          </div>
        </div>

        <p>差值：5% − 4%＝<strong>1 個百分點</strong>。相對增幅：(5 − 4) ÷ 4＝<strong>25%</strong>。閱讀越南財經數據時，務必分清同比 (YoY) 與環比 (MoM/QoQ)。</p>
      </figure>
    );
  }

  if (moduleId === 'quiz') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-quiz">
        <figcaption id="kg-diag-quiz">錯題認知根因四象限診斷與靶向修復矩陣</figcaption>
        <div className="kg-unit-grid">
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-blue">象限 1 · 聽音聽辨</span>
            <p><strong>母音或聲調混淆</strong></p>
            <span>如 <code>mua</code> (買) vs <code>mưa</code> (下雨)；修復法：進行 10 題最小對立詞盲聽。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-emerald">象限 2 · 核心詞義</span>
            <p><strong>概念與時貌混淆</strong></p>
            <span>如 <code>không</code> (不) vs <code>chưa</code> (還沒)；修復法：分別帶入時間詞各造一句。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-gold">象限 3 · 語序語塊</span>
            <p><strong>修飾倒置錯位</strong></p>
            <span>如名詞組誤作 <code>*mới sách</code>；修復法：依照「中心語在前」拆解重組積木。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-purple">象限 4 · 社交語域</span>
            <p><strong>場合與稱謂不當</strong></p>
            <span>如對長輩長官誤用 <code>em ơi</code>；修復法：將同一個意思分寫成口語與敬語兩版。</span>
          </div>
        </div>

        {/* Supplementary Infograph 2: Confidence vs Accuracy Matrix */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>信心度與正確度交叉對策矩陣 (Meta-Cognitive Matrix)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-gold">猜對題（低信心·答對）</strong>
              <small>最具欺騙性！必須回查語法規則，避免僥倖心態留下認知缺口。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-blue">錯題再生產三步驟</strong>
              <small>指出混淆點 → 替換人地時造新句 → 錄音朗讀，隔日換情境重測。</small>
            </div>
          </div>
        </div>

        <p>先為錯誤準確歸類，再進行單點突破練習；隔日用全新語境重測，方能驗證知識缺口是否真正閉合。</p>
      </figure>
    );
  }

  if (moduleId === 'flashcards') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-flashcards">
        <figcaption id="kg-diag-flashcards">艾賓浩斯遺忘曲線與 SRS 五階黃金複習節奏</figcaption>
        <svg viewBox="0 0 520 160" role="img" aria-label="SRS間隔重複曲線：初次學習後急速衰減，經過第1天、第3天、第7天、第14天多次提取，遺忘率大幅趨平。">
          <line x1="45" y1="130" x2="495" y2="130" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="45" y1="20" x2="45" y2="130" stroke="currentColor" strokeOpacity="0.2" />
          <text x="35" y="25" fontSize="10" textAnchor="end" fill="currentColor">100%</text>
          <text x="35" y="130" fontSize="10" textAnchor="end" fill="currentColor">0%</text>
          {/* Exponential decay 1 */}
          <path d="M50,25 Q80,120 130,125" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="4 3" />
          {/* Recovery 1 at Day 1 */}
          <path d="M130,125 L130,35 Q175,95 240,105" fill="none" stroke="currentColor" strokeOpacity="0.4" strokeDasharray="4 3" />
          {/* Recovery 2 at Day 3 */}
          <path d="M240,105 L240,30 Q300,70 370,75" fill="none" stroke="currentColor" strokeOpacity="0.6" strokeDasharray="4 3" />
          {/* Recovery 3 at Day 7 -> stabilized */}
          <path d="M370,75 L370,25 Q430,40 495,45" fill="none" stroke="var(--brand-primary, #14b8a6)" strokeWidth="3.5" />
          {/* Dots */}
          {[
            ['當天', 50, 25],
            ['Day 1', 130, 35],
            ['Day 3', 240, 30],
            ['Day 7', 370, 25],
            ['Day 14', 495, 45]
          ].map(([lbl, x, y]) => (
            <g key={lbl}>
              <circle cx={x} cy={y} r="5" fill="var(--brand-gold, #c28a25)" />
              <text x={x} y="150" fontSize="11" textAnchor="middle" fill="currentColor">{lbl}</text>
            </g>
          ))}
        </svg>

        {/* Supplementary Infograph 2: Dual-Track Retrieval & Collocation Matrix */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>雙向提取測試與搭配詞網絡 (Collocation Matrix)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-blue">正向提取 (越 → 中)</strong>
              <small>辨析被動理解能力：看見越文 <span lang="vi">đặt vé</span> 能瞬間想起「訂票」。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">逆向提取 (中 → 越)</strong>
              <small>檢驗主動輸出能力：看到「我想訂去河內的票」能順利說出越文句子。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-gold">搭配詞成套學</strong>
              <small>記動詞連受詞：<span lang="vi">học bài</span> (溫習功課) vs <span lang="vi">học tiếng Việt</span> (學越語)。</small>
            </div>
          </div>
        </div>

        <p><strong>主動提取原則 (Active Recall)：</strong>翻開閃卡前必須先在腦中說出越文與搭配詞；若能輕鬆想起則擴大複習間隔，忘記則重設回當日循環。</p>
      </figure>
    );
  }

  if (moduleId === 'topics') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-topics">
        <figcaption id="kg-diag-topics">越文時空坐標：星期序數與日曆由小到大規則</figcaption>
        <div className="kg-unit-grid">
          <div>
            <span className="kg-slot-role">星期推算法 (Thứ + 序數)</span>
            <ul style={{ paddingLeft: '1.2rem', margin: '0.4rem 0' }}>
              <li><strong lang="vi">Thứ hai</strong>：星期一（序數第二日）</li>
              <li><strong lang="vi">Thứ ba</strong>：星期二 · <strong lang="vi">Thứ tư</strong>：星期三</li>
              <li><strong lang="vi">Thứ năm</strong>：星期四 · <strong lang="vi">Thứ sáu</strong>：星期五</li>
              <li><strong lang="vi">Thứ bảy</strong>：星期六 · <strong lang="vi">Chủ nhật</strong>：星期日</li>
            </ul>
          </div>
          <div>
            <span className="kg-slot-role">日期書寫：由小到大 (日→月→年)</span>
            <div style={{ padding: '0.6rem', background: 'var(--bg-card)', borderRadius: '8px', border: '1px solid var(--border-color)', marginTop: '0.4rem' }}>
              <p lang="vi" style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>
                ngày 23 tháng 10 năm 2026
              </p>
              <small>中文順序：2026年10月23日（完全相反）</small>
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.88rem' }}>
              時間範圍：<code>từ tám giờ đến mười giờ</code>（從八點到十點）；區分時點 (giờ) 與時長 (tiếng / giờ đồng hồ)。
            </p>
          </div>
        </div>

        {/* Supplementary Infograph 2: Food Customization Matrix */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>餐飲客製化標記法 (Food Customization Formulas)</strong>
          <div className="kg-unit-grid">
            <div><strong lang="vi">không đường</strong><span>無糖（完全不加糖）</span></div>
            <div><strong lang="vi">ít đường / ít đá</strong><span>微糖／少冰（少量添加）</span></div>
            <div><strong lang="vi">không hành</strong><span>不加蔥（傳統河粉客製常見）</span></div>
            <div><strong lang="vi">không rau mùi</strong><span>不放香菜（香草植物客製）</span></div>
          </div>
        </div>

        <p>切記 <code>Thứ hai</code> 是星期一而非星期二；日期的時間層次是由精確到宏觀（日 → 月 → 年）。</p>
      </figure>
    );
  }

  if (moduleId === 'fasttrack') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-fasttrack">
        <figcaption id="kg-diag-fasttrack">越南初訪 7 天急救生存任務航線</figcaption>
        <div className="kg-unit-grid">
          {[
            ['Day 1', '問候禮儀', 'Xin chào / Cảm ơn'],
            ['Day 2', '咖啡飲食', 'Cho tôi một ly cà phê, ít đá'],
            ['Day 3', '採購詢價', 'Bao nhiêu tiền? Bớt một chút?'],
            ['Day 4', '叫車交通', 'Cho tôi đến địa chỉ này'],
            ['Day 5', '自我介紹', 'Tôi là người Đài Loan'],
            ['Day 6', '社群連結', 'Bạn có dùng Zalo không?'],
            ['Day 7', '求助備援', 'Giúp tôi với / Khách sạn ABC']
          ].map(([day, theme, phrase]) => (
            <div key={day}>
              <strong className="kg-pill-tag kg-tag-blue">{day} · {theme}</strong>
              <p lang="vi" style={{ margin: '0.3rem 0 0', fontWeight: 600 }}>{phrase}</p>
            </div>
          ))}
        </div>

        {/* Supplementary Infograph 2: Transportation & Zalo Exchange */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>交通抵達與社群拓展實戰應對</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Cho tôi xuống ở đây.</strong>
              <small>叫車下車：讓我在這裡下車。搭配手機地圖畫面出示雙重確認。</small>
            </div>
            <div>
              <strong lang="vi">Tôi có thể trả bằng thẻ không?</strong>
              <small>支付確認：可以刷卡或轉帳嗎？先確認結帳方式再付款。</small>
            </div>
            <div>
              <strong lang="vi">Kết bạn Zalo nhé!</strong>
              <small>拓展人脈：交換通訊軟體 Zalo，維持後續商務或生活聯繫。</small>
            </div>
          </div>
        </div>

        <p>每天出門前遮住譯文無稿重現當日三句，上路時將關鍵地點與數字寫在手機備忘錄隨時核對。</p>
      </figure>
    );
  }

  if (moduleId === 'emergency') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-emergency">
        <figcaption id="kg-diag-emergency">急難黃金三部曲與三位數官方救援熱線速查</figcaption>
        <div className="kg-anatomy-diagram">
          <div className="kg-unit-grid">
            <div className="kg-card-feature">
              <span className="kg-step">1</span>
              <strong>第一步：精確位置</strong>
              <p lang="vi"><strong lang="vi">Tôi đang ở [Địa chỉ / Khách sạn]</strong></p>
              <small>先說出門牌、路名或明顯地標</small>
            </div>
            <div className="kg-card-feature">
              <span className="kg-step">2</span>
              <strong>第二步：陳述危難</strong>
              <p lang="vi"><strong lang="vi">Tôi bị mất hộ chiếu / bị tai nạn</strong></p>
              <small>說明遺失護照、受傷或急病</small>
            </div>
            <div className="kg-card-feature">
              <span className="kg-step">3</span>
              <strong>第三步：明確請求</strong>
              <p lang="vi"><strong lang="vi">Xin gọi cấp cứu / cảnh sát giúp tôi</strong></p>
              <small>要求協助報警、叫救護車或口譯</small>
            </div>
          </div>
        </div>
        <div className="kg-unit-grid" style={{ marginTop: '0.9rem' }}>
          <div><strong className="kg-pill-tag kg-tag-gold">113</strong><span>公安報警 (Cảnh sát)</span></div>
          <div><strong className="kg-pill-tag kg-tag-gold">114</strong><span>消防救災 (Cứu hỏa)</span></div>
          <div><strong className="kg-pill-tag kg-tag-gold">115</strong><span>醫療急救 (Cấp cứu)</span></div>
        </div>

        {/* Supplementary Infograph 2: Medical Allergy & Language Assistance */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.9rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>醫療過敏宣告與口譯協尋指令</strong>
          <div className="kg-unit-grid">
            <div>
              <strong lang="vi">Tôi bị dị ứng với thuốc này.</strong>
              <small>過敏警示：我對這種藥物過敏。就醫時第一時間向醫護人員出示。</small>
            </div>
            <div>
              <strong lang="vi">Tôi cần người phiên dịch tiếng Trung.</strong>
              <small>口譯請求：我需要中文口譯人員。無法完全理解醫療指示時務必堅持口譯。</small>
            </div>
            <div>
              <strong lang="vi">Xin liên hệ với người này giúp tôi.</strong>
              <small>緊急聯絡人：請幫我聯絡這個人（附上電話或名片）。</small>
            </div>
          </div>
        </div>

        <p>遇緊急狀況保持冷靜，先出示護照或居留證照片與飯店地址卡；若語言不通，明確要求：<span lang="vi">Tôi cần người phiên dịch tiếng Trung.</span></p>
      </figure>
    );
  }

  if (moduleId === 'science') {
    return (
      <figure className="kg-extra-diagram" aria-labelledby="kg-diag-science">
        <figcaption id="kg-diag-science">語言習得單一變因實證科學閉環 (PDCA Loop)</figcaption>
        <div className="kg-unit-grid">
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-blue">Plan · 假說設定</span>
            <p><strong>單一條件調控</strong></p>
            <span>每次只變動一項變因（如調控記憶量 10 詞變 5 詞，或調控提取間隔 12 小時變 24 小時）。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-emerald">Do · 盲測執行</span>
            <p><strong>杜絕提示干擾</strong></p>
            <span>嚴格在無翻面、無視覺提示下進行主動提取測試，並保留每次練習之原始錄音檔。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-gold">Check · 數據診斷</span>
            <p><strong>錯因量化歸因</strong></p>
            <span>記錄答對率，並將錯題嚴格分為聲調、母音、語序或語域四大類，計算比例分佈。</span>
          </div>
          <div className="kg-card-feature">
            <span className="kg-pill-tag kg-tag-purple">Act · 靶向調整</span>
            <p><strong>迭代下一輪任務</strong></p>
            <span>對未達標之知識點改以不同例句重寫並安排隔日重測，確認認知神經迴路真正閉合。</span>
          </div>
        </div>

        {/* Supplementary Infograph 2: Synaptic Consolidation Model */}
        <div className="kg-anatomy-diagram" style={{ marginTop: '0.85rem' }}>
          <strong className="kg-slot-role" style={{ display: 'block', marginBottom: '0.4rem' }}>大腦神經突觸固化模型 (Cognitive Consolidation)</strong>
          <div className="kg-unit-grid">
            <div>
              <strong className="kg-pill-tag kg-tag-blue">被動重看 (Passive Review)</strong>
              <small>反覆看十次只產生「虛假熟悉感」，大腦並未建立深層提取路徑，遺忘迅速。</small>
            </div>
            <div>
              <strong className="kg-pill-tag kg-tag-emerald">主動提取 (Active Recall)</strong>
              <small>主動回想誘發突觸可塑性，哪怕回想失敗也是在大腦標記神經缺口，學習效果倍增。</small>
            </div>
          </div>
        </div>

        <p>語言能力的進步不是靠感覺，而是靠可觀測的產出證據；連續答對並能換情境造句，才是長期掌握的標誌。</p>
      </figure>
    );
  }

  return null;
}
