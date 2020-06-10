import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    return fetch(`https://cyf-react.glitch.me/delayed`)
      .then(results => results.json())
      .then(data => setBookings(data));
  }, []);

  const returnButton = () => {
    return fetch(`https://cyf-react.illicitonion.com`)
      .then(results => results.json())
      .then(data => setBookings(data));
  };

  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal ||
          item.surname.toLowerCase() === searchVal
      )
    );
  };

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} returnButton={returnButton} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <div>
      <div className="loader-text">..loading......</div>
      <div class="loader" />
    </div>
  );
};

export default Bookings;
