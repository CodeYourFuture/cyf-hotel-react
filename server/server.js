const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;
const bookingData = require("./booking.json");
const fs = require("fs");

let data = JSON.parse(fs.readFileSync(__dirname + "/booking.json", "utf-8"));
let maxID = Math.max(...data.map(c => c.id));

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.urlencoded({ extended: true }));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

app.get("/api/delayed", async (req, res) => {
  await sleep(500);
  res.json(data);
});

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/guest/registration", async (req, res) => {
  await sleep(1000);
  const newRegistration = {
    id: ++maxID,
    title: req.body.title,
    firstName: req.body.firstName,
    surname: req.body.surName,
    email: req.body.email,
    roomId: req.body.roomID,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate
  };
  data.push(newRegistration);
  save();
  res.status(200).sendFile(path.resolve(__dirname, "../build", "index.html"));

  //res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

const save = () => {
  fs.writeFileSync(__dirname + "/booking.json", JSON.stringify(data, null, 2));
};

app.listen(port);
