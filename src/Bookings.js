import React from "react";
import Search from "./Search.js";
import SearchButton from "./SearchButton.js";
import SearchResult from "./SearchResults.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  let name = "Altom";

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} name={name} />
      </div>
    </div>
  );
};

export default Bookings;
