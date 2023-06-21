import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [customerProfile, setCustomerProfile] = useState("");
  const [customerId, setCustomerId] = useState("");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    const searchedBookings = bookings.filter(
      (searchedNames) =>
        searchedNames.firstName
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        searchedNames.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredBookings(searchedBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          booking={filteredBookings}
          setCustomerId={setCustomerId}
          setCustomerProfile={setCustomerProfile}
        />
        <CustomerProfile
          customerId={customerId}
          customerProfile={customerProfile}
        />
      </div>
    </div>
  );
};

export default Bookings;
