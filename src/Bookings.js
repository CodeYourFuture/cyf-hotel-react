import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    setBookings(
      FakeBookings.filter(
        name => name.firstName.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults searchResults = {['id', 'title', 'first name', 'surname', 'email', 'room id', 'check in date','check out date']}/> */}
        <SearchResults searchResults={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
