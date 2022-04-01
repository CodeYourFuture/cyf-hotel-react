import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  // const [color, changeColor] = useState(true);
  // let switchColor = () => {
  //   changeColor(!color);
  // };

  const [bookings, setBookings] = useState(FakeBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        <SearchResults results={bookings} />
        {/* // colors={color?'bg-white' : 'bg-info'} switchColor = {switchColor}/> */}
      </div>
    </div>
  );
};

export default Bookings;
