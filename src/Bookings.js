import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const search = searchVal => {
  console.info("TO DO!", searchVal);
};

const Bookings = () => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
