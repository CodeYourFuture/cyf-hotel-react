import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/delayed")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    console.log(bookings);
    setBookings(
      bookings.filter(
        name =>
          name.firstName.toLowerCase() === searchVal ||
          name.surname.toLowerCase() === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults results={bookings} />
        ) : (
          <p style={{ color: "red" }}>Loading Data...</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
