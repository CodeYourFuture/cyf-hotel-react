import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json"

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    if (searchVal !== "") {
      setFilteredBookings(
        bookings.filter(
          person =>
            person.firstName === searchVal || person.surname === searchVal
        )
      );
    } else {
      setFilteredBookings(bookings);
    }
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults result={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;
