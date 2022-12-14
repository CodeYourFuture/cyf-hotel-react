import React, { useState } from "react";

function NewCustomerForm({ handleAddNewBooking }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log(name);

  function handleSubmit(event) {
    event.preventDefault();
    handleAddNewBooking(name, lastName);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleNameChange}
        value={name}
        type={"text"}
        placeholder="Add Name here"
      />
      <input
        onChange={handleLastNameChange}
        value={lastName}
        type={"text"}
        placeholder="Add Last Name here"
      />
      <button>Add booking</button>
    </form>
  );
}

export default NewCustomerForm;
