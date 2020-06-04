import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  function fetchData(url) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => console.log(err));
  }
  useEffect(() => {
    fetchData("https://cyf-react.glitch.me");
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
