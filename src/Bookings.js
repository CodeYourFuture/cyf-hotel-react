import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);
  const [newBooking, setNewBooking] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
  });

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching bookings data");
        }
        return res.json();
      })
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter((row) => {
        return (
          row.firstName.includes(searchVal) || row.surname.includes(searchVal)
        );
      })
    );
  };


  const handleChange = (e) => {
    setNewBooking({ ...newBooking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, newBooking]);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <SearchResults results={bookings} />
        )}
        <form className="new-booking">
          <h4>Add a New Booking</h4>
          <input
            placeholder="Title"
            name="title"
            value={newBooking.title}
            onChange={handleChange}
          ></input>
          <input
            placeholder="First Name"
            name="firstName"
            value={newBooking.firstName}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Surname"
            name="surname"
            value={newBooking.surname}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Email"
            name="email"
            value={newBooking.email}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Room Id"
            name="roomId"
            value={newBooking.roomId}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Check In Date"
            name="checkInDate"
            value={newBooking.checkInDate}
            onChange={handleChange}
          ></input>
          <input
            placeholder="Check Out Date"
            name="checkOutDate"
            value={newBooking.checkOutDate}
            onChange={handleChange}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Bookings;
