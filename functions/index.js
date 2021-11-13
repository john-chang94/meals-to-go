require("dotenv").config();
const functions = require("firebase-functions");

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { payRequest } = require("./pay");

const { Client } = require("@googlemaps/google-maps-services-js");
const stripeClient = require("stripe")(process.env.STRIPE_API);
const googleClient = new Client({});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.geocode = functions.https.onRequest((req, res) => {
  geocodeRequest(req, res, googleClient);
});

exports.placesNearby = functions.https.onRequest((req, res) => {
  placesRequest(req, res, googleClient);
});

exports.pay = functions.https.onRequest((req, res) => {
  payRequest(req, res, stripeClient);
});