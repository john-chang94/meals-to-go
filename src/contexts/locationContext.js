import React, { useState, useEffect, createContext } from "react";
import { locationRequest, locationTransform } from "../services/locations";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  }

  useEffect(() => {
    if (!keyword.length) return; // Don't call api if no text when user taps "Search"

    locationRequest(keyword.toLowerCase()) // Results of cities in api are in lowercase
      .then(locationTransform)
      .then(result => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
