import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setbookings] = useState("");

  const search = searchVal => {
    setbookings(
      bookings.filter(
        ({ firstName, surname }) =>
          firstName.toLowerCase().includes(searchVal) ||
          surname.toLowerCase().includes(searchVal)
      )
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setbookings(data));
  }, []);

  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return (
      <h2 className="bookings-table-loadScr">
        Please wait while we load the bookings...
      </h2>
    );
  }
};

export default Bookings;
