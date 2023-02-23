import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [profile, setprofile] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw Error("Could not connect");
        }
        return res.json();
      })
      .then(data => {
        setisLoading(false);
        setBookings(data);
        setError(null);
      })
      .catch(error => {
        setisLoading(false);
        setError(error.message);
      });
  }, []);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    searchVal = searchVal.toLowerCase();
    const filteredBookings = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal ||
        booking.surname.toLowerCase() === searchVal
    );
    setBookings(filteredBookings);
  };

  const fetchData = async id => {
    const res = await fetch(`https://cyf-react.glitch.me/customers/${id}`);
    const data = await res.json();
    setprofile(data);
  };
  function showProfile(id) {
    fetchData(id);
  }

  return (
    <div className="App-content">
      <div className="container">
        {isLoading ? <div>Is Loading...</div> : <></>}
        {error ? <div>{error}</div> : <></>}
        <Search search={search} />
        <SearchResults results={bookings} showProfile={showProfile} />
        <CustomerProfile customerProfile={profile} />
      </div>
    </div>
  );
};
export default Bookings;
