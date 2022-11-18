import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const initialError = {
    errorExists: false,
    errorStatus: 0,
    errorMessage: ""
  };
  const [bookings, setBookings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorInfo, setErrorInfo] = useState(initialError);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        el => el.firstName === searchVal || el.surname === searchVal
      )
    );
  };

  useEffect(() => {
    console.log("Fetching data...");
    // fetch(`https://cyf-react.glitch.me`);
    //fetch(`https://cyf-react.glitch.me/delayed`)
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (res.status >= 300) {
          setErrorInfo(errorInfo => ({ ...errorInfo, errorExists: true }));
          setErrorInfo(errorInfo => ({
            ...errorInfo,
            errorStatus: res.status
          }));
          setErrorInfo(errorInfo => ({
            ...errorInfo,
            errorMessage: res.statusText
          }));
          console.log(res.status, errorInfo.errorStatus);
        } else {
          return res.json();
        }
      })
      .then(data => {
        if (data) {
          setBookings(data);
          setLoaded(true);
        }
      });
  }, []);

  return (
    <div>
      {errorInfo.errorExists ? (
        <span>
          Encountered something unexpected: {errorInfo.errorStatus}{" "}
          {errorInfo.errorMessage}
        </span>
      ) : loaded ? (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};

export default Bookings;
