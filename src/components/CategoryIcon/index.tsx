import type { FC } from 'react';
import type { SvgProps } from 'react-native-svg';

import DuelIcon from '@/assets/svg/icon-duel.svg';
import FunIcon from '@/assets/svg/icon-fun.svg';
import RankedIcon from '@/assets/svg/icon-ranked.svg';
import type { CategoryId } from '@/types';

/** Ilustrações exportadas do Figma (nó "Icons"). */
const ICONS: Record<CategoryId, { Icon: FC<SvgProps>; width: number }> = {
  ranked: { Icon: RankedIcon, width: 48 },
  duel: { Icon: DuelIcon, width: 48 },
  fun: { Icon: FunIcon, width: 42 },
};

type Props = { category: CategoryId };

export function CategoryIcon({ category }: Props) {
  const { Icon, width } = ICONS[category];
  return <Icon width={width} height={48} />;
}
