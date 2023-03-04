import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  let allBookings;
  const search = (searchVal) => {
    console.log(searchVal);
    if (searchVal === "") {
      setBookings(allBookings);
    } else {
      const customerSearch = bookings.filter((customerName) => {
        return (
          customerName.firstName.toLowerCase().includes(searchVal) ||
          customerName.surname.toLowerCase().includes(searchVal)
        );
      });
      setBookings(customerSearch);
    }
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        allBookings=(data);
        setBookings(allBookings);
      })
      .catch((error) => console.log(error));
  }, []);

  // function search (searchInput) {
  //   console.info(searchInput);
  // };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookingResults={bookings} />
      </div>
    </div>
  );
}

export default Bookings;
