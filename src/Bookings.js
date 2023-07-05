import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "../src/components/SearchResults.js";
import CustomerProfile from "./CustomerProfile.js"
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const [reset, setReset] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setReset(data);
      });
  }, []);

  const search = (searchVal) => {
    // console.log(bookings[0].firstName);
    const filterSearch = bookings.filter(function (bookings) {
      return bookings.firstName == searchVal || bookings.surname == searchVal;

      //   console.log(bookings.firstName)
      // console.log(filterSearch)
      // return setBookings(filterSearch);
    });

    setBookings(filterSearch);
    // console.log("this worked");
    // console.info("TO DO!", searchVal);
  };

  const resetHandler = () => {
    console.log(reset);

    return setBookings(reset);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={bookings} />
        <button onClick={resetHandler}> Reset</button>
        <CustomerProfile results={bookings.id} />
      </div>
    </div>
  );
};

export default Bookings;
