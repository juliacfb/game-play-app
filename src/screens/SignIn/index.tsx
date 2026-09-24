import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

import illustration from '@/assets/images/login-banner.png';
import Stripes from '@/assets/svg/login-union.svg';
import { Background } from '@/components/Background';
import { ButtonIcon } from '@/components/ButtonIcon';
import { colors, fonts, gradients } from '@/theme';

/** Tela "Login" (58924:898). Posições em px do frame 375x812. */
export function SignIn() {
  return (
    <Background>
      <Stripes width={387} height={359} style={styles.stripes} />
      <LinearGradient
        colors={gradients.fade}
        locations={gradients.fadeLocations}
        style={[styles.fade, { top: 380 }]}
      />

      <Image source={illustration} style={styles.illustration} resizeMode="cover" />
      <LinearGradient
        colors={gradients.fade}
        locations={gradients.fadeLocations}
        style={[styles.fade, { top: 291 }]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          style={styles.button}
          onPress={() => router.replace('/home')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  stripes: {
    position: 'absolute',
    top: 100,
    left: -6,
  },
  illustration: {
    position: 'absolute',
    top: 114,
    left: '50%',
    marginLeft: -115.5, // x=72 no Figma, levemente deslocada à direita
    width: 250,
    height: 297,
    transform: [{ scaleX: -1 }], // o Figma espelha a imagem original
  },
  fade: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 127,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 394,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts.title700,
    fontSize: 40,
    lineHeight: 40,
    color: colors.heading,
  },
  subtitle: {
    marginTop: 16,
    textAlign: 'center',
    fontFamily: fonts.text400,
    fontSize: 15,
    lineHeight: 25,
    color: colors.heading,
  },
  button: {
    marginTop: 48,
    width: 274,
  },
});
