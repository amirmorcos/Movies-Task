import { StyleSheet } from "react-native";
import { moderateScale, vs } from "react-native-size-matters";
import { Colors } from "themes/Colors";

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
    color: Colors.YELLOW,
    fontSize: moderateScale(13),
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    marginBottom: vs(5),
  },
});
