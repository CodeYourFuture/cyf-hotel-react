import React, { useState } from "react";

const NewBookingForm = () => {
  const [customerData, setCustomerData] = useState({
    id: "",
    firstName: "",
    surname: "",
    title: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  function handleChange(e) {
    const updatedCustomerData = {
      ...customerData,
      [e.target.name]: e.target.value
    };

    setCustomerData(updatedCustomerData);
  }
  console.log(customerData);
  return (
    <form className="m-5 p-5">
      <h3>New Booking Form</h3>
      <div className="row mb-2">
        <div className="form-group col-sm-2 mb-2">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-sm-3 mb-2">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-sm-3 mb-2">
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            className="form-control"
            id="surname"
            name="surname"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col mb-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-2">
          <label htmlFor="room-id">Room Id</label>
          <input type="number" className="form-control" id="room-id" />
        </div>
        <div className="form-group col">
          <label htmlFor="check-in">Check in date</label>
          <input
            type="date"
            className="form-control"
            id="check-in"
            name="checkInDate"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col">
          <label htmlFor="check-out">Check out date</label>
          <input
            type="date"
            className="form-control"
            id="check-out"
            name="checkOutDate"
            onChange={handleChange}
          />
        </div>
      </div>
    </form>
  );
};

export default NewBookingForm;
