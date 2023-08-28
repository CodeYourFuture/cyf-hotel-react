const express = require("express");

const router = express.Router();
const db = require("./db");

const phoneRegex = /^\d{11}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

router.get("/customers", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT id, name, city, phone, email FROM customers"
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/customers/:pid", async (req, res) => {
  const custId = parseInt(req.params.pid);

  try {
    const result = await db.query("SELECT * FROM customers WHERE id =$1", [
      custId,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/customers/by-name/:name", async (req, res) => {
  const custNamePattern = req.params.name;
  try {
    const result = await db.query(
      "SELECT * FROM customers WHERE name LIKE $1",
      [`%${custNamePattern}%`]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.post("/customers", async (req, res) => {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPhone = req.body.phone;
  const newAddress = req.body.address;
  const newCity = req.body.city;
  const newPostcode = req.body.postcode;
  const newCountry = req.body.country;

  if (!phoneRegex.test(newPhone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  if (!emailRegex.test(newEmail)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  const query = `INSERT INTO customers (name, email, phone, address, city, postcode, country)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;

  try {
    const emailCheckQuery = "SELECT * FROM customers WHERE email = $1";
    const emailCheckResult = await db.query(emailCheckQuery, [newEmail]);

    if (emailCheckResult.rows.length > 0) {
      return res
        .status(409)
        .json({ error: "Email already exists in the database" });
    }

    const result = await db.query(query, [
      newName,
      newEmail,
      newPhone,
      newAddress,
      newCity,
      newPostcode,
      newCountry,
    ]);

    const newId = result.rows[0].id;
    console.log(`New Customer id = ${newId}`);
    res.status(200).json({ lastId: newId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

router.put("/customers/:pid", async (req, res) => {
  const custId = parseInt(req.params.pid);
  const newEmail = req.body.email;
  const newPhone = req.body.phone;

  if (!phoneRegex.test(newPhone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  if (!emailRegex.test(newEmail)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  try {
    const result = await db.query(
      "UPDATE customers SET email=$2, phone = $3 WHERE id=$1",
      [custId, newEmail, newPhone]
    );
    res.status(200).send(`Customer ${custId} updated!`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

router.delete("/customers/:pid", async (req, res) => {
  const custId = req.params.pid;

  try {
    const result = await db.query("DELETE FROM customers WHERE id=$1", [
      custId,
    ]);
    res.status(200).send(`Customer ${custId} was successfully deleted!`);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err });
  }
});

module.exports = router;
