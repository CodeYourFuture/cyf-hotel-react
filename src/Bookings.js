import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        customer =>
          customer.surname.toLowerCase().includes(searchVal) ||
          customer.firstName.toLowerCase().includes(searchVal)
      )
    );
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (!res) {
          throw Error("Oops Something Is Wrong!");
        }
        return res.json();
      })
      .then(data => setBookings(data))
      .catch(error => console.log(error));
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
