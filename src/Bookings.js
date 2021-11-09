import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    //console.info("TO DO!", searchVal);
    const filteredVal = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log("Filtered", filteredVal);

    setBookings(() => filteredVal);
    //console.log("bookings", bookings)
  };

  useEffect(() => {
    console.log("Page Uploaded");
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;