const mongoose = require("mongoose");

const DeskSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  is_booked: {
    type: Boolean,
    required: true,
  },
  booked_by: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Desk", DeskSchema);
