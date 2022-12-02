import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [customerProfile, setCustomerProfile] = useState([]);

  useEffect(() => {
    const getBookings = async () => {
      const res = await fetch("https://cyf-react.glitch.me");

      if (res.status === 200) {
        const data = await res.json();
        setBookings(data);

        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
      }
    };

    getBookings();
  }, []);

  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );
  };

  const showProfile = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);

    if (res.status === 200) {
      const data = await res.json();
      setCustomerProfile(data);
    }
  };

  return (
    <div className="App-content">
      <div className="container-fluid">
        <Search search={search} />
        <div className="cont-search-results">
          {loading ? <h1>Loading...</h1> : <></>}

          {error ? <h1>Error...</h1> : <></>}

          {!loading && !error ? (
            <>
              <SearchResults bookings={bookings} showProfile={showProfile} />
              <CustomerProfile customerProfile={customerProfile} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
