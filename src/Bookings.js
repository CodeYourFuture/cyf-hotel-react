import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = (searchVal) => {
    if(searchVal){
    console.info("TO DO!", searchVal);
    const filteredBookings = hotelBookings.filter((booking)=>{
      if (booking.firstName == searchVal || booking.surname == searchVal){
    return booking;}
  });
    setHotelBookings(filteredBookings);}
    else{setHotelBookings(hotelBookings);}
  };

  const [hotelBookings, setHotelBookings] = useState([]);
  useEffect(()=>{
    fetch(`https://cyf-react.glitch.me`)
    .then((res)=> res.json())
    .then((data)=> setHotelBookings(data));
  },[]);
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
