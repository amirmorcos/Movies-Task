import { StyleSheet } from "react-native";
import { moderateScale, s } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: moderateScale(15),
    marginEnd: s(5),
  },
  retryContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
