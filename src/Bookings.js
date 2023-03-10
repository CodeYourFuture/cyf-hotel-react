import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [searchValue, setSearchValue] = useState("") 
  const onSearch = searchVal => {
setSearchValue (searchVal)
    console.info("TO DO!", searchVal);
  };
 
const [bookings, setBookings] = useState([]);

useEffect(()=>{
  console.log("using API for data");

  fetch ("https://cyf-react.glitch.me")
  .then(res => res.json())
  .then((data) => {
    setBookings(data);
  });
},[setBookings]);

    const filterBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchValue.toLowerCase())
    );
  
  return (
    <div className="App-content">
      <div className="container">
        <Search search={searchValue} setSearch={onSearch} />
         <SearchResults results={searchValue? filterBookings : FakeBookings} /> 
      </div>
    </div>
  );
};

export default Bookings;
