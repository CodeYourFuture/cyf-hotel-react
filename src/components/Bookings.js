import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBooking] = useState([]);
  const [bookingsCache, setBookingsCache] = useState([]);
  const [customerProfile, setCustomerProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const search = searchVal => {
    const searchValue = searchVal.toLowerCase();
    setBooking(
      bookingsCache.filter(element => {
        if (
          searchValue === "" ||
          element.firstName.toLowerCase().includes(searchValue) ||
          element.surname.toLowerCase().includes(searchValue)
        ) {
          return true;
        }
        return false;
      })
    );
  };

  useEffect(() => {
    const res = fetch("https://cyf-react.glitch.me/delayed")
      .then(response => response.json())
      .then(data => {
        setBookingsCache(data);
        setIsLoading(false);
        if (res.status !== 200) {
          setError(true);
        }
      });
  }, []);

  useEffect(() => {
    setBooking(bookingsCache);
  }, [bookingsCache]);

  const showProfile = async id => {
    const rest = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    if (rest.status === 200) {
      const data = await rest.json();
      setCustomerProfile(data);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading && <p className="loading" />}
        <SearchResults results={bookings} showProfile={showProfile} />
        <CustomerProfile customerProfile={customerProfile} />
        {error && <h2 className="error">{error}</h2>}
      </div>
    </div>
  );
};

export default Bookings;
