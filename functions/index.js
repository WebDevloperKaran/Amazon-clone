const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
// const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51IC03eEQflnTaSnypFBiY7jJRVH0Eq8TIyTNuHtRc1u0u0U8kjlWFmqE9fdJou2vxP7R0lVUcMp38fmWNtzISZNV00PtJYK5HT"
);

// API

// - APP CONFIG
const app = express();

// - MIDDEL LAYER
app.use(cors({ origin: true }));
app.use(express.json);

// - APT ROUTES
// app.get('/', (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recived", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })
});

// - LISTEN COMMAND
exports.api = functions.https.onRequest(app);
// http://localhost:5001/challenge-17a77/us-central1/api
