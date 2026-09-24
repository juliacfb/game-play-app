import { Pressable, StyleSheet, Text, View } from 'react-native';

import ChevronRightIcon from '@/assets/svg/icon-chevron-right.svg';
import { GuildIcon } from '@/components/GuildIcon';
import { colors, fonts, metrics } from '@/theme';
import type { Guild } from '@/types';

type Props = { guild: Guild | null; onPress: () => void };

/** Campo "Sevidor" da tela Agendar (vazio ou com servidor selecionado). */
export function GuildSelect({ guild, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <GuildIcon guild={guild} />

      <View style={styles.content}>
        {guild ? (
          <>
            <Text style={styles.title}>{guild.name}</Text>
            <Text style={styles.subtitle}>{guild.game}</Text>
          </>
        ) : (
          <Text style={styles.title}>Selecione um servidor</Text>
        )}
      </View>

      <ChevronRightIcon width={6} height={9} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: metrics.guildIconHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  content: { flex: 1, marginLeft: 20 },
  title: { fontFamily: fonts.title700, fontSize: 18, color: colors.heading },
  subtitle: {
    marginTop: 4,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
});
