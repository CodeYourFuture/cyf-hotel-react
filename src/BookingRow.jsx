import React from "react";

const BookingRow = ({ booking, onClick, isSelected }) => {
  const calculateNumberOfNights = () => {
    const oneDay = 24 * 60 * 60 * 1000; 
    const checkInDate = new Date(booking.checkInDate);
    const checkOutDate = new Date(booking.checkOutDate);
    const nightCount = Math.round(Math.abs((checkOutDate - checkInDate) / oneDay));
    return nightCount;
  };

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
      <td>{calculateNumberOfNights()}</td>
    </tr>
  );
};

export default BookingRow;
