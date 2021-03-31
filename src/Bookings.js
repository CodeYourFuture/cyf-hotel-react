import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBookings] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookingArr = booking.filter(
      oneBooking =>
        oneBooking.firstName.toLocaleLowerCase() === searchVal ||
        oneBooking.surname.toLocaleLowerCase() === searchVal
    );
    console.log(filteredBookingArr);

    setBookings(filteredBookingArr);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setIsDataLoaded(true);
      });
  }, []);

  if (isDataLoaded === true) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={booking} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="text-center display-4 m-4">BOOKINGS - LOADING....</div>
    );
  }
};

export default Bookings;
