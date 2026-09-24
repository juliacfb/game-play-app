import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { colors, fonts, metrics } from '@/theme';

export function TextArea(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      multiline
      textAlignVertical="top"
      selectionColor={colors.primary}
      placeholderTextColor={colors.body}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 95,
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.shape,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    color: colors.heading,
  },
});
