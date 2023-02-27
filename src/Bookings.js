import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  let [bookings, setBookings] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  const search = (searchVal) => {
    if (bookings === [] || searchVal === "") return;
    const newGuestLists = bookings.filter((guest) => {
      if (
        guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      ) {
        return guest;
      }
    });
    setBookings(newGuestLists);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      let response = await fetch("https://cyf-react.glitch.me/delayed");
      let data = await response.json();
      setBookings(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {isLoading ? <p>Please wait for loading data...</p> : null}
      </div>
    </div>
  );
};

export default Bookings;
