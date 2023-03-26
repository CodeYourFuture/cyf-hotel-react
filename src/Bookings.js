import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  useEffect(() => {
    fetch("https://temporary-cyf-react.onrender.com")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ERROR!: ${res.status}`);
        }
        return res.json();
      })

      .then((data) => {
        setTimeout(() => {
          setBookings(data);
          setLoadingData(false);
        }, 1000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setLoadingData(false);
      });
  }, []);

  const [bookings, setBookings] = useState([]);

  const [loadingData, setLoadingData] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);

  // const [error, setError] = useState(true);

  const search = (searchVal) => {
    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {loadingData ? <p>Loading data...</p> : null}
        {errorMessage ? <div> {errorMessage} </div> : null}
      </div>
      <search search={search}></search>
    </div>
  );
};

export default Bookings;
