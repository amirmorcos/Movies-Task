import { Movie } from "models/Movie";
import { StyleProp, ViewStyle } from "react-native";

export type MovieItemProps = {
  item: Movie;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
