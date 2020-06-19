import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";
import FormOfBooking from "./FormOfBooking";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setBookings(data);
      })

      .catch(err => setError(err));
  }, []);

  const search = searchVal => {
    const searchFiltered = bookings.filter(
      element =>
        element.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchFiltered);
  };

  return (
    <div className="row">
      <div className="">
        <Search search={search} />
        {error ? <p>API ERROR</p> : <p>loading page... </p>}
        <SearchResults results={bookings} />
        <FormOfBooking />
      </div>
    </div>
  );
};

export default Bookings;
