import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '@/theme';

export const styles = StyleSheet.create({
  flex: { flex: 1 },
  label: { fontFamily: fonts.title700, fontSize: 18, color: colors.heading },
  categoryLabel: { marginTop: 32, marginLeft: metrics.screenPadding },
  categories: { marginTop: 12 },
  form: { paddingHorizontal: metrics.screenPadding, marginTop: 32 },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  inputs: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  divider: {
    marginHorizontal: 4,
    fontFamily: fonts.text500,
    fontSize: 15,
    color: colors.body,
  },
  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: { marginTop: 28 },
  caption: { fontFamily: fonts.text400, fontSize: 13, lineHeight: 17, color: colors.body },
  textArea: { marginTop: 12 },
  submit: { marginTop: 56 },
  guildList: { paddingHorizontal: metrics.screenPadding, paddingTop: 24 },
});
