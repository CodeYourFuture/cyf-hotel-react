import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import Moment from "react-moment";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  const { bookings } = props;
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const [bookings, SetBookings] = useState(FakeBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults stateVarable={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
