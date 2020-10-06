import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    bookings.filter(el => {
      if (
        el.firstName.toLowerCase() === searchVal.toLowerCase() ||
        el.surname.toLowerCase() === searchVal.toLowerCase()
      ) {
        console.log(`${searchVal} firstname found`);
        setBookings(searchVal);
      } else {
        console.log("not found");
      }
    });
    console.log(bookings);
  };
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {/* <SearchResults /> */}
      </div>
    </div>
  );
};

export default Bookings;
