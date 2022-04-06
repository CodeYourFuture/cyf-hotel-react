import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import fakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [bookings, setBookings] = useState(fakeBookings);

  // useEffect(() => {
  //   fetch ("https://cyf-react.glitch.me")
  //   .then(res) => res.json())
  //   .then ((data) => console.group(data));
  // }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
