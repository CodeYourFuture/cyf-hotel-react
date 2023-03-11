import Search from "./Search.js";
import React, { useState } from "react";
// import SearchResults from "./SearchResults.js";

const Bookings = () => {

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={bookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
