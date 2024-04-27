import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useBottomBarOptions } from "hooks/useBottomBarOptions";
import { HomeScreen, SeeAllScreen } from "screens/index";
import { RootStackParamList } from "./types";

const BottomTab = createBottomTabNavigator<RootStackParamList>();

const BottomNavigation = () => {
  const { bottombarStyle, homeScreenStyle, moviesScreenStyle } =
    useBottomBarOptions();

  return (
    <BottomTab.Navigator screenOptions={bottombarStyle}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={homeScreenStyle}
      />
      <BottomTab.Screen
        name="SeeAll"
        component={SeeAllScreen}
        options={moviesScreenStyle}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
