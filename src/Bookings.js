import React from "react";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
