import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  let [bookings, setBookings] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(json => setBookings(json));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let results = [];

    for (let i = 0; i < bookings.length; ++i) {
      if (
        searchVal.toLowerCase().includes(bookings[i].firstName.toLowerCase()) ||
        searchVal.toLowerCase().includes(bookings[i].firstName.toLowerCase())
      ) {
        results.push(bookings[i]);
      }
    }
    setBookings(results);
  };

  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Bookings;
