import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookingsData from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    //console.info("TO DO!", searchVal);

    console.log(bookings);
    //  searchVal

    const filteredData = bookings.filter(function(bookings) {
      return (
        bookings.firstName.toLowerCase() == searchVal.toLowerCase() ||
        bookings.surname.toLowerCase() == searchVal.toLowerCase()
      );
    });

    SetBookings(filteredData);
  };

  const [bookings, SetBookings] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => SetBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingsData={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
