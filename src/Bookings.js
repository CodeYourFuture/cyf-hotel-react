import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  let [bookings, setBookings] = useState(FakeBookings);

  // useEffect(async function() {
  //   await fetch("https://cyf-react.glitch.me")
  //   .then(response => response.json())
  //   .then(json => bookings = json)
  // });

  const search = searchVal => {
    console.info("TO DO!", searchVal);
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
