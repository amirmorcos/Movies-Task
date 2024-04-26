import { Image, View } from "react-native";
import { HomePosterProps } from "./types";
import styles from "./styles";

const HomePoster = ({ path, overrideContainerStyle }: HomePosterProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${path}`,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default HomePoster;
