import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw Error("Error fetching data");
      })
      .then(data => {
        setBookings(data);
        setDataLoading(false);
      })
      .catch(err => {
        console.log(err.message);
        setError(true);
      });
  }, []);
  const search = searchVal => {
    let filteredSearch = bookings.filter(
      booking =>
        booking.firstName.includes(searchVal) ||
        booking.surname.includes(searchVal)
    );
    setBookings(filteredSearch);
  };

  return !error ? (
    !dataLoading ? (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} />
        </div>
      </div>
    ) : (
      <div className="text-center display-5 mb-5">
        Loading booking info...Please be patient
      </div>
    )
  ) : (
    <div className="text-center display-5 mb-5">
      "Oops, we've encountered a problem when loading the bookings data"
    </div>
  );
};

export default Bookings;
