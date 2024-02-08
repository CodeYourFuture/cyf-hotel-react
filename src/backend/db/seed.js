
const { fakeBookings } = require("./data/index.js");
const format = require("pg-format");
const db = require("./connection.js");

function seed() {
  return db
    .query("DROP TABLE IF EXISTS bookings;")
    
    .then(() => {
      return createBookingsTable();
    })
    .then(() => {
      return insertBookingsData();
    })
    .catch((error) => console.error("Error seeding database:", error));
  }
    



function createBookingsTable() {
  const query = `CREATE TABLE  bookings (
    bookings_id SERIAL PRIMARY KEY,
    title VARCHAR(40) NOT NULL,
    firstName VARCHAR(40) NOT NULL,
    surname VARCHAR(40) NOT NULL,
    email VARCHAR, 
    roomId INT NOT NULL,
    checkInDate DATE, 
    checkOutDate DATE 
  )`;
  
  return db.query(query);
}

function insertBookingsData() {
  const arrangedBookingsData = arrangeBookingsData(fakeBookings);
  console.log('Arranged Bookings Data:', arrangedBookingsData);

  const insertBookingsQuery = format(
    `
    INSERT INTO bookings
    (title, firstName, surname, email, roomId, checkInDate, checkOutDate)
    VALUES
    %L
    RETURNING *
    `,
    arrangedBookingsData
  );
  console.log('Insert Bookings Query:', insertBookingsQuery);
  return db.query(insertBookingsQuery)
  .then(result => {
    console.log('Insert Result:', result.rows);
    return result.rows;
  });
}

function arrangeBookingsData(bookingsData) {
  return bookingsData.map((booking) => [
    booking.title,
    booking.firstName,
    booking.surname,
    booking.email,
    booking.roomId,
    booking.checkInDate,
    booking.checkOutDate
  ]);
}


module.exports = seed;
