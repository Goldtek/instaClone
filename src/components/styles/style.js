import { StyleSheet } from "react-native";
import colors, { darkBlack, lightBlack } from "./colors";

export default StyleSheet.create({
  divider: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "#e9e9e9",
  },
  header: {
    borderBottomWidth: 3,
    borderBottomColor: "#e9e9e9",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  icon: {
      width: 30,
      color: colors.badge,
  }
});