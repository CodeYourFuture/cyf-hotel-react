import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  function updateSetBookings(event) {
    setBookings(event.target.value);
  }
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(error => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    // let filteredBookings = bookings.filter(booking=> {
    //   return (
    //     booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
    //     booking.surname.toLowerCase() === searchVal.toLowerCase()
    //   )
    // })
    // setBookings(filteredBookings)
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} onClick={updateSetBookings} />
      </div>
    </div>
  );
};

export default Bookings;
