import React from "react";
import { Search } from "./Search";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

export const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
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
