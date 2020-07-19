import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center text-primary">
      <div className="spinner-border" role="status" />
    </div>
  );
};

export default Bookings;
