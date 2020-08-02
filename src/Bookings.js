import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchResults from "./SearchResults";
import InputForm from "./InputForm";

const Bookings = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => {
        if (!res.ok) {
          throw Error("Sorry. Page cannot be loaded");
        }
        return res.json();
      })
      .then(
        data => {
          setIsLoaded(true);
          setBookings(data);
        },
        error => {
          setIsLoaded(true);
          console.log(error);
          setError(error);
        }
      );
  }, []);

  const search = searchVal => {
    const selectedBooking = bookings.filter(
      item =>
        item.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        item.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(selectedBooking);
  };

  const addBooking = newBooking => {
    const id = bookings.length + 1;
    setBookings([...bookings, { id, ...newBooking }]);
  };

  if (error) {
    console.log(error);
    return <h2 className="text-center text-danger"> {error.message}</h2>;
  } else if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center text-primary m-5">
        <div className="spinner-border" role="status" />
      </div>
    );
  } else {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults results={bookings} setBookings={setBookings} />
        </div>
        <div className="d-flex justify-content-center">
          <InputForm addBooking={addBooking} />
        </div>
      </div>
    );
  }
};

export default Bookings;
