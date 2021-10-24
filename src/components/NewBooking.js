import React, { useState } from "react";

function NewBooking(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState(0);
  const [checkInDate, setCheckInDate] = useState(new Date().toLocaleString());
  const [checkOutDate, setCheckOutDate] = useState(new Date().toLocaleString());
  const [entry, setEntry] = useState({});

  function handleChange(event) {
    if (event.target.name === "username") {
      setFirstName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "roomid") {
      setRoomId(event.target.value);
    } else if (event.target.name === "customerid") {
      setId(event.target.value);
    } else if (event.target.name === "checkindate") {
      setCheckInDate(event.target.value);
    } else if (event.target.name === "checkoutdate") {
      setCheckOutDate(event.target.value);
    } else if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "lastname") {
      setSurName(event.target.value);
    }

    setEntry({
      id,
      title,
      firstName,
      surname,
      email,
      roomId,
      checkInDate,
      checkOutDate
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Sending data to server");

    //console.log(entry.customerId,entry.username,entry.lastName)
    props.formvals(entry);
  }

  return (
    <form className="newbooking" onSubmit={handleSubmit}>
      <h3>Enter New Booking </h3>
      <div>
        <label name="customerid">Customer id</label>

        <input
          type="number"
          name="customerid"
          placeholder="ID"
          value={id}
          onChange={handleChange}
        />
      </div>

      <div>
        <label name="title">Customer Title</label>

        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label name="username">First Name</label>

        <input
          type="text"
          name="username"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label name="lastname">Last Name</label>

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={surname}
          onChange={handleChange}
        />
      </div>
      <div>
        <label name="email">Customer's Email</label>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label name="roomid">Room id</label>

        <input
          type="number"
          name="roomid"
          placeholder="Roomid"
          value={roomId}
          onChange={handleChange}
        />
      </div>

      <div>
        <label name="checkindate">CheckIn Date</label>

        <input
          type="date"
          name="checkindate"
          placeholder="checkindate"
          value={checkInDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label name="checkoutdate">CheckOut Date</label>

        <input
          type="date"
          name="checkoutdate"
          placeholder="checkoutdate"
          value={checkOutDate}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewBooking;
