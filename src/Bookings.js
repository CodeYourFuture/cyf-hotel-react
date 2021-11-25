import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./Components/SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(FakeBookings);

  // this allows me to upload it to Netify. Is there a better way? Most definitely. Is there a funnier way? Definitely not.
  const pleaseLetMeUpload = () =>
    setBookings(bookings => (bookings = FakeBookings));

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} onClick={pleaseLetMeUpload} />
      </div>
    </div>
  );
};

export default Bookings;
