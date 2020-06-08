import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setBookings(null);
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  if (error) {
    return <div className="msg-loading"> something wrong {error.message} </div>;
  } else if (!bookings) {
    return <div className="msg-loading"> "Loading..." </div>;
  }

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
