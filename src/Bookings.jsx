import React, { useState } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={Search} />
        <SearchResults results={bookings} list={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
