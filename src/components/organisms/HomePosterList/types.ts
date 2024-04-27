import { Movie } from "models/Movie";
import { StyleProp, ViewStyle } from "react-native";

export type HomePosterListProps = {
  data: Movie[];
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
