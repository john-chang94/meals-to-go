import React from "react";
import CheckoutScreen from "../features/checkout/screens/checkout";
import CheckoutSuccessScreen from "../features/checkout/screens/checkoutSuccess";
import CheckoutErrorScreen from "../features/checkout/screens/checkoutError";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function CheckoutStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccessScreen} />
      <Stack.Screen name="CheckoutError" component={CheckoutErrorScreen} />
    </Stack.Navigator>
  );
}
