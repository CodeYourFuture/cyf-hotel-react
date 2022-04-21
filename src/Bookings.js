import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import AddBooking from "./AddBooking.js";
//import fakeBookings from "./data/fakeBookings.json";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/delayed") // https://cyf-react.glitch.me/error
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          window.alert(data.error);
        } else {
          setBookings(data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const search = searchVal => {
    const filteredBookings = bookings.filter(
      ({ firstName, surname }) =>
        firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(filteredBookings);
  };

  const addBooking = ({
    id,
    title,
    firstName,
    surname,
    email,
    roomId,
    checkInDate,
    checkOutDate
  }) => {
    const concatBookings = bookings.concat({
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    });
    setBookings(concatBookings);
  };

  return bookings ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <AddBooking addBooking={addBooking} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  ) : (
    <>
      <span>Loading...</span>
    </>
  );
}
