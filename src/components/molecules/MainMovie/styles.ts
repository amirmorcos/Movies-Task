import { StyleSheet } from "react-native";
import { moderateScale, vs } from "react-native-size-matters";

export default StyleSheet.create({
  imageBg: {
    flex: 1,
    width: undefined,
    height: undefined,
    opacity: 0.8,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  info: {
    color: "#FFC100",
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: vs(5),
  },
});
