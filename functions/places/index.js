require("dotenv").config();
const { mocks, addMockImage } = require("./mock");

const addGoogleImage = (restaurant) => {
  const photoRef = restaurant.photos[0].photo_reference;
  if (!photoRef) {
    restaurant.photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg"];
    return restaurant;
  }

  restaurant.photos = [`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=${process.env.GOOGLE_MAPS_API}`]
  return restaurant;
}

module.exports.placesRequest = (req, res, client) => {
  const { location, mock } = req.query;
  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }

    return res.json(data.results);
  }

  client.placesNearby({
    params: {
      location,
      radius: 1500, // Set in meters
      type: "restaurant",
      key: process.env.GOOGLE_MAPS_API
    },
    timeout: 1000
  })
  .then((response) => {
    response.data.results = response.data.results.map(addGoogleImage);
    return res.json(response.data.results);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
};
