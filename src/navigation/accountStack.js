import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../features/account/screens/account";
import SignIn from "../features/account/screens/signIn";
import Register from "../features/account/screens/register";

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Account} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
