import React, { useState, useEffect, createContext, useMemo } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurants";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
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
        getRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
            {children}
        </RestaurantsContext.Provider>
    )
}