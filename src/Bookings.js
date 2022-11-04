import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [guestBookings, setGuestBookings] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setMessage] = useState(true);
  const [error, setError] = useState(null);
  const search = searchMessage => {
    let filteredData = guestBookings.filter(
      booking =>
        booking.firstName.includes(searchMessage) ||
        booking.surname.includes(searchMessage)
    );
    setBookings(filteredData);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(res => {
        if (!res.ok) {
          throw Error("One Moment An Error was detected!");
        }
        return res.json();
      })
      .then(data => {
        setBookings(data);
        setGuestBookings(data);
        setMessage(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <div className="errorContainer">
        {!error ? (
          isLoading ? (
            <div> Guest List Loading ...</div>
          ) : (
            <>
              {" "}
              <Search search={search} />
              <SearchResults results={bookings} />
            </>
          )
        ) : (
          error && <p>{error}</p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
