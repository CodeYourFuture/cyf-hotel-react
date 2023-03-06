import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  // let booking = () =>{
  //   setBookings(bookings.concat(FakeBookings));
  // }

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
