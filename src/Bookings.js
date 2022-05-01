import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => res.json())

      .then(data => {
        setCurrentData(data);
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      currentData.filter(
        value =>
          value.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          value.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading ? (
          "LOADING..."
        ) : (
          <>
            <Search search={search} />
            <SearchResults results={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
