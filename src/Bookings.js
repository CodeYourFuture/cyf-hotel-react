import React from "react";
import Search from "./Search.js";
import SearchResults from "./Component/SearchResults/SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={fakeBookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;
