import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import { colors, gradients } from "@/theme";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
};

/** Bottom sheet de 740px que começa 72px abaixo do topo (58924:1133). */
export function ModalView({ visible, onClose, children }: Props) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.backdrop} onPress={onClose} />

        <LinearGradient colors={gradients.background} style={styles.sheet}>
          <View style={styles.bar} />
          {children}
        </LinearGradient>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.overlay,
  },
  backdrop: { height: 72 },
  sheet: { flex: 1 },
  bar: {
    width: 39,
    height: 2,
    borderRadius: 2,
    backgroundColor: colors.secondary,
    alignSelf: "center",
    marginTop: 13,
  },
});
