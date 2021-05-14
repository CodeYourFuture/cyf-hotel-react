/* eslint-disable indent*/
import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import bookingData from "./data/fakeBookings.json";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = (searchVal, event) => {
    console.info("TO DO!", searchVal);
    event.preventDefault();
  };
  const toLowerCase = customerName => {
    return customerName.toLowerCase();
  };
  useEffect(searchVal => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        data = data;
        setBookings(data => {
          return data.filter(elem =>
            [elem.firstName.toLowerCase(), elem.surname.toLowerCase()].includes(
              searchVal.toLowerCase()
            )
          );
        });
      });
    // console.log("Amazing react project");
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      <SearchResults data={bookings} />
    </div>
  );
};

export default Bookings;
