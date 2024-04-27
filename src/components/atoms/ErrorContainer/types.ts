import { StyleProp, ViewStyle } from "react-native";

export type ErrorContainerProps = {
  onRefetch: () => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};
