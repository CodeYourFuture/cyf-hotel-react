import React, { useState, useEffect } from "react";
const AddingForm = ({ bookings, setBooking }) => {
  const [newBookings, setNewBooking] = useState({});
  function createNewBooking(event) {
    event.preventDefault();
    newBookings.id = bookings.length + 1;
    console.log(newBookings);
    console.log(Object.values(newBookings));
    if (Object.values(newBookings).length == 8) {
      setBooking(bookings.concat(newBookings));
      setNewBooking({});
    } else alert(`Please make sure that you enter a value in all the inputs`);
  }
  function handleInputChange(event) {
    const tempBooking = {
      ...newBookings,
      [event.target.name]: event.target.value
    };

    setNewBooking(tempBooking);
  }
  return (
    <form>
      <div className="form-group">
        <p>Adding a New Booking</p>
        <input
          type="text"
          name="title"
          value={newBookings.title || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the Title"
        />
        <br />
        <input
          type="text"
          name="firstName"
          value={newBookings.firstName || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the first name"
        />
        <br />

        <input
          type="text"
          name="surname"
          value={newBookings.surname || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the surname"
        />
        <br />

        <input
          type="email"
          name="email"
          value={newBookings.email || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the email"
        />

        <br />

        <input
          type="number"
          name="roomId"
          value={newBookings.roomId || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the room number"
        />
        <br />

        <input
          type="date"
          name="checkInDate"
          value={newBookings.checkInDate || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the check in date"
        />
        <br />

        <input
          type="date"
          name="checkOutDate"
          value={newBookings.checkOutDate || ""}
          onChange={handleInputChange}
          className="form-control"
          placeholder="Enter the check out date"
        />
        <br />

        <button className="btn btn-primary" onClick={createNewBooking}>
          Create a New Booking
        </button>
      </div>
    </form>
  );
};
export default AddingForm;
