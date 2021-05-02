import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, []);
  return (
    <div className="content">
      <div className="container">
        <Search />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
