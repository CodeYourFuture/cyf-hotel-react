import React from "react";

const BookingRow = ({ booking, onClick, isSelected }) => {
  return (
    <tr onClick={onClick} style={{ backgroundColor: isSelected ? "yellow" : "transparent" }}>
      <td>{booking.id}</td>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>{booking.checkInDate}</td>
      <td>{booking.checkOutDate}</td>
      <td>{booking.numberOfNights}</td>
    </tr>
  );
};

export default BookingRow;