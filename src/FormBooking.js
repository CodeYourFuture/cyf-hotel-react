import React, { useState } from "react";

function FormBooking({ handleAddNewBooking }) {
  const [name, setName] = useState("");

  const handleNameChange = event => {
    console.log(event);
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddNewBooking(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        onChange={handleNameChange}
        value={name}
        type="text"
        id="title"
        className="title-class"
      />
      <button>ADD NEW</button>
    </form>
  );
}

export default FormBooking;
