// ** Instructions:** In the`<Bookings />` component, declare a new state`bookings`
//with the corresponding setter function `setBookings` to hold the`FakeBookings` data.
//Instead of passing`FakeBookings` directly to the`<SearchResults />` component,
//pass the new `bookings` state variable.

// ** Hint:** The new `bookings` state should be initialised with the`FakeBookings`
//variable.

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";

// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [BookingsData, setBokings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBokings(data));
  }, []);
  console.log(BookingsData);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <SearchResults results={BookingsData} />
      </div>
      <Search search={search} />
    </div>
  );
};

export default Bookings;
