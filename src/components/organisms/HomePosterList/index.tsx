import React from "react";
import { Separator } from "atoms/index";
import HomePoster from "molecules/HomePoster";
import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { HomePosterListProps } from "./types";

const HomePosterList = ({
  data,
  overrideContainerStyle,
}: HomePosterListProps) => {
  const posters = data.slice(1);
  return (
    <View style={overrideContainerStyle}>
      <Text style={styles.recommendedText}>Recommended</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={posters}
        renderItem={({ item }) => (
          <HomePoster key={item.id} path={item.poster_path} />
        )}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default HomePosterList;
