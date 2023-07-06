import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings(bookings.filter((row) => {return row.firstName.includes(searchVal) || row.surname.includes(searchVal);}))
    //console.log(bookings) Why still diplay all rows?
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
