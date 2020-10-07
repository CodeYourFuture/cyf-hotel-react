import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "../src/data/fakeBookings.json";
import "./index.css";

var allData;
var errorType;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const bookingRecord = () => {
    setBookings(fakeBookings + 1);
  };

  const [loading, setLoading] = useState(true);

  const [catchError, setCatchError] = useState(false);
  // const[errorType,setErrorType] = useState(null)
  const [displayError, setDisplayError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          throw Error(res.status + " _ " + res.url);
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        setDisplayError(error);
        setCatchError(true);
      });
  }, []);

  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    let filtered = [];
    bookings.forEach(record => {
      if (
        record.firstName.toLowerCase() == searchVal ||
        record.surname.toLowerCase() == searchVal
      ) {
        filtered.push(record);
      }
    });
    setBookings(filtered);
    console.info("TO DO!", filtered);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {catchError ? (
          <div>ERRRRRRROOOOORRRRRR ({displayError.toString()})</div>
        ) : !loading ? (
          <SearchResults fakeBookings={bookings} />
        ) : (
          <span>Loading ...</span>
        )}
      </div>
    </div>
  );
};

export default Bookings;
