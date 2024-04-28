import { StyleSheet } from "react-native";
import { s, vs } from "react-native-size-matters";

export default StyleSheet.create({
  container: {
    backgroundColor: "black",
    padding: s(15),
  },
  content: {
    flexGrow: 1,
    paddingBottom: vs(30),
  },
  loadMoreContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: vs(5),
  },
});
