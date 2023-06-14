import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";



const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, setBookings] = useState([])

  function doingFetch() {
    fetch("https://cyf-react.glitch.me")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status)
        } else {
          return response.json()
        }

      })
      .then((data) => {
        console.log("data----->", data)
        if (data) setBookings(data)
      })
  }
  useEffect(() => {
    doingFetch()
  }, []);


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};




export default Bookings;