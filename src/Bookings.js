import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./components/SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState();
  const [loading, setLoading] = useState(true);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    const filtering = bookings.filter(item => {
      return (
        item.firstName.toLowerCase() === searchVal.toLowerCase() ||
        item.surname.toLowerCase() === searchVal.toLowerCase()
      );
    });
    setBookings(filtering);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed")
      .then(response => {
        return response.json();
      })
      .then(result => {
        setBookings(result);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? (
          <SearchResults results={bookings} setBookings={setBookings} />
        ) : (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
