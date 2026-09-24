import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

import { colors, metrics } from "@/theme";

type Props = { source: ImageSourcePropType; size?: number };

export function Avatar({ source, size = metrics.avatarSize }: Props) {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: metrics.radius,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.shape,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
