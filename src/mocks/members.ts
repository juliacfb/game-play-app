import type { Member } from '@/types';

export const members: Member[] = [
  {
    id: 'm1',
    username: 'Tiago Luchtenberg',
    avatar: require('@/assets/images/avatars/player-1.png'),
    status: 'online',
  },
  {
    id: 'm2',
    username: 'Rodrigo Gonçalves',
    avatar: require('@/assets/images/avatars/player-2.png'),
    status: 'busy',
  },
  {
    id: 'm3',
    username: 'Diego Fernandes',
    avatar: require('@/assets/images/avatars/player-3.png'),
    status: 'busy',
  },
];
