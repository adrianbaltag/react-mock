const express = require("express");
// allows us to have a .env file with files in it
const dotenv = require("dotenv").config();
// access to the port number(from .env file; if not available, use 5000 )
const port = process.env.PORT || 5000;

// initialize express
const app = express();
// initialize
app.listen(port, () => console.log(`Server running on port ${port}`));
