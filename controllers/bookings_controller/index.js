const Booking = require("../../models/Booking");

// Fetch all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json(bookings);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// Create new booking
const createBooking = async (req, res) => {
  const { date, booked_by, userRef, deskRef } = req.body;

  try {
    const newBooking = await Booking.create({
      date,
      booked_by,
      userRef,
      deskRef,
    });

    res.status(203).json(newBooking);
  } catch (e) {
    res.status(400).json(e.message);
  }
};

module.exports = { getBookings, createBooking };
