import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Button } from '@/components/Button';
import { colors, fonts, gradients, metrics } from '@/theme';

type Props = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

/** Modal "Deseja sair do GamePlay?" (58924:1053). */
export function LogoutModal({ visible, onCancel, onConfirm }: Props) {
  const { bottom } = useSafeAreaInsets();

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onCancel} />

        <LinearGradient
          colors={gradients.background}
          style={[styles.sheet, { paddingBottom: Math.max(bottom, 24) }]}
        >
          <Text style={styles.title}>
            Deseja sair do Game<Text style={styles.highlight}>Play</Text>?
          </Text>

          <View style={styles.actions}>
            <Button title="Não" variant="outline" style={styles.action} onPress={onCancel} />
            <Button title="Sim" style={styles.action} onPress={onConfirm} />
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: colors.overlay },
  sheet: { paddingTop: 24, paddingHorizontal: metrics.screenPadding },
  title: {
    textAlign: 'center',
    fontFamily: fonts.title700,
    fontSize: 20,
    color: colors.heading,
  },
  highlight: { color: colors.primary },
  actions: { flexDirection: 'row', gap: 8, marginTop: 24 },
  action: { flex: 1 },
});
