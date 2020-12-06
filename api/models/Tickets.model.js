const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  origin: {
    type: "string",
    required: true,
  },
  origin_name: {
    type: "string",
    required: true,
  },
  destination: {
    type: "string",
    required: true,
  },
  destination_name: {
    type: "string",
    required: true,
  },
  departure_date: {
    type: "string",
    required: true,
  },
  departure_time: {
    type: "string",
    required: true,
  },
  arrival_date: {
    type: "string",
    required: true,
  },
  arrival_time: {
    type: "string",
    required: true,
  },
  carrier: {
    type: "string",
    required: true,
  },
  stops: {
    type: "number",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
});

const TicketModel = mongoose.model("TicketModel", TicketSchema);

module.exports = TicketModel;
