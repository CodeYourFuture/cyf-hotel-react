import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import BookingForm from "./BookingForm.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        return res.json();
      })
      .then(data => {
        return setBookings(data);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const hasFiltered = bookings.filter(item => {
      return (
        item.firstName.toLowerCase().includes(searchVal) ||
        item.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(hasFiltered);
  };

  const addCustomer = customer => {
    customer.id = bookings.length + 1;
    setBookings([...bookings, customer]);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          setHasError(true);
        }
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(error => setHasError(true));
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
      </div>
      {hasError ? (
        <div>Oh no something went wrong!</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <SearchResults results={bookings} />
      )}
      <div>
        <BookingForm addCustomer={addCustomer} />
      </div>
    </div>
  );
};
export default Bookings;
