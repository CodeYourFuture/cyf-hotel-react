import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let user = bookings.filter(
      name =>
        name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        name.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(user);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length !== 0 && <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
