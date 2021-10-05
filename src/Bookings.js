import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// Renders bookings container (eventually will perform a search), called by `App.js`.
const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="Bookings-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
