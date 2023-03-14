import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBooking(data);
        // console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBooking(
      booking.filter(
        eachPerson =>
          eachPerson.firstName === searchVal || eachPerson.surname === searchVal
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {booking.length && <SearchResults results={booking} />}
      </div>
    </div>
  );
};

export default Bookings;
