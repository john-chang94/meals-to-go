import axios from "axios";
import camelize from "camelize";

export const restaurantsRequest = async (location = "37.7749295,-122.4194155") => {
  const res = await axios.get(`http://cf33-2603-8001-3140-784c-fc28-d118-35ee-9627.ngrok.io/meals-to-go-a18a6/us-central1/placesNearby?location=${location}`);
  return res.data;
}

// Adjust returned data to what we need in frontend
export const restaurantsTransform = ({ results = [] }) => {
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