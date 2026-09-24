import { Pressable, StyleSheet, Text, View } from 'react-native';

import CalendarIcon from '@/assets/svg/icon-calendar.svg';
import GuestIcon from '@/assets/svg/icon-host-fun.svg';
import HostIcon from '@/assets/svg/icon-host.svg';
import { GuildIcon } from '@/components/GuildIcon';
import { getCategory } from '@/mocks/categories';
import { colors, fonts } from '@/theme';
import type { Appointment as AppointmentType } from '@/types';
import { formatAppointmentDate } from '@/utils/date';

type Props = { data: AppointmentType; onPress: () => void };

/** Item "Lista" (58924:937) da Home. */
export function Appointment({ data, onPress }: Props) {
  const category = getCategory(data.category);
  const playerColor = data.hosted ? colors.primary : colors.on;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && { opacity: 0.7 }]}
    >
      <GuildIcon guild={data.guild} bordered />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.title} numberOfLines={1}>
            {data.guild.name}
          </Text>
          <Text style={styles.category}>{category.shortTitle}</Text>
        </View>

        <View style={[styles.row, styles.footer]}>
          <View style={styles.info}>
            <CalendarIcon width={16} height={16} />
            <Text style={styles.date}>{formatAppointmentDate(data.date)}</Text>
          </View>

          <View style={styles.info}>
            {data.hosted ? <HostIcon width={16} height={16} /> : <GuestIcon width={16} height={16} />}
            <Text style={[styles.player, { color: playerColor }]}>
              {data.hosted ? 'Anfitrião' : 'Visitante'}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignSelf: 'stretch' },
  content: { flex: 1, marginLeft: 20, paddingTop: 5 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footer: { marginTop: 12 },
  title: {
    flexShrink: 1,
    marginRight: 8,
    fontFamily: fonts.title700,
    fontSize: 18,
    color: colors.heading,
  },
  category: {
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
  info: { flexDirection: 'row', alignItems: 'center' },
  date: {
    marginLeft: 6,
    fontFamily: fonts.text500,
    fontSize: 13,
    lineHeight: 17,
    color: colors.heading,
  },
  player: {
    marginLeft: 5,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
  },
});
