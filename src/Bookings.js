import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);
  if ((bookings.length = 0)) {
    return;
  }
  const searchVal = searchInput => {
    const newBookings = bookings.filter(
      element =>
        element.firstName.toLowerCase() == searchInput.toLowerCase() ||
        element.surname.toLowerCase() == searchInput.toLowerCase()
    );
    setBookings(newBookings);
  };
  return (
    <div className="col-12">
      <div className="table container col-12 col-md-10 ml-sm-1 ml-md-5 ml-lg-auto mr-lg-auto">
        <Search searchVal={searchVal} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
