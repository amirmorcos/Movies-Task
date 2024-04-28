import { StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
import { Colors } from "themes/Colors";

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.BLACK,
    flex: 1,
  },
  listContainer: {
    padding: s(15),
  },
});
