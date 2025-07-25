const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/user.routes');
const dbConnection = require('./db/db');
dbConnection();

app.use(cors({
  origin: 'http://localhost:5173', // ⚠️ Replace with frontend port
  credentials: true
}));
app.use(express.json());

// ✅ This will fix Cannot GET /
app.get('/', (req, res) => {
  res.send("🚀 Backend is working bixi bhai!");
});

app.use('/users', userRoutes);

module.exports = app;
