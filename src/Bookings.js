import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const URL = "https://cyf-react.glitch.me";
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults reservations={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
