import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import SettingsScreen from "../features/settings/settings";
import FavoritesScreen from "../features/settings/favorites";
import CameraScreen from "../features/settings/camera";

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Options" // Not named "Settings" because two navigators
        component={SettingsScreen}
      />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
}
