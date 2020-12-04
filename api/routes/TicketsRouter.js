const router = require("express").Router();
require("dotenv").config;

const TicketModel = require("../models/Tickets.model.js");

const Nester = (ticket) => {
  return {
    origin: ticket.origin,
    origin_name: ticket.origin_name,
    destination: ticket.destination,
    destination_name: ticket.destination_name,
    departure_date: ticket.departure_date,
    departure_time: ticket.departure_time,
    arrival_date: ticket.arrival_date,
    arrival_time: ticket.arrival_time,
    carrier: ticket.carrier,
    stops: ticket.stops,
    price: ticket.price,
  };
};

router.get("/", async (req, res) => {
  try {
    const tickets = await TicketModel.find();
    tickets.sort((A, B) => (A.price <= B.price ? -1 : 1));
    res.json(tickets);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/add", async (req, res) => {
  const ticket = req.body.ticket;

  try {
    const NewTicket = new TicketModel(Nester(ticket));
    await NewTicket.save();
    res.json("Link was added!");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
