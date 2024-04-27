import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";
import { ErrorContainerProps } from "./types";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import styles from "./styles";

const ErrorContainer = ({
  onRefetch,
  overrideContainerStyle,
}: ErrorContainerProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <TouchableOpacity
        onPress={() => onRefetch()}
        style={styles.retryContainer}
      >
        <Text style={styles.text}>Try again</Text>
        <FontAwesome6 name="arrow-rotate-right" color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ErrorContainer;
