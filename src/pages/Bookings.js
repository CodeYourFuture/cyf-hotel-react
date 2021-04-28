import React, { useState } from "react";
import Search from "../components/Search.js";
import SearchResults from "../components/table";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
