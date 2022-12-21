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
    setBookings(
      bookings.filter(item => {
        if (
          item.firstName.includes(searchVal) ||
          item.surname.includes(searchVal)
        ) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
