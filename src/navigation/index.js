import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../contexts/authContext";
import { AppNavigator } from "./appNavigator";
import { AuthStack } from "./authStack";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <NavigationContainer>
          {isAuthenticated ? <AppNavigator /> : <AuthStack />}
      </NavigationContainer>
  );
};
