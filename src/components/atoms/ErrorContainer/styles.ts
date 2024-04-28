import { StyleSheet } from "react-native";
import { moderateScale, s } from "react-native-size-matters";
import { Colors } from "themes/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.WHITE,
    fontSize: moderateScale(15),
    marginEnd: s(5),
  },
  retryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
