import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm.js";
import Search from "./Search.js";
//import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        //setIsLoading(false);
      });
  }, []);
  if (error) {
    return <h1>Error:{error.message}</h1>;
  }

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        booking =>
          booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <BookingForm bookings={bookings} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
