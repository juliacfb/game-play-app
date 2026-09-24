import { StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { colors, fonts } from '@/theme';
import type { Member as MemberType } from '@/types';

type Props = { data: MemberType };

export function Member({ data }: Props) {
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar source={data.avatar} />

      <View style={styles.content}>
        <Text style={styles.name}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[styles.bullet, { backgroundColor: isOnline ? colors.on : colors.primary }]}
          />
          <Text style={styles.statusText}>{isOnline ? 'Disponível' : 'Ocupado'}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  content: { marginLeft: 16 },
  name: { fontFamily: fonts.title700, fontSize: 18, color: colors.heading },
  status: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  bullet: { width: 8, height: 8, borderRadius: 4 },
  statusText: {
    marginLeft: 8,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
});
