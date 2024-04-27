import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { getPosterImage } from "../../../utils/constants";
import { MovieItemProps } from "./types";
import styles from "./styles";
import { GenresContainer } from "..";

const MovieItem = ({ item }: MovieItemProps) => {
  return (
    <ImageBackground
      source={{ uri: getPosterImage(item.poster_path) }}
      style={styles.image}
      resizeMode="contain"
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>
            {new Date(item.release_date).getFullYear()}
          </Text>
        </View>
        <GenresContainer genres={["Action,Romance,Romance"]} />
      </View>
    </ImageBackground>
  );
};

export default MovieItem;
