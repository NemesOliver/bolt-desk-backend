const express = require("express");
const {
  createBooking,
  getBookings,
} = require("../../controllers/bookings_controller");
const router = express.Router();

// GET
// FETCH ALL BOOKINGS
router.get("/", getBookings);

// POST
// CREATE BOOKING
router.post("/create", createBooking);

module.exports = router;
