import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = (searchVal) => {
    console.log("value", searchVal);
    if (searchVal !== 0) {
      searchVal.toLowerCase();
      let filteredResults = bookings.filter((booking) => {
        return (
          booking.firstName.toLowerCase().includes(searchVal) ||
          booking.surname.toLowerCase().includes(searchVal)
        );
      });
      setBookings(filteredResults);
    }

    console.log("results", filteredResults);
  };
  function doingFetch() {
    fetch("https://cyf-react.glitch.me")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log("data", data);
        setBookings(data);
      });
  }

  useEffect(() => {
    doingFetch();
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
