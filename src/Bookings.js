import React, { useState, useEffect } from "react";
//import { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    bookings.forEach(person => {
      if (
        person.firstName === searchVal.toLowerCase() ||
        person.surname === searchVal.toLowerCase() ||
        person.firstName.toLowerCase() === searchVal.toLowerCase() ||
        person.surname.toLowerCase() === searchVal.toLowerCase()
      ) {
        setBooking([person]);
      }
    });
  };
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

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
