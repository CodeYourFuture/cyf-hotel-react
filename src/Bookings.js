import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [submit, setSubmit] = useState("");

  const search = searchVal => {
    let filterResult = bookings.filter(visitor => {
      console.log(visitor);
      console.log(searchVal);
      return (
        visitor.firstName.toUpperCase() === searchVal.toUpperCase() ||
        visitor.surname.toUpperCase() === searchVal.toUpperCase()
      );
    });
    console.info("TO DO!", searchVal);
    setBookings(filterResult);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

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
