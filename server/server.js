const express = require("express");
const cors = require("cors");
const app = express();

const { Pool } = require("pg");

const db = new Pool({
  user: "maxbmaapc",
  host: "localhost",
  database: "cyf_hotels",
  password: "",
  port: 5432,
});

app.get("/customers", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id, name, city, phone FROM customers"
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is live on port: " + (process.env.PORT || 8000));
});
