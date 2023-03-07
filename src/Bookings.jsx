import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  useEffect(() => {
    console.log("Fetching information ...");
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((er) => {
        console.log(er);
      });
  }, []);

  const [bookings, setBookings] = useState([]);

  const [showFullList, setShowFullList] = useState(true);

  const search = (searchVal) => {
    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
    setShowFullList(searchVal.length === 0);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={showFullList ? bookings : filterBookings} />
      </div>
    </div>
  );
};

export default Bookings;
