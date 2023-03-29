import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      setError(null);

      console.log("Fetching information ...");

      try {
        const response = await fetch(
          "https://temporary-cyf-react.onrender.com/"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status code: ${response.status}`);
        }
        const data = await response.json();
        setTimeout(() => {
          setBookings(data);
          setLoadingData(false);
        }, 5000);
      } catch (error) {
        console.error(error);
        setError("Error fetching data. Please try again later.");
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const search = (searchVal) => {
    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filterBookings);
    setShowFullList(searchVal.length === 0);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loadingData ? (
          <p>Loading... </p>
        ) : error ? (
          <p>{error}</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <SearchResults results={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
