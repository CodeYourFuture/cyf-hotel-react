import React, { useState } from "react";

const AddCustomers = props => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const submitHandeler = event => {
    event.preventDefault();
    const newCustomer = {
      id: id,
      title: title,
      firstName: firstName,
      surname: surname,
      email: email,
      roomId: roomId,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    };
    props.addingNew(newCustomer);

    setId("");
    setTitle("");
    setFirstName("");
    setSurname("");
    setEmail("");
    setRoomId("");
    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <form className="form" onSubmit={submitHandeler}>
      <label>Id</label>
      <input
        type="text"
        value={id}
        className="form-control"
        className="form-id"
        onChange={event => setId(event.target.value)}
      />
      <label>Title</label>
      <input
        type="text"
        value={title}
        className="form-control"
        className="title"
        onChange={event => setTitle(event.target.value)}
      />
      <label>first Name</label>
      <input
        type="text"
        value={firstName}
        className="form-control"
        className="firstName"
        onChange={event => setFirstName(event.target.value)}
      />
      <label>Surname</label>
      <input
        type="text"
        value={surname}
        className="form-control"
        className="surname"
        onChange={event => setSurname(event.target.value)}
      />
      <label>email</label>
      <input
        type="email"
        value={email}
        className="form-control"
        className="email"
        onChange={event => setEmail(event.target.value)}
      />
      <label>Room Id</label>
      <input
        type="text"
        value={roomId}
        className="form-control"
        className="roomId"
        onChange={event => setRoomId(event.target.value)}
      />
      <label>Check In Date</label>
      <input
        type="date"
        value={checkInDate}
        className="form-control"
        className="checkInDate"
        onChange={event => setCheckInDate(event.target.value)}
      />
      <label>Check out Date</label>
      <input
        type="date"
        value={checkOutDate}
        className="form-control"
        className="checkOutDate"
        onChange={event => setCheckOutDate(event.target.value)}
      />
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  );
};

export default AddCustomers;
