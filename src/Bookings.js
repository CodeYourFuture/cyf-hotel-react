import React, { useEffect, useState } from "react";
import Loading from "./Loading.js";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = ({ appMode }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredBookings, setFilteredBookings] = useState(bookings);
  const search = searchVal => {
    setFilteredBookings(
      bookings.filter(
        ({ firstName, surname }) =>
          firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(appMode)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        setBookings(data);
        setFilteredBookings(data);
        setLoading(false);
      });
  }, [appMode]);
  if (loading) return <Loading />;
  if (error)
    return <h4 className="alert alert-warning text-center">{error}</h4>;
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;
