import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([])
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
   useEffect(() => {
     fetch(`https://cyf-react.glitch.me`)
       .then((res) => res.json())
       .then((data) => {
         setBookings(data);
       });
   }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          results={bookings}
        />
      </div>
    </div>
  );
};

export default Bookings;
