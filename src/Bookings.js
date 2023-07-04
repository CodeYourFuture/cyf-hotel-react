import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import InputFormForTable from "./Input-Form-For-Table.js"



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
          console.log(response.status)
          setBookings(response.status)
          throw new Error(response.status)
        } else {
          return response.json()
        }

      })
      .then((data) => {
        data && setBookings(data)
      })
  }

  console.log({ bookings })
  useEffect(() => {
    doingFetch()
  }, []);// square brackets to load fetch only once

  console.log({ bookings })
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <InputFormForTable bookings={bookings} setBookings={setBookings} />
      </div>
    </div >
  );
};




export default Bookings;