import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookingArr = booking.filter(
      oneBooking =>
        oneBooking.firstName.toLocaleLowerCase() === searchVal ||
        oneBooking.surname.toLocaleLowerCase() === searchVal
    );
    console.log(filteredBookingArr);

    setBookings(filteredBookingArr);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;
