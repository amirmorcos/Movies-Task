import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { moderateScale } from "react-native-size-matters";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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
    tabBarActiveTintColor: "white",
    tabBarStyle: {
      backgroundColor: "black",
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
      color: "white",
      fontWeight: "bold",
      fontSize: moderateScale(20),
    },
    headerStyle: {
      backgroundColor: "black",
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
