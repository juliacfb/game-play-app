import { ScrollView, StyleSheet } from 'react-native';

import { Category } from '@/components/Category';
import { categories } from '@/mocks/categories';
import { metrics } from '@/theme';
import type { CategoryId } from '@/types';

type Props = {
  selected: CategoryId | null;
  onSelect: (id: CategoryId) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({ selected, onSelect, hasCheckBox = false }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          checked={category.id === selected}
          dimmed={selected !== null && category.id !== selected}
          hasCheckBox={hasCheckBox}
          onPress={() => onSelect(category.id)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: metrics.screenPadding,
    gap: 8,
  },
});
