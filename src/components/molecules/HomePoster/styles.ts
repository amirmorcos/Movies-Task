import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    width: s(140),
    height: vs(200),
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
