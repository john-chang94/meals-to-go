const { locations } = require("./geocodes");

module.exports.geocodeRequest = (req, res) => {
    const { city } = req.query;
    const location = locations[city.toLowerCase()];

    res.json(location);
}