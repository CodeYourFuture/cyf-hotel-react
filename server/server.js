const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3001;

const fs = require("fs");

let bookings = JSON.parse(
  fs.readFileSync(__dirname + "/booking.json", "utf-8")
);
let maxID = Math.max(...bookings.map(c => c.id));

app.use(express.static(path.resolve(__dirname, "../build")));
app.use(express.urlencoded({ extended: true }));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

app.get("/api/delayed", async (req, res) => {
  await sleep(500);
  res.json(bookings);
});

app.get("/bookings", (req, res) => {
  res.json(bookings);
});

app.post("/validation", (req, res) => {
  //console.log(Object.keys(req.body).every((e) => req.body[e]));
  //const date = new Date().toLocaleDateString();
  console.log(req.body);
});

app.get("/bookings/:id", (req, res) => {
  if (!parseInt(req.params.id)) {
    res.status(404).send({ message: "Not Found" });
    return;
  }
  const searchByID = bookings.filter(e => e.id == req.params.id);
  if (searchByID.length > 0) res.status(200).json(searchByID);
  else res.status(404).send({ message: "Not Found" });
});

app.post("/guest/registration", async (req, res) => {
  await sleep(1000);
  if (Object.keys(req.body).every(e => req.body[e])) {
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
    bookings.push(newRegistration);
    save();
    res.status(200).sendFile(path.resolve(__dirname, "../build", "index.html"));
  } else res.status(400).json({ message: "Bad Request" });
  //res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../build", "index.html"));
});

const save = () => {
  fs.writeFileSync(
    __dirname + "/booking.json",
    JSON.stringify(bookings, null, 2)
  );
};

app.listen(port);
