import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import InputFormForTable from "./Input-Form-For-Table.js"


const Bookings = () => {
  const [bookings, setBookings] = useState([])

  // get all data
  function doingFetch() {
    fetch("https://olha-danylevska-hotel-booking-server.onrender.com/bookings")
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

  useEffect(() => {
    doingFetch()
    console.log({ bookings })
  }, []);// square brackets to load fetch only once


  return (
    <div className="App-content">
      <div className="container">
        <Search setBookings={setBookings} />
        <InputFormForTable bookings={bookings} setBookings={setBookings} />
      </div>
    </div >
  );
};




export default Bookings;