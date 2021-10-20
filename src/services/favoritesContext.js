import React, { useState, createContext } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const removeFavorite = (restaurant) => {
        const newFavorites = favorites.filter((fav) => fav.placeId !== restaurant.placeId);
        setFavorites(newFavorites);
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}