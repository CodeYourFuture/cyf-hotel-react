import React from "react";
import { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json"; // API does not get fetched as it should

function Bookings() {
  let [bookings, setBookings] = useState(fakeBookings);
  let [message, setMessage] = useState("Loading...");

  // useEffect(() => {
  //   fetch("https://cyf-react.glitch.me/delayed")
  //     .then(response => {
  //       if(response.status >= 200 && response.status <= 299) {
  //         response.json()
  //       }
  //       else {
  //         throw Error(response.statusText);
  //       }})
  //     .then(json => setBookings(json))
  //     .catch(error => setMessage(String(error)))
  // }, []);

  function search(searchVal) {
    let results = [];

    for (let i = 0; i < bookings.length; ++i) {
      if (
        searchVal.toLowerCase().includes(bookings[i].firstName.toLowerCase()) ||
        searchVal.toLowerCase().includes(bookings[i].firstName.toLowerCase())
      ) {
        results.push(bookings[i]);
      }
    }
    setBookings(results);
  }

  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    );
  } else {
    return <h5 id="loading-bookings">{message}</h5>;
  }
}

export default Bookings;
