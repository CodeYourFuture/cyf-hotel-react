import React from "react";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
