import React, { useState, useEffect } from "react";
import "./BookingForm.css";
const BookingForm = (props) => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const createdBooking = { title, firstName, surname, email, roomId, checkInDate, checkOutDate };
    fetch("https://malkit-hotel-server.glitch.me/bookings/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(createdBooking) })
      .then((res) => {
        console.log("res", res);
        return res.json();
      })
      .then((data) => {
        props.setBookings(data);
      });
  }

  return (
    <div>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label className="booking-label">Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label className="booking-label">First Name</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label className="booking-label">Surname</label>
        <input type="text" required value={surname} onChange={(e) => setSurname(e.target.value)} />
        <label className="booking-label">Email</label>
        <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="booking-label">Room Id</label>
        <input type="text" required value={roomId} onChange={(e) => setRoomId(e.target.value)} />
        <label className="booking-label">Check In Date</label>
        <input type="date" required value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
        <label className="booking-label">Check Out Date</label>
        <input type="date" required value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
        <br></br>
        <br></br>
        <button className="btn btn-primary">Add Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
