const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, "../build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello From Server" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

app.listen(port, () => {
  console.log("listening... on port " + port);
});
