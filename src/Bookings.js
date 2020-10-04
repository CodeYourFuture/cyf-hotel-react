import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error(error));
  }, []);
  // console.log(bookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  if (bookings.length > 0) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
        </div>
        <SearchResults data={bookings} />
      </div>
    );
  } else {
    return null;
  }
};

export default Bookings;
