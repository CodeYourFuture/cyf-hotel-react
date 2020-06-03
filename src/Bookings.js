import React from "react";
import SearchButton from "./Search.js";
import ShowAll from "./ShowAll";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchButton search={search} data={FakeBookings} />
        <ShowAll data={FakeBookings} />
      </div>
    </div>
  );
};

export default Bookings;
