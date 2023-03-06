import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { useState, useEffect } from "react";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  // const search = (searchVal) => {
  //   console.info("TO DO!", searchVal);
  // };

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      // .then((data) => setBookings(data))
      .then(data => {
        bookings = setBookings(data);
      })
      .catch(err => console.log(err));
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
