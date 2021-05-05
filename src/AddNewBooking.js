import React, { Fragment, useState } from "react";

const AddNewBooking = props => {
  const [addBooking, setAddBooking] = useState({
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  //handel chanfe event on textbox
  const handleInput = e => {
    const newBooking = { ...addBooking, [e.target.id]: e.target.value };
    console.log(newBooking);
    setAddBooking(newBooking);
  };

  // handel submit button
  const handleSubmit = event => {
    event.preventDefault();
    props.addBooking(addBooking);
    setAddBooking({
      title: "",
      firstName: "",
      surname: "",
      email: "",
      roomId: "",
      checkInDate: "",
      checkOutDate: ""
    });
  };

  return (
    <Fragment>
      <h2>Add new Booking</h2>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <label className="label">Title</label>
            <input
              className="addNewInput"
              type="text"
              id="title"
              value={addBooking.title}
              onChange={handleInput}
            />
            <br />
            <label>Name</label>
            <input
              className="addNewInput"
              type="text"
              id="firstName"
              value={addBooking.firstName}
              onChange={handleInput}
            />
            <br />
            <label>SureName</label>
            <input
              className="addNewInput"
              type="text"
              id="surname"
              value={addBooking.surname}
              onChange={handleInput}
            />
            <br />
            <label>Email</label>
            <input
              className="addNewInput"
              type="email"
              id="email"
              value={addBooking.email}
              onChange={handleInput}
            />{" "}
            <br />
            <label>Room ID</label>
            <input
              className="addNewInput"
              type="text"
              id="roomId"
              value={addBooking.roomId}
              onChange={handleInput}
            />
            <br />
            <label>checkInDate</label>
            <input
              className="addNewInput"
              type="date"
              id="checkInDate"
              value={addBooking.checkInDate}
              onChange={handleInput}
            />
            <br />
            <label>checkOutDate</label>
            <input
              className="addNewInput"
              type="date"
              id="checkOutDate"
              value={addBooking.checkOutDate}
              onChange={handleInput}
            />
            <br />
            <button className="addBtn">Add New Customer</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddNewBooking;
