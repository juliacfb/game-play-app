import { Pressable, PressableProps, StyleSheet } from 'react-native';

import PlusIcon from '@/assets/svg/icon-plus.svg';
import { colors, metrics } from '@/theme';

export function ButtonAdd(props: PressableProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Agendar partida"
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.8 }]}
      {...props}
    >
      <PlusIcon width={24} height={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: metrics.radius,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
