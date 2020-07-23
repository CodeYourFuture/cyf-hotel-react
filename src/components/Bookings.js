import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json"

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  let [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

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
    return <div>Loading...</div>;
  }
};

export default Bookings;
