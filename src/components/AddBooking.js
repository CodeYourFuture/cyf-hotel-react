import React, { useState } from "react";

function AddBooking(props) {
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
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      email: email,
      firstName: firstName,
      id: roomId,
      roomId: roomId,
      surname: surname,
      title: title
    };
    props.addNewCustomer(newCustomer);
    setCheckInDate("");
    setCheckOutDate("");
    setEmail("");
    setFirstName("");
    setRoomId("");
    setSurname("");
    setTitle("");
  }

  return (
    <div className="row search-wrapper">
      <div className="col">
        <form className="form-group search-box">
          <label htmlFor="addCustomer">Add New Customer</label>
          <div className="search-row">
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              id="firstName"
              className="form-control"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <input
              type="text"
              id="surname"
              className="form-control"
              placeholder="Surname"
              value={surname}
              onChange={e => setSurname(e.target.value)}
            />
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="text"
              id="roomId"
              className="form-control"
              placeholder="RoomId"
              value={roomId}
              onChange={e => setRoomId(e.target.value)}
            />
            <input
              type="text"
              id="checkInDate"
              className="form-control"
              placeholder="Check in date"
              value={checkInDate}
              onChange={e => setCheckInDate(e.target.value)}
            />
            <input
              type="text"
              id="checkOutDate"
              className="form-control"
              placeholder="Check out date"
              value={checkOutDate}
              onChange={e => setCheckOutDate(e.target.value)}
            />
            <button onClick={handleSubmit} className="btn btn-primary">
              +New
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooking;
