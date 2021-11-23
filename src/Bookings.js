import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

import { useState } from "react";
// import Restaurant from "./Restaurant.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  // const [bookings, setBookings] = useState(FakeBookings);
  const [bookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
