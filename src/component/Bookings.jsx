import React, { useState } from "react";
import Search from "./search/Search";
import SearchResults from "../component/SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  // Declare a state variable for bookings and its setter function
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* Pass the bookings state variable to SearchResults */}
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

