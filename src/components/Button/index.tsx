import { Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors, fonts, metrics } from '@/theme';

type Props = PressableProps & {
  title: string;
  variant?: 'primary' | 'outline';
  style?: StyleProp<ViewStyle>;
};

export function Button({ title, variant = 'primary', style, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        variant === 'outline' ? styles.outline : styles.primary,
        pressed && styles.pressed,
        style,
      ]}
      {...rest}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: metrics.buttonHeight,
    borderRadius: metrics.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.primary },
  outline: { borderWidth: 1, borderColor: colors.secondary },
  pressed: { opacity: 0.8 },
  title: {
    fontFamily: fonts.text500,
    fontSize: 15,
    lineHeight: 25,
    color: colors.heading,
  },
});
