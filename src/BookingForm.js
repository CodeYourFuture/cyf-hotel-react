import React, { useState } from "react";

function BookingForm(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputs, "inputs");
    const other = {
      id: Math.floor(Math.random() * 1000),
      roomId: props.bookings.length + 1
    };
    console.log({ other });
    setInputs(values => ({ ...values, ...other }));
    props.newBooking(inputs);
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Book-In Here</p>
      <label> title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={inputs.title || ""}
        onChange={handleChange}
        placeholder="title"
      />
      <label> Enter your first Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={inputs.firstName || ""}
        onChange={handleChange}
        placeholder="fisrt name"
      />
      <label> Enter your Surname:</label>
      <input
        type="text"
        id="surname"
        name="surname"
        value={inputs.surname || ""}
        onChange={handleChange}
        placeholder="surname"
      />
      <label> Enter your email:</label>
      <input
        type="text"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
        placeholder="email"
      />

      <input
        type="hidden"
        id="id"
        name="id"
        value={Math.floor(Math.random() * 1000)}
        onChange={handleChange}
        placeholder="id"
      />

      <label> Enter your checkInDate:</label>
      <input
        type="date"
        id="checkInDate"
        name="checkInDate"
        value={inputs.checkInDate || ""}
        onChange={handleChange}
        placeholder="checkInDate"
      />

      <label> choose your checkoutDate:</label>
      <input
        type="date"
        id="checkOutDate"
        name="checkOutDate"
        value={inputs.checkOutDate || ""}
        placeholder="checkOutDate"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
