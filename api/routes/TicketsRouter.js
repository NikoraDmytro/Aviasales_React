const router = require("express").Router();
require("dotenv").config;

const TicketModel = require("../models/Tickets.model.js");

const Nester = (ticket) => {
  let NewTicket = {};

  for (let [key, value] of Object.entries(ticket)) {
    NewTicket = { ...NewTicket, [key]: value };
  }

  return NewTicket;
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
