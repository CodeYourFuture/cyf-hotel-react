import React, { useState, useEffect } from "react";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []); // only run once after the first render (please)

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    // setBookings("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
