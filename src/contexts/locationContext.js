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

  const getLocation = async () => {
    try {
      const location = await locationRequest(keyword.toLowerCase());
      const formattedLocation = await locationTransform(location);
  
      setLocation(formattedLocation);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!keyword.length) return; // Don't call api if no text when user taps "Search"

    getLocation();
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
