import React, { useState } from "react";
const BookingForm = props => {
  return (
    <form
      className={`${props.showDisplay} lg-col-12 col-11 `}
      onSubmit={props.submitHandler}
    >
      <p className="lable lg-col-2">Title :</p>
      <input
        onChange={props.changeHandler}
        name="title"
        type="text"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">First Name:</p>
      <input
        onChange={props.changeHandler}
        name="firstName"
        type="text"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">Surname:</p>
      <input
        onChange={props.changeHandler}
        name="surname"
        type="text"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">Room Id:</p>
      <input
        onChange={props.changeHandler}
        name="roomId"
        type="number"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">CheckInDate:</p>
      <input
        onChange={props.changeHandler}
        name="checkInDate"
        type="date"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">CheckOutDate:</p>
      <input
        onChange={props.changeHandler}
        name="checkOutDate"
        type="date"
        className="lg-col-4 input"
      />
      <p className="lable lg-col-2">Email :</p>
      <input
        onChange={props.changeHandler}
        name="email"
        type="text"
        className="lg-col-4 input"
      />
      <button className="submit-form lg-col-2">Submit</button>
    </form>
  );
};

export default BookingForm;
