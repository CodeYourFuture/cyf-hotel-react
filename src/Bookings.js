import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    console.log("this is a test");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    const result = bookings.filter(item => {
      return (
        item.firstName.includes(searchVal) || item.surname.includes(searchVal)
      );
    });
    //console.log(result)
    setBookings(result);
  };
  const [bookings, setBookings] = useState([]);
  console.log(setBookings);
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
