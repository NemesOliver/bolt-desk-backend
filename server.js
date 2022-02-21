const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// CORS options
const corsOptions = {
  origin: "http://localhost:3000", // Your FE domain/origin must be set to allow cookies to be set
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

// DB connection
const connectDB = require("./config/db");

connectDB();

// Instantiate express app
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));

// ROUTES
const version = "v1";

// Users
const UsersRoute = require("./routes/Users");
app.use(`/${version}/users`, UsersRoute);

// Desks
const DesksRoute = require("./routes/Desks");
app.use(`/${version}/desks`, DesksRoute);
