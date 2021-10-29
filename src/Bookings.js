import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  // console.log(FakeBookings);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(result => result.json())
      .then(data => setBookings(data));
    // console.log({ data });
  }, []);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  if (bookings) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          {<SearchResults results={bookings} />}
        </div>
      </div>
    );
  } else {
    return <span>Loading ......</span>;
  }
};

export default Bookings;
