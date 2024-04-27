import { StyleSheet } from "react-native";
import { s, vs, moderateScale } from "react-native-size-matters";

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
    backgroundColor: "#ff0000",
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
    backgroundColor: "white",
    paddingHorizontal: s(5),
    paddingVertical: vs(2),
    marginEnd: s(5),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  date: {
    fontSize: moderateScale(10),
  },
});
