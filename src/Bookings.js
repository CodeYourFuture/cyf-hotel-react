import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("Loading...");

  const search = searchVal => {
    console.info("TO DO!", searchVal);

    let searchFilter = bookings.filter(guest => {
      let formattedSearchVal = searchVal.toLowerCase();
      return (
        guest.firstName.toLowerCase().includes(formattedSearchVal) ||
        guest.surname.toLowerCase().includes(formattedSearchVal)
      );
    });
    setBookings(searchFilter);
  };

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(
        data => {
          setBookings(data);
        },
        error => {
          setError("An error has occurred");
        }
      );
  }, []);

  console.log(error);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <div>
          {bookings.length > 0 ? (
            <SearchResults bookings={bookings} />
          ) : (
            <span>{error}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
