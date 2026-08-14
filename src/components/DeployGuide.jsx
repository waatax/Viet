import React from 'react';
import { Rocket, Github, CheckCircle2, Code, Terminal, ExternalLink } from 'lucide-react';

export const DeployGuide = () => {
  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Rocket color="var(--brand-primary)" />
          GitHub Pages 專案發布指南 (Deploy to waatax.github.io/Viet)
        </h2>
        <p className="section-desc">本網站已配置基底路徑 `/Viet/` 與 Vite 自動打包部署設定</p>
      </div>

      <div className="simulator-box">
        <div style={{ background: 'var(--bg-accent)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ExternalLink size={20} />
            目標部署網址：https://waatax.github.io/Viet
          </h3>
          <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)' }}>
            專案的 `vite.config.js` 中已成功設定 <code style={{ background: 'var(--bg-card)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>base: '/Viet/'</code>，打包產生的所有 HTML/CSS/JS 靜態資源皆支援 Github Pages 子路徑運行！
          </p>
        </div>

        <h3 style={{ fontSize: '1.2em', fontWeight: 800, marginBottom: '1rem' }}>
          📋 發布步驟 (Step-by-step Command Guide):
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="learning-card" style={{ background: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
              <span>步驟 1. 打包編譯專案</span>
            </div>
            <div style={{ background: '#0f172a', color: '#38bdf8', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', margin: '0.5rem 0' }}>
              npm run build
            </div>
            <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              此指令會將網站完整程式碼打包至 `dist/` 資料夾中。
            </span>
          </div>

          <div className="learning-card" style={{ background: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
              <span>步驟 2. 推送原碼至 GitHub 儲存庫</span>
            </div>
            <div style={{ background: '#0f172a', color: '#38bdf8', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', margin: '0.5rem 0' }}>
              git add .<br />
              git commit -m "feat: complete Vietnamese Learning Hub site"<br />
              git remote add origin https://github.com/waatax/Viet.git<br />
              git push -u origin main
            </div>
          </div>

          <div className="learning-card" style={{ background: 'var(--bg-main)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
              <span>步驟 3. 部署 dist 資料夾至 gh-pages 分支</span>
            </div>
            <div style={{ background: '#0f172a', color: '#38bdf8', padding: '0.8rem 1rem', borderRadius: 'var(--radius-sm)', fontFamily: 'monospace', margin: '0.5rem 0' }}>
              npx gh-pages -d dist
            </div>
            <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              完成後前往 GitHub Settings -&gt; Pages 設定分支為 `gh-pages` 即可在 https://waatax.github.io/Viet 上線！
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
