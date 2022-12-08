import React, { useState, useEffect, useContext } from "react";
import Search from "./Search.js";
import SearchResults from "./myComponents/table/SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import ThemeContext from "./myComponents/ThemeContext";

const Bookings = () => {
  const theme = useContext(ThemeContext);
  const [bookings, setBookings] = useState(FakeBookings);

  // useEffect(() => {
  //   fetch("./data/fakeBookings.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setBookings(data);
  //     });
  // }, []);

  const search = searchVal => {
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
