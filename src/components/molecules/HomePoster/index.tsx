import { Image, View } from "react-native";
import { HomePosterProps } from "./types";
import styles from "./styles";
import { getPosterImage } from "../../../utils/constants";

const HomePoster = ({ path, overrideContainerStyle }: HomePosterProps) => {
  return (
    <View style={[styles.container, overrideContainerStyle]}>
      <Image
        source={{
          uri: getPosterImage(path),
        }}
        style={styles.image}
      />
    </View>
  );
};

export default HomePoster;
