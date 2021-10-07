import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";

// Changed to use[font-name] because cannot init 'useFonts' twice below
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/theme";
import RestaurantScreen from "./src/features/restaurants/screens/restaurants";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  let [latoLoaded] = useLato({
    Lato_400Regular
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
