import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const fake = FakeBookings;
  const outDate = moment(FakeBookings.checkOutDate);
  const inDate = moment(FakeBookings.checkInDate);
  const totalNights = outDate.diff(inDate, "days");
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={fake} totalNights={totalNights} />
      </div>
    </div>
  );
};

export default Bookings;
