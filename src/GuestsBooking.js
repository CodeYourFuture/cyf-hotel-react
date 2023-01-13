import React from "react";

const GuestsBooking = () => {
  return (
    <div>
      <form method="POST" action="/guest/registration">
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="surName" placeholder="Last Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="roomID" placeholder="Room ID" />
        <input type="date" name="checkInDate" placeholder="Check in Date" />
        <input type="date" name="checkOutDate" placeholder="CHeck out Date" />
        <input type="submit" class="btn btn-primary" />
      </form>
    </div>
  );
};

export default GuestsBooking;
