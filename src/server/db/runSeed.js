const seed = require("./seed");
const db = require("./connection");
const data = require("./data/index.js");

seed(data).then(() => {
  return db.end();
});