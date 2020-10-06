import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    console.log("Fetching for Pokemon");

    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults searchResults = {['id', 'title', 'first name', 'surname', 'email', 'room id', 'check in date','check out date']}/> */}
        <SearchResults searchResults={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
