import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  listContainer: {
    padding: s(15),
  },
  imageBg: {
    flex: 1,
    width: undefined,
    height: undefined,
    opacity: 0.8,
    justifyContent: "flex-end",
  },
});
