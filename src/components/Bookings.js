import React, { useEffect, useState } from "react";
import { Search } from "./Search";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "../data/fakeBookings.json";

import { SearchResults } from "./SearchResults";

export const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  const [booking, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
    return () => {};
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults results={booking} />
      </div>
    </div>
  );
};
