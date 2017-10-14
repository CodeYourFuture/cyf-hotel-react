const express = require("express");
const app = express();

const filename = "./database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
// open the database
let db = new sqlite3.Database(filename);
app.use(express.static(`${__dirname}/ui-client/build`));
app.get("/api/reservations", function(req, res) {
  db.serialize(function() {
    const sql = `SELECT customers.id,title, firstname, surname, email,
                 room_id AS roomId, check_in_date AS checkInDate, check_out_date AS checkOutDate
                 FROM customers
                 INNER JOIN reservations 
                 on customers.id = reservations.customer_id`;
    db.all(sql, [], (err, reservations) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).json({
          reservations
        });
      }
    });
  });
});

const port = process.env.PORT || 3001;
app.listen(port, function() {
  console.log("server listening on port " + port);
});
