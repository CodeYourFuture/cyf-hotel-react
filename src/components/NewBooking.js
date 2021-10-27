import React, { useState } from "react";

const dateFormat = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
};
function NewBooking(props) {
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState(0);
  const [checkInDate, setCheckInDate] = useState(dateFormat(new Date()));
  const [checkOutDate, setCheckOutDate] = useState(dateFormat(new Date()));
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
          onChange={event => handleChange(event)}
        />
      </div>

      <div>
        <label name="title">Customer Title</label>

        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={event => handleChange(event)}
        />
      </div>
      <div>
        <label name="username">First Name</label>

        <input
          type="text"
          name="username"
          placeholder="First Name"
          value={firstName}
          onChange={event => handleChange(event)}
        />
      </div>
      <div>
        <label name="lastname">Last Name</label>

        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={surname}
          onChange={event => handleChange(event)}
        />
      </div>
      <div>
        <label name="email">Customer's Email</label>

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={event => handleChange(event)}
        />
      </div>
      <div>
        <label name="roomid">Room id</label>

        <input
          type="number"
          name="roomid"
          placeholder="Roomid"
          value={roomId}
          onChange={event => handleChange()}
        />
      </div>

      <div>
        <label name="checkindate">CheckIn Date</label>

        <input
          type="date"
          name="checkindate"
          placeholder="checkindate"
          value={checkInDate}
          onChange={event => handleChange(event)}
        />
      </div>

      <div>
        <label name="checkoutdate">CheckOut Date</label>

        <input
          type="date"
          name="checkoutdate"
          placeholder="checkoutdate"
          value={checkOutDate}
          onChange={event => handleChange(event)}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default NewBooking;
