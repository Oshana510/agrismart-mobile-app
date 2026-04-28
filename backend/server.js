const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/mongoDB');
const dns=require('dns');

dotenv.config();

//DB connection
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');


// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);


// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'AgriSmart API is running!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      tasks: '/api/tasks',
    }
  });
});

dns.setServers(["0.0.0.0", "8.8.8.8"]);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});