import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import Fakebookings from "./data/fakeBookings.json";
import { useState } from "react";

const Bookings = () => {
  const [Bookings] = useState(Fakebookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;
