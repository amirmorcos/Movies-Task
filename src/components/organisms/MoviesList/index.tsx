import { useMovie } from "hooks/useMovie";
import { MovieItem } from "molecules/index";
import React from "react";
import { FlatList } from "react-native";
import styles from "./styles";

const MoviesList = () => {
  const { moviesList } = useMovie();
  return (
    <FlatList
      data={moviesList?.results!}
      style={styles.container}
      contentContainerStyle={styles.content}
      numColumns={2}
      renderItem={({ item }) => <MovieItem key={item.id} item={item} />}
    />
  );
};

export default MoviesList;
