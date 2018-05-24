import React from "react";

const BookingsMessage = () => {
  return (
    <p>There is Bookings availabile on {new Date().toLocaleDateString()}</p>
  );
};

export default BookingsMessage;
