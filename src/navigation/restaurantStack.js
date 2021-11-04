import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import Restaurants from "../features/restaurants/screens/restaurants";
import RestaurantDetails from "../features/restaurants/screens/restaurantDetails";

const Stack = createStackNavigator();

export default function RestaurantStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <Stack.Screen name="RestaurantsList" component={Restaurants} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetails} />
    </Stack.Navigator>
  );
}
