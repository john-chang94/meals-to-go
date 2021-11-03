require("dotenv").config();
const { mocks, addMockImage } = require("./mock");

const addGoogleImage = (restaurant) => {
  const photoRef = restaurant.photos[0];
  if (!photoRef) {
    restaurant.photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg"];
    return restaurant;
  }

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
  console.log('RUNNING')

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
    console.log(response.data.results)
    response.data.results = response.data.results.map(addGoogleImage);
    return res.json(response.data.results);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
};
