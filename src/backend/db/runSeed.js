const seed = require("./seed.js");
const db = require("./connection.js");
const data = require("./data/index.js");

seed(data).then(() => {
  return db.end();
});