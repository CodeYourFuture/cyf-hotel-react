import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
          booking.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => {
        setError(true);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings[0] ? (
          <SearchResults results={bookings} />
        ) : error ? (
          <strong>There was an error loading the data!</strong>
        ) : (
          <strong>Loading Data...</strong>
        )}
      </div>
    </div>
  );
};

export default Bookings;
