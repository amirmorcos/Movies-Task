import { Poster } from "models/Poster";
import { StyleProp, ViewStyle } from "react-native";

export type MovieItemProps = {
  item: Poster;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
