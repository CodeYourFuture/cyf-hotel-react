import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [submit, setSubmit] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <div>
      <Search setSubmit={setSubmit} />
      {isLoading === true ? (
        <h2>Loading...</h2>
      ) : (
        <SearchResults bookings={bookings} submit={submit} />
      )}
    </div>
  );
};

export default Bookings;
