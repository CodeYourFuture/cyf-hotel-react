import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [backup, setBackup] = useState([]);
  const search = searchVal => {
    console.info("TO DO!", searchVal);

    bookings.map(el => {
      if (
        searchVal.toLowerCase() == el.firstName.toLowerCase() ||
        searchVal.toLowerCase() == el.surname.toLowerCase()
      ) {
        setBackup(bookings);
        setBookings([el]);
      }
    });

    if (searchVal == "") {
      setBookings(backup);
    }
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
