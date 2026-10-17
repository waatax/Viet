import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

fs.mkdirSync('scripts/cache', { recursive: true });
const temporary = fs.mkdtempSync(path.resolve('scripts/cache/audio-reliability-'));
const bundle = async (name, contents, plugins = []) => {
  const outfile = path.join(temporary, `${name}.mjs`);
  await build({ stdin: { contents, resolveDir: process.cwd() }, outfile, bundle: true, format: 'esm', platform: 'node', plugins, define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' }, logLevel: 'error' });
  return import(pathToFileURL(outfile));
};
try {
  const { audioEngine } = await bundle('engine', `export { audioEngine } from './src/services/audioEngine.js';`);
  const media = new EventTarget();
  media.play = async () => {};
  audioEngine.loadIntoMediaElement = () => media;
  let localEnded = 0;
  const localPlayback = audioEngine.playLocalFile('/audio/test.mp3', 1, { onEnd: () => localEnded++ });
  media.dispatchEvent(new Event('ended'));
  await localPlayback;
  assert.equal(localEnded, 1, 'local audio completion must advance exactly once');
  const longText = 'Tôi muốn học tiếng Việt mỗi ngày. '.repeat(30).trim();
  const segments = audioEngine.splitSpeechText(longText);
  assert.ok(segments.length > 1 && segments.every(segment => segment.length <= 180));
  assert.equal(segments.join(' '), longText, 'long Vietnamese sentences must retain every word');
  assert.equal(audioEngine.splitSpeechText('繁體中文'.repeat(100)).join(''), '繁體中文'.repeat(100));
  const spoken = [];
  let ended = 0;
  audioEngine.sessionId = 7;
  audioEngine.playOnlineSegment = async text => { spoken.push(text); };
  await audioEngine.playOnlineStream(longText, 1, { onEnd: () => ended++ }, 7);
  assert.deepEqual(spoken, segments);
  assert.equal(ended, 1, 'the sequencer advances only once after the whole sentence');
  audioEngine.playOnlineSegment = async () => { audioEngine.sessionId++; };
  await audioEngine.playOnlineStream(longText, 1, { onEnd: () => ended++ }, 7);
  assert.equal(ended, 1, 'cancelled speech must not signal completion');
  let errors = 0;
  audioEngine.playWebSpeech = async () => { throw new Error('no voice'); };
  audioEngine.playOnlineStream = async () => { throw new Error('offline'); };
  const originalWarn = console.warn;
  let expectedWarnings = 0;
  try {
    console.warn = () => expectedWarnings++;
    audioEngine.fallbackSpeech('Xin chào', 1, { onEnd: () => ended++, onError: () => errors++ });
    await new Promise(setImmediate);
  } finally { console.warn = originalWarn; }
  assert.equal(expectedWarnings, 1);
  assert.equal(errors, 1);
  assert.equal(ended, 1, 'unavailable audio must never be treated as completed audio');

  const entries = new Map();
  globalThis.caches = {
    open: async () => ({ match: async url => entries.get(url)?.clone(), put: async (url, response) => entries.set(url, response.clone()) }),
    delete: async () => { entries.clear(); return true; }
  };
  globalThis.window = { caches: globalThis.caches };
  const { offlineAudioService } = await bundle('offline', `export { offlineAudioService } from './src/services/offlineAudioService.js';`, [{
    name: 'manifest-fixture', setup(builder) {
      builder.onResolve({ filter: /audioEngine$/ }, () => ({ path: 'engine', namespace: 'fixture' }));
      builder.onLoad({ filter: /.*/, namespace: 'fixture' }, () => ({ contents: `export const audioEngine = {
        cleanText: text => text,
        resolveManifestFile: text => text === 'known' ? 'vi.mp3' : null,
        resolveNativeFile: text => text === '已知翻譯' ? 'zh.mp3' : null,
        buildAudioUrl: file => '/audio/' + file
      };` }));
    }
  }]);
  const audio = () => new Response('a'.repeat(300), { headers: { 'content-type': 'audio/mpeg' } });
  const html = () => new Response('<html>not an audio file</html>', { headers: { 'content-type': 'text/html' } });
  const lines = [{ vi: 'known', zh: '已知翻譯' }];
  let fetchCount = 0;
  let finishDownload;
  globalThis.fetch = () => { fetchCount++; return new Promise(resolve => { finishDownload = resolve; }); };
  const first = offlineAudioService.cacheAudioUrl('/audio/shared.mp3');
  const second = offlineAudioService.cacheAudioUrl('/audio/shared.mp3');
  await new Promise(setImmediate);
  assert.equal(fetchCount, 1, 'concurrent playback and pre-download must share one request');
  finishDownload(audio());
  assert.deepEqual(await Promise.all([first, second]), [true, true]);
  globalThis.fetch = async () => { fetchCount++; throw new Error('offline'); };
  assert.equal(await offlineAudioService.cacheAudioUrl('/audio/retry.mp3'), false);
  assert.equal(await offlineAudioService.cacheAudioUrl('/audio/retry.mp3'), false);
  assert.equal(fetchCount, 3, 'failed downloads must be released so a later attempt can retry');
  await offlineAudioService.clearOfflineCache();
  globalThis.fetch = async () => audio();
  let result = await offlineAudioService.cacheScenarioAudio(lines);
  assert.equal(result.cached, 2);
  assert.equal((await offlineAudioService.checkScenarioCacheStatus(lines)).isFullyCached, true);
  const blobUrl = await offlineAudioService.getCachedBlobUrl('/audio/vi.mp3');
  assert.ok(blobUrl.startsWith('blob:'), 'cached audio is playable without another network fetch');
  globalThis.fetch = async () => { throw new Error('offline'); };
  result = await offlineAudioService.cacheScenarioAudio(lines);
  assert.equal(result.cached, 2, 'previously downloaded audio must still resolve offline');
  let status = await offlineAudioService.checkScenarioCacheStatus([{ vi: 'missing', zh: '已知翻譯' }]);
  assert.equal(status.total, 2);
  assert.equal(status.cachedCount, 1);
  assert.equal(status.isFullyCached, false, 'missing manifest entries cannot report ready');
  await offlineAudioService.clearOfflineCache();
  entries.set('/audio/vi.mp3', html());
  globalThis.fetch = async () => html();
  assert.equal(await offlineAudioService.cacheAudioUrl('/audio/vi.mp3'), false);
  result = await offlineAudioService.cacheScenarioAudio(lines);
  assert.equal(result.cached, 0);
  assert.equal(result.failed, 2);
  status = await offlineAudioService.checkScenarioCacheStatus(lines);
  assert.equal(status.cachedCount, 0, 'HTML fallback pages must never count as audio');
  await offlineAudioService.clearOfflineCache();
  console.log('PASS: full long-sentence playback, cancellation, error callbacks, offline cache playback, missing manifests and invalid audio responses.');
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
