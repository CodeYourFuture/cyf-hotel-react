import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import loadingGif from "./images/loading.gif";
import error from "./images/error.gif";

const Bookings = ({
  bookings,
  setBookings,
  status,
  getBookings,
  urlToFetch
}) => {
  useEffect(() => {
    getBookings();
  }, []);

  const search = searchVal => {
    return setBookings(
      bookings.filter(booking => {
        return (
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  };
  return (
    <div className="App-content">
      <div className="container">
        {status === "fetching" && (
          <div>
            <img src={loadingGif} className="loading" alt="loading gif" />{" "}
            <p>Loading, Please Wait</p>
          </div>
        )}
        {status === "success" && (
          <>
            <Search search={search} />
            <SearchResults results={bookings} urlToFetch={urlToFetch} />
          </>
        )}
        {status === "failed" && (
          <div>
            <img src={error} className="loading" alt="loading gif" />{" "}
            <p>Sorry, something went wrong</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
