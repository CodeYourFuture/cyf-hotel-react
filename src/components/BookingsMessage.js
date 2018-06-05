import React from "react";
const BookingsMessage = () => {
  return (
    <h4>
      {"There are bookings available for today   " +
        new Date().toLocaleDateString()}
    </h4>
  );
};
export default BookingsMessage;
