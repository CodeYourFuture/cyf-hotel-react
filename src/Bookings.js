import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialData, setInitialData] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setInitialData(data);
        setBookings(data);
      });
  }, []);
  // console.log(FakeBookings);
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
