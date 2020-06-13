import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import AddNew from "./AddNew";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [original, setOriginal] = useState();
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setOriginal(data);
      });
  }, []);
  if (!bookings) {
    return (
      <div>
        <img src="https://i.gifer.com/HJkK.gif" />
      </div>
    );
  }
  const updateData = newObj => {
    console.log(newObj);
    console.log("newobj");
    const newOne = {
      ...newObj,
      id: bookings.length + 1
    };
    setBookings([...bookings, newOne]);
  };
  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const searchBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
    );
    setBookings(searchBooking);
  };
  return (
    <div className="App-content">
      <div className="container">
        <AddNew updateData={updateData} setBookings={setBookings} />
        <Search
          search={search}
          bookings={bookings}
          setBookings={setBookings}
          original={original}
        />
        <SearchResults data={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
