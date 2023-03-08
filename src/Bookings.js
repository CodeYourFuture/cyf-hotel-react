import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = ( ) => {
  const [Bookings,setBookings]= React.useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={Bookings} />
      </div>
    </div>
  );
};

export default Bookings;