import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    bookings.filter(name =>
      name.firstName.toLowerCase() === searchVal.toLowerCase() ||
      name.surname.toLowerCase() === searchVal.toLowerCase() ||
      name.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
      name.surname.toLowerCase().includes(searchVal.toLowerCase())
        ? setBookings([name])
        : -1
    );
  };

  useEffect(() => {
    //  console.log('hello')
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => setBookings(data));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};
export default Bookings;
