import React, { useState, useEffect } from "react";
import "./Bookings.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";
//import FakeBookings from "./data/fakeBookings.json";     // Test Data

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [id, setId] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);

  const search = searchVal => {
    if (bookings.length < 1) {
      return;
    }

    searchVal = searchVal.toLowerCase();
    let bookingList = searchResults.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal) ||
        booking.surname.toLowerCase().includes(searchVal)
      );
    });
    if (bookingList.length > 0) {
      console.log("Search Results", bookingList);
      setBookings(bookingList);
    }
  };

  const showProfile = e => {
    console.log("showProfile", e.target.id);
    setId(e.target.id);
  };

  useEffect(_ => {
    //   fetch("https://cyf-react.glitch.me")               //   fetch customer data without simulated delay
    //  fetch("https://cyf-react.glitch.me/error")      //   fail to fetch customer data - genrate 500 error
    fetch("https://cyf-react.glitch.me/delayed") //   fetch customer data with simulated delay
      .then(res => {
        if (res.status >= 500) {
          setErrorStatus(res.status);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setSearchResults(data);
      })
      .catch(error => {
        console.error("MY ERROR!!!", error);
        setErrorStatus(error);
      });
  }, []);

  if (errorStatus) {
    return <div id="fetch-error-message">{errorStatus}</div>;
  } else {
    if (bookings.length) {
      return (
        <div className="App-content">
          <div id="customer-info-container">
            <div className="container-fluid">
              <Search search={search} />
              <SearchResults results={bookings} handler={showProfile} />
            </div>
            <CustomerProfile customerID={id} />
          </div>
        </div>
      );
    } else {
      return (
        <div id="customer-info-container">
          <div id="loading" className="btn-primary">
            Loading...
          </div>
        </div>
      );
    }
  }
};

export default Bookings;
