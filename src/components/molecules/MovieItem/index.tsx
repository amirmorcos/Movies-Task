import { useMovie } from "hooks/useMovie";
import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { GenresContainer } from "..";
import styles from "./styles";
import { MovieItemProps } from "./types";

const MovieItem = ({ item }: MovieItemProps) => {
  const { getMoviePoster } = useMovie();
  return (
    <FastImage
      source={{ uri: getMoviePoster(item.poster_path) }}
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
    </FastImage>
  );
};

export default MovieItem;
