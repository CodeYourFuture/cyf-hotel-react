import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults/index.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const handleSearchInput = event => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search searchVal={searchInput} handler={handleSearchInput} />

        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
