import { StyleSheet, Text, View } from 'react-native';

import { colors, fonts, metrics } from '@/theme';

type Props = { title: string; subtitle: string };

export function ListHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.screenPadding,
  },
  title: { fontFamily: fonts.title700, fontSize: 18, color: colors.heading },
  subtitle: {
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 17,
    color: colors.body,
  },
});
