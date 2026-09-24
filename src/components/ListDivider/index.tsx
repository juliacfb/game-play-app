import { StyleSheet, View } from 'react-native';

import { colors, metrics } from '@/theme';

type Props = {
  /** Deslocamento a partir do padding da lista (84 nas listas, 64 em jogadores). */
  inset?: number;
  spacing?: number;
};

/** Linha que vai do início do texto até a borda direita da tela. */
export function ListDivider({ inset = 84, spacing = 12 }: Props) {
  return (
    <View
      style={[
        styles.line,
        { marginLeft: inset, marginVertical: spacing },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    marginRight: -metrics.screenPadding,
    backgroundColor: colors.border,
  },
});
