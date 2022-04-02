import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

export default function Bookings() {
  const [bookings, setBookings] = useState(fakeBookings); // setBookings dont need to be there

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log(setBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
}
