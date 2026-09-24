import { Pressable, PressableProps, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import DiscordLogo from '@/assets/svg/discord-logo.svg';
import { colors, fonts, metrics } from '@/theme';

type Props = PressableProps & {
  title: string;
  style?: StyleProp<ViewStyle>;
};

/** Botão vermelho com o ícone do Discord separado por uma linha vertical. */
export function ButtonIcon({ title, style, ...rest }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed, style]}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <DiscordLogo width={24} height={18} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: metrics.buttonHeight,
    borderRadius: metrics.radius,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressed: { opacity: 0.8 },
  iconWrapper: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: colors.buttonDivider,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts.text500,
    fontSize: 15,
    lineHeight: 25,
    color: colors.heading,
  },
});
