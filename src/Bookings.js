import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);
  setBookings =
    "this is only here so Netify doesn't shout at me and so I can actually upload the project";

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
