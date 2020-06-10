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
      <h1
        style={{
          textAlign: "center",
          color: "gray",
          marginTop: "10px",
          backgroundColor: "black",
          padding: "8px",
          fontSize: "22px"
        }}
      >
        CYF Hotels.........
        <span style={{ textAlign: "center", color: "white", fontSize: "22px" }}>
          Loading booking information
        </span>
        .........CYF Hotels{" "}
      </h1>
    </div>
  );
};

export default Bookings;
