import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [status, setStatus] = useState("fetching");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setStatus("failure");
        } else {
          setStatus("success");
          setBookings(data);
        }
      });
  }, []);

  const search = searchVal => {
    let currentArray = bookings;
    if (searchVal !== "") {
      currentArray = bookings.filter(
        e =>
          e.firstName.toLowerCase() === searchVal.toLowerCase() ||
          e.surname.toLowerCase() === searchVal.toLowerCase()
      );
    }

    console.info("TO DO!", searchVal);
    setBookings(currentArray);
  };

  const [customerId, setCustomerId] = useState();
  function showCustomerId(number) {
    setCustomerId(number);
  }

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />

        {status === "success" ? (
          <SearchResults
            results={bookings}
            showCustomerIdFunction={showCustomerId}
          />
        ) : (
          <span>Loading...</span>
        )}
        <customerProfile id={customerId} />
      </div>
    </div>
  );
};

export default Bookings;
