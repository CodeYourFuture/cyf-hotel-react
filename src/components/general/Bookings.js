import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import "../../css/booking.css";
import SearchResults from "./SearchResults.jsx";
import "../../css/searchresults.css";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [status, setStatus] = useState("fetching");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  const search = searchVal => {
    let filteredResult = bookings.filter(guest => {
      console.log(guest);
      console.log(searchVal);
      return (
        guest.firstName.toUpperCase() === searchVal.toUpperCase() ||
        guest.surname.toUpperCase() === searchVal.toUpperCase()
      );
    });
    console.info("TO DO!", searchVal);
    setBookings(filteredResult);
  };

  return (
    <div className="App-content">
      <div className="container">
        {isLoading === true ? (
          "LOADING.."
        ) : (
          <>
            <Search search={search} />

            <SearchResults result={bookings} />
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
