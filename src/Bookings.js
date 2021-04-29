import React, { useState } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  // eslint-disable-next-line
  const [currentBookings, setBookings] = useState(FakeBookings);

  return (
    <div className="container">
      <Search search={search} />
      <SearchResults results={setBookings} />
    </div>
  );
};

export default Bookings;
