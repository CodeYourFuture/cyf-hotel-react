import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [data, setData] = useState();
  const [customerBk, setCustomerBk] = useState([]);

  function customerProfileBk(id) {
    console.log(id);
    setCustomerBk(id);
  }

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setBookings(data);
      })
      .catch(err => console.log(err));
  }, []);

  const search = searchVal => {
    setBookings(
      data.filter(el => {
        return (
          el.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          el.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults
          bkings={Bookings}
          results={bookings}
          customerProfileBk={customerProfileBk}
        />
        <CustomerProfile customerBk={customerBk} />
      </div>
    </div>
  );
};

export default Bookings;
