import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import Moment from "react-moment";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = props => {
  // pass booking data as a prop to SearchResults
  const { bookings } = props;

  //
  const search = searchVal => {
    console.info("Your search result: ", searchVal);
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName === searchVal || booking.surname === searchVal
    );
    const [bookings, SetBookings] = useState([]);

    useEffect(() => {
      fetch("https://cyf-react.glitch.me")
        .then(res => res.json())
        .then(data => {
          SetBookings(data);
        });
    }, [{ bookings }]);
    console.log("useEffect ran", []);

    setBooking(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults stateVarable={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
