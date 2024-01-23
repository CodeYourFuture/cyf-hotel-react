const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/connection');
const Port = 5000;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests to the homepage
app.get('/', (req, res) => {
  // Send the main HTML file for your React app
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});





app.list(Port , ()=>{
console.log(` server is running on port${Port}`)
})