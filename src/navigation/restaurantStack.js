import React from "react";
import { Text } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import RestaurantScreen from "../features/restaurants/screens/restaurants";

const Stack = createStackNavigator();

export default function RestaurantStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalPresentationIOS }}>
            <Stack.Screen
                name="Restaurants"
                component={RestaurantScreen}
            />
            <Stack.Screen
                name="RestaurantDetail"
                component={() => <Text>Restaurant Detail</Text>}
            />
        </Stack.Navigator>
    )
}