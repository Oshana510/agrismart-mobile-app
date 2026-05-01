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
const taskRoutes = require('./routes/taskRoutes');


// Use routes
app.use('/api/tasks', taskRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'AgriSmart API is running!',
    version: '1.0.0',
    endpoints: {
      tasks: '/api/tasks',
    }
  });
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});