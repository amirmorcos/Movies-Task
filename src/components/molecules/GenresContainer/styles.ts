import { StyleSheet } from "react-native";
import { moderateScale, s, vs } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    width: s(100),
    justifyContent: "center",
    alignItems: "center",
  },
  genre: {
    fontSize: moderateScale(10),
  },
});
