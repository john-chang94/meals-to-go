import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const saveFavorites = async () => {
        try {
            await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
        } catch (err) {
            console.log(err);
        }
    }

    const getFavorites = async () => {
        try {
            const favorites = await AsyncStorage.getItem("favorites");
            if (favorites !== null) {
                setFavorites(JSON.parse(favorites));
            }
        } catch (err) {
            console.log(err);
        }
    }

    const addFavorite = (restaurant) => {
        setFavorites([...favorites, restaurant]);
    }

    const removeFavorite = (restaurant) => {
        const newFavorites = favorites.filter((fav) => fav.placeId !== restaurant.placeId);
        setFavorites(newFavorites);
    }

    useEffect(() => {
        saveFavorites();
    }, [favorites])

    useEffect(() => {
        getFavorites();
    }, [])

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}