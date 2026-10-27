import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));
let revision = 'local';
try { revision = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); } catch {}
const builtAt = new Date().toISOString();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'release-record',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'release.json', source: JSON.stringify({ version, revision, builtAt }, null, 2) });
    }
  }],
  define: {
    'import.meta.env.BUILD_REVISION': JSON.stringify(revision)
  },
  base: '/Viet/',
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: { main: 'index.html', quest: 'quest/index.html' },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('audioManifest.json') || id.includes('audioManifestZh.json')) {
            return 'data-audio-manifest';
          }
          if (id.includes('frequencyVocabularyData.js')) {
            return 'data-vocab';
          }
          if (id.includes('vocab1000Batches.js') || id.includes('vocabBatchesData.js')) {
            return 'data-vocab-batches';
          }
          if (id.includes('situationalScenarios.js')) {
            return 'data-scenarios';
          }
          if (id.includes('vietnameseData.js')) {
            return 'data-vietnamese';
          }
        }
      }
    }
  }
});
