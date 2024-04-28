import { StyleSheet } from "react-native";
import { s, vs, moderateScale } from "react-native-size-matters";
import { Colors } from "themes/Colors";

export default StyleSheet.create({
  image: {
    width: s(160),
    height: s(250),
    marginEnd: s(8),
    marginBottom: vs(5),
    borderRadius: s(8),
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: Colors.RED,
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: vs(20),
    marginHorizontal: s(8),
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: vs(10),
  },
  dateContainer: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    marginEnd: s(5),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.WHITE,
  },
  date: {
    fontSize: moderateScale(10),
  },
});
