import React, { useState } from "react";
const BookingForm = props => {
  const [data, setData] = useState({
    title: "",
    firstName: "",
    surname: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const submitHandler = event => {
    props.updateData(data);
    event.preventDefault();
  };

  const changeHandler = event => {
    const updateData = {
      ...data,
      [event.target.name]: event.target.value
    };
    setData(updateData);
  };

  return (
    <form className="form-inputs lg-col-11 col-11" onSubmit={submitHandler}>
      Title :
      <input
        onChange={changeHandler}
        name="title"
        type="text"
        className="lg-col-5 input"
      />
      First Name:
      <input
        onChange={changeHandler}
        name="firstName"
        type="text"
        className="lg-col-5 input"
      />
      Surname:
      <input
        onChange={changeHandler}
        name="surname"
        type="text"
        className="lg-col-5 input"
      />
      Room Id:
      <input
        onChange={changeHandler}
        name="roomId"
        type="number"
        className="lg-col-5 input"
      />
      CheckInDate:
      <input
        onChange={changeHandler}
        name="checkInDate"
        type="date"
        className="lg-col-4 input"
      />
      CheckOutDate:
      <input
        onChange={changeHandler}
        name="checkOutDate"
        type="date"
        className="lg-col-4 input"
      />
      <button className="submit-form lg-col-2">Submit</button>
    </form>
  );
};

export default BookingForm;
