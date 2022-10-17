import React from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResult.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult />
      </div>
    </div>
  );
};

export default Bookings;
