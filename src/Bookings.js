import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import UrlNotWorking from "./UrlNotWorking.js";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [customerProfile, setCustomerProfile] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [view, setView] = useState("viewOff");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((error) => {
        const urlNotWorking = "Not Found";
        setBookings(urlNotWorking);
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

  if (bookings === "Not Found") {
    props.setCount(1);
    return <UrlNotWorking />;
  }
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          booking={filteredBookings}
          setCustomerId={setCustomerId}
          setCustomerProfile={setCustomerProfile}
          setView={setView}
          view={view}
        />
        <CustomerProfile
          customerId={customerId}
          customerProfile={customerProfile}
          view={view}
        />
      </div>
    </div>
  );
};

export default Bookings;
