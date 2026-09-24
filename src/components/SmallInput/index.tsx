import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { colors, fonts, metrics } from '@/theme';

export function SmallInput(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="number-pad"
      maxLength={2}
      selectionColor={colors.primary}
      placeholderTextColor={colors.body}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 48,
    height: 48,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.shape,
    textAlign: 'center',
    fontFamily: fonts.text500,
    fontSize: 15,
    color: colors.heading,
  },
});
