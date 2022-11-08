import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(bookings => setBookings(bookings));
  });

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(searchVal => {
      if (
        bookings.firstName.includes(searchVal) &&
        bookings.surname.includes(searchVal)
      ) {
        return true;
      }
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
