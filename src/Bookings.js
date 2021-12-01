import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import FakeBookings from "./data/fakeBookings.json";

import { useState } from "react";
import { useEffect } from "react";
// import Restaurant from "./Restaurant.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingSearch, setBookingSearch] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filteredBookings = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookingSearch(filteredBookings);
  };

  useEffect(() => {
    setDataLoading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
        setBookingSearch(data);
        setDataLoading(false);
      });
  }, []);
  // console.log("Loading...");

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookingSearch} />
        {dataLoading ? (
          <h5 className="dataLoadingMessage">Loading Data...</h5>
        ) : (
          ""
        )}
        {/* {!bookings ? <h4>Error has occurred</h4> : ""} */}
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings;
