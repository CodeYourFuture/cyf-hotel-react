import React, { useEffect, useState } from "react";
import CustomerProfile from "./components/CustomerProfile .jsx";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
const Bookings = () => {
  const [booking, setBooking] = useState([]);
  const [customerProfile, setcustomerProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const search = searchVal => {
    searchVal = searchVal.toLowerCase();
    setBooking(
      booking.filter(
        booking =>
          booking.firstName.toLowerCase() === searchVal ||
          booking.surname.toLowerCase() === searchVal
      )
    );
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          setLoading(false);
          setError(true);
        }
      })
      .then(data => {
        setLoading(false);
        setError(false);
        setBooking(data);
      })
      .catch(erorr => setError(true));
  }, []);

  const showProfile = async custmerId => {
    const res = await fetch(
      `https://cyf-react.glitch.me/customers/${custmerId}`
    );
    if (res.status === 200) {
      const data = await res.json();
      setcustomerProfile(data);
    } else {
      setError(false);
    }
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <h1>Loding...</h1>
        ) : (
          <>
            {" "}
            <SearchResults bookings={booking} showProfile={showProfile} />
            <CustomerProfile customerProfile={customerProfile} />
          </>
        )}
        {error ? (
          <>
            {" "}
            <h1>Whoops something went wrong!</h1>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Bookings;
