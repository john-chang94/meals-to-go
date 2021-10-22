import React, { useState, createContext } from "react";
import firebase from "firebase";

import { signIn } from "../services/auth";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSignIn = (email, password) => {
    setIsLoading(true);
    signIn(email, password)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, error, onSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
