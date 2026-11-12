import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import { LISTENING_LESSONS } from '../src/data/listeningLessons.js';

fs.mkdirSync('scripts/cache', { recursive: true });
const enginePath = path.resolve('scripts/cache/listening-engine.mjs');
await build({ entryPoints: ['src/services/audioEngine.js'], bundle: true, platform: 'node', format: 'esm', outfile: enginePath, define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' }, logLevel: 'error' });
const { audioEngine } = await import(pathToFileURL(enginePath));
const missing = { zh: [], viMissing: [] };
const seen = new Set();
for (const lesson of LISTENING_LESSONS) for (const line of lesson.lines) for (const lang of ['vi', 'zh']) {
  const raw = lang === 'vi' ? line.viet : line.zh;
  const cleaned = lang === 'vi' ? audioEngine.cleanText(raw) : audioEngine.cleanNativeText(raw, 'zh');
  const file = lang === 'vi' ? audioEngine.resolveManifestFile(raw, 'north') : audioEngine.resolveNativeFile(raw, 'zh');
  if (file && fs.existsSync(path.join('public/audio', file))) continue;
  if (seen.has(`${lang}:${cleaned}`)) continue;
  seen.add(`${lang}:${cleaned}`);
  missing[lang === 'vi' ? 'viMissing' : 'zh'].push({ raw, cleaned });
}
fs.writeFileSync('scripts/cache/listening_missing.json', JSON.stringify(missing, null, 2));
console.log(`Missing: ${missing.viMissing.length} Vietnamese / ${missing.zh.length} Chinese clips`);
if (process.argv.includes('--collect')) process.exit(0);
if (seen.size) throw new Error('Generate the missing clips before building packs.');

const out = 'public/audio/listening';
fs.mkdirSync(out, { recursive: true });
const manifest = {};
for (const lesson of LISTENING_LESSONS) {
  manifest[lesson.id] = {};
  for (const speed of [0.75, 1, 1.25]) {
    const target = `${out}/${lesson.id}-${speed}.mp3`;
    if (!process.argv.includes('--check') && !process.argv.includes('--metadata')) {
      const args = ['-hide_banner', '-loglevel', 'error', '-y'];
      for (const line of lesson.lines) {
        args.push('-i', path.join('public/audio', audioEngine.resolveManifestFile(line.viet, 'north')));
        args.push('-i', path.join('public/audio', audioEngine.resolveNativeFile(line.zh, 'zh')));
      }
      const filters = lesson.lines.flatMap((_, i) => [
        `[${i * 2}:a]aresample=24000,aformat=channel_layouts=mono,atempo=${speed},apad=pad_dur=0.4[v${i}]`,
        `[${i * 2 + 1}:a]aresample=24000,aformat=channel_layouts=mono,apad=pad_dur=1[z${i}]`
      ]);
      filters.push(lesson.lines.map((_, i) => `[v${i}][z${i}]`).join('') + `concat=n=${lesson.lines.length * 2}:v=0:a=1[out]`);
      args.push('-filter_complex', filters.join(';'), '-map', '[out]', '-codec:a', 'libmp3lame', '-b:a', '64k', '-metadata', `title=${lesson.title}・越中・越語${speed}x`, target);
      execFileSync('ffmpeg', args, { stdio: 'pipe' });
    }
    if (!fs.existsSync(target)) throw new Error(`Missing pack: ${target}`);
    const duration = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=noprint_wrappers=1:nokey=1', target], { encoding: 'utf8' }).trim());
    if (!Number.isFinite(duration) || duration < 4) throw new Error(`Invalid duration: ${target}`);
    manifest[lesson.id][speed] = { file: `listening/${lesson.id}-${speed}.mp3`, seconds: Number(duration.toFixed(3)), bytes: fs.statSync(target).size };
  }
  if (!process.argv.includes('--check')) fs.writeFileSync(`${out}/${lesson.id}.txt`, '\uFEFF' + `${lesson.title}\n越文 → 中文；越文獨立變速，中文原速。\n合成語音教材\n\n` + lesson.lines.map((l, i) => `${i + 1}. ${l.viet}\n${l.zh}\n${l.note}`).join('\n\n') + `\n\n重點：${lesson.rule}\n提醒：${lesson.trap}\n開口任務：${lesson.task}\n`);
}
if (!process.argv.includes('--check')) fs.writeFileSync('src/data/listeningPackManifest.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`PASS: ${LISTENING_LESSONS.length} lessons × 3 bilingual MP3 speeds; Chinese stays at 1x.`);
