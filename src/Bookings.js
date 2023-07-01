import React, { useCallback, useEffect, useState } from "react";
import Axios from "axios";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const searchOutCome = bookings.filter(
      (el) => el.firstName.includes(searchVal) || el.surname.includes(searchVal)
    );
    setBookings(searchOutCome);
  };

  useEffect(() => {
    Axios.get("https://cyf-react.glitch.me").then((res) => {
      setBookings(res.data);
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
