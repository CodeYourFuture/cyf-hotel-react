import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  // const render = () => {
    useEffect(() => {
      fetch(`https://cyf-react.glitch.me`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
        });
    }, []);
  // };
  // render();

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
