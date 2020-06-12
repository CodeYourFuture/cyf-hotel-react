import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingData, setBookingData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(respose => respose.json())
      .then(data => {
        setBookings(data);
        setBookingData(data);
      })
      .catch(err => setErrorMessage(err));
  }, []);
  const search = searchVal => {
    let result =
      searchVal !== ""
        ? bookingData.filter(
            element =>
              element.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1 ||
              element.surname.toLowerCase().indexOf(searchVal.toLowerCase()) >
                -1
          )
        : bookingData;
    setBookings(result);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {bookings.length > 0 ? (
          <SearchResults results={bookings} />
        ) : errorMessage === "" ? (
          <p className="P_Loading_CSS"> Loading . . . </p>
        ) : (
          <p className="P_Loading_CSS"> {errorMessage} </p>
        )}
      </div>
    </div>
  );
};

export default Bookings;
