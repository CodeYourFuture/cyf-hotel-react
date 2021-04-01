import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBookings] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isDataFetched, setIsisDataFetched] = useState(true);
  const [error, setError] = useState(null);

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
    fetch("https://cyf-react.glitch.me/error")
      .then(res => {
        if (!res.ok === true) {
          throw new Error(
            " Whoops something went wrong! Could Fetch API for Bookings"
          );
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
        setIsDataLoading(true);
      })
      .catch(err => {
        setIsisDataFetched(false);
        setError(err.message);
      });
  }, []);

  if (isDataFetched === true) {
    if (isDataLoading === true) {
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
  } else {
    return (
      <div className=" m-3 text-center display-4 text-danger">{error}</div>
    );
  }
};

export default Bookings;
