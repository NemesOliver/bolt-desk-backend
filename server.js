const express = require("express");
// const path = require("path")
require("dotenv").config();

// DB connection
const connectDB = require("./config/db");

connectDB();

// Instantiate express app
const app = express();

// Body parser
app.use(express.json());

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// ROUTES
// Dishes
const DesksRoute = require("./routes/Desks");
app.use("/v1/desks", DesksRoute);
