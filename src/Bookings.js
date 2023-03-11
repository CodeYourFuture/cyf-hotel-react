import React, { useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState } from "react";

const Bookings = ({ newBookingData }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (!res.ok) {
          throw Error("Some thing is wrong with the API");
        }
        return res.json();
      })
      .then(data => {
        setLoading(false);
        setBookings(newBookingData ? [...data, ...newBookingData] : data);
      })
      .catch(error => {
        setLoading(false);
        setErrorMessage("There is an error, START PANICKING");
        setBookings([]);
      });
  }, [newBookingData]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        book =>
          book.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          book.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {loading ? (
          <div>Loading Customer data......</div>
        ) : errorMessage ? (
          <div>{errorMessage}</div>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
