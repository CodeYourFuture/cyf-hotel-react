import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult.js";
import ShowProfile from "./CustomerProfile.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("page loaded");
    fetch("https://cyf-react.glitch.me").then(res =>
      res.json().then(data => {
        console.log(data);
        setBookings(data);
      })
    );
  }, []);

  const search = searchVal => {
    if (searchVal) {
      const searchResult = bookings.filter(
        singleBooking =>
          singleBooking.firstName.toLowerCase() === searchVal.toLowerCase() ||
          singleBooking.surname.toLowerCase() === searchVal.toLowerCase()
      );
      setBookings(searchResult);
    } else {
      setBookings(bookings);
      console.log("else filter");
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <>
          <SearchResults bookings={bookings} />
          <ShowProfile />
        </>
      </div>
    </div>
  );
};

export default Bookings;
