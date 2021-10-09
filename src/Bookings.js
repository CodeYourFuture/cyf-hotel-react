import React, { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    const searchedNames = bookings.filter(person =>
      person.firstName.includes(searchVal)
    );
    setBookings(searchedNames);
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
