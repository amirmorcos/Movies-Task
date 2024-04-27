import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    width: s(135),
    height: vs(210),
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
