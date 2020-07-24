import React, { useState, useEffect } from "react";
import Search from "./Search.js";
//import FakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [Bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  if (Bookings !== null) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={Bookings} />
        </div>
      </div>
    );
  } else {
    return <p>Please wait ...</p>;
  }
};

export default Bookings;
