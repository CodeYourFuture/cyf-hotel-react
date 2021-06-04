import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import BookingForm from "./BookingForm";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    let result = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() === searchVal.toLowerCase() ||
        booking.surname.toLowerCase() === searchVal.toLowerCase()
    );
    setBookings(result);
  };

  let addBooking = newBooking => {
    console.log("hello world", newBooking);
    newBooking["id"] = bookings.length + 1;
    setBookings(bookings.concat(newBooking));
  };
  useEffect(() => {
    let url = "https://cyf-yunusfirat-hotelserver.herokuapp.com/bookings";
    // let url = "https://cyf-react.glitch.me/delayed";
    // let url = "https://cyf-react.glitch.me/error";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then(data => {
        setBookings(data);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading...";
  if (error) return "Oops!";

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
      <div className="container">
        <BookingForm addBooking={addBooking} />
      </div>
    </div>
  );
};

export default Bookings;
