import React, { useState } from "react";
import { Search } from "./Search";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

import { SearchResults } from "./SearchResults";

export const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [booking, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={booking} />
      </div>
    </div>
  );
};
