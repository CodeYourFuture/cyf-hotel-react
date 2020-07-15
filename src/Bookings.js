import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchResults results={FakeBookings} />
      </div>
      <Search search={search} />
    </div>
  );
};

export default Bookings;
