import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import LoadingWait from "./LoadingWait.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  let [dataAvailable, setDataAvailable] = useState(false);

  useEffect(() => {
    // fetch(`https://cyf-react.glitch.me`)
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setMasterBookings(data);
        setDataAvailable(true);
      });
  }, []);

  let [bookings, setBookings] = useState([]);
  let [masterBookings, setMasterBookings] = useState([]);

  const search = (searchVal) => {
    let filteredBookings = masterBookings.filter((abooking) => {
      console.log(abooking);
      return (
        abooking.firstName.includes(searchVal) ||
        abooking.surname.includes(searchVal)
      );
    });
    setBookings(filteredBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {dataAvailable ? <SearchResults results={bookings} /> : <LoadingWait />}
      </div>
    </div>
  );
};

export default Bookings;
