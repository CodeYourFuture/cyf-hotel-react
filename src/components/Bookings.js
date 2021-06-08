import React from "react";
import Search from "./bookings/Search.js";
import {SearchResults} from "./bookings/SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults customerData={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
