const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file 


const express = require("express");
const app = express();
const cors = require('cors'); // Import CORS middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send("HEllo ji kaise ho sare ")
})

module.exports = app;