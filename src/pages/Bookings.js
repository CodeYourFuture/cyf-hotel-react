import React, { useState, useEffect } from "react";
import Search from "../components/Search.js";
import SearchResults from "../components/table/SearchResults";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [displayError, setDisplayError] = useState("");

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        booking.surname.toUpperCase().includes(searchVal.toUpperCase())
      );
    });
    setBookings(filteredBookings);
  };

  useEffect(() => {
    let url = "https://cyf-react.glitch.me/delayed";
    // let url = "https://cyf-react.glitch.me/";
    // let url = "https://cyf-react.glitch.me/error";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response.status;
        }
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        setDisplayError(error);
        setError(true);
      })
      .finally(() => {
        setLoadingData(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div className="text-center">
          {loadingData && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          {error && (
            <div className="text-center error">
              Something went wrong on loading data!!! Error is {displayError}{" "}
            </div>
          )}
        </div>
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
