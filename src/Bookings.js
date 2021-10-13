import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeInfo from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults FakeInfo={FakeInfo} />
      </div>
    </div>
  );
};

export default Bookings;
