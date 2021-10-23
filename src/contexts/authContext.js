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
        setIsLoading(false);
        setUser(user);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString()); // toString() required to render error message
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    
    setIsLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        setIsLoading(false);
        setUser(user);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.toString());
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, isLoading, error, onSignIn, onRegister }}
    >
      {children}
    </AuthContext.Provider>
  );
};
