import React, { useState, useEffect } from "react";
import Search from "./Search.js";

import SearchResults from "./SearchResults.js";

const Bookings = () => {
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setBookings(data);
      });
  }, []);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const search = searchVal => {
    console.log("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        e =>
          e.firstName.toLowerCase() === searchVal.toLowerCase() ||
          e.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {loading && <p>"Data is loading... Please..."</p>}
      </div>
    </div>
  );
};

export default Bookings;
