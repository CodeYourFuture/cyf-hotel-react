import React from "react";
import Search from "./Search.js";
//import SearchButton from "./SearchButton.js";
import SearchResults from "./SearchResults.js";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  // const search = searchVal => {
  //   console.info("TO DO!", searchVal);
  // };

  return (
    <div className="App-content">
      <div className="container">
        <Search />
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
