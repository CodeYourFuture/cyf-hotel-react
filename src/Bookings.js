import React, { useEffect, useState, useRef } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import LoadingMessage from "./LoadingMessage";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const allBookings = useRef([]); // to use when searching name or surname
  const [loading, setLoading] = useState(true); // to show loading message
  const [error, setError] = useState(null); // to show loading message

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
    fetch("https://cyf-react.glitch.me/").then(response =>
      response.json().then(data => {
        setLoading(false); // Ending loading
        // Check if response is 200 OK, otherwise error out
        if (!response.ok) {
          setError(data?.error);
          return;
        }
        setBookings(data);
        allBookings.current = data;
      })
    );
  }, []);

  return (
    // show message if "loading" state is true | If found an error show error message | render all bookings if all good
    <div className="App-content">
      {loading ? (
        <LoadingMessage />
      ) : error != null ? (
        <h1>Error {error}</h1>
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
