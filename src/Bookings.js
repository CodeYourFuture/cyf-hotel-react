import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./Lesson1/SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    searchVal = searchVal.toLowerCase();
    const filtered = bookings.filter(
      item =>
        item.firstName.toLowerCase() === searchVal ||
        item.surname.toLowerCase() === searchVal
    );
    setBookings(filtered);
  };

  const showProfile = async () => {};

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} showProfile={showProfile} />
      </div>
    </div>
  );
};

export default Bookings;
