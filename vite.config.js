import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Viet/',
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('audioManifest.json')) {
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
