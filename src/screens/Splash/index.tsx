import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { router } from 'expo-router';

import Logo from '@/assets/svg/logo.svg';
import { Background } from '@/components/Background';

const SPLASH_DURATION = 1800;

export function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => router.replace('/sign-in'), SPLASH_DURATION);
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

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
