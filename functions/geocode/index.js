require("dotenv").config();
const { cities } = require("./geocodes");

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = req.query;
  if (mock === "true") {
    const location = cities[city.toLowerCase()];
    return res.json(location);
  }

  client
    .geocode({
      params: {
        address: city,
        key: process.env.GOOGLE_MAPS_API,
      },
      timeout: 1000,
    })
    .then((response) => {
      return res.json(response.data.results);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
