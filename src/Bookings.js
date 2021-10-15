import React from "react";
import Search from "./Search.js";
import { useState } from "react";
// import SearchResults from "./components/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = (searchVal) => {
    console.info(searchVal);
    setBookings(bookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
