import { router } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { styles } from "./styles";

import Logo from "@/assets/svg/logo.svg";
import { Background } from "@/components/Background";

const SPLASH_DURATION = 1800;

export function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace("/sign-in"), SPLASH_DURATION);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Background>
      <View style={styles.container}>
        <Logo width={180} height={132} />
      </View>
    </Background>
  );
}
