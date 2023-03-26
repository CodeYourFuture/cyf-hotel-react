import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  useEffect(() => {
    fetch("https://temporary-cyf-react.onrender.com/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP ERROR! status code: ${res.status}`);
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
        setError(`This is Error ${err.message}`);
        setLoadingData(false);
      });
  }, []);

  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  const search = (searchVal) => {
    const filterBookings = bookings.filter((booking) => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filterBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {loadingData ? <p> Loading Data ...</p> : null}
        {error ? <div> {error} </div> : null}
      </div>
      <search search={search}></search>
    </div>
  );
};

export default Bookings;
