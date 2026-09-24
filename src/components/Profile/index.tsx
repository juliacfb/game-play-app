import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/Avatar';
import { colors, fonts } from '@/theme';
import type { User } from '@/types';

type Props = { user: User; onPressAvatar: () => void };

export function Profile({ user, onPressAvatar }: Props) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPressAvatar} accessibilityLabel="Sair do GamePlay">
        <Avatar source={user.avatar} />
      </Pressable>

      <View style={styles.texts}>
        <Text style={styles.greeting}>
          Olá, <Text style={styles.username}>{user.firstName}</Text>
        </Text>
        <Text style={styles.message}>Hoje é dia de vitória</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  texts: { marginLeft: 20 },
  greeting: {
    fontFamily: fonts.title500,
    fontSize: 24,
    color: colors.heading,
  },
  username: { fontFamily: fonts.title700 },
  message: {
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
});
