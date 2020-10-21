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
    <form onSubmit={submitHandeler}>
      <input
        type="text"
        value={id}
        className="form-control"
        onChange={event => setId(event.target.value)}
      />
      <input
        type="text"
        value={title}
        className="form-control"
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="text"
        value={firstName}
        className="form-control"
        onChange={event => setFirstName(event.target.value)}
      />
      <input
        type="text"
        value={surname}
        className="form-control"
        onChange={event => setSurname(event.target.value)}
      />
      <input
        type="email"
        value={email}
        className="form-control"
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="text"
        value={roomId}
        className="form-control"
        onChange={event => setRoomId(event.target.value)}
      />
      <input
        type="date"
        value={checkInDate}
        className="form-control"
        onChange={event => setCheckInDate(event.target.value)}
      />
      <input
        type="date"
        value={checkOutDate}
        className="form-control"
        onChange={event => setCheckOutDate(event.target.value)}
      />
      <input type="submit" className="btn btn-primary" value="Add" />
    </form>
  );
};

export default AddCustomers;
