import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import CustomerProfile from "./CustomerProfile";
import Loader from "react-loader-spinner";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [customerId, setCustomerId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = `https://cyf-react.glitch.me/error`;

  const search = searchVal => {
    // console.info("TO DO!", searchVal);

    let searchQuery = searchVal.toLowerCase();
    let filtered = bookings.filter(data => {
      if (
        data.firstName.toLowerCase() === searchQuery ||
        data.surname.toLowerCase() === searchQuery
      ) {
        return data;
      }
    });
    setBooking(filtered);
  };

  const receiveCustomerId = id => {
    setCustomerId(id);
  };

  useEffect(() => {
    console.log("Fetch Some Data");

    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(setIsLoading(true))
      .then(res => res.json());
    let unmounted = false;

    setIsLoading(true);
    setHasError(false);
    fetch(url)
      .then(response => response.json())
      .then(bookingData => {
        if (!unmounted) {
          setBooking(bookingData);
          setIsLoading(false);
        }
      })
      .catch(err => {
        setHasError(true);
        setIsLoading(false);
      });
    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div className="App-content">
      {hasError ? (
        <p>Something went wrong.</p>
      ) : isLoading ? (
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      ) : (
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} setCustomerId={receiveCustomerId} />
          <CustomerProfile id={customerId} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
