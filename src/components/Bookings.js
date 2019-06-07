import React from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

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
