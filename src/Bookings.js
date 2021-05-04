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
    fetch("http://localhost:3003/bookings")
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
        <SearchResults
          result={filteredBookings}
          deleteBookings={setFilteredBookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
