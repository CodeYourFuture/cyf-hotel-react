import React, { useState } from "react";
import Search from "./Search.js";

import FakeBooking from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBooking] = useState({ FakeBooking });
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
    </div>
  );
};

export default Bookings;
