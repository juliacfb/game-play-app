import { StyleSheet } from "react-native";

import { colors, fonts } from "@/theme";

export const styles = StyleSheet.create({
  stripes: {
    position: "absolute",
    top: 100,
    left: -6,
  },
  illustration: {
    position: "absolute",
    top: 114,
    left: "50%",
    marginLeft: -115.5,
    width: 250,
    height: 297,
    transform: [{ scaleX: -1 }],
  },
  fade: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 127,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 394,
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.title700,
    fontSize: 40,
    lineHeight: 40,
    color: colors.heading,
  },
  subtitle: {
    marginTop: 16,
    textAlign: "center",
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
