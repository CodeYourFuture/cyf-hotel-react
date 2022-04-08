// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import fakeBookings from "./data/fakeBookings.json";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
}
