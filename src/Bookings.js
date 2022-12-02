import React, { useEffect, useState } from "react";
import Search from "./Search.js";
// import SearchResults from "./SearchResults.js";
import SearchResults from "./SearchResults.jsx";

// import FakeBookings from "./data/fakeBookings.json";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    bookings.filter(name =>
      name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
