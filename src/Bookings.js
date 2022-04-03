import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./searchResults.js";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="contiainer">
        <Search search={search} />
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
