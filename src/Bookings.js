import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBookings from "./AddBookings.js";
import moment from "moment";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    setBookings(
      (bookings = bookings.filter(
        booking =>
          booking.firstName.toUpperCase() === searchVal.toUpperCase() ||
          booking.surname.toUpperCase() === searchVal.toUpperCase()
      ))
    );
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => {
        console.log(res);
        console.log(res.status);
        console.log(res.blob);
        if (res.ok) {
          return res.json();
        } else {
          console.log("error" + res.status);
        }
      })
      .then(data => {
        setBookings(data);
        console.log("loaded");
      });
  }, []);

  if (!bookings.length) {
    return <p>Not loading yet</p>;
  } else {
    const addBooking = bookingValue => {
      setBookings(bookings.concat(bookingValue));
    };
    console.log(bookings);
    bookings.forEach(elem => (elem["Number of nights"] = NumberNights(elem)));
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults bookings={bookings} />
          <AddBookings bookings={bookings} addBooking={addBooking} />
        </div>
      </div>
    );
  }
};

function NumberNights(result) {
  let checkIn = moment(result.checkInDate);
  let checkOut = moment(result.checkOutDate);

  return checkOut.diff(checkIn, "days");
}

export default Bookings;
