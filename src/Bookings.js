import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import Loading from "./Loading.js";
import SearchResults from "./SearchResults";
//import FakeBookingsData from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    //console.info("TO DO!", searchVal);

    const filteredData = bookings.filter(function(bookings) {
      return (
        bookings.firstName.toLowerCase() === searchVal.toLowerCase() ||
        bookings.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });

    searchVal.trim() === ""
      ? setBookings(originalData)
      : setBookings(filteredData);
  };

  const [bookings, setBookings] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://cyf-hotel-bookings.herokuapp.com/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setOriginalData(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? <Loading /> : <SearchResults bookingsData={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
