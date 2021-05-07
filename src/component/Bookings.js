import React, { useState, useEffect } from "react";
import Form from "./Form.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [appLoading, setAppLoading] = useState(false);

  const APIFetchFunction = () => {
    fetch(`https://chizim-hotel-server.herokuapp.com/bookings`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert(response.status);
          alert("Something went wrong!!!");
        }
        response.json();
      })
      .then(data => {
        setBookings(data);
      })
      .catch(error => {
        console.error("Error while fetching data", error);
      });
    setAppLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      APIFetchFunction();
    }, 5000);
  }, []);

  const search = searchVal => {
    setBookings(
      bookings.filter(
        item =>
          item.firstName.toLowerCase() === searchVal.toLowerCase() ||
          item.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
    console.info("TO DO!", searchVal);
  };

  return !appLoading ? (
    <p className=" blinker text-center display-4">
      Please wait while data is loading...
    </p>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
      <Form bookings={bookings} setBookings={setBookings} />
    </div>
  );
};

export default Bookings;
