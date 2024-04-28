import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { moderateScale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { Colors } from "themes/Colors";

export const useBottomBarOptions = () => {
  const getScreenConfig: (
    title: string,
    icon: string
  ) => BottomTabNavigationOptions = (title, icon) => {
    return {
      title,
      tabBarIcon: ({ size, color }) => (
        <FontAwesomeIcon name={icon} size={size} color={color} />
      ),
    };
  };
  const bottombarStyle: BottomTabNavigationOptions = {
    tabBarActiveTintColor: Colors.WHITE,
    tabBarStyle: {
      backgroundColor: Colors.BLACK,
    },
  };

  const homeScreenStyle: BottomTabNavigationOptions = {
    headerShown: false,
    ...getScreenConfig("Home", "star"),
    tabBarLabelStyle: {
      fontSize: moderateScale(12),
    },
  };

  const moviesScreenStyle: BottomTabNavigationOptions = {
    headerTitle: "MOVIES",
    headerTitleStyle: {
      color: Colors.WHITE,
      fontWeight: "bold",
      fontSize: moderateScale(20),
    },
    headerStyle: {
      backgroundColor: Colors.BLACK,
      shadowOpacity: 0,
      elevation: 0,
    },
    ...getScreenConfig("Movies", "film"),
  };

  return {
    bottombarStyle,
    moviesScreenStyle,
    homeScreenStyle,
  };
};
