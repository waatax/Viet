import React, { useEffect, useRef } from 'react';
import { DialoguePlaybackBar } from './DialoguePlaybackBar';
import { useDialoguePlayback, useFollowActiveLine } from '../hooks/useDialoguePlayback';

/**
 * Adds the shared 純越文 / 越文＋中文 player to any phrase list.
 * Children mark each phrase with data-line-index={i}; the active one gets the same
 * highlight classes the dialogue cards use (dpb-active-line part-vi|part-native).
 */
export const PhraseSetPlayer = ({ lines, title, accent = 'north', learningMode = 'zh', className, style, children }) => {
  const containerRef = useRef(null);
  const player = useDialoguePlayback({
    lines,
    accent,
    nativeLang: learningMode === 'zh' ? 'zh' : 'en',
    title
  });
  const activeIndex = player.isActive ? player.index : -1;
  useFollowActiveLine(containerRef, activeIndex, player.isPlaying);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('[data-line-index]') || [];
    items.forEach(el => {
      const isActive = Number(el.dataset.lineIndex) === activeIndex;
      el.classList.toggle('dpb-active-line', isActive);
      ['vi', 'native', 'shadow', 'loop'].forEach(part => el.classList.toggle(`part-${part}`, isActive && player.part === part));
    });
  });

  return (
    <>
      <DialoguePlaybackBar player={player} lines={lines} learningMode={learningMode} title={title} variant="compact" />
      <div ref={containerRef} className={className} style={style}>
        {children}
      </div>
    </>
  );
};

export default PhraseSetPlayer;
