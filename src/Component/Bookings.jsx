import React from "react";
import Search from "./Search";
import FakeBookings from "../data/fakeBookings.json";
import SearchResult from "./SearchResult"

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };


  // console.log(FakeBookings)

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult results={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
