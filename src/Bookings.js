import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const search = searchVal => {
    setFilteredBookings(
      bookings.filter(
        guest =>
          guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  useEffect(() => {
    fetch(props.bookingData)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(true);
        }
        setBookings(data);
        setFilteredBookings(data);
        setLoading(true);
      });
  }, [props]);
  if (!loading) {
    return (
      <h2 className="border border-light p-3 mb-4 text-center">
        Loading . . .
      </h2>
    );
  }
  if (error) {
    return (
      <h2 className="border border-light p-3 mb-4 text-center">
        Failing to Load Data, Please Try Later.
      </h2>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults guest={filteredBookings} />
        </div>
      </div>
    );
  }
};

export default Bookings;
