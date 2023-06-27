import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";



const Bookings = () => {
  const [bookings, setBookings] = useState([])

  function search(searchVal) {
    if (searchVal !== 0) {

    }
    searchVal.toLowerCase()
    const filteredBookings = bookings.filter(oneBooking => {
      return oneBooking.firstName.toLowerCase().includes(searchVal) || oneBooking.surname.toLowerCase().includes(searchVal)
    })
    setBookings(filteredBookings)

    console.info("TO DO!", filteredBookings);
  };


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
        if (data) setBookings(data)
      })
  }
  useEffect(() => {
    doingFetch()
  }, []);// square brackets to load fetch only once


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};




export default Bookings;