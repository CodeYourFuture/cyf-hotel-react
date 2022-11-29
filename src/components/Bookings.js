import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [searchInput, setSearchInput] = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSearchInput(e) {
    setSearchInput(e.target.value);
  }

  function search(e, searchVal) {
    e.preventDefault();
    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  }

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setLoading(true);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search
          search={e => search(e, searchInput)}
          value={searchInput}
          handleSearchInput={handleSearchInput}
        />
        {loading ? (
          <SearchResults results={bookings} />
        ) : (
          <p>Please wait the page is loading</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
