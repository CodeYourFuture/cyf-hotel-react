import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  let [searchResults, setSearchResults] = useState(bookings);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
  .then((response) => response.json())
  .then((data) => setBookings(data))}, []);
    
  const search = (searchVal) => {
  console.info("TO DO!", searchVal);
   searchVal !== ""
     ? setSearchResults(
         bookings.filter((booking) =>
           booking.firstName
             .toLowerCase()
             .includes(
               searchVal.toLowerCase() ||
                 booking.surname.toLowerCase().includes(searchVal.toLowerCase())
             )
         )
       )
     : setSearchResults(bookings);
  
  };
   
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={searchResults} />
      </div>
    </div>
  );
};

export default Bookings;
