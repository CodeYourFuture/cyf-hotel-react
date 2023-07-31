import React, {useState, useEffect} from "react";
import Search from "../Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
const [bookings, setBookings] = useState({});


useEffect( () => {
  console.log('hello')
 const bookings = fetch("https://cyf-react.glitch.me")
 .then(response => (response.json()) )
 .then(data => setBookings(data))
 console.log(bookings)
}, [])


  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

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
