import React, { useEffect, useState, useRef } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import LoadingMessage from "./LoadingMessage";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const allBookings = useRef([]); // to use when searching name or surname
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    const filteredBookings = allBookings.current.filter(booking => {
      const name = booking.firstName.toLowerCase();
      const lastName = booking.surname.toLowerCase();
      searchVal.toLowerCase();
      return name === searchVal || lastName === searchVal;
    });
    setBookings(filteredBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed").then(response =>
      response.json().then(data => {
        setLoading(false);
        setBookings(data);
        allBookings.current = data;
      })
    );
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <LoadingMessage />
      ) : (
        <div className="container">
          <Search search={search} />
          <SearchResults bookings={bookings} />
        </div>
      )}
    </div>
  );
};

export default Bookings;
