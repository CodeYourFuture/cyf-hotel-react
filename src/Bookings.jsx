import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = (searchVal) => {
    const result=bookings.filter((person) => 
    person.firstName === searchVal || person.surname === searchVal);
    setBookings(result);
    // console.log(person))
    
  }
  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/CodeYourFuture/cyf-hotel-react/master/src/data/fakeBookings.json`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((error) => {
        console.log(error + "in file Bookings.jsx");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} list={bookings} />
      </div>
    </div>
  );
};

export default Bookings;


