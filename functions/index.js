const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IC03eEQflnTaSnyKY4F50RjptEGe5f7wApEV1HqiV1zqmuxvihXAfsPJXr4Aao2ZrSY1YdZIFa1MvWjdlyJYZ4l00J178ilaO"
);

// API

// APP CONFIG
const app = express();

// MIDDELWARS
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Karan"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recievd", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
