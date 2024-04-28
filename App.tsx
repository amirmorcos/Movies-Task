/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BottomNavigation from "navigation/BottomNavigation";
import React from "react";

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
