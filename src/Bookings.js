import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./component/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={booking} />
      </div>
    </div>
  );
};

export default Bookings;
