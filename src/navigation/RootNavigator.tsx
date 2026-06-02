import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoveryScreen from "../features/providers/screens/DiscoveryScreen";
import ProviderDetailScreen from "../features/providers/screens/ProviderDetailScreen";

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
    </Stack.Navigator>
  );
}
