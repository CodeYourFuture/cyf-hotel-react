import React, { useState, useEffect } from "react";
import SearchResults from "./SearchResults";
import Search from "./Search";
//import FakeBookings from "./data/fakeBookings.json";
//import Restaurant from "./Restaurant";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialData, setInitialData] = useState("fetching");

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInitialData(data);
        setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      initialData.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.error ? "Something went wrong" : ""}
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
