import React, { useState } from "react";
// import { Form } from "react-bootstrap";
import Form from "./Form.js";

const NewBooking = () => {
  const titles = [
    "Mr",
    "Doctor",
    "Prince",
    "Dame",
    "Madam",
    "Professor",
    "Sir"
  ];
  return (
    <div>
      <form className="form-field">
        <div>
          <h4>New Booking</h4>
          <select>
            {titles.map((title, key) => {
              return <option key={key}>{title}</option>;
            })}
          </select>
        </div>
        {/* <Form
          label="Title"
          type="text"
          name="title"
          //   value={formValues.title}
          //   onChange={handleChange}
        /> */}
        <Form
          label="First name"
          type="text"
          name="firstName"
          //   value={formValues.firstName}
          //   onChange={handleChange}
        />
        <Form
          label="Surname"
          type="text"
          name="surname"
          //   value={formValues.surname}
          //   onChange={handleChange}
        />
        <Form
          label="Email address"
          type="text"
          name="email"
          //   value={formValues.email}
          //   onChange={handleChange}
        />
        <Form
          label="Room ID"
          type="number"
          name="roomId"
          //   value={formValues.roomId}
          //   onChange={handleChange}
        />
        <Form
          label="Check in date"
          type="date"
          name="checkInDate"
          //   value={formValues.checkInDate}
          //   onChange={handleChange}
        />
        <Form
          label="Check out date"
          type="date"
          name="checkOutDate"
          //   value={formValues.checkOutDate}
          //   onChange={handleChange}
        />
        <input
          className="form-field"
          type="submit"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
};

export default NewBooking;
