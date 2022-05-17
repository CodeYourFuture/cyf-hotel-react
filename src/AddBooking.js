import React, { useState } from "react";
import FormInputField from "./FormInputField";

const AddBooking = ({ bookings, setBookings }) => {
  const submit = e => {
    e.preventDefault();
    const formElements = e.target.elements;
    const bookingsElements = {};
    for (let elements of formElements) {
      if (elements.name !== "") {
        console.log(elements.name);
        const elementsName = elements.name;
        const elementsValue = elements.value;
        bookingsElements[elementsName] = elementsValue;
      }
    }
    setBookings(() => bookings.concat(bookingsElements));
  };
  return (
    <form onSubmit={submit}>
      <label>
        Title:
        <FormInputField type={"text"} name={"title"} />
      </label>
      <br />
      <label>
        First Name:
        <FormInputField type={"text"} name={"firstName"} />
      </label>
      <br />
      <label>
        Surname:
        <FormInputField type={"text"} name={"surname"} />
      </label>
      <br />
      <label>
        Email:
        <FormInputField type={"email"} name={"email"} />
      </label>
      <br />
      <label>
        Room ID:
        <FormInputField type={"number"} name={"roomId"} />
      </label>
      <br />
      <label>
        Check In Date:
        <FormInputField type={"date"} name={"checkInDate"} />
      </label>
      <br />
      <label>
        Check Out Date:
        <FormInputField type={"date"} name={"checkOutDate"} />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default AddBooking;
