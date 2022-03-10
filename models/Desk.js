const mongoose = require("mongoose");

const DeskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    minlength: [4, "Name has to be at least 4 characters"],
    unique: true,
  },
 
});

module.exports = mongoose.model("Desk", DeskSchema);
