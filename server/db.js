const { Pool } = require("pg");

const db = new Pool({
  user: "maxbmaapc",
  host: "localhost",
  database: "cyf_hotels",
  password: "",
  port: 5432,
});

module.exports = db;
