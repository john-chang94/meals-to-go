import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "./authContext";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else {
      setCart([...cart, item]);
    }
  };

  // No remove method because this lesson is focused on stripe integration
  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }

    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);

    setSum(newSum);
  }, [cart]);

  return (
    <CartContext.Provider value={{ addToCart, clearCart, restaurant, cart, sum }}>
      {children}
    </CartContext.Provider>
  );
};
