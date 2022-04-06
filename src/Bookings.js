import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );

    setBookings(filteredBooking);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        data.error ? window.alert(data.error) : setBookings(data);
      })
      .catch(error => console.log(error));
  }, []);

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div>
      <h3 className="loading">PAGE IS LOADING!!!!!</h3>
    </div>
  );
};

export default Bookings;
