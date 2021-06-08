import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      fetch("https://cyf-react.glitch.me/error")
        .then(res => res.json())
        .then(data => {
          setBookings(data);
          setLoadingData(true);
        });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }, []);

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    console.log(filteredBookings);
    setBookings(filteredBookings);
  };
  console.log(loadingData);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && "500 HTTP..."}
        {loadingData ? <SearchResults results={bookings} /> : "Loading data..."}
      </div>
    </div>
  );
};

export default Bookings;
