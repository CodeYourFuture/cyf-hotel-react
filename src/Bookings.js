import React, { useEffect, useState } from "react";
// import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Search from "./Search.js";
import FakeBookings from "./data/fakeBookings.json";
import NewCustomer from "./NewCustomer.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const [displayBookings, setDisplayBookings] = useState(FakeBookings);

  const search = searchVal => {
    const filteredNames = bookings.filter(item => {
      return (
        item.firstName.toLowerCase().match(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().match(searchVal.toLowerCase())
      );
    });

    setDisplayBookings(filteredNames);
    // alert(searchVal);
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
  useEffect(() => {
    setDisplayBookings(bookings);
  }, [bookings]);
  const addCustomer = newCustomer => {
    setBookings(bookings.concat(newCustomer));
  };

  return !bookings.error ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <NewCustomer addCustomer={addCustomer} />
        <SearchResults results={displayBookings} />
      </div>
    </div>
  ) : (
    <>{bookings.error}</>
  );
};

export default Bookings;
