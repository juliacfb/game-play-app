import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ArrowBackIcon from '@/assets/svg/icon-arrow-back.svg';
import { colors, fonts, gradients } from '@/theme';

type Props = {
  title: string;
  action?: ReactNode;
};

/** Header "Top" (58924:1183): 104px no iPhone X = 44 de safe area + 60. */
export function Header({ title, action }: Props) {
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.shadow}>
      <LinearGradient
        colors={gradients.shape}
        style={[styles.container, { paddingTop: top + 16 }]}
      >
        <Pressable
          onPress={router.back}
          hitSlop={12}
          style={styles.side}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
        >
          <ArrowBackIcon width={24} height={24} />
        </Pressable>

        <Text style={styles.title}>{title}</Text>

        <View style={[styles.side, styles.sideRight]}>{action}</View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    zIndex: 2,
    shadowColor: colors.headerShadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 24,
    elevation: 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  side: { width: 24, height: 24 },
  sideRight: { alignItems: 'flex-end' },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.title700,
    fontSize: 20,
    color: colors.heading,
  },
});
