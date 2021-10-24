import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, Button } from "react-native";

import { SafeArea } from "../components/safeArea";
import RestaurantStack from "./restaurantStack";
import MapScreen from "../features/map/screens/map";
import { AuthContext } from "../contexts/authContext";

import { RestaurantsContextProvider } from "../contexts/restaurantsContext";
import { LocationContextProvider } from "../contexts/locationContext";
import { FavoritesContextProvider } from "../contexts/favoritesContext";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => {
  const { onSignOut } = useContext(AuthContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="Sign Out" onPress={() => onSignOut()} />
    </SafeArea>
  );
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
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
