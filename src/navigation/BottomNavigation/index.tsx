import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SeeAllScreen } from "screens/index";

const BottomNavigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="See All"
        component={SeeAllScreen}
        options={{
          headerTitle: "MOVIES",
          headerTitleStyle: {
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: "black",
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
