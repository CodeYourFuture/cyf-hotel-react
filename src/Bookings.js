import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import Loading from "./Loading.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("https://cyf-react.glitch.me");
    const data = await res.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = searchVal => {
    const newBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });

    setBookings(newBookings);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? <Loading /> : <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
