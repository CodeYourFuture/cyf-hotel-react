import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import ErrorMessage from "../ErrorComponent/ErrorMessage.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = (searchVal) => {
    setSearchVal(searchVal);
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setFilteredBookings(filteredBookings);
  };

  const resetSearch = () => {
    setSearchVal("");
    setFilteredBookings(bookings);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me/delayed")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    < div className="mt-5 mx-3">
        <Search search={search} resetSearch={resetSearch} />
        {isLoading && <ErrorMessage errorMessage="Loading Data"/> }
        { error && <ErrorMessage errorMessage={error}/>}
        <SearchResults results={filteredBookings} />
    </div>
  );
};

export default Bookings;
