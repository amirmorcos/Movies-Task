import { StyleSheet } from "react-native";
import { moderateScale, vs } from "react-native-size-matters";

export default StyleSheet.create({
  list: {
    marginTop: vs(15),
  },
  recommendedText: {
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(17),
  },
});
