import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  const [results, setBookings] = useState(fakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default Bookings;
