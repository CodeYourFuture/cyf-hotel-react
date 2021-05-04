import React, { useState } from "react";

const NewBooking = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [id, setId] = useState(null);

  function handleSubmit(event) {
    const body = JSON.stringify({
      title,
      firstName,
      surname,
      email,
      checkInDate,
      checkOutDate
    });
    fetch(`http://localhost:3003/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
      .then(res => res.json())
      .then();
  }

  function handleUpdate() {
    const body = JSON.stringify({
      id,
      title,
      firstName,
      surname,
      email,
      checkInDate,
      checkOutDate
    });
    fetch(`http://localhost:3003/bookings/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body
    })
      .then(res => res.json())
      .then();
  }
  function handleIdChange(event) {
    setId(event.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </label>
        <label>
          FirstName:
          <input
            type="text"
            name="FirstName"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            name="Surname"
            value={surname}
            onChange={event => setSurname(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </label>

        <label>
          Check in Date:
          <input
            type="text"
            name="CheckInDate"
            value={checkInDate}
            onChange={event => setCheckInDate(event.target.value)}
          />
        </label>
        <label>
          Check Our Date:
          <input
            type="text"
            name="CheckOutDate"
            value={checkOutDate}
            onChange={event => setCheckOutDate(event.target.value)}
          />
        </label>
        <label>
          ID
          <input type="number" name="ID" value={id} onChange={handleIdChange} />
        </label>
        <input type="submit" value="Submit" />
        <button type="button" onClick={handleUpdate}>
          Update
        </button>
      </form>

      {JSON.stringify(handleSubmit)}
    </div>
  );
};

export default NewBooking;
