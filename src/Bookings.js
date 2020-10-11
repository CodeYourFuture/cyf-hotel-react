import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

let recievedData;

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/")
      .then(res =>
        res.status >= 200 && res.status <= 299 ? res.json() : setError(true)
      )
      .then(data => {
        recievedData = data;
        setBookings(recievedData);
      });
  }, []);

  const search = searchVal => {
    let filteredBookings = recievedData.filter(
      data =>
        data.firstName
          .toLocaleLowerCase()
          .includes(searchVal.toLocaleLowerCase()) ||
        data.surname.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    );
    filteredBookings ? setBookings(filteredBookings) : setBookings(null);
  };

  return error ? (
    <p className="text-center"> Cannot fetch the data</p>
  ) : (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings ? (
          <SearchResults bookingsList={bookings} />
        ) : (
          <div className="container d-flex justify-content-center align-items-center">
            <div className="spinner-border text-danger my-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
