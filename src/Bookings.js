import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults";
import NewForm from "./NewForm";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);

  const bookingRecord = data => {
    setBookings(bookings.concat(data));
  };

  const [loading, setLoading] = useState(true);
  const [catchError, setCatchError] = useState(false);
  const [displayError, setDisplayError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-hotel-1.glitch.me/bookings`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.status + "" + response.url);
        }
        return response.json();
      })
      .then(data => {
        setBookings(data);
        setLoading(false);
      })
      .catch(error => {
        setCatchError(true);
        setDisplayError(error);
      });
  }, []);

  const search = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    let filtered = [];
    bookings.forEach(booking => {
      if (
        booking.firstName.toLowerCase() === searchTerm ||
        booking.lastName.toLowerCase() === searchTerm
      ) {
        filtered.push(booking);
      }
    });
    setBookings(filtered);
    console.info("TO DO!", filtered);
  };

  return (
    <div className="content">
      <div className="container1">
        <Search search={search} />
        {catchError ? (
          <div> ERRORR ({displayError.toString()})</div>
        ) : !loading ? (
          <SearchResults fakeBookings={bookings} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="newRecord">
        <NewForm bookingRecord={bookingRecord} />
      </div>
    </div>
  );
};

export default Bookings;
