import React, { useState } from "react";

const CreateBooking = () => {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  return (
    <div>
      <input
        placeholder="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <input
        placeholder="surname"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="roomId"
        value={roomId}
        onChange={(event) => setRoomId(event.target.value)}
      />
      <input
        placeholder="checkInDate"
        value={checkInDate}
        onChange={(event) => setCheckInDate(event.target.value)}
      />
      <input
        placeholder="checkOutDate"
        value={checkOutDate}
        onChange={(event) => setCheckOutDate(event.target.value)}
      />
      <button
        onClick={() => {
          fetch("https://hotel-server-elahe.glitch.me/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate,
            }),
          });
        }}
      >
        submit
      </button>
    </div>
  );
};

export default CreateBooking;
