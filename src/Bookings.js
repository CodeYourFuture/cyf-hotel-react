import React, { useState, useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  //  function allbookings() {
  //    setBookings(FakeBookings + 1);
  //  }

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingResults={bookings} />
      </div>
    </div>
  );
};

export default Bookings;