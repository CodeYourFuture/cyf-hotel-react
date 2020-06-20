import React, { useState } from "react";

function FormOfBooking(props) {
  const [bookingForm, setBookingForm] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const submitForm = event => {
    props.updateData(bookingForm);
    event.preventDefault();
  };

  const changeHandler = event => {
    const updateData = {
      ...bookingForm,
      [event.target.name]: event.target.value
    };
    setBookingForm(updateData);
    console.log(bookingForm);
  };

  return (
    <form className="form-booking row" onSubmit={submitForm}>
      Title
      <input
        name="title"
        type="text"
        className="lg-col-2 input"
        onChange={changeHandler}
      />
      Name
      <input
        name="name"
        type="text"
        className="lg-col-4 input"
        onChange={changeHandler}
      />
      Surname
      <input
        name="surname"
        type="text"
        className="lg-col-4 input"
        onChange={changeHandler}
      />
      Room Id
      <input
        name="roomId"
        type="number"
        className="lg-col-2 input"
        onChange={changeHandler}
      />
      CheckInDate
      <input
        name="checkInDate"
        type="date"
        className="lg-col-2 input"
        onChange={changeHandler}
      />
      CheckOutDate
      <input
        name="checkOutDate"
        type="date"
        className="lg-col-2 input"
        onChange={changeHandler}
      />
      <button className="lg-col-2 input">Submit</button>
    </form>
  );
}

export default FormOfBooking;
