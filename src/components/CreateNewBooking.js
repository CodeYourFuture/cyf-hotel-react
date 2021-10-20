import React, { useState } from "react";

export default function CreateNewBooking({ setBookings }) {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  function handleChange(formChangeEvent) {
    if (formChangeEvent.target.name === "title") {
      setTitle(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "firstName") {
      setFirstName(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "surname") {
      setSurname(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "email") {
      setEmail(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "roomId") {
      setRoomId(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "checkInDate") {
      setCheckInDate(formChangeEvent.target.value);
    }
    if (formChangeEvent.target.name === "checkOutDate") {
      setCheckOutDate(formChangeEvent.target.value);
    }
  }

  function handleSubmitEvent(submitEvent) {
    submitEvent.preventDefault();
    const newCustomer = {
      id: firstName + surname, //TO-DO: WILL BE UNIQUE
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };
    setBookings(previous => previous.concat(newCustomer));
  }
  return (
    <section className="newCustomerSection">
      <h3>
        <span className="badge badge-success">Add New Customer</span>
      </h3>
      <form onSubmit={handleSubmitEvent}>
        <div className="form-group">
          <label htmlFor="customerTitle">Title</label>
          <input
            type="text"
            value={title}
            name="title"
            className="form-control"
            id="customerTitle"
            placeholder="Mr Ms Doctor etc"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="Enter First Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            value={surname}
            name="surname"
            className="form-control"
            id="surname"
            placeholder="Enter Surname"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Addresss</label>
          <input
            type="email"
            value={email}
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="roomId">Room Id</label>
          <input
            type="text"
            value={roomId}
            name="roomId"
            className="form-control"
            id="roomId"
            placeholder="Enter roomId"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkInDate">Check In Date</label>
          <input
            type="date"
            value={checkInDate}
            name="checkInDate"
            className="form-control"
            id="checkInDate"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOutDate">Check Out Date</label>
          <input
            type="date"
            value={checkOutDate}
            name="checkOutDate"
            className="form-control"
            id="checkOutDate"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
