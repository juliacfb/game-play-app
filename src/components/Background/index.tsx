import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { gradients } from '@/theme';

type Props = { children: ReactNode };

/** Fundo padrão de todas as telas: #0E1647 → #0A1033 (vertical). */
export function Background({ children }: Props) {
  return (
    <LinearGradient colors={gradients.background} style={styles.container}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
