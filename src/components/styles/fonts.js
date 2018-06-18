// @flow
import { Platform } from "react-native";

const webFont = {
  regular: "Roboto",
  bold: "Roboto",
  medium: "Roboto",
  light: "Roboto",
};

const iosFont = {
  regular: "ProximaNova-Regular",
  bold: "ProximaNova-Bold",
  medium: "ProximaNova-Semibold",
  light: "ProximaNova-Light",
};

export const fontWeight = {
  light: "300",
  normal: "400",
  medium: "500",
};

export default {
  ...Platform.select({
    android: {
      fontFamily: iosFont,
    },
    ios: {
      fontFamily: iosFont,
    },
    web: {
      fontFamily: webFont,
    }
  }),
  fontSize: {
    titleFontSize: 20,
    subTitleFontSize: 14,
    bigTitle: 20,
    text: 14,
    titleText: 16,
    buttonText: 14,
    caption: 12,
  },
};
