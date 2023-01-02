import React, { useState } from "react";
import Bookings from "./Bookings";
import { nanoid } from "nanoid";

export default function CreateNewBookings({ setBookings }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newCustomer = {
      id: nanoid(),
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };
    // const newCustomerData = [...bookings, newCustomer]
    // setBookings=(newCustomerData)

    setBookings(prev => prev.concat(newCustomer));
    reset(setBookings);
  }
  return (
    <section className="newCustomerSection">
      <h3>
        <span className="badge badge-success">Add New Customer</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerTitle">Title</label>
          <input
            required
            type="text"
            value={title}
            name="title"
            className="form-control"
            id="customerTitle"
            placeholder="Mr Ms Doctor etc"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            value={firstName}
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">SurName</label>
          <input
            required
            type="text"
            value={surname}
            name="surname"
            className="form-control"
            id="surname"
            placeholder="Enter Surname"
            onChange={e => setSurname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Addresss</label>
          <input
            required
            type="email"
            value={email}
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomId">Room Id</label>
          <input
            required
            type="text"
            value={roomId}
            name="roomId"
            className="form-control"
            id="roomId"
            placeholder="Enter roomId"
            onChange={e => setRoomId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check In Date</label>
          <input
            required
            type="date"
            value={checkInDate}
            name="checkInDate"
            className="form-control"
            id="checkInDate"
            onChange={e => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check Out Date</label>
          <input
            required
            type="date"
            value={checkOutDate}
            name="checkOutDate"
            className="form-control"
            id="checkOutDate"
            onChange={e => setCheckOutDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
