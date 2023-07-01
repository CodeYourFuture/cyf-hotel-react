import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  useEffect(() => {
    Axios.get("https://cyf-react.glitch.me").then((res) => {
      setBookings(res.data);
      // console.log(res.data[0].firstName);
    });
  }, []);

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
