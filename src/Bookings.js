import React, { useState } from "react";
import Search from "./Search.js";
import OurBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults.js";
import Restaurant from "./Restaurant.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(OurBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};
export default Bookings;
