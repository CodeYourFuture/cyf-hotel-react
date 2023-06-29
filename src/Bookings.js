import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./components/SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    title: "",
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
  };

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newBooking = {
      id: bookings.length + 1,
      ...formData,
    };

    setBookings([...bookings, newBooking]);

    setFormData({
      firstName: "",
      surname: "",
      email: "",
      title: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: "",
    });
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <>
            {bookings && <SearchResults results={bookings} />}
            <form onSubmit={handleFormSubmit}>
              <h3>Add a Booking</h3>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
              />
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleFormChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />

              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
              />

              <label htmlFor="roomId">Room ID:</label>
              <input
                type="text"
                id="roomId"
                name="roomId"
                value={formData.roomId}
                onChange={handleFormChange}
              />

              <label htmlFor="checkInDate">Check-in Date:</label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                value={formData.checkInDate}
                onChange={handleFormChange}
              />

              <label htmlFor="checkOutDate">Check-out Date:</label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                value={formData.checkOutDate}
                onChange={handleFormChange}
              />
              {/* Repeat the above code for the other input fields */}
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Bookings;
