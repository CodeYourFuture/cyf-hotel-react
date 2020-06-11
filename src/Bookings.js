import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import "./App.css";

const Bookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //start loading
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())
      //finish loading
      .then(data => {
        setIsLoading(false);
        setBookingData(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchResult = bookingData.filter(person => {
      return (
        person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        person.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookingData(searchResult);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <SearchResults results={bookingData} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
