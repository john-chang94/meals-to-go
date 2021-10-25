import React, { useState, useEffect, createContext, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContext } from "./authContext";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const { user } = useContext(AuthContext);

    const saveFavorites = async (uid) => {
        try {
            await AsyncStorage.setItem(`@favorites-${uid}`, JSON.stringify(favorites));
        } catch (err) {
            console.log(err);
        }
    }

    const getFavorites = async (uid) => {
        try {
            const favorites = await AsyncStorage.getItem(`@favorites-${uid}`);
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
        if (user && user.uid) getFavorites(user.uid);
    }, [user])
    
    useEffect(() => {
        if (user && user.uid) saveFavorites(user.uid);
    }, [favorites, user])


    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}