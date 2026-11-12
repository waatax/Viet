import { DialogueSequencer } from './dialoguePlayback';
let sequencer;
const BOOKMARK = 'viet_listening_bookmark_v1';
export function readListeningBookmark() {
  try {
    const saved = JSON.parse(localStorage.getItem(BOOKMARK));
    return saved && typeof saved.lessonId === 'string' && Number.isInteger(saved.index) && saved.index >= 0 ? saved : null;
  } catch { return null; }
}
export function playListeningLesson(lesson, { fromIndex = 0, mode = 'vi-zh', single = false } = {}) {
  sequencer ??= new DialogueSequencer(state => {
    if (state.index >= 0) {
      try { localStorage.setItem(BOOKMARK, JSON.stringify({ lessonId: sequencer.ctx.lessonId, index: state.index })); } catch { /* Playback works without storage. */ }
    }
  });
  const ctx = { title: lesson.title, module: lesson.kind, lessonId: lesson.id, nativeLang: 'zh', accent: 'north', onComplete: null };
  if (single) {
    sequencer.updateContext(ctx);
    sequencer.setLines(lesson.lines);
    sequencer.playSingleLine(fromIndex, mode);
  } else sequencer.start({ ...ctx, lines: lesson.lines, fromIndex, mode });
  return sequencer;
}
