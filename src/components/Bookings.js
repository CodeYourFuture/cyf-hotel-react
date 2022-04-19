// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
//The Effect Hook lets you perform side effects in function components: -Side could change what the function returns a call to an API
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

// check the shape of the data

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  //fetch data
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then((response) => response.json())
      .then((bookings) => {
        setBookings(bookings);
      });
  }, []);

  //filter bookings
  const search = (searchVal) => {
    console.info("Done!", searchVal);
    setBookings(
      bookings.filter(
        (booking) =>
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* //using the results method to for the table */}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
