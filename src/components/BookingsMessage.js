import React from "react";
const BookingsMessage = () => {
  return (
    <p>
      {"There are bookings available for today's   " +
        new Date().toLocaleDateString()}
    </p>
  );
};
export default BookingsMessage;
