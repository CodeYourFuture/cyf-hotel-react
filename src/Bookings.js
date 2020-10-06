import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  useEffect(() => {
    console.log("testing");
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);

    // alternative approach //
    // const searchValue = bookings.filter(item => item.firstName.toLowerCase() === searchVal.toLowerCase() ||
    // item.surname.toLowerCase() === searchVal.toLowerCase())
    // setBookings(searchValue);
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
