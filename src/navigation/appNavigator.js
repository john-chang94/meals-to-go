import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantStack from "./restaurantStack";
import SettingsStack from "./settingsStack";
import MapScreen from "../features/map/screens/map";

import { RestaurantsContextProvider } from "../contexts/restaurantsContext";
import { LocationContextProvider } from "../contexts/locationContext";
import { FavoritesContextProvider } from "../contexts/favoritesContext";
import Settings from "../features/settings/settings";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  // route is passed from navigator
  const iconName = TAB_ICON[route.name];
  return {
    headerShown: false,
    activeTintColor: "tomato",
    inactiveTintColor: "gray",
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  // Moved NavigationContainer to index.js to wrap all Navigators (& Stacks)
  // instead of having to import it for each file
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantStack} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
