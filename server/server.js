const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello From Server" });
});

app.listen(port, () => {
  console.log("listening... on port " + port);
});
