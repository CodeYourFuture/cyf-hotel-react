import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const search = searchVal => {
  //   console.info("TO DO!", searchVal);
  // };
const [booking, setBooking]=useState(fakeBookings);
  return (
    <div className="bookings">
      <h2>Bookings</h2>
    
  <SearchResults  bookings={Bookings} /> 
        {/* <SearchResults results={FakeBookings} /> */}
      </div>
  
  );
};

export default Bookings;
