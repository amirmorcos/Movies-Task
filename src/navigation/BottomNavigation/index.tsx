import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "screens/HomeScreen";

const BottomNavigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
