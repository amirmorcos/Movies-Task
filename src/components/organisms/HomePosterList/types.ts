import { Poster } from "models/Poster";
import { StyleProp, ViewStyle } from "react-native";

export type HomePosterListProps = {
  data: Poster[];
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
