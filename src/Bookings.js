import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  return (
    <div className="content">
      <div className="container">
        <Search />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
