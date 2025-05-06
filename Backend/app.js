const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file 
const express = require("express");
const app = express();
const cors = require('cors'); // Import CORS middleware
const cookieParser = require('cookie-parser'); // Import cookie-parser middleware
const connectToDb = require('./db/db')      
const userRoutes = require('./routes/user.routes'); // Import user routes

connectToDb();

app.use(cors())
app.use(express.json()) // Parse JSON request bodies
app.use(cookieParser()) // Parse cookies from request headers
app.use(express.urlencoded({ extended: true })) // Parse URL-encoded request bodies
// dummy route
app.get('/', (req, res) => {
    res.send("HEllo ji kaise ho sare, sab badiya hai ji ")
})

app.use('/users', userRoutes); // Use user routes for any requests to /users

module.exports = app;