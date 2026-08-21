import {
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked, Zap, Brain, LifeBuoy,
  Music, Puzzle, Mic
} from 'lucide-react';

export const MODULE_IDS = [
  'path', 'fasttrack', 'science', 'emergency', 'alphabet', 'tonegame', 'pronoun',
  'phrases', 'conversation', 'flashcards', 'grammar', 'sentence', 'quiz',
  'shadowing', 'hanviet', 'shopping', 'accent'
];

export const NAV_GROUPS = [
  {
    id: 'dashboard',
    items: [
      { id: 'path', labelKey: 'tabs.path', icon: Map }
    ]
  },
  {
    id: 'fasttrack',
    labelKey: 'tabs.groupFastTrack',
    items: [
      { id: 'fasttrack', labelKey: 'tabs.fasttrack', icon: Zap },
      { id: 'emergency', labelKey: 'tabs.emergency', icon: LifeBuoy }
    ]
  },
  {
    id: 'basics',
    labelKey: 'tabs.groupBasics',
    items: [
      { id: 'alphabet', labelKey: 'tabs.alphabet', icon: Languages },
      { id: 'tonegame', labelKey: 'tabs.tonegame', icon: Music },
      { id: 'pronoun', labelKey: 'tabs.pronoun', icon: UsersRound }
    ]
  },
  {
    id: 'conversation',
    labelKey: 'tabs.groupConversation',
    items: [
      { id: 'phrases', labelKey: 'tabs.phrases', icon: MessageSquareText },
      { id: 'conversation', labelKey: 'tabs.conversation', icon: MessagesSquare }
    ]
  },
  {
    id: 'practice',
    labelKey: 'tabs.groupPractice',
    items: [
      { id: 'flashcards', labelKey: 'tabs.flashcards', icon: Layers3 },
      { id: 'grammar', labelKey: 'tabs.grammar', icon: BookOpenText },
      { id: 'sentence', labelKey: 'tabs.sentence', icon: Puzzle },
      { id: 'quiz', labelKey: 'tabs.quiz', icon: BadgeCheck },
      { id: 'shadowing', labelKey: 'tabs.shadowing', icon: Mic }
    ]
  },
  {
    id: 'advanced',
    labelKey: 'tabs.groupAdvanced',
    items: [
      { id: 'hanviet', labelKey: 'tabs.hanviet', icon: BookOpenText },
      { id: 'shopping', labelKey: 'tabs.shopping', icon: ShoppingBag },
      { id: 'accent', labelKey: 'tabs.accent', icon: BookMarked }
    ]
  },
  {
    id: 'science',
    labelKey: 'tabs.groupScience',
    items: [
      { id: 'science', labelKey: 'tabs.science', icon: Brain }
    ]
  }
];

export const ALL_NAV_ITEMS = NAV_GROUPS.flatMap(group => group.items);

