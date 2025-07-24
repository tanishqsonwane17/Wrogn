// 🔐 Load environment variables
const dotenv = require('dotenv');
dotenv.config();

// ⚙️ Core setup
const express = require('express');
const http = require('http');
const app = require('./app');

// 🖥️ Create HTTP server
const server = http.createServer(app);

// 📦 Port
const PORT = process.env.PORT || 3000;

// 🚀 Start the server
server.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
