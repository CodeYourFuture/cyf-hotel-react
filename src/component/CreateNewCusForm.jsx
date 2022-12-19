import React, { useState } from "react";

const CreateNewCusForm = ({ setBookings, id }) => {
  const [newCustomer, setnewCustomer] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setnewCustomer(preValue => {
      return {
        ...preValue,
        [name]: value
      };
    });
  }
  function whenClicked(event) {
    setBookings(pre => [...pre, newCustomer]);
    event.preventDefault();
    setnewCustomer("");
  }

  return (
    <form onSubmit={whenClicked}>
      <div className="form-group">
        <label htmlFor="customerTitle">Title</label>
        <input
          type="text"
          value={newCustomer.title}
          name="title"
          className="form-control"
          id="customerTitle"
          placeholder="Mr/Ms/Mrs"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={newCustomer.firstName}
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
          value={newCustomer.surname}
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
          value={newCustomer.email}
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
          value={newCustomer.roomId}
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
          value={newCustomer.checkInDate}
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
          value={newCustomer.checkOutDate}
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
  );
};

export default CreateNewCusForm;
