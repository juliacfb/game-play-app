import type { Category, CategoryId } from '@/types';

export const categories: Category[] = [
  { id: 'ranked', title: 'Ranqueada', shortTitle: 'Ranqueada' },
  { id: 'duel', title: 'Duelo 1x1', shortTitle: '1x1' },
  { id: 'fun', title: 'Diversão', shortTitle: 'Diversão' },
];

export const getCategory = (id: CategoryId): Category =>
  categories.find((category) => category.id === id) ?? categories[0];
