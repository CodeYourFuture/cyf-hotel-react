import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResult from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import LoadingMessage from "./LoadingMessage.js";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          props.setError(true);
        } else {
          setLoadingData(true);
          setBookings(data);
        }
      });
  }, []);
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    let filter = bookings.filter(
      (item) =>
        item.firstName.toUpperCase().includes(searchVal.toUpperCase()) ||
        item.surname.toUpperCase().includes(searchVal.toUpperCase())
    );
    return setBookings(filter);
  };
  const [customerId, setCustomerId] = useState(null);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResult setCustomerId={setCustomerId} data={bookings} />
        <LoadingMessage state={loadingData} />
        {customerId !== null ? <CustomerProfile id={customerId} /> : ""}
      </div>
      )
    </div>
  );
};

export default Bookings;
