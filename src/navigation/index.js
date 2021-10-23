import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../contexts/authContext";
import { AppNavigator } from "./appNavigator";
import { AccountStack } from "./accountStack";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
      <NavigationContainer>
          {isAuthenticated ? <AppNavigator /> : <AccountStack />}
      </NavigationContainer>
  );
};
