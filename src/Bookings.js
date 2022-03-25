import React from "react";
import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={fakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
