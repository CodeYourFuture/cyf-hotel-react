import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch("https://cyf-react.glitch.me/error")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching bookings data");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter((row) => {
        return (
          row.firstName.includes(searchVal) || row.surname.includes(searchVal)
        );
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <p className="error-message">{error}</p>
        ) : (<SearchResults results={bookings} />)}
        
      </div>
    </div>
  );
};

export default Bookings;
