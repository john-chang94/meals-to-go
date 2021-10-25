import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../features/account/screens/account";
import SignInScreen from "../features/account/screens/signIn";
import RegisterScreen from "../features/account/screens/register";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
