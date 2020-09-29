import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const bookingFunction = () => {
    setBookings(bookings);
  };
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// #### 14. Passing bookings from a state variable

// **Instructions:** In the `<Bookings />` component, declare a new state `bookings` with the corresponding setter function `setBookings` to hold the `FakeBookings` data. Instead of passing `FakeBookings` directly to the `<SearchResults />` component, pass the new `bookings` state variable.

// **Hint:** The new `bookings` state should be initialised with the `FakeBookings` variable.

// **Test:** Check that the bookings are still rendered correctly in the page.
