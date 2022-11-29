import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bookings, setBookings] = useState([]);

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function search(e, searchVal) {
    e.preventDefault();
    console.info("TO DO!", searchVal);
  }
  useEffect(() => {
    fetch("https://cyf-react.glitch.me").then(res =>
      res.json().then(data => setBookings(data))
    );
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search
          search={e => search(e, searchInput)}
          value={searchInput}
          handleSearchInput={handleSearchInput}
        />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
