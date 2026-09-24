import { StyleSheet } from "react-native";

import { colors, fonts, metrics } from "@/theme";

export const styles = StyleSheet.create({
  banner: {
    height: 234,
  },
  bannerContent: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: metrics.screenPadding,
    paddingBottom: 24,
  },
  title: {
    fontFamily: fonts.title700,
    fontSize: 28,
    color: colors.heading,
  },
  subtitle: {
    marginTop: 12,
    maxWidth: 311,
    fontFamily: fonts.text400,
    fontSize: 13,
    lineHeight: 21,
    color: colors.heading,
  },
  listHeader: {
    marginTop: 24,
  },
  members: {
    marginTop: 24,
  },
  membersContent: {
    paddingHorizontal: metrics.screenPadding,
  },
  footer: {
    paddingHorizontal: metrics.screenPadding,
    paddingTop: 16,
  },
});
