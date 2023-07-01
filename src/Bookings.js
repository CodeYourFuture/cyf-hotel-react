import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [searchVal, setSearchVal] = useState("");

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setSearchVal(searchVal);
  };

  useEffect(() => {
    Axios.get("https://cyf-react.glitch.me").then((res) => {
      setBookings(res.data);
    });
  }, []);

  const searchOutCome = bookings.filter(
    (el) => el.firstName.includes(searchVal) || el.surname.includes(searchVal));

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={searchOutCome} />
      </div>
    </div>
  );
};

export default Bookings;
