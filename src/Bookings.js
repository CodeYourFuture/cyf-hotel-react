import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults/index.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = userSearch => {
    console.log("from Bookings.js ...");
    console.log(userSearch);
    setSearchInput(userSearch);
    console.log("booking.js search input:");
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

        <SearchResults
          results={
            searchInput
              ? bookings.filter(
                  booking =>
                    booking.firstName
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) ||
                    booking.surname
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                )
              : bookings
          }
        />
      </div>
    </div>
  );
};

export default Bookings;
