import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [id, setId] = useState(null);
  const [bookings, setBookings] = useState([]);
  const search = searchVal => {
    let newData = bookings.filter(
      customer =>
        customer.firstName === searchVal || customer.surname === searchVal
    );
    setBookings(newData);
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          return alert(`Your error is ${res.status}${res.statusText}`);
        }
      })
      .then(data => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  function getCustomerId(userId) {
    setId(userId);
    console.log("User Id", userId);
  }

  if (bookings.length > 0) {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults
            results={bookings}
            getCustomerId={getCustomerId}
            id={id}
          />
        </div>
      </div>
    );
  } else {
    return <h1>Content Loading...</h1>;
  }
};

export default Bookings;
