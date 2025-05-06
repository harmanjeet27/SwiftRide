const dotenv = require('dotenv'); // Import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file 

const http = require('http'); 
const app = require('./app'); // Import the app module
const server = http.createServer(app);

const port = process.env.PORT || 3000; // Set the port to the value from environment variables or default to 3000
server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); // Log the server start message 
})