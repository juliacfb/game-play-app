import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, gradients, metrics } from '@/theme';
import type { Guild } from '@/types';

type Props = { guild?: Guild | null; bordered?: boolean };

/** Capa 64x68 do servidor. Vazia (degradê) quando nenhum foi escolhido. */
export function GuildIcon({ guild, bordered = false }: Props) {
  return (
    <View style={[styles.container, bordered && styles.bordered]}>
      {guild ? (
        <Image source={guild.icon} style={styles.image} resizeMode="cover" />
      ) : (
        <LinearGradient colors={gradients.shape} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: metrics.guildIconWidth,
    height: metrics.guildIconHeight,
    borderRadius: metrics.radius,
    overflow: 'hidden',
  },
  bordered: { borderWidth: 1, borderColor: colors.border },
  image: { width: '100%', height: '100%' },
});
