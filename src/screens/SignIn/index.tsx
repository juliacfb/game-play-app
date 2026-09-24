import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import illustration from "@/assets/images/login-banner.png";
import Stripes from "@/assets/svg/login-union.svg";
import { Background } from "@/components/Background";
import { ButtonIcon } from "@/components/ButtonIcon";
import { gradients } from "@/theme";

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

      <Image
        source={illustration}
        style={styles.illustration}
        resizeMode="cover"
      />
      <LinearGradient
        colors={gradients.fade}
        locations={gradients.fadeLocations}
        style={[styles.fade, { top: 291 }]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{"\n"}e organize suas{"\n"}jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{"\n"}favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          style={styles.button}
          onPress={() => router.replace("/home")}
        />
      </View>
    </Background>
  );
}
