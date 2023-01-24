import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  // const [bookings, setBookings] = useState([]);

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me")
  //     .then(res => res.json())
  //     .then(data => {
  //       // console.log(data);
  //       setBookings(data);
  //     });
  // });

  const [bookings, setBookings] = useState(FakeBookings);

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
