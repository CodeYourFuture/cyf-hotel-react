import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [submit, setSubmit] = useState("");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <Search setSubmit={setSubmit} />
      <SearchResults bookings={bookings} submit={submit} />
    </div>
  );
};

export default Bookings;
