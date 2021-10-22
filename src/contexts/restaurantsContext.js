import React, { useState, useEffect, createContext, useContext, useMemo } from "react";
import { LocationContext } from "./locationContext";
import { restaurantsRequest, restaurantsTransform } from "../services/restaurants";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const getRestaurants = (location) => {
        setIsLoading(true);
        setRestaurants([]); // Reset restaurant list before search
        
        setTimeout(() => {
            restaurantsRequest(location)
            .then(restaurantsTransform)
            .then((restaurants) => {
                setIsLoading(false);
                setRestaurants(restaurants);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            })
        }, 1000);
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`
            getRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}