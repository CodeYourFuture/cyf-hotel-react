import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  
  useEffect(() => {
    console.log("Component is mounted!");
    fetch("https://temporary-cyf-react.onrender.com/")
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

    const search = (searchVal) => {
    const result=bookings.filter((person) => 
    person.firstName === searchVal || person.surname === searchVal);
    setBookings(result);
    console.log(person)

  };


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
}

export default Bookings;
