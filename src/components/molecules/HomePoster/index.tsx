import { Image, View } from "react-native";
import { HomePosterProps } from "./types";
import styles from "./styles";
import { useMovie } from "hooks/useMovie";

const HomePoster = ({ path, overrideContainerStyle }: HomePosterProps) => {
  const { getMoviePoster } = useMovie();
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <Image
        source={{
          uri: getMoviePoster(path),
        }}
        style={styles.image}
      />
    </View>
  );
};

export default HomePoster;
