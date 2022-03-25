import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";
// check the shape of the data

//use map to convert
const Bookings = () => {
  // const Search = (searchVal) => {
  return (
    <div className="App-content">
      <div className="container">
        <Search search={Search} />
        {/* //using the results method to for the table */}
        <SearchResults results={fakeBookings} />
      </div>
    </div>
  );
  // };
};
export default Bookings;
