const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const TicketsRouter = require("./routes/TicketsRouter.js");

const app = express();
const uri = process.env.ATLAS_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error"));
db.once("open", () => {
  console.log("Connected successfully");
});

app.use("/", TicketsRouter);

module.exports = app;
