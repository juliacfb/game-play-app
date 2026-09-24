import { StyleSheet } from 'react-native';

import { metrics } from '@/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: metrics.screenPadding,
  },
  categories: { marginTop: 40 },
  listHeader: { marginTop: 40 },
  list: { marginTop: 24 },
  listContent: { paddingHorizontal: metrics.screenPadding },
});
