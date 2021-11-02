import React, { useState, useEffect, createContext, useContext } from "react";
import { LocationContext } from "./locationContext";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "../services/restaurants";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const getRestaurants = async (location) => {
    setIsLoading(true);
    setRestaurants([]); // Reset restaurant list before search

    try {
      const restaurants = await restaurantsRequest(location);
      const formattedRestaurants = await restaurantsTransform(restaurants);

      setIsLoading(false);
      setRestaurants(formattedRestaurants);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      getRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
