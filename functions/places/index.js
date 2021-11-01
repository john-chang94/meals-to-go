require("dotenv").config();
const { mocks, addMockImage } = require("./mock");

module.exports.placesRequest = (req, res, client) => {
  const { location, mock } = req.query;

  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
    }
  
    return res.json(data);
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
    response.data.results = response.data.results.map(addMockImage);
    return res.json(response.data.results);
  })
  .catch((err) => {
    console.log(err.response.data);
  });
};
