import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const search = searchVal => {
    const filterCustomer = pageLoad.filter(
      customer =>
        customer.firstName === searchVal || customer.surname === searchVal
    );
    console.log(filterCustomer);
    console.info("TO DO!", searchVal);
    // console.log(pageLoad);
  };

  const [pageLoad, setPageLoad] = useState([]);
  console.log(pageLoad);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => setPageLoad(data));
    console.log("loading...");
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={pageLoad} />
      </div>
    </div>
  );
};

export default Bookings;
