import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(async () => {
    try {
      const res = await fetch("https://cyf-react.glitch.me/");
      if (res.status >= 200 && res.status < 300) {
        const data = await res.json();
        setBookings(data);
        setLoading(false);
      } else {
        setLoading(false);
        setError(true);
        throw new Error(res.status);
      }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log(error);
    }
  }, []);
  const search = searchVal => {
    const newBooking = bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(newBooking);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error && <p>error ...</p>}
        {loading ? "loading...." : <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
