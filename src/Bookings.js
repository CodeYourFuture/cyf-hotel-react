import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import { useState } from "react";
import { useEffect } from "react";

const Bookings = () => {
  // const [bookings] = useState(FakeBookings);
  const [bookings, setBookings] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    const filteredBookings = bookings.filter(person => {
      // object destruction
      const { firstName, surname } = person;

      return (
        firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });

    setBookings(filteredBookings);
  };

  useEffect(() => {
    setDataLoading(true);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBookings(data);
        setDataLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {dataLoading ? <h4 className="loadingData">Data Loading...</h4> : ""}
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
