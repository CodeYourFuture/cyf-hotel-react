import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  return (
    <div className="App-content">
      <div className="container">
        <Search />
        {<SearchResults people={fakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
