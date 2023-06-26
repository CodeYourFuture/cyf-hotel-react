import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchResults, setSearchResults] = useState(bookings);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const search = (value) => {
    const searchVal = value.toLocaleLowerCase();
    console.log("To search:", searchVal);

    const filterBySearch = FakeBookings.filter(({ firstName, surname }) => {
      return (
        firstName.toLocaleLowerCase().includes(searchVal) ||
        surname.toLocaleLowerCase().includes(searchVal)
      );
    });

    setBookings(filterBySearch);
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
