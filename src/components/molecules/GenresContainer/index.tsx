import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { GenresContainerProps } from "./types";

const GenresContainer = ({
  genres,
  overrideContainerStyle,
}: GenresContainerProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.genre}>
        {genres}
      </Text>
    </View>
  );
};

export default GenresContainer;
