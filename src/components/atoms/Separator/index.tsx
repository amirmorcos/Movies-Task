import React from "react";
import { View } from "react-native";
import { SeparatorProps } from "./types";
import styles from "./styles";

const Separator = ({ overrideContainerStyle }: SeparatorProps) => {
  return <View style={[styles.container, overrideContainerStyle]} />;
};

export default Separator;
