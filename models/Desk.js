const mongoose = require("mongoose");

const DeskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    minlength: [4, "Name has to be at least 4 characters"],
    unique: true,
  },
  is_booked: {
    type: Boolean,
    required: true,
    default: false,
  },
  booked_by: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Desk", DeskSchema);
