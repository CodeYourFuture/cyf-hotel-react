import React, { useState } from "react";
import Search from "./Search";
import SearchResult from "./SearchResult";

const Bookings = () => {
  const [bookings, setBooking] = useState();
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
