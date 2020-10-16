import React from "react";
import Search from "./Search.js";
import { useState, useEffect } from "react";
import SearchResults from "./Searchresults.js";

//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [getting, setGetting] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setGetting(false);
        setError(true);
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    let searchOutput = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(searchOutput);
    console.info(searchVal);
  };
  if (bookings.error) {
    return error && <p>ERROR ERROR ERROR ABORT - FATAL ERROR</p>;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {getting ? (
          <p> Hold your horses...</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
