import { Pressable, StyleSheet, Text, View } from 'react-native';

import ChevronRightIcon from '@/assets/svg/icon-chevron-right.svg';
import { GuildIcon } from '@/components/GuildIcon';
import { colors, fonts } from '@/theme';
import type { Guild as GuildType } from '@/types';

type Props = { guild: GuildType; onPress: () => void };

/** Item da lista "Selecione um servidor". */
export function Guild({ guild, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
    >
      <GuildIcon guild={guild} />

      <View style={styles.content}>
        <Text style={styles.title}>{guild.name}</Text>
        <Text style={styles.type}>{guild.owner ? 'Administrador' : 'Convidado'}</Text>
      </View>

      <ChevronRightIcon width={6} height={9} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  content: { flex: 1, marginLeft: 20 },
  title: { fontFamily: fonts.title700, fontSize: 18, color: colors.heading },
  type: {
    marginTop: 4,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
});
