import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoveryScreen from "../features/providers/screens/DiscoveryScreen";
import ProviderDetailScreen from "../features/providers/screens/ProviderDetailScreen";
import FilterModal from "../features/providers/screens/FilterScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProviderDetail"
        component={ProviderDetailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="FilterModal"
        component={FilterModal}
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
