import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchButton from "./SearchButton.js";
import SearchResult from "./SearchResults.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  let name = "Altom";
  const [bookings, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBooking(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} searchVadswd />
        <SearchResults results={bookings} name={name} />
      </div>
    </div>
  );
};

export default Bookings;
