import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Sign In</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
