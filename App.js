import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import firebase from "firebase";

// Changed to use[font-name] because cannot init 'useFonts' twice below
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/theme";
import { AuthContextProvider } from "./src/contexts/authContext";
import { Navigation } from "./src/navigation";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyCNKe9e-EnpXTe4NgtKz_sbOD0MhLWX8iY",
    authDomain: "meals-to-go-a18a6.firebaseapp.com",
    projectId: "meals-to-go-a18a6",
    storageBucket: "meals-to-go-a18a6.appspot.com",
    messagingSenderId: "138947514161",
    appId: "1:138947514161:web:c228c7a6ab600444ac2a10",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("john@email.com", "password")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  }, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  // Moved other context providers to app navigator.
  // Auth context should be the only one to load on app launch.
  // Other contexts may be only needed when a particular navigator loads.
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
