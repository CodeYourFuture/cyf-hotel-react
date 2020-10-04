import React, { useEffect, useState } from "react";
// import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    setBookings(
      bookings.filter(item =>
        item.firstName.toLowercase().match(searchVal.toLowercase())
      )
    );
    alert(searchVal);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        setBookings(data);
      });
  }, []);

  return !bookings.error ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <>{bookings.error}</>
  );
};

export default Bookings;
