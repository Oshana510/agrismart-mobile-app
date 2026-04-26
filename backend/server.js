const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoDB');

dotenv.config();

//DB connection
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes


// Use routes




// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});