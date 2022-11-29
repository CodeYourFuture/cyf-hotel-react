import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./Component/SearchResults/SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import fakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setInitialData(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    // setBookings("TO DO!", searchVal);
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.error ? "something went wrong" : ""}
        <SearchResults results={bookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;
