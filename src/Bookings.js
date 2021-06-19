import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filteredNames = bookings.filter(booking => {
      return (
        booking.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        booking.surname.toUpperCase().includes(searchVal.toUpperCase())
      );
    });
    setBookings(filteredNames);
  };
  const [bookings, setBookings] = useState([]);
  const [customerId, setCustomerId] = useState();

  function handleProfile(e) {
    setCustomerId(e.target.id);
    // console.log(e.target.id);
  }
  useEffect(() => {
    // console.log("Some Text");
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} handleProfile={handleProfile} />
        <CustomerProfile customerId={customerId} />
      </div>
    </div>
  );
};

export default Bookings;
