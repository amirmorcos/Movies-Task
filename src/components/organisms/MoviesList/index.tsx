import { dummyData } from "../../../../dummy-data";
import { MovieItem } from "molecules/index";
import React from "react";
import { FlatList } from "react-native";
import styles from "./styles";

const MoviesList = () => {
  return (
    <FlatList
      data={dummyData.results}
      style={styles.container}
      contentContainerStyle={styles.content}
      numColumns={2}
      renderItem={({ item }) => <MovieItem item={item} />}
    />
  );
};

export default MoviesList;
