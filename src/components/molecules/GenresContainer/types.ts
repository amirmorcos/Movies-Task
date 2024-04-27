import { StyleProp, ViewStyle } from "react-native";

export type GenresContainerProps = {
  genres: string[];
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
