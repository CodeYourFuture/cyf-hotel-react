import React, { useState } from "react";
const NewCustomerForm = ({ handleNewCustomerSubmit }) => {
  const [newCustomer, setNewCustomer] = useState({
    id: 0,
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: 0,
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = event => {
    const updatedNewCustomer = {
      ...newCustomer,
      [event.target.name]: event.target.value
    };
    setNewCustomer(updatedNewCustomer);
  };

  return (
    <div className="container mt-5 mb-5">
      <h3>Add a new customer below:</h3>
      <form
        id="newCustomer"
        onSubmit={e => {
          e.preventDefault();
          handleNewCustomerSubmit(newCustomer);
        }}
      >
        <div className="form-group row">
          <label htmlFor="inputTitle" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              name="title"
              value={newCustomer.title}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputTitle"
              placeholder="Mr, Mrs, Doctor,...etc"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              name="firstName"
              value={newCustomer.firstName}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputFirstName"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputSurname" className="col-sm-2 col-form-label">
            Surname
          </label>
          <div className="col-sm-10">
            <input
              name="surname"
              value={newCustomer.surname}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="inputSurname"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              name="email"
              value={newCustomer.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputRoomID" className="col-sm-2 col-form-label">
            Room ID
          </label>
          <div className="col-sm-10">
            <input
              name="roomId"
              value={newCustomer.roomId}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="inputRoomID"
              placeholder="Room ID"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputCheckInDate" className="col-sm-2 col-form-label">
            Check-In Date
          </label>
          <div className="col-sm-10">
            <input
              name="checkInDate"
              value={newCustomer.checkInDate}
              onChange={handleChange}
              type="date"
              className="form-control"
              id="inputCheckInDate"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="inputCheckOutDate"
            className="col-sm-2 col-form-label"
          >
            Check-Out Date
          </label>
          <div className="col-sm-10">
            <input
              name="checkOutDate"
              value={newCustomer.checkOutDate}
              onChange={handleChange}
              type="date"
              className="form-control"
              id="inputCheckOutDate"
            />
          </div>
        </div>
        <button className="btn btn-success" type="submit">
          Add Customer
        </button>
      </form>
    </div>
  );
};

export default NewCustomerForm;
