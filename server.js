const express = require("express");
const colors = require("colors");
// allows us to have a .env file with files in it
const dotenv = require("dotenv").config();
// import error handler
const { errorHandler } = require("./middleware/errorMiddleware");
// import the database connection
const connectDB = require("./config/db");
// access to the port number(from .env file; if not available, use 5000 )
const port = process.env.PORT || 5000;

// connect to the database
connectDB();
// initialize express
const app = express();

// ====== add middleware ================================
// parse json data(raw data) to be readable
app.use(express.json());
// parse urlencoded data to be readable
app.use(express.urlencoded({ extended: false }));
// for users
app.use("/api/users", require("./routes/userRoutes"));
// for hangouts
app.use("/api/hangouts", require("./routes/hangoutRoutes"));
// for error handling
app.use(errorHandler);
// =======================================================

// initialize the server to listen to the port
app.listen(port, () => console.log(`Server running on port ${port}`));
