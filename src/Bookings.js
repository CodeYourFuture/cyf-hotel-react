import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import fakeBookings from "./data/fakeBookings.json";
const Bookings = () => {
  // const [bookings, setBookings] = useState([]);
  // useEffect(()=>{
  //   fetch("https://cyf-react.glitch.me")
  //     .then((response) => response.json())
  //     .then((data) => setBookings(data))
  //     .catch((err) => console.error(err));
  // })

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* {<SearchResults results={(bookings)} />} */}
        {<SearchResults results={fakeBookings} />}
      </div>
    </div>
  );
};

export default Bookings;
