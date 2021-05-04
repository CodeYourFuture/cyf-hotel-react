import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const search = searchVal => {
    console.log("TO DO!", searchVal);
    let searchResult = bookings.filter(booking => {
      console.log(booking.firstName);
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBooking(searchResult);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
          console.warn(data.error);
        } else {
          setBooking(data);
        }
        setLoading(true);
      })
      .catch(error => console.warn("Error"));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {!loading && (
          <p className="text-center p-3 bg-warning">Data is loading...</p>
        )}
        {error !== "" && <p className="text-center p-3 bg-warning">{error}</p>}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
