import {
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked
} from 'lucide-react';

export const MODULE_IDS = [
  'path', 'alphabet', 'accent', 'shopping', 'conversation', 'phrases',
  'flashcards', 'grammar', 'hanviet', 'pronoun', 'quiz'
];

export const NAV_GROUPS = [
  {
    id: 'dashboard',
    items: [
      { id: 'path', labelKey: 'tabs.path', icon: Map }
    ]
  },
  {
    id: 'basics',
    labelKey: 'tabs.groupBasics',
    items: [
      { id: 'alphabet', labelKey: 'tabs.alphabet', icon: Languages },
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
      { id: 'quiz', labelKey: 'tabs.quiz', icon: BadgeCheck }
    ]
  },
  {
    id: 'advanced',
    labelKey: 'tabs.groupAdvanced',
    items: [
      { id: 'hanviet', labelKey: 'tabs.hanviet', icon: BookOpenText },
      { id: 'shopping', labelKey: 'tabs.shopping', icon: ShoppingBag },
      { id: 'accent', labelKey: 'tabs.accentSupplement', icon: BookMarked }
    ]
  }
];

export const ALL_NAV_ITEMS = NAV_GROUPS.flatMap(group => group.items);
