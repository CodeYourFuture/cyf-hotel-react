import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  let [getResponse, setResponse] = useState("");
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setResponse(response.status);
          console.log(getResponse);
        }
      })
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, [getResponse]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    let filteredBookings = bookings.filter(function(item, index) {
      return (
        item.firstName.toLowerCase() === searchVal.toLowerCase() ||
        item.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    if (searchVal === null || searchVal === "") {
      setBookings(bookings);
    } else {
      setBookings(filteredBookings);
    }
  };

  if (!getResponse) {
    if (bookings.length > 0) {
      return (
        <div className="App-content">
          <div className="container">
            <Search search={search} />
            <SearchResults results={bookings} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <h2>Loading......</h2>
        </div>
      );
    }
  } else {
    return (
      <div className="container">
        <h1> Sorry, data not found due to server error {getResponse}</h1>
      </div>
    );
  }
};

export default Bookings;
