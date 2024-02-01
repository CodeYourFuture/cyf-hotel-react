const express = require('express');
const { Pool } = require('pg');
const path = require('path');
// const connection = require("./data/connection");
require('dotenv').config();


const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

const app = express();
const Port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'build')));

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

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
  console.log(`Server is running on port ${Port}`);
  console.log(`Database user: ${process.env.POSTGRES_USER}`);
});
