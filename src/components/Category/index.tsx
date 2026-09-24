import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { CategoryIcon } from '@/components/CategoryIcon';
import { colors, fonts, gradients, metrics } from '@/theme';
import type { Category as CategoryType } from '@/types';

type Props = {
  category: CategoryType;
  checked: boolean;
  /** Esmaece o card quando outro item está selecionado. */
  dimmed: boolean;
  hasCheckBox?: boolean;
  onPress: () => void;
};

export function Category({ category, checked, dimmed, hasCheckBox = false, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      style={[styles.wrapper, dimmed && styles.dimmed]}
    >
      <LinearGradient colors={gradients.shape} style={styles.container}>
        {hasCheckBox && (
          <View style={[styles.check, checked ? styles.checked : styles.unchecked]} />
        )}

        <CategoryIcon category={category.id} />
        <Text style={styles.title}>{category.title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 104,
    height: 120,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  dimmed: { opacity: 0.5 },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 19,
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  checked: { backgroundColor: colors.primary },
  unchecked: {
    backgroundColor: colors.backgroundBottom,
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    marginTop: 16,
    fontFamily: fonts.title700,
    fontSize: 15,
    color: colors.heading,
  },
});
