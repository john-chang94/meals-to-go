require("dotenv").config();
const { locations } = require("./geocodes");

module.exports.geocodeRequest = (req, res, client) => {
  const { city, mock } = req.query;

  if (mock === "true") {
    const location = locations[city.toLowerCase()];
    return res.json(location);
  }

  client
    .elevation({
      params: {
        locations: city,
        key: process.env.GOOGLE_MAPS_API,
      },
      timeout: 1000,
    })
    .then((response) => {
      return res.json(response.data);
    })
    .catch((err) => {
      console.log(err.response.data.error_message);
    });
};
