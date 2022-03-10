const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  booked_by: {
    type: String,
    required: true,
  },
  userRef: {
    type: String,
    required: true,
  },
  deskRef: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
