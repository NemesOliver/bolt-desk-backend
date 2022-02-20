const express = require("express");
const cors = require("cors");
// const path = require("path")
require("dotenv").config();

// DB connection
const connectDB = require("./config/db");

connectDB();

// Instantiate express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// ROUTES
// Desks
const DesksRoute = require("./routes/Desks");
app.use("/v1/desks", DesksRoute);
