import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  //removed setBookings state function because its not used
  const [bookings] = useState(fakeBookings);

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
