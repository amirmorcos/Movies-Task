import HomePoster from "molecules/HomePoster";
import { FlatList, Text, View } from "react-native";
import { HomePosterListProps } from "./types";
import styles from "./styles";

const HomePosterList = ({
  data,
  overrideContainerStyle,
}: HomePosterListProps) => {
  const finalData = data.slice(0, 4);
  return (
    <View style={overrideContainerStyle}>
      <Text style={styles.recommendedText}>Recommended</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal
        data={finalData}
        renderItem={({ item }) => <HomePoster path={item.poster_path} />}
        contentContainerStyle={styles.list}
        ItemSeparatorComponent={() => <View style={{ marginEnd: 12 }} />}
      />
    </View>
  );
};

export default HomePosterList;
