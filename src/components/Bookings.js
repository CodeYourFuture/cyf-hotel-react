import React from "react";
import Search from "./components/Search.js";
import SearchResults from "./components/SearchResults.js";
import fakeBookings from "../components/data/fakeBookings.json";
// check the shape of the data

//use map to convert
const Bookings = () => {
  const Search = (searchVal) => {
    <div className="App-content">
      <div className="container">
        <Search search={Search} />
        {/* //using the results method to for the table */}
        <SearchResults results={fakeBookings} />
      </div>
    </div>;
  };
};
export default Bookings;
