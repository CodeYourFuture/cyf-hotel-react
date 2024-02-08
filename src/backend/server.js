const express = require('express');
require('dotenv').config();
const path = require('path');
const pool = require("./db/connection");
const cors = require("cors")




const app = express();
app.use(cors())
const Port = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    console.log('Data retrieved from the database:', result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query:', error.stack);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  console.log(`Database user: ${process.env.POSTGRES_USER}`);
});
