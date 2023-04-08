import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "./LoadingSpinner.js";
import { NewBookingForm } from "./NewBookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const search = searchVal => {
    const filteredBookings = bookings.filter(item => {
      return (
        item.firstName.toLowerCase().includes(searchVal) ||
        item.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filteredBookings, searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      // fetch(`https://cyf-react.glitch.me/delayed`)
      // fetch("https://cyf-react.glitch.me/error")
      .then(response => {
        if (!response.ok) {
          setLoading(false);
        }
        return response.json();
      })
      .then(data => {
        setErrorMessage(data.error);
        setBookings(data);
      })
      .catch(error => {
        setErrorMessage(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return loading === true ? (
    <LoadingSpinner />
  ) : !!errorMessage ? (
    <div>{errorMessage}</div>
  ) : (
    <div>
      <NewBookingForm />
      <div>
        <Search findingCustomersInfo={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
    // )
  );
};

export default Bookings;
