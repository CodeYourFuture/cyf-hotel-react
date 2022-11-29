import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Search from "./Search";
import FakeBookings from "./data/fakeBookings.json";
//import Restaurant from "./Restaurant";

const Bookings = () => {
  // const [bookings, setBookings] = useState("bookings");
  // const [initialData, setInitialData] = useState("bookings");

  const search = searchVal => {
    console.info("To DO", searchVal);
    // setBookings(bookings);
    // setInitialData(bookings);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={FakeBookings} />
        {/* <Restaurant /> */}
      </div>
    </div>
  );
};

export default Bookings;
