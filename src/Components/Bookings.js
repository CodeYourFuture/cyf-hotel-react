import React, { useState, useEffect } from "react";
import Search from "./Bookings/Search.js";
import SearchResults from "./Bookings/SearchResults.js";

const Bookings = props => {
  console.log("This is props.NewEntry converted", Object.fromEntries(props.NewEntry));
  let convertedEntry = Object.fromEntries(props.NewEntry);
  const search = searchVal => {
    if (searchVal.length > 0) {
      let lowerCase = searchVal.toLowerCase();
      console.info("TO DO!", searchVal);
      // eslint-disable-next-line
      const filteredBookings = hotelBookings.filter(booking => {
        if (
          booking.firstName.toLowerCase() === lowerCase ||
          booking.surname.toLowerCase() === lowerCase
        ) {
          return booking;
        }
      });
      setHotelBookings(filteredBookings);
    } //trying to reset table if search is clicked with an empty input
    else {
      fetch(`https://cyf-react.glitch.me`)
        .then(res => res.json())
        .then(data => setHotelBookings(data))
        .catch(err => console.log(err));
    }
  };
  const [hotelBookings, setHotelBookings] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          throw new Error(`${res.status}:${res.text}`);
        }
      })
      .then(data => setHotelBookings(data))
      .catch(err => {
        setHotelBookings([]);
        alert(err);
      });
  }, []);
  console.log("This is converted entry length",Object.keys(convertedEntry).length);
  // for(let i = 0; i< 1; i++){
  //   setHotelBookings(hotelBookings.concat(convertedEntry));
  //   console.log("This is in conditional statement",hotelBookings);
  // }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={hotelBookings} />
      </div>
    </div>
  );
};

export default Bookings;
