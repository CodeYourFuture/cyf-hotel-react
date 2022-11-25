import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./Component/SearchResults/SearchResults.js";
// import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const search = searchVal => {
    setBookings("TO DO!", searchVal);
    // console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;
