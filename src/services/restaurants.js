import axios from "axios";
import camelize from "camelize";
import { host } from "../../env";

// Adjust returned data to what we need in frontend
export const restaurantsTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
    return { // Add properties to each restaurant and return
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isTempClosed: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  const res = await axios.get(`${host}/placesNearby?location=${location}`);
  return res.data;
}